import type { FC } from "react";
import type { FigureProps } from "../../../types/topic";

/* ============================================================================
   Luxação do joelho (lesão multiligamentar) — figuras esquemáticas, line-art
   2 tons, SVG original (sem copyright).
   Ossos: stroke var(--ink-soft), fill var(--surface).
   Ligamento/implante/nervo: stroke var(--teal).
   Traço de fratura / estrutura rompida: stroke var(--cortical) + "fx-line".
   Medidas/limiares/setas de medida: var(--amber). Rótulos: var(--muted).
   IDs prefixados por "luxacao-joelho:" no registro FIGURES.
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
  fontSize: 11,
  fill: "var(--muted)",
  fontFamily: "var(--font-mono, monospace)",
};

const soft = {
  fill: "none",
  stroke: "var(--teal)",
  strokeWidth: 2.4,
  strokeLinecap: "round" as const,
};

/* -------------------------------------------------------------------------- */
/* 1. Anatomia — fossa poplítea: a. poplítea ancorada (hiato dos adutores e    */
/*    arcada do sóleo) e n. fibular comum contornando o colo da fíbula.        */
/* -------------------------------------------------------------------------- */
export const Anatomia: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 320 360"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Anatomia da fossa poplítea — artéria poplítea ancorada e nervo fibular comum"}</title>

    {/* fêmur distal + côndilos */}
    <path {...boneStyle} d="M120 20 C 132 60, 138 110, 136 150 L 178 150 C 178 110, 182 60, 190 20 Z" />
    <path
      {...boneStyle}
      fill="var(--surface-2, var(--surface))"
      d="M126 150 C 108 150, 96 162, 96 182 C 96 200, 112 208, 130 204 L 184 204 C 202 206, 216 196, 214 178 C 212 160, 198 150, 180 150 Z"
    />
    {/* platô tibial + tíbia */}
    <path
      {...boneStyle}
      fill="var(--surface-2, var(--surface))"
      d="M104 216 L 208 216 C 214 216, 216 224, 210 228 L 108 228 C 100 228, 100 218, 104 216 Z"
    />
    <path {...boneStyle} d="M126 230 C 122 280, 122 320, 126 344 L 168 344 C 172 320, 172 280, 166 230 Z" />
    {/* fíbula (lateral, à direita) — cabeça e colo */}
    <path {...boneStyle} d="M196 232 C 206 234, 212 244, 210 258 C 208 272, 202 280, 196 300 L 184 298 C 188 272, 188 250, 184 232 Z" />

    {/* artéria poplítea — ancorada proximal (hiato dos adutores) e distal (arcada do sóleo) */}
    <path
      d="M155 22 C 150 70, 156 120, 152 168 C 148 210, 152 250, 150 300"
      fill="none"
      stroke="var(--cortical)"
      strokeWidth="3.4"
      strokeLinecap="round"
    />
    {/* pontos de ancoragem */}
    <circle cx="153" cy="60" r="4.4" fill="var(--amber)" />
    <circle cx="151" cy="250" r="4.4" fill="var(--amber)" />
    <text x="196" y="58" {...mono} textAnchor="start" fill="var(--amber)">hiato dos adutores</text>
    <text x="196" y="254" {...mono} textAnchor="start" fill="var(--amber)">arcada do sóleo</text>

    {/* nervo fibular comum contornando o colo da fíbula */}
    <path {...soft} d="M188 214 C 200 226, 210 240, 206 256 C 203 268, 196 276, 194 292" />
    <circle cx="205" cy="252" r="4" fill="var(--teal)" />

    <text x="150" y="16" {...label} textAnchor="middle">Fêmur</text>
    <text x="46" y="184" {...label} textAnchor="start">Côndilos</text>
    <text x="40" y="300" {...label} textAnchor="start">Tíbia</text>
    <text x="196" y="322" {...label} textAnchor="start" fill="var(--teal)">n. fibular comum</text>
    <text x="16" y="120" {...mono} textAnchor="start" fill="var(--cortical)">a. poplítea</text>
    <text x="16" y="134" {...mono} textAnchor="start" fill="var(--cortical)">(ancorada = vulnerável)</text>
  </svg>
);

