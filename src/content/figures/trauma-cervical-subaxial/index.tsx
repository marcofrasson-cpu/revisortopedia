import type { FC, ReactNode } from "react";
import type { FigureProps } from "../../../types/topic";

/* ---------------------------------------------------------------------------
   Line-art original — coluna cervical subaxial (C3–C7).
   Referência editorial: Rockwood and Green's Fractures in Adults, 10a ed.
   (2024) / Campbell's Operative Orthopaedics 14a. Nenhuma imagem copiada.
   ------------------------------------------------------------------------- */

const bone = {
  fill: "var(--surface)",
  stroke: "var(--ink-soft)",
  strokeWidth: 1.6,
  strokeLinejoin: "round" as const,
};

const boneBack = {
  fill: "var(--surface-2, var(--surface))",
  stroke: "var(--ink-soft)",
  strokeWidth: 1.2,
  strokeLinejoin: "round" as const,
};

const disc = {
  fill: "var(--teal-tint)",
  stroke: "var(--teal)",
  strokeWidth: 1.6,
  strokeLinejoin: "round" as const,
};

const neural = {
  fill: "none",
  stroke: "var(--teal)",
  strokeWidth: 2.2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const soft = {
  fill: "var(--teal-tint)",
  stroke: "var(--teal)",
  strokeWidth: 1.5,
  strokeLinejoin: "round" as const,
};

const broken = {
  fill: "none",
  stroke: "var(--cortical)",
  strokeWidth: 2.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const measure = {
  fill: "none",
  stroke: "var(--amber)",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
};

const label = {
  fill: "var(--muted)",
  fontFamily: "var(--font-body, sans-serif)",
  fontSize: 11,
};

/* ---------------------------------------------------------------------------
   Vértebra cervical subaxial em PERFIL. Anterior à esquerda, posterior à
   direita. Origem no centro do corpo vertebral. Corpo -52..-4; canal -4..+28;
   pilar articular (massa lateral) 10..36; lâmina e processo espinhoso atrás.
   ------------------------------------------------------------------------- */
function VertebraPerfil({
  x,
  y,
  faded = false,
  bodyAccent,
}: {
  x: number;
  y: number;
  faded?: boolean;
  bodyAccent?: boolean;
}): ReactNode {
  const st = faded ? boneBack : bone;
  const bodySt = bodyAccent
    ? { ...st, fill: "var(--cortical-tint)", stroke: "var(--cortical)" }
    : st;
  return (
    <g transform={`translate(${x} ${y})`}>
      {/* pedículo — estrutura lateral, desenhada em segundo plano */}
      <path d="M -4 -9 L 18 -11 L 18 5 L -4 3 Z" {...boneBack} />
      {/* lâmina */}
      <path d="M 30 -3 L 52 8 L 49 15 L 27 4 Z" {...boneBack} />
      {/* processo espinhoso */}
      <path d="M 47 5 L 72 16 L 72 24 L 45 13 Z" {...boneBack} />
      {/* pilar articular (massa lateral) — facetas oblíquas ~45° */}
      <path d="M 10 -19 L 32 -25 L 36 9 L 14 15 Z" {...st} />
      {/* corpo vertebral */}
      <rect x={-52} y={-15} width={48} height={30} rx={3} {...bodySt} />
      {/* processo uncinado (esboço do bordo póstero-superior) */}
      <path d="M -8 -15 L -5 -21" fill="none" stroke="var(--ink-soft)" strokeWidth={1.4} strokeLinecap="round" />
    </g>
  );
}

/** Disco intervertebral em perfil, entre corpos com centros distantes 40. */
function DiscoPerfil({ x, y }: { x: number; y: number }): ReactNode {
  return <rect x={x - 52} y={y + 15} width={48} height={10} rx={2} {...disc} />;
}

/**
 * Medula em perfil: coluna contínua no canal. Por ser medial ao pilar
 * articular, é desenhada por cima dele na projeção lateral — convenção
 * didática usual para manter o canal legível.
 */
function MedulaPerfil({
  yTop,
  yBottom,
  x,
}: {
  yTop: number;
  yBottom: number;
  x: number;
}): ReactNode {
  return (
    <g>
      <path
        d={`M ${x - 2} ${yTop} L ${x - 2} ${yBottom} L ${x + 28} ${yBottom} L ${x + 28} ${yTop} Z`}
        fill="var(--surface)"
        stroke="var(--teal)"
        strokeWidth={1.4}
      />
      <path
        d={`M ${x + 4} ${yTop + 4} L ${x + 4} ${yBottom - 4} M ${x + 22} ${yTop + 4} L ${x + 22} ${yBottom - 4}`}
        {...neural}
      />
    </g>
  );
}

/* =====================  1. Anatomia  ===================== */

const Anatomia: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 640 340"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>
      {title ??
        "Anatomia da coluna cervical subaxial: segmento em perfil e corte axial com forame transverso e artéria vertebral"}
    </title>

    {/* ---------- painel A: perfil ---------- */}
    <text x={24} y={26} {...label}>
      A — perfil (C4–C6)
    </text>

    <VertebraPerfil x={150} y={100} />
    <VertebraPerfil x={150} y={160} />
    <VertebraPerfil x={150} y={220} />
    <DiscoPerfil x={150} y={100} />
    <DiscoPerfil x={150} y={160} />
    <MedulaPerfil x={150} yTop={68} yBottom={258} />

    {/* ligamento longitudinal anterior / posterior */}
    <path d="M 98 68 L 98 258" {...neural} strokeWidth={1.6} />
    <path d="M 146 68 L 146 258" {...neural} strokeWidth={1.6} />

    <text x={24} y={92} {...label}>
      LLA
    </text>
    <text x={24} y={122} {...label}>
      corpo
    </text>
    <text x={24} y={182} {...label}>
      disco
    </text>
    <path d="M 52 178 L 96 178" {...measure} />
    <path d="M 52 118 L 96 118" {...measure} />
    <path d="M 42 88 L 96 74" {...measure} />

    <text x={196} y={72} {...label}>
      medula
    </text>
    <path d="M 194 76 L 172 92" {...measure} />
    <text x={238} y={130} {...label}>
      massa lateral
    </text>
    <path d="M 236 126 L 190 132" {...measure} />
    <text x={238} y={252} {...label}>
      proc. espinhoso
    </text>
    <path d="M 236 248 L 220 238" {...measure} />
    <text x={238} y={196} {...label}>
      faceta
    </text>
    <path d="M 236 192 L 190 178" {...measure} />

    {/* ---------- painel B: axial ---------- */}
    <text x={344} y={26} {...label}>
      B — corte axial (C5)
    </text>

    {/* processos transversos com forame transverso */}
    <path d="M 382 158 L 414 158 L 414 194 L 388 194 Q 374 194 374 180 Z" {...bone} />
    <path d="M 538 158 L 506 158 L 506 194 L 532 194 Q 546 194 546 180 Z" {...bone} />

    {/* corpo vertebral */}
    <path d="M 414 176 C 414 142 434 134 460 134 C 486 134 506 142 506 176 L 506 194 L 414 194 Z" {...bone} />
    {/* processos uncinados */}
    <path d="M 416 172 L 410 158" fill="none" stroke="var(--ink-soft)" strokeWidth={1.4} strokeLinecap="round" />
    <path d="M 504 172 L 510 158" fill="none" stroke="var(--ink-soft)" strokeWidth={1.4} strokeLinecap="round" />

    {/* arco posterior: pedículos + lâminas + processo espinhoso */}
    <path
      d="M 412 184 C 404 214 428 250 460 268 C 492 250 516 214 508 184 L 502 194 C 502 220 482 240 460 246 C 438 240 418 220 418 194 Z"
      {...bone}
    />
    <path d="M 460 268 L 460 250" fill="none" stroke="var(--ink-soft)" strokeWidth={1.4} strokeLinecap="round" />

    {/* medula no canal */}
    <ellipse cx={460} cy={212} rx={30} ry={18} {...soft} />
    <path d="M 460 200 L 460 224" {...neural} strokeWidth={1.4} />

    {/* raízes emergindo pelos forames */}
    <path d="M 434 206 L 404 196" {...neural} strokeWidth={1.8} />
    <path d="M 486 206 L 516 196" {...neural} strokeWidth={1.8} />

    {/* artéria vertebral no forame transverso */}
    <circle cx={394} cy={176} r={9} {...soft} />
    <circle cx={526} cy={176} r={9} {...soft} />
    <circle cx={394} cy={176} r={4} fill="none" stroke="var(--teal)" strokeWidth={1.4} />
    <circle cx={526} cy={176} r={4} fill="none" stroke="var(--teal)" strokeWidth={1.4} />

    <text x={330} y={140} {...label}>
      artéria vertebral
    </text>
    <path d="M 380 144 L 392 166" {...measure} />
    <text x={556} y={140} {...label}>
      forame
    </text>
    <text x={556} y={154} {...label}>
      transverso
    </text>
    <path d="M 554 144 L 532 166" {...measure} />
    <text x={556} y={214} {...label}>
      medula
    </text>
    <path d="M 554 210 L 492 212" {...measure} />
    <text x={330} y={214} {...label}>
      raiz
    </text>
    <path d="M 352 210 L 412 202" {...measure} />
    <text x={412} y={292} {...label}>
      lâmina / proc. espinhoso bífido
    </text>
    <path d="M 460 288 L 460 272" {...measure} />
    <text x={438} y={122} {...label}>
      corpo
    </text>
  </svg>
);

/* =====================  2. Escore SLIC  ===================== */

const rows: { group: string; items: [string, string][] }[] = [
  {
    group: "Morfologia",
    items: [
      ["Sem alteração", "0"],
      ["Compressão", "1"],
      ["  + explosão", "2"],
      ["Distração", "3"],
      ["Rotação / translação", "4"],
    ],
  },
  {
    group: "Complexo discoligamentar (CDL)",
    items: [
      ["Íntegro", "0"],
      ["Indeterminado", "1"],
      ["Rompido", "2"],
    ],
  },
  {
    group: "Status neurológico",
    items: [
      ["Intacto", "0"],
      ["Lesão radicular", "1"],
      ["Lesão medular completa", "2"],
      ["Lesão medular incompleta", "3"],
      ["  + compressão contínua", "+1"],
    ],
  },
];

const Slic: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 640 380"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>
      {title ??
        "Escore SLIC: morfologia, complexo discoligamentar e status neurológico, com limiares de tratamento"}
    </title>

    {rows.map((r, ci) => {
      const x = 24 + ci * 205;
      return (
        <g key={r.group}>
          <rect x={x} y={20} width={190} height={30 + r.items.length * 24} rx={6} {...bone} />
          <path d={`M ${x} 50 L ${x + 190} 50`} fill="none" stroke="var(--ink-soft)" strokeWidth={1.2} />
          <text x={x + 12} y={40} {...label} fill="var(--ink)">
            {r.group}
          </text>
          {r.items.map(([name, pts], i) => (
            <g key={name}>
              <text x={x + 12} y={70 + i * 24} {...label}>
                {name}
              </text>
              <text x={x + 170} y={70 + i * 24} {...label} textAnchor="end" fontFamily="var(--font-mono, monospace)">
                {pts}
              </text>
            </g>
          ))}
        </g>
      );
    })}

    {/* soma */}
    <text x={24} y={214} {...label} fill="var(--ink)">
      Soma dos três domínios = escore SLIC (0–10)
    </text>

    {/* barra de decisão */}
    <rect x={24} y={240} width={592} height={40} rx={6} {...bone} />
    {Array.from({ length: 10 }, (_, i) => (
      <path
        key={i}
        d={`M ${24 + (i + 1) * 59.2} 240 L ${24 + (i + 1) * 59.2} 280`}
        fill="none"
        stroke="var(--ink-soft)"
        strokeWidth={1}
      />
    ))}
    {Array.from({ length: 11 }, (_, i) => (
      <text key={i} x={24 + i * 59.2} y={298} {...label} textAnchor="middle" fontFamily="var(--font-mono, monospace)">
        {i}
      </text>
    ))}

    {/* limiares */}
    <path d="M 24 240 L 24 224 L 231 224 L 231 240" {...measure} />
    <text x={128} y={218} {...label} textAnchor="middle">
      ≤ 3 — conservador
    </text>

    <path d="M 231 280 L 231 316 L 290 316 L 290 280" {...measure} />
    <text x={260} y={332} {...label} textAnchor="middle">
      4
    </text>
    <text x={260} y={346} {...label} textAnchor="middle">
      indefinido
    </text>

    <path d="M 290 240 L 290 224 L 616 224 L 616 240" {...measure} />
    <text x={453} y={218} {...label} textAnchor="middle">
      ≥ 5 — cirurgia
    </text>

    <text x={24} y={366} {...label}>
      O escore orienta a decisão; não define a via. Escore 4 = zona cinzenta, decidir caso a caso.
    </text>
  </svg>
);

