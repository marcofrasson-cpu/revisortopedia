import type { FC, ReactNode } from "react";
import type { FigureProps } from "../../../types/topic";

/* ----------------------------------------------------------------------------
   Fratura das falanges — figuras esquemáticas originais (line-art 2 tons).
   Fundamentadas em Rockwood & Green's Fractures in Adults, 10th ed. (2024).
   Sem reprodução de material protegido. Cores apenas por CSS var.
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

const amberLine = {
  fill: "none",
  stroke: "var(--amber)",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
};

/* Osso longo horizontal genérico (falange/metacarpo): base côncava à
   esquerda, cabeça arredondada à direita. Origem local no centro da base. */
function boneSeg(len: number, h = 20): string {
  const b = h * 1.25;
  const k = h;
  return `M0 ${-b}
    C ${len * 0.12} ${-b} ${len * 0.2} ${-h * 0.82} ${len * 0.3} ${-h * 0.78}
    L ${len * 0.72} ${-k}
    C ${len * 0.9} ${-k} ${len} ${-k * 0.85} ${len} 0
    C ${len} ${k * 0.85} ${len * 0.9} ${k} ${len * 0.72} ${k}
    L ${len * 0.3} ${h * 0.78}
    C ${len * 0.2} ${h * 0.82} ${len * 0.12} ${b} 0 ${b}
    C ${-9} ${b * 0.5} ${-9} ${-b * 0.5} 0 ${-b} Z`;
}

function Bone({
  x,
  y,
  len,
  h = 20,
  back,
  children,
}: {
  x: number;
  y: number;
  len: number;
  h?: number;
  back?: boolean;
  children?: ReactNode;
}) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path {...(back ? boneBack : bone)} d={boneSeg(len, h)} />
      {children}
    </g>
  );
}

/* ============================================================================
   1. Anatomia — raio digital em perfil: MC, P1, P2, P3 e as inserções
   tendíneas que ditam as forças deformantes.
   ========================================================================== */
export const Anatomy: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 480 300"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Anatomia do raio digital em perfil: falanges proximal, média e distal e inserções tendíneas"}</title>

    {/* Ossos: metacarpo, P1, P2, P3 (dorsal em cima) */}
    <Bone x={20} y={150} len={110} h={22} back />
    <Bone x={150} y={150} len={112} h={20} />
    <Bone x={282} y={150} len={78} h={16} />
    <g transform="translate(378 150)">
      <path {...bone} d="M0 -18 C 14 -18 26 -14 34 -6 C 42 2 44 10 34 15 C 20 20 4 20 0 15 C -9 8 -9 -10 0 -18 Z" />
      {/* tufo/penacho distal */}
      <path d="M34 -6 C 42 -4 48 -2 50 0 C 48 2 42 4 34 6" fill="none" stroke="var(--ink-soft)" strokeWidth={1.2} />
    </g>

    {/* Tendão extensor (dorsal) — banda central no dorso de P2, terminal em P3 */}
    <path
      d="M40 122 C 150 116 250 114 356 118"
      fill="none"
      stroke="var(--teal)"
      strokeWidth={3}
      strokeLinecap="round"
      opacity={0.85}
    />
    <path d="M262 118 L286 132" {...teal} strokeWidth={2.2} />
    <path d="M356 118 L378 134" {...teal} strokeWidth={2.2} />
    <text x="205" y="110" {...label} fill="var(--teal)" textAnchor="middle">aparelho extensor</text>
    <text x="288" y="146" {...label} fill="var(--teal)">banda central → base P2</text>

    {/* Tendões flexores (volar) — FDS em P2, FDP em P3 */}
    <path
      d="M40 182 C 150 190 250 192 356 186"
      fill="none"
      stroke="var(--cortical)"
      strokeWidth={3}
      strokeLinecap="round"
      opacity={0.55}
    />
    <path d="M300 188 L318 176" {...cortical} strokeWidth={2.2} opacity={0.7} />
    <path d="M356 186 L376 172" {...cortical} strokeWidth={2.2} opacity={0.7} />
    <text x="255" y="210" {...label}>FDS → base P2 · FDP → base P3</text>

    {/* Interósseos/lumbricais na base de P1 */}
    <path d="M150 176 C 140 186 132 192 122 196" {...cortical} strokeWidth={2.2} opacity={0.7} />
    <text x="96" y="210" {...label} textAnchor="middle">interósseos → base P1</text>

    {/* Rótulos ósseos */}
    <text x="72" y="150" {...mono} textAnchor="middle">MC</text>
    <text x="206" y="150" {...mono} textAnchor="middle">P1</text>
    <text x="320" y="150" {...mono} textAnchor="middle">P2</text>
    <text x="398" y="150" {...mono} textAnchor="middle">P3</text>
    <text x="150" y="252" {...label}>MCF</text>
    <text x="278" y="252" {...label}>IFP</text>
    <text x="372" y="252" {...label}>IFD</text>
    {[152, 280, 374].map((x, i) => (
      <line key={i} x1={x + 8} y1={244} x2={x + 8} y2={172} stroke="var(--amber)" strokeWidth={1} strokeDasharray="3 3" />
    ))}

    <text x="240" y="288" {...label} textAnchor="middle">
      Cada falange tem base, diáfise, colo e cabeça bicondilar; as forças tendíneas opostas determinam o padrão de desvio.
    </text>
  </svg>
);

