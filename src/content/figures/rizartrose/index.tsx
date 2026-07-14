import type { FC, ReactNode } from "react";
import type { FigureProps } from "../../../types/topic";

/* ============================================================================
   Figuras esquemáticas originais — Rizartrose (artrose trapézio-metacarpiana).
   Line-art de dois tons, sem reprodução de material protegido.
   Referência editorial: Rockwood and Green's Fractures in Adults, 10a ed.
   (2024) / Green's Operative Hand Surgery. Cores exclusivamente via CSS vars.
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
  strokeWidth: 4.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const damaged = {
  fill: "none",
  stroke: "var(--cortical)",
  strokeWidth: 4.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
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

/* ---- Blocos reutilizáveis: trapézio, base do 1º metacarpo, carpo vizinho --- */

/** Trapézio em perfil, com a sela articular voltada para cima (para o polegar). */
function Trapezium({ eroded = false }: { eroded?: boolean }) {
  return (
    <g>
      <path
        {...bone}
        d="M96 214
           C86 214, 80 206, 82 196
           C84 184, 96 178, 112 176
           C132 174, 152 176, 160 186
           C150 178, 132 180, 120 190
           C110 198, 108 208, 116 214
           Z"
      />
      {/* sela: concavidade central voltada ao metacarpo */}
      <path
        d="M92 184 C108 176, 140 176, 158 186"
        fill="none"
        stroke="var(--ink-soft)"
        strokeWidth={1}
        strokeDasharray="3 4"
      />
      {eroded && (
        <path
          d="M100 186 C116 180, 138 180, 150 188"
          fill="none"
          stroke="var(--cortical)"
          strokeWidth={2.4}
          strokeDasharray="2 3"
        />
      )}
    </g>
  );
}

/** Base do 1º metacarpo (côndilo em sela) apoiada sobre o trapézio. */
function FirstMetacarpalBase() {
  return (
    <g>
      <path
        {...bone}
        d="M104 172
           C96 168, 92 158, 98 150
           C106 140, 128 138, 146 144
           C160 148, 164 158, 158 168
           C150 176, 132 178, 116 176
           Z"
      />
    </g>
  );
}

/** Diáfise do 1º metacarpo, subindo para o polegar. */
function FirstMetacarpalShaft({ subluxated = false }: { subluxated?: boolean }) {
  const dx = subluxated ? 22 : 0;
  return (
    <g transform={`translate(${dx} 0)`}>
      <path
        {...bone}
        d="M104 152
           C102 138, 108 128, 122 124
           L146 118
           C160 114, 172 120, 176 132
           L150 154
           C138 162, 118 162, 108 156
           Z"
      />
      <path
        {...bone}
        d="M150 128 L188 40 C192 30, 184 22, 172 24 L138 32 C128 34, 126 44, 132 54 Z"
      />
    </g>
  );
}

/** Escafoide e trapezoide adjacentes (carpo). */
function NeighbouringCarpus() {
  return (
    <g>
      {/* escafoide (proximal ao trapézio) */}
      <path
        {...boneBack}
        d="M60 250 C48 244, 44 230, 52 218 C62 204, 82 202, 92 212 C98 220, 94 232, 84 240 C76 248, 66 252, 60 250 Z"
      />
      {/* trapezoide (ulnar ao trapézio) */}
      <path
        {...boneBack}
        d="M164 220 C158 210, 164 200, 178 198 C192 196, 204 204, 202 216 C200 228, 186 234, 174 230 C168 228, 166 224, 164 220 Z"
      />
    </g>
  );
}

/* ========================================================================== */
/* 1. Anatomia — articulação em sela, ligamento oblíquo volar (beak) e carpo   */
/* ========================================================================== */

