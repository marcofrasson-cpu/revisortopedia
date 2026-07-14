import type { FC } from "react";
import type { FigureProps } from "../../../types/topic";

/* ============================================================================
   Fratura toracolombar por explosão — figuras esquemáticas, line-art 2 tons
   (desenho original, SEM copyright).
   Osso/vértebra: stroke var(--ink-soft), fill var(--surface).
   Disco / medula / tecido neural: stroke var(--teal).
   Traço de fratura / compressão: stroke var(--cortical) + className "fx-line".
   Medidas / ângulos / escores: var(--amber).
   Rótulos <text>: fontSize 11, fill var(--muted), fontFamily var(--font-body).
   Ids prefixados por "fratura-toracolombar-explosao:" no registro (fim do arquivo).
   ========================================================================== */

const boneStyle = {
  fill: "var(--surface)",
  stroke: "var(--ink-soft)",
  strokeWidth: 1.5,
  strokeLinejoin: "round" as const,
};

const neuralStyle = {
  fill: "none",
  stroke: "var(--teal)",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
};

const fxStyle = {
  fill: "none",
  stroke: "var(--cortical)",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
};

const measureStyle = {
  fill: "none",
  stroke: "var(--amber)",
  strokeWidth: 1.3,
};

const label = {
  fontSize: 11,
  fill: "var(--muted)",
  fontFamily: "var(--font-body, sans-serif)",
};

const mono = {
  fontSize: 12,
  fill: "var(--ink)",
  fontFamily: "var(--font-mono, monospace)",
  letterSpacing: 0.5,
};

/* ---------------------------------------------------------------------------
   Helper — vértebra em perfil (anterior à ESQUERDA, posterior à DIREITA).
   Corpo + pedículo + lâmina + processo espinhoso + processos articulares.
--------------------------------------------------------------------------- */
const LateralVertebra: FC<{ x: number; y: number; w?: number; h?: number }> = ({
  x,
  y,
  w = 58,
  h = 36,
}) => (
  <g transform={`translate(${x} ${y})`}>
    {/* Corpo vertebral — borda anterior levemente côncava (cintura) */}
    <path
      {...boneStyle}
      d={`M ${w} 1 L 8 1 C 15 ${h * 0.35}, 15 ${h * 0.65}, 8 ${h - 1} L ${w} ${h - 1} Z`}
    />
    {/* Pedículo */}
    <path {...boneStyle} d={`M ${w} ${h * 0.15} L ${w + 19} ${h * 0.2} L ${w + 19} ${h * 0.5} L ${w} ${h * 0.45} Z`} />
    {/* Lâmina */}
    <path {...boneStyle} d={`M ${w + 17} ${h * 0.2} L ${w + 31} ${h * 0.62} L ${w + 25} ${h * 0.78} L ${w + 12} ${h * 0.42} Z`} />
    {/* Processo espinhoso — posteroinferior */}
    <path {...boneStyle} d={`M ${w + 27} ${h * 0.5} L ${w + 60} ${h * 0.86} L ${w + 58} ${h * 1.02} L ${w + 22} ${h * 0.74} Z`} />
    {/* Processo articular superior */}
    <path {...boneStyle} d={`M ${w + 15} ${h * 0.2} L ${w + 25} ${h * 0.2} L ${w + 25} ${-h * 0.12} L ${w + 15} ${-h * 0.12} Z`} />
    {/* Processo articular inferior */}
    <path {...boneStyle} d={`M ${w + 20} ${h * 0.66} L ${w + 30} ${h * 0.66} L ${w + 30} ${h * 1.0} L ${w + 20} ${h * 1.0} Z`} />
  </g>
);

