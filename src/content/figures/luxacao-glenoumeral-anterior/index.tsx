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

function GlenoidEnFace({ x = 140, y = 146 }: { x?: number; y?: number }) {
  return (
    <g>
      <path
        {...boneBack}
        d={`M${x - 82} ${y - 96} C${x - 34} ${y - 90}, ${x - 18} ${y - 65}, ${x - 15} ${y - 42}
          C${x - 72} ${y - 32}, ${x - 92} ${y + 16}, ${x - 54} ${y + 68}
          C${x - 32} ${y + 98}, ${x - 4} ${y + 100}, ${x + 10} ${y + 70}
          C${x + 28} ${y + 31}, ${x + 24} ${y - 30}, ${x - 15} ${y - 42}
          C${x - 22} ${y - 64}, ${x - 42} ${y - 86}, ${x - 82} ${y - 96} Z`}
      />
      <ellipse cx={x} cy={y} rx="34" ry="76" {...bone} />
      <path
        d={`M${x + 2} ${y - 75} C${x + 41} ${y - 50}, ${x + 45} ${y + 45}, ${x + 2} ${y + 75}`}
        fill="none"
        stroke="var(--teal)"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </g>
  );
}

export const Anatomy: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 440 310"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Anatomia capsulolabral da articulação glenoumeral e nervo axilar"}</title>

    <path
      {...boneBack}
      d="M42 54 C92 44, 132 60, 160 94 C174 112, 178 140, 168 170 C154 212, 116 252, 66 270 C52 240, 42 208, 46 174 C50 138, 48 96, 42 54 Z"
    />
    <path {...bone} d="M166 90 C194 106, 202 132, 196 160 C190 188, 176 208, 158 212 C146 186, 142 116, 166 90 Z" />
    <path
      d="M169 92 C205 111, 211 190, 159 211"
      fill="none"
      stroke="var(--teal)"
      strokeWidth="6"
      strokeLinecap="round"
    />

    <circle cx="278" cy="146" r="69" {...bone} />
    <path {...bone} d="M251 201 C262 224, 267 258, 266 296 L315 296 C315 255, 310 218, 302 201 Z" />

    <path
      d="M164 188 C188 230, 229 242, 272 218"
      fill="none"
      stroke="var(--teal)"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M166 196 C190 256, 250 266, 302 220"
      fill="none"
      stroke="var(--teal)"
      strokeWidth="1.5"
      strokeDasharray="5 4"
    />
    <path
      d="M206 246 C238 262, 310 254, 340 223 C358 204, 362 176, 356 150"
      fill="none"
      stroke="var(--amber)"
      strokeWidth="3"
      strokeLinecap="round"
    />

    <path d="M208 118 L177 106" stroke="var(--line-strong)" />
    <text x="214" y="114" {...label}>lábio glenoidal</text>
    <path d="M204 228 L185 207" stroke="var(--line-strong)" />
    <text x="92" y="242" {...label}>complexo glenoumeral inferior</text>
    <path d="M332 237 L340 222" stroke="var(--line-strong)" />
    <text x="348" y="242" {...label} fill="var(--amber)">nervo axilar</text>
    <text x="278" y="143" {...label} textAnchor="middle">cabeça</text>
    <text x="278" y="157" {...label} textAnchor="middle">umeral</text>
    <text x="220" y="24" {...mono} textAnchor="middle">estabilizadores anteroinferiores</text>
    <text x="220" y="294" {...label} textAnchor="middle">
      Em abdução e rotação externa, o feixe anterior do ligamento glenoumeral inferior recebe maior tensão.
    </text>
  </svg>
);

