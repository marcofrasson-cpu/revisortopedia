import type { FC, ReactNode } from "react";
import type { FigureProps } from "../../../types/topic";

/* ============================================================================
   Figuras esquemáticas originais — Hérnia cervical e radiculopatia.
   Line-art de dois tons, desenho próprio, sem reprodução de material
   protegido. Referência editorial: Rockwood and Green's Fractures in Adults,
   10a ed. (2024) / Campbell's Operative Orthopaedics 14a.
   Cores exclusivamente via variáveis CSS.
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
  strokeWidth: 1.3,
  strokeLinejoin: "round" as const,
};

const boneThin = {
  fill: "none",
  stroke: "var(--ink-soft)",
  strokeWidth: 1.2,
  strokeLinecap: "round" as const,
};

const boneDash = {
  fill: "none",
  stroke: "var(--ink-soft)",
  strokeWidth: 1.2,
  strokeDasharray: "4 3",
  strokeLinecap: "round" as const,
};

const discStyle = {
  fill: "var(--teal)",
  fillOpacity: 0.18,
  stroke: "var(--teal)",
  strokeWidth: 1.5,
  strokeLinejoin: "round" as const,
};

const cordStyle = {
  fill: "var(--teal)",
  fillOpacity: 0.16,
  stroke: "var(--teal)",
  strokeWidth: 1.7,
  strokeLinejoin: "round" as const,
};

const grayMatter = {
  fill: "var(--teal)",
  fillOpacity: 0.42,
  stroke: "var(--teal)",
  strokeWidth: 1.1,
  strokeLinejoin: "round" as const,
};

const rootLine = {
  fill: "none",
  stroke: "var(--teal)",
  strokeWidth: 3.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const rootPinched = {
  fill: "none",
  stroke: "var(--cortical)",
  strokeWidth: 3.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const lesion = {
  fill: "var(--cortical)",
  fillOpacity: 0.22,
  stroke: "var(--cortical)",
  strokeWidth: 1.9,
  strokeLinejoin: "round" as const,
};

const implant = {
  fill: "var(--cortical)",
  fillOpacity: 0.16,
  stroke: "var(--cortical)",
  strokeWidth: 1.8,
  strokeLinejoin: "round" as const,
};

const measure = {
  fill: "none",
  stroke: "var(--amber)",
  strokeWidth: 1.5,
  strokeDasharray: "5 4",
  strokeLinecap: "round" as const,
};

const measureSolid = {
  fill: "none",
  stroke: "var(--amber)",
  strokeWidth: 1.9,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const amberFill = {
  fill: "var(--amber)",
  fillOpacity: 0.9,
  stroke: "none",
};

const skin = {
  fill: "var(--surface)",
  stroke: "var(--ink-soft)",
  strokeWidth: 1.6,
  strokeLinejoin: "round" as const,
};

const derm = {
  fill: "var(--teal)",
  fillOpacity: 0.3,
  stroke: "var(--teal)",
  strokeWidth: 1.5,
  strokeLinejoin: "round" as const,
};

const label = {
  fill: "var(--muted)",
  fontFamily: "var(--font-body, sans-serif)",
  fontSize: 11,
};

const amberText = {
  fill: "var(--amber)",
  fontFamily: "var(--font-body, sans-serif)",
  fontSize: 11,
};

function Frame({
  viewBox,
  title,
  className,
  children,
}: {
  viewBox: string;
  title: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <svg
      viewBox={viewBox}
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      {children}
    </svg>
  );
}

/** Seta reta simples (sem <marker>, para portabilidade). */
function Arrow({
  x1,
  y1,
  x2,
  y2,
  amber = false,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  amber?: boolean;
}) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.hypot(dx, dy) || 1;
  const ux = dx / len;
  const uy = dy / len;
  const px = -uy;
  const py = ux;
  const h = 8;
  const w = 4.4;
  const bx = x2 - ux * h;
  const by = y2 - uy * h;
  const stroke = amber ? "var(--amber)" : "var(--ink-soft)";
  return (
    <>
      <line
        x1={x1}
        y1={y1}
        x2={bx}
        y2={by}
        stroke={stroke}
        strokeWidth={1.8}
        strokeLinecap="round"
      />
      <path
        d={`M ${x2} ${y2} L ${bx + px * w} ${by + py * w} L ${bx - px * w} ${by - py * w} Z`}
        fill={stroke}
      />
    </>
  );
}

/* ===========================================================================
   BLOCO 1 — Vértebra cervical em PERFIL (anterior à esquerda).
   Corpo, úncus, pedículo, massa lateral com facetas, lâmina e processo
   espinhoso. O disco é desenhado abaixo do corpo; o passo vertical entre
   vértebras é de 58 unidades (44 de corpo + 14 de disco).
   ========================================================================= */

