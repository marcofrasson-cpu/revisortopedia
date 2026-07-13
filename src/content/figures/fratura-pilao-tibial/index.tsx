import type { FC } from "react";
import type { FigureProps } from "../../../types/topic";

/* ============================================================================
   Fratura do pilão tibial (AO/OTA 43) — figuras esquemáticas, line-art 2 tons
   (SEM copyright, desenho original).
   Ossos: stroke var(--ink-soft), fill var(--surface). Implante/partes moles: teal.
   Traço de fratura: var(--cortical) + className "fx-line". Medidas/eixos: var(--amber).
   Rótulos <text>: fontSize 11, fill var(--muted), fontFamily var(--font-body).
   Todos os ids são prefixados por "fratura-pilao-tibial:" no registro (fim do arquivo).
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
  letterSpacing: 0.5,
};

/* ---------------------------------------------------------------------------
   1) Anatomia — pilão tibial (vista AP): metáfise distal, plafond (teto),
   colunas medial/lateral, incisura fibular / sindesmose, e o envelope de
   partes moles fino sobre a face anteromedial subcutânea.
--------------------------------------------------------------------------- */
export const Anatomia: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 280 320"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Anatomia do pilão tibial — vista anteroposterior"}</title>

    {/* Diáfise tibial */}
    <path {...boneStyle} d="M96 16 C 92 60, 92 120, 98 168 L 150 168 C 156 120, 156 60, 152 16 Z" />

    {/* Alargamento metafisário distal */}
    <path {...boneStyle} d="M98 164 C 88 196, 82 220, 82 244 L 172 244 C 172 220, 164 196, 150 164 Z" />

    {/* Plafond (teto articular) — face inferior côncava */}
    <path
      {...boneStyle}
      fill="var(--surface-2, var(--surface))"
      d="M82 244 C 92 262, 116 270, 128 270 C 142 270, 164 262, 172 244 Z"
    />
    <path
      d="M88 250 C 108 264, 148 264, 166 250"
      fill="none"
      stroke="var(--line-strong)"
      strokeWidth="1"
      strokeDasharray="3 3"
    />

    {/* Fíbula distal (maléolo lateral) */}
    <path {...boneStyle} d="M182 40 C 180 110, 182 180, 188 226 C 190 250, 200 262, 206 250 C 210 214, 206 120, 202 40 Z" />

    {/* Incisura fibular / sindesmose */}
    <g stroke="var(--teal)" strokeWidth="1.8" fill="none" strokeLinecap="round">
      <line x1="170" y1="206" x2="184" y2="204" />
      <line x1="170" y1="220" x2="184" y2="220" />
    </g>

    {/* Maléolo medial */}
    <path {...boneStyle} d="M82 244 C 78 258, 78 272, 86 280 C 94 274, 96 260, 96 250 Z" />

    {/* Envelope de partes moles anteromedial fino (subcutâneo) */}
    <path
      d="M96 176 C 86 206, 80 230, 80 250"
      fill="none"
      stroke="var(--teal)"
      strokeWidth="1.4"
      strokeDasharray="2 4"
    />

    <text x="124" y="12" {...label} textAnchor="middle">Diáfise da tíbia</text>
    <text x="60" y="210" {...label} textAnchor="end">metáfise</text>
    <text x="60" y="224" {...label} textAnchor="end">distal</text>
    <text x="214" y="150" {...label} textAnchor="start">fíbula</text>
    <text x="214" y="212" {...label} textAnchor="start" fill="var(--teal)">sindesmose</text>
    <text x="66" y="290" {...label} textAnchor="middle">maléolo medial</text>
    <text x="140" y="292" {...label} textAnchor="middle">plafond</text>
    <text x="140" y="312" {...label} textAnchor="middle" fontFamily="var(--font-mono, monospace)">
      pele anteromedial subcutânea = envelope crítico
    </text>
  </svg>
);

