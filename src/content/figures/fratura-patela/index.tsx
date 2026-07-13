import type { FC } from "react";
import type { FigureProps } from "../../../types/topic";

/* ============================================================================
   Fratura da patela — figuras esquemáticas, line-art 2 tons, SEM copyright.
   Ossos: stroke var(--ink-soft), fill var(--surface). Partes moles / tendão /
   implante: var(--teal). Traço de fratura: var(--cortical) + className "fx-line".
   Medidas / ângulos / vetores de força: var(--amber). Rótulos: var(--muted).
   Todos os ids são prefixados por "fratura-patela:".
   ========================================================================== */

const boneStyle = {
  fill: "var(--surface)",
  stroke: "var(--ink-soft)",
  strokeWidth: 1.6,
  strokeLinejoin: "round" as const,
};

const bonePosterior = {
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

const tendon = {
  fill: "var(--teal-tint, var(--surface-2, var(--surface)))",
  stroke: "var(--teal)",
  strokeWidth: 1.8,
  strokeLinejoin: "round" as const,
};

/* ---------------------------------------------------------------------------
   1. Anatomia — mecanismo extensor (quadríceps → patela → tendão patelar).
   -------------------------------------------------------------------------- */
export const Anatomia: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 240 340"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Anatomia da patela e do mecanismo extensor (vista frontal)"}</title>

    {/* Côndilos femorais ao fundo (2º plano) */}
    <path
      {...bonePosterior}
      d="M78 128 C 70 118, 70 100, 84 96 C 96 92, 110 92, 120 96 C 130 92, 144 92, 156 96 C 170 100, 170 118, 162 128 C 158 168, 150 196, 120 200 C 90 196, 82 168, 78 128 Z"
    />
    <line x1="120" y1="98" x2="120" y2="196" stroke="var(--line-strong)" strokeWidth="0.8" strokeDasharray="3 3" />

    {/* Ventre do quadríceps */}
    <path
      {...tendon}
      d="M92 22 C 120 12, 148 22, 150 60 C 150 82, 140 96, 130 104 L 110 104 C 100 96, 90 82, 90 60 C 90 44, 90 32, 92 22 Z"
    />
    {/* Tendão do quadríceps (converge para o polo superior) */}
    <path {...tendon} d="M104 100 C 106 116, 108 122, 112 128 L 128 128 C 132 122, 134 116, 136 100 Z" />

    {/* Patela (osso, sesamoide triangular invertido) */}
    <path
      {...boneStyle}
      d="M100 130 C 108 126, 132 126, 140 130 C 148 134, 150 152, 146 172 C 142 192, 130 206, 120 210 C 110 206, 98 192, 94 172 C 90 152, 92 134, 100 130 Z"
    />
    <text x="120" y="170" textAnchor="middle" {...label} fill="var(--ink)">Patela</text>

    {/* Retináculos (medial e lateral) */}
    <g stroke="var(--teal)" strokeWidth="1.6" fill="none" strokeLinecap="round">
      <path d="M96 150 C 72 152, 64 168, 66 188" />
      <path d="M144 150 C 168 152, 176 168, 174 188" />
    </g>
    <text x="52" y="176" {...label} textAnchor="start" fill="var(--teal)">retináculo</text>

    {/* Tendão patelar (ligamento patelar) → tuberosidade */}
    <path {...tendon} d="M108 208 C 108 236, 110 262, 112 282 L 130 282 C 132 262, 134 236, 132 208 Z" />

    {/* Tíbia + tuberosidade tibial */}
    <path
      {...boneStyle}
      d="M96 286 C 96 300, 98 320, 104 336 L 138 336 C 144 320, 146 300, 146 286 C 146 282, 140 280, 132 282 C 128 292, 114 292, 110 282 C 102 280, 96 282, 96 286 Z"
    />
    <path {...boneStyle} fill="var(--surface-2, var(--surface))" d="M110 284 C 112 292, 130 292, 132 284 C 132 296, 128 300, 120 300 C 112 300, 110 296, 110 284 Z" />
    <text x="176" y="288" {...label} textAnchor="start">tuberosidade</text>

    {/* Rótulos do mecanismo */}
    <text x="120" y="16" {...label} textAnchor="middle" fill="var(--teal)">Quadríceps</text>
    <text x="164" y="118" {...label} textAnchor="start" fill="var(--teal)">tendão quadricipital</text>
    <text x="150" y="250" {...label} textAnchor="start" fill="var(--teal)">tendão patelar</text>
  </svg>
);

