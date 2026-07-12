import { create } from "zustand";

export type Theme = "light" | "dark";
const KEY = "revisortopedia:theme";

function preferred(): Theme {
  try {
    const stored = localStorage.getItem(KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    /* ignore */
  }
  if (typeof window !== "undefined" && window.matchMedia) {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return "light";
}

/** Runs before first paint (from main.tsx) to avoid a theme flash. */
export function applyStoredTheme(): void {
  document.documentElement.setAttribute("data-theme", preferred());
}

function commit(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
  try {
    localStorage.setItem(KEY, theme);
  } catch {
    /* ignore */
  }
}

interface ThemeStore {
  theme: Theme;
  toggle: () => void;
  set: (theme: Theme) => void;
}

export const useTheme = create<ThemeStore>((set) => ({
  theme:
    (typeof document !== "undefined" &&
      (document.documentElement.getAttribute("data-theme") as Theme)) ||
    "light",
  toggle: () =>
    set((state) => {
      const next: Theme = state.theme === "dark" ? "light" : "dark";
      commit(next);
      return { theme: next };
    }),
  set: (theme) => {
    commit(theme);
    set({ theme });
  },
}));
