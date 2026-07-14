import type { FC } from "react";
import type { FigureProps } from "../../../types/topic";

/* ==========================================================================
   Fraturas de transição do tornozelo — figuras esquemáticas originais
   (line-art, 2 tons, sem copyright). Cores exclusivamente via CSS var.
   Osso: --ink-soft / --surface · fise/cartilagem: --teal · traço de
   fratura: --cortical · medidas/ângulos: --amber · rótulos: --muted.
   Referência editorial: Rockwood and Wilkins' Fractures in Children, 10ª ed.
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

const physis = {
  fill: "none",
  stroke: "var(--teal)",
  strokeWidth: 5,
  strokeLinecap: "round" as const,
};

const fractureStroke = {
  fill: "none",
  stroke: "var(--cortical)",
  strokeWidth: 3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const leader = { stroke: "var(--line-strong)", strokeWidth: 1 };

/* -------------------------------------------------------------------------- */

export const PhysealClosure: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 460 320"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Fechamento fisário assimétrico da tíbia distal (central, medial e por fim anterolateral)"}</title>

    {/* fíbula (maléolo lateral, à direita) */}
    <path
      {...boneBack}
      d="M300 34 L320 34 L326 150 C330 176 326 206 314 228 C305 238 292 234 289 220 C284 190 288 158 290 136 L290 60 Z"
    />
    <path d="M289 190 C300 187 312 187 324 190" {...physis} strokeWidth={4} />

    {/* tíbia: metáfise + diáfise */}
    <path
      {...bone}
      d="M150 26 L214 26 L216 108 C216 132 244 146 248 168 L120 168 C124 146 148 132 148 108 Z"
    />
    {/* fise da tíbia com eminência central (Kump) */}
    <path d="M120 171 C150 168 168 162 184 162 C200 162 220 168 248 171" {...physis} />
    {/* epífise + maléolo medial (à esquerda) */}
    <path
      {...bone}
      d="M122 175 L246 175 C246 200 240 220 222 228 L176 228 C168 242 162 258 156 268 C150 276 140 274 138 264 C132 240 124 206 122 175 Z"
    />

    {/* sequência de fechamento */}
    <g fill="var(--amber)" stroke="var(--surface)" strokeWidth="2">
      <circle cx="184" cy="150" r="10" />
      <circle cx="150" cy="152" r="10" />
      <circle cx="224" cy="156" r="10" />
    </g>
    <g {...mono} fill="var(--surface)" textAnchor="middle">
      <text x="184" y="154">1</text>
      <text x="150" y="156">2</text>
      <text x="224" y="160">3</text>
    </g>
    {/* porção anterolateral ainda aberta */}
    <path d="M214 168 C226 167 236 169 246 172" fill="none" stroke="var(--teal)" strokeWidth="3" strokeDasharray="4 3" />

    <path d="M96 172 L118 172" {...leader} />
    <text x="24" y="176" {...label} fill="var(--teal)">fise (placa</text>
    <text x="24" y="189" {...label} fill="var(--teal)">de crescimento)</text>
    <path d="M150 250 L150 232" {...leader} />
    <text x="88" y="266" {...label}>maléolo medial</text>
    <path d="M182 208 L182 200" {...leader} />
    <text x="164" y="222" {...label}>epífise</text>
    <path d="M182 92 L182 84" {...leader} />
    <text x="166" y="80" {...label}>metáfise</text>
    <path d="M330 150 L340 150" {...leader} />
    <text x="344" y="146" {...label}>fíbula</text>
    <text x="344" y="159" {...label}>(m. lateral)</text>
    <path d="M240 168 L262 158" {...leader} />
    <text x="266" y="156" {...label} fill="var(--teal)">porção antero-</text>
    <text x="266" y="169" {...label} fill="var(--teal)">lateral aberta</text>

    <text x="180" y="20" {...mono} textAnchor="middle">ordem do fechamento fisário</text>
    <text x="230" y="300" {...label} textAnchor="middle">
      1 central · 2 medial · 3 anterolateral (por último) — a assimetria explica a fratura de transição.
    </text>
  </svg>
);

