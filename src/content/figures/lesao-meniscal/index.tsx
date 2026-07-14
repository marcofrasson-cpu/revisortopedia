import type { FC, ReactNode } from "react";
import type { FigureProps } from "../../../types/topic";

const label = { fill: "var(--muted)", fontFamily: "var(--font-body, sans-serif)", fontSize: 11 };
const body = { fill: "var(--ink)", fontFamily: "var(--font-body, sans-serif)", fontSize: 12 };
const mono = { fill: "var(--ink)", fontFamily: "var(--font-mono, monospace)", fontSize: 11 };
const bone = { fill: "var(--surface)", stroke: "var(--ink-soft)", strokeWidth: 2 };

function Panel({ x, y, w, h, children }: { x: number; y: number; w: number; h: number; children: ReactNode }) {
  return <g><rect x={x} y={y} width={w} height={h} rx="8" fill="var(--surface-2, var(--surface))" stroke="var(--line)" />{children}</g>;
}

function Meniscus({ cx, cy, side, color = "var(--teal)" }: { cx: number; cy: number; side: "medial" | "lateral"; color?: string }) {
  const d = side === "medial"
    ? `M${cx - 54} ${cy - 6} C${cx - 48} ${cy - 42} ${cx + 38} ${cy - 44} ${cx + 52} ${cy - 8} C${cx + 31} ${cy - 22} ${cx - 26} ${cy - 21} ${cx - 54} ${cy - 6} Z`
    : `M${cx - 48} ${cy - 3} C${cx - 42} ${cy - 42} ${cx + 43} ${cy - 42} ${cx + 49} ${cy - 2} C${cx + 34} ${cy + 25} ${cx - 32} ${cy + 24} ${cx - 48} ${cy - 3} Z M${cx - 25} ${cy - 2} C${cx - 18} ${cy - 18} ${cx + 19} ${cy - 18} ${cx + 26} ${cy - 1} C${cx + 15} ${cy + 10} ${cx - 15} ${cy + 10} ${cx - 25} ${cy - 2} Z`;
  return <path d={d} fill={color} opacity="0.24" stroke={color} strokeWidth="2.5" fillRule="evenodd" />;
}

export const Anatomy: FC<FigureProps> = ({ className, title }) => (
  <svg viewBox="0 0 560 330" role="img" className={className} xmlns="http://www.w3.org/2000/svg">
    <title>{title ?? "Anatomia dos meniscos, raízes e zonas vasculares"}</title>
    <text x="280" y="24" {...mono} textAnchor="middle">platô tibial · vista superior</text>
    <ellipse cx="280" cy="175" rx="190" ry="112" {...bone} />
    <ellipse cx="204" cy="174" rx="62" ry="58" fill="var(--surface-2, var(--surface))" stroke="var(--line-strong)" />
    <ellipse cx="356" cy="174" rx="62" ry="58" fill="var(--surface-2, var(--surface))" stroke="var(--line-strong)" />
    <Meniscus cx={202} cy={185} side="medial" />
    <Meniscus cx={357} cy={184} side="lateral" color="var(--amber)" />
    <path d="M269 145 L280 126 L291 145" fill="var(--surface)" stroke="var(--ink-soft)" strokeWidth="2" />
    {[[240,145],[320,145],[243,218],[317,218]].map(([x,y], i) => <circle key={i} cx={x} cy={y} r="6" fill={i % 2 ? "var(--amber)" : "var(--teal)"} />)}
    <path d="M150 160 C162 122 234 118 257 149" fill="none" stroke="var(--cortical)" strokeWidth="3" />
    <path d="M158 171 C174 141 226 138 247 157" fill="none" stroke="var(--amber)" strokeWidth="3" />
    <path d="M168 180 C187 158 215 157 237 169" fill="none" stroke="var(--line-strong)" strokeWidth="3" />
    <text x="64" y="114" {...body}>menisco medial</text><path d="M145 118 L175 139" stroke="var(--line-strong)" />
    <text x="405" y="114" {...body}>menisco lateral</text><path d="M404 119 L384 140" stroke="var(--line-strong)" />
    <text x="54" y="250" {...mono} fill="var(--cortical)">VERMELHO–VERMELHO</text>
    <text x="54" y="268" {...label}>periferia vascular</text>
    <text x="220" y="288" {...mono} fill="var(--amber)">VERMELHO–BRANCO</text>
    <text x="406" y="250" {...mono}>BRANCO–BRANCO</text>
    <text x="406" y="268" {...label}>centro avascular</text>
    <text x="280" y="316" {...label} textAnchor="middle">raízes ancoram as fibras circunferenciais e limitam a extrusão</text>
  </svg>
);

