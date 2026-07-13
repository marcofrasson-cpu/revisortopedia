import type { FC } from "react";
import type { FigureProps } from "../../types/topic";

/**
 * Figura neutra usada para ids desconhecidos ou ainda não desenhados.
 * Moldura tracejada + ícone esquemático + legenda "figura em preparo".
 */
export const PlaceholderFigure: FC<FigureProps> = ({ className, title }) => {
  return (
    <svg
      viewBox="0 0 320 220"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? "Figura em preparo"}</title>
      <rect
        x="6"
        y="6"
        width="308"
        height="208"
        rx="10"
        fill="var(--surface)"
        stroke="var(--line-strong)"
        strokeWidth="1.5"
        strokeDasharray="7 6"
      />
      {/* ícone esquemático: prancheta radiográfica */}
      <g
        fill="none"
        stroke="var(--muted)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.7"
      >
        <rect x="126" y="70" width="68" height="60" rx="6" />
        <line x1="126" y1="88" x2="194" y2="88" />
        <circle cx="160" cy="64" r="6" fill="var(--surface)" />
        <path d="M140 118 l10 -14 8 10 9 -18 7 22" stroke="var(--muted)" />
      </g>
      <text
        x="160"
        y="166"
        textAnchor="middle"
        fontSize="12"
        fill="var(--muted)"
        fontFamily="var(--font-mono, monospace)"
        letterSpacing="1.5"
      >
        FIGURA EM PREPARO
      </text>
    </svg>
  );
};

export default PlaceholderFigure;
