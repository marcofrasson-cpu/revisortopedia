import type { FC, ReactNode } from "react";
import type { FigureProps } from "../../../types/topic";

const mono = { fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: 0, fill: "var(--ink-muted)" } as const;
const body = { fontFamily: "var(--font-sans)", fontSize: 14, letterSpacing: 0, fill: "var(--ink)" } as const;
const small = { fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: 0, fill: "var(--ink-muted)" } as const;

function Frame({ children }: { children: ReactNode }) {
  return <><rect x="16" y="42" width="688" height="290" rx="8" fill="var(--surface-2, var(--surface))" stroke="var(--line)" />{children}</>;
}

function Header({ children }: { children: ReactNode }) {
  return <text x="360" y="25" textAnchor="middle" {...mono}>{children}</text>;
}

function Card({ x, y, w, h, active, children }: { x: number; y: number; w: number; h: number; active?: boolean; children: ReactNode }) {
  return <g><rect x={x} y={y} width={w} height={h} rx="7" fill={active ? "var(--teal-soft)" : "var(--surface)"} stroke={active ? "var(--teal)" : "var(--line)"} strokeWidth={active ? 2 : 1} />{children}</g>;
}

export const MyelopathyRoutes: FC<FigureProps> = ({ className, title }) => (
  <svg viewBox="0 0 720 350" role="img" className={className}>
    <title>{title ?? "Escolha do acesso na mielopatia cervical"}</title><Header>COMPRESSÃO + ALINHAMENTO + NÚMERO DE NÍVEIS</Header><Frame>
      <path d="M167 87 C146 120 147 241 173 282" fill="none" stroke="var(--ink-soft)" strokeWidth="13" strokeLinecap="round" />
      {[103,137,171,205,239,273].map((y) => <line key={y} x1="144" y1={y} x2="192" y2={y + 2} stroke="var(--surface)" strokeWidth="4" />)}
      <path d="M201 108 Q229 174 196 252" fill="none" stroke="var(--cortical)" strokeWidth="8" strokeLinecap="round" />
      <path d="M134 108 Q111 174 138 252" fill="none" stroke="var(--amber)" strokeWidth="8" strokeLinecap="round" />
      <text x="167" y="310" textAnchor="middle" {...small}>canal cervical · compressão ventral e dorsal</text>
      <path d="M238 178 H294" stroke="var(--teal)" strokeWidth="2" markerEnd="url(#arrow-myelopathy)" />
      <Card x={306} y={68} w={176} h={108}><text x="394" y="94" textAnchor="middle" {...mono} fill="var(--teal)">ANTERIOR</text><text x="326" y="120" {...body}>ventral focal</text><text x="326" y="143" {...small}>1-3 níveis · cifose</text><text x="326" y="162" {...small}>reconstrução do corpo/disco</text></Card>
      <Card x={504} y={68} w={176} h={108}><text x="592" y="94" textAnchor="middle" {...mono} fill="var(--teal)">POSTERIOR</text><text x="524" y="120" {...body}>multissegmentar</text><text x="524" y="143" {...small}>lordose preservada</text><text x="524" y="162" {...small}>espaço para migração medular</text></Card>
      <Card x={306} y={200} w={374} h={92}><text x="493" y="227" textAnchor="middle" {...mono}>FUSÃO QUANDO NECESSÁRIA</text><text x="493" y="253" textAnchor="middle" {...body}>instabilidade · cifose · dor axial · risco deformante</text><text x="493" y="276" textAnchor="middle" {...small}>a via trata a anatomia inteira, não o osteófito mais chamativo</text></Card>
      <defs><marker id="arrow-myelopathy" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6" fill="none" stroke="var(--teal)" strokeWidth="1.5" /></marker></defs>
    </Frame>
  </svg>
);

const mjoa = [["leve", "15-17", "cirurgia OU reabilitação", "vigiar deterioração"], ["moderada", "12-14", "cirurgia recomendada", "déficit estabelecido"], ["grave", "0-11", "cirurgia recomendada", "prognóstico reservado"]] as const;
export const MyelopathyDecision: FC<FigureProps> = ({ className, title, variant }) => (
  <svg viewBox="0 0 720 350" role="img" className={className}><title>{title ?? "Decisão pela escala mJOA"}</title><Header>MJOA ORGANIZA GRAVIDADE · PROGRESSÃO DEFINE URGÊNCIA</Header><Frame>
    {mjoa.map(([key, score, action, note], i) => { const x = 42 + i * 225; const on = !variant || variant === key; return <g key={key} opacity={on ? 1 : .3}><Card x={x} y={73} w={190} h={170} active={variant === key}><text x={x + 95} y="105" textAnchor="middle" {...mono} fill="var(--teal)">{key.toUpperCase()}</text><text x={x + 95} y="148" textAnchor="middle" fontFamily="var(--font-serif)" fontSize="36" fill="var(--ink)">{score}</text><line x1={x + 24} y1="166" x2={x + 166} y2="166" stroke="var(--line)" /><text x={x + 95} y="194" textAnchor="middle" {...body}>{action}</text><text x={x + 95} y="219" textAnchor="middle" {...small}>{note}</text></Card></g>; })}
    <path d="M77 278 H644" stroke="var(--line)" strokeWidth="2" /><circle cx="77" cy="278" r="6" fill="var(--amber)" /><circle cx="644" cy="278" r="6" fill="var(--cortical)" /><text x="77" y="304" textAnchor="middle" {...small}>estável</text><text x="360" y="304" textAnchor="middle" {...body}>piora clínica em qualquer faixa → reavaliar e descomprimir</text><text x="644" y="304" textAnchor="middle" {...small}>progressiva</text>
  </Frame></svg>
);

