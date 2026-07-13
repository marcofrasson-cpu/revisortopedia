import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { getFigure } from "../../content/figures";
import { CodeChip, cx } from "../../ui/primitives";
import { IconClose, IconExpand, IconExternal, IconLayers } from "../../ui/icons";
import type { FigureKind, FigureSource } from "../../types/topic";

/* ============================================================================
   FigurePanel — moldura .panel .grid-film que exibe mídia no fluxo editorial.
   Remonta a figura ao trocar id/variant/passo para que diagramas interativos
   redesenhem o traço de fratura (.fx-line).
   ========================================================================== */

export interface VariantOption {
  value: string;
  label: string;
}

/** Figura em foco no painel — dirigida por scroll-spy e por interações. */
export interface FocusedFigure {
  figureId: string;
  variant?: string;
  activeStep?: number;
  caption?: string;
  alt?: string;
  /** Rótulo mono acima da moldura (ex.: nome do sistema de classificação). */
  eyebrow?: string;
  /** Variantes selecionáveis (ex.: Weber A/B/C) — renderiza o seletor. */
  variants?: VariantOption[];
}

interface FigurePanelProps {
  figureId?: string;
  variant?: string;
  activeStep?: number;
  caption?: string;
  alt?: string;
  eyebrow?: string;
  variants?: VariantOption[];
  onVariant?: (value: string) => void;
  kind?: FigureKind;
  source?: FigureSource;
  className?: string;
}

const KIND_LABEL: Record<FigureKind, string> = {
  diagram: "Esquema",
  radiograph: "Radiografia",
  ct: "Tomografia",
  mri: "Ressonância",
  "anatomy-photo": "Anatomia",
  "clinical-photo": "Foto clínica",
};

