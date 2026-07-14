import type { FC } from "react";
import type { FigureProps } from "../../../types/topic";

/* ============================================================================
   Figuras — Fratura por insuficiência sacral (line-art esquemático original,
   2 tons, sem copyright). Convenção de cores (somente via CSS var):
     osso / sacro / ílio ....... stroke var(--ink-soft), fill var(--surface)
     tecido neural / implante .. var(--teal)
     traço de fratura .......... var(--cortical) + className "fx-line"
     medidas / zonas / setas ... var(--amber)
     rótulos <text> ............ fontSize 11, fill var(--muted)
   Todos os ids são prefixados por "fratura-insuficiencia-sacral:".
   Referência editorial: Rockwood and Green's Fractures in Adults, 10a ed.
   (2024) / Campbell's Operative Orthopaedics, 14a ed.
   ========================================================================== */

const boneStyle = {
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

const fx = {
  stroke: "var(--cortical)",
  strokeWidth: 2.6,
  strokeLinecap: "round" as const,
  fill: "none",
};

const neural = {
  stroke: "var(--teal)",
  strokeWidth: 2,
  fill: "none",
  strokeLinecap: "round" as const,
};

const measure = {
  stroke: "var(--amber)",
  strokeWidth: 1.4,
  fill: "none",
};

/* ---- Geometria compartilhada — sacro em visão anterior (AP) --------------- */

const SACRUM_AP =
  "M116 58 C 112 44, 126 36, 142 38 L 238 38 C 254 36, 268 44, 264 58 L 252 112 C 248 142, 240 174, 228 206 L 214 240 C 208 252, 198 258, 190 258 C 182 258, 172 252, 166 240 L 152 206 C 140 174, 132 142, 128 112 Z";

/** Forames sacrais anteriores S1–S4 (afunilam distalmente). */
const FORAMINA = [
  { y: 92, dx: 34, rx: 10, ry: 7 },
  { y: 128, dx: 31, rx: 9, ry: 6.5 },
  { y: 162, dx: 28, rx: 8, ry: 5.5 },
  { y: 194, dx: 25, rx: 6.5, ry: 4.5 },
];

/** Ílio parcial (hemipelve do lado do observador), só para mostrar a SI. */
const ILIUM_LEFT =
  "M114 44 C 80 32, 42 44, 26 72 C 12 96, 18 130, 40 152 C 58 170, 72 192, 78 216 L 102 212 C 96 182, 80 156, 64 136 C 50 118, 50 96, 64 80 C 78 64, 98 56, 116 62 Z";

/** Linha da articulação sacroilíaca (lado do observador). */
const SI_LEFT = "M118 54 C 106 84, 110 118, 126 146";

const SacrumBase: FC<{
  showForamina?: boolean;
  showIlia?: boolean;
  showSegments?: boolean;
}> = ({ showForamina = true, showIlia = true, showSegments = true }) => (
  <g>
    {showIlia && (
      <>
        <path {...bone2} d={ILIUM_LEFT} />
        <g transform="translate(380,0) scale(-1,1)">
          <path {...bone2} d={ILIUM_LEFT} />
        </g>
        <path
          d={SI_LEFT}
          fill="none"
          stroke="var(--ink-soft)"
          strokeWidth="1.6"
        />
        <g transform="translate(380,0) scale(-1,1)">
          <path
            d={SI_LEFT}
            fill="none"
            stroke="var(--ink-soft)"
            strokeWidth="1.6"
          />
        </g>
      </>
    )}

    <path {...boneStyle} d={SACRUM_AP} />

    {/* Promontório / platô de S1 */}
    <path
      d="M142 46 C 166 40, 214 40, 238 46"
      fill="none"
      stroke="var(--ink-soft)"
      strokeWidth="1.4"
    />

    {showSegments &&
      [110, 146, 178, 208].map((y, i) => (
        <path
          key={y}
          d={`M${190 - (22 - i * 3)} ${y} L${190 + (22 - i * 3)} ${y}`}
          fill="none"
          stroke="var(--ink-soft)"
          strokeWidth="1.2"
          opacity="0.75"
        />
      ))}

    {showForamina &&
      FORAMINA.map((f) => (
        <g key={f.y}>
          <ellipse
            cx={190 - f.dx}
            cy={f.y}
            rx={f.rx}
            ry={f.ry}
            {...bone2}
            fill="var(--surface)"
          />
          <ellipse
            cx={190 + f.dx}
            cy={f.y}
            rx={f.rx}
            ry={f.ry}
            {...bone2}
            fill="var(--surface)"
          />
        </g>
      ))}
  </g>
);

/* ---- 1. Anatomia ---------------------------------------------------------- */

const Anatomia: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 380 300"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>
      {title ??
        "Sacro em visão anterior — asas, forames, articulações sacroilíacas e raízes L5/S1"}
    </title>

    <SacrumBase />

    {/* Raiz de L5 cruzando a asa do sacro; raiz de S1 saindo do forame */}
    <path {...neural} d="M126 40 C 140 58, 148 74, 152 92" />
    <path {...neural} d="M254 40 C 240 58, 232 74, 228 92" />
    <path {...neural} d="M156 92 C 146 104, 138 118, 134 134" opacity="0.85" />
    <path {...neural} d="M224 92 C 234 104, 242 118, 246 134" opacity="0.85" />

    {/* Corredor osteopênico da asa ("alar void") */}
    <ellipse
      cx="140"
      cy="82"
      rx="16"
      ry="12"
      fill="none"
      stroke="var(--amber)"
      strokeWidth="1.3"
      strokeDasharray="3 3"
    />
    <ellipse
      cx="240"
      cy="82"
      rx="16"
      ry="12"
      fill="none"
      stroke="var(--amber)"
      strokeWidth="1.3"
      strokeDasharray="3 3"
    />

    <text x="60" y="30" {...label}>
      ílio
    </text>
    <text x="190" y="30" {...label} textAnchor="middle">
      promontório / platô de S1
    </text>
    <text x="108" y="164" {...label} textAnchor="end" fill="var(--teal)">
      raiz de L5
    </text>
    <path {...measure} d="M112 160 L 148 96" opacity="0.6" />
    <text x="300" y="120" {...label} fill="var(--teal)">
      raiz de S1
    </text>
    <path {...measure} d="M298 116 L 236 100" opacity="0.6" />
    <text x="190" y="278" {...label} textAnchor="middle">
      forames sacrais anteriores S1–S4
    </text>
    <text x="140" y="82" {...label} textAnchor="middle" fill="var(--amber)">
      asa
    </text>
    <text x="30" y="200" {...label} fill="var(--amber)">
      SI
    </text>
    <path {...measure} d="M42 196 L 112 130" opacity="0.6" />
  </svg>
);

