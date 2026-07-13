import { getFigure } from "../../content/figures";
import { CodeChip, cx } from "../../ui/primitives";
import { IconLayers } from "../../ui/icons";

/* ============================================================================
   FigurePanel — moldura .panel .grid-film (light-box radiográfico) que exibe
   a figura da seção/passo ativo. Usada tanto no painel sticky do desktop
   quanto inline dentro de cada seção no mobile. Remonta a figura ao trocar
   id/variant/passo para que o traço de fratura (.fx-line) se redesenhe.
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
  className?: string;
}

export default function FigurePanel({
  figureId,
  variant,
  activeStep,
  caption,
  alt,
  eyebrow,
  variants,
  onVariant,
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
          {eyebrow ? <span className="eyebrow truncate">{eyebrow}</span> : <span />}
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

      <div className="grid-film grid place-items-center px-4 py-5 sm:px-6">
        <Figure
          key={`${figureId}:${variant ?? ""}:${activeStep ?? ""}`}
          variant={variant}
          activeStep={activeStep}
          title={alt || caption || figureId}
          className="h-auto w-full max-h-[46vh]"
        />
      </div>

      {caption && (
        <figcaption className="border-t border-line px-3 py-2.5">
          <div className="flex items-start gap-2">
            {activeVariantLabel && !showSelector && (
              <CodeChip tone="teal">{activeVariantLabel}</CodeChip>
            )}
            <p className="text-[0.82rem] leading-snug text-ink-soft">{caption}</p>
          </div>
        </figcaption>
      )}
    </figure>
  );
}
