import type { FC, ReactNode } from "react";
import type { FigureProps } from "../../../types/topic";

const mono = {
  fill: "var(--ink)",
  fontFamily: "var(--font-mono, monospace)",
  fontSize: 11,
};
const body = {
  fill: "var(--ink)",
  fontFamily: "var(--font-body, sans-serif)",
  fontSize: 12,
};
const muted = {
  fill: "var(--muted)",
  fontFamily: "var(--font-body, sans-serif)",
  fontSize: 10,
};

function Panel({
  x,
  title,
  active = false,
  children,
}: {
  x: number;
  title: string;
  active?: boolean;
  children: ReactNode;
}) {
  return (
    <g opacity={active ? 1 : undefined}>
      <rect
        x={x}
        y="52"
        width="202"
        height="242"
        rx="8"
        fill="var(--surface-2, var(--surface))"
        stroke={active ? "var(--teal)" : "var(--line)"}
        strokeWidth={active ? 2.5 : 1}
      />
      <text x={x + 101} y="79" textAnchor="middle" {...mono}>
        {title}
      </text>
      {children}
    </g>
  );
}

export const Deformity: FC<FigureProps> = ({ className, title }) => (
  <svg viewBox="0 0 680 340" role="img" className={className}>
    <title>{title ?? "Componentes da deformidade progressiva do pé colapsado"}</title>
    <text x="340" y="25" textAnchor="middle" {...mono}>
      DEFORMIDADE TRIDIMENSIONAL EM CARGA
    </text>

    <Panel x={25} title="RETROPÉ">
      <path
        d="M126 102 L126 232"
        stroke="var(--ink-soft)"
        strokeWidth="18"
        strokeLinecap="round"
      />
      <path d="M126 184 L155 253" stroke="var(--cortical)" strokeWidth="15" strokeLinecap="round" />
      <line x1="126" y1="98" x2="126" y2="268" stroke="var(--teal)" strokeDasharray="6 5" />
      <path d="M126 242 A42 42 0 0 0 154 235" fill="none" stroke="var(--amber)" strokeWidth="2" />
      <text x="126" y="280" textAnchor="middle" {...body}>
        valgo do calcâneo
      </text>
    </Panel>

    <Panel x={239} title="MEDIOPÉ">
      <path
        d="M273 190 Q338 124 409 188"
        fill="none"
        stroke="var(--ink-soft)"
        strokeWidth="20"
        strokeLinecap="round"
      />
      <path d="M320 159 Q350 183 385 179" fill="none" stroke="var(--cortical)" strokeWidth="6" />
      <path d="M350 153 A48 48 0 0 1 397 176" fill="none" stroke="var(--amber)" strokeWidth="2" />
      <text x="340" y="228" textAnchor="middle" {...body}>
        abdução e descoberta
      </text>
      <text x="340" y="247" textAnchor="middle" {...muted}>
        talonavicular
      </text>
    </Panel>

    <Panel x={453} title="COLUNA MEDIAL">
      <line x1="482" y1="230" x2="627" y2="230" stroke="var(--line-strong)" />
      <path
        d="M485 218 Q535 161 628 213"
        fill="none"
        stroke="var(--ink-soft)"
        strokeWidth="18"
        strokeLinecap="round"
      />
      <path d="M540 182 L592 209" stroke="var(--cortical)" strokeWidth="5" />
      <path d="M536 207 A32 32 0 0 1 560 187" fill="none" stroke="var(--amber)" strokeWidth="2" />
      <text x="554" y="260" textAnchor="middle" {...body}>
        supinação residual
      </text>
      <text x="554" y="279" textAnchor="middle" {...muted}>
        medir após corrigir o retropé
      </text>
    </Panel>

    <text x="340" y="323" textAnchor="middle" {...muted}>
      Cada componente deve ser testado quanto à flexibilidade e tratado separadamente.
    </text>
  </svg>
);

const classes = [
  ["A", "Valgo do", "retropé"],
  ["B", "Abdução do", "mediopé"],
  ["C", "Coluna", "medial"],
  ["D", "Subluxação", "peritalar"],
  ["E", "Tornozelo", "em valgo"],
] as const;

