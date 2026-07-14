import type { FC, ReactNode } from "react";
import type { FigureProps } from "../../../types/topic";

const bone = {
  fill: "var(--surface)",
  stroke: "var(--ink-soft)",
  strokeWidth: 2,
  strokeLinejoin: "round" as const,
};

const boneSoft = {
  fill: "var(--surface-2, var(--surface))",
  stroke: "var(--line-strong, var(--ink-soft))",
  strokeWidth: 1.5,
  strokeLinejoin: "round" as const,
};

const label = {
  fill: "var(--muted)",
  fontFamily: "var(--font-body, sans-serif)",
  fontSize: 11,
};

const body = {
  fill: "var(--ink)",
  fontFamily: "var(--font-body, sans-serif)",
  fontSize: 12,
};

const mono = {
  fill: "var(--ink)",
  fontFamily: "var(--font-mono, monospace)",
  fontSize: 11,
};

const acl = {
  fill: "none",
  stroke: "var(--teal)",
  strokeWidth: 6,
  strokeLinecap: "round" as const,
};

function Panel({ x, y, width, height, children }: { x: number; y: number; width: number; height: number; children: ReactNode }) {
  return (
    <g>
      <rect x={x} y={y} width={width} height={height} rx="8" fill="var(--surface-2, var(--surface))" stroke="var(--line)" />
      {children}
    </g>
  );
}

function KneeSagittal({
  x = 0,
  y = 0,
  scale = 1,
  torn = false,
  showAcl = true,
}: {
  x?: number;
  y?: number;
  scale?: number;
  torn?: boolean;
  showAcl?: boolean;
}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <path {...bone} d="M92 18 C72 38 67 73 78 103 C84 119 82 132 66 149 C89 165 130 164 154 146 C139 129 137 115 145 98 C158 70 153 38 133 18 Z" />
      <path {...bone} d="M68 162 C89 149 132 150 157 163 L150 190 C134 202 91 202 76 189 Z" />
      <path {...boneSoft} d="M90 194 L136 194 L143 292 L82 292 Z" />
      <path {...boneSoft} d="M54 115 C39 127 39 160 55 175 C67 168 73 157 72 140 C70 126 64 118 54 115 Z" />
      <path d="M93 152 C105 145 121 145 135 153" fill="none" stroke="var(--amber)" strokeWidth="4" strokeLinecap="round" />
      {showAcl && (
        <path d="M108 149 C101 173 101 184 110 199" {...acl} strokeDasharray={torn ? "13 8" : undefined} />
      )}
      {showAcl && torn && <path d="M104 168 l-10 -5 M110 174 l11 5" stroke="var(--cortical)" strokeWidth="2.5" />}
      <path d="M131 148 C124 170 124 182 119 198" fill="none" stroke="var(--ink-soft)" strokeWidth="4" strokeLinecap="round" />
    </g>
  );
}

