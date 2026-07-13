import type { FC } from "react";
import type { FigureProps } from "../../../types/topic";

/* ============================================================================
   Fratura do úmero distal — figuras esquemáticas, line-art 2 tons (SEM copyright).
   Ossos: stroke var(--ink-soft), fill var(--surface). Implante/nervo/partes moles: teal.
   Traço de fratura: var(--cortical) + className "fx-line". Medidas/eixos: var(--amber).
   Rótulos <text>: fontSize 11, fill var(--muted), fontFamily var(--font-body).
   Todos os ids são prefixados por "fratura-umero-distal:" no registro (fim do arquivo).
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
   1) Anatomia — úmero distal (vista posterior): colunas medial e lateral,
   tróclea e capítulo, fossa do olécrano, epicôndilos e o nervo ulnar no
   túnel cubital (posterior ao epicôndilo medial).
--------------------------------------------------------------------------- */
export const Anatomia: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 260 320"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Anatomia do úmero distal — vista posterior (colunas, tróclea, capítulo, nervo ulnar)"}</title>

    {/* Diáfise umeral */}
    <path {...boneStyle} d="M116 14 C 112 60, 112 108, 114 150 L 146 150 C 148 108, 148 60, 144 14 Z" />

    {/* Coluna medial (mais robusta, termina no epicôndilo medial) */}
    <path {...boneStyle} d="M114 148 C 104 168, 90 188, 78 208 C 70 224, 74 242, 90 246 C 100 248, 108 238, 112 224 L 120 178 Z" />
    {/* Coluna lateral (termina no capítulo) */}
    <path {...boneStyle} d="M146 148 C 156 168, 170 186, 180 204 C 188 218, 184 236, 168 240 C 158 242, 150 232, 146 220 L 140 178 Z" />

    {/* Tróclea (rolete central) */}
    <path
      {...boneStyle}
      fill="var(--surface-2, var(--surface))"
      d="M108 224 C 100 232, 100 254, 110 264 C 122 274, 140 274, 150 264 C 160 254, 158 232, 150 224 Z"
    />
    {/* Sulco troclear */}
    <path d="M129 224 C 127 240, 127 252, 129 266" fill="none" stroke="var(--line-strong)" strokeWidth="1" strokeDasharray="3 3" />

    {/* Capítulo (esférico, lateral) */}
    <circle cx="168" cy="232" r="14" {...boneStyle} fill="var(--surface-2, var(--surface))" />

    {/* Fossa do olécrano (depressão central posterior) */}
    <ellipse cx="129" cy="196" rx="15" ry="20" fill="none" stroke="var(--line-strong)" strokeWidth="1.2" strokeDasharray="4 3" />

    {/* Epicôndilo medial (apófise) */}
    <circle cx="86" cy="236" r="9" {...boneStyle} />

    {/* Nervo ulnar — desce pela face posterior da coluna medial e cruza atrás do epicôndilo medial (túnel cubital) */}
    <path
      d="M110 150 C 100 176, 88 200, 82 222 C 78 236, 82 252, 92 262"
      fill="none"
      stroke="var(--teal)"
      strokeWidth="2.6"
      strokeLinecap="round"
    />

    <text x="130" y="10" {...label} textAnchor="middle">Diáfise umeral</text>
    <text x="52" y="196" {...label} textAnchor="middle">Coluna</text>
    <text x="52" y="209" {...label} textAnchor="middle">medial</text>
    <text x="208" y="188" {...label} textAnchor="middle">Coluna</text>
    <text x="208" y="201" {...label} textAnchor="middle">lateral</text>
    <text x="129" y="180" {...label} textAnchor="middle">fossa do olécrano</text>
    <text x="196" y="256" {...label} textAnchor="middle">capítulo</text>
    <text x="129" y="292" {...label} textAnchor="middle">tróclea</text>
    <text x="70" y="278" {...label} textAnchor="middle" fill="var(--teal)">nervo ulnar</text>
    <text x="130" y="312" {...label} textAnchor="middle" fontFamily="var(--font-mono, monospace)">
      arco articular contínuo tróclea–capítulo
    </text>
  </svg>
);

