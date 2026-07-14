import type { FC } from "react";
import type { FigureProps } from "../../../types/topic";

/* ============================================================================
   Figuras originais (line-art, 2 tons) para Fratura fisária (Salter-Harris).
   Sem reprodução de material protegido — redesenho esquemático.
   Convenção de cor (somente via CSS var):
     osso            stroke var(--ink-soft)  fill var(--surface)
     fise/cartilagem stroke var(--teal)
     traço de fratura stroke var(--cortical)
     medidas/ângulos  var(--amber)
   ========================================================================== */

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

const fractureStroke = {
  fill: "none",
  stroke: "var(--cortical)",
  strokeWidth: 3.2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/* ---------------------------------------------------------------------------
   Base compartilhada: extremidade de osso longo (epífise · fise · metáfise)
   Usada pelos esquemas de classificação e de fixação.
   -------------------------------------------------------------------------- */
function BoneEnd({
  cx = 220,
  physisTop = 168,
  physisBottom = 184,
}: {
  cx?: number;
  physisTop?: number;
  physisBottom?: number;
}) {
  const left = cx - 66;
  const right = cx + 66;
  return (
    <g>
      {/* metáfise + diáfise */}
      <path
        {...bone}
        d={`M${cx - 58} 300 C${cx - 74} 256, ${cx - 74} 214, ${left} ${physisBottom}
          L${right} ${physisBottom} C${cx + 74} 214, ${cx + 74} 256, ${cx + 58} 300 Z`}
      />
      {/* linha de calcificação provisória (borda metafisária da fise) */}
      <line
        x1={left}
        y1={physisBottom}
        x2={right}
        y2={physisBottom}
        stroke="var(--ink-soft)"
        strokeWidth="1.2"
      />
      {/* fise (placa de crescimento) */}
      <rect
        x={left}
        y={physisTop}
        width={right - left}
        height={physisBottom - physisTop}
        rx="4"
        fill="var(--teal)"
        opacity="0.22"
      />
      <rect
        x={left}
        y={physisTop}
        width={right - left}
        height={physisBottom - physisTop}
        rx="4"
        fill="none"
        stroke="var(--teal)"
        strokeWidth="1.6"
      />
      {/* epífise */}
      <path
        {...bone}
        d={`M${left} ${physisTop} C${cx - 74} 128, ${cx - 44} 96, ${cx} 94
          C${cx + 44} 96, ${cx + 74} 128, ${right} ${physisTop} Z`}
      />
      {/* cartilagem articular */}
      <path
        d={`M${cx - 52} 108 C${cx - 22} 90, ${cx + 22} 90, ${cx + 52} 108`}
        fill="none"
        stroke="var(--teal)"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </g>
  );
}

/* ---------------------------------------------------------------------------
   1. Anatomia da fise — zonas e plano de fraqueza
   -------------------------------------------------------------------------- */
export const Anatomy: FC<FigureProps> = ({ className, title }) => {
  const left = 150;
  const right = 302;
  return (
    <svg
      viewBox="0 0 470 330"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? "Anatomia da fise: zonas de crescimento e plano de fraqueza"}</title>

      {/* epífise */}
      <path
        {...bone}
        d={`M${left} 152 C142 108, 170 72, 226 70 C282 72, 310 108, ${right} 152 Z`}
      />
      <path
        d="M162 100 C186 74, 266 74, 290 100"
        fill="none"
        stroke="var(--teal)"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <ellipse cx="226" cy="122" rx="36" ry="21" {...boneBack} />

      {/* fise: banda com zonas */}
      <rect x={left} y="152" width={right - left} height="52" fill="var(--teal)" opacity="0.14" />
      {/* zona hipertrófica destacada (plano de clivagem) */}
      <rect x={left} y="180" width={right - left} height="15" fill="var(--amber)" opacity="0.20" />
      {[164, 180, 195].map((y) => (
        <line key={y} x1={left} y1={y} x2={right} y2={y} stroke="var(--teal)" strokeWidth="1.1" strokeDasharray="4 3" />
      ))}
      <rect x={left} y="152" width={right - left} height="52" fill="none" stroke="var(--teal)" strokeWidth="1.6" />

      {/* metáfise com esboço trabecular */}
      <path {...bone} d={`M${left} 204 C146 250, 150 288, 158 310 L294 310 C302 288, 306 250, ${right} 204 Z`} />
      {[172, 200, 228].map((x) => (
        <line key={x} x1={x} y1="212" x2={x} y2="300" stroke="var(--ink-soft)" strokeWidth="0.9" opacity="0.5" />
      ))}
      <line x1={left} y1="204" x2={right} y2="204" stroke="var(--ink-soft)" strokeWidth="1.2" />

      {/* rótulos */}
      <path d="M300 88 L318 82" stroke="var(--line-strong)" />
      <text x="322" y="84" {...label} fill="var(--teal)">cartilagem articular</text>
      <path d="M258 122 L318 116" stroke="var(--line-strong)" />
      <text x="322" y="118" {...label}>centro de ossificação epifisário</text>
      <path d="M302 160 L322 156" stroke="var(--line-strong)" />
      <text x="326" y="158" {...label} fill="var(--teal)">zona proliferativa</text>
      <path d="M302 188 L322 188" stroke="var(--line-strong)" />
      <text x="326" y="190" {...label} fill="var(--amber)">zona hipertrófica · fraqueza</text>
      <path d="M302 204 L322 214" stroke="var(--line-strong)" />
      <text x="326" y="217" {...label}>calcificação provisória</text>
      <path d="M300 250 L322 254" stroke="var(--line-strong)" />
      <text x="326" y="256" {...label}>metáfise</text>

      <text x="226" y="34" {...mono} textAnchor="middle">plano de clivagem da fise</text>
      <text x="235" y="326" {...label} textAnchor="middle">
        A fise rompe-se pela zona hipertrófica, poupando as camadas germinativas quando não há esmagamento.
      </text>
    </svg>
  );
};

