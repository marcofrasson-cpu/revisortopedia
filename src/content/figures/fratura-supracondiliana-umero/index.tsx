import type { FC, ReactNode } from "react";
import type { FigureProps } from "../../../types/topic";

/* Esquemas originais — fratura supracondiliana do úmero (criança). Fundamentados
   em Rockwood and Wilkins' Fractures in Children, 10ª ed. (2024). Line-art
   didático de 2 tons, cores só por CSS var. A FISE (placa de crescimento) é
   representada em teal quando relevante. */

const bone = { stroke: "var(--ink-soft)", strokeWidth: 2, fill: "var(--surface)" } as const;
const physis = { stroke: "var(--teal)", strokeWidth: 2.4, fill: "none" as const } as const;
const fx = { stroke: "var(--cortical)", strokeWidth: 2.4, fill: "none" as const } as const;
const metal = { stroke: "var(--teal)", strokeWidth: 2, fill: "none" as const } as const;
const measure = { stroke: "var(--amber)", strokeWidth: 1.8, fill: "none" as const } as const;
const nerve = { stroke: "var(--amber)", strokeWidth: 2, fill: "none" as const } as const;
const label = { fontSize: 11, fill: "var(--muted)", fontFamily: "var(--font-body, sans-serif)" } as const;
const labelTeal = { fontSize: 11, fill: "var(--teal)", fontFamily: "var(--font-body, sans-serif)" } as const;
const labelAmber = { fontSize: 11, fill: "var(--amber)", fontFamily: "var(--font-body, sans-serif)" } as const;

function Frame({ children, title, vb = "0 0 240 240", className }: { children: ReactNode; title: string; vb?: string; className?: string }) {
  return (
    <svg viewBox={vb} preserveAspectRatio="xMidYMid meet" role="img" className={className} fill="none">
      <title>{title}</title>
      {children}
    </svg>
  );
}

/** Anatomia do úmero distal da criança (AP): colunas medial/lateral, fossa do
    olécrano, capítulo, tróclea, epicôndilo medial e a FISE. */
export const Anatomia: FC<FigureProps> = ({ className, title }) => (
  <Frame title={title ?? "Anatomia do úmero distal (criança)"} className={className}>
    {/* diáfise umeral */}
    <path d="M104 20 v70 M136 20 v70" {...bone} />
    {/* colunas metafisárias alargando */}
    <path d="M104 90 q-30 24 -40 74 q22 20 44 6" {...bone} />
    <path d="M136 90 q30 24 40 74 q-22 20 -44 6" {...bone} />
    {/* fossa do olécrano (adelgaçamento central) */}
    <ellipse cx="120" cy="150" rx="16" ry="20" {...bone} />
    <text x="140" y="150" {...label}>fossa do</text>
    <text x="140" y="163" {...label}>olécrano</text>
    {/* capítulo (lateral) e tróclea (medial) — núcleos */}
    <circle cx="150" cy="182" r="12" {...bone} />
    <text x="164" y="200" {...label}>capítulo</text>
    <circle cx="96" cy="184" r="10" {...bone} />
    <text x="42" y="200" {...label}>tróclea</text>
    {/* epicôndilo medial */}
    <path d="M78 176 q-14 2 -16 16" {...bone} />
    <text x="24" y="176" {...label}>epicôndilo</text>
    <text x="30" y="188" {...label}>medial</text>
    {/* FISE (placa de crescimento) atravessando a metáfise */}
    <path d="M74 150 q46 18 92 0" {...physis} strokeDasharray="1 0" />
    <text x="150" y="132" {...labelTeal}>fise</text>
  </Frame>
);

/** Gartland (I–IV) em perfil — grau de desvio do fragmento distal. */
export const Gartland: FC<FigureProps> = ({ className, title, variant }) => {
  const v = variant ?? "I";
  return (
    <Frame title={title ?? `Gartland ${v}`} className={className}>
      {/* úmero (perfil): coluna proximal fixa */}
      <path d="M96 24 v96 M128 24 v92" {...bone} />
      {v === "I" && (
        <>
          {/* metáfise/paleta alinhadas, fina linha de fratura */}
          <path d="M96 120 q16 20 62 18 v22 q-46 4 -62 -14z" {...bone} />
          <path d="M100 124 q30 10 56 12" {...fx} strokeDasharray="4 4" />
          <text x="150" y="176" {...label}>sem desvio</text>
        </>
      )}
      {v === "II" && (
        <>
          {/* fragmento distal em extensão, córtex posterior íntegro (dobradiça) */}
          <path d="M96 120 q10 16 50 30 q14 6 22 22 l-6 6 q-40 -8 -66 -32z" {...bone} />
          <path d="M96 120 q28 6 50 20" {...fx} />
          <path d="M128 116 q4 20 22 34" {...bone} strokeWidth={2.6} />
          <text x="150" y="128" {...label}>dobradiça</text>
          <text x="146" y="180" {...label}>post. íntegra</text>
        </>
      )}
      {(v === "III" || v === "IV") && (
        <>
          {/* fragmento distal totalmente deslocado (posterior/proximal) */}
          <path d="M96 118 q22 6 40 18" {...fx} />
          <path d="M132 148 q20 8 40 4 q6 16 -6 26 q-34 6 -50 -14z" {...bone} />
          <text x="150" y="150" {...label}>{v === "III" ? "desviada" : "instável"}</text>
        </>
      )}
      {v === "IV" && (
        <>
          {/* instabilidade multidirecional */}
          <path d="M150 190 l0 22 M144 206 l6 8 l6 -8" {...measure} />
          <path d="M150 190 l0 -22 M144 -1 l6 -8 l6 8" {...measure} transform="translate(0 190)" />
          <text x="36" y="206" {...label}>flexão + extensão</text>
        </>
      )}
      <text x="30" y="34" {...label}>Gartland {v}</text>
    </Frame>
  );
};

