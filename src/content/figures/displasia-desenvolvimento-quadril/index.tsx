import type { FC } from "react";
import type { FigureProps } from "../../../types/topic";

/* ============================================================================
   Displasia do desenvolvimento do quadril (DDQ) — figuras esquemáticas
   originais (line-art 2 tons). Ortopedia pediátrica.
   Convenções de cor (somente via CSS vars):
   • Osso:              stroke var(--ink-soft), fill var(--surface)
   • 2º plano:          var(--surface-2, var(--surface))
   • Fise/cartilagem:   stroke var(--teal)  (placa de crescimento, cartilagem
                         trirradiada, labro, cabeça cartilaginosa)
   • Implante/órtese:   stroke var(--teal)  (suspensório, gesso, parafusos)
   • Traço/linha-guia:  stroke var(--cortical)
   • Medidas/ângulos:   var(--amber)
   • Rótulos:           fontSize 11, fill var(--muted), font-body
   • Códigos mono:      font-mono
   Referência editorial: Rockwood and Wilkins' Fractures in Children, 10a ed. (2024).
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

const cartilage = {
  fill: "var(--teal-tint, none)",
  stroke: "var(--teal)",
  strokeWidth: 1.6,
  strokeLinejoin: "round" as const,
};

const label = {
  fontSize: 11,
  fill: "var(--muted)",
  fontFamily: "var(--font-body, sans-serif)",
};

const labelMono = {
  fontSize: 11,
  fill: "var(--muted)",
  fontFamily: "var(--font-mono, monospace)",
};

const amber = "var(--amber)";

/* ──────────────────────────────────────────────────────────────────────────
   1) ANATOMIA — quadril infantil coronal: acetábulo, cartilagem trirradiada,
   labro, cabeça cartilaginosa com núcleo de ossificação, FISE cervicocefálica.
   ────────────────────────────────────────────────────────────────────────── */
export const Anatomia: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 330 300"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Anatomia do quadril imaturo: acetábulo, cartilagem trirradiada, labro e fise"}</title>

    {/* Ílio / corpo pélvico (2º plano) */}
    <path
      {...bone2}
      d="M40 30 C 96 20, 150 26, 176 58 L 176 120 C 150 118, 108 116, 74 120 L 44 116 Z"
    />

    {/* Ísquio / púbis inferior (2º plano) */}
    <path {...bone2} d="M62 150 C 92 152, 132 154, 168 152 L 168 210 C 130 214, 92 212, 66 206 Z" />

    {/* Cartilagem trirradiada (Y) — entre ílio, ísquio e púbis */}
    <g stroke="var(--teal)" strokeWidth="4" strokeLinecap="round" fill="none">
      <line x1="128" y1="132" x2="128" y2="96" />
      <line x1="128" y1="132" x2="96" y2="150" />
      <line x1="128" y1="132" x2="160" y2="150" />
    </g>
    <text x="118" y="90" {...label} textAnchor="end" fill="var(--teal)">cartilagem trirradiada</text>

    {/* Teto acetabular ósseo */}
    <path {...bone} d="M120 96 C 150 92, 172 104, 178 128 C 170 122, 150 118, 128 122 Z" />

    {/* Labro (fibrocartilagem, borda do acetábulo) */}
    <path d="M178 128 C 186 130, 190 138, 188 148" {...cartilage} fill="none" strokeWidth="3" />
    <text x="196" y="140" {...label} textAnchor="start" fill="var(--teal)">labro</text>

    {/* Cabeça femoral cartilaginosa */}
    <circle cx="150" cy="150" r="40" {...cartilage} />
    {/* Núcleo de ossificação (aparece 4–6 meses) */}
    <circle cx="150" cy="150" r="13" {...bone} />
    <text x="150" y="154" {...labelMono} textAnchor="middle" fill="var(--ink-soft)">núcleo</text>

    {/* Ligamento redondo (para a fóvea) */}
    <path d="M132 158 C 116 168, 104 178, 96 182" fill="none" stroke="var(--teal)" strokeWidth="1.4" strokeDasharray="2 3" />
    <text x="70" y="192" {...label} textAnchor="start" fill="var(--teal)">lig. redondo</text>

    {/* Colo + diáfise femoral */}
    <path
      {...bone}
      d="M168 168 C 196 180, 214 206, 224 240 L 252 250 L 258 292 L 214 292 L 200 250 C 190 224, 176 202, 158 188 Z"
    />

    {/* FISE cervicocefálica (placa de crescimento proximal do fêmur) */}
    <path d="M158 176 C 172 178, 184 188, 190 202" fill="none" stroke="var(--teal)" strokeWidth="3" strokeLinecap="round" />
    <text x="204" y="196" {...label} textAnchor="start" fill="var(--teal)">fise (placa de crescimento)</text>

    <text x="150" y="220" {...label} textAnchor="middle">cabeça cartilaginosa</text>
    <text x="40" y="292" {...label} textAnchor="start">
      A concavidade do acetábulo depende da cabeça bem centrada — base do tratamento da DDQ.
    </text>
  </svg>
);

