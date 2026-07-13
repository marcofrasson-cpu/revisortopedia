import type { FC } from "react";
import type { FigureProps } from "../../../types/topic";

/* ============================================================================
   Fratura do tálus — figuras esquemáticas originais (line-art 2 tons).
   Convenções de cor (somente via CSS vars):
   • Osso:            stroke var(--ink-soft), fill var(--surface)
   • 2º plano:        var(--surface-2, var(--surface))
   • Implante/vasos:  stroke var(--teal)  (parafusos, placas, artérias)
   • Traço de fratura:stroke var(--cortical) + className "fx-line"
   • Medidas/ângulos: var(--amber)
   • Rótulos:         fontSize 11, fill var(--muted), font-body
   • Códigos mono:    font-mono
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

const labelMono = {
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

const amber = "var(--amber)";

/* ──────────────────────────────────────────────────────────────────────────
   1) ANATOMIA — tálus em perfil + suprimento arterial retrógrado.
   Artéria do canal do tarso (tibial posterior) é a dominante do corpo; o fluxo
   sobe da cabeça/colo em direção ao corpo → uma fratura do colo o interrompe.
   ────────────────────────────────────────────────────────────────────────── */
export const Anatomia: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 340 280"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Anatomia vascular do tálus — suprimento retrógrado e risco de necrose"}</title>

    {/* tíbia distal (2º plano) */}
    <path {...bone2} d="M120 20 L 214 20 L 214 96 C 200 108, 150 108, 128 96 Z" />
    <text x="167" y="44" {...label} textAnchor="middle">tíbia</text>

    {/* corpo do tálus (dômo articular, posterior) */}
    <path
      {...bone}
      d="M126 100 C 150 92, 208 92, 226 106 C 236 124, 234 150, 214 164 C 186 176, 150 174, 130 158 C 118 140, 116 116, 126 100 Z"
    />
    {/* colo do tálus (istmo) */}
    <path {...bone} d="M126 138 C 110 140, 92 146, 80 152 C 86 168, 94 176, 108 176 C 122 172, 130 160, 130 148 Z" />
    {/* cabeça do tálus (anterior, articula com o navicular) */}
    <path {...bone} d="M80 150 C 60 150, 46 158, 44 172 C 46 186, 60 194, 78 190 C 92 186, 98 172, 96 160 Z" />

    {/* navicular (2º plano) */}
    <path {...bone2} d="M40 150 C 30 156, 28 186, 38 194 C 30 176, 34 162, 40 150 Z" />
    {/* calcâneo (2º plano) */}
    <path {...bone2} d="M120 178 C 150 184, 214 186, 246 178 L 250 214 L 118 214 Z" />
    <text x="186" y="204" {...label} textAnchor="middle">calcâneo</text>

    {/* seio/canal do tarso entre tálus e calcâneo */}
    <text x="140" y="192" {...label} textAnchor="middle">canal / seio do tarso</text>

    {/* artéria do canal do tarso (tibial posterior) — dominante, sobe ao corpo */}
    <g fill="none" stroke="var(--teal)" strokeWidth="2.4" strokeLinecap="round">
      <path d="M148 214 C 150 198, 156 184, 168 168 C 180 152, 196 140, 208 130" />
    </g>
    {/* ramos intraósseos ascendentes/retrógrados dentro do corpo */}
    <g fill="none" stroke="var(--teal)" strokeWidth="1.4" strokeLinecap="round">
      <path d="M168 168 C 172 152, 178 136, 190 122" />
      <path d="M180 158 C 186 144, 194 130, 206 120" />
    </g>
    {/* artéria dorsal do pé — cabeça/colo */}
    <path d="M40 132 C 70 138, 96 148, 118 156" fill="none" stroke="var(--teal)" strokeWidth="1.8" strokeDasharray="2 3" />

    {/* rótulos */}
    <text x="176" y="120" {...label} textAnchor="middle">corpo (dômo)</text>
    <text x="104" y="150" {...label} textAnchor="middle">colo</text>
    <text x="66" y="176" {...label} textAnchor="middle">cabeça</text>
    <text x="214" y="222" {...label} textAnchor="middle" fill="var(--teal)">a. do canal do tarso (tib. post.)</text>
    <text x="40" y="126" {...label} textAnchor="start" fill="var(--teal)">a. dorsal do pé</text>

    <text x="14" y="248" {...label} textAnchor="start">
      Suprimento retrógrado: o fluxo entra pelo colo/seio do tarso e sobe até o corpo.
    </text>
    <text x="14" y="264" {...label} textAnchor="start" fill="var(--cortical)">
      A fratura do colo secciona esse aporte → risco de necrose avascular do corpo.
    </text>
  </svg>
);

