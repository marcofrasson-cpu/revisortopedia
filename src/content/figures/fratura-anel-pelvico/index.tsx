import type { FC } from "react";
import type { FigureProps } from "../../../types/topic";

/* ============================================================================
   Figuras — Fratura do anel pélvico (line-art esquemático, 2 tons, sem
   copyright). Ossos: stroke var(--ink-soft), fill var(--surface). Partes
   moles / implante / ligamento: var(--teal). Traço de fratura: var(--cortical)
   + className "fx-line". Medidas / setas de força: var(--amber). Rótulos em
   var(--muted). Todos os ids são prefixados por "fratura-anel-pelvico:".
   ========================================================================== */

const boneStyle = {
  fill: "var(--surface)",
  stroke: "var(--ink-soft)",
  strokeWidth: 1.6,
  strokeLinejoin: "round" as const,
};

const bone2 = {
  fill: "var(--surface-2, var(--surface))",
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
  fontSize: 12,
  fill: "var(--ink)",
  fontFamily: "var(--font-mono, monospace)",
  letterSpacing: 0.5,
};

/* ---- Geometria compartilhada do anel pélvico (visão AP) ------------------ */

const LEFT_INNOMINATE =
  "M150 64 C 118 44, 76 48, 58 80 C 50 100, 56 124, 78 140 C 96 154, 116 158, 130 170 C 142 180, 150 198, 150 218 C 150 230, 158 240, 172 244 L 176 218 C 174 204, 164 192, 152 184 C 138 172, 128 150, 130 122 C 131 100, 144 82, 150 64 Z";

const SACRUM = "M156 58 L204 58 L196 108 L180 152 L164 108 Z";

/** Base do anel pélvico em visão AP; parâmetros deformam o anel por mecanismo. */
const PelvisAP: FC<{
  gap?: number; // diástase da sínfise (px)
  vShift?: number; // deslocamento cranial do hemipelve direito (shear)
  rotate?: number; // rotação interna do hemipelve direito (compressão lateral)
  anteriorFx?: boolean;
  posteriorFx?: boolean;
  showAcetabula?: boolean;
}> = ({
  gap = 4,
  vShift = 0,
  rotate = 0,
  anteriorFx = false,
  posteriorFx = false,
  showAcetabula = true,
}) => (
  <g>
    {/* Sacro */}
    <path {...bone2} d={SACRUM} />
    {[80, 100, 120].map((y) => (
      <g key={y}>
        <circle cx="170" cy={y} r="2.4" fill="var(--muted)" opacity="0.5" />
        <circle cx="190" cy={y} r="2.4" fill="var(--muted)" opacity="0.5" />
      </g>
    ))}

    {/* Hemipelve esquerdo (viewer) */}
    <path {...boneStyle} d={LEFT_INNOMINATE} />
    {showAcetabula && <circle cx="96" cy="182" r="15" {...bone2} />}

    {/* Hemipelve direito (espelhado; recebe deslocamento/rotação por mecanismo) */}
    <g
      transform={`translate(${gap}, ${-vShift}) rotate(${rotate} 264 150)`}
    >
      <g transform="translate(360,0) scale(-1,1)">
        <path {...boneStyle} d={LEFT_INNOMINATE} />
        {showAcetabula && <circle cx="96" cy="182" r="15" {...bone2} />}
      </g>
    </g>

    {/* Articulações sacroilíacas (posteriores) */}
    <g
      stroke={posteriorFx ? "var(--cortical)" : "var(--teal)"}
      strokeWidth={posteriorFx ? 2.6 : 2}
      className={posteriorFx ? "fx-line" : undefined}
      fill="none"
      strokeLinecap="round"
      strokeDasharray={posteriorFx ? "4 4" : undefined}
    >
      <line x1="152" y1="72" x2="150" y2="118" />
      <line x1={208 + gap} y1={72 - vShift} x2={210 + gap} y2={118 - vShift} />
    </g>

    {/* Sínfise púbica (anterior) */}
    <g>
      <line
        x1="176"
        y1="222"
        x2="176"
        y2="246"
        stroke="var(--ink-soft)"
        strokeWidth="1.4"
      />
      <line
        x1={184 + gap}
        y1={222 - vShift}
        x2={184 + gap}
        y2={246 - vShift}
        stroke="var(--ink-soft)"
        strokeWidth="1.4"
      />
      {anteriorFx && (
        <g className="fx-line">
          <path
            d={`M176 234 L ${184 + gap} ${234 - vShift}`}
            stroke="var(--cortical)"
            strokeWidth="2.6"
            strokeDasharray="4 4"
            strokeLinecap="round"
          />
        </g>
      )}
    </g>
  </g>
);

