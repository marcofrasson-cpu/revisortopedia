import type { FC } from "react";
import type { FigureProps } from "../../../types/topic";

/* ============================================================================
   Fratura subtrocantérica do fêmur — figuras esquemáticas (line-art 2 tons).
   Ossos: stroke var(--ink-soft), fill var(--surface).
   Partes moles / músculos deformantes / implante: teal.
   Traço de fratura: var(--cortical) + className "fx-line".
   Medidas / ângulos / alertas: var(--amber). Rótulos: var(--muted).
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

const teal = { stroke: "var(--teal)", fill: "none", strokeWidth: 2 } as const;

/** Seta simples com ponta (para forças deformantes). */
const Arrow: FC<{ d: string; color?: string; head: string }> = ({ d, color = "var(--teal)", head }) => (
  <g stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
    <path d={head} />
  </g>
);

/* -------------------------------------------------------------------------- */
/* 1. Anatomia — forças deformantes do fragmento proximal                     */
/* -------------------------------------------------------------------------- */
/** Fêmur proximal (AP) com as forças que deslocam o fragmento proximal:
 *  flexão (iliopsoas no pequeno trocânter), abdução (glúteo médio no grande
 *  trocânter) e rotação externa (rotadores curtos). O fragmento distal é
 *  aduzido e encurtado (adutores). */
export const Anatomia: FC<FigureProps> = ({ className, title }) => (
  <svg viewBox="0 0 320 340" preserveAspectRatio="xMidYMid meet" role="img" className={className} xmlns="http://www.w3.org/2000/svg">
    <title>{title ?? "Forças deformantes do fragmento proximal na fratura subtrocantérica"}</title>

    {/* Cabeça e colo femoral */}
    <circle {...boneStyle} cx="118" cy="70" r="26" />
    <path {...boneStyle} d="M138 84 C 156 96, 170 108, 178 120 L 158 138 C 148 126, 134 114, 120 104 Z" />
    {/* Grande trocânter */}
    <path {...boneStyle} fill="var(--surface-2, var(--surface))" d="M178 96 C 202 92, 220 100, 224 118 C 226 132, 214 142, 196 140 L 176 122 Z" />
    {/* Pequeno trocânter */}
    <path {...boneStyle} fill="var(--surface-2, var(--surface))" d="M162 140 C 150 150, 146 162, 152 172 C 160 178, 172 172, 176 160 L 172 146 Z" />

    {/* Fragmento proximal (região subtrocantérica) */}
    <path {...boneStyle} d="M176 122 C 196 138, 206 152, 208 170 L 176 182 C 166 168, 156 154, 150 140 C 158 132, 168 126, 176 122 Z" />

    {/* Traço de fratura subtrocantérica (< 5 cm abaixo do pequeno trocânter) */}
    <g className="fx-line">
      <path d="M150 176 L 210 168" stroke="var(--cortical)" strokeWidth="2.4" strokeLinecap="round" strokeDasharray="1 0" />
      <path d="M148 182 L 212 174" stroke="var(--cortical)" strokeWidth="1" strokeDasharray="3 3" />
    </g>

    {/* Diáfise / fragmento distal — aduzido e medializado */}
    <path {...boneStyle} d="M170 190 C 176 240, 178 290, 176 330 L 208 330 C 210 288, 210 236, 206 190 Z" />

    {/* Forças no fragmento proximal */}
    {/* Flexão — iliopsoas puxa o pequeno trocânter anteriormente */}
    <Arrow d="M158 168 C 132 176, 116 192, 112 214" head="M112 214 l-2 -10 m2 10 l9 -4" color="var(--teal)" />
    <text x="96" y="230" {...label} fill="var(--teal)" textAnchor="middle">flexão</text>
    <text x="96" y="244" {...mono} fill="var(--teal)" textAnchor="middle">iliopsoas</text>

    {/* Abdução — glúteo médio/mínimo no grande trocânter */}
    <Arrow d="M222 116 C 250 108, 270 108, 288 118" head="M288 118 l-9 -5 m9 5 l-4 9" color="var(--teal)" />
    <text x="272" y="98" {...label} fill="var(--teal)" textAnchor="middle">abdução</text>
    <text x="278" y="140" {...mono} fill="var(--teal)" textAnchor="middle">glúteo médio</text>

    {/* Rotação externa — rotadores curtos */}
    <Arrow d="M206 150 C 226 158, 236 172, 232 190" head="M232 190 l6 -8 m-6 8 l-9 -3" color="var(--teal)" />
    <text x="256" y="182" {...label} fill="var(--teal)" textAnchor="middle">rot. externa</text>

    {/* Adução/encurtamento do fragmento distal */}
    <Arrow d="M150 280 C 168 284, 178 284, 190 282" head="M190 282 l-9 -4 m9 4 l-8 5" color="var(--cortical)" />
    <text x="120" y="284" {...label} fill="var(--cortical)" textAnchor="middle">adução</text>

    {/* Rótulos ósseos */}
    <text x="98" y="44" {...label} textAnchor="middle">Cabeça</text>
    <text x="214" y="88" {...label} textAnchor="middle">Grande troc.</text>
    <text x="150" y="196" {...mono} textAnchor="start" fill="var(--cortical)">subtrocantérica</text>
    <text x="192" y="326" {...label} textAnchor="start">Diáfise</text>
  </svg>
);

