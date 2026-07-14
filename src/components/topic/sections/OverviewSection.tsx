import type { Topic } from "../../../types/topic";
import { SectionHeading } from "../../../ui/primitives";
import { sectionCopy } from "../../../content/sectionCopy";

/* Visão geral — prosa introdutória. Parágrafos separados por linha em branco. */
export default function OverviewSection({ topic }: { topic: Topic }) {
  const copy = sectionCopy(topic.kind, "overview");
  const paragraphs = topic.overview.split(/\n{2,}/).map((p) => p.trim()).filter(Boolean);
  return (
    <>
      <SectionHeading index="01" eyebrow={copy.eyebrow} title={copy.title} />
      <div className="mt-5 max-w-[90ch] space-y-7 text-[1.05rem] leading-[1.75] text-ink-soft">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </>
  );
}