/* ---------------------------------------------------------------------------
   2) Colunas do plafond (vista axial do teto) — anatomia "de três colunas"
   que orienta a redução e a escolha de placas.
--------------------------------------------------------------------------- */
export const Colunas: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 300 240"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Colunas do plafond tibial (corte axial) — medial, lateral (Chaput) e posterior (Volkmann)"}</title>

    {/* Contorno axial do plafond distal da tíbia */}
    <path
      {...boneStyle}
      fill="var(--surface-2, var(--surface))"
      d="M70 90 C 70 62, 100 48, 150 48 C 208 48, 236 66, 236 96 C 236 128, 214 158, 176 168 C 140 178, 96 170, 78 146 C 66 130, 68 108, 70 90 Z"
    />

    {/* Divisões das colunas (linhas em Y) */}
    <g stroke="var(--line-strong)" strokeWidth="1" strokeDasharray="4 3" fill="none">
      <line x1="150" y1="110" x2="120" y2="52" />
      <line x1="150" y1="110" x2="216" y2="70" />
      <line x1="150" y1="110" x2="150" y2="172" />
    </g>

    {/* Incisura / faceta fibular (lateral) */}
    <path d="M226 96 C 238 100, 242 116, 232 128" fill="none" stroke="var(--teal)" strokeWidth="1.8" />

    <text x="150" y="30" {...label} textAnchor="middle">anterior</text>
    <text x="150" y="200" {...label} textAnchor="middle">posterior</text>
    <text x="96" y="82" {...label} textAnchor="middle">coluna</text>
    <text x="96" y="96" {...label} textAnchor="middle">medial</text>
    <text x="212" y="58" {...label} textAnchor="middle" fill="var(--teal)">Chaput</text>
    <text x="212" y="72" {...label} textAnchor="middle">(ântero-lat.)</text>
    <text x="170" y="190" {...label} textAnchor="middle">Volkmann</text>
    <text x="150" y="228" {...label} textAnchor="middle" fontFamily="var(--font-mono, monospace)">
      três colunas orientam via de acesso e placa
    </text>
  </svg>
);

/* ---------------------------------------------------------------------------
   3) AO/OTA 43 — variants "A" (extra-articular), "B" (articular parcial),
   "C" (articular completa metafisária). Clicável.
--------------------------------------------------------------------------- */
export const AoOta: FC<FigureProps> = ({ className, title, variant }) => {
  const v = (variant ?? "A").toUpperCase();
  const map: Record<string, { name: string; desc: string }> = {
    A: { name: "43-A", desc: "Extra-articular (metafisária)" },
    B: { name: "43-B", desc: "Articular parcial (plafond parcial)" },
    C: { name: "43-C", desc: "Articular completa (dissocia plafond da diáfise)" },
  };
  const cfg = map[v] ?? map.A;

  return (
    <svg
      viewBox="0 0 240 300"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `AO/OTA 43 — ${cfg.name} (${cfg.desc})`}</title>

      {/* Tíbia distal genérica (AP) */}
      <path {...boneStyle} d="M92 16 C 88 60, 88 118, 94 160 L 146 160 C 152 118, 152 60, 148 16 Z" />
      <path {...boneStyle} d="M94 156 C 84 188, 80 214, 80 236 L 160 236 C 160 214, 154 188, 146 156 Z" />
      <path
        {...boneStyle}
        fill="var(--surface-2, var(--surface))"
        d="M80 236 C 90 254, 112 262, 120 262 C 130 262, 152 254, 160 236 Z"
      />
      {/* superfície articular */}
      <path d="M86 242 C 104 256, 138 256, 154 242" fill="none" stroke="var(--line-strong)" strokeWidth="1" strokeDasharray="3 3" />

      {/* Traço(s) de fratura conforme o tipo */}
      <g className="fx-line" stroke="var(--cortical)" strokeWidth="2.6" fill="none" strokeLinecap="round">
        {v === "A" && (
          // metafisária transversa, poupa a articulação
          <path d="M84 200 C 108 210, 134 210, 156 200" />
        )}
        {v === "B" && (
          // traço articular parcial: entra no plafond mas mantém parte contínua à diáfise
          <path d="M120 236 C 122 222, 120 208, 112 196" />
        )}
        {v === "C" && (
          <>
            {/* metafisária transversa */}
            <path d="M84 200 C 108 210, 134 210, 156 200" />
            {/* traço articular que dissocia o plafond */}
            <path d="M120 236 L 120 200" />
            {/* cominução do plafond */}
            <path d="M104 248 l 12 6 M128 248 l 12 -4" strokeWidth="1.8" />
          </>
        )}
      </g>

      <text x="120" y="12" {...label} textAnchor="middle">Tíbia distal (AP)</text>
      <text x="120" y="298" textAnchor="middle" {...mono}>{cfg.name}</text>
      <text x="120" y="284" textAnchor="middle" {...label}>{cfg.desc}</text>
    </svg>
  );
};