/* -------------------------------------------------------------------------- */
/* 2. Classificação de Russell–Taylor (variantes clicáveis)                    */
/* -------------------------------------------------------------------------- */
/** Baseada no envolvimento do pequeno trocânter (I × II) e da fossa
 *  piriforme/grande trocânter (A × B). Tipo II contraindica entrada piriforme.
 *  variant: "IA" | "IB" | "IIA" | "IIB". */
export const RussellTaylor: FC<FigureProps> = ({ className, title, variant = "IA" }) => {
  const lesserInvolved = variant === "IB" || variant === "IIB";
  const piriformisInvolved = variant === "IIA" || variant === "IIB";
  return (
    <svg viewBox="0 0 260 320" preserveAspectRatio="xMidYMid meet" role="img" className={className} xmlns="http://www.w3.org/2000/svg">
      <title>{title ?? `Russell–Taylor tipo ${variant}`}</title>

      {/* Cabeça + colo */}
      <circle {...boneStyle} cx="92" cy="60" r="24" />
      <path {...boneStyle} d="M110 74 C 128 86, 142 98, 150 112 L 132 128 C 122 116, 108 104, 96 96 Z" />
      {/* Grande trocânter + fossa piriforme */}
      <path {...boneStyle} fill="var(--surface-2, var(--surface))" d="M150 88 C 176 82, 196 92, 198 112 C 199 128, 186 138, 168 134 L 148 116 Z" />
      {/* Marcador da fossa piriforme (ponto de entrada) */}
      <circle cx="164" cy="98" r="4" fill={piriformisInvolved ? "var(--cortical)" : "var(--teal)"} />
      {/* Pequeno trocânter */}
      <path {...boneStyle} fill="var(--surface-2, var(--surface))" d="M138 132 C 126 142, 122 154, 128 164 C 136 170, 148 164, 152 152 L 148 138 Z" />

      {/* Diáfise subtrocantérica */}
      <path {...boneStyle} d="M132 130 C 140 190, 142 250, 140 306 L 176 306 C 178 248, 178 188, 170 128 Z" />

      {/* Traço de fratura principal (subtrocantérico) */}
      <g className="fx-line">
        <path d="M128 176 L 178 168" stroke="var(--cortical)" strokeWidth="2.4" strokeLinecap="round" />
      </g>

      {/* Envolvimento do pequeno trocânter (B) — traço adicional o destacando */}
      {lesserInvolved && (
        <g className="fx-line">
          <path d="M138 148 L 150 168" stroke="var(--cortical)" strokeWidth="2" strokeDasharray="3 2" />
        </g>
      )}

      {/* Extensão para a fossa piriforme / grande trocânter (Tipo II) */}
      {piriformisInvolved && (
        <g className="fx-line">
          <path d="M150 168 C 158 140, 160 116, 164 100" stroke="var(--cortical)" strokeWidth="2" strokeDasharray="3 2" />
        </g>
      )}

      <text x="72" y="36" {...label} textAnchor="middle">Cabeça</text>
      <text x="176" y="150" {...label} textAnchor="start" fill={lesserInvolved ? "var(--cortical)" : "var(--muted)"}>
        peq. troc. {lesserInvolved ? "envolvido" : "íntegro"}
      </text>
      <text x="150" y="86" {...mono} textAnchor="start" fill={piriformisInvolved ? "var(--cortical)" : "var(--teal)"}>
        {piriformisInvolved ? "fossa afetada" : "fossa livre"}
      </text>
      <text x="130" y="322" {...mono} textAnchor="middle">Russell–Taylor {variant}</text>
    </svg>
  );
};

