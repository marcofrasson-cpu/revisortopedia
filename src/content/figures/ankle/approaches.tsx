import type { FC } from "react";
import type { FigureProps } from "../../../types/topic";

/* ============================================================================
   Vias de acesso — lateral, medial, posterolateral.
   Contorno do tornozelo em line-art; linha de incisão em var(--cortical)
   (className "fx-line"); intervalos/estruturas em var(--teal).
   ========================================================================== */

const skin = {
  fill: "var(--surface)",
  stroke: "var(--ink-soft)",
  strokeWidth: 1.6,
  strokeLinejoin: "round" as const,
};

const boneStyle = {
  fill: "var(--surface-2, var(--surface))",
  stroke: "var(--ink-soft)",
  strokeWidth: 1.3,
  strokeLinejoin: "round" as const,
};

const label = {
  fontSize: 11,
  fill: "var(--muted)",
  fontFamily: "var(--font-body, sans-serif)",
};

/** Contorno comum de perna/tornozelo em corte, com ossos internos. */
const LegOutline: FC = () => (
  <>
    {/* silhueta da perna distal + pé */}
    <path
      {...skin}
      d="M104 20
         C 96 70, 92 120, 96 160
         C 98 186, 106 206, 96 224
         C 88 238, 88 252, 100 260
         C 130 272, 190 272, 220 260
         C 232 254, 230 240, 220 232
         C 210 224, 208 210, 210 196
         C 214 150, 214 80, 208 20 Z"
    />
    {/* tíbia */}
    <path {...boneStyle} d="M126 40 C 122 90, 122 140, 128 178 C 132 196, 128 208, 138 214 C 148 208, 146 196, 146 180 C 148 140, 148 88, 146 44 Z" />
    {/* fíbula */}
    <path {...boneStyle} d="M180 46 C 184 92, 184 140, 180 178 C 178 196, 172 210, 182 216 C 192 210, 190 196, 192 180 C 194 138, 194 92, 192 48 Z" />
    {/* tálus */}
    <path {...boneStyle} d="M120 226 C 140 216, 184 216, 202 226 C 212 232, 210 244, 196 250 C 168 258, 140 256, 124 248 C 116 244, 114 230, 120 226 Z" />
  </>
);

/** Via lateral — incisão sobre a fíbula. */
export const ApproachLateral: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 320 290"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Via de acesso lateral — sobre a fíbula"}</title>
    <LegOutline />
    {/* Incisão longitudinal sobre a fíbula */}
    <g className="fx-line">
      <line
        x1="186"
        y1="60"
        x2="188"
        y2="228"
        stroke="var(--cortical)"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
    </g>
    <text x="234" y="120" {...label} textAnchor="start" fill="var(--cortical)">
      Incisão lateral
    </text>
    <text x="234" y="136" {...label} textAnchor="start">
      sobre a fíbula
    </text>
    <line x1="190" y1="130" x2="230" y2="128" stroke="var(--line-strong)" strokeWidth="0.8" />
    <text x="186" y="16" {...label} textAnchor="middle">
      Fíbula
    </text>
    <text x="136" y="16" {...label} textAnchor="middle">
      Tíbia
    </text>
  </svg>
);

/** Via medial — incisão sobre o maléolo medial. */
export const ApproachMedial: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 320 290"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Via de acesso medial — sobre o maléolo medial"}</title>
    <LegOutline />
    {/* Incisão curva sobre o maléolo medial */}
    <g className="fx-line">
      <path
        d="M132 150 C 122 180, 120 208, 128 236"
        fill="none"
        stroke="var(--cortical)"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
    </g>
    {/* veia safena magna (estrutura em risco) em teal */}
    <path
      d="M150 150 C 142 184, 142 214, 150 240"
      fill="none"
      stroke="var(--teal)"
      strokeWidth="1.6"
      strokeDasharray="4 4"
    />
    <text x="52" y="150" {...label} textAnchor="start" fill="var(--cortical)">
      Incisão medial
    </text>
    <text x="52" y="166" {...label} textAnchor="start">
      maléolo medial
    </text>
    <line x1="126" y1="196" x2="96" y2="180" stroke="var(--line-strong)" strokeWidth="0.8" />
    <text x="164" y="264" {...label} textAnchor="middle" fill="var(--teal)">
      v. safena magna
    </text>
  </svg>
);

/** Via posterolateral — intervalo entre fibulares e FLH. */
export const ApproachPosterolateral: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 320 290"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Via posterolateral — intervalo fibulares / flexor longo do hálux"}</title>
    <LegOutline />
    {/* Incisão posterolateral (posterior à fíbula) */}
    <g className="fx-line">
      <line
        x1="204"
        y1="66"
        x2="206"
        y2="224"
        stroke="var(--cortical)"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
    </g>
    {/* Intervalo entre fibulares (lateral) e FLH (medial) — teal */}
    <g stroke="var(--teal)" strokeWidth="1.8" fill="none">
      <ellipse cx="196" cy="150" rx="10" ry="26" strokeDasharray="3 3" />
      <ellipse cx="176" cy="152" rx="9" ry="24" strokeDasharray="3 3" />
    </g>
    <text x="238" y="118" {...label} textAnchor="start" fill="var(--cortical)">
      Incisão
    </text>
    <text x="238" y="134" {...label} textAnchor="start">
      posterolateral
    </text>
    <text x="230" y="196" {...label} textAnchor="start" fill="var(--teal)">
      fibulares
    </text>
    <text x="120" y="196" {...label} textAnchor="end" fill="var(--teal)">
      FLH
    </text>
    <line x1="186" y1="176" x2="228" y2="192" stroke="var(--line-strong)" strokeWidth="0.8" />
    <line x1="168" y1="176" x2="124" y2="192" stroke="var(--line-strong)" strokeWidth="0.8" />
  </svg>
);
