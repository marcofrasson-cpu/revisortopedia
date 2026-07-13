import type { FC } from "react";
import type { FigureProps } from "../../../types/topic";

/* ============================================================================
   Fratura da diáfise femoral — figuras esquemáticas, line-art 2 tons.
   Ossos: stroke var(--ink-soft), fill var(--surface).
   Implante (haste/parafusos): stroke var(--teal).
   Traço de fratura: stroke var(--cortical) + className "fx-line".
   Medidas/ângulos: var(--amber). Rótulos: var(--muted).
   IDs prefixados por "fratura-diafise-femoral:" no registro FIGURES.
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
/* 1. Anatomia — fêmur, istmo/arco anterior e forças deformantes musculares.  */
/* -------------------------------------------------------------------------- */
export const Anatomia: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 300 340"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Anatomia da diáfise femoral e forças deformantes"}</title>

    {/* Fêmur — vista anterior, com leve arco anterior */}
    {/* extremidade proximal: cabeça, colo, trocânteres */}
    <path
      {...boneStyle}
      d="M118 30 C 104 24, 88 30, 84 46 C 80 60, 88 72, 102 74 L 118 74 Z"
    />
    <circle cx="100" cy="50" r="18" {...boneStyle} />
    {/* trocânter maior */}
    <path {...boneStyle} d="M118 40 C 140 34, 156 44, 156 62 C 156 76, 146 82, 132 80 L 120 74 Z" />
    {/* diáfise (leve convexidade anterior à direita) */}
    <path
      {...boneStyle}
      d="M126 78 C 150 130, 156 200, 150 262 L 132 264 C 132 200, 122 132, 108 84 Z"
    />
    {/* extremidade distal: côndilos */}
    <path
      {...boneStyle}
      fill="var(--surface-2, var(--surface))"
      d="M118 262 C 100 262, 88 272, 88 292 C 88 312, 104 320, 122 316 L 158 316 C 176 318, 190 308, 188 290 C 186 272, 172 262, 152 262 Z"
    />

    {/* istmo — ponto mais estreito do canal medular */}
    <line x1="120" y1="150" x2="150" y2="150" stroke="var(--amber)" strokeWidth="1" strokeDasharray="3 3" />
    <text x="196" y="152" {...mono} textAnchor="start" fill="var(--amber)">istmo (canal estreito)</text>

    {/* Forças deformantes */}
    <g stroke="var(--teal)" strokeWidth="1.8" fill="none" strokeLinecap="round">
      {/* fragmento proximal: flexão (iliopsoas), abdução (glúteos), rot. externa */}
      <path d="M60 44 C 44 40, 34 48, 34 62" />
      <path d="M34 62 l-2 -8 m2 8 l7 -3" />
      <path d="M150 60 C 168 54, 182 60, 186 74" />
      <path d="M186 74 l1 -8 m-1 8 l-8 -2" />
      {/* adução do fragmento distal (adutores) */}
      <path d="M210 288 C 226 288, 236 296, 236 310" />
      <path d="M236 310 l-2 -8 m2 8 l7 -3" />
    </g>
    <text x="30" y="36" {...label} textAnchor="start" fill="var(--teal)">iliopsoas → flexão</text>
    <text x="176" y="46" {...label} textAnchor="start" fill="var(--teal)">glúteos → abdução</text>
    <text x="200" y="320" {...mono} textAnchor="start" fill="var(--teal)">adutores → varo/encurt.</text>

    <text x="66" y="60" {...label} textAnchor="middle">Cabeça</text>
    <text x="152" y="26" {...label} textAnchor="middle">Tr. maior</text>
    <text x="150" y="336" {...label} textAnchor="middle">Côndilos femorais</text>
  </svg>
);

