import type { Figure, FigureKind, FigureSource, Topic } from "../../types/topic";

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

export function kindFor(topic: Topic, id?: string, variant?: string): FigureKind {
  return figureMeta(topic, id, variant)?.kind ?? "diagram";
}

export function sourceFor(topic: Topic, id?: string, variant?: string): FigureSource | undefined {
  const figure = figureMeta(topic, id, variant);
  if (figure?.source) return figure.source;
  if (figure?.kind === "diagram" && topic.meta.figureReference) {
    return {
      label: "Esquema didático original",
      reference: topic.meta.figureReference,
    };
  }
  return undefined;
}
