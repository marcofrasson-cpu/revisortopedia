import type { FC } from "react";
import type { FigureProps } from "../../../types/topic";

/* ============================================================================
   Figuras esquemáticas originais — Torcicolo muscular congênito (TMC).
   Line-art de dois tons, desenho original, sem reprodução de material protegido.
   Cores exclusivamente por CSS var: ossos (--ink-soft / --surface), cartilagem e
   partes moles normais (--teal), fibrose/lesão/estrutura em risco (--cortical),
   medidas e ângulos (--amber), rótulos (--muted). Referência editorial:
   Rockwood and Wilkins' Fractures in Children, 10ª ed. (2024) /
   Tachdjian's Pediatric Orthopaedics, 6ª ed.
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

/** Partes moles normais (músculo, cartilagem, disco). */
const soft = {
  fill: "var(--teal-tint)",
  stroke: "var(--teal)",
  strokeWidth: 1.8,
  strokeLinejoin: "round" as const,
};

/** Músculo fibrosado / pseudotumor / tecido patológico. */
const fibrose = {
  fill: "var(--cortical-tint)",
  stroke: "var(--cortical)",
  strokeWidth: 2,
  strokeLinejoin: "round" as const,
};

const lesion = {
  fill: "none",
  stroke: "var(--cortical)",
  strokeWidth: 2.4,
  strokeLinecap: "round" as const,
};

const nerve = {
  fill: "none",
  stroke: "var(--teal-deep)",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
};

const measure = {
  fill: "none",
  stroke: "var(--amber)",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
};

const guide = {
  fill: "none",
  stroke: "var(--muted)",
  strokeWidth: 1.2,
  strokeDasharray: "5 4",
};

const leader = {
  fill: "none",
  stroke: "var(--muted)",
  strokeWidth: 1,
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

/** Ponto sobre um círculo, com 0° apontando para cima e sentido horário positivo. */
const polar = (cx: number, cy: number, r: number, deg: number): readonly [number, number] => {
  const rad = ((deg - 90) * Math.PI) / 180;
  return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)] as const;
};

/* ==========================================================================
   1. Anatomia — esternocleidomastoideo em vista anterior.
   Eixo de simetria em x = 230. O lado esquerdo da figura é o lado ACOMETIDO.
   ========================================================================== */

/** Ventre do ECM do lado esquerdo da figura; `kind` define o estado do músculo. */
const ScmStraps: FC<{ kind: "normal" | "fibrose" | "tumor" }> = ({ kind }) => {
  const st = kind === "normal" ? soft : fibrose;
  return (
    <g>
      {/* cabeça esternal — do mastoide ao manúbrio (oblíqua) */}
      <path {...st} d="M 166 142 L 182 148 L 220 252 L 206 258 Z" />
      {/* cabeça clavicular — do mastoide ao terço medial da clavícula (quase vertical) */}
      <path {...st} d="M 174 148 L 188 154 L 188 250 L 170 250 Z" />
      {kind === "tumor" ? (
        <ellipse {...fibrose} cx="192" cy="196" rx="14" ry="27" transform="rotate(-16 192 196)" />
      ) : null}
    </g>
  );
};

const Anatomy: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="-20 0 500 390"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
  >
    <title>{title ?? "Anatomia do esternocleidomastoideo em vista anterior"}</title>

    {/* coluna cervical, atrás */}
    {[168, 188, 208, 228, 248].map((y) => (
      <rect key={y} {...boneBack} x="214" y={y} width="32" height="14" rx="4" />
    ))}

    {/* crânio e mandíbula */}
    <path
      {...bone}
      d="M 230 20 C 268 20, 298 50, 298 90 C 298 112, 290 130, 278 142 L 182 142 C 170 130, 162 112, 162 90 C 162 50, 192 20, 230 20 Z"
    />
    <path
      {...bone}
      d="M 186 142 L 274 142 C 274 170, 258 192, 230 192 C 202 192, 186 170, 186 142 Z"
    />
    {/* processos mastoides — inserção do ECM */}
    <path {...bone} d="M 164 130 L 186 130 L 176 154 Z" />
    <path {...bone} d="M 296 130 L 274 130 L 284 154 Z" />

    {/* manúbrio e clavículas */}
    <path {...bone} d="M 204 252 L 256 252 L 252 300 L 208 300 Z" />
    <path {...bone} d="M 206 256 C 176 268, 140 264, 100 250 L 98 238 C 140 250, 178 252, 206 244 Z" />
    <path {...bone} d="M 254 256 C 284 268, 320 264, 360 250 L 362 238 C 320 250, 282 252, 254 244 Z" />

    {/* ECM acometido (esquerda da figura) e normal (direita, espelhado em x = 230) */}
    <ScmStraps kind="tumor" />
    <g transform="translate(460 0) scale(-1 1)">
      <ScmStraps kind="normal" />
    </g>

    {/* nervo acessório (XI) — penetra a face profunda do ECM na junção dos terços
        superior e médio e emerge na borda posterior */}
    <path {...nerve} d="M 262 168 C 286 178, 300 194, 312 214" />
    <circle fill="var(--teal-deep)" cx="262" cy="168" r="2.4" />

    {/* rótulos — lado acometido */}
    <path {...leader} d="M 96 128 L 168 138" />
    <text x="-16" y="126" {...label}>
      processo mastoide
    </text>
    <path {...leader} d="M 108 196 L 180 198" />
    <text x="-16" y="188" {...label} fill="var(--cortical)">
      ECM encurtado e fibrosado
    </text>
    <text x="-16" y="202" {...label} fill="var(--cortical)">
      (pseudotumor no lactente)
    </text>
    <path {...leader} d="M 106 262 L 212 256" />
    <text x="-16" y="266" {...label}>
      cabeça esternal
    </text>
    <path {...leader} d="M 106 290 L 178 252" />
    <text x="-16" y="294" {...label}>
      cabeça clavicular
    </text>

    {/* rótulos — lado normal */}
    <path {...leader} d="M 388 118 L 288 138" />
    <text x="392" y="116" {...label}>
      ECM normal
    </text>
    <text x="392" y="130" {...label}>
      (lado contralateral)
    </text>
    <path {...leader} d="M 392 176 L 266 170" />
    <text x="396" y="174" {...label} fill="var(--teal-deep)">
      n. acessório (XI)
    </text>
    <path {...leader} d="M 392 238 L 300 254" />
    <text x="396" y="236" {...label}>
      clavícula
    </text>
    <text x="396" y="300" {...label}>
      manúbrio
    </text>
    <path {...leader} d="M 392 296 L 254 288" />
    <path {...leader} d="M 392 210 L 250 220" />
    <text x="396" y="208" {...label}>
      coluna cervical
    </text>

    <text x="230" y="338" {...label} textAnchor="middle">
      O ECM une o mastoide (posterior e superior) ao manúbrio e à clavícula (anterior e inferior).
    </text>
    <text x="230" y="354" {...label} textAnchor="middle">
      Encurtá-lo aproxima o mastoide do esterno: a cabeça INCLINA para o lado do músculo
    </text>
    <text x="230" y="370" {...label} textAnchor="middle">
      e o queixo RODA para o lado oposto — a assinatura clínica do torcicolo muscular congênito.
    </text>
  </svg>
);

