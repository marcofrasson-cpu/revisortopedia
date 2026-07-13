import { describe, it, expect } from "vitest";
import { allQuestions, questionsForTopic } from "../index";
import { getTopic } from "../../registry";

describe("question bank integrity", () => {
  const qs = allQuestions();

  it("has questions", () => {
    expect(qs.length).toBeGreaterThan(0);
  });

  it("every question's correct key matches one of its options", () => {
    for (const q of qs) {
      const keys = q.options.map((o) => o.key);
      expect(keys, `question ${q.id}`).toContain(q.correct);
    }
  });

  it("question ids are unique", () => {
    const ids = qs.map((q) => q.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("every question links to an existing topic", () => {
    for (const q of qs) {
      expect(getTopic(q.topicSlug), `question ${q.id} -> ${q.topicSlug}`).toBeDefined();
      expect(questionsForTopic(q.topicSlug).length).toBeGreaterThan(0);
    }
  });
});