/* ──────────────────────────────────────────────────────────────────────────
   2) ESPECTRO — normal → displasia → subluxação → luxação (variantes).
   ────────────────────────────────────────────────────────────────────────── */
export const Espectro: FC<FigureProps> = ({ className, title, variant }) => {
  const v = variant ?? "normal";
  const cfg: Record<
    string,
    { dx: number; dy: number; roof: number; label: string; contained: boolean }
  > = {
    normal: { dx: 0, dy: 0, roof: 26, label: "Normal — cabeça centrada, teto côncavo", contained: true },
    displasia: { dx: 4, dy: -2, roof: 42, label: "Displasia — teto raso/oblíquo, cabeça ainda no acetábulo", contained: true },
    subluxacao: { dx: 20, dy: -6, roof: 50, label: "Subluxação — cabeça descentralizada, contato parcial", contained: false },
    luxacao: { dx: 40, dy: -18, roof: 58, label: "Luxação — cabeça fora do acetábulo (ascende)", contained: false },
  };
  const c = cfg[v] ?? cfg.normal;
  const hx = 128 + c.dx;
  const hy = 150 + c.dy;
  // teto acetabular com obliquidade crescente
  const roofY2 = 118 - (c.roof - 26) * 0.5;

  return (
    <svg
      viewBox="0 0 300 280"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `Espectro da DDQ — ${c.label}`}</title>

      {/* pelve (2º plano) */}
      <path {...bone2} d="M30 40 C 78 30, 118 34, 140 60 L 140 210 C 110 214, 70 210, 42 200 Z" />

      {/* linha horizontal de referência (Hilgenreiner esquemática) */}
      <line x1="40" y1="126" x2="270" y2="126" stroke="var(--line-strong)" strokeWidth="1" strokeDasharray="4 4" />

      {/* teto acetabular (obliquidade cresce com a gravidade) */}
      <path
        d={`M118 126 L ${118 + c.roof} ${roofY2}`}
        fill="none"
        stroke={amber}
        strokeWidth="2.2"
      />
      {/* arco do índice acetabular */}
      <path
        d={`M132 126 A 14 14 0 0 0 ${118 + 14 * Math.cos((Math.atan2(126 - roofY2, c.roof)))} ${126 - 14 * Math.sin(Math.atan2(126 - roofY2, c.roof))}`}
        fill="none"
        stroke={amber}
        strokeWidth="1.2"
      />
      <text x="150" y="112" {...labelMono} textAnchor="start" fill={amber}>índice acetabular ↑</text>

      {/* concavidade acetabular óssea */}
      <path {...bone} d="M96 118 C 118 112, 140 118, 150 138 C 138 130, 116 128, 100 134 Z" />

      {/* cabeça femoral cartilaginosa (posição varia) */}
      <circle cx={hx} cy={hy} r="30" {...cartilage} />
      <circle cx={hx} cy={hy} r="9" {...bone} />

      {/* colo + diáfise seguindo a cabeça */}
      <path
        {...bone}
        d={`M${hx + 12} ${hy + 18} C ${hx + 34} ${hy + 34}, ${hx + 46} ${hy + 66}, ${hx + 52} ${hy + 96} L ${hx + 74} ${hy + 104} L ${hx + 80} ${hy + 132} L ${hx + 44} ${hy + 132} L ${hx + 34} ${hy + 96} C ${hx + 26} ${hy + 70}, ${hx + 16} ${hy + 44}, ${hx + 4} ${hy + 30} Z`}
      />

      {/* seta de migração quando não contida */}
      {!c.contained && (
        <path
          d={`M112 148 L ${hx - 20} ${hy - 6}`}
          fill="none"
          stroke={amber}
          strokeWidth="1.6"
          markerEnd="url(#arrEsp)"
        />
      )}
      <defs>
        <marker id="arrEsp" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 Z" fill={amber} />
        </marker>
      </defs>

      <text x="150" y="24" {...labelMono} textAnchor="middle" fill="var(--ink-soft)">
        {v}
      </text>
      <text x="150" y="264" {...label} textAnchor="middle">{c.label}</text>
    </svg>
  );
};

