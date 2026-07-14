import type { FC } from "react";
import type { FigureProps } from "../../../types/topic";

/* ----------------------------------------------------------------------------
   Fratura do áxis (processo odontoide) — figuras esquemáticas originais
   (line-art 2 tons). Fundamentadas em Rockwood & Green's Fractures in Adults,
   10th ed. (2024) e Campbell's Operative Orthopaedics, 14th ed. (2021).
   Sem reprodução de material protegido. Cores apenas por CSS var.
   -------------------------------------------------------------------------- */

const bone = {
  fill: "var(--surface)",
  stroke: "var(--ink-soft)",
  strokeWidth: 1.8,
  strokeLinejoin: "round" as const,
};

const boneBack = {
  fill: "var(--surface-2, var(--surface))",
  stroke: "var(--ink-soft)",
  strokeWidth: 1.3,
  strokeLinejoin: "round" as const,
};

const label = {
  fill: "var(--muted)",
  fontFamily: "var(--font-body, sans-serif)",
  fontSize: 11,
};

const neural = {
  fill: "none",
  stroke: "var(--teal)",
  strokeWidth: 2.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const neuralFill = {
  fill: "var(--teal-tint, var(--surface-2))",
  stroke: "var(--teal)",
  strokeWidth: 1.8,
  strokeLinejoin: "round" as const,
};

const fracture = {
  fill: "none",
  stroke: "var(--cortical)",
  strokeWidth: 3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const vessel = {
  fill: "none",
  stroke: "var(--cortical)",
  strokeWidth: 2.2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const measure = {
  fill: "none",
  stroke: "var(--amber)",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
};

const measureText = {
  fill: "var(--amber)",
  fontFamily: "var(--font-body, sans-serif)",
  fontSize: 11,
};

const implant = {
  fill: "var(--surface-2, var(--surface))",
  stroke: "var(--ink)",
  strokeWidth: 1.6,
  strokeLinejoin: "round" as const,
};

/* ==========================================================================
   Geometrias reutilizáveis
   ========================================================================== */

/* Corpo do áxis + processo odontoide, corte sagital mediano, anterior à
   esquerda. Note a cintura estreita na base do dente — a zona da fratura
   tipo II. */
function axisBodySagittal(): string {
  return `M 200 118
    C 200 104 234 104 234 118
    L 235 150
    C 235 168 233 175 232 185
    C 238 192 244 196 248 204
    L 250 268
    L 190 270
    L 184 284 L 176 284 L 178 266
    L 181 200
    C 183 192 191 188 198 184
    C 199 160 199 134 200 118 Z`;
}

/* Lâmina + processo espinhoso bífido do áxis (sagital mediano). */
function axisPosteriorSagittal(): string {
  return `M 290 208
    C 302 204 318 208 332 216
    C 358 228 390 248 408 262
    L 396 267
    L 404 279
    L 380 272
    C 352 262 322 246 306 240
    C 296 236 288 230 289 220 Z`;
}

/* Áxis em incidência coronal (frontal): dente ascendendo entre as facetas
   articulares superiores. */
function axisCoronal(): string {
  return `M 250 96
    C 237 96 231 104 231 116
    L 230 174
    C 230 187 227 194 219 199
    C 206 202 191 205 181 211
    C 173 216 171 224 175 231
    L 179 276
    C 179 282 184 286 191 286
    L 309 286
    C 316 286 321 282 321 276
    L 325 231
    C 329 224 327 216 319 211
    C 309 205 294 202 281 199
    C 273 194 270 187 270 174
    L 269 116
    C 269 104 263 96 250 96 Z`;
}

/* Medula espinal atravessando o canal (sagital). */
const cordSagittal = `M 258 56
  C 255 100 255 150 257 190
  C 258 240 258 280 257 312
  L 289 312
  C 288 280 288 240 289 190
  C 291 150 291 100 288 56 Z`;

/* Corpo de C3 (sagital). */
function c3Sagittal(): string {
  return `M 186 292
    L 250 290
    L 250 344
    L 188 346
    L 182 336
    L 184 300 Z`;
}

/* --- Parafuso genérico, desenhado ao longo de um eixo arbitrário ---------- */

interface ScrewProps {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  r?: number;
  /** Fração do comprimento a partir da qual começa a rosca (0–1). */
  threadFrom?: number;
  head?: boolean;
}

function Screw({ x1, y1, x2, y2, r = 4.5, threadFrom = 0.55, head = true }: ScrewProps) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.hypot(dx, dy);
  const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
  const start = len * threadFrom;
  const teeth: number[] = [];
  for (let t = start; t < len - 8; t += 7) teeth.push(t);

  return (
    <g transform={`translate(${x1} ${y1}) rotate(${angle})`}>
      <path d={`M 0 ${-r} L ${len - 4} ${-r} L ${len + 5} 0 L ${len - 4} ${r} L 0 ${r} Z`} {...implant} />
      {teeth.map((t) => (
        <g key={t}>
          <path d={`M ${t} ${-r} L ${t + 3.5} ${-r - 4} L ${t + 7} ${-r}`} {...implant} fill="none" />
          <path d={`M ${t} ${r} L ${t + 3.5} ${r + 4} L ${t + 7} ${r}`} {...implant} fill="none" />
        </g>
      ))}
      {head ? <path d={`M -5 ${-r - 3.5} L 5 ${-r - 3.5} L 5 ${r + 3.5} L -5 ${r + 3.5} Z`} {...implant} /> : null}
    </g>
  );
}

/* ==========================================================================
   1. Anatomia — variantes "sagital" (padrão) e "coronal"
   ========================================================================== */

const Anatomy: FC<FigureProps> = ({ variant, className, title }) => {
  const coronal = variant === "coronal";

  if (coronal) {
    return (
      <svg
        viewBox="60 40 560 285"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>{title ?? "Complexo C1–C2 em incidência coronal: dente, ligamentos alares e ligamento transverso"}</title>

        {/* Base do crânio e côndilos occipitais */}
        <path d="M 150 92 C 200 76 300 76 350 92" fill="none" stroke="var(--ink-soft)" strokeWidth="2.2" strokeLinecap="round" />
        <ellipse cx="192" cy="98" rx="17" ry="8" {...boneBack} />
        <ellipse cx="308" cy="98" rx="17" ry="8" {...boneBack} />

        {/* Áxis */}
        <path d={axisCoronal()} {...bone} />

        {/* Massas laterais de C1 */}
        <path d="M 158 150 L 224 150 L 222 196 L 160 196 Z" {...boneBack} />
        <path d="M 276 150 L 342 150 L 340 196 L 278 196 Z" {...boneBack} />
        {/* Arco anterior de C1, cruzando à frente do dente */}
        <path d="M 172 140 L 328 140 L 328 156 L 172 156 Z" {...bone} />

        {/* Ligamentos alares — dente ao côndilo occipital */}
        <path d="M 232 118 C 216 112 202 104 194 98" {...neural} />
        <path d="M 268 118 C 284 112 298 104 306 98" {...neural} />

        {/* Ligamento transverso — passa POR TRÁS do dente (trecho oculto tracejado) */}
        <path d="M 222 174 L 230 174" {...neural} />
        <path d="M 230 174 L 270 174" {...neural} strokeDasharray="4 4" />
        <path d="M 270 174 L 278 174" {...neural} />
        <circle cx="220" cy="174" r="3.5" fill="var(--teal)" />
        <circle cx="280" cy="174" r="3.5" fill="var(--teal)" />

        {/* Articulações atlantoaxiais laterais */}
        <path d="M 168 198 L 216 200" {...neural} strokeWidth="2" />
        <path d="M 284 200 L 332 198" {...neural} strokeWidth="2" />

        <text x="250" y="70" {...label} textAnchor="middle">base do crânio</text>
        <text x="370" y="98" {...label}>côndilo occipital</text>
        <text x="370" y="128" {...label}>lig. alares (freiam a rotação)</text>
        <text x="370" y="150" {...label}>arco anterior de C1</text>
        <text x="370" y="178" {...label}>lig. transverso (posterior ao dente)</text>
        <text x="370" y="204" {...label}>art. atlantoaxial lateral</text>
        <text x="370" y="232" {...label}>massa lateral de C1</text>
        <text x="370" y="262" {...label}>faceta articular superior de C2</text>
        <text x="370" y="288" {...label}>corpo do áxis</text>

        <path d="M 366 124 L 300 112" {...measure} strokeWidth="1" />
        <path d="M 366 174 L 286 174" {...measure} strokeWidth="1" />
        <path d="M 366 228 L 340 190" {...measure} strokeWidth="1" />
        <path d="M 366 258 L 300 206" {...measure} strokeWidth="1" />
        <path d="M 366 284 L 320 264" {...measure} strokeWidth="1" />

        <text x="250" y="150" {...label} textAnchor="middle" fill="var(--ink-soft)">dente</text>
      </svg>
    );
  }

  return (
    <svg
      viewBox="100 10 500 360"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? "Corte sagital mediano da junção craniocervical: dente do áxis, ligamento transverso e medula"}</title>

      {/* Clivo e occipital — bordas do forame magno */}
      <path d="M 126 30 C 156 50 186 70 207 86" fill="none" stroke="var(--ink-soft)" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M 296 96 C 330 88 360 70 384 46" fill="none" stroke="var(--ink-soft)" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="207" cy="86" r="3" fill="var(--ink-soft)" />
      <circle cx="296" cy="96" r="3" fill="var(--ink-soft)" />

      {/* Medula / bulbo */}
      <path d={cordSagittal} {...neuralFill} />

      {/* Elementos posteriores do áxis */}
      <path d={axisPosteriorSagittal()} {...bone} />

      {/* Arco posterior de C1 + tubérculo posterior */}
      <ellipse cx="308" cy="132" rx="17" ry="12" transform="rotate(-12 308 132)" {...bone} />
      <path d="M 320 140 L 338 148 L 334 157 L 315 148 Z" {...bone} />

      {/* Áxis: corpo + dente */}
      <path d={axisBodySagittal()} {...bone} />

      {/* Arco anterior de C1 + tubérculo anterior */}
      <ellipse cx="184" cy="126" rx="12" ry="18" {...bone} />
      <path d="M 176 118 L 164 122 L 164 132 L 176 136 Z" {...bone} />

      {/* Ligamento transverso, em corte (retém o dente contra o arco anterior) */}
      <ellipse cx="244" cy="126" rx="8" ry="13" {...neuralFill} />

      {/* Ligamento apical: ápice do dente ao básio */}
      <path d="M 217 104 L 209 89" {...neural} strokeWidth="2.2" />

      {/* Disco C2–C3 e corpo de C3 */}
      <path d={c3Sagittal()} {...bone} />
      <path d="M 184 274 L 250 272 L 250 288 L 186 290 Z" {...neuralFill} />

      {/* Intervalo atlanto-dental (IAD) */}
      <path d="M 196 150 L 196 164" {...measure} />
      <path d="M 200 150 L 200 164" {...measure} />
      <path d="M 198 164 L 176 186" {...measure} strokeWidth="1" />
      <text x="120" y="196" {...measureText}>IAD &lt; 3 mm (adulto)</text>

      <text x="150" y="24" {...label}>clivo</text>
      <text x="212" y="76" {...label}>básio</text>
      <text x="300" y="88" {...label}>opístio</text>
      <text x="360" y="30" {...label}>occipital</text>

      <text x="424" y="118" {...label}>arco posterior de C1</text>
      <path d="M 420 114 L 330 128" {...measure} strokeWidth="1" />

      <text x="424" y="142" {...label}>lig. transverso (em corte)</text>
      <path d="M 420 138 L 254 128" {...measure} strokeWidth="1" />

      <text x="424" y="166" {...label}>medula espinal</text>
      <path d="M 420 162 L 292 160" {...measure} strokeWidth="1" />

      <text x="424" y="200" {...label}>base do dente — zona da fratura tipo II</text>
      <path d="M 420 196 L 240 190" {...measure} strokeWidth="1" />

      <text x="424" y="262" {...label}>corpo do áxis</text>
      <path d="M 420 258 L 252 244" {...measure} strokeWidth="1" />

      <text x="424" y="300" {...label}>proc. espinhoso bífido de C2</text>
      <path d="M 420 296 L 400 278" {...measure} strokeWidth="1" />

      <text x="424" y="336" {...label}>disco C2–C3</text>
      <path d="M 420 332 L 250 284" {...measure} strokeWidth="1" />

      <text x="140" y="130" {...label} textAnchor="middle">arco</text>
      <text x="140" y="143" {...label} textAnchor="middle">ant. C1</text>
      <text x="217" y="150" {...label} textAnchor="middle" fill="var(--ink-soft)">dente</text>
    </svg>
  );
};

/* ==========================================================================
   2. Vascularização do dente e a zona vulnerável da base
   ========================================================================== */

const Vascular: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="60 40 560 285"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Suprimento arterial do processo odontoide e a zona de baixa perfusão na base do dente"}</title>

    <path d={axisCoronal()} {...bone} />

    {/* Artérias vertebrais ascendendo lateralmente */}
    <path d="M 150 290 C 152 240 154 190 158 150" {...vessel} strokeWidth="3" />
    <path d="M 350 290 C 348 240 346 190 342 150" {...vessel} strokeWidth="3" />

    {/* Artérias ascendentes anterior e posterior — sobem AO LADO do dente,
        cruzando a base sem irrigá-la de forma robusta */}
    <path d="M 158 154 C 178 148 200 136 214 118 C 220 110 224 104 232 100" {...vessel} />
    <path d="M 342 154 C 322 148 300 136 286 118 C 280 110 276 104 268 100" {...vessel} />
    <path d="M 164 168 C 190 168 210 158 222 140" {...vessel} strokeDasharray="5 4" />
    <path d="M 336 168 C 310 168 290 158 278 140" {...vessel} strokeDasharray="5 4" />

    {/* Arcada apical */}
    <path d="M 232 100 C 240 92 260 92 268 100" {...vessel} />

    {/* Zona vulnerável — base do dente (tipo II) */}
    <path d="M 224 166 L 276 166 L 276 194 L 224 194 Z" {...measure} strokeDasharray="5 4" />
    <text x="250" y="212" {...measureText} textAnchor="middle">zona de baixa perfusão</text>

    <text x="380" y="96" {...label}>arcada apical (bem vascularizada)</text>
    <path d="M 376 92 L 272 98" {...measure} strokeWidth="1" />

    <text x="380" y="130" {...label}>aa. ascendentes anterior e posterior</text>
    <text x="380" y="144" {...label}>(ramos da a. vertebral)</text>
    <path d="M 376 132 L 294 128" {...measure} strokeWidth="1" />

    <text x="380" y="178" {...label}>base do dente: cortical fina, pouca</text>
    <text x="380" y="192" {...label}>esponjosa e área de contato mínima</text>
    <path d="M 376 184 L 280 180" {...measure} strokeWidth="1" />

    <text x="380" y="228" {...label}>corpo do áxis: esponjosa ricamente</text>
    <text x="380" y="242" {...label}>vascularizada (por isso o tipo III consolida)</text>
    <path d="M 376 234 L 322 248" {...measure} strokeWidth="1" />

    <text x="126" y="290" {...label}>a. vertebral</text>
    <text x="250" y="130" {...label} textAnchor="middle" fill="var(--ink-soft)">dente</text>
  </svg>
);

