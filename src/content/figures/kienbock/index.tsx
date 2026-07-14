import type { FC } from "react";
import type { FigureProps } from "../../../types/topic";

/* ----------------------------------------------------------------------------
   Doença de Kienböck — osteonecrose do semilunar.
   Figuras esquemáticas originais (line-art 2 tons), fundamentadas em
   Rockwood & Green's Fractures in Adults, 10th ed. (2024) e Green's Operative
   Hand Surgery. Sem reprodução de material protegido. Cores apenas por CSS var.
   -------------------------------------------------------------------------- */

const bone = {
  fill: "var(--surface)",
  stroke: "var(--ink-soft)",
  strokeWidth: 1.8,
  strokeLinejoin: "round" as const,
};

const boneBack = {
  fill: "var(--surface-2, var(--surface))",
  stroke: "var(--ink-soft)",
  strokeWidth: 1.4,
  strokeLinejoin: "round" as const,
};

const label = {
  fill: "var(--muted)",
  fontFamily: "var(--font-body, sans-serif)",
  fontSize: 11,
};

const mono = {
  fill: "var(--ink)",
  fontFamily: "var(--font-mono, monospace)",
  fontSize: 11,
};

const teal = {
  fill: "none",
  stroke: "var(--teal)",
  strokeWidth: 3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const cortical = {
  fill: "none",
  stroke: "var(--cortical)",
  strokeWidth: 3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

type LunateState = "normal" | "esclerose" | "colapso" | "fragmentacao";

/* Semilunar em incidência coronal (PA). Origem local no centro do osso.
   `state` controla o preenchimento (esclerose/necrose) e a altura (colapso). */
function Lunate({
  cx,
  cy,
  scale = 1,
  state = "normal",
  ring = false,
}: {
  cx: number;
  cy: number;
  scale?: number;
  state?: LunateState;
  ring?: boolean;
}) {
  const flat = state === "colapso" || state === "fragmentacao";
  const h = flat ? 0.62 : 1;
  const fill =
    state === "fragmentacao"
      ? "var(--cortical)"
      : state === "esclerose"
        ? "var(--cortical-tint)"
        : "var(--surface)";
  const opacity = state === "fragmentacao" ? 0.4 : 1;
  // Contorno trapezoidal arredondado: base proximal convexa (embaixo,
  // articula o rádio), face distal côncava (em cima, recebe o capitato).
  const d = `M${-30} ${6 * h}
    C${-34} ${-8 * h} ${-24} ${-18 * h} ${-8} ${-19 * h}
    C${8} ${-20 * h} ${24} ${-16 * h} ${30} ${-4 * h}
    C${20} ${-12 * h} ${-16} ${-12 * h} ${-24} ${-2 * h}
    C${-14} ${4 * h} ${16} ${4 * h} ${30} ${-4 * h}
    C${33} ${8 * h} ${22} ${20 * h} ${2} ${21 * h}
    C${-18} ${22 * h} ${-28} ${16 * h} ${-30} ${6 * h} Z`;
  return (
    <g transform={`translate(${cx} ${cy}) scale(${scale})`}>
      <path d={d} fill={fill} fillOpacity={opacity} stroke="var(--ink-soft)" strokeWidth={1.8} strokeLinejoin="round" />
      {state === "esclerose" && (
        <path
          d={`M${-24} ${-2 * h}
            C${-14} ${4 * h} ${16} ${4 * h} ${30} ${-4 * h}
            C${33} ${8 * h} ${22} ${20 * h} ${2} ${21 * h}
            C${-18} ${22 * h} ${-28} ${16 * h} ${-30} ${6 * h} Z`}
          fill="var(--cortical)"
          opacity={0.35}
          stroke="none"
        />
      )}
      {state === "fragmentacao" && (
        <>
          <path d={`M${-14} ${-8 * h} L${-2} ${14 * h}`} stroke="var(--cortical)" strokeWidth={1.6} />
          <path d={`M${10} ${-10 * h} L${6} ${16 * h}`} stroke="var(--cortical)" strokeWidth={1.6} />
          <path d={`M${-24} ${4 * h} L${26} ${2 * h}`} stroke="var(--cortical)" strokeWidth={1.6} strokeDasharray="3 3" />
        </>
      )}
      {ring && (
        // Sinal do anel cortical: escafoide fletido visto de topo (perfil de rosca).
        <circle cx={-46} cy={2 * h} r={9} fill="none" stroke="var(--amber)" strokeWidth={2.4} />
      )}
    </g>
  );
}

/* ============================================================================
   1. Anatomia carpal — o semilunar entre rádio e capitato, e a irrigação frágil
   ========================================================================== */
export const Anatomy: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 470 330"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Anatomia do carpo com o semilunar entre o rádio e o capitato"}</title>

    {/* Rádio e ulna distais (proximais, embaixo em incidência PA) */}
    <path {...boneBack} d="M70 314 L70 236 C70 214 84 200 108 200 L172 200 C188 208 188 226 172 236 L112 240 C94 244 90 280 92 314 Z" />
    <path {...boneBack} d="M206 314 L208 246 C210 226 224 218 238 224 C252 230 250 252 242 264 L242 314 Z" />
    <text x="120" y="300" {...label}>rádio</text>
    <text x="222" y="304" {...label}>ulna</text>

    {/* Fileira proximal: escafoide (radial), semilunar (centro), piramidal (ulnar) */}
    <path {...bone} d="M112 172 C100 148 108 126 132 122 C150 120 162 134 158 156 C154 176 132 186 112 172 Z" />
    <text x="96" y="128" {...label} textAnchor="end">escafoide</text>

    <Lunate cx={190} cy={158} scale={1} state="normal" />
    <path {...teal} strokeWidth={2.2} d="M160 158 C168 176 212 176 220 158" />
    <text x="190" y="132" {...mono} textAnchor="middle">semilunar</text>
    <line x1="190" y1="136" x2="190" y2="146" stroke="var(--teal)" strokeWidth={1.4} />

    <path {...bone} d="M244 168 C232 150 238 130 258 128 C276 128 286 144 280 160 C274 176 256 182 244 168 Z" />
    <text x="288" y="150" {...label}>piramidal</text>

    {/* Fileira distal: trapézio, trapezoide, capitato, hamato */}
    <path {...bone} d="M104 108 C92 92 100 74 120 74 C136 74 146 88 140 104 C134 118 116 120 104 108 Z" />
    <text x="76" y="92" {...label} textAnchor="end">trapézio</text>
    <path {...bone} d="M150 100 C140 86 148 72 164 72 C178 72 186 86 180 100 C174 112 160 112 150 100 Z" />

    {/* Capitato — articula com o semilunar */}
    <path {...bone} d="M192 118 C178 96 186 72 210 70 C232 70 244 92 236 114 C228 134 206 138 192 118 Z" />
    <text x="212" y="96" {...label} textAnchor="middle">capitato</text>

    <path {...bone} d="M250 116 C240 98 248 82 266 82 C282 82 292 98 284 114 C278 128 260 130 250 116 Z" />
    <text x="292" y="104" {...label}>hamato</text>

    {/* Metacarpais esquemáticos */}
    {[110, 150, 196, 250].map((x, i) => (
      <line key={i} x1={x} y1={62} x2={x - 8 + i * 3} y2={30} stroke="var(--ink-soft)" strokeWidth={1.4} />
    ))}

    {/* Vetor de carga axial capitato → semilunar → rádio */}
    <path d="M212 74 C210 108 200 128 190 140" fill="none" stroke="var(--amber)" strokeWidth={2} strokeDasharray="5 4" markerEnd="url(#kbAnatArrow)" />
    <path d="M190 178 C190 190 190 198 190 202" fill="none" stroke="var(--amber)" strokeWidth={2} strokeDasharray="5 4" markerEnd="url(#kbAnatArrow)" />
    <defs>
      <marker id="kbAnatArrow" markerWidth="9" markerHeight="9" refX="5" refY="4.5" orient="auto">
        <path d="M0 0 L9 4.5 L0 9 Z" fill="var(--amber)" />
      </marker>
    </defs>
    <text x="330" y="150" {...label} fill="var(--amber)">carga axial</text>
    <text x="330" y="164" {...label}>capitato → semilunar → rádio</text>

    {/* Irrigação frágil — padrão intraósseo em Y/X, poucos vasos nutrícios */}
    <g transform="translate(360 236)">
      <text x="46" y="-14" {...mono} textAnchor="middle">irrigação do semilunar</text>
      <Lunate cx={46} cy={20} scale={0.9} state="normal" />
      <path d="M30 20 C40 20 52 20 62 20" fill="none" stroke="var(--teal)" strokeWidth={2.4} />
      <path d="M46 12 L46 30" fill="none" stroke="var(--teal)" strokeWidth={2.4} />
      <path d="M20 34 C34 30 40 26 44 22" fill="none" stroke="var(--teal)" strokeWidth={2.4} markerEnd="url(#kbVessel)" />
      <path d="M74 34 C60 30 54 26 50 22" fill="none" stroke="var(--teal)" strokeWidth={2.4} markerEnd="url(#kbVessel)" />
      <defs>
        <marker id="kbVessel" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0 0 L8 4 L0 8 Z" fill="var(--teal)" />
        </marker>
      </defs>
      <text x="46" y="58" {...label} textAnchor="middle" fill="var(--teal)">padrões em Y ou X</text>
      <text x="46" y="72" {...label} textAnchor="middle">anastomose escassa</text>
    </g>

    <text x="235" y="326" {...label} textAnchor="middle">
      O semilunar recebe alta carga axial e tem irrigação intraóssea pobre — substrato para a osteonecrose.
    </text>
  </svg>
);

