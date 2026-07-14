import type { FC } from "react";
import type { FigureProps } from "../../../types/topic";

/* ============================================================================
   Figuras esquemáticas originais — Metatarso aduto.
   Line-art de dois tons, sem reprodução de material protegido.
   Cores exclusivamente por CSS var (ossos, cartilagem/fise, deformidade/traço,
   medidas/ângulos, rótulos). Referência editorial: Rockwood and Wilkins'
   Fractures in Children, 10ª ed. (2024) / Tachdjian's Pediatric Orthopaedics 6ª.

   Convenção: pé direito em vista dorsal, calcâneo embaixo, dedos em cima.
   A borda medial fica à esquerda da imagem. A deformidade é modelada como
   rotação do bloco do antepé em torno da articulação tarsometatarsal (TMT),
   que é o ápice real da deformidade — o retropé permanece neutro.
   ========================================================================== */

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

/** Cartilagem articular / fise — teal. */
const joint = {
  fill: "none",
  stroke: "var(--teal)",
  strokeWidth: 3,
  strokeLinecap: "round" as const,
};

/** Traço fino de contorno ósseo interno. */
const inner = {
  fill: "none",
  stroke: "var(--ink-soft)",
  strokeWidth: 1.2,
  strokeLinecap: "round" as const,
};

/** Deformidade / achado patológico — cortical. */
const lesion = {
  fill: "none",
  stroke: "var(--cortical)",
  strokeWidth: 2.5,
  strokeLinecap: "round" as const,
};

/** Medidas, eixos e forças — amber. */
const measure = {
  fill: "none",
  stroke: "var(--amber)",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
};

/* -- geometria compartilhada ----------------------------------------------- */

/** Ápice da deformidade: articulação tarsometatarsal (linha de Lisfranc). */
const PIVOT_X = 218;
const PIVOT_Y = 140;

/** Graus de adução usados pelas variantes (retropé sempre neutro). */
const ADDUCTION: Record<string, number> = {
  normal: 0,
  leve: -8,
  moderado: -14,
  grave: -24,
};

/**
 * Antepé: bloco metatarsofalângico que gira em torno da TMT.
 * A extremidade proximal é um semicírculo centrado exatamente no pivô, de
 * modo que a rotação nunca abre falha na interface — o retropé, desenhado
 * por cima, cobre essa borda e a TMT aparece como linha transversa.
 */
const Forefoot: FC<{ angle: number; ghost?: boolean }> = ({ angle, ghost }) => {
  const body = ghost
    ? {
        fill: "none",
        stroke: "var(--line-strong)",
        strokeWidth: 1.6,
        strokeDasharray: "5 4",
        strokeLinejoin: "round" as const,
      }
    : bone;

  return (
    <g transform={`rotate(${angle} ${PIVOT_X} ${PIVOT_Y})`}>
      {/* pododáctilos (atrás do corpo do antepé) */}
      <ellipse cx="190" cy="54" rx="13" ry="16" {...body} />
      <ellipse cx="216" cy="50" rx="9.5" ry="13" {...body} />
      <ellipse cx="236" cy="52" rx="8.5" ry="12" {...body} />
      <ellipse cx="253" cy="57" rx="8" ry="11" {...body} />
      <ellipse cx="267" cy="63" rx="7.5" ry="9.5" {...body} />

      {/* corpo do antepé — base proximal = semicírculo r=38 centrado no pivô */}
      <path
        {...body}
        d="M180 140 A38 38 0 0 0 256 140 C262 118, 266 96, 268 84 C268 76, 266 72, 262 72 C236 62, 200 64, 178 76 C172 94, 174 116, 180 140 Z"
      />

      {!ghost && (
        <>
          {/* diáfises metatarsais 1-5 */}
          <path {...inner} d="M191 134 L187 86" />
          <path {...inner} d="M208 131 L212 78" />
          <path {...inner} d="M224 131 L232 80" />
          <path {...inner} d="M239 133 L250 86" />
          <path {...inner} d="M252 136 L264 92" />
          {/* fileira das articulações metatarsofalângicas */}
          <path {...joint} strokeWidth={2.4} d="M180 78 C204 66, 238 64, 262 74" />
        </>
      )}
    </g>
  );
};

