import type { FC } from "react";
import type { FigureProps } from "../../../types/topic";

/* ============================================================================
   Figuras originais (line-art, 2 tons) — Coxa vara do desenvolvimento.
   Redesenho esquemático, não reprodução. Referência editorial: Rockwood and
   Wilkins' Fractures in Children, 10a ed. (2024) / Tachdjian's Pediatric
   Orthopaedics 6a ed. (2022). Cores apenas via CSS var.
   Osso: --ink-soft / --surface · fise/cartilagem: --teal · traço/defeito de
   ossificação: --cortical · medidas/ângulos/vetores: --amber · rótulos: --muted.

   MODELO GEOMÉTRICO
   -----------------
   O fêmur proximal é desenhado em duas partes: (a) o bloco fixo diáfise +
   trocânter maior + trocânter menor e (b) o grupo colo + cabeça + fise, que
   gira em torno do ponto intertrocantérico P0 = (250, 250).

   A rotação `delta = 25 - HEA` mantém a coerência interna entre os dois
   parâmetros radiográficos do tópico:
     · ângulo cervicodiafisário (NSA) = 160 - HEA   (HEA 25 -> NSA 135 normal)
     · ângulo epifisário de Hilgenreiner (HEA) = inclinação da fise
   Como o trocânter maior é fixo e a cabeça desce ao varizar, a figura reproduz
   espontaneamente o trocânter alto (high-riding) da coxa vara.
   ========================================================================== */

type Pt = [number, number];

const RAD = Math.PI / 180;

function rot(p: Pt, deg: number, o: Pt): Pt {
  const t = deg * RAD;
  const c = Math.cos(t);
  const s = Math.sin(t);
  const dx = p[0] - o[0];
  const dy = p[1] - o[1];
  return [o[0] + c * dx - s * dy, o[1] + s * dx + c * dy];
}

function polar(o: Pt, r: number, deg: number): Pt {
  return [o[0] + r * Math.cos(deg * RAD), o[1] + r * Math.sin(deg * RAD)];
}

function f(n: number): string {
  return n.toFixed(1);
}

/** Pontos de um polígono-seta com a ponta em `tip` apontando na direção `dir`. */
function head(tip: Pt, dir: Pt, size = 7): string {
  const ax = tip[0] - dir[0] * size + dir[1] * size * 0.42;
  const ay = tip[1] - dir[1] * size - dir[0] * size * 0.42;
  const bx = tip[0] - dir[0] * size - dir[1] * size * 0.42;
  const by = tip[1] - dir[1] * size + dir[0] * size * 0.42;
  return `${f(tip[0])},${f(tip[1])} ${f(ax)},${f(ay)} ${f(bx)},${f(by)}`;
}

/* ---- Estilos (cores exclusivamente via CSS var) --------------------------- */

const bone = {
  fill: "var(--surface)",
  stroke: "var(--ink-soft)",
  strokeWidth: 1.8,
  strokeLinejoin: "round" as const,
  strokeLinecap: "round" as const,
};

const physisStyle = {
  fill: "none",
  stroke: "var(--teal)",
  strokeWidth: 4.5,
  strokeLinecap: "round" as const,
};

const cartilage = {
  fill: "none",
  stroke: "var(--teal)",
  strokeWidth: 2.4,
  strokeLinecap: "round" as const,
};

const cortical = {
  fill: "none",
  stroke: "var(--cortical)",
  strokeWidth: 2.4,
  strokeLinecap: "round" as const,
};

const corticalThin = {
  fill: "none",
  stroke: "var(--cortical)",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeDasharray: "5 3",
};

const measure = {
  fill: "none",
  stroke: "var(--amber)",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
};

const vector = {
  fill: "none",
  stroke: "var(--amber)",
  strokeWidth: 2.4,
  strokeLinecap: "round" as const,
};

const refLine = {
  fill: "none",
  stroke: "var(--muted)",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeDasharray: "6 4",
};

const leader = {
  fill: "none",
  stroke: "var(--muted)",
  strokeWidth: 1,
  strokeLinecap: "round" as const,
};

const label = {
  fill: "var(--muted)",
  fontFamily: "var(--font-body, sans-serif)",
  fontSize: 11,
};

const labelStrong = {
  fill: "var(--ink)",
  fontFamily: "var(--font-body, sans-serif)",
  fontSize: 11,
  fontWeight: 600,
};

/* ---- Geometria do fêmur proximal ----------------------------------------- */

const P0: Pt = [250, 250];
const HEAD_C: Pt = [206, 206];
const HEAD_R = 27;
const ACE_IN = 34;
const ACE_OUT = 50;
const ACE_A1 = 200;
const ACE_A2 = 340;

