import type { FC, ReactNode } from "react";
import type { FigureProps } from "../../../types/topic";

/* ============================================================================
   Figuras originais (line-art, 2 tons) para a fratura-luxação de Monteggia.
   Redesenho esquemático fundamentado em Rockwood & Green's Fractures in Adults,
   10ª ed. (2024) — não reprodução. Cores exclusivamente por variável CSS:
   osso = ink-soft/surface · implante = teal · traço de fratura = cortical ·
   medidas e nervo = amber.
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

const tealStroke = {
  fill: "none",
  stroke: "var(--teal)",
  strokeWidth: 3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const corticalStroke = {
  fill: "none",
  stroke: "var(--cortical)",
  strokeWidth: 3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const nerveStroke = {
  fill: "none",
  stroke: "var(--amber)",
  strokeWidth: 3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/* Distal humerus block reused in the lateral-view figures. */
function DistalHumerus({ x = 150, y = 120 }: { x?: number; y?: number }): ReactNode {
  return (
    <g>
      <path
        {...boneBack}
        d={`M${x - 118} ${y - 78} C${x - 70} ${y - 84}, ${x - 30} ${y - 70}, ${x - 8} ${y - 40}
          C${x + 6} ${y - 20}, ${x + 8} ${y + 4}, ${x - 2} ${y + 20}
          C${x - 26} ${y + 44}, ${x - 70} ${y + 40}, ${x - 104} ${y + 18}
          C${x - 120} ${y - 6}, ${x - 122} ${y - 44}, ${x - 118} ${y - 78} Z`}
      />
      <circle cx={x} cy={y} r="30" {...bone} />
      <text x={x} y={y + 4} {...label} textAnchor="middle">capítulo</text>
    </g>
  );
}

export const Anatomy: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 460 330"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Articulação radioulnar proximal, ligamento anular e nervo interósseo posterior"}</title>

    {/* úmero distal */}
    <circle cx="150" cy="70" r="34" {...bone} />
    <text x="150" y="46" {...mono} textAnchor="middle">úmero</text>

    {/* ulna proximal e diáfise (medial, à esquerda) */}
    <path
      {...bone}
      d="M96 60 C82 78, 78 104, 92 120 C74 132, 70 150, 82 166 L104 300 L142 300 L128 150
        C142 132, 142 108, 124 96 C136 84, 138 66, 122 54 C112 50, 102 52, 96 60 Z"
    />
    <text x="72" y="210" {...label}>ulna</text>

    {/* rádio: cabeça (disco) + colo + diáfise (lateral, à direita) */}
    <ellipse cx="214" cy="96" rx="34" ry="16" {...bone} />
    <path
      {...bone}
      d="M188 104 C190 128, 198 150, 214 160 C230 150, 238 128, 240 104
        C238 138, 246 300, 246 300 L184 300 C184 300, 190 138, 188 104 Z"
    />
    <text x="214" y="93" {...label} textAnchor="middle">cabeça</text>
    <text x="214" y="290" {...label} textAnchor="middle">rádio</text>

    {/* ligamento anular envolvendo o colo do rádio */}
    <ellipse
      cx="214"
      cy="124"
      rx="40"
      ry="15"
      fill="none"
      stroke="var(--teal)"
      strokeWidth="4"
    />
    <ellipse cx="214" cy="124" rx="40" ry="15" fill="var(--teal)" opacity="0.1" />

    {/* articulação radioulnar proximal (incisura radial da ulna) */}
    <path d="M180 118 C168 122, 160 130, 158 142" {...tealStroke} strokeWidth={4} />

    {/* supinador / arcada de Frohse */}
    <path
      d="M250 108 C278 118, 292 150, 286 186"
      fill="none"
      stroke="var(--ink-soft)"
      strokeWidth="20"
      strokeLinecap="round"
      opacity="0.28"
    />

    {/* nervo interósseo posterior contornando o colo do rádio */}
    <path d="M262 66 C276 92, 268 120, 244 138 C226 152, 232 182, 258 208" {...nerveStroke} />

    <path d="M254 130 L316 118" stroke="var(--line-strong)" />
    <text x="320" y="118" {...label} fill="var(--teal)">ligamento anular</text>
    <path d="M160 140 L118 150" stroke="var(--line-strong)" />
    <text x="14" y="150" {...label} fill="var(--teal)">radioulnar proximal</text>
    <path d="M256 200 L318 210" stroke="var(--line-strong)" />
    <text x="322" y="205" {...label} fill="var(--amber)">n. interósseo</text>
    <text x="322" y="219" {...label} fill="var(--amber)">posterior</text>
    <path d="M288 176 L330 158" stroke="var(--line-strong)" />
    <text x="334" y="158" {...label}>supinador · arcada de Frohse</text>
    <text x="230" y="322" {...label} textAnchor="middle">
      O ligamento anular estabiliza a cabeça do rádio; o nervo interósseo posterior cruza o colo pelo supinador.
    </text>
  </svg>
);

