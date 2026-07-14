import type { FC } from "react";
import type { FigureProps } from "../../../types/topic";

/* ============================================================================
   Figuras esquemáticas originais — Pé torto congênito (talipes equinovaro).
   Line-art de dois tons, desenho original, sem reprodução de material protegido.
   Cores exclusivamente por CSS var: ossos (--ink-soft / --surface), cartilagem e
   fise (--teal), deformidade/tenotomia (--cortical), medidas e ângulos (--amber),
   rótulos (--muted). Referência editorial: Rockwood and Wilkins' Fractures in
   Children, 10ª ed. (2024) / Tachdjian's Pediatric Orthopaedics, 6ª ed.
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

const cartilage = {
  fill: "var(--teal-tint)",
  stroke: "var(--teal)",
  strokeWidth: 1.8,
  strokeLinejoin: "round" as const,
};

const lesion = {
  fill: "none",
  stroke: "var(--cortical)",
  strokeWidth: 2.4,
  strokeLinecap: "round" as const,
};

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
   Esqueleto do pé em vista dorsal (pé direito; medial à esquerda, dedos abaixo).
   `swing` roda o bloco médio-antepé em torno da cabeça do talus (adução);
   `heelSwing` roda o calcâneo sob o talus (adução/inversão do retropé).
   -------------------------------------------------------------------------- */

const FootPlan: FC<{ deformed?: boolean }> = ({ deformed = false }) => {
  const swing = deformed ? 30 : 0;
  const heelSwing = deformed ? 16 : 0;

  return (
    <g>
      {/* pilão tibial e maléolos (fixos) */}
      <path {...boneBack} d="M 88 16 L 146 16 L 150 46 C 132 58, 100 58, 84 46 Z" />
      <circle {...boneBack} cx="74" cy="58" r="13" />
      <circle {...boneBack} cx="154" cy="62" r="13" />

      {/* calcâneo — roda sob o talus no pé torto */}
      <g transform={`rotate(${heelSwing} 118 72)`}>
        <path
          {...boneBack}
          d="M 112 30 C 98 38, 92 62, 94 90 C 96 118, 104 142, 120 152 C 136 160, 150 150, 152 132 C 156 104, 150 66, 138 40 C 132 28, 122 24, 112 30 Z"
        />
        {/* sustentáculo do talus (prateleira medial) */}
        <path {...boneBack} d="M 94 100 C 84 102, 80 112, 86 120 C 93 126, 101 121, 100 111 Z" />
      </g>

      {/* talus — corpo, colo e cabeça (referência fixa) */}
      <path
        {...bone}
        d="M 106 32 C 92 42, 90 68, 102 82 C 114 94, 134 90, 140 74 C 146 56, 138 36, 124 30 C 118 26, 111 27, 106 32 Z"
      />
      <path {...bone} d="M 105 80 C 101 96, 101 116, 105 130 L 124 128 C 128 112, 129 96, 127 78 Z" />
      <circle {...cartilage} cx="113" cy="137" r="16" />

      {/* bloco médio-antepé: aduz em torno da cabeça do talus */}
      <g transform={`rotate(${swing} 113 137)`}>
        {/* navicular */}
        <path {...cartilage} d="M 90 158 C 100 147, 124 147, 132 159 C 124 172, 98 172, 90 158 Z" />
        {/* cuboide */}
        <path {...boneBack} d="M 140 150 L 168 146 L 173 178 L 146 182 Z" />
        {/* cuneiformes medial, intermédio e lateral */}
        <path {...bone} d="M 92 172 L 114 170 L 116 202 L 94 200 Z" />
        <path {...bone} d="M 117 170 L 134 170 L 135 200 L 118 202 Z" />
        <path {...bone} d="M 137 172 L 152 175 L 152 199 L 137 200 Z" />
        {/* metatarsais */}
        <path {...bone} d="M 94 202 L 114 202 L 111 252 L 95 252 Z" />
        <path {...bone} d="M 117 204 L 130 204 L 130 256 L 118 256 Z" />
        <path {...bone} d="M 132 204 L 144 204 L 145 256 L 133 256 Z" />
        <path {...bone} d="M 146 186 L 157 186 L 158 252 L 147 252 Z" />
        <path
          {...bone}
          d="M 160 184 C 170 178, 176 184, 174 194 L 176 248 L 163 250 L 160 194 Z"
        />
        {/* falanges */}
        <path {...bone} d="M 95 254 L 111 254 L 110 284 L 96 284 Z" />
        <path {...bone} d="M 118 258 L 130 258 L 130 286 L 119 286 Z" />
        <path {...bone} d="M 133 258 L 145 258 L 145 285 L 134 285 Z" />
        <path {...bone} d="M 147 254 L 158 254 L 159 281 L 148 281 Z" />
        <path {...bone} d="M 163 252 L 175 250 L 177 276 L 165 277 Z" />
      </g>
    </g>
  );
};

