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
  strokeWidth: 1.4,
  strokeLinejoin: "round" as const,
};
const teal = {
  fill: "none",
  stroke: "var(--teal)",
  strokeWidth: 3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};
const amber = {
  fill: "none",
  stroke: "var(--amber)",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};
const cortical = {
  fill: "none",
  stroke: "var(--cortical)",
  strokeWidth: 3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};
const label = {
  fill: "var(--muted)",
  fontFamily: "var(--font-body, sans-serif)",
  fontSize: 12,
};
const heading = {
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

type BodyShape = "normal" | "cunha" | "biconcava" | "esmagamento" | "retropulsao" | "plana";

function bodyPath(shape: BodyShape, x: number, y: number, w = 94, h = 48): string {
  switch (shape) {
    case "cunha":
      return `M ${x} ${y + 15} L ${x + w} ${y} L ${x + w} ${y + h} L ${x} ${y + h - 13} Z`;
    case "biconcava":
      return `M ${x} ${y} Q ${x + w / 2} ${y + 13} ${x + w} ${y} L ${x + w} ${y + h} Q ${x + w / 2} ${y + h - 13} ${x} ${y + h} Z`;
    case "esmagamento":
      return `M ${x} ${y + 12} L ${x + w} ${y + 7} L ${x + w} ${y + h - 8} L ${x} ${y + h - 13} Z`;
    case "retropulsao":
      return `M ${x} ${y + 10} L ${x + w - 12} ${y} L ${x + w + 12} ${y + h / 2} L ${x + w - 8} ${y + h} L ${x} ${y + h - 8} Z`;
    case "plana":
      return `M ${x} ${y + 18} L ${x + w} ${y + 15} L ${x + w} ${y + 30} L ${x} ${y + 33} Z`;
    default:
      return `M ${x} ${y} L ${x + w} ${y} L ${x + w} ${y + h} L ${x} ${y + h} Z`;
  }
}

function Vertebra({ shape = "normal", x, y, w = 94, h = 48, active = false }: { shape?: BodyShape; x: number; y: number; w?: number; h?: number; active?: boolean }) {
  return (
    <g>
      <path d={bodyPath(shape, x, y, w, h)} {...bone} stroke={active ? "var(--amber)" : "var(--ink-soft)"} />
      <path d={`M ${x + 10} ${y + 9} L ${x + w - 10} ${y + h - 9} M ${x + 10} ${y + h - 9} L ${x + w - 10} ${y + 9}`} stroke="var(--line)" strokeWidth="1" opacity="0.55" />
      <path d={`M ${x + w} ${y + 10} L ${x + w + 28} ${y + 8} L ${x + w + 42} ${y + h / 2} L ${x + w + 28} ${y + h - 8} L ${x + w} ${y + h - 10}`} {...soft} />
    </g>
  );
}

const Anatomia: FC<FigureProps> = ({ className, title }) => (
  <Frame title={title ?? "Transição toracolombar e fratura osteoporótica em cunha"} className={className}>
    <path d="M 382 45 C 400 105 402 165 394 310" {...teal} strokeWidth="12" opacity="0.25" />
    <Vertebra x={248} y={42} />
    <Vertebra x={242} y={108} shape="cunha" active />
    <Vertebra x={244} y={174} />
    <Vertebra x={250} y={240} />
    <path d="M 250 100 L 340 100 M 246 166 L 338 166 M 248 232 L 340 232" stroke="var(--teal)" strokeWidth="7" opacity="0.45" />
    <path d="M 242 120 L 330 108" {...amber} />
    <text x="188" y="76" {...label} textAnchor="end">T11</text>
    <text x="188" y="142" {...heading} textAnchor="end">T12 em cunha</text>
    <text x="188" y="208" {...label} textAnchor="end">L1</text>
    <text x="188" y="274" {...label} textAnchor="end">L2</text>
    <text x="472" y="74" {...label}>canal vertebral</text>
    <path d="M 466 78 L 404 86" {...amber} />
    <text x="472" y="126" {...label}>impactação do platô superior</text>
    <path d="M 466 130 L 332 109" {...amber} />
    <text x="472" y="178" {...label}>parede posterior preservada</text>
    <path d="M 466 182 L 340 150" {...amber} />
    <text x="472" y="230" {...label}>cone medular T12-L1</text>
    <text x="472" y="254" {...label}>e cauda equina abaixo</text>
  </Frame>
);

const genantData: Array<{ shape: BodyShape; name: string; loss: string }> = [
  { shape: "normal", name: "normal", loss: "< 20%" },
  { shape: "cunha", name: "cunha", loss: "anterior" },
  { shape: "biconcava", name: "bicôncava", loss: "central" },
  { shape: "esmagamento", name: "esmagamento", loss: "global" },
];

const Genant: FC<FigureProps> = ({ variant, className, title }) => (
  <Frame title={title ?? "Padrões morfológicos e graus de Genant"} className={className}>
    {genantData.map((item, index) => {
      const active = !variant || item.shape === variant || variant === "G1" || variant === "G2" || variant === "G3";
      return (
        <g key={item.name} opacity={active ? 1 : 0.35}>
          <Vertebra x={42 + index * 170} y={66} w={98} h={62} shape={item.shape} active={item.shape === variant} />
          <text x={92 + index * 170} y="158" {...heading} textAnchor="middle">{item.name}</text>
          <text x={92 + index * 170} y="180" {...label} textAnchor="middle">perda {item.loss}</text>
        </g>
      );
    })}
    <path d="M 120 248 L 600 248" stroke="var(--line)" strokeWidth="12" strokeLinecap="round" />
    <path d="M 120 248 L 280 248" stroke="var(--teal)" strokeWidth="12" strokeLinecap="round" />
    <path d="M 280 248 L 440 248" stroke="var(--amber)" strokeWidth="12" />
    <path d="M 440 248 L 600 248" stroke="var(--cortical)" strokeWidth="12" strokeLinecap="round" />
    {[[120, "0"], [280, "25%"], [440, "40%"], [600, "> 40%"]].map(([x, text]) => <text key={String(text)} x={Number(x)} y="282" {...label} textAnchor="middle">{text}</text>)}
    <text x="200" y="320" {...heading} textAnchor="middle">Grau 1: 20-25%</text>
    <text x="360" y="320" {...heading} textAnchor="middle">Grau 2: 25-40%</text>
    <text x="520" y="320" {...heading} textAnchor="middle">Grau 3: &gt; 40%</text>
  </Frame>
);

const ofData: Array<{ code: string; shape: BodyShape; note: string }> = [
  { code: "OF1", shape: "normal", note: "edema, sem deformidade" },
  { code: "OF2", shape: "cunha", note: "parede posterior < 1/5" },
  { code: "OF3", shape: "retropulsao", note: "parede posterior > 1/5" },
  { code: "OF4", shape: "plana", note: "perda estrutural" },
  { code: "OF5", shape: "esmagamento", note: "distração/cisalhamento" },
];

const ClassificacaoOf: FC<FigureProps> = ({ variant, className, title }) => (
  <Frame title={title ?? "Classificação OF das fraturas vertebrais osteoporóticas"} className={className}>
    {ofData.map((item, index) => {
      const active = !variant || variant.toUpperCase() === item.code;
      const x = 32 + index * 138;
      return (
        <g key={item.code} opacity={active ? 1 : 0.34}>
          <Vertebra x={x} y={92} w={80} h={58} shape={item.shape} active={active && Boolean(variant)} />
          {item.code === "OF1" && <ellipse cx={x + 40} cy="120" rx="25" ry="17" fill="var(--teal)" opacity="0.2" />}
          {item.code === "OF5" && <path d={`M ${x - 2} 78 L ${x + 86} 166`} {...cortical} />}
          <text x={x + 42} y="192" {...heading} textAnchor="middle">{item.code}</text>
          <text x={x + 42} y="216" {...label} textAnchor="middle">{item.note.split(" ")[0]}</text>
          <text x={x + 42} y="234" {...label} textAnchor="middle">{item.note.split(" ").slice(1).join(" ")}</text>
        </g>
      );
    })}
    <path d="M 76 278 L 628 278" {...amber} />
    <path d="M 618 270 L 630 278 L 618 286" {...amber} />
    <text x="352" y="314" {...heading} textAnchor="middle">aumentam instabilidade e indicação operatória</text>
  </Frame>
);

const CifoseSagital: FC<FigureProps> = ({ className, title }) => (
  <Frame title={title ?? "Cifose segmentar e desequilíbrio sagital"} className={className}>
    <path d="M 290 36 C 226 94 242 154 310 180 C 378 206 366 278 320 326" fill="none" stroke="var(--ink-soft)" strokeWidth="18" strokeLinecap="round" opacity="0.28" />
    {[0, 1, 2, 3, 4, 5, 6].map((i) => <rect key={i} x={252 + Math.sin(i) * 20} y={58 + i * 38} width="74" height="25" rx="5" transform={`rotate(${i < 3 ? -12 : i === 3 ? 18 : 8} ${289 + Math.sin(i) * 20} ${70 + i * 38})`} {...soft} />)}
    <path d="M 222 153 L 359 186 M 236 229 L 356 263" {...amber} />
    <path d="M 244 172 A 58 58 0 0 1 260 232" {...amber} />
    <text x="190" y="210" fill="var(--amber)" fontSize="14">Cobb</text>
    <path d="M 450 30 L 450 326" stroke="var(--teal)" strokeWidth="2" strokeDasharray="8 7" />
    <circle cx="450" cy="30" r="5" fill="var(--teal)" />
    <path d="M 450 310 L 520 310" {...amber} />
    <text x="486" y="298" {...label} textAnchor="middle">SVA</text>
    <text x="540" y="76" {...heading}>prumo de C7</text>
    <text x="540" y="104" {...label}>deslocado anteriormente</text>
    <text x="540" y="152" {...label}>mais cifose</text>
    <text x="540" y="176" {...label}>mais momento fletor</text>
    <text x="540" y="200" {...label}>mais risco de nova fratura</text>
  </Frame>
);

const RmDatacao: FC<FigureProps> = ({ variant, className, title }) => {
  const onlyAcute = variant === "aguda";
  const onlyOld = variant === "antiga";
  return (
    <Frame title={title ?? "RM STIR para datação da fratura vertebral"} className={className}>
      {[{ x: 70, acute: true, title: "recente" }, { x: 400, acute: false, title: "antiga" }].map((panel) => (
        <g key={panel.title} opacity={(onlyAcute && !panel.acute) || (onlyOld && panel.acute) ? 0.32 : 1}>
          <rect x={panel.x} y="42" width="250" height="250" rx="8" fill="var(--ink)" opacity="0.08" stroke="var(--line)" />
          <Vertebra x={panel.x + 66} y={82} w={92} h={46} />
          <Vertebra x={panel.x + 66} y={145} w={92} h={46} shape="cunha" active={panel.acute} />
          <Vertebra x={panel.x + 66} y={208} w={92} h={46} />
          {panel.acute && <ellipse cx={panel.x + 112} cy="168" rx="34" ry="17" fill="var(--teal)" opacity="0.45" />}
          <text x={panel.x + 125} y="322" {...heading} textAnchor="middle">{panel.title}</text>
          <text x={panel.x + 125} y="344" {...label} textAnchor="middle">{panel.acute ? "edema hiperintenso no STIR" : "deformidade sem edema"}</text>
        </g>
      ))}
    </Frame>
  );
};

const Vertebroplastia: FC<FigureProps> = ({ className, title }) => (
  <Frame title={title ?? "Vertebroplastia transpedicular em axial e perfil"} className={className}>
    <g>
      <ellipse cx="210" cy="172" rx="130" ry="92" {...bone} />
      <ellipse cx="210" cy="172" rx="42" ry="31" fill="var(--teal-tint, var(--surface-2))" stroke="var(--teal)" strokeWidth="2" />
      <path d="M 80 162 L 168 172 M 340 162 L 252 172" stroke="var(--ink)" strokeWidth="7" strokeLinecap="round" />
      <path d="M 146 116 L 166 228 M 274 116 L 254 228" stroke="var(--amber)" strokeWidth="1.5" strokeDasharray="6 5" />
      <text x="210" y="292" {...heading} textAnchor="middle">trajeto axial transpedicular</text>
    </g>
    <g>
      <Vertebra x={438} y={108} w={140} h={108} />
      <path d="M 650 230 L 518 160" stroke="var(--ink)" strokeWidth="8" strokeLinecap="round" />
      <path d="M 470 142 C 494 122 544 130 557 159 C 545 188 492 197 465 174 Z" fill="var(--amber)" opacity="0.45" stroke="var(--amber)" strokeWidth="2" />
      <path d="M 566 164 C 602 152 620 137 638 118" {...cortical} strokeDasharray="6 5" />
      <text x="525" y="292" {...heading} textAnchor="middle">ponta no terço anterior</text>
      <text x="525" y="316" {...label} textAnchor="middle">cimento viscoso, baixa pressão</text>
    </g>
    <path d="M 382 40 L 382 330" stroke="var(--line)" />
  </Frame>
);

const Cifoplastia: FC<FigureProps> = ({ className, title }) => {
  const stages = ["cânula e balão", "insuflação", "cimento"];
  return (
    <Frame title={title ?? "Cifoplastia com balão em três tempos"} className={className}>
      {stages.map((stage, index) => {
        const x = 36 + index * 228;
        return (
          <g key={stage}>
            <Vertebra x={x + 26} y={88} w={132} h={106} shape="cunha" />
            <path d={`M ${x + 200} 220 L ${x + 112} 150`} stroke="var(--ink)" strokeWidth="7" strokeLinecap="round" />
            {index === 0 && <ellipse cx={x + 104} cy="145" rx="10" ry="5" fill="var(--teal)" />}
            {index === 1 && <>
              <ellipse cx={x + 102} cy="145" rx="42" ry="23" fill="var(--teal)" opacity="0.25" stroke="var(--teal)" strokeWidth="2" />
              <path d={`M ${x + 70} 100 L ${x + 70} 78 M ${x + 134} 100 L ${x + 134} 78`} {...amber} />
            </>}
            {index === 2 && <ellipse cx={x + 102} cy="145" rx="42" ry="23" fill="var(--amber)" opacity="0.45" stroke="var(--amber)" strokeWidth="2" />}
            <text x={x + 102} y="266" {...heading} textAnchor="middle">{index + 1}. {stage}</text>
          </g>
        );
      })}
      <text x="360" y="322" {...label} textAnchor="middle">o balão cria cavidade e reduz a pressão de injeção; restauração de altura é limitada</text>
    </Frame>
  );
};

const EvidenciaSham: FC<FigureProps> = ({ className, title }) => (
  <Frame title={title ?? "Ensaio com procedimento simulado de vertebroplastia"} className={className}>
    <path d="M 112 286 L 630 286 M 112 52 L 112 286" stroke="var(--line)" strokeWidth="2" />
    {[0, 1, 2, 3].map((n) => <g key={n}><path d={`M 104 ${286 - n * 64} L 630 ${286 - n * 64}`} stroke="var(--line)" strokeWidth="1" /><text x="88" y={291 - n * 64} {...label} textAnchor="end">{n}</text></g>)}
    <rect x="214" y={286 - 1.9 * 64} width="120" height={1.9 * 64} rx="5" fill="var(--teal)" opacity="0.65" />
    <rect x="410" y={286 - 2.6 * 64} width="120" height={2.6 * 64} rx="5" fill="var(--amber)" opacity="0.7" />
    <text x="274" y={276 - 1.9 * 64} fill="var(--ink)" fontSize="24" textAnchor="middle">1,9</text>
    <text x="470" y={276 - 2.6 * 64} fill="var(--ink)" fontSize="24" textAnchor="middle">2,6</text>
    <text x="274" y="316" {...heading} textAnchor="middle">procedimento simulado</text>
    <text x="470" y="316" {...heading} textAnchor="middle">vertebroplastia</text>
    <path d="M 334 76 C 370 48 410 48 446 76" {...amber} />
    <text x="390" y="42" {...heading} textAnchor="middle">diferença 0,6 (não significativa)</text>
    <text x="26" y="174" {...label} transform="rotate(-90 26 174)" textAnchor="middle">redução da dor aos 3 meses</text>
  </Frame>
);

export const figures: Record<string, FC<FigureProps>> = {
  "fratura-compressao-osteoporotica:anatomia": Anatomia,
  "fratura-compressao-osteoporotica:genant": Genant,
  "fratura-compressao-osteoporotica:classificacao-of": ClassificacaoOf,
  "fratura-compressao-osteoporotica:cifose-sagital": CifoseSagital,
  "fratura-compressao-osteoporotica:rm-datacao": RmDatacao,
  "fratura-compressao-osteoporotica:vertebroplastia": Vertebroplastia,
  "fratura-compressao-osteoporotica:cifoplastia": Cifoplastia,
  "fratura-compressao-osteoporotica:evidencia-sham": EvidenciaSham,
};
