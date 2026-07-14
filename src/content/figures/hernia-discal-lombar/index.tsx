import type { FC, ReactNode } from "react";
import type { FigureProps } from "../../../types/topic";

/* ============================================================================
   Figuras esquemáticas originais — Hérnia discal lombar.
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
  strokeWidth: 1.2,
  strokeLinejoin: "round" as const,
};

type BoneStyle = typeof bone;

const anulo = {
  fill: "var(--teal)",
  fillOpacity: 0.1,
  stroke: "var(--teal)",
  strokeWidth: 1.7,
  strokeLinejoin: "round" as const,
};

const nucleo = {
  fill: "var(--teal)",
  fillOpacity: 0.32,
  stroke: "var(--teal)",
  strokeWidth: 1.2,
};

const lamela = {
  fill: "none",
  stroke: "var(--teal)",
  strokeWidth: 0.9,
  opacity: 0.5,
};

const saco = {
  fill: "var(--teal)",
  fillOpacity: 0.14,
  stroke: "var(--teal)",
  strokeWidth: 1.7,
  strokeLinejoin: "round" as const,
};

const raiz = {
  fill: "var(--teal)",
  fillOpacity: 0.55,
  stroke: "var(--teal)",
  strokeWidth: 1.4,
};

const raizSofrida = {
  fill: "var(--cortical)",
  fillOpacity: 0.5,
  stroke: "var(--cortical)",
  strokeWidth: 1.8,
};

const hernia = {
  fill: "var(--cortical)",
  fillOpacity: 0.3,
  stroke: "var(--cortical)",
  strokeWidth: 2.2,
  strokeLinejoin: "round" as const,
};

const herniaFantasma = {
  fill: "none",
  stroke: "var(--cortical)",
  strokeWidth: 1.1,
  strokeDasharray: "3 3",
  opacity: 0.4,
  strokeLinejoin: "round" as const,
};

const ligamento = {
  fill: "var(--ink-soft)",
  fillOpacity: 0.16,
  stroke: "var(--ink-soft)",
  strokeWidth: 1.4,
  strokeLinejoin: "round" as const,
};

const measure = {
  fill: "none",
  stroke: "var(--amber)",
  strokeWidth: 1.4,
  strokeDasharray: "5 4",
  strokeLinecap: "round" as const,
};

const measureSolid = {
  fill: "none",
  stroke: "var(--amber)",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
};

const highlight = {
  fill: "var(--amber)",
  fillOpacity: 0.16,
  stroke: "var(--amber)",
  strokeWidth: 1.8,
  strokeDasharray: "6 4",
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

const tealText = {
  fill: "var(--teal)",
  fontFamily: "var(--font-body, sans-serif)",
  fontSize: 11,
};

const corticalText = {
  fill: "var(--cortical)",
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

/* ---- Blocos reutilizáveis — corte AXIAL no nível do disco ------------------
   Convenção radiológica: anterior em cima, posterior embaixo; o lado esquerdo
   da tela corresponde ao lado direito do paciente.
   -------------------------------------------------------------------------- */

/** Contorno do disco intervertebral em corte axial (parede posterior côncava). */
const CONTORNO_DISCO =
  "M 200 58 C 262 58 306 84 306 118 C 306 140 292 154 268 156 L 216 156 C 210 151 206 149 200 149 C 194 149 190 151 184 156 L 132 156 C 108 154 94 140 94 118 C 94 84 138 58 200 58 Z";

/** Disco em corte axial: ânulo lamelar + núcleo pulposo central-posterior. */
function DiscoAxial() {
  return (
    <>
      <path d={CONTORNO_DISCO} {...anulo} />
      <path
        d="M 200 70 C 252 70 294 90 294 118 C 294 136 282 146 262 147 L 218 147 C 211 142 207 140 200 140 C 193 140 189 142 182 147 L 138 147 C 118 146 106 136 106 118 C 106 90 148 70 200 70 Z"
        {...lamela}
      />
      <path
        d="M 200 82 C 244 82 282 96 282 118 C 282 132 272 139 256 139 L 220 139 C 213 134 208 132 200 132 C 192 132 187 134 180 139 L 144 139 C 128 139 118 132 118 118 C 118 96 156 82 200 82 Z"
        {...lamela}
      />
      <ellipse cx={200} cy={116} rx={44} ry={24} {...nucleo} />
    </>
  );
}

/** Arco neural em corte axial: pedículos, lâminas, facetas, espinhosa. */
function ArcoAxial({ b = bone }: { b?: BoneStyle }) {
  return (
    <>
      <path
        d="M 136 150 C 110 152 94 164 94 184 C 94 206 138 238 200 260 L 200 246 C 146 224 116 198 116 180 C 116 166 128 161 144 161 Z"
        {...b}
      />
      <path
        d="M 264 150 C 290 152 306 164 306 184 C 306 206 262 238 200 260 L 200 246 C 254 224 284 198 284 180 C 284 166 272 161 256 161 Z"
        {...b}
      />
      <path d="M 104 168 L 46 152 L 42 166 L 100 186 Z" {...b} />
      <path d="M 296 168 L 354 152 L 358 166 L 300 186 Z" {...b} />
      <path d="M 188 252 L 212 252 L 208 296 Q 200 306 192 296 Z" {...b} />
      <ellipse cx={106} cy={198} rx={14} ry={18} {...boneBack} />
      <ellipse cx={294} cy={198} rx={14} ry={18} {...boneBack} />
    </>
  );
}

/** Ligamento amarelo forrando a face interna das lâminas. */
function LigamentoAmarelo() {
  return (
    <>
      <path d="M 122 178 C 124 198 152 222 200 242 L 200 232 C 158 214 134 194 132 176 Z" {...ligamento} />
      <path d="M 278 178 C 276 198 248 222 200 242 L 200 232 C 242 214 266 194 268 176 Z" {...ligamento} />
    </>
  );
}

/** Saco tecal no canal, com as duas raízes descendentes (que atravessam). */
function SacoTecalAxial({ rx = 50, ry = 31 }: { rx?: number; ry?: number }) {
  return <ellipse cx={200} cy={198} rx={rx} ry={ry} {...saco} />;
}

/* ---- Blocos reutilizáveis — PERFIL (sagital) -------------------------------
   Vértebra lombar em perfil, anterior à esquerda; origem local no ângulo
   ântero-superior do corpo.
   -------------------------------------------------------------------------- */

