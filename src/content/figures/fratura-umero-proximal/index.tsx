import type { FC } from "react";
import type { FigureProps } from "../../../types/topic";

/* ============================================================================
   Fratura do úmero proximal — figuras esquemáticas originais (line-art 2 tons).
   Convenções de cor (somente via CSS vars):
   • Osso:            stroke var(--ink-soft), fill var(--surface)
   • 2º plano:        var(--surface-2, var(--surface))
   • Implante/tendão/vasos: stroke var(--teal)
   • Traço de fratura:stroke var(--cortical) + className "fx-line"
   • Medidas/ângulos: var(--amber)
   • Rótulos:         fontSize 11, fill var(--muted), font-body
   • Códigos mono:    font-mono
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
  strokeWidth: 1.4,
  strokeLinejoin: "round" as const,
};

const label = {
  fontSize: 11,
  fill: "var(--muted)",
  fontFamily: "var(--font-body, sans-serif)",
};

const labelMono = {
  fontSize: 11,
  fill: "var(--muted)",
  fontFamily: "var(--font-mono, monospace)",
};

const implant = {
  fill: "none",
  stroke: "var(--teal)",
  strokeWidth: 3,
  strokeLinecap: "round" as const,
};

const amber = "var(--amber)";

/* ──────────────────────────────────────────────────────────────────────────
   1) ANATOMIA — quatro segmentos de Neer + suprimento vascular da cabeça.
   ────────────────────────────────────────────────────────────────────────── */
export const Anatomia: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 320 320"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Anatomia do úmero proximal: os quatro segmentos de Neer e o suprimento vascular da cabeça"}</title>

    {/* Glenoide (2º plano) */}
    <path {...bone2} d="M40 92 C 52 70, 52 150, 44 178 C 34 172, 28 150, 28 134 C 28 116, 32 100, 40 92 Z" />
    <text x="24" y="200" {...label} textAnchor="start">glenoide</text>

    {/* Diáfise umeral */}
    <path {...bone} d="M150 168 L 180 168 L 176 300 L 150 300 Z" />

    {/* Colo cirúrgico (metáfise) — região do maior número de fraturas */}
    <path {...bone} d="M120 150 C 140 158, 168 160, 186 156 L 184 172 C 166 176, 138 176, 118 168 Z" />

    {/* Tuberosidade maior (lateral) */}
    <path {...bone} d="M138 96 C 168 92, 190 106, 190 132 C 178 150, 150 152, 132 138 Z" />
    <text x="196" y="120" {...label} textAnchor="start">tubérculo maior</text>
    <text x="196" y="134" {...label} textAnchor="start">(supra/infra/redondo m.)</text>

    {/* Sulco bicipital + tuberosidade menor (medial-anterior) */}
    <path {...bone} d="M104 118 C 96 132, 98 148, 110 156 C 122 150, 124 132, 118 120 Z" />
    <text x="60" y="150" {...label} textAnchor="start">tubérculo menor</text>
    <text x="70" y="164" {...label} textAnchor="start">(subescapular)</text>

    {/* Cabeça umeral (esférica) */}
    <circle {...bone} cx="120" cy="98" r="40" />
    <text x="120" y="70" {...label} textAnchor="middle">cabeça</text>

    {/* Colo anatômico (limite cabeça / tuberosidades) */}
    <path d="M92 118 C 108 130, 140 132, 158 120" fill="none" stroke="var(--ink-soft)" strokeWidth="1" strokeDasharray="3 3" />
    <text x="150" y="150" {...label} textAnchor="start">colo cirúrgico</text>

    {/* Calcar / extensão metafisária dorsomedial (chave de Hertel) */}
    <path d="M104 132 C 106 146, 108 158, 112 166" fill="none" stroke={amber} strokeWidth="2" />
    <text x="40" y="230" {...label} textAnchor="start" fill={amber}>extensão metafisária medial (calcar)</text>

    {/* Vaso — ramo ascendente da a. circunflexa umeral anterior (art. arqueada) */}
    <path d="M132 172 C 122 158, 116 140, 118 122" fill="none" stroke="var(--teal)" strokeWidth="2.2" />
    {/* Contribuição posterior — a. circunflexa umeral posterior (dominante moderna) */}
    <path d="M150 176 C 160 158, 158 132, 140 116" fill="none" stroke="var(--teal)" strokeWidth="1.8" strokeDasharray="2 3" />
    <text x="150" y="250" {...label} textAnchor="start" fill="var(--teal)">a. circunflexa umeral anterior (arqueada)</text>
    <text x="150" y="264" {...label} textAnchor="start" fill="var(--teal)">+ circunflexa umeral posterior (contribuição maior)</text>

    <text x="20" y="300" {...label} textAnchor="start">
      Quatro segmentos: cabeça · tubérculo maior · tubérculo menor · diáfise. Deslocamento define o padrão de Neer.
    </text>
  </svg>
);

