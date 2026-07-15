import type { FC } from "react";
import type { FigureProps } from "../../../types/topic";

/* ============================================================================
   Figuras — Fratura da glenoide (line-art esquemático, 2 tons, sem copyright).
   Convenções de cor (somente via CSS vars):
     osso .......... stroke var(--ink-soft)  fill var(--surface)
     2º plano ...... fill var(--surface-2, var(--surface))
     partes moles/
       implante .... stroke var(--teal)
     traço de
       fratura ..... stroke var(--cortical) + className "fx-line"
     medidas/eixos . stroke/fill var(--amber)
     rótulos ....... <text> fontSize 11 fill var(--muted)
   Todo id é prefixado por "fratura-glenoide:" no registro no fim do arquivo.
   ========================================================================== */

const bone = {
  fill: "var(--surface)",
  stroke: "var(--ink-soft)",
  strokeWidth: 1.6,
  strokeLinejoin: "round" as const,
};

const bone2 = {
  fill: "var(--surface-2, var(--surface))",
  stroke: "var(--ink-soft)",
  strokeWidth: 1.4,
  strokeLinejoin: "round" as const,
};

const label = {
  fontSize: 11,
  fill: "var(--muted)",
  fontFamily: "var(--font-body, sans-serif)",
};

const mono = {
  fontSize: 12,
  fill: "var(--ink)",
  fontFamily: "var(--font-mono, monospace)",
  letterSpacing: 0.5,
};

const soft = {
  fill: "none",
  stroke: "var(--teal)",
  strokeWidth: 2.2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const fx = {
  fill: "none",
  stroke: "var(--cortical)",
  strokeWidth: 3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/* ---------------------------------------------------------------------------
   Contorno esquemático da escápula (vista posterior "en face"): ângulo superior
   (topo-esq.), borda medial/vertebral (esq.), ângulo inferior (baixo), borda
   lateral/axilar (direita) subindo ao colo e ao processo glenoidal (direita).
   Reutilizado como base pelas figuras de classificação e técnica.
   ------------------------------------------------------------------------- */
function scapulaBodyPath() {
  return "M64 76 C 118 62, 168 76, 200 118 \
          C 208 128, 210 140, 208 152 \
          C 176 196, 128 226, 96 252 \
          L 64 232 Z";
}

/** Colo + processo glenoidal (pêra vertical) na borda lateral. */
function GlenoidProcess({
  cx = 228,
  cy = 150,
  rx = 15,
  ry = 40,
}: {
  cx?: number;
  cy?: number;
  rx?: number;
  ry?: number;
}) {
  return (
    <>
      {/* colo glenoidal ligando o corpo à cavidade */}
      <path
        d={`M204 132 L ${cx - 2} ${cy - ry + 8} L ${cx - 2} ${cy + ry - 8} L 202 168 Z`}
        {...bone2}
      />
      {/* cavidade glenoidal (pêra) — face articular voltada para a direita */}
      <ellipse cx={cx} cy={cy} rx={rx} ry={ry} {...bone2} />
      <path
        d={`M${cx + rx - 3} ${cy - ry + 10} A ${rx - 3} ${ry - 8} 0 0 1 ${cx + rx - 3} ${cy + ry - 10}`}
        fill="none"
        stroke="var(--ink-soft)"
        strokeWidth="1.2"
        strokeDasharray="3 3"
      />
      {/* cabeça umeral (referência, tracejada em teal) */}
      <circle
        cx={cx + rx + 20}
        cy={cy}
        r={30}
        fill="none"
        stroke="var(--teal)"
        strokeWidth="1.2"
        strokeDasharray="4 4"
      />
    </>
  );
}

/* =========================================================================
   1) Anatomia — cavidade glenoidal, retroversão, lábio e colo; espinha,
      acrômio e coracoide. Contexto da cintura escapular.
   ========================================================================= */
const Anatomia: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 320 300"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Anatomia da cavidade glenoidal e da cintura escapular"}</title>

    <path {...bone} d={scapulaBodyPath()} />

    {/* Espinha da escápula (ridge) */}
    <path
      d="M78 118 C 120 120, 168 122, 202 120"
      fill="none"
      stroke="var(--ink-soft)"
      strokeWidth="1.4"
      strokeDasharray="5 4"
    />
    <text x="112" y="112" {...label}>espinha</text>

    {/* Acrômio (blob súpero-lateral) */}
    <path {...bone2} d="M198 100 C 214 92, 234 96, 240 110 C 234 120, 216 122, 202 118 Z" />
    <text x="236" y="98" {...label} textAnchor="middle">acrômio</text>

    {/* Coracoide (gancho ântero-superior sobre a glenoide) */}
    <path
      {...bone2}
      d="M212 120 C 226 112, 244 112, 252 120 C 246 126, 236 126, 230 124 C 236 130, 240 138, 238 146 C 230 140, 220 130, 214 122 Z"
    />
    <text x="256" y="120" {...label}>coracoide</text>

    {/* Processo glenoidal */}
    <GlenoidProcess cx={228} cy={168} rx={15} ry={38} />
    <text x="228" y="230" {...label} textAnchor="middle" fill="var(--teal)">cavidade glenoidal</text>

    {/* Lábio glenoidal (aprofunda a cavidade) — teal */}
    <path
      d="M243 134 C 250 150, 250 186, 243 202"
      fill="none"
      stroke="var(--teal)"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <text x="255" y="170" {...label} fill="var(--teal)">lábio</text>

    {/* Eixo de retroversão (~ -5 a -7°) — amber */}
    <g stroke="var(--amber)" strokeWidth="1.6" fill="none">
      <line x1="228" y1="168" x2="286" y2="168" strokeDasharray="4 3" />
      <line x1="228" y1="168" x2="284" y2="180" />
    </g>
    <text x="262" y="196" {...label} fill="var(--amber)">retrov. ~5°</text>

    {/* Incisura escapular / feixe supraescapular (referência) */}
    <circle cx="196" cy="118" r="3" fill="none" stroke="var(--teal)" strokeWidth="1.4" />
    <text x="150" y="150" {...label}>colo glenoidal</text>

    <text x="160" y="286" {...mono} textAnchor="middle">glenoide: pêra rasa · retroversa · lábio</text>
  </svg>
);

