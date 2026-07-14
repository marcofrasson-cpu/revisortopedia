import type { FC, ReactNode } from "react";
import type { FigureProps } from "../../../types/topic";

/* Esquemas originais — fratura do côndilo lateral do úmero (criança).
   Fundamentados em Rockwood and Wilkins' Fractures in Children, 10ª ed. (2024)
   e Tachdjian's Pediatric Orthopaedics, 6ª ed. Line-art didático de 2 tons,
   cores exclusivamente por CSS var. A FISE do úmero distal e a cartilagem
   epifisária (não ossificada) são representadas em teal — são elas que explicam
   por que o desvio real é subestimado na radiografia em AP.
   Convenção: vista em AP com o lado LATERAL à direita. */

const bone = { stroke: "var(--ink-soft)", strokeWidth: 2, fill: "var(--surface)" } as const;
const boneLine = { stroke: "var(--ink-soft)", strokeWidth: 2, fill: "none" as const } as const;
const physisStyle = { stroke: "var(--teal)", strokeWidth: 2.4, fill: "none" as const } as const;
const cartilage = { stroke: "var(--teal)", strokeWidth: 1.8, fill: "none" as const } as const;
const fx = { stroke: "var(--cortical)", strokeWidth: 2.4, fill: "none" as const } as const;
const metal = { stroke: "var(--teal)", strokeWidth: 2, fill: "none" as const } as const;
const measure = { stroke: "var(--amber)", strokeWidth: 1.8, fill: "none" as const } as const;
const soft = { stroke: "var(--amber)", strokeWidth: 2, fill: "none" as const } as const;
const label = { fontSize: 11, fill: "var(--muted)", fontFamily: "var(--font-body, sans-serif)" } as const;
const labelTeal = { fontSize: 11, fill: "var(--teal)", fontFamily: "var(--font-body, sans-serif)" } as const;
const labelAmber = { fontSize: 11, fill: "var(--amber)", fontFamily: "var(--font-body, sans-serif)" } as const;
const labelFx = { fontSize: 11, fill: "var(--cortical)", fontFamily: "var(--font-body, sans-serif)" } as const;

function Frame({
  children,
  title,
  vb = "0 0 240 240",
  className,
}: {
  children: ReactNode;
  title: string;
  vb?: string;
  className?: string;
}) {
  return (
    <svg viewBox={vb} preserveAspectRatio="xMidYMid meet" role="img" className={className} fill="none">
      <title>{title}</title>
      {children}
    </svg>
  );
}

/* --- Blocos reutilizáveis: o úmero distal separado em fragmento proximal e
       fragmento condilar lateral, para que o desvio seja desenhado por
       transformação do fragmento (translação/rotação). --------------------- */

/** Diáfise, coluna medial, epicôndilo medial, tróclea e a fise medial. */
function ProximalPart() {
  return (
    <>
      <path d="M104 22 v64 M136 22 v64" {...boneLine} />
      <path d="M104 86 q-24 22 -30 56" {...boneLine} />
      <path d="M74 142 q-9 8 -3 20 q8 8 18 0" {...bone} />
      <path d="M96 158 q-14 14 -6 30 q10 16 30 8 q13 -7 11 -23 q-2 -17 -35 -15z" {...bone} />
      <path d="M76 150 q30 14 52 5" {...physisStyle} />
    </>
  );
}

/** Coluna lateral distal + capítulo + sua porção de fise (o fragmento). */
function CondyleFragment() {
  return (
    <>
      <path d="M138 86 q26 22 30 56 q6 12 -2 22" {...boneLine} />
      <circle cx="152" cy="180" r="15" {...bone} />
      <path d="M138 150 q16 -6 30 -2" {...physisStyle} />
    </>
  );
}

/** Anatomia do úmero distal imaturo: colunas, capítulo, tróclea, crista lateral
    da tróclea, a fise e a origem do extensor comum / complexo colateral lateral. */
