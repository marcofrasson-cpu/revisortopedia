import type { FC } from "react";
import type { FigureProps } from "../../../types/topic";

/* ============================================================================
   Figuras — Tendinopatia do Aquiles
   SVG esquemático, line-art 2 tons, sem copyright. Cores só via CSS vars.
   Prefixo obrigatório de id: "tendinopatia-aquiles:"
   ========================================================================== */

const LABEL = {
  fontSize: 11,
  fill: "var(--muted)",
  fontFamily: "var(--font-body, sans-serif)",
} as const;

const CODE = {
  fontSize: 11,
  fill: "var(--muted)",
  fontFamily: "var(--font-mono, monospace)",
} as const;

/* --- Anatomia: perfil sagital do tendão calcâneo -------------------------- */
/* variant: "insercional" | "medio-porcao" destaca a zona doente */
const Anatomia: FC<FigureProps> = ({ className, title, variant }) => {
  const zone = variant ?? "medio-porcao";
  return (
    <svg
      viewBox="0 0 320 320"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? "Anatomia do tendão calcâneo (Aquiles) — perfil sagital"}</title>

      {/* Tíbia distal */}
      <path
        d="M120 20 L120 200 L150 200 L150 20 Z"
        stroke="var(--ink-soft)"
        fill="var(--surface)"
        strokeWidth="2"
      />
      {/* Calcâneo */}
      <path
        d="M150 236 L150 268 Q150 286 172 288 L236 288 Q252 286 250 270 Q248 250 220 244 L182 240 Q160 236 150 236 Z"
        stroke="var(--ink-soft)"
        fill="var(--surface)"
        strokeWidth="2"
      />
      {/* Gastrocnêmio (ventre muscular) */}
      <path
        d="M150 30 Q186 40 190 90 Q192 130 176 170"
        stroke="var(--teal)"
        fill="var(--surface-2, var(--surface))"
        strokeWidth="2"
      />
      {/* Sóleo (profundo) */}
      <path
        d="M150 70 Q174 84 176 120 Q176 150 168 178"
        stroke="var(--teal)"
        fill="none"
        strokeWidth="1.5"
        strokeDasharray="3 3"
      />
      {/* Tendão calcâneo — dois feixes convergindo à tuberosidade */}
      <path
        d="M176 170 Q172 210 176 246 L182 246 Q184 210 186 172 Z"
        stroke="var(--teal)"
        fill="var(--surface-2, var(--surface))"
        strokeWidth="2"
      />
      {/* Zona hipovascular (2–6 cm) marcada por tracejado */}
      <line x1="163" y1="188" x2="197" y2="188" stroke="var(--muted)" strokeWidth="0.75" strokeDasharray="2 2" />
      <line x1="163" y1="222" x2="197" y2="222" stroke="var(--muted)" strokeWidth="0.75" strokeDasharray="2 2" />

      {/* Coxim adiposo de Kager */}
      <path
        d="M150 205 Q160 215 168 235 L152 236 Q150 220 150 205 Z"
        stroke="var(--ink-soft)"
        fill="var(--surface-2, var(--surface))"
        strokeWidth="1"
        opacity="0.6"
      />
      {/* Bursa retrocalcânea */}
      <ellipse cx="176" cy="250" rx="7" ry="6" stroke="var(--ink-soft)" fill="var(--surface-2, var(--surface))" strokeWidth="1" />

      {/* Zona doente destacada conforme variante */}
      {zone === "medio-porcao" && (
        <rect x="164" y="188" width="20" height="34" fill="var(--amber)" opacity="0.20" rx="3" />
      )}
      {zone === "insercional" && (
        <ellipse cx="180" cy="246" rx="16" ry="12" fill="var(--amber)" opacity="0.22" />
      )}

      <text x="60" y="110" style={LABEL}>Tíbia</text>
      <line x1="98" y1="106" x2="122" y2="110" stroke="var(--muted)" strokeWidth="0.75" />
      <text x="204" y="70" style={{ ...LABEL, fill: "var(--teal)" }}>Gastrocnêmio</text>
      <line x1="202" y1="66" x2="184" y2="80" stroke="var(--muted)" strokeWidth="0.75" />
      <text x="200" y="140" style={{ ...LABEL, fill: "var(--teal)" }}>Sóleo</text>
      <text x="210" y="205" style={{ ...LABEL, fill: "var(--amber)" }}>Médio-porção 2–6 cm</text>
      <line x1="208" y1="201" x2="186" y2="205" stroke="var(--muted)" strokeWidth="0.75" />
      <text x="200" y="270" style={LABEL}>Bursa retrocalcânea</text>
      <line x1="198" y1="266" x2="182" y2="252" stroke="var(--muted)" strokeWidth="0.75" />
      <text x="240" y="300" style={LABEL}>Calcâneo</text>
      <text x="40" y="235" style={LABEL}>Coxim de Kager</text>
      <line x1="88" y1="231" x2="150" y2="222" stroke="var(--muted)" strokeWidth="0.75" />
    </svg>
  );
};

