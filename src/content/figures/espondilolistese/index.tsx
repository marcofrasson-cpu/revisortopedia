import type { FC, ReactNode } from "react";
import type { FigureProps } from "../../../types/topic";

/* ============================================================================
   Figuras esquemáticas originais — Espondilolistese (coluna lombar).
   Line-art de dois tons, sem reprodução de material protegido.
   Referência editorial: Rockwood and Green's Fractures in Adults, 10a ed.
   (2024) / Campbell's Operative Orthopaedics 14a. Cores exclusivamente via
   variáveis CSS.
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
  strokeWidth: 1.3,
  strokeLinejoin: "round" as const,
};

type BoneStyle = typeof bone;

const neuralSoft = {
  fill: "var(--teal)",
  fillOpacity: 0.16,
  stroke: "var(--teal)",
  strokeWidth: 1.6,
  strokeLinejoin: "round" as const,
};

const neuralLine = {
  fill: "none",
  stroke: "var(--teal)",
  strokeWidth: 3.2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const discStyle = {
  fill: "var(--teal)",
  fillOpacity: 0.18,
  stroke: "var(--teal)",
  strokeWidth: 1.5,
  strokeLinejoin: "round" as const,
};

const defect = {
  fill: "none",
  stroke: "var(--cortical)",
  strokeWidth: 3.4,
  strokeLinecap: "round" as const,
};

const compress = {
  fill: "var(--cortical)",
  fillOpacity: 0.2,
  stroke: "var(--cortical)",
  strokeWidth: 1.8,
  strokeLinejoin: "round" as const,
};

const measure = {
  fill: "none",
  stroke: "var(--amber)",
  strokeWidth: 1.5,
  strokeDasharray: "5 4",
  strokeLinecap: "round" as const,
};

const measureSolid = {
  fill: "none",
  stroke: "var(--amber)",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
};

const hardware = {
  fill: "none",
  stroke: "var(--ink)",
  strokeWidth: 3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const leader = {
  fill: "none",
  stroke: "var(--ink-soft)",
  strokeWidth: 0.9,
  opacity: 0.7,
};

const label = {
  fill: "var(--muted)",
  fontFamily: "var(--font-body, sans-serif)",
  fontSize: 11,
};

const amberText = {
  fill: "var(--amber)",
  fontFamily: "var(--font-body, sans-serif)",
  fontSize: 11,
};

function Frame({
  viewBox,
  title,
  className,
  children,
}: {
  viewBox: string;
  title: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <svg
      viewBox={viewBox}
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      {children}
    </svg>
  );
}

/* ---- Blocos reutilizáveis -------------------------------------------------
   Vértebra lombar em perfil, anterior à esquerda. O arco é desenhado em três
   segmentos (anterior, pars, posterior) para permitir representar a lise da
   pars, em que o segmento anterior escorrega e o posterior permanece.
   -------------------------------------------------------------------------- */

/** Corpo vertebral + pedículo + processo articular superior. */
function ArcoAnterior({ b }: { b: BoneStyle }) {
  return (
    <>
      <path
        d="M 6 2 L 50 2 Q 54 2 54 7 L 54 33 Q 54 38 50 38 L 6 38 Q 1 38 2 20 Q 1 2 6 2 Z"
        {...b}
      />
      <path d="M 54 9 L 69 11 Q 73 17 69 23 L 54 25 Z" {...b} />
      <path d="M 63 9 L 65 -7 Q 70 -11 75 -7 L 77 9 Q 70 13 63 9 Z" {...b} />
    </>
  );
}

/** Pars interarticularis (istmo) — a ponte óssea entre os processos articulares. */
function ParsIstmo({ b }: { b: BoneStyle }) {
  return <path d="M 69 11 L 81 17 L 83 28 L 71 23 Z" {...b} />;
}

/** Processo articular inferior + lâmina + processo espinhoso. */
function ArcoPosterior({ b }: { b: BoneStyle }) {
  return (
    <>
      <path d="M 74 26 L 88 32 L 86 47 Q 80 51 75 46 Z" {...b} />
      <path d="M 77 14 L 98 21 L 132 25 L 134 33 L 98 35 L 80 31 Z" {...b} />
    </>
  );
}

