import { create } from "zustand";
import { get as idbGet, set as idbSet } from "idb-keyval";
import { quizKey } from "../lib/idb";

/* Progresso do modo estudo, isolado POR PERFIL no IndexedDB. Degrada para
   memória se o IDB faltar. */

export interface QResult {
  seen: number;
  correct: number;
  wrong: number;
  lastCorrect: boolean;
}
type ResultMap = Record<string, QResult>;

interface QuizStore {
  profileId: string | null;
  results: ResultMap;
  hydrated: boolean;
  hydrate: (profileId: string) => Promise<void>;
  record: (qid: string, correct: boolean) => void;
  reset: () => void;
  wrongIds: () => string[];
}

let persistTimer: ReturnType<typeof setTimeout> | undefined;

export const useQuizStats = create<QuizStore>((setState, getState) => {
  const persist = () => {
    const pid = getState().profileId;
    if (!pid || !getState().hydrated) return;
    /* Fotografa a carga junto com o perfil dono dela — ler getState() dentro do
       timer gravava o estado do perfil ativo dali a 200 ms na chave do anterior. */
    const results = getState().results;
    clearTimeout(persistTimer);
    persistTimer = setTimeout(() => {
      void idbSet(quizKey(pid), results).catch(() => {});
    }, 200);
  };

  return {
    profileId: null,
    results: {},
    hydrated: false,

    hydrate: async (profileId) => {
      setState({ hydrated: false, profileId, results: {} });
      try {
        const stored = await idbGet<ResultMap>(quizKey(profileId));
        if (getState().profileId !== profileId) return;
        setState({ results: stored ?? {}, profileId, hydrated: true });
      } catch {
        if (getState().profileId === profileId) setState({ hydrated: true });
      }
    },

    record: (qid, correct) => {
      setState((s) => {
        const prev = s.results[qid] ?? { seen: 0, correct: 0, wrong: 0, lastCorrect: false };
        return {
          results: {
            ...s.results,
            [qid]: {
              seen: prev.seen + 1,
              correct: prev.correct + (correct ? 1 : 0),
              wrong: prev.wrong + (correct ? 0 : 1),
              lastCorrect: correct,
            },
          },
        };
      });
      persist();
    },

    reset: () => {
      setState({ results: {} });
      persist();
    },

    wrongIds: () =>
      Object.entries(getState().results)
        .filter(([, r]) => r.seen > 0 && !r.lastCorrect)
        .map(([id]) => id),
  };
});
