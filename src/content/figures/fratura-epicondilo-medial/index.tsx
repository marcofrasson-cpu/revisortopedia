import type { FC, ReactNode } from "react";
import type { FigureProps } from "../../../types/topic";

/* Esquemas originais — fratura (avulsão) do epicôndilo medial na criança.
   Fundamentados em Rockwood and Wilkins' Fractures in Children, 10ª ed. (2024)
   e Tachdjian's Pediatric Orthopaedics, 6ª ed. (2022). Line-art didático de
   2 tons, cores só por CSS var. A apófise e sua FISE são representadas em teal. */

const bone = { stroke: "var(--ink-soft)", strokeWidth: 2, fill: "var(--surface)" } as const;
const boneGhost = { stroke: "var(--ink-soft)", strokeWidth: 1.6, fill: "none", strokeDasharray: "4 4" } as const;
const physis = { stroke: "var(--teal)", strokeWidth: 2.4, fill: "none" } as const;
const soft = { stroke: "var(--teal)", strokeWidth: 2, fill: "none" } as const;
const metal = { stroke: "var(--teal)", strokeWidth: 2, fill: "none" } as const;
const fx = { stroke: "var(--cortical)", strokeWidth: 2.4, fill: "none" } as const;
const measure = { stroke: "var(--amber)", strokeWidth: 1.8, fill: "none" } as const;
const label = { fontSize: 11, fill: "var(--muted)", fontFamily: "var(--font-body, sans-serif)" } as const;
const labelTeal = { fontSize: 11, fill: "var(--teal)", fontFamily: "var(--font-body, sans-serif)" } as const;
const labelAmber = { fontSize: 11, fill: "var(--amber)", fontFamily: "var(--font-body, sans-serif)" } as const;
const labelCortical = { fontSize: 11, fill: "var(--cortical)", fontFamily: "var(--font-body, sans-serif)" } as const;

function Frame({
  children,
  title,
  vb = "0 0 240 240",
  className,
}: {
  children: ReactNode;
  title: string;
  vb?: string;
  className?: string;
}) {
  return (
    <svg viewBox={vb} preserveAspectRatio="xMidYMid meet" role="img" className={className} fill="none">
      <title>{title}</title>
      {children}
    </svg>
  );
}

/* -- peças reutilizáveis (AP do cotovelo direito; medial à esquerda) --------- */

/** Úmero distal: diáfise, colunas, fossa do olécrano, tróclea e capítulo. */
function Humerus() {
  return (
    <>
      <path d="M104 14 v62 M140 14 v62" {...bone} />
      <path d="M104 76 q-24 22 -32 58" {...bone} />
      <path d="M140 76 q26 22 34 60" {...bone} />
      <ellipse cx="122" cy="126" rx="12" ry="15" {...bone} />
      <circle cx="106" cy="160" r="12" {...bone} />
      <circle cx="152" cy="160" r="12" {...bone} />
    </>
  );
}

/** Antebraço proximal: ulna (incisura sigmoide) e cabeça do rádio. */
function Forearm() {
  return (
    <>
      <path d="M100 176 q2 -12 16 -14 q16 2 20 16 q2 26 -2 44" {...bone} />
      <path d="M100 176 q-2 26 2 44" {...bone} />
      <circle cx="154" cy="180" r="9" {...bone} />
      <path d="M148 189 v31 M162 189 v31" {...bone} />
    </>
  );
}

/** Leito doador da apófise, vazio (contorno tracejado). */
function DonorSite() {
  return <ellipse cx="80" cy="140" rx="11" ry="13" transform="rotate(-20 80 140)" {...boneGhost} />;
}

/* -- figuras ---------------------------------------------------------------- */

/** Anatomia: apófise do epicôndilo medial, sua fise, massa flexo-pronadora,
    banda anterior do LCU e o nervo ulnar no túnel cubital. */