export const ScheuermannDiagnosis: FC<FigureProps> = ({ className, title, variant }) => (
  <svg viewBox="0 0 720 350" role="img" className={className}><title>{title ?? "Diagnóstico da cifose de Scheuermann"}</title><Header>POSTURAL FLEXÍVEL ≠ SCHEUERMANN ESTRUTURAL</Header><Frame>
    <g opacity={!variant || variant === "toracica" ? 1 : .3}><Card x={39} y={70} w={200} h={220}><text x="139" y="98" textAnchor="middle" {...mono}>TORÁCICA</text><path d="M126 123 C174 153 175 214 127 252" fill="none" stroke="var(--teal)" strokeWidth="9" strokeLinecap="round" /><path d="M126 252 Q141 269 151 277" fill="none" stroke="var(--amber)" strokeWidth="5" /><text x="139" y="317" textAnchor="middle" {...small}>ápice T7-T9 · lordose compensatória</text></Card></g>
    <g opacity={!variant || variant === "toracolombar" ? 1 : .3}><Card x={260} y={70} w={200} h={220}><text x="360" y="98" textAnchor="middle" {...mono}>TORACOLOMBAR</text><path d="M345 121 C368 167 397 224 344 268" fill="none" stroke="var(--cortical)" strokeWidth="9" strokeLinecap="round" /><text x="360" y="317" textAnchor="middle" {...small}>ápice T10-L2 · dor mais frequente</text></Card></g>
    <Card x={481} y={70} w={200} h={220}><text x="581" y="98" textAnchor="middle" {...mono}>CRITÉRIO</text>{[0, 1, 2].map((i) => <g key={i} transform={`translate(0 ${i * 42})`}><path d="M532 130 L624 130 L614 160 L542 160 Z" fill="var(--teal-soft)" stroke="var(--teal)" strokeWidth="2" /><path d="M620 132 A30 30 0 0 1 612 157" fill="none" stroke="var(--amber)" strokeWidth="2" /></g>)}<text x="581" y="276" textAnchor="middle" {...body}>≥ 5° em 3 vértebras</text><text x="581" y="317" textAnchor="middle" {...small}>rigidez + platôs irregulares</text></Card>
  </Frame></svg>
);

export const ScheuermannConduct: FC<FigureProps> = ({ className, title, variant }) => (
  <svg viewBox="0 0 720 350" role="img" className={className}><title>{title ?? "Conduta na cifose de Scheuermann"}</title><Header>CRESCIMENTO · FLEXIBILIDADE · SINTOMAS · PROGRESSÃO</Header><Frame>
    <Card x={45} y={83} w={178} h={168} active={!variant}><text x="134" y="112" textAnchor="middle" {...mono}>CURVA LEVE / ESTÁVEL</text><circle cx="134" cy="159" r="30" fill="var(--teal-soft)" stroke="var(--teal)" /><path d="M128 140 Q153 160 127 181" fill="none" stroke="var(--teal)" strokeWidth="5" /><text x="134" y="216" textAnchor="middle" {...body}>atividade + exercícios</text><text x="134" y="237" textAnchor="middle" {...small}>observar progressão</text></Card>
    <path d="M229 167 H266" stroke="var(--line)" strokeWidth="2" />
    <g opacity={!variant || variant === "ortese" ? 1 : .28}><Card x={272} y={83} w={178} h={168} active={variant === "ortese"}><text x="361" y="112" textAnchor="middle" {...mono}>IMATURO / FLEXÍVEL</text><path d="M341 135 H381 V196 H341 Z" fill="var(--amber-soft, var(--surface))" stroke="var(--amber)" strokeWidth="3" /><path d="M349 143 Q373 165 349 188" fill="none" stroke="var(--ink-soft)" strokeWidth="4" /><text x="361" y="216" textAnchor="middle" {...body}>órtese moldada</text><text x="361" y="237" textAnchor="middle" {...small}>adesão determina resposta</text></Card></g>
    <path d="M456 167 H493" stroke="var(--line)" strokeWidth="2" />
    <g opacity={!variant || variant === "cirurgia" ? 1 : .28}><Card x={499} y={83} w={178} h={168} active={variant === "cirurgia"}><text x="588" y="112" textAnchor="middle" {...mono}>GRAVE / PROGRESSIVA</text><path d="M566 135 Q606 162 566 198" fill="none" stroke="var(--cortical)" strokeWidth="7" /><path d="M580 139 L582 194" stroke="var(--teal)" strokeWidth="4" /><circle cx="581" cy="147" r="4" fill="var(--teal)" /><circle cx="581" cy="164" r="4" fill="var(--teal)" /><circle cx="582" cy="181" r="4" fill="var(--teal)" /><text x="588" y="216" textAnchor="middle" {...body}>correção posterior</text><text x="588" y="237" textAnchor="middle" {...small}>equilíbrio, sem hipercorreção</text></Card></g>
    <text x="360" y="292" textAnchor="middle" {...body}>Dor refratária e impacto funcional modificam a decisão em qualquer ângulo.</text>
  </Frame></svg>
);

const ais = ["A", "B", "C", "D", "E"] as const;
export const SpinalTraumaAssessment: FC<FigureProps> = ({ className, title, variant }) => (
  <svg viewBox="0 0 720 350" role="img" className={className}><title>{title ?? "Avaliação do trauma raquimedular"}</title><Header>RESSUSCITAÇÃO → ISNCSCI → IMAGEM → DESCOMPRESSÃO / ESTABILIDADE</Header><Frame>
    {ais.map((code, i) => { const x = 42 + i * 91; const on = !variant || variant === code; return <g key={code} opacity={on ? 1 : .25}><circle cx={x} cy="112" r="29" fill={variant === code ? "var(--teal-soft)" : "var(--surface)"} stroke={variant === code ? "var(--teal)" : "var(--line)"} strokeWidth="2" /><text x={x} y="119" textAnchor="middle" fontFamily="var(--font-serif)" fontSize="25" fill="var(--ink)">{code}</text><text x={x} y="157" textAnchor="middle" {...small}>{code === "A" ? "completa" : code === "B" ? "sensitiva" : code === "C" ? "motora < 50%" : code === "D" ? "motora ≥ 50%" : "normal"}</text></g>; })}
    <Card x={520} y={73} w={160} h={108}><text x="600" y="101" textAnchor="middle" {...mono}>PRESERVAÇÃO SACRAL</text><text x="600" y="129" textAnchor="middle" {...body}>S4-S5 · pressão anal</text><text x="600" y="151" textAnchor="middle" {...body}>contração voluntária</text><text x="600" y="171" textAnchor="middle" {...small}>define incompletude</text></Card>
    <path d="M52 218 H668" stroke="var(--line)" strokeWidth="2" />
    {["TC · osso e alinhamento", "RM · medula e ligamentos", "cirurgia precoce se indicada"].map((label, i) => { const x = 50 + i * 218; return <g key={label}><circle cx={x + 88} cy="253" r="10" fill={i === 2 ? "var(--cortical)" : "var(--teal)"} /><text x={x + 88} y="286" textAnchor="middle" {...body}>{label}</text>{i < 2 && <path d={`M${x + 103} 253 H${x + 211}`} stroke="var(--line)" strokeWidth="2" />}</g>; })}
    <text x="360" y="317" textAnchor="middle" {...small}>repetir o exame após estabilização e sempre que houver mudança clínica</text>
  </Frame></svg>
);

