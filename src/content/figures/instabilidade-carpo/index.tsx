import type { FC } from "react";
import type { FigureProps } from "../../../types/topic";

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

const ligIntact = {
  fill: "none",
  stroke: "var(--teal)",
  strokeWidth: 5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const ligTorn = {
  fill: "none",
  stroke: "var(--cortical)",
  strokeWidth: 4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/* Reusable dorsal-view carpus. Radial side (scaphoid) on the left; the eight
   carpal bones, distal radius/ulna and metacarpal bases in schematic form. */
function CarpusDorsal() {
  return (
    <g>
      {/* forearm bones */}
      <path {...boneBack} d="M70 270 C66 236, 74 214, 118 210 L150 210 C150 236, 146 258, 140 276 Z" />
      <path {...boneBack} d="M214 272 C214 244, 214 224, 250 214 L286 216 C288 240, 286 260, 280 278 Z" />
      {/* proximal row */}
      <path {...bone} d="M120 178 C142 168, 158 176, 160 196 C160 214, 148 226, 128 224 C110 222, 100 206, 104 192 C107 184, 112 181, 120 178 Z" />
      <path {...bone} d="M168 176 C192 170, 208 180, 206 200 C204 220, 188 228, 170 224 C154 220, 150 200, 156 186 C159 181, 163 178, 168 176 Z" />
      <path {...bone} d="M216 178 C238 172, 252 182, 250 200 C248 218, 234 226, 218 222 C204 218, 200 200, 206 188 C209 183, 212 180, 216 178 Z" />
      {/* distal row */}
      <path {...bone} d="M108 130 C126 122, 142 128, 144 146 C144 162, 132 170, 116 168 C100 166, 92 150, 96 140 C99 134, 103 132, 108 130 Z" />
      <path {...bone} d="M158 122 C182 114, 200 126, 200 148 C200 170, 184 180, 164 176 C146 172, 140 150, 146 136 C149 129, 153 125, 158 122 Z" />
      <path {...bone} d="M216 130 C236 124, 250 132, 250 150 C250 166, 238 174, 222 172 C206 170, 200 152, 204 140 C207 134, 211 132, 216 130 Z" />
      {/* metacarpal bases */}
      <rect x="104" y="94" width="26" height="30" rx="7" {...boneBack} />
      <rect x="150" y="86" width="26" height="32" rx="7" {...boneBack} />
      <rect x="196" y="92" width="26" height="30" rx="7" {...boneBack} />
    </g>
  );
}

export const Anatomy: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 440 320"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Anatomia dos ligamentos interósseos escafolunar e lunopiramidal (vista dorsal)"}</title>

    <CarpusDorsal />

    {/* scapholunate interosseous ligament — dorsal band is the biomechanically key portion */}
    <path d="M158 196 C164 188, 166 190, 170 198" {...ligIntact} />
    <path d="M155 208 C162 214, 166 214, 172 208" fill="none" stroke="var(--teal)" strokeWidth="2.5" strokeDasharray="4 3" />
    {/* lunotriquetral interosseous ligament — palmar band is the key portion */}
    <path d="M206 200 C212 208, 214 208, 218 200" {...ligIntact} />

    <path d="M150 190 L128 150" stroke="var(--line-strong)" />
    <text x="70" y="146" {...label}>banda dorsal (SL)</text>
    <path d="M214 190 L244 158" stroke="var(--line-strong)" />
    <text x="250" y="154" {...label}>banda palmar (LP)</text>

    <text x="130" y="202" {...label} textAnchor="middle">E</text>
    <text x="182" y="202" {...label} textAnchor="middle">S</text>
    <text x="230" y="202" {...label} textAnchor="middle">P</text>
    <text x="182" y="150" {...label} textAnchor="middle">C</text>
    <text x="98" y="266" {...label} textAnchor="middle">rádio</text>
    <text x="252" y="268" {...label} textAnchor="middle">ulna</text>

    <text x="220" y="26" {...mono} textAnchor="middle">vista dorsal do carpo direito</text>
    <text x="220" y="300" {...label} textAnchor="middle">
      E escafoide · S semilunar · P piramidal · C capitato. A banda dorsal estabiliza o SL; a palmar, o LP.
    </text>
  </svg>
);

