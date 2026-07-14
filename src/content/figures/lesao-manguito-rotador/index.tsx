import type { FC, ReactNode } from "react";
import type { FigureProps } from "../../../types/topic";

const label = { fill: "var(--muted)", fontFamily: "var(--font-body, sans-serif)", fontSize: 11 };
const body = { fill: "var(--ink)", fontFamily: "var(--font-body, sans-serif)", fontSize: 12 };
const mono = { fill: "var(--ink)", fontFamily: "var(--font-mono, monospace)", fontSize: 11 };
const bone = { fill: "var(--surface)", stroke: "var(--ink-soft)", strokeWidth: 2, strokeLinejoin: "round" as const };
const tendon = { fill: "none", stroke: "var(--teal)", strokeWidth: 12, strokeLinecap: "round" as const, opacity: 0.55 };

function Panel({ x, y, w, h, children }: { x: number; y: number; w: number; h: number; children: ReactNode }) {
  return <g><rect x={x} y={y} width={w} height={h} rx="8" fill="var(--surface-2, var(--surface))" stroke="var(--line)" />{children}</g>;
}

function Shoulder({ x, y, posterior = false }: { x: number; y: number; posterior?: boolean }) {
  return <g transform={`translate(${x} ${y})`}>
    <path {...bone} d="M30 44 C62 8 136 8 165 48 C140 45 117 57 101 82 C72 78 48 65 30 44 Z" />
    <path {...bone} d="M160 50 C197 28 230 55 224 94 C220 124 194 139 168 125 C144 112 141 72 160 50 Z" />
    <path {...bone} d="M178 124 L198 250 L151 250 L164 124 Z" />
    <path d="M104 42 C130 31 153 37 168 56" {...tendon} stroke={posterior ? "var(--amber)" : "var(--teal)"} />
    <path d="M112 78 C134 78 151 84 164 96" {...tendon} stroke={posterior ? "var(--teal)" : "var(--cortical)"} />
    <path d="M174 60 C153 68 145 88 153 109" {...tendon} stroke={posterior ? "var(--cortical)" : "var(--amber)"} />
  </g>;
}

export const Anatomy: FC<FigureProps> = ({ className, title }) => (
  <svg viewBox="0 0 580 335" role="img" className={className} xmlns="http://www.w3.org/2000/svg">
    <title>{title ?? "Anatomia dos tendões do manguito rotador e da longa porção do bíceps"}</title>
    <text x="290" y="24" {...mono} textAnchor="middle">manguito rotador · vistas anterior e posterior</text>
    <Panel x={18} y={42} w={264} h={250}>
      <Shoulder x={25} y={46} />
      <text x="34" y="70" {...mono} fill="var(--teal)">ANTERIOR</text>
      <text x="47" y="112" {...label}>supraespinal</text><path d="M101 108 L142 87" stroke="var(--line-strong)" />
      <text x="42" y="174" {...label}>subescapular</text><path d="M106 169 L167 145" stroke="var(--line-strong)" />
      <path d="M218 108 C214 145 216 195 222 246" fill="none" stroke="var(--cortical)" strokeWidth="4" />
      <text x="164" y="273" {...label}>longa porção do bíceps</text>
    </Panel>
    <Panel x={298} y={42} w={264} h={250}>
      <Shoulder x={305} y={46} posterior />
      <text x="314" y="70" {...mono} fill="var(--amber)">POSTERIOR</text>
      <text x="322" y="110" {...label}>supraespinal</text><path d="M382 106 L426 87" stroke="var(--line-strong)" />
      <text x="320" y="168" {...label}>infraespinal</text><path d="M379 164 L444 144" stroke="var(--line-strong)" />
      <text x="348" y="218" {...label}>redondo menor</text><path d="M414 214 L457 176" stroke="var(--line-strong)" />
    </Panel>
    <text x="290" y="320" {...body} textAnchor="middle">Cada tendão deve ser testado e descrito separadamente.</text>
  </svg>
);

