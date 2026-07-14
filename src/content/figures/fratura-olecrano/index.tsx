import type { FC, ReactNode } from "react";
import type { FigureProps } from "../../../types/topic";

/* ============================================================================
   Fratura do olecrano — figuras esquemáticas originais (line-art 2 tons).
   Fundamento editorial: Rockwood & Green's Fractures in Adults, 10ª ed. (2024).
   Redesenho original, não reprodução. Cores exclusivamente por CSS var.
   ========================================================================== */

const bone = {
  fill: "var(--surface)",
  stroke: "var(--ink-soft)",
  strokeWidth: 1.8,
  strokeLinejoin: "round" as const,
  strokeLinecap: "round" as const,
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

const lead = { stroke: "var(--line-strong)", strokeWidth: 1, fill: "none" };

const tealStroke = {
  fill: "none",
  stroke: "var(--teal)",
  strokeWidth: 3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const corticalStroke = {
  fill: "none",
  stroke: "var(--cortical)",
  strokeWidth: 3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const amberStroke = {
  fill: "none",
  stroke: "var(--amber)",
  strokeWidth: 2.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/* --- Peças reutilizáveis (visão lateral do cotovelo) ---------------------- */

/** Tróclea/paleta umeral distal, como círculo articular na incisura. */
function Trochlea({ cx = 150, cy = 150, r = 52 }: { cx?: number; cy?: number; r?: number }) {
  return (
    <g>
      <path
        {...boneBack}
        d={`M${cx - 6} ${cy - r - 44} C${cx - 40} ${cy - r - 30}, ${cx - 46} ${cy - 20}, ${cx - 30} ${cy}
           C${cx - 46} ${cy + 20}, ${cx - 40} ${cy + r + 26}, ${cx - 4} ${cy + r + 40}`}
      />
      <circle cx={cx} cy={cy} r={r} {...bone} />
      <circle cx={cx} cy={cy} r={r - 12} fill="none" stroke="var(--line)" strokeWidth={1} />
    </g>
  );
}

/**
 * Ulna proximal em perfil, incisura troclear voltada à esquerda.
 * Olécrano no ápice, coronoide ântero-inferior, diáfise descendo.
 * O ápice do olécrano fica em torno de (232, 78); a incisura abraça a tróclea.
 */
function ProximalUlna({ children }: { children?: ReactNode }) {
  return (
    <g>
      <path
        {...bone}
        d="M232 74
           C214 70, 202 82, 202 100
           C222 108, 234 126, 236 150
           L236 150
           C234 176, 222 196, 200 206
           C202 232, 210 262, 214 300
           L266 300
           C262 250, 258 190, 256 150
           C256 118, 252 92, 232 74 Z"
      />
      {/* fundo da incisura troclear (superfície articular) */}
      <path
        d="M202 100 C222 108, 234 126, 236 150 C234 176, 222 196, 200 206"
        fill="none"
        stroke="var(--line)"
        strokeWidth={1.4}
      />
      {children}
    </g>
  );
}

/* ========================================================================== */
/* 1. Anatomia                                                                 */
/* ========================================================================== */

const Anatomia: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 440 330"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Anatomia da ulna proximal, incisura troclear e aparelho extensor"}</title>

    <Trochlea cx={150} cy={158} r={52} />
    <ProximalUlna />

    {/* tendão do tríceps inserindo no olécrano */}
    <path {...tealStroke} strokeWidth={7} d="M238 70 C244 46, 250 28, 256 12" />
    <path {...tealStroke} strokeWidth={7} d="M226 76 C230 50, 234 30, 238 12" opacity={0.55} />

    {/* rótulos */}
    <path {...lead} d="M258 40 L300 34" />
    <text x="304" y="37" {...label}>tendão do tríceps</text>

    <path {...lead} d="M230 80 L296 70" />
    <text x="300" y="72" {...label}>olécrano (ápice)</text>

    <path {...lead} d="M236 150 L300 132" />
    <text x="304" y="130" {...label}>incisura troclear</text>

    <path {...lead} d="M204 202 L300 196" />
    <text x="304" y="192" {...label}>processo coronoide</text>

    <path {...lead} d="M150 158 L96 158" />
    <text x="18" y="150" {...label}>tróclea umeral</text>

    <path {...lead} d="M242 290 L300 288" />
    <text x="304" y="286" {...label}>diáfise da ulna</text>

    <text x="18" y="308" {...mono}>perfil lateral</text>
  </svg>
);

/* ========================================================================== */
/* 2. Mecanismo extensor                                                       */
/* ========================================================================== */

const Mecanismo: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 440 330"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Mecanismo extensor: tração do tríceps desloca o fragmento proximal"}</title>

    <Trochlea cx={150} cy={168} r={52} />

    {/* fragmento distal (coronoide + diáfise) fixo */}
    <path
      {...bone}
      d="M236 176 C234 196, 224 214, 200 224 C202 250, 210 278, 214 312 L266 312 C262 262, 258 210, 256 176 Z"
    />
    {/* fragmento proximal (olécrano) migrado proximalmente pelo tríceps */}
    <path
      {...bone}
      d="M234 58 C216 54, 204 66, 204 84 C224 92, 238 112, 240 138 L262 132 C260 104, 254 76, 234 58 Z"
    />

    {/* traço de fratura intra-articular */}
    <path {...corticalStroke} strokeDasharray="2 5" d="M204 150 C222 150, 240 150, 258 152" />

    {/* vetor de tração do tríceps */}
    <path {...amberStroke} d="M244 92 C250 68, 256 46, 262 24" />
    <path {...amberStroke} d="M262 24 L255 38 M262 24 L270 36" />

    {/* rótulos */}
    <path {...lead} d="M256 40 L300 40" />
    <text x="304" y="43" {...label}>tração do tríceps</text>

    <path {...lead} d="M232 150 L300 150" />
    <text x="304" y="146" {...label}>traço intra-articular</text>
    <text x="304" y="162" {...label}>(afastamento do fragmento)</text>

    <path {...lead} d="M232 250 L300 250" />
    <text x="304" y="253" {...label}>fragmento distal estável</text>

    <text x="18" y="316" {...mono}>diástase por força extensora</text>
  </svg>
);