/* ==========================================================================
   2. Postura característica — inclinação ipsilateral e rotação contralateral.
   ========================================================================== */

const Posture: FC<FigureProps> = ({ className, title }) => {
  const tilt = -18;
  const rot = 26;
  const [rx, ry] = polar(360, 176, 74, rot);
  const [nx, ny] = polar(360, 176, 74, 0);

  return (
    <svg
      viewBox="-10 0 490 350"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
    >
      <title>{title ?? "Postura característica do torcicolo muscular congênito"}</title>

      {/* ---------------- painel A — vista anterior ---------------- */}
      <text x="120" y="24" {...label} textAnchor="middle" fill="var(--ink)">
        Vista anterior
      </text>

      {/* tronco e ombros — permanecem nivelados */}
      <path {...bone} d="M 52 262 C 72 240, 100 232, 120 232 C 140 232, 168 240, 188 262 L 192 330 L 48 330 Z" />
      <path {...guide} d="M 34 250 L 206 250" />
      <text x="34" y="244" {...label}>
        ombros nivelados
      </text>

      {/* eixo vertical de referência */}
      <path {...guide} d="M 120 258 L 120 60" />

      {/* bloco cabeça + pescoço, inclinado para o lado acometido (esquerda da figura) */}
      <g transform={`rotate(${tilt} 120 256)`}>
        {/* pescoço */}
        <path {...bone} d="M 104 250 L 136 250 L 134 196 L 106 196 Z" />
        {/* cabeça */}
        <ellipse {...bone} cx="120" cy="146" rx="46" ry="54" />
        {/* orelhas */}
        <ellipse {...boneBack} cx="74" cy="150" rx="7" ry="12" />
        <ellipse {...boneBack} cx="166" cy="150" rx="7" ry="12" />
        {/* face — nariz e queixo deslocados para o lado NÃO acometido (rotação) */}
        <ellipse {...boneBack} cx="106" cy="136" rx="6" ry="4" />
        <ellipse {...boneBack} cx="140" cy="136" rx="6" ry="4" />
        <path {...leader} d="M 138 152 L 144 166 L 136 168" />
        <path {...leader} d="M 126 184 C 136 184, 146 180, 150 174" />
        {/* ECM acometido, em corda */}
        <path {...fibrose} d="M 80 164 L 92 168 L 122 246 L 108 250 Z" />
      </g>

      {/* ângulo de inclinação */}
      <path {...measure} d="M 120 130 A 126 126 0 0 0 82 142" />
      <text x="60" y="118" {...mono} fill="var(--amber)">
        18°
      </text>
      <text x="-6" y="98" {...label} fill="var(--amber)">
        inclinação para
      </text>
      <text x="-6" y="112" {...label} fill="var(--amber)">
        o lado acometido
      </text>

      <path {...leader} d="M 196 200 L 106 214" />
      <text x="200" y="198" {...label} fill="var(--cortical)">
        ECM em corda
      </text>

      <text x="120" y="346" {...label} textAnchor="middle">
        Cabeça inclina para o ECM curto
      </text>

      {/* ---------------- painel B — vista do vértice ---------------- */}
      <path {...guide} d="M 232 30 L 232 336" />
      <text x="360" y="24" {...label} textAnchor="middle" fill="var(--ink)">
        Vista do vértice (de cima)
      </text>

      {/* posição neutra de referência */}
      <ellipse {...guide} cx="360" cy="176" rx="56" ry="70" />
      <path {...guide} d={`M 360 176 L ${nx} ${ny}`} />
      <text x={nx - 4} y={ny - 8} {...label} textAnchor="middle">
        neutro
      </text>

      {/* cabeça rodada — o queixo vai para o lado contralateral (direita da figura) */}
      <g transform={`rotate(${rot} 360 176)`}>
        <ellipse {...bone} cx="360" cy="176" rx="56" ry="70" />
        {/* nariz */}
        <path {...bone} d="M 352 110 L 368 110 L 360 96 Z" />
        {/* orelhas */}
        <ellipse {...boneBack} cx="304" cy="188" rx="6" ry="11" />
        <ellipse {...boneBack} cx="416" cy="188" rx="6" ry="11" />
        {/* ECM acometido, tracionando o mastoide para frente do lado esquerdo */}
        <path {...fibrose} d="M 306 200 C 320 220, 344 238, 358 244 L 366 232 C 344 224, 322 206, 316 194 Z" />
      </g>

      {/* arco de rotação */}
      <path {...measure} d={`M ${nx} ${ny} A 74 74 0 0 1 ${rx} ${ry}`} />
      <path {...measure} d={`M 360 176 L ${rx} ${ry}`} strokeDasharray="4 3" />
      <text x="404" y="100" {...mono} fill="var(--amber)">
        rotação
      </text>

      <path {...leader} d="M 268 262 L 322 226" />
      <text x="238" y="276" {...label} fill="var(--cortical)">
        ECM acometido
      </text>

      <text x="360" y="330" {...label} textAnchor="middle">
        Queixo roda para o lado oposto
      </text>
      <text x="360" y="346" {...label} textAnchor="middle">
        “orelha no ombro do lado doente, queixo no ombro sadio”
      </text>
    </svg>
  );
};

/* ==========================================================================
   3. Subgrupos clínicos de Cheng — pseudotumor, muscular e postural.
   ========================================================================== */

const CHENG = {
  tumor: {
    kind: "tumor" as const,
    nome: "Pseudotumor do ECM",
    freq: "≈55% dos casos",
    achado: "Massa fusiforme firme no terço médio/inferior do ventre",
    deficit: 45,
    cirurgia: "≈8% acabam operados",
  },
  muscular: {
    kind: "fibrose" as const,
    nome: "Torcicolo muscular",
    freq: "≈34% dos casos",
    achado: "Banda espessada e tensa, SEM massa palpável",
    deficit: 25,
    cirurgia: "≈3% acabam operados",
  },
  postural: {
    kind: "normal" as const,
    nome: "Torcicolo postural",
    freq: "≈11% dos casos",
    achado: "Só a preferência postural — sem massa nem banda tensa",
    deficit: 6,
    cirurgia: "0% operam",
  },
};

