import type { FC } from "react";
import type { FigureProps } from "../../../types/topic";

/* ============================================================================
   Figuras originais (line-art, 2 tons) — Fratura do colo femoral na criança.
   Redesenho esquemático, não reprodução. Referência editorial: Rockwood and
   Wilkins' Fractures in Children, 10a ed. (2024) / Tachdjian's Pediatric
   Orthopaedics 6a. Cores apenas via CSS var.
   Osso: --ink-soft / --surface · fise/cartilagem/cápsula: --teal · traço de
   fratura/necrose: --cortical · medidas, ângulos e vasos: --amber ·
   rótulos: --muted.
   ========================================================================== */

const bone = {
  fill: "var(--surface)",
  stroke: "var(--ink-soft)",
  strokeWidth: 1.8,
  strokeLinejoin: "round" as const,
  strokeLinecap: "round" as const,
};

const boneBack = {
  fill: "var(--surface-2, var(--surface))",
  stroke: "var(--ink-soft)",
  strokeWidth: 1.4,
  strokeLinejoin: "round" as const,
};

const physisStyle = {
  fill: "none",
  stroke: "var(--teal)",
  strokeWidth: 4.5,
  strokeLinecap: "round" as const,
};

const capsuleStyle = {
  fill: "none",
  stroke: "var(--teal)",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const vessel = {
  fill: "none",
  stroke: "var(--amber)",
  strokeWidth: 2.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const measure = {
  fill: "none",
  stroke: "var(--amber)",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
};

const cortical = {
  fill: "none",
  stroke: "var(--cortical)",
  strokeWidth: 2.6,
  strokeLinecap: "round" as const,
};

const dashed = {
  fill: "none",
  stroke: "var(--muted)",
  strokeWidth: 1.2,
  strokeDasharray: "5 4",
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

const leader = {
  fill: "none",
  stroke: "var(--muted)",
  strokeWidth: 1,
  strokeLinecap: "round" as const,
};

/* ---- Geometria compartilhada --------------------------------------------------
   Fêmur proximal direito em incidência anteroposterior. Cabeça: círculo
   (110, 98) r 36. A fise corresponde à corda da junção cabeça-colo, de
   (92, 130) inferomedial a (136, 74) superolateral. Colo com ângulo
   colo-diáfise fisiológico; trocânter maior lateral e menor medial. */

const FEMUR_OUTLINE =
  "M 136 74 C 152 66, 172 68, 186 82 C 193 89, 197 97, 198 110 L 202 300 " +
  "L 168 300 L 166 196 C 165 182, 160 172, 144 168 C 154 164, 160 160, 161 152 " +
  "C 140 146, 114 138, 92 130 A 36 36 0 1 1 136 74 Z";

const ACETABULUM =
  "M 75 118 A 40 40 0 0 1 130 63 L 145 40 C 104 16, 52 32, 36 74 " +
  "C 30 92, 46 112, 75 118 Z";

const PHYSIS = "M 92 130 Q 128 112 136 74";

/** Nível do traço de fratura para cada tipo de Delbet. */
const DELBET_LINES: Record<string, string> = {
  I: "M 92 130 Q 128 112 136 74",
  II: "M 133 152 L 167 87",
  III: "M 154 162 L 192 94",
  IV: "M 198 112 L 148 170",
};

const DELBET_TITLES: Record<string, string> = {
  I: "Tipo I — transepifisária",
  II: "Tipo II — transcervical",
  III: "Tipo III — cervicotrocantérica",
  IV: "Tipo IV — intertrocantérica",
};

/* Fêmur proximal reutilizável. `fracture` desenha o traço de Delbet;
   `physis` mostra a placa de crescimento; `vessels` os vasos retinaculares. */
function FemurGroup({
  physis = true,
  vessels = false,
  acetabulum = true,
  fracture,
  transform,
}: {
  physis?: boolean;
  vessels?: boolean;
  acetabulum?: boolean;
  fracture?: string;
  transform?: string;
}) {
  return (
    <g transform={transform}>
      {acetabulum ? <path d={ACETABULUM} {...boneBack} /> : null}
      <path d={FEMUR_OUTLINE} {...bone} />
      {physis ? <path d={PHYSIS} {...physisStyle} /> : null}
      {vessels ? (
        <g {...vessel}>
          {/* Artéria circunflexa femoral medial contornando a base do colo */}
          <path d="M 216 196 C 200 182, 198 166, 202 152" />
          {/* Vasos retinaculares posterossuperiores (epifisários laterais) */}
          <path d="M 202 152 C 188 124, 168 92, 138 77" />
          <path d="M 202 152 C 192 132, 176 108, 151 86" />
          {/* Artéria do ligamento redondo */}
          <path d="M 70 100 C 82 96, 92 95, 101 96" />
        </g>
      ) : null}
      {fracture ? <path d={DELBET_LINES[fracture]} {...cortical} /> : null}
    </g>
  );
}

/* Parafuso canulado esquemático orientado de lateral para a cabeça. */
const THREAD_T = [0.56, 0.68, 0.8, 0.92];

function Screw({
  x1,
  y1,
  x2,
  y2,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.hypot(dx, dy) || 1;
  const px = -(dy / len);
  const py = dx / len;
  return (
    <g>
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        fill="none"
        stroke="var(--ink-soft)"
        strokeWidth={5}
        strokeLinecap="round"
      />
      <g fill="none" stroke="var(--ink-soft)" strokeWidth={1.4} strokeLinecap="round">
        {THREAD_T.map((t) => {
          const cx = x1 + dx * t;
          const cy = y1 + dy * t;
          return (
            <line
              key={t}
              x1={cx + px * 4.5}
              y1={cy + py * 4.5}
              x2={cx - px * 4.5}
              y2={cy - py * 4.5}
            />
          );
        })}
      </g>
    </g>
  );
}

/* ---- 1. Anatomia vascular ------------------------------------------------------ */
const Anatomia: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 340 340"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>
      {title ?? "Vascularização do fêmur proximal na criança: vasos retinaculares, fise e artéria do ligamento redondo"}
    </title>
    <FemurGroup vessels />
    <line x1="196" y1="120" x2="208" y2="92" {...leader} />
    <text x="205" y="62" {...labelStrong} fill="var(--amber)">
      Vasos retinaculares
    </text>
    <text x="205" y="76" {...label}>
      posterossuperiores
    </text>
    <text x="205" y="89" {...label}>
      (ramos da circunfl.
    </text>
    <text x="205" y="102" {...label}>
      femoral medial)
    </text>
    <line x1="118" y1="110" x2="56" y2="182" {...leader} />
    <text x="14" y="196" {...labelStrong} fill="var(--teal)">
      Fise proximal
    </text>
    <text x="14" y="210" {...label}>
      Barreira ao fluxo
    </text>
    <text x="14" y="223" {...label}>
      metafisário após ~4 anos
    </text>
    <line x1="80" y1="98" x2="46" y2="64" {...leader} />
    <text x="10" y="52" {...labelStrong} fill="var(--amber)">
      A. do ligamento redondo
    </text>
    <text x="10" y="38" {...label}>
      Contribuição mínima antes
    </text>
    <text x="10" y="25" {...label}>
      dos 8 anos
    </text>
    <text x="14" y="322" {...label}>
      A epífise depende quase só dos vasos retinaculares,
    </text>
    <text x="14" y="335" {...label}>
      que sobem subperiosteais no colo: traço alto = necrose.
    </text>
  </svg>
);

/* ---- 2. Classificação de Delbet ------------------------------------------------ */
const ClassificacaoDelbet: FC<FigureProps> = ({ className, title, variant }) => {
  const v = variant && DELBET_LINES[variant] ? variant : "II";
  return (
    <svg
      viewBox="0 0 340 340"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `Classificação de Delbet — ${DELBET_TITLES[v]}`}</title>
      <FemurGroup fracture={v} />
      <text x="228" y="42" {...labelStrong}>
        Delbet {v}
      </text>
      <text x="228" y="58" {...label} fill="var(--cortical)">
        {DELBET_TITLES[v].replace(/^Tipo [IV]+ — /, "")}
      </text>
      {v === "I" ? (
        <>
          <line x1="120" y1="106" x2="228" y2="80" {...leader} />
          <text x="14" y="322" {...label}>
            Separação através da fise, com ou sem luxação da epífise.
          </text>
          <text x="14" y="335" {...label}>
            Risco de necrose mais alto da série (~45%); ~8% do total.
          </text>
        </>
      ) : null}
      {v === "II" ? (
        <>
          <line x1="150" y1="119" x2="228" y2="82" {...leader} />
          <text x="14" y="322" {...label}>
            Traço no terço médio do colo — tipo mais frequente (~45%).
          </text>
          <text x="14" y="335" {...label}>
            Necrose ~30%–32%, proporcional ao desvio inicial.
          </text>
        </>
      ) : null}
      {v === "III" ? (
        <>
          <line x1="173" y1="128" x2="228" y2="84" {...leader} />
          <text x="14" y="322" {...label}>
            Traço basicervical, na junção colo-trocantérica (~30%).
          </text>
          <text x="14" y="335" {...label}>
            Necrose ~17%; coxa vara é a complicação dominante.
          </text>
        </>
      ) : null}
      {v === "IV" ? (
        <>
          <line x1="173" y1="141" x2="228" y2="86" {...leader} />
          <text x="14" y="322" {...label}>
            Traço extracapsular entre os trocânteres (~10%).
          </text>
          <text x="14" y="335" {...label}>
            Menor risco de necrose (~12%) e melhor prognóstico.
          </text>
        </>
      ) : null}
    </svg>
  );
};

/* ---- 3. Risco de necrose por tipo de Delbet ------------------------------------ */
const BARS: { code: string; rate: number; text: string }[] = [
  { code: "I", rate: 45, text: "Transepifisária" },
  { code: "II", rate: 32, text: "Transcervical" },
  { code: "III", rate: 17, text: "Basicervical" },
  { code: "IV", rate: 12, text: "Intertrocantérica" },
];

const RiscoNav: FC<FigureProps> = ({ className, title }) => {
  const baseY = 214;
  const scale = 3.2;
  return (
    <svg
      viewBox="0 0 340 270"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>
        {title ?? "Incidência de necrose avascular por tipo de Delbet: gradiente decrescente do tipo I ao IV"}
      </title>
      <line x1="42" y1={baseY} x2="322" y2={baseY} {...measure} />
      <line x1="42" y1={baseY} x2="42" y2="42" {...measure} />
      {[0, 10, 20, 30, 40, 50].map((p) => (
        <g key={p}>
          <line x1="38" y1={baseY - p * scale} x2="42" y2={baseY - p * scale} {...measure} />
          <text x="34" y={baseY - p * scale + 4} {...label} textAnchor="end">
            {p}%
          </text>
        </g>
      ))}
      {BARS.map((b, i) => {
        const x = 68 + i * 66;
        const h = b.rate * scale;
        return (
          <g key={b.code}>
            <rect
              x={x}
              y={baseY - h}
              width={38}
              height={h}
              fill="var(--surface)"
              stroke="var(--amber)"
              strokeWidth={2}
            />
            <text x={x + 19} y={baseY - h - 8} {...labelStrong} textAnchor="middle" fill="var(--amber)">
              {b.rate}%
            </text>
            <text x={x + 19} y={baseY + 18} {...labelStrong} textAnchor="middle">
              Delbet {b.code}
            </text>
            <text x={x + 19} y={baseY + 32} {...label} textAnchor="middle" fontSize={8}>
              {b.text}
            </text>
          </g>
        );
      })}
      <path d="M 68 52 L 300 52" {...dashed} />
      <text x="184" y="44" {...label} textAnchor="middle">
        Mais proximal = mais vasos interrompidos
      </text>
      <text x="42" y="262" {...label}>
        Metanálise (Xin, 2023); necrose global ~22%.
      </text>
    </svg>
  );
};

/* ---- 4. Descompressão capsular ------------------------------------------------- */
const DescompressaoCapsular: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 340 340"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>
      {title ?? "Descompressão capsular: hematoma intracapsular sob tensão e sua evacuação por punção ou capsulotomia"}
    </title>
    {/* Hematoma distendendo a cápsula */}
    <path
      d="M 72 118 C 54 154, 76 190, 120 196 L 176 194 C 206 192, 220 166, 212 132 C 204 96, 176 58, 132 56 Z"
      fill="var(--cortical)"
      opacity={0.14}
      stroke="none"
    />
    <FemurGroup fracture="II" />
    {/* Cápsula distendida, inserida na linha intertrocantérica */}
    <path
      d="M 72 118 C 54 154, 76 190, 120 196 L 176 194 C 206 192, 220 166, 212 132 C 204 96, 176 58, 132 56"
      {...capsuleStyle}
    />
    {/* Agulha de punção / trajeto da capsulotomia */}
    <line x1="296" y1="252" x2="196" y2="168" fill="none" stroke="var(--ink-soft)" strokeWidth={2.6} strokeLinecap="round" />
    <path d="M 196 168 L 205 170 L 202 178 Z" fill="var(--ink-soft)" stroke="none" />
    <line x1="150" y1="176" x2="248" y2="222" {...leader} />
    <text x="216" y="244" {...labelStrong} fill="var(--cortical)">
      Hematoma sob tensão
    </text>
    <text x="216" y="258" {...label}>
      Tampona os vasos
    </text>
    <text x="216" y="271" {...label}>
      retinaculares
    </text>
    <line x1="88" y1="168" x2="46" y2="212" {...leader} />
    <text x="10" y="228" {...labelStrong} fill="var(--teal)">
      Cápsula distendida
    </text>
    <text x="10" y="242" {...label}>
      Insere-se na linha
    </text>
    <text x="10" y="255" {...label}>
      intertrocantérica: tipos I–III
    </text>
    <text x="10" y="268" {...label}>
      são intracapsulares.
    </text>
    <text x="14" y="322" {...label}>
      Descompressão tem baixo custo biológico, embora a
    </text>
    <text x="14" y="335" {...label}>
      revisão de Yeranosian não mostre menos necrose.
    </text>
  </svg>
);

/* ---- 5. Fixação ---------------------------------------------------------------- */
const Fixacao: FC<FigureProps> = ({ className, title, variant }) => {
  const transfisaria = variant === "transfisaria";
  return (
    <svg
      viewBox="0 0 340 366"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>
        {title ??
          (transfisaria
            ? "Fixação transfisária na fratura tipo I de Delbet ou na criança muito jovem"
            : "Fixação com parafusos canulados poupando a fise no colo femoral da criança")}
      </title>
      <FemurGroup fracture={transfisaria ? "I" : "II"} />
      {transfisaria ? (
        <>
          <Screw x1={206} y1={158} x2={116} y2={92} />
          <Screw x1={210} y1={184} x2={126} y2={120} />
          <line x1="120" y1="96" x2="236" y2="60" {...leader} />
          <text x="222" y="48" {...labelStrong}>
            Implante cruza a fise
          </text>
          <text x="222" y="62" {...label}>
            Aceito no tipo I e na
          </text>
          <text x="222" y="75" {...label}>
            criança muito jovem
          </text>
          <text x="14" y="322" {...label}>
            No tipo I a fixação transfisária é obrigatória — não há colo distal suficiente.
          </text>
          <text x="14" y="335" {...label}>
            Assume-se a parada de crescimento em troca de estabilidade e redução mantida.
          </text>
        </>
      ) : (
        <>
          <Screw x1={200} y1={152} x2={140} y2={120} />
          <Screw x1={206} y1={180} x2={146} y2={143} />
          <path d={PHYSIS} {...physisStyle} />
          <line x1="126" y1="112" x2="236" y2="62" {...leader} />
          <text x="222" y="50" {...labelStrong} fill="var(--teal)">
            Fise preservada
          </text>
          <text x="222" y="64" {...label}>
            Rosca inteiramente
          </text>
          <text x="222" y="77" {...label}>
            além do traço
          </text>
          <line x1="176" y1="166" x2="240" y2="212" {...leader} />
          <text x="208" y="230" {...labelStrong}>
            Parafusos canulados
          </text>
          <text x="208" y="244" {...label}>
            Paralelos, entrada
          </text>
          <text x="208" y="257" {...label}>
            abaixo do troc. maior
          </text>
          <text x="14" y="310" {...label}>
            Regra geral: poupar a fise sempre que
          </text>
          <text x="14" y="323" {...label}>
            o colo distal comporte o implante.
          </text>
          <text x="14" y="336" {...label}>
            Nos tipos III/IV, placa bloqueada proximal
          </text>
          <text x="14" y="349" {...label}>
            previne melhor a coxa vara.
          </text>
        </>
      )}
    </svg>
  );
};

/* ---- 6. Via de acesso anterolateral (Watson-Jones) ----------------------------- */
const ViaAnterolateral: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 340 316"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>
      {title ?? "Corte transverso ao nível do colo femoral mostrando o intervalo de Watson-Jones entre o tensor da fáscia lata e o glúteo médio"}
    </title>
    {/* Corte transverso esquemático ao nível do colo */}
    <ellipse cx="170" cy="152" rx="118" ry="96" {...boneBack} />
    {/* Colo femoral em corte */}
    <ellipse cx="182" cy="150" rx="30" ry="24" {...bone} />
    <text x="182" y="154" {...label} textAnchor="middle">
      Colo
    </text>
    {/* Tensor da fáscia lata — anterolateral */}
    <ellipse cx="216" cy="86" rx="34" ry="24" {...bone} />
    <text x="216" y="90" {...label} textAnchor="middle" fontSize={10}>
      TFL
    </text>
    {/* Glúteo médio — posterolateral */}
    <ellipse cx="268" cy="152" rx="30" ry="30" {...bone} />
    <text x="268" y="150" {...label} textAnchor="middle" fontSize={10}>
      Glúteo
    </text>
    <text x="268" y="162" {...label} textAnchor="middle" fontSize={10}>
      médio
    </text>
    {/* Reto femoral / sartório — anterior */}
    <ellipse cx="130" cy="70" rx="32" ry="22" {...bone} />
    <text x="130" y="66" {...label} textAnchor="middle" fontSize={10}>
      Reto femoral
    </text>
    <text x="130" y="78" {...label} textAnchor="middle" fontSize={10}>
      / sartório
    </text>
    {/* Feixe neurovascular femoral — anteromedial */}
    <circle cx="76" cy="132" r="15" fill="none" stroke="var(--cortical)" strokeWidth={2} />
    <text x="76" y="136" {...label} textAnchor="middle" fontSize={9} fill="var(--cortical)">
      NV
    </text>
    {/* Intervalo de Watson-Jones */}
    <path d="M 246 108 L 206 132" {...cortical} strokeDasharray="6 4" />
    <path d="M 206 132 L 214 130 L 211 138 Z" fill="var(--cortical)" stroke="none" />
    <line x1="246" y1="108" x2="206" y2="58" {...leader} />
    <text x="190" y="48" {...labelStrong} fill="var(--cortical)">
      Watson-Jones
    </text>
    <text x="190" y="34" {...label}>
      TFL × glúteo médio
    </text>
    <text x="190" y="21" {...label}>
      (mesmo n. glúteo sup.)
    </text>
    <line x1="76" y1="150" x2="52" y2="204" {...leader} />
    <text x="12" y="220" {...labelStrong} fill="var(--cortical)">
      Em risco
    </text>
    <text x="12" y="234" {...label}>
      Feixe femoral (medial) e
    </text>
    <text x="12" y="247" {...label}>
      n. glúteo superior (proximal)
    </text>
    <text x="14" y="272" {...label}>
      Intervalo intermuscular, mas não internervoso —
    </text>
    <text x="14" y="285" {...label}>
      ambos os ventres inervados pelo n. glúteo sup.
    </text>
    <text x="14" y="298" {...label}>
      não estender além de 5 cm do rebordo.
    </text>
  </svg>
);