/** Vértebra lombar íntegra em perfil. */
function VertebraLateral({ b = bone }: { b?: BoneStyle }) {
  return (
    <>
      <ArcoAnterior b={b} />
      <ParsIstmo b={b} />
      <ArcoPosterior b={b} />
    </>
  );
}

/** Sacro em perfil, com promontório anterior e processo articular superior de S1. */
function Sacro({ b = bone }: { b?: BoneStyle }) {
  return (
    <>
      <path d="M 62 6 L 64 -8 Q 69 -12 74 -8 L 76 8 Q 69 12 62 6 Z" {...b} />
      <path
        d="M 5 3 L 58 2 Q 63 2 64 8 L 68 36 Q 70 62 60 84 Q 54 96 46 94 Q 36 68 24 44 Q 12 22 4 12 Q 1 5 5 3 Z"
        {...b}
      />
    </>
  );
}

/** Disco intervertebral entre dois corpos (coordenadas globais). */
function Disco({ x, y, w = 53, h = 14 }: { x: number; y: number; w?: number; h?: number }) {
  return <rect x={x} y={y} width={w} height={h} rx={4} {...discStyle} />;
}

/* ---- 1. Anatomia ---------------------------------------------------------- */

const Anatomia: FC<FigureProps> = ({ variant, className, title }) => {
  const destacarPars = variant === "pars";
  return (
    <Frame
      viewBox="0 0 440 320"
      title={title ?? "Anatomia da coluna lombar em perfil: corpo, disco, pedículo, pars interarticularis e canal"}
      className={className}
    >
      {/* vértebras: L4, L5 e sacro */}
      <g transform="translate(70,40)">
        <VertebraLateral />
      </g>
      <Disco x={71} y={78} />
      <g transform="translate(70,90)">
        <ArcoAnterior b={bone} />
        <ParsIstmo b={destacarPars ? { ...bone, stroke: "var(--amber)", strokeWidth: 2.6 } : bone} />
        <ArcoPosterior b={bone} />
      </g>
      <Disco x={71} y={128} />
      <g transform="translate(70,142)">
        <Sacro />
      </g>

      {/* saco tecal / canal, visto através do arco */}
      <path
        d="M 128 24 L 146 24 L 146 150 Q 144 176 134 196 L 118 190 Q 128 168 128 148 Z"
        {...neuralSoft}
      />
      {/* raiz de L5 emergindo sob o pedículo de L5 */}
      <path d="M 140 118 Q 152 126 160 144" {...neuralLine} />

      {/* rótulos anteriores */}
      <path d="M 62 60 L 40 60" {...leader} />
      <text x={36} y={63} textAnchor="end" {...label}>
        corpo vertebral (L4)
      </text>
      <path d="M 70 85 L 40 85" {...leader} />
      <text x={36} y={88} textAnchor="end" {...label}>
        disco intervertebral
      </text>
      <path d="M 74 190 L 46 200" {...leader} />
      <text x={42} y={203} textAnchor="end" {...label}>
        sacro (promontório)
      </text>

      {/* rótulos posteriores */}
      <path d="M 137 60 L 300 46" {...leader} />
      <text x={304} y={49} {...label}>
        pedículo
      </text>
      <path d="M 146 25 L 300 20" {...leader} />
      <text x={304} y={23} {...label}>
        saco tecal (canal vertebral)
      </text>
      <path d="M 146 110 L 300 74" {...leader} />
      <text x={304} y={77} {...label}>
        pars interarticularis (istmo)
      </text>
      <path d="M 152 87 L 300 100" {...leader} />
      <text x={304} y={103} {...label}>
        articulação facetária
      </text>
      <path d="M 196 118 L 300 128" {...leader} />
      <text x={304} y={131} {...label}>
        lâmina e processo espinhoso
      </text>
      <path d="M 158 143 L 300 156" {...leader} />
      <text x={304} y={159} {...label}>
        raiz nervosa de L5
      </text>

      <text x={70} y={296} {...label}>
        Perfil — anterior à esquerda
      </text>
    </Frame>
  );
};

/* ---- 2. Tipos de Wiltse: ístmica × degenerativa --------------------------- */