export default function FigurePanel({
  figureId,
  variant,
  activeStep,
  caption,
  alt,
  eyebrow,
  variants,
  onVariant,
  kind = "diagram",
  source,
  className,
}: FigurePanelProps) {
  const [expanded, setExpanded] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const clinical = kind !== "diagram";
  const film = kind === "radiograph" || kind === "ct" || kind === "mri";

  useEffect(() => {
    if (!expanded) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setExpanded(false);
      } else if (event.key === "Tab") {
        const focusable = Array.from(
          dialogRef.current?.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
          ) ?? [],
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (focusable.length === 0) {
          event.preventDefault();
          closeRef.current?.focus();
        } else if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus?.();
    };
  }, [expanded]);

  if (!figureId) {
    return (
      <div
        className={cx(
          "panel grid-film flex min-h-[220px] flex-col items-center justify-center gap-2 px-6 py-10 text-center",
          className,
        )}
      >
        <IconLayers className="h-6 w-6 text-line-strong" aria-hidden />
        <p className="eyebrow max-w-[16rem] leading-relaxed">
          Sem figura dedicada nesta seção
        </p>
      </div>
    );
  }

  const Figure = getFigure(figureId);
  const showSelector = Boolean(variants && variants.length > 1 && onVariant);
  const activeVariantLabel =
    variants?.find((v) => v.value === variant)?.label ?? variant;
  const figureTitle = alt || caption || figureId;

  return (
    <>
      <figure
        className={cx(
          "panel overflow-hidden",
          clinical && "mx-auto max-w-[760px]",
          className,
        )}
      >
        {(eyebrow || showSelector || clinical) && (
          <div className="flex items-center justify-between gap-3 border-b border-line px-3 py-2">
            <div className="flex min-w-0 items-center gap-2">
              {eyebrow ? <span className="eyebrow truncate">{eyebrow}</span> : <span />}
              <CodeChip tone={kind === "diagram" ? "plain" : "teal"}>
                {KIND_LABEL[kind]}
              </CodeChip>
            </div>
            <div className="flex shrink-0 items-center gap-1.5">
              {showSelector && (
                <div
                  className="flex items-center gap-1"
                  role="group"
                  aria-label="Variante da figura"
                >
                  {variants!.map((v) => {
                    const on = v.value === variant;
                    return (
                      <button
                        key={v.value}
                        type="button"
                        aria-pressed={on}
                        onClick={() => onVariant!(v.value)}
                        className={cx(
                          "code rounded-md border px-2 py-1 text-[0.72rem] leading-none transition-colors",
                          on
                            ? "border-teal/50 bg-teal-tint text-teal-deep"
                            : "border-line text-muted hover:border-line-strong hover:text-ink",
                        )}
                      >
                        {v.label}
                      </button>
                    );
                  })}
                </div>
              )}
              {clinical && (
                <button
                  type="button"
                  onClick={() => setExpanded(true)}
                  aria-label="Ampliar imagem"
                  title="Ampliar imagem"
                  className="grid h-8 w-8 place-items-center rounded-md border border-line text-muted transition-colors hover:border-line-strong hover:bg-surface-2 hover:text-ink"
                >
                  <IconExpand className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        )}

        <div
          className={cx(
            "grid place-items-center px-3 py-4 sm:px-5 sm:py-5",
            clinical
              ? film
                ? "min-h-[180px] bg-[#0b1118] sm:min-h-[220px]"
                : "min-h-[180px] bg-surface-2 sm:min-h-[220px]"
              : "grid-film min-h-[240px] sm:min-h-[300px] sm:px-6 sm:py-6",
          )}
        >
          <Figure
            key={`${figureId}:${variant ?? ""}:${activeStep ?? ""}`}
            variant={variant}
            activeStep={activeStep}
            title={figureTitle}
            className={cx(
              "object-contain",
              clinical
                ? "block h-auto max-h-[26rem] w-auto max-w-full shadow-[0_12px_30px_rgba(0,0,0,0.35)]"
                : "h-auto max-h-[30rem] w-full",
            )}
          />
        </div>

        {(caption || source) && (
          <figcaption className="border-t border-line px-3 py-2.5">
            {caption && (
              <div className="flex items-start gap-2">
                {activeVariantLabel && !showSelector && (
                  <CodeChip tone="teal">{activeVariantLabel}</CodeChip>
                )}
                <p className="text-[0.82rem] leading-snug text-ink-soft">{caption}</p>
              </div>
            )}
            {source && (
              <div
                className={cx(
                  "flex items-start gap-1.5 text-[0.7rem] leading-relaxed text-muted",
                  caption && "mt-2 border-t border-line/70 pt-2",
                )}
              >
                {source.url && <IconExternal className="mt-0.5 h-3 w-3 shrink-0" aria-hidden />}
                <p>
                  {source.url ? (
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-ink-soft transition-colors hover:text-teal-deep"
                    >
                      {source.label}
                    </a>
                  ) : (
                    <span className="font-medium text-ink-soft">{source.label}</span>
                  )}
                  {source.license && <> · {source.license}</>}
                  {source.reference && <> · {source.reference}</>}
                </p>
              </div>
            )}
          </figcaption>
        )}
      </figure>

      {clinical && expanded &&
        createPortal(
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={`Visualização ampliada: ${figureTitle}`}
            className="fixed inset-0 z-[90] flex h-dvh flex-col bg-[#071019]/95 text-slate-100 backdrop-blur-sm"
          >
            <div className="flex h-14 shrink-0 items-center justify-between gap-4 border-b border-white/10 px-4 sm:px-6">
              <div className="flex min-w-0 items-center gap-2">
                <span className="eyebrow truncate text-slate-400">{eyebrow || "Imagem clínica"}</span>
                <span className="code rounded bg-white/10 px-1.5 py-0.5 text-[0.66rem] text-slate-200">
                  {KIND_LABEL[kind]}
                </span>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={() => setExpanded(false)}
                aria-label="Fechar visualização ampliada"
                title="Fechar"
                className="grid h-9 w-9 shrink-0 place-items-center rounded-md border border-white/15 text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
              >
                <IconClose className="h-5 w-5" />
              </button>
            </div>

            <div
              className="grid min-h-0 flex-1 place-items-center overflow-auto p-4 sm:p-6"
              onClick={(event) => {
                if (event.currentTarget === event.target) setExpanded(false);
              }}
            >
              <Figure
                variant={variant}
                activeStep={activeStep}
                title={figureTitle}
                className="block h-auto max-h-[calc(100dvh-9rem)] w-auto max-w-full object-contain shadow-[0_20px_60px_rgba(0,0,0,0.55)]"
              />
            </div>

            {caption && (
              <p className="shrink-0 border-t border-white/10 px-4 py-3 text-center text-[0.8rem] text-slate-300 sm:px-6">
                {caption}
              </p>
            )}
          </div>,
          document.body,
        )}
    </>
  );
}
