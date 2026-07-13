import type { FC } from "react";
import type { FigureProps } from "../../../types/topic";

/* ============================================================================
   Classificação — Weber (A/B/C), Lauge-Hansen (SER/PER/SAD/PAB), Sindesmose.
   Traço de fratura em var(--cortical) + className "fx-line".
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

/** Weber A/B/C — nível da fratura da fíbula relativo à sindesmose/plafond. */
export const Weber: FC<FigureProps> = ({ className, title, variant }) => {
  const v = (variant ?? "B").toUpperCase();
  // y da linha da sindesmose/plafond
  const plafond = 176;
  // altura da fratura conforme o tipo
  const fx =
    v === "A"
      ? { y: 202, label: "Abaixo da sindesmose" } // infra-sindesmal
      : v === "C"
        ? { y: 132, label: "Acima da sindesmose" } // supra-sindesmal
        : { y: 176, label: "Ao nível da sindesmose" }; // B, trans-sindesmal

  return (
    <svg
      viewBox="0 0 260 300"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `Classificação de Weber — tipo ${v}`}</title>

      {/* Tíbia + plafond */}
      <path
        {...boneStyle}
        d="M70 20 C 66 80, 66 140, 70 180 L 78 200 C 84 210, 96 214, 104 218 L 116 224 C 120 226, 120 234, 114 236 L 100 236 C 90 234, 84 224, 80 214 L 72 196 C 60 196, 52 188, 50 174 C 46 120, 48 62, 54 20 Z"
      />
      {/* Tálus */}
      <path
        {...boneStyle}
        fill="var(--surface-2, var(--surface))"
        d="M96 234 C 112 222, 152 220, 172 230 C 184 236, 184 248, 170 254 C 144 262, 112 260, 100 250 C 94 246, 92 238, 96 234 Z"
      />
      {/* Fíbula */}
      <path
        {...boneStyle}
        d="M190 24 C 194 80, 194 136, 190 180 C 188 202, 182 220, 172 230 C 166 234, 160 230, 160 222 L 164 182 C 168 136, 170 78, 168 28 Z"
      />

      {/* Linha da sindesmose / plafond (referência) */}
      <line
        x1="40"
        y1={plafond}
        x2="216"
        y2={plafond}
        stroke="var(--teal)"
        strokeWidth="1.3"
        strokeDasharray="5 4"
      />
      <text x="216" y={plafond - 6} {...label} textAnchor="end" fill="var(--teal)">
        nível da sindesmose
      </text>

      {/* Traço de fratura na fíbula, no nível do tipo */}
      <g className="fx-line">
        <path
          d={`M${v === "C" ? 170 : 168} ${fx.y - 8} L ${v === "C" ? 186 : 190} ${fx.y + 8}`}
          fill="none"
          stroke="var(--cortical)"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
      </g>

      <text x="62" y="16" {...label} textAnchor="middle">
        Tíbia
      </text>
      <text x="180" y="20" {...label} textAnchor="middle">
        Fíbula
      </text>
      <text x="130" y="288" textAnchor="middle" {...mono}>
        Weber {v}
      </text>
      <text x="130" y="272" textAnchor="middle" {...label}>
        {fx.label}
      </text>
    </svg>
  );
};

/** Lauge-Hansen — SER/PER/SAD/PAB: mecanismo (posição do pé + força). */
export const LaugeHansen: FC<FigureProps> = ({ className, title, variant }) => {
  const v = (variant ?? "SER").toUpperCase();
  const map: Record<
    string,
    { pos: string; force: string; rot: number; foot: "sup" | "pro" }
  > = {
    SER: { pos: "Supinação", force: "Rotação externa", rot: 26, foot: "sup" },
    PER: { pos: "Pronação", force: "Rotação externa", rot: 26, foot: "pro" },
    SAD: { pos: "Supinação", force: "Adução", rot: -22, foot: "sup" },
    PAB: { pos: "Pronação", force: "Abdução", rot: 22, foot: "pro" },
  };
  const cfg = map[v] ?? map.SER;

  return (
    <svg
      viewBox="0 0 300 260"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `Lauge-Hansen — ${v} (${cfg.pos} + ${cfg.force})`}</title>

      {/* Perna esquemática (tíbia/fíbula) */}
      <path {...boneStyle} d="M132 20 C 130 70, 130 120, 134 160 L 128 176 L 116 176 L 122 158 C 118 118, 118 66, 122 20 Z" />
      <path {...boneStyle} d="M168 22 C 172 72, 172 122, 168 162 L 178 178 L 190 176 L 182 158 C 178 118, 178 68, 178 24 Z" />

      {/* Pé em posição de supinação ou pronação (inclinação) */}
      <g transform={`rotate(${cfg.foot === "sup" ? -14 : 14} 152 190)`}>
        <path
          {...boneStyle}
          fill="var(--surface-2, var(--surface))"
          d="M118 182 C 140 176, 176 176, 196 184 C 214 190, 220 200, 214 208 L 122 210 C 108 208, 104 190, 118 182 Z"
        />
        {/* antepé */}
        <path
          {...boneStyle}
          d="M196 190 C 216 188, 240 190, 252 196 C 260 200, 258 208, 248 210 L 210 210 Z"
        />
      </g>

      {/* Seta da força (rotação externa / adução / abdução) */}
      <g stroke="var(--teal)" strokeWidth="2.4" fill="none" strokeLinecap="round">
        <path
          d={`M226 150 q 26 ${cfg.rot} 6 44`}
          markerEnd="url(#lh-arrow)"
        />
      </g>
      <defs>
        <marker
          id="lh-arrow"
          markerWidth="9"
          markerHeight="9"
          refX="4"
          refY="4"
          orient="auto"
        >
          <path d="M0 0 L8 4 L0 8 Z" fill="var(--teal)" />
        </marker>
      </defs>

      {/* estágios (I→IV) — barra de progressão do mecanismo */}
      <g>
        {[1, 2, 3, 4].map((s) => (
          <rect
            key={s}
            x={30 + (s - 1) * 22}
            y={30}
            width="16"
            height="10"
            rx="2"
            fill={s <= 2 ? "var(--teal)" : "var(--teal-tint, var(--surface-2, var(--surface)))"}
            stroke="var(--teal)"
            strokeWidth="1"
          />
        ))}
        <text x="30" y="24" {...label}>
          estágios I–IV
        </text>
      </g>

      <text x="150" y="238" textAnchor="middle" fontSize="13" fontFamily="var(--font-mono, monospace)" fill="var(--ink)" letterSpacing="1">
        {v}
      </text>
      <text x="150" y="254" textAnchor="middle" {...label}>
        {cfg.pos} + {cfg.force}
      </text>
    </svg>
  );
};