export const Anatomia: FC<FigureProps> = ({ className, title }) => (
  <Frame title={title ?? "Anatomia do úmero distal da criança"} className={className}>
    <ProximalPart />
    <CondyleFragment />
    {/* crista lateral da tróclea — a fronteira que separa Milch I de Milch II */}
    <path d="M130 156 v42" {...boneLine} strokeWidth={1.6} strokeDasharray="4 3" />
    <text x="94" y="216" {...label}>crista lateral da tróclea</text>
    {/* origem do extensor comum + complexo colateral lateral (partes moles) */}
    <path d="M168 158 q16 12 12 34 q-3 12 -14 14" {...soft} />
    <text x="176" y="152" {...labelAmber}>extensor</text>
    <text x="180" y="164" {...labelAmber}>comum</text>
    <text x="6" y="146" {...label}>epicôndilo</text>
    <text x="20" y="158" {...label}>medial</text>
    <text x="72" y="192" {...label}>tróclea</text>
    <text x="176" y="196" {...label}>capítulo</text>
    <text x="176" y="130" {...labelTeal}>fise</text>
    <text x="30" y="60" {...label}>coluna medial</text>
    <text x="146" y="60" {...label}>coluna lateral</text>
  </Frame>
);

/** Milch I × II — posição do traço em relação à crista lateral da tróclea. */
export const Milch: FC<FigureProps> = ({ className, title, variant }) => {
  const v = variant === "II" ? "II" : "I";
  return (
    <Frame title={title ?? `Milch tipo ${v}`} className={className}>
      <ProximalPart />
      <CondyleFragment />
      {/* crista lateral da tróclea (referência) */}
      <path d="M130 156 v42" {...boneLine} strokeWidth={1.6} strokeDasharray="4 3" />
      {v === "I" ? (
        <>
          {/* traço sai LATERAL à crista, no sulco capítulo-troclear (SH IV) */}
          <path d="M166 144 q-12 22 -26 38 q-3 8 -1 16" {...fx} />
          <text x="150" y="222" {...labelFx}>traço lateral à crista</text>
          <text x="14" y="36" {...labelFx}>Milch I — Salter-Harris IV</text>
          <text x="14" y="50" {...label}>crista íntegra: cotovelo estável</text>
        </>
      ) : (
        <>
          {/* traço atravessa a crista e alcança o ápice da tróclea (SH II) */}
          <path d="M166 144 q-16 24 -34 40 q-8 8 -14 20" {...fx} />
          <text x="106" y="228" {...labelFx}>traço até o ápice troclear</text>
          <text x="14" y="36" {...labelFx}>Milch II — Salter-Harris II</text>
          <text x="14" y="50" {...label}>crista rota: risco de subluxação</text>
        </>
      )}
    </Frame>
  );
};

/** Estágios de desvio de Jakob (Weiss): I sem desvio, II desviado com superfície
    articular ainda alinhada, III desviado e rodado. */
export const Jakob: FC<FigureProps> = ({ className, title, variant }) => {
  const v = variant === "II" || variant === "III" ? variant : "I";
  return (
    <Frame title={title ?? `Jakob estágio ${v}`} className={className}>
      <ProximalPart />
      {v === "I" && (
        <>
          <CondyleFragment />
          <path d="M166 144 q-14 22 -28 36" {...fx} strokeDasharray="5 4" />
          <text x="14" y="36" {...labelFx}>Jakob I</text>
          <text x="14" y="50" {...label}>desvio &lt; 2 mm; dobradiça íntegra</text>
        </>
      )}
      {v === "II" && (
        <>
          <g transform="translate(9 5)">
            <CondyleFragment />
          </g>
          <path d="M166 144 q-14 22 -28 36" {...fx} />
          {/* medida do afastamento lateral */}
          <path d="M168 132 h10 M168 128 v8 M178 128 v8" {...measure} />
          <text x="182" y="136" {...labelAmber}>≥ 2 mm</text>
          <text x="14" y="36" {...labelFx}>Jakob II</text>
          <text x="14" y="50" {...label}>desviado, sem rotação</text>
        </>
      )}
      {v === "III" && (
        <>
          <g transform="rotate(52 154 176) translate(16 10)">
            <CondyleFragment />
          </g>
          <path d="M166 142 q-14 20 -30 32" {...fx} />
          {/* seta de rotação do fragmento */}
          <path d="M182 106 a26 26 0 0 1 14 30" {...measure} />
          <path d="M196 136 l-7 -4 M196 136 l1 -8" {...measure} />
          <text x="14" y="36" {...labelFx}>Jakob III</text>
          <text x="14" y="50" {...label}>desviado e rodado</text>
          <text x="150" y="98" {...labelAmber}>rotação</text>
        </>
      )}
    </Frame>
  );
};

/** Estágios de Song (1–5): extensão do traço pela cartilagem e largura do
    afastamento — a progressão que define estabilidade e conduta. */
