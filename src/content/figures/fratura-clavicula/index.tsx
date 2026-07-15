import type { CSSProperties, FC } from "react";
import type { FigureProps } from "../../../types/topic";

/* ============================================================================
   Figuras esquemáticas da fratura da clavícula (line-art original, 2 tons —
   sem copyright). Cores exclusivamente por CSS vars. Todos os ids são
   prefixados por "fratura-clavicula:" no registro exportado no fim do arquivo.
   ========================================================================== */

const BONE = { stroke: "var(--ink-soft)", fill: "var(--surface)", strokeWidth: 2 } as const;
const SOFT = { stroke: "var(--teal)", fill: "none", strokeWidth: 2 } as const;
const FX = { stroke: "var(--cortical)", strokeWidth: 2.6, fill: "none", strokeLinecap: "round" } as const;

const label: CSSProperties = {
  fontSize: 11,
  fill: "var(--muted)",
  fontFamily: "var(--font-body, sans-serif)",
};
const mono: CSSProperties = {
  fontSize: 11,
  fill: "var(--muted)",
  fontFamily: "var(--font-mono, monospace)",
};

/* Contorno em "S" itálico da clavícula direita (esterno à esquerda, ombro à
   direita): dupla curvatura — convexa anterior no terço medial, côncava
   anterior no terço lateral. Reutilizado por várias figuras. */
const ClavicleShape: FC<{ dim?: boolean }> = ({ dim }) => (
  <path
    d="M40 96
       C 70 74, 110 72, 150 84
       C 195 98, 230 112, 270 108
       C 300 105, 320 100, 336 96
       L 340 112
       C 320 118, 298 122, 270 126
       C 228 131, 192 116, 150 102
       C 112 90, 74 92, 46 112 Z"
    stroke="var(--ink-soft)"
    fill="var(--surface)"
    strokeWidth={2}
    opacity={dim ? 0.4 : 1}
  />
);

/* -- 1. Anatomia da clavícula ---------------------------------------------- */
const Anatomia: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 380 220"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Anatomia da clavícula: dupla curvatura em S, articulações e estruturas neurovasculares subjacentes"}</title>
    {/* manúbrio esternal (medial) */}
    <path d="M18 88 L 40 84 L 42 128 L 20 132 Z" {...BONE} />
    {/* acrômio / processo coracoide (lateral) */}
    <path d="M344 82 C 362 82, 366 100, 360 116 L 340 118 L 336 92 Z" {...BONE} />
    <path d="M330 128 C 342 138, 352 140, 356 132" {...SOFT} strokeLinecap="round" />
    <ClavicleShape />
    {/* ligamentos coracoclaviculares (conoide + trapezoide) — lateral */}
    <line x1="300" y1="122" x2="304" y2="146" stroke="var(--teal)" strokeWidth="1.8" />
    <line x1="314" y1="120" x2="322" y2="144" stroke="var(--teal)" strokeWidth="1.8" />
    {/* ligamentos costoclaviculares — medial */}
    <line x1="60" y1="112" x2="58" y2="140" stroke="var(--teal)" strokeWidth="1.8" />
    {/* músculos: peitoral maior / deltoide (inferior); ECM / trapézio (superior) */}
    <path d="M120 118 C 130 140, 160 146, 190 142" {...SOFT} strokeDasharray="5 4" strokeLinecap="round" />
    <path d="M110 80 C 120 60, 150 58, 176 66" {...SOFT} strokeDasharray="5 4" strokeLinecap="round" />
    {/* plexo braquial + a. e v. subclávias correndo POSTERO-INFERIOR ao terço médio */}
    <path d="M150 150 C 190 156, 230 156, 262 150" stroke="var(--cortical)" strokeWidth="1.8" fill="none" strokeDasharray="2 3" />
    <path d="M150 160 C 190 168, 230 168, 262 160" stroke="var(--cortical)" strokeWidth="1.8" fill="none" strokeDasharray="2 3" />
    <text x="14" y="76" style={mono}>art. esternoclavicular</text>
    <text x="300" y="72" style={mono}>art. AC</text>
    <text x="292" y="164" style={label}>lig. CC</text>
    <text x="30" y="158" style={label}>lig. costoclavicular</text>
    <text x="90" y="188" style={label}>plexo braquial + a./v. subclávias (post.)</text>
    <text x="196" y="60" style={label}>ECM / trapézio</text>
    <text x="128" y="158" style={label}>peitoral / deltoide</text>
  </svg>
);

