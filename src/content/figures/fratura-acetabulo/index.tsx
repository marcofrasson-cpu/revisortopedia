import type { FC } from "react";
import type { FigureProps } from "../../../types/topic";

/* ============================================================================
   Figuras — Fratura do acetábulo (line-art esquemático, 2 tons, sem copyright).
   Convenções de cor (somente via CSS vars):
     osso .......... stroke var(--ink-soft)  fill var(--surface)
     2º plano ...... fill var(--surface-2, var(--surface))
     partes moles/
       implante .... stroke var(--teal)
     traço de
       fratura ..... stroke var(--cortical) + className "fx-line"
     medidas/eixos . stroke/fill var(--amber)
     rótulos ....... <text> fontSize 11 fill var(--muted)
   Todo id é prefixado por "fratura-acetabulo:" no registro no fim do arquivo.
   ========================================================================== */

const bone = {
  fill: "var(--surface)",
  stroke: "var(--ink-soft)",
  strokeWidth: 1.6,
  strokeLinejoin: "round" as const,
};

const bone2 = {
  fill: "var(--surface-2, var(--surface))",
  stroke: "var(--ink-soft)",
  strokeWidth: 1.4,
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

const soft = {
  fill: "none",
  stroke: "var(--teal)",
  strokeWidth: 2.2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const fx = {
  fill: "none",
  stroke: "var(--cortical)",
  strokeWidth: 3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/* ---------------------------------------------------------------------------
   Contorno esquemático do osso ilíaco (vista lateral): crista/asa ilíaca em
   cima, acetábulo central, ísquio (post-inferior) e púbis (ântero-inferior).
   Reutilizado como base pelas figuras de classificação.
   ------------------------------------------------------------------------- */
function innominatePath() {
  // Asa do ílio -> coluna anterior (púbis) e coluna posterior (ísquio).
  return "M120 30 C 78 34, 46 58, 42 104 C 40 132, 52 150, 74 158 \
          L 96 168 C 84 182, 78 206, 92 224 C 104 240, 128 246, 150 240 \
          L 176 250 C 196 256, 214 246, 218 228 C 222 210, 212 196, 196 190 \
          L 188 172 C 210 168, 226 150, 224 126 L 240 118 C 256 112, 262 96, 254 82 \
          C 246 68, 226 66, 212 74 L 196 82 C 190 60, 168 40, 140 32 Z";
}

/** Cúpula/teto + fossa acetabular como um recorte hemisférico central. */
function AcetabulumSocket({ cx = 150, cy = 150, r = 40 }: { cx?: number; cy?: number; r?: number }) {
  return (
    <>
      <circle cx={cx} cy={cy} r={r} {...bone2} />
      <path
        d={`M${cx - r + 6} ${cy} A ${r - 6} ${r - 6} 0 0 1 ${cx + r - 6} ${cy}`}
        fill="none"
        stroke="var(--ink-soft)"
        strokeWidth="1.2"
        strokeDasharray="3 3"
      />
      {/* cabeça femoral (referência, tracejada em teal) */}
      <circle cx={cx} cy={cy + 6} r={r - 12} fill="none" stroke="var(--teal)" strokeWidth="1.2" strokeDasharray="4 4" />
    </>
  );
}

/* =========================================================================
   1) Anatomia — colunas, paredes, teto, plano quadrilátero, "Y invertido".
   ========================================================================= */
const Anatomia: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 300 280"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Anatomia do acetábulo — colunas anterior e posterior"}</title>

    <path {...bone} d={innominatePath()} />

    {/* Plano quadrilátero (parede medial da pelve verdadeira) em 2º plano */}
    <path
      d="M120 150 L 176 156 L 168 210 L 116 200 Z"
      fill="var(--surface-2, var(--surface))"
      stroke="var(--ink-soft)"
      strokeWidth="1"
      strokeDasharray="4 3"
      opacity="0.9"
    />
    <text x="128" y="184" {...label}>plano quadrilátero</text>

    {/* Socket acetabular */}
    <AcetabulumSocket cx={150} cy={148} r={38} />

    {/* "Y invertido" de Judet: eixo das duas colunas */}
    <g stroke="var(--amber)" strokeWidth="2" fill="none" strokeLinecap="round">
      <path d="M150 60 L 150 118" />
      <path d="M150 118 L 108 208" />
      <path d="M150 118 L 205 214" />
    </g>
    <circle cx="150" cy="118" r="3" fill="var(--amber)" />

    {/* Rótulos das colunas / paredes / teto */}
    <text x="150" y="52" {...label} textAnchor="middle">teto (dome)</text>
    <text x="212" y="150" {...label}>coluna post.</text>
    <text x="60" y="118" {...label}>coluna ant.</text>
    <text x="196" y="120" {...label} textAnchor="end" fill="var(--teal)">parede post.</text>
    <text x="104" y="140" {...label} fill="var(--teal)">parede ant.</text>

    {/* paredes destacadas em teal */}
    <path d="M186 128 C 196 140, 196 158, 188 170" {...soft} />
    <path d="M112 130 C 104 142, 104 158, 112 168" {...soft} />

    <text x="150" y="268" {...mono} textAnchor="middle">2 colunas · 2 paredes · teto</text>
  </svg>
);

/* =========================================================================
   2) Linhas radiográficas na incidência AP (6 linhas de Judet-Letournel).
   ========================================================================= */
const LinhasRadiograficas: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 300 260"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Seis linhas radiográficas da incidência AP do acetábulo"}</title>

    <path {...bone} d={innominatePath()} />
    <AcetabulumSocket cx={150} cy={148} r={38} />

    {/* 1. Linha iliopectínea (borda da coluna anterior) — teal */}
    <path d="M60 116 C 92 150, 132 166, 176 176 C 200 182, 218 190, 228 206" stroke="var(--teal)" strokeWidth="2.4" fill="none" strokeLinecap="round" />
    {/* 2. Linha ilioisquiática (coluna posterior) — teal escuro tracejado */}
    <path d="M150 66 C 156 120, 160 176, 150 232" stroke="var(--teal)" strokeWidth="2.2" fill="none" strokeDasharray="6 4" strokeLinecap="round" />
    {/* 3. Lágrima (teardrop) — amber */}
    <path d="M132 158 C 126 172, 128 190, 136 198 C 142 190, 144 172, 138 158 Z" fill="none" stroke="var(--amber)" strokeWidth="2" />
    {/* 4. Teto (dome/sourcil) — amber */}
    <path d="M118 120 C 134 110, 166 110, 184 120" stroke="var(--amber)" strokeWidth="2.2" fill="none" strokeLinecap="round" />
    {/* 5. Rima anterior — ink-soft fino */}
    <path d="M114 132 C 108 150, 110 168, 118 182" stroke="var(--ink-soft)" strokeWidth="1.4" fill="none" strokeDasharray="3 3" />
    {/* 6. Rima posterior — ink-soft fino */}
    <path d="M188 130 C 196 150, 194 170, 184 186" stroke="var(--ink-soft)" strokeWidth="1.6" fill="none" />

    {/* Legenda numerada */}
    <g>
      {[
        ["1", "iliopectínea (col. ant.)", "var(--teal)"],
        ["2", "ilioisquiática (col. post.)", "var(--teal)"],
        ["3", "lágrima (teardrop)", "var(--amber)"],
        ["4", "teto (sourcil)", "var(--amber)"],
        ["5", "rima anterior", "var(--ink-soft)"],
        ["6", "rima posterior", "var(--ink-soft)"],
      ].map(([n, txt, c], i) => (
        <g key={n} transform={`translate(6 ${18 + i * 17})`}>
          <circle cx="6" cy="-4" r="7" fill="none" stroke={c} strokeWidth="1.6" />
          <text x="6" y="-1" textAnchor="middle" fontSize="9" fontFamily="var(--font-mono, monospace)" fill={c}>{n}</text>
          <text x="18" y="0" {...label}>{txt}</text>
        </g>
      ))}
    </g>
  </svg>
);