function VertebraPerfil({ b = bone }: { b?: BoneStyle }) {
  return (
    <>
      <path d="M 8 0 L 62 0 Q 68 0 68 7 L 68 41 Q 68 48 62 48 L 8 48 Q 0 48 2 24 Q 0 0 8 0 Z" {...b} />
      <path d="M 68 10 L 92 13 Q 98 24 92 35 L 68 38 Z" {...b} />
      <path d="M 82 11 L 85 -10 Q 92 -17 100 -10 L 103 12 Q 92 18 82 11 Z" {...b} />
      <path d="M 92 14 L 107 22 L 109 35 L 94 29 Z" {...b} />
      <path d="M 99 32 L 116 40 L 114 58 Q 106 63 99 56 Z" {...b} />
      <path d="M 103 17 L 128 25 L 168 30 L 170 40 L 128 42 L 106 37 Z" {...b} />
    </>
  );
}

/* ---- 1. Anatomia ---------------------------------------------------------- */

const Anatomia: FC<FigureProps> = ({ variant, className, title }) => {
  const sagital = variant === "sagital";
  return (
    <Frame
      viewBox={sagital ? "-30 -20 660 380" : "-118 -18 736 372"}
      title={
        title ??
        (sagital
          ? "Segmento móvel lombar em perfil: disco, forame e saco tecal"
          : "Corte axial no nível do disco lombar: canal, recesso lateral e forame")
      }
      className={className}
    >
      {!sagital && (
        <>
          <DiscoAxial />
          <ArcoAxial />
          <LigamentoAmarelo />
          <SacoTecalAxial />
          {/* raízes que atravessam, no recesso lateral */}
          <circle cx={168} cy={186} r={8.5} {...raiz} />
          <circle cx={232} cy={186} r={8.5} {...raiz} />
          {/* raízes que emergem, no forame */}
          <circle cx={84} cy={148} r={8.5} {...raiz} />
          <circle cx={316} cy={148} r={8.5} {...raiz} />

          {/* orientação */}
          <text x={172} y={40} {...label}>
            ANTERIOR
          </text>
          <text x={172} y={326} {...label}>
            POSTERIOR
          </text>

          {/* rótulos à esquerda */}
          <path d="M 196 116 L 30 96" {...leader} />
          <text x={-114} y={92} {...tealText}>
            núcleo pulposo
          </text>
          <text x={-114} y={106} {...label}>
            (gel hidratado, contido)
          </text>
          <path d="M 118 96 L 30 138" {...leader} />
          <text x={-114} y={142} {...tealText}>
            ânulo fibroso
          </text>
          <text x={-114} y={156} {...label}>
            lamelas oblíquas alternadas;
          </text>
          <text x={-114} y={170} {...label}>
            mais fino e menos lamelar atrás
          </text>
          <path d="M 84 148 L 30 200" {...leader} />
          <text x={-114} y={204} {...tealText}>
            raiz que EMERGE (forame)
          </text>
          <text x={-114} y={218} {...label}>
            raiz do próprio nível — sai acima
          </text>
          <text x={-114} y={232} {...label}>
            do disco; sofre na hérnia foraminal
          </text>
          <path d="M 104 170 L 30 262" {...leader} />
          <text x={-114} y={266} {...label}>
            processo articular superior
          </text>
          <text x={-114} y={280} {...label}>
            (faceta) — limite lateral do canal
          </text>

          {/* rótulos à direita */}
          <path d="M 232 186 L 376 150" {...leader} />
          <text x={380} y={146} {...tealText}>
            raiz que ATRAVESSA
          </text>
          <text x={380} y={160} {...label}>
            (recesso lateral) — raiz do nível
          </text>
          <text x={380} y={174} {...label}>
            abaixo; é ela que a hérnia
          </text>
          <text x={380} y={188} {...label}>
            paracentral comprime
          </text>
          <path d="M 246 206 L 376 218" {...leader} />
          <text x={380} y={222} {...tealText}>
            saco tecal (cauda equina)
          </text>
          <path d="M 254 226 L 376 252" {...leader} />
          <text x={380} y={256} {...label}>
            ligamento amarelo
          </text>
          <text x={380} y={270} {...label}>
            (forra a lâmina; é o teto removido
          </text>
          <text x={380} y={284} {...label}>
            na microdiscectomia)
          </text>
          <path d="M 268 240 L 376 312" {...leader} />
          <text x={380} y={316} {...label}>
            lâmina e processo espinhoso
          </text>
        </>
      )}

      {sagital && (
        <>
          {/* L4 */}
          <g transform="translate(70, 40)">
            <VertebraPerfil />
          </g>
          {/* disco L4-L5 */}
          <rect x={70} y={90} width={68} height={24} rx={7} {...anulo} />
          <ellipse cx={110} cy={102} rx={22} ry={8} {...nucleo} />
          {/* L5 */}
          <g transform="translate(70, 116)">
            <VertebraPerfil />
          </g>
          {/* disco L5-S1 */}
          <rect x={70} y={166} width={68} height={22} rx={7} {...anulo} />
          <ellipse cx={110} cy={177} rx={22} ry={7} {...nucleo} />
          {/* S1 */}
          <g transform="translate(70, 190)">
            <VertebraPerfil b={boneBack} />
          </g>

          {/* saco tecal no canal */}
          <path d="M 142 20 L 172 20 L 172 250 Q 157 264 142 250 Z" {...saco} />
          {/* raízes emergindo pelos forames */}
          <circle cx={152} cy={98} r={7.5} {...raiz} />
          <path d="M 152 98 C 146 108 142 118 140 128" {...{ ...leader, stroke: "var(--teal)", strokeWidth: 2.4, opacity: 1 }} />
          <circle cx={152} cy={174} r={7.5} {...raiz} />

          {/* ligamento longitudinal posterior */}
          <path d="M 138 30 L 143 30 L 143 240 L 138 240 Z" {...ligamento} />

          {/* rótulos */}
          <text x={72} y={16} {...label}>
            ANTERIOR
          </text>
          <text x={210} y={16} {...label}>
            POSTERIOR
          </text>
          <path d="M 110 102 L 240 70" {...leader} />
          <text x={244} y={66} {...tealText}>
            disco L4-L5
          </text>
          <text x={244} y={80} {...label}>
            altura discal preservada mantém
          </text>
          <text x={244} y={94} {...label}>
            a altura do forame
          </text>
          <path d="M 141 130 L 240 120" {...leader} />
          <text x={244} y={124} {...tealText}>
            ligamento longitudinal posterior
          </text>
          <text x={244} y={138} {...label}>
            forte na linha média e afilado nas
          </text>
          <text x={244} y={152} {...label}>
            bordas — por isso a hérnia costuma
          </text>
          <text x={244} y={166} {...label}>
            ser PARACENTRAL, e não central
          </text>
          <path d="M 158 174 L 240 196" {...leader} />
          <text x={244} y={200} {...tealText}>
            forame de conjugação
          </text>
          <text x={244} y={214} {...label}>
            teto = pedículo; assoalho = pedículo
          </text>
          <text x={244} y={228} {...label}>
            do nível abaixo; parede anterior =
          </text>
          <text x={244} y={242} {...label}>
            corpo e disco
          </text>
          <path d="M 165 250 L 240 272" {...leader} />
          <text x={244} y={276} {...tealText}>
            saco tecal / cauda equina
          </text>
          <text x={244} y={290} {...label}>
            o cone medular termina em L1-L2:
          </text>
          <text x={244} y={304} {...label}>
            abaixo disso, lesão é de raiz, não
          </text>
          <text x={244} y={318} {...label}>
            de medula (neurônio motor inferior)
          </text>
        </>
      )}
    </Frame>
  );
};

