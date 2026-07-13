import type { FC } from "react";
import type { FigureProps } from "../../../types/topic";

/* ============================================================================
   Fratura do colo femoral — figuras esquemáticas originais (line-art 2 tons).
   Convenções de cor (somente via CSS vars):
   • Osso:            stroke var(--ink-soft), fill var(--surface)
   • 2º plano:        var(--surface-2, var(--surface))
   • Implante/vasos:  stroke var(--teal)  (parafusos, hastes, vasos retinaculares)
   • Traço de fratura:stroke var(--cortical) + className "fx-line"
   • Medidas/ângulos: var(--amber)
   • Rótulos:         fontSize 11, fill var(--muted), font-body
   • Códigos mono:    font-mono
   ========================================================================== */

const bone = {
  fill: "var(--surface)",
  stroke: "var(--ink-soft)",
  strokeWidth: 1.6,
  strokeLinejoin: "round" as const,
};

const bone2 = {
  fill: "var(--surface-2, var(--surface))",
  stroke: "var(--ink-soft)",
  strokeWidth: 1.4,
  strokeLinejoin: "round" as const,
};

const label = {
  fontSize: 11,
  fill: "var(--muted)",
  fontFamily: "var(--font-body, sans-serif)",
};

const labelMono = {
  fontSize: 11,
  fill: "var(--muted)",
  fontFamily: "var(--font-mono, monospace)",
};

const implant = {
  fill: "none",
  stroke: "var(--teal)",
  strokeWidth: 3,
  strokeLinecap: "round" as const,
};

const amber = "var(--amber)";

/* ──────────────────────────────────────────────────────────────────────────
   1) ANATOMIA — fêmur proximal coronal + suprimento vascular retinacular.
   ────────────────────────────────────────────────────────────────────────── */
export const Anatomia: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 320 300"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Anatomia do colo femoral e suprimento vascular da cabeça"}</title>

    {/* Acetábulo (osso ilíaco, 2º plano) */}
    <path
      {...bone2}
      d="M40 40 C 70 34, 118 36, 150 66 C 120 60, 84 62, 60 82 L 40 78 Z"
    />

    {/* Diáfise + região trocantérica */}
    <path
      {...bone}
      d="M150 150 C 176 108, 214 96, 236 108 L 250 118 L 252 280 L 214 280 L 210 168 C 206 150, 186 146, 172 158 Z"
    />
    {/* Trocânter menor */}
    <path {...bone} d="M172 176 C 156 178, 150 190, 156 202 C 168 200, 176 190, 176 178 Z" />

    {/* Colo femoral */}
    <path {...bone} d="M96 120 C 120 104, 150 116, 172 158 C 158 172, 132 176, 108 160 Z" />

    {/* Cabeça femoral */}
    <circle {...bone} cx="96" cy="104" r="46" />

    {/* Fóvea + artéria do ligamento redondo (contribuição menor) */}
    <circle cx="74" cy="98" r="5" fill="var(--surface-2, var(--surface))" stroke="var(--ink-soft)" strokeWidth="1.2" />
    <path d="M74 98 C 60 92, 50 92, 42 96" fill="none" stroke="var(--teal)" strokeWidth="1.4" strokeDasharray="2 3" />

    {/* Anel arterial extracapsular (circunflexa femoral medial dominante) */}
    <path
      d="M150 172 C 176 176, 196 166, 202 148"
      fill="none"
      stroke="var(--teal)"
      strokeWidth="2.4"
    />
    {/* Vasos retinaculares ascendentes (posterossuperiores) — irrigam a cabeça */}
    <g fill="none" stroke="var(--teal)" strokeWidth="1.6">
      <path d="M150 168 C 132 152, 114 132, 100 112" />
      <path d="M160 160 C 140 140, 120 122, 104 104" />
      <path d="M142 172 C 128 160, 116 146, 106 130" />
    </g>

    {/* Rótulos */}
    <text x="96" y="106" {...label} textAnchor="middle">cabeça</text>
    <text x="132" y="150" {...label} textAnchor="middle">colo</text>
    <text x="243" y="132" {...label} textAnchor="middle">trocânter maior</text>
    <text x="196" y="214" {...label} textAnchor="start">trocânter menor</text>
    <text x="150" y="196" {...label} textAnchor="start" fill="var(--teal)">circunflexa femoral medial</text>
    <text x="188" y="96" {...label} textAnchor="start" fill="var(--teal)">vasos retinaculares</text>
    <text x="26" y="112" {...label} textAnchor="start" fill="var(--teal)">a. lig. redondo</text>
    <text x="40" y="292" {...label} textAnchor="start">
      Suprimento é retrógrado: a fratura do colo interrompe os vasos retinaculares → risco de necrose.
    </text>
  </svg>
);