/* =====================  3. AOSpine subaxial  ===================== */

const aoCopy: Record<string, { code: string; name: string; detail: string }> = {
  A: { code: "Tipo A", name: "Compressão", detail: "Banda de tensão íntegra" },
  B: { code: "Tipo B", name: "Banda de tensão", detail: "Distração post. ou ant." },
  C: { code: "Tipo C", name: "Translação", detail: "Deslocamento em qualquer plano" },
};

function AoPanel({ v, x }: { v: string; x: number }): ReactNode {
  const c = aoCopy[v];
  const y0 = 92;
  const y1 = 152;
  /* C: vértebra superior transladada anteriormente */
  const dx = v === "C" ? -22 : 0;
  /* B: distração posterior — corpo superior sobe atrás (aqui, afastamento facetário) */
  const dyB = v === "B" ? -8 : 0;

  return (
    <g>
      <text x={x - 56} y={40} {...label} fill="var(--ink)">
        {c.code} — {c.name}
      </text>
      <text x={x - 56} y={56} {...label}>
        {c.detail}
      </text>

      <VertebraPerfil x={x + dx} y={y0 + dyB} bodyAccent={v === "A"} />
      <VertebraPerfil x={x} y={y1} />
      {v !== "C" && <DiscoPerfil x={x} y={y0 + dyB} />}

      {/* A — traços de fratura por compressão no corpo superior */}
      {v === "A" && (
        <g>
          <path d={`M ${x - 48} ${y0 - 8} L ${x - 20} ${y0 + 6} L ${x - 8} ${y0 - 2}`} {...broken} />
          <path d={`M ${x - 40} ${y0 + 12} L ${x - 26} ${y0 - 10}`} {...broken} />
        </g>
      )}

      {/* B — banda de tensão posterior rompida: afastamento interespinhoso */}
      {v === "B" && (
        <g>
          <path d={`M ${x + 58} ${y0 + 6} L ${x + 58} ${y1 - 6}`} {...measure} strokeDasharray="4 3" />
          <path d={`M ${x + 46} ${y0 + 22} Q ${x + 62} ${y0 + 30} ${x + 46} ${y0 + 38}`} {...broken} />
          <text x={x + 66} y={y0 + 34} {...label}>
            afastamento
          </text>
          <text x={x + 66} y={y0 + 48} {...label}>
            interespinhoso
          </text>
        </g>
      )}

      {/* C — translação anterior com ruptura do disco */}
      {v === "C" && (
        <g>
          <path
            d={`M ${x - 52} ${y0 + 16} L ${x - 4} ${y0 + 16} L ${x - 4 + 22} ${y1 - 15} L ${x - 52 + 22} ${y1 - 15}`}
            {...broken}
          />
          <path d={`M ${x - 30} ${y0 + 42} L ${x - 8} ${y0 + 42}`} {...measure} />
          <path d={`M ${x - 8} ${y0 + 42} l -6 -4 m 6 4 l -6 4`} {...measure} />
          <text x={x - 56} y={y0 + 58} {...label}>
            translação
          </text>
        </g>
      )}
    </g>
  );
}

