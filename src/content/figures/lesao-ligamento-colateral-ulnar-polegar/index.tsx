import type { FC, ReactNode } from "react";
import type { FigureProps } from "../../../types/topic";

/* ============================================================================
   Figuras esquemáticas originais — Lesão do ligamento colateral ulnar (LCU)
   do polegar. Line-art de dois tons, sem reprodução de material protegido.
   Referência editorial: Rockwood and Green's Fractures in Adults, 10a ed.
   (2024). Todas as cores vêm de CSS vars do tema.
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

const ligament = {
  fill: "none",
  stroke: "var(--teal)",
  strokeWidth: 5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const ligamentTorn = {
  fill: "none",
  stroke: "var(--cortical)",
  strokeWidth: 5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const amber = {
  fill: "none",
  stroke: "var(--amber)",
  strokeWidth: 1.6,
};

function Frame({
  viewBox,
  title,
  className,
  children,
}: {
  viewBox: string;
  title: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <svg
      viewBox={viewBox}
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      {children}
    </svg>
  );
}

/* ---- Osso: metacarpo e falange proximal do polegar (perfil dorsoulnar) ---- */

function Metacarpal() {
  return (
    <g>
      {/* diáfise do 1º metacarpo */}
      <path
        {...bone}
        d="M60 250 L64 150 C64 132, 80 120, 104 120 C128 120, 142 134, 142 156 L142 250 Z"
      />
      {/* cabeça do metacarpo (côndilo) */}
      <path
        {...bone}
        d="M64 150 C60 118, 78 96, 104 96 C132 96, 150 118, 146 152 C146 132, 128 120, 104 120 C82 120, 66 132, 64 150 Z"
      />
      <ellipse cx="104" cy="120" rx="44" ry="30" {...bone} />
    </g>
  );
}

function ProximalPhalanx() {
  return (
    <g>
      {/* base e diáfise da falange proximal */}
      <path
        {...bone}
        d="M70 92 C70 68, 88 54, 104 54 C120 54, 138 68, 138 92 L134 8 C134 -4, 120 -10, 104 -10 C88 -10, 74 -4, 74 8 Z"
      />
      <ellipse cx="104" cy="90" rx="36" ry="20" {...bone} />
    </g>
  );
}

/* ========================================================================== */
/* 1. Anatomia — LCU, ligamentos próprio e acessório, aponeurose do adutor    */
/* ========================================================================== */

export const Anatomy: FC<FigureProps> = ({ className, title }) => (
  <Frame
    viewBox="0 0 300 300"
    className={className}
    title={title ?? "Anatomia do ligamento colateral ulnar do polegar e aponeurose do adutor"}
  >
    <text x="150" y="20" {...mono} textAnchor="middle">
      Articulação MCF do polegar · face ulnar
    </text>

    <Metacarpal />
    <ProximalPhalanx />

    {/* ligamento colateral ulnar próprio (origem dorsal na cabeça -> base volar) */}
    <path {...ligament} d="M132 108 C150 118, 156 134, 148 150" />
    {/* ligamento acessório (mais volar, para a placa volar) */}
    <path
      {...ligament}
      strokeWidth={3.5}
      opacity={0.75}
      d="M138 116 C158 128, 168 146, 162 168"
    />
    {/* placa volar */}
    <path {...bone} d="M138 150 C158 160, 168 174, 164 190 L150 186 C150 172, 144 160, 132 154 Z" />

    {/* aponeurose do adutor recobrindo o LCU */}
    <path
      d="M96 172 C120 176, 148 174, 176 156 C182 168, 182 182, 172 194 C144 208, 116 206, 92 198 Z"
      fill="var(--surface-2, var(--surface))"
      stroke="var(--ink-soft)"
      strokeWidth={1.4}
      opacity={0.85}
    />
    <path
      d="M100 178 C128 182, 154 178, 176 160"
      fill="none"
      stroke="var(--ink-soft)"
      strokeWidth={1}
      strokeDasharray="3 4"
    />

    <text x="196" y="126" {...label} fill="var(--teal)">LCU próprio</text>
    <text x="196" y="168" {...label} fill="var(--teal)">LCU acessório</text>
    <text x="176" y="200" {...label}>aponeurose do adutor</text>
    <text x="40" y="70" {...label} textAnchor="middle">falange</text>
    <text x="40" y="82" {...label} textAnchor="middle">proximal</text>
    <text x="40" y="250" {...label} textAnchor="middle">1º metacarpo</text>
    <text x="150" y="290" {...label} textAnchor="middle">
      Próprio: restritor em flexão · acessório/placa: em extensão
    </text>
  </Frame>
);