/* ============================================================================
   2. Variância ulnar (Hultén) — negativa vs neutra
   ========================================================================== */
export const UlnarVariance: FC<FigureProps> = ({ className, title, variant }) => {
  const negativa = (variant ?? "negativa").toLowerCase() === "negativa";
  // Nível articular da ulna relativo ao rádio: negativa = ulna mais curta (topo mais proximal).
  const ulnaTop = negativa ? 168 : 138;
  const radiusTop = 138;

  return (
    <svg
      viewBox="0 0 400 320"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `Variância ulnar ${negativa ? "negativa" : "neutra"} (índice de Hultén)`}</title>

      {/* Rádio distal (à esquerda) */}
      <path
        {...boneBack}
        d={`M96 310 L96 ${radiusTop + 18} C96 ${radiusTop + 4} 104 ${radiusTop} 120 ${radiusTop}
          L160 ${radiusTop} C176 ${radiusTop + 2} 176 ${radiusTop + 18} 162 ${radiusTop + 24}
          L128 ${radiusTop + 26} C112 ${radiusTop + 28} 110 310 110 310 Z`}
      />
      <text x="118" y="298" {...label}>rádio</text>

      {/* Ulna distal (à direita) */}
      <path
        {...boneBack}
        d={`M204 310 L206 ${ulnaTop + 20} C208 ${ulnaTop + 4} 220 ${ulnaTop} 234 ${ulnaTop}
          C250 ${ulnaTop} 252 ${ulnaTop + 18} 244 ${ulnaTop + 28} L244 310 Z`}
      />
      <text x="228" y="304" {...label}>ulna</text>

      {/* Semilunar apoiado sobre a fossa do rádio */}
      <Lunate cx={158} cy={radiusTop - 22} scale={0.9} state="normal" />
      <text x="158" y={radiusTop - 46} {...label} textAnchor="middle">semilunar</text>

      {/* Linhas de referência dos níveis articulares */}
      <line x1="90" y1={radiusTop} x2="270" y2={radiusTop} stroke="var(--amber)" strokeWidth={1.2} strokeDasharray="4 4" />
      <line x1="200" y1={ulnaTop} x2="290" y2={ulnaTop} stroke="var(--amber)" strokeWidth={1.2} strokeDasharray="4 4" />

      {/* Bracket da variância */}
      {negativa ? (
        <>
          <line x1="284" y1={radiusTop} x2="284" y2={ulnaTop} stroke="var(--amber)" strokeWidth={1.6} />
          <line x1="279" y1={radiusTop} x2="289" y2={radiusTop} stroke="var(--amber)" strokeWidth={1.6} />
          <line x1="279" y1={ulnaTop} x2="289" y2={ulnaTop} stroke="var(--amber)" strokeWidth={1.6} />
          <text x="296" y={(radiusTop + ulnaTop) / 2 + 4} {...mono} fill="var(--amber)">variância −</text>
        </>
      ) : (
        <text x="284" y={radiusTop + 4} {...mono} fill="var(--amber)">= 0</text>
      )}

      <rect x="120" y="24" width="160" height="26" rx="8" fill={negativa ? "var(--cortical-tint)" : "var(--teal-tint)"} />
      <text x="200" y="42" {...mono} textAnchor="middle" fill={negativa ? "var(--cortical)" : "var(--teal-deep)"}>
        {negativa ? "VARIÂNCIA NEGATIVA" : "VARIÂNCIA NEUTRA"}
      </text>

      <text x="200" y="312" {...label} textAnchor="middle">
        {negativa
          ? "A ulna curta concentra a carga sobre o semilunar — alvo do nivelamento articular."
          : "Sem degrau ulnar, o encurtamento radial perde racional; considerar descarga do capitato."}
      </text>
    </svg>
  );
};

