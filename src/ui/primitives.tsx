import type { ReactNode } from "react";
import type { EvidenceLevel, TopicStatus } from "../types/topic";

/** classnames helper */
export function cx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

/* ---- Eyebrow / kicker ---------------------------------------------------- */
export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cx("eyebrow", className)}>{children}</div>;
}

/* ---- Mono code chip (classification codes, measurements) ----------------- */
export function CodeChip({
  children,
  tone = "teal",
  className,
}: {
  children: ReactNode;
  tone?: "teal" | "cortical" | "amber" | "plain";
  className?: string;
}) {
  const tones: Record<string, string> = {
    teal: "bg-teal-tint text-teal-deep",
    cortical: "bg-cortical-tint text-cortical",
    amber: "bg-amber-tint text-amber",
    plain: "bg-surface-2 text-ink-soft",
  };
  return (
    <span
      className={cx(
        "code inline-flex items-center rounded-md px-1.5 py-0.5 text-[0.72rem] font-medium leading-none",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

/* ---- Evidence level badge (Oxford CEBM I–V) ------------------------------ */
export function LevelBadge({ level }: { level: EvidenceLevel }) {
  const strong = level === "I" || level === "II";
  return (
    <span
      title={`Nível de evidência ${level} (Oxford CEBM)`}
      className={cx(
        "code inline-flex h-6 min-w-6 items-center justify-center rounded-md border px-1.5 text-[0.72rem] font-semibold",
        strong
          ? "border-teal/40 bg-teal-tint text-teal-deep"
          : "border-line-strong bg-surface-2 text-muted",
      )}
    >
      {level}
    </span>
  );
}

/* ---- Era tag (foundational vs current) ----------------------------------- */
export function EraTag({ era }: { era: "classico" | "atual" }) {
  return (
    <span
      className={cx(
        "eyebrow rounded-full border px-2 py-0.5",
        era === "atual" ? "border-teal/40 text-teal-deep" : "border-amber/40 text-amber",
      )}
    >
      {era === "atual" ? "Atual" : "Clássico"}
    </span>
  );
}

/* ---- Status dot ---------------------------------------------------------- */
export function StatusDot({ status }: { status: TopicStatus }) {
  const map: Record<TopicStatus, string> = {
    complete: "bg-teal",
    stub: "bg-amber",
    planned: "bg-line-strong",
  };
  const label: Record<TopicStatus, string> = {
    complete: "Conteúdo completo",
    stub: "Esboço",
    planned: "Planejado",
  };
  return (
    <span
      title={label[status]}
      aria-label={label[status]}
      className={cx("inline-block h-1.5 w-1.5 shrink-0 rounded-full", map[status])}
    />
  );
}

/* ---- Callout ------------------------------------------------------------- */
export function Callout({
  tone = "note",
  title,
  children,
}: {
  tone?: "tip" | "warn" | "note";
  title?: string;
  children: ReactNode;
}) {
  const tones: Record<string, { wrap: string; bar: string; label: string }> = {
    tip: { wrap: "bg-teal-tint/50", bar: "bg-teal", label: "text-teal-deep" },
    warn: { wrap: "bg-cortical-tint/60", bar: "bg-cortical", label: "text-cortical" },
    note: { wrap: "bg-surface-2", bar: "bg-line-strong", label: "text-ink-soft" },
  };
  const t = tones[tone];
  return (
    <div className={cx("relative overflow-hidden rounded-lg py-3 pl-4 pr-4", t.wrap)}>
      <span className={cx("absolute left-0 top-0 h-full w-[3px]", t.bar)} />
      {title && <div className={cx("eyebrow mb-1", t.label)}>{title}</div>}
      {/* max-w e hyphens à mão: o corpo do callout é um <div>, não um <p>, então
          não pega a regra de base. Media 115 caracteres por linha em blocos de
          6 linhas na "Chave de decisão" — o pior texto de leitura da página
          depois que a evidência virou grade. */}
      <div className="max-w-[var(--measure)] hyphens-auto text-[0.9rem] leading-relaxed text-ink-soft">
        {children}
      </div>
    </div>
  );
}

/* ---- Section heading with mono index ------------------------------------- */
export function SectionHeading({
  index,
  eyebrow,
  title,
  id,
}: {
  index?: string;
  eyebrow?: string;
  title: string;
  id?: string;
}) {
  return (
    <div id={id} className="scroll-mt-24">
      <div className="mb-2 flex items-center gap-3">
        {index && <span className="code text-[0.8rem] font-medium text-teal">{index}</span>}
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      </div>
      {/* 2rem, e não 1,6rem: o corpo da prosa subiu para 1,3rem para derrubar a
          medida de 90 para 72 caracteres. A 1,6rem o h2 ficaria só 1,22× o corpo
          — o título de seção deixaria de mandar na página. */}
      <h2 className="text-[2rem] text-ink">{title}</h2>
    </div>
  );
}
