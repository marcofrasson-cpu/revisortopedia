import type { FC } from "react";
import type { FigureProps } from "../../../types/topic";

/* ============================================================================
   Figuras — Lesão de Lisfranc (complexo tarsometatársico)
   Line-art esquemático, 2 tons, original (sem copyright). Cores só por CSS vars.
   Prefixo obrigatório de id: "lesao-lisfranc:"
   Visão dorsal do pé: distal (dedos) no topo, proximal (retropé) embaixo.
   ========================================================================== */

const BONE = { stroke: "var(--ink-soft)", fill: "var(--surface)", strokeWidth: 2 } as const;
const BONE2 = { stroke: "var(--ink-soft)", fill: "var(--surface-2, var(--surface))", strokeWidth: 2 } as const;
const SOFT = { stroke: "var(--teal)", fill: "none", strokeWidth: 2.4 } as const;
const labelStyle = { fontSize: 11, fill: "var(--muted)", fontFamily: "var(--font-body, sans-serif)" } as const;
const monoStyle = { fontSize: 11, fill: "var(--muted)", fontFamily: "var(--font-mono, monospace)" } as const;

/* Metatarso vertical (cabeça no topo, base embaixo/proximal). */
const mt = (cx: number, headTop: number, baseTop: number, baseBottom: number) =>
  `M${cx - 13} ${baseBottom} L${cx - 13} ${baseTop} L${cx - 8} ${headTop + 20} ` +
  `Q${cx - 16} ${headTop} ${cx} ${headTop} Q${cx + 16} ${headTop} ${cx + 8} ${headTop + 20} ` +
  `L${cx + 13} ${baseTop} L${cx + 13} ${baseBottom} Z`;

/* Geometria compartilhada das colunas do médio-pé. */
const MTS = [
  { cx: 105, headTop: 60, baseTop: 150, baseBottom: 180 }, // 1º
  { cx: 160, headTop: 52, baseTop: 150, baseBottom: 200 }, // 2º (recuado — chave do mortise)
  { cx: 213, headTop: 58, baseTop: 152, baseBottom: 182 }, // 3º
  { cx: 263, headTop: 66, baseTop: 154, baseBottom: 180 }, // 4º
  { cx: 315, headTop: 80, baseTop: 156, baseBottom: 180 }, // 5º
];

/* Esqueleto neutro do médio-pé (tarsais + metatarsos alinhados). */
function MidfootSkeleton({ labels = true }: { labels?: boolean }) {
  return (
    <g>
      {/* Navicular */}
      <path d="M84 300 Q160 288 236 300 L232 262 Q160 252 88 262 Z" {...BONE2} />
      {/* Cuboide (coluna lateral) */}
      <path d="M244 258 L348 254 Q356 220 348 188 L246 190 Q240 224 244 258 Z" {...BONE2} />
      {/* Cuneiforme medial (C1) */}
      <rect x="82" y="184" width="46" height="64" rx="7" {...BONE} />
      {/* Cuneiforme intermédio (C2) — mais curto/recuado forma o mortise */}
      <rect x="144" y="204" width="42" height="46" rx="7" {...BONE} />
      {/* Cuneiforme lateral (C3) */}
      <rect x="192" y="190" width="44" height="60" rx="7" {...BONE} />
      {/* Metatarsos 1–5 */}
      {MTS.map((m, i) => (
        <path key={i} d={mt(m.cx, m.headTop, m.baseTop, m.baseBottom)} {...BONE} />
      ))}
      {/* Estiloide do 5º MT */}
      <path d="M328 178 Q344 176 346 190 L332 192 Z" {...BONE} />
      {labels && (
        <>
          <text x="60" y="216" style={labelStyle} textAnchor="end">C1</text>
          <text x="165" y="230" style={labelStyle} textAnchor="middle">C2</text>
          <text x="214" y="224" style={labelStyle} textAnchor="middle">C3</text>
          <text x="300" y="226" style={labelStyle} textAnchor="middle">cuboide</text>
          <text x="105" y="112" style={monoStyle} textAnchor="middle">1</text>
          <text x="160" y="112" style={monoStyle} textAnchor="middle">2</text>
          <text x="213" y="112" style={monoStyle} textAnchor="middle">3</text>
          <text x="263" y="118" style={monoStyle} textAnchor="middle">4</text>
          <text x="315" y="130" style={monoStyle} textAnchor="middle">5</text>
        </>
      )}
    </g>
  );
}

