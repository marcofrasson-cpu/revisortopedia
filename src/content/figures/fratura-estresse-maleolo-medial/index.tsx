import type { FC } from "react";
import type { FigureProps } from "../../../types/topic";

/* ============================================================================
   Figuras — Fratura por estresse do maléolo medial
   SVG esquemático, line-art 2 tons, sem copyright. Cores só via CSS vars.
   Prefixo obrigatório de id: "fratura-estresse-maleolo-medial:"
   ========================================================================== */

const LABEL = {
  fontSize: 11,
  fill: "var(--muted)",
  fontFamily: "var(--font-body, sans-serif)",
} as const;

const CODE = {
  fontSize: 11,
  fill: "var(--muted)",
  fontFamily: "var(--font-mono, monospace)",
} as const;

/* --- Anatomia: tornozelo AP, maléolo medial, plafond, deltoide, TP -------- */
const Anatomia: FC<FigureProps> = ({ className, title, variant }) => {
  const showLoad = variant === "carga";
  return (
    <svg
      viewBox="0 0 320 300"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? "Anatomia do tornozelo — maléolo medial e plafond tibial"}</title>

      {/* Tíbia */}
      <path
        d="M120 20 L120 170 Q120 190 132 200 L150 214 L150 20 Z"
        stroke="var(--ink-soft)"
        fill="var(--surface)"
        strokeWidth="2"
      />
      {/* Fíbula */}
      <path
        d="M196 40 L196 180 Q196 202 208 210 L214 214 L214 214 L200 40 Z"
        stroke="var(--ink-soft)"
        fill="var(--surface-2, var(--surface))"
        strokeWidth="2"
      />
      {/* Maléolo medial (prolongamento distal da tíbia) */}
      <path
        d="M120 170 Q116 196 124 214 L138 218 Q134 198 132 182 Z"
        stroke="var(--ink-soft)"
        fill="var(--surface-2, var(--surface))"
        strokeWidth="2"
      />
      {/* Plafond tibial (superfície articular horizontal) */}
      <line x1="132" y1="214" x2="196" y2="212" stroke="var(--ink-soft)" strokeWidth="2.5" />
      {/* Tálus (dome) */}
      <path
        d="M130 224 Q160 210 198 222 Q206 240 190 250 L142 250 Q126 240 130 224 Z"
        stroke="var(--ink-soft)"
        fill="var(--surface)"
        strokeWidth="2"
      />
      {/* Ligamento deltoide (partes moles) */}
      <path
        d="M126 214 Q120 236 140 246"
        stroke="var(--teal)"
        fill="none"
        strokeWidth="2.5"
      />
      {/* Tendão tibial posterior contornando o maléolo */}
      <path
        d="M150 150 Q126 176 122 208"
        stroke="var(--teal)"
        fill="none"
        strokeWidth="2.5"
        strokeDasharray="1 0"
      />

      {/* Vetor de carga / estresse em varo (variante) */}
      {showLoad && (
        <>
          <line x1="160" y1="30" x2="150" y2="205" stroke="var(--amber)" strokeWidth="2" strokeDasharray="5 4" />
          <path d="M150 205 l-7 -8 M150 205 l8 -5" stroke="var(--amber)" strokeWidth="2" fill="none" />
          <text x="164" y="60" style={LABEL}>eixo em varo</text>
        </>
      )}

      <text x="60" y="100" style={LABEL}>Tíbia</text>
      <line x1="98" y1="96" x2="122" y2="100" stroke="var(--muted)" strokeWidth="0.75" />
      <text x="222" y="90" style={LABEL}>Fíbula</text>
      <line x1="220" y1="86" x2="200" y2="92" stroke="var(--muted)" strokeWidth="0.75" />
      <text x="40" y="210" style={LABEL}>Maléolo medial</text>
      <line x1="112" y1="206" x2="126" y2="200" stroke="var(--muted)" strokeWidth="0.75" />
      <text x="205" y="205" style={LABEL}>Plafond</text>
      <line x1="203" y1="201" x2="180" y2="212" stroke="var(--muted)" strokeWidth="0.75" />
      <text x="60" y="252" style={{ ...LABEL, fill: "var(--teal)" }}>Deltoide</text>
      <text x="150" y="285" style={LABEL}>Tálus</text>
    </svg>
  );
};