/* -------------------------------------------------------------------------- */

export const TillauxFracture: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 440 300"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Fratura de Tillaux juvenil: Salter-Harris III da epífise tibial anterolateral"}</title>

    {/* metáfise da tíbia */}
    <path {...bone} d="M132 24 L206 24 L210 96 C210 118 236 130 240 150 L110 150 C114 130 128 118 128 96 Z" />
    {/* fise */}
    <path d="M110 153 C142 150 164 146 184 146 C204 146 222 150 240 153" {...physis} />
    {/* epífise principal (medial permanece unida) */}
    <path
      {...bone}
      d="M112 157 L196 157 L196 208 C196 216 188 220 178 220 L160 220 C152 232 146 246 140 254 C134 262 124 260 122 250 C118 226 112 190 112 157 Z"
    />
    {/* fragmento anterolateral avulsionado (SH-III) */}
    <path
      {...bone}
      d="M204 157 L240 157 C240 182 234 202 216 210 L200 210 C198 194 200 172 204 157 Z"
      fill="var(--cortical-tint)"
      stroke="var(--cortical)"
    />

    {/* fíbula */}
    <path {...boneBack} d="M296 40 L316 40 L322 150 C326 172 322 198 312 214 C303 222 292 218 290 206 C286 182 289 152 291 134 L291 60 Z" />

    {/* traço epifisário vertical + ao longo da fise */}
    <path d="M200 210 L200 158" {...fractureStroke} />
    <path d="M200 156 L240 154" {...fractureStroke} />

    {/* ligamento tibiofibular anteroinferior tracionando o fragmento */}
    <path d="M232 176 C258 172 278 168 294 164" fill="none" stroke="var(--amber)" strokeWidth="3.5" strokeLinecap="round" />
    <path d="M226 184 C252 190 278 190 298 184" fill="none" stroke="var(--amber)" strokeWidth="1.5" strokeDasharray="5 4" markerEnd="url(#tillauxPull)" />
    <defs>
      <marker id="tillauxPull" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M0 0 L10 5 L0 10 Z" fill="var(--amber)" />
      </marker>
    </defs>

    {/* diástase articular */}
    <line x1="196" y1="228" x2="216" y2="228" stroke="var(--amber)" strokeWidth="1.5" />
    <line x1="196" y1="222" x2="196" y2="234" stroke="var(--amber)" />
    <line x1="216" y1="222" x2="216" y2="234" stroke="var(--amber)" />
    <text x="206" y="248" {...label} textAnchor="middle" fill="var(--amber)">&gt; 2 mm</text>

    <path d="M222 200 L246 210" {...leader} />
    <text x="250" y="212" {...label} fill="var(--cortical)">fragmento anterolateral</text>
    <text x="250" y="225" {...label} fill="var(--cortical)">(SH-III)</text>
    <path d="M270 170 L268 158" {...leader} />
    <text x="252" y="150" {...label} fill="var(--amber)">lig. tibiofibular ant.-inf.</text>
    <path d="M92 152 L108 152" {...leader} />
    <text x="24" y="156" {...label} fill="var(--teal)">fise</text>

    <text x="200" y="18" {...mono} textAnchor="middle">Tillaux juvenil · vista AP en face</text>
    <text x="220" y="284" {...label} textAnchor="middle">
      Avulsão epifisária pelo ligamento tibiofibular anteroinferior; a fise medial já está fechada.
    </text>
  </svg>
);

/* -------------------------------------------------------------------------- */