export const SpinalTraumaPerfusion: FC<FigureProps> = ({ className, title }) => (
  <svg viewBox="0 0 720 350" role="img" className={className}><title>{title ?? "Proteção da perfusão medular"}</title><Header>LESÃO SECUNDÁRIA É POTENCIALMENTE EVITÁVEL</Header><Frame>
    <Card x={40} y={76} w={186} h={206}><text x="133" y="105" textAnchor="middle" {...mono}>EVITAR</text>{["hipóxia", "hipotensão", "febre", "compressão"].map((t, i) => <g key={t}><circle cx="73" cy={139 + i * 34} r="5" fill="var(--cortical)" /><text x="88" y={144 + i * 34} {...body}>{t}</text></g>)}</Card>
    <Card x={247} y={76} w={226} h={206}><text x="360" y="105" textAnchor="middle" {...mono}>PAM · DIRETRIZ 2024</text><rect x="281" y="139" width="158" height="24" rx="12" fill="var(--line)" /><rect x="315" y="139" width="88" height="24" rx="12" fill="var(--teal)" opacity=".75" /><text x="315" y="185" textAnchor="middle" {...small}>75-80</text><text x="403" y="185" textAnchor="middle" {...small}>90-95 mmHg</text><text x="360" y="219" textAnchor="middle" {...body}>janela sugerida: 3-7 dias</text><text x="360" y="246" textAnchor="middle" {...small}>evidência muito baixa</text><text x="360" y="264" textAnchor="middle" {...small}>individualizar fluidos e vasopressor</text></Card>
    <Card x={494} y={76} w={186} h={206}><text x="587" y="105" textAnchor="middle" {...mono}>MONITORAR</text>{["sangramento", "coração", "diurese", "exame AIS"].map((t, i) => <g key={t}><circle cx="527" cy={139 + i * 34} r="5" fill="var(--teal)" /><text x="542" y={144 + i * 34} {...body}>{t}</text></g>)}</Card>
    <text x="360" y="314" textAnchor="middle" {...body}>Meta pressórica não substitui controle da causa de choque.</text>
  </Frame></svg>
);

function Pipeline({ labels, accent = "var(--teal)" }: { labels: string[]; accent?: string }) {
  const width = 620 / labels.length;
  return <g>{labels.map((label, i) => { const x = 50 + i * width; return <g key={label}><circle cx={x + width / 2} cy="154" r="24" fill="var(--surface)" stroke={accent} strokeWidth="3" /><text x={x + width / 2} y="160" textAnchor="middle" fontFamily="var(--font-serif)" fontSize="21" fill="var(--ink)">{i + 1}</text><text x={x + width / 2} y="204" textAnchor="middle" {...small}>{label}</text>{i < labels.length - 1 && <path d={`M${x + width / 2 + 28} 154 H${x + width + width / 2 - 28}`} stroke="var(--line)" strokeWidth="2" />}</g>; })}</g>;
}

export const OsteosarcomaFlow: FC<FigureProps> = ({ className, title }) => (
  <svg viewBox="0 0 720 350" role="img" className={className}><title>{title ?? "Fluxo do osteossarcoma"}</title><Header>ORDEM ONCOLÓGICA · NÃO FIXAR ANTES DO DIAGNÓSTICO</Header><Frame><Pipeline labels={["imagem", "estadiar", "biópsia", "MAP", "ressecção", "necrose"]} /><Card x={72} y={244} w={576} h={57}><text x="360" y="270" textAnchor="middle" {...body}>quimioterapia + margem negativa + reconstrução funcional</text><text x="360" y="290" textAnchor="middle" {...small}>tórax e resposta histológica orientam prognóstico e seguimento</text></Card></Frame></svg>
);

export const OsteosarcomaMargin: FC<FigureProps> = ({ className, title, variant }) => (
  <svg viewBox="0 0 720 350" role="img" className={className}><title>{title ?? "Margem no osteossarcoma"}</title><Header>RESSECÇÃO EM BLOCO INCLUI TUMOR + ZONA REATIVA + BIÓPSIA</Header><Frame>
    <path d="M112 82 Q82 177 112 286 L245 286 Q277 177 245 82 Z" fill="var(--surface)" stroke="var(--ink-soft)" strokeWidth="8" /><ellipse cx="179" cy="174" rx="50" ry="66" fill="var(--cortical)" opacity=".32" stroke="var(--cortical)" strokeWidth="3" /><ellipse cx="179" cy="174" rx="71" ry="87" fill="none" stroke="var(--amber)" strokeWidth="3" strokeDasharray="7 5" /><path d="M229 143 L330 104" stroke="var(--cortical)" strokeWidth="7" strokeLinecap="round" /><text x="335" y="107" {...body}>trajeto da biópsia</text><path d="M91 69 H267 M91 298 H267" stroke="var(--teal)" strokeWidth="5" /><text x="179" y="323" textAnchor="middle" {...small}>osteotomias fora da zona reativa</text>
    {["IIA", "IIB", "III"].map((code, i) => { const y = 82 + i * 78; const on = !variant || variant === code; return <g key={code} opacity={on ? 1 : .27}><Card x={401} y={y} w={244} h={62} active={variant === code}><text x="428" y={y + 27} {...mono} fill="var(--teal)">{code}</text><text x="474" y={y + 27} {...body}>{code === "IIA" ? "alto grau · contido" : code === "IIB" ? "alto grau · extraósseo" : "metástase presente"}</text><text x="474" y={y + 48} {...small}>{code === "III" ? "controle local + estratégia sistêmica" : "margem ampla"}</text></Card></g>; })}
  </Frame></svg>
);