/* ============================================================================
   3. Estadiamento de Lichtman — I, II, IIIA, IIIB, IV (variant)
   ========================================================================== */
export const LichtmanStages: FC<FigureProps> = ({ className, title, variant }) => {
  const v = (variant ?? "1").toLowerCase();
  const meta: Record<string, { rot: string; state: LunateState; ring: boolean; note: string }> = {
    "1": { rot: "I", state: "normal", ring: false, note: "RX normal · RM com edema/isquemia" },
    "2": { rot: "II", state: "esclerose", ring: false, note: "Esclerose sem colapso · forma preservada" },
    "3a": { rot: "IIIA", state: "colapso", ring: false, note: "Colapso do semilunar · carpo alinhado" },
    "3b": { rot: "IIIB", state: "colapso", ring: true, note: "Colapso + escafoide fletido (anel) · altura perdida" },
    "4": { rot: "IV", state: "fragmentacao", ring: true, note: "Fragmentação + artrose periescafoide/radiocarpal" },
  };
  const m = meta[v] ?? meta["1"];

  return (
    <svg
      viewBox="0 0 420 300"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `Estadiamento de Lichtman: estágio ${m.rot}`}</title>

      <text x="210" y="26" {...mono} textAnchor="middle">Lichtman · estágio {m.rot}</text>

      {/* Rádio distal */}
      <path {...boneBack} d="M120 268 L120 196 C120 180 132 172 150 172 L262 172 C280 174 280 192 264 198 L166 200 C148 202 146 240 148 268 Z" />
      <text x="140" y="256" {...label}>rádio</text>

      {/* Escafoide — flete no IIIB/IV (sinal do anel) */}
      {v === "3b" || v === "4" ? (
        <>
          <path {...bone} d="M150 168 C138 150 146 130 166 132 C182 134 190 152 182 168 C176 180 160 182 150 168 Z" />
          <circle cx="166" cy="150" r="9" fill="none" stroke="var(--amber)" strokeWidth="2.4" />
          <text x="128" y="140" {...label} textAnchor="end" fill="var(--amber)">anel</text>
        </>
      ) : (
        <path {...bone} d="M150 160 C138 138 146 116 168 116 C186 116 196 136 188 156 C180 174 162 176 150 160 Z" />
      )}

      {/* Capitato — migra distalmente quando o semilunar colapsa */}
      <path
        {...bone}
        d={`M210 130 C196 108 204 84 228 82 C250 82 262 104 254 126 C246 146 224 150 210 130 Z`}
        transform={v === "3a" || v === "3b" || v === "4" ? "translate(0 10)" : undefined}
      />
      <text x="252" y="104" {...label}>capitato</text>

      {/* Piramidal */}
      <path {...bone} d="M262 156 C252 140 258 124 276 124 C292 124 300 140 292 154 C286 166 272 168 262 156 Z" />

      {/* Semilunar central com o estado do estágio */}
      <Lunate cx={190} cy={144} scale={1.15} state={m.state} />
      <text x="190" y={196} {...mono} textAnchor="middle" fill={v === "1" ? "var(--teal-deep)" : "var(--cortical)"}>
        semilunar
      </text>

      {v === "4" && (
        <>
          <path d="M150 170 C170 176 210 176 232 170" {...cortical} strokeWidth={2} strokeDasharray="3 3" />
          <text x="300" y="176" {...label} fill="var(--cortical)">artrose</text>
        </>
      )}

      <text x="210" y="286" {...label} textAnchor="middle">{m.note}</text>
    </svg>
  );
};