/* -------------------------------------------------------------------------- */

export const Anatomy: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 480 340"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>
      {title ?? "Pé normal e pé torto congênito em vista dorsal: subluxação do navicular e adução do calcâneo sob o talus"}
    </title>

    <text x="120" y="20" {...mono} textAnchor="middle">pé normal</text>
    <text x="360" y="20" {...mono} textAnchor="middle">pé torto congênito</text>

    <g transform="translate(0 22) scale(0.86)">
      <FootPlan />
    </g>
    <g transform="translate(240 22) scale(0.86)">
      <FootPlan deformed />
    </g>

    {/* eixo do talus × eixo do calcâneo (divergência perdida no pé torto) */}
    <path {...measure} d="M 105 60 L 98 155" strokeDasharray="5 4" />
    <path {...measure} d="M 108 55 L 130 152" strokeDasharray="5 4" />
    <text x="150" y="120" {...label}>eixos divergentes</text>

    <path {...measure} d="M 345 60 L 340 155" strokeDasharray="5 4" />
    <path {...measure} d="M 348 55 L 354 152" strokeDasharray="5 4" />
    <text x="374" y="120" {...label} fill="var(--amber)">eixos paralelos</text>

    {/* navicular medializado contra o maléolo medial */}
    <path {...lesion} d="M 320 150 C 306 146, 300 138, 300 128" />
    <circle cx="300" cy="126" r="6" fill="none" stroke="var(--cortical)" strokeWidth="2.4" />
    <text x="238" y="112" {...label} textAnchor="end" fill="var(--cortical)">navicular</text>
    <text x="238" y="125" {...label} textAnchor="end" fill="var(--cortical)">medializado</text>

    <text x="60" y="70" {...label} textAnchor="end">maléolo</text>
    <text x="60" y="83" {...label} textAnchor="end">medial</text>

    <text x="120" y="318" {...label} textAnchor="middle">talus, navicular e calcâneo alinhados</text>
    <text x="360" y="318" {...label} textAnchor="middle">bloco médio-antepé aduzido em torno do talus</text>
    <text x="240" y="336" {...label} textAnchor="middle">
      a deformidade é articular: o esqueleto roda em torno de um talus fixo — não há osso &quot;a mais&quot; nem &quot;a menos&quot;.
    </text>
  </svg>
);

/* -------------------------------------------------------------------------- */