/* ---- 2. Zonas de Denis ---------------------------------------------------- */

const DENIS_LINES: Record<string, string> = {
  I: "M140 50 C 136 90, 138 130, 146 168",
  II: "M156 48 C 154 90, 156 132, 160 176",
  III: "M190 52 C 186 92, 190 134, 192 180",
};

const ZonasDenis: FC<FigureProps> = ({ variant, className, title }) => {
  const v = variant === "II" || variant === "III" ? variant : "I";
  const legend: Record<string, string> = {
    I: "Zona I — lateral aos forames (asa): raiz de L5 em risco",
    II: "Zona II — transforaminal: raiz de S1 em risco",
    III: "Zona III — medial aos forames (canal): raízes sacrais / cauda equina",
  };

  return (
    <svg
      viewBox="0 0 380 300"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `Zonas de Denis do sacro — zona ${v}`}</title>

      <SacrumBase showIlia={false} />

      {/* Limites das zonas */}
      {[
        { x: 190 - 46, key: "L1" },
        { x: 190 - 20, key: "L2" },
        { x: 190 + 20, key: "L3" },
        { x: 190 + 46, key: "L4" },
      ].map((l) => (
        <path
          key={l.key}
          d={`M${l.x} 40 L${l.x} 250`}
          stroke="var(--amber)"
          strokeWidth="1.2"
          strokeDasharray="4 4"
          fill="none"
          opacity="0.75"
        />
      ))}

      <text x="128" y="272" {...mono} textAnchor="middle" fill={v === "I" ? "var(--amber)" : "var(--muted)"}>
        I
      </text>
      <text x="158" y="272" {...mono} textAnchor="middle" fill={v === "II" ? "var(--amber)" : "var(--muted)"}>
        II
      </text>
      <text x="190" y="272" {...mono} textAnchor="middle" fill={v === "III" ? "var(--amber)" : "var(--muted)"}>
        III
      </text>
      <text x="222" y="272" {...mono} textAnchor="middle" fill={v === "II" ? "var(--amber)" : "var(--muted)"}>
        II
      </text>
      <text x="252" y="272" {...mono} textAnchor="middle" fill={v === "I" ? "var(--amber)" : "var(--muted)"}>
        I
      </text>

      {/* Canal sacral (zona III) */}
      <path
        {...neural}
        d="M190 52 L190 210"
        strokeWidth="6"
        opacity={v === "III" ? 0.9 : 0.3}
      />

      {/* Traço de fratura na zona selecionada (bilateral no esquema) */}
      <path {...fx} className="fx-line" d={DENIS_LINES[v]} />
      {v !== "III" && (
        <g transform="translate(380,0) scale(-1,1)">
          <path {...fx} className="fx-line" d={DENIS_LINES[v]} opacity="0.55" />
        </g>
      )}

      <text x="190" y="292" {...label} textAnchor="middle">
        {legend[v]}
      </text>
      <text x="190" y="24" {...label} textAnchor="middle">
        Sacro — visão anterior
      </text>
    </svg>
  );
};