/* --- Classificação topográfica: insercional vs médio-porção (clicável) ---- */
const Localizacao: FC<FigureProps> = ({ className, title, variant }) => {
  const v = variant ?? "medio-porcao";
  return (
    <svg
      viewBox="0 0 320 300"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? "Localização — tendinopatia insercional vs médio-porção (não-insercional)"}</title>

      {/* Calcâneo */}
      <path
        d="M120 220 L120 250 Q120 270 144 272 L214 272 Q232 270 230 252 Q228 230 198 224 L156 220 Q132 218 120 220 Z"
        stroke="var(--ink-soft)"
        fill="var(--surface)"
        strokeWidth="2"
      />
      {/* Tendão calcâneo */}
      <path
        d="M150 40 Q144 130 150 226 L172 226 Q178 130 174 40 Z"
        stroke="var(--teal)"
        fill="var(--surface-2, var(--surface))"
        strokeWidth="2"
      />

      {v === "medio-porcao" && (
        <>
          {/* Fusiforme espessamento 2–6 cm da inserção */}
          <path
            d="M150 120 Q136 155 150 195 L172 195 Q186 155 172 120 Z"
            stroke="var(--cortical)"
            fill="var(--amber)"
            fillOpacity="0.18"
            strokeWidth="2"
            className="fx-line"
          />
          {/* Neovasos entrando pela face ventral */}
          <path d="M138 150 q6 6 14 8 M138 170 q8 4 14 6" stroke="var(--cortical)" strokeWidth="1.2" fill="none" className="fx-line" />
          <text x="196" y="150" style={CODE}>2–6 cm</text>
          <text x="188" y="168" style={LABEL}>fusiforme, doloroso</text>
          <line x1="186" y1="164" x2="174" y2="158" stroke="var(--muted)" strokeWidth="0.75" />
          <text x="30" y="150" style={{ ...LABEL, fill: "var(--cortical)" }}>Espessamento</text>
        </>
      )}

      {v === "insercional" && (
        <>
          {/* Deformidade de Haglund (proeminência posterossuperior) */}
          <path
            d="M120 220 Q108 210 116 200 Q130 200 132 218 Z"
            stroke="var(--cortical)"
            fill="var(--surface-2, var(--surface))"
            strokeWidth="2"
            className="fx-line"
          />
          {/* Entesófito / calcificação na inserção */}
          <path d="M150 224 l8 -10 l6 8 Z" stroke="var(--cortical)" fill="var(--amber)" fillOpacity="0.25" strokeWidth="1.5" className="fx-line" />
          {/* Bursa retrocalcânea inflamada */}
          <ellipse cx="140" cy="214" rx="8" ry="6" stroke="var(--amber)" fill="var(--amber)" fillOpacity="0.2" strokeWidth="1.5" />
          <text x="30" y="205" style={{ ...LABEL, fill: "var(--cortical)" }}>Haglund</text>
          <line x1="70" y1="201" x2="114" y2="205" stroke="var(--muted)" strokeWidth="0.75" />
          <text x="196" y="210" style={LABEL}>Entesófito / calcificação</text>
          <line x1="194" y1="206" x2="162" y2="216" stroke="var(--muted)" strokeWidth="0.75" />
          <text x="196" y="240" style={{ ...LABEL, fill: "var(--amber)" }}>Bursa retrocalcânea</text>
        </>
      )}

      <text x="120" y="30" style={{ ...LABEL, fill: "var(--teal)" }}>Tendão calcâneo</text>
      <text x="180" y="290" style={LABEL}>Calcâneo</text>
    </svg>
  );
};