const patterns = [
  ["longitudinal", "longitudinal", "M28 82 C62 62 96 64 126 84"],
  ["radial", "radial", "M78 62 L78 102"],
  ["horizontal", "horizontal", "M32 84 L124 84"],
  ["complexa", "complexa", "M42 67 L78 100 L112 64 M78 100 L116 99"],
  ["alça", "alça de balde", "M34 83 C58 48 104 49 126 82 M52 84 C65 69 96 69 108 84"],
] as const;

export const TearPatterns: FC<FigureProps> = ({ className, title, variant }) => {
  const selected = (variant ?? "").toLowerCase();
  return (
    <svg viewBox="0 0 580 330" role="img" className={className} xmlns="http://www.w3.org/2000/svg">
      <title>{title ?? "Padrões morfológicos das rupturas meniscais"}</title>
      <text x="290" y="24" {...mono} textAnchor="middle">padrão do traço · continuidade circunferencial</text>
      {patterns.map(([key, name, tear], i) => {
        const x = 18 + (i % 3) * 185;
        const y = 43 + Math.floor(i / 3) * 137;
        const active = !selected || selected === key || (selected === "complexa" && key === "complexa");
        return <g key={key} opacity={active ? 1 : 0.28} transform={`translate(${x} ${y})`}>
          <rect width="168" height="120" rx="8" fill="var(--surface-2, var(--surface))" stroke={selected === key ? "var(--teal)" : "var(--line)"} strokeWidth={selected === key ? 2 : 1} />
          <path d="M22 90 C30 35 134 34 145 90 C120 70 48 70 22 90 Z" fill="var(--teal)" opacity="0.22" stroke="var(--teal)" strokeWidth="2" />
          <path d={tear} fill="none" stroke="var(--cortical)" strokeWidth="3" strokeLinecap="round" />
          <text x="84" y="112" {...mono} textAnchor="middle">{name}</text>
        </g>;
      })}
      <Panel x={388} y={180} w={174} h={120}>
        <text x="404" y="204" {...mono} fill="var(--amber)">RAIZ POSTERIOR</text>
        <path d="M414 257 C430 218 509 218 534 258" fill="none" stroke="var(--teal)" strokeWidth="14" opacity="0.35" />
        <path d="M488 224 L488 270" stroke="var(--cortical)" strokeWidth="4" />
        <circle cx="488" cy="270" r="6" fill="var(--cortical)" />
        <text x="404" y="288" {...label}>ruptura radial até 1 cm da inserção</text>
      </Panel>
      <text x="290" y="320" {...body} textAnchor="middle">Radial completa e raiz interrompem o arco funcional do menisco.</text>
    </svg>
  );
};

