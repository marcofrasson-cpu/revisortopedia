import type { FC } from "react";
import type { FigureProps } from "../../../types/topic";

/* ============================================================================
   Figuras — Lesão isolada da sindesmose (tornozelo)
   Line-art esquemático, 2 tons, original (sem copyright). Cores só por CSS vars.
   Prefixo obrigatório de id: "lesao-sindesmose-isolada:"
   ========================================================================== */

const BONE = { stroke: "var(--ink-soft)", fill: "var(--surface)", strokeWidth: 2 } as const;
const BONE2 = { stroke: "var(--ink-soft)", fill: "var(--surface-2, var(--surface))", strokeWidth: 2 } as const;
const SOFT = { stroke: "var(--teal)", fill: "none", strokeWidth: 2.4 } as const;
const labelStyle = { fontSize: 11, fill: "var(--muted)", fontFamily: "var(--font-body, sans-serif)" } as const;
const monoStyle = { fontSize: 11, fill: "var(--muted)", fontFamily: "var(--font-mono, monospace)" } as const;

/* -------------------------------------------------------------------------- */
/* 1. Anatomia — complexo sindesmótico (axial + coronal)                       */
/* -------------------------------------------------------------------------- */
const Anatomia: FC<FigureProps> = ({ variant = "axial", className, title }) => {
  const coronal = variant === "coronal";
  return (
    <svg
      viewBox="0 0 480 360"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
    >
      <title>{title ?? (coronal ? "Anatomia coronal da sindesmose tibiofibular distal" : "Anatomia axial do complexo sindesmótico")}</title>
      {coronal ? (
        <>
          {/* Tíbia distal */}
          <path d="M120 40 L200 40 L200 250 Q200 300 150 300 L120 300 Z" {...BONE} />
          {/* Fíbula distal */}
          <path d="M270 60 L320 60 L318 250 Q315 300 292 300 L272 300 Q262 210 270 60 Z" {...BONE2} />
          {/* Membrana interóssea */}
          <g stroke="var(--teal)" strokeWidth={1.6} fill="none">
            <line x1="200" y1="70" x2="270" y2="82" />
            <line x1="200" y1="100" x2="270" y2="112" />
            <line x1="200" y1="130" x2="270" y2="142" />
            <line x1="200" y1="160" x2="270" y2="172" />
          </g>
          {/* Ligamento interósseo (espessamento distal) */}
          <path d="M200 205 L272 215" {...SOFT} strokeWidth={4} />
          {/* Superfície articular do tornozelo */}
          <path d="M120 300 L292 300" stroke="var(--ink-soft)" strokeWidth={2} fill="none" />
          <text x="150" y="200" style={labelStyle} textAnchor="middle">Tíbia</text>
          <text x="298" y="180" style={labelStyle} textAnchor="middle">Fíbula</text>
          <text x="235" y="120" style={labelStyle} textAnchor="middle">MIO</text>
          <text x="236" y="235" style={labelStyle} textAnchor="middle">LIO</text>
          <text x="205" y="322" style={labelStyle} textAnchor="middle">Plafond tibial</text>
        </>
      ) : (
        <>
          {/* Corte axial ~1 cm acima do plafond: tíbia com incisura fibular */}
          <path
            d="M90 90 Q220 55 300 100 L320 150 Q320 250 240 275 Q140 290 90 235 Q70 160 90 90 Z"
            {...BONE}
          />
          {/* Incisura fibular (concavidade lateral) */}
          <path d="M300 100 Q345 150 315 205" fill="var(--surface-2, var(--surface))" stroke="var(--ink-soft)" strokeWidth={2} />
          {/* Fíbula alojada na incisura */}
          <ellipse cx="350" cy="152" rx="34" ry="44" {...BONE2} />
          {/* AITFL — ligamento tibiofibular anterior inferior */}
          <path d="M312 108 Q345 118 372 128" {...SOFT} />
          {/* PITFL — ligamento tibiofibular posterior inferior */}
          <path d="M310 200 Q346 190 374 178" {...SOFT} />
          {/* Ligamento interósseo */}
          <path d="M320 152 L322 152 M322 145 L340 150 M322 159 L340 154" {...SOFT} strokeWidth={2} />
          <line x1="323" y1="152" x2="340" y2="152" {...SOFT} strokeWidth={3.2} />
          <text x="185" y="185" style={labelStyle} textAnchor="middle">Tíbia (incisura)</text>
          <text x="352" y="156" style={labelStyle} textAnchor="middle">Fíbula</text>
          <text x="392" y="120" style={labelStyle}>AITFL</text>
          <text x="392" y="184" style={labelStyle}>PITFL</text>
          <text x="300" y="140" style={labelStyle} textAnchor="end">LIO</text>
          <text x="60" y="315" style={monoStyle}>corte axial ~1 cm acima do plafond</text>
        </>
      )}
    </svg>
  );
};