/* -------------------------------------------------------------------------- */
/* 2. Schenck (KD) — anatomia lesional (variants I | II | IIIM | IIIL | IV | V)*/
/* -------------------------------------------------------------------------- */
export const Schenck: FC<FigureProps> = ({ className, title, variant = "I" }) => {
  const valid = ["I", "II", "IIIM", "IIIL", "IV", "V"];
  const v = valid.includes(variant) ? variant : "I";

  /* quais estruturas estão rotas para cada tipo */
  const torn = {
    acl: ["II", "IIIM", "IIIL", "IV", "V"].includes(v),
    pcl: ["I", "II", "IIIM", "IIIL", "IV", "V"].includes(v), // KD-I aqui representado como PCL isolado
    mcl: ["IIIM", "IV", "V"].includes(v),
    lcl: ["IIIL", "IV", "V"].includes(v),
    fx: v === "V",
  };
  const captions: Record<string, string> = {
    I: "KD-I — luxação com um cruzado íntegro (lesão de um cruzado)",
    II: "KD-II — ambos cruzados rotos; colaterais íntegros",
    IIIM: "KD-IIIM — ambos cruzados + canto medial (LCM/PMC)",
    IIIL: "KD-IIIL — ambos cruzados + canto lateral (PLC) — maior risco vascular",
    IV: "KD-IV — ambos cruzados + ambos colaterais",
    V: "KD-V — luxação com fratura periarticular",
  };

  const intact = { ...soft, stroke: "var(--teal)" };
  const broken = {
    fill: "none" as const,
    stroke: "var(--cortical)",
    strokeWidth: 2.4,
    strokeLinecap: "round" as const,
    strokeDasharray: "4 4",
  };

  return (
    <svg
      viewBox="0 0 260 300"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `Schenck ${v} — ${captions[v]}`}</title>

      {/* côndilos femorais */}
      <path
        {...boneStyle}
        fill="var(--surface-2, var(--surface))"
        d="M70 60 C 60 60, 54 70, 56 96 L 100 96 C 100 84, 108 84, 108 96 L 152 96 C 154 70, 148 60, 138 60 Z"
      />
      {/* platô + tíbia */}
      <path
        {...boneStyle}
        fill="var(--surface-2, var(--surface))"
        d="M56 150 C 54 150, 54 158, 60 158 L 148 158 C 154 158, 154 150, 152 150 Z"
      />
      <path {...boneStyle} d="M74 160 C 70 200, 70 240, 74 274 L 134 274 C 138 240, 138 200, 134 160 Z" />
      {/* cabeça da fíbula (lateral, direita) */}
      <path {...boneStyle} d="M156 162 C 168 164, 172 176, 168 190 L 152 188 C 152 176, 150 166, 154 160 Z" />

      {/* fratura do platô (apenas KD-V) */}
      {torn.fx && (
        <g className="fx-line">
          <path d="M78 156 L 100 176 L 88 200" stroke="var(--cortical)" strokeWidth="2.4" fill="none" strokeLinecap="round" />
        </g>
      )}

      {/* Cruzados (X central) — ACL: da parede lateral do fêmur à tíbia ântero-medial */}
      <path {...(torn.acl ? broken : intact)} d="M132 100 L 84 150" />
      {/* PCL: da parede medial do fêmur à tíbia póstero-lateral */}
      <path {...(torn.pcl ? broken : intact)} d="M80 100 L 128 150" />

      {/* Colateral medial (esquerda) */}
      <path {...(torn.mcl ? broken : intact)} d="M62 100 L 66 156" />
      {/* Colateral/canto lateral (direita) */}
      <path {...(torn.lcl ? broken : intact)} d="M146 100 L 156 158" />

      <text x="130" y="20" {...mono} textAnchor="middle">Schenck {v}</text>
      <text x="40" y="130" {...label} textAnchor="start" fill={torn.mcl ? "var(--cortical)" : "var(--teal)"}>LCM</text>
      <text x="176" y="130" {...label} textAnchor="start" fill={torn.lcl ? "var(--cortical)" : "var(--teal)"}>LCL/PLC</text>
      <text x="130" y="292" {...label} textAnchor="middle">{captions[v].split("—")[1]?.trim()}</text>
    </svg>
  );
};

