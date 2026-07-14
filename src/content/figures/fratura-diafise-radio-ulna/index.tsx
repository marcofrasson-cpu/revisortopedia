import type { FC, ReactNode } from "react";
import type { FigureProps } from "../../../types/topic";

/* Esquemas originais — fratura das diáfises do rádio e da ulna. Fundamentados
   em Rockwood & Green's Fractures in Adults, 10ª ed. Line-art didático, dois
   tons, cores exclusivamente por CSS var. */

const bone = { stroke: "var(--ink-soft)", strokeWidth: 2, fill: "var(--surface)" };
const boneLine = { stroke: "var(--ink-soft)", strokeWidth: 2, fill: "none" as const };
const fx = { stroke: "var(--cortical)", strokeWidth: 2.4, fill: "none" as const };
const metal = { stroke: "var(--teal)", strokeWidth: 2.2, fill: "none" as const };
const nerve = { stroke: "var(--amber)", strokeWidth: 2.2, fill: "none" as const };
const measure = { stroke: "var(--amber)", strokeWidth: 1.4, fill: "none" as const };
const iom = { stroke: "var(--ink-soft)", strokeWidth: 1, fill: "none" as const };
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

/* Ulna à esquerda (medial): olécrano proximal robusto, afila distalmente. */
function Ulna() {
  return (
    <>
      {/* bordas da diáfise */}
      <path d="M64 54 q-4 88 2 168" {...boneLine} />
      <path d="M84 54 q6 88 0 168" {...boneLine} />
      {/* olécrano / coronóide */}
      <path d="M64 54 q10 -18 20 0" {...boneLine} />
      <path d="M60 62 q10 8 24 2" {...boneLine} />
      {/* cabeça e processo estiloide distal */}
      <path d="M66 222 q9 12 18 0" {...boneLine} />
    </>
  );
}

/* Rádio à direita (lateral) com o arco radial (ápice lateral). */
function Radio() {
  return (
    <>
      {/* borda medial (voltada à MIO) */}
      <path d="M150 58 q20 66 4 164" {...boneLine} />
      {/* borda lateral — descreve o arco radial */}
      <path d="M168 58 q30 62 10 164" {...boneLine} />
      {/* cabeça / colo radial proximal */}
      <path d="M150 58 q9 -14 18 0" {...boneLine} />
      {/* metáfise distal alargada (punho) */}
      <path d="M150 214 q16 14 32 0" {...boneLine} />
    </>
  );
}

/** Anatomia: rádio, ulna, membrana interóssea e articulações radioulnares. */
export const Anatomia: FC<FigureProps> = ({ className, title }) => (
  <Frame title={title ?? "Anatomia do antebraço: rádio, ulna e MIO"} className={className}>
    <Ulna />
    <Radio />
    {/* membrana interóssea */}
    {[86, 106, 126, 146, 166].map((y) => (
      <line key={y} x1="86" y1={y} x2="150" y2={y + 12} {...iom} />
    ))}
    <text x="92" y="118" {...label}>MIO</text>
    <text x="30" y="58" {...label}>ulna</text>
    <text x="186" y="70" {...label}>rádio</text>
    <text x="150" y="48" {...label}>ARUP</text>
    <text x="120" y="248" {...label}>ARUD</text>
    <text x="188" y="150" {...label}>arco radial</text>
  </Frame>
);

/** Arco radial: corda proximal-distal e flecha máxima (método de Schemitsch). */
export const ArcoRadial: FC<FigureProps> = ({ className, title }) => (
  <Frame title={title ?? "Medida do arco radial"} className={className}>
    {/* rádio isolado, bordas */}
    <path d="M96 40 q30 80 8 190" {...boneLine} />
    <path d="M116 40 q34 78 12 190" {...boneLine} />
    <path d="M96 40 q10 -12 20 0" {...boneLine} />
    <path d="M100 224 q14 12 28 0" {...boneLine} />
    {/* corda: une extremidades proximal e distal ao longo do eixo */}
    <line x1="106" y1="44" x2="118" y2="224" {...measure} strokeDasharray="5 4" />
    {/* flecha do arco máximo (perpendicular à corda) */}
    <line x1="112" y1="134" x2="150" y2="130" {...measure} />
    <circle cx="150" cy="130" r="2.6" fill="var(--amber)" />
    <text x="128" y="120" {...label}>arco máx.</text>
    <text x="60" y="140" {...label}>corda</text>
    <text x="126" y="210" {...label}>local (%)</text>
  </Frame>
);

/** AO/OTA 22: A simples, B em cunha, C complexa/segmentar (ambos os ossos). */
export const Ao: FC<FigureProps> = ({ className, title, variant }) => {
  const v = variant ?? "A";
  return (
    <Frame title={title ?? `AO/OTA 22-${v}`} className={className}>
      {/* ulna */}
      <path d="M70 30 v200 M90 30 v200" {...boneLine} />
      {/* rádio */}
      <path d="M150 30 v200 M170 30 v200" {...boneLine} />
      {v === "A" && (
        <>
          <path d="M70 132 l20 -12" {...fx} />
          <path d="M150 150 l20 12" {...fx} />
        </>
      )}
      {v === "B" && (
        <>
          <path d="M70 122 l20 10 M70 146 l20 -10" {...fx} />
          <path d="M150 140 l20 10 M150 164 l20 -10" {...fx} />
          <text x="94" y="140" {...label}>cunha</text>
        </>
      )}
      {v === "C" && (
        <>
          <path d="M70 110 l20 8 M70 160 l20 -8" {...fx} />
          <path d="M150 118 l20 8 M150 172 l20 -8" {...fx} />
          <text x="92" y="140" {...label}>segmentar</text>
        </>
      )}
      <text x="66" y="248" {...label}>ulna</text>
      <text x="146" y="248" {...label}>rádio 22-{v}</text>
    </Frame>
  );
};

