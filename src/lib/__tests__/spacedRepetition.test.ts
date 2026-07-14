import { describe, expect, it } from "vitest";
import {
  dailyCardIds,
  isDue,
  MAX_INTERVAL_DAYS,
  previewInterval,
  scheduleReview,
} from "../spacedRepetition";

const NOW = Date.UTC(2026, 6, 14, 12);
const DAY = 24 * 60 * 60 * 1000;

describe("spaced repetition", () => {
  it("graduates a new card according to the selected confidence", () => {
    expect(scheduleReview(undefined, "again", NOW).dueAt).toBe(NOW + 10 * 60 * 1000);
    expect(scheduleReview(undefined, "hard", NOW).intervalDays).toBe(1);
    expect(scheduleReview(undefined, "good", NOW).intervalDays).toBe(3);
    expect(scheduleReview(undefined, "easy", NOW).intervalDays).toBe(7);
  });

  it("expands successful intervals and resets a lapse", () => {
    const first = scheduleReview(undefined, "good", NOW);
    const second = scheduleReview(first, "good", NOW + 3 * DAY);
    expect(second.intervalDays).toBeGreaterThan(first.intervalDays);
    expect(second.repetitions).toBe(2);

    const lapse = scheduleReview(second, "again", NOW + 4 * DAY);
    expect(lapse.intervalDays).toBe(0);
    expect(lapse.repetitions).toBe(0);
    expect(lapse.lapses).toBe(1);
    expect(lapse.ease).toBeLessThan(second.ease);
  });

  it("selects due reviews before a limited number of new cards", () => {
    const due = scheduleReview(undefined, "good", NOW - 4 * DAY);
    const future = scheduleReview(undefined, "easy", NOW);
    const ids = dailyCardIds(["due", "future", "new-1", "new-2", "new-3"], { due, future }, NOW, 2);
    expect(ids).toEqual(["due", "new-1", "new-2"]);
    expect(isDue(due, NOW)).toBe(true);
    expect(isDue(future, NOW)).toBe(false);
  });

  it("provides compact interval labels for the rating controls", () => {
    expect(previewInterval(undefined, "again", NOW)).toBe("10 min");
    expect(previewInterval(undefined, "good", NOW)).toBe("3 dias");
  });

  it("keeps growing the interval of a card rated hard every time", () => {
    // Um cartão sempre difícil ainda precisa se afastar: se o intervalo estagna,
    // o cartão que o residente mais erra volta todo dia para sempre.
    let card = scheduleReview(undefined, "hard", NOW);
    let at = NOW;
    for (let review = 0; review < 8; review += 1) {
      const previous = card;
      at += card.intervalDays * DAY;
      card = scheduleReview(card, "hard", at);
      expect(card.intervalDays).toBeGreaterThan(previous.intervalDays);
    }
  });

  it("caps the interval so a card never leaves the deck for a lifetime", () => {
    let card = scheduleReview(undefined, "easy", NOW);
    let at = NOW;
    for (let review = 0; review < 12; review += 1) {
      at += card.intervalDays * DAY;
      card = scheduleReview(card, "easy", at);
    }
    expect(card.intervalDays).toBeLessThanOrEqual(MAX_INTERVAL_DAYS);
    expect(card.dueAt).toBeLessThanOrEqual(at + MAX_INTERVAL_DAYS * DAY);
  });
});
