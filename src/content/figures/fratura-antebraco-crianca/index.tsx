import type { FC } from "react";
import type { FigureProps } from "../../../types/topic";

/* ==========================================================================
   Fratura do antebraço na criança — figuras originais (line-art, 2 tons).
   Redesenho esquemático; não reprodução de imagens protegidas.
   Referência editorial: Rockwood and Wilkins' Fractures in Children, 10ª ed.
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

const physis = {
  fill: "none" as const,
  stroke: "var(--teal)",
  strokeWidth: 3.2,
  strokeLinecap: "round" as const,
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

const corticalStroke = {
  fill: "none" as const,
  stroke: "var(--cortical)",
  strokeWidth: 3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const amberLine = {
  stroke: "var(--amber)",
  strokeWidth: 1.5,
  fill: "none" as const,
};

/* --------------------------------------------------------------------------
   1 · Anatomia do antebraço imaturo e a fise (placa de crescimento)
   ------------------------------------------------------------------------ */
export const Anatomy: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 480 340"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>
      {title ??
        "Anatomia do antebraço da criança: rádio e ulna com as fises proximais e distais"}
    </title>
    <text x="240" y="24" {...mono} textAnchor="middle">
      antebraço imaturo · incidência AP (cotovelo em cima)
    </text>

    {/* rádio (lateral) */}
    <path
      {...bone}
      d="M150 56 C138 52, 130 62, 132 76 L146 210 C147 236, 156 258, 176 272 L200 268 C196 244, 190 224, 188 208 L172 74 C171 62, 162 56, 150 56 Z"
    />
    {/* ulna (medial) — olécrano em cima */}
    <path
      {...boneBack}
      d="M300 46 C286 44, 278 58, 284 72 L300 208 C302 232, 306 252, 316 264 L332 262 C332 246, 330 226, 328 208 L320 74 C321 58, 314 48, 300 46 Z"
    />

    {/* membrana interóssea */}
    {[110, 130, 150, 170, 190].map((y, i) => (
      <line
        key={y}
        x1={188 - i * 2}
        y1={y}
        x2={286 + i * 1.5}
        y2={y + 14}
        stroke="var(--line-strong)"
        strokeWidth="1"
        opacity="0.5"
      />
    ))}
    <text x="238" y="150" {...label} textAnchor="middle">
      membrana
    </text>
    <text x="238" y="163" {...label} textAnchor="middle">
      interóssea
    </text>

    {/* fise distal do rádio */}
    <path d="M150 248 C164 256, 178 258, 194 254" {...physis} />
    <path d="M150 248 L96 236" stroke="var(--line-strong)" />
    <text x="92" y="240" {...label} fill="var(--teal)" textAnchor="end">
      fise distal do rádio
    </text>
    <text x="92" y="253" {...label} textAnchor="end">
      ~80% do crescimento
    </text>

    {/* fise distal da ulna */}
    <path d="M300 244 C310 252, 320 254, 330 250" {...physis} />

    {/* fise proximal do rádio */}
    <path d="M136 82 C146 76, 160 76, 170 82" {...physis} />
    {/* fise proximal (olécrano) */}
    <path d="M288 74 C298 68, 312 68, 322 74" {...physis} />
    <path d="M322 74 L372 66" stroke="var(--line-strong)" />
    <text x="376" y="70" {...label} fill="var(--teal)">
      fises proximais
    </text>

    <text x="150" y="300" {...label} textAnchor="middle">
      rádio
    </text>
    <text x="306" y="292" {...label} textAnchor="middle">
      ulna
    </text>

    <text x="240" y="326" {...label} textAnchor="middle">
      Quanto mais próxima da fise ativa e menor a idade, maior o potencial de remodelação.
    </text>
  </svg>
);

/* --------------------------------------------------------------------------
   2 · Padrões de fratura (toro/buckle · galho-verde · completa)
   ------------------------------------------------------------------------ */