export const Anatomy: FC<FigureProps> = ({ className, title, variant }) => {
  const state = (variant ?? "integro").toLowerCase();
  const complete = state === "completa";
  const partial = state.startsWith("parcial");
  const unstable = state === "parcial-instavel";

  return (
    <svg viewBox="0 0 540 340" preserveAspectRatio="xMidYMid meet" role="img" className={className} xmlns="http://www.w3.org/2000/svg">
      <title>{title ?? "Anatomia funcional do ligamento cruzado anterior e suas inserções"}</title>
      <defs>
        <marker id="lca-anat-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 Z" fill="var(--amber)" />
        </marker>
      </defs>

      <text x="270" y="25" {...mono} textAnchor="middle">LCA · anatomia funcional</text>
      <KneeSagittal x={24} y={22} scale={0.96} torn={complete} showAcl={false} />

      <path
        d="M126 164 C118 185 117 196 124 213"
        fill="none"
        stroke="var(--teal)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray={partial ? (unstable ? "7 7" : "14 4") : undefined}
        opacity={complete ? 0.18 : 1}
      />
      <path
        d="M140 164 C136 187 137 199 142 214"
        fill="none"
        stroke="var(--teal-deep, var(--teal))"
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray={complete ? "8 10" : undefined}
      />
      {(partial || complete) && (
        <g>
          <path d="M128 181 l-10 -6 M133 187 l10 5" stroke="var(--cortical)" strokeWidth="2.2" />
          <text x="52" y="224" {...mono} fill="var(--cortical)">{complete ? "ruptura completa" : "ruptura parcial"}</text>
        </g>
      )}

      <path d="M123 164 L238 82" stroke="var(--line-strong)" fill="none" />
      <circle cx="123" cy="164" r="4" fill="var(--teal)" />
      <text x="246" y="78" {...body}>inserção femoral</text>
      <text x="246" y="94" {...label}>parede medial do côndilo lateral</text>
      <path d="M136 214 L238 246" stroke="var(--line-strong)" fill="none" />
      <circle cx="136" cy="214" r="4" fill="var(--teal)" />
      <text x="246" y="242" {...body}>inserção tibial</text>
      <text x="246" y="258" {...label}>área intercondilar anterior</text>

      <Panel x={332} y={48} width={180} height={104}>
        <text x="348" y="70" {...mono} fill="var(--teal)">FEIXE ANTEROMEDIAL</text>
        <path d="M350 91 C384 77 420 78 454 95" fill="none" stroke="var(--teal)" strokeWidth="5" strokeLinecap="round" />
        <text x="348" y="118" {...label}>mais tenso em flexão</text>
        <text x="348" y="136" {...label}>freia translação anterior</text>
      </Panel>
      <Panel x={332} y={166} width={180} height={104}>
        <text x="348" y="188" {...mono} fill="var(--teal-deep, var(--teal))">FEIXE POSTEROLATERAL</text>
        <path d="M350 210 C384 228 420 227 454 208" fill="none" stroke="var(--teal-deep, var(--teal))" strokeWidth="5" strokeLinecap="round" />
        <text x="348" y="238" {...label}>atua próximo da extensão</text>
        <text x="348" y="256" {...label}>controle rotatório</text>
      </Panel>

      <path d="M250 302 L430 302" stroke="var(--amber)" strokeWidth="2" markerEnd="url(#lca-anat-arrow)" />
      <text x="250" y="322" {...label}>translação anterior + rotação interna controladas pelo LCA</text>
    </svg>
  );
};

export const Mechanism: FC<FigureProps> = ({ className, title }) => (
  <svg viewBox="0 0 560 330" preserveAspectRatio="xMidYMid meet" role="img" className={className} xmlns="http://www.w3.org/2000/svg">
    <title>{title ?? "Mecanismo sem contato da lesão do LCA durante mudança de direção ou aterrissagem"}</title>
    <defs>
      <marker id="lca-mech-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M0 0 L10 5 L0 10 Z" fill="var(--cortical)" />
      </marker>
    </defs>
    <text x="280" y="24" {...mono} textAnchor="middle">mecanismo sem contato · sequência de carga</text>

    {[24, 204, 384].map((x, i) => (
      <Panel key={x} x={x} y={42} width={152} height={230}>
        <text x={x + 14} y="66" {...mono} fill={i === 2 ? "var(--cortical)" : "var(--teal)"}>{`${i + 1}`.padStart(2, "0")}</text>
        <text x={x + 40} y="66" {...body}>{["aproximação", "pé apoiado", "falha do LCA"][i]}</text>
        <circle cx={x + 76 + (i === 2 ? -8 : 0)} cy="98" r="14" {...boneSoft} />
        <path d={`M${x + 76} 113 L${x + 72 + (i === 2 ? -10 : 0)} 162`} stroke="var(--ink-soft)" strokeWidth="5" strokeLinecap="round" />
        <path d={`M${x + 73} 127 L${x + 44} 151 M${x + 73} 127 L${x + 104} 145`} stroke="var(--ink-soft)" strokeWidth="4" strokeLinecap="round" />
        <path
          d={i === 0
            ? `M${x + 72} 161 L${x + 48} 205 L${x + 34} 250 M${x + 72} 161 L${x + 98} 202 L${x + 121} 250`
            : i === 1
              ? `M${x + 72} 161 L${x + 54} 207 L${x + 48} 252 M${x + 72} 161 L${x + 96} 202 L${x + 120} 250`
              : `M${x + 62} 161 L${x + 92} 205 L${x + 70} 252 M${x + 62} 161 L${x + 104} 201 L${x + 126} 250`}
          stroke="var(--ink-soft)" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round"
        />
        <path d={`M${x + 28} 254 L${x + 62} 254 M${x + 108} 254 L${x + 140} 254`} stroke="var(--ink-soft)" strokeWidth="7" strokeLinecap="round" />
        {i === 1 && <path d={`M${x + 46} 254 L${x + 46} 214`} stroke="var(--cortical)" strokeWidth="2.5" markerEnd="url(#lca-mech-arrow)" />}
        {i === 2 && (
          <g>
            <ellipse cx={x + 94} cy="205" rx="19" ry="14" fill="none" stroke="var(--cortical)" strokeWidth="2.5" />
            <path d={`M${x + 126} 181 C${x + 104} 170 ${x + 90} 178 ${x + 90} 194`} fill="none" stroke="var(--cortical)" strokeWidth="2.5" markerEnd="url(#lca-mech-arrow)" />
            <path d={`M${x + 116} 231 C${x + 92} 240 ${x + 72} 230 ${x + 72} 213`} fill="none" stroke="var(--amber)" strokeWidth="2.5" />
          </g>
        )}
      </Panel>
    ))}
    <text x="48" y="298" {...label}>desaceleração</text>
    <text x="215" y="298" {...label}>força de reação do solo</text>
    <text x="394" y="298" {...label}>valgo dinâmico + rotação interna</text>
    <text x="280" y="320" {...body} textAnchor="middle">o risco emerge da combinação de carga, posição e controle neuromuscular</text>
  </svg>
);