/* ---- 2. Morfologia: protrusão × extrusão × sequestro ----------------------- */

const Tipos: FC<FigureProps> = ({ variant, className, title }) => {
  const v = variant ?? "protrusao";
  const nome =
    v === "sequestro" ? "Sequestro" : v === "extrusao" ? "Extrusão" : v === "abaulamento" ? "Abaulamento" : "Protrusão";
  return (
    <Frame
      viewBox="-10 -14 640 320"
      title={title ?? `Morfologia da hérnia discal: ${nome} (corte sagital)`}
      className={className}
    >
      {/* platôs vertebrais */}
      <path d="M 44 34 L 186 34 Q 194 34 194 42 L 194 104 Q 194 112 186 112 L 44 112 Q 34 112 36 73 Q 34 34 44 34 Z" {...bone} />
      <path d="M 44 176 L 186 176 Q 194 176 194 184 L 194 246 Q 194 254 186 254 L 44 254 Q 34 254 36 215 Q 34 176 44 176 Z" {...bone} />
      {/* disco */}
      <rect x={40} y={114} width={154} height={60} rx={8} {...anulo} />
      <ellipse cx={118} cy={144} rx={44} ry={20} {...nucleo} />
      {/* ligamento longitudinal posterior */}
      <path d="M 194 40 L 201 40 L 201 248 L 194 248 Z" {...ligamento} />
      {/* saco tecal */}
      <path d="M 246 20 L 292 20 L 292 268 L 246 268 Z" {...saco} />

      {/* fragmento conforme a morfologia */}
      {v === "abaulamento" && (
        <>
          <path d="M 194 118 C 208 128 210 160 194 170 Z" {...hernia} />
          <path d="M 194 118 L 194 170" {...herniaFantasma} />
        </>
      )}

      {v === "protrusao" && (
        <>
          {/* base larga, domo menor que a base */}
          <path d="M 194 120 C 224 126 226 162 194 168 Z" {...hernia} />
          <path d="M 200 120 L 236 120" {...measure} />
          <path d="M 200 168 L 236 168" {...measure} />
          <path d="M 232 120 L 232 168" {...measureSolid} />
          <text x={240} y={140} {...amberText}>
            BASE
          </text>
          <text x={240} y={154} {...amberText}>
            larga
          </text>
          <path d="M 214 132 L 214 156" {...measureSolid} />
          <text x={206} y={188} {...amberText}>
            domo &lt; base
          </text>
        </>
      )}

      {v === "extrusao" && (
        <>
          {/* colo estreito, domo maior que o colo, atravessa o LLP */}
          <path
            d="M 194 130 L 210 134 C 234 122 262 132 262 156 C 262 180 232 190 210 176 L 194 160 Z"
            {...hernia}
          />
          <path d="M 206 130 L 244 118" {...measure} />
          <path d="M 206 178 L 244 190" {...measure} />
          <path d="M 212 134 L 212 176" {...measureSolid} />
          <text x={150} y={206} {...amberText}>
            colo estreito
          </text>
          <path d="M 262 130 L 262 182" {...measureSolid} />
          <text x={268} y={150} {...amberText}>
            DOMO &gt; colo
          </text>
          <text x={268} y={164} {...amberText}>
            (rompeu o ânulo)
          </text>
        </>
      )}

      {v === "sequestro" && (
        <>
          {/* fragmento residual na base + fragmento livre migrado */}
          <path d="M 194 132 C 212 136 214 158 194 162 Z" {...hernia} />
          <path d="M 220 198 C 244 188 268 200 266 222 C 264 244 236 252 220 238 C 208 226 208 206 220 198 Z" {...hernia} />
          <path d="M 214 150 C 224 168 220 186 222 196" {...herniaFantasma} />
          <path d="M 206 210 L 206 244" {...measureSolid} />
          <text x={126} y={272} {...amberText}>
            SEM continuidade com o disco
          </text>
          <text x={274} y={216} {...amberText}>
            fragmento LIVRE, migrado
          </text>
          <text x={274} y={230} {...amberText}>
            (maior chance de reabsorver)
          </text>
        </>
      )}

      {/* rótulos gerais */}
      <text x={46} y={22} {...label}>
        ANTERIOR
      </text>
      <text x={252} y={288} {...label}>
        POSTERIOR
      </text>
      <path d="M 118 144 L 336 60" {...leader} />
      <text x={340} y={56} {...tealText}>
        núcleo pulposo
      </text>
      <path d="M 200 60 L 336 96" {...leader} />
      <text x={340} y={100} {...label}>
        ligamento longitudinal posterior
      </text>
      <path d="M 270 60 L 336 132" {...leader} />
      <text x={340} y={136} {...tealText}>
        saco tecal
      </text>

      <text x={340} y={176} {...corticalText}>
        {nome.toUpperCase()}
      </text>
      {v === "abaulamento" && (
        <>
          <text x={340} y={194} {...label}>
            Não é hérnia. Extensão circunferencial
          </text>
          <text x={340} y={208} {...label}>
            &gt; 25% do perímetro do disco, simétrica,
          </text>
          <text x={340} y={222} {...label}>
            sem foco. Achado degenerativo comum
          </text>
          <text x={340} y={236} {...label}>
            e em geral irrelevante isoladamente.
          </text>
        </>
      )}
      {v === "protrusao" && (
        <>
          <text x={340} y={194} {...label}>
            Deslocamento focal (&lt; 25% do perímetro)
          </text>
          <text x={340} y={208} {...label}>
            em que a MAIOR distância entre as bordas
          </text>
          <text x={340} y={222} {...label}>
            do material herniado é MENOR que a base.
          </text>
          <text x={340} y={236} {...label}>
            Ânulo externo ainda contém o material.
          </text>
        </>
      )}
      {v === "extrusao" && (
        <>
          <text x={340} y={194} {...label}>
            O material herniado tem, em algum plano,
          </text>
          <text x={340} y={208} {...label}>
            dimensão MAIOR que a base (colo). Rompeu
          </text>
          <text x={340} y={222} {...label}>
            o ânulo externo e, em geral, o ligamento
          </text>
          <text x={340} y={236} {...label}>
            longitudinal posterior. Pode migrar.
          </text>
        </>
      )}
      {v === "sequestro" && (
        <>
          <text x={340} y={194} {...label}>
            Extrusão em que o fragmento PERDEU a
          </text>
          <text x={340} y={208} {...label}>
            continuidade com o disco de origem.
          </text>
          <text x={340} y={222} {...label}>
            Maior exposição a vasos e macrófagos:
          </text>
          <text x={340} y={236} {...label}>
            é a morfologia que MAIS reabsorve.
          </text>
        </>
      )}
    </Frame>
  );
};