export const ForceCouples: FC<FigureProps> = ({ className, title }) => (
  <svg viewBox="0 0 560 325" role="img" className={className} xmlns="http://www.w3.org/2000/svg">
    <title>{title ?? "Pares de força do manguito rotador nos planos coronal e transversal"}</title>
    <defs><marker id="cuff-force-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="var(--teal)" /></marker></defs>
    <text x="280" y="24" {...mono} textAnchor="middle">centralização dinâmica da cabeça umeral</text>
    <Panel x={18} y={42} w={252} h={238}>
      <text x="34" y="68" {...mono} fill="var(--teal)">PLANO CORONAL</text>
      <path {...bone} d="M72 104 C111 76 176 82 199 122 C217 154 194 198 154 202 C113 206 82 174 91 138 Z" />
      <path d="M155 198 L165 262 L125 262 L139 199" {...bone} />
      <path d="M130 112 C105 76 91 67 72 62" fill="none" stroke="var(--cortical)" strokeWidth="5" markerEnd="url(#cuff-force-arrow)" />
      <text x="40" y="92" {...label}>deltoide ↑</text>
      <path d="M166 119 C190 101 214 96 237 103" fill="none" stroke="var(--teal)" strokeWidth="5" markerEnd="url(#cuff-force-arrow)" />
      <path d="M155 130 L151 184" fill="none" stroke="var(--teal)" strokeWidth="5" markerEnd="url(#cuff-force-arrow)" />
      <text x="178" y="229" {...label}>manguito comprime e deprime</text>
    </Panel>
    <Panel x={288} y={42} w={254} h={238}>
      <text x="304" y="68" {...mono} fill="var(--teal)">PLANO TRANSVERSAL</text>
      <ellipse cx="416" cy="157" rx="58" ry="62" {...bone} />
      <path d="M337 157 L373 157" stroke="var(--cortical)" strokeWidth="8" markerEnd="url(#cuff-force-arrow)" />
      <path d="M495 157 L459 157" stroke="var(--amber)" strokeWidth="8" />
      <circle cx="416" cy="157" r="13" fill="var(--teal-tint, var(--surface))" stroke="var(--teal)" strokeWidth="2" />
      <text x="304" y="118" {...label}>subescapular</text>
      <text x="460" y="118" {...label}>infraespinal</text>
      <text x="416" y="239" {...body} textAnchor="middle">forças opostas, centro estável</text>
    </Panel>
    <text x="280" y="312" {...body} textAnchor="middle">Ruptura maciça rompe o equilíbrio e permite migração superior.</text>
  </svg>
);

export const TearPatterns: FC<FigureProps> = ({ className, title, variant }) => {
  const selected = (variant ?? "").toLowerCase();
  const items = [
    ["parcial-baixa","parcial <25%",0.2],["parcial-media","parcial 25–50%",0.45],["parcial-alta","parcial >50%",0.7],
    ["pequena","completa <1 cm",0.35],["media","completa 1–3 cm",0.58],["macica","grande / maciça",0.9],
  ] as const;
  return <svg viewBox="0 0 570 335" role="img" className={className} xmlns="http://www.w3.org/2000/svg">
    <title>{title ?? "Padrões e extensão das rupturas do manguito rotador"}</title>
    <text x="285" y="24" {...mono} textAnchor="middle">profundidade · tamanho · retração · músculo</text>
    {items.map(([key,name,severity], i) => {
      const x=18+(i%3)*183, y=42+Math.floor(i/3)*135;
      const active=!selected||selected===key;
      return <g key={key} opacity={active?1:0.25}>
        <rect x={x} y={y} width="166" height="118" rx="8" fill="var(--surface-2, var(--surface))" stroke={selected===key?"var(--teal)":"var(--line)"} strokeWidth={selected===key?2:1}/>
        <path d={`M${x+22} ${y+77} C${x+54} ${y+36} ${x+115} ${y+34} ${x+144} ${y+74}`} fill="none" stroke="var(--teal)" strokeWidth="16" opacity="0.32" />
        <path d={`M${x+84-severity*42} ${y+56} L${x+84+severity*42} ${y+56}`} stroke="var(--cortical)" strokeWidth={5+severity*7} strokeLinecap="round" />
        <path d={`M${x+84-severity*35} ${y+50} L${x+84} ${y+78} L${x+84+severity*35} ${y+50}`} fill="none" stroke="var(--surface)" strokeWidth="3" />
        <text x={x+83} y={y+105} {...mono} textAnchor="middle">{name}</text>
      </g>;
    })}
    <text x="285" y="321" {...body} textAnchor="middle">Configuração em U ou L exige convergência de margens para reduzir tensão.</text>
  </svg>;
};

