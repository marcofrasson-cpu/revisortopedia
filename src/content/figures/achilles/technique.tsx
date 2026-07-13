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
const tendon = { fill: "var(--teal-tint)", stroke: "var(--teal)", strokeWidth: 1.8 };

/** Passo 1 — decúbito ventral, pés para fora da mesa (referência de tensão). */
export const StepPosition: FC<FigureProps> = ({ className, title }) => (
  <svg viewBox="0 0 300 200" preserveAspectRatio="xMidYMid meet" role="img" className={className} xmlns="http://www.w3.org/2000/svg">
    <title>{title ?? "Passo 1 — decúbito ventral com os pés para fora da mesa"}</title>
    {/* mesa */}
    <rect x="20" y="96" width="200" height="14" rx="3" fill="var(--surface-2, var(--surface))" stroke="var(--line-strong)" strokeWidth="1.2" />
    {/* corpo/perna em pronação */}
    <path {...boneStyle} d="M30 74 C 110 66, 190 66, 220 78 L 220 96 L 30 96 Z" />
    {/* pés pendentes em equino gravitacional */}
    <path {...boneStyle} d="M220 78 C 244 80, 262 92, 268 110 L 250 118 C 240 104, 230 96, 220 96 Z" />
    <path {...boneStyle} d="M214 82 C 236 86, 252 100, 256 118 L 240 124 C 232 108, 224 100, 214 96 Z" />
    <text x="120" y="60" {...label} textAnchor="middle">Decúbito ventral</text>
    <text x="256" y="140" {...label} textAnchor="middle" fill="var(--teal)">equino gravitacional</text>
    <text x="120" y="132" {...label} textAnchor="middle">Comparar tensão de repouso com o lado contralateral</text>
  </svg>
);

/** Passo 2 — incisão posteromedial, abertura do paratenon, cotos em "mop-end". */
export const StepExposure: FC<FigureProps> = ({ className, title }) => (
  <svg viewBox="0 0 260 240" preserveAspectRatio="xMidYMid meet" role="img" className={className} xmlns="http://www.w3.org/2000/svg">
    <title>{title ?? "Passo 2 — exposição: incisão posteromedial e cotos desfiados"}</title>
    <path {...boneStyle} d="M96 20 C 84 80, 84 160, 96 214 L 164 214 C 176 160, 176 80, 164 20 Z" />
    {/* paratenon aberto (retalhos) */}
    <path d="M104 40 C 96 100, 96 160, 104 208" fill="none" stroke="var(--teal)" strokeWidth="1.4" strokeDasharray="3 4" />
    <path d="M156 40 C 164 100, 164 160, 156 208" fill="none" stroke="var(--teal)" strokeWidth="1.4" strokeDasharray="3 4" />
    {/* cotos do tendão, extremidades desfiadas */}
    <path {...tendon} d="M118 44 C 116 78, 118 100, 126 116 C 118 118, 132 120, 124 122 C 134 122, 120 126, 130 126 L 142 124 C 134 120, 146 118, 138 116 C 146 100, 146 78, 144 44 Z" />
    <path {...tendon} d="M120 200 C 118 168, 120 146, 128 132 C 120 130, 134 128, 126 126 L 138 128 C 132 132, 144 132, 136 134 C 144 148, 144 170, 142 200 Z" />
    {/* gap */}
    <g className="fx-line">
      <line x1="126" y1="120" x2="134" y2="130" stroke="var(--cortical)" strokeWidth="2" strokeDasharray="2 2" />
    </g>
    <text x="188" y="90" {...label} textAnchor="start" fill="var(--teal)">paratenon</text>
    <text x="188" y="128" {...label} textAnchor="start" fill="var(--cortical)">cotos desfiados</text>
    <text x="130" y="232" {...label} textAnchor="middle">Incisão posteromedial</text>
  </svg>
);