export const Cave: FC<FigureProps> = ({ variant, className, title }) => {
  const v = variant ?? "";
  const on = (k: string) => (v === k ? "var(--amber)" : "var(--ink-soft)");
  const tint = (k: string) => (v === k ? "var(--amber-tint)" : "none");

  return (
    <svg
      viewBox="0 0 480 340"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? "Os quatro componentes do pé torto congênito: cavo, aduto, varo e equino (CAVE)"}</title>

      <text x="240" y="18" {...mono} textAnchor="middle">C · A · V · E — a ordem em que se corrige</text>

      {/* ---- CAVO (perfil medial) ---- */}
      <rect x="12" y="30" width="220" height="140" rx="10" fill={tint("cavo")} stroke="var(--line)" strokeWidth="1" />
      <text x="24" y="48" {...mono} fill={on("cavo")}>1. CAVO</text>
      <g transform="translate(0 12)">
        {/* silhueta do pé em perfil, arco elevado */}
        <path
          {...bone}
          d="M 40 148 C 34 130, 44 118, 62 116 C 84 100, 112 96, 140 100 C 168 104, 196 112, 212 124 C 220 132, 216 146, 202 148 C 160 152, 80 152, 40 148 Z"
        />
        {/* arco medial elevado */}
        <path {...measure} d="M 62 146 C 96 108, 150 106, 200 132" />
        <text x="120" y="100" {...label} fill="var(--amber)" textAnchor="middle">arco medial elevado</text>
        <text x="120" y="164" {...label} textAnchor="middle">antepé pronado sobre o retropé; 1º raio em flexão plantar</text>
      </g>

      {/* ---- ADUTO (vista plantar) ---- */}
      <rect x="248" y="30" width="220" height="140" rx="10" fill={tint("aduto")} stroke="var(--line)" strokeWidth="1" />
      <text x="260" y="48" {...mono} fill={on("aduto")}>2. ADUTO</text>
      <g transform="translate(0 6)">
        {/* retropé fixo */}
        <path {...boneBack} d="M 330 148 C 316 148, 310 138, 312 126 C 314 112, 328 106, 342 110 C 352 114, 354 128, 350 140 Z" />
        {/* antepé aduzido */}
        <g transform="rotate(-26 340 120)">
          <path
            {...bone}
            d="M 330 118 C 328 100, 334 76, 348 66 C 362 56, 380 62, 384 78 C 388 96, 380 116, 366 124 C 352 130, 336 128, 330 118 Z"
          />
        </g>
        <path {...measure} d="M 340 120 L 340 62" strokeDasharray="5 4" />
        <path {...measure} d="M 340 120 L 314 68" />
        <path {...measure} d="M 340 92 A 28 28 0 0 1 327 96" />
        <text x="288" y="86" {...label} fill="var(--amber)" textAnchor="middle">adução</text>
        <text x="358" y="170" {...label} textAnchor="middle">borda lateral convexa; borda medial côncava</text>
      </g>

      {/* ---- VARO (vista posterior) ---- */}
      <rect x="12" y="182" width="220" height="140" rx="10" fill={tint("varo")} stroke="var(--line)" strokeWidth="1" />
      <text x="24" y="200" {...mono} fill={on("varo")}>3. VARO</text>
      <g>
        {/* perna */}
        <path {...boneBack} d="M 104 208 L 140 208 L 138 268 L 106 268 Z" />
        {/* calcâneo invertido */}
        <g transform="rotate(22 122 268)">
          <path {...bone} d="M 106 266 C 100 288, 108 306, 122 308 C 136 310, 146 294, 142 270 Z" />
        </g>
        <path {...measure} d="M 122 268 L 122 314" strokeDasharray="5 4" />
        <path {...measure} d="M 122 268 L 140 310" />
        <path {...measure} d="M 122 300 A 32 32 0 0 0 134 296" />
        <text x="168" y="296" {...label} fill="var(--amber)">varo do calcâneo</text>
        <text x="122" y="332" {...label} textAnchor="middle">retropé em inversão — só corrige com abdução, nunca com pronação</text>
      </g>

      {/* ---- EQUINO (perfil lateral) ---- */}
      <rect x="248" y="182" width="220" height="140" rx="10" fill={tint("equino")} stroke="var(--line)" strokeWidth="1" />
      <text x="260" y="200" {...mono} fill={on("equino")}>4. EQUINO</text>
      <g>
        <path {...boneBack} d="M 326 208 L 360 208 L 358 262 L 328 262 Z" />
        <circle {...cartilage} cx="344" cy="272" r="14" />
        <g transform="rotate(34 344 272)">
          <path
            {...bone}
            d="M 320 268 C 312 272, 312 286, 322 290 C 350 296, 396 294, 416 288 C 426 284, 426 272, 414 268 C 384 262, 344 262, 320 268 Z"
          />
        </g>
        <path {...measure} d="M 344 272 L 428 272" strokeDasharray="5 4" />
        <path {...measure} d="M 344 272 L 414 320" />
        <path {...measure} d="M 400 272 A 56 56 0 0 0 390 300" />
        <text x="426" y="248" {...label} fill="var(--amber)" textAnchor="middle">equino</text>
        <text x="358" y="332" {...label} textAnchor="middle">é o último a corrigir — quase sempre exige tenotomia do Aquiles</text>
      </g>
    </svg>
  );
};

/* -------------------------------------------------------------------------- */