/* =========================================================================
   Base compartilhada das figuras de classificação: contorno + socket.
   ========================================================================= */
function ClassBase() {
  return (
    <>
      <path {...bone} d={innominatePath()} />
      <AcetabulumSocket cx={150} cy={148} r={38} />
    </>
  );
}

/* =========================================================================
   3) Judet-Letournel — cinco fraturas ELEMENTARES (variants clicáveis).
   ========================================================================= */
const JudetElementares: FC<FigureProps> = ({ className, title, variant }) => {
  const v = variant ?? "transversa";
  const legend: Record<string, string> = {
    "parede-posterior": "Parede posterior",
    "coluna-posterior": "Coluna posterior",
    "parede-anterior": "Parede anterior",
    "coluna-anterior": "Coluna anterior",
    transversa: "Transversa",
  };
  return (
    <svg
      viewBox="0 0 300 280"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `Fratura elementar — ${legend[v] ?? v}`}</title>
      <ClassBase />

      <g className="fx-line">
        {v === "parede-posterior" && (
          <>
            {/* fragmento da rima/parede posterior destacado */}
            <path d="M186 120 C 200 138, 200 162, 188 182 L 176 176 C 186 160, 186 140, 176 124 Z" fill="var(--cortical)" opacity="0.16" stroke="var(--cortical)" strokeWidth="2.4" />
            <path d="M176 124 L 188 120 M176 176 L 188 182" {...fx} />
          </>
        )}
        {v === "coluna-posterior" && (
          // traço da incisura isquiática até o forame obturador, atravessando a fossa
          <path d="M172 96 C 168 120, 150 150, 138 176 C 130 194, 128 214, 132 232" {...fx} />
        )}
        {v === "parede-anterior" && (
          <>
            <path d="M112 126 C 100 142, 100 162, 110 180 L 122 174 C 114 160, 114 142, 122 130 Z" fill="var(--cortical)" opacity="0.16" stroke="var(--cortical)" strokeWidth="2.4" />
            <path d="M122 130 L 112 126 M122 174 L 110 180" {...fx} />
          </>
        )}
        {v === "coluna-anterior" && (
          // traço da crista/asa ilíaca anterior descendo ao ramo púbico
          <path d="M132 44 C 120 78, 116 118, 120 150 C 124 178, 150 200, 176 208" {...fx} />
        )}
        {v === "transversa" && (
          // linha horizontal separando ílio+teto (acima) das duas colunas (abaixo)
          <path d="M64 132 C 108 150, 150 156, 196 150 C 214 148, 226 140, 236 128" {...fx} />
        )}
      </g>

      {/* rótulo do tipo */}
      <text x="150" y="262" {...mono} textAnchor="middle">{legend[v] ?? v}</text>
      <text x="150" y="276" {...label} textAnchor="middle">elementar (1 de 5)</text>
    </svg>
  );
};

