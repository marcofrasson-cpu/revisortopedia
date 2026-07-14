import type { FC, ReactNode } from "react";
import type { FigureProps } from "../../../types/topic";

const label = { fill: "var(--muted)", fontFamily: "var(--font-body, sans-serif)", fontSize: 11 };
const body = { fill: "var(--ink)", fontFamily: "var(--font-body, sans-serif)", fontSize: 12 };
const mono = { fill: "var(--ink)", fontFamily: "var(--font-mono, monospace)", fontSize: 11 };
const bone = { fill: "var(--surface)", stroke: "var(--ink-soft)", strokeWidth: 2, strokeLinejoin: "round" as const };

function Panel({ x, y, w, h, children }: { x: number; y: number; w: number; h: number; children: ReactNode }) {
  return <g><rect x={x} y={y} width={w} height={h} rx="8" fill="var(--surface-2, var(--surface))" stroke="var(--line)" />{children}</g>;
}

function LateralAnkle({ x=0, y=0 }: { x?: number; y?: number }) {
  return <g transform={`translate(${x} ${y})`}>
    <path {...bone} d="M80 18 L120 18 L126 145 C119 164 103 172 84 160 Z" />
    <path {...bone} d="M32 28 L58 24 L70 155 C59 170 44 166 36 151 Z" />
    <path {...bone} d="M67 160 C88 140 132 143 149 166 C136 186 93 194 62 180 Z" />
    <path {...bone} d="M54 184 C95 176 142 184 174 207 L161 235 L53 230 Z" />
    <path d="M57 145 L110 166" stroke="var(--teal)" strokeWidth="7" strokeLinecap="round" />
    <path d="M56 151 L73 214" stroke="var(--amber)" strokeWidth="7" strokeLinecap="round" />
    <path d="M52 132 L92 149" stroke="var(--cortical)" strokeWidth="5" strokeLinecap="round" />
    <path d="M43 78 C27 118 31 178 57 222" fill="none" stroke="var(--line-strong)" strokeWidth="5" />
  </g>;
}

export const Anatomy: FC<FigureProps> = ({ className, title }) => (
  <svg viewBox="0 0 560 325" role="img" className={className} xmlns="http://www.w3.org/2000/svg">
    <title>{title ?? "Anatomia dos ligamentos laterais do tornozelo e tendões fibulares"}</title>
    <text x="280" y="24" {...mono} textAnchor="middle">complexo lateral · estabilizadores estáticos e dinâmicos</text>
    <LateralAnkle x={94} y={38}/>
    <path d="M151 184 L322 92" stroke="var(--line-strong)"/><circle cx="151" cy="184" r="5" fill="var(--teal)"/>
    <text x="330" y="89" {...mono} fill="var(--teal)">LTFA</text><text x="330" y="107" {...label}>flexão plantar · gaveta anterior</text>
    <path d="M151 196 L322 154" stroke="var(--line-strong)"/><circle cx="151" cy="196" r="5" fill="var(--amber)"/>
    <text x="330" y="151" {...mono} fill="var(--amber)">LCF</text><text x="330" y="169" {...label}>neutro · inclinação talar</text>
    <path d="M151 170 L322 215" stroke="var(--line-strong)"/><circle cx="151" cy="170" r="5" fill="var(--cortical)"/>
    <text x="330" y="212" {...mono} fill="var(--cortical)">LTFP</text><text x="330" y="230" {...label}>robusto · trauma de maior energia</text>
    <path d="M137 120 L322 269" stroke="var(--line-strong)"/>
    <text x="330" y="266" {...body}>tendões fibulares</text><text x="330" y="284" {...label}>estabilização dinâmica da eversão</text>
    <text x="280" y="314" {...label} textAnchor="middle">LTFA = ligamento talofibular anterior · LCF = ligamento calcaneofibular</text>
  </svg>
);

export const KineticChain: FC<FigureProps> = ({ className, title, variant }) => {
  const selected=(variant??"combinada").toLowerCase();
  return <svg viewBox="0 0 560 315" role="img" className={className} xmlns="http://www.w3.org/2000/svg">
    <title>{title ?? "Ciclo mecânico e funcional da instabilidade lateral crônica"}</title>
    <defs><marker id="ankle-chain-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="var(--line-strong)"/></marker></defs>
    <text x="280" y="24" {...mono} textAnchor="middle">entorse → déficits → falseio → nova entorse</text>
    {[
      [206,84,"ENTORSE","inversão + flexão plantar","var(--cortical)"],
      [386,154,"MECÂNICA","LTFA/LCF frouxos","var(--amber)"],
      [315,252,"FALSEIO","terreno / corte","var(--teal)"],
      [93,252,"FUNCIONAL","propriocepção + força","var(--teal)"],
      [22,154,"CONTROLE","quadril · pé · reação","var(--amber)"],
    ].map(([x,y,name,note,color])=>{
      const dim=(selected==="mecanica"&&name==="FUNCIONAL")||(selected==="funcional"&&name==="MECÂNICA");
      return <g key={String(name)} opacity={dim?0.25:1}><rect x={Number(x)} y={Number(y)} width="152" height="62" rx="8" fill="var(--surface-2, var(--surface))" stroke={String(color)} strokeWidth="2"/><text x={Number(x)+76} y={Number(y)+25} {...mono} textAnchor="middle" fill={String(color)}>{name}</text><text x={Number(x)+76} y={Number(y)+46} {...label} textAnchor="middle">{note}</text></g>;
    })}
    <path d="M282 146 C345 136 387 136 408 154 M429 216 C425 248 402 272 367 278 M315 283 C250 299 184 298 145 280 M94 252 C49 232 40 205 55 184 M113 154 C132 126 165 112 206 113" fill="none" stroke="var(--line-strong)" strokeWidth="2" markerEnd="url(#ankle-chain-arrow)"/>
    <text x="280" y="307" {...body} textAnchor="middle">Cirurgia corrige frouxidão; reabilitação corrige o ciclo funcional.</text>
  </svg>
};