/* -------------------------------------------------------------------------- */
/* 3. Protocolo vascular — índice tornozelo-braquial (ITB) e limiar 0,90.      */
/* -------------------------------------------------------------------------- */
export const ProtocoloITB: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 340 300"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Protocolo vascular — índice tornozelo-braquial (ITB) com limiar de 0,90"}</title>

    {/* fórmula do ITB */}
    <text x="20" y="34" {...mono} textAnchor="start" fill="var(--muted)">ITB = PAS tornozelo ÷ PAS braço</text>

    {/* eixo/limiar */}
    <line x1="40" y1="120" x2="300" y2="120" stroke="var(--ink-soft)" strokeWidth="1.4" />
    <line x1="200" y1="70" x2="200" y2="170" stroke="var(--amber)" strokeWidth="1.6" strokeDasharray="4 4" />
    <text x="200" y="62" {...mono} textAnchor="middle" fill="var(--amber)">0,90</text>
    <text x="44" y="112" {...mono} textAnchor="start">0,5</text>
    <text x="292" y="112" {...mono} textAnchor="end">1,0</text>

    {/* barra anormal (< 0,90) */}
    <rect x="40" y="126" width="160" height="20" rx="4" fill="var(--cortical)" opacity="0.16" stroke="var(--cortical)" strokeWidth="1.2" />
    {/* barra normal (>= 0,90) */}
    <rect x="200" y="126" width="100" height="20" rx="4" fill="var(--teal-tint, var(--surface-2, var(--surface)))" stroke="var(--teal)" strokeWidth="1.2" />

    {/* ramo anormal */}
    <path d="M120 146 L 120 190" stroke="var(--cortical)" strokeWidth="1.6" fill="none" />
    <path d="M120 190 l-5 -7 m5 7 l5 -7" stroke="var(--cortical)" strokeWidth="1.6" fill="none" strokeLinecap="round" />
    <text x="120" y="208" {...mono} textAnchor="middle" fill="var(--cortical)">ITB &lt; 0,90</text>
    <text x="120" y="230" {...label} textAnchor="middle">angioTC / arteriografia</text>
    <text x="120" y="246" {...label} textAnchor="middle">ou exploração cirúrgica</text>
    <text x="120" y="262" {...label} textAnchor="middle">se membro isquêmico</text>

    {/* ramo normal */}
    <path d="M250 146 L 250 190" stroke="var(--teal)" strokeWidth="1.6" fill="none" />
    <path d="M250 190 l-5 -7 m5 7 l5 -7" stroke="var(--teal)" strokeWidth="1.6" fill="none" strokeLinecap="round" />
    <text x="250" y="208" {...mono} textAnchor="middle" fill="var(--teal)">ITB ≥ 0,90</text>
    <text x="250" y="230" {...label} textAnchor="middle">observação seriada</text>
    <text x="250" y="246" {...label} textAnchor="middle">+ Doppler; VPN ~100%</text>

    <text x="170" y="288" {...label} textAnchor="middle">Membro isquêmico = revascularização em &lt; 6 h (não aguardar imagem)</text>
  </svg>
);

/* -------------------------------------------------------------------------- */
/* 4. Nervo fibular comum — colo da fíbula e pé caído.                         */
/* -------------------------------------------------------------------------- */
export const NervoFibular: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 260 320"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Nervo fibular comum contornando o colo da fíbula — pé caído por lesão"}</title>

    {/* tíbia */}
    <path {...boneStyle} d="M96 30 C 92 90, 92 180, 100 250 L 132 250 C 128 180, 128 90, 124 30 Z" />
    {/* fíbula (lateral) — cabeça, colo, diáfise */}
    <path {...boneStyle} d="M150 40 C 162 42, 168 54, 166 70 C 162 90, 156 100, 158 180 C 158 214, 154 234, 150 250 L 138 248 C 142 214, 144 180, 142 100 C 140 76, 140 54, 144 40 Z" />

    {/* colo da fíbula (estreitamento) marcado */}
    <circle cx="158" cy="80" r="5" fill="var(--amber)" />
    <text x="178" y="76" {...mono} textAnchor="start" fill="var(--amber)">colo da fíbula</text>

    {/* nervo fibular comum contornando o colo */}
    <path {...soft} d="M126 50 C 150 56, 172 66, 168 84 C 165 98, 152 104, 150 130 C 148 160, 150 200, 148 236" />
    {/* divisão superficial/profunda */}
    <path {...soft} strokeWidth="1.8" d="M150 130 C 140 150, 136 190, 138 230" />

    <text x="20" y="60" {...label} textAnchor="start" fill="var(--teal)">n. fibular comum</text>
    <text x="60" y="150" {...label} textAnchor="start">Tíbia</text>

    {/* pé caído (dorsiflexão perdida) */}
    <path {...boneStyle} d="M100 250 L 132 250 C 132 266, 128 278, 120 286 L 150 300 C 156 304, 152 312, 146 310 L 108 292 C 98 288, 96 274, 98 260 Z" />
    <path d="M150 268 C 168 272, 182 284, 188 300" stroke="var(--cortical)" strokeWidth="1.6" fill="none" strokeDasharray="4 4" strokeLinecap="round" />
    <text x="150" y="316" {...mono} textAnchor="middle" fill="var(--cortical)">pé caído (perda de dorsiflexão)</text>
  </svg>
);