/* ============================================================================
   1. Anatomia — anel pélvico AP com o conceito de "ponte suspensa" posterior.
   ========================================================================== */

export const Anatomia: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 360 300"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Anatomia do anel pélvico — visão AP"}</title>
    <PelvisAP />

    {/* Rótulos */}
    <text x="180" y="50" {...label} textAnchor="middle">
      Sacro
    </text>
    <text x="34" y="78" {...label}>
      Asa ilíaca
    </text>
    <text x="180" y="272" {...label} textAnchor="middle">
      Sínfise púbica
    </text>
    <text x="250" y="150" {...label} fill="var(--teal)">
      art. SI
    </text>
    <line x1="228" y1="146" x2="212" y2="100" stroke="var(--line-strong)" strokeWidth="0.8" />
    <text x="70" y="205" {...label} textAnchor="middle">
      acetábulo
    </text>

    <text x="180" y="292" {...mono} textAnchor="middle">
      anel osteoligamentar
    </text>
  </svg>
);

/* ============================================================================
   2. Ligamentos posteriores — complexo SI posterior, sacroespinhoso e
   sacrotuberoso (visão posterior/axial esquemática). Estabilidade do anel.
   ========================================================================== */

export const LigamentosPosteriores: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 340 300"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Complexo ligamentar posterior do anel pélvico"}</title>

    {/* Sacro central */}
    <path {...bone2} d="M150 40 L190 40 L184 120 L170 168 L156 120 Z" />
    {/* Ílios (posterior) */}
    <path {...boneStyle} d="M148 46 C 108 40, 66 54, 52 92 C 46 112, 56 136, 84 146 C 112 154, 138 140, 146 120 Z" />
    <path {...boneStyle} d="M192 46 C 232 40, 274 54, 288 92 C 294 112, 284 136, 256 146 C 228 154, 202 140, 194 120 Z" />
    {/* Ísquios (espinha e tuberosidade) */}
    <path {...bone2} d="M96 176 C 92 200, 100 224, 116 236 L 128 224 C 118 212, 114 196, 116 180 Z" />
    <path {...bone2} d="M244 176 C 248 200, 240 224, 224 236 L 212 224 C 222 212, 226 196, 224 180 Z" />

    {/* Ligamentos SI posteriores (os mais fortes do corpo) */}
    <g stroke="var(--teal)" strokeWidth="2.4" fill="none" strokeLinecap="round">
      <line x1="150" y1="60" x2="120" y2="70" />
      <line x1="152" y1="82" x2="118" y2="94" />
      <line x1="154" y1="104" x2="122" y2="116" />
      <line x1="190" y1="60" x2="220" y2="70" />
      <line x1="188" y1="82" x2="222" y2="94" />
      <line x1="186" y1="104" x2="218" y2="116" />
    </g>
    {/* Ligamento sacroespinhoso (sacro -> espinha isquiática) */}
    <path d="M166 150 C 140 168, 118 176, 108 186" fill="none" stroke="var(--teal)" strokeWidth="2.6" strokeLinecap="round" />
    <path d="M174 150 C 200 168, 222 176, 232 186" fill="none" stroke="var(--teal)" strokeWidth="2.6" strokeLinecap="round" />
    {/* Ligamento sacrotuberoso (sacro -> tuberosidade isquiática) */}
    <path d="M168 164 C 150 200, 130 222, 116 234" fill="none" stroke="var(--teal)" strokeWidth="2.6" strokeDasharray="6 4" strokeLinecap="round" />
    <path d="M172 164 C 190 200, 210 222, 224 234" fill="none" stroke="var(--teal)" strokeWidth="2.6" strokeDasharray="6 4" strokeLinecap="round" />

    <text x="170" y="30" {...label} textAnchor="middle">
      Sacro (posterior)
    </text>
    <text x="110" y="66" {...label} textAnchor="end" fill="var(--teal)">
      lig. SI post.
    </text>
    <text x="100" y="196" {...label} textAnchor="end" fill="var(--teal)">
      sacroespinhoso
    </text>
    <text x="118" y="252" {...label} textAnchor="middle" fill="var(--teal)">
      sacrotuberoso
    </text>
    <text x="170" y="288" {...mono} textAnchor="middle">
      "ponte suspensa" posterior
    </text>
  </svg>
);