function VertebraPerfil({
  ty,
  disc = true,
  b = bone,
}: {
  ty: number;
  disc?: boolean;
  b?: typeof bone;
}) {
  return (
    <g transform={`translate(0 ${ty})`}>
      {/* corpo vertebral */}
      <path
        d="M 62 0 L 138 0 Q 143 0 143 5 L 143 39 Q 143 44 138 44 L 62 44 Q 56 44 57 22 Q 56 0 62 0 Z"
        {...b}
      />
      {/* processo uncinado (úncus) — lábio posterolateral que sobe da placa superior */}
      <path d="M 132 0 L 136 -9 Q 140 -12 143 -8 L 143 0 Z" {...b} />
      {/* pedículo */}
      <path d="M 143 12 L 174 14 Q 179 22 174 30 L 143 32 Z" {...b} />
      {/* massa lateral — faceta superior */}
      <path d="M 166 6 L 171 -10 Q 178 -14 185 -9 L 188 6 Q 177 12 166 6 Z" {...boneBack} />
      {/* massa lateral — faceta inferior */}
      <path d="M 168 32 L 188 36 L 186 52 Q 179 57 172 52 Z" {...boneBack} />
      {/* lâmina + processo espinhoso */}
      <path d="M 175 15 L 206 24 L 248 33 L 250 42 L 206 38 L 176 30 Z" {...b} />
      {/* disco intervertebral */}
      {disc ? (
        <path d="M 60 44 L 143 44 L 143 58 L 60 58 Q 54 51 60 44 Z" {...discStyle} />
      ) : null}
    </g>
  );
}

/** Segmento cervical de perfil com medula, forames e raízes. */
function PerfilBase() {
  return (
    <>
      <VertebraPerfil ty={30} />
      <VertebraPerfil ty={88} />
      <VertebraPerfil ty={146} />

      {/* canal vertebral — contorno posterior aos corpos */}
      <path d="M 143 26 L 143 236" {...boneDash} />
      <path d="M 178 26 L 178 236" {...boneDash} />

      {/* medula espinal dentro do canal */}
      <rect x={148} y={24} width={26} height={214} rx={13} {...cordStyle} />

      {/* forames intervertebrais (janelas entre os pedículos) */}
      <ellipse cx={161} cy={81} rx={13} ry={17} {...boneThin} fill="var(--surface)" />
      <ellipse cx={161} cy={139} rx={13} ry={17} {...boneThin} fill="var(--surface)" />

      {/* raízes atravessando os forames */}
      <path d="M 168 76 C 180 78 190 84 204 90" {...rootLine} />
      <path d="M 168 134 C 180 136 190 142 204 148" {...rootLine} />
    </>
  );
}

/* ===========================================================================
   BLOCO 2 — Vértebra cervical em corte AXIAL (anterior em cima).
   Metade esquerda desenhada uma vez e espelhada em torno de x = 200.
   ========================================================================= */

function AxialMetade() {
  return (
    <>
      {/* processo uncinado — lábio lateral que sobe da placa superior */}
      <path d="M 124 104 Q 111 98 114 79 L 127 82 Q 127 95 135 102 Z" {...bone} />
      {/* pedículo */}
      <path d="M 128 100 L 106 128 L 124 143 L 145 113 Z" {...bone} />
      {/* processo transverso com forame transversário */}
      <path d="M 119 104 Q 92 95 78 110 Q 67 125 84 133 L 117 135 Q 125 120 119 104 Z" {...boneBack} />
      <circle cx={96} cy={114} r={11} {...boneThin} fill="var(--surface)" />
      {/* massa lateral / processos articulares */}
      <path d="M 108 140 Q 87 158 100 181 L 131 175 Q 139 156 127 142 Z" {...boneBack} />
      {/* lâmina */}
      <path d="M 112 175 L 181 231 L 193 220 L 129 164 Z" {...bone} />
      {/* ligamento amarelo — face interna da lâmina */}
      <path d="M 131 169 L 194 224" {...boneDash} />
    </>
  );
}

function AxialBase({ showRoots = true }: { showRoots?: boolean }) {
  return (
    <>
      {/* corpo vertebral / disco — parede posterior côncava para trás */}
      <path d="M 124 104 Q 122 55 200 51 Q 278 55 276 104 Q 200 90 124 104 Z" {...bone} />

      {/* metade esquerda + espelho */}
      <AxialMetade />
      <g transform="translate(400 0) scale(-1 1)">
        <AxialMetade />
      </g>

      {/* processo espinhoso bífido */}
      <path
        d="M 179 229 L 221 229 L 215 258 Q 208 268 202 257 L 200 248 L 198 257 Q 192 268 185 258 Z"
        {...bone}
      />

      {/* medula espinal */}
      <ellipse cx={200} cy={170} rx={42} ry={30} {...cordStyle} />
      {/* substância cinzenta em borboleta */}
      <path
        d="M 182 154 Q 172 163 178 173 Q 171 185 185 187 Q 194 179 200 170 Q 206 179 215 187 Q 229 185 222 173 Q 228 163 218 154 Q 206 163 200 169 Q 194 163 182 154 Z"
        {...grayMatter}
      />

      {/* raízes saindo anterolateralmente, posteriores à artéria vertebral */}
      {showRoots ? (
        <>
          <path d="M 172 149 C 152 141 128 137 98 139 L 62 143" {...rootLine} />
          <path d="M 228 149 C 248 141 272 137 302 139 L 338 143" {...rootLine} />
        </>
      ) : null}
    </>
  );
}