/* ============================================================================
   2. Forças deformantes por segmento (variant: proximal | media)
   ========================================================================== */
export const DeformingForces: FC<FigureProps> = ({ className, title, variant }) => {
  const v = variant ?? "proximal";
  const proximal = v === "proximal";
  return (
    <svg
      viewBox="0 0 440 300"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `Forças deformantes na fratura da falange ${proximal ? "proximal" : "média"}`}</title>
      <text x="220" y="26" {...mono} textAnchor="middle">
        {proximal ? "Falange proximal — ápice volar (palmar)" : "Falange média — depende da inserção do FDS"}
      </text>

      {proximal ? (
        <>
          {/* Dois fragmentos de P1 angulados com ápice volar */}
          <g transform="translate(90 150)">
            <path {...bone} d="M0 -26 C 8 -26 60 -22 66 -14 C 70 -6 66 6 60 14 C 54 22 8 26 0 26 C -10 16 -10 -16 0 -26 Z" />
          </g>
          <g transform="translate(178 168) rotate(20)">
            <path {...bone} d="M0 -20 C 40 -22 96 -18 108 -6 C 116 2 112 10 108 12 C 96 18 40 20 0 18 C -8 10 -8 -10 0 -20 Z" />
          </g>
          {/* traço de fratura */}
          <path d="M172 150 C 176 160 178 172 176 184" {...cortical} strokeWidth={3} />
          {/* base fletida pelos interósseos (seta para volar/baixo) */}
          <path d="M96 196 C 108 208 118 214 132 214" {...cortical} strokeWidth={2.4} markerEnd="url(#arrFp)" />
          <text x="60" y="228" {...label} fill="var(--cortical)">interósseos fletem a base</text>
          {/* fragmento distal estendido pelo aparelho extensor (seta dorsal) */}
          <path d="M300 150 C 312 138 320 130 330 122" {...teal} strokeWidth={2.4} markerEnd="url(#arrFt)" />
          <text x="300" y="118" {...label} fill="var(--teal)">extensor estende o distal</text>
          {/* marcador do ápice */}
          <path d="M150 214 C 175 224 205 224 230 214" {...amberLine} strokeDasharray="4 4" />
          <text x="190" y="252" {...label} fill="var(--amber)" textAnchor="middle">ápice volar → angulação palmar</text>
        </>
      ) : (
        <>
          {/* P2 com traço proximal à inserção do FDS → ápice dorsal;
              (esquema único destacando a dupla possibilidade) */}
          <g transform="translate(120 150)">
            <path {...bone} d="M0 -22 C 10 -22 48 -18 54 -12 C 58 -6 56 4 52 10 C 46 18 10 22 0 22 C -9 12 -9 -12 0 -22 Z" />
          </g>
          <g transform="translate(196 138) rotate(-16)">
            <path {...bone} d="M0 -18 C 30 -20 74 -16 84 -6 C 90 0 88 8 84 10 C 74 16 30 18 0 16 C -7 8 -7 -8 0 -18 Z" />
          </g>
          <path d="M188 148 C 190 138 192 128 190 118" {...cortical} strokeWidth={3} />
          <path d="M110 176 C 120 188 130 194 144 194" {...cortical} strokeWidth={2.2} markerEnd="url(#arrFp)" />
          <text x="70" y="210" {...label}>FDS traciona o fragmento distal</text>
          <text x="220" y="250" {...label} textAnchor="middle" fill="var(--amber)">
            Traço proximal ao FDS → ápice dorsal; distal → ápice volar
          </text>
        </>
      )}

      <defs>
        <marker id="arrFp" markerWidth="9" markerHeight="9" refX="5" refY="4.5" orient="auto">
          <path d="M0 0 L9 4.5 L0 9 Z" fill="var(--cortical)" />
        </marker>
        <marker id="arrFt" markerWidth="9" markerHeight="9" refX="5" refY="4.5" orient="auto">
          <path d="M0 0 L9 4.5 L0 9 Z" fill="var(--teal)" />
        </marker>
      </defs>

      <text x="220" y="288" {...label} textAnchor="middle">
        Conhecer o vetor deformante orienta a redução e a posição de imobilização.
      </text>
    </svg>
  );
};

