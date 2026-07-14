import type { FC } from "react";
import type { FigureProps } from "../../../types/topic";

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

/* Radiografia esquemática: incidência AP do antebraço com fratura do terço
   distal do rádio, encurtamento radial e alargamento/luxação da DRUJ. */
export const Radiograph: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 320 380"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Fratura do terço distal do rádio com lesão da articulação radioulnar distal"}</title>

    {/* ulna (medial, intacta) */}
    <path
      {...boneBack}
      d="M196 40 C204 44, 208 58, 206 82 C204 150, 202 224, 200 288 C199 306, 202 318, 208 326 C214 320, 218 308, 219 292 C221 224, 223 150, 224 80 C225 58, 220 46, 210 40 Z"
    />

    {/* rádio - fragmento proximal */}
    <path
      {...bone}
      d="M112 42 C120 46, 124 60, 123 82 C122 138, 120 190, 118 226
        L152 232 C152 190, 150 138, 150 84 C151 60, 144 46, 128 40 Z"
    />
    {/* rádio - fragmento distal (encurtado e transladado) */}
    <path
      {...bone}
      d="M120 244 C118 268, 116 288, 118 300 C119 316, 128 330, 150 338
        C172 332, 182 318, 183 300 C184 282, 182 262, 180 244
        C168 250, 138 250, 120 244 Z"
    />

    {/* traço de fratura */}
    <path d="M118 226 C132 238, 150 240, 152 232" {...corticalStroke} strokeWidth="2.5" />
    <path d="M120 244 C138 250, 168 250, 180 244" {...corticalStroke} strokeWidth="2.5" strokeDasharray="4 3" />

    {/* bloco carpal + polegar */}
    <path
      {...boneBack}
      d="M112 344 C112 360, 128 368, 158 368 C190 368, 214 360, 216 344
        C212 356, 150 358, 118 350 Z"
    />
    <path {...bone} d="M92 322 C82 330, 82 346, 96 350 C108 348, 112 336, 108 326 Z" />

    {/* medida de alargamento da DRUJ */}
    <line x1="183" y1="256" x2="200" y2="256" stroke="var(--amber)" strokeWidth="1.5" />
    <line x1="183" y1="250" x2="183" y2="262" stroke="var(--amber)" />
    <line x1="200" y1="250" x2="200" y2="262" stroke="var(--amber)" />
    <text x="228" y="260" {...label} fill="var(--amber)">DRUJ alargada</text>

    {/* seta de encurtamento radial */}
    <path d="M258 244 L258 300" stroke="var(--amber)" strokeWidth="2" markerEnd="url(#galArrow)" markerStart="url(#galArrow)" />
    <defs>
      <marker id="galArrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
        <path d="M0 0 L10 5 L0 10 Z" fill="var(--amber)" />
      </marker>
    </defs>
    <text x="266" y="276" {...label} fill="var(--amber)">encurtamento</text>

    <text x="65" y="150" {...label} fill="var(--cortical)">fratura</text>
    <text x="55" y="164" {...label} fill="var(--cortical)">radial distal</text>
    <text x="232" y="130" {...label}>ulna íntegra</text>
    <text x="160" y="24" {...mono} textAnchor="middle">incidência AP</text>
    <text x="160" y="380" {...label} textAnchor="middle">Fratura radial + luxação/subluxação ulnar distal · avaliar sempre punho e cotovelo</text>
  </svg>
);

/* Anatomia axial da DRUJ: notch sigmoide, cabeça da ulna, TFCC e ligamentos
   radioulnares dorsal e volar. */