/* =========================================================================
   4) Judet-Letournel — cinco fraturas ASSOCIADAS (variants clicáveis).
   ========================================================================= */
const JudetAssociadas: FC<FigureProps> = ({ className, title, variant }) => {
  const v = variant ?? "duas-colunas";
  const legend: Record<string, string> = {
    "coluna-post-parede-post": "Coluna post. + parede post.",
    "transversa-parede-post": "Transversa + parede post.",
    "t": "Em T",
    "coluna-ant-hemitransversa-post": "Coluna ant. + hemitransversa post.",
    "duas-colunas": "Ambas as colunas",
  };
  return (
    <svg
      viewBox="0 0 300 280"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `Fratura associada — ${legend[v] ?? v}`}</title>
      <ClassBase />

      <g className="fx-line">
        {v === "coluna-post-parede-post" && (
          <>
            <path d="M172 96 C 168 120, 150 150, 138 176 C 130 194, 128 214, 132 232" {...fx} />
            <path d="M186 120 C 200 138, 200 162, 188 182 L 176 176 C 186 160, 186 140, 176 124 Z" fill="var(--cortical)" opacity="0.16" stroke="var(--cortical)" strokeWidth="2.2" />
          </>
        )}
        {v === "transversa-parede-post" && (
          <>
            <path d="M64 132 C 108 150, 150 156, 196 150 C 214 148, 226 140, 236 128" {...fx} />
            <path d="M186 120 C 200 138, 200 162, 188 182 L 176 176 C 186 160, 186 140, 176 124 Z" fill="var(--cortical)" opacity="0.16" stroke="var(--cortical)" strokeWidth="2.2" />
          </>
        )}
        {v === "t" && (
          <>
            {/* braço transverso */}
            <path d="M64 132 C 108 150, 150 154, 196 150 C 214 148, 226 140, 236 128" {...fx} />
            {/* haste vertical descendo pelo plano quadrilátero ao forame obturador */}
            <path d="M150 154 C 148 186, 140 214, 128 236" {...fx} />
          </>
        )}
        {v === "coluna-ant-hemitransversa-post" && (
          <>
            {/* coluna anterior (traço alto e completo) */}
            <path d="M132 44 C 120 78, 116 118, 120 150 C 124 178, 150 200, 176 208" {...fx} />
            {/* hemitransversa posterior (só a metade posterior de uma transversa) */}
            <path d="M150 150 C 176 150, 200 146, 224 132" {...fx} />
          </>
        )}
        {v === "duas-colunas" && (
          <>
            {/* nenhum fragmento articular fica ligado ao esqueleto axial */}
            <path d="M132 44 C 120 78, 116 118, 120 150 C 124 178, 150 200, 176 208" {...fx} />
            <path d="M168 92 C 164 118, 150 150, 140 178 C 132 198, 130 216, 134 234" {...fx} />
            {/* "sinal do esporão" (spur sign) */}
            <path d="M150 96 L 168 92" stroke="var(--amber)" strokeWidth="2.4" strokeLinecap="round" />
            <text x="176" y="88" {...label} fill="var(--amber)">spur sign</text>
          </>
        )}
      </g>

      <text x="150" y="262" {...mono} textAnchor="middle">{legend[v] ?? v}</text>
      <text x="150" y="276" {...label} textAnchor="middle">associada (1 de 5)</text>
    </svg>
  );
};

