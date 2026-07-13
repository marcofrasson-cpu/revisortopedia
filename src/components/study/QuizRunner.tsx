import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import type { Question } from "../../types/question";
import { topicTitle } from "../../content/questions";
import { useQuizStats } from "../../store/useQuizStats";
import { cx, CodeChip } from "../../ui/primitives";
import { IconArrowRight, IconChevronRight, IconExternal } from "../../ui/icons";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

interface Answer {
  qid: string;
  chosen: string;
  correct: boolean;
}

export default function QuizRunner({
  questions,
  onExit,
  title,
}: {
  questions: Question[];
  onExit: () => void;
  title: string;
}) {
  const initial = useMemo(() => shuffle(questions), [questions]);
  const [deck, setDeck] = useState<Question[]>(initial);
  const record = useQuizStats((s) => s.record);

  const [i, setI] = useState(0);
  const [chosen, setChosen] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [finished, setFinished] = useState(false);

  const q = deck[i];
  const isLast = i === deck.length - 1;

  const confirm = () => {
    if (!chosen || revealed || !q) return;
    const correct = chosen === q.correct;
    setRevealed(true);
    setAnswers((a) => [...a, { qid: q.id, chosen, correct }]);
    record(q.id, correct);
  };

  const next = () => {
    if (isLast) {
      setFinished(true);
      return;
    }
    setI((v) => v + 1);
    setChosen(null);
    setRevealed(false);
  };

  // Teclado: A–E / 1–5 selecionam, Enter confirma / avança.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (finished || !q) return;
      if (e.key === "Enter") {
        e.preventDefault();
        if (revealed) next();
        else confirm();
        return;
      }
      if (revealed) return;
      const k = e.key.toUpperCase();
      const byLetter = q.options.find((o) => o.key.toUpperCase() === k);
      if (byLetter) {
        setChosen(byLetter.key);
        return;
      }
      const n = parseInt(e.key, 10);
      if (n >= 1 && n <= q.options.length) setChosen(q.options[n - 1].key);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  if (finished) {
    const correctCount = answers.filter((a) => a.correct).length;
    const pct = answers.length ? Math.round((correctCount / answers.length) * 100) : 0;
    const wrong = answers.filter((a) => !a.correct);
    const wrongQs = deck.filter((d) => wrong.some((w) => w.qid === d.id));

    return (
      <div className="mx-auto max-w-2xl">
        <div className="panel p-6 text-center sm:p-8">
          <div className="eyebrow">Resultado</div>
          <div className="mt-3 font-display text-[3.4rem] leading-none text-ink">{pct}%</div>
          <p className="mt-2 text-[0.95rem] text-ink-soft">
            {correctCount} de {answers.length} corretas
          </p>
          <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-surface-2">
            <div
              className={cx("h-full rounded-full", pct >= 70 ? "bg-teal" : "bg-amber")}
              style={{ width: `${pct}%` }}
            />
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {wrongQs.length > 0 && (
              <button
                type="button"
                onClick={() => {
                  setDeck(shuffle(wrongQs));
                  setFinished(false);
                  setI(0);
                  setChosen(null);
                  setRevealed(false);
                  setAnswers([]);
                }}
                className="inline-flex items-center gap-2 rounded-lg bg-cortical/90 px-4 py-2.5 text-[0.9rem] font-medium text-surface transition-colors hover:bg-cortical"
              >
                Refazer as {wrongQs.length} erradas
              </button>
            )}
            <button
              type="button"
              onClick={onExit}
              className="inline-flex items-center gap-2 rounded-lg bg-teal px-4 py-2.5 text-[0.9rem] font-medium text-surface transition-colors hover:bg-teal-deep"
            >
              Escolher outro bloco
              <IconArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Revisão detalhada */}
        <div className="mt-6 space-y-3">
          {deck.map((d) => {
            const a = answers.find((x) => x.qid === d.id);
            if (!a) return null;
            return (
              <details key={d.id} className="panel px-4 py-3">
                <summary className="flex cursor-pointer items-center gap-2 text-[0.9rem]">
                  <span
                    className={cx(
                      "code inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md text-[0.7rem] font-semibold",
                      a.correct ? "bg-teal-tint text-teal-deep" : "bg-cortical-tint text-cortical",
                    )}
                  >
                    {a.correct ? "✓" : "✕"}
                  </span>
                  <span className="text-ink">{d.stem.slice(0, 96)}…</span>
                </summary>
                <p className="mt-2 text-[0.88rem] leading-relaxed text-ink-soft">{d.explanation}</p>
              </details>
            );
          })}
        </div>
      </div>
    );
  }

  if (!q) return null;

  return (
    <div className="mx-auto max-w-2xl">
      {/* progresso */}
      <div className="mb-5 flex items-center gap-3">
        <div className="flex-1">
          <div className="eyebrow mb-1.5 flex items-center justify-between">
            <span className="truncate">{title}</span>
            <span className="code text-muted">
              {i + 1} / {deck.length}
            </span>
          </div>
          <div className="h-1 overflow-hidden rounded-full bg-surface-2">
            <div
              className="h-full rounded-full bg-teal transition-all"
              style={{ width: `${((i + (revealed ? 1 : 0)) / deck.length) * 100}%` }}
            />
          </div>
        </div>
        <button
          type="button"
          onClick={onExit}
          className="shrink-0 rounded-lg border border-line px-3 py-1.5 text-[0.78rem] text-muted transition-colors hover:bg-surface-2 hover:text-ink"
        >
          Sair
        </button>
      </div>

      {/* questão */}
      <div className="panel p-5 sm:p-6">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <CodeChip tone="plain">{topicTitle(q.topicSlug)}</CodeChip>
          <span className="eyebrow">{q.difficulty}</span>
        </div>

        <p className="text-[1.02rem] leading-relaxed text-ink">{q.stem}</p>

        <ul className="mt-5 space-y-2">
          {q.options.map((o) => {
            const isChosen = chosen === o.key;
            const isCorrect = o.key === q.correct;
            let tone = "border-line hover:border-line-strong hover:bg-surface-2";
            if (revealed) {
              if (isCorrect) tone = "border-teal/60 bg-teal-tint/60";
              else if (isChosen) tone = "border-cortical/60 bg-cortical-tint/60";
              else tone = "border-line opacity-60";
            } else if (isChosen) {
              tone = "border-teal/60 bg-teal-tint/50";
            }
            return (
              <li key={o.key}>
                <button
                  type="button"
                  disabled={revealed}
                  onClick={() => setChosen(o.key)}
                  className={cx(
                    "flex w-full items-start gap-3 rounded-lg border px-4 py-3 text-left transition-colors",
                    tone,
                  )}
                >
                  <span
                    className={cx(
                      "code mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-[0.78rem] font-semibold",
                      revealed && isCorrect
                        ? "bg-teal text-surface"
                        : revealed && isChosen
                          ? "bg-cortical text-surface"
                          : isChosen
                            ? "bg-teal-tint text-teal-deep"
                            : "bg-surface-2 text-muted",
                    )}
                  >
                    {o.key}
                  </span>
                  <span className="text-[0.95rem] leading-snug text-ink">{o.text}</span>
                </button>
              </li>
            );
          })}
        </ul>

        {/* gabarito comentado */}
        {revealed && (
          <div className="step-enter mt-5 rounded-lg border-l-[3px] border-teal bg-teal-tint/40 py-3 pl-4 pr-4">
            <div className="eyebrow mb-1 text-teal-deep">
              {chosen === q.correct ? "Correto" : `Gabarito: ${q.correct}`}
            </div>
            <p className="text-[0.9rem] leading-relaxed text-ink-soft">{q.explanation}</p>
            {q.reference && (
              <p className="mt-2 flex items-start gap-1.5 text-[0.78rem] text-muted">
                <IconExternal className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                <span className="code">{q.reference}</span>
              </p>
            )}
          </div>
        )}

        {/* ações */}
        <div className="mt-5 flex justify-end">
          {!revealed ? (
            <button
              type="button"
              onClick={confirm}
              disabled={!chosen}
              className="inline-flex items-center gap-2 rounded-lg bg-teal px-4 py-2.5 text-[0.9rem] font-medium text-surface transition-colors enabled:hover:bg-teal-deep disabled:opacity-40"
            >
              Confirmar
            </button>
          ) : (
            <button
              type="button"
              onClick={next}
              className="inline-flex items-center gap-2 rounded-lg bg-teal px-4 py-2.5 text-[0.9rem] font-medium text-surface transition-colors hover:bg-teal-deep"
            >
              {isLast ? "Ver resultado" : "Próxima"}
              <IconChevronRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      <p className="mt-3 text-center text-[0.72rem] text-muted">
        Atalhos: <span className="code">A–{q.options[q.options.length - 1].key}</span> ou{" "}
        <span className="code">1–{q.options.length}</span> selecionam · <span className="code">Enter</span> confirma
      </p>

      <p className="mt-4 text-center text-[0.72rem] leading-relaxed text-muted">
        Questões originais, redigidas a partir da base de evidência do app —{" "}
        <Link to="/" className="underline hover:text-ink">
          não reproduzem provas oficiais do TEOT
        </Link>
        .
      </p>
    </div>
  );
}