/* ============================================================================
   3. Young-Burgess — mecanismo (APC / LC / VS / CMI). Setas de força em amber;
      deformação do anel conforme o vetor. Variants clicáveis.
   ========================================================================== */

export const YoungBurgess: FC<FigureProps> = ({ className, title, variant }) => {
  const v = (variant ?? "APC").toUpperCase();
  const cfg =
    v === "LC"
      ? { gap: -6, vShift: 0, rotate: 6, ant: true, post: true, legend: "Compressão lateral — rotação interna" }
      : v === "VS"
        ? { gap: 6, vShift: 22, rotate: 0, ant: true, post: true, legend: "Cisalhamento vertical — instável" }
        : v === "CMI"
          ? { gap: 14, vShift: 12, rotate: 4, ant: true, post: true, legend: "Mecanismo combinado" }
          : { gap: 22, vShift: 0, rotate: 0, ant: true, post: false, legend: "Compressão AP — livro aberto" };

  return (
    <svg
      viewBox="0 0 360 320"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `Young-Burgess — ${v}`}</title>
      <defs>
        <marker id={`yb-arrow-${v}`} markerWidth="9" markerHeight="9" refX="4" refY="4" orient="auto">
          <path d="M0 0 L8 4 L0 8 Z" fill="var(--amber)" />
        </marker>
      </defs>

      <PelvisAP
        gap={cfg.gap}
        vShift={cfg.vShift}
        rotate={cfg.rotate}
        anteriorFx={cfg.ant}
        posteriorFx={cfg.post}
      />

      {/* Setas de força específicas do mecanismo (amber) */}
      <g stroke="var(--amber)" strokeWidth="2.6" fill="none" strokeLinecap="round">
        {v === "APC" && (
          <>
            <path d="M120 260 q -30 -6 -44 -22" markerEnd={`url(#yb-arrow-${v})`} />
            <path d="M240 260 q 30 -6 44 -22" markerEnd={`url(#yb-arrow-${v})`} />
          </>
        )}
        {v === "LC" && (
          <>
            <path d="M20 150 h 40" markerEnd={`url(#yb-arrow-${v})`} />
            <path d="M340 150 h -40" markerEnd={`url(#yb-arrow-${v})`} />
          </>
        )}
        {v === "VS" && (
          <path d="M290 250 v -60" markerEnd={`url(#yb-arrow-${v})`} />
        )}
        {v === "CMI" && (
          <>
            <path d="M20 150 h 36" markerEnd={`url(#yb-arrow-${v})`} />
            <path d="M300 250 v -50" markerEnd={`url(#yb-arrow-${v})`} />
          </>
        )}
      </g>

      <text x="180" y="308" {...mono} textAnchor="middle">
        {v}
      </text>
      <text x="180" y="292" {...label} textAnchor="middle">
        {cfg.legend}
      </text>
    </svg>
  );
};

/* ============================================================================
   4. Tile — estabilidade (A estável / B rotacional / C rotacional+vertical).
      Variants clicáveis.
   ========================================================================== */