export const GctCampanacci: FC<FigureProps> = ({ className, title, variant }) => (
  <svg viewBox="0 0 720 350" role="img" className={className}><title>{title ?? "Campanacci no tumor de células gigantes"}</title><Header>CAMPANACCI DESCREVE A AGRESSIVIDADE RADIOGRÁFICA</Header><Frame>
    {["I", "II", "III"].map((code, i) => { const x = 52 + i * 218; const on = !variant || variant === code; const rx = 35 + i * 13; return <g key={code} opacity={on ? 1 : .28}><Card x={x} y={70} w={180} h={222} active={variant === code}><text x={x + 90} y="99" textAnchor="middle" {...mono} fill="var(--teal)">{code}</text><path d={`M${x + 47} 125 Q${x + 30} 193 ${x + 50} 251 L${x + 130} 251 Q${x + 151} 193 ${x + 132} 125 Z`} fill="var(--surface)" stroke="var(--ink-soft)" strokeWidth="7" /><ellipse cx={x + 90} cy="194" rx={rx} ry={43 + i * 10} fill="var(--teal)" opacity={.13 + i * .07} stroke={i === 2 ? "var(--cortical)" : "var(--teal)"} strokeWidth="3" strokeDasharray={i === 1 ? "6 4" : undefined} />{i === 2 && <path d={`M${x + 135} 181 Q${x + 177} 180 ${x + 166} 226`} fill="var(--cortical)" opacity=".3" stroke="var(--cortical)" strokeWidth="3" />}<text x={x + 90} y="277" textAnchor="middle" {...small}>{i === 0 ? "borda esclerótica" : i === 1 ? "córtex fino, contínuo" : "córtex rompido + partes moles"}</text></Card></g>; })}
  </Frame></svg>
);

export const GctCurettage: FC<FigureProps> = ({ className, title }) => (
  <svg viewBox="0 0 720 350" role="img" className={className}><title>{title ?? "Curetagem ampliada do TCG"}</title><Header>CONTROLE INTRALESIONAL DEPENDE DE ACESSO A TODOS OS RECESSOS</Header><Frame><Pipeline labels={["janela ampla", "curetagem", "broca", "adjuvante", "reconstrução"]} /><Card x={72} y={239} w={576} h={66}><text x="360" y="265" textAnchor="middle" {...body}>cartilagem preservada · suporte subcondral · estabilidade imediata</text><text x="360" y="289" textAnchor="middle" {...small}>cimento ajuda na mecânica e vigilância, mas não corrige tumor residual</text></Card></Frame></svg>
);

export const ChondrosarcomaRisk: FC<FigureProps> = ({ className, title }) => (
  <svg viewBox="0 0 720 350" role="img" className={className}><title>{title ?? "Sinais de risco no tumor cartilaginoso"}</title><Header>CARTILAGEM: INTEGRAR DOR + CRESCIMENTO + IMAGEM</Header><Frame>
    {["anéis e arcos", "escavação cortical", "ruptura do córtex", "massa de partes moles"].map((label, i) => { const x = 43 + i * 164; return <g key={label}><Card x={x} y={76} w={142} h={184}><text x={x + 71} y="104" textAnchor="middle" {...mono}>{String(i + 1).padStart(2, "0")}</text><ellipse cx={x + 71} cy="161" rx={33 + i * 8} ry={42} fill="var(--teal)" opacity={.08 + i * .06} stroke={i > 1 ? "var(--cortical)" : "var(--teal)"} strokeWidth="3" />{i === 0 && <><path d={`M${x + 47} 158 q12 -20 24 0 q12 20 24 0`} fill="none" stroke="var(--amber)" strokeWidth="3" /><path d={`M${x + 54} 181 q17 -16 34 0`} fill="none" stroke="var(--amber)" strokeWidth="3" /></>}{i === 1 && <path d={`M${x + 111} 119 Q${x + 91} 160 ${x + 111} 202`} fill="none" stroke="var(--ink-soft)" strokeWidth="8" />}{i === 2 && <path d={`M${x + 108} 146 L${x + 134} 128 M${x + 108} 177 L${x + 137} 195`} stroke="var(--cortical)" strokeWidth="6" />}{i === 3 && <ellipse cx={x + 118} cy="163" rx="31" ry="47" fill="var(--cortical)" opacity=".25" stroke="var(--cortical)" strokeWidth="2" />}<text x={x + 71} y="231" textAnchor="middle" {...small}>{label}</text></Card>{i < 3 && <path d={`M${x + 147} 168 H${x + 160}`} stroke="var(--line)" strokeWidth="2" />}</g>; })}
    <text x="360" y="297" textAnchor="middle" {...body}>sinais à direita aumentam a prioridade de biópsia e margem oncológica</text>
  </Frame></svg>
);

const chondro = [["baixo", "ACT apendicular", "curetagem ampliada"], ["intermediario", "grau 2 / axial", "ressecção ampla"], ["alto", "grau 3", "ressecção ampla"], ["desdiferenciado", "desdiferenciado", "multimodal"]] as const;
export const ChondrosarcomaConduct: FC<FigureProps> = ({ className, title, variant }) => (
  <svg viewBox="0 0 720 350" role="img" className={className}><title>{title ?? "Conduta no condrossarcoma"}</title><Header>SÍTIO E GRAU DEFINEM O CONTROLE LOCAL</Header><Frame>
    {chondro.map(([key, label, action], i) => { const x = 39 + i * 164; const on = !variant || variant === key; return <g key={key} opacity={on ? 1 : .28}><Card x={x} y={79} w={146} h={174} active={variant === key}><circle cx={x + 73} cy="123" r="24" fill={i === 0 ? "var(--teal-soft)" : "var(--cortical)"} opacity={i === 0 ? 1 : .2} stroke={i === 0 ? "var(--teal)" : "var(--cortical)"} /><text x={x + 73} y="129" textAnchor="middle" {...mono}>{i === 0 ? "1" : i === 1 ? "2" : i === 2 ? "3" : "DD"}</text><text x={x + 73} y="174" textAnchor="middle" {...body}>{label}</text><line x1={x + 22} y1="190" x2={x + 124} y2="190" stroke="var(--line)" /><text x={x + 73} y="220" textAnchor="middle" {...small}>{action}</text></Card></g>; })}
    <text x="360" y="289" textAnchor="middle" {...body}>condrossarcoma convencional: cirurgia é o pilar; terapia sistêmica depende do subtipo</text>
  </Frame></svg>
);