/* ============================================================================
   4. RM para diagnóstico precoce — RX normal, RM com queda de sinal em T1
   ========================================================================== */
export const MriDiagnosis: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 460 300"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "RM no diagnóstico precoce da doença de Kienböck (estágio I)"}</title>

    {/* Painel RX (esquerda) — semilunar de aspecto normal */}
    <g>
      <rect x="24" y="52" width="180" height="200" rx="12" fill="var(--surface-2, var(--surface))" stroke="var(--line-strong)" />
      <text x="114" y="44" {...mono} textAnchor="middle">radiografia</text>
      <path {...bone} d="M60 236 L60 176 C60 162 72 156 88 156 L152 156 C168 158 168 174 154 180 L100 182 C86 184 84 216 84 236 Z" />
      <Lunate cx={126} cy={132} scale={0.9} state="normal" />
      <path {...bone} d="M92 128 C82 112 90 96 106 96 C120 96 128 110 122 124 C116 136 102 138 92 128 Z" />
      <path {...bone} d="M150 132 C140 116 146 102 162 102 C176 102 184 116 178 130 C172 142 160 144 150 132 Z" />
      <rect x="34" y="212" width="60" height="24" rx="7" fill="var(--teal-tint)" />
      <text x="64" y="228" {...mono} textAnchor="middle" fill="var(--teal-deep)">normal</text>
    </g>

    {/* Seta comparativa */}
    <path d="M214 152 L246 152" stroke="var(--ink-soft)" strokeWidth={2} markerEnd="url(#kbMriArrow)" />
    <defs>
      <marker id="kbMriArrow" markerWidth="9" markerHeight="9" refX="5" refY="4.5" orient="auto">
        <path d="M0 0 L9 4.5 L0 9 Z" fill="var(--ink-soft)" />
      </marker>
    </defs>

    {/* Painel RM (direita) — semilunar com queda difusa de sinal em T1 */}
    <g>
      <rect x="256" y="52" width="180" height="200" rx="12" fill="var(--ink-soft)" opacity="0.14" stroke="var(--line-strong)" />
      <text x="346" y="44" {...mono} textAnchor="middle">RM ponderada em T1</text>
      <path d="M292 236 L292 176 C292 162 304 156 320 156 L384 156 C400 158 400 174 386 180 L332 182 C318 184 316 216 316 236 Z" fill="var(--surface)" stroke="var(--ink-soft)" strokeWidth={1.4} opacity="0.85" />
      <Lunate cx={358} cy={132} scale={0.9} state="fragmentacao" />
      <path d="M324 128 C314 112 322 96 338 96 C352 96 360 110 354 124 C348 136 334 138 324 128 Z" fill="var(--surface)" stroke="var(--ink-soft)" strokeWidth={1.4} opacity="0.85" />
      <path d="M382 132 C372 116 378 102 394 102 C408 102 416 116 410 130 C404 142 392 144 382 132 Z" fill="var(--surface)" stroke="var(--ink-soft)" strokeWidth={1.4} opacity="0.85" />
      <rect x="266" y="212" width="150" height="24" rx="7" fill="var(--cortical-tint)" />
      <text x="341" y="228" {...mono} textAnchor="middle" fill="var(--cortical)">baixo sinal difuso em T1</text>
    </g>

    <text x="230" y="284" {...label} textAnchor="middle">
      No estágio I a RX é normal; a RM detecta o edema/isquemia do semilunar e antecipa o diagnóstico.
    </text>
  </svg>
);