/* ---------------------------------------------------------------------------
   1) Anatomia — junção toracolombar (T11–L3) em perfil.
   Transição da caixa torácica rígida para a coluna lombar móvel; cone medular
   em L1; cauda equina abaixo.
--------------------------------------------------------------------------- */
export const Anatomia: FC<FigureProps> = ({ className, title }) => {
  const levels = [
    { name: "T11", y: 26 },
    { name: "T12", y: 72 },
    { name: "L1", y: 118 },
    { name: "L2", y: 164 },
    { name: "L3", y: 210 },
  ];
  const x = 56;

  return (
    <svg
      viewBox="0 0 340 300"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? "Anatomia da junção toracolombar (T11–L3) em perfil"}</title>

      {/* Discos intervertebrais */}
      {[62, 108, 154, 200].map((dy) => (
        <path
          key={dy}
          d={`M ${x + 8} ${dy + 1} L ${x + 58} ${dy + 1} L ${x + 58} ${dy + 9} L ${x + 8} ${dy + 9} Z`}
          fill="none"
          stroke="var(--teal)"
          strokeWidth={1.4}
        />
      ))}

      {levels.map((l) => (
        <LateralVertebra key={l.name} x={x} y={l.y} />
      ))}

      {/* Canal vertebral — traçado posterior aos corpos */}
      <path {...measureStyle} strokeDasharray="3 3" d={`M ${x + 60} 20 L ${x + 60} 252`} />
      <path {...measureStyle} strokeDasharray="3 3" d={`M ${x + 76} 20 L ${x + 76} 252`} />

      {/* Medula espinal descendo até o cone medular em L1 */}
      <path {...neuralStyle} strokeWidth={7} strokeOpacity={0.55} d={`M ${x + 68} 22 L ${x + 68} 132`} />
      {/* Cone medular — afilamento em L1 */}
      <path
        {...neuralStyle}
        strokeWidth={1.6}
        fill="var(--surface)"
        d={`M ${x + 64.5} 128 C ${x + 64.5} 146, ${x + 68} 152, ${x + 68} 154 C ${x + 68} 152, ${x + 71.5} 146, ${x + 71.5} 128 Z`}
      />
      {/* Cauda equina */}
      {[-5, -2, 1, 4].map((o) => (
        <path
          key={o}
          {...neuralStyle}
          strokeWidth={0.9}
          d={`M ${x + 68 + o * 0.4} 152 C ${x + 68 + o} 190, ${x + 68 + o * 1.6} 220, ${x + 68 + o * 2} 250`}
        />
      ))}

      {/* Curvaturas — guias de cifose torácica e lordose lombar */}
      <path {...measureStyle} strokeDasharray="4 4" d="M 300 24 C 288 46, 284 64, 284 84" />
      <path {...measureStyle} strokeDasharray="4 4" d="M 284 190 C 284 214, 290 236, 302 254" />

      {/* Zona de transição */}
      <rect
        x={x - 12}
        y={100}
        width={190}
        height={62}
        rx={4}
        fill="none"
        stroke="var(--amber)"
        strokeWidth={1.2}
        strokeDasharray="5 3"
      />

      {levels.map((l) => (
        <text key={l.name} {...label} x={12} y={l.y + 22}>
          {l.name}
        </text>
      ))}

      <text {...label} x={228} y={30}>
        cifose torácica
      </text>
      <text {...label} x={228} y={44}>
        (rígida — costelas)
      </text>
      <text {...label} x={232} y={252}>
        lordose lombar
      </text>
      <text {...label} x={232} y={266}>
        (móvel)
      </text>
      <text {...label} x={190} y={116}>
        junção toracolombar
      </text>
      <text {...label} x={190} y={130}>
        T11–L2 — concentra
      </text>
      <text {...label} x={190} y={144}>
        as lesões
      </text>
      <text {...label} x={190} y={162}>
        cone medular (L1)
      </text>
      <text {...label} x={12} y={272}>
        disco
      </text>
      <path {...measureStyle} d={`M 30 268 L ${x + 8} 205`} />
      <text {...label} x={190} y={244}>
        cauda equina
      </text>
      <text {...label} x={190} y={198}>
        canal vertebral
      </text>
    </svg>
  );
};

/* ---------------------------------------------------------------------------
   2) Mecanismo — carga axial → explosão do corpo com retropulsão do muro
   posterior para dentro do canal. Painel lateral + painel axial.
--------------------------------------------------------------------------- */
export const Mecanismo: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 360 260"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Mecanismo da fratura por explosão — carga axial e retropulsão"}</title>

    {/* ---------------- Painel lateral ---------------- */}
    <text {...mono} x={16} y={20}>
      perfil
    </text>

    {/* Vértebra íntegra acima */}
    <LateralVertebra x={30} y={40} w={54} h={30} />
    {/* Disco */}
    <path d="M 38 72 L 84 72 L 84 80 L 38 80 Z" fill="none" stroke="var(--teal)" strokeWidth={1.4} />

    {/* Corpo em explosão — alargado, altura perdida */}
    <path
      {...boneStyle}
      d="M 84 82 L 32 84 C 24 96, 24 110, 32 122 L 84 124 Z"
    />
    {/* Pedículo/lâmina/espinhoso do nível fraturado */}
    <path {...boneStyle} d="M 84 86 L 103 88 L 103 100 L 84 98 Z" />
    <path {...boneStyle} d="M 101 88 L 115 106 L 109 114 L 96 96 Z" />
    <path {...boneStyle} d="M 111 98 L 144 114 L 142 122 L 106 106 Z" />

    {/* Traços de explosão — irradiando do centro do corpo */}
    <path {...fxStyle} className="fx-line" d="M 56 84 L 52 122" />
    <path {...fxStyle} className="fx-line" d="M 70 83 L 76 123" />
    <path {...fxStyle} className="fx-line" d="M 34 96 L 84 104" />

    {/* Fragmento retropulsado do muro posterior para o canal */}
    <path
      {...boneStyle}
      fill="var(--surface)"
      stroke="var(--cortical)"
      strokeWidth={1.8}
      d="M 84 92 L 98 100 L 98 116 L 84 116 Z"
    />

    {/* Canal e medula comprimida */}
    <path {...measureStyle} strokeDasharray="3 3" d="M 86 34 L 86 140" />
    <path {...measureStyle} strokeDasharray="3 3" d="M 104 34 L 104 140" />
    <path
      {...neuralStyle}
      strokeWidth={6}
      strokeOpacity={0.55}
      d="M 95 36 L 95 90 C 101 100, 101 110, 95 120 L 95 138"
    />

    {/* Vértebra íntegra abaixo */}
    <path d="M 38 126 L 84 126 L 84 134 L 38 134 Z" fill="none" stroke="var(--teal)" strokeWidth={1.4} />
    <LateralVertebra x={30} y={136} w={54} h={30} />

    {/* Setas de carga axial */}
    <path {...measureStyle} strokeWidth={2} d="M 56 8 L 56 34" markerEnd="url(#tlAxial)" />
    <path {...measureStyle} strokeWidth={2} d="M 56 200 L 56 176" markerEnd="url(#tlAxial)" />
    <defs>
      <marker id="tlAxial" markerWidth="9" markerHeight="9" refX="5" refY="4.5" orient="auto">
        <path d="M 0 0 L 9 4.5 L 0 9 Z" fill="var(--amber)" />
      </marker>
    </defs>
    <text {...label} x={64} y={20}>
      carga axial
    </text>
    <text {...label} x={64} y={198}>
      contracarga
    </text>

    <text {...label} x={118} y={92}>
      muro posterior
    </text>
    <text {...label} x={118} y={106}>
      retropulsado
    </text>
    <text {...label} x={118} y={130}>
      medula / cone
    </text>
    <text {...label} x={118} y={144}>
      comprimidos
    </text>
    <text {...label} x={16} y={224}>
      A falência do corpo sob carga axial pura projeta o
    </text>
    <text {...label} x={16} y={238}>
      muro posterior para dentro do canal — daí "explosão".
    </text>

    {/* ---------------- Painel axial ---------------- */}
    <text {...mono} x={238} y={20}>
      axial
    </text>

    {/* Corpo vertebral (axial) */}
    <path {...boneStyle} d="M 230 44 C 210 44, 200 60, 200 76 C 200 96, 220 108, 258 108 C 296 108, 316 96, 316 76 C 316 60, 306 44, 286 44 Z" />
    {/* Pedículos */}
    <path {...boneStyle} d="M 214 104 L 226 122 L 238 116 L 226 98 Z" />
    <path {...boneStyle} d="M 302 104 L 290 122 L 278 116 L 290 98 Z" />
    {/* Lâminas + espinhoso */}
    <path {...boneStyle} d="M 224 120 L 258 142 L 292 120 L 292 130 L 258 152 L 224 130 Z" />
    <path {...boneStyle} d="M 252 148 L 264 148 L 262 168 L 254 168 Z" />

    {/* Traços radiais de explosão no corpo */}
    <path {...fxStyle} className="fx-line" d="M 240 46 L 246 104" />
    <path {...fxStyle} className="fx-line" d="M 276 46 L 270 104" />
    <path {...fxStyle} className="fx-line" d="M 204 68 L 312 82" />

    {/* Canal */}
    <path {...measureStyle} strokeDasharray="3 3" d="M 228 110 C 232 128, 284 128, 288 110" />

    {/* Fragmento retropulsado ocupando o canal */}
    <path
      {...boneStyle}
      stroke="var(--cortical)"
      strokeWidth={1.8}
      d="M 240 106 L 278 106 L 272 126 L 246 126 Z"
    />

    {/* Saco dural comprimido */}
    <path {...neuralStyle} strokeWidth={1.6} d="M 244 128 C 250 138, 268 138, 274 128" />

    <text {...label} x={200} y={190}>
      Fragmento retropulsado reduz a área do
    </text>
    <text {...label} x={200} y={204}>
      canal — mede-se a % de comprometimento
    </text>
    <text {...label} x={200} y={218}>
      na TC (não prediz o desfecho isoladamente).
    </text>
    <text {...label} x={318} y={62}>
      corpo
    </text>
    <text {...label} x={166} y={122}>
      pedículo
    </text>
  </svg>
);