/* ===========================================================================
   FIGURA 1 — Anatomia (perfil | axial)
   ========================================================================= */

const Anatomia: FC<FigureProps> = ({ variant = "perfil", className, title }) => {
  const axial = variant === "axial";

  if (axial) {
    return (
      <Frame
        viewBox="0 0 400 300"
        title={
          title ??
          "Corte axial de vértebra cervical: corpo, processos uncinados, forame transversário, canal, medula e raízes"
        }
        className={className}
      >
        <AxialBase />
        <text x={188} y={40} {...label}>
          anterior
        </text>
        <text x={8} y={70} {...label}>
          corpo / disco
        </text>
        <path d="M 66 74 L 120 88" {...boneThin} />
        <text x={8} y={100} {...label}>
          úncus
        </text>
        <path d="M 40 104 L 110 92" {...boneThin} />
        <text x={8} y={130} {...label}>
          forame transversário
        </text>
        <text x={8} y={143} {...label}>
          (artéria vertebral)
        </text>
        <path d="M 60 134 L 86 118" {...boneThin} />
        <text x={288} y={160} {...label}>
          raiz — passa
        </text>
        <text x={288} y={173} {...label}>
          atrás da artéria
        </text>
        <text x={288} y={200} {...label}>
          medula
        </text>
        <path d="M 300 194 L 244 176" {...boneThin} />
        <text x={8} y={196} {...label}>
          massa lateral
        </text>
        <path d="M 66 200 L 100 168" {...boneThin} />
        <text x={8} y={250} {...label}>
          lâmina
        </text>
        <path d="M 44 254 L 140 200" {...boneThin} />
        <text x={240} y={266} {...label}>
          espinhoso bífido
        </text>
        <text x={168} y={290} {...label}>
          posterior
        </text>
      </Frame>
    );
  }

  return (
    <Frame
      viewBox="0 0 400 280"
      title={
        title ??
        "Segmento cervical em perfil: corpos, discos, canal vertebral com a medula e forames com as raízes"
      }
      className={className}
    >
      <PerfilBase />
      <text x={6} y={20} {...label}>
        anterior
      </text>
      <text x={310} y={20} {...label}>
        posterior
      </text>
      <text x={6} y={58} {...label}>
        corpo vertebral
      </text>
      <path d="M 78 62 L 96 62" {...boneThin} />
      <text x={6} y={110} {...label}>
        disco
      </text>
      <path d="M 40 114 L 82 108" {...boneThin} />
      <text x={6} y={150} {...label}>
        úncus (articulação
      </text>
      <text x={6} y={163} {...label}>
        uncovertebral)
      </text>
      <path d="M 92 154 L 132 142" {...boneThin} />
      <text x={214} y={82} {...label}>
        raiz no forame
      </text>
      <text x={214} y={95} {...label}>
        (trajeto oblíquo, ~45°)
      </text>
      <text x={214} y={148} {...label}>
        forame intervertebral
      </text>
      <text x={110} y={264} {...label}>
        medula espinal
      </text>
      <path d="M 158 252 L 160 238" {...boneThin} />
      <text x={244} y={200} {...label}>
        processo espinhoso
      </text>
      <text x={244} y={238} {...label}>
        massa lateral / facetas
      </text>
      <path d="M 242 234 L 196 208" {...boneThin} />
    </Frame>
  );
};

/* ===========================================================================
   FIGURA 2 — Padrões de compressão no plano axial
   variantes: posterolateral (padrão) | central | foraminal
   ========================================================================= */