export const MayfieldSequence: FC<FigureProps> = ({ className, title, variant, activeStep }) => {
  const stageMap: Record<string, number> = { i: 1, ii: 2, iii: 3, iv: 4 };
  const stage = variant
    ? stageMap[variant.toLowerCase()] ?? 1
    : activeStep && activeStep >= 1 && activeStep <= 4
      ? activeStep
      : 1;

  const names = ["", "I · escafolunar", "II · capitolunar", "III · lunopiramidal", "IV · luxação do semilunar"];
  const lunateVolar = stage >= 4;

  return (
    <svg
      viewBox="0 0 420 320"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `Instabilidade perilunar progressiva de Mayfield — estágio ${stage}`}</title>

      {/* lunate at the centre; the arc of injury sweeps radial → ulnar around it */}
      <path
        {...(lunateVolar ? boneBack : bone)}
        d="M180 150 C214 138, 238 158, 236 190 C234 220, 210 236, 182 228 C158 221, 148 190, 156 168 C161 157, 170 153, 180 150 Z"
      />
      <text x="196" y="192" {...label} textAnchor="middle">semilunar</text>

      {/* scaphoid (radial) */}
      <path {...bone} d="M104 132 C126 118, 146 128, 148 152 C150 178, 134 196, 112 190 C92 184, 84 156, 92 142 C95 137, 99 135, 104 132 Z" />
      <text x="112" y="160" {...label} textAnchor="middle">escaf.</text>
      {/* capitate (distal) */}
      <path {...bone} d="M196 78 C222 70, 244 84, 244 110 C244 132, 226 144, 204 138 C186 133, 180 106, 186 92 Z" />
      <text x="212" y="112" {...label} textAnchor="middle">capitato</text>
      {/* triquetrum (ulnar) */}
      <path {...bone} d="M266 158 C290 150, 308 166, 304 192 C300 214, 280 222, 262 214 C248 208, 246 182, 254 168 Z" />
      <text x="280" y="190" {...label} textAnchor="middle">pirâm.</text>

      {/* ligaments — teal intact, cortical disrupted, in Mayfield order */}
      <path d="M146 158 C156 158, 158 160, 160 168" {...(stage >= 1 ? ligTorn : ligIntact)} />
      <path d="M206 138 C204 146, 200 148, 196 152" {...(stage >= 2 ? ligTorn : ligIntact)} />
      <path d="M244 176 C240 178, 238 180, 236 184" {...(stage >= 3 ? ligTorn : ligIntact)} />

      {/* sweeping arc of progressive disruption */}
      <path
        d="M150 150 C168 118, 226 112, 250 148"
        fill="none"
        stroke="var(--amber)"
        strokeWidth="2"
        strokeDasharray="5 4"
        markerEnd="url(#mayArrow)"
        opacity={stage >= 2 ? 0.9 : 0.3}
      />
      <defs>
        <marker id="mayArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 Z" fill="var(--amber)" />
        </marker>
      </defs>
      {lunateVolar && (
        <path d="M198 232 C204 258, 200 280, 186 296" fill="none" stroke="var(--cortical)" strokeWidth="2.5" markerEnd="url(#mayArrow)" />
      )}

      <text x="210" y="26" {...mono} textAnchor="middle">{names[stage]}</text>
      <text x="210" y="312" {...label} textAnchor="middle">
        A lesão avança do rádio (SL) para o ulnar (LP); no estágio IV o semilunar luxa em direção palmar.
      </text>
    </svg>
  );
};