export const MetastasisInvestigation: FC<FigureProps> = ({ className, title }) => (
  <svg viewBox="0 0 720 350" role="img" className={className}><title>{title ?? "Investigação antes de fixar metástase"}</title><Header>LESÃO SOLITÁRIA DESCONHECIDA = PRIMÁRIA ATÉ PROVA</Header><Frame><Pipeline labels={["osso inteiro", "TC sistêmica", "laboratório", "imagem total", "biópsia"]} accent="var(--cortical)" /><Card x={74} y={237} w={572} h={68}><text x="360" y="264" textAnchor="middle" {...body}>diagnóstico confirmado → prognóstico → construção definitiva</text><text x="360" y="288" textAnchor="middle" {...small}>fixação prematura pode contaminar todo o canal medular</text></Card></Frame></svg>
);

export const MetastasisReconstruction: FC<FigureProps> = ({ className, title, variant }) => (
  <svg viewBox="0 0 720 350" role="img" className={className}><title>{title ?? "Reconstrução na metástase de osso longo"}</title><Header>CONSTRUÇÃO DEVE PERMITIR CARGA E DURAR MAIS QUE O PACIENTE</Header><Frame>
    {["diafise", "periarticular", "ressection"].map((key, i) => { const x = 45 + i * 220; const on = !variant || variant === key; return <g key={key} opacity={on ? 1 : .28}><Card x={x} y={70} w={190} h={224} active={variant === key}><text x={x + 95} y="100" textAnchor="middle" {...mono}>{i === 0 ? "DIÁFISE" : i === 1 ? "PERIARTICULAR" : "SEM ESTOQUE"}</text><path d={`M${x + 76} 122 Q${x + 61} 196 ${x + 76} 254 M${x + 114} 122 Q${x + 129} 196 ${x + 114} 254`} fill="none" stroke="var(--ink-soft)" strokeWidth="8" />{i === 0 && <line x1={x + 95} y1="116" x2={x + 95} y2="263" stroke="var(--teal)" strokeWidth="7" />}{i === 1 && <><rect x={x + 58} y="192" width="74" height="56" rx="8" fill="var(--teal)" opacity=".2" stroke="var(--teal)" strokeWidth="3" /><line x1={x + 66} y1="205" x2={x + 124} y2="237" stroke="var(--teal)" strokeWidth="4" /></>}{i === 2 && <><rect x={x + 64} y="124" width="62" height="70" rx="10" fill="var(--surface)" stroke="var(--teal)" strokeWidth="4" /><line x1={x + 95} y1="194" x2={x + 95} y2="266" stroke="var(--teal)" strokeWidth="7" /></>}<text x={x + 95} y="282" textAnchor="middle" {...small}>{i === 0 ? "haste longa ± cimento" : i === 1 ? "fixação bloqueada" : "endoprótese"}</text></Card></g>; })}
  </Frame></svg>
);

export const MirelsScore: FC<FigureProps> = ({ className, title }) => (
  <svg viewBox="0 0 720 350" role="img" className={className}><title>{title ?? "Escore de Mirels"}</title><Header>QUATRO DOMÍNIOS · 1 A 3 PONTOS CADA</Header><Frame>
    {[['sítio', 'membro sup.', 'membro inf.', 'pertrocantérica'], ['dor', 'leve', 'moderada', 'funcional'], ['padrão', 'esclerótica', 'mista', 'lítica'], ['tamanho', '< 1/3', '1/3-2/3', '> 2/3']].map(([name, a, b, c], i) => { const y = 70 + i * 58; return <g key={name}><text x="55" y={y + 31} {...mono}>{name.toUpperCase()}</text>{[a, b, c].map((label, j) => { const x = 194 + j * 157; return <g key={label}><rect x={x} y={y} width="137" height="43" rx="6" fill={j === 2 ? "var(--cortical)" : j === 1 ? "var(--amber)" : "var(--teal)"} opacity=".12" stroke={j === 2 ? "var(--cortical)" : j === 1 ? "var(--amber)" : "var(--teal)"} /><text x={x + 18} y={y + 26} {...mono}>{j + 1}</text><text x={x + 43} y={y + 26} {...body}>{label}</text></g>; })}</g>; })}
    <text x="360" y="319" textAnchor="middle" {...body}>somar somente depois de examinar cada componente</text>
  </Frame></svg>
);

export const MirelsDecision: FC<FigureProps> = ({ className, title, variant }) => (
  <svg viewBox="0 0 720 350" role="img" className={className}><title>{title ?? "Decisão após Mirels"}</title><Header>ESCORE É TRIAGEM · DIAGNÓSTICO E MECÂNICA DECIDEM</Header><Frame>
    {[['baixo', '≤ 7', 'observar / irradiar'], ['intermediario', '8', 'individualizar + TC'], ['alto', '≥ 9', 'considerar estabilização']].map(([key, score, action], i) => { const x = 48 + i * 218; const on = !variant || variant === key; return <g key={key} opacity={on ? 1 : .28}><Card x={x} y={75} w={188} h={145} active={variant === key}><text x={x + 94} y="120" textAnchor="middle" fontFamily="var(--font-serif)" fontSize="34" fill="var(--ink)">{score}</text><text x={x + 94} y="155" textAnchor="middle" {...body}>{action}</text><text x={x + 94} y="188" textAnchor="middle" {...small}>{i === 0 ? "vigiar dor e córtex" : i === 1 ? "zona de decisão" : "se houver benefício clínico"}</text></Card></g>; })}
    <Card x={80} y={245} w={560} h={60}><text x="360" y="270" textAnchor="middle" {...body}>antes de operar: diagnóstico + sobrevida + resposta + construção</text><text x="360" y="291" textAnchor="middle" {...small}>dor funcional e comprometimento cortical podem superar o total numérico</text></Card>
  </Frame></svg>
);

