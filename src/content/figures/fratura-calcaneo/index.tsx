import type { FC } from "react";
import type { FigureProps } from "../../../types/topic";

/* ============================================================================
   Fratura do calcâneo — figuras esquemáticas, line-art 2 tons, SEM copyright.
   Ossos: stroke var(--ink-soft), fill var(--surface). Partes moles / tendão /
   implante: var(--teal). Traço de fratura: var(--cortical) + className "fx-line".
   Medidas / ângulos / vetores: var(--amber). Rótulos: var(--muted).
   Todos os ids são prefixados por "fratura-calcaneo:".
   ========================================================================== */

const boneStyle = {
  fill: "var(--surface)",
  stroke: "var(--ink-soft)",
  strokeWidth: 1.6,
  strokeLinejoin: "round" as const,
};

const bonePosterior = {
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
  fill: "var(--teal-tint, var(--surface-2, var(--surface)))",
  stroke: "var(--teal)",
  strokeWidth: 1.8,
  strokeLinejoin: "round" as const,
};

/* ---------------------------------------------------------------------------
   1. Anatomia — calcâneo em perfil lateral: faceta posterior (subtalar),
      sustentáculo do tálus, processo anterior, tuberosidade e inserção do
      tendão de Aquiles. Ângulo crucial de Gissane sinalizado.
   -------------------------------------------------------------------------- */
export const Anatomia: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 340 240"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Anatomia do calcâneo (perfil lateral): faceta posterior, sustentáculo, processo anterior e ângulo de Gissane"}</title>

    {/* Tálus apoiado na faceta posterior (2º plano) */}
    <path
      {...bonePosterior}
      d="M150 44 C 176 34, 214 36, 226 58 C 232 70, 226 82, 210 88 C 188 96, 158 96, 142 86 C 130 78, 130 54, 150 44 Z"
    />
    <text x="188" y="60" {...label} textAnchor="middle">tálus</text>

    {/* Calcâneo (perfil lateral) */}
    <path
      {...boneStyle}
      d="M44 176 C 40 150, 42 110, 52 92 C 60 80, 78 78, 108 80 C 132 82, 150 78, 168 84
         C 182 90, 196 96, 206 106
         C 214 100, 232 92, 256 96 C 276 100, 286 112, 286 132
         C 286 152, 272 166, 250 172 C 200 184, 96 190, 44 176 Z"
    />

    {/* Faceta posterior (subtalar) — superfície articular */}
    <path
      d="M150 86 C 168 84, 186 92, 200 104"
      fill="none"
      stroke="var(--teal)"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <text x="150" y="74" {...label} textAnchor="middle" fill="var(--teal)">faceta posterior</text>

    {/* Ângulo crucial de Gissane no vértice */}
    <g stroke="var(--amber)" strokeWidth="1.4" fill="none">
      <path d="M200 104 L 152 88" />
      <path d="M200 104 L 244 96" />
      <path d="M182 96 A 24 24 0 0 0 220 100" strokeWidth="1.2" />
    </g>
    <text x="204" y="122" {...label} textAnchor="middle" fill="var(--amber)" fontFamily="var(--font-mono, monospace)">
      Gissane
    </text>

    {/* Sustentáculo do tálus (medial, projetado — fragmento constante) */}
    <path
      d="M150 108 C 138 108, 130 116, 132 128 C 134 138, 148 140, 158 134"
      fill="var(--surface-2, var(--surface))"
      stroke="var(--ink-soft)"
      strokeWidth="1.2"
      strokeDasharray="3 2"
    />
    <text x="118" y="150" {...label} textAnchor="middle">sustentáculo</text>
    <text x="118" y="163" {...label} textAnchor="middle">do tálus</text>

    {/* Tendão de Aquiles inserido na tuberosidade posterior */}
    <path {...soft} d="M40 40 C 48 60, 52 78, 52 92 L 70 92 C 68 76, 66 58, 64 40 Z" />
    <text x="30" y="36" {...label} textAnchor="start" fill="var(--teal)">Aquiles</text>

    {/* Tuberosidade e processo anterior rotulados */}
    <text x="70" y="196" {...label} textAnchor="middle">tuberosidade</text>
    <text x="264" y="150" {...label} textAnchor="middle">processo</text>
    <text x="264" y="163" {...label} textAnchor="middle">anterior</text>
    <text x="170" y="222" {...label} textAnchor="middle" {...mono}>Calcâneo — perfil lateral</text>
  </svg>
);