/* Fise: corda do círculo da cabeça, a -25° da horizontal na posição neutra. */
const PHYSIS_MID: Pt = [209, 212.3];
const PHYSIS_U: Pt = [Math.cos(-25 * RAD), Math.sin(-25 * RAD)];
const PHYSIS_HALF = 26.08;
const PL: Pt = [
  PHYSIS_MID[0] + PHYSIS_U[0] * PHYSIS_HALF,
  PHYSIS_MID[1] + PHYSIS_U[1] * PHYSIS_HALF,
];
const PM: Pt = [
  PHYSIS_MID[0] - PHYSIS_U[0] * PHYSIS_HALF,
  PHYSIS_MID[1] - PHYSIS_U[1] * PHYSIS_HALF,
];

/* Bloco fixo: diáfise + trocânter maior + trocânter menor. */
const BODY_D =
  "M 231 336 L 231 290 C 231 282, 222 279, 213 276 " +
  "C 226 268, 237 260, 244 251 C 248 240, 250 226, 253 212 " +
  "C 258 197, 270 190, 281 193 C 291 197, 293 210, 292 226 " +
  "C 291 243, 279 254, 270 264 L 269 336 Z";

/* Colo: caminho aberto (o fecho da base não é traçado, apenas preenchido). */
const NECK_D =
  "M 266 234 C 260 230, 246 214, 227.1 203.8 " +
  "L 190.9 220.8 C 200 238, 214 252, 234 266";

/* Cabeça: cúpula epifisária apoiada na fise (arco maior sobre a corda). */
const DOME_D = `M ${f(PL[0])} ${f(PL[1])} A ${HEAD_R} ${HEAD_R} 0 1 0 ${f(PM[0])} ${f(PM[1])}`;

/* Fragmento triangular ínfero-medial do colo (defeito de ossificação). */
const T2: Pt = [
  PM[0] + PHYSIS_U[0] * PHYSIS_HALF * 0.9,
  PM[1] + PHYSIS_U[1] * PHYSIS_HALF * 0.9,
];
const T3: Pt = [204, 246];
const DEFECT_D = `M ${f(PM[0])} ${f(PM[1])} L ${f(T2[0])} ${f(T2[1])} L ${f(T3[0])} ${f(T3[1])} Z`;

/** Pontos notáveis do fêmur para uma dada inclinação fisária (HEA, em graus). */
function geom(hea: number) {
  const delta = 25 - hea;
  return {
    delta,
    nsa: 160 - hea,
    c: rot(HEAD_C, delta, P0),
    pm: rot(PM, delta, P0),
    mid: rot(PHYSIS_MID, delta, P0),
    /** Direção da fise, do ponto medial para o lateral. */
    u: [Math.cos(-hea * RAD), Math.sin(-hea * RAD)] as Pt,
  };
}

/** Colo + cabeça + fise, girados em bloco em torno de P0. */
const NeckHead: FC<{ hea: number; defect?: boolean; callus?: boolean; cartilaginous?: boolean }> = ({
  hea,
  defect = false,
  callus = false,
  cartilaginous = false,
}) => {
  const { delta } = geom(hea);
  return (
    <g transform={`rotate(${f(delta)} ${P0[0]} ${P0[1]})`}>
      <path d={NECK_D} {...bone} />
      <path d={DOME_D} {...bone} />
      {cartilaginous && (
        <path d="M 199 216 C 209 233, 221 245, 235 253" {...cartilage} strokeWidth={7} opacity={0.45} />
      )}
      {callus && <path d="M 197 227 C 209 237, 219 245, 231 253" {...cortical} strokeDasharray="3 3" />}
      {defect && (
        <>
          <path d={DEFECT_D} {...corticalThin} />
          <line x1={f(T2[0])} y1={f(T2[1])} x2={f(T3[0])} y2={f(T3[1])} {...cortical} />
        </>
      )}
      <line x1={f(PM[0])} y1={f(PM[1])} x2={f(PL[0])} y2={f(PL[1])} {...physisStyle} />
    </g>
  );
};

/** Fêmur proximal completo. */
const Femur: FC<{ hea: number; defect?: boolean; callus?: boolean; cartilaginous?: boolean }> = (p) => (
  <g>
    <path d={BODY_D} {...bone} />
    <NeckHead {...p} />
  </g>
);

