import type { FC } from "react";
import type { FigureProps } from "../../../types/topic";

/* ============================================================================
   Figuras — Fratura do sacro (line-art esquemático original, 2 tons, sem
   copyright). Osso / vértebra: stroke var(--ink-soft), fill var(--surface).
   Disco, medula, raízes e demais tecidos neurais: var(--teal). Traço de
   fratura / compressão: var(--cortical). Medidas, ângulos e vetores:
   var(--amber). Rótulos: var(--muted). Todos os ids são prefixados por
   "fratura-sacro:".
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
  strokeWidth: 1.5,
  strokeLinejoin: "round" as const,
};

const neural = {
  fill: "none",
  stroke: "var(--teal)",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const fx = {
  fill: "none",
  stroke: "var(--cortical)",
  strokeWidth: 2.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const measure = {
  fill: "none",
  stroke: "var(--amber)",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
};

const label = {
  fontSize: 11,
  fill: "var(--muted)",
  fontFamily: "var(--font-body, sans-serif)",
};

const tag = {
  fontSize: 12,
  fill: "var(--ink)",
  fontFamily: "var(--font-mono, monospace)",
  letterSpacing: 0.5,
};

/* ---- Geometria compartilhada ---------------------------------------------
   Vista AP do sacro: cunha triangular, base superior (promontório / S1) e
   ápice inferior. Centro em x = 180. Quatro pares de forames anteriores,
   convergindo distalmente. ------------------------------------------------ */

const SACRUM_AP =
  "M104 56 C 100 44, 112 38, 128 38 L 232 38 C 248 38, 260 44, 256 56 " +
  "L 248 108 C 242 140, 230 172, 212 198 C 202 212, 192 220, 180 220 " +
  "C 168 220, 158 212, 148 198 C 130 172, 118 140, 112 108 Z";

const S1_BODY_AP =
  "M148 40 L212 40 L212 72 C 212 78, 204 83, 196 83 L164 83 " +
  "C 156 83, 148 78, 148 72 Z";

const SACRAL_CANAL_AP =
  "M172 44 L188 44 L186 120 L184 178 L176 178 L174 120 Z";

/** Forames sacrais anteriores: [dx a partir da linha média, y, raio]. */
const FORAMINA: Array<[number, number, number]> = [
  [30, 96, 7],
  [27, 124, 6.2],
  [24, 149, 5.4],
  [21, 171, 4.4],
];

const ILIUM_LEFT_AP =
  "M106 48 C 74 42, 44 58, 34 90 C 26 118, 36 148, 58 170 L 80 188 " +
  "L 94 176 C 72 156, 60 128, 62 100 C 64 76, 84 58, 110 55 Z";

/** Sacro em vista AP com forames, canal e (opcionalmente) os ilíacos. */
const SacrumAP: FC<{ showIlia?: boolean; showCanal?: boolean }> = ({
  showIlia = false,
  showCanal = true,
}) => (
  <g>
    {showIlia && (
      <g>
        <path {...bone2} d={ILIUM_LEFT_AP} />
        <g transform="translate(360,0) scale(-1,1)">
          <path {...bone2} d={ILIUM_LEFT_AP} />
        </g>
        {/* Articulações sacroilíacas */}
        <path {...neural} d="M110 54 C 104 84, 106 118, 116 146" opacity="0.85" />
        <path {...neural} d="M250 54 C 256 84, 254 118, 244 146" opacity="0.85" />
      </g>
    )}

    <path {...bone} d={SACRUM_AP} />
    <path {...bone2} d={S1_BODY_AP} />

    {/* Limite ala / corpo */}
    <path
      fill="none"
      stroke="var(--ink-soft)"
      strokeWidth="1.1"
      opacity="0.55"
      d="M148 44 C 142 72, 140 96, 142 118"
    />
    <path
      fill="none"
      stroke="var(--ink-soft)"
      strokeWidth="1.1"
      opacity="0.55"
      d="M212 44 C 218 72, 220 96, 218 118"
    />

    {showCanal && <path fill="var(--teal)" opacity="0.16" d={SACRAL_CANAL_AP} />}
    {showCanal && (
      <path
        fill="none"
        stroke="var(--teal)"
        strokeWidth="1.6"
        d={SACRAL_CANAL_AP}
      />
    )}

    {FORAMINA.map(([dx, y, r]) => (
      <g key={y}>
        <ellipse
          cx={180 - dx}
          cy={y}
          rx={r}
          ry={r * 0.82}
          fill="var(--teal)"
          opacity="0.14"
          stroke="var(--teal)"
          strokeWidth="1.4"
        />
        <ellipse
          cx={180 + dx}
          cy={y}
          rx={r}
          ry={r * 0.82}
          fill="var(--teal)"
          opacity="0.14"
          stroke="var(--teal)"
          strokeWidth="1.4"
        />
      </g>
    ))}

    {/* Cristas transversas (fusão dos corpos S1-S5) */}
    {[110, 137, 160].map((y) => (
      <path
        key={y}
        fill="none"
        stroke="var(--ink-soft)"
        strokeWidth="1"
        opacity="0.45"
        d={`M${180 - 34 + (y - 110) * 0.16} ${y} L${180 + 34 - (y - 110) * 0.16} ${y}`}
      />
    ))}

    {/* Hiato sacral */}
    <path
      fill="none"
      stroke="var(--teal)"
      strokeWidth="1.6"
      d="M174 180 L174 194 L186 194 L186 180"
    />
  </g>
);

