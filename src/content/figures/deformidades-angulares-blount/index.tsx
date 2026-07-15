import type { FC } from "react";
import type { FigureProps } from "../../../types/topic";

/* ============================================================================
   Figuras esquemáticas originais — Deformidades angulares do joelho na criança
   e doença de Blount (tíbia vara).
   Line-art de dois tons, desenho original, sem reprodução de material protegido.
   Cores exclusivamente por CSS var: ossos (--ink-soft / --surface), fise e
   cartilagem (--teal), traço/lesão (--cortical), medidas e ângulos (--amber),
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

const physisLine = {
  fill: "none",
  stroke: "var(--teal)",
  strokeWidth: 5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const measure = {
  fill: "none",
  stroke: "var(--amber)",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
};

const measureDash = {
  ...measure,
  strokeDasharray: "6 5",
};

const lesion = {
  fill: "none",
  stroke: "var(--cortical)",
  strokeWidth: 2.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const guide = {
  fill: "none",
  stroke: "var(--line-strong)",
  strokeWidth: 1,
  strokeDasharray: "3 4",
};

/* -------------------------------------------------------------------------- */
/* Tíbia proximal em AP, parametrizada pela depressão medial (drop) e pelo
   bico metafisário medial (beak). Medial à esquerda da imagem.               */

function physisPath(drop: number): string {
  return `L 140 77 L 110 78 L 80 ${78 + drop * 0.35} L 56 ${78 + drop * 0.8} L 38 ${78 + drop}`;
}

function epiphysisPath(drop: number): string {
  return (
    "M 38 58 L 42 50 L 88 52 L 92 41 L 98 52 L 104 41 L 108 52 L 158 50 L 162 58 L 164 76 " +
    physisPath(drop) +
    " Z"
  );
}

function metaphysisPath(drop: number, beak: number): string {
  return (
    `M 38 ${78 + drop} L 56 ${78 + drop * 0.8} L 80 ${78 + drop * 0.35} L 110 78 L 140 77 L 164 76 ` +
    "L 168 88 C 158 114 130 132 124 152 L 124 232 L 76 232 L 76 152 " +
    `C 70 132 ${46 - beak * 0.5} 116 ${34 - beak} ${100 + drop * 0.7} ` +
    `L ${30 - beak} ${90 + drop * 0.6} Z`
  );
}

function physisStroke(drop: number): string {
  return `M 164 76 L 140 77 L 110 78 L 80 ${78 + drop * 0.35} L 56 ${78 + drop * 0.8} L 38 ${78 + drop}`;
}

/* -------------------------------------------------------------------------- */

