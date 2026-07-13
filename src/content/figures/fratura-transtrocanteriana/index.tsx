import type { FC } from "react";
import type { FigureProps } from "../../../types/topic";

/* ============================================================================
   Fratura transtrocantérica (intertrocantérica) — fêmur proximal, vista AP.
   Line-art esquemático, 2 tons, SEM copyright.
   Osso: stroke var(--ink-soft), fill var(--surface).
   Implante / partes moles (tendão, abdutores): var(--teal).
   Traço de fratura: var(--cortical) + className "fx-line".
   Medidas / ângulos (TAD, espessura da parede): var(--amber).
   Rótulos: var(--muted); códigos mono: var(--font-mono).
   ========================================================================== */

const boneStyle = {
  fill: "var(--surface)",
  stroke: "var(--ink-soft)",
  strokeWidth: 1.6,
  strokeLinejoin: "round" as const,
};

const label = {
  fontSize: 11,
  fill: "var(--muted)",
  fontFamily: "var(--font-body, sans-serif)",
};

const mono = {
  fontSize: 12,
  fill: "var(--ink)",
  fontFamily: "var(--font-mono, monospace)",
  letterSpacing: 0.5,
};

/* Contorno do fêmur proximal direito (vista AP): cabeça medial (esq. da imagem),
   colo, trocânter maior lateral, trocânter menor póstero-medial, diáfise. */
const FEMUR =
  "M96 34 " +
  "C64 32, 46 56, 48 86 " +
  "C50 106, 68 120, 92 124 " +
  "L120 156 " +
  "C124 168, 134 176, 148 178 " +
  "C142 232, 142 288, 146 332 " +
  "L182 332 " +
  "C186 288, 186 214, 190 152 " +
  "C192 130, 196 110, 200 94 " +
  "C204 72, 198 54, 180 50 " +
  "C160 48, 146 58, 134 72 " +
  "C124 56, 114 42, 96 34 Z";

/** Bloco reutilizável: contorno do fêmur proximal. */
const FemurBase: FC<{ dim?: boolean }> = ({ dim }) => (
  <path {...boneStyle} fill={dim ? "var(--surface-2, var(--surface))" : "var(--surface)"} d={FEMUR} />
);

/* ────────────────────────────────────────────────────────────────────────── */
/* 1. ANATOMIA                                                                  */
/* ────────────────────────────────────────────────────────────────────────── */
export const Anatomia: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 320 350"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Anatomia do fêmur proximal — região trocantérica"}</title>

    <FemurBase />

    {/* Trabéculas do calcar / arco medial (esquemático) */}
    <g stroke="var(--line-strong)" strokeWidth="0.8" fill="none" opacity="0.7">
      <path d="M70 88 C 92 108, 112 132, 130 160" />
      <path d="M86 70 C 108 96, 128 124, 150 168" />
    </g>

    {/* Parede lateral — cortical lateral abaixo do trocânter maior (realce teal) */}
    <path
      d="M198 96 C 194 118, 190 140, 188 168"
      fill="none"
      stroke="var(--teal)"
      strokeWidth="3"
      strokeLinecap="round"
    />
    {/* Calcar femoral (cortical póstero-medial) */}
    <path
      d="M92 124 C 104 138, 116 150, 122 158"
      fill="none"
      stroke="var(--teal)"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeDasharray="1 0"
    />

    {/* Abdutores inserindo no trocânter maior */}
    <g stroke="var(--teal)" strokeWidth="2" fill="none" strokeLinecap="round">
      <path d="M186 52 C 210 42, 236 44, 252 52" />
      <path d="M190 60 C 214 52, 236 54, 250 62" />
    </g>

    {/* Rótulos + linhas-guia */}
    <text x="60" y="24" {...label} textAnchor="middle">Cabeça femoral</text>
    <text x="120" y="34" {...label} textAnchor="middle">Colo</text>
    <text x="256" y="44" {...label} textAnchor="start" fill="var(--teal)">Abdutores</text>
    <text x="238" y="70" {...label} textAnchor="start">Trocânter maior</text>
    <text x="214" y="150" {...label} textAnchor="start" fill="var(--teal)">Parede lateral</text>
    <text x="14" y="150" {...label} textAnchor="start" fill="var(--teal)">Calcar femoral</text>
    <text x="14" y="196" {...label} textAnchor="start">Trocânter menor</text>
    <text x="164" y="348" {...label} textAnchor="middle">Diáfise femoral</text>

    <g stroke="var(--line-strong)" strokeWidth="0.7" fill="none">
      <line x1="86" y1="120" x2="60" y2="150" />
      <line x1="128" y1="170" x2="90" y2="190" />
      <line x1="192" y1="150" x2="212" y2="146" />
    </g>
  </svg>
);

