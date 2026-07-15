import { useState } from "react";
import type { Topic } from "../../../types/topic";
import { cx, SectionHeading } from "../../../ui/primitives";
import { sectionCopy } from "../../../content/sectionCopy";
import FigurePanel from "../FigurePanel";
import { altFor, captionFor, kindFor, sourceFor } from "../figureMeta";

/* Anatomia — texto seguido por figuras anatômicas ou clínicas comutáveis. */
export default function AnatomySection({ topic }: { topic: Topic }) {
  const copy = sectionCopy(topic.kind, "anatomy");
  const ids = topic.anatomy.figureIds;
  const [sel, setSel] = useState<string | undefined>(ids[0]);

  const focus = (id: string) => {
    setSel(id);
  };

  const paragraphs = topic.anatomy.text.split(/\n{2,}/).map((p) => p.trim()).filter(Boolean);

  return (
    <>
      <SectionHeading index="02" eyebrow={copy.eyebrow} title={copy.title} />
      <div className="prose-manual mt-5 max-w-[var(--measure)] space-y-7 text-ink-soft">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {ids.length > 0 && (
        <>
          {ids.length > 1 && (
            <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Figuras anatômicas">
              {ids.map((id, n) => {
                const on = id === sel;
                const full = captionFor(topic, id, id);
                const label = full.split(/[—–-]/)[0].trim() || `Figura ${n + 1}`;
                return (
                  <button
                    key={id}
                    type="button"
                    aria-pressed={on}
                    title={full}
                    onClick={() => focus(id)}
                    className={cx(
                      "rounded-lg border px-3.5 py-2 text-[0.82rem] leading-none transition-colors",
                      on
                        ? "border-teal/50 bg-teal-tint text-teal-deep"
                        : "border-line text-ink-soft hover:border-line-strong hover:text-ink",
                    )}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          )}

          <FigurePanel
            className="mt-5"
            figureId={sel}
            caption={captionFor(topic, sel, sel)}
            alt={altFor(topic, sel)}
            eyebrow="Anatomia"
            kind={kindFor(topic, sel)}
            source={sourceFor(topic, sel)}
          />
        </>
      )}
    </>
  );
}
