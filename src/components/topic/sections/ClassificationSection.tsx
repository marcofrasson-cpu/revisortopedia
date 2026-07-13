import { useState } from "react";
import type { Topic } from "../../../types/topic";
import { CodeChip, cx, SectionHeading } from "../../../ui/primitives";
import FigurePanel from "../FigurePanel";
import type { FocusedFigure, VariantOption } from "../FigurePanel";
import { altFor, captionFor } from "../figureMeta";

/* Classificação — um bloco por sistema (Danis-Weber, Lauge-Hansen, AO/OTA).
   Selecionar um tipo com figura foca o esquema no painel e re-desenha o traço. */
export default function ClassificationSection({
  topic,
  onFocus,
}: {
  topic: Topic;
  onFocus: (fig: FocusedFigure | null) => void;
}) {
  const first = topic.classification[0];
  const [selKey, setSelKey] = useState<string | undefined>(() => {
    const t = first?.types.find((x) => x.figureId);
    return t ? `${first.id}:${t.code}` : undefined;
  });

  return (
    <>
      <SectionHeading index="03" eyebrow="Classificação" title="Sistemas de classificação" />

      <div className="mt-5 space-y-8">
        {topic.classification.map((sys) => {
          const variants: VariantOption[] = sys.types
            .filter((ty) => ty.figureId)
            .map((ty) => ({ value: ty.figureVariant ?? ty.code, label: ty.code }));

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
                  const on = key === selKey;
                  const clickable = Boolean(ty.figureId);
                  return (
                    <li key={key}>
                      <button
                        type="button"
                        disabled={!clickable}
                        aria-pressed={clickable ? on : undefined}
                        onClick={() => {
                          if (!ty.figureId) return;
                          setSelKey(key);
                          onFocus({
                            figureId: ty.figureId,
                            variant: ty.figureVariant,
                            caption: captionFor(topic, ty.figureId, `${ty.code} — ${ty.label}`),
                            alt: altFor(topic, ty.figureId, ty.label),
                            eyebrow: sys.name,
                            variants,
                          });
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
            </div>
          );
        })}
      </div>

      {/* Figura inline — mobile */}
      {selKey && (
        <FigurePanel
          className="mt-5 lg:hidden"
          figureId={topic.classification
            .flatMap((s) => s.types.map((t) => ({ s, t })))
            .find(({ s, t }) => `${s.id}:${t.code}` === selKey)?.t.figureId}
          variant={topic.classification
            .flatMap((s) => s.types.map((t) => ({ s, t })))
            .find(({ s, t }) => `${s.id}:${t.code}` === selKey)?.t.figureVariant}
          eyebrow="Classificação"
        />
      )}
    </>
  );
}
