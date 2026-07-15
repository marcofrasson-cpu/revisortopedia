import type { FC } from "react";
import type { FigureProps } from "../../../types/topic";

/* ============================================================================
   Figuras esquemáticas originais — Paralisia braquial obstétrica.
   Line-art de dois tons, desenho original, sem reprodução de material protegido.
   Cores exclusivamente por CSS var: ossos (--ink-soft / --surface), estruturas
   neurais, cartilagem e fise (--teal / --teal-tint), lesão e traço patológico
   (--cortical), medidas e ângulos (--amber), rótulos (--muted).
   Referência editorial: Rockwood and Wilkins' Fractures in Children, 10ª ed.
   (2024) / Tachdjian's Pediatric Orthopaedics, 6ª ed.
   ========================================================================== */

const bone = {
  fill: "var(--surface)",
  stroke: "var(--ink-soft)",
  strokeWidth: 1.8,
  strokeLinejoin: "round" as const,
};

const boneBack = {
  fill: "var(--surface-2, var(--surface))",
  stroke: "var(--ink-soft)",
  strokeWidth: 1.4,
  strokeLinejoin: "round" as const,
};

/** Tronco nervoso / raiz / fascículo — traço cheio. */
const nerve = {
  fill: "none",
  stroke: "var(--teal)",
  strokeWidth: 2.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Corpo neural preenchido (gânglio, medula, músculo). */
const neuralBody = {
  fill: "var(--teal-tint)",
  stroke: "var(--teal)",
  strokeWidth: 1.8,
  strokeLinejoin: "round" as const,
};

/** Lesão, traço patológico, deformidade. */
const lesion = {
  fill: "none",
  stroke: "var(--cortical)",
  strokeWidth: 2.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Medidas, ângulos, eixos e vetores. */
const measure = {
  fill: "none",
  stroke: "var(--amber)",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
};

const label = {
  fill: "var(--muted)",
  fontFamily: "var(--font-body, sans-serif)",
  fontSize: 11,
};

const mono = {
  fill: "var(--ink)",
  fontFamily: "var(--font-mono, monospace)",
  fontSize: 11,
};

/* --------------------------------------------------------------------------
   1. Anatomia do plexo braquial (C5-T1): raízes, troncos, divisões,
      fascículos e ramos terminais; ponto de Erb e cadeia simpática.
   -------------------------------------------------------------------------- */

const ROOTS: { name: string; y: number }[] = [
  { name: "C5", y: 58 },
  { name: "C6", y: 90 },
  { name: "C7", y: 122 },
  { name: "C8", y: 154 },
  { name: "T1", y: 186 },
];

const Anatomy: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 500 348"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
  >
    <title>
      {title ??
        "Plexo braquial: raízes C5-T1, troncos, divisões, fascículos e ramos terminais, com o ponto de Erb"}
    </title>

    {/* corpos vertebrais e canal medular */}
    {ROOTS.map((r) => (
      <rect key={r.name} {...boneBack} x={36} y={r.y - 12} width={40} height={24} rx={5} />
    ))}
    <rect {...boneBack} x={76} y={40} width={12} height={172} rx={4} />
    {ROOTS.map((r) => (
      <text key={r.name} x={30} y={r.y + 4} {...label} textAnchor="end">
        {r.name}
      </text>
    ))}

    {/* raízes → troncos */}
    <path {...nerve} d="M 88 58 C 120 58, 142 68, 166 84" />
    <path {...nerve} d="M 88 90 C 120 90, 145 88, 166 84" />
    <path {...nerve} d="M 88 122 C 120 122, 142 120, 166 120" />
    <path {...nerve} d="M 88 154 C 120 154, 145 156, 166 158" />
    <path {...nerve} d="M 88 186 C 120 186, 145 168, 166 158" />

    {/* gânglios da raiz dorsal */}
    {ROOTS.map((r) => (
      <ellipse key={r.name} {...neuralBody} cx={106} cy={r.y} rx={8} ry={5.5} />
    ))}
    <text x={106} y={30} {...label} textAnchor="middle">
      gânglios da raiz dorsal
    </text>
    <path {...measure} d="M 106 34 L 106 48" strokeWidth={1.2} strokeDasharray="3 3" />

    {/* cadeia simpática → Horner */}
    <path {...nerve} d="M 100 190 C 100 202, 100 208, 102 214" strokeWidth={1.8} />
    <ellipse {...neuralBody} cx={102} cy={220} rx={9} ry={6} />
    <text x={118} y={224} {...label}>
      gânglio estrelado (T1) → Horner
    </text>

    {/* troncos */}
    <path {...nerve} d="M 166 84 L 212 84" />
    <path {...nerve} d="M 166 120 L 212 120" />
    <path {...nerve} d="M 166 158 L 212 158" />
    <text x={189} y={74} {...label} textAnchor="middle">
      tronco superior
    </text>
    <text x={189} y={112} {...label} textAnchor="middle">
      tronco médio
    </text>
    <text x={189} y={150} {...label} textAnchor="middle">
      tronco inferior
    </text>

    {/* divisões */}
    <path {...nerve} d="M 212 84 C 232 84, 242 90, 256 98" strokeWidth={2} />
    <path {...nerve} d="M 212 84 C 232 84, 242 110, 256 128" strokeWidth={2} />
    <path {...nerve} d="M 212 120 C 234 120, 242 106, 256 98" strokeWidth={2} />
    <path {...nerve} d="M 212 120 C 234 120, 246 124, 256 128" strokeWidth={2} />
    <path {...nerve} d="M 212 158 C 234 158, 242 160, 256 164" strokeWidth={2} />
    <path {...nerve} d="M 212 158 C 234 158, 246 146, 256 128" strokeWidth={2} />

    {/* nível retroclavicular */}
    <path {...measure} d="M 234 62 L 234 180" strokeWidth={1.2} strokeDasharray="4 4" />
    <text x={234} y={54} {...label} textAnchor="middle">
      nível retroclavicular (divisões)
    </text>

    {/* fascículos */}
    <path {...nerve} d="M 256 98 L 300 98" />
    <path {...nerve} d="M 256 128 L 300 128" />
    <path {...nerve} d="M 256 164 L 300 164" />
    <text x={278} y={90} {...label} textAnchor="middle">
      fasc. lateral
    </text>
    <text x={278} y={120} {...label} textAnchor="middle">
      fasc. posterior
    </text>
    <text x={278} y={180} {...label} textAnchor="middle">
      fasc. medial
    </text>

    {/* ramos terminais */}
    <path {...nerve} d="M 300 128 C 320 128, 330 100, 346 70" strokeWidth={2} />
    <path {...nerve} d="M 300 98 C 320 98, 332 96, 346 96" strokeWidth={2} />
    <path {...nerve} d="M 300 128 C 322 128, 334 128, 346 128" strokeWidth={2} />
    <path {...nerve} d="M 300 98 C 322 106, 330 140, 346 154" strokeWidth={2} />
    <path {...nerve} d="M 300 164 C 322 160, 334 156, 346 154" strokeWidth={2} />
    <path {...nerve} d="M 300 164 C 322 168, 334 178, 346 192" strokeWidth={2} />

    <text x={352} y={74} {...label}>
      axilar (deltoide)
    </text>
    <text x={352} y={100} {...label} fill="var(--teal)">
      musculocutâneo (bíceps)
    </text>
    <text x={352} y={132} {...label}>
      radial
    </text>
    <text x={352} y={158} {...label}>
      mediano
    </text>
    <text x={352} y={196} {...label}>
      ulnar
    </text>

    {/* zona de tração no parto — ponto de Erb */}
    <ellipse {...lesion} cx={158} cy={84} rx={32} ry={24} strokeDasharray="5 4" />
    <circle {...measure} cx={166} cy={84} r={6} strokeWidth={2.2} />
    <text x={150} y={44} {...label} fill="var(--cortical)" textAnchor="middle">
      ponto de Erb (C5-C6)
    </text>
    <path {...lesion} d="M 150 48 L 156 60" strokeWidth={1.4} strokeDasharray="3 3" />

    {/* faixa de regiões */}
    <path {...measure} d="M 88 250 L 470 250" strokeWidth={1.2} strokeDasharray="3 4" />
    <text x={120} y={266} {...mono} textAnchor="middle" fill="var(--muted)">
      raízes
    </text>
    <text x={189} y={266} {...mono} textAnchor="middle" fill="var(--muted)">
      troncos
    </text>
    <text x={222} y={266} {...mono} textAnchor="middle" fill="var(--muted)">
      divisões
    </text>
    <text x={300} y={266} {...mono} textAnchor="middle" fill="var(--muted)">
      fascículos
    </text>
    <text x={400} y={266} {...mono} textAnchor="middle" fill="var(--muted)">
      ramos terminais
    </text>

    <text x={250} y={288} {...label} textAnchor="middle">
      <tspan x={250} dy="0">
        A tração cérvico-escapular no parto concentra-se nas raízes superiores (C5-C6):
      </tspan>
      <tspan x={250} dy="1.15em">
        daí o predomínio do padrão de Erb.
      </tspan>
    </text>
    <text x={250} y={320} {...label} textAnchor="middle">
      <tspan x={250} dy="0">
        O gânglio da raiz dorsal separa a lesão pré-ganglionar (avulsão)
      </tspan>
      <tspan x={250} dy="1.15em">
        da pós-ganglionar (ruptura, enxertável).
      </tspan>
    </text>
  </svg>
);

/* --------------------------------------------------------------------------
   2. Padrões clínicos: Erb (C5-C6), Erb estendido (C5-C7), Klumpke (C8-T1)
      e paralisia total (C5-T1).
   -------------------------------------------------------------------------- */

/** Membro traçado em dois tons: contorno --ink-soft sobre miolo --surface. */
const Limb: FC<{ d: string }> = ({ d }) => (
  <g>
    <path
      d={d}
      fill="none"
      stroke="var(--ink-soft)"
      strokeWidth={14}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d={d}
      fill="none"
      stroke="var(--surface)"
      strokeWidth={10.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </g>
);

/** Mão em "gorjeta de garçom": punho fletido, dedos fletidos, palma para trás. */
const HandTip: FC<{ x: number; y: number; rot: number }> = ({ x, y, rot }) => (
  <g transform={`translate(${x} ${y}) rotate(${rot})`}>
    <path {...bone} d="M -9 0 C -11 12, -6 22, 2 24 C 10 26, 15 18, 14 8 C 13 2, 10 -2, 4 -3 Z" />
    <path {...lesion} d="M -5 8 C 0 14, 6 15, 11 11" strokeWidth={1.6} />
    <path {...lesion} d="M -4 14 C 1 19, 6 20, 11 17" strokeWidth={1.6} />
  </g>
);

/** Mão em garra: MF estendidas, IF fletidas (lesão C8-T1, intrínsecos). */
const HandClaw: FC<{ x: number; y: number; rot: number }> = ({ x, y, rot }) => (
  <g transform={`translate(${x} ${y}) rotate(${rot})`}>
    <path {...bone} d="M -8 -2 L 8 -3 C 12 -3, 14 2, 13 8 C 12 16, 6 20, -2 19 C -8 18, -10 12, -9 4 Z" />
    {[0, 1, 2].map((i) => (
      <path
        key={i}
        {...lesion}
        strokeWidth={1.8}
        d={`M ${-4 + i * 6} -3 L ${-4 + i * 6} -14 C ${-4 + i * 6} -20, ${1 + i * 6} -21, ${2 + i * 6} -15 C ${3 + i * 6} -10, ${0 + i * 6} -8, ${-2 + i * 6} -9`}
      />
    ))}
  </g>
);

/** Mão flácida: dedos semiabertos, sem tônus. */
const HandFlail: FC<{ x: number; y: number; rot: number }> = ({ x, y, rot }) => (
  <g transform={`translate(${x} ${y}) rotate(${rot})`}>
    <path {...bone} d="M -8 0 C -10 10, -6 20, 1 22 C 9 24, 14 17, 13 7 C 12 1, 8 -3, 2 -3 Z" />
    {[0, 1, 2].map((i) => (
      <path key={i} {...lesion} strokeWidth={1.4} d={`M ${-5 + i * 6} 20 L ${-6 + i * 6} 30`} />
    ))}
  </g>
);

/** Olho normal × olho com ptose e miose (Horner). */
const HornerInset: FC<{ x: number; y: number }> = ({ x, y }) => (
  <g transform={`translate(${x} ${y})`}>
    <rect {...boneBack} x={0} y={0} width={128} height={62} rx={6} />
    {/* olho normal */}
    <path {...bone} d="M 12 30 C 22 16, 44 16, 54 30 C 44 44, 22 44, 12 30 Z" />
    <circle {...bone} cx={33} cy={30} r={7} />
    <circle cx={33} cy={30} r={3.4} fill="var(--ink-soft)" stroke="none" />
    <text x={33} y={56} {...label} textAnchor="middle">
      normal
    </text>
    {/* olho com ptose + miose */}
    <path {...bone} d="M 74 32 C 84 24, 106 24, 116 32 C 106 44, 84 44, 74 32 Z" />
    <circle {...bone} cx={95} cy={33} r={6} />
    <circle cx={95} cy={33} r={1.8} fill="var(--cortical)" stroke="none" />
    <path {...lesion} d="M 74 32 C 84 24, 106 24, 116 32" strokeWidth={2.2} />
    <text x={95} y={56} {...label} textAnchor="middle" fill="var(--cortical)">
      ptose + miose
    </text>
  </g>
);

type PatternKey = "erb" | "erb-plus" | "klumpke" | "total";

const PATTERNS: Record<
  PatternKey,
  {
    heading: string;
    arm: string;
    hand: "tip" | "claw" | "flail";
    handAt: [number, number, number];
    horner: boolean;
    notes: string[];
  }
> = {
  erb: {
    heading: "Erb-Duchenne (C5-C6)",
    arm: "M 186 106 L 212 158 L 224 206",
    hand: "tip",
    handAt: [228, 210, 34],
    horner: false,
    notes: [
      "Ombro aduzido e em rotação interna",
      "Cotovelo estendido, antebraço pronado",
      "Punho fletido — “gorjeta de garçom”",
      "Preensão PRESERVADA (C8-T1)",
      "Moro assimétrico; bíceps ausente",
    ],
  },
  "erb-plus": {
    heading: "Erb estendido (C5-C7)",
    arm: "M 186 106 L 212 158 L 226 206",
    hand: "tip",
    handAt: [230, 210, 52],
    horner: false,
    notes: [
      "Padrão de Erb + queda do punho e dos dedos",
      "Perda da extensão de punho e metacarpofalângicas",
      "Tríceps e extensores acometidos (C7)",
      "Preensão ainda presente, porém mais fraca",
      "Prognóstico intermediário",
    ],
  },
  klumpke: {
    heading: "Klumpke (C8-T1)",
    arm: "M 186 106 L 208 158 L 244 118",
    hand: "claw",
    handAt: [248, 112, 18],
    horner: true,
    notes: [
      "Ombro e cotovelo com função relativamente preservada",
      "Mão em garra: intrínsecos e flexores longos paralisados",
      "Síndrome de Horner frequente (T1 / gânglio estrelado)",
      "Rara isoladamente — suspeitar de lesão extensa",
      "Horner sinaliza avulsão pré-ganglionar",
    ],
  },
  total: {
    heading: "Paralisia total (C5-T1)",
    arm: "M 186 106 L 200 160 L 206 212",
    hand: "flail",
    handAt: [208, 216, 8],
    horner: true,
    notes: [
      "Membro flácido, pendente, sem movimento ativo",
      "Anestesia global do membro",
      "Horner presente na maioria (Narakas IV)",
      "Maior taxa de avulsão radicular",
      "Pior prognóstico — exploração precoce",
    ],
  },
};

const Patterns: FC<FigureProps> = ({ className, title, variant }) => {
  const key: PatternKey = (variant as PatternKey) in PATTERNS ? (variant as PatternKey) : "erb";
  const p = PATTERNS[key];

  return (
    <svg
      viewBox="0 0 480 320"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
    >
      <title>{title ?? `Padrão clínico da paralisia braquial obstétrica: ${p.heading}`}</title>

      {/* cabeça, pescoço e tronco do recém-nascido */}
      <circle {...bone} cx={150} cy={56} r={30} />
      <path {...bone} d="M 136 82 L 164 82 L 168 102 L 132 102 Z" />
      <path
        {...bone}
        d="M 118 100 C 106 110, 102 142, 106 176 C 108 200, 118 216, 130 220 L 172 220 C 184 216, 194 200, 196 176 C 200 142, 194 110, 182 100 Z"
      />

      {/* membro não acometido (lado do observador à esquerda) */}
      <Limb d="M 116 108 L 94 158 L 86 204" />
      <path {...bone} d="M 78 206 C 74 216, 78 226, 86 227 C 94 228, 99 221, 97 212 C 96 207, 92 203, 86 203 Z" />
      <text x={70} y={248} {...label} textAnchor="middle">
        lado normal
      </text>

      {/* membro acometido */}
      <Limb d={p.arm} />
      {p.hand === "tip" && <HandTip x={p.handAt[0]} y={p.handAt[1]} rot={p.handAt[2]} />}
      {p.hand === "claw" && <HandClaw x={p.handAt[0]} y={p.handAt[1]} rot={p.handAt[2]} />}
      {p.hand === "flail" && <HandFlail x={p.handAt[0]} y={p.handAt[1]} rot={p.handAt[2]} />}

      {/* marca da raiz acometida sobre o ombro */}
      <circle {...lesion} cx={182} cy={100} r={11} strokeDasharray="4 3" strokeWidth={1.8} />

      {/* seta indicando o vício de rotação (nos padrões altos) */}
      {(key === "erb" || key === "erb-plus") && (
        <g>
          <path {...measure} d="M 196 126 A 26 26 0 0 0 216 142" />
          <path {...measure} d="M 216 142 L 209 139 M 216 142 L 213 135" />
          <text x={214} y={140} {...label} fill="var(--amber)" textAnchor="end">
            rotação interna
          </text>
        </g>
      )}

      {/* inset de Horner */}
      {p.horner && <HornerInset x={330} y={30} />}

      {/* título e notas */}
      <text x={262} y={p.horner ? 118 : 52} {...mono} fill="var(--ink)">
        {p.heading}
      </text>
      {p.notes.map((n, i) => (
        <g key={n}>
          <circle
            cx={266}
            cy={(p.horner ? 138 : 72) + i * 20 - 4}
            r={2.4}
            fill="var(--teal)"
            stroke="none"
          />
          <text x={276} y={(p.horner ? 138 : 72) + i * 20} {...label}>
            {n}
          </text>
        </g>
      ))}

      <text x={240} y={286} {...label} textAnchor="middle">
        <tspan x={240} dy="0">
          Diferencial obrigatório no recém-nascido: pseudoparalisia por fratura
        </tspan>
        <tspan x={240} dy="1.15em">
          de clavícula ou de úmero proximal, artrite séptica e osteomielite —
        </tspan>
        <tspan x={240} dy="1.15em">
          nelas há dor à mobilização, e não déficit neurológico segmentar.
        </tspan>
      </text>
    </svg>
  );
};

/* --------------------------------------------------------------------------
   3. Classificação de Narakas (I-IV): extensão das raízes acometidas.
   -------------------------------------------------------------------------- */

type NarakasKey = "1" | "2" | "3" | "4";

const NARAKAS: Record<
  NarakasKey,
  {
    heading: string;
    roots: string[];
    shoulder: boolean;
    elbow: boolean;
    wrist: boolean;
    hand: boolean;
    horner: boolean;
    notes: string[];
  }
> = {
  "1": {
    heading: "Narakas I — C5-C6",
    roots: ["C5", "C6"],
    shoulder: true,
    elbow: true,
    wrist: false,
    hand: false,
    horner: false,
    notes: ["Erb clássico", "Melhor prognóstico do grupo", "Recuperação espontânea na maioria"],
  },
  "2": {
    heading: "Narakas II — C5-C7",
    roots: ["C5", "C6", "C7"],
    shoulder: true,
    elbow: true,
    wrist: true,
    hand: false,
    horner: false,
    notes: ["Erb estendido, com queda do punho", "Prognóstico intermediário", "Sequela de ombro é frequente"],
  },
  "3": {
    heading: "Narakas III — C5-T1, sem Horner",
    roots: ["C5", "C6", "C7", "C8", "T1"],
    shoulder: true,
    elbow: true,
    wrist: true,
    hand: true,
    horner: false,
    notes: ["Membro flácido completo", "Recuperação espontânea pouco provável", "Indicação frequente de microcirurgia"],
  },
  "4": {
    heading: "Narakas IV — C5-T1 com Horner",
    roots: ["C5", "C6", "C7", "C8", "T1"],
    shoulder: true,
    elbow: true,
    wrist: true,
    hand: true,
    horner: true,
    notes: ["Flácido + Horner", "Alta prevalência de avulsão pré-ganglionar", "Pior prognóstico; explorar precocemente"],
  },
};

const Narakas: FC<FigureProps> = ({ className, title, variant }) => {
  const key: NarakasKey = (variant as NarakasKey) in NARAKAS ? (variant as NarakasKey) : "1";
  const g = NARAKAS[key];
  const hit = (name: string) => g.roots.includes(name);

  const segStyle = (on: boolean) =>
    on
      ? { stroke: "var(--cortical)", strokeWidth: 2.8 }
      : { stroke: "var(--ink-soft)", strokeWidth: 1.6 };

  return (
    <svg
      viewBox="0 0 460 280"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
    >
      <title>{title ?? `Classificação de Narakas: ${g.heading}`}</title>

      <text x={30} y={28} {...mono} fill="var(--ink)">
        {g.heading}
      </text>

      {/* coluna de raízes */}
      {ROOTS.map((r, i) => {
        const y = 62 + i * 34;
        const on = hit(r.name);
        return (
          <g key={r.name}>
            <text x={44} y={y + 4} {...label} textAnchor="end" fill={on ? "var(--cortical)" : "var(--muted)"}>
              {r.name}
            </text>
            <path
              d={`M 54 ${y} L 152 ${y}`}
              fill="none"
              strokeLinecap="round"
              {...(on
                ? { stroke: "var(--cortical)", strokeWidth: 3.2 }
                : { stroke: "var(--teal)", strokeWidth: 2.4 })}
            />
            {on && (
              <g>
                <path {...lesion} d={`M 96 ${y - 7} L 110 ${y + 7}`} strokeWidth={2} />
                <path {...lesion} d={`M 110 ${y - 7} L 96 ${y + 7}`} strokeWidth={2} />
              </g>
            )}
          </g>
        );
      })}
      <text x={103} y={240} {...label} textAnchor="middle">
        raízes acometidas
      </text>

      {/* pictograma do membro */}
      <g>
        <circle {...bone} cx={252} cy={62} r={16} {...segStyle(g.shoulder)} fill="var(--surface)" />
        <path d="M 252 78 L 252 112" fill="none" strokeLinecap="round" {...segStyle(g.shoulder)} />
        <circle {...bone} cx={252} cy={128} r={13} {...segStyle(g.elbow)} fill="var(--surface)" />
        <path d="M 252 141 L 252 172" fill="none" strokeLinecap="round" {...segStyle(g.wrist)} />
        <rect
          x={240}
          y={176}
          width={24}
          height={32}
          rx={7}
          fill="var(--surface)"
          {...segStyle(g.hand)}
        />
        <text x={286} y={66} {...label} fill={g.shoulder ? "var(--cortical)" : "var(--muted)"}>
          ombro (deltoide, rot. externa)
        </text>
        <text x={286} y={132} {...label} fill={g.elbow ? "var(--cortical)" : "var(--muted)"}>
          cotovelo (bíceps)
        </text>
        <text x={286} y={172} {...label} fill={g.wrist ? "var(--cortical)" : "var(--muted)"}>
          punho / extensores
        </text>
        <text x={286} y={198} {...label} fill={g.hand ? "var(--cortical)" : "var(--muted)"}>
          mão (intrínsecos, preensão)
        </text>
        {g.horner && (
          <g>
            <path {...lesion} d="M 236 224 C 244 216, 260 216, 268 224 C 260 234, 244 234, 236 224 Z" strokeWidth={1.8} />
            <circle cx={252} cy={224} r={2} fill="var(--cortical)" stroke="none" />
            <text x={286} y={228} {...label} fill="var(--cortical)">
              síndrome de Horner
            </text>
          </g>
        )}
      </g>

      {/* notas */}
      <text x={230} y={262} {...label} textAnchor="middle">
        {g.notes.join(" · ")}
      </text>
    </svg>
  );
};

/* --------------------------------------------------------------------------
   4. Tipo de lesão nervosa: neuropraxia, neuroma em continuidade,
      ruptura pós-ganglionar e avulsão pré-ganglionar.
   -------------------------------------------------------------------------- */

type InjuryKey = "neuropraxia" | "neuroma" | "ruptura" | "avulsao";

const NerveInjury: FC<FigureProps> = ({ className, title, variant }) => {
  const key: InjuryKey = ["neuropraxia", "neuroma", "ruptura", "avulsao"].includes(variant ?? "")
    ? (variant as InjuryKey)
    : "neuropraxia";

  const headings: Record<InjuryKey, string> = {
    neuropraxia: "Neuropraxia — bloqueio focal de condução",
    neuroma: "Neuroma em continuidade",
    ruptura: "Ruptura pós-ganglionar",
    avulsao: "Avulsão pré-ganglionar",
  };

  const captions: Record<InjuryKey, string> = {
    neuropraxia:
      "Continuidade axonal mantida; recuperação completa esperada em semanas — é o substrato da maioria dos casos que se resolvem sozinhos.",
    neuroma:
      "Cicatriz fusiforme conduzindo mal. Se não houver recuperação funcional, ressecar o neuroma e enxertar costuma superar a evolução natural.",
    ruptura:
      "Descontinuidade distal ao gânglio da raiz dorsal: há coto proximal viável, portanto é lesão ENXERTÁVEL (enxertos em cabo do n. sural).",
    avulsao:
      "Raiz arrancada da medula, com pseudomeningocele; não há coto proximal — não é enxertável e exige NEUROTIZAÇÃO. Horner sugere avulsão de T1.",
  };

  return (
    <svg
      viewBox="0 0 440 250"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
    >
      <title>{title ?? `Tipo de lesão nervosa na paralisia braquial obstétrica: ${headings[key]}`}</title>

      <text x={26} y={26} {...mono} fill="var(--ink)">
        {headings[key]}
      </text>

      {/* medula espinhal */}
      <rect {...neuralBody} x={30} y={54} width={34} height={130} rx={14} />
      <text x={47} y={200} {...label} textAnchor="middle">
        medula
      </text>

      {/* pedículos formando o forame */}
      <rect {...boneBack} x={70} y={54} width={26} height={48} rx={4} />
      <rect {...boneBack} x={70} y={138} width={26} height={46} rx={4} />
      <text x={83} y={200} {...label} textAnchor="middle">
        forame
      </text>

      {/* raízes ventral e dorsal */}
      {key !== "avulsao" ? (
        <g>
          <path {...nerve} d="M 64 106 C 84 106, 98 112, 110 118" strokeWidth={2} />
          <path {...nerve} d="M 64 134 C 84 134, 100 128, 118 126" strokeWidth={2} />
        </g>
      ) : (
        <g>
          {/* raízes arrancadas: cotos retraídos, sem inserção na medula */}
          <path {...lesion} d="M 106 108 C 100 112, 100 118, 106 120" strokeWidth={2} />
          <path {...lesion} d="M 110 132 C 104 130, 102 126, 108 124" strokeWidth={2} />
          <path {...lesion} d="M 66 104 L 78 116 M 78 104 L 66 116" strokeWidth={2} />
          {/* pseudomeningocele */}
          <ellipse {...neuralBody} cx={86} cy={120} rx={20} ry={17} strokeDasharray="5 4" />
          <text x={86} y={44} {...label} textAnchor="middle" fill="var(--teal)">
            pseudomeningocele
          </text>
          <path {...measure} d="M 86 48 L 86 100" strokeWidth={1.2} strokeDasharray="3 3" />
        </g>
      )}

      {/* gânglio da raiz dorsal */}
      <ellipse {...neuralBody} cx={132} cy={120} rx={14} ry={9.5} />
      <text x={132} y={158} {...label} textAnchor="middle">
        gânglio da raiz
      </text>
      <text x={132} y={171} {...label} textAnchor="middle">
        dorsal (GRD)
      </text>
      <path {...measure} d="M 132 130 L 132 146" strokeWidth={1.2} strokeDasharray="3 3" />

      {/* linha pré/pós-ganglionar */}
      <path {...measure} d="M 150 46 L 150 190" strokeWidth={1.2} strokeDasharray="4 4" />
      <text x={112} y={216} {...label} textAnchor="middle" fill="var(--amber)">
        pré-ganglionar
      </text>
      <text x={196} y={216} {...label} textAnchor="middle" fill="var(--amber)">
        pós-ganglionar
      </text>

      {/* nervo periférico distal, conforme a lesão */}
      {key === "neuropraxia" && (
        <g>
          <path {...nerve} d="M 146 120 L 400 120" />
          <path
            {...nerve}
            d="M 224 120 L 268 120"
            stroke="var(--surface)"
            strokeWidth={4}
          />
          <path {...lesion} d="M 224 120 L 268 120" strokeDasharray="4 4" />
          <ellipse {...lesion} cx={246} cy={120} rx={30} ry={15} strokeDasharray="4 4" strokeWidth={1.5} />
          <text x={246} y={92} {...label} textAnchor="middle" fill="var(--cortical)">
            segmento desmielinizado
          </text>
          <path {...measure} d="M 246 96 L 246 106" strokeWidth={1.2} strokeDasharray="3 3" />
        </g>
      )}

      {key === "neuroma" && (
        <g>
          <path {...nerve} d="M 146 120 L 214 120" />
          <path {...neuralBody} d="M 214 120 C 224 100, 262 100, 276 120 C 262 140, 224 140, 214 120 Z" />
          <path {...lesion} d="M 224 112 L 268 112 M 222 120 L 270 120 M 224 128 L 268 128" strokeWidth={1.2} />
          <path {...nerve} d="M 276 120 L 400 120" />
          <ellipse {...lesion} cx={245} cy={120} rx={38} ry={24} strokeDasharray="5 4" strokeWidth={1.5} />
          <text x={245} y={84} {...label} textAnchor="middle" fill="var(--cortical)">
            neuroma em continuidade
          </text>
          <path {...measure} d="M 245 88 L 245 96" strokeWidth={1.2} strokeDasharray="3 3" />
        </g>
      )}

      {key === "ruptura" && (
        <g>
          <path {...nerve} d="M 146 120 L 216 120" />
          <path {...neuralBody} d="M 216 120 C 222 110, 234 110, 238 120 C 234 130, 222 130, 216 120 Z" />
          <path {...neuralBody} d="M 288 120 C 284 110, 272 110, 268 120 C 272 130, 284 130, 288 120 Z" />
          <path {...nerve} d="M 288 120 L 400 120" />
          <path {...measure} d="M 240 100 L 266 100" />
          <path {...measure} d="M 240 100 L 240 112 M 266 100 L 266 112" strokeWidth={1.2} />
          <text x={253} y={92} {...label} textAnchor="middle" fill="var(--amber)">
            falha
          </text>
          <text x={330} y={100} {...label} textAnchor="middle" fill="var(--teal)">
            coto proximal viável → enxertável
          </text>
        </g>
      )}

      {key === "avulsao" && (
        <g>
          <path {...nerve} d="M 146 120 L 400 120" />
          <text x={300} y={100} {...label} textAnchor="middle" fill="var(--cortical)">
            sem coto proximal → neurotização
          </text>
          <text x={300} y={146} {...label} textAnchor="middle">
            GRD íntegro: sensitivo periférico preservado
          </text>
        </g>
      )}

      {key === "neuropraxia" ? (
        <text x={220} y={224} {...label} textAnchor="middle">
          <tspan x={220} dy="0">
            Continuidade axonal mantida; recuperação completa esperada em semanas —
          </tspan>
          <tspan x={220} dy="1.15em">
            é o substrato da maioria dos casos que se resolvem sozinhos.
          </tspan>
        </text>
      ) : (
        <text x={220} y={236} {...label} textAnchor="middle">
          {captions[key]}
        </text>
      )}
    </svg>
  );
};

/* --------------------------------------------------------------------------
   5. Marco prognóstico do bíceps aos 3 meses e o algoritmo de decisão.
   -------------------------------------------------------------------------- */

const TICKS: { m: string; x: number }[] = [
  { m: "0", x: 50 },
  { m: "1", x: 100 },
  { m: "2", x: 150 },
  { m: "3", x: 200 },
  { m: "6", x: 300 },
  { m: "9", x: 380 },
];

const BicepsTimeline: FC<FigureProps> = ({ className, title, activeStep }) => {
  /** Realce opcional conforme o passo da técnica (4 = marco; 5 = decisão). */
  const markerHot = activeStep === 4;
  const surgeryHot = activeStep === 5;

  const box = (hot: boolean) => ({
    fill: "var(--surface)",
    stroke: hot ? "var(--amber)" : "var(--ink-soft)",
    strokeWidth: hot ? 2.6 : 1.6,
  });

  return (
    <svg
      viewBox="0 0 440 326"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
    >
      <title>
        {title ?? "Recuperação do bíceps até 3 meses como marco prognóstico e algoritmo de decisão"}
      </title>

      {/* eixo do tempo */}
      <path {...measure} d="M 44 58 L 396 58" />
      <path {...measure} d="M 396 58 L 388 54 M 396 58 L 388 62" />
      {TICKS.map((t) => (
        <g key={t.m}>
          <path {...measure} d={`M ${t.x} 52 L ${t.x} 64`} strokeWidth={1.4} />
          <text x={t.x} y={44} {...mono} textAnchor="middle" fill="var(--muted)">
            {t.m}
          </text>
        </g>
      ))}
      <text x={396} y={62} {...label} textAnchor="middle">
        meses
      </text>
      <text x={26} y={26} {...mono} fill="var(--ink)">
        Marco do bíceps
      </text>

      {/* marcos verticais */}
      <path
        d="M 200 58 L 200 250"
        fill="none"
        strokeDasharray="5 4"
        stroke="var(--amber)"
        strokeWidth={markerHot ? 2.4 : 1.3}
      />
      <path {...measure} d="M 300 58 L 300 250" strokeWidth={1.3} strokeDasharray="5 4" />
      <circle {...measure} cx={200} cy={58} r={markerHot ? 6.5 : 4.5} strokeWidth={2.2} />
      <circle {...measure} cx={300} cy={58} r={4} strokeWidth={1.6} />

      {/* ramo favorável */}
      <rect x={40} y={80} width={150} height={44} rx={6} {...box(false)} />
      <text x={115} y={100} {...label} textAnchor="middle" fill="var(--teal)">
        Bíceps antigravitário
      </text>
      <text x={115} y={114} {...label} textAnchor="middle" fill="var(--teal)">
        até 3 meses
      </text>
      <path {...measure} d="M 115 124 L 115 152" strokeWidth={1.4} />
      <path {...measure} d="M 115 152 L 111 145 M 115 152 L 119 145" strokeWidth={1.4} />
      <rect x={40} y={154} width={150} height={72} rx={6} {...box(false)} />
      <text x={115} y={174} {...label} textAnchor="middle">
        Recuperação espontânea
      </text>
      <text x={115} y={190} {...label} textAnchor="middle">
        Prognóstico excelente
      </text>
      <text x={115} y={208} {...label} textAnchor="middle">
        Manter ADM passiva e
      </text>
      <text x={115} y={220} {...label} textAnchor="middle">
        rastrear sequelas do ombro
      </text>

      {/* ramo desfavorável */}
      <rect x={210} y={80} width={186} height={44} rx={6} {...box(markerHot)} />
      <text x={303} y={100} {...label} textAnchor="middle" fill="var(--cortical)">
        Bíceps AUSENTE aos 3 meses
      </text>
      <text x={303} y={114} {...label} textAnchor="middle" fill="var(--cortical)">
        reavaliação mensal seriada
      </text>
      <path {...measure} d="M 303 124 L 303 152" strokeWidth={1.4} />
      <path {...measure} d="M 303 152 L 299 145 M 303 152 L 307 145" strokeWidth={1.4} />
      <rect x={210} y={154} width={186} height={72} rx={6} {...box(surgeryHot)} />
      <text x={303} y={174} {...label} textAnchor="middle" fill="var(--cortical)">
        Sem bíceps aos 6 meses
      </text>
      <text x={303} y={190} {...label} textAnchor="middle" fill="var(--cortical)">
        → exploração + microcirurgia
      </text>
      <text x={303} y={208} {...label} textAnchor="middle">
        Recuperação após 3 meses:
      </text>
      <text x={303} y={220} {...label} textAnchor="middle">
        raramente é completa
      </text>

      {/* sinais de alarme */}
      <rect {...boneBack} x={40} y={240} width={356} height={40} rx={6} />
      <text x={218} y={258} {...label} textAnchor="middle" fill="var(--cortical)">
        Alarme (antecipar p/ ~3 meses): Horner, membro flácido total (Narakas IV),
      </text>
      <text x={218} y={272} {...label} textAnchor="middle" fill="var(--cortical)">
        paralisia diafragmática ou avulsão radicular demonstrada em RM/mielo-TC.
      </text>

      <text x={220} y={296} {...label} textAnchor="middle">
        <tspan x={220} dy="0">
          O marco dos 3 meses ESTRATIFICA o risco;
        </tspan>
        <tspan x={220} dy="1.15em">
          a indicação cirúrgica consolida-se pela ausência de bíceps aos 6 meses.
        </tspan>
      </text>
    </svg>
  );
};

/* --------------------------------------------------------------------------
   6. Microcirurgia: enxertos em cabo × neurotizações.
   -------------------------------------------------------------------------- */

const Microsurgery: FC<FigureProps> = ({ className, title, variant }) => {
  const key = variant === "neurotizacao" ? "neurotizacao" : "enxerto";

  return (
    <svg
      viewBox="0 0 440 280"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
    >
      <title>
        {title ??
          (key === "enxerto"
            ? "Ressecção do neuroma e reconstrução com enxertos em cabo do nervo sural"
            : "Neurotizações: acessório espinhal para supraescapular e fascículo ulnar para musculocutâneo")}
      </title>

      {key === "enxerto" ? (
        <g>
          <text x={26} y={26} {...mono} fill="var(--ink)">
            Ressecção do neuroma + enxertos em cabo
          </text>

          {/* medula / raízes proximais */}
          <rect {...neuralBody} x={26} y={78} width={26} height={92} rx={10} />
          <path {...nerve} d="M 52 106 C 80 106, 110 116, 140 122" />
          <path {...nerve} d="M 52 142 C 80 142, 112 130, 140 126" />
          <path {...nerve} d="M 140 124 L 168 124" strokeWidth={3} />
          <ellipse {...neuralBody} cx={102} cy={112} rx={9} ry={6} />
          <ellipse {...neuralBody} cx={104} cy={138} rx={9} ry={6} />

          {/* neuroma ressecado */}
          <ellipse {...lesion} cx={205} cy={124} rx={32} ry={20} strokeDasharray="5 4" strokeWidth={1.6} />
          <path {...lesion} d="M 190 110 L 220 138 M 220 110 L 190 138" strokeWidth={2} />
          <text x={205} y={88} {...label} textAnchor="middle" fill="var(--cortical)">
            neuroma ressecado
          </text>
          <path {...measure} d="M 205 92 L 205 102" strokeWidth={1.2} strokeDasharray="3 3" />

          {/* coto distal */}
          <path {...nerve} d="M 242 124 L 300 124" strokeWidth={3} />
          <path {...nerve} d="M 300 124 C 330 124, 344 100, 372 96" />
          <path {...nerve} d="M 300 124 C 330 124, 344 150, 372 156" />

          {/* enxertos em cabo */}
          {[-16, -6, 6, 16].map((dy) => (
            <path
              key={dy}
              {...nerve}
              strokeWidth={2}
              d={`M 168 ${124 + dy * 0.5} C 190 ${124 + dy}, 220 ${124 + dy}, 242 ${124 + dy * 0.5}`}
            />
          ))}
          {[168, 242].map((x) => (
            <g key={x}>
              <path {...measure} d={`M ${x} 100 L ${x} 148`} strokeWidth={1.3} strokeDasharray="3 3" />
            </g>
          ))}
          <text x={205} y={176} {...label} textAnchor="middle" fill="var(--teal)">
            enxertos em cabo (n. sural)
          </text>
          <text x={205} y={190} {...label} textAnchor="middle" fill="var(--amber)">
            coaptações sem tensão
          </text>

          <text x={352} y={100} {...label}>
            supraescapular
          </text>
          <text x={348} y={160} {...label}>
            musculocutâneo
          </text>

          <text x={220} y={228} {...label} textAnchor="middle">
            <tspan x={220} dy="0">
              Indicado na RUPTURA pós-ganglionar e no neuroma que não conduz:
            </tspan>
            <tspan x={220} dy="1.15em">
              o coto proximal viável é a condição para enxertar.
            </tspan>
          </text>
          <text x={220} y={256} {...label} textAnchor="middle">
            <tspan x={220} dy="0">
              Prioridade de reinervação: flexão do cotovelo (musculocutâneo)
            </tspan>
            <tspan x={220} dy="1.15em">
              e rotação externa/abdução (supraescapular, axilar).
            </tspan>
          </text>
        </g>
      ) : (
        <g>
          <text x={26} y={26} {...mono} fill="var(--ink)">
            Neurotizações (transferências nervosas)
          </text>

          {/* raízes avulsionadas */}
          <rect {...neuralBody} x={26} y={78} width={26} height={92} rx={10} />
          <path {...lesion} d="M 58 96 L 74 112 M 74 96 L 58 112" strokeWidth={2.2} />
          <path {...lesion} d="M 58 136 L 74 152 M 74 136 L 58 152" strokeWidth={2.2} />
          <text x={66} y={186} {...label} textAnchor="middle" fill="var(--cortical)">
            C5-C6 avulsionadas
          </text>
          <text x={66} y={199} {...label} textAnchor="middle" fill="var(--cortical)">
            (sem coto proximal)
          </text>

          {/* doador 1: acessório espinhal → supraescapular */}
          <path {...nerve} d="M 96 44 C 150 44, 190 50, 224 62" />
          <text x={130} y={36} {...label} fill="var(--teal)">
            n. acessório espinhal (XI)
          </text>
          <circle {...measure} cx={224} cy={62} r={5} strokeWidth={2} />
          <path {...nerve} d="M 224 62 C 262 68, 300 72, 336 76" />
          <path {...neuralBody} d="M 336 62 C 366 58, 388 66, 390 80 C 388 94, 366 100, 336 92 Z" />
          <text x={362} y={116} {...label} textAnchor="middle">
            supraespinal
          </text>
          <text x={278} y={58} {...label} textAnchor="middle" fill="var(--amber)">
            → n. supraescapular
          </text>

          {/* doador 2: fascículo ulnar → musculocutâneo (Oberlin) */}
          <path {...nerve} d="M 96 208 C 170 208, 260 208, 392 208" />
          <text x={120} y={228} {...label} fill="var(--teal)">
            n. ulnar (fascículo do flexor ulnar do carpo)
          </text>
          <path {...nerve} d="M 214 208 C 224 208, 228 190, 236 172" strokeWidth={2.2} />
          <circle {...measure} cx={238} cy={166} r={5} strokeWidth={2} />
          <path {...nerve} d="M 238 166 C 276 160, 308 156, 336 154" />
          <path {...neuralBody} d="M 336 140 C 366 136, 388 144, 390 158 C 388 172, 366 178, 336 170 Z" />
          <text x={362} y={194} {...label} textAnchor="middle">
            bíceps
          </text>
          <text x={286} y={144} {...label} textAnchor="middle" fill="var(--amber)">
            → n. musculocutâneo (Oberlin)
          </text>

          <text x={220} y={252} {...label} textAnchor="middle">
            Escolha obrigatória na AVULSÃO pré-ganglionar: usa-se um doador funcionante e distal, sacrificando função redundante.
          </text>
        </g>
      )}
    </svg>
  );
};

/* --------------------------------------------------------------------------
   7. Displasia glenoumeral (corte axial): versão glenoidal, PHHA, ângulo α
      e os tipos de deformidade descritos por Waters na RM.
   -------------------------------------------------------------------------- */

type GHKey = "normal" | "iii" | "iv" | "v" | "vi" | "vii";

const GH: Record<
  GHKey,
  { heading: string; retro: number; dy: number; r: number; face: "concava" | "biconcava" | "plana"; note: string }
> = {
  normal: {
    heading: "Tipo I — normal",
    retro: 5,
    dy: 0,
    r: 40,
    face: "concava",
    note: "Versão fisiológica ≈ −5°; PHHA ≈ 50%; cabeça centrada e glenoide côncava.",
  },
  iii: {
    heading: "Tipo III — subluxação posterior",
    retro: 25,
    dy: 20,
    r: 40,
    face: "concava",
    note: "Retroversão progressiva com a cabeça deslocada posteriormente; PHHA cai abaixo de 35%.",
  },
  iv: {
    heading: "Tipo IV — falsa glenoide (biconcavidade)",
    retro: 32,
    dy: 26,
    r: 40,
    face: "biconcava",
    note: "A cabeça esculpe uma neoarticulação posterior; a crista central marca a glenoide bicôncava.",
  },
  v: {
    heading: "Tipo V — achatamento e luxação",
    retro: 40,
    dy: 38,
    r: 40,
    face: "plana",
    note: "Glenoide plana ou convexa com achatamento da cabeça e luxação posterior estabelecida.",
  },
  vi: {
    heading: "Tipo VI — luxação infantil",
    retro: 30,
    dy: 58,
    r: 40,
    face: "concava",
    note: "Luxação franca já no lactente; a redução precoce é a maior oportunidade de remodelação.",
  },
  vii: {
    heading: "Tipo VII — parada de crescimento proximal",
    retro: 18,
    dy: 12,
    r: 30,
    face: "concava",
    note: "Hipoplasia da cabeça e do úmero proximal por comprometimento do crescimento.",
  },
};

const glenoidFace = (face: "concava" | "biconcava" | "plana") => {
  if (face === "biconcava") return "M 236 112 C 226 122, 228 140, 238 150 C 228 160, 226 176, 236 188";
  if (face === "plana") return "M 236 112 C 234 138, 234 162, 235 188";
  return "M 236 112 C 224 128, 224 172, 236 188";
};

const GHDysplasia: FC<FigureProps> = ({ className, title, variant }) => {
  const key: GHKey = (variant as GHKey) in GH ? (variant as GHKey) : "normal";
  const g = GH[key];
  const cx = 266;
  const cy = 150 + g.dy;
  /** Fração da cabeça anterior ao eixo escapular (y < 150) — proxy geométrico do PHHA. */
  const top = cy - g.r;
  const phha = Math.max(0, Math.min(100, Math.round(((150 - top) / (2 * g.r)) * 100)));

  return (
    <svg
      viewBox="0 0 460 330"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
    >
      <title>
        {title ?? `Displasia glenoumeral em corte axial: ${g.heading}`}
      </title>

      <text x={26} y={26} {...mono} fill="var(--ink)">
        {g.heading}
      </text>

      {/* orientação */}
      <text x={42} y={104} {...label} fill="var(--amber)">
        anterior
      </text>
      <path {...measure} d="M 60 112 L 60 132" strokeWidth={1.2} />
      <path {...measure} d="M 60 112 L 56 119 M 60 112 L 64 119" strokeWidth={1.2} />
      <text x={42} y={216} {...label} fill="var(--amber)">
        posterior
      </text>
      <path {...measure} d="M 60 168 L 60 190" strokeWidth={1.2} />
      <path {...measure} d="M 60 190 L 56 183 M 60 190 L 64 183" strokeWidth={1.2} />

      {/* corpo da escápula (lâmina axial) */}
      <path {...bone} d="M 48 138 C 110 142, 172 146, 214 148 L 214 156 C 172 158, 110 162, 48 166 Z" />
      <text x={110} y={182} {...label} textAnchor="middle">
        corpo da escápula
      </text>

      {/* colo + glenoide, girados pela retroversão */}
      <g transform={`rotate(${g.retro} 250 150)`}>
        <path {...bone} d={`${glenoidFace(g.face)} L 214 160 L 214 140 Z`} />
        {/* rebordos anterior e posterior */}
        <circle {...bone} cx={236} cy={112} r={3.4} />
        <circle {...bone} cx={236} cy={188} r={3.4} />
        {/* linha glenoidal */}
        <path {...measure} d="M 236 112 L 236 188" strokeWidth={1.4} strokeDasharray="4 3" />
      </g>

      {/* coracoide */}
      <ellipse {...boneBack} cx={256} cy={98} rx={11} ry={8} transform="rotate(-18 256 98)" />
      <text x={262} y={82} {...label}>
        coracoide
      </text>

      {/* cabeça umeral */}
      <circle {...bone} cx={cx} cy={cy} r={g.r} />
      {/* tuberosidade menor (anterior) */}
      <path
        {...boneBack}
        d={`M ${cx - 6} ${cy - g.r + 2} C ${cx + 6} ${cy - g.r - 6}, ${cx + 18} ${cy - g.r + 2}, ${cx + 14} ${cy - g.r + 12}`}
      />
      <text x={cx + g.r + 10} y={cy + 4} {...label}>
        cabeça umeral
      </text>

      {/* eixo escapular */}
      <path {...measure} d="M 48 150 L 400 150" strokeWidth={1.4} strokeDasharray="6 4" />
      <text x={404} y={154} {...label} fill="var(--amber)">
        eixo
      </text>
      <text x={404} y={166} {...label} fill="var(--amber)">
        escapular
      </text>

      {/* perpendicular ao eixo, no centro da glenoide → base do ângulo de versão */}
      <path {...measure} d="M 250 104 L 250 196" strokeWidth={1.2} strokeDasharray="3 3" />
      <path
        {...measure}
        d={`M 250 108 A 42 42 0 0 ${g.retro >= 0 ? 1 : 0} ${250 + 42 * Math.sin((g.retro * Math.PI) / 180)} ${150 - 42 * Math.cos((g.retro * Math.PI) / 180)}`}
      />
      <text x={196} y={120} {...mono} fill="var(--amber)">
        versão ≈ −{g.retro}°
      </text>

      {/* PHHA: porção da cabeça anterior ao eixo escapular */}
      <path {...measure} d={`M ${cx + g.r + 26} ${top} L ${cx + g.r + 26} 150`} strokeWidth={1.4} />
      <path {...measure} d={`M ${cx + g.r + 22} ${top} L ${cx + g.r + 30} ${top}`} strokeWidth={1.4} />
      <path {...measure} d={`M ${cx + g.r + 22} 150 L ${cx + g.r + 30} 150`} strokeWidth={1.4} />
      <text x={cx + g.r + 36} y={(top + 150) / 2} {...mono} fill="var(--amber)">
        PHHA ≈ {phha}%
      </text>

      {/* ângulo alfa: eixo escapular × linha centro da glenoide → centro da cabeça */}
      <path {...measure} d={`M 250 150 L ${cx} ${cy}`} strokeWidth={1.4} />
      {g.dy > 0 && (
        <g>
          <path {...measure} d="M 274 150 A 24 24 0 0 0 268 166" strokeWidth={1.4} />
          <text x={280} y={182} {...mono} fill="var(--amber)">
            α
          </text>
        </g>
      )}

      {/* marca da deformidade */}
      {key !== "normal" && (
        <path
          {...lesion}
          d={`M ${cx - 4} ${cy + g.r + 8} C ${cx + 16} ${cy + g.r + 18}, ${cx + 34} ${cy + g.r + 6}, ${cx + 44} ${cy + g.r - 6}`}
          strokeDasharray="5 4"
          strokeWidth={1.8}
        />
      )}

      <text x={230} y={272} {...label} textAnchor="middle">
        {g.note}
      </text>
      <text x={230} y={296} {...label} textAnchor="middle">
        O desequilíbrio subescapular contraturado × rotadores externos paralisados retroverte a glenoide
      </text>
      <text x={230} y={312} {...label} textAnchor="middle">
        e empurra a cabeça para trás: a displasia é adquirida, progressiva e inicialmente reversível.
      </text>
    </svg>
  );
};

/* --------------------------------------------------------------------------
   8. Cirurgia das sequelas: liberação do subescapular, transferência do
      grande dorsal/redondo maior e osteotomia desrotacional do úmero.
   -------------------------------------------------------------------------- */

type SeqKey = "liberacao" | "transferencia" | "osteotomia";

const SequelaeSurgery: FC<FigureProps> = ({ className, title, variant }) => {
  const key: SeqKey = ["liberacao", "transferencia", "osteotomia"].includes(variant ?? "")
    ? (variant as SeqKey)
    : "liberacao";

  const headings: Record<SeqKey, string> = {
    liberacao: "Alongamento do subescapular + redução articular",
    transferencia: "Transferência do grande dorsal e redondo maior para o manguito",
    osteotomia: "Osteotomia desrotacional do úmero",
  };

  const captions: Record<SeqKey, string> = {
    liberacao:
      "Alonga o contraturado, recentra a cabeça e devolve ao acetábulo glenoidal a chance de remodelar — só funciona enquanto a articulação é redutível.",
    transferencia:
      "Converte rotadores internos em rotadores externos: reequilibra o par de forças e protege a redução obtida.",
    osteotomia:
      "Não corrige a displasia: redistribui o arco de rotação disponível. Reservada à articulação já incongruente ou irredutível.",
  };

  return (
    <svg
      viewBox="0 0 440 330"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
    >
      <title>{title ?? `Tratamento da sequela do ombro: ${headings[key]}`}</title>

      <text x={26} y={26} {...mono} fill="var(--ink)">
        {headings[key]}
      </text>

      {/* escápula (vista anterior) */}
      <path
        {...bone}
        d="M 62 68 C 116 74, 158 84, 180 98 L 170 122 C 152 152, 142 192, 136 218 C 112 172, 84 118, 62 68 Z"
      />
      <path {...boneBack} d="M 156 60 L 206 68 L 204 80 L 154 74 Z" />
      <text x={182} y={52} {...label} textAnchor="middle">
        acrômio
      </text>
      <path {...boneBack} d="M 172 84 C 186 82, 198 86, 200 94 C 192 96, 180 94, 172 92 Z" />

      {/* cabeça e diáfise umeral */}
      {key !== "osteotomia" && (
        <g>
          <circle {...bone} cx={206} cy={104} r={25} />
          <path {...bone} d="M 188 120 L 220 114 L 248 236 L 216 244 Z" />
        </g>
      )}

      {key === "liberacao" && (
        <g>
          {/* ventre do subescapular na fossa anterior */}
          <path
            {...neuralBody}
            d="M 78 92 C 116 98, 154 108, 186 118 C 162 146, 148 180, 142 204 C 120 162, 96 122, 78 92 Z"
          />
          <text x={116} y={148} {...label} textAnchor="middle" fill="var(--teal)">
            subescapular
          </text>
          <text x={116} y={162} {...label} textAnchor="middle" fill="var(--teal)">
            contraturado
          </text>
          {/* alongamento em Z junto à inserção */}
          <path {...lesion} d="M 168 106 L 186 114 L 170 124 L 190 132" />
          <text x={150} y={94} {...label} fill="var(--cortical)">
            alongamento em Z
          </text>
          {/* ganho de rotação externa */}
          <path {...measure} d="M 236 128 A 46 46 0 0 1 258 168" />
          <path {...measure} d="M 258 168 L 250 164 M 258 168 L 256 160" />
          <text x={268} y={152} {...label} fill="var(--amber)">
            rotação externa
          </text>
          <text x={268} y={166} {...label} fill="var(--amber)">
            recuperada
          </text>
          {/* cabeça recentrada */}
          <circle {...measure} cx={206} cy={104} r={33} strokeDasharray="5 4" strokeWidth={1.4} />
          <text x={264} y={104} {...label}>
            cabeça recentrada
          </text>
          <text x={264} y={118} {...label}>
            (redução aberta/artrosc.)
          </text>
        </g>
      )}

      {key === "transferencia" && (
        <g>
          {/* grande dorsal + redondo maior no trajeto original */}
          <path {...neuralBody} d="M 96 232 C 132 214, 166 176, 188 132 L 200 140 C 180 186, 146 226, 108 246 Z" />
          <text x={128} y={214} {...label} textAnchor="middle" fill="var(--teal)">
            grande dorsal +
          </text>
          <text x={128} y={228} {...label} textAnchor="middle" fill="var(--teal)">
            redondo maior
          </text>
          {/* desinserção */}
          <path {...lesion} d="M 186 126 L 206 140" />
          <text x={166} y={118} {...label} fill="var(--cortical)">
            desinserção
          </text>
          {/* novo trajeto para o manguito posterolateral */}
          <path
            {...nerve}
            strokeDasharray="6 4"
            strokeWidth={3}
            d="M 200 138 C 218 132, 232 118, 236 96"
          />
          <circle {...measure} cx={236} cy={94} r={6} strokeWidth={2} />
          <text x={250} y={82} {...label} fill="var(--amber)">
            nova inserção no manguito
          </text>
          <text x={250} y={96} {...label} fill="var(--amber)">
            (tuberosidade maior)
          </text>
          {/* vetor resultante */}
          <path {...measure} d="M 236 112 A 48 48 0 0 1 266 152" strokeDasharray="4 3" />
          <path {...measure} d="M 266 152 L 258 149 M 266 152 L 264 144" />
          <text x={276} y={146} {...label} fill="var(--amber)">
            vetor de rotação externa
          </text>
          <text x={300} y={216} {...label} textAnchor="middle">
            Rotadores internos convertidos
          </text>
          <text x={300} y={230} {...label} textAnchor="middle">
            em rotadores externos e abdutores
          </text>
        </g>
      )}

      {key === "osteotomia" && (
        <g>
          <circle {...bone} cx={206} cy={104} r={25} />
          {/* fragmento proximal */}
          <path {...bone} d="M 188 120 L 220 114 L 228 168 L 196 174 Z" />
          {/* traço da osteotomia */}
          <path {...lesion} d="M 192 172 L 232 165" strokeWidth={2.6} />
          <text x={132} y={168} {...label} fill="var(--cortical)">
            osteotomia transversa
          </text>
          <text x={132} y={182} {...label} fill="var(--cortical)">
            (supracondiliana ou diafisária)
          </text>
          {/* fragmento distal rodado externamente */}
          <g transform="rotate(-16 212 172)">
            <path {...bone} d="M 196 174 L 228 168 L 250 246 L 218 254 Z" />
            {/* placa */}
            <path {...boneBack} d="M 226 150 L 240 148 L 252 240 L 238 242 Z" />
            {[160, 182, 208, 230].map((y) => (
              <circle key={y} {...boneBack} cx={236} cy={y} r={3.6} />
            ))}
          </g>
          {/* arco de rotação */}
          <path {...measure} d="M 258 200 A 58 58 0 0 0 286 158" />
          <path {...measure} d="M 286 158 L 279 163 M 286 158 L 285 166" />
          <text x={294} y={176} {...mono} fill="var(--amber)">
            ≈ 60-90° de
          </text>
          <text x={294} y={190} {...mono} fill="var(--amber)">
            rotação externa
          </text>
          <text x={300} y={122} {...label} textAnchor="middle">
            A articulação permanece
          </text>
          <text x={300} y={136} {...label} textAnchor="middle">
            incongruente: só o arco muda
          </text>
        </g>
      )}

      {key === "liberacao" ? (
        <text x={220} y={266} {...label} textAnchor="middle">
          <tspan x={220} dy="0">
            Alonga o contraturado, recentra a cabeça e devolve
          </tspan>
          <tspan x={220} dy="1.15em">
            ao acetábulo glenoidal a chance de remodelar —
          </tspan>
          <tspan x={220} dy="1.15em">
            só funciona enquanto a articulação é redutível.
          </tspan>
        </text>
      ) : (
        <text x={220} y={278} {...label} textAnchor="middle">
          {captions[key]}
        </text>
      )}
    </svg>
  );
};

/* -------------------------------------------------------------------------- */

export const figures: Record<string, FC<FigureProps>> = {
  "paralisia-braquial-obstetrica:anatomia": Anatomy,
  "paralisia-braquial-obstetrica:padroes": Patterns,
  "paralisia-braquial-obstetrica:narakas": Narakas,
  "paralisia-braquial-obstetrica:lesao-nervosa": NerveInjury,
  "paralisia-braquial-obstetrica:biceps-3-meses": BicepsTimeline,
  "paralisia-braquial-obstetrica:microcirurgia": Microsurgery,
  "paralisia-braquial-obstetrica:displasia-glenoumeral": GHDysplasia,
  "paralisia-braquial-obstetrica:cirurgia-sequela": SequelaeSurgery,
};