/* ---------------------------------------------------------------------------
   2) Conceito das duas colunas (Jupiter/Mehne) — o úmero distal como um
   triângulo: colunas medial e lateral ligadas pelo bloco articular na base.
--------------------------------------------------------------------------- */
export const Colunas: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 260 280"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Conceito das duas colunas — triângulo do úmero distal (Jupiter/Mehne)"}</title>

    {/* Diáfise */}
    <path {...boneStyle} d="M118 14 C 116 44, 116 74, 118 96 L 142 96 C 144 74, 144 44, 142 14 Z" />

    {/* Triângulo esquemático das colunas */}
    <path
      d="M130 96 L 62 224 L 198 224 Z"
      fill="var(--surface-2, var(--surface))"
      stroke="var(--ink-soft)"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />

    {/* Coluna medial (lado esquerdo do triângulo) */}
    <line x1="130" y1="96" x2="62" y2="224" stroke="var(--teal)" strokeWidth="2.6" />
    {/* Coluna lateral (lado direito) */}
    <line x1="130" y1="96" x2="198" y2="224" stroke="var(--teal)" strokeWidth="2.6" />

    {/* Bloco articular na base — tróclea + capítulo */}
    <ellipse cx="112" cy="224" rx="26" ry="16" {...boneStyle} fill="var(--surface-2, var(--surface))" />
    <circle cx="170" cy="224" r="14" {...boneStyle} fill="var(--surface-2, var(--surface))" />

    {/* Vazio da fossa do olécrano (o "vão" entre as colunas) */}
    <path d="M118 130 C 112 160, 116 186, 128 202 C 140 186, 146 160, 142 130 Z" fill="none" stroke="var(--line-strong)" strokeWidth="1.2" strokeDasharray="4 3" />

    <text x="130" y="10" {...label} textAnchor="middle">Diáfise</text>
    <text x="70" y="150" {...label} textAnchor="end" fill="var(--teal)">coluna medial</text>
    <text x="192" y="150" {...label} textAnchor="start" fill="var(--teal)">coluna lateral</text>
    <text x="130" y="170" {...label} textAnchor="middle">fossa do</text>
    <text x="130" y="183" {...label} textAnchor="middle">olécrano</text>
    <text x="104" y="250" {...label} textAnchor="middle">tróclea</text>
    <text x="176" y="250" {...label} textAnchor="middle">capítulo</text>
    <text x="130" y="272" {...label} textAnchor="middle" fontFamily="var(--font-mono, monospace)">
      estabilizar ambas as colunas + bloco articular
    </text>
  </svg>
);

/* ---------------------------------------------------------------------------
   3) AO/OTA 13 — variants "A" (extra-articular), "B" (articular parcial),
   "C" (articular completa, dissocia o bloco articular das colunas). Clicável.
--------------------------------------------------------------------------- */
export const AoTreze: FC<FigureProps> = ({ className, title, variant }) => {
  const v = (variant ?? "A").toUpperCase();
  const map: Record<string, { name: string; desc: string }> = {
    A: { name: "13-A", desc: "Extra-articular (supracondiliana)" },
    B: { name: "13-B", desc: "Articular parcial (uma coluna/côndilo)" },
    C: { name: "13-C", desc: "Articular completa (bicolunar)" },
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
      <title>{title ?? `AO/OTA 13 — ${cfg.name} (${cfg.desc})`}</title>

      {/* Úmero distal genérico (vista posterior) */}
      <path {...boneStyle} d="M116 14 C 112 56, 112 104, 114 144 L 146 144 C 148 104, 148 56, 144 14 Z" />
      <path {...boneStyle} d="M114 142 C 104 164, 88 186, 84 206 C 80 222, 88 238, 104 240 L 118 176 Z" />
      <path {...boneStyle} d="M146 142 C 156 164, 172 186, 176 206 C 180 222, 172 238, 156 240 L 142 176 Z" />
      <path
        {...boneStyle}
        fill="var(--surface-2, var(--surface))"
        d="M104 214 C 96 222, 96 246, 108 256 C 122 268, 160 268, 172 256 C 182 246, 180 222, 170 214 Z"
      />
      {/* sulco troclear / limite tróclea-capítulo */}
      <path d="M148 214 C 146 232, 146 248, 148 262" fill="none" stroke="var(--line-strong)" strokeWidth="1" strokeDasharray="3 3" />

      {/* Traço(s) de fratura conforme o tipo */}
      <g className="fx-line" stroke="var(--cortical)" strokeWidth="2.6" fill="none" strokeLinecap="round">
        {v === "A" && (
          // supracondiliana transversa, acima do bloco articular (poupa a articulação)
          <path d="M88 190 C 112 200, 150 200, 172 190" />
        )}
        {v === "B" && (
          // traço oblíquo que destaca uma coluna/côndilo, entrando na articulação
          <path d="M150 150 C 154 180, 156 206, 150 236" />
        )}
        {v === "C" && (
          <>
            {/* supracondiliana bicolunar */}
            <path d="M88 190 C 112 200, 150 200, 172 190" />
            {/* + traço intercondilar vertical (dissocia tróclea/capítulo) */}
            <path d="M130 200 L 130 262" />
          </>
        )}
      </g>

      <text x="130" y="10" {...label} textAnchor="middle">Úmero distal (posterior)</text>
      <text x="130" y="296" textAnchor="middle" {...mono}>{cfg.name}</text>
      <text x="130" y="282" textAnchor="middle" {...label}>{cfg.desc}</text>
    </svg>
  );
};