export const Tile: FC<FigureProps> = ({ className, title, variant }) => {
  const v = (variant ?? "A").toUpperCase();
  const cfg =
    v === "C"
      ? { gap: 16, vShift: 20, ant: true, post: true, legend: "Instável rotacional + vertical" }
      : v === "B"
        ? { gap: 18, vShift: 0, ant: true, post: false, legend: "Instável rotacional (posterior íntegro)" }
        : { gap: 4, vShift: 0, ant: false, post: false, legend: "Estável (anel íntegro)" };

  return (
    <svg
      viewBox="0 0 360 320"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `Classificação de Tile — tipo ${v}`}</title>

      <PelvisAP gap={cfg.gap} vShift={cfg.vShift} anteriorFx={cfg.ant} posteriorFx={cfg.post} />

      {/* Indicadores de estabilidade */}
      <g>
        {v === "A" && (
          <text x="180" y="180" {...label} textAnchor="middle" fill="var(--teal)">
            anel estável
          </text>
        )}
        {v === "B" && (
          <path d="M150 234 h 60" stroke="var(--amber)" strokeWidth="1.4" strokeDasharray="3 3" />
        )}
      </g>

      <text x="180" y="308" {...mono} textAnchor="middle">
        Tile {v}
      </text>
      <text x="180" y="292" {...label} textAnchor="middle">
        {cfg.legend}
      </text>
    </svg>
  );
};

/* ============================================================================
   5. Controle mecânico — binder pélvico vs fixador externo anterior.
      Variants: "binder" | "fixador".
   ========================================================================== */

export const ControleMecanico: FC<FigureProps> = ({ className, title, variant }) => {
  const v = variant ?? "binder";

  return (
    <svg
      viewBox="0 0 360 300"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? (v === "fixador" ? "Fixador externo anterior" : "Binder pélvico — nível dos trocânteres")}</title>
      <defs>
        <marker id={`cm-arrow-${v}`} markerWidth="9" markerHeight="9" refX="4" refY="4" orient="auto">
          <path d="M0 0 L8 4 L0 8 Z" fill="var(--amber)" />
        </marker>
      </defs>

      <PelvisAP gap={v === "binder" ? 6 : 5} anteriorFx posteriorFx={false} />

      {v === "binder" && (
        <>
          {/* Faixa circunferencial no nível dos grandes trocânteres */}
          <rect
            x="30"
            y="172"
            width="300"
            height="26"
            rx="8"
            fill="none"
            stroke="var(--teal)"
            strokeWidth="3"
          />
          <line x1="30" y1="185" x2="330" y2="185" stroke="var(--teal)" strokeWidth="1.2" strokeDasharray="4 4" />
          {/* Setas de compressão */}
          <g stroke="var(--amber)" strokeWidth="2.6" fill="none" strokeLinecap="round">
            <path d="M16 185 h 22" markerEnd={`url(#cm-arrow-${v})`} />
            <path d="M344 185 h -22" markerEnd={`url(#cm-arrow-${v})`} />
          </g>
          <text x="180" y="216" {...label} textAnchor="middle" fill="var(--teal)">
            faixa no nível dos trocânteres
          </text>
          <text x="180" y="288" {...mono} textAnchor="middle">
            binder pélvico
          </text>
        </>
      )}

      {v === "fixador" && (
        <>
          {/* Pinos supra-acetabulares + barra anterior */}
          <g stroke="var(--teal)" strokeWidth="3" strokeLinecap="round">
            <line x1="96" y1="182" x2="60" y2="120" />
            <line x1="264" y1="182" x2="300" y2="120" />
            {/* barra transversal */}
            <line x1="60" y1="120" x2="300" y2="120" strokeWidth="4" />
          </g>
          <g fill="var(--teal)">
            <circle cx="60" cy="120" r="4" />
            <circle cx="300" cy="120" r="4" />
          </g>
          <text x="180" y="108" {...label} textAnchor="middle" fill="var(--teal)">
            barra anterior
          </text>
          <text x="46" y="150" {...label} textAnchor="middle" fill="var(--teal)">
            pinos supra-
          </text>
          <text x="46" y="164" {...label} textAnchor="middle" fill="var(--teal)">
            acetabulares
          </text>
          <text x="180" y="288" {...mono} textAnchor="middle">
            fixador externo anterior
          </text>
        </>
      )}
    </svg>
  );
};

/* ============================================================================
   6. Controle da hemorragia — packing pré-peritoneal vs angioembolização.
      Variants: "packing" | "angio".
   ========================================================================== */