export const Anatomy: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 440 300"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Anatomia axial da articulação radioulnar distal: notch sigmoide, cabeça da ulna e complexo da fibrocartilagem triangular"}</title>

    {/* rádio distal com notch sigmoide (concavidade ulnar) */}
    <path
      {...bone}
      d="M60 70 C120 52, 190 58, 232 84
        C222 108, 224 148, 246 174
        C214 208, 150 224, 96 214
        C58 206, 42 168, 46 128 C48 104, 52 84, 60 70 Z"
    />
    {/* cabeça da ulna */}
    <circle cx="300" cy="150" r="52" {...bone} />
    {/* fóvea da ulna */}
    <circle cx="272" cy="150" r="6" fill="var(--surface-2, var(--surface))" stroke="var(--ink-soft)" strokeWidth="1.4" />

    {/* disco articular / TFCC entre notch sigmoide e fóvea */}
    <path
      d="M246 174 C258 168, 266 160, 272 150 C266 140, 258 132, 246 126"
      fill="var(--teal-tint)"
      stroke="var(--teal)"
      strokeWidth="2.5"
    />

    {/* ligamento radioulnar dorsal (topo) */}
    <path d="M232 92 C258 96, 282 106, 296 122" {...tealStroke} />
    {/* ligamento radioulnar volar (base) */}
    <path d="M240 186 C266 190, 288 184, 300 168" {...tealStroke} />

    <path d="M180 92 L190 78" stroke="var(--line-strong)" />
    <text x="120" y="72" {...label}>notch sigmoide (rádio)</text>
    <text x="300" y="153" {...label} textAnchor="middle">cabeça</text>
    <text x="300" y="167" {...label} textAnchor="middle">da ulna</text>
    <path d="M264 150 L232 150" stroke="var(--line-strong)" />
    <text x="176" y="153" {...label} fill="var(--teal)">TFCC / disco</text>
    <text x="300" y="108" {...label} fill="var(--teal)" textAnchor="middle">RUL dorsal</text>
    <text x="300" y="205" {...label} fill="var(--teal)" textAnchor="middle">RUL volar</text>
    <text x="220" y="24" {...mono} textAnchor="middle">corte axial da DRUJ</text>
    <text x="220" y="286" {...label} textAnchor="middle">
      Os ligamentos radioulnares dorsal e volar e o TFCC são os estabilizadores primários da DRUJ.
    </text>
  </svg>
);

/* Classificação de Rettig-Raskin: localização da fratura radial em relação
   à superfície articular distal (limiar de 7,5 cm) prevê a instabilidade da DRUJ. */
export const Classification: FC<FigureProps> = ({ className, title, variant }) => {
  const v = (variant ?? "tipo-i").toLowerCase();
  const typeI = v === "tipo-i" || v === "i" || v === "tipoi";
  const fractureY = typeI ? 250 : 150;

  return (
    <svg
      viewBox="0 0 440 320"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `Classificação de Rettig-Raskin: ${typeI ? "tipo I (distal, ≤ 7,5 cm)" : "tipo II (proximal, > 7,5 cm)"}`}</title>

      {/* ulna */}
      <path {...boneBack} d="M244 40 C252 46, 254 60, 253 82 L250 262 C249 280, 254 292, 262 298 C270 290, 272 278, 271 260 L274 82 C275 60, 268 46, 258 40 Z" />

      {/* rádio */}
      <path {...bone} d="M150 40 C162 46, 168 60, 167 84 L164 250 C163 278, 172 296, 192 300 C212 296, 220 278, 219 250 L216 84 C217 60, 210 46, 196 40 Z" />

      {/* linha da superfície articular distal (referência) */}
      <line x1="120" y1="292" x2="290" y2="292" stroke="var(--line-strong)" strokeDasharray="3 3" />
      <text x="120" y="308" {...label}>superfície articular distal</text>

      {/* limiar de 7,5 cm */}
      <line x1="120" y1="200" x2="290" y2="200" stroke="var(--amber)" strokeWidth="1.5" strokeDasharray="5 4" />
      <text x="296" y="204" {...label} fill="var(--amber)">7,5 cm</text>
      <line x1="112" y1="200" x2="112" y2="292" stroke="var(--amber)" strokeWidth="1.5" />
      <line x1="108" y1="200" x2="116" y2="200" stroke="var(--amber)" />
      <line x1="108" y1="292" x2="116" y2="292" stroke="var(--amber)" />

      {/* traço de fratura na localização do tipo */}
      <path d={`M164 ${fractureY} C180 ${fractureY + 10}, 200 ${fractureY + 10}, 219 ${fractureY}`} {...corticalStroke} strokeWidth="3" />

      {/* estado da DRUJ */}
      <rect x="300" y="40" width="118" height="30" rx="8" fill={typeI ? "var(--cortical-tint)" : "var(--teal-tint)"} />
      <text x="359" y="59" {...mono} textAnchor="middle" fill={typeI ? "var(--cortical)" : "var(--teal-deep)"}>
        {typeI ? "TIPO I" : "TIPO II"}
      </text>

      <text x="308" y="98" {...label} fill={typeI ? "var(--cortical)" : "var(--teal)"}>
        {typeI ? "DRUJ instável" : "DRUJ usualmente"}
      </text>
      <text x="308" y="112" {...label} fill={typeI ? "var(--cortical)" : "var(--teal)"}>
        {typeI ? "frequente" : "estável"}
      </text>
      <text x="308" y="132" {...label}>{typeI ? "~55% em série" : "~6% em série"}</text>
      <text x="308" y="146" {...label}>{typeI ? "operatória" : "operatória"}</text>

      <text x="70" y="150" {...label}>rádio</text>
      <text x="220" y="24" {...mono} textAnchor="middle">
        {typeI ? "fratura distal (≤ 7,5 cm)" : "fratura no terço médio (> 7,5 cm)"}
      </text>
    </svg>
  );
};