/* ──────────────────────────────────────────────────────────────────────────
   2) HAWKINS — I a IV (variantes clicáveis). Progressão do deslocamento
   articular (tornozelo · subtalar · talonavicular) e do risco de necrose.
   ────────────────────────────────────────────────────────────────────────── */
export const Hawkins: FC<FigureProps> = ({ className, title, variant }) => {
  const v = (variant ?? "I").toUpperCase();

  const cfg: Record<
    string,
    { desc: string; risk: string; subtalar: boolean; ankle: boolean; talonav: boolean; gap: boolean }
  > = {
    I: { desc: "Não desviada — articulações congruentes", risk: "Necrose ~0–15%", subtalar: false, ankle: false, talonav: false, gap: false },
    II: { desc: "Desviada + luxação/subluxação subtalar", risk: "Necrose ~20–50%", subtalar: true, ankle: false, talonav: false, gap: true },
    III: { desc: "+ luxação do corpo (subtalar e tibiotalar)", risk: "Necrose ~40–90%", subtalar: true, ankle: true, talonav: false, gap: true },
    IV: { desc: "+ luxação/subluxação talonavicular (cabeça)", risk: "Necrose máxima", subtalar: true, ankle: true, talonav: true, gap: true },
  };
  const c = cfg[v] ?? cfg.I;

  // deslocamentos por variante
  const bodyDrop = c.ankle ? 14 : 0; // corpo extrudado póstero-medial
  const bodyRot = c.subtalar ? -12 : 0;
  const headShift = c.talonav ? 12 : 0;

  return (
    <svg
      viewBox="0 0 320 280"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `Hawkins — tipo ${v}: ${c.desc}`}</title>

      {/* tíbia (pinça do tornozelo) */}
      <path {...bone2} d="M150 18 L 232 18 L 232 78 C 216 90, 168 90, 148 78 Z" />
      <text x="191" y="40" {...label} textAnchor="middle">tíbia</text>

      {/* calcâneo (referência inferior fixa) */}
      <path {...bone2} d="M120 196 C 152 202, 224 204, 256 196 L 258 232 L 118 232 Z" />
      <text x="196" y="222" {...label} textAnchor="middle">calcâneo</text>

      {/* CORPO do tálus (desloca conforme a variante) */}
      <g transform={`translate(0 ${bodyDrop}) rotate(${bodyRot} 190 120)`}>
        <path
          {...bone}
          d="M150 92 C 174 84, 224 84, 240 98 C 250 116, 248 142, 228 156 C 200 168, 168 166, 150 150 C 138 132, 138 108, 150 92 Z"
        />
        <text x="192" y="126" {...label} textAnchor="middle">corpo</text>
      </g>

      {/* CABEÇA + colo (desloca no tipo IV) */}
      <g transform={`translate(${-headShift} ${c.talonav ? 8 : 0})`}>
        {/* colo */}
        <path {...bone} d="M150 132 C 132 134, 112 140, 100 146 C 106 162, 116 170, 130 170 C 144 166, 150 154, 150 142 Z" />
        {/* cabeça */}
        <path {...bone} d="M100 144 C 80 144, 66 152, 64 166 C 66 180, 80 188, 98 184 C 112 180, 118 166, 116 154 Z" />
        <text x="86" y="168" {...label} textAnchor="middle">cabeça</text>
      </g>

      {/* navicular (referência anterior) */}
      <path {...bone2} d="M58 146 C 46 152, 44 184, 56 192 C 46 172, 50 158, 58 146 Z" />

      {/* traço de fratura no colo */}
      <g className="fx-line" stroke="var(--cortical)">
        <line
          x1="150"
          y1={92 + (c.gap ? 6 : 0)}
          x2="150"
          y2={150 + (c.gap ? 6 : 0)}
          strokeWidth="2.6"
          strokeDasharray={c.gap ? "3 3" : undefined}
        />
      </g>

      {/* marcadores das articulações envolvidas (amber quando luxada) */}
      <circle cx="196" cy="86" r="4" fill={c.ankle ? amber : "var(--line-strong)"} />
      <text x="204" y="82" {...label} textAnchor="start" fill={c.ankle ? amber : "var(--muted)"}>tibiotalar</text>
      <circle cx="200" cy="188" r="4" fill={c.subtalar ? amber : "var(--line-strong)"} />
      <text x="208" y="184" {...label} textAnchor="start" fill={c.subtalar ? amber : "var(--muted)"}>subtalar</text>
      <circle cx="58" cy="200" r="4" fill={c.talonav ? amber : "var(--line-strong)"} />
      <text x="50" y="212" {...label} textAnchor="middle" fill={c.talonav ? amber : "var(--muted)"}>talonavicular</text>

      {/* cabeçalho e legenda */}
      <text x="160" y="16" {...labelMono} textAnchor="middle" fill="var(--ink-soft)">Hawkins {v}</text>
      <text x="160" y="252" {...label} textAnchor="middle">{c.desc}</text>
      <text x="160" y="268" {...label} textAnchor="middle" fill="var(--cortical)">{c.risk}</text>
    </svg>
  );
};