/* -------------------------------------------------------------------------- */
/* 2. Winquist–Hansen — cominuição (variants I | II | III | IV).              */
/* -------------------------------------------------------------------------- */
export const WinquistHansen: FC<FigureProps> = ({ className, title, variant = "I" }) => {
  const v = ["I", "II", "III", "IV"].includes(variant) ? variant : "I";
  const captions: Record<string, string> = {
    I: "Tipo I — cominuição mínima; > 75% de contato cortical",
    II: "Tipo II — fragmento em asa; ≥ 50% de contato cortical",
    III: "Tipo III — cominuição de 50–100% da circunferência",
    IV: "Tipo IV — segmentar; sem contato cortical (instável)",
  };
  return (
    <svg
      viewBox="0 0 260 300"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `Winquist–Hansen ${v} — ${captions[v]}`}</title>

      {/* cilindro diafisário */}
      <path {...boneStyle} d="M104 20 L 156 20 L 156 280 L 104 280 Z" />
      {/* corticais internas (canal) */}
      <line x1="116" y1="20" x2="116" y2="280" stroke="var(--ink-soft)" strokeWidth="0.8" opacity="0.5" />
      <line x1="144" y1="20" x2="144" y2="280" stroke="var(--ink-soft)" strokeWidth="0.8" opacity="0.5" />

      {/* traço/fragmentos por tipo */}
      <g className="fx-line" stroke="var(--cortical)" strokeWidth="2.4" fill="none" strokeLinecap="round">
        {v === "I" && <path d="M104 150 L 156 156" />}
        {v === "II" && (
          <>
            <path d="M104 140 L 156 150" />
            <path d="M120 140 L 138 176 L 156 168" />
          </>
        )}
        {v === "III" && (
          <>
            <path d="M104 128 L 156 134" />
            <path d="M104 176 L 156 170" />
            <path d="M118 132 L 130 170 M146 130 L 138 172" />
          </>
        )}
        {v === "IV" && (
          <>
            <path d="M104 120 L 156 126" />
            <path d="M104 196 L 156 190" />
            <path d="M120 126 L 132 188 M148 124 L 140 190 M126 150 L 150 156" />
          </>
        )}
      </g>

      {/* fragmento em asa (tipo II) sombreado */}
      {v === "II" && (
        <path d="M120 140 L 138 176 L 156 168 L 156 150 Z" fill="var(--cortical)" opacity="0.12" />
      )}
      {v === "IV" && (
        <rect x="104" y="126" width="52" height="64" fill="var(--cortical)" opacity="0.1" />
      )}

      <text x="130" y="16" {...mono} textAnchor="middle">Winquist–Hansen {v}</text>
      <text x="130" y="298" {...label} textAnchor="middle">{captions[v].split("—")[1]?.trim()}</text>
    </svg>
  );
};

/* -------------------------------------------------------------------------- */
/* 3. Via anterógrada — ponto de entrada trocantérico/piriforme.             */
/* -------------------------------------------------------------------------- */
export const ViaAnterograda: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 260 300"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Via anterógrada — entrada no ápice do trocânter maior / fossa piriforme"}</title>

    {/* fêmur proximal */}
    <circle cx="70" cy="96" r="20" {...boneStyle} />
    <path {...boneStyle} d="M86 82 C 108 78, 122 88, 126 106 L 118 118 C 108 108, 96 104, 84 106 Z" />
    {/* trocânter maior */}
    <path {...boneStyle} d="M118 70 C 146 64, 166 78, 166 100 C 166 118, 154 126, 138 122 L 122 108 Z" />
    {/* diáfise */}
    <path {...boneStyle} d="M126 108 C 148 160, 152 220, 148 274 L 128 274 C 128 220, 116 158, 108 112 Z" />

    {/* ponto de entrada + haste anterógrada */}
    <circle cx="146" cy="84" r="4" fill="var(--amber)" />
    <path {...implant} d="M146 84 C 142 150, 138 220, 138 270" />
    {/* seta de inserção */}
    <path d="M158 58 L 148 80" stroke="var(--teal)" strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M148 80 l1 -8 m-1 8 l-8 -3" stroke="var(--teal)" strokeWidth="2" fill="none" strokeLinecap="round" />

    <text x="176" y="52" {...label} textAnchor="start" fill="var(--teal)">inserção</text>
    <text x="176" y="90" {...mono} textAnchor="start" fill="var(--amber)">ápice trocânter /</text>
    <text x="176" y="104" {...mono} textAnchor="start" fill="var(--amber)">fossa piriforme</text>
    <text x="40" y="130" {...label} textAnchor="middle">Cabeça</text>
    <text x="140" y="292" {...label} textAnchor="middle">Haste anterógrada</text>
  </svg>
);

/* -------------------------------------------------------------------------- */
/* 4. Via retrógrada — entrada no sulco intercondilar (côndilos distais).     */
/* -------------------------------------------------------------------------- */
export const ViaRetrograda: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 260 300"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Via retrógrada — entrada no sulco intercondilar (blumensaat)"}</title>

    {/* diáfise distal */}
    <path {...boneStyle} d="M110 20 C 124 70, 132 140, 130 200 L 152 200 C 152 140, 148 70, 152 20 Z" />
    {/* côndilos */}
    <path
      {...boneStyle}
      fill="var(--surface-2, var(--surface))"
      d="M120 200 C 100 200, 86 212, 86 234 C 86 256, 104 266, 124 262 L 160 262 C 180 264, 196 252, 194 232 C 192 212, 176 200, 156 200 Z"
    />
    {/* sulco intercondilar (entalhe) */}
    <path d="M132 262 C 136 246, 144 246, 148 262" fill="var(--surface)" stroke="var(--ink-soft)" strokeWidth="1.2" />

    {/* ponto de entrada + haste retrógrada */}
    <circle cx="140" cy="252" r="4" fill="var(--amber)" />
    <path {...implant} d="M140 252 C 138 180, 136 100, 138 40" />
    {/* seta de inserção (de baixo para cima) */}
    <path d="M140 288 L 140 262" stroke="var(--teal)" strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M140 262 l-5 7 m5 -7 l5 7" stroke="var(--teal)" strokeWidth="2" fill="none" strokeLinecap="round" />

    <text x="170" y="256" {...mono} textAnchor="start" fill="var(--amber)">sulco intercondilar</text>
    <text x="160" y="120" {...label} textAnchor="start" fill="var(--teal)">Haste retrógrada</text>
    <text x="140" y="296" {...label} textAnchor="middle">entrada anterior ao PCL</text>
  </svg>
);

