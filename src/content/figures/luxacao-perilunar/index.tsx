import type { FC, ReactNode } from "react";
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

/* Shared dorsal carpus: right wrist, radial side to the left, distal upward.
   `highlight` optionally emphasises a single bone (scaphoid/lunate/…). */
type CarpalKey =
  | "scaphoid"
  | "lunate"
  | "triquetrum"
  | "trapezium"
  | "trapezoid"
  | "capitate"
  | "hamate";

function Carpus({
  highlight,
  faded = false,
}: {
  highlight?: CarpalKey;
  faded?: boolean;
}): ReactNode {
  const st = (k: CarpalKey) =>
    highlight === k
      ? { ...bone, fill: "var(--teal-tint)", stroke: "var(--teal)" }
      : faded
        ? boneBack
        : bone;

  return (
    <g>
      {/* Rádio e ulna */}
      <path {...boneBack} d="M96 300 L96 250 C96 236 104 228 122 226 L196 226 C204 234 206 244 202 300 Z" />
      <path {...boneBack} d="M214 300 C210 262 214 244 226 236 L268 236 C280 244 282 262 280 300 Z" />
      <text x="150" y="292" {...label} textAnchor="middle">rádio</text>
      <text x="248" y="292" {...label} textAnchor="middle">ulna</text>

      {/* Fileira proximal */}
      {/* Escafoide (oblíquo, ponte entre as fileiras) */}
      <path
        {...st("scaphoid")}
        d="M120 150 C142 146 156 158 158 178 C160 200 150 218 130 222 C110 224 100 210 100 188 C100 168 106 154 120 150 Z"
      />
      {/* Semilunar (crescente, central) */}
      <path
        {...st("lunate")}
        d="M170 168 C188 160 210 160 226 170 C222 186 224 206 232 220 C214 214 190 214 172 220 C180 206 178 184 170 168 Z"
      />
      {/* Piramidal */}
      <path
        {...st("triquetrum")}
        d="M244 176 C264 172 278 184 276 204 C274 220 260 226 246 220 C236 214 234 196 244 176 Z"
      />

      {/* Fileira distal */}
      <path {...st("trapezium")} d="M112 108 C130 104 140 116 138 134 C136 148 124 152 112 148 C102 144 100 122 112 108 Z" />
      <path {...st("trapezoid")} d="M150 112 C166 110 174 122 170 138 C166 150 154 152 146 144 C140 134 142 120 150 112 Z" />
      {/* Capitato (cabeça encaixa na concavidade do semilunar) */}
      <path
        {...st("capitate")}
        d="M188 108 C210 104 226 118 226 142 C226 158 218 168 200 170 C182 170 176 156 178 138 C180 122 182 114 188 108 Z"
      />
      {/* Hamato (com hâmulo) */}
      <path {...st("hamate")} d="M238 116 C258 112 272 126 270 148 C268 164 254 168 242 160 C230 150 228 126 238 116 Z" />

      {/* Metacarpais (bases) */}
      {[118, 154, 196, 240].map((x, i) => (
        <path key={x} {...boneBack} d={`M${x - 10} 92 L${x + 10} 92 L${x + 8 - i} 60 L${x - 8} 60 Z`} />
      ))}
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
    <title>{title ?? "Anatomia do carpo e eixo semilunar-capitato na articulação perilunar"}</title>

    <Carpus highlight="lunate" />

    {/* Eixo longitudinal rádio–semilunar–capitato */}
    <path d="M180 300 L200 224 L204 168 L206 118" fill="none" stroke="var(--amber)" strokeWidth="1.5" strokeDasharray="5 4" />
    <text x="330" y="60" {...label} fill="var(--amber)">eixo rádio–</text>
    <text x="330" y="74" {...label} fill="var(--amber)">semilunar–capitato</text>
    <path d="M328 66 L214 128" stroke="var(--amber)" strokeWidth="1" />

    {/* Rótulos dos ossos */}
    <path d="M96 186 L60 176" stroke="var(--line-strong)" />
    <text x="56" y="176" {...label} textAnchor="end">escafoide</text>
    <path d="M198 190 L198 250" stroke="var(--line-strong)" />
    <text x="198" y="264" {...label} textAnchor="middle" fill="var(--teal-deep)">semilunar</text>
    <path d="M276 200 L316 200" stroke="var(--line-strong)" />
    <text x="320" y="204" {...label}>piramidal</text>
    <path d="M206 140 L246 128" stroke="var(--line-strong)" />
    <text x="250" y="128" {...label}>capitato</text>
    <path d="M120 128 L92 120" stroke="var(--line-strong)" />
    <text x="88" y="120" {...label} textAnchor="end">trapézio/trapezoide</text>
    <path d="M262 140 L300 132" stroke="var(--line-strong)" />
    <text x="304" y="134" {...label}>hamato</text>

    <text x="220" y="24" {...mono} textAnchor="middle">carpo · visão dorsal (punho direito)</text>
    <text x="220" y="312" {...label} textAnchor="middle">
      O semilunar é a chave do carpo: ancorado ao rádio, articula-se com a cabeça do capitato.
    </text>
  </svg>
);

export const MayfieldStages: FC<FigureProps> = ({ className, title, variant, activeStep }) => {
  const stage = Number(variant ?? activeStep ?? 1);
  const cx = 200;
  const cy = 168;

  // Anel perilunar: escafoide (radial), capitato (distal), piramidal (ulnar).
  return (
    <svg
      viewBox="0 0 440 300"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `Instabilidade perilunar progressiva de Mayfield — estágio ${stage}`}</title>

      {/* Semilunar central */}
      <ellipse cx={cx} cy={cy} rx="34" ry="30" {...(stage >= 4 ? boneBack : bone)} />
      <text x={cx} y={cy + 4} {...label} textAnchor="middle">semilunar</text>

      {/* Escafoide radial */}
      <ellipse cx={cx - 92} cy={cy} rx="24" ry="34" {...bone} transform={`rotate(-18 ${cx - 92} ${cy})`} />
      <text x={cx - 92} y={cy - 44} {...label} textAnchor="middle">escafoide</text>
      {/* Capitato distal */}
      <ellipse cx={cx} cy={cy - 82} rx="30" ry="26" {...bone} />
      <text x={cx} y={cy - 82} {...label} textAnchor="middle">capitato</text>
      {/* Piramidal ulnar */}
      <ellipse cx={cx + 92} cy={cy} rx="24" ry="28" {...bone} />
      <text x={cx + 92} y={cy - 40} {...label} textAnchor="middle">piramidal</text>

      {/* I — dissociação escafolunar (radial) */}
      <path
        d={`M${cx - 58} ${cy - 6} C${cx - 46} ${cy - 20}, ${cx - 30} ${cy - 20}, ${cx - 20} ${cy - 10}`}
        {...(stage >= 1 ? corticalStroke : tealStroke)}
      />
      {/* II — luxação capitolunar (dorsal/distal) */}
      <path
        d={`M${cx - 16} ${cy - 34} C${cx - 4} ${cy - 46}, ${cx + 8} ${cy - 46}, ${cx + 18} ${cy - 34}`}
        {...(stage >= 2 ? corticalStroke : tealStroke)}
      />
      {/* III — dissociação lunopiramidal (ulnar) */}
      <path
        d={`M${cx + 22} ${cy - 8} C${cx + 34} ${cy - 18}, ${cx + 48} ${cy - 16}, ${cx + 56} ${cy - 2}`}
        {...(stage >= 3 ? corticalStroke : tealStroke)}
      />
      {/* IV — luxação volar do semilunar */}
      {stage >= 4 && (
        <>
          <ellipse cx={cx} cy={cy + 74} rx="34" ry="26" fill="var(--cortical-tint)" stroke="var(--cortical)" strokeWidth="2.5" />
          <path d={`M${cx} ${cy + 30} L${cx} ${cy + 48}`} stroke="var(--cortical)" strokeWidth="2" markerEnd="url(#mfArrow)" />
          <text x={cx} y={cy + 78} {...label} textAnchor="middle" fill="var(--cortical)">semilunar</text>
          <text x={cx} y={cy + 92} {...label} textAnchor="middle" fill="var(--cortical)">luxado (volar)</text>
        </>
      )}
      <defs>
        <marker id="mfArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 Z" fill="var(--cortical)" />
        </marker>
      </defs>

      {/* Legenda de estágios */}
      <g transform="translate(28 250)">
        {["I · escafolunar", "II · capitolunar", "III · lunopiramidal", "IV · luxação do semilunar"].map((t, i) => (
          <text
            key={t}
            x={i * 105}
            y={0}
            {...mono}
            fontSize={10}
            fill={stage === i + 1 ? "var(--cortical)" : "var(--muted)"}
          >
            {t}
          </text>
        ))}
      </g>
      <text x="220" y="24" {...mono} textAnchor="middle">progressão em anel ao redor do semilunar</text>
    </svg>
  );
};

