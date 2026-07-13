import { useState } from "react";
import type { Topic } from "../../../types/topic";
import { CodeChip, cx, SectionHeading } from "../../../ui/primitives";
import FigurePanel from "../FigurePanel";
import type { FocusedFigure } from "../FigurePanel";

/* Vias de acesso — intervalo, estruturas em risco e esquema da incisão. */
export default function ApproachesSection({
  topic,
  onFocus,
}: {
  topic: Topic;
  onFocus: (fig: FocusedFigure | null) => void;
}) {
  const [sel, setSel] = useState<string | undefined>(
    () => topic.approaches.find((a) => a.figureId)?.id,
  );

  const focus = (id: string, figureId?: string, name?: string) => {
    setSel(id);
    if (figureId) onFocus({ figureId, caption: name, alt: name, eyebrow: "Via de acesso" });
  };

  const selApproach = topic.approaches.find((a) => a.id === sel);

  return (
    <>
      <SectionHeading index="05" eyebrow="Vias de acesso" title="Abordagens cirúrgicas" />

      <div className="mt-5 space-y-3">
        {topic.approaches.map((a) => {
          const on = a.id === sel;
          return (
            <button
              key={a.id}
              type="button"
              onClick={() => focus(a.id, a.figureId, a.name)}
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
          className="mt-5 lg:hidden"
          figureId={selApproach.figureId}
          caption={selApproach.name}
          eyebrow="Via de acesso"
        />
      )}
    </>
  );
}
