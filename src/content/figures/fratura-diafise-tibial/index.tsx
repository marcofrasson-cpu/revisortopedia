import type { FC } from "react";
import type { FigureProps } from "../../../types/topic";

/* ============================================================================
   Fratura da diáfise tibial — figuras esquemáticas, line-art 2 tons.
   Ossos: stroke var(--ink-soft), fill var(--surface).
   Implante (haste/parafusos) e partes moles: stroke var(--teal).
   Traço de fratura: stroke var(--cortical) + className "fx-line".
   Medidas/ângulos/pontos de entrada: var(--amber). Rótulos: var(--muted).
   IDs prefixados por "fratura-diafise-tibial:" no registro FIGURES.
   ========================================================================== */

const boneStyle = {
  fill: "var(--surface)",
  stroke: "var(--ink-soft)",
  strokeWidth: 1.6,
  strokeLinejoin: "round" as const,
};

const label = {
  fontSize: 11,
  fill: "var(--muted)",
  fontFamily: "var(--font-body, sans-serif)",
};

const mono = {
  fontSize: 11,
  fill: "var(--muted)",
  fontFamily: "var(--font-mono, monospace)",
};

const implant = {
  fill: "none",
  stroke: "var(--teal)",
  strokeWidth: 3,
  strokeLinecap: "round" as const,
};

/* -------------------------------------------------------------------------- */
/* 1. Anatomia — tíbia + fíbula, borda subcutânea ântero-medial, nutrícia.    */
/* -------------------------------------------------------------------------- */
export const Anatomia: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 300 340"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Anatomia da diáfise tibial — borda subcutânea, fíbula e vascularização"}</title>

    {/* Platô/metáfise proximal da tíbia */}
    <path {...boneStyle} d="M96 26 C 78 26, 66 36, 66 52 C 66 66, 78 74, 96 74 L 148 74 C 166 74, 178 66, 178 50 C 178 34, 166 26, 148 26 Z" />
    {/* Tuberosidade anterior da tíbia */}
    <path {...boneStyle} d="M150 74 C 160 78, 164 88, 158 96 L 146 92 L 146 74 Z" />
    {/* Diáfise da tíbia — secção triangular, borda anterior nítida */}
    <path {...boneStyle} d="M108 74 C 116 140, 120 210, 118 270 L 146 270 C 148 210, 148 140, 150 74 Z" />
    {/* Metáfise/pilão distal da tíbia + maléolo medial */}
    <path
      {...boneStyle}
      fill="var(--surface-2, var(--surface))"
      d="M112 270 C 104 288, 100 306, 104 318 L 118 318 L 122 300 L 146 300 L 150 316 L 160 314 C 162 300, 158 284, 150 270 Z"
    />

    {/* Fíbula (lateral, mais fina) */}
    <path {...boneStyle} d="M190 60 C 196 62, 198 70, 196 78 L 190 78 Z" />
    <path {...boneStyle} d="M188 80 C 192 150, 190 220, 186 276 L 198 276 C 202 220, 202 150, 200 78 Z" />
    <path {...boneStyle} fill="var(--surface-2, var(--surface))" d="M186 276 C 182 292, 182 306, 188 316 L 200 314 C 204 300, 204 288, 200 276 Z" />

    {/* Borda ântero-medial subcutânea (crista) */}
    <line x1="126" y1="80" x2="130" y2="266" stroke="var(--ink-soft)" strokeWidth="0.9" opacity="0.55" strokeDasharray="4 3" />
    <text x="20" y="150" {...label} textAnchor="start">borda ântero-medial</text>
    <text x="20" y="164" {...mono} textAnchor="start">(subcutânea → exposição)</text>
    <line x1="118" y1="158" x2="126" y2="158" stroke="var(--ink-soft)" strokeWidth="0.8" />

    {/* Artéria nutrícia (terço proximal posterior) */}
    <path d="M158 132 C 146 138, 138 142, 132 148" stroke="var(--teal)" strokeWidth="1.6" fill="none" strokeLinecap="round" />
    <circle cx="132" cy="148" r="2.4" fill="var(--teal)" />
    <text x="164" y="130" {...label} textAnchor="start" fill="var(--teal)">a. nutrícia</text>
    <text x="164" y="144" {...mono} textAnchor="start" fill="var(--teal)">(terço proximal)</text>

    <text x="122" y="20" {...label} textAnchor="middle">Platô tibial</text>
    <text x="194" y="52" {...label} textAnchor="start">Fíbula</text>
    <text x="120" y="334" {...label} textAnchor="middle">Maléolo medial</text>
    <text x="196" y="330" {...label} textAnchor="middle">Mal. lat.</text>
  </svg>
);

