import type { FC } from "react";
import type { FigureProps } from "../../../types/topic";

/* ============================================================================
   Figuras — Fratura do planalto tibial
   SVG esquemático, line-art 2 tons, sem copyright. Cores só via CSS vars.
   Prefixo de id obrigatório: "fratura-planalto-tibial:".
   ========================================================================== */

const LABEL = {
  fontSize: 11,
  fill: "var(--muted)",
  fontFamily: "var(--font-body, sans-serif)",
} as const;

const MONO = {
  fontSize: 12,
  fill: "var(--muted)",
  fontFamily: "var(--font-mono, monospace)",
} as const;

/* ---------------------------------------------------------------------------
   1) Anatomia — tíbia proximal em AP: platô lateral (convexo) e medial
   (côncavo), eminência intercondilar, tubérculo de Gerdy, colunas.
   -------------------------------------------------------------------------- */
const Anatomia: FC<FigureProps> = ({ className, title, variant }) => {
  const showColumns = variant === "colunas";
  return (
    <svg
      viewBox="0 0 360 300"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? "Anatomia da tíbia proximal — platôs lateral e medial"}</title>

      {/* côndilos femorais (2º plano, referência) */}
      <g stroke="var(--ink-soft)" fill="var(--surface-2, var(--surface))" strokeWidth={1.4} opacity={0.55}>
        <ellipse cx="128" cy="70" rx="42" ry="34" />
        <ellipse cx="232" cy="70" rx="42" ry="34" />
      </g>

      {/* tíbia proximal */}
      <g stroke="var(--ink-soft)" fill="var(--surface)" strokeWidth={1.8}>
        {/* superfície articular: lateral convexa + medial côncava */}
        <path d="M70 128 q60 -22 106 -4 q46 -20 106 4 l-4 26 q-52 20 -102 6 q-50 16 -102 -6 Z" />
        {/* eminência intercondilar (espinhas tibiais) */}
        <path d="M168 118 l8 -20 l8 20" fill="none" />
        {/* metáfise / diáfise */}
        <path d="M74 152 q0 60 22 118 l148 0 q22 -58 22 -118" />
        {/* tuberosidade anterior da tíbia */}
        <path d="M158 232 q18 8 40 0 l-4 26 q-16 6 -32 0 Z" fill="var(--surface-2, var(--surface))" />
      </g>

      {/* tubérculo de Gerdy (inserção do trato iliotibial) */}
      <circle cx="86" cy="164" r="5" stroke="var(--teal)" fill="none" strokeWidth={1.6} />

      {showColumns && (
        <g stroke="var(--amber)" strokeWidth={1.3} strokeDasharray="5 4" fill="none" opacity={0.85}>
          <line x1="180" y1="120" x2="180" y2="270" />
          <line x1="120" y1="150" x2="150" y2="250" />
          <line x1="240" y1="150" x2="210" y2="250" />
        </g>
      )}

      <g style={LABEL}>
        <text x="94" y="112" textAnchor="middle">platô lateral</text>
        <text x="266" y="112" textAnchor="middle">platô medial</text>
        <text x="180" y="92" textAnchor="middle">eminência</text>
        <text x="52" y="180">Gerdy</text>
        <text x="180" y="286" textAnchor="middle">tuberosidade anterior</text>
      </g>
    </svg>
  );
};

/* ---------------------------------------------------------------------------
   2) Classificação de Schatzker (I–VI) — AP da tíbia proximal, o traço muda
   conforme variant. activeStep pode destacar coluna.
   -------------------------------------------------------------------------- */
