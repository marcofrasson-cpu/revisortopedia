import type { FC } from "react";
import type { FigureProps } from "../../../types/topic";

const bone = {
  fill: "var(--surface)",
  stroke: "var(--ink-soft)",
  strokeWidth: 1.8,
  strokeLinejoin: "round" as const,
};

const boneBack = {
  fill: "var(--surface-2, var(--surface))",
  stroke: "var(--ink-soft)",
  strokeWidth: 1.4,
  strokeLinejoin: "round" as const,
};

const label = {
  fill: "var(--muted)",
  fontFamily: "var(--font-body, sans-serif)",
  fontSize: 11,
};

const mono = {
  fill: "var(--ink)",
  fontFamily: "var(--font-mono, monospace)",
  fontSize: 11,
};

const corticalStroke = {
  fill: "none",
  stroke: "var(--cortical)",
  strokeWidth: 3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const amberLine = {
  stroke: "var(--amber)",
  strokeWidth: 1.5,
  fill: "none" as const,
};

/* --------------------------------------------------------------------------
   1 · Anatomia e parâmetros radiográficos (AP + perfil)
   ------------------------------------------------------------------------ */
export const Anatomy: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 480 330"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Anatomia do rádio distal e parâmetros radiográficos normais (AP e perfil)"}</title>

    {/* ---- Painel AP ---- */}
    <text x="118" y="26" {...mono} textAnchor="middle">incidência AP</text>

    {/* rádio */}
    <path
      {...bone}
      d="M86 40 L104 40 L120 172 L150 234 L74 262 L58 202 L82 46 Z"
    />
    {/* ulna */}
    <path
      {...boneBack}
      d="M160 52 L176 52 L181 206 C189 215, 189 236, 176 242 L162 242 C153 234, 155 214, 158 206 Z"
    />

    {/* linha articular (inclinação radial) */}
    <line x1="150" y1="234" x2="74" y2="262" stroke="var(--teal)" strokeWidth="3" strokeLinecap="round" />
    {/* referência perpendicular ao eixo */}
    <line x1="150" y1="234" x2="78" y2="234" {...amberLine} strokeDasharray="5 4" />
    <path d="M108 234 A44 44 0 0 1 112 246" {...amberLine} />
    <text x="88" y="228" {...label} fill="var(--amber)">≈ 22°</text>

    {/* altura radial */}
    <line x1="44" y1="262" x2="44" y2="240" stroke="var(--cortical)" strokeWidth="1.5" />
    <line x1="39" y1="262" x2="49" y2="262" stroke="var(--cortical)" />
    <line x1="39" y1="240" x2="49" y2="240" stroke="var(--cortical)" />
    <text x="12" y="256" {...label} fill="var(--cortical)">altura</text>
    <text x="12" y="268" {...label} fill="var(--cortical)">11–12 mm</text>

    {/* variância ulnar */}
    <line x1="168" y1="234" x2="168" y2="242" stroke="var(--amber)" strokeWidth="2" />
    <text x="184" y="240" {...label} fill="var(--amber)">variância ulnar</text>

    <text x="97" y="120" {...label} textAnchor="middle">rádio</text>
    <text x="169" y="150" {...label} textAnchor="middle">ulna</text>
    <text x="70" y="278" {...label}>estiloide radial</text>

    {/* ---- Painel perfil ---- */}
    <text x="358" y="26" {...mono} textAnchor="middle">incidência de perfil</text>

    {/* rádio perfil (volar à esquerda) */}
    <path
      {...bone}
      d="M348 42 L364 42 L360 200 L352 214 L312 226 L306 194 L332 46 Z"
    />
    {/* superfície articular com inclinação volar */}
    <line x1="352" y1="214" x2="312" y2="226" stroke="var(--teal)" strokeWidth="3" strokeLinecap="round" />
    {/* referência perpendicular */}
    <line x1="352" y1="214" x2="316" y2="212" {...amberLine} strokeDasharray="5 4" />
    <path d="M336 213 A20 20 0 0 0 334 223" {...amberLine} />
    <text x="300" y="248" {...label} fill="var(--amber)">inclinação volar ≈ 11°</text>

    <text x="300" y="120" {...label} textAnchor="middle">volar</text>
    <text x="384" y="120" {...label} textAnchor="middle">dorsal</text>
    <path d="M300 128 L318 128" {...amberLine} markerEnd="url(#anatArrow)" />
    <defs>
      <marker id="anatArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M0 0 L10 5 L0 10 Z" fill="var(--amber)" />
      </marker>
    </defs>

    <text x="240" y="316" {...label} textAnchor="middle">
      Restaurar inclinação radial, altura e inclinação volar orienta a redução e a fixação.
    </text>
  </svg>
);