/* -------------------------------------------------------------------------- */
/* 2. Gustilo–Anderson — exposta (variants I | II | IIIA | IIIB | IIIC).      */
/* -------------------------------------------------------------------------- */
export const GustiloAnderson: FC<FigureProps> = ({ className, title, variant = "I" }) => {
  const opts = ["I", "II", "IIIA", "IIIB", "IIIC"];
  const v = opts.includes(variant) ? variant : "I";
  const captions: Record<string, string> = {
    I: "Tipo I — ferida < 1 cm, limpa, baixa energia",
    II: "Tipo II — ferida 1–10 cm, lesão moderada de partes moles",
    IIIA: "Tipo IIIA — alta energia, cobertura de partes moles adequada",
    IIIB: "Tipo IIIB — perda de cobertura, exposição óssea (retalho)",
    IIIC: "Tipo IIIC — lesão arterial que exige reparo",
  };
  return (
    <svg
      viewBox="0 0 260 300"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `Gustilo–Anderson ${v} — ${captions[v]}`}</title>

      {/* envelope de partes moles (perna em corte longitudinal) */}
      <path
        {...boneStyle}
        fill="var(--surface-2, var(--surface))"
        d="M70 24 C 52 60, 48 150, 56 260 C 58 276, 70 280, 84 278 L 176 278 C 190 280, 202 274, 204 258 C 212 150, 208 60, 190 24 C 176 18, 84 18, 70 24 Z"
      />
      {/* tíbia */}
      <path {...boneStyle} d="M112 40 C 118 120, 120 200, 118 262 L 146 262 C 148 200, 148 120, 150 40 Z" />
      {/* traço de fratura */}
      <g className="fx-line" stroke="var(--cortical)" strokeWidth="2.6" fill="none" strokeLinecap="round">
        {(v === "I" || v === "II") && <path d="M112 150 L 150 156" />}
        {(v === "IIIA" || v === "IIIB" || v === "IIIC") && (
          <>
            <path d="M112 134 L 150 140" />
            <path d="M112 176 L 150 168" />
            <path d="M122 138 L 132 168 M144 136 L 138 170" />
          </>
        )}
      </g>

      {/* ferida de pele (largura conforme o tipo) */}
      {v === "I" && (
        <line x1="70" y1="150" x2="60" y2="150" stroke="var(--cortical)" strokeWidth="3" strokeLinecap="round" />
      )}
      {v === "II" && (
        <path d="M64 132 C 54 148, 54 156, 64 174" stroke="var(--cortical)" strokeWidth="3" fill="none" strokeLinecap="round" />
      )}
      {(v === "IIIA" || v === "IIIB" || v === "IIIC") && (
        <path d="M60 116 C 40 150, 40 168, 60 200" stroke="var(--cortical)" strokeWidth="3.2" fill="none" strokeLinecap="round" />
      )}
      {/* IIIB — perda de cobertura / osso exposto */}
      {v === "IIIB" && (
        <>
          <path d="M60 116 C 44 150, 44 168, 60 200 L 112 176 L 112 134 Z" fill="var(--cortical)" opacity="0.1" />
          <text x="20" y="214" {...mono} textAnchor="start" fill="var(--cortical)">osso exposto</text>
        </>
      )}
      {/* IIIC — lesão arterial */}
      {v === "IIIC" && (
        <>
          <path d="M170 40 C 176 130, 176 210, 170 270" stroke="var(--amber)" strokeWidth="2.2" fill="none" strokeLinecap="round" />
          <path d="M170 150 l-10 -4 m10 4 l-10 6" stroke="var(--amber)" strokeWidth="2" fill="none" strokeLinecap="round" />
          <text x="182" y="150" {...mono} textAnchor="start" fill="var(--amber)">lesão arterial</text>
        </>
      )}

      <text x="130" y="16" {...mono} textAnchor="middle">Gustilo–Anderson {v}</text>
      <text x="130" y="296" {...label} textAnchor="middle">{captions[v].split("—")[1]?.trim()}</text>
    </svg>
  );
};