/* ---- Geometria compartilhada — perfil (sagital) do sacro -----------------
   Anterior à esquerda, superior no topo. Fratura transversa ao nível S1-S2.
   ------------------------------------------------------------------------ */

const SACRUM_UPPER_LAT =
  "M100 48 L152 68 C 162 82, 168 94, 171 107 L 128 99 " +
  "C 121 79, 111 62, 100 48 Z";

const SACRUM_LOWER_LAT =
  "M128 104 L172 112 C 177 132, 178 141, 176 149 C 174 177, 158 197, 140 205 " +
  "L118 207 C 132 189, 140 163, 136 133 C 134 119, 131 111, 128 104 Z";

/** Perfil do sacro; o fragmento superior recebe o desvio de cada variante. */
const SacrumLateral: FC<{
  rotate?: number;
  dx?: number;
  dy?: number;
  comminuted?: boolean;
}> = ({ rotate = 0, dx = 0, dy = 0, comminuted = false }) => (
  <g>
    {/* Fragmento distal (S2-S5 + cóccix) — solidário à pelve */}
    <path {...bone} d={SACRUM_LOWER_LAT} />
    {/* Canal sacral distal */}
    <path
      {...neural}
      opacity="0.9"
      d="M152 112 C 162 134, 166 160, 162 180 C 159 192, 152 199, 144 202"
    />

    {/* Fragmento proximal (S1 + promontório) — solidário à coluna.
        O canal proximal acompanha o fragmento: nos tipos com translação, o
        degrau entre os dois segmentos é a estenose do canal. */}
    <g transform={`translate(${dx},${dy}) rotate(${rotate} 150 103)`}>
      <path {...bone} d={SACRUM_UPPER_LAT} />
      <path {...neural} opacity="0.9" d="M140 66 C 146 82, 150 96, 152 106" />
      {comminuted && (
        <g {...fx} strokeWidth="1.8">
          <path d="M118 66 L142 78" />
          <path d="M134 58 L130 92" />
          <path d="M112 82 L152 88" />
        </g>
      )}
    </g>
  </g>
);

/* ============================================================================
   1. Anatomia
   ========================================================================== */