export const CapsulolabralLesions: FC<FigureProps> = ({ className, title, variant }) => {
  const v = (variant ?? "bankart").toLowerCase();
  const names: Record<string, string> = {
    bankart: "Bankart",
    perthes: "Perthes",
    alpsa: "ALPSA",
    hagl: "HAGL",
  };

  return (
    <svg
      viewBox="0 0 420 290"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `Padrão capsulolabral anterior: ${names[v] ?? v}`}</title>

      <path
        {...boneBack}
        d="M36 62 C90 38, 148 46, 182 86 C156 112, 146 166, 168 210 C130 248, 76 250, 38 224 C58 170, 58 116, 36 62 Z"
      />
      <ellipse cx="181" cy="146" rx="35" ry="78" {...bone} />
      <circle cx="282" cy="146" r="68" {...bone} />
      <path {...bone} d="M258 201 C270 225, 274 254, 275 282 L320 282 C320 247, 316 218, 307 201 Z" />

      {v !== "hagl" && (
        <path
          d={
            v === "alpsa"
              ? "M155 184 C137 193, 132 211, 143 222"
              : v === "perthes"
                ? "M174 188 C160 194, 156 207, 163 219"
                : "M178 190 C162 201, 162 220, 176 230"
          }
          {...corticalStroke}
        />
      )}

      {v === "bankart" && (
        <>
          <path d="M178 190 C206 228, 246 240, 275 218" {...tealStroke} />
          <path d="M178 190 L166 202" stroke="var(--cortical)" strokeWidth="2" />
          <text x="92" y="240" {...label} fill="var(--cortical)">lábio avulsionado</text>
        </>
      )}
      {v === "perthes" && (
        <>
          <path d="M174 188 C200 228, 244 240, 275 218" {...tealStroke} />
          <path d="M157 212 C164 218, 171 211, 174 190" fill="none" stroke="var(--amber)" strokeWidth="2" strokeDasharray="4 3" />
          <text x="72" y="244" {...label} fill="var(--amber)">periósteo preservado</text>
        </>
      )}
      {v === "alpsa" && (
        <>
          <path d="M143 222 C178 242, 236 244, 275 218" {...tealStroke} />
          <path d="M143 222 C140 204, 146 192, 158 184" fill="none" stroke="var(--amber)" strokeWidth="2" strokeDasharray="4 3" />
          <text x="58" y="264" {...label} fill="var(--cortical)">cicatrização medializada</text>
        </>
      )}
      {v === "hagl" && (
        <>
          <path d="M180 190 C196 212, 218 227, 242 230" {...tealStroke} />
          <path d="M270 216 C258 222, 249 231, 244 244" {...corticalStroke} />
          <path d="M245 243 L262 258" stroke="var(--cortical)" strokeWidth="2" />
          <text x="270" y="264" {...label} textAnchor="middle" fill="var(--cortical)">avulsão no úmero</text>
        </>
      )}

      <text x="210" y="25" {...mono} textAnchor="middle">{names[v] ?? v}</text>
      <text x="181" y="150" {...label} textAnchor="middle">glenoide</text>
      <text x="282" y="142" {...label} textAnchor="middle">cabeça</text>
      <text x="282" y="156" {...label} textAnchor="middle">umeral</text>
      <text x="210" y="282" {...label} textAnchor="middle">
        Corte axial esquemático · anterior abaixo · tecido capsulolabral em verde
      </text>
    </svg>
  );
};

