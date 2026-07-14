import type { FC } from "react";
import type { FigureProps } from "../../../types/topic";

/* ==========================================================================
   Monteggia na criança — figuras originais (line-art, 2 tons).
   Redesenho esquemático; não reprodução de imagens protegidas.
   Referência editorial: Rockwood and Wilkins' Fractures in Children, 10ª ed.
   (2024) / Tachdjian's Pediatric Orthopaedics, 6ª ed.
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

/** Fise / cartilagem — o marcador do esqueleto imaturo. */
const physis = {
  fill: "none" as const,
  stroke: "var(--teal)",
  strokeWidth: 3.2,
  strokeLinecap: "round" as const,
};

/** Ligamento anular / partes moles. */
const ligament = {
  fill: "none" as const,
  stroke: "var(--teal)",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
};

/** Traço de fratura / osteotomia. */
const corticalStroke = {
  fill: "none" as const,
  stroke: "var(--cortical)",
  strokeWidth: 3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Medidas, eixos e ângulos. */
const amberLine = {
  stroke: "var(--amber)",
  strokeWidth: 1.5,
  fill: "none" as const,
};

const amberDash = {
  stroke: "var(--amber)",
  strokeWidth: 1.5,
  strokeDasharray: "6 4",
  fill: "none" as const,
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

/* --------------------------------------------------------------------------
   1 · Anatomia — articulação radioulnar proximal, ligamento anular e fises
   ------------------------------------------------------------------------ */
export const Anatomy: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 480 390"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>
      {title ??
        "Cotovelo da criança em perfil: capítulo, cabeça do rádio, ligamento anular, incisura troclear e fises"}
    </title>
    <text x="240" y="22" {...mono} textAnchor="middle">
      cotovelo imaturo · perfil (anterior à direita)
    </text>

    {/* úmero, com metáfise alargada */}
    <path
      {...bone}
      d="M188 34 C174 36, 168 50, 172 66 L196 150 C198 166, 210 176, 226 178 L300 172 C312 170, 316 158, 310 148 L226 44 C220 34, 202 32, 188 34 Z"
    />
    {/* fise umeral distal (o condilo ainda é cartilaginoso na criança pequena) */}
    <path {...physis} d="M204 158 C226 170, 254 172, 280 166 C292 163, 300 158, 306 152" />

    {/* tróclea (posteromedial, por trás) */}
    <circle {...boneBack} cx={236} cy={188} r={34} />
    {/* capítulo */}
    <circle {...bone} cx={282} cy={184} r={28} />

    {/* ulna proximal: olécrano, incisura troclear, coronoide, diáfise */}
    <path
      {...bone}
      d="M196 146 C180 156, 176 182, 186 202 C200 254, 214 306, 224 352 L250 356 C252 306, 256 262, 262 236 L266 214 C238 250, 182 218, 196 146 Z"
    />
    {/* apófise do olécrano (núcleo secundário) */}
    <path {...physis} d="M192 152 C204 146, 218 148, 228 156" />

    {/* rádio: cabeça em taça, colo, tuberosidade bicipital, diáfise */}
    <path
      {...bone}
      d="M264 210 C262 202, 268 196, 278 195 L302 195 C312 196, 318 203, 316 211 L314 232 L308 244 L306 262 C308 290, 314 326, 320 356 L346 352 C340 314, 334 278, 332 250 L328 226 L326 210 C324 200, 316 194, 306 192 Z"
    />
    {/* superfície côncava da cabeça do rádio, que acopla no capítulo */}
    <path {...ligament} d="M266 208 C278 200, 302 200, 314 208" />
    {/* fise radial proximal — logo distal à cabeça */}
    <path {...physis} d="M266 228 L328 226" />
    {/* ligamento anular envolvendo o colo */}
    <path {...ligament} d="M262 240 C272 252, 322 252, 332 238" />
    <path {...ligament} d="M262 240 C272 228, 322 228, 332 238" />

    {/* membrana interóssea */}
    {[288, 312, 336].map((y) => (
      <line
        key={y}
        x1={252}
        y1={y}
        x2={314}
        y2={y - 16}
        stroke="var(--ink-soft)"
        strokeWidth={1}
        opacity={0.55}
      />
    ))}

    {/* rótulos */}
    <text x={330} y={182} {...label}>
      capítulo
    </text>
    <line x1={326} y1={185} x2={306} y2={184} {...amberLine} />
    <text x={352} y={214} {...label}>
      cabeça do rádio
    </text>
    <text x={352} y={230} {...label}>
      fise radial proximal
    </text>
    <text x={352} y={248} {...label}>
      ligamento anular
    </text>
    <text x={96} y={160} {...label}>
      olécrano
    </text>
    <text x={72} y={200} {...label}>
      incisura troclear
    </text>
    <text x={196} y={232} {...label}>
      coronoide
    </text>
    <text x={126} y={330} {...label}>
      ulna
    </text>
    <text x={364} y={330} {...label}>
      rádio
    </text>
    <text x={240} y={378} {...label} textAnchor="middle">
      a ulna é o pilar do antebraço — seu comprimento e sua curvatura mantêm a cabeça do rádio no capítulo
    </text>
  </svg>
);

/* --------------------------------------------------------------------------
   2 · Linha radiocapitelar — normal x luxada
   variant: "normal" | "luxado"
   ------------------------------------------------------------------------ */
export const RadiocapitellarLine: FC<FigureProps> = ({ className, title, variant }) => {
  const dim = (mine: string) => (variant && variant !== mine ? 0.32 : 1);

  return (
    <svg
      viewBox="0 0 480 330"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>
        {title ??
          "Linha radiocapitelar: traçada pelo colo do rádio deve cruzar o capítulo; na luxação ela erra o capítulo"}
      </title>
      <text x={240} y={20} {...mono} textAnchor="middle">
        linha radiocapitelar · traçar pelo COLO, em todas as incidências
      </text>

      {/* ---------------- painel normal ---------------- */}
      <g opacity={dim("normal")}>
        <text x={116} y={44} {...mono} textAnchor="middle">
          normal
        </text>
        {/* úmero */}
        <path
          {...bone}
          d="M62 60 C50 62, 46 74, 50 88 L68 152 C70 166, 80 174, 94 176 L152 172 C164 170, 168 158, 162 148 L96 68 C90 58, 74 58, 62 60 Z"
        />
        <path {...physis} d="M72 158 C92 168, 122 170, 148 164" />
        <circle {...bone} cx={134} cy={186} r={26} />
        {/* ulna */}
        <path
          {...boneBack}
          d="M62 150 C50 160, 48 184, 56 202 L84 300 L106 302 C102 254, 106 224, 114 208 C88 236, 50 208, 62 150 Z"
        />
        {/* rádio alinhado */}
        <path
          {...bone}
          d="M116 214 C114 206, 120 200, 130 199 L150 199 C160 200, 164 207, 162 215 L160 236 L156 250 C158 274, 162 288, 166 302 L188 300 C182 274, 178 254, 178 240 L174 216 C172 206, 164 200, 154 198 Z"
        />
        <path {...physis} d="M118 232 L174 230" />
        <path {...ligament} d="M114 244 C124 254, 170 254, 178 242" />
        {/* eixo do colo prolongado — cruza o centro do capítulo */}
        <line x1={146} y1={296} x2={132} y2={150} {...amberDash} />
        <circle cx={134} cy={186} r={3.2} fill="var(--amber)" />
        <text x={186} y={150} {...label}>
          cruza o
        </text>
        <text x={186} y={164} {...label}>
          capítulo
        </text>
      </g>

      {/* ---------------- painel luxado ---------------- */}
      <g opacity={dim("luxado")}>
        <text x={352} y={44} {...mono} textAnchor="middle">
          Monteggia (Bado I)
        </text>
        {/* úmero */}
        <path
          {...bone}
          d="M298 60 C286 62, 282 74, 286 88 L304 152 C306 166, 316 174, 330 176 L388 172 C400 170, 404 158, 398 148 L332 68 C326 58, 310 58, 298 60 Z"
        />
        <path {...physis} d="M308 158 C328 168, 358 170, 384 164" />
        <circle {...bone} cx={370} cy={186} r={26} />
        {/* ulna fraturada, ápice anterior */}
        <path
          {...boneBack}
          d="M298 150 C286 160, 284 184, 292 202 C298 224, 306 240, 316 250 C322 268, 322 288, 320 302 L342 304 C344 274, 340 250, 332 234 C326 222, 322 214, 322 206 C296 236, 286 208, 298 150 Z"
        />
        <path {...corticalStroke} d="M296 244 L326 254" />
        {/* cabeça do rádio luxada anteriormente (para cima e à direita) */}
        <path
          {...bone}
          d="M368 138 C362 132, 364 124, 374 120 L396 114 C406 112, 412 118, 412 126 L416 146 L414 160 L420 178 C428 202, 436 232, 444 258 L466 250 C456 222, 446 194, 440 172 L432 148 L428 132 C424 122, 414 118, 404 118 Z"
        />
        <path {...physis} d="M370 152 L430 138" />
        {/* eixo do colo prolongado — erra o capítulo */}
        <line x1={432} y1={250} x2={392} y2={122} {...amberDash} />
        <circle cx={370} cy={186} r={3.2} fill="var(--amber)" />
        <text x={214} y={112} {...label}>
          erra o
        </text>
        <text x={214} y={126} {...label}>
          capítulo
        </text>
        <line x1={244} y1={118} x2={382} y2={140} {...amberLine} />
        <text x={262} y={272} {...label}>
          fratura
        </text>
        <text x={262} y={286} {...label}>
          da ulna
        </text>
      </g>

      <text x={240} y={324} {...label} textAnchor="middle">
        a linha pelo colo erra o capítulo em ~1% dos cotovelos normais; pelo eixo da diáfise, em ~16%
      </text>
    </svg>
  );
};

/* --------------------------------------------------------------------------
   3 · Classificação de Bado — I a IV
   variant: "I" | "II" | "III" | "IV"
   ------------------------------------------------------------------------ */
const badoCopy: Record<string, { head: string; foot: string; view: string }> = {
  I: {
    head: "Bado I — luxação ANTERIOR",
    foot: "ulna angulada com ápice anterior · ~70–75% na criança",
    view: "perfil (anterior à direita)",
  },
  II: {
    head: "Bado II — luxação POSTERIOR",
    foot: "ulna com ápice posterior · rara na criança, comum no adulto",
    view: "perfil (anterior à direita)",
  },
  III: {
    head: "Bado III — luxação LATERAL",
    foot: "galho verde da metáfise ulnar proximal, ápice lateral · 2ª mais comum",
    view: "AP (lateral à direita)",
  },
  IV: {
    head: "Bado IV — anterior + fratura do rádio",
    foot: "luxação anterior com fratura de rádio E ulna no mesmo nível · rara",
    view: "perfil (anterior à direita)",
  },
};

export const Bado: FC<FigureProps> = ({ className, title, variant }) => {
  const v = variant && badoCopy[variant] ? variant : "I";
  const copy = badoCopy[v];

  return (
    <svg
      viewBox="0 0 360 360"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>
        {title ??
          `Classificação de Bado, tipo ${v}: direção da luxação da cabeça do rádio e do ápice da fratura da ulna`}
      </title>
      <text x={180} y={20} {...mono} textAnchor="middle">
        {copy.head}
      </text>
      <text x={180} y={36} {...label} textAnchor="middle">
        {copy.view}
      </text>

      {/* úmero + capítulo — comum a todos os painéis */}
      <path
        {...bone}
        d="M108 56 C96 58, 92 70, 96 84 L114 146 C116 160, 126 168, 140 170 L206 166 C218 164, 222 152, 216 142 L142 64 C136 54, 120 54, 108 56 Z"
      />
      <path {...physis} d="M120 152 C142 162, 172 164, 200 158" />

      {v === "III" ? (
        <>
          {/* AP: tróclea medial (esq) + capítulo lateral (dir) */}
          <circle {...boneBack} cx={140} cy={180} r={24} />
          <circle {...bone} cx={192} cy={180} r={24} />
          {/* ulna: galho verde da metáfise proximal, ápice lateral */}
          <path
            {...bone}
            d="M118 156 C106 166, 104 190, 112 206 L120 224 C112 250, 110 290, 112 330 L136 332 C132 292, 134 254, 142 232 L142 210 C118 234, 106 210, 118 156 Z"
          />
          <path {...corticalStroke} d="M110 220 L140 214" />
          {/* rádio deslocado lateralmente (à direita) */}
          <path
            {...bone}
            d="M214 196 C212 188, 218 182, 228 181 L250 181 C260 182, 264 189, 262 197 L260 218 L254 232 C254 268, 258 302, 262 332 L286 330 C280 298, 276 264, 276 234 L272 210 L270 196 C268 186, 260 180, 250 179 Z"
          />
          <path {...physis} d="M214 214 L272 212" />
          <path {...ligament} d="M212 228 C222 240, 268 240, 276 226" />
          <line x1={252} y1={326} x2={238} y2={186} {...amberDash} />
          <circle cx={192} cy={180} r={3.2} fill="var(--amber)" />
          <path {...amberLine} d="M196 118 L244 118" />
          <path {...amberLine} d="M236 112 L244 118 L236 124" />
          <text x={198} y={110} {...label}>
            desloca lateral
          </text>
          <text x={40} y={250} {...label}>
            galho verde
          </text>
          <text x={40} y={264} {...label}>
            metafisário
          </text>
        </>
      ) : (
        <>
          {/* perfil: tróclea posterior + capítulo */}
          <circle {...boneBack} cx={148} cy={182} r={26} />
          <circle {...bone} cx={190} cy={180} r={24} />
        </>
      )}

      {v === "I" && (
        <>
          {/* ulna diafisária, ápice anterior (direita) */}
          <path
            {...boneBack}
            d="M112 150 C100 160, 98 184, 106 202 C112 226, 122 246, 134 258 C140 282, 140 310, 138 334 L162 336 C164 302, 158 272, 148 252 C140 238, 136 224, 136 210 C110 238, 100 208, 112 150 Z"
          />
          <path {...corticalStroke} d="M110 248 L142 260" />
          {/* cabeça do rádio luxada anteriormente */}
          <path
            {...bone}
            d="M196 126 C190 120, 192 112, 202 108 L226 102 C236 100, 242 106, 242 114 L246 134 L244 148 L250 168 C258 200, 268 250, 276 300 L300 292 C288 244, 278 196, 272 166 L262 136 L258 120 C254 110, 244 106, 234 106 Z"
          />
          <path {...physis} d="M198 140 L260 126" />
          <line x1={264} y1={292} x2={220} y2={110} {...amberDash} />
          <circle cx={190} cy={180} r={3.2} fill="var(--amber)" />
          <path {...amberLine} d="M78 96 L128 96" />
          <path {...amberLine} d="M120 90 L128 96 L120 102" />
          <text x={40} y={88} {...label}>
            anterior
          </text>
          <text x={40} y={280} {...label}>
            ápice
          </text>
          <text x={40} y={294} {...label}>
            anterior
          </text>
        </>
      )}

      {v === "II" && (
        <>
          {/* ulna diafisária, ápice posterior (esquerda) */}
          <path
            {...boneBack}
            d="M112 150 C100 160, 98 184, 106 202 C104 226, 98 248, 92 262 C96 288, 108 314, 120 334 L142 324 C130 302, 122 280, 120 262 C120 246, 126 226, 132 212 C110 238, 100 208, 112 150 Z"
          />
          <path {...corticalStroke} d="M90 250 L126 244" />
          {/* cabeça do rádio luxada posteriormente — passa por trás da ulna */}
          <path
            {...boneBack}
            d="M120 118 C114 112, 116 104, 126 100 L150 96 C160 96, 166 102, 166 110 L168 130 L166 144 L174 164 C190 210, 214 262, 236 306 L258 294 C236 250, 214 202, 200 162 L188 132 L184 116 C180 106, 170 100, 160 100 Z"
          />
          <path {...physis} d="M122 132 L184 122" />
          <line x1={248} y1={300} x2={146} y2={104} {...amberDash} />
          <circle cx={190} cy={180} r={3.2} fill="var(--amber)" />
          <path {...amberLine} d="M282 96 L232 96" />
          <path {...amberLine} d="M240 90 L232 96 L240 102" />
          <text x={288} y={88} {...label}>
            posterior
          </text>
          <text x={272} y={252} {...label}>
            ápice
          </text>
          <text x={272} y={266} {...label}>
            posterior
          </text>
        </>
      )}

      {v === "IV" && (
        <>
          {/* ulna diafisária fraturada */}
          <path
            {...boneBack}
            d="M112 150 C100 160, 98 184, 106 202 C112 226, 120 246, 130 258 C136 284, 138 310, 136 334 L160 336 C162 302, 156 272, 146 252 C138 238, 134 224, 134 210 C110 238, 100 208, 112 150 Z"
          />
          <path {...corticalStroke} d="M110 250 L140 258" />
          {/* rádio: cabeça luxada anterior E diáfise fraturada no mesmo nível */}
          <path
            {...bone}
            d="M196 126 C190 120, 192 112, 202 108 L226 102 C236 100, 242 106, 242 114 L246 134 L244 148 L252 176 C258 206, 264 232, 268 252 L292 246 C286 220, 278 190, 272 166 L262 136 L258 120 C254 110, 244 106, 234 106 Z"
          />
          <path
            {...bone}
            d="M266 268 C270 292, 276 316, 282 336 L306 330 C300 308, 294 286, 290 264 Z"
          />
          <path {...physis} d="M198 140 L260 126" />
          <path {...corticalStroke} d="M264 258 L296 250" />
          <line x1={260} y1={244} x2={220} y2={110} {...amberDash} />
          <circle cx={190} cy={180} r={3.2} fill="var(--amber)" />
          <text x={38} y={280} {...label}>
            ulna
          </text>
          <text x={38} y={294} {...label}>
            fraturada
          </text>
          <text x={300} y={286} {...label}>
            rádio
          </text>
          <text x={300} y={300} {...label}>
            fraturado
          </text>
        </>
      )}

      <text x={180} y={354} {...label} textAnchor="middle">
        {copy.foot}
      </text>
    </svg>
  );
};

/* --------------------------------------------------------------------------
   4 · Padrão da fratura da ulna — a estratégia de Ring/Waters
   variant: "plastica" | "galho-verde" | "transversa" | "obliqua"
   ------------------------------------------------------------------------ */
const ulnarCopy: Record<string, { head: string; rx: string }> = {
  plastica: {
    head: "Deformação plástica",
    rx: "redução fechada + gesso",
  },
  "galho-verde": {
    head: "Galho verde / incompleta",
    rx: "redução fechada + gesso",
  },
  transversa: {
    head: "Transversa / oblíqua curta",
    rx: "haste intramedular",
  },
  obliqua: {
    head: "Oblíqua longa / cominuta",
    rx: "placa e parafusos",
  },
};

export const UlnarPattern: FC<FigureProps> = ({ className, title, variant }) => {
  const v = variant && ulnarCopy[variant] ? variant : "plastica";
  const copy = ulnarCopy[v];

  return (
    <svg
      viewBox="0 0 300 340"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>
        {title ??
          `Padrão da fratura da ulna (${copy.head}) e o tratamento correspondente: ${copy.rx}`}
      </title>
      <text x={150} y={20} {...mono} textAnchor="middle">
        {copy.head}
      </text>
      <text x={150} y={36} {...label} textAnchor="middle">
        o padrão da ULNA decide a fixação
      </text>

      {v === "plastica" && (
        <>
          {/* ulna encurvada sem traço visível */}
          <path
            {...bone}
            d="M118 60 C104 66, 100 84, 106 100 C122 152, 142 200, 158 246 C166 268, 170 292, 170 314 L196 314 C196 288, 190 260, 180 236 C162 192, 142 146, 130 104 C126 88, 130 70, 142 62 Z"
          />
          {/* eixo reto de referência x eixo encurvado */}
          <line x1={128} y1={70} x2={182} y2={312} {...amberDash} />
          <path {...amberLine} d="M126 74 C146 150, 162 236, 176 308" />
          <text x={206} y={170} {...label}>
            encurvamento
          </text>
          <text x={206} y={184} {...label}>
            sem traço
          </text>
          <text x={206} y={198} {...label}>
            visível
          </text>
          <text x={30} y={110} {...label}>
            comparar
          </text>
          <text x={30} y={124} {...label}>
            com o lado
          </text>
          <text x={30} y={138} {...label}>
            contralateral
          </text>
        </>
      )}

      {v === "galho-verde" && (
        <>
          <path
            {...bone}
            d="M118 60 C104 66, 100 84, 106 100 C120 148, 138 196, 152 240 C160 266, 164 292, 164 314 L190 314 C190 288, 184 260, 174 234 C158 190, 140 144, 130 104 C126 88, 130 70, 142 62 Z"
          />
          {/* cortical convexa rompida, côncava intacta */}
          <path {...corticalStroke} d="M150 190 L172 182" />
          <path {...ligament} d="M140 196 C146 200, 152 202, 158 202" />
          <text x={200} y={176} {...label}>
            cortical de
          </text>
          <text x={200} y={190} {...label}>
            tração rompida
          </text>
          <text x={26} y={214} {...label}>
            cortical
          </text>
          <text x={26} y={228} {...label}>
            côncava
          </text>
          <text x={26} y={242} {...label}>
            íntegra
          </text>
        </>
      )}

      {v === "transversa" && (
        <>
          <path
            {...bone}
            d="M120 60 C106 62, 100 76, 104 92 L128 190 L156 184 L138 84 C136 68, 134 60, 120 60 Z"
          />
          <path
            {...bone}
            d="M130 202 L158 196 L176 296 C178 310, 172 316, 160 316 C148 316, 144 308, 142 296 Z"
          />
          <path {...corticalStroke} d="M126 196 L160 190" />
          <text x={198} y={192} {...label}>
            traço transverso
          </text>
          <text x={198} y={206} {...label}>
            = instável em rotação,
          </text>
          <text x={198} y={220} {...label}>
            estável em comprimento
          </text>
        </>
      )}

      {v === "obliqua" && (
        <>
          <path
            {...bone}
            d="M120 60 C106 62, 100 76, 104 92 L132 208 L160 196 L138 84 C136 68, 134 60, 120 60 Z"
          />
          <path
            {...bone}
            d="M126 220 L156 208 L176 296 C178 310, 172 316, 160 316 C148 316, 144 308, 142 296 Z"
          />
          <path {...corticalStroke} d="M124 216 L162 194" />
          <path {...corticalStroke} d="M134 224 L150 218" />
          <text x={196} y={200} {...label}>
            oblíqua longa
          </text>
          <text x={196} y={214} {...label}>
            = encurta e roda;
          </text>
          <text x={196} y={228} {...label}>
            a haste não segura
          </text>
        </>
      )}

      <text x={150} y={334} {...mono} textAnchor="middle">
        → {copy.rx}
      </text>
    </svg>
  );
};

/* --------------------------------------------------------------------------
   5 · Redução no agudo — reduzir a ulna reduz a cabeça do rádio
   activeStep destaca o painel correspondente
   ------------------------------------------------------------------------ */
export const AcuteReduction: FC<FigureProps> = ({ className, title, activeStep }) => {
  const before = !activeStep || activeStep <= 2 ? 1 : 0.34;
  const after = !activeStep || activeStep >= 3 ? 1 : 0.34;

  return (
    <svg
      viewBox="0 0 480 330"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>
        {title ??
          "Princípio da redução no agudo: restaurar o comprimento e a curvatura da ulna reduz a cabeça do rádio"}
      </title>
      <text x={240} y={20} {...mono} textAnchor="middle">
        reduzir a ULNA anatomicamente reduz a cabeça do rádio
      </text>

      {/* ---- antes ---- */}
      <g opacity={before}>
        <text x={112} y={44} {...mono} textAnchor="middle">
          antes
        </text>
        <path
          {...bone}
          d="M58 62 C46 64, 42 76, 46 90 L64 152 C66 166, 76 174, 90 176 L148 172 C160 170, 164 158, 158 148 L92 70 C86 60, 70 60, 58 62 Z"
        />
        <path {...physis} d="M68 158 C88 168, 118 170, 144 164" />
        <circle {...bone} cx={130} cy={186} r={24} />
        {/* ulna curta e angulada */}
        <path
          {...boneBack}
          d="M58 152 C46 162, 44 186, 52 204 C58 226, 68 246, 80 258 C86 280, 86 300, 84 314 L106 316 C108 288, 102 262, 94 248 C86 236, 82 224, 82 210 C56 238, 46 210, 58 152 Z"
        />
        <path {...corticalStroke} d="M56 248 L88 260" />
        {/* cabeça do rádio luxada */}
        <path
          {...bone}
          d="M136 128 C130 122, 132 114, 142 110 L164 104 C174 102, 180 108, 180 116 L184 136 L182 150 L188 170 C196 200, 204 244, 210 288 L232 282 C222 240, 214 196, 208 168 L200 138 L196 122 C192 112, 182 108, 172 108 Z"
        />
        <path {...physis} d="M138 142 L198 128" />
        <line x1={198} y1={284} x2={158} y2={112} {...amberDash} />
        <circle cx={130} cy={186} r={3} fill="var(--amber)" />
        <text x={20} y={296} {...label}>
          ulna curta
        </text>
        <text x={20} y={310} {...label}>
          e angulada
        </text>
      </g>

      {/* seta central */}
      <path {...amberLine} d="M236 190 L268 190" />
      <path {...amberLine} d="M260 183 L268 190 L260 197" />

      {/* ---- depois ---- */}
      <g opacity={after}>
        <text x={366} y={44} {...mono} textAnchor="middle">
          depois
        </text>
        <path
          {...bone}
          d="M298 62 C286 64, 282 76, 286 90 L304 152 C306 166, 316 174, 330 176 L388 172 C400 170, 404 158, 398 148 L332 70 C326 60, 310 60, 298 62 Z"
        />
        <path {...physis} d="M308 158 C328 168, 358 170, 384 164" />
        <circle {...bone} cx={370} cy={186} r={24} />
        {/* ulna reduzida, comprimento e curvatura restaurados */}
        <path
          {...boneBack}
          d="M298 152 C286 162, 284 186, 292 204 C298 240, 306 276, 314 314 L338 312 C332 274, 326 238, 320 208 C296 238, 286 210, 298 152 Z"
        />
        <path {...ligament} d="M296 250 L324 246" />
        {/* rádio reduzido — cabeça sob o capítulo */}
        <path
          {...bone}
          d="M352 214 C350 206, 356 200, 366 199 L386 199 C396 200, 400 207, 398 215 L396 236 L392 250 C394 276, 400 296, 404 314 L426 310 C420 284, 416 258, 414 240 L410 216 C408 206, 400 200, 390 198 Z"
        />
        <path {...physis} d="M354 232 L410 230" />
        <path {...ligament} d="M350 244 C360 254, 406 254, 414 242" />
        <line x1={382} y1={308} x2={370} y2={152} {...amberDash} />
        <circle cx={370} cy={186} r={3} fill="var(--amber)" />
        <text x={432} y={186} {...label}>
          reduzida
        </text>
      </g>

      <text x={240} y={326} {...label} textAnchor="middle">
        gesso axilopalmar em flexão 90–110° e supinação; radiografias semanais nas primeiras 3 semanas
      </text>
    </svg>
  );
};

/* --------------------------------------------------------------------------
   6 · Fixação da ulna — haste intramedular x placa
   variant: "haste" | "placa"
   ------------------------------------------------------------------------ */
export const Fixation: FC<FigureProps> = ({ className, title, variant }) => {
  const v = variant === "placa" ? "placa" : "haste";

  return (
    <svg
      viewBox="0 0 300 340"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>
        {title ??
          (v === "haste"
            ? "Fixação da ulna com haste intramedular em fratura transversa"
            : "Fixação da ulna com placa e parafusos em fratura oblíqua longa")}
      </title>
      <text x={150} y={20} {...mono} textAnchor="middle">
        {v === "haste" ? "haste intramedular" : "placa e parafusos"}
      </text>
      <text x={150} y={36} {...label} textAnchor="middle">
        {v === "haste"
          ? "traço transverso / oblíquo curto"
          : "traço oblíquo longo / cominuto"}
      </text>

      {/* ulna: olécrano em cima, diáfise descendo */}
      <path
        {...bone}
        d="M118 56 C102 62, 96 84, 102 104 L120 172 L124 214 C128 254, 134 292, 140 318 L166 314 C160 286, 154 250, 152 212 L150 168 L146 108 C144 88, 136 62, 118 56 Z"
      />
      <path {...physis} d="M112 62 C124 56, 138 58, 148 66" />

      {v === "haste" ? (
        <>
          <path {...corticalStroke} d="M120 202 L152 198" />
          {/* haste entrando pelo olécrano, cruzando o traço */}
          <path
            d="M128 74 C130 120, 134 170, 140 220 C144 260, 148 292, 152 310"
            fill="none"
            stroke="var(--amber)"
            strokeWidth={3}
            strokeLinecap="round"
          />
          <circle cx={128} cy={74} r={4} fill="none" stroke="var(--amber)" strokeWidth={2} />
          <text x={182} y={90} {...label}>
            entrada pelo
          </text>
          <text x={182} y={104} {...label}>
            olécrano (poupa
          </text>
          <text x={182} y={118} {...label}>
            a apófise)
          </text>
          <text x={182} y={200} {...label}>
            controla o
          </text>
          <text x={182} y={214} {...label}>
            alinhamento;
          </text>
          <text x={182} y={228} {...label}>
            não a rotação
          </text>
        </>
      ) : (
        <>
          <path {...corticalStroke} d="M118 226 L152 190" />
          {/* placa dorsal com parafusos */}
          <rect
            x={150}
            y={122}
            width={16}
            height={168}
            rx={7}
            fill="none"
            stroke="var(--amber)"
            strokeWidth={2.4}
          />
          {[142, 168, 194, 244, 270].map((y) => (
            <line
              key={y}
              x1={162}
              y1={y}
              x2={116}
              y2={y - 4}
              stroke="var(--amber)"
              strokeWidth={2}
              strokeLinecap="round"
            />
          ))}
          <text x={186} y={150} {...label}>
            placa moldada
          </text>
          <text x={186} y={164} {...label}>
            na borda
          </text>
          <text x={186} y={178} {...label}>
            subcutânea
          </text>
          <text x={186} y={252} {...label}>
            restaura
          </text>
          <text x={186} y={266} {...label}>
            comprimento
          </text>
          <text x={186} y={280} {...label}>
            e rotação
          </text>
        </>
      )}

      <text x={150} y={334} {...label} textAnchor="middle">
        confirmar a redução radiocapitelar ao final, em todas as incidências
      </text>
    </svg>
  );
};

/* --------------------------------------------------------------------------
   7 · Monteggia crônica — osteotomia de alongamento/angulação da ulna
   ------------------------------------------------------------------------ */
export const ChronicOsteotomy: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 480 350"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>
      {title ??
        "Monteggia crônica: osteotomia da ulna com alongamento e angulação de ápice posterior, reduzindo a cabeça do rádio"}
    </title>
    <text x={240} y={20} {...mono} textAnchor="middle">
      Monteggia crônica · osteotomia da ulna
    </text>

    {/* ---- antes: ulna curta, cabeça luxada e deformada ---- */}
    <text x={112} y={44} {...mono} textAnchor="middle">
      antes
    </text>
    <path
      {...bone}
      d="M58 62 C46 64, 42 76, 46 90 L64 152 C66 166, 76 174, 90 176 L148 172 C160 170, 164 158, 158 148 L92 70 C86 60, 70 60, 58 62 Z"
    />
    <path {...physis} d="M68 158 C88 168, 118 170, 144 164" />
    <circle {...bone} cx={130} cy={186} r={24} />
    {/* ulna consolidada curta, ápice anterior residual */}
    <path
      {...boneBack}
      d="M58 152 C46 162, 44 186, 52 204 C58 232, 68 256, 78 272 C82 292, 82 308, 80 320 L102 322 C104 296, 98 272, 90 258 C82 244, 78 230, 78 212 C56 238, 46 210, 58 152 Z"
    />
    {/* cabeça do rádio luxada, arredondada/deformada */}
    <path
      {...bone}
      d="M140 126 C132 118, 134 108, 146 104 L170 100 C182 100, 188 108, 188 118 L192 138 L190 152 L196 172 C204 202, 212 246, 218 292 L240 286 C230 244, 222 200, 216 170 L208 140 L204 122 C200 112, 190 106, 178 106 Z"
    />
    <path {...physis} d="M142 142 L204 130" />
    {/* seta de encurtamento */}
    <path {...amberLine} d="M28 210 L28 322" />
    <path {...amberLine} d="M22 218 L28 210 L34 218" />
    <path {...amberLine} d="M22 314 L28 322 L34 314" />
    <text x={16} y={200} {...label}>
      ulna curta
    </text>
    <text x={124} y={92} {...label}>
      cabeça luxada,
    </text>
    <text x={124} y={78} {...label}>
      já deformada
    </text>

    {/* seta central */}
    <path {...amberLine} d="M244 190 L276 190" />
    <path {...amberLine} d="M268 183 L276 190 L268 197" />

    {/* ---- depois: osteotomia com alongamento + angulação ápice posterior ---- */}
    <text x={372} y={44} {...mono} textAnchor="middle">
      depois
    </text>
    <path
      {...bone}
      d="M304 62 C292 64, 288 76, 292 90 L310 152 C312 166, 322 174, 336 176 L394 172 C406 170, 410 158, 404 148 L338 70 C332 60, 316 60, 304 62 Z"
    />
    <path {...physis} d="M314 158 C334 168, 364 170, 390 164" />
    <circle {...bone} cx={376} cy={186} r={24} />

    {/* ulna proximal */}
    <path
      {...boneBack}
      d="M304 152 C292 162, 290 186, 298 204 C300 216, 304 228, 308 238 L332 232 C328 222, 326 216, 326 208 C302 238, 292 210, 304 152 Z"
    />
    {/* fragmento distal deslocado — alongado e angulado com ápice posterior */}
    <path
      {...boneBack}
      d="M306 252 L332 246 C338 276, 344 306, 348 332 L324 336 C318 308, 312 278, 306 252 Z"
    />
    {/* traço da osteotomia + cunha de abertura */}
    <path {...corticalStroke} d="M304 244 L334 238" />
    {/* placa mantendo a correção */}
    <rect
      x={286}
      y={198}
      width={14}
      height={126}
      rx={6}
      fill="none"
      stroke="var(--amber)"
      strokeWidth={2.2}
    />
    {[210, 228, 264, 296].map((y) => (
      <line
        key={y}
        x1={298}
        y1={y}
        x2={332}
        y2={y - 3}
        stroke="var(--amber)"
        strokeWidth={2}
        strokeLinecap="round"
      />
    ))}
    {/* rádio reduzido */}
    <path
      {...bone}
      d="M358 214 C356 206, 362 200, 372 199 L392 199 C402 200, 406 207, 404 215 L402 236 L398 250 C400 280, 406 306, 410 330 L432 324 C426 296, 422 268, 420 240 L416 216 C414 206, 406 200, 396 198 Z"
    />
    <path {...physis} d="M360 232 L416 230" />
    {/* ligamento anular reconstruído */}
    <path {...ligament} d="M356 246 C366 258, 412 258, 420 244" />
    <path {...ligament} d="M356 246 C366 234, 412 234, 420 244" />
    <line x1={392} y1={326} x2={376} y2={152} {...amberDash} />
    <circle cx={376} cy={186} r={3} fill="var(--amber)" />
    <text x={438} y={186} {...label}>
      reduzida
    </text>
    <text x={438} y={252} {...label}>
      ligamento
    </text>
    <text x={438} y={266} {...label}>
      anular
    </text>
    <text x={240} y={280} {...label}>
      alongar
    </text>
    <text x={240} y={294} {...label}>
      + angular
    </text>
    <text x={240} y={308} {...label}>
      (ápice post.)
    </text>

    <text x={240} y={346} {...label} textAnchor="middle">
      alongamento e angulação proporcionais ao tempo desde a lesão: quanto mais tardia, mais correção é preciso
    </text>
  </svg>
);