/* ========================================================================== */
/* 2. Mecanismo — abdução/hiperextensão forçada (polegar do esquiador)        */
/* ========================================================================== */

export const Mechanism: FC<FigureProps> = ({ className, title }) => (
  <Frame
    viewBox="0 0 340 278"
    className={className}
    title={title ?? "Mecanismo de lesão: abdução e hiperextensão forçadas da MCF do polegar"}
  >
    <text x="170" y="20" {...mono} textAnchor="middle">
      Estresse em valgo forçado da MCF
    </text>

    {/* metacarpo fixo */}
    <path {...bone} d="M120 240 L124 150 C124 132, 140 122, 160 122 C180 122, 194 134, 194 152 L194 240 Z" />
    <ellipse cx="158" cy="122" rx="40" ry="26" {...bone} />

    {/* falange em posição neutra (fantasma) */}
    <path
      {...boneBack}
      opacity={0.4}
      d="M132 118 C132 96, 146 84, 160 84 C174 84, 188 96, 188 118 L184 44 L136 44 Z"
    />

    {/* falange desviada em abdução (radial) */}
    <g transform="rotate(-34 158 118)">
      <path
        {...bone}
        d="M132 118 C132 96, 146 84, 160 84 C174 84, 188 96, 188 118 L184 40 C184 30, 172 24, 160 24 C148 24, 136 30, 136 40 Z"
      />
      <ellipse cx="160" cy="116" rx="30" ry="17" {...bone} />
    </g>

    {/* seta de força radial */}
    <path
      d="M198 70 C176 52, 150 46, 122 52"
      fill="none"
      stroke="var(--amber)"
      strokeWidth={3}
      strokeLinecap="round"
    />
    <path d="M122 52 l14 -8 m-14 8 l12 10" fill="none" stroke="var(--amber)" strokeWidth={3} strokeLinecap="round" />

    {/* LCU tensionado / rompendo na inserção distal */}
    <path {...ligamentTorn} d="M188 112 C200 122, 204 134, 198 148" />
    <path d="M198 148 l-8 -2 m8 2 l-2 8" stroke="var(--cortical)" strokeWidth={3} strokeLinecap="round" />

    <text x="244" y="70" {...label} fill="var(--amber)">força em abdução</text>
    <text x="210" y="150" {...label} fill="var(--cortical)">avulsão distal do LCU</text>
    <text x="90" y="260" {...label}>
      <tspan x="90" dy="0">LCU falha tipicamente na inserção distal</tspan>
      <tspan x="90" dy="1.15em">(falange proximal)</tspan>
    </text>
  </Frame>
);

/* ========================================================================== */
/* 3. Lesão de Stener — não deslocada vs interposição da aponeurose           */
/* ========================================================================== */