/* --- Etiologia: impacto anteromedial / esporão + concentração de estresse -- */
const Etiologia: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 320 260"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Etiologia — impacto anteromedial e esporão osteofitário do plafond"}</title>

    {/* Tíbia distal (perfil sagital) */}
    <path
      d="M90 20 L90 150 Q90 168 104 176 L150 176 L150 20 Z"
      stroke="var(--ink-soft)"
      fill="var(--surface)"
      strokeWidth="2"
    />
    {/* Esporão anteromedial (osteófito) */}
    <path
      d="M104 176 Q96 186 110 190 L128 178 Z"
      stroke="var(--cortical)"
      fill="var(--surface-2, var(--surface))"
      strokeWidth="2"
      className="fx-line"
    />
    {/* Tálus com esporão dorsal */}
    <path
      d="M96 200 Q140 186 210 198 Q220 216 200 226 L120 226 Q98 220 96 200 Z"
      stroke="var(--ink-soft)"
      fill="var(--surface)"
      strokeWidth="2"
    />
    <path
      d="M112 198 Q118 188 130 196 Z"
      stroke="var(--cortical)"
      fill="var(--surface-2, var(--surface))"
      strokeWidth="2"
      className="fx-line"
    />

    {/* Seta de choque anteromedial na dorsiflexão */}
    <path d="M116 150 q0 18 -2 30" stroke="var(--amber)" strokeWidth="2" fill="none" />
    <path d="M114 180 l-6 -8 M114 180 l7 -6" stroke="var(--amber)" strokeWidth="2" fill="none" />

    {/* Zona de concentração de estresse no maléolo (traço incipiente) */}
    <line x1="128" y1="176" x2="132" y2="148" stroke="var(--cortical)" strokeWidth="2.5" strokeDasharray="4 3" className="fx-line" />

    <text x="30" y="90" style={LABEL}>Tíbia distal</text>
    <text x="150" y="185" style={{ ...LABEL, fill: "var(--cortical)" }}>Esporão anteromedial</text>
    <line x1="148" y1="181" x2="126" y2="184" stroke="var(--muted)" strokeWidth="0.75" />
    <text x="150" y="215" style={LABEL}>Tálus</text>
    <text x="30" y="150" style={{ ...LABEL, fill: "var(--amber)" }}>Impacto repetitivo</text>
    <text x="150" y="140" style={{ ...LABEL, fill: "var(--cortical)" }}>Estresse focal</text>
  </svg>
);

/* --- Classificação: extensão do traço vertical (variantes clicáveis) ------- */
const Classificacao: FC<FigureProps> = ({ className, title, variant }) => {
  const v = variant ?? "incompleta";
  const drawCortex = (
    <>
      {/* Bloco do maléolo medial (visão AP ampliada) */}
      <path
        d="M110 30 L210 30 L210 150 Q210 190 178 210 L150 224 Q122 210 116 178 L110 150 Z"
        stroke="var(--ink-soft)"
        fill="var(--surface)"
        strokeWidth="2"
      />
      {/* Linha do plafond */}
      <line x1="110" y1="196" x2="210" y2="196" stroke="var(--ink-soft)" strokeWidth="2" />
    </>
  );
  return (
    <svg
      viewBox="0 0 320 260"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? "Classificação por extensão do traço vertical do maléolo medial"}</title>
      {drawCortex}

      {/* Traço vertical partindo do ângulo medial do plafond */}
      {v === "incompleta" && (
        <>
          <line x1="150" y1="196" x2="152" y2="150" stroke="var(--cortical)" strokeWidth="3" className="fx-line" />
          <text x="170" y="240" style={CODE}>Grau I</text>
          <text x="40" y="240" style={LABEL}>fissura incompleta</text>
        </>
      )}
      {v === "completa" && (
        <>
          <line x1="150" y1="196" x2="154" y2="70" stroke="var(--cortical)" strokeWidth="3" className="fx-line" />
          <text x="170" y="240" style={CODE}>Grau II</text>
          <text x="30" y="240" style={LABEL}>completa, não desviada</text>
        </>
      )}
      {v === "deslocada" && (
        <>
          <line x1="150" y1="196" x2="156" y2="60" stroke="var(--cortical)" strokeWidth="3.5" className="fx-line" />
          {/* Fragmento desviado */}
          <path
            d="M110 60 L150 60 L156 196 L116 178 L110 150 Z"
            stroke="var(--cortical)"
            fill="var(--surface-2, var(--surface))"
            strokeWidth="1.5"
            transform="translate(-8 2)"
            className="fx-line"
          />
          <text x="170" y="240" style={CODE}>Grau III</text>
          <text x="40" y="240" style={LABEL}>desviada / não-união</text>
        </>
      )}

      <text x="120" y="20" style={LABEL}>Maléolo medial (AP)</text>
    </svg>
  );
};