const Anatomia: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 360 260"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
  >
    <title>
      {title ?? "Anatomia do sacro em vista anteroposterior — alas, forames, canal sacral e articulações sacroilíacas"}
    </title>

    <SacrumAP showIlia showCanal />

    {/* Raízes emergindo pelos forames (lado esquerdo do observador) */}
    {FORAMINA.map(([dx, y]) => (
      <path
        key={`r${y}`}
        {...neural}
        strokeWidth="1.6"
        opacity="0.8"
        d={`M${180 - dx - 6} ${y} C ${180 - dx - 22} ${y + 4}, ${180 - dx - 32} ${y + 12}, ${180 - dx - 40} ${y + 20}`}
      />
    ))}

    {/* Raiz de L5 cruzando a ala */}
    <path {...neural} strokeWidth="2.2" d="M132 30 C 122 52, 112 74, 100 96" />
    <text {...tag} x="112" y="26">
      L5
    </text>

    <text {...label} x="192" y="34">
      promontório / S1
    </text>
    <text {...label} x="252" y="72">
      ala
    </text>
    <text {...label} x="266" y="118">
      forames
    </text>
    <text {...label} x="266" y="132">
      anteriores
    </text>
    <text {...label} x="196" y="150">
      canal sacral
    </text>
    <text {...label} x="14" y="196">
      articulação sacroilíaca
    </text>
    <text {...label} x="190" y="208">
      hiato sacral
    </text>
    <text {...label} x="24" y="132">
      raízes S1-S4
    </text>

    <path {...measure} strokeWidth="1.2" d="M188 146 L182 132" opacity="0.7" />
    <path {...measure} strokeWidth="1.2" d="M262 118 L214 122" opacity="0.7" />
    <path {...measure} strokeWidth="1.2" d="M100 192 L112 168" opacity="0.7" />
  </svg>
);

/* ============================================================================
   2. Classificação de Denis — zonas I / II / III
   ========================================================================== */

const DENIS_LINES: Record<string, string> = {
  I: "M128 44 C 124 82, 126 120, 134 156",
  II: "M150 44 C 146 84, 148 124, 156 166",
  III: "M180 42 C 176 86, 178 130, 180 182",
};

const DENIS_TEXT: Record<string, { code: string; risk: string }> = {
  I: { code: "Zona I — ala", risk: "déficit ~6% (L5)" },
  II: { code: "Zona II — transforaminal", risk: "déficit ~28% (ciática)" },
  III: { code: "Zona III — canal central", risk: "déficit ~57% (esfíncteres)" },
};

const Denis: FC<FigureProps> = ({ variant = "I", className, title }) => {
  const v = DENIS_LINES[variant] ? variant : "I";
  const info = DENIS_TEXT[v];

  return (
    <svg
      viewBox="0 0 360 260"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
    >
      <title>
        {title ?? `Classificação de Denis, ${info.code} — traço vertical do sacro em vista anteroposterior`}
      </title>

      <SacrumAP showCanal />

      {/* Faixas das três zonas (referência) */}
      <g opacity="0.28">
        <path {...measure} strokeWidth="1" strokeDasharray="3 4" d="M140 40 C 136 90, 138 140, 146 180" />
        <path {...measure} strokeWidth="1" strokeDasharray="3 4" d="M164 40 C 160 92, 162 146, 168 190" />
      </g>
      <text {...label} x="112" y="240">
        I
      </text>
      <text {...label} x="150" y="240">
        II
      </text>
      <text {...label} x="176" y="240">
        III
      </text>
      <path {...measure} strokeWidth="1" opacity="0.5" d="M104 232 L256 232" />

      {/* Traço de fratura da zona ativa */}
      <path {...fx} className="fx-line" d={DENIS_LINES[v]} />

      {/* Raiz em risco */}
      {v === "I" && (
        <path {...neural} strokeWidth="2.2" d="M132 30 C 122 52, 112 74, 100 96" />
      )}
      {v === "II" && (
        <path
          {...neural}
          strokeWidth="2.2"
          d="M144 96 C 128 104, 116 116, 106 132"
        />
      )}
      {v === "III" && (
        <g>
          <path {...neural} strokeWidth="2.2" d="M174 120 C 168 148, 168 172, 172 194" />
          <path {...neural} strokeWidth="2.2" d="M186 120 C 192 148, 192 172, 188 194" />
        </g>
      )}

      <text {...tag} x="14" y="24">
        {info.code}
      </text>
      <text {...label} x="14" y="40">
        {info.risk}
      </text>
    </svg>
  );
};

/* ============================================================================
   3. Classificação de Roy-Camille (fratura transversa alta) — perfil
   ========================================================================== */

const ROY_CAMILLE: Record<
  string,
  { rotate: number; dx: number; dy: number; comminuted: boolean; code: string; note: string }