/** Mecanismo: tipo extensão (98%) vs tipo flexão. */
export const Mecanismo: FC<FigureProps> = ({ className, title, variant }) => {
  const flex = variant === "flexao";
  return (
    <Frame title={title ?? (flex ? "Tipo flexão" : "Tipo extensão")} className={className}>
      {/* úmero proximal */}
      <path d="M100 24 v92 M132 24 v92" {...bone} />
      <path d="M100 116 q16 14 40 16" {...fx} />
      {!flex ? (
        <>
          {/* extensão: fragmento distal desloca POSTERIOR (para trás/direita) */}
          <path d="M132 132 q24 4 42 20 q4 14 -8 22 q-30 0 -44 -22z" {...bone} />
          <path d="M132 116 q10 40 -6 78" {...measure} strokeDasharray="5 4" />
          <text x="150" y="120" {...label}>posterior</text>
          <text x="30" y="196" {...label}>FOOSH — 98%</text>
        </>
      ) : (
        <>
          {/* flexão: fragmento distal desloca ANTERIOR (para frente/esquerda) */}
          <path d="M100 132 q-24 4 -42 20 q-4 14 8 22 q30 0 44 -22z" {...bone} />
          <path d="M100 116 q-10 40 6 78" {...measure} strokeDasharray="5 4" />
          <text x="26" y="120" {...label}>anterior</text>
          <text x="120" y="196" {...label}>~2%</text>
        </>
      )}
    </Frame>
  );
};

/** Radiografia lateral: linha umeral anterior e ângulo de Baumann (AP). */
export const Radiografia: FC<FigureProps> = ({ className, title }) => (
  <Frame title={title ?? "Linha umeral anterior e ângulo de Baumann"} className={className}>
    {/* úmero em perfil */}
    <path d="M104 24 v92 q0 26 30 40" {...bone} />
    <path d="M136 24 v96" {...bone} />
    {/* capítulo */}
    <circle cx="128" cy="168" r="14" {...bone} />
    {/* linha umeral anterior — deve cruzar o terço médio do capítulo */}
    <line x1="120" y1="20" x2="120" y2="196" {...measure} strokeDasharray="6 4" />
    <text x="60" y="60" {...labelAmber}>linha umeral</text>
    <text x="66" y="72" {...labelAmber}>anterior</text>
    {/* ponto no terço médio do capítulo */}
    <circle cx="120" cy="168" r="2.4" fill="var(--amber)" />
    {/* ângulo de Baumann (representação da FISE do capítulo) */}
    <path d="M132 158 l22 10" {...physis} />
    <text x="150" y="150" {...labelTeal}>Baumann</text>
  </Frame>
);

/** Pinagem percutânea: lateral (divergente) vs cruzada (pino medial). */
export const Pinagem: FC<FigureProps> = ({ className, title, variant }) => {
  const cross = variant === "cruzada";
  return (
    <Frame title={title ?? (cross ? "Pinagem cruzada" : "Pinagem lateral")} className={className}>
      {/* úmero distal AP reduzido */}
      <path d="M104 20 v70 M136 20 v70" {...bone} />
      <path d="M104 90 q-30 24 -40 74 q22 20 44 6" {...bone} />
      <path d="M136 90 q30 24 40 74 q-22 20 -44 6" {...bone} />
      <ellipse cx="120" cy="150" rx="14" ry="18" {...bone} />
      {/* traço supracondiliano reduzido */}
      <path d="M78 128 q42 14 84 0" {...fx} strokeDasharray="4 4" />
      {/* pinos laterais (sempre) — divergentes */}
      <line x1="160" y1="176" x2="112" y2="96" {...metal} />
      <line x1="168" y1="160" x2="120" y2="100" {...metal} />
      {!cross ? (
        <>
          <text x="150" y="196" {...label}>2–3 pinos laterais</text>
          <text x="150" y="209" {...label}>divergentes</text>
        </>
      ) : (
        <>
          {/* pino medial cruzando — risco ao nervo ulnar */}
          <line x1="72" y1="176" x2="128" y2="98" {...metal} />
          {/* nervo ulnar atrás do epicôndilo medial */}
          <path d="M70 168 q-8 -16 2 -34" {...nerve} strokeDasharray="3 3" />
          <text x="18" y="150" {...labelAmber}>n. ulnar</text>
          <text x="24" y="163" {...labelAmber}>em risco</text>
        </>
      )}
    </Frame>
  );
};

