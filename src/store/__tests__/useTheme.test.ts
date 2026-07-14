import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

/* ============================================================================
   applyStoredTheme() roda em main.tsx antes do primeiro paint, mas os imports ES
   são içados acima dela: o módulo do store é avaliado ANTES da chamada. Um store
   que lesse data-theme do DOM na criação nasceria sempre "light", e o primeiro
   clique no botão só reescreveria o tema que já estava lá — sem efeito visível.
   ========================================================================== */

describe("useTheme", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute("data-theme");
    vi.resetModules();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it("starts on the stored theme even though the store loads before applyStoredTheme", async () => {
    localStorage.setItem("revisortopedia:theme", "dark");

    // Ordem real do boot: o módulo avalia primeiro, a função roda depois.
    const { useTheme, applyStoredTheme } = await import("../useTheme");
    applyStoredTheme();

    expect(useTheme.getState().theme).toBe("dark");
    expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
  });

  it("flips the theme on the first click", async () => {
    localStorage.setItem("revisortopedia:theme", "dark");
    const { useTheme, applyStoredTheme } = await import("../useTheme");
    applyStoredTheme();

    useTheme.getState().toggle();

    expect(useTheme.getState().theme).toBe("light");
    expect(document.documentElement.getAttribute("data-theme")).toBe("light");
  });
});
