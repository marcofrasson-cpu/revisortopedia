import type { FC, ReactNode } from "react";
import type { FigureProps } from "../../../types/topic";

/* ---------------------------------------------------------------------------
   Estilos compartilhados (somente CSS vars — tema claro/escuro).
   ossos: stroke --ink-soft, fill --surface · implante: --teal
   traço de fratura: --cortical · medidas/rotação: --amber
   rótulos <text>: fontSize 11, fill --muted, font-body.
--------------------------------------------------------------------------- */
const bone = {
  fill: "var(--surface)",
  stroke: "var(--ink-soft)",
  strokeWidth: 1.8,
  strokeLinejoin: "round" as const,
};

const boneBack = {
  fill: "var(--surface-2, var(--surface))",
  stroke: "var(--ink-soft)",
  strokeWidth: 1.4,
  strokeLinejoin: "round" as const,
};

const label = {
  fill: "var(--muted)",
  fontFamily: "var(--font-body, sans-serif)",
  fontSize: 11,
};

const mono = {
  fill: "var(--ink)",
  fontFamily: "var(--font-mono, monospace)",
  fontSize: 11,
};

const tealStroke = {
  fill: "none",
  stroke: "var(--teal)",
  strokeWidth: 3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const corticalStroke = {
  fill: "none",
  stroke: "var(--cortical)",
  strokeWidth: 3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Diáfise tubular de osso longo em dois tons: cortical (ink-soft) + medular (surface). */
function LongBoneShaft({
  d,
  width = 20,
}: {
  d: string;
  width?: number;
}): ReactNode {
  return (
    <>
      <path d={d} fill="none" stroke="var(--ink-soft)" strokeWidth={width} strokeLinecap="round" />
      <path d={d} fill="none" stroke="var(--surface)" strokeWidth={width - 5} strokeLinecap="round" />
    </>
  );
}

/* ============================================================================
   1 · Anatomia — vista dorsal do esqueleto da mão, colunas metacarpais,
   articulação metacarpofalângica e ligamento transverso profundo.
   ========================================================================== */
export const Anatomy: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 460 340"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Anatomia dorsal dos metacarpos: base, diáfise, colo e cabeça"}</title>

    {/* Carpo */}
    <path
      {...boneBack}
      d="M150 286 C170 268, 292 268, 312 286 C320 300, 314 316, 296 320 L166 320 C148 316, 142 300, 150 286 Z"
    />
    <text x="231" y="308" {...label} textAnchor="middle">carpo</text>

    {/* Metacarpos 2–5 (diáfises tubulares) */}
    <LongBoneShaft d="M186 278 L156 150" width={19} />
    <LongBoneShaft d="M212 280 L200 146" width={19} />
    <LongBoneShaft d="M240 278 L246 150" width={19} />
    <LongBoneShaft d="M264 274 L288 158" width={18} />

    {/* Polegar (1º metacarpo, mais curto e radial) */}
    <LongBoneShaft d="M158 270 L112 222" width={18} />
    <circle cx="108" cy="216" r="12" {...bone} />

    {/* Cabeças metacarpais (2–5) */}
    {[
      [156, 146],
      [200, 142],
      [246, 146],
      [289, 154],
    ].map(([cx, cy]) => (
      <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="13" {...bone} />
    ))}

    {/* Falanges proximais (cotos, para mostrar a articulação MF) */}
    {[
      [156, 133, 149, 92],
      [200, 129, 197, 86],
      [246, 133, 250, 90],
      [289, 141, 300, 100],
    ].map(([bx, by, hx, hy]) => (
      <LongBoneShaft key={`ph-${bx}`} d={`M${bx} ${by} L${hx} ${hy}`} width={14} />
    ))}

    {/* Ligamento transverso metacarpal profundo (une as cabeças) */}
    <path
      d="M156 158 C200 172, 246 172, 289 166"
      fill="none"
      stroke="var(--amber)"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path d="M300 165 L322 158" stroke="var(--line-strong)" />
    <text x="326" y="160" {...label} fill="var(--amber)">lig. transverso profundo</text>

    {/* Rótulos das regiões do 5º metacarpo */}
    <path d="M289 154 L318 132" stroke="var(--line-strong)" />
    <text x="322" y="130" {...label}>cabeça</text>
    <path d="M282 174 L330 188" stroke="var(--line-strong)" />
    <text x="334" y="190" {...label}>colo (subcapital)</text>
    <path d="M276 214 L332 226" stroke="var(--line-strong)" />
    <text x="336" y="228" {...label}>diáfise</text>
    <path d="M266 268 L332 262" stroke="var(--line-strong)" />
    <text x="336" y="264" {...label}>base</text>

    {/* Mobilidade das CMC ulnares */}
    <path d="M250 296 C270 300, 286 296, 296 286" fill="none" stroke="var(--amber)" strokeWidth="2" strokeDasharray="4 3" markerEnd="url(#mcArrow)" />
    <defs>
      <marker id="mcArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M0 0 L10 5 L0 10 Z" fill="var(--amber)" />
      </marker>
    </defs>
    <text x="82" y="292" {...label} fill="var(--amber)">CMC do 4º/5º</text>
    <text x="82" y="306" {...label} fill="var(--amber)">mais móveis</text>

    <text x="150" y="70" {...mono} textAnchor="middle">articulação metacarpofalângica</text>
    <text x="231" y="30" {...mono} textAnchor="middle">colunas metacarpais · vista dorsal</text>
    <text x="231" y="336" {...label} textAnchor="middle">
      A maior mobilidade das CMC ulnares tolera mais angulação no colo do 4º e 5º raios.
    </text>
  </svg>
);