export const StenerLesion: FC<FigureProps> = ({ className, title, variant }) => {
  const isStener = variant !== "nao-deslocada";
  return (
    <Frame
      viewBox="0 0 340 300"
      className={className}
      title={
        title ??
        (isStener
          ? "Lesão de Stener: coto do LCU deslocado superficial à aponeurose do adutor"
          : "Ruptura do LCU sem deslocamento, sob a aponeurose do adutor")
      }
    >
      <text x="170" y="20" {...mono} textAnchor="middle">
        {isStener ? "Lesão de Stener" : "Ruptura sem deslocamento"}
      </text>

      <g transform="translate(66 8)">
        <Metacarpal />
        <ProximalPhalanx />
      </g>

      {/* borda proximal da aponeurose do adutor (referência anatômica) */}
      <path
        d="M150 196 C176 202, 206 200, 234 182"
        fill="none"
        stroke="var(--ink-soft)"
        strokeWidth={2}
        strokeDasharray="4 4"
      />
      <text x="238" y="184" {...label}>borda aponeurose</text>

      {isStener ? (
        <>
          {/* coto do LCU retraído e enovelado ACIMA (proximal) da aponeurose */}
          <path
            {...ligamentTorn}
            d="M196 150 C216 146, 226 160, 214 172 C202 184, 186 176, 190 162"
          />
          <circle cx="204" cy="160" r="10" fill="var(--surface)" stroke="var(--cortical)" strokeWidth={3} />
          {/* inserção distal vazia na falange */}
          <circle cx="196" cy="192" r="4" fill="none" stroke="var(--cortical)" strokeWidth={2} />
          <path d="M196 192 l-2 -8 m2 8 l8 0" stroke="var(--cortical)" strokeWidth={2} strokeLinecap="round" />
          <text x="150" y="270" {...label} textAnchor="middle">
            Aponeurose interposta entre coto e inserção impede cicatrização
          </text>
          <text x="150" y="286" {...label} textAnchor="middle" fill="var(--cortical)">
            nódulo palpável proximal · indicação cirúrgica
          </text>
        </>
      ) : (
        <>
          {/* coto do LCU permanece SOB a aponeurose, próximo da inserção */}
          <path {...ligamentTorn} d="M196 150 C212 160, 216 176, 206 190" />
          <path d="M206 190 l-8 -1 m8 1 l-1 8" stroke="var(--cortical)" strokeWidth={3} strokeLinecap="round" />
          <text x="150" y="270" {...label} textAnchor="middle">
            Coto permanece sob a aponeurose, em aposição à inserção
          </text>
          <text x="150" y="286" {...label} textAnchor="middle" fill="var(--teal)">
            potencial de cicatrização com imobilização
          </text>
        </>
      )}
    </Frame>
  );
};

/* ========================================================================== */
/* 4. Classificação — graus de instabilidade ao estresse em valgo            */
/* ========================================================================== */

export const Classification: FC<FigureProps> = ({ className, title, variant }) => {
  const grade = variant ?? "iii";
  const angle = grade === "i" ? 6 : grade === "ii" ? 18 : 42;
  const stable = grade !== "iii";
  return (
    <Frame
      viewBox="0 0 300 280"
      className={className}
      title={title ?? `Grau de abertura ao estresse em valgo da MCF (grau ${grade.toUpperCase()})`}
    >
      <text x="150" y="20" {...mono} textAnchor="middle">
        Estresse em valgo · grau {grade.toUpperCase()}
      </text>

      {/* metacarpo */}
      <path {...bone} d="M118 250 L122 160 C122 144, 136 134, 150 134 C164 134, 178 146, 178 162 L178 250 Z" />
      <ellipse cx="148" cy="134" rx="34" ry="22" {...bone} />

      {/* eixo neutro de referência */}
      <line x1="148" y1="134" x2="148" y2="40" stroke="var(--ink-soft)" strokeWidth={1} strokeDasharray="3 4" />

      {/* falange desviada conforme o ângulo */}
      <g transform={`rotate(${-angle} 148 130)`}>
        <path {...bone} d="M126 130 C126 110, 138 100, 150 100 C162 100, 176 110, 176 130 L172 48 C172 40, 162 34, 150 34 C138 34, 128 40, 128 48 Z" />
        <ellipse cx="150" cy="128" rx="26" ry="15" {...bone} />
      </g>

      {/* arco do ângulo */}
      <path
        d={`M148 78 A 52 52 0 0 1 ${148 + 52 * Math.sin((angle * Math.PI) / 180)} ${
          130 - 52 * Math.cos((angle * Math.PI) / 180)
        }`}
        {...amber}
      />
      <text x="196" y="86" {...label} fill="var(--amber)">≈ {angle}°</text>

      {/* LCU: íntegro (teal) nos graus I/II parciais, rompido (cortical) no III */}
      {grade === "iii" ? (
        <path {...ligamentTorn} d="M172 118 C186 128, 190 142, 182 158" />
      ) : (
        <path {...ligament} d="M172 118 C186 128, 190 142, 182 158" />
      )}

      <text x="150" y="262" {...label} textAnchor="middle">
        {grade === "i" && "Grau I: estiramento, sem laxidez — estável"}
        {grade === "ii" && "Grau II: ruptura parcial, endpoint firme — estável"}
        {grade === "iii" && "Grau III: ruptura completa, sem endpoint — instável"}
      </text>
      {grade === "iii" && (
        <text x="150" y="278" {...label} textAnchor="middle" fill="var(--cortical)">
          abertura ≥30–35° ou &gt;15° vs contralateral
        </text>
      )}
      {stable && (
        <text x="150" y="278" {...label} textAnchor="middle" fill="var(--teal)">
          endpoint firme define lesão tratável de forma conservadora
        </text>
      )}
    </Frame>
  );
};