export const Classification: FC<FigureProps> = ({ className, title, variant }) => {
  const selected = variant?.toUpperCase();

  return (
    <svg viewBox="0 0 680 330" role="img" className={className}>
      <title>{title ?? "Classificação atual da deformidade progressiva do pé colapsado"}</title>
      <text x="340" y="25" textAnchor="middle" {...mono}>
        CLASSES A-E · ESTÁGIO 1 FLEXÍVEL / ESTÁGIO 2 RÍGIDO
      </text>
      {classes.map(([code, line1, line2], index) => {
        const x = 22 + index * 132;
        const active = selected === code;
        return (
          <g key={code} opacity={selected && !active ? 0.28 : 1}>
            <rect
              x={x}
              y="52"
              width="108"
              height="200"
              rx="8"
              fill="var(--surface-2, var(--surface))"
              stroke={active ? "var(--teal)" : "var(--line)"}
              strokeWidth={active ? 3 : 1}
            />
            <circle
              cx={x + 54}
              cy="95"
              r="24"
              fill="var(--surface)"
              stroke={code === "E" ? "var(--cortical)" : "var(--teal)"}
              strokeWidth="3"
            />
            <text x={x + 54} y="100" textAnchor="middle" {...mono}>
              {code}
            </text>
            <text x={x + 54} y="145" textAnchor="middle" {...body}>
              {line1}
            </text>
            <text x={x + 54} y="164" textAnchor="middle" {...body}>
              {line2}
            </text>
            <path
              d={`M${x + 25} 210 Q${x + 54} ${184 + index * 4} ${x + 83} 210`}
              fill="none"
              stroke="var(--amber)"
              strokeWidth="4"
            />
            <text x={x + 54} y="235" textAnchor="middle" {...muted}>
              componente independente
            </text>
          </g>
        );
      })}
      <text x="340" y="286" textAnchor="middle" {...body}>
        Classes coexistem; flexibilidade e rigidez são definidas para cada componente.
      </text>
      <text x="340" y="308" textAnchor="middle" {...muted}>
        O nome atual reconhece falha tendínea, ligamentar e óssea no mesmo espectro.
      </text>
    </svg>
  );
};

export const Imaging: FC<FigureProps> = ({ className, title }) => {
  const studies = [
    { x: 24, label: "AP EM CARGA", note: "cobertura talonavicular", type: "ap" },
    { x: 244, label: "PERFIL EM CARGA", note: "eixo tálus-M1", type: "profile" },
    { x: 464, label: "AXIAL DO RETROPÉ", note: "eixo calcâneo-tíbia", type: "hindfoot" },
  ];

  return (
    <svg viewBox="0 0 680 340" role="img" className={className}>
      <title>{title ?? "Radiografias em carga na deformidade progressiva do pé colapsado"}</title>
      <text x="340" y="25" textAnchor="middle" {...mono}>
        ALINHAMENTO SE DEFINE COM RADIOGRAFIAS BILATERAIS EM CARGA
      </text>
      {studies.map(({ x, label, note, type }) => (
        <g key={type}>
          <rect x={x} y="50" width="192" height="230" rx="8" fill="#101820" stroke="var(--line)" />
          <text x={x + 14} y="75" {...mono} fill="#b6c7d6">
            {label}
          </text>
          {type === "ap" && (
            <>
              <path d={`M${x + 24} 197 Q${x + 92} 102 ${x + 168} 188`} fill="none" stroke="#d5e1eb" strokeWidth="16" />
              <line x1={x + 90} y1="119" x2={x + 151} y2="95" stroke="var(--teal)" strokeWidth="3" />
              <path d={`M${x + 91} 120 A58 58 0 0 1 ${x + 151} 96`} fill="none" stroke="var(--amber)" strokeWidth="2" />
            </>
          )}
          {type === "profile" && (
            <>
              <path d={`M${x + 20} 207 C${x + 72} 128 ${x + 146} 143 ${x + 172} 201`} fill="none" stroke="#d5e1eb" strokeWidth="16" />
              <line x1={x + 43} y1="114" x2={x + 164} y2="199" stroke="var(--teal)" strokeWidth="3" />
              <line x1={x + 42} y1="173" x2={x + 162} y2="201" stroke="var(--amber)" strokeWidth="3" />
            </>
          )}
          {type === "hindfoot" && (
            <>
              <line x1={x + 92} y1="99" x2={x + 92} y2="230" stroke="#d5e1eb" strokeWidth="17" />
              <line x1={x + 92} y1="172" x2={x + 137} y2="239" stroke="var(--cortical)" strokeWidth="8" />
              <line x1={x + 92} y1="95" x2={x + 92} y2="246" stroke="var(--teal)" strokeDasharray="6 5" />
            </>
          )}
          <text x={x + 96} y="260" textAnchor="middle" {...muted} fill="#9eacb8">
            {note}
          </text>
        </g>
      ))}
      <text x="340" y="316" textAnchor="middle" {...body}>
        Incluir o tornozelo quando houver inclinação talar ou suspeita de insuficiência do deltoide.
      </text>
    </svg>
  );
};

export const figures: Record<string, FC<FigureProps>> = {
  "ruptura-tendao-tibial-posterior:deformidade-pcfd": Deformity,
  "ruptura-tendao-tibial-posterior:classificacao-pcfd": Classification,
  "ruptura-tendao-tibial-posterior:imagem-carga": Imaging,
};