/* --- Patologia: degeneração (não inflamação) ------------------------------ */
const Patologia: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 320 240"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Patologia — tendinose: colágeno desorganizado e neovascularização, sem inflamação"}</title>

    {/* Painel esquerdo — tendão normal */}
    <rect x="16" y="30" width="130" height="170" rx="6" stroke="var(--ink-soft)" fill="var(--surface)" strokeWidth="1.5" />
    {[0, 1, 2, 3, 4, 5].map((i) => (
      <line
        key={`n${i}`}
        x1="30"
        y1={50 + i * 26}
        x2="132"
        y2={50 + i * 26}
        stroke="var(--teal)"
        strokeWidth="2"
      />
    ))}
    <text x="34" y="222" style={LABEL}>Tendão normal</text>
    <text x="34" y="46" style={CODE}>colágeno paralelo</text>

    {/* Painel direito — tendinose */}
    <rect x="174" y="30" width="130" height="170" rx="6" stroke="var(--ink-soft)" fill="var(--surface-2, var(--surface))" strokeWidth="1.5" />
    {/* Fibras onduladas/desorganizadas */}
    {[0, 1, 2, 3, 4, 5].map((i) => (
      <path
        key={`d${i}`}
        d={`M188 ${50 + i * 26} q16 -8 30 0 q16 8 32 0 q16 -8 30 0`}
        stroke="var(--cortical)"
        strokeWidth="2"
        fill="none"
        className="fx-line"
      />
    ))}
    {/* Neovasos */}
    <path d="M210 70 q6 20 -2 40 M240 90 q-6 24 4 44" stroke="var(--amber)" strokeWidth="1.5" fill="none" />
    <circle cx="210" cy="70" r="2.5" fill="var(--amber)" />
    <circle cx="240" cy="90" r="2.5" fill="var(--amber)" />
    <text x="182" y="222" style={LABEL}>Tendinose</text>
    <text x="182" y="46" style={{ ...CODE, fill: "var(--cortical)" }}>fibras onduladas</text>
    <text x="180" y="160" style={{ ...LABEL, fill: "var(--amber)" }}>neovasos</text>
  </svg>
);