const Wiltse: FC<FigureProps> = ({ variant, className, title }) => {
  const degenerativa = variant === "degenerativa";
  const legenda = degenerativa
    ? "Espondilolistese degenerativa de L4-L5: pars íntegra, todo o arco acompanha o corpo e o canal estreita"
    : "Espondilolistese ístmica de L5-S1: lise da pars, o corpo escorrega e o arco posterior fica para trás";
  return (
    <Frame viewBox="0 0 440 300" title={title ?? legenda} className={className}>
      {degenerativa ? (
        <>
          {/* L3 estável */}
          <g transform="translate(96,26)">
            <VertebraLateral b={boneBack} />
          </g>
          <Disco x={97} y={64} />
          {/* L4 escorregada — arco íntegro, desloca-se inteiro */}
          <g transform="translate(74,76)">
            <VertebraLateral />
          </g>
          <Disco x={97} y={114} />
          {/* L5 estável */}
          <g transform="translate(96,126)">
            <VertebraLateral b={boneBack} />
          </g>

          {/* o canal é estreitado pelo arco que acompanha o corpo */}
          <path d="M 128 100 L 152 100 L 152 132 L 128 132 Z" {...compress} />
          <path d="M 154 60 L 172 60 L 172 96 Q 158 112 156 132 Q 158 152 172 168 L 172 200 L 154 200 Z" {...neuralSoft} />

          <path d="M 96 96 L 60 88" {...leader} />
          <text x={56} y={91} textAnchor="end" {...label}>
            L4 escorrega
          </text>
          <path d="M 152 116 L 300 108" {...leader} />
          <text x={304} y={111} {...label}>
            estenose: o canal ESTREITA
          </text>
          <path d="M 145 92 L 300 76" {...leader} />
          <text x={304} y={79} {...label}>
            pars íntegra — arco acompanha o corpo
          </text>
          <path d="M 150 140 L 300 150" {...leader} />
          <text x={304} y={153} {...label}>
            artrose facetária e instabilidade
          </text>
          <text x={40} y={272} {...label}>
            DEGENERATIVA (Wiltse III) — típica em L4-L5, mulher &gt; 50 anos
          </text>
        </>
      ) : (
        <>
          {/* L4 estável */}
          <g transform="translate(96,26)">
            <VertebraLateral b={boneBack} />
          </g>
          <Disco x={97} y={64} />
          {/* L5: arco anterior escorregado, arco posterior no lugar */}
          <g transform="translate(74,76)">
            <ArcoAnterior b={bone} />
          </g>
          <g transform="translate(96,76)">
            <ArcoPosterior b={bone} />
          </g>
          {/* lise da pars — descontinuidade entre os dois segmentos */}
          <path d="M 145 88 L 167 94" {...defect} />
          <path d="M 147 104 L 169 108" {...defect} />
          <Disco x={80} y={114} w={50} />
          {/* sacro */}
          <g transform="translate(96,128)">
            <Sacro />
          </g>

          {/* o canal permanece amplo — o arco ficou para trás */}
          <path d="M 132 60 L 150 60 L 150 96 L 172 96 L 172 176 L 150 176 L 150 132 L 132 132 Z" {...neuralSoft} />

          <path d="M 96 96 L 60 88" {...leader} />
          <text x={56} y={91} textAnchor="end" {...label}>
            corpo de L5 escorrega
          </text>
          <path d="M 156 96 L 300 68" {...leader} />
          <text x={304} y={71} {...label}>
            lise da pars (espondilólise)
          </text>
          <path d="M 190 108 L 300 96" {...leader} />
          <text x={304} y={99} {...label}>
            arco posterior FICA para trás
          </text>
          <path d="M 168 140 L 300 132" {...leader} />
          <text x={304} y={135} {...label}>
            o canal permanece amplo
          </text>
          <path d="M 120 150 L 300 168" {...leader} />
          <text x={304} y={171} {...label}>
            raiz de L5 tensionada no forame
          </text>
          <text x={40} y={272} {...label}>
            ÍSTMICA (Wiltse II) — típica em L5-S1, jovem/atleta
          </text>
        </>
      )}
    </Frame>
  );
};

/* ---- 3. Graus de Meyerding ------------------------------------------------ */

const grausMeyerding: Record<string, { pct: number; queda: number; texto: string }> = {
  i: { pct: 0.125, queda: 0, texto: "Grau I — até 25%" },
  ii: { pct: 0.375, queda: 0, texto: "Grau II — 25% a 50%" },
  iii: { pct: 0.625, queda: 0, texto: "Grau III — 50% a 75%" },
  iv: { pct: 0.875, queda: 0, texto: "Grau IV — 75% a 100%" },
  v: { pct: 1.18, queda: 30, texto: "Grau V — espondiloptose (> 100%)" },
};