/* ──────────────────────────────────────────────────────────────────────────
   3) SINAL DE HAWKINS — banda radiolucente subcondral no dômo (6–8 sem).
   Presente = osso viável (osteopenia por desuso preservada). Ausente = risco.
   ────────────────────────────────────────────────────────────────────────── */
export const SinalHawkins: FC<FigureProps> = ({ className, title, variant }) => {
  const presente = (variant ?? "presente") !== "ausente";
  return (
    <svg
      viewBox="0 0 300 240"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? (presente ? "Sinal de Hawkins presente — corpo viável" : "Sinal de Hawkins ausente — risco de necrose")}</title>

      {/* incidência AP do tornozelo: tíbia e maléolos */}
      <path {...bone2} d="M104 20 L 196 20 L 196 92 L 176 108 L 124 108 L 104 92 Z" />
      {/* maléolo medial e lateral */}
      <path {...bone2} d="M104 92 L 124 108 L 118 128 L 100 120 Z" />
      <path {...bone2} d="M196 92 L 176 108 L 182 128 L 200 120 Z" />
      <text x="150" y="56" {...label} textAnchor="middle">tíbia (AP)</text>

      {/* dômo do tálus */}
      <path {...bone} d="M112 118 C 132 108, 168 108, 188 118 C 196 132, 194 156, 176 168 C 150 178, 124 176, 112 164 C 104 150, 104 130, 112 118 Z" />
      <text x="150" y="152" {...label} textAnchor="middle">dômo do tálus</text>

      {/* banda subcondral (o sinal) */}
      {presente ? (
        <path
          d="M118 124 C 138 116, 164 116, 184 124"
          fill="none"
          stroke="var(--teal)"
          strokeWidth="2.4"
          strokeDasharray="5 3"
        />
      ) : (
        <path
          d="M118 124 C 138 116, 164 116, 184 124"
          fill="none"
          stroke="var(--cortical)"
          strokeWidth="2.4"
        />
      )}

      <text
        x="150"
        y="200"
        {...labelMono}
        textAnchor="middle"
        fill={presente ? "var(--teal)" : "var(--cortical)"}
      >
        {presente ? "sinal PRESENTE" : "sinal AUSENTE"}
      </text>
      <text x="150" y="220" {...label} textAnchor="middle">
        {presente
          ? "Banda radiolucente subcondral (6–8 sem) → corpo viável."
          : "Sem osteopenia subcondral → alerta para necrose avascular."}
      </text>
      <text x="150" y="236" {...label} textAnchor="middle" fill="var(--muted)">
        Sensível (presente ≈ viável); ausência não confirma necrose.
      </text>
    </svg>
  );
};