/* ============================================================================
   5. Encurtamento radial — nivelamento articular na variância negativa
   ========================================================================== */
export const RadialShortening: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 440 320"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Osteotomia de encurtamento radial para descarga do semilunar"}</title>

    {/* Rádio com osteotomia transversa e segmento ressecado */}
    <path {...boneBack} d="M96 300 L96 214 C96 200 106 194 120 194 L168 194 C182 196 182 212 170 218 L128 220 C114 222 112 300 112 300 Z" />

    {/* Nível de osteotomia (dois cortes → cunha/fatia removida) */}
    <line x1="92" y1="238" x2="176" y2="236" stroke="var(--cortical)" strokeWidth={2.4} />
    <line x1="92" y1="256" x2="176" y2="254" stroke="var(--cortical)" strokeWidth={2.4} strokeDasharray="4 3" />
    <path d="M92 238 L176 236 L176 254 L92 256 Z" fill="var(--cortical)" opacity="0.12" />
    <text x="182" y="250" {...label} fill="var(--cortical)">fatia ressecada</text>

    {/* Placa e parafusos de fixação após o encurtamento */}
    <rect x="60" y="200" width="12" height="96" rx="5" fill="var(--teal)" opacity="0.9" />
    {[214, 232, 268, 286].map((cy) => (
      <line key={cy} x1="56" y1={cy} x2="132" y2={cy} stroke="var(--teal)" strokeWidth={2.6} strokeLinecap="round" />
    ))}
    <text x="46" y="196" {...mono} fill="var(--teal)">placa</text>

    {/* Ulna de referência (variância corrigida para neutra) */}
    <path {...boneBack} d="M232 300 L234 214 C236 198 248 190 262 194 C276 198 274 218 266 228 L266 300 Z" />
    <text x="252" y="292" {...label}>ulna</text>

    {/* Semilunar aliviado */}
    <Lunate cx={168} cy={168} scale={0.95} state="esclerose" />
    <text x="168" y="142" {...label} textAnchor="middle">semilunar</text>

    {/* Linhas de nível articular agora niveladas */}
    <line x1="120" y1="194" x2="280" y2="194" stroke="var(--amber)" strokeWidth={1.2} strokeDasharray="4 4" />
    <text x="300" y="192" {...mono} fill="var(--amber)">variância → neutra</text>

    {/* Vetor de descompressão */}
    <path d="M168 190 C168 204 150 214 130 214" fill="none" stroke="var(--amber)" strokeWidth={2} markerEnd="url(#kbShortArrow)" />
    <defs>
      <marker id="kbShortArrow" markerWidth="9" markerHeight="9" refX="5" refY="4.5" orient="auto">
        <path d="M0 0 L9 4.5 L0 9 Z" fill="var(--amber)" />
      </marker>
    </defs>
    <text x="196" y="176" {...label} fill="var(--amber)">descarga da coluna radial</text>

    <text x="220" y="312" {...label} textAnchor="middle">
      Encurtar o rádio ao nível neutro redistribui a carga para fora do semilunar; indicado na variância negativa.
    </text>
  </svg>
);

