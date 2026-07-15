import type { FC, ReactNode } from "react";
import type { FigureProps } from "../../../types/topic";

/* ----------------------------------------------------------------------------
   Fratura do escafoide — figuras esquemáticas originais (line-art 2 tons).
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

/* Contorno do escafoide (formato de "barco"), origem local em (0,0).
   Convenção: polo proximal em cima, colo no meio, tubérculo/polo distal
   embaixo-radial. Retorna um <path> reutilizável. */
function scaphoidPath(): string {
  return `M0 -84
    C22 -84 34 -66 33 -46
    C32 -26 20 -14 14 2
    C8 18 18 34 30 44
    C40 52 40 70 24 78
    C6 86 -14 78 -22 60
    C-30 42 -20 24 -22 6
    C-24 -14 -30 -30 -22 -52
    C-16 -70 -20 -84 0 -84 Z`;
}

function ScaphoidBody({
  cx,
  cy,
  scale = 1,
  proximalShade,
  children,
}: {
  cx: number;
  cy: number;
  scale?: number;
  proximalShade?: "risco" | "necrose";
  children?: ReactNode;
}) {
  const proxFill =
    proximalShade === "necrose"
      ? "var(--cortical)"
      : proximalShade === "risco"
        ? "var(--amber)"
        : undefined;
  return (
    <g transform={`translate(${cx} ${cy}) scale(${scale})`}>
      <path {...bone} d={scaphoidPath()} />
      {proxFill ? (
        <path
          d={`M0 -84 C22 -84 34 -66 33 -46 C32 -26 20 -14 14 2
            C-6 -2 -18 -12 -22 -30 C-26 -46 -22 -66 -12 -78 C-8 -83 -4 -84 0 -84 Z`}
          fill={proxFill}
          opacity={proximalShade === "necrose" ? 0.45 : 0.32}
          stroke="none"
        />
      ) : null}
      {children}
    </g>
  );
}

/* ============================================================================
   1. Anatomia carpal — escafoide como elo entre as fileiras + tabaqueira
   ========================================================================== */
