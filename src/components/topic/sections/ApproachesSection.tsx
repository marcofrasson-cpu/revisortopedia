import { useState } from "react";
import type { Topic } from "../../../types/topic";
import { cx, SectionHeading } from "../../../ui/primitives";
import FigurePanel from "../FigurePanel";
import { altFor, captionFor, kindFor, sourceFor } from "../figureMeta";
import { sectionCopy } from "../../../content/sectionCopy";

/* Vias/métodos — intervalo, estruturas em risco e esquema. O título segue o
   tipo do tópico (vias de acesso, métodos e órteses, sequência do exame…). */
export default function ApproachesSection({ topic }: { topic: Topic }) {
  const [sel, setSel] = useState<string | undefined>(
    () => topic.approaches.find((a) => a.figureId)?.id,
  );

  const focus = (id: string) => setSel(id);

  const selApproach = topic.approaches.find((a) => a.id === sel);
  const copy = sectionCopy(topic.kind, "approaches");

  return (
    <>
      <SectionHeading index="05" eyebrow={copy.eyebrow} title={copy.title} />

      {/* Duas colunas, e não uma pilha. Em coluna única o cartão tinha 960px e o
          texto parava em 581px (a medida de 72ch a 0,9rem): 346px de vazio à
          direita, 36% do cartão. Zona morta — o mesmo defeito que 18ca6a1 fechou
          na prosa, que eu reabri aqui ao travar o texto sem encolher a caixa.

          Um cartão de largura total é incompatível com uma medida: para 72ch
          encherem 928px o corpo teria que ir a 23px. Ou a caixa encolhe, ou vira
          grade. Grade é o padrão que Complicações e Evidência já usam e que
          mede certo — cartão de 474px, texto de ~55 caracteres, vazio nenhum. */}
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {topic.approaches.map((a) => {
          const on = a.id === sel;
          return (
            <button
              key={a.id}
              type="button"
              onClick={() => focus(a.id)}
              aria-pressed={on}
              className={cx(
                "panel block w-full px-4 py-4 text-left transition-colors hover:border-line-strong",
                on && "border-teal/50 ring-1 ring-teal/30",
              )}
            >
              <h3 className="font-display text-[1.15rem] text-ink">{a.name}</h3>
              <p className="mt-1.5 max-w-[var(--measure)] text-[0.9rem] leading-relaxed text-ink-soft">
                {a.indication}
              </p>

              {/* `interval` saiu do CodeChip. O chip é mono e existe para código
                  de classificação — "Weber A", "31-A1" —, mas este campo tem 182
                  caracteres de mediana em 245 valores, e 242 deles passam de 40.
                  O maior tem 538. Era prosa técnica dentro de uma etiqueta: o
                  chip esticava para os 926px do cartão e quebrava em duas linhas
                  de mono.

                  O campo nasceu curto ("Posteromedial", 13 chars) e o conteúdo
                  cresceu; encurtar 242 campos jogaria fora informação boa. O
                  errado é a apresentação, não o dado. Agora é prosa com rótulo
                  mono em cima — que é o uso do mono descrito no topo deste CSS. */}
              {a.interval && (
                <div className="mt-3">
                  <span className="eyebrow">Intervalo</span>
                  <p className="mt-1 max-w-[var(--measure)] text-[0.9rem] leading-relaxed text-ink-soft">
                    {a.interval}
                  </p>
                </div>
              )}

              {/* Mesma história: mediana de 46 caracteres em 769 valores, 232
                  acima de 60. São frases, não etiquetas. Viram lista com ponto
                  cortical — o mesmo padrão de Complicações, que já trata perigo
                  assim. Cortical-red continua marcando só perigo. */}
              {a.atRisk.length > 0 && (
                <div className="mt-3">
                  <span className="eyebrow">Em risco</span>
                  <ul className="mt-1.5 space-y-1.5">
                    {a.atRisk.map((s) => (
                      <li
                        key={s}
                        className="flex max-w-[var(--measure)] gap-2.5 text-[0.88rem] leading-relaxed text-ink-soft"
                      >
                        <span className="mt-[0.5rem] h-1.5 w-1.5 shrink-0 rounded-full bg-cortical" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </button>
          );
        })}
      </div>

      {selApproach?.figureId && (
        <FigurePanel
          className="mt-5"
          figureId={selApproach.figureId}
          caption={captionFor(topic, selApproach.figureId, selApproach.name)}
          alt={altFor(topic, selApproach.figureId, selApproach.name)}
          eyebrow="Via de acesso"
          kind={kindFor(topic, selApproach.figureId)}
          source={sourceFor(topic, selApproach.figureId)}
        />
      )}
    </>
  );
}