export const Patterns: FC<FigureProps> = ({ className, title, variant }) => {
  const v = (variant ?? "toro").toLowerCase();
  const names: Record<string, string> = {
    toro: "toro (buckle)",
    "galho-verde": "galho verde (greenstick)",
    completa: "completa",
  };

  return (
    <svg
      viewBox="0 0 300 300"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `Padrão de fratura do antebraço na criança: ${names[v] ?? v}`}</title>
      <text x="150" y="24" {...mono} textAnchor="middle">
        {names[v] ?? v}
      </text>

      {v === "toro" && (
        <>
          {/* metáfise distal com abaulamento da cortical (compressão), cortex íntegro */}
          <path
            {...bone}
            d="M108 40 L192 40 L196 150 C196 150, 210 168, 198 190 L206 240 L94 240 L102 190 C90 168, 104 150, 104 150 Z"
          />
          {/* abaulamento cortical (buckle) */}
          <path
            d="M104 150 C120 138, 132 148, 150 146 C168 148, 180 138, 196 150"
            {...corticalStroke}
          />
          <path d="M196 150 L246 138" stroke="var(--line-strong)" />
          <text x="250" y="142" {...label} fill="var(--cortical)">
            abaulamento
          </text>
          <text x="250" y="155" {...label} fill="var(--cortical)">
            cortical
          </text>
          <text x="150" y="268" {...label} textAnchor="middle">
            Compressão da metáfise; ambas as corticais íntegras — fratura estável.
          </text>
        </>
      )}

      {v === "galho-verde" && (
        <>
          <path
            {...bone}
            d="M118 40 L182 40 L182 150 C182 150, 192 170, 176 200 L176 250 L108 250 L108 200 C92 170, 118 150, 118 150 Z"
          />
          {/* cortical de tração rompida (convexa) */}
          <path d="M182 150 L166 158" {...corticalStroke} />
          <path d="M182 150 L232 142" stroke="var(--line-strong)" />
          <text x="236" y="146" {...label} fill="var(--cortical)">
            cortical de tração
          </text>
          <text x="236" y="159" {...label} fill="var(--cortical)">
            rompida
          </text>
          {/* cortical de compressão apenas dobrada */}
          <path
            d="M118 150 C126 156, 128 164, 126 172"
            fill="none"
            stroke="var(--teal)"
            strokeWidth="2.4"
          />
          <text x="60" y="176" {...label} fill="var(--teal)" textAnchor="middle">
            cortical côncava
          </text>
          <text x="60" y="189" {...label} textAnchor="middle">
            apenas dobrada
          </text>
          <text x="150" y="276" {...label} textAnchor="middle">
            Uma cortical rompe (tração) e a oposta apenas encurva — instável ao desangular.
          </text>
        </>
      )}

      {v === "completa" && (
        <>
          <path
            {...bone}
            d="M118 40 L182 40 L182 132 L176 150 L108 150 L102 132 L118 40 Z"
          />
          {/* fragmento distal desviado */}
          <path
            {...bone}
            d="M110 168 L184 156 L192 172 L128 210 L102 200 Z"
          />
          {/* traço completo (ambas as corticais) */}
          <path d="M102 150 L182 132" {...corticalStroke} strokeDasharray="1 0" />
          <circle cx="120" cy="146" r="2.6" fill="var(--cortical)" />
          <circle cx="164" cy="137" r="2.6" fill="var(--cortical)" />
          <path d="M182 132 L232 124" stroke="var(--line-strong)" />
          <text x="236" y="128" {...label} fill="var(--cortical)">
            ambas as
          </text>
          <text x="236" y="141" {...label} fill="var(--cortical)">
            corticais rompidas
          </text>
          <text x="150" y="252" {...label} textAnchor="middle">
            Traço atravessa as duas corticais; pode desviar, encurtar e rodar.
          </text>
        </>
      )}
    </svg>
  );
};

/* --------------------------------------------------------------------------
   3 · Potencial de remodelação ao longo do tempo
   ------------------------------------------------------------------------ */