> = {
  I: { rotate: -14, dx: 0, dy: 0, comminuted: false, code: "Roy-Camille I", note: "angulação em flexão, sem translação" },
  II: { rotate: -16, dx: 14, dy: 0, comminuted: false, code: "Roy-Camille II", note: "flexão + translação posterior" },
  III: { rotate: 0, dx: -18, dy: 4, comminuted: false, code: "Roy-Camille III", note: "translação anterior completa" },
  IV: { rotate: 0, dx: 0, dy: 3, comminuted: true, code: "Roy-Camille IV", note: "cominuição de S1 por carga axial (Strange-Vognsen)" },
};

const RoyCamille: FC<FigureProps> = ({ variant = "I", className, title }) => {
  const v = ROY_CAMILLE[variant] ? variant : "I";
  const cfg = ROY_CAMILLE[v];

  return (
    <svg
      viewBox="0 0 300 260"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
    >
      <title>
        {title ?? `Classificação de Roy-Camille, tipo ${v} — perfil do sacro com fratura transversa alta (${cfg.note})`}
      </title>

      <g transform="translate(40,10)">
        <SacrumLateral
          rotate={cfg.rotate}
          dx={cfg.dx}
          dy={cfg.dy}
          comminuted={cfg.comminuted}
        />

        {/* Traço transverso */}
        <path {...fx} className="fx-line" d="M124 100 C 140 104, 158 108, 174 110" />

        {/* Ângulo de cifose sacral nos tipos com angulação */}
        {cfg.rotate !== 0 && (
          <g>
            <path {...measure} strokeDasharray="4 4" d="M150 103 L150 44" />
            <path
              {...measure}
              strokeDasharray="4 4"
              d={`M150 103 L${150 + Math.sin((cfg.rotate * Math.PI) / 180) * 59} ${103 - Math.cos((cfg.rotate * Math.PI) / 180) * 59}`}
            />
            <path {...measure} d="M150 66 A 37 37 0 0 0 141 69" />
            <text {...label} x="152" y="58" fill="var(--amber)">
              cifose
            </text>
          </g>
        )}

        {/* Vetor de translação */}
        {cfg.dx !== 0 && (
          <g>
            <path
              {...measure}
              d={cfg.dx > 0 ? "M112 40 L138 40" : "M138 40 L112 40"}
            />
            <path
              {...measure}
              d={cfg.dx > 0 ? "M132 35 L139 40 L132 45" : "M118 35 L111 40 L118 45"}
            />
            <text {...label} x={cfg.dx > 0 ? 142 : 60} y="38" fill="var(--amber)">
              {cfg.dx > 0 ? "posterior" : "anterior"}
            </text>
          </g>
        )}
      </g>

      <text {...tag} x="14" y="24">
        {cfg.code}
      </text>
      <text {...label} x="14" y="40">
        {cfg.note}
      </text>
      <text {...label} x="14" y="248">
        anterior ←
      </text>
      <text {...label} x="236" y="248">
        → posterior
      </text>
    </svg>
  );
};

/* ============================================================================
   4. Padrões transversos — dissociação espinopélvica (U / H / λ / T)
   ========================================================================== */