/* -------------------------------------------------------------------------- */
/* 5. Passo — redução em mesa de tração.                                      */
/* -------------------------------------------------------------------------- */
export const StepReducao: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 320 220"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Passo 1 — redução fechada com tração longitudinal (mesa de tração)"}</title>

    {/* mesa */}
    <rect x="16" y="120" width="150" height="12" rx="3" fill="var(--surface-2, var(--surface))" stroke="var(--line-strong)" strokeWidth="1.2" />
    {/* coxa / fragmentos */}
    <path {...boneStyle} d="M40 96 C 90 90, 130 92, 150 100 L 150 118 C 130 112, 90 110, 40 116 Z" />
    <path {...boneStyle} d="M154 100 C 210 100, 250 108, 278 118 L 274 136 C 246 126, 208 120, 154 120 Z" />
    {/* traço de fratura */}
    <g className="fx-line">
      <path d="M150 96 L 156 122" stroke="var(--cortical)" strokeWidth="2.6" strokeLinecap="round" />
    </g>
    {/* bota de tração + seta de tração */}
    <rect x="278" y="108" width="22" height="26" rx="4" fill="var(--surface)" stroke="var(--teal)" strokeWidth="1.6" />
    <path d="M256 150 L 296 150" stroke="var(--amber)" strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M296 150 l-8 -4 m8 4 l-8 4" stroke="var(--amber)" strokeWidth="2" fill="none" strokeLinecap="round" />
    <text x="284" y="168" {...mono} textAnchor="middle" fill="var(--amber)">tração</text>

    <text x="90" y="80" {...label} textAnchor="middle">Fragmento proximal</text>
    <text x="220" y="92" {...label} textAnchor="middle">Fragmento distal</text>
    <text x="160" y="200" {...label} textAnchor="middle">Restaurar comprimento, alinhamento e rotação sob fluoroscopia</text>
  </svg>
);

/* -------------------------------------------------------------------------- */
/* 6. Passo — ponto de entrada e fio-guia.                                    */
/* -------------------------------------------------------------------------- */
export const StepPontoEntrada: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 260 260"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Passo 2 — ponto de entrada correto e passagem do fio-guia com ponta em bola"}</title>

    {/* fêmur proximal */}
    <circle cx="66" cy="80" r="18" {...boneStyle} />
    <path {...boneStyle} d="M112 56 C 138 50, 158 64, 158 86 C 158 104, 146 112, 130 108 L 116 94 Z" />
    <path {...boneStyle} d="M118 92 C 140 150, 144 210, 140 250 L 120 250 C 120 210, 108 150, 100 96 Z" />

    {/* ponto de entrada correto */}
    <circle cx="138" cy="70" r="4" fill="var(--amber)" />
    {/* fio-guia com ponta em bola, centrado no canal */}
    <path d="M138 70 C 134 140, 132 200, 132 246" stroke="var(--teal)" strokeWidth="2" fill="none" strokeLinecap="round" />
    <circle cx="132" cy="246" r="3.4" fill="var(--teal)" />

    {/* alerta de ponto de entrada lateral (varo) */}
    <circle cx="158" cy="66" r="3" fill="none" stroke="var(--cortical)" strokeWidth="1.6" />
    <path d="M158 66 l6 -6" stroke="var(--cortical)" strokeWidth="1.4" />
    <text x="172" y="62" {...mono} textAnchor="start" fill="var(--cortical)">lateral → varo</text>

    <text x="172" y="90" {...label} textAnchor="start" fill="var(--amber)">ponto correto</text>
    <text x="172" y="200" {...label} textAnchor="start" fill="var(--teal)">fio-guia central</text>
    <text x="130" y="258" {...mono} textAnchor="middle">ponta em bola no canal</text>
  </svg>
);

