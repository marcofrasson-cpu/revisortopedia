import type { FC, ReactNode } from "react";
import type { FigureProps } from "../../../types/topic";

/* Esquemas originais — fratura da diáfise umeral. Fundamentados em Rockwood &
   Green's Fractures in Adults, 10ª ed. Line-art didático, cores por CSS var. */

const bone = { stroke: "var(--ink-soft)", strokeWidth: 2, fill: "var(--surface)" };
const fx = { stroke: "var(--cortical)", strokeWidth: 2.4, fill: "none" as const };
const metal = { stroke: "var(--teal)", strokeWidth: 2.2, fill: "none" as const };
const nerve = { stroke: "var(--amber)", strokeWidth: 2.2, fill: "none" as const };
const label = {
  fontSize: 11,
  fill: "var(--muted)",
  fontFamily: "var(--font-body, sans-serif)",
} as const;

function Frame({
  children,
  title,
  vb = "0 0 240 260",
  className,
}: {
  children: ReactNode;
  title: string;
  vb?: string;
  className?: string;
}) {
  return (
    <svg
      viewBox={vb}
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      fill="none"
    >
      <title>{title}</title>
      {children}
    </svg>
  );
}

/** Úmero com o sulco espiral e o trajeto do nervo radial. */
export const Anatomia: FC<FigureProps> = ({ className, title }) => (
  <Frame title={title ?? "Anatomia do úmero e nervo radial"} className={className}>
    {/* diáfise */}
    <path
      d="M104 20 q-8 60 -6 110 q2 45 -6 110 M136 20 q8 60 6 110 q-2 45 6 110"
      {...bone}
    />
    {/* cabeça / proximal */}
    <path d="M104 20 q16 -14 32 0" {...bone} />
    {/* côndilos distais */}
    <path d="M92 240 q28 18 56 0" {...bone} />
    {/* nervo radial cruzando a face posterior (sulco espiral) do proximal-medial ao distal-lateral */}
    <path d="M108 96 q40 26 46 78" {...nerve} strokeDasharray="1 0" />
    <circle cx="154" cy="176" r="3" fill="var(--amber)" />
    <text x="150" y="150" {...label}>n. radial</text>
    <text x="150" y="92" {...label}>sulco espiral</text>
    <text x="70" y="30" {...label}>proximal</text>
    <text x="150" y="252" {...label}>côndilos</text>
  </Frame>
);

/** AO/OTA 12: A simples, B em cunha, C complexa/segmentar. */
export const Ao: FC<FigureProps> = ({ className, title, variant }) => {
  const v = variant ?? "A";
  return (
    <Frame title={title ?? `AO/OTA 12-${v}`} className={className}>
      <path d="M108 24 v212 M132 24 v212" {...bone} />
      {v === "A" && <path d="M108 150 l24 -14" {...fx} />}
      {v === "B" && (
        <>
          <path d="M108 138 l24 12" {...fx} />
          <path d="M108 162 l24 -12" {...fx} />
          <text x="140" y="156" {...label}>cunha</text>
        </>
      )}
      {v === "C" && (
        <>
          <path d="M108 120 l24 10" {...fx} />
          <path d="M108 180 l24 -10" {...fx} />
          <text x="140" y="156" {...label}>segmentar</text>
        </>
      )}
      <text x="70" y="150" {...label}>12-{v}</text>
    </Frame>
  );
};

/** Holstein-Lewis: espiral do terço distal com nervo radial sob risco. */
export const HolsteinLewis: FC<FigureProps> = ({ className, title }) => (
  <Frame title={title ?? "Fratura de Holstein-Lewis"} className={className}>
    <path d="M108 24 v212 M132 24 v212" {...bone} />
    {/* traço espiral no terço distal */}
    <path d="M108 176 q12 8 24 20 M110 196 l22 -8" {...fx} />
    {/* nervo radial adjacente lateral distal */}
    <path d="M138 150 q10 26 2 56" {...nerve} />
    <text x="146" y="196" {...label}>n. radial</text>
    <text x="60" y="196" {...label}>1/3 distal</text>
  </Frame>
);