/* ---------------------------------------------------------------------------
   4) Via posterior com osteotomia do olécrano (chevron ápice-distal) —
   rebate o aparelho extensor e expõe o bloco articular.
--------------------------------------------------------------------------- */
export const ViaOlecrano: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 260 320"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Via posterior com osteotomia do olécrano (chevron) — exposição articular"}</title>

    {/* Úmero distal (posterior) */}
    <path {...boneStyle} d="M116 12 C 112 52, 112 96, 114 132 L 146 132 C 148 96, 148 52, 144 12 Z" />
    <path {...boneStyle} d="M114 130 C 104 152, 88 172, 84 192 C 80 208, 88 224, 104 226 L 118 164 Z" />
    <path {...boneStyle} d="M146 130 C 156 152, 172 172, 176 192 C 180 208, 172 224, 156 226 L 142 164 Z" />
    <path
      {...boneStyle}
      fill="var(--surface-2, var(--surface))"
      d="M104 200 C 96 208, 96 232, 108 242 C 122 254, 158 254, 170 242 C 180 232, 178 208, 168 200 Z"
    />

    {/* Ulna proximal com olécrano */}
    <path {...boneStyle} d="M112 250 C 106 268, 108 292, 118 308 L 150 308 C 158 292, 158 268, 150 250 C 140 244, 122 244, 112 250 Z" />

    {/* Osteotomia em chevron (ápice distal) do olécrano */}
    <g className="fx-line" stroke="var(--cortical)" strokeWidth="2.6" fill="none" strokeLinecap="round">
      <path d="M116 262 L 132 280 L 148 262" />
    </g>

    {/* Fragmento do olécrano refletido proximalmente (tríceps) */}
    <path
      d="M92 300 C 78 288, 74 270, 84 258"
      fill="none"
      stroke="var(--teal)"
      strokeWidth="2.4"
      strokeLinecap="round"
      markerEnd="url(#fud-olec-arrow)"
    />
    <defs>
      <marker id="fud-olec-arrow" markerWidth="9" markerHeight="9" refX="4" refY="4" orient="auto">
        <path d="M0 0 L8 4 L0 8 Z" fill="var(--teal)" />
      </marker>
    </defs>

    {/* Incisão posterior mediana */}
    <line x1="200" y1="30" x2="200" y2="300" stroke="var(--teal)" strokeWidth="2.2" strokeDasharray="2 6" strokeLinecap="round" />

    <text x="130" y="8" {...label} textAnchor="middle">Úmero distal (posterior)</text>
    <text x="205" y="60" {...label} textAnchor="start" fill="var(--teal)">incisão</text>
    <text x="205" y="73" {...label} textAnchor="start" fill="var(--teal)">posterior</text>
    <text x="158" y="286" {...label} textAnchor="start" fill="var(--cortical)">osteotomia</text>
    <text x="158" y="299" {...label} textAnchor="start" fill="var(--cortical)">em chevron</text>
    <text x="60" y="272" {...label} textAnchor="middle" fill="var(--teal)">tríceps +</text>
    <text x="60" y="285" {...label} textAnchor="middle" fill="var(--teal)">fragmento</text>
    <text x="130" y="318" {...label} textAnchor="middle" fontFamily="var(--font-mono, monospace)">
      ápice distal · reflete o aparelho extensor
    </text>
  </svg>
);

