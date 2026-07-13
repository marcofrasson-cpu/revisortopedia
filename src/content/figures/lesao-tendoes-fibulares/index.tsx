import type { FC } from "react";
import type { FigureProps } from "../../../types/topic";

/* ============================================================================
   Figuras — Lesão dos tendões fibulares (fibular curto/longo, instabilidade)
   Line-art esquemático, 2 tons, original (sem copyright). Cores só por CSS vars.
   Prefixo obrigatório de id: "lesao-tendoes-fibulares:"
   ========================================================================== */

const BONE = { stroke: "var(--ink-soft)", fill: "var(--surface)", strokeWidth: 2 } as const;
const BONE2 = { stroke: "var(--ink-soft)", fill: "var(--surface-2, var(--surface))", strokeWidth: 2 } as const;
const SOFT = { stroke: "var(--teal)", fill: "none", strokeWidth: 2.4 } as const;
const labelStyle = { fontSize: 11, fill: "var(--muted)", fontFamily: "var(--font-body, sans-serif)" } as const;
const monoStyle = { fontSize: 11, fill: "var(--muted)", fontFamily: "var(--font-mono, monospace)" } as const;

/* -------------------------------------------------------------------------- */
/* 1. Anatomia — sulco retromaleolar, fibular curto e longo, retináculo (SPR)  */
/* -------------------------------------------------------------------------- */
const Anatomia: FC<FigureProps> = ({ variant = "axial", className, title }) => {
  const lateral = variant === "lateral";
  return (
    <svg viewBox="0 0 480 360" preserveAspectRatio="xMidYMid meet" role="img" className={className}>
      <title>
        {title ??
          (lateral
            ? "Visão lateral: fibulares curto e longo atrás do maléolo lateral, sob o retináculo superior"
            : "Corte axial retromaleolar: sulco fibular, fibular curto e longo, retináculo superior")}
      </title>
      {lateral ? (
        <>
          {/* Fíbula distal / maléolo lateral (visão lateral) */}
          <path d="M180 40 L230 40 L226 210 Q222 262 196 262 L176 262 Q168 130 180 40 Z" {...BONE} />
          <text x="203" y="150" style={labelStyle} textAnchor="middle">Fíbula</text>
          {/* Ponta do maléolo lateral */}
          <text x="176" y="280" style={labelStyle} textAnchor="middle">maléolo lateral</text>
          {/* Fibular curto — mais anterior/profundo, ventre muscular baixo, insere na base do 5º MTT */}
          <path d="M150 70 Q168 150 200 240 Q235 300 300 320" {...SOFT} />
          {/* Fibular longo — posterior/superficial, contorna para plantar */}
          <path d="M138 60 Q150 160 178 250 Q205 305 250 315 Q300 320 320 300" {...SOFT} strokeWidth={2.8} />
          {/* Retináculo superior dos fibulares (SPR) — teto do túnel retromaleolar */}
          <path d="M176 120 Q210 130 236 150" stroke="var(--teal)" strokeWidth={4} fill="none" />
          <text x="300" y="130" style={labelStyle}>retináculo superior</text>
          <text x="300" y="144" style={labelStyle}>dos fibulares (SPR)</text>
          <line x1="238" y1="140" x2="296" y2="132" stroke="var(--ink-soft)" strokeWidth={1} />
          <text x="120" y="60" style={labelStyle} textAnchor="end">f. longo</text>
          <text x="126" y="82" style={labelStyle} textAnchor="end">f. curto</text>
          <text x="315" y="336" style={labelStyle} textAnchor="middle">base do 5º metatarso / túnel cuboide</text>
        </>
      ) : (
        <>
          {/* Corte axial ~ retromaleolar: fíbula com sulco posterior */}
          <path
            d="M150 70 Q250 50 300 90 Q330 120 300 165 Q260 200 190 195 Q140 180 130 130 Q128 95 150 70 Z"
            {...BONE}
          />
          {/* Sulco retromaleolar (concavidade posterior) */}
          <path d="M300 90 Q345 128 300 165" fill="var(--surface-2, var(--surface))" stroke="var(--ink-soft)" strokeWidth={2} />
          {/* Crista fibrocartilaginosa na borda posterolateral do sulco */}
          <path d="M300 90 Q312 96 316 108" stroke="var(--ink-soft)" strokeWidth={2.4} fill="none" />
          {/* Fibular curto — profundo, achatado, contra o osso */}
          <ellipse cx="318" cy="122" rx="17" ry="11" transform="rotate(28 318 122)" {...SOFT} fill="var(--surface)" />
          {/* Fibular longo — superficial, mais arredondado, posterolateral */}
          <ellipse cx="332" cy="150" rx="13" ry="12" {...SOFT} strokeWidth={2.8} fill="var(--surface)" />
          {/* Retináculo superior (SPR) — teto do túnel, da fíbula ao calcâneo/fáscia */}
          <path d="M304 92 Q360 118 352 172" stroke="var(--teal)" strokeWidth={4} fill="none" />
          <text x="205" y="135" style={labelStyle} textAnchor="middle">Fíbula (sulco)</text>
          <text x="318" y="124" style={monoStyle} textAnchor="middle">FC</text>
          <text x="332" y="154" style={monoStyle} textAnchor="middle">FL</text>
          <text x="366" y="150" style={labelStyle}>SPR</text>
          <text x="150" y="230" style={labelStyle}>FC = fibular curto (profundo)</text>
          <text x="150" y="248" style={labelStyle}>FL = fibular longo (superficial)</text>
          <text x="60" y="330" style={monoStyle}>corte axial retromaleolar — o SPR mantém os tendões no sulco</text>
        </>
      )}
    </svg>
  );
};