/* ──────────────────────────────────────────────────────────────────────────
   Fêmur proximal de referência (para Garden) — desenhado sem a cabeça,
   que é renderizada à parte com deslocamento/rotação por variante.
   ────────────────────────────────────────────────────────────────────────── */
const FemurBody: FC = () => (
  <>
    {/* diáfise + trocânter maior */}
    <path
      {...bone}
      d="M150 150 C 176 108, 214 96, 236 108 L 250 118 L 252 260 L 214 260 L 210 168 C 206 150, 186 146, 172 158 Z"
    />
    {/* coto proximal do colo (lado do corpo) */}
    <path {...bone} d="M150 150 C 158 154, 166 158, 172 158 C 158 172, 150 168, 138 162 Z" />
  </>
);

/* ──────────────────────────────────────────────────────────────────────────
   2) GARDEN — I a IV (variantes clicáveis). Alinhamento das trabéculas.
   ────────────────────────────────────────────────────────────────────────── */
export const Garden: FC<FigureProps> = ({ className, title, variant }) => {
  const v = (variant ?? "I").toUpperCase();

  // rotação da cabeça e gap conforme o grau de deslocamento
  const cfg: Record<string, { rot: number; gap: boolean; desc: string; complete: boolean }> = {
    I: { rot: -16, gap: false, complete: false, desc: "Incompleta / impactada em valgo" },
    II: { rot: 0, gap: false, complete: true, desc: "Completa, sem desvio" },
    III: { rot: 18, gap: true, complete: true, desc: "Completa, desvio parcial (varo)" },
    IV: { rot: 0, gap: true, complete: true, desc: "Completa, desvio total" },
  };
  const c = cfg[v] ?? cfg.I;
  const headShift = v === "IV" ? 10 : 0;

  return (
    <svg
      viewBox="0 0 300 280"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `Classificação de Garden — tipo ${v}: ${c.desc}`}</title>

      {/* acetábulo */}
      <path {...bone2} d="M28 34 C 66 28, 116 32, 150 62 C 116 56, 78 58, 54 78 L 30 74 Z" />

      <FemurBody />

      {/* cabeça femoral + trabéculas primárias, com rotação da variante */}
      <g transform={`translate(${-headShift} ${headShift}) rotate(${c.rot} 96 104)`}>
        <circle {...bone} cx="96" cy="104" r="46" />
        <path {...bone} d="M96 150 C 120 150, 140 156, 150 150 C 142 138, 120 130, 96 132 Z" />
        {/* trabéculas de compressão principais (feixe medial) */}
        <g stroke="var(--ink-soft)" strokeWidth="1" fill="none" opacity="0.85">
          <path d="M70 138 C 78 116, 92 96, 116 82" />
          <path d="M80 144 C 88 122, 104 100, 128 88" />
          <path d="M62 128 C 70 108, 84 90, 106 78" />
        </g>
        <text x="96" y="100" {...label} textAnchor="middle">cabeça</text>
      </g>

      {/* traço de fratura */}
      <g className="fx-line" stroke="var(--cortical)">
        {c.complete ? (
          <line
            x1="132"
            y1={c.gap ? 176 : 168}
            x2="150"
            y2={c.gap ? 138 : 150}
            strokeWidth="2.4"
            strokeDasharray={c.gap ? "3 3" : undefined}
          />
        ) : (
          // incompleta: só o córtex lateral está roto
          <line x1="146" y1="152" x2="150" y2="150" strokeWidth="2.4" />
        )}
      </g>

      {/* rótulo do tipo (código mono) */}
      <text x="150" y="26" {...labelMono} textAnchor="middle" fill="var(--ink-soft)">
        Garden {v}
      </text>
      <text x="150" y="262" {...label} textAnchor="middle">{c.desc}</text>
      <text x="150" y="278" {...label} textAnchor="middle" fill="var(--teal)">
        I–II estáveis · III–IV desviadas (maior risco de necrose)
      </text>
    </svg>
  );
};