const Meyerding: FC<FigureProps> = ({ variant, className, title }) => {
  const g = grausMeyerding[variant ?? "iii"] ?? grausMeyerding.iii;
  const larguraS1 = 70;
  const xPostS1 = 240; // canto posterior (direito) da placa de S1
  const yPlaca = 168;
  const desloc = g.pct * larguraS1;
  const xPostL5 = xPostS1 - desloc;
  const yL5 = yPlaca - 38 + g.queda;

  return (
    <Frame
      viewBox="0 0 400 280"
      title={title ?? `Classificação de Meyerding — ${g.texto}`}
      className={className}
    >
      {/* sacro / S1 */}
      <path
        d="M 170 168 L 240 168 Q 246 168 246 174 L 244 214 Q 238 244 220 250 L 178 246 Q 168 210 168 176 Q 166 168 170 168 Z"
        {...bone}
      />
      {/* placa terminal superior de S1 dividida em quartos */}
      <path d={`M ${xPostS1 - larguraS1} ${yPlaca} L ${xPostS1} ${yPlaca}`} {...measureSolid} />
      {[1, 2, 3].map((i) => (
        <path
          key={i}
          d={`M ${xPostS1 - (larguraS1 / 4) * i} ${yPlaca - 7} L ${xPostS1 - (larguraS1 / 4) * i} ${yPlaca + 7}`}
          {...measureSolid}
        />
      ))}
      <text x={xPostS1 - 8} y={yPlaca + 22} textAnchor="middle" {...amberText}>
        I
      </text>
      <text x={xPostS1 - 26} y={yPlaca + 22} textAnchor="middle" {...amberText}>
        II
      </text>
      <text x={xPostS1 - 44} y={yPlaca + 22} textAnchor="middle" {...amberText}>
        III
      </text>
      <text x={xPostS1 - 61} y={yPlaca + 22} textAnchor="middle" {...amberText}>
        IV
      </text>

      {/* corpo de L5 deslocado */}
      <g transform={`translate(${xPostL5 - 62},${yL5})`}>
        <path
          d="M 6 2 L 56 2 Q 62 2 62 8 L 62 30 Q 62 36 56 36 L 6 36 Q 0 36 1 19 Q 0 2 6 2 Z"
          {...bone}
        />
      </g>

      {/* linha de referência do canto posterior de L5 até a placa */}
      <path d={`M ${xPostL5} ${yL5 + 36} L ${xPostL5} ${yPlaca + 34}`} {...measure} />
      <path d={`M ${xPostS1} ${yPlaca} L ${xPostS1} ${yPlaca + 34}`} {...measure} />
      <path d={`M ${xPostL5} ${yPlaca + 30} L ${xPostS1} ${yPlaca + 30}`} {...measureSolid} />
      <text x={(xPostL5 + xPostS1) / 2} y={yPlaca + 46} textAnchor="middle" {...amberText}>
        escorregamento
      </text>

      <text x={30} y={40} {...label}>
        {g.texto}
      </text>
      <text x={30} y={58} {...label}>
        % = deslocamento do corpo de L5 dividido pela
      </text>
      <text x={30} y={74} {...label}>
        largura da placa terminal superior de S1
      </text>

      <path d={`M ${xPostL5 - 40} ${yL5 + 18} L 60 ${yL5 + 4}`} {...leader} />
      <text x={56} y={yL5 + 7} textAnchor="end" {...label}>
        L5
      </text>
      <path d="M 210 210 L 300 218" {...leader} />
      <text x={304} y={221} {...label}>
        sacro
      </text>
      <text x={30} y={262} {...label}>
        Perfil — anterior à esquerda
      </text>
    </Frame>
  );
};

/* ---- 4. Cãozinho da Escócia (incidência oblíqua) -------------------------- */