/** Retropé + mediopé — sempre neutro no metatarso aduto. */
const Hindfoot: FC = () => (
  <g>
    <path
      {...bone}
      d="M180 140 L178 200 C172 240, 180 288, 212 300 C246 288, 254 244, 250 200 L256 140 Z"
    />
    {/* linha tarsometatarsal (Lisfranc) — ápice da deformidade */}
    <path {...joint} d="M182 140 L254 140" />
    {/* articulação de Chopart (talonavicular + calcaneocuboidea) */}
    <path {...joint} strokeWidth={2.4} d="M181 195 C202 187, 232 187, 251 195" />
    {/* naviculocuneiforme */}
    <path {...inner} d="M180 169 C198 163, 216 163, 233 167" />
    {/* divisores dos cuneiformes e do cuboide */}
    <path {...inner} d="M203 167 L203 141" />
    <path {...inner} d="M228 166 L228 141" />
    <path {...inner} d="M234 192 L234 141" />
  </g>
);

/** Eixo bissetor do calcâneo (heel bisector), prolongado até a fileira digital. */
const HeelBisector: FC<{ dashed?: boolean }> = ({ dashed = true }) => (
  <path
    {...measure}
    strokeDasharray={dashed ? "6 5" : undefined}
    d="M212 296 L228 30"
  />
);

/* -------------------------------------------------------------------------- */

export const Anatomy: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 460 340"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>
      {title ?? "Anatomia do metatarso aduto: adução do antepé na tarsometatarsal com retropé neutro"}
    </title>

    <Forefoot angle={ADDUCTION.moderado} />
    <Hindfoot />

    {/* borda lateral convexa e base do 5º metatarso proeminente */}
    <path {...lesion} d="M256 142 C266 122, 272 100, 268 78" strokeDasharray="4 4" />
    <circle cx="254" cy="140" r="6" fill="none" stroke="var(--cortical)" strokeWidth="2.2" />

    {/* borda medial côncava e sulco no 1º espaço */}
    <path {...lesion} d="M180 142 C168 122, 162 100, 164 80" strokeDasharray="4 4" />

    {/* músculo abdutor do hálux — deformante medial */}
    <path
      d="M186 196 C176 172, 172 150, 176 122"
      fill="none"
      stroke="var(--amber)"
      strokeWidth="3.5"
      strokeLinecap="round"
      opacity="0.75"
    />

    {/* retropé neutro — vista posterior esquemática */}
    <g>
      <path {...boneBack} d="M372 132 C392 128, 408 138, 408 158 L408 208 C408 226, 392 236, 372 236 C352 236, 336 226, 336 208 L336 158 C336 138, 352 128, 372 132 Z" />
      <path {...measure} strokeDasharray="6 5" d="M372 118 L372 250" />
      <path {...joint} strokeWidth={2.4} d="M340 176 C356 170, 388 170, 404 176" />
      <text x="372" y="266" {...label} textAnchor="middle">retropé neutro</text>
      <text x="372" y="280" {...label} textAnchor="middle" fill="var(--teal)">
        sem equino, sem varo
      </text>
    </g>

    {/* rótulos */}
    <path d="M258 140 L292 132" stroke="var(--line-strong)" />
    <text x="296" y="130" {...label} fill="var(--cortical)">base do 5º proeminente</text>
    <path d="M268 96 L300 100" stroke="var(--line-strong)" />
    <text x="304" y="102" {...label} fill="var(--cortical)">borda lateral convexa</text>
    <path d="M166 96 L134 92" stroke="var(--line-strong)" />
    <text x="18" y="90" {...label} fill="var(--cortical)">borda medial côncava</text>
    <path d="M176 160 L140 158" stroke="var(--line-strong)" />
    <text x="24" y="160" {...label} fill="var(--amber)">m. abdutor do hálux</text>
    <path d="M186 140 L146 200" stroke="var(--line-strong)" />
    <text x="18" y="214" {...label} fill="var(--teal)">ápice: tarsometatarsal</text>
    <text x="212" y="318" {...label} textAnchor="middle">calcâneo</text>

    <text x="230" y="24" {...mono} textAnchor="middle">
      adução isolada do antepé — o retropé não participa
    </text>
    <text x="230" y="332" {...label} textAnchor="middle">
      A deformidade tem ápice na tarsometatarsal; se o retropé estiver em equino/varo, o diagnóstico é outro.
    </text>
  </svg>
);