/** Teto acetabular + cartilagem trirradiada, posicionados sobre a cabeça. */
const Acetabulo: FC<{ c: Pt }> = ({ c }) => {
  const i1 = polar(c, ACE_IN, ACE_A1);
  const i2 = polar(c, ACE_IN, ACE_A2);
  const o1 = polar(c, ACE_OUT, ACE_A1);
  const o2 = polar(c, ACE_OUT, ACE_A2);
  return (
    <g>
      <path
        d={
          `M ${f(i1[0])} ${f(i1[1])} A ${ACE_IN} ${ACE_IN} 0 0 1 ${f(i2[0])} ${f(i2[1])} ` +
          `L ${f(o2[0])} ${f(o2[1])} A ${ACE_OUT} ${ACE_OUT} 0 0 0 ${f(o1[0])} ${f(o1[1])} Z`
        }
        {...bone}
      />
      <line x1={f(i1[0])} y1={f(i1[1])} x2={f(o1[0])} y2={f(o1[1])} {...cartilage} strokeWidth={4} />
    </g>
  );
};

/** Nível da cartilagem trirradiada = altura da linha de Hilgenreiner. */
function hilgenreinerY(c: Pt): number {
  return polar(c, ACE_IN, ACE_A1)[1];
}

/* ==========================================================================
   1. Anatomia — quadril normal vs coxa vara
   ========================================================================== */

const Anatomia: FC<FigureProps> = ({ className, title }) => {
  const n = geom(25);
  const v = geom(70);
  return (
    <svg
      viewBox="0 0 700 400"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>
        {title ??
          "Fêmur proximal normal comparado à coxa vara: colo horizontalizado, fise verticalizada, cabeça baixa e trocânter alto"}
      </title>

      {/* --- Painel normal --- */}
      <g transform="translate(-90 6)">
        <Femur hea={25} />
        <Acetabulo c={n.c} />
        <line x1="250" y1="336" x2="250" y2="250" {...refLine} />
        <line x1="250" y1="250" x2={f(n.c[0])} y2={f(n.c[1])} {...refLine} />
        <path
          d={`M ${f(polar(P0, 40, 90)[0])} ${f(polar(P0, 40, 90)[1])} A 40 40 0 0 1 ${f(
            polar(P0, 40, 225)[0],
          )} ${f(polar(P0, 40, 225)[1])}`}
          {...measure}
        />
      </g>
      <text x="66" y="40" {...labelStrong}>
        Quadril normal
      </text>
      <text x="66" y="54" {...label}>
        NSA 135° · HEA 25°
      </text>
      <text x="98" y="282" {...labelStrong} fill="var(--amber)" textAnchor="middle">
        135°
      </text>
      <line x1="72" y1="195" x2="100" y2="222" {...leader} />
      <text x="4" y="190" {...label} fill="var(--teal)">
        fise oblíqua
      </text>

      {/* --- Painel coxa vara --- */}
      <g transform="translate(240 6)">
        <Femur hea={70} defect />
        <Acetabulo c={v.c} />
        <line x1="250" y1="336" x2="250" y2="250" {...refLine} />
        <line x1="250" y1="250" x2={f(v.c[0])} y2={f(v.c[1])} {...refLine} />
        <path
          d={`M ${f(polar(P0, 40, 90)[0])} ${f(polar(P0, 40, 90)[1])} A 40 40 0 0 1 ${f(
            polar(P0, 40, 180)[0],
          )} ${f(polar(P0, 40, 180)[1])}`}
          {...measure}
        />
      </g>
      <text x="400" y="40" {...labelStrong}>
        Coxa vara
      </text>
      <text x="400" y="54" {...label}>
        NSA 90° · HEA 70°
      </text>
      <text x="440" y="302" {...labelStrong} fill="var(--amber)" textAnchor="middle">
        90°
      </text>

      {/* Trocânter alto: a cabeça desceu, o trocânter não */}
      <line x1="542" y1="202" x2="524" y2="207" {...leader} />
      <text x="548" y="200" {...labelStrong} fill="var(--amber)">
        trocânter alto
      </text>
      <text x="548" y="214" {...label}>
        abdutores encurtados
      </text>
      <line x1="466" y1="256" x2="500" y2="256" {...refLine} />
      <line x1="500" y1="207" x2="500" y2="256" {...measure} />
      <polygon points={head([500, 207], [0, -1])} fill="var(--amber)" stroke="none" />
      <polygon points={head([500, 256], [0, 1])} fill="var(--amber)" stroke="none" />

      {/* Fragmento triangular */}
      <line x1="376" y1="296" x2="428" y2="280" {...leader} />
      <text x="370" y="300" {...label} fill="var(--cortical)" textAnchor="end">
        fragmento triangular
      </text>
      <text x="370" y="314" {...label} textAnchor="end">
        do colo medial
      </text>

      <text x="24" y="372" {...label}>
        O colo horizontaliza, a fise verticaliza e a cabeça desce — o trocânter, fixo, passa a dominar.
      </text>
    </svg>
  );
};