/* ──────────────────────────────────────────────────────────────────────────
   3) MANOBRAS — Ortolani (redução) × Barlow (luxação) (variantes).
   ────────────────────────────────────────────────────────────────────────── */
export const Manobras: FC<FigureProps> = ({ className, title, variant }) => {
  const v = (variant ?? "ortolani").toLowerCase();
  const ortolani = v === "ortolani";

  return (
    <svg
      viewBox="0 0 300 260"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>
        {title ??
          (ortolani
            ? "Manobra de Ortolani — abdução reduz a cabeça luxada (clunk de entrada)"
            : "Manobra de Barlow — adução + pressão posterior luxa o quadril luxável")}
      </title>

      {/* pelve neonatal (2º plano) */}
      <path {...bone2} d="M40 40 C 96 32, 150 36, 176 62 L 176 128 C 140 132, 92 130, 52 122 Z" />

      {/* acetábulo raso */}
      <path {...bone} d="M120 92 C 148 86, 168 98, 174 120 C 164 112, 146 110, 126 116 Z" />

      {/* coxa/joelho flexionado 90° — quadril também fletido */}
      <path {...bone} d="M150 150 C 176 158, 196 176, 206 200 L 232 206 L 236 232 L 200 232 L 190 206 C 182 186, 168 168, 150 158 Z" />

      {/* mão do examinador (polegar medial, dedos no trocânter) — esquemático */}
      <path d="M186 168 C 206 160, 224 164, 234 178" fill="none" stroke="var(--muted)" strokeWidth="1.4" strokeDasharray="3 3" />

      {ortolani ? (
        <>
          {/* posição inicial luxada (fantasma) */}
          <circle cx="112" cy="120" r="26" {...cartilage} opacity="0.4" />
          {/* cabeça reduzida no acetábulo */}
          <circle cx="146" cy="128" r="26" {...cartilage} />
          <circle cx="146" cy="128" r="8" {...bone} />
          {/* seta de abdução + elevação (redução) */}
          <path d="M120 118 C 132 116, 140 122, 146 128" fill="none" stroke="var(--teal)" strokeWidth="2" markerEnd="url(#arrMan)" />
          <text x="150" y="24" {...labelMono} textAnchor="middle" fill="var(--teal)">ORTOLANI (reduz)</text>
          <text x="40" y="238" {...label} textAnchor="start">Abdução + elevação do trocânter → cabeça entra no acetábulo (clunk positivo).</text>
        </>
      ) : (
        <>
          {/* cabeça inicialmente reduzida (fantasma) */}
          <circle cx="146" cy="128" r="26" {...cartilage} opacity="0.4" />
          {/* cabeça luxada posterolateral */}
          <circle cx="112" cy="118" r="26" {...cartilage} />
          <circle cx="112" cy="118" r="8" {...bone} />
          {/* seta de adução + pressão posterior (luxa) */}
          <path d="M146 128 C 134 126, 122 122, 112 118" fill="none" stroke={amber} strokeWidth="2" markerEnd="url(#arrManA)" />
          <text x="150" y="24" {...labelMono} textAnchor="middle" fill={amber}>BARLOW (luxa)</text>
          <text x="40" y="238" {...label} textAnchor="start">Adução + pressão posterior → cabeça sai do acetábulo (quadril luxável).</text>
        </>
      )}

      <defs>
        <marker id="arrMan" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 Z" fill="var(--teal)" />
        </marker>
        <marker id="arrManA" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 Z" fill={amber} />
        </marker>
      </defs>

      <text x="40" y="252" {...label} textAnchor="start">
        Recém-nascido; teste um quadril por vez, joelhos e quadris a 90°.
      </text>
    </svg>
  );
};