/* Forças deformantes que desestabilizam a DRUJ e o fragmento distal do rádio,
   explicando a falha do tratamento conservador em adultos. */
export const InstabilityForces: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 440 320"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Forças deformantes na fratura-luxação de Galeazzi"}</title>

    {/* ulna */}
    <path {...boneBack} d="M250 44 C258 48, 260 62, 259 84 L256 250 C255 268, 260 280, 268 286 C276 278, 278 266, 277 248 L280 84 C281 62, 274 50, 264 44 Z" />
    {/* rádio proximal */}
    <path {...bone} d="M150 44 C162 50, 168 64, 167 88 L164 176 L216 176 L213 88 C214 64, 206 50, 192 44 Z" />
    {/* rádio distal desviado */}
    <path {...bone} d="M160 196 C158 214, 156 240, 158 258 C160 280, 172 296, 194 300 C216 294, 226 278, 227 258 C228 236, 226 212, 224 196 C206 202, 178 202, 160 196 Z" />
    <path d="M164 176 C182 186, 200 186, 216 176" {...corticalStroke} strokeWidth="2.5" />

    {/* bloco da mão */}
    <path {...boneBack} d="M150 306 C150 320, 168 326, 196 326 C224 326, 240 320, 238 306 C230 316, 168 316, 150 306 Z" />

    {/* braquiorradial: tração proximal-radial do fragmento distal */}
    <path d="M200 250 C170 232, 150 200, 146 160" fill="none" stroke="var(--teal)" strokeWidth="3" markerEnd="url(#forceArrow)" />
    <text x="60" y="150" {...label} fill="var(--teal)">braquiorradial</text>
    <text x="72" y="164" {...label} fill="var(--teal)">(encurta/roda)</text>

    {/* pronador quadrado: rotação do fragmento distal */}
    <path d="M224 240 C252 246, 270 234, 274 210" fill="none" stroke="var(--amber)" strokeWidth="3" markerEnd="url(#forceArrowA)" />
    <text x="286" y="234" {...label} fill="var(--amber)">pronador</text>
    <text x="286" y="248" {...label} fill="var(--amber)">quadrado</text>

    {/* abdutor longo / extensor curto do polegar */}
    <path d="M180 296 C160 306, 146 322, 140 336" fill="none" stroke="var(--teal)" strokeWidth="2.5" markerEnd="url(#forceArrow)" />
    <text x="70" y="300" {...label} fill="var(--teal)">abd. longo do</text>
    <text x="86" y="314" {...label} fill="var(--teal)">polegar</text>

    {/* peso da mão */}
    <path d="M196 326 L196 356" fill="none" stroke="var(--amber)" strokeWidth="2.5" markerEnd="url(#forceArrowA)" />

    <defs>
      <marker id="forceArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M0 0 L10 5 L0 10 Z" fill="var(--teal)" />
      </marker>
      <marker id="forceArrowA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M0 0 L10 5 L0 10 Z" fill="var(--amber)" />
      </marker>
    </defs>

    <text x="220" y="24" {...mono} textAnchor="middle">vetores deformantes</text>
    <text x="220" y="380" {...label} textAnchor="middle" />
  </svg>
);