/* ========================================================================== */
/* 3. Classificação de Mayo                                                    */
/* ========================================================================== */

type MayoKey = "I" | "IIA" | "IIB" | "III";

function MayoPanel({ variant, x, y }: { variant: MayoKey; x: number; y: number }) {
  const displaced = variant !== "I";
  const comminuted = variant === "IIB";
  const unstable = variant === "III";
  const gap = displaced ? 12 : 3;
  return (
    <g transform={`translate(${x} ${y})`}>
      {/* tróclea */}
      <circle cx={30} cy={64} r={26} {...bone} />
      {/* fragmento proximal (olécrano) */}
      <path {...bone} d={`M74 ${20 - (displaced ? 6 : 0)} C64 ${18 - (displaced ? 6 : 0)}, 58 26, 58 34 C70 40, 78 52, 79 66 L92 62 C90 44, 86 30, 74 ${20 - (displaced ? 6 : 0)} Z`} />
      {/* fragmento distal */}
      <path
        {...bone}
        d={`M79 ${66 + gap} C78 78, 72 88, 58 94 C60 108, 64 120, 66 132 L92 132 C90 108, 90 86, 92 ${62 + gap} Z`}
      />
      {/* linha(s) de fratura */}
      {comminuted ? (
        <>
          <path {...corticalStroke} strokeWidth={2.2} d={`M58 ${60} L92 ${58}`} />
          <path {...corticalStroke} strokeWidth={2.2} d={`M60 ${72} L92 ${74}`} />
          <circle cx={74} cy={66} r={4} fill="var(--cortical-tint)" stroke="var(--cortical)" strokeWidth={1} />
        </>
      ) : (
        <path {...corticalStroke} strokeWidth={2.4} d={`M58 ${60} L92 ${62}`} />
      )}
      {/* seta de subluxação (instável, tipo III) */}
      {unstable && (
        <>
          <path {...amberStroke} strokeWidth={2} d="M30 96 C26 108, 22 118, 16 126" />
          <path {...amberStroke} strokeWidth={2} d="M16 126 L14 116 M16 126 L24 122" />
        </>
      )}
      <text x={0} y={150} {...mono}>{variant === "I" ? "Tipo I" : variant === "IIA" ? "Tipo IIA" : variant === "IIB" ? "Tipo IIB" : "Tipo III"}</text>
      <text x={0} y={164} {...label}>
        {variant === "I"
          ? "não desviada"
          : variant === "IIA"
            ? "desviada estável"
            : variant === "IIB"
              ? "desviada cominutiva"
              : "instável (fx-luxação)"}
      </text>
    </g>
  );
}

const Mayo: FC<FigureProps> = ({ className, title, variant }) => {
  const order: MayoKey[] = ["I", "IIA", "IIB", "III"];
  const single = order.includes(variant as MayoKey) ? (variant as MayoKey) : null;
  return (
    <svg
      viewBox="0 0 440 220"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? "Classificação de Mayo da fratura do olécrano"}</title>
      {single ? (
        <MayoPanel variant={single} x={160} y={20} />
      ) : (
        <>
          <MayoPanel variant="I" x={12} y={16} />
          <MayoPanel variant="IIA" x={116} y={16} />
          <MayoPanel variant="IIB" x={224} y={16} />
          <MayoPanel variant="III" x={332} y={16} />
        </>
      )}
    </svg>
  );
};

