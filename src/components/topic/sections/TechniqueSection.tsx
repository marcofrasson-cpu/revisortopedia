import type { Topic } from "../../../types/topic";
import { SectionHeading } from "../../../ui/primitives";
import Stepper from "../Stepper";

/* Técnica passo a passo — delega ao Stepper, que sincroniza a figura do passo. */
export default function TechniqueSection({ topic }: { topic: Topic }) {
  return (
    <>
      <SectionHeading
        index="06"
        eyebrow="Técnica"
        title="Redução e fixação, passo a passo"
      />
      <p className="mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-muted">
        Sequência de referência. Navegue com os controles ou pelas setas ← / →.
        A imagem acompanha o passo selecionado.
      </p>
      <Stepper steps={topic.technique} topic={topic} />
    </>
  );
}