/* ────────────────────────────────────────────────────────────────────────── */
/* 2. CLASSIFICAÇÃO AO/OTA 31A — variants A1 | A2 | A3                          */
/* ────────────────────────────────────────────────────────────────────────── */
export const AoOta: FC<FigureProps> = ({ className, title, variant }) => {
  const v = (variant ?? "A1").toUpperCase();

  // Traço de fratura por tipo
  const fx =
    v === "A3"
      ? // Obliquidade reversa: distal-medial → proximal-lateral
        "M120 210 L 196 150"
      : v === "A2"
        ? // Trans-trocantérica com cominuição (traço principal)
          "M108 132 L 196 176"
        : // A1: simples, dois fragmentos
          "M112 130 L 194 170";

  return (
    <svg
      viewBox="0 0 320 350"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `AO/OTA 31-${v}`}</title>

      <FemurBase />

      {/* Traço de fratura principal */}
      <g className="fx-line">
        <path d={fx} fill="none" stroke="var(--cortical)" strokeWidth="2.8" strokeLinecap="round" />
      </g>

      {/* A2: fragmento do trocânter menor + cominuição póstero-medial */}
      {v === "A2" && (
        <g className="fx-line">
          <path d="M120 156 L 150 178" fill="none" stroke="var(--cortical)" strokeWidth="2.4" strokeLinecap="round" />
          <path d="M132 168 L 152 190" fill="none" stroke="var(--cortical)" strokeWidth="1.8" strokeLinecap="round" strokeDasharray="3 3" />
          <circle cx="126" cy="164" r="3" fill="var(--surface)" stroke="var(--cortical)" strokeWidth="1.4" />
        </g>
      )}

      {/* A3: parede lateral rompida (destaque) */}
      {v === "A3" && (
        <path
          d="M198 100 C 194 122, 190 142, 188 160"
          fill="none"
          stroke="var(--cortical)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="4 4"
        />
      )}

      {/* Faixa de estabilidade */}
      <rect
        x="20"
        y="300"
        width="280"
        height="40"
        rx="6"
        fill="var(--surface-2, var(--surface))"
        stroke="var(--line-strong)"
        strokeWidth="0.8"
      />
      <text x="30" y="318" {...mono}>{`31-${v}`}</text>
      <text x="30" y="333" {...label}>
        {v === "A1"
          ? "Simples (2 fragmentos) — parede lateral íntegra — estável"
          : v === "A2"
            ? "Trans-trocantérica cominutiva — trocânter menor / parede lateral em risco"
            : "Obliquidade reversa / transversa — parede lateral rompida — instável"}
      </text>

      <text x="216" y="126" {...label} textAnchor="start" fill="var(--cortical)">
        {v === "A3" ? "parede lateral rompida" : "traço"}
      </text>
    </svg>
  );
};

/* ────────────────────────────────────────────────────────────────────────── */
/* 3. PAREDE LATERAL — variants intact | fractured (espessura ~20,5 mm)         */
/* ────────────────────────────────────────────────────────────────────────── */
export const ParedeLateral: FC<FigureProps> = ({ className, title, variant }) => {
  const broken = (variant ?? "intact") === "fractured";
  return (
    <svg
      viewBox="0 0 320 350"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>
        {title ??
          (broken
            ? "Parede lateral fraturada — falha do DHS / risco de reoperação"
            : "Parede lateral íntegra — espessura ≥ 20,5 mm favorece DHS")}
      </title>

      <FemurBase dim />

      {/* Traço de fratura trocantérica base */}
      <g className="fx-line">
        <path d="M110 132 L 190 172" fill="none" stroke="var(--cortical)" strokeWidth="2.4" strokeLinecap="round" opacity="0.55" />
      </g>

      {/* Parede lateral — íntegra (teal) ou rompida (cortical) */}
      <path
        d="M198 98 C 194 122, 190 144, 188 170"
        fill="none"
        stroke={broken ? "var(--cortical)" : "var(--teal)"}
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeDasharray={broken ? "5 5" : undefined}
        className={broken ? "fx-line" : undefined}
      />
      {broken && (
        <g className="fx-line" stroke="var(--cortical)" strokeWidth="2" fill="none" strokeLinecap="round">
          <path d="M188 150 l 14 -4 M190 132 l 14 -3" />
        </g>
      )}

      {/* Medida da espessura da parede lateral (amber) */}
      <g stroke="var(--amber)" strokeWidth="1.3" fill="none">
        <line x1="214" y1="150" x2="240" y2="150" />
        <line x1="240" y1="132" x2="240" y2="168" />
        <line x1="188" y1="150" x2="214" y2="150" strokeDasharray="2 3" />
      </g>
      <text x="246" y="146" {...label} textAnchor="start" fill="var(--amber)" fontFamily="var(--font-mono, monospace)">
        espessura
      </text>
      <text x="246" y="160" {...label} textAnchor="start" fill="var(--amber)" fontFamily="var(--font-mono, monospace)">
        limiar 20,5 mm
      </text>

      <rect x="20" y="304" width="280" height="36" rx="6" fill="var(--surface-2, var(--surface))" stroke="var(--line-strong)" strokeWidth="0.8" />
      <text x="30" y="326" {...label}>
        {broken
          ? "Parede rompida → não use DHS isolado (falha / cut-out lateral)"
          : "Parede íntegra e espessa → DHS é adequado"}
      </text>
    </svg>
  );
};

