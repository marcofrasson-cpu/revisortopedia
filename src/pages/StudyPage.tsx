import { useMemo, useState } from "react";
import {
  allQuestions,
  questionsForRegion,
  regionsWithQuestions,
  quizStats,
} from "../content/questions";
import type { Question } from "../types/question";
import { useQuizStats } from "../store/useQuizStats";
import QuizRunner from "../components/study/QuizRunner";
import { Eyebrow, cx } from "../ui/primitives";
import { IconArrowRight, IconLayers } from "../ui/icons";

interface Scope {
  title: string;
  questions: Question[];
}

export default function StudyPage() {
  // O progresso do quiz é hidratado por perfil no App; aqui só lemos.
  const results = useQuizStats((s) => s.results);
  const wrongIds = useQuizStats((s) => s.wrongIds);
  const [scope, setScope] = useState<Scope | null>(null);

  const agg = useMemo(() => {
    const entries = Object.values(results);
    const seen = entries.filter((r) => r.seen > 0).length;
    const correct = entries.reduce((n, r) => n + r.correct, 0);
    const total = entries.reduce((n, r) => n + r.seen, 0);
    return { distinct: seen, accuracy: total ? Math.round((correct / total) * 100) : null };
  }, [results]);

  const wrong = wrongIds();
  const regions = regionsWithQuestions();

  if (scope) {
    return (
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <QuizRunner
          key={scope.title + scope.questions.length}
          questions={scope.questions}
          title={scope.title}
          onExit={() => setScope(null)}
        />
      </div>
    );
  }

  const ScopeCard = ({
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
  }) => (
    <button
      type="button"
      onClick={onClick}
      disabled={count === 0}
      className={cx(
        "panel group flex items-center justify-between gap-4 px-5 py-4 text-left transition-colors disabled:opacity-40",
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

  return (
    <div className="mx-auto max-w-3xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
      <Eyebrow>Modo estudo · pt-BR</Eyebrow>
      <h1 className="mt-3 font-display text-[2.2rem] leading-tight text-ink sm:text-[2.6rem]">
        Banco de questões
      </h1>
      <p className="mt-3 max-w-xl text-[1rem] leading-relaxed text-ink-soft">
        Questões no formato do TEOT — vinheta clínica, alternativas e gabarito comentado com
        referência. Responda, revele e revise as que errar.
      </p>

      {/* stats */}
      <div className="mt-6 grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-line bg-line">
        <div className="bg-surface px-4 py-3">
          <div className="eyebrow">No banco</div>
          <div className="mt-1 font-display text-[1.5rem] text-ink">{quizStats.total}</div>
        </div>
        <div className="bg-surface px-4 py-3">
          <div className="eyebrow">Respondidas</div>
          <div className="mt-1 font-display text-[1.5rem] text-ink">{agg.distinct}</div>
        </div>
        <div className="bg-surface px-4 py-3">
          <div className="eyebrow">Acerto</div>
          <div className="mt-1 font-display text-[1.5rem] text-ink">
            {agg.accuracy === null ? "—" : `${agg.accuracy}%`}
          </div>
        </div>
      </div>

      {/* escopos */}
      <div className="mt-8 space-y-3">
        <ScopeCard
          title="Todas as questões"
          subtitle="Bloco completo, embaralhado"
          count={quizStats.total}
          tone="primary"
          onClick={() => setScope({ title: "Todas as questões", questions: allQuestions() })}
        />
        {wrong.length > 0 && (
          <ScopeCard
            title="Revisar minhas erradas"
            subtitle="As que você não acertou na última tentativa"
            count={wrong.length}
            tone="warn"
            onClick={() =>
              setScope({
                title: "Revisão das erradas",
                questions: allQuestions().filter((q) => wrong.includes(q.id)),
              })
            }
          />
        )}

        <div className="eyebrow flex items-center gap-2 pt-3">
          <IconLayers className="h-3.5 w-3.5" />
          Por região
        </div>
        {regions.map((r) => (
          <ScopeCard
            key={r.id}
            title={r.title}
            subtitle="Questões desta região"
            count={r.count}
            onClick={() =>
              setScope({ title: r.title, questions: questionsForRegion(r.id) })
            }
          />
        ))}
      </div>

      <p className="mt-8 rounded-lg border border-line bg-surface-2 px-4 py-3 text-[0.82rem] leading-relaxed text-muted">
        Questões <strong className="text-ink-soft">originais</strong>, redigidas a partir da base de
        evidência do app. Não reproduzem provas nem simulados oficiais do TEOT (conteúdo protegido).
        Ferramenta de autoestudo — não substitui julgamento clínico.
      </p>
    </div>
  );
}
