import type { FC } from "react";
import type { FigureProps } from "../../../types/topic";

/* ============================================================================
   Figuras originais (line-art, 2 tons) — Epifisiólise femoral proximal (ECF/SCFE).
   Redesenho esquemático, não reprodução. Referência editorial: Rockwood and
   Wilkins' Fractures in Children, 10a ed. (2024). Cores apenas via CSS var.
   Osso: --ink-soft / --surface · fise/cartilagem: --teal · traço/necrose:
   --cortical · medidas/ângulos e vasos retinaculares: --amber · rótulos: --muted.
   ========================================================================== */

const bone = {
  fill: "var(--surface)",
  stroke: "var(--ink-soft)",
  strokeWidth: 1.8,
  strokeLinejoin: "round" as const,
  strokeLinecap: "round" as const,
};

const boneBack = {
  fill: "var(--surface-2, var(--surface))",
  stroke: "var(--ink-soft)",
  strokeWidth: 1.4,
  strokeLinejoin: "round" as const,
};

const physisStyle = {
  fill: "none",
  stroke: "var(--teal)",
  strokeWidth: 4.5,
  strokeLinecap: "round" as const,
};

const vessel = {
  fill: "none",
  stroke: "var(--amber)",
  strokeWidth: 2.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const measure = {
  fill: "none",
  stroke: "var(--amber)",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
};

const cortical = {
  fill: "none",
  stroke: "var(--cortical)",
  strokeWidth: 2.4,
  strokeLinecap: "round" as const,
};

const label = {
  fill: "var(--muted)",
  fontFamily: "var(--font-body, sans-serif)",
  fontSize: 11,
};

const labelStrong = {
  fill: "var(--ink)",
  fontFamily: "var(--font-body, sans-serif)",
  fontSize: 11,
  fontWeight: 600,
};

const leader = {
  fill: "none",
  stroke: "var(--muted)",
  strokeWidth: 1,
  strokeLinecap: "round" as const,
};

/* ---- Corpo femoral proximal reutilizável -------------------------------------
   Metáfise/colo/trocânter/diástase fixos; a epífise (círculo) translada por
   (dx,dy) para representar o escorregamento posteroinferior. A fise (--teal)
   permanece na superfície metafisária, evidenciando o degrau. */
function FemurGroup({
  dx = 0,
  dy = 0,
  vessels = false,
  screw = false,
  avn = false,
  transform,
}: {
  dx?: number;
  dy?: number;
  vessels?: boolean;
  screw?: boolean;
  avn?: boolean;
  transform?: string;
}) {
  const headCx = 105 + dx;
  const headCy = 100 + dy;
  return (
    <g transform={transform}>
      {/* metáfise, colo, trocânter maior e diáfise (fixos) */}
      <path
        d="M139 76 C175 68 206 76 232 108 L232 150 L226 305 L194 305 L198 168 C168 156 142 150 119 140 Z"
        {...bone}
      />
      {/* fise (placa de crescimento) na superfície metafisária */}
      <path d="M139 76 L119 140" {...physisStyle} />
      {/* epífise femoral proximal (capital) — transladada no escorregamento */}
      <circle cx={headCx} cy={headCy} r={42} {...bone} />
      {avn && (
        <g>
          <path
            d={`M${headCx - 36} ${headCy - 4} A42 42 0 0 1 ${headCx + 16} ${headCy - 39}`}
            {...cortical}
            strokeDasharray="4 3"
          />
          {[
            [-14, -14],
            [-2, -20],
            [-24, 0],
            [-6, -2],
            [8, -10],
            [-16, -26],
          ].map(([ox, oy], i) => (
            <circle key={i} cx={headCx + ox} cy={headCy + oy} r={2.1} fill="var(--cortical)" />
          ))}
        </g>
      )}
      {vessels && (
        <g>
          {/* vasos retinaculares (ramos da circunflexa femoral medial) sobem pelo
              colo posterossuperior até a epífise; dobram no nível da fise ao escorregar */}
          <path d={`M220 122 C196 108 172 96 150 86 L${headCx + 22} ${headCy - 22}`} {...vessel} />
          <circle cx={headCx + 22} cy={headCy - 22} r={2.4} fill="var(--amber)" />
        </g>
      )}
      {screw && (
        <g>
          {/* parafuso canulado único, central, cruzando a fise (fixação in situ) */}
          <line
            x1={224}
            y1={188}
            x2={headCx + 2}
            y2={headCy + 3}
            stroke="var(--ink-soft)"
            strokeWidth={8}
            strokeLinecap="round"
          />
          <line
            x1={224}
            y1={188}
            x2={headCx + 2}
            y2={headCy + 3}
            stroke="var(--surface-2, var(--surface))"
            strokeWidth={3}
            strokeLinecap="round"
          />
          {/* cabeça do parafuso na cortical lateral */}
          <circle cx={226} cy={190} r={5.5} {...boneBack} />
        </g>
      )}
    </g>
  );
}

/* ---- 1. Anatomia -------------------------------------------------------------- */
const Anatomia: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 320 330"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Anatomia do fêmur proximal, fise e vascularização epifisária"}</title>
    <FemurGroup vessels />
    {/* rótulos */}
    <line x1="105" y1="60" x2="40" y2="46" {...leader} />
    <text x="10" y="43" {...labelStrong}>
      Epífise
    </text>
    <text x="10" y="56" {...label}>
      (cabeça)
    </text>
    <line x1="130" y1="108" x2="252" y2="96" {...leader} />
    <text x="256" y="94" {...labelStrong}>
      Fise
    </text>
    <text x="256" y="107" {...label}>
      (crescimento)
    </text>
    <line x1="170" y1="150" x2="252" y2="176" {...leader} />
    <text x="256" y="174" {...label}>
      Colo / metáfise
    </text>
    <line x1="232" y1="118" x2="278" y2="132" {...leader} />
    <text x="240" y="150" {...label}>
      Trocânter
    </text>
    <line x1="196" y1="96" x2="150" y2="40" {...leader} />
    <text x="60" y="30" {...labelStrong}>
      Vasos retinaculares
    </text>
    <text x="70" y="330" {...label}>
      A epífise escorrega em sentido posteroinferior sobre a metáfise.
    </text>
  </svg>
);