export const Exam: FC<FigureProps> = ({ className, title, variant }) => {
  const mechanical=(variant??"mecanica")!=="funcional";
  return <svg viewBox="0 0 560 325" role="img" className={className} xmlns="http://www.w3.org/2000/svg">
    <title>{title ?? "Testes de gaveta anterior e inclinação talar"}</title>
    <defs><marker id="ankle-exam-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="var(--cortical)"/></marker></defs>
    <text x="280" y="24" {...mono} textAnchor="middle">exame comparativo · joelho flexionado · paciente relaxado</text>
    <Panel x={18} y={42} w={252} h={238}>
      <text x="34" y="68" {...mono} fill="var(--teal)">GAVETA ANTERIOR · LTFA</text>
      <path d="M82 83 L116 82 L123 184" stroke="var(--ink-soft)" strokeWidth="16" strokeLinecap="round"/>
      <path d="M91 187 C125 168 174 176 202 207 L186 237 L90 227 Z" {...bone}/>
      <path d="M74 198 C103 205 124 206 150 198" fill="none" stroke="var(--cortical)" strokeWidth="4" markerEnd="url(#ankle-exam-arrow)"/>
      <text x="34" y="258" {...body}>tálus anterioriza sob a pinça</text>
    </Panel>
    <Panel x={288} y={42} w={254} h={238}>
      <text x="304" y="68" {...mono} fill="var(--amber)">INCLINAÇÃO TALAR · LCF</text>
      <path d="M378 83 L412 82 L419 184" stroke="var(--ink-soft)" strokeWidth="16" strokeLinecap="round"/>
      <g transform={mechanical?"rotate(-14 420 196)":undefined}><path d="M378 187 C412 168 460 176 495 204 L478 237 L380 228 Z" {...bone}/></g>
      <path d="M484 165 C511 177 515 207 499 226" fill="none" stroke="var(--cortical)" strokeWidth="3" markerEnd="url(#ankle-exam-arrow)"/>
      <text x="304" y="258" {...body}>inversão excessiva do tálus</text>
    </Panel>
    <text x="280" y="313" {...body} textAnchor="middle">Comparar lado oposto e distinguir dor, apreensão e frouxidão real.</text>
  </svg>
};

export const Imaging: FC<FigureProps> = ({ className, title }) => (
  <svg viewBox="0 0 570 325" role="img" className={className} xmlns="http://www.w3.org/2000/svg">
    <title>{title ?? "Imagem na instabilidade lateral crônica do tornozelo"}</title>
    <text x="285" y="24" {...mono} textAnchor="middle">alinhamento · frouxidão · lesões associadas</text>
    {[
      [18,"CARGA","cavo-varo / artrose"],[201,"ESTRESSE","gaveta / inclinação"],[384,"RM","osteocondral / fibulares"],
    ].map(([x,name,note],i)=><Panel key={String(name)} x={Number(x)} y={42} w={168} h={238}>
      <text x={Number(x)+14} y="68" {...mono} fill={i===2?"var(--cortical)":"var(--teal)"}>{name}</text>
      <rect x={Number(x)+18} y="84" width="132" height="128" rx="5" fill="var(--surface)" stroke="var(--line-strong)"/>
      <path d={`M${Number(x)+58} 94 L${Number(x)+78} 94 L${Number(x)+84} 169`} stroke="var(--ink-soft)" strokeWidth="10"/>
      <path d={`M${Number(x)+83} 170 C${Number(x)+102} 156 ${Number(x)+126} 160 ${Number(x)+138} 177`} fill="none" stroke="var(--ink-soft)" strokeWidth="13"/>
      {i===0&&<path d={`M${Number(x)+65} 196 L${Number(x)+129} 181`} stroke="var(--amber)" strokeWidth="3"/>}
      {i===1&&<path d={`M${Number(x)+80} 168 L${Number(x)+116} 158`} stroke="var(--cortical)" strokeWidth="4"/>}
      {i===2&&<><circle cx={Number(x)+112} cy="168" r="12" fill="var(--cortical)" opacity="0.35" stroke="var(--cortical)"/><path d={`M${Number(x)+48} 122 C${Number(x)+38} 154 ${Number(x)+43} 186 ${Number(x)+61} 204`} fill="none" stroke="var(--teal)" strokeWidth="4"/></>}
      <text x={Number(x)+84} y="238" {...body} textAnchor="middle">{note}</text>
      <text x={Number(x)+84} y="260" {...label} textAnchor="middle">{i===2?"mapa, não diagnóstico isolado":"comparar e correlacionar"}</text>
    </Panel>)}
    <text x="285" y="313" {...body} textAnchor="middle">RM normal não exclui instabilidade funcional; RM alterada não indica cirurgia sozinha.</text>
  </svg>
);

