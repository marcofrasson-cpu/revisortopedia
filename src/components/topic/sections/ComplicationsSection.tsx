import type { Topic } from "../../../types/topic";
import { SectionHeading } from "../../../ui/primitives";
import { sectionCopy } from "../../../content/sectionCopy";

/* Complicações — cartões com descrição e como prevenir. */
export default function ComplicationsSection({ topic }: { topic: Topic }) {
  const copy = sectionCopy(topic.kind, "complications");
  return (
    <>
      <SectionHeading index="08" eyebrow={copy.eyebrow} title={copy.title} />
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {topic.complications.map((c, i) => (
          <div key={i} className="panel p-4">
            <div className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cortical" />
              <h3 className="text-[0.98rem] font-semibold text-ink">{c.name}</h3>
            </div>
            <p className="mt-1.5 text-[0.9rem] leading-relaxed text-ink-soft">{c.detail}</p>
            {c.prevention && (
              <p className="mt-2.5 rounded-md bg-teal-tint/50 px-3 py-2 text-[0.85rem] leading-relaxed text-teal-deep">
                <span className="eyebrow mr-1.5 text-teal-deep">Prevenir</span>
                {c.prevention}
              </p>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