/* ============================================================================
   2 · Localização da fratura — colo, diáfise e base (variant).
   ========================================================================== */
export const FractureSite: FC<FigureProps> = ({ className, title, variant }) => {
  const v = (variant ?? "colo").toLowerCase();
  const sites: Record<string, string> = {
    colo: "colo (subcapital)",
    diafise: "diáfise",
    base: "base",
  };

  return (
    <svg
      viewBox="0 0 300 320"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `Fratura do metacarpo: ${sites[v] ?? v}`}</title>

      {/* Metacarpo em vista lateral (cabeça em cima, base embaixo) */}
      <circle cx="150" cy="72" r="26" {...bone} />
      <LongBoneShaft d="M150 96 L150 236" width={30} />
      <path {...bone} d="M126 236 C120 258, 122 282, 138 292 L162 292 C178 282, 180 258, 174 236 Z" />

      {/* Traço de fratura conforme o sítio */}
      {v === "colo" && (
        <path d="M128 108 C140 118, 160 118, 172 106" {...corticalStroke} />
      )}
      {v === "diafise" && (
        <path d="M134 150 L166 190" {...corticalStroke} />
      )}
      {v === "base" && (
        <path d="M130 244 C142 252, 160 252, 172 242" {...corticalStroke} />
      )}

      {/* Rótulos de referência */}
      <path d="M176 72 L214 58" stroke="var(--line-strong)" />
      <text x="218" y="60" {...label}>cabeça</text>
      <path d="M176 108 L214 100" stroke="var(--line-strong)" />
      <text x="218" y="102" {...label} fill={v === "colo" ? "var(--cortical)" : "var(--muted)"}>colo</text>
      <path d="M180 170 L214 170" stroke="var(--line-strong)" />
      <text x="218" y="172" {...label} fill={v === "diafise" ? "var(--cortical)" : "var(--muted)"}>diáfise</text>
      <path d="M178 262 L214 268" stroke="var(--line-strong)" />
      <text x="218" y="270" {...label} fill={v === "base" ? "var(--cortical)" : "var(--muted)"}>base</text>

      <text x="150" y="30" {...mono} textAnchor="middle">{sites[v] ?? v}</text>
      <text x="150" y="312" {...label} textAnchor="middle">
        Sítio define desvio, tolerância e fixação.
      </text>
    </svg>
  );
};

/* ============================================================================
   3 · Tolerância angular por raio — vista lateral, ápice dorsal.
   ========================================================================== */