export const Anatomia: FC<FigureProps> = ({ className, title }) => (
  <Frame title={title ?? "Anatomia do epicôndilo medial da criança"} className={className} vb="0 0 240 252">
    <Humerus />
    <Forearm />
    {/* apófise do epicôndilo medial */}
    <ellipse cx="80" cy="142" rx="12" ry="15" transform="rotate(-20 80 142)" {...bone} />
    {/* fise apofisária — interface com a coluna medial */}
    <path d="M70 132 q12 -10 24 -2" {...physis} />
    <text x="2" y="112" {...labelTeal}>fise apofisária</text>
    <text x="2" y="150" {...label}>epicôndilo</text>
    <text x="2" y="162" {...label}>medial</text>
    {/* massa flexo-pronadora — origem na apófise, ventre distal */}
    <path d="M70 154 q-12 28 -4 54" {...bone} />
    <path d="M90 156 q4 26 -6 52" {...bone} />
    <text x="2" y="248" {...label}>massa flexo-pronadora</text>
    {/* banda anterior do LCU — apófise ao tubérculo sublime da ulna */}
    <path d="M88 156 q14 14 28 26" {...soft} />
    <text x="92" y="200" {...labelTeal}>LCU</text>
    {/* nervo ulnar — posterior ao epicôndilo (túnel cubital) */}
    <path d="M96 74 q-18 26 -20 56 q-2 18 12 32" {...measure} />
    <text x="24" y="72" {...labelAmber}>n. ulnar</text>
  </Frame>
);

/** Sequência de ossificação do cotovelo (CRITOE) — âncora para reconhecer o
    encarceramento: se a tróclea está ossificada e o epicôndilo "sumiu", o
    fragmento está dentro da articulação. */
export const Ossificacao: FC<FigureProps> = ({ className, title }) => (
  <Frame title={title ?? "Sequência de ossificação do cotovelo (CRITOE)"} className={className} vb="0 0 280 240">
    <g transform="translate(-14 0)">
      <Humerus />
      <Forearm />
      {/* apófise do epicôndilo medial */}
      <ellipse cx="80" cy="142" rx="12" ry="15" transform="rotate(-20 80 142)" {...bone} />
      <path d="M70 132 q12 -10 24 -2" {...physis} />
    </g>
    {/* núcleos rotulados */}
    <circle cx="138" cy="160" r="9" {...physis} />
    <text x="134" y="164" {...labelTeal}>C</text>
    <circle cx="140" cy="180" r="7" {...physis} />
    <text x="136" y="184" {...labelTeal}>R</text>
    <text x="62" y="146" {...labelTeal}>I</text>
    <circle cx="92" cy="160" r="8" {...physis} />
    <text x="88" y="164" {...labelTeal}>T</text>
    <circle cx="104" cy="172" r="7" {...physis} />
    <text x="100" y="176" {...labelTeal}>O</text>
    <circle cx="158" cy="136" r="7" {...physis} />
    <text x="154" y="140" {...labelTeal}>E</text>
    {/* legenda */}
    <text x="190" y="98" {...label}>C — capítulo · 1 a</text>
    <text x="190" y="116" {...label}>R — rádio · 3 a</text>
    <text x="190" y="134" {...label}>I — interno · 5 a</text>
    <text x="190" y="152" {...label}>T — tróclea · 7 a</text>
    <text x="190" y="170" {...label}>O — olécrano · 9 a</text>
    <text x="190" y="188" {...label}>E — externo · 11 a</text>
    <text x="190" y="60" {...labelCortical}>tróclea visível</text>
    <text x="190" y="74" {...labelCortical}>sem o &quot;I&quot; = encarcerado</text>
  </Frame>
);

/** Mecanismo: valgo + tração da massa flexo-pronadora e do LCU arrancam a
    apófise; no arremessador, a mesma força age de forma repetitiva. */