/* ========================================================================== */
/* 5. Teste de estresse — técnica em extensão e a 30° de flexão               */
/* ========================================================================== */

export const StressTest: FC<FigureProps> = ({ className, title }) => (
  <Frame
    viewBox="0 0 340 260"
    className={className}
    title={title ?? "Teste de estresse em valgo da MCF em extensão e a 30 graus de flexão"}
  >
    <text x="170" y="20" {...mono} textAnchor="middle">
      Estresse em valgo: extensão e 30° de flexão
    </text>

    {/* Painel 1: em extensão */}
    <g transform="translate(0 0)">
      <path {...bone} d="M50 230 L54 150 C54 136, 66 128, 78 128 C90 128, 102 138, 102 152 L102 230 Z" />
      <ellipse cx="76" cy="128" rx="28" ry="18" {...bone} />
      <g transform="rotate(-10 76 126)">
        <path {...bone} d="M58 126 C58 108, 68 100, 78 100 C88 100, 100 108, 100 126 L96 52 C96 46, 88 42, 78 42 C68 42, 60 46, 60 52 Z" />
      </g>
      <path {...ligament} d="M96 116 C108 126, 110 138, 104 150" />
      <path d="M104 60 C88 46, 66 44, 46 54" fill="none" stroke="var(--amber)" strokeWidth={2.6} strokeLinecap="round" />
      <path d="M46 54 l12 -6 m-12 6 l10 9" fill="none" stroke="var(--amber)" strokeWidth={2.6} strokeLinecap="round" />
      <text x="76" y="250" {...label} textAnchor="middle">extensão (acessório+placa)</text>
    </g>

    {/* Painel 2: a 30° de flexão */}
    <g transform="translate(180 0)">
      <path {...bone} d="M50 230 L54 150 C54 136, 66 128, 78 128 C90 128, 102 138, 102 152 L102 230 Z" />
      <ellipse cx="76" cy="128" rx="28" ry="18" {...bone} />
      <g transform="rotate(-24 76 126)">
        <path {...bone} d="M58 126 C58 112, 66 104, 78 104 C90 104, 100 112, 100 126 L108 66 C110 58, 102 52, 92 50 C80 48, 66 52, 62 60 Z" />
      </g>
      <path {...ligament} d="M98 116 C112 126, 116 140, 108 156" />
      <path d="M110 66 C92 52, 68 52, 48 64" fill="none" stroke="var(--amber)" strokeWidth={2.6} strokeLinecap="round" />
      <path d="M48 64 l12 -6 m-12 6 l10 9" fill="none" stroke="var(--amber)" strokeWidth={2.6} strokeLinecap="round" />
      <text x="76" y="250" {...label} textAnchor="middle">a 30° de flexão (LCU próprio)</text>
    </g>

    <text x="170" y="112" {...label} textAnchor="middle" fill="var(--muted)">
      testar em ambas posições e comparar ao lado contralateral
    </text>
  </Frame>
);