export const BadoClassification: FC<FigureProps> = ({ className, title, variant }) => {
  const v = (variant ?? "1").toString().toUpperCase().replace("BADO", "").trim() || "1";
  const names: Record<string, string> = {
    "1": "Bado I · anterior",
    "2": "Bado II · posterior",
    "3": "Bado III · lateral",
    "4": "Bado IV · anterior + rádio",
  };

  // Posição da cabeça do rádio deslocada por tipo (anterior = para cima).
  const rh: Record<string, { x: number; y: number }> = {
    "1": { x: 176, y: 78 },
    "2": { x: 196, y: 188 },
    "3": { x: 138, y: 176 },
    "4": { x: 176, y: 78 },
  };
  const head = rh[v] ?? rh["1"];

  return (
    <svg
      viewBox="0 0 460 320"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `Classificação de Bado: ${names[v] ?? v}`}</title>

      <DistalHumerus x={168} y={132} />

      {/* ulna: contorno com ápice angulado conforme o tipo */}
      <path
        {...bone}
        d={
          v === "2"
            ? "M120 96 C138 106, 150 120, 152 140 C170 150, 250 170, 430 156 C430 176, 250 196, 150 172 C132 180, 118 172, 112 154 C118 128, 116 110, 120 96 Z"
            : "M120 96 C138 106, 150 120, 152 140 C240 116, 340 120, 430 138 C340 158, 240 156, 150 172 C132 180, 118 172, 112 154 C118 128, 116 110, 120 96 Z"
        }
      />
      <text x="360" y={v === "2" ? 150 : 132} {...label}>ulna</text>

      {/* traço de fratura da ulna */}
      <path
        d={
          v === "2"
            ? "M238 168 L232 150 L250 146 L244 128"
            : "M250 128 L244 146 L262 150 L256 168"
        }
        {...corticalStroke}
        strokeWidth={2.5}
      />

      {/* cabeça e colo do rádio (deslocados) */}
      <ellipse cx={head.x} cy={head.y} rx="26" ry="12" {...bone} />
      <path
        {...bone}
        d={`M${head.x - 20} ${head.y + 6} C${head.x - 16} ${head.y + 40}, ${head.x - 10} ${head.y + 90}, ${head.x} ${head.y + 150}
          L${head.x + 40} ${head.y + 150} C${head.x + 26} ${head.y + 88}, ${head.x + 22} ${head.y + 36}, ${head.x + 20} ${head.y + 6} Z`}
      />

      {/* traço de fratura do rádio no Bado IV */}
      {v === "4" && (
        <path d={`M${head.x - 6} ${head.y + 120} L${head.x + 14} ${head.y + 132}`} {...corticalStroke} strokeWidth={2.5} />
      )}

      {/* seta indicando a direção da luxação */}
      <path
        d={
          v === "2"
            ? "M214 150 L214 176"
            : v === "3"
              ? "M182 150 L150 170"
              : "M196 150 L180 100"
        }
        {...nerveStroke}
        strokeWidth={2.5}
        markerEnd="url(#badoArrow)"
      />
      <defs>
        <marker id="badoArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 Z" fill="var(--amber)" />
        </marker>
      </defs>

      <rect x="300" y="20" width="150" height="30" rx="8" fill="var(--teal-tint)" />
      <text x="375" y="40" {...mono} textAnchor="middle" fill="var(--teal-deep)">{names[v] ?? v}</text>
      <text x="230" y="24" {...mono} textAnchor="middle">luxação da cabeça do rádio + fratura da ulna</text>
      <text x="230" y="312" {...label} textAnchor="middle">
        {v === "3"
          ? "Deslocamento lateral (melhor visto na incidência AP); típico da criança."
          : v === "4"
            ? "Padrão anterior somado à fratura da diáfise do rádio."
            : "A direção do ápice da ulna acompanha a direção da luxação da cabeça do rádio."}
      </text>
    </svg>
  );
};