/* ---- 3. Zonas anatômicas do corte axial ----------------------------------- */

const Zonas: FC<FigureProps> = ({ variant, className, title }) => {
  const v = variant ?? "mapa";
  return (
    <Frame
      viewBox="-118 -18 736 372"
      title={title ?? "Zonas anatômicas da hérnia discal lombar no corte axial"}
      className={className}
    >
      <DiscoAxial />
      <ArcoAxial />
      <SacoTecalAxial />
      <circle cx={168} cy={186} r={8.5} {...(v === "central" || v === "paracentral" ? raizSofrida : raiz)} />
      <circle cx={232} cy={186} r={8.5} {...(v === "central" ? raizSofrida : raiz)} />
      <circle cx={84} cy={148} r={8.5} {...(v === "foraminal" || v === "extraforaminal" ? raizSofrida : raiz)} />
      <circle cx={316} cy={148} r={8.5} {...raiz} />

      {/* limites das zonas (linhas de referência) */}
      <path d="M 178 150 L 178 264" {...measure} />
      <path d="M 222 150 L 222 264" {...measure} />
      <path d="M 128 60 L 128 210" {...measure} />
      <path d="M 272 60 L 272 210" {...measure} />
      <text x={186} y={318} {...amberText}>
        central
      </text>
      <text x={124} y={332} {...amberText}>
        paracentral (recesso lateral)
      </text>
      <text x={62} y={52} {...amberText}>
        foraminal
      </text>
      <text x={-4} y={38} {...amberText}>
        extraforaminal
      </text>
      <path d="M 128 46 L 178 46" {...measureSolid} />
      <path d="M 92 46 L 128 46" {...measureSolid} />

      {/* fragmento na zona escolhida */}
      {v === "central" && <path d="M 178 152 C 200 160 222 160 222 152 C 214 180 186 180 178 152 Z" {...hernia} />}
      {v === "paracentral" && (
        <path d="M 146 154 C 160 154 176 152 180 150 C 186 176 158 190 146 172 C 140 164 140 156 146 154 Z" {...hernia} />
      )}
      {v === "foraminal" && (
        <path d="M 108 138 C 118 132 130 138 128 150 C 126 162 110 166 100 158 C 94 150 98 142 108 138 Z" {...hernia} />
      )}
      {v === "extraforaminal" && (
        <path d="M 68 122 C 80 116 92 124 90 136 C 88 148 72 152 62 144 C 56 136 58 126 68 122 Z" {...hernia} />
      )}

      {/* rótulos explicativos */}
      <text x={380} y={62} {...corticalText}>
        REGRA DA RAIZ COMPRIMIDA (exemplo em L4-L5)
      </text>
      <text x={380} y={82} {...label}>
        PARACENTRAL (a mais comum, ~ 90%): o
      </text>
      <text x={380} y={96} {...label}>
        ligamento longitudinal posterior é forte na
      </text>
      <text x={380} y={110} {...label}>
        linha média e desvia o fragmento para o
      </text>
      <text x={380} y={124} {...label}>
        recesso lateral. Comprime a raiz que
      </text>
      <text x={380} y={138} {...tealText}>
        ATRAVESSA — em L4-L5, a raiz de L5.
      </text>

      <text x={380} y={166} {...label}>
        FORAMINAL / EXTRAFORAMINAL (~ 10%): o
      </text>
      <text x={380} y={180} {...label}>
        fragmento sai lateralmente e pega a raiz que
      </text>
      <text x={380} y={194} {...tealText}>
        EMERGE — em L4-L5, a raiz de L4.
      </text>
      <text x={380} y={208} {...label}>
        Dor mais intensa, mais em pé, Lasègue menos
      </text>
      <text x={380} y={222} {...label}>
        sensível; a via interlaminar clássica NÃO
      </text>
      <text x={380} y={236} {...label}>
        alcança — exige via extraforaminal (Wiltse).
      </text>

      <text x={380} y={264} {...label}>
        CENTRAL volumosa: comprime todo o saco e é a
      </text>
      <text x={380} y={278} {...label}>
        que produz síndrome da cauda equina.
      </text>
      <text x={380} y={306} {...amberText}>
        Erro clássico: pedir cirurgia para L5 quando a
      </text>
      <text x={380} y={320} {...amberText}>
        hérnia é foraminal e a raiz doente é L4.
      </text>
    </Frame>
  );
};

/* ---- 4. Síndromes radiculares L4 / L5 / S1 -------------------------------- */

const MEMBRO =
  "M 74 26 C 62 70 68 120 78 158 C 84 178 84 192 82 206 C 70 236 82 268 94 296 C 98 312 100 322 100 332 C 94 340 94 348 104 350 L 168 350 C 178 350 184 344 176 336 C 166 334 152 332 144 330 C 138 326 134 320 134 310 C 138 280 146 244 148 210 C 150 194 152 182 156 166 C 166 124 176 70 168 26 Z";