/* -------------------------------------------------------------------------- */

export const HeelBisectorGrades: FC<FigureProps> = ({ className, title, variant }) => {
  const v = (variant ?? "moderado").toLowerCase();
  const angle = ADDUCTION[v] ?? ADDUCTION.moderado;

  const names: Record<string, string> = {
    normal: "normal · 2º-3º pododáctilos",
    leve: "leve · 3º pododáctilo",
    moderado: "moderado · 3º-4º pododáctilos",
    grave: "grave · 4º-5º pododáctilos",
  };

  return (
    <svg
      viewBox="0 0 440 340"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `Linha bissetora do calcâneo — grau ${v}`}</title>

      <Forefoot angle={angle} />
      <Hindfoot />
      <HeelBisector />

      {/* referência do eixo no retropé */}
      <path {...inner} d="M186 292 L238 292" strokeDasharray="3 3" />
      <circle cx="212" cy="292" r="3" fill="var(--amber)" />

      {/* ponto em que a bissetora cruza a fileira digital */}
      <circle cx="227" cy="52" r="6" fill="none" stroke="var(--amber)" strokeWidth="2.2" />

      <path d="M212 296 L172 300" stroke="var(--line-strong)" />
      <text x="26" y="304" {...label} fill="var(--amber)">bissetora do calcâneo</text>
      <path d="M236 46 L286 40" stroke="var(--line-strong)" />
      <text x="290" y="38" {...label} fill="var(--amber)">onde a linha sai</text>
      <text x="322" y="176" {...label} fill="var(--teal)">retropé neutro</text>
      <path d="M256 180 L318 172" stroke="var(--line-strong)" />

      <text x="220" y="24" {...mono} textAnchor="middle">
        {names[v] ?? v}
      </text>
      <text x="220" y="326" {...label} textAnchor="middle">
        Gradue pelo ponto em que a bissetora do retropé emerge na fileira dos pododáctilos.
      </text>
    </svg>
  );
};

/* -------------------------------------------------------------------------- */

export const Flexibility: FC<FigureProps> = ({ className, title, variant }) => {
  const v = (variant ?? "flexivel").toLowerCase();

  /* Deformidade em repouso é a mesma; muda o quanto corrige à manobra. */
  const rest = ADDUCTION.moderado;
  const corrected: Record<string, number> = {
    flexivel: 0,
    parcial: -8,
    rigido: -13,
  };
  const target = corrected[v] ?? 0;

  const names: Record<string, string> = {
    flexivel: "flexível · corrige até além do neutro",
    parcial: "parcialmente flexível · corrige, não atinge o neutro",
    rigido: "rígido · não corrige",
  };

  const verdict: Record<string, string> = {
    flexivel: "observação e orientação aos pais",
    parcial: "alongamento; gesso se persistir",
    rigido: "gessos seriados, iniciados cedo",
  };

  return (
    <svg
      viewBox="0 0 460 340"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `Teste de flexibilidade do antepé — ${v}`}</title>

      {/* posição corrigida (fantasma) */}
      <Forefoot angle={target} ghost />
      {/* deformidade em repouso */}
      <Forefoot angle={rest} />
      <Hindfoot />

      {/* estabilização do retropé */}
      <path
        {...measure}
        strokeWidth={3.5}
        d="M256 220 C282 214, 296 202, 300 186"
      />
      <text x="304" y="216" {...label} fill="var(--amber)">estabilizar o</text>
      <text x="304" y="230" {...label} fill="var(--amber)">retropé/cuboide</text>

      {/* força abdutora aplicada no 1º metatarso */}
      <defs>
        <marker
          id="mta-arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M0 0 L10 5 L0 10 Z" fill="var(--amber)" />
        </marker>
      </defs>
      {v !== "rigido" && (
        <path
          {...measure}
          strokeWidth={3}
          markerEnd="url(#mta-arrow)"
          d="M148 96 C170 84, 190 80, 208 82"
        />
      )}
      {v === "rigido" && (
        <>
          <path {...lesion} strokeWidth={3} d="M150 92 L178 100" />
          <path {...lesion} strokeWidth={3} d="M158 108 L172 78" />
        </>
      )}

      <text x="30" y="86" {...label} fill={v === "rigido" ? "var(--cortical)" : "var(--amber)"}>
        {v === "rigido" ? "sem correção passiva" : "abduzir o antepé"}
      </text>

      {/* leitura do resultado */}
      <path {...measure} strokeDasharray="6 5" d="M212 296 L228 30" />
      <rect
        x="322"
        y="60"
        width="126"
        height="58"
        rx="6"
        fill="var(--surface-2, var(--surface))"
        stroke="var(--line-strong)"
        strokeWidth="1.2"
      />
      <text x="332" y="80" {...label} fill="var(--teal)">conduta habitual</text>
      <text x="332" y="98" {...label}>
        {verdict[v] ?? verdict.flexivel}
      </text>

      <text x="230" y="24" {...mono} textAnchor="middle">
        {names[v] ?? v}
      </text>
      <text x="230" y="326" {...label} textAnchor="middle">
        Contorno tracejado = posição alcançada à manobra corretiva; contorno cheio = deformidade em repouso.
      </text>
    </svg>
  );
};