/* ==========================================================================
   3. Classificação de Anderson–D'Alonzo (coronal)
   ========================================================================== */

const AndersonDAlonzo: FC<FigureProps> = ({ variant, className, title }) => {
  const v = variant ?? "todos";
  const all = v === "todos";

  const lineI = "M 228 132 C 240 122 258 118 272 122";
  const lineII = "M 227 180 C 240 174 260 174 273 180";
  const lineIII = "M 178 214 C 196 232 226 240 250 240 C 274 240 304 232 322 214";

  const captions: Record<string, string> = {
    I: "Tipo I — avulsão oblíqua do ápice, na inserção dos ligamentos alares",
    II: "Tipo II — traço na base do dente, na junção com o corpo do áxis",
    III: "Tipo III — o traço desce para dentro do corpo esponjoso do áxis",
    todos: "Classificação de Anderson–D'Alonzo: tipos I, II e III do processo odontoide",
  };

  return (
    <svg
      viewBox="60 40 560 290"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? captions[v] ?? captions.todos}</title>

      <path d={axisCoronal()} {...bone} />

      {(all || v === "I") && <path d={lineI} {...fracture} opacity={all || v === "I" ? 1 : 0.25} />}
      {(all || v === "II") && <path d={lineII} {...fracture} strokeWidth={v === "II" ? 3.6 : 3} />}
      {(all || v === "III") && <path d={lineIII} {...fracture} />}

      {all ? (
        <>
          <text x="292" y="112" {...measureText}>I</text>
          <text x="292" y="176" {...measureText}>II</text>
          <text x="336" y="212" {...measureText}>III</text>
          <text x="380" y="112" {...label}>ápice — acima do lig. transverso</text>
          <text x="380" y="176" {...label}>base — cintura estreita, alta pseudartrose</text>
          <text x="380" y="212" {...label}>corpo — leito esponjoso, consolida bem</text>
        </>
      ) : null}

      {v === "I" ? (
        <>
          <text x="380" y="120" {...label}>Avulsão do ápice pelo lig. alar.</text>
          <text x="380" y="136" {...label}>Raro. Estável se a junção C0–C1</text>
          <text x="380" y="152" {...label}>estiver íntegra — mas investigar</text>
          <text x="380" y="168" {...label}>luxação occipitocervical associada.</text>
          <path d="M 376 124 L 278 122" {...measure} strokeWidth="1" />
        </>
      ) : null}

      {v === "II" ? (
        <>
          <text x="380" y="140" {...label}>Traço na base do dente. É o mais</text>
          <text x="380" y="156" {...label}>comum e o mais problemático:</text>
          <text x="380" y="172" {...label}>pequena área de contato, cortical</text>
          <text x="380" y="188" {...label}>fina e perfusão precária.</text>
          <path d="M 376 168 L 278 180" {...measure} strokeWidth="1" />
          <path d="M 224 166 L 276 166 L 276 194 L 224 194 Z" {...measure} strokeDasharray="5 4" />
        </>
      ) : null}

      {v === "III" ? (
        <>
          <text x="380" y="200" {...label}>O traço desce para a esponjosa do</text>
          <text x="380" y="216" {...label}>corpo, às vezes até as facetas.</text>
          <text x="380" y="232" {...label}>Leito ósseo amplo e vascularizado:</text>
          <text x="380" y="248" {...label}>consolida com imobilização externa.</text>
          <path d="M 376 220 L 326 220" {...measure} strokeWidth="1" />
        </>
      ) : null}
    </svg>
  );
};