export const GlenoidTrack: FC<FigureProps> = ({ className, title, variant }) => {
  const off = (variant ?? "on").toLowerCase() === "off";
  const trackLeft = off ? 150 : 132;
  const defectLeft = off ? 112 : 158;

  return (
    <svg
      viewBox="0 0 440 300"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `Glenoid track: lesão ${off ? "off-track" : "on-track"}`}</title>

      <circle cx="212" cy="150" r="106" {...bone} />
      <path
        d={`M${trackLeft} 66 C${trackLeft + 32} 46, 244 46, 270 64 L270 236 C242 254, ${trackLeft + 30} 254, ${trackLeft} 234 Z`}
        fill="var(--teal)"
        opacity="0.16"
        stroke="var(--teal)"
        strokeWidth="2"
        strokeDasharray="5 4"
      />
      <path
        d={`M${defectLeft} 104 C${defectLeft - 18} 126, ${defectLeft - 18} 176, ${defectLeft} 198
          C${defectLeft + 17} 186, ${defectLeft + 25} 116, ${defectLeft} 104 Z`}
        fill="var(--cortical)"
        opacity="0.25"
        stroke="var(--cortical)"
        strokeWidth="2.5"
      />
      <line x1={trackLeft} y1="62" x2="270" y2="62" stroke="var(--amber)" strokeWidth="1.5" />
      <line x1={trackLeft} y1="57" x2={trackLeft} y2="67" stroke="var(--amber)" />
      <line x1="270" y1="57" x2="270" y2="67" stroke="var(--amber)" />
      <text x={(trackLeft + 270) / 2} y="52" {...mono} textAnchor="middle" fill="var(--amber)">glenoid track</text>

      <line x1={defectLeft - 10} y1="220" x2={off ? 176 : 196} y2="220" stroke="var(--cortical)" strokeWidth="1.5" />
      <line x1={defectLeft - 10} y1="214" x2={defectLeft - 10} y2="226" stroke="var(--cortical)" />
      <line x1={off ? 176 : 196} y1="214" x2={off ? 176 : 196} y2="226" stroke="var(--cortical)" />
      <text x={off ? 143 : 171} y="242" {...label} textAnchor="middle" fill="var(--cortical)">intervalo de Hill-Sachs</text>

      <g transform="translate(348 78)">
        <ellipse cx="0" cy="68" rx="31" ry="62" {...boneBack} />
        <path d="M18 14 C28 38, 28 98, 17 122" fill="none" stroke="var(--cortical)" strokeWidth="7" opacity="0.45" />
        <line x1="0" y1="6" x2="0" y2="130" stroke="var(--line-strong)" strokeDasharray="3 3" />
        <text x="0" y="150" {...label} textAnchor="middle">perda glenoidal</text>
      </g>

      <rect x="321" y="20" width="91" height="28" rx="8" fill={off ? "var(--cortical-tint)" : "var(--teal-tint)"} />
      <text x="366" y="38" {...mono} textAnchor="middle" fill={off ? "var(--cortical)" : "var(--teal-deep)"}>
        {off ? "OFF-TRACK" : "ON-TRACK"}
      </text>
      <text x="212" y="286" {...label} textAnchor="middle">
        GT = 0,83 × diâmetro glenoidal intacto − perda óssea anterior
      </text>
    </svg>
  );
};

export const Portals: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 420 300"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Portais artroscópicos para estabilização anterior do ombro"}</title>

    <path
      d="M78 58 C122 32, 188 30, 242 48 C294 65, 340 109, 351 164 C358 204, 342 248, 310 278 L78 278 C42 236, 34 190, 46 142 C54 110, 62 82, 78 58 Z"
      fill="var(--surface-2, var(--surface))"
      stroke="var(--line-strong)"
      strokeWidth="1.4"
    />
    <path d="M104 84 C160 66, 232 72, 282 102" fill="none" stroke="var(--ink-soft)" strokeWidth="13" strokeLinecap="round" opacity="0.6" />
    <path d="M244 102 C270 132, 278 178, 264 222" fill="none" stroke="var(--ink-soft)" strokeWidth="36" strokeLinecap="round" opacity="0.32" />
    <ellipse cx="206" cy="154" rx="30" ry="60" {...bone} />
    <circle cx="260" cy="155" r="50" {...bone} />

    <g fill="var(--teal)" stroke="var(--surface)" strokeWidth="3">
      <circle cx="112" cy="150" r="8" />
      <circle cx="287" cy="106" r="8" />
      <circle cx="298" cy="184" r="8" />
    </g>
    <path d="M120 150 L190 150" stroke="var(--teal)" strokeWidth="2" strokeDasharray="5 3" />
    <path d="M280 112 L218 132" stroke="var(--teal)" strokeWidth="2" strokeDasharray="5 3" />
    <path d="M290 180 L218 176" stroke="var(--teal)" strokeWidth="2" strokeDasharray="5 3" />

    <text x="42" y="147" {...mono} fill="var(--teal)">P</text>
    <text x="301" y="91" {...mono} fill="var(--teal)">AS</text>
    <text x="316" y="191" {...mono} fill="var(--teal)">AI</text>
    <text x="48" y="166" {...label}>posterior · visão</text>
    <text x="305" y="108" {...label}>anterossuperior</text>
    <text x="316" y="208" {...label}>anteroinferior</text>
    <text x="210" y="24" {...mono} textAnchor="middle">triangulação artroscópica</text>
    <text x="210" y="292" {...label} textAnchor="middle">
      O portal inferior deve alcançar o quadrante anteroinferior sem ameaçar o nervo axilar.
    </text>
  </svg>
);