/* =========================================================================
   5) Via Kocher-Langenbeck (acesso posterior).
   ========================================================================= */
const ViaKocherLangenbeck: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 300 280"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Via de acesso posterior de Kocher-Langenbeck"}</title>

    {/* Pelve posterior + fêmur proximal esquemáticos */}
    <path {...bone} d="M70 40 C 44 60, 40 110, 60 140 C 76 164, 110 172, 140 168 C 172 164, 196 176, 206 200 C 214 220, 206 244, 186 252 L 120 252 C 96 250, 80 232, 78 208 C 62 200, 48 182, 48 156 C 40 116, 44 66, 70 40 Z" />
    {/* trocânter maior + fêmur */}
    <path {...bone2} d="M196 150 C 224 150, 244 168, 244 196 L 250 262 L 226 262 L 218 210 C 206 208, 196 196, 196 182 Z" />
    <circle cx="150" cy="128" r="30" {...bone2} />
    <circle cx="150" cy="128" r="18" fill="none" stroke="var(--teal)" strokeWidth="1.2" strokeDasharray="4 4" />

    {/* Incisão de Kocher-Langenbeck (curva do PSIS ao trocânter e à diáfise) */}
    <path d="M92 52 C 120 66, 150 96, 190 150 C 208 176, 214 216, 214 252" stroke="var(--amber)" strokeWidth="2.4" strokeDasharray="7 5" fill="none" strokeLinecap="round" />
    <text x="96" y="46" {...label} fill="var(--amber)">incisão</text>

    {/* Nervo isquiático (em risco) */}
    <path d="M132 96 C 150 130, 168 172, 184 232" {...soft} stroke="var(--teal)" strokeWidth="2.6" />
    <text x="188" y="236" {...label} fill="var(--teal)">n. isquiático</text>

    {/* rotadores curtos seccionados (traço em teal fino) */}
    <g stroke="var(--teal)" strokeWidth="1.6" fill="none" strokeLinecap="round">
      <line x1="176" y1="120" x2="196" y2="118" />
      <line x1="178" y1="136" x2="198" y2="136" />
      <line x1="176" y1="152" x2="196" y2="156" />
    </g>
    <text x="150" y="30" {...label} textAnchor="middle">gl. máximo (dividido)</text>

    <text x="150" y="274" {...mono} textAnchor="middle">Kocher-Langenbeck · coluna/parede post.</text>
  </svg>
);

/* =========================================================================
   6) Via ilioinguinal (acesso anterior — três janelas).
   ========================================================================= */
