import type { FC, ReactNode } from "react";
import type { FigureProps } from "../../../types/topic";

/* Esquemas originais — tríade terrível do cotovelo. Fundamentados em Rockwood &
   Green's Fractures in Adults, 10ª ed. Line-art didático, cores por CSS var.
   Vista lateral do cotovelo: úmero distal (tróclea/capítulo), ulna proximal
   (olécrano + coronoide) e rádio proximal (cabeça/colo). */

const bone = { stroke: "var(--ink-soft)", strokeWidth: 2, fill: "var(--surface)" } as const;
const fx = { stroke: "var(--cortical)", strokeWidth: 2.4, fill: "none" as const } as const;
const metal = { stroke: "var(--teal)", strokeWidth: 2.2, fill: "none" as const } as const;
const soft = { stroke: "var(--amber)", strokeWidth: 2, fill: "none" as const } as const;
const label = { fontSize: 11, fill: "var(--muted)", fontFamily: "var(--font-body, sans-serif)" } as const;

function Frame({ children, title, vb = "0 0 240 240", className }: { children: ReactNode; title: string; vb?: string; className?: string }) {
  return (
    <svg viewBox={vb} preserveAspectRatio="xMidYMid meet" role="img" className={className} fill="none">
      <title>{title}</title>
      {children}
    </svg>
  );
}

/** Úmero distal, ulna (olécrano + coronoide), cabeça do rádio e estabilizadores. */
export const Anatomia: FC<FigureProps> = ({ className, title }) => (
  <Frame title={title ?? "Anatomia do cotovelo — estabilizadores"} className={className}>
    {/* úmero distal com tróclea e capítulo */}
    <path d="M40 30 h30 v70 q0 26 -22 34 q-24 -8 -20 -46 q2 -40 12 -58z" {...bone} />
    <text x="30" y="26" {...label}>úmero</text>
    {/* ulna: olécrano posterior + coronoide anterior */}
    <path d="M56 150 q-6 -22 6 -34 l40 -6 q10 2 12 14 l0 12 q-2 10 -14 12 l-30 4 q10 30 6 90" {...bone} />
    <text x="112" y="126" {...label}>coronoide</text>
    <text x="40" y="180" {...label}>olécrano</text>
    {/* cabeça e colo do rádio */}
    <path d="M108 118 h34 v14 q-17 10 -34 0z" {...bone} />
    <path d="M114 132 v82 M136 132 v82" {...bone} />
    <text x="146" y="128" {...label}>cabeça do rádio</text>
    {/* LCL / LUCL lateral */}
    <path d="M60 96 q40 24 46 60" {...soft} />
    <text x="150" y="164" {...label}>LCL</text>
    {/* cápsula anterior sobre o coronoide */}
    <path d="M62 112 q30 -4 46 6" {...soft} strokeDasharray="4 3" />
    <text x="70" y="108" {...label}>cápsula ant.</text>
  </Frame>
);

/** Mecanismo posterolateral rotatório — falha de lateral para medial (Horii). */
export const Mecanismo: FC<FigureProps> = ({ className, title }) => (
  <Frame title={title ?? "Mecanismo posterolateral rotatório"} vb="0 0 240 200" className={className}>
    {/* úmero */}
    <path d="M96 24 h48 v54 q-24 14 -48 0z" {...bone} />
    <text x="150" y="40" {...label}>úmero</text>
    {/* ulna luxada posteriormente */}
    <path d="M120 96 q-20 8 -22 40 l4 44" {...bone} />
    {/* rádio luxado posterior */}
    <path d="M150 96 q6 30 2 84" {...bone} />
    {/* seta de rotação: valgo + supinação + carga axial */}
    <path d="M60 150 q30 -40 78 -46" {...fx} strokeDasharray="6 4" />
    <path d="M132 100 l6 4 l-8 6" {...fx} />
    <text x="30" y="168" {...label}>carga axial + valgo</text>
    <text x="30" y="182" {...label}>+ supinação</text>
    {/* estágios de falha lateral→medial */}
    <text x="150" y="120" {...label}>lateral → medial</text>
  </Frame>
);