/* -------------------------------------------------------------------------- */
/* 1. Anatomia — colunas e ligamento de Lisfranc                               */
/* -------------------------------------------------------------------------- */
const Anatomia: FC<FigureProps> = ({ variant = "colunas", className, title }) => {
  const lig = variant === "ligamento";
  return (
    <svg viewBox="0 0 480 340" preserveAspectRatio="xMidYMid meet" role="img" className={className}>
      <title>
        {title ??
          (lig
            ? "Ligamento de Lisfranc: cuneiforme medial à base do 2º metatarso"
            : "Colunas do médio-pé e mortise do 2º metatarso")}
      </title>
      <MidfootSkeleton />
      {lig ? (
        <>
          {/* Ligamento de Lisfranc (C1 → base do 2º MT), oblíquo, plantar */}
          <path d="M124 200 L150 190" {...SOFT} strokeWidth={5} />
          {/* Ligamentos intercuneiformes / TMT dorsais esquemáticos */}
          <line x1="128" y1="214" x2="146" y2="216" {...SOFT} strokeWidth={2} />
          <line x1="186" y1="216" x2="194" y2="214" {...SOFT} strokeWidth={2} />
          {/* Ausência de ligamento intermetatarsal 1–2 (marcada) */}
          <line x1="118" y1="176" x2="147" y2="182" stroke="var(--cortical)" strokeWidth={2} strokeDasharray="3 4" className="fx-line" />
          <text x="132" y="168" style={labelStyle} textAnchor="middle">sem lig. 1–2</text>
          <text x="60" y="192" style={labelStyle} textAnchor="end">lig. de</text>
          <text x="60" y="206" style={labelStyle} textAnchor="end">Lisfranc</text>
          <line x1="62" y1="196" x2="120" y2="196" stroke="var(--muted)" strokeWidth="1" />
          <text x="40" y="326" style={monoStyle}>o lig. de Lisfranc (C1→2ºMT) é o principal estabilizador plantar</text>
        </>
      ) : (
        <>
          {/* Chaves de colunas */}
          <path d="M78 70 L78 250" stroke="var(--teal)" strokeWidth={1.6} fill="none" />
          <path d="M362 70 L362 250" stroke="var(--teal)" strokeWidth={1.6} fill="none" />
          <text x="72" y="70" style={labelStyle} textAnchor="end">coluna</text>
          <text x="72" y="84" style={labelStyle} textAnchor="end">medial</text>
          <text x="72" y="150" style={labelStyle} textAnchor="end">(1º TMT)</text>
          <text x="240" y="60" style={labelStyle} textAnchor="middle">coluna média (2º–3º TMT) — rígida</text>
          <text x="370" y="70" style={labelStyle}>coluna</text>
          <text x="370" y="84" style={labelStyle}>lateral</text>
          <text x="370" y="150" style={labelStyle}>(4º–5º/cuboide)</text>
          {/* Realce do encaixe do 2º MT (mortise/keystone) */}
          <path d="M147 150 L147 200 L173 200 L173 150" fill="none" stroke="var(--amber)" strokeWidth={1.8} strokeDasharray="4 3" />
          <text x="160" y="326" style={monoStyle} textAnchor="middle">base do 2º MT recuada no mortise = "pedra angular"</text>
        </>
      )}
    </svg>
  );
};

