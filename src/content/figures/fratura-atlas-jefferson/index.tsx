import type { FC, ReactNode } from "react";
import type { FigureProps } from "../../../types/topic";

/* Diagramas originais, baseados em Rockwood & Green 10a ed. e Campbell 14a ed. */

const bone = {
  fill: "var(--surface)",
  stroke: "var(--ink-soft)",
  strokeWidth: 2,
  strokeLinejoin: "round" as const,
};
const soft = {
  fill: "var(--surface-2, var(--surface))",
  stroke: "var(--ink-soft)",
  strokeWidth: 1.5,
  strokeLinejoin: "round" as const,
};
const teal = {
  fill: "none",
  stroke: "var(--teal)",
  strokeWidth: 3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};
const injury = {
  fill: "none",
  stroke: "var(--cortical)",
  strokeWidth: 4,
  strokeLinecap: "round" as const,
};
const amber = {
  fill: "none",
  stroke: "var(--amber)",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
};
const label = {
  fill: "var(--muted)",
  fontFamily: "var(--font-body, sans-serif)",
  fontSize: 12,
};
const titleStyle = {
  fill: "var(--ink)",
  fontFamily: "var(--font-body, sans-serif)",
  fontSize: 14,
  fontWeight: 650,
};

function Frame({ title, className, children }: { title: string; className?: string; children: ReactNode }) {
  return (
    <svg viewBox="0 0 720 360" role="img" className={className} xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      {children}
    </svg>
  );
}

function AtlasRing({ x = 0, y = 0, scale = 1, fractures = [] }: { x?: number; y?: number; scale?: number; fractures?: string[] }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <path d="M 70 165 C 76 92 131 48 210 48 C 289 48 344 92 350 165 C 344 238 289 282 210 282 C 131 282 76 238 70 165 Z" {...bone} />
      <path d="M 120 165 C 125 128 153 108 210 108 C 267 108 295 128 300 165 C 295 202 267 222 210 222 C 153 222 125 202 120 165 Z" fill="var(--surface-2, var(--surface))" stroke="var(--ink-soft)" strokeWidth="1.6" />
      <path d="M 70 165 C 78 141 92 126 124 116 L 139 143 L 139 187 L 124 214 C 92 204 78 189 70 165 Z" {...soft} />
      <path d="M 350 165 C 342 141 328 126 296 116 L 281 143 L 281 187 L 296 214 C 328 204 342 189 350 165 Z" {...soft} />
      <ellipse cx="210" cy="147" rx="25" ry="31" {...soft} />
      <ellipse cx="210" cy="179" rx="29" ry="38" fill="var(--teal-tint, var(--surface-2))" stroke="var(--teal)" strokeWidth="2" />
      <path d="M 138 165 C 162 182 179 188 188 185" {...teal} />
      <path d="M 232 185 C 247 187 267 180 282 165" {...teal} />
      {fractures.includes("anterior") && <path d="M 194 53 L 202 83 L 190 108" {...injury} />}
      {fractures.includes("posterior") && <path d="M 224 222 L 216 247 L 228 278" {...injury} />}
      {fractures.includes("esquerda") && <path d="M 99 118 L 121 137 L 139 151" {...injury} />}
      {fractures.includes("direita") && <path d="M 321 116 L 300 137 L 282 151" {...injury} />}
      {fractures.includes("massa") && <path d="M 287 132 L 309 160 L 290 196" {...injury} />}
      {fractures.includes("transverso") && <path d="M 329 124 L 356 106" {...injury} />}
    </g>
  );
}