const PadroesTransversos: FC<FigureProps> = ({ variant = "U", className, title }) => {
  const v = ["U", "H", "lambda", "T"].includes(variant) ? variant : "U";

  const leftVertical = "M150 60 C 146 92, 148 122, 154 150";
  const rightVertical = "M210 60 C 214 92, 212 122, 206 150";
  const transverse = "M150 108 L210 108";
  const transverseWide = "M126 108 L234 108";
  const midlineDown = "M180 108 C 178 138, 178 166, 180 190";

  return (
    <svg
      viewBox="0 0 360 260"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
    >
      <title>
        {title ?? `Padrão transverso do sacro tipo ${v === "lambda" ? "lambda" : v} — dissociação espinopélvica em vista anteroposterior`}
      </title>

      <SacrumAP showIlia showCanal />

      <g {...fx} className="fx-line">
        {(v === "U" || v === "H") && <path d={leftVertical} />}
        {(v === "U" || v === "H") && <path d={rightVertical} />}
        {v === "lambda" && <path d={leftVertical} />}
        {v === "U" && <path d={transverse} />}
        {v === "H" && <path d={transverseWide} />}
        {v === "lambda" && <path d={transverseWide} />}
        {v === "T" && <path d={transverseWide} />}
        {v === "T" && <path d={midlineDown} />}
      </g>

      {/* Segmento superior dissociado da pelve */}
      <path
        fill="var(--cortical)"
        opacity="0.1"
        d="M148 40 L212 40 L212 106 L148 106 Z"
      />
      <path {...measure} strokeDasharray="4 4" d="M180 24 L180 38" />
      <path {...measure} d="M175 32 L180 24 L185 32" />
      <text {...label} x="188" y="26" fill="var(--amber)">
        coluna
      </text>
      <path {...measure} strokeDasharray="4 4" d="M52 206 L84 184" />
      <text {...label} x="14" y="212" fill="var(--amber)">
        pelve
      </text>

      <text {...tag} x="14" y="24">
        {v === "lambda" ? "Padrão λ" : `Padrão em ${v}`}
      </text>
      <text {...label} x="14" y="40">
        {v === "U" && "verticais bilaterais + transversa contida"}
        {v === "H" && "verticais bilaterais + transversa completa"}
        {v === "lambda" && "vertical unilateral + transversa"}
        {v === "T" && "transversa + vertical medial descendente"}
      </text>
    </svg>
  );
};

/* ============================================================================
   5. Raízes sacrais e mapa do exame neurológico
   ========================================================================== */

const RaizesSacrais: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 360 260"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
  >
    <title>
      {title ?? "Raízes sacrais e correlação com o exame neurológico — L5 na ala, S1-S4 nos forames, S2-S4 e função esfincteriana"}
    </title>

    <SacrumAP showCanal />

    {/* Saco dural terminando em S2 */}
    <path fill="var(--teal)" opacity="0.14" d="M172 40 L188 40 L186 124 L174 124 Z" />
    <path {...neural} strokeWidth="1.6" d="M172 40 L172 122 L188 122 L188 40" />
    <text {...label} x="196" y="126">
      saco dural termina em S2
    </text>

    {/* Cauda equina */}
    <g {...neural} strokeWidth="1.2" opacity="0.85">
      <path d="M176 44 L177 118" />
      <path d="M180 44 L180 118" />
      <path d="M184 44 L183 118" />
    </g>

    {/* Raiz de L5 sobre a ala */}
    <path {...neural} strokeWidth="2.4" d="M134 28 C 122 52, 110 76, 96 100" />
    <text {...tag} x="106" y="24">
      L5
    </text>
    <text {...label} x="14" y="106">
      L5 — dorsiflexão do hálux
    </text>

    {/* Raízes S1-S4 */}
    {FORAMINA.map(([dx, y], i) => (
      <g key={`root${y}`}>
        <path
          {...neural}
          strokeWidth="1.8"
          d={`M${180 - dx - 6} ${y} C ${180 - dx - 26} ${y + 6}, ${180 - dx - 44} ${y + 14}, ${180 - dx - 60} ${y + 22}`}
        />
        <text {...tag} x={180 - dx - 82} y={y + 30}>
          {`S${i + 1}`}
        </text>
      </g>
    ))}

    <text {...label} x="240" y="94">
      S1 — flexão plantar
    </text>
    <text {...label} x="240" y="106">
      e reflexo aquileu
    </text>
    <text {...label} x="240" y="150">
      S2-S4 — bexiga e
    </text>
    <text {...label} x="240" y="162">
      esfíncteres, sela,
    </text>
    <text {...label} x="240" y="174">
      bulbocavernoso
    </text>

    {/* Área "em sela" */}
    <path
      fill="var(--amber)"
      opacity="0.16"
      stroke="var(--amber)"
      strokeWidth="1.4"
      strokeDasharray="4 3"
      d="M156 190 C 156 176, 204 176, 204 190 C 204 210, 192 226, 180 226 C 168 226, 156 210, 156 190 Z"
    />
    <text {...label} x="150" y="244" fill="var(--amber)">
      anestesia em sela (zona III)
    </text>

    <path {...measure} strokeWidth="1.2" opacity="0.6" d="M236 90 L216 96" />
    <path {...measure} strokeWidth="1.2" opacity="0.6" d="M236 146 L212 150" />
  </svg>
);