/* -------------------------------------------------------------------------- */
/* 5. Via de exposição vascular — acesso medial à a. poplítea.                 */
/* -------------------------------------------------------------------------- */
export const ViaPoplitea: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 260 320"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Via medial de exposição da artéria poplítea (revascularização por safena invertida)"}</title>

    {/* silhueta do membro (coxa distal → perna) vista medial */}
    <path
      {...boneStyle}
      fill="var(--surface-2, var(--surface))"
      d="M70 20 C 96 30, 120 40, 130 80 C 138 120, 120 150, 122 190 C 124 240, 110 280, 96 306 L 156 306 C 168 280, 178 240, 176 190 C 174 150, 190 120, 182 80 C 172 40, 150 26, 130 18 Z"
    />

    {/* incisão medial */}
    <path d="M96 44 C 100 120, 96 210, 104 292" stroke="var(--cortical)" strokeWidth="1.8" fill="none" strokeDasharray="6 4" />
    <text x="18" y="120" {...mono} textAnchor="start" fill="var(--cortical)">incisão medial</text>

    {/* artéria poplítea reparada + enxerto (safena invertida) */}
    <path {...soft} d="M138 40 C 132 100, 140 150, 134 210 C 130 250, 136 280, 132 300" />
    {/* segmento de enxerto */}
    <path d="M136 150 C 150 170, 150 200, 134 214" stroke="var(--teal)" strokeWidth="2.4" fill="none" strokeDasharray="3 3" strokeLinecap="round" />
    <circle cx="136" cy="150" r="3.4" fill="var(--teal)" />
    <circle cx="134" cy="214" r="3.4" fill="var(--teal)" />

    <text x="182" y="150" {...label} textAnchor="start" fill="var(--teal)">a. poplítea</text>
    <text x="182" y="188" {...label} textAnchor="start" fill="var(--teal)">enxerto de safena</text>
    <text x="182" y="202" {...mono} textAnchor="start" fill="var(--teal)">invertida</text>
    <text x="130" y="316" {...label} textAnchor="middle">Fasciotomia profilática se isquemia prolongada</text>
  </svg>
);

/* -------------------------------------------------------------------------- */
/* 6. Passo — redução da luxação.                                             */
/* -------------------------------------------------------------------------- */
export const StepReducao: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 320 240"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Passo 1 — redução imediata da luxação com tração longitudinal"}</title>

    {/* fêmur distal (esquerda) */}
    <path {...boneStyle} d="M30 70 C 80 64, 120 70, 140 82 L 140 108 C 120 100, 80 96, 30 104 Z" />
    <path {...boneStyle} fill="var(--surface-2, var(--surface))" d="M136 66 C 156 64, 168 78, 168 94 C 168 112, 154 120, 138 116 L 132 96 Z" />
    {/* tíbia deslocada posteriormente (direita), depois reduzida */}
    <path {...boneStyle} fill="var(--surface-2, var(--surface))" d="M176 96 C 196 92, 210 100, 210 116 C 210 132, 196 138, 180 134 L 172 116 Z" />
    <path {...boneStyle} d="M210 108 C 258 104, 292 110, 300 120 L 296 140 C 288 132, 254 126, 210 130 Z" />

    {/* setas de tração longitudinal */}
    <path d="M20 88 L 4 88" stroke="var(--amber)" strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M4 88 l8 -4 m-8 4 l8 4" stroke="var(--amber)" strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M300 120 L 316 120" stroke="var(--amber)" strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M316 120 l-8 -4 m8 4 l-8 4" stroke="var(--amber)" strokeWidth="2" fill="none" strokeLinecap="round" />
    <text x="30" y="40" {...mono} textAnchor="start" fill="var(--amber)">tração</text>
    <text x="270" y="40" {...mono} textAnchor="end" fill="var(--amber)">contra-tração</text>

    <text x="160" y="200" {...label} textAnchor="middle">Reduzir de imediato; reavaliar pulsos e ITB antes e depois</text>
    <text x="160" y="220" {...label} textAnchor="middle">Luxação irredutível (dimple sign) → redução aberta urgente</text>
  </svg>
);