/* -------------------------------------------------------------------------- */
/* 2. Classificação de Eckert-Davis (modif. Oden) — lesão do SPR (grau I–IV)    */
/* -------------------------------------------------------------------------- */
const ClassificacaoSPR: FC<FigureProps> = ({ variant = "I", className, title }) => {
  const g = variant.toUpperCase();
  const names: Record<string, string> = {
    I: "Grau I — SPR/periósteo descolado, tendões subluxam sob o retalho",
    II: "Grau II — crista fibrocartilaginosa elevada com o SPR",
    III: "Grau III — avulsão de fragmento cortical fino com o SPR",
    IV: "Grau IV — SPR rompido/avulsionado da inserção posterior",
  };
  return (
    <svg viewBox="0 0 480 340" preserveAspectRatio="xMidYMid meet" role="img" className={className}>
      <title>{title ?? names[g] ?? names.I}</title>
      {/* Fíbula axial base (comum a todos os graus) */}
      <path
        d="M120 70 Q230 50 288 92 Q322 122 292 168 Q252 205 175 198 Q118 182 108 130 Q106 92 120 70 Z"
        {...BONE}
      />
      <text x="185" y="140" style={labelStyle} textAnchor="middle">Fíbula</text>
      {/* Sulco */}
      <path d="M288 92 Q332 130 292 168" fill="var(--surface-2, var(--surface))" stroke="var(--ink-soft)" strokeWidth={2} />
      {/* Tendões fibulares (posição varia: dentro do sulco ou subluxados) */}
      {g === "I" || g === "IV" ? (
        <>
          {/* subluxados para fora/anterior */}
          <ellipse cx="330" cy="112" rx="15" ry="10" transform="rotate(24 330 112)" {...SOFT} fill="var(--surface)" />
          <ellipse cx="344" cy="140" rx="12" ry="11" {...SOFT} strokeWidth={2.8} fill="var(--surface)" />
        </>
      ) : (
        <>
          <ellipse cx="312" cy="120" rx="15" ry="10" transform="rotate(28 312 120)" {...SOFT} fill="var(--surface)" />
          <ellipse cx="326" cy="146" rx="12" ry="11" {...SOFT} strokeWidth={2.8} fill="var(--surface)" />
        </>
      )}
      {/* Elemento específico do grau */}
      {g === "I" && (
        <>
          {/* SPR/periósteo descolado formando bolsa; tendões sob o retalho */}
          <path d="M290 90 Q356 110 360 168 Q356 176 348 172" stroke="var(--teal)" strokeWidth={4} fill="none" />
          <path d="M290 90 Q330 96 348 118" stroke="var(--cortical)" strokeWidth={2.2} className="fx-line" strokeDasharray="4 4" fill="none" />
          <text x="368" y="150" style={labelStyle}>SPR + periósteo</text>
          <text x="368" y="164" style={labelStyle}>descolados (bolsa)</text>
        </>
      )}
      {g === "II" && (
        <>
          {/* crista fibrocartilaginosa elevada junto ao SPR */}
          <path d="M288 92 Q300 88 306 98 L300 108 Z" stroke="var(--cortical)" strokeWidth={2.2} className="fx-line" fill="none" />
          <path d="M306 98 Q356 118 350 170" stroke="var(--teal)" strokeWidth={4} fill="none" />
          <text x="366" y="150" style={labelStyle}>crista fibro-</text>
          <text x="366" y="164" style={labelStyle}>cartilaginosa</text>
        </>
      )}
      {g === "III" && (
        <>
          {/* fragmento cortical fino avulsionado (rim fracture) */}
          <path d="M286 90 L300 84 L306 100 L292 104 Z" {...BONE2} stroke="var(--cortical)" className="fx-line" />
          <path d="M300 88 Q356 116 350 170" stroke="var(--teal)" strokeWidth={4} fill="none" />
          <text x="366" y="150" style={labelStyle}>escama óssea</text>
          <text x="366" y="164" style={labelStyle}>cortical (avulsão)</text>
        </>
      )}
      {g === "IV" && (
        <>
          {/* SPR roto/avulsionado do bordo posterior */}
          <path d="M290 90 Q330 104 342 132" stroke="var(--teal)" strokeWidth={4} fill="none" />
          <path d="M342 132 L360 150 M348 128 L366 140" stroke="var(--cortical)" strokeWidth={2.4} className="fx-line" />
          <text x="366" y="150" style={labelStyle}>SPR roto na</text>
          <text x="366" y="164" style={labelStyle}>inserção posterior</text>
        </>
      )}
      {/* Seletor visual dos graus */}
      <g fontFamily="var(--font-mono, monospace)" fontSize={13}>
        {["I", "II", "III", "IV"].map((lvl, i) => {
          const active = lvl === g;
          return (
            <g key={lvl}>
              <rect
                x={70 + i * 88}
                y={288}
                width={70}
                height={30}
                rx={6}
                fill={active ? "var(--teal)" : "var(--surface-2, var(--surface))"}
                stroke="var(--ink-soft)"
                strokeWidth={1.5}
              />
              <text
                x={70 + i * 88 + 35}
                y={308}
                textAnchor="middle"
                fill={active ? "var(--surface)" : "var(--muted)"}
              >
                {lvl}
              </text>
            </g>
          );
        })}
      </g>
      <text x="240" y="30" style={labelStyle} textAnchor="middle">
        {names[g] ?? names.I}
      </text>
    </svg>
  );
};