/* ==========================================================================
   4. Subtipos de Grauer para o tipo II (sagital) — governam o parafuso anterior
   ========================================================================== */

const Grauer: FC<FigureProps> = ({ variant, className, title }) => {
  const v = variant ?? "IIB";

  /* Traços na base do dente, em perfil (anterior à esquerda) */
  const lines: Record<string, string> = {
    /* transverso, sem desvio */
    IIA: "M 198 184 L 235 184",
    /* ântero-superior → póstero-inferior: perpendicular ao parafuso */
    IIB: "M 199 174 L 236 192",
    /* ântero-inferior → póstero-superior: paralelo ao parafuso, cisalha */
    IIC: "M 199 194 L 236 172",
  };

  const captions: Record<string, string> = {
    IIA: "Grauer IIA — traço transverso, sem desvio e sem cominuição",
    IIB: "Grauer IIB — traço de ântero-superior para póstero-inferior, favorável ao parafuso anterior",
    IIC: "Grauer IIC — traço de ântero-inferior para póstero-superior ou cominuído, desfavorável ao parafuso anterior",
  };

  return (
    <svg
      viewBox="120 60 470 300"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? captions[v] ?? captions.IIB}</title>

      <path d={axisPosteriorSagittal()} {...boneBack} />
      <path d={axisBodySagittal()} {...bone} />
      <path d={c3Sagittal()} {...boneBack} />

      {/* Cominuição no IIC */}
      {v === "IIC" ? (
        <>
          <path d="M 210 186 L 216 176" {...fracture} strokeWidth="2" />
          <path d="M 224 182 L 228 172" {...fracture} strokeWidth="2" />
        </>
      ) : null}

      <path d={lines[v] ?? lines.IIB} {...fracture} />

      {/* Trajetória do parafuso anterior do odontoide */}
      <path d="M 186 280 L 217 108" {...measure} strokeDasharray="6 5" strokeWidth="1.8" />
      <text x="140" y="298" {...measureText}>trajetória do</text>
      <text x="140" y="311" {...measureText}>parafuso anterior</text>

      <text x="300" y="82" {...label}>anterior à esquerda</text>

      {v === "IIA" ? (
        <>
          <text x="300" y="150" {...label}>Traço transverso, sem desvio e sem</text>
          <text x="300" y="166" {...label}>cominuição. Candidato a imobilização</text>
          <text x="300" y="182" {...label}>externa — se o paciente tolerar e o</text>
          <text x="300" y="198" {...label}>controle radiográfico mantiver a redução.</text>
        </>
      ) : null}

      {v === "IIB" ? (
        <>
          <text x="300" y="150" {...label}>O traço cruza a trajetória do parafuso</text>
          <text x="300" y="166" {...label}>quase perpendicularmente: o parafuso</text>
          <text x="300" y="182" {...label}>comprime o foco. É o único subtipo</text>
          <text x="300" y="198" {...label}>verdadeiramente favorável à via anterior.</text>
        </>
      ) : null}

      {v === "IIC" ? (
        <>
          <text x="300" y="150" {...label}>O traço corre quase paralelo ao parafuso.</text>
          <text x="300" y="166" {...label}>Ao apertar, o fragmento desliza em vez de</text>
          <text x="300" y="182" {...label}>comprimir. Cominuição tem o mesmo efeito.</text>
          <text x="300" y="198" {...label}>Indicação de artrodese C1–C2 posterior.</text>
        </>
      ) : null}

      <text x="217" y="140" {...label} textAnchor="middle" fill="var(--ink-soft)">dente</text>
    </svg>
  );
};

