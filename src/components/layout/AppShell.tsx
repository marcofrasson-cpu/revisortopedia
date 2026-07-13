import { useCallback, useEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import TopBar from "./TopBar";
import NavTree from "./NavTree";
import CommandPalette from "./CommandPalette";
import { IconClose } from "../../ui/icons";

/* Console de três painéis no desktop: NavTree fixo à esquerda, conteúdo
   central (Outlet). O painel direito (figura) é gerido pelo próprio TopicView.
   No mobile, a árvore vira um drawer off-canvas. */
export default function AppShell() {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
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

  return (
    <div className="min-h-dvh bg-bg text-ink">
      <TopBar onOpenSearch={openPalette} onOpenMenu={() => setNavOpen(true)} />

      <div className="mx-auto flex w-full max-w-[1600px]">
        {/* Painel esquerdo — desktop */}
        <aside className="sticky top-14 hidden h-[calc(100dvh-3.5rem)] w-[300px] shrink-0 border-r border-line lg:block">
          <NavTree />
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
    </div>
  );
}