/* -------------------------------------------------------------------------- */
/* 3. Sulco retromaleolar — morfologia (côncavo / plano / convexo)             */
/* -------------------------------------------------------------------------- */
const SulcoRetromaleolar: FC<FigureProps> = ({ variant = "concavo", className, title }) => {
  const shape = variant; // concavo | plano | convexo
  const names: Record<string, string> = {
    concavo: "Sulco côncavo (profundo) — configuração estável",
    plano: "Sulco plano (raso) — predispõe à subluxação",
    convexo: "Sulco convexo — configuração mais instável",
  };
  return (
    <svg viewBox="0 0 480 300" preserveAspectRatio="xMidYMid meet" role="img" className={className}>
      <title>{title ?? names[shape] ?? names.concavo}</title>
      {/* Fíbula axial */}
      <path d="M120 60 Q230 44 288 84 Q320 112 292 158 Q252 196 175 190 Q118 174 108 122 Q106 84 120 60 Z" {...BONE} />
      <text x="185" y="130" style={labelStyle} textAnchor="middle">Fíbula</text>
      {/* Contorno posterior conforme morfologia */}
      {shape === "concavo" && (
        <path d="M288 84 Q346 121 292 158" fill="var(--surface-2, var(--surface))" stroke="var(--ink-soft)" strokeWidth={2.4} />
      )}
      {shape === "plano" && (
        <path d="M288 84 Q302 121 292 158" fill="var(--surface-2, var(--surface))" stroke="var(--ink-soft)" strokeWidth={2.4} />
      )}
      {shape === "convexo" && (
        <path d="M288 84 Q272 121 292 158" fill="var(--surface-2, var(--surface))" stroke="var(--cortical)" strokeWidth={2.4} className="fx-line" />
      )}
      {/* Tendões — bem contidos no côncavo, escapando no convexo */}
      {shape === "convexo" ? (
        <>
          <ellipse cx="326" cy="106" rx="15" ry="10" transform="rotate(24 326 106)" {...SOFT} fill="var(--surface)" />
          <ellipse cx="340" cy="134" rx="12" ry="11" {...SOFT} strokeWidth={2.8} fill="var(--surface)" />
          <path d="M356 120 L376 120" stroke="var(--amber)" strokeWidth={2.2} />
          <polygon points="376,120 366,115 366,125" fill="var(--amber)" />
          <text x="360" y="106" style={labelStyle}>tendência a</text>
          <text x="360" y="150" style={labelStyle}>subluxar</text>
        </>
      ) : (
        <>
          <ellipse cx="312" cy="112" rx="15" ry="10" transform="rotate(28 312 112)" {...SOFT} fill="var(--surface)" />
          <ellipse cx="326" cy="138" rx="12" ry="11" {...SOFT} strokeWidth={2.8} fill="var(--surface)" />
        </>
      )}
      {/* Medida da profundidade do sulco (amber) */}
      <g stroke="var(--amber)" strokeWidth={1.6}>
        <line x1="288" y1="121" x2={shape === "concavo" ? "342" : shape === "plano" ? "300" : "276"} y2="121" />
      </g>
      <text x="360" y="200" style={monoStyle}>
        {shape === "concavo" ? "profundidade ~2–4 mm" : shape === "plano" ? "sulco raso ~0–1 mm" : "convexo: sem contenção"}
      </text>
      <text x="60" y="278" style={monoStyle}>{names[shape] ?? names.concavo}</text>
    </svg>
  );
};