/* ============================================================================
   3. Padrões de fratura (variant: transversa | obliqua | cominutiva | articular)
   ========================================================================== */
export const Patterns: FC<FigureProps> = ({ className, title, variant }) => {
  const v = variant ?? "transversa";
  const cap: Record<string, string> = {
    transversa: "Transversa — instável ao dobrar; angulação",
    obliqua: "Oblíqua/espiral — encurta e roda",
    cominutiva: "Cominutiva — múltiplos fragmentos",
    articular: "Articular — degrau na superfície",
  };
  return (
    <svg
      viewBox="0 0 360 300"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `Padrão de fratura da falange: ${v}`}</title>

      <Bone x={120} y={148} len={130} h={24}>
        {v === "transversa" && <path d="M65 -30 L65 30" {...cortical} strokeWidth={3.2} />}
        {v === "obliqua" && <path d="M40 -30 L96 34" {...cortical} strokeWidth={3.2} />}
        {v === "cominutiva" && (
          <>
            <path d="M52 -30 L60 30" {...cortical} strokeWidth={2.8} />
            <path d="M84 -30 L74 32" {...cortical} strokeWidth={2.8} />
            <path d="M56 2 L82 6" {...cortical} strokeWidth={2.4} />
          </>
        )}
        {v === "articular" && (
          <>
            {/* traço entrando na cabeça bicondilar */}
            <path d="M118 -22 L104 6" {...cortical} strokeWidth={3.2} />
            <path d="M104 6 L120 22" {...cortical} strokeWidth={3.2} strokeDasharray="4 3" />
            <circle cx={110} cy={4} r={3} fill="var(--amber)" />
          </>
        )}
      </Bone>

      {v === "articular" && (
        <text x="180" y="196" {...label} fill="var(--amber)" textAnchor="middle">degrau articular {">"} 1 mm → fixar</text>
      )}

      <text x="180" y="248" {...mono} textAnchor="middle">{cap[v]}</text>
      <text x="180" y="284" {...label} textAnchor="middle">
        Estabilidade e envolvimento articular guiam operar vs conservar.
      </text>
    </svg>
  );
};

/* ============================================================================
   4. Padrões articulares — condilar, base de P2 e fratura-luxação da IFP
   ========================================================================== */