const Scottie: FC<FigureProps> = ({ variant, className, title }) => {
  const comLise = variant !== "normal";
  return (
    <Frame
      viewBox="0 0 400 290"
      title={
        title ??
        (comLise
          ? "Cãozinho da Escócia com coleira: a lise da pars aparece como uma banda no pescoço do cão"
          : "Cãozinho da Escócia íntegro na incidência oblíqua da coluna lombar")
      }
      className={className}
    >
      {/* corpo (lâmina) */}
      <path d="M 150 116 L 244 122 L 250 196 Q 200 208 156 198 Q 142 160 150 116 Z" {...bone} />
      {/* cauda (processo articular superior contralateral) */}
      <path d="M 240 120 Q 248 92 260 82 Q 272 74 276 88 Q 272 112 258 130 Q 248 132 240 120 Z" {...boneBack} />
      {/* pata traseira (processo articular inferior contralateral) */}
      <path d="M 226 198 L 248 194 L 252 244 Q 244 252 236 244 Z" {...boneBack} />
      {/* pescoço (pars interarticularis) */}
      <path d="M 112 138 L 158 142 L 160 172 L 118 166 Q 108 152 112 138 Z" {...bone} />
      {/* pata dianteira (processo articular inferior) */}
      <path d="M 160 194 L 182 198 L 178 246 Q 170 254 162 246 Z" {...bone} />
      {/* orelha (processo articular superior) */}
      <path d="M 104 100 Q 110 70 124 58 Q 136 48 144 60 Q 148 84 140 108 Q 122 116 104 100 Z" {...bone} />
      {/* focinho (processo transverso) */}
      <path d="M 40 128 Q 36 118 48 116 L 96 110 L 100 148 L 50 144 Q 38 142 40 128 Z" {...bone} />
      {/* olho (pedículo) */}
      <ellipse cx={118} cy={126} rx={17} ry={15} {...bone} />

      {/* coleira = lise da pars */}
      {comLise ? (
        <>
          <path d="M 114 146 L 158 152" {...defect} />
          <path d="M 116 158 L 159 162" {...defect} />
          <path d="M 136 174 L 210 240" {...leader} />
          <text x={214} y={243} {...label}>
            &ldquo;coleira&rdquo; = lise da pars
          </text>
        </>
      ) : null}

      {/* rótulos */}
      <path d="M 60 120 L 60 78" {...leader} />
      <text x={60} y={72} textAnchor="middle" {...label}>
        focinho = processo transverso
      </text>
      <path d="M 118 126 L 60 168" {...leader} />
      <text x={56} y={171} textAnchor="end" {...label}>
        olho = pedículo
      </text>
      <path d="M 126 66 L 168 44" {...leader} />
      <text x={172} y={47} {...label}>
        orelha = proc. articular superior
      </text>
      <path d="M 138 154 L 300 126" {...leader} />
      <text x={304} y={129} {...label}>
        pescoço = pars interarticularis
      </text>
      <path d="M 210 160 L 300 156" {...leader} />
      <text x={304} y={159} {...label}>
        corpo = lâmina
      </text>
      <path d="M 172 226 L 300 200" {...leader} />
      <text x={304} y={203} {...label}>
        pata = proc. articular inferior
      </text>
      <path d="M 264 100 L 300 82" {...leader} />
      <text x={304} y={85} {...label}>
        cauda = proc. articular
      </text>
      <text x={304} y={99} {...label}>
        superior contralateral
      </text>

      <text x={30} y={278} {...label}>
        Incidência oblíqua da coluna lombar
      </text>
    </Frame>
  );
};

/* ---- 5. Balanço sagital: parâmetros pélvicos e ângulo de escorregamento --- */