/* ---------------------------------------------------------------------------
   2. Classificação de Salter-Harris I–V
   -------------------------------------------------------------------------- */
export const SalterHarris: FC<FigureProps> = ({ className, title, variant }) => {
  const v = (variant ?? "i").toLowerCase();
  const names: Record<string, string> = {
    i: "TIPO I",
    ii: "TIPO II",
    iii: "TIPO III",
    iv: "TIPO IV",
    v: "TIPO V",
  };
  const captions: Record<string, string> = {
    i: "Separação pura pela fise, sem fragmento ósseo.",
    ii: "Fise + fragmento metafisário (Thurston-Holland) — o mais comum.",
    iii: "Fise + epífise até a superfície articular — intra-articular.",
    iv: "Traço único cruzando metáfise, fise e epífise — intra-articular.",
    v: "Esmagamento axial da fise; diagnóstico muitas vezes retrospectivo.",
  };
  const cx = 210;
  const left = cx - 66;
  const right = cx + 66;

  return (
    <svg
      viewBox="0 0 430 320"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `Salter-Harris ${names[v] ?? v}`}</title>

      <BoneEnd cx={cx} physisTop={168} physisBottom={184} />

      {v === "i" && (
        <>
          <line x1={left} y1="176" x2={right} y2="176" {...fractureStroke} />
          <path d="M250 150 C268 154, 276 160, 278 172" fill="none" stroke="var(--cortical)" strokeWidth="2" markerEnd="url(#shArrowRed)" />
          <text x="300" y="150" {...label} fill="var(--cortical)">deslize epifisário</text>
        </>
      )}

      {v === "ii" && (
        <>
          <path d={`M${left} 176 L${cx + 8} 176 L${cx + 42} 250`} {...fractureStroke} />
          <text x="300" y="238" {...label} fill="var(--cortical)">fragmento</text>
          <text x="300" y="252" {...label} fill="var(--cortical)">metafisário</text>
        </>
      )}

      {v === "iii" && (
        <>
          <path d={`M${left} 176 L${cx - 6} 176 L${cx - 6} 100`} {...fractureStroke} />
          <text x="300" y="120" {...label} fill="var(--cortical)">traço articular</text>
          <text x="300" y="134" {...label} fill="var(--cortical)">na epífise</text>
        </>
      )}

      {v === "iv" && (
        <>
          <path d={`M${cx + 2} 100 L${cx + 6} 176 L${cx + 24} 256`} {...fractureStroke} />
          <text x="300" y="150" {...label} fill="var(--cortical)">cruza os</text>
          <text x="300" y="164" {...label} fill="var(--cortical)">três compartimentos</text>
        </>
      )}

      {v === "v" && (
        <>
          <rect x={left} y="172" width={right - left} height="8" fill="var(--cortical)" opacity="0.28" />
          <path d="M188 120 L188 158" stroke="var(--amber)" strokeWidth="3" markerEnd="url(#shArrowAmber)" />
          <path d="M232 120 L232 158" stroke="var(--amber)" strokeWidth="3" markerEnd="url(#shArrowAmber)" />
          <text x="300" y="176" {...label} fill="var(--amber)">compressão axial</text>
        </>
      )}

      <defs>
        <marker id="shArrowRed" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 Z" fill="var(--cortical)" />
        </marker>
        <marker id="shArrowAmber" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 Z" fill="var(--amber)" />
        </marker>
      </defs>

      <rect x="150" y="18" width="120" height="26" rx="8" fill="var(--teal-tint, var(--surface-2, var(--surface)))" />
      <text x="210" y="35" {...mono} textAnchor="middle">{names[v] ?? v}</text>
      <text x="215" y="308" {...label} textAnchor="middle">{captions[v] ?? ""}</text>
    </svg>
  );
};

