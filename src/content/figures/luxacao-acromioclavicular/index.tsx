import type { FC } from "react";
import type { FigureProps } from "../../../types/topic";

/* ============================================================================
   Luxação acromioclavicular (AC) — figuras esquemáticas, line-art 2 tons,
   SVG original (sem copyright).
   Ossos: stroke var(--ink-soft), fill var(--surface).
   Ligamento/implante/enxerto: stroke var(--teal).
   Estrutura rompida / traço: stroke var(--cortical) + "fx-line".
   Medidas/limiares/setas de medida: var(--amber). Rótulos: var(--muted).
   IDs prefixados por "luxacao-acromioclavicular:" no registro FIGURES.
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

const lig = {
  fill: "none",
  stroke: "var(--teal)",
  strokeWidth: 2.6,
  strokeLinecap: "round" as const,
};

const ligTorn = {
  fill: "none" as const,
  stroke: "var(--cortical)",
  strokeWidth: 2.4,
  strokeLinecap: "round" as const,
  strokeDasharray: "4 4",
};

/* -------------------------------------------------------------------------- */
/* 1. Anatomia — articulação AC, ligamentos AC (capsulares) e CC (conoide +   */
/*    trapezoide); estabilizadores horizontal vs. vertical.                    */
/* -------------------------------------------------------------------------- */
export const Anatomia: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 380 300"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>
      {title ??
        "Anatomia da articulação acromioclavicular — ligamentos AC (capsulares) e coracoclaviculares (conoide e trapezoide)"}
    </title>

    {/* clavícula (curva em S, horizontal) */}
    <path
      {...boneStyle}
      d="M24 96 C 70 80, 120 80, 168 92 C 200 100, 226 104, 246 106 L 246 128 C 224 126, 198 122, 166 114 C 120 104, 72 104, 26 118 Z"
    />
    <text x="70" y="72" {...label} textAnchor="middle">Clavícula</text>

    {/* acrômio (parte lateral da escápula) */}
    <path
      {...boneStyle}
      fill="var(--surface-2, var(--surface))"
      d="M262 96 C 300 92, 338 100, 352 118 C 356 132, 350 150, 330 152 L 268 150 C 258 150, 256 132, 258 116 Z"
    />
    <text x="322" y="86" {...label} textAnchor="middle">Acrômio</text>

    {/* espaço articular AC */}
    <line x1="252" y1="98" x2="252" y2="150" stroke="var(--ink-soft)" strokeWidth="1.2" strokeDasharray="3 3" />
    <text x="252" y="176" {...mono} textAnchor="middle">art. AC</text>

    {/* processo coracoide (gancho, abaixo/medial ao acrômio) */}
    <path
      {...boneStyle}
      fill="var(--surface-2, var(--surface))"
      d="M196 168 C 190 190, 196 214, 214 220 C 226 224, 236 216, 232 206 C 224 210, 216 204, 216 192 C 216 180, 210 172, 202 168 Z"
    />
    <text x="176" y="222" {...label} textAnchor="end">Coracoide</text>

    {/* ligamento AC superior (capsular) — estabilizador HORIZONTAL, sobre a junta */}
    <path {...lig} d="M234 92 C 246 84, 262 84, 272 92" />
    <text x="252" y="74" {...mono} textAnchor="middle" fill="var(--teal)">lig. AC (horizontal)</text>

    {/* ligamentos CC — conoide (medial, mais vertical) e trapezoide (lateral) */}
    {/* conoide */}
    <path {...lig} d="M206 168 C 198 150, 190 134, 182 120" />
    {/* trapezoide */}
    <path {...lig} d="M222 172 C 224 154, 224 138, 222 122" />
    <text x="150" y="150" {...mono} textAnchor="middle" fill="var(--teal)">conoide</text>
    <text x="150" y="164" {...mono} textAnchor="middle" fill="var(--teal)">trapezoide</text>
    <text x="150" y="132" {...label} textAnchor="middle">CC (vertical)</text>

    {/* linha-guia conoide/trapezoide */}
    <path d="M172 154 L 200 158" stroke="var(--ink-soft)" strokeWidth="1" fill="none" />
    <path d="M172 160 L 216 168" stroke="var(--ink-soft)" strokeWidth="1" fill="none" />

    <text x="190" y="292" {...label} textAnchor="middle">
      AC controla o plano horizontal (ântero-posterior); CC controla o vertical (superior)
    </text>
  </svg>
);