const Anatomia: FC<FigureProps> = ({ className, title }) => (
  <Frame title={title ?? "Anatomia axial do atlas e do ligamento transverso"} className={className}>
    <AtlasRing x={25} y={14} scale={1.05} />
    <text x="258" y="63" {...label} textAnchor="middle">arco anterior</text>
    <text x="258" y="337" {...label} textAnchor="middle">arco posterior</text>
    <text x="70" y="164" {...label}>massa lateral</text>
    <path d="M 144 160 L 171 171" {...amber} />
    <text x="461" y="116" {...label}>dente do áxis</text>
    <path d="M 455 121 L 274 165" {...amber} />
    <text x="461" y="160" {...label}>ligamento transverso</text>
    <path d="M 455 165 L 320 200" {...amber} />
    <text x="461" y="204" {...label}>medula e espaço livre</text>
    <path d="M 455 209 L 282 218" {...amber} />
    <text x="461" y="248" {...label}>forame transversário</text>
    <circle cx="390" cy="214" r="14" fill="none" stroke="var(--cortical)" strokeWidth="3" />
    <path d="M 455 250 L 405 222" {...amber} />
  </Frame>
);

const Mecanismo: FC<FigureProps> = ({ variant, className, title }) => {
  const intacto = variant === "intacto";
  return (
    <Frame title={title ?? "Carga axial e fratura em explosão do atlas"} className={className}>
      <path d="M 196 72 C 228 46 282 46 314 72" {...bone} />
      <path d="M 406 72 C 438 46 492 46 524 72" {...bone} />
      <ellipse cx="247" cy="102" rx="43" ry="17" {...soft} />
      <ellipse cx="463" cy="102" rx="43" ry="17" {...soft} />
      <path d="M 171 154 L 285 154 L 277 218 L 179 218 Z" {...bone} />
      <path d="M 429 154 L 543 154 L 535 218 L 437 218 Z" {...bone} />
      <path d="M 186 187 L 270 187" {...teal} strokeDasharray={intacto ? undefined : "8 7"} />
      <path d="M 444 187 L 528 187" {...teal} />
      {!intacto && <>
        <path d="M 180 155 L 168 191" {...injury} />
        <path d="M 278 154 L 289 192" {...injury} />
        <path d="M 180 184 L 136 184" {...injury} />
        <path d="M 278 184 L 322 184" {...injury} />
      </>}
      <path d="M 247 22 L 247 76" {...amber} />
      <path d="M 238 66 L 247 77 L 256 66" {...amber} />
      <path d="M 463 22 L 463 76" {...amber} />
      <path d="M 454 66 L 463 77 L 472 66" {...amber} />
      <text x="247" y="250" {...titleStyle} textAnchor="middle">{intacto ? "anel íntegro" : "explosão do anel"}</text>
      <text x="463" y="250" {...titleStyle} textAnchor="middle">referência normal</text>
      <text x="360" y="306" {...label} textAnchor="middle">as facetas inclinadas convertem carga vertical em dispersão lateral</text>
    </Frame>
  );
};

const RegraSpence: FC<FigureProps> = ({ className, title }) => (
  <Frame title={title ?? "Regra de Spence na incidência transoral"} className={className}>
    <path d="M 240 94 L 480 94 L 458 264 L 262 264 Z" {...bone} />
    <ellipse cx="360" cy="128" rx="34" ry="48" {...soft} />
    <path d="M 190 92 L 302 92 L 292 184 L 202 184 Z" {...bone} />
    <path d="M 418 92 L 530 92 L 518 184 L 428 184 Z" {...bone} />
    <path d="M 262 62 L 262 286 M 458 62 L 458 286" stroke="var(--muted)" strokeWidth="1.5" strokeDasharray="7 6" />
    <path d="M 202 214 L 262 214 M 458 214 L 518 214" {...amber} />
    <path d="M 202 206 L 202 222 M 262 206 L 262 222 M 458 206 L 458 222 M 518 206 L 518 222" {...amber} />
    <text x="232" y="202" fill="var(--amber)" fontSize="15" textAnchor="middle">a</text>
    <text x="488" y="202" fill="var(--amber)" fontSize="15" textAnchor="middle">b</text>
    <text x="360" y="318" {...titleStyle} textAnchor="middle">a + b &gt; 6,9 mm sugere lesão ligamentar</text>
    <text x="360" y="342" {...label} textAnchor="middle">medida indireta: confirmar o ligamento transverso na RM</text>
  </Frame>
);

