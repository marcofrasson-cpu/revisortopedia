import type { FC } from "react";
import type { FigureProps } from "../../../types/topic";

/* ============================================================================
   Fratura do fêmur distal — figuras esquemáticas, line-art 2 tons (SEM copyright).
   Ossos: stroke var(--ink-soft), fill var(--surface). Implante/partes moles: teal.
   Traço de fratura: var(--cortical) + className "fx-line". Medidas/eixos: var(--amber).
   Rótulos <text>: fontSize 11, fill var(--muted), fontFamily var(--font-body).
   Todos os ids são prefixados por "fratura-femur-distal:" no registro (fim do arquivo).
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
  fontSize: 12,
  fill: "var(--ink)",
  fontFamily: "var(--font-mono, monospace)",
  letterSpacing: 0.5,
};

/* ---------------------------------------------------------------------------
   1) Anatomia — fêmur distal (vista AP): metáfise, côndilos, sulco troclear,
   e as inserções musculares que deformam o fragmento distal.
--------------------------------------------------------------------------- */
export const Anatomia: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 260 320"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Anatomia do fêmur distal — vista anteroposterior"}</title>

    {/* Diáfise femoral */}
    <path {...boneStyle} d="M112 16 C 108 70, 108 130, 112 180 L 148 180 C 152 130, 152 70, 148 16 Z" />

    {/* Alargamento metafisário */}
    <path {...boneStyle} d="M112 176 C 100 196, 86 210, 78 224 L 182 224 C 174 210, 160 196, 148 176 Z" />

    {/* Côndilos femorais (medial e lateral) */}
    <path
      {...boneStyle}
      fill="var(--surface-2, var(--surface))"
      d="M78 222 C 66 228, 62 250, 70 268 C 78 284, 100 288, 116 282 C 124 279, 128 268, 128 256 L 128 226 Z"
    />
    <path
      {...boneStyle}
      fill="var(--surface-2, var(--surface))"
      d="M182 222 C 194 228, 198 250, 190 268 C 182 284, 160 288, 144 282 C 136 279, 132 268, 132 256 L 132 226 Z"
    />
    {/* Sulco intercondilar / troclear */}
    <path
      d="M130 226 C 128 244, 128 262, 130 280"
      fill="none"
      stroke="var(--line-strong)"
      strokeWidth="1"
      strokeDasharray="3 3"
    />

    {/* Inserção do gastrocnêmio (duas cabeças) — vetores posteriores */}
    <g stroke="var(--teal)" strokeWidth="2.2" fill="none" strokeLinecap="round">
      <path d="M92 236 C 84 248, 82 262, 88 274" markerEnd="url(#ffd-arrow)" />
      <path d="M168 236 C 176 248, 178 262, 172 274" markerEnd="url(#ffd-arrow)" />
    </g>
    <defs>
      <marker id="ffd-arrow" markerWidth="9" markerHeight="9" refX="4" refY="4" orient="auto">
        <path d="M0 0 L8 4 L0 8 Z" fill="var(--teal)" />
      </marker>
    </defs>

    <text x="130" y="12" {...label} textAnchor="middle">Diáfise femoral</text>
    <text x="200" y="204" {...label} textAnchor="start">Metáfise</text>
    <text x="74" y="256" {...label} textAnchor="end" fill="var(--teal)">Cabeças do</text>
    <text x="74" y="270" {...label} textAnchor="end" fill="var(--teal)">gastrocnêmio</text>
    <text x="70" y="300" {...label} textAnchor="middle">Côndilo medial</text>
    <text x="192" y="300" {...label} textAnchor="middle">Côndilo lateral</text>
    <text x="130" y="316" {...label} textAnchor="middle" fontFamily="var(--font-mono, monospace)">
      sulco troclear
    </text>
  </svg>
);