export const Anatomy: FC<FigureProps> = ({ className, title }) => (
  <Frame
    viewBox="0 0 300 300"
    className={className}
    title={title ?? "Anatomia da articulação trapézio-metacarpiana em sela"}
  >
    <text x="150" y="20" {...mono} textAnchor="middle">
      Articulação trapézio-metacarpiana (sela)
    </text>

    <NeighbouringCarpus />
    <Trapezium />
    <FirstMetacarpalBase />
    <FirstMetacarpalShaft />

    {/* ligamento oblíquo volar anterior — o "beak"/deep AOL, restritor primário */}
    <path {...ligament} d="M110 176 C100 190, 100 202, 112 210" />
    {/* ligamento dorsorradial */}
    <path {...ligament} strokeWidth={3.5} opacity={0.8} d="M150 150 C160 162, 162 176, 152 186" />

    <text x="196" y="70" {...label} textAnchor="start">1º metacarpo</text>
    <text x="196" y="140" {...label} textAnchor="start">base em sela</text>
    <text x="40" y="150" {...label} fill="var(--teal)">ligamento oblíquo</text>
    <text x="40" y="162" {...label} fill="var(--teal)">volar (beak)</text>
    <text x="180" y="184" {...label} fill="var(--teal)">lig. dorsorradial</text>
    <text x="70" y="270" {...label} textAnchor="middle">escafoide</text>
    <text x="196" y="240" {...label} textAnchor="start">trapezoide</text>
    <text x="118" y="230" {...label} textAnchor="middle">trapézio</text>

    <text x="150" y="292" {...label} textAnchor="middle">
      Sela biarticular: mobilidade em dois planos ao custo de estabilidade óssea
    </text>
  </Frame>
);

/* ========================================================================== */
/* 2. Fisiopatologia — subluxação dorsorradial e colapso em adução/hiperext.   */
/* ========================================================================== */

export const Subluxation: FC<FigureProps> = ({ className, title, variant }) => {
  const isSublux = variant !== "normal";
  return (
    <Frame
      viewBox="0 0 320 300"
      className={className}
      title={
        title ??
        "Subluxação dorsorradial da base do 1º metacarpo na artrose trapézio-metacarpiana"
      }
    >
      <text x="160" y="20" {...mono} textAnchor="middle">
        {isSublux ? "Subluxação dorsorradial" : "Alinhamento normal"}
      </text>

      <NeighbouringCarpus />
      <Trapezium eroded={isSublux} />
      <FirstMetacarpalBase />
      <FirstMetacarpalShaft subluxated={isSublux} />

      {isSublux ? (
        <>
          {/* ligamento oblíquo volar atenuado/incompetente */}
          <path {...damaged} d="M110 176 C102 188, 104 200, 116 206" />
          {/* seta de deslocamento dorsorradial da base */}
          <path
            d="M150 150 C168 138, 188 134, 206 140"
            fill="none"
            stroke="var(--amber)"
            strokeWidth={3}
            strokeLinecap="round"
          />
          <path
            d="M206 140 l-12 -6 m12 6 l-8 11"
            fill="none"
            stroke="var(--amber)"
            strokeWidth={3}
            strokeLinecap="round"
          />
          <text x="212" y="138" {...label} fill="var(--amber)">
            base foge dorsorradial
          </text>
          <text x="40" y="170" {...label} fill="var(--cortical)">beak</text>
          <text x="40" y="182" {...label} fill="var(--cortical)">incompetente</text>
          <text x="160" y="286" {...label} textAnchor="middle">
            Incompetência do beak → subluxação, adução do metacarpo e hiperextensão
          </text>
          <text x="160" y="298" {...label} textAnchor="middle" fill="var(--cortical)">
            compensatória da MCF (deformidade em Z)
          </text>
        </>
      ) : (
        <>
          <path {...ligament} d="M110 176 C100 190, 100 202, 112 210" />
          <text x="40" y="176" {...label} fill="var(--teal)">beak íntegro</text>
          <text x="160" y="290" {...label} textAnchor="middle">
            Ligamentos íntegros centram a base do metacarpo sobre a sela
          </text>
        </>
      )}
    </Frame>
  );
};

/* ========================================================================== */
/* 3. Classificação de Eaton-Littler — estágios I a IV                         */
/* ========================================================================== */