/* --- Alfredson: exercício excêntrico (joelho estendido / fletido) --------- */
/* variant: "joelho-estendido" | "joelho-fletido"; activeStep 1=subida 2=descida */
const Alfredson: FC<FigureProps> = ({ className, title, variant, activeStep }) => {
  const bent = variant === "joelho-fletido";
  const lowering = activeStep === 2;
  return (
    <svg
      viewBox="0 0 320 260"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title ?? "Protocolo excêntrico de Alfredson — descida do calcanhar na borda do degrau"}</title>

      {/* Degrau */}
      <path d="M40 200 L150 200 L150 240 L40 240 Z" stroke="var(--ink-soft)" fill="var(--surface-2, var(--surface))" strokeWidth="2" />
      <line x1="150" y1="200" x2="150" y2="240" stroke="var(--ink-soft)" strokeWidth="2.5" />

      {/* Perna (coxa + panturrilha) */}
      {bent ? (
        <path d="M180 60 L172 120 Q168 145 178 165" stroke="var(--ink-soft)" fill="none" strokeWidth="3" />
      ) : (
        <path d="M178 60 L178 165" stroke="var(--ink-soft)" fill="none" strokeWidth="3" />
      )}

      {/* Pé no antepé, calcanhar caindo abaixo do degrau (excêntrico) */}
      {lowering ? (
        <>
          {/* calcanhar abaixo do nível do degrau */}
          <path d="M160 200 Q178 202 192 200 L188 226 Q170 230 158 218 Z" stroke="var(--ink-soft)" fill="var(--surface)" strokeWidth="2" />
          <line x1="150" y1="200" x2="164" y2="204" stroke="var(--ink-soft)" strokeWidth="2" />
          {/* seta de descida */}
          <path d="M205 175 l0 34 M200 202 l5 8 l5 -8" stroke="var(--amber)" strokeWidth="2" fill="none" />
          <text x="212" y="200" style={{ ...LABEL, fill: "var(--amber)" }}>fase excêntrica</text>
        </>
      ) : (
        <>
          {/* na ponta do pé, calcanhar elevado */}
          <path d="M156 180 Q176 178 192 182 L188 200 Q168 202 156 196 Z" stroke="var(--ink-soft)" fill="var(--surface)" strokeWidth="2" />
          <line x1="150" y1="200" x2="160" y2="192" stroke="var(--ink-soft)" strokeWidth="2" />
          <path d="M205 210 l0 -34 M200 183 l5 -8 l5 8" stroke="var(--muted)" strokeWidth="1.5" fill="none" />
          <text x="212" y="180" style={LABEL}>posição inicial</text>
        </>
      )}

      {/* Tendão de Aquiles em tração */}
      <path d="M178 150 Q176 172 174 190" stroke="var(--teal)" fill="none" strokeWidth="2.5" />

      <text x="30" y="255" style={CODE}>3×15 · 2×/dia · 7 d/sem · 12 sem</text>
      <text x="30" y="40" style={LABEL}>
        {bent ? "Joelho fletido (sóleo)" : "Joelho estendido (gastrocnêmio)"}
      </text>
      <line x1="30" y1="48" x2="176" y2={bent ? 100 : 90} stroke="var(--muted)" strokeWidth="0.75" />
    </svg>
  );
};

/* --- ESWT: ondas de choque extracorpóreas --------------------------------- */
const Eswt: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 320 240"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Terapia por ondas de choque (ESWT) aplicada ao tendão calcâneo"}</title>

    {/* Calcâneo */}
    <path d="M60 180 L60 208 Q60 224 82 226 L150 226 Q166 224 164 208 Q162 190 136 184 L96 180 Z" stroke="var(--ink-soft)" fill="var(--surface)" strokeWidth="2" />
    {/* Tendão */}
    <path d="M96 60 Q90 130 96 184 L118 184 Q124 130 118 60 Z" stroke="var(--teal)" fill="var(--surface-2, var(--surface))" strokeWidth="2" />
    {/* Foco doente */}
    <ellipse cx="107" cy="128" rx="12" ry="20" fill="var(--amber)" opacity="0.2" />

    {/* Aplicador / transdutor */}
    <path d="M210 90 L260 70 L268 92 L222 118 Z" stroke="var(--ink-soft)" fill="var(--surface-2, var(--surface))" strokeWidth="2" />
    <rect x="250" y="58" width="40" height="18" rx="3" transform="rotate(-20 270 67)" stroke="var(--ink-soft)" fill="var(--surface)" strokeWidth="1.5" />

    {/* Frentes de onda convergindo ao foco */}
    {[0, 1, 2].map((i) => (
      <path
        key={i}
        d={`M${200 - i * 12} ${104 + i * 2} Q${150} ${120} ${120} ${128}`}
        stroke="var(--amber)"
        strokeWidth="1.4"
        fill="none"
        strokeDasharray="4 4"
      />
    ))}
    <path d="M124 128 l10 -3 M124 128 l7 7" stroke="var(--amber)" strokeWidth="1.5" fill="none" />

    <text x="70" y="45" style={{ ...LABEL, fill: "var(--teal)" }}>Tendão calcâneo</text>
    <text x="210" y="140" style={LABEL}>Aplicador ESWT</text>
    <text x="150" y="175" style={{ ...LABEL, fill: "var(--amber)" }}>foco no ponto doloroso</text>
    <line x1="148" y1="171" x2="118" y2="140" stroke="var(--muted)" strokeWidth="0.75" />
    <text x="60" y="215" style={LABEL}>Calcâneo</text>
  </svg>
);