export const ExamMri: FC<FigureProps> = ({ className, title }) => (
  <svg viewBox="0 0 560 325" role="img" className={className} xmlns="http://www.w3.org/2000/svg">
    <title>{title ?? "Correlação do exame clínico com a ressonância na lesão meniscal"}</title>
    <text x="280" y="24" {...mono} textAnchor="middle">clínica + morfologia + estabilidade</text>
    <Panel x={18} y={42} w={245} h={240}>
      <text x="34" y="68" {...mono} fill="var(--teal)">EXAME</text>
      <path d="M66 102 L130 102 L190 152" stroke="var(--ink-soft)" strokeWidth="13" fill="none" strokeLinecap="round" />
      <path d="M190 152 L181 231" stroke="var(--ink-soft)" strokeWidth="12" strokeLinecap="round" />
      <circle cx="187" cy="153" r="18" fill="var(--surface)" stroke="var(--teal)" strokeWidth="2" />
      <path d="M165 144 C180 132 202 133 214 149" stroke="var(--amber)" strokeWidth="5" fill="none" />
      <path d="M151 119 C167 131 173 137 178 150" stroke="var(--cortical)" strokeWidth="4" fill="none" />
      <text x="34" y="244" {...body}>interlinha · derrame · bloqueio</text>
      <text x="34" y="264" {...label}>McMurray e Thessaly apoiam, não isolam</text>
    </Panel>
    <Panel x={280} y={42} w={262} h={240}>
      <text x="296" y="68" {...mono} fill="var(--teal)">RESSONÂNCIA</text>
      <rect x="298" y="84" width="226" height="150" rx="6" fill="var(--surface)" stroke="var(--line-strong)" />
      <path d="M324 108 C358 88 434 91 478 116 C461 137 448 153 438 190" fill="none" stroke="var(--ink-soft)" strokeWidth="18" opacity="0.65" />
      <path d="M320 203 C365 180 450 181 496 204" fill="none" stroke="var(--ink-soft)" strokeWidth="18" opacity="0.65" />
      <path d="M362 186 L404 172 L394 197 Z" fill="var(--amber)" stroke="var(--amber)" />
      <path d="M388 180 L426 151" stroke="var(--cortical)" strokeWidth="3" />
      <text x="430" y="148" {...label}>sinal alcança superfície</text>
      <text x="296" y="254" {...body}>padrão · zona · extrusão · raiz</text>
      <text x="296" y="272" {...label}>mapear cartilagem e ligamentos associados</text>
    </Panel>
    <text x="280" y="313" {...body} textAnchor="middle">Achado de RM sem correlação clínica não é indicação cirúrgica.</text>
  </svg>
);

export const Repair: FC<FigureProps> = ({ className, title }) => (
  <svg viewBox="0 0 570 325" role="img" className={className} xmlns="http://www.w3.org/2000/svg">
    <title>{title ?? "Técnicas artroscópicas de reparo meniscal por localização"}</title>
    <text x="285" y="24" {...mono} textAnchor="middle">reparo meniscal · escolher pelo acesso ao traço</text>
    {[
      [18, "ALL-INSIDE", "corno posterior", "M55 160 C78 112 130 112 154 160", "M92 125 Q104 96 116 125"],
      [201, "INSIDE-OUT", "corpo", "M238 160 C260 112 314 112 338 160", "M250 128 L328 96 M266 142 L344 112"],
      [384, "OUTSIDE-IN", "corno anterior", "M421 160 C444 112 496 112 520 160", "M407 104 L468 136 M421 92 L483 126"],
    ].map(([x,name,note,meniscus,suture]) => <Panel key={String(name)} x={Number(x)} y={42} w={168} h={238}>
      <text x={Number(x)+14} y="68" {...mono} fill="var(--teal)">{name}</text>
      <text x={Number(x)+14} y="86" {...label}>{note}</text>
      <path d={String(meniscus)} fill="none" stroke="var(--teal)" strokeWidth="18" opacity="0.35" />
      <path d={String(suture)} fill="none" stroke="var(--cortical)" strokeWidth="3" />
      <circle cx={Number(x)+84} cy="140" r="8" fill="var(--surface)" stroke="var(--cortical)" strokeWidth="2" />
      <line x1={Number(x)+22} y1="194" x2={Number(x)+146} y2="194" stroke="var(--line)" />
      <text x={Number(x)+14} y="218" {...body}>pontos verticais</text>
      <text x={Number(x)+14} y="238" {...label}>capturam fibras circunferenciais</text>
      <text x={Number(x)+14} y="260" {...label}>sondar após estabilizar</text>
    </Panel>)}
    <text x="285" y="313" {...body} textAnchor="middle">O melhor dispositivo é o que reduz o traço sem lesar cartilagem ou estruturas posteriores.</text>
  </svg>
);