/* --------------------------------------------------------------------------
   2 · Classificação AO/OTA (A extra-articular · B parcial · C completa)
   ------------------------------------------------------------------------ */
export const AoClassification: FC<FigureProps> = ({ className, title, variant }) => {
  const v = (variant ?? "a").toLowerCase();
  const names: Record<string, string> = {
    a: "23-A · extra-articular",
    b: "23-B · articular parcial",
    c: "23-C · articular completa",
  };

  return (
    <svg
      viewBox="0 0 420 300"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `Classificação AO/OTA do rádio distal: ${names[v] ?? v}`}</title>

      {/* rádio distal em perfil, volar à esquerda */}
      <path
        {...bone}
        d="M150 34 L188 34 L184 196 L176 214 L96 228 L86 190 L128 40 Z"
      />
      {/* ulna posterior */}
      <path {...boneBack} d="M198 60 L214 60 L216 200 C224 210, 224 228, 212 234 L200 232 Z" />

      {/* superfície articular */}
      <line x1="176" y1="214" x2="96" y2="228" stroke="var(--ink-soft)" strokeWidth="1.6" />

      {v === "a" && (
        <>
          {/* traço metafisário transverso, poupa a articulação */}
          <path d="M96 176 L184 168" {...corticalStroke} />
          <text x="60" y="176" {...label} fill="var(--cortical)" textAnchor="end">traço</text>
          <text x="60" y="188" {...label} fill="var(--cortical)" textAnchor="end">metafisário</text>
          <text x="150" y="256" {...label} textAnchor="middle">Superfície articular íntegra.</text>
        </>
      )}
      {v === "b" && (
        <>
          {/* fratura articular parcial (Barton volar) — fragmento volar */}
          <path d="M120 200 L104 226" {...corticalStroke} />
          <path
            d="M96 228 L104 226 L120 200 L134 210 L128 224 Z"
            fill="var(--cortical-tint)"
            stroke="var(--cortical)"
            strokeWidth="2"
          />
          <text x="60" y="222" {...label} fill="var(--cortical)" textAnchor="end">fragmento</text>
          <text x="60" y="234" {...label} fill="var(--cortical)" textAnchor="end">articular parcial</text>
          <text x="150" y="256" {...label} textAnchor="middle">Parte da articulação em continuidade com a metáfise.</text>
        </>
      )}
      {v === "c" && (
        <>
          {/* traço metafisário + traço articular = superfície separada da diáfise */}
          <path d="M92 180 L186 174" {...corticalStroke} />
          <path d="M136 176 L132 216" {...corticalStroke} />
          <circle cx="118" cy="196" r="2.5" fill="var(--cortical)" />
          <circle cx="152" cy="192" r="2.5" fill="var(--cortical)" />
          <text x="60" y="180" {...label} fill="var(--cortical)" textAnchor="end">metafisário</text>
          <text x="200" y="250" {...label} fill="var(--cortical)" textAnchor="middle">+ traço articular</text>
          <text x="150" y="266" {...label} textAnchor="middle">Articulação separada da diáfise, frequentemente cominutiva.</text>
        </>
      )}

      <text x="210" y="24" {...mono} textAnchor="middle">{names[v] ?? v}</text>
      <text x="150" y="120" {...label} textAnchor="middle">rádio</text>
    </svg>
  );
};

/* --------------------------------------------------------------------------
   3 · Classificação de Fernandez (mecanismo) — 5 padrões
   ------------------------------------------------------------------------ */
