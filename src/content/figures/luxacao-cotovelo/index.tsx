import type { FC, ReactNode } from "react";
import type { FigureProps } from "../../../types/topic";

/* Esquemas originais — luxação do cotovelo. Fundamentados em Rockwood &
   Green's Fractures in Adults, 10ª ed. Line-art didático, cores por CSS var. */

const bone = { stroke: "var(--ink-soft)", strokeWidth: 2, fill: "var(--surface)" } as const;
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

/** Estabilizadores do cotovelo: LUCL/LCL, coronoide, cápsula, LCM e cabeça do rádio. */
export const Anatomia: FC<FigureProps> = ({ className, title }) => (
  <Frame title={title ?? "Estabilizadores do cotovelo"} vb="0 0 260 240" className={className}>
    {/* úmero distal com tróclea e capítulo */}
    <path d="M96 24 v70 M164 24 v70" {...bone} />
    <path d="M96 94 q14 22 34 22 q20 0 34 -22" {...bone} />
    <text x="118" y="40" {...label}>úmero</text>
    {/* ulna proximal + coronoide + olécrano */}
    <path d="M112 118 q-6 40 -2 96" {...bone} />
    <path d="M112 118 l24 6 q4 10 -6 14 l-18 -4z" {...bone} />
    <text x="60" y="132" {...label}>coronoide</text>
    <path d="M112 108 q-16 -4 -18 12" {...bone} />
    <text x="58" y="108" {...label}>olécrano</text>
    {/* cabeça do rádio */}
    <path d="M150 120 h30 v12 q-15 8 -30 0z" {...bone} />
    <path d="M156 132 v82 M174 132 v82" {...bone} />
    <text x="184" y="130" {...label}>rádio</text>
    {/* LCL/LUCL — complexo lateral (estabilizador-chave da PLRI) */}
    <path d="M164 98 q22 20 12 60" {...soft} />
    <text x="184" y="168" {...label}>LCL / LUCL</text>
    {/* LCM — feixe anterior */}
    <path d="M96 98 q-20 18 -8 52" {...soft} />
    <text x="30" y="160" {...label}>LCM</text>
  </Frame>
);

/** Direção da luxação: posterior (variant "posterior", padrão) vs anterior. */
export const Direcao: FC<FigureProps> = ({ className, title, variant }) => {
  const v = variant ?? "posterior";
  return (
    <Frame title={title ?? `Luxação ${v}`} className={className}>
      {/* úmero */}
      <path d="M70 30 v66 M118 30 v66" {...bone} />
      <path d="M70 96 q24 24 48 0" {...bone} />
      <text x="80" y="46" {...label}>úmero</text>
      {v === "posterior" ? (
        <>
          {/* antebraço deslocado posterior/proximal — atrás da tróclea */}
          <path d="M120 120 v96 M150 120 v96" {...bone} />
          <path d="M118 120 q16 -16 34 0" {...bone} />
          <path d="M108 92 q18 20 8 34" {...fx} strokeDasharray="5 4" />
          <text x="150" y="150" {...label}>posterior</text>
        </>
      ) : (
        <>
          {/* antebraço deslocado anterior — à frente da tróclea */}
          <path d="M52 118 v96 M82 118 v96" {...bone} />
          <path d="M50 118 q16 -16 34 0" {...bone} />
          <path d="M96 92 q-18 20 -8 34" {...fx} strokeDasharray="5 4" />
          <text x="34" y="150" {...label}>anterior</text>
        </>
      )}
    </Frame>
  );
};

/** Simples (sem fratura) vs complexa (com fratura de coronoide/cabeça do rádio). */
export const SimplesComplexa: FC<FigureProps> = ({ className, title, variant }) => {
  const v = variant ?? "simples";
  return (
    <Frame title={title ?? (v === "complexa" ? "Luxação complexa" : "Luxação simples")} className={className}>
      {/* úmero distal */}
      <path d="M72 30 v58 M156 30 v58" {...bone} />
      <path d="M72 88 q42 26 84 0" {...bone} />
      {/* ulna + coronoide */}
      <path d="M96 110 q-6 44 -2 100" {...bone} />
      <path d="M96 110 l26 6 q4 10 -6 14 l-20 -4z" {...bone} />
      {/* cabeça do rádio */}
      <path d="M132 112 h30 v12 q-15 8 -30 0z" {...bone} />
      <path d="M138 124 v88 M156 124 v88" {...bone} />
      {v === "simples" ? (
        <text x="70" y="176" {...label}>sem fratura</text>
      ) : (
        <>
          {/* fratura da ponta do coronoide */}
          <path d="M108 116 l14 4" {...fx} />
          {/* fratura da cabeça do rádio */}
          <path d="M140 114 l16 8" {...fx} />
          <text x="60" y="152" {...label}>+ coronoide</text>
          <text x="150" y="150" {...label}>+ rádio</text>
        </>
      )}
    </Frame>
  );
};