/* -------------------------------------------------------------------------- */
/* 2. Exame físico — testes provocativos                                       */
/* -------------------------------------------------------------------------- */
const ExameFisico: FC<FigureProps> = ({ variant = "rotacao-externa", className, title }) => {
  const squeeze = variant === "squeeze";
  return (
    <svg viewBox="0 0 480 360" preserveAspectRatio="xMidYMid meet" role="img" className={className}>
      <title>
        {title ?? (squeeze ? "Teste da compressão (squeeze test)" : "Teste da rotação externa")}
      </title>
      {squeeze ? (
        <>
          {/* Perna: tíbia + fíbula na diáfise */}
          <rect x="200" y="40" width="34" height="250" rx="14" {...BONE} />
          <rect x="244" y="40" width="20" height="250" rx="10" {...BONE2} />
          {/* Mãos comprimindo terço médio */}
          <path d="M150 150 Q185 130 200 150" {...SOFT} strokeWidth={3} />
          <path d="M314 150 Q279 130 264 150" {...SOFT} strokeWidth={3} />
          {/* Setas de compressão (proximal) */}
          <g stroke="var(--amber)" strokeWidth={2.4} fill="var(--amber)">
            <line x1="150" y1="150" x2="196" y2="150" />
            <polygon points="196,150 186,145 186,155" />
            <line x1="314" y1="150" x2="268" y2="150" />
            <polygon points="268,150 278,145 278,155" />
          </g>
          {/* Dor referida distal na sindesmose */}
          <circle cx="232" cy="285" r="16" fill="none" stroke="var(--cortical)" strokeWidth={2.2} className="fx-line" />
          <text x="232" y="20" style={labelStyle} textAnchor="middle">compressão no terço médio da perna</text>
          <text x="232" y="330" style={labelStyle} textAnchor="middle">dor referida na sindesmose = teste +</text>
        </>
      ) : (
        <>
          {/* Coxa/joelho fletido 90° e perna vertical */}
          <path d="M70 90 L150 90 L150 130 L110 130 Z" {...BONE} />
          <rect x="120" y="120" width="40" height="180" rx="16" {...BONE} />
          {/* Pé em rotação externa */}
          <path d="M140 300 L250 285 L255 320 L140 335 Z" {...BONE2} />
          {/* Eixo tornozelo estabilizado */}
          <circle cx="140" cy="300" r="6" fill="var(--ink-soft)" />
          {/* Seta de rotação externa do pé */}
          <path d="M250 300 Q300 300 300 250" stroke="var(--amber)" strokeWidth={2.6} fill="none" />
          <polygon points="300,250 294,262 307,260" fill="var(--amber)" />
          {/* Dor na sindesmose */}
          <circle cx="150" cy="285" r="15" fill="none" stroke="var(--cortical)" strokeWidth={2.2} className="fx-line" />
          <text x="240" y="360" style={labelStyle} textAnchor="middle">rotação externa do pé, joelho a 90°</text>
          <text x="330" y="215" style={labelStyle}>dor ântero-lateral = +</text>
        </>
      )}
    </svg>
  );
};

