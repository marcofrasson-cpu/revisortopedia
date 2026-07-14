import type { FC, ReactNode } from "react";
import type { FigureProps } from "../../../types/topic";

/* ============================================================================
   Figuras esquemáticas originais — Estenose de canal lombar.
   Line-art de dois tons, sem reprodução de material protegido.
   Referência editorial: Rockwood and Green's Fractures in Adults, 10a ed.
   (2024) / Campbell's Operative Orthopaedics 14a. Cores exclusivamente via
   variáveis CSS.
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
  strokeWidth: 1.3,
  strokeLinejoin: "round" as const,
};

type BoneStyle = typeof bone;

const neuralSoft = {
  fill: "var(--teal)",
  fillOpacity: 0.16,
  stroke: "var(--teal)",
  strokeWidth: 1.6,
  strokeLinejoin: "round" as const,
};

const neuralLine = {
  fill: "none",
  stroke: "var(--teal)",
  strokeWidth: 3.2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const rootlet = {
  fill: "var(--teal)",
  fillOpacity: 0.85,
  stroke: "none",
};

const discStyle = {
  fill: "var(--teal)",
  fillOpacity: 0.18,
  stroke: "var(--teal)",
  strokeWidth: 1.5,
  strokeLinejoin: "round" as const,
};

const ligament = {
  fill: "var(--ink-soft)",
  fillOpacity: 0.12,
  stroke: "var(--ink-soft)",
  strokeWidth: 1.4,
  strokeLinejoin: "round" as const,
};

const compress = {
  fill: "var(--cortical)",
  fillOpacity: 0.22,
  stroke: "var(--cortical)",
  strokeWidth: 1.8,
  strokeLinejoin: "round" as const,
};

const compressLine = {
  fill: "none",
  stroke: "var(--cortical)",
  strokeWidth: 2.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const vessel = {
  fill: "none",
  stroke: "var(--ink-soft)",
  strokeWidth: 2.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const limb = {
  fill: "var(--surface-2, var(--surface))",
  stroke: "var(--ink-soft)",
  strokeWidth: 1.4,
  strokeLinejoin: "round" as const,
};

const measure = {
  fill: "none",
  stroke: "var(--amber)",
  strokeWidth: 1.5,
  strokeDasharray: "5 4",
  strokeLinecap: "round" as const,
};

const measureSolid = {
  fill: "none",
  stroke: "var(--amber)",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
};

const hardware = {
  fill: "none",
  stroke: "var(--ink)",
  strokeWidth: 3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const leader = {
  fill: "none",
  stroke: "var(--ink-soft)",
  strokeWidth: 0.9,
  opacity: 0.7,
};

const label = {
  fill: "var(--muted)",
  fontFamily: "var(--font-body, sans-serif)",
  fontSize: 11,
};

const amberText = {
  fill: "var(--amber)",
  fontFamily: "var(--font-body, sans-serif)",
  fontSize: 11,
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

/* ---- Blocos reutilizáveis — perfil (anterior à esquerda) ------------------ */

/** Corpo vertebral + pedículo + processo articular superior. */
function ArcoAnterior({ b }: { b: BoneStyle }) {
  return (
    <>
      <path
        d="M 6 2 L 50 2 Q 55 2 55 8 L 55 34 Q 55 40 50 40 L 6 40 Q 1 40 2 21 Q 1 2 6 2 Z"
        {...b}
      />
      <path d="M 55 10 L 70 12 Q 74 18 70 24 L 55 26 Z" {...b} />
      <path d="M 64 10 L 66 -6 Q 71 -10 76 -6 L 78 10 Q 71 14 64 10 Z" {...b} />
    </>
  );
}

/** Pars interarticularis + processo articular inferior + lâmina + espinhoso. */
function ArcoPosterior({ b }: { b: BoneStyle }) {
  return (
    <>
      <path d="M 70 12 L 82 18 L 84 29 L 72 24 Z" {...b} />
      <path d="M 75 27 L 89 33 L 87 48 Q 81 52 76 47 Z" {...b} />
      <path d="M 78 15 L 99 22 L 133 26 L 135 34 L 99 36 L 81 32 Z" {...b} />
    </>
  );
}

/** Vértebra lombar íntegra em perfil. */
function VertebraLateral({ b = bone }: { b?: BoneStyle }) {
  return (
    <>
      <ArcoAnterior b={b} />
      <ArcoPosterior b={b} />
    </>
  );
}

/** Sacro em perfil, com promontório anterior e processo articular superior de S1. */
function Sacro({ b = bone }: { b?: BoneStyle }) {
  return (
    <>
      <path d="M 62 6 L 64 -8 Q 69 -12 74 -8 L 76 8 Q 69 12 62 6 Z" {...b} />
      <path
        d="M 5 3 L 58 2 Q 63 2 64 8 L 68 36 Q 70 62 60 84 Q 54 96 46 94 Q 36 68 24 44 Q 12 22 4 12 Q 1 5 5 3 Z"
        {...b}
      />
    </>
  );
}

/** Disco intervertebral entre dois corpos (coordenadas globais). */
function Disco({ x, y, w = 54, h = 14 }: { x: number; y: number; w?: number; h?: number }) {
  return <rect x={x} y={y} width={w} height={h} rx={4} {...discStyle} />;
}

/* ---- Bloco reutilizável — axial (anterior em cima) ------------------------ */