/* ---------------------------------------------------------------------------
   3) Classificação AOSpine toracolombar — morfologia.
   variant: "A0" | "A1" | "A2" | "A3" | "A4" | "B" | "C"
--------------------------------------------------------------------------- */
export const AOSpine: FC<FigureProps> = ({ className, title, variant }) => {
  const v = (variant ?? "A4").toUpperCase();

  const captions: Record<string, string> = {
    A0: "A0 — sem lesão do corpo (processo transverso / espinhoso)",
    A1: "A1 — cunha-impactação de UM platô, muro posterior íntegro",
    A2: "A2 — separação / pinça: AMBOS os platôs, muro posterior íntegro",
    A3: "A3 — explosão incompleta: UM platô + muro posterior",
    A4: "A4 — explosão completa: AMBOS os platôs + muro posterior",
    B: "B — falência da banda de tensão (posterior B1/B2 ou anterior B3)",
    C: "C — translação / deslocamento em qualquer plano",
  };

  const isBurst = v === "A3" || v === "A4";

  return (
    <svg
      viewBox="0 0 320 240"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `Classificação AOSpine toracolombar — tipo ${v}`}</title>

      <text {...mono} x={16} y={22}>
        AOSpine · {v}
      </text>

      {/* Vértebra proximal (transladada no tipo C) */}
      <g transform={v === "C" ? "translate(-18 0)" : undefined}>
        <LateralVertebra x={64} y={40} w={54} h={30} />
      </g>
      <path d="M 72 72 L 118 72 L 118 80 L 72 80 Z" fill="none" stroke="var(--teal)" strokeWidth={1.4} />

      {/* Vértebra índice */}
      {v === "A1" ? (
        /* Cunha — platô superior deprimido anteriormente */
        <path {...boneStyle} d="M 118 82 L 66 92 C 60 102, 60 112, 66 122 L 118 124 Z" />
      ) : isBurst ? (
        /* Explosão — corpo alargado, altura perdida */
        <path {...boneStyle} d="M 118 82 L 62 84 C 54 96, 54 110, 62 122 L 118 124 Z" />
      ) : (
        <path {...boneStyle} d="M 118 82 L 66 82 C 60 96, 60 110, 66 124 L 118 124 Z" />
      )}

      {/* Elementos posteriores do nível índice */}
      <path {...boneStyle} d="M 118 86 L 137 88 L 137 100 L 118 98 Z" />
      <path {...boneStyle} d="M 135 88 L 149 106 L 143 114 L 130 96 Z" />
      <path {...boneStyle} d="M 145 98 L 178 114 L 176 122 L 140 106 Z" />

      {/* Traços por tipo */}
      {v === "A0" && <path {...fxStyle} className="fx-line" d="M 158 106 L 166 118" />}
      {v === "A1" && <path {...fxStyle} className="fx-line" d="M 70 92 L 106 100" />}
      {v === "A2" && <path {...fxStyle} className="fx-line" d="M 90 82 L 88 124" />}
      {(v === "A3" || v === "A4") && (
        <>
          <path {...fxStyle} className="fx-line" d="M 86 84 L 82 122" />
          <path {...fxStyle} className="fx-line" d="M 64 96 L 118 104" />
        </>
      )}
      {v === "A4" && <path {...fxStyle} className="fx-line" d="M 100 83 L 104 123" />}
      {v === "B" && (
        <>
          <path {...fxStyle} className="fx-line" d="M 86 84 L 82 122" />
          <path {...fxStyle} className="fx-line" d="M 140 92 L 176 110" />
        </>
      )}
      {v === "C" && (
        <>
          <path {...fxStyle} className="fx-line" d="M 66 80 L 118 80" />
          <path {...measureStyle} strokeWidth={2} d="M 78 30 L 50 30" markerEnd="url(#tlTrans)" />
          <defs>
            <marker id="tlTrans" markerWidth="9" markerHeight="9" refX="5" refY="4.5" orient="auto">
              <path d="M 0 0 L 9 4.5 L 0 9 Z" fill="var(--amber)" />
            </marker>
          </defs>
          <text {...label} x={82} y={34}>
            translação
          </text>
        </>
      )}

      {/* Fragmento retropulsado — só nos padrões com muro posterior */}
      {isBurst && (
        <path
          {...boneStyle}
          stroke="var(--cortical)"
          strokeWidth={1.8}
          d="M 118 92 L 132 100 L 132 116 L 118 116 Z"
        />
      )}

      {/* Banda de tensão posterior rota — tipo B */}
      {v === "B" && (
        <>
          <path {...measureStyle} strokeWidth={2} d="M 182 74 L 196 62" />
          <path {...measureStyle} strokeWidth={2} d="M 182 118 L 196 130" />
          <text {...label} x={200} y={98}>
            banda de tensão
          </text>
          <text {...label} x={200} y={112}>
            posterior rota
          </text>
        </>
      )}

      {/* Canal + medula */}
      <path {...measureStyle} strokeDasharray="3 3" d="M 120 34 L 120 140" />
      <path {...measureStyle} strokeDasharray="3 3" d="M 138 34 L 138 140" />
      <path {...neuralStyle} strokeWidth={5} strokeOpacity={0.5} d="M 129 36 L 129 138" />

      {/* Vértebra distal */}
      <path d="M 72 126 L 118 126 L 118 134 L 72 134 Z" fill="none" stroke="var(--teal)" strokeWidth={1.4} />
      <LateralVertebra x={64} y={136} w={54} h={30} />

      {/* Marcadores dos platôs comprometidos */}
      {(v === "A1" || v === "A2" || v === "A3" || v === "A4") && (
        <text {...label} x={200} y={44}>
          platô superior
        </text>
      )}
      {(v === "A2" || v === "A4") && (
        <text {...label} x={200} y={140}>
          platô inferior
        </text>
      )}
      {isBurst && (
        <>
          <text {...label} x={200} y={62}>
            + muro posterior
          </text>
          <text {...label} x={200} y={76}>
            → define a explosão
          </text>
        </>
      )}

      <text {...label} x={16} y={214}>
        {captions[v] ?? captions.A4}
      </text>
      <text {...label} x={16} y={230}>
        Modificadores: N (neurológico N0–N4, NX) e M1 (CLP indeterminado) / M2 (comorbidade).
      </text>
    </svg>
  );
};