/* ========================================================================== */
/* 6. Via de acesso — incisão dorsoulnar e ramos do nervo radial superficial  */
/* ========================================================================== */

export const Approach: FC<FigureProps> = ({ className, title }) => (
  <Frame
    viewBox="0 0 300 296"
    className={className}
    title={title ?? "Via dorsoulnar da MCF do polegar e ramos sensitivos do nervo radial"}
  >
    <text x="150" y="20" {...mono} textAnchor="middle">
      Via dorsoulnar · MCF do polegar
    </text>

    <g transform="translate(46 8)">
      <Metacarpal />
      <ProximalPhalanx />
    </g>

    {/* incisão cutânea curvilínea dorsoulnar */}
    <path
      d="M176 70 C196 96, 200 130, 186 168 C180 186, 168 200, 152 210"
      fill="none"
      stroke="var(--cortical)"
      strokeWidth={2.4}
      strokeDasharray="7 5"
      strokeLinecap="round"
    />
    <text x="204" y="120" {...label} fill="var(--cortical)">incisão dorsoulnar</text>

    {/* ramos sensitivos do nervo radial superficial (em risco) */}
    <path d="M120 60 C150 70, 168 86, 176 108" {...amber} strokeWidth={2.2} strokeDasharray="2 3" />
    <path d="M128 48 C158 58, 180 74, 190 98" {...amber} strokeWidth={2.2} strokeDasharray="2 3" />
    <text x="60" y="52" {...label} fill="var(--amber)">ramos sensitivos do</text>
    <text x="60" y="64" {...label} fill="var(--amber)">nervo radial (proteger)</text>

    {/* aponeurose do adutor a ser incisada e reparada */}
    <path
      d="M118 176 C144 182, 172 180, 196 164"
      fill="none"
      stroke="var(--teal)"
      strokeWidth={3}
      strokeLinecap="round"
    />
    <text x="150" y="272" {...label} textAnchor="middle">
      <tspan x="150" dy="0">incisar a aponeurose do adutor, expor o LCU</tspan>
      <tspan x="150" dy="1.15em">e reparar a aponeurose ao final</tspan>
    </text>
  </Frame>
);

/* ========================================================================== */
/* 7. Reparo com âncora — passos (activeStep destaca a etapa corrente)         */
/* ========================================================================== */

export const Repair: FC<FigureProps> = ({ className, title, activeStep }) => {
  const step = activeStep ?? 3;
  const on = (n: number) => (step >= n ? 1 : 0.22);
  return (
    <Frame
      viewBox="0 0 320 290"
      className={className}
      title={title ?? "Reparo do LCU com âncora de sutura na inserção distal"}
    >
      <text x="160" y="20" {...mono} textAnchor="middle">
        Reparo com âncora · inserção distal
      </text>

      <g transform="translate(56 6)">
        <Metacarpal />
        <ProximalPhalanx />
      </g>

      {/* etapa 1: leito ósseo na base da falange (inserção anatômica) */}
      <g opacity={on(1)}>
        <ellipse cx="150" cy="120" rx="8" ry="6" fill="var(--surface-2, var(--surface))" stroke="var(--amber)" strokeWidth={1.6} />
        <text x="120" y="106" {...label} textAnchor="end" fill="var(--amber)">1 · leito</text>
      </g>

      {/* etapa 2: âncora inserida */}
      <g opacity={on(2)}>
        <rect x="146" y="116" width="8" height="16" rx="2" fill="var(--surface)" stroke="var(--teal)" strokeWidth={2.4} transform="rotate(24 150 124)" />
        <text x="196" y="112" {...label} fill="var(--teal)">2 · âncora</text>
      </g>

      {/* etapa 3: coto do LCU aproximado */}
      <g opacity={on(3)}>
        <path {...ligament} d="M172 138 C182 128, 176 118, 158 122" />
        <text x="196" y="146" {...label} fill="var(--teal)">3 · reinserir o coto</text>
      </g>

      {/* etapa 4: sutura amarrada, reduzida à inserção */}
      <g opacity={on(4)}>
        <path d="M150 124 L162 132 M150 124 L160 118" stroke="var(--ink)" strokeWidth={1.6} strokeLinecap="round" />
        <text x="196" y="176" {...label}>4 · reduzir e amarrar</text>
      </g>

      {/* etapa 5: reparo da aponeurose do adutor por cima */}
      <g opacity={on(5)}>
        <path d="M116 178 C144 186, 174 184, 200 166" fill="none" stroke="var(--ink-soft)" strokeWidth={2} />
        <text x="150" y="206" {...label} textAnchor="middle">5 · reparar a aponeurose do adutor</text>
      </g>

      <text x="160" y="276" {...label} textAnchor="middle">
        Fio de Kirschner opcional: proteção transarticular por 3–4 sem.
      </text>
    </Frame>
  );
};