const gehweilerPatterns: Array<{ code: string; label: string; fractures: string[] }> = [
  { code: "I", label: "arco anterior", fractures: ["anterior"] },
  { code: "II", label: "arco posterior", fractures: ["posterior"] },
  { code: "III", label: "explosão", fractures: ["anterior", "posterior"] },
  { code: "IV", label: "massa lateral", fractures: ["massa"] },
  { code: "V", label: "processo transverso", fractures: ["transverso"] },
];

const Gehweiler: FC<FigureProps> = ({ variant, className, title }) => (
  <Frame title={title ?? "Classificação de Gehweiler das fraturas do atlas"} className={className}>
    {gehweilerPatterns.map((item, index) => {
      const active = variant?.toUpperCase().includes(item.code);
      return (
        <g key={item.code} opacity={variant && !active ? 0.38 : 1}>
          <AtlasRing x={20 + index * 140} y={66} scale={0.3} fractures={item.fractures} />
          <text x={83 + index * 140} y="174" {...titleStyle} textAnchor="middle">{item.code}</text>
          <text x={83 + index * 140} y="196" {...label} textAnchor="middle">{item.label}</text>
        </g>
      );
    })}
    <path d="M 214 230 L 506 230" {...teal} />
    <text x="360" y="266" {...titleStyle} textAnchor="middle">IIIa: ligamento íntegro | IIIb: ligamento roto</text>
    <text x="360" y="294" {...label} textAnchor="middle">o subtipo IIIb é o padrão de Jefferson instável</text>
  </Frame>
);

const Dickman: FC<FigureProps> = ({ variant, className, title }) => {
  const onlyOne = variant === "I" || variant === "II";
  return (
    <Frame title={title ?? "Classificação de Dickman da lesão do ligamento transverso"} className={className}>
      <g opacity={onlyOne && variant !== "I" ? 0.35 : 1}>
        <AtlasRing x={34} y={62} scale={0.58} />
        <path d="M 171 171 L 191 181" {...injury} />
        <text x="156" y="282" {...titleStyle} textAnchor="middle">Tipo I</text>
        <text x="156" y="306" {...label} textAnchor="middle">ruptura intrassubstancial</text>
        <text x="156" y="328" fill="var(--cortical)" fontSize="12" textAnchor="middle">não consolida com órtese</text>
      </g>
      <g opacity={onlyOne && variant !== "II" ? 0.35 : 1}>
        <AtlasRing x={382} y={62} scale={0.58} />
        <path d="M 465 156 L 479 173 L 465 185 Z" fill="var(--cortical)" opacity="0.75" />
        <text x="504" y="282" {...titleStyle} textAnchor="middle">Tipo II</text>
        <text x="504" y="306" {...label} textAnchor="middle">avulsão óssea da inserção</text>
        <text x="504" y="328" fill="var(--teal)" fontSize="12" textAnchor="middle">pode consolidar com órtese</text>
      </g>
      <path d="M 360 52 L 360 336" stroke="var(--line)" strokeWidth="1" />
    </Frame>
  );
};

const IadPerfil: FC<FigureProps> = ({ variant, className, title }) => {
  const instavel = variant === "instavel";
  const iad = instavel ? 54 : 28;
  return (
    <Frame title={title ?? "Intervalo atlantodental e espaço disponível para a medula"} className={className}>
      <path d="M 210 82 L 258 82 L 254 218 L 214 218 Z" {...bone} />
      <path d="M 162 112 C 184 98 194 102 204 116 L 204 180 C 194 194 182 194 162 180 Z" {...bone} />
      <path d={`M ${204 + iad} 116 C ${224 + iad} 104 ${244 + iad} 104 ${260 + iad} 116 L ${260 + iad} 182 C ${242 + iad} 192 ${224 + iad} 192 ${204 + iad} 180 Z`} {...soft} />
      <rect x={360 + (instavel ? 20 : 0)} y="72" width="58" height="190" rx="28" fill="var(--teal-tint, var(--surface-2))" stroke="var(--teal)" strokeWidth="2" />
      <path d="M 204 100 L 204 206 M 258 100 L 258 206" stroke="var(--muted)" strokeWidth="1" strokeDasharray="5 5" />
      <path d={`M 204 228 L ${204 + iad} 228`} {...amber} />
      <path d={`M 204 220 L 204 236 M ${204 + iad} 220 L ${204 + iad} 236`} {...amber} />
      <text x={204 + iad / 2} y="252" fill="var(--amber)" fontSize="13" textAnchor="middle">IAD</text>
      <path d={`M ${260 + iad} 286 L ${instavel ? 380 : 360} 286`} {...amber} />
      <text x="360" y="314" {...label} textAnchor="middle">espaço disponível para a medula</text>
      <text x="528" y="116" {...titleStyle}>{instavel ? "instável" : "normal"}</text>
      <text x="528" y="144" {...label}>IAD {instavel ? "> 5 mm" : "≤ 3 mm"}</text>
      <text x="528" y="172" {...label}>{instavel ? "espaço neural reduzido" : "ligamento competente"}</text>
    </Frame>
  );
};