/* ---------------------------------------------------------------------------
   4) TLICS — Thoracolumbar Injury Classification and Severity Score.
   variant: "morfologia" | "clp" | "neuro" (destaca a linha correspondente)
--------------------------------------------------------------------------- */
export const Tlics: FC<FigureProps> = ({ className, title, variant }) => {
  const v = (variant ?? "").toLowerCase();

  const rows: { key: string; head: string; items: { t: string; p: string }[]; y: number }[] = [
    {
      key: "morfologia",
      head: "Morfologia",
      y: 44,
      items: [
        { t: "Compressão", p: "1" },
        { t: "Explosão", p: "2" },
        { t: "Translação / rotação", p: "3" },
        { t: "Distração", p: "4" },
      ],
    },
    {
      key: "clp",
      head: "Complexo ligamentar posterior",
      y: 112,
      items: [
        { t: "Íntegro", p: "0" },
        { t: "Suspeito / indeterminado", p: "2" },
        { t: "Roto", p: "3" },
      ],
    },
    {
      key: "neuro",
      head: "Estado neurológico",
      y: 180,
      items: [
        { t: "Íntegro", p: "0" },
        { t: "Lesão de raiz", p: "2" },
        { t: "Medular / cone completo", p: "2" },
        { t: "Medular / cone incompleto", p: "3" },
        { t: "Cauda equina", p: "3" },
      ],
    },
  ];

  return (
    <svg
      viewBox="0 0 360 300"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? "TLICS — escore de classificação e gravidade da lesão toracolombar"}</title>

      <text {...mono} x={16} y={20}>
        TLICS
      </text>
      <text {...label} x={72} y={20}>
        soma dos três componentes
      </text>

      {rows.map((r) => {
        const active = v === r.key;
        return (
          <g key={r.key}>
            {active && (
              <rect
                x={10}
                y={r.y - 18}
                width={340}
                height={r.items.length * 15 + 22}
                rx={4}
                fill="none"
                stroke="var(--amber)"
                strokeWidth={1.2}
                strokeDasharray="4 3"
              />
            )}
            <text {...label} x={16} y={r.y - 4} fill="var(--ink)">
              {r.head}
            </text>
            {r.items.map((it, i) => (
              <g key={it.t}>
                <text {...label} x={26} y={r.y + 12 + i * 15}>
                  {it.t}
                </text>
                <rect
                  x={300}
                  y={r.y + 2 + i * 15}
                  width={22}
                  height={13}
                  rx={3}
                  fill="none"
                  stroke="var(--amber)"
                  strokeWidth={1.2}
                />
                <text
                  {...label}
                  x={311}
                  y={r.y + 12 + i * 15}
                  fill="var(--amber)"
                  textAnchor="middle"
                >
                  {it.p}
                </text>
              </g>
            ))}
          </g>
        );
      })}

      {/* Escala de decisão */}
      <line x1={16} y1={262} x2={344} y2={262} stroke="var(--ink-soft)" strokeWidth={1.2} />
      <rect x={16} y={252} width={110} height={20} rx={3} {...measureStyle} />
      <rect x={126} y={252} width={72} height={20} rx={3} {...measureStyle} strokeDasharray="4 3" />
      <rect x={198} y={252} width={146} height={20} rx={3} {...measureStyle} />

      <text {...label} x={71} y={266} textAnchor="middle" fill="var(--amber)">
        ≤ 3 — conservador
      </text>
      <text {...label} x={162} y={266} textAnchor="middle" fill="var(--amber)">
        4 — indefinido
      </text>
      <text {...label} x={271} y={266} textAnchor="middle" fill="var(--amber)">
        ≥ 5 — cirúrgico
      </text>

      <text {...label} x={16} y={290}>
        Explosão + CLP íntegro + neurológico normal = 2 pontos → conservador.
      </text>
    </svg>
  );
};