/* ---------------------------------------------------------------------------
   4) Rüedi-Allgöwer I/II/III — grau de desvio e cominução articular. Clicável.
--------------------------------------------------------------------------- */
export const Ruedi: FC<FigureProps> = ({ className, title, variant }) => {
  const v = (variant ?? "I").toUpperCase();
  const map: Record<string, { name: string; desc: string }> = {
    I: { name: "Tipo I", desc: "Sem desvio articular significativo" },
    II: { name: "Tipo II", desc: "Desvio articular sem cominução" },
    III: { name: "Tipo III", desc: "Cominução e impacção articular" },
  };
  const cfg = map[v] ?? map.I;

  return (
    <svg
      viewBox="0 0 240 300"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `Rüedi-Allgöwer — ${cfg.name} (${cfg.desc})`}</title>

      {/* Tíbia distal (AP) */}
      <path {...boneStyle} d="M92 16 C 88 60, 88 118, 94 160 L 146 160 C 152 118, 152 60, 148 16 Z" />
      <path {...boneStyle} d="M94 156 C 84 188, 80 214, 80 236 L 160 236 C 160 214, 154 188, 146 156 Z" />

      {/* Plafond — desenho depende do tipo */}
      {v === "I" && (
        <>
          <path
            {...boneStyle}
            fill="var(--surface-2, var(--surface))"
            d="M80 236 C 90 254, 112 262, 120 262 C 130 262, 152 254, 160 236 Z"
          />
          <g className="fx-line" stroke="var(--cortical)" strokeWidth="2" fill="none" strokeLinecap="round">
            <path d="M120 236 L 118 200" />
          </g>
        </>
      )}
      {v === "II" && (
        <>
          {/* fragmento articular deslocado, mas peça única */}
          <path
            {...boneStyle}
            fill="var(--surface-2, var(--surface))"
            d="M80 236 C 90 254, 108 262, 118 262 L 118 236 Z"
          />
          <path
            {...boneStyle}
            fill="var(--surface-2, var(--surface))"
            transform="translate(6 8)"
            d="M118 236 C 128 262, 150 254, 160 236 Z"
          />
          <g className="fx-line" stroke="var(--cortical)" strokeWidth="2.4" fill="none" strokeLinecap="round">
            <path d="M118 236 L 120 198" />
          </g>
        </>
      )}
      {v === "III" && (
        <>
          {/* múltiplos fragmentos + impacção */}
          <path
            {...boneStyle}
            fill="var(--surface-2, var(--surface))"
            d="M80 236 C 88 252, 100 258, 108 258 L 108 236 Z"
          />
          <path {...boneStyle} fill="var(--surface-2, var(--surface))" transform="translate(2 6)" d="M108 236 L 130 236 L 128 258 L 108 258 Z" />
          <path {...boneStyle} fill="var(--surface-2, var(--surface))" transform="translate(6 4)" d="M130 236 C 146 256, 156 250, 160 236 Z" />
          <g className="fx-line" stroke="var(--cortical)" strokeWidth="2.2" fill="none" strokeLinecap="round">
            <path d="M104 236 L 106 210 M128 236 L 130 208 M112 250 l 16 2" />
          </g>
        </>
      )}

      <text x="120" y="12" {...label} textAnchor="middle">Plafond tibial (AP)</text>
      <text x="120" y="284" textAnchor="middle" {...label}>{cfg.desc}</text>
      <text x="120" y="298" textAnchor="middle" {...mono}>{cfg.name}</text>
    </svg>
  );
};