export const JupiterSubtypes: FC<FigureProps> = ({ className, title, variant }) => {
  const v = (variant ?? "a").toString().toLowerCase().replace("ii", "").replace("jupiter", "").trim() || "a";
  const names: Record<string, string> = {
    a: "IIA · incisura troclear (coronoide)",
    b: "IIB · junção metadiafisária",
    c: "IIC · diáfise",
    d: "IID · cominutivo",
  };
  // Nível do traço de fratura ao longo da ulna proximal.
  const fx: Record<string, number> = { a: 150, b: 196, c: 258, d: 210 };
  const level = fx[v] ?? 150;

  return (
    <svg
      viewBox="0 0 460 300"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `Subclassificação de Jupiter do Bado II: ${names[v] ?? v}`}</title>

      <DistalHumerus x={150} y={118} />

      {/* ulna proximal com incisura troclear e coronoide */}
      <path
        {...bone}
        d="M108 66 C126 74, 138 90, 140 112 C158 118, 250 128, 430 118 C430 138, 250 156, 138 150
          C120 160, 104 150, 100 128 C104 100, 102 82, 108 66 Z"
      />
      <path {...bone} d="M140 112 C150 126, 152 142, 140 150 C132 140, 128 124, 140 112 Z" />
      <text x="146" y="176" {...label}>coronoide</text>

      {/* cabeça do rádio deslocada posteriormente (Bado II) */}
      <ellipse cx="188" cy="176" rx="26" ry="12" {...bone} />
      <path {...bone} d="M168 182 C172 214, 178 250, 186 296 L226 296 C214 246, 210 210, 208 182 Z" />

      {/* traço(s) de fratura conforme subtipo */}
      {v === "d" ? (
        <>
          <path d="M150 150 L144 130 L164 126 L156 108" {...corticalStroke} strokeWidth={2.5} />
          <path d="M212 148 L206 130 L224 124 L216 108" {...corticalStroke} strokeWidth={2.5} />
          <circle cx="184" cy="128" r="6" {...boneBack} />
        </>
      ) : (
        <path
          d={`M${level + 8} ${v === "a" ? 150 : 148} L${level + 2} 128 L${level + 20} 124 L${level + 12} 106`}
          {...corticalStroke}
          strokeWidth={2.5}
        />
      )}

      <rect x="292" y="18" width="158" height="30" rx="8" fill="var(--cortical-tint)" />
      <text x="371" y="38" {...mono} textAnchor="middle" fill="var(--cortical)">{names[v] ?? v}</text>
      <text x="230" y="290" {...label} textAnchor="middle">
        {v === "a"
          ? "Traço ao nível da incisura troclear; grande fragmento do coronoide — pior prognóstico."
          : v === "d"
            ? "Cominução do coronoide à diáfise; a reconstrução do contorno da ulna é o ponto crítico."
            : "Quanto mais distal o traço, mais previsível a reconstrução da incisura troclear."}
      </text>
    </svg>
  );
};

export const PosteriorApproach: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 440 300"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Via posterior à ulna e estruturas neurais em risco"}</title>

    {/* silhueta do antebraço em decúbito, borda subcutânea da ulna para cima */}
    <path
      d="M40 150 C90 96, 190 82, 288 96 C346 104, 392 128, 404 158 C392 190, 346 214, 288 222 C190 236, 90 222, 40 168 Z"
      fill="var(--surface-2, var(--surface))"
      stroke="var(--line-strong)"
      strokeWidth="1.4"
    />

    {/* incisão / crista da ulna */}
    <path d="M70 150 L360 150" stroke="var(--teal)" strokeWidth="3" strokeDasharray="8 5" />
    <ellipse cx="96" cy="150" rx="7" ry="7" fill="var(--teal)" />

    {/* olécrano proximal */}
    <path {...bone} d="M78 150 C74 128, 82 112, 104 108 C112 128, 112 172, 104 192 C82 188, 74 172, 78 150 Z" />

    {/* massa muscular ECU / FCU de cada lado */}
    <path d="M150 118 C220 108, 300 112, 350 128" fill="none" stroke="var(--ink-soft)" strokeWidth="14" strokeLinecap="round" opacity="0.3" />
    <path d="M150 182 C220 192, 300 188, 350 172" fill="none" stroke="var(--ink-soft)" strokeWidth="14" strokeLinecap="round" opacity="0.3" />

    {/* nervo ulnar proximal-medial */}
    <path d="M92 112 C120 96, 150 92, 176 100" {...nerveStroke} strokeWidth={2.5} />
    {/* nervo interósseo posterior distal-lateral */}
    <path d="M300 128 C330 140, 344 164, 336 190" {...nerveStroke} strokeWidth={2.5} />

    <path d="M150 100 L150 66" stroke="var(--line-strong)" />
    <text x="150" y="60" {...label} textAnchor="middle" fill="var(--amber)">nervo ulnar (proximal)</text>
    <path d="M336 186 L336 224" stroke="var(--line-strong)" />
    <text x="336" y="240" {...label} textAnchor="middle" fill="var(--amber)">n. interósseo posterior</text>
    <text x="200" y="142" {...label} fill="var(--teal)">borda subcutânea da ulna</text>
    <text x="60" y="126" {...label} fill="var(--teal)">olécrano</text>
    <text x="220" y="26" {...mono} textAnchor="middle">via posterior direta · plano entre ECU e FCU</text>
    <text x="220" y="290" {...label} textAnchor="middle">
      Dissecção subperiosteal sobre a ulna; a pronação do antebraço afasta o nervo interósseo posterior.
    </text>
  </svg>
);