/** Órtese funcional de Sarmiento. */
export const BraceSarmiento: FC<FigureProps> = ({ className, title }) => (
  <Frame title={title ?? "Órtese funcional (Sarmiento)"} className={className}>
    <path d="M110 24 v212 M130 24 v212" {...bone} />
    {/* casco anterior e posterior da órtese */}
    <path d="M92 70 q-10 80 6 150 q6 14 22 14 M148 70 q10 80 -6 150 q-6 14 -22 14" {...metal} />
    {/* tiras de velcro */}
    <path d="M92 110 h56 M92 150 h56 M96 190 h48" {...metal} strokeWidth={1.6} />
    <text x="150" y="70" {...label}>órtese</text>
  </Frame>
);

/** Via anterolateral — intervalo e nervo radial distal. */
export const ViaAnterolateral: FC<FigureProps> = ({ className, title }) => (
  <Frame title={title ?? "Via anterolateral"} className={className}>
    <path d="M112 24 v212 M128 24 v212" {...bone} />
    {/* incisão */}
    <path d="M150 60 v150" {...metal} strokeDasharray="6 5" />
    {/* braquial / bíceps intervalo */}
    <text x="150" y="52" {...label}>incisão</text>
    <path d="M150 176 q-8 10 -18 6" {...nerve} />
    <text x="156" y="182" {...label}>n. radial (distal)</text>
  </Frame>
);

/** Via posterior — nervo radial no sulco, entre cabeças do tríceps. */
export const ViaPosterior: FC<FigureProps> = ({ className, title }) => (
  <Frame title={title ?? "Via posterior"} className={className}>
    <path d="M112 24 v212 M128 24 v212" {...bone} />
    <path d="M120 40 v186" {...metal} strokeDasharray="6 5" />
    <path d="M100 150 q20 8 40 0" {...nerve} />
    <text x="146" y="150" {...label}>n. radial</text>
    <text x="60" y="52" {...label}>tríceps</text>
  </Frame>
);

/** Redução e alinhamento. */
export const StepReducao: FC<FigureProps> = ({ className, title }) => (
  <Frame title={title ?? "Redução"} className={className}>
    <path d="M108 24 v96 M132 24 v96" {...bone} />
    <path d="M108 150 v86 M132 150 v86" {...bone} />
    <path d="M104 132 h32" {...fx} />
    <path d="M150 120 q14 15 0 30" {...metal} />
    <text x="150" y="118" {...label}>tração/alinhar</text>
  </Frame>
);

/** Placa de compressão (ORIF / MIPO em ponte). */
export const StepPlaca: FC<FigureProps> = ({ className, title }) => (
  <Frame title={title ?? "Fixação com placa"} className={className}>
    <path d="M108 24 v212 M132 24 v212" {...bone} />
    <path d="M96 60 h12 v140 h-12 z" {...metal} />
    {[78, 100, 160, 182].map((y) => (
      <line key={y} x1="98" y1={y} x2="130" y2={y} {...metal} strokeWidth={1.6} />
    ))}
    <path d="M108 150 l24 -8" {...fx} />
    <text x="140" y="130" {...label}>placa</text>
  </Frame>
);

/** Haste intramedular bloqueada. */
export const StepHaste: FC<FigureProps> = ({ className, title }) => (
  <Frame title={title ?? "Haste intramedular"} className={className}>
    <path d="M108 24 v212 M132 24 v212" {...bone} />
    <path d="M120 40 v180" {...metal} strokeWidth={3} />
    <line x1="108" y1="58" x2="132" y2="58" {...metal} strokeWidth={1.8} />
    <line x1="108" y1="204" x2="132" y2="204" {...metal} strokeWidth={1.8} />
    <path d="M108 150 l24 -8" {...fx} />
    <text x="142" y="130" {...label}>haste</text>
  </Frame>
);

export const figures: Record<string, FC<FigureProps>> = {
  "fratura-diafise-umeral:anatomia": Anatomia,
  "fratura-diafise-umeral:ao": Ao,
  "fratura-diafise-umeral:holstein-lewis": HolsteinLewis,
  "fratura-diafise-umeral:brace-sarmiento": BraceSarmiento,
  "fratura-diafise-umeral:via-anterolateral": ViaAnterolateral,
  "fratura-diafise-umeral:via-posterior": ViaPosterior,
  "fratura-diafise-umeral:step-reducao": StepReducao,
  "fratura-diafise-umeral:step-placa": StepPlaca,
  "fratura-diafise-umeral:step-haste": StepHaste,
};