/* --- Via de acesso: incisão posteromedial --------------------------------- */
const ViaAcesso: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 320 260"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Via posteromedial ao tendão calcâneo e estruturas em risco"}</title>

    {/* Contorno posterior da perna/calcanhar */}
    <path d="M150 20 Q150 130 150 200 Q150 224 176 234 L236 240" stroke="var(--ink-soft)" fill="none" strokeWidth="2" />
    {/* Tendão calcâneo */}
    <path d="M150 40 Q140 130 148 210 L172 210 Q180 130 172 40 Z" stroke="var(--teal)" fill="var(--surface-2, var(--surface))" strokeWidth="2" />

    {/* Incisão posteromedial (medial à borda do tendão) */}
    <line x1="140" y1="70" x2="138" y2="200" stroke="var(--cortical)" strokeWidth="2.5" strokeDasharray="6 4" />

    {/* Nervo sural (posterolateral, a evitar) */}
    <path d="M186 60 Q198 130 178 220" stroke="var(--teal)" fill="none" strokeWidth="2" />
    {/* Feixe tibial posterior (medial profundo) */}
    <path d="M120 70 Q108 130 118 210" stroke="var(--teal)" fill="none" strokeWidth="2" strokeDasharray="3 3" />

    <text x="150" y="120" style={{ ...LABEL, fill: "var(--cortical)" }}>Incisão posteromedial</text>
    <text x="190" y="90" style={{ ...LABEL, fill: "var(--teal)" }}>N. sural (evitar)</text>
    <line x1="188" y1="86" x2="184" y2="100" stroke="var(--muted)" strokeWidth="0.75" />
    <text x="20" y="120" style={{ ...LABEL, fill: "var(--teal)" }}>Feixe tibial post.</text>
    <line x1="70" y1="116" x2="116" y2="120" stroke="var(--muted)" strokeWidth="0.75" />
    <text x="180" y="40" style={{ ...LABEL, fill: "var(--teal)" }}>Tendão calcâneo</text>
  </svg>
);

/* --- Técnica passo 1: débridamento + ressecção de Haglund ------------------ */
const Step1: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 320 240"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Passo 1 — débridamento do tecido degenerado e ressecção da proeminência de Haglund"}</title>

    {/* Calcâneo com proeminência de Haglund */}
    <path d="M70 170 L70 198 Q70 214 92 216 L160 216 Q176 214 174 198 Q172 178 146 172 L100 168 Q80 166 70 170 Z" stroke="var(--ink-soft)" fill="var(--surface)" strokeWidth="2" />
    {/* Proeminência posterossuperior (a ressecar) */}
    <path d="M70 170 Q58 158 68 148 Q84 150 84 170 Z" stroke="var(--cortical)" fill="var(--surface-2, var(--surface))" strokeWidth="2" className="fx-line" />
    {/* Linha de osteotomia */}
    <line x1="66" y1="150" x2="92" y2="176" stroke="var(--amber)" strokeWidth="2" strokeDasharray="5 4" />

    {/* Tendão com foco degenerado excisado */}
    <path d="M96 40 Q88 120 96 172 L120 172 Q128 120 120 40 Z" stroke="var(--teal)" fill="var(--surface-2, var(--surface))" strokeWidth="2" />
    <path d="M100 100 q8 6 14 0 q-2 20 -6 40 q-8 -10 -8 -40 Z" stroke="var(--cortical)" fill="var(--surface)" strokeWidth="1.5" className="fx-line" />

    {/* Bisturi / instrumento */}
    <line x1="230" y1="70" x2="112" y2="118" stroke="var(--teal)" strokeWidth="3" />
    <path d="M112 118 l10 -2 l-4 8 Z" stroke="var(--teal)" fill="var(--surface)" strokeWidth="1.5" />

    <text x="150" y="80" style={{ ...LABEL, fill: "var(--teal)" }}>Excisão do foco degenerado</text>
    <line x1="148" y1="84" x2="112" y2="120" stroke="var(--muted)" strokeWidth="0.75" />
    <text x="20" y="140" style={{ ...LABEL, fill: "var(--amber)" }}>Osteotomia de Haglund</text>
    <text x="150" y="210" style={LABEL}>Calcâneo</text>
  </svg>
);