/* ---------------------------------------------------------------------------
   2) Deformidade típica (vista lateral/sagital): o gastrocnêmio traciona o
   fragmento distal em EXTENSÃO (ápice posterior), e a diáfise desliza anterior;
   a ponta posterior aproxima-se da artéria poplítea.
--------------------------------------------------------------------------- */
export const Deformidade: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 300 300"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Deformidade em extensão do fragmento distal (tração do gastrocnêmio)"}</title>

    {/* Diáfise (proximal) — deslocada anteriormente (para a esquerda/frente) */}
    <path {...boneStyle} d="M120 20 C 116 70, 112 118, 108 158 L 140 164 C 144 122, 148 72, 152 20 Z" />

    {/* Traço de fratura metafisário */}
    <g className="fx-line">
      <path
        d="M104 160 C 120 170, 150 172, 168 166"
        fill="none"
        stroke="var(--cortical)"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </g>

    {/* Fragmento distal — rodado em extensão (ápice posterior) */}
    <g transform="rotate(24 150 176)">
      <path
        {...boneStyle}
        d="M118 168 C 116 190, 118 210, 122 226 L 178 226 C 182 210, 184 190, 182 168 Z"
      />
      {/* côndilos */}
      <path
        {...boneStyle}
        fill="var(--surface-2, var(--surface))"
        d="M118 224 C 106 232, 104 254, 116 266 C 132 278, 168 278, 184 266 C 196 254, 194 232, 182 224 Z"
      />
    </g>

    {/* Vetor do gastrocnêmio puxando o fragmento distal para posterior */}
    <g stroke="var(--teal)" strokeWidth="2.4" fill="none" strokeLinecap="round">
      <path d="M196 210 C 214 224, 220 244, 212 264" markerEnd="url(#ffd-def-arrow)" />
    </g>
    <defs>
      <marker id="ffd-def-arrow" markerWidth="9" markerHeight="9" refX="4" refY="4" orient="auto">
        <path d="M0 0 L8 4 L0 8 Z" fill="var(--teal)" />
      </marker>
    </defs>

    {/* Artéria poplítea (posterior) — em risco */}
    <path
      d="M206 150 C 214 190, 214 230, 206 268"
      fill="none"
      stroke="var(--cortical)"
      strokeWidth="1.6"
      strokeDasharray="5 4"
    />

    {/* Eixo — ângulo de extensão (âmbar) */}
    <g stroke="var(--amber)" strokeWidth="1" fill="none">
      <line x1="128" y1="90" x2="128" y2="250" strokeDasharray="4 4" />
    </g>

    <text x="112" y="16" {...label} textAnchor="middle">Diáfise (desvio anterior)</text>
    <text x="176" y="150" {...label} textAnchor="start" fill="var(--cortical)">traço</text>
    <text x="210" y="248" {...label} textAnchor="start" fill="var(--teal)">gastrocnêmio</text>
    <text x="210" y="262" {...label} textAnchor="start" fill="var(--teal)">extensão/post.</text>
    <text x="212" y="150" {...label} textAnchor="start" fill="var(--cortical)">a. poplítea</text>
    <text x="150" y="292" {...label} textAnchor="middle" fontFamily="var(--font-mono, monospace)">
      ápice posterior (recurvatum)
    </text>
  </svg>
);