/* ---------------------------------------------------------------------------
   5) Complexo ligamentar posterior (CLP).
   variant: "integro" (padrão) | "roto"
--------------------------------------------------------------------------- */
export const ComplexoLigamentarPosterior: FC<FigureProps> = ({ className, title, variant }) => {
  const roto = (variant ?? "integro").toLowerCase() === "roto";

  return (
    <svg
      viewBox="0 0 320 240"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>
        {title ?? `Complexo ligamentar posterior — ${roto ? "roto" : "íntegro"}`}
      </title>

      <text {...mono} x={16} y={20}>
        CLP · {roto ? "roto" : "íntegro"}
      </text>

      {/* Vértebra superior — afastada no padrão roto */}
      <g transform={roto ? "translate(0 -8)" : undefined}>
        <LateralVertebra x={40} y={44} w={54} h={32} />
      </g>
      <path d="M 48 78 L 94 78 L 94 88 L 48 88 Z" fill="none" stroke="var(--teal)" strokeWidth={1.4} />
      {/* Vértebra inferior */}
      <LateralVertebra x={40} y={90} w={54} h={32} />

      {/* Ligamento supraespinhoso — corre sobre as pontas dos espinhosos */}
      {roto ? (
        <>
          <path {...neuralStyle} strokeWidth={2.2} d="M 152 74 C 158 78, 160 82, 160 84" />
          <path {...neuralStyle} strokeWidth={2.2} d="M 152 128 C 158 124, 160 120, 160 118" />
          <path {...fxStyle} strokeDasharray="2 4" d="M 160 86 L 160 116" />
        </>
      ) : (
        <path {...neuralStyle} strokeWidth={2.2} d="M 152 74 C 166 92, 166 110, 152 128" />
      )}

      {/* Ligamento interespinhoso */}
      {roto ? (
        <>
          <path {...neuralStyle} strokeWidth={1.4} d="M 118 78 L 128 82" />
          <path {...neuralStyle} strokeWidth={1.4} d="M 118 124 L 128 120" />
        </>
      ) : (
        <>
          <path {...neuralStyle} strokeWidth={1.4} d="M 118 78 L 140 122" />
          <path {...neuralStyle} strokeWidth={1.4} d="M 140 80 L 118 122" />
          <path {...neuralStyle} strokeWidth={1.4} d="M 126 76 L 126 124" />
        </>
      )}

      {/* Ligamento amarelo — entre as lâminas */}
      <path
        {...neuralStyle}
        strokeWidth={1.6}
        strokeDasharray={roto ? "2 3" : undefined}
        d="M 104 82 C 110 96, 110 106, 104 120"
      />

      {/* Cápsula facetária */}
      <ellipse
        cx={96}
        cy={100}
        rx={9}
        ry={12}
        fill="none"
        stroke="var(--teal)"
        strokeWidth={1.4}
        strokeDasharray={roto ? "2 3" : undefined}
      />

      {/* Distância interespinhosa — medida */}
      <path {...measureStyle} d="M 134 72 L 178 72" strokeDasharray="3 3" />
      <path {...measureStyle} d="M 134 130 L 178 130" strokeDasharray="3 3" />
      <path {...measureStyle} strokeWidth={1.6} d="M 174 72 L 174 130" />
      <path {...measureStyle} strokeWidth={1.6} d="M 170 72 L 178 72" />
      <path {...measureStyle} strokeWidth={1.6} d="M 170 130 L 178 130" />

      <text {...label} x={182} y={104} fill="var(--amber)">
        {roto ? "distância alargada" : "distância normal"}
      </text>

      <text {...label} x={182} y={72}>
        supraespinhoso
      </text>
      <text {...label} x={182} y={140}>
        interespinhoso
      </text>
      <text {...label} x={16} y={100}>
        ligamento
      </text>
      <text {...label} x={16} y={114}>
        amarelo
      </text>
      <path {...measureStyle} d="M 60 108 L 100 102" />
      <text {...label} x={16} y={148}>
        cápsula
      </text>
      <text {...label} x={16} y={162}>
        facetária
      </text>
      <path {...measureStyle} d="M 58 156 L 88 110" />

      {roto ? (
        <>
          <text {...label} x={16} y={200}>
            CLP roto → banda de tensão incompetente: a lesão deixa de ser
          </text>
          <text {...label} x={16} y={214}>
            tipo A e passa a B. Alargamento interespinhoso, diástase facetária
          </text>
          <text {...label} x={16} y={228}>
            e hipersinal em STIR na RM. TLICS ganha 3 pontos → cirurgia.
          </text>
        </>
      ) : (
        <>
          <text {...label} x={16} y={200}>
            CLP íntegro → a banda de tensão posterior contém a cifose.
          </text>
          <text {...label} x={16} y={214}>
            Na explosão sem déficit e com CLP íntegro (TLICS 2), o
          </text>
          <text {...label} x={16} y={228}>
            tratamento conservador com órtese tem resultado equivalente.
          </text>
        </>
      )}
    </svg>
  );
};