export const Salenius: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 440 280"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>
      {title ?? "Curva de Salenius: evolução fisiológica do ângulo tibiofemoral com a idade"}
    </title>

    {/* faixa fisiológica */}
    <path
      d={
        "M 60 172 C 78 162, 92 150, 106 130 C 118 112, 128 88, 141 76 C 152 66, 162 66, 175 71 " +
        "C 190 76, 205 80, 221 82 C 250 86, 300 88, 356 89 L 410 89 " +
        "L 410 145 L 356 145 C 300 144, 250 142, 221 138 C 205 136, 190 132, 175 127 " +
        "C 162 122, 152 122, 141 132 C 128 144, 118 168, 106 186 C 92 206, 78 218, 60 228 Z"
      }
      fill="var(--teal-tint)"
      stroke="none"
    />

    {/* eixos */}
    <path d="M 60 40 L 60 240 L 414 240" fill="none" stroke="var(--line-strong)" strokeWidth="1.4" />
    <path d="M 60 140 L 414 140" fill="none" stroke="var(--line-strong)" strokeWidth="1.2" strokeDasharray="5 5" />

    {/* ticks de idade */}
    {[0, 2, 4, 6, 8, 10, 12].map((a) => (
      <g key={a}>
        <path d={`M ${60 + a * 26.9} 240 L ${60 + a * 26.9} 245`} stroke="var(--line-strong)" strokeWidth="1.2" />
        <text x={60 + a * 26.9} y={258} {...label} textAnchor="middle">
          {a}
        </text>
      </g>
    ))}
    <text x={237} y={274} {...label} textAnchor="middle">
      idade (anos)
    </text>

    {/* ticks angulares */}
    <path d="M 55 80 L 60 80 M 55 200 L 60 200" stroke="var(--line-strong)" strokeWidth="1.2" />
    <text x={50} y={84} {...label} textAnchor="end">
      15° valgo
    </text>
    <text x={50} y={144} {...mono} textAnchor="end">
      0°
    </text>
    <text x={50} y={204} {...label} textAnchor="end">
      15° varo
    </text>

    {/* curva de Salenius */}
    <path
      d={
        "M 60 200 C 78 190, 92 178, 106 158 C 118 140, 128 116, 141 104 " +
        "C 152 94, 162 94, 175 99 C 190 104, 205 108, 221 110 " +
        "C 250 114, 300 116, 356 117 L 410 117"
      }
      fill="none"
      stroke="var(--teal-deep, var(--teal))"
      strokeWidth="3"
      strokeLinecap="round"
    />

    {/* marcos */}
    <circle cx="114" cy="136" r="4" fill="var(--amber)" />
    <path d="M 114 136 L 114 62" {...guide} />
    <text x={118} y={58} {...label}>
      neutro ~18-24 meses
    </text>

    <circle cx="154" cy="96" r="4" fill="var(--amber)" />
    <path d="M 154 96 L 200 72" {...guide} />
    <text x={204} y={70} {...label}>
      pico de valgo ~3-4 anos
    </text>

    <circle cx="248" cy="114" r="4" fill="var(--amber)" />
    <path d="M 248 114 L 268 168" {...guide} />
    <text x={272} y={174} {...label}>
      <tspan x={272} dy="0em">alinhamento adulto</tspan>
      <tspan x={272} dy="1.15em">(~5-7° valgo) ~7 anos</tspan>
    </text>

    <text x={66} y={214} {...label} fill="var(--cortical)">
      varo do lactente
    </text>
  </svg>
);

/* -------------------------------------------------------------------------- */