/* -------------------------------------------------------------------------- */
/* 2. Rockwood I–VI — deslocamento progressivo e estado dos ligamentos.        */
/*    variants: "I" | "II" | "III" | "IV" | "V" | "VI"                         */
/* -------------------------------------------------------------------------- */
export const Rockwood: FC<FigureProps> = ({ className, title, variant = "I" }) => {
  const valid = ["I", "II", "III", "IV", "V", "VI"];
  const v = valid.includes(variant) ? variant : "I";

  /* dy = deslocamento vertical da extremidade lateral da clavícula
     (negativo = superior, na tela para cima). Estado dos ligamentos. */
  const cfg: Record<
    string,
    { dy: number; acTorn: boolean; ccTorn: boolean; note: string; posterior?: boolean }
  > = {
    I: { dy: 0, acTorn: false, ccTorn: false, note: "entorse AC; sem desvio" },
    II: { dy: -8, acTorn: true, ccTorn: false, note: "AC rompido; CC íntegros; subluxação" },
    III: { dy: -28, acTorn: true, ccTorn: true, note: "AC e CC rompidos; CC ↑ 25–100%" },
    IV: { dy: -18, acTorn: true, ccTorn: true, note: "desvio POSTERIOR (trapézio)", posterior: true },
    V: { dy: -52, acTorn: true, ccTorn: true, note: "CC ↑ 100–300%; fáscia rompida" },
    VI: { dy: 34, acTorn: true, ccTorn: true, note: "subcoracoide (inferior) — raro" },
  };
  const c = cfg[v];

  /* clavícula: medial (30,110) → lateral (200, 110 + dy) */
  const mx = 30, my = 110, lx = 200, ly = 110 + c.dy;
  const yAt = (x: number) => my + c.dy * ((x - mx) / (lx - mx));

  const acStyle = c.acTorn ? ligTorn : lig;
  const ccStyle = c.ccTorn ? ligTorn : lig;

  return (
    <svg
      viewBox="0 0 300 250"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `Rockwood ${v} — ${c.note}`}</title>

      {/* acrômio (fixo) */}
      <path
        {...boneStyle}
        fill="var(--surface-2, var(--surface))"
        d="M214 116 C 250 112, 282 120, 288 138 C 290 152, 282 166, 262 166 L 218 164 C 210 164, 210 148, 212 130 Z"
      />
      {/* coracoide (fixo) */}
      <path
        {...boneStyle}
        fill="var(--surface-2, var(--surface))"
        d="M150 176 C 144 196, 150 214, 166 218 C 176 220, 184 214, 180 206 C 172 208, 166 202, 166 192 C 166 182, 160 178, 156 176 Z"
      />

      {/* clavícula (bar via 2 stroked lines: outline + fill) */}
      <line x1={mx} y1={my} x2={lx} y2={ly} stroke="var(--ink-soft)" strokeWidth="20" strokeLinecap="round" />
      <line x1={mx} y1={my} x2={lx} y2={ly} stroke="var(--surface)" strokeWidth="15" strokeLinecap="round" />

      {/* ligamento AC (bridge sobre a junta) */}
      <path {...acStyle} d={`M${lx} ${ly - 8} C ${lx + 8} ${ly - 16}, 222 118, 224 122`} />

      {/* ligamentos CC — conoide (medial) e trapezoide (lateral) até a face inferior da clavícula */}
      <path {...ccStyle} d={`M156 178 C 152 162, 150 148, 150 ${yAt(150) + 9}`} />
      <path {...ccStyle} d={`M170 180 C 172 164, 172 150, 172 ${yAt(172) + 9}`} />

      {/* seta de desvio posterior (tipo IV) */}
      {c.posterior && (
        <>
          <path d={`M${lx} ${ly - 22} L ${lx - 34} ${ly - 22}`} stroke="var(--amber)" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d={`M${lx - 34} ${ly - 22} l8 -4 m-8 4 l8 4`} stroke="var(--amber)" strokeWidth="2" fill="none" strokeLinecap="round" />
          <text x={lx - 40} y={ly - 30} {...mono} textAnchor="end" fill="var(--amber)">posterior</text>
        </>
      )}

      {/* seta vertical do desvio (III/V/VI) */}
      {(v === "III" || v === "V" || v === "VI") && (
        <>
          <line x1="214" y1="110" x2="214" y2={ly} stroke="var(--amber)" strokeWidth="1.4" strokeDasharray="3 3" />
          <text x="220" y={(110 + ly) / 2} {...mono} textAnchor="start" fill="var(--amber)">CC ↑</text>
        </>
      )}

      <text x="26" y="30" {...mono} textAnchor="start">Rockwood {v}</text>
      <text x="150" y="238" {...label} textAnchor="middle">{c.note}</text>
    </svg>
  );
};