export const AcuteOmFlow: FC<FigureProps> = ({ className, title }) => (
  <svg viewBox="0 0 720 350" role="img" className={className}><title>{title ?? "Fluxo da osteomielite aguda"}</title><Header>GRAVIDADE DEFINE O TEMPO · CULTURA DEFINE A PRECISÃO</Header><Frame>
    <Card x={45} y={72} w={190} h={90}><text x="140" y="101" textAnchor="middle" {...mono} fill="var(--cortical)">SÉPTICO / INSTÁVEL</text><text x="140" y="129" textAnchor="middle" {...body}>culturas rápidas</text><text x="140" y="151" textAnchor="middle" {...small}>antibiótico imediato</text></Card>
    <Card x={45} y={194} w={190} h={90}><text x="140" y="223" textAnchor="middle" {...mono} fill="var(--teal)">ESTÁVEL</text><text x="140" y="251" textAnchor="middle" {...body}>cultivar o foco</text><text x="140" y="273" textAnchor="middle" {...small}>antes do antibiótico</text></Card>
    <path d="M250 117 H298 M250 239 H298 M298 117 V239" stroke="var(--line)" strokeWidth="2" />
    <Card x={310} y={96} w={160} h={164}><text x="390" y="125" textAnchor="middle" {...mono}>RM / ULTRASSOM</text><circle cx="390" cy="171" r="34" fill="var(--teal)" opacity=".15" stroke="var(--teal)" strokeWidth="3" /><text x="390" y="176" textAnchor="middle" {...body}>abscesso?</text><text x="390" y="224" textAnchor="middle" {...small}>articulação?</text><text x="390" y="244" textAnchor="middle" {...small}>osso necrótico?</text></Card>
    <path d="M482 178 H520" stroke="var(--line)" strokeWidth="2" />
    <Card x={532} y={72} w={145} h={90}><text x="604" y="102" textAnchor="middle" {...mono} fill="var(--cortical)">SIM</text><text x="604" y="132" textAnchor="middle" {...body}>drenar / desbridar</text></Card>
    <Card x={532} y={194} w={145} h={90}><text x="604" y="224" textAnchor="middle" {...mono} fill="var(--teal)">NÃO</text><text x="604" y="254" textAnchor="middle" {...body}>terapia dirigida</text><text x="604" y="274" textAnchor="middle" {...small}>vigiar PCR + clínica</text></Card>
  </Frame></svg>
);

export const AcuteOmAnatomy: FC<FigureProps> = ({ className, title, variant }) => (
  <svg viewBox="0 0 720 350" role="img" className={className}><title>{title ?? "Vias de osteomielite aguda"}</title><Header>COMO A BACTÉRIA ALCANÇA O OSSO</Header><Frame>
    {[['hematogenica', 'HEMATOGÊNICA', 'metáfise', 'sangue'], ['contigua', 'CONTÍGUA', 'ferida / úlcera', 'tecido'], ['direta', 'DIRETA', 'trauma / cirurgia', 'inóculo']].map(([key, label, note, origin], i) => { const x = 48 + i * 218; const on = !variant || variant === key; return <g key={key} opacity={on ? 1 : .28}><Card x={x} y={72} w={188} h={214} active={variant === key}><text x={x + 94} y="102" textAnchor="middle" {...mono}>{label}</text><path d={`M${x + 67} 125 Q${x + 50} 192 ${x + 69} 250 L${x + 119} 250 Q${x + 137} 192 ${x + 120} 125 Z`} fill="var(--surface)" stroke="var(--ink-soft)" strokeWidth="7" /><ellipse cx={x + 94} cy={i === 0 ? 216 : i === 1 ? 188 : 154} rx="25" ry="20" fill="var(--cortical)" opacity=".3" stroke="var(--cortical)" strokeWidth="2" />{i === 0 && <path d={`M${x + 31} 213 H${x + 67}`} stroke="var(--teal)" strokeWidth="4" />}{i === 1 && <path d={`M${x + 150} 188 H${x + 120}`} stroke="var(--teal)" strokeWidth="4" />}{i === 2 && <path d={`M${x + 94} 115 V146`} stroke="var(--teal)" strokeWidth="5" />}<text x={x + 94} y="274" textAnchor="middle" {...small}>{origin} → {note}</text></Card></g>; })}
  </Frame></svg>
);

export const ChronicOmCierny: FC<FigureProps> = ({ className, title, variant }) => (
  <svg viewBox="0 0 720 350" role="img" className={className}><title>{title ?? "Cierny-Mader"}</title><Header>ANATOMIA I-IV + HOSPEDEIRO A / B / C</Header><Frame>
    {[['I', 'medular'], ['II', 'superficial'], ['III', 'localizada'], ['IV', 'difusa']].map(([code, label], i) => { const x = 41 + i * 165; const on = !variant || variant === code; return <g key={code} opacity={on ? 1 : .28}><Card x={x} y={72} w={145} h={174} active={variant === code}><text x={x + 72} y="101" textAnchor="middle" {...mono}>{code} · {label}</text><rect x={x + 45} y="121" width="55" height="90" rx="24" fill="var(--surface)" stroke="var(--ink-soft)" strokeWidth="7" />{i === 0 && <rect x={x + 61} y="128" width="23" height="76" rx="10" fill="var(--cortical)" opacity=".3" />}{i === 1 && <path d={`M${x + 43} 133 V196`} stroke="var(--cortical)" strokeWidth="9" />}{i === 2 && <path d={`M${x + 44} 166 Q${x + 72} 136 ${x + 99} 166`} fill="none" stroke="var(--cortical)" strokeWidth="9" />}{i === 3 && <rect x={x + 45} y="121" width="55" height="90" rx="24" fill="var(--cortical)" opacity=".25" stroke="var(--cortical)" strokeWidth="2" />}</Card></g>; })}
    <Card x={101} y={268} w={518} h={43}><text x="360" y="294" textAnchor="middle" {...body}>A saudável · B comprometimento local/sistêmico · C tratamento desproporcional</text></Card>
  </Frame></svg>
);

export const ChronicOmPillars: FC<FigureProps> = ({ className, title }) => (
  <svg viewBox="0 0 720 350" role="img" className={className}><title>{title ?? "Pilares da osteomielite crônica"}</title><Header>ANTIBIÓTICO SOZINHO NÃO VASCULARIZA SEQUESTRO</Header><Frame><Pipeline labels={["amostras", "desbridar", "espaço morto", "estabilizar", "cobrir"]} /><Card x={72} y={239} w={576} h={66}><text x="360" y="266" textAnchor="middle" {...body}>tecido viável + perfusão + mecânica + terapia dirigida</text><text x="360" y="290" textAnchor="middle" {...small}>definir intenção curativa ou supressiva antes da primeira incisão</text></Card></Frame></svg>
);

