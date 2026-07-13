import { create } from "zustand";

/* ============================================================================
   Perfis LOCAIS (até 5) para um aparelho compartilhado. Cada perfil tem seus
   próprios favoritos, notas, histórico e progresso do quiz (dados isolados por
   id do perfil no IndexedDB). O PIN é apenas uma trava local — NÃO é uma senha
   segura: fica em texto no localStorage e no bundle público. Serve só para
   separar quem está usando, não para proteger acesso.
   ========================================================================== */

export const MAX_PROFILES = 5;

export interface Profile {
  id: string;
  name: string;
  pin?: string; // 4 dígitos, trava local (não seguro)
  hue: number; // 0–360, cor do avatar
  createdAt: number;
}

const PKEY = "revisortopedia:profiles:v1";
const AKEY = "revisortopedia:activeProfile:v1";

function loadProfiles(): Profile[] {
  try {
    const raw = localStorage.getItem(PKEY);
    const parsed = raw ? (JSON.parse(raw) as Profile[]) : [];
    return Array.isArray(parsed) ? parsed.slice(0, MAX_PROFILES) : [];
  } catch {
    return [];
  }
}

function saveProfiles(profiles: Profile[]) {
  try {
    localStorage.setItem(PKEY, JSON.stringify(profiles));
  } catch {
    /* ignore */
  }
}

function saveActive(id: string | null) {
  try {
    if (id) localStorage.setItem(AKEY, id);
    else localStorage.removeItem(AKEY);
  } catch {
    /* ignore */
  }
}

function newId(): string {
  try {
    return crypto.randomUUID();
  } catch {
    return "p_" + Math.random().toString(36).slice(2) + Date.now().toString(36);
  }
}

interface ProfilesStore {
  profiles: Profile[];
  activeId: string | null;
  loaded: boolean;
  load: () => void;
  create: (name: string, pin?: string) => string | null;
  activate: (id: string, pin?: string) => boolean;
  rename: (id: string, name: string) => void;
  setPin: (id: string, pin?: string) => void;
  remove: (id: string) => void;
  signOut: () => void;
  active: () => Profile | undefined;
}

export const useProfiles = create<ProfilesStore>((set, get) => ({
  profiles: [],
  activeId: null,
  loaded: false,

  load: () => {
    const profiles = loadProfiles();
    let activeId: string | null = null;
    try {
      const a = localStorage.getItem(AKEY);
      activeId = a && profiles.some((p) => p.id === a) ? a : null;
    } catch {
      activeId = null;
    }
    set({ profiles, activeId, loaded: true });
  },

  create: (name, pin) => {
    const trimmed = name.trim();
    if (!trimmed) return null;
    const { profiles } = get();
    if (profiles.length >= MAX_PROFILES) return null;
    const profile: Profile = {
      id: newId(),
      name: trimmed.slice(0, 24),
      pin: pin && /^\d{4}$/.test(pin) ? pin : undefined,
      hue: Math.floor(Math.random() * 360),
      createdAt: Date.now(),
    };
    const next = [...profiles, profile];
    saveProfiles(next);
    saveActive(profile.id);
    set({ profiles: next, activeId: profile.id });
    return profile.id;
  },

  activate: (id, pin) => {
    const p = get().profiles.find((x) => x.id === id);
    if (!p) return false;
    if (p.pin && p.pin !== pin) return false;
    saveActive(id);
    set({ activeId: id });
    return true;
  },

  rename: (id, name) => {
    const next = get().profiles.map((p) =>
      p.id === id ? { ...p, name: name.trim().slice(0, 24) || p.name } : p,
    );
    saveProfiles(next);
    set({ profiles: next });
  },

  setPin: (id, pin) => {
    const clean = pin && /^\d{4}$/.test(pin) ? pin : undefined;
    const next = get().profiles.map((p) => (p.id === id ? { ...p, pin: clean } : p));
    saveProfiles(next);
    set({ profiles: next });
  },

  remove: (id) => {
    const next = get().profiles.filter((p) => p.id !== id);
    saveProfiles(next);
    const activeId = get().activeId === id ? null : get().activeId;
    saveActive(activeId);
    set({ profiles: next, activeId });
    // limpa os dados isolados do perfil removido
    try {
      void import("../lib/idb").then((m) => m.clearProfileData(id));
    } catch {
      /* ignore */
    }
  },

  signOut: () => {
    saveActive(null);
    set({ activeId: null });
  },

  active: () => get().profiles.find((p) => p.id === get().activeId),
}));
