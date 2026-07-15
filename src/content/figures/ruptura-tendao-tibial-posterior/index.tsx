import type { FC } from "react";
import type { FigureProps } from "../../../types/topic";

/* ============================================================================
   Disfunção do tendão tibial posterior (DTTP) — pé plano do adulto adquirido.
   Figuras esquemáticas originais (line-art 2 tons, sem copyright).
   Convenções de cor (somente via CSS vars):
   • Osso:            stroke var(--ink-soft), fill var(--surface)
   • 2º plano:        var(--surface-2, var(--surface))
   • Tendão/ligamento/implante: stroke var(--teal)
   • Traço/patologia: stroke var(--cortical) + className "fx-line"
   • Medidas/ângulos: var(--amber)
   • Rótulos:         fontSize 11, fill var(--muted), font-body
   • Códigos mono:    font-mono
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

const labelMono = {
  fontSize: 11,
  fill: "var(--muted)",
  fontFamily: "var(--font-mono, monospace)",
};

const tendon = {
  fill: "none",
  stroke: "var(--teal)",
  strokeWidth: 3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const amber = "var(--amber)";

/* ──────────────────────────────────────────────────────────────────────────
   1) ANATOMIA — face medial do retropé.
   O tibial posterior corre atrás do maléolo medial (zona hipovascular), curva-se
   sob o sustentáculo do tálus e se insere amplamente no navicular / cuneiformes.
   É o principal dinâmico do arco medial; a mola (lig. calcaneonavicular) é o
   estático que trabalha em conjunto.
   ────────────────────────────────────────────────────────────────────────── */
export const Anatomia: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 360 280"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Anatomia — tibial posterior, zona hipovascular retromaleolar e inserção no navicular"}</title>

    {/* tíbia distal */}
    <path {...bone2} d="M150 16 L 210 16 L 210 96 C 198 108, 160 108, 150 96 Z" />
    <text x="180" y="46" {...label} textAnchor="middle">tíbia</text>

    {/* maléolo medial */}
    <path {...bone} d="M150 92 C 166 96, 172 112, 164 128 C 152 132, 142 122, 142 106 Z" />
    <text x="128" y="112" {...label} textAnchor="end">maléolo medial</text>

    {/* tálus (corpo, 2º plano) */}
    <path {...bone2} d="M168 116 C 196 108, 236 110, 250 126 C 254 142, 244 156, 222 160 C 194 162, 172 152, 166 136 Z" />
    <text x="214" y="136" {...label} textAnchor="middle">tálus</text>

    {/* calcâneo com sustentáculo do tálus */}
    <path {...bone} d="M176 162 C 214 168, 286 168, 316 160 L 320 210 L 172 214 C 166 196, 168 176, 176 162 Z" />
    <text x="256" y="196" {...label} textAnchor="middle">calcâneo</text>
    {/* sustentáculo do tálus (prateleira medial sob a qual o TP desliza) */}
    <path {...bone} d="M176 150 C 190 148, 204 150, 210 158 C 202 166, 186 166, 178 160 Z" />
    <text x="150" y="150" {...label} textAnchor="end">sustentáculo</text>

    {/* navicular (alvo da inserção) */}
    <path {...bone} d="M132 156 C 118 160, 114 186, 126 194 C 138 190, 144 174, 142 162 Z" />
    <text x="112" y="182" {...label} textAnchor="end">navicular</text>
    {/* cuneiformes / base dos metatarsos (2º plano) */}
    <path {...bone2} d="M96 168 C 78 172, 58 178, 44 184 L 48 206 C 74 200, 104 194, 126 190 Z" />
    <text x="70" y="202" {...label} textAnchor="middle">cuneiformes</text>

    {/* ligamento mola (calcaneonavicular) — estabilizador estático do arco */}
    <path d="M138 178 C 152 182, 166 178, 178 166" fill="none" stroke="var(--teal)" strokeWidth="2" strokeDasharray="4 3" />
    <text x="150" y="206" {...label} textAnchor="middle" fill="var(--teal)">lig. mola (calcaneonavicular)</text>

    {/* tendão tibial posterior — desce atrás do maléolo, curva sob o sustentáculo, insere no navicular */}
    <path {...tendon} d="M156 30 C 150 66, 146 96, 150 116 C 154 132, 150 150, 138 160 C 132 166, 130 172, 132 178" />
    <text x="120" y="60" {...label} textAnchor="end" fill="var(--teal)">tibial posterior</text>

    {/* zona hipovascular retromaleolar (watershed) */}
    <circle cx="150" cy="118" r="13" fill="none" stroke="var(--cortical)" strokeWidth="1.6" strokeDasharray="3 3" className="fx-line" />
    <text x="150" y="270" {...label} textAnchor="middle" fill="var(--cortical)">
      Zona hipovascular retromaleolar: local habitual de tendinose/ruptura.
    </text>
    <text x="150" y="254" {...label} textAnchor="middle">
      TP inverte e trava o mediopé no impulso; falência colapsa o arco medial.
    </text>
  </svg>
);

