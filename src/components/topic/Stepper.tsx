import { useState } from "react";
import type { Step, Topic } from "../../types/topic";
import { Callout, cx } from "../../ui/primitives";
import { IconChevronLeft, IconChevronRight } from "../../ui/icons";
import FigurePanel from "./FigurePanel";
import { altFor, captionFor, kindFor, sourceFor } from "./figureMeta";

/* Stepper da técnica passo a passo. Mantém texto, figura e alertas do passo
   juntos no fluxo editorial. Teclado ← / →. */
export default function Stepper({
  steps,
  topic,
}: {
  steps: Step[];
  topic: Topic;
}) {
  const [i, setI] = useState(0);
  const step = steps[i];
  const go = (d: number) => setI((v) => Math.min(steps.length - 1, Math.max(0, v + d)));

  if (!step) return null;

  return (
    <div
      tabIndex={0}
      role="group"
      aria-label="Passos da técnica cirúrgica"
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") {
          e.preventDefault();
          go(1);
        } else if (e.key === "ArrowLeft") {
          e.preventDefault();
          go(-1);
        }
      }}
      className="mt-5 rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-teal/50"
    >
      {/* progress track */}
      <div className="mb-4 flex items-center gap-2">
        <div className="flex flex-1 flex-wrap gap-1.5">
          {steps.map((s, idx) => {
            const done = idx < i;
            const on = idx === i;
            return (
              <button
                key={s.n}
                type="button"
                aria-label={`Passo ${s.n}: ${s.title}`}
                aria-current={on ? "step" : undefined}
                onClick={() => setI(idx)}
                className={cx(
                  "code flex h-7 w-7 items-center justify-center rounded-md border text-[0.72rem] transition-colors",
                  on
                    ? "border-teal bg-teal text-surface"
                    : done
                      ? "border-teal/40 bg-teal-tint text-teal-deep"
                      : "border-line text-muted hover:border-line-strong hover:text-ink",
                )}
              >
                {s.n}
              </button>
            );
          })}
        </div>
        <span className="code shrink-0 text-[0.72rem] text-muted">
          {i + 1} / {steps.length}
        </span>
      </div>

      {/* current step */}
      <div key={i} className="step-enter">
        <div className="flex items-baseline gap-3">
          <span className="code text-[1.5rem] font-medium leading-none text-teal">
            {String(step.n).padStart(2, "0")}
          </span>
          <h3 className="font-display text-[1.35rem] leading-tight text-ink">{step.title}</h3>
        </div>

        <p className="mt-3 text-[0.98rem] leading-relaxed text-ink-soft">{step.detail}</p>

        <FigurePanel
          className="mt-5"
          figureId={step.figureId}
          variant={step.figureVariant}
          activeStep={step.n}
          caption={captionFor(
            topic,
            step.figureId,
            `Passo ${step.n} · ${step.title}`,
            step.figureVariant,
          )}
          alt={altFor(topic, step.figureId, step.title, step.figureVariant)}
          eyebrow={`Técnica · Passo ${step.n}/${steps.length}`}
          kind={kindFor(topic, step.figureId, step.figureVariant)}
          source={sourceFor(topic, step.figureId, step.figureVariant)}
        />

        {(step.tips.length > 0 || step.pitfalls.length > 0) && (
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {step.tips.length > 0 && (
              <Callout tone="tip" title="Dicas">
                <ul className="space-y-1.5">
                  {step.tips.map((t, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal" />
                      {t}
                    </li>
                  ))}
                </ul>
              </Callout>
            )}
            {step.pitfalls.length > 0 && (
              <Callout tone="warn" title="Armadilhas">
                <ul className="space-y-1.5">
                  {step.pitfalls.map((t, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cortical" />
                      {t}
                    </li>
                  ))}
                </ul>
              </Callout>
            )}
          </div>
        )}
      </div>

      {/* nav */}
      <div className="mt-6 flex items-center justify-between">
        <button
          type="button"
          onClick={() => go(-1)}
          disabled={i === 0}
          className="inline-flex items-center gap-1.5 rounded-lg border border-line px-3 py-2 text-[0.85rem] text-ink-soft transition-colors enabled:hover:bg-surface-2 disabled:opacity-40"
        >
          <IconChevronLeft className="h-4 w-4" />
          Anterior
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          disabled={i === steps.length - 1}
          className="inline-flex items-center gap-1.5 rounded-lg bg-teal px-3.5 py-2 text-[0.85rem] font-medium text-surface transition-colors enabled:hover:bg-teal-deep disabled:opacity-40"
        >
          Próximo passo
          <IconChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
