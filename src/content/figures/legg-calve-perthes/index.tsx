import type { FC } from "react";
import type { FigureProps } from "../../../types/topic";

/* ============================================================================
   Figuras esquemáticas originais — Doença de Legg-Calvé-Perthes.
   Line-art de dois tons, sem reprodução de material protegido.
   Cores exclusivamente por CSS var (ossos, fise/cartilagem, necrose/traço,
   medidas/ângulos, rótulos). Referência editorial: Rockwood and Wilkins'
   Fractures in Children, 10ª ed. (2024).
   ========================================================================== */

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

const physis = {
  fill: "none",
  stroke: "var(--teal)",
  strokeWidth: 5,
  strokeLinecap: "round" as const,
};

/* -------------------------------------------------------------------------- */

export const Anatomy: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 440 320"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Suprimento vascular da cabeça femoral na criança e território de necrose"}</title>

    {/* diáfise e metáfise */}
    <path
      {...bone}
      d="M150 296 C146 250, 150 210, 158 176 C182 150, 214 132, 244 118 C232 96, 208 84, 176 88 C150 92, 132 108, 122 134 C112 170, 116 236, 120 296 Z"
    />
    {/* colo femoral */}
    <path {...boneBack} d="M188 108 C224 100, 258 108, 280 130 C264 150, 236 158, 208 152 C196 138, 190 122, 188 108 Z" />

    {/* fise (placa de crescimento) — barreira vascular */}
    <path d="M214 96 C240 104, 262 120, 276 142" {...physis} />

    {/* epífise (cabeça femoral) */}
    <circle cx="286" cy="112" r="52" {...bone} />
    {/* território necrótico ântero-superolateral */}
    <path
      d="M286 60 C312 66, 330 88, 332 116 C314 122, 292 118, 280 100 C276 84, 278 70, 286 60 Z"
      fill="var(--cortical-tint)"
      stroke="var(--cortical)"
      strokeWidth="2.5"
    />

    {/* artéria circunflexa femoral medial e ramos retinaculares/epifisários laterais */}
    <path
      d="M150 250 C150 210, 172 176, 208 166 C240 158, 262 150, 276 140"
      fill="none"
      stroke="var(--amber)"
      strokeWidth="3.5"
      strokeLinecap="round"
    />
    <path d="M262 150 C280 138, 300 118, 312 96" fill="none" stroke="var(--amber)" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M268 146 C288 140, 306 130, 320 118" fill="none" stroke="var(--amber)" strokeWidth="2.5" strokeLinecap="round" />

    <path d="M262 74 L292 88" stroke="var(--line-strong)" />
    <text x="212" y="70" {...label} fill="var(--cortical)">território de necrose</text>
    <path d="M244 138 L276 142" stroke="var(--line-strong)" />
    <text x="292" y="164" {...label} fill="var(--teal)">fise</text>
    <path d="M150 244 L176 238" stroke="var(--line-strong)" />
    <text x="34" y="248" {...label} fill="var(--amber)">a. circunflexa femoral medial</text>
    <text x="300" y="128" {...label} fill="var(--amber)">ramos epifisários laterais</text>
    <text x="286" y="116" {...label} textAnchor="middle">epífise</text>

    <text x="220" y="24" {...mono} textAnchor="middle">vascularização epifisária e território vulnerável</text>
    <text x="220" y="308" {...label} textAnchor="middle">
      Os vasos epifisários laterais cruzam a fise e são o suprimento crítico da cabeça em crescimento.
    </text>
  </svg>
);

/* -------------------------------------------------------------------------- */