export const UlnaReduction: FC<FigureProps> = ({ className, title, variant }) => {
  const reduced = (variant ?? "reduzida").toString().toLowerCase().startsWith("red");

  return (
    <svg
      viewBox="0 0 460 300"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? (reduced ? "Redução anatômica da ulna reduz a cabeça do rádio" : "Angulação da ulna mantém a cabeça do rádio luxada")}</title>

      <DistalHumerus x={160} y={128} />

      {/* ulna: angulada (não reduzida) ou retificada (reduzida) */}
      <path
        {...bone}
        d={
          reduced
            ? "M116 92 C134 102, 146 116, 148 136 C240 116, 340 120, 430 136 C340 156, 240 154, 146 168 C128 176, 114 168, 108 150 C114 122, 112 106, 116 92 Z"
            : "M116 92 C134 102, 146 116, 148 136 C214 108, 300 106, 430 130 C300 150, 214 150, 146 168 C128 176, 114 168, 108 150 C114 122, 112 106, 116 92 Z"
        }
      />

      {/* cabeça e colo do rádio: reduzida (junto ao capítulo) ou luxada anterior */}
      {reduced ? (
        <>
          <ellipse cx="196" cy="150" rx="26" ry="12" {...bone} />
          <path {...bone} d="M176 156 C180 200, 186 252, 194 296 L234 296 C222 250, 218 200, 216 156 Z" />
          <path d="M172 150 C186 158, 206 158, 220 150" {...tealStroke} strokeWidth={4} />
          <text x="300" y="120" {...label} fill="var(--teal)">cabeça reduzida no capítulo</text>
        </>
      ) : (
        <>
          <ellipse cx="180" cy="84" rx="26" ry="12" {...bone} />
          <path {...bone} d="M160 90 C164 134, 170 210, 178 296 L218 296 C206 210, 202 134, 200 90 Z" />
          <path d="M168 96 C182 104, 202 104, 216 96" {...corticalStroke} strokeWidth={3} />
          <text x="240" y="70" {...label} fill="var(--cortical)">cabeça luxada anterior</text>
        </>
      )}

      <rect x="300" y="20" width="150" height="30" rx="8" fill={reduced ? "var(--teal-tint)" : "var(--cortical-tint)"} />
      <text x="375" y="40" {...mono} textAnchor="middle" fill={reduced ? "var(--teal-deep)" : "var(--cortical)"}>
        {reduced ? "ULNA ANATÔMICA" : "ULNA ANGULADA"}
      </text>
      <text x="230" y="290" {...label} textAnchor="middle">
        {reduced
          ? "Comprimento e contorno restaurados: a cabeça do rádio retorna ao capítulo sem manipulação direta."
          : "Encurtamento ou angulação residual da ulna mantém a luxação radiocapitelar."}
      </text>
    </svg>
  );
};