/* --- Imagem: RM coronal com edema medular + traço vertical ---------------- */
const Imagem: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 320 260"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "RM coronal — edema medular do maléolo medial e traço vertical"}</title>
    {/* Campo da RM */}
    <rect x="30" y="20" width="260" height="220" rx="6" stroke="var(--ink-soft)" fill="var(--surface-2, var(--surface))" strokeWidth="1.5" />

    {/* Tíbia distal */}
    <path
      d="M120 30 L120 170 Q120 188 132 196 L150 208 L150 30 Z"
      stroke="var(--ink-soft)"
      fill="var(--surface)"
      strokeWidth="2"
    />
    {/* Maléolo medial */}
    <path
      d="M120 170 Q114 196 126 210 L142 212 Q134 196 132 182 Z"
      stroke="var(--ink-soft)"
      fill="var(--surface)"
      strokeWidth="2"
    />
    {/* Edema medular (hipersinal T2) */}
    <ellipse cx="132" cy="184" rx="20" ry="26" fill="var(--amber)" opacity="0.18" />
    {/* Traço vertical */}
    <line x1="132" y1="208" x2="134" y2="150" stroke="var(--cortical)" strokeWidth="2.5" className="fx-line" />

    <text x="196" y="120" style={LABEL}>Edema medular (T2)</text>
    <line x1="194" y1="116" x2="150" y2="176" stroke="var(--muted)" strokeWidth="0.75" />
    <text x="196" y="200" style={{ ...LABEL, fill: "var(--cortical)" }}>Traço vertical</text>
    <line x1="194" y1="196" x2="136" y2="180" stroke="var(--muted)" strokeWidth="0.75" />
    <text x="40" y="235" style={CODE}>RM coronal DP FatSat</text>
  </svg>
);

/* --- Via de acesso: anteromedial ------------------------------------------ */
const ViaAcesso: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 320 260"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Via anteromedial e estruturas em risco"}</title>
    {/* Contorno do tornozelo medial */}
    <path
      d="M110 30 L110 150 Q110 180 130 196 L150 210 Q120 214 100 232"
      stroke="var(--ink-soft)"
      fill="none"
      strokeWidth="2"
    />
    <path
      d="M150 210 Q180 208 210 220"
      stroke="var(--ink-soft)"
      fill="none"
      strokeWidth="2"
    />
    {/* Maléolo medial */}
    <path
      d="M110 150 Q104 182 122 200 L138 204 Q126 184 124 162 Z"
      stroke="var(--ink-soft)"
      fill="var(--surface-2, var(--surface))"
      strokeWidth="2"
    />

    {/* Incisão anteromedial */}
    <line x1="146" y1="120" x2="128" y2="200" stroke="var(--cortical)" strokeWidth="2.5" strokeDasharray="6 4" />

    {/* Veia safena magna + nervo safeno (em risco) */}
    <path d="M158 100 Q150 160 136 210" stroke="var(--teal)" fill="none" strokeWidth="2" />
    {/* Tendão tibial posterior (posteromedial, a proteger) */}
    <path d="M118 120 Q100 160 104 205" stroke="var(--teal)" fill="none" strokeWidth="2" strokeDasharray="3 3" />

    <text x="150" y="150" style={{ ...LABEL, fill: "var(--cortical)" }}>Incisão anteromedial</text>
    <text x="168" y="90" style={{ ...LABEL, fill: "var(--teal)" }}>V. safena / n. safeno</text>
    <line x1="166" y1="94" x2="152" y2="120" stroke="var(--muted)" strokeWidth="0.75" />
    <text x="30" y="150" style={{ ...LABEL, fill: "var(--teal)" }}>T. tibial post.</text>
    <line x1="70" y1="146" x2="108" y2="150" stroke="var(--muted)" strokeWidth="0.75" />
    <text x="40" y="200" style={LABEL}>Maléolo medial</text>
  </svg>
);

/* --- Técnica passo 1: artroscopia + debridamento do esporão --------------- */
const Step1: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 320 240"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Passo 1 — artroscopia e ressecção do esporão anteromedial"}</title>
    {/* Tíbia distal sagital */}
    <path d="M90 20 L90 140 Q90 158 104 166 L150 166 L150 20 Z" stroke="var(--ink-soft)" fill="var(--surface)" strokeWidth="2" />
    {/* Esporão a ser ressecado */}
    <path d="M104 166 Q96 176 110 180 L128 168 Z" stroke="var(--cortical)" fill="var(--surface-2, var(--surface))" strokeWidth="2" className="fx-line" />
    {/* Tálus */}
    <path d="M96 192 Q140 178 210 190 Q220 208 200 218 L120 218 Q98 212 96 192 Z" stroke="var(--ink-soft)" fill="var(--surface)" strokeWidth="2" />
    {/* Shaver artroscópico (implante/instrumento) */}
    <line x1="250" y1="150" x2="122" y2="176" stroke="var(--teal)" strokeWidth="3" />
    <circle cx="122" cy="176" r="5" stroke="var(--teal)" fill="none" strokeWidth="2" />
    <text x="196" y="145" style={{ ...LABEL, fill: "var(--teal)" }}>Shaver / fresa</text>
    <text x="150" y="180" style={{ ...LABEL, fill: "var(--cortical)" }}>ressecção do esporão</text>
  </svg>
);