/* ---------------------------------------------------------------------------
   3) AO/OTA 33 — variants "A" (extra-articular), "B" (articular parcial),
   "C" (articular completa). Clicável.
--------------------------------------------------------------------------- */
export const AoOta: FC<FigureProps> = ({ className, title, variant }) => {
  const v = (variant ?? "A").toUpperCase();
  const map: Record<string, { name: string; desc: string }> = {
    A: { name: "33-A", desc: "Extra-articular (metafisária)" },
    B: { name: "33-B", desc: "Articular parcial (um côndilo)" },
    C: { name: "33-C", desc: "Articular completa (dissocia dos côndilos)" },
  };
  const cfg = map[v] ?? map.A;

  return (
    <svg
      viewBox="0 0 260 300"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `AO/OTA 33 — ${cfg.name} (${cfg.desc})`}</title>

      {/* Fêmur distal genérico (AP) */}
      <path {...boneStyle} d="M112 16 C 108 70, 108 128, 112 172 L 148 172 C 152 128, 152 70, 148 16 Z" />
      <path {...boneStyle} d="M112 168 C 100 188, 86 202, 80 216 L 180 216 C 174 202, 160 188, 148 168 Z" />
      <path
        {...boneStyle}
        fill="var(--surface-2, var(--surface))"
        d="M80 214 C 68 220, 64 244, 72 262 C 82 280, 178 280, 188 262 C 196 244, 192 220, 180 214 Z"
      />
      {/* sulco intercondilar */}
      <path d="M130 216 C 128 238, 128 258, 130 276" fill="none" stroke="var(--line-strong)" strokeWidth="1" strokeDasharray="3 3" />

      {/* Traço(s) de fratura conforme o tipo */}
      <g className="fx-line" stroke="var(--cortical)" strokeWidth="2.6" fill="none" strokeLinecap="round">
        {v === "A" && (
          // linha metafisária transversa, poupa a articulação
          <path d="M84 198 C 112 208, 150 208, 176 198" />
        )}
        {v === "B" && (
          // traço oblíquo que separa um côndilo (sagital, articular parcial)
          <path d="M138 214 C 142 240, 146 262, 150 278" />
        )}
        {v === "C" && (
          <>
            {/* metafisário transverso */}
            <path d="M84 198 C 112 208, 150 208, 176 198" />
            {/* mais traço intercondilar em Y (dissocia os côndilos) */}
            <path d="M130 216 L 130 278" />
          </>
        )}
      </g>

      <text x="130" y="12" {...label} textAnchor="middle">Fêmur distal (AP)</text>
      <text x="130" y="298" textAnchor="middle" {...mono}>{cfg.name}</text>
      <text x="130" y="284" textAnchor="middle" {...label}>{cfg.desc}</text>
    </svg>
  );
};

/* ---------------------------------------------------------------------------
   4) Via lateral (parapatelar lateral / "swashbuckler") — placa lateral.
--------------------------------------------------------------------------- */
export const ViaLateral: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 260 300"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Via lateral / parapatelar lateral (acesso para placa lateral)"}</title>

    {/* Fêmur distal (AP) */}
    <path {...boneStyle} d="M112 16 C 108 66, 108 122, 112 166 L 148 166 C 152 122, 152 66, 148 16 Z" />
    <path {...boneStyle} d="M112 162 C 100 182, 88 196, 82 210 L 178 210 C 172 196, 160 182, 148 162 Z" />
    <path
      {...boneStyle}
      fill="var(--surface-2, var(--surface))"
      d="M82 208 C 70 214, 66 238, 74 256 C 84 274, 176 274, 186 256 C 194 238, 190 214, 178 208 Z"
    />

    {/* Patela (tracionada medialmente) */}
    <ellipse cx="108" cy="248" rx="16" ry="22" {...boneStyle} fill="var(--surface-2, var(--surface))" />

    {/* Incisão lateral (linha de acesso) */}
    <path
      d="M182 40 C 190 100, 190 170, 176 232"
      fill="none"
      stroke="var(--teal)"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeDasharray="2 6"
    />

    {/* Intervalo — vasto lateral elevado / trato iliotibial */}
    <path
      d="M168 60 C 176 120, 176 180, 166 224"
      fill="none"
      stroke="var(--teal)"
      strokeWidth="1.4"
    />

    <text x="130" y="12" {...label} textAnchor="middle">Fêmur distal (AP)</text>
    <text x="205" y="120" {...label} textAnchor="start" fill="var(--teal)">incisão</text>
    <text x="205" y="134" {...label} textAnchor="start" fill="var(--teal)">lateral</text>
    <text x="88" y="248" {...label} textAnchor="end">patela</text>
    <text x="130" y="292" {...label} textAnchor="middle" fontFamily="var(--font-mono, monospace)">
      intervalo: sob o vasto lateral / TIT
    </text>
  </svg>
);

