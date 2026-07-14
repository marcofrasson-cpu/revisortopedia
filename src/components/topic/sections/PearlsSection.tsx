import type { Topic } from "../../../types/topic";
import { SectionHeading } from "../../../ui/primitives";
import { sectionCopy } from "../../../content/sectionCopy";

/* Pérolas & armadilhas — síntese acionável em duas colunas. */
export default function PearlsSection({ topic }: { topic: Topic }) {
  const copy = sectionCopy(topic.kind, "pearls");
  return (
    <>
      <SectionHeading index="10" eyebrow={copy.eyebrow} title={copy.title} />
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {topic.pearls.length > 0 && (
          <div className="panel p-4">
            <div className="eyebrow mb-3 flex items-center gap-2 text-teal-deep">
              <span className="h-2 w-2 rounded-full bg-teal" />
              Pérolas
            </div>
            <ul className="space-y-2.5">
              {topic.pearls.map((p, i) => (
                <li key={i} className="flex gap-2.5 text-[0.9rem] leading-relaxed text-ink-soft">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        )}
        {topic.pitfalls.length > 0 && (
          <div className="panel p-4">
            <div className="eyebrow mb-3 flex items-center gap-2 text-cortical">
              <span className="h-2 w-2 rounded-full bg-cortical" />
              Armadilhas
            </div>
            <ul className="space-y-2.5">
              {topic.pitfalls.map((p, i) => (
                <li key={i} className="flex gap-2.5 text-[0.9rem] leading-relaxed text-ink-soft">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cortical" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
