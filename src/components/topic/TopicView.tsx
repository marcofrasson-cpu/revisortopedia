import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import type { SectionKey, Topic } from "../../types/topic";
import { SECTIONS } from "../../types/topic";
import { locate, neighbors } from "../../content/registry";
import { useUserState } from "../../store/useUserState";
import { cx, Eyebrow } from "../../ui/primitives";
import {
  IconBookmark,
  IconBookmarkFilled,
  IconChevronLeft,
  IconChevronRight,
} from "../../ui/icons";
import FigurePanel from "./FigurePanel";
import type { FocusedFigure, VariantOption } from "./FigurePanel";
import { altFor, captionFor } from "./figureMeta";
import SectionRail from "./SectionRail";
import OverviewSection from "./sections/OverviewSection";
import AnatomySection from "./sections/AnatomySection";
import ClassificationSection from "./sections/ClassificationSection";
import IndicationsSection from "./sections/IndicationsSection";
import ApproachesSection from "./sections/ApproachesSection";
import TechniqueSection from "./sections/TechniqueSection";
import PostopSection from "./sections/PostopSection";
import ComplicationsSection from "./sections/ComplicationsSection";
import EvidenceSection from "./sections/EvidenceSection";
import PearlsSection from "./sections/PearlsSection";

function hasContent(t: Topic, k: SectionKey): boolean {
  switch (k) {
    case "overview":
      return !!t.overview.trim();
    case "anatomy":
      return !!t.anatomy.text.trim() || t.anatomy.figureIds.length > 0;
    case "classification":
      return t.classification.length > 0;
    case "indications":
      return (
        t.indications.operative.length + t.indications.nonOperative.length > 0 ||
        !!t.indications.decisionNotes.trim()
      );
    case "approaches":
      return t.approaches.length > 0;
    case "technique":
      return t.technique.length > 0;
    case "postop":
      return !!t.postop.immobilization.trim() || t.postop.rehab.length > 0;
    case "complications":
      return t.complications.length > 0;
    case "evidence":
      return t.evidence.length > 0;
    case "pearls":
      return t.pearls.length + t.pitfalls.length > 0;
  }
}

function classificationFocus(t: Topic): FocusedFigure | null {
  const sys = t.classification[0];
  if (!sys) return null;
  const first = sys.types.find((ty) => ty.figureId);
  if (!first?.figureId) return null;
  const variants: VariantOption[] = sys.types
    .filter((ty) => ty.figureId)
    .map((ty) => ({ value: ty.figureVariant ?? ty.code, label: ty.code }));
  return {
    figureId: first.figureId,
    variant: first.figureVariant,
    caption: captionFor(t, first.figureId, sys.name, first.figureVariant),
    alt: altFor(t, first.figureId, sys.name, first.figureVariant),
    eyebrow: sys.name,
    variants,
  };
}

function defaultFocus(t: Topic, k: SectionKey): FocusedFigure | null {
  const anat = t.anatomy.figureIds[0];
  const mk = (id?: string, extra: Partial<FocusedFigure> = {}): FocusedFigure | null =>
    id
      ? { figureId: id, caption: captionFor(t, id, id), alt: altFor(t, id), ...extra }
      : null;

  switch (k) {
    case "overview":
      return mk(anat, { eyebrow: "Referência anatômica" });
    case "anatomy":
      return mk(anat, { eyebrow: "Anatomia" });
    case "classification":
      return classificationFocus(t) ?? mk(anat);
    case "indications":
      return mk(t.anatomy.figureIds.includes("ankle-ring") ? "ankle-ring" : anat, {
        eyebrow: "Estabilidade do anel",
      });
    case "approaches": {
      const a = t.approaches.find((x) => x.figureId);
      return a?.figureId
        ? { figureId: a.figureId, caption: a.name, alt: a.name, eyebrow: "Via de acesso" }
        : mk(anat);
    }
    case "technique":
      // Owned by the Stepper while active — start on step 1 as a placeholder.
      {
        const s = t.technique[0];
        return s?.figureId
          ? {
              figureId: s.figureId,
              variant: s.figureVariant,
              activeStep: s.n,
              caption: `Passo ${s.n} · ${s.title}`,
              alt: s.title,
              eyebrow: "Técnica",
            }
          : mk(anat);
      }
    case "postop":
      return mk(anat, { eyebrow: "Reabilitação" });
    case "complications":
      return mk(anat, { eyebrow: "Complicações" });
    case "pearls":
      return mk(anat, { eyebrow: "Síntese" });
    case "evidence":
      return null;
  }
}