/* -- 2. Terços de Allman (variantes: medial / medio / lateral) ------------- */
const Tercos: FC<FigureProps> = ({ className, title, variant }) => {
  const v = variant ?? "medio";
  return (
    <svg
      viewBox="0 0 380 190"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `Grupos de Allman por terço — terço ${v === "medial" ? "medial (III)" : v === "lateral" ? "lateral (II)" : "médio (I)"}`}</title>
      <ClavicleShape />
      {/* limites dos terços */}
      <line x1="140" y1="66" x2="140" y2="136" stroke="var(--ink-soft)" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="248" y1="66" x2="248" y2="136" stroke="var(--ink-soft)" strokeWidth="1" strokeDasharray="3 3" />
      {v === "medial" && (
        <path d="M92 82 L 84 116" {...FX} />
      )}
      {v === "medio" && (
        /* terço médio — o mais comum (~80%), traço oblíquo com cavalgamento */
        <>
          <path d="M196 92 L 186 124" {...FX} />
          <path d="M196 92 L 206 122" {...FX} strokeWidth={2} opacity={0.7} />
        </>
      )}
      {v === "lateral" && (
        <path d="M300 108 L 292 138" {...FX} />
      )}
      <text x="70" y="164" style={mono}>III — medial</text>
      <text x="176" y="164" style={mono}>I — médio</text>
      <text x="280" y="164" style={mono}>II — lateral</text>
      <text x="112" y="52" style={label}>
        {v === "medial" && "Medial ~2–3% — cuidado com mediastino"}
        {v === "medio" && "Médio ~69–80% — o mais frequente"}
        {v === "lateral" && "Lateral ~15–28% — relação com lig. CC"}
      </text>
    </svg>
  );
};

/* -- 3. Classificação de Robinson (variantes 2A / 2B) ---------------------- */
const Robinson: FC<FigureProps> = ({ className, title, variant }) => {
  const v = variant ?? "2B";
  return (
    <svg
      viewBox="0 0 380 200"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `Classificação de Robinson (Edinburgh) — tipo ${v}`}</title>
      {v === "2A" && (
        <>
          {/* tipo 2A: diafisário sem desvio (cortical em contato) */}
          <ClavicleShape />
          <path d="M190 90 L 186 122" {...FX} strokeWidth={2} />
          <text x="96" y="168" style={mono}>2A — cortical em contato (alinhada)</text>
          <text x="110" y="52" style={label}>sem desvio → prognóstico benigno</text>
        </>
      )}
      {v === "2B" && (
        <>
          {/* tipo 2B: diafisário desviado / cominutivo — fragmentos separados */}
          {/* fragmento medial */}
          <path d="M40 96 C 70 74, 110 72, 150 84 C 170 90, 182 96, 194 100 L 190 118 C 176 114, 160 106, 142 100 C 110 90, 74 92, 46 112 Z" {...BONE} />
          {/* fragmento lateral (cavalgado / caído) */}
          <path d="M196 118 C 232 128, 268 118, 300 116 C 320 114, 332 110, 340 108 L 336 124 C 320 129, 300 133, 274 136 C 240 141, 210 132, 186 124 Z" {...BONE} />
          {/* fragmento em cunha (borboleta) */}
          <path d="M188 104 L 214 108 L 196 122 Z" {...BONE} />
          {/* traço de fratura entre os fragmentos */}
          <path d="M190 96 L 200 126" {...FX} />
          {/* seta de encurtamento */}
          <line x1="150" y1="150" x2="286" y2="150" stroke="var(--amber)" strokeWidth="1.4" />
          <line x1="150" y1="145" x2="150" y2="155" stroke="var(--amber)" strokeWidth="1.4" />
          <line x1="286" y1="145" x2="286" y2="155" stroke="var(--amber)" strokeWidth="1.4" />
          <text x="180" y="170" style={mono}>encurtamento ≥ 2 cm</text>
          <text x="20" y="52" style={label}>2B — desvio/cominuição (cunha) → risco de pseudartrose</text>
        </>
      )}
      <text x="20" y="188" style={label}>1=medial · 2=diafisário · 3=lateral (A=alinhado · B=desviado)</text>
    </svg>
  );
};

/* -- 4. Via de acesso (placa anterossuperior) ------------------------------ */
const Acesso: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 380 200"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Via de acesso à clavícula: incisão sobre a diáfise, nervos supraclaviculares e estruturas neurovasculares em risco"}</title>
    <ClavicleShape />
    {/* incisão longitudinal / sobre a fratura, ligeiramente inferior à borda */}
    <line x1="118" y1="118" x2="240" y2="120" stroke="var(--cortical)" strokeWidth="2.6" strokeLinecap="round" />
    {/* nervos supraclaviculares cruzando o campo (perpendiculares) */}
    <path d="M130 60 C 132 90, 132 120, 134 150" {...SOFT} strokeDasharray="4 4" strokeLinecap="round" />
    <path d="M176 58 C 178 90, 178 120, 180 152" {...SOFT} strokeDasharray="4 4" strokeLinecap="round" />
    <path d="M222 60 C 224 90, 224 120, 226 150" {...SOFT} strokeDasharray="4 4" strokeLinecap="round" />
    {/* plexo / vasos subclávios posteroinferiores (zona de perigo) */}
    <rect x="150" y="150" width="110" height="26" fill="var(--amber)" opacity="0.14" />
    <path d="M156 162 C 190 168, 226 168, 256 162" stroke="var(--cortical)" strokeWidth="1.6" fill="none" strokeDasharray="2 3" />
    <text x="108" y="54" style={label}>nn. supraclaviculares (proteger)</text>
    <text x="70" y="112" style={mono}>incisão sobre a diáfise</text>
    <text x="10" y="192" style={label}>plexo/vasos subclávios — não perfurar cortical post.</text>
  </svg>
);