/* -------------------------------------------------------------------------- */
/* 3. Mensuração — distância coracoclavicular (CC) na incidência de Zanca,     */
/*    comparação com o lado contralateral.                                     */
/* -------------------------------------------------------------------------- */
export const Mensuracao: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 340 260"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>
      {title ??
        "Mensuração da distância coracoclavicular (incidência de Zanca) e comparação com o lado contralateral"}
    </title>

    {/* --- lado normal (esquerda) --- */}
    <text x="80" y="28" {...mono} textAnchor="middle">Normal</text>
    {/* clavícula */}
    <line x1="20" y1="70" x2="130" y2="70" stroke="var(--ink-soft)" strokeWidth="14" strokeLinecap="round" />
    <line x1="20" y1="70" x2="130" y2="70" stroke="var(--surface)" strokeWidth="10" strokeLinecap="round" />
    {/* coracoide */}
    <circle cx="96" cy="118" r="9" {...boneStyle} fill="var(--surface-2, var(--surface))" />
    {/* distância CC */}
    <line x1="150" y1="70" x2="150" y2="112" stroke="var(--amber)" strokeWidth="1.6" />
    <path d="M150 70 l-4 8 m4 -8 l4 8" stroke="var(--amber)" strokeWidth="1.6" fill="none" strokeLinecap="round" />
    <path d="M150 112 l-4 -8 m4 8 l4 -8" stroke="var(--amber)" strokeWidth="1.6" fill="none" strokeLinecap="round" />
    <text x="158" y="94" {...mono} textAnchor="start" fill="var(--amber)">≈ 11–13 mm</text>

    {/* --- lado lesado (direita) --- */}
    <text x="256" y="28" {...mono} textAnchor="middle">Lesado</text>
    {/* clavícula elevada */}
    <line x1="196" y1="48" x2="306" y2="48" stroke="var(--ink-soft)" strokeWidth="14" strokeLinecap="round" />
    <line x1="196" y1="48" x2="306" y2="48" stroke="var(--surface)" strokeWidth="10" strokeLinecap="round" />
    {/* coracoide (mesma altura do normal) */}
    <circle cx="272" cy="118" r="9" {...boneStyle} fill="var(--surface-2, var(--surface))" />
    {/* distância CC aumentada */}
    <line x1="322" y1="48" x2="322" y2="112" stroke="var(--cortical)" strokeWidth="1.8" />
    <path d="M322 48 l-4 8 m4 -8 l4 8" stroke="var(--cortical)" strokeWidth="1.8" fill="none" strokeLinecap="round" />
    <path d="M322 112 l-4 -8 m4 8 l4 -8" stroke="var(--cortical)" strokeWidth="1.8" fill="none" strokeLinecap="round" />
    <text x="318" y="88" {...mono} textAnchor="end" fill="var(--cortical)">CC ↑</text>

    {/* linha de referência da coracoide */}
    <line x1="20" y1="130" x2="320" y2="130" stroke="var(--ink-soft)" strokeWidth="1" strokeDasharray="2 4" />

    <text x="170" y="176" {...label} textAnchor="middle">
      CC &gt; 25% em relação ao lado oposto: ruptura (tipo III+)
    </text>
    <text x="170" y="198" {...label} textAnchor="middle">
      Zanca: raio 10–15° cefálico · comparar os lados
    </text>
    <text x="170" y="226" {...mono} textAnchor="middle">
      tipo IV: perfil axilar (desvio posterior) · tipo VI: CC ↓ (subcoracoide)
    </text>
  </svg>
);

