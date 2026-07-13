import type { SectionKey } from "../../types/topic";
import { SECTIONS } from "../../types/topic";
import { cx } from "../../ui/primitives";

/* Trilha de seções — tira horizontal sticky com scroll-spy. Numerada porque a
   leitura de um tópico segue uma sequência de estudo (anatomia → … → evidência). */
export default function SectionRail({
  visible,
  active,
}: {
  visible: SectionKey[];
  active: SectionKey;
}) {
  const items = SECTIONS.filter((s) => visible.includes(s.key));

  const go = (key: string) => {
    document.getElementById(`sec-${key}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      aria-label="Seções do tópico"
      className="app-sticky-rail sticky z-20 -mx-4 mb-2 border-b border-line bg-bg/85 px-4 backdrop-blur-md sm:-mx-6 sm:px-6"
    >
      <ul className="flex gap-1 overflow-x-auto py-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {items.map((s, i) => {
          const on = s.key === active;
          return (
            <li key={s.key}>
              <button
                type="button"
                onClick={() => go(s.key)}
                aria-current={on ? "true" : undefined}
                className={cx(
                  "flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1.5 text-[0.82rem] transition-colors",
                  on
                    ? "bg-teal-tint text-teal-deep"
                    : "text-muted hover:bg-surface-2 hover:text-ink",
                )}
              >
                <span className="code text-[0.64rem] opacity-70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {s.short}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