const Subgroups: FC<FigureProps> = ({ variant = "tumor", className, title }) => {
  const key = (variant in CHENG ? variant : "tumor") as keyof typeof CHENG;
  const g = CHENG[key];
  const cx = 350;
  const cy = 166;
  const r = 62;
  const [ax, ay] = polar(cx, cy, r, 0);
  const [bx, by] = polar(cx, cy, r, g.deficit);
  const st = g.kind === "normal" ? soft : fibrose;

  return (
    <svg
      viewBox="-10 0 470 350"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
    >
      <title>{title ?? `Subgrupos clínicos de Cheng — ${g.nome}`}</title>

      <text x="-6" y="24" {...label} fill="var(--ink)">
        {g.nome} — {g.freq}
      </text>

      {/* ------- pescoço em close, lado acometido ------- */}
      <path {...boneBack} d="M 96 44 L 152 44 L 158 92 L 90 92 Z" />
      <path {...bone} d="M 92 78 L 124 78 L 112 108 Z" />
      <text x="128" y="70" {...label}>
        mastoide
      </text>

      {[120, 142, 164, 186, 208, 230].map((y) => (
        <rect key={y} {...boneBack} x="150" y={y} width="30" height="15" rx="4" />
      ))}
      <text x="186" y="132" {...label}>
        coluna
      </text>
      <text x="186" y="146" {...label}>
        cervical
      </text>

      {/* clavícula e manúbrio */}
      <path {...bone} d="M 34 268 C 70 282, 116 284, 152 274 L 154 262 C 118 272, 72 270, 36 256 Z" />
      <path {...bone} d="M 148 262 L 190 262 L 188 302 L 150 302 Z" />
      <text x="196" y="278" {...label}>
        manúbrio
      </text>
      <text x="34" y="298" {...label}>
        clavícula
      </text>

      {/* ventre do ECM — o estado muda com o subgrupo */}
      <path {...st} d="M 96 100 L 116 100 L 164 258 L 146 264 Z" />
      <path {...st} d="M 102 102 L 120 106 L 108 262 L 86 260 Z" />
      {g.kind === "tumor" ? (
        <ellipse {...fibrose} cx="122" cy="180" rx="17" ry="32" transform="rotate(-10 122 180)" />
      ) : null}
      {g.kind === "fibrose" ? (
        <>
          <path {...lesion} d="M 106 120 L 140 250" strokeDasharray="6 5" />
          <path {...lesion} d="M 100 122 L 96 250" strokeDasharray="6 5" />
        </>
      ) : null}

      <path {...leader} d="M 60 178 L 92 180" />
      <text
        x="-6"
        y="164"
        {...label}
        fill={g.kind === "normal" ? "var(--teal-deep)" : "var(--cortical)"}
      >
        {g.kind === "tumor" ? "pseudotumor" : g.kind === "fibrose" ? "banda fibrosa" : "ECM normal"}
      </text>

      {/* ------- medidor do déficit de rotação passiva ------- */}
      <path {...guide} d="M 250 30 L 250 336" />
      <text x={cx} y="46" {...label} textAnchor="middle" fill="var(--ink)">
        Déficit de rotação passiva
      </text>

      <circle {...guide} cx={cx} cy={cy} r={r} />
      <path {...guide} d={`M ${cx} ${cy} L ${ax} ${ay}`} />
      <path {...measure} d={`M ${cx} ${cy} L ${bx} ${by}`} />
      <path
        {...measure}
        d={`M ${ax} ${ay} A ${r} ${r} 0 0 1 ${bx} ${by}`}
        strokeWidth={3}
      />
      <circle {...bone} cx={cx} cy={cy} r="9" />
      <text x={cx} y={cy + r + 22} {...mono} textAnchor="middle" fill="var(--amber)">
        ~{g.deficit}°
      </text>

      <text x={cx} y="266" {...label} textAnchor="middle">
        {g.achado}
      </text>
      <text x={cx} y="284" {...label} textAnchor="middle" fill="var(--cortical)">
        {g.cirurgia}
      </text>

      <text x="230" y="322" {...label} textAnchor="middle">
        O subgrupo e o déficit inicial de rotação são os dois melhores preditores do tempo de
      </text>
      <text x="230" y="338" {...label} textAnchor="middle">
        tratamento e da necessidade de cirurgia (Cheng, JBJS Am 2001 — 821 casos).
      </text>
    </svg>
  );
};

/* ==========================================================================
   4. Plagiocefalia — posicional (paralelogramo) × sinostose lambdoide (trapézio).
   ========================================================================== */

