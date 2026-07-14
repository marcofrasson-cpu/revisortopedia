import { useState } from "react";
import type { Topic } from "../../../types/topic";
import { CodeChip, cx, SectionHeading } from "../../../ui/primitives";
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

      <div className="mt-5 space-y-3">
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
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-display text-[1.15rem] text-ink">{a.name}</h3>
                <CodeChip tone="plain">{a.interval}</CodeChip>
              </div>
              <p className="mt-1.5 text-[0.9rem] leading-relaxed text-ink-soft">{a.indication}</p>
              {a.atRisk.length > 0 && (
                <div className="mt-3 flex flex-wrap items-center gap-1.5">
                  <span className="eyebrow mr-1">Em risco</span>
                  {a.atRisk.map((s) => (
                    <CodeChip key={s} tone="cortical">
                      {s}
                    </CodeChip>
                  ))}
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