export const CarpalArcs: FC<FigureProps> = ({ className, title, variant }) => {
  const greater = (variant ?? "menor").toLowerCase() === "maior";

  return (
    <svg
      viewBox="0 0 440 320"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `Padrão de lesão perilunar: arco ${greater ? "maior (transósseo)" : "menor (ligamentar)"}`}</title>

      <Carpus faded />

      {greater ? (
        <>
          {/* Arco maior: através do escafoide, capitato e piramidal (+ estiloide radial) */}
          <path
            d="M118 190 C150 150 210 150 250 190"
            fill="none"
            stroke="var(--cortical)"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeDasharray="2 7"
          />
          {/* Traços de fratura */}
          <path d="M124 168 L136 206" {...corticalStroke} />
          <path d="M196 118 L210 160" {...corticalStroke} />
          <path d="M250 182 L262 210" {...corticalStroke} />
          <text x="220" y="24" {...mono} textAnchor="middle" fill="var(--cortical)">ARCO MAIOR · fratura-luxação</text>
          <text x="220" y="308" {...label} textAnchor="middle">
            Transestiloide · transescafoide · transcapitato · transpiramidal (perilunar).
          </text>
        </>
      ) : (
        <>
          {/* Arco menor: elipse puramente ligamentar ao redor do semilunar */}
          <ellipse
            cx="198"
            cy="188"
            rx="86"
            ry="58"
            fill="none"
            stroke="var(--cortical)"
            strokeWidth="3.2"
            strokeDasharray="2 7"
          />
          <path d="M158 178 C150 190 152 202 162 210" {...corticalStroke} />
          <path d="M232 180 C244 190 244 204 234 214" {...corticalStroke} />
          <text x="220" y="24" {...mono} textAnchor="middle" fill="var(--cortical)">ARCO MENOR · puramente ligamentar</text>
          <text x="220" y="308" {...label} textAnchor="middle">
            Ruptura escafolunar, capitolunar e lunopiramidal, sem fratura associada.
          </text>
        </>
      )}
    </svg>
  );
};