export const Pirani: FC<FigureProps> = ({ variant, className, title }) => {
  const v = variant ?? "";
  const hi = (k: string) => (v === k ? "var(--amber-tint)" : "var(--surface-2, var(--surface))");
  const hiInk = (k: string) => (v === k ? "var(--amber)" : "var(--ink)");

  const mid: Array<[string, string]> = [
    ["CLB", "curvatura da borda lateral"],
    ["PM", "prega medial"],
    ["CLT", "cobertura da cabeça lateral do talus"],
  ];
  const hind: Array<[string, string]> = [
    ["PP", "prega posterior"],
    ["CV", "calcâneo vazio"],
    ["RE", "rigidez do equino"],
  ];

  return (
    <svg
      viewBox="0 0 480 340"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? "Escore de Pirani: três sinais do mediopé e três do retropé, cada um valendo 0, 0,5 ou 1"}</title>

      <text x="240" y="18" {...mono} textAnchor="middle">escore de Pirani — 6 sinais × (0 · 0,5 · 1) = 0 a 6</text>

      {/* ---- pé esquemático com os pontos de exame ---- */}
      <g>
        {/* planta do pé, borda lateral convexa */}
        <path
          {...bone}
          d="M 92 62 C 74 74, 68 100, 74 128 C 80 158, 96 182, 116 194 C 136 206, 158 200, 166 180 C 176 152, 172 116, 158 88 C 144 62, 112 50, 92 62 Z"
        />
        {/* dedos */}
        <path {...boneBack} d="M 116 196 C 122 214, 140 220, 152 210 C 162 202, 164 188, 156 182 Z" />
        {/* borda lateral convexa realçada */}
        <path {...lesion} d="M 160 88 C 176 118, 176 158, 158 190" />
        <text x="196" y="140" {...label} fill="var(--cortical)">borda lateral</text>
        <text x="196" y="153" {...label} fill="var(--cortical)">convexa</text>

        {/* prega medial */}
        <path {...lesion} d="M 84 106 C 96 118, 96 138, 84 150" />
        {/* cabeça lateral do talus palpável */}
        <circle cx="152" cy="98" r="8" fill="none" stroke="var(--teal)" strokeWidth="2.4" />
        {/* calcâneo vazio */}
        <circle cx="98" cy="76" r="8" fill="none" stroke="var(--teal)" strokeWidth="2.4" />

        <text x="66" y="128" {...label} textAnchor="end">prega</text>
        <text x="66" y="141" {...label} textAnchor="end">medial</text>
        <text x="112" y="46" {...label} fill="var(--teal-deep)" textAnchor="middle">calcâneo vazio</text>
        <text x="188" y="88" {...label} fill="var(--teal-deep)">cabeça lateral do talus</text>
      </g>

      {/* ---- tabela de pontuação ---- */}
      <g transform="translate(252 42)">
        <text x="0" y="0" {...mono} fill={hiInk("mediope")}>MEDIOPÉ — 0 a 3</text>
        {mid.map(([code, name], i) => (
          <g key={code} transform={`translate(0 ${12 + i * 30})`}>
            <rect x="0" y="0" width="212" height="24" rx="6" fill={hi("mediope")} stroke="var(--line)" strokeWidth="1" />
            <text x="10" y="16" {...mono} fontSize={10}>{code}</text>
            <text x="46" y="16" {...label} fontSize={10}>{name}</text>
          </g>
        ))}

        <text x="0" y="130" {...mono} fill={hiInk("retrope")}>RETROPÉ — 0 a 3</text>
        {hind.map(([code, name], i) => (
          <g key={code} transform={`translate(0 ${142 + i * 30})`}>
            <rect x="0" y="0" width="212" height="24" rx="6" fill={hi("retrope")} stroke="var(--line)" strokeWidth="1" />
            <text x="10" y="16" {...mono} fontSize={10}>{code}</text>
            <text x="46" y="16" {...label} fontSize={10}>{name}</text>
          </g>
        ))}

        <rect x="0" y="240" width="212" height="26" rx="8" fill="var(--teal-tint)" />
        <text x="106" y="257" {...mono} fill="var(--teal-deep)" textAnchor="middle">
          retropé ≥ 1 após gessos → tenotomia
        </text>
      </g>

      <text x="240" y="330" {...label} textAnchor="middle">
        rápido, reprodutível e feito à beira do leito; útil para acompanhar a correção gesso a gesso.
      </text>
    </svg>
  );
};

/* -------------------------------------------------------------------------- */