function VertebraAxial({ b = bone }: { b?: BoneStyle }) {
  return (
    <>
      {/* corpo vertebral */}
      <path
        d="M 190 30 Q 248 32 260 66 Q 266 92 252 106 L 228 106 Q 190 96 152 106 L 128 106 Q 114 92 120 66 Q 132 32 190 30 Z"
        {...b}
      />
      {/* pedículos */}
      <path d="M 130 104 L 152 104 L 156 136 L 132 138 Q 122 120 130 104 Z" {...b} />
      <path d="M 250 104 L 228 104 L 224 136 L 248 138 Q 258 120 250 104 Z" {...b} />
      {/* lâminas */}
      <path d="M 132 136 L 156 138 L 188 168 L 180 180 L 142 152 Q 128 146 132 136 Z" {...b} />
      <path d="M 248 136 L 224 138 L 192 168 L 200 180 L 238 152 Q 252 146 248 136 Z" {...b} />
      {/* processo espinhoso */}
      <path d="M 182 168 L 198 168 L 200 214 Q 190 222 180 214 Z" {...b} />
    </>
  );
}

/* ---- 1. Anatomia do canal lombar em perfil -------------------------------- */

const Anatomia: FC<FigureProps> = ({ variant, className, title }) => {
  const destacarLA = variant === "ligamento";
  return (
    <Frame
      viewBox="0 0 460 330"
      title={
        title ??
        "Anatomia do canal lombar em perfil: corpo, disco, pedículo, ligamento amarelo, saco tecal, recesso lateral e forame de conjugação"
      }
      className={className}
    >
      {/* L4 */}
      <g transform="translate(70,36)">
        <VertebraLateral />
      </g>
      <Disco x={71} y={76} />
      {/* L5 */}
      <g transform="translate(70,88)">
        <VertebraLateral />
      </g>
      <Disco x={71} y={128} />
      {/* sacro */}
      <g transform="translate(70,140)">
        <Sacro />
      </g>

      {/* saco tecal — parede posterior do canal em x = 148 */}
      <path
        d="M 126 20 L 148 20 L 148 150 Q 146 176 136 198 L 118 192 Q 128 170 128 148 Z"
        {...neuralSoft}
      />

      {/* ligamento amarelo entre as lâminas de L4 e L5 — parede posterior do canal */}
      <path
        d="M 148 64 L 166 68 Q 171 86 166 104 L 148 108 Q 154 86 148 64 Z"
        {...(destacarLA
          ? { ...ligament, stroke: "var(--amber)", strokeWidth: 2.4, fillOpacity: 0.2 }
          : ligament)}
      />

      {/* raiz de L4 que emerge pelo forame L4-L5 */}
      <path d="M 142 62 Q 132 74 124 88" {...neuralLine} />
      {/* raiz de L5 descendente, no recesso lateral, a caminho do forame L5-S1 */}
      <path d="M 144 78 Q 141 100 134 118" {...neuralLine} />

      {/* forame de conjugação L4-L5 — janela entre os pedículos */}
      <path d="M 126 62 L 144 62 L 144 98 L 126 98 Z" {...measure} />

      {/* rótulos anteriores */}
      <path d="M 62 56 L 40 56" {...leader} />
      <text x={36} y={59} textAnchor="end" {...label}>
        corpo vertebral (L4)
      </text>
      <path d="M 70 83 L 40 83" {...leader} />
      <text x={36} y={86} textAnchor="end" {...label}>
        disco intervertebral
      </text>
      <path d="M 124 88 L 46 116" {...leader} />
      <text x={42} y={119} textAnchor="end" {...label}>
        raiz de L4 emerge no forame
      </text>
      <path d="M 74 190 L 46 206" {...leader} />
      <text x={42} y={209} textAnchor="end" {...label}>
        sacro (promontório)
      </text>

      {/* rótulos posteriores */}
      <path d="M 148 24 L 306 18" {...leader} />
      <text x={310} y={21} {...label}>
        saco tecal — canal central
      </text>
      <path d="M 137 54 L 306 44" {...leader} />
      <text x={310} y={47} {...label}>
        pedículo
      </text>
      <path d="M 144 80 L 306 70" {...leader} />
      <text x={310} y={73} {...label}>
        forame de conjugação L4-L5
      </text>
      <path d="M 166 86 L 306 96" {...leader} />
      <text x={310} y={99} {...label}>
        ligamento amarelo
      </text>
      <path d="M 160 116 L 306 122" {...leader} />
      <text x={310} y={125} {...label}>
        articulação facetária
      </text>
      <path d="M 141 108 L 306 148" {...leader} />
      <text x={310} y={151} {...label}>
        recesso lateral — raiz de L5
      </text>
      <text x={310} y={165} {...label}>
        descendente
      </text>
      <path d="M 200 122 L 306 190" {...leader} />
      <text x={310} y={193} {...label}>
        lâmina e processo espinhoso
      </text>

      <text x={40} y={306} {...label}>
        Perfil — anterior à esquerda. As três paredes que estreitam o canal: disco à frente,
      </text>
      <text x={40} y={320} {...label}>
        faceta lateralmente e ligamento amarelo atrás.
      </text>
    </Frame>
  );
};

/* ---- 2. Corte axial: canal normal × estenose degenerativa ----------------- */

