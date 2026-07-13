import type { FC } from "react";
import type { FigureProps } from "../../../types/topic";

/* ============================================================================
   Anatomia do tornozelo — 3 figuras esquemáticas em line-art 2 tons.
   Ossos: stroke var(--ink-soft), fill var(--surface).
   Estruturas ligamentares: stroke var(--teal). Rótulos: fill var(--muted).
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

/** Visão AP da pinça (mortise): tíbia + fíbula formando o encaixe do tálus. */
export const AnkleMortise: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 320 280"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Pinça do tornozelo (mortise) — visão AP"}</title>

    {/* Tíbia — corpo + plafond + maléolo medial */}
    <path
      {...boneStyle}
      d="M96 18
         C 92 60, 90 96, 92 132
         L 96 168
         C 100 182, 112 190, 120 196
         L 132 206
         C 138 210, 138 220, 132 224
         L 118 226
         C 106 224, 100 212, 98 200
         L 90 174
         C 78 176, 70 172, 66 160
         C 60 120, 62 66, 70 18 Z"
    />
    {/* Fíbula — maléolo lateral */}
    <path
      {...boneStyle}
      d="M232 26
         C 236 70, 236 118, 232 158
         C 230 180, 224 200, 214 210
         C 208 216, 200 214, 198 206
         L 200 176
         C 204 138, 206 82, 204 30 Z"
    />
    {/* Tálus (cúpula) dentro do encaixe */}
    <path
      {...boneStyle}
      fill="var(--surface-2, var(--surface))"
      d="M118 220
         C 130 200, 158 194, 182 202
         C 196 206, 202 214, 200 226
         C 198 240, 176 250, 152 250
         C 130 250, 116 240, 114 230
         C 113 226, 115 222, 118 220 Z"
    />

    {/* Espaço articular uniforme (linha teal tracejada) */}
    <path
      d="M108 214 C 130 196, 168 190, 196 200"
      fill="none"
      stroke="var(--teal)"
      strokeWidth="1.4"
      strokeDasharray="4 4"
    />
    <path
      d="M200 200 C 206 208, 206 218, 202 226"
      fill="none"
      stroke="var(--teal)"
      strokeWidth="1.4"
      strokeDasharray="4 4"
    />

    {/* setas indicando espaço articular uniforme */}
    <g stroke="var(--teal)" strokeWidth="1" fill="var(--teal)" opacity="0.85">
      <line x1="150" y1="196" x2="150" y2="206" />
      <line x1="174" y1="198" x2="174" y2="208" />
    </g>

    <text x="70" y="14" {...label} textAnchor="middle">
      Tíbia
    </text>
    <text x="66" y="240" {...label} textAnchor="end">
      Maléolo medial
    </text>
    <text x="238" y="20" {...label} textAnchor="middle">
      Fíbula
    </text>
    <text x="248" y="216" {...label} textAnchor="start">
      Maléolo lateral
    </text>
    <text x="152" y="272" {...label} textAnchor="middle">
      Tálus
    </text>
    <text x="152" y="186" {...label} textAnchor="middle" fill="var(--teal)">
      espaço articular uniforme
    </text>
  </svg>
);

/** Conceito do "anel" do tornozelo: lesão em 1 ponto implica 2º ponto. */
export const AnkleRing: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 300 300"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Anel do tornozelo — conceito ósseo-ligamentar"}</title>

    {/* Anel esquemático: quadrantes ósseo (sólido) e ligamentar (tracejado) */}
    {/* topo = plafond tibial (ósseo) */}
    <path
      d="M96 78 A 78 78 0 0 1 204 78"
      fill="none"
      stroke="var(--ink-soft)"
      strokeWidth="7"
      strokeLinecap="round"
    />
    {/* lateral = fíbula / sindesmose (ligamentar tracejado) */}
    <path
      d="M212 90 A 78 78 0 0 1 212 210"
      fill="none"
      stroke="var(--teal)"
      strokeWidth="7"
      strokeLinecap="round"
      strokeDasharray="3 9"
    />
    {/* base = tálus (ósseo) */}
    <path
      d="M204 222 A 78 78 0 0 1 96 222"
      fill="none"
      stroke="var(--ink-soft)"
      strokeWidth="7"
      strokeLinecap="round"
    />
    {/* medial = deltoide (ligamentar tracejado) */}
    <path
      d="M88 210 A 78 78 0 0 1 88 90"
      fill="none"
      stroke="var(--teal)"
      strokeWidth="7"
      strokeLinecap="round"
      strokeDasharray="3 9"
    />

    {/* Dois pontos de ruptura marcados em cortical-red (regra do anel) */}
    <g className="fx-line">
      <circle cx="150" cy="61" r="7" fill="var(--cortical)" stroke="none" />
      <circle cx="150" cy="239" r="7" fill="var(--cortical)" stroke="none" />
    </g>

    <text x="150" y="34" {...label} textAnchor="middle">
      Plafond tibial (ósseo)
    </text>
    <text x="150" y="276" {...label} textAnchor="middle">
      Tálus (ósseo)
    </text>
    <text x="256" y="154" {...label} textAnchor="start">
      Sindesmose
    </text>
    <text x="44" y="154" {...label} textAnchor="end">
      Deltoide
    </text>
    <text
      x="150"
      y="154"
      {...label}
      textAnchor="middle"
      fill="var(--cortical)"
      fontFamily="var(--font-mono, monospace)"
    >
      1 lesão → 2ª lesão
    </text>
  </svg>
);