/* -------------------------------------------------------------------------- */
/* 4. Via de acesso — anterossuperior, expondo clavícula distal e coracoide.  */
/* -------------------------------------------------------------------------- */
export const Via: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 320 280"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>
      {title ??
        "Via de acesso anterossuperior — exposição da clavícula distal e do processo coracoide para reconstrução CC"}
    </title>

    {/* silhueta do ombro (vista anterossuperior) */}
    <path
      {...boneStyle}
      fill="var(--surface-2, var(--surface))"
      d="M20 150 C 40 120, 80 96, 130 92 C 190 88, 250 104, 290 140 C 300 152, 300 180, 288 196 C 250 216, 190 224, 130 220 C 80 216, 40 196, 22 176 Z"
    />

    {/* clavícula (referência óssea) */}
    <line x1="60" y1="128" x2="196" y2="120" stroke="var(--ink-soft)" strokeWidth="12" strokeLinecap="round" />
    <line x1="60" y1="128" x2="196" y2="120" stroke="var(--surface)" strokeWidth="8" strokeLinecap="round" />
    <text x="90" y="108" {...label} textAnchor="middle">clavícula distal</text>

    {/* coracoide */}
    <circle cx="176" cy="162" r="10" {...boneStyle} fill="var(--surface)" />
    <text x="176" y="192" {...label} textAnchor="middle">coracoide</text>

    {/* incisão (em sabre/estrela ao longo de Langer, sobre a AC → coracoide) */}
    <path d="M198 116 C 190 132, 182 148, 176 162" stroke="var(--cortical)" strokeWidth="1.8" fill="none" strokeDasharray="6 4" />
    <text x="238" y="122" {...mono} textAnchor="start" fill="var(--cortical)">incisão</text>

    {/* estruturas em risco */}
    <text x="30" y="242" {...label} textAnchor="start">Em risco:</text>
    <text x="30" y="258" {...mono} textAnchor="start">v. cefálica · n. musculocutâneo · plexo/a. axilar (medial à coracoide)</text>
  </svg>
);

/* -------------------------------------------------------------------------- */
/* 5. Passo — redução da clavícula.                                            */
/* -------------------------------------------------------------------------- */
export const StepReducao: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 320 240"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Passo — redução: rebaixar a clavícula e elevar a escápula/braço para restaurar a relação AC"}</title>

    {/* acrômio */}
    <path {...boneStyle} fill="var(--surface-2, var(--surface))" d="M214 132 C 250 128, 282 136, 288 154 C 290 168, 282 180, 262 180 L 218 178 C 210 178, 210 162, 212 146 Z" />
    {/* coracoide */}
    <path {...boneStyle} fill="var(--surface-2, var(--surface))" d="M150 190 C 144 208, 150 224, 166 226 L 178 218 C 172 214, 166 208, 166 198 Z" />

    {/* clavícula deslocada (superior, tracejada) */}
    <line x1="30" y1="96" x2="200" y2="70" stroke="var(--ink-soft)" strokeWidth="14" strokeLinecap="round" opacity="0.35" />
    {/* clavícula reduzida (alvo) */}
    <line x1="30" y1="120" x2="200" y2="126" stroke="var(--ink-soft)" strokeWidth="16" strokeLinecap="round" />
    <line x1="30" y1="120" x2="200" y2="126" stroke="var(--surface)" strokeWidth="12" strokeLinecap="round" />

    {/* seta: rebaixar a clavícula */}
    <path d="M150 78 L 150 116" stroke="var(--amber)" strokeWidth="2.2" fill="none" strokeLinecap="round" />
    <path d="M150 116 l-5 -8 m5 8 l5 -8" stroke="var(--amber)" strokeWidth="2.2" fill="none" strokeLinecap="round" />
    <text x="150" y="60" {...mono} textAnchor="middle" fill="var(--amber)">rebaixar clavícula</text>

    {/* seta: elevar escápula/braço */}
    <path d="M250 200 L 250 160" stroke="var(--amber)" strokeWidth="2.2" fill="none" strokeLinecap="round" />
    <path d="M250 160 l-5 8 m5 -8 l5 8" stroke="var(--amber)" strokeWidth="2.2" fill="none" strokeLinecap="round" />
    <text x="250" y="220" {...mono} textAnchor="middle" fill="var(--amber)">elevar braço</text>

    <text x="160" y="20" {...label} textAnchor="middle">A deformidade é a escápula caindo sob a clavícula — reduzir é reaproximar os dois</text>
  </svg>
);