/* ---- 3. Sinal de Honda ---------------------------------------------------- */

const SinalHonda: FC<FigureProps> = ({ variant, className, title }) => {
  const v = variant === "U" ? "U" : "H";

  return (
    <svg
      viewBox="0 0 380 300"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>
        {title ??
          `Sinal de Honda — padrão em ${v} das fraturas por insuficiência do sacro`}
      </title>

      <SacrumBase showIlia={false} />

      {/* Realce do padrão de captação / edema (atrás dos traços) */}
      <g stroke="var(--amber)" strokeWidth="7" fill="none" opacity="0.28" strokeLinecap="round">
        <path d="M140 56 L142 172" />
        <path d="M240 56 L238 172" />
        {v === "H" ? (
          <path d="M144 138 L236 138" />
        ) : (
          <path d="M144 150 C 162 186, 218 186, 236 150" />
        )}
      </g>

      {/* Componentes verticais bilaterais (zona I) */}
      <path {...fx} className="fx-line" d="M140 52 C 136 96, 138 140, 144 176" />
      <path {...fx} className="fx-line" d="M240 52 C 244 96, 242 140, 236 176" />

      {/* Componente transverso (S2) — completo no H, arqueado no U */}
      {v === "H" ? (
        <path {...fx} className="fx-line" d="M142 138 L238 138" />
      ) : (
        <path {...fx} className="fx-line" d="M142 150 C 160 190, 220 190, 238 150" />
      )}

      <text x="190" y="24" {...label} textAnchor="middle">
        Cintilografia / RM coronal — padrão de captação e edema
      </text>
      <text x="190" y="118" {...mono} textAnchor="middle" fill="var(--amber)">
        {v}
      </text>
      <text x="76" y="112" {...label} textAnchor="middle">
        traço vertical
      </text>
      <text x="76" y="126" {...label} textAnchor="middle">
        alar (Denis I)
      </text>
      <path {...measure} d="M100 118 L 134 112" opacity="0.6" />
      <text x="316" y="176" {...label} textAnchor="middle">
        componente
      </text>
      <text x="316" y="190" {...label} textAnchor="middle">
        transverso (S2)
      </text>
      <path {...measure} d="M282 176 L 238 152" opacity="0.6" />
      <text x="190" y="288" {...label} textAnchor="middle">
        {v === "H"
          ? "Honda em H — dois traços verticais + traço transverso completo"
          : "Honda em U — traços verticais unidos por componente transverso arqueado"}
      </text>
    </svg>
  );
};