/* =========================================================================
   Base compartilhada das figuras de classificação/técnica: escápula + glenoide.
   ========================================================================= */
function ClassBase() {
  return (
    <>
      <path {...bone} d={scapulaBodyPath()} />
      {/* espinha discreta */}
      <path
        d="M78 118 C 120 120, 168 122, 200 120"
        fill="none"
        stroke="var(--ink-soft)"
        strokeWidth="1.2"
        strokeDasharray="5 4"
      />
      {/* acrômio + coracoide simplificados */}
      <path {...bone2} d="M198 100 C 214 92, 234 96, 240 110 C 234 120, 216 122, 202 118 Z" />
      <path
        {...bone2}
        d="M212 120 C 226 112, 244 112, 252 120 C 246 126, 236 126, 230 124 C 236 130, 240 138, 238 146 C 230 140, 220 130, 214 122 Z"
      />
      <GlenoidProcess cx={228} cy={150} rx={15} ry={40} />
    </>
  );
}

/* =========================================================================
   2) Classificação de Ideberg (mod. Goss) — 6 tipos (variants clicáveis).
   ========================================================================= */
const Ideberg: FC<FigureProps> = ({ className, title, variant }) => {
  const v = variant ?? "ii";
  const legend: Record<string, string> = {
    i: "Tipo I — rebordo glenoidal",
    ii: "Tipo II — traço à borda lateral",
    iii: "Tipo III — traço à borda superior",
    iv: "Tipo IV — traço à borda medial",
    v: "Tipo V — combinado (IV + II)",
    vi: "Tipo VI — cominuído",
  };
  return (
    <svg
      viewBox="0 0 300 300"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `Ideberg-Goss — ${legend[v] ?? v}`}</title>
      <ClassBase />

      <g className="fx-line">
        {v === "i" && (
          <>
            {/* chip do rebordo (fragmento marginal anterior/posterior) */}
            <path
              d="M241 128 C 250 138, 250 162, 241 172 L 231 168 C 238 158, 238 142, 231 132 Z"
              fill="var(--cortical)"
              opacity="0.16"
              stroke="var(--cortical)"
              strokeWidth="2.4"
            />
            <path d="M231 132 L 241 128 M231 168 L 241 172" {...fx} />
          </>
        )}
        {v === "ii" && (
          // traço transverso/oblíquo saindo pela borda LATERAL (fragmento inferior)
          <path d="M226 138 C 210 156, 176 190, 128 224" {...fx} />
        )}
        {v === "iii" && (
          // traço da fossa até a borda SUPERIOR (coracoide/incisura) — SSSC
          <path d="M224 142 C 214 128, 204 118, 190 110" {...fx} />
        )}
        {v === "iv" && (
          // traço horizontal cruzando o corpo até a borda MEDIAL (vertebral)
          <path d="M222 150 C 176 154, 118 150, 68 146" {...fx} />
        )}
        {v === "v" && (
          <>
            {/* IV: até a borda medial */}
            <path d="M222 150 C 176 154, 118 150, 68 146" {...fx} />
            {/* II: até a borda lateral inferior */}
            <path d="M222 156 C 200 178, 168 206, 128 226" {...fx} />
          </>
        )}
        {v === "vi" && (
          <>
            {/* múltiplos traços na fossa (cominuição) */}
            <path d="M226 132 C 214 148, 210 164, 220 180" {...fx} strokeWidth="2.4" />
            <path d="M234 140 L 214 158" {...fx} strokeWidth="2.4" />
            <path d="M232 168 L 216 152" {...fx} strokeWidth="2.4" />
            <path d="M228 190 C 220 176, 214 160, 218 144" {...fx} strokeWidth="2.4" />
          </>
        )}
      </g>

      <text x="150" y="284" {...mono} textAnchor="middle">{legend[v] ?? v}</text>
      <text x="150" y="298" {...label} textAnchor="middle">Ideberg 1984 · mod. Goss (VI)</text>
    </svg>
  );
};