export const Dimeglio: FC<FigureProps> = ({ variant, className, title }) => {
  const v = variant ?? "";
  const grades: Array<[string, string, string]> = [
    ["I", "benigno", "< 5"],
    ["II", "moderado", "5–9"],
    ["III", "grave", "10–14"],
    ["IV", "muito grave", "15–20"],
  ];
  const params: Array<[string, string, number]> = [
    ["equino", "equino (sagital)", 40],
    ["varo", "varo do retropé (frontal)", 160],
    ["rotacao", "desrotação do bloco calcaneopédio", 280],
    ["aducao", "adução do antepé (horizontal)", 400],
  ];

  return (
    <svg
      viewBox="0 0 480 340"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? "Classificação de Dimeglio: quatro parâmetros de redutibilidade medidos em graus, mais quatro pontos acessórios"}</title>

      <text x="240" y="18" {...mono} textAnchor="middle">Dimeglio — redutibilidade em graus (4 × 4 pts) + 4 pts acessórios = 0 a 20</text>

      {/* quatro goniometrias */}
      {params.map(([key, name, cx]) => {
        const active = v === key;
        return (
          <g key={key} transform={`translate(${cx} 118)`}>
            <circle
              r="44"
              fill={active ? "var(--amber-tint)" : "var(--surface-2, var(--surface))"}
              stroke="var(--line)"
              strokeWidth="1"
            />
            {/* referência neutra */}
            <path {...measure} d="M 0 0 L 40 0" strokeDasharray="4 4" />
            {/* posição deformada */}
            <path {...measure} d="M 0 0 L 28 30" />
            {/* arco de redutibilidade */}
            <path {...measure} d="M 30 0 A 30 30 0 0 1 21 22" />
            <circle r="3" fill="var(--amber)" stroke="none" />
            <text x="0" y="-52" {...mono} fontSize={10} textAnchor="middle">
              {active ? "◆" : ""} 0–4 pts
            </text>
            <text x="0" y="62" {...label} fontSize={10} textAnchor="middle">
              {name}
            </text>
          </g>
        );
      })}

      {/* escala de gravidade */}
      <g transform="translate(60 208)">
        {grades.map(([g, name, range], i) => (
          <g key={g} transform={`translate(${i * 92} 0)`}>
            <rect
              x="0"
              y="0"
              width="84"
              height="44"
              rx="8"
              fill={i >= 2 ? "var(--cortical-tint)" : "var(--teal-tint)"}
              stroke="var(--line)"
              strokeWidth="1"
            />
            <text x="42" y="20" {...mono} textAnchor="middle" fill={i >= 2 ? "var(--cortical)" : "var(--teal-deep)"}>
              grau {g}
            </text>
            <text x="42" y="36" {...label} fontSize={10} textAnchor="middle">
              {name} · {range}
            </text>
          </g>
        ))}
      </g>

      <text x="240" y="288" {...label} textAnchor="middle">
        pontos acessórios: prega posterior, prega medial, cavo e tônus muscular (1 ponto cada).
      </text>
      <text x="240" y="312" {...label} textAnchor="middle">
        Mede rigidez, não só aparência: prediz o número de gessos e a chance de tenotomia,
      </text>
      <text x="240" y="328" {...label} textAnchor="middle">
        mas nenhum escore inicial prediz de forma confiável a recidiva.
      </text>
    </svg>
  );
};

/* -------------------------------------------------------------------------- */

export const PonsetiCasts: FC<FigureProps> = ({ variant, activeStep, className, title }) => {
  const v =
    variant ??
    (activeStep && activeStep <= 3 ? "cavo" : activeStep && activeStep >= 6 ? "final" : "abducao");

  const abduction = v === "cavo" ? 0 : v === "abducao" ? 30 : v === "erro-pronacao" ? 0 : 68;
  const isError = v === "erro-pronacao";
  const legend: Record<string, string> = {
    cavo: "1º gesso: supinar o antepé e elevar o 1º raio — corrige o CAVO alinhando antepé e retropé.",
    abducao: "Gessos 2–4: abdução progressiva sob contrapressão na cabeça lateral do talus.",
    final: "Abdução final de 60–70°: o calcâneo everte sob o talus e o varo desaparece por consequência.",
    "erro-pronacao": "ERRO: pronar o antepé trava o calcâneo em varo e agrava o cavo — nunca pronar.",
  };

  return (
    <svg
      viewBox="0 0 480 340"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? "Método de Ponseti: abdução seriada do pé em torno da cabeça do talus, sem jamais pronar"}</title>

      <text x="240" y="18" {...mono} textAnchor="middle">
        {v === "cavo" ? "gesso 1 — cavo" : v === "final" ? "gesso final — 60–70° de abdução" : isError ? "erro de técnica" : "gessos 2–4 — abdução"}
      </text>

      {/* perna e talus fixos */}
      <path {...boneBack} d="M 196 40 L 252 40 L 256 100 C 238 112, 212 112, 194 100 Z" />
      <text x="182" y="60" {...label} textAnchor="end">perna</text>

      {/* talus — referência imóvel */}
      <path {...bone} d="M 206 98 C 194 108, 194 128, 208 136 C 226 144, 246 138, 250 122 C 254 106, 244 96, 230 94 Z" />
      <circle {...cartilage} cx="226" cy="126" r="14" />
      <text x="264" y="104" {...label} fill="var(--teal-deep)">talus (fixo)</text>

      {/* pé: abduz em torno da cabeça do talus */}
      <g transform={`rotate(${-abduction} 226 126)`}>
        <path
          {...bone}
          d="M 202 100 C 190 118, 192 156, 198 194 C 202 228, 210 250, 226 252 C 246 254, 256 230, 258 196 C 262 156, 260 118, 248 100 C 236 88, 214 88, 202 100 Z"
        />
        {/* dedos */}
        <path {...boneBack} d="M 206 250 L 246 252 C 250 268, 240 278, 226 278 C 212 278, 204 266, 206 250 Z" />
        {/* borda lateral */}
        <path
          d="M 258 110 C 266 150, 264 214, 248 248"
          fill="none"
          stroke={isError ? "var(--cortical)" : "var(--ink-soft)"}
          strokeWidth={isError ? 2.4 : 1.4}
        />
        {/* 1º raio — elevado no gesso do cavo */}
        {v === "cavo" && (
          <>
            <path {...measure} d="M 206 180 C 202 210, 204 236, 212 250" />
            <text x="196" y="200" {...label} fill="var(--amber)" textAnchor="end">1º raio</text>
            <text x="196" y="213" {...label} fill="var(--amber)" textAnchor="end">elevado</text>
          </>
        )}
      </g>

      {/* contrapressão do polegar na cabeça LATERAL do talus */}
      <circle
        cx="248"
        cy="126"
        r="9"
        fill={isError ? "none" : "var(--cortical-tint)"}
        stroke="var(--cortical)"
        strokeWidth="2.4"
      />
      <text x="266" y="130" {...label} fill="var(--cortical)">polegar: cabeça lateral do talus</text>

      {/* ponto proibido: articulação calcaneocuboide (erro de Kite) */}
      <g opacity={isError ? 1 : 0.55}>
        <circle cx="262" cy="176" r="8" fill="none" stroke="var(--ink-soft)" strokeWidth="1.6" strokeDasharray="3 3" />
        <path {...lesion} d="M 256 170 L 268 182 M 268 170 L 256 182" />
        <text x="280" y="180" {...label}>nunca na calcaneocuboide (erro de Kite)</text>
      </g>

      {/* arco de abdução */}
      {!isError && (
        <>
          <path {...measure} d="M 226 126 L 226 268" strokeDasharray="5 4" />
          <path
            {...measure}
            d={`M 226 246 A 120 120 0 0 0 ${226 + 120 * Math.sin((abduction * Math.PI) / 180)} ${
              126 + 120 * Math.cos((abduction * Math.PI) / 180)
            }`}
          />
          <text x="120" y="300" {...mono} fill="var(--amber)">
            abdução {abduction}°
          </text>
        </>
      )}

      {isError && (
        <>
          <path {...lesion} d="M 150 210 C 168 226, 180 240, 184 254" />
          <text x="140" y="204" {...label} fill="var(--cortical)" textAnchor="end">pronação</text>
          <text x="140" y="217" {...label} fill="var(--cortical)" textAnchor="end">proibida</text>
        </>
      )}

      <text x="240" y="324" {...label} textAnchor="middle">
        {legend[v] ?? legend.abducao}
      </text>
    </svg>
  );
};