const Plagiocephaly: FC<FigureProps> = ({ variant = "posicional", className, title }) => {
  const sinostose = variant === "sinostose";

  const shape = sinostose
    ? "M 206 54 C 262 52, 302 98, 304 148 C 306 204, 264 264, 214 268 L 196 270 L 132 214 C 120 176, 122 116, 142 86 C 158 62, 180 54, 206 54 Z"
    : "M 206 54 C 256 54, 292 100, 296 150 C 300 206, 262 262, 214 268 L 196 268 L 128 198 C 118 160, 118 108, 140 82 C 156 60, 180 54, 206 54 Z";

  /* orelha do lado achatado: ANTERIOR na posicional, POSTERIOR na sinostose */
  const earA: readonly [number, number] = sinostose ? [132, 192] : [126, 132];

  return (
    <svg
      viewBox="-10 0 460 348"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
    >
      <title>
        {title ??
          (sinostose
            ? "Sinostose lambdoide — crânio em trapézio na vista do vértice"
            : "Plagiocefalia posicional — crânio em paralelogramo na vista do vértice")}
      </title>

      <text x="206" y="24" {...label} textAnchor="middle" fill="var(--ink)">
        Vista do vértice — {sinostose ? "sinostose lambdoide (trapézio)" : "plagiocefalia posicional (paralelogramo)"}
      </text>

      {/* contorno normal de referência */}
      <path {...guide} d="M 206 54 C 258 54, 294 106, 294 158 C 294 224, 254 268, 206 268 C 158 268, 118 224, 118 158 C 118 106, 154 54, 206 54 Z" />

      {/* crânio deformado */}
      <path {...bone} d={shape} />

      {/* nariz — referência anterior */}
      <path {...bone} d="M 198 56 L 214 56 L 206 40 Z" />
      <text x="206" y="34" {...label} textAnchor="middle">
        anterior
      </text>

      {/* orelhas */}
      <ellipse {...fibrose} cx={earA[0]} cy={earA[1]} rx="7" ry="12" />
      <ellipse {...boneBack} cx="294" cy="162" rx="7" ry="12" />
      <path {...guide} d={`M ${earA[0]} ${earA[1]} L 294 162`} />

      {/* achatamento occipital do lado acometido */}
      <path {...lesion} d={sinostose ? "M 196 270 L 132 214" : "M 196 268 L 128 198"} />
      <path {...leader} d={sinostose ? "M 84 246 L 160 244" : "M 84 232 L 158 234"} />
      <text x="-6" y={sinostose ? 262 : 248} {...label} fill="var(--cortical)">
        achatamento occipital
      </text>

      {/* diagonais craniais — diferença diagonal transcraniana */}
      <path {...measure} d="M 146 96 L 276 226" strokeDasharray="4 3" />
      <path {...measure} d="M 268 96 L 148 220" />
      <text x="290" y="240" {...mono} fill="var(--amber)">
        Δ diagonal
      </text>

      {sinostose ? (
        <>
          {/* crista sobre a sutura lambdoide fundida + protuberância mastoide */}
          <path {...lesion} d="M 148 216 C 166 236, 186 254, 200 264" strokeWidth={3.2} />
          <path {...leader} d="M 348 122 L 300 138" />
          <text x="352" y="120" {...label} fill="var(--cortical)">
            abaulamento
          </text>
          <text x="352" y="134" {...label} fill="var(--cortical)">
            frontal CONTRAlateral
          </text>
          <path {...leader} d="M 80 190 L 124 194" />
          <text x="-6" y="188" {...label} fill="var(--cortical)">
            orelha POSTERIOR
          </text>
          <text x="-6" y="202" {...label} fill="var(--cortical)">
            + mastoide proeminente
          </text>
          <text x="206" y="304" {...label} textAnchor="middle" fill="var(--cortical)">
            TRAPÉZIO — orelha empurrada para trás e para baixo, crista palpável na sutura lambdoide.
          </text>
          <text x="206" y="320" {...label} textAnchor="middle">
            Não é posicional: não responde ao reposicionamento. TC → avaliação craniofacial.
          </text>
        </>
      ) : (
        <>
          <path {...leader} d="M 342 112 L 288 132" />
          <text x="346" y="110" {...label}>
            occipital
          </text>
          <text x="346" y="124" {...label}>
            contralateral cheio
          </text>
          <path {...leader} d="M 80 106 L 132 110" />
          <text x="-6" y="104" {...label} fill="var(--amber)">
            abaulamento frontal
          </text>
          <text x="-6" y="118" {...label} fill="var(--amber)">
            IPSIlateral
          </text>
          <path {...leader} d="M 76 146 L 120 136" />
          <text x="-6" y="150" {...label} fill="var(--cortical)">
            orelha ANTERIOR
          </text>
          <text x="206" y="304" {...label} textAnchor="middle" fill="var(--amber)">
            PARALELOGRAMO — orelha empurrada para a FRENTE, fronte ipsilateral abaulada.
          </text>
          <text x="206" y="320" {...label} textAnchor="middle">
            Deformidade moldável, secundária ao TMC e ao decúbito: responde a reposicionamento e fisioterapia.
          </text>
        </>
      )}

      <text x="206" y="340" {...label} textAnchor="middle">
        A posição da ORELHA é o discriminador mais confiável entre as duas.
      </text>
    </svg>
  );
};

/* ==========================================================================
   5. Rastreio do quadril — associação TMC × displasia do desenvolvimento (DDQ).
   ========================================================================== */

const HipScreen: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="-10 0 470 360"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
  >
    <title>{title ?? "Rastreio do quadril no torcicolo muscular congênito"}</title>

    <text x="230" y="24" {...label} textAnchor="middle" fill="var(--ink)">
      Radiografia AP da bacia — sempre rastreie o quadril
    </text>

    {/* sacro */}
    <rect {...boneBack} x="208" y="94" width="44" height="76" rx="10" />

    {/* asas ilíacas */}
    <path {...boneBack} d="M 176 158 C 176 120, 140 78, 76 60 C 48 88, 44 130, 72 158 Z" />
    <path {...boneBack} d="M 284 158 C 284 120, 320 78, 384 60 C 412 88, 416 130, 388 158 Z" />

    {/* ísquio / púbis */}
    <path {...bone} d="M 158 202 C 176 218, 200 226, 224 228 L 224 248 C 190 246, 162 230, 146 210 Z" />
    <path {...bone} d="M 302 202 C 284 218, 260 226, 236 228 L 236 248 C 270 246, 298 230, 314 210 Z" />

    {/* acetábulos — arco espesso; esquerdo raso e oblíquo, direito bem formado */}
    <path
      fill="none"
      stroke="var(--ink-soft)"
      strokeWidth="7"
      strokeLinecap="round"
      d="M 144 132 C 166 138, 176 150, 176 168 C 176 186, 168 196, 158 202"
    />
    <path
      fill="none"
      stroke="var(--ink-soft)"
      strokeWidth="7"
      strokeLinecap="round"
      d="M 322 144 C 300 138, 284 150, 284 168 C 284 186, 292 196, 302 202"
    />

    {/* cartilagem trirradiada */}
    <path fill="none" stroke="var(--teal)" strokeWidth="4" strokeLinecap="round" d="M 170 150 L 182 166" />
    <path fill="none" stroke="var(--teal)" strokeWidth="4" strokeLinecap="round" d="M 290 150 L 278 166" />

    {/* fêmures */}
    <path {...bone} d="M 118 156 L 94 190 L 82 282 L 106 284 L 114 192 L 138 160 Z" />
    <path {...bone} d="M 312 194 L 338 222 L 350 300 L 326 302 L 320 226 L 292 196 Z" />

    {/* cabeças femorais — cartilaginosas no lactente */}
    <circle {...soft} cx="128" cy="140" r="18" />
    <circle {...soft} cx="300" cy="176" r="18" />

    {/* linha de Hilgenreiner */}
    <path {...measure} d="M 44 158 L 416 158" />
    <text x="44" y="152" {...label} fill="var(--amber)">
      Hilgenreiner
    </text>

    {/* linhas de Perkin */}
    <path {...measure} d="M 144 96 L 144 232" strokeDasharray="5 4" />
    <path {...measure} d="M 322 96 L 322 232" strokeDasharray="5 4" />
    <text x="326" y="106" {...label} fill="var(--amber)">
      Perkin
    </text>

    {/* índices acetabulares */}
    <path {...measure} d="M 176 158 L 144 132" />
    <path {...measure} d="M 172 152 A 26 26 0 0 0 158 144" />
    <text x="184" y="130" {...mono} fill="var(--amber)">
      ~38°
    </text>
    <path {...measure} d="M 284 158 L 322 144" />
    <path {...measure} d="M 296 155 A 26 26 0 0 1 308 150" />
    <text x="290" y="132" {...mono} fill="var(--amber)">
      ~20°
    </text>

    {/* linha de Shenton */}
    <path {...measure} d="M 306 200 C 300 216, 288 226, 262 230" />
    <text x="248" y="246" {...label} fill="var(--amber)">
      Shenton contínua
    </text>
    <path {...lesion} d="M 112 190 C 118 206, 128 216, 148 222" strokeDasharray="5 5" />
    <path {...lesion} d="M 166 206 C 180 214, 196 220, 214 222" strokeDasharray="5 5" />
    <text x="60" y="248" {...label} fill="var(--cortical)">
      Shenton quebrada
    </text>

    <path {...leader} d="M 90 108 L 122 126" />
    <text x="-6" y="98" {...label} fill="var(--cortical)">
      cabeça femoral
    </text>
    <text x="-6" y="112" {...label} fill="var(--cortical)">
      súpero-LATERAL = displásica
    </text>

    <path {...leader} d="M 392 190 L 318 178" />
    <text x="396" y="180" {...label} fill="var(--teal-deep)">
      normal:
    </text>
    <text x="396" y="194" {...label} fill="var(--teal-deep)">
      ínfero-MEDIAL
    </text>

    <text x="230" y="326" {...label} textAnchor="middle">
      A DDQ coexiste com o TMC em ~5–12% dos casos — bem abaixo dos 20% classicamente citados.
    </text>
    <text x="230" y="342" {...label} textAnchor="middle">
      Todo lactente com TMC exige EXAME clínico do quadril; a imagem segue os critérios habituais
    </text>
    <text x="230" y="358" {...label} textAnchor="middle">
      de rastreio (exame alterado, apresentação pélvica, história familiar).
    </text>
  </svg>
);