/* -------------------------------------------------------------------------- */
/* 3. TC bilateral — redução vs má-redução                                     */
/* -------------------------------------------------------------------------- */
const TomografiaBilateral: FC<FigureProps> = ({ variant = "normal", className, title }) => {
  const bad = variant === "ma-reducao";
  return (
    <svg viewBox="0 0 480 300" preserveAspectRatio="xMidYMid meet" role="img" className={className}>
      <title>{title ?? (bad ? "TC axial: fíbula mal reduzida na incisura" : "TC axial: sindesmose congruente")}</title>
      {/* Tíbia com incisura fibular posterolateral */}
      <path d="M60 60 Q180 40 250 75 L262 120 Q262 210 190 232 Q100 245 60 195 Q45 125 60 60 Z" {...BONE} />
      <path d="M250 75 Q292 118 262 175" fill="var(--surface-2, var(--surface))" stroke="var(--ink-soft)" strokeWidth={2} />
      {/* Fíbula — posição normal ou transladada/rodada */}
      {bad ? (
        <ellipse cx="316" cy="128" rx="30" ry="40" transform="rotate(24 316 128)" {...BONE2} />
      ) : (
        <ellipse cx="298" cy="128" rx="30" ry="40" {...BONE2} />
      )}
      {/* Medida do espaço tibiofibular (amber) */}
      <g stroke="var(--amber)" strokeWidth={1.8}>
        <line x1="262" y1="120" x2={bad ? "296" : "270"} y2="122" />
      </g>
      <text x="360" y="60" style={monoStyle}>
        {bad ? "Δ > 2 mm vs contralateral" : "simétrico ao lado são"}
      </text>
      <text x="360" y="82" style={monoStyle}>{bad ? "rotação fibular +" : "TFCS normal"}</text>
      <text x="150" y="160" style={labelStyle} textAnchor="middle">Tíbia</text>
      <text x={bad ? "316" : "298"} y="132" style={labelStyle} textAnchor="middle">Fíbula</text>
      {bad && (
        <circle cx="288" cy="150" r="12" fill="none" stroke="var(--cortical)" strokeWidth={2} className="fx-line" />
      )}
      <text x="60" y="285" style={monoStyle}>
        {bad ? "má-redução: incongruência ântero-posterior/rotacional" : "TC axial bilateral comparativa"}
      </text>
    </svg>
  );
};

/* -------------------------------------------------------------------------- */
/* 4. Fixação — parafuso vs suture button                                      */
/* -------------------------------------------------------------------------- */
const Fixacao: FC<FigureProps> = ({ variant = "parafuso", className, title }) => {
  const button = variant === "suture-button";
  return (
    <svg viewBox="0 0 480 300" preserveAspectRatio="xMidYMid meet" role="img" className={className}>
      <title>{title ?? (button ? "Fixação dinâmica com suture button" : "Fixação rígida com parafuso sindesmótico")}</title>
      {/* Tíbia (axial) */}
      <path d="M70 60 Q190 42 260 78 L272 122 Q272 212 198 234 Q108 247 70 197 Q55 127 70 60 Z" {...BONE} />
      <path d="M260 78 Q302 120 272 178" fill="var(--surface-2, var(--surface))" stroke="var(--ink-soft)" strokeWidth={2} />
      {/* Fíbula */}
      <ellipse cx="312" cy="130" rx="30" ry="40" {...BONE2} />
      {button ? (
        <>
          {/* Botão fibular */}
          <rect x="336" y="120" width="12" height="22" rx="2" {...SOFT} strokeWidth={2.6} fill="var(--teal)" />
          {/* Botão tibial */}
          <rect x="120" y="128" width="12" height="22" rx="2" {...SOFT} strokeWidth={2.6} fill="var(--teal)" />
          {/* Sutura flexível conectando */}
          <line x1="132" y1="134" x2="336" y2="128" {...SOFT} strokeWidth={2} />
          <line x1="132" y1="144" x2="336" y2="138" {...SOFT} strokeWidth={2} />
          <text x="360" y="120" style={labelStyle}>botão fibular</text>
          <text x="70" y="120" style={labelStyle} textAnchor="middle">botão tibial</text>
          <text x="230" y="105" style={labelStyle} textAnchor="middle">sutura de alta resistência</text>
          <text x="70" y="285" style={monoStyle}>dinâmica: micromovimento fisiológico, sem retirada rotineira</text>
        </>
      ) : (
        <>
          {/* Parafuso trans-sindesmótico, 30° póstero-anterior, paralelo ao plafond */}
          <g stroke="var(--teal)" strokeWidth={3} fill="none">
            <line x1="126" y1="150" x2="344" y2="126" />
          </g>
          {/* Roscas esquemáticas */}
          <g stroke="var(--teal)" strokeWidth={1.4}>
            {[150, 175, 200, 225, 250, 275, 300, 325].map((x, i) => (
              <line key={i} x1={x} y1={152 - i * 2.6 - 4} x2={x + 6} y2={152 - i * 2.6 + 6} />
            ))}
          </g>
          {/* Cabeça do parafuso */}
          <circle cx="122" cy="151" r="7" fill="var(--teal)" />
          {/* Ângulo 30° (amber) */}
          <path d="M126 150 L176 150" stroke="var(--amber)" strokeWidth={1.6} />
          <path d="M126 150 L166 145" stroke="var(--amber)" strokeWidth={1.6} />
          <text x="182" y="146" style={monoStyle}>~30°</text>
          <text x="235" y="105" style={labelStyle} textAnchor="middle">3–4 corticais, paralelo ao plafond</text>
          <text x="70" y="285" style={monoStyle}>rígida: 2–4 mm acima do plafond; risco de má-redução/quebra</text>
        </>
      )}
      <text x="150" y="170" style={labelStyle} textAnchor="middle">Tíbia</text>
      <text x="312" y="134" style={labelStyle} textAnchor="middle">Fíbula</text>
    </svg>
  );
};