/** Passo 3 — sutura core bloqueante (Krackow) em cada coto. */
export const StepCoreSuture: FC<FigureProps> = ({ className, title }) => (
  <svg viewBox="0 0 260 240" preserveAspectRatio="xMidYMid meet" role="img" className={className} xmlns="http://www.w3.org/2000/svg">
    <title>{title ?? "Passo 3 — sutura core bloqueante (Krackow) nos cotos"}</title>
    <path {...tendon} d="M104 30 C 102 70, 104 96, 112 110 L 148 110 C 156 96, 158 70, 156 30 Z" />
    <path {...tendon} d="M112 210 C 104 196, 102 168, 104 130 L 156 130 C 158 168, 156 196, 148 210 Z" />
    {/* laços bloqueantes Krackow (proximal) */}
    <g stroke="var(--cortical)" strokeWidth="1.6" fill="none">
      <path d="M116 44 L 128 52 L 116 60 L 128 68 L 116 76 L 128 84 L 116 92 L 126 100" />
      <path d="M144 44 L 132 52 L 144 60 L 132 68 L 144 76 L 132 84 L 144 92 L 134 100" />
      {/* distal */}
      <path d="M116 196 L 128 188 L 116 180 L 128 172 L 116 164 L 128 156 L 116 148 L 126 140" />
      <path d="M144 196 L 132 188 L 144 180 L 132 172 L 144 164 L 132 156 L 144 148 L 134 140" />
    </g>
    <text x="188" y="70" {...label} textAnchor="start" fill="var(--cortical)">laços bloqueantes</text>
    <text x="130" y="232" {...label} textAnchor="middle">Fio resistente nº 2 em cada coto</text>
  </svg>
);

/** Passo 4 — aproximação e nó com a tensão de repouso restaurada (equino). */
export const StepTensionRepair: FC<FigureProps> = ({ className, title }) => (
  <svg viewBox="0 0 260 240" preserveAspectRatio="xMidYMid meet" role="img" className={className} xmlns="http://www.w3.org/2000/svg">
    <title>{title ?? "Passo 4 — nó com a tensão de repouso restaurada; sutura epitendínea"}</title>
    <path {...tendon} d="M104 26 C 102 74, 104 150, 112 190 C 118 206, 130 214, 138 214 C 146 214, 152 204, 154 190 C 158 150, 158 74, 156 26 Z" />
    {/* linha de reparo */}
    <line x1="106" y1="118" x2="154" y2="118" stroke="var(--teal-deep)" strokeWidth="2.2" />
    {/* nó central */}
    <circle cx="130" cy="118" r="5" fill="var(--surface)" stroke="var(--cortical)" strokeWidth="2" />
    {/* sutura epitendínea (pontos de reforço em volta) */}
    <g stroke="var(--teal)" strokeWidth="1.2" fill="none">
      <path d="M108 100 q 22 -6 44 0 M108 136 q 22 6 44 0" />
    </g>
    {/* seta de tensão / equino */}
    <path d="M170 170 C 186 182, 190 198, 182 212" fill="none" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round" />
    <path d="M182 212 l-7 -4 m7 4 l1 -8" stroke="var(--teal)" strokeWidth="2" fill="none" strokeLinecap="round" />
    <text x="188" y="112" {...label} textAnchor="start" fill="var(--cortical)">nó central</text>
    <text x="188" y="128" {...label} textAnchor="start" fill="var(--teal)">epitendínea</text>
    <text x="150" y="232" {...label} textAnchor="middle">Igualar o equino ao lado contralateral</text>
  </svg>
);