export const RootRepair: FC<FigureProps> = ({ className, title, variant }) => {
  const avulsed = (variant ?? "reparo") === "avulsao";
  return <svg viewBox="0 0 560 325" role="img" className={className} xmlns="http://www.w3.org/2000/svg">
    <title>{title ?? "Avulsão da raiz posterior e reparo transtibial"}</title>
    <text x="280" y="24" {...mono} textAnchor="middle">raiz posterior medial · restaurar inserção e tensão circunferencial</text>
    <Panel x={18} y={42} w={245} h={235}>
      <text x="34" y="68" {...mono} fill="var(--cortical)">ANTES · EXTRUSÃO</text>
      <ellipse cx="142" cy="163" rx="91" ry="66" {...bone} />
      <path d="M75 177 C92 118 183 116 215 171" fill="none" stroke="var(--teal)" strokeWidth="17" opacity="0.36" />
      <path d="M187 127 L187 188" stroke="var(--cortical)" strokeWidth="5" strokeDasharray="8 6" />
      <path d="M202 135 L231 124" stroke="var(--cortical)" strokeWidth="3" />
      <text x="178" y="225" {...label}>raiz sem ancoragem</text>
      <text x="34" y="258" {...body}>perda da função de arco</text>
    </Panel>
    <Panel x={280} y={42} w={262} h={235}>
      <text x="296" y="68" {...mono} fill="var(--teal)">DEPOIS · REINSERÇÃO</text>
      <ellipse cx="411" cy="163" rx="92" ry="66" {...bone} />
      <path d="M344 177 C362 119 451 117 482 171" fill="none" stroke="var(--teal)" strokeWidth="17" opacity="0.36" />
      <circle cx="456" cy="135" r="7" fill="var(--teal)" />
      <path d="M442 121 Q456 104 469 121 M447 125 L409 247 M465 125 L428 247" fill="none" stroke="var(--cortical)" strokeWidth="3" />
      <rect x="402" y="244" width="32" height="10" rx="4" fill="var(--cortical)" />
      <text x="296" y="258" {...body}>túnel no centro anatômico</text>
    </Panel>
    {avulsed && <rect x="17" y="41" width="247" height="237" rx="8" fill="none" stroke="var(--cortical)" strokeWidth="3" />}
    <text x="280" y="312" {...body} textAnchor="middle">Alinhamento e cartilagem definem se o reparo isolado terá ambiente favorável.</text>
  </svg>;
};

export const Rehabilitation: FC<FigureProps> = ({ className, title }) => (
  <svg viewBox="0 0 560 310" role="img" className={className} xmlns="http://www.w3.org/2000/svg">
    <title>{title ?? "Reabilitação proporcional ao padrão de reparo meniscal"}</title>
    <text x="280" y="24" {...mono} textAnchor="middle">proteção proporcional à perda da função circunferencial</text>
    {[
      [52,"LONGITUDINAL","carga protegida","flexão progressiva","var(--teal)"],
      [164,"RADIAL","descarga inicial","evitar agachamento","var(--amber)"],
      [276,"RAIZ","~6 sem sem carga","flexão protegida","var(--cortical)"],
      [388,"MENISCECTOMIA","carga conforme dor","progressão rápida","var(--ink-soft)"],
    ].map(([x,name,load,motion,color], i) => <g key={String(name)}>
      <rect x={Number(x)} y="54" width="96" height="190" rx="8" fill="var(--surface-2, var(--surface))" stroke="var(--line)" />
      <circle cx={Number(x)+48} cy="88" r="22" fill="var(--surface)" stroke={String(color)} strokeWidth="3" />
      <text x={Number(x)+48} y="92" {...mono} textAnchor="middle" fill={String(color)}>{i+1}</text>
      <text x={Number(x)+48} y="128" {...mono} textAnchor="middle" fill={String(color)}>{name}</text>
      <line x1={Number(x)+14} y1="146" x2={Number(x)+82} y2="146" stroke="var(--line)" />
      <text x={Number(x)+48} y="171" {...label} textAnchor="middle">{load}</text>
      <text x={Number(x)+48} y="194" {...label} textAnchor="middle">{motion}</text>
      <text x={Number(x)+48} y="226" {...body} textAnchor="middle">{i === 3 ? "2–6 sem" : "4–6 meses"}</text>
    </g>)}
    <text x="280" y="278" {...body} textAnchor="middle">Derrame ou dor após progressão = carga excessiva para a fase.</text>
    <text x="280" y="298" {...label} textAnchor="middle">Retorno depende de força, salto, controle e demanda do esporte.</text>
  </svg>
);

export const figures: Record<string, FC<FigureProps>> = {
  "lesao-meniscal:anatomia": Anatomy,
  "lesao-meniscal:padroes": TearPatterns,
  "lesao-meniscal:exame-rm": ExamMri,
  "lesao-meniscal:reparo": Repair,
  "lesao-meniscal:raiz": RootRepair,
  "lesao-meniscal:reabilitacao": Rehabilitation,
};
