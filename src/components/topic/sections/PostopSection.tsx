import type { Topic } from "../../../types/topic";
import { CodeChip, SectionHeading } from "../../../ui/primitives";

/* Pós-op & reabilitação — imobilização, carga e a timeline de fases. */
export default function PostopSection({ topic }: { topic: Topic }) {
  const { immobilization, weightBearing, rehab, followup } = topic.postop;

  return (
    <>
      <SectionHeading index="07" eyebrow="Pós-op" title="Pós-operatório e reabilitação" />

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="panel p-4">
          <div className="eyebrow mb-1.5">Imobilização</div>
          <p className="text-[0.92rem] leading-relaxed text-ink-soft">{immobilization}</p>
        </div>
        <div className="panel p-4">
          <div className="eyebrow mb-1.5">Carga</div>
          <p className="text-[0.92rem] leading-relaxed text-ink-soft">{weightBearing}</p>
        </div>
      </div>

      {rehab.length > 0 && (
        <ol className="mt-4 space-y-0">
          {rehab.map((ph, i) => (
            <li key={i} className="relative flex gap-4 pb-5 last:pb-0">
              {/* timeline spine */}
              <div className="flex flex-col items-center">
                <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full border-2 border-teal bg-surface" />
                {i < rehab.length - 1 && <span className="w-px flex-1 bg-line" />}
              </div>
              <div className="pb-1">
                <div className="flex flex-wrap items-center gap-2">
                  <CodeChip tone="teal">{ph.window}</CodeChip>
                  <span className="text-[0.82rem] text-muted">{ph.weightBearing}</span>
                </div>
                <p className="mt-1.5 text-[0.92rem] leading-relaxed text-ink-soft">{ph.focus}</p>
              </div>
            </li>
          ))}
        </ol>
      )}

      {followup && (
        <p className="mt-4 border-l-2 border-line pl-4 text-[0.9rem] leading-relaxed text-muted">
          <span className="eyebrow mr-2">Seguimento</span>
          {followup}
        </p>
      )}
    </>
  );
}