/* -------------------------------------------------------------------------- */
/* 3. Fratura atípica × típica (bifosfonato)                                   */
/* -------------------------------------------------------------------------- */
/** variant: "atipica" (transversa, espessamento/bico da cortical lateral,
 *  esporão medial, sem cominução) | "tipica" (oblíqua/cominutiva). */
export const FraturaAtipica: FC<FigureProps> = ({ className, title, variant = "atipica" }) => {
  const atypical = variant !== "tipica";
  return (
    <svg viewBox="0 0 220 320" preserveAspectRatio="xMidYMid meet" role="img" className={className} xmlns="http://www.w3.org/2000/svg">
      <title>{title ?? (atypical ? "Fratura atípica do fêmur (bifosfonato)" : "Fratura subtrocantérica típica")}</title>

      {/* Diáfise femoral subtrocantérica (AP) */}
      <path {...boneStyle} d="M78 20 C 74 100, 74 200, 80 300 L 132 300 C 138 200, 138 100, 134 20 Z" />
      {/* Canal medular */}
      <path fill="var(--surface-2, var(--surface))" stroke="var(--line-strong)" strokeWidth="0.8"
        d="M92 40 C 90 110, 90 200, 94 288 L 118 288 C 122 200, 122 110, 120 40 Z" />

      {atypical ? (
        <>
          {/* Espessamento e bico (beaking) da cortical LATERAL */}
          <path fill="var(--amber)" opacity="0.35" stroke="var(--amber)" strokeWidth="1.2"
            d="M132 150 C 146 156, 150 168, 146 180 C 142 172, 136 168, 132 168 Z" />
          {/* Traço TRANSVERSO iniciando na cortical lateral */}
          <g className="fx-line">
            <path d="M134 172 L 78 176" stroke="var(--cortical)" strokeWidth="2.6" strokeLinecap="round" />
          </g>
          {/* Esporão / espícula medial */}
          <path fill="var(--surface)" stroke="var(--cortical)" strokeWidth="1.6" d="M78 176 L 66 172 L 78 168 Z" />
          <text x="164" y="164" {...mono} textAnchor="start" fill="var(--amber)">bico lateral</text>
          <text x="60" y="192" {...label} textAnchor="end" fill="var(--cortical)">esporão medial</text>
          <text x="150" y="184" {...mono} textAnchor="start" fill="var(--cortical)">transversa</text>
          <text x="106" y="316" {...label} textAnchor="middle">Sem cominução</text>
        </>
      ) : (
        <>
          {/* Traço oblíquo/cominutivo */}
          <g className="fx-line">
            <path d="M132 158 L 80 196" stroke="var(--cortical)" strokeWidth="2.6" strokeLinecap="round" />
            <path d="M120 168 L 92 186" stroke="var(--cortical)" strokeWidth="1.4" strokeDasharray="3 3" />
            <path d="M108 160 L 100 200" stroke="var(--cortical)" strokeWidth="1.4" strokeDasharray="3 3" />
          </g>
          <text x="150" y="150" {...mono} textAnchor="start" fill="var(--cortical)">oblíqua</text>
          <text x="106" y="316" {...label} textAnchor="middle">Cominução variável</text>
        </>
      )}
      <text x="106" y="16" {...label} textAnchor="middle">{atypical ? "Atípica" : "Típica"}</text>
    </svg>
  );
};

/* -------------------------------------------------------------------------- */
/* 4. Acesso / ponto de entrada da haste cefalomedular                         */
/* -------------------------------------------------------------------------- */
/** Pontos de entrada: ápice do grande trocânter (haste trocantérica) e fossa
 *  piriforme (haste reta). Vista AP do fêmur proximal. */
