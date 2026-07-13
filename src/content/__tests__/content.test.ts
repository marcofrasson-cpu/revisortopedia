import { describe, expect, it } from "vitest";
import { allTopics } from "../registry";
import { getFigure, PlaceholderFigure } from "../figures";
import { topicSchema } from "../../types/topic";
import type { Topic } from "../../types/topic";

/* ============================================================================
   Content-lint. The whole app renders generically from `topicSchema`, so a
   malformed topic is a broken page. These tests fail fast on authoring errors
   (schema drift, missing evidence/DOIs, dangling figure ids) rather than
   surfacing them at runtime. They assert the data contract, not prose.
   ========================================================================== */

/** Collect every figure id a topic references across all sections. */
function referencedFigureIds(t: Topic): string[] {
  const ids: string[] = [];
  ids.push(...t.anatomy.figureIds);
  for (const sys of t.classification) {
    for (const type of sys.types) {
      if (type.figureId) ids.push(type.figureId);
    }
  }
  for (const approach of t.approaches) {
    if (approach.figureId) ids.push(approach.figureId);
  }
  for (const step of t.technique) {
    if (step.figureId) ids.push(step.figureId);
  }
  for (const fig of t.figures) {
    ids.push(fig.id);
  }
  return ids;
}

describe("content registry", () => {
  it("exposes at least one authored topic", () => {
    expect(Array.isArray(allTopics)).toBe(true);
    expect(allTopics.length).toBeGreaterThan(0);
  });

  it("every topic satisfies topicSchema (content-lint)", () => {
    for (const t of allTopics) {
      expect(() => topicSchema.parse(t), `topic "${t.slug}" must parse`).not.toThrow();
    }
  });

  it("every referenced figure id resolves to a real figure (no placeholder)", () => {
    for (const t of allTopics) {
      for (const id of referencedFigureIds(t)) {
        const Fig = getFigure(id);
        expect(Fig, `figure "${id}" (topic "${t.slug}") must resolve`).toBeTypeOf(
          "function",
        );
        expect(
          Fig,
          `figure "${id}" (topic "${t.slug}") must not fall back to PlaceholderFigure`,
        ).not.toBe(PlaceholderFigure);
      }
    }
  });
});

describe("complete topics carry a full clinical payload", () => {
  const complete = allTopics.filter((t) => t.status === "complete");

  it("there is at least one complete topic to gate on", () => {
    expect(complete.length).toBeGreaterThan(0);
  });

  it("each complete topic has technique steps and cited evidence", () => {
    for (const t of complete) {
      expect(t.technique.length, `topic "${t.slug}" technique`).toBeGreaterThan(0);
      expect(t.evidence.length, `topic "${t.slug}" evidence`).toBeGreaterThan(0);
    }
  });

  it("every evidence item on a complete topic has a citation DOI", () => {
    for (const t of complete) {
      for (const ev of t.evidence) {
        expect(
          ev.citation.doi,
          `evidence "${ev.id}" (topic "${t.slug}") must cite a DOI`,
        ).toBeTruthy();
      }
    }
  });
});