const ViaIlioinguinal: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 320 260"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Via ilioinguinal anterior — três janelas"}</title>

    {/* Hemipelve anterior */}
    <path {...bone} d="M40 60 C 60 40, 120 36, 170 46 C 214 54, 250 52, 286 40 C 300 52, 296 78, 276 88 L 208 96 C 200 118, 196 146, 200 168 C 190 186, 168 196, 148 190 L 120 196 C 100 188, 92 166, 96 146 C 74 140, 52 122, 46 96 C 40 84, 38 72, 40 60 Z" />
    <AcetabulumSocket cx={150} cy={130} r={30} />

    {/* Incisão ao longo da crista ilíaca até a sínfise */}
    <path d="M56 66 C 110 54, 170 58, 226 66 C 252 70, 268 78, 276 92" stroke="var(--amber)" strokeWidth="2.4" strokeDasharray="7 5" fill="none" strokeLinecap="round" />

    {/* Janelas (1 lateral, 2 media, 3 medial) */}
    <g stroke="var(--ink-soft)" strokeWidth="1.2" strokeDasharray="3 3" fill="none">
      <line x1="120" y1="70" x2="110" y2="140" />
      <line x1="210" y1="76" x2="206" y2="150" />
    </g>
    <text x="78" y="112" {...mono}>1</text>
    <text x="160" y="88" {...mono}>2</text>
    <text x="250" y="100" {...mono}>3</text>

    {/* Feixe: n. femoral / iliopsoas (teal) e vasos ilíacos externos (teal) */}
    <path d="M150 60 C 152 96, 150 132, 156 176" {...soft} />
    <path d="M186 62 C 190 100, 190 140, 186 182" stroke="var(--teal)" strokeWidth="2.2" strokeDasharray="5 4" fill="none" strokeLinecap="round" />
    <text x="150" y="200" {...label} fill="var(--teal)">iliopsoas / n. femoral</text>
    <text x="196" y="196" {...label} fill="var(--teal)">vasos ilíacos ext.</text>

    {/* Legenda das janelas */}
    <g>
      <text x="8" y="230" {...label}>1 fossa ilíaca (lateral)</text>
      <text x="8" y="245" {...label}>2 entre iliopsoas/n.femoral e vasos</text>
      <text x="180" y="245" {...label}>3 retropúbica (medial / Retzius)</text>
    </g>
  </svg>
);

/* =========================================================================
   7) Técnica — redução da coluna com clamp + parafuso interfragmentário.
   ========================================================================= */
const StepReducao: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 300 260"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Redução da coluna com pinça e parafuso interfragmentário"}</title>
    <ClassBase />

    {/* traço reduzido (quase fechado) */}
    <path d="M150 150 C 176 150, 200 146, 224 132" stroke="var(--cortical)" strokeWidth="2" strokeDasharray="4 3" fill="none" className="fx-line" />

    {/* Pinça de redução (Farabeuf / pointed) em teal */}
    <g {...soft} strokeWidth="2.6">
      <path d="M120 96 C 150 110, 190 112, 220 100" />
      <path d="M118 96 L 138 150" />
      <path d="M222 100 L 202 152" />
      <circle cx="138" cy="150" r="3.5" fill="var(--teal)" stroke="none" />
      <circle cx="202" cy="152" r="3.5" fill="var(--teal)" stroke="none" />
    </g>
    <text x="170" y="86" {...label} fill="var(--teal)" textAnchor="middle">pinça de redução</text>

    {/* Parafuso interfragmentário (lag) cruzando o traço */}
    <g stroke="var(--teal)" strokeWidth="2.6" strokeLinecap="round">
      <line x1="196" y1="140" x2="122" y2="168" />
      <circle cx="196" cy="140" r="4" fill="var(--teal)" stroke="none" />
      <g strokeWidth="1.2">
        <line x1="150" y1="158" x2="150" y2="164" />
        <line x1="140" y1="161" x2="140" y2="167" />
        <line x1="160" y1="155" x2="160" y2="161" />
      </g>
    </g>
    <text x="120" y="182" {...label} fill="var(--teal)">parafuso lag</text>

    <text x="150" y="252" {...mono} textAnchor="middle">reduzir → comprimir → estabilizar</text>
  </svg>
);

/* =========================================================================
   8) Técnica — placa de reconstrução moldada (coluna / brim pélvico).
   ========================================================================= */
