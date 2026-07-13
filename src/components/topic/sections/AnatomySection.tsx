import { useState } from "react";
import type { Topic } from "../../../types/topic";
import { cx, SectionHeading } from "../../../ui/primitives";
import FigurePanel from "../FigurePanel";
import type { FocusedFigure } from "../FigurePanel";
import { altFor, captionFor } from "../figureMeta";

/* Anatomia — texto + trilha de figuras anatômicas comutáveis (pinça, anel,
   ligamentos). Selecionar uma figura foca o painel sticky (desktop) e troca
   a figura inline (mobile). */
export default function AnatomySection({
  topic,
  onFocus,
}: {
  topic: Topic;
  onFocus: (fig: FocusedFigure | null) => void;
}) {
  const ids = topic.anatomy.figureIds;
  const [sel, setSel] = useState<string | undefined>(ids[0]);

  const focus = (id: string) => {
    setSel(id);
    onFocus({
      figureId: id,
      caption: captionFor(topic, id, id),
      alt: altFor(topic, id),
      eyebrow: "Anatomia",
    });
  };

  const paragraphs = topic.anatomy.text.split(/\n{2,}/).map((p) => p.trim()).filter(Boolean);

  return (
    <>
      <SectionHeading index="02" eyebrow="Anatomia" title="Anatomia cirúrgica" />
      <div className="mt-5 space-y-5 text-[1.05rem] leading-[1.75] text-ink-soft">
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

          {/* Figura inline — apenas mobile; no desktop o painel sticky assume. */}
          <FigurePanel
            className="mt-4 lg:hidden"
            figureId={sel}
            caption={captionFor(topic, sel, sel)}
            alt={altFor(topic, sel)}
            eyebrow="Anatomia"
          />
        </>
      )}
    </>
  );
}