export const Song: FC<FigureProps> = ({ className, title, variant }) => {
  const v = ["1", "2", "3", "4", "5"].includes(variant ?? "") ? (variant as string) : "1";
  const shift: Record<string, string> = {
    "1": "translate(0 0)",
    "2": "translate(1 0)",
    "3": "translate(5 2)",
    "4": "translate(9 5)",
    "5": "rotate(56 154 176) translate(16 10)",
  };
  const note: Record<string, string> = {
    "1": "traço para na parede lateral",
    "2": "traço alcança a cartilagem",
    "3": "afastamento lateral, ápice fechado",
    "4": "afastamento uniforme (completa)",
    "5": "desvio completo com rotação",
  };
  return (
    <Frame title={title ?? `Song estágio ${v}`} className={className}>
      <ProximalPart />
      <g transform={shift[v]}>
        <CondyleFragment />
      </g>
      {/* traço: cresce da metáfise lateral em direção à superfície articular */}
      {v === "1" && <path d="M166 144 q-8 12 -14 18" {...fx} />}
      {v === "2" && <path d="M166 144 q-12 20 -24 34" {...fx} />}
      {(v === "3" || v === "4" || v === "5") && <path d="M166 144 q-14 22 -30 38" {...fx} />}
      {/* cartilagem articular / dobradiça — íntegra até o estágio 3 */}
      {(v === "1" || v === "2" || v === "3") && (
        <>
          <path d="M138 194 q16 12 32 4" {...cartilage} strokeDasharray="3 3" />
          <text x="128" y="216" {...labelTeal}>dobradiça cartilaginosa</text>
        </>
      )}
      {/* medidas do afastamento */}
      {v === "3" && (
        <>
          <path d="M167 130 h6 M167 126 v8 M173 126 v8" {...measure} />
          <text x="177" y="134" {...labelAmber}>≥ 2 mm</text>
        </>
      )}
      {v === "4" && (
        <>
          <path d="M167 130 h11 M167 126 v8 M178 126 v8" {...measure} />
          <path d="M150 200 h11 M150 196 v8 M161 196 v8" {...measure} />
          <text x="182" y="134" {...labelAmber}>igual</text>
          <text x="164" y="208" {...labelAmber}>igual</text>
        </>
      )}
      {v === "5" && (
        <>
          <path d="M182 106 a26 26 0 0 1 14 30" {...measure} />
          <path d="M196 136 l-7 -4 M196 136 l1 -8" {...measure} />
          <text x="150" y="98" {...labelAmber}>rotação</text>
        </>
      )}
      <text x="14" y="36" {...labelFx}>Song {v}</text>
      <text x="14" y="50" {...label}>{note[v]}</text>
    </Frame>
  );
};

/** AP × oblíqua interna — a incidência oblíqua interna revela o desvio real,
    subestimado no AP porque o traço é posterolateral. */
export const Incidencias: FC<FigureProps> = ({ className, title, variant }) => {
  const v = variant === "obliqua" ? "obliqua" : "ap";
  return (
    <Frame title={title ?? (v === "ap" ? "Incidência em AP" : "Incidência oblíqua interna")} className={className}>
      <g transform={v === "obliqua" ? "rotate(-20 120 130) translate(6 0)" : undefined}>
        <ProximalPart />
        <g transform="translate(9 5)">
          <CondyleFragment />
        </g>
        <path d="M166 144 q-14 22 -28 36" {...fx} />
      </g>
      {v === "ap" ? (
        <>
          {/* projeção frontal: o afastamento aparente é pequeno */}
          <path d="M170 128 h4 M170 124 v8 M174 124 v8" {...measure} />
          <text x="180" y="132" {...labelAmber}>≈ 1 mm aparente</text>
          <text x="14" y="36" {...label}>AP — subestima o desvio</text>
          <text x="14" y="50" {...label}>traço é posterolateral</text>
        </>
      ) : (
        <>
          {/* projeção oblíqua interna: o traço fica de perfil e o desvio real aparece */}
          <path d="M176 116 h14 M176 112 v8 M190 112 v8" {...measure} />
          <text x="150" y="106" {...labelAmber}>4 mm reais</text>
          <text x="14" y="36" {...labelFx}>Oblíqua interna</text>
          <text x="14" y="50" {...label}>incidência mais confiável</text>
          <text x="14" y="64" {...label}>para medir o desvio</text>
        </>
      )}
    </Frame>
  );
};