export const Mecanismo: FC<FigureProps> = ({ className, title }) => (
  <Frame title={title ?? "Mecanismo de avulsão do epicôndilo medial"} className={className}>
    <Humerus />
    <Forearm />
    {/* apófise avulsionada, deslocada distalmente */}
    <ellipse cx="74" cy="158" rx="11" ry="13" transform="rotate(-24 74 158)" {...bone} />
    <path d="M70 132 q12 -8 22 -2" {...fx} />
    <text x="2" y="122" {...labelCortical}>avulsão</text>
    {/* tração da massa flexo-pronadora */}
    <path d="M72 172 v34" {...measure} />
    <path d="M72 206 l-4 -8 M72 206 l4 -8" {...measure} />
    <text x="2" y="220" {...labelAmber}>tração flexo-</text>
    <text x="2" y="232" {...labelAmber}>pronadora</text>
    {/* tração do LCU */}
    <path d="M84 168 q14 14 28 24" {...soft} />
    <text x="88" y="196" {...labelTeal}>LCU</text>
    {/* estresse em valgo — arco de abertura medial */}
    <path d="M150 200 q26 -34 20 -74" {...measure} />
    <path d="M170 126 l-6 8 M170 126 l6 8" {...measure} />
    <text x="176" y="168" {...labelAmber}>valgo</text>
  </Frame>
);

/** Classificação por desvio e situação do fragmento (I–IV). */
export const Classificacao: FC<FigureProps> = ({ className, title, variant }) => {
  const v = variant ?? "I";
  return (
    <Frame title={title ?? `Epicôndilo medial — tipo ${v}`} className={className}>
      <Humerus />
      {v !== "IV" && <Forearm />}
      {v === "I" && (
        <>
          <ellipse cx="80" cy="142" rx="12" ry="15" transform="rotate(-20 80 142)" {...bone} />
          <path d="M70 132 q12 -10 24 -2" {...fx} strokeDasharray="4 4" />
          <text x="2" y="120" {...label}>desvio ≤ 2 mm</text>
        </>
      )}
      {v === "II" && (
        <>
          <ellipse cx="70" cy="164" rx="11" ry="13" transform="rotate(-26 70 164)" {...bone} />
          <DonorSite />
          <path d="M80 150 v-2" {...fx} />
          {/* medida do desvio */}
          <path d="M84 142 L74 162" {...measure} />
          <path d="M78 136 h12 M64 168 h12" {...measure} strokeWidth={1.2} />
          <text x="2" y="188" {...labelAmber}>desvio &gt; 2 mm</text>
        </>
      )}
      {v === "III" && (
        <>
          <DonorSite />
          {/* fragmento dentro da articulação úmero-ulnar */}
          <ellipse cx="112" cy="176" rx="10" ry="8" transform="rotate(16 112 176)" {...bone} />
          <path d="M92 150 q10 16 14 20" {...measure} strokeDasharray="4 4" />
          <path d="M106 170 l-8 0 M106 170 l2 -8" {...measure} />
          <text x="2" y="120" {...labelCortical}>leito vazio</text>
          <text x="118" y="206" {...labelCortical}>encarcerado</text>
        </>
      )}
      {v === "IV" && (
        <>
          {/* antebraço luxado posterolateralmente (desvio lateral no AP) */}
          <g transform="translate(22 8)">
            <Forearm />
          </g>
          <ellipse cx="72" cy="166" rx="11" ry="13" transform="rotate(-26 72 166)" {...bone} />
          <DonorSite />
          <path d="M140 196 h26" {...measure} />
          <path d="M166 196 l-8 -4 M166 196 l-8 4" {...measure} />
          <text x="150" y="220" {...labelAmber}>luxação</text>
          <text x="2" y="120" {...labelCortical}>avulsão</text>
        </>
      )}
    </Frame>
  );
};

/** O desvio é subestimado na incidência AP; a oblíqua (ou a TC) mostra o
    deslocamento verdadeiro e pode mudar a conduta. */