export const DeltopectoralApproach: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 420 300"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Via deltopeitoral e estruturas em risco no procedimento de Latarjet"}</title>

    <path d="M70 42 C112 52, 142 78, 164 120 L154 268 L58 268 C44 190, 46 104, 70 42 Z" fill="var(--teal-tint)" stroke="var(--teal)" strokeWidth="1.5" />
    <path d="M178 70 C232 50, 322 66, 360 118 L366 268 L178 268 Z" fill="var(--cortical-tint)" stroke="var(--cortical)" strokeWidth="1.5" />
    <path d="M166 54 C160 114, 166 188, 164 268" fill="none" stroke="var(--amber)" strokeWidth="4" strokeLinecap="round" />
    <path d="M205 82 C222 96, 226 122, 214 146 C198 148, 184 138, 185 122 C187 106, 192 92, 205 82 Z" {...bone} />
    <path d="M205 142 C212 170, 219 218, 221 274" stroke="var(--ink-soft)" strokeWidth="28" strokeLinecap="round" />
    <path d="M205 142 C212 170, 219 218, 221 274" stroke="var(--surface)" strokeWidth="22" strokeLinecap="round" />
    <path d="M205 116 C236 120, 258 129, 270 146" fill="none" stroke="var(--teal)" strokeWidth="5" strokeLinecap="round" />
    <path d="M262 144 C272 186, 282 224, 294 266" fill="none" stroke="var(--teal)" strokeWidth="5" strokeLinecap="round" />
    <path d="M246 158 C268 168, 286 177, 302 192" fill="none" stroke="var(--amber)" strokeWidth="3" strokeLinecap="round" />
    <path d="M236 208 C258 216, 276 229, 286 248" fill="none" stroke="var(--amber)" strokeWidth="3" strokeLinecap="round" strokeDasharray="5 3" />

    <text x="92" y="286" {...label} textAnchor="middle" fill="var(--teal)">deltoide</text>
    <text x="316" y="286" {...label} textAnchor="middle" fill="var(--cortical)">peitoral maior</text>
    <text x="124" y="132" {...label} fill="var(--amber)">veia cefálica</text>
    <text x="279" y="136" {...label} fill="var(--teal)">processo coracoide</text>
    <text x="306" y="194" {...label} fill="var(--amber)">n. musculocutâneo</text>
    <text x="292" y="247" {...label} fill="var(--amber)">n. axilar</text>
    <text x="210" y="24" {...mono} textAnchor="middle">intervalo deltopeitoral</text>
  </svg>
);

export const Reduction: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 480 280"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Princípios de redução atraumática da luxação anterior do ombro"}</title>

    {[80, 240, 400].map((cx, i) => (
      <g key={cx}>
        <path {...boneBack} d={`M${cx - 60} 78 C${cx - 28} 58, ${cx - 2} 62, ${cx + 12} 84 C${cx - 20} 102, ${cx - 34} 142, ${cx - 17} 178 C${cx - 42} 194, ${cx - 65} 180, ${cx - 70} 148 C${cx - 74} 118, ${cx - 70} 94, ${cx - 60} 78 Z`} />
        <ellipse cx={cx + 4} cy="126" rx="20" ry="46" {...bone} />
        <circle cx={i === 0 ? cx + 54 : i === 1 ? cx + 40 : cx + 33} cy={i === 0 ? 178 : i === 1 ? 153 : 128} r="34" {...bone} />
        <path
          d={
            i === 0
              ? `M${cx + 70} 202 L${cx + 104} 244`
              : i === 1
                ? `M${cx + 63} 177 L${cx + 101} 218`
                : `M${cx + 50} 153 L${cx + 94} 190`
          }
          stroke="var(--ink-soft)"
          strokeWidth="22"
          strokeLinecap="round"
        />
        <path
          d={
            i === 0
              ? `M${cx + 70} 202 L${cx + 104} 244`
              : i === 1
                ? `M${cx + 63} 177 L${cx + 101} 218`
                : `M${cx + 50} 153 L${cx + 94} 190`
          }
          stroke="var(--surface)"
          strokeWidth="17"
          strokeLinecap="round"
        />
      </g>
    ))}

    <path d="M145 198 C176 188, 194 174, 206 155" fill="none" stroke="var(--teal)" strokeWidth="3" markerEnd="url(#reductionArrow)" />
    <path d="M306 160 C330 146, 343 136, 355 128" fill="none" stroke="var(--teal)" strokeWidth="3" markerEnd="url(#reductionArrow)" />
    <defs>
      <marker id="reductionArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M0 0 L10 5 L0 10 Z" fill="var(--teal)" />
      </marker>
    </defs>

    <text x="80" y="34" {...mono} textAnchor="middle">1 · luxada</text>
    <text x="240" y="34" {...mono} textAnchor="middle">2 · relaxar + tração suave</text>
    <text x="400" y="34" {...mono} textAnchor="middle">3 · congruente</text>
    <text x="240" y="270" {...label} textAnchor="middle">
      Sem alavanca sobre o úmero · repetir exame neurovascular · confirmar por imagem
    </text>
  </svg>
);