/* ────────────────────────────────────────────────────────────────────────── */
/* 4. VIA LATERAL (DHS)                                                         */
/* ────────────────────────────────────────────────────────────────────────── */
export const ViaLateral: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 300 350"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Via lateral do fêmur proximal (acesso do DHS)"}</title>

    <FemurBase dim />

    {/* Vasto lateral (partes moles, teal) recoberto/afastado */}
    <path
      d="M206 96 C 222 120, 226 200, 220 300 L 250 300 C 256 200, 252 120, 236 92 Z"
      fill="var(--teal-tint)"
      stroke="var(--teal)"
      strokeWidth="1.6"
    />
    <text x="256" y="210" {...label} textAnchor="start" fill="var(--teal)">Vasto lateral</text>

    {/* Incisão lateral longitudinal */}
    <line x1="212" y1="110" x2="212" y2="300" stroke="var(--cortical)" strokeWidth="2.2" strokeDasharray="7 5" />
    <text x="150" y="250" {...label} textAnchor="end" fill="var(--cortical)">Incisão lateral</text>

    {/* Ramos perfurantes (estruturas em risco) */}
    <g stroke="var(--cortical)" strokeWidth="1.6" fill="none" strokeLinecap="round">
      <path d="M226 170 q 14 6 24 2" />
      <path d="M226 214 q 14 6 24 2" />
      <path d="M226 258 q 14 6 24 2" />
    </g>
    <text x="256" y="256" {...label} textAnchor="start" fill="var(--cortical)">Ramos perfurantes</text>
    <text x="256" y="270" {...label} textAnchor="start" fill="var(--cortical)">(a. femoral profunda)</text>

    <text x="150" y="24" {...label} textAnchor="middle">Fêmur proximal — vista lateral</text>
  </svg>
);

/* ────────────────────────────────────────────────────────────────────────── */
/* 5. VIA CEFALOMEDULAR (ponto de entrada percutâneo)                          */
/* ────────────────────────────────────────────────────────────────────────── */
export const ViaCefalomedular: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 320 350"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Acesso percutâneo — ponto de entrada no ápice do trocânter maior"}</title>

    <FemurBase dim />

    {/* Ponto de entrada no ápice do trocânter maior */}
    <circle cx="186" cy="52" r="6" fill="var(--teal)" />
    <line x1="186" y1="52" x2="186" y2="16" stroke="var(--teal)" strokeWidth="2" strokeDasharray="4 3" />
    <text x="186" y="12" {...label} textAnchor="middle" fill="var(--teal)">ponto de entrada</text>
    <text x="192" y="30" {...label} textAnchor="start" fill="var(--teal)">ápice do trocânter maior</text>

    {/* Trajeto do fio-guia / haste na medular */}
    <line x1="186" y1="52" x2="176" y2="320" stroke="var(--teal)" strokeWidth="2.4" strokeDasharray="6 4" />

    {/* Incisão percutânea proximal (pequena) */}
    <line x1="186" y1="34" x2="186" y2="60" stroke="var(--cortical)" strokeWidth="3" />
    <text x="214" y="46" {...label} textAnchor="start" fill="var(--cortical)">mini-incisão</text>

    {/* Abdutores / n. glúteo superior em risco */}
    <g stroke="var(--cortical)" strokeWidth="1.6" fill="none" strokeLinecap="round">
      <path d="M196 60 C 220 52, 244 54, 258 62" />
    </g>
    <text x="238" y="82" {...label} textAnchor="start" fill="var(--cortical)">abdutores / n. glúteo sup.</text>

    <text x="160" y="346" {...label} textAnchor="middle">canal medular</text>
  </svg>
);