/* -------------------------------------------------------------------------- */
/* 3. Síndrome compartimental — corte transverso, 4 compartimentos + 5 P.     */
/* -------------------------------------------------------------------------- */
export const Compartimentos: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 320 300"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Síndrome compartimental — corte transverso da perna, 4 compartimentos"}</title>

    {/* contorno da perna (corte axial) */}
    <ellipse cx="150" cy="150" rx="118" ry="104" {...boneStyle} fill="var(--surface-2, var(--surface))" />

    {/* tíbia (triangular, ântero-medial) */}
    <path {...boneStyle} d="M120 96 L 158 108 L 132 176 Z" />
    {/* fíbula (lateral, pequena) */}
    <circle cx="216" cy="150" r="14" {...boneStyle} />

    {/* septos intermusculares (var--teal) */}
    <g stroke="var(--teal)" strokeWidth="1.6" fill="none" strokeLinecap="round">
      {/* membrana interóssea tíbia-fíbula */}
      <path d="M158 118 L 204 146" />
      {/* septo anterior/lateral */}
      <path d="M216 136 C 236 120, 250 130, 252 150" />
      {/* septo lateral/posterior */}
      <path d="M226 162 C 240 190, 232 214, 210 224" />
      {/* septo transverso post. (superficial x profundo) */}
      <path d="M60 168 C 120 196, 190 200, 226 190" />
    </g>

    {/* rótulos dos 4 compartimentos */}
    <text x="150" y="72" {...label} textAnchor="middle" fill="var(--teal)">Anterior</text>
    <text x="150" y="86" {...mono} textAnchor="middle">n. fibular profundo</text>
    <text x="272" y="120" {...label} textAnchor="middle" fill="var(--teal)">Lateral</text>
    <text x="278" y="134" {...mono} textAnchor="middle">n. fib. superf.</text>
    <text x="150" y="180" {...label} textAnchor="middle" fill="var(--teal)">Post. profundo</text>
    <text x="150" y="248" {...label} textAnchor="middle" fill="var(--teal)">Post. superficial</text>

    {/* box das 5 P + pressão delta */}
    <rect x="8" y="220" width="150" height="72" rx="6" fill="var(--surface)" stroke="var(--line-strong)" strokeWidth="1" />
    <text x="18" y="238" {...mono} textAnchor="start" fill="var(--cortical)">5 P — dor desproporcional</text>
    <text x="18" y="252" {...mono} textAnchor="start">Pain · Paresthesia · Pallor</text>
    <text x="18" y="266" {...mono} textAnchor="start">Pulselessness · Paralysis</text>
    <text x="18" y="284" {...mono} textAnchor="start" fill="var(--amber)">ΔP &lt; 30 mmHg → fasciotomia</text>

    <text x="216" y="154" {...label} textAnchor="middle">Fíbula</text>
    <text x="132" y="150" {...label} textAnchor="middle">Tíbia</text>
  </svg>
);