export const Waldenstrom: FC<FigureProps> = ({ className, title, variant }) => {
  const v = (variant ?? "inicial").toLowerCase();
  const names: Record<string, string> = {
    inicial: "1 · inicial (necrose)",
    fragmentacao: "2 · fragmentação",
    reossificacao: "3 · reossificação",
    cicatrizacao: "4 · residual / cicatrizado",
  };

  const cx = 210;
  const cy = 150;

  return (
    <svg
      viewBox="0 0 420 300"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `Fases de Waldenström: ${names[v] ?? v}`}</title>

      {/* acetábulo */}
      <path
        d={`M${cx - 92} ${cy - 78} C${cx - 40} ${cy - 96}, ${cx + 34} ${cy - 96}, ${cx + 84} ${cy - 74}
          C${cx + 62} ${cy - 42}, ${cx + 40} ${cy - 24}, ${cx + 30} ${cy - 6}`}
        fill="none"
        stroke="var(--teal)"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        {...boneBack}
        d={`M${cx - 108} ${cy - 96} C${cx - 40} ${cy - 122}, ${cx + 46} ${cy - 120}, ${cx + 104} ${cy - 86}
          L${cx + 104} ${cy - 132} L${cx - 108} ${cy - 132} Z`}
      />

      {/* colo e diáfise */}
      <path {...bone} d={`M${cx - 20} ${cy + 40} C${cx - 10} ${cy + 90}, ${cx - 12} ${cy + 130}, ${cx - 6} ${cy + 140}
        L${cx + 40} ${cy + 140} C${cx + 44} ${cy + 96}, ${cx + 30} ${cy + 52}, ${cx + 16} ${cy + 30} Z`} />

      {/* epífise conforme a fase */}
      {v === "inicial" && (
        <>
          <circle cx={cx} cy={cy} r="40" fill="var(--cortical-tint)" stroke="var(--cortical)" strokeWidth="2.5" />
          <text x={cx} y={cy + 4} {...label} textAnchor="middle" fill="var(--cortical)">densa</text>
          <text x={cx + 96} y={cy - 6} {...label} textAnchor="middle">epífise menor</text>
          <text x={cx + 96} y={cy + 8} {...label} textAnchor="middle">e esclerótica</text>
        </>
      )}
      {v === "fragmentacao" && (
        <>
          <path d={`M${cx - 40} ${cy} C${cx - 40} ${cy - 24}, ${cx - 22} ${cy - 40}, ${cx} ${cy - 40}
            C${cx + 24} ${cy - 40}, ${cx + 40} ${cy - 22}, ${cx + 40} ${cy}
            C${cx + 40} ${cy + 22}, ${cx + 22} ${cy + 38}, ${cx} ${cy + 38}
            C${cx - 22} ${cy + 38}, ${cx - 40} ${cy + 22}, ${cx - 40} ${cy} Z`}
            fill="var(--cortical-tint)" stroke="var(--cortical)" strokeWidth="2.5" />
          <path d={`M${cx - 14} ${cy - 38} L${cx - 8} ${cy + 36}`} stroke="var(--cortical)" strokeWidth="2" />
          <path d={`M${cx + 12} ${cy - 36} L${cx + 6} ${cy + 34}`} stroke="var(--cortical)" strokeWidth="2" />
          <path d={`M${cx - 38} ${cy - 6} L${cx + 38} ${cy - 2}`} stroke="var(--cortical)" strokeWidth="2" strokeDasharray="4 3" />
          <text x={cx + 96} y={cy} {...label} textAnchor="middle" fill="var(--cortical)">fragmentos</text>
        </>
      )}
      {v === "reossificacao" && (
        <>
          <path d={`M${cx - 42} ${cy + 2} C${cx - 42} ${cy - 24}, ${cx - 22} ${cy - 42}, ${cx + 2} ${cy - 42}
            C${cx + 26} ${cy - 42}, ${cx + 44} ${cy - 20}, ${cx + 44} ${cy + 4}
            C${cx + 44} ${cy + 24}, ${cx + 24} ${cy + 40}, ${cx} ${cy + 40}
            C${cx - 24} ${cy + 40}, ${cx - 42} ${cy + 22}, ${cx - 42} ${cy + 2} Z`}
            fill="var(--surface)" stroke="var(--ink-soft)" strokeWidth="2" />
          <path d={`M${cx - 40} ${cy + 6} C${cx - 30} ${cy + 26}, ${cx + 22} ${cy + 30}, ${cx + 42} ${cy + 6}`}
            fill="none" stroke="var(--teal)" strokeWidth="4" strokeLinecap="round" />
          <text x={cx + 98} y={cy} {...label} textAnchor="middle" fill="var(--teal)">osso novo</text>
        </>
      )}
      {v === "cicatrizacao" && (
        <>
          <path d={`M${cx - 46} ${cy + 6} C${cx - 46} ${cy - 22}, ${cx - 22} ${cy - 40}, ${cx + 6} ${cy - 40}
            C${cx + 34} ${cy - 40}, ${cx + 48} ${cy - 16}, ${cx + 48} ${cy + 8}
            C${cx + 48} ${cy + 26}, ${cx + 26} ${cy + 40}, ${cx} ${cy + 40}
            C${cx - 26} ${cy + 40}, ${cx - 46} ${cy + 24}, ${cx - 46} ${cy + 6} Z`}
            {...bone} />
          <text x={cx + 98} y={cy - 4} {...label} textAnchor="middle">coxa magna /</text>
          <text x={cx + 98} y={cy + 10} {...label} textAnchor="middle">remodelação</text>
        </>
      )}

      <text x="210" y="24" {...mono} textAnchor="middle">{names[v] ?? v}</text>
      <text x="210" y="290" {...label} textAnchor="middle">
        A contenção atua enquanto a cabeça é biologicamente plástica (fases 1–2).
      </text>
    </svg>
  );
};