/* ---------------------------------------------------------------------------
   3. Barra fisária e deformidade
   -------------------------------------------------------------------------- */
export const PhysealBar: FC<FigureProps> = ({ className, title }) => {
  const cx = 190;
  const left = cx - 66;
  const right = cx + 66;
  return (
    <svg
      viewBox="0 0 440 320"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? "Barra fisária periférica com deformidade angular progressiva"}</title>

      {/* metáfise */}
      <path {...bone} d={`M${cx - 58} 300 C${cx - 74} 256, ${cx - 74} 214, ${left} 190 L${right} 190 C${cx + 74} 214, ${cx + 74} 256, ${cx + 58} 300 Z`} />
      {/* fise: aberta de um lado, ponte óssea do outro */}
      <rect x={cx - 6} y="172" width={right - (cx - 6)} height="18" fill="var(--teal)" opacity="0.22" />
      <rect x={cx - 6} y="172" width={right - (cx - 6)} height="18" fill="none" stroke="var(--teal)" strokeWidth="1.6" />
      {/* barra óssea (ponte) periférica */}
      <path d={`M${left} 172 L${cx - 6} 172 L${cx - 6} 190 L${left} 190 Z`} fill="var(--ink-soft)" opacity="0.55" />
      {/* epífise inclinada pela ancoragem da barra */}
      <path
        {...bone}
        d={`M${left} 172 C${cx - 74} 132, ${cx - 40} 104, ${cx + 6} 108
          C${cx + 46} 112, ${cx + 74} 138, ${right} 172 Z`}
      />
      <path d={`M${cx - 44} 118 C${cx - 14} 100, ${cx + 30} 100, ${cx + 52} 122`} fill="none" stroke="var(--teal)" strokeWidth="5" strokeLinecap="round" />

      {/* seta de angulação */}
      <path d={`M${cx + 40} 96 C${cx + 66} 108, ${cx + 78} 134, ${cx + 80} 160`} fill="none" stroke="var(--amber)" strokeWidth="2.5" markerEnd="url(#barArrow)" />
      <defs>
        <marker id="barArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 Z" fill="var(--amber)" />
        </marker>
      </defs>

      <path d={`M${left + 6} 181 L${left - 18} 181`} stroke="var(--line-strong)" />
      <text x="60" y="184" {...label} textAnchor="middle" fill="var(--ink)">barra óssea</text>
      <text x="60" y="198" {...label} textAnchor="middle">(ponte)</text>
      <path d={`M${cx + 40} 181 L${cx + 96} 181`} stroke="var(--line-strong)" />
      <text x="360" y="184" {...label} textAnchor="middle" fill="var(--teal)">fise ainda</text>
      <text x="360" y="198" {...label} textAnchor="middle" fill="var(--teal)">com crescimento</text>
      <text x="330" y="120" {...label} fill="var(--amber)">deformidade angular</text>

      <text x="210" y="30" {...mono} textAnchor="middle">tethering fisário</text>
      <text x="220" y="316" {...label} textAnchor="middle">
        Barra periférica → angulação progressiva; barra central → encurtamento com fise em cabana.
      </text>
    </svg>
  );
};