export const Exam: FC<FigureProps> = ({ className, title }) => {
  const exams = [
    { x: 18, name: "Lachman", angle: "20–30°", note: "translação anterior", arrow: "M92 183 L126 183" },
    { x: 194, name: "Gaveta anterior", angle: "90°", note: "menos sensível no agudo", arrow: "M274 183 L306 183" },
    { x: 370, name: "Ressalto rotatório", angle: "valgo + rotação", note: "instabilidade funcional", arrow: "M474 164 C446 176 446 202 474 214" },
  ];
  return (
    <svg viewBox="0 0 560 315" preserveAspectRatio="xMidYMid meet" role="img" className={className} xmlns="http://www.w3.org/2000/svg">
      <title>{title ?? "Exame clínico do LCA: Lachman, gaveta anterior e ressalto rotatório"}</title>
      <defs>
        <marker id="lca-exam-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 Z" fill="var(--cortical)" />
        </marker>
      </defs>
      <text x="280" y="24" {...mono} textAnchor="middle">exame comparativo · paciente relaxado</text>
      {exams.map((exam, i) => (
        <Panel key={exam.name} x={exam.x} y={42} width={164} height={242}>
          <text x={exam.x + 14} y="66" {...mono} fill="var(--teal)">{`${i + 1}`.padStart(2, "0")}</text>
          <text x={exam.x + 42} y="66" {...body}>{exam.name}</text>
          <path d={`M${exam.x + 28} 142 L${exam.x + 82} 142 L${exam.x + 126} 176`} stroke="var(--ink-soft)" strokeWidth="10" fill="none" strokeLinecap="round" />
          <path d={`M${exam.x + 126} 176 L${exam.x + 130} 232`} stroke="var(--ink-soft)" strokeWidth="9" strokeLinecap="round" />
          <circle cx={exam.x + 124} cy="176" r="12" fill="var(--surface)" stroke="var(--teal)" strokeWidth="2" />
          <path d={`M${exam.x + 78} 132 C${exam.x + 92} 145 ${exam.x + 98} 158 ${exam.x + 104} 172`} stroke="var(--amber)" strokeWidth="5" fill="none" strokeLinecap="round" />
          <path d={`M${exam.x + 104} 166 C${exam.x + 118} 153 ${exam.x + 132} 153 ${exam.x + 144} 165`} stroke="var(--cortical)" strokeWidth="4" fill="none" strokeLinecap="round" />
          <path d={exam.arrow} transform={`translate(${exam.x - (i === 0 ? 18 : i === 1 ? 194 : 370)} 0)`} fill="none" stroke="var(--cortical)" strokeWidth="2.5" markerEnd="url(#lca-exam-arrow)" />
          <text x={exam.x + 82} y="252" {...mono} textAnchor="middle" fill="var(--amber)">{exam.angle}</text>
          <text x={exam.x + 82} y="270" {...label} textAnchor="middle">{exam.note}</text>
        </Panel>
      ))}
      <text x="280" y="306" {...body} textAnchor="middle">Lachman detecta translação; o ressalto rotatório traduz o falseio.</text>
    </svg>
  );
};