const Axial: FC<FigureProps> = ({ variant, className, title }) => {
  const estenose = variant !== "normal";
  return (
    <Frame
      viewBox="0 0 460 300"
      title={
        title ??
        (estenose
          ? "Corte axial na estenose degenerativa: hipertrofia facetária, ligamento amarelo espessado e abaulamento discal comprimem o saco tecal em aspecto de trevo"
          : "Corte axial normal da vértebra lombar, com saco tecal amplo e recessos laterais livres")
      }
      className={className}
    >
      <VertebraAxial />

      {estenose ? (
        <>
          {/* abaulamento discal posterior */}
          <path d="M 152 104 Q 190 88 228 104 Q 190 118 152 104 Z" {...compress} />
          {/* facetas hipertrofiadas */}
          <ellipse cx={130} cy={150} rx={24} ry={19} {...compress} />
          <ellipse cx={250} cy={150} rx={24} ry={19} {...compress} />
          {/* ligamento amarelo espessado, dobrando-se para dentro do canal */}
          <path
            d="M 154 140 Q 190 160 226 140 Q 228 158 210 166 Q 190 174 170 166 Q 152 158 154 140 Z"
            {...compress}
          />
          {/* saco tecal comprimido — aspecto em trevo */}
          <path
            d="M 190 110 Q 212 110 216 124 Q 218 137 205 141 Q 197 145 190 145 Q 183 145 175 141 Q 162 137 164 124 Q 168 110 190 110 Z"
            {...neuralSoft}
          />

          <path d="M 190 100 L 60 74" {...leader} />
          <text x={56} y={77} textAnchor="end" {...label}>
            abaulamento discal
          </text>
          <path d="M 122 166 L 60 196" {...leader} />
          <text x={56} y={199} textAnchor="end" {...label}>
            hipertrofia facetária
          </text>
          <path d="M 166 132 L 60 138" {...leader} />
          <text x={56} y={141} textAnchor="end" {...label}>
            recesso lateral estreito
          </text>
          <path d="M 190 160 L 320 200" {...leader} />
          <text x={324} y={203} {...label}>
            ligamento amarelo espessado
          </text>
          <path d="M 210 124 L 320 98" {...leader} />
          <text x={324} y={101} {...label}>
            saco tecal comprimido
          </text>
          <text x={324} y={115} {...label}>
            (aspecto em trevo)
          </text>
          <text x={40} y={276} {...label}>
            ESTENOSE — o estreitamento é circunferencial: disco, faceta e ligamento amarelo
          </text>
          <text x={40} y={290} {...label}>
            fecham o canal em conjunto.
          </text>
        </>
      ) : (
        <>
          {/* facetas de tamanho normal */}
          <ellipse cx={134} cy={150} rx={15} ry={13} {...boneBack} />
          <ellipse cx={246} cy={150} rx={15} ry={13} {...boneBack} />
          {/* ligamento amarelo fino */}
          <path d="M 156 140 Q 190 150 224 140 Q 224 148 190 158 Q 156 148 156 140 Z" {...ligament} />
          {/* saco tecal amplo, com raízes */}
          <ellipse cx={190} cy={130} rx={33} ry={23} {...neuralSoft} />
          <circle cx={166} cy={144} r={5} {...neuralSoft} />
          <circle cx={214} cy={144} r={5} {...neuralSoft} />

          <path d="M 216 122 L 320 96" {...leader} />
          <text x={324} y={99} {...label}>
            saco tecal amplo
          </text>
          <path d="M 190 152 L 320 174" {...leader} />
          <text x={324} y={177} {...label}>
            ligamento amarelo fino
          </text>
          <path d="M 166 148 L 60 168" {...leader} />
          <text x={56} y={171} textAnchor="end" {...label}>
            raiz livre no recesso lateral
          </text>
          <text x={40} y={276} {...label}>
            NORMAL — canal central e recessos laterais livres.
          </text>
        </>
      )}

      <path d="M 190 30 L 190 12" {...leader} />
      <text x={190} y={9} textAnchor="middle" {...label}>
        anterior
      </text>
    </Frame>
  );
};

/* ---- 3. Dinâmica postural: extensão fecha, flexão abre -------------------- */