export const Anatomy: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 460 320"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Anatomia do carpo com o escafoide unindo as fileiras proximal e distal"}</title>

    {/* Rádio e ulna (proximais, embaixo em incidência PA) */}
    <path {...boneBack} d="M70 300 L70 236 C70 214 82 202 104 200 L150 198 C168 208 168 226 150 234 L104 236 C88 240 86 262 88 300 Z" />
    <path {...boneBack} d="M182 300 L184 244 C186 226 198 220 210 224 C222 230 220 250 214 262 L214 300 Z" />
    <text x="96" y="286" {...label}>rádio</text>
    <text x="196" y="290" {...label}>ulna</text>

    {/* Fileira proximal: escafoide (radial), semilunar, piramidal */}
    {/* Escafoide destacado */}
    <ScaphoidBody cx={122} cy={150} scale={0.62}>
      <path {...teal} strokeWidth={2.4} d={scaphoidPath()} />
    </ScaphoidBody>
    <path {...bone} d="M150 128 C176 122 196 134 194 156 C192 176 172 186 150 180 C132 174 130 140 150 128 Z" />
    <text x="168" y="158" {...label} textAnchor="middle">semilunar</text>
    <path {...bone} d="M206 132 C226 128 236 142 230 158 C224 172 206 174 196 162 C188 150 192 138 206 132 Z" />
    <text x="216" y="126" {...label} textAnchor="middle">piramidal</text>

    {/* Fileira distal: trapézio, trapezoide, capitato, hamato */}
    <path {...bone} d="M96 92 C114 84 128 94 126 110 C124 124 108 128 96 120 C86 112 84 100 96 92 Z" />
    <text x="70" y="96" {...label} textAnchor="end">trapézio</text>
    <path {...bone} d="M140 96 C158 90 170 100 166 114 C162 126 146 128 136 118 C130 108 130 102 140 96 Z" />
    <path {...bone} d="M178 92 C202 84 218 98 214 118 C210 136 188 140 172 128 C160 116 162 100 178 92 Z" />
    <text x="196" y="112" {...label} textAnchor="middle">capitato</text>
    <path {...bone} d="M226 104 C244 98 256 110 250 124 C244 136 228 136 220 124 C214 114 216 108 226 104 Z" />
    <text x="252" y="98" {...label}>hamato</text>

    {/* Metacarpais esquemáticos */}
    {[100, 138, 178, 220].map((x, i) => (
      <line key={i} x1={x} y1={76} x2={x - 6 + i * 2} y2={40} stroke="var(--ink-soft)" strokeWidth={1.4} />
    ))}

    {/* Rótulos do escafoide */}
    <text x="122" y="102" {...mono} textAnchor="middle">polo proximal</text>
    <line x1="122" y1="106" x2="122" y2="116" stroke="var(--teal)" strokeWidth={1.4} />
    <text x="60" y="150" {...label} textAnchor="end" fill="var(--teal)">colo</text>
    <line x1="62" y1="150" x2="100" y2="150" stroke="var(--teal)" strokeWidth={1.4} strokeDasharray="4 3" />
    <text x="150" y="196" {...label} fill="var(--teal)">tubérculo distal</text>

    {/* Tabaqueira anatômica — inserção clínica */}
    <g transform="translate(330 60)">
      <text x="40" y="-16" {...mono} textAnchor="middle">tabaqueira</text>
      <path {...boneBack} d="M0 40 C10 6 34 -6 60 -2 C86 2 96 26 92 54 C80 60 60 58 40 62 C20 66 6 60 0 40 Z" />
      {/* tendões que delimitam a tabaqueira */}
      <path {...teal} strokeWidth={2.2} d="M22 -2 C30 24 34 44 30 66" />
      <path {...teal} strokeWidth={2.2} d="M58 -4 C66 20 72 42 74 66" />
      <path {...cortical} strokeWidth={2.4} d="M32 30 C40 26 50 26 60 32" opacity={0.9} />
      <circle cx={46} cy={30} r={4} fill="var(--cortical)" />
      <text x="46" y="90" {...label} textAnchor="middle">dor à palpação</text>
    </g>

    <text x="230" y="308" {...label} textAnchor="middle">
      <tspan x="230" dy="0em">O escafoide cruza as fileiras e sofre alta carga de</tspan>
      <tspan x="230" dy="1.15em">cisalhamento no punho.</tspan>
    </text>
  </svg>
);

/* ============================================================================
   2. Vascularização retrógrada e risco do polo proximal
   ========================================================================== */
export const Vascular: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 440 320"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Suprimento arterial retrógrado do escafoide e risco de necrose do polo proximal"}</title>

    <ScaphoidBody cx={200} cy={158} scale={1.5} proximalShade="risco">
      {/* traço de fratura do colo separando polo proximal */}
      <path
        d="M-24 -30 C-8 -20 8 -14 34 -46"
        {...cortical}
        strokeWidth={2.4}
        strokeDasharray="5 4"
      />
    </ScaphoidBody>

    {/* Artéria radial e ramo carpal dorsal entrando na crista dorsal (colo/distal) */}
    <path
      d="M40 300 C48 250 60 220 96 210 C132 200 150 208 170 214"
      fill="none"
      stroke="var(--teal)"
      strokeWidth={6}
      strokeLinecap="round"
      opacity={0.85}
    />
    <text x="44" y="296" {...label} fill="var(--teal)">artéria radial</text>

    {/* ramo dorsal entra na crista e flui retrógrado ao polo proximal */}
    <path
      d="M170 214 C190 200 208 178 216 150"
      fill="none"
      stroke="var(--teal)"
      strokeWidth={5}
      strokeLinecap="round"
      markerEnd="url(#arrowTeal)"
    />
    <path
      d="M212 150 C216 118 214 96 206 72"
      fill="none"
      stroke="var(--teal)"
      strokeWidth={4}
      strokeLinecap="round"
      strokeDasharray="6 5"
      markerEnd="url(#arrowTeal)"
    />
    <defs>
      <marker id="arrowTeal" markerWidth="9" markerHeight="9" refX="5" refY="4.5" orient="auto">
        <path d="M0 0 L9 4.5 L0 9 Z" fill="var(--teal)" />
      </marker>
    </defs>

    <text x="238" y="206" {...mono}>ramo carpal dorsal</text>
    <text x="238" y="220" {...label}>entra na crista dorsal</text>
    <text x="238" y="150" {...label} fill="var(--teal)">fluxo retrógrado</text>

    {/* ramo volar distal — supre apenas o polo distal */}
    <path
      d="M120 250 C140 236 150 224 156 210"
      fill="none"
      stroke="var(--teal)"
      strokeWidth={4}
      strokeLinecap="round"
      opacity={0.6}
    />
    <text x="96" y="266" {...label}>ramo palmar → polo distal</text>

    <text x="150" y="70" {...mono} textAnchor="end" fill="var(--amber)">polo proximal</text>
    <text x="150" y="84" {...label} textAnchor="end">70–80% via retrógrada</text>

    <text x="220" y="300" {...label} textAnchor="middle">
      <tspan x="220" dy="0em">Fratura proximal ou do colo interrompe o fluxo retrógrado →</tspan>
      <tspan x="220" dy="1.15em">risco de necrose avascular do polo proximal.</tspan>
    </text>
  </svg>
);