/** Classificação de O'Driscoll do coronoide — ponta / ântero-medial / basal. */
export const ODriscoll: FC<FigureProps> = ({ className, title, variant }) => {
  const v = variant ?? "tip";
  return (
    <Frame title={title ?? `Coronoide O'Driscoll — ${v}`} className={className}>
      {/* ulna proximal em perfil com coronoide anterior */}
      <path d="M70 60 q10 -8 22 -6 l0 130 q-14 4 -24 -2 q-6 -60 2 -122z" {...bone} />
      <path d="M92 54 q30 0 40 20 q6 12 -6 20 l-34 6z" {...bone} />
      <text x="120" y="48" {...label}>coronoide</text>
      {v === "tip" && (
        <>
          <path d="M104 66 l30 12" {...fx} />
          <text x="60" y="200" {...label}>Tipo 1 — ponta</text>
        </>
      )}
      {v === "anteromedial" && (
        <>
          <path d="M96 60 l22 30" {...fx} />
          <text x="40" y="200" {...label}>Tipo 2 — ântero-medial</text>
        </>
      )}
      {v === "basal" && (
        <>
          <path d="M90 92 l44 4" {...fx} />
          <text x="54" y="200" {...label}>Tipo 3 — basal</text>
        </>
      )}
    </Frame>
  );
};

/** Sequência padronizada de reparo (Pugh/McKee) — de dentro para fora. */
export const Sequencia: FC<FigureProps> = ({ className, title, variant, activeStep }) => {
  const order = ["coronoide", "cabeca", "lcl"] as const;
  const active = variant ?? (activeStep ? order[Math.min(activeStep, 3) - 1] : "coronoide");
  const on = (k: string) => (active === k ? metal : { ...soft, strokeDasharray: "4 4" });
  return (
    <Frame title={title ?? "Sequência de reparo"} vb="0 0 240 210" className={className}>
      {/* 1 coronoide/cápsula anterior */}
      <circle cx="50" cy="60" r="18" {...bone} />
      <path d="M42 60 h16" {...on("coronoide")} />
      <text x="40" y="98" {...label}>1. coronoide</text>
      <text x="42" y="110" {...label}>+ cápsula</text>
      {/* 2 cabeça do rádio */}
      <circle cx="120" cy="60" r="18" {...bone} />
      <path d="M112 54 h16 M112 66 h16" {...on("cabeca")} />
      <text x="96" y="98" {...label}>2. cabeça</text>
      <text x="98" y="110" {...label}>do rádio</text>
      {/* 3 LCL */}
      <circle cx="190" cy="60" r="18" {...bone} />
      <path d="M182 52 q8 8 0 16" {...on("lcl")} />
      <text x="176" y="98" {...label}>3. LCL</text>
      {/* setas de sequência */}
      <path d="M70 60 h30" {...fx} strokeWidth={1.6} />
      <path d="M140 60 h30" {...fx} strokeWidth={1.6} />
      <text x="30" y="150" {...label}>Se instável: reparar LCM</text>
      <text x="30" y="166" {...label}>± fixador articulado</text>
    </Frame>
  );
};

/** Reparo do coronoide/cápsula anterior — laço de sutura transóssea. */
export const CoronoideReparo: FC<FigureProps> = ({ className, title }) => (
  <Frame title={title ?? "Reparo do coronoide / cápsula anterior"} className={className}>
    <path d="M70 50 q10 -8 22 -6 l0 150 q-14 4 -24 -2 q-6 -70 2 -142z" {...bone} />
    <path d="M92 46 q34 0 44 22 q6 14 -8 22 l-36 6z" {...bone} />
    {/* túneis transósseos e sutura em laço */}
    <path d="M96 54 q40 -30 46 30" {...metal} />
    <path d="M100 82 q30 -18 40 22" {...metal} />
    <circle cx="82" cy="70" r="2.4" fill="var(--teal)" />
    <circle cx="82" cy="96" r="2.4" fill="var(--teal)" />
    <text x="120" y="42" {...label}>laço de sutura</text>
    <text x="40" y="200" {...label}>túneis transósseos</text>
  </Frame>
);