const TiposHernia: FC<FigureProps> = ({ variant = "posterolateral", className, title }) => {
  const v = variant === "central" || variant === "foraminal" ? variant : "posterolateral";

  const titles: Record<string, string> = {
    posterolateral:
      "Hérnia posterolateral (paracentral): compressão da raiz na sua emergência — radiculopatia",
    central: "Hérnia central: compressão da medula na linha média — mielopatia",
    foraminal:
      "Estenose foraminal por osteófito uncovertebral (espondilose): raiz comprimida dentro do forame",
  };

  const legendas: Record<string, string> = {
    posterolateral: "Hérnia mole posterolateral — comprime a raiz, poupa a medula",
    central: "Hérnia central — comprime a medula: procure mielopatia, não radiculopatia",
    foraminal: "Osteófito uncovertebral — hérnia dura: estreita o forame progressivamente",
  };

  return (
    <Frame viewBox="0 0 400 300" title={title ?? titles[v]} className={className}>
      <AxialBase showRoots={false} />

      {/* raízes de base (a acometida é redesenhada em cortical) */}
      <path d="M 228 149 C 248 141 272 137 302 139 L 338 143" {...rootLine} />
      {v === "central" ? (
        <path d="M 172 149 C 152 141 128 137 98 139 L 62 143" {...rootLine} />
      ) : (
        <path d="M 172 149 C 152 141 128 137 98 139 L 62 143" {...rootPinched} />
      )}

      {v === "posterolateral" ? (
        <>
          <path d="M 152 100 Q 170 116 178 140 Q 158 150 146 132 Q 137 114 140 100 Z" {...lesion} />
          <Arrow x1={112} y1={214} x2={150} y2={150} amber />
          <text x={30} y={232} {...amberText}>
            raiz comprimida no ombro
          </text>
          <text x={30} y={245} {...amberText}>
            da sua emergência
          </text>
        </>
      ) : null}

      {v === "central" ? (
        <>
          <path d="M 170 97 Q 200 89 230 97 Q 226 128 200 133 Q 174 128 170 97 Z" {...lesion} />
          <Arrow x1={310} y1={214} x2={236} y2={140} amber />
          <text x={252} y={232} {...amberText}>
            medula comprimida
          </text>
          <text x={252} y={245} {...amberText}>
            → mielopatia
          </text>
        </>
      ) : null}

      {v === "foraminal" ? (
        <>
          <path d="M 114 79 Q 100 92 103 112 L 122 118 Q 128 96 127 82 Z" {...lesion} />
          <ellipse cx={112} cy={132} rx={22} ry={13} {...measure} />
          <Arrow x1={70} y1={214} x2={106} y2={150} amber />
          <text x={22} y={232} {...amberText}>
            forame estreitado pelo
          </text>
          <text x={22} y={245} {...amberText}>
            osteófito uncovertebral
          </text>
        </>
      ) : null}

      <text x={8} y={20} {...label}>
        anterior
      </text>
      <text x={8} y={290} {...label}>
        {legendas[v]}
      </text>
    </Frame>
  );
};

/* ===========================================================================
   FIGURA 3 — Teste de Spurling
   ========================================================================= */

/** Cabeça, pescoço e tronco em vista posterior, com a coluna cervical. */
function CabecaPescoco() {
  return (
    <>
      <circle cx={70} cy={54} r={32} {...skin} />
      <path d="M 52 84 L 52 148" {...skin} />
      <path d="M 88 84 L 88 148" {...skin} />
      <rect x={60} y={92} width={20} height={12} rx={3} {...bone} />
      <rect x={60} y={108} width={20} height={12} rx={3} {...bone} />
      <rect x={60} y={124} width={20} height={12} rx={3} {...bone} />
      <rect x={60} y={140} width={20} height={12} rx={3} {...bone} />
    </>
  );
}

const Spurling: FC<FigureProps> = ({ className, title }) => (
  <Frame
    viewBox="0 0 440 300"
    title={
      title ??
      "Teste de Spurling: extensão com rotação e inclinação para o lado sintomático mais compressão axial fecham o forame e reproduzem a dor radicular"
    }
    className={className}
  >
    {/* ---------------- Painel A — neutro ---------------- */}
    <g>
      <CabecaPescoco />
      <path d="M 8 150 Q 70 136 132 150 L 140 200 L 0 200 Z" {...skin} />
      {/* forame ampliado — janela de detalhe */}
      <circle cx={166} cy={92} r={34} {...boneThin} fill="var(--surface)" />
      <path d="M 96 108 L 134 98" {...boneDash} />
      <ellipse cx={166} cy={92} rx={13} ry={19} {...discStyle} />
      <path d="M 166 92 L 190 100" {...rootLine} />
      <text x={6} y={228} {...label}>
        A — Neutro
      </text>
      <text x={6} y={246} {...label}>
        Forame amplo, raiz livre.
      </text>
    </g>

    {/* ---------------- Painel B — Spurling ---------------- */}
    <g transform="translate(230 0)">
      <g transform="rotate(-17 70 150)">
        <CabecaPescoco />
        {/* seta de compressão axial no vértice */}
        <g>
          <path d="M 70 -6 L 70 12" stroke="var(--amber)" strokeWidth={2.4} strokeLinecap="round" />
          <path d="M 70 22 L 63 8 L 77 8 Z" {...amberFill} />
        </g>
      </g>
      <path d="M 8 150 Q 70 136 132 150 L 140 200 L 0 200 Z" {...skin} />
      {/* seta curva de rotação */}
      <path d="M 108 40 A 44 44 0 0 1 132 76" {...measureSolid} />
      <path d="M 132 86 L 125 71 L 139 72 Z" {...amberFill} />

      {/* forame fechado — janela de detalhe */}
      <circle cx={172} cy={92} r={34} {...boneThin} fill="var(--surface)" />
      <path d="M 104 104 L 140 96" {...boneDash} />
      <ellipse cx={172} cy={92} rx={7} ry={11} {...lesion} />
      <path d="M 172 92 L 196 100" {...rootPinched} />
      <text x={6} y={228} {...amberText}>
        B — Spurling
      </text>
      <text x={6} y={246} {...label}>
        Extensão + rotação/inclinação para o
      </text>
      <text x={6} y={260} {...label}>
        lado sintomático + compressão axial.
      </text>
      <text x={6} y={274} {...label}>
        Positivo só se reproduzir a dor no braço.
      </text>
    </g>
  </Frame>
);