/* ============================================================================
   3. Localização — polo proximal / colo / distal (variant)
   ========================================================================== */
export const Location: FC<FigureProps> = ({ className, title, variant }) => {
  const v = variant ?? "colo";
  const line: Record<string, string> = {
    proximal: "M-26 -44 C-6 -40 14 -42 34 -50",
    colo: "M-28 -6 C-8 -2 8 -4 32 -18",
    distal: "M-24 44 C-6 52 14 52 30 40",
  };
  const risk: Record<string, string> = {
    proximal: "Necrose e pseudartrose: risco alto",
    colo: "Local mais comum (~65–70%)",
    distal: "Bom prognóstico; consolida bem",
  };
  return (
    <svg
      viewBox="0 0 380 320"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `Localização da fratura do escafoide: ${v}`}</title>

      <ScaphoidBody
        cx={170}
        cy={150}
        scale={1.5}
        proximalShade={v === "proximal" ? "risco" : undefined}
      >
        <path d={line[v]} {...cortical} strokeWidth={3.2} />
      </ScaphoidBody>

      {/* réguas dos terços */}
      <line x1="70" y1="86" x2="270" y2="86" stroke="var(--amber)" strokeWidth={1.2} strokeDasharray="4 4" />
      <line x1="70" y1="150" x2="270" y2="150" stroke="var(--amber)" strokeWidth={1.2} strokeDasharray="4 4" />
      <text x="292" y="72" {...label} fill="var(--amber)">polo proximal</text>
      <text x="292" y="120" {...label} fill="var(--amber)">colo</text>
      <text x="292" y="210" {...label} fill="var(--amber)">polo distal</text>

      <text x="190" y="300" {...mono} textAnchor="middle">{risk[v]}</text>
    </svg>
  );
};

/* ============================================================================
   4. Estabilidade / Herbert — estável vs instável, retardo e pseudartrose
   ========================================================================== */