const Dinamica: FC<FigureProps> = ({ variant, className, title }) => {
  const flexao = variant === "flexao";
  return (
    <Frame
      viewBox="0 0 460 320"
      title={
        title ??
        (flexao
          ? "Em flexão o canal lombar alarga: o ligamento amarelo se estira, o abaulamento discal reduz e as facetas se afastam — é o alívio ao sentar e ao apoiar-se no carrinho de supermercado"
          : "Em extensão o canal lombar estreita: o ligamento amarelo se dobra para dentro, o disco abaula e as facetas cavalgam — é a piora em pé e ao caminhar")
      }
      className={className}
    >
      {/* L4 — em extensão inclina-se para trás, em flexão para a frente */}
      <g transform={flexao ? "translate(78,34) rotate(4 60 20)" : "translate(66,34) rotate(-4 60 20)"}>
        <VertebraLateral />
      </g>

      {/* disco: abaula para trás em extensão, retrai em flexão */}
      {flexao ? (
        <Disco x={78} y={76} w={54} />
      ) : (
        <>
          <Disco x={68} y={76} w={54} />
          <path d="M 122 76 Q 138 83 122 90 Z" {...compress} />
        </>
      )}

      {/* L5 */}
      <g transform="translate(70,88)">
        <VertebraLateral />
      </g>
      <Disco x={71} y={128} />
      <g transform="translate(70,140)">
        <Sacro />
      </g>

      {/* ligamento amarelo: dobrado para dentro (extensão) × estirado (flexão) */}
      {flexao ? (
        <path d="M 150 60 L 166 64 Q 169 86 166 108 L 150 112 Q 152 86 150 60 Z" {...ligament} />
      ) : (
        <path
          d="M 148 66 L 166 70 Q 170 88 166 106 L 148 110 Q 128 88 148 66 Z"
          {...compress}
        />
      )}

      {/* saco tecal: pinçado em extensão, amplo em flexão */}
      {flexao ? (
        <path
          d="M 126 20 L 150 20 L 150 150 Q 148 176 138 198 L 120 192 Q 130 170 130 148 Z"
          {...neuralSoft}
        />
      ) : (
        <path
          d="M 126 20 L 148 20 L 148 64 Q 132 88 148 112 L 148 150 Q 146 176 136 198 L 118 192 Q 128 170 128 148 L 128 112 Q 140 88 128 64 Z"
          {...neuralSoft}
        />
      )}

      {/* seta de estreitamento em extensão */}
      {!flexao ? (
        <>
          <path d="M 138 88 L 122 88" {...compressLine} />
          <path d="M 126 84 L 122 88 L 126 92" {...compressLine} />
          <path d="M 142 88 L 158 88" {...compressLine} />
          <path d="M 154 84 L 158 88 L 154 92" {...compressLine} />
        </>
      ) : null}

      {/* medida do diâmetro do canal ao nível de L4-L5 */}
      <path
        d={flexao ? "M 126 132 L 150 132" : "M 128 96 L 148 96"}
        {...measureSolid}
      />
      <path d={flexao ? "M 126 126 L 126 138" : "M 128 90 L 128 102"} {...measureSolid} />
      <path d={flexao ? "M 150 126 L 150 138" : "M 148 90 L 148 102"} {...measureSolid} />

      {flexao ? (
        <>
          <path d="M 152 132 L 314 128" {...leader} />
          <text x={318} y={131} {...amberText}>
            canal ALARGA
          </text>
          <path d="M 166 86 L 314 84" {...leader} />
          <text x={318} y={87} {...label}>
            ligamento amarelo estirado
          </text>
          <path d="M 132 82 L 314 56" {...leader} />
          <text x={318} y={59} {...label}>
            abaulamento discal reduz
          </text>
          <path d="M 158 116 L 314 158" {...leader} />
          <text x={318} y={161} {...label}>
            facetas se afastam
          </text>
          <text x={40} y={278} {...amberText}>
            FLEXÃO — sentar, inclinar-se, apoiar-se no carrinho, subir ladeira, pedalar
          </text>
          <text x={40} y={296} {...label}>
            O paciente ALIVIA. É o mesmo canal: o que mudou foi a postura.
          </text>
        </>
      ) : (
        <>
          <path d="M 150 96 L 314 92" {...leader} />
          <text x={318} y={95} {...amberText}>
            canal ESTREITA
          </text>
          <path d="M 166 88 L 314 118" {...leader} />
          <text x={318} y={121} {...label}>
            ligamento amarelo dobra-se
          </text>
          <text x={318} y={135} {...label}>
            para dentro do canal
          </text>
          <path d="M 134 84 L 314 56" {...leader} />
          <text x={318} y={59} {...label}>
            disco abaula para trás
          </text>
          <path d="M 158 118 L 314 168" {...leader} />
          <text x={318} y={171} {...label}>
            facetas cavalgam
          </text>
          <text x={40} y={278} {...amberText}>
            EXTENSÃO — ficar em pé, caminhar, descer ladeira
          </text>
          <text x={40} y={296} {...label}>
            O paciente PIORA. A estenose lombar é uma doença dinâmica, não apenas anatômica.
          </text>
        </>
      )}
    </Frame>
  );
};

/* ---- 4. Claudicação neurogênica × vascular -------------------------------- */