/* -------------------------------------------------------------------------- */

export const Differential: FC<FigureProps> = ({ className, title, variant }) => {
  const v = (variant ?? "metatarso-aduto").toLowerCase();

  const angle =
    v === "pe-torto" ? -26 : v === "skewfoot" ? -22 : ADDUCTION.moderado;

  /* Inclinação do calcâneo na vista posterior: 0 neutro, + varo, - valgo. */
  const heelTilt = v === "pe-torto" ? 18 : v === "skewfoot" ? -16 : 0;

  const names: Record<string, string> = {
    "metatarso-aduto": "metatarso aduto",
    "pe-torto": "pé torto congênito",
    skewfoot: "skewfoot (pé em serpentina)",
  };

  const heelText: Record<string, string> = {
    "metatarso-aduto": "retropé neutro",
    "pe-torto": "retropé em varo + equino",
    skewfoot: "retropé em valgo",
  };

  const heelColor =
    v === "metatarso-aduto" ? "var(--teal)" : "var(--cortical)";

  return (
    <svg
      viewBox="0 0 470 340"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `Diagnóstico diferencial pelo retropé — ${v}`}</title>

      {/* antepé aduzido em todos os três — não discrimina */}
      <Forefoot angle={angle} />
      <Hindfoot />

      {/* no skewfoot, o mediopé abduz/proná: marcar a quebra em Z */}
      {v === "skewfoot" && (
        <path {...lesion} strokeDasharray="4 4" d="M172 128 C196 150, 240 152, 262 178" />
      )}
      {/* no pé torto, cavo e prega medial */}
      {v === "pe-torto" && (
        <path {...lesion} strokeDasharray="4 4" d="M176 130 C190 148, 190 166, 178 184" />
      )}

      {/* vista posterior do retropé — o discriminador */}
      <g transform={`rotate(${heelTilt} 384 232)`}>
        <path
          {...boneBack}
          d="M384 128 C404 124, 420 134, 420 154 L420 206 C420 226, 404 238, 384 238 C364 238, 348 226, 348 206 L348 154 C348 134, 364 124, 384 128 Z"
        />
        <path {...joint} strokeWidth={2.4} d="M352 172 C368 166, 400 166, 416 172" />
        <path
          fill="none"
          stroke={heelColor}
          strokeWidth="2.4"
          strokeDasharray="6 5"
          d="M384 114 L384 252"
        />
      </g>
      {/* referência vertical verdadeira */}
      <path {...inner} strokeDasharray="3 4" d="M384 108 L384 260" />

      <text x="384" y="278" {...label} textAnchor="middle" fill={heelColor}>
        {heelText[v] ?? heelText["metatarso-aduto"]}
      </text>
      <text x="384" y="98" {...label} textAnchor="middle">vista posterior</text>

      <text x="212" y="318" {...label} textAnchor="middle">antepé aduzido nos três</text>

      <text x="235" y="24" {...mono} textAnchor="middle">
        {names[v] ?? v}
      </text>
      <text x="235" y="332" {...label} textAnchor="middle">
        O antepé aduzido não distingue as três entidades — quem decide o diagnóstico é o retropé.
      </text>
    </svg>
  );
};