export const Remodeling: FC<FigureProps> = ({ className, title }) => {
  const panels = [
    { x: 40, ang: 20, cap: "consolidação viciosa", sub: "0 meses" },
    { x: 180, ang: 11, cap: "remodelação parcial", sub: "6–12 meses" },
    { x: 320, ang: 3, cap: "eixo restaurado", sub: "12–24 meses" },
  ];
  return (
    <svg
      viewBox="0 0 460 300"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>
        {title ??
          "Remodelação de uma consolidação viciosa da metáfise distal do rádio ao longo do tempo"}
      </title>
      <text x="230" y="24" {...mono} textAnchor="middle">
        remodelação · deformidade metafisária no plano de movimento
      </text>

      {panels.map((p) => {
        const apexY = 150;
        const rad = (p.ang * Math.PI) / 180;
        const len = 78;
        const dx = Math.sin(rad) * len;
        const dy = Math.cos(rad) * len;
        return (
          <g key={p.x}>
            {/* segmento proximal (fixo, vertical) */}
            <path
              {...bone}
              d={`M${p.x + 6} 60 L${p.x + 34} 60 L${p.x + 34} ${apexY} L${p.x + 6} ${apexY} Z`}
            />
            {/* fise distal (teal) na base */}
            <path
              d={`M${p.x + 6 + dx} ${apexY + dy} L${p.x + 34 + dx} ${apexY + dy}`}
              {...physis}
            />
            {/* segmento distal (angulado) */}
            <path
              {...bone}
              d={`M${p.x + 6} ${apexY} L${p.x + 34} ${apexY} L${p.x + 34 + dx} ${apexY + dy} L${p.x + 6 + dx} ${apexY + dy} Z`}
            />
            {/* eixo de referência tracejado */}
            <line
              x1={p.x + 20}
              y1={apexY}
              x2={p.x + 20}
              y2={apexY + len}
              {...amberLine}
              strokeDasharray="5 4"
            />
            {/* ângulo residual */}
            <text x={p.x + 20} y={apexY + len + 22} {...label} fill="var(--amber)" textAnchor="middle">
              {p.ang}°
            </text>
            <text x={p.x + 20} y={62 - 10} {...label} textAnchor="middle">
              {p.sub}
            </text>
            <text x={p.x + 20} y={apexY + len + 40} {...label} textAnchor="middle">
              {p.cap}
            </text>
          </g>
        );
      })}

      {/* seta de progressão */}
      <path
        d="M126 118 L172 118 M300 118 L346 118"
        stroke="var(--teal)"
        strokeWidth="2"
        markerEnd="url(#remArrow)"
      />
      <defs>
        <marker
          id="remArrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M0 0 L10 5 L0 10 Z" fill="var(--teal)" />
        </marker>
      </defs>

      <text x="230" y="292" {...label} textAnchor="middle">
        Melhor perto da fise ativa, no plano de movimento e quanto menor a idade; rotação não remodela.
      </text>
    </svg>
  );
};

/* --------------------------------------------------------------------------
   4 · Critérios de aceitação (angulação por idade e nível)
   ------------------------------------------------------------------------ */
export const Acceptance: FC<FigureProps> = ({ className, title }) => {
  const rows = [
    { site: "Distal / metafisário", young: "≤ 20°", old: "≤ 10–15°" },
    { site: "Diáfise média", young: "≤ 10–15°", old: "≤ 10°" },
    { site: "Rotação", young: "≤ 30–45°", old: "mínima" },
  ];
  return (
    <svg
      viewBox="0 0 460 280"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>
        {title ??
          "Critérios orientativos de aceitação de angulação por nível e idade na fratura do antebraço"}
      </title>
      <text x="230" y="24" {...mono} textAnchor="middle">
        limites orientativos de angulação aceitável
      </text>

      {/* cabeçalho */}
      <rect x="30" y="40" width="400" height="34" rx="8" fill="var(--surface-2, var(--surface))" stroke="var(--line-strong)" strokeWidth="1.2" />
      <text x="40" y="62" {...label}>
        nível
      </text>
      <text x="248" y="62" {...mono} textAnchor="middle" fill="var(--teal-deep, var(--teal))">
        &lt; 9 anos
      </text>
      <text x="372" y="62" {...mono} textAnchor="middle" fill="var(--amber)">
        ≥ 9 anos
      </text>

      {rows.map((r, i) => {
        const y = 82 + i * 44;
        return (
          <g key={r.site}>
            <rect
              x="30"
              y={y}
              width="400"
              height="40"
              rx="8"
              fill={i % 2 === 0 ? "var(--surface)" : "var(--surface-2, var(--surface))"}
              stroke="var(--line-strong)"
              strokeWidth="1"
            />
            <text x="40" y={y + 24} {...label}>
              {r.site}
            </text>
            <text x="248" y={y + 24} {...mono} textAnchor="middle">
              {r.young}
            </text>
            <text x="372" y={y + 24} {...mono} textAnchor="middle">
              {r.old}
            </text>
          </g>
        );
      })}

      <text x="230" y="238" {...label} textAnchor="middle">
        Mais tolerante quanto menor a idade e mais próxima da fise; a rotação praticamente não remodela.
      </text>
      <text x="230" y="256" {...label} textAnchor="middle">
        Valores de referência — integre demanda, plano da deformidade e crescimento residual.
      </text>
    </svg>
  );
};

/* --------------------------------------------------------------------------
   5 · Redução fechada + gesso (moldagem e índice de gesso)
   ------------------------------------------------------------------------ */