export const AngularTolerance: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 460 300"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Tolerância à angulação com ápice dorsal por raio metacarpal"}</title>

    {/* Base fixa do metacarpo */}
    <LongBoneShaft d="M70 244 L190 244" width={26} />
    <path {...bone} d="M64 230 C48 232, 42 250, 52 262 C60 272, 72 268, 74 256 Z" />

    {/* Segmento distal angulado (ápice dorsal = para cima) */}
    <LongBoneShaft d="M190 244 L296 196" width={24} />
    <circle cx="304" cy="192" r="20" {...bone} />

    {/* Traço de fratura no ápice */}
    <path d="M180 232 C190 240, 196 250, 194 262" {...corticalStroke} />

    {/* Linha de referência (eixo original) e arco de ângulo */}
    <line x1="190" y1="244" x2="316" y2="244" stroke="var(--line-strong)" strokeDasharray="4 4" />
    <path d="M262 244 A72 72 0 0 0 254 214" fill="none" stroke="var(--amber)" strokeWidth="2" />
    <text x="268" y="226" {...label} fill="var(--amber)">ápice dorsal</text>

    <text x="200" y="278" {...label}>eixo diafisário</text>

    {/* Legenda de tolerância por raio */}
    <text x="304" y="70" {...mono}>tolerância angular</text>
    {[
      ["2º–3º", "10–15°", 84],
      ["4º", "30–40°", 108],
      ["5º", "50–60°", 132],
    ].map(([ray, deg, y]) => (
      <g key={ray}>
        <rect x="304" y={(y as number) - 12} width="104" height="18" rx="4" fill="var(--amber-tint, var(--surface-2, var(--surface)))" opacity="0.5" />
        <text x="310" y={y} {...label}>{ray}</text>
        <text x="402" y={y} {...label} textAnchor="end" fill="var(--amber)">{deg}</text>
      </g>
    ))}

    <text x="150" y="34" {...mono} textAnchor="middle">angulação com ápice dorsal</text>
    <text x="230" y="294" {...label} textAnchor="middle">
      A tolerância aumenta no sentido ulnar; o 5º raio aceita muito mais angulação que o 2º/3º.
    </text>
  </svg>
);

/* ============================================================================
   4 · Deformidade rotacional — convergência normal x tesoura na flexão.
   ========================================================================== */
export const Rotation: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 460 316"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Deformidade rotacional: convergência normal e sobreposição digital em tesoura"}</title>

    {/* Painel esquerdo — normal (dedos convergem ao escafoide) */}
    <text x="118" y="34" {...mono} textAnchor="middle">normal</text>
    {[
      "M70 210 L86 96",
      "M96 214 L118 92",
      "M124 214 L150 96",
      "M150 210 L178 104",
    ].map((d, i) => (
      <g key={`n${i}`}>
        <LongBoneShaft d={d} width={13} />
      </g>
    ))}
    {/* Ponto de convergência (escafoide) */}
    <circle cx="150" cy="238" r="7" fill="none" stroke="var(--teal)" strokeWidth="2" />
    {["M86 96", "M118 92", "M150 96", "M178 104"].map((p, i) => {
      const [x, y] = p.replace("M", "").split(" ").map(Number);
      return <line key={`c${i}`} x1={x} y1={y} x2="150" y2="238" stroke="var(--teal)" strokeWidth="1" strokeDasharray="4 4" opacity="0.7" />;
    })}
    <path d="M150 238 L150 262" stroke="var(--line-strong)" />
    <text x="150" y="278" {...label} textAnchor="middle">apontam ao escafoide</text>

    {/* Painel direito — malrotação (dedo cruza sobre o vizinho) */}
    <line x1="228" y1="60" x2="228" y2="262" stroke="var(--line-strong)" strokeDasharray="3 5" opacity="0.5" />
    <text x="352" y="34" {...mono} textAnchor="middle">malrotação</text>
    {[
      "M300 210 L316 96",
      "M326 214 L348 92",
      "M354 214 L382 96",
    ].map((d, i) => (
      <g key={`m${i}`}>
        <LongBoneShaft d={d} width={13} />
      </g>
    ))}
    {/* Dedo rodado cruza (tesoura) */}
    <LongBoneShaft d="M384 214 L338 110" width={13} />
    <path d="M338 110 C352 130, 356 150, 350 174" fill="none" stroke="var(--amber)" strokeWidth="2.5" strokeDasharray="4 3" />
    <text x="300" y="150" {...label} fill="var(--amber)">sobreposição</text>
    <text x="352" y="278" {...label} textAnchor="middle" fill="var(--amber)">tesoura na flexão</text>

    <text x="230" y="292" {...label} textAnchor="middle">
      <tspan x="230" dy="0em">Rotação é avaliada com os dedos fletidos; até 5° geram</tspan>
      <tspan x="230" dy="1.15em">~1,5 cm de desvio da polpa — indicação cirúrgica.</tspan>
    </text>
  </svg>
);