/* -------------------------------------------------------------------------- */

export const LateralPillar: FC<FigureProps> = ({ className, title, variant }) => {
  const v = (variant ?? "a").toLowerCase().replace("/", "");
  const heights: Record<string, number> = { a: 100, b: 66, bc: 50, c: 32 };
  const codes: Record<string, string> = { a: "A", b: "B", bc: "B/C", c: "C" };
  const notes: Record<string, string> = {
    a: "pilar lateral íntegro",
    b: "pilar > 50% da altura",
    bc: "pilar ≈ 50%, fino/mal ossificado",
    c: "pilar < 50% da altura",
  };
  const pct = heights[v] ?? 100;
  const baseY = 210;
  const fullH = 118;
  const h = (fullH * pct) / 100;

  return (
    <svg
      viewBox="0 0 420 300"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `Classificação do pilar lateral de Herring: grupo ${codes[v] ?? v}`}</title>

      {/* contorno da epífise em vista AP */}
      <path
        {...boneBack}
        d="M120 210 C112 150, 146 100, 210 96 C274 100, 308 150, 300 210 Z"
      />

      {/* colunas: lateral, central, medial */}
      <line x1="176" y1="96" x2="176" y2="210" stroke="var(--line-strong)" strokeDasharray="4 3" />
      <line x1="252" y1="96" x2="252" y2="210" stroke="var(--line-strong)" strokeDasharray="4 3" />

      {/* pilar central e medial (referência, altura preservada) */}
      <path d="M176 210 L176 108 C200 100, 228 100, 252 108 L252 210 Z" fill="var(--surface)" stroke="var(--ink-soft)" strokeWidth="1.4" />

      {/* pilar lateral com altura variável (colapso) */}
      <rect x="126" y={baseY - h} width="46" height={h} fill="var(--cortical-tint)" stroke="var(--cortical)" strokeWidth="2" />
      {/* topo original do pilar lateral, tracejado */}
      <line x1="126" y1={baseY - fullH} x2="172" y2={baseY - fullH} stroke="var(--amber)" strokeWidth="1.5" strokeDasharray="5 3" />

      {/* cota de altura do pilar lateral */}
      <line x1="112" y1={baseY} x2="112" y2={baseY - h} stroke="var(--amber)" strokeWidth="1.5" />
      <line x1="107" y1={baseY} x2="117" y2={baseY} stroke="var(--amber)" />
      <line x1="107" y1={baseY - h} x2="117" y2={baseY - h} stroke="var(--amber)" />
      <text x="149" y={baseY + 20} {...label} textAnchor="middle" fill="var(--cortical)">lateral</text>
      <text x="214" y={baseY + 20} {...label} textAnchor="middle">central</text>
      <text x="278" y={baseY + 20} {...label} textAnchor="middle">medial</text>

      <rect x="300" y="108" width="86" height="30" rx="8" fill="var(--cortical-tint)" />
      <text x="343" y="128" {...mono} textAnchor="middle" fill="var(--cortical)">grupo {codes[v] ?? v}</text>
      <text x="343" y="158" {...label} textAnchor="middle">{notes[v] ?? ""}</text>

      <text x="210" y="24" {...mono} textAnchor="middle">altura do pilar lateral na fase de fragmentação</text>
      <text x="210" y="288" {...label} textAnchor="middle">
        Medida na incidência AP; classificada na fragmentação, prediz o desfecho com a idade.
      </text>
    </svg>
  );
};

/* -------------------------------------------------------------------------- */