export const FernandezClassification: FC<FigureProps> = ({ className, title, variant }) => {
  const active = (variant ?? "").toLowerCase();
  const panels: { key: string; n: string; name: string }[] = [
    { key: "i", n: "I", name: "flexão" },
    { key: "ii", n: "II", name: "cisalhamento" },
    { key: "iii", n: "III", name: "compressão" },
    { key: "iv", n: "IV", name: "avulsão" },
    { key: "v", n: "V", name: "combinada" },
  ];

  return (
    <svg
      viewBox="0 0 480 250"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? "Classificação de Fernandez do rádio distal, baseada no mecanismo de lesão"}</title>
      <text x="240" y="22" {...mono} textAnchor="middle">Fernandez · mecanismo de lesão</text>

      {panels.map((p, i) => {
        const x = 24 + i * 90;
        const on = active === p.key;
        return (
          <g key={p.key}>
            <rect
              x={x}
              y={38}
              width="82"
              height="150"
              rx="10"
              fill={on ? "var(--teal-tint)" : "var(--surface-2, var(--surface))"}
              stroke={on ? "var(--teal)" : "var(--line-strong)"}
              strokeWidth={on ? 2 : 1.2}
            />
            {/* rádio esquemático */}
            <path
              {...bone}
              d={`M${x + 30} 58 L${x + 46} 58 L${x + 48} 132 L${x + 26} 138 L${x + 24} 62 Z`}
            />
            {/* padrão do traço por mecanismo */}
            {p.key === "i" && (
              <path d={`M${x + 22} 116 L${x + 50} 110`} {...corticalStroke} />
            )}
            {p.key === "ii" && (
              <path d={`M${x + 40} 118 L${x + 26} 138`} {...corticalStroke} />
            )}
            {p.key === "iii" && (
              <>
                <path d={`M${x + 24} 122 L${x + 48} 116`} {...corticalStroke} />
                <path d={`M${x + 33} 118 L${x + 33} 138`} {...corticalStroke} />
              </>
            )}
            {p.key === "iv" && (
              <path
                d={`M${x + 26} 132 l6 4`}
                stroke="var(--cortical)"
                strokeWidth="3"
                strokeLinecap="round"
              />
            )}
            {p.key === "v" && (
              <>
                <path d={`M${x + 22} 112 L${x + 50} 106`} {...corticalStroke} />
                <path d={`M${x + 38} 116 L${x + 27} 138`} {...corticalStroke} />
              </>
            )}
            <text x={x + 41} y={158} {...mono} textAnchor="middle" fill={on ? "var(--teal-deep)" : "var(--ink)"}>
              {p.n}
            </text>
            <text x={x + 41} y={176} {...label} textAnchor="middle">{p.name}</text>
          </g>
        );
      })}

      <text x="240" y="230" {...label} textAnchor="middle">
        I flexão (Colles/Smith) · II cisalhamento (Barton) · III compressão articular · IV avulsão ligamentar · V alta energia
      </text>
    </svg>
  );
};

/* --------------------------------------------------------------------------
   4 · Critérios de instabilidade
   ------------------------------------------------------------------------ */
export const InstabilityCriteria: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 440 300"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Critérios radiográficos de instabilidade do rádio distal"}</title>
    <text x="220" y="24" {...mono} textAnchor="middle">preditores de instabilidade (perfil)</text>

    {/* rádio deslocado dorsalmente, volar à esquerda */}
    <path
      {...bone}
      d="M150 46 L188 46 L184 176 L120 196 L110 160 L128 52 Z"
    />
    {/* fragmento articular distal com báscula dorsal */}
    <path
      {...bone}
      d="M120 196 L184 176 L214 190 L206 214 L146 226 Z"
    />
    {/* ulna */}
    <path {...boneBack} d="M198 70 L214 70 L217 206 C225 216, 225 234, 213 240 L201 238 Z" />

    {/* cominução dorsal (hachurada) */}
    <path
      d="M176 172 L200 186 L196 200 L172 190 Z"
      fill="var(--cortical-tint)"
      stroke="var(--cortical)"
      strokeWidth="2"
    />
    <path d="M178 178 L192 186 M176 186 L190 194" stroke="var(--cortical)" strokeWidth="1" />
    <path d="M212 178 L246 168" stroke="var(--line-strong)" />
    <text x="250" y="170" {...label} fill="var(--cortical)">cominução dorsal</text>

    {/* báscula dorsal (ângulo) */}
    <line x1="120" y1="196" x2="206" y2="214" stroke="var(--teal)" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="120" y1="196" x2="200" y2="196" {...amberLine} strokeDasharray="5 4" />
    <path d="M168 196 A48 48 0 0 0 172 208" {...amberLine} />
    <text x="150" y="256" {...label} fill="var(--amber)">báscula dorsal &gt; 10°</text>

    {/* encurtamento radial */}
    <line x1="240" y1="196" x2="240" y2="230" stroke="var(--cortical)" strokeWidth="1.5" strokeDasharray="4 3" />
    <line x1="235" y1="230" x2="245" y2="230" stroke="var(--cortical)" />
    <text x="250" y="222" {...label} fill="var(--cortical)">encurtamento</text>
    <text x="250" y="234" {...label} fill="var(--cortical)">&gt; 3 mm</text>

    <text x="220" y="286" {...label} textAnchor="middle">
      Cominução dorsal, báscula dorsal e encurtamento — somados à idade — predizem perda de redução.
    </text>
  </svg>
);