export const ControleHemorragia: FC<FigureProps> = ({ className, title, variant }) => {
  const v = variant ?? "packing";

  return (
    <svg
      viewBox="0 0 340 280"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? (v === "angio" ? "Angioembolização pélvica" : "Packing pré-peritoneal")}</title>

      {/* Anel ósseo esquemático (corte axial da pelve) */}
      <path
        {...boneStyle}
        d="M60 120 C 44 150, 46 190, 70 210 C 110 236, 230 236, 270 210 C 294 190, 296 150, 280 120 C 262 96, 200 92, 170 92 C 140 92, 78 96, 60 120 Z"
      />
      {/* Bexiga central */}
      <ellipse cx="170" cy="176" rx="30" ry="24" {...bone2} />
      <text x="170" y="180" {...label} textAnchor="middle">
        bexiga
      </text>

      {v === "packing" && (
        <>
          {/* Três compressas no espaço pré-peritoneal (retropúbico / paravesical) */}
          <g stroke="var(--teal)" strokeWidth="2" fill="var(--surface-2, var(--surface))">
            <rect x="96" y="150" width="26" height="40" rx="6" />
            <rect x="130" y="132" width="26" height="40" rx="6" />
            <rect x="218" y="150" width="26" height="40" rx="6" />
            <rect x="184" y="132" width="26" height="40" rx="6" />
          </g>
          {/* Blush venoso (amber) atrás das compressas */}
          <path d="M92 200 q 40 18 156 0" fill="none" stroke="var(--amber)" strokeWidth="2" strokeDasharray="3 3" />
          <text x="120" y="126" {...label} textAnchor="middle" fill="var(--teal)">
            compressas pré-peritoneais
          </text>
          <text x="170" y="262" {...mono} textAnchor="middle">
            packing pré-peritoneal (venoso)
          </text>
        </>
      )}

      {v === "angio" && (
        <>
          {/* Vasos ilíacos internos + cateter */}
          <g stroke="var(--teal)" strokeWidth="2.4" fill="none" strokeLinecap="round">
            <path d="M170 92 C 150 120, 130 140, 108 156" />
            <path d="M170 92 C 190 120, 210 140, 232 156" />
          </g>
          {/* Cateter (femoral -> ilíaca interna) */}
          <path d="M232 258 C 220 220, 208 190, 200 150" fill="none" stroke="var(--teal)" strokeWidth="2.8" strokeLinecap="round" />
          {/* Coils / embolização no ramo sangrante (amber) */}
          <g fill="var(--amber)">
            <circle cx="120" cy="150" r="3.4" />
            <circle cx="128" cy="156" r="3.4" />
            <circle cx="114" cy="158" r="3.4" />
          </g>
          {/* Blush arterial (amber) */}
          <path d="M104 150 q -10 14 -4 30" fill="none" stroke="var(--amber)" strokeWidth="2" strokeDasharray="2 3" />
          <text x="92" y="140" {...label} textAnchor="middle" fill="var(--amber)">
            ramo sangrante
          </text>
          <text x="250" y="238" {...label} textAnchor="middle" fill="var(--teal)">
            cateter
          </text>
          <text x="170" y="262" {...mono} textAnchor="middle">
            angioembolização (arterial)
          </text>
        </>
      )}
    </svg>
  );
};

/* ============================================================================
   7. Passo — fixação posterior: parafuso iliossacral percutâneo (S1).
   ========================================================================== */