/* Via de Henry (volar) para o rádio: intervalo entre braquiorradial e flexor
   radial do carpo, protegendo artéria radial e ramo sensitivo do nervo radial. */
export const HenryApproach: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 440 300"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Via volar de Henry para o rádio: intervalo braquiorradial–flexor radial do carpo"}</title>

    {/* corte transverso esquemático do antebraço */}
    <ellipse cx="220" cy="150" rx="180" ry="112" fill="var(--surface-2, var(--surface))" stroke="var(--line-strong)" strokeWidth="1.4" />

    {/* rádio e ulna */}
    <circle cx="150" cy="150" r="34" {...bone} />
    <circle cx="300" cy="150" r="30" {...bone} />
    <text x="150" y="154" {...label} textAnchor="middle">rádio</text>
    <text x="300" y="154" {...label} textAnchor="middle">ulna</text>

    {/* braquiorradial (BR) */}
    <path d="M78 128 C96 108, 122 106, 138 122 C130 142, 104 148, 82 140 Z" fill="var(--surface)" stroke="var(--ink-soft)" strokeWidth="1.4" />
    <text x="72" y="112" {...label}>braquiorradial</text>
    {/* flexor radial do carpo (FCR) */}
    <path d="M160 122 C176 106, 202 108, 218 128 C204 148, 176 148, 158 138 Z" fill="var(--surface)" stroke="var(--ink-soft)" strokeWidth="1.4" />
    <text x="176" y="108" {...label}>FCR</text>

    {/* intervalo cirúrgico */}
    <path d="M148 116 C148 96, 150 84, 152 74" {...tealStroke} strokeDasharray="6 4" />
    <text x="156" y="70" {...mono} fill="var(--teal)">intervalo BR–FCR</text>

    {/* artéria radial (em risco) */}
    <circle cx="146" cy="112" r="5" fill="var(--amber)" />
    <text x="96" y="196" {...label} fill="var(--amber)">artéria radial</text>
    <path d="M120 190 L142 116" stroke="var(--line-strong)" />

    {/* ramo sensitivo do nervo radial */}
    <circle cx="120" cy="132" r="4" fill="var(--amber)" />
    <text x="40" y="160" {...label} fill="var(--amber)">ramo sensitivo</text>
    <text x="60" y="174" {...label} fill="var(--amber)">do n. radial</text>

    <text x="220" y="24" {...mono} textAnchor="middle">via volar de Henry</text>
    <text x="220" y="286" {...label} textAnchor="middle">
      O pronador quadrado é elevado do rádio distal; a supinação relaxa o intervalo e afasta as estruturas radiais.
    </text>
  </svg>
);

/* Fixação do rádio com placa restaurando comprimento, alinhamento e rotação,
   reduzindo a DRUJ. */