export const EatonLittler: FC<FigureProps> = ({ className, title, variant }) => {
  const stage = (variant ?? "iv").toLowerCase();
  const jointNarrow = stage === "i" ? 0 : stage === "ii" ? 0.4 : 0.9;
  const sublux = stage === "iii" || stage === "iv";
  const stt = stage === "iv"; // envolvimento escafo-trapézio-trapezoide
  return (
    <Frame
      viewBox="0 0 300 300"
      className={className}
      title={title ?? `Classificação de Eaton-Littler — estágio ${stage.toUpperCase()}`}
    >
      <text x="150" y="20" {...mono} textAnchor="middle">
        Eaton-Littler · estágio {stage.toUpperCase()}
      </text>

      {/* escafoide/trapezoide — realçados no estágio IV (STT) */}
      <g>
        <path
          {...boneBack}
          stroke={stt ? "var(--cortical)" : "var(--ink-soft)"}
          d="M56 252 C44 246, 40 232, 48 220 C58 206, 78 204, 88 214 C94 222, 90 234, 80 242 C72 250, 62 254, 56 252 Z"
        />
        <path
          {...boneBack}
          stroke={stt ? "var(--cortical)" : "var(--ink-soft)"}
          d="M168 222 C162 212, 168 202, 182 200 C196 198, 208 206, 206 218 C204 230, 190 236, 178 232 C172 230, 170 226, 168 222 Z"
        />
      </g>

      <Trapezium eroded={stage !== "i"} />
      <FirstMetacarpalBase />
      <FirstMetacarpalShaft subluxated={sublux} />

      {/* interlinha articular: normal / reduzida / com osteófitos */}
      {jointNarrow > 0 && (
        <path
          d="M100 172 C120 164, 148 164, 162 174"
          fill="none"
          stroke="var(--cortical)"
          strokeWidth={1.4 + jointNarrow * 2}
          strokeDasharray={jointNarrow < 0.6 ? "3 3" : undefined}
        />
      )}
      {/* osteófitos nos estágios III-IV */}
      {(stage === "iii" || stage === "iv") && (
        <>
          <path d="M96 176 l-7 4 l7 3 Z" fill="var(--cortical)" />
          <path d="M160 178 l8 3 l-7 4 Z" fill="var(--cortical)" />
        </>
      )}
      {stt && (
        <path d="M78 224 l7 5 l-6 4 Z" fill="var(--cortical)" />
      )}

      <text x="150" y="278" {...label} textAnchor="middle">
        {stage === "i" && "I: interlinha normal ou alargada, sem subluxação"}
        {stage === "ii" && "II: redução da interlinha, osteófitos < 2 mm"}
        {stage === "iii" && "III: subluxação, osteófitos > 2 mm, esclerose/cistos"}
        {stage === "iv" && "IV: pantrapezial — acomete também a escafo-trapézio-trapezoide"}
      </text>
      {stage === "i" && (
        <text x="150" y="292" {...label} textAnchor="middle" fill="var(--teal)">
          pré-artrósico — laxidez ligamentar, teste de estresse pode mostrar subluxação
        </text>
      )}
      {stt && (
        <text x="150" y="292" {...label} textAnchor="middle" fill="var(--cortical)">
          STT acometida contraindica interposição que a ignore
        </text>
      )}
    </Frame>
  );
};

/* ========================================================================== */
/* 4. Teste de grind e teste de estresse                                       */
/* ========================================================================== */

export const GrindTest: FC<FigureProps> = ({ className, title }) => (
  <Frame
    viewBox="0 0 320 260"
    className={className}
    title={title ?? "Teste de grind: compressão axial e rotação da trapézio-metacarpiana"}
  >
    <text x="160" y="20" {...mono} textAnchor="middle">
      Teste de grind (moagem) da TMC
    </text>

    <g transform="translate(20 20)">
      <Trapezium />
      <FirstMetacarpalBase />
      <FirstMetacarpalShaft />
    </g>

    {/* seta de compressão axial */}
    <path
      d="M188 60 C182 84, 170 104, 152 118"
      fill="none"
      stroke="var(--amber)"
      strokeWidth={3}
      strokeLinecap="round"
    />
    <path d="M152 118 l3 -13 m-3 13 l-12 -4" fill="none" stroke="var(--amber)" strokeWidth={3} strokeLinecap="round" />
    <text x="196" y="58" {...label} fill="var(--amber)">compressão axial</text>

    {/* setas de rotação */}
    <path d="M132 150 A 26 26 0 0 1 172 158" fill="none" stroke="var(--amber)" strokeWidth={2.4} />
    <path d="M172 158 l-2 -11 m2 11 l9 -6" fill="none" stroke="var(--amber)" strokeWidth={2.4} strokeLinecap="round" />
    <text x="196" y="172" {...label} fill="var(--amber)">+ rotação</text>

    {/* foco doloroso na articulação */}
    <circle cx="128" cy="190" r="12" fill="none" stroke="var(--cortical)" strokeWidth={2.4} />
    <path d="M128 178 l0 -8 M128 202 l0 8 M116 190 l-8 0 M140 190 l8 0" stroke="var(--cortical)" strokeWidth={2} strokeLinecap="round" />

    <text x="160" y="238" {...label} textAnchor="middle">
      Dor e crepitação reproduzidas = teste positivo
    </text>
    <text x="160" y="252" {...label} textAnchor="middle">
      Teste de estresse revela subluxação dorsorradial no estágio inicial
    </text>
  </Frame>
);