/* ===========================================================================
   FIGURA 4 — Sinal do alívio pela abdução do ombro
   ========================================================================= */

const AlivioAbducao: FC<FigureProps> = ({ className, title }) => (
  <Frame
    viewBox="0 0 440 320"
    title={
      title ??
      "Sinal do alívio pela abdução do ombro: com a mão sobre a cabeça a raiz relaxa e a dor cede"
    }
    className={className}
  >
    {/* ---------------- Painel A — braço ao lado ---------------- */}
    <g>
      <circle cx={64} cy={44} r={26} {...skin} />
      <path d="M 52 68 L 52 100" {...skin} />
      <path d="M 76 68 L 76 100" {...skin} />
      <path d="M 16 108 Q 64 96 112 108 L 118 240 L 12 240 Z" {...skin} />
      {/* braço pendente */}
      <path d="M 106 112 L 130 114 L 142 232 L 118 234 Z" {...skin} />
      <path d="M 118 234 L 142 232 L 150 292 L 128 294 Z" {...skin} />
      {/* raiz tensa */}
      <path d="M 82 96 L 116 128 L 128 210" {...rootPinched} />
      <path d="M 108 128 L 122 118" {...measureSolid} />
      <path d="M 116 168 L 132 164" {...measureSolid} />
      <path d="M 120 200 L 136 196" {...measureSolid} />
      <text x={150} y={140} {...amberText}>
        raiz tensa
      </text>
      <text x={6} y={266} {...label}>
        A — Braço ao lado
      </text>
      <text x={6} y={284} {...label}>
        Raiz tracionada: dor no braço.
      </text>
    </g>

    {/* ---------------- Painel B — mão sobre a cabeça ---------------- */}
    <g transform="translate(230 0)">
      <circle cx={64} cy={44} r={26} {...skin} />
      <path d="M 52 68 L 52 100" {...skin} />
      <path d="M 76 68 L 76 100" {...skin} />
      <path d="M 16 108 Q 64 96 112 108 L 118 240 L 12 240 Z" {...skin} />
      {/* braço abduzido, cotovelo fletido, mão sobre a cabeça */}
      <path d="M 104 112 L 118 96 L 176 128 L 166 148 Z" {...skin} />
      <path d="M 176 128 L 166 148 L 96 78 L 110 62 Z" {...skin} />
      <path d="M 110 62 L 96 78 L 66 54 L 80 38 Z" {...skin} />
      {/* raiz frouxa */}
      <path d="M 82 96 C 94 112 100 122 112 128 C 122 136 124 144 122 154" {...rootLine} />
      <path d="M 132 168 A 26 26 0 0 1 150 150" {...measure} />
      <text x={128} y={186} {...amberText}>
        raiz relaxada
      </text>
      <text x={6} y={266} {...label}>
        B — Mão sobre a cabeça
      </text>
      <text x={6} y={284} {...label}>
        Alívio → sinal positivo, compressão radicular.
      </text>
    </g>
  </Frame>
);

/* ===========================================================================
   FIGURA 5 — Mapa de raízes C5–C8
   variantes: C5 | C6 (padrão) | C7 | C8
   ========================================================================= */

const raizInfo: Record<string, { motor: string; reflexo: string; sensitivo: string; disco: string }> =
  {
    C5: {
      motor: "Deltoide, supraespinal (abdução do ombro)",
      reflexo: "Bicipital (parcial)",
      sensitivo: "Ombro lateral e braço proximal",
      disco: "Disco C4-C5",
    },
    C6: {
      motor: "Bíceps, braquiorradial, extensores do punho",
      reflexo: "Braquiorradial e bicipital",
      sensitivo: "Antebraço radial, polegar e indicador",
      disco: "Disco C5-C6",
    },
    C7: {
      motor: "Tríceps, flexores do punho, extensores dos dedos",
      reflexo: "Tricipital",
      sensitivo: "Dedo médio e face posterior do antebraço",
      disco: "Disco C6-C7 (a raiz mais acometida)",
    },
    C8: {
      motor: "Flexores profundos dos dedos, intrínsecos da mão",
      reflexo: "Nenhum reflexo confiável",
      sensitivo: "Borda ulnar, anular e mínimo",
      disco: "Disco C7-T1",
    },
  };

