import { get, set, del } from "idb-keyval";

/* Persistência isolada POR PERFIL. Cada perfil guarda seu estado sob uma chave
   com o id do perfil. Tudo é guardado — em modo privado / sem IndexedDB
   (ex.: testes) degrada para memória em vez de lançar. */

const USER_PREFIX = "revisortopedia:user:v1:";
const QUIZ_PREFIX = "revisortopedia:quiz:v1:";

export function userKey(profileId: string): string {
  return USER_PREFIX + profileId;
}
export function quizKey(profileId: string): string {
  return QUIZ_PREFIX + profileId;
}

export interface UserState {
  bookmarks: string[];
  notes: Record<string, string>;
  recent: string[];
  lastRead?: { slug: string; section: string };
}

export const emptyUserState: UserState = { bookmarks: [], notes: {}, recent: [] };

export async function loadUserState(profileId: string): Promise<UserState> {
  try {
    const stored = await get<UserState>(userKey(profileId));
    return { ...emptyUserState, ...(stored ?? {}) };
  } catch {
    return emptyUserState;
  }
}

export async function saveUserState(profileId: string, state: UserState): Promise<void> {
  try {
    await set(userKey(profileId), state);
  } catch {
    /* no-op */
  }
}

/** Apaga todos os dados isolados de um perfil (ao remover o perfil). */
export async function clearProfileData(profileId: string): Promise<void> {
  try {
    await del(userKey(profileId));
    await del(quizKey(profileId));
  } catch {
    /* no-op */
  }
}