/* -------------------------------------------------------------------------- */

export const Tenotomy: FC<FigureProps> = ({ variant, className, title }) => {
  const v = variant ?? "antes";
  const after = v === "depois";
  const footAngle = after ? -16 : 30;

  return (
    <svg
      viewBox="0 0 480 320"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? "Tenotomia percutânea do tendão de Aquiles: secção completa 1 a 1,5 cm acima da inserção calcânea"}</title>

      <text x="240" y="18" {...mono} textAnchor="middle">
        {after ? "após a tenotomia — 15–20° de dorsiflexão" : "antes — equino residual apesar dos gessos"}
      </text>

      {/* tíbia */}
      <path {...boneBack} d="M 196 34 L 240 34 L 244 148 C 226 158, 208 158, 192 148 Z" />
      <text x="184" y="70" {...label} textAnchor="end">tíbia</text>

      {/* tendão de Aquiles */}
      {after ? (
        <>
          <path {...bone} d="M 158 38 L 178 38 L 178 148 L 158 150 Z" />
          <path {...bone} d="M 158 178 L 178 176 L 176 206 L 156 206 Z" />
          <path {...measure} d="M 156 150 L 180 150 M 156 176 L 180 176" />
          <text x="146" y="168" {...label} fill="var(--amber)" textAnchor="end">falha preenchida</text>
          <text x="146" y="181" {...label} fill="var(--amber)" textAnchor="end">por cicatriz</text>
        </>
      ) : (
        <>
          <path {...bone} d="M 158 38 L 178 38 L 176 206 L 156 206 Z" />
          <text x="146" y="88" {...label} textAnchor="end">tendão de</text>
          <text x="146" y="101" {...label} textAnchor="end">Aquiles</text>
          {/* nível da tenotomia */}
          <path {...lesion} d="M 146 164 L 192 164" />
          <path {...lesion} d="M 118 152 L 146 164 L 118 176" />
          <text x="112" y="160" {...label} fill="var(--cortical)" textAnchor="end">lâmina nº 11,</text>
          <text x="112" y="173" {...label} fill="var(--cortical)" textAnchor="end">1–1,5 cm da inserção</text>
          <path {...measure} d="M 200 164 L 200 206" strokeDasharray="4 3" />
          <text x="208" y="188" {...label} fill="var(--amber)">1–1,5 cm</text>
        </>
      )}

      {/* talus */}
      <circle {...cartilage} cx="222" cy="172" r="20" />
      <text x="222" y="176" {...label} fontSize={10} textAnchor="middle" fill="var(--teal-deep)">talus</text>

      {/* retropé e antepé rodam no tornozelo */}
      <g transform={`rotate(${footAngle} 222 172)`}>
        {/* calcâneo */}
        <path
          {...bone}
          d="M 158 194 C 148 200, 148 216, 160 222 C 190 232, 232 230, 252 220 C 262 214, 260 198, 248 194 C 218 186, 176 186, 158 194 Z"
        />
        <text x="200" y="214" {...label} fontSize={10} textAnchor="middle">calcâneo</text>
        {/* mediopé e antepé */}
        <path
          {...boneBack}
          d="M 252 196 C 288 190, 340 190, 380 196 C 396 198, 400 214, 386 220 C 344 228, 288 228, 254 220 Z"
        />
        <path {...boneBack} d="M 386 198 C 404 196, 416 204, 414 214 C 412 224, 396 226, 386 220 Z" />
      </g>

      {/* arco de dorsiflexão obtida */}
      <path {...measure} d="M 222 172 L 400 172" strokeDasharray="5 4" />
      <path
        {...measure}
        d={
          after
            ? "M 342 172 A 120 120 0 0 0 337 138"
            : "M 342 172 A 120 120 0 0 1 326 231"
        }
      />
      <text x="356" y={after ? 132 : 252} {...mono} fill="var(--amber)">
        {after ? "+15 a 20° de dorsiflexão" : "equino fixo"}
      </text>

      <text x="240" y="300" {...label} textAnchor="middle">
        {after
          ? "Gesso final em 60–70° de abdução e máxima dorsiflexão por 3 semanas; o tendão regenera com o mesmo comprimento funcional."
          : "Indicada em ~80–90% dos pés quando persiste equino com o mediopé já corrigido (abdução ≥ 60°)."}
      </text>
    </svg>
  );
};