/* ---------------------------------------------------------------------------
   2. Integridade do mecanismo extensor — SLR / extensor lag.
      variant "intact" (extensão ativa) | "deficit" (lag por descontinuidade).
   -------------------------------------------------------------------------- */
export const MecanismoExtensor: FC<FigureProps> = ({ className, title, variant = "intact" }) => {
  const deficit = variant === "deficit";
  const accent = deficit ? "var(--cortical)" : "var(--teal)";
  // ângulo do segmento tibial (perna): íntegro sobe; déficit cai (lag)
  const shank = deficit
    ? { x2: 250, y2: 150, tag: "extensor lag" }
    : { x2: 250, y2: 96, tag: "extensão ativa completa" };

  return (
    <svg
      viewBox="0 0 300 220"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>
        {title ??
          (deficit
            ? "Mecanismo extensor incompetente — extensor lag (elevação incompleta)"
            : "Mecanismo extensor íntegro — extensão ativa completa")}
      </title>

      {/* Coxa fixa (fêmur), horizontal à esquerda */}
      <path {...boneStyle} d="M20 92 C 60 88, 96 88, 118 96 L 118 120 C 96 112, 60 112, 20 116 Z" />
      <text x="60" y="82" {...label} textAnchor="middle">coxa</text>

      {/* Quadríceps (teal) sobre a coxa */}
      <path {...tendon} d="M28 88 C 60 74, 100 74, 120 92 C 100 96, 60 96, 28 92 Z" />

      {/* Patela no joelho (pivô) */}
      <path {...boneStyle} d="M118 90 C 130 86, 140 92, 140 104 C 140 116, 130 122, 118 118 Z" />

      {/* Segmento tibial (perna) — posição depende da variante */}
      <g>
        <path
          {...boneStyle}
          d={`M132 98 L ${shank.x2} ${shank.y2 - 8} L ${shank.x2 + 6} ${shank.y2 + 8} L 138 116 Z`}
        />
        {/* tendão patelar entre patela e tíbia */}
        <line
          x1="130"
          y1="112"
          x2={deficit ? 152 : 150}
          y2={deficit ? 120 : 108}
          stroke={accent}
          strokeWidth="3"
          strokeLinecap="round"
        />
      </g>

      {/* Descontinuidade / gap quando déficit */}
      {deficit && (
        <g className="fx-line">
          <path d="M126 100 L 138 116" stroke="var(--cortical)" strokeWidth="3" strokeLinecap="round" />
          <circle cx="132" cy="108" r="3.2" fill="var(--surface)" stroke="var(--cortical)" strokeWidth="1.4" />
        </g>
      )}

      {/* Linha de referência da extensão completa + ângulo de lag */}
      <line x1="132" y1="104" x2="262" y2="104" stroke="var(--amber)" strokeWidth="1" strokeDasharray="4 3" />
      {deficit && (
        <>
          <path d="M180 104 A 50 50 0 0 1 172 122" fill="none" stroke="var(--amber)" strokeWidth="1.4" />
          <text x="188" y="122" {...label} textAnchor="start" fill="var(--amber)" fontFamily="var(--font-mono, monospace)">
            lag
          </text>
        </>
      )}

      {/* Seta de esforço ativo do quadríceps */}
      <g stroke={accent} strokeWidth="2.2" fill="none" strokeLinecap="round">
        <path d="M70 66 L 110 78" markerEnd="url(#me-arrow)" />
      </g>
      <defs>
        <marker id="me-arrow" markerWidth="9" markerHeight="9" refX="4" refY="4" orient="auto">
          <path d="M0 0 L8 4 L0 8 Z" fill={accent} />
        </marker>
      </defs>

      <text x="150" y="204" textAnchor="middle" {...mono}>
        {deficit ? "SLR incompleto (+)" : "SLR completo (–)"}
      </text>
      <text x="150" y="188" textAnchor="middle" {...label} fill={accent}>
        {shank.tag}
      </text>
    </svg>
  );
};