const Schatzker: FC<FigureProps> = ({ className, title, variant }) => {
  const v = (variant ?? "I").toUpperCase();

  // desenho do traço/afundamento por tipo
  const pattern = () => {
    switch (v) {
      case "I": // cisalhamento lateral puro, sem afundamento
        return (
          <g>
            <path className="fx-line" d="M150 96 L120 210" fill="none" stroke="var(--cortical)" strokeWidth={2.4} />
            <path d="M120 96 q18 -8 34 0 l-10 14 q-14 -4 -24 0 Z" fill="var(--surface-2, var(--surface))" stroke="var(--ink-soft)" strokeWidth={1.2} opacity={0.6} />
          </g>
        );
      case "II": // cisalhamento + afundamento lateral
        return (
          <g>
            <path className="fx-line" d="M150 96 L124 200" fill="none" stroke="var(--cortical)" strokeWidth={2.4} />
            <path className="fx-line" d="M96 104 q22 10 46 -2" fill="none" stroke="var(--cortical)" strokeWidth={2} />
            <path d="M96 104 q22 10 46 -2 l0 16 q-24 10 -46 0 Z" fill="var(--surface-2, var(--surface))" stroke="var(--ink-soft)" strokeWidth={1} opacity={0.7} />
          </g>
        );
      case "III": // afundamento central puro (sem cisalhamento)
        return (
          <path className="fx-line" d="M104 100 q20 24 44 0" fill="var(--surface-2, var(--surface))" stroke="var(--cortical)" strokeWidth={2.2} />
        );
      case "IV": // platô medial (fratura/luxação)
        return (
          <g>
            <path className="fx-line" d="M210 96 L246 206" fill="none" stroke="var(--cortical)" strokeWidth={2.4} />
            <path d="M214 96 q18 -6 30 2 l-4 14 q-14 -6 -26 -2 Z" fill="var(--surface-2, var(--surface))" stroke="var(--ink-soft)" strokeWidth={1.1} opacity={0.6} />
          </g>
        );
      case "V": // bicondilar (Y invertido), metáfise íntegra
        return (
          <g stroke="var(--cortical)" strokeWidth={2.4} fill="none" className="fx-line">
            <path d="M150 96 L124 196" />
            <path d="M212 96 L242 200" />
            <path d="M150 96 L182 118 L212 96" />
          </g>
        );
      case "VI": // bicondilar + dissociação metáfise-diáfise
        return (
          <g stroke="var(--cortical)" strokeWidth={2.4} fill="none" className="fx-line">
            <path d="M150 96 L134 176" />
            <path d="M212 96 L232 178" />
            <path d="M150 96 L182 116 L212 96" />
            <path d="M96 202 L268 202" strokeDasharray="0" />
          </g>
        );
      default:
        return null;
    }
  };

  return (
    <svg
      viewBox="0 0 360 300"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `Schatzker tipo ${v}`}</title>

      {/* contorno da tíbia proximal (comum a todos os tipos) */}
      <g stroke="var(--ink-soft)" fill="var(--surface)" strokeWidth={1.8}>
        <path d="M72 96 q54 -18 108 -2 q54 -16 108 2 l-4 22 q-52 18 -104 4 q-52 14 -104 -4 Z" />
        <path d="M76 116 q2 68 24 132 l160 0 q22 -64 24 -132" fill="var(--surface)" />
        <path d="M162 232 q18 8 40 0 l-4 26 q-16 6 -32 0 Z" fill="var(--surface-2, var(--surface))" />
      </g>

      {pattern()}

      <text x="180" y="286" textAnchor="middle" style={MONO}>{`Schatzker ${v}`}</text>
    </svg>
  );
};

/* ---------------------------------------------------------------------------
   3) Conceito das três colunas (Luo) — corte axial da tíbia proximal.
   variant destaca a coluna: "lateral" | "medial" | "posterior".
   -------------------------------------------------------------------------- */