/* ──────────────────────────────────────────────────────────────────────────
   4) GRAF — ultrassom: ângulos α (teto ósseo) e β (teto cartilaginoso).
   Variantes por tipo (I, IIa, III, IV).
   ────────────────────────────────────────────────────────────────────────── */
export const Graf: FC<FigureProps> = ({ className, title, variant }) => {
  const v = (variant ?? "I").toUpperCase();
  const cfg: Record<string, { alpha: number; beta: number; head: number; desc: string }> = {
    I: { alpha: 62, beta: 55, head: 0, desc: "Tipo I — α ≥ 60° (quadril maduro/normal)" },
    IIA: { alpha: 55, beta: 70, head: 6, desc: "Tipo IIa — α 50–59° (imaturo fisiológico < 3 m)" },
    III: { alpha: 43, beta: 88, head: 22, desc: "Tipo III — cabeça luxada, labro evertido" },
    IV: { alpha: 38, beta: 95, head: 34, desc: "Tipo IV — luxação, labro interposto" },
  };
  const key = v === "IIA" ? "IIA" : v;
  const c = cfg[key] ?? cfg.I;

  // vértice na base do ílio; linha de base vertical (ílio reto)
  const bx = 96;
  const byTop = 40;
  const byBot = 200;
  // linha do teto ósseo (α) a partir do ponto inferior do ílio
  const aRad = (c.alpha * Math.PI) / 180;
  const ax = bx + 92 * Math.sin(aRad);
  const ay = byBot - 92 * Math.cos(aRad);
  // linha do teto cartilaginoso (β) a partir do lábio ósseo, mais horizontal
  const bRad = (c.beta * Math.PI) / 180;
  const cbx = bx + 100 * Math.sin(bRad);
  const cby = byTop + 100 * Math.cos(bRad) * 0.4;

  return (
    <svg
      viewBox="0 0 300 260"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `Ultrassom de Graf — ${c.desc}`}</title>

      {/* linha de base (ílio reto, vertical) */}
      <line x1={bx} y1={byTop} x2={bx} y2={byBot} stroke="var(--ink-soft)" strokeWidth="2" />
      <text x={bx - 6} y={byTop + 4} {...label} textAnchor="end">ílio</text>

      {/* teto ósseo (linha α, cortical) */}
      <line x1={bx} y1={byBot} x2={ax} y2={ay} stroke="var(--cortical)" strokeWidth="2.2" />
      <text x={ax + 4} y={ay} {...label} textAnchor="start" fill="var(--cortical)">teto ósseo</text>

      {/* teto cartilaginoso (linha β, teal) */}
      <line x1={bx} y1={byTop + 8} x2={cbx} y2={cby} stroke="var(--teal)" strokeWidth="2.2" />
      <text x={cbx + 4} y={cby} {...label} textAnchor="start" fill="var(--teal)">teto cartilaginoso</text>

      {/* labro (fibrocartilagem) */}
      <circle cx={cbx} cy={cby} r="5" fill="var(--teal-tint, none)" stroke="var(--teal)" strokeWidth="1.6" />
      <text x={cbx + 8} y={cby + 14} {...label} textAnchor="start" fill="var(--teal)">labro</text>

      {/* cabeça femoral cartilaginosa (migra lateral/superior conforme tipo) */}
      <circle cx={150 + c.head} cy={148 - c.head * 0.4} r="34" {...cartilage} />
      <circle cx={150 + c.head} cy={148 - c.head * 0.4} r="8" {...bone} />

      {/* ângulos α e β anotados */}
      <text x={bx + 10} y={byBot - 14} {...labelMono} fill="var(--cortical)" textAnchor="start">
        α {c.alpha}°
      </text>
      <text x={bx + 10} y={byTop + 30} {...labelMono} fill="var(--teal)" textAnchor="start">
        β {c.beta}°
      </text>

      <text x="150" y="22" {...labelMono} textAnchor="middle" fill="var(--ink-soft)">
        Graf {v === "IIA" ? "IIa" : v}
      </text>
      <text x="150" y="242" {...label} textAnchor="middle">{c.desc}</text>
      <text x="150" y="256" {...label} textAnchor="middle" fill="var(--teal)">
        α maior = teto ósseo melhor · método de escolha até ~4–6 meses
      </text>
    </svg>
  );
};