export const TriplaneFracture: FC<FigureProps> = ({ className, title, variant }) => {
  const three = (variant ?? "2frag").toLowerCase().includes("3");

  return (
    <svg
      viewBox="0 0 460 320"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `Fratura triplanar (${three ? "três fragmentos" : "dois fragmentos"}): combinação de planos sagital, axial e coronal`}</title>

      {/* Vista lateral (perfil) da tíbia distal — anterior à esquerda, posterior à direita */}
      <path
        {...bone}
        d="M120 26 L214 26 L216 104 C216 128 236 142 240 168 L96 168 C100 142 116 128 118 104 Z"
      />
      {/* fise (plano axial) */}
      <path d="M96 171 C140 168 176 166 200 166 C216 166 230 168 240 171" {...physis} />
      {/* epífise */}
      <path
        {...bone}
        d="M98 175 L240 175 C240 210 232 236 214 244 L128 244 C112 236 100 210 98 175 Z"
      />

      {/* plano sagital: traço metafisário (fragmento de Thurston-Holland, posterior/direita) */}
      <path d="M186 26 C190 70 190 120 190 166" {...fractureStroke} strokeDasharray="0" />
      {/* plano axial: descolamento fisário conectando os dois traços */}
      <path d="M190 166 L120 168" {...fractureStroke} />
      {/* plano coronal: traço epifisário vertical (anterior/esquerda) */}
      <path d="M150 168 L150 240" {...fractureStroke} />

      {three && (
        <>
          {/* terceiro fragmento anterolateral separado */}
          <path
            d="M150 168 L150 240"
            fill="none"
            stroke="var(--cortical)"
            strokeWidth="3"
          />
          <path d="M124 176 L124 232" {...fractureStroke} />
          <text x="98" y="266" {...label} fill="var(--cortical)">3º fragmento</text>
          <text x="98" y="279" {...label} fill="var(--cortical)">anterolateral</text>
        </>
      )}

      {/* rótulos de plano */}
      <path d="M188 60 L212 60" {...leader} />
      <text x="216" y="57" {...label} fill="var(--cortical)">plano sagital</text>
      <text x="216" y="70" {...label}>metáfise · SH-II</text>
      <path d="M120 168 L96 150" {...leader} />
      <text x="20" y="147" {...label} fill="var(--teal)">plano axial · fise</text>
      <path d="M150 210 L126 210" {...leader} />
      <text x="20" y="207" {...label} fill="var(--cortical)">plano coronal</text>
      <text x="20" y="220" {...label}>epífise · SH-III</text>

      <path d="M198 130 L238 118" {...leader} />
      <text x="242" y="116" {...label}>fragmento de</text>
      <text x="242" y="129" {...label}>Thurston-Holland</text>

      <text x="180" y="18" {...mono} textAnchor="middle">
        triplanar · {three ? "3 fragmentos" : "2 fragmentos"}
      </text>
      <text x="230" y="304" {...label} textAnchor="middle">
        Metáfise (sagital) + fise (axial) + epífise (coronal): comporta-se como Salter-Harris IV.
      </text>
    </svg>
  );
};

/* -------------------------------------------------------------------------- */