export const DisiVisi: FC<FigureProps> = ({ className, title, variant }) => {
  const v = (variant ?? "disi").toLowerCase();
  const lunTilt = v === "disi" ? 32 : v === "visi" ? -30 : 0;
  const scaphTilt = v === "disi" ? 62 : v === "visi" ? 40 : 47;

  return (
    <svg
      viewBox="0 0 440 300"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>
        {title ??
          `Alinhamento sagital do semilunar: ${v === "disi" ? "DISI" : v === "visi" ? "VISI" : "normal"}`}
      </title>

      {/* lateral view: radius left → lunate → capitate → 3rd metacarpal right */}
      <path {...boneBack} d="M30 150 C28 128, 40 118, 96 118 L128 120 C128 148, 126 176, 120 196 L34 190 Z" />
      <text x="66" y="212" {...label} textAnchor="middle">rádio</text>

      {/* reference longitudinal axis of the radius */}
      <line x1="40" y1="150" x2="410" y2="150" stroke="var(--amber)" strokeWidth="1.2" strokeDasharray="6 5" />
      <text x="400" y="144" {...label} textAnchor="end" fill="var(--amber)">eixo do rádio</text>

      {/* lunate — crescent tilted by lunTilt about its centre (170,150) */}
      <g transform={`rotate(${lunTilt} 170 150)`}>
        <path
          {...bone}
          d="M148 128 C176 120, 196 132, 194 150 C196 168, 176 180, 148 172 C164 162, 170 156, 170 150 C170 144, 164 138, 148 128 Z"
        />
        <line x1="170" y1="116" x2="170" y2="184" stroke="var(--teal)" strokeWidth="2" strokeDasharray="4 3" />
      </g>
      <text x="170" y="196" {...label} textAnchor="middle">semilunar</text>

      {/* scaphoid — projected long axis for the SL angle */}
      <g transform={`rotate(${scaphTilt} 150 150)`}>
        <ellipse cx="150" cy="182" rx="16" ry="34" {...boneBack} />
      </g>
      <line
        x1="150"
        y1="150"
        x2={150 + 70 * Math.sin((scaphTilt * Math.PI) / 180)}
        y2={150 + 70 * Math.cos((scaphTilt * Math.PI) / 180)}
        stroke="var(--cortical)"
        strokeWidth="1.6"
        strokeDasharray="4 3"
      />
      <text x="150" y="236" {...label} textAnchor="middle" fill="var(--cortical)">eixo do escafoide</text>

      {/* capitate + 3rd metacarpal continuing the distal column */}
      <path {...bone} d="M210 132 C236 124, 256 138, 254 158 C252 178, 232 186, 212 178 C198 172, 196 148, 202 138 Z" />
      <rect x="262" y="128" width="70" height="30" rx="9" {...boneBack} />
      <text x="232" y="200" {...label} textAnchor="middle">capitato</text>

      <rect x="316" y="24" width="98" height="30" rx="9"
        fill={v === "disi" ? "var(--cortical-tint)" : v === "visi" ? "var(--amber)" : "var(--teal-tint)"} opacity="0.9" />
      <text x="365" y="43" {...mono} textAnchor="middle"
        fill={v === "disi" ? "var(--cortical)" : v === "visi" ? "var(--surface)" : "var(--teal-deep)"}>
        {v === "disi" ? "DISI" : v === "visi" ? "VISI" : "NORMAL"}
      </text>

      <text x="220" y="26" {...mono} textAnchor="middle">vista lateral · coluna central</text>
      <text x="220" y="278" {...label} textAnchor="middle">
        {v === "disi"
          ? "Semilunar em extensão (dorsiflexão); ângulo SL habitualmente > 60–70°."
          : v === "visi"
            ? "Semilunar em flexão palmar; padrão típico da instabilidade lunopiramidal."
            : "Rádio, semilunar e capitato colineares; ângulo SL normal ≈ 30–60°."}
      </text>
    </svg>
  );
};

export const RadiographicSigns: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 440 310"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Sinais radiográficos da dissociação escafolunar: gap SL, sinal do anel e ângulo SL"}</title>

    {/* frontal (PA) schematic: scaphoid rotated (ring sign) + widened SL gap */}
    <path {...boneBack} d="M60 274 C56 232, 70 210, 150 206 L262 208 C262 246, 258 264, 252 282 Z" />
    <text x="160" y="272" {...label} textAnchor="middle">rádio distal</text>

    {/* lunate */}
    <path {...bone} d="M188 150 C216 140, 240 158, 238 190 C236 218, 212 232, 186 224 C164 217, 156 188, 164 168 C169 157, 178 153, 188 150 Z" />
    <text x="200" y="192" {...label} textAnchor="middle">semilunar</text>

    {/* scaphoid — foreshortened/flexed, producing the cortical ring sign */}
    <path {...bone} d="M104 150 C130 138, 150 150, 150 178 C150 206, 130 220, 108 212 C90 205, 84 176, 92 162 C95 156, 99 153, 104 150 Z" />
    <circle cx="120" cy="190" r="15" fill="none" stroke="var(--cortical)" strokeWidth="3" />
    <text x="100" y="238" {...label} fill="var(--cortical)">sinal do anel cortical</text>

    {/* SL gap — Terry Thomas sign */}
    <line x1="152" y1="180" x2="164" y2="180" stroke="var(--amber)" strokeWidth="2" />
    <line x1="152" y1="172" x2="152" y2="188" stroke="var(--amber)" />
    <line x1="164" y1="172" x2="164" y2="188" stroke="var(--amber)" />
    <path d="M158 176 L200 118" stroke="var(--line-strong)" />
    <text x="204" y="116" {...label} fill="var(--amber)">gap SL alargado</text>
    <text x="204" y="130" {...label}>(&gt; 3 mm · sinal de Terry-Thomas)</text>

    {/* capitate */}
    <path {...bone} d="M186 96 C210 88, 230 100, 230 124 C230 144, 214 154, 194 148 C178 143, 174 118, 180 106 Z" />

    <text x="220" y="26" {...mono} textAnchor="middle">incidência PA (± carga / desvio ulnar)</text>
    <text x="220" y="300" {...label} textAnchor="middle">
      A radiografia sob estresse pode revelar diástase dinâmica não vista na incidência neutra.
    </text>
  </svg>
);