/* ──────────────────────────────────────────────────────────────────────────
   5) RADIOGRAFIA — linhas de referência: Hilgenreiner, Perkin, arco de
   Shenton, índice acetabular e quadrantes de Ombrédanne.
   ────────────────────────────────────────────────────────────────────────── */
export const Radiografia: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 320 280"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Radiografia da bacia: linhas de Hilgenreiner, Perkin, arco de Shenton e índice acetabular"}</title>

    {/* Hemipelves esquemáticas (2º plano) */}
    <path {...bone2} d="M20 70 C 70 58, 120 62, 150 92 L 150 150 C 118 150, 70 150, 34 146 Z" />
    <path {...bone2} d="M300 70 C 250 58, 200 62, 170 92 L 170 150 C 202 150, 250 150, 286 146 Z" />

    {/* Cartilagem trirradiada bilateral (referência da linha de Hilgenreiner) */}
    <circle cx="118" cy="118" r="4" fill="var(--teal)" />
    <circle cx="202" cy="118" r="4" fill="var(--teal)" />

    {/* Linha de Hilgenreiner (horizontal pelas cartilagens trirradiadas) */}
    <line x1="30" y1="118" x2="290" y2="118" stroke={amber} strokeWidth="1.8" />
    <text x="30" y="112" {...label} textAnchor="start" fill={amber}>Hilgenreiner (H)</text>

    {/* Linha de Perkin (vertical pela borda lateral do acetábulo) — bilateral */}
    <line x1="126" y1="70" x2="126" y2="230" stroke={amber} strokeWidth="1.8" strokeDasharray="5 4" />
    <line x1="194" y1="70" x2="194" y2="230" stroke={amber} strokeWidth="1.8" strokeDasharray="5 4" />
    <text x="126" y="66" {...label} textAnchor="middle" fill={amber}>Perkin</text>

    {/* LADO NORMAL (esq. da imagem = quadril direito): cabeça no quadrante ínfero-medial */}
    <circle cx="112" cy="140" r="18" {...cartilage} />
    <circle cx="112" cy="140" r="6" {...bone} />
    {/* teto acetabular normal + índice pequeno */}
    <line x1="118" y1="118" x2="98" y2="126" stroke="var(--cortical)" strokeWidth="2" />
    <text x="70" y="140" {...label} textAnchor="middle">normal</text>

    {/* LADO DISPLÁSICO (dir. da imagem = quadril esquerdo): cabeça ântero-superolateral */}
    <circle cx="214" cy="112" r="18" {...cartilage} />
    <circle cx="214" cy="112" r="6" {...bone} />
    {/* teto oblíquo (índice acetabular aumentado) */}
    <line x1="202" y1="118" x2="230" y2="102" stroke="var(--cortical)" strokeWidth="2.2" />
    <text x="242" y="104" {...label} textAnchor="start" fill="var(--cortical)">índice ↑</text>
    <text x="250" y="140" {...label} textAnchor="middle">displásico</text>

    {/* Arco de Shenton: contínuo à esquerda, quebrado à direita */}
    <path d="M96 154 C 104 168, 116 176, 130 178" fill="none" stroke="var(--teal)" strokeWidth="1.8" />
    <path d="M198 150 C 206 166, 218 176, 232 180" fill="none" stroke="var(--teal)" strokeWidth="1.8" strokeDasharray="4 4" />
    <text x="150" y="196" {...label} textAnchor="middle" fill="var(--teal)">arco de Shenton (roto no lado displásico)</text>

    <text x="20" y="252" {...label} textAnchor="start">
      Cabeça normal: quadrante ínfero-medial de Ombrédanne (abaixo de H, medial a Perkin).
    </text>
    <text x="20" y="268" {...label} textAnchor="start">
      Radiografia útil após surgir o núcleo de ossificação / ossificação do esqueleto.
    </text>
  </svg>
);