/* ========================================================================== */
/* 8. Reconstrução — enxerto tendíneo para lesão crônica                       */
/* ========================================================================== */

export const Reconstruction: FC<FigureProps> = ({ className, title }) => (
  <Frame
    viewBox="0 0 300 300"
    className={className}
    title={title ?? "Reconstrução do LCU com enxerto tendíneo livre para lesão crônica"}
  >
    <text x="150" y="20" {...mono} textAnchor="middle">
      Reconstrução crônica · enxerto livre
    </text>

    <g transform="translate(46 6)">
      <Metacarpal />
      <ProximalPhalanx />
    </g>

    {/* túneis ósseos: cabeça do metacarpo e base da falange */}
    <ellipse cx="150" cy="126" rx="7" ry="5" fill="none" stroke="var(--amber)" strokeWidth={1.6} />
    <ellipse cx="148" cy="96" rx="6" ry="5" fill="none" stroke="var(--amber)" strokeWidth={1.6} />
    <text x="196" y="126" {...label} fill="var(--amber)">túnel no metacarpo</text>
    <text x="196" y="96" {...label} fill="var(--amber)">túnel na falange</text>

    {/* enxerto tendíneo em configuração de alça reproduzindo o LCU */}
    <path
      {...ligament}
      d="M150 126 C168 124, 172 108, 158 98 C150 92, 140 96, 142 108 C144 120, 158 130, 150 126"
    />
    <text x="196" y="146" {...label} fill="var(--teal)">
      <tspan x="196" dy="0">enxerto (ex.:</tspan>
      <tspan x="196" dy="1.15em">palmar longo)</tspan>
    </text>

    <text x="150" y="272" {...label} textAnchor="middle">
      Restaura origem/inserção do LCU se tecido nativo irreparável
    </text>
    <text x="150" y="288" {...label} textAnchor="middle">
      Alt.: artrodese da MCF em artrose ou instabilidade crônica grave
    </text>
  </Frame>
);

export const figures: Record<string, FC<FigureProps>> = {
  "lesao-ligamento-colateral-ulnar-polegar:anatomia": Anatomy,
  "lesao-ligamento-colateral-ulnar-polegar:mecanismo": Mechanism,
  "lesao-ligamento-colateral-ulnar-polegar:stener": StenerLesion,
  "lesao-ligamento-colateral-ulnar-polegar:classificacao": Classification,
  "lesao-ligamento-colateral-ulnar-polegar:teste-estresse": StressTest,
  "lesao-ligamento-colateral-ulnar-polegar:via-acesso": Approach,
  "lesao-ligamento-colateral-ulnar-polegar:reparo": Repair,
  "lesao-ligamento-colateral-ulnar-polegar:reconstrucao": Reconstruction,
};
