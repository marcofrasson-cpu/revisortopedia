import { useState } from "react";
import type { Topic } from "../../../types/topic";
import { CodeChip, cx, SectionHeading } from "../../../ui/primitives";
import FigurePanel from "../FigurePanel";
import { altFor, captionFor, kindFor, sourceFor } from "../figureMeta";

/* Classificação — cada sistema intercala a descrição e sua figura selecionada. */
export default function ClassificationSection({ topic }: { topic: Topic }) {
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
      <SectionHeading index="03" eyebrow="Classificação" title="Sistemas de classificação" />

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
                <p className="mt-1 text-[0.88rem] leading-relaxed text-muted">{sys.note}</p>
              )}

              <ul className="mt-3 divide-y divide-line overflow-hidden rounded-xl border border-line">
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
                        <CodeChip tone={on ? "teal" : "plain"} className="mt-0.5 shrink-0">
                          {ty.code}
                        </CodeChip>
                        <span>
                          <span className="block text-[0.92rem] font-medium text-ink">
                            {ty.label}
                          </span>
                          <span className="mt-0.5 block text-[0.88rem] leading-relaxed text-ink-soft">
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