/* ──────────────────────────────────────────────────────────────────────────
   6) SUSPENSÓRIO DE PAVLIK — posição de flexão + abdução ("posição humana").
   ────────────────────────────────────────────────────────────────────────── */
export const Pavlik: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 300 280"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Suspensório de Pavlik — flexão ~100–110° e abdução na zona segura"}</title>

    {/* tronco do lactente (2º plano) */}
    <path {...bone2} d="M120 30 C 150 26, 180 30, 190 60 L 196 150 C 176 158, 124 158, 104 150 L 110 60 Z" />

    {/* faixa torácica */}
    <rect x="104" y="66" width="92" height="16" rx="6" fill="var(--teal-tint, none)" stroke="var(--teal)" strokeWidth="1.8" />
    <text x="150" y="60" {...label} textAnchor="middle" fill="var(--teal)">faixa torácica</text>

    {/* coxa esquerda em flexão + abdução */}
    <path {...bone} d="M120 150 C 100 168, 86 196, 82 226 L 100 234 L 116 210 C 128 190, 140 172, 148 158 Z" />
    {/* coxa direita em flexão + abdução */}
    <path {...bone} d="M180 150 C 200 168, 214 196, 218 226 L 200 234 L 184 210 C 172 190, 160 172, 152 158 Z" />

    {/* tirantes anteriores (flexão) e posteriores (limitam adução) */}
    <path d="M124 82 C 112 120, 96 180, 90 224" fill="none" stroke="var(--teal)" strokeWidth="2.4" />
    <path d="M176 82 C 188 120, 204 180, 210 224" fill="none" stroke="var(--teal)" strokeWidth="2.4" />
    <text x="150" y="120" {...label} textAnchor="middle" fill="var(--teal)">tirante anterior (mantém flexão)</text>
    <text x="150" y="200" {...label} textAnchor="middle">tirante posterior (limita adução)</text>

    {/* arcos indicando flexão e abdução (amber) */}
    <path d="M150 158 C 138 178, 130 196, 128 214" fill="none" stroke={amber} strokeWidth="1.4" strokeDasharray="3 3" />
    <path d="M150 158 C 162 178, 170 196, 172 214" fill="none" stroke={amber} strokeWidth="1.4" strokeDasharray="3 3" />
    <text x="150" y="250" {...label} textAnchor="middle" fill={amber}>flexão ~100–110° · abdução na zona segura</text>

    <text x="20" y="270" {...label} textAnchor="start">
      1ª linha até ~6 meses. Evitar abdução forçada (risco de necrose) e flexão insuficiente (não reduz).
    </text>
  </svg>
);

/* ──────────────────────────────────────────────────────────────────────────
   7) REDUÇÃO + GESSO PELVIPODÁLICO — zona segura e tenotomia dos adutores.
   ────────────────────────────────────────────────────────────────────────── */