const Claudicacao: FC<FigureProps> = ({ variant, className, title }) => {
  const vascular = variant === "vascular";
  return (
    <Frame
      viewBox="0 0 460 340"
      title={
        title ??
        (vascular
          ? "Claudicação vascular: estenose arterial, pulsos distais ausentes, dor que sobe de distal para proximal e alivia com o simples repouso em pé"
          : "Claudicação neurogênica: estenose do canal lombar, pulsos distais presentes, dor que desce de proximal para distal e só alivia com a flexão do tronco")
      }
      className={className}
    >
      {/* ---- coluna lombar, à esquerda ---- */}
      <g transform="translate(6,10) scale(0.62)">
        <g transform="translate(70,36)">
          <VertebraLateral b={vascular ? boneBack : bone} />
        </g>
        <Disco x={71} y={76} />
        <g transform="translate(70,88)">
          <VertebraLateral b={vascular ? boneBack : bone} />
        </g>
        <Disco x={71} y={128} />
        <g transform="translate(70,140)">
          <Sacro b={vascular ? boneBack : bone} />
        </g>
        {vascular ? (
          <path
            d="M 126 20 L 148 20 L 148 150 Q 146 176 136 198 L 118 192 Q 128 170 128 148 Z"
            {...neuralSoft}
          />
        ) : (
          <>
            {/* canal estreitado */}
            <path
              d="M 126 20 L 148 20 L 148 66 Q 130 88 148 110 L 148 150 Q 146 176 136 198 L 118 192 Q 128 170 128 148 L 128 110 Q 142 88 128 66 Z"
              {...neuralSoft}
            />
            <path d="M 148 66 L 166 70 Q 170 88 166 106 L 148 110 Q 128 88 148 66 Z" {...compress} />
          </>
        )}
      </g>

      {!vascular ? (
        <>
          <path d="M 104 66 L 148 42" {...leader} />
          <text x={152} y={45} {...amberText}>
            estenose do canal
          </text>
        </>
      ) : null}
      <text x={12} y={176} {...label}>
        coluna lombar
      </text>

      {/* ---- membro inferior, à direita ---- */}
      {/* coxa */}
      <path d="M 300 40 Q 336 40 342 74 L 350 160 Q 352 178 336 180 L 310 180 Q 296 178 296 160 L 292 76 Q 292 44 300 40 Z" {...limb} />
      {/* joelho + perna */}
      <path d="M 306 180 L 342 180 L 348 258 Q 350 280 336 282 L 316 282 Q 304 280 304 258 Z" {...limb} />
      {/* pé */}
      <path d="M 310 282 L 340 282 L 342 300 L 388 306 Q 396 310 388 316 L 314 316 Q 306 314 306 300 Z" {...limb} />

      {/* árvore arterial: femoral → poplítea → tibial posterior → pediosa */}
      <path
        d="M 316 46 L 320 108 L 324 176 L 328 240 L 330 276 L 334 302"
        {...(vascular ? { ...vessel, stroke: "var(--ink-soft)" } : vessel)}
      />
      <path d="M 330 276 L 356 300" {...vessel} />

      {vascular ? (
        <>
          {/* placa/estenose arterial na femoral superficial */}
          <path d="M 318 92 L 322 128" {...compressLine} />
          <ellipse cx={320} cy={110} rx={9} ry={17} {...compress} />
          <path d="M 330 110 L 400 76" {...leader} />
          <text x={404} y={79} {...amberText}>
            estenose arterial
          </text>
          {/* pulsos ausentes */}
          <circle cx={324} cy={176} r={6} {...measure} />
          <circle cx={330} cy={276} r={6} {...measure} />
          <path d="M 318 170 L 330 182" {...compressLine} />
          <path d="M 330 170 L 318 182" {...compressLine} />
          <path d="M 324 270 L 336 282" {...compressLine} />
          <path d="M 336 270 L 324 282" {...compressLine} />
          <path d="M 318 176 L 262 200" {...leader} />
          <text x={258} y={203} textAnchor="end" {...label}>
            pulso poplíteo
          </text>
          <text x={258} y={217} textAnchor="end" {...amberText}>
            AUSENTE
          </text>
          <path d="M 324 276 L 262 268" {...leader} />
          <text x={258} y={271} textAnchor="end" {...label}>
            pulsos distais
          </text>
          <text x={258} y={285} textAnchor="end" {...amberText}>
            AUSENTES
          </text>
          {/* sentido da dor: distal → proximal */}
          <path d="M 372 300 L 372 120" {...measure} />
          <path d="M 368 128 L 372 118 L 376 128" {...measureSolid} />
          <text x={404} y={200} {...amberText}>
            a dor SOBE
          </text>
          <text x={404} y={214} {...label}>
            (panturrilha → coxa)
          </text>
          <path d="M 378 208 L 400 208" {...leader} />

          <text x={12} y={324} {...label}>
            VASCULAR — alivia com o SIMPLES REPOUSO em pé, em minutos; piora ao SUBIR ladeira;
          </text>
          <text x={12} y={338} {...label}>
            distância de marcha fixa; pele atrófica, sem pelos; ITB alterado.
          </text>
        </>
      ) : (
        <>
          {/* pulsos presentes */}
          <circle cx={324} cy={176} r={7} {...measureSolid} />
          <circle cx={324} cy={176} r={12} {...measure} />
          <circle cx={330} cy={276} r={7} {...measureSolid} />
          <circle cx={330} cy={276} r={12} {...measure} />
          <path d="M 312 176 L 262 200" {...leader} />
          <text x={258} y={203} textAnchor="end" {...label}>
            pulso poplíteo
          </text>
          <text x={258} y={217} textAnchor="end" {...amberText}>
            PRESENTE
          </text>
          <path d="M 318 276 L 262 268" {...leader} />
          <text x={258} y={271} textAnchor="end" {...label}>
            pulsos distais
          </text>
          <text x={258} y={285} textAnchor="end" {...amberText}>
            PRESENTES
          </text>
          {/* raízes descendo pelo membro */}
          <path d="M 300 46 Q 314 140 322 232 Q 326 276 336 302" {...neuralLine} />
          {/* sentido da dor: proximal → distal */}
          <path d="M 372 120 L 372 300" {...measure} />
          <path d="M 368 292 L 372 302 L 376 292" {...measureSolid} />
          <text x={404} y={200} {...amberText}>
            a dor DESCE
          </text>
          <text x={404} y={214} {...label}>
            (nádega/coxa → perna)
          </text>
          <path d="M 378 208 L 400 208" {...leader} />
          <path d="M 306 60 L 400 46" {...leader} />
          <text x={404} y={49} {...label}>
            raízes da cauda equina
          </text>

          <text x={12} y={324} {...label}>
            NEUROGÊNICA — precisa SENTAR ou FLETIR o tronco para aliviar; piora ao DESCER ladeira;
          </text>
          <text x={12} y={338} {...label}>
            distância variável; tolera bicicleta e o carrinho de supermercado; pulsos normais.
          </text>
        </>
      )}
    </Frame>
  );
};

/* ---- 5. Graduação morfológica de Schizas (A-D) ---------------------------- */

/** Raízes distribuídas dentro do saco dural, para os graus A e B. */
function Raizes({ cx, cy, modo }: { cx: number; cy: number; modo: "a" | "b" }) {
  const pontosA = [
    [-9, 9],
    [-3, 12],
    [4, 12],
    [10, 8],
    [-13, 4],
    [13, 3],
    [0, 6],
    [7, 14],
    [-7, 14],
  ];
  const pontosB = [
    [-11, -6],
    [-4, -9],
    [4, -8],
    [11, -5],
    [-14, 1],
    [-7, 0],
    [0, -2],
    [7, 1],
    [14, 2],
    [-11, 8],
    [-4, 10],
    [3, 9],
    [10, 8],
    [-1, 15],
    [7, 15],
    [-8, 15],
  ];
  const pontos = modo === "a" ? pontosA : pontosB;
  return (
    <>
      {pontos.map(([dx, dy], i) => (
        <circle key={i} cx={cx + dx} cy={cy + dy} r={2.4} {...rootlet} />
      ))}
    </>
  );
}

