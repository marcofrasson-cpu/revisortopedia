import { create } from "zustand";
import { get as idbGet, set as idbSet } from "idb-keyval";
import { flashcardKey } from "../lib/idb";
import {
  scheduleReview,
  type CardProgress,
  type ReviewRating,
} from "../lib/spacedRepetition";

type ProgressMap = Record<string, CardProgress>;

interface FlashcardStore {
  profileId: string | null;
  progress: ProgressMap;
  hydrated: boolean;
  hydrate: (profileId: string) => Promise<void>;
  review: (cardId: string, rating: ReviewRating, now?: number) => void;
  reset: () => void;
}

let persistTimer: ReturnType<typeof setTimeout> | undefined;

export const useFlashcardStats = create<FlashcardStore>((setState, getState) => {
  const persist = () => {
    const profileId = getState().profileId;
    if (!profileId || !getState().hydrated) return;
    const progress = getState().progress;
    clearTimeout(persistTimer);
    persistTimer = setTimeout(() => {
      void idbSet(flashcardKey(profileId), progress).catch(() => {});
    }, 200);
  };

  return {
    profileId: null,
    progress: {},
    hydrated: false,

    hydrate: async (profileId) => {
      setState({ profileId, progress: {}, hydrated: false });
      try {
        const stored = await idbGet<ProgressMap>(flashcardKey(profileId));
        if (getState().profileId !== profileId) return;
        setState({ profileId, progress: stored ?? {}, hydrated: true });
      } catch {
        if (getState().profileId === profileId) setState({ hydrated: true });
      }
    },

    review: (cardId, rating, now = Date.now()) => {
      setState((state) => ({
        progress: {
          ...state.progress,
          [cardId]: scheduleReview(state.progress[cardId], rating, now),
        },
      }));
      persist();
    },

    reset: () => {
      setState({ progress: {} });
      persist();
    },
  };
});