/* ──────────────────────────────────────────────────────────────────────────
   Corpo umeral de referência para os esquemas de classificação.
   ────────────────────────────────────────────────────────────────────────── */
const ShaftRef: FC = () => (
  <path {...bone} d="M132 176 L 164 176 L 160 260 L 136 260 Z" />
);

/* ──────────────────────────────────────────────────────────────────────────
   2) NEER — 1, 2 (colo cirúrgico), 2-TM (tubérculo maior), 3 e 4 partes.
   Variantes clicáveis. Um "segmento" conta quando desviado >1 cm ou >45°.
   ────────────────────────────────────────────────────────────────────────── */
export const Neer: FC<FigureProps> = ({ className, title, variant }) => {
  const v = (variant ?? "1").toLowerCase();

  const cfg: Record<string, { desc: string; parts: string }> = {
    "1": { desc: "Uma parte — nenhum segmento desviado", parts: "1 parte" },
    "2": { desc: "Duas partes — colo cirúrgico desviado", parts: "2 partes" },
    "2tm": { desc: "Duas partes — tubérculo maior desviado", parts: "2 partes" },
    "3": { desc: "Três partes — colo cirúrgico + um tubérculo", parts: "3 partes" },
    "4": { desc: "Quatro partes — cabeça isolada das tuberosidades e da diáfise", parts: "4 partes" },
  };
  const c = cfg[v] ?? cfg["1"];

  // deslocamentos por variante
  const surgNeck = v === "2" || v === "3" || v === "4"; // diáfise desviada medial
  const gtDispl = v === "2tm" || v === "3" || v === "4"; // tubérculo maior retraído sup.
  const ltDispl = v === "4"; // tubérculo menor desviado
  const shaftDx = surgNeck ? 16 : 0;

  return (
    <svg
      viewBox="0 0 300 300"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `Classificação de Neer — ${c.desc}`}</title>

      {/* glenoide */}
      <path {...bone2} d="M40 96 C 52 76, 52 148, 44 172 C 34 166, 28 146, 28 130 C 28 114, 32 104, 40 96 Z" />

      {/* diáfise (desviada medial no colo cirúrgico) */}
      <g transform={`translate(${shaftDx} 0)`}>
        <ShaftRef />
      </g>

      {/* cabeça umeral */}
      <circle {...bone} cx="120" cy="104" r="40" />

      {/* tubérculo maior (retrai súpero-posterior quando desviado) */}
      <g transform={gtDispl ? "translate(14 -18)" : "translate(0 0)"}>
        <path {...bone} d="M150 96 C 178 92, 196 106, 194 130 C 182 146, 156 148, 142 134 Z" />
      </g>

      {/* tubérculo menor (desvia ântero-medial no 4 partes) */}
      <g transform={ltDispl ? "translate(-16 6)" : "translate(0 0)"}>
        <path {...bone} d="M92 120 C 84 134, 86 150, 98 158 C 110 152, 112 134, 106 122 Z" />
      </g>

      {/* traços de fratura */}
      <g className="fx-line" stroke="var(--cortical)" strokeWidth="2.4" fill="none">
        {/* colo cirúrgico */}
        {surgNeck && <path d="M96 150 C 118 162, 148 162, 168 152" strokeDasharray="3 3" />}
        {v === "1" && <path d="M100 150 C 120 158, 146 158, 164 150" opacity="0.5" />}
        {/* separação do tubérculo maior */}
        {gtDispl && <path d="M148 96 C 142 116, 140 132, 142 138" strokeDasharray="3 3" />}
        {/* separação do tubérculo menor */}
        {ltDispl && <path d="M108 120 C 112 134, 112 148, 108 156" strokeDasharray="3 3" />}
      </g>

      {/* rótulo */}
      <text x="150" y="26" {...labelMono} textAnchor="middle" fill="var(--ink-soft)">
        Neer · {c.parts}
      </text>
      <text x="150" y="278" {...label} textAnchor="middle">{c.desc}</text>
      <text x="150" y="294" {...label} textAnchor="middle" fill="var(--teal)">
        Segmento "conta" se desviar &gt; 1 cm ou angular &gt; 45°.
      </text>
    </svg>
  );
};