/* ---------------------------------------------------------------------------
   4. Redução gentil e periósteo interposto
   -------------------------------------------------------------------------- */
export const Reduction: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 460 300"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Redução gentil: periósteo interposto mantém abertura fisária"}</title>

    {[
      { x: 116, label: "1 · periósteo interposto", gap: true },
      { x: 344, label: "2 · redução congruente", gap: false },
    ].map((p) => {
      const left = p.x - 46;
      const right = p.x + 46;
      const shift = p.gap ? 14 : 0;
      return (
        <g key={p.x}>
          {/* metáfise */}
          <path {...bone} d={`M${p.x - 40} 250 C${p.x - 52} 218, ${p.x - 52} 190, ${left} 176 L${right} 176 C${p.x + 52} 190, ${p.x + 52} 218, ${p.x + 40} 250 Z`} />
          {/* fise */}
          <rect x={left} y="164" width={right - left} height="12" fill="var(--teal)" opacity="0.22" stroke="var(--teal)" strokeWidth="1.4" />
          {/* epífise (deslocada no painel 1) */}
          <path {...bone} d={`M${left + shift} 164 C${p.x - 52 + shift} 130, ${p.x - 28 + shift} 108, ${p.x + shift} 106 C${p.x + 28 + shift} 108, ${p.x + 52 + shift} 130, ${right + shift} 164 Z`} />
          {p.gap ? (
            <>
              {/* periósteo dobrado dentro da fise */}
              <path d={`M${right} 176 C${right - 6} 170, ${right - 4} 166, ${right + shift} 164`} fill="none" stroke="var(--amber)" strokeWidth="3.5" strokeLinecap="round" />
              <line x1={right} y1="170" x2={right + shift} y2="170" stroke="var(--amber)" strokeWidth="1.4" strokeDasharray="3 2" />
              <text x={p.x + 4} y="292" {...label} textAnchor="middle" fill="var(--amber)">gap &gt; 3 mm</text>
            </>
          ) : (
            <path d={`M${left} 170 L${right} 170`} fill="none" stroke="var(--teal)" strokeWidth="1.4" />
          )}
          <text x={p.x} y="34" {...mono} textAnchor="middle">{p.label}</text>
        </g>
      );
    })}

    {/* seta entre painéis */}
    <path d="M188 172 C214 160, 236 160, 262 172" fill="none" stroke="var(--teal)" strokeWidth="3" markerEnd="url(#redArrow)" />
    <defs>
      <marker id="redArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M0 0 L10 5 L0 10 Z" fill="var(--teal)" />
      </marker>
    </defs>

    <text x="230" y="286" {...label} textAnchor="middle">
      Uma redução suave; manipulações repetidas e forçadas lesam a fise. Gap persistente sugere periósteo interposto.
    </text>
  </svg>
);

/* ---------------------------------------------------------------------------
   5. Fixação de fraturas articulares (SH III e IV)
   -------------------------------------------------------------------------- */