export const Herbert: FC<FigureProps> = ({ className, title }) => {
  const cells: { code: string; head: string; sub: string; x: number; unstable?: boolean }[] = [
    { code: "A", head: "Estável aguda", sub: "Tubérculo / colo incompleta", x: 70 },
    { code: "B", head: "Instável aguda", sub: "Colo desviada, polo proximal, oblíqua", x: 190, unstable: true },
    { code: "C", head: "Retardo de consolidação", sub: "Sem sinais de união no prazo", x: 310 },
    { code: "D", head: "Pseudartrose", sub: "D1 fibrosa · D2 esclerótica", x: 430, unstable: true },
  ];
  return (
    <svg
      viewBox="0 0 500 300"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? "Classificação de Herbert modificada: estável, instável, retardo e pseudartrose"}</title>
      <text x="250" y="24" {...mono} textAnchor="middle">Herbert (modificada): estabilidade guia a conduta</text>

      {cells.map((c) => (
        <g key={c.code}>
          <ScaphoidBody cx={c.x} cy={120} scale={0.72} proximalShade={c.code === "D" ? "necrose" : undefined}>
            {c.code === "A" && (
              <path d="M-16 46 C0 52 12 52 24 42" {...cortical} strokeWidth={2.4} strokeDasharray="4 4" />
            )}
            {c.code === "B" && <path d="M-26 -6 C-4 -2 10 -6 32 -18" {...cortical} strokeWidth={3.2} />}
            {c.code === "C" && (
              <path d="M-26 -4 C-6 0 10 -2 32 -16" {...cortical} strokeWidth={3} strokeDasharray="3 3" />
            )}
            {c.code === "D" && (
              <>
                <path d="M-28 -6 C-6 4 6 4 30 -14" {...cortical} strokeWidth={4} />
                <path d="M-24 6 C-4 14 8 14 28 -2" fill="none" stroke="var(--cortical)" strokeWidth={2} strokeDasharray="2 3" />
              </>
            )}
          </ScaphoidBody>
          <circle cx={c.x} cy={188} r={14} fill={c.unstable ? "var(--cortical)" : "var(--teal)"} opacity={0.18} />
          <text x={c.x} y={193} {...mono} textAnchor="middle">{c.code}</text>
          <text x={c.x} y={222} {...label} textAnchor="middle" fill="var(--ink)">{c.head}</text>
          <text x={c.x} y={240} {...label} textAnchor="middle">
            {c.sub.length > 26 ? c.sub.slice(0, 24) + "…" : c.sub}
          </text>
        </g>
      ))}
      <text x="250" y="286" {...label} textAnchor="middle">
        Instabilidade (desvio &gt; 1 mm, polo proximal, cominução, DISI) favorece fixação.
      </text>
    </svg>
  );
};

/* ============================================================================
   5. Fixação percutânea por parafuso canulado (variant volar/dorsal)
   ========================================================================== */
export const PercutaneousFixation: FC<FigureProps> = ({ className, title, variant }) => {
  const v = variant ?? "volar";
  const dorsal = v === "dorsal";
  return (
    <svg
      viewBox="0 0 440 320"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `Fixação percutânea do escafoide por via ${v}`}</title>

      <ScaphoidBody cx={210} cy={158} scale={1.6}>
        {/* eixo central */}
        <line x1={dorsal ? 26 : -18} y1={dorsal ? -78 : 74} x2={dorsal ? -18 : 26} y2={dorsal ? 74 : -78} stroke="var(--amber)" strokeWidth={1.4} strokeDasharray="5 4" />
        {/* parafuso canulado sem cabeça no eixo central */}
        <g stroke="var(--teal)" strokeLinecap="round">
          <line x1={dorsal ? 24 : -16} y1={dorsal ? -70 : 66} x2={dorsal ? -16 : 24} y2={dorsal ? 66 : -70} strokeWidth={9} opacity={0.25} />
          <line x1={dorsal ? 24 : -16} y1={dorsal ? -70 : 66} x2={dorsal ? -16 : 24} y2={dorsal ? 66 : -70} strokeWidth={4} />
        </g>
        {/* roscas esquemáticas nas extremidades (compressão) */}
        {[0, 1, 2].map((i) => {
          const t = dorsal ? -62 + i * 8 : 58 - i * 8;
          return <line key={"d" + i} x1={-4} y1={t} x2={6} y2={t - 4} stroke="var(--teal)" strokeWidth={2} />;
        })}
      </ScaphoidBody>

      {/* seta de acesso */}
      {dorsal ? (
        <>
          <path d="M300 60 C270 74 250 84 236 96" fill="none" stroke="var(--ink-soft)" strokeWidth={2} markerEnd="url(#arrowInk)" />
          <text x="306" y="56" {...mono}>via dorsal</text>
          <text x="306" y="72" {...label}>punho fletido</text>
          <text x="120" y="250" {...label}>entrada no polo proximal</text>
        </>
      ) : (
        <>
          <path d="M300 258 C272 246 252 238 240 228" fill="none" stroke="var(--ink-soft)" strokeWidth={2} markerEnd="url(#arrowInk)" />
          <text x="306" y="256" {...mono}>via volar</text>
          <text x="306" y="272" {...label}>punho estendido</text>
          <text x="120" y="86" {...label}>entrada no tubérculo distal</text>
        </>
      )}
      <defs>
        <marker id="arrowInk" markerWidth="9" markerHeight="9" refX="5" refY="4.5" orient="auto">
          <path d="M0 0 L9 4.5 L0 9 Z" fill="var(--ink-soft)" />
        </marker>
      </defs>

      <text x="220" y="300" {...label} textAnchor="middle">
        <tspan x="220" dy="0em">Parafuso canulado sem cabeça no eixo central →</tspan>
        <tspan x="220" dy="1.15em">maior comprimento e compressão interfragmentar.</tspan>
      </text>
    </svg>
  );
};