/* -------------------------------------------------------------------------- */
/* 4. Rasgo do fibular curto — split longitudinal (parcial vs > 50%)           */
/* -------------------------------------------------------------------------- */
const RasgoBrevis: FC<FigureProps> = ({ variant = "parcial", className, title }) => {
  const maior = variant === "maior";
  return (
    <svg viewBox="0 0 480 320" preserveAspectRatio="xMidYMid meet" role="img" className={className}>
      <title>
        {title ??
          (maior
            ? "Rasgo longitudinal do fibular curto acometendo > 50% (limiar para tenodese)"
            : "Rasgo longitudinal parcial do fibular curto (< 50%) — reparo/tubularização")}
      </title>
      {/* Fibular curto — tendão achatado longitudinal com fenda central */}
      <path d="M110 70 Q120 60 140 62 L340 96 Q360 100 360 116 L360 150 Q360 166 340 168 L140 200 Q120 202 112 190 Z" {...SOFT} fill="var(--surface)" />
      {/* Fenda longitudinal (split) — traço de fratura tendínea */}
      <path
        d={maior
          ? "M150 78 Q250 100 348 118 M150 80 Q250 150 348 148"
          : "M150 82 Q250 108 348 122 M170 96 Q250 128 330 136"}
        stroke="var(--cortical)"
        strokeWidth={2.4}
        className="fx-line"
        fill="none"
      />
      {/* Fibular longo por trás (comprime o curto contra a fíbula) */}
      <path d="M120 230 Q240 250 360 232" {...SOFT} strokeWidth={2.8} />
      <text x="240" y="272" style={labelStyle} textAnchor="middle">fibular longo (compressão da borda posterior da fíbula)</text>
      {/* Rótulos */}
      <text x="235" y="130" style={monoStyle} textAnchor="middle">
        {maior ? "> 50% da área — tenodese" : "< 50% — desbridar + tubularizar"}
      </text>
      {maior && (
        <circle cx="250" cy="122" r="18" fill="none" stroke="var(--cortical)" strokeWidth={2} className="fx-line" />
      )}
      <text x="110" y="48" style={labelStyle}>fibular curto (achatado)</text>
      <text x="60" y="304" style={monoStyle}>
        {maior ? "segmento inviável → excisão e tenodese ao fibular longo" : "fenda longitudinal reparável (regra dos 50%, Krause–Brodsky)"}
      </text>
    </svg>
  );
};