/* -------------------------------------------------------------------------- */

export const Brace: FC<FigureProps> = ({ variant, className, title }) => {
  const v = variant ?? "posicao";
  const showSchedule = v === "regime";

  const Shoe: FC<{ x: number; deg: number; tag: string }> = ({ x, deg, tag }) => (
    <g transform={`translate(${x} 168)`}>
      <g transform={`rotate(${deg})`}>
        <path
          {...bone}
          d="M -18 0 C -22 -18, -14 -40, 2 -46 C 20 -52, 36 -42, 38 -24 C 40 -8, 30 6, 12 8 C -4 10, -14 8, -18 0 Z"
        />
        {/* abertura para os dedos, garantindo dorsiflexão */}
        <path {...boneBack} d="M 4 -44 C 18 -48, 32 -40, 32 -28 C 32 -20, 22 -16, 10 -20 Z" />
        {/* solado / fixação à barra */}
        <path d="M -14 2 L 22 6" fill="none" stroke="var(--ink-soft)" strokeWidth="1.4" />
      </g>
      <text x="0" y="42" {...mono} fill="var(--amber)" textAnchor="middle">
        {deg > 0 ? `${deg}°` : `${-deg}°`}
      </text>
      <text x="0" y="58" {...label} textAnchor="middle">{tag}</text>
    </g>
  );

  return (
    <svg
      viewBox="0 0 480 320"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? "Órtese de abdução tipo Denis-Browne: barra na largura dos ombros, pé afetado em 60 a 70 graus de abdução"}</title>

      <text x="240" y="20" {...mono} textAnchor="middle">
        órtese de abdução (Denis-Browne / FAB) — a adesão é o principal preditor de recidiva
      </text>

      {/* barra */}
      <rect x="96" y="164" width="288" height="12" rx="6" {...boneBack} />
      {/* dimensão = largura dos ombros */}
      <path {...measure} d="M 96 198 L 384 198" />
      <path {...measure} d="M 96 192 L 96 204 M 384 192 L 384 204" />
      <text x="240" y="216" {...label} fill="var(--amber)" textAnchor="middle">
        comprimento da barra = largura dos ombros da criança
      </text>

      <Shoe x={120} deg={-62} tag="lado afetado" />
      <Shoe x={360} deg={36} tag="lado normal" />

      <text x="120" y="106" {...label} textAnchor="middle">60–70° de abdução</text>
      <text x="360" y="106" {...label} textAnchor="middle">30–40° de abdução</text>

      {/* dorsiflexão da barra */}
      <path {...measure} d="M 200 148 C 240 140, 280 140, 300 148" strokeDasharray="4 3" />
      <text x="240" y="136" {...label} fill="var(--amber)" textAnchor="middle">
        barra com 10–15° de dorsiflexão
      </text>

      {/* regime de uso */}
      <g transform="translate(60 236)">
        <rect
          x="0"
          y="0"
          width="172"
          height="44"
          rx="8"
          fill={showSchedule ? "var(--amber-tint)" : "var(--teal-tint)"}
          stroke="var(--line)"
          strokeWidth="1"
        />
        <text x="86" y="20" {...mono} textAnchor="middle" fill={showSchedule ? "var(--amber)" : "var(--teal-deep)"}>
          23 h/dia
        </text>
        <text x="86" y="36" {...label} fontSize={10} textAnchor="middle">primeiros 3 meses</text>

        <rect
          x="188"
          y="0"
          width="172"
          height="44"
          rx="8"
          fill={showSchedule ? "var(--amber-tint)" : "var(--teal-tint)"}
          stroke="var(--line)"
          strokeWidth="1"
        />
        <text x="274" y="20" {...mono} textAnchor="middle" fill={showSchedule ? "var(--amber)" : "var(--teal-deep)"}>
          12–14 h/dia
        </text>
        <text x="274" y="36" {...label} fontSize={10} textAnchor="middle">noites e sonos até os 4–5 anos</text>
      </g>

      <text x="240" y="306" {...label} textAnchor="middle">
        A órtese mantém a correção; ela não corrige deformidade residual — o pé deve chegar já corrigido pelos gessos.
      </text>
    </svg>
  );
};