/* =========================================================================
   3) Rima glenoidal & instabilidade — método do círculo (PICO) e subluxação
      da cabeça umeral. Variants: anterior | posterior.
   ========================================================================= */
const RebordoInstabilidade: FC<FigureProps> = ({ className, title, variant }) => {
  const v = variant ?? "anterior";
  const anterior = v !== "posterior";
  // glenoide "en face" (círculo inferior perfeito de Pico) vista frontal
  const cx = 130;
  const cy = 150;
  const r = 68;
  return (
    <svg
      viewBox="0 0 300 300"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `Rima glenoidal e instabilidade — ${anterior ? "anterior" : "posterior"}`}</title>

      {/* Cavidade glenoidal en face (pêra): parte superior estreita + círculo inferior */}
      <path
        {...bone}
        d={`M${cx} ${cy - r - 26} C ${cx - 34} ${cy - r - 20}, ${cx - r} ${cy - r + 26}, ${cx - r} ${cy}
            A ${r} ${r} 0 1 0 ${cx + r} ${cy}
            C ${cx + r} ${cy - r + 26}, ${cx + 34} ${cy - r - 20}, ${cx} ${cy - r - 26} Z`}
      />

      {/* Círculo inferior perfeito (método de Pico) — amber tracejado */}
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="var(--amber)" strokeWidth="1.6" strokeDasharray="5 4" />
      <line x1={cx} y1={cy - r} x2={cx} y2={cy + r} stroke="var(--amber)" strokeWidth="1" strokeDasharray="3 3" />
      <text x={cx + 6} y={cy - r + 14} {...label} fill="var(--amber)">método do círculo</text>

      {/* Fragmento / defeito de rebordo */}
      {anterior ? (
        <>
          <path
            d={`M${cx - r} ${cy - 30} A ${r} ${r} 0 0 0 ${cx - r} ${cy + 30} L ${cx - r + 20} ${cy + 24} A ${r - 20} ${r - 20} 0 0 1 ${cx - r + 20} ${cy - 24} Z`}
            fill="var(--cortical)"
            opacity="0.16"
            stroke="var(--cortical)"
            strokeWidth="2.4"
            className="fx-line"
          />
          <text x={cx - r - 4} y={cy} {...label} textAnchor="end" fill="var(--cortical)">reb. ant.</text>
        </>
      ) : (
        <>
          <path
            d={`M${cx + r} ${cy - 30} A ${r} ${r} 0 0 1 ${cx + r} ${cy + 30} L ${cx + r - 20} ${cy + 24} A ${r - 20} ${r - 20} 0 0 0 ${cx + r - 20} ${cy - 24} Z`}
            fill="var(--cortical)"
            opacity="0.16"
            stroke="var(--cortical)"
            strokeWidth="2.4"
            className="fx-line"
          />
          <text x={cx + r + 4} y={cy} {...label} fill="var(--cortical)">reb. post.</text>
        </>
      )}

      {/* Cabeça umeral subluxada na direção do defeito — teal */}
      <circle
        cx={anterior ? cx - 26 : cx + 26}
        cy={cy}
        r={46}
        fill="none"
        stroke="var(--teal)"
        strokeWidth="2.2"
        strokeDasharray="6 4"
      />
      <text x={cx} y={cy + 4} {...label} textAnchor="middle" fill="var(--teal)">cabeça umeral</text>

      {/* Seta de deslocamento */}
      <g stroke="var(--teal)" strokeWidth="2" fill="none" strokeLinecap="round">
        <line x1={cx} y1={cy + r + 22} x2={anterior ? cx - 40 : cx + 40} y2={cy + r + 22} />
        <path d={anterior ? `M${cx - 40} ${cy + r + 22} l 8 -5 M${cx - 40} ${cy + r + 22} l 8 5` : `M${cx + 40} ${cy + r + 22} l -8 -5 M${cx + 40} ${cy + r + 22} l -8 5`} />
      </g>

      {/* Nota de percentual crítico */}
      <text x="150" y="290" {...mono} textAnchor="middle">perda óssea ~20-25% · subluxação</text>
    </svg>
  );
};