export default function TopicView({ topic }: { topic: Topic }) {
  const visible = useMemo(
    () => SECTIONS.map((s) => s.key).filter((k) => hasContent(topic, k)),
    [topic],
  );

  const [active, setActive] = useState<SectionKey>(visible[0] ?? "overview");
  const [focused, setFocused] = useState<FocusedFigure | null>(() =>
    defaultFocus(topic, visible[0] ?? "overview"),
  );
  const contentRef = useRef<HTMLDivElement>(null);

  const bookmarks = useUserState((s) => s.bookmarks);
  const toggleBookmark = useUserState((s) => s.toggleBookmark);
  const markRead = useUserState((s) => s.markRead);
  const marked = bookmarks.includes(topic.slug);

  const handleFocus = useCallback((f: FocusedFigure | null) => setFocused(f), []);

  // Reset the sticky panel to a sensible default when the active section
  // changes — except for Technique, which the Stepper drives itself.
  useEffect(() => {
    if (active !== "technique") setFocused(defaultFocus(topic, active));
    markRead(topic.slug, active);
  }, [active, topic, markRead]);

  // Scroll-spy over the section wrappers.
  useEffect(() => {
    const root = contentRef.current;
    if (!root) return;
    const els = visible
      .map((k) => root.querySelector<HTMLElement>(`#sec-${k}`))
      .filter((el): el is HTMLElement => Boolean(el));
    if (els.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const inView = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (inView[0]) {
          const key = inView[0].target.id.replace("sec-", "") as SectionKey;
          setActive(key);
        }
      },
      { rootMargin: "-28% 0px -60% 0px", threshold: 0 },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [visible]);

  const region = locate(topic.slug);
  const { prev, next } = neighbors(topic.slug);

  const sectionNode: Record<SectionKey, ReactNode> = {
    overview: <OverviewSection topic={topic} />,
    anatomy: <AnatomySection topic={topic} onFocus={handleFocus} />,
    classification: <ClassificationSection topic={topic} onFocus={handleFocus} />,
    indications: <IndicationsSection topic={topic} />,
    approaches: <ApproachesSection topic={topic} onFocus={handleFocus} />,
    technique: (
      <TechniqueSection topic={topic} onFocus={handleFocus} active={active === "technique"} />
    ),
    postop: <PostopSection topic={topic} />,
    complications: <ComplicationsSection topic={topic} />,
    evidence: <EvidenceSection topic={topic} />,
    pearls: <PearlsSection topic={topic} />,
  };

  return (
    <div className="mx-auto max-w-6xl px-4 pb-20 pt-6 sm:px-6 lg:px-8">
      {/* Header */}
      <header>
        <div className="flex items-start justify-between gap-4">
          <div>
            {region && (
              <Eyebrow>
                <Link
                  to={`/regiao/${region.regionId}`}
                  className="transition-colors hover:text-teal"
                >
                  {region.regionTitle}
                </Link>
                <span className="mx-1.5 text-line-strong">/</span>
                {topic.bone}
              </Eyebrow>
            )}
            <h1 className="mt-2 max-w-3xl font-display text-[2.1rem] leading-[1.06] text-ink sm:text-[2.6rem]">
              {topic.title}
            </h1>
            {topic.subtitle && (
              <p className="mt-2 max-w-2xl text-[1.02rem] leading-relaxed text-ink-soft">
                {topic.subtitle}
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={() => toggleBookmark(topic.slug)}
            aria-pressed={marked}
            aria-label={marked ? "Remover dos salvos" : "Salvar tópico"}
            className={cx(
              "mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border transition-colors",
              marked
                ? "border-teal/50 bg-teal-tint text-teal-deep"
                : "border-line text-muted hover:border-line-strong hover:text-ink",
            )}
          >
            {marked ? (
              <IconBookmarkFilled className="h-5 w-5" />
            ) : (
              <IconBookmark className="h-5 w-5" />
            )}
          </button>
        </div>

        {topic.keyFacts.length > 0 && (
          <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
            {topic.keyFacts.map((f) => (
              <div key={f.label} className="bg-surface px-4 py-3">
                <dt className="eyebrow">{f.label}</dt>
                <dd className="mt-1 text-[0.92rem] font-medium leading-snug text-ink">
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        )}
      </header>

      <SectionRail visible={visible} active={active} />

      <div
        className={cx(
          "lg:gap-10",
          // Reserve the figure column only when the active section has a
          // figure — figure-less sections (e.g. evidence) reclaim the space.
          focused?.figureId && "lg:grid lg:grid-cols-[minmax(0,1fr)_auto]",
        )}
      >
        <div ref={contentRef} className="lg:max-w-[760px]">
          {visible.map((k) => (
            <section
              id={`sec-${k}`}
              key={k}
              className="scroll-mt-28 border-t border-line/70 pt-12 mt-12 first:mt-0 first:border-0 first:pt-0"
            >
              {sectionNode[k]}
            </section>
          ))}

          {/* prev / next */}
          <nav className="mt-14 grid gap-3 border-t border-line pt-6 sm:grid-cols-2">
            {prev ? (
              <Link
                to={`/topico/${prev.slug}`}
                className="panel group flex items-center gap-3 px-4 py-3 transition-colors hover:border-line-strong"
              >
                <IconChevronLeft className="h-4 w-4 text-muted" />
                <span>
                  <span className="eyebrow">Anterior</span>
                  <span className="block text-[0.9rem] font-medium text-ink">{prev.title}</span>
                </span>
              </Link>
            ) : (
              <span />
            )}
            {next && (
              <Link
                to={`/topico/${next.slug}`}
                className="panel group flex items-center justify-end gap-3 px-4 py-3 text-right transition-colors hover:border-line-strong sm:col-start-2"
              >
                <span>
                  <span className="eyebrow">Próximo</span>
                  <span className="block text-[0.9rem] font-medium text-ink">{next.title}</span>
                </span>
                <IconChevronRight className="h-4 w-4 text-muted" />
              </Link>
            )}
          </nav>
        </div>

        {/* Sticky figure panel — desktop only, hidden when the section has no figure */}
        {focused?.figureId && (
        <aside className="hidden lg:block lg:w-[350px]">
          <div className="sticky top-24">
            <FigurePanel
              figureId={focused?.figureId}
              variant={focused?.variant}
              activeStep={focused?.activeStep}
              caption={focused?.caption}
              alt={focused?.alt}
              eyebrow={focused?.eyebrow}
              variants={focused?.variants}
              onVariant={(v) =>
                setFocused((f) =>
                  f
                    ? {
                        ...f,
                        variant: v,
                        caption: captionFor(topic, f.figureId, f.caption ?? "", v),
                        alt: altFor(topic, f.figureId, f.alt ?? "", v),
                      }
                    : f,
                )
              }
            />
            <p className="mt-3 px-1 text-[0.72rem] leading-relaxed text-muted">
              Esquemas originais, didáticos — não substituem imagem radiográfica real.
            </p>
          </div>
        </aside>
        )}
      </div>
    </div>
  );
}