const MapaRaizes: FC<FigureProps> = ({ variant = "C6", className, title }) => {
  const v = variant in raizInfo ? variant : "C6";
  const info = raizInfo[v];

  return (
    <Frame
      viewBox="0 0 360 380"
      title={title ?? `Raiz ${v}: território sensitivo, miótomo e reflexo`}
      className={className}
    >
      {/* tronco */}
      <path d="M 0 26 L 52 26 Q 84 32 92 66 L 92 330 L 0 330 Z" {...skin} />
      {/* braço em posição anatômica, palma para o observador */}
      <path d="M 74 46 L 100 40 L 168 138 L 144 158 Z" {...skin} />
      <path d="M 144 158 L 168 138 L 214 244 L 188 254 Z" {...skin} />

      {/* mão — eixo do membro a ~72° da horizontal */}
      <g transform="translate(201 249) rotate(18)">
        <path d="M -26 0 L 26 0 Q 30 0 30 6 L 30 42 Q 30 48 24 48 L -24 48 Q -30 48 -30 42 L -30 6 Q -30 0 -26 0 Z" {...skin} />
        {/* polegar (lado radial = +x) */}
        <path d="M 28 6 Q 46 12 50 30 Q 51 40 42 40 Q 34 36 30 22 Z" {...skin} />
        {/* indicador, médio, anular, mínimo */}
        <rect x={13} y={46} width={12} height={38} rx={5.5} {...skin} />
        <rect x={0} y={46} width={12} height={42} rx={5.5} {...skin} />
        <rect x={-13} y={46} width={12} height={39} rx={5.5} {...skin} />
        <rect x={-26} y={46} width={12} height={30} rx={5.5} {...skin} />

        {/* dermátomos da mão */}
        {v === "C6" ? (
          <>
            <path d="M 28 6 Q 46 12 50 30 Q 51 40 42 40 Q 34 36 30 22 Z" {...derm} />
            <rect x={13} y={46} width={12} height={38} rx={5.5} {...derm} />
          </>
        ) : null}
        {v === "C7" ? (
          <>
            <rect x={0} y={46} width={12} height={42} rx={5.5} {...derm} />
            <path d="M -8 0 L 12 0 L 12 44 L -8 44 Z" {...derm} />
          </>
        ) : null}
        {v === "C8" ? (
          <>
            <rect x={-13} y={46} width={12} height={39} rx={5.5} {...derm} />
            <rect x={-26} y={46} width={12} height={30} rx={5.5} {...derm} />
            <path d="M -30 6 Q -30 0 -26 0 L -14 0 L -14 46 L -30 42 Z" {...derm} />
          </>
        ) : null}
      </g>

      {/* dermátomos proximais */}
      {v === "C5" ? (
        <path d="M 78 44 L 100 40 L 132 88 L 108 104 Z" {...derm} />
      ) : null}
      {v === "C6" ? (
        <path d="M 168 138 L 214 244 L 200 249 L 152 146 Z" {...derm} />
      ) : null}
      {v === "C8" ? (
        <path d="M 144 158 L 158 152 L 200 252 L 188 254 Z" {...derm} />
      ) : null}

      {/* origem radicular no pescoço */}
      <circle cx={44} cy={64} r={13} {...cordStyle} />
      <path d="M 56 68 L 82 52" {...rootLine} />
      <text x={26} y={22} {...amberText}>
        Raiz {v} — {info.disco}
      </text>

      <text x={220} y={60} {...label}>
        Motor
      </text>
      <text x={220} y={76} {...label}>
        {info.motor.length > 34 ? info.motor.slice(0, 34) : info.motor}
      </text>
      <text x={220} y={90} {...label}>
        {info.motor.length > 34 ? info.motor.slice(34) : ""}
      </text>
      <text x={220} y={120} {...label}>
        Reflexo
      </text>
      <text x={220} y={136} {...label}>
        {info.reflexo}
      </text>
      <text x={220} y={166} {...label}>
        Sensitivo
      </text>
      <text x={220} y={182} {...label}>
        {info.sensitivo.length > 30 ? info.sensitivo.slice(0, 30) : info.sensitivo}
      </text>
      <text x={220} y={196} {...label}>
        {info.sensitivo.length > 30 ? info.sensitivo.slice(30) : ""}
      </text>
      <text x={8} y={360} {...label}>
        A raiz sai ACIMA do pedículo de mesmo número até C7; C8 sai entre C7 e T1.
      </text>
      <text x={8} y={374} {...label}>
        Por isso o disco C5-C6 comprime a raiz C6, e o disco C6-C7 comprime a C7.
      </text>
    </Frame>
  );
};

/* ===========================================================================
   FIGURA 6 — Opções cirúrgicas
   variantes: acdf (padrão) | artroplastia | foraminotomia
   ========================================================================= */