export const MriAssociated: FC<FigureProps> = ({ className, title }) => (
  <svg viewBox="0 0 560 330" preserveAspectRatio="xMidYMid meet" role="img" className={className} xmlns="http://www.w3.org/2000/svg">
    <title>{title ?? "Leitura dirigida da ressonância na lesão do LCA e lesões associadas"}</title>
    <defs>
      <linearGradient id="lca-mri-bg" x1="0" x2="1">
        <stop offset="0" stopColor="var(--surface-2, var(--surface))" />
        <stop offset="1" stopColor="var(--surface)" />
      </linearGradient>
    </defs>
    <text x="280" y="24" {...mono} textAnchor="middle">RM · roteiro de leitura, não apenas confirmação</text>
    <Panel x={18} y={42} width={294} height={252}>
      <rect x="30" y="56" width="270" height="184" rx="8" fill="url(#lca-mri-bg)" stroke="var(--line)" />
      <path d="M62 80 C96 62 176 65 218 90 C234 106 222 131 204 149 C190 162 180 179 174 210" fill="none" stroke="var(--ink-soft)" strokeWidth="18" strokeLinecap="round" opacity="0.72" />
      <path d="M72 213 C112 190 200 190 254 214" fill="none" stroke="var(--ink-soft)" strokeWidth="20" strokeLinecap="round" opacity="0.72" />
      <path d="M166 106 C151 133 143 158 145 185" fill="none" stroke="var(--teal)" strokeWidth="6" strokeDasharray="10 9" strokeLinecap="round" />
      <path d="M140 144 l-11 -6 M147 153 l12 6" stroke="var(--cortical)" strokeWidth="2.5" />
      <ellipse cx="218" cy="166" rx="24" ry="13" fill="var(--cortical)" opacity="0.28" stroke="var(--cortical)" />
      <ellipse cx="198" cy="203" rx="22" ry="10" fill="var(--cortical)" opacity="0.28" stroke="var(--cortical)" />
      <path d="M92 194 L126 185 L116 202 Z" fill="var(--amber)" opacity="0.8" />
      <path d="M149 140 L258 96" stroke="var(--line-strong)" />
      <text x="260" y="93" {...label} textAnchor="end">LCA descontínuo</text>
      <path d="M217 166 L278 150" stroke="var(--line-strong)" />
      <text x="280" y="146" {...label} textAnchor="end">contusão lateral</text>
      <text x="44" y="266" {...mono}>SAGITAL</text>
      <text x="112" y="266" {...label}>fibras · ângulo · contusões</text>
    </Panel>

    <Panel x={326} y={42} width={216} height={252}>
      <text x="342" y="68" {...mono}>LESÕES QUE MUDAM A CONDUTA</text>
      {[
        ["rampa medial", "junção meniscocapsular", "M92 0 L112 0"],
        ["raiz lateral", "extrusão e estabilidade", "M96 0 L112 0"],
        ["menisco", "ruptura reparável", "M90 0 L112 0"],
        ["cartilagem", "defeito de carga", "M94 0 L112 0"],
      ].map(([name, note], i) => {
        const y = 92 + i * 46;
        return (
          <g key={name}>
            <circle cx="348" cy={y} r="8" fill={i < 2 ? "var(--cortical-tint, var(--surface))" : "var(--teal-tint, var(--surface))"} stroke={i < 2 ? "var(--cortical)" : "var(--teal)"} />
            <path d={`M344 ${y} L348 ${y + 4} L354 ${y - 5}`} fill="none" stroke={i < 2 ? "var(--cortical)" : "var(--teal)"} strokeWidth="2" />
            <text x="364" y={y - 2} {...body}>{name}</text>
            <text x="364" y={y + 14} {...label}>{note}</text>
          </g>
        );
      })}
      <text x="342" y="278" {...label}>correlacionar sempre com exame e sintomas</text>
    </Panel>
    <text x="280" y="320" {...body} textAnchor="middle">Explorar o recesso posteromedial: a lesão da rampa pode ficar oculta na visão anterior.</text>
  </svg>
);