const Raizes: FC<FigureProps> = ({ variant, className, title }) => {
  const v = variant ?? "L5";
  const dim = (k: string) => (v === k ? 0.42 : 0.1);
  const w = (k: string) => (v === k ? 30 : 24);
  return (
    <Frame
      viewBox="-10 -16 640 396"
      title={title ?? `Síndrome radicular ${v}: dermátomo, miótomo e reflexo`}
      className={className}
    >
      <defs>
        <clipPath id="hdl-membro">
          <path d={MEMBRO} />
        </clipPath>
      </defs>

      {/* faixas dermatoméricas, recortadas pelo contorno do membro */}
      <g clipPath="url(#hdl-membro)">
        <path
          d="M 96 30 C 84 90 80 140 84 186 C 88 230 92 280 100 320 C 104 338 118 346 152 348"
          fill="none"
          stroke="var(--teal)"
          strokeOpacity={dim("S1")}
          strokeWidth={w("S1")}
          strokeLinecap="round"
        />
        <path
          d="M 122 30 C 112 90 118 140 126 180 C 132 216 138 258 142 300 C 146 320 156 334 176 342"
          fill="none"
          stroke="var(--teal)"
          strokeOpacity={dim("L5")}
          strokeWidth={w("L5")}
          strokeLinecap="round"
        />
        <path
          d="M 162 34 C 168 92 156 142 150 182 C 146 218 140 262 136 302 C 134 318 130 328 126 338"
          fill="none"
          stroke="var(--teal)"
          strokeOpacity={dim("L4")}
          strokeWidth={w("L4")}
          strokeLinecap="round"
        />
      </g>

      {/* contorno do membro */}
      <path d={MEMBRO} fill="none" stroke="var(--ink-soft)" strokeWidth={1.8} strokeLinejoin="round" />
      {/* patela e maléolos, referências */}
      <ellipse cx={148} cy={196} rx={11} ry={14} {...boneBack} />
      <ellipse cx={132} cy={314} rx={8} ry={9} {...boneBack} />

      {/* marcador do reflexo */}
      {v === "L4" && (
        <>
          <circle cx={148} cy={196} r={19} {...highlight} />
          <path d="M 160 200 L 186 210" {...measureSolid} />
          <text x={190} y={214} {...amberText}>
            reflexo PATELAR ↓
          </text>
        </>
      )}
      {v === "S1" && (
        <>
          <circle cx={100} cy={318} r={17} {...highlight} />
          <path d="M 84 318 L 60 330" {...measureSolid} />
          <text x={-6} y={346} {...amberText}>
            reflexo AQUILEU ↓
          </text>
        </>
      )}
      {v === "L5" && (
        <>
          <circle cx={168} cy={340} r={16} {...highlight} />
          <path d="M 182 344 L 208 352" {...measureSolid} />
          <text x={212} y={356} {...amberText}>
            sem reflexo próprio
          </text>
        </>
      )}

      <text x={62} y={16} {...label}>
        POSTERIOR
      </text>
      <text x={168} y={16} {...label}>
        ANTERIOR
      </text>
      <text x={106} y={374} {...label}>
        membro inferior, vista lateral
      </text>

      {/* painel de texto */}
      <text x={250} y={44} {...corticalText}>
        {v === "L4" ? "RAIZ L4" : v === "L5" ? "RAIZ L5" : "RAIZ S1"}
      </text>

      {v === "L4" && (
        <>
          <text x={250} y={68} {...label}>
            Hérnia típica: L3-L4 paracentral — ou L4-L5
          </text>
          <text x={250} y={82} {...label}>
            FORAMINAL (pega a raiz que emerge).
          </text>
          <text x={250} y={106} {...tealText}>
            Dermátomo
          </text>
          <text x={250} y={120} {...label}>
            Face anterior da coxa, face medial do joelho
          </text>
          <text x={250} y={134} {...label}>
            e da perna, até o maléolo medial.
          </text>
          <text x={250} y={158} {...tealText}>
            Miótomo
          </text>
          <text x={250} y={172} {...label}>
            Quadríceps (extensão do joelho) e tibial
          </text>
          <text x={250} y={186} {...label}>
            anterior (dorsiflexão do tornozelo).
          </text>
          <text x={250} y={210} {...tealText}>
            Reflexo
          </text>
          <text x={250} y={224} {...label}>
            Patelar diminuído ou abolido.
          </text>
          <text x={250} y={248} {...tealText}>
            Teste de bancada
          </text>
          <text x={250} y={262} {...label}>
            Lasègue invertido (estiramento femoral, em
          </text>
          <text x={250} y={276} {...label}>
            decúbito ventral) — o Lasègue clássico
          </text>
          <text x={250} y={290} {...label}>
            testa L5 e S1, não L4.
          </text>
        </>
      )}

      {v === "L5" && (
        <>
          <text x={250} y={68} {...label}>
            Hérnia típica: L4-L5 paracentral. É a raiz
          </text>
          <text x={250} y={82} {...label}>
            mais frequentemente acometida.
          </text>
          <text x={250} y={106} {...tealText}>
            Dermátomo
          </text>
          <text x={250} y={120} {...label}>
            Face lateral da coxa e da perna, dorso do
          </text>
          <text x={250} y={134} {...label}>
            pé, hálux e 1º espaço interdigital.
          </text>
          <text x={250} y={158} {...tealText}>
            Miótomo
          </text>
          <text x={250} y={172} {...label}>
            Extensor longo do hálux (o mais sensível e
          </text>
          <text x={250} y={186} {...label}>
            o primeiro a falhar), tibial anterior e
          </text>
          <text x={250} y={200} {...label}>
            glúteo médio (abdução do quadril).
          </text>
          <text x={250} y={224} {...tealText}>
            Reflexo
          </text>
          <text x={250} y={238} {...label}>
            Nenhum reflexo próprio — a força do hálux
          </text>
          <text x={250} y={252} {...label}>
            substitui o reflexo no exame.
          </text>
          <text x={250} y={276} {...tealText}>
            Sinais
          </text>
          <text x={250} y={290} {...label}>
            Pé caído se a lesão for grave; Trendelenburg
          </text>
          <text x={250} y={304} {...label}>
            pela fraqueza do glúteo médio.
          </text>
        </>
      )}

      {v === "S1" && (
        <>
          <text x={250} y={68} {...label}>
            Hérnia típica: L5-S1 paracentral.
          </text>
          <text x={250} y={92} {...tealText}>
            Dermátomo
          </text>
          <text x={250} y={106} {...label}>
            Face posterior da coxa e da perna (panturri-
          </text>
          <text x={250} y={120} {...label}>
            lha), maléolo lateral, borda lateral do pé
          </text>
          <text x={250} y={134} {...label}>
            e 5º dedo.
          </text>
          <text x={250} y={158} {...tealText}>
            Miótomo
          </text>
          <text x={250} y={172} {...label}>
            Tríceps sural (flexão plantar), fibulares e
          </text>
          <text x={250} y={186} {...label}>
            glúteo máximo.
          </text>
          <text x={250} y={210} {...tealText}>
            Reflexo
          </text>
          <text x={250} y={224} {...label}>
            Aquileu diminuído ou abolido.
          </text>
          <text x={250} y={248} {...tealText}>
            Teste de bancada
          </text>
          <text x={250} y={262} {...label}>
            Elevação repetida do calcanhar em apoio
          </text>
          <text x={250} y={276} {...label}>
            monopodálico: a fraqueza plantar leve só
          </text>
          <text x={250} y={290} {...label}>
            aparece na repetição, nunca no leito.
          </text>
        </>
      )}
    </Frame>
  );
};