/* -------------------------------------------------------------------------- */

export const TibialisTransfer: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 400 330"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Transferência do tendão tibial anterior para o terceiro cuneiforme na recidiva dinâmica em supinação"}</title>

    <text x="200" y="18" {...mono} textAnchor="middle">transferência do tibial anterior — 3º cuneiforme</text>

    <g transform="translate(48 24) scale(0.82)">
      <FootPlan />
    </g>

    {/* trajeto original do tibial anterior até o cuneiforme medial */}
    <path
      d="M 148 46 C 136 96, 128 138, 124 168"
      fill="none"
      stroke="var(--ink-soft)"
      strokeWidth="4"
      strokeLinecap="round"
      strokeDasharray="6 5"
    />
    <circle cx="124" cy="172" r="7" fill="none" stroke="var(--ink-soft)" strokeWidth="2" />
    <text x="66" y="150" {...label} textAnchor="end">inserção original</text>
    <text x="66" y="163" {...label} textAnchor="end">(cuneiforme medial</text>
    <text x="66" y="176" {...label} textAnchor="end">e base do 1º MTT)</text>

    {/* novo trajeto — lateralizado para o 3º cuneiforme */}
    <path {...lesion} d="M 148 46 C 152 100, 168 140, 186 170" strokeWidth="4" />
    <circle cx="188" cy="176" r="8" fill="var(--cortical-tint)" stroke="var(--cortical)" strokeWidth="2.4" />
    <text x="212" y="172" {...label} fill="var(--cortical)">3º cuneiforme (lateral):</text>
    <text x="212" y="185" {...label} fill="var(--cortical)">reequilibra inversores × evertores</text>

    {/* vetor de força resultante */}
    <path {...measure} d="M 148 60 L 128 120" strokeDasharray="4 3" />
    <path {...measure} d="M 148 60 L 176 118" />
    <path {...measure} d="M 140 108 A 52 52 0 0 0 166 112" />
    <text x="212" y="92" {...label} fill="var(--amber)">vetor lateralizado</text>

    <text x="200" y="300" {...label} textAnchor="middle">
      Indicada na recidiva dinâmica em supinação de criança &gt; 2,5–3 anos, com 3º cuneiforme já ossificado
    </text>
    <text x="200" y="316" {...label} textAnchor="middle">
      e sem deformidade fixa — o que for rígido volta primeiro aos gessos de Ponseti.
    </text>
  </svg>
);

/* -------------------------------------------------------------------------- */

export const figures: Record<string, FC<FigureProps>> = {
  "pe-torto-congenito:anatomia": Anatomy,
  "pe-torto-congenito:cave": Cave,
  "pe-torto-congenito:pirani": Pirani,
  "pe-torto-congenito:dimeglio": Dimeglio,
  "pe-torto-congenito:gessos-ponseti": PonsetiCasts,
  "pe-torto-congenito:tenotomia": Tenotomy,
  "pe-torto-congenito:ortese": Brace,
  "pe-torto-congenito:tibial-anterior": TibialisTransfer,
};