/* -------------------------------------------------------------------------- */
/* 4. Via suprapatelar — joelho semiestendido, portal acima da patela.        */
/* -------------------------------------------------------------------------- */
export const ViaSuprapatelar: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 260 300"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Via suprapatelar — joelho semiestendido, portal acima da patela"}</title>

    {/* fêmur distal */}
    <path {...boneStyle} d="M60 20 C 74 40, 82 70, 82 96 L 118 96 C 118 70, 116 40, 112 20 Z" />
    <path {...boneStyle} fill="var(--surface-2, var(--surface))" d="M74 96 C 60 96, 52 108, 54 124 L 120 124 C 122 108, 116 96, 104 96 Z" />
    {/* patela */}
    <ellipse cx="92" cy="118" rx="14" ry="20" {...boneStyle} fill="var(--surface-2, var(--surface))" />
    {/* tendão quadricipital + patelar */}
    <path d="M92 40 L 92 98" stroke="var(--teal)" strokeWidth="4" strokeLinecap="round" />
    <path d="M92 138 L 100 176" stroke="var(--teal)" strokeWidth="4" strokeLinecap="round" />
    {/* tíbia proximal */}
    <path {...boneStyle} d="M78 176 C 70 200, 68 240, 72 280 L 126 280 C 128 240, 124 200, 116 176 Z" />
    <path {...boneStyle} d="M104 176 C 114 180, 118 190, 112 198 L 100 194 Z" />

    {/* portal suprapatelar + haste passando pela patelofemoral */}
    <circle cx="92" cy="60" r="4" fill="var(--amber)" />
    <path {...implant} d="M92 60 C 96 100, 100 150, 100 200 C 100 240, 98 264, 98 278" />
    {/* seta de inserção */}
    <path d="M92 34 L 92 56" stroke="var(--teal)" strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M92 56 l-5 -7 m5 7 l5 -7" stroke="var(--teal)" strokeWidth="2" fill="none" strokeLinecap="round" />

    <text x="150" y="58" {...label} textAnchor="start" fill="var(--amber)">portal suprapatelar</text>
    <text x="150" y="122" {...mono} textAnchor="start">joelho ~15° flexão</text>
    <text x="150" y="200" {...label} textAnchor="start" fill="var(--teal)">haste (pela patelofemoral)</text>
    <text x="130" y="296" {...label} textAnchor="middle">semiestendido: melhor controle do fragmento proximal</text>
  </svg>
);

/* -------------------------------------------------------------------------- */
/* 5. Via infrapatelar — joelho fletido, portal abaixo da patela.             */
/* -------------------------------------------------------------------------- */
export const ViaInfrapatelar: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 260 300"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Via infrapatelar — joelho hiperfletido, portal no tendão patelar"}</title>

    {/* fêmur distal (joelho fletido ~ vertical) */}
    <path {...boneStyle} d="M40 20 C 60 30, 78 40, 90 56 L 78 78 C 62 64, 46 54, 30 48 Z" />
    <path {...boneStyle} fill="var(--surface-2, var(--surface))" d="M84 60 C 96 72, 100 88, 94 100 L 74 84 C 70 72, 74 62, 84 60 Z" />
    {/* patela */}
    <ellipse cx="100" cy="96" rx="12" ry="18" transform="rotate(28 100 96)" {...boneStyle} fill="var(--surface-2, var(--surface))" />
    {/* tendão patelar */}
    <path d="M104 112 L 116 156" stroke="var(--teal)" strokeWidth="4" strokeLinecap="round" />
    {/* tíbia proximal */}
    <path {...boneStyle} d="M92 156 C 84 190, 82 236, 86 282 L 140 282 C 142 236, 136 190, 128 156 Z" />
    <path {...boneStyle} d="M116 156 C 128 158, 134 168, 128 178 L 112 174 Z" />

    {/* portal infrapatelar (transtendíneo) + haste */}
    <circle cx="112" cy="140" r="4" fill="var(--amber)" />
    <path {...implant} d="M112 140 C 112 190, 110 240, 110 280" />
    {/* seta de inserção */}
    <path d="M126 118 L 116 136" stroke="var(--teal)" strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M116 136 l1 -8 m-1 8 l-8 -3" stroke="var(--teal)" strokeWidth="2" fill="none" strokeLinecap="round" />

    <text x="150" y="128" {...label} textAnchor="start" fill="var(--amber)">portal infrapatelar</text>
    <text x="150" y="96" {...mono} textAnchor="start">joelho &gt; 90° flexão</text>
    <text x="150" y="210" {...label} textAnchor="start" fill="var(--teal)">tendão patelar</text>
    <text x="130" y="298" {...label} textAnchor="middle">flexão desloca o fragmento proximal em ápice anterior</text>
  </svg>
);

