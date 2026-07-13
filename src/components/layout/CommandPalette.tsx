import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchTopics, allSearchable, type SearchResult } from "../../search";
import { IconSearch, IconArrowRight, IconChevronRight } from "../../ui/icons";
import { StatusDot, cx } from "../../ui/primitives";

interface Props {
  open: boolean;
  onClose: () => void;
}

const MAX = 40;

export default function CommandPalette({ open, onClose }: Props) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const results = useMemo<SearchResult[]>(() => {
    const q = query.trim();
    if (!q) return allSearchable().slice(0, MAX);
    return searchTopics(q).slice(0, MAX);
  }, [query]);

  // Reset state whenever the palette opens.
  useEffect(() => {
    if (open) {
      setQuery("");
      setActive(0);
      const id = requestAnimationFrame(() => inputRef.current?.focus());
      return () => cancelAnimationFrame(id);
    }
    return undefined;
  }, [open]);

  // Clamp the highlighted row as the result set shrinks.
  useEffect(() => {
    setActive((a) => (a >= results.length ? 0 : a));
  }, [results.length]);

  // Lock body scroll while open.
  useEffect(() => {
    if (!open) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Keep the active row scrolled into view.
  useEffect(() => {
    const el = listRef.current?.querySelector<HTMLElement>(`[data-idx="${active}"]`);
    el?.scrollIntoView({ block: "nearest" });
  }, [active]);

  if (!open) return null;

  const go = (r: SearchResult | undefined) => {
    if (!r) return;
    onClose();
    navigate(`/topico/${r.slug}`);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      e.preventDefault();
      onClose();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => (results.length ? (a + 1) % results.length : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => (results.length ? (a - 1 + results.length) % results.length : 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      go(results[active]);
    } else if (e.key === "Tab") {
      // Trap focus — only the input is focusable.
      e.preventDefault();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-[12vh]"
      role="dialog"
      aria-modal="true"
      aria-label="Buscar tópicos"
    >
      <button
        type="button"
        aria-label="Fechar busca"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-ink/30 backdrop-blur-[2px] motion-safe:animate-[step-in_0.2s_ease]"
      />

      <div
        className="panel step-enter relative z-10 flex w-full max-w-xl flex-col overflow-hidden"
        onKeyDown={onKeyDown}
      >
        <div className="flex items-center gap-3 border-b border-line px-4">
          <IconSearch className="h-5 w-5 shrink-0 text-muted" aria-hidden="true" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar fratura, região, classificação…"
            aria-label="Termo de busca"
            role="combobox"
            aria-expanded="true"
            aria-controls="cmd-results"
            aria-activedescendant={results[active] ? `cmd-opt-${active}` : undefined}
            autoComplete="off"
            spellCheck={false}
            className="w-full bg-transparent py-3.5 text-[0.95rem] text-ink placeholder:text-muted focus:outline-none"
          />
          <kbd className="code hidden shrink-0 rounded border border-line px-1.5 py-0.5 text-[0.65rem] text-muted sm:block">
            esc
          </kbd>
        </div>

        <ul
          ref={listRef}
          id="cmd-results"
          role="listbox"
          aria-label="Resultados"
          className="max-h-[52vh] overflow-y-auto p-2"
        >
          {results.length === 0 && (
            <li className="px-3 py-10 text-center text-[0.88rem] text-muted">
              Nenhum tópico para{" "}
              <span className="text-ink-soft">“{query.trim()}”</span>.
            </li>
          )}

          {results.map((r, i) => {
            const isActive = i === active;
            return (
              <li key={r.slug} role="presentation">
                <button
                  type="button"
                  id={`cmd-opt-${i}`}
                  data-idx={i}
                  role="option"
                  aria-selected={isActive}
                  onMouseMove={() => setActive(i)}
                  onClick={() => go(r)}
                  className={cx(
                    "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors",
                    isActive ? "bg-surface-2" : "hover:bg-surface-2/60",
                  )}
                >
                  <StatusDot status={r.status} />
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-[0.9rem] text-ink">{r.title}</span>
                    <span className="mt-0.5 flex items-center gap-1 text-[0.72rem] text-muted">
                      <span className="truncate">{r.regionTitle}</span>
                      <IconChevronRight className="h-3 w-3 shrink-0" aria-hidden="true" />
                      <span className="truncate">{r.groupTitle}</span>
                    </span>
                  </span>
                  <IconArrowRight
                    className={cx(
                      "h-4 w-4 shrink-0 transition-opacity",
                      isActive ? "text-teal opacity-100" : "opacity-0",
                    )}
                    aria-hidden="true"
                  />
                </button>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center justify-between border-t border-line px-4 py-2 text-[0.7rem] text-muted">
          <span className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <kbd className="code rounded border border-line px-1">↑</kbd>
              <kbd className="code rounded border border-line px-1">↓</kbd>
              navegar
            </span>
            <span className="flex items-center gap-1">
              <kbd className="code rounded border border-line px-1">↵</kbd>
              abrir
            </span>
          </span>
          <span className="code">{results.length} resultado{results.length === 1 ? "" : "s"}</span>
        </div>
      </div>
    </div>
  );
}