export const Catterall: FC<FigureProps> = ({ className, title, variant }) => {
  const v = (variant ?? "1").toString();
  const fraction: Record<string, number> = { "1": 0.25, "2": 0.5, "3": 0.75, "4": 1 };
  const labels: Record<string, string> = {
    "1": "I · ~25% anterior",
    "2": "II · ~50% anterior",
    "3": "III · ~75%",
    "4": "IV · toda a epífise",
  };
  const f = fraction[v] ?? 0.25;
  const cx = 200;
  const cy = 150;
  const r = 60;
  // porção anterior (à direita) envolvida
  const involvedLeft = cx + r - 2 * r * f;

  return (
    <svg
      viewBox="0 0 420 300"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `Classificação de Catterall: grupo ${labels[v] ?? v}`}</title>

      {/* colo em perfil */}
      <path {...bone} d={`M${cx - 26} ${cy + 44} C${cx - 18} ${cy + 96}, ${cx - 18} ${cy + 130}, ${cx - 10} ${cy + 140}
        L${cx + 36} ${cy + 140} C${cx + 40} ${cy + 92}, ${cx + 30} ${cy + 54}, ${cx + 20} ${cy + 36} Z`} />

      {/* epífise (perfil) */}
      <circle cx={cx} cy={cy} r={r} {...bone} />
      {/* fise */}
      <path d={`M${cx - r + 4} ${cy + 40} C${cx} ${cy + 54}, ${cx + 30} ${cy + 48}, ${cx + r - 6} ${cy + 30}`} {...physis} strokeWidth={4} />

      {/* porção necrótica anterior (clip por retângulo) */}
      <defs>
        <clipPath id={`ctr-${v}`}>
          <circle cx={cx} cy={cy} r={r} />
        </clipPath>
      </defs>
      <rect
        x={involvedLeft}
        y={cy - r}
        width={cx + r - involvedLeft}
        height={2 * r}
        fill="var(--cortical-tint)"
        stroke="none"
        clipPath={`url(#ctr-${v})`}
      />
      <line x1={involvedLeft} y1={cy - r + 4} x2={involvedLeft} y2={cy + r - 4} stroke="var(--cortical)" strokeWidth="2" strokeDasharray="4 3" />

      {/* orientação */}
      <text x={cx + r + 14} y={cy - r + 6} {...label} textAnchor="start">anterior →</text>
      <text x={cx - r - 14} y={cy - r + 6} {...label} textAnchor="end">← posterior</text>

      <rect x="300" y="112" width="94" height="30" rx="8" fill="var(--cortical-tint)" />
      <text x="347" y="132" {...mono} textAnchor="middle" fill="var(--cortical)">{labels[v] ?? v}</text>
      <text x="347" y="162" {...label} textAnchor="middle">segmento acometido</text>

      <text x="210" y="24" {...mono} textAnchor="middle">extensão do acometimento epifisário (perfil)</text>
      <text x="210" y="288" {...label} textAnchor="middle">
        Estima a fração da epífise necrótica; grupos III–IV têm maior risco de deformidade.
      </text>
    </svg>
  );
};

/* -------------------------------------------------------------------------- */