/* ──────────────────────────────────────────────────────────────────────────
   3) HERTEL — preditores de isquemia da cabeça (calcar + charneira medial).
   Variantes: "perfusao" (favorável) × "isquemia" (alto risco).
   ────────────────────────────────────────────────────────────────────────── */
export const Hertel: FC<FigureProps> = ({ className, title, variant }) => {
  const isch = (variant ?? "perfusao") === "isquemia";

  return (
    <svg
      viewBox="0 0 300 280"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? (isch
        ? "Critérios de Hertel — padrão de alto risco de isquemia (calcar curto + charneira rota)"
        : "Critérios de Hertel — padrão favorável à perfusão (calcar longo + charneira íntegra)")}</title>

      {/* diáfise */}
      <path {...bone} d="M150 176 L 182 176 L 178 268 L 154 268 Z" />

      {/* cabeça umeral */}
      <circle {...bone} cx="120" cy="98" r="42" />
      <text x="120" y="70" {...label} textAnchor="middle">cabeça</text>

      {/* extensão metafisária medial (calcar) presa à cabeça */}
      {isch ? (
        // calcar CURTO (< 8 mm) — pouco osso metafisário na cabeça
        <path d="M110 138 C 112 144, 114 148, 116 150" fill="none" stroke={amber} strokeWidth="4" strokeLinecap="round" />
      ) : (
        // calcar LONGO (> 8 mm) — bom manguito metafisário
        <path d="M108 136 C 110 150, 114 164, 122 174" fill="none" stroke={amber} strokeWidth="4" strokeLinecap="round" />
      )}
      <text x="20" y="150" {...label} textAnchor="start" fill={amber}>
        calcar {isch ? "< 8 mm (curto)" : "> 8 mm (longo)"}
      </text>

      {/* charneira medial (córtex medial) */}
      {isch ? (
        <g className="fx-line">
          {/* charneira ROTA — gap */}
          <line x1="104" y1="150" x2="150" y2="172" stroke="var(--cortical)" strokeWidth="2.6" strokeDasharray="4 4" />
          <circle cx="126" cy="160" r="3" fill="var(--cortical)" />
        </g>
      ) : (
        <g>
          {/* charneira ÍNTEGRA — continuidade cortical */}
          <path d="M110 172 C 128 178, 144 178, 154 174" fill="none" stroke="var(--ink-soft)" strokeWidth="2.4" />
        </g>
      )}
      <text x="150" y="196" {...label} textAnchor="start" fill={isch ? "var(--cortical)" : "var(--ink-soft)"}>
        charneira medial {isch ? "ROTA" : "íntegra"}
      </text>

      {/* vaso retinacular */}
      <path
        d="M138 180 C 128 160, 122 132, 124 108"
        fill="none"
        stroke="var(--teal)"
        strokeWidth="2.2"
        strokeDasharray={isch ? "2 4" : undefined}
        opacity={isch ? 0.5 : 1}
      />

      <text x="150" y="24" {...labelMono} textAnchor="middle" fill="var(--ink-soft)">
        Hertel · {isch ? "alto risco" : "favorável"}
      </text>
      <text x="20" y="240" {...label} textAnchor="start">
        Preditores de isquemia: extensão metafisária medial &lt; 8 mm, charneira medial rota
      </text>
      <text x="20" y="256" {...label} textAnchor="start">
        e traço do colo anatômico. Combinados → VPP de necrose até ~97%.
      </text>
      <text x="20" y="272" {...label} textAnchor="start" fill="var(--teal)">
        {isch ? "Cabeça mal perfundida → considere artroplastia no idoso." : "Cabeça bem perfundida → osteossíntese favorecida."}
      </text>
    </svg>
  );
};