export const Desvio: FC<FigureProps> = ({ className, title }) => (
  <Frame title={title ?? "Medida do desvio: AP subestima, oblíqua revela"} className={className} vb="0 0 260 170">
    {/* painel A — AP */}
    <text x="26" y="18" {...label}>incidência AP</text>
    <path d="M40 30 q-14 18 -18 42" {...bone} />
    <ellipse cx="46" cy="86" rx="10" ry="12" transform="rotate(-18 46 86)" {...bone} />
    <path d="M36 76 q10 -8 20 -2" {...fx} strokeDasharray="3 3" />
    <path d="M60 72 h20 M60 92 h20" {...measure} strokeWidth={1.2} />
    <path d="M72 72 v20" {...measure} />
    <text x="84" y="86" {...labelAmber}>≈ 2 mm</text>
    <text x="16" y="132" {...label}>desvio aparente</text>
    <text x="24" y="146" {...label}>— subestimado</text>
    {/* divisória */}
    <path d="M130 24 v124" {...boneGhost} />
    {/* painel B — oblíqua */}
    <text x="148" y="18" {...label}>incidência oblíqua</text>
    <path d="M162 30 q-14 18 -18 42" {...bone} />
    <ellipse cx="156" cy="106" rx="10" ry="12" transform="rotate(-24 156 106)" {...bone} />
    <ellipse cx="148" cy="80" rx="10" ry="12" transform="rotate(-18 148 80)" {...boneGhost} />
    <path d="M170 74 h22 M170 112 h22" {...measure} strokeWidth={1.2} />
    <path d="M184 74 v38" {...measure} />
    <text x="196" y="96" {...labelAmber}>≈ 8 mm</text>
    <text x="142" y="146" {...labelAmber}>desvio verdadeiro</text>
  </Frame>
);

/** Fragmento encarcerado: bloqueio da articulação e sua extração. */
export const Encarceramento: FC<FigureProps> = ({ className, title, variant }) => {
  const v = variant ?? "encarcerado";
  return (
    <Frame
      title={title ?? (v === "extracao" ? "Extração do fragmento encarcerado" : "Fragmento encarcerado na articulação")}
      className={className}
    >
      <Humerus />
      <Forearm />
      <DonorSite />
      <text x="2" y="118" {...labelCortical}>leito doador</text>
      <text x="2" y="130" {...labelCortical}>vazio</text>
      {v === "encarcerado" && (
        <>
          {/* fragmento preso entre tróclea e incisura sigmoide */}
          <ellipse cx="112" cy="176" rx="10" ry="8" transform="rotate(16 112 176)" {...bone} />
          <path d="M100 168 q12 -4 24 2" {...fx} />
          <text x="126" y="206" {...labelCortical}>fragmento na</text>
          <text x="126" y="218" {...labelCortical}>articulação</text>
          {/* bloqueio / alargamento do espaço medial */}
          <path d="M92 168 q-6 12 -2 24" {...measure} />
          <text x="2" y="204" {...labelAmber}>bloqueio</text>
        </>
      )}
      {v === "extracao" && (
        <>
          {/* fragmento saindo do espaço articular rumo ao leito */}
          <ellipse cx="88" cy="164" rx="10" ry="12" transform="rotate(-22 88 164)" {...bone} />
          <path d="M110 176 q-10 -8 -16 -14" {...measure} strokeDasharray="4 4" />
          <path d="M94 162 l1 9 M94 162 l-8 2" {...measure} />
          <text x="118" y="196" {...labelAmber}>extração</text>
          {/* manobra: valgo + supinação + extensão do punho */}
          <path d="M150 204 q24 -30 18 -66" {...measure} />
          <path d="M168 138 l-6 8 M168 138 l6 8" {...measure} />
          <text x="172" y="176" {...labelAmber}>valgo +</text>
          <text x="172" y="188" {...labelAmber}>ext. punho</text>
        </>
      )}
    </Frame>
  );
};

/** ORIF: parafuso canulado parcialmente rosqueado com arruela, trajetória
    póstero-anterior na coluna medial; nervo ulnar protegido posteriormente. */