export const Articular: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 470 300"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Padrões articulares: fratura condilar, da base da falange média e fratura-luxação da IFP"}</title>

    {/* A) Fratura unicondilar da cabeça de P1 */}
    <g transform="translate(20 40)">
      <text x="60" y="-6" {...mono} textAnchor="middle">condilar</text>
      <path {...bone} d="M20 40 C 20 20 30 12 44 12 C 58 12 66 22 66 40 L66 90 C 66 98 60 104 52 104 C 30 104 20 96 20 78 Z" />
      {/* dois côndilos */}
      <path d="M20 40 C 20 62 30 74 44 78 C 58 74 66 62 66 40" fill="none" stroke="var(--ink-soft)" strokeWidth={1.2} />
      {/* traço isolando um côndilo */}
      <path d="M44 12 L44 78" {...cortical} strokeWidth={2.8} />
      <path d="M44 78 C 40 92 36 100 30 104" {...cortical} strokeWidth={2.8} />
      <text x="44" y="130" {...label} textAnchor="middle">1 côndilo instável</text>
    </g>

    {/* B) Fratura da base volar de P2 (lábio palmar) */}
    <g transform="translate(160 40)">
      <text x="60" y="-6" {...mono} textAnchor="middle">base P2 (lábio volar)</text>
      <path {...bone} d="M22 14 C 22 8 30 6 46 6 C 68 6 78 10 78 20 L78 96 C 78 104 70 108 50 108 C 30 108 22 102 22 90 Z" />
      {/* fragmento volar destacado */}
      <path d="M22 78 C 40 82 60 82 78 78 L78 96 C 78 104 70 108 50 108 C 30 108 22 102 22 90 Z" fill="var(--amber)" opacity={0.28} stroke="var(--cortical)" strokeWidth={2.4} />
      <text x="50" y="130" {...label} textAnchor="middle">% articular = estabilidade</text>
    </g>

    {/* C) Fratura-luxação dorsal da IFP */}
    <g transform="translate(300 40)">
      <text x="70" y="-6" {...mono} textAnchor="middle">fratura-luxação IFP</text>
      {/* falange proximal (base fixa) */}
      <path {...boneBack} d="M6 44 C 6 30 14 24 30 24 C 46 24 54 34 54 48 L54 84 C 54 92 46 96 30 96 C 14 96 6 90 6 78 Z" />
      {/* falange média subluxada dorsalmente (deslocada para cima-direita) */}
      <g transform="translate(58 -6)">
        <path {...bone} d="M4 40 C 4 30 12 26 30 26 C 78 26 96 30 96 40 C 96 50 78 54 30 54 C 12 54 4 50 4 40 Z" />
      </g>
      {/* fragmento volar retido */}
      <path d="M46 78 C 54 82 60 84 62 84" {...cortical} strokeWidth={2.6} />
      <path d="M60 40 C 60 30 62 24 66 20" {...amberLine} strokeDasharray="3 3" markerEnd="url(#arrArt)" />
      <text x="70" y="126" {...label} textAnchor="middle">subluxação dorsal (V invertido)</text>
    </g>

    <defs>
      <marker id="arrArt" markerWidth="9" markerHeight="9" refX="5" refY="4.5" orient="auto">
        <path d="M0 0 L9 4.5 L0 9 Z" fill="var(--amber)" />
      </marker>
    </defs>

    <text x="235" y="288" {...label} textAnchor="middle">
      Fratura articular desviada ou instável → redução anatômica e fixação; a IFP tolera mal a incongruência.
    </text>
  </svg>
);

/* ============================================================================
   5. Opções de fixação (variant: kwire | parafusos | placa)
   ========================================================================== */