/* ──────────────────────────────────────────────────────────────────────────
   4) VIA DELTOPEITORAL — intervalo deltoide × peitoral maior (veia cefálica).
   ────────────────────────────────────────────────────────────────────────── */
export const ViaDeltopeitoral: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 300 280"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Via deltopeitoral — intervalo deltoide × peitoral maior, veia cefálica de referência"}</title>

    {/* contorno do ombro anterior (2º plano) */}
    <path {...bone2} d="M40 30 C 130 18, 220 34, 262 70 L 262 250 L 40 250 Z" opacity="0.5" />

    {/* processo coracoide de referência */}
    <circle cx="150" cy="70" r="4" fill="var(--ink-soft)" />
    <text x="156" y="66" {...label} textAnchor="start">coracoide (farol)</text>

    {/* deltoide (lateral) */}
    <path fill="var(--teal-tint)" stroke="var(--teal)" strokeWidth="1.6" d="M168 66 C 210 92, 224 160, 214 234 L 176 234 C 178 168, 168 108, 150 76 Z" />
    <text x="200" y="150" {...label} textAnchor="start" fill="var(--teal)">deltoide</text>
    <text x="196" y="164" {...label} textAnchor="start" fill="var(--teal)">(n. axilar)</text>

    {/* peitoral maior (medial) */}
    <path fill="var(--teal-tint)" stroke="var(--teal)" strokeWidth="1.6" d="M130 66 C 92 96, 78 150, 82 224 L 124 224 C 122 158, 128 104, 144 76 Z" />
    <text x="86" y="150" {...label} textAnchor="start" fill="var(--teal)">peitoral maior</text>
    <text x="82" y="164" {...label} textAnchor="start" fill="var(--teal)">(n. peitorais)</text>

    {/* veia cefálica — no intervalo, retraída (usualmente) lateral */}
    <path d="M148 74 C 150 120, 152 176, 150 226" fill="none" stroke="var(--cortical)" strokeWidth="2.2" strokeDasharray="6 4" className="fx-line" />
    <text x="150" y="46" {...label} textAnchor="middle" fill="var(--cortical)">veia cefálica / intervalo</text>

    <text x="20" y="270" {...label} textAnchor="start">
      Via de escolha para placa bloqueada e artroplastia. Superficial: deltoide × peitoral maior; veia cefálica é o guia.
    </text>
  </svg>
);

/* ──────────────────────────────────────────────────────────────────────────
   5) VIA DELTOIDE (transdeltoidea anterolateral) — MIPO; n. axilar em risco.
   ────────────────────────────────────────────────────────────────────────── */
export const ViaDeltoide: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 300 280"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Via transdeltoidea anterolateral — janela para MIPO; nervo axilar cruza 5–7 cm abaixo do acrômio"}</title>

    <path {...bone2} d="M40 30 C 130 18, 220 34, 262 70 L 262 250 L 40 250 Z" opacity="0.5" />

    {/* acrômio de referência */}
    <path {...bone} d="M120 48 C 150 44, 176 48, 186 60 C 172 66, 140 66, 122 62 Z" />
    <text x="150" y="42" {...label} textAnchor="middle">acrômio</text>

    {/* músculo deltoide (fibras) */}
    <g stroke="var(--teal)" strokeWidth="1.4" fill="none" opacity="0.8">
      <path d="M130 68 C 132 130, 136 190, 140 236" />
      <path d="M150 68 C 152 130, 154 190, 156 236" />
      <path d="M170 68 C 170 130, 172 190, 174 236" />
    </g>
    <text x="196" y="120" {...label} textAnchor="start" fill="var(--teal)">deltoide (split de fibras)</text>

    {/* incisão superior (split) */}
    <line x1="150" y1="66" x2="150" y2="150" stroke="var(--cortical)" strokeWidth="2.2" strokeDasharray="6 4" className="fx-line" />
    <text x="150" y="96" {...label} textAnchor="start" fill="var(--cortical)">janela proximal</text>

    {/* nervo axilar — transversal, zona de perigo */}
    <path d="M96 150 C 130 158, 172 158, 208 150" fill="none" stroke={amber} strokeWidth="2.4" />
    <text x="150" y="140" {...label} textAnchor="middle" fill={amber}>n. axilar — 5 a 7 cm abaixo do acrômio</text>

    {/* janela distal (abaixo do nervo) para a ponta da placa */}
    <line x1="150" y1="172" x2="150" y2="230" stroke="var(--cortical)" strokeWidth="2.2" strokeDasharray="6 4" className="fx-line" />
    <text x="150" y="216" {...label} textAnchor="start" fill="var(--cortical)">janela distal</text>

    <text x="20" y="270" {...label} textAnchor="start">
      Deslizar a placa por baixo do nervo axilar. Menos exposição, porém risco direto ao axilar — palpe e proteja.
    </text>
  </svg>
);

