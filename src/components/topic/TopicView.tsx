import { useEffect, useMemo, useRef, useState } from "react";
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

export default function TopicView({ topic }: { topic: Topic }) {
  const visible = useMemo(
    () => SECTIONS.map((s) => s.key).filter((k) => hasContent(topic, k)),
    [topic],
  );

  const [active, setActive] = useState<SectionKey>(visible[0] ?? "overview");
  const contentRef = useRef<HTMLDivElement>(null);

  const bookmarks = useUserState((s) => s.bookmarks);
  const toggleBookmark = useUserState((s) => s.toggleBookmark);
  const markRead = useUserState((s) => s.markRead);
  const marked = bookmarks.includes(topic.slug);

  useEffect(() => {
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
    anatomy: <AnatomySection topic={topic} />,
    classification: <ClassificationSection topic={topic} />,
    indications: <IndicationsSection topic={topic} />,
    approaches: <ApproachesSection topic={topic} />,
    technique: <TechniqueSection topic={topic} />,
    postop: <PostopSection topic={topic} />,
    complications: <ComplicationsSection topic={topic} />,
    evidence: <EvidenceSection topic={topic} />,
    pearls: <PearlsSection topic={topic} />,
  };

  return (
    <div className="mx-auto max-w-7xl px-4 pb-20 pt-6 sm:px-6 lg:px-8">
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

      <div ref={contentRef} className="mx-auto max-w-6xl">
        {visible.map((k) => (
          <section
            id={`sec-${k}`}
            key={k}
            className="mt-16 scroll-mt-28 first:mt-0"
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
    </div>
  );
}