/* ──────────────────────────────────────────────────────────────────────────
   4) VIA ANTEROMEDIAL — entre tibial anterior e tibial posterior.
   ────────────────────────────────────────────────────────────────────────── */
export const ViaAnteromedial: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 300 260"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Via anteromedial — acesso ao colo do tálus pela face medial"}</title>

    {/* contorno do dorso do pé/tornozelo (2º plano) */}
    <path {...bone2} d="M50 40 C 130 30, 210 40, 250 70 L 250 220 L 50 220 Z" opacity="0.4" />

    {/* maléolo medial de referência */}
    <path {...bone} d="M96 60 C 112 58, 122 72, 118 92 C 108 100, 92 96, 88 82 Z" />
    <text x="80" y="76" {...label} textAnchor="end">maléolo medial</text>

    {/* colo/cabeça do tálus (alvo, ao centro) */}
    <path {...bone} d="M120 120 C 150 108, 190 116, 210 140 C 194 158, 156 160, 130 148 Z" />
    <text x="168" y="140" {...label} textAnchor="middle">colo do tálus</text>

    {/* tendões que delimitam o intervalo */}
    <path fill="var(--teal-tint)" stroke="var(--teal)" strokeWidth="1.6" d="M108 60 C 112 110, 118 170, 122 214 L 134 214 C 130 168, 126 110, 122 62 Z" />
    <text x="100" y="184" {...label} textAnchor="end" fill="var(--teal)">tibial anterior</text>
    <path fill="var(--teal-tint)" stroke="var(--teal)" strokeWidth="1.6" d="M92 96 C 96 140, 100 184, 104 214 L 116 214 C 112 182, 108 140, 106 100 Z" />
    <text x="86" y="150" {...label} textAnchor="end" fill="var(--teal)">tibial posterior</text>

    {/* linha de incisão / intervalo */}
    <line x1="118" y1="70" x2="128" y2="216" stroke="var(--cortical)" strokeWidth="2.2" strokeDasharray="6 4" className="fx-line" />
    <text x="150" y="44" {...label} textAnchor="middle" fill="var(--cortical)">incisão anteromedial</text>

    <text x="18" y="242" {...label} textAnchor="start">
      Intervalo entre tibial anterior e tibial posterior; expõe o colo e a cominução dorsomedial.
    </text>
    <text x="18" y="256" {...label} textAnchor="start" fill={amber}>Preservar o retináculo/deltoide medial — evita agravar a desvascularização.</text>
  </svg>
);

/* ──────────────────────────────────────────────────────────────────────────
   5) VIA ANTEROLATERAL — sobre o seio do tarso, lateral ao EDL.
   ────────────────────────────────────────────────────────────────────────── */
export const ViaAnterolateral: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 300 260"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Via anterolateral — acesso ao colo pelo seio do tarso"}</title>

    <path {...bone2} d="M50 40 C 130 30, 210 40, 250 70 L 250 220 L 50 220 Z" opacity="0.4" />

    {/* maléolo lateral de referência */}
    <path {...bone} d="M196 60 C 212 58, 222 74, 216 96 C 206 104, 190 98, 188 82 Z" />
    <text x="224" y="78" {...label} textAnchor="start">maléolo lateral</text>

    {/* colo/cabeça do tálus (alvo) */}
    <path {...bone} d="M96 120 C 126 108, 166 116, 186 140 C 170 158, 132 160, 106 148 Z" />
    <text x="140" y="140" {...label} textAnchor="middle">colo do tálus</text>

    {/* seio do tarso (janela lateral) */}
    <ellipse cx="176" cy="150" rx="16" ry="10" fill="var(--surface-2, var(--surface))" stroke="var(--ink-soft)" strokeWidth="1.2" />
    <text x="200" y="154" {...label} textAnchor="start">seio do tarso</text>

    {/* tendões extensores / fibulares */}
    <path fill="var(--teal-tint)" stroke="var(--teal)" strokeWidth="1.6" d="M172 60 C 176 110, 182 170, 186 214 L 198 214 C 194 168, 188 110, 186 62 Z" />
    <text x="206" y="196" {...label} textAnchor="start" fill="var(--teal)">extensor longo dos dedos</text>

    {/* linha de incisão / intervalo */}
    <line x1="182" y1="70" x2="192" y2="216" stroke="var(--cortical)" strokeWidth="2.2" strokeDasharray="6 4" className="fx-line" />
    <text x="150" y="44" {...label} textAnchor="middle" fill="var(--cortical)">incisão anterolateral</text>

    <text x="18" y="242" {...label} textAnchor="start">
      Lateral ao extensor longo dos dedos, sobre o seio do tarso; expõe a face lateral do colo.
    </text>
    <text x="18" y="256" {...label} textAnchor="start" fill={amber}>Complementa a medial: a dupla via corrige o varo e evita malunião.</text>
  </svg>
);

