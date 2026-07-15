import type { FC } from "react";
import type { FigureProps } from "../../../types/topic";

/* ============================================================================
   Ruptura do tendão de Aquiles — figuras esquemáticas (vista sagital).
   Ossos: stroke var(--ink-soft), fill var(--surface). Músculo/tendão: teal.
   Zona de ruptura / hipovascular: cortical-red / amber. Rótulos: var(--muted).
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

/** Complexo gastrocnêmio-sóleo → tendão calcâneo → calcâneo, com watershed. */
export const AchillesAnatomy: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 260 320"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Anatomia do tendão de Aquiles — vista sagital"}</title>

    {/* Tíbia (anterior) */}
    <path {...boneStyle} d="M96 20 C 92 90, 92 170, 98 232 L 112 232 C 108 168, 108 90, 110 20 Z" />

    {/* Ventre muscular gastrocnêmio + sóleo (posterior) */}
    <path
      fill="var(--teal-tint)"
      stroke="var(--teal)"
      strokeWidth="1.8"
      d="M112 26 C 150 44, 168 96, 160 150 C 156 174, 146 190, 134 198 L 128 198 C 120 176, 118 150, 116 120 C 114 88, 112 52, 112 26 Z"
    />

    {/* Tendão calcâneo — banda que estreita até a inserção */}
    <path
      fill="var(--teal-tint)"
      stroke="var(--teal)"
      strokeWidth="1.8"
      d="M128 198 C 134 214, 136 236, 134 262 L 120 264 C 118 236, 116 214, 116 198 Z"
    />

    {/* Zona hipovascular (watershed) 2–6 cm da inserção */}
    <rect x="112" y="216" width="28" height="34" rx="4" fill="var(--amber)" opacity="0.18" />
    <line x1="112" y1="216" x2="140" y2="216" stroke="var(--amber)" strokeWidth="1" strokeDasharray="3 3" />
    <line x1="112" y1="250" x2="140" y2="250" stroke="var(--amber)" strokeWidth="1" strokeDasharray="3 3" />

    {/* Calcâneo */}
    <path
      {...boneStyle}
      fill="var(--surface-2, var(--surface))"
      d="M104 262 C 128 258, 150 262, 158 274 C 164 284, 158 298, 140 300 L 98 300 C 86 298, 84 282, 92 272 C 96 266, 100 263, 104 262 Z"
    />
    {/* pé (dorso) */}
    <path {...boneStyle} d="M158 276 C 186 274, 214 278, 232 286 L 232 298 L 158 298 Z" />

    <text x="180" y="120" {...label} textAnchor="start" fill="var(--teal)">Gastrocnêmio</text>
    <text x="180" y="136" {...label} textAnchor="start" fill="var(--teal)">+ sóleo</text>
    <text x="152" y="212" {...label} textAnchor="start" fill="var(--teal)">Tendão calcâneo</text>
    <text x="150" y="238" {...label} textAnchor="start" fill="var(--amber)" fontFamily="var(--font-mono, monospace)">watershed 2–6 cm</text>
    <text x="120" y="316" {...label} textAnchor="middle">Calcâneo</text>
    <text x="86" y="16" {...label} textAnchor="middle">Tíbia</text>
    <g stroke="var(--line-strong)" strokeWidth="0.8" fill="none">
      <line x1="150" y1="234" x2="146" y2="232" />
      <line x1="148" y1="130" x2="160" y2="128" />
    </g>
  </svg>
);

/** Teste de Thompson — variant "intact" (flexão plantar) | "ruptured" (ausente). */
export const ThompsonTest: FC<FigureProps> = ({ className, title, variant = "intact" }) => {
  const ruptured = variant === "ruptured";
  const accent = ruptured ? "var(--cortical)" : "var(--teal)";
  return (
    <svg
      viewBox="0 0 300 260"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>
        {title ??
          (ruptured
            ? "Teste de Thompson positivo — sem flexão plantar (ruptura)"
            : "Teste de Thompson negativo — flexão plantar presente (íntegro)")}
      </title>

      {/* perna em decúbito ventral (horizontal), pé à direita */}
      <path {...boneStyle} d="M20 96 C 70 92, 120 92, 168 100 L 168 128 C 120 120, 70 120, 20 124 Z" />

      {/* ventre da panturrilha */}
      <path fill="var(--teal-tint)" stroke="var(--teal)" strokeWidth="1.6"
        d="M48 92 C 70 66, 118 66, 140 90 C 132 96, 84 96, 48 92 Z" />

      {/* tendão + inserção / calcâneo */}
      <path fill="var(--teal-tint)" stroke="var(--teal)" strokeWidth="1.6"
        d="M168 104 C 196 108, 214 112, 226 118 L 226 130 C 214 130, 196 128, 168 124 Z" />
      <path {...boneStyle} fill="var(--surface-2, var(--surface))"
        d="M226 108 C 248 106, 262 116, 262 132 C 262 146, 246 152, 230 148 L 226 148 Z" />

      {/* gap na ruptura */}
      {ruptured && (
        <g className="fx-line">
          <path d="M196 104 L 208 126" stroke="var(--cortical)" strokeWidth="3" strokeLinecap="round" />
        </g>
      )}

      {/* mão apertando a panturrilha (setas de compressão) */}
      <g stroke="var(--ink-soft)" strokeWidth="1.6" fill="none" strokeLinecap="round">
        <path d="M78 52 C 84 60, 84 66, 80 72" />
        <path d="M110 52 C 104 60, 104 66, 108 72" />
      </g>
      <text x="94" y="46" {...label} textAnchor="middle">apertar panturrilha</text>

      {/* movimento do pé */}
      <g stroke={accent} strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {ruptured ? (
          <>
            {/* pé imóvel — X */}
            <path d="M244 168 l16 16 M260 168 l-16 16" />
          </>
        ) : (
          <>
            {/* seta de flexão plantar */}
            <path d="M250 158 C 264 168, 268 184, 260 198" />
            <path d="M260 198 l-8 -4 m8 4 l2 -9" />
          </>
        )}
      </g>
      <text x="235" y="222" {...label} textAnchor="middle" fill={accent}
        fontFamily="var(--font-mono, monospace)">
        {ruptured ? "sem flexão (+)" : "flexão plantar (–)"}
      </text>
    </svg>
  );
};