export const Grafts: FC<FigureProps> = ({ className, title }) => {
  const grafts = [
    { x: 18, code: "OTP", name: "Tendão patelar", color: "var(--teal)", strengths: "fixação osso-osso", trade: "dor anterior / ajoelhar", path: "M75 92 L75 214", blocks: true },
    { x: 194, code: "FLEX", name: "Flexores", color: "var(--amber)", strengths: "menor dor anterior", trade: "déficit flexor / diâmetro", path: "M242 94 C220 130 260 164 238 214", blocks: false },
    { x: 370, code: "QUAD", name: "Quadríceps", color: "var(--cortical)", strengths: "grande área e espessura", trade: "déficit extensor inicial", path: "M427 84 L427 214", blocks: true },
  ];
  return (
    <svg viewBox="0 0 560 325" preserveAspectRatio="xMidYMid meet" role="img" className={className} xmlns="http://www.w3.org/2000/svg">
      <title>{title ?? "Comparação dos principais autoenxertos para reconstrução do LCA"}</title>
      <text x="280" y="24" {...mono} textAnchor="middle">autoenxertos · escolha compartilhada</text>
      {grafts.map((graft) => (
        <Panel key={graft.code} x={graft.x} y={42} width={164} height={244}>
          <text x={graft.x + 14} y="66" {...mono} fill={graft.color}>{graft.code}</text>
          <text x={graft.x + 14} y="84" {...body}>{graft.name}</text>
          <path d={graft.path} transform={`translate(${graft.x - (graft.x === 18 ? 18 : graft.x === 194 ? 194 : 370)} 0)`} fill="none" stroke={graft.color} strokeWidth="8" strokeLinecap="round" />
          {graft.blocks && (
            <g fill="var(--surface)" stroke={graft.color} strokeWidth="2">
              <rect x={graft.x + 47} y="88" width="22" height="22" rx="3" />
              <rect x={graft.x + 47} y="207" width="22" height="22" rx="3" />
            </g>
          )}
          {!graft.blocks && <path d={`M${graft.x + 43} 102 C${graft.x + 78} 128 ${graft.x + 40} 170 ${graft.x + 76} 208`} fill="none" stroke={graft.color} strokeWidth="4" />}
          <line x1={graft.x + 14} y1="238" x2={graft.x + 150} y2="238" stroke="var(--line)" />
          <text x={graft.x + 14} y="256" {...label}>{graft.strengths}</text>
          <text x={graft.x + 14} y="274" {...label} fill="var(--cortical)">{graft.trade}</text>
        </Panel>
      ))}
      <text x="280" y="310" {...body} textAnchor="middle">Jovem ativo: priorizar autoenxerto; o perfil do paciente define qual deles.</text>
    </svg>
  );
};