const grausSchizas: Record<string, { titulo: string; texto: string }> = {
  a: {
    titulo: "Grau A — sem estenose",
    texto: "Líquor claramente visível; as raízes ocupam a porção dorsal do saco e ficam separadas.",
  },
  b: {
    titulo: "Grau B — estenose moderada",
    texto: "As raízes ocupam todo o saco, mas ainda são individualizáveis; resta algum líquor entre elas.",
  },
  c: {
    titulo: "Grau C — estenose grave",
    texto: "Nenhuma raiz identificável: o saco é homogêneo, sem líquor. A gordura epidural posterior está presente.",
  },
  d: {
    titulo: "Grau D — estenose extrema",
    texto: "Saco homogêneo, sem raízes visíveis E sem gordura epidural posterior.",
  },
};

const Schizas: FC<FigureProps> = ({ variant, className, title }) => {
  const ativo = (variant ?? "c").toLowerCase();
  const g = grausSchizas[ativo] ?? grausSchizas.c;
  const graus: Array<"a" | "b" | "c" | "d"> = ["a", "b", "c", "d"];

  return (
    <Frame
      viewBox="0 0 460 300"
      title={title ?? `Graduação morfológica de Schizas — ${g.titulo}`}
      className={className}
    >
      <text x={30} y={30} {...label}>
        Graduação de Schizas — morfologia do saco dural em T2 axial, pela razão raízes/líquor.
      </text>

      {graus.map((k, i) => {
        const cx = 78 + i * 104;
        const cy = 122;
        const ativoAqui = k === ativo;
        return (
          <g key={k}>
            {/* anel de destaque do grau ativo */}
            {ativoAqui ? <circle cx={cx} cy={cy} r={40} {...measure} /> : null}

            {/* gordura epidural posterior — ausente apenas no grau D */}
            {k !== "d" ? (
              <path
                d={`M ${cx - 22} ${cy + 28} Q ${cx} ${cy + 42} ${cx + 22} ${cy + 28} Q ${cx} ${cy + 36} ${cx - 22} ${cy + 28} Z`}
                {...boneBack}
              />
            ) : null}

            {/* saco dural */}
            {k === "c" || k === "d" ? (
              <circle
                cx={cx}
                cy={cy}
                r={26}
                fill="var(--cortical)"
                fillOpacity={0.3}
                stroke="var(--teal)"
                strokeWidth={1.6}
              />
            ) : (
              <>
                <circle cx={cx} cy={cy} r={26} {...neuralSoft} />
                <Raizes cx={cx} cy={cy - 4} modo={k as "a" | "b"} />
              </>
            )}

            <text x={cx} y={cy + 62} textAnchor="middle" {...(ativoAqui ? amberText : label)}>
              {k.toUpperCase()}
            </text>
          </g>
        );
      })}

      {/* rótulos auxiliares no primeiro e no último saco */}
      <path d="M 78 108 L 78 68" {...leader} />
      <text x={78} y={64} textAnchor="middle" {...label}>
        líquor
      </text>
      <path d="M 78 152 L 40 176" {...leader} />
      <text x={36} y={179} textAnchor="end" {...label}>
        raízes
      </text>
      <path d="M 390 150 L 420 176" {...leader} />
      <text x={424} y={179} {...label}>
        sem gordura
      </text>
      <text x={424} y={193} {...label}>
        epidural
      </text>

      <text x={30} y={228} {...amberText}>
        {g.titulo}
      </text>
      <text x={30} y={246} {...label}>
        {g.texto}
      </text>
      <text x={30} y={272} {...label}>
        C e D falham mais o tratamento conservador; A e B raramente chegam à cirurgia. A graduação
      </text>
      <text x={30} y={286} {...label}>
        avalia o sofrimento das raízes — não substitui a clínica, que continua soberana.
      </text>
    </Frame>
  );
};

/* ---- 6. Zonas da estenose: central, recesso lateral e foraminal ----------- */

const zonasTexto: Record<string, { titulo: string; texto: string }> = {
  central: {
    titulo: "Estenose CENTRAL",
    texto: "Comprime a cauda equina em bloco — é a que produz a claudicação neurogênica clássica.",
  },
  recesso: {
    titulo: "Estenose do RECESSO LATERAL",
    texto: "Comprime a raiz DESCENDENTE (L5 no nível L4-L5) — radiculopatia do nível abaixo.",
  },
  foraminal: {
    titulo: "Estenose FORAMINAL / extraforaminal",
    texto: "Comprime a raiz QUE EMERGE (L4 no nível L4-L5) — a armadilha do nível errado.",
  },
};