export const Radiographs: FC<FigureProps> = ({ className, title, variant }) => {
  const lateral = (variant ?? "perfil").toLowerCase() === "perfil";

  return (
    <svg
      viewBox="0 0 440 300"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `Sinais radiográficos da luxação perilunar — incidência ${lateral ? "de perfil" : "AP"}`}</title>

      {lateral ? (
        <>
          {/* Rádio horizontal, cavidade voltada para cima (dorsal acima) */}
          <path {...boneBack} d="M40 176 C80 172 120 172 156 176 C160 158 158 146 150 138 C110 134 70 138 44 148 Z" />
          <text x="80" y="196" {...label}>rádio</text>

          {/* Semilunar inclinado volarmente — "xícara derramada" */}
          <path
            {...bone}
            fill="var(--cortical-tint)"
            stroke="var(--cortical)"
            d="M150 172 C168 176 182 174 190 164 C186 190 178 214 158 224 C142 226 134 210 138 190 C140 182 144 176 150 172 Z"
          />
          <text x="120" y="234" {...label} fill="var(--cortical)">semilunar em báscula volar</text>
          <text x="120" y="248" {...label} fill="var(--cortical)">(&ldquo;xícara derramada&rdquo;)</text>

          {/* Capitato deslocado dorsalmente */}
          <ellipse cx="228" cy="122" rx="30" ry="26" {...bone} />
          <text x="262" y="118" {...label}>capitato dorsal</text>
          <path d="M198 140 C214 132 224 128 232 126" stroke="var(--teal)" strokeWidth="2" markerEnd="url(#rxArrow)" fill="none" />

          {/* Linha do eixo normal perdida */}
          <path d="M96 176 L152 176" stroke="var(--amber)" strokeWidth="1.5" strokeDasharray="4 3" />
          <path d="M152 176 L200 150" stroke="var(--amber)" strokeWidth="1.5" strokeDasharray="4 3" />
          <text x="220" y="24" {...mono} textAnchor="middle">perfil · colinearidade rádio–semilunar–capitato rompida</text>
        </>
      ) : (
        <>
          {/* AP: arcos de Gilula */}
          <path d="M70 120 C150 92 290 92 370 120" fill="none" stroke="var(--ink-soft)" strokeWidth="1.4" />
          <path d="M78 150 C150 126 290 126 362 150" fill="none" stroke="var(--ink-soft)" strokeWidth="1.4" />
          {/* Semilunar triangular + sobreposição */}
          <path {...bone} fill="var(--cortical-tint)" stroke="var(--cortical)" d="M180 150 L228 150 L204 196 Z" />
          <text x="204" y="176" {...label} textAnchor="middle" fill="var(--cortical)">triangular</text>
          {/* Sobreposição capitato/semilunar */}
          <ellipse cx="204" cy="132" rx="30" ry="22" fill="var(--cortical)" opacity="0.18" stroke="var(--cortical)" strokeWidth="1.5" strokeDasharray="4 3" />
          {/* Arco de Gilula 3 interrompido */}
          <path d="M150 172 C176 182 232 182 258 172" fill="none" stroke="var(--amber)" strokeWidth="2" strokeDasharray="3 4" />
          <path d="M198 176 L214 176" stroke="var(--cortical)" strokeWidth="3" />
          <text x="128" y="228" {...label} fill="var(--amber)">3ª linha de Gilula rompida</text>
          <text x="128" y="242" {...label} fill="var(--cortical)">sobreposição capitato–semilunar</text>
          <text x="220" y="24" {...mono} textAnchor="middle">AP · semilunar triangular e perda dos arcos</text>
        </>
      )}
      <defs>
        <marker id="rxArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 Z" fill="var(--teal)" />
        </marker>
      </defs>
      <text x="220" y="288" {...label} textAnchor="middle">
        Sinal sutil e frequentemente despercebido: comparar sempre com o punho contralateral em dúvida.
      </text>
    </svg>
  );
};