export const Tunnels: FC<FigureProps> = ({ className, title, variant }) => {
  const focus = (variant ?? "ambos").toLowerCase();
  const femoralOpacity = focus === "tibial" ? 0.36 : 1;
  const tibialOpacity = focus === "femoral" ? 0.36 : 1;
  return (
    <svg viewBox="0 0 560 335" preserveAspectRatio="xMidYMid meet" role="img" className={className} xmlns="http://www.w3.org/2000/svg">
      <title>{title ?? "Posicionamento anatômico dos túneis femoral e tibial na reconstrução do LCA"}</title>
      <text x="280" y="24" {...mono} textAnchor="middle">túneis · anatomia antes da fixação</text>
      <g opacity={femoralOpacity}>
        <Panel x={18} y={42} width={252} height={248}>
          <text x="34" y="66" {...mono} fill="var(--teal)">FEMORAL · parede lateral</text>
          <path {...bone} d="M55 104 C82 70 174 70 232 105 L226 226 C190 250 102 250 55 218 Z" />
          <path d="M82 116 C116 94 176 96 205 120 C185 130 172 152 170 186 C138 172 112 151 82 116 Z" fill="var(--surface-2, var(--surface))" stroke="var(--line-strong)" strokeWidth="2" />
          <path d="M92 126 C132 109 168 111 198 126" fill="none" stroke="var(--line-strong)" strokeDasharray="5 4" />
          <circle cx="148" cy="151" r="14" fill="var(--teal-tint, var(--surface))" stroke="var(--teal)" strokeWidth="3" />
          <circle cx="181" cy="121" r="12" fill="var(--cortical-tint, var(--surface))" stroke="var(--cortical)" strokeWidth="2" strokeDasharray="5 3" />
          <text x="148" y="178" {...label} textAnchor="middle">anatômico</text>
          <text x="201" y="106" {...label} fill="var(--cortical)">alto / vertical</text>
          <text x="34" y="270" {...label}>posterior à crista intercondilar lateral</text>
        </Panel>
      </g>
      <g opacity={tibialOpacity}>
        <Panel x={290} y={42} width={252} height={248}>
          <text x="306" y="66" {...mono} fill="var(--teal)">TIBIAL · platô superior</text>
          <ellipse cx="416" cy="157" rx="96" ry="66" {...bone} />
          <ellipse cx="377" cy="151" rx="34" ry="25" fill="var(--surface-2, var(--surface))" stroke="var(--line-strong)" />
          <ellipse cx="455" cy="151" rx="34" ry="25" fill="var(--surface-2, var(--surface))" stroke="var(--line-strong)" />
          <path d="M402 137 L416 116 L430 137" fill="var(--surface)" stroke="var(--ink-soft)" strokeWidth="2" />
          <circle cx="416" cy="174" r="13" fill="var(--teal-tint, var(--surface))" stroke="var(--teal)" strokeWidth="3" />
          <circle cx="416" cy="111" r="11" fill="var(--cortical-tint, var(--surface))" stroke="var(--cortical)" strokeWidth="2" strokeDasharray="5 3" />
          <path d="M338 120 L494 120" stroke="var(--amber)" strokeDasharray="5 4" />
          <text x="500" y="116" {...label} textAnchor="end" fill="var(--amber)">linha intermeniscal</text>
          <text x="416" y="206" {...label} textAnchor="middle">anatômico</text>
          <text x="416" y="92" {...label} textAnchor="middle" fill="var(--cortical)">anterior · impacto</text>
          <text x="306" y="270" {...label}>entre raízes anteriores, sem invadir o LCP</text>
        </Panel>
      </g>
      <text x="280" y="318" {...body} textAnchor="middle">Erro femoral deixa instabilidade rotatória; erro tibial pode bloquear a extensão.</text>
    </svg>
  );
};

export const Reconstruction: FC<FigureProps> = ({ className, title, activeStep }) => {
  const step = Math.min(8, Math.max(1, activeStep ?? 6));
  const names = ["preparar", "menisco", "enxerto", "fêmur", "tíbia", "fixar", "lateral", "reabilitar"];
  return (
    <svg viewBox="0 0 580 340" preserveAspectRatio="xMidYMid meet" role="img" className={className} xmlns="http://www.w3.org/2000/svg">
      <title>{title ?? `Reconstrução do LCA — etapa ${step}: ${names[step - 1]}`}</title>
      <text x="290" y="24" {...mono} textAnchor="middle">reconstrução anatômica · etapa {step} de 8</text>
      <line x1="48" y1="65" x2="532" y2="65" stroke="var(--line-strong)" />
      {names.map((name, i) => {
        const x = 48 + i * 69.1;
        const active = i + 1 === step;
        const complete = i + 1 < step;
        return (
          <g key={name}>
            <circle cx={x} cy="65" r={active ? 13 : 10} fill={active ? "var(--teal)" : complete ? "var(--teal-tint, var(--surface))" : "var(--surface)"} stroke={complete || active ? "var(--teal)" : "var(--line-strong)"} strokeWidth="2" />
            <text x={x} y="69" {...mono} textAnchor="middle" fill={active ? "var(--surface)" : complete ? "var(--teal)" : "var(--muted)"}>{i + 1}</text>
            <text x={x} y="92" {...label} textAnchor="middle" fill={active ? "var(--teal)" : "var(--muted)"}>{name}</text>
          </g>
        );
      })}

      <KneeSagittal x={166} y={87} scale={0.72} showAcl={false} />
      <path d="M250 196 C245 212 246 229 253 244" fill="none" stroke="var(--teal)" strokeWidth="7" strokeLinecap="round" />
      <circle cx="250" cy="195" r="8" fill="var(--surface)" stroke="var(--teal)" strokeWidth="3" />
      <circle cx="253" cy="245" r="8" fill="var(--surface)" stroke="var(--teal)" strokeWidth="3" />

      <Panel x={350} y={116} width={198} height={142}>
        <text x="366" y="140" {...mono} fill="var(--teal)">{String(step).padStart(2, "0")} · {names[step - 1].toUpperCase()}</text>
        <text x="366" y="166" {...body}>
          {[
            "joelho quieto e indicação clara",
            "preservar rampa e raízes",
            "autoenxerto adequado ao atleta",
            "inserção femoral anatômica",
            "túnel tibial sem impacto",
            "ciclar, tensionar e testar",
            "reforço seletivo de alto risco",
            "critérios antes do calendário",
          ][step - 1]}
        </text>
        <line x1="366" y1="184" x2="532" y2="184" stroke="var(--line)" />
        <text x="366" y="208" {...label}>controle final</text>
        <text x="366" y="228" {...body}>extensão completa · sem impacto</text>
        <text x="366" y="246" {...body}>Lachman firme · menisco protegido</text>
      </Panel>
      <text x="290" y="320" {...body} textAnchor="middle">O posicionamento do enxerto e o tratamento das lesões associadas definem a estabilidade.</text>
    </svg>
  );
};