/* ---------------------------------------------------------------------------
   5) Dupla placa — variants "paralela" (medial + lateral, no plano coronal)
   e "perpendicular"/"ortogonal" (posterolateral + medial, planos a 90°).
--------------------------------------------------------------------------- */
export const DuplaPlaca: FC<FigureProps> = ({ className, title, variant }) => {
  const paralela = (variant ?? "paralela").toLowerCase().startsWith("paral");
  return (
    <svg
      viewBox="0 0 260 300"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>
        {title ??
          (paralela
            ? "Dupla placa paralela — placas medial e lateral no plano coronal"
            : "Dupla placa perpendicular (ortogonal) — placa posterolateral + medial a 90°")}
      </title>

      {/* Úmero distal (posterior) */}
      <path {...boneStyle} d="M116 12 C 112 52, 112 100, 114 140 L 146 140 C 148 100, 148 52, 144 12 Z" />
      <path {...boneStyle} d="M114 138 C 104 160, 88 182, 84 202 C 80 218, 88 234, 104 236 L 118 172 Z" />
      <path {...boneStyle} d="M146 138 C 156 160, 172 182, 176 202 C 180 218, 172 234, 156 236 L 142 172 Z" />
      <path
        {...boneStyle}
        fill="var(--surface-2, var(--surface))"
        d="M104 210 C 96 218, 96 242, 108 252 C 122 264, 158 264, 170 252 C 180 242, 178 218, 168 210 Z"
      />
      {/* traço bicolunar reduzido */}
      <g className="fx-line" stroke="var(--cortical)" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeDasharray="3 3">
        <path d="M88 188 C 112 198, 150 198, 172 188" />
        <path d="M130 200 L 130 250" />
      </g>

      {paralela ? (
        <>
          {/* Placa medial (coluna medial) e lateral (coluna lateral) — ambas coronais */}
          <rect x="78" y="150" width="11" height="86" rx="5" fill="var(--teal-tint, var(--surface-2, var(--surface)))" stroke="var(--teal)" strokeWidth="1.8" />
          <rect x="171" y="150" width="11" height="86" rx="5" fill="var(--teal-tint, var(--surface-2, var(--surface)))" stroke="var(--teal)" strokeWidth="1.8" />
          {/* parafusos transcolunares longos, paralelos, cruzando a articulação */}
          <g stroke="var(--teal)" strokeWidth="2.2" strokeLinecap="round">
            <line x1="84" y1="222" x2="176" y2="222" />
            <line x1="84" y1="234" x2="176" y2="234" />
          </g>
          <text x="150" y="146" {...label} textAnchor="middle" fill="var(--teal)">placas paralelas (coronais)</text>
          <text x="130" y="286" {...label} textAnchor="middle" fontFamily="var(--font-mono, monospace)">
            parafusos longos transcolunares — máxima estabilidade articular
          </text>
        </>
      ) : (
        <>
          {/* Placa medial (coronal) + placa posterolateral (dorsal, representada mais central/posterior) */}
          <rect x="78" y="150" width="11" height="86" rx="5" fill="var(--teal-tint, var(--surface-2, var(--surface)))" stroke="var(--teal)" strokeWidth="1.8" />
          {/* placa posterior sobre a coluna lateral (perpendicular à medial) */}
          <rect x="140" y="150" width="11" height="82" rx="5" fill="var(--teal-tint, var(--surface-2, var(--surface)))" stroke="var(--teal)" strokeWidth="1.8" />
          {/* parafusos medial (transversais) e posterolateral (ântero-posteriores, curtos) */}
          <g stroke="var(--teal)" strokeWidth="2.2" strokeLinecap="round">
            <line x1="84" y1="224" x2="128" y2="224" />
            <line x1="145" y1="216" x2="118" y2="236" />
            <line x1="145" y1="228" x2="120" y2="246" />
          </g>
          <text x="150" y="146" {...label} textAnchor="middle" fill="var(--teal)">medial + posterolateral (90°)</text>
          <text x="130" y="286" {...label} textAnchor="middle" fontFamily="var(--font-mono, monospace)">
            parafusos em planos ortogonais — melhor captura do capítulo posterior
          </text>
        </>
      )}
    </svg>
  );
};