/* ---- 5. Classificação MSU (Michigan State University) --------------------- */

const Msu: FC<FigureProps> = ({ variant, className, title }) => {
  const v = variant ?? "grade";
  return (
    <Frame
      viewBox="-14 -18 640 372"
      title={title ?? "Classificação MSU da hérnia discal lombar: tamanho (1-3) e zona (A-C)"}
      className={className}
    >
      <DiscoAxial />
      <ArcoAxial />
      <SacoTecalAxial />
      <circle cx={168} cy={186} r={8.5} {...raiz} />
      <circle cx={232} cy={186} r={8.5} {...raiz} />

      {/* linha intrafacetária (referência posterior do MSU) */}
      <path d="M 106 198 L 294 198" {...measureSolid} />
      <text x={116} y={214} {...amberText}>
        linha intrafacetária (face medial das facetas)
      </text>
      {/* parede posterior do disco (referência anterior) */}
      <path d="M 106 154 L 294 154" {...measure} />
      <text x={116} y={148} {...amberText}>
        parede posterior do disco
      </text>
      {/* divisão do tamanho: metade da distância entre as duas linhas */}
      <path d="M 106 176 L 294 176" {...measure} />
      <path d="M 300 154 L 300 176" {...measureSolid} />
      <text x={306} y={170} {...amberText}>
        1
      </text>
      <path d="M 316 154 L 316 198" {...measureSolid} />
      <text x={322} y={182} {...amberText}>
        2
      </text>
      <path d="M 332 154 L 332 226" {...measureSolid} />
      <text x={338} y={200} {...amberText}>
        3
      </text>

      {/* divisão das zonas A / B / C */}
      <path d="M 178 60 L 178 246" {...measure} />
      <path d="M 222 60 L 222 246" {...measure} />
      <path d="M 128 60 L 128 246" {...measure} />
      <path d="M 272 60 L 272 246" {...measure} />
      <text x={192} y={54} {...amberText}>
        A
      </text>
      <text x={146} y={54} {...amberText}>
        B
      </text>
      <text x={244} y={54} {...amberText}>
        B
      </text>
      <text x={104} y={54} {...amberText}>
        C
      </text>
      <text x={284} y={54} {...amberText}>
        C
      </text>

      {/* fragmento representativo */}
      {v === "2B" && (
        <path d="M 140 156 C 158 156 174 154 178 152 C 186 186 152 202 138 182 C 130 172 130 158 140 156 Z" {...hernia} />
      )}
      {v === "3B" && (
        <path d="M 138 156 C 158 156 174 154 178 152 C 190 200 148 222 132 194 C 124 180 126 158 138 156 Z" {...hernia} />
      )}
      {(v === "grade" || v === "1A") && (
        <path d="M 180 154 C 200 162 220 162 220 154 C 214 174 188 174 180 154 Z" {...hernia} />
      )}

      <text x={356} y={44} {...corticalText}>
        MSU — TAMANHO × ZONA
      </text>
      <text x={356} y={64} {...label}>
        Medida no corte axial de T2 no nível de maior
      </text>
      <text x={356} y={78} {...label}>
        herniação. Duas linhas de referência: a parede
      </text>
      <text x={356} y={92} {...label}>
        posterior do disco e a linha intrafacetária.
      </text>
      <text x={356} y={116} {...amberText}>
        Tamanho
      </text>
      <text x={356} y={130} {...label}>
        1 — o fragmento não ultrapassa a metade da
      </text>
      <text x={356} y={144} {...label}>
        distância entre as duas linhas.
      </text>
      <text x={356} y={158} {...label}>
        2 — ultrapassa a metade, sem cruzar a linha
      </text>
      <text x={356} y={172} {...label}>
        intrafacetária.
      </text>
      <text x={356} y={186} {...label}>
        3 — cruza a linha intrafacetária.
      </text>
      <text x={356} y={210} {...amberText}>
        Zona
      </text>
      <text x={356} y={224} {...label}>
        A — central (entre as bordas mediais das duas
      </text>
      <text x={356} y={238} {...label}>
        raízes que atravessam).
      </text>
      <text x={356} y={252} {...label}>
        B — lateral a A, até a borda lateral do saco.
      </text>
      <text x={356} y={266} {...label}>
        C — além da borda lateral do saco (foraminal
      </text>
      <text x={356} y={280} {...label}>
        e extraforaminal).
      </text>
      <text x={356} y={304} {...amberText}>
        Uso prático: 2B e 3B são os padrões que mais se
      </text>
      <text x={356} y={318} {...amberText}>
        associam a bom resultado da discectomia — mas o
      </text>
      <text x={356} y={332} {...amberText}>
        tamanho NÃO é indicação por si só.
      </text>
    </Frame>
  );
};

/* ---- 6. Lasègue / elevação da perna estendida ----------------------------- */