const Sagital: FC<FigureProps> = ({ variant, className, title }) => {
  const slip = variant === "slip";
  return (
    <Frame
      viewBox="0 0 400 300"
      title={
        title ??
        (slip
          ? "Ângulo de escorregamento entre a placa terminal inferior de L5 e a placa terminal superior de S1"
          : "Parâmetros sagitais: incidência pélvica, inclinação sacral e versão pélvica")
      }
      className={className}
    >
      {/* sacro inclinado — placa de S1 de (150,168) a (212,125) */}
      <path
        d="M 150 170 L 210 128 Q 216 124 220 130 L 234 158 Q 246 186 240 214 Q 234 240 218 244 Q 190 216 168 190 Q 148 178 150 170 Z"
        {...bone}
      />
      {/* placa terminal superior de S1 */}
      <path d="M 150 168 L 212 125" {...measureSolid} />

      {slip ? (
        <>
          {/* L5 escorregada e em cifose relativa */}
          <g transform="translate(78,92)">
            <path
              d="M 6 2 L 56 2 Q 62 2 62 8 L 62 30 Q 62 36 56 36 L 6 36 Q 0 36 1 19 Q 0 2 6 2 Z"
              {...bone}
            />
          </g>
          {/* placa terminal inferior de L5 */}
          <path d="M 84 128 L 146 117" {...measureSolid} />
          {/* prolongamentos até o vértice */}
          <path d="M 146 117 L 243 104" {...measure} />
          <path d="M 212 125 L 243 104" {...measure} />
          {/* arco do ângulo de escorregamento */}
          <path d="M 213 106 A 32 32 0 0 1 214 118" {...measureSolid} />
          <text x={252} y={100} {...amberText}>
            ângulo de escorregamento
          </text>
          <path d="M 100 112 L 60 96" {...leader} />
          <text x={56} y={99} textAnchor="end" {...label}>
            L5 escorregada
          </text>
          <path d="M 92 132 L 52 146" {...leader} />
          <text x={48} y={149} textAnchor="end" {...label}>
            placa terminal inferior de L5
          </text>
          <path d="M 172 152 L 300 178" {...leader} />
          <text x={304} y={181} {...label}>
            placa terminal superior de S1
          </text>
          <text x={30} y={278} {...label}>
            Quanto maior a cifose do ângulo, maior o risco de progressão
          </text>
        </>
      ) : (
        <>
          {/* cabeça femoral */}
          <circle cx={152} cy={252} r={15} {...boneBack} />
          <text x={152} y={280} textAnchor="middle" {...label}>
            eixo das cabeças femorais
          </text>

          {/* ponto médio da placa de S1 */}
          <circle cx={181} cy={146} r={3} fill="var(--amber)" />
          {/* perpendicular à placa de S1 pelo ponto médio */}
          <path d="M 127 68 L 235 224" {...measure} />
          {/* linha do ponto médio ao eixo femoral */}
          <path d="M 181 146 L 152 252" {...measureSolid} />
          {/* horizontal de referência */}
          <path d="M 132 146 L 258 146" {...measure} />
          {/* vertical de referência pelo eixo femoral */}
          <path d="M 152 252 L 152 150" {...measure} />

          {/* arco IP entre a perpendicular e a linha do eixo femoral */}
          <path d="M 214 195 A 82 82 0 0 1 168 213" {...measureSolid} />
          <text x={216} y={214} {...amberText}>
            IP
          </text>
          {/* arco SS entre a placa de S1 e a horizontal */}
          <path d="M 226 146 A 45 45 0 0 0 218 120" {...measureSolid} />
          <text x={232} y={132} {...amberText}>
            SS
          </text>
          {/* arco VP entre a vertical e a linha do eixo femoral */}
          <path d="M 152 196 A 56 56 0 0 0 167 199" {...measureSolid} />
          <text x={128} y={200} {...amberText}>
            VP
          </text>

          <path d="M 190 140 L 300 96" {...leader} />
          <text x={304} y={99} {...label}>
            perpendicular à placa de S1
          </text>
          <path d="M 200 136 L 300 126" {...leader} />
          <text x={304} y={129} {...label}>
            placa terminal superior de S1
          </text>

          <text x={26} y={40} {...label}>
            IP = incidência pélvica (constante do indivíduo)
          </text>
          <text x={26} y={56} {...label}>
            SS = inclinação sacral · VP = versão pélvica
          </text>
          <text x={26} y={72} {...amberText}>
            IP = SS + VP
          </text>
          <text x={26} y={278} {...label}>
            IP elevada favorece o escorregamento na forma ístmica
          </text>
        </>
      )}
    </Frame>
  );
};

/* ---- 6. Corte axial: canal normal × estenose degenerativa ----------------- */