export const AcessoEntrada: FC<FigureProps> = ({ className, title }) => (
  <svg viewBox="0 0 260 300" preserveAspectRatio="xMidYMid meet" role="img" className={className} xmlns="http://www.w3.org/2000/svg">
    <title>{title ?? "Pontos de entrada: ápice do grande trocânter e fossa piriforme"}</title>

    <circle {...boneStyle} cx="80" cy="72" r="26" />
    <path {...boneStyle} d="M100 86 C 120 98, 136 112, 144 126 L 124 144 C 112 130, 96 118, 84 110 Z" />
    {/* Grande trocânter */}
    <path {...boneStyle} fill="var(--surface-2, var(--surface))" d="M144 100 C 172 94, 194 104, 196 126 C 197 144, 182 154, 162 150 L 142 130 Z" />
    {/* Diáfise */}
    <path {...boneStyle} d="M128 150 C 138 200, 140 250, 138 292 L 178 292 C 180 248, 180 196, 170 146 Z" />

    {/* Ponto de entrada trocantérico (ápice) */}
    <circle cx="172" cy="104" r="5" fill="var(--teal)" />
    <line x1="172" y1="104" x2="152" y2="240" {...teal} strokeDasharray="4 4" />
    <text x="200" y="100" {...label} textAnchor="start" fill="var(--teal)">ápice do</text>
    <text x="200" y="114" {...label} textAnchor="start" fill="var(--teal)">grande troc.</text>

    {/* Ponto de entrada piriforme */}
    <circle cx="140" cy="112" r="5" fill="var(--amber)" />
    <text x="66" y="150" {...label} textAnchor="middle" fill="var(--amber)">fossa</text>
    <text x="66" y="164" {...label} textAnchor="middle" fill="var(--amber)">piriforme</text>

    <text x="118" y="230" {...mono} textAnchor="end" fill="var(--teal)">eixo do canal</text>
    <text x="130" y="288" {...label} textAnchor="middle">Fêmur proximal (AP)</text>
  </svg>
);

/* -------------------------------------------------------------------------- */
/* 5. Passo — REDUZIR antes de fresar (clamp / cerclagem / cortical unicortical) */
/* -------------------------------------------------------------------------- */
export const StepReducao: FC<FigureProps> = ({ className, title }) => (
  <svg viewBox="0 0 260 300" preserveAspectRatio="xMidYMid meet" role="img" className={className} xmlns="http://www.w3.org/2000/svg">
    <title>{title ?? "Passo — obter a redução ANTES de fresar (clamp/cerclagem)"}</title>

    {/* Fragmento proximal reduzido em relação à diáfise */}
    <path {...boneStyle} d="M96 26 C 116 40, 130 54, 138 70 L 118 88 C 108 74, 92 62, 80 54 Z" />
    <circle {...boneStyle} cx="70" cy="42" r="20" />
    <path {...boneStyle} fill="var(--surface-2, var(--surface))" d="M138 52 C 162 48, 180 58, 182 76 C 183 90, 170 98, 154 94 L 136 78 Z" />

    {/* Diáfise alinhada — sem varo, sem procurvato */}
    <path {...boneStyle} d="M112 96 C 120 150, 122 210, 120 282 L 158 282 C 160 208, 160 148, 152 92 Z" />

    {/* Linha de fratura reduzida (bordas alinhadas) */}
    <path d="M110 100 L 156 96" stroke="var(--line-strong)" strokeWidth="1" strokeDasharray="2 3" />

    {/* Clamp de redução percutâneo */}
    <g stroke="var(--teal)" strokeWidth="2.2" fill="none" strokeLinecap="round">
      <path d="M96 92 C 80 96, 70 108, 74 124" />
      <path d="M168 92 C 186 96, 196 108, 192 124" />
      <path d="M74 124 L 100 108 M192 124 L 166 108" />
    </g>
    <circle cx="102" cy="104" r="3" fill="var(--teal)" />
    <circle cx="164" cy="104" r="3" fill="var(--teal)" />
    <text x="60" y="140" {...label} textAnchor="middle" fill="var(--teal)">clamp</text>

    {/* Cerclagem opcional */}
    <ellipse cx="132" cy="130" rx="26" ry="8" fill="none" stroke="var(--teal)" strokeWidth="1.6" strokeDasharray="4 3" />
    <text x="188" y="134" {...mono} textAnchor="start" fill="var(--teal)">cerclagem</text>

    <text x="130" y="298" {...label} textAnchor="middle">Reduzir primeiro — a haste NÃO reduz sozinha</text>
  </svg>
);