/* -------------------------------------------------------------------------- */
/* 5. Via de acesso ântero-lateral                                             */
/* -------------------------------------------------------------------------- */
const ViaAnterolateral: FC<FigureProps> = ({ className, title }) => (
  <svg viewBox="0 0 480 320" preserveAspectRatio="xMidYMid meet" role="img" className={className}>
    <title>{title ?? "Via de acesso ântero-lateral à sindesmose"}</title>
    {/* Contorno do tornozelo (visão anterior) */}
    <path d="M150 40 L330 40 L340 220 Q345 270 300 280 L180 280 Q135 270 140 220 Z" {...BONE} />
    {/* Fíbula distal / maléolo lateral */}
    <path d="M300 60 Q320 150 300 260" stroke="var(--ink-soft)" strokeWidth={2} fill="none" />
    {/* Incisão cutânea ântero-lateral */}
    <line x1="300" y1="70" x2="300" y2="235" stroke="var(--cortical)" strokeWidth={2.4} className="fx-line" strokeDasharray="6 5" />
    {/* Intervalo: sobre o tubérculo de Chaput / borda anterior da fíbula */}
    <path d="M262 150 Q285 150 300 150" {...SOFT} />
    {/* Nervo fibular superficial em risco */}
    <path d="M235 60 Q215 150 240 250" stroke="var(--amber)" strokeWidth={2} fill="none" strokeDasharray="3 4" />
    <text x="205" y="150" style={labelStyle} textAnchor="end">n. fibular</text>
    <text x="205" y="164" style={labelStyle} textAnchor="end">superficial</text>
    <text x="360" y="150" style={labelStyle}>incisão</text>
    <text x="360" y="164" style={labelStyle}>ântero-lateral</text>
    <text x="240" y="305" style={labelStyle} textAnchor="middle">exposição do tubérculo de Chaput e da incisura</text>
  </svg>
);