/* ---- 4. Modalidades de imagem --------------------------------------------- */

const Imagem: FC<FigureProps> = ({ variant, className, title }) => {
  const v = variant === "tc" || variant === "rm" ? variant : "rx";
  const caption: Record<string, string> = {
    rx: "Radiografia AP — sobreposição de gases e osteopenia: fratura oculta em ~2/3 dos casos",
    tc: "TC — traço lucente na asa, esclerose e cominução; melhor definição morfológica",
    rm: "RM (STIR / T2 fat-sat) — edema medular ósseo em torno do traço; sensibilidade ~99%",
  };

  return (
    <svg
      viewBox="0 0 380 300"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `Diagnóstico por imagem — ${caption[v]}`}</title>

      <defs>
        <pattern
          id="fis-edema"
          width="6"
          height="6"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <path d="M0 0 L0 6" stroke="var(--teal)" strokeWidth="1.4" opacity="0.5" />
        </pattern>
        <clipPath id="fis-sacrum-clip">
          <path d={SACRUM_AP} />
        </clipPath>
      </defs>

      {/* Moldura da imagem */}
      <rect
        x="16"
        y="16"
        width="348"
        height="242"
        rx="6"
        fill="none"
        stroke="var(--ink-soft)"
        strokeWidth="1.2"
        opacity="0.5"
      />

      <SacrumBase showIlia={v === "rx"} />

      {v === "rx" && (
        <>
          {/* Sobreposição de alças / gases obscurecendo a asa */}
          <g fill="var(--muted)" opacity="0.16">
            <ellipse cx="150" cy="96" rx="30" ry="20" />
            <ellipse cx="232" cy="86" rx="26" ry="18" />
            <ellipse cx="192" cy="128" rx="34" ry="16" />
          </g>
          <path
            {...fx}
            className="fx-line"
            d="M140 54 C 136 96, 138 138, 144 172"
            opacity="0.18"
            strokeDasharray="3 5"
          />
          <text x="190" y="282" {...label} textAnchor="middle">
            fratura presente, porém não visível — radiografia normal NÃO exclui
          </text>
        </>
      )}

      {v === "tc" && (
        <>
          {/* Halo de esclerose (atrás do traço) */}
          <g stroke="var(--ink-soft)" strokeWidth="6" fill="none" opacity="0.3">
            <path d="M140 58 L142 168" />
            <path d="M240 58 L238 168" opacity="0.6" />
          </g>
          <path
            {...fx}
            className="fx-line"
            d="M140 54 C 136 96, 138 138, 144 172"
          />
          <path
            {...fx}
            className="fx-line"
            d="M240 54 C 244 96, 242 140, 236 172"
            opacity="0.6"
          />
          <text x="70" y="204" {...label} textAnchor="middle">
            esclerose
          </text>
          <path {...measure} d="M92 200 L 134 168" opacity="0.6" />
          <text x="190" y="282" {...label} textAnchor="middle">
            TC define morfologia, cominução e desvio — guia a fixação
          </text>
        </>
      )}

      {v === "rm" && (
        <>
          <g clipPath="url(#fis-sacrum-clip)">
            <ellipse cx="140" cy="112" rx="34" ry="72" fill="url(#fis-edema)" />
            <ellipse cx="240" cy="112" rx="34" ry="72" fill="url(#fis-edema)" />
          </g>
          <path
            {...fx}
            className="fx-line"
            d="M140 54 C 136 96, 138 138, 144 172"
          />
          <path
            {...fx}
            className="fx-line"
            d="M240 54 C 244 96, 242 140, 236 172"
          />
          <text x="60" y="196" {...label} textAnchor="middle" fill="var(--teal)">
            edema medular
          </text>
          <path {...measure} d="M92 192 L 130 160" opacity="0.6" />
          <text x="190" y="282" {...label} textAnchor="middle">
            RM: hipossinal em T1 + hipersinal em STIR — exame de escolha
          </text>
        </>
      )}

      <text x="30" y="36" {...mono}>
        {v === "rx" ? "RX AP" : v === "tc" ? "TC" : "RM STIR"}
      </text>
    </svg>
  );
};