/* -------------------------------------------------------------------------- */
/* 6. Passo — ponto de entrada e fio-guia corretos                             */
/* -------------------------------------------------------------------------- */
export const StepEntrada: FC<FigureProps> = ({ className, title }) => (
  <svg viewBox="0 0 240 300" preserveAspectRatio="xMidYMid meet" role="img" className={className} xmlns="http://www.w3.org/2000/svg">
    <title>{title ?? "Passo — ponto de entrada e fio-guia centrado no canal"}</title>

    <circle {...boneStyle} cx="70" cy="60" r="22" />
    <path {...boneStyle} d="M88 74 C 106 86, 120 98, 128 112 L 110 128 C 100 116, 86 106, 76 98 Z" />
    <path {...boneStyle} fill="var(--surface-2, var(--surface))" d="M128 88 C 154 82, 174 92, 176 112 C 177 128, 164 136, 146 132 L 126 114 Z" />
    <path {...boneStyle} d="M114 132 C 122 186, 124 240, 122 288 L 160 288 C 162 240, 162 186, 154 128 Z" />
    {/* Canal medular */}
    <path fill="var(--surface-2, var(--surface))" stroke="var(--line-strong)" strokeWidth="0.8"
      d="M126 150 C 124 200, 126 244, 130 284 L 148 284 C 150 244, 150 198, 148 146 Z" />

    {/* Fio-guia centrado */}
    <line x1="152" y1="98" x2="139" y2="286" stroke="var(--teal)" strokeWidth="2.4" />
    <circle cx="152" cy="98" r="4" fill="var(--teal)" />
    <text x="182" y="96" {...label} textAnchor="start" fill="var(--teal)">entrada no</text>
    <text x="182" y="110" {...label} textAnchor="start" fill="var(--teal)">ápice do troc.</text>
    <text x="176" y="210" {...mono} textAnchor="start" fill="var(--teal)">fio central</text>

    {/* Alerta de entrada lateral demais → varo */}
    <text x="118" y="298" {...label} textAnchor="middle" fill="var(--amber)">entrada lateral demais → varo</text>
  </svg>
);

/* -------------------------------------------------------------------------- */
/* 7. Passo — haste cefalomedular longa + parafuso cefálico                    */
/* -------------------------------------------------------------------------- */
export const StepHaste: FC<FigureProps> = ({ className, title }) => (
  <svg viewBox="0 0 220 340" preserveAspectRatio="xMidYMid meet" role="img" className={className} xmlns="http://www.w3.org/2000/svg">
    <title>{title ?? "Passo — haste cefalomedular longa com parafuso cefálico e travamento distal"}</title>

    {/* Fêmur AP até o joelho */}
    <circle {...boneStyle} cx="66" cy="52" r="22" />
    <path {...boneStyle} d="M84 66 C 102 78, 116 90, 124 104 L 106 120 C 96 108, 82 98, 72 90 Z" />
    <path {...boneStyle} fill="var(--surface-2, var(--surface))" d="M124 80 C 150 74, 170 84, 172 104 C 173 120, 160 128, 142 124 L 122 106 Z" />
    <path {...boneStyle} d="M110 124 C 118 200, 120 280, 116 322 L 150 322 C 152 280, 152 200, 146 120 Z" />

    {/* Traço de fratura */}
    <g className="fx-line">
      <path d="M108 156 L 150 150" stroke="var(--cortical)" strokeWidth="1.8" strokeDasharray="3 3" />
    </g>

    {/* Haste intramedular longa */}
    <rect x="126" y="98" width="8" height="214" rx="4" fill="var(--teal-tint)" stroke="var(--teal)" strokeWidth="1.8" transform="rotate(3 130 205)" />
    {/* Parafuso cefálico (lag/lâmina) para a cabeça */}
    <line x1="128" y1="112" x2="70" y2="60" stroke="var(--teal)" strokeWidth="4" strokeLinecap="round" />
    <circle cx="70" cy="60" r="6" fill="none" stroke="var(--teal)" strokeWidth="2" />
    {/* Travamento distal */}
    <line x1="120" y1="298" x2="150" y2="300" stroke="var(--teal)" strokeWidth="3" strokeLinecap="round" />

    <text x="182" y="150" {...label} textAnchor="start" fill="var(--teal)">haste longa</text>
    <text x="60" y="40" {...label} textAnchor="middle" fill="var(--teal)">parafuso cefálico</text>
    <text x="182" y="300" {...mono} textAnchor="start" fill="var(--teal)">trava distal</text>
    <text x="110" y="336" {...label} textAnchor="middle">Ponte todo o segmento instável</text>
  </svg>
);