const Zonas: FC<FigureProps> = ({ variant, className, title }) => {
  const z = variant ?? "central";
  const info = zonasTexto[z] ?? zonasTexto.central;
  const on = (k: string) => (z === k ? measureSolid : measure);

  return (
    <Frame
      viewBox="0 0 460 320"
      title={title ?? `Zonas da estenose lombar no corte axial de L4-L5 — ${info.titulo}`}
      className={className}
    >
      <VertebraAxial />

      {/* saco tecal central */}
      <ellipse
        cx={190}
        cy={130}
        rx={30}
        ry={21}
        {...(z === "central" ? compress : neuralSoft)}
      />

      {/* raízes descendentes no recesso lateral (L5) */}
      <circle cx={164} cy={144} r={5.5} {...(z === "recesso" ? compress : neuralSoft)} />
      <circle cx={216} cy={144} r={5.5} {...(z === "recesso" ? compress : neuralSoft)} />

      {/* raízes que emergem pelo forame (L4), laterais ao pedículo */}
      <circle cx={112} cy={112} r={5.5} {...(z === "foraminal" ? compress : neuralSoft)} />
      <circle cx={268} cy={112} r={5.5} {...(z === "foraminal" ? compress : neuralSoft)} />

      {/* zona central */}
      <ellipse cx={190} cy={130} rx={38} ry={28} {...on("central")} />
      {/* zonas do recesso lateral */}
      <path d="M 148 118 L 176 118 L 176 158 L 148 158 Z" {...on("recesso")} />
      <path d="M 232 118 L 204 118 L 204 158 L 232 158 Z" {...on("recesso")} />
      {/* zonas foraminais */}
      <path d="M 96 92 L 124 92 L 124 132 L 96 132 Z" {...on("foraminal")} />
      <path d="M 284 92 L 256 92 L 256 132 L 284 132 Z" {...on("foraminal")} />

      {/* rótulos */}
      <path d="M 190 102 L 322 60" {...leader} />
      <text x={326} y={63} {...(z === "central" ? amberText : label)}>
        1. CENTRAL — cauda equina
      </text>
      <path d="M 218 138 L 322 108" {...leader} />
      <text x={326} y={111} {...(z === "recesso" ? amberText : label)}>
        2. RECESSO LATERAL — raiz de L5
      </text>
      <text x={326} y={125} {...label}>
        (descendente)
      </text>
      <path d="M 272 112 L 322 156" {...leader} />
      <text x={326} y={159} {...(z === "foraminal" ? amberText : label)}>
        3. FORAMINAL — raiz de L4
      </text>
      <text x={326} y={173} {...label}>
        (que emerge)
      </text>
      <path d="M 108 112 L 60 88" {...leader} />
      <text x={56} y={91} textAnchor="end" {...label}>
        forame de conjugação
      </text>
      <path d="M 156 146 L 60 158" {...leader} />
      <text x={56} y={161} textAnchor="end" {...label}>
        recesso lateral
      </text>

      <path d="M 190 30 L 190 12" {...leader} />
      <text x={190} y={9} textAnchor="middle" {...label}>
        anterior
      </text>

      <text x={30} y={272} {...amberText}>
        {info.titulo}
      </text>
      <text x={30} y={290} {...label}>
        {info.texto}
      </text>
      <text x={30} y={310} {...label}>
        Corte axial em L4-L5. As três zonas coexistem e cada uma pede um gesto cirúrgico diferente.
      </text>
    </Frame>
  );
};

/* ---- 7. Tratamento cirúrgico ---------------------------------------------- */