export const BankartStep: FC<FigureProps> = ({ className, title, variant }) => {
  const repaired = (variant ?? "mobilizacao") === "reparo";

  return (
    <svg
      viewBox="0 0 420 300"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? (repaired ? "Reinserção inferior do complexo capsulolabral" : "Mobilização do complexo capsulolabral")}</title>

      <GlenoidEnFace x={190} y={150} />
      {!repaired ? (
        <>
          <path d="M218 173 C244 195, 252 226, 239 252" {...corticalStroke} />
          <path d="M219 176 C238 183, 252 190, 270 194" fill="none" stroke="var(--teal)" strokeWidth="6" strokeLinecap="round" />
          <path d="M275 194 C290 182, 302 170, 313 154" fill="none" stroke="var(--amber)" strokeWidth="2.5" strokeDasharray="4 3" />
          <text x="304" y="145" {...label} fill="var(--amber)">liberação</text>
          <text x="300" y="215" {...label} fill="var(--cortical)">lábio medializado</text>
        </>
      ) : (
        <>
          {[186, 212, 236].map((cy, i) => (
            <g key={cy}>
              <circle cx={222 + i * 3} cy={cy} r="5" fill="var(--teal)" />
              <path d={`M${222 + i * 3} ${cy} C${246 + i * 4} ${cy + 5}, ${249 + i * 2} ${cy + 14}, ${238 + i * 2} ${cy + 22}`} fill="none" stroke="var(--teal)" strokeWidth="2" />
            </g>
          ))}
          <path d="M221 174 C252 188, 258 225, 238 252" fill="none" stroke="var(--teal)" strokeWidth="7" strokeLinecap="round" />
          <text x="302" y="192" {...label} fill="var(--teal)">âncoras inferiores</text>
          <text x="300" y="210" {...label} fill="var(--teal)">avanço capsular</text>
        </>
      )}

      <text x="210" y="24" {...mono} textAnchor="middle">
        {repaired ? "reparo de inferior para superior" : "mobilização até redução sem tensão"}
      </text>
      <text x="210" y="290" {...label} textAnchor="middle">
        {repaired ? "Restaurar altura labral e eliminar a bolsa capsular inferior." : "ALPSA não deve ser fixada na posição medializada."}
      </text>
    </svg>
  );
};