/* ---- 5. Classificação FFP de Rommens -------------------------------------- */

const FfpRommens: FC<FigureProps> = ({ variant, className, title }) => {
  const v =
    variant === "II" || variant === "III" || variant === "IV" ? variant : "I";

  const legend: Record<string, string> = {
    I: "FFP I — lesão apenas do anel anterior (ramos púbicos); posterior íntegro",
    II: "FFP II — lesão posterior NÃO deslocada (fratura por compressão da asa) + anterior",
    III: "FFP III — lesão posterior DESLOCADA unilateral",
    IV: "FFP IV — lesão posterior bilateral (fratura em H/U, dissociação espinopélvica)",
  };

  const posteriorLeft = v !== "I";
  const posteriorRight = v === "IV";
  const displaced = v === "III";

  return (
    <svg
      viewBox="0 0 380 300"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `Classificação FFP de Rommens — tipo ${v}`}</title>

      {/* Anel anterior esquemático (ramos púbicos e sínfise) */}
      <g {...bone2}>
        <path d="M96 210 C 118 226, 152 242, 184 244 L 196 244 C 228 242, 262 226, 284 210 L 288 222 C 264 240, 228 256, 196 258 L 184 258 C 152 256, 116 240, 92 222 Z" />
      </g>
      <path
        d="M190 244 L190 258"
        stroke="var(--ink-soft)"
        strokeWidth="1.6"
        fill="none"
      />

      <SacrumBase showSegments={false} />

      {/* Fraturas do anel anterior (presentes em todos os tipos) */}
      <path {...fx} className="fx-line" d="M124 224 L 118 240" />
      <path {...fx} className="fx-line" d="M256 224 L 262 240" />

      {/* Lesão posterior */}
      {posteriorLeft && (
        <g transform={displaced ? "translate(-4, 6)" : undefined}>
          <path
            {...fx}
            className="fx-line"
            d="M140 54 C 136 96, 138 140, 144 176"
          />
        </g>
      )}
      {posteriorRight && (
        <path
          {...fx}
          className="fx-line"
          d="M240 54 C 244 96, 242 140, 236 176"
        />
      )}
      {v === "IV" && (
        <path {...fx} className="fx-line" d="M142 146 L238 146" />
      )}

      {/* Impacção / compressão da asa no FFP II */}
      {v === "II" && (
        <g stroke="var(--amber)" strokeWidth="1.6" fill="none">
          <path d="M104 92 L128 92" />
          <path d="M122 86 L130 92 L122 98" />
          <text x="72" y="96" {...label} fill="var(--amber)">
            compressão
          </text>
        </g>
      )}

      {/* Seta de desvio cranial no FFP III */}
      {displaced && (
        <g stroke="var(--amber)" strokeWidth="1.6" fill="none">
          <path d="M96 150 L96 108" />
          <path d="M90 118 L96 106 L102 118" />
          <text x="60" y="150" {...label} fill="var(--amber)">
            desvio
          </text>
        </g>
      )}

      <text x="190" y="24" {...label} textAnchor="middle">
        Anel pélvico — visão AP (esquema)
      </text>
      <text x="190" y="286" {...label} textAnchor="middle">
        {legend[v]}
      </text>
      <text x="330" y="252" {...mono} textAnchor="middle" fill="var(--amber)">
        {`FFP ${v}`}
      </text>
    </svg>
  );
};

