import { useCallback, useEffect, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import { Outlet, useLocation } from "react-router-dom";
import TopBar from "./TopBar";
import NavTree from "./NavTree";
import CommandPalette from "./CommandPalette";
import ProfileGate from "../profile/ProfileGate";
import { IconClose } from "../../ui/icons";
import { cx } from "../../ui/primitives";

const NAV_MIN = 240;
const NAV_MAX = 480;
const NAV_DEFAULT = 300;

/* Console de três painéis no desktop: NavTree fixo à esquerda, conteúdo
   central (Outlet). O painel direito (figura) é gerido pelo próprio TopicView.
   No mobile, a árvore vira um drawer off-canvas. */
export default function AppShell() {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { pathname } = useLocation();

  const openPalette = useCallback(() => setPaletteOpen(true), []);
  const closePalette = useCallback(() => setPaletteOpen(false), []);

  const drawerCloseRef = useRef<HTMLButtonElement>(null);

  // Fecha o drawer a cada mudança de rota.
  useEffect(() => {
    setNavOpen(false);
  }, [pathname]);

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

  useEffect(() => {
    try {
      localStorage.setItem("revisortopedia:navwidth", String(navWidth));
    } catch {
      /* ignore */
    }
  }, [navWidth]);

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
    <div className="min-h-dvh bg-bg text-ink">
      <TopBar
        onOpenSearch={openPalette}
        onOpenMenu={() => setNavOpen(true)}
        onOpenProfile={() => setProfileOpen(true)}
      />

      {/* Overlay durante o arraste — mantém o cursor e bloqueia seleção */}
      {resizing && <div className="fixed inset-0 z-[60] cursor-col-resize select-none" />}

      <div className="mx-auto flex w-full max-w-[1600px]">
        {/* Painel esquerdo — desktop, redimensionável */}
        <aside
          ref={asideRef}
          style={{ width: navWidth }}
          className="sticky top-14 hidden h-[calc(100dvh-3.5rem)] shrink-0 border-r border-line lg:block"
        >
          <NavTree />
          {/* Alça de redimensionamento */}
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
                resizing ? "w-0.5 bg-teal" : "w-px bg-transparent group-hover:w-0.5 group-hover:bg-teal",
              )}
            />
          </div>
        </aside>

        {/* Conteúdo central */}
        <main className="min-w-0 flex-1">
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