/* ────────────────────────────────────────────────────────────────────────── */
/* 6. TÉCNICA — Passo: redução em mesa de tração                                */
/* ────────────────────────────────────────────────────────────────────────── */
export const StepReducao: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 320 350"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Redução fechada — tração e rotação interna em mesa ortopédica"}</title>

    <FemurBase />

    {/* Traço reduzido (aposto) — teal fino */}
    <path d="M112 130 L 194 170" fill="none" stroke="var(--teal)" strokeWidth="1.6" strokeDasharray="2 3" />
    <text x="210" y="150" {...label} textAnchor="start" fill="var(--teal)">foco reduzido</text>

    {/* Seta de tração (eixo da diáfise) */}
    <g stroke="var(--amber)" strokeWidth="2.4" fill="none" strokeLinecap="round">
      <path d="M164 332 L 164 344" markerEnd="url(#tr-arrow)" />
    </g>
    {/* Seta de rotação interna */}
    <g stroke="var(--amber)" strokeWidth="2.2" fill="none" strokeLinecap="round">
      <path d="M60 60 q -20 20 -6 42" markerEnd="url(#tr-arrow)" />
    </g>
    <defs>
      <marker id="tr-arrow" markerWidth="9" markerHeight="9" refX="4" refY="4" orient="auto">
        <path d="M0 0 L8 4 L0 8 Z" fill="var(--amber)" />
      </marker>
    </defs>
    <text x="150" y="330" {...label} textAnchor="end" fill="var(--amber)">tração</text>
    <text x="24" y="52" {...label} textAnchor="start" fill="var(--amber)">rotação interna</text>

    <text x="160" y="24" {...label} textAnchor="middle">Redução fechada (mesa de tração)</text>
  </svg>
);

/* ────────────────────────────────────────────────────────────────────────── */
/* 7. TÉCNICA — Passo: fio-guia e distância ápice-ponta (TAD)                   */
/* ────────────────────────────────────────────────────────────────────────── */
export const StepTad: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 320 350"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Fio-guia central e distância ápice-ponta (TAD < 25 mm)"}</title>

    <FemurBase dim />

    {/* Fio-guia / parafuso deslizante no eixo do colo, central-inferior no plano AP */}
    <line x1="196" y1="150" x2="72" y2="82" stroke="var(--teal)" strokeWidth="3" strokeLinecap="round" />
    {/* Ponta do parafuso */}
    <circle cx="72" cy="82" r="3.4" fill="var(--teal)" />

    {/* Ápice da cabeça femoral */}
    <circle cx="58" cy="66" r="3" fill="var(--amber)" />
    <text x="40" y="52" {...label} textAnchor="start" fill="var(--amber)">ápice</text>

    {/* Distância ápice–ponta */}
    <line x1="58" y1="66" x2="72" y2="82" stroke="var(--amber)" strokeWidth="1.6" strokeDasharray="2 2" />
    <text x="88" y="70" {...label} textAnchor="start" fill="var(--amber)" fontFamily="var(--font-mono, monospace)">TAD &lt; 25 mm</text>
    <text x="88" y="84" {...label} textAnchor="start" fill="var(--amber)" fontFamily="var(--font-mono, monospace)">(AP + perfil)</text>

    <text x="150" y="164" {...label} textAnchor="start" fill="var(--teal)">parafuso central</text>
    <text x="160" y="24" {...label} textAnchor="middle">Posição do parafuso — TAD</text>
  </svg>
);