export const UlnaFixation: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 460 300"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Fixação da ulna proximal com placa dorsal e fixação do coronoide"}</title>

    <DistalHumerus x={158} y={120} />

    {/* ulna reduzida */}
    <path
      {...bone}
      d="M108 84 C126 94, 138 108, 140 128 C230 108, 340 112, 434 128 C340 148, 230 146, 140 160
        C122 168, 106 160, 100 142 C106 114, 104 98, 108 84 Z"
    />

    {/* coronoide reconstruído */}
    <path {...bone} d="M140 128 C150 142, 152 158, 140 166 C132 156, 128 140, 140 128 Z" />
    <circle cx="150" cy="150" r="5" fill="var(--surface)" stroke="var(--teal)" strokeWidth="2" />
    <path d="M150 150 L206 156" stroke="var(--teal)" strokeWidth="2" />

    {/* placa dorsal contornada sobre a ulna (lado de tensão) */}
    <path
      d="M118 96 C130 104, 138 116, 140 132 C236 116, 340 120, 424 132 L424 118 C340 106, 236 102, 142 118 C138 100, 128 88, 118 84 Z"
      fill="var(--teal-tint)"
      stroke="var(--teal)"
      strokeWidth="2"
    />
    <g fill="var(--surface)" stroke="var(--teal)" strokeWidth="2">
      {[150, 196, 248, 304, 360, 408].map((cx) => (
        <circle key={cx} cx={cx} cy={cx < 160 ? 108 : 124} r="5" />
      ))}
    </g>

    {/* cabeça do rádio reduzida */}
    <ellipse cx="196" cy="138" rx="24" ry="11" {...bone} />
    <path {...bone} d="M178 144 C182 190, 188 246, 196 296 L234 296 C222 244, 218 190, 216 144 Z" />
    <path d="M174 138 C188 146, 206 146, 220 138" {...tealStroke} strokeWidth={3.5} />

    <path d="M300 122 L320 100" stroke="var(--line-strong)" />
    <text x="322" y="98" {...label} fill="var(--teal)">placa dorsal (lado de tensão)</text>
    <path d="M150 150 L120 178" stroke="var(--line-strong)" />
    <text x="70" y="192" {...label} fill="var(--teal)">coronoide fixado</text>
    <text x="220" y="24" {...mono} textAnchor="middle">contorno da incisura troclear restaurado</text>
    <text x="230" y="292" {...label} textAnchor="middle">
      Placa na face dorsal da ulna proximal; confirmar a redução radiocapitelar sob fluoroscopia.
    </text>
  </svg>
);

export const RadiocapitellarCheck: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 440 300"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Conferência radiocapitelar e interposição do ligamento anular"}</title>

    {/* capítulo */}
    <circle cx="180" cy="110" r="40" {...bone} />
    <text x="180" y="114" {...label} textAnchor="middle">capítulo</text>

    {/* cabeça do rádio irredutível por interposição */}
    <ellipse cx="184" cy="182" rx="30" ry="14" {...bone} />
    <path {...bone} d="M160 190 C164 226, 170 262, 178 296 L214 296 C204 258, 200 224, 200 190 Z" />

    {/* ligamento anular interposto (dobrado dentro da articulação) */}
    <path d="M162 156 C176 168, 196 168, 210 156 C200 150, 168 150, 162 156 Z" fill="var(--cortical-tint)" stroke="var(--cortical)" strokeWidth="2.5" />

    {/* linha radiocapitelar: eixo do rádio deve apontar ao centro do capítulo */}
    <path d="M184 182 L180 110" stroke="var(--amber)" strokeWidth="1.6" strokeDasharray="5 4" />
    <circle cx="180" cy="110" r="4" fill="var(--amber)" />

    <path d="M212 156 L300 150" stroke="var(--line-strong)" />
    <text x="304" y="150" {...label} fill="var(--cortical)">ligamento anular interposto</text>
    <text x="308" y="166" {...label} fill="var(--cortical)">(impede a redução)</text>
    <path d="M182 96 L268 88" stroke="var(--line-strong)" />
    <text x="272" y="88" {...label} fill="var(--amber)">linha radiocapitelar</text>
    <text x="220" y="24" {...mono} textAnchor="middle">o eixo do rádio deve cruzar o centro do capítulo</text>
    <text x="220" y="290" {...label} textAnchor="middle">
      Se a cabeça não reduz após alinhar a ulna, suspeitar de interposição do ligamento anular e explorar.
    </text>
  </svg>
);

export const figures: Record<string, FC<FigureProps>> = {
  "fratura-monteggia:anatomia": Anatomy,
  "fratura-monteggia:bado": BadoClassification,
  "fratura-monteggia:jupiter": JupiterSubtypes,
  "fratura-monteggia:via-posterior": PosteriorApproach,
  "fratura-monteggia:reducao-ulna": UlnaReduction,
  "fratura-monteggia:fixacao-ulna": UlnaFixation,
  "fratura-monteggia:radiocapitelar": RadiocapitellarCheck,
};