/* ---------------------------------------------------------------------------
   3. Padrões morfológicos — transversa / cominutiva / polo inferior / vertical.
   -------------------------------------------------------------------------- */
export const PadroesFratura: FC<FigureProps> = ({ className, title, variant = "transversa" }) => {
  const v = variant;
  const cfg: Record<string, { code: string; label: string }> = {
    transversa: { code: "Transversa", label: "Traço equatorial — falha por tração" },
    cominutiva: { code: "Cominutiva", label: "Estelada — trauma direto de alta energia" },
    "polo-inferior": { code: "Polo inferior", label: "Fratura polar distal (extra-articular)" },
    vertical: { code: "Vertical", label: "Traço sagital — mecanismo extensor íntegro" },
  };
  const c = cfg[v] ?? cfg.transversa;

  return (
    <svg
      viewBox="0 0 220 280"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `Padrão de fratura da patela — ${c.code}`}</title>

      {/* Contorno da patela (vista frontal, ápice inferior) */}
      <path
        {...boneStyle}
        d="M66 40 C 82 32, 138 32, 154 40 C 168 48, 170 92, 162 128 C 154 168, 128 200, 110 210 C 92 200, 66 168, 58 128 C 50 92, 52 48, 66 40 Z"
      />

      {/* Traços de fratura por variante */}
      <g className="fx-line" stroke="var(--cortical)" strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {v === "transversa" && <path d="M58 118 C 90 128, 130 128, 162 116" />}
        {v === "vertical" && <path d="M110 36 C 106 96, 108 156, 110 206" />}
        {v === "polo-inferior" && <path d="M74 168 C 96 180, 126 180, 148 166" />}
        {v === "cominutiva" && (
          <>
            <path d="M60 112 C 92 122, 130 122, 160 110" />
            <path d="M110 40 L 104 118" />
            <path d="M110 118 L 118 208" />
            <path d="M84 60 L 128 150" />
            <path d="M138 66 L 92 156" />
          </>
        )}
      </g>

      {/* Setas do vetor de tração (mecanismo extensor) para transversa/cominutiva */}
      {(v === "transversa" || v === "cominutiva") && (
        <g stroke="var(--amber)" strokeWidth="1.6" fill="none" strokeLinecap="round">
          <path d="M110 26 L 110 8" markerEnd="url(#pf-up)" />
          <path d="M110 216 L 110 236" markerEnd="url(#pf-dn)" />
        </g>
      )}
      <defs>
        <marker id="pf-up" markerWidth="9" markerHeight="9" refX="4" refY="4" orient="auto">
          <path d="M0 8 L4 0 L8 8 Z" fill="var(--amber)" />
        </marker>
        <marker id="pf-dn" markerWidth="9" markerHeight="9" refX="4" refY="4" orient="auto">
          <path d="M0 0 L4 8 L8 0 Z" fill="var(--amber)" />
        </marker>
      </defs>

      <text x="110" y="262" textAnchor="middle" {...mono}>{c.code}</text>
      <text x="110" y="276" textAnchor="middle" {...label}>{c.label}</text>
    </svg>
  );
};

/* ---------------------------------------------------------------------------
   4. AO/OTA 34 — A extra-articular | B parcial articular | C completa articular.
   -------------------------------------------------------------------------- */