/* ---------------------------------------------------------------------------
   6) Medidas radiográficas — cifose regional (Cobb), perda de altura do
   corpo e comprometimento do canal.
--------------------------------------------------------------------------- */
export const Medidas: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 340 280"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Medidas — cifose regional de Cobb, perda de altura e canal"}</title>

    <text {...mono} x={16} y={20}>
      medidas
    </text>

    {/* Vértebra acima — inclinada */}
    <g transform="rotate(-8 100 60)">
      <LateralVertebra x={54} y={42} w={54} h={30} />
      {/* Platô superior da vértebra acima — linha de Cobb */}
      <path {...measureStyle} strokeWidth={1.6} d="M 40 43 L 180 43" />
    </g>

    <path d="M 62 76 L 108 74 L 108 84 L 62 86 Z" fill="none" stroke="var(--teal)" strokeWidth={1.4} />

    {/* Corpo fraturado — cunha/explosão */}
    <path {...boneStyle} d="M 108 86 L 56 90 C 48 100, 48 112, 56 122 L 108 126 Z" />
    <path {...fxStyle} className="fx-line" d="M 78 88 L 74 124" />
    <path {...fxStyle} className="fx-line" d="M 56 102 L 108 108" />

    {/* Vértebra abaixo — inclinada */}
    <path d="M 62 128 L 108 128 L 108 138 L 62 140 Z" fill="none" stroke="var(--teal)" strokeWidth={1.4} />
    <g transform="rotate(8 100 170)">
      <LateralVertebra x={54} y={142} w={54} h={30} />
      {/* Platô inferior da vértebra abaixo — linha de Cobb */}
      <path {...measureStyle} strokeWidth={1.6} d="M 40 173 L 180 173" />
    </g>

    {/* Ângulo de Cobb — arco entre as perpendiculares */}
    <path {...measureStyle} strokeDasharray="4 3" d="M 196 30 C 214 76, 214 138, 196 186" />
    <path {...measureStyle} strokeWidth={1.6} d="M 210 88 A 40 40 0 0 1 210 128" />
    <text {...label} x={222} y={112} fill="var(--amber)">
      cifose regional
    </text>
    <text {...label} x={222} y={126} fill="var(--amber)">
      (Cobb)
    </text>

    {/* Altura anterior vs posterior */}
    <path {...measureStyle} strokeWidth={1.6} d="M 40 90 L 40 122" />
    <path {...measureStyle} strokeWidth={1.6} d="M 36 90 L 44 90" />
    <path {...measureStyle} strokeWidth={1.6} d="M 36 122 L 44 122" />
    <text {...label} x={12} y={110} fill="var(--amber)">
      Ha
    </text>

    <path {...measureStyle} strokeWidth={1.6} d="M 118 86 L 118 126" />
    <path {...measureStyle} strokeWidth={1.6} d="M 114 86 L 122 86" />
    <path {...measureStyle} strokeWidth={1.6} d="M 114 126 L 122 126" />
    <text {...label} x={124} y={108} fill="var(--amber)">
      Hp
    </text>

    <text {...label} x={16} y={214}>
      Perda de altura anterior = 1 − (Ha / Hp). Cifose regional medida
    </text>
    <text {...label} x={16} y={228}>
      pelo Cobb do platô superior da vértebra acima ao platô inferior
    </text>
    <text {...label} x={16} y={242}>
      da vértebra abaixo. Nem a cifose nem a % de canal, isoladamente,
    </text>
    <text {...label} x={16} y={256}>
      predizem dor ou função — decida pelo TLICS/AOSpine, não pelo número.
    </text>

    {/* Inset axial — % de canal */}
    <ellipse cx={286} cy={216} rx={40} ry={26} {...boneStyle} />
    <path {...measureStyle} strokeDasharray="3 3" d="M 258 234 C 264 254, 308 254, 314 234" />
    <path
      {...boneStyle}
      stroke="var(--cortical)"
      strokeWidth={1.6}
      d="M 268 236 L 304 236 L 298 250 L 274 250 Z"
    />
    <text {...label} x={252} y={272} fill="var(--amber)">
      % de canal ocupado
    </text>
  </svg>
);