/* ========================================================================== */
/* 4. Morfologia de Schatzker                                                  */
/* ========================================================================== */

type SchatzkerKey = "transversa" | "obliqua" | "cominutiva";

function SchatzkerPanel({ variant, x }: { variant: SchatzkerKey; x: number }) {
  return (
    <g transform={`translate(${x} 20)`}>
      {/* silhueta da ulna proximal simplificada */}
      <path
        {...bone}
        d="M62 12 C50 10, 42 20, 42 32 C56 40, 66 56, 68 78 C66 104, 58 128, 44 140 C46 168, 52 196, 56 224 L92 224 C88 176, 84 118, 84 78 C84 46, 80 28, 62 12 Z"
      />
      {variant === "transversa" && (
        <path {...corticalStroke} d="M44 92 L86 92" />
      )}
      {variant === "obliqua" && (
        <path {...corticalStroke} d="M46 74 L88 116" />
      )}
      {variant === "cominutiva" && (
        <>
          <path {...corticalStroke} strokeWidth={2.4} d="M46 78 L86 84" />
          <path {...corticalStroke} strokeWidth={2.4} d="M44 104 L88 108" />
          <circle cx={66} cy={94} r={5} fill="var(--cortical-tint)" stroke="var(--cortical)" strokeWidth={1} />
        </>
      )}
      <text x={4} y={244} {...mono}>
        {variant === "transversa" ? "transversa" : variant === "obliqua" ? "oblíqua" : "cominutiva"}
      </text>
      <text x={4} y={258} {...label}>
        {variant === "transversa"
          ? "banda de tensão"
          : variant === "obliqua"
            ? "placa"
            : "placa"}
      </text>
    </g>
  );
}

const Schatzker: FC<FigureProps> = ({ className, title, variant }) => {
  const order: SchatzkerKey[] = ["transversa", "obliqua", "cominutiva"];
  const single = order.includes(variant as SchatzkerKey) ? (variant as SchatzkerKey) : null;
  return (
    <svg
      viewBox="0 0 440 290"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? "Padrões morfológicos de Schatzker da fratura do olécrano"}</title>
      {single ? (
        <SchatzkerPanel variant={single} x={170} />
      ) : (
        <>
          <SchatzkerPanel variant="transversa" x={40} />
          <SchatzkerPanel variant="obliqua" x={170} />
          <SchatzkerPanel variant="cominutiva" x={300} />
        </>
      )}
    </svg>
  );
};

/* ========================================================================== */
/* 5. Banda de tensão                                                          */
/* ========================================================================== */

const BandaTensao: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 440 330"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Banda de tensão: conversão da força de distração em compressão articular"}</title>

    <Trochlea cx={140} cy={172} r={50} />
    <ProximalUlna>
      {/* traço transverso simples (reduzido) */}
      <path {...corticalStroke} strokeWidth={2} strokeDasharray="2 4" d="M204 150 L256 150" />
    </ProximalUlna>

    {/* dois fios de Kirschner longitudinais, intramedulares/bicorticais */}
    <path {...tealStroke} strokeWidth={2.6} d="M224 66 L228 250" />
    <path {...tealStroke} strokeWidth={2.6} d="M240 66 L246 250" />

    {/* cerclagem em oito */}
    <path
      {...tealStroke}
      strokeWidth={2.2}
      d="M226 82 C258 96, 262 150, 250 200 C244 214, 232 214, 226 206
         C238 176, 234 120, 222 96"
    />
    {/* furo transverso distal por onde passa o fio */}
    <ellipse cx={236} cy={210} rx={18} ry={5} fill="none" stroke="var(--teal)" strokeWidth={1.4} />

    {/* setas de compressão na cortical articular anterior */}
    <path {...amberStroke} d="M206 138 C214 144, 214 156, 206 162" />
    <path {...amberStroke} d="M206 138 L200 146 M206 162 L200 154" />

    {/* rótulos */}
    <path {...lead} d="M242 74 L300 60" />
    <text x="304" y="62" {...label}>2 fios de Kirschner</text>

    <path {...lead} d="M248 150 L300 150" />
    <text x="304" y="146" {...label}>cerclagem em oito</text>
    <text x="304" y="162" {...label}>dorsal (banda de tensão)</text>

    <path {...lead} d="M200 150 L150 240" />
    <text x="30" y="256" {...label}>compressão na cortical anterior</text>

    <text x="18" y="316" {...mono}>indicação: transversa simples (Mayo IIA)</text>
  </svg>
);