export const GarciaEliasStages: FC<FigureProps> = ({ className, title }) => {
  const stages = [
    ["I", "parcial /", "predinâmica"],
    ["II", "dinâmica", "reparável"],
    ["III", "estática", "redutível"],
    ["IV", "estática", "irredutível"],
    ["V", "má-redução", "cartilagem ok"],
    ["VI", "artrose", "SLAC"],
  ];
  return (
    <svg
      viewBox="0 0 460 260"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? "Espectro de Garcia-Elias da dissociação escafolunar (estágios I–VI)"}</title>

      <line x1="40" y1="120" x2="420" y2="120" stroke="var(--line-strong)" strokeWidth="2" markerEnd="url(#geArrow)" />
      <defs>
        <marker id="geArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 Z" fill="var(--line-strong)" />
        </marker>
      </defs>

      {stages.map(([n, a, b], i) => {
        const x = 62 + i * 63;
        const reparo = i <= 1;
        return (
          <g key={n}>
            <circle cx={x} cy="120" r="15" fill={reparo ? "var(--teal-tint)" : "var(--surface)"} stroke={reparo ? "var(--teal)" : "var(--ink-soft)"} strokeWidth="2" />
            <text x={x} y="124" {...mono} textAnchor="middle" fill={reparo ? "var(--teal-deep)" : "var(--ink)"}>{n}</text>
            <text x={x} y="150" {...label} textAnchor="middle">{a}</text>
            <text x={x} y="164" {...label} textAnchor="middle">{b}</text>
          </g>
        );
      })}

      <rect x="48" y="78" width="120" height="22" rx="7" fill="var(--teal-tint)" opacity="0.6" />
      <text x="108" y="93" {...label} textAnchor="middle" fill="var(--teal-deep)">reparo direto viável</text>
      <rect x="176" y="78" width="120" height="22" rx="7" fill="var(--surface-2, var(--surface))" stroke="var(--ink-soft)" strokeWidth="1" />
      <text x="236" y="93" {...label} textAnchor="middle">reconstrução ligamentar</text>
      <rect x="304" y="78" width="112" height="22" rx="7" fill="var(--cortical-tint)" opacity="0.7" />
      <text x="360" y="93" {...label} textAnchor="middle" fill="var(--cortical)">salvamento / artrodese</text>

      <text x="230" y="30" {...mono} textAnchor="middle">estadiamento orienta o tratamento</text>
      <text x="230" y="230" {...label} textAnchor="middle">
        A escolha depende de reparabilidade, redutibilidade e do estado da cartilagem, não só do tempo de lesão.
      </text>
    </svg>
  );
};