/* -------------------------------------------------------------------------- */
/* 2. Sinais radiográficos — fleck sign / diástase em carga                     */
/* -------------------------------------------------------------------------- */
const SinaisRx: FC<FigureProps> = ({ variant = "fleck", className, title }) => {
  const carga = variant === "carga";
  return (
    <svg viewBox="0 0 480 340" preserveAspectRatio="xMidYMid meet" role="img" className={className}>
      <title>
        {title ??
          (carga
            ? "Diástase 1º–2º em radiografia com carga/estresse"
            : "Sinal do fleck: avulsão óssea no 1º–2º espaço")}
      </title>
      {carga ? (
        <>
          {/* Colunas com base do 1º MT deslocada medialmente e diástase */}
          <g transform="translate(-14 0)">
            <rect x="82" y="184" width="46" height="64" rx="7" {...BONE} />
            <path d={mt(105, 60, 150, 180)} {...BONE} />
          </g>
          {/* 2º MT e demais em posição */}
          <rect x="144" y="204" width="42" height="46" rx="7" {...BONE} />
          <rect x="192" y="190" width="44" height="60" rx="7" {...BONE} />
          <path d={mt(160, 52, 150, 200)} {...BONE} />
          <path d={mt(213, 58, 152, 182)} {...BONE} />
          {/* Medida da diástase (amber) */}
          <line x1="98" y1="176" x2="147" y2="182" stroke="var(--amber)" strokeWidth={2} />
          <line x1="98" y1="170" x2="98" y2="184" stroke="var(--amber)" strokeWidth={1.4} />
          <line x1="147" y1="176" x2="147" y2="190" stroke="var(--amber)" strokeWidth={1.4} />
          <text x="110" y="150" style={monoStyle} textAnchor="middle">&gt; 2 mm</text>
          {/* Também alargamento C1–C2 */}
          <circle cx="135" cy="216" r="10" fill="none" stroke="var(--cortical)" strokeWidth={2} className="fx-line" />
          <text x="240" y="300" style={labelStyle} textAnchor="middle">carga/estresse desmascara a instabilidade</text>
          <text x="40" y="326" style={monoStyle}>diástase 1º MT–2º MT e alargamento C1–C2 sob carga</text>
        </>
      ) : (
        <>
          {/* Bases do 1º e 2º MT + cuneiforme medial, com fragmento avulso */}
          <rect x="82" y="184" width="46" height="64" rx="7" {...BONE} />
          <rect x="144" y="204" width="42" height="46" rx="7" {...BONE} />
          <path d={mt(105, 90, 150, 180)} {...BONE} />
          <path d={mt(160, 82, 150, 200)} {...BONE} />
          {/* Ligamento de Lisfranc parcialmente rompido */}
          <path d="M124 200 L138 194" {...SOFT} strokeWidth={4} />
          {/* Fleck: pequeno fragmento ósseo no 1º–2º espaço */}
          <path d="M138 186 l8 -3 l4 6 l-7 4 Z" fill="var(--surface)" stroke="var(--cortical)" strokeWidth={2} className="fx-line" />
          <circle cx="143" cy="188" r="16" fill="none" stroke="var(--cortical)" strokeWidth={1.6} strokeDasharray="4 3" className="fx-line" />
          <line x1="200" y1="140" x2="150" y2="184" stroke="var(--muted)" strokeWidth="1" />
          <text x="206" y="138" style={labelStyle}>"fleck sign"</text>
          <text x="206" y="152" style={labelStyle}>(avulsão do lig.</text>
          <text x="206" y="166" style={labelStyle}>de Lisfranc)</text>
          <text x="40" y="326" style={monoStyle}>fragmento avulso no 1º–2º espaço = patognomônico</text>
        </>
      )}
    </svg>
  );
};

/* -------------------------------------------------------------------------- */
/* 3. Classificação de Myerson (Quénu-Küss modificada) — A / B / C            */
/* -------------------------------------------------------------------------- */
const Classificacao: FC<FigureProps> = ({ variant = "A", className, title }) => {
  const v = (variant || "A").toUpperCase();
  const desc =
    v === "B"
      ? "Tipo B: incongruência parcial (uma coluna) — B1 medial, B2 lateral"
      : v === "C"
      ? "Tipo C: divergente — 1º MT medial + demais lateral"
      : "Tipo A: incongruência total — todos os MT no mesmo sentido";
  return (
    <svg viewBox="0 0 480 340" preserveAspectRatio="xMidYMid meet" role="img" className={className}>
      <title>{title ?? desc}</title>
      {/* Fileira dos cuneiformes/cuboide (referência fixa) */}
      <rect x="82" y="200" width="46" height="58" rx="7" {...BONE2} />
      <rect x="144" y="212" width="42" height="46" rx="7" {...BONE2} />
      <rect x="192" y="204" width="44" height="54" rx="7" {...BONE2} />
      <path d="M244 258 L348 254 Q356 224 348 196 L246 198 Q240 226 244 258 Z" {...BONE2} />

      {/* Metatarsos com deslocamento conforme o tipo */}
      {MTS.map((m, i) => {
        // dx por tipo/coluna
        let dx = 0;
        if (v === "A") dx = 16; // todos lateral (mesmo sentido)
        else if (v === "B") dx = i === 0 ? -16 : 4; // B1 medial do 1º MT
        else if (v === "C") dx = i === 0 ? -18 : 16; // divergente
        const displaced = Math.abs(dx) > 6;
        return (
          <g key={i} transform={`translate(${dx} 0)`}>
            <path d={mt(m.cx, m.headTop, m.baseTop, m.baseBottom)} {...(displaced ? BONE : BONE2)} />
          </g>
        );
      })}

      {/* Setas de deslocamento (amber) */}
      {v === "A" && (
        <g stroke="var(--amber)" strokeWidth={2.4} fill="var(--amber)">
          <line x1="150" y1="120" x2="185" y2="120" />
          <polygon points="185,120 175,115 175,125" />
        </g>
      )}
      {v === "B" && (
        <g stroke="var(--amber)" strokeWidth={2.4} fill="var(--amber)">
          <line x1="120" y1="120" x2="85" y2="120" />
          <polygon points="85,120 95,115 95,125" />
        </g>
      )}
      {v === "C" && (
        <g stroke="var(--amber)" strokeWidth={2.4} fill="var(--amber)">
          <line x1="110" y1="120" x2="75" y2="120" />
          <polygon points="75,120 85,115 85,125" />
          <line x1="190" y1="120" x2="225" y2="120" />
          <polygon points="225,120 215,115 215,125" />
        </g>
      )}

      {/* Linha de congruência (borda medial 2º MT × borda medial C2) */}
      <line x1="147" y1="150" x2="147" y2="212" stroke="var(--cortical)" strokeWidth={1.6} strokeDasharray="4 3" className="fx-line" />

      <text x="240" y="300" style={monoStyle} textAnchor="middle">
        {v === "A" ? "A — homolateral (total)" : v === "B" ? "B — parcial (B1/B2)" : "C — divergente (C1/C2)"}
      </text>
      <text x="240" y="322" style={labelStyle} textAnchor="middle">{desc}</text>
    </svg>
  );
};