const TresColunas: FC<FigureProps> = ({ className, title, variant }) => {
  const v = variant ?? "";
  const hl = (name: string) =>
    v === name ? "var(--teal)" : "var(--surface-2, var(--surface))";
  const hlOpacity = (name: string) => (v === name ? 0.35 : 0.0);

  return (
    <svg
      viewBox="0 0 340 300"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? "Conceito das três colunas — corte axial da tíbia proximal"}</title>

      {/* contorno axial da tíbia proximal (anterior em cima) */}
      <path
        d="M96 60 q74 -22 150 0 q30 40 24 96 q-10 60 -48 76 q-52 22 -104 0 q-38 -18 -46 -78 q-6 -54 24 -94 Z"
        stroke="var(--ink-soft)"
        fill="var(--surface)"
        strokeWidth={1.8}
      />

      {/* linhas divisórias das colunas (do centro/eminência) */}
      <g stroke="var(--ink-soft)" strokeWidth={1.3} strokeDasharray="5 4" fill="none">
        <line x1="170" y1="150" x2="170" y2="52" />
        <line x1="170" y1="150" x2="90" y2="214" />
        <line x1="170" y1="150" x2="250" y2="214" />
      </g>

      {/* realce da coluna ativa */}
      <g fill={hl("lateral")} opacity={hlOpacity("lateral")}>
        <path d="M170 150 L90 214 q-30 -22 -30 -78 L170 60 Z" />
      </g>
      <g fill={hl("medial")} opacity={hlOpacity("medial")}>
        <path d="M170 150 L250 214 q30 -22 30 -78 L170 60 Z" />
      </g>
      <g fill={hl("posterior")} opacity={hlOpacity("posterior")}>
        <path d="M170 150 L90 214 q80 34 160 0 Z" />
      </g>

      {/* eminência central */}
      <circle cx="170" cy="150" r="6" stroke="var(--ink-soft)" fill="var(--surface)" strokeWidth={1.4} />

      <g style={LABEL}>
        <text x="70" y="120" textAnchor="middle">coluna lateral</text>
        <text x="270" y="120" textAnchor="middle">coluna medial</text>
        <text x="170" y="240" textAnchor="middle">coluna posterior</text>
        <text x="170" y="44" textAnchor="middle">anterior</text>
      </g>
    </svg>
  );
};

/* ---------------------------------------------------------------------------
   4) Via anterolateral — incisão sobre Gerdy, elevação submeniscal.
   -------------------------------------------------------------------------- */
const AcessoAnterolateral: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 340 300"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Via de acesso anterolateral do platô tibial"}</title>

    <g stroke="var(--ink-soft)" fill="var(--surface)" strokeWidth={1.8}>
      <path d="M96 92 q64 -18 128 -2 l-4 22 q-60 16 -120 2 Z" />
      <path d="M100 112 q4 66 26 130 l120 0 q22 -60 26 -130" fill="var(--surface)" />
      <path d="M170 226 q16 8 36 0 l-4 26 q-14 6 -28 0 Z" fill="var(--surface-2, var(--surface))" />
    </g>

    {/* menisco lateral (partes moles) */}
    <path d="M104 108 q28 12 60 2" stroke="var(--teal)" fill="none" strokeWidth={2.2} />

    {/* incisão cutânea anterolateral (curva de Gerdy para distal) */}
    <path
      d="M132 74 q6 44 -12 92 q-14 40 -8 80"
      stroke="var(--cortical)"
      className="fx-line"
      fill="none"
      strokeWidth={2.4}
      strokeDasharray="2 5"
      strokeLinecap="round"
    />

    {/* artrotomia submeniscal (seta) */}
    <g stroke="var(--amber)" strokeWidth={1.6} fill="none">
      <path d="M150 132 l30 -2" />
      <path d="M174 126 l8 4 l-8 4" />
    </g>

    <g style={LABEL}>
      <text x="150" y="66" textAnchor="middle">incisão</text>
      <text x="196" y="120">menisco lat.</text>
      <text x="196" y="138">artrotomia submeniscal</text>
      <text x="60" y="180">Gerdy</text>
    </g>
    <circle cx="98" cy="150" r="4" stroke="var(--teal)" fill="none" strokeWidth={1.6} />
  </svg>
);

/* ---------------------------------------------------------------------------
   5) Via posteromedial (Lobenhoffer) — paciente prono/flutuante, fragmento
   posteromedial e placa antdeslizante.
   -------------------------------------------------------------------------- */