/* ============================================================================
   6. Corredor ósseo de S1 (corte axial) — normal vs sacro displásico
   ========================================================================== */

const CorredorS1: FC<FigureProps> = ({ variant = "normal", className, title }) => {
  const dysmorphic = variant === "displasico";

  return (
    <svg
      viewBox="0 0 360 240"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
    >
      <title>
        {title ??
          (dysmorphic
            ? "Corte axial de S1 em sacro displásico — corredor estreito e oblíquo, com risco de perfuração alar"
            : "Corte axial de S1 — corredor ósseo seguro para o parafuso iliossacral")}
      </title>

      {/* Ilíacos */}
      <path
        {...bone2}
        d="M64 44 C 34 58, 22 92, 30 126 C 36 152, 52 172, 74 184 L 92 168 C 72 152, 60 128, 60 102 C 60 80, 66 60, 80 46 Z"
      />
      <g transform="translate(360,0) scale(-1,1)">
        <path
          {...bone2}
          d="M64 44 C 34 58, 22 92, 30 126 C 36 152, 52 172, 74 184 L 92 168 C 72 152, 60 128, 60 102 C 60 80, 66 60, 80 46 Z"
        />
      </g>

      {/* Corpo de S1 (anterior) + alas (posterolaterais) */}
      <path
        {...bone}
        d={
          dysmorphic
            ? "M94 76 C 116 52, 148 44, 180 44 C 212 44, 244 52, 266 76 L 258 112 C 240 128, 216 138, 196 146 L 164 146 C 144 138, 120 128, 102 112 Z"
            : "M96 64 C 120 48, 150 42, 180 42 C 210 42, 240 48, 264 64 L 254 104 C 234 122, 210 132, 192 140 L 168 140 C 150 132, 126 122, 106 104 Z"
        }
      />

      {/* Canal sacral */}
      <ellipse
        cx="180"
        cy={dysmorphic ? 130 : 124}
        rx="15"
        ry="11"
        fill="var(--teal)"
        opacity="0.16"
        stroke="var(--teal)"
        strokeWidth="1.6"
      />
      <text {...label} x="200" y={dysmorphic ? 136 : 130}>
        canal sacral
      </text>

      {/* Processo espinhoso / elementos posteriores */}
      <path {...bone2} d="M172 142 L188 142 L184 170 L176 170 Z" />

      {/* Articulações sacroilíacas */}
      <path {...neural} opacity="0.85" d="M92 68 C 86 92, 88 118, 98 140" />
      <path {...neural} opacity="0.85" d="M268 68 C 274 92, 272 118, 262 140" />
      <text {...label} x="14" y="200">
        articulação sacroilíaca
      </text>
      <path {...measure} strokeWidth="1.2" opacity="0.6" d="M84 190 L96 146" />

      {/* Corredor */}
      {dysmorphic ? (
        <g>
          <path
            fill="var(--amber)"
            opacity="0.14"
            d="M60 112 L300 76 L300 100 L60 136 Z"
          />
          <path {...measure} strokeDasharray="5 4" d="M52 118 L308 80" />
          <text {...label} x="112" y="30" fill="var(--amber)">
            corredor estreito e oblíquo — considerar S2
          </text>
        </g>
      ) : (
        <g>
          <path
            fill="var(--amber)"
            opacity="0.14"
            d="M60 78 L300 78 L300 106 L60 106 Z"
          />
          <path {...measure} strokeDasharray="5 4" d="M52 92 L308 92" />
          <text {...label} x="126" y="30" fill="var(--amber)">
            corredor transsacral seguro
          </text>
        </g>
      )}

      <text {...label} x="150" y="228">
        anterior ↑ / posterior ↓
      </text>
      <text {...tag} x="14" y="24">
        {dysmorphic ? "S1 displásico" : "S1 normal"}
      </text>
    </svg>
  );
};

/* ============================================================================
   7. Montagens de fixação
   ========================================================================== */