export const Orif: FC<FigureProps> = ({ className, title }) => (
  <Frame title={title ?? "ORIF do epicôndilo medial com parafuso canulado"} className={className}>
    <Humerus />
    <Forearm />
    {/* apófise reduzida ao leito */}
    <ellipse cx="80" cy="142" rx="12" ry="15" transform="rotate(-20 80 142)" {...bone} />
    <path d="M70 132 q12 -10 24 -2" {...fx} strokeDasharray="3 3" />
    {/* arruela sobre a apófise */}
    <path d="M68 140 h24" {...metal} strokeWidth={3} />
    <text x="2" y="118" {...labelTeal}>arruela</text>
    {/* parafuso canulado: apófise → coluna medial */}
    <path d="M74 146 L108 116" {...metal} />
    <path d="M78 150 L112 120" {...metal} />
    {/* roscas distais (parcialmente rosqueado) */}
    <path d="M78 142 l6 6 M84 136 l6 6 M90 130 l6 6" {...metal} strokeWidth={1.4} />
    <text x="112" y="106" {...labelTeal}>parafuso canulado</text>
    <text x="112" y="118" {...labelTeal}>4,0 mm parcial</text>
    {/* nervo ulnar afastado posteriormente */}
    <path d="M96 74 q-20 26 -22 56 q-2 18 12 32" {...measure} />
    <text x="2" y="196" {...labelAmber}>proteger o</text>
    <text x="2" y="208" {...labelAmber}>n. ulnar</text>
  </Frame>
);

/** Instabilidade em valgo no atleta: com a apófise não consolidada, o LCU
    perde a ancoragem óssea e o compartimento medial abre sob estresse. */
export const InstabilidadeValgo: FC<FigureProps> = ({ className, title }) => (
  <Frame title={title ?? "Instabilidade em valgo por não união do epicôndilo"} className={className}>
    <Humerus />
    {/* antebraço em valgo (abertura medial) */}
    <g transform="rotate(8 130 176)">
      <Forearm />
    </g>
    {/* fragmento não consolidado, tracionado distalmente pelo LCU */}
    <ellipse cx="70" cy="162" rx="11" ry="13" transform="rotate(-26 70 162)" {...bone} />
    <DonorSite />
    {/* interposição fibrosa entre fragmento e leito */}
    <path d="M74 148 q6 -2 8 -6" {...fx} strokeDasharray="2 3" />
    <text x="2" y="118" {...labelCortical}>não união</text>
    <text x="2" y="130" {...labelCortical}>fibrosa</text>
    {/* LCU ancorado no fragmento solto */}
    <path d="M82 168 q16 14 30 24" {...soft} />
    <text x="84" y="204" {...labelTeal}>LCU</text>
    {/* abertura medial sob valgo */}
    <path d="M98 172 q-8 14 -4 28" {...measure} />
    <text x="2" y="220" {...labelAmber}>abertura medial</text>
    {/* vetor de valgo do arremesso */}
    <path d="M156 206 q26 -32 20 -72" {...measure} />
    <path d="M176 134 l-6 8 M176 134 l6 8" {...measure} />
    <text x="180" y="176" {...labelAmber}>valgo do</text>
    <text x="180" y="188" {...labelAmber}>arremesso</text>
  </Frame>
);

export const figures: Record<string, FC<FigureProps>> = {
  "fratura-epicondilo-medial:anatomia": Anatomia,
  "fratura-epicondilo-medial:ossificacao": Ossificacao,
  "fratura-epicondilo-medial:mecanismo": Mecanismo,
  "fratura-epicondilo-medial:classificacao": Classificacao,
  "fratura-epicondilo-medial:desvio": Desvio,
  "fratura-epicondilo-medial:encarceramento": Encarceramento,
  "fratura-epicondilo-medial:orif": Orif,
  "fratura-epicondilo-medial:instabilidade-valgo": InstabilidadeValgo,
};