const AcessoPosteromedial: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 340 300"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Via de acesso posteromedial (Lobenhoffer) e placa antdeslizante"}</title>

    {/* corte axial: enfoque posteromedial */}
    <path
      d="M96 70 q74 -20 150 0 q30 38 24 92 q-10 58 -48 74 q-52 22 -104 0 q-38 -18 -46 -76 q-6 -52 24 -90 Z"
      stroke="var(--ink-soft)"
      fill="var(--surface)"
      strokeWidth={1.8}
    />

    {/* fragmento posteromedial destacado */}
    <path
      d="M100 176 q34 26 76 20 l-6 40 q-42 12 -84 -10 q-2 -30 14 -50 Z"
      stroke="var(--ink-soft)"
      fill="var(--surface-2, var(--surface))"
      strokeWidth={1.4}
    />
    <path className="fx-line" d="M104 172 q40 30 82 18" stroke="var(--cortical)" fill="none" strokeWidth={2.4} />

    {/* placa antdeslizante posteromedial (implante) */}
    <g stroke="var(--teal)" fill="none" strokeWidth={2.2}>
      <path d="M92 196 q-6 26 6 52" />
      <circle cx="93" cy="204" r="3" />
      <circle cx="92" cy="226" r="3" />
      <circle cx="98" cy="246" r="3" />
    </g>

    {/* incisão posteromedial */}
    <path
      d="M78 120 q-8 60 20 120"
      stroke="var(--cortical)"
      className="fx-line"
      fill="none"
      strokeWidth={2.2}
      strokeDasharray="2 5"
      strokeLinecap="round"
    />

    <g style={LABEL}>
      <text x="60" y="112" textAnchor="middle">incisão PM</text>
      <text x="150" y="250" textAnchor="middle">fragmento posteromedial</text>
      <text x="118" y="210">placa antideslizante</text>
      <text x="170" y="60" textAnchor="middle">anterior</text>
    </g>
  </svg>
);

/* ---------------------------------------------------------------------------
   6) Técnica — elevação do afundamento articular + enxerto subcondral.
   activeStep: 1 janela cortical, 2 elevação, 3 enxerto.
   -------------------------------------------------------------------------- */
const StepElevacao: FC<FigureProps> = ({ className, title, activeStep }) => {
  const step = activeStep ?? 3;
  return (
    <svg
      viewBox="0 0 360 300"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? "Elevação do afundamento articular e enxertia subcondral"}</title>

      {/* platô lateral em corte coronal */}
      <g stroke="var(--ink-soft)" fill="var(--surface)" strokeWidth={1.8}>
        <path d="M60 110 L300 110 L300 250 L60 250 Z" fill="var(--surface)" />
        {/* superfície articular com afundamento (se step<2, deprimido) */}
        {step < 2 ? (
          <path d="M60 110 L150 110 q40 34 80 0 L300 110" fill="none" stroke="var(--cortical)" strokeWidth={2.4} className="fx-line" />
        ) : (
          <path d="M60 110 L300 110" fill="none" stroke="var(--ink-soft)" strokeWidth={2} />
        )}
      </g>

      {/* 1: janela cortical metafisária */}
      {step >= 1 && (
        <rect x="86" y="188" width="34" height="24" rx="2" stroke="var(--cortical)" className="fx-line" fill="var(--surface-2, var(--surface))" strokeWidth={2} />
      )}

      {/* 2: impactor elevando o fragmento (seta amber) */}
      {step >= 2 && (
        <g stroke="var(--amber)" strokeWidth={2} fill="none">
          <line x1="103" y1="200" x2="180" y2="128" />
          <path d="M180 128 l-2 12 l11 -4" fill="var(--amber)" stroke="none" />
        </g>
      )}

      {/* 3: enxerto subcondral (blocos) */}
      {step >= 3 && (
        <g stroke="var(--teal)" fill="var(--surface-2, var(--surface))" strokeWidth={1.4}>
          <rect x="150" y="128" width="12" height="12" />
          <rect x="164" y="130" width="12" height="12" />
          <rect x="178" y="128" width="12" height="12" />
          <rect x="157" y="142" width="12" height="12" />
          <rect x="171" y="142" width="12" height="12" />
        </g>
      )}

      <g style={LABEL}>
        <text x="103" y="228" textAnchor="middle">janela cortical</text>
        <text x="180" y="118" textAnchor="middle">superfície elevada</text>
        {step >= 3 && <text x="240" y="150">enxerto subcondral</text>}
      </g>
    </svg>
  );
};

/* ---------------------------------------------------------------------------
   7) Técnica — placa lateral bloqueada (suporte) após redução.
   -------------------------------------------------------------------------- */