export const LateralTenodesis: FC<FigureProps> = ({ className, title }) => (
  <svg viewBox="0 0 560 330" preserveAspectRatio="xMidYMid meet" role="img" className={className} xmlns="http://www.w3.org/2000/svg">
    <title>{title ?? "Tenodese extra-articular lateral associada à reconstrução do LCA"}</title>
    <defs>
      <marker id="lca-let-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M0 0 L10 5 L0 10 Z" fill="var(--teal)" />
      </marker>
    </defs>
    <text x="280" y="24" {...mono} textAnchor="middle">tenodese extra-articular lateral · indicação seletiva</text>
    <Panel x={18} y={42} width={286} height={244}>
      <path {...bone} d="M104 68 C88 94 89 135 105 161 C119 179 121 193 111 214 L194 214 C183 192 186 177 201 157 C219 134 218 93 200 68 Z" />
      <path {...boneSoft} d="M112 222 L190 222 L198 274 L104 274 Z" />
      <circle cx="199" cy="226" r="9" fill="var(--surface)" stroke="var(--ink-soft)" strokeWidth="2" />
      <text x="210" y="230" {...label}>cabeça da fíbula</text>
      <path d="M198 112 C221 144 225 180 198 224" fill="none" stroke="var(--amber)" strokeWidth="5" strokeLinecap="round" />
      <text x="225" y="162" {...label} fill="var(--amber)">lig. colateral lateral</text>
      <path d="M134 68 C118 109 124 162 151 206 C167 232 176 250 182 263" fill="none" stroke="var(--teal)" strokeWidth="10" strokeLinecap="round" opacity="0.35" />
      <path d="M181 263 C168 231 150 218 147 194 C144 174 161 165 194 158 C214 153 228 138 231 119" fill="none" stroke="var(--teal)" strokeWidth="6" strokeLinecap="round" markerEnd="url(#lca-let-arrow)" />
      <circle cx="181" cy="263" r="5" fill="var(--teal)" />
      <text x="75" y="265" {...label}>tubérculo de Gerdy</text>
      <text x="183" y="104" {...label}>fixação proximal</text>
      <text x="34" y="278" {...mono}>faixa do trato iliotibial sob o colateral lateral</text>
    </Panel>
    <Panel x={320} y={42} width={222} height={244}>
      <text x="336" y="68" {...mono} fill="var(--teal)">ALTO RISCO · CONSIDERAR</text>
      {[
        "idade ≤ 25 anos",
        "ressalto rotatório grau ≥ 2",
        "frouxidão generalizada",
        "esporte com mudança de direção",
        "revisão ou falha prévia",
      ].map((item, i) => (
        <g key={item}>
          <circle cx="342" cy={98 + i * 34} r="5" fill="var(--teal)" />
          <text x="356" y={102 + i * 34} {...body}>{item}</text>
        </g>
      ))}
      <line x1="336" y1="245" x2="526" y2="245" stroke="var(--line)" />
      <text x="336" y="266" {...label} fill="var(--cortical)">evitar convergência de túneis</text>
      <text x="336" y="282" {...label} fill="var(--cortical)">e sobre-restrição lateral</text>
    </Panel>
    <text x="280" y="316" {...body} textAnchor="middle">No STABILITY, o benefício ocorreu em jovens com critérios explícitos de alto risco.</text>
  </svg>
);

