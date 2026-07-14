import type { Topic } from "../../../types/topic";
import { SectionHeading } from "../../../ui/primitives";
import { sectionCopy } from "../../../content/sectionCopy";
import Stepper from "../Stepper";

/* Passo a passo — delega ao Stepper, que sincroniza a figura do passo. O título
   segue o tipo do tópico (redução e fixação, conduta, manobras…). */
export default function TechniqueSection({ topic }: { topic: Topic }) {
  const copy = sectionCopy(topic.kind, "technique");
  return (
    <>
      <SectionHeading index="06" eyebrow={copy.eyebrow} title={copy.title} />
      <p className="mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-muted">
        Sequência de referência. Navegue com os controles ou pelas setas ← / →.
        A imagem acompanha o passo selecionado.
      </p>
      <Stepper steps={topic.technique} topic={topic} />
    </>
  );
}