/* -------------------------------------------------------------------------- */
/* 6. Passo — redução com pinça                                                */
/* -------------------------------------------------------------------------- */
const PassoReducao: FC<FigureProps> = ({ className, title }) => (
  <svg viewBox="0 0 480 300" preserveAspectRatio="xMidYMid meet" role="img" className={className}>
    <title>{title ?? "Redução da fíbula na incisura com pinça, tornozelo a 90°"}</title>
    {/* Tíbia axial */}
    <path d="M60 60 Q180 42 250 78 L262 122 Q262 212 188 234 Q98 247 60 197 Q45 127 60 60 Z" {...BONE} />
    <path d="M250 78 Q292 120 262 178" fill="var(--surface-2, var(--surface))" stroke="var(--ink-soft)" strokeWidth={2} />
    {/* Fíbula reduzida na incisura */}
    <ellipse cx="300" cy="128" rx="30" ry="40" {...BONE2} />
    {/* Pinça de redução (ramos) */}
    <g stroke="var(--teal)" strokeWidth={2.6} fill="none">
      <path d="M120 150 L336 132" />
      <path d="M120 168 L336 150" />
      <circle cx="120" cy="159" r="8" />
    </g>
    {/* Seta indicando direção de redução, sem sobre-compressão */}
    <line x1="360" y1="128" x2="332" y2="128" stroke="var(--amber)" strokeWidth={2.2} />
    <polygon points="332,128 342,123 342,133" fill="var(--amber)" />
    <text x="150" y="170" style={labelStyle} textAnchor="middle">Tíbia</text>
    <text x="300" y="132" style={labelStyle} textAnchor="middle">Fíbula</text>
    <text x="365" y="120" style={labelStyle}>vetor de</text>
    <text x="365" y="134" style={labelStyle}>redução</text>
    <text x="60" y="285" style={monoStyle}>pinça perpendicular ao eixo tibiofibular; evitar sobre-compressão</text>
  </svg>
);

/* -------------------------------------------------------------------------- */
/* 7. Passo — trajeto do implante                                              */
/* -------------------------------------------------------------------------- */
const PassoImplante: FC<FigureProps> = ({ className, title }) => (
  <svg viewBox="0 0 480 320" preserveAspectRatio="xMidYMid meet" role="img" className={className}>
    <title>{title ?? "Trajeto do implante: 1–2 cm acima do plafond, 30° póstero-anterior"}</title>
    {/* Visão coronal: tíbia e fíbula */}
    <rect x="150" y="40" width="90" height="250" rx="14" {...BONE} />
    <path d="M300 60 L342 60 L340 250 Q338 292 316 292 L298 292 Q288 200 300 60 Z" {...BONE2} />
    {/* Linha articular / plafond */}
    <line x1="150" y1="270" x2="316" y2="270" stroke="var(--ink-soft)" strokeWidth={2} />
    {/* Nível do implante 1-2 cm acima */}
    <line x1="150" y1="210" x2="342" y2="210" stroke="var(--amber)" strokeWidth={1.6} strokeDasharray="5 4" />
    {/* Guia/implante paralelo ao plafond */}
    <line x1="320" y1="212" x2="176" y2="212" stroke="var(--teal)" strokeWidth={3} />
    <circle cx="322" cy="212" r="6" fill="var(--teal)" />
    {/* Distância acima do plafond */}
    <line x1="360" y1="212" x2="360" y2="270" stroke="var(--amber)" strokeWidth={1.6} />
    <text x="368" y="245" style={monoStyle}>1–2 cm</text>
    <text x="195" y="150" style={labelStyle} textAnchor="middle">Tíbia</text>
    <text x="322" y="150" style={labelStyle} textAnchor="middle">Fíbula</text>
    <text x="240" y="200" style={labelStyle} textAnchor="middle">paralelo ao plafond</text>
    <text x="60" y="308" style={monoStyle}>trajeto de posterolateral p/ anteromedial (~30°)</text>
  </svg>
);

/* -------------------------------------------------------------------------- */
export const figures: Record<string, FC<FigureProps>> = {
  "lesao-sindesmose-isolada:anatomia": Anatomia,
  "lesao-sindesmose-isolada:exame": ExameFisico,
  "lesao-sindesmose-isolada:tc": TomografiaBilateral,
  "lesao-sindesmose-isolada:fixacao": Fixacao,
  "lesao-sindesmose-isolada:via-acesso": ViaAnterolateral,
  "lesao-sindesmose-isolada:step-reducao": PassoReducao,
  "lesao-sindesmose-isolada:step-implante": PassoImplante,
};