export const SepticArthritisDiagnosis: FC<FigureProps> = ({ className, title }) => (
  <svg viewBox="0 0 720 350" role="img" className={className}><title>{title ?? "Diagnóstico da artrite séptica"}</title><Header>DERRAME DOLOROSO → PUNÇÃO → DRENAGEM E TERAPIA</Header><Frame><Pipeline labels={["hemocultura", "artrocentese", "Gram/cultura", "drenagem", "auditar"]} /><Card x={69} y={238} w={582} h={68}><text x="360" y="265" textAnchor="middle" {...body}>leucócitos ajudam, mas não confirmam nem excluem isoladamente</text><text x="360" y="289" textAnchor="middle" {...small}>cristais presentes não afastam infecção concomitante</text></Card></Frame></svg>
);

export const SepticArthritisGachter: FC<FigureProps> = ({ className, title, variant }) => (
  <svg viewBox="0 0 720 350" role="img" className={className}><title>{title ?? "Gächter na artrite séptica"}</title><Header>PROGRESSÃO ARTROSCÓPICA E DANO ARTICULAR</Header><Frame>
    {[['I', 'sinovite'], ['II', 'fibrina / pus'], ['III', 'aderências'], ['IV', 'erosão óssea']].map(([code, label], i) => { const x = 41 + i * 165; const on = !variant || variant === code; return <g key={code} opacity={on ? 1 : .28}><Card x={x} y={73} w={145} h={195} active={variant === code}><text x={x + 72} y="103" textAnchor="middle" {...mono}>{code}</text><ellipse cx={x + 72} cy="169" rx="46" ry="34" fill="var(--surface)" stroke="var(--ink-soft)" strokeWidth="8" /><ellipse cx={x + 72} cy="169" rx="37" ry="25" fill={i < 2 ? "var(--amber)" : "var(--cortical)"} opacity={.1 + i * .06} />{i >= 1 && [...Array(i + 1)].map((_, j) => <path key={j} d={`M${x + 39 + j * 18} 151 Q${x + 49 + j * 18} 170 ${x + 41 + j * 18} 188`} fill="none" stroke="var(--cortical)" strokeWidth={i === 3 ? 5 : 2} />)}<text x={x + 72} y="229" textAnchor="middle" {...body}>{label}</text><text x={x + 72} y="251" textAnchor="middle" {...small}>{i < 2 ? "lavar cedo" : "desbridar amplamente"}</text></Card></g>; })}
    <text x="360" y="304" textAnchor="middle" {...body}>quanto mais avançado, maior a chance de nova lavagem ou artrotomia</text>
  </Frame></svg>
);

export const PjiDiagnosis: FC<FigureProps> = ({ className, title }) => (
  <svg viewBox="0 0 720 350" role="img" className={className}><title>{title ?? "Diagnóstico da infecção periprotética"}</title><Header>CRITÉRIO MAIOR OU SOMA DE EVIDÊNCIAS</Header><Frame>
    <Card x={44} y={76} w={206} h={197}><text x="147" y="106" textAnchor="middle" {...mono} fill="var(--cortical)">CONFIRMA</text><circle cx="103" cy="156" r="25" fill="var(--cortical)" opacity=".18" stroke="var(--cortical)" /><text x="103" y="161" textAnchor="middle" {...body}>fístula</text><text x="147" y="204" textAnchor="middle" {...body}>OU</text><circle cx="190" cy="156" r="25" fill="var(--cortical)" opacity=".18" stroke="var(--cortical)" /><text x="190" y="161" textAnchor="middle" {...body}>2×</text><text x="147" y="242" textAnchor="middle" {...small}>duas culturas com mesmo agente</text></Card>
    <Card x={272} y={76} w={404} h={197}><text x="474" y="106" textAnchor="middle" {...mono} fill="var(--teal)">QUANDO NÃO HÁ CRITÉRIO MAIOR</text>{[['soro', 327, 145], ['sinóvia', 437, 145], ['culturas', 547, 145], ['histologia', 382, 213], ['intraop.', 502, 213]].map(([label, x, y]) => <g key={String(label)}><circle cx={Number(x)} cy={Number(y)} r="34" fill="var(--teal)" opacity=".12" stroke="var(--teal)" /><text x={Number(x)} y={Number(y) + 5} textAnchor="middle" {...small}>{label}</text></g>)}<text x="474" y="257" textAnchor="middle" {...body}>integrar escore e contexto pós-operatório</text></Card>
    <text x="360" y="307" textAnchor="middle" {...small}>swab superficial e teste isolado não definem IAP</text>
  </Frame></svg>
);

export const PjiStrategy: FC<FigureProps> = ({ className, title, variant }) => (
  <svg viewBox="0 0 720 350" role="img" className={className}><title>{title ?? "Estratégia na infecção periprotética"}</title><Header>BIOFILME + FIXAÇÃO + TECIDOS + AGENTE</Header><Frame>
    <g opacity={!variant || variant === "aguda" ? 1 : .28}><Card x={48} y={72} w={282} h={205} active={variant === "aguda"}><text x="189" y="104" textAnchor="middle" {...mono} fill="var(--teal)">AGUDA · COMPONENTES FIXOS</text><text x="189" y="139" textAnchor="middle" {...body}>DAIR</text><path d="M105 165 H273" stroke="var(--teal)" strokeWidth="4" /><circle cx="130" cy="165" r="12" fill="var(--teal-soft)" stroke="var(--teal)" /><circle cx="189" cy="165" r="12" fill="var(--teal-soft)" stroke="var(--teal)" /><circle cx="248" cy="165" r="12" fill="var(--teal-soft)" stroke="var(--teal)" /><text x="189" y="209" textAnchor="middle" {...body}>desbridar + trocar módulos</text><text x="189" y="241" textAnchor="middle" {...small}>tecido bom · agente tratável</text></Card></g>
    <g opacity={!variant || variant === "cronica" ? 1 : .28}><Card x={390} y={72} w={282} h={205} active={variant === "cronica"}><text x="531" y="104" textAnchor="middle" {...mono} fill="var(--cortical)">CRÔNICA · SOLTA / FÍSTULA</text><text x="531" y="139" textAnchor="middle" {...body}>REVISÃO</text><rect x="455" y="161" width="60" height="44" rx="6" fill="var(--cortical)" opacity=".18" stroke="var(--cortical)" /><path d="M547 183 H620" stroke="var(--line)" strokeWidth="4" /><text x="531" y="232" textAnchor="middle" {...body}>um ou dois tempos</text><text x="531" y="254" textAnchor="middle" {...small}>remover biofilme e reconstruir</text></Card></g>
    <text x="360" y="310" textAnchor="middle" {...body}>supressão quando erradicação cirúrgica não é proporcional ou possível</text>
  </Frame></svg>
);