/** Cabeça do rádio — fixar (ORIF) vs substituir (prótese). */
export const CabecaRadial: FC<FigureProps> = ({ className, title, variant }) => {
  const v = variant ?? "fixar";
  return (
    <Frame title={title ?? `Cabeça do rádio — ${v}`} className={className}>
      {v === "fixar" ? (
        <>
          <path d="M92 70 h56 v16 q-28 14 -56 0z" {...bone} />
          <path d="M100 86 v120 M140 86 v120" {...bone} />
          <line x1="98" y1="96" x2="142" y2="96" {...metal} strokeWidth={1.8} />
          <path d="M120 72 l12 16" {...fx} />
          <text x="150" y="100" {...label}>parafusos</text>
          <text x="70" y="220" {...label}>ORIF (reparável)</text>
        </>
      ) : (
        <>
          <path d="M92 72 h56 v14 q-28 10 -56 0z" {...metal} />
          <path d="M116 86 v120" {...metal} strokeWidth={3} />
          <path d="M104 130 h24 M104 160 h24" {...bone} />
          <text x="152" y="88" {...label}>prótese</text>
          <text x="60" y="220" {...label}>substituir (irreparável)</text>
        </>
      )}
    </Frame>
  );
};

/** Reparo do LCL à origem no epicôndilo lateral (âncora / túnel isométrico). */
export const LclReparo: FC<FigureProps> = ({ className, title }) => (
  <Frame title={title ?? "Reparo do LCL ao epicôndilo lateral"} className={className}>
    {/* úmero distal / epicôndilo lateral */}
    <path d="M60 40 h40 v66 q-20 16 -40 4 q-8 -38 0 -74z" {...bone} />
    <text x="30" y="52" {...label}>epicôndilo lat.</text>
    {/* âncora no ponto isométrico */}
    <circle cx="84" cy="92" r="3" fill="var(--teal)" />
    <path d="M84 92 q40 20 44 70" {...metal} />
    <text x="130" y="176" {...label}>LCL reinserido</text>
    <text x="96" y="88" {...label}>ponto isométrico</text>
    {/* ulna proximal receptora */}
    <path d="M118 150 q10 30 6 70" {...bone} />
  </Frame>
);

/** Fixador externo articulado + checagem da estabilidade (drop sign). */
export const FixadorArticulado: FC<FigureProps> = ({ className, title }) => (
  <Frame title={title ?? "Fixador externo articulado"} vb="0 0 240 220" className={className}>
    {/* úmero e ulna */}
    <path d="M70 26 h26 v70 q0 20 -14 30 q-16 -6 -14 -34 q0 -40 2 -66z" {...bone} />
    <path d="M82 128 q-6 40 0 80 l20 0 q4 -46 -2 -84z" {...bone} />
    {/* pinos e barra do fixador com dobradiça no eixo de rotação */}
    <circle cx="150" cy="96" r="6" {...metal} />
    <line x1="86" y1="60" x2="150" y2="96" {...metal} strokeWidth={1.6} />
    <line x1="92" y1="170" x2="150" y2="96" {...metal} strokeWidth={1.6} />
    <path d="M150 96 v-40 M150 96 v50" {...metal} strokeWidth={2.6} />
    <text x="158" y="94" {...label}>dobradiça no</text>
    <text x="158" y="108" {...label}>eixo de rotação</text>
    <text x="40" y="210" {...label}>protege o reparo, permite ADM</text>
  </Frame>
);

export const figures: Record<string, FC<FigureProps>> = {
  "triade-terrivel-cotovelo:anatomia": Anatomia,
  "triade-terrivel-cotovelo:mecanismo": Mecanismo,
  "triade-terrivel-cotovelo:odriscoll": ODriscoll,
  "triade-terrivel-cotovelo:sequencia": Sequencia,
  "triade-terrivel-cotovelo:coronoide-reparo": CoronoideReparo,
  "triade-terrivel-cotovelo:cabeca-radial": CabecaRadial,
  "triade-terrivel-cotovelo:lcl-reparo": LclReparo,
  "triade-terrivel-cotovelo:fixador-articulado": FixadorArticulado,
};