/* ---------------------------------------------------------------------------
   2. Ângulos de Böhler e Gissane — variant "normal" | "colapso".
      Böhler: ângulo entre a linha tuberosidade→faceta posterior e faceta→
      processo anterior (normal 20–40°). Colapso deprime a faceta e o reduz.
   -------------------------------------------------------------------------- */
export const Angulos: FC<FigureProps> = ({ className, title, variant = "normal" }) => {
  const collapse = variant === "colapso";
  // Vértice da faceta posterior (P2) desce no colapso → Böhler diminui/negativa.
  const P1 = { x: 78, y: 84 }; // ápice da tuberosidade posterior
  const P2 = collapse ? { x: 176, y: 118 } : { x: 176, y: 78 }; // topo da faceta posterior
  const P3 = { x: 282, y: 104 }; // processo anterior superior
  const bohler = collapse ? "≈ 0–10° (deprimido)" : "≈ 20–40° (normal)";

  return (
    <svg
      viewBox="0 0 340 240"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>
        {title ??
          (collapse
            ? "Ângulo de Böhler diminuído/negativo por depressão da faceta posterior"
            : "Ângulos de Böhler (20–40°) e crucial de Gissane normais")}
      </title>

      {/* Contorno esquemático do calcâneo lateral */}
      <path
        {...boneStyle}
        d="M48 176 C 44 150, 46 112, 56 96 C 66 84, 92 84, 120 88
           C 146 92, 162 86, 176 92 C 188 96, 198 102, 206 110
           C 216 102, 236 96, 258 100 C 278 104, 288 116, 288 134
           C 288 154, 272 166, 250 172 C 200 184, 100 190, 48 176 Z"
      />
      {/* Faceta posterior deprimida quando colapso (fragmento afundado) */}
      {collapse && (
        <path
          className="fx-line"
          d="M150 96 C 164 108, 180 118, 200 112"
          fill="none"
          stroke="var(--cortical)"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      )}

      {/* Linhas de Böhler */}
      <g stroke="var(--amber)" strokeWidth="1.8" fill="none" strokeLinecap="round">
        <line x1={P1.x} y1={P1.y} x2={P2.x} y2={P2.y} />
        <line x1={P2.x} y1={P2.y} x2={P3.x} y2={P3.y} />
      </g>
      {/* pontos de referência */}
      <g fill="var(--amber)">
        <circle cx={P1.x} cy={P1.y} r="3" />
        <circle cx={P2.x} cy={P2.y} r="3" />
        <circle cx={P3.x} cy={P3.y} r="3" />
      </g>
      {/* arco do ângulo no vértice P2 */}
      <path
        d={collapse ? "M150 112 A 32 32 0 0 1 208 116" : "M146 82 A 34 34 0 0 1 208 92"}
        fill="none"
        stroke="var(--amber)"
        strokeWidth="1.3"
      />
      <text x={P2.x} y={collapse ? 150 : 60} {...label} textAnchor="middle" fill="var(--amber)" fontFamily="var(--font-mono, monospace)">
        Böhler
      </text>

      <text x="170" y="214" textAnchor="middle" {...mono}>{bohler}</text>
      <text x="170" y="230" textAnchor="middle" {...label}>
        {collapse ? "Perda de altura → subtalar incongruente" : "Tuberosidade → faceta → processo anterior"}
      </text>
    </svg>
  );
};

/* ---------------------------------------------------------------------------
   3. Sanders — corte coronal da faceta posterior por TC. Número de fragmentos
      cresce de I a IV. variant "I" | "II" | "III" | "IV".
   -------------------------------------------------------------------------- */