/* -- 5. Passo 1: redução e alinhamento ------------------------------------- */
const Step1: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 380 190"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Passo 1: redução dos fragmentos e restauração do comprimento com pinças pontiagudas"}</title>
    {/* fragmentos ainda ligeiramente afastados sendo aproximados */}
    <path d="M40 96 C 70 76, 110 74, 150 86 C 168 91, 180 97, 192 101 L 188 119 C 174 115, 158 107, 142 101 C 110 91, 74 94, 46 112 Z" {...BONE} />
    <path d="M198 112 C 234 122, 268 112, 300 110 C 320 108, 332 104, 340 100 L 336 116 C 320 121, 300 125, 274 128 C 240 133, 212 126, 190 118 Z" {...BONE} />
    <path d="M192 96 L 200 120" {...FX} strokeWidth={2} />
    {/* pinças de redução (fórceps) representadas por V teal */}
    <path d="M168 60 L 186 104 M204 60 L 190 104" {...SOFT} strokeLinecap="round" />
    <circle cx="186" cy="104" r="3" fill="var(--teal)" />
    <circle cx="190" cy="104" r="3" fill="var(--teal)" />
    {/* setas de tração restaurando comprimento */}
    <path d="M70 150 L 40 150 M40 150 L 48 145 M40 150 L 48 155" stroke="var(--amber)" strokeWidth="1.4" fill="none" />
    <path d="M300 150 L 340 150 M340 150 L 332 145 M340 150 L 332 155" stroke="var(--amber)" strokeWidth="1.4" fill="none" />
    <text x="150" y="52" style={label}>pinças pontiagudas</text>
    <text x="90" y="172" style={mono}>tração → restaurar comprimento/rotação</text>
  </svg>
);

/* -- 6. Passo 2: placa superior + parafuso interfragmentar ----------------- */
const Step2: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 380 190"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Passo 2: placa pré-moldada na superfície superior com parafuso interfragmentar de compressão"}</title>
    <ClavicleShape />
    {/* placa pré-contornada seguindo o S, na borda superior */}
    <path
      d="M96 82 C 130 68, 180 74, 232 90 C 262 99, 292 100, 320 96"
      stroke="var(--teal)"
      strokeWidth="7"
      fill="none"
      strokeLinecap="round"
      opacity="0.9"
    />
    {/* furos / parafusos da placa */}
    {[110, 138, 170, 250, 282, 310].map((x, i) => {
      const y = 74 + Math.sin((x - 96) / 60) * 6 + (x > 232 ? 14 : 6);
      return <circle key={i} cx={x} cy={y} r="3.2" fill="var(--surface)" stroke="var(--teal)" strokeWidth="1.6" />;
    })}
    {/* traço de fratura oblíquo com parafuso interfragmentar (lag) atravessando */}
    <path d="M198 92 L 208 120" stroke="var(--ink-soft)" strokeWidth="1" strokeDasharray="2 3" />
    <line x1="188" y1="112" x2="220" y2="94" stroke="var(--teal)" strokeWidth="3" strokeLinecap="round" />
    <text x="70" y="60" style={mono}>placa superior pré-moldada</text>
    <text x="110" y="150" style={label}>parafuso interfrag. (lag) na obliquidade</text>
    <text x="60" y="170" style={label}>≥ 3 parafusos bicorticais de cada lado do foco</text>
  </svg>
);

/* -- 7. Passo 3: haste intramedular (alternativa) -------------------------- */
const Step3: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 380 190"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Passo 3: alternativa por haste intramedular elástica em fraturas com traço simples"}</title>
    <ClavicleShape />
    {/* foco consolidando (linha tênue) */}
    <path d="M194 92 L 202 120" stroke="var(--ink-soft)" strokeWidth="1" strokeDasharray="2 3" />
    {/* haste IM percorrendo o canal, com curva em S suave */}
    <path
      d="M52 104 C 90 90, 130 90, 168 98 C 210 107, 250 114, 300 110"
      stroke="var(--teal)"
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
    />
    {/* ponto de entrada medial (esternoclavicular) */}
    <circle cx="52" cy="104" r="4.5" fill="var(--teal)" />
    <text x="24" y="128" style={label}>entrada medial</text>
    <text x="70" y="64" style={mono}>haste intramedular elástica</text>
    <text x="60" y="164" style={label}>menor agressão de partes moles · risco de migração</text>
  </svg>
);

export const figures: Record<string, FC<FigureProps>> = {
  "fratura-clavicula:anatomia": Anatomia,
  "fratura-clavicula:tercos": Tercos,
  "fratura-clavicula:robinson": Robinson,
  "fratura-clavicula:acesso": Acesso,
  "fratura-clavicula:step-1": Step1,
  "fratura-clavicula:step-2": Step2,
  "fratura-clavicula:step-3": Step3,
};