/** Via de Henry (anterior) ao rádio: intervalo braquiorradial / FRC. */
export const ViaHenry: FC<FigureProps> = ({ className, title }) => (
  <Frame title={title ?? "Via anterior de Henry"} className={className}>
    <Radio />
    <Ulna />
    {/* incisão anterior sobre o rádio */}
    <path d="M160 56 q-8 84 -6 166" {...metal} strokeDasharray="6 5" />
    {/* nervo interósseo posterior (supinador) sob risco no terço proximal */}
    <path d="M150 78 q-14 8 -18 24" {...nerve} />
    <text x="118" y="86" {...label}>NIP (supinador)</text>
    <text x="176" y="60" {...label}>incisão</text>
    <text x="40" y="200" {...label}>a. radial / n. superficial</text>
  </Frame>
);

/** Via de Thompson (posterior) ao rádio e borda subcutânea da ulna. */
export const ViaThompson: FC<FigureProps> = ({ className, title }) => (
  <Frame title={title ?? "Via posterior de Thompson"} className={className}>
    <Radio />
    <Ulna />
    {/* incisão dorsal sobre o rádio (ECRB / EDC) */}
    <path d="M158 58 q-6 82 -4 158" {...metal} strokeDasharray="6 5" />
    {/* incisão direta sobre a borda subcutânea da ulna */}
    <path d="M74 58 q-2 84 4 164" {...metal} strokeDasharray="6 5" />
    {/* NIP emergindo do supinador */}
    <path d="M152 96 q-12 6 -14 20" {...nerve} />
    <text x="112" y="104" {...label}>NIP</text>
    <text x="30" y="150" {...label}>borda subcutânea</text>
    <text x="176" y="60" {...label}>ECRB/EDC</text>
  </Frame>
);

/** ORIF: placas restaurando comprimento, rotação e o arco radial. */
export const OrifPlaca: FC<FigureProps> = ({ className, title }) => (
  <Frame title={title ?? "ORIF com placas de compressão"} className={className}>
    <Ulna />
    <Radio />
    {/* placa na ulna (reta) */}
    <path d="M62 96 h10 v96 h-10 z" {...metal} />
    {[108, 128, 160, 180].map((y) => (
      <line key={`u${y}`} x1="64" y1={y} x2="86" y2={y} {...metal} strokeWidth={1.5} />
    ))}
    {/* placa no rádio, contornando o arco radial */}
    <path d="M156 92 q16 44 4 100" {...metal} />
    <path d="M170 92 q16 46 4 100" {...metal} />
    {[112, 132, 156, 176].map((y) => (
      <line key={`r${y}`} x1="150" y1={y} x2="176" y2={y} {...metal} strokeWidth={1.5} />
    ))}
    <text x="30" y="150" {...label}>placa ulna</text>
    <text x="182" y="150" {...label}>placa rádio</text>
    <text x="70" y="248" {...label}>arco radial restaurado</text>
  </Frame>
);

/** Sinostose radioulnar pós-traumática: ponte óssea entre os dois ossos. */
export const Sinostose: FC<FigureProps> = ({ className, title }) => (
  <Frame title={title ?? "Sinostose radioulnar"} className={className}>
    <path d="M70 34 v192 M90 34 v192" {...boneLine} />
    <path d="M150 34 v192 M170 34 v192" {...boneLine} />
    {/* ponte óssea heterotópica unindo ulna e rádio */}
    <path d="M90 120 q30 -20 60 0 q-30 40 -60 0 z" {...bone} />
    <path d="M90 132 q30 12 60 0" {...iom} />
    <text x="86" y="104" {...label}>ponte óssea</text>
    <text x="60" y="248" {...label}>ulna</text>
    <text x="150" y="248" {...label}>rádio</text>
  </Frame>
);

/** Síndrome compartimental: corte do antebraço e fasciotomia volar. */
export const Compartimento: FC<FigureProps> = ({ className, title }) => (
  <Frame title={title ?? "Compartimentos do antebraço e fasciotomia"} vb="0 0 240 240" className={className}>
    {/* fáscia (contorno) */}
    <ellipse cx="120" cy="120" rx="92" ry="70" {...boneLine} />
    {/* ossos no corte */}
    <circle cx="96" cy="128" r="14" {...bone} />
    <circle cx="150" cy="120" r="13" {...bone} />
    {/* septo dividindo volar / dorsal */}
    <path d="M40 110 q80 22 160 -6" {...iom} />
    {/* mobile wad (lateral) */}
    <path d="M196 116 q-18 6 -22 20" {...iom} />
    {/* incisão de fasciotomia volar */}
    <path d="M70 168 q50 22 100 0" {...metal} strokeDasharray="6 5" />
    <text x="150" y="182" {...label}>volar (flexor)</text>
    <text x="96" y="66" {...label}>dorsal (extensor)</text>
    <text x="182" y="146" {...label}>mobile wad</text>
    <text x="60" y="196" {...label}>fasciotomia</text>
  </Frame>
);

export const figures: Record<string, FC<FigureProps>> = {
  "fratura-diafise-radio-ulna:anatomia": Anatomia,
  "fratura-diafise-radio-ulna:arco-radial": ArcoRadial,
  "fratura-diafise-radio-ulna:ao": Ao,
  "fratura-diafise-radio-ulna:via-henry": ViaHenry,
  "fratura-diafise-radio-ulna:via-thompson": ViaThompson,
  "fratura-diafise-radio-ulna:orif-placa": OrifPlaca,
  "fratura-diafise-radio-ulna:sinostose": Sinostose,
  "fratura-diafise-radio-ulna:compartimento": Compartimento,
};