/* ──────────────────────────────────────────────────────────────────────────
   6) PASSO — Placa bloqueada (PHILOS): parafuso de calcar + suturas.
   activeStep destaca o parafuso de suporte medial (calcar).
   ────────────────────────────────────────────────────────────────────────── */
export const StepPhilos: FC<FigureProps> = ({ className, title, activeStep }) => {
  const calcarOn = activeStep === undefined || activeStep >= 2;
  return (
    <svg
      viewBox="0 0 300 300"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? "Passo — osteossíntese com placa bloqueada (PHILOS): suporte de calcar e suturas nas tuberosidades"}</title>

      {/* diáfise + metáfise */}
      <path {...bone} d="M150 168 L 182 168 L 178 288 L 152 288 Z" />
      <path {...bone} d="M118 150 C 140 160, 168 162, 186 156 L 184 172 C 166 176, 138 176, 116 168 Z" />
      {/* cabeça */}
      <circle {...bone} cx="120" cy="102" r="40" />
      {/* tubérculo maior */}
      <path {...bone} d="M150 94 C 178 90, 196 104, 194 128 C 182 144, 156 146, 142 132 Z" />

      {/* traço do colo cirúrgico (reduzido) */}
      <g className="fx-line">
        <path d="M96 150 C 118 160, 148 160, 168 152" fill="none" stroke="var(--cortical)" strokeWidth="1.6" strokeDasharray="3 3" />
      </g>

      {/* placa lateral bloqueada */}
      <path
        d="M182 96 C 196 96, 200 108, 198 130 L 196 250 C 196 258, 190 260, 184 260 L 184 96 Z"
        fill="var(--teal-tint)"
        stroke="var(--teal)"
        strokeWidth="2"
      />
      <text x="204" y="150" {...label} textAnchor="start" fill="var(--teal)">placa bloqueada</text>

      {/* parafusos bloqueados divergentes na cabeça */}
      <g {...implant} strokeWidth="2.6">
        <line x1="188" y1="108" x2="112" y2="86" />
        <line x1="188" y1="122" x2="106" y2="104" />
        {/* parafuso de suporte inferomedial (calcar) — destacado */}
        <line
          x1="190"
          y1="150"
          x2="112"
          y2="140"
          stroke={calcarOn ? "var(--teal-deep)" : "var(--teal)"}
          strokeWidth={calcarOn ? 4 : 2.6}
        />
      </g>
      {calcarOn && (
        <text x="60" y="150" {...label} textAnchor="start" fill="var(--teal-deep)">parafuso de calcar (suporte medial)</text>
      )}

      {/* parafusos diafisários */}
      <g {...implant} strokeWidth="2.4">
        <line x1="192" y1="196" x2="156" y2="196" />
        <line x1="192" y1="224" x2="156" y2="224" />
      </g>

      {/* suturas transósseas nas tuberosidades (manguito) */}
      <g stroke={amber} strokeWidth="1.6" fill="none">
        <path d="M150 96 C 160 84, 176 84, 186 92" />
        <path d="M132 118 C 120 108, 108 110, 100 120" />
      </g>
      <text x="60" y="80" {...label} textAnchor="start" fill={amber}>suturas nas tuberosidades (manguito)</text>

      <text x="150" y="24" {...labelMono} textAnchor="middle" fill="var(--ink-soft)">
        placa bloqueada · PHILOS
      </text>
      <text x="20" y="300" {...label} textAnchor="start">
        Suporte medial (calcar) e sutura do manguito reduzem perda de redução em varo e falha do implante.
      </text>
    </svg>
  );
};

