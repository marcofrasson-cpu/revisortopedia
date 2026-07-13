import type { Figure, Topic } from "../../types/topic";

/* ============================================================================
   Resolvers de metadados de figura. As seções e o painel referenciam figuras
   por id; a legenda/alt "canônicos" vêm de `topic.figures` quando presentes,
   com fallback gracioso para ids citados apenas em anatomia/técnica/vias.
   ========================================================================== */

export function figureMeta(topic: Topic, id?: string): Figure | undefined {
  if (!id) return undefined;
  return topic.figures.find((f) => f.id === id);
}

export function captionFor(topic: Topic, id: string | undefined, fallback = ""): string {
  return figureMeta(topic, id)?.caption ?? fallback;
}

export function altFor(topic: Topic, id: string | undefined, fallback = ""): string {
  return figureMeta(topic, id)?.alt ?? fallback ?? "";
}