export const Fixation: FC<FigureProps> = ({ className, title, variant }) => {
  const iv = (variant ?? "iii").toLowerCase() === "iv";
  const cx = 210;
  return (
    <svg
      viewBox="0 0 430 320"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `Fixação anatômica Salter-Harris ${iv ? "IV" : "III"} sem cruzar a fise`}</title>

      <BoneEnd cx={cx} physisTop={168} physisBottom={184} />

      {/* traço reduzido anatomicamente (fino, tracejado) */}
      {iv ? (
        <path d={`M${cx + 2} 102 L${cx + 6} 176 L${cx + 24} 252`} fill="none" stroke="var(--cortical)" strokeWidth="1.4" strokeDasharray="4 3" />
      ) : (
        <path d={`M${cx - 66} 176 L${cx - 6} 176 L${cx - 6} 102`} fill="none" stroke="var(--cortical)" strokeWidth="1.4" strokeDasharray="4 3" />
      )}

      {/* parafuso epífise-epífise (paralelo à fise) */}
      <g>
        <line x1={cx - 40} y1="132" x2={cx + 40} y2="132" stroke="var(--ink-soft)" strokeWidth="4" strokeLinecap="round" />
        <circle cx={cx - 40} cy="132" r="4.5" {...boneBack} />
        {[cx - 30, cx - 18, cx - 6, cx + 6, cx + 18, cx + 30].map((x) => (
          <line key={x} x1={x} y1="128" x2={x} y2="136" stroke="var(--surface)" strokeWidth="1.1" />
        ))}
      </g>

      {/* parafuso metáfise-metáfise apenas no tipo IV */}
      {iv && (
        <g>
          <line x1={cx - 40} y1="228" x2={cx + 40} y2="228" stroke="var(--ink-soft)" strokeWidth="4" strokeLinecap="round" />
          <circle cx={cx - 40} cy="228" r="4.5" {...boneBack} />
          {[cx - 30, cx - 18, cx - 6, cx + 6, cx + 18, cx + 30].map((x) => (
            <line key={x} x1={x} y1="224" x2={x} y2="232" stroke="var(--surface)" strokeWidth="1.1" />
          ))}
        </g>
      )}

      {/* zona proibida: fise */}
      <line x1={cx - 66} y1="176" x2={cx + 66} y2="176" stroke="var(--teal)" strokeWidth="1.4" strokeDasharray="3 2" />
      <path d="M300 176 L322 176" stroke="var(--line-strong)" />
      <text x="326" y="172" {...label} fill="var(--teal)">não atravessar</text>
      <text x="326" y="186" {...label} fill="var(--teal)">a fise</text>
      <path d="M296 132 L318 126" stroke="var(--line-strong)" />
      <text x="322" y="124" {...label}>parafuso paralelo</text>
      <text x="322" y="138" {...label}>na epífise</text>

      <rect x="150" y="18" width="120" height="26" rx="8" fill="var(--teal-tint, var(--surface-2, var(--surface)))" />
      <text x="210" y="35" {...mono} textAnchor="middle">{iv ? "SH IV" : "SH III"}</text>
      <text x="215" y="308" {...label} textAnchor="middle">
        Redução articular anatômica e fixação paralela à fise; se inevitável cruzá-la, usar fio liso fino.
      </text>
    </svg>
  );
};

/* ---------------------------------------------------------------------------
   6. Ressecção de barra fisária com interposição
   -------------------------------------------------------------------------- */
export const BarResection: FC<FigureProps> = ({ className, title }) => {
  const cx = 210;
  const left = cx - 66;
  const right = cx + 66;
  return (
    <svg
      viewBox="0 0 430 320"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? "Ressecção de barra fisária e interposição para reabrir o crescimento"}</title>

      {/* metáfise */}
      <path {...bone} d={`M${cx - 58} 300 C${cx - 74} 256, ${cx - 74} 214, ${left} 190 L${right} 190 C${cx + 74} 214, ${cx + 74} 256, ${cx + 58} 300 Z`} />
      {/* fise reaberta */}
      <rect x={left} y="172" width={right - left} height="18" fill="var(--teal)" opacity="0.22" stroke="var(--teal)" strokeWidth="1.6" />
      {/* cavidade da ressecção com material de interposição */}
      <rect x={left + 6} y="170" width="46" height="22" rx="4" fill="var(--amber)" opacity="0.30" stroke="var(--amber)" strokeWidth="1.6" />
      {/* epífise */}
      <path {...bone} d={`M${left} 172 C${cx - 74} 132, ${cx - 44} 104, ${cx} 102 C${cx + 44} 104, ${cx + 74} 132, ${right} 172 Z`} />
      <path d={`M${cx - 52} 116 C${cx - 22} 98, ${cx + 22} 98, ${cx + 52} 116`} fill="none" stroke="var(--teal)" strokeWidth="5" strokeLinecap="round" />

      {/* setas de crescimento retomado */}
      <path d={`M${cx - 30} 168 L${cx - 30} 140`} stroke="var(--teal)" strokeWidth="2.5" markerEnd="url(#brArrow)" />
      <path d={`M${cx + 20} 168 L${cx + 20} 140`} stroke="var(--teal)" strokeWidth="2.5" markerEnd="url(#brArrow)" />
      <defs>
        <marker id="brArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 Z" fill="var(--teal)" />
        </marker>
      </defs>

      <path d={`M${left + 28} 181 L${left - 6} 205`} stroke="var(--line-strong)" />
      <text x="118" y="222" {...label} textAnchor="middle" fill="var(--amber)">gordura / material</text>
      <text x="118" y="236" {...label} textAnchor="middle" fill="var(--amber)">de interposição</text>
      <text x="316" y="150" {...label} fill="var(--teal)">crescimento retomado</text>

      <text x="210" y="30" {...mono} textAnchor="middle">ressecção da barra</text>
      <text x="215" y="312" {...label} textAnchor="middle">
        Indicada quando a barra &lt; 50% da fise e resta crescimento; interposição impede a recorrência da ponte.
      </text>
    </svg>
  );
};