/* ============================================================================
   6. Pseudartrose, deformidade em corcova (humpback), DISI e SNAC
   ========================================================================== */
export const Nonunion: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 480 340"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Pseudartrose do escafoide com deformidade em corcova, DISI e padrão SNAC"}</title>

    {/* Perfil: escafoide fletido em corcova + semilunar em DISI */}
    <text x="120" y="26" {...mono} textAnchor="middle">deformidade em corcova + DISI</text>

    {/* fragmento distal */}
    <path {...bone} d="M60 210 C58 176 74 156 100 154 C118 152 130 166 128 186 C126 204 108 214 88 218 C74 220 62 218 60 210 Z" />
    {/* fragmento proximal fletido dorsalmente */}
    <path {...bone} d="M112 150 C124 128 148 122 164 134 C178 146 176 168 160 180 C144 190 122 186 112 172 C106 162 108 156 112 150 Z" />
    {/* gap da pseudartrose */}
    <path d="M108 156 C118 150 126 150 134 156" {...cortical} strokeWidth={3} strokeDasharray="4 4" />
    {/* ângulo intraescafóide / corcova */}
    <path d="M92 200 L120 172 L156 158" fill="none" stroke="var(--amber)" strokeWidth={1.6} />
    <text x="150" y="150" {...label} fill="var(--amber)">corcova</text>

    {/* semilunar em extensão (DISI) */}
    <path {...boneBack} d="M170 200 C196 190 214 202 210 224 C206 244 182 248 166 234 C154 222 156 208 170 200 Z" />
    <path d="M186 196 L186 168" stroke="var(--amber)" strokeWidth={1.4} strokeDasharray="4 3" />
    <path d="M186 224 L214 214" stroke="var(--amber)" strokeWidth={1.4} strokeDasharray="4 3" />
    <text x="196" y="164" {...label} fill="var(--amber)">semilunar em DISI</text>
    <text x="70" y="250" {...label}>fragmento distal</text>
    <text x="150" y="122" {...label}>fragmento proximal</text>

    {/* Estágios SNAC à direita */}
    <g transform="translate(300 46)">
      <text x="60" y="-8" {...mono} textAnchor="middle">colapso avanç. (SNAC)</text>
      {[
        { n: "I", d: "Estiloide radial-escaf.", y: 30 },
        { n: "II", d: "Art. escafocapitato", y: 90 },
        { n: "III", d: "Capitolunar (poupa rad.)", y: 150 },
      ].map((s) => (
        <g key={s.n} transform={`translate(0 ${s.y})`}>
          <circle cx={8} cy={0} r={11} fill="var(--cortical)" opacity={0.18} />
          <text x={8} y={4} {...mono} textAnchor="middle">{s.n}</text>
          <text x={28} y={4} {...label}>{s.d}</text>
        </g>
      ))}
      <text x={4} y={186} {...label}>Progressão da artrose.</text>
    </g>

    <text x="230" y="304" {...label} textAnchor="middle">
      <tspan x="230" dy="0em">A não consolidação evolui com colapso em corcova, DISI</tspan>
      <tspan x="230" dy="1.15em">e artrose progressiva radioescafoide → capitolunar.</tspan>
    </text>
  </svg>
);