/* ==========================================================================
   5. Fatores de risco de pseudartrose — desvio e angulação
   ========================================================================== */

const NonunionRisk: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="120 60 470 300"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Medida do desvio e da angulação da fratura tipo II do odontoide, preditores de pseudartrose"}</title>

    {/* Corpo do áxis sem o dente (o dente é redesenhado deslocado) */}
    <path d={axisPosteriorSagittal()} {...boneBack} />
    <path
      d={`M 199 184 C 205 190 244 194 248 204 L 250 268 L 190 270 L 184 284 L 176 284 L 178 266 L 181 200 Z`}
      {...bone}
    />

    {/* Fragmento do dente deslocado posteriormente e angulado */}
    <g transform="rotate(11 232 186)">
      <path
        d={`M 214 118 C 214 104 248 104 248 118 L 249 150 C 249 168 247 176 246 186 L 212 186 C 213 160 213 134 214 118 Z`}
        {...bone}
      />
    </g>

    {/* Traço de fratura */}
    <path d="M 198 186 L 240 190" {...fracture} />

    {/* Posição anatômica de referência (fantasma) */}
    <path
      d={`M 200 118 C 200 104 234 104 234 118 L 235 150 C 235 168 233 175 232 185 L 199 185 Z`}
      fill="none"
      stroke="var(--ink-soft)"
      strokeWidth="1"
      strokeDasharray="4 4"
      opacity="0.7"
    />

    {/* Medida do desvio posterior */}
    <path d="M 234 128 L 300 128" {...measure} strokeDasharray="3 3" />
    <path d="M 250 128 L 300 128" {...measure} strokeDasharray="3 3" />
    <path d="M 234 120 L 234 108" {...measure} />
    <path d="M 252 120 L 252 108" {...measure} />
    <path d="M 234 114 L 252 114" {...measure} />
    <path d="M 234 114 L 240 110 M 234 114 L 240 118" {...measure} />
    <path d="M 252 114 L 246 110 M 252 114 L 246 118" {...measure} />
    <text x="262" y="104" {...measureText}>desvio &gt; 5 mm</text>

    {/* Arco de angulação */}
    <path d="M 232 150 A 40 40 0 0 1 240 158" {...measure} />
    <text x="248" y="164" {...measureText}>angulação &gt; 10°</text>

    <text x="320" y="196" {...label}>Preditores clássicos de pseudartrose</text>
    <text x="320" y="216" {...label}>no tipo II tratado sem cirurgia:</text>
    <text x="320" y="238" {...label}>• idade &gt; 50 anos</text>
    <text x="320" y="256" {...label}>• desvio inicial &gt; 5 mm</text>
    <text x="320" y="274" {...label}>• angulação &gt; 10°</text>
    <text x="320" y="292" {...label}>• cominuição da base</text>
    <text x="320" y="310" {...label}>• tabagismo</text>
    <text x="320" y="328" {...label}>• redução perdida no seguimento</text>

    <text x="150" y="240" {...label}>corpo</text>
    <text x="150" y="253" {...label}>do áxis</text>
    <path d="M 178 244 L 190 246" {...measure} strokeWidth="1" />
  </svg>
);