export const Alinhamento: FC<FigureProps> = ({ variant, className, title }) => {
  const v = variant ?? "neutro";
  const kneeX = v === "varo" ? 124 : v === "valgo" ? 76 : 100;
  const legend =
    v === "varo"
      ? "Geno varo: eixo mecânico passa medial ao centro do joelho"
      : v === "valgo"
        ? "Geno valgo: eixo mecânico passa lateral ao centro do joelho"
        : "Alinhamento neutro: eixo mecânico cruza o centro do joelho";

  return (
    <svg
      viewBox="0 0 220 430"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? legend}</title>

      {/* pelve parcial e cabeça femoral */}
      <path {...boneBack} d="M 62 18 C 88 8, 122 10, 142 24 C 136 40, 122 48, 106 50 C 88 48, 70 36, 62 18 Z" />
      <circle cx="100" cy="46" r="17" {...bone} />
      {/* colo e trocanter */}
      <path {...bone} d="M 86 56 C 94 68, 112 74, 126 70 L 134 52 C 126 44, 112 40, 100 44 Z" />

      {/* fêmur */}
      <path
        {...bone}
        d={`M 92 66 C 100 122, ${kneeX - 17} 168, ${kneeX - 14} 212 L ${kneeX + 14} 212 C ${kneeX + 17} 166, 128 120, 124 64 Z`}
      />
      {/* côndilos femorais */}
      <path
        {...bone}
        d={`M ${kneeX - 25} 210 C ${kneeX - 29} 226, ${kneeX - 24} 240, ${kneeX - 12} 242 L ${kneeX + 12} 242 C ${kneeX + 24} 240, ${kneeX + 29} 226, ${kneeX + 25} 210 Z`}
      />
      <path d={`M ${kneeX} 236 L ${kneeX} 242`} stroke="var(--ink-soft)" strokeWidth="1.4" />

      {/* fise femoral distal */}
      <path d={`M ${kneeX - 23} 214 L ${kneeX + 23} 214`} {...physisLine} />

      {/* platô tibial */}
      <path
        {...bone}
        d={`M ${kneeX - 24} 250 L ${kneeX - 4} 246 L ${kneeX} 240 L ${kneeX + 4} 246 L ${kneeX + 24} 250 L ${kneeX + 22} 268 L ${kneeX - 22} 268 Z`}
      />
      {/* fise tibial proximal */}
      <path d={`M ${kneeX - 21} 268 L ${kneeX + 21} 268`} {...physisLine} />

      {/* tíbia */}
      <path
        {...bone}
        d={`M ${kneeX - 20} 270 C ${kneeX - 18} 320, 90 356, 89 380 L 111 380 C 110 356, ${kneeX + 18} 320, ${kneeX + 20} 270 Z`}
      />
      {/* fíbula */}
      <path
        {...boneBack}
        d={`M ${kneeX + 22} 272 C ${kneeX + 24} 320, 118 356, 117 378 L 125 378 C 126 354, ${kneeX + 31} 318, ${kneeX + 29} 272 Z`}
      />
      {/* fise tibial distal e maléolos */}
      <path d="M 89 380 L 111 380" {...physisLine} />
      <path {...bone} d="M 84 382 L 116 382 L 118 402 L 108 404 L 92 404 L 82 402 Z" />
      <path {...boneBack} d="M 117 380 L 127 380 L 126 400 L 118 400 Z" />

      {/* eixo mecânico: centro da cabeça femoral -> centro do tornozelo */}
      <path d="M 100 46 L 100 392" {...measure} strokeWidth="2.2" />
      <circle cx="100" cy="46" r="3.5" fill="var(--amber)" />
      <circle cx="100" cy="392" r="3.5" fill="var(--amber)" />

      {/* centro do joelho e desvio do eixo mecânico */}
      <circle cx={kneeX} cy={246} r="3.5" fill="var(--cortical)" />
      {kneeX !== 100 && (
        <>
          <path d={`M 100 246 L ${kneeX} 246`} {...measureDash} />
          <text x={(100 + kneeX) / 2} y={236} {...mono} textAnchor="middle" fill="var(--amber)">
            MAD
          </text>
        </>
      )}

      <text x={12} y={424} {...label}>
        medial
      </text>
      <text x={208} y={424} {...label} textAnchor="end">
        lateral
      </text>
      <text x={110} y={20} {...mono} fill="var(--amber)">
        eixo mecânico
      </text>
    </svg>
  );
};

/* -------------------------------------------------------------------------- */