/** Artrografia / RM — a única forma de julgar a superfície articular ainda
    cartilaginosa: dobradiça íntegra (fixação percutânea) × rota (ORIF). */
export const Artrografia: FC<FigureProps> = ({ className, title, variant }) => {
  const v = variant === "rota" ? "rota" : "intacta";
  return (
    <Frame title={title ?? (v === "intacta" ? "Dobradiça cartilaginosa íntegra" : "Superfície articular rota")} className={className}>
      <ProximalPart />
      <g transform={v === "intacta" ? "translate(5 2)" : "translate(10 6)"}>
        <CondyleFragment />
      </g>
      <path d="M166 144 q-14 22 -28 36" {...fx} />
      {/* contraste delineando a cartilagem articular do úmero distal */}
      <path d="M78 196 q26 22 56 20" {...cartilage} />
      {v === "intacta" ? (
        <>
          {/* contraste NÃO atravessa: cartilagem contínua sobre o traço */}
          <path d="M134 216 q22 8 44 -8 q6 -6 6 -16" {...cartilage} />
          <path d="M132 200 q14 6 26 0" {...cartilage} strokeDasharray="3 3" />
          <text x="60" y="234" {...labelTeal}>contraste não atravessa o traço</text>
          <text x="14" y="36" {...labelTeal}>dobradiça íntegra</text>
          <text x="14" y="50" {...label}>redução fechada + fios percutâneos</text>
        </>
      ) : (
        <>
          {/* contraste extravasa: cartilagem descontínua, degrau articular */}
          <path d="M134 216 q10 4 18 -2" {...cartilage} />
          <path d="M162 208 q16 -2 24 -14" {...cartilage} />
          <path d="M150 214 l8 -14 M156 218 l10 -12" {...fx} strokeWidth={1.8} />
          <text x="52" y="234" {...labelFx}>contraste atravessa: degrau articular</text>
          <text x="14" y="36" {...labelFx}>superfície incongruente</text>
          <text x="14" y="50" {...label}>redução aberta obrigatória</text>
        </>
      )}
    </Frame>
  );
};

/** Fixação — fios divergentes percutâneos × parafuso canulado por via lateral.
    O suprimento do côndilo lateral entra POSTERIORMENTE: não dissecar atrás. */
export const Fixacao: FC<FigureProps> = ({ className, title, variant, activeStep }) => {
  const v = variant === "orif" ? "orif" : "percutanea";
  return (
    <Frame title={title ?? (v === "percutanea" ? "Fixação percutânea com fios divergentes" : "ORIF com parafuso canulado")} className={className}>
      <ProximalPart />
      <CondyleFragment />
      <path d="M166 144 q-14 22 -28 36" {...fx} strokeDasharray="5 4" />
      {v === "percutanea" ? (
        <>
          {/* 2–3 fios lisos divergentes, do côndilo lateral à metáfise medial */}
          <path d="M172 194 L104 118" {...metal} />
          <path d="M162 196 L112 106" {...metal} />
          <path d="M150 196 L124 100" {...metal} strokeDasharray="3 3" />
          <text x="26" y="104" {...labelTeal}>fios lisos divergentes</text>
          <text x="40" y="118" {...label}>(2–3, atravessam a fise)</text>
          <text x="14" y="36" {...label}>Fixação percutânea</text>
        </>
      ) : (
        <>
          {/* parafuso canulado perpendicular ao traço, poupando a fise */}
          <path d="M176 168 L128 144" {...metal} strokeWidth={3} />
          <path d="M176 164 v8 M170 165 v6 M164 162 v6 M158 159 v6 M152 156 v6" {...metal} strokeWidth={1.6} />
          {/* fio antirrotacional */}
          <path d="M172 192 L118 130" {...metal} strokeDasharray="3 3" />
          <text x="30" y="128" {...labelTeal}>parafuso canulado</text>
          <text x="34" y="142" {...label}>(compressão, poupa a fise)</text>
          <text x="14" y="36" {...label}>Redução aberta (via lateral)</text>
        </>
      )}
      {/* zona proibida: dissecção posterior compromete a vascularização */}
      <path d="M186 176 q12 8 10 24" {...soft} strokeDasharray="4 3" />
      <text x="164" y="222" {...labelAmber}>não dissecar posterior</text>
      {activeStep != null && activeStep >= 6 && (
        <path d="M138 150 q16 -6 30 -2" {...physisStyle} strokeWidth={3.4} />
      )}
    </Frame>
  );
};