/* ──────────────────────────────────────────────────────────────────────────
   2) JOHNSON–STROM (mod. Myerson) — estágios I a IV (variantes clicáveis).
   Perfil medial do pé: o arco desaba progressivamente; III fica rígido (artrose)
   e IV acrescenta báscula em valgo do tálus no tornozelo (insuf. do deltoide).
   ────────────────────────────────────────────────────────────────────────── */
export const JohnsonStrom: FC<FigureProps> = ({ className, title, variant }) => {
  const v = (variant ?? "I").toUpperCase();

  const cfg: Record<
    string,
    { desc: string; drop: number; rigid: boolean; tilt: boolean; tendon: "tenossinovite" | "alongado" | "roto" }
  > = {
    I: { desc: "Tenossinovite — tendão íntegro, sem deformidade", drop: 0, rigid: false, tilt: false, tendon: "tenossinovite" },
    II: { desc: "Pé plano FLEXÍVEL — deformidade redutível", drop: 26, rigid: false, tilt: false, tendon: "alongado" },
    III: { desc: "Pé plano RÍGIDO — deformidade fixa + artrose subtalar", drop: 38, rigid: true, tilt: false, tendon: "roto" },
    IV: { desc: "+ Báscula em valgo do tálus (insuf. do deltoide)", drop: 40, rigid: true, tilt: true, tendon: "roto" },
  };
  const c = cfg[v] ?? cfg.I;

  // arco medial: navicular (ápice) desce com o estágio
  const naviY = 150 + c.drop;

  return (
    <svg
      viewBox="0 0 340 280"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `Johnson–Strom — estágio ${v}: ${c.desc}`}</title>

      {/* solo */}
      <line x1="20" y1="228" x2="320" y2="228" stroke="var(--ink-soft)" strokeWidth="1.4" />

      {/* perna / tíbia */}
      <path {...bone2} d="M214 24 L 250 24 L 250 96 C 242 106, 222 106, 214 96 Z" />
      <text x="232" y="52" {...label} textAnchor="middle">tíbia</text>

      {/* tálus — báscula em valgo apenas no IV */}
      <g transform={c.tilt ? "rotate(11 232 116)" : undefined}>
        <path {...bone} d="M214 100 C 236 94, 262 96, 272 110 C 274 124, 264 134, 246 136 C 226 136, 214 126, 210 114 Z" />
        {c.tilt && (
          <>
            {/* fenda medial do tornozelo aberta (deltoide insuficiente) */}
            <path d="M214 100 L 210 114" stroke="var(--cortical)" strokeWidth="2" className="fx-line" />
            <text x="200" y="104" {...label} textAnchor="end" fill="var(--cortical)">valgo do tálus</text>
          </>
        )}
      </g>

      {/* calcâneo (retropé) — em valgo quando o arco desaba */}
      <path {...bone} d="M232 136 C 264 142, 300 150, 306 176 C 306 200, 286 210, 262 208 C 240 204, 226 184, 224 160 Z" />
      <text x="286" y="188" {...label} textAnchor="middle">calcâneo</text>

      {/* mediopé/antepé — linha do arco cai com o estágio (navicular = ápice) */}
      <path
        {...bone}
        d={`M224 160 C 190 ${naviY - 6}, 150 ${naviY}, 96 ${naviY + 10} C 70 ${naviY + 14}, 44 ${naviY + 16}, 30 ${naviY + 18} L 32 226 L 232 226 Z`}
      />
      {/* navicular marcado no ápice do arco */}
      <circle cx="150" cy={naviY} r="4" fill={amber} />
      <text x="150" y={naviY - 8} {...label} textAnchor="middle" fill={amber}>navicular</text>

      {/* altura do arco (medida amber) */}
      <line x1="150" y1={naviY} x2="150" y2="228" stroke={amber} strokeWidth="1.2" strokeDasharray="2 3" />
      <text x="158" y={(naviY + 228) / 2} {...label} textAnchor="start" fill={amber}>arco</text>

      {/* tendão tibial posterior — estado por estágio */}
      {c.tendon === "tenossinovite" && (
        <>
          <path {...tendon} d="M214 30 C 208 60, 202 92, 198 118 C 194 138, 176 150, 158 156" />
          <path d="M200 96 C 208 100, 208 112, 200 116" fill="none" stroke={amber} strokeWidth="1.6" />
          <text x="176" y="88" {...label} textAnchor="end" fill={amber}>bainha inflamada</text>
        </>
      )}
      {c.tendon === "alongado" && (
        <path {...tendon} d="M214 30 C 208 62, 202 96, 200 124 C 198 146, 182 158, 160 166" strokeDasharray="1 5" />
      )}
      {c.tendon === "roto" && (
        <>
          <path {...tendon} d="M214 30 C 208 60, 204 90, 202 112" />
          <path d="M202 112 l -6 8 m 6 -2 l -8 4" stroke="var(--cortical)" strokeWidth="2" className="fx-line" />
          <text x="176" y="120" {...label} textAnchor="end" fill="var(--cortical)">tendão roto</text>
        </>
      )}

      {/* marcador de rigidez / artrose subtalar em III–IV */}
      {c.rigid && (
        <>
          <path d="M236 150 l 8 6 m -10 2 l 8 6 m -10 2 l 8 6" stroke="var(--cortical)" strokeWidth="1.4" className="fx-line" />
          <text x="252" y="164" {...label} textAnchor="start" fill="var(--cortical)">artrose subtalar (fixa)</text>
        </>
      )}

      {/* cabeçalho e legenda */}
      <text x="30" y="20" {...labelMono} textAnchor="start" fill="var(--ink-soft)">Estágio {v}</text>
      <text x="170" y="252" {...label} textAnchor="middle">{c.desc}</text>
      <text x="170" y="268" {...label} textAnchor="middle" fill="var(--teal)">
        {v === "I"
          ? "Conservador (órtese + fortalecimento excêntrico)."
          : v === "II"
          ? "Reconstrução: transferência do FDL + osteotomia do calcâneo."
          : v === "III"
          ? "Artrodese (dupla / tríplice) do retropé."
          : "Artrodese + estabilização/artrodese do tornozelo."}
      </text>
    </svg>
  );
};