/* -------------------------------------------------------------------------- */
/* 5. Via de acesso — retromaleolar (posterolateral à fíbula)                  */
/* -------------------------------------------------------------------------- */
const ViaRetromaleolar: FC<FigureProps> = ({ className, title }) => (
  <svg viewBox="0 0 480 340" preserveAspectRatio="xMidYMid meet" role="img" className={className}>
    <title>{title ?? "Via retromaleolar/lateral curvilínea posterior à fíbula; nervo sural em risco"}</title>
    {/* Contorno lateral do tornozelo/perna */}
    <path d="M150 40 L250 40 L262 210 Q268 300 220 312 L180 312 Q140 300 146 220 Z" {...BONE} />
    {/* Fíbula distal / maléolo lateral */}
    <path d="M210 60 Q232 160 210 280" stroke="var(--ink-soft)" strokeWidth={2} fill="none" />
    <text x="180" y="150" style={labelStyle} textAnchor="middle">maléolo</text>
    <text x="180" y="164" style={labelStyle} textAnchor="middle">lateral</text>
    {/* Incisão curvilínea posterior à fíbula, seguindo os tendões até a base do 5º MTT */}
    <path d="M222 70 Q252 150 240 240 Q232 290 270 315" stroke="var(--cortical)" strokeWidth={2.6} className="fx-line" strokeDasharray="7 5" fill="none" />
    <text x="300" y="120" style={labelStyle}>incisão</text>
    <text x="300" y="134" style={labelStyle}>retromaleolar</text>
    {/* Bainha dos fibulares aberta */}
    <path d="M240 150 Q258 152 274 150" {...SOFT} />
    {/* Nervo sural — posterolateral, em risco distalmente */}
    <path d="M300 60 Q286 170 262 300" stroke="var(--amber)" strokeWidth={2} fill="none" strokeDasharray="3 4" />
    <text x="320" y="230" style={labelStyle}>n. sural</text>
    <text x="320" y="244" style={labelStyle}>(em risco)</text>
    <text x="240" y="332" style={labelStyle} textAnchor="middle">exposição dos fibulares curto e longo em toda a sua excursão</text>
  </svg>
);