/* -------------------------------------------------------------------------- */
/* 4. Via de acesso — dupla incisão dorsal                                     */
/* -------------------------------------------------------------------------- */
const ViaDorsal: FC<FigureProps> = ({ className, title }) => (
  <svg viewBox="0 0 480 340" preserveAspectRatio="xMidYMid meet" role="img" className={className}>
    <title>{title ?? "Dupla incisão dorsal e feixe neurovascular em risco"}</title>
    <MidfootSkeleton labels={false} />
    {/* Incisão 1: sobre o 1º–2º espaço (acesso ao 1º e 2º TMT) */}
    <line x1="134" y1="70" x2="134" y2="250" stroke="var(--cortical)" strokeWidth={2.6} className="fx-line" strokeDasharray="7 5" />
    {/* Incisão 2: sobre o 4º MT (acesso ao 3º/4º TMT) */}
    <line x1="248" y1="80" x2="248" y2="248" stroke="var(--cortical)" strokeWidth={2.6} className="fx-line" strokeDasharray="7 5" />
    {/* Artéria dorsal do pé + nervo fibular profundo (1º espaço) */}
    <path d="M150 70 Q142 160 150 250" stroke="var(--amber)" strokeWidth={2.2} fill="none" strokeDasharray="3 4" />
    <text x="196" y="120" style={labelStyle}>a. dorsal do pé /</text>
    <text x="196" y="134" style={labelStyle}>n. fibular profundo</text>
    <line x1="150" y1="128" x2="192" y2="128" stroke="var(--muted)" strokeWidth="1" />
    <text x="112" y="60" style={labelStyle} textAnchor="middle">incisão 1</text>
    <text x="256" y="70" style={labelStyle} textAnchor="middle">incisão 2</text>
    <text x="40" y="326" style={monoStyle}>2 incisões longitudinais; ponte de pele ≥ 3 cm p/ evitar necrose</text>
  </svg>
);