const StepPlaca: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 300 260"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Placa de reconstrução moldada ao longo da coluna"}</title>
    <ClassBase />

    {/* Placa de reconstrução (série de furos) contornando a coluna posterior */}
    <g>
      <path d="M170 92 C 176 130, 168 172, 148 208" fill="none" stroke="var(--teal)" strokeWidth="8" strokeLinecap="round" opacity="0.9" />
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const t = i / 5;
        const x = 170 + Math.sin(t * 2.4) * 12 - t * 22;
        const y = 96 + t * 108;
        return <circle key={i} cx={x} cy={y} r="3.4" fill="var(--surface)" stroke="var(--teal)" strokeWidth="1.4" />;
      })}
    </g>
    {/* parafusos periarticulares (evitar articulação) */}
    <g stroke="var(--teal)" strokeWidth="2.2" strokeLinecap="round">
      <line x1="168" y1="120" x2="140" y2="128" />
      <line x1="156" y1="196" x2="130" y2="200" />
    </g>

    {/* placa do brim (coluna anterior) mais fina */}
    <path d="M78 116 C 112 146, 150 158, 190 160" fill="none" stroke="var(--teal)" strokeWidth="6" strokeDasharray="10 6" strokeLinecap="round" opacity="0.8" />
    <text x="78" y="108" {...label} fill="var(--teal)">placa do brim (col. ant.)</text>
    <text x="182" y="88" {...label} fill="var(--teal)">placa post.</text>

    {/* zona segura articular */}
    <path d="M124 150 A 30 30 0 0 1 176 150" fill="none" stroke="var(--amber)" strokeWidth="1.6" strokeDasharray="3 3" />
    <text x="150" y="252" {...mono} textAnchor="middle">parafusos extra-articulares</text>
  </svg>
);

/* =========================================================================
   9) Técnica — ORIF + artroplastia total aguda (fix-and-replace) no idoso.
   ========================================================================= */
const StepArtroplastia: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 300 280"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "ORIF + artroplastia total aguda (fix-and-replace)"}</title>
    <path {...bone} d={innominatePath()} />

    {/* placa/coluna posterior restaurando o contraforte */}
    <path d="M172 96 C 178 132, 172 172, 154 206" fill="none" stroke="var(--teal)" strokeWidth="6" strokeLinecap="round" opacity="0.85" />

    {/* componente acetabular (cup) hemisférico com parafusos */}
    <path d="M118 148 A 34 34 0 0 1 182 148" fill="var(--surface-2, var(--surface))" stroke="var(--teal)" strokeWidth="3" />
    <path d="M126 148 A 26 26 0 0 1 174 148" fill="none" stroke="var(--teal)" strokeWidth="1.4" strokeDasharray="3 3" />
    <g stroke="var(--teal)" strokeWidth="2.2" strokeLinecap="round">
      <line x1="150" y1="132" x2="150" y2="108" />
      <line x1="168" y1="138" x2="188" y2="120" />
      <circle cx="150" cy="108" r="3" fill="var(--teal)" stroke="none" />
      <circle cx="188" cy="120" r="3" fill="var(--teal)" stroke="none" />
    </g>
    <text x="150" y="100" {...label} fill="var(--teal)" textAnchor="middle">cup + parafusos</text>

    {/* cabeça protética + haste femoral */}
    <circle cx="150" cy="156" r="18" fill="var(--surface)" stroke="var(--teal)" strokeWidth="2.4" />
    <path d="M150 156 L 168 196 C 174 214, 176 244, 172 270 L 148 270 C 146 240, 148 212, 142 194 Z" fill="var(--surface-2, var(--surface))" stroke="var(--teal)" strokeWidth="2.4" />
    <text x="176" y="236" {...label} fill="var(--teal)">haste</text>

    {/* cerclagem / suporte da coluna anterior */}
    <path d="M108 168 C 130 186, 158 190, 184 182" fill="none" stroke="var(--teal)" strokeWidth="1.8" strokeDasharray="5 3" />

    <text x="150" y="264" {...mono} textAnchor="middle">estabilizar coluna → reconstrução</text>
  </svg>
);

/**
 * Registro de figuras deste tópico. Chave = id prefixado por "fratura-acetabulo:".
 * O integrador global agrega este objeto ao registro FIGURES.
 */
export const figures: Record<string, FC<FigureProps>> = {
  "fratura-acetabulo:anatomia": Anatomia,
  "fratura-acetabulo:linhas-radiograficas": LinhasRadiograficas,
  "fratura-acetabulo:judet-elementares": JudetElementares,
  "fratura-acetabulo:judet-associadas": JudetAssociadas,
  "fratura-acetabulo:via-kocher-langenbeck": ViaKocherLangenbeck,
  "fratura-acetabulo:via-ilioinguinal": ViaIlioinguinal,
  "fratura-acetabulo:step-reducao": StepReducao,
  "fratura-acetabulo:step-placa": StepPlaca,
  "fratura-acetabulo:step-artroplastia": StepArtroplastia,
};