/* ==========================================================================
   6. Parafuso anterior do odontoide — passos da técnica
   ========================================================================== */

const AnteriorScrew: FC<FigureProps> = ({ activeStep, className, title }) => {
  const step = activeStep ?? 4;
  const on = (n: number) => (step >= n ? 1 : 0.18);

  return (
    <svg
      viewBox="120 60 470 300"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? "Osteossíntese com parafuso anterior do odontoide: entrada no bordo ântero-inferior do áxis até a cortical apical"}</title>

      <path d={axisPosteriorSagittal()} {...boneBack} />
      <path d={axisBodySagittal()} {...bone} />
      <path d="M 184 274 L 250 272 L 250 288 L 186 290 Z" {...neuralFill} />
      <path d={c3Sagittal()} {...bone} />

      {/* Passo 1 — redução: seta indicando a manobra */}
      <g opacity={step === 1 ? 1 : 0.3}>
        <path d="M 262 108 C 244 96 226 94 214 100" {...measure} strokeWidth="2" />
        <path d="M 214 100 L 222 96 M 214 100 L 220 106" {...measure} strokeWidth="2" />
        <text x="270" y="104" {...measureText}>1 · reduzir e manter</text>
      </g>

      {/* Traço de fratura na base */}
      <path d="M 199 176 L 236 190" {...fracture} opacity={step >= 4 ? 0.35 : 1} />

      {/* Passo 2 — ponto de entrada no bordo ântero-inferior do corpo de C2 */}
      <g opacity={on(2)}>
        <circle cx="186" cy="280" r="5" fill="none" stroke="var(--amber)" strokeWidth="2" />
        <path d="M 182 296 L 150 316" {...measure} strokeWidth="1" />
        <text x="126" y="330" {...measureText}>2 · entrada ântero-inferior de C2</text>
      </g>

      {/* Passo 3 — fio-guia até a cortical apical */}
      <g opacity={step === 3 ? 1 : step > 3 ? 0.25 : 0.18}>
        <path d="M 186 280 L 217 106" {...measure} strokeDasharray="6 5" strokeWidth="1.8" />
        <text x="268" y="140" {...measureText}>3 · fio-guia até a cortical apical</text>
        <path d="M 264 136 L 222 116" {...measure} strokeWidth="1" />
      </g>

      {/* Passo 4 — parafuso de compressão */}
      <g opacity={on(4)}>
        <Screw x1={186} y1={280} x2={216} y2={112} r={4.5} threadFrom={0.62} />
        <text x="268" y="212" {...measureText}>4 · rosca só no fragmento distal</text>
        <text x="268" y="226" {...measureText}>= efeito de compressão</text>
        <path d="M 264 216 L 214 160" {...measure} strokeWidth="1" />
      </g>

      <text x="300" y="88" {...label}>A rosca deve ultrapassar o traço e ganhar</text>
      <text x="300" y="72" {...label}>a cortical apical; se cruzar a linha de fratura,</text>
      <text x="300" y="104" {...label}>não há compressão — apenas um espaçador.</text>

      <text x="150" y="150" {...label}>ápice</text>
      <path d="M 172 154 L 200 132" {...measure} strokeWidth="1" />
      <text x="150" y="252" {...label}>corpo do áxis</text>
      <text x="150" y="346" {...label}>C3</text>
    </svg>
  );
};

