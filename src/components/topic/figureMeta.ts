import type { Figure, Topic } from "../../types/topic";

/* ============================================================================
   Resolvers de metadados de figura. As seções e o painel referenciam figuras
   por id (e, quando há variantes com legendas distintas, por variant); a
   legenda/alt "canônicos" vêm de `topic.figures`, com fallback gracioso.
   ========================================================================== */

export function figureMeta(topic: Topic, id?: string, variant?: string): Figure | undefined {
  if (!id) return undefined;
  const byIdAndVariant =
    variant != null ? topic.figures.find((f) => f.id === id && f.variant === variant) : undefined;
  return byIdAndVariant ?? topic.figures.find((f) => f.id === id);
}

export function captionFor(topic: Topic, id: string | undefined, fallback = "", variant?: string): string {
  return figureMeta(topic, id, variant)?.caption ?? fallback;
}

export function altFor(topic: Topic, id: string | undefined, fallback = "", variant?: string): string {
  return figureMeta(topic, id, variant)?.alt ?? fallback ?? "";
}