/* ========================================================================== */
/* 6. Fixação com placa                                                        */
/* ========================================================================== */

const Placa: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 440 330"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Placa dorsal anatômica para fratura cominutiva ou oblíqua do olécrano"}</title>

    <Trochlea cx={140} cy={172} r={50} />
    <ProximalUlna>
      {/* zona cominutiva */}
      <path {...corticalStroke} strokeWidth={2} d="M212 138 L252 140" />
      <path {...corticalStroke} strokeWidth={2} d="M210 160 L252 162" />
      <circle cx={232} cy={150} r={5} fill="var(--cortical-tint)" stroke="var(--cortical)" strokeWidth={1} />
    </ProximalUlna>

    {/* placa dorsal contornada, contornando o ápice do olécrano */}
    <path
      {...tealStroke}
      strokeWidth={9}
      d="M232 70 C250 74, 260 96, 262 128 C264 176, 264 232, 268 288"
    />
    {/* parafusos */}
    {[
      [244, 92],
      [258, 122],
      [262, 176],
      [264, 218],
      [266, 262],
    ].map(([cx, cy], i) => (
      <g key={i}>
        <line x1={cx} y1={cy} x2={cx - 34} y2={cy + 2} {...tealStroke} strokeWidth={2.2} />
        <circle cx={cx} cy={cy} r={3} fill="var(--surface)" stroke="var(--teal)" strokeWidth={1.6} />
      </g>
    ))}
    {/* parafuso proximal longo intramedular (ancoragem do ápice) */}
    <line x1={238} y1={74} x2={252} y2={200} {...tealStroke} strokeWidth={2} strokeDasharray="4 4" />

    {/* rótulos */}
    <path {...lead} d="M256 88 L300 74" />
    <text x="304" y="76" {...label}>placa dorsal contornada</text>

    <path {...lead} d="M232 150 L300 150" />
    <text x="304" y="146" {...label}>cominuição / obliquidade</text>
    <text x="304" y="162" {...label}>que a banda não neutraliza</text>

    <path {...lead} d="M232 220 L300 232" />
    <text x="304" y="234" {...label}>parafusos multiplanares</text>

    <text x="18" y="316" {...mono}>indicação: cominutiva, oblíqua, Mayo IIB</text>
  </svg>
);

/* ========================================================================== */
/* 7. Tratamento conservador no idoso                                          */
/* ========================================================================== */

const Conservador: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 440 300"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Tratamento não operatório no idoso de baixa demanda: tipoia e mobilização precoce"}</title>

    {/* braço em tipoia, cotovelo fletido ~90° */}
    <path {...bone} d="M92 40 C120 44, 140 60, 148 92 L120 104 C112 78, 100 60, 82 54 Z" />
    <path {...bone} d="M148 92 C176 118, 214 138, 258 146 L252 176 C204 168, 160 146, 128 116 Z" />

    {/* faixa da tipoia */}
    <path {...amberStroke} strokeWidth={4} d="M96 44 C150 150, 220 178, 262 168" />
    <path {...amberStroke} strokeWidth={4} d="M110 42 C120 26, 150 22, 176 30" opacity={0.7} />

    {/* detalhe: pseudartrose fibrosa estável mas funcional */}
    <g transform="translate(300 40)">
      <circle cx={26} cy={52} r={22} {...bone} />
      <path {...bone} d="M66 14 C56 12, 50 20, 50 28 C62 34, 70 46, 71 60 L92 56 C90 40, 84 26, 66 14 Z" />
      <path {...bone} d="M71 74 C70 86, 64 96, 50 102 C52 116, 56 128, 58 140 L92 140 C90 116, 90 92, 92 56 Z" />
      <path {...corticalStroke} strokeWidth={2} strokeDasharray="3 4" d="M50 64 L92 66" />
      <text x={0} y={162} {...label}>união fibrosa frequente,</text>
      <text x={0} y={176} {...label}>arco funcional preservado</text>
    </g>

    {/* rótulos */}
    <path {...lead} d="M180 100 L180 200" />
    <text x="60" y="216" {...label}>tipoia curta + mobilização conforme dor</text>

    <text x="18" y="248" {...mono}>idoso de baixa demanda / alto risco cirúrgico</text>
  </svg>
);

/* ========================================================================== */

export const figures: Record<string, FC<FigureProps>> = {
  "fratura-olecrano:anatomia": Anatomia,
  "fratura-olecrano:mecanismo": Mecanismo,
  "fratura-olecrano:mayo": Mayo,
  "fratura-olecrano:schatzker": Schatzker,
  "fratura-olecrano:banda-tensao": BandaTensao,
  "fratura-olecrano:placa": Placa,
  "fratura-olecrano:conservador": Conservador,
};