export const ReturnToSport: FC<FigureProps> = ({ className, title }) => {
  const stages = [
    { x: 38, month: "0–2 sem", name: "joelho quieto", detail: "extensão · derrame" },
    { x: 142, month: "2–12 sem", name: "base de força", detail: "marcha · unipodal" },
    { x: 246, month: "3–6 m", name: "corrida", detail: "força · mecânica" },
    { x: 350, month: "6–9 m", name: "agilidade", detail: "desacelerar · cortar" },
    { x: 454, month: "≥ 9 m", name: "esporte", detail: "exposição gradual" },
  ];
  return (
    <svg viewBox="0 0 560 330" preserveAspectRatio="xMidYMid meet" role="img" className={className} xmlns="http://www.w3.org/2000/svg">
      <title>{title ?? "Retorno ao esporte após reconstrução do LCA guiado por tempo e critérios funcionais"}</title>
      <text x="280" y="24" {...mono} textAnchor="middle">retorno ao esporte · portões cumulativos</text>
      <line x1="52" y1="96" x2="508" y2="96" stroke="var(--line-strong)" strokeWidth="3" />
      {stages.map((stage, i) => (
        <g key={stage.month}>
          <circle cx={stage.x + 18} cy="96" r="13" fill={i === stages.length - 1 ? "var(--teal)" : "var(--surface)"} stroke="var(--teal)" strokeWidth="3" />
          <path d={`M${stage.x + 12} 96 L${stage.x + 17} 101 L${stage.x + 25} 89`} fill="none" stroke={i === stages.length - 1 ? "var(--surface)" : "var(--teal)"} strokeWidth="2" />
          <text x={stage.x + 18} y="66" {...mono} textAnchor="middle" fill={i === stages.length - 1 ? "var(--teal)" : "var(--muted)"}>{stage.month}</text>
          <text x={stage.x + 18} y="129" {...body} textAnchor="middle">{stage.name}</text>
          <text x={stage.x + 18} y="147" {...label} textAnchor="middle">{stage.detail}</text>
        </g>
      ))}

      <Panel x={38} y={176} width={484} height={108}>
        <text x="54" y="200" {...mono} fill="var(--teal)">LIBERAÇÃO ESPORTIVA · CONJUNTO, NÃO TESTE ISOLADO</text>
        {[
          ["≥ 9 meses", 56, 228],
          ["sem dor/derrame", 184, 228],
          ["força ≥ 90%", 344, 228],
          ["saltos ≥ 90%", 56, 258],
          ["movimento adequado", 184, 258],
          ["prontidão psicológica", 344, 258],
        ].map(([item, x, y]) => (
          <g key={String(item)}>
            <rect x={Number(x)} y={Number(y) - 14} width={String(item).length * 6.3 + 20} height="22" rx="4" fill="var(--teal-tint, var(--surface))" stroke="var(--teal)" opacity="0.95" />
            <text x={Number(x) + 10} y={Number(y) + 1} {...label} fill="var(--teal-deep, var(--teal))">{item}</text>
          </g>
        ))}
      </Panel>
      <text x="280" y="315" {...body} textAnchor="middle">Cumprir o tempo sem cumprir os critérios não libera; cumprir testes cedo também não.</text>
    </svg>
  );
};

export const figures: Record<string, FC<FigureProps>> = {
  "lesao-lca:anatomia": Anatomy,
  "lesao-lca:mecanismo": Mechanism,
  "lesao-lca:exame": Exam,
  "lesao-lca:rm-lesoes-associadas": MriAssociated,
  "lesao-lca:enxertos": Grafts,
  "lesao-lca:tuneis": Tunnels,
  "lesao-lca:reconstrucao": Reconstruction,
  "lesao-lca:tenodese-lateral": LateralTenodesis,
  "lesao-lca:retorno-esporte": ReturnToSport,
};