export const Sanders: FC<FigureProps> = ({ className, title, variant = "II" }) => {
  const v = (variant ?? "II").toUpperCase();
  const cfg: Record<string, { code: string; note: string; lines: number[] }> = {
    I: { code: "Sanders I", note: "Sem desvio (< 2 mm) — qualquer nº de traços", lines: [] },
    II: { code: "Sanders II", note: "1 traço → 2 fragmentos (A/B/C conforme o traço)", lines: [150] },
    III: { code: "Sanders III", note: "2 traços → 3 fragmentos, com afundamento central", lines: [126, 168] },
    IV: { code: "Sanders IV", note: "3 traços → ≥ 4 fragmentos — cominutiva", lines: [112, 146, 180] },
  };
  const c = cfg[v] ?? cfg.II;

  return (
    <svg
      viewBox="0 0 240 240"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `Classificação de Sanders (TC coronal) — ${c.code}`}</title>

      {/* Tálus (dome superior) */}
      <path
        {...bonePosterior}
        d="M70 30 C 110 18, 176 22, 196 54 C 202 66, 196 82, 180 88 L 66 88 C 54 82, 50 60, 70 30 Z"
      />
      <text x="122" y="52" {...label} textAnchor="middle">tálus</text>

      {/* Interlinha subtalar (faceta posterior) */}
      <line x1="60" y1="92" x2="196" y2="92" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round" />
      <text x="204" y="90" {...label} textAnchor="start" fill="var(--teal)">faceta post.</text>

      {/* Corpo do calcâneo (coronal) */}
      <path
        {...boneStyle}
        d="M50 96 L 206 96 C 214 118, 214 156, 202 186 C 194 204, 172 212, 128 212
           C 84 212, 62 204, 54 186 C 42 156, 42 118, 50 96 Z"
      />

      {/* Sustentáculo do tálus (medial, fragmento constante à esquerda) */}
      <path
        d="M50 96 L 96 96 L 96 132 C 78 138, 60 132, 50 122 Z"
        fill="var(--surface-2, var(--surface))"
        stroke="var(--ink-soft)"
        strokeWidth="1.2"
      />
      <text x="40" y="150" {...label} textAnchor="middle">sustentáculo</text>
      <text x="40" y="163" {...label} textAnchor="middle">(constante)</text>

      {/* Traços de fratura verticais conforme o tipo */}
      <g className="fx-line" stroke="var(--cortical)" strokeWidth="2.4" fill="none" strokeLinecap="round">
        {c.lines.map((x) => (
          <line key={x} x1={x} y1="94" x2={x + (v === "III" && x === 126 ? 6 : 0)} y2="208" />
        ))}
        {/* afundamento central em III/IV (fragmento deprimido) */}
        {(v === "III" || v === "IV") && (
          <path d="M126 108 C 140 120, 158 120, 168 108" strokeWidth="2" />
        )}
      </g>

      {/* Tipo I: sem desvio (traço tênue apenas ilustrativo) */}
      {v === "I" && (
        <line x1="150" y1="96" x2="150" y2="150" stroke="var(--cortical)" strokeWidth="1.2" strokeDasharray="3 3" />
      )}

      <text x="120" y="228" textAnchor="middle" {...mono}>{c.code}</text>
      <text x="120" y="240" textAnchor="middle" {...label}>{c.note}</text>
    </svg>
  );
};

/* ---------------------------------------------------------------------------
   4. Intra- vs extra-articular — variant "intra" | "extra".
      Perfil lateral: intra cruza a faceta posterior; extra poupa a subtalar.
   -------------------------------------------------------------------------- */
export const IntraExtra: FC<FigureProps> = ({ className, title, variant = "intra" }) => {
  const intra = variant !== "extra";
  return (
    <svg
      viewBox="0 0 340 220"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>
        {title ??
          (intra
            ? "Fratura intra-articular — o traço cruza a faceta posterior (subtalar)"
            : "Fratura extra-articular — traço poupa a faceta posterior")}
      </title>

      {/* Calcâneo lateral */}
      <path
        {...boneStyle}
        d="M44 168 C 40 142, 42 104, 52 88 C 62 76, 88 76, 116 80
           C 142 84, 158 78, 172 84 C 184 88, 194 94, 202 102
           C 212 94, 232 88, 254 92 C 274 96, 284 108, 284 126
           C 284 146, 268 158, 246 164 C 196 176, 96 182, 44 168 Z"
      />
      {/* Faceta posterior */}
      <path d="M146 82 C 164 80, 182 88, 196 100" fill="none" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round" />
      <text x="150" y="70" {...label} textAnchor="middle" fill="var(--teal)">faceta posterior</text>

      {/* Traço da fratura conforme a variante */}
      <g className="fx-line" stroke="var(--cortical)" strokeWidth="2.6" fill="none" strokeLinecap="round">
        {intra ? (
          <path d="M172 84 C 168 112, 150 150, 128 172" />
        ) : (
          <path d="M96 82 C 92 112, 84 146, 78 176" />
        )}
      </g>

      <text x="170" y="204" textAnchor="middle" {...mono}>
        {intra ? "Intra-articular (75%)" : "Extra-articular (25%)"}
      </text>
      <text x="170" y="218" textAnchor="middle" {...label}>
        {intra ? "Cruza a subtalar — reconstrução articular" : "Tuberosidade / processo anterior / sustentáculo"}
      </text>
    </svg>
  );
};

