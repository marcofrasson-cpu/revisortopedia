import type { FC, ReactNode } from "react";
import type { FigureProps } from "../../../types/topic";

const label = { fill: "var(--muted)", fontFamily: "var(--font-body, sans-serif)", fontSize: 11 };
const body = { fill: "var(--ink)", fontFamily: "var(--font-body, sans-serif)", fontSize: 12 };
const mono = { fill: "var(--ink)", fontFamily: "var(--font-mono, monospace)", fontSize: 11 };
const bone = { fill: "var(--surface)", stroke: "var(--ink-soft)", strokeWidth: 2 };

function Panel({ x, y, w, h, children }: { x: number; y: number; w: number; h: number; children: ReactNode }) {
  return <g><rect x={x} y={y} width={w} height={h} rx="8" fill="var(--surface-2, var(--surface))" stroke="var(--line)" />{children}</g>;
}

function Glenoid({ cx, cy, damaged = false }: { cx: number; cy: number; damaged?: boolean }) {
  return <g>
    <ellipse cx={cx} cy={cy} rx="58" ry="87" {...bone} />
    <ellipse cx={cx} cy={cy} rx="48" ry="76" fill="var(--surface-2, var(--surface))" stroke="var(--line-strong)" />
    <path d={`M${cx-47} ${cy+14} C${cx-69} ${cy+34} ${cx-63} ${cy+70} ${cx-32} ${cy+82}`} fill="none" stroke={damaged?"var(--cortical)":"var(--teal)"} strokeWidth="8" strokeDasharray={damaged?"13 8":undefined} strokeLinecap="round" />
  </g>;
}

export const Anatomy: FC<FigureProps> = ({ className, title }) => (
  <svg viewBox="0 0 560 330" role="img" className={className} xmlns="http://www.w3.org/2000/svg">
    <title>{title ?? "Anatomia da lesão de Bankart e do complexo glenoumeral inferior"}</title>
    <defs><marker id="bankart-anat-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="var(--cortical)" /></marker></defs>
    <text x="280" y="24" {...mono} textAnchor="middle">instabilidade anterior · posição de abdução e rotação externa</text>
    <Glenoid cx={180} cy={166} damaged />
    <circle cx="340" cy="145" r="83" {...bone} />
    <path d="M277 193 C249 221 221 234 194 230" fill="none" stroke="var(--cortical)" strokeWidth="5" markerEnd="url(#bankart-anat-arrow)" />
    <path d="M149 178 C178 209 220 225 272 211" fill="none" stroke="var(--teal)" strokeWidth="6" opacity="0.5" />
    <path d="M135 196 l-12 -7 M143 207 l12 8" stroke="var(--cortical)" strokeWidth="3" />
    <text x="42" y="246" {...body}>Bankart</text><text x="42" y="264" {...label}>labrum + cápsula destacados</text>
    <path d="M125 227 L89 242" stroke="var(--line-strong)" />
    <path d="M370 80 C397 101 406 139 396 167" fill="none" stroke="var(--amber)" strokeWidth="5" />
    <text x="402" y="92" {...label}>Hill-Sachs</text>
    <text x="287" y="280" {...body}>cabeça traduz anterior e impacta posterolateralmente</text>
    <text x="280" y="315" {...label} textAnchor="middle">o complexo glenoumeral inferior é o freio principal na posição de apreensão</text>
  </svg>
);

export const AssociatedLesions: FC<FigureProps> = ({ className, title }) => {
  const items=["BANKART","ALPSA","HAGL","GLAD","ÓSSEO","HILL-SACHS"];
  return <svg viewBox="0 0 570 330" role="img" className={className} xmlns="http://www.w3.org/2000/svg">
    <title>{title ?? "Lesões associadas à instabilidade glenoumeral anterior"}</title>
    <text x="285" y="24" {...mono} textAnchor="middle">a instabilidade não termina no labrum</text>
    {items.map((item,i)=>{const x=18+(i%3)*183,y=42+Math.floor(i/3)*136;return <Panel key={item} x={x} y={y} w={166} h={120}>
      <text x={x+14} y={y+24} {...mono} fill={i===0?"var(--teal)":"var(--amber)"}>{item}</text>
      <ellipse cx={x+83} cy={y+73} rx="39" ry="42" {...bone}/>
      {i===0&&<path d={`M${x+49} ${y+77} C${x+42} ${y+94} ${x+57} ${y+108} ${x+72} ${y+112}`} fill="none" stroke="var(--cortical)" strokeWidth="5"/>}
      {i===1&&<path d={`M${x+62} ${y+84} C${x+78} ${y+95} ${x+92} ${y+99} ${x+102} ${y+88}`} fill="none" stroke="var(--cortical)" strokeWidth="5"/>}
      {i===2&&<path d={`M${x+96} ${y+71} L${x+128} ${y+103}`} stroke="var(--cortical)" strokeWidth="5"/>}
      {i===3&&<path d={`M${x+48} ${y+84} L${x+74} ${y+102} L${x+92} ${y+88}`} fill="none" stroke="var(--cortical)" strokeWidth="4"/>}
      {i===4&&<path d={`M${x+47} ${y+68} L${x+52} ${y+109} L${x+70} ${y+100}`} fill="var(--cortical-tint, var(--surface))" stroke="var(--cortical)" strokeWidth="3"/>}
      {i===5&&<path d={`M${x+95} ${y+39} C${x+124} ${y+54} ${x+126} ${y+81} ${x+105} ${y+91}`} fill="none" stroke="var(--cortical)" strokeWidth="8"/>}
    </Panel>})}
    <text x="285" y="320" {...body} textAnchor="middle">HAGL e perda óssea não são corrigidas por âncoras na borda glenoidal.</text>
  </svg>;
};