/* ──────────────────────────────────────────────────────────────────────────
   3) PAUWELS — 1 a 3 (ângulo do traço com a horizontal → cisalhamento).
   ────────────────────────────────────────────────────────────────────────── */
export const Pauwels: FC<FigureProps> = ({ className, title, variant }) => {
  const v = variant ?? "1";
  const cfg: Record<string, { deg: number; label: string }> = {
    "1": { deg: 20, label: "< 30° — predomínio de compressão" },
    "2": { deg: 45, label: "30–50° — misto" },
    "3": { deg: 68, label: "> 50–70° — predomínio de cisalhamento" },
  };
  const c = cfg[v] ?? cfg["1"];

  // geometria do traço a partir de um ponto pivô no colo
  const cx = 150;
  const cy = 150;
  const L = 70;
  const rad = (c.deg * Math.PI) / 180;
  // linha do traço: inclinação medida a partir da horizontal
  const x1 = cx - L * Math.cos(rad);
  const y1 = cy + L * Math.sin(rad);
  const x2 = cx + L * Math.cos(rad);
  const y2 = cy - L * Math.sin(rad);
  // arco de medida (amber)
  const ax1 = cx + 40;
  const ay1 = cy;
  const ax2 = cx + 40 * Math.cos(rad);
  const ay2 = cy - 40 * Math.sin(rad);

  return (
    <svg
      viewBox="0 0 300 260"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `Classificação de Pauwels — tipo ${v} (${c.deg}° com a horizontal)`}</title>

      {/* cabeça */}
      <circle {...bone} cx="96" cy="96" r="42" />
      {/* colo */}
      <path {...bone} d="M108 128 C 132 118, 168 130, 196 168 C 176 186, 140 188, 116 160 Z" />
      {/* trocânter + diáfise */}
      <path
        {...bone}
        d="M196 168 C 210 150, 236 148, 250 162 L 258 176 L 260 240 L 214 240 L 208 190 Z"
      />

      {/* referência horizontal (tracejada) */}
      <line x1="70" y1={cy} x2="240" y2={cy} stroke="var(--line-strong)" strokeWidth="1.2" strokeDasharray="4 4" />

      {/* traço de fratura */}
      <g className="fx-line">
        <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--cortical)" strokeWidth="2.6" />
      </g>

      {/* arco e rótulo do ângulo (amber) */}
      <path
        d={`M ${ax1} ${ay1} A 40 40 0 0 0 ${ax2} ${ay2}`}
        fill="none"
        stroke={amber}
        strokeWidth="1.6"
      />
      <text x={cx + 48} y={cy - 8} {...labelMono} fill={amber} textAnchor="start">
        {c.deg}°
      </text>

      {/* vetores de força esquemáticos */}
      <text x="150" y="24" {...labelMono} textAnchor="middle" fill="var(--ink-soft)">
        Pauwels {v}
      </text>
      <text x="150" y="248" {...label} textAnchor="middle">{c.label}</text>
      <text x="150" y="262" {...label} textAnchor="middle" fill="var(--cortical)">
        maior ângulo → maior cisalhamento → maior risco de falha da fixação
      </text>
    </svg>
  );
};

/* ──────────────────────────────────────────────────────────────────────────
   4) VIA DE ACESSO — Smith-Petersen (anterior, intervalo sartório/TFL).
   ────────────────────────────────────────────────────────────────────────── */