/* ==========================================================================
   7. Artrodese C1–C2 posterior — Harms e Magerl
   ========================================================================== */

const PosteriorFusion: FC<FigureProps> = ({ variant, className, title }) => {
  const magerl = variant === "magerl";

  return (
    <svg
      viewBox="120 40 470 330"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>
        {title ??
          (magerl
            ? "Artrodese C1–C2 de Magerl: parafuso transarticular associado a amarrilho e enxerto posterior"
            : "Artrodese C1–C2 de Harms: parafuso na massa lateral de C1 e parafuso no pedículo de C2, unidos por hastes")}
      </title>

      <path d={axisPosteriorSagittal()} {...bone} />
      <path d={axisBodySagittal()} {...bone} />
      <path d={c3Sagittal()} {...boneBack} />

      {/* Massa lateral de C1 (camada posterior) */}
      <path d="M 240 108 C 268 100 296 108 302 128 C 306 146 294 160 272 162 C 252 162 240 150 238 132 Z" {...boneBack} />
      {/* Arco posterior de C1 */}
      <ellipse cx="318" cy="134" rx="17" ry="12" transform="rotate(-12 318 134)" {...bone} />
      <path d="M 330 142 L 348 150 L 344 159 L 325 150 Z" {...bone} />

      {/* Ligamento transverso + medula, para orientar o leitor */}
      <ellipse cx="244" cy="126" rx="7" ry="12" {...neuralFill} />

      {/* Traço de fratura tipo II */}
      <path d="M 199 178 L 236 190" {...fracture} />

      {magerl ? (
        <>
          {/* Parafuso transarticular: faceta inferior de C2 → massa lateral de C1 */}
          <Screw x1={378} y1={276} x2={264} y2={130} r={4} threadFrom={0.5} />
          {/* Amarrilho de Gallie + enxerto */}
          <path d="M 344 154 C 366 168 372 200 356 224" {...implant} fill="none" strokeWidth="2" />
          <path d="M 356 224 C 348 240 372 250 392 254" {...implant} fill="none" strokeWidth="2" />
          <path d="M 330 158 C 356 176 360 210 340 232 L 322 216 C 336 200 334 178 316 166 Z" {...boneBack} />
          <text x="380" y="196" {...label}>enxerto ósseo estruturado</text>
          <text x="380" y="212" {...label}>e amarrilho (Gallie)</text>
          <path d="M 376 202 L 348 200" {...measure} strokeWidth="1" />

          <text x="380" y="292" {...label}>Parafuso transarticular C1–C2</text>
          <text x="380" y="308" {...label}>atravessa a articulação a partir da</text>
          <text x="380" y="324" {...label}>faceta inferior de C2. Exige redução</text>
          <text x="380" y="340" {...label}>prévia e trajeto livre da a. vertebral.</text>
          <path d="M 376 288 L 340 262" {...measure} strokeWidth="1" />

          {/* Alerta da artéria vertebral */}
          <path d="M 300 230 C 316 216 330 196 336 176" {...vessel} strokeDasharray="5 4" />
          <text x="230" y="248" {...measureText}>a. vertebral em risco</text>
          <path d="M 296 244 L 306 228" {...measure} strokeWidth="1" />
        </>
      ) : (
        <>
          {/* Parafuso na massa lateral de C1 */}
          <Screw x1={352} y1={150} x2={252} y2={134} r={4} threadFrom={0.45} />
          {/* Parafuso no pedículo / pars de C2 */}
          <Screw x1={352} y1={244} x2={252} y2={210} r={4} threadFrom={0.45} />
          {/* Haste unindo as cabeças */}
          <path d="M 356 144 L 356 250" {...implant} strokeWidth="4" fill="none" />

          <text x="380" y="130" {...label}>Parafuso na massa lateral de C1,</text>
          <text x="380" y="146" {...label}>inserido abaixo do arco posterior.</text>
          <path d="M 376 138 L 300 140" {...measure} strokeWidth="1" />

          <text x="380" y="220" {...label}>Parafuso no pedículo/pars de C2.</text>
          <text x="380" y="236" {...label}>Avaliar antes, na TC, uma artéria</text>
          <text x="380" y="252" {...label}>vertebral alta e medializada.</text>
          <path d="M 376 228 L 300 224" {...measure} strokeWidth="1" />

          <text x="380" y="296" {...label}>Montagem poliaxial: permite reduzir</text>
          <text x="380" y="312" {...label}>com os parafusos já colocados e não</text>
          <text x="380" y="328" {...label}>depende do arco posterior de C1.</text>
          <path d="M 376 292 L 360 258" {...measure} strokeWidth="1" />
        </>
      )}

      <text x="150" y="120" {...label}>dente</text>
      <path d="M 172 124 L 198 128" {...measure} strokeWidth="1" />
      <text x="150" y="200" {...label}>traço tipo II</text>
      <path d="M 172 204 L 200 184" {...measure} strokeWidth="1" />
      <text x="150" y="262" {...label}>corpo do áxis</text>
      <text x="228" y="98" {...label} textAnchor="middle">massa lateral C1</text>
    </svg>
  );
};