/* ---------------------------------------------------------------------------
   7. Seguimento: linha de Park-Harris
   -------------------------------------------------------------------------- */
export const HarrisLine: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 460 300"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Linha de Park-Harris: crescimento simétrico versus convergência sobre a barra"}</title>

    {[
      { x: 116, ok: true, title: "paralela · fise sadia" },
      { x: 344, ok: false, title: "convergente · barra" },
    ].map((p) => {
      const left = p.x - 52;
      const right = p.x + 52;
      return (
        <g key={p.x}>
          {/* diáfise/metáfise */}
          <path {...bone} d={`M${p.x - 44} 260 L${left} 150 L${right} 150 L${p.x + 44} 260 Z`} />
          {/* fise */}
          <rect x={left} y="138" width={right - left} height="12" fill="var(--teal)" opacity="0.22" stroke="var(--teal)" strokeWidth="1.4" />
          {/* epífise */}
          <path {...bone} d={`M${left} 138 C${p.x - 58} 108, ${p.x - 30} 88, ${p.x} 86 C${p.x + 30} 88, ${p.x + 58} 108, ${right} 138 Z`} />
          {/* linha de Park-Harris */}
          {p.ok ? (
            <line x1={left + 6} y1="192" x2={right - 6} y2="192" stroke="var(--amber)" strokeWidth="2.5" />
          ) : (
            <path d={`M${left + 6} 208 C${p.x - 10} 176, ${p.x + 4} 158, ${right - 8} 150`} fill="none" stroke="var(--amber)" strokeWidth="2.5" />
          )}
          {/* marca da barra no painel anormal */}
          {!p.ok && (
            <rect x={right - 26} y="138" width="20" height="12" fill="var(--ink-soft)" opacity="0.55" />
          )}
          <text x={p.x} y="34" {...mono} textAnchor="middle">{p.title}</text>
        </g>
      );
    })}

    <path d="M62 200 L96 198" stroke="var(--line-strong)" />
    <text x="58" y="216" {...label} textAnchor="end" fill="var(--amber)">linha de Park-Harris</text>

    <text x="230" y="286" {...label} textAnchor="middle">
      Linha paralela à fise = crescimento simétrico; convergência para a periferia sinaliza tethering / barra.
    </text>
  </svg>
);

export const figures: Record<string, FC<FigureProps>> = {
  "fratura-fisaria-salter-harris:anatomia": Anatomy,
  "fratura-fisaria-salter-harris:classificacao": SalterHarris,
  "fratura-fisaria-salter-harris:barra-fisaria": PhysealBar,
  "fratura-fisaria-salter-harris:reducao": Reduction,
  "fratura-fisaria-salter-harris:fixacao": Fixation,
  "fratura-fisaria-salter-harris:barra-ressecao": BarResection,
  "fratura-fisaria-salter-harris:linha-park-harris": HarrisLine,
};