/* -------------------------------------------------------------------------- */

export const NaturalHistory: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 480 320"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "História natural do metatarso aduto: resolução espontânea da grande maioria dos pés"}</title>

    {/* eixos */}
    <path {...inner} strokeWidth={1.6} d="M60 250 L400 250" />
    <path {...inner} strokeWidth={1.6} d="M60 250 L60 58" />

    {/* grades */}
    <path {...inner} strokeDasharray="2 5" opacity="0.6" d="M60 155 L400 155" />
    <path {...inner} strokeDasharray="2 5" opacity="0.6" d="M60 60 L400 60" />

    <text x="52" y="254" {...label} textAnchor="end">0%</text>
    <text x="52" y="159" {...label} textAnchor="end">50%</text>
    <text x="52" y="64" {...label} textAnchor="end">100%</text>

    <text x="60" y="268" {...label} textAnchor="middle">0</text>
    <text x="157" y="268" {...label} textAnchor="middle">2</text>
    <text x="206" y="268" {...label} textAnchor="middle">3</text>
    <text x="254" y="268" {...label} textAnchor="middle">4</text>
    <text x="400" y="268" {...label} textAnchor="middle">7</text>
    <text x="230" y="286" {...label} textAnchor="middle">idade (anos)</text>

    {/* curva de resolução espontânea */}
    <path
      fill="none"
      stroke="var(--teal)"
      strokeWidth="3"
      strokeLinecap="round"
      d="M60 250 C85 200, 95 176, 109 165 C130 145, 141 128, 157 117 C175 106, 190 98, 206 94 C230 88, 240 86, 254 86 C300 83, 350 80, 400 79"
    />

    {/* limiar dos 3 anos — antes disso o caso resistente não é identificável */}
    <path {...measure} strokeDasharray="6 5" d="M206 250 L206 70" />
    <text x="212" y="82" {...label} fill="var(--amber)">3 anos</text>
    <text x="212" y="96" {...label} fill="var(--amber)">antes disso não se</text>
    <text x="212" y="110" {...label} fill="var(--amber)">identifica o resistente</text>

    {/* desfecho final — barra empilhada */}
    <rect x="418" y="86.6" width="30" height="163.4" fill="var(--teal-tint)" stroke="var(--teal)" strokeWidth="1.6" />
    <rect x="418" y="67.6" width="30" height="19" fill="var(--amber-tint)" stroke="var(--amber)" strokeWidth="1.6" />
    <rect x="418" y="60" width="30" height="7.6" fill="var(--cortical-tint)" stroke="var(--cortical)" strokeWidth="1.6" />

    <text x="433" y="172" {...label} textAnchor="middle" fill="var(--teal)">86%</text>
    <text x="433" y="282" {...label} textAnchor="middle">desfecho</text>
    <text x="433" y="296" {...label} textAnchor="middle">no reexame</text>

    <path d="M448 78 L462 46" stroke="var(--line-strong)" />
    <text x="474" y="42" {...label} textAnchor="end" fill="var(--amber)">10% moderado, assintomático</text>
    <text x="474" y="28" {...label} textAnchor="end" fill="var(--cortical)">4% deformado e rígido</text>

    <text x="130" y="200" {...label} fill="var(--teal)">pés normais ou</text>
    <text x="130" y="214" {...label} fill="var(--teal)">com deformidade mínima</text>

    <text x="230" y="312" {...label} textAnchor="middle">
      A curva achata cedo: a resolução espontânea é a regra e a intervenção precoce corrige o que já corrigiria sozinho.
    </text>
  </svg>
);

/* -------------------------------------------------------------------------- */

