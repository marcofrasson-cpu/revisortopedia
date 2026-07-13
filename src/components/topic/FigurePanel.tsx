import { getFigure } from "../../content/figures";
import { CodeChip, cx } from "../../ui/primitives";
import { IconExternal, IconLayers } from "../../ui/icons";
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

  return (
    <figure className={cx("panel overflow-hidden", className)}>
      {(eyebrow || showSelector) && (
        <div className="flex items-center justify-between gap-3 border-b border-line px-3 py-2">
          <div className="flex min-w-0 items-center gap-2">
            {eyebrow ? <span className="eyebrow truncate">{eyebrow}</span> : <span />}
            <CodeChip tone={kind === "diagram" ? "plain" : "teal"}>{KIND_LABEL[kind]}</CodeChip>
          </div>
          {showSelector && (
            <div className="flex shrink-0 items-center gap-1" role="group" aria-label="Variante da figura">
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
        </div>
      )}

      <div className="grid-film grid min-h-[240px] place-items-center px-3 py-4 sm:min-h-[320px] sm:px-6 sm:py-6">
        <Figure
          key={`${figureId}:${variant ?? ""}:${activeStep ?? ""}`}
          variant={variant}
          activeStep={activeStep}
          title={alt || caption || figureId}
          className="h-auto max-h-[34rem] w-full object-contain"
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
  );
}