/* ==========================================================================
   2. Ângulo epifisário de Hilgenreiner (HEA) — o parâmetro que decide
   ========================================================================== */

interface HeaVariant {
  hea: number;
  zona: string;
  conduta: string;
  cor: string;
}

const HEA_VARIANTS: Record<string, HeaVariant> = {
  leve: {
    hea: 40,
    zona: "HEA < 45°",
    conduta: "Correção espontânea esperada — observar",
    cor: "var(--teal)",
  },
  limitrofe: {
    hea: 52,
    zona: "HEA 45-60°",
    conduta: "Zona cinzenta — radiografias seriadas",
    cor: "var(--amber)",
  },
  grave: {
    hea: 72,
    zona: "HEA > 60°",
    conduta: "Progressão provável — osteotomia valgizante",
    cor: "var(--cortical)",
  },
};

const TX = -30;
const TY = 6;

const Hea: FC<FigureProps> = ({ className, title, variant }) => {
  const v = HEA_VARIANTS[variant ?? "grave"] ?? HEA_VARIANTS.grave;
  const g = geom(v.hea);
  const hy = hilgenreinerY(g.c);

  /* Intersecção da fise prolongada com a linha de Hilgenreiner. */
  const t = (hy - g.pm[1]) / g.u[1];
  const x: Pt = [g.pm[0] + g.u[0] * t, hy];

  const arcR = 46;
  const p1 = polar(x, arcR, 180 - v.hea);
  const p2 = polar(x, arcR, 180);
  const lab = polar(x, arcR + 16, 180 - v.hea / 2);

  return (
    <svg
      viewBox="0 0 470 400"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>
        {title ??
          `Ângulo epifisário de Hilgenreiner de ${v.hea} graus entre a linha de Hilgenreiner e a fise femoral proximal`}
      </title>

      <text x="24" y="30" {...labelStrong} fill={v.cor}>
        {v.zona}
      </text>
      <text x="24" y="44" {...label}>
        {v.conduta}
      </text>
      <text x="24" y="58" {...label}>
        NSA correspondente ≈ {g.nsa}°
      </text>

      <g transform={`translate(${TX} ${TY})`}>
        <Femur hea={v.hea} defect={v.hea > 45} />
        <Acetabulo c={g.c} />
      </g>

      {/* Linha de Hilgenreiner (horizontal pela cartilagem trirradiada) */}
      <line x1="30" y1={f(hy + TY)} x2="446" y2={f(hy + TY)} stroke="var(--amber)" strokeWidth={1.6} />
      <text x="298" y={f(hy + TY - 6)} {...label} fill="var(--amber)">
        linha de Hilgenreiner
      </text>

      {/* Fise prolongada até a intersecção */}
      <line
        x1={f(g.pm[0] + TX)}
        y1={f(g.pm[1] + TY)}
        x2={f(x[0] + TX)}
        y2={f(x[1] + TY)}
        {...refLine}
        stroke="var(--teal)"
      />

      {/* Arco do HEA */}
      <path
        d={`M ${f(p1[0] + TX)} ${f(p1[1] + TY)} A ${arcR} ${arcR} 0 0 1 ${f(p2[0] + TX)} ${f(p2[1] + TY)}`}
        {...measure}
        strokeWidth={2}
      />
      <text x={f(lab[0] + TX)} y={f(lab[1] + TY)} {...labelStrong} fill="var(--amber)" textAnchor="middle">
        {v.hea}°
      </text>

      <text x="24" y="366" {...label}>
        O HEA mede a fise contra a horizontal pélvica e não sofre com a rotação do
      </text>
      <text x="24" y="380" {...label}>
        membro — ao contrário do NSA. É o que separa observar de operar.
      </text>
    </svg>
  );
};

/* ==========================================================================
   3. Defeito de ossificação do colo medial (detalhe)
   ========================================================================== */