/* ---------------------------------------------------------------------------
   5. Acesso do seio do tarso (mini-open) — incisão oblíqua sobre o seio do
      tarso, do ápice do maléolo lateral à base do 4º metatarsal.
   -------------------------------------------------------------------------- */
export const AcessoSeioTarso: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 320 240"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Acesso do seio do tarso (mini-open) — incisão oblíqua sobre o seio do tarso"}</title>

    {/* Contorno do retropé/pé lateral (partes moles) */}
    <path
      fill="var(--surface-2, var(--surface))"
      stroke="var(--ink-soft)"
      strokeWidth="1.2"
      d="M36 74 C 40 54, 60 48, 78 54 C 96 60, 108 76, 116 96
         C 150 104, 220 108, 286 118 C 300 120, 302 138, 288 142
         C 220 152, 120 154, 78 168 C 56 176, 36 168, 32 146 C 28 120, 30 94, 36 74 Z"
    />
    <text x="60" y="44" {...label} textAnchor="middle">maléolo lateral</text>
    <text x="264" y="110" {...label} textAnchor="middle">base 4º MTT</text>

    {/* Calcâneo subjacente (referência) */}
    <path {...boneStyle} d="M64 120 C 60 138, 66 158, 96 160 C 150 164, 180 150, 176 132 C 172 118, 120 112, 64 120 Z" />
    {/* Seio do tarso (janela óssea) */}
    <ellipse cx="150" cy="128" rx="16" ry="9" fill="var(--surface)" stroke="var(--ink-soft)" strokeWidth="1.2" strokeDasharray="3 2" />
    <text x="150" y="150" {...label} textAnchor="middle">seio do tarso</text>

    {/* Incisão oblíqua (mini) */}
    <line x1="86" y1="104" x2="196" y2="132" stroke="var(--cortical)" strokeWidth="2.6" strokeDasharray="7 5" strokeLinecap="round" />
    <text x="130" y="98" {...label} textAnchor="middle" fill="var(--cortical)">incisão ~4–6 cm</text>

    {/* Tendões fibulares e nervo sural em risco (inferior à incisão) */}
    <g stroke="var(--teal)" strokeWidth="1.6" fill="none" strokeLinecap="round">
      <path d="M60 128 C 110 138, 170 150, 230 150" strokeDasharray="2 3" />
    </g>
    <text x="212" y="168" {...label} textAnchor="middle" fill="var(--teal)">fibulares / n. sural</text>

    <text x="160" y="224" textAnchor="middle" {...mono}>Mini-open: menos complicação de ferida</text>
  </svg>
);

/* ---------------------------------------------------------------------------
   6. Acesso extensível lateral em "L" — retalho de espessura total; ápice do
      "L" é o ponto crítico de necrose; a. calcânea lateral / angiossoma.
   -------------------------------------------------------------------------- */