/* =========================================================================
   4) Complexo suspensor superior do ombro (SSSC de Goss) — anel osteoligamentar.
   ========================================================================= */
const SSSC: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 320 280"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Complexo suspensor superior do ombro (SSSC) — anel de Goss"}</title>

    {/* Anel osteoligamentar (glenoide-coracoide-lig.CC-clavícula distal-AC-acrômio) */}
    <path
      d="M150 150 C 150 118, 168 96, 196 92
         C 214 90, 228 78, 236 62
         C 250 66, 262 62, 272 52
         C 284 66, 282 92, 268 104
         C 254 116, 236 118, 224 132
         C 214 144, 208 158, 200 166
         C 184 178, 164 176, 150 166 Z"
      fill="none"
      stroke="var(--teal)"
      strokeWidth="2"
      strokeDasharray="4 4"
      opacity="0.7"
    />

    {/* Processo glenoidal */}
    <ellipse cx="150" cy="158" rx="14" ry="30" {...bone2} />
    <text x="150" y="200" {...label} textAnchor="middle">glenoide</text>

    {/* Coracoide */}
    <path {...bone2} d="M188 96 C 202 88, 220 90, 226 100 C 218 106, 206 106, 200 104 Z" />
    <text x="188" y="118" {...label}>coracoide</text>

    {/* Clavícula distal + AC */}
    <path {...bone} d="M234 58 C 250 52, 268 50, 286 46 L 288 60 C 270 64, 252 66, 236 70 Z" />
    <text x="262" y="42" {...label} textAnchor="middle">clavícula distal</text>
    <circle cx="236" cy="64" r="4" fill="none" stroke="var(--amber)" strokeWidth="1.8" />
    <text x="214" y="52" {...label} fill="var(--amber)">AC</text>

    {/* Acrômio */}
    <path {...bone2} d="M214 118 C 232 116, 250 122, 256 134 C 244 140, 224 138, 210 130 Z" />
    <text x="246" y="152" {...label} textAnchor="middle">acrômio</text>

    {/* Ligamentos coracoclaviculares (CC) — teal */}
    <g stroke="var(--teal)" strokeWidth="2" fill="none" strokeLinecap="round">
      <line x1="210" y1="98" x2="244" y2="66" />
      <line x1="222" y1="102" x2="252" y2="70" />
    </g>
    <text x="238" y="92" {...label} fill="var(--teal)">lig. CC</text>

    {/* Escoras (struts): superior = clavícula; inferior = corpo/espinha */}
    <path d="M150 150 C 120 150, 90 152, 60 154" stroke="var(--ink-soft)" strokeWidth="6" strokeLinecap="round" opacity="0.5" />
    <text x="70" y="146" {...label}>escora inferior (corpo/espinha)</text>
    <text x="150" y="30" {...label} textAnchor="middle">escora superior (clavícula)</text>

    {/* Marcador de "dupla lesão" */}
    <text x="160" y="266" {...mono} textAnchor="middle">dupla lesão do anel = ombro flutuante</text>
  </svg>
);