export const CastReduction: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 460 300"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>
      {title ??
        "Redução fechada e gesso moldado com índice de gesso adequado na fratura do antebraço"}
    </title>

    {/* Painel 1 — redução por tração e reversão do desvio */}
    <text x="115" y="24" {...mono} textAnchor="middle">
      1 · reduzir
    </text>
    <path {...bone} d="M92 44 L120 44 L124 132 L96 132 Z" />
    <path {...bone} d="M96 150 L124 150 L150 196 L120 208 L86 178 Z" />
    <path d="M96 132 L124 132" {...corticalStroke} />
    <path
      d="M150 210 C168 222, 184 222, 200 212"
      fill="none"
      stroke="var(--teal)"
      strokeWidth="3"
      markerEnd="url(#castArrow)"
    />
    <path
      d="M86 44 C72 34, 68 26, 74 18"
      fill="none"
      stroke="var(--teal)"
      strokeWidth="3"
      markerEnd="url(#castArrow)"
    />
    <text x="115" y="238" {...label} textAnchor="middle">
      tração + reversão do desvio
    </text>

    {/* Painel 2 — corte do gesso e índice de gesso */}
    <text x="340" y="24" {...mono} textAnchor="middle">
      2 · corte do gesso · índice
    </text>
    {/* gesso (contorno) */}
    <path
      d="M280 70 C260 90, 260 210, 280 230 C320 250, 380 250, 402 228 C420 208, 420 92, 402 72 C380 50, 320 50, 280 70 Z"
      fill="var(--surface-2, var(--surface))"
      stroke="var(--line-strong)"
      strokeWidth="10"
      opacity="0.6"
      strokeLinejoin="round"
    />
    {/* rádio e ulna em corte */}
    <ellipse cx="320" cy="150" rx="20" ry="16" {...bone} />
    <ellipse cx="366" cy="150" rx="16" ry="13" {...boneBack} />
    {/* medida sagital (vertical) e coronal (horizontal) */}
    <line x1="300" y1="86" x2="300" y2="214" stroke="var(--amber)" strokeWidth="1.5" strokeDasharray="4 3" />
    <text x="286" y="150" {...label} fill="var(--amber)" textAnchor="middle" transform="rotate(-90 286 150)">
      sagital
    </text>
    <line x1="264" y1="256" x2="418" y2="256" stroke="var(--amber)" strokeWidth="1.5" strokeDasharray="4 3" />
    <text x="340" y="272" {...label} fill="var(--amber)" textAnchor="middle">
      coronal
    </text>
    <text x="340" y="112" {...mono} textAnchor="middle" fill="var(--amber)">
      índice ≤ 0,8
    </text>

    <defs>
      <marker
        id="castArrow"
        viewBox="0 0 10 10"
        refX="8"
        refY="5"
        markerWidth="6"
        markerHeight="6"
        orient="auto-start-reverse"
      >
        <path d="M0 0 L10 5 L0 10 Z" fill="var(--teal)" />
      </marker>
    </defs>

    <text x="230" y="292" {...label} textAnchor="middle">
      Gesso bem moldado (índice de gesso ≤ 0,7–0,8) reduz a perda de redução; controle radiográfico seriado.
    </text>
  </svg>
);

/* --------------------------------------------------------------------------
   6 · Haste intramedular elástica (ESIN)
   ------------------------------------------------------------------------ */