/** Passo 5 — alternativa minimamente invasiva; variant "open" | "mis". */
export const StepMisRepair: FC<FigureProps> = ({ className, title, variant = "mis" }) => {
  const mis = variant !== "open";
  return (
    <svg viewBox="0 0 260 240" preserveAspectRatio="xMidYMid meet" role="img" className={className} xmlns="http://www.w3.org/2000/svg">
      <title>{title ?? (mis ? "Passo 5 — reparo percutâneo com jig (minimamente invasivo)" : "Passo 5 — reparo aberto")}</title>
      <path {...boneStyle} d="M100 20 C 88 80, 88 160, 100 214 L 160 214 C 172 160, 172 80, 160 20 Z" />
      <path {...tendon} d="M116 40 C 114 90, 116 150, 122 200 L 138 200 C 144 150, 146 90, 144 40 Z" />
      {mis ? (
        <>
          {/* jig lateral + passagens percutâneas */}
          <rect x="150" y="70" width="14" height="100" rx="3" fill="var(--surface-2, var(--surface))" stroke="var(--teal)" strokeWidth="1.4" />
          <g stroke="var(--teal)" strokeWidth="1.3" fill="none">
            <path d="M150 84 L 122 96 M150 108 L 138 120 M150 150 L 122 138 M150 128 L 138 118" />
          </g>
          <g fill="var(--teal)"><circle cx="122" cy="96" r="2.6" /><circle cx="138" cy="120" r="2.6" /><circle cx="122" cy="138" r="2.6" /></g>
          <text x="176" y="120" {...label} textAnchor="start" fill="var(--teal)">jig percutâneo</text>
          <text x="130" y="232" {...label} textAnchor="middle" fill="var(--amber)">atenção ao nervo sural</text>
        </>
      ) : (
        <>
          <line x1="106" y1="120" x2="154" y2="120" stroke="var(--teal-deep)" strokeWidth="2.2" />
          <circle cx="130" cy="120" r="5" fill="var(--surface)" stroke="var(--cortical)" strokeWidth="2" />
          <text x="176" y="120" {...label} textAnchor="start">reparo aberto</text>
          <text x="130" y="232" {...label} textAnchor="middle">Exposição direta do reparo</text>
        </>
      )}
    </svg>
  );
};

/** Passo 6 — órtese funcional com calços de calcanhar e carga precoce. */
export const StepFunctionalBrace: FC<FigureProps> = ({ className, title }) => (
  <svg viewBox="0 0 280 220" preserveAspectRatio="xMidYMid meet" role="img" className={className} xmlns="http://www.w3.org/2000/svg">
    <title>{title ?? "Passo 6 — órtese funcional (bota) com calços e carga precoce"}</title>
    {/* perna */}
    <path {...boneStyle} d="M110 16 C 106 60, 106 110, 112 140 L 140 140 C 136 110, 136 60, 138 16 Z" />
    {/* bota walker */}
    <path fill="var(--teal-tint)" stroke="var(--teal)" strokeWidth="1.8" strokeLinejoin="round"
      d="M92 60 C 90 100, 92 140, 100 160 L 96 188 C 96 196, 104 200, 116 200 L 196 200 C 206 200, 210 192, 206 184 L 196 168 C 176 166, 156 164, 150 150 C 156 120, 158 88, 156 60 Z" />
    {/* tiras */}
    <g stroke="var(--teal-deep)" strokeWidth="3" strokeLinecap="round">
      <line x1="96" y1="86" x2="152" y2="86" />
      <line x1="98" y1="116" x2="154" y2="116" />
    </g>
    {/* calços de calcanhar */}
    <g fill="var(--amber)" opacity="0.5" stroke="var(--amber)" strokeWidth="1">
      <rect x="120" y="182" width="70" height="6" />
      <rect x="128" y="176" width="62" height="6" />
      <rect x="136" y="170" width="54" height="6" />
    </g>
    <text x="228" y="120" {...label} textAnchor="start" fill="var(--teal)">bota funcional</text>
    <text x="228" y="180" {...label} textAnchor="start" fill="var(--amber)">calços de calcanhar</text>
    <text x="150" y="216" {...label} textAnchor="middle">Carga precoce conforme protocolo funcional</text>
  </svg>
);