/* =========================================================================
   5) Via anterior (deltopeitoral) — rebordo/fossa anterior.
   ========================================================================= */
const ViaAnterior: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 300 280"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Via anterior deltopeitoral para a glenoide"}</title>

    {/* Corte axial esquemático do ombro anterior */}
    <path {...bone} d="M60 60 C 40 92, 40 150, 66 190 C 92 228, 150 240, 196 220 C 176 196, 168 168, 172 140 C 176 108, 168 80, 148 60 C 118 44, 84 44, 60 60 Z" />

    {/* Cavidade glenoidal (à direita, articular voltada medialmente) */}
    <GlenoidProcess cx={176} cy={140} rx={13} ry={34} />

    {/* Intervalo deltopeitoral (deltoide lateral / peitoral medial) + veia cefálica */}
    <path d="M110 40 C 108 90, 108 150, 112 210" stroke="var(--amber)" strokeWidth="2.4" strokeDasharray="7 5" fill="none" strokeLinecap="round" />
    <text x="92" y="34" {...label} fill="var(--amber)">intervalo deltopeitoral</text>
    <circle cx="118" cy="120" r="4" fill="none" stroke="var(--teal)" strokeWidth="1.6" />
    <text x="124" y="118" {...label} fill="var(--teal)">v. cefálica</text>

    {/* Subescapular (dividido/afastado) — teal */}
    <path d="M150 96 C 158 118, 158 162, 150 186" {...soft} />
    <text x="138" y="150" {...label} fill="var(--teal)" textAnchor="end">subescapular</text>

    {/* Nervo axilar em risco (borda inferior do subescapular) */}
    <path d="M140 196 C 158 204, 178 204, 196 196" stroke="var(--teal)" strokeWidth="2.4" strokeDasharray="5 4" fill="none" strokeLinecap="round" />
    <text x="150" y="216" {...label} fill="var(--teal)" textAnchor="middle">n. axilar (risco)</text>

    <text x="150" y="262" {...mono} textAnchor="middle">deltopeitoral · anterior (Ideberg Ia)</text>
  </svg>
);

/* =========================================================================
   6) Via posterior (Judet) — fossa/rebordo posterior, tipos II/III.
   ========================================================================= */
const ViaPosterior: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 300 280"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Via posterior (Judet) para a glenoide"}</title>

    {/* Escápula posterior + colo glenoidal */}
    <path {...bone} d="M52 70 C 108 58, 160 74, 190 112 C 200 126, 202 140, 200 152 C 168 196, 120 224, 90 248 L 56 228 Z" />
    <path d="M66 112 C 108 114, 156 116, 190 114" fill="none" stroke="var(--ink-soft)" strokeWidth="1.4" strokeDasharray="5 4" />
    <text x="96" y="106" {...label}>espinha</text>

    {/* Glenoide (borda posterior exposta) */}
    <GlenoidProcess cx={216} cy={150} rx={13} ry={34} />

    {/* Intervalo infraespinal / redondo menor */}
    <path d="M120 128 C 150 138, 182 142, 208 140" stroke="var(--amber)" strokeWidth="2.4" strokeDasharray="7 5" fill="none" strokeLinecap="round" />
    <text x="118" y="122" {...label} fill="var(--amber)">infraespinal / redondo menor</text>

    {/* Nervo supraescapular na incisura espinoglenoidal (risco) — teal */}
    <path d="M188 116 C 198 128, 200 142, 194 156" {...soft} stroke="var(--teal)" strokeWidth="2.6" />
    <circle cx="192" cy="120" r="3.5" fill="none" stroke="var(--teal)" strokeWidth="1.6" />
    <text x="150" y="176" {...label} fill="var(--teal)" textAnchor="middle">n. supraescapular (espinoglenoidal)</text>

    {/* Nervo axilar / espaço quadrilátero (risco inferior) */}
    <path d="M150 208 C 172 216, 196 214, 214 202" stroke="var(--teal)" strokeWidth="2.2" strokeDasharray="5 4" fill="none" strokeLinecap="round" />
    <text x="150" y="228" {...label} fill="var(--teal)" textAnchor="middle">n. axilar / espaço quadrilátero</text>

    <text x="150" y="266" {...mono} textAnchor="middle">Judet · posterior (tipos II-III)</text>
  </svg>
);