const DefeitoColo: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 470 350"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>
      {title ??
        "Detalhe do colo femoral medial na coxa vara do desenvolvimento: fragmento triangular delimitado pela imagem em Y invertido"}
    </title>

    <g transform="translate(-150 -140) scale(1.55)">
      <Femur hea={70} defect />
    </g>

    <text x="24" y="34" {...labelStrong}>
      Imagem em &quot;Y invertido&quot; do colo femoral
    </text>
    <text x="24" y="48" {...label}>
      Osso endocondral defeituoso no colo ínfero-medial: o segmento não
    </text>
    <text x="24" y="62" {...label}>
      ossifica, não resiste à carga e deixa o cisalhamento progredir.
    </text>

    <line x1="172" y1="208" x2="120" y2="152" {...leader} />
    <text x="24" y="128" {...labelStrong} fill="var(--teal)">
      Ramo superior = fise
    </text>
    <text x="24" y="142" {...label}>
      verticalizada e irregular
    </text>

    <line x1="162" y1="280" x2="110" y2="306" {...leader} />
    <text x="24" y="322" {...labelStrong} fill="var(--cortical)">
      Ramo inferior = defeito
    </text>
    <text x="24" y="336" {...label}>
      de ossificação do colo medial
    </text>

    <line x1="168" y1="272" x2="300" y2="224" {...leader} />
    <text x="308" y="220" {...labelStrong} fill="var(--cortical)">
      Fragmento triangular
    </text>
    <text x="308" y="234" {...label}>
      metafisário ínfero-medial:
    </text>
    <text x="308" y="248" {...label}>
      achado patognomônico da
    </text>
    <text x="308" y="262" {...label}>
      forma do desenvolvimento.
    </text>
  </svg>
);

/* ==========================================================================
   4. Etiologia — congênita vs do desenvolvimento vs adquirida
   ========================================================================== */

interface EtioVariant {
  hea: number;
  nome: string;
  quando: string;
  marca: string;
  linhas: string[];
  defect: boolean;
  callus: boolean;
  cartilaginous: boolean;
}

const ETIO_VARIANTS: Record<string, EtioVariant> = {
  congenita: {
    hea: 70,
    nome: "Coxa vara congênita",
    quando: "Presente ao nascimento",
    marca: "var(--teal)",
    linhas: [
      "Colo curto e amplamente cartilaginoso, com encurtamento femoral associado.",
      "Faz parte do espectro da deficiência femoral focal proximal (PFFD) e da",
      "hemimelia fibular — nunca é achado isolado. Radiografe o membro inteiro.",
    ],
    defect: false,
    callus: false,
    cartilaginous: true,
  },
  desenvolvimento: {
    hea: 70,
    nome: "Coxa vara do desenvolvimento (infantil)",
    quando: "Surge entre a marcha independente e os 6 anos",
    marca: "var(--cortical)",
    linhas: [
      "Quadril normal ao nascimento. O defeito de ossificação endocondral do colo",
      "medial cria o fragmento triangular e a imagem em \"Y invertido\". Incidência",
      "~1:25.000, bilateral em ~30-50% dos casos. É a forma que o HEA de Weinstein",
      "foi criado para estratificar.",
    ],
    defect: true,
    callus: false,
    cartilaginous: false,
  },
  adquirida: {
    hea: 66,
    nome: "Coxa vara adquirida",
    quando: "Após um insulto identificável",
    marca: "var(--amber)",
    linhas: [
      "Sequela de fratura do colo, epifisiólise, necrose avascular, doença de Perthes,",
      "osteogênese imperfeita, raquitismo ou displasias ósseas. Corrigir o ângulo sem",
      "tratar a causa metabólica ou displásica de base é receita para recidiva.",
    ],
    defect: false,
    callus: true,
    cartilaginous: false,
  },
};

const Etiologia: FC<FigureProps> = ({ className, title, variant }) => {
  const v = ETIO_VARIANTS[variant ?? "desenvolvimento"] ?? ETIO_VARIANTS.desenvolvimento;
  const g = geom(v.hea);
  return (
    <svg
      viewBox="0 0 470 390"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `${v.nome}: aspecto esquemático do fêmur proximal`}</title>

      <text x="24" y="32" {...labelStrong} fill={v.marca}>
        {v.nome}
      </text>
      <text x="24" y="46" {...label}>
        {v.quando}
      </text>

      <g transform="translate(-40 -110)">
        <Femur hea={v.hea} defect={v.defect} callus={v.callus} cartilaginous={v.cartilaginous} />
        <Acetabulo c={g.c} />
      </g>

      <text x="280" y="120" {...labelStrong} fill="var(--amber)">
        HEA {v.hea}°
      </text>
      <text x="280" y="134" {...labelStrong} fill="var(--amber)">
        NSA {g.nsa}°
      </text>

      {v.linhas.map((linha, i) => (
        <text key={linha} x="24" y={286 + i * 16} {...label}>
          {linha}
        </text>
      ))}

      <text x="24" y="366" {...label}>
        Toda coxa vara reduz o NSA; a etiologia decide o que mais precisa ser tratado.
      </text>
    </svg>
  );
};

