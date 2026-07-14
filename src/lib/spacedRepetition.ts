export type ReviewRating = "again" | "hard" | "good" | "easy";

export interface CardProgress {
  dueAt: number;
  lastReviewedAt: number;
  intervalDays: number;
  ease: number;
  repetitions: number;
  lapses: number;
}

const DAY = 24 * 60 * 60 * 1000;
const TEN_MINUTES = 10 * 60 * 1000;

/* Teto de 5 anos: além de um ciclo de TEOT o cartão já está consolidado, e sem
   teto os múltiplos sucessivos de "Fácil" chegam a intervalos de séculos. */
export const MAX_INTERVAL_DAYS = 1825;

function clampEase(value: number): number {
  return Math.max(1.3, Math.min(3.2, Math.round(value * 100) / 100));
}

function clampInterval(days: number): number {
  return Math.min(MAX_INTERVAL_DAYS, days);
}

export function scheduleReview(
  previous: CardProgress | undefined,
  rating: ReviewRating,
  now = Date.now(),
): CardProgress {
  const current = previous ?? {
    dueAt: now,
    lastReviewedAt: now,
    intervalDays: 0,
    ease: 2.5,
    repetitions: 0,
    lapses: 0,
  };

  if (rating === "again") {
    return {
      dueAt: now + TEN_MINUTES,
      lastReviewedAt: now,
      intervalDays: 0,
      ease: clampEase(current.ease - 0.2),
      repetitions: 0,
      lapses: current.lapses + 1,
    };
  }

  let intervalDays: number;
  let ease = current.ease;
  if (current.repetitions === 0 || current.intervalDays === 0) {
    intervalDays = rating === "hard" ? 1 : rating === "good" ? 3 : 7;
  } else if (rating === "hard") {
    /* O +1 garante avanço: com o fator 1.2 sozinho, round(1 * 1.2) volta a 1 e o
       cartão fica preso em um dia para sempre. */
    intervalDays = Math.max(current.intervalDays + 1, Math.round(current.intervalDays * 1.2));
    ease = clampEase(ease - 0.15);
  } else if (rating === "good") {
    intervalDays = Math.max(3, Math.round(current.intervalDays * ease));
  } else {
    intervalDays = Math.max(7, Math.round(current.intervalDays * ease * 1.3));
    ease = clampEase(ease + 0.15);
  }
  intervalDays = clampInterval(intervalDays);

  return {
    dueAt: now + intervalDays * DAY,
    lastReviewedAt: now,
    intervalDays,
    ease,
    repetitions: current.repetitions + 1,
    lapses: current.lapses,
  };
}

export function isDue(progress: CardProgress | undefined, now = Date.now()): boolean {
  return !progress || progress.dueAt <= now;
}

export function intervalLabel(progress: CardProgress): string {
  if (progress.intervalDays === 0) return "10 min";
  if (progress.intervalDays === 1) return "1 dia";
  if (progress.intervalDays < 30) return `${progress.intervalDays} dias`;
  const months = Math.round(progress.intervalDays / 30);
  if (months < 12) return months === 1 ? "1 mês" : `${months} meses`;
  const years = Math.round((progress.intervalDays / 365) * 10) / 10;
  return years === 1 ? "1 ano" : `${years} anos`;
}

export function previewInterval(
  previous: CardProgress | undefined,
  rating: ReviewRating,
  now = Date.now(),
): string {
  return intervalLabel(scheduleReview(previous, rating, now));
}

export function dailyCardIds(
  allIds: string[],
  progress: Record<string, CardProgress>,
  now = Date.now(),
  newLimit = 20,
): string[] {
  const reviewedDue = allIds.filter((id) => progress[id] && isDue(progress[id], now));
  const unseen = allIds.filter((id) => !progress[id]).slice(0, newLimit);
  return [...reviewedDue, ...unseen];
}