/** Ligamentos: sindesmose + colateral lateral + deltoide medial. */
export const AnkleLigaments: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 340 280"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Ligamentos do tornozelo — sindesmose, lateral e deltoide"}</title>

    {/* Tíbia */}
    <path
      {...boneStyle}
      d="M150 12 C 146 70, 146 130, 150 176 C 152 196, 158 210, 150 220 C 138 220, 132 206, 130 188 C 126 130, 128 62, 134 12 Z"
    />
    {/* Fíbula (lateral, à direita) */}
    <path
      {...boneStyle}
      d="M210 20 C 214 72, 214 128, 210 172 C 208 194, 200 214, 190 222 C 184 226, 178 222, 178 214 L 182 176 C 186 128, 188 70, 186 24 Z"
    />
    {/* Tálus */}
    <path
      {...boneStyle}
      fill="var(--surface-2, var(--surface))"
      d="M110 230 C 128 216, 176 214, 200 226 C 214 232, 214 246, 198 254 C 168 264, 128 262, 112 250 C 104 244, 104 234, 110 230 Z"
    />
    {/* Calcâneo (base) */}
    <path
      {...boneStyle}
      d="M120 258 C 150 262, 196 260, 214 262 C 224 264, 224 274, 214 276 L 128 276 C 116 274, 112 262, 120 258 Z"
    />

    {/* Sindesmose: entre tíbia e fíbula (teal, várias fibras) */}
    <g stroke="var(--teal)" strokeWidth="2.2" fill="none" strokeLinecap="round">
      <line x1="154" y1="60" x2="184" y2="66" />
      <line x1="152" y1="150" x2="180" y2="156" />
      <line x1="153" y1="105" x2="182" y2="108" />
    </g>
    {/* Colateral lateral (teal, leque da fíbula) */}
    <g stroke="var(--teal)" strokeWidth="2.2" fill="none" strokeLinecap="round">
      <path d="M185 210 C 200 214, 208 222, 205 234" />
      <path d="M185 214 C 178 228, 168 240, 156 246" />
      <path d="M188 208 C 206 210, 218 220, 220 236" />
    </g>
    {/* Deltoide medial (teal, leque medial) */}
    <g stroke="var(--teal)" strokeWidth="2.2" fill="none" strokeLinecap="round">
      <path d="M138 206 C 124 216, 116 230, 120 244" />
      <path d="M140 208 C 134 224, 130 240, 134 250" />
    </g>

    <text x="140" y="10" {...label} textAnchor="middle">
      Tíbia
    </text>
    <text x="200" y="16" {...label} textAnchor="middle">
      Fíbula
    </text>
    <text x="248" y="104" {...label} textAnchor="start" fill="var(--teal)">
      Sindesmose
    </text>
    <text x="248" y="120" {...label} textAnchor="start">
      LTFA-I / LTFP-I / interósseo
    </text>
    <text x="250" y="238" {...label} textAnchor="start" fill="var(--teal)">
      Colateral lateral
    </text>
    <text x="250" y="254" {...label} textAnchor="start">
      LTFA · LCF · LTFP
    </text>
    <text x="92" y="238" {...label} textAnchor="end" fill="var(--teal)">
      Deltoide
    </text>
    <text x="92" y="254" {...label} textAnchor="end">
      (medial)
    </text>
    {/* linhas de chamada finas */}
    <g stroke="var(--line-strong)" strokeWidth="0.8" fill="none">
      <line x1="184" y1="100" x2="244" y2="100" />
      <line x1="212" y1="230" x2="248" y2="232" />
      <line x1="126" y1="230" x2="96" y2="232" />
    </g>
  </svg>
);