export const Reduction: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 460 300"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Redução da luxação perilunar (manobra de Tavernier) e descompressão do mediano"}</title>

    {/* Antebraço/mão esquematizados de perfil */}
    <path {...boneBack} d="M40 150 C110 142 170 142 210 150 C214 168 214 182 210 200 C170 208 110 208 40 200 Z" />
    <path {...bone} d="M210 150 C260 146 300 150 328 160 C334 172 334 178 328 190 C300 200 260 204 210 200 Z" />
    <text x="120" y="130" {...label}>antebraço · contratração</text>
    <text x="286" y="222" {...label}>mão · tração longitudinal</text>

    {/* Tração longitudinal */}
    <path d="M336 175 L400 175" stroke="var(--teal)" strokeWidth="3" markerEnd="url(#redArrow)" fill="none" />
    <path d="M36 175 L8 175" stroke="var(--teal)" strokeWidth="3" markerEnd="url(#redArrow)" fill="none" />

    {/* Polegar do cirurgião empurra o semilunar dorsalmente */}
    <ellipse cx="214" cy="176" rx="15" ry="13" fill="var(--cortical-tint)" stroke="var(--cortical)" strokeWidth="2" />
    <path d="M214 244 C214 220 214 208 214 196" stroke="var(--amber)" strokeWidth="4" strokeLinecap="round" markerEnd="url(#redArrowAmber)" fill="none" />
    <text x="214" y="262" {...label} textAnchor="middle" fill="var(--amber)">polegar sobre o semilunar</text>

    {/* Sequência: extensão → flexão */}
    <path d="M300 150 C316 132 330 128 344 128" fill="none" stroke="var(--teal)" strokeWidth="2" strokeDasharray="4 3" markerEnd="url(#redArrow)" />
    <text x="300" y="120" {...label} fill="var(--teal)">1 · tração + extensão</text>
    <path d="M300 200 C316 220 330 226 344 226" fill="none" stroke="var(--teal)" strokeWidth="2" strokeDasharray="4 3" markerEnd="url(#redArrow)" />
    <text x="300" y="248" {...label} fill="var(--teal)">2 · flexão sobre o polegar</text>

    <defs>
      <marker id="redArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M0 0 L10 5 L0 10 Z" fill="var(--teal)" />
      </marker>
      <marker id="redArrowAmber" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M0 0 L10 5 L0 10 Z" fill="var(--amber)" />
      </marker>
    </defs>

    <text x="230" y="24" {...mono} textAnchor="middle">redução fechada urgente</text>
    <text x="230" y="290" {...label} textAnchor="middle">
      Sinais do nervo mediano progressivos ou irredutibilidade: liberar o túnel do carpo em urgência.
    </text>
  </svg>
);