/* ---------------------------------------------------------------------------
   5) Estratégia estagiada "span-scan-plan" — estágio 1: fixador externo em
   ponte (tíbia → calcâneo/metatarso) restaura comprimento por ligamentotaxia
   e protege o envelope enquanto se aguarda a pele.
--------------------------------------------------------------------------- */
export const Span: FC<FigureProps> = ({ className, title, activeStep }) => {
  const stage = activeStep ?? 1;
  return (
    <svg
      viewBox="0 0 300 300"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? "Estratégia estagiada span-scan-plan — fixador externo em ponte (estágio 1)"}</title>

      {/* Tíbia (perfil) */}
      <path {...boneStyle} d="M120 20 C 116 70, 114 120, 116 158 L 148 158 C 150 120, 150 70, 152 20 Z" />
      {/* metáfise / pilão cominuído */}
      <path {...boneStyle} d="M116 156 C 110 182, 108 200, 110 214 L 156 214 C 158 200, 156 182, 148 156 Z" />
      <g className="fx-line" stroke="var(--cortical)" strokeWidth="1.8" fill="none" strokeLinecap="round">
        <path d="M114 176 l 18 6 M120 192 l 20 2 M132 178 l 12 8" />
      </g>

      {/* Talus + pé (esquemático) */}
      <path {...boneStyle} fill="var(--surface-2, var(--surface))" d="M108 220 C 104 234, 110 246, 128 248 C 150 250, 168 246, 176 236 C 182 228, 178 220, 168 218 L 116 216 Z" />
      <path {...boneStyle} d="M176 236 C 210 240, 250 240, 268 236 L 268 252 C 250 256, 210 256, 178 250 Z" />

      {/* Barra do fixador externo (em ponte) */}
      <line x1="70" y1="90" x2="70" y2="270" stroke="var(--teal)" strokeWidth="4" strokeLinecap="round" />
      {/* pinos proximais na tíbia */}
      <g stroke="var(--teal)" strokeWidth="2.6" strokeLinecap="round">
        <line x1="70" y1="104" x2="132" y2="96" />
        <line x1="70" y1="130" x2="132" y2="126" />
      </g>
      {/* pino distal no calcâneo / metatarso (transfixante) */}
      <line x1="70" y1="250" x2="250" y2="248" stroke="var(--teal)" strokeWidth="2.6" strokeLinecap="round" />

      {/* Vetor de ligamentotaxia (distração longitudinal) */}
      <g stroke="var(--amber)" strokeWidth="2.2" fill="none" strokeLinecap="round">
        <line x1="230" y1="276" x2="264" y2="276" markerEnd="url(#fpt-span-arrow)" />
      </g>
      <defs>
        <marker id="fpt-span-arrow" markerWidth="9" markerHeight="9" refX="4" refY="4" orient="auto">
          <path d="M0 0 L8 4 L0 8 Z" fill="var(--amber)" />
        </marker>
      </defs>

      <text x="60" y="84" {...label} textAnchor="middle" fill="var(--teal)">fixador</text>
      <text x="60" y="98" {...label} textAnchor="middle" fill="var(--teal)">em ponte</text>
      <text x="70" y="176" {...label} textAnchor="end" fill="var(--cortical)">pilão</text>
      <text x="70" y="190" {...label} textAnchor="end" fill="var(--cortical)">cominuído</text>
      <text x="248" y="270" {...label} textAnchor="middle" fill="var(--amber)">ligamentotaxia</text>
      <text x="150" y="292" {...label} textAnchor="middle" fontFamily="var(--font-mono, monospace)">
        {stage <= 1 ? "SPAN: restaura comprimento · protege partes moles" : "aguardar 7–21 dias · pele enrugada = seguro"}
      </text>
    </svg>
  );
};

