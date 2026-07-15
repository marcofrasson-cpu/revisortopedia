import type { FC } from "react";
import type { FigureProps } from "../../../types/topic";

/* ============================================================================
   Técnica passo a passo — fíbula/tíbia com hardware.
   Ossos: stroke var(--ink-soft) / fill var(--surface).
   Traço de fratura: var(--cortical) + "fx-line". Hardware: var(--teal).
   activeStep acende (opacidade cheia) o elemento do passo corrente.
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
  fontSize: 12,
  fill: "var(--ink)",
  fontFamily: "var(--font-mono, monospace)",
};

/** Fíbula oblíqua (Weber B) como base comum dos passos da fíbula. */
const FibulaBase: FC<{ united?: boolean }> = ({ united }) => (
  <>
    {/* fragmento proximal */}
    <path {...boneStyle} d="M96 26 C 100 66, 100 100, 98 126 L 132 150 L 150 138 C 140 120, 132 92, 128 60 C 126 44, 122 32, 112 26 Z" />
    {/* fragmento distal */}
    <path
      {...boneStyle}
      transform={united ? "translate(0 0)" : "translate(6 8)"}
      d="M132 150 L 98 126 C 96 150, 96 176, 100 198 C 104 218, 112 232, 122 238 C 132 232, 136 218, 138 200 C 142 176, 146 160, 150 138 Z"
    />
  </>
);

/** step-reduction — redução da fíbula com pinça; restaurar comprimento/rotação. */
export const StepReduction: FC<FigureProps> = ({ className, title, activeStep }) => {
  const hot = activeStep === undefined || activeStep === 1;
  return (
    <svg viewBox="0 0 240 280" preserveAspectRatio="xMidYMid meet" role="img" className={className} xmlns="http://www.w3.org/2000/svg">
      <title>{title ?? "Passo — redução da fíbula (pinça de redução)"}</title>
      <FibulaBase />
      {/* traço oblíquo de fratura */}
      <g className="fx-line">
        <line x1="98" y1="126" x2="150" y2="138" stroke="var(--cortical)" strokeWidth="2.6" strokeLinecap="round" />
      </g>
      {/* pinça de redução (forceps) */}
      <g stroke="var(--teal)" strokeWidth="2.4" fill="none" strokeLinecap="round" opacity={hot ? 1 : 0.35}>
        <path d="M60 108 C 90 118, 90 118, 118 130" />
        <path d="M62 200 C 92 190, 96 176, 122 160" />
        <circle cx="52" cy="154" r="7" fill="var(--surface)" />
        <line x1="59" y1="150" x2="59" y2="158" />
        {/* pontas na cortical */}
        <circle cx="120" cy="130" r="3" fill="var(--teal)" stroke="none" />
        <circle cx="124" cy="160" r="3" fill="var(--teal)" stroke="none" />
      </g>
      {/* seta de comprimento */}
      <g stroke="var(--amber)" strokeWidth="1.6" fill="none" opacity={hot ? 1 : 0.35}>
        <line x1="176" y1="60" x2="176" y2="230" strokeDasharray="4 4" />
        <path d="M172 66 l4 -8 l4 8" fill="var(--amber)" stroke="none" />
        <path d="M172 224 l4 8 l4 -8" fill="var(--amber)" stroke="none" />
      </g>
      <text x="172" y="150" {...label} fill="var(--amber)">
        comprimento
      </text>
      <text x="120" y="272" textAnchor="middle" {...mono}>
        redução
      </text>
    </svg>
  );
};