export const BoneLoss: FC<FigureProps> = ({ className, title }) => (
  <svg viewBox="0 0 560 325" role="img" className={className} xmlns="http://www.w3.org/2000/svg">
    <title>{title ?? "Quantificação da perda óssea glenoidal pelo círculo perfeito"}</title>
    <text x="280" y="24" {...mono} textAnchor="middle">TC 3D · glenoide en face · círculo inferior</text>
    <Panel x={18} y={42} w={250} h={238}>
      <ellipse cx="143" cy="159" rx="73" ry="103" {...bone}/>
      <circle cx="143" cy="177" r="73" fill="none" stroke="var(--teal)" strokeWidth="2" strokeDasharray="6 4"/>
      <path d="M70 140 C88 168 85 209 103 239" fill="var(--surface-2, var(--surface))" stroke="var(--cortical)" strokeWidth="3"/>
      <line x1="70" y1="177" x2="216" y2="177" stroke="var(--line-strong)"/><text x="143" y="169" {...label} textAnchor="middle">D</text>
      <line x1="70" y1="196" x2="101" y2="196" stroke="var(--cortical)" strokeWidth="3"/><text x="85" y="216" {...label} textAnchor="middle">d</text>
      <text x="34" y="263" {...body}>perda = d ÷ D × 100</text>
    </Panel>
    <Panel x={286} y={42} w={256} h={238}>
      <text x="302" y="68" {...mono} fill="var(--teal)">INTERPRETAR NO CONTEXTO</text>
      {[
        ["<13,5%","baixa / ainda bipolar"],
        ["13,5–20%","subcrítica · zona cinzenta"],
        ["20–25%+","classicamente crítica"],
      ].map(([a,b],i)=><g key={a}><rect x="304" y={92+i*52} width="78" height="30" rx="5" fill={i===0?"var(--teal-tint, var(--surface))":i===1?"var(--surface)":"var(--cortical-tint, var(--surface))"} stroke={i===2?"var(--cortical)":"var(--line-strong)"}/><text x="343" y={112+i*52} {...mono} textAnchor="middle">{a}</text><text x="394" y={112+i*52} {...label}>{b}</text></g>)}
      <line x1="302" y1="248" x2="526" y2="248" stroke="var(--line)"/>
      <text x="302" y="269" {...body}>somar Hill-Sachs + risco do atleta</text>
    </Panel>
    <text x="280" y="313" {...body} textAnchor="middle">Percentual isolado não substitui a análise da lesão bipolar.</text>
  </svg>
);