export const AoOta: FC<FigureProps> = ({ className, title, variant = "C" }) => {
  const v = (variant ?? "C").toUpperCase();
  const cfg: Record<string, { label: string; note: string }> = {
    A: { label: "34-A · Extra-articular", note: "Avulsão / polar, poupa a superfície articular" },
    B: { label: "34-B · Parcial articular", note: "Um pilar articular intacto (ex.: vertical)" },
    C: { label: "34-C · Articular completa", note: "Ambos os pilares — transversa/cominutiva" },
  };
  const c = cfg[v] ?? cfg.C;

  return (
    <svg
      viewBox="0 0 220 280"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `AO/OTA 34 — ${c.label}`}</title>

      {/* Patela + faixa articular (posterior, destacada) */}
      <path
        {...boneStyle}
        d="M66 40 C 82 32, 138 32, 154 40 C 168 48, 170 92, 162 128 C 154 168, 128 200, 110 210 C 92 200, 66 168, 58 128 C 50 92, 52 48, 66 40 Z"
      />
      {/* superfície articular (crista central) */}
      <path
        d="M110 44 C 106 96, 108 150, 110 200"
        fill="none"
        stroke="var(--teal)"
        strokeWidth="1.4"
        strokeDasharray="4 3"
      />
      <text x="118" y="52" {...label} textAnchor="start" fill="var(--teal)">art.</text>

      {/* Traços conforme o grupo */}
      <g className="fx-line" stroke="var(--cortical)" strokeWidth="2.6" fill="none" strokeLinecap="round">
        {v === "A" && <path d="M74 176 C 96 188, 126 188, 148 174" />}
        {v === "B" && <path d="M140 40 C 150 96, 148 156, 136 200" />}
        {v === "C" && <path d="M58 120 C 90 130, 130 130, 162 118" />}
      </g>

      {/* Sombreamento do envolvimento articular */}
      {v !== "A" && (
        <path
          d={
            v === "C"
              ? "M58 120 C 90 130, 130 130, 162 118 C 154 168, 128 200, 110 210 C 92 200, 66 168, 58 120 Z"
              : "M140 40 C 150 96, 148 156, 136 200 C 128 204, 120 206, 110 210 C 128 200, 154 168, 162 128 C 168 92, 166 48, 152 40 Z"
          }
          fill="var(--amber)"
          opacity="0.14"
        />
      )}

      <text x="110" y="262" textAnchor="middle" {...mono}>{v === "A" ? "34-A" : v === "B" ? "34-B" : "34-C"}</text>
      <text x="110" y="276" textAnchor="middle" {...label}>{c.note}</text>
    </svg>
  );
};

/* ---------------------------------------------------------------------------
   5. Acesso anterior longitudinal (via de eleição).
   -------------------------------------------------------------------------- */
export const AcessoAnterior: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 220 300"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Acesso anterior longitudinal mediano sobre a patela"}</title>

    {/* Contorno do joelho (partes moles) */}
    <path
      fill="var(--surface-2, var(--surface))"
      stroke="var(--ink-soft)"
      strokeWidth="1.2"
      d="M56 20 C 44 90, 44 210, 60 286 L 160 286 C 176 210, 176 90, 164 20 Z"
    />

    {/* Patela + tendões subjacentes (referência) */}
    <path {...boneStyle} d="M92 96 C 100 92, 120 92, 128 96 C 136 100, 138 128, 132 152 C 126 176, 116 190, 110 194 C 104 190, 94 176, 88 152 C 82 128, 84 100, 92 96 Z" />
    <path {...tendon} d="M100 60 C 102 76, 104 86, 108 96 L 112 96 C 116 86, 118 76, 120 60 Z" />
    <path {...tendon} d="M104 194 C 104 222, 106 250, 108 270 L 116 270 C 118 250, 120 222, 120 194 Z" />

    {/* Incisão longitudinal mediana (linha) */}
    <line x1="110" y1="52" x2="110" y2="278" stroke="var(--cortical)" strokeWidth="2.2" strokeDasharray="7 5" strokeLinecap="round" />
    <text x="120" y="46" {...label} textAnchor="start" fill="var(--cortical)">incisão mediana</text>

    {/* Ramo infrapatelar do n. safeno (em risco, lateral→medial) */}
    <g stroke="var(--teal)" strokeWidth="1.4" fill="none" strokeLinecap="round">
      <path d="M164 214 C 140 224, 118 230, 96 232" strokeDasharray="2 3" />
    </g>
    <text x="150" y="250" {...label} textAnchor="middle" fill="var(--teal)">ramo infrapatelar</text>
    <text x="150" y="264" {...label} textAnchor="middle" fill="var(--teal)">do n. safeno</text>

    <text x="110" y="16" {...label} textAnchor="middle">joelho — vista frontal</text>
  </svg>
);