const AoSpine: FC<FigureProps> = ({ className, title, variant }) => {
  const vs = variant && aoCopy[variant] ? [variant] : ["A", "B", "C"];
  const step = 210;
  return (
    <svg
      viewBox={`0 0 ${vs.length === 1 ? 260 : 640} 260`}
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>
        {title ??
          "Classificação AOSpine subaxial: tipo A compressão, tipo B banda de tensão, tipo C translação"}
      </title>
      {vs.map((v, i) => (
        <AoPanel key={v} v={v} x={(vs.length === 1 ? 120 : 100) + i * step} />
      ))}
    </svg>
  );
};

/* =====================  4. Luxação facetária  ===================== */

const facetCopy: Record<string, { titleText: string; note: string; dx: number }> = {
  normal: { titleText: "Alinhamento normal", note: "Facetas congruentes, sem translação", dx: 0 },
  unilateral: {
    titleText: "Luxação facetária unilateral",
    note: "Translação ≈ 25% do corpo — mecanismo em flexão-rotação",
    dx: -13,
  },
  bilateral: {
    titleText: "Luxação facetária bilateral",
    note: "Translação ≈ 50% do corpo — flexão-distração, alto risco medular",
    dx: -26,
  },
};

function FacetPanel({ v, x }: { v: string; x: number }): ReactNode {
  const c = facetCopy[v];
  const y0 = 108;
  const y1 = 168;
  return (
    <g>
      <text x={x - 62} y={44} {...label} fill="var(--ink)">
        {c.titleText}
      </text>
      <text x={x - 62} y={60} {...label}>
        {c.note}
      </text>

      <VertebraPerfil x={x + c.dx} y={y0} />
      <VertebraPerfil x={x} y={y1} />
      {v === "normal" ? (
        <DiscoPerfil x={x} y={y0} />
      ) : (
        <path
          d={`M ${x - 52 + c.dx} ${y0 + 15} L ${x - 4 + c.dx} ${y0 + 15} L ${x - 4} ${y1 - 15} L ${x - 52} ${y1 - 15} Z`}
          fill="var(--cortical-tint)"
          stroke="var(--cortical)"
          strokeWidth={1.6}
          strokeLinejoin="round"
        />
      )}

      {/* linha posterior dos corpos: referência de translação */}
      <path d={`M ${x - 4} ${y1 - 22} L ${x - 4} ${y1 - 44}`} {...measure} strokeDasharray="4 3" />
      {v !== "normal" && (
        <g>
          <path d={`M ${x - 4 + c.dx} ${y0 - 26} L ${x - 4} ${y0 - 26}`} {...measure} />
          <path d={`M ${x - 4 + c.dx} ${y0 - 26} l 6 -4 m -6 4 l 6 4`} {...measure} />
          <path d={`M ${x - 4} ${y0 - 26} l -6 -4 m 6 4 l -6 4`} {...measure} />
          <text x={x + 2} y={y0 - 32} {...label}>
            {v === "unilateral" ? "25%" : "50%"}
          </text>
          {/* faceta cavalgada / travada */}
          <path d={`M ${x + 12 + c.dx} ${y0 + 16} L ${x + 34 + c.dx} ${y0 + 10}`} {...broken} />
        </g>
      )}
      <MedulaPerfil x={x} yTop={y0 - 18} yBottom={y1 + 22} />
    </g>
  );
}