/** step-lag-screw — parafuso interfragmentário na fratura oblíqua. */
export const StepLagScrew: FC<FigureProps> = ({ className, title, activeStep }) => {
  const hot = activeStep === undefined || activeStep === 2;
  return (
    <svg viewBox="0 0 240 280" preserveAspectRatio="xMidYMid meet" role="img" className={className} xmlns="http://www.w3.org/2000/svg">
      <title>{title ?? "Passo — parafuso interfragmentário (lag screw)"}</title>
      <FibulaBase united />
      <g className="fx-line">
        <line x1="98" y1="126" x2="150" y2="138" stroke="var(--cortical)" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
      </g>
      {/* lag screw perpendicular ao traço */}
      <g opacity={hot ? 1 : 0.35}>
        <line x1="88" y1="160" x2="158" y2="108" stroke="var(--teal)" strokeWidth="3" strokeLinecap="round" />
        {/* cabeça */}
        <circle cx="88" cy="160" r="5" fill="var(--teal)" stroke="none" />
        {/* roscas na ponta */}
        <g stroke="var(--teal)" strokeWidth="1.4">
          <line x1="138" y1="118" x2="146" y2="118" />
          <line x1="144" y1="112" x2="152" y2="112" />
          <line x1="132" y1="124" x2="140" y2="124" />
        </g>
      </g>
      <text x="120" y="272" textAnchor="middle" {...mono}>
        lag screw
      </text>
    </svg>
  );
};

/** step-plate — placa 1/3 tubular de neutralização na fíbula lateral. */
export const StepPlate: FC<FigureProps> = ({ className, title, activeStep }) => {
  const hot = activeStep === undefined || activeStep === 3;
  return (
    <svg viewBox="0 0 240 280" preserveAspectRatio="xMidYMid meet" role="img" className={className} xmlns="http://www.w3.org/2000/svg">
      <title>{title ?? "Passo — placa de neutralização (1/3 tubular)"}</title>
      <FibulaBase united />
      <g className="fx-line">
        <line x1="98" y1="126" x2="150" y2="138" stroke="var(--cortical)" strokeWidth="1.6" strokeLinecap="round" opacity="0.5" />
      </g>
      {/* lag screw discreto (contexto) */}
      <line x1="90" y1="158" x2="150" y2="114" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
      {/* placa lateral com furos + parafusos */}
      <g opacity={hot ? 1 : 0.35}>
        <path
          d="M150 44 C 158 44, 162 50, 162 58 L 158 210 C 158 220, 150 224, 144 222 C 150 218, 152 210, 152 202 L 144 58 C 144 50, 148 44, 150 44 Z"
          fill="var(--teal)"
          fillOpacity="0.14"
          stroke="var(--teal)"
          strokeWidth="2"
        />
        {/* furos + parafusos */}
        {[70, 96, 122, 168, 194].map((y, i) => (
          <g key={y}>
            <circle cx="153" cy={y} r="5" fill="var(--surface)" stroke="var(--teal)" strokeWidth="1.6" />
            <line x1="153" y1={y} x2={i < 3 ? 118 : 120} y2={y} stroke="var(--teal)" strokeWidth="1.6" />
          </g>
        ))}
      </g>
      <text x="176" y="130" {...label} fill="var(--teal)">
        placa 1/3
      </text>
      <text x="176" y="146" {...label} fill="var(--teal)">
        tubular
      </text>
      <text x="120" y="272" textAnchor="middle" {...mono}>
        neutralização
      </text>
    </svg>
  );
};

/** step-medial-malleolus — screws | tension-band no maléolo medial. */
export const StepMedialMalleolus: FC<FigureProps> = ({ className, title, variant, activeStep }) => {
  const v = variant ?? "screws";
  const hot = activeStep === undefined || activeStep === 4;
  return (
    <svg viewBox="0 0 240 280" preserveAspectRatio="xMidYMid meet" role="img" className={className} xmlns="http://www.w3.org/2000/svg">
      <title>{title ?? `Passo — maléolo medial (${v === "tension-band" ? "banda de tensão" : "parafusos"})`}</title>
      {/* tíbia distal + maléolo medial */}
      <path {...boneStyle} d="M150 26 C 154 80, 154 140, 148 184 L 158 210 L 176 210 L 168 184 C 172 140, 172 82, 170 28 Z" />
      {/* fragmento do maléolo medial */}
      <path {...boneStyle} d="M148 184 C 138 194, 132 210, 134 226 C 136 240, 146 248, 156 246 C 160 232, 158 218, 158 210 Z" />
      {/* traço de fratura transverso */}
      <g className="fx-line">
        <line x1="134" y1="188" x2="160" y2="196" stroke="var(--cortical)" strokeWidth="2.4" strokeLinecap="round" />
      </g>
      {v === "screws" ? (
        <g opacity={hot ? 1 : 0.35}>
          {/* 2 parafusos ascendentes */}
          {[0, 1].map((i) => (
            <g key={i}>
              <line x1={144 + i * 8} y1={238} x2={150 + i * 8} y2={176} stroke="var(--teal)" strokeWidth="3" strokeLinecap="round" />
              <circle cx={144 + i * 8} cy={238} r="4.5" fill="var(--teal)" stroke="none" />
            </g>
          ))}
          <text x="120" y="272" textAnchor="middle" {...mono}>
            2 parafusos
          </text>
        </g>
      ) : (
        <g opacity={hot ? 1 : 0.35}>
          {/* 2 fios K + banda de tensão em 8 */}
          <line x1="140" y1="236" x2="148" y2="170" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round" />
          <line x1="150" y1="238" x2="158" y2="172" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round" />
          <path
            d="M144 172 C 168 176, 170 200, 150 214 C 132 226, 138 200, 146 232"
            fill="none"
            stroke="var(--teal)"
            strokeWidth="1.8"
          />
          <text x="120" y="272" textAnchor="middle" {...mono}>
            banda de tensão
          </text>
        </g>
      )}
    </svg>
  );
};

