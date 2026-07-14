import type { Topic } from "../../../types/topic";
import { Callout, SectionHeading } from "../../../ui/primitives";
import { sectionCopy } from "../../../content/sectionCopy";

/* Indicações — operatório vs não-operatório + notas de decisão. */
export default function IndicationsSection({ topic }: { topic: Topic }) {
  const copy = sectionCopy(topic.kind, "indications");
  const { operative, nonOperative, decisionNotes } = topic.indications;

  const Column = ({
    title,
    items,
    tone,
  }: {
    title: string;
    items: string[];
    tone: "op" | "nonop";
  }) => (
    <div className="panel p-4">
      <div className="eyebrow mb-3 flex items-center gap-2">
        <span
          className={tone === "op" ? "h-2 w-2 rounded-full bg-teal" : "h-2 w-2 rounded-full bg-amber"}
        />
        {title}
      </div>
      <ul className="space-y-2.5">
        {items.map((it, i) => (
          <li key={i} className="flex gap-2.5 text-[0.92rem] leading-relaxed text-ink-soft">
            <span
              className={
                tone === "op"
                  ? "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal"
                  : "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber"
              }
            />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <SectionHeading index="04" eyebrow={copy.eyebrow} title={copy.title} />
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <Column title="Tratamento cirúrgico" items={operative} tone="op" />
        <Column title="Tratamento conservador" items={nonOperative} tone="nonop" />
      </div>
      {decisionNotes && (
        <div className="mt-4">
          <Callout tone="note" title="Chave de decisão">
            {decisionNotes}
          </Callout>
        </div>
      )}
    </>
  );
}