/* ========================================================================== */
/* 5. Órtese — imobilização da base do polegar (conservador de 1ª linha)       */
/* ========================================================================== */

export const Orthosis: FC<FigureProps> = ({ className, title }) => (
  <Frame
    viewBox="0 0 300 260"
    className={className}
    title={title ?? "Órtese de imobilização da coluna do polegar para artrose TMC"}
  >
    <text x="150" y="20" {...mono} textAnchor="middle">
      Órtese da coluna do polegar
    </text>

    {/* contorno da mão simplificado */}
    <path
      {...boneBack}
      d="M96 236 L92 150 C92 132, 104 120, 122 120 L160 120
         C176 120, 188 132, 188 150 L188 236 Z"
    />
    {/* polegar */}
    <path
      {...boneBack}
      d="M92 156 C74 150, 58 138, 50 120 C46 110, 54 100, 66 104 C86 112, 100 128, 104 148 Z"
    />

    {/* órtese envolvendo base do polegar e punho, deixando IF/MCF livres */}
    <path
      d="M116 232 C104 210, 98 186, 100 162 C88 152, 74 140, 66 124
         C60 112, 70 100, 84 106 C104 116, 118 134, 124 156
         C138 152, 156 152, 170 158 L170 232 Z"
      fill="var(--teal)"
      opacity={0.16}
      stroke="var(--teal)"
      strokeWidth={2}
    />
    <path
      d="M118 200 C142 194, 160 196, 176 204"
      fill="none"
      stroke="var(--teal)"
      strokeWidth={1.4}
      strokeDasharray="4 4"
    />

    <text x="230" y="150" {...label} fill="var(--teal)" textAnchor="start">estabiliza a TMC</text>
    <text x="34" y="96" {...label} textAnchor="start">IF do polegar livre</text>
    <text x="150" y="246" {...label} textAnchor="middle">
      Imobiliza TMC (e por vezes a MCF), poupando a interfalângica
    </text>
    <text x="150" y="258" {...label} textAnchor="middle">
      Associada a AINE, exercícios e infiltração como conduta inicial
    </text>
  </Frame>
);

/* ========================================================================== */
/* 6. Trapeziectomia — isolada e com suspensão/interposição (LRTI)             */
/* ========================================================================== */

export const Trapeziectomy: FC<FigureProps> = ({ className, title, variant }) => {
  const lrti = variant === "lrti";
  return (
    <Frame
      viewBox="0 0 320 300"
      className={className}
      title={
        title ??
        (lrti
          ? "Trapeziectomia com reconstrução ligamentar e interposição tendínea (LRTI)"
          : "Trapeziectomia isolada")
      }
    >
      <text x="160" y="20" {...mono} textAnchor="middle">
        {lrti ? "Trapeziectomia + LRTI / suspensão" : "Trapeziectomia isolada"}
      </text>

      <NeighbouringCarpus />

      {/* leito do trapézio ressecado (contorno tracejado) */}
      <path
        d="M96 214 C86 214, 80 206, 82 196 C84 184, 96 178, 112 176
           C132 174, 152 176, 160 186 C150 178, 132 180, 120 190
           C110 198, 108 208, 116 214 Z"
        fill="none"
        stroke="var(--ink-soft)"
        strokeWidth={1.4}
        strokeDasharray="4 5"
      />
      <text x="118" y="232" {...label} textAnchor="middle">leito (trapézio ressecado)</text>

      <FirstMetacarpalBase />
      <FirstMetacarpalShaft />

      {lrti ? (
        <>
          {/* tira tendínea (ex.: FCR) reconstruindo o ligamento e suspendendo a base */}
          <path
            {...ligament}
            d="M118 172 C96 176, 84 190, 90 208 C96 224, 118 226, 132 216"
          />
          <path
            {...ligament}
            strokeWidth={3.5}
            d="M132 216 C150 208, 156 190, 148 172"
          />
          {/* enovelado interposto no leito */}
          <path
            {...ligament}
            strokeWidth={3}
            opacity={0.8}
            d="M110 196 C120 190, 132 194, 128 204 C124 212, 112 210, 110 200"
          />
          <text x="196" y="200" {...label} fill="var(--teal)" textAnchor="start">tira tendínea</text>
          <text x="196" y="214" {...label} fill="var(--teal)" textAnchor="start">(suspende e interpõe)</text>
          <text x="160" y="284" {...label} textAnchor="middle">
            Reconstrói o ligamento e preenche o espaço; sem superioridade clara
          </text>
          <text x="160" y="296" {...label} textAnchor="middle">
            sobre a trapeziectomia isolada, com mais complicações precoces
          </text>
        </>
      ) : (
        <>
          {/* espaço deixado cicatriza por hematoma/fibrose */}
          <path
            d="M96 200 C110 194, 138 194, 152 202"
            fill="none"
            stroke="var(--ink-soft)"
            strokeWidth={1}
            strokeDasharray="2 3"
          />
          <text x="196" y="200" {...label} textAnchor="start">espaço preenchido</text>
          <text x="196" y="214" {...label} textAnchor="start">por hematoma/fibrose</text>
          <text x="160" y="286" {...label} textAnchor="middle">
            Simples, menor tempo cirúrgico e menos complicações precoces;
          </text>
          <text x="160" y="298" {...label} textAnchor="middle">
            dor e função comparáveis às técnicas com suspensão
          </text>
        </>
      )}
    </Frame>
  );
};