const LuxacaoFacetaria: FC<FigureProps> = ({ className, title, variant }) => {
  const vs = variant && facetCopy[variant] ? [variant] : ["normal", "unilateral", "bilateral"];
  return (
    <svg
      viewBox={`0 0 ${vs.length === 1 ? 260 : 640} 230`}
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>
        {title ??
          "Luxação facetária cervical: alinhamento normal, unilateral com translação de 25% e bilateral com 50%"}
      </title>
      {vs.map((v, i) => (
        <FacetPanel key={v} v={v} x={(vs.length === 1 ? 130 : 110) + i * 210} />
      ))}
    </svg>
  );
};

/* =====================  5. RM antes da redução  ===================== */

const RmPreReducao: FC<FigureProps> = ({ className, title, variant }) => {
  const herniado = variant !== "sem-hernia";
  return (
    <svg
      viewBox="0 0 460 320"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>
        {title ??
          "Hérnia discal traumática em luxação facetária: disco extruso no canal comprimindo a medula antes da redução"}
      </title>

      <text x={24} y={28} {...label} fill="var(--ink)">
        {herniado ? "Hérnia discal traumática — RM sagital (esquema)" : "Disco íntegro — redução segura"}
      </text>

      <VertebraPerfil x={190} y={120} />
      <VertebraPerfil x={166} y={180} />
      <VertebraPerfil x={166} y={240} />
      <DiscoPerfil x={166} y={180} />

      {/* disco lesado no nível luxado: extrusão posterior para dentro do canal */}
      {herniado ? (
        <g>
          <path
            d="M 138 135 L 186 135 L 162 165 L 114 165 Z"
            fill="var(--cortical-tint)"
            stroke="var(--cortical)"
            strokeWidth={1.6}
            strokeLinejoin="round"
          />
          {/* fragmento extruso atrás do corpo, dentro do canal */}
          <path d="M 186 138 Q 214 146 210 160 Q 206 172 184 168 Z" {...disc} />
          <path d="M 186 140 Q 208 148 204 160" {...broken} />
          <text x={244} y={144} {...label}>
            fragmento extruso
          </text>
          <path d="M 242 148 L 212 154" {...measure} />
          <text x={244} y={182} {...label}>
            medula comprimida
          </text>
          <path d="M 242 186 L 216 182" {...measure} />
        </g>
      ) : (
        <path d="M 138 135 L 186 135 L 162 165 L 114 165 Z" {...disc} />
      )}

      {/* medula: indentada anteriormente pelo fragmento quando há hérnia */}
      <path
        d={
          herniado
            ? "M 188 88 L 188 140 Q 210 152 210 162 Q 210 174 188 180 L 188 278 L 216 278 L 216 88 Z"
            : "M 164 88 L 164 278 L 192 278 L 192 88 Z"
        }
        fill="var(--surface)"
        stroke="var(--teal)"
        strokeWidth={1.6}
      />

      <text x={24} y={286} {...label}>
        {herniado
          ? "Paciente não avaliável (sedado, TCE, intubado): RM antes da redução."
          : "Paciente acordado e cooperativo: redução fechada seriada sem RM prévia."}
      </text>
      <text x={24} y={302} {...label}>
        {herniado
          ? "Se há disco no canal, a redução fechada pode agravar a compressão medular."
          : "Exame neurológico repetido a cada incremento de peso é o próprio monitor."}
      </text>
    </svg>
  );
};