/* ---------------------------------------------------------------------------
   6. Redução com pinça (towel clip / pinça de redução) e checagem articular.
   -------------------------------------------------------------------------- */
export const StepReducao: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 260 260"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Redução da fratura transversa com pinça e checagem da congruência articular"}</title>

    {/* Patela reduzida (dois fragmentos aproximados) */}
    <path {...boneStyle} d="M74 44 C 90 36, 146 36, 162 44 C 174 52, 176 92, 170 118 L 66 118 C 60 92, 62 52, 74 44 Z" />
    <path {...boneStyle} d="M66 122 L 170 122 C 164 168, 138 200, 118 210 C 98 200, 72 168, 66 122 Z" />
    {/* traço reduzido (fenda mínima) */}
    <line x1="66" y1="120" x2="170" y2="120" stroke="var(--cortical)" strokeWidth="1.6" strokeDasharray="3 3" className="fx-line" />

    {/* superfície articular (posterior) — checar degrau */}
    <path d="M70 118 C 100 112, 136 112, 166 118" fill="none" stroke="var(--teal)" strokeWidth="1.6" />
    <text x="176" y="112" {...label} textAnchor="start" fill="var(--teal)">checar degrau articular</text>

    {/* Pinça de redução pontiaguda segurando os polos */}
    <g stroke="var(--ink-soft)" strokeWidth="2.2" fill="none" strokeLinecap="round">
      <path d="M118 20 L 100 60" />
      <path d="M118 20 L 136 60" />
      <circle cx="118" cy="20" r="4" fill="var(--surface)" />
      {/* pontas nos fragmentos */}
      <path d="M100 60 L 96 78" />
      <path d="M136 60 L 140 78" />
    </g>
    {/* setas de compressão */}
    <g stroke="var(--amber)" strokeWidth="1.6" fill="none" strokeLinecap="round">
      <path d="M84 92 L 100 96" markerEnd="url(#rd-a)" />
      <path d="M152 92 L 136 96" markerEnd="url(#rd-b)" />
    </g>
    <defs>
      <marker id="rd-a" markerWidth="9" markerHeight="9" refX="4" refY="4" orient="auto">
        <path d="M0 0 L8 4 L0 8 Z" fill="var(--amber)" />
      </marker>
      <marker id="rd-b" markerWidth="9" markerHeight="9" refX="4" refY="4" orient="auto">
        <path d="M8 0 L0 4 L8 8 Z" fill="var(--amber)" />
      </marker>
    </defs>

    <text x="130" y="238" textAnchor="middle" {...mono}>Redução anatômica</text>
    <text x="130" y="252" textAnchor="middle" {...label}>Palpar/ver a superfície articular pela fenda</text>
  </svg>
);

/* ---------------------------------------------------------------------------
   7. Banda de tensão anterior — variant "k-wire" | "parafuso" (canulado).
      Mostra a conversão de tração anterior em compressão articular.
   -------------------------------------------------------------------------- */