const Estenose: FC<FigureProps> = ({ variant, className, title }) => {
  const estenose = variant !== "normal";
  return (
    <Frame
      viewBox="0 0 400 280"
      title={
        title ??
        (estenose
          ? "Corte axial: estenose central e do recesso lateral por hipertrofia facetária e do ligamento amarelo"
          : "Corte axial normal da vértebra lombar, com saco tecal amplo")
      }
      className={className}
    >
      {/* corpo vertebral (anterior em cima) */}
      <path
        d="M 190 30 Q 248 32 260 66 Q 266 92 252 106 L 228 106 Q 190 96 152 106 L 128 106 Q 114 92 120 66 Q 132 32 190 30 Z"
        {...bone}
      />
      {/* pedículos */}
      <path d="M 130 104 L 152 104 L 156 136 L 132 138 Q 122 120 130 104 Z" {...bone} />
      <path d="M 250 104 L 228 104 L 224 136 L 248 138 Q 258 120 250 104 Z" {...bone} />
      {/* lâminas */}
      <path d="M 132 136 L 156 138 L 188 168 L 180 180 L 142 152 Q 128 146 132 136 Z" {...bone} />
      <path d="M 248 136 L 224 138 L 192 168 L 200 180 L 238 152 Q 252 146 248 136 Z" {...bone} />
      {/* processo espinhoso */}
      <path d="M 182 168 L 198 168 L 200 214 Q 190 222 180 214 Z" {...bone} />

      {estenose ? (
        <>
          {/* facetas hipertrofiadas */}
          <ellipse cx={128} cy={150} rx={22} ry={18} {...compress} />
          <ellipse cx={252} cy={150} rx={22} ry={18} {...compress} />
          {/* ligamento amarelo espessado */}
          <path d="M 156 140 Q 190 158 224 140 Q 226 156 210 164 Q 190 172 170 164 Q 154 156 156 140 Z" {...compress} />
          {/* saco tecal comprimido — aspecto em trevo */}
          <path
            d="M 190 112 Q 210 112 214 124 Q 216 136 204 140 Q 196 144 190 144 Q 184 144 176 140 Q 164 136 166 124 Q 170 112 190 112 Z"
            {...neuralSoft}
          />
          <path d="M 122 168 L 60 190" {...leader} />
          <text x={56} y={193} textAnchor="end" {...label}>
            hipertrofia facetária
          </text>
          <path d="M 190 158 L 300 196" {...leader} />
          <text x={304} y={199} {...label}>
            ligamento amarelo espessado
          </text>
          <path d="M 200 128 L 300 96" {...leader} />
          <text x={304} y={99} {...label}>
            saco tecal comprimido
          </text>
          <text x={304} y={113} {...label}>
            (aspecto em trevo)
          </text>
          <path d="M 168 134 L 60 128" {...leader} />
          <text x={56} y={131} textAnchor="end" {...label}>
            recesso lateral estreito
          </text>
          <text x={26} y={266} {...label}>
            ESTENOSE — a claudicação neurogênica domina o quadro
          </text>
        </>
      ) : (
        <>
          {/* facetas de tamanho normal */}
          <ellipse cx={132} cy={150} rx={14} ry={12} {...boneBack} />
          <ellipse cx={248} cy={150} rx={14} ry={12} {...boneBack} />
          {/* saco tecal amplo */}
          <ellipse cx={190} cy={132} rx={32} ry={22} {...neuralSoft} />
          {/* raízes */}
          <circle cx={168} cy={144} r={5} {...neuralSoft} />
          <circle cx={212} cy={144} r={5} {...neuralSoft} />
          <path d="M 214 124 L 300 96" {...leader} />
          <text x={304} y={99} {...label}>
            saco tecal amplo
          </text>
          <path d="M 168 148 L 60 168" {...leader} />
          <text x={56} y={171} textAnchor="end" {...label}>
            raiz no recesso lateral
          </text>
          <text x={26} y={266} {...label}>
            NORMAL — canal e recessos laterais livres
          </text>
        </>
      )}

      <path d="M 190 30 L 190 12" {...leader} />
      <text x={190} y={9} textAnchor="middle" {...label}>
        anterior
      </text>
    </Frame>
  );
};

/* ---- 7. Tratamento: descompressão isolada × descompressão + artrodese ----- */

