import type { Topic } from "../../../types/topic";
import { SectionHeading } from "../../../ui/primitives";

/* Visão geral — prosa introdutória. Parágrafos separados por linha em branco. */
export default function OverviewSection({ topic }: { topic: Topic }) {
  const paragraphs = topic.overview.split(/\n{2,}/).map((p) => p.trim()).filter(Boolean);
  return (
    <>
      <SectionHeading index="01" eyebrow="Visão geral" title="Panorama da lesão" />
      <div className="mt-4 space-y-4 text-[0.98rem] leading-relaxed text-ink-soft">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </>
  );
}