/* ---------------------------------------------------------------------------
   5) Via retrógrada — portal intercondilar (parapatelar medial / transtendíneo)
   no ápice do sulco (Blumensaat) para a haste retrógrada.
--------------------------------------------------------------------------- */
export const ViaRetrograda: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 260 300"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Via retrógrada — portal intercondilar para haste retrógrada"}</title>

    {/* Fêmur distal (AP) */}
    <path {...boneStyle} d="M112 16 C 108 66, 108 122, 112 166 L 148 166 C 152 122, 152 66, 148 16 Z" />
    <path {...boneStyle} d="M112 162 C 100 182, 88 196, 82 210 L 178 210 C 172 196, 160 182, 148 162 Z" />
    <path
      {...boneStyle}
      fill="var(--surface-2, var(--surface))"
      d="M82 208 C 70 214, 66 238, 74 256 C 84 274, 176 274, 186 256 C 194 238, 190 214, 178 208 Z"
    />
    {/* sulco intercondilar */}
    <path d="M130 210 C 128 232, 128 252, 130 272" fill="none" stroke="var(--line-strong)" strokeWidth="1" strokeDasharray="3 3" />

    {/* Ponto de entrada — ápice do intercôndilo (Blumensaat), central em AP */}
    <circle cx="130" cy="262" r="6" fill="none" stroke="var(--teal)" strokeWidth="2.4" />
    <line x1="130" y1="262" x2="130" y2="60" stroke="var(--teal)" strokeWidth="2.6" strokeDasharray="6 4" />

    {/* Incisão (parapatelar medial curta / transtendínea) */}
    <path
      d="M120 226 C 122 244, 126 258, 130 268"
      fill="none"
      stroke="var(--teal)"
      strokeWidth="1.8"
      strokeDasharray="2 5"
    />

    <text x="130" y="12" {...label} textAnchor="middle">Fêmur distal (AP)</text>
    <text x="140" y="256" {...label} textAnchor="start" fill="var(--teal)">ponto de entrada</text>
    <text x="150" y="120" {...label} textAnchor="start" fill="var(--teal)">eixo da haste</text>
    <text x="130" y="292" {...label} textAnchor="middle" fontFamily="var(--font-mono, monospace)">
      central em AP · Blumensaat no perfil
    </text>
  </svg>
);

/* ---------------------------------------------------------------------------
   6) Passo — redução (correção da deformidade em extensão): coxim poplíteo,
   tração, e neutralização do vetor do gastrocnêmio.
--------------------------------------------------------------------------- */
export const StepReducao: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 300 260"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Redução — correção da deformidade em extensão (coxim, tração)"}</title>

    {/* fêmur (perfil) reduzido — eixo restaurado */}
    <path {...boneStyle} d="M40 70 C 90 66, 150 66, 200 72 L 200 100 C 150 94, 90 94, 40 98 Z" />
    {/* fragmento distal / côndilos */}
    <path
      {...boneStyle}
      fill="var(--surface-2, var(--surface))"
      d="M200 62 C 228 60, 250 74, 250 96 C 250 118, 228 130, 204 126 L 200 126 Z"
    />
    {/* traço reduzido */}
    <g className="fx-line">
      <line x1="200" y1="70" x2="204" y2="126" stroke="var(--cortical)" strokeWidth="1.8" strokeDasharray="3 3" />
    </g>

    {/* Coxim poplíteo (flexiona o joelho, relaxa o gastrocnêmio) */}
    <path d="M198 150 C 220 138, 244 138, 260 152 C 244 162, 220 162, 198 156 Z" fill="var(--teal-tint, var(--surface-2, var(--surface)))" stroke="var(--teal)" strokeWidth="1.6" />

    {/* seta de tração longitudinal */}
    <g stroke="var(--amber)" strokeWidth="2.2" fill="none" strokeLinecap="round">
      <line x1="60" y1="180" x2="24" y2="180" markerEnd="url(#ffd-red-arrow)" />
    </g>
    <defs>
      <marker id="ffd-red-arrow" markerWidth="9" markerHeight="9" refX="4" refY="4" orient="auto">
        <path d="M0 0 L8 4 L0 8 Z" fill="var(--amber)" />
      </marker>
    </defs>

    <text x="120" y="56" {...label} textAnchor="middle">eixo restaurado</text>
    <text x="228" y="176" {...label} textAnchor="middle" fill="var(--teal)">coxim poplíteo</text>
    <text x="60" y="200" {...label} textAnchor="middle" fill="var(--amber)">tração</text>
    <text x="150" y="238" {...label} textAnchor="middle" fontFamily="var(--font-mono, monospace)">
      flexão do joelho relaxa o gastrocnêmio
    </text>
  </svg>
);