/* -------------------------------------------------------------------------- */
/* 6. Passo — redução, ponto de entrada e fio-guia.                           */
/* -------------------------------------------------------------------------- */
export const StepEntrada: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 260 300"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Passo 1 — ponto de entrada correto e fio-guia centrado no canal"}</title>

    {/* tíbia proximal + platô */}
    <path {...boneStyle} fill="var(--surface-2, var(--surface))" d="M78 30 C 62 30, 54 42, 56 58 L 148 58 C 150 42, 142 30, 126 30 Z" />
    <path {...boneStyle} d="M84 58 C 92 130, 96 210, 94 268 L 132 268 C 134 210, 132 130, 138 58 Z" />
    {/* tuberosidade */}
    <path {...boneStyle} d="M136 62 C 148 66, 152 78, 146 86 L 132 82 L 132 62 Z" />

    {/* ponto de entrada correto (medial à borda lateral da eminência) */}
    <circle cx="104" cy="52" r="4" fill="var(--amber)" />
    {/* fio-guia centrado */}
    <path d="M104 52 C 106 130, 108 210, 108 262" stroke="var(--teal)" strokeWidth="2" fill="none" strokeLinecap="round" />
    <circle cx="108" cy="262" r="3.2" fill="var(--teal)" />

    {/* alerta: entrada medial/posterior → deformidade */}
    <circle cx="128" cy="50" r="3" fill="none" stroke="var(--cortical)" strokeWidth="1.6" />
    <text x="150" y="48" {...mono} textAnchor="start" fill="var(--cortical)">medial/post. → valgo/procurvato</text>

    <text x="150" y="70" {...label} textAnchor="start" fill="var(--amber)">ponto de entrada</text>
    <text x="150" y="200" {...label} textAnchor="start" fill="var(--teal)">fio-guia central</text>
    <text x="130" y="292" {...label} textAnchor="middle">alinhar eixo do canal em AP e perfil antes de fresar</text>
  </svg>
);

/* -------------------------------------------------------------------------- */
/* 7. Passo — fresagem sequencial do canal tibial.                            */
/* -------------------------------------------------------------------------- */
export const StepFresagem: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 260 300"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Passo 2 — fresagem sequencial com a fratura reduzida"}</title>

    {/* tíbia reduzida */}
    <path {...boneStyle} d="M108 20 C 120 78, 124 160, 120 258 L 148 258 C 150 160, 148 78, 152 20 Z" />
    <line x1="120" y1="20" x2="128" y2="258" stroke="var(--ink-soft)" strokeWidth="0.8" opacity="0.5" />
    <line x1="142" y1="20" x2="138" y2="258" stroke="var(--ink-soft)" strokeWidth="0.8" opacity="0.5" />
    {/* traço reduzido */}
    <g className="fx-line">
      <line x1="112" y1="150" x2="148" y2="150" stroke="var(--cortical)" strokeWidth="1.4" strokeDasharray="3 3" />
    </g>

    {/* fresa flexível */}
    <path d="M134 6 L 132 132" stroke="var(--teal)" strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M126 132 L 138 132 L 136 148 C 136 154, 128 154, 128 148 Z" fill="var(--teal-tint)" stroke="var(--teal)" strokeWidth="1.4" />
    <g stroke="var(--teal)" strokeWidth="1">
      <path d="M128 138 l-3 2 M138 138 l3 2 M128 144 l-3 2 M138 144 l3 2" />
    </g>

    <text x="164" y="90" {...label} textAnchor="start" fill="var(--teal)">fresagem</text>
    <text x="164" y="106" {...mono} textAnchor="start" fill="var(--teal)">0,5 mm/passo</text>
    <text x="164" y="150" {...mono} textAnchor="start" fill="var(--amber)">1,0–1,5 mm acima</text>
    <text x="164" y="164" {...mono} textAnchor="start" fill="var(--amber)">do diâmetro da haste</text>
    <text x="130" y="286" {...label} textAnchor="middle">reduzido antes de fresar; irrigação e fresas afiadas</text>
  </svg>
);