/* -------------------------------------------------------------------------- */
/* 6. Passo — reconstrução coracoclavicular (alça suspensória / enxerto).      */
/* -------------------------------------------------------------------------- */
export const StepCcReconstrucao: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 300 280"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>
      {title ??
        "Passo — reconstrução coracoclavicular: alça suspensória/enxerto entre a coracoide e a clavícula com botões corticais"}
    </title>

    {/* clavícula com túnel */}
    <line x1="40" y1="90" x2="240" y2="90" stroke="var(--ink-soft)" strokeWidth="22" strokeLinecap="round" />
    <line x1="40" y1="90" x2="240" y2="90" stroke="var(--surface)" strokeWidth="17" strokeLinecap="round" />
    <circle cx="150" cy="90" r="4.5" fill="var(--surface-2, var(--surface))" stroke="var(--ink-soft)" strokeWidth="1.2" />
    <text x="70" y="66" {...label} textAnchor="middle">clavícula (túnel)</text>

    {/* coracoide */}
    <path
      {...boneStyle}
      fill="var(--surface-2, var(--surface))"
      d="M126 196 C 118 220, 126 244, 152 250 C 172 254, 190 244, 182 230 C 168 236, 152 228, 150 208 C 149 200, 138 194, 126 196 Z"
    />
    <text x="118" y="252" {...label} textAnchor="end">coracoide</text>

    {/* alça suspensória: botão sobre a clavícula → túnel → alça sob a coracoide */}
    <path {...lig} d="M150 84 L 150 90" />
    <path {...lig} d="M144 96 C 138 130, 134 168, 140 200 C 146 222, 168 224, 176 206" />
    <path {...lig} d="M156 96 C 162 130, 166 168, 160 200" />
    {/* botão cortical superior */}
    <rect x="138" y="76" width="24" height="8" rx="3" fill="var(--teal)" />
    <text x="196" y="150" {...mono} textAnchor="start" fill="var(--teal)">alça / enxerto CC</text>
    <text x="196" y="166" {...mono} textAnchor="start" fill="var(--teal)">(conoide + trapezoide)</text>

    <text x="150" y="274" {...label} textAnchor="middle">
      Reconstrução CC anatômica restaura o estabilizador vertical; enxerto favorece a fase crônica
    </text>
  </svg>
);

/* -------------------------------------------------------------------------- */
/* 7. Passo — fixação (placa-gancho: opção de estabilização).                  */
/* -------------------------------------------------------------------------- */
export const StepFixacao: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 320 240"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Passo — fixação com placa-gancho: placa na clavícula e gancho sob o acrômio"}</title>

    {/* clavícula */}
    <line x1="30" y1="96" x2="210" y2="96" stroke="var(--ink-soft)" strokeWidth="20" strokeLinecap="round" />
    <line x1="30" y1="96" x2="210" y2="96" stroke="var(--surface)" strokeWidth="15" strokeLinecap="round" />
    {/* acrômio */}
    <path {...boneStyle} fill="var(--surface-2, var(--surface))" d="M236 120 C 268 116, 296 124, 302 142 C 304 156, 296 168, 276 168 L 240 166 C 232 166, 232 150, 234 134 Z" />

    {/* placa sobre a clavícula */}
    <rect x="60" y="82" width="150" height="10" rx="4" fill="var(--teal)" opacity="0.85" />
    {/* parafusos */}
    <circle cx="80" cy="87" r="3" fill="var(--surface)" stroke="var(--teal)" strokeWidth="1.4" />
    <circle cx="110" cy="87" r="3" fill="var(--surface)" stroke="var(--teal)" strokeWidth="1.4" />
    <circle cx="140" cy="87" r="3" fill="var(--surface)" stroke="var(--teal)" strokeWidth="1.4" />
    <circle cx="170" cy="87" r="3" fill="var(--surface)" stroke="var(--teal)" strokeWidth="1.4" />

    {/* gancho descendo por trás e sob o acrômio */}
    <path d="M210 88 C 232 90, 250 100, 252 128 C 253 146, 246 156, 258 160" stroke="var(--teal)" strokeWidth="4" fill="none" strokeLinecap="round" />

    <text x="120" y="66" {...label} textAnchor="middle" fill="var(--teal)">placa-gancho</text>
    <text x="270" y="196" {...mono} textAnchor="middle" fill="var(--teal)">gancho sub-acromial</text>
    <text x="160" y="222" {...label} textAnchor="middle">
      Reduz a junta, mas exige remoção; risco de erosão/osteólise subacromial (RCTs: sem ganho funcional)
    </text>
  </svg>
);

/* -------------------------------------------------------------------------- */
/* Registro: id prefixado -> componente.                                      */
/* -------------------------------------------------------------------------- */
export const figures: Record<string, FC<FigureProps>> = {
  "luxacao-acromioclavicular:anatomia": Anatomia,
  "luxacao-acromioclavicular:rockwood": Rockwood,
  "luxacao-acromioclavicular:mensuracao": Mensuracao,
  "luxacao-acromioclavicular:via": Via,
  "luxacao-acromioclavicular:step-reducao": StepReducao,
  "luxacao-acromioclavicular:step-cc-reconstrucao": StepCcReconstrucao,
  "luxacao-acromioclavicular:step-fixacao": StepFixacao,
};