export const GlenoidTrack: FC<FigureProps> = ({ className, title, variant }) => {
  const off=(variant??"on-track").toLowerCase()==="off-track";
  return <svg viewBox="0 0 560 325" role="img" className={className} xmlns="http://www.w3.org/2000/svg">
    <title>{title ?? `Trilha glenoidal: lesão ${off?"fora":"na"} da trilha`}</title>
    <text x="280" y="24" {...mono} textAnchor="middle">trilha = 0,83 × D − perda glenoidal</text>
    <Panel x={18} y={42} w={330} h={238}>
      <circle cx="181" cy="160" r="99" {...bone}/>
      <path d="M128 75 C166 56 218 65 247 95 L247 224 C211 252 163 254 128 232 Z" fill="var(--teal)" opacity="0.16" stroke="var(--teal)" strokeWidth="2"/>
      <path d={off?"M105 115 C135 88 161 95 173 126 L173 205 C149 222 119 210 103 186 Z":"M145 111 C170 91 197 98 208 127 L208 199 C188 216 161 210 145 187 Z"} fill="var(--cortical-tint, var(--surface))" stroke="var(--cortical)" strokeWidth="3"/>
      <line x1="128" y1="65" x2="128" y2="249" stroke="var(--teal)" strokeDasharray="5 4"/>
      <text x="145" y="265" {...label}>margem medial da trilha</text>
      <text x="180" y="165" {...mono} textAnchor="middle" fill="var(--cortical)">Hill-Sachs</text>
    </Panel>
    <Panel x={366} y={42} w={176} h={238}>
      <rect x="384" y="66" width="140" height="38" rx="6" fill={off?"var(--cortical-tint, var(--surface))":"var(--teal-tint, var(--surface))"} stroke={off?"var(--cortical)":"var(--teal)"}/>
      <text x="454" y="90" {...mono} textAnchor="middle" fill={off?"var(--cortical)":"var(--teal)"}>{off?"FORA DA TRILHA":"NA TRILHA"}</text>
      <text x="384" y="135" {...label}>intervalo de Hill-Sachs</text>
      <text x="384" y="154" {...body}>{off?"> largura da trilha":"≤ largura da trilha"}</text>
      <line x1="384" y1="174" x2="524" y2="174" stroke="var(--line)"/>
      <text x="384" y="199" {...label}>implicação</text>
      <text x="384" y="220" {...body}>{off?"tratar defeito umeral":"Bankart pode bastar"}</text>
      <text x="384" y="239" {...body}>{off?"ou restaurar glenoide":"se risco global baixo"}</text>
    </Panel>
    <text x="280" y="313" {...body} textAnchor="middle">A perda glenoidal estreita a trilha e torna o mesmo Hill-Sachs mais perigoso.</text>
  </svg>;
};

export const BankartRepair: FC<FigureProps> = ({ className, title, activeStep }) => {
  const step=Math.min(4,Math.max(1,activeStep??4));
  return <svg viewBox="0 0 560 325" role="img" className={className} xmlns="http://www.w3.org/2000/svg">
    <title>{title ?? "Reparo artroscópico da lesão de Bankart"}</title>
    <text x="280" y="24" {...mono} textAnchor="middle">mobilizar · preparar · ancorar baixo · retensionar</text>
    <Glenoid cx={210} cy={161} damaged={step<4}/>
    {[0,1,2,3].map(i=>{const y=221-i*36,active=i+1<=step;return <g key={i}><circle cx="160" cy={y} r="7" fill={active?"var(--teal)":"var(--surface)"} stroke="var(--teal)" strokeWidth="2"/><path d={`M160 ${y} Q118 ${y-8} 103 ${y-30}`} fill="none" stroke={active?"var(--cortical)":"var(--line-strong)"} strokeWidth="2.5"/></g>})}
    <path d="M158 181 C126 193 119 225 143 244" fill="none" stroke={step===4?"var(--teal)":"var(--cortical)"} strokeWidth="8" strokeLinecap="round"/>
    <Panel x={326} y={48} w={214} h={232}>
      {[
        ["01","mobilizar ALPSA"],["02","preparar colo"],["03","primeira âncora baixa"],["04","avançar inferior → superior"],
      ].map(([n,text],i)=><g key={n} opacity={i+1===step?1:0.46}><circle cx="350" cy={82+i*43} r="12" fill={i+1===step?"var(--teal)":"var(--surface)"} stroke="var(--teal)"/><text x="350" y={86+i*43} {...mono} textAnchor="middle" fill={i+1===step?"var(--surface)":"var(--teal)"}>{n}</text><text x="374" y={86+i*43} {...body}>{text}</text></g>)}
      <line x1="342" y1="246" x2="524" y2="246" stroke="var(--line)"/>
      <text x="342" y="267" {...label}>capturar cápsula, não apenas labrum</text>
    </Panel>
    <text x="280" y="313" {...body} textAnchor="middle">A âncora inferior restaura a bolsa axilar e a banda anterior do IGHL.</text>
  </svg>;
};