/* ────────────────────────────────────────────────────────────────────────── */
/* 8. TÉCNICA — Passo: montagem do DHS (parafuso deslizante + placa)            */
/* ────────────────────────────────────────────────────────────────────────── */
export const StepDhs: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 320 350"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Montagem do DHS — parafuso deslizante, barril e placa lateral"}</title>

    <FemurBase dim />

    {/* Parafuso deslizante no colo/cabeça */}
    <g stroke="var(--teal)" strokeWidth="3.2" strokeLinecap="round">
      <line x1="200" y1="150" x2="74" y2="84" />
    </g>
    {/* Roscas na cabeça */}
    <g stroke="var(--teal)" strokeWidth="1.4">
      <line x1="86" y1="86" x2="82" y2="96" />
      <line x1="98" y1="92" x2="94" y2="102" />
      <line x1="110" y1="99" x2="106" y2="109" />
    </g>

    {/* Barril + placa lateral */}
    <rect x="196" y="140" width="18" height="22" rx="3" fill="var(--teal)" opacity="0.9" transform="rotate(28 205 151)" />
    <rect x="200" y="150" width="18" height="150" rx="4" fill="var(--teal-tint)" stroke="var(--teal)" strokeWidth="1.8" />

    {/* Parafusos corticais na placa (parede lateral / diáfise) */}
    <g stroke="var(--teal)" strokeWidth="2.4" strokeLinecap="round">
      <line x1="210" y1="188" x2="150" y2="184" />
      <line x1="210" y1="222" x2="150" y2="220" />
      <line x1="210" y1="256" x2="150" y2="256" />
      <line x1="210" y1="288" x2="150" y2="290" />
    </g>

    {/* Direção do deslizamento (colapso controlado) */}
    <g stroke="var(--amber)" strokeWidth="1.8" fill="none" strokeLinecap="round">
      <path d="M150 120 L 132 110" markerEnd="url(#dhs-arrow)" />
    </g>
    <defs>
      <marker id="dhs-arrow" markerWidth="9" markerHeight="9" refX="4" refY="4" orient="auto">
        <path d="M0 0 L8 4 L0 8 Z" fill="var(--amber)" />
      </marker>
    </defs>
    <text x="96" y="118" {...label} textAnchor="end" fill="var(--amber)">deslizamento</text>

    <text x="222" y="150" {...label} textAnchor="start" fill="var(--teal)">barril</text>
    <text x="222" y="240" {...label} textAnchor="start" fill="var(--teal)">placa lateral</text>
    <text x="120" y="80" {...label} textAnchor="end" fill="var(--teal)">parafuso deslizante</text>
    <text x="160" y="24" {...label} textAnchor="middle">DHS (extramedular)</text>
  </svg>
);

/* ────────────────────────────────────────────────────────────────────────── */
/* 9. TÉCNICA — Passo: haste cefalomedular                                      */
/* ────────────────────────────────────────────────────────────────────────── */
export const StepHaste: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 320 350"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Haste cefalomedular — parafuso/lâmina cefálico e bloqueio distal"}</title>

    <FemurBase dim />

    {/* Corpo da haste no canal medular */}
    <path
      d="M186 54 C 182 120, 176 220, 174 320 L 158 320 C 160 220, 166 120, 170 58 Z"
      fill="var(--teal-tint)"
      stroke="var(--teal)"
      strokeWidth="1.8"
    />

    {/* Parafuso/lâmina cefálico até a cabeça */}
    <line x1="182" y1="96" x2="72" y2="86" stroke="var(--teal)" strokeWidth="3.4" strokeLinecap="round" />
    <g stroke="var(--teal)" strokeWidth="1.4">
      <line x1="88" y1="86" x2="86" y2="96" />
      <line x1="102" y1="88" x2="100" y2="98" />
      <line x1="116" y1="90" x2="114" y2="100" />
    </g>
    <text x="120" y="80" {...label} textAnchor="end" fill="var(--teal)">parafuso cefálico</text>

    {/* Bloqueio distal */}
    <line x1="150" y1="290" x2="184" y2="290" stroke="var(--teal)" strokeWidth="2.8" strokeLinecap="round" />
    <text x="146" y="294" {...label} textAnchor="end" fill="var(--teal)">bloqueio distal</text>

    {/* Sustentação medial: braço de alavanca curto (amber) */}
    <line x1="170" y1="130" x2="128" y2="150" stroke="var(--amber)" strokeWidth="1.4" strokeDasharray="2 3" />
    <text x="60" y="176" {...label} textAnchor="start" fill="var(--amber)">braço de alavanca curto</text>

    <text x="200" y="120" {...label} textAnchor="start" fill="var(--teal)">haste</text>
    <text x="160" y="24" {...label} textAnchor="middle">Haste cefalomedular (intramedular)</text>
  </svg>
);

/**
 * Registro de figuras deste tópico. Chaves prefixadas pelo slug para evitar
 * colisão no registro global; valores = componentes React.FC<FigureProps>.
 */
export const figures: Record<string, FC<FigureProps>> = {
  "fratura-transtrocanteriana:anatomia": Anatomia,
  "fratura-transtrocanteriana:ao-ota": AoOta,
  "fratura-transtrocanteriana:parede-lateral": ParedeLateral,
  "fratura-transtrocanteriana:via-lateral": ViaLateral,
  "fratura-transtrocanteriana:via-cefalomedular": ViaCefalomedular,
  "fratura-transtrocanteriana:step-reducao": StepReducao,
  "fratura-transtrocanteriana:step-tad": StepTad,
  "fratura-transtrocanteriana:step-dhs": StepDhs,
  "fratura-transtrocanteriana:step-haste": StepHaste,
};