const OpcoesCirurgicas: FC<FigureProps> = ({ variant = "acdf", className, title }) => {
  const v = variant === "artroplastia" || variant === "foraminotomia" ? variant : "acdf";

  const titles: Record<string, string> = {
    acdf: "ACDF: discectomia anterior, enxerto/dispositivo intersomático e placa — o segmento funde",
    artroplastia:
      "Artroplastia de disco cervical: prótese no lugar do disco, preservando o movimento do segmento",
    foraminotomia:
      "Foraminotomia cervical posterior: ressecção da junção lâmina-faceta que abre o forame sem tocar no disco",
  };

  return (
    <Frame viewBox="0 0 400 280" title={title ?? titles[v]} className={className}>
      {/* duas vértebras; o disco entre elas é omitido e substituído conforme a variante */}
      <VertebraPerfil ty={30} disc={v === "foraminotomia"} />
      <VertebraPerfil ty={88} disc />

      {/* canal e medula */}
      <rect x={148} y={24} width={26} height={156} rx={13} {...cordStyle} />

      {/* forame e raiz */}
      {v === "foraminotomia" ? (
        <>
          <ellipse cx={161} cy={81} rx={19} ry={23} {...boneThin} fill="var(--surface)" />
          <path d="M 168 76 C 182 78 192 84 208 90" {...rootLine} />
          {/* zona de ressecção óssea na junção lâmina-faceta */}
          <path d="M 172 58 Q 196 62 200 86 Q 200 108 176 110" {...measure} />
          <text x={206} y={58} {...amberText}>
            ressecção da junção
          </text>
          <text x={206} y={71} {...amberText}>
            lâmina-faceta (&lt; 50%
          </text>
          <text x={206} y={84} {...amberText}>
            da faceta)
          </text>
          <text x={206} y={120} {...label}>
            disco preservado
          </text>
          <text x={206} y={134} {...label}>
            segmento continua móvel
          </text>
          <Arrow x1={116} y1={200} x2={150} y2={106} amber />
          <text x={40} y={218} {...label}>
            raiz descomprimida no forame
          </text>
        </>
      ) : (
        <>
          <ellipse cx={161} cy={81} rx={13} ry={17} {...boneThin} fill="var(--surface)" />
          <path d="M 168 76 C 180 78 190 84 204 90" {...rootLine} />
        </>
      )}

      {v === "acdf" ? (
        <>
          {/* cage / enxerto no espaço discal */}
          <rect x={66} y={74} width={72} height={14} rx={3} {...implant} />
          <path d="M 78 74 L 78 88 M 92 74 L 92 88 M 106 74 L 106 88 M 120 74 L 120 88" stroke="var(--cortical)" strokeWidth={1.1} />
          {/* placa anterior + parafusos */}
          <rect x={44} y={40} width={10} height={92} rx={4} {...implant} />
          <path d="M 52 52 L 84 58" stroke="var(--cortical)" strokeWidth={3} strokeLinecap="round" />
          <path d="M 52 66 L 84 62" stroke="var(--cortical)" strokeWidth={3} strokeLinecap="round" />
          <path d="M 52 106 L 84 102" stroke="var(--cortical)" strokeWidth={3} strokeLinecap="round" />
          <path d="M 52 120 L 84 124" stroke="var(--cortical)" strokeWidth={3} strokeLinecap="round" />
          <text x={206} y={140} {...label}>
            enxerto/dispositivo + placa
          </text>
          <text x={206} y={154} {...label}>
            o segmento perde o movimento
          </text>
          <Arrow x1={200} y1={148} x2={144} y2={84} />
          <text x={8} y={158} {...label}>
            via anterior
          </text>
          <text x={8} y={171} {...label}>
            de Smith-Robinson
          </text>
          <text x={8} y={246} {...amberText}>
            Trata disco mole e osteófito, central ou foraminal, e corrige a lordose.
          </text>
          <text x={8} y={262} {...amberText}>
            Preço: artrodese do segmento.
          </text>
        </>
      ) : null}

      {v === "artroplastia" ? (
        <>
          {/* placas da prótese + núcleo móvel */}
          <rect x={66} y={72} width={72} height={6} rx={2} {...implant} />
          <rect x={66} y={84} width={72} height={6} rx={2} {...implant} />
          <ellipse cx={102} cy={81} rx={16} ry={5} {...implant} />
          {/* arco de movimento */}
          <path d="M 62 60 A 46 46 0 0 0 62 102" {...measure} />
          <path d="M 62 54 L 55 66 L 69 67 Z" {...amberFill} />
          <path d="M 62 108 L 55 96 L 69 95 Z" {...amberFill} />
          <text x={206} y={140} {...label}>
            prótese: dois pratos + núcleo
          </text>
          <text x={206} y={154} {...label}>
            o segmento mantém o movimento
          </text>
          <Arrow x1={200} y1={148} x2={144} y2={84} />
          <text x={8} y={158} {...label}>
            via anterior
          </text>
          <text x={8} y={171} {...label}>
            de Smith-Robinson
          </text>
          <text x={8} y={246} {...amberText}>
            Exige lordose preservada, sem artrose facetária e sem instabilidade.
          </text>
          <text x={8} y={262} {...amberText}>
            Risco tardio: ossificação heterotópica devora o movimento.
          </text>
        </>
      ) : null}

      {v === "foraminotomia" ? (
        <>
          <text x={8} y={246} {...amberText}>
            Ideal na hérnia/estenose foraminal unilateral de um nível.
          </text>
          <text x={8} y={262} {...amberText}>
            Não trata compressão central nem corrige a lordose.
          </text>
        </>
      ) : null}

      <text x={6} y={20} {...label}>
        anterior
      </text>
      <text x={310} y={20} {...label}>
        posterior
      </text>
    </Frame>
  );
};

/* ===========================================================================
   FIGURA 7 — Algoritmo de conduta (honra activeStep)
   ========================================================================= */