/* ──────────────────────────────────────────────────────────────────────────
   3) "TOO MANY TOES" — vista posterior. No pé plano com abdução do antepé e
   retropé em valgo, mais dedos ficam visíveis lateralmente ao olhar por trás.
   Variantes: "normal" × "positivo".
   ────────────────────────────────────────────────────────────────────────── */
export const TooManyToes: FC<FigureProps> = ({ className, title, variant }) => {
  const pos = (variant ?? "positivo") !== "normal";
  // valgo do calcâneo e abdução do antepé no sinal positivo
  const heelShift = pos ? 10 : 0;
  const abduct = pos ? 16 : 0;
  return (
    <svg
      viewBox="0 0 300 280"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? (pos ? "Sinal 'too many toes' positivo — antepé abduzido, retropé em valgo" : "Vista posterior normal — no máximo 1–2 dedos visíveis")}</title>

      {/* perna (vista posterior) */}
      <path {...bone2} d="M124 20 C 120 70, 120 120, 126 160 L 174 160 C 180 120, 180 70, 176 20 Z" />
      <text x="150" y="60" {...label} textAnchor="middle">perna (vista posterior)</text>

      {/* eixo da perna */}
      <line x1="150" y1="24" x2="150" y2="196" stroke="var(--ink-soft)" strokeWidth="1" strokeDasharray="3 3" />

      {/* calcâneo (tendão de Aquiles/eixo do retropé) — desvia em valgo */}
      <g transform={`rotate(${pos ? 12 : 0} 150 200)`}>
        <path {...bone} d="M134 160 C 130 178, 132 196, 142 208 C 152 214, 162 210, 166 198 C 168 180, 166 168, 160 160 Z" />
        <text x="150" y="188" {...label} textAnchor="middle">calcâneo</text>
      </g>
      {pos && <text x="112" y="206" {...label} textAnchor="end" fill={amber}>valgo</text>}

      {/* antepé abduzido — os dedos "saem" para o lado lateral (à direita) */}
      <g transform={`translate(${abduct + heelShift} 0)`}>
        {/* planta do antepé */}
        <path {...bone2} d="M150 210 C 176 214, 210 216, 236 214 C 246 222, 246 236, 234 242 C 206 246, 172 244, 150 236 Z" />
        {/* dedos (do 1º medial ao 5º lateral) */}
        {[0, 1, 2, 3, 4].map((i) => {
          const x = 236 - i * 18;
          // no normal só o(s) mais lateral(is) aparece(m) além da borda da perna
          const visible = pos ? i < 4 : i < 1;
          return (
            <ellipse
              key={i}
              cx={x}
              cy={244}
              rx={7}
              ry={9}
              fill={visible ? "var(--surface)" : "var(--surface-2, var(--surface))"}
              stroke={visible ? "var(--cortical)" : "var(--ink-soft)"}
              strokeWidth={visible ? 1.8 : 1.2}
            />
          );
        })}
      </g>

      {/* contagem de dedos visíveis lateralmente à perna (x = 174 = borda lateral) */}
      <line x1="174" y1="230" x2="174" y2="262" stroke="var(--ink-soft)" strokeWidth="1" strokeDasharray="2 2" />
      <text x="150" y="278" {...label} textAnchor="middle" fill={pos ? "var(--cortical)" : "var(--teal)"}>
        {pos ? "3–4 dedos visíveis → 'too many toes' POSITIVO" : "≤ 1–2 dedos visíveis → normal"}
      </text>
    </svg>
  );
};