const Tratamento: FC<FigureProps> = ({ variant, activeStep, className, title }) => {
  const modo = variant ?? (activeStep && activeStep >= 5 ? "artrodese" : "descompressao");
  const comArtrodese = modo === "artrodese";
  return (
    <Frame
      viewBox="0 0 440 300"
      title={
        title ??
        (comArtrodese
          ? "Descompressão associada a artrodese posterolateral instrumentada com parafusos pediculares"
          : "Descompressão isolada: remoção do arco posterior preservando o segmento sem artrodese")
      }
      className={className}
    >
      {/* L4 */}
      <g transform="translate(70,40)">
        <ArcoAnterior b={bone} />
        <ParsIstmo b={bone} />
        {comArtrodese ? <ArcoPosterior b={bone} /> : null}
      </g>
      <Disco x={71} y={78} />
      {/* L5 */}
      <g transform="translate(70,90)">
        <ArcoAnterior b={bone} />
        <ParsIstmo b={bone} />
        {comArtrodese ? <ArcoPosterior b={bone} /> : null}
      </g>
      <Disco x={71} y={128} />
      {/* sacro */}
      <g transform="translate(70,142)">
        <Sacro />
      </g>

      {/* contorno tracejado do arco removido */}
      {!comArtrodese ? (
        <>
          <g transform="translate(70,40)" opacity={0.45}>
            <ArcoPosterior
              b={{ ...boneBack, fill: "none", stroke: "var(--ink-soft)", strokeWidth: 1.2 }}
            />
          </g>
          <g transform="translate(70,90)" opacity={0.45}>
            <ArcoPosterior
              b={{ ...boneBack, fill: "none", stroke: "var(--ink-soft)", strokeWidth: 1.2 }}
            />
          </g>
        </>
      ) : null}

      {/* saco tecal descomprimido */}
      <path
        d="M 128 24 L 148 24 L 148 150 Q 146 176 136 196 L 120 190 Q 130 168 130 148 Z"
        {...neuralSoft}
      />

      {comArtrodese ? (
        <>
          {/* parafusos pediculares em L4 e L5 + haste */}
          <path d="M 158 57 L 104 55" {...hardware} />
          <path d="M 158 107 L 104 105" {...hardware} />
          <circle cx={160} cy={57} r={5} {...hardware} />
          <circle cx={160} cy={107} r={5} {...hardware} />
          {/* parafuso em S1 */}
          <path d="M 162 158 L 112 152" {...hardware} />
          <circle cx={164} cy={158} r={5} {...hardware} />
          {/* haste */}
          <path d="M 160 57 L 160 107 L 164 158" {...hardware} />
          {/* enxerto posterolateral */}
          <path d="M 176 66 Q 190 92 178 148" {...{ ...hardware, strokeDasharray: "4 5", strokeWidth: 2.2 }} />

          <path d="M 160 57 L 300 40" {...leader} />
          <text x={304} y={43} {...label}>
            parafusos pediculares
          </text>
          <path d="M 160 84 L 300 66" {...leader} />
          <text x={304} y={69} {...label}>
            haste
          </text>
          <path d="M 186 106 L 300 100" {...leader} />
          <text x={304} y={103} {...label}>
            enxerto posterolateral
          </text>
          <path d="M 140 130 L 300 138" {...leader} />
          <text x={304} y={141} {...label}>
            saco tecal descomprimido
          </text>
          <text x={40} y={274} {...label}>
            DESCOMPRESSÃO + ARTRODESE INSTRUMENTADA
          </text>
        </>
      ) : (
        <>
          <path d="M 150 60 L 300 46" {...leader} />
          <text x={304} y={49} {...label}>
            arco posterior removido
          </text>
          <text x={304} y={63} {...label}>
            (contorno tracejado)
          </text>
          <path d="M 140 120 L 300 104" {...leader} />
          <text x={304} y={107} {...label}>
            saco tecal descomprimido
          </text>
          <path d="M 120 168 L 300 150" {...leader} />
          <text x={304} y={153} {...label}>
            sem implantes: menor sangramento,
          </text>
          <text x={304} y={167} {...label}>
            menor tempo e menor custo
          </text>
          <text x={40} y={274} {...label}>
            DESCOMPRESSÃO ISOLADA
          </text>
        </>
      )}
    </Frame>
  );
};

/* -------------------------------------------------------------------------- */

export const figures: Record<string, FC<FigureProps>> = {
  "espondilolistese:anatomia": Anatomia,
  "espondilolistese:wiltse": Wiltse,
  "espondilolistese:meyerding": Meyerding,
  "espondilolistese:scottie": Scottie,
  "espondilolistese:sagital": Sagital,
  "espondilolistese:estenose": Estenose,
  "espondilolistese:tratamento": Tratamento,
};