export const Imaging: FC<FigureProps> = ({ className, title }) => (
  <svg viewBox="0 0 560 325" role="img" className={className} xmlns="http://www.w3.org/2000/svg">
    <title>{title ?? "Leitura dirigida da ressonância na lesão do manguito rotador"}</title>
    <text x="280" y="24" {...mono} textAnchor="middle">RM · tendão, músculo e articulação</text>
    <Panel x={18} y={42} w={310} h={242}>
      <rect x="34" y="62" width="278" height="170" rx="6" fill="var(--surface)" stroke="var(--line-strong)" />
      <circle cx="196" cy="150" r="58" {...bone} />
      <path d="M63 99 C105 60 173 61 213 96" fill="none" stroke="var(--ink-soft)" strokeWidth="18" opacity="0.7" />
      <path d="M98 96 C128 74 165 78 189 104" fill="none" stroke="var(--teal)" strokeWidth="9" strokeDasharray="18 12" />
      <path d="M146 88 l-12 -8 M156 95 l11 8" stroke="var(--cortical)" strokeWidth="3" />
      <path d="M94 198 C127 180 164 179 194 190" fill="none" stroke="var(--amber)" strokeWidth="5" />
      <text x="44" y="258" {...body}>ruptura · retração · bíceps · cartilagem</text>
    </Panel>
    <Panel x={344} y={42} w={198} h={242}>
      <text x="360" y="68" {...mono} fill="var(--teal)">REPARABILIDADE</text>
      {[
        ["retração", "até glenoide?"],
        ["atrofia", "volume muscular"],
        ["gordura", "qualidade biológica"],
        ["migração", "intervalo acromioumeral"],
        ["artrose", "artropatia do manguito"],
      ].map(([a,b],i)=><g key={a}><circle cx="366" cy={98+i*34} r="5" fill={i<3?"var(--teal)":"var(--amber)"}/><text x="380" y={101+i*34} {...body}>{a}</text><text x="462" y={101+i*34} {...label}>{b}</text></g>)}
      <text x="360" y="270" {...label}>imagem deve responder à decisão</text>
    </Panel>
    <text x="280" y="313" {...body} textAnchor="middle">Tamanho do defeito não substitui avaliação da qualidade muscular.</text>
  </svg>
);