/* -------------------------------------------------------------------------- */
/* 6. Passo — reparo/tubularização do rasgo do fibular curto                   */
/* -------------------------------------------------------------------------- */
const PassoReparo: FC<FigureProps> = ({ className, title }) => (
  <svg viewBox="0 0 480 300" preserveAspectRatio="xMidYMid meet" role="img" className={className}>
    <title>{title ?? "Desbridamento das bordas degeneradas e tubularização do fibular curto"}</title>
    {/* Tendão fibular curto */}
    <path d="M100 110 Q110 100 130 102 L350 130 Q368 134 368 150 L368 168 Q368 182 350 184 L130 200 Q110 202 102 190 Z" {...SOFT} fill="var(--surface)" />
    {/* Fenda desbridada e reaproximada com sutura contínua (tubularização) */}
    <path d="M140 116 Q245 140 348 150" stroke="var(--ink-soft)" strokeWidth={1.4} fill="none" strokeDasharray="2 3" />
    {/* Pontos de sutura tubularizando */}
    <g stroke="var(--teal)" strokeWidth={2}>
      {[170, 210, 250, 290, 330].map((x, i) => (
        <path key={i} d={`M${x} 128 Q${x + 6} 150 ${x} 172`} fill="none" />
      ))}
    </g>
    <text x="235" y="90" style={labelStyle} textAnchor="middle">bordas degeneradas ressecadas</text>
    <text x="235" y="230" style={labelStyle} textAnchor="middle">sutura contínua invertente (tubularização)</text>
    <text x="60" y="284" style={monoStyle}>rasgo &lt; 50%: preserva o tendão como unidade funcional</text>
  </svg>
);

/* -------------------------------------------------------------------------- */
/* 7. Passo — tenodese do fibular curto ao fibular longo                       */
/* -------------------------------------------------------------------------- */
const PassoTenodese: FC<FigureProps> = ({ className, title }) => (
  <svg viewBox="0 0 480 300" preserveAspectRatio="xMidYMid meet" role="img" className={className}>
    <title>{title ?? "Excisão do segmento inviável do fibular curto e tenodese látero-lateral ao longo"}</title>
    {/* Fibular longo (íntegro, receptor) */}
    <path d="M100 150 Q240 140 380 150 Q396 152 396 162 L396 178 Q396 188 380 188 Q240 200 100 190 Z" {...SOFT} strokeWidth={2.8} fill="var(--surface)" />
    <text x="80" y="172" style={labelStyle} textAnchor="end">f. longo</text>
    {/* Fibular curto — cotos proximal e distal após excisão do trecho central */}
    <path d="M100 95 Q160 92 210 108 Q224 112 222 128" {...SOFT} fill="none" />
    <path d="M258 128 Q256 112 270 108 Q320 92 380 96" {...SOFT} fill="none" />
    <text x="80" y="96" style={labelStyle} textAnchor="end">f. curto</text>
    {/* Segmento excisado (indicado) */}
    <rect x="224" y="70" width="34" height="20" rx="4" fill="none" stroke="var(--cortical)" strokeWidth={2} className="fx-line" strokeDasharray="4 3" />
    <text x="241" y="60" style={monoStyle} textAnchor="middle">excisado</text>
    {/* Tenodese: cotos suturados ao ventre do fibular longo */}
    <g stroke="var(--teal)" strokeWidth={2}>
      <path d="M214 120 Q214 138 210 156" fill="none" />
      <path d="M266 120 Q266 138 270 156" fill="none" />
      {[200, 214, 228].map((x, i) => (
        <line key={`p${i}`} x1={x} y1={152} x2={x + 8} y2={166} />
      ))}
      {[252, 266, 280].map((x, i) => (
        <line key={`d${i}`} x1={x} y1={152} x2={x + 8} y2={166} />
      ))}
    </g>
    <text x="240" y="215" style={labelStyle} textAnchor="middle">cotos ancorados látero-lateralmente ao fibular longo</text>
    <text x="60" y="284" style={monoStyle}>tornozelo em leve eversão/neutro; tensão fisiológica ao suturar</text>
  </svg>
);

