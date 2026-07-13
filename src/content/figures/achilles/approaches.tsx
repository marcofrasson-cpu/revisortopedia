import type { FC } from "react";
import type { FigureProps } from "../../../types/topic";

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

/* Vista posterior da perna/tornozelo com o trajeto da incisão. */
const PosteriorLeg: FC<{ children?: React.ReactNode }> = ({ children }) => (
  <>
    {/* contorno da perna posterior */}
    <path
      {...boneStyle}
      d="M92 18 C 74 70, 74 150, 88 214 C 92 236, 104 252, 124 254 C 144 252, 156 236, 160 214 C 174 150, 174 70, 156 18 Z"
    />
    {/* linha média do tendão (referência) */}
    <line x1="124" y1="70" x2="124" y2="236" stroke="var(--line-strong)" strokeWidth="1" strokeDasharray="4 5" />
    {children}
  </>
);

/** Acesso aberto — incisão posteromedial (poupa o nervo sural, lateral). */
export const ApproachOpenAchilles: FC<FigureProps> = ({ className, title }) => (
  <svg viewBox="0 0 250 280" preserveAspectRatio="xMidYMid meet" role="img" className={className} xmlns="http://www.w3.org/2000/svg">
    <title>{title ?? "Acesso aberto posteromedial ao tendão de Aquiles"}</title>
    <PosteriorLeg>
      {/* incisão posteromedial (à esquerda da linha média) */}
      <path d="M108 96 C 104 140, 104 184, 110 220" fill="none" stroke="var(--cortical)" strokeWidth="2.6" strokeLinecap="round" />
      {/* nervo sural (lateral) a evitar */}
      <path d="M150 110 C 158 150, 156 196, 144 228" fill="none" stroke="var(--amber)" strokeWidth="2" strokeDasharray="2 4" />
    </PosteriorLeg>
    <text x="70" y="150" {...label} textAnchor="end" fill="var(--cortical)">incisão</text>
    <text x="70" y="164" {...label} textAnchor="end" fill="var(--cortical)">posteromedial</text>
    <text x="188" y="170" {...label} textAnchor="start" fill="var(--amber)">n. sural</text>
    <text x="188" y="184" {...label} textAnchor="start">(lateral — evitar)</text>
    <text x="124" y="272" {...label} textAnchor="middle">Vista posterior</text>
  </svg>
);

/** Acesso minimamente invasivo — mini-incisões / jig percutâneo. */
export const ApproachPercutaneous: FC<FigureProps> = ({ className, title }) => (
  <svg viewBox="0 0 250 280" preserveAspectRatio="xMidYMid meet" role="img" className={className} xmlns="http://www.w3.org/2000/svg">
    <title>{title ?? "Reparo minimamente invasivo — mini-incisão e passagens percutâneas"}</title>
    <PosteriorLeg>
      {/* mini-incisão transversa central sobre o gap */}
      <line x1="112" y1="150" x2="136" y2="150" stroke="var(--cortical)" strokeWidth="2.6" strokeLinecap="round" />
      {/* portais de passagem da sutura (jig) */}
      <g fill="var(--teal)">
        <circle cx="104" cy="118" r="3" />
        <circle cx="144" cy="118" r="3" />
        <circle cx="104" cy="186" r="3" />
        <circle cx="144" cy="186" r="3" />
      </g>
      {/* fios cruzando */}
      <g stroke="var(--teal)" strokeWidth="1.4" fill="none">
        <path d="M104 118 L 136 150 M144 118 L 112 150 M104 186 L 136 150 M144 186 L 112 150" />
      </g>
      {/* sural em risco lateral */}
      <path d="M150 112 C 158 150, 156 196, 146 224" fill="none" stroke="var(--amber)" strokeWidth="2" strokeDasharray="2 4" />
    </PosteriorLeg>
    <text x="150" y="150" {...label} textAnchor="start" fill="var(--cortical)">mini-incisão</text>
    <text x="188" y="168" {...label} textAnchor="start" fill="var(--amber)">n. sural em risco</text>
    <text x="124" y="272" {...label} textAnchor="middle">Passagens percutâneas</text>
  </svg>
);