/* ---------------------------------------------------------------------------
   7) Passo — placa bloqueada lateral em ponte (bridging) sobre cominução
   metafisária: fixação em extremidades, comprimento de trabalho longo.
--------------------------------------------------------------------------- */
export const StepPlaca: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 260 320"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Placa bloqueada lateral em ponte sobre cominução metafisária"}</title>

    {/* Fêmur distal (AP) */}
    <path {...boneStyle} d="M112 16 C 108 66, 108 116, 112 158 L 148 158 C 152 116, 152 66, 148 16 Z" />
    <path {...boneStyle} d="M112 154 C 100 176, 88 190, 82 206 L 178 206 C 172 190, 160 176, 148 154 Z" />
    <path
      {...boneStyle}
      fill="var(--surface-2, var(--surface))"
      d="M82 204 C 70 210, 66 234, 74 252 C 84 270, 176 270, 186 252 C 194 234, 190 210, 178 204 Z"
    />

    {/* Zona de cominução metafisária (fragmentos) */}
    <g className="fx-line" stroke="var(--cortical)" strokeWidth="1.8" fill="none" strokeLinecap="round">
      <path d="M100 168 l 20 8 M108 186 l 24 4 M128 176 l 18 10" />
    </g>
    <rect x="92" y="160" width="76" height="40" rx="6" fill="var(--cortical)" opacity="0.10" />

    {/* Placa lateral bloqueada */}
    <rect x="168" y="40" width="14" height="180" rx="7" fill="var(--teal-tint, var(--surface-2, var(--surface)))" stroke="var(--teal)" strokeWidth="1.8" />
    {/* parafusos proximais (haste, bicortical) */}
    <g stroke="var(--teal)" strokeWidth="2.2" strokeLinecap="round">
      <line x1="176" y1="58" x2="120" y2="62" />
      <line x1="176" y1="84" x2="120" y2="86" />
      <line x1="176" y1="110" x2="122" y2="110" />
    </g>
    {/* parafusos distais (bloqueados, convergentes nos côndilos) */}
    <g stroke="var(--teal)" strokeWidth="2.2" strokeLinecap="round">
      <line x1="176" y1="210" x2="96" y2="228" />
      <line x1="178" y1="196" x2="98" y2="210" />
      <line x1="176" y1="224" x2="108" y2="248" />
    </g>

    {/* Comprimento de trabalho (âmbar) */}
    <g stroke="var(--amber)" strokeWidth="1" fill="none">
      <line x1="200" y1="120" x2="200" y2="170" strokeDasharray="4 3" />
      <line x1="196" y1="120" x2="204" y2="120" />
      <line x1="196" y1="170" x2="204" y2="170" />
    </g>

    <text x="60" y="182" {...label} textAnchor="end" fill="var(--cortical)">cominução</text>
    <text x="188" y="34" {...label} textAnchor="middle" fill="var(--teal)">placa lateral</text>
    <text x="214" y="148" {...label} textAnchor="start" fill="var(--amber)">compr.</text>
    <text x="214" y="162" {...label} textAnchor="start" fill="var(--amber)">trabalho</text>
    <text x="130" y="300" {...label} textAnchor="middle" fontFamily="var(--font-mono, monospace)">
      fixação em ponte — estabilidade relativa
    </text>
    <text x="130" y="314" {...label} textAnchor="middle">poupa a zona de cominução (calo)</text>
  </svg>
);

