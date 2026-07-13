import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import TopicView from "../components/topic/TopicView";
import { getTopic, locate } from "../content/registry";
import { useUserState } from "../store/useUserState";
import { Eyebrow, StatusDot } from "../ui/primitives";
import { IconArrowRight, IconChevronLeft, IconSearch } from "../ui/icons";

const openSearch = () => window.dispatchEvent(new Event("rt:open-search"));

export default function TopicPage() {
  const { slug = "" } = useParams();
  const topic = getTopic(slug);
  const visit = useUserState((s) => s.visit);

  useEffect(() => {
    if (topic) visit(slug);
  }, [topic, slug, visit]);

  if (topic) return <TopicView key={topic.slug} topic={topic} />;

  // Tópico referenciado no framework, porém ainda sem conteúdo.
  const flat = locate(slug);
  const title = flat?.title ?? "Tópico";

  return (
    <div className="mx-auto grid min-h-[70dvh] max-w-2xl place-items-center px-6 py-16 text-center">
      <div>
        <Eyebrow className="flex items-center justify-center gap-2">
          <StatusDot status="planned" />
          Em preparo
        </Eyebrow>

        <h1 className="mt-4 font-display text-[2rem] text-ink">{title}</h1>
        <p className="mx-auto mt-3 max-w-md text-[0.95rem] leading-relaxed text-ink-soft">
          Este tópico já faz parte do framework, mas seu conteúdo — anatomia,
          classificação, técnica passo a passo e evidência — ainda está sendo
          redigido e revisado.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {flat ? (
            <Link
              to={`/regiao/${flat.regionId}`}
              className="inline-flex items-center gap-2 rounded-lg bg-teal px-4 py-2.5 text-[0.9rem] font-medium text-surface transition-colors hover:bg-teal-deep"
            >
              <IconChevronLeft className="h-4 w-4" />
              {flat.regionTitle}
            </Link>
          ) : (
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-lg bg-teal px-4 py-2.5 text-[0.9rem] font-medium text-surface transition-colors hover:bg-teal-deep"
            >
              Ir para o início
              <IconArrowRight className="h-4 w-4" />
            </Link>
          )}
          <button
            type="button"
            onClick={openSearch}
            className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2.5 text-[0.9rem] font-medium text-ink-soft transition-colors hover:bg-surface-2"
          >
            <IconSearch className="h-4 w-4" />
            Buscar outro tópico
          </button>
        </div>
      </div>
    </div>
  );
}