/* -------------------------------------------------------------------------- */
/* 8. Passo — aprofundamento do sulco + reconstrução do retináculo (SPR)       */
/* -------------------------------------------------------------------------- */
const PassoSulcoRetinaculo: FC<FigureProps> = ({ variant = "aprofundamento", className, title }) => {
  const spr = variant === "retinaculo";
  return (
    <svg viewBox="0 0 480 320" preserveAspectRatio="xMidYMid meet" role="img" className={className}>
      <title>
        {title ??
          (spr
            ? "Reinserção/retensionamento do retináculo superior dos fibulares na fíbula"
            : "Aprofundamento do sulco retromaleolar (rebaixamento ósseo intramedular)")}
      </title>
      {/* Fíbula axial */}
      <path d="M110 70 Q220 52 282 94 Q316 124 286 172 Q246 210 168 202 Q110 186 100 132 Q98 94 110 70 Z" {...BONE} />
      <text x="180" y="140" style={labelStyle} textAnchor="middle">Fíbula</text>
      {spr ? (
        <>
          {/* Sulco já aprofundado com tendões dentro */}
          <path d="M282 94 Q338 132 286 172" fill="var(--surface-2, var(--surface))" stroke="var(--ink-soft)" strokeWidth={2} />
          <ellipse cx="308" cy="120" rx="15" ry="10" transform="rotate(26 308 120)" {...SOFT} fill="var(--surface)" />
          <ellipse cx="322" cy="148" rx="12" ry="11" {...SOFT} strokeWidth={2.8} fill="var(--surface)" />
          {/* Retináculo reinserido via âncoras na borda posterolateral */}
          <path d="M286 96 Q344 122 340 174" stroke="var(--teal)" strokeWidth={4} fill="none" />
          <circle cx="290" cy="100" r="4" fill="var(--teal)" />
          <circle cx="292" cy="164" r="4" fill="var(--teal)" />
          <text x="352" y="118" style={labelStyle}>SPR</text>
          <text x="352" y="132" style={labelStyle}>reinserido</text>
          <text x="60" y="300" style={monoStyle}>âncoras na fíbula distal; retensionamento sobre os tendões reduzidos</text>
        </>
      ) : (
        <>
          {/* Sulco original raso e nova profundidade após rebaixamento */}
          <path d="M282 94 Q300 132 286 172" fill="none" stroke="var(--ink-soft)" strokeWidth={1.4} strokeDasharray="4 3" />
          <path d="M282 94 Q344 132 286 172" fill="var(--surface-2, var(--surface))" stroke="var(--cortical)" strokeWidth={2.4} className="fx-line" />
          {/* Osso esponjoso removido por dentro (janela cortical) */}
          <line x1="300" y1="112" x2="322" y2="120" stroke="var(--amber)" strokeWidth={1.6} />
          <line x1="298" y1="132" x2="322" y2="134" stroke="var(--amber)" strokeWidth={1.6} />
          <line x1="300" y1="152" x2="320" y2="148" stroke="var(--amber)" strokeWidth={1.6} />
          <text x="352" y="118" style={labelStyle}>novo sulco</text>
          <text x="352" y="132" style={labelStyle}>mais profundo</text>
          <text x="352" y="160" style={monoStyle}>~+ 4–6 mm</text>
          <text x="60" y="300" style={monoStyle}>brocagem intramedular e impacção da parede posterior (preserva cartilagem)</text>
        </>
      )}
    </svg>
  );
};

/* -------------------------------------------------------------------------- */
export const figures: Record<string, FC<FigureProps>> = {
  "lesao-tendoes-fibulares:anatomia": Anatomia,
  "lesao-tendoes-fibulares:classificacao-spr": ClassificacaoSPR,
  "lesao-tendoes-fibulares:sulco": SulcoRetromaleolar,
  "lesao-tendoes-fibulares:rasgo-brevis": RasgoBrevis,
  "lesao-tendoes-fibulares:via-acesso": ViaRetromaleolar,
  "lesao-tendoes-fibulares:step-reparo": PassoReparo,
  "lesao-tendoes-fibulares:step-tenodese": PassoTenodese,
  "lesao-tendoes-fibulares:step-sulco": PassoSulcoRetinaculo,
};
