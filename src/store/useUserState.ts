import { create } from "zustand";
import { emptyUserState, loadUserState, saveUserState } from "../lib/idb";

interface UserStore {
  profileId: string | null;
  bookmarks: string[];
  notes: Record<string, string>;
  recent: string[];
  lastRead?: { slug: string; section: string };
  hydrated: boolean;
  hydrate: (profileId: string) => Promise<void>;
  toggleBookmark: (slug: string) => void;
  isBookmarked: (slug: string) => boolean;
  setNote: (slug: string, text: string) => void;
  markRead: (slug: string, section: string) => void;
  visit: (slug: string) => void;
}

let persistTimer: ReturnType<typeof setTimeout> | undefined;

export const useUserState = create<UserStore>((set, get) => {
  const persist = () => {
    const pid = get().profileId;
    if (!pid || !get().hydrated) return; // não grava antes de carregar o perfil
    /* A carga é fotografada junto com o perfil dono dela. Lê-la dentro do timer
       gravaria o estado de quem estiver ativo daqui a 250 ms na chave de quem
       estava ativo agora — e como hydrate() zera o estado, trocar de perfil na
       janela do debounce apagava os favoritos do perfil anterior. */
    const { bookmarks, notes, recent, lastRead } = get();
    clearTimeout(persistTimer);
    persistTimer = setTimeout(() => {
      void saveUserState(pid, { bookmarks, notes, recent, lastRead });
    }, 250);
  };

  return {
    profileId: null,
    ...emptyUserState,
    hydrated: false,

    hydrate: async (profileId) => {
      set({ hydrated: false, profileId, ...emptyUserState });
      const loaded = await loadUserState(profileId);
      // ignora se o perfil ativo mudou durante o await
      if (get().profileId !== profileId) return;
      set({ ...loaded, profileId, hydrated: true });
    },

    toggleBookmark: (slug) => {
      set((state) => {
        const has = state.bookmarks.includes(slug);
        return {
          bookmarks: has
            ? state.bookmarks.filter((s) => s !== slug)
            : [...state.bookmarks, slug],
        };
      });
      persist();
    },

    isBookmarked: (slug) => get().bookmarks.includes(slug),

    setNote: (slug, text) => {
      set((state) => ({ notes: { ...state.notes, [slug]: text } }));
      persist();
    },

    markRead: (slug, section) => {
      set({ lastRead: { slug, section } });
      persist();
    },

    visit: (slug) => {
      set((state) => ({
        recent: [slug, ...state.recent.filter((s) => s !== slug)].slice(0, 8),
      }));
      persist();
    },
  };
});