export const Containment: FC<FigureProps> = ({ className, title, variant }) => {
  const contained = (variant ?? "contido").toLowerCase() !== "nao-contido";

  const cx = contained ? 208 : 232;
  const cy = 168;

  return (
    <svg
      viewBox="0 0 420 300"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `Princípio da contenção: cabeça ${contained ? "contida" : "não contida / extrusa"}`}</title>

      {/* pelve/acetábulo */}
      <path
        {...boneBack}
        d="M60 60 C150 44, 270 46, 360 66 L360 118 C300 108, 250 112, 214 128 C186 112, 150 106, 96 116 L60 112 Z"
      />
      {/* cartilagem acetabular */}
      <path
        d="M150 118 C176 138, 200 148, 214 150 C228 148, 252 138, 278 118"
        fill="none"
        stroke="var(--teal)"
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* colo e diáfise */}
      <path {...bone} d={`M${cx - 22} ${cy + 20} C${cx - 12} ${cy + 70}, ${cx - 40} ${cy + 110}, ${cx - 60} ${cy + 128}
        L${cx - 30} ${cy + 150} C${cx - 4} ${cy + 118}, ${cx + 20} ${cy + 78}, ${cx + 22} ${cy + 40} Z`} />

      {/* cabeça femoral */}
      <circle cx={cx} cy={cy} r="46" fill="var(--surface)" stroke="var(--ink-soft)" strokeWidth="1.8" />
      {/* segmento vulnerável ântero-lateral */}
      <path
        d={`M${cx} ${cy - 46} C${cx + 26} ${cy - 40}, ${cx + 44} ${cy - 20}, ${cx + 44} ${cy + 6}
          C${cx + 22} ${cy + 6}, ${cx + 2} ${cy - 8}, ${cx - 2} ${cy - 30} Z`}
        fill="var(--cortical-tint)"
        stroke="var(--cortical)"
        strokeWidth="2"
      />

      {contained ? (
        <>
          {/* setas de contenção (abdução para dentro do acetábulo) */}
          <path d="M118 214 C150 196, 176 186, 200 184" fill="none" stroke="var(--amber)" strokeWidth="3" markerEnd="url(#contArrow)" />
          <text x="118" y="236" {...label} fill="var(--amber)">abdução → cobertura</text>
          <text x="330" y="150" {...label} textAnchor="middle" fill="var(--teal)">molde</text>
          <text x="330" y="164" {...label} textAnchor="middle" fill="var(--teal)">acetabular</text>
        </>
      ) : (
        <>
          {/* extrusão lateral */}
          <path d="M300 158 C320 150, 336 140, 348 126" fill="none" stroke="var(--cortical)" strokeWidth="3" markerEnd="url(#contArrow)" />
          <text x="300" y="188" {...label} fill="var(--cortical)">extrusão lateral</text>
          <text x="300" y="204" {...label} fill="var(--cortical)">cabeça descoberta</text>
        </>
      )}

      <defs>
        <marker id="contArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 Z" fill={contained ? "var(--amber)" : "var(--cortical)"} />
        </marker>
      </defs>

      <rect x="300" y="52" width="98" height="28" rx="8" fill={contained ? "var(--teal-tint)" : "var(--cortical-tint)"} />
      <text x="349" y="70" {...mono} textAnchor="middle" fill={contained ? "var(--teal-deep)" : "var(--cortical)"}>
        {contained ? "CONTIDA" : "NÃO CONTIDA"}
      </text>

      <text x="210" y="24" {...mono} textAnchor="middle">princípio da contenção</text>
      <text x="210" y="290" {...label} textAnchor="middle">
        Manter a cabeça plástica dentro do acetábulo para que este a remodele como esfera.
      </text>
    </svg>
  );
};

/* -------------------------------------------------------------------------- */

export const AbductionOrthosis: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 420 300"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Contenção não cirúrgica: abdução e amplitude de movimento do quadril"}</title>

    {/* pelve */}
    <path {...boneBack} d="M150 60 C200 50, 270 52, 320 66 L316 110 C280 104, 244 106, 220 116 L200 116 C176 106, 168 90, 150 60 Z" />
    <circle cx="200" cy="120" r="9" fill="var(--surface)" stroke="var(--ink-soft)" strokeWidth="1.6" />
    <circle cx="256" cy="120" r="9" fill="var(--surface)" stroke="var(--ink-soft)" strokeWidth="1.6" />

    {/* coxas em abdução */}
    <path {...bone} d="M198 128 C176 158, 150 190, 120 214 L138 236 C170 210, 196 178, 214 148 Z" />
    <path {...bone} d="M258 128 C282 158, 308 190, 338 214 L320 236 C288 210, 262 178, 244 148 Z" />

    {/* barra/órtese de abdução */}
    <rect x="120" y="228" width="220" height="16" rx="8" fill="var(--teal-tint)" stroke="var(--teal)" strokeWidth="2" />
    <rect x="118" y="222" width="30" height="28" rx="6" fill="var(--surface)" stroke="var(--teal)" strokeWidth="2" />
    <rect x="312" y="222" width="30" height="28" rx="6" fill="var(--surface)" stroke="var(--teal)" strokeWidth="2" />

    {/* setas de abdução */}
    <path d="M228 150 C214 158, 196 168, 178 182" fill="none" stroke="var(--amber)" strokeWidth="2.5" markerEnd="url(#absArrow)" />
    <path d="M228 150 C242 158, 260 168, 278 182" fill="none" stroke="var(--amber)" strokeWidth="2.5" markerEnd="url(#absArrow)" />
    <defs>
      <marker id="absArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M0 0 L10 5 L0 10 Z" fill="var(--amber)" />
      </marker>
    </defs>

    <text x="228" y="270" {...label} textAnchor="middle" fill="var(--teal)">órtese de abdução</text>
    <text x="228" y="24" {...mono} textAnchor="middle">abdução + amplitude de movimento</text>
    <text x="228" y="290" {...label} textAnchor="middle">
      Prioriza a mobilidade e a cobertura; não substitui a osteotomia na indicação cirúrgica.
    </text>
  </svg>
);