/* ---------------------------------------------------------------------------
   6) Vias de acesso — anteromedial / anterolateral (Chaput). Clicável.
--------------------------------------------------------------------------- */
export const Via: FC<FigureProps> = ({ className, title, variant }) => {
  const v = (variant ?? "anteromedial").toLowerCase();
  const anterolateral = v.startsWith("anterolat");
  const posterolateral = v.startsWith("posterolat");

  return (
    <svg
      viewBox="0 0 260 300"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>
        {title ??
          (anterolateral
            ? "Via anterolateral (Chaput) — coluna ântero-lateral do plafond"
            : posterolateral
            ? "Via posterolateral — plafond posterior (Volkmann) e fíbula"
            : "Via anteromedial — coluna medial do plafond")}
      </title>

      {/* Tíbia distal (AP) */}
      <path {...boneStyle} d="M92 16 C 88 60, 88 118, 94 160 L 146 160 C 152 118, 152 60, 148 16 Z" />
      <path {...boneStyle} d="M94 156 C 84 188, 80 214, 80 236 L 160 236 C 160 214, 154 188, 146 156 Z" />
      <path
        {...boneStyle}
        fill="var(--surface-2, var(--surface))"
        d="M80 236 C 90 254, 112 262, 120 262 C 130 262, 152 254, 160 236 Z"
      />
      {/* Fíbula */}
      <path {...boneStyle} d="M172 40 C 170 110, 172 180, 178 224 C 180 244, 190 254, 196 244 C 200 210, 196 120, 192 40 Z" />

      {/* Linha de incisão conforme a via */}
      {anterolateral ? (
        <path d="M158 40 C 168 100, 168 170, 156 226" fill="none" stroke="var(--teal)" strokeWidth="2.6" strokeLinecap="round" strokeDasharray="2 6" />
      ) : posterolateral ? (
        <path d="M186 46 C 198 110, 200 180, 190 232" fill="none" stroke="var(--teal)" strokeWidth="2.6" strokeLinecap="round" strokeDasharray="2 6" />
      ) : (
        <path d="M84 44 C 74 108, 74 176, 86 232" fill="none" stroke="var(--teal)" strokeWidth="2.6" strokeLinecap="round" strokeDasharray="2 6" />
      )}

      <text x="120" y="12" {...label} textAnchor="middle">Tíbia distal (AP)</text>
      {anterolateral ? (
        <>
          <text x="176" y="120" {...label} textAnchor="start" fill="var(--teal)">incisão</text>
          <text x="176" y="134" {...label} textAnchor="start" fill="var(--teal)">anterolateral</text>
          <text x="120" y="292" {...label} textAnchor="middle" fontFamily="var(--font-mono, monospace)">
            intervalo: lateral ao tibial anterior · n. fibular superficial
          </text>
        </>
      ) : posterolateral ? (
        <>
          <text x="206" y="130" {...label} textAnchor="start" fill="var(--teal)">incisão</text>
          <text x="206" y="144" {...label} textAnchor="start" fill="var(--teal)">posterolateral</text>
          <text x="120" y="292" {...label} textAnchor="middle" fontFamily="var(--font-mono, monospace)">
            entre fibulares e flexor longo do hálux · fíbula + Volkmann
          </text>
        </>
      ) : (
        <>
          <text x="60" y="120" {...label} textAnchor="end" fill="var(--teal)">incisão</text>
          <text x="60" y="134" {...label} textAnchor="end" fill="var(--teal)">anteromedial</text>
          <text x="120" y="292" {...label} textAnchor="middle" fontFamily="var(--font-mono, monospace)">
            medial ao tibial anterior · face subcutânea da tíbia
          </text>
        </>
      )}
    </svg>
  );
};