/* ============================================================================
   6. Revascularização — enxerto ósseo vascularizado pediculado no semilunar
   ========================================================================== */
export const Revascularization: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 440 320"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Revascularização do semilunar com enxerto ósseo pediculado do rádio distal"}</title>

    {/* Rádio distal dorsal — fonte do pedículo */}
    <path {...boneBack} d="M60 300 L60 168 C60 152 72 144 90 144 L150 144 C150 176 146 300 132 300 Z" />
    <text x="72" y="290" {...label}>rádio distal</text>

    {/* Semilunar receptor (estágio precoce, sem colapso fixo) */}
    <Lunate cx={268} cy={150} scale={1.5} state="esclerose" />
    <text x="268" y="112" {...mono} textAnchor="middle">semilunar</text>

    {/* Leito preparado (curetagem do osso necrótico) */}
    <path d="M244 150 C256 156 280 156 292 150" fill="none" stroke="var(--cortical)" strokeWidth={2} strokeDasharray="3 3" />
    <text x="300" y="176" {...label} fill="var(--cortical)">osso necrótico curetado</text>

    {/* Enxerto vascularizado transposto ao interior do semilunar */}
    <rect x="256" y="140" width="24" height="20" rx="4" fill="var(--teal-tint)" stroke="var(--teal)" strokeWidth={2} transform="rotate(-8 268 150)" />

    {/* Pedículo vascular do dorso do rádio ao semilunar */}
    <path
      d="M120 168 C168 172 210 152 244 148"
      fill="none"
      stroke="var(--teal)"
      strokeWidth={6}
      strokeLinecap="round"
      markerEnd="url(#kbRevArrow)"
    />
    <path
      d="M120 190 C170 200 214 190 246 162"
      fill="none"
      stroke="var(--teal)"
      strokeWidth={3}
      strokeLinecap="round"
      strokeDasharray="6 5"
    />
    <defs>
      <marker id="kbRevArrow" markerWidth="9" markerHeight="9" refX="5" refY="4.5" orient="auto">
        <path d="M0 0 L9 4.5 L0 9 Z" fill="var(--teal)" />
      </marker>
    </defs>
    <text x="150" y="146" {...mono} fill="var(--teal)">pedículo vascular</text>
    <text x="150" y="212" {...label} fill="var(--teal)">4+5 EAC / 2,3-ICSRA</text>

    {/* Fixação temporária capitolunar (descarga) */}
    <line x1="268" y1="128" x2="268" y2="96" stroke="var(--ink-soft)" strokeWidth={2.4} strokeLinecap="round" />
    <text x="300" y="100" {...label}>fixação temporária de descarga</text>

    <text x="220" y="312" {...label} textAnchor="middle">
      Enxerto vascularizado do rádio distal restaura o aporte sanguíneo antes do colapso fixo (estágios II–IIIA).
    </text>
  </svg>
);