/* -------------------------------------------------------------------------- */
/* 7. Passo — fixador externo transarticular.                                 */
/* -------------------------------------------------------------------------- */
export const StepFixador: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 240 340"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Passo — fixador externo transarticular fêmur–tíbia para estabilização/proteção do reparo vascular"}</title>

    {/* fêmur */}
    <path {...boneStyle} d="M96 20 C 92 60, 92 110, 100 150 L 140 150 C 140 110, 140 60, 136 20 Z" />
    {/* joelho reduzido */}
    <path {...boneStyle} fill="var(--surface-2, var(--surface))" d="M98 150 C 84 150, 76 162, 78 178 L 156 178 C 158 162, 150 150, 138 150 Z" />
    {/* tíbia */}
    <path {...boneStyle} d="M98 186 C 96 236, 96 290, 102 320 L 140 320 C 144 290, 144 236, 140 186 Z" />

    {/* pinos de Schanz */}
    <line x1="118" y1="70" x2="200" y2="70" stroke="var(--teal)" strokeWidth="3" strokeLinecap="round" />
    <line x1="118" y1="100" x2="200" y2="100" stroke="var(--teal)" strokeWidth="3" strokeLinecap="round" />
    <line x1="120" y1="250" x2="200" y2="250" stroke="var(--teal)" strokeWidth="3" strokeLinecap="round" />
    <line x1="120" y1="284" x2="200" y2="284" stroke="var(--teal)" strokeWidth="3" strokeLinecap="round" />
    {/* barra de conexão */}
    <line x1="196" y1="60" x2="196" y2="294" stroke="var(--teal)" strokeWidth="4" strokeLinecap="round" />

    <text x="150" y="40" {...label} textAnchor="start" fill="var(--teal)">pinos femorais</text>
    <text x="150" y="316" {...label} textAnchor="start" fill="var(--teal)">pinos tibiais</text>
    <text x="120" y="336" {...mono} textAnchor="middle">protege o reparo vascular / DCO</text>
  </svg>
);

/* -------------------------------------------------------------------------- */
/* 8. Passo — reconstrução ligamentar (timing).                               */
/* -------------------------------------------------------------------------- */
export const StepReconstrucao: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 300 280"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Passo — reconstrução ligamentar precoce (túneis e enxertos dos cruzados)"}</title>

    {/* côndilos femorais */}
    <path
      {...boneStyle}
      fill="var(--surface-2, var(--surface))"
      d="M90 40 C 78 40, 70 52, 72 80 L 116 80 C 116 66, 126 66, 126 80 L 172 80 C 174 52, 166 40, 154 40 Z"
    />
    {/* platô + tíbia */}
    <path {...boneStyle} fill="var(--surface-2, var(--surface))" d="M74 132 C 72 132, 72 142, 78 142 L 168 142 C 174 142, 174 132, 172 132 Z" />
    <path {...boneStyle} d="M92 144 C 88 184, 88 220, 92 248 L 152 248 C 156 220, 156 184, 152 144 Z" />

    {/* túneis ósseos */}
    <line x1="150" y1="60" x2="104" y2="132" stroke="var(--ink-soft)" strokeWidth="6" opacity="0.25" strokeLinecap="round" />
    <line x1="96" y1="60" x2="142" y2="132" stroke="var(--ink-soft)" strokeWidth="6" opacity="0.25" strokeLinecap="round" />
    {/* enxertos dos cruzados */}
    <path {...soft} d="M150 60 L 104 132" />
    <path {...soft} d="M96 60 L 142 132" />
    {/* parafusos de interferência */}
    <rect x="146" y="54" width="10" height="6" rx="2" fill="var(--teal)" />
    <rect x="100" y="130" width="10" height="6" rx="2" fill="var(--teal)" />

    <text x="130" y="24" {...mono} textAnchor="middle">enxertos ACL + PCL</text>
    <text x="196" y="100" {...label} textAnchor="start" fill="var(--teal)">túneis + fixação</text>
    <text x="150" y="270" {...label} textAnchor="middle">Reconstrução precoce (~2 sem) melhora Lysholm vs. tardia</text>
  </svg>
);

/* -------------------------------------------------------------------------- */
/* Registro: id prefixado -> componente.                                      */
/* -------------------------------------------------------------------------- */
export const figures: Record<string, FC<FigureProps>> = {
  "luxacao-joelho:anatomia": Anatomia,
  "luxacao-joelho:schenck": Schenck,
  "luxacao-joelho:itb": ProtocoloITB,
  "luxacao-joelho:nervo-fibular": NervoFibular,
  "luxacao-joelho:via-poplitea": ViaPoplitea,
  "luxacao-joelho:step-reducao": StepReducao,
  "luxacao-joelho:step-fixador": StepFixador,
  "luxacao-joelho:step-reconstrucao": StepReconstrucao,
};