/* -------------------------------------------------------------------------- */
/* 8. Passo — má-redução como causa de falha (varo / procurvato)               */
/* -------------------------------------------------------------------------- */
export const StepMaReducao: FC<FigureProps> = ({ className, title }) => (
  <svg viewBox="0 0 260 320" preserveAspectRatio="xMidYMid meet" role="img" className={className} xmlns="http://www.w3.org/2000/svg">
    <title>{title ?? "Má-redução (varo) — principal causa de falha mecânica e pseudartrose"}</title>

    {/* Fragmento proximal em varo e flexão (não corrigido) */}
    <circle {...boneStyle} cx="78" cy="80" r="22" />
    <path {...boneStyle} d="M96 92 C 110 102, 120 112, 124 124 L 106 136 C 98 126, 86 118, 76 112 Z" />
    <path {...boneStyle} fill="var(--surface-2, var(--surface))" d="M124 108 C 148 104, 164 114, 164 132 C 164 146, 150 152, 134 148 L 118 128 Z" />

    {/* Diáfise — desalinhada (gap medial, contato só lateral) */}
    <path {...boneStyle} d="M112 150 C 122 206, 124 262, 122 306 L 158 306 C 160 262, 158 206, 150 152 Z" />

    {/* Gap medial (falta de contato cortical) */}
    <path d="M108 150 L 118 132" stroke="var(--cortical)" strokeWidth="1" strokeDasharray="2 3" />
    <path fill="var(--amber)" opacity="0.3" stroke="var(--amber)" strokeWidth="1" d="M100 150 L 116 132 L 118 150 Z" />
    <text x="70" y="150" {...mono} textAnchor="end" fill="var(--amber)">gap medial</text>

    {/* Ângulo de varo */}
    <line x1="140" y1="120" x2="120" y2="260" stroke="var(--amber)" strokeWidth="1" strokeDasharray="4 3" />
    <line x1="140" y1="120" x2="150" y2="260" stroke="var(--amber)" strokeWidth="1" strokeDasharray="4 3" />
    <text x="176" y="200" {...mono} textAnchor="start" fill="var(--amber)">varo</text>

    {/* Haste in situ */}
    <rect x="128" y="118" width="7" height="180" rx="3" fill="none" stroke="var(--teal)" strokeWidth="1.6" transform="rotate(4 131 208)" />
    {/* Falha — parafuso/haste sob estresse */}
    <path d="M132 250 l10 6" stroke="var(--cortical)" strokeWidth="2.4" strokeLinecap="round" className="fx-line" />

    <text x="130" y="318" {...label} textAnchor="middle" fill="var(--cortical)">Varo + gap medial → pseudartrose / quebra do implante</text>
  </svg>
);

/* -------------------------------------------------------------------------- */
/* Registro do tópico — id prefixado por "fratura-subtrocanteriana:"           */
/* -------------------------------------------------------------------------- */
export const figures: Record<string, FC<FigureProps>> = {
  "fratura-subtrocanteriana:anatomia": Anatomia,
  "fratura-subtrocanteriana:russell-taylor": RussellTaylor,
  "fratura-subtrocanteriana:atipica": FraturaAtipica,
  "fratura-subtrocanteriana:acesso-entrada": AcessoEntrada,
  "fratura-subtrocanteriana:step-reducao": StepReducao,
  "fratura-subtrocanteriana:step-entrada": StepEntrada,
  "fratura-subtrocanteriana:step-haste": StepHaste,
  "fratura-subtrocanteriana:step-ma-reducao": StepMaReducao,
};