/* -------------------------------------------------------------------------- */
/* 8. Passo — haste bloqueada estática (parafusos proximal e distal).         */
/* -------------------------------------------------------------------------- */
export const StepBloqueio: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 260 320"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Passo 3 — haste bloqueada em modo estático (parafusos proximal e distal)"}</title>

    {/* tíbia */}
    <path {...boneStyle} d="M104 20 C 122 80, 128 170, 124 292 L 150 292 C 150 170, 148 80, 152 20 Z" />
    {/* haste no canal */}
    <path {...implant} strokeWidth="4" d="M130 32 C 128 120, 128 210, 130 286" />
    {/* traço consolidando */}
    <g className="fx-line">
      <line x1="110" y1="158" x2="146" y2="158" stroke="var(--cortical)" strokeWidth="1.6" strokeDasharray="3 3" />
    </g>

    {/* bloqueio proximal (2 parafusos) */}
    <line x1="96" y1="56" x2="162" y2="60" stroke="var(--teal)" strokeWidth="3" strokeLinecap="round" />
    <line x1="98" y1="78" x2="160" y2="80" stroke="var(--teal)" strokeWidth="3" strokeLinecap="round" />
    <circle cx="96" cy="56" r="3" fill="var(--teal)" />
    <circle cx="98" cy="78" r="3" fill="var(--teal)" />
    {/* bloqueio distal (2 parafusos) */}
    <line x1="96" y1="252" x2="160" y2="254" stroke="var(--teal)" strokeWidth="3" strokeLinecap="round" />
    <line x1="98" y1="274" x2="158" y2="276" stroke="var(--teal)" strokeWidth="3" strokeLinecap="round" />
    <circle cx="96" cy="252" r="3" fill="var(--teal)" />
    <circle cx="98" cy="274" r="3" fill="var(--teal)" />

    <text x="172" y="60" {...label} textAnchor="start" fill="var(--teal)">bloqueio proximal</text>
    <text x="172" y="262" {...label} textAnchor="start" fill="var(--teal)">bloqueio distal</text>
    <text x="172" y="160" {...mono} textAnchor="start" fill="var(--cortical)">foco de fratura</text>
    <text x="130" y="314" {...label} textAnchor="middle">estático em fraturas proximais/distais e instáveis</text>
  </svg>
);

/* -------------------------------------------------------------------------- */
/* Registro: id prefixado -> componente.                                      */
/* -------------------------------------------------------------------------- */
export const figures: Record<string, FC<FigureProps>> = {
  "fratura-diafise-tibial:anatomia": Anatomia,
  "fratura-diafise-tibial:gustilo": GustiloAnderson,
  "fratura-diafise-tibial:compartimentos": Compartimentos,
  "fratura-diafise-tibial:via-suprapatelar": ViaSuprapatelar,
  "fratura-diafise-tibial:via-infrapatelar": ViaInfrapatelar,
  "fratura-diafise-tibial:step-entrada": StepEntrada,
  "fratura-diafise-tibial:step-fresagem": StepFresagem,
  "fratura-diafise-tibial:step-bloqueio": StepBloqueio,
};
