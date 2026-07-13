import { Link } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";
import ThemeToggle from "./ThemeToggle";
import { IconSearch, IconMenu } from "../../ui/icons";
import { LogoMark } from "../../ui/Logo";
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

interface Props {
  onOpenSearch: () => void;
  onOpenMenu: () => void;
  onOpenProfile: () => void;
  onRequestVisible: () => void;
  hidden: boolean;
  scrolled: boolean;
}

export default function TopBar({
  onOpenSearch,
  onOpenMenu,
  onOpenProfile,
  onRequestVisible,
  hidden,
  scrolled,
}: Props) {
  const active = useProfiles((s) => s.active());
  return (
    <header
      className="app-header"
      data-hidden={hidden ? "true" : "false"}
      data-scrolled={scrolled ? "true" : "false"}
      onFocusCapture={onRequestVisible}
    >
      <div className="app-header__pill">
        <div className="flex h-full min-w-0 items-center gap-1.5 px-2 sm:gap-2 sm:px-3">
          {/* Mobile: menu */}
          <button
            type="button"
            onClick={onOpenMenu}
            aria-label="Abrir navegação"
            className="app-header-control grid h-9 w-9 shrink-0 place-items-center lg:hidden"
          >
            <IconMenu className="h-5 w-5" />
          </button>

          {/* Wordmark */}
          <Link
            to="/"
            className="flex shrink-0 items-center gap-2 rounded-full px-1.5 py-1 transition-colors hover:bg-[var(--header-control-hover)] sm:pr-2.5"
            aria-label="Revisortopedia — início"
          >
            <LogoMark className="h-8 w-8" />
            <span className="hidden font-display text-[1.08rem] font-medium text-ink sm:inline">
              Revisortopedia
            </span>
          </Link>

          {/* Breadcrumb — desktop only */}
          <div className="hidden min-w-0 flex-1 items-center border-l border-line pl-3 lg:flex">
            <Breadcrumb />
          </div>

          <div className="ml-auto flex min-w-0 items-center justify-end gap-1 sm:gap-1.5">
            {/* Modo estudo */}
            <Link
              to="/estudo"
              className="app-header-control app-header-study hidden h-9 items-center gap-1.5 px-3 text-[0.8rem] sm:flex"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-teal" />
              Estudo
            </Link>

            {/* Search trigger */}
            <button
              type="button"
              onClick={onOpenSearch}
              aria-label="Buscar tópicos"
              className="app-header-control group flex h-9 items-center gap-2 px-2.5 text-muted"
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
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-muted text-[0.72rem] font-semibold text-white shadow-sm transition-transform hover:scale-105"
              style={active ? { background: `hsl(${active.hue} 42% 42%)` } : undefined}
            >
              {active ? initials(active.name) : "?"}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