export const RadiusFixation: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 320 380"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Osteossíntese do rádio com placa restaurando comprimento e reduzindo a articulação radioulnar distal"}</title>

    {/* ulna */}
    <path {...boneBack} d="M196 40 C204 44, 208 58, 206 82 C204 150, 202 224, 200 288 C199 306, 202 318, 208 326 C214 320, 218 308, 219 292 C221 224, 223 150, 224 80 C225 58, 220 46, 210 40 Z" />

    {/* rádio reduzido (comprimento restaurado) */}
    <path
      {...bone}
      d="M112 42 C120 46, 124 60, 123 82 C122 160, 120 240, 118 296
        C118 316, 128 332, 150 340 C172 334, 182 318, 182 298
        C182 242, 150 160, 150 84 C151 60, 144 46, 128 40 Z"
    />

    {/* placa volar com parafusos */}
    <rect x="120" y="150" width="16" height="130" rx="6" fill="var(--teal-tint)" stroke="var(--teal)" strokeWidth="2" />
    {[168, 194, 220, 246, 272].map((cy) => (
      <line key={cy} x1="128" y1={cy} x2="198" y2={cy} stroke="var(--teal)" strokeWidth="2.5" strokeLinecap="round" />
    ))}
    {[168, 194, 220, 246, 272].map((cy) => (
      <circle key={`h-${cy}`} cx="128" cy={cy} r="4" fill="var(--surface)" stroke="var(--teal)" strokeWidth="2" />
    ))}

    {/* DRUJ reduzida */}
    <line x1="183" y1="300" x2="196" y2="300" stroke="var(--teal)" strokeWidth="1.5" />
    <text x="200" y="304" {...label} fill="var(--teal)">DRUJ congruente</text>

    {/* bloco carpal */}
    <path {...boneBack} d="M112 346 C112 362, 128 370, 158 370 C190 370, 214 362, 216 346 C212 358, 150 360, 118 352 Z" />

    <text x="60" y="220" {...mono} textAnchor="middle" fill="var(--teal)">placa</text>
    <text x="240" y="130" {...label}>ulna</text>
    <text x="160" y="24" {...mono} textAnchor="middle">rádio fixado</text>
    <text x="160" y="382" {...label} textAnchor="middle">Restaurar comprimento, eixo e rotação reduz indiretamente a DRUJ na maioria dos casos.</text>
  </svg>
);

/* Teste intraoperatório de estabilidade da DRUJ após fixação do rádio. */
export const DrujTest: FC<FigureProps> = ({ className, title, variant }) => {
  const unstable = (variant ?? "instavel").toLowerCase().startsWith("inst");

  return (
    <svg
      viewBox="0 0 440 300"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `Teste de estabilidade da DRUJ: ${unstable ? "instável" : "estável"}`}</title>

      {/* rádio distal fixo */}
      <path {...bone} d="M60 96 C120 84, 176 88, 214 108 C206 132, 208 168, 228 190 C196 214, 140 224, 92 214 C58 206, 46 172, 48 140 C50 118, 54 104, 60 96 Z" />
      <text x="128" y="150" {...label} textAnchor="middle">rádio distal</text>

      {/* cabeça da ulna - posição neutra (referência) */}
      <circle cx="300" cy="150" r="46" fill="none" stroke="var(--line-strong)" strokeWidth="1.4" strokeDasharray="4 3" />

      {/* cabeça da ulna deslocada conforme o teste */}
      <circle cx={unstable ? 330 : 302} cy="150" r="46" {...bone} />
      <text x={unstable ? 330 : 302} y="154" {...label} textAnchor="middle">ulna</text>

      {/* seta de translação (piano-key / balotamento) */}
      <path
        d={unstable ? "M300 96 C320 82, 344 82, 360 94" : "M300 100 C308 96, 316 96, 322 100"}
        fill="none"
        stroke={unstable ? "var(--cortical)" : "var(--teal)"}
        strokeWidth="3"
        markerEnd={unstable ? "url(#testArrowC)" : "url(#testArrowT)"}
      />
      <defs>
        <marker id="testArrowT" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 Z" fill="var(--teal)" />
        </marker>
        <marker id="testArrowC" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 Z" fill="var(--cortical)" />
        </marker>
      </defs>

      <rect x="320" y="214" width="104" height="30" rx="8" fill={unstable ? "var(--cortical-tint)" : "var(--teal-tint)"} />
      <text x="372" y="233" {...mono} textAnchor="middle" fill={unstable ? "var(--cortical)" : "var(--teal-deep)"}>
        {unstable ? "INSTÁVEL" : "ESTÁVEL"}
      </text>

      <text x="220" y="24" {...mono} textAnchor="middle">estresse ântero-posterior · comparar com o lado são</text>
      <text x="220" y="286" {...label} textAnchor="middle">
        {unstable
          ? "Translação aumentada em relação ao contralateral exige estabilização da DRUJ."
          : "Translação simétrica ao lado são: manter em cast e reabilitar."}
      </text>
    </svg>
  );
};

