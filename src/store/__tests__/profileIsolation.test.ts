import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

/* ============================================================================
   Cada perfil guarda os próprios favoritos e o próprio progresso. A gravação é
   adiada (debounce) para não escrever no IndexedDB a cada clique — e é nessa
   janela que perfis se atropelam: quem troca de perfil logo após marcar algo
   fazia o timer disparar já com o estado do perfil NOVO e gravá-lo na chave do
   ANTIGO. Como hydrate() zera o estado, o que ia para o disco era vazio.
   ========================================================================== */

const store = new Map<string, unknown>();

vi.mock("idb-keyval", () => ({
  get: vi.fn(async (key: string) => store.get(key)),
  set: vi.fn(async (key: string, value: unknown) => {
    store.set(key, value);
  }),
  del: vi.fn(async (key: string) => {
    store.delete(key);
  }),
}));

describe("profile isolation across the persist debounce", () => {
  beforeEach(() => {
    store.clear();
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.resetModules();
  });

  it("never writes one profile's state onto another profile's key", async () => {
    const { useUserState } = await import("../useUserState");
    const { userKey } = await import("../../lib/idb");

    await vi.runOnlyPendingTimersAsync();
    await useUserState.getState().hydrate("marco");
    useUserState.getState().toggleBookmark("fratura-sacro");

    // Troca de perfil dentro da janela de debounce, antes do timer disparar.
    await useUserState.getState().hydrate("ana");
    await vi.advanceTimersByTimeAsync(1000);

    const marco = store.get(userKey("marco")) as { bookmarks: string[] } | undefined;
    expect(marco?.bookmarks ?? [], "o favorito de marco não pode sumir").toContain("fratura-sacro");
  });

  it("keeps quiz results with the profile that answered them", async () => {
    const { useQuizStats } = await import("../useQuizStats");
    const { quizKey } = await import("../../lib/idb");

    await useQuizStats.getState().hydrate("marco");
    useQuizStats.getState().record("q-1", true);

    await useQuizStats.getState().hydrate("ana");
    await vi.advanceTimersByTimeAsync(1000);

    const marco = store.get(quizKey("marco")) as Record<string, unknown> | undefined;
    expect(Object.keys(marco ?? {}), "a resposta de marco não pode sumir").toContain("q-1");
  });
});