/** step-syndesmosis — screw | suture-button. */
export const StepSyndesmosis: FC<FigureProps> = ({ className, title, variant, activeStep }) => {
  const v = variant ?? "screw";
  const hot = activeStep === undefined || activeStep === 5;
  return (
    <svg viewBox="0 0 240 240" preserveAspectRatio="xMidYMid meet" role="img" className={className} xmlns="http://www.w3.org/2000/svg">
      <title>{title ?? `Passo — fixação da sindesmose (${v})`}</title>
      {/* tíbia (esq) + fíbula (dir) em corte axial distal */}
      <path {...boneStyle} d="M40 40 C 36 90, 36 150, 44 190 L 120 194 C 128 194, 132 188, 130 180 C 126 150, 128 90, 126 44 Z" />
      <path {...boneStyle} d="M150 46 C 154 92, 154 148, 150 188 L 176 192 L 190 190 L 182 168 C 178 128, 180 90, 180 48 Z" />
      {v === "screw" ? (
        <g opacity={hot ? 1 : 0.35}>
          {/* parafuso trans-sindesmal 3-4 corticais */}
          <line x1="184" y1="118" x2="60" y2="126" stroke="var(--teal)" strokeWidth="3" strokeLinecap="round" />
          <circle cx="184" cy="118" r="5" fill="var(--teal)" stroke="none" />
          <g stroke="var(--teal)" strokeWidth="1.4">
            <line x1="120" y1="120" x2="120" y2="126" />
            <line x1="105" y1="121" x2="105" y2="127" />
            <line x1="90" y1="122" x2="90" y2="128" />
          </g>
          <text x="120" y="228" textAnchor="middle" {...mono}>
            parafuso
          </text>
        </g>
      ) : (
        <g opacity={hot ? 1 : 0.35}>
          <line x1="184" y1="116" x2="56" y2="124" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round" />
          <line x1="184" y1="124" x2="56" y2="132" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round" />
          <rect x="180" y="110" width="8" height="24" rx="2" fill="var(--teal)" stroke="none" />
          <rect x="48" y="116" width="8" height="24" rx="2" fill="var(--teal)" stroke="none" />
          <text x="120" y="228" textAnchor="middle" {...mono}>
            suture-button
          </text>
        </g>
      )}
    </svg>
  );
};