export const SerialCasting: FC<FigureProps> = ({ className, title, activeStep }) => {
  const step = activeStep ?? 0;
  const highlightHold = step === 4;
  const highlightMold = step === 5;

  return (
    <svg
      viewBox="0 0 470 340"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? "Manipulação e gesso seriado no metatarso aduto: contra-apoio no cuboide e abdução do antepé"}</title>

      <defs>
        <marker
          id="mta-cast-arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M0 0 L10 5 L0 10 Z" fill="var(--amber)" />
        </marker>
      </defs>

      {/* posição corrigida alvo */}
      <Forefoot angle={0} ghost />
      <Forefoot angle={ADDUCTION.moderado} />
      <Hindfoot />

      {/* invólucro gessado */}
      <path
        fill="none"
        stroke="var(--teal)"
        strokeWidth="7"
        strokeLinecap="round"
        opacity="0.45"
        d="M150 300 C122 250, 130 180, 158 128 C176 96, 190 74, 200 56"
      />
      <path
        fill="none"
        stroke="var(--teal)"
        strokeWidth="7"
        strokeLinecap="round"
        opacity="0.45"
        d="M276 302 C300 252, 296 190, 278 140 C266 108, 264 82, 268 60"
      />
      <text x="96" y="130" {...label} fill="var(--teal)">gesso acima</text>
      <text x="96" y="144" {...label} fill="var(--teal)">do joelho</text>

      {/* contra-apoio no cuboide / borda lateral do retropé — fulcro correto */}
      <circle
        cx="252"
        cy="168"
        r={highlightHold ? 13 : 10}
        fill="var(--amber-tint)"
        stroke="var(--amber)"
        strokeWidth={highlightHold ? 3 : 2}
      />
      <path {...measure} strokeWidth={3} markerEnd="url(#mta-cast-arrow)" d="M300 168 L268 168" />
      <text x="306" y="164" {...label} fill="var(--amber)">contra-apoio no</text>
      <text x="306" y="178" {...label} fill="var(--amber)">cuboide (fulcro)</text>

      {/* força abdutora no 1º metatarso */}
      <path
        {...measure}
        strokeWidth={highlightMold ? 4 : 3}
        markerEnd="url(#mta-cast-arrow)"
        d="M140 92 C166 78, 190 76, 210 80"
      />
      <text x="26" y="80" {...label} fill="var(--amber)">abduzir o antepé</text>
      <text x="26" y="66" {...label} fill="var(--amber)">no 1º metatarso</text>

      {/* zona proibida: cabeça do tálus / calcâneo medial → valgo iatrogênico */}
      <circle cx="196" cy="212" r="11" fill="none" stroke="var(--cortical)" strokeWidth="2.4" strokeDasharray="4 3" />
      <path {...lesion} strokeWidth={2.4} d="M188 204 L204 220" />
      <path d="M186 218 L142 244" stroke="var(--line-strong)" />
      <text x="20" y="258" {...label} fill="var(--cortical)">não usar a cabeça do tálus</text>
      <text x="20" y="272" {...label} fill="var(--cortical)">nem forçar o calcâneo:</text>
      <text x="20" y="286" {...label} fill="var(--cortical)">gera valgo e skewfoot iatrogênico</text>

      {/* retropé mantido neutro */}
      <path {...measure} strokeDasharray="6 5" d="M212 300 L214 258" />
      <text x="326" y="248" {...label} fill="var(--teal)">retropé mantido neutro</text>
      <path d="M250 258 L322 244" stroke="var(--line-strong)" />

      <text x="235" y="24" {...mono} textAnchor="middle">
        manipulação e gesso seriado — o fulcro é o cuboide
      </text>
      <text x="235" y="326" {...label} textAnchor="middle">
        Abduz-se o antepé contra o cuboide, com o retropé livre em neutro; o alvo é a bissetora no 2º-3º espaço.
      </text>
    </svg>
  );
};

/* -------------------------------------------------------------------------- */