/* ========================================================================== */
/* 7. Alternativas — artrodese e artroplastia de substituição                  */
/* ========================================================================== */

export const AlternativeProcedures: FC<FigureProps> = ({ className, title, variant }) => {
  const arthroplasty = variant === "artroplastia";
  return (
    <Frame
      viewBox="0 0 300 300"
      className={className}
      title={
        title ??
        (arthroplasty
          ? "Artroplastia de substituição da trapézio-metacarpiana"
          : "Artrodese trapézio-metacarpiana")
      }
    >
      <text x="150" y="20" {...mono} textAnchor="middle">
        {arthroplasty ? "Artroplastia de substituição" : "Artrodese TMC"}
      </text>

      <NeighbouringCarpus />
      <Trapezium />
      <FirstMetacarpalBase />
      <FirstMetacarpalShaft />

      {arthroplasty ? (
        <>
          {/* componente taça no trapézio + haste no metacarpo */}
          <path
            d="M96 190 C112 182, 146 182, 160 192"
            fill="none"
            stroke="var(--teal)"
            strokeWidth={3.2}
            strokeLinecap="round"
          />
          <circle cx="128" cy="176" r="9" fill="var(--surface)" stroke="var(--teal)" strokeWidth={3} />
          <path d="M128 176 L142 130" stroke="var(--teal)" strokeWidth={3.2} strokeLinecap="round" />
          <text x="196" y="150" {...label} fill="var(--teal)" textAnchor="start">haste no metacarpo</text>
          <text x="196" y="196" {...label} fill="var(--teal)" textAnchor="start">taça no trapézio</text>
          <text x="150" y="284" {...label} textAnchor="middle">
            Preserva mobilidade e força; risco de soltura/luxação do implante
          </text>
          <text x="150" y="296" {...label} textAnchor="middle">
            reservada a mãos selecionadas e cirurgião experiente
          </text>
        </>
      ) : (
        <>
          {/* placa/fios fixando metacarpo ao trapézio */}
          <path d="M116 190 L146 132" stroke="var(--teal)" strokeWidth={3} strokeLinecap="round" />
          <path d="M108 196 L138 138" stroke="var(--teal)" strokeWidth={3} strokeLinecap="round" />
          <circle cx="120" cy="176" r="2.4" fill="var(--teal)" />
          <circle cx="138" cy="150" r="2.4" fill="var(--teal)" />
          {/* fusão da interlinha */}
          <path d="M100 178 C120 172, 146 172, 158 182" fill="none" stroke="var(--ink)" strokeWidth={2} />
          <text x="196" y="150" {...label} fill="var(--teal)" textAnchor="start">fixação rígida</text>
          <text x="150" y="284" {...label} textAnchor="middle">
            Fusão estável e forte para paciente jovem, manual e de alta demanda;
          </text>
          <text x="150" y="296" {...label} textAnchor="middle">
            perde mobilidade e exige TMC isolada (sem doença pantrapezial)
          </text>
        </>
      )}
    </Frame>
  );
};

export const figures: Record<string, FC<FigureProps>> = {
  "rizartrose:anatomia": Anatomy,
  "rizartrose:subluxacao": Subluxation,
  "rizartrose:classificacao": EatonLittler,
  "rizartrose:teste-grind": GrindTest,
  "rizartrose:ortese": Orthosis,
  "rizartrose:trapeziectomia": Trapeziectomy,
  "rizartrose:alternativas": AlternativeProcedures,
};