/* ============================================================================
   5 · Manobra de Jahss — redução do colo (MF e IFP a 90°, empurrão dorsal).
   ========================================================================== */
export const JahssReduction: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 440 300"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Manobra de Jahss para redução da fratura do colo do metacarpo"}</title>

    {/* Metacarpo */}
    <LongBoneShaft d="M96 200 L214 128" width={26} />
    <circle cx="222" cy="123" r="20" {...bone} />
    <path {...bone} d="M84 196 C70 200, 64 218, 74 230 C84 240, 96 234, 96 222 Z" />

    {/* Traço de fratura no colo, ápice dorsal */}
    <path d="M204 116 C214 122, 220 132, 218 144" {...corticalStroke} />

    {/* Falange proximal fletida 90° na MF */}
    <LongBoneShaft d="M222 123 L232 200" width={20} />
    {/* Falanges média/distal fletidas 90° na IFP */}
    <LongBoneShaft d="M232 200 L300 208" width={16} />

    {/* Vetores de força */}
    <path d="M300 236 C282 224, 264 216, 244 212" fill="none" stroke="var(--teal)" strokeWidth="3" markerEnd="url(#jahssArrow)" />
    <text x="250" y="252" {...label} fill="var(--teal)">empurrão dorsal na F. prox.</text>
    <path d="M170 96 C186 104, 200 114, 208 128" fill="none" stroke="var(--teal)" strokeWidth="3" markerEnd="url(#jahssArrow)" />
    <text x="120" y="88" {...label} fill="var(--teal)">contra-apoio na cabeça</text>

    <defs>
      <marker id="jahssArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M0 0 L10 5 L0 10 Z" fill="var(--teal)" />
      </marker>
    </defs>

    <text x="252" y="146" {...label}>MF 90°</text>
    <text x="256" y="200" {...label}>IFP 90°</text>
    <text x="150" y="30" {...mono} textAnchor="middle">manobra de Jahss</text>
    <text x="220" y="292" {...label} textAnchor="middle">
      Com a MF a 90°, a falange proximal empurra a cabeça dorsalmente e corrige o ápice.
    </text>
  </svg>
);

/* ============================================================================
   6 · Fixação com fios de Kirschner — antegrada intramedular ou transversa.
   ========================================================================== */
export const KWireFixation: FC<FigureProps> = ({ className, title, variant }) => {
  const transverse = (variant ?? "intramedular").toLowerCase() === "transversa";

  return (
    <svg
      viewBox="0 0 420 300"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `Fixação do metacarpo com fios de Kirschner: ${transverse ? "transversa" : "antegrada intramedular"}`}</title>

      {/* Metacarpo fraturado (5º), vertical */}
      <circle cx="150" cy="70" r="24" {...bone} />
      <LongBoneShaft d="M150 92 L150 238" width={28} />
      <path {...bone} d="M128 238 C122 260, 124 282, 140 290 L160 290 C176 282, 178 260, 172 238 Z" />
      <path d="M130 110 C142 118, 160 118, 172 108" {...corticalStroke} strokeWidth={2} />

      {!transverse ? (
        <>
          {/* Metacarpo adjacente (esboço) para referência */}
          {/* Fios intramedulares antegrados (bouquet) — entram na base */}
          <path d="M150 268 C150 210, 146 150, 138 104" {...tealStroke} strokeWidth={4} />
          <path d="M150 268 C150 210, 154 150, 162 104" {...tealStroke} strokeWidth={4} />
          <circle cx="150" cy="272" r="5" fill="var(--teal)" />
          <path d="M140 104 L118 82" stroke="var(--line-strong)" />
          <text x="60" y="80" {...label} fill="var(--teal)">fios pré-curvados</text>
          <path d="M150 274 L192 264" stroke="var(--line-strong)" />
          <text x="196" y="266" {...label}>entrada na base</text>
          <text x="150" y="30" {...mono} textAnchor="middle">antegrada intramedular</text>
        </>
      ) : (
        <>
          {/* Metacarpo adjacente para ancoragem transversa */}
          <LongBoneShaft d="M258 92 L258 238" width={26} />
          <circle cx="258" cy="72" r="22" {...bone} />
          {/* Fios transversos ao metacarpo íntegro */}
          {[132, 200].map((y) => (
            <g key={y}>
              <line x1="140" y1={y} x2="278" y2={y} {...tealStroke} strokeWidth={4} />
              <circle cx="140" cy={y} r="4.5" fill="var(--teal)" />
            </g>
          ))}
          <path d="M278 132 L302 120" stroke="var(--line-strong)" />
          <text x="306" y="122" {...label} fill="var(--teal)">fios transversos</text>
          <text x="258" y="264" {...label} textAnchor="middle">metacarpo íntegro</text>
          <text x="150" y="30" {...mono} textAnchor="middle">pinagem transversa</text>
        </>
      )}

      <text x="210" y="292" {...label} textAnchor="middle">
        Minimamente invasiva; preserva partes moles, reabilitação precoce.
      </text>
    </svg>
  );
};