/** Círculo de Horii — instabilidade posterolateral rotatória em 3 estágios. */
export const CirculoHorii: FC<FigureProps> = ({ className, title, variant }) => {
  const stage = Number(variant ?? "1");
  return (
    <Frame title={title ?? `Círculo de Horii — estágio ${stage}`} vb="0 0 260 200" className={className}>
      {/* estágio 1 */}
      <circle cx="60" cy="80" r="26" {...bone} />
      <path d="M42 62 q18 -14 36 0" strokeWidth={stage >= 1 ? 2.6 : 1.4} stroke="var(--amber)" fill="none" />
      <text x="40" y="128" {...label}>1: LUCL</text>
      {/* estágio 2 */}
      <circle cx="140" cy="80" r="26" {...bone} />
      <path d="M122 62 q18 -14 36 0 M122 98 q18 12 36 0" strokeWidth={stage >= 2 ? 2.6 : 1.4} stroke="var(--amber)" fill="none" />
      <text x="112" y="128" {...label}>2: cápsula</text>
      {/* estágio 3 */}
      <circle cx="220" cy="80" r="26" {...bone} />
      <path d="M202 62 q18 -14 36 0 M202 98 q18 12 36 0 M198 80 h44" strokeWidth={stage >= 3 ? 2.6 : 1.4} stroke="var(--amber)" fill="none" />
      <text x="188" y="128" {...label}>3: LCM</text>
      <text x="30" y="176" {...label}>progressão lateral → medial (luxação)</text>
    </Frame>
  );
};

/** Manobra de redução da luxação posterior. */
export const Reducao: FC<FigureProps> = ({ className, title }) => (
  <Frame title={title ?? "Redução da luxação posterior"} className={className}>
    {/* úmero */}
    <path d="M60 40 v60 M104 40 v60" {...bone} />
    <path d="M60 100 q22 22 44 0" {...bone} />
    {/* antebraço em posição reduzida (setas de tração + flexão) */}
    <path d="M74 116 v92 M104 116 v92" {...bone} />
    <path d="M72 116 q16 -14 34 0" {...bone} />
    {/* vetor de tração longitudinal */}
    <path d="M89 214 v-14 M84 206 l5 8 l5 -8" {...metal} />
    <text x="100" y="210" {...label}>tração</text>
    {/* pressão sobre olécrano (correção posterior→anterior) */}
    <path d="M150 150 l-30 0 M126 145 l-6 5 l6 5" {...metal} />
    <text x="152" y="152" {...label}>empurrar olécrano</text>
    <text x="40" y="34" {...label}>flexão + supinação</text>
  </Frame>
);

/** Teste de estabilidade concêntrica e arco estável. */
export const TesteEstabilidade: FC<FigureProps> = ({ className, title }) => (
  <Frame title={title ?? "Teste de estabilidade e arco estável"} vb="0 0 240 220" className={className}>
    {/* úmero fixo */}
    <path d="M110 20 v54 M150 20 v54" {...bone} />
    <path d="M110 74 q20 20 40 0" {...bone} />
    {/* arco de flexão estável (30–130°) */}
    <path d="M130 96 a70 70 0 0 0 -66 48" {...soft} strokeDasharray="4 4" />
    <path d="M130 96 a70 70 0 0 1 40 60" {...soft} />
    <text x="46" y="160" {...label}>&lt; 30°: reluxa</text>
    <text x="150" y="176" {...label}>arco estável</text>
    {/* antebraço em flexão */}
    <path d="M130 96 l-40 60" {...bone} strokeWidth={2.6} />
    <text x="96" y="40" {...label}>fluoroscopia dinâmica</text>
  </Frame>
);

export const figures: Record<string, FC<FigureProps>> = {
  "luxacao-cotovelo:anatomia": Anatomia,
  "luxacao-cotovelo:direcao": Direcao,
  "luxacao-cotovelo:simples-complexa": SimplesComplexa,
  "luxacao-cotovelo:circulo-horii": CirculoHorii,
  "luxacao-cotovelo:reducao": Reducao,
  "luxacao-cotovelo:teste-estabilidade": TesteEstabilidade,
};