/* --- Técnica passo 2: reinserção com âncoras + transferência do FHL -------- */
const Step2: FC<FigureProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 320 240"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title ?? "Passo 2 — reinserção do tendão com âncoras e transferência do flexor longo do hálux"}</title>

    {/* Calcâneo */}
    <path d="M70 168 L70 196 Q70 212 92 214 L164 214 Q180 212 178 196 Q176 176 150 170 L104 166 Q82 164 70 168 Z" stroke="var(--ink-soft)" fill="var(--surface)" strokeWidth="2" />

    {/* Tendão reinserido */}
    <path d="M100 40 Q92 110 100 168 L124 168 Q132 110 124 40 Z" stroke="var(--teal)" fill="var(--surface-2, var(--surface))" strokeWidth="2" />

    {/* Âncoras na tuberosidade (configuração em ponte/double-row) */}
    <g stroke="var(--teal)" strokeWidth="2" fill="none">
      <line x1="100" y1="176" x2="96" y2="196" />
      <line x1="124" y1="176" x2="128" y2="196" />
      {/* fios em ponte */}
      <path d="M96 178 Q112 160 128 178" />
    </g>
    <circle cx="96" cy="197" r="3" fill="var(--teal)" />
    <circle cx="128" cy="197" r="3" fill="var(--teal)" />

    {/* Transferência do FHL — tendão trazido ao calcâneo */}
    <path d="M150 60 Q160 120 130 172" stroke="var(--teal)" fill="none" strokeWidth="2.5" strokeDasharray="1 0" />
    {/* Túnel/fixação do FHL */}
    <ellipse cx="130" cy="180" rx="5" ry="7" stroke="var(--cortical)" fill="var(--surface)" strokeWidth="1.5" />

    <text x="30" y="150" style={{ ...LABEL, fill: "var(--teal)" }}>Âncoras (double-row)</text>
    <line x1="70" y1="155" x2="98" y2="182" stroke="var(--muted)" strokeWidth="0.75" />
    <text x="164" y="90" style={{ ...LABEL, fill: "var(--teal)" }}>Transf. FHL</text>
    <line x1="162" y1="86" x2="146" y2="100" stroke="var(--muted)" strokeWidth="0.75" />
    <text x="150" y="205" style={LABEL}>Calcâneo</text>
    <text x="90" y="35" style={{ ...LABEL, fill: "var(--teal)" }}>Tendão calcâneo</text>
  </svg>
);

export const figures: Record<string, FC<FigureProps>> = {
  "tendinopatia-aquiles:anatomia": Anatomia,
  "tendinopatia-aquiles:localizacao": Localizacao,
  "tendinopatia-aquiles:patologia": Patologia,
  "tendinopatia-aquiles:alfredson": Alfredson,
  "tendinopatia-aquiles:eswt": Eswt,
  "tendinopatia-aquiles:via-acesso": ViaAcesso,
  "tendinopatia-aquiles:step-1": Step1,
  "tendinopatia-aquiles:step-2": Step2,
};