/* ---------------------------------------------------------------------------
   7) Instrumentação e descompressão.
   variant: "curta" (padrão) | "longa" | "descompressao"
--------------------------------------------------------------------------- */
export const Instrumentacao: FC<FigureProps> = ({ className, title, variant }) => {
  const v = (variant ?? "curta").toLowerCase();

  /* Níveis: y do topo de cada corpo. O nível índice (fraturado) é o do meio. */
  const ys = [30, 76, 122, 168, 214];
  const idx = 2;
  const x = 60;

  const instrumented = v === "longa" ? [0, 1, 3, 4] : [1, 3];

  const screwY = (i: number) => ys[i] + 14;

  return (
    <svg
      viewBox="0 0 340 300"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>
        {title ??
          `Instrumentação — ${
            v === "longa" ? "construto longo" : v === "descompressao" ? "descompressão" : "construto curto"
          }`}
      </title>

      <text {...mono} x={16} y={20}>
        {v === "longa" ? "longa (2 acima / 2 abaixo)" : v === "descompressao" ? "descompressão" : "curta (1 acima / 1 abaixo)"}
      </text>

      {/* Discos */}
      {[66, 112, 158, 204].map((dy) => (
        <path
          key={dy}
          d={`M ${x + 8} ${dy} L ${x + 54} ${dy} L ${x + 54} ${dy + 10} L ${x + 8} ${dy + 10} Z`}
          fill="none"
          stroke="var(--teal)"
          strokeWidth={1.4}
        />
      ))}

      {/* Vértebras */}
      {ys.map((y, i) =>
        i === idx ? null : <LateralVertebra key={y} x={x} y={y} w={54} h={36} />
      )}

      {/* Nível índice fraturado */}
      <path {...boneStyle} d={`M ${x + 54} ${ys[idx]} L ${x + 4} ${ys[idx] + 4} C ${x - 4} ${ys[idx] + 16}, ${x - 4} ${ys[idx] + 26}, ${x + 4} ${ys[idx] + 34} L ${x + 54} ${ys[idx] + 36} Z`} />
      <path {...fxStyle} className="fx-line" d={`M ${x + 26} ${ys[idx] + 2} L ${x + 22} ${ys[idx] + 35}`} />
      <path {...fxStyle} className="fx-line" d={`M ${x + 4} ${ys[idx] + 16} L ${x + 54} ${ys[idx] + 22}`} />
      {/* Elementos posteriores do índice */}
      <path {...boneStyle} d={`M ${x + 54} ${ys[idx] + 5} L ${x + 73} ${ys[idx] + 7} L ${x + 73} ${ys[idx] + 19} L ${x + 54} ${ys[idx] + 17} Z`} />
      {v !== "descompressao" && (
        <>
          <path {...boneStyle} d={`M ${x + 71} ${ys[idx] + 7} L ${x + 85} ${ys[idx] + 25} L ${x + 79} ${ys[idx] + 33} L ${x + 66} ${ys[idx] + 15} Z`} />
          <path {...boneStyle} d={`M ${x + 81} ${ys[idx] + 17} L ${x + 114} ${ys[idx] + 33} L ${x + 112} ${ys[idx] + 41} L ${x + 76} ${ys[idx] + 25} Z`} />
        </>
      )}

      {/* Canal + saco dural */}
      <path {...measureStyle} strokeDasharray="3 3" d={`M ${x + 56} 24 L ${x + 56} 256`} />
      <path {...measureStyle} strokeDasharray="3 3" d={`M ${x + 74} 24 L ${x + 74} 256`} />

      {v === "descompressao" ? (
        <path {...neuralStyle} strokeWidth={6} strokeOpacity={0.55} d={`M ${x + 65} 26 L ${x + 65} 254`} />
      ) : (
        <path
          {...neuralStyle}
          strokeWidth={6}
          strokeOpacity={0.55}
          d={`M ${x + 65} 26 L ${x + 65} ${ys[idx] + 2} C ${x + 71} ${ys[idx] + 12}, ${x + 71} ${ys[idx] + 24}, ${x + 65} ${ys[idx] + 34} L ${x + 65} 254`}
        />
      )}

      {/* Fragmento retropulsado (removido na descompressão) */}
      {v !== "descompressao" && (
        <path
          {...boneStyle}
          stroke="var(--cortical)"
          strokeWidth={1.8}
          d={`M ${x + 54} ${ys[idx] + 10} L ${x + 68} ${ys[idx] + 17} L ${x + 68} ${ys[idx] + 30} L ${x + 54} ${ys[idx] + 30} Z`}
        />
      )}

      {/* Parafusos pediculares + haste */}
      {instrumented.map((i) => (
        <g key={i}>
          {/* Corpo do parafuso — do processo articular ao corpo vertebral, via pedículo */}
          <path
            {...neuralStyle}
            strokeWidth={3}
            d={`M ${x + 92} ${screwY(i)} L ${x + 22} ${screwY(i) + 4}`}
          />
          {/* Cabeça do parafuso */}
          <circle cx={x + 94} cy={screwY(i)} r={4} fill="var(--surface)" stroke="var(--teal)" strokeWidth={1.6} />
        </g>
      ))}

      {/* Haste conectando as cabeças */}
      {instrumented.length > 0 && (
        <path
          {...neuralStyle}
          strokeWidth={2.6}
          d={`M ${x + 94} ${screwY(instrumented[0])} L ${x + 94} ${screwY(instrumented[instrumented.length - 1])}`}
        />
      )}

      {/* Parafuso no nível fraturado — opção do construto curto */}
      {v === "curta" && (
        <>
          <path
            {...neuralStyle}
            strokeWidth={3}
            strokeDasharray="4 3"
            d={`M ${x + 92} ${screwY(idx)} L ${x + 30} ${screwY(idx) + 4}`}
          />
          <circle
            cx={x + 94}
            cy={screwY(idx)}
            r={4}
            fill="var(--surface)"
            stroke="var(--teal)"
            strokeWidth={1.6}
            strokeDasharray="2 2"
          />
          <text {...label} x={x + 108} y={screwY(idx) + 4}>
            parafuso no nível
          </text>
          <text {...label} x={x + 108} y={screwY(idx) + 18}>
            da fratura (opcional)
          </text>
        </>
      )}

      {/* Laminectomia / descompressão */}
      {v === "descompressao" && (
        <>
          <path {...measureStyle} strokeWidth={1.6} strokeDasharray="4 3" d={`M ${x + 74} ${ys[idx] + 4} L ${x + 118} ${ys[idx] + 4} L ${x + 118} ${ys[idx] + 38} L ${x + 74} ${ys[idx] + 38} Z`} />
          <text {...label} x={x + 124} y={ys[idx] + 14} fill="var(--amber)">
            laminectomia —
          </text>
          <text {...label} x={x + 124} y={ys[idx] + 28} fill="var(--amber)">
            elementos removidos
          </text>
          <text {...label} x={16} y={276}>
            Descompressão reservada ao déficit neurológico com compressão
          </text>
          <text {...label} x={16} y={290}>
            documentada. Laminectomia isolada NÃO alcança o fragmento anterior
          </text>
        </>
      )}

      {v === "curta" && (
        <>
          <text {...label} x={16} y={276}>
            Construto curto (1 nível acima e 1 abaixo) poupa segmentos móveis;
          </text>
          <text {...label} x={16} y={290}>
            parafusos no nível da fratura reduzem a falha do implante.
          </text>
        </>
      )}
      {v === "longa" && (
        <>
          <text {...label} x={16} y={276}>
            Construto longo (2 acima / 2 abaixo) distribui a carga — preferido na
          </text>
          <text {...label} x={16} y={290}>
            cominução grave, osso osteoporótico e lesões tipo C.
          </text>
        </>
      )}

      <text {...label} x={16} y={ys[idx] + 20}>
        nível
      </text>
      <text {...label} x={16} y={ys[idx] + 34}>
        índice
      </text>
    </svg>
  );
};