export const Drennan: FC<FigureProps> = ({ variant, className, title }) => {
  const blount = variant === "blount";
  const theta = blount ? 19 : 9;
  const drop = blount ? 16 : 3;
  const beak = blount ? 9 : 1;
  const rad = (theta * Math.PI) / 180;
  const cx = 100;
  const cy = 96;
  const half = 68;
  const medX = cx - half * Math.cos(rad);
  const medY = cy + half * Math.sin(rad);
  const latX = cx + half * Math.cos(rad);
  const latY = cy - half * Math.sin(rad);
  const r = 46;
  const arcX = cx - r * Math.cos(rad);
  const arcY = cy + r * Math.sin(rad);

  return (
    <svg
      viewBox="0 0 220 286"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>
        {title ??
          (blount
            ? "Ângulo metafiso-diafisário de Drennan aumentado (~19°), sugestivo de doença de Blount"
            : "Ângulo metafiso-diafisário de Drennan normal (~9°), compatível com varo fisiológico")}
      </title>

      <path {...bone} d={metaphysisPath(drop, beak)} />
      <path {...boneBack} d={epiphysisPath(drop)} />
      <path d={physisStroke(drop)} {...physisLine} />

      {/* eixo longitudinal da diáfise tibial */}
      <path d="M 100 250 L 100 40" {...measureDash} />
      {/* perpendicular ao eixo diafisário */}
      <path d={`M ${cx - half - 6} ${cy} L ${cx + half + 6} ${cy}`} {...measureDash} />
      {/* linha entre os bicos metafisários */}
      <path d={`M ${medX} ${medY} L ${latX} ${latY}`} {...measure} strokeWidth="2.4" />
      <circle cx={medX} cy={medY} r="3.5" fill="var(--amber)" />
      <circle cx={latX} cy={latY} r="3.5" fill="var(--amber)" />

      {/* arco do ângulo */}
      <path d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 0 ${arcX} ${arcY}`} {...measure} />
      <text x={cx - r - 6} y={cy + 22} {...mono} textAnchor="end" fill="var(--amber)">
        {theta}°
      </text>

      {blount && <path d={`M ${30 - beak} ${90 + drop * 0.6} L ${34 - beak} ${100 + drop * 0.7}`} {...lesion} />}

      <text x={10} y={44} {...label}>
        medial
      </text>
      <text x={210} y={44} {...label} textAnchor="end">
        lateral
      </text>
      <text x={110} y={252} {...label}>
        eixo da diáfise
      </text>
      <text x={110} y={266} {...label} fill={blount ? "var(--cortical)" : "var(--muted)"}>
        {blount ? (
          <>
            <tspan x={110} dy="0em">&gt; 16°: fortemente</tspan>
            <tspan x={110} dy="1.15em">sugestivo de Blount</tspan>
          </>
        ) : (
          <>
            <tspan x={110} dy="0em">&lt; 11°: zona fisiológica</tspan>
            <tspan x={110} dy="1.15em">provável</tspan>
          </>
        )}
      </text>
    </svg>
  );
};

/* -------------------------------------------------------------------------- */

const LANGENSKIOLD: Record<string, { drop: number; beak: number; caption: string }> = {
  i: { drop: 4, beak: 1, caption: "Estágio I: irregularidade e alargamento da metáfise medial" },
  ii: { drop: 9, beak: 4, caption: "Estágio II: depressão em cunha da metáfise medial" },
  iii: { drop: 15, beak: 8, caption: "Estágio III: degrau metafisário medial mais profundo" },
  iv: { drop: 21, beak: 10, caption: "Estágio IV: epífise medial preenche o degrau; fise muito inclinada" },
  v: { drop: 27, beak: 12, caption: "Estágio V: epífise medial dupla, com fenda articular" },
  vi: { drop: 31, beak: 12, caption: "Estágio VI: barra óssea medial com fechamento fisário" },
};

export const Langenskiold: FC<FigureProps> = ({ variant, className, title }) => {
  const key = (variant ?? "ii").toLowerCase();
  const stage = LANGENSKIOLD[key] ?? LANGENSKIOLD.ii;
  const { drop, beak } = stage;

  return (
    <svg
      viewBox="0 0 220 270"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? stage.caption}</title>

      <path {...bone} d={metaphysisPath(drop, beak)} />
      <path {...boneBack} d={epiphysisPath(drop)} />

      {/* fise: teal quando aberta; interrompida no estágio VI */}
      {key === "vi" ? (
        <>
          <path d={`M 164 76 L 140 77 L 110 78 L 80 ${78 + drop * 0.35}`} {...physisLine} />
          <path d={`M 56 ${78 + drop * 0.8} L 38 ${78 + drop}`} {...physisLine} strokeOpacity="0.35" />
          {/* barra óssea medial */}
          <path
            d={`M 44 ${72 + drop} L 70 ${76 + drop * 0.6}`}
            stroke="var(--cortical)"
            strokeWidth="7"
            strokeLinecap="round"
          />
          <text x={12} y={130} {...label} fill="var(--cortical)">
            barra óssea
          </text>
          <path d={`M 40 126 L 56 ${86 + drop}`} {...guide} />
        </>
      ) : (
        <path d={physisStroke(drop)} {...physisLine} />
      )}

      {/* fenda articular do estágio V */}
      {key === "v" && (
        <>
          <path d={`M 40 ${74 + drop} L 62 ${58 + drop * 0.3} L 78 54`} {...lesion} />
          <text x={12} y={38} {...label} fill="var(--cortical)">
            fenda / epífise dupla
          </text>
          <path d={`M 44 42 L 58 ${58 + drop * 0.3}`} {...guide} />
        </>
      )}

      {/* bico metafisário medial marcado a partir do estágio II */}
      {(key === "ii" || key === "iii" || key === "iv") && (
        <path d={`M ${30 - beak} ${90 + drop * 0.6} L ${34 - beak} ${100 + drop * 0.7}`} {...lesion} />
      )}

      {/* referência horizontal da fise lateral, para leitura da inclinação */}
      <path d="M 30 76 L 176 76" {...guide} />

      <text x={10} y={40} {...label}>
        medial
      </text>
      <text x={210} y={40} {...label} textAnchor="end">
        lateral
      </text>
      <text x={110} y={250} {...mono} textAnchor="middle">
        {key.toUpperCase()}
      </text>
      <text x={110} y={264} {...label} textAnchor="middle">
        Langenskiöld
      </text>
    </svg>
  );
};

/* -------------------------------------------------------------------------- */

export const FisiologicoPatologico: FC<FigureProps> = ({ variant, className, title }) => {
  const pat = variant === "patologico";

  return (
    <svg
      viewBox="0 0 230 320"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>
        {title ??
          (pat
            ? "Varo patológico: ápice focal na metáfise proximal da tíbia"
            : "Varo fisiológico: curvatura difusa, sem ápice focal")}
      </title>

      {/* platô tibial */}
      <path {...bone} d="M 76 34 L 96 30 L 100 22 L 104 30 L 128 34 L 126 52 L 78 52 Z" />
      <path d="M 79 52 L 125 52" {...physisLine} />

      {pat ? (
        <>
          {/* tíbia com angulação abrupta na metáfise proximal */}
          <path {...bone} d="M 78 54 L 74 78 L 92 96 L 92 292 L 126 292 L 126 96 L 138 78 L 126 54 Z" />
          {/* fíbula */}
          <path {...boneBack} d="M 140 60 L 148 82 L 136 100 L 136 288 L 146 288 L 148 98 L 158 78 L 150 58 Z" />
          {/* bico metafisário medial e degrau */}
          <path d="M 74 78 L 66 92 L 80 92" {...lesion} />
          {/* eixos anatômicos dos dois segmentos, com CORA */}
          <path d="M 102 30 L 84 84" {...measure} />
          <path d="M 84 84 L 109 292" {...measureDash} />
          <circle cx="84" cy="84" r="5" fill="var(--amber)" />
          <text x={20} y={112} {...mono} fill="var(--amber)">
            CORA
          </text>
          <path d="M 44 108 L 78 88" {...guide} />
          <text x={150} y={128} {...label} fill="var(--cortical)">
            ápice focal na
          </text>
          <text x={150} y={142} {...label} fill="var(--cortical)">
            metáfise proximal
          </text>
          <text x={16} y={290} {...label}>
            <tspan x={16} dy="0em">unilateral / assimétrico</tspan>
            <tspan x={16} dy="1.15em">progressivo · thrust lateral</tspan>
            <tspan x={16} dy="1.15em">· obesidade</tspan>
          </text>
        </>
      ) : (
        <>
          {/* tíbia com curvatura suave e difusa */}
          <path {...bone} d="M 78 54 C 64 120, 68 224, 86 292 L 120 292 C 130 224, 126 120, 126 54 Z" />
          {/* fíbula */}
          <path {...boneBack} d="M 140 60 C 128 122, 132 224, 148 288 L 158 288 C 142 224, 138 122, 150 58 Z" />
          {/* eixo curvo, sem ápice */}
          <path d="M 102 32 C 88 120, 92 224, 103 290" {...measure} />
          <path d="M 102 32 L 103 290" {...measureDash} />
          <text x={131} y={128} {...label} fill="var(--teal-deep, var(--teal))">
            curvatura difusa,
          </text>
          <text x={131} y={142} {...label} fill="var(--teal-deep, var(--teal))">
            sem ápice definido
          </text>
          <text x={16} y={290} {...label}>
            <tspan x={16} dy="0em">bilateral / simétrico</tspan>
            <tspan x={16} dy="1.15em">resolve c/ idade · sem</tspan>
            <tspan x={16} dy="1.15em">baixa estatura</tspan>
          </text>
        </>
      )}

      <text x={10} y={32} {...label}>
        medial
      </text>
      <text x={222} y={32} {...label} textAnchor="end">
        lateral
      </text>
    </svg>
  );
};

/* -------------------------------------------------------------------------- */

export const CrescimentoGuiado: FC<FigureProps> = ({ className, title }) => {
  const drop = 16;
  const beak = 8;

  return (
    <svg
      viewBox="0 0 250 270"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>
        {title ??
          "Crescimento guiado: placa em banda de tensão lateral na fise tibial proximal, com o lado medial livre para crescer"}
      </title>

      <path {...bone} d={metaphysisPath(drop, beak)} />
      <path {...boneBack} d={epiphysisPath(drop)} />
      <path d={physisStroke(drop)} {...physisLine} />

      {/* placa extraperiosteal lateral em banda de tensão */}
      <path
        d="M 170 62 C 182 64, 184 92, 172 96 C 166 92, 164 68, 170 62 Z"
        fill="var(--surface-2, var(--surface))"
        stroke="var(--cortical)"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      {/* parafusos: epifisário e metafisário, divergentes */}
      <path d="M 172 68 L 140 60" stroke="var(--cortical)" strokeWidth="3.6" strokeLinecap="round" />
      <path d="M 172 90 L 140 94" stroke="var(--cortical)" strokeWidth="3.6" strokeLinecap="round" />
      <circle cx="172" cy="68" r="3.4" fill="var(--cortical)" />
      <circle cx="172" cy="90" r="3.4" fill="var(--cortical)" />

      {/* dobradiça lateral: crescimento tolhido */}
      <path d="M 178 78 m -9 0 a 9 9 0 1 0 18 0 a 9 9 0 1 0 -18 0" {...measure} strokeDasharray="4 4" />
      <text x={170} y={70} {...mono} fill="var(--cortical)">
        tether lat.
      </text>
      <text x={170} y={84} {...label}>
        (dobrad.)
      </text>

      {/* crescimento medial preservado -> correção gradual do varo */}
      <path d="M 44 100 L 44 128" {...measure} strokeWidth="2.4" />
      <path d="M 44 128 L 39 120 M 44 128 L 49 120" {...measure} strokeWidth="2.4" />
      <path d="M 44 100 L 44 72" {...measure} strokeWidth="2.4" />
      <path d="M 44 72 L 39 80 M 44 72 L 49 80" {...measure} strokeWidth="2.4" />
      <text x={6} y={150} {...label} fill="var(--amber)">
        fise medial continua
      </text>
      <text x={6} y={164} {...label} fill="var(--amber)">
        a crescer: valgiza
      </text>

      {/* referência: fise horizontalizando */}
      <path d="M 30 76 L 176 76" {...guide} />

      <text x={10} y={40} {...label}>
        medial
      </text>
      <text x={240} y={40} {...label} textAnchor="end">
        lateral
      </text>
      <text x={125} y={244} {...label} textAnchor="middle">
        <tspan x={125} dy="0em">contraindicado c/ barra fisária</tspan>
        <tspan x={125} dy="1.15em">irressecável ou maturidade</tspan>
      </text>
    </svg>
  );
};

/* -------------------------------------------------------------------------- */

export const Osteotomia: FC<FigureProps> = ({ variant, className, title }) => {
  const v = variant ?? "valgizante";

  if (v === "elevacao") {
    const drop = 28;
    const beak = 12;
    return (
      <svg
        viewBox="0 0 250 270"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>
          {title ??
            "Osteotomia dupla de elevação: elevação do platô medial deprimido associada à osteotomia valgizante infratuberositária"}
        </title>

        <path {...bone} d={metaphysisPath(drop, beak)} />
        <path {...boneBack} d={epiphysisPath(drop)} />
        <path d={physisStroke(drop)} {...physisLine} />

        {/* osteotomia intraepifisária de elevação do platô medial */}
        <path d={`M 40 ${72 + drop} L 66 ${64 + drop * 0.4} L 92 58`} {...lesion} strokeDasharray="7 4" />
        {/* seta de elevação do platô medial */}
        <path d="M 54 44 L 54 22" {...measure} strokeWidth="2.4" />
        <path d="M 54 22 L 49 30 M 54 22 L 59 30" {...measure} strokeWidth="2.4" />
        <text x={8} y={18} {...label} fill="var(--amber)">
          elevar o platô medial deprimido
        </text>

        {/* segunda osteotomia, infratuberositária */}
        <path d="M 62 148 L 150 138" {...lesion} strokeDasharray="7 4" />
        <text x={156} y={136} {...label} fill="var(--cortical)">
          osteotomia
        </text>
        <text x={156} y={150} {...label} fill="var(--cortical)">
          infratuberositária
        </text>

        {/* correção gradual */}
        <path d="M 88 200 A 46 46 0 0 1 152 190" {...measure} strokeDasharray="5 4" />
        <path d="M 152 190 L 143 188 M 152 190 L 149 198" {...measure} />
        <text x={84} y={222} {...label} fill="var(--amber)">
          correção gradual (fixador externo)
        </text>

        <text x={10} y={40} {...label}>
          medial
        </text>
        <text x={240} y={40} {...label} textAnchor="end">
          lateral
        </text>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 250 300"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>
        {title ??
          "Osteotomia tibial proximal valgizante e derrotativa, infratuberositária, com osteotomia da fíbula"}
      </title>

      <path {...bone} d={metaphysisPath(18, 8)} />
      <path {...boneBack} d={epiphysisPath(18)} />
      <path d={physisStroke(18)} {...physisLine} />

      {/* tuberosidade anterior da tíbia (referência de nível) */}
      <path {...boneBack} d="M 118 108 C 132 112, 134 128, 124 134 L 118 132 Z" />
      <text x={140} y={116} {...label}>
        TAT
      </text>

      {/* fíbula proximal */}
      <path {...boneBack} d="M 186 78 C 196 84, 198 108, 190 126 L 186 232 L 176 232 L 178 126 C 176 106, 176 86, 186 78 Z" />

      {/* nível da osteotomia tibial, distal à tuberosidade */}
      <path d="M 66 152 L 136 144" {...lesion} strokeDasharray="7 4" />
      {/* osteotomia da fíbula, mais distal */}
      <path d="M 172 168 L 194 166" {...lesion} strokeDasharray="7 4" />
      <text x={190} y={172} {...label} fill="var(--cortical)">
        osteotomia
      </text>
      <text x={190} y={186} {...label} fill="var(--cortical)">
        da fíbula
      </text>

      <text x={4} y={144} {...label} fill="var(--cortical)">
        osteotomia distal
      </text>
      <text x={4} y={158} {...label} fill="var(--cortical)">
        à tuberosidade
      </text>

      {/* cunha de correção: fechamento lateral / abertura medial */}
      <path d="M 66 152 L 130 178 L 136 144" fill="var(--amber-tint)" stroke="var(--amber)" strokeWidth="1.6" />
      <text x={104} y={196} {...mono} fill="var(--amber)" textAnchor="middle">
        cunha
      </text>

      {/* sobrecorreção em valgo */}
      <path d="M 100 250 L 100 290" {...measureDash} />
      <path d="M 100 250 L 128 290" {...measure} strokeWidth="2.4" />
      <path d="M 100 250 m 0 34 a 34 34 0 0 0 22 26" {...measure} />
      <text x={129} y={286} {...mono} fill="var(--amber)">
        5-10° de valgo
      </text>
      <text x={129} y={300} {...label}>
        (sobrecorreção)
      </text>

      {/* nervo fibular comum em risco */}
      <path d="M 196 96 C 210 108, 212 130, 202 148" fill="none" stroke="var(--teal)" strokeWidth="2.4" strokeDasharray="5 3" />
      <text x={150} y={88} {...label} fill="var(--teal-deep, var(--teal))">
        n. fibular comum
      </text>

      <text x={10} y={40} {...label}>
        medial
      </text>
      <text x={240} y={40} {...label} textAnchor="end">
        lateral
      </text>
    </svg>
  );
};

/* -------------------------------------------------------------------------- */

export const Ortese: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 240 430"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>
      {title ?? "Órtese joelho-tornozelo-pé (KAFO) no Blount infantil: princípio de três pontos contra o varo"}
    </title>

    {/* fêmur distal */}
    <path {...bone} d="M 98 20 C 104 74, 128 116, 130 158 L 158 158 C 156 114, 132 72, 128 18 Z" />
    <path
      {...bone}
      d="M 105 156 C 101 174, 106 190, 118 192 L 142 192 C 154 190, 160 174, 156 156 Z"
    />
    <path d="M 106 160 L 156 160" {...physisLine} />

    {/* tíbia em varo (angulação proximal) */}
    <path {...bone} d="M 108 200 L 104 224 L 96 244 L 92 356 L 122 356 L 124 244 L 136 226 L 152 200 Z" />
    <path d="M 108 200 L 152 200" {...physisLine} />
    {/* bico metafisário medial */}
    <path d="M 104 224 L 92 238 L 108 240" {...lesion} />
    {/* fíbula */}
    <path {...boneBack} d="M 152 204 L 146 240 L 140 352 L 150 352 L 156 240 L 162 204 Z" />

    {/* pé */}
    <path {...bone} d="M 88 358 L 126 358 L 130 374 L 66 378 L 62 366 Z" />

    {/* órtese: hastes medial e lateral com articulação no joelho */}
    <path
      d="M 84 30 L 84 168 M 84 178 L 78 250 L 76 356"
      fill="none"
      stroke="var(--cortical)"
      strokeWidth="3.2"
      strokeLinecap="round"
    />
    <path
      d="M 172 30 L 172 168 M 172 178 L 168 250 L 166 356"
      fill="none"
      stroke="var(--cortical)"
      strokeWidth="3.2"
      strokeLinecap="round"
    />
    <circle cx="84" cy="173" r="6" fill="var(--surface)" stroke="var(--cortical)" strokeWidth="2.4" />
    <circle cx="172" cy="173" r="6" fill="var(--surface)" stroke="var(--cortical)" strokeWidth="2.4" />
    {/* tirantes */}
    <path
      d="M 84 46 L 172 46 M 84 130 L 172 130 M 78 246 L 168 246 M 76 340 L 166 340"
      fill="none"
      stroke="var(--cortical)"
      strokeWidth="2"
    />
    {/* estribo no pé */}
    <path d="M 76 356 L 76 372 L 166 372 L 166 356" fill="none" stroke="var(--cortical)" strokeWidth="3.2" strokeLinejoin="round" />

    {/* princípio de três pontos */}
    <path d="M 40 90 L 74 90" {...measure} strokeWidth="2.4" />
    <path d="M 74 90 L 66 85 M 74 90 L 66 95" {...measure} strokeWidth="2.4" />
    <path d="M 210 232 L 178 232" {...measure} strokeWidth="2.4" />
    <path d="M 178 232 L 186 227 M 178 232 L 186 237" {...measure} strokeWidth="2.4" />
    <path d="M 40 344 L 70 344" {...measure} strokeWidth="2.4" />
    <path d="M 70 344 L 62 339 M 70 344 L 62 349" {...measure} strokeWidth="2.4" />

    <text x={8} y={84} {...label} fill="var(--amber)">
      1
    </text>
    <text x={214} y={228} {...label} fill="var(--amber)">
      2
    </text>
    <text x={8} y={338} {...label} fill="var(--amber)">
      3
    </text>
    <text x={8} y={396} {...label}>
      <tspan x={8} dy="0em">força de três pontos valgizante;</tspan>
      <tspan x={8} dy="1.15em">uso na marcha, criança &lt; 3 anos,</tspan>
      <tspan x={8} dy="1.15em">Langenskiöld I-II</tspan>
    </text>

    <text x={12} y={18} {...label}>
      medial
    </text>
    <text x={232} y={18} {...label} textAnchor="end">
      lateral
    </text>
  </svg>
);

/* -------------------------------------------------------------------------- */

export const figures: Record<string, FC<FigureProps>> = {
  "deformidades-angulares-blount:salenius": Salenius,
  "deformidades-angulares-blount:alinhamento": Alinhamento,
  "deformidades-angulares-blount:drennan": Drennan,
  "deformidades-angulares-blount:langenskiold": Langenskiold,
  "deformidades-angulares-blount:fisiologico-patologico": FisiologicoPatologico,
  "deformidades-angulares-blount:crescimento-guiado": CrescimentoGuiado,
  "deformidades-angulares-blount:osteotomia": Osteotomia,
  "deformidades-angulares-blount:ortese": Ortese,
};