/* ==========================================================================
   6. Alongamento passivo — rotação e inclinação lateral (honra activeStep).
   ========================================================================== */

const Stretching: FC<FigureProps> = ({ activeStep, className, title }) => {
  /* passo 3 = alongamento em rotação; passo 4 = alongamento em inclinação */
  const rotOn = activeStep === undefined || activeStep === 3;
  const latOn = activeStep === undefined || activeStep === 4;
  const dim = 0.32;

  return (
    <svg
      viewBox="-10 0 490 344"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
    >
      <title>{title ?? "Alongamento passivo do esternocleidomastoideo"}</title>

      {/* ---------------- painel A — alongamento em ROTAÇÃO ---------------- */}
      <g opacity={rotOn ? 1 : dim}>
        {rotOn && activeStep === 3 ? (
          <rect
            x="-4"
            y="34"
            width="238"
            height="278"
            rx="12"
            fill="none"
            stroke="var(--amber)"
            strokeWidth="1.6"
            strokeDasharray="6 5"
          />
        ) : null}

        <text x="114" y="26" {...label} textAnchor="middle" fill="var(--ink)">
          1. Rotação — queixo PARA o lado acometido
        </text>

        {/* lactente em decúbito dorsal, visto de cima */}
        <path {...bone} d="M 62 244 C 62 214, 88 198, 114 198 C 140 198, 166 214, 166 244 L 168 300 L 60 300 Z" />
        <text x="114" y="290" {...label} textAnchor="middle">
          ombros fixos
        </text>

        {/* mão do terapeuta estabilizando o ombro do lado acometido */}
        <rect {...soft} x="46" y="226" width="34" height="20" rx="8" transform="rotate(-14 63 236)" />
        <path {...measure} d="M 62 236 L 44 236" />
        <text x="-6" y="222" {...label} fill="var(--teal-deep)">
          fixa o ombro
        </text>

        <g transform="rotate(30 114 208)">
          {/* pescoço e cabeça vistos de cima; nariz aponta para cima */}
          <path {...bone} d="M 100 206 L 128 206 L 126 176 L 102 176 Z" />
          <ellipse {...bone} cx="114" cy="128" rx="42" ry="52" />
          <path {...bone} d="M 106 80 L 122 80 L 114 66 Z" />
          <ellipse {...boneBack} cx="72" cy="140" rx="6" ry="11" />
          <ellipse {...boneBack} cx="156" cy="140" rx="6" ry="11" />
          {/* ECM acometido, sob tração */}
          <path {...fibrose} d="M 76 152 C 88 176, 102 194, 112 202 L 122 192 C 106 182, 92 164, 88 148 Z" />
        </g>

        {/* seta de rotação */}
        <path {...measure} d="M 152 92 A 88 88 0 0 1 176 132" strokeWidth={2.6} />
        <path fill="var(--amber)" d="M 176 132 L 168 122 L 182 120 Z" />
        <text x="182" y="102" {...label} fill="var(--amber)">
          rodar o queixo
        </text>
        <text x="182" y="116" {...label} fill="var(--amber)">
          PARA o lado curto
        </text>

        <text x="114" y="326" {...label} textAnchor="middle">
          Alonga a cabeça esternal
        </text>
        <text x="114" y="340" {...label} textAnchor="middle">
          (mastoide afasta-se do esterno)
        </text>
      </g>

      {/* ---------------- painel B — alongamento em INCLINAÇÃO ---------------- */}
      <path {...guide} d="M 240 30 L 240 336" />

      <g opacity={latOn ? 1 : dim}>
        {latOn && activeStep === 4 ? (
          <rect
            x="248"
            y="34"
            width="236"
            height="278"
            rx="12"
            fill="none"
            stroke="var(--amber)"
            strokeWidth="1.6"
            strokeDasharray="6 5"
          />
        ) : null}

        <text x="366" y="26" {...label} textAnchor="middle" fill="var(--ink)">
          2. Inclinação — orelha PARA LONGE do lado acometido
        </text>

        <path {...bone} d="M 314 246 C 314 216, 340 200, 366 200 C 392 200, 418 216, 418 246 L 420 300 L 312 300 Z" />
        <path {...guide} d="M 296 214 L 436 214" />
        <text x="298" y="208" {...label}>
          ombro fixo
        </text>

        {/* mão do terapeuta pressionando o ombro do lado acometido */}
        <rect {...soft} x="298" y="204" width="34" height="20" rx="8" />
        <path {...measure} d="M 314 226 L 314 244" />
        <path fill="var(--amber)" d="M 314 246 L 308 236 L 320 236 Z" />

        {/* cabeça inclinada para o lado NÃO acometido (direita da figura) */}
        <g transform="rotate(24 366 254)">
          <path {...bone} d="M 350 248 L 382 248 L 380 196 L 352 196 Z" />
          <ellipse {...bone} cx="366" cy="148" rx="44" ry="52" />
          <ellipse {...boneBack} cx="322" cy="152" rx="7" ry="12" />
          <ellipse {...boneBack} cx="410" cy="152" rx="7" ry="12" />
          <ellipse {...boneBack} cx="352" cy="138" rx="6" ry="4" />
          <ellipse {...boneBack} cx="382" cy="138" rx="6" ry="4" />
          {/* ECM acometido, estirado ao máximo */}
          <path {...fibrose} d="M 324 166 L 338 170 L 366 244 L 352 250 Z" />
          <path {...lesion} d="M 330 182 L 358 240" strokeDasharray="3 4" />
        </g>

        {/* seta de inclinação */}
        <path {...measure} d="M 366 78 A 176 176 0 0 1 424 96" strokeWidth={2.6} />
        <path fill="var(--amber)" d="M 424 96 L 412 92 L 418 84 Z" />
        <text x="386" y="66" {...label} fill="var(--amber)">
          orelha ao ombro oposto
        </text>

        <text x="366" y="326" {...label} textAnchor="middle">
          Alonga a cabeça clavicular
        </text>
        <text x="366" y="340" {...label} textAnchor="middle">
          Manter 10–15 s, sem dor nem choro
        </text>
      </g>
    </svg>
  );
};