/* ──────────────────────────────────────────────────────────────────────────
   6) PASSO — Redução anatômica (evitar varo/dorsiflexão do colo).
   ────────────────────────────────────────────────────────────────────────── */
export const StepReducao: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 300 250"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Passo — redução anatômica do colo do tálus (corrigir varo/comunição medial)"}</title>

    {/* estado desviado em varo (fantasma) */}
    <g opacity="0.32">
      <path {...bone2} d="M60 138 C 40 138, 28 146, 26 160 C 28 174, 40 182, 56 178 C 70 174, 76 160, 74 148 Z" />
      <path {...bone2} d="M74 152 C 96 140, 130 146, 132 132 C 118 118, 96 116, 78 126 Z" />
    </g>

    {/* corpo do tálus (fixo) */}
    <path {...bone} d="M150 96 C 174 88, 224 88, 240 102 C 250 120, 248 146, 228 160 C 200 172, 168 170, 150 154 C 138 136, 138 112, 150 96 Z" />
    <text x="192" y="130" {...label} textAnchor="middle">corpo</text>

    {/* colo reduzido (alinhado) */}
    <path {...bone} d="M150 136 C 130 138, 108 144, 96 150 C 102 166, 112 174, 126 174 C 140 170, 150 158, 150 146 Z" />
    {/* cabeça reduzida */}
    <path {...bone} d="M96 148 C 76 148, 62 156, 60 170 C 62 184, 76 192, 94 188 C 108 184, 114 170, 112 158 Z" />
    <text x="82" y="172" {...label} textAnchor="middle">cabeça</text>

    {/* traço reduzido, bem apostado */}
    <g className="fx-line">
      <line x1="150" y1="98" x2="150" y2="152" stroke="var(--cortical)" strokeWidth="2" />
    </g>

    {/* comunição dorsomedial (zona de perda óssea → varo) */}
    <path d="M138 100 C 146 104, 148 112, 146 120" fill="none" stroke={amber} strokeWidth="1.6" strokeDasharray="2 2" />
    <text x="150" y="88" {...label} textAnchor="middle" fill={amber}>comunição dorsomedial</text>

    {/* seta de correção */}
    <path d="M40 196 C 66 184, 84 176, 96 168" fill="none" stroke={amber} strokeWidth="1.8" markerEnd="url(#arrowT)" />
    <defs>
      <marker id="arrowT" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <path d="M0 0 L6 3 L0 6 Z" fill={amber} />
      </marker>
    </defs>
    <text x="36" y="210" {...label} textAnchor="start" fill={amber}>reduzir do varo → alinhar</text>

    <text x="14" y="234" {...label} textAnchor="start" fill="var(--teal)">Alvo: redução anatômica — o varo residual é a malunião mais comum.</text>
  </svg>
);

/* ──────────────────────────────────────────────────────────────────────────
   7) PASSO — Fixação. Variantes: "parafusos" (compressão AP/PA) × "placa"
   (mini-placa medial de sustentação contra o colapso em varo na comunição).
   ────────────────────────────────────────────────────────────────────────── */
