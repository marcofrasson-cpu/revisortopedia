import type { FC, ReactNode } from "react";
import type { FigureProps } from "../../../types/topic";

/* Esquemas originais — fratura da cabeça do rádio. Fundamentados em Rockwood &
   Green's Fractures in Adults, 10ª ed. Line-art didático, cores por CSS var. */

const bone = { stroke: "var(--ink-soft)", strokeWidth: 2, fill: "var(--surface)" };
const fx = { stroke: "var(--cortical)", strokeWidth: 2.4, fill: "none" as const };
const metal = { stroke: "var(--teal)", strokeWidth: 2.2, fill: "none" as const };
const soft = { stroke: "var(--amber)", strokeWidth: 2, fill: "none" as const };
const label = { fontSize: 11, fill: "var(--muted)", fontFamily: "var(--font-body, sans-serif)" } as const;

function Frame({ children, title, vb = "0 0 240 240", className }: { children: ReactNode; title: string; vb?: string; className?: string }) {
  return (
    <svg viewBox={vb} preserveAspectRatio="xMidYMid meet" role="img" className={className} fill="none">
      <title>{title}</title>
      {children}
    </svg>
  );
}

/** Rádio proximal articulando com o capítulo e a incisura radial da ulna. */
export const Anatomia: FC<FigureProps> = ({ className, title }) => (
  <Frame title={title ?? "Anatomia da cabeça do rádio"} className={className}>
    {/* úmero distal / capítulo */}
    <path d="M60 40 q40 -14 80 0 q10 30 -6 54 q-34 20 -70 2 q-12 -30 -4 -56z" {...bone} />
    <text x="150" y="60" {...label}>capítulo</text>
    {/* cabeça e colo do rádio */}
    <path d="M96 108 h44 v14 q-22 12 -44 0z" {...bone} />
    <path d="M104 122 v96 M132 122 v96" {...bone} />
    <text x="146" y="122" {...label}>cabeça</text>
    <text x="146" y="150" {...label}>colo</text>
    {/* ulna / incisura radial + LUCL */}
    <path d="M150 118 q26 40 14 100" {...bone} />
    <path d="M140 100 q26 6 30 34" {...soft} />
    <text x="150" y="96" {...label}>LUCL</text>
  </Frame>
);

/** Mason I–IV. */
export const Mason: FC<FigureProps> = ({ className, title, variant }) => {
  const v = variant ?? "I";
  return (
    <Frame title={title ?? `Mason ${v}`} className={className}>
      <path d="M92 70 h56 v16 q-28 14 -56 0z" {...bone} />
      <path d="M100 86 v130 M140 86 v130" {...bone} />
      {v === "I" && <path d="M108 78 l16 4" {...fx} />}
      {v === "II" && <path d="M120 70 l14 20" {...fx} />}
      {(v === "III" || v === "IV") && (
        <>
          <path d="M104 72 l14 16 M126 90 l16 -14 M116 80 l4 12" {...fx} />
          <text x="150" y="82" {...label}>cominutiva</text>
        </>
      )}
      {v === "IV" && (
        <>
          <path d="M100 130 q-22 8 -30 30" {...bone} strokeDasharray="5 4" />
          <text x="40" y="176" {...label}>+ luxação</text>
        </>
      )}
      <text x="150" y="150" {...label}>Mason {v}</text>
    </Frame>
  );
};

/** ORIF — parafusos na zona segura ("safe zone"). */
export const Orif: FC<FigureProps> = ({ className, title }) => (
  <Frame title={title ?? "ORIF da cabeça do rádio"} className={className}>
    <path d="M92 70 h56 v16 q-28 14 -56 0z" {...bone} />
    <path d="M100 86 v130 M140 86 v130" {...bone} />
    <line x1="98" y1="96" x2="142" y2="96" {...metal} strokeWidth={1.8} />
    <line x1="98" y1="112" x2="142" y2="112" {...metal} strokeWidth={1.8} />
    <path d="M120 74 l12 16" {...fx} />
    <text x="150" y="104" {...label}>parafusos</text>
    <text x="60" y="86" {...label}>safe zone</text>
  </Frame>
);

/** Artroplastia — prótese de cabeça do rádio. */
export const Artroplastia: FC<FigureProps> = ({ className, title }) => (
  <Frame title={title ?? "Artroplastia da cabeça do rádio"} className={className}>
    <path d="M60 40 q40 -14 80 0 q10 30 -6 54 q-34 20 -70 2 q-12 -30 -4 -56z" {...bone} />
    {/* prótese: taça + haste */}
    <path d="M96 104 h48 v12 q-24 10 -48 0z" {...metal} />
    <path d="M116 116 v100" {...metal} strokeWidth={3} />
    <text x="150" y="112" {...label}>prótese</text>
  </Frame>
);

/** Essex-Lopresti — encurtamento radial + membrana interóssea + DRUJ. */
export const EssexLopresti: FC<FigureProps> = ({ className, title }) => (
  <Frame title={title ?? "Lesão de Essex-Lopresti"} vb="0 0 240 260" className={className}>
    <path d="M96 30 h40 v14 q-20 10 -40 0z" {...bone} />
    <path d="M104 44 v150 M132 44 v150" {...bone} />
    {/* ulna */}
    <path d="M150 30 v186" {...bone} />
    {/* membrana interóssea rompida */}
    <path d="M134 70 l14 8 M134 100 l14 8 M134 130 l14 8" {...fx} />
    <text x="152" y="110" {...label}>membrana</text>
    {/* DRUJ distal alargada */}
    <path d="M104 200 q14 16 0 34 M150 200 q-14 16 0 34" {...fx} />
    <text x="70" y="250" {...label}>DRUJ instável</text>
  </Frame>
);

export const figures: Record<string, FC<FigureProps>> = {
  "fratura-cabeca-radial:anatomia": Anatomia,
  "fratura-cabeca-radial:mason": Mason,
  "fratura-cabeca-radial:orif": Orif,
  "fratura-cabeca-radial:artroplastia": Artroplastia,
  "fratura-cabeca-radial:essex-lopresti": EssexLopresti,
};