export const ViaSmithPetersen: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 300 260"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Via anterior de Smith-Petersen — intervalo sartório × tensor da fáscia lata"}</title>

    {/* contorno do quadril anterior (2º plano) */}
    <path {...bone2} d="M40 30 C 120 20, 200 30, 260 60 L 260 230 L 40 230 Z" opacity="0.5" />

    {/* EIAS referência */}
    <circle cx="120" cy="60" r="4" fill="var(--ink-soft)" />
    <text x="126" y="56" {...label} textAnchor="start">EIAS</text>

    {/* sartório (medial) e TFL (lateral) — plano superficial */}
    <path fill="var(--teal-tint)" stroke="var(--teal)" strokeWidth="1.6" d="M118 64 C 104 120, 96 180, 100 224 L 118 224 C 116 180, 122 120, 132 66 Z" />
    <path fill="var(--teal-tint)" stroke="var(--teal)" strokeWidth="1.6" d="M126 64 C 150 118, 168 176, 176 224 L 196 224 C 184 174, 160 116, 140 66 Z" />
    <text x="92" y="150" {...label} textAnchor="end" fill="var(--teal)">sartório</text>
    <text x="182" y="150" {...label} textAnchor="start" fill="var(--teal)">TFL</text>

    {/* intervalo internervoso (linha de incisão) */}
    <line x1="122" y1="66" x2="130" y2="224" stroke="var(--cortical)" strokeWidth="2.2" strokeDasharray="6 4" className="fx-line" />
    <text x="150" y="42" {...label} textAnchor="middle" fill="var(--cortical)">incisão / intervalo</text>

    {/* nervo em risco: cutâneo femoral lateral (amber) */}
    <path d="M128 66 C 138 100, 140 140, 138 180" fill="none" stroke={amber} strokeWidth="1.6" strokeDasharray="2 3" />
    <text x="150" y="200" {...label} textAnchor="start" fill={amber}>n. cutâneo femoral lat.</text>

    <text x="40" y="250" {...label} textAnchor="start">
      Superficial: sartório (n. femoral) × TFL (n. glúteo sup.). Profundo: reto femoral × glúteo médio.
    </text>
  </svg>
);

/* ──────────────────────────────────────────────────────────────────────────
   5) VIA DE ACESSO — Watson-Jones (anterolateral, glúteo médio × TFL).
   ────────────────────────────────────────────────────────────────────────── */
export const ViaWatsonJones: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 300 260"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Via anterolateral de Watson-Jones — intervalo glúteo médio × tensor da fáscia lata"}</title>

    <path {...bone2} d="M40 30 C 120 20, 200 30, 260 60 L 260 230 L 40 230 Z" opacity="0.5" />

    {/* trocânter maior de referência */}
    <path {...bone} d="M150 96 C 172 92, 190 104, 192 128 C 186 150, 164 154, 148 140 Z" />
    <text x="170" y="120" {...label} textAnchor="middle">trocânter maior</text>

    {/* glúteo médio (posterossuperior) */}
    <path fill="var(--teal-tint)" stroke="var(--teal)" strokeWidth="1.6" d="M150 60 C 118 70, 100 92, 104 118 L 148 128 C 150 104, 154 82, 168 66 Z" />
    <text x="112" y="100" {...label} textAnchor="middle" fill="var(--teal)">glúteo médio</text>

    {/* TFL (anterior) */}
    <path fill="var(--teal-tint)" stroke="var(--teal)" strokeWidth="1.6" d="M172 64 C 196 90, 206 140, 204 200 L 186 200 C 184 144, 172 100, 156 70 Z" />
    <text x="196" y="150" {...label} textAnchor="start" fill="var(--teal)">TFL</text>

    {/* linha de incisão / intervalo, centrada no trocânter */}
    <line x1="170" y1="60" x2="176" y2="216" stroke="var(--cortical)" strokeWidth="2.2" strokeDasharray="6 4" className="fx-line" />
    <text x="150" y="42" {...label} textAnchor="middle" fill="var(--cortical)">incisão sobre o trocânter</text>

    <text x="40" y="250" {...label} textAnchor="start">
      Intervalo anterior ao glúteo médio; acesso direto ao colo. Cuidado com o abdutor e a a. circunflexa lat.
    </text>
  </svg>
);

