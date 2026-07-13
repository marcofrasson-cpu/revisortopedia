import { Link, useParams } from "react-router-dom";
import type { TopicRef } from "../types/topic";
import { allRegions, effectiveStatus } from "../content/registry";
import { Eyebrow, StatusDot } from "../ui/primitives";
import { IconArrowRight, IconChevronRight } from "../ui/icons";

function TopicCard({ ref }: { ref: TopicRef }) {
  const status = effectiveStatus(ref.slug, ref.status);
  const navigable = status !== "planned";
  const statusLabel =
    status === "complete" ? "Completo" : status === "stub" ? "Esboço" : "Planejado";

  const body = (
    <>
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-[1rem] font-medium leading-snug text-ink">{ref.title}</h3>
        <StatusDot status={status} />
      </div>
      <div className="mt-3 flex items-center justify-between">
        <span className="eyebrow text-[0.6rem]">{statusLabel}</span>
        {navigable && (
          <IconArrowRight className="h-4 w-4 text-muted transition-all group-hover:translate-x-0.5 group-hover:text-teal" />
        )}
      </div>
    </>
  );

  if (!navigable) {
    return (
      <div
        aria-disabled="true"
        title="Em preparo"
        className="panel cursor-default p-4 opacity-55"
      >
        {body}
      </div>
    );
  }

  return (
    <Link
      to={`/topico/${ref.slug}`}
      className="group panel block p-4 transition-all hover:-translate-y-0.5 hover:border-line-strong"
    >
      {body}
    </Link>
  );
}

export default function RegionPage() {
  const { regionId } = useParams();
  const region = allRegions.find((r) => r.id === regionId);

  if (!region) {
    return (
      <div className="mx-auto grid min-h-[70dvh] max-w-xl place-items-center px-6 text-center">
        <div>
          <Eyebrow className="justify-center">Região não encontrada</Eyebrow>
          <h1 className="mt-3 font-display text-[1.9rem] text-ink">Região indisponível</h1>
          <p className="mx-auto mt-3 max-w-sm text-[0.95rem] text-ink-soft">
            Não há uma região com este identificador no framework.
          </p>
          <Link
            to="/"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-teal px-4 py-2.5 text-[0.9rem] font-medium text-surface transition-colors hover:bg-teal-deep"
          >
            Ver todas as regiões
            <IconArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    );
  }

  const total = region.groups.reduce((n, g) => n + g.topics.length, 0);
  const complete = region.groups.reduce(
    (n, g) => n + g.topics.filter((t) => effectiveStatus(t.slug, t.status) === "complete").length,
    0,
  );

  return (
    <div className="mx-auto max-w-4xl px-5 py-8 sm:px-8 sm:py-12">
      {/* Cabeçalho da região */}
      <header className="border-b border-line pb-8">
        <nav aria-label="Trilha" className="mb-4 flex items-center gap-1.5 text-[0.8rem] text-muted">
          <Link to="/" className="transition-colors hover:text-teal">
            Início
          </Link>
          <IconChevronRight className="h-3.5 w-3.5 text-line-strong" aria-hidden="true" />
          <span className="text-ink-soft">{region.title}</span>
        </nav>

        <div className="flex items-start gap-3">
          <span className="code mt-1 shrink-0 rounded-md bg-teal-tint px-2 py-1 text-[0.7rem] tracking-wider text-teal-deep">
            {region.tag}
          </span>
          <div className="min-w-0">
            <h1 className="font-display text-[2.1rem] leading-tight text-ink">{region.title}</h1>
            <p className="mt-2 max-w-2xl text-[0.98rem] leading-relaxed text-ink-soft">
              {region.blurb}
            </p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-x-6 gap-y-1 text-[0.8rem] text-muted">
          <span>
            <span className="code text-ink-soft">{region.groups.length}</span> grupos
          </span>
          <span>
            <span className="code text-ink-soft">{total}</span> tópicos
          </span>
          <span>
            <span className="code text-teal-deep">{complete}</span> completos
          </span>
        </div>
      </header>

      {/* Grupos + tópicos */}
      <div className="mt-10 space-y-10">
        {region.groups.map((group) => (
          <section key={group.id}>
            <div className="mb-4 flex items-center gap-3">
              <h2 className="text-[1.25rem] text-ink">{group.title}</h2>
              <span className="rule flex-1" />
              <span className="code text-[0.72rem] text-muted">{group.topics.length}</span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {group.topics.map((t) => (
                <TopicCard key={t.slug} ref={t} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