/* ============================================================================
   7. Enxerto — cunha volar corrige a corcova; enxerto vascularizado no polo
   ========================================================================== */
export const Graft: FC<FigureProps> = ({ className, title, variant }) => {
  const vascular = (variant ?? "cunha") === "vascularizado";
  return (
    <svg
      viewBox="0 0 460 320"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? "Reconstrução da pseudartrose do escafoide com enxerto ósseo"}</title>

      {/* Rádio distal como fonte de enxerto */}
      <path {...boneBack} d="M40 300 L40 210 C40 186 54 174 78 174 L120 176 C120 200 116 300 116 300 Z" />
      <text x="46" y="220" {...label}>rádio distal</text>

      {/* Escafoide reconstruído (alinhado) */}
      <ScaphoidBody cx={250} cy={160} scale={1.5} proximalShade={vascular ? "risco" : undefined}>
        {/* cunha de enxerto interposta no colo */}
        <path
          d="M-26 -8 L34 -18 L30 6 L-24 12 Z"
          fill="var(--teal)"
          opacity={0.22}
          stroke="var(--teal)"
          strokeWidth={2}
        />
        {/* parafuso central */}
        <line x1={-14} y1={62} x2={22} y2={-70} stroke="var(--teal)" strokeWidth={9} opacity={0.25} strokeLinecap="round" />
        <line x1={-14} y1={62} x2={22} y2={-70} stroke="var(--teal)" strokeWidth={4} strokeLinecap="round" />
      </ScaphoidBody>
      <text x="300" y="150" {...mono}>enxerto interposto</text>
      <text x="300" y="164" {...label}>corrige a corcova</text>

      {vascular ? (
        <>
          {/* pedículo vascular do dorso do rádio (1,2-ICSRA) até o polo proximal */}
          <path
            d="M110 190 C160 176 200 130 234 108"
            fill="none"
            stroke="var(--teal)"
            strokeWidth={5}
            strokeLinecap="round"
            markerEnd="url(#arrowV)"
          />
          <defs>
            <marker id="arrowV" markerWidth="9" markerHeight="9" refX="5" refY="4.5" orient="auto">
              <path d="M0 0 L9 4.5 L0 9 Z" fill="var(--teal)" />
            </marker>
          </defs>
          <text x="120" y="150" {...label} fill="var(--teal)">pedículo 1,2-ICSRA</text>
          <text x="230" y="300" {...label} textAnchor="middle">
            Enxerto vascularizado pediculado: indicado na necrose do polo proximal para elevar a taxa de consolidação.
          </text>
        </>
      ) : (
        <>
          <path d="M110 210 C150 210 180 200 208 186" fill="none" stroke="var(--ink-soft)" strokeWidth={2} strokeDasharray="5 4" />
          <text x="120" y="230" {...label}>enxerto corticoesponjoso não vascularizado</text>
          <text x="230" y="292" {...label} textAnchor="middle">
            <tspan x="230" dy="0em">Cunha volar (Fisk–Fernandez) restaura altura</tspan>
            <tspan x="230" dy="1.15em">e alinhamento; fixação estável favorece união.</tspan>
          </text>
        </>
      )}
    </svg>
  );
};

export const figures: Record<string, FC<FigureProps>> = {
  "fratura-escafoide:anatomia": Anatomy,
  "fratura-escafoide:vascularizacao": Vascular,
  "fratura-escafoide:localizacao": Location,
  "fratura-escafoide:herbert": Herbert,
  "fratura-escafoide:fixacao-percutanea": PercutaneousFixation,
  "fratura-escafoide:pseudartrose": Nonunion,
  "fratura-escafoide:enxerto": Graft,
};