/* ---------------------------------------------------------------------------
   7) Passo — restaurar o comprimento da fíbula (placa lateral): reancora a
   coluna lateral e devolve comprimento/rotação ao plafond.
--------------------------------------------------------------------------- */
export const StepFibula: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 240 300"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Passo — restauração do comprimento da fíbula com placa lateral"}</title>

    {/* Tíbia distal (AP) */}
    <path {...boneStyle} d="M76 16 C 72 60, 72 118, 78 158 L 130 158 C 136 118, 136 60, 132 16 Z" />
    <path {...boneStyle} d="M78 154 C 68 186, 64 212, 64 234 L 144 234 C 144 212, 138 186, 130 154 Z" />
    <path
      {...boneStyle}
      fill="var(--surface-2, var(--surface))"
      d="M64 234 C 74 252, 96 260, 104 260 C 114 260, 136 252, 144 234 Z"
    />

    {/* Fíbula com traço restaurado */}
    <path {...boneStyle} d="M172 40 C 170 110, 172 180, 178 224 C 180 244, 190 252, 196 242 C 200 210, 196 120, 192 40 Z" />
    <g className="fx-line">
      <line x1="170" y1="150" x2="196" y2="150" stroke="var(--cortical)" strokeWidth="1.8" strokeDasharray="3 3" />
    </g>

    {/* Placa fibular lateral */}
    <rect x="196" y="90" width="12" height="140" rx="6" fill="var(--teal-tint, var(--surface-2, var(--surface)))" stroke="var(--teal)" strokeWidth="1.8" />
    <g stroke="var(--teal)" strokeWidth="2.2" strokeLinecap="round">
      <line x1="196" y1="108" x2="176" y2="108" />
      <line x1="196" y1="130" x2="176" y2="130" />
      <line x1="196" y1="196" x2="178" y2="200" />
      <line x1="196" y1="214" x2="182" y2="220" />
    </g>

    {/* Vetor de comprimento restaurado */}
    <g stroke="var(--amber)" strokeWidth="1" fill="none">
      <line x1="220" y1="120" x2="220" y2="180" strokeDasharray="4 3" />
      <line x1="216" y1="120" x2="224" y2="120" />
      <line x1="216" y1="180" x2="224" y2="180" />
    </g>

    <text x="104" y="12" {...label} textAnchor="middle">Tíbia distal</text>
    <text x="196" y="80" {...label} textAnchor="middle" fill="var(--teal)">placa fibular</text>
    <text x="228" y="154" {...label} textAnchor="start" fill="var(--amber)">comprimento</text>
    <text x="120" y="292" {...label} textAnchor="middle" fontFamily="var(--font-mono, monospace)">
      fíbula = régua da coluna lateral (comprimento e rotação)
    </text>
  </svg>
);