/* --------------------------------------------------------------------------
   5 · Via volar (Henry / FCR)
   ------------------------------------------------------------------------ */
export const VolarApproach: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 420 300"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Via volar do flexor radial do carpo (Henry) para o rádio distal"}</title>
    <text x="210" y="24" {...mono} textAnchor="middle">corte axial · face volar acima</text>

    {/* contorno do antebraço distal */}
    <ellipse cx="210" cy="164" rx="150" ry="96" fill="var(--surface-2, var(--surface))" stroke="var(--line-strong)" strokeWidth="1.4" />

    {/* rádio e ulna */}
    <ellipse cx="150" cy="196" rx="42" ry="30" {...bone} />
    <ellipse cx="286" cy="192" rx="30" ry="24" {...boneBack} />
    <text x="150" y="200" {...label} textAnchor="middle">rádio</text>
    <text x="286" y="196" {...label} textAnchor="middle">ulna</text>

    {/* pronador quadrado sobre o rádio */}
    <path
      d="M112 168 C150 150, 220 150, 262 172"
      fill="none"
      stroke="var(--ink-soft)"
      strokeWidth="14"
      strokeLinecap="round"
      opacity="0.4"
    />
    <text x="196" y="150" {...label}>pronador quadrado</text>

    {/* FCR (tendão) */}
    <circle cx="150" cy="108" r="9" fill="var(--surface)" stroke="var(--ink-soft)" strokeWidth="1.6" />
    <text x="150" y="88" {...mono} textAnchor="middle">FCR</text>

    {/* artéria radial (lateral ao FCR) */}
    <circle cx="108" cy="122" r="6" fill="var(--cortical)" />
    <text x="70" y="112" {...label} fill="var(--cortical)">a. radial</text>

    {/* nervo mediano (medial/profundo) */}
    <circle cx="188" cy="120" r="7" fill="var(--amber)" />
    <text x="200" y="112" {...label} fill="var(--amber)">n. mediano</text>

    {/* intervalo de acesso: abrir bainha do FCR, afastar ulnarmente */}
    <path d="M150 100 L150 168" stroke="var(--teal)" strokeWidth="2.5" strokeDasharray="6 4" />
    <path d="M150 132 C170 138, 176 150, 172 164" fill="none" stroke="var(--teal)" strokeWidth="2" markerEnd="url(#volarArrow)" />
    <defs>
      <marker id="volarArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M0 0 L10 5 L0 10 Z" fill="var(--teal)" />
      </marker>
    </defs>
    <text x="196" y="182" {...label} fill="var(--teal)">afastar FCR ulnarmente</text>

    <text x="210" y="286" {...label} textAnchor="middle">
      Abrir a bainha do FCR protege a artéria radial (lateral) e o nervo mediano (ulnar/profundo); desinserir o pronador quadrado.
    </text>
  </svg>
);

/* --------------------------------------------------------------------------
   6 · Placa volar bloqueada
   ------------------------------------------------------------------------ */
export const VolarPlate: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 420 300"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Placa volar bloqueada no rádio distal, proximal à linha watershed"}</title>
    <text x="210" y="24" {...mono} textAnchor="middle">perfil · placa volar bloqueada</text>

    {/* rádio em perfil, volar à esquerda */}
    <path
      {...bone}
      d="M150 40 L188 40 L184 196 L176 214 L96 228 L86 190 L128 46 Z"
    />
    <line x1="176" y1="214" x2="96" y2="228" stroke="var(--ink-soft)" strokeWidth="1.6" />

    {/* linha watershed (rebordo volar distal) */}
    <circle cx="104" cy="220" r="4" fill="none" stroke="var(--amber)" strokeWidth="2" />
    <path d="M104 220 L60 232" stroke="var(--line-strong)" />
    <text x="56" y="236" {...label} fill="var(--amber)" textAnchor="end">linha watershed</text>

    {/* placa volar (na cortical volar / esquerda), sem ultrapassar a watershed */}
    <path
      d="M120 214 C112 200, 116 120, 128 70"
      fill="none"
      stroke="var(--teal)"
      strokeWidth="7"
      strokeLinecap="round"
    />
    <text x="70" y="150" {...label} fill="var(--teal)" textAnchor="end">placa</text>
    <text x="70" y="162" {...label} fill="var(--teal)" textAnchor="end">volar</text>

    {/* parafusos bloqueados distais subcondrais (não ultrapassam a cortical dorsal) */}
    {[
      { y: 200, len: 44 },
      { y: 186, len: 50 },
    ].map((s) => (
      <g key={s.y}>
        <line x1="122" y1={s.y} x2={122 + s.len} y2={s.y - 4} stroke="var(--teal)" strokeWidth="3" strokeLinecap="round" />
        <circle cx="122" cy={s.y} r="3.5" fill="var(--teal)" />
      </g>
    ))}
    <text x="196" y="176" {...label} fill="var(--teal)">parafusos subcondrais</text>

    {/* parafusos diafisários proximais */}
    {[92, 108].map((y) => (
      <line key={y} x1="124" y1={y} x2="176" y2={y - 3} stroke="var(--teal)" strokeWidth="3" strokeLinecap="round" />
    ))}

    {/* alerta cortical dorsal */}
    <path d="M184 190 L214 182" stroke="var(--line-strong)" />
    <text x="218" y="184" {...label} fill="var(--cortical)">não perfurar a cortical dorsal</text>

    <text x="210" y="286" {...label} textAnchor="middle">
      Placa proximal à watershed; parafusos distais subcondrais que sustentam a articulação sem penetrar a cortical dorsal nem a ARUD.
    </text>
  </svg>
);