export const Repair: FC<FigureProps> = ({ className, title, activeStep }) => {
  const step=Math.min(6,Math.max(1,activeStep??5));
  const names=["inventário","mobilizar","inserção","suturas","fixar","testar"];
  return <svg viewBox="0 0 570 330" role="img" className={className} xmlns="http://www.w3.org/2000/svg">
    <title>{title ?? `Reparo do manguito rotador, etapa ${step}`}</title>
    <text x="285" y="24" {...mono} textAnchor="middle">reparo sem tensão excessiva · etapa {step}</text>
    <line x1="64" y1="65" x2="506" y2="65" stroke="var(--line-strong)" />
    {names.map((name,i)=>{const x=64+i*88.4,active=i+1===step;return <g key={name}><circle cx={x} cy="65" r={active?13:10} fill={active?"var(--teal)":"var(--surface)"} stroke="var(--teal)" strokeWidth="2"/><text x={x} y="69" {...mono} textAnchor="middle" fill={active?"var(--surface)":"var(--teal)"}>{i+1}</text><text x={x} y="91" {...label} textAnchor="middle">{name}</text></g>})}
    <path {...bone} d="M104 143 C144 105 219 110 248 154 C268 185 247 230 207 236 C162 243 126 217 130 177 Z" />
    <path d="M151 128 C184 108 230 119 252 151" fill="none" stroke="var(--teal)" strokeWidth="13" opacity="0.4" />
    <path d="M187 130 L222 154" stroke="var(--cortical)" strokeWidth="4" />
    <circle cx="232" cy="167" r="7" fill="var(--amber)" />
    <circle cx="247" cy="183" r="7" fill="var(--amber)" />
    <path d="M232 167 Q190 136 159 149 M247 183 Q199 145 168 163" fill="none" stroke="var(--cortical)" strokeWidth="3" />
    <Panel x={310} y={116} w={238} h={146}>
      <text x="326" y="140" {...mono} fill="var(--teal)">{String(step).padStart(2,"0")} · {names[step-1].toUpperCase()}</text>
      <text x="326" y="170" {...body}>{["mapear bíceps e subescapular","liberar até reduzir sem força","superfície sangrante, osso preservado","controlar cabo e margens","contato estável, sem estrangular","rotação livre e reparo estável"][step-1]}</text>
      <line x1="326" y1="194" x2="532" y2="194" stroke="var(--line)" />
      <text x="326" y="218" {...label}>a construção deve respeitar</text>
      <text x="326" y="239" {...body}>tensão · tecido · osso · biologia</text>
    </Panel>
    <text x="285" y="317" {...body} textAnchor="middle">Cobertura parcial funcional é preferível a redução completa sob tensão destrutiva.</text>
  </svg>;
};

export const Rehabilitation: FC<FigureProps> = ({ className, title }) => (
  <svg viewBox="0 0 560 310" role="img" className={className} xmlns="http://www.w3.org/2000/svg">
    <title>{title ?? "Fases da reabilitação após reparo do manguito rotador"}</title>
    <text x="280" y="24" {...mono} textAnchor="middle">tendão cicatriza antes de tolerar força máxima</text>
    <line x1="54" y1="94" x2="506" y2="94" stroke="var(--line-strong)" strokeWidth="3" />
    {[
      [58,"0–6 sem","PROTEGER","passivo seguro"],
      [170,"6–12 sem","MOVER","ativo sem compensar"],
      [282,"3–5 m","FORTALECER","manguito + escápula"],
      [394,"5–9 m","RETORNAR","gesto e resistência"],
    ].map(([x,time,name,note],i)=><g key={String(name)}><circle cx={Number(x)+34} cy="94" r="14" fill={i===3?"var(--teal)":"var(--surface)"} stroke="var(--teal)" strokeWidth="3"/><text x={Number(x)+34} y="67" {...mono} textAnchor="middle">{time}</text><rect x={Number(x)} y="126" width="100" height="86" rx="7" fill="var(--surface-2, var(--surface))" stroke="var(--line)"/><text x={Number(x)+50} y="153" {...mono} textAnchor="middle" fill="var(--teal)">{name}</text><text x={Number(x)+50} y="180" {...label} textAnchor="middle">{note}</text><text x={Number(x)+50} y="199" {...label} textAnchor="middle">{i===0?"sem carga":i===1?"ritmo escapular":i===2?"sem dor reativa":"teste específico"}</text></g>)}
    <Panel x={78} y={230} w={404} h={49}>
      <text x="94" y="251" {...body}>ruptura maior / tecido pior</text>
      <path d="M260 247 L444 247" stroke="var(--amber)" strokeWidth="3" />
      <text x="94" y="269" {...label}>progressão mais conservadora</text>
    </Panel>
    <text x="280" y="301" {...label} textAnchor="middle">Dor ou derrame não guiam o ombro; perda de força e compensação também importam.</text>
  </svg>
);

export const figures: Record<string, FC<FigureProps>> = {
  "lesao-manguito-rotador:anatomia": Anatomy,
  "lesao-manguito-rotador:pares-forca": ForceCouples,
  "lesao-manguito-rotador:padroes": TearPatterns,
  "lesao-manguito-rotador:imagem": Imaging,
  "lesao-manguito-rotador:reparo": Repair,
  "lesao-manguito-rotador:reabilitacao": Rehabilitation,
};