const StepPlaca: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 320 320"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Placa lateral bloqueada de suporte do platô tibial"}</title>

    {/* tíbia proximal AP */}
    <g stroke="var(--ink-soft)" fill="var(--surface)" strokeWidth={1.8}>
      <path d="M72 78 q56 -16 112 -2 q28 -8 56 2 l-4 22 q-84 20 -168 2 Z" />
      <path d="M76 98 q2 92 22 190 l128 0 q20 -84 22 -160" fill="var(--surface)" />
    </g>

    {/* parafusos subcondrais periarticulares */}
    <g stroke="var(--teal)" strokeWidth={2} fill="none">
      {/* placa lateral em L de suporte */}
      <path d="M96 96 q-6 8 -6 24 l0 150" strokeWidth={2.4} />
      {/* parafusos de bloqueio subcondrais (raft) */}
      <line x1="98" y1="112" x2="210" y2="108" />
      <line x1="98" y1="128" x2="205" y2="126" />
      {/* parafusos diafisários */}
      <circle cx="90" cy="170" r="3" />
      <circle cx="90" cy="200" r="3" />
      <circle cx="90" cy="232" r="3" />
      <circle cx="90" cy="262" r="3" />
    </g>

    <g style={LABEL}>
      <text x="150" y="100" textAnchor="middle">parafusos subcondrais (raft)</text>
      <text x="60" y="150" textAnchor="middle">placa</text>
      <text x="60" y="164" textAnchor="middle">de suporte</text>
    </g>
  </svg>
);

/* ---------------------------------------------------------------------------
   8) Fixador externo em ponte (estagiado) — trans-articular temporário.
   -------------------------------------------------------------------------- */
const FixadorPonte: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 220 340"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Fixador externo em ponte trans-articular (controle de danos estagiado)"}</title>

    {/* fêmur distal + tíbia proximal com fratura cominutiva */}
    <g stroke="var(--ink-soft)" fill="var(--surface)" strokeWidth={1.8}>
      <path d="M78 30 q34 -8 64 0 l0 92 q-32 10 -64 0 Z" />
      <path d="M74 150 q38 -12 72 0 l6 160 l-84 0 Z" />
    </g>

    {/* zona de cominução metafisária */}
    <g stroke="var(--cortical)" strokeWidth={1.8} fill="none" className="fx-line">
      <path d="M80 158 l60 10" />
      <path d="M78 172 l64 -6" />
      <path d="M84 186 l54 8" />
    </g>

    {/* pinos de Schanz (fêmur e tíbia distal) */}
    <g stroke="var(--teal)" strokeWidth={2.4} fill="none">
      <line x1="30" y1="70" x2="120" y2="76" />
      <line x1="30" y1="96" x2="118" y2="100" />
      <line x1="30" y1="266" x2="120" y2="272" />
      <line x1="30" y1="294" x2="120" y2="298" />
      {/* barra externa longitudinal (ponte) */}
      <line x1="34" y1="60" x2="34" y2="306" strokeWidth={3} />
      {/* clamps */}
      <rect x="27" y="66" width="14" height="12" />
      <rect x="27" y="92" width="14" height="12" />
      <rect x="27" y="262" width="14" height="12" />
      <rect x="27" y="290" width="14" height="12" />
    </g>

    <g style={LABEL}>
      <text x="150" y="60">pinos femorais</text>
      <text x="150" y="300">pinos tibiais</text>
      <text x="150" y="180">cominução</text>
      <text x="20" y="326" textAnchor="middle">barra</text>
    </g>
  </svg>
);

/* -------------------------------------------------------------------------- */
export const figures: Record<string, FC<FigureProps>> = {
  "fratura-planalto-tibial:anatomia": Anatomia,
  "fratura-planalto-tibial:schatzker": Schatzker,
  "fratura-planalto-tibial:tres-colunas": TresColunas,
  "fratura-planalto-tibial:acesso-anterolateral": AcessoAnterolateral,
  "fratura-planalto-tibial:acesso-posteromedial": AcessoPosteromedial,
  "fratura-planalto-tibial:step-elevacao": StepElevacao,
  "fratura-planalto-tibial:step-placa": StepPlaca,
  "fratura-planalto-tibial:fixador-ponte": FixadorPonte,
};