/* =====================  6. Via anterior (Smith-Robinson)  ===================== */

const ViaAnterior: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 480 360"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>
      {title ??
        "Via anterior de Smith-Robinson: intervalo entre a bainha carotídea lateralmente e traqueia e esôfago medialmente"}
    </title>

    <text x={20} y={24} {...label} fill="var(--ink)">
      Corte axial do pescoço em C5 — anterior acima
    </text>

    {/* contorno do pescoço */}
    <ellipse cx={240} cy={190} rx={190} ry={140} {...bone} />

    {/* platisma */}
    <ellipse cx={240} cy={190} rx={182} ry={132} fill="none" stroke="var(--teal)" strokeWidth={1.4} strokeDasharray="5 4" />

    {/* traqueia */}
    <circle cx={240} cy={104} r={30} {...soft} />
    <path d="M 216 92 A 30 30 0 0 1 264 92" fill="none" stroke="var(--teal)" strokeWidth={1.6} />
    {/* esôfago */}
    <ellipse cx={240} cy={152} rx={22} ry={15} {...soft} />

    {/* bainha carotídea bilateral: carótida + jugular + vago */}
    <g>
      <ellipse cx={148} cy={140} rx={30} ry={24} fill="none" stroke="var(--teal)" strokeWidth={1.4} strokeDasharray="4 3" />
      <circle cx={138} cy={136} r={11} {...soft} />
      <circle cx={162} cy={146} r={12} {...soft} />
      <circle cx={152} cy={158} r={4} {...soft} />
    </g>
    <g>
      <ellipse cx={332} cy={140} rx={30} ry={24} fill="none" stroke="var(--teal)" strokeWidth={1.4} strokeDasharray="4 3" />
      <circle cx={342} cy={136} r={11} {...soft} />
      <circle cx={318} cy={146} r={12} {...soft} />
      <circle cx={328} cy={158} r={4} {...soft} />
    </g>

    {/* esternocleidomastóideo */}
    <ellipse cx={100} cy={182} rx={26} ry={38} transform="rotate(-20 100 182)" {...soft} />
    <ellipse cx={380} cy={182} rx={26} ry={38} transform="rotate(20 380 182)" {...soft} />

    {/* nervo laríngeo recorrente — sulco traqueoesofágico */}
    <circle cx={214} cy={140} r={4} fill="var(--teal)" />
    <circle cx={266} cy={140} r={4} fill="var(--teal)" />

    {/* corpo vertebral + arco posterior */}
    <path d="M 196 210 C 196 182 216 176 240 176 C 264 176 284 182 284 210 L 284 226 L 196 226 Z" {...bone} />
    <path
      d="M 194 216 C 188 242 210 274 240 290 C 270 274 292 242 286 216 L 280 226 C 280 250 262 268 240 274 C 218 268 200 250 200 226 Z"
      {...bone}
    />
    <ellipse cx={240} cy={244} rx={26} ry={16} {...soft} />
    {/* artéria vertebral */}
    <circle cx={182} cy={208} r={8} {...soft} />
    <circle cx={298} cy={208} r={8} {...soft} />

    {/* intervalo de acesso — à esquerda do paciente (lado direito da imagem) */}
    <path d="M 402 118 Q 330 176 292 194" {...measure} strokeWidth={2.2} strokeDasharray="7 4" />
    <path d="M 292 194 l 10 -3 m -10 3 l 6 8" {...measure} strokeWidth={2.2} />

    <text x={344} y={92} {...label}>
      intervalo de acesso
    </text>
    <text x={344} y={106} {...label}>
      (medial à bainha)
    </text>

    <text x={20} y={104} {...label}>
      traqueia
    </text>
    <path d="M 60 100 L 208 100" {...measure} />
    <text x={20} y={152} {...label}>
      esôfago
    </text>
    <path d="M 60 148 L 216 150" {...measure} />
    <text x={20} y={288} {...label}>
      bainha carotídea
    </text>
    <path d="M 96 284 L 136 168" {...measure} />
    <text x={20} y={312} {...label}>
      n. laríngeo recorrente
    </text>
    <path d="M 130 308 L 212 148" {...measure} />
    <text x={340} y={318} {...label}>
      a. vertebral
    </text>
    <text x={340} y={332} {...label}>
      (limite lateral)
    </text>
    <path d="M 338 316 L 304 214" {...measure} />
    <text x={392} y={222} {...label}>
      ECM
    </text>
    <path d="M 390 218 L 372 196" {...measure} />
  </svg>
);