export const CtDisplacement: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 480 300"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "A radiografia subestima o desvio articular; a TC quantifica a diástase e o degrau"}</title>

    {/* Painel A: TC axial en face do plafond */}
    <text x="120" y="24" {...mono} textAnchor="middle">TC axial (en face)</text>
    <path
      {...bone}
      d="M52 96 C70 70 116 62 156 78 C192 92 200 132 186 170 C170 210 118 224 82 202 C50 182 40 132 52 96 Z"
    />
    {/* traço + diástase */}
    <path d="M150 84 C150 130 150 170 132 200" {...fractureStroke} />
    <path d="M158 82 C158 128 160 168 150 198" {...fractureStroke} />
    <line x1="150" y1="140" x2="159" y2="140" stroke="var(--amber)" strokeWidth="1.5" />
    <line x1="150" y1="134" x2="150" y2="146" stroke="var(--amber)" />
    <line x1="159" y1="134" x2="159" y2="146" stroke="var(--amber)" />
    <path d="M162 140 L196 128" {...leader} />
    <text x="200" y="126" {...label} fill="var(--amber)">diástase</text>
    <text x="200" y="139" {...label} fill="var(--amber)">articular &gt; 2 mm</text>
    <text x="120" y="238" {...label} textAnchor="middle">degrau e diástase medidos no corte axial</text>

    {/* divisória */}
    <line x1="248" y1="40" x2="248" y2="250" stroke="var(--line-strong)" strokeWidth="1" strokeDasharray="4 4" />

    {/* Painel B: perfil (RX lateral) com desvio metafisário */}
    <text x="368" y="24" {...mono} textAnchor="middle">RX perfil</text>
    <path {...bone} d="M330 44 L392 44 L396 118 C396 138 414 150 418 168 L306 168 C310 150 326 138 326 118 Z" />
    <path d="M306 171 C338 168 360 166 396 171" {...physis} />
    {/* fragmento metafisário posterior desviado */}
    <path {...bone} d="M366 44 L392 44 L396 118 C396 130 402 140 410 150 L376 158 C368 130 366 86 366 44 Z" fill="var(--cortical-tint)" stroke="var(--cortical)" />
    <path d="M366 46 C368 90 372 130 380 154" {...fractureStroke} />
    <line x1="380" y1="132" x2="396" y2="132" stroke="var(--amber)" strokeWidth="1.5" />
    <line x1="380" y1="126" x2="380" y2="138" stroke="var(--amber)" />
    <line x1="396" y1="126" x2="396" y2="138" stroke="var(--amber)" />
    <text x="404" y="118" {...label} fill="var(--amber)">&gt; 1 mm</text>
    <text x="368" y="212" {...label} textAnchor="middle">desvio metafisário &gt; 1 mm</text>
    <text x="368" y="226" {...label} textAnchor="middle">no perfil prediz desvio</text>
    <text x="368" y="240" {...label} textAnchor="middle">articular relevante na TC</text>

    <text x="240" y="284" {...label} textAnchor="middle">
      TC com reconstrução multiplanar define a geometria, o número de fragmentos e o desvio articular real.
    </text>
  </svg>
);

/* -------------------------------------------------------------------------- */

export const AnterolateralApproach: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 440 300"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Via anterolateral do tornozelo para o fragmento de transição e estruturas em risco"}</title>

    {/* contorno anterior do tornozelo */}
    <path
      d="M112 40 C168 26 262 26 316 46 C348 58 360 96 356 138 C352 182 336 226 312 262 L128 262 C104 224 90 180 86 136 C82 96 88 60 112 40 Z"
      fill="var(--surface-2, var(--surface))"
      stroke="var(--line-strong)"
      strokeWidth="1.4"
    />
    {/* tíbia distal e fise visíveis por transparência */}
    <path {...boneBack} d="M150 70 L288 70 L296 150 L138 150 Z" opacity="0.6" />
    <path d="M138 152 C186 149 240 149 296 152" {...physis} strokeWidth={4} />
    {/* fragmento anterolateral sob a incisão */}
    <path d="M244 96 L296 96 L300 148 L246 148 Z" fill="var(--cortical-tint)" stroke="var(--cortical)" strokeWidth="2" />

    {/* incisão anterolateral */}
    <path d="M286 78 C296 108 296 138 288 168" fill="none" stroke="var(--teal)" strokeWidth="3.5" strokeLinecap="round" />

    {/* nervo fibular superficial (risco) */}
    <path d="M304 60 C286 96 280 140 288 186" fill="none" stroke="var(--amber)" strokeWidth="3" strokeLinecap="round" />
    {/* feixe tibial anterior (medial) */}
    <path d="M182 60 C176 110 180 168 194 214" fill="none" stroke="var(--amber)" strokeWidth="3" strokeLinecap="round" strokeDasharray="5 4" />

    <path d="M288 120 L318 116" {...leader} />
    <text x="322" y="118" {...label} fill="var(--teal)">incisão anterolateral</text>
    <path d="M290 150 L316 158" {...leader} />
    <text x="320" y="160" {...label} fill="var(--cortical)">fragmento de Tillaux</text>
    <path d="M300 90 L322 84" {...leader} />
    <text x="326" y="82" {...label} fill="var(--amber)">n. fibular superficial</text>
    <path d="M186 120 L120 116" {...leader} />
    <text x="24" y="118" {...label} fill="var(--amber)">feixe tibial anterior (medial)</text>

    <text x="214" y="22" {...mono} textAnchor="middle">via anterolateral</text>
    <text x="220" y="286" {...label} textAnchor="middle">
      Proteger o nervo fibular superficial; a artrotomia expõe o degrau articular para redução direta.
    </text>
  </svg>
);