/* ==========================================================================
   8. Imobilização externa — halo x colar rígido
   ========================================================================== */

const headProfile = `M 250 40
  C 300 36 336 70 338 118
  C 339 142 332 160 320 172
  C 315 178 313 186 314 194
  L 300 208
  L 306 250`;

const faceProfile = `M 250 40
  C 216 44 196 72 194 108
  C 193 122 196 130 202 136
  L 188 150
  L 202 158
  C 200 168 205 176 213 178
  L 207 188
  C 209 198 217 204 227 204
  L 232 216
  L 236 250`;

/* Um painel: cabeça em perfil, coluna cervical esquemática com o traço tipo II
   e a órtese escolhida. Desenhado sempre no mesmo referencial local, para que
   dois painéis possam ser justapostos. */
const NeckPanel: FC<{ mode: "halo" | "colar"; compact?: boolean }> = ({ mode, compact }) => (
  <g>
    <path d={headProfile} fill="none" stroke="var(--ink-soft)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d={faceProfile} fill="none" stroke="var(--ink-soft)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M 236 250 C 210 254 180 264 166 284 L 160 360" fill="none" stroke="var(--ink-soft)" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M 306 250 C 334 254 364 264 378 284 L 384 360" fill="none" stroke="var(--ink-soft)" strokeWidth="1.8" strokeLinecap="round" />

    {/* Coluna cervical esquemática com o áxis destacado */}
    <path d="M 268 168 L 284 168 L 284 186 L 268 186 Z" {...bone} />
    <path d="M 262 186 L 288 186 L 288 206 L 262 206 Z" {...boneBack} />
    <path d="M 260 208 L 288 208 L 289 232 L 260 232 Z" {...bone} />
    <path d="M 261 234 L 289 234 L 290 256 L 261 256 Z" {...boneBack} />
    <path d="M 261 258 L 290 258 L 291 280 L 261 280 Z" {...boneBack} />
    <path d="M 264 206 L 286 206" {...fracture} strokeWidth="2.4" />
    <text x="300" y="200" {...label}>C1</text>
    <text x="300" y="224" {...label}>{compact ? "C2" : "C2 — traço tipo II"}</text>
    <path d="M 296 220 L 290 212" {...measure} strokeWidth="1" />

    {mode === "halo" ? (
      <>
        <ellipse cx="266" cy="116" rx="86" ry="10" {...implant} strokeWidth="2.4" />
        <path d="M 184 112 L 198 112" {...implant} strokeWidth="3" />
        <path d="M 336 118 L 322 118" {...implant} strokeWidth="3" />
        <circle cx="182" cy="112" r="4" {...implant} />
        <circle cx="338" cy="118" r="4" {...implant} />
        <path d="M 200 124 L 194 268" {...implant} strokeWidth="3.4" fill="none" />
        <path d="M 334 126 L 344 268" {...implant} strokeWidth="3.4" fill="none" />
        <path d="M 178 264 C 220 250 320 250 358 264 L 366 340 C 320 352 216 352 172 340 Z" {...implant} />
        <text x="266" y="306" {...label} textAnchor="middle">colete</text>
        <text x="186" y="100" {...measureText} textAnchor="middle">pinos</text>
      </>
    ) : (
      <>
        <path
          d="M 214 196 C 232 190 248 190 262 192 L 300 194 C 318 196 330 204 332 218 L 330 250 C 320 262 300 268 274 268 C 246 268 224 262 214 250 L 212 216 Z"
          {...implant}
          fill="none"
          strokeWidth="2.4"
        />
        <path d="M 214 196 C 224 186 236 182 248 184" {...implant} fill="none" strokeWidth="2.4" />
        <path d="M 332 218 C 340 206 338 194 328 188" {...implant} fill="none" strokeWidth="2.4" />
        <path d="M 212 250 C 222 264 250 272 274 272 C 300 272 322 264 330 250" {...implant} fill="none" strokeWidth="2.4" />
        <text x="212" y="180" {...measureText} textAnchor="middle">mento</text>
        <text x="350" y="184" {...measureText} textAnchor="middle">occipúcio</text>
      </>
    )}
  </g>
);