/* -------------------------------------------------------------------------- */
/* 5. Passo — redução do 2º MT no mortise                                      */
/* -------------------------------------------------------------------------- */
const PassoReducao: FC<FigureProps> = ({ className, title }) => (
  <svg viewBox="0 0 480 340" preserveAspectRatio="xMidYMid meet" role="img" className={className}>
    <title>{title ?? "Redução da base do 2º metatarso na pedra angular"}</title>
    {/* Cuneiformes de referência */}
    <rect x="82" y="200" width="46" height="58" rx="7" {...BONE} />
    <rect x="144" y="216" width="42" height="46" rx="7" {...BONE} />
    <rect x="192" y="204" width="44" height="54" rx="7" {...BONE} />
    {/* 1º MT reduzido */}
    <path d={mt(105, 70, 150, 190)} {...BONE} />
    {/* 2º MT a ser reduzido (posição-alvo) */}
    <path d={mt(160, 62, 150, 210)} {...BONE} />
    {/* Pinça pontiaguda de redução: cuneiforme medial → base do 2º MT */}
    <g stroke="var(--teal)" strokeWidth={2.6} fill="none">
      <path d="M96 240 L150 196" />
      <path d="M96 254 L150 208" />
      <circle cx="94" cy="247" r="8" />
    </g>
    {/* Vetor de redução (amber) */}
    <line x1="188" y1="188" x2="164" y2="192" stroke="var(--amber)" strokeWidth={2.2} />
    <polygon points="164,192 174,187 174,197" fill="var(--amber)" />
    {/* Linha de congruência restaurada (borda medial 2º MT = borda medial C2) */}
    <line x1="147" y1="150" x2="147" y2="216" stroke="var(--cortical)" strokeWidth={1.6} strokeDasharray="4 3" className="fx-line" />
    <text x="150" y="132" style={labelStyle} textAnchor="middle">alinhar borda medial</text>
    <text x="150" y="146" style={labelStyle} textAnchor="middle">2º MT × C2</text>
    <text x="40" y="326" style={monoStyle}>pinça do cuneiforme medial à base do 2º MT restaura a chave</text>
  </svg>
);

/* -------------------------------------------------------------------------- */
/* 6. Fixação — parafuso transarticular / placa dorsal em ponte / artrodese    */
/* -------------------------------------------------------------------------- */
const Fixacao: FC<FigureProps> = ({ variant = "parafuso", className, title }) => {
  const placa = variant === "placa";
  const artro = variant === "artrodese";
  return (
    <svg viewBox="0 0 480 340" preserveAspectRatio="xMidYMid meet" role="img" className={className}>
      <title>
        {title ??
          (placa
            ? "Placa dorsal em ponte sobre a articulação tarsometatársica"
            : artro
            ? "Artrodese primária das colunas medial e média"
            : "Fixação com parafuso transarticular (parafuso de Lisfranc)")}
      </title>
      {/* Cuneiformes + cuboide */}
      <rect x="82" y="200" width="46" height="58" rx="7" {...BONE} />
      <rect x="144" y="216" width="42" height="46" rx="7" {...BONE} />
      <rect x="192" y="204" width="44" height="54" rx="7" {...BONE} />
      <path d="M244 258 L348 254 Q356 224 348 196 L246 198 Q240 226 244 258 Z" {...BONE2} />
      {/* Metatarsos 1–4 reduzidos */}
      <path d={mt(105, 70, 150, 190)} {...BONE} />
      <path d={mt(160, 62, 150, 210)} {...BONE} />
      <path d={mt(213, 66, 152, 192)} {...BONE} />
      <path d={mt(263, 74, 154, 188)} {...BONE} />

      {artro ? (
        <>
          {/* Colunas medial e média fundidas: linhas articulares apagadas + parafusos de compressão */}
          <g stroke="var(--teal)" strokeWidth={3} fill="none">
            <line x1="96" y1="248" x2="112" y2="150" />
            <line x1="120" y1="240" x2="158" y2="176" />
            <line x1="176" y1="240" x2="210" y2="176" />
          </g>
          {[
            [96, 248], [120, 240], [176, 240],
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r={5} fill="var(--teal)" />
          ))}
          {/* Coluna lateral (4º–5º/cuboide) preservada */}
          <path d="M248 250 Q244 224 250 198" stroke="var(--ink-soft)" strokeWidth={2} fill="none" strokeDasharray="4 3" />
          <text x="300" y="150" style={labelStyle} textAnchor="middle">coluna lateral</text>
          <text x="300" y="164" style={labelStyle} textAnchor="middle">poupada (móvel)</text>
          <text x="40" y="326" style={monoStyle}>artrodese das colunas medial+média; lateral preservada</text>
        </>
      ) : placa ? (
        <>
          {/* Placas dorsais em ponte (1º e 2º TMT) fixadas fora da cartilagem */}
          {[105, 160].map((cx, i) => (
            <g key={i}>
              <rect x={cx - 7} y="150" width="14" height="90" rx="4" {...SOFT} strokeWidth={2.6} fill="var(--teal)" fillOpacity={0.18} />
              <circle cx={cx} cy="162" r={3.4} fill="var(--teal)" />
              <circle cx={cx} cy="228" r={3.4} fill="var(--teal)" />
            </g>
          ))}
          {/* Nível articular (poupado) */}
          <line x1="88" y1="192" x2="236" y2="196" stroke="var(--amber)" strokeWidth={1.4} strokeDasharray="4 3" />
          <text x="300" y="150" style={labelStyle} textAnchor="middle">ponte dorsal</text>
          <text x="300" y="164" style={labelStyle} textAnchor="middle">não viola cartilagem</text>
          <text x="40" y="326" style={monoStyle}>placa dorsal em ponte: fixação sem parafuso transarticular</text>
        </>
      ) : (
        <>
          {/* Parafuso de Lisfranc: cuneiforme medial → base do 2º MT (oblíquo) */}
          <g stroke="var(--teal)" strokeWidth={3} fill="none">
            <line x1="98" y1="248" x2="156" y2="196" />
          </g>
          {[104, 118, 132, 146].map((x, i) => (
            <line key={i} x1={x} y1={244 - i * 12 + 2} x2={x + 6} y2={244 - i * 12 - 6} stroke="var(--teal)" strokeWidth={1.3} />
          ))}
          <circle cx="96" cy="250" r="6" fill="var(--teal)" />
          {/* Parafusos transarticulares 1º e 3º TMT */}
          <line x1="100" y1="230" x2="110" y2="160" stroke="var(--teal)" strokeWidth={3} />
          <circle cx="100" cy="230" r="5" fill="var(--teal)" />
          <line x1="206" y1="230" x2="216" y2="164" stroke="var(--teal)" strokeWidth={3} />
          <circle cx="206" cy="230" r="5" fill="var(--teal)" />
          <text x="230" y="210" style={labelStyle}>parafuso de</text>
          <text x="230" y="224" style={labelStyle}>Lisfranc (C1→2ºMT)</text>
          <line x1="156" y1="200" x2="228" y2="212" stroke="var(--muted)" strokeWidth="1" />
          <text x="40" y="326" style={monoStyle}>parafuso transarticular posicional + parafusos 1º/2º/3º TMT</text>
        </>
      )}
    </svg>
  );
};