/* ---------------------------------------------------------------------------
   8) Passo — reconstrução do plafond e ORIF definitiva: redução articular
   anatômica, enxerto do defeito metafisário e placa de sustentação medial /
   anterolateral (estágio 2, quando a pele enrugada permite).
--------------------------------------------------------------------------- */
export const StepOrif: FC<FigureProps> = ({ className, title, variant }) => {
  const medial = (variant ?? "medial") === "medial";
  return (
    <svg
      viewBox="0 0 240 320"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>
        {title ??
          (medial
            ? "Passo — ORIF definitiva com placa de sustentação medial e enxerto metafisário"
            : "Passo — ORIF definitiva com placa anterolateral")}
      </title>

      {/* Tíbia distal (AP) */}
      <path {...boneStyle} d="M92 16 C 88 60, 88 118, 94 158 L 146 158 C 152 118, 152 60, 148 16 Z" />
      <path {...boneStyle} d="M94 154 C 84 186, 80 212, 80 234 L 160 234 C 160 212, 154 186, 146 154 Z" />
      <path
        {...boneStyle}
        fill="var(--surface-2, var(--surface))"
        d="M80 234 C 90 252, 112 260, 120 260 C 130 260, 152 252, 160 234 Z"
      />
      {/* superfície articular reduzida (anatômica) */}
      <path d="M86 240 C 104 254, 138 254, 154 240" fill="none" stroke="var(--line-strong)" strokeWidth="1.2" />

      {/* Enxerto no defeito metafisário */}
      <rect x="98" y="176" width="46" height="30" rx="6" fill="var(--amber)" opacity="0.14" />
      <text x="121" y="196" {...label} textAnchor="middle" fill="var(--amber)" fontSize="9">enxerto</text>

      {/* Parafusos de compressão articular (subcondrais, "raft") */}
      <g stroke="var(--teal)" strokeWidth="2.2" strokeLinecap="round">
        <line x1="90" y1="248" x2="150" y2="248" />
        <line x1="92" y1="238" x2="150" y2="238" />
      </g>

      {medial ? (
        <>
          {/* Placa de sustentação medial */}
          <rect x="66" y="70" width="12" height="170" rx="6" fill="var(--teal-tint, var(--surface-2, var(--surface)))" stroke="var(--teal)" strokeWidth="1.8" />
          <g stroke="var(--teal)" strokeWidth="2.2" strokeLinecap="round">
            <line x1="78" y1="88" x2="118" y2="88" />
            <line x1="78" y1="112" x2="120" y2="112" />
            <line x1="78" y1="220" x2="112" y2="228" />
          </g>
          <text x="66" y="62" {...label} textAnchor="middle" fill="var(--teal)">placa medial</text>
        </>
      ) : (
        <>
          {/* Placa anterolateral */}
          <rect x="162" y="70" width="12" height="160" rx="6" fill="var(--teal-tint, var(--surface-2, var(--surface)))" stroke="var(--teal)" strokeWidth="1.8" />
          <g stroke="var(--teal)" strokeWidth="2.2" strokeLinecap="round">
            <line x1="162" y1="88" x2="122" y2="88" />
            <line x1="162" y1="112" x2="120" y2="112" />
            <line x1="162" y1="214" x2="128" y2="224" />
          </g>
          <text x="168" y="62" {...label} textAnchor="middle" fill="var(--teal)">placa anterolat.</text>
        </>
      )}

      <text x="120" y="12" {...label} textAnchor="middle">Tíbia distal (AP)</text>
      <text x="120" y="300" {...label} textAnchor="middle" fontFamily="var(--font-mono, monospace)">
        estágio 2 — reduzir plafond · suportar coluna · placa de sustentação
      </text>
      <text x="120" y="314" {...label} textAnchor="middle">só quando a pele enrugada permite</text>
    </svg>
  );
};

/**
 * Registro de figuras — chave = id prefixado por "fratura-pilao-tibial:".
 * O conteúdo referencia exatamente estes ids (e variants).
 */
export const figures: Record<string, FC<FigureProps>> = {
  "fratura-pilao-tibial:anatomia": Anatomia,
  "fratura-pilao-tibial:colunas": Colunas,
  "fratura-pilao-tibial:ao-ota": AoOta,
  "fratura-pilao-tibial:ruedi": Ruedi,
  "fratura-pilao-tibial:span": Span,
  "fratura-pilao-tibial:via": Via,
  "fratura-pilao-tibial:step-fibula": StepFibula,
  "fratura-pilao-tibial:step-orif": StepOrif,
};
