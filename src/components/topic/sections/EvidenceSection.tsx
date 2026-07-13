import type { EvidenceLevel, Topic } from "../../../types/topic";
import { EraTag, LevelBadge, SectionHeading } from "../../../ui/primitives";
import { IconExternal } from "../../../ui/icons";

const ORDER: Record<EvidenceLevel, number> = { I: 0, II: 1, III: 2, IV: 3, V: 4 };

/* Evidência — cartões ordenados por nível (Oxford CEBM), com claim, takeaway,
   citação completa, link DOI e PMID. Atribuição ao PubMed é obrigatória. */
export default function EvidenceSection({ topic }: { topic: Topic }) {
  const items = [...topic.evidence].sort((a, b) => ORDER[a.level] - ORDER[b.level]);

  return (
    <>
      <SectionHeading index="09" eyebrow="Evidência" title="Base de evidências" />

      {topic.meta.attribution && (
        <p className="mt-3 rounded-lg border border-line bg-surface-2 px-4 py-2.5 text-[0.82rem] leading-relaxed text-muted">
          {topic.meta.attribution}
        </p>
      )}

      <div className="mt-5 space-y-3">
        {items.map((e) => {
          const c = e.citation;
          const href = c.url ?? (c.doi ? `https://doi.org/${c.doi}` : undefined);
          return (
            <article key={e.id} className="panel p-4">
              <div className="flex flex-wrap items-center gap-2">
                <LevelBadge level={e.level} />
                <EraTag era={e.era} />
                <span className="eyebrow">{e.studyType}</span>
              </div>

              <p className="mt-3 text-[0.98rem] font-medium leading-snug text-ink">{e.claim}</p>
              <p className="mt-1.5 text-[0.9rem] leading-relaxed text-ink-soft">
                <span className="eyebrow mr-2 text-teal-deep">Em síntese</span>
                {e.takeaway}
              </p>

              <div className="mt-3 border-t border-line pt-3">
                <p className="text-[0.82rem] leading-relaxed text-muted">
                  {c.authors} <span className="text-ink-soft">{c.title}.</span>{" "}
                  <span className="italic">{c.journal}</span>. {c.year}.
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-3">
                  {href && (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[0.8rem] font-medium text-teal transition-colors hover:text-teal-deep"
                    >
                      <IconExternal className="h-3.5 w-3.5" />
                      DOI: {c.doi}
                    </a>
                  )}
                  {c.pmid && (
                    <span className="code text-[0.76rem] text-muted">PMID: {c.pmid}</span>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