export const RemplissageStep: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 420 300"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Remplissage do defeito de Hill-Sachs com cápsula posterior e infraespinal"}</title>

    <ellipse cx="105" cy="148" rx="26" ry="67" {...boneBack} />
    <circle cx="235" cy="148" r="88" {...bone} />
    <path
      d="M304 92 C278 104, 270 126, 276 151 C282 174, 296 188, 316 196 C336 176, 345 148, 338 120 C332 105, 319 96, 304 92 Z"
      fill="var(--cortical-tint)"
      stroke="var(--cortical)"
      strokeWidth="2.5"
    />
    <path
      d="M386 82 C350 92, 326 110, 310 137 C300 154, 300 178, 312 195"
      fill="none"
      stroke="var(--teal)"
      strokeWidth="15"
      strokeLinecap="round"
      opacity="0.55"
    />
    <path d="M306 121 C320 130, 324 143, 320 158" fill="none" stroke="var(--teal)" strokeWidth="2.5" />
    <path d="M311 172 C323 165, 330 151, 328 138" fill="none" stroke="var(--teal)" strokeWidth="2.5" />
    <circle cx="307" cy="121" r="5" fill="var(--teal)" />
    <circle cx="311" cy="172" r="5" fill="var(--teal)" />

    <path d="M315 197 L347 222" stroke="var(--line-strong)" />
    <text x="350" y="225" {...label} fill="var(--cortical)">Hill-Sachs preenchido</text>
    <path d="M355 103 L376 94" stroke="var(--line-strong)" />
    <text x="378" y="94" {...label} fill="var(--teal)">infraespinal + cápsula</text>
    <text x="210" y="24" {...mono} textAnchor="middle">remplissage</text>
    <text x="210" y="286" {...label} textAnchor="middle">
      A tenodese posterior torna o defeito extra-articular e reduz sua participação no rebordo.
    </text>
  </svg>
);

export const LatarjetStep: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 440 310"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Posicionamento do enxerto do processo coracoide no procedimento de Latarjet"}</title>

    <GlenoidEnFace x={205} y={150} />
    <line x1="205" y1="72" x2="205" y2="228" stroke="var(--amber)" strokeWidth="1.5" strokeDasharray="5 4" />
    <text x="198" y="66" {...label} textAnchor="end" fill="var(--amber)">equador</text>

    <path
      d="M234 158 C252 151, 270 158, 276 174 L274 222 C260 235, 244 232, 232 220 Z"
      fill="var(--teal-tint)"
      stroke="var(--teal)"
      strokeWidth="2.5"
    />
    {[178, 209].map((cy) => (
      <g key={cy}>
        <circle cx="250" cy={cy} r="6" fill="var(--surface)" stroke="var(--teal)" strokeWidth="2" />
        <line x1="250" y1={cy} x2="184" y2={cy} stroke="var(--teal)" strokeWidth="2" />
      </g>
    ))}
    <path d="M270 218 C300 228, 330 248, 354 280" fill="none" stroke="var(--teal)" strokeWidth="9" strokeLinecap="round" opacity="0.65" />
    <path d="M292 168 C322 164, 344 168, 366 181" fill="none" stroke="var(--cortical)" strokeWidth="15" strokeLinecap="round" opacity="0.25" />

    <line x1="232" y1="145" x2="276" y2="145" stroke="var(--amber)" />
    <text x="254" y="136" {...label} textAnchor="middle" fill="var(--amber)">nivelado</text>
    <text x="314" y="238" {...label} fill="var(--teal)">tendão conjunto</text>
    <text x="320" y="174" {...label} fill="var(--cortical)">subescapular</text>
    <text x="220" y="24" {...mono} textAnchor="middle">Latarjet · enxerto abaixo do equador</text>
    <text x="220" y="300" {...label} textAnchor="middle">
      Lateral demais: artrose · medial demais: restauração insuficiente da superfície glenoidal
    </text>
  </svg>
);

export const figures: Record<string, FC<FigureProps>> = {
  "luxacao-glenoumeral-anterior:anatomia": Anatomy,
  "luxacao-glenoumeral-anterior:lesoes-capsulolabrais": CapsulolabralLesions,
  "luxacao-glenoumeral-anterior:glenoid-track": GlenoidTrack,
  "luxacao-glenoumeral-anterior:portais": Portals,
  "luxacao-glenoumeral-anterior:via-deltopeitoral": DeltopectoralApproach,
  "luxacao-glenoumeral-anterior:reducao": Reduction,
  "luxacao-glenoumeral-anterior:step-bankart": BankartStep,
  "luxacao-glenoumeral-anterior:step-remplissage": RemplissageStep,
  "luxacao-glenoumeral-anterior:step-latarjet": LatarjetStep,
};