const Lasegue: FC<FigureProps> = ({ variant, className, title }) => {
  const cruzado = variant === "cruzado";
  return (
    <Frame
      viewBox="-14 -16 640 330"
      title={title ?? (cruzado ? "Lasègue cruzado (contralateral)" : "Teste de elevação da perna estendida (Lasègue)")}
      className={className}
    >
      {/* maca */}
      <path d="M 24 244 L 300 244" {...{ ...hardware, strokeWidth: 2.2 }} />
      <path d="M 40 244 L 40 268 M 288 244 L 288 268" {...{ ...hardware, strokeWidth: 2.2 }} />

      {/* tronco em decúbito dorsal */}
      <ellipse cx={54} cy={222} rx={17} ry={17} {...bone} />
      <path d="M 70 208 L 176 206 Q 190 208 194 222 Q 192 238 176 240 L 70 240 Q 62 232 62 224 Q 62 214 70 208 Z" {...bone} />
      {/* pelve */}
      <path d="M 176 204 L 212 206 Q 224 214 224 224 Q 224 236 212 240 L 178 240 Z" {...bone} />

      {/* membro apoiado */}
      <path d="M 214 216 L 288 216 Q 296 218 296 224 Q 296 230 288 232 L 214 232 Z" {...boneBack} />
      <path d="M 288 216 L 300 210 L 304 226 L 290 232 Z" {...boneBack} />

      {/* membro elevado (~40°) */}
      <g transform="rotate(-40 218 224)">
        <path d="M 218 216 L 300 216 Q 308 218 308 224 Q 308 230 300 232 L 218 232 Z" {...bone} />
        <path d="M 300 216 L 312 208 L 320 224 L 304 232 Z" {...bone} />
      </g>

      {/* arco do ângulo */}
      <path d="M 296 224 A 78 78 0 0 0 278 174" {...measureSolid} />
      <text x={300} y={186} {...amberText}>
        30° – 70°
      </text>
      <text x={300} y={200} {...label}>
        janela em que o teste é
      </text>
      <text x={300} y={214} {...label}>
        positivo; acima de 70° a
      </text>
      <text x={300} y={228} {...label}>
        dor é de origem articular
      </text>
      <path d="M 218 224 L 296 224" {...measure} />

      {/* irradiação da dor */}
      {!cruzado && (
        <>
          <path
            d="M 230 200 C 250 178 274 156 290 140"
            fill="none"
            stroke="var(--cortical)"
            strokeWidth={3}
            strokeDasharray="7 5"
            strokeLinecap="round"
          />
          <text x={186} y={130} {...corticalText}>
            dor irradiada abaixo do joelho, no dermátomo
          </text>
          <text x={186} y={144} {...corticalText}>
            — reproduzir dor lombar isolada NÃO conta
          </text>
        </>
      )}
      {cruzado && (
        <>
          <path
            d="M 250 226 C 268 230 284 232 292 232"
            fill="none"
            stroke="var(--cortical)"
            strokeWidth={3}
            strokeDasharray="7 5"
            strokeLinecap="round"
          />
          <text x={186} y={130} {...corticalText}>
            elevar o membro SÃO reproduz a ciática do
          </text>
          <text x={186} y={144} {...corticalText}>
            membro DOENTE (Lasègue cruzado)
          </text>
        </>
      )}

      {/* painel */}
      <text x={366} y={44} {...corticalText}>
        {cruzado ? "LASÈGUE CRUZADO" : "LASÈGUE (ELEVAÇÃO DA PERNA ESTENDIDA)"}
      </text>
      {!cruzado && (
        <>
          <text x={366} y={64} {...label}>
            Paciente em decúbito dorsal, joelho estendido.
          </text>
          <text x={366} y={78} {...label}>
            Eleva-se o membro passivamente. Positivo quando
          </text>
          <text x={366} y={92} {...label}>
            reproduz a dor IRRADIADA do paciente, abaixo do
          </text>
          <text x={366} y={106} {...label}>
            joelho, entre 30° e 70°.
          </text>
          <text x={366} y={130} {...amberText}>
            SENSÍVEL, pouco específico
          </text>
          <text x={366} y={144} {...label}>
            Bom para descartar radiculopatia quando negativo;
          </text>
          <text x={366} y={158} {...label}>
            fraco para confirmar quando positivo.
          </text>
          <text x={366} y={182} {...label}>
            Mecanismo: abaixo de 30° não há excursão da raiz;
          </text>
          <text x={366} y={196} {...label}>
            entre 30° e 70° a raiz desliza 2-6 mm no forame e
          </text>
          <text x={366} y={210} {...label}>
            tensiona sobre o fragmento; acima de 70° a raiz já
          </text>
          <text x={366} y={224} {...label}>
            não se move mais.
          </text>
          <text x={366} y={248} {...label}>
            Testa as raízes de L5 e S1 (nervo isquiático). Para
          </text>
          <text x={366} y={262} {...label}>
            L2-L4 use o estiramento femoral (Lasègue invertido),
          </text>
          <text x={366} y={276} {...label}>
            em decúbito ventral.
          </text>
          <text x={366} y={300} {...amberText}>
            Sinal de Bragard: após a dor, baixar 10° e dorsifletir
          </text>
          <text x={366} y={314} {...amberText}>
            o tornozelo — reprodução confirma origem radicular.
          </text>
        </>
      )}
      {cruzado && (
        <>
          <text x={366} y={64} {...label}>
            Eleva-se o membro ASSINTOMÁTICO e a manobra reproduz
          </text>
          <text x={366} y={78} {...label}>
            a dor no membro sintomático.
          </text>
          <text x={366} y={102} {...amberText}>
            ESPECÍFICO, pouco sensível
          </text>
          <text x={366} y={116} {...label}>
            É a imagem em espelho do Lasègue clássico: quando
          </text>
          <text x={366} y={130} {...label}>
            positivo, praticamente confirma hérnia; quando
          </text>
          <text x={366} y={144} {...label}>
            negativo, não descarta nada.
          </text>
          <text x={366} y={168} {...label}>
            Associa-se a fragmento grande, central ou axilar
          </text>
          <text x={366} y={182} {...label}>
            (na axila da raiz), que tensiona a dura na linha
          </text>
          <text x={366} y={196} {...label}>
            média e é transmitida para o lado oposto.
          </text>
          <text x={366} y={220} {...amberText}>
            Par de bolso para a prova: Lasègue = sensível;
          </text>
          <text x={366} y={234} {...amberText}>
            Lasègue cruzado = específico.
          </text>
        </>
      )}
    </Frame>
  );
};

/* ---- 7. Síndrome da cauda equina ------------------------------------------ */

const CaudaEquina: FC<FigureProps> = ({ className, title }) => (
  <Frame
    viewBox="-14 -18 700 372"
    title={title ?? "Síndrome da cauda equina por hérnia discal central volumosa"}
    className={className}
  >
    <DiscoAxial />
    <ArcoAxial />
    {/* saco tecal achatado e deslocado */}
    <path d="M 156 200 C 170 186 230 186 244 200 C 250 216 232 228 200 228 C 168 228 150 216 156 200 Z" {...saco} />
    {/* hérnia central maciça */}
    <path d="M 152 150 C 176 162 224 162 248 150 C 254 196 232 208 200 208 C 168 208 146 196 152 150 Z" {...hernia} />
    {/* raízes espremidas contra a lâmina */}
    <circle cx={172} cy={216} r={5.5} {...raizSofrida} />
    <circle cx={190} cy={220} r={5.5} {...raizSofrida} />
    <circle cx={210} cy={220} r={5.5} {...raizSofrida} />
    <circle cx={228} cy={216} r={5.5} {...raizSofrida} />
    <circle cx={84} cy={148} r={8.5} {...raiz} />
    <circle cx={316} cy={148} r={8.5} {...raiz} />
    <path d="M 152 150 L 248 150" {...measureSolid} />
    <text x={130} y={324} {...corticalText}>
      hérnia central: obliteração do canal, raízes sacrais espremidas
    </text>

    {/* área em sela */}
    <g transform="translate(400, 40)">
      <ellipse cx={40} cy={82} rx={30} ry={40} {...bone} />
      <ellipse cx={116} cy={82} rx={30} ry={40} {...bone} />
      <path d="M 62 46 C 78 34 78 34 94 46 L 94 126 C 78 138 78 138 62 126 Z" {...bone} />
      <path
        d="M 62 52 C 78 40 78 40 94 52 L 94 122 C 78 132 78 132 62 122 Z M 24 60 C 36 50 44 50 58 56 L 58 118 C 44 124 34 122 24 112 Z M 132 60 C 120 50 112 50 98 56 L 98 118 C 112 124 122 122 132 112 Z"
        {...{ ...saco, fillOpacity: 0.3 }}
      />
      <path d="M 78 40 L 78 132" {...measure} />
      <text x={-20} y={158} {...tealText}>
        área em sela (S2-S5): períneo, genitália e face
      </text>
      <text x={-20} y={172} {...label}>
        medial proximal das coxas — a região que
      </text>
      <text x={-20} y={186} {...label}>
        encosta no selim de uma bicicleta
      </text>
    </g>

    <text x={400} y={240} {...corticalText}>
      EMERGÊNCIA — NÃO ADIE PARA O DIA SEGUINTE
    </text>
    <text x={400} y={260} {...label}>
      Tríade: retenção urinária com incontinência por
    </text>
    <text x={400} y={274} {...label}>
      transbordamento, anestesia em sela e perda do
    </text>
    <text x={400} y={288} {...label}>
      tônus do esfíncter anal, sobre ciática bilateral.
    </text>
    <text x={400} y={312} {...amberText}>
      Retenção urinária é o sinal mais tardio e o de pior
    </text>
    <text x={400} y={326} {...amberText}>
      prognóstico: não espere por ela para operar.
    </text>
  </Frame>
);