export const StepFixacao: FC<FigureProps> = ({ className, title, variant }) => {
  const placa = (variant ?? "parafusos") === "placa";
  return (
    <svg
      viewBox="0 0 300 250"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? (placa ? "Passo — mini-placa medial de sustentação" : "Passo — fixação com parafusos de compressão")}</title>

      {/* corpo do tálus */}
      <path {...bone} d="M150 92 C 174 84, 224 84, 240 98 C 250 116, 248 142, 228 156 C 200 168, 168 166, 150 150 C 138 132, 138 108, 150 92 Z" />
      <text x="192" y="126" {...label} textAnchor="middle">corpo</text>
      {/* colo + cabeça */}
      <path {...bone} d="M150 132 C 130 134, 108 140, 96 146 C 102 162, 112 170, 126 170 C 140 166, 150 154, 150 142 Z" />
      <path {...bone} d="M96 144 C 76 144, 62 152, 60 166 C 62 180, 76 188, 94 184 C 108 180, 114 166, 112 154 Z" />
      <text x="80" y="168" {...label} textAnchor="middle">cabeça</text>

      {/* traço reduzido */}
      <g className="fx-line">
        <line x1="150" y1="94" x2="150" y2="150" stroke="var(--cortical)" strokeWidth="1.6" strokeDasharray="3 3" />
      </g>

      {placa ? (
        <>
          {/* mini-placa medial de sustentação, moldada sobre a face dorsomedial */}
          <path
            d="M80 150 C 108 138, 140 130, 176 116 C 200 108, 216 106, 228 110"
            fill="none"
            stroke="var(--teal)"
            strokeWidth="5"
            strokeLinecap="round"
          />
          {/* parafusos da placa */}
          <g stroke="var(--teal-deep)" strokeWidth="2.4" strokeLinecap="round">
            <line x1="92" y1="150" x2="104" y2="162" />
            <line x1="132" y1="132" x2="144" y2="146" />
            <line x1="176" y1="118" x2="188" y2="132" />
            <line x1="214" y1="112" x2="224" y2="126" />
          </g>
          <text x="150" y="26" {...label} textAnchor="middle" fill="var(--teal)">mini-placa medial de sustentação</text>
          <text x="14" y="234" {...label} textAnchor="start">
            Na comunição medial, a placa resiste ao encurtamento e ao varo — não confie só em parafusos.
          </text>
        </>
      ) : (
        <>
          {/* parafusos de compressão da cabeça ao corpo (AP), rente às corticais */}
          <g {...implant}>
            <line x1="66" y1="162" x2="224" y2="112" />
            <line x1="72" y1="176" x2="220" y2="132" />
          </g>
          {/* roscas além do traço */}
          <g stroke="var(--teal-deep)" strokeWidth="1.2">
            <line x1="188" y1="124" x2="224" y2="112" strokeDasharray="2 2" />
            <line x1="186" y1="144" x2="220" y2="132" strokeDasharray="2 2" />
          </g>
          <text x="150" y="26" {...label} textAnchor="middle" fill="var(--teal)">parafusos de compressão (cabeça → corpo)</text>
          <text x="14" y="220" {...label} textAnchor="start">Cabeças embutidas na cartilagem articular anterior; rosca inteiramente além do traço.</text>
          <text x="14" y="236" {...label} textAnchor="start">Parafusos póstero-lateral → ântero-medial também são uma opção (via percutânea posterior).</text>
        </>
      )}
    </svg>
  );
};

/* ──────────────────────────────────────────────────────────────────────────
   Registro exportado — chaves prefixadas pelo slug deste tópico.
   ────────────────────────────────────────────────────────────────────────── */
export const figures: Record<string, FC<FigureProps>> = {
  "fratura-talus:anatomia": Anatomia,
  "fratura-talus:hawkins": Hawkins,
  "fratura-talus:sinal-hawkins": SinalHawkins,
  "fratura-talus:via-anteromedial": ViaAnteromedial,
  "fratura-talus:via-anterolateral": ViaAnterolateral,
  "fratura-talus:step-reducao": StepReducao,
  "fratura-talus:step-fixacao": StepFixacao,
};
