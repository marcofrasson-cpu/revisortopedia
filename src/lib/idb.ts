import { get, set } from "idb-keyval";

/* Thin persistence layer for personal user state (bookmarks, notes, history).
   All access is guarded — in private mode or environments without IndexedDB
   (e.g. tests) it degrades to in-memory only rather than throwing. */

const KEY = "revisortopedia:user:v1";

export interface UserState {
  bookmarks: string[];
  notes: Record<string, string>;
  recent: string[];
  lastRead?: { slug: string; section: string };
}

export const emptyUserState: UserState = { bookmarks: [], notes: {}, recent: [] };

export async function loadUserState(): Promise<UserState> {
  try {
    const stored = await get<UserState>(KEY);
    return { ...emptyUserState, ...(stored ?? {}) };
  } catch {
    return emptyUserState;
  }
}

export async function saveUserState(state: UserState): Promise<void> {
  try {
    await set(KEY, state);
  } catch {
    /* no-op: persistence unavailable */
  }
}
