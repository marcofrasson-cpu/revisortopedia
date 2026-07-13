import { useTheme } from "../../store/useTheme";
import { IconSun, IconMoon } from "../../ui/icons";

/* Alterna entre atlas (claro) e negatoscópio (escuro). O ícone reflete o
   estado-alvo — sol quando está escuro, lua quando está claro. */
export default function ThemeToggle() {
  const theme = useTheme((s) => s.theme);
  const toggle = useTheme((s) => s.toggle);
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Ativar tema claro" : "Ativar tema escuro"}
      title={isDark ? "Tema claro" : "Tema escuro"}
      className="app-header-control grid h-9 w-9 shrink-0 place-items-center"
    >
      <span className="relative block h-5 w-5">
        <IconSun
          className={
            "absolute inset-0 transition-all duration-300 " +
            (isDark ? "scale-100 rotate-0 opacity-100" : "scale-50 -rotate-90 opacity-0")
          }
        />
        <IconMoon
          className={
            "absolute inset-0 transition-all duration-300 " +
            (isDark ? "scale-50 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100")
          }
        />
      </span>
    </button>
  );
}
