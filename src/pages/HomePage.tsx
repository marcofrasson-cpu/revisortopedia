import { useRef } from "react";
import { Link } from "react-router-dom";
import { allRegions, effectiveStatus, locate, stats } from "../content/registry";
import { useUserState } from "../store/useUserState";
import { scrollBehavior } from "../lib/motion";
import { Eyebrow, StatusDot } from "../ui/primitives";
import { IconArrowRight, IconLayers, IconChevronRight } from "../ui/icons";

function RegionCard({ regionId }: { regionId: string }) {
  const region = allRegions.find((r) => r.id === regionId)!;
  const total = region.groups.reduce((n, g) => n + g.topics.length, 0);
  const complete = region.groups.reduce(
    (n, g) => n + g.topics.filter((t) => effectiveStatus(t.slug, t.status) === "complete").length,
    0,
  );
  return (
    <Link
      to={`/regiao/${region.id}`}
      className="group panel flex flex-col p-5 transition-all hover:-translate-y-0.5 hover:border-line-strong"
    >
      <div className="flex items-center justify-between">
        <span className="code rounded-md bg-teal-tint px-2 py-0.5 text-[0.66rem] tracking-wider text-teal-deep">
          {region.tag}
        </span>
        <IconArrowRight className="h-4 w-4 text-muted transition-all group-hover:translate-x-0.5 group-hover:text-teal" />
      </div>
      <h3 className="mt-3 font-display text-[1.2rem] text-ink">{region.title}</h3>
      <p className="mt-1.5 line-clamp-3 flex-1 text-[0.86rem] leading-relaxed text-muted">
        {region.blurb}
      </p>
      <div className="mt-4 flex items-center gap-3 text-[0.72rem] text-muted">
        <span className="code">{total} tópicos</span>
        {complete > 0 && (
          <span className="flex items-center gap-1">
            <StatusDot status="complete" />
            <span className="code text-teal-deep">{complete}</span>
          </span>
        )}
      </div>
    </Link>
  );
}

export default function HomePage() {
  const regionsRef = useRef<HTMLDivElement>(null);
  const lastRead = useUserState((s) => s.lastRead);

  const resumeFlat = lastRead ? locate(lastRead.slug) : undefined;
  const coverage = stats.topicsPlanned
    ? Math.round((stats.topicsComplete / stats.topicsPlanned) * 100)
    : 0;

  const scrollToRegions = () =>
    regionsRef.current?.scrollIntoView({ behavior: scrollBehavior(), block: "start" });

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* HERO */}
      <section className="py-8 sm:py-10 lg:py-12">
        <div className="max-w-5xl min-w-0">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <Eyebrow className="shrink-0">Referência ortopédica · pt-BR</Eyebrow>
            <span aria-hidden="true" className="text-[0.72rem] text-line-strong">·</span>
            <span className="code shrink-0 text-[0.68rem] text-muted">
              {stats.topicsComplete} / {stats.topicsPlanned} completos
            </span>
          </div>

          <h1 className="mt-5 max-w-[22ch] font-display text-[2.45rem] leading-[1.05] text-ink sm:text-[2.9rem] lg:text-[3.2rem]">
            Manual de trauma ortopédico{" "}
            <span className="text-teal-deep">baseado em evidências</span>.
          </h1>
          <p className="mt-5 max-w-3xl text-[1rem] leading-relaxed text-ink-soft">
            Anatomia, classificação, indicações, vias de acesso e técnica passo a
            passo — com evidência clássica e atual referenciada. Preciso, calmo e
            disponível offline.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={scrollToRegions}
              className="inline-flex items-center gap-2 rounded-lg bg-teal px-5 py-3 text-[0.92rem] font-medium text-surface shadow-panel transition-colors hover:bg-teal-deep"
            >
              <IconLayers className="h-4 w-4" />
              Explorar regiões
            </button>
            <Link
              to="/estudo"
              className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface/60 px-5 py-3 text-[0.92rem] font-medium text-ink-soft transition-colors hover:border-teal/50 hover:text-teal-deep"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-teal" />
              Modo estudo
            </Link>
          </div>

          {/* Continuar lendo */}
          {resumeFlat && (
            <Link
              to={`/topico/${resumeFlat.slug}`}
              className="group mt-7 inline-flex max-w-full items-center gap-3 text-left"
            >
              <span className="eyebrow shrink-0">Retomar</span>
              <span className="min-w-0 truncate text-[0.88rem] text-ink">
                {resumeFlat.title}
              </span>
              <IconChevronRight className="h-4 w-4 shrink-0 text-muted transition-all group-hover:translate-x-0.5 group-hover:text-teal" />
            </Link>
          )}
        </div>
      </section>

      {/* Faixa de estatísticas */}
      <section
        aria-label="Cobertura do conteúdo"
        className="py-5 sm:py-6"
      >
        <dl className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
          {[
            {
              n: stats.regions,
              label: "Regiões anatômicas",
              detail: "Mapa topográfico",
            },
            {
              n: stats.topicsPlanned,
              label: "Tópicos no framework",
              detail: "Escopo editorial",
            },
            {
              n: stats.topicsComplete,
              label: "Tópicos completos",
              detail: `${coverage}% da base`,
              progress: coverage,
            },
          ].map((metric) => (
            <div
              key={metric.label}
              className={`panel relative min-h-[124px] overflow-hidden p-4 sm:p-5 ${
                metric.progress !== undefined ? "border-teal/40" : ""
              }`}
            >
              <span
                aria-hidden="true"
                className={`absolute inset-x-0 top-0 h-0.5 ${
                  metric.progress !== undefined ? "bg-teal" : "bg-line-strong"
                }`}
              />
              <dt className="eyebrow text-[0.58rem] sm:text-[0.62rem]">
                {metric.label}
              </dt>
              <dd className="mt-4 flex items-end justify-between gap-3">
                <span className="font-display text-[2.45rem] leading-none text-ink sm:text-[2.7rem]">
                  {metric.n}
                </span>
                <span className="code pb-1 text-right text-[0.64rem] text-muted">
                  {metric.detail}
                </span>
              </dd>
              {metric.progress !== undefined && (
                <div
                  className="mt-4 h-1 overflow-hidden rounded-full bg-surface-2"
                  role="progressbar"
                  aria-label="Cobertura dos tópicos"
                  aria-valuenow={metric.progress}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="h-full rounded-full bg-teal"
                    style={{ width: `${metric.progress}%` }}
                  />
                </div>
              )}
            </div>
          ))}
        </dl>
      </section>

      {/* Grade de regiões */}
      <section ref={regionsRef} className="scroll-mt-24 py-10 sm:py-12">
        <div className="mb-6 flex items-baseline gap-3">
          <h2 className="font-display text-[1.7rem] text-ink">Regiões</h2>
          <span className="code text-[0.68rem] text-muted">{stats.regions} topografias</span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {allRegions.map((r) => (
            <RegionCard key={r.id} regionId={r.id} />
          ))}
        </div>
      </section>

      <footer className="py-8 text-center text-[0.78rem] text-muted">
        Revisortopedia · referência de estudo · não substitui julgamento clínico
        individualizado.
      </footer>
    </div>
  );
}