/* ---- 7. Coxa vara / parada de crescimento -------------------------------------- */
const CoxaVara: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 340 366"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Coxa vara após consolidação viciosa: redução do ângulo colo-diáfise e ascensão do trocânter maior"}</title>
    {/* Fêmur com colo em varo: cabeça deslocada inferiormente */}
    <path d={ACETABULUM} {...boneBack} />
    <g transform="translate(30 34) rotate(20 110 98)">
      <path d={FEMUR_OUTLINE} {...bone} />
      <path d={PHYSIS} {...physisStyle} />
    </g>
    {/* Eixo diafisário */}
    <line x1="185" y1="330" x2="185" y2="150" {...dashed} />
    {/* Eixo do colo em varo */}
    <line x1="185" y1="150" x2="112" y2="120" {...measure} />
    {/* Eixo do colo normal (referência) */}
    <line x1="185" y1="150" x2="120" y2="62" {...dashed} />
    {/* Arco do ângulo colo-diáfise */}
    <path d="M 185 200 A 50 50 0 0 1 141 172" {...measure} />
    <text x="126" y="208" {...labelStrong} fill="var(--amber)">
      ~105°
    </text>
    <text x="200" y="118" {...label} fill="var(--muted)">
      Eixo normal (~135°)
    </text>
    <line x1="150" y1="96" x2="240" y2="72" {...leader} />
    <text x="228" y="60" {...labelStrong} fill="var(--cortical)">
      Coxa vara
    </text>
    <text x="228" y="46" {...label}>
      Trocânter alto
    </text>
    <text x="228" y="33" {...label}>
      abdutor curto
    </text>
    <text x="238" y="20" {...label}>
      → Trendelenburg
    </text>
    <text x="14" y="310" {...label}>
      Complicação típica do Delbet III/IV mal reduzido
    </text>
    <text x="14" y="323" {...label}>
      ou fixado sem apoio angular.
    </text>
    <text x="14" y="336" {...label}>
      Corrigir com osteotomia valgizante subtrocantérica
    </text>
    <text x="14" y="349" {...label}>
      se {"<"} 110° ou marcha alterada.
    </text>
  </svg>
);