export const Brostrom: FC<FigureProps> = ({ className, title, activeStep }) => {
  const step=Math.min(5,Math.max(1,activeStep??4));
  const names=["expor","preparar","reinserir","tensionar","reforçar"];
  return <svg viewBox="0 0 570 330" role="img" className={className} xmlns="http://www.w3.org/2000/svg">
    <title>{title ?? `Broström-Gould, etapa ${step}`}</title>
    <text x="285" y="24" {...mono} textAnchor="middle">reparo anatômico · Broström-Gould</text>
    <LateralAnkle x={72} y={58}/>
    <circle cx="129" cy="203" r="7" fill="var(--teal)"/><circle cx="131" cy="220" r="7" fill="var(--amber)"/>
    <path d="M129 203 Q188 206 227 225 M131 220 Q160 247 148 285" fill="none" stroke="var(--cortical)" strokeWidth="3"/>
    <path d="M118 190 C151 180 181 190 204 210" fill="none" stroke="var(--teal)" strokeWidth="8" opacity={step>=5?0.5:0.15}/>
    <Panel x={314} y={48} w={232} h={238}>
      {names.map((name,i)=><g key={name} opacity={i+1===step?1:0.42}><circle cx="340" cy={80+i*39} r="12" fill={i+1===step?"var(--teal)":"var(--surface)"} stroke="var(--teal)"/><text x="340" y={84+i*39} {...mono} textAnchor="middle" fill={i+1===step?"var(--surface)":"var(--teal)"}>{i+1}</text><text x="366" y={84+i*39} {...body}>{name}</text></g>)}
      <line x1="330" y1="252" x2="530" y2="252" stroke="var(--line)"/>
      <text x="330" y="273" {...label}>tálus reduzido · retropé neutro</text>
    </Panel>
    <text x="285" y="316" {...body} textAnchor="middle">Corrigir tecido e alinhamento; não transformar o tornozelo em articulação rígida.</text>
  </svg>
};

export const ReturnToSport: FC<FigureProps> = ({ className, title }) => (
  <svg viewBox="0 0 560 300" role="img" className={className} xmlns="http://www.w3.org/2000/svg">
    <title>{title ?? "Retorno ao esporte após tratamento da instabilidade lateral do tornozelo"}</title>
    <text x="280" y="24" {...mono} textAnchor="middle">estabilidade + controle + confiança</text>
    <line x1="60" y1="86" x2="500" y2="86" stroke="var(--line-strong)" strokeWidth="3"/>
    {[
      [48,"0–6 sem","PROTEGER","ferida · amplitude"],
      [166,"6–12 sem","CONTROLAR","fibulares · equilíbrio"],
      [284,"3–5 m","IMPACTO","corrida · salto"],
      [402,"4–6 m","ESPORTE","corte · confiança"],
    ].map(([x,time,name,note],i)=><g key={String(name)}><circle cx={Number(x)+34} cy="86" r="13" fill={i===3?"var(--teal)":"var(--surface)"} stroke="var(--teal)" strokeWidth="3"/><text x={Number(x)+34} y="60" {...mono} textAnchor="middle">{time}</text><rect x={Number(x)} y="116" width="104" height="88" rx="7" fill="var(--surface-2, var(--surface))" stroke="var(--line)"/><text x={Number(x)+52} y="143" {...mono} textAnchor="middle" fill="var(--teal)">{name}</text><text x={Number(x)+52} y="171" {...label} textAnchor="middle">{note}</text></g>)}
    <Panel x={62} y={220} w={436} h={52}>
      {[[80,"sem falseio"],[184,"força"],[266,"equilíbrio"],[366,"saltos"],[442,"confiança"]].map(([x,t])=><g key={String(t)}><circle cx={Number(x)} cy="242" r="5" fill="var(--teal)"/><text x={Number(x)+10} y="246" {...label}>{t}</text></g>)}
      <text x="78" y="264" {...body}>órtese durante a exposição inicial de maior risco</text>
    </Panel>
    <text x="280" y="293" {...label} textAnchor="middle">Manter prevenção proprioceptiva mesmo após retorno completo.</text>
  </svg>
);

export const figures: Record<string, FC<FigureProps>> = {
  "instabilidade-lateral-tornozelo:anatomia": Anatomy,
  "instabilidade-lateral-tornozelo:cadeia-cinematica": KineticChain,
  "instabilidade-lateral-tornozelo:exame": Exam,
  "instabilidade-lateral-tornozelo:imagem": Imaging,
  "instabilidade-lateral-tornozelo:brostrom": Brostrom,
  "instabilidade-lateral-tornozelo:retorno-esporte": ReturnToSport,
};