/* =====================  7. ACDF passo a passo  ===================== */

const Acdf: FC<FigureProps> = ({ className, title, variant, activeStep }) => {
  /* `variant` fixa o estágio (1–4) quando o passo da técnica não é o 1º da
     sequência; sem ele, segue o passo ativo do Stepper. */
  const parsed = variant ? Number.parseInt(variant, 10) : Number.NaN;
  const s = Number.isFinite(parsed) ? parsed : (activeStep ?? 0);
  const accent = (n: number) =>
    s === n ? { stroke: "var(--amber)", strokeWidth: 2.4 } : {};

  return (
    <svg
      viewBox="0 0 420 320"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>
        {title ??
          "Discectomia e artrodese cervical anterior: discectomia, distração, enxerto ou dispositivo intersomático e placa anterior"}
      </title>

      <VertebraPerfil x={200} y={120} />
      <VertebraPerfil x={200} y={180} />
      <VertebraPerfil x={200} y={240} />
      <DiscoPerfil x={200} y={180} />
      <MedulaPerfil x={200} yTop={88} yBottom={278} />

      {/* passo 1 — discectomia: espaço esvaziado */}
      {s >= 1 && (
        <rect
          x={148}
          y={135}
          width={48}
          height={10}
          rx={2}
          fill="var(--surface)"
          stroke="var(--ink-soft)"
          strokeWidth={1.4}
          strokeDasharray="4 3"
          {...accent(1)}
        />
      )}
      {s === 0 && <DiscoPerfil x={200} y={120} />}

      {/* passo 2 — descompressão: remoção do fragmento posterior */}
      {s === 2 && (
        <g>
          <path d="M 196 136 Q 214 140 212 146" {...broken} />
          <text x={244} y={122} {...label}>
            fragmento removido
          </text>
          <path d="M 242 126 L 214 138" {...measure} />
        </g>
      )}

      {/* passo 3 — enxerto tricortical / cage no espaço distraído */}
      {s >= 3 && (
        <g>
          <rect x={150} y={132} width={44} height={16} rx={2} {...bone} {...accent(3)} />
          <path d="M 158 132 L 158 148 M 172 132 L 172 148 M 186 132 L 186 148" fill="none" stroke="var(--ink-soft)" strokeWidth={1} />
        </g>
      )}

      {/* passo 4 — placa anterior com parafusos convergentes */}
      {s >= 4 && (
        <g>
          <rect x={140} y={106} width={9} height={72} rx={3} {...bone} {...accent(4)} />
          <path d="M 149 116 L 178 111" {...measure} strokeWidth={2.6} />
          <path d="M 149 168 L 178 173" {...measure} strokeWidth={2.6} />
          <text x={30} y={100} {...label}>
            placa bloqueada
          </text>
          <path d="M 78 104 L 140 112" {...measure} />
        </g>
      )}

      <text x={244} y={196} {...label}>
        {s === 0 && "ACDF: sequência completa"}
        {s === 1 && "1 — discectomia completa"}
        {s === 2 && "2 — descompressão do canal"}
        {s === 3 && "3 — enxerto/dispositivo e distração"}
        {s >= 4 && "4 — placa anterior"}
      </text>
      <text x={244} y={244} {...label}>
        medula
      </text>
      <path d="M 242 240 L 228 224" {...measure} />
    </svg>
  );
};