export const Fixation: FC<FigureProps> = ({ className, title, variant }) => {
  const v = variant ?? "kwire";
  const cap: Record<string, string> = {
    kwire: "Fios de Kirschner — rápido, percutâneo; menos estável",
    parafusos: "Parafusos interfragmentares — oblíqua/espiral",
    placa: "Placa — cominutiva/instável; mais rigidez de partes moles",
  };
  return (
    <svg
      viewBox="0 0 380 300"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `Fixação da fratura de falange: ${v}`}</title>

      <Bone x={110} y={148} len={150} h={24}>
        {v === "kwire" && (
          <>
            <path d="M75 -30 L75 30" fill="none" stroke="var(--cortical)" strokeWidth={2} strokeDasharray="3 4" />
            {/* dois fios cruzados */}
            <line x1={-6} y1={-30} x2={130} y2={26} stroke="var(--teal)" strokeWidth={3} strokeLinecap="round" />
            <line x1={-6} y1={30} x2={130} y2={-26} stroke="var(--teal)" strokeWidth={3} strokeLinecap="round" />
          </>
        )}
        {v === "parafusos" && (
          <>
            <path d="M45 -30 L100 32" fill="none" stroke="var(--ink-soft)" strokeWidth={1.4} strokeDasharray="3 3" />
            {[0, 1].map((i) => {
              const cx = 58 + i * 32;
              const cy = -6 + i * 26;
              return (
                <g key={i}>
                  <line x1={cx - 18} y1={cy - 16} x2={cx + 18} y2={cy + 16} stroke="var(--teal)" strokeWidth={3} strokeLinecap="round" />
                  <circle cx={cx - 18} cy={cy - 16} r={4} fill="var(--teal)" />
                </g>
              );
            })}
          </>
        )}
        {v === "placa" && (
          <>
            <path d="M75 -30 L75 30" fill="none" stroke="var(--ink-soft)" strokeWidth={1.4} strokeDasharray="3 3" />
            {/* placa dorsal */}
            <rect x={20} y={-34} width={110} height={12} rx={5} fill="var(--teal)" opacity={0.3} stroke="var(--teal)" strokeWidth={2} />
            {[32, 58, 92, 118].map((x) => (
              <circle key={x} cx={x} cy={-28} r={3.2} fill="var(--surface)" stroke="var(--teal)" strokeWidth={2} />
            ))}
          </>
        )}
      </Bone>

      <text x="190" y="230" {...mono} textAnchor="middle">{cap[v]}</text>
      <text x="190" y="266" {...label} textAnchor="middle">
        Estabilidade suficiente para permitir movimento precoce — sem excesso de dissecção.
      </text>
    </svg>
  );
};

/* ============================================================================
   6. Mobilização precoce vs rigidez — o eixo do tratamento
   ========================================================================== */
export const EarlyMotion: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 460 300"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Mobilização precoce versus rigidez após fratura de falange"}</title>

    {/* Esquerda: dedo mobilizado (arco de flexão + buddy taping) */}
    <g transform="translate(30 40)">
      <text x="90" y="-8" {...mono} textAnchor="middle">movimento precoce</text>
      {/* dedo estendido */}
      <path {...boneBack} d="M10 120 L120 120" fill="none" stroke="var(--ink-soft)" strokeWidth={10} strokeLinecap="round" />
      {/* dedo fletido (arco) */}
      <path d="M10 120 C 70 118 120 96 148 52" {...teal} strokeWidth={9} strokeLinecap="round" opacity={0.5} />
      {/* buddy taping */}
      <line x1={40} y1={112} x2={40} y2={128} stroke="var(--amber)" strokeWidth={3} strokeLinecap="round" />
      <line x1={72} y1={110} x2={72} y2={130} stroke="var(--amber)" strokeWidth={3} strokeLinecap="round" />
      <path d="M150 60 C 158 44 158 30 150 20" {...teal} strokeWidth={2.4} markerEnd="url(#arrMot)" />
      <text x="90" y="176" {...label} textAnchor="middle">buddy taping + ADM ativa</text>
      <text x="90" y="192" {...label} textAnchor="middle" fill="var(--teal)">deslizamento tendíneo preservado</text>
    </g>

    <line x1="230" y1="30" x2="230" y2="210" stroke="var(--ink-soft)" strokeWidth={1} strokeDasharray="4 4" />

    {/* Direita: dedo imobilizado → aderências → rigidez */}
    <g transform="translate(270 40)">
      <text x="90" y="-8" {...mono} textAnchor="middle">imobilização prolongada</text>
      <path {...boneBack} d="M10 120 L120 120" fill="none" stroke="var(--ink-soft)" strokeWidth={10} strokeLinecap="round" />
      {/* arco de flexão reduzido */}
      <path d="M10 120 C 50 120 84 116 104 108" {...cortical} strokeWidth={9} strokeLinecap="round" opacity={0.4} />
      {/* aderências */}
      {[36, 60, 84].map((x) => (
        <path key={x} d={`M${x} 108 l 4 -6 l 4 6 l 4 -6`} fill="none" stroke="var(--cortical)" strokeWidth={1.6} />
      ))}
      <text x="90" y="176" {...label} textAnchor="middle">aderências extensor/flexor</text>
      <text x="90" y="192" {...label} textAnchor="middle" fill="var(--cortical)">arco reduzido = rigidez</text>
    </g>

    <defs>
      <marker id="arrMot" markerWidth="9" markerHeight="9" refX="5" refY="4.5" orient="auto">
        <path d="M0 0 L9 4.5 L0 9 Z" fill="var(--teal)" />
      </marker>
    </defs>

    <text x="230" y="256" {...mono} textAnchor="middle">A rigidez é a principal complicação.</text>
    <text x="230" y="284" {...label} textAnchor="middle">
      Fixar apenas o necessário para permitir movimento precoce; equilibrar estabilidade e função.
    </text>
  </svg>
);