/* ---------------------------------------------------------------------------
   6) Passo — reconstrução articular: reduzir a tróclea/capítulo e converter
   a fratura bicolunar (C) em supracondiliana antes de fixar as colunas.
--------------------------------------------------------------------------- */
export const StepArticular: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 260 280"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Reconstrução do bloco articular — parafuso interfragmentário na tróclea"}</title>

    {/* Colunas (parciais) */}
    <path {...boneStyle} d="M60 20 C 66 60, 78 96, 92 122 L 112 110 C 100 84, 88 50, 84 18 Z" />
    <path {...boneStyle} d="M200 20 C 194 60, 182 96, 168 122 L 148 110 C 160 84, 172 50, 176 18 Z" />

    {/* Bloco articular reconstruído (tróclea + capítulo) */}
    <path
      {...boneStyle}
      fill="var(--surface-2, var(--surface))"
      d="M92 120 C 82 130, 82 158, 96 170 C 118 186, 160 184, 176 168 C 188 156, 186 130, 174 120 C 150 108, 116 108, 92 120 Z"
    />
    {/* sulco troclear central (linha de junção reduzida) */}
    <path d="M129 116 C 127 138, 127 156, 129 174" fill="none" stroke="var(--cortical)" strokeWidth="1.6" strokeDasharray="3 3" className="fx-line" />

    {/* Parafuso interfragmentário de compressão através da tróclea */}
    <g stroke="var(--teal)" strokeWidth="2.6" strokeLinecap="round">
      <line x1="96" y1="150" x2="176" y2="146" />
    </g>
    <circle cx="96" cy="150" r="3.4" fill="var(--teal)" />

    {/* fios de Kirschner provisórios */}
    <g stroke="var(--amber)" strokeWidth="1.6" strokeLinecap="round">
      <line x1="108" y1="128" x2="168" y2="132" strokeDasharray="4 3" />
    </g>

    <text x="70" y="60" {...label} textAnchor="middle">coluna medial</text>
    <text x="190" y="60" {...label} textAnchor="middle">coluna lateral</text>
    <text x="130" y="200" {...label} textAnchor="middle" fill="var(--teal)">parafuso interfragmentário</text>
    <text x="130" y="228" {...label} textAnchor="middle">tróclea reconstruída (congruência)</text>
    <text x="130" y="256" {...label} textAnchor="middle" fontFamily="var(--font-mono, monospace)">
      converter C em supracondiliana antes de fixar as colunas
    </text>
  </svg>
);

/* ---------------------------------------------------------------------------
   7) Passo — nervo ulnar: identificação, dissecção e proteção; decisão de
   deixar in situ (decomprimido) versus transposição anterior.
--------------------------------------------------------------------------- */
export const StepNervoUlnar: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 260 280"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Nervo ulnar — identificação e proteção no túnel cubital (in situ vs transposição)"}</title>

    {/* Úmero distal / epicôndilo medial (posteromedial) */}
    <path {...boneStyle} d="M150 16 C 146 56, 144 96, 148 130 C 152 152, 168 164, 186 158 L 196 96 C 190 66, 176 36, 172 14 Z" />
    {/* epicôndilo medial */}
    <circle cx="150" cy="150" r="12" {...boneStyle} />

    {/* Túnel cubital — sulco posterior ao epicôndilo medial */}
    <path d="M126 140 C 136 150, 140 162, 138 176" fill="none" stroke="var(--line-strong)" strokeWidth="1" strokeDasharray="3 3" />

    {/* Nervo ulnar in situ (posterior ao epicôndilo) */}
    <path
      d="M128 30 C 118 70, 108 106, 104 138 C 100 158, 108 180, 124 194 C 138 206, 150 224, 152 244"
      fill="none"
      stroke="var(--teal)"
      strokeWidth="2.8"
      strokeLinecap="round"
    />
    {/* Alça de transposição anterior (posição alternativa, anterior ao epicôndilo) */}
    <path
      d="M104 138 C 84 150, 72 168, 78 188 C 84 206, 104 210, 122 202"
      fill="none"
      stroke="var(--teal)"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeDasharray="5 4"
    />

    <text x="176" y="176" {...label} textAnchor="start">epicôndilo medial</text>
    <text x="118" y="24" {...label} textAnchor="middle" fill="var(--teal)">nervo ulnar</text>
    <text x="60" y="200" {...label} textAnchor="middle" fill="var(--teal)">transposição</text>
    <text x="60" y="213" {...label} textAnchor="middle" fill="var(--teal)">anterior (alt.)</text>
    <text x="130" y="256" {...label} textAnchor="middle" fontFamily="var(--font-mono, monospace)">
      isolar e proteger antes de reduzir · evitar tração/isquemia
    </text>
    <text x="130" y="272" {...label} textAnchor="middle">transpor se irritado por implante medial</text>
  </svg>
);