export const FriDiagnosis: FC<FigureProps> = ({ className, title, variant }) => (
  <svg viewBox="0 0 720 350" role="img" className={className}><title>{title ?? "Critérios diagnósticos de FRI"}</title><Header>CONFIRMATÓRIO DEFINE · SUGESTIVO INVESTIGA</Header><Frame>
    <g opacity={!variant || variant === "confirmatoria" ? 1 : .28}><Card x={47} y={72} w={286} h={214} active={variant === "confirmatoria"}><text x="190" y="103" textAnchor="middle" {...mono} fill="var(--cortical)">CONFIRMATÓRIOS</text>{["fístula / deiscência comunicante", "pus", "≥ 2 culturas concordantes", "microrganismo na histologia"].map((t, i) => <g key={t}><circle cx="78" cy={137 + i * 35} r="5" fill="var(--cortical)" /><text x="93" y={142 + i * 35} {...body}>{t}</text></g>)}</Card></g>
    <g opacity={!variant || variant === "sugestiva" ? 1 : .28}><Card x={387} y={72} w={286} h={214} active={variant === "sugestiva"}><text x="530" y="103" textAnchor="middle" {...mono} fill="var(--teal)">SUGESTIVOS</text>{["dor / eritema / febre", "drenagem ou cultura única", "PCR / VHS", "imagem e ausência de união"].map((t, i) => <g key={t}><circle cx="418" cy={137 + i * 35} r="5" fill="var(--teal)" /><text x="433" y={142 + i * 35} {...body}>{t}</text></g>)}</Card></g>
    <text x="360" y="316" textAnchor="middle" {...small}>sugestivo não é negativo: ele aciona amostras profundas e investigação</text>
  </Frame></svg>
);

export const FriStrategy: FC<FigureProps> = ({ className, title }) => (
  <svg viewBox="0 0 720 350" role="img" className={className}><title>{title ?? "Estratégia na infecção relacionada à fratura"}</title><Header>INFECÇÃO E CONSOLIDAÇÃO DEVEM SER TRATADAS JUNTAS</Header><Frame>
    <Card x={43} y={74} w={190} h={202}><text x="138" y="104" textAnchor="middle" {...mono} fill="var(--teal)">RETER</text><text x="138" y="141" textAnchor="middle" {...body}>implante estável</text><text x="138" y="169" textAnchor="middle" {...body}>redução aceitável</text><text x="138" y="197" textAnchor="middle" {...body}>quadro favorável</text><line x1="70" y1="219" x2="206" y2="219" stroke="var(--line)" /><text x="138" y="247" textAnchor="middle" {...small}>desbridar + tratar biofilme</text></Card>
    <Card x={265} y={74} w={190} h={202}><text x="360" y="104" textAnchor="middle" {...mono} fill="var(--cortical)">TROCAR / REMOVER</text><text x="360" y="141" textAnchor="middle" {...body}>implante solto</text><text x="360" y="169" textAnchor="middle" {...body}>não união / deformidade</text><text x="360" y="197" textAnchor="middle" {...body}>biofilme maduro</text><line x1="292" y1="219" x2="428" y2="219" stroke="var(--line)" /><text x="360" y="247" textAnchor="middle" {...small}>nova estabilidade obrigatória</text></Card>
    <Card x={487} y={74} w={190} h={202}><text x="582" y="104" textAnchor="middle" {...mono} fill="var(--amber)">SUPRIMIR ATÉ UNIÃO</text><text x="582" y="141" textAnchor="middle" {...body}>caso selecionado</text><text x="582" y="169" textAnchor="middle" {...body}>fixação funcional</text><text x="582" y="197" textAnchor="middle" {...body}>plano de retirada</text><line x1="514" y1="219" x2="650" y2="219" stroke="var(--line)" /><text x="582" y="247" textAnchor="middle" {...small}>objetivo e prazo explícitos</text></Card>
    <text x="360" y="312" textAnchor="middle" {...body}>todas as vias exigem culturas, desbridamento, espaço morto e cobertura</text>
  </Frame></svg>
);

export const figures: Record<string, FC<FigureProps>> = {
  "framework-completion:mielopatia-vias": MyelopathyRoutes,
  "framework-completion:mielopatia-decisao": MyelopathyDecision,
  "framework-completion:scheuermann-diagnostico": ScheuermannDiagnosis,
  "framework-completion:scheuermann-conduta": ScheuermannConduct,
  "framework-completion:trauma-medular-avaliacao": SpinalTraumaAssessment,
  "framework-completion:trauma-medular-perfusao": SpinalTraumaPerfusion,
  "framework-completion:osteossarcoma-fluxo": OsteosarcomaFlow,
  "framework-completion:osteossarcoma-margem": OsteosarcomaMargin,
  "framework-completion:tcg-campanacci": GctCampanacci,
  "framework-completion:tcg-curetagem": GctCurettage,
  "framework-completion:condrossarcoma-risco": ChondrosarcomaRisk,
  "framework-completion:condrossarcoma-conduta": ChondrosarcomaConduct,
  "framework-completion:metastase-investigacao": MetastasisInvestigation,
  "framework-completion:metastase-reconstrucao": MetastasisReconstruction,
  "framework-completion:mirels-score": MirelsScore,
  "framework-completion:mirels-decisao": MirelsDecision,
  "framework-completion:om-aguda-fluxo": AcuteOmFlow,
  "framework-completion:om-aguda-anatomia": AcuteOmAnatomy,
  "framework-completion:om-cronica-cierny": ChronicOmCierny,
  "framework-completion:om-cronica-pilares": ChronicOmPillars,
  "framework-completion:artrite-septica-diagnostico": SepticArthritisDiagnosis,
  "framework-completion:artrite-septica-gachter": SepticArthritisGachter,
  "framework-completion:iap-diagnostico": PjiDiagnosis,
  "framework-completion:iap-estrategia": PjiStrategy,
  "framework-completion:fri-diagnostico": FriDiagnosis,
  "framework-completion:fri-estrategia": FriStrategy,
};