/* ============================================================================
   7. Consolidação viciosa — má rotação (tesoura) e angulação
   ========================================================================== */
export const Malunion: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 460 300"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Consolidação viciosa da falange: má rotação com sobreposição e angulação residual"}</title>

    {/* Esquerda: má rotação → tesoura (dedos que se cruzam na flexão) */}
    <g transform="translate(40 40)">
      <text x="80" y="-8" {...mono} textAnchor="middle">má rotação → tesoura</text>
      {/* dois dedos convergindo/cruzando */}
      <path {...boneBack} d="M20 140 C 40 90 60 60 84 40" fill="none" stroke="var(--ink-soft)" strokeWidth={11} strokeLinecap="round" />
      <path d="M120 140 C 100 92 84 66 66 46" fill="none" stroke="var(--cortical)" strokeWidth={11} strokeLinecap="round" opacity={0.55} />
      <circle cx={74} cy={52} r={7} fill="none" stroke="var(--amber)" strokeWidth={2} />
      <text x="70" y="182" {...label} textAnchor="middle">sobreposição na flexão</text>
      <text x="70" y="198" {...label} textAnchor="middle" fill="var(--amber)">testar clinicamente (unhas)</text>
    </g>

    <line x1="230" y1="30" x2="230" y2="210" stroke="var(--ink-soft)" strokeWidth={1} strokeDasharray="4 4" />

    {/* Direita: angulação residual em ápice volar */}
    <g transform="translate(280 60)">
      <text x="80" y="-24" {...mono} textAnchor="middle">angulação em ápice volar</text>
      <g transform="translate(0 30)">
        <path {...bone} d="M0 -22 C 8 -22 54 -18 60 -12 C 64 -6 62 4 58 10 C 52 18 8 22 0 22 C -9 12 -9 -12 0 -22 Z" />
      </g>
      <g transform="translate(66 44) rotate(24)">
        <path {...bone} d="M0 -18 C 30 -20 78 -16 88 -6 C 94 0 92 8 88 10 C 78 16 30 18 0 16 C -7 8 -7 -8 0 -18 Z" />
      </g>
      {/* ângulo */}
      <path d="M12 46 L66 46 L150 108" {...amberLine} />
      <text x="70" y="150" {...label} textAnchor="middle" fill="var(--amber)">déficit de extensão / pseudogarra</text>
    </g>

    <text x="230" y="252" {...label} textAnchor="middle">
      Má rotação de poucos graus já cruza os dedos; corrigir é mais fácil precocemente (osteotomia se sintomática).
    </text>
    <text x="230" y="280" {...label} textAnchor="middle">
      Sempre checar rotação com os dedos em flexão durante a redução.
    </text>
  </svg>
);

export const figures: Record<string, FC<FigureProps>> = {
  "fratura-falanges:anatomia": Anatomy,
  "fratura-falanges:forcas": DeformingForces,
  "fratura-falanges:padroes": Patterns,
  "fratura-falanges:articular": Articular,
  "fratura-falanges:fixacao": Fixation,
  "fratura-falanges:mobilizacao": EarlyMotion,
  "fratura-falanges:consolidacao-viciosa": Malunion,
};