/* ---- 6. Sacroplastia (corte axial em S1) ---------------------------------- */

const AXIAL_SACRUM =
  "M150 112 C 168 104, 212 104, 230 112 C 246 118, 260 126, 274 136 C 288 146, 290 164, 278 174 C 266 184, 246 184, 230 178 L 214 172 C 210 186, 200 194, 190 194 C 180 194, 170 186, 166 172 L 150 178 C 134 184, 114 184, 102 174 C 90 164, 92 146, 106 136 C 120 126, 134 118, 150 112 Z";

const AXIAL_CANAL = "M172 140 L208 140 L200 170 C 196 180, 184 180, 180 170 Z";

const AXIAL_ILIUM =
  "M96 108 C 66 104, 40 120, 32 148 C 26 172, 38 196, 62 206 L 74 188 C 58 180, 52 164, 58 150 C 66 132, 82 126, 100 130 Z";

const Sacroplastia: FC<FigureProps> = ({ variant, className, title }) => {
  const v = variant === "eixo-longo" ? "eixo-longo" : "eixo-curto";

  return (
    <svg
      viewBox="0 0 380 300"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>
        {title ??
          `Sacroplastia percutânea guiada por TC — técnica de ${v} (corte axial em S1)`}
      </title>

      <defs>
        <pattern
          id="fis-cement"
          width="5"
          height="5"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(30)"
        >
          <path d="M0 0 L0 5" stroke="var(--teal)" strokeWidth="1.6" opacity="0.7" />
        </pattern>
        <clipPath id="fis-axial-clip">
          <path d={AXIAL_SACRUM} />
        </clipPath>
      </defs>

      <path {...bone2} d={AXIAL_ILIUM} />
      <g transform="translate(380,0) scale(-1,1)">
        <path {...bone2} d={AXIAL_ILIUM} />
      </g>

      <path {...boneStyle} d={AXIAL_SACRUM} />
      <path {...neural} d={AXIAL_CANAL} fill="var(--surface)" />

      {/* Articulações sacroilíacas */}
      <path
        d="M100 122 C 106 142, 104 162, 96 178"
        fill="none"
        stroke="var(--ink-soft)"
        strokeWidth="1.6"
      />
      <g transform="translate(380,0) scale(-1,1)">
        <path
          d="M100 122 C 106 142, 104 162, 96 178"
          fill="none"
          stroke="var(--ink-soft)"
          strokeWidth="1.6"
        />
      </g>

      {/* Traço de fratura alar bilateral */}
      <path {...fx} className="fx-line" d="M136 116 C 130 138, 132 160, 140 176" />
      <path {...fx} className="fx-line" d="M244 116 C 250 138, 248 160, 240 176" opacity="0.6" />

      {/* Cimento na asa */}
      <g clipPath="url(#fis-axial-clip)">
        <ellipse
          cx="136"
          cy="146"
          rx="26"
          ry="26"
          fill="url(#fis-cement)"
          stroke="var(--teal)"
          strokeWidth="1.6"
        />
      </g>

      {/* Agulha */}
      {v === "eixo-curto" ? (
        <g stroke="var(--teal)" strokeWidth="3" strokeLinecap="round" fill="none">
          <path d="M64 244 L 134 158" />
          <path d="M62 246 L 50 260" strokeWidth="5" />
        </g>
      ) : (
        <g stroke="var(--teal)" strokeWidth="3" strokeLinecap="round" fill="none">
          <path d="M136 262 L 136 152" />
          <path d="M136 264 L 136 278" strokeWidth="5" />
        </g>
      )}

      {/* Corredor seguro / distâncias críticas */}
      <path
        {...measure}
        d="M172 140 C 160 130, 148 126, 138 126"
        strokeDasharray="3 3"
      />
      <text x="230" y="96" {...label} textAnchor="middle" fill="var(--teal)">
        canal sacral
      </text>
      <path {...measure} d="M212 100 L 196 136" opacity="0.6" />
      <text x="300" y="240" {...label} textAnchor="middle" fill="var(--teal)">
        cimento (PMMA)
      </text>
      <path {...measure} d="M262 236 L 158 158" opacity="0.5" />
      <text x="40" y="120" {...label} textAnchor="middle">
        ílio
      </text>
      <text x="190" y="212" {...label} textAnchor="middle">
        crista sacral mediana (posterior)
      </text>
      <text x="190" y="24" {...label} textAnchor="middle">
        Corte axial em S1 — paciente em decúbito ventral
      </text>
      <text x="190" y="288" {...label} textAnchor="middle">
        {v === "eixo-curto"
          ? "Eixo curto: agulha transilíaca oblíqua até a asa — trajeto mais curto, mais punções"
          : "Eixo longo: agulha do ápice à base pelo eixo maior da asa — preenchimento contínuo"}
      </text>
    </svg>
  );
};