/* ==========================================================================
   5. Biomecânica — decomposição da carga sobre a fise (círculo vicioso)
   ========================================================================== */

interface BioVariant {
  hea: number;
  nome: string;
  desfecho: string;
  cor: string;
}

const BIO_VARIANTS: Record<string, BioVariant> = {
  normal: {
    hea: 25,
    nome: "Fise oblíqua (HEA 25°)",
    desfecho: "Compressão domina — a fise é estável e o varo não progride.",
    cor: "var(--teal)",
  },
  vara: {
    hea: 72,
    nome: "Fise verticalizada (HEA 72°)",
    desfecho: "Cisalhamento domina — o varo se autoalimenta (círculo de Pauwels).",
    cor: "var(--cortical)",
  },
};

const Biomecanica: FC<FigureProps> = ({ className, title, variant }) => {
  const v = BIO_VARIANTS[variant ?? "vara"] ?? BIO_VARIANTS.vara;
  const g = geom(v.hea);
  const S = 74;

  const origin = g.mid;
  const w: Pt = [origin[0], origin[1] + S];

  const shearMag = S * Math.sin(v.hea * RAD);
  const compMag = S * Math.cos(v.hea * RAD);

  /* -u = direção do escorregamento (ínfero-medial ao longo da fise) */
  const su: Pt = [-Math.cos(v.hea * RAD), Math.sin(v.hea * RAD)];
  /* n = normal à fise, para dentro do colo */
  const nu: Pt = [Math.sin(v.hea * RAD), Math.cos(v.hea * RAD)];

  const shearEnd: Pt = [origin[0] + su[0] * shearMag, origin[1] + su[1] * shearMag];
  const compEnd: Pt = [origin[0] + nu[0] * compMag, origin[1] + nu[1] * compMag];

  return (
    <svg
      viewBox="0 0 470 400"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>
        {title ??
          `Decomposição da carga corporal na fise femoral proximal com HEA de ${v.hea} graus em componentes de compressão e cisalhamento`}
      </title>

      <text x="24" y="30" {...labelStrong} fill={v.cor}>
        {v.nome}
      </text>
      <text x="24" y="44" {...label}>
        {v.desfecho}
      </text>

      <g transform="translate(-20 14)">
        <Femur hea={v.hea} />
        <Acetabulo c={g.c} />

        {/* Paralelogramo de decomposição */}
        <line x1={f(shearEnd[0])} y1={f(shearEnd[1])} x2={f(w[0])} y2={f(w[1])} {...refLine} />
        <line x1={f(compEnd[0])} y1={f(compEnd[1])} x2={f(w[0])} y2={f(w[1])} {...refLine} />

        {/* Carga corporal (resultante) */}
        <line x1={f(origin[0])} y1={f(origin[1])} x2={f(w[0])} y2={f(w[1] - 8)} {...vector} />
        <polygon points={head(w, [0, 1])} fill="var(--amber)" stroke="none" />
        <text x={f(w[0] + 9)} y={f(w[1] + 4)} {...labelStrong} fill="var(--amber)">
          carga
        </text>

        {/* Componente de compressão (perpendicular à fise) */}
        <line
          x1={f(origin[0])}
          y1={f(origin[1])}
          x2={f(compEnd[0] - nu[0] * 8)}
          y2={f(compEnd[1] - nu[1] * 8)}
          {...vector}
          stroke="var(--teal)"
        />
        <polygon points={head(compEnd, nu)} fill="var(--teal)" stroke="none" />

        {/* Componente de cisalhamento (paralelo à fise) */}
        <line
          x1={f(origin[0])}
          y1={f(origin[1])}
          x2={f(shearEnd[0] - su[0] * 8)}
          y2={f(shearEnd[1] - su[1] * 8)}
          {...vector}
          stroke="var(--cortical)"
        />
        <polygon points={head(shearEnd, su)} fill="var(--cortical)" stroke="none" />
      </g>

      <text x="286" y="150" {...labelStrong} fill="var(--teal)">
        compressão
      </text>
      <text x="286" y="164" {...label}>
        estabiliza a fise
      </text>
      <text x="286" y="192" {...labelStrong} fill="var(--cortical)">
        cisalhamento
      </text>
      <text x="286" y="206" {...label}>
        desloca a epífise
      </text>

      <text x="24" y="360" {...label}>
        Quanto maior o HEA, mais vertical a fise e maior a fração cisalhante da carga.
      </text>
      <text x="24" y="374" {...label}>
        O varo aumenta o HEA, que aumenta o cisalhamento, que agrava o varo: por isso
      </text>
      <text x="24" y="388" {...label}>
        HEA &gt; 60° não regride sozinho, e a valgização quebra o círculo.
      </text>
    </svg>
  );
};