const FIXACAO_TAG: Record<string, { code: string; note: string }> = {
  iliossacral: {
    code: "Parafuso iliossacral",
    note: "percutâneo, corredor de S1 — fixação do anel posterior",
  },
  transsacral: {
    code: "Parafuso transsacral",
    note: "transilíaco-transsacral — atravessa ambos os ilíacos",
  },
  triangular: {
    code: "Osteossíntese triangular",
    note: "lombopélvica (L5-ílio) + parafuso iliossacral",
  },
  lombopelvica: {
    code: "Fixação lombopélvica",
    note: "bilateral L5/S1-ílio (ou S2AI) — dissociação espinopélvica",
  },
};

const Fixacao: FC<FigureProps> = ({ variant = "iliossacral", className, title }) => {
  const v = FIXACAO_TAG[variant] ? variant : "iliossacral";
  const info = FIXACAO_TAG[v];

  const screw = (x1: number, y1: number, x2: number, y2: number, key: string) => (
    <g key={key}>
      <path
        fill="none"
        stroke="var(--teal)"
        strokeWidth="5"
        strokeLinecap="round"
        d={`M${x1} ${y1} L${x2} ${y2}`}
      />
      <circle cx={x1} cy={y1} r="4.4" fill="var(--surface)" stroke="var(--teal)" strokeWidth="1.8" />
    </g>
  );

  return (
    <svg
      viewBox="0 0 360 280"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
    >
      <title>{title ?? `${info.code} — ${info.note}`}</title>

      <g transform="translate(0,16)">
        {/* Vértebra L5 (para as montagens lombopélvicas) */}
        {(v === "triangular" || v === "lombopelvica") && (
          <g>
            <path {...bone2} d="M152 4 L208 4 L208 30 L152 30 Z" />
            <text {...tag} x="214" y="22">
              L5
            </text>
            <path
              fill="var(--teal)"
              opacity="0.18"
              d="M162 30 L198 30 L196 36 L164 36 Z"
            />
          </g>
        )}

        <SacrumAP showIlia showCanal />

        {/* Traço de fratura de referência (transforaminal esquerda) */}
        <path {...fx} className="fx-line" opacity="0.8" d="M150 44 C 146 84, 148 124, 156 166" />

        {v === "iliossacral" && screw(58, 88, 196, 62, "is1")}

        {v === "transsacral" && (
          <g>
            {screw(52, 88, 308, 88, "ts1")}
            <circle cx="308" cy="88" r="4.4" fill="var(--surface)" stroke="var(--teal)" strokeWidth="1.8" />
          </g>
        )}

        {v === "triangular" && (
          <g>
            {screw(58, 88, 196, 62, "tri-is")}
            {/* Parafuso pedicular L5 + parafuso ilíaco + haste */}
            <circle cx="162" cy="17" r="5" fill="var(--surface)" stroke="var(--teal)" strokeWidth="2" />
            <circle cx="72" cy="150" r="5" fill="var(--surface)" stroke="var(--teal)" strokeWidth="2" />
            <path
              fill="none"
              stroke="var(--teal)"
              strokeWidth="3.4"
              strokeLinecap="round"
              d="M162 17 C 124 40, 92 96, 72 150"
            />
            <path {...measure} strokeDasharray="4 4" opacity="0.8" d="M162 17 L72 150 L196 62 Z" />
            <text {...label} x="86" y="182" fill="var(--amber)">
              triângulo: L5 - ílio - S1
            </text>
          </g>
        )}

        {v === "lombopelvica" && (
          <g>
            {/* Parafusos pediculares L5 bilaterais */}
            <circle cx="162" cy="17" r="5" fill="var(--surface)" stroke="var(--teal)" strokeWidth="2" />
            <circle cx="198" cy="17" r="5" fill="var(--surface)" stroke="var(--teal)" strokeWidth="2" />
            {/* Parafusos ilíacos / S2AI bilaterais */}
            <circle cx="72" cy="150" r="5" fill="var(--surface)" stroke="var(--teal)" strokeWidth="2" />
            <circle cx="288" cy="150" r="5" fill="var(--surface)" stroke="var(--teal)" strokeWidth="2" />
            {/* Hastes */}
            <path
              fill="none"
              stroke="var(--teal)"
              strokeWidth="3.4"
              strokeLinecap="round"
              d="M162 17 C 124 40, 92 96, 72 150"
            />
            <path
              fill="none"
              stroke="var(--teal)"
              strokeWidth="3.4"
              strokeLinecap="round"
              d="M198 17 C 236 40, 268 96, 288 150"
            />
            {/* Conector transverso */}
            <path
              fill="none"
              stroke="var(--teal)"
              strokeWidth="2.6"
              strokeLinecap="round"
              d="M108 84 L252 84"
            />
            <text {...label} x="256" y="80">
              conector transverso
            </text>
          </g>
        )}
      </g>

      <text {...tag} x="14" y="24">
        {info.code}
      </text>
      <text {...label} x="14" y="272">
        {info.note}
      </text>
    </svg>
  );
};

