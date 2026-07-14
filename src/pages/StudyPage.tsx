import { useMemo, useState } from "react";
import {
  allQuestions,
  questionsForRegion,
  questionsForTopic,
  regionsWithQuestions,
  quizStats,
} from "../content/questions";
import {
  allFlashcards,
  flashcardsForRegion,
  flashcardsForTopic,
  flashcardStats,
} from "../content/flashcards";
import { allRegions } from "../content/registry";
import type { Question } from "../types/question";
import type { Flashcard } from "../types/flashcard";
import { dailyCardIds, isDue } from "../lib/spacedRepetition";
import { useQuizStats } from "../store/useQuizStats";
import { useFlashcardStats } from "../store/useFlashcardStats";
import QuizRunner from "../components/study/QuizRunner";
import FlashcardRunner from "../components/study/FlashcardRunner";
import { Eyebrow, cx } from "../ui/primitives";
import { IconArrowRight, IconChevronDown, IconLayers } from "../ui/icons";

type Mode = "questions" | "flashcards";
type Scope =
  | { mode: "questions"; title: string; questions: Question[] }
  | { mode: "flashcards"; title: string; cards: Flashcard[] };

function ScopeCard({
  title,
  subtitle,
  count,
  tone = "default",
  onClick,
}: {
  title: string;
  subtitle: string;
  count: number;
  tone?: "default" | "primary" | "warn";
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={count === 0}
      className={cx(
        "panel group flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors disabled:opacity-40",
        tone === "primary" && "border-teal/50 bg-teal-tint/30 hover:border-teal",
        tone === "warn" && "border-cortical/40 hover:border-cortical/70",
        tone === "default" && "hover:border-line-strong",
      )}
    >
      <span className="min-w-0">
        <span className="block text-[1rem] font-medium text-ink">{title}</span>
        <span className="mt-0.5 block text-[0.85rem] text-muted">{subtitle}</span>
      </span>
      <span className="flex shrink-0 items-center gap-3">
        <span className="code text-[1.1rem] font-medium text-ink">{count}</span>
        <IconArrowRight className="h-4 w-4 text-muted transition-transform group-hover:translate-x-0.5" />
      </span>
    </button>
  );
}
function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="bg-surface px-4 py-3">
      <div className="eyebrow">{label}</div>
      <div className="mt-1 font-display text-[1.5rem] text-ink">{value}</div>
    </div>
  );
}

