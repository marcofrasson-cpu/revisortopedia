import { useRef } from "react";
import { Link } from "react-router-dom";
import { allRegions, effectiveStatus, getTopic, locate, stats } from "../content/registry";
import { useUserState } from "../store/useUserState";
import { Eyebrow, StatusDot } from "../ui/primitives";
import { IconArrowRight, IconLayers, IconChevronRight } from "../ui/icons";

const FEATURED_SLUG = "fratura-maleolar-tornozelo";

/* Elemento de assinatura: esquema original da pinça tibiofibular (mortise) do
   tornozelo, com traço de fratura de Weber B que se desenha ao carregar. */
function MortiseFigure() {
  return (
    <svg
      viewBox="0 0 260 300"
      className="h-full w-full text-teal"
      fill="none"
      role="img"
      aria-label="Esquema da articulação do tornozelo com traço de fratura maleolar"
    >
      {/* Tíbia (medial) */}
      <path
        d="M96 20 L96 150 Q96 176 84 196 L78 214 Q70 228 84 236 L104 236 Q112 224 110 206 L110 150 L110 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Fíbula (lateral) */}
      <path
        d="M170 24 L166 150 Q164 186 172 214 L176 232 Q180 244 170 248 L156 248 Q150 236 152 214 L154 150 L156 24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Tálus / domo, encaixado na pinça */}
      <path
        d="M86 252 Q90 244 112 242 L150 242 Q168 244 172 254 Q176 268 158 276 L104 276 Q82 270 86 252 Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        className="opacity-90"
      />
      {/* Sindesmose — hachuras tibiofibulares */}
      <g className="text-teal-deep" stroke="currentColor" strokeWidth="1.3" opacity="0.65">
        <path d="M112 176 L150 182" />
        <path d="M112 190 L150 196" />
        <path d="M113 204 L149 210" />
      </g>
      {/* Cota de espaço claro medial (âmbar = medida) */}
      <g className="text-amber" stroke="currentColor" strokeWidth="1.2">
        <path d="M118 262 L146 262" strokeDasharray="3 3" />
        <path d="M118 258 L118 266 M146 258 L146 266" />
      </g>
      {/* Traço de fratura oblíquo na fíbula (Weber B) — assinatura */}
      <path
        d="M150 214 L176 190"
        className="fx-line text-cortical"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        style={{ ["--fx-len" as string]: "40" }}
      />
      {/* Marcador de nível da fratura */}
      <circle cx="176" cy="190" r="3" className="text-cortical" fill="currentColor" />
    </svg>
  );
}

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

  const resumeTopic = lastRead ? getTopic(lastRead.slug) : undefined;
  const resumeFlat = lastRead ? locate(lastRead.slug) : undefined;

  const scrollToRegions = () =>
    regionsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* HERO */}
      <section className="py-8 sm:py-10 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:items-start lg:gap-10 xl:gap-14">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <Eyebrow className="shrink-0">Referência ortopédica · pt-BR</Eyebrow>
              <span aria-hidden="true" className="text-[0.72rem] text-line-strong">·</span>
              <span className="code shrink-0 text-[0.68rem] text-muted">
                {stats.topicsComplete} / {stats.topicsPlanned} completos
              </span>
            </div>

            <h1 className="mt-5 max-w-[18ch] font-display text-[2.45rem] leading-[1.05] text-ink sm:text-[2.9rem] lg:text-[3.2rem]">
              Manual de trauma ortopédico{" "}
              <span className="text-teal-deep">baseado em evidências</span>.
            </h1>
            <p className="mt-5 max-w-2xl text-[1rem] leading-relaxed text-ink-soft">
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
                  {resumeTopic?.title ?? resumeFlat.title}
                </span>
                <IconChevronRight className="h-4 w-4 shrink-0 text-muted transition-all group-hover:translate-x-0.5 group-hover:text-teal" />
              </Link>
            )}
          </div>

          {/* Tópico em destaque: a figura também funciona como entrada. */}
          <Link
            to={`/topico/${FEATURED_SLUG}`}
            aria-label="Abrir tópico: fratura maleolar do tornozelo"
            className="group panel mx-auto w-full max-w-[430px] overflow-hidden transition-all hover:-translate-y-0.5 hover:border-line-strong lg:ml-auto"
          >
            <div className="grid-film relative px-6 pb-4 pt-12">
              <div className="absolute left-4 top-4 z-10">
                <Eyebrow>Tornozelo · mortise</Eyebrow>
              </div>
              <div className="absolute right-4 top-4 z-10">
                <span className="code rounded bg-cortical-tint px-1.5 py-0.5 text-[0.62rem] text-cortical">
                  Weber B
                </span>
              </div>
              <div className="mx-auto aspect-[26/30] w-full max-w-[230px]">
                <MortiseFigure />
              </div>
              <div className="mt-1 flex items-center justify-between gap-4 text-[0.66rem] text-muted">
                <span className="code">AP · pinça tibiofibular</span>
                <span className="code text-right text-amber">espaço claro medial</span>
              </div>
            </div>

            <div className="flex items-center gap-4 border-t border-line bg-surface px-4 py-3.5">
              <div className="min-w-0 flex-1">
                <Eyebrow className="text-[0.6rem]">Tópico em destaque</Eyebrow>
                <h2 className="mt-1 truncate font-display text-[1.1rem] text-ink">
                  Fratura maleolar do tornozelo
                </h2>
              </div>
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line text-muted transition-colors group-hover:border-teal group-hover:bg-teal group-hover:text-surface">
                <IconArrowRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Faixa de estatísticas */}
      <section
        aria-label="Cobertura do conteúdo"
        className="grid grid-cols-3 gap-3 py-5 sm:gap-8 sm:py-6"
      >
        {[
          { n: stats.regions, label: "Regiões anatômicas", short: "Regiões" },
          { n: stats.topicsPlanned, label: "Tópicos no framework", short: "Tópicos" },
          { n: stats.topicsComplete, label: "Tópicos completos", short: "Completos" },
        ].map((s) => (
          <div
            key={s.label}
            className="flex flex-col items-center justify-center px-2 text-center sm:flex-row sm:gap-4 sm:px-4 sm:text-left"
          >
            <div className="font-display text-[1.8rem] leading-none text-ink sm:text-[2.2rem]">
              {s.n}
            </div>
            <div className="eyebrow mt-1 text-[0.56rem] sm:mt-0 sm:max-w-24 sm:text-[0.6rem]">
              <span className="sm:hidden">{s.short}</span>
              <span className="hidden sm:inline">{s.label}</span>
            </div>
          </div>
        ))}
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