/* ──────────────────────────────────────────────────────────────────────────
   4) SINGLE HEEL RISE — teste de elevação unipodal do calcanhar.
   Normal: o TP íntegro bloqueia o mediopé e o retropé inverte (varo) ao subir.
   Positivo (DTTP): incapaz de elevar OU o calcâneo não inverte (permanece valgo).
   Variantes: "normal" × "positivo".
   ────────────────────────────────────────────────────────────────────────── */
export const SingleHeelRise: FC<FigureProps> = ({ className, title, variant }) => {
  const pos = (variant ?? "positivo") !== "normal";
  return (
    <svg
      viewBox="0 0 300 260"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? (pos ? "Single heel rise positivo — calcâneo não inverte (permanece em valgo)" : "Single heel rise normal — o retropé inverte em varo ao subir")}</title>

      {/* solo */}
      <line x1="20" y1="212" x2="280" y2="212" stroke="var(--ink-soft)" strokeWidth="1.4" />

      {/* perna (vista posterior) */}
      <path {...bone2} d="M124 24 C 120 74, 120 124, 128 164 L 172 164 C 180 124, 180 74, 176 24 Z" />
      <line x1="150" y1="28" x2="150" y2="176" stroke="var(--ink-soft)" strokeWidth="1" strokeDasharray="3 3" />

      {/* calcâneo elevado do solo (na ponta do pé) — inverte no normal, fica em valgo no positivo */}
      <g transform={`rotate(${pos ? 14 : -12} 150 190)`}>
        <path {...bone} d="M136 160 C 130 178, 132 196, 144 200 C 156 202, 166 194, 166 178 C 166 168, 160 162, 152 160 Z" />
        <text x="150" y="184" {...label} textAnchor="middle">calcâneo</text>
      </g>

      {/* seta do eixo do retropé */}
      {pos ? (
        <>
          <path d="M150 200 C 158 190, 164 180, 166 170" fill="none" stroke="var(--cortical)" strokeWidth="1.8" markerEnd="url(#hrArrow)" />
          <text x="196" y="176" {...label} textAnchor="start" fill="var(--cortical)">fica em VALGO</text>
        </>
      ) : (
        <>
          <path d="M150 200 C 142 190, 136 180, 134 170" fill="none" stroke="var(--teal)" strokeWidth="1.8" markerEnd="url(#hrArrow)" />
          <text x="104" y="176" {...label} textAnchor="end" fill="var(--teal)">inverte em VARO</text>
        </>
      )}

      {/* pé em ponta (equino) apoiado no antepé */}
      <path {...bone2} d="M132 198 C 150 206, 176 210, 196 210 L 196 212 L 150 212 Z" />

      <defs>
        <marker id="hrArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 Z" fill={pos ? "var(--cortical)" : "var(--teal)"} />
        </marker>
      </defs>

      <text x="150" y="236" {...labelMono} textAnchor="middle" fill={pos ? "var(--cortical)" : "var(--teal)"}>
        {pos ? "single heel rise POSITIVO" : "single heel rise NORMAL"}
      </text>
      <text x="150" y="252" {...label} textAnchor="middle">
        {pos
          ? "Não eleva calcanhar OU retropé não inverte: TP insuficiente."
          : "O TP íntegro trava a coluna medial e o calcâneo inverte ao subir."}
      </text>
    </svg>
  );
};

