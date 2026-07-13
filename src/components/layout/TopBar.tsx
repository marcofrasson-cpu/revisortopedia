import { Link } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";
import ThemeToggle from "./ThemeToggle";
import { IconSearch, IconMenu } from "../../ui/icons";
import { useProfiles } from "../../store/useProfiles";

function initials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

const isMac =
  typeof navigator !== "undefined" && /Mac|iPhone|iPad/i.test(navigator.platform || navigator.userAgent);
const shortcut = isMac ? "⌘K" : "Ctrl K";

/* Small original "surgical forceps" (pinça) glyph for the wordmark. */
function ForcepsMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M8 3.5c1.4 1.8 1.6 4 .7 6.4L6.4 20.5M16 3.5c-1.4 1.8-1.6 4-.7 6.4l2.3 10.6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="8" cy="3.2" r="1.3" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16" cy="3.2" r="1.3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9.6 11h4.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

interface Props {
  onOpenSearch: () => void;
  onOpenMenu: () => void;
  onOpenProfile: () => void;
}

export default function TopBar({ onOpenSearch, onOpenMenu, onOpenProfile }: Props) {
  const active = useProfiles((s) => s.active());
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur-md">
      <div className="flex h-14 items-center gap-3 px-3 sm:px-4">
        {/* Mobile: menu */}
        <button
          type="button"
          onClick={onOpenMenu}
          aria-label="Abrir navegação"
          className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-line text-ink-soft transition-colors hover:bg-surface-2 hover:text-ink lg:hidden"
        >
          <IconMenu className="h-5 w-5" />
        </button>

        {/* Wordmark */}
        <Link
          to="/"
          className="flex shrink-0 items-center gap-2 rounded-md pr-2 transition-colors hover:text-teal"
          aria-label="Revisortopedia — início"
        >
          <ForcepsMark className="h-6 w-6 text-teal" />
          <span className="font-display text-[1.12rem] font-medium tracking-tight text-ink">
            Revisortopedia
          </span>
        </Link>

        {/* Breadcrumb — desktop only */}
        <div className="hidden min-w-0 flex-1 items-center border-l border-line pl-3 lg:flex">
          <Breadcrumb />
        </div>

        <div className="flex flex-1 items-center justify-end gap-2 lg:flex-none">
          {/* Modo estudo */}
          <Link
            to="/estudo"
            className="hidden items-center gap-1.5 rounded-lg border border-line bg-surface px-2.5 py-2 text-[0.82rem] text-ink-soft transition-colors hover:border-teal/50 hover:text-teal sm:flex"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-teal" />
            Estudo
          </Link>

          {/* Search trigger */}
          <button
            type="button"
            onClick={onOpenSearch}
            aria-label="Buscar tópicos"
            className="group flex items-center gap-2 rounded-lg border border-line bg-surface px-2.5 py-2 text-muted transition-colors hover:border-line-strong hover:text-ink-soft"
          >
            <IconSearch className="h-4 w-4" />
            <span className="hidden text-[0.82rem] sm:inline">Buscar</span>
            <kbd className="code hidden rounded border border-line px-1.5 py-0.5 text-[0.65rem] leading-none sm:inline-block">
              {shortcut}
            </kbd>
          </button>

          <ThemeToggle />

          {/* Perfil ativo — abre o seletor */}
          <button
            type="button"
            onClick={onOpenProfile}
            aria-label={active ? `Perfil: ${active.name} — trocar` : "Perfis"}
            title={active ? `${active.name} — trocar perfil` : "Perfis"}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-lg text-[0.72rem] font-semibold text-white transition-transform hover:scale-105"
            style={active ? { background: `hsl(${active.hue} 42% 42%)` } : undefined}
          >
            {active ? initials(active.name) : "?"}
          </button>
        </div>
      </div>
    </header>
  );
}