export const StepSiScrew: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 340 300"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Parafuso iliossacral percutâneo (fixação posterior)"}</title>

    {/* Sacro (visão AP/outlet) com corpo de S1 */}
    <path {...bone2} d="M140 40 L200 40 L192 130 L170 180 L148 130 Z" />
    {/* Ílios */}
    <path {...boneStyle} d="M138 48 C 96 44, 56 62, 46 100 C 42 122, 56 144, 88 150 C 116 156, 136 140, 142 118 Z" />
    <path {...boneStyle} d="M202 48 C 244 44, 284 62, 294 100 C 298 122, 284 144, 252 150 C 224 156, 204 140, 198 118 Z" />

    {/* Corredor ósseo seguro de S1 (teal tracejado) */}
    <path d="M92 96 h 156" fill="none" stroke="var(--teal)" strokeWidth="1.4" strokeDasharray="4 4" opacity="0.7" />

    {/* Parafuso iliossacral cruzando a art. SI até o corpo de S1 */}
    <g stroke="var(--teal)" strokeWidth="3.4" strokeLinecap="round">
      <line x1="278" y1="98" x2="176" y2="96" />
    </g>
    {/* roscas */}
    <g stroke="var(--teal)" strokeWidth="1.4">
      <line x1="196" y1="90" x2="196" y2="102" />
      <line x1="186" y1="90" x2="186" y2="102" />
      <line x1="206" y1="90" x2="206" y2="102" />
    </g>
    {/* cabeça / arruela */}
    <circle cx="280" cy="98" r="5" fill="var(--teal)" stroke="none" />

    {/* Art. SI */}
    <line x1="196" y1="60" x2="198" y2="120" stroke="var(--ink-soft)" strokeWidth="1.4" />

    <text x="170" y="30" {...label} textAnchor="middle">
      Sacro (S1)
    </text>
    <text x="170" y="82" {...label} textAnchor="middle" fill="var(--teal)">
      corredor seguro S1
    </text>
    <text x="300" y="118" {...label} textAnchor="end" fill="var(--teal)">
      parafuso IS
    </text>
    <text x="170" y="286" {...mono} textAnchor="middle">
      fixação posterior percutânea
    </text>
  </svg>
);

/* ============================================================================
   8. Passo — fixação anterior: placa da sínfise púbica (via Pfannenstiel/Stoppa).
   ========================================================================== */

export const StepAnterior: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 340 260"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Placa da sínfise púbica (fixação anterior)"}</title>

    {/* Corpos púbicos (esquerdo e direito) e ramos */}
    <path {...boneStyle} d="M40 96 C 70 84, 120 84, 150 100 C 158 104, 160 116, 152 122 C 120 132, 74 132, 46 122 C 34 118, 30 102, 40 96 Z" />
    <path {...boneStyle} d="M300 96 C 270 84, 220 84, 190 100 C 182 104, 180 116, 188 122 C 220 132, 266 132, 294 122 C 306 118, 310 102, 300 96 Z" />
    {/* ramos inferiores */}
    <path {...bone2} d="M150 120 C 156 150, 158 186, 150 214 L 138 210 C 142 182, 140 148, 138 124 Z" />
    <path {...bone2} d="M190 120 C 184 150, 182 186, 190 214 L 202 210 C 198 182, 200 148, 202 124 Z" />

    {/* Sínfise (linha média) */}
    <line x1="170" y1="88" x2="170" y2="128" stroke="var(--ink-soft)" strokeWidth="1.4" />

    {/* Placa de 4-6 furos sobre a sínfise (teal) */}
    <rect x="112" y="88" width="116" height="18" rx="5" fill="none" stroke="var(--teal)" strokeWidth="3" />
    {/* parafusos */}
    <g fill="var(--teal)">
      {[126, 150, 190, 214].map((x) => (
        <circle key={x} cx={x} cy="97" r="3.6" />
      ))}
    </g>

    <text x="90" y="70" {...label} textAnchor="middle">
      corpo púbico E
    </text>
    <text x="250" y="70" {...label} textAnchor="middle">
      corpo púbico D
    </text>
    <text x="170" y="126" {...label} textAnchor="middle" fill="var(--teal)">
      placa da sínfise
    </text>
    <text x="170" y="248" {...mono} textAnchor="middle">
      fixação anterior (Pfannenstiel/Stoppa)
    </text>
  </svg>
);

/* ---- Registro exportado --------------------------------------------------- */

export const figures: Record<string, FC<FigureProps>> = {
  "fratura-anel-pelvico:anatomia": Anatomia,
  "fratura-anel-pelvico:ligamentos-posteriores": LigamentosPosteriores,
  "fratura-anel-pelvico:young-burgess": YoungBurgess,
  "fratura-anel-pelvico:tile": Tile,
  "fratura-anel-pelvico:controle-mecanico": ControleMecanico,
  "fratura-anel-pelvico:controle-hemorragia": ControleHemorragia,
  "fratura-anel-pelvico:step-si-screw": StepSiScrew,
  "fratura-anel-pelvico:step-anterior": StepAnterior,
};