/* ---- 2. Sinal de Klein / linha de Trethowan ----------------------------------- */
const LinhaKlein: FC<FigureProps> = ({ className, title, variant }) => {
  const slip = variant !== "normal"; // padrão: escorregamento (Trethowan +)
  const dx = slip ? -13 : 0;
  const dy = slip ? 20 : 0;
  return (
    <svg
      viewBox="0 0 320 330"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>
        {title ?? (slip ? "Linha de Klein positiva (escorregamento)" : "Linha de Klein normal")}
      </title>
      <FemurGroup dx={dx} dy={dy} />
      {/* linha de Klein: tangente à cortical superior do colo, prolongada */}
      <line x1="235" y1="111" x2="60" y2="47" {...measure} strokeDasharray="6 4" />
      <text x="240" y="120" {...label}>
        Linha de Klein
      </text>
      {slip ? (
        <>
          <text x="18" y="30" {...labelStrong}>
            Positiva (Trethowan)
          </text>
          <text x="18" y="316" {...label}>
            A epífise cai abaixo da linha — sinal de escorregamento.
          </text>
        </>
      ) : (
        <>
          <text x="18" y="30" {...labelStrong}>
            Normal
          </text>
          <text x="18" y="316" {...label}>
            A linha intersecta parte da epífise femoral.
          </text>
        </>
      )}
    </svg>
  );
};