/* ---------------------------------------------------------------------------
   8) Artroplastia total de cotovelo (ATC semiconstrita) no idoso — solução
   quando o bloco articular não é reconstrutível.
--------------------------------------------------------------------------- */
export const Atc: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 260 320"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Artroplastia total de cotovelo semiconstrita — componentes umeral e ulnar acoplados"}</title>

    {/* Úmero (diáfise) */}
    <path {...boneStyle} d="M114 12 C 110 48, 110 88, 112 118 L 146 118 C 148 88, 148 48, 144 12 Z" />
    {/* metáfise distal (osso remanescente, colunas curtas) */}
    <path {...boneStyle} d="M112 116 C 102 134, 92 148, 96 162 L 164 162 C 168 148, 158 134, 146 116 Z" />

    {/* Ulna proximal */}
    <path {...boneStyle} d="M108 220 C 104 250, 106 288, 116 306 L 150 306 C 158 288, 158 250, 152 220 Z" />

    {/* Haste umeral do implante (intramedular) */}
    <rect x="123" y="30" width="12" height="120" rx="6" fill="var(--teal-tint, var(--surface-2, var(--surface)))" stroke="var(--teal)" strokeWidth="1.8" />
    {/* Haste ulnar do implante */}
    <rect x="123" y="190" width="12" height="106" rx="6" fill="var(--teal-tint, var(--surface-2, var(--surface)))" stroke="var(--teal)" strokeWidth="1.8" />

    {/* Dobradiça semiconstrita (acoplamento umeral-ulnar) */}
    <rect x="112" y="158" width="34" height="34" rx="6" fill="var(--teal-tint, var(--surface-2, var(--surface)))" stroke="var(--teal)" strokeWidth="2" />
    <circle cx="129" cy="175" r="6" fill="none" stroke="var(--teal)" strokeWidth="2" />
    {/* pino do acoplamento */}
    <line x1="112" y1="175" x2="146" y2="175" stroke="var(--teal)" strokeWidth="2.2" />

    <text x="130" y="8" {...label} textAnchor="middle">Úmero</text>
    <text x="182" y="80" {...label} textAnchor="start" fill="var(--teal)">componente</text>
    <text x="182" y="93" {...label} textAnchor="start" fill="var(--teal)">umeral</text>
    <text x="182" y="180" {...label} textAnchor="start" fill="var(--teal)">dobradiça</text>
    <text x="182" y="193" {...label} textAnchor="start" fill="var(--teal)">semiconstrita</text>
    <text x="182" y="262" {...label} textAnchor="start" fill="var(--teal)">componente ulnar</text>
    <text x="60" y="270" {...label} textAnchor="middle">ulna</text>
    <text x="130" y="318" {...label} textAnchor="middle" fontFamily="var(--font-mono, monospace)">
      idoso · bloco articular não reconstrutível
    </text>
  </svg>
);

/**
 * Registro de figuras — chave = id prefixado por "fratura-umero-distal:".
 * O conteúdo referencia exatamente estes ids (e variants).
 */
export const figures: Record<string, FC<FigureProps>> = {
  "fratura-umero-distal:anatomia": Anatomia,
  "fratura-umero-distal:colunas": Colunas,
  "fratura-umero-distal:ao-13": AoTreze,
  "fratura-umero-distal:via-olecrano": ViaOlecrano,
  "fratura-umero-distal:dupla-placa": DuplaPlaca,
  "fratura-umero-distal:step-articular": StepArticular,
  "fratura-umero-distal:step-nervo-ulnar": StepNervoUlnar,
  "fratura-umero-distal:atc": Atc,
};