/* ──────────────────────────────────────────────────────────────────────────
   7) PASSO — Artroplastia reversa no idoso com tuberosidades irreparáveis.
   ────────────────────────────────────────────────────────────────────────── */
export const StepReversa: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 300 300"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Passo — artroplastia reversa do ombro na fratura do idoso com tuberosidades irreparáveis"}</title>

    {/* escápula / glenoide */}
    <path {...bone2} d="M40 70 C 60 60, 66 150, 52 200 C 40 190, 30 150, 30 120 C 30 100, 32 82, 40 70 Z" />
    <text x="20" y="220" {...label} textAnchor="start">escápula</text>

    {/* metaglena + glenosfera (componente glenoidal — teal) */}
    <path d="M56 84 C 74 78, 86 92, 88 112 C 74 118, 60 116, 54 106 Z" fill="var(--teal-tint)" stroke="var(--teal)" strokeWidth="2" />
    <circle cx="86" cy="118" r="26" fill="var(--teal-tint)" stroke="var(--teal)" strokeWidth="2.2" />
    <text x="70" y="72" {...label} textAnchor="start" fill="var(--teal)">glenosfera</text>

    {/* diáfise umeral */}
    <path {...bone} d="M150 176 L 184 176 L 180 292 L 154 292 Z" />

    {/* haste + inserto de polietileno concavo (componente umeral) */}
    <path
      d="M150 118 C 168 118, 178 130, 178 154 L 176 262 C 176 272, 168 274, 160 274 L 158 176 L 150 176 Z"
      fill="var(--teal-tint)"
      stroke="var(--teal)"
      strokeWidth="2.2"
    />
    {/* copa côncava que acopla na glenosfera */}
    <path d="M112 118 C 124 106, 150 106, 158 122 C 150 138, 124 140, 112 128 Z" fill="var(--teal-tint)" stroke="var(--teal)" strokeWidth="2" />
    <text x="188" y="150" {...label} textAnchor="start" fill="var(--teal)">haste umeral + inserto</text>

    {/* tuberosidade reinserida com sutura (quando possível) */}
    <path {...bone} d="M148 150 C 168 148, 182 158, 182 176 L 158 176 C 154 166, 150 158, 148 150 Z" />
    <g stroke={amber} strokeWidth="1.6" fill="none">
      <path d="M150 150 C 162 140, 176 142, 184 152" />
    </g>
    <text x="150" y="132" {...label} textAnchor="start" fill={amber}>reinserção da tuberosidade maior</text>

    <text x="150" y="24" {...labelMono} textAnchor="middle" fill="var(--ink-soft)">
      artroplastia reversa
    </text>
    <text x="20" y="288" {...label} textAnchor="start" fill="var(--teal)">
      Reversa medializa/abaixa o centro de rotação → deltoide compensa o manguito ausente.
    </text>
  </svg>
);

/* ──────────────────────────────────────────────────────────────────────────
   Registro exportado — chaves prefixadas pelo slug deste tópico.
   ────────────────────────────────────────────────────────────────────────── */
export const figures: Record<string, FC<FigureProps>> = {
  "fratura-umero-proximal:anatomia": Anatomia,
  "fratura-umero-proximal:neer": Neer,
  "fratura-umero-proximal:hertel": Hertel,
  "fratura-umero-proximal:via-deltopeitoral": ViaDeltopeitoral,
  "fratura-umero-proximal:via-deltoide": ViaDeltoide,
  "fratura-umero-proximal:step-philos": StepPhilos,
  "fratura-umero-proximal:step-reversa": StepReversa,
};