const Tratamento: FC<FigureProps> = ({ variant, activeStep, className, title }) => {
  const modo = variant ?? (activeStep && activeStep >= 8 ? "artrodese" : "descompressao");
  const artrodese = modo === "artrodese";
  const overTheTop = modo === "over-the-top";

  const legenda = artrodese
    ? "Descompressão associada a artrodese posterolateral instrumentada com parafusos pediculares"
    : overTheTop
      ? "Descompressão bilateral por acesso unilateral (over-the-top): a lâmina contralateral é trabalhada por baixo, preservando as facetas e o complexo espinhoso-ligamentar"
      : "Descompressão isolada: laminotomia bilateral com ressecção do ligamento amarelo e da porção medial das facetas, preservando ao menos metade de cada faceta";

  return (
    <Frame viewBox="0 0 460 320" title={title ?? legenda} className={className}>
      {/* corpo vertebral e pedículos permanecem em todos os cenários */}
      <path
        d="M 190 30 Q 248 32 260 66 Q 266 92 252 106 L 228 106 Q 190 96 152 106 L 128 106 Q 114 92 120 66 Q 132 32 190 30 Z"
        {...bone}
      />
      <path d="M 130 104 L 152 104 L 156 136 L 132 138 Q 122 120 130 104 Z" {...bone} />
      <path d="M 250 104 L 228 104 L 224 136 L 248 138 Q 258 120 250 104 Z" {...bone} />

      {/* elementos posteriores: presentes na artrodese, parcialmente ressecados nas descompressões */}
      {artrodese ? (
        <>
          <path d="M 132 136 L 156 138 L 188 168 L 180 180 L 142 152 Q 128 146 132 136 Z" {...bone} />
          <path d="M 248 136 L 224 138 L 192 168 L 200 180 L 238 152 Q 252 146 248 136 Z" {...bone} />
          <path d="M 182 168 L 198 168 L 200 214 Q 190 222 180 214 Z" {...bone} />
        </>
      ) : overTheTop ? (
        <>
          {/* acesso pela esquerda: lâmina esquerda parcialmente ressecada */}
          <path d="M 132 136 L 150 138 L 168 156 L 160 168 L 142 152 Q 128 146 132 136 Z" {...bone} />
          {/* lâmina direita preservada — trabalhada por baixo */}
          <path d="M 248 136 L 224 138 L 192 168 L 200 180 L 238 152 Q 252 146 248 136 Z" {...bone} />
          {/* processo espinhoso preservado */}
          <path d="M 182 168 L 198 168 L 200 214 Q 190 222 180 214 Z" {...bone} />
          {/* contorno tracejado do osso ressecado à esquerda */}
          <path
            d="M 150 138 L 188 168 L 180 180 L 160 168"
            fill="none"
            stroke="var(--ink-soft)"
            strokeWidth={1.2}
            strokeDasharray="4 4"
            opacity={0.6}
          />
          {/* trajeto do trabalho contralateral, por baixo do espinhoso */}
          <path d="M 158 158 Q 190 138 224 152" {...measure} />
          <path d="M 218 146 L 226 153 L 217 158" {...measureSolid} />
        </>
      ) : (
        <>
          {/* laminotomia bilateral: porções mediais das lâminas ressecadas */}
          <path d="M 132 136 L 150 138 L 166 154 L 158 166 L 142 152 Q 128 146 132 136 Z" {...bone} />
          <path d="M 248 136 L 230 138 L 214 154 L 222 166 L 238 152 Q 252 146 248 136 Z" {...bone} />
          {/* contorno tracejado do osso e do ligamento removidos */}
          <path
            d="M 150 138 L 188 168 L 180 180 L 158 166 M 230 138 L 192 168 L 200 180 L 222 166 M 182 168 L 198 168 L 200 214 Q 190 222 180 214 Z"
            fill="none"
            stroke="var(--ink-soft)"
            strokeWidth={1.2}
            strokeDasharray="4 4"
            opacity={0.6}
          />
        </>
      )}

      {/* saco tecal descomprimido — amplo em todos os cenários */}
      <ellipse cx={190} cy={130} rx={33} ry={23} {...neuralSoft} />
      <circle cx={166} cy={144} r={5} {...neuralSoft} />
      <circle cx={214} cy={144} r={5} {...neuralSoft} />

      {/* facetas: preservadas em pelo menos metade */}
      <ellipse cx={132} cy={150} rx={15} ry={13} {...boneBack} />
      <ellipse cx={248} cy={150} rx={15} ry={13} {...boneBack} />

      {artrodese ? (
        <>
          {/* parafusos pediculares convergentes, entrando pelos pedículos */}
          <path d="M 132 156 L 172 62" {...hardware} />
          <path d="M 248 156 L 208 62" {...hardware} />
          {/* cabeças dos parafusos e hastes em corte */}
          <circle cx={130} cy={160} r={7} {...hardware} />
          <circle cx={250} cy={160} r={7} {...hardware} />
          <circle cx={128} cy={172} r={4.5} {...hardware} />
          <circle cx={252} cy={172} r={4.5} {...hardware} />

          <path d="M 152 108 L 60 74" {...leader} />
          <text x={56} y={77} textAnchor="end" {...label}>
            parafuso pedicular
          </text>
          <path d="M 128 172 L 60 200" {...leader} />
          <text x={56} y={203} textAnchor="end" {...label}>
            haste (em corte)
          </text>
          <path d="M 216 124 L 322 96" {...leader} />
          <text x={326} y={99} {...label}>
            saco tecal descomprimido
          </text>
          <path d="M 252 160 L 322 176" {...leader} />
          <text x={326} y={179} {...label}>
            enxerto posterolateral sobre
          </text>
          <text x={326} y={193} {...label}>
            facetas e processos transversos
          </text>

          <text x={30} y={272} {...amberText}>
            DESCOMPRESSÃO + ARTRODESE INSTRUMENTADA
          </text>
          <text x={30} y={290} {...label}>
            Reservada à instabilidade demonstrada, listese móvel, dor lombar mecânica dominante,
          </text>
          <text x={30} y={304} {...label}>
            deformidade ou facetectomia extensa. Custa mais tempo, sangue, internação e dinheiro.
          </text>
        </>
      ) : overTheTop ? (
        <>
          <path d="M 148 152 L 60 178" {...leader} />
          <text x={56} y={181} textAnchor="end" {...label}>
            acesso unilateral
          </text>
          <path d="M 200 144 L 322 120" {...leader} />
          <text x={326} y={123} {...label}>
            lâmina contralateral trabalhada
          </text>
          <text x={326} y={137} {...label}>
            por baixo do espinhoso
          </text>
          <path d="M 216 124 L 322 96" {...leader} />
          <text x={326} y={99} {...label}>
            saco tecal descomprimido
          </text>
          <path d="M 194 200 L 322 194" {...leader} />
          <text x={326} y={197} {...label}>
            espinhoso e ligamento
          </text>
          <text x={326} y={211} {...label}>
            supraespinhoso preservados
          </text>

          <text x={30} y={272} {...amberText}>
            DESCOMPRESSÃO BILATERAL POR ACESSO UNILATERAL (OVER-THE-TOP)
          </text>
          <text x={30} y={290} {...label}>
            Descomprime os dois recessos preservando facetas, espinhoso e ligamentos — menos risco
          </text>
          <text x={30} y={304} {...label}>
            de instabilidade iatrogênica.
          </text>
        </>
      ) : (
        <>
          <path d="M 190 176 L 60 200" {...leader} />
          <text x={56} y={203} textAnchor="end" {...label}>
            arco posterior ressecado
          </text>
          <text x={56} y={217} textAnchor="end" {...label}>
            (contorno tracejado)
          </text>
          <path d="M 216 124 L 322 96" {...leader} />
          <text x={326} y={99} {...label}>
            saco tecal descomprimido
          </text>
          <path d="M 140 150 L 322 146" {...leader} />
          <text x={326} y={149} {...label}>
            preservar ≥ metade de cada faceta
          </text>
          <path d="M 170 148 L 322 196" {...leader} />
          <text x={326} y={199} {...label}>
            recessos laterais liberados
          </text>

          <text x={30} y={272} {...amberText}>
            DESCOMPRESSÃO ISOLADA
          </text>
          <text x={30} y={290} {...label}>
            Suficiente para a maioria: sem implantes, menos sangramento, menos tempo, menos custo.
          </text>
          <text x={30} y={304} {...label}>
            O limite técnico é a faceta — ressecá-la além da metade cria instabilidade iatrogênica.
          </text>
        </>
      )}

      <path d="M 190 30 L 190 12" {...leader} />
      <text x={190} y={9} textAnchor="middle" {...label}>
        anterior
      </text>
    </Frame>
  );
};

/* -------------------------------------------------------------------------- */

export const figures: Record<string, FC<FigureProps>> = {
  "estenose-lombar:anatomia": Anatomia,
  "estenose-lombar:axial": Axial,
  "estenose-lombar:dinamica": Dinamica,
  "estenose-lombar:claudicacao": Claudicacao,
  "estenose-lombar:schizas": Schizas,
  "estenose-lombar:zonas": Zonas,
  "estenose-lombar:tratamento": Tratamento,
};