export const BandaTensao: FC<FigureProps> = ({ className, title, variant = "k-wire" }) => {
  const screws = variant === "parafuso";
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
          (screws
            ? "Banda de tensão com parafusos canulados — fio em oito pela canulação"
            : "Banda de tensão com fios de Kirschner e cerclagem em oito")}
      </title>

      {/* Patela (perfil sagital: anterior à direita, articular à esquerda) */}
      <path
        {...boneStyle}
        d="M150 40 C 168 44, 180 64, 182 100 C 184 140, 180 190, 168 224 C 162 240, 152 250, 144 252 C 130 244, 122 216, 120 172 C 118 128, 122 80, 132 54 C 137 44, 143 40, 150 40 Z"
      />
      {/* superfície articular (posterior, esquerda) */}
      <path d="M120 172 C 118 128, 122 80, 132 54" fill="none" stroke="var(--teal)" strokeWidth="1.6" />
      <text x="96" y="150" {...label} textAnchor="end" fill="var(--teal)">art.</text>

      {/* Traço transverso */}
      <line x1="122" y1="148" x2="182" y2="150" stroke="var(--cortical)" strokeWidth="1.6" strokeDasharray="3 3" className="fx-line" />

      {/* Implante longitudinal: 2 fios K ou 2 parafusos canulados */}
      <g stroke="var(--teal)" strokeWidth={screws ? 5 : 2.6} strokeLinecap="round">
        <line x1="146" y1="52" x2="150" y2="244" />
        <line x1="166" y1="60" x2="170" y2="232" />
      </g>
      {screws && (
        <g stroke="var(--surface)" strokeWidth="1" opacity="0.9">
          {/* traços de rosca esquemáticos */}
          {[70, 90, 110, 190, 210].map((y) => (
            <line key={y} x1="143" y1={y} x2="150" y2={y + 3} />
          ))}
        </g>
      )}

      {/* Cerclagem anterior em oito (figure-of-eight), à frente do osso */}
      <path
        d={
          screws
            ? "M148 66 C 210 78, 214 150, 172 168 C 210 186, 208 232, 150 236 C 176 210, 176 196, 150 190 C 176 172, 176 100, 150 96 C 176 90, 176 78, 148 66 Z"
            : "M146 60 C 214 74, 218 150, 172 170 C 216 190, 212 240, 150 244 C 180 214, 180 198, 152 192 C 180 172, 180 96, 150 92 C 180 86, 180 74, 146 60 Z"
        }
        fill="none"
        stroke="var(--teal)"
        strokeWidth="2"
      />
      <text x="214" y="150" {...label} textAnchor="start" fill="var(--teal)">
        {screws ? "fio em 8 pela canulação" : "cerclagem em oito"}
      </text>

      {/* Vetores: tração anterior → compressão articular na flexão */}
      <g stroke="var(--amber)" strokeWidth="1.6" fill="none" strokeLinecap="round">
        <path d="M150 20 L 150 4" markerEnd="url(#bt-up)" />
        <path d="M150 264 L 150 280" markerEnd="url(#bt-dn)" />
        {/* seta curva de compressão no lado articular */}
        <path d="M112 110 C 100 140, 100 170, 112 196" markerEnd="url(#bt-arr)" />
      </g>
      <defs>
        <marker id="bt-up" markerWidth="9" markerHeight="9" refX="4" refY="4" orient="auto">
          <path d="M0 8 L4 0 L8 8 Z" fill="var(--amber)" />
        </marker>
        <marker id="bt-dn" markerWidth="9" markerHeight="9" refX="4" refY="4" orient="auto">
          <path d="M0 0 L4 8 L8 0 Z" fill="var(--amber)" />
        </marker>
        <marker id="bt-arr" markerWidth="9" markerHeight="9" refX="4" refY="4" orient="auto">
          <path d="M0 0 L8 4 L0 8 Z" fill="var(--amber)" />
        </marker>
      </defs>
      <text x="86" y="98" {...label} textAnchor="middle" fill="var(--amber)" fontFamily="var(--font-mono, monospace)">
        compressão
      </text>
      <text x="150" y="16" {...label} textAnchor="middle" fill="var(--amber)">tração do extensor</text>

      <text x="150" y="296" textAnchor="middle" {...mono}>
        {screws ? "Parafusos canulados + banda" : "Fios K + banda de tensão"}
      </text>
    </svg>
  );
};