/* ──────────────────────────────────────────────────────────────────────────
   5) VIA MEDIAL — acesso ao TP/FDL sobre a face medial do retropé.
   Incisão do retromaleolar ao navicular; identifica o TP (degenerado) e o FDL
   logo posterior, poupando o feixe neurovascular tibial posterior.
   ────────────────────────────────────────────────────────────────────────── */
export const ViaMedial: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 320 290"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Via medial — exposição do tibial posterior e do FDL, poupando o feixe tibial posterior"}</title>

    {/* contorno do pé (face medial, 2º plano) */}
    <path {...bone2} d="M40 60 C 120 44, 210 52, 262 84 C 276 120, 272 150, 250 170 C 190 186, 90 188, 44 176 C 34 140, 34 96, 40 60 Z" opacity="0.35" />

    {/* maléolo medial (referência) */}
    <path {...bone} d="M214 60 C 230 58, 240 74, 234 92 C 222 98, 208 90, 206 76 Z" />
    <text x="228" y="54" {...label} textAnchor="middle">maléolo medial</text>

    {/* navicular (referência anterior/medial) */}
    <path {...bone} d="M96 118 C 82 122, 78 146, 90 154 C 102 150, 108 134, 106 122 Z" />
    <text x="82" y="150" {...label} textAnchor="end">navicular</text>

    {/* tibial posterior (alvo — degenerado) */}
    <path fill="var(--teal-tint)" stroke="var(--teal)" strokeWidth="1.8" d="M218 84 C 190 100, 150 112, 108 124 L 112 136 C 154 124, 196 112, 226 96 Z" />
    <text x="150" y="106" {...label} textAnchor="middle" fill="var(--teal)">tibial posterior</text>

    {/* FDL, logo posterior/inferior ao TP (doador da transferência) */}
    <path fill="none" stroke="var(--teal-deep, var(--teal))" strokeWidth="2.4" strokeLinecap="round" d="M224 104 C 196 120, 156 134, 116 146" />
    <text x="150" y="162" {...label} textAnchor="middle" fill="var(--teal-deep, var(--teal))">FDL (doador)</text>

    {/* feixe neurovascular tibial posterior — em risco, posterior ao FDL */}
    <path d="M230 112 C 204 132, 166 148, 128 160" fill="none" stroke={amber} strokeWidth="2" strokeDasharray="4 3" />
    <text x="196" y="150" {...label} textAnchor="start" fill={amber}>feixe tib. post. (n.+a.)</text>

    {/* linha de incisão medial */}
    <line x1="222" y1="90" x2="96" y2="132" stroke="var(--cortical)" strokeWidth="2.2" strokeDasharray="6 4" className="fx-line" />
    <text x="150" y="80" {...label} textAnchor="middle" fill="var(--cortical)">incisão medial (maléolo → navicular)</text>

    <text x="18" y="236" {...label} textAnchor="start">
      <tspan x="18" dy="0em">Abre a bainha do TP: sinovite, tendinose e</tspan>
      <tspan x="18" dy="1.15em">alongamento confirmam o diagnóstico.</tspan>
    </text>
    <text x="18" y="268" {...label} textAnchor="start" fill={amber}>
      <tspan x="18" dy="0em">O FDL fica logo posterior; proteger o feixe</tspan>
      <tspan x="18" dy="1.15em">neurovascular tibial posterior por trás dele.</tspan>
    </text>
  </svg>
);

