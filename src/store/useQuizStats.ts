import { create } from "zustand";
import { get, set } from "idb-keyval";

/* Progresso do modo estudo, persistido em IndexedDB (guarda-chuva próprio,
   separado do estado do usuário). Degrada para memória se o IDB faltar. */

const KEY = "revisortopedia:quiz:v1";

export interface QResult {
  seen: number;
  correct: number;
  wrong: number;
  lastCorrect: boolean;
}
type ResultMap = Record<string, QResult>;

interface QuizStore {
  results: ResultMap;
  hydrated: boolean;
  hydrate: () => Promise<void>;
  record: (qid: string, correct: boolean) => void;
  reset: () => void;
  wrongIds: () => string[];
}

let persistTimer: ReturnType<typeof setTimeout> | undefined;

export const useQuizStats = create<QuizStore>((setState, getState) => {
  const persist = () => {
    clearTimeout(persistTimer);
    persistTimer = setTimeout(() => {
      void set(KEY, getState().results).catch(() => {});
    }, 200);
  };

  return {
    results: {},
    hydrated: false,

    hydrate: async () => {
      try {
        const stored = await get<ResultMap>(KEY);
        setState({ results: stored ?? {}, hydrated: true });
      } catch {
        setState({ hydrated: true });
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