/* =========================================================================
   7) Técnica — redução articular + fixação (parafuso interfragmentar, placa
   ou âncoras).
   ========================================================================= */
const StepFixacao: FC<FigureProps> = ({ className, title, variant }) => {
  const ancoras = variant === "ancoras";
  return (
    <svg
      viewBox="0 0 300 300"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? (ancoras ? "Reparo do rebordo com âncoras de sutura" : "Redução articular e fixação da glenoide")}</title>
      <ClassBase />

      {/* traço reduzido (quase fechado) */}
      <path
        d="M226 138 C 212 156, 182 186, 140 218"
        stroke="var(--cortical)"
        strokeWidth="2"
        strokeDasharray="4 3"
        fill="none"
        className="fx-line"
      />

      {ancoras ? (
        <>
          {/* âncoras de sutura na margem glenoidal reinserindo lábio/fragmento */}
          <g stroke="var(--teal)" strokeWidth="2.4" strokeLinecap="round">
            <line x1="240" y1="128" x2="224" y2="132" />
            <line x1="242" y1="150" x2="226" y2="150" />
            <line x1="240" y1="172" x2="224" y2="168" />
            <circle cx="224" cy="132" r="3" fill="var(--teal)" stroke="none" />
            <circle cx="226" cy="150" r="3" fill="var(--teal)" stroke="none" />
            <circle cx="224" cy="168" r="3" fill="var(--teal)" stroke="none" />
          </g>
          {/* laçadas de sutura sobre o fragmento */}
          <path d="M240 128 C 250 138, 250 162, 240 172" fill="none" stroke="var(--teal)" strokeWidth="1.6" strokeDasharray="3 3" />
          <text x="150" y="286" {...mono} textAnchor="middle">âncoras · rebordo/bony Bankart (artroscópico/aberto)</text>
        </>
      ) : (
        <>
          {/* Parafuso interfragmentário (lag) cruzando o traço */}
          <g stroke="var(--teal)" strokeWidth="2.6" strokeLinecap="round">
            <line x1="220" y1="150" x2="150" y2="196" />
            <circle cx="220" cy="150" r="4" fill="var(--teal)" stroke="none" />
            <g strokeWidth="1.2">
              <line x1="182" y1="170" x2="176" y2="180" />
              <line x1="192" y1="164" x2="186" y2="174" />
            </g>
          </g>
          <text x="150" y="200" {...label} fill="var(--teal)">parafuso interfragmentar</text>

          {/* Placa de apoio (buttress) na borda lateral */}
          <path d="M214 158 C 196 182, 168 208, 138 228" fill="none" stroke="var(--teal)" strokeWidth="7" strokeLinecap="round" opacity="0.9" />
          {[0, 1, 2, 3].map((i) => {
            const t = i / 3;
            const x = 214 - t * 76;
            const y = 158 + t * 70;
            return <circle key={i} cx={x} cy={y} r="3.2" fill="var(--surface)" stroke="var(--teal)" strokeWidth="1.4" />;
          })}
          <text x="150" y="250" {...label} fill="var(--teal)" textAnchor="middle">placa de apoio (borda lateral)</text>
          <text x="150" y="286" {...mono} textAnchor="middle">reduzir → comprimir → neutralizar</text>
        </>
      )}
    </svg>
  );
};

/**
 * Registro de figuras deste tópico. Chave = id prefixado por "fratura-glenoide:".
 * O integrador global agrega este objeto ao registro FIGURES.
 */
export const figures: Record<string, FC<FigureProps>> = {
  "fratura-glenoide:anatomia": Anatomia,
  "fratura-glenoide:ideberg": Ideberg,
  "fratura-glenoide:rebordo-instabilidade": RebordoInstabilidade,
  "fratura-glenoide:sssc": SSSC,
  "fratura-glenoide:via-anterior": ViaAnterior,
  "fratura-glenoide:via-posterior": ViaPosterior,
  "fratura-glenoide:step-fixacao": StepFixacao,
};