/* ---------------------------------------------------------------------------
   8. Patelectomia parcial — excisão do polo inferior cominutivo + reinserção
      do tendão patelar por túneis transósseos / âncoras.
   -------------------------------------------------------------------------- */
export const PatelectomiaParcial: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 240 300"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Patelectomia parcial do polo inferior e reinserção do tendão patelar"}</title>

    {/* Fragmento patelar proximal preservado */}
    <path
      {...boneStyle}
      d="M78 40 C 94 32, 146 32, 162 40 C 174 48, 176 96, 168 132 L 72 132 C 64 96, 66 48, 78 40 Z"
    />
    {/* linha de osteotomia / margem distal de ressecção */}
    <line x1="72" y1="134" x2="168" y2="134" stroke="var(--cortical)" strokeWidth="1.8" strokeDasharray="4 3" className="fx-line" />
    <text x="176" y="120" {...label} textAnchor="start">fragmento proximal</text>

    {/* Polo inferior cominutivo (ressecado) — fantasma à direita */}
    <g opacity="0.5">
      <path
        d="M92 150 C 110 158, 130 158, 148 150 C 150 178, 132 202, 120 210 C 108 202, 90 178, 92 150 Z"
        fill="none"
        stroke="var(--cortical)"
        strokeWidth="1.4"
        strokeDasharray="3 3"
      />
      {/* fragmentos soltos */}
      <path d="M108 168 L 118 176 L 112 186 Z" fill="none" stroke="var(--cortical)" strokeWidth="1.2" />
      <path d="M124 172 L 134 180 L 126 190 Z" fill="none" stroke="var(--cortical)" strokeWidth="1.2" />
    </g>
    <text x="196" y="180" {...label} textAnchor="middle" fill="var(--cortical)">polo</text>
    <text x="196" y="194" {...label} textAnchor="middle" fill="var(--cortical)">excisado</text>

    {/* Túneis transósseos verticais no fragmento proximal */}
    <g stroke="var(--ink-soft)" strokeWidth="1.4" fill="none" strokeDasharray="3 2">
      <line x1="104" y1="60" x2="106" y2="132" />
      <line x1="136" y1="60" x2="138" y2="132" />
    </g>
    <text x="150" y="70" {...label} textAnchor="start">túneis transósseos</text>

    {/* Tendão patelar reinserido rente ao polo distal (evitar patela baixa) */}
    <path
      {...tendon}
      d="M96 136 C 96 176, 100 226, 104 258 L 132 258 C 136 226, 140 176, 140 136 Z"
    />
    {/* suturas de reinserção (Krackow) subindo pelos túneis */}
    <g stroke="var(--teal)" strokeWidth="1.6" fill="none" strokeLinecap="round">
      <path d="M104 150 L 105 64 M104 150 L 136 64" />
      <path d="M132 150 L 137 64 M132 150 L 106 64" />
    </g>
    <text x="150" y="212" {...label} textAnchor="start" fill="var(--teal)">tendão reinserido</text>

    {/* Tuberosidade tibial abaixo */}
    <path {...boneStyle} fill="var(--surface-2, var(--surface))" d="M92 260 C 92 274, 96 290, 104 296 L 136 296 C 142 290, 144 274, 144 260 C 130 266, 108 266, 92 260 Z" />

    <text x="120" y="16" {...label} textAnchor="middle" {...mono}>Reinserção rente à margem — evitar patela baixa</text>
  </svg>
);

/* -------------------------------------------------------------------------- */
export const figures: Record<string, FC<FigureProps>> = {
  "fratura-patela:anatomia": Anatomia,
  "fratura-patela:mecanismo-extensor": MecanismoExtensor,
  "fratura-patela:padroes": PadroesFratura,
  "fratura-patela:ao-ota": AoOta,
  "fratura-patela:acesso-anterior": AcessoAnterior,
  "fratura-patela:step-reducao": StepReducao,
  "fratura-patela:banda-tensao": BandaTensao,
  "fratura-patela:patelectomia-parcial": PatelectomiaParcial,
};