/* -------------------------------------------------------------------------- */

export const Osteotomy: FC<FigureProps> = ({ className, title, variant }) => {
  const salter = (variant ?? "femoral").toLowerCase() === "salter";

  return (
    <svg
      viewBox="0 0 420 300"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `Contenção cirúrgica: osteotomia ${salter ? "inominada de Salter" : "femoral varizante"}`}</title>

      {/* acetábulo / ílio */}
      <path
        {...boneBack}
        d="M70 56 C150 42, 250 44, 330 62 L330 108 C286 100, 250 104, 220 122 C196 106, 150 100, 92 110 L70 106 Z"
      />
      <path d="M150 118 C180 140, 204 150, 220 152 C236 150, 260 140, 288 118" fill="none" stroke="var(--teal)" strokeWidth="5" strokeLinecap="round" />

      {/* cabeça femoral */}
      <circle cx="216" cy="158" r="42" {...bone} />
      <path d="M216 116 C240 122, 256 142, 254 166 C234 166, 216 152, 214 132 Z" fill="var(--cortical-tint)" stroke="var(--cortical)" strokeWidth="2" />

      {salter ? (
        <>
          {/* osteotomia inominada: cunha aberta no ílio redireciona o acetábulo */}
          <path d="M96 96 L330 84" stroke="var(--cortical)" strokeWidth="2.5" strokeDasharray="6 4" />
          <path d="M300 78 L330 62 L330 92 Z" fill="var(--amber)" opacity="0.4" stroke="var(--amber)" strokeWidth="2" />
          <path d="M150 118 C182 146, 208 156, 224 156" fill="none" stroke="var(--amber)" strokeWidth="2.5" markerEnd="url(#ostArrow)" />
          <text x="332" y="70" {...label} fill="var(--amber)">enxerto em cunha</text>
          <text x="120" y="200" {...label} fill="var(--amber)">redireciona a cobertura</text>
        </>
      ) : (
        <>
          {/* diáfise e osteotomia varizante */}
          <path {...bone} d="M200 190 C214 210, 220 240, 220 276 L266 276 C266 236, 252 206, 236 186 Z" />
          <path d="M200 196 L262 200" stroke="var(--cortical)" strokeWidth="2.5" strokeDasharray="6 4" />
          {/* cunha medial retirada */}
          <path d="M222 196 L246 198 L236 184 Z" fill="var(--amber)" opacity="0.4" stroke="var(--amber)" strokeWidth="2" />
          {/* seta de varização */}
          <path d="M244 176 C230 168, 220 152, 218 134" fill="none" stroke="var(--amber)" strokeWidth="2.5" markerEnd="url(#ostArrow)" />
          <text x="272" y="210" {...label} fill="var(--amber)">cunha medial</text>
          <text x="252" y="150" {...label} fill="var(--amber)">variza → contém</text>
        </>
      )}

      <defs>
        <marker id="ostArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 Z" fill="var(--amber)" />
        </marker>
      </defs>

      <rect x="292" y="120" width="104" height="30" rx="8" fill="var(--teal-tint)" />
      <text x="344" y="140" {...mono} textAnchor="middle" fill="var(--teal-deep)">
        {salter ? "Salter" : "femoral"}
      </text>

      <text x="210" y="24" {...mono} textAnchor="middle">osteotomia de contenção</text>
      <text x="210" y="292" {...label} textAnchor="middle">
        {salter
          ? "Reorienta o acetábulo para cobrir a cabeça anterolateral."
          : "Direciona a cabeça para dentro do acetábulo; controlar hipovarização residual."}
      </text>
    </svg>
  );
};

/* -------------------------------------------------------------------------- */