/* ==========================================================================
   7. Diagnóstico diferencial — torcicolo NÃO muscular.
   ========================================================================== */

const Differential: FC<FigureProps> = ({ variant = "ocular", className, title }) => {
  if (variant === "klippel-feil") {
    return (
      <svg
        viewBox="-10 0 460 340"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        className={className}
      >
        <title>{title ?? "Síndrome de Klippel-Feil — fusão congênita de vértebras cervicais"}</title>

        <text x="220" y="24" {...label} textAnchor="middle" fill="var(--ink)">
          Torcicolo ÓSSEO — síndrome de Klippel-Feil (perfil da coluna cervical)
        </text>

        {/* occipital */}
        <path {...bone} d="M 130 56 C 176 44, 236 48, 262 72 L 258 96 L 132 96 Z" />
        <text x="272" y="70" {...label}>
          occipital
        </text>

        {/* C1 e C2 */}
        <rect {...bone} x="148" y="104" width="76" height="18" rx="5" />
        <path {...bone} d="M 148 128 L 224 128 L 224 156 L 148 156 Z" />
        <path {...bone} d="M 178 128 L 194 128 L 192 106 L 180 106 Z" />
        <text x="240" y="118" {...label}>
          C1
        </text>
        <text x="240" y="148" {...label}>
          C2 (odontoide)
        </text>

        {/* C3–C4 fundidos — bloco, SEM espaço discal */}
        <path {...fibrose} d="M 146 164 L 226 164 L 226 224 L 146 224 Z" />
        <path {...lesion} d="M 146 194 L 226 194" strokeDasharray="3 5" />
        <text x="240" y="190" {...label} fill="var(--cortical)">
          C3–C4 FUNDIDOS
        </text>
        <text x="240" y="204" {...label} fill="var(--cortical)">
          sem disco interposto
        </text>

        {/* C5–C7 normais, com discos */}
        {[232, 268, 304].map((y) => (
          <g key={y}>
            <rect {...bone} x="146" y={y} width="80" height="26" rx="4" />
            <rect {...soft} x="146" y={y + 26} width="80" height="8" rx="3" />
          </g>
        ))}
        <text x="240" y="252" {...label}>
          C5
        </text>
        <path {...leader} d="M 128 296 L 144 292" />
        <text x="52" y="300" {...label} fill="var(--teal-deep)">
          disco (móvel)
        </text>

        {/* pescoço curto e implantação baixa dos cabelos */}
        <path {...measure} d="M 100 96 L 100 224" />
        <path {...measure} d="M 94 96 L 106 96 M 94 224 L 106 224" />
        <text x="-6" y="160" {...label} fill="var(--amber)">
          pescoço curto
        </text>
        <path {...lesion} d="M 118 74 C 108 84, 104 96, 104 106" />
        <text x="-6" y="72" {...label} fill="var(--cortical)">
          implantação baixa
        </text>
        <text x="-6" y="86" {...label} fill="var(--cortical)">
          dos cabelos
        </text>

        <text x="220" y="330" {...label} textAnchor="middle">
          Tríade clássica: pescoço curto, implantação baixa dos cabelos e limitação da mobilidade cervical.
        </text>
      </svg>
    );
  }

  if (variant === "c1c2") {
    const rot = 24;
    return (
      <svg
        viewBox="-10 0 460 340"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        className={className}
      >
        <title>{title ?? "Subluxação rotatória atlantoaxial — vista axial de C1 sobre C2"}</title>

        <text x="220" y="24" {...label} textAnchor="middle" fill="var(--ink)">
          Torcicolo ARTICULAR — subluxação rotatória C1–C2 (vista axial)
        </text>

        {/* corpo de C2 e odontoide, fixos */}
        <path {...boneBack} d="M 176 214 C 176 246, 264 246, 264 214 C 264 190, 176 190, 176 214 Z" />
        <circle {...bone} cx="220" cy="150" r="17" />
        <text x="278" y="222" {...label}>
          corpo de C2
        </text>
        <path {...leader} d="M 276 148 L 238 150" />
        <text x="280" y="146" {...label}>
          odontoide (fixo)
        </text>

        {/* anel de C1, rodado sobre o odontoide */}
        <g transform={`rotate(${rot} 220 150)`}>
          <path
            {...bone}
            d="M 220 96 C 268 96, 300 130, 300 166 C 300 200, 272 226, 240 232 L 236 210 C 258 204, 274 188, 274 166 C 274 140, 250 122, 220 122 C 190 122, 166 140, 166 166 C 166 188, 182 204, 204 210 L 200 232 C 168 226, 140 200, 140 166 C 140 130, 172 96, 220 96 Z"
          />
          {/* massas laterais */}
          <ellipse {...bone} cx="164" cy="152" rx="18" ry="14" />
          <ellipse {...bone} cx="276" cy="152" rx="18" ry="14" />
          <path {...lesion} d="M 196 124 L 244 124" strokeDasharray="4 4" />
        </g>

        {/* referência neutra */}
        <path {...guide} d="M 220 150 L 220 76" />
        <path {...guide} d="M 140 150 L 300 150" />

        {/* arco de rotação */}
        <path {...measure} d="M 220 76 A 74 74 0 0 1 250 82" strokeWidth={2.6} />
        <path fill="var(--amber)" d="M 250 82 L 240 76 L 244 68 Z" />
        <text x="256" y="72" {...mono} fill="var(--amber)">
          C1 roda sobre C2
        </text>

        <path {...leader} d="M 92 176 L 152 162" />
        <text x="-6" y="172" {...label} fill="var(--cortical)">
          massas laterais
        </text>
        <text x="-6" y="186" {...label} fill="var(--cortical)">
          assimétricas
        </text>

        <text x="220" y="288" {...label} textAnchor="middle" fill="var(--cortical)">
          Postura em “cock-robin”: inclinação + rotação PARA O MESMO padrão do TMC, porém
        </text>
        <text x="220" y="304" {...label} textAnchor="middle" fill="var(--cortical)">
          o ECM está tenso do lado CONTRALATERAL à inclinação (tenta corrigir, não causa).
        </text>
        <text x="220" y="322" {...label} textAnchor="middle">
          Início agudo, dor e recusa a mover o pescoço — frequentemente após infecção de vias aéreas
        </text>
        <text x="220" y="336" {...label} textAnchor="middle">
          (síndrome de Grisel) ou trauma. TC dinâmica confirma. NÃO é torcicolo muscular congênito.
        </text>
      </svg>
    );
  }

  /* variante padrão: torcicolo ocular */
  return (
    <svg
      viewBox="-10 0 470 340"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
    >
      <title>{title ?? "Torcicolo ocular — inclinação compensatória por paresia do oblíquo superior"}</title>

      <text x="228" y="24" {...label} textAnchor="middle" fill="var(--ink)">
        Torcicolo OCULAR — paresia do oblíquo superior (IV par)
      </text>

      {/* painel A — cabeça inclinada, olho acometido mais alto */}
      <g transform="rotate(-16 120 268)">
        <path {...bone} d="M 104 262 L 136 262 L 134 212 L 106 212 Z" />
        <ellipse {...bone} cx="120" cy="162" rx="46" ry="54" />
        <ellipse {...boneBack} cx="74" cy="166" rx="7" ry="12" />
        <ellipse {...boneBack} cx="166" cy="166" rx="7" ry="12" />
        {/* olho acometido (esquerda da figura) hipertrópico — mais alto */}
        <ellipse {...fibrose} cx="100" cy="142" rx="11" ry="7" />
        <ellipse {...soft} cx="142" cy="154" rx="11" ry="7" />
        <circle fill="var(--ink-soft)" cx="100" cy="142" r="3" />
        <circle fill="var(--ink-soft)" cx="142" cy="154" r="3" />
        {/* ECM: NORMAL, sem banda nem massa */}
        <path {...soft} d="M 82 180 L 94 184 L 122 258 L 108 262 Z" />
      </g>
      <path {...guide} d="M 120 268 L 120 76" />
      <path {...measure} d="M 120 150 A 118 118 0 0 0 88 160" />
      <text x="66" y="140" {...mono} fill="var(--amber)">
        16°
      </text>
      <path {...leader} d="M 208 132 L 148 144" />
      <text x="212" y="126" {...label} fill="var(--cortical)">
        olho hipertrópico
      </text>
      <text x="212" y="140" {...label} fill="var(--cortical)">
        (mais alto)
      </text>
      <path {...leader} d="M 208 218 L 116 226" />
      <text x="212" y="216" {...label} fill="var(--teal-deep)">
        ECM macio, sem banda
      </text>
      <text x="212" y="230" {...label} fill="var(--teal-deep)">
        e sem déficit de rotação
      </text>
      <text x="120" y="322" {...label} textAnchor="middle">
        Inclina para fundir as imagens
      </text>

      {/* painel B — oclusão do olho: a inclinação desaparece */}
      <path {...guide} d="M 296 40 L 296 330" />
      <text x="382" y="60" {...label} textAnchor="middle" fill="var(--ink)">
        Ocluir um olho
      </text>

      <path {...bone} d="M 366 262 L 398 262 L 396 212 L 368 212 Z" />
      <ellipse {...bone} cx="382" cy="162" rx="46" ry="54" />
      <ellipse {...boneBack} cx="336" cy="166" rx="7" ry="12" />
      <ellipse {...boneBack} cx="428" cy="166" rx="7" ry="12" />
      {/* tampão ocular */}
      <path {...fibrose} d="M 348 140 L 376 140 L 376 158 L 348 158 Z" />
      <path {...lesion} d="M 348 140 L 340 128" />
      <path {...lesion} d="M 376 140 L 424 132" />
      <ellipse {...soft} cx="404" cy="150" rx="11" ry="7" />
      <circle fill="var(--ink-soft)" cx="404" cy="150" r="3" />
      <path {...soft} d="M 344 180 L 356 184 L 384 258 L 370 262 Z" />
      <path {...guide} d="M 382 268 L 382 76" />
      <path {...measure} d="M 382 100 L 382 84" />
      <text x="392" y="94" {...mono} fill="var(--amber)">
        0°
      </text>

      <text x="382" y="322" {...label} textAnchor="middle" fill="var(--amber)">
        A cabeça ENDIREITA — teste-chave
      </text>
      <text x="382" y="336" {...label} textAnchor="middle">
        Encaminhar ao oftalmologista
      </text>
      <text x="120" y="336" {...label} textAnchor="middle">
        Sem massa, sem restrição passiva
      </text>
    </svg>
  );
};