/* =====================  8. Via posterior — massa lateral  ===================== */

const ViaPosterior: FC<FigureProps> = ({ className, title, variant }) => {
  /* variant "seguro" omite a trajetória medial de alerta. */
  const showErro = variant !== "seguro";
  return (
    <svg
      viewBox="0 0 460 340"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>
        {title ??
          "Via posterior: parafuso de massa lateral com trajetória lateral e cranial, poupando a artéria vertebral"}
      </title>

      <text x={20} y={24} {...label} fill="var(--ink)">
        Corte axial — parafuso de massa lateral (técnica de Magerl)
      </text>

      {/* processos transversos com forame */}
      <path d="M 152 158 L 184 158 L 184 194 L 158 194 Q 144 194 144 180 Z" {...bone} />
      <path d="M 308 158 L 276 158 L 276 194 L 302 194 Q 316 194 316 180 Z" {...bone} />

      {/* corpo */}
      <path d="M 184 176 C 184 142 204 134 230 134 C 256 134 276 142 276 176 L 276 194 L 184 194 Z" {...bone} />

      {/* arco posterior */}
      <path
        d="M 182 184 C 174 214 198 250 230 268 C 262 250 286 214 278 184 L 272 194 C 272 220 252 240 230 246 C 208 240 188 220 188 194 Z"
        {...bone}
      />

      {/* medula */}
      <ellipse cx={230} cy={212} rx={30} ry={18} {...soft} />

      {/* artéria vertebral */}
      <circle cx={164} cy={176} r={9} {...soft} />
      <circle cx={296} cy={176} r={9} {...soft} />

      {/* ponto de entrada: 1 mm medial e inferior ao centro da massa lateral */}
      <circle cx={196} cy={232} r={3.5} fill="var(--amber)" />
      <circle cx={264} cy={232} r={3.5} fill="var(--amber)" />

      {/* trajetória: 25° lateral, afastando-se da artéria vertebral */}
      <path d="M 196 232 L 160 206" {...measure} strokeWidth={2.4} />
      <path d="M 264 232 L 300 206" {...measure} strokeWidth={2.4} />
      {/* referência sagital para o ângulo */}
      <path d="M 196 232 L 186 200" {...measure} strokeDasharray="4 3" />
      <path d="M 264 232 L 274 200" {...measure} strokeDasharray="4 3" />
      <path d="M 189 212 A 26 26 0 0 1 176 216" {...measure} />
      <text x={132} y={244} {...label}>
        25° lateral
      </text>
      <path d="M 172 240 L 190 226" {...measure} />

      {/* trajetória errada, medial — em direção à artéria */}
      {showErro && (
        <g>
          <path d="M 264 232 L 288 190" {...broken} strokeDasharray="5 4" />
          <text x={318} y={186} {...label}>
            trajetória medial:
          </text>
          <text x={318} y={200} {...label}>
            a. vertebral e raiz
          </text>
          <path d="M 316 190 L 296 184" {...measure} />
        </g>
      )}

      <text x={318} y={244} {...label}>
        ponto de entrada
      </text>
      <text x={318} y={258} {...label}>
        1 mm medial ao centro
      </text>
      <path d="M 316 248 L 270 234" {...measure} />

      <text x={20} y={176} {...label}>
        a. vertebral
      </text>
      <path d="M 76 172 L 156 174" {...measure} />
      <text x={20} y={296} {...label}>
        medula
      </text>
      <path d="M 62 292 L 210 228" {...measure} />

      <text x={20} y={324} {...label}>
        A divergência lateral afasta o parafuso da artéria vertebral; a angulação cranial poupa a raiz.
      </text>
    </svg>
  );
};

/* ========================================================================= */

export const figures: Record<string, FC<FigureProps>> = {
  "trauma-cervical-subaxial:anatomia": Anatomia,
  "trauma-cervical-subaxial:slic": Slic,
  "trauma-cervical-subaxial:aospine": AoSpine,
  "trauma-cervical-subaxial:luxacao-facetaria": LuxacaoFacetaria,
  "trauma-cervical-subaxial:rm-pre-reducao": RmPreReducao,
  "trauma-cervical-subaxial:via-anterior": ViaAnterior,
  "trauma-cervical-subaxial:acdf": Acdf,
  "trauma-cervical-subaxial:via-posterior": ViaPosterior,
};
