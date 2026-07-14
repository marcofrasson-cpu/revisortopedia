import { useCallback, useEffect, useRef, useState } from "react";
import type { MouseEvent as ReactMouseEvent, PointerEvent as ReactPointerEvent } from "react";
import { Outlet, useLocation } from "react-router-dom";
import TopBar from "./TopBar";
import NavTree from "./NavTree";
import CommandPalette from "./CommandPalette";
import ProfileGate from "../profile/ProfileGate";
import { IconChevronRight, IconClose } from "../../ui/icons";
import { cx } from "../../ui/primitives";

const NAV_MIN = 240;
const NAV_MAX = 480;
const NAV_DEFAULT = 300;
const NAV_COLLAPSED = 52;
const HEADER_HIDE_START = 120;
const HEADER_HIDE_TRAVEL = 24;
const HEADER_SHOW_TRAVEL = 12;

/* Console de três painéis no desktop: NavTree fixo à esquerda, conteúdo
   central (Outlet). O painel direito (figura) é gerido pelo próprio TopicView.
   No mobile, a árvore vira um drawer off-canvas. */
export default function AppShell() {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [headerHidden, setHeaderHidden] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const { pathname } = useLocation();

  const openPalette = useCallback(() => setPaletteOpen(true), []);
  const closePalette = useCallback(() => setPaletteOpen(false), []);

  const drawerCloseRef = useRef<HTMLButtonElement>(null);
  const mainRef = useRef<HTMLElement>(null);

  // O href aponta para o <main> só pela semântica de link: sob HashRouter o
  // hash É a rota, então deixar o browser segui-lo trocaria a página. Movemos
  // o foco à mão; focar já rola o alvo à vista.
  const skipToContent = useCallback((e: ReactMouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    mainRef.current?.focus();
  }, []);

  // Fecha o drawer a cada mudança de rota.
  useEffect(() => {
    setNavOpen(false);
    setHeaderHidden(false);
  }, [pathname]);

  // Recolhe o header ao descer e o devolve ao menor gesto de subida. A
  // distância acumulada evita oscilação em trackpads e durante scroll suave.
  useEffect(() => {
    let lastY = Math.max(window.scrollY, 0);
    let direction: -1 | 0 | 1 = 0;
    let travel = 0;
    const forceVisible = paletteOpen || navOpen || profileOpen;

    if (forceVisible) setHeaderHidden(false);

    const onScroll = () => {
      const y = Math.max(window.scrollY, 0);
      const delta = y - lastY;
      const nextDirection: -1 | 0 | 1 = delta > 0 ? 1 : delta < 0 ? -1 : 0;

      setHeaderScrolled(y > 16);

      if (forceVisible || y <= 72) {
        setHeaderHidden(false);
        direction = nextDirection;
        travel = 0;
        lastY = y;
        return;
      }

      if (nextDirection !== 0) {
        if (nextDirection !== direction) {
          direction = nextDirection;
          travel = 0;
        }
        travel += Math.abs(delta);
      }

      if (direction === 1 && y > HEADER_HIDE_START && travel >= HEADER_HIDE_TRAVEL) {
        setHeaderHidden(true);
        travel = 0;
      } else if (direction === -1 && travel >= HEADER_SHOW_TRAVEL) {
        setHeaderHidden(false);
        travel = 0;
      }

      lastY = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [navOpen, paletteOpen, profileOpen]);

  // Drawer mobile: move o foco para dentro ao abrir, Esc fecha, restaura foco
  // no botão de menu ao fechar.
  useEffect(() => {
    if (!navOpen) return;
    const prev = document.activeElement as HTMLElement | null;
    drawerCloseRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setNavOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      prev?.focus?.();
    };
  }, [navOpen]);

  // Atalhos globais: ⌘K / Ctrl+K e "/" abrem a busca.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const k = e.key.toLowerCase();
      if ((e.metaKey || e.ctrlKey) && k === "k") {
        e.preventDefault();
        setPaletteOpen((v) => !v);
        return;
      }
      if (e.key === "/" && !e.metaKey && !e.ctrlKey && !e.altKey) {
        const el = document.activeElement;
        const typing =
          el instanceof HTMLInputElement ||
          el instanceof HTMLTextAreaElement ||
          (el instanceof HTMLElement && el.isContentEditable);
        if (!typing) {
          e.preventDefault();
          setPaletteOpen(true);
        }
      }
    };
    const onOpen = () => setPaletteOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("rt:open-search", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("rt:open-search", onOpen);
    };
  }, []);

  // Barra lateral redimensionável (desktop), largura persistida.
  const asideRef = useRef<HTMLElement>(null);
  const [navWidth, setNavWidth] = useState<number>(() => {
    try {
      const v = parseInt(localStorage.getItem("revisortopedia:navwidth") ?? "", 10);
      return v >= NAV_MIN && v <= NAV_MAX ? v : NAV_DEFAULT;
    } catch {
      return NAV_DEFAULT;
    }
  });
  const [resizing, setResizing] = useState(false);
  const [navCollapsed, setNavCollapsed] = useState(() => {
    try {
      return localStorage.getItem("revisortopedia:navcollapsed") === "true";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("revisortopedia:navwidth", String(navWidth));
    } catch {
      /* ignore */
    }
  }, [navWidth]);

  useEffect(() => {
    try {
      localStorage.setItem("revisortopedia:navcollapsed", String(navCollapsed));
    } catch {
      /* ignore */
    }
  }, [navCollapsed]);

  const clampW = (w: number) => Math.min(NAV_MAX, Math.max(NAV_MIN, Math.round(w)));

  const startResize = useCallback((e: ReactPointerEvent<HTMLDivElement>) => {
    e.preventDefault();
    const left = asideRef.current?.getBoundingClientRect().left ?? 0;
    setResizing(true);
    const onMove = (ev: PointerEvent) => setNavWidth(clampW(ev.clientX - left));
    const onUp = () => {
      setResizing(false);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
  }, []);

  return (
    <div
      className="app-shell min-h-dvh bg-bg text-ink"
      data-header-hidden={headerHidden ? "true" : "false"}
    >
      {/* Primeiro focável do documento — sem ele o teclado atravessa os 98
          tópicos da NavTree antes de chegar ao conteúdo, em toda rota. */}
      <a href="#conteudo" onClick={skipToContent} className="skip-link">
        Pular para o conteúdo
      </a>

      <TopBar
        onOpenSearch={openPalette}
        onOpenMenu={() => setNavOpen(true)}
        onOpenProfile={() => setProfileOpen(true)}
        onRequestVisible={() => setHeaderHidden(false)}
        hidden={headerHidden}
        scrolled={headerScrolled}
      />
      <div aria-hidden="true" className="h-[var(--app-header-space)]" />

      {/* Overlay durante o arraste — mantém o cursor e bloqueia seleção */}
      {resizing && <div className="fixed inset-0 z-[60] cursor-col-resize select-none" />}

      <div className="mx-auto flex w-full max-w-[1600px]">
        {/* Painel esquerdo — desktop, redimensionável */}
        <aside
          ref={asideRef}
          style={{ width: navCollapsed ? NAV_COLLAPSED : navWidth }}
          className="app-sticky-panel sticky hidden shrink-0 border-r border-line lg:block"
        >
          {navCollapsed ? (
            <div className="flex h-full justify-center pt-4">
              <button
                type="button"
                onClick={() => setNavCollapsed(false)}
                aria-label="Expandir barra de topografias"
                title="Expandir barra de topografias"
                className="grid h-9 w-9 place-items-center rounded-md border border-line text-muted transition-colors hover:bg-surface-2 hover:text-ink"
              >
                <IconChevronRight className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <NavTree onCollapse={() => setNavCollapsed(true)} />
          )}
          {/* Alça de redimensionamento */}
          {!navCollapsed && (
            <div
              role="separator"
              aria-orientation="vertical"
              aria-label="Redimensionar barra lateral"
              aria-valuenow={navWidth}
              aria-valuemin={NAV_MIN}
              aria-valuemax={NAV_MAX}
              tabIndex={0}
              onPointerDown={startResize}
              onDoubleClick={() => setNavWidth(NAV_DEFAULT)}
              onKeyDown={(e) => {
                if (e.key === "ArrowLeft") {
                  e.preventDefault();
                  setNavWidth((w) => clampW(w - 16));
                } else if (e.key === "ArrowRight") {
                  e.preventDefault();
                  setNavWidth((w) => clampW(w + 16));
                } else if (e.key === "Home") {
                  e.preventDefault();
                  setNavWidth(NAV_DEFAULT);
                }
              }}
              className="group absolute -right-1 top-0 z-10 h-full w-3 cursor-col-resize"
              title="Arraste para redimensionar · duplo-clique para redefinir"
            >
              <span
                className={cx(
                  "absolute right-1 top-0 h-full transition-all",
                  resizing
                    ? "w-0.5 bg-teal"
                    : "w-px bg-transparent group-hover:w-0.5 group-hover:bg-teal",
                )}
              />
            </div>
          )}
        </aside>

        {/* Conteúdo central */}
        <main id="conteudo" ref={mainRef} tabIndex={-1} className="min-w-0 flex-1">
          <Outlet />
        </main>
      </div>

      {/* Drawer mobile */}
      {navOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Navegação">
          <button
            type="button"
            aria-label="Fechar navegação"
            onClick={() => setNavOpen(false)}
            className="absolute inset-0 bg-ink/40 backdrop-blur-[2px]"
          />
          <div className="absolute inset-y-0 left-0 flex w-[86%] max-w-[320px] flex-col bg-surface shadow-panel motion-safe:animate-[step-in_0.25s_ease]">
            <div className="flex h-14 shrink-0 items-center justify-between border-b border-line px-4">
              <span className="font-display text-[1.05rem] text-ink">Navegação</span>
              <button
                ref={drawerCloseRef}
                type="button"
                onClick={() => setNavOpen(false)}
                aria-label="Fechar"
                className="grid h-9 w-9 place-items-center rounded-lg border border-line text-ink-soft hover:bg-surface-2"
              >
                <IconClose className="h-5 w-5" />
              </button>
            </div>
            <div className="min-h-0 flex-1">
              <NavTree />
            </div>
          </div>
        </div>
      )}

      <CommandPalette open={paletteOpen} onClose={closePalette} />

      {profileOpen && <ProfileGate overlay onClose={() => setProfileOpen(false)} />}
    </div>
  );
}