export const RepairReconstruction: FC<FigureProps> = ({ className, title, variant }) => {
  const recon = (variant ?? "reparo").toLowerCase() === "reconstrucao";

  return (
    <svg
      viewBox="0 0 440 320"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? (recon ? "Reconstrução ligamentar (tenodese) do intervalo escafolunar" : "Reparo direto do ligamento escafolunar com âncoras")}</title>

      <CarpusDorsal />

      {!recon ? (
        <>
          {/* suture anchors reinserting the dorsal SL ligament */}
          {[192, 202].map((cy, i) => (
            <g key={cy}>
              <circle cx={162 + i * 4} cy={cy} r="4.5" fill="var(--teal)" />
              <path d={`M${162 + i * 4} ${cy} C${172 + i} ${cy - 4}, ${176 + i} ${cy + 4}, ${170 + i} ${cy + 8}`} fill="none" stroke="var(--teal)" strokeWidth="2" />
            </g>
          ))}
          <path d="M158 196 C164 190, 168 190, 172 196" {...ligIntact} />
          <text x="230" y="196" {...label} fill="var(--teal)">âncoras dorsais</text>
          <text x="230" y="210" {...label}>reinserção do coto</text>
        </>
      ) : (
        <>
          {/* FCR/tendon strip through a scaphoid tunnel, across to lunate, then to dorsal radiotriquetral */}
          <path
            d="M112 210 C126 196, 150 190, 176 196 C204 202, 236 202, 254 214"
            fill="none"
            stroke="var(--teal)"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <circle cx="132" cy="200" r="4" fill="var(--surface)" stroke="var(--cortical)" strokeWidth="2" />
          <circle cx="182" cy="196" r="4" fill="var(--surface)" stroke="var(--cortical)" strokeWidth="2" />
          <text x="60" y="238" {...label} fill="var(--teal)">enxerto tendíneo</text>
          <text x="256" y="212" {...label} fill="var(--cortical)">túnel ósseo</text>
          <path d="M112 210 C96 224, 92 244, 100 264" fill="none" stroke="var(--teal)" strokeWidth="5" strokeLinecap="round" />
          <text x="82" y="280" {...label} fill="var(--teal)">FRC (origem)</text>
        </>
      )}

      <text x="220" y="26" {...mono} textAnchor="middle">
        {recon ? "reconstrução: tenodese de três ligamentos" : "reparo direto agudo/subagudo"}
      </text>
      <text x="220" y="304" {...label} textAnchor="middle">
        {recon
          ? "Reservada à lesão crônica reparável, redutível e sem artrose (Garcia-Elias III–IV)."
          : "Coto reparável na lesão aguda/subaguda restaura a banda dorsal do SL."}
      </text>
    </svg>
  );
};

export const LunotriquetralTest: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 420 300"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Instabilidade lunopiramidal: teste de cisalhamento (ballottement) de Reagan"}</title>

    {/* lunate + triquetrum with a shear force applied across the LT joint */}
    <path {...bone} d="M150 130 C182 118, 208 138, 206 174 C204 208, 178 224, 148 216 C124 209, 116 174, 124 152 C129 140, 139 134, 150 130 Z" />
    <text x="164" y="176" {...label} textAnchor="middle">semilunar</text>

    <path {...bone} d="M244 132 C276 120, 300 140, 298 176 C296 210, 270 224, 242 216 C220 209, 214 176, 222 154 C227 142, 235 138, 244 132 Z" />
    <text x="262" y="178" {...label} textAnchor="middle">piramidal</text>

    {/* disrupted LT ligament */}
    <path d="M208 172 C216 178, 222 178, 228 172" {...ligTorn} />
    <text x="182" y="252" {...label} fill="var(--cortical)">ligamento LP roto</text>

    {/* opposing shear arrows (examiner's thumbs) */}
    <path d="M172 96 C176 106, 178 112, 176 120" fill="none" stroke="var(--teal)" strokeWidth="3" markerEnd="url(#ltArrow)" />
    <path d="M270 226 C266 218, 266 212, 268 204" fill="none" stroke="var(--teal)" strokeWidth="3" markerEnd="url(#ltArrow)" />
    <defs>
      <marker id="ltArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M0 0 L10 5 L0 10 Z" fill="var(--teal)" />
      </marker>
    </defs>

    <text x="210" y="26" {...mono} textAnchor="middle">ballottement lunopiramidal</text>
    <text x="210" y="286" {...label} textAnchor="middle">
      Cisalhar o piramidal contra o semilunar reproduz dor e mostra translação aumentada quando o LP está roto.
    </text>
  </svg>
);

export const figures: Record<string, FC<FigureProps>> = {
  "instabilidade-carpo:anatomia": Anatomy,
  "instabilidade-carpo:mayfield": MayfieldSequence,
  "instabilidade-carpo:disi-visi": DisiVisi,
  "instabilidade-carpo:sinais-radiograficos": RadiographicSigns,
  "instabilidade-carpo:garcia-elias": GarciaEliasStages,
  "instabilidade-carpo:reparo-reconstrucao": RepairReconstruction,
  "instabilidade-carpo:lunopiramidal": LunotriquetralTest,
};