const Fixacao: FC<FigureProps> = ({ variant, className, title }) => {
  const orif = variant === "orif";
  const occipital = variant === "occipitocervical";
  return (
    <Frame title={title ?? "Opções de fixação posterior do complexo C1-C2"} className={className}>
      {occipital && <path d="M 230 34 C 280 12 440 12 490 34 L 470 92 L 250 92 Z" {...bone} />}
      <AtlasRing x={152} y={42 + (occipital ? 36 : 0)} scale={0.78} fractures={orif ? ["anterior", "posterior"] : []} />
      <path d="M 246 272 C 276 244 444 244 474 272 L 458 324 L 262 324 Z" {...bone} />
      <circle cx="286" cy="198" r="9" fill="var(--surface-2)" stroke="var(--ink)" strokeWidth="3" />
      <circle cx="434" cy="198" r="9" fill="var(--surface-2)" stroke="var(--ink)" strokeWidth="3" />
      <circle cx="302" cy="286" r="9" fill="var(--surface-2)" stroke="var(--ink)" strokeWidth="3" />
      <circle cx="418" cy="286" r="9" fill="var(--surface-2)" stroke="var(--ink)" strokeWidth="3" />
      {orif ? (
        <path d="M 278 198 L 442 198" stroke="var(--ink)" strokeWidth="6" strokeLinecap="round" />
      ) : (
        <>
          <path d="M 286 198 L 302 286 M 434 198 L 418 286" stroke="var(--ink)" strokeWidth="6" strokeLinecap="round" />
          <path d="M 302 224 C 334 238 386 238 418 224" {...teal} strokeWidth="6" />
        </>
      )}
      {occipital && <>
        <circle cx="300" cy="58" r="7" fill="var(--ink)" />
        <circle cx="420" cy="58" r="7" fill="var(--ink)" />
        <path d="M 300 58 L 286 198 M 420 58 L 434 198" stroke="var(--ink)" strokeWidth="6" />
      </>}
      <text x="560" y="112" {...titleStyle}>{orif ? "osteossíntese de C1" : occipital ? "occipitocervical" : "Harms-Goel C1-C2"}</text>
      <text x="560" y="142" {...label}>{orif ? "preserva a rotação" : occipital ? "maior perda de movimento" : "padrão para Dickman I"}</text>
      <text x="560" y="178" {...label}>planejar artéria vertebral</text>
      <text x="560" y="204" {...label}>e corredor de C2 na TC</text>
    </Frame>
  );
};

export const figures: Record<string, FC<FigureProps>> = {
  "fratura-atlas-jefferson:anatomia": Anatomia,
  "fratura-atlas-jefferson:mecanismo": Mecanismo,
  "fratura-atlas-jefferson:regra-spence": RegraSpence,
  "fratura-atlas-jefferson:gehweiler": Gehweiler,
  "fratura-atlas-jefferson:dickman": Dickman,
  "fratura-atlas-jefferson:iad-perfil": IadPerfil,
  "fratura-atlas-jefferson:fixacao": Fixacao,
};
