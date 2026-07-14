import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import type { Flashcard } from "../../types/flashcard";
import type { ReviewRating } from "../../lib/spacedRepetition";
import { previewInterval } from "../../lib/spacedRepetition";
import { isTypingTarget } from "../../lib/keyboard";
import { flashcardTopicTitle } from "../../content/flashcards";
import { useFlashcardStats } from "../../store/useFlashcardStats";
import { CodeChip, cx } from "../../ui/primitives";
import { IconArrowRight, IconExternal } from "../../ui/icons";

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const target = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[target]] = [copy[target], copy[index]];
  }
  return copy;
}

const RATINGS: Array<{
  value: ReviewRating;
  label: string;
  tone: string;
}> = [
  { value: "again", label: "Errei", tone: "border-cortical/50 text-cortical hover:bg-cortical-tint" },
  { value: "hard", label: "Difícil", tone: "border-amber/50 text-amber hover:bg-amber/10" },
  { value: "good", label: "Bom", tone: "border-teal/50 text-teal-deep hover:bg-teal-tint" },
  { value: "easy", label: "Fácil", tone: "border-line-strong text-ink hover:bg-surface-2" },
];

export default function FlashcardRunner({
  cards,
  onExit,
  title,
}: {
  cards: Flashcard[];
  onExit: () => void;
  title: string;
}) {
  const deck = useMemo(() => shuffle(cards), [cards]);
  const progress = useFlashcardStats((state) => state.progress);
  const review = useFlashcardStats((state) => state.review);
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [finished, setFinished] = useState(false);
  const [ratings, setRatings] = useState<Record<ReviewRating, number>>({
    again: 0,
    hard: 0,
    good: 0,
    easy: 0,
  });

  const card = deck[index];
  const now = Date.now();

  const rate = (rating: ReviewRating) => {
    if (!card || !revealed) return;
    review(card.id, rating);
    setRatings((current) => ({ ...current, [rating]: current[rating] + 1 }));
    if (index === deck.length - 1) {
      setFinished(true);
      return;
    }
    setIndex((current) => current + 1);
    setRevealed(false);
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (finished || !card) return;
      if (isTypingTarget(event.target)) return;
      if (event.key === " " || event.key === "Enter") {
        if (!revealed) {
          event.preventDefault();
          setRevealed(true);
        }
        return;
      }
      if (!revealed) return;
      const rating = RATINGS[Number(event.key) - 1]?.value;
      if (rating) rate(rating);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  if (finished) {
    const remembered = ratings.good + ratings.easy;
    const percentage = deck.length ? Math.round((remembered / deck.length) * 100) : 0;
    return (
      <div className="mx-auto max-w-2xl">
        <div className="panel p-6 text-center sm:p-8">
          <div className="eyebrow">Sessão concluída</div>
          <div className="mt-3 font-display text-[3.4rem] leading-none text-ink">{percentage}%</div>
          <p className="mt-2 text-[0.95rem] text-ink-soft">
            {remembered} de {deck.length} lembrados com segurança
          </p>
          <div className="mx-auto mt-6 grid max-w-md grid-cols-4 gap-px overflow-hidden rounded-lg border border-line bg-line">
            {RATINGS.map((rating) => (
              <div key={rating.value} className="bg-surface px-2 py-3">
                <div className="code text-[1.05rem] text-ink">{ratings[rating.value]}</div>
                <div className="mt-1 text-[0.68rem] text-muted">{rating.label}</div>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={onExit}
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-teal px-4 py-2.5 text-[0.9rem] font-medium text-surface hover:bg-teal-deep"
          >
            Voltar ao estudo
            <IconArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    );
  }

  if (!card) return null;
  const previous = progress[card.id];

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex-1">
          <div className="eyebrow mb-1.5 flex items-center justify-between gap-4">
            <span className="truncate">{title}</span>
            <span className="code shrink-0 text-muted">{index + 1} / {deck.length}</span>
          </div>
          <div className="h-1 overflow-hidden rounded-full bg-surface-2">
            <div
              className="h-full rounded-full bg-teal transition-all"
              style={{ width: `${((index + (revealed ? 1 : 0)) / deck.length) * 100}%` }}
            />
          </div>
        </div>
        <button
          type="button"
          onClick={onExit}
          className="shrink-0 rounded-lg border border-line px-3 py-1.5 text-[0.78rem] text-muted hover:bg-surface-2 hover:text-ink"
        >
          Sair
        </button>
      </div>

      <div className="panel flex min-h-[26rem] flex-col p-5 sm:p-7">
        <div className="flex flex-wrap items-center gap-2">
          <CodeChip tone="plain">{flashcardTopicTitle(card.topicSlug)}</CodeChip>
          <span className="eyebrow">{card.category}</span>
          {previous && <span className="code ml-auto text-[0.7rem] text-muted">intervalo {previous.intervalDays || 0}d</span>}
        </div>

        <div className="flex flex-1 flex-col justify-center py-8">
          <p className="mx-auto max-w-xl text-center font-display text-[1.55rem] leading-snug text-ink sm:text-[1.8rem]">
            {card.prompt}
          </p>

          {revealed && (
            <div className="step-enter mt-8 border-t border-line pt-6">
              <div className="eyebrow text-teal-deep">Resposta</div>
              <p className="mt-3 whitespace-pre-line text-[0.98rem] leading-relaxed text-ink-soft">
                {card.answer}
              </p>
              {card.reference && (
                <p className="mt-4 flex items-start gap-1.5 text-[0.74rem] leading-relaxed text-muted">
                  <IconExternal className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                  <span className="code">{card.reference}</span>
                </p>
              )}
            </div>
          )}
        </div>

        {!revealed ? (
          <button
            type="button"
            onClick={() => setRevealed(true)}
            className="mx-auto rounded-lg bg-teal px-5 py-2.5 text-[0.9rem] font-medium text-surface hover:bg-teal-deep"
          >
            Mostrar resposta
          </button>
        ) : (
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {RATINGS.map((rating) => (
              <button
                key={rating.value}
                type="button"
                onClick={() => rate(rating.value)}
                className={cx("rounded-lg border px-3 py-2.5 text-center transition-colors", rating.tone)}
              >
                <span className="block text-[0.86rem] font-medium">{rating.label}</span>
                <span className="code mt-0.5 block text-[0.68rem] opacity-75">
                  {previewInterval(previous, rating.value, now)}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="mt-4 flex justify-center">
        <Link
          to={`/topico/${card.topicSlug}`}
          className="text-[0.75rem] text-muted underline decoration-line-strong underline-offset-4 hover:text-ink"
        >
          Abrir resumo completo
        </Link>
      </div>
    </div>
  );
}