/* ---------------------------------------------------------------------------
   8) Passo — haste retrógrada bloqueada, com múltiplos parafusos distais.
--------------------------------------------------------------------------- */
export const StepHaste: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 260 320"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Haste retrógrada bloqueada — múltiplos parafusos distais"}</title>

    {/* Fêmur distal (AP) */}
    <path {...boneStyle} d="M112 16 C 108 66, 108 116, 112 158 L 148 158 C 152 116, 152 66, 148 16 Z" />
    <path {...boneStyle} d="M112 154 C 100 176, 88 190, 82 206 L 178 206 C 172 190, 160 176, 148 154 Z" />
    <path
      {...boneStyle}
      fill="var(--surface-2, var(--surface))"
      d="M82 204 C 70 210, 66 234, 74 252 C 84 270, 176 270, 186 252 C 194 234, 190 210, 178 204 Z"
    />

    {/* Traço metafisário */}
    <g className="fx-line">
      <path d="M86 184 C 112 194, 150 194, 174 184" fill="none" stroke="var(--cortical)" strokeWidth="2.4" strokeLinecap="round" />
    </g>

    {/* Haste intramedular (retrógrada) */}
    <rect x="124" y="60" width="12" height="196" rx="6" fill="var(--teal-tint, var(--surface-2, var(--surface)))" stroke="var(--teal)" strokeWidth="1.8" />
    {/* ponto de entrada */}
    <circle cx="130" cy="258" r="5" fill="none" stroke="var(--teal)" strokeWidth="2" />

    {/* Bloqueio proximal */}
    <g stroke="var(--teal)" strokeWidth="2.2" strokeLinecap="round">
      <line x1="112" y1="80" x2="150" y2="80" />
      <line x1="112" y1="104" x2="150" y2="104" />
    </g>
    {/* Bloqueio distal — múltiplos parafusos (multiplanar) */}
    <g stroke="var(--teal)" strokeWidth="2.2" strokeLinecap="round">
      <line x1="86" y1="224" x2="176" y2="224" />
      <line x1="90" y1="238" x2="172" y2="238" />
      <line x1="104" y1="210" x2="158" y2="252" />
    </g>

    <text x="130" y="12" {...label} textAnchor="middle">Fêmur distal (AP)</text>
    <text x="146" y="70" {...label} textAnchor="start" fill="var(--teal)">haste retrógrada</text>
    <text x="200" y="232" {...label} textAnchor="start" fill="var(--teal)">bloq. distal</text>
    <text x="60" y="188" {...label} textAnchor="end" fill="var(--cortical)">traço</text>
    <text x="130" y="300" {...label} textAnchor="middle" fontFamily="var(--font-mono, monospace)">
      <tspan x="130" dy="0em">entrada central · ≥ 3 parafusos</tspan>
      <tspan x="130" dy="1.15em">distais no bloco articular</tspan>
    </text>
  </svg>
);