/* ---- 7. Fixação percutânea ------------------------------------------------ */

const FixacaoPercutanea: FC<FigureProps> = ({ variant, className, title }) => {
  const v = variant === "transsacral" ? "transsacral" : "iliossacral";

  return (
    <svg
      viewBox="0 0 380 300"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>
        {title ??
          `Fixação percutânea do sacro — ${
            v === "transsacral"
              ? "parafuso/barra transsacral em S1"
              : "parafuso iliossacral em S1"
          }`}
      </title>

      <SacrumBase />

      {/* Corredor ósseo seguro de S1 */}
      <path
        {...measure}
        d="M60 82 L320 82"
        strokeDasharray="5 4"
        opacity="0.8"
      />
      <path {...measure} d="M60 66 L320 66" strokeDasharray="5 4" opacity="0.35" />
      <path {...measure} d="M60 98 L320 98" strokeDasharray="5 4" opacity="0.35" />

      {/* Traço de fratura alar */}
      <path {...fx} className="fx-line" d="M140 52 C 136 96, 138 140, 144 176" />
      {v === "transsacral" && (
        <path {...fx} className="fx-line" d="M240 52 C 244 96, 242 140, 236 176" />
      )}

      {/* Implante */}
      <g stroke="var(--teal)" strokeWidth="4" strokeLinecap="round" fill="none">
        {v === "transsacral" ? (
          <path d="M56 82 L324 82" />
        ) : (
          <path d="M56 82 L206 82" />
        )}
      </g>
      {/* Cabeça(s) do parafuso */}
      <g fill="var(--teal)">
        <rect x="46" y="74" width="12" height="16" rx="2" />
        {v === "transsacral" && <rect x="322" y="74" width="12" height="16" rx="2" />}
      </g>
      {/* Rosca */}
      <g stroke="var(--teal)" strokeWidth="1.4" fill="none" opacity="0.9">
        {(v === "transsacral"
          ? [252, 262, 272, 282, 292, 302, 312]
          : [176, 186, 196]
        ).map((x) => (
          <path key={x} d={`M${x} 74 L${x} 90`} />
        ))}
      </g>

      {/* Cimento em torno da rosca (augmentation) */}
      <ellipse
        cx="168"
        cy="82"
        rx="20"
        ry="13"
        fill="var(--teal)"
        opacity="0.16"
        stroke="var(--teal)"
        strokeWidth="1.2"
      />

      <text x="190" y="24" {...label} textAnchor="middle">
        Sacro — visão AP (fluoroscopia / navegação)
      </text>
      <text x="336" y="120" {...label} textAnchor="end" fill="var(--amber)">
        corredor ósseo de S1
      </text>
      <path {...measure} d="M300 116 L 276 92" opacity="0.6" />
      <text x="150" y="118" {...label} textAnchor="middle" fill="var(--teal)">
        cimento peri-rosca
      </text>
      <path {...measure} d="M154 114 L 166 96" opacity="0.6" />
      <text x="190" y="288" {...label} textAnchor="middle">
        {v === "transsacral"
          ? "Barra/parafuso transsacral — ancoragem bicortical nos dois ílios; lesão bilateral (FFP IV)"
          : "Parafuso iliossacral unilateral ± cimento — FFP II/III com dor refratária"}
      </text>
    </svg>
  );
};