/* --- Técnica passo 2: fio-guia perpendicular ao traço --------------------- */
const Step2: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 320 240"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Passo 2 — redução e fio-guia perpendicular ao traço vertical"}</title>
    {/* Maléolo medial AP */}
    <path d="M110 20 L200 20 L200 150 Q200 186 168 202 L150 214 Q122 202 116 172 L110 150 Z" stroke="var(--ink-soft)" fill="var(--surface)" strokeWidth="2" />
    <line x1="110" y1="188" x2="200" y2="188" stroke="var(--ink-soft)" strokeWidth="2" />
    {/* Traço vertical */}
    <line x1="150" y1="188" x2="153" y2="70" stroke="var(--cortical)" strokeWidth="2.5" className="fx-line" />
    {/* Fios-guia perpendiculares ao traço (horizontais) */}
    <line x1="118" y1="110" x2="215" y2="110" stroke="var(--teal)" strokeWidth="2.5" />
    <line x1="118" y1="150" x2="215" y2="150" stroke="var(--teal)" strokeWidth="2.5" />
    {/* Ângulo de perpendicularidade */}
    <path d="M150 110 l14 0 l0 14" stroke="var(--amber)" fill="none" strokeWidth="1.5" />
    <text x="196" y="102" style={{ ...LABEL, fill: "var(--teal)" }}>fios-guia 1,25 mm</text>
    <text x="196" y="176" style={{ ...LABEL, fill: "var(--amber)" }}>⊥ ao traço</text>
    <text x="30" y="80" style={{ ...LABEL, fill: "var(--cortical)" }}>traço vertical</text>
  </svg>
);

/* --- Técnica passo 3: parafusos canulados de compressão ------------------- */
const Step3: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 320 240"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Passo 3 — fixação com parafusos canulados de compressão"}</title>
    {/* Maléolo medial AP */}
    <path d="M110 20 L200 20 L200 150 Q200 186 168 202 L150 214 Q122 202 116 172 L110 150 Z" stroke="var(--ink-soft)" fill="var(--surface)" strokeWidth="2" />
    <line x1="110" y1="188" x2="200" y2="188" stroke="var(--ink-soft)" strokeWidth="2" />
    {/* Traço reduzido (fino) */}
    <line x1="150" y1="188" x2="152" y2="70" stroke="var(--cortical)" strokeWidth="1.2" strokeDasharray="2 3" className="fx-line" />

    {/* Parafuso canulado 1 */}
    <g stroke="var(--teal)" strokeWidth="2.5" fill="none">
      <line x1="120" y1="108" x2="212" y2="108" />
      <line x1="120" y1="103" x2="120" y2="113" />
      <line x1="128" y1="104" x2="128" y2="112" />
      <line x1="136" y1="104" x2="136" y2="112" />
    </g>
    {/* Parafuso canulado 2 */}
    <g stroke="var(--teal)" strokeWidth="2.5" fill="none">
      <line x1="120" y1="150" x2="212" y2="150" />
      <line x1="120" y1="145" x2="120" y2="155" />
      <line x1="128" y1="146" x2="128" y2="154" />
      <line x1="136" y1="146" x2="136" y2="154" />
    </g>
    {/* Setas de compressão */}
    <path d="M175 96 l0 -8 M170 90 l5 -4 l5 4" stroke="var(--amber)" strokeWidth="1.5" fill="none" />
    <text x="196" y="100" style={{ ...LABEL, fill: "var(--teal)" }}>parafusos 3,5/4,0 mm</text>
    <text x="196" y="170" style={{ ...LABEL, fill: "var(--amber)" }}>compressão interfrag.</text>
    <text x="24" y="80" style={{ ...LABEL, fill: "var(--cortical)" }}>traço reduzido</text>
  </svg>
);

export const figures: Record<string, FC<FigureProps>> = {
  "fratura-estresse-maleolo-medial:anatomia": Anatomia,
  "fratura-estresse-maleolo-medial:etiologia": Etiologia,
  "fratura-estresse-maleolo-medial:classificacao": Classificacao,
  "fratura-estresse-maleolo-medial:imagem": Imagem,
  "fratura-estresse-maleolo-medial:via-acesso": ViaAcesso,
  "fratura-estresse-maleolo-medial:step-1": Step1,
  "fratura-estresse-maleolo-medial:step-2": Step2,
  "fratura-estresse-maleolo-medial:step-3": Step3,
};
