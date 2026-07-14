import {
  evidenceByYear,
  evidenceLevelOne,
  evidencePeak,
  evidenceSpan,
  evidenceTotal,
} from "../../content/evidenceSpine";

/* ============================================================================
   A espinha de evidências — o elemento assinatura da home.

   Cada coluna é um ano, cada bloco um estudo citado no manual, tingido pelo
   nível de evidência. A posição codifica o ano e a altura codifica quantos
   estudos daquele ano sustentam o texto: nada aqui é ornamento.

   O que o desenho mostra é a própria tese do manual. À esquerda, colunas baixas
   e pálidas — as séries de casos que a ortopedia tinha antes dos ensaios. À
   direita, colunas altas com base escura: os randomizados que reescreveram a
   conduta. O h1 afirma "baseado em evidências"; isto é a afirmação virando
   verificável.

   O verde reserva a força para o nível I. O vermelho-cortical NÃO entra na
   escala: no sistema do app ele significa traço de fratura e perigo, e nível V
   não é perigo — é evidência fraca.
   ========================================================================== */

/* Nível de evidência é ordinal, então a escala é de um tom só, desbotando do
   nível I ao V. Um cinza no fim quebraria a ordem: contra a superfície ele pesa
   MAIS que o verde pálido do nível IV, e a rampa inverteria justo onde deveria
   sumir. O vermelho-cortical não entra — no app ele significa perigo, e evidência
   fraca não é perigo. */
const LEVEL_TONE = ["bg-teal", "bg-teal/70", "bg-teal/45", "bg-teal/28", "bg-teal/15"];

const LEGEND = [
  { label: "I", hint: "Ensaio randomizado, metanálise" },
  { label: "II", hint: "Coorte prospectiva" },
  { label: "III", hint: "Caso-controle" },
  { label: "IV", hint: "Série de casos" },
  { label: "V", hint: "Opinião de especialista" },
];

const DECADES = [1970, 1980, 1990, 2000, 2010, 2020];

export default function EvidenceSpine() {
  const { from, to } = evidenceSpan;
  const span = to - from;
  const byYear = new Map(evidenceByYear);
  const years = Array.from({ length: span + 1 }, (_, i) => from + i);

  return (
    <section aria-labelledby="espinha-titulo" className="py-5 sm:py-6">
      <div className="panel overflow-hidden p-4 sm:p-6">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
          <div>
            <h2 id="espinha-titulo" className="eyebrow">
              Base de evidências
            </h2>
            <p className="mt-2 font-display text-[1.6rem] leading-none text-ink sm:text-[1.9rem]">
              {evidenceTotal} estudos citados
              <span className="text-muted"> · </span>
              <span className="code whitespace-nowrap align-middle text-[0.9rem] text-muted sm:text-[1rem]">
                {from}–{to}
              </span>
            </p>
          </div>
          <p className="max-w-[46ch] text-[0.86rem] leading-relaxed text-muted">
            Cada coluna é um ano; cada bloco, um estudo referenciado, tingido pelo nível
            de evidência. {evidenceLevelOne} são de nível I.
          </p>
        </div>

        {/* O gráfico. role="img" porque a leitura é a forma, não os 51 números. */}
        <div
          role="img"
          aria-label={`Gráfico: ${evidenceTotal} estudos citados no manual, de ${from} a ${to}. As séries de casos dominam até os anos 2000; os ensaios de nível I se concentram a partir de 2007 e somam ${evidenceLevelOne}. O ano mais citado tem ${evidencePeak} estudos.`}
          className="mt-5 flex h-24 items-end gap-px sm:h-32"
        >
          {years.map((year) => {
            const levels = byYear.get(year);
            const total = levels?.reduce((a, b) => a + b, 0) ?? 0;
            return (
              <div key={year} className="flex h-full flex-1 flex-col justify-end">
                {total > 0 && (
                  <div
                    className="flex w-full flex-col-reverse overflow-hidden rounded-[1px]"
                    style={{ height: `${(total / evidencePeak) * 100}%` }}
                    title={`${year}: ${total} ${total === 1 ? "estudo" : "estudos"}`}
                  >
                    {levels!.map((count, level) =>
                      count > 0 ? (
                        <div
                          key={level}
                          className={LEVEL_TONE[level]}
                          style={{ flexGrow: count }}
                        />
                      ) : null,
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Eixo do tempo — as décadas ancoram a leitura sem poluir com 61 rótulos. */}
        <div aria-hidden="true" className="relative mt-2 h-4 border-t border-line">
          {DECADES.map((decade) => (
            <span
              key={decade}
              className="code absolute top-1 -translate-x-1/2 text-[0.62rem] text-muted"
              style={{ left: `${((decade - from) / span) * 100}%` }}
            >
              {decade}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-line pt-4">
          <span className="eyebrow">Nível</span>
          {LEGEND.map((item, level) => (
            <span key={item.label} className="flex items-center gap-1.5" title={item.hint}>
              <span className={`h-2.5 w-2.5 rounded-[1px] ${LEVEL_TONE[level]}`} />
              <span className="code text-[0.7rem] text-muted">{item.label}</span>
            </span>
          ))}
          <span className="ml-auto text-[0.72rem] text-muted">Oxford CEBM</span>
        </div>
      </div>
    </section>
  );
}