/* ──────────────────────────────────────────────────────────────────────────
   6) PASSO — Osteotomia de deslizamento medial do calcâneo (MDCO).
   Osteotomia oblíqua da tuberosidade, deslocada medialmente e fixada, para
   trazer o vetor do Aquiles para medial e corrigir o valgo do retropé.
   ────────────────────────────────────────────────────────────────────────── */
export const StepMDCO: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 320 250"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Passo — osteotomia de deslizamento medial do calcâneo (MDCO) fixada por parafuso"}</title>

    {/* tálus (2º plano, superior) */}
    <path {...bone2} d="M96 44 C 128 36, 176 38, 196 54 C 200 70, 190 82, 166 86 C 132 86, 104 74, 96 58 Z" />
    <text x="146" y="62" {...label} textAnchor="middle">tálus</text>

    {/* posição original da tuberosidade (fantasma) */}
    <path {...bone2} d="M150 120 C 176 126, 214 130, 232 148 C 236 176, 216 196, 190 194 C 168 190, 150 172, 148 148 Z" opacity="0.3" />

    {/* corpo anterior do calcâneo (fixo) */}
    <path {...bone} d="M92 96 C 128 100, 156 104, 168 118 L 150 150 C 128 150, 104 142, 92 126 Z" />
    <text x="112" y="122" {...label} textAnchor="middle">corpo</text>

    {/* traço da osteotomia (oblíquo, posterior ao seio do tarso) */}
    <line x1="150" y1="104" x2="176" y2="150" stroke="var(--cortical)" strokeWidth="2.4" strokeDasharray="4 3" className="fx-line" />
    <text x="196" y="112" {...label} textAnchor="start" fill="var(--cortical)">osteotomia oblíqua</text>

    {/* tuberosidade posterior DESLOCADA medialmente (para baixo/dentro do plano) */}
    <g transform="translate(-16 6)">
      <path {...bone} d="M150 120 C 176 126, 214 130, 232 148 C 236 176, 216 196, 190 194 C 168 190, 150 172, 148 148 Z" />
      <text x="196" y="172" {...label} textAnchor="middle">tuberosidade</text>
    </g>

    {/* parafuso de compressão pela tuberosidade (posterior → anterior) */}
    <g {...tendon}>
      <line x1="200" y1="188" x2="130" y2="112" />
    </g>
    <g stroke="var(--teal-deep, var(--teal))" strokeWidth="1.2">
      <line x1="150" y1="132" x2="130" y2="112" strokeDasharray="2 2" />
    </g>
    <text x="214" y="196" {...label} textAnchor="start" fill="var(--teal)">parafuso</text>

    {/* seta do deslocamento medial */}
    <path d="M236 150 C 224 156, 214 160, 206 164" fill="none" stroke={amber} strokeWidth="1.8" markerEnd="url(#mdcoArrow)" />
    <defs>
      <marker id="mdcoArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <path d="M0 0 L6 3 L0 6 Z" fill={amber} />
      </marker>
    </defs>
    <text x="242" y="150" {...label} textAnchor="start" fill={amber}>desliza medial</text>

    {/* vetor do Aquiles medializado */}
    <path d="M190 200 C 186 216, 184 226, 184 234" fill="none" stroke="var(--teal)" strokeWidth="2" strokeDasharray="3 3" />
    <text x="186" y="246" {...label} textAnchor="middle" fill="var(--teal)">vetor do Aquiles → medial</text>

    <text x="14" y="20" {...label} textAnchor="start">
      <tspan x="14" dy="0em">Medializar a tuberosidade converte a força deformante</tspan>
      <tspan x="14" dy="1.15em">em valgo em força corretiva em varo.</tspan>
    </text>
  </svg>
);

