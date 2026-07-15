import type { FC, ReactNode } from "react";
import type { FigureProps } from "../../../types/topic";

/* ============================================================================
   Figuras esquemáticas originais — Escoliose idiopática do adolescente.
   Line-art de dois tons, sem reprodução de material protegido.
   Referência editorial: Rockwood and Green's Fractures in Adults, 10a ed.
   (2024) / Campbell's Operative Orthopaedics 14a. Cores exclusivamente via
   variáveis CSS.
   ========================================================================== */

const bone = {
  fill: "var(--surface)",
  stroke: "var(--ink-soft)",
  strokeWidth: 1.6,
  strokeLinejoin: "round" as const,
};

const boneBack = {
  fill: "var(--surface-2, var(--surface))",
  stroke: "var(--ink-soft)",
  strokeWidth: 1.1,
  strokeLinejoin: "round" as const,
};

type BoneStyle = typeof bone;

/** Cartilagem / disco / tecido neural — família teal. */
const cartilage = {
  fill: "var(--teal)",
  fillOpacity: 0.18,
  stroke: "var(--teal)",
  strokeWidth: 1.5,
  strokeLinejoin: "round" as const,
};

const cartilageLine = {
  fill: "none",
  stroke: "var(--teal)",
  strokeWidth: 2.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Deformidade estrutural / gibosidade / curva estrutural — família cortical. */
const structuralFill = {
  fill: "var(--cortical)",
  fillOpacity: 0.18,
  stroke: "var(--cortical)",
  strokeWidth: 1.6,
  strokeLinejoin: "round" as const,
};

const structuralLine = {
  fill: "none",
  stroke: "var(--cortical)",
  strokeWidth: 2.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Medidas, ângulos e marcadores de estadiamento — família amber. */
const measure = {
  fill: "none",
  stroke: "var(--amber)",
  strokeWidth: 1.4,
  strokeDasharray: "5 4",
  strokeLinecap: "round" as const,
};

const measureSolid = {
  fill: "none",
  stroke: "var(--amber)",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
};

const apofise = {
  fill: "var(--amber)",
  fillOpacity: 0.32,
  stroke: "var(--amber)",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const hardware = {
  fill: "none",
  stroke: "var(--ink)",
  strokeWidth: 2.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const leader = {
  fill: "none",
  stroke: "var(--ink-soft)",
  strokeWidth: 0.9,
  opacity: 0.7,
};

const refLine = {
  fill: "none",
  stroke: "var(--ink-soft)",
  strokeWidth: 1.2,
  strokeDasharray: "4 4",
  opacity: 0.65,
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

const corticalText = {
  fill: "var(--cortical)",
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
   Convenções: incidência frontal (coronal) com a convexidade da curva à
   direita da figura; incidência axial com o anterior para cima; perfil com o
   anterior à esquerda.
   -------------------------------------------------------------------------- */

/**
 * Vértebra em incidência frontal: corpo, os dois pedículos e o processo
 * espinhoso. `rot` (-1..1, positivo = convexidade à direita) desloca pedículos
 * e espinhoso para a CONCAVIDADE — o sinal radiográfico da rotação axial.
 */
function VertebraCoronal({
  cx,
  cy,
  w,
  h,
  rot = 0,
  tilt = 0,
  b = bone,
}: {
  cx: number;
  cy: number;
  w: number;
  h: number;
  rot?: number;
  tilt?: number;
  b?: BoneStyle;
}) {
  const dx = -rot * w * 0.26;
  return (
    <g transform={`translate(${cx},${cy}) rotate(${tilt})`}>
      <rect x={-w / 2} y={-h / 2} width={w} height={h} rx={2.5} {...b} />
      <ellipse cx={-w * 0.25 + dx} cy={0} rx={3.2} ry={h * 0.3} {...b} />
      <ellipse cx={w * 0.25 + dx} cy={0} rx={3.2} ry={h * 0.3} {...b} />
      <ellipse
        cx={dx}
        cy={0}
        rx={2.2}
        ry={h * 0.26}
        fill="var(--ink-soft)"
        fillOpacity={0.28}
        stroke="var(--ink-soft)"
        strokeWidth={0.9}
      />
    </g>
  );
}

/** Vértebra em perfil — corpo + arco posterior, anterior à esquerda. */
function VertebraPerfil({
  cx,
  cy,
  w,
  h,
  tilt = 0,
  b = bone,
}: {
  cx: number;
  cy: number;
  w: number;
  h: number;
  tilt?: number;
  b?: BoneStyle;
}) {
  return (
    <g transform={`translate(${cx},${cy}) rotate(${tilt})`}>
      <rect x={-w / 2} y={-h / 2} width={w} height={h} rx={2.5} {...b} />
      <path
        d={`M ${w / 2} ${-h * 0.28} L ${w / 2 + w * 0.5} ${-h * 0.08} L ${w / 2 + w * 0.6} ${h * 0.5} L ${w / 2 + w * 0.08} ${h * 0.3} Z`}
        {...b}
      />
    </g>
  );
}

/** Vértebra torácica em corte axial, centrada na origem, anterior para cima. */
function VertebraAxial({ b = bone }: { b?: BoneStyle }) {
  return (
    <>
      {/* corpo vertebral */}
      <path
        d="M 0 -46 Q 40 -45 50 -18 Q 55 -1 44 10 L 24 10 Q 0 3 -24 10 L -44 10 Q -55 -1 -50 -18 Q -40 -45 0 -46 Z"
        {...b}
      />
      {/* pedículos */}
      <path d="M -42 8 L -22 8 L -20 34 L -40 36 Q -50 22 -42 8 Z" {...b} />
      <path d="M 42 8 L 22 8 L 20 34 L 40 36 Q 50 22 42 8 Z" {...b} />
      {/* processos transversos (articulação costotransversária) */}
      <path d="M -38 14 L -74 24 L -78 38 L -36 34 Z" {...b} />
      <path d="M 38 14 L 74 24 L 78 38 L 36 34 Z" {...b} />
      {/* lâminas */}
      <path d="M -40 34 L -20 34 L -3 60 L -11 70 L -48 44 Q -52 38 -40 34 Z" {...b} />
      <path d="M 40 34 L 20 34 L 3 60 L 11 70 L 48 44 Q 52 38 40 34 Z" {...b} />
      {/* processo espinhoso */}
      <path d="M -8 58 L 8 58 L 9 96 Q 0 104 -9 96 Z" {...b} />
    </>
  );
}

const gauss = (i: number, c: number, w: number) => Math.exp(-(((i - c) / w) ** 2));

/** Amplitudes das três regiões (positivo = convexidade à direita). */
interface Amplitudes {
  pt: number;
  mt: number;
  tl: number;
}

const desvio = (i: number, a: Amplitudes) =>
  a.pt * gauss(i, 2.5, 2.1) + a.mt * gauss(i, 8, 3) + a.tl * gauss(i, 13, 2.6);

/* ---- 1. Deformidade tridimensional ---------------------------------------- */

const Anatomia: FC<FigureProps> = ({ variant, className, title }) => {
  /* -- 1a. Plano axial: rotação vertebral e gibosidade costal -- */
  if (variant === "axial") {
    return (
      <Frame
        viewBox="0 0 460 300"
        title={
          title ??
          "Corte axial no ápice: o corpo vertebral roda para a convexidade e o processo espinhoso para a concavidade, empurrando as costelas posteriormente e criando a gibosidade"
        }
        className={className}
      >
        {/* contorno torácico de referência, simétrico */}
        <ellipse cx={230} cy={150} rx={158} ry={112} {...refLine} />

        {/* contorno cutâneo real: gibosidade posterior à direita, depressão à esquerda */}
        <path
          d="M 230 38 C 312 40, 388 84, 392 146 C 396 212, 348 268, 268 282 C 240 287, 214 284, 190 274 C 128 250, 70 202, 72 146 C 74 84, 150 36, 230 38 Z"
          fill="none"
          stroke="var(--ink-soft)"
          strokeWidth={1.6}
        />

        {/* vértebra + costelas rodadas em bloco */}
        <g transform="rotate(24 230 150)">
          <g transform="translate(230,138) scale(0.86)">
            <VertebraAxial />
            {/* medula no canal */}
            <ellipse cx={0} cy={40} rx={13} ry={11} {...cartilage} />
          </g>
          {/* costela direita — arrastada para posterior pela rotação */}
          <path
            d="M 296 173 C 372 178, 402 116, 372 62 C 342 8, 268 -6, 224 4"
            {...{ fill: "none", stroke: "var(--ink-soft)", strokeWidth: 1.8, strokeLinecap: "round" as const }}
          />
          {/* costela esquerda — projetada para anterior */}
          <path
            d="M 164 173 C 88 178, 58 116, 88 62 C 118 8, 192 -6, 236 4"
            {...{ fill: "none", stroke: "var(--ink-soft)", strokeWidth: 1.8, strokeLinecap: "round" as const }}
          />
          {/* esterno */}
          <rect x={220} y={-4} width={20} height={14} rx={3} {...boneBack} />
        </g>

        {/* realce da gibosidade */}
        <path d="M 300 262 Q 350 240 378 190" {...structuralLine} />

        <path d="M 344 232 L 402 210" {...leader} />
        <text x={406} y={213} {...corticalText}>
          gibosidade
        </text>
        <text x={406} y={227} {...label}>
          (convexidade)
        </text>

        <path d="M 132 236 L 74 250" {...leader} />
        <text x={70} y={253} textAnchor="end" {...label}>
          depressão posterior
        </text>
        <text x={70} y={267} textAnchor="end" {...label}>
          (concavidade)
        </text>

        <path d="M 254 106 L 402 74" {...leader} />
        <text x={406} y={77} {...label}>
          corpo roda para a
        </text>
        <text x={406} y={91} {...label}>
          CONVEXIDADE
        </text>

        <path d="M 196 200 L 74 172" {...leader} />
        <text x={70} y={175} textAnchor="end" {...label}>
          processo espinhoso desvia
        </text>
        <text x={70} y={189} textAnchor="end" {...label}>
          para a CONCAVIDADE
        </text>

        <path d="M 228 178 L 74 120" {...leader} />
        <text x={70} y={123} textAnchor="end" {...label}>
          medula no canal
        </text>

        <text x={230} y={22} textAnchor="middle" {...label}>
          anterior
        </text>
        <text x={72} y={294} {...label}>
          Tracejado = tórax simétrico de referência — a rotação axial é o que cria a gibosidade
        </text>
      </Frame>
    );
  }

  /* -- 1b. Plano sagital: hipocifose torácica -- */
  if (variant === "sagital") {
    const niveis = Array.from({ length: 12 }, (_, i) => i);
    const yDe = (i: number) => 62 + i * 15;
    const xNormal = (i: number) => 176 + 36 * Math.sin((Math.PI * i) / 11);
    const xEia = (i: number) => 176 + 11 * Math.sin((Math.PI * i) / 11);
    return (
      <Frame
        viewBox="0 0 440 300"
        title={
          title ??
          "Perfil: a escoliose idiopática do adolescente aplaina a cifose torácica — hipocifose (dorso plano), e não hipercifose"
        }
        className={className}
      >
        {/* contorno da cifose normal, de referência */}
        <path
          d={`M ${xNormal(0)} ${yDe(0)} ${niveis
            .slice(1)
            .map((i) => `L ${xNormal(i)} ${yDe(i)}`)
            .join(" ")}`}
          {...refLine}
        />
        {niveis.map((i) => (
          <circle key={`n-${i}`} cx={xNormal(i)} cy={yDe(i)} r={2} fill="var(--ink-soft)" opacity={0.5} />
        ))}

        {/* coluna torácica hipocifótica da EIA */}
        {niveis.map((i) => (
          <VertebraPerfil
            key={`e-${i}`}
            cx={xEia(i)}
            cy={yDe(i)}
            w={30 + i * 0.7}
            h={11}
            tilt={-10 * Math.cos((Math.PI * i) / 11)}
          />
        ))}

        <path d="M 214 100 L 300 66" {...leader} />
        <text x={304} y={69} {...label}>
          cifose torácica normal
        </text>
        <text x={304} y={83} {...label}>
          T5-T12 ≈ 20° a 40° (tracejado)
        </text>

        <path d="M 172 150 L 96 128" {...leader} />
        <text x={92} y={131} textAnchor="end" {...corticalText}>
          hipocifose
        </text>
        <text x={92} y={145} textAnchor="end" {...label}>
          (dorso plano)
        </text>

        <text x={40} y={266} {...label}>
          A EIA é lordosante no plano sagital: o segmento torácico se APLAINA.
        </text>
        <text x={40} y={282} {...label}>
          Perfil — anterior à esquerda. Hipercifose verdadeira não é EIA: investigar outra causa.
        </text>
      </Frame>
    );
  }

  /* -- 1c. Plano coronal (padrão) -- */
  const amps: Amplitudes = { pt: -7, mt: 27, tl: -13 };
  const niveis = Array.from({ length: 17 }, (_, i) => i);
  const nomes = [
    "T1", "T2", "T3", "T4", "T5", "T6", "T7", "T8", "T9",
    "T10", "T11", "T12", "L1", "L2", "L3", "L4", "L5",
  ];
  const yDe = (i: number) => 44 + i * 14;
  const xDe = (i: number) => 196 + desvio(i, amps);
  const rotDe = (i: number) => desvio(i, amps) / 27;

  return (
    <Frame
      viewBox="0 0 460 338"
      title={
        title ??
        "Incidência frontal: curva torácica principal convexa à direita, com curva compensatória lombar e migração dos pedículos para a concavidade"
      }
      className={className}
    >
      {/* linha média de referência */}
      <path d="M 196 30 L 196 296" {...refLine} />

      {/* cintura escapular e pelve — a assimetria clínica */}
      <path d="M 120 52 L 272 44" {...{ ...refLine, strokeDasharray: "none", opacity: 0.5 }} />
      <path d="M 138 288 L 258 288" {...{ ...refLine, strokeDasharray: "none", opacity: 0.5 }} />

      {niveis.map((i) => (
        <VertebraCoronal
          key={i}
          cx={xDe(i)}
          cy={yDe(i)}
          w={28 + i * 1.2}
          h={10 + i * 0.28}
          rot={rotDe(i)}
          tilt={9 * Math.cos((Math.PI * (i - 8)) / 7) * (i < 12 ? 1 : 0.4)}
        />
      ))}

      {/* marcador do ápice */}
      <path d="M 244 156 L 260 156" {...measureSolid} />
      <circle cx={xDe(8)} cy={yDe(8)} r={3} fill="var(--amber)" />

      <path d="M 168 44 L 154 36" {...leader} />
      <text x={150} y={39} textAnchor="end" {...label}>
        {nomes[0]} — ombros
      </text>

      <path d="M 220 100 L 320 84" {...leader} />
      <text x={324} y={87} {...label}>
        vértebra terminal sup.
      </text>

      <path d="M 262 156 L 320 148" {...leader} />
      <text x={324} y={151} {...amberText}>
        vértebra apical
      </text>
      <text x={324} y={165} {...label}>
        maior desvio/rotação
      </text>

      <path d="M 218 212 L 320 204" {...leader} />
      <text x={324} y={207} {...label}>
        vértebra terminal inf.
      </text>

      <path d="M 176 240 L 154 232" {...leader} />
      <text x={150} y={235} textAnchor="end" {...label}>
        curva lombar compens.
      </text>

      <path d="M 232 128 L 128 108" {...leader} />
      <text x={125} y={111} textAnchor="end" {...label}>
        CONVEXA (dir.)
      </text>

      <path d="M 166 172 L 96 164" {...leader} />
      <text x={92} y={167} textAnchor="end" {...label}>
        CONCAVIDADE
      </text>

      <text x={40} y={296} {...label}>
        <tspan x={40} dy="0em">Pedículos e espinhosos migram para a concavidade</tspan>
        <tspan x={40} dy="1.15em">— leitura radiográfica da rotação.</tspan>
        <tspan x={40} dy="1.15em">{nomes[16]} na base.</tspan>
      </text>
    </Frame>
  );
};

/* ---- 2. Teste de Adams, gibosidade e escoliômetro ------------------------- */

const Adams: FC<FigureProps> = ({ className, title }) => (
  <Frame
    viewBox="0 0 530 330"
    title={
      title ??
      "Teste de Adams: na flexão anterior do tronco a rotação vertebral se traduz em gibosidade, medida pelo escoliômetro como ângulo de rotação do tronco"
    }
    className={className}
  >
    {/* superfície do dorso, vista pelo examinador com o paciente em flexão */}
    <path
      d="M 44 196 C 96 182, 142 172, 178 166 C 208 161, 224 128, 262 124 C 304 120, 336 152, 356 180 C 368 196, 384 208, 400 214"
      fill="none"
      stroke="var(--ink-soft)"
      strokeWidth={1.8}
      strokeLinecap="round"
    />

    {/* vértebra rodada sob a gibosidade, em tom secundário */}
    <g transform="rotate(24 236 216) translate(236,216) scale(0.5)">
      <VertebraAxial b={boneBack} />
    </g>
    {/* costelas esquemáticas acompanhando a rotação */}
    <g transform="rotate(24 236 216)">
      <path
        d="M 268 226 C 322 224, 342 190, 322 160"
        fill="none"
        stroke="var(--ink-soft)"
        strokeWidth={1.2}
        opacity={0.6}
      />
      <path
        d="M 204 226 C 150 224, 130 190, 150 160"
        fill="none"
        stroke="var(--ink-soft)"
        strokeWidth={1.2}
        opacity={0.6}
      />
    </g>

    {/* realce da gibosidade */}
    <path d="M 226 130 C 262 118, 310 132, 344 168" {...structuralLine} />

    {/* linha horizontal de referência sobre o dorso */}
    <path d="M 130 154 L 358 154" {...measure} />

    {/* escoliômetro apoiado sobre o dorso, inclinado pela gibosidade */}
    <g transform="rotate(-16 224 136)">
      <path d="M 158 118 L 290 118 Q 296 118 296 124 L 296 138 Q 296 144 290 144 L 158 144 Q 152 144 152 138 L 152 124 Q 152 118 158 118 Z" {...bone} />
      {/* calha inferior que apoia sobre o dorso */}
      <path d="M 196 144 Q 224 158 252 144" {...{ ...bone, fill: "none" }} />
      {/* escala e bolha */}
      <path d="M 168 134 L 280 134" {...{ ...leader, opacity: 0.55 }} />
      {[0, 1, 2, 3, 4, 5, 6].map((k) => (
        <path key={k} d={`M ${180 + k * 16} 126 L ${180 + k * 16} 134`} {...{ ...leader, opacity: 0.55 }} />
      ))}
      <circle cx={244} cy={130} r={4.5} {...cartilage} />
      <text x={224} y={113} textAnchor="middle" {...label}>
        escoliômetro
      </text>
    </g>

    {/* ângulo de rotação do tronco entre a horizontal e o escoliômetro */}
    <path d="M 296 154 A 72 72 0 0 0 292 134" {...measureSolid} />
    <text x={312} y={148} {...amberText}>
      RTT
    </text>

    <path d="M 344 168 L 400 186" {...leader} />
    <text x={404} y={189} {...corticalText}>
      gibosidade
    </text>

    <path d="M 236 216 L 380 240" {...leader} />
    <text x={380} y={243} {...label}>
      rotação vertebral
    </text>
    <text x={380} y={257} {...label}>
      (causa)
    </text>

    <path d="M 150 160 L 144 172" {...leader} />
    <text x={140} y={175} textAnchor="end" {...label}>
      horizontal de ref.
    </text>

    <text x={40} y={54} {...label}>
      Paciente em flexão anterior, pés juntos, joelhos estendidos, mãos pendentes —
    </text>
    <text x={40} y={70} {...label}>
      o examinador observa o dorso no plano tangencial, de trás e de cima.
    </text>
    <text x={40} y={288} {...amberText}>
      <tspan x={40} dy="0em">RTT ≥ 5° a 7° no escoliômetro →</tspan>
      <tspan x={40} dy="1.15em">solicitar radiografia panorâmica.</tspan>
      <tspan x={40} dy="1.15em">Detecta ROTAÇÃO, não mede o Cobb.</tspan>
    </text>
  </Frame>
);

/* ---- 3. Medida do ângulo de Cobb ------------------------------------------ */

const Cobb: FC<FigureProps> = ({ className, title }) => {
  const niveis = Array.from({ length: 13 }, (_, i) => i);
  const off = (i: number) => 34 * gauss(i, 6, 3.6);
  const xDe = (i: number) => 150 + off(i) - off(1);
  const yDe = (i: number) => 80 + i * 13;
  const tilt = (i: number) => 22 * Math.sin((Math.PI * (i - 6)) / 10);
  const rot = (i: number) => (off(i) - off(1)) / (off(6) - off(1));

  return (
    <Frame
      viewBox="-80 0 560 350"
      title={
        title ??
        "Ângulo de Cobb: traçam-se as placas terminais das vértebras terminais — as mais inclinadas — e mede-se o ângulo entre suas perpendiculares"
      }
      className={className}
    >
      {niveis.map((i) => {
        const terminal = i === 1 || i === 11;
        return (
          <VertebraCoronal
            key={i}
            cx={xDe(i)}
            cy={yDe(i)}
            w={40 + i * 1.1}
            h={12}
            rot={rot(i)}
            tilt={tilt(i)}
            b={terminal ? bone : boneBack}
          />
        );
      })}

      {/* placas terminais das vértebras terminais, prolongadas */}
      <path d="M 128 94.9 L 172 77.1" {...measureSolid} />
      <path d="M 172 77.1 L 258 42.9" {...measure} />
      <path d="M 128 221.1 L 172 238.9" {...measureSolid} />
      <path d="M 172 238.9 L 258 273.1" {...measure} />

      {/* perpendiculares */}
      <path d="M 258 42.9 L 304.5 158" {...measure} />
      <path d="M 258 273.1 L 304.5 158" {...measure} />

      {/* arco do ângulo de Cobb */}
      <path d="M 288.8 119.1 A 42 42 0 0 0 288.8 196.9" {...measureSolid} />
      <text x={280} y={162} textAnchor="end" {...amberText}>
        44°
      </text>

      <path d="M 304.5 158 L 388 176" {...leader} />
      <text x={392} y={179} {...amberText}>
        ângulo de Cobb
      </text>

      <path d="M 214 60 L 262 30" {...leader} />
      <text x={266} y={33} {...label}>
        placa terminal superior
      </text>

      <path d="M 214 256 L 262 292" {...leader} />
      <text x={266} y={295} {...label}>
        placa terminal inferior
      </text>

      <path d="M 282 96 L 392 92" {...leader} />
      <text x={396} y={95} {...label}>
        perpendiculares
      </text>

      <path d="M 128 93 L 8 74" {...leader} />
      <text x={4} y={77} textAnchor="end" {...label}>
        term. sup.
      </text>
      <text x={4} y={91} textAnchor="end" {...label}>
        (+ inclinada)
      </text>

      <path d="M 152 158 L 8 152" {...leader} />
      <text x={4} y={155} textAnchor="end" {...label}>
        vért. apical
      </text>

      <path d="M 128 223 L 8 244" {...leader} />
      <text x={4} y={247} textAnchor="end" {...label}>
        term. inf.
      </text>

      <text x={-70} y={318} {...label}>
        <tspan x={-70} dy="0em">Escoliose = Cobb ≥ 10° com rotação.</tspan>
        <tspan x={-70} dy="1.15em">Erro interobservador ~5°: progressão</tspan>
        <tspan x={-70} dy="1.15em">só a partir de 5° a 10°.</tspan>
      </text>
    </Frame>
  );
};

/* ---- 4. Maturidade esquelética: Risser e cartilagem trirradiada ----------- */

const pontosCrista: Array<[number, number]> = [
  [58, 98],
  [106, 68],
  [155, 52],
  [206, 49],
  [258, 58],
];

const legendaRisser: Record<string, string> = {
  "0": "Risser 0 — nenhuma ossificação da apófise: máximo potencial de crescimento e de progressão",
  "1": "Risser 1 — 25% lateral ossificado; ocorre próximo ao pico de velocidade de crescimento",
  "2": "Risser 2 — 50% ossificado; ainda há crescimento remanescente relevante",
  "3": "Risser 3 — 75% ossificado; velocidade de crescimento já em declínio",
  "4": "Risser 4 — 100% ossificado, apófise ainda NÃO fundida ao ilíaco",
  "5": "Risser 5 — apófise fundida ao ilíaco: maturidade esquelética, sem indicação de colete",
};

const Maturidade: FC<FigureProps> = ({ variant, className, title }) => {
  const grau = variant && legendaRisser[variant] ? variant : "2";
  const n = Number(grau);
  const quadrantes = n >= 5 ? 4 : n;
  const fundida = n >= 5;

  return (
    <Frame
      viewBox="0 0 460 320"
      title={title ?? legendaRisser[grau] ?? "Estadiamento de Risser da apófise da crista ilíaca"}
      className={className}
    >
      {/* asa ilíaca */}
      <path
        d="M 58 98 Q 62 62 106 68 L 155 52 L 206 49 Q 252 47 258 58 Q 278 98 274 142 L 264 180 L 240 196 L 158 206 Q 104 178 74 132 Q 56 114 58 98 Z"
        {...bone}
      />
      {/* acetábulo e cartilagem trirradiada */}
      <path d="M 240 196 Q 268 210 272 240 Q 274 266 258 282 L 224 268 Q 212 232 226 202 Z" {...bone} />
      <path d="M 176 214 Q 208 236 214 272 L 176 286 Q 150 258 148 226 Z" {...bone} />
      {fundida ? (
        <path d="M 232 200 L 214 236 M 214 236 L 176 226 M 214 236 L 226 272" {...{ ...leader, opacity: 0.4 }} />
      ) : (
        <path d="M 232 200 L 214 236 M 214 236 L 176 226 M 214 236 L 226 272" {...cartilageLine} />
      )}

      {/* crista: cartilagem não ossificada (teal tracejado) */}
      <path
        d={`M ${pontosCrista[0]?.[0]} ${(pontosCrista[0]?.[1] ?? 0) - 9} ${pontosCrista
          .slice(1)
          .map((p) => `L ${p[0]} ${p[1] - 9}`)
          .join(" ")}`}
        fill="none"
        stroke="var(--teal)"
        strokeWidth={5}
        strokeLinecap="round"
        strokeDasharray="3 5"
        opacity={0.8}
      />

      {/* apófise ossificada, de lateral para medial */}
      {[0, 1, 2, 3].map((k) => {
        const a = pontosCrista[k];
        const bp = pontosCrista[k + 1];
        if (!a || !bp) return null;
        return k < quadrantes ? (
          <path key={k} d={`M ${a[0]} ${a[1] - 9} L ${bp[0]} ${bp[1] - 9}`} {...{ ...apofise, strokeWidth: 5 }} />
        ) : null;
      })}

      {/* divisores dos quadrantes */}
      {pontosCrista.map((p, k) => (
        <path key={`d-${k}`} d={`M ${p[0]} ${p[1] - 16} L ${p[0]} ${p[1] - 2}`} {...measureSolid} />
      ))}
      <text x={82} y={44} textAnchor="middle" {...amberText}>
        25%
      </text>
      <text x={130} y={38} textAnchor="middle" {...amberText}>
        50%
      </text>
      <text x={180} y={30} textAnchor="middle" {...amberText}>
        75%
      </text>
      <text x={232} y={30} textAnchor="middle" {...amberText}>
        100%
      </text>

      <path d="M 58 98 L 40 122" {...leader} />
      <text x={36} y={125} textAnchor="end" {...label}>
        lateral
      </text>
      <text x={60} y={139} textAnchor="end" {...label}>
        <tspan x={60} dy="0em">(ossifica</tspan>
        <tspan x={60} dy="1.1em">primeiro)</tspan>
      </text>

      <path d="M 258 58 L 302 52" {...leader} />
      <text x={306} y={55} {...label}>
        medial / posterior
      </text>
      <text x={306} y={69} {...label}>
        (ossifica por último)
      </text>

      <path d="M 214 236 L 306 228" {...leader} />
      <text x={306} y={218} {...label}>
        cartilagem trirradiada
      </text>
      <text x={306} y={232} {...label}>
        {fundida ? "fechada — maturidade avançada" : "ABERTA = risco alto"}
      </text>

      <path d="M 160 60 L 132 96" {...leader} />
      <text x={128} y={99} textAnchor="end" {...label}>
        apófise da crista ilíaca
      </text>

      <text x={36} y={172} {...amberText}>
        Risser {grau}
      </text>
      <text x={36} y={272} {...label}>
        Trirradiada fecha ≈ pico de velocidade de crescimento (antes de Risser 1).
      </text>
      <text x={36} y={288} {...label}>
        Menarca ≈ 6 a 12 meses APÓS o pico — marca desaceleração, não maturidade.
      </text>
      <text x={36} y={304} {...label}>
        Risser 0 com trirradiada aberta é o cenário de MAIOR risco de progressão.
      </text>
    </Frame>
  );
};

/* ---- 5. Classificação de Lenke — tipos de curva ---------------------------- */

interface TipoLenke {
  amps: Amplitudes;
  estrutural: { pt: boolean; mt: boolean; tl: boolean };
  nome: string;
  maior: string;
}

const tiposLenke: Record<string, TipoLenke> = {
  "1": {
    amps: { pt: -6, mt: 27, tl: -9 },
    estrutural: { pt: false, mt: true, tl: false },
    nome: "Tipo 1 — torácica principal",
    maior: "MT",
  },
  "2": {
    amps: { pt: -21, mt: 27, tl: -9 },
    estrutural: { pt: true, mt: true, tl: false },
    nome: "Tipo 2 — torácica dupla",
    maior: "MT",
  },
  "3": {
    amps: { pt: -6, mt: 27, tl: -23 },
    estrutural: { pt: false, mt: true, tl: true },
    nome: "Tipo 3 — dupla maior",
    maior: "MT",
  },
  "4": {
    amps: { pt: -21, mt: 27, tl: -23 },
    estrutural: { pt: true, mt: true, tl: true },
    nome: "Tipo 4 — tripla maior",
    maior: "MT",
  },
  "5": {
    amps: { pt: -4, mt: 9, tl: -27 },
    estrutural: { pt: false, mt: false, tl: true },
    nome: "Tipo 5 — toracolombar/lombar",
    maior: "TL/L",
  },
  "6": {
    amps: { pt: -4, mt: 19, tl: -29 },
    estrutural: { pt: false, mt: true, tl: true },
    nome: "Tipo 6 — TL/L maior com MT estrutural",
    maior: "TL/L",
  },
};

const Lenke: FC<FigureProps> = ({ variant, className, title }) => {
  const t = (variant && tiposLenke[variant]) || tiposLenke["1"];
  if (!t) return null;
  const niveis = Array.from({ length: 17 }, (_, i) => i);
  const yDe = (i: number) => 46 + i * 15;
  const xDe = (i: number) => 150 + desvio(i, t.amps);
  const rotDe = (i: number) => desvio(i, t.amps) / 27;

  const bracket = (x: number, y1: number, y2: number, dir: 1 | -1, estrutural: boolean) => (
    <path
      d={`M ${x + 6 * dir} ${y1} L ${x} ${y1} L ${x} ${y2} L ${x + 6 * dir} ${y2}`}
      {...(estrutural ? structuralLine : { ...leader, strokeWidth: 1.6, strokeDasharray: "4 4", opacity: 1 })}
    />
  );

  return (
    <Frame viewBox="0 0 460 380" title={title ?? `Classificação de Lenke — ${t.nome}`} className={className}>
      <path d="M 150 36 L 150 306" {...refLine} />

      {niveis.map((i) => (
        <VertebraCoronal
          key={i}
          cx={xDe(i)}
          cy={yDe(i)}
          w={26 + i * 1.3}
          h={9 + i * 0.3}
          rot={rotDe(i)}
          tilt={7 * Math.cos((Math.PI * (i - 8)) / 7)}
          b={bone}
        />
      ))}

      {/* torácica proximal (T1-T6) — colchete à esquerda */}
      {bracket(76, 46, 121, 1, t.estrutural.pt)}
      <text x={66} y={76} textAnchor="end" {...label}>
        <tspan x={66} dy="0em">torácica</tspan>
        <tspan x={66} dy="1.1em">proximal (PT)</tspan>
      </text>
      <text x={66} y={104} textAnchor="end" {...(t.estrutural.pt ? corticalText : label)}>
        {t.estrutural.pt ? "ESTRUTURAL" : "não estr."}
      </text>

      {/* toracolombar / lombar (T11-L5) — colchete à esquerda */}
      {bracket(76, 196, 286, 1, t.estrutural.tl)}
      <text x={66} y={232} textAnchor="end" {...label}>
        <tspan x={66} dy="0em">toracolombar</tspan>
        <tspan x={66} dy="1.1em">/lombar</tspan>
      </text>
      <text x={66} y={260} textAnchor="end" {...(t.estrutural.tl ? corticalText : label)}>
        {t.estrutural.tl ? "ESTRUTURAL" : "não estr."}
      </text>

      {/* torácica principal (T5-T12) — colchete à direita */}
      {bracket(240, 106, 211, -1, t.estrutural.mt)}
      <text x={252} y={150} {...label}>
        torácica principal (MT)
      </text>
      <text x={252} y={164} {...(t.estrutural.mt ? corticalText : label)}>
        {t.estrutural.mt ? "ESTRUTURAL" : "não estrutural"}
      </text>

      <text x={30} y={26} {...label}>
        {t.nome}
      </text>
      <text x={252} y={196} {...amberText}>
        curva maior: {t.maior}
      </text>

      <text x={30} y={330} {...label}>
        <tspan x={30} dy="0em">Menor é ESTRUTURAL se não reduzir a &lt; 25° na inclinação lateral</tspan>
        <tspan x={30} dy="1.15em">ou se houver cifose ≥ +20° (T2-T5 ou T10-L2).</tspan>
      </text>
      <text x={30} y={362} {...corticalText}>
        <tspan x={30} dy="0em">A artrodese inclui as curvas ESTRUTURAIS; as não estruturais</tspan>
        <tspan x={30} dy="1.15em">são poupadas (fusão seletiva).</tspan>
      </text>
    </Frame>
  );
};

/* ---- 6. Modificadores lombar (LVCS) e torácico sagital -------------------- */

const modificadoresLombar: Record<string, { cx: number; texto: string; regra: string }> = {
  a: {
    cx: 200,
    texto: "Modificador A",
    regra: "LVCS passa ENTRE os pedículos apicais (até L4).",
  },
  b: {
    cx: 178,
    texto: "Modificador B",
    regra: "LVCS toca o corpo apical, entre pedículo e margem lateral.",
  },
  c: {
    cx: 146,
    texto: "Modificador C",
    regra: "Corpo apical inteiramente medial à LVCS — sem contato.",
  },
};

const Modificadores: FC<FigureProps> = ({ variant, className, title }) => {
  /* -- 6b. Modificador torácico sagital -- */
  if (variant === "sagital") {
    const niveis = Array.from({ length: 8 }, (_, i) => i);
    return (
      <Frame
        viewBox="0 0 440 300"
        title={title ?? "Modificador torácico sagital de Lenke: cifose de T5 a T12 medida no perfil"}
        className={className}
      >
        {niveis.map((i) => (
          <VertebraPerfil
            key={i}
            cx={168 + 14 * Math.sin((Math.PI * i) / 7)}
            cy={78 + i * 20}
            w={34}
            h={13}
            tilt={-12 * Math.cos((Math.PI * i) / 7)}
          />
        ))}

        {/* placas terminais de T5 e T12 prolongadas + perpendiculares */}
        <path d="M 150 66 L 200 78" {...measureSolid} />
        <path d="M 200 78 L 272 95" {...measure} />
        <path d="M 150 232 L 200 220" {...measureSolid} />
        <path d="M 200 220 L 272 203" {...measure} />
        <path d="M 272 95 L 322 149" {...measure} />
        <path d="M 272 203 L 322 149" {...measure} />
        <path d="M 300 122 A 34 34 0 0 0 300 176" {...measureSolid} />
        <text x={296} y={153} textAnchor="end" {...amberText}>
          T5-T12
        </text>

        <path d="M 158 72 L 96 56" {...leader} />
        <text x={92} y={59} textAnchor="end" {...label}>
          T5 — placa terminal superior
        </text>
        <path d="M 158 226 L 96 244" {...leader} />
        <text x={92} y={247} textAnchor="end" {...label}>
          T12 — placa terminal inferior
        </text>

        <text x={334} y={110} {...corticalText}>
          (−) &lt; 10° — hipocifose
        </text>
        <text x={334} y={126} {...label}>
          o padrão na EIA torácica
        </text>
        <text x={334} y={152} {...label}>
          (N) 10° a 40° — normal
        </text>
        <text x={334} y={178} {...label}>
          (+) &gt; 40° — hipercifose
        </text>
        <text x={334} y={194} {...label}>
          investigar outra etiologia
        </text>

        <text x={40} y={278} {...label}>
          Perfil — anterior à esquerda. O modificador sagital completa o tipo: por exemplo, 1A−.
        </text>
      </Frame>
    );
  }

  /* -- 6a. Modificador lombar (padrão) -- */
  const chave = variant && modificadoresLombar[variant] ? variant : "a";
  const m = modificadoresLombar[chave] ?? modificadoresLombar["a"];
  if (!m) return null;

  return (
    <Frame
      viewBox="0 0 440 330"
      title={title ?? `Modificador lombar de Lenke — ${m.texto}: ${m.regra}`}
      className={className}
    >
      {/* sacro */}
      <path d="M 168 236 L 232 236 Q 238 236 236 244 L 226 280 Q 200 292 174 280 L 164 244 Q 162 236 168 236 Z" {...bone} />
      <text x={244} y={230} {...label}>
        sacro
      </text>

      {/* linha vertical central sacral (LVCS) */}
      <path d="M 200 40 L 200 240" {...measureSolid} />
      <text x={208} y={52} {...amberText}>
        LVCS
      </text>
      <text x={208} y={66} {...label}>
        (linha vertical central sacral)
      </text>

      {/* vértebras lombares: apical no centro, adjacentes em tom secundário */}
      <VertebraCoronal cx={(m.cx + 200) / 2} cy={112} w={48} h={16} rot={0.5} b={boneBack} />
      <VertebraCoronal cx={m.cx} cy={152} w={52} h={17} rot={0.85} b={bone} />
      <VertebraCoronal cx={(m.cx + 200) / 2 + 10} cy={192} w={54} h={17} rot={0.4} b={boneBack} />

      {/* marcadores do corpo apical */}
      <path d={`M ${m.cx - 26} 172 L ${m.cx - 26} 186`} {...measure} />
      <path d={`M ${m.cx + 26} 172 L ${m.cx + 26} 186`} {...measure} />
      <path d={`M ${m.cx - 26} 182 L ${m.cx + 26} 182`} {...measureSolid} />
      <text x={m.cx} y={200} textAnchor="middle" {...amberText}>
        corpo apical
      </text>

      <path d={`M ${m.cx} 143 L 130 120`} {...leader} />
      <text x={126} y={123} textAnchor="end" {...label}>
        vért. apical lombar
      </text>

      <text x={36} y={44} {...amberText}>
        {m.texto}
      </text>
      <text x={36} y={252} {...label}>
        {m.regra}
      </text>
      <text x={36} y={270} {...label}>
        A LVCS sobe do ponto médio do sacro na radiografia frontal em pé.
      </text>
      <text x={36} y={286} {...label}>
        <tspan x={36} dy="0em">B e C afastam a curva lombar da linha média e</tspan>
        <tspan x={36} dy="1.1em">pesam contra a fusão seletiva.</tspan>
      </text>
    </Frame>
  );
};

/* ---- 7. Conduta por Cobb e maturidade; evidência do colete ---------------- */

const Conduta: FC<FigureProps> = ({ variant, activeStep, className, title }) => {
  const modo = variant ?? (activeStep && activeStep >= 6 ? "braist" : "algoritmo");

  if (modo === "braist") {
    const y0 = 250;
    const px = (pct: number) => y0 - pct * 1.75;
    const barra = (x: number, pct: number, colete: boolean, texto: string) => (
      <g key={`${x}-${texto}`}>
        <rect
          x={x}
          y={px(pct)}
          width={38}
          height={y0 - px(pct)}
          rx={2}
          {...(colete
            ? { fill: "var(--amber)", fillOpacity: 0.28, stroke: "var(--amber)", strokeWidth: 1.6 }
            : { fill: "var(--surface)", stroke: "var(--ink-soft)", strokeWidth: 1.4 })}
        />
        <text x={x + 19} y={px(pct) - 7} textAnchor="middle" {...(colete ? amberText : label)}>
          {pct}%
        </text>
        <text x={x + 19} y={y0 + 16} textAnchor="middle" {...label}>
          {texto}
        </text>
      </g>
    );

    return (
      <Frame
        viewBox="0 0 480 320"
        title={
          title ??
          "BrAIST: o colete reduziu a progressão de curvas de alto risco até o limiar cirúrgico, com relação dose-resposta em função das horas de uso"
        }
        className={className}
      >
        {/* eixo */}
        <path d="M 60 250 L 320 250" {...{ ...leader, opacity: 1, strokeWidth: 1.4 }} />
        <path d="M 60 250 L 60 70" {...{ ...leader, opacity: 1, strokeWidth: 1.4 }} />
        {[0, 25, 50, 75, 100].map((p) => (
          <g key={p}>
            <path d={`M 56 ${px(p)} L 60 ${px(p)}`} {...{ ...leader, opacity: 1 }} />
            <text x={50} y={px(p) + 4} textAnchor="end" {...label}>
              {p}
            </text>
          </g>
        ))}
        <text x={22} y={116} {...label}>
          sucesso
        </text>
        <text x={22} y={130} {...label}>
          (%)
        </text>

        {barra(84, 75, true, "colete")}
        {barra(132, 42, false, "observação")}
        {barra(216, 72, true, "colete")}
        {barra(264, 48, false, "observação")}

        <path d="M 84 274 L 170 274" {...{ ...leader, opacity: 1 }} />
        <text x={127} y={290} textAnchor="middle" {...label}>
          randomizados (ITT)
        </text>
        <path d="M 216 274 L 302 274" {...{ ...leader, opacity: 1 }} />
        <text x={259} y={290} textAnchor="middle" {...label}>
          coorte combinada
        </text>
        <text x={259} y={304} textAnchor="middle" {...label}>
          (ajuste por escore de propensão)
        </text>

        {/* relação dose-resposta */}
        <path d="M 356 250 L 462 250" {...{ ...leader, opacity: 1, strokeWidth: 1.4 }} />
        <path d="M 356 250 L 356 96" {...{ ...leader, opacity: 1, strokeWidth: 1.4 }} />
        <path d="M 356 236 C 386 232, 402 190, 420 148 C 432 122, 446 112, 458 110" {...measureSolid} />
        <text x={356} y={86} {...amberText}>
          relação dose-resposta
        </text>
        <text x={356} y={72} {...label}>
          (P &lt; 0,001)
        </text>
        <text x={409} y={268} textAnchor="middle" {...label}>
          horas de uso / dia →
        </text>
        <text x={344} y={176} textAnchor="end" {...label}>
          sucesso
        </text>
        <text x={344} y={190} textAnchor="end" {...label}>
          ↑
        </text>

        <text x={22} y={44} {...label}>
          BrAIST — desfecho de sucesso: NÃO progredir a ≥ 50° até a maturidade esquelética.
        </text>
        <text x={22} y={60} {...label}>
          Amostra: 10 a 15 anos, Risser 0-2, Cobb 20° a 40°; prescrição de ao menos 18 h/dia.
        </text>
      </Frame>
    );
  }

  /* -- Algoritmo por Cobb -- */
  const x0 = 60;
  const esc = 5.9; // px por grau
  const xg = (g: number) => x0 + g * esc;

  return (
    <Frame
      viewBox="0 0 520 330"
      title={
        title ??
        "Conduta por magnitude do Cobb e maturidade: até 25° observar, 25° a 45° colete se houver crescimento remanescente, acima de 45° a 50° artrodese"
      }
      className={className}
    >
      {/* faixas de conduta */}
      <rect x={xg(0)} y={104} width={xg(25) - xg(0)} height={40} rx={3} fill="var(--ink-soft)" fillOpacity={0.12} stroke="var(--ink-soft)" strokeWidth={1.2} />
      <rect x={xg(25)} y={104} width={xg(45) - xg(25)} height={40} rx={3} fill="var(--amber)" fillOpacity={0.22} stroke="var(--amber)" strokeWidth={1.5} />
      <rect x={xg(45)} y={104} width={xg(65) - xg(45)} height={40} rx={3} {...structuralFill} />

      <text x={(xg(0) + xg(25)) / 2} y={129} textAnchor="middle" {...label}>
        OBSERVAÇÃO
      </text>
      <text x={(xg(25) + xg(45)) / 2} y={129} textAnchor="middle" {...amberText}>
        COLETE
      </text>
      <text x={(xg(45) + xg(65)) / 2} y={129} textAnchor="middle" {...corticalText}>
        ARTRODESE
      </text>

      {/* eixo de Cobb */}
      <path d={`M ${xg(0)} 160 L ${xg(65)} 160`} {...{ ...leader, opacity: 1, strokeWidth: 1.4 }} />
      {[0, 10, 20, 25, 30, 40, 45, 50, 60].map((g) => (
        <g key={g}>
          <path d={`M ${xg(g)} 160 L ${xg(g)} ${g === 25 || g === 45 ? 172 : 166}`} {...(g === 25 || g === 45 ? measureSolid : { ...leader, opacity: 1 })} />
          <text x={xg(g)} y={186} textAnchor="middle" {...(g === 25 || g === 45 ? amberText : label)}>
            {g}
          </text>
        </g>
      ))}
      <text x={xg(65) - 30} y={178} {...label}>
        Cobb (°)
      </text>

      {/* condicionante da maturidade */}
      <path d={`M ${xg(25)} 200 L ${xg(45)} 200`} {...measureSolid} />
      <path d={`M ${xg(25)} 196 L ${xg(25)} 204 M ${xg(45)} 196 L ${xg(45)} 204`} {...measureSolid} />
      <text x={(xg(25) + xg(45)) / 2} y={218} textAnchor="middle" {...amberText}>
        janela do colete — SÓ com crescimento remanescente
      </text>
      <text x={(xg(25) + xg(45)) / 2} y={234} textAnchor="middle" {...label}>
        Risser 0-2, trirradiada aberta ou recém-fechada, pré-menarca
      </text>

      <text x={40} y={44} {...label}>
        <tspan x={40} dy="0em">O Cobb (eixo horizontal) não decide sozinho:</tspan>
        <tspan x={40} dy="1.15em">a MATURIDADE define o risco de progressão.</tspan>
      </text>
      <text x={40} y={76} {...label}>
        Maduro c/ 30°: observar. Risser 0 c/ 30°: colete.
      </text>

      <text x={40} y={280} {...label}>
        <tspan x={40} dy="0em">&lt; 25°: radiografia a cada 4-6 meses no</tspan>
        <tspan x={40} dy="1.15em">crescimento; alta na maturidade.</tspan>
      </text>
      <text x={40} y={310} {...label}>
        <tspan x={40} dy="0em">&gt; 45-50°: colete não corrige — curva</tspan>
        <tspan x={40} dy="1.15em">progride mesmo após maturidade (~1°/ano).</tspan>
      </text>
    </Frame>
  );
};

/* ---- 8. Artrodese posterior instrumentada --------------------------------- */

const Artrodese: FC<FigureProps> = ({ variant, activeStep, className, title }) => {
  const mostrarPre = variant !== "final" && !(activeStep && activeStep >= 8);
  const preAmps: Amplitudes = { pt: -7, mt: 27, tl: -13 };
  const posAmps: Amplitudes = { pt: -4, mt: 8, tl: -5 };
  const niveis = Array.from({ length: 17 }, (_, i) => i);
  const yDe = (i: number) => 44 + i * 14;
  const xPre = (i: number) => 176 + desvio(i, preAmps);
  const xPos = (i: number) => 176 + desvio(i, posAmps);
  const fundidos = niveis.filter((i) => i >= 3 && i <= 11);

  return (
    <Frame
      viewBox="0 0 500 340"
      title={
        title ??
        "Artrodese posterior instrumentada com parafusos pediculares bilaterais: correção por translação e derrotação, limitada às curvas estruturais"
      }
      className={className}
    >
      <path d="M 176 30 L 176 296" {...refLine} />

      {/* traçado da curva pré-operatória */}
      {mostrarPre ? (
        <>
          <path
            d={`M ${xPre(0)} ${yDe(0)} ${niveis
              .slice(1)
              .map((i) => `L ${xPre(i)} ${yDe(i)}`)
              .join(" ")}`}
            {...{ ...refLine, stroke: "var(--cortical)", opacity: 0.55, strokeWidth: 1.6 }}
          />
          <text x={252} y={100} {...corticalText}>
            curva pré-operatória
          </text>
          <path d="M 248 96 L 214 118" {...leader} />
        </>
      ) : null}

      {/* coluna corrigida */}
      {niveis.map((i) => (
        <VertebraCoronal
          key={i}
          cx={xPos(i)}
          cy={yDe(i)}
          w={28 + i * 1.2}
          h={10 + i * 0.28}
          rot={desvio(i, posAmps) / 27}
          tilt={4 * Math.cos((Math.PI * (i - 8)) / 7)}
          b={fundidos.includes(i) ? bone : boneBack}
        />
      ))}

      {/* parafusos pediculares bilaterais nos níveis fundidos */}
      {fundidos.map((i) => {
        const w = 28 + i * 1.2;
        return (
          <g key={`p-${i}`}>
            <path d={`M ${xPos(i) - w * 0.25} ${yDe(i)} L ${xPos(i) - w * 0.25 - 16} ${yDe(i)}`} {...{ ...hardware, strokeWidth: 2.2 }} />
            <path d={`M ${xPos(i) + w * 0.25} ${yDe(i)} L ${xPos(i) + w * 0.25 + 16} ${yDe(i)}`} {...{ ...hardware, strokeWidth: 2.2 }} />
            <circle cx={xPos(i) - w * 0.25 - 18} cy={yDe(i)} r={3.4} {...hardware} />
            <circle cx={xPos(i) + w * 0.25 + 18} cy={yDe(i)} r={3.4} {...hardware} />
          </g>
        );
      })}

      {/* hastes */}
      <path
        d={`M ${xPos(3) - (28 + 3 * 1.2) * 0.25 - 18} ${yDe(3)} ${fundidos
          .slice(1)
          .map((i) => `L ${xPos(i) - (28 + i * 1.2) * 0.25 - 18} ${yDe(i)}`)
          .join(" ")}`}
        {...hardware}
      />
      <path
        d={`M ${xPos(3) + (28 + 3 * 1.2) * 0.25 + 18} ${yDe(3)} ${fundidos
          .slice(1)
          .map((i) => `L ${xPos(i) + (28 + i * 1.2) * 0.25 + 18} ${yDe(i)}`)
          .join(" ")}`}
        {...hardware}
      />

      {/* seta de derrotação no ápice */}
      <path d="M 208 158 A 34 34 0 0 1 190 190" {...measureSolid} />
      <path d="M 190 190 L 197 184 M 190 190 L 197 195" {...measureSolid} />
      <text x={214} y={152} {...amberText}>
        derrotação
      </text>

      {/* colchete dos níveis fundidos */}
      <path d="M 108 86 L 100 86 L 100 198 L 108 198" {...structuralLine} />
      <text x={130} y={136} textAnchor="end" {...corticalText}>
        níveis artrodese
      </text>
      <text x={130} y={150} textAnchor="end" {...label}>
        curvas ESTRUTURAIS
      </text>
      <text x={130} y={164} textAnchor="end" {...label}>
        (Lenke)
      </text>

      <path d="M 216 60 L 320 46" {...leader} />
      <text x={324} y={49} {...label}>
        <tspan x={324} dy="0em">parafusos pediculares</tspan>
        <tspan x={324} dy="1.1em">bilaterais</tspan>
      </text>

      <path d="M 232 116 L 320 106" {...leader} />
      <text x={324} y={109} {...label}>
        hastes contornadas
      </text>
      <text x={324} y={123} {...label}>
        (restauram cifose torácica)
      </text>

      <path d="M 164 244 L 320 234" {...leader} />
      <text x={324} y={237} {...label}>
        curva lombar não fundida
      </text>
      <text x={324} y={251} {...label}>
        — corrige espont.
      </text>

      <text x={30} y={306} {...label}>
        <tspan x={30} dy="0em">Objetivo: coluna equilibrada nos três planos,</tspan>
        <tspan x={30} dy="1.15em">poupando o máximo de segmentos móveis distais.</tspan>
      </text>
    </Frame>
  );
};

/* -------------------------------------------------------------------------- */

export const figures: Record<string, FC<FigureProps>> = {
  "escoliose-idiopatica-adolescente:anatomia": Anatomia,
  "escoliose-idiopatica-adolescente:adams": Adams,
  "escoliose-idiopatica-adolescente:cobb": Cobb,
  "escoliose-idiopatica-adolescente:maturidade": Maturidade,
  "escoliose-idiopatica-adolescente:lenke": Lenke,
  "escoliose-idiopatica-adolescente:modificadores": Modificadores,
  "escoliose-idiopatica-adolescente:conduta": Conduta,
  "escoliose-idiopatica-adolescente:artrodese": Artrodese,
};