export const ReducaoGesso: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 300 280"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Redução fechada e gesso pelvipodálico na posição humana; zona segura de Ramsey"}</title>

    {/* pelve/tronco (2º plano) */}
    <path {...bone2} d="M112 24 C 150 20, 188 24, 196 54 L 200 96 C 176 104, 124 104, 100 96 L 104 54 Z" />

    {/* gesso — casco pélvico e coxas */}
    <path
      d="M96 96 C 88 130, 78 176, 74 214 L 108 224 L 122 176 C 132 148, 142 122, 150 108 C 158 122, 168 148, 178 176 L 192 224 L 226 214 C 222 176, 212 130, 204 96 Z"
      fill="var(--teal-tint, none)"
      stroke="var(--teal)"
      strokeWidth="2"
    />
    <text x="150" y="150" {...label} textAnchor="middle" fill="var(--teal)">gesso pelvipodálico</text>

    {/* fêmures em flexão/abdução dentro do gesso */}
    <path {...bone} d="M132 104 C 116 132, 104 172, 100 206 L 112 210 L 126 172 C 136 148, 144 124, 150 112 Z" />
    <path {...bone} d="M168 104 C 184 132, 196 172, 200 206 L 188 210 L 174 172 C 164 148, 156 124, 150 112 Z" />

    {/* setas da zona segura (arco de abdução seguro, amber) */}
    <path d="M150 112 A 70 70 0 0 0 96 168" fill="none" stroke={amber} strokeWidth="1.6" />
    <path d="M150 112 A 70 70 0 0 1 204 168" fill="none" stroke={amber} strokeWidth="1.6" />
    <text x="150" y="70" {...label} textAnchor="middle" fill={amber}>zona segura (Ramsey)</text>

    {/* tenotomia dos adutores (indicador de local) */}
    <line x1="132" y1="112" x2="118" y2="126" stroke="var(--cortical)" strokeWidth="2" className="fx-line" />
    <text x="60" y="130" {...label} textAnchor="start" fill="var(--cortical)">tenotomia dos adutores (se limita a abdução)</text>

    <text x="20" y="252" {...label} textAnchor="start">
      6–18 meses: redução fechada sob anestesia + artrografia; gessar na posição humana (não forçar).
    </text>
    <text x="20" y="268" {...label} textAnchor="start">
      Confirmar reduzido e estável (TC/RM); zona segura estreita → risco de necrose ou reluxação.
    </text>
  </svg>
);

/* ──────────────────────────────────────────────────────────────────────────
   8) OSTEOTOMIAS — femoral (varizante desrotadora) × pélvica (Salter).
   Variantes: femoral | pelvica.
   ────────────────────────────────────────────────────────────────────────── */