export const AcessoExtensilLateral: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 300 260"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Acesso extensível lateral em L — retalho de espessura total e risco de necrose no ápice"}</title>

    {/* Retropé lateral (partes moles) */}
    <path
      fill="var(--surface-2, var(--surface))"
      stroke="var(--ink-soft)"
      strokeWidth="1.2"
      d="M70 30 C 66 90, 66 160, 78 210 C 84 228, 110 236, 150 234
         C 210 232, 258 222, 268 200 C 214 196, 150 196, 120 196
         C 116 150, 116 80, 116 40 Z"
    />

    {/* Incisão em L: braço vertical (retro-maleolar) + braço horizontal (borda plantar) */}
    <path
      d="M104 44 C 92 96, 92 150, 96 188 C 100 202, 118 208, 150 208 C 200 208, 244 202, 260 196"
      fill="none"
      stroke="var(--cortical)"
      strokeWidth="2.6"
      strokeDasharray="7 5"
      strokeLinecap="round"
    />
    {/* Ápice do L (ponto crítico) */}
    <circle cx="96" cy="196" r="6" fill="none" stroke="var(--cortical)" strokeWidth="2" />
    <text x="60" y="200" {...label} textAnchor="middle" fill="var(--cortical)">ápice</text>
    <text x="60" y="213" {...label} textAnchor="middle" fill="var(--cortical)">(necrose)</text>

    {/* Retalho de espessura total elevado (no-touch), rebatido anteriormente */}
    <path
      d="M104 60 C 150 66, 200 70, 244 78 C 236 120, 200 150, 150 156 C 130 130, 116 96, 104 60 Z"
      fill="var(--amber)"
      opacity="0.12"
    />
    <text x="190" y="120" {...label} textAnchor="middle">retalho de espessura total</text>

    {/* Artéria calcânea lateral / angiossoma (suprimento do retalho) */}
    <g stroke="var(--teal)" strokeWidth="1.6" fill="none" strokeLinecap="round">
      <path d="M104 50 C 116 96, 128 150, 138 196" />
    </g>
    <text x="128" y="40" {...label} textAnchor="start" fill="var(--teal)">a. calcânea lateral</text>

    <text x="150" y="252" textAnchor="middle" {...mono}>Exposição ampla · maior risco de ferida</text>
  </svg>
);

/* ---------------------------------------------------------------------------
   7. Redução — restaurar altura/comprimento, desimpactar e elevar a faceta
      posterior sobre o sustentáculo (fragmento constante); conferir Böhler.
   -------------------------------------------------------------------------- */
export const StepReducao: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 340 240"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Redução: elevar a faceta posterior deprimida e restaurar altura, comprimento e ângulo de Böhler"}</title>

    {/* Calcâneo lateral */}
    <path
      {...boneStyle}
      d="M44 172 C 40 146, 42 108, 52 92 C 62 80, 88 80, 116 84
         C 142 88, 158 82, 172 88 C 184 92, 194 98, 202 106
         C 212 98, 232 92, 254 96 C 274 100, 284 112, 284 130
         C 284 150, 268 162, 246 168 C 196 180, 96 186, 44 172 Z"
    />
    {/* Faceta posterior deprimida (fantasma) e posição reduzida */}
    <path d="M148 118 C 162 128, 180 132, 198 120" fill="none" stroke="var(--cortical)" strokeWidth="1.6" strokeDasharray="3 3" className="fx-line" />
    <path d="M148 86 C 164 84, 182 92, 198 104" fill="none" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round" />

    {/* Sustentáculo — referência de redução (constante) */}
    <path
      d="M148 108 C 136 108, 128 116, 130 128 C 132 138, 146 140, 156 134"
      fill="var(--surface-2, var(--surface))"
      stroke="var(--ink-soft)"
      strokeWidth="1.2"
      strokeDasharray="3 2"
    />
    <text x="112" y="150" {...label} textAnchor="middle">reduzir ao sustentáculo</text>

    {/* Seta de elevação da faceta deprimida → reduzida */}
    <g stroke="var(--amber)" strokeWidth="2" fill="none" strokeLinecap="round">
      <path d="M174 122 L 174 96" markerEnd="url(#rc-up)" />
    </g>
    {/* Tração posterior na tuberosidade (restaurar comprimento/altura) */}
    <g stroke="var(--amber)" strokeWidth="1.8" fill="none" strokeLinecap="round">
      <path d="M56 96 L 30 84" markerEnd="url(#rc-pull)" />
    </g>
    <defs>
      <marker id="rc-up" markerWidth="9" markerHeight="9" refX="4" refY="4" orient="auto">
        <path d="M0 8 L4 0 L8 8 Z" fill="var(--amber)" />
      </marker>
      <marker id="rc-pull" markerWidth="9" markerHeight="9" refX="4" refY="4" orient="auto">
        <path d="M8 0 L0 4 L8 8 Z" fill="var(--amber)" />
      </marker>
    </defs>
    <text x="34" y="72" {...label} textAnchor="middle" fill="var(--amber)">tração / desimpactação</text>

    <text x="170" y="216" textAnchor="middle" {...mono}>Restaurar altura · comprimento · Böhler</text>
    <text x="170" y="230" textAnchor="middle" {...label}>Broden confirma a congruência da faceta</text>
  </svg>
);

/* ---------------------------------------------------------------------------
   8. Fixação — variant "placa" (placa lateral + parafuso no sustentáculo) |
      "percutaneo" (parafusos percutâneos / fixação minimamente invasiva).
   -------------------------------------------------------------------------- */