/** Gap palpável + ângulo de repouso (Matles): pé afetado mais dorsifletido. */
export const AchillesGap: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 300 250"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Gap palpável e teste de Matles (ângulo de repouso)"}</title>

    {/* duas pernas pendentes (Matles): normal x afetada */}
    {[
      { x: 60, dorsi: false, tag: "normal", color: "var(--teal)" },
      { x: 190, dorsi: true, tag: "afetada", color: "var(--cortical)" },
    ].map((leg) => (
      <g key={leg.tag}>
        <path {...boneStyle} d={`M${leg.x} 20 C ${leg.x - 4} 70, ${leg.x - 4} 120, ${leg.x} 150 L ${leg.x + 16} 150 C ${leg.x + 12} 118, ${leg.x + 12} 70, ${leg.x + 14} 20 Z`} />
        {/* pé */}
        <path
          {...boneStyle}
          fill="var(--surface-2, var(--surface))"
          d={
            leg.dorsi
              ? `M${leg.x} 150 L ${leg.x + 16} 150 L ${leg.x + 10} 176 L ${leg.x - 26} 172 Z`
              : `M${leg.x} 150 L ${leg.x + 16} 150 L ${leg.x + 24} 186 L ${leg.x - 4} 182 Z`
          }
        />
        {/* tendão */}
        <line x1={leg.x + 14} y1={90} x2={leg.x + 16} y2={148} stroke="var(--teal)" strokeWidth="3" strokeLinecap="round" />
        {leg.dorsi && (
          <g className="fx-line">
            <line x1={leg.x + 14} y1={116} x2={leg.x + 16} y2={126} stroke="var(--cortical)" strokeWidth="5" strokeLinecap="round" />
            <circle cx={leg.x + 15} cy={121} r="3.4" fill="var(--surface)" stroke="var(--cortical)" strokeWidth="1.4" />
          </g>
        )}
        <text x={leg.x + 6} y={leg.dorsi ? 206 : 210} {...label} textAnchor="middle" fill={leg.color}>
          {leg.tag}
        </text>
      </g>
    ))}
    <text x="150" y="16" {...label} textAnchor="middle" fontFamily="var(--font-mono, monospace)">
      Matles — repouso em decúbito ventral
    </text>
    <text x="214" y="132" {...label} textAnchor="start" fill="var(--cortical)">gap</text>
    <text x="150" y="238" {...label} textAnchor="middle">
      Perda da tensão de repouso → pé neutro/dorsifletido
    </text>
  </svg>
);

/** Aposição dinâmica — variant "gap" (neutro) | "apposed" (flexão plantar). */
export const AchillesApposition: FC<FigureProps> = ({ className, title, variant = "gap" }) => {
  const apposed = variant === "apposed";
  return (
    <svg
      viewBox="0 0 280 240"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>
        {title ??
          (apposed
            ? "Flexão plantar — cotos do tendão aproximam-se (aposição)"
            : "Tornozelo neutro — cotos afastados (gap)")}
      </title>

      {/* perna */}
      <path {...boneStyle} d="M118 16 C 114 70, 114 120, 120 150 L 136 150 C 132 118, 132 70, 134 16 Z" />
      {/* pé — neutro vs em flexão plantar */}
      <path
        {...boneStyle}
        fill="var(--surface-2, var(--surface))"
        d={
          apposed
            ? "M120 150 L 136 150 L 152 196 L 120 200 Z"
            : "M120 150 L 136 150 L 132 178 L 96 176 Z"
        }
      />
      {/* cotos do tendão */}
      <line x1="133" y1="86" x2="135" y2="116" stroke="var(--teal)" strokeWidth="4" strokeLinecap="round" />
      <line
        x1={apposed ? 135 : 137}
        y1={apposed ? 122 : 130}
        x2={apposed ? 137 : 139}
        y2="150"
        stroke="var(--teal)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* zona entre cotos */}
      {apposed ? (
        <text x="180" y="122" {...label} textAnchor="start" fill="var(--teal)" fontFamily="var(--font-mono, monospace)">
          cotos aproximados
        </text>
      ) : (
        <g className="fx-line">
          <line x1="135" y1="117" x2="137" y2="129" stroke="var(--cortical)" strokeWidth="2" strokeDasharray="2 3" />
          <text x="180" y="122" {...label} textAnchor="start" fill="var(--cortical)" fontFamily="var(--font-mono, monospace)">
            gap residual
          </text>
        </g>
      )}
      <text x="127" y="12" {...label} textAnchor="middle">Perna</text>
      <text x="140" y="228" {...label} textAnchor="middle">
        {apposed ? "Flexão plantar (equino)" : "Tornozelo neutro"}
      </text>
    </svg>
  );
};