/* -------------------------------------------------------------------------- */

export const ClosedReduction: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 480 280"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Redução fechada da fratura de transição: da rotação externa deslocada à rotação interna com pressão anteroposterior"}</title>

    {[110, 330].map((cx, i) => {
      const reduced = i === 1;
      return (
        <g key={cx}>
          {/* tíbia distal */}
          <path {...bone} d={`M${cx - 44} 44 L${cx + 30} 44 L${cx + 32} 104 C${cx + 32} 122 ${cx + 52} 132 ${cx + 56} 150 L${cx - 64} 150 C${cx - 60} 132 ${cx - 42} 122 ${cx - 42} 104 Z`} />
          <path d={`M${cx - 64} 153 C${cx - 30} 150 ${cx} 148 ${cx + 18} 148 C${cx + 34} 148 ${cx + 46} 150 ${cx + 56} 153`} {...physis} />
          {/* epífise + fragmento */}
          <path {...bone} d={`M${cx - 62} 157 L${cx + 30} 157 C${cx + 30} 178 ${cx + 24} 194 ${cx + 10} 200 L${cx - 34} 200 C${cx - 42} 210 ${cx - 48} 224 ${cx - 52} 232 C${cx - 56} 240 ${cx - 64} 236 ${cx - 64} 226 C${cx - 64} 200 ${cx - 64} 176 ${cx - 62} 157 Z`} />
          {/* fragmento anterolateral */}
          <path
            d={reduced
              ? `M${cx + 34} 157 L${cx + 56} 157 C${cx + 56} 180 ${cx + 50} 194 ${cx + 38} 200 L${cx + 30} 200 C${cx + 30} 182 ${cx + 32} 168 ${cx + 34} 157 Z`
              : `M${cx + 40} 158 L${cx + 64} 162 C${cx + 66} 186 ${cx + 58} 200 ${cx + 44} 206 L${cx + 36} 204 C${cx + 34} 186 ${cx + 36} 172 ${cx + 40} 158 Z`}
            fill="var(--cortical-tint)"
            stroke="var(--cortical)"
            strokeWidth="2"
          />
          {!reduced && (
            <line x1={cx + 32} y1="180" x2={cx + 40} y2="180" stroke="var(--amber)" strokeWidth="1.5" />
          )}
        </g>
      );
    })}

    {/* setas de manobra */}
    <path d="M186 120 C216 106 236 106 264 120" fill="none" stroke="var(--teal)" strokeWidth="3" markerEnd="url(#redArrow)" />
    <text x="225" y="98" {...label} textAnchor="middle" fill="var(--teal)">rotação interna do pé</text>
    <path d="M300 214 C312 226 330 230 350 224" fill="none" stroke="var(--teal)" strokeWidth="2.5" markerEnd="url(#redArrow)" />
    <text x="366" y="238" {...label} fill="var(--teal)">pressão AP</text>
    <defs>
      <marker id="redArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M0 0 L10 5 L0 10 Z" fill="var(--teal)" />
      </marker>
    </defs>

    <text x="110" y="34" {...mono} textAnchor="middle">rotação externa · desviado</text>
    <text x="330" y="34" {...mono} textAnchor="middle">reduzido · congruente</text>
    <text x="240" y="270" {...label} textAnchor="middle">
      Artrograma ou fluoroscopia confirmam a congruência; degrau residual &gt; 2 mm indica redução aberta.
    </text>
  </svg>
);