/* ============================================================================
   7 · Fixação com placa/parafuso — diáfise transversa ou oblíqua.
   ========================================================================== */
export const PlateFixation: FC<FigureProps> = ({ className, title, variant }) => {
  const lag = (variant ?? "placa").toLowerCase() === "parafuso";

  return (
    <svg
      viewBox="0 0 340 316"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `Fixação da diáfise do metacarpo: ${lag ? "parafusos interfragmentários" : "placa dorsal"}`}</title>

      <circle cx="150" cy="66" r="24" {...bone} />
      <LongBoneShaft d="M150 88 L150 236" width={30} />
      <path {...bone} d="M126 236 C120 258, 122 282, 138 292 L162 292 C178 282, 180 258, 174 236 Z" />

      {!lag ? (
        <>
          {/* Fratura transversa */}
          <line x1="132" y1="160" x2="168" y2="160" {...corticalStroke} strokeWidth={2.5} />
          {/* Placa dorsal */}
          <rect x="138" y="108" width="24" height="104" rx="10" fill="none" stroke="var(--teal)" strokeWidth="3" />
          {[124, 146, 174, 196].map((cy) => (
            <g key={cy}>
              <circle cx="150" cy={cy} r="6" fill="var(--surface)" stroke="var(--teal)" strokeWidth="2.5" />
              <line x1="128" y1={cy} x2="172" y2={cy} stroke="var(--teal)" strokeWidth="2" />
            </g>
          ))}
          <path d="M162 122 L196 108" stroke="var(--line-strong)" />
          <text x="200" y="110" {...label} fill="var(--teal)">placa dorsal</text>
          <text x="150" y="30" {...mono} textAnchor="middle">placa e parafusos</text>
        </>
      ) : (
        <>
          {/* Fratura oblíqua/espiral longa */}
          <line x1="128" y1="140" x2="172" y2="200" {...corticalStroke} strokeWidth={2.5} />
          {/* Parafusos interfragmentários perpendiculares ao traço */}
          {[
            [150, 155],
            [150, 185],
          ].map(([cx, cy]) => (
            <g key={cy}>
              <line x1={cx - 24} y1={cy - 12} x2={cx + 24} y2={cy + 12} stroke="var(--teal)" strokeWidth="3" strokeLinecap="round" />
              <circle cx={cx - 24} cy={cy - 12} r="5" fill="var(--teal)" />
            </g>
          ))}
          <path d="M180 172 L214 160" stroke="var(--line-strong)" />
          <text x="218" y="162" {...label} fill="var(--teal)">parafusos de compressão</text>
          <text x="150" y="30" {...mono} textAnchor="middle">parafusos interfragmentários</text>
        </>
      )}

      <text x="170" y="292" {...label} textAnchor="middle">
        <tspan x="170" dy="0em">Reservada a instabilidade, cominuição,</tspan>
        <tspan x="170" dy="1.15em">múltiplos raios ou desvio rotacional irredutível.</tspan>
      </text>
    </svg>
  );
};

export const figures: Record<string, FC<FigureProps>> = {
  "fratura-metacarpo:anatomia": Anatomy,
  "fratura-metacarpo:localizacao": FractureSite,
  "fratura-metacarpo:angulacao": AngularTolerance,
  "fratura-metacarpo:rotacao": Rotation,
  "fratura-metacarpo:reducao-jahss": JahssReduction,
  "fratura-metacarpo:fio-k": KWireFixation,
  "fratura-metacarpo:placa": PlateFixation,
};