export const Esin: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 400 340"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>
      {title ??
        "Haste intramedular elástica (ESIN) do antebraço com curvatura de três pontos"}
    </title>
    <text x="200" y="24" {...mono} textAnchor="middle">
      ESIN · fixação elástica de três pontos
    </text>

    {/* rádio (curvatura fisiológica preservada) */}
    <path
      {...bone}
      d="M104 60 C92 58, 86 70, 90 82 L118 250 C120 268, 128 284, 142 292 L162 288 C158 272, 152 258, 150 246 L128 78 C127 66, 116 62, 104 60 Z"
    />
    {/* ulna (reta) */}
    <path
      {...boneBack}
      d="M264 52 C250 50, 244 64, 250 78 L262 268 C263 284, 268 296, 278 300 L292 298 C292 284, 290 272, 288 258 L282 80 C283 66, 278 54, 264 52 Z"
    />

    {/* traços de fratura diafisária */}
    <path d="M92 168 L128 162" {...corticalStroke} />
    <path d="M254 172 L286 168" {...corticalStroke} />

    {/* haste do rádio: entrada distal (metáfise), curva pré-moldada, apex no traço */}
    <path
      d="M148 268 C140 246, 118 220, 122 186 C126 150, 108 120, 108 96"
      fill="none"
      stroke="var(--teal)"
      strokeWidth="3.4"
      strokeLinecap="round"
    />
    {/* haste da ulna: entrada proximal (olécrano), reta com apex */}
    <path
      d="M270 66 C266 96, 280 130, 274 170 C268 210, 278 248, 276 280"
      fill="none"
      stroke="var(--teal)"
      strokeWidth="3.4"
      strokeLinecap="round"
    />

    {/* pontos de contato (três pontos) */}
    <circle cx="122" cy="186" r="4" fill="var(--amber)" />
    <circle cx="274" cy="170" r="4" fill="var(--amber)" />

    {/* entradas */}
    <path d="M148 268 L188 280" stroke="var(--line-strong)" />
    <text x="192" y="284" {...label} fill="var(--teal)">
      entrada distal do rádio
    </text>
    <path d="M270 66 L228 58" stroke="var(--line-strong)" />
    <text x="224" y="60" {...label} fill="var(--teal)" textAnchor="end">
      entrada proximal da ulna
    </text>

    <text x="120" y="315" {...label} textAnchor="middle">
      rádio
    </text>
    <text x="278" y="322" {...label} textAnchor="middle">
      ulna
    </text>

    <text x="200" y="336" {...label} textAnchor="middle">
      A curvatura pré-moldada gera contato em três pontos e restaura a curvatura fisiológica do rádio.
    </text>
  </svg>
);

/* --------------------------------------------------------------------------
   7 · Toro tratado com tala removível
   ------------------------------------------------------------------------ */
export const RemovableSplint: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 400 280"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Fratura em toro tratada com tala/órtese de punho removível"}</title>
    <text x="200" y="24" {...mono} textAnchor="middle">
      toro (buckle) · tala de punho removível
    </text>

    {/* antebraço/mão contorno */}
    <path
      d="M60 150 C60 128, 84 120, 120 120 L214 120 C236 108, 258 110, 268 120 C278 108, 296 110, 300 122 C314 116, 328 122, 326 136 C338 132, 348 140, 344 152 C350 164, 340 176, 326 176 L120 176 C84 176, 60 172, 60 150 Z"
      fill="var(--surface-2, var(--surface))"
      stroke="var(--ink-soft)"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    {/* rádio distal com abaulamento (toro) */}
    <path {...bone} d="M96 132 L150 132 L150 164 L96 164 Z" />
    <path d="M96 148 C112 140, 134 140, 150 148" {...corticalStroke} />
    <text x="123" y="112" {...label} textAnchor="middle" fill="var(--cortical)">
      toro do rádio distal
    </text>

    {/* tala removível (velcro) */}
    <path
      d="M80 128 C78 152, 80 170, 96 174 L206 174 C214 172, 216 130, 206 126 L80 126 Z"
      fill="none"
      stroke="var(--teal)"
      strokeWidth="6"
      opacity="0.85"
      strokeLinejoin="round"
    />
    {[112, 150, 188].map((x) => (
      <g key={x}>
        <rect x={x - 12} y="150" width="24" height="12" rx="3" fill="none" stroke="var(--teal)" strokeWidth="2" />
        <line x1={x - 6} y1="156" x2={x + 6} y2="156" stroke="var(--teal)" strokeWidth="1.4" />
      </g>
    ))}
    <path d="M206 150 L250 150" stroke="var(--line-strong)" />
    <text x="254" y="146" {...label} fill="var(--teal)">
      tala de velcro
    </text>
    <text x="254" y="159" {...label}>
      removível
    </text>

    <text x="200" y="256" {...label} textAnchor="middle">
      Fratura estável: tala removível, sem necessidade de nova radiografia de rotina — dor e função equivalentes ao gesso.
    </text>
  </svg>
);

export const figures: Record<string, FC<FigureProps>> = {
  "fratura-antebraco-crianca:anatomia": Anatomy,
  "fratura-antebraco-crianca:padroes": Patterns,
  "fratura-antebraco-crianca:remodelacao": Remodeling,
  "fratura-antebraco-crianca:aceitacao": Acceptance,
  "fratura-antebraco-crianca:reducao-gesso": CastReduction,
  "fratura-antebraco-crianca:esin": Esin,
  "fratura-antebraco-crianca:tala-removivel": RemovableSplint,
};