/* --------------------------------------------------------------------------
   8 · Correção gradual com fixador externo monolateral
   ------------------------------------------------------------------------ */
export const ExternalFixator: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 340 340"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>
      {title ??
        "Osteotomia da ulna com fixador externo monolateral para alongamento e angulação gradual da ulna"}
    </title>
    <text x={170} y={20} {...mono} textAnchor="middle">
      correção gradual · fixador monolateral
    </text>

    {/* capítulo de referência */}
    <circle {...bone} cx={210} cy={62} r={22} />
    <text x={236} y={58} {...label}>
      capítulo
    </text>

    {/* ulna: fragmento proximal */}
    <path
      {...bone}
      d="M110 50 C94 56, 88 78, 94 98 L108 158 L136 152 L126 96 C124 76, 128 58, 110 50 Z"
    />
    <path {...physis} d="M104 56 C116 50, 130 52, 140 60" />
    {/* fragmento distal, já distraído (gap visível) */}
    <path
      {...bone}
      d="M116 194 L144 188 L160 288 C162 302, 156 310, 144 310 C132 310, 128 302, 126 290 Z"
    />
    {/* zona de distração (regenerado) */}
    <path {...corticalStroke} d="M106 162 L138 156" />
    <path {...corticalStroke} d="M114 190 L146 184" />
    {[166, 172, 178, 184].map((y) => (
      <line
        key={y}
        x1={108}
        y1={y}
        x2={142}
        y2={y - 5}
        stroke="var(--teal)"
        strokeWidth={1.6}
        opacity={0.75}
      />
    ))}

    {/* pinos + corpo do fixador */}
    {[102, 132, 214, 262].map((y) => (
      <line
        key={y}
        x1={66}
        y1={y}
        x2={140}
        y2={y - 6}
        stroke="var(--amber)"
        strokeWidth={2.4}
        strokeLinecap="round"
      />
    ))}
    <rect
      x={48}
      y={88}
      width={16}
      height={62}
      rx={5}
      fill="none"
      stroke="var(--amber)"
      strokeWidth={2.2}
    />
    <rect
      x={48}
      y={198}
      width={16}
      height={78}
      rx={5}
      fill="none"
      stroke="var(--amber)"
      strokeWidth={2.2}
    />
    {/* articulação/haste de distração entre os corpos */}
    <line x1={56} y1={150} x2={56} y2={198} {...amberLine} />
    <circle cx={56} cy={174} r={6} fill="none" stroke="var(--amber)" strokeWidth={2} />

    {/* rádio, cuja cabeça migra até reduzir */}
    <path
      {...boneBack}
      d="M192 96 C190 88, 196 82, 206 81 L226 81 C236 82, 240 89, 238 97 L236 118 L232 132 C234 176, 240 240, 246 296 L268 292 C260 236, 254 174, 252 130 L250 100 C248 90, 240 82, 230 80 Z"
    />
    <path {...physis} d="M194 114 L250 112" />
    <path {...ligament} d="M190 128 C200 140, 246 140, 254 126" />
    <line x1={252} y1={292} x2={210} y2={84} {...amberDash} />
    <circle cx={210} cy={62} r={3} fill="var(--amber)" />

    <text x={166} y={172} {...label}>
      distração
    </text>
    <text x={166} y={186} {...label}>
      ~1 mm/dia
    </text>
    <text x={276} y={172} {...label}>
      a cabeça
    </text>
    <text x={276} y={186} {...label}>
      do rádio
    </text>
    <text x={276} y={200} {...label}>
      reduz aos
    </text>
    <text x={276} y={214} {...label}>
      poucos
    </text>
    <text x={20} y={300} {...label}>
      corpo
    </text>
    <text x={20} y={314} {...label}>
      monolateral
    </text>

    <text x={170} y={334} {...label} textAnchor="middle">
      a redução gradual evita a força excessiva sobre uma cabeça do rádio já remodelada
    </text>
  </svg>
);

/* -------------------------------------------------------------------------- */

export const figures: Record<string, FC<FigureProps>> = {
  "monteggia-crianca:anatomia": Anatomy,
  "monteggia-crianca:linha-radiocapitelar": RadiocapitellarLine,
  "monteggia-crianca:bado": Bado,
  "monteggia-crianca:padrao-ulnar": UlnarPattern,
  "monteggia-crianca:reducao-aguda": AcuteReduction,
  "monteggia-crianca:fixacao": Fixation,
  "monteggia-crianca:osteotomia-cronica": ChronicOsteotomy,
  "monteggia-crianca:fixador-externo": ExternalFixator,
};