/** Sindesmose — intact/injured/screw/suture-button na incisura tibiofibular. */
export const Syndesmosis: FC<FigureProps> = ({ className, title, variant }) => {
  const v = variant ?? "intact";
  const widened = v === "injured";
  // deslocamento da fíbula quando alargada
  const gap = widened ? 14 : 4;
  const fibX = 150 + gap;

  return (
    <svg
      viewBox="0 0 260 220"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `Sindesmose — ${v}`}</title>

      {/* Tíbia distal com incisura (à esquerda) */}
      <path
        {...boneStyle}
        d="M40 20 C 38 70, 38 130, 44 176 L 60 190 L 130 190 C 138 190, 142 184, 140 176 C 138 176, 132 172, 128 164 C 124 150, 128 120, 126 96 C 124 74, 130 70, 132 60 C 132 40, 128 26, 120 20 Z"
      />
      {/* incisura (recesso) */}
      <path
        d="M132 60 C 130 70, 124 74, 126 96 C 128 120, 124 150, 128 164"
        fill="none"
        stroke="var(--line-strong)"
        strokeWidth="1"
        strokeDasharray="3 3"
      />

      {/* Fíbula (à direita, posição varia) */}
      <path
        {...boneStyle}
        transform={`translate(${fibX - 150} 0)`}
        d="M150 24 C 152 74, 152 128, 148 172 L 158 188 L 176 188 L 170 170 C 166 128, 168 74, 168 26 Z"
      />

      {/* Ligamentos da sindesmose */}
      {v === "intact" && (
        <g stroke="var(--teal)" strokeWidth="2.4" fill="none" strokeLinecap="round">
          <line x1="132" y1="70" x2="150" y2="72" />
          <line x1="130" y1="110" x2="150" y2="112" />
          <line x1="130" y1="150" x2="150" y2="150" />
        </g>
      )}
      {widened && (
        // ligamentos rompidos (traço interrompido cortical-red)
        <g className="fx-line" stroke="var(--cortical)" strokeWidth="2.4" fill="none" strokeLinecap="round">
          <path d="M132 72 l 8 2 M156 76 l 8 2" />
          <path d="M130 112 l 9 1 M156 114 l 8 1" />
          <path d="M130 150 l 9 0 M156 150 l 8 0" />
        </g>
      )}

      {/* Fixações */}
      {v === "screw" && (
        <g stroke="var(--teal)" strokeWidth="2.6" strokeLinecap="round">
          {/* parafuso transsindesmal */}
          <line x1="176" y1="104" x2="70" y2="112" />
          <line x1="176" y1="104" x2="176" y2="104" />
          {/* cabeça */}
          <circle cx="176" cy="104" r="4" fill="var(--teal)" stroke="none" />
          {/* roscas */}
          <g stroke="var(--teal)" strokeWidth="1.2">
            <line x1="150" y1="106" x2="150" y2="110" />
            <line x1="140" y1="107" x2="140" y2="111" />
            <line x1="160" y1="105" x2="160" y2="109" />
          </g>
        </g>
      )}
      {v === "suture-button" && (
        <g stroke="var(--teal)" strokeWidth="2" fill="none" strokeLinecap="round">
          {/* botões nas corticais + fio */}
          <line x1="176" y1="104" x2="66" y2="112" />
          <line x1="176" y1="112" x2="66" y2="120" />
          <rect x="172" y="98" width="7" height="20" rx="2" fill="var(--teal)" stroke="none" />
          <rect x="58" y="104" width="7" height="20" rx="2" fill="var(--teal)" stroke="none" />
        </g>
      )}

      <text x="80" y="16" {...label} textAnchor="middle">
        Tíbia
      </text>
      <text x="176" y="18" {...label} textAnchor="middle">
        Fíbula
      </text>
      <text x="130" y="210" textAnchor="middle" fontSize="12" fontFamily="var(--font-mono, monospace)" fill="var(--ink)">
        {v === "intact"
          ? "incisura normal"
          : v === "injured"
            ? "incisura alargada"
            : v === "screw"
              ? "parafuso transsindesmal"
              : "suture-button"}
      </text>
    </svg>
  );
};