/* ==========================================================================
   8. Liberação cirúrgica do ECM — unipolar × bipolar.
   ========================================================================== */

const Release: FC<FigureProps> = ({ variant = "unipolar", className, title }) => {
  const bipolar = variant === "bipolar";

  return (
    <svg
      viewBox="-10 0 470 356"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
    >
      <title>
        {title ??
          (bipolar
            ? "Liberação bipolar do esternocleidomastoideo"
            : "Liberação unipolar (distal) do esternocleidomastoideo")}
      </title>

      <text x="180" y="24" {...label} textAnchor="middle" fill="var(--ink)">
        Liberação {bipolar ? "BIPOLAR — distal + mastoide" : "UNIPOLAR — só a extremidade distal"}
      </text>

      {/* crânio e mastoide */}
      <path {...boneBack} d="M 118 46 C 168 34, 236 40, 262 68 L 258 96 L 116 96 Z" />
      <path {...bone} d="M 122 84 L 158 84 L 142 122 Z" />
      <text x="164" y="82" {...label}>
        processo mastoide
      </text>

      {/* coluna cervical */}
      {[112, 138, 164, 190, 216, 242].map((y) => (
        <rect key={y} {...boneBack} x="196" y={y} width="34" height="18" rx="4" />
      ))}

      {/* clavícula e manúbrio */}
      <path {...bone} d="M 34 288 C 74 302, 128 304, 168 294 L 170 280 C 130 292, 78 290, 36 274 Z" />
      <path {...bone} d="M 164 282 L 210 282 L 208 326 L 166 326 Z" />
      <text x="216" y="302" {...label}>
        manúbrio
      </text>
      <text x="34" y="322" {...label}>
        clavícula
      </text>

      {/* ventre do ECM contraturado */}
      <path {...fibrose} d="M 126 114 L 148 114 L 186 276 L 166 284 Z" />
      <path {...fibrose} d="M 132 116 L 152 122 L 128 282 L 106 278 Z" />
      <path {...leader} d="M 78 200 L 116 200" />
      <text x="-6" y="196" {...label} fill="var(--cortical)">
        ECM contraturado
      </text>

      {/* estruturas em risco */}
      <path {...nerve} d="M 214 92 C 194 108, 176 128, 164 150" />
      <circle fill="var(--teal-deep)" cx="164" cy="150" r="2.4" />
      <path {...leader} d="M 258 128 L 200 108" />
      <text x="262" y="120" {...label} fill={bipolar ? "var(--cortical)" : "var(--teal-deep)"}>
        n. acessório (XI)
      </text>
      <text x="262" y="134" {...label} fill={bipolar ? "var(--cortical)" : "var(--teal-deep)"}>
        {bipolar ? "EM RISCO na liberação proximal" : "poupado (longe da via distal)"}
      </text>

      <path {...nerve} d="M 108 148 C 92 164, 84 184, 82 204" strokeDasharray="4 3" />
      <path {...leader} d="M 62 148 L 104 150" />
      <text x="-6" y="144" {...label} fill="var(--teal-deep)">
        n. auricular magno
      </text>

      {/* ------- osteotomia/tenotomia: níveis de liberação ------- */}
      {/* distal — comum às duas técnicas */}
      <path {...lesion} d="M 88 260 L 196 254" strokeWidth={3} />
      <path {...measure} d="M 100 244 L 100 232 M 176 240 L 176 228" />
      <text x="212" y="252" {...label} fill="var(--cortical)">
        secção distal das
      </text>
      <text x="212" y="266" {...label} fill="var(--cortical)">
        DUAS cabeças
      </text>
      <text x="212" y="280" {...label} fill="var(--amber)">
        incisão ~1–2 cm acima
      </text>
      <text x="212" y="294" {...label} fill="var(--amber)">
        e paralela à clavícula
      </text>

      {bipolar ? (
        <>
          {/* proximal — só na bipolar */}
          <path {...lesion} d="M 118 128 L 160 128" strokeWidth={3} />
          <path {...leader} d="M 88 118 L 122 126" />
          <text x="-6" y="114" {...label} fill="var(--cortical)">
            secção proximal
          </text>
          <text x="-6" y="128" {...label} fill="var(--cortical)">
            (inserção mastóidea)
          </text>
          <text x="180" y="342" {...label} textAnchor="middle">
            Reservada à contratura grave/negligenciada — corrige mais, mas expõe o XI e apaga o
          </text>
          <text x="180" y="356" {...label} textAnchor="middle">
            contorno em V do pescoço (sequela estética).
          </text>
        </>
      ) : (
        <>
          <path {...guide} d="M 118 128 L 160 128" />
          <text x="-6" y="114" {...label}>
            inserção mastóidea
          </text>
          <text x="-6" y="128" {...label}>
            PRESERVADA
          </text>
          <text x="180" y="342" {...label} textAnchor="middle">
            Primeira escolha na maioria: menos invasiva, poupa o nervo acessório e mantém o
          </text>
          <text x="180" y="356" {...label} textAnchor="middle">
            contorno em V do pescoço. Resultados comparáveis aos da bipolar.
          </text>
        </>
      )}

      {/* correção obtida — inset com a cabeça reequilibrada */}
      <path {...guide} d="M 300 150 L 300 320" />
      <g transform="translate(0 6)">
        <text x="386" y="170" {...label} textAnchor="middle" fill="var(--ink)">
          Resultado imediato
        </text>
        <path {...guide} d="M 386 300 L 386 190" />
        <path {...bone} d="M 374 296 L 398 296 L 396 256 L 376 256 Z" />
        <ellipse {...bone} cx="386" cy="222" rx="34" ry="38" />
        <ellipse {...boneBack} cx="352" cy="226" rx="5" ry="9" />
        <ellipse {...boneBack} cx="420" cy="226" rx="5" ry="9" />
        <path {...soft} d="M 358 238 L 368 242 L 388 292 L 376 296 Z" />
        <path {...measure} d="M 386 196 L 386 184" />
        <text x="396" y="192" {...mono} fill="var(--amber)">
          0°
        </text>
        <text x="386" y="318" {...label} textAnchor="middle">
          Cabeça centrada na mesa
        </text>
      </g>
    </svg>
  );
};

/* -------------------------------------------------------------------------- */

export const figures: Record<string, FC<FigureProps>> = {
  "torcicolo-muscular-congenito:anatomia": Anatomy,
  "torcicolo-muscular-congenito:postura": Posture,
  "torcicolo-muscular-congenito:subgrupos": Subgroups,
  "torcicolo-muscular-congenito:plagiocefalia": Plagiocephaly,
  "torcicolo-muscular-congenito:rastreio-quadril": HipScreen,
  "torcicolo-muscular-congenito:alongamento": Stretching,
  "torcicolo-muscular-congenito:diferencial": Differential,
  "torcicolo-muscular-congenito:liberacao": Release,
};