/* Estratégias de estabilização da DRUJ conforme o achado intraoperatório. */
export const DrujStabilization: FC<FigureProps> = ({ className, title, variant }) => {
  const v = (variant ?? "reducao").toLowerCase();
  const captions: Record<string, string> = {
    reducao: "Estável: imobilização em supinação",
    transfixacao: "Instável redutível: transfixação com fios de Kirschner",
    reparo: "Irredutível: redução aberta / reparo do TFCC",
  };

  return (
    <svg
      viewBox="0 0 440 300"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `Estabilização da DRUJ: ${captions[v] ?? v}`}</title>

      {/* rádio distal + ulna, corte transverso ao nível da DRUJ */}
      <path {...bone} d="M60 96 C118 84, 172 88, 210 108 C202 132, 204 166, 224 188 C194 212, 140 222, 94 212 C60 204, 48 172, 50 140 C52 118, 54 104, 60 96 Z" />
      <circle cx={v === "reparo" ? 300 : 296} cy="150" r="46" {...bone} />
      <text x="120" y="150" {...label} textAnchor="middle">rádio</text>
      <text x={v === "reparo" ? 300 : 296} y="154" {...label} textAnchor="middle">ulna</text>

      {v === "reducao" && (
        <>
          {/* seta de supinação */}
          <path d="M300 96 C332 92, 352 116, 348 146" fill="none" stroke="var(--teal)" strokeWidth="3" markerEnd="url(#stabArrow)" />
          <text x="356" y="120" {...label} fill="var(--teal)">supinação</text>
          <path d="M200 214 C240 232, 300 230, 344 208" fill="none" stroke="var(--amber)" strokeWidth="6" strokeLinecap="round" opacity="0.4" />
          <text x="220" y="262" {...label} textAnchor="middle" fill="var(--amber)">cast axilopalmar em supinação</text>
        </>
      )}

      {v === "transfixacao" && (
        <>
          {/* dois fios de Kirschner ulna->rádio proximal à DRUJ */}
          <line x1="330" y1="120" x2="70" y2="128" stroke="var(--teal)" strokeWidth="3" />
          <line x1="332" y1="178" x2="72" y2="182" stroke="var(--teal)" strokeWidth="3" />
          <circle cx="330" cy="120" r="4" fill="var(--teal)" />
          <circle cx="332" cy="178" r="4" fill="var(--teal)" />
          <text x="150" y="262" {...label} textAnchor="middle" fill="var(--teal)">2 fios, ulna→rádio, em supinação, proximais à DRUJ</text>
        </>
      )}

      {v === "reparo" && (
        <>
          {/* interposição de tecido (ECU) bloqueando a redução */}
          <path d="M256 120 C244 138, 244 162, 256 180" {...corticalStroke} strokeWidth="4" />
          <text x="230" y="104" {...label} fill="var(--cortical)" textAnchor="middle">interposição do ECU</text>
          {/* âncora / reparo foveal do TFCC */}
          <circle cx="276" cy="150" r="5" fill="var(--teal)" />
          <path d="M276 150 C260 150, 248 152, 240 160" fill="none" stroke="var(--teal)" strokeWidth="2.5" />
          <text x="150" y="262" {...label} textAnchor="middle" fill="var(--teal)">extrair tecido interposto e reparar o TFCC à fóvea</text>
        </>
      )}

      <defs>
        <marker id="stabArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 Z" fill="var(--teal)" />
        </marker>
      </defs>

      <text x="220" y="24" {...mono} textAnchor="middle">
        {v === "reducao" ? "DRUJ estável" : v === "transfixacao" ? "DRUJ instável redutível" : "DRUJ irredutível"}
      </text>
      <text x="220" y="288" {...label} textAnchor="middle">{captions[v] ?? v}</text>
    </svg>
  );
};

export const figures: Record<string, FC<FigureProps>> = {
  "fratura-galeazzi:radiografia": Radiograph,
  "fratura-galeazzi:anatomia": Anatomy,
  "fratura-galeazzi:classificacao": Classification,
  "fratura-galeazzi:instabilidade": InstabilityForces,
  "fratura-galeazzi:via-henry": HenryApproach,
  "fratura-galeazzi:fixacao": RadiusFixation,
  "fratura-galeazzi:teste-druj": DrujTest,
  "fratura-galeazzi:estabilizacao-druj": DrujStabilization,
};