/* ──────────────────────────────────────────────────────────────────────────
   7) PASSO — Transferência do FDL para o navicular.
   O FDL é seccionado distalmente, passado por um túnel no navicular e
   tenodesado, substituindo o inversor dinâmico deficiente (associa-se à MDCO).
   ────────────────────────────────────────────────────────────────────────── */
export const StepFDL: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 320 280"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Passo — transferência do FDL ao navicular por túnel ósseo (substitui o inversor dinâmico)"}</title>

    {/* maléolo medial / tíbia distal */}
    <path {...bone2} d="M244 30 L 288 30 L 288 84 C 280 94, 258 94, 250 84 Z" />
    <path {...bone} d="M244 82 C 260 86, 266 102, 258 118 C 246 122, 236 112, 236 96 Z" />
    <text x="266" y="56" {...label} textAnchor="middle">tíbia</text>

    {/* navicular (recebe o enxerto) */}
    <path {...bone} d="M92 116 C 76 120, 72 148, 86 158 C 100 154, 106 136, 104 122 Z" />
    <text x="78" y="152" {...label} textAnchor="end">navicular</text>
    {/* túnel ósseo no navicular */}
    <circle cx="94" cy="134" r="6" fill="var(--surface-2, var(--surface))" stroke="var(--ink-soft)" strokeWidth="1.4" />
    <text x="110" y="112" {...label} textAnchor="start">túnel ósseo</text>

    {/* coto do TP degenerado (deixado ou usado como reforço) */}
    <path fill="none" stroke="var(--teal-tint, var(--teal))" strokeWidth="2.4" strokeDasharray="2 4" d="M244 96 C 200 112, 150 124, 108 130" />
    <text x="176" y="118" {...label} textAnchor="middle" fill="var(--muted)">coto do TP (insuficiente)</text>

    {/* FDL: trajeto retromaleolar, seccionado distalmente e passado pelo túnel */}
    <path {...tendon} d="M250 100 C 210 122, 160 146, 120 158 C 108 162, 100 152, 96 140" />
    {/* fim distal seccionado (fantasma para a frente) */}
    <path d="M120 158 C 132 168, 150 178, 168 184" fill="none" stroke="var(--teal)" strokeWidth="1.6" strokeDasharray="2 4" />
    <text x="168" y="198" {...label} textAnchor="middle" fill="var(--teal)">FDL seccionado distalmente</text>

    {/* laço de tenodese saindo do túnel */}
    <path d="M94 128 C 100 118, 112 116, 120 122" fill="none" stroke="var(--teal-deep, var(--teal))" strokeWidth="2" />
    <text x="150" y="146" {...label} textAnchor="middle" fill="var(--teal)">FDL → navicular</text>

    <text x="14" y="222" {...label} textAnchor="start">
      <tspan x="14" dy="0em">Tensionar em inversão e leve flexão plantar; sinergismo</tspan>
      <tspan x="14" dy="1.15em">com o TP (mesma fase da marcha).</tspan>
    </text>
    <text x="14" y="258" {...label} textAnchor="start" fill={amber}>
      <tspan x="14" dy="0em">A transferência isolada não corrige o osso: combina-se</tspan>
      <tspan x="14" dy="1.15em">sempre à MDCO (± coluna lateral).</tspan>
    </text>
  </svg>
);

/* ──────────────────────────────────────────────────────────────────────────
   8) PASSO — Artrodese do retropé (estágio III rígido; IV com o tornozelo).
   Fusão das articulações essenciais (dupla medial ou tríplice) para deformidade
   fixa; realinha o eixo e sacrifica o movimento subtalar/mediotarsal.
   ────────────────────────────────────────────────────────────────────────── */