export const DorsalApproach: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 440 300"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Via dorsal do punho: 3º/4º compartimentos e capsulotomia poupadora de ligamentos"}</title>

    {/* Contorno dorsal do punho */}
    <path
      d="M120 40 C180 30 260 30 320 44 C336 120 336 200 320 268 L120 268 C104 200 104 118 120 40 Z"
      fill="var(--surface-2, var(--surface))"
      stroke="var(--line-strong)"
      strokeWidth="1.4"
    />
    {/* Retináculo extensor / compartimentos */}
    {[160, 196, 244, 288].map((x, i) => (
      <path key={x} d={`M${x} 70 C${x - 4} 150 ${x - 2} 210 ${x} 250`} fill="none" stroke="var(--ink-soft)" strokeWidth="10" strokeLinecap="round" opacity={i === 1 ? 0.7 : 0.3} />
    ))}
    <text x="196" y="62" {...label} textAnchor="middle" fill="var(--teal)">3º comp. (EPL)</text>

    {/* Tubérculo de Lister */}
    <ellipse cx="196" cy="228" rx="9" ry="7" {...bone} />
    <text x="150" y="248" {...label}>tubérculo de Lister</text>

    {/* Incisão / intervalo entre 3º e 4º */}
    <path d="M212 74 L212 246" stroke="var(--teal)" strokeWidth="2.5" strokeDasharray="6 4" />
    <text x="222" y="96" {...label} fill="var(--teal)">intervalo 3º–4º</text>

    {/* NIP no assoalho do 4º compartimento */}
    <path d="M256 90 C260 150 260 200 256 244" fill="none" stroke="var(--amber)" strokeWidth="3" strokeLinecap="round" />
    <text x="266" y="150" {...label} fill="var(--amber)">nervo interósseo</text>
    <text x="266" y="164" {...label} fill="var(--amber)">posterior (neurectomia opcional)</text>

    {/* Capsulotomia poupadora (Berger) */}
    <path d="M170 168 L214 150 L246 178 L214 208 Z" fill="var(--teal-tint)" stroke="var(--teal)" strokeWidth="2" />
    <text x="120" y="180" {...label} textAnchor="end" fill="var(--teal-deep)">capsulotomia</text>
    <text x="120" y="194" {...label} textAnchor="end" fill="var(--teal-deep)">poupadora de ligamentos</text>

    <text x="220" y="24" {...mono} textAnchor="middle">via dorsal · exposição do carpo</text>
  </svg>
);