export default function StudyPage() {
  const quizResults = useQuizStats((state) => state.results);
  const wrongIds = useQuizStats((state) => state.wrongIds);
  const cardProgress = useFlashcardStats((state) => state.progress);
  const [mode, setMode] = useState<Mode>("questions");
  const [scope, setScope] = useState<Scope | null>(null);

  const quizAggregate = useMemo(() => {
    const entries = Object.values(quizResults);
    const distinct = entries.filter((result) => result.seen > 0).length;
    const correct = entries.reduce((total, result) => total + result.correct, 0);
    const attempts = entries.reduce((total, result) => total + result.seen, 0);
    return { distinct, accuracy: attempts ? Math.round((correct / attempts) * 100) : null };
  }, [quizResults]);

  const cards = allFlashcards();
  const cardById = useMemo(() => new Map(cards.map((card) => [card.id, card])), [cards]);
  const now = Date.now();
  const dailyIds = dailyCardIds(cards.map((card) => card.id), cardProgress, now, 20);
  const dailyCards = dailyIds.map((id) => cardById.get(id)).filter((card): card is Flashcard => Boolean(card));
  const reviewedDue = cards.filter((card) => cardProgress[card.id] && isDue(cardProgress[card.id], now)).length;
  const seenCards = Object.keys(cardProgress).length;
  const newCards = cards.length - seenCards;
  const wrong = wrongIds();
  const questionRegions = regionsWithQuestions();

  if (scope?.mode === "questions") {
    return (
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-12 sm:px-6 lg:px-8">
        <QuizRunner
          key={`${scope.title}:${scope.questions.length}`}
          questions={scope.questions}
          title={scope.title}
          onExit={() => setScope(null)}
        />
      </div>
    );
  }

  if (scope?.mode === "flashcards") {
    return (
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-12 sm:px-6 lg:px-8">
        <FlashcardRunner
          key={`${scope.title}:${scope.cards.length}`}
          cards={scope.cards}
          title={scope.title}
          onExit={() => setScope(null)}
        />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 pb-20 pt-12 sm:px-6 lg:px-8">
      <Eyebrow>Modo estudo · pt-BR</Eyebrow>
      <h1 className="mt-3 font-display text-[2.2rem] leading-tight text-ink sm:text-[2.6rem]">
        Estudo ativo
      </h1>

      <div className="mt-5 inline-grid grid-cols-2 rounded-lg border border-line bg-surface-2 p-1">
        <button
          type="button"
          onClick={() => setMode("questions")}
          className={cx(
            "rounded-md px-4 py-2 text-[0.86rem] font-medium transition-colors",
            mode === "questions" ? "bg-surface text-ink shadow-sm" : "text-muted hover:text-ink",
          )}
        >
          Questões
        </button>
        <button
          type="button"
          onClick={() => setMode("flashcards")}
          className={cx(
            "rounded-md px-4 py-2 text-[0.86rem] font-medium transition-colors",
            mode === "flashcards" ? "bg-surface text-ink shadow-sm" : "text-muted hover:text-ink",
          )}
        >
          Flashcards
        </button>
      </div>

      {mode === "questions" ? (
        <>
          <p className="mt-4 max-w-2xl text-[1rem] leading-relaxed text-ink-soft">
            Questões de melhor resposta no formato do TEOT, com quatro alternativas, gabarito comentado e referência ao conteúdo revisado.
          </p>

          <div className="mt-6 grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-line bg-line">
            <Stat label="No banco" value={quizStats.total} />
            <Stat label="Respondidas" value={quizAggregate.distinct} />
            <Stat label="Acerto" value={quizAggregate.accuracy === null ? "—" : `${quizAggregate.accuracy}%`} />
          </div>

          <div className="mt-8 space-y-3">
            <ScopeCard
              title="Todas as questões"
              subtitle="Banco completo, embaralhado"
              count={quizStats.total}
              tone="primary"
              onClick={() => setScope({ mode: "questions", title: "Todas as questões", questions: allQuestions() })}
            />
            {wrong.length > 0 && (
              <ScopeCard
                title="Revisar minhas erradas"
                subtitle="Questões erradas na última tentativa"
                count={wrong.length}
                tone="warn"
                onClick={() => setScope({
                  mode: "questions",
                  title: "Revisão das erradas",
                  questions: allQuestions().filter((question) => wrong.includes(question.id)),
                })}
              />
            )}

            <div className="eyebrow flex items-center gap-2 pt-3">
              <IconLayers className="h-3.5 w-3.5" />
              Por região
            </div>
            {questionRegions.map((region) => (
              <ScopeCard
                key={region.id}
                title={region.title}
                subtitle="Questões desta região"
                count={region.count}
                onClick={() => setScope({
                  mode: "questions",
                  title: region.title,
                  questions: questionsForRegion(region.id),
                })}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <p className="mt-4 max-w-2xl text-[1rem] leading-relaxed text-ink-soft">
            Cartões derivados de cada resumo, com intervalos adaptados à sua lembrança e revisões vencidas priorizadas diariamente.
          </p>

          <div className="mt-6 grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-line bg-line">
            <Stat label="No banco" value={flashcardStats.total} />
            <Stat label="Vencidos" value={reviewedDue} />
            <Stat label="Vistos" value={seenCards} />
          </div>

          <div className="mt-8 space-y-3">
            <ScopeCard
              title="Revisão de hoje"
              subtitle={`${reviewedDue} vencidos · até ${Math.min(20, newCards)} novos`}
              count={dailyCards.length}
              tone="primary"
              onClick={() => setScope({ mode: "flashcards", title: "Revisão de hoje", cards: dailyCards })}
            />
            <ScopeCard
              title="Todos os flashcards"
              subtitle="Banco completo dos 98 tópicos"
              count={flashcardStats.total}
              onClick={() => setScope({ mode: "flashcards", title: "Todos os flashcards", cards })}
            />

            <div className="eyebrow flex items-center gap-2 pt-3">
              <IconLayers className="h-3.5 w-3.5" />
              Por região
            </div>
            {allRegions.map((region) => {
              const regionCards = flashcardsForRegion(region.id);
              return (
                <ScopeCard
                  key={region.id}
                  title={region.title}
                  subtitle="Flashcards desta região"
                  count={regionCards.length}
                  onClick={() => setScope({ mode: "flashcards", title: region.title, cards: regionCards })}
                />
              );
            })}
          </div>
        </>
      )}

      <div className="mt-10 border-y border-line">
        <div className="eyebrow flex items-center gap-2 py-4">
          <IconLayers className="h-3.5 w-3.5" />
          Pacotes por tópico
        </div>
        {allRegions.map((region) => (
          <details key={`${mode}:${region.id}`} className="group border-t border-line first:border-t-0">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-[0.95rem] font-medium text-ink">
              <span>{region.title}</span>
              <span className="flex items-center gap-3">
                <span className="code text-[0.72rem] text-muted">
                  {mode === "questions" ? questionsForRegion(region.id).length : flashcardsForRegion(region.id).length}
                </span>
                <IconChevronDown className="h-4 w-4 text-muted transition-transform group-open:rotate-180" />
              </span>
            </summary>
            <div className="pb-3">
              {region.groups.map((group) => (
                <div key={group.id} className="mb-4 last:mb-0">
                  <div className="eyebrow mb-1 px-2">{group.title}</div>
                  <div className="divide-y divide-line">
                    {group.topics.map((topic) => {
                      const count = mode === "questions"
                        ? questionsForTopic(topic.slug).length
                        : flashcardsForTopic(topic.slug).length;
                      return (
                        <button
                          key={topic.slug}
                          type="button"
                          onClick={() => {
                            if (mode === "questions") {
                              setScope({ mode, title: topic.title, questions: questionsForTopic(topic.slug) });
                            } else {
                              setScope({ mode, title: topic.title, cards: flashcardsForTopic(topic.slug) });
                            }
                          }}
                          className="group/row flex w-full items-center justify-between gap-4 px-2 py-2.5 text-left hover:bg-surface-2"
                        >
                          <span className="text-[0.86rem] text-ink-soft group-hover/row:text-ink">{topic.title}</span>
                          <span className="flex shrink-0 items-center gap-2">
                            <span className="code text-[0.72rem] text-muted">{count}</span>
                            <IconArrowRight className="h-3.5 w-3.5 text-muted" />
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </details>
        ))}
      </div>

      <p className="mt-8 rounded-lg border border-line bg-surface-2 px-4 py-3 text-[0.82rem] leading-relaxed text-muted">
        Questões originais e flashcards construídos a partir da base de evidência do app. Não reproduzem provas nem simulados oficiais do TEOT. O progresso fica armazenado localmente e separado por perfil.
      </p>
    </div>
  );
}