export const StepArtrodese: FC<FigureProps> = ({ className, title, variant }) => {
  const tripla = (variant ?? "tripla") !== "dupla";
  return (
    <svg
      viewBox="0 0 320 280"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? (tripla ? "Passo — artrodese tríplice (subtalar + talonavicular + calcaneocuboide)" : "Passo — artrodese dupla medial (subtalar + talonavicular)")}</title>

      {/* tíbia (2º plano) */}
      <path {...bone2} d="M150 20 L 190 20 L 190 70 C 182 80, 158 80, 150 70 Z" />
      <text x="170" y="46" {...label} textAnchor="middle">tíbia</text>

      {/* tálus */}
      <path {...bone} d="M120 78 C 152 70, 196 72, 214 88 C 218 104, 208 116, 184 120 C 150 120, 122 108, 116 92 Z" />
      <text x="166" y="98" {...label} textAnchor="middle">tálus</text>

      {/* calcâneo */}
      <path {...bone} d="M132 122 C 170 128, 236 132, 260 158 C 260 182, 240 194, 214 192 C 190 188, 150 166, 132 146 Z" />
      <text x="212" y="168" {...label} textAnchor="middle">calcâneo</text>

      {/* navicular */}
      <path {...bone} d="M96 108 C 82 112, 78 138, 92 146 C 106 142, 112 124, 110 112 Z" />
      <text x="80" y="140" {...label} textAnchor="end">navicular</text>

      {/* cuboide (só relevante na tríplice) */}
      <path {...(tripla ? bone : bone2)} d="M112 150 C 96 152, 84 166, 90 180 C 106 184, 126 178, 130 164 Z" />
      <text x="98" y="176" {...label} textAnchor="end">cuboide</text>

      {/* marcadores de fusão (hachura) nas articulações fundidas */}
      <g stroke="var(--cortical)" strokeWidth="1.4" className="fx-line">
        {/* subtalar */}
        <path d="M150 120 l 8 6 m -14 0 l 8 6 m -2 -10 l 8 6" />
        {/* talonavicular */}
        <path d="M104 104 l 8 4 m -10 4 l 8 4" />
        {/* calcaneocuboide (tríplice) */}
        {tripla && <path d="M112 150 l 8 5 m -12 2 l 8 5" />}
      </g>
      <text x="176" y="132" {...label} textAnchor="start" fill="var(--cortical)">subtalar</text>
      <text x="118" y="100" {...label} textAnchor="start" fill="var(--cortical)">talonavicular</text>
      {tripla && <text x="70" y="196" {...label} textAnchor="start" fill="var(--cortical)">calcaneocuboide</text>}

      {/* grampos / parafusos de fixação */}
      <g {...tendon}>
        <line x1="196" y1="176" x2="150" y2="112" />
        {tripla && <line x1="104" y1="172" x2="132" y2="128" />}
      </g>

      <text x="16" y="222" {...label} textAnchor="start">
        {tripla ? (
          <>
            <tspan x="16" dy="0em">Deformidade rígida (III): tríplice realinha</tspan>
            <tspan x="16" dy="1.15em">o retropé, alivia artrose.</tspan>
          </>
        ) : (
          <>
            <tspan x="16" dy="0em">Dupla medial: poupa a coluna lateral, útil</tspan>
            <tspan x="16" dy="1.15em">em deformidade medial isolada.</tspan>
          </>
        )}
      </text>
      <text x="16" y="258" {...label} textAnchor="start" fill={amber}>
        <tspan x="16" dy="0em">No estágio IV, associa-se a estabilização/artrodese</tspan>
        <tspan x="16" dy="1.15em">do tornozelo pela báscula em valgo.</tspan>
      </text>
    </svg>
  );
};

/* ──────────────────────────────────────────────────────────────────────────
   Registro exportado — chaves prefixadas pelo slug deste tópico.
   ────────────────────────────────────────────────────────────────────────── */
export const figures: Record<string, FC<FigureProps>> = {
  "ruptura-tendao-tibial-posterior:anatomia": Anatomia,
  "ruptura-tendao-tibial-posterior:johnson-strom": JohnsonStrom,
  "ruptura-tendao-tibial-posterior:too-many-toes": TooManyToes,
  "ruptura-tendao-tibial-posterior:single-heel-rise": SingleHeelRise,
  "ruptura-tendao-tibial-posterior:via-medial": ViaMedial,
  "ruptura-tendao-tibial-posterior:step-mdco": StepMDCO,
  "ruptura-tendao-tibial-posterior:step-fdl": StepFDL,
  "ruptura-tendao-tibial-posterior:step-artrodese": StepArtrodese,
};
