import type { CSSProperties, FC } from "react";
import type { FigureProps } from "../../../types/topic";

/* ============================================================================
   Figuras esquemáticas do 5º metatarso (line-art original, 2 tons — sem
   copyright). Cores exclusivamente por CSS vars. Todos os ids são prefixados
   por "fratura-quinto-metatarso:" no registro exportado no fim do arquivo.
   ========================================================================== */

const BONE = { stroke: "var(--ink-soft)", fill: "var(--surface)", strokeWidth: 2 };
const SOFT = { stroke: "var(--teal)", fill: "none", strokeWidth: 2 };
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

/* -- 1. Anatomia do 5º metatarso ------------------------------------------- */
const Anatomia: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 360 240"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Anatomia do quinto metatarso: tuberosidade, base e inserções"}</title>
    {/* corpo do metatarso (proximal à esquerda) */}
    <path
      d="M70 120 C 60 100, 62 140, 70 120 M92 92 C 76 96, 70 116, 76 138 C 82 158, 104 156, 116 148 L 250 128 C 262 126, 262 116, 250 114 L 120 100 C 108 96, 100 90, 92 92 Z"
      {...BONE}
    />
    {/* cabeça distal */}
    <ellipse cx="268" cy="121" rx="20" ry="15" {...BONE} />
    {/* tuberosidade (apófise) proeminência proximal */}
    <path d="M76 138 C 60 150, 58 168, 78 164 C 96 160, 96 150, 90 142 Z" {...BONE} />
    {/* fibular curto - inserção na tuberosidade */}
    <path d="M40 150 C 58 152, 70 154, 82 156" {...SOFT} strokeLinecap="round" />
    {/* banda lateral da aponeurose plantar */}
    <path d="M44 176 C 60 172, 72 168, 84 162" {...SOFT} strokeDasharray="5 4" strokeLinecap="round" />
    {/* fibular terceiro - dorso da base/diáfise */}
    <path d="M120 78 C 128 88, 136 94, 150 100" {...SOFT} strokeLinecap="round" />
    {/* articulação com o cuboide e 4º MTT */}
    <line x1="70" y1="104" x2="66" y2="150" stroke="var(--ink-soft)" strokeWidth="1.5" strokeDasharray="3 3" />
    <text x="30" y="146" style={label}>fibular curto</text>
    <text x="26" y="190" style={label}>banda plantar lat.</text>
    <text x="118" y="70" style={label}>fibular terceiro</text>
    <text x="60" y="212" style={mono}>tuberosidade (apófise)</text>
    <text x="176" y="150" style={label}>diáfise</text>
    <text x="250" y="152" style={label}>cabeça</text>
    <text x="34" y="96" style={mono}>cuboide / 4º MTT</text>
  </svg>
);

/* -- 2. Suprimento vascular / watershed ------------------------------------ */
const Vascular: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 360 220"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Zona de watershed vascular na junção metafisodiafisária"}</title>
    <path
      d="M60 90 C 50 96, 48 118, 60 130 L 90 120 L 250 110 C 262 108, 262 100, 250 98 L 96 88 Z"
      {...BONE}
    />
    <ellipse cx="266" cy="104" rx="18" ry="13" {...BONE} />
    <path d="M60 130 C 46 142, 46 160, 66 156 C 82 152, 82 140, 76 132 Z" {...BONE} />
    {/* aporte metafisário proximal (tuberosidade) */}
    <path d="M40 150 C 52 146, 62 142, 72 138" {...SOFT} strokeLinecap="round" />
    {/* aporte nutrício da diáfise (distal) */}
    <path d="M300 104 C 280 104, 260 104, 200 104" {...SOFT} strokeLinecap="round" />
    {/* zona de watershed - hachura âmbar */}
    <rect x="96" y="86" width="34" height="40" fill="var(--amber)" opacity="0.16" />
    <line x1="96" y1="86" x2="130" y2="126" stroke="var(--amber)" strokeWidth="1.2" />
    <line x1="130" y1="86" x2="96" y2="126" stroke="var(--amber)" strokeWidth="1.2" />
    <text x="70" y="186" style={label}>a. metafisária</text>
    <text x="214" y="90" style={label}>a. nutrícia diafisária</text>
    <text x="96" y="150" style={label}>watershed</text>
    <text x="88" y="164" style={mono}>zona hipovascular</text>
  </svg>
);

/* -- 3. Classificação por zonas (variantes 1 / 2 / 3) ----------------------- */
const ZoneBone: FC = () => (
  <>
    <path
      d="M64 92 C 54 98, 52 120, 64 132 L 96 122 L 252 108 C 264 106, 264 98, 252 96 L 100 88 Z"
      {...BONE}
    />
    <ellipse cx="268" cy="102" rx="18" ry="13" {...BONE} />
    <path d="M64 132 C 50 144, 50 162, 70 158 C 86 154, 86 142, 80 134 Z" {...BONE} />
  </>
);