/* ---- 8. Conduta escalonada ------------------------------------------------ */

const ETAPAS = [
  { n: 1, t: "Suspeitar", d: "idoso, dor lombossacra" },
  { n: 2, t: "Imagem", d: "RX → TC + RM" },
  { n: 3, t: "Classificar", d: "Denis + FFP" },
  { n: 4, t: "Conservador", d: "analgesia + mobilizar" },
  { n: 5, t: "Osteoporose", d: "investigar e tratar" },
  { n: 6, t: "Reavaliar", d: "2–3 semanas" },
  { n: 7, t: "Intervir", d: "sacroplastia / fixação" },
];

const CondutaEscalonada: FC<FigureProps> = ({ activeStep, className, title }) => (
  <svg
    viewBox="0 0 380 300"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Sequência de conduta na fratura por insuficiência sacral"}</title>

    <text x="190" y="26" {...label} textAnchor="middle">
      Sequência de conduta — a base é conservadora
    </text>

    {ETAPAS.map((e, i) => {
      const y = 44 + i * 34;
      const on = activeStep === e.n;
      return (
        <g key={e.n}>
          <rect
            x="44"
            y={y}
            width="292"
            height="26"
            rx="5"
            fill={on ? "var(--surface-2, var(--surface))" : "var(--surface)"}
            stroke={on ? "var(--amber)" : "var(--ink-soft)"}
            strokeWidth={on ? 2 : 1.3}
          />
          <circle
            cx="60"
            cy={y + 13}
            r="8"
            fill="none"
            stroke={on ? "var(--amber)" : "var(--teal)"}
            strokeWidth="1.6"
          />
          <text
            x="60"
            y={y + 17}
            {...label}
            textAnchor="middle"
            fill={on ? "var(--amber)" : "var(--teal)"}
          >
            {e.n}
          </text>
          <text x="78" y={y + 17} {...mono} fill={on ? "var(--amber)" : "var(--ink)"}>
            {e.t}
          </text>
          <text x="188" y={y + 17} {...label}>
            {e.d}
          </text>
          {i < ETAPAS.length - 1 && (
            <path
              d={`M190 ${y + 26} L190 ${y + 34}`}
              stroke="var(--ink-soft)"
              strokeWidth="1.3"
              fill="none"
            />
          )}
        </g>
      );
    })}

    <text x="190" y="292" {...label} textAnchor="middle">
      Escalar para cirurgia só se dor refratária ou instabilidade progressiva
    </text>
  </svg>
);

/* ---- Registro exportado --------------------------------------------------- */

export const figures: Record<string, FC<FigureProps>> = {
  "fratura-insuficiencia-sacral:anatomia": Anatomia,
  "fratura-insuficiencia-sacral:zonas-denis": ZonasDenis,
  "fratura-insuficiencia-sacral:sinal-honda": SinalHonda,
  "fratura-insuficiencia-sacral:imagem": Imagem,
  "fratura-insuficiencia-sacral:ffp-rommens": FfpRommens,
  "fratura-insuficiencia-sacral:sacroplastia": Sacroplastia,
  "fratura-insuficiencia-sacral:fixacao-percutanea": FixacaoPercutanea,
  "fratura-insuficiencia-sacral:conduta-escalonada": CondutaEscalonada,
};