/* --------------------------------------------------------------------------
   7 · Redução fechada e imobilização gessada
   ------------------------------------------------------------------------ */
export const ClosedReduction: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 460 290"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Redução fechada e imobilização gessada com moldagem de três pontos"}</title>

    {/* Painel 1 — tração e desimpactação */}
    <text x="115" y="26" {...mono} textAnchor="middle">1 · tração e desimpactação</text>
    <path {...bone} d="M84 44 L102 44 L112 150 L86 176 L58 150 L70 48 Z" />
    <path {...bone} d="M86 176 L112 150 L150 176 L138 204 L96 208 Z" />
    <path d="M120 210 C150 224, 176 224, 200 214" fill="none" stroke="var(--teal)" strokeWidth="3" markerEnd="url(#redArrow)" />
    <path d="M78 44 C64 34, 60 26, 66 18" fill="none" stroke="var(--teal)" strokeWidth="3" markerEnd="url(#redArrow)" />
    <text x="115" y="238" {...label} textAnchor="middle">tração longitudinal</text>

    {/* Painel 2 — translação volar e flexão */}
    <text x="340" y="26" {...mono} textAnchor="middle">2 · moldagem de três pontos</text>
    {/* antebraço + gesso */}
    <path {...boneBack} d="M266 60 L300 60 L318 168 L300 196 L262 190 L252 150 Z" />
    <path {...bone} d="M262 190 L300 196 L346 196 L340 216 L280 214 Z" />
    {/* gesso contornando */}
    <path
      d="M244 56 C236 110, 236 168, 258 210 C300 236, 360 232, 392 200 C400 150, 396 96, 372 58 C332 40, 280 40, 244 56 Z"
      fill="none"
      stroke="var(--line-strong)"
      strokeWidth="10"
      opacity="0.55"
      strokeLinejoin="round"
    />
    {/* três pontos de pressão */}
    <circle cx="250" cy="120" r="6" fill="var(--amber)" />
    <circle cx="360" cy="90" r="6" fill="var(--amber)" />
    <circle cx="372" cy="196" r="6" fill="var(--amber)" />
    <path d="M250 120 l-14 -6 M360 90 l12 -10 M372 196 l14 8" stroke="var(--amber)" strokeWidth="2" strokeLinecap="round" />
    <text x="340" y="238" {...label} textAnchor="middle" fill="var(--amber)">pontos de pressão</text>

    <defs>
      <marker id="redArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M0 0 L10 5 L0 10 Z" fill="var(--teal)" />
      </marker>
    </defs>

    <text x="230" y="272" {...label} textAnchor="middle">
      Desimpactar com tração, reproduzir e reverter o mecanismo e moldar em três pontos; controlar a redução por radiografia.
    </text>
  </svg>
);

export const figures: Record<string, FC<FigureProps>> = {
  "fratura-radio-distal:anatomia": Anatomy,
  "fratura-radio-distal:classificacao-ao": AoClassification,
  "fratura-radio-distal:fernandez": FernandezClassification,
  "fratura-radio-distal:instabilidade": InstabilityCriteria,
  "fratura-radio-distal:via-volar": VolarApproach,
  "fratura-radio-distal:placa-volar": VolarPlate,
  "fratura-radio-distal:reducao-gesso": ClosedReduction,
};
