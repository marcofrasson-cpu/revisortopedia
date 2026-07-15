import { useState } from "react";
import type { CSSProperties } from "react";
import type { Topic } from "../../../types/topic";
import { CodeChip, cx, SectionHeading } from "../../../ui/primitives";
import FigurePanel from "../FigurePanel";
import { altFor, captionFor, kindFor, sourceFor } from "../figureMeta";
import { sectionCopy } from "../../../content/sectionCopy";

/* Classificação — cada sistema intercala a descrição e sua figura selecionada.
   O título segue o tipo do tópico (classificação, estadiamento, achados…). */
export default function ClassificationSection({ topic }: { topic: Topic }) {
  const copy = sectionCopy(topic.kind, "classification");
  const [selected, setSelected] = useState<Record<string, string>>(() =>
    Object.fromEntries(
      topic.classification.flatMap((system) => {
        const type = system.types.find((item) => item.figureId);
        return type ? [[system.id, type.code]] : [];
      }),
    ),
  );

  return (
    <>
      <SectionHeading index="03" eyebrow={copy.eyebrow} title={copy.title} />

      <div className="mt-5 space-y-8">
        {topic.classification.map((sys) => {
          const selectedType =
            sys.types.find((item) => item.code === selected[sys.id]) ??
            sys.types.find((item) => item.figureId);

          return (
            <div key={sys.id}>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="font-display text-[1.25rem] text-ink">{sys.name}</h3>
                <span className="eyebrow">{sys.basis}</span>
              </div>
              {sys.note && (
                <p className="mt-1 max-w-[var(--measure)] text-[0.88rem] leading-relaxed text-muted">
                  {sys.note}
                </p>
              )}

              {/* --code-w reserva a largura do código mais longo DESTE sistema.
                  Sem isto o chip encolhe no "I" e cresce no "III", e como ele é
                  o primeiro item de um flex, a diferença empurra rótulo e
                  descrição junto: medi 812, 818 e 823 de borda esquerda em
                  linhas vizinhas — 11px de tremor descendo a lista.

                  Em `ch` porque o chip é font-mono: todo caractere tem a mesma
                  largura, então a conta é exata. O `ch` resolve na fonte de quem
                  usa a variável (o chip), não de quem a declara (a <ul>) — o
                  mesmo motivo que faz --measure funcionar. */}
              <ul
                style={{ "--code-w": `${Math.max(...sys.types.map((t) => t.code.length))}ch` } as CSSProperties}
                className="mt-3 divide-y divide-line overflow-hidden rounded-xl border border-line"
              >
                {sys.types.map((ty) => {
                  const key = `${sys.id}:${ty.code}`;
                  const on = ty.code === selected[sys.id];
                  const clickable = Boolean(ty.figureId);
                  return (
                    <li key={key}>
                      <button
                        type="button"
                        disabled={!clickable}
                        aria-pressed={clickable ? on : undefined}
                        onClick={() => {
                          if (!ty.figureId) return;
                          setSelected((current) => ({ ...current, [sys.id]: ty.code }));
                        }}
                        className={cx(
                          "flex w-full items-start gap-3 px-4 py-3 text-left transition-colors",
                          clickable && "hover:bg-surface-2",
                          on && "bg-teal-tint/50",
                        )}
                      >
                        <CodeChip
                          tone={on ? "teal" : "plain"}
                          className="mt-0.5 min-w-[calc(var(--code-w)+0.75rem)] shrink-0 justify-center"
                        >
                          {ty.code}
                        </CodeChip>
                        <span className="min-w-0 flex-1 lg:grid lg:grid-cols-[minmax(12rem,0.36fr)_minmax(0,1fr)] lg:gap-6">
                          <span className="block text-[0.92rem] font-medium text-ink">
                            {ty.label}
                          </span>
                          <span className="mt-0.5 block max-w-[var(--measure)] text-[0.88rem] leading-relaxed text-ink-soft lg:mt-0">
                            {ty.description}
                          </span>
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>

              {selectedType?.figureId && (
                <FigurePanel
                  className="mt-5"
                  figureId={selectedType.figureId}
                  variant={selectedType.figureVariant}
                  caption={captionFor(
                    topic,
                    selectedType.figureId,
                    `${selectedType.code} — ${selectedType.label}`,
                    selectedType.figureVariant,
                  )}
                  alt={altFor(
                    topic,
                    selectedType.figureId,
                    selectedType.label,
                    selectedType.figureVariant,
                  )}
                  eyebrow={sys.name}
                  kind={kindFor(topic, selectedType.figureId, selectedType.figureVariant)}
                  source={sourceFor(topic, selectedType.figureId, selectedType.figureVariant)}
                />
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