/* -------------------------------------------------------------------------- */

export const Fixation: FC<FigureProps> = ({ className, title, variant }) => {
  const triplane = (variant ?? "tillaux").toLowerCase().includes("triplan");

  return (
    <svg
      viewBox="0 0 440 320"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? `Fixação ${triplane ? "da fratura triplanar (parafusos epifisário e metafisário)" : "da fratura de Tillaux (parafuso epifisário paralelo à articulação)"}`}</title>

      {/* metáfise da tíbia */}
      <path {...bone} d="M132 24 L214 24 L216 100 C216 124 246 138 250 164 L110 164 C114 138 142 124 142 100 Z" />
      {/* fise */}
      <path d="M110 167 C146 164 176 160 196 160 C216 160 236 164 250 167" {...physis} />
      {/* epífise + maléolo medial */}
      <path
        {...bone}
        d="M112 171 L250 171 C250 204 242 230 224 240 L172 240 C164 256 158 274 152 284 C146 292 136 290 134 278 C128 250 116 210 112 171 Z"
      />
      {/* fíbula */}
      <path {...boneBack} d="M300 44 L320 44 L326 164 C330 188 326 216 314 232 C305 240 292 236 290 224 C286 198 289 166 291 148 L291 62 Z" />

      {/* parafuso epifisário transverso (poupa a fise) */}
      <g>
        <line x1="132" y1="200" x2="244" y2="200" stroke="var(--teal)" strokeWidth="7" strokeLinecap="round" />
        <line x1="132" y1="200" x2="244" y2="200" stroke="var(--surface)" strokeWidth="2.5" strokeDasharray="3 6" />
        <circle cx="244" cy="200" r="6" fill="var(--surface)" stroke="var(--teal)" strokeWidth="2.5" />
      </g>

      {triplane ? (
        <>
          {/* parafuso metafisário AP (fragmento de Thurston-Holland), acima da fise */}
          <g>
            <line x1="238" y1="120" x2="150" y2="120" stroke="var(--teal)" strokeWidth="7" strokeLinecap="round" />
            <line x1="238" y1="120" x2="150" y2="120" stroke="var(--surface)" strokeWidth="2.5" strokeDasharray="3 6" />
            <circle cx="238" cy="120" r="6" fill="var(--surface)" stroke="var(--teal)" strokeWidth="2.5" />
          </g>
          <path d="M244 120 L272 112" {...leader} />
          <text x="276" y="110" {...label} fill="var(--teal)">parafuso metafisário</text>
          <text x="276" y="123" {...label}>(Thurston-Holland)</text>
          <text x="220" y="18" {...mono} textAnchor="middle">triplanar · fixação em dois planos</text>
        </>
      ) : (
        <text x="200" y="18" {...mono} textAnchor="middle">Tillaux · parafuso epifisário isolado</text>
      )}

      <path d="M186 200 L150 216" {...leader} />
      <text x="46" y="220" {...label} fill="var(--teal)">parafuso epifisário paralelo à articulação</text>
      <path d="M170 160 L120 150" {...leader} />
      <text x="24" y="146" {...label} fill="var(--teal)">poupa a fise</text>

      <text x="220" y="306" {...label} textAnchor="middle">
        Fixação com parafuso poupando a fise sempre que possível; TC guia a direção e o comprimento.
      </text>
    </svg>
  );
};

/* -------------------------------------------------------------------------- */

export const figures: Record<string, FC<FigureProps>> = {
  "fratura-transicao-tornozelo:anatomia": PhysealClosure,
  "fratura-transicao-tornozelo:tillaux": TillauxFracture,
  "fratura-transicao-tornozelo:triplano": TriplaneFracture,
  "fratura-transicao-tornozelo:tc-desvio": CtDisplacement,
  "fratura-transicao-tornozelo:via-anterolateral": AnterolateralApproach,
  "fratura-transicao-tornozelo:reducao": ClosedReduction,
  "fratura-transicao-tornozelo:fixacao": Fixation,
};