export const BoneAlgorithm: FC<FigureProps> = ({ className, title, variant }) => {
  const selected=(variant??"").toLowerCase();
  const options=[
    ["bankart",32,"BANKART","baixa perda","Hill-Sachs na trilha"],
    ["remplissage",208,"+ REMPLISSAGE","fora da trilha","glenoide preservada"],
    ["latarjet",384,"LATARJET / ENXERTO","perda relevante","falha / alto risco"],
  ] as const;
  return <svg viewBox="0 0 570 325" role="img" className={className} xmlns="http://www.w3.org/2000/svg">
    <title>{title ?? "Escolha entre Bankart, remplissage e aumento ósseo"}</title>
    <text x="285" y="24" {...mono} textAnchor="middle">procedimento proporcional à lesão bipolar e ao risco</text>
    {options.map(([key,x,name,a,b],i)=>{const active=!selected||selected===key;return <g key={key} opacity={active?1:0.25}>
      <rect x={x} y="48" width="154" height="232" rx="8" fill="var(--surface-2, var(--surface))" stroke={selected===key?"var(--teal)":"var(--line)"} strokeWidth={selected===key?3:1}/>
      <text x={x+77} y="76" {...mono} textAnchor="middle" fill={i===2?"var(--cortical)":"var(--teal)"}>{name}</text>
      <ellipse cx={x+77} cy="145" rx="40" ry="58" {...bone}/>
      {i===0&&<path d={`M${x+42} 159 C${x+33} 180 ${x+49} 200 ${x+63} 205`} fill="none" stroke="var(--teal)" strokeWidth="7"/>}
      {i===1&&<><path d={`M${x+42} 159 C${x+33} 180 ${x+49} 200 ${x+63} 205`} fill="none" stroke="var(--teal)" strokeWidth="7"/><path d={`M${x+95} 111 C${x+125} 126 ${x+125} 162 ${x+103} 178`} fill="none" stroke="var(--cortical)" strokeWidth="8"/></>}
      {i===2&&<path d={`M${x+34} 150 L${x+54} 126 L${x+60} 207 L${x+40} 196 Z`} fill="var(--amber)" stroke="var(--cortical)" strokeWidth="2"/>}
      <line x1={x+16} y1="222" x2={x+138} y2="222" stroke="var(--line)"/>
      <text x={x+77} y="246" {...body} textAnchor="middle">{a}</text><text x={x+77} y="265" {...label} textAnchor="middle">{b}</text>
    </g>})}
    <text x="285" y="313" {...body} textAnchor="middle">Na zona cinzenta, esporte, hiperlaxidão e revisão pesam tanto quanto o percentual.</text>
  </svg>;
};

export const Rehabilitation: FC<FigureProps> = ({ className, title }) => (
  <svg viewBox="0 0 560 300" role="img" className={className} xmlns="http://www.w3.org/2000/svg">
    <title>{title ?? "Reabilitação após estabilização anterior do ombro"}</title>
    <text x="280" y="24" {...mono} textAnchor="middle">proteção capsulolabral → controle → contato</text>
    <line x1="62" y1="88" x2="498" y2="88" stroke="var(--line-strong)" strokeWidth="3"/>
    {[
      [48,"0–4 sem","PROTEGER","sem abdução + RE forçada"],
      [170,"4–12 sem","MOVER","amplitude progressiva"],
      [292,"3–5 m","FORTALECER","manguito + escápula"],
      [414,"5–7 m","CONTATO","teste + confiança"],
    ].map(([x,time,name,note],i)=><g key={String(name)}><circle cx={Number(x)+30} cy="88" r="13" fill={i===3?"var(--teal)":"var(--surface)"} stroke="var(--teal)" strokeWidth="3"/><text x={Number(x)+30} y="61" {...mono} textAnchor="middle">{time}</text><rect x={Number(x)} y="119" width="100" height="92" rx="7" fill="var(--surface-2, var(--surface))" stroke="var(--line)"/><text x={Number(x)+50} y="147" {...mono} textAnchor="middle" fill="var(--teal)">{name}</text><text x={Number(x)+50} y="174" {...label} textAnchor="middle">{note}</text></g>)}
    <Panel x={84} y={226} w={392} h={48}><text x="100" y="247" {...body}>apreensão ausente · força simétrica · estabilidade · consolidação óssea</text><text x="100" y="265" {...label}>nenhum prazo isolado autoriza retorno ao contato</text></Panel>
    <text x="280" y="293" {...label} textAnchor="middle">RE = rotação externa</text>
  </svg>
);

export const figures: Record<string, FC<FigureProps>> = {
  "lesao-labral-bankart:anatomia": Anatomy,
  "lesao-labral-bankart:lesoes-associadas": AssociatedLesions,
  "lesao-labral-bankart:perda-ossea": BoneLoss,
  "lesao-labral-bankart:trilha-glenoidal": GlenoidTrack,
  "lesao-labral-bankart:reparo-bankart": BankartRepair,
  "lesao-labral-bankart:algoritmo-osseo": BoneAlgorithm,
  "lesao-labral-bankart:reabilitacao": Rehabilitation,
};