/* ──────────────────────────────────────────────────────────────────────────
   6) PASSO — Redução anatômica (jovem): manobra e checagem do alinhamento.
   ────────────────────────────────────────────────────────────────────────── */
export const StepReducao: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 300 260"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Passo — redução anatômica do colo e checagem de Garden alinhado"}</title>

    {/* estado desviado (fantasma, 2º plano) */}
    <g opacity="0.35">
      <circle {...bone2} cx="82" cy="112" r="40" />
      <path {...bone2} d="M104 138 C 128 130, 158 142, 182 174 L 150 190 C 128 172, 108 158, 96 148 Z" />
    </g>

    {/* fêmur reduzido */}
    <path {...bone} d="M150 156 C 176 116, 214 104, 236 116 L 250 126 L 252 236 L 214 236 L 210 176 C 206 158, 186 154, 172 166 Z" />
    <path {...bone} d="M100 130 C 124 116, 154 126, 176 166 C 160 180, 132 184, 108 168 Z" />
    <circle {...bone} cx="98" cy="100" r="44" />

    {/* traço reduzido (bem apostado) */}
    <g className="fx-line">
      <line x1="128" y1="168" x2="150" y2="150" stroke="var(--cortical)" strokeWidth="2" />
    </g>

    {/* setas de manobra (tração + rotação interna) */}
    <path d="M60 200 C 80 176, 92 156, 98 140" fill="none" stroke={amber} strokeWidth="1.8" markerEnd="url(#arrow)" />
    <defs>
      <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <path d="M0 0 L6 3 L0 6 Z" fill={amber} />
      </marker>
    </defs>
    <text x="58" y="214" {...label} textAnchor="start" fill={amber}>tração + rotação interna</text>

    <text x="150" y="24" {...label} textAnchor="middle" fill="var(--teal)">alvo: redução anatômica (Garden alinhado)</text>
    <text x="40" y="252" {...label} textAnchor="start">
      No jovem, redução fechada urgente; se inaceitável → redução aberta. Índice de Garden 155°–180° em AP e perfil.
    </text>
  </svg>
);

/* ──────────────────────────────────────────────────────────────────────────
   7) PASSO — Fixação com parafusos canulados em triângulo invertido.
   activeStep opcional destaca o 3º parafuso.
   ────────────────────────────────────────────────────────────────────────── */
export const StepParafusos: FC<FigureProps> = ({ className, title, activeStep }) => (
  <svg
    viewBox="0 0 300 260"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Passo — fixação com três parafusos canulados em triângulo invertido"}</title>

    {/* fêmur */}
    <path {...bone} d="M150 156 C 176 116, 214 104, 236 116 L 250 126 L 252 236 L 214 236 L 210 176 C 206 158, 186 154, 172 166 Z" />
    <path {...bone} d="M100 130 C 124 116, 154 126, 176 166 C 160 180, 132 184, 108 168 Z" />
    <circle {...bone} cx="98" cy="100" r="44" />

    {/* traço reduzido */}
    <g className="fx-line">
      <line x1="128" y1="168" x2="152" y2="148" stroke="var(--cortical)" strokeWidth="1.6" strokeDasharray="3 3" />
    </g>

    {/* três parafusos canulados — triângulo invertido, paralelos */}
    <g {...implant}>
      {/* inferior (apoiado no calcar) */}
      <line x1="238" y1="196" x2="86" y2="118" />
      {/* posterossuperior */}
      <line x1="244" y1="150" x2="92" y2="76" />
      {/* anterossuperior (destacado se activeStep>=3) */}
      <line
        x1="240"
        y1="168"
        x2="88"
        y2="94"
        stroke={activeStep && activeStep >= 3 ? "var(--teal-deep)" : "var(--teal)"}
        strokeWidth={activeStep && activeStep >= 3 ? 4 : 3}
      />
    </g>
    {/* roscas (extremidade que cruza o traço) */}
    <g stroke="var(--teal-deep)" strokeWidth="1.2">
      <line x1="86" y1="118" x2="120" y2="136" strokeDasharray="2 2" />
      <line x1="92" y1="76" x2="126" y2="94" strokeDasharray="2 2" />
      <line x1="88" y1="94" x2="122" y2="112" strokeDasharray="2 2" />
    </g>

    <text x="150" y="24" {...label} textAnchor="middle" fill="var(--teal)">triângulo invertido, parafusos paralelos</text>
    <text x="40" y="240" {...label} textAnchor="start">Inferior apoiado no calcar; posterior junto à cortical posterior.</text>
    <text x="40" y="254" {...label} textAnchor="start">Paralelismo permite deslizamento e compressão dinâmica no traço.</text>
  </svg>
);