/* ==========================================================================
   6. Osteotomia valgizante — planejamento e correção
   ========================================================================== */

const Osteotomia: FC<FigureProps> = ({ className, title, variant, activeStep }) => {
  const mode = variant ?? (activeStep !== undefined && activeStep >= 5 ? "correcao" : "planejamento");
  const corrected = mode === "correcao";
  const hea = corrected ? 28 : 72;
  const g = geom(hea);
  const bladeTip = rot([222, 222], g.delta, P0);

  return (
    <svg
      viewBox="0 0 470 380"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>
        {title ??
          (corrected
            ? "Osteotomia valgizante consolidada e fixada, com o ângulo epifisário de Hilgenreiner corrigido"
            : "Planejamento da osteotomia valgizante: cunha de subtração lateral no nível subtrocantérico")}
      </title>

      <g transform="translate(-30 14)">
        <Femur hea={hea} defect={!corrected} />
        <Acetabulo c={g.c} />

        {!corrected && (
          <>
            {/* Cunha de subtração de base lateral */}
            <path d="M 231 288 L 269 276 L 269 300 Z" fill="var(--cortical)" opacity={0.16} stroke="none" />
            <line x1="231" y1="288" x2="269" y2="276" {...cortical} />
            <line x1="231" y1="288" x2="269" y2="300" {...cortical} />
            <path
              d={`M ${f(polar([231, 288], 30, -17.5)[0])} ${f(polar([231, 288], 30, -17.5)[1])} A 30 30 0 0 1 ${f(
                polar([231, 288], 30, 17.5)[0],
              )} ${f(polar([231, 288], 30, 17.5)[1])}`}
              {...measure}
            />
          </>
        )}

        {corrected && (
          <>
            {/* Traço da osteotomia consolidada */}
            <line x1="231" y1="288" x2="269" y2="288" stroke="var(--ink-soft)" strokeWidth={1.4} strokeDasharray="5 3" />
            {/* Placa-lâmina lateral */}
            <path d="M 272 318 L 284 318 L 284 236 L 272 240 Z" {...bone} strokeWidth={1.4} />
            <line
              x1="278"
              y1="262"
              x2={f(bladeTip[0])}
              y2={f(bladeTip[1])}
              stroke="var(--ink-soft)"
              strokeWidth={5}
              strokeLinecap="round"
              fill="none"
            />
            <circle cx="278" cy="300" r="3.2" fill="var(--surface)" stroke="var(--ink-soft)" strokeWidth={1.4} />
            <circle cx="278" cy="312" r="3.2" fill="var(--surface)" stroke="var(--ink-soft)" strokeWidth={1.4} />
          </>
        )}
      </g>

      {!corrected ? (
        <>
          <text x="24" y="30" {...labelStrong} fill="var(--cortical)">
            Planejamento
          </text>
          <text x="24" y="44" {...label}>
            Cunha de subtração de base lateral, subtrocantérica — longe da fise e do colo.
          </text>
          <text x="308" y="150" {...label}>
            Planejar na radiografia:
          </text>
          <text x="308" y="164" {...label}>
            a correção é lida no HEA,
          </text>
          <text x="308" y="178" {...label}>
            nunca no NSA.
          </text>
          <line x1="206" y1="300" x2="300" y2="334" {...leader} />
          <text x="308" y="330" {...labelStrong} fill="var(--amber)">
            ângulo da cunha
          </text>
          <text x="308" y="344" {...label}>
            = HEA atual − HEA alvo
          </text>
          <text x="308" y="358" {...label}>
            (72° − 30° ≈ 40°)
          </text>
        </>
      ) : (
        <>
          <text x="24" y="30" {...labelStrong} fill="var(--teal)">
            Correção obtida
          </text>
          <text x="24" y="44" {...label}>
            HEA 28° · NSA 132° — a fise volta à obliquidade e a carga volta a comprimir.
          </text>
          <line x1="256" y1="268" x2="294" y2="224" {...leader} />
          <text x="300" y="220" {...labelStrong}>
            Fixação estável
          </text>
          <text x="300" y="234" {...label}>
            placa-lâmina, placa em T,
          </text>
          <text x="300" y="248" {...label}>
            DCP ou fios + gesso.
          </text>
          <text x="300" y="300" {...labelStrong} fill="var(--amber)">
            Lateralizar o distal
          </text>
          <text x="300" y="314" {...label}>
            preserva o eixo mecânico
          </text>
          <text x="300" y="328" {...label}>
            e evita offset negativo.
          </text>
        </>
      )}
    </svg>
  );
};