/* ---------------------------------------------------------------------------
   8) Fluxo de conduta — honra activeStep (1..6).
--------------------------------------------------------------------------- */
export const Conduta: FC<FigureProps> = ({ className, title, activeStep }) => {
  const steps = [
    { n: 1, t: "ATLS · exame neurológico (ASIA)", d: "afaste lesões associadas" },
    { n: 2, t: "TC de toda a coluna", d: "morfologia · muro posterior · canal" },
    { n: 3, t: "RM se CLP suspeito ou déficit", d: "STIR — banda de tensão" },
    { n: 4, t: "Classifique: AOSpine + TLICS", d: "morfologia + CLP + neurológico" },
    { n: 5, t: "TLICS ≤ 3 → órtese e mobilização", d: "A3/A4, CLP íntegro, sem déficit" },
    { n: 6, t: "TLICS ≥ 5 → estabilização", d: "± descompressão se déficit" },
  ];

  return (
    <svg
      viewBox="0 0 340 300"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? "Sequência de conduta na fratura toracolombar por explosão"}</title>

      <text {...mono} x={16} y={20}>
        conduta
      </text>

      {steps.map((s, i) => {
        const y = 34 + i * 42;
        const active = activeStep === s.n;
        return (
          <g key={s.n}>
            <rect
              x={16}
              y={y}
              width={308}
              height={34}
              rx={4}
              fill="none"
              stroke={active ? "var(--amber)" : "var(--ink-soft)"}
              strokeWidth={active ? 1.8 : 1.1}
            />
            <circle
              cx={36}
              cy={y + 17}
              r={9}
              fill="none"
              stroke={active ? "var(--amber)" : "var(--ink-soft)"}
              strokeWidth={1.4}
            />
            <text
              {...label}
              x={36}
              y={y + 21}
              textAnchor="middle"
              fill={active ? "var(--amber)" : "var(--muted)"}
            >
              {s.n}
            </text>
            <text {...label} x={54} y={y + 15} fill={active ? "var(--ink)" : "var(--muted)"}>
              {s.t}
            </text>
            <text {...label} x={54} y={y + 28}>
              {s.d}
            </text>
            {i < steps.length - 1 && (
              <path
                d={`M 36 ${y + 34} L 36 ${y + 42}`}
                fill="none"
                stroke="var(--ink-soft)"
                strokeWidth={1.1}
              />
            )}
          </g>
        );
      })}

      <text {...label} x={16} y={294}>
        TLICS = 4: zona cinzenta — decida pelo conjunto clínico e pela preferência informada.
      </text>
    </svg>
  );
};

/* ---------------------------------------------------------------------------
   Registro
--------------------------------------------------------------------------- */
export const figures: Record<string, FC<FigureProps>> = {
  "fratura-toracolombar-explosao:anatomia": Anatomia,
  "fratura-toracolombar-explosao:mecanismo": Mecanismo,
  "fratura-toracolombar-explosao:aospine": AOSpine,
  "fratura-toracolombar-explosao:tlics": Tlics,
  "fratura-toracolombar-explosao:clp": ComplexoLigamentarPosterior,
  "fratura-toracolombar-explosao:medidas": Medidas,
  "fratura-toracolombar-explosao:instrumentacao": Instrumentacao,
  "fratura-toracolombar-explosao:conduta": Conduta,
};