export const Stulberg: FC<FigureProps> = ({ className, title, variant }) => {
  const v = (variant ?? "esferica").toLowerCase();
  const names: Record<string, string> = {
    esferica: "I–II · esférica congruente",
    ovoide: "III · ovóide (asférica congruente)",
    plana: "IV–V · plana / asférica incongruente",
  };

  const cx = 200;
  const cy = 158;

  return (
    <svg
      viewBox="0 0 420 300"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `Desfecho de Stulberg: ${names[v] ?? v}`}</title>

      {/* colo e diáfise */}
      <path {...bone} d={`M${cx - 24} ${cy + 30} C${cx - 14} ${cy + 80}, ${cx - 16} ${cy + 116}, ${cx - 8} ${cy + 126}
        L${cx + 38} ${cy + 126} C${cx + 42} ${cy + 82}, ${cx + 30} ${cy + 42}, ${cx + 18} ${cy + 22} Z`} />

      {/* acetábulo */}
      {v === "esferica" && (
        <path d={`M${cx - 66} ${cy - 20} C${cx - 40} ${cy - 60}, ${cx + 40} ${cy - 60}, ${cx + 66} ${cy - 20}`}
          fill="none" stroke="var(--teal)" strokeWidth="5" strokeLinecap="round" />
      )}
      {v === "ovoide" && (
        <path d={`M${cx - 72} ${cy - 16} C${cx - 44} ${cy - 58}, ${cx + 44} ${cy - 58}, ${cx + 72} ${cy - 16}`}
          fill="none" stroke="var(--teal)" strokeWidth="5" strokeLinecap="round" />
      )}
      {v === "plana" && (
        <path d={`M${cx - 74} ${cy - 24} C${cx - 40} ${cy - 44}, ${cx + 40} ${cy - 40}, ${cx + 74} ${cy - 18}`}
          fill="none" stroke="var(--teal)" strokeWidth="5" strokeLinecap="round" />
      )}

      {/* cabeça conforme desfecho */}
      {v === "esferica" && <circle cx={cx} cy={cy} r="52" {...bone} />}
      {v === "ovoide" && <ellipse cx={cx} cy={cy} rx="60" ry="46" {...bone} />}
      {v === "plana" && (
        <path
          {...bone}
          d={`M${cx - 62} ${cy - 6} C${cx - 60} ${cy - 34}, ${cx - 30} ${cy - 44}, ${cx} ${cy - 44}
            C${cx + 34} ${cy - 44}, ${cx + 62} ${cy - 30}, ${cx + 62} ${cy - 4}
            C${cx + 62} ${cy + 30}, ${cx + 34} ${cy + 46}, ${cx} ${cy + 46}
            C${cx - 32} ${cy + 46}, ${cx - 62} ${cy + 28}, ${cx - 62} ${cy - 6} Z`}
        />
      )}
      {/* achatamento do polo superior na forma plana */}
      {v === "plana" && (
        <line x1={cx - 40} y1={cy - 42} x2={cx + 40} y2={cy - 40} stroke="var(--cortical)" strokeWidth="3" />
      )}

      <rect x="298" y="118" width="102" height="30" rx="8" fill={v === "plana" ? "var(--cortical-tint)" : "var(--teal-tint)"} />
      <text x="349" y="138" {...mono} textAnchor="middle" fill={v === "plana" ? "var(--cortical)" : "var(--teal-deep)"}>
        {v === "esferica" ? "I–II" : v === "ovoide" ? "III" : "IV–V"}
      </text>
      <text x="349" y="166" {...label} textAnchor="middle">
        {v === "plana" ? "maior risco de artrose" : v === "ovoide" ? "congruência aspérica" : "melhor prognóstico"}
      </text>

      <text x="210" y="24" {...mono} textAnchor="middle">desfecho na maturidade esquelética</text>
      <text x="210" y="292" {...label} textAnchor="middle">
        {names[v] ?? v} · a esfericidade e a congruência definem o risco de artrose tardia.
      </text>
    </svg>
  );
};

/* -------------------------------------------------------------------------- */

export const figures: Record<string, FC<FigureProps>> = {
  "legg-calve-perthes:anatomia": Anatomy,
  "legg-calve-perthes:waldenstrom": Waldenstrom,
  "legg-calve-perthes:pilar-lateral": LateralPillar,
  "legg-calve-perthes:catterall": Catterall,
  "legg-calve-perthes:contencao": Containment,
  "legg-calve-perthes:orteses": AbductionOrthosis,
  "legg-calve-perthes:osteotomia": Osteotomy,
  "legg-calve-perthes:stulberg": Stulberg,
};