/** Complicações tardias: pseudartrose, cúbito valgo com paralisia ulnar tardia,
    deformidade em rabo de peixe (fishtail) e o esporão lateral benigno. */
export const Complicacoes: FC<FigureProps> = ({ className, title, variant }) => {
  const v = ["valgo", "fishtail", "esporao"].includes(variant ?? "") ? (variant as string) : "pseudartrose";
  return (
    <Frame title={title ?? `Complicação: ${v}`} className={className}>
      {v === "pseudartrose" && (
        <>
          <ProximalPart />
          <g transform="translate(14 -10)">
            <CondyleFragment />
          </g>
          {/* bordas escleróticas e migração proximal do fragmento */}
          <path d="M164 134 q-12 20 -22 30" {...fx} strokeWidth={3.4} />
          <path d="M178 132 q-14 22 -26 34" {...fx} strokeWidth={3.4} />
          <path d="M186 116 v-22 M180 100 l6 -8 l6 8" {...measure} />
          <text x="14" y="36" {...labelFx}>Pseudartrose</text>
          <text x="14" y="50" {...label}>fragmento migra em proximal</text>
          <text x="150" y="88" {...labelAmber}>tração dos extensores</text>
        </>
      )}
      {v === "valgo" && (
        <>
          {/* eixo do braço e do antebraço em valgo progressivo */}
          <path d="M110 20 v96 M142 20 v96" {...boneLine} />
          <path d="M110 116 q-6 20 -2 32 q14 12 34 6 q8 -12 0 -38" {...bone} />
          {/* antebraço desviado em valgo (lateral = direita) */}
          <path d="M126 150 l46 66 M154 148 l42 56" {...boneLine} />
          {/* eixo neutro de referência */}
          <path d="M126 150 v70" {...measure} strokeDasharray="4 4" />
          <path d="M126 196 a46 46 0 0 0 26 -8" {...measure} />
          <text x="82" y="234" {...labelAmber}>ângulo de carregamento ↑</text>
          {/* nervo ulnar estirado no lado medial */}
          <path d="M112 132 q-10 16 -6 34 q4 18 -4 32" {...soft} />
          <text x="6" y="150" {...labelAmber}>nervo</text>
          <text x="10" y="162" {...labelAmber}>ulnar</text>
          <text x="14" y="36" {...labelFx}>Cúbito valgo</text>
          <text x="14" y="50" {...label}>paralisia ulnar tardia (anos depois)</text>
        </>
      )}
      {v === "fishtail" && (
        <>
          <ProximalPart />
          <CondyleFragment />
          {/* defeito central em cunha entre tróclea e capítulo (necrose) */}
          <path d="M124 158 q10 26 14 40 q6 -16 16 -34" {...fx} />
          <path d="M126 160 q12 22 12 38 q4 -14 14 -32" {...fx} strokeDasharray="3 3" />
          <text x="14" y="36" {...labelFx}>Rabo de peixe (fishtail)</text>
          <text x="14" y="50" {...label}>necrose da tróclea lateral</text>
          <text x="150" y="214" {...label}>defeito central em cunha</text>
        </>
      )}
      {v === "esporao" && (
        <>
          <ProximalPart />
          <CondyleFragment />
          {/* esporão / hipercrescimento da metáfise lateral */}
          <path d="M166 140 q18 4 20 22 q2 12 -8 16" {...bone} />
          <text x="14" y="36" {...label}>Esporão lateral</text>
          <text x="14" y="50" {...label}>quase universal e benigno</text>
          <text x="130" y="228" {...label}>avisar a família: não é falha</text>
        </>
      )}
    </Frame>
  );
};

export const figures: Record<string, FC<FigureProps>> = {
  "fratura-condilo-lateral-umero:anatomia": Anatomia,
  "fratura-condilo-lateral-umero:milch": Milch,
  "fratura-condilo-lateral-umero:jakob": Jakob,
  "fratura-condilo-lateral-umero:song": Song,
  "fratura-condilo-lateral-umero:incidencias": Incidencias,
  "fratura-condilo-lateral-umero:artrografia": Artrografia,
  "fratura-condilo-lateral-umero:fixacao": Fixacao,
  "fratura-condilo-lateral-umero:complicacoes": Complicacoes,
};