/* -------------------------------------------------------------------------- */
/* 7. Passo — fresagem e passagem da haste.                                   */
/* -------------------------------------------------------------------------- */
export const StepFresagem: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 260 300"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Passo 3 — fresagem sequencial do canal e passagem da haste bloqueada"}</title>

    {/* fêmur com traço reduzido */}
    <path {...boneStyle} d="M108 20 C 128 74, 134 160, 130 250 L 150 250 C 150 160, 148 74, 152 20 Z" />
    <line x1="120" y1="20" x2="132" y2="250" stroke="var(--ink-soft)" strokeWidth="0.8" opacity="0.5" />
    <line x1="146" y1="20" x2="140" y2="250" stroke="var(--ink-soft)" strokeWidth="0.8" opacity="0.5" />
    <g className="fx-line">
      <line x1="112" y1="150" x2="150" y2="150" stroke="var(--cortical)" strokeWidth="1.4" strokeDasharray="3 3" />
    </g>

    {/* fresa flexível descendo (haste de fresagem + cabeça cortante) */}
    <path d="M136 6 L 134 132" stroke="var(--teal)" strokeWidth="2" fill="none" strokeLinecap="round" />
    <path
      d="M128 132 L 140 132 L 138 148 C 138 154, 130 154, 130 148 Z"
      fill="var(--teal-tint)"
      stroke="var(--teal)"
      strokeWidth="1.4"
    />
    {/* dentes da fresa */}
    <g stroke="var(--teal)" strokeWidth="1">
      <path d="M130 138 l-3 2 M140 138 l3 2 M130 144 l-3 2 M140 144 l3 2" />
    </g>

    <text x="168" y="90" {...label} textAnchor="start" fill="var(--teal)">fresagem</text>
    <text x="168" y="106" {...mono} textAnchor="start" fill="var(--teal)">0,5 mm/passo</text>
    <text x="168" y="150" {...mono} textAnchor="start" fill="var(--amber)">1,0–1,5 mm acima</text>
    <text x="168" y="164" {...mono} textAnchor="start" fill="var(--amber)">do diâmetro final</text>
    <text x="130" y="286" {...label} textAnchor="middle">Reduzido antes de fresar; irrigação para reduzir êmbolos</text>
  </svg>
);

/* -------------------------------------------------------------------------- */
/* 8. Passo — bloqueio proximal e distal.                                     */
/* -------------------------------------------------------------------------- */
export const StepBloqueio: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 260 320"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Passo 4 — haste bloqueada em modo estático (parafusos proximal e distal)"}</title>

    {/* fêmur */}
    <path {...boneStyle} d="M104 20 C 124 78, 130 170, 126 288 L 150 288 C 150 170, 148 78, 152 20 Z" />
    {/* haste dentro do canal */}
    <path {...implant} strokeWidth="4" d="M132 34 C 130 120, 129 210, 130 280" />

    {/* traço de fratura consolidando */}
    <g className="fx-line">
      <line x1="110" y1="158" x2="148" y2="158" stroke="var(--cortical)" strokeWidth="1.6" strokeDasharray="3 3" />
    </g>

    {/* parafuso de bloqueio proximal */}
    <line x1="96" y1="60" x2="164" y2="66" stroke="var(--teal)" strokeWidth="3" strokeLinecap="round" />
    <circle cx="96" cy="60" r="3" fill="var(--teal)" />
    {/* parafuso de bloqueio distal (2) */}
    <line x1="96" y1="250" x2="162" y2="252" stroke="var(--teal)" strokeWidth="3" strokeLinecap="round" />
    <line x1="98" y1="272" x2="160" y2="274" stroke="var(--teal)" strokeWidth="3" strokeLinecap="round" />
    <circle cx="96" cy="250" r="3" fill="var(--teal)" />
    <circle cx="98" cy="272" r="3" fill="var(--teal)" />

    <text x="176" y="64" {...label} textAnchor="start" fill="var(--teal)">bloqueio proximal</text>
    <text x="176" y="262" {...label} textAnchor="start" fill="var(--teal)">bloqueio distal</text>
    <text x="176" y="160" {...mono} textAnchor="start" fill="var(--cortical)">foco de fratura</text>
    <text x="130" y="312" {...label} textAnchor="middle">Bloqueio estático controla comprimento e rotação</text>
  </svg>
);

/* -------------------------------------------------------------------------- */
/* Registro: id prefixado -> componente.                                      */
/* -------------------------------------------------------------------------- */
export const figures: Record<string, FC<FigureProps>> = {
  "fratura-diafise-femoral:anatomia": Anatomia,
  "fratura-diafise-femoral:winquist": WinquistHansen,
  "fratura-diafise-femoral:via-anterograda": ViaAnterograda,
  "fratura-diafise-femoral:via-retrograda": ViaRetrograda,
  "fratura-diafise-femoral:step-reducao": StepReducao,
  "fratura-diafise-femoral:step-ponto-entrada": StepPontoEntrada,
  "fratura-diafise-femoral:step-fresagem": StepFresagem,
  "fratura-diafise-femoral:step-bloqueio": StepBloqueio,
};
