import { describe, expect, it } from "vitest";
import { allTopics, getTopic } from "../../topicData";
import { allFlashcards, flashcardsForTopic, flashcardStats } from "..";

describe("flashcard bank", () => {
  const cards = allFlashcards();

  it("covers every complete topic with a useful package", () => {
    expect(allTopics).toHaveLength(95);
    expect(flashcardStats.topics).toBe(95);
    for (const topic of allTopics) {
      expect(flashcardsForTopic(topic.slug).length, topic.slug).toBeGreaterThanOrEqual(10);
    }
  });

  it("uses unique ids and valid topic links", () => {
    expect(new Set(cards.map((card) => card.id)).size).toBe(cards.length);
    for (const card of cards) {
      expect(getTopic(card.topicSlug), card.id).toBeDefined();
      expect(card.prompt.trim(), card.id).toBeTruthy();
      expect(card.answer.trim(), card.id).toBeTruthy();
      expect(card.reference?.trim(), card.id).toBeTruthy();
    }
  });
});