/* ──────────────────────────────────────────────────────────────────────────
   8) PASSO — Artroplastia (idoso). Variantes: hemi × total.
   ────────────────────────────────────────────────────────────────────────── */
export const StepArtroplastia: FC<FigureProps> = ({ className, title, variant }) => {
  const total = (variant ?? "hemi") === "total";
  return (
    <svg
      viewBox="0 0 300 280"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>
        {title ?? (total ? "Passo — artroplastia total do quadril" : "Passo — hemiartroplastia (bipolar)")}
      </title>

      {/* pelve / acetábulo */}
      <path {...bone2} d="M30 30 C 74 22, 122 28, 152 62 C 120 56, 82 58, 58 82 L 32 78 Z" />

      {/* componente acetabular (só no total) */}
      {total ? (
        <>
          <path d="M60 70 C 92 52, 132 56, 150 84 C 132 74, 100 74, 74 90 Z" fill="var(--teal-tint)" stroke="var(--teal)" strokeWidth="2" />
          <text x="70" y="52" {...label} textAnchor="start" fill="var(--teal)">componente acetabular</text>
        </>
      ) : (
        <text x="60" y="52" {...label} textAnchor="start">acetábulo nativo preservado</text>
      )}

      {/* diáfise femoral */}
      <path {...bone} d="M150 156 C 176 118, 214 106, 236 118 L 250 128 L 252 250 L 214 250 L 210 176 C 206 160, 186 156, 172 168 Z" />

      {/* haste femoral (implante teal) */}
      <path
        d="M120 96 C 150 118, 176 150, 196 200 L 226 240 L 230 200 C 214 156, 190 122, 160 96 Z"
        fill="var(--teal-tint)"
        stroke="var(--teal)"
        strokeWidth="2.2"
      />
      {/* cabeça protética / bipolar */}
      {total ? (
        <circle cx="96" cy="90" r="30" fill="var(--teal-tint)" stroke="var(--teal)" strokeWidth="2.2" />
      ) : (
        <>
          <circle cx="96" cy="90" r="36" fill="none" stroke="var(--teal)" strokeWidth="2.2" />
          <circle cx="96" cy="90" r="24" fill="var(--teal-tint)" stroke="var(--teal)" strokeWidth="2" />
        </>
      )}

      <text x="150" y="24" {...labelMono} textAnchor="middle" fill="var(--ink-soft)">
        {total ? "Artroplastia total" : "Hemiartroplastia bipolar"}
      </text>
      <text x="204" y="120" {...label} textAnchor="start" fill="var(--teal)">haste femoral</text>
      <text x="40" y="270" {...label} textAnchor="start">
        {total
          ? "Melhor função/menos revisão em ativo e independente; maior risco de luxação."
          : "Mais rápida e estável; escolha no idoso frágil, menos ativo."}
      </text>
    </svg>
  );
};

/* ──────────────────────────────────────────────────────────────────────────
   Registro exportado — chaves prefixadas pelo slug deste tópico.
   ────────────────────────────────────────────────────────────────────────── */
export const figures: Record<string, FC<FigureProps>> = {
  "fratura-colo-femoral:anatomia": Anatomia,
  "fratura-colo-femoral:garden": Garden,
  "fratura-colo-femoral:pauwels": Pauwels,
  "fratura-colo-femoral:via-smith-petersen": ViaSmithPetersen,
  "fratura-colo-femoral:via-watson-jones": ViaWatsonJones,
  "fratura-colo-femoral:step-reducao": StepReducao,
  "fratura-colo-femoral:step-parafusos": StepParafusos,
  "fratura-colo-femoral:step-artroplastia": StepArtroplastia,
};