/* ============================================================================
   7. Salvamento — carpectomia proximal (PRC) vs artrodese (variant)
   ========================================================================== */
export const Salvage: FC<FigureProps> = ({ className, title, variant }) => {
  const prc = (variant ?? "prc").toLowerCase() === "prc";

  return (
    <svg
      viewBox="0 0 440 320"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? (prc ? "Carpectomia da fileira proximal" : "Artrodese do punho / intercarpal")}</title>

      <text x="220" y="26" {...mono} textAnchor="middle">
        {prc ? "carpectomia proximal (PRC)" : "artrodese (salvamento no colapso/artrose)"}
      </text>

      {/* Rádio distal */}
      <path {...boneBack} d="M120 296 L120 214 C120 198 132 190 150 190 L286 190 C304 192 304 210 288 216 L172 218 C154 220 152 296 154 296 Z" />
      <text x="140" y="284" {...label}>rádio</text>

      {/* Ulna */}
      <path {...boneBack} d="M300 296 L302 216 C304 200 316 194 328 198 L328 296 Z" />

      {prc ? (
        <>
          {/* Fileira proximal removida (contornos fantasma) — capitato desce ao rádio */}
          <path d="M150 176 C138 158 146 138 166 138 C182 138 190 156 184 172 C178 184 162 186 150 176 Z" fill="none" stroke="var(--line-strong)" strokeWidth={1.4} strokeDasharray="4 4" />
          <path d="M244 176 C232 158 240 138 260 138 C276 138 286 156 278 172 C270 186 256 190 244 176 Z" fill="none" stroke="var(--line-strong)" strokeWidth={1.4} strokeDasharray="4 4" />
          <path d="M198 172 C186 150 194 130 216 130 C238 130 250 152 242 172" fill="none" stroke="var(--line-strong)" strokeWidth={1.4} strokeDasharray="4 4" />
          <text x="330" y="140" {...label} fill="var(--line-strong)">fileira proximal removida</text>

          {/* Capitato articulando diretamente na fossa do rádio */}
          <path {...bone} d="M206 168 C192 146 200 122 224 120 C246 120 258 142 250 164 C242 184 220 188 206 168 Z" />
          <text x="224" y="112" {...label} textAnchor="middle">capitato</text>
          <path d="M198 186 C214 180 236 180 250 186" fill="none" stroke="var(--teal)" strokeWidth={4} strokeLinecap="round" />
          <text x="150" y="176" {...label} textAnchor="end" fill="var(--teal)">nova articulação</text>
          <text x="220" y="308" {...label} textAnchor="middle">
            Remove escafoide, semilunar e piramidal; exige cabeça do capitato e fossa do rádio íntegras.
          </text>
        </>
      ) : (
        <>
          {/* Fileira proximal + distal fundidas ao rádio (barras de fusão) */}
          <path {...bone} d="M150 176 C138 158 146 138 166 138 C182 138 190 156 184 172 C178 184 162 186 150 176 Z" />
          <Lunate cx={214} cy={158} scale={0.95} state="fragmentacao" />
          <path {...bone} d="M250 176 C238 158 246 138 266 138 C282 138 292 156 284 172 C276 186 262 190 250 176 Z" />
          <path {...bone} d="M172 120 C160 100 168 80 190 80 C210 80 222 100 214 120 C206 138 186 140 172 120 Z" />
          <path {...bone} d="M226 120 C214 100 222 80 244 80 C264 80 276 100 268 120 C260 138 240 140 226 120 Z" />

          {/* Grampos/parafusos de fusão */}
          {[[168, 176], [214, 190], [258, 176], [190, 118], [244, 118]].map(([x, y], i) => (
            <g key={i} stroke="var(--teal)" strokeWidth={2.6} strokeLinecap="round">
              <line x1={x - 8} y1={y - 8} x2={x + 8} y2={y + 8} />
            </g>
          ))}
          <path d="M150 190 C190 196 250 196 290 190" fill="none" stroke="var(--teal)" strokeWidth={4} strokeLinecap="round" />
          <text x="330" y="120" {...label} fill="var(--teal)">fusão</text>
          <text x="220" y="308" {...label} textAnchor="middle">
            Artrodese intercarpal ou total do punho: alivia dor à custa de mobilidade na artrose estabelecida.
          </text>
        </>
      )}
    </svg>
  );
};

export const figures: Record<string, FC<FigureProps>> = {
  "kienbock:anatomia": Anatomy,
  "kienbock:variancia-ulnar": UlnarVariance,
  "kienbock:estagios": LichtmanStages,
  "kienbock:rm": MriDiagnosis,
  "kienbock:encurtamento-radial": RadialShortening,
  "kienbock:revascularizacao": Revascularization,
  "kienbock:salvamento": Salvage,
};