export const VolarApproach: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 440 300"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Via volar estendida: liberação do túnel do carpo, nervo mediano e espaço de Poirier"}</title>

    <path
      d="M120 40 C180 30 260 30 320 44 C336 120 336 200 320 268 L120 268 C104 200 104 118 120 40 Z"
      fill="var(--surface-2, var(--surface))"
      stroke="var(--line-strong)"
      strokeWidth="1.4"
    />

    {/* Incisão em zigue-zague estendida pela prega do punho */}
    <path d="M204 60 L204 150 L182 168 L204 186 L204 250" fill="none" stroke="var(--teal)" strokeWidth="2.5" strokeDasharray="6 4" />
    <text x="214" y="76" {...label} fill="var(--teal)">incisão do túnel do carpo</text>
    <text x="214" y="90" {...label} fill="var(--teal)">estendida ao antebraço</text>

    {/* Retináculo flexor liberado */}
    <path d="M168 196 C200 188 236 188 268 196" fill="none" stroke="var(--cortical)" strokeWidth="4" strokeLinecap="round" />
    <path d="M214 190 L228 190" stroke="var(--cortical)" strokeWidth="3" />
    <text x="276" y="196" {...label} fill="var(--cortical)">retináculo flexor seccionado</text>

    {/* Nervo mediano */}
    <path d="M188 250 C186 200 190 150 194 96" fill="none" stroke="var(--amber)" strokeWidth="5" strokeLinecap="round" />
    <text x="120" y="230" {...label} fill="var(--amber)">nervo mediano</text>
    <path d="M120 226 L186 214" stroke="var(--amber)" strokeWidth="1" />

    {/* Espaço de Poirier — rasgo capsular volar */}
    <ellipse cx="252" cy="140" rx="22" ry="16" fill="var(--cortical-tint)" stroke="var(--cortical)" strokeWidth="2" strokeDasharray="4 3" />
    <text x="300" y="130" {...label} fill="var(--cortical)">espaço de Poirier</text>
    <text x="300" y="144" {...label} fill="var(--cortical)">(rasgo capsular volar)</text>

    <text x="220" y="24" {...mono} textAnchor="middle">via volar · descompressão e reparo capsular</text>
    <text x="220" y="288" {...label} textAnchor="middle">
      Permite reparar o ligamento radiolunar curto e o assoalho capsular; associar à via dorsal quando necessário.
    </text>
  </svg>
);

export const Fixation: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 440 320"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Fixação: parafuso do escafoide, fios de Kirschner e reparo dos ligamentos interósseos"}</title>

    <Carpus />

    {/* Parafuso canulado no escafoide */}
    <line x1="112" y1="220" x2="150" y2="150" stroke="var(--teal)" strokeWidth="4" strokeLinecap="round" />
    <circle cx="112" cy="220" r="4" fill="var(--teal)" />
    <text x="70" y="238" {...label} fill="var(--teal)">parafuso do escafoide</text>

    {/* Fio K escafolunar */}
    <line x1="132" y1="176" x2="196" y2="188" stroke="var(--teal)" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M196 188 l8 -2 l-4 6 Z" fill="var(--teal)" />
    <text x="150" y="60" {...label} fill="var(--teal)">fio K escafolunar</text>
    <path d="M158 66 L164 180" stroke="var(--teal)" strokeWidth="1" strokeDasharray="3 3" />

    {/* Fio K lunopiramidal */}
    <line x1="256" y1="196" x2="206" y2="196" stroke="var(--teal)" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M206 196 l8 -3 l0 6 Z" fill="var(--teal)" />
    <text x="300" y="230" {...label} fill="var(--teal)" textAnchor="middle">fio K lunopiramidal</text>
    <path d="M300 222 L250 200" stroke="var(--teal)" strokeWidth="1" strokeDasharray="3 3" />

    {/* Âncoras / reparo do ligamento SL dorsal */}
    {[178, 190].map((x, i) => (
      <circle key={x} cx={x + i * 2} cy={172} r="4" fill="var(--surface)" stroke="var(--teal)" strokeWidth="2" />
    ))}
    <path d="M170 168 C182 158 196 158 208 168" {...tealStroke} strokeWidth={2.5} />
    <text x="220" y="150" {...label} fill="var(--teal-deep)">reparo do ligamento escafolunar dorsal</text>

    <text x="220" y="24" {...mono} textAnchor="middle">ORIF + reparo ligamentar</text>
    <text x="220" y="312" {...label} textAnchor="middle">
      Restaurar a coluna radial (escafoide), reduzir o intervalo escafolunar e estabilizar o lado ulnar.
    </text>
  </svg>
);

export const figures: Record<string, FC<FigureProps>> = {
  "luxacao-perilunar:anatomia": Anatomy,
  "luxacao-perilunar:mayfield": MayfieldStages,
  "luxacao-perilunar:arcos": CarpalArcs,
  "luxacao-perilunar:radiografia": Radiographs,
  "luxacao-perilunar:reducao": Reduction,
  "luxacao-perilunar:via-dorsal": DorsalApproach,
  "luxacao-perilunar:via-volar": VolarApproach,
  "luxacao-perilunar:fixacao": Fixation,
};