/* ---- 3. Classificação de Loder (estável x instável) --------------------------- */
const ClassificacaoLoder: FC<FigureProps> = ({ className, title, variant }) => {
  const unstable = variant === "instavel";
  const dx = unstable ? -16 : -6;
  const dy = unstable ? 24 : 9;
  return (
    <svg
      viewBox="0 0 320 330"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>
        {title ?? (unstable ? "Escorregamento instável (Loder)" : "Escorregamento estável (Loder)")}
      </title>
      <FemurGroup dx={dx} dy={dy} vessels={unstable} />
      {unstable ? (
        <>
          <text x="16" y="28" {...labelStrong}>
            Instável
          </text>
          <text x="16" y="44" {...label}>
            Não apoia o peso, mesmo com muletas
          </text>
          <rect x="196" y="18" width="112" height="30" rx="6" {...boneBack} stroke="var(--cortical)" />
          <text x="252" y="37" {...labelStrong} textAnchor="middle" fill="var(--cortical)">
            NAV ~20–50%
          </text>
        </>
      ) : (
        <>
          <text x="16" y="28" {...labelStrong}>
            Estável
          </text>
          <text x="16" y="44" {...label}>
            Consegue apoiar o peso (com/sem muletas)
          </text>
          <rect x="204" y="18" width="104" height="30" rx="6" {...boneBack} stroke="var(--teal)" />
          <text x="256" y="37" {...labelStrong} textAnchor="middle" fill="var(--teal)">
            NAV rara
          </text>
        </>
      )}
      <text x="16" y="316" {...label}>
        A estabilidade (Loder) é clínica e define o prognóstico.
      </text>
    </svg>
  );
};

/* ---- 4. Gravidade do escorregamento (ângulo de Southwick) --------------------- */
const GrausEscorregamento: FC<FigureProps> = ({ className, title, variant }) => {
  const cfg =
    variant === "grave"
      ? { dx: -20, dy: 36, deg: "> 50°", txt: "Grave" }
      : variant === "moderado"
        ? { dx: -13, dy: 22, deg: "30–50°", txt: "Moderado" }
        : { dx: -6, dy: 10, deg: "< 30°", txt: "Leve" };
  return (
    <svg
      viewBox="0 0 320 330"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `Gravidade do escorregamento — ${cfg.txt} (ângulo de Southwick ${cfg.deg})`}</title>
      <FemurGroup dx={cfg.dx} dy={cfg.dy} />
      {/* eixo do colo/metáfise */}
      <line x1="212" y1="132" x2="128" y2="96" {...measure} strokeDasharray="4 3" />
      {/* eixo da epífise (perpendicular à fise, transladado) */}
      <line
        x1={129 + cfg.dx}
        y1={108 + cfg.dy}
        x2={68 + cfg.dx}
        y2={132 + cfg.dy}
        {...measure}
      />
      <path
        d={`M150 106 Q140 120 ${132 + cfg.dx} ${124 + cfg.dy}`}
        {...measure}
        strokeDasharray="2 2"
      />
      <text x="228" y="126" {...labelStrong}>
        {cfg.txt}
      </text>
      <text x="228" y="140" {...label} fill="var(--amber)">
        {cfg.deg}
      </text>
      <text x="16" y="316" {...label}>
        Ângulo de Southwick (cabeça–diáfise) entre o lado acometido e o normal.
      </text>
    </svg>
  );
};

/* ---- 5. Fixação in situ com parafuso canulado único --------------------------- */
const FixacaoInSitu: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 320 330"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Fixação in situ com parafuso canulado único e central"}</title>
    <FemurGroup dx={-13} dy={20} screw />
    <line x1="70" y1="118" x2="150" y2="30" {...leader} />
    <text x="18" y="26" {...labelStrong}>
      Ponta central na epífise
    </text>
    <text x="18" y="40" {...label}>
      perpendicular à fise, sem violar a articulação
    </text>
    <line x1="226" y1="190" x2="272" y2="216" {...leader} />
    <text x="230" y="234" {...label}>
      Entrada anterolateral no colo
    </text>
    <text x="16" y="316" {...label}>
      Fixa-se in situ, sem reduzir o escorregamento (estável).
    </text>
  </svg>
);