/** Estruturas neurovasculares em risco: NIA/mediano, radial, ulnar, art. braquial. */
export const Neurovascular: FC<FigureProps> = ({ className, title }) => (
  <Frame title={title ?? "Estruturas neurovasculares em risco"} className={className}>
    {/* úmero distal */}
    <path d="M104 20 v78 q-28 26 -36 72" {...bone} />
    <path d="M136 20 v78 q28 26 36 72" {...bone} />
    {/* traço supracondiliano em extensão */}
    <path d="M84 118 q36 12 72 -2" {...fx} />
    {/* artéria braquial + mediano/NIA (anterior) */}
    <path d="M118 20 q6 60 -6 100 q-4 20 6 40" {...nerve} strokeWidth={2.4} />
    <text x="126" y="70" {...labelAmber}>a. braquial</text>
    <text x="120" y="200" {...labelAmber}>mediano/NIA</text>
    {/* nervo radial (lateral) */}
    <path d="M150 40 q22 40 12 80" {...nerve} strokeDasharray="3 3" />
    <text x="164" y="60" {...label}>radial</text>
    {/* nervo ulnar (medial) */}
    <path d="M90 40 q-22 40 -10 84" {...nerve} strokeDasharray="3 3" />
    <text x="30" y="60" {...label}>ulnar</text>
  </Frame>
);

/** Sinal do "pucker" — botoeira do fragmento proximal no braquial/pele. */
export const Pucker: FC<FigureProps> = ({ className, title }) => (
  <Frame title={title ?? "Sinal do pucker (botoeira anterior)"} className={className}>
    {/* braço em perfil: úmero e fragmento proximal apontando anterior */}
    <path d="M150 24 v70" {...bone} />
    <path d="M118 24 v66 q0 8 8 14" {...bone} />
    {/* fragmento proximal espiculado empurrando para a frente */}
    <path d="M118 90 l-34 22" {...bone} strokeWidth={2.4} />
    <path d="M84 112 l-8 -4" {...fx} />
    {/* antebraço/fragmento distal */}
    <path d="M126 132 q18 34 6 78 M154 120 q18 40 8 84" {...bone} />
    {/* contorno da pele com retração (pucker) na fossa antecubital */}
    <path d="M70 118 q18 -2 24 -18 q-14 -2 -22 6 q-2 6 -2 12z" {...nerve} />
    <text x="16" y="112" {...label}>retração</text>
    <text x="24" y="124" {...label}>cutânea</text>
    <text x="118" y="200" {...label}>redução urgente</text>
  </Frame>
);

/** Isquemia de Volkmann — contratura isquêmica do antebraço/mão. */
export const Volkmann: FC<FigureProps> = ({ className, title }) => (
  <Frame title={title ?? "Contratura isquêmica de Volkmann"} className={className}>
    {/* antebraço tenso */}
    <path d="M60 40 q6 60 8 96 M108 40 q-6 60 -6 96" {...bone} />
    {/* pressão compartimental (setas convergindo) */}
    <path d="M40 90 l16 0 M56 90 l-6 -5 M56 90 l-6 5" {...measure} />
    <path d="M128 90 l-16 0 M112 90 l6 -5 M112 90 l6 5" {...measure} />
    <text x="30" y="70" {...label}>pressão ↑</text>
    {/* punho e dedos em garra (flexão fixa) */}
    <path d="M74 138 q-10 20 4 34 q10 -2 14 -14" {...bone} />
    <path d="M92 150 q22 6 30 26 q-6 12 -20 12 q-16 -2 -22 -18" {...bone} />
    {/* dedos em garra */}
    <path d="M118 172 q8 8 4 18 M112 178 q8 8 4 18 M104 182 q8 8 4 16" {...bone} strokeWidth={1.8} />
    <text x="60" y="212" {...label}>garra isquêmica</text>
  </Frame>
);

export const figures: Record<string, FC<FigureProps>> = {
  "fratura-supracondiliana-umero:anatomia": Anatomia,
  "fratura-supracondiliana-umero:gartland": Gartland,
  "fratura-supracondiliana-umero:mecanismo": Mecanismo,
  "fratura-supracondiliana-umero:radiografia": Radiografia,
  "fratura-supracondiliana-umero:pinagem": Pinagem,
  "fratura-supracondiliana-umero:neurovascular": Neurovascular,
  "fratura-supracondiliana-umero:pucker": Pucker,
  "fratura-supracondiliana-umero:volkmann": Volkmann,
};