const Immobilization: FC<FigureProps> = ({ variant, className, title }) => {
  const v = variant === "colar" ? "colar" : variant === "halo" ? "halo" : "ambos";

  if (v === "ambos") {
    return (
      <svg
        viewBox="150 20 540 400"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>{title ?? "Halo craniano com colete comparado ao colar cervical rígido no tratamento não operatório da fratura do odontoide"}</title>

        <NeckPanel mode="halo" compact />
        <text x="266" y="392" {...label} textAnchor="middle" fill="var(--ink-soft)">Halo com colete</text>
        <text x="266" y="408" {...label} textAnchor="middle">controle rotacional, mal tolerado no idoso</text>

        <g transform="translate(280 0)">
          <NeckPanel mode="colar" compact />
          <text x="266" y="392" {...label} textAnchor="middle" fill="var(--ink-soft)">Colar rígido</text>
          <text x="266" y="408" {...label} textAnchor="middle">bem tolerado, sem controle rotacional</text>
        </g>
      </svg>
    );
  }

  return (
    <svg
      viewBox="150 20 480 360"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>
        {title ??
          (v === "halo"
            ? "Halo craniano com colete: controle rígido do segmento occipitocervical"
            : "Colar cervical rígido: apoio mento-esternal e occipital, sem controle rotacional real")}
      </title>

      <NeckPanel mode={v} />

      {v === "halo" ? (
        <>
          <text x="410" y="70" {...label}>Halo: melhor controle rotacional que</text>
          <text x="410" y="86" {...label}>o colar, mas no idoso associa-se a</text>
          <text x="410" y="102" {...label}>disfagia, pneumonia por aspiração,</text>
          <text x="410" y="118" {...label}>soltura de pino e desequilíbrio.</text>
          <text x="410" y="144" {...label}>Mal tolerado acima dos 65 anos —</text>
          <text x="410" y="160" {...label}>hoje raramente é a primeira escolha</text>
          <text x="410" y="176" {...label}>nessa faixa etária.</text>
        </>
      ) : (
        <>
          <text x="410" y="70" {...label}>Colar rígido: bem tolerado, permite</text>
          <text x="410" y="86" {...label}>higiene, alimentação e deambulação</text>
          <text x="410" y="102" {...label}>precoce. Controla flexo-extensão, mas</text>
          <text x="410" y="118" {...label}>quase não controla a rotação C1–C2.</text>
          <text x="410" y="144" {...label}>No idoso, aceita-se a pseudartrose</text>
          <text x="410" y="160" {...label}>fibrosa estável e assintomática como</text>
          <text x="410" y="176" {...label}>desfecho válido.</text>
        </>
      )}
    </svg>
  );
};

/* ========================================================================== */

export const figures: Record<string, FC<FigureProps>> = {
  "fratura-axis-odontoide:anatomia": Anatomy,
  "fratura-axis-odontoide:vascularizacao": Vascular,
  "fratura-axis-odontoide:anderson-dalonzo": AndersonDAlonzo,
  "fratura-axis-odontoide:grauer": Grauer,
  "fratura-axis-odontoide:pseudartrose-risco": NonunionRisk,
  "fratura-axis-odontoide:parafuso-anterior": AnteriorScrew,
  "fratura-axis-odontoide:artrodese-posterior": PosteriorFusion,
  "fratura-axis-odontoide:imobilizacao": Immobilization,
};