const Zonas: FC<FigureProps> = ({ className, title, variant }) => {
  const v = variant ?? "2";
  return (
    <svg
      viewBox="0 0 360 220"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `Classificação por zonas de Lawrence-Botte — zona ${v}`}</title>
      <ZoneBone />
      {/* limites das zonas */}
      <line x1="86" y1="80" x2="86" y2="166" stroke="var(--ink-soft)" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="120" y1="82" x2="120" y2="130" stroke="var(--ink-soft)" strokeWidth="1" strokeDasharray="3 3" />
      {v === "1" && (
        <path d="M74 136 L 60 150 M70 132 L 82 150" className="fx-line" stroke="var(--cortical)" strokeWidth="2.4" strokeLinecap="round" />
      )}
      {v === "2" && (
        <path d="M100 88 L 108 122" className="fx-line" stroke="var(--cortical)" strokeWidth="2.4" strokeLinecap="round" />
      )}
      {v === "3" && (
        <path d="M128 86 L 136 124" className="fx-line" stroke="var(--cortical)" strokeWidth="2.4" strokeLinecap="round" />
      )}
      <text x="58" y="186" style={mono}>Z1</text>
      <text x="96" y="186" style={mono}>Z2</text>
      <text x="128" y="186" style={mono}>Z3</text>
      <text x="150" y="204" style={label}>
        {v === "1" && "Z1: avulsão da tuberosidade"}
        {v === "2" && "Z2: Jones (junção metafisodiafisária)"}
        {v === "3" && "Z3: diafisária proximal (estresse)"}
      </text>
    </svg>
  );
};

/* -- 4. Classificação de Torg (variantes I / II / III) --------------------- */
const Torg: FC<FigureProps> = ({ className, title, variant }) => {
  const v = variant ?? "I";
  return (
    <svg
      viewBox="0 0 300 200"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `Classificação de Torg da fratura por estresse — tipo ${v}`}</title>
      <path d="M60 78 C 50 84, 50 108, 62 116 L 240 104 C 252 102, 252 92, 240 90 L 66 76 Z" {...BONE} />
      {/* linha de fratura */}
      <path d="M104 76 L 112 116" className="fx-line" stroke="var(--cortical)" strokeWidth="2.6" strokeLinecap="round" />
      {v === "II" && (
        /* reação periosteal / alargamento — linha de esclerose */
        <>
          <path d="M94 80 C 100 96, 100 100, 96 114" stroke="var(--amber)" strokeWidth="2" fill="none" />
          <path d="M122 80 C 116 96, 116 100, 122 114" stroke="var(--amber)" strokeWidth="2" fill="none" />
        </>
      )}
      {v === "III" && (
        /* canal medular obliterado (esclerose) + gap alargado */
        <>
          <rect x="96" y="82" width="24" height="30" fill="var(--amber)" opacity="0.22" />
          <path d="M100 76 L 108 116 M116 76 L 124 116" className="fx-line" stroke="var(--cortical)" strokeWidth="2.6" strokeLinecap="round" />
        </>
      )}
      <text x="60" y="150" style={mono}>
        {v === "I" && "Torg I — aguda (sem esclerose)"}
        {v === "II" && "Torg II — retardo de consolidação"}
        {v === "III" && "Torg III — pseudartrose (esclerose)"}
      </text>
    </svg>
  );
};

/* -- 5. Via de acesso percutânea (entry point) ----------------------------- */
const Acesso: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 320 220"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Acesso percutâneo 'high and inside' na base do quinto metatarso"}</title>
    <path d="M70 96 C 60 102, 58 124, 70 134 L 100 124 L 250 112 C 262 110, 262 102, 250 100 L 104 92 Z" {...BONE} />
    <path d="M70 134 C 56 146, 56 164, 76 160 C 92 156, 92 144, 86 136 Z" {...BONE} />
    {/* ponto de entrada "high and inside": dorsomedial, proximal na tuberosidade */}
    <circle cx="80" cy="120" r="5" fill="var(--teal)" />
    {/* trajeto do fio guia alinhado ao canal */}
    <line x1="80" y1="120" x2="230" y2="108" stroke="var(--teal)" strokeWidth="1.6" strokeDasharray="6 4" />
    {/* incisão cutânea proximal ao ponto de entrada */}
    <line x1="66" y1="104" x2="88" y2="98" stroke="var(--cortical)" strokeWidth="2.4" strokeLinecap="round" />
    {/* nervo sural / ramo dorsal em risco (lateral) */}
    <path d="M60 168 C 78 164, 96 158, 112 150" {...SOFT} strokeDasharray="4 4" strokeLinecap="round" />
    <text x="40" y="92" style={label}>incisão</text>
    <text x="90" y="132" style={mono}>“high &amp; inside”</text>
    <text x="150" y="96" style={label}>eixo do canal medular</text>
    <text x="44" y="188" style={label}>n. sural (ramo dorsolateral)</text>
  </svg>
);