/* ==========================================================================
   7. Alvo da correção e risco de recidiva
   ========================================================================== */

const AlvoCorrecao: FC<FigureProps> = ({ className, title }) => {
  const g = geom(30);
  const gx = (hea: number): number => 60 + (hea - 20) * 10;
  const gy = 344;
  const ticks = [20, 30, 38, 41, 50, 60];

  return (
    <svg
      viewBox="0 0 520 460"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>
        {title ??
          "Alvo do ângulo epifisário de Hilgenreiner após osteotomia valgizante e sua relação com o risco de recidiva"}
      </title>

      <text x="24" y="30" {...labelStrong}>
        Corrigir o suficiente é o que evita reoperar
      </text>
      <text x="24" y="44" {...label}>
        A recidiva não é aleatória: ela é lida no HEA obtido na mesa cirúrgica.
      </text>

      <g transform="translate(-55 8) scale(0.8)">
        <Femur hea={30} />
        <Acetabulo c={g.c} />
      </g>

      <line x1="150" y1="200" x2="206" y2="180" {...leader} />
      <text x="212" y="150" {...labelStrong} fill="var(--teal)">
        Hipercorrigir é seguro
      </text>
      <text x="212" y="164" {...label}>
        Levar o HEA a ~25-30° custa pouco
      </text>
      <text x="212" y="178" {...label}>
        e compra margem contra a recidiva;
      </text>
      <text x="212" y="192" {...label}>
        parar em 45° é aceitar reoperação.
      </text>

      <text x="212" y="228" {...labelStrong} fill="var(--cortical)">
        O NSA engana
      </text>
      <text x="212" y="242" {...label}>
        Varia com a rotação do membro na
      </text>
      <text x="212" y="256" {...label}>
        radiografia e não prediz recidiva.
      </text>
      <text x="212" y="270" {...label}>
        Confie no HEA.
      </text>

      {/* Régua de risco */}
      <text x="60" y="320" {...labelStrong}>
        HEA no pós-operatório imediato
      </text>
      <rect x={f(gx(20))} y={gy - 11} width={f(gx(38) - gx(20))} height="22" fill="var(--teal)" opacity={0.2} />
      <rect x={f(gx(38))} y={gy - 11} width={f(gx(41) - gx(38))} height="22" fill="var(--amber)" opacity={0.3} />
      <rect x={f(gx(41))} y={gy - 11} width={f(gx(60) - gx(41))} height="22" fill="var(--cortical)" opacity={0.2} />
      <rect
        x={f(gx(20))}
        y={gy - 11}
        width={f(gx(60) - gx(20))}
        height="22"
        fill="none"
        stroke="var(--ink-soft)"
        strokeWidth={1.4}
      />
      <text x={f(gx(29))} y={gy + 4} {...labelStrong} fill="var(--teal)" textAnchor="middle">
        alvo 25-30°
      </text>
      {ticks.map((tk) => (
        <g key={tk}>
          <line x1={f(gx(tk))} y1={gy + 11} x2={f(gx(tk))} y2={gy + 17} {...leader} />
          <text x={f(gx(tk))} y={gy + 30} {...label} textAnchor="middle">
            {tk}°
          </text>
        </g>
      ))}

      <text x={f(gx(20) + 4)} y={gy + 52} {...label} fill="var(--teal)">
        &lt; 38°: 95% sem recidiva (Carroll 1997)
      </text>
      <text x={f(gx(60))} y={gy + 68} {...label} fill="var(--cortical)" textAnchor="end">
        &gt; 41°: fator de risco independente de recidiva (Bian 2019)
      </text>

      <text x="24" y={gy + 92} {...label}>
        Coxa vara é tridimensional: corrija também a retroversão e o slope posterior, e
      </text>
      <text x="24" y={gy + 106} {...label}>
        lateralize o fragmento distal — offset negativo é o segundo preditor de recidiva.
      </text>
    </svg>
  );
};

export const figures: Record<string, FC<FigureProps>> = {
  "coxa-vara:anatomia": Anatomia,
  "coxa-vara:hea": Hea,
  "coxa-vara:defeito-colo": DefeitoColo,
  "coxa-vara:etiologia": Etiologia,
  "coxa-vara:biomecanica": Biomecanica,
  "coxa-vara:osteotomia": Osteotomia,
  "coxa-vara:alvo-correcao": AlvoCorrecao,
};