/* ---------------------------------------------------------------------------
   9) Passo — construção dupla (nail-plate ou placa dupla medial+lateral)
   para cominução/perda óssea medial e osso osteoporótico.
--------------------------------------------------------------------------- */
export const StepDupla: FC<FigureProps> = ({ className, title, variant }) => {
  const nailPlate = (variant ?? "nail-plate") === "nail-plate";
  return (
    <svg
      viewBox="0 0 260 320"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>
        {title ??
          (nailPlate
            ? "Construção dupla — haste retrógrada + placa lateral"
            : "Construção dupla — placa dupla (lateral + medial)")}
      </title>

      {/* Fêmur distal (AP) */}
      <path {...boneStyle} d="M112 16 C 108 66, 108 116, 112 158 L 148 158 C 152 116, 152 66, 148 16 Z" />
      <path {...boneStyle} d="M112 154 C 100 176, 88 190, 82 206 L 178 206 C 172 190, 160 176, 148 154 Z" />
      <path
        {...boneStyle}
        fill="var(--surface-2, var(--surface))"
        d="M82 204 C 70 210, 66 234, 74 252 C 84 270, 176 270, 186 252 C 194 234, 190 210, 178 204 Z"
      />

      {/* Cominução / defeito medial */}
      <rect x="92" y="160" width="52" height="38" rx="6" fill="var(--cortical)" opacity="0.10" />
      <g className="fx-line" stroke="var(--cortical)" strokeWidth="1.6" fill="none" strokeLinecap="round">
        <path d="M100 170 l 16 8 M104 188 l 20 2" />
      </g>

      {nailPlate ? (
        <>
          {/* Haste central */}
          <rect x="124" y="60" width="12" height="196" rx="6" fill="var(--teal-tint, var(--surface-2, var(--surface)))" stroke="var(--teal)" strokeWidth="1.8" />
          {/* Placa lateral complementar */}
          <rect x="168" y="60" width="12" height="150" rx="6" fill="var(--teal-tint, var(--surface-2, var(--surface)))" stroke="var(--teal)" strokeWidth="1.8" />
          <g stroke="var(--teal)" strokeWidth="2" strokeLinecap="round">
            <line x1="176" y1="200" x2="120" y2="216" />
            <line x1="174" y1="186" x2="118" y2="200" />
            <line x1="130" y1="230" x2="176" y2="230" />
          </g>
          <text x="150" y="52" {...label} textAnchor="middle" fill="var(--teal)">haste + placa lateral</text>
        </>
      ) : (
        <>
          {/* Placa lateral */}
          <rect x="168" y="60" width="12" height="150" rx="6" fill="var(--teal-tint, var(--surface-2, var(--surface)))" stroke="var(--teal)" strokeWidth="1.8" />
          {/* Placa medial (anti-colapso do defeito medial) */}
          <rect x="80" y="70" width="12" height="140" rx="6" fill="var(--teal-tint, var(--surface-2, var(--surface)))" stroke="var(--teal)" strokeWidth="1.8" />
          <g stroke="var(--teal)" strokeWidth="2" strokeLinecap="round">
            <line x1="176" y1="200" x2="96" y2="216" />
            <line x1="88" y1="196" x2="168" y2="212" />
          </g>
          <text x="150" y="52" {...label} textAnchor="middle" fill="var(--teal)">placa lateral + medial</text>
        </>
      )}

      <text x="74" y="182" {...label} textAnchor="end" fill="var(--cortical)">defeito medial</text>
      <text x="130" y="300" {...label} textAnchor="middle" fontFamily="var(--font-mono, monospace)">
        {nailPlate ? "reforço p/ cominução / osso osteoporótico" : "sustenta a coluna medial cominuída"}
      </text>
    </svg>
  );
};

/**
 * Registro de figuras — chave = id prefixado por "fratura-femur-distal:".
 * O conteúdo referencia exatamente estes ids (e variants).
 */
export const figures: Record<string, FC<FigureProps>> = {
  "fratura-femur-distal:anatomia": Anatomia,
  "fratura-femur-distal:deformidade": Deformidade,
  "fratura-femur-distal:ao-ota": AoOta,
  "fratura-femur-distal:via-lateral": ViaLateral,
  "fratura-femur-distal:via-retrograda": ViaRetrograda,
  "fratura-femur-distal:step-reducao": StepReducao,
  "fratura-femur-distal:step-placa": StepPlaca,
  "fratura-femur-distal:step-haste": StepHaste,
  "fratura-femur-distal:step-dupla": StepDupla,
};