/* -- 6. Passo 1: ponto de entrada e fio guia ------------------------------- */
const Step1: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 320 200"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Passo 1: fio guia no eixo medular sob fluoroscopia"}</title>
    <path d="M70 88 C 60 94, 58 116, 70 126 L 100 116 L 250 104 C 262 102, 262 94, 250 92 L 104 84 Z" {...BONE} />
    <path d="M70 126 C 56 138, 56 156, 76 152 C 92 148, 92 136, 86 128 Z" {...BONE} />
    {/* linha de fratura Jones (Z2) */}
    <path d="M104 84 L 112 118" className="fx-line" stroke="var(--cortical)" strokeWidth="2.2" strokeLinecap="round" />
    {/* fio guia intramedular */}
    <line x1="78" y1="112" x2="238" y2="100" stroke="var(--teal)" strokeWidth="2.4" />
    <circle cx="238" cy="100" r="3" fill="var(--teal)" />
    <text x="60" y="176" style={mono}>fio guia (2 planos: AP + oblíqua)</text>
    <text x="118" y="76" style={label}>foco Jones</text>
  </svg>
);

/* -- 7. Passo 2: broca e medição do parafuso ------------------------------- */
const Step2: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 320 200"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Passo 2: fresagem e escolha do maior diâmetro que o canal comporta"}</title>
    <path d="M70 88 C 60 94, 58 116, 70 126 L 100 116 L 250 104 C 262 102, 262 94, 250 92 L 104 84 Z" {...BONE} />
    <path d="M70 126 C 56 138, 56 156, 76 152 C 92 148, 92 136, 86 128 Z" {...BONE} />
    {/* canal fresado */}
    <line x1="78" y1="112" x2="210" y2="102" stroke="var(--surface-2, var(--surface))" strokeWidth="7" />
    <line x1="78" y1="112" x2="210" y2="102" stroke="var(--teal)" strokeWidth="2" strokeDasharray="5 3" />
    {/* cota de comprimento (âmbar) */}
    <line x1="80" y1="140" x2="208" y2="130" stroke="var(--amber)" strokeWidth="1.4" />
    <line x1="80" y1="134" x2="80" y2="146" stroke="var(--amber)" strokeWidth="1.4" />
    <line x1="208" y1="124" x2="208" y2="136" stroke="var(--amber)" strokeWidth="1.4" />
    <text x="110" y="160" style={mono}>comprimento útil</text>
    <text x="60" y="180" style={label}>Ø = maior que o istmo comporte</text>
  </svg>
);

/* -- 8. Passo 3: parafuso intramedular ------------------------------------- */
const Step3: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 320 200"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Passo 3: parafuso intramedular cruzando o foco com compressão"}</title>
    <path d="M70 88 C 60 94, 58 116, 70 126 L 100 116 L 250 104 C 262 102, 262 94, 250 92 L 104 84 Z" {...BONE} />
    <path d="M70 126 C 56 138, 56 156, 76 152 C 92 148, 92 136, 86 128 Z" {...BONE} />
    {/* foco consolidado (linha tênue) */}
    <path d="M104 84 L 112 118" stroke="var(--ink-soft)" strokeWidth="1" strokeDasharray="2 3" />
    {/* parafuso: haste + cabeça enterrada na tuberosidade */}
    <line x1="80" y1="112" x2="206" y2="102" stroke="var(--teal)" strokeWidth="4" strokeLinecap="round" />
    {/* roscas */}
    {Array.from({ length: 7 }).map((_, i) => (
      <line
        key={i}
        x1={150 + i * 8}
        y1={108 - i * 0.4}
        x2={156 + i * 8}
        y2={100 - i * 0.4}
        stroke="var(--teal)"
        strokeWidth="1.4"
      />
    ))}
    <circle cx="80" cy="112" r="5" fill="var(--teal)" />
    <text x="60" y="170" style={mono}>parafuso IM (rosca cruza o foco)</text>
    <text x="150" y="146" style={label}>compressão interfragmentar</text>
  </svg>
);

export const figures: Record<string, FC<FigureProps>> = {
  "fratura-quinto-metatarso:anatomia": Anatomia,
  "fratura-quinto-metatarso:vascular": Vascular,
  "fratura-quinto-metatarso:zonas": Zonas,
  "fratura-quinto-metatarso:torg": Torg,
  "fratura-quinto-metatarso:acesso": Acesso,
  "fratura-quinto-metatarso:step-1": Step1,
  "fratura-quinto-metatarso:step-2": Step2,
  "fratura-quinto-metatarso:step-3": Step3,
};