/* ---- 8. Padrões de necrose avascular (Ratliff) --------------------------------- */
const NECROSE_TITLES: Record<string, string> = {
  I: "Ratliff I — necrose de toda a cabeça",
  II: "Ratliff II — necrose parcial/segmentar",
  III: "Ratliff III — necrose do colo até a fise",
};

const NecroseAvascular: FC<FigureProps> = ({ className, title, variant }) => {
  const v = variant && NECROSE_TITLES[variant] ? variant : "I";
  return (
    <svg
      viewBox="0 0 340 366"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? NECROSE_TITLES[v]}</title>
      <FemurGroup />
      {/* Território necrótico conforme o padrão de Ratliff */}
      {v === "I" ? (
        <circle cx="110" cy="98" r="36" fill="var(--cortical)" opacity={0.2} stroke="var(--cortical)" strokeWidth={2.4} />
      ) : null}
      {v === "II" ? (
        <path
          d="M 92 68 A 36 36 0 0 1 143 84 L 110 98 Z"
          fill="var(--cortical)"
          opacity={0.24}
          stroke="var(--cortical)"
          strokeWidth={2.4}
        />
      ) : null}
      {v === "III" ? (
        <path
          d="M 136 74 C 152 66, 172 68, 186 82 C 176 100, 166 128, 161 152 C 140 146, 114 138, 92 130 Q 128 112 136 74 Z"
          fill="var(--cortical)"
          opacity={0.2}
          stroke="var(--cortical)"
          strokeWidth={2.4}
        />
      ) : null}
      <Screw x1={200} y1={152} x2={140} y2={120} />
      <Screw x1={206} y1={180} x2={146} y2={143} />
      <text x="228" y="42" {...labelStrong} fill="var(--cortical)">
        Ratliff {v}
      </text>
      {v === "I" ? (
        <>
          <line x1="118" y1="86" x2="224" y2="58" {...leader} />
          <text x="228" y="58" {...label}>
            Núcleo epifisário
          </text>
          <text x="14" y="310" {...label}>
            O padrão mais comum e o de pior prognóstico:
          </text>
          <text x="14" y="323" {...label}>
            colapso global da cabeça.
          </text>
          <text x="14" y="336" {...label}>
            Decorre da interrupção de todos os vasos
          </text>
          <text x="14" y="349" {...label}>
            retinaculares (típico do tipo I/II).
          </text>
        </>
      ) : null}
      {v === "II" ? (
        <>
          <line x1="114" y1="76" x2="224" y2="58" {...leader} />
          <text x="228" y="58" {...label}>
            Setor lateral da epífise
          </text>
          <text x="14" y="322" {...label}>
            Necrose parcial por lesão de um único ramo retinacular lateral.
          </text>
          <text x="14" y="335" {...label}>
            Pode evoluir com deformidade em coxa magna e impacto femoroacetabular.
          </text>
        </>
      ) : null}
      {v === "III" ? (
        <>
          <line x1="158" y1="106" x2="224" y2="58" {...leader} />
          <text x="228" y="58" {...label}>
            Colo, da fratura à fise
          </text>
          <text x="14" y="322" {...label}>
            A epífise é poupada porque os vasos cruzam a fise proximalmente ao traço.
          </text>
          <text x="14" y="335" {...label}>
            É o padrão de melhor prognóstico; evolui com encurtamento do colo.
          </text>
        </>
      ) : null}
    </svg>
  );
};

export const figures: Record<string, FC<FigureProps>> = {
  "fratura-colo-femoral-crianca:anatomia": Anatomia,
  "fratura-colo-femoral-crianca:classificacao-delbet": ClassificacaoDelbet,
  "fratura-colo-femoral-crianca:risco-nav": RiscoNav,
  "fratura-colo-femoral-crianca:descompressao-capsular": DescompressaoCapsular,
  "fratura-colo-femoral-crianca:fixacao": Fixacao,
  "fratura-colo-femoral-crianca:via-anterolateral": ViaAnterolateral,
  "fratura-colo-femoral-crianca:coxa-vara": CoxaVara,
  "fratura-colo-femoral-crianca:necrose-avascular": NecroseAvascular,
};