/** step-posterior-malleolus — parafusos AP/PA ou placa antiglide posterior. */
export const StepPosteriorMalleolus: FC<FigureProps> = ({ className, title, activeStep }) => {
  const hot = activeStep === undefined || activeStep === 6;
  return (
    <svg viewBox="0 0 240 260" preserveAspectRatio="xMidYMid meet" role="img" className={className} xmlns="http://www.w3.org/2000/svg">
      <title>{title ?? "Passo — fixação do maléolo posterior"}</title>
      {/* tíbia distal em perfil (lateral) */}
      <path {...boneStyle} d="M70 26 C 66 80, 66 140, 72 184 C 76 204, 96 214, 120 216 L 160 216 C 172 214, 176 204, 170 196 L 96 190 C 90 150, 92 84, 94 30 Z" />
      {/* fragmento posterior (à direita/posterior) */}
      <path {...boneStyle} d="M160 184 C 172 182, 184 188, 188 200 C 190 210, 184 216, 174 216 L 150 216 C 156 204, 156 194, 160 184 Z" />
      {/* traço de fratura */}
      <g className="fx-line">
        <path d="M150 184 C 156 196, 156 206, 150 216" fill="none" stroke="var(--cortical)" strokeWidth="2.4" strokeLinecap="round" />
      </g>
      {/* placa antiglide posterior + parafuso */}
      <g opacity={hot ? 1 : 0.35}>
        <path
          d="M182 150 C 190 152, 192 160, 190 168 L 186 206 C 186 214, 178 216, 174 214 C 180 210, 180 202, 180 196 L 176 160 C 176 152, 178 150, 182 150 Z"
          fill="var(--teal)"
          fillOpacity="0.14"
          stroke="var(--teal)"
          strokeWidth="2"
        />
        {/* parafuso AP */}
        <line x1="188" y1="198" x2="120" y2="196" stroke="var(--teal)" strokeWidth="2.6" strokeLinecap="round" />
        <circle cx="188" cy="198" r="4.5" fill="var(--teal)" stroke="none" />
      </g>
      <text x="190" y="176" {...label} fill="var(--teal)">
        placa
      </text>
      <text x="190" y="192" {...label} fill="var(--teal)">
        antiglide
      </text>
      <text x="120" y="250" textAnchor="middle" {...mono}>
        maléolo posterior
      </text>
    </svg>
  );
};

/** step-fluoro-check — mortise + hook test / estresse sob fluoroscopia. */
export const StepFluoroCheck: FC<FigureProps> = ({ className, title, activeStep }) => {
  const hot = activeStep === undefined || activeStep === 7;
  return (
    <svg viewBox="0 0 260 260" preserveAspectRatio="xMidYMid meet" role="img" className={className} xmlns="http://www.w3.org/2000/svg">
      <title>{title ?? "Passo — checagem fluoroscópica (mortise + hook test)"}</title>
      {/* moldura do intensificador (fluoro) */}
      <circle cx="130" cy="120" r="96" fill="none" stroke="var(--line-strong)" strokeWidth="1.4" strokeDasharray="6 6" opacity="0.6" />
      {/* mortise: tíbia + fíbula + tálus */}
      <path {...boneStyle} d="M92 44 C 88 90, 88 130, 92 160 L 100 178 C 106 186, 116 190, 122 194 C 126 196, 126 202, 120 204 L 108 204 C 100 202, 96 194, 92 186 L 86 174 C 76 176, 70 170, 68 160 C 64 120, 66 78, 72 44 Z" />
      <path {...boneStyle} d="M186 48 C 190 92, 190 138, 186 160 C 184 178, 178 192, 170 200 C 164 204, 158 200, 158 194 L 162 162 C 166 130, 168 84, 166 50 Z" />
      <path {...boneStyle} fill="var(--surface-2, var(--surface))" d="M104 200 C 118 190, 152 188, 170 196 C 182 202, 182 214, 168 220 C 144 228, 116 226, 104 216 C 98 212, 98 204, 104 200 Z" />
      {/* espaço articular verificado (teal) */}
      <path d="M96 194 C 118 180, 152 178, 172 190" fill="none" stroke="var(--teal)" strokeWidth="1.4" strokeDasharray="4 4" opacity={hot ? 1 : 0.4} />
      {/* seta do hook test (tração lateral da fíbula) */}
      <g stroke="var(--amber)" strokeWidth="2.2" fill="none" strokeLinecap="round" opacity={hot ? 1 : 0.4}>
        <line x1="180" y1="120" x2="216" y2="120" />
        <path d="M210 114 l8 6 l-8 6" fill="var(--amber)" stroke="none" />
      </g>
      <text x="202" y="112" {...label} fill="var(--amber)">
        hook test
      </text>
      <text x="130" y="248" textAnchor="middle" {...mono}>
        mortise · estresse
      </text>
    </svg>
  );
};