/* ---- 6. Redução e risco vascular ---------------------------------------------- */
const Reducao: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 320 330"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Redução no escorregamento instável e risco aos vasos retinaculares"}</title>
    <FemurGroup dx={-16} dy={24} vessels />
    {/* marca de dobra/estiramento vascular no nível da fise */}
    <circle cx="150" cy="86" r="10" fill="none" stroke="var(--cortical)" strokeWidth="2" strokeDasharray="3 3" />
    <line x1="150" y1="86" x2="248" y2="60" {...leader} />
    <text x="200" y="46" {...labelStrong} fill="var(--cortical)">
      Dobra / tamponamento
    </text>
    <text x="200" y="60" {...label}>
      dos vasos retinaculares
    </text>
    <text x="16" y="300" {...label}>
      Redução forçada e tamponamento capsular elevam o risco de NAV.
    </text>
    <text x="16" y="316" {...label}>
      Descompressão articular pode reduzir a pressão intracapsular.
    </text>
  </svg>
);

/* ---- 7. Fixação profilática contralateral ------------------------------------- */
const ProfilaxiaContralateral: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 460 320"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Fixação in situ do quadril acometido e fixação profilática do contralateral"}</title>
    {/* asa ilíaca / teto acetabular esquemáticos */}
    <path
      d="M60 96 C120 58 190 58 214 92 M400 96 C340 58 270 58 246 92"
      fill="none"
      stroke="var(--ink-soft)"
      strokeWidth="1.6"
    />
    <path d="M214 92 C222 108 238 108 246 92" fill="none" stroke="var(--ink-soft)" strokeWidth="1.6" />
    {/* quadril acometido (esquerda): escorregado + parafuso */}
    <g transform="translate(-8 4) scale(0.86)">
      <FemurGroup dx={-13} dy={20} screw />
    </g>
    {/* quadril contralateral (direita): sadio + parafuso profilático — espelhado */}
    <g transform="translate(468 4) scale(-0.86 0.86)">
      <FemurGroup screw />
    </g>
    <text x="70" y="300" {...labelStrong}>
      Acometido — fixado in situ
    </text>
    <text x="286" y="300" {...labelStrong}>
      Contralateral — profilático
    </text>
    <text x="120" y="30" {...label}>
      Considerar profilaxia se alto risco (idade jovem, endocrinopatia).
    </text>
  </svg>
);

/* ---- 8. Necrose avascular (complicação) --------------------------------------- */
const NecroseAvascular: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 320 330"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Necrose avascular segmentar da epífise femoral após escorregamento"}</title>
    <FemurGroup dx={-13} dy={20} screw avn />
    <line x1="92" y1="106" x2="40" y2="44" {...leader} />
    <text x="14" y="34" {...labelStrong} fill="var(--cortical)">
      Colapso / esclerose
    </text>
    <text x="14" y="48" {...label}>
      segmentar da epífise
    </text>
    <text x="16" y="316" {...label}>
      Principal causa de morbidade a longo prazo, sobretudo no instável.
    </text>
  </svg>
);

export const figures: Record<string, FC<FigureProps>> = {
  "epifisiolise-femoral-proximal:anatomia": Anatomia,
  "epifisiolise-femoral-proximal:linha-klein": LinhaKlein,
  "epifisiolise-femoral-proximal:classificacao-loder": ClassificacaoLoder,
  "epifisiolise-femoral-proximal:graus-escorregamento": GrausEscorregamento,
  "epifisiolise-femoral-proximal:fixacao-in-situ": FixacaoInSitu,
  "epifisiolise-femoral-proximal:reducao": Reducao,
  "epifisiolise-femoral-proximal:profilaxia-contralateral": ProfilaxiaContralateral,
  "epifisiolise-femoral-proximal:necrose-avascular": NecroseAvascular,
};