export const Osteotomias: FC<FigureProps> = ({ className, title, variant }) => {
  const femoral = (variant ?? "femoral") === "femoral";
  return (
    <svg
      viewBox="0 0 300 280"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>
        {title ??
          (femoral
            ? "Osteotomia femoral varizante desrotadora com encurtamento"
            : "Osteotomia pélvica de Salter — reorienta o teto acetabular")}
      </title>

      {/* pelve (2º plano) */}
      <path {...bone2} d="M30 30 C 84 22, 132 28, 156 60 L 156 130 C 124 130, 76 128, 44 122 Z" />

      {femoral ? (
        <>
          {/* acetábulo (referência) */}
          <path {...bone} d="M118 92 C 146 86, 166 98, 172 120 C 162 112, 144 110, 124 116 Z" />
          {/* cabeça reduzida */}
          <circle cx="140" cy="128" r="26" {...cartilage} />
          <circle cx="140" cy="128" r="8" {...bone} />

          {/* fêmur proximal com cunha de varização retirada */}
          <path {...bone} d="M150 148 C 172 158, 188 182, 196 210 L 220 218 L 224 256 L 188 256 L 176 214 C 168 190, 156 168, 142 156 Z" />
          {/* traço da osteotomia (cunha) */}
          <g className="fx-line" stroke="var(--cortical)" strokeWidth="2">
            <line x1="160" y1="176" x2="196" y2="188" />
          </g>
          {/* placa/parafusos (implante teal) */}
          <path d="M198 178 L 208 244" fill="none" stroke="var(--teal)" strokeWidth="3" strokeLinecap="round" />
          <g stroke="var(--teal)" strokeWidth="2.4" strokeLinecap="round">
            <line x1="182" y1="170" x2="150" y2="140" />
            <line x1="200" y1="200" x2="210" y2="202" />
            <line x1="202" y1="220" x2="212" y2="222" />
          </g>

          {/* arco de correção do varo (amber) */}
          <path d="M150 148 A 40 40 0 0 0 176 178" fill="none" stroke={amber} strokeWidth="1.4" strokeDasharray="3 3" />
          <text x="150" y="24" {...labelMono} textAnchor="middle" fill="var(--ink-soft)">osteotomia femoral</text>
          <text x="20" y="270" {...label} textAnchor="start">
            Variza/desrotа e encurta o fêmur; melhora cobertura e reduz pressão na cabeça.
          </text>
        </>
      ) : (
        <>
          {/* teto acetabular original (oblíquo) */}
          <path {...bone} d="M110 92 C 140 84, 164 96, 174 116 C 162 108, 142 106, 120 112 Z" />
          {/* fragmento acetabular reorientado (girado sobre a sínfise) */}
          <path
            d="M108 118 C 138 112, 166 118, 182 140 C 168 132, 142 132, 118 138 Z"
            fill="var(--teal-tint, none)"
            stroke="var(--teal)"
            strokeWidth="2"
          />
          {/* traço da osteotomia de Salter (supra-acetabular, através do ílio) */}
          <g className="fx-line" stroke="var(--cortical)" strokeWidth="2.2">
            <line x1="60" y1="96" x2="150" y2="108" />
          </g>
          {/* enxerto ósseo triangular na abertura */}
          <path d="M120 96 L 138 92 L 132 108 Z" {...bone} />
          <text x="150" y="82" {...label} textAnchor="start">enxerto (cunha)</text>

          {/* fios de Kirschner (implante teal) */}
          <g stroke="var(--teal)" strokeWidth="2.4" strokeLinecap="round">
            <line x1="96" y1="80" x2="140" y2="120" />
            <line x1="108" y1="76" x2="152" y2="116" />
          </g>

          {/* cabeça coberta */}
          <circle cx="138" cy="134" r="24" {...cartilage} />
          <circle cx="138" cy="134" r="7" {...bone} />
          {/* fêmur */}
          <path {...bone} d="M150 150 C 172 160, 188 184, 196 212 L 220 220 L 224 256 L 188 256 L 176 214 C 168 190, 156 168, 142 156 Z" />

          {/* seta de reorientação (amber) */}
          <path d="M150 108 C 164 116, 174 128, 178 140" fill="none" stroke={amber} strokeWidth="1.6" markerEnd="url(#arrOst)" />
          <defs>
            <marker id="arrOst" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0 0 L6 3 L0 6 Z" fill={amber} />
            </marker>
          </defs>

          <text x="150" y="24" {...labelMono} textAnchor="middle" fill="var(--ink-soft)">osteotomia pélvica (Salter)</text>
          <text x="20" y="270" {...label} textAnchor="start">
            Reorienta o acetábulo sobre a sínfise, melhorando a cobertura anterolateral da cabeça.
          </text>
        </>
      )}
    </svg>
  );
};

/* ──────────────────────────────────────────────────────────────────────────
   Registro exportado — chaves prefixadas pelo slug deste tópico.
   ────────────────────────────────────────────────────────────────────────── */
export const figures: Record<string, FC<FigureProps>> = {
  "displasia-desenvolvimento-quadril:anatomia": Anatomia,
  "displasia-desenvolvimento-quadril:espectro": Espectro,
  "displasia-desenvolvimento-quadril:manobras": Manobras,
  "displasia-desenvolvimento-quadril:graf": Graf,
  "displasia-desenvolvimento-quadril:radiografia": Radiografia,
  "displasia-desenvolvimento-quadril:pavlik": Pavlik,
  "displasia-desenvolvimento-quadril:reducao-gesso": ReducaoGesso,
  "displasia-desenvolvimento-quadril:osteotomias": Osteotomias,
};