export const Surgery: FC<FigureProps> = ({ className, title, variant }) => {
  const v = (variant ?? "osteotomia-bases").toLowerCase();

  const names: Record<string, string> = {
    "capsulotomia-tmt": "liberação tarsometatarsal (Heyman-Herndon) — abandonada",
    "osteotomia-bases": "osteotomias das bases dos metatarsos",
    "cuneiforme-cuboide": "cunha de abertura no cuneiforme medial + fechamento no cuboide",
  };

  const notes: Record<string, string> = {
    "capsulotomia-tmt":
      "Liberação circunferencial das cápsulas TMT: alta taxa de rigidez, dor e degeneração — praticamente abandonada.",
    "osteotomia-bases":
      "Osteotomias das bases do 1º ao 5º metatarso, acima dos 4-5 anos, quando as bases já estão ossificadas; risco à fise do 1º metatarso.",
    "cuneiforme-cuboide":
      "Corrige pelo mediopé, poupando as TMT: cunha de abertura no cuneiforme medial e de fechamento no cuboide.",
  };

  return (
    <svg
      viewBox="0 0 460 340"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `Cirurgia excepcional no metatarso aduto — ${v}`}</title>

      <Forefoot angle={0} ghost />
      <Forefoot angle={ADDUCTION.grave} />
      <Hindfoot />

      {v === "capsulotomia-tmt" && (
        <>
          <path {...lesion} strokeWidth={3} strokeDasharray="5 4" d="M180 140 L256 140" />
          <circle cx="218" cy="140" r="26" fill="none" stroke="var(--cortical)" strokeWidth="2" strokeDasharray="4 4" />
          <path d="M256 140 L306 128" stroke="var(--line-strong)" />
          <text x="310" y="126" {...label} fill="var(--cortical)">liberação circunferencial</text>
          <text x="310" y="140" {...label} fill="var(--cortical)">das cápsulas TMT</text>
          <text x="310" y="160" {...label} fill="var(--cortical)">rigidez e dor tardias</text>
        </>
      )}

      {v === "osteotomia-bases" && (
        <g transform={`rotate(${ADDUCTION.grave} ${PIVOT_X} ${PIVOT_Y})`}>
          <path {...lesion} d="M184 128 L198 126" />
          <path {...lesion} d="M202 125 L216 124" />
          <path {...lesion} d="M218 125 L232 125" />
          <path {...lesion} d="M234 127 L246 128" />
          <path {...lesion} d="M248 130 L260 132" />
          <path {...joint} strokeWidth={4} d="M188 136 L194 136" />
        </g>
      )}
      {v === "osteotomia-bases" && (
        <>
          <path d="M244 118 L300 106" stroke="var(--line-strong)" />
          <text x="304" y="104" {...label} fill="var(--cortical)">osteotomias das bases</text>
          <text x="304" y="118" {...label} fill="var(--cortical)">do 1º ao 5º metatarso</text>
          <text x="304" y="138" {...label} fill="var(--teal)">poupar a fise do 1º MT</text>
        </>
      )}

      {v === "cuneiforme-cuboide" && (
        <>
          {/* cunha de abertura no cuneiforme medial */}
          <path {...lesion} d="M182 154 L204 150" />
          <path
            d="M182 154 L204 150 L204 158 Z"
            fill="var(--teal-tint)"
            stroke="var(--teal)"
            strokeWidth="1.8"
          />
          {/* cunha de fechamento no cuboide */}
          <path {...lesion} d="M236 156 L252 152" />
          <path
            d="M236 156 L252 152 L252 164 Z"
            fill="var(--cortical-tint)"
            stroke="var(--cortical)"
            strokeWidth="1.8"
          />
          <path d="M186 156 L146 176" stroke="var(--line-strong)" />
          <text x="16" y="190" {...label} fill="var(--teal)">cunha de abertura</text>
          <text x="16" y="204" {...label} fill="var(--teal)">no cuneiforme medial</text>
          <path d="M250 158 L302 168" stroke="var(--line-strong)" />
          <text x="306" y="166" {...label} fill="var(--cortical)">cunha de fechamento</text>
          <text x="306" y="180" {...label} fill="var(--cortical)">no cuboide</text>
        </>
      )}

      <text x="230" y="24" {...mono} textAnchor="middle">
        {names[v] ?? v}
      </text>
      <text x="230" y="312" {...label} textAnchor="middle">
        Contorno tracejado = alinhamento pretendido.
      </text>
      <text x="230" y="330" {...label} textAnchor="middle">
        {notes[v] ?? notes["osteotomia-bases"]}
      </text>
    </svg>
  );
};

/* -------------------------------------------------------------------------- */

export const figures: Record<string, FC<FigureProps>> = {
  "metatarso-aduto:anatomia": Anatomy,
  "metatarso-aduto:linha-bissetora": HeelBisectorGrades,
  "metatarso-aduto:flexibilidade": Flexibility,
  "metatarso-aduto:diferencial": Differential,
  "metatarso-aduto:historia-natural": NaturalHistory,
  "metatarso-aduto:gesso": SerialCasting,
  "metatarso-aduto:cirurgia": Surgery,
};