/* -------------------------------------------------------------------------- */
/* 7. Passo — trajeto do parafuso de Lisfranc                                   */
/* -------------------------------------------------------------------------- */
const PassoParafuso: FC<FigureProps> = ({ className, title }) => (
  <svg viewBox="0 0 480 320" preserveAspectRatio="xMidYMid meet" role="img" className={className}>
    <title>{title ?? "Trajeto oblíquo do parafuso de Lisfranc (cuneiforme medial à base do 2º MT)"}</title>
    {/* Cuneiforme medial (C1) e base do 2º MT ampliados */}
    <rect x="90" y="180" width="70" height="90" rx="10" {...BONE} />
    <path d="M210 60 L250 60 L250 180 L200 200 L190 120 Z" {...BONE} />
    <text x="125" y="230" style={labelStyle} textAnchor="middle">C1</text>
    <text x="228" y="130" style={labelStyle} textAnchor="middle">base 2º MT</text>
    {/* Trajeto do parafuso */}
    <line x1="110" y1="252" x2="228" y2="150" stroke="var(--teal)" strokeWidth={3.4} />
    <circle cx="108" cy="254" r="8" fill="var(--teal)" />
    {/* Roscas esquemáticas */}
    {[128, 150, 172, 194].map((x, i) => (
      <line key={i} x1={x} y1={252 - i * 19 + 4} x2={x + 7} y2={252 - i * 19 - 8} stroke="var(--teal)" strokeWidth={1.4} />
    ))}
    {/* Ângulo do trajeto (amber) */}
    <path d="M110 252 L170 252" stroke="var(--amber)" strokeWidth={1.6} />
    <path d="M110 252 L166 232" stroke="var(--amber)" strokeWidth={1.6} />
    <text x="176" y="248" style={monoStyle}>~ oblíquo dorso-distal</text>
    <text x="40" y="306" style={monoStyle}>parafuso posicional 3,5–4,0 mm da base medial do C1 ao 2º MT</text>
  </svg>
);

/* -------------------------------------------------------------------------- */
export const figures: Record<string, FC<FigureProps>> = {
  "lesao-lisfranc:anatomia": Anatomia,
  "lesao-lisfranc:rx": SinaisRx,
  "lesao-lisfranc:classificacao": Classificacao,
  "lesao-lisfranc:via-acesso": ViaDorsal,
  "lesao-lisfranc:step-reducao": PassoReducao,
  "lesao-lisfranc:fixacao": Fixacao,
  "lesao-lisfranc:step-parafuso": PassoParafuso,
};