const passos: { n: number; l1: string; l2: string }[] = [
  { n: 1, l1: "Caracterizar a dor radicular e mapear a raiz", l2: "C5 · C6 · C7 · C8 — motor, sensitivo, reflexo" },
  { n: 2, l1: "Provas de provocação e de alívio", l2: "Spurling, alívio pela abdução, tração; excluir imitadores" },
  { n: 3, l1: "Rastrear mielopatia e bandeiras vermelhas", l2: "Se presentes, a rota conservadora não se aplica" },
  { n: 4, l1: "Conservador estruturado por 6 a 12 semanas", l2: "Analgesia, fisioterapia, retorno precoce à atividade" },
  { n: 5, l1: "Persistiu? RM correlacionada ao nível clínico", l2: "Achado sem correlação clínica não opera" },
  { n: 6, l1: "Bloqueio radicular seletivo", l2: "Confirma o nível e pode resolver o episódio" },
  { n: 7, l1: "Cirurgia — escolher a via", l2: "ACDF × artroplastia × foraminotomia posterior" },
];

const Algoritmo: FC<FigureProps> = ({ activeStep, className, title }) => {
  const boxY = (i: number) => 16 + i * 58;

  return (
    <Frame
      viewBox="0 0 470 448"
      title={title ?? "Algoritmo de conduta na radiculopatia cervical"}
      className={className}
    >
      {passos.map((p, i) => {
        const y = boxY(i);
        const on = activeStep === p.n;
        return (
          <g key={p.n}>
            {i > 0 ? <Arrow x1={160} y1={y - 14} x2={160} y2={y - 2} /> : null}
            <rect
              x={20}
              y={y}
              width={280}
              height={44}
              rx={7}
              fill={on ? "var(--amber)" : "var(--surface)"}
              fillOpacity={on ? 0.14 : 1}
              stroke={on ? "var(--amber)" : "var(--ink-soft)"}
              strokeWidth={on ? 2.4 : 1.4}
            />
            <circle
              cx={40}
              cy={y + 22}
              r={11}
              fill="var(--surface)"
              stroke={on ? "var(--amber)" : "var(--ink-soft)"}
              strokeWidth={1.4}
            />
            <text
              x={40}
              y={y + 26}
              textAnchor="middle"
              fill={on ? "var(--amber)" : "var(--muted)"}
              fontFamily="var(--font-body, sans-serif)"
              fontSize={11}
            >
              {p.n}
            </text>
            <text x={58} y={y + 19} {...(on ? amberText : label)}>
              {p.l1}
            </text>
            <text x={58} y={y + 34} {...label}>
              {p.l2}
            </text>
          </g>
        );
      })}

      {/* ramo de exceção — sai do passo 3 */}
      <path d={`M 300 ${boxY(2) + 22} L 322 ${boxY(2) + 22}`} {...measure} />
      <Arrow x1={322} y1={boxY(2) + 22} x2={334} y2={boxY(2) + 22} amber />
      <rect
        x={336}
        y={boxY(2) - 8}
        width={126}
        height={60}
        rx={7}
        fill="var(--amber)"
        fillOpacity={0.12}
        stroke="var(--amber)"
        strokeWidth={1.6}
      />
      <text x={344} y={boxY(2) + 8} {...amberText}>
        Mielopatia, déficit
      </text>
      <text x={344} y={boxY(2) + 22} {...amberText}>
        motor progressivo,
      </text>
      <text x={344} y={boxY(2) + 36} {...amberText}>
        tumor ou infecção:
      </text>
      <text x={344} y={boxY(2) + 50} {...amberText}>
        RM já, cirurgia já.
      </text>
      <path
        d={`M 399 ${boxY(2) + 56} L 399 ${boxY(6) + 22} L 306 ${boxY(6) + 22}`}
        {...measure}
      />
      <Arrow x1={314} y1={boxY(6) + 22} x2={302} y2={boxY(6) + 22} amber />

      {/* saída de melhora — do passo 4 */}
      <path d={`M 20 ${boxY(3) + 22} L 8 ${boxY(3) + 22} L 8 ${boxY(3) + 74}`} {...boneDash} />
      <text x={6} y={boxY(3) + 92} {...label}>
        Melhorou? Alta. É o desfecho
      </text>
      <text x={6} y={boxY(3) + 106} {...label}>
        da maioria — e é o esperado.
      </text>
    </Frame>
  );
};

/* ========================================================================= */

export const figures: Record<string, FC<FigureProps>> = {
  "hernia-cervical-radiculopatia:anatomia": Anatomia,
  "hernia-cervical-radiculopatia:tipos-hernia": TiposHernia,
  "hernia-cervical-radiculopatia:spurling": Spurling,
  "hernia-cervical-radiculopatia:alivio-abducao": AlivioAbducao,
  "hernia-cervical-radiculopatia:mapa-raizes": MapaRaizes,
  "hernia-cervical-radiculopatia:opcoes-cirurgicas": OpcoesCirurgicas,
  "hernia-cervical-radiculopatia:algoritmo": Algoritmo,
};