export const StepFixacao: FC<FigureProps> = ({ className, title, variant = "placa" }) => {
  const plate = variant !== "percutaneo";
  return (
    <svg
      viewBox="0 0 340 240"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>
        {title ??
          (plate
            ? "Fixação: placa lateral de calcâneo com parafuso no sustentáculo do tálus"
            : "Fixação percutânea minimamente invasiva com parafusos ao sustentáculo")}
      </title>

      {/* Calcâneo lateral reduzido */}
      <path
        {...boneStyle}
        d="M44 172 C 40 146, 42 108, 52 92 C 62 80, 88 80, 116 84
           C 142 88, 158 82, 172 88 C 184 92, 194 98, 202 106
           C 212 98, 232 92, 254 96 C 274 100, 284 112, 284 130
           C 284 150, 268 162, 246 168 C 196 180, 96 186, 44 172 Z"
      />
      {/* Faceta posterior reduzida */}
      <path d="M148 86 C 164 84, 182 92, 198 104" fill="none" stroke="var(--teal)" strokeWidth="1.8" strokeLinecap="round" />
      {/* Sustentáculo (alvo do parafuso de sustentação) */}
      <path
        d="M148 108 C 136 108, 128 116, 130 128 C 132 138, 146 140, 156 134"
        fill="var(--surface-2, var(--surface))"
        stroke="var(--ink-soft)"
        strokeWidth="1.2"
        strokeDasharray="3 2"
      />

      {plate ? (
        <>
          {/* Placa lateral em leque de baixo perfil */}
          <path
            d="M64 150 C 96 158, 150 160, 210 150 C 244 144, 264 138, 268 124
               C 262 120, 240 128, 210 132 C 150 138, 96 138, 66 132 Z"
            fill="var(--teal-tint, var(--surface-2, var(--surface)))"
            stroke="var(--teal)"
            strokeWidth="1.8"
          />
          {/* Parafusos da placa (incl. ao sustentáculo) */}
          <g stroke="var(--teal)" strokeWidth="3" strokeLinecap="round">
            <line x1="78" y1="140" x2="90" y2="120" />
            <line x1="120" y1="142" x2="132" y2="118" />
            <line x1="176" y1="140" x2="150" y2="122" />
            <line x1="228" y1="136" x2="240" y2="116" />
          </g>
          <text x="60" y="164" {...label} textAnchor="start" fill="var(--teal)">placa lateral</text>
          <text x="150" y="200" {...label} textAnchor="middle" fill="var(--teal)">parafuso ao sustentáculo</text>
        </>
      ) : (
        <>
          {/* Parafusos percutâneos: da tuberosidade ao processo anterior e ao sustentáculo */}
          <g stroke="var(--teal)" strokeWidth="4" strokeLinecap="round">
            <line x1="60" y1="150" x2="150" y2="118" />
            <line x1="64" y1="128" x2="196" y2="104" />
            <line x1="90" y1="152" x2="150" y2="126" />
          </g>
          {/* pontos de entrada percutânea (mínima incisão) */}
          <g fill="var(--surface)" stroke="var(--cortical)" strokeWidth="1.4">
            <circle cx="60" cy="150" r="3.4" />
            <circle cx="64" cy="128" r="3.4" />
            <circle cx="90" cy="152" r="3.4" />
          </g>
          <text x="150" y="200" {...label} textAnchor="middle" fill="var(--teal)">parafusos percutâneos</text>
        </>
      )}

      <text x="170" y="222" textAnchor="middle" {...mono}>
        {plate ? "Placa lateral + sustentáculo" : "Percutâneo minimamente invasivo"}
      </text>
    </svg>
  );
};

/* -------------------------------------------------------------------------- */
export const figures: Record<string, FC<FigureProps>> = {
  "fratura-calcaneo:anatomia": Anatomia,
  "fratura-calcaneo:angulos": Angulos,
  "fratura-calcaneo:sanders": Sanders,
  "fratura-calcaneo:intra-extra": IntraExtra,
  "fratura-calcaneo:acesso-seio-tarso": AcessoSeioTarso,
  "fratura-calcaneo:acesso-extensil-lateral": AcessoExtensilLateral,
  "fratura-calcaneo:step-reducao": StepReducao,
  "fratura-calcaneo:step-fixacao": StepFixacao,
};