/* ============================================================================
   8. Sequência de redução da dissociação espinopélvica (perfil)
   ========================================================================== */

const Reducao: FC<FigureProps> = ({ activeStep = 1, className, title }) => {
  const step = activeStep < 1 ? 1 : activeStep > 3 ? 3 : activeStep;
  const kyphosis = step === 1 ? -16 : step === 2 ? -7 : 0;

  /* Legenda em duas linhas: no viewBox de 320 a etapa 3 não cabe em uma só. */
  const legend: string[] =
    step === 1
      ? ["1. Deformidade inicial —", "cifose sacral e translação"]
      : step === 2
        ? ["2. Tração transcondiliana", "+ contratração manual"]
        : ["3. Coxim sob a transição lombossacral", "— hiperlordose corrige a cifose"];

  return (
    <svg
      viewBox="0 0 320 260"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
    >
      <title>
        {title ??
          `Sequência de redução da dissociação espinopélvica, etapa ${step} — ${legend.join(" ")}`}
      </title>

      <g transform="translate(40,10)">
        <SacrumLateral rotate={kyphosis} dx={step === 1 ? 8 : 0} dy={0} />
        <path
          {...fx}
          className="fx-line"
          opacity={step === 3 ? 0.45 : 1}
          d="M124 100 C 140 104, 158 108, 174 110"
        />

        {/* Ângulo residual de cifose */}
        {kyphosis !== 0 && (
          <g>
            <path {...measure} strokeDasharray="4 4" d="M150 103 L150 46" />
            <path
              {...measure}
              strokeDasharray="4 4"
              d={`M150 103 L${150 + Math.sin((kyphosis * Math.PI) / 180) * 57} ${103 - Math.cos((kyphosis * Math.PI) / 180) * 57}`}
            />
          </g>
        )}

        {/* Vetor de tração distal */}
        {step >= 2 && (
          <g>
            <path {...measure} strokeWidth="2.2" d="M150 224 L150 250" />
            <path {...measure} strokeWidth="2.2" d="M144 243 L150 251 L156 243" />
            <text {...label} x="158" y="246" fill="var(--amber)">
              tração transcondiliana
            </text>
          </g>
        )}

        {/* Coxim de hiperlordose */}
        {step >= 3 && (
          <g>
            <path
              fill="var(--amber)"
              opacity="0.18"
              stroke="var(--amber)"
              strokeWidth="1.6"
              d="M182 84 C 214 78, 232 96, 226 122 C 220 144, 196 148, 182 134 Z"
            />
            <path {...measure} strokeWidth="2.2" d="M212 108 L172 108" />
            <path {...measure} strokeWidth="2.2" d="M180 102 L171 108 L180 114" />
            <text {...label} x="196" y="164" fill="var(--amber)">
              coxim
            </text>
          </g>
        )}
      </g>

      <text {...tag} x="14" y="24">
        {`Etapa ${step}`}
      </text>
      {legend.map((line, i) => (
        <text {...label} key={line} x="14" y={40 + i * 16}>
          {line}
        </text>
      ))}
    </svg>
  );
};

/* ========================================================================== */

export const figures: Record<string, FC<FigureProps>> = {
  "fratura-sacro:anatomia": Anatomia,
  "fratura-sacro:denis": Denis,
  "fratura-sacro:roy-camille": RoyCamille,
  "fratura-sacro:padroes-transversos": PadroesTransversos,
  "fratura-sacro:raizes-sacrais": RaizesSacrais,
  "fratura-sacro:corredor-s1": CorredorS1,
  "fratura-sacro:fixacao": Fixacao,
  "fratura-sacro:reducao": Reducao,
};