/* ---- 8. Microdiscectomia — passos ---------------------------------------- */

const Microdiscectomia: FC<FigureProps> = ({ activeStep, className, title }) => {
  const s = activeStep ?? 0;
  return (
    <Frame
      viewBox="-14 -18 660 372"
      title={title ?? "Microdiscectomia: janela interlaminar, flavectomia e retirada do fragmento"}
      className={className}
    >
      {/* vista posterior: lâminas de dois níveis + espinhosas */}
      <path d="M 60 56 L 300 56 L 296 112 Q 240 130 180 130 Q 120 130 64 112 Z" {...bone} />
      <path d="M 64 232 L 296 232 L 300 288 L 60 288 Q 118 254 180 250 Q 240 254 296 288 Z" {...boneBack} />
      <path d="M 66 214 Q 120 194 180 190 Q 240 194 294 214 L 296 232 L 64 232 Z" {...bone} />
      <path d="M 168 40 L 192 40 L 192 132 L 168 132 Z" {...bone} />
      <path d="M 168 232 L 192 232 L 192 302 L 168 302 Z" {...bone} />
      <text x={306} y={78} {...label}>
        lâmina superior
      </text>
      <text x={306} y={224} {...label}>
        lâmina inferior
      </text>
      <text x={196} y={36} {...label}>
        processo espinhoso
      </text>

      {/* ligamento amarelo preenchendo o espaço interlaminar */}
      {s < 3 && <path d="M 66 116 Q 120 134 180 134 Q 240 134 294 116 L 292 210 Q 240 190 180 188 Q 120 192 68 212 Z" {...ligamento} />}

      {/* saco tecal e raiz que atravessa, expostos após a flavectomia */}
      {s >= 3 && (
        <>
          <path d="M 118 118 L 250 118 L 250 214 L 118 214 Z" {...saco} />
          <path
            d={s >= 4 ? "M 150 120 C 150 152 152 184 158 214" : "M 118 122 C 116 154 118 186 124 214"}
            fill="none"
            stroke="var(--teal)"
            strokeWidth={14}
            strokeLinecap="round"
            opacity={0.85}
          />
        </>
      )}

      {/* fragmento sob a axila da raiz */}
      {s >= 4 && s < 6 && (
        <path d="M 96 152 C 116 142 138 152 138 172 C 138 192 112 200 96 188 C 84 176 84 160 96 152 Z" {...hernia} />
      )}
      {s >= 6 && (
        <path d="M 100 156 C 116 150 132 158 132 172 C 132 186 112 192 100 184 C 92 174 92 162 100 156 Z" {...herniaFantasma} />
      )}

      {/* instrumentos por passo */}
      {s >= 1 && s <= 2 && (
        <>
          <rect x={82} y={106} width={190} height={116} rx={8} {...highlight} />
          <text x={82} y={100} {...amberText}>
            janela interlaminar do lado sintomático
          </text>
        </>
      )}
      {s === 3 && (
        <>
          <path d="M 380 132 L 268 158 L 252 152 L 260 138 Z" {...hardware} />
          <text x={306} y={124} {...amberText}>
            Kerrison: flavectomia
          </text>
        </>
      )}
      {s >= 4 && s <= 6 && (
        <>
          <path d="M 388 190 L 250 168 L 176 166" {...hardware} />
          <path d="M 176 148 L 176 190" {...hardware} />
          <text x={264} y={206} {...amberText}>
            afastador de raiz: tração MEDIAL,
          </text>
          <text x={264} y={220} {...amberText}>
            suave e intermitente
          </text>
        </>
      )}
      {s === 5 && (
        <>
          <path d="M 60 240 L 100 186" {...{ ...hardware, stroke: "var(--cortical)" }} />
          <text x={-10} y={256} {...corticalText}>
            anulotomia + pinça
          </text>
        </>
      )}
      {s >= 7 && (
        <>
          <path d="M 388 150 L 268 156" {...hardware} />
          <path d="M 268 156 L 258 150 L 258 162 Z" {...hardware} />
          <text x={276} y={140} {...amberText}>
            explorar o forame e o recesso: raiz livre
          </text>
          <text x={276} y={154} {...amberText}>
            e móvel antes de fechar
          </text>
        </>
      )}

      <text x={340} y={250} {...label}>
        Vista posterior do espaço interlaminar. A raiz que
      </text>
      <text x={340} y={264} {...label}>
        atravessa desce pelo ombro do saco e cruza o disco;
      </text>
      <text x={340} y={278} {...label}>
        o fragmento paracentral fica sob a AXILA da raiz.
      </text>
      <text x={340} y={302} {...amberText}>
        Passo ativo: {s > 0 ? s : "—"}
      </text>
    </Frame>
  );
};

/* -------------------------------------------------------------------------- */

export const figures: Record<string, FC<FigureProps>> = {
  "hernia-discal-lombar:anatomia": Anatomia,
  "hernia-discal-lombar:tipos": Tipos,
  "hernia-discal-lombar:zonas": Zonas,
  "hernia-discal-lombar:raizes": Raizes,
  "hernia-discal-lombar:msu": Msu,
  "hernia-discal-lombar:lasegue": Lasegue,
  "hernia-discal-lombar:cauda-equina": CaudaEquina,
  "hernia-discal-lombar:microdiscectomia": Microdiscectomia,
};
