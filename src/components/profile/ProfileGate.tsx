import { useEffect, useRef, useState } from "react";
import { MAX_PROFILES, useProfiles } from "../../store/useProfiles";
import type { Profile } from "../../store/useProfiles";
import { cx } from "../../ui/primitives";
import { IconClose } from "../../ui/icons";

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])';

function initials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function Avatar({ profile, size = 64 }: { profile: Profile; size?: number }) {
  return (
    <span
      aria-hidden
      style={{
        width: size,
        height: size,
        background: `hsl(${profile.hue} 42% 42%)`,
        boxShadow: `0 8px 24px -10px hsl(${profile.hue} 42% 42% / 0.7)`,
      }}
      className="grid shrink-0 place-items-center rounded-2xl font-display text-[1.4rem] font-medium text-white"
    >
      {initials(profile.name)}
    </span>
  );
}

/* Tela de perfis locais — escolher quem está estudando, criar (até 5) e travar
   com PIN local. Usada como tela cheia no 1º acesso e como overlay ao trocar. */
export default function ProfileGate({
  overlay = false,
  onClose,
}: {
  overlay?: boolean;
  onClose?: () => void;
}) {
  const profiles = useProfiles((s) => s.profiles);
  const activeId = useProfiles((s) => s.activeId);
  const create = useProfiles((s) => s.create);
  const activate = useProfiles((s) => s.activate);
  const remove = useProfiles((s) => s.remove);
  const setPin = useProfiles((s) => s.setPin);

  const [view, setView] = useState<"pick" | "add" | "manage">(
    profiles.length === 0 ? "add" : "pick",
  );
  const [pinFor, setPinFor] = useState<Profile | null>(null);
  const [pinInput, setPinInput] = useState("");
  const [pinError, setPinError] = useState(false);

  // form de novo perfil
  const [name, setName] = useState("");
  const [newPin, setNewPin] = useState("");

  const dialogRef = useRef<HTMLDivElement>(null);
  // Lido pelo handler de teclado sem entrar nas dependências do efeito: reexecutá-lo
  // devolveria o foco ao gatilho no meio da interação.
  const closeState = useRef({ activeId, onClose });
  closeState.current = { activeId, onClose };

  useEffect(() => {
    if (!overlay) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    // Respeita o autoFocus dos campos; só move o foco quando ele ainda está fora do diálogo.
    if (!dialogRef.current?.contains(document.activeElement)) {
      dialogRef.current?.querySelector<HTMLElement>(FOCUSABLE)?.focus();
    }

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        // Sem perfil ativo não há para onde voltar — o gate é obrigatório.
        if (!closeState.current.activeId) return;
        event.preventDefault();
        closeState.current.onClose?.();
      } else if (event.key === "Tab") {
        const focusable = Array.from(
          dialogRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE) ?? [],
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (focusable.length === 0) {
          event.preventDefault();
        } else if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus?.();
    };
  }, [overlay]);

  const done = () => {
    if (overlay) onClose?.();
  };

  const pickProfile = (p: Profile) => {
    if (view === "manage") return;
    if (p.pin) {
      setPinFor(p);
      setPinInput("");
      setPinError(false);
      return;
    }
    activate(p.id);
    done();
  };

  const submitPin = () => {
    if (!pinFor) return;
    if (activate(pinFor.id, pinInput)) {
      setPinFor(null);
      done();
    } else {
      setPinError(true);
    }
  };

  // create() só grava o PIN se casar /^\d{4}$/ — barramos 1 a 3 dígitos aqui para
  // não criar o perfil sem a trava que a pessoa achou que tinha configurado.
  const newPinIncomplete = newPin.length > 0 && newPin.length < 4;

  const submitNew = () => {
    if (newPinIncomplete) return;
    const id = create(name, newPin || undefined);
    if (id) {
      setName("");
      setNewPin("");
      done();
    }
  };

  const body = (
    <div className="w-full max-w-lg">
      {/* Cabeçalho */}
      <div className="mb-8 text-center">
        <div className="inline-grid h-11 w-11 place-items-center rounded-xl bg-teal-tint text-teal-deep">
          <span className="font-display text-[1.2rem]">R</span>
        </div>
        <h1 id="profile-gate-title" className="mt-4 font-display text-[1.9rem] leading-tight text-ink">
          {view === "add" && profiles.length === 0
            ? "Crie seu perfil"
            : pinFor
              ? `Olá, ${pinFor.name}`
              : "Quem está estudando?"}
        </h1>
        <p className="mt-2 text-[0.9rem] text-muted">
          Perfis locais neste aparelho — favoritos, histórico e progresso separados.
        </p>
      </div>

      {/* Prompt de PIN */}
      {pinFor ? (
        <div className="panel mx-auto max-w-xs p-6 text-center">
          <div className="mb-4 flex justify-center">
            <Avatar profile={pinFor} />
          </div>
          <label className="eyebrow" htmlFor="pin">
            PIN de 4 dígitos
          </label>
          <input
            id="pin"
            autoFocus
            inputMode="numeric"
            maxLength={4}
            value={pinInput}
            onChange={(e) => {
              setPinInput(e.target.value.replace(/\D/g, "").slice(0, 4));
              setPinError(false);
            }}
            onKeyDown={(e) => e.key === "Enter" && submitPin()}
            aria-invalid={pinError || undefined}
            aria-describedby={pinError ? "pin-erro" : undefined}
            className={cx(
              "code mt-2 w-full rounded-lg border bg-surface-2 px-4 py-3 text-center text-[1.4rem] tracking-[0.4em] text-ink",
              pinError ? "border-cortical" : "border-line focus:border-teal",
            )}
            placeholder="••••"
          />
          {pinError && (
            <p id="pin-erro" role="alert" className="mt-2 text-[0.8rem] leading-relaxed text-cortical">
              PIN incorreto. Se esqueceu, volte e use “Gerenciar perfis” para redefinir o PIN
              deste perfil.
            </p>
          )}
          <div className="mt-4 flex gap-2">
            <button
              type="button"
              onClick={() => setPinFor(null)}
              className="flex-1 rounded-lg border border-line py-2.5 text-[0.88rem] text-ink-soft hover:bg-surface-2"
            >
              Voltar
            </button>
            <button
              type="button"
              onClick={submitPin}
              disabled={pinInput.length !== 4}
              className="flex-1 rounded-lg bg-teal py-2.5 text-[0.88rem] font-medium text-surface hover:bg-teal-deep disabled:opacity-40"
            >
              Entrar
            </button>
          </div>
        </div>
      ) : view === "add" ? (
        <div className="panel mx-auto max-w-sm p-6">
          <label className="eyebrow" htmlFor="pname">
            Nome do perfil
          </label>
          <input
            id="pname"
            autoFocus
            value={name}
            maxLength={24}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && name.trim() && submitNew()}
            placeholder="Ex.: Dr. Marco"
            className="mt-2 w-full rounded-lg border border-line bg-surface-2 px-4 py-3 text-[0.95rem] text-ink focus:border-teal"
          />
          <label className="eyebrow mt-4 block" htmlFor="npin">
            PIN local (opcional)
          </label>
          <input
            id="npin"
            inputMode="numeric"
            maxLength={4}
            value={newPin}
            onChange={(e) => setNewPin(e.target.value.replace(/\D/g, "").slice(0, 4))}
            onKeyDown={(e) => e.key === "Enter" && name.trim() && submitNew()}
            placeholder="4 dígitos"
            aria-invalid={newPinIncomplete || undefined}
            aria-describedby="npin-ajuda"
            className={cx(
              "code mt-2 w-full rounded-lg border bg-surface-2 px-4 py-3 tracking-[0.3em] text-ink",
              newPinIncomplete ? "border-cortical" : "border-line focus:border-teal",
            )}
          />
          <p
            id="npin-ajuda"
            role={newPinIncomplete ? "alert" : undefined}
            className={cx(
              "mt-2 text-[0.74rem] leading-relaxed",
              newPinIncomplete ? "text-cortical" : "text-muted",
            )}
          >
            {newPinIncomplete
              ? "O PIN precisa ter 4 dígitos. Complete-o ou apague o campo para criar o perfil sem PIN."
              : "O PIN é uma trava local, não uma senha segura."}
          </p>
          <div className="mt-5 flex gap-2">
            {profiles.length > 0 && (
              <button
                type="button"
                onClick={() => setView("pick")}
                className="flex-1 rounded-lg border border-line py-2.5 text-[0.88rem] text-ink-soft hover:bg-surface-2"
              >
                Voltar
              </button>
            )}
            <button
              type="button"
              onClick={submitNew}
              disabled={!name.trim() || newPinIncomplete}
              className="flex-1 rounded-lg bg-teal py-2.5 text-[0.88rem] font-medium text-surface hover:bg-teal-deep disabled:opacity-40"
            >
              Criar e entrar
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {profiles.map((p) => (
              <div key={p.id} className="relative">
                <button
                  type="button"
                  onClick={() => pickProfile(p)}
                  className={cx(
                    "panel flex w-full flex-col items-center gap-3 px-3 py-5 transition-colors hover:border-line-strong",
                    p.id === activeId && "border-teal/50",
                  )}
                >
                  <Avatar profile={p} />
                  <span className="max-w-full truncate text-[0.9rem] font-medium text-ink">
                    {p.name}
                  </span>
                  {p.pin && <span className="eyebrow text-muted">🔒 PIN</span>}
                </button>
                {view === "manage" && (
                  <div className="mt-2 flex justify-center gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        const v = prompt(`Novo PIN de 4 dígitos para ${p.name} (vazio remove):`, p.pin ?? "");
                        if (v !== null) setPin(p.id, v.replace(/\D/g, "").slice(0, 4) || undefined);
                      }}
                      aria-label={`${p.pin ? "Redefinir" : "Definir"} PIN de ${p.name}`}
                      className="rounded-md border border-line px-2 py-1 text-[0.72rem] text-ink-soft hover:bg-surface-2"
                    >
                      {p.pin ? "Redefinir PIN" : "Definir PIN"}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        if (confirm(`Remover o perfil "${p.name}" e todos os seus dados?`)) remove(p.id);
                      }}
                      aria-label={`Remover o perfil ${p.name}`}
                      className="rounded-md border border-cortical/40 px-2 py-1 text-[0.72rem] text-cortical hover:bg-cortical-tint/40"
                    >
                      Remover
                    </button>
                  </div>
                )}
              </div>
            ))}

            {view !== "manage" && profiles.length < MAX_PROFILES && (
              <button
                type="button"
                onClick={() => setView("add")}
                className="flex flex-col items-center justify-center gap-3 rounded-[var(--radius-panel)] border border-dashed border-line-strong px-3 py-5 text-muted transition-colors hover:border-teal hover:text-teal"
              >
                <span className="grid h-16 w-16 place-items-center rounded-2xl border border-dashed border-line-strong text-[1.6rem]">
                  +
                </span>
                <span className="text-[0.88rem]">Adicionar</span>
              </button>
            )}
          </div>

          {profiles.length > 0 && (
            <div className="mt-6 text-center">
              <button
                type="button"
                onClick={() => setView(view === "manage" ? "pick" : "manage")}
                className="text-[0.82rem] text-muted underline-offset-2 hover:text-ink hover:underline"
              >
                {view === "manage" ? "Concluir" : "Gerenciar perfis"}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );

  if (overlay) {
    return (
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="profile-gate-title"
        className="fixed inset-0 z-[70] grid place-items-center overflow-y-auto bg-bg/92 p-6 backdrop-blur-sm"
      >
        {activeId && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar troca de perfil"
            className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-lg border border-line text-ink-soft hover:bg-surface-2"
          >
            <IconClose className="h-5 w-5" />
          </button>
        )}
        {body}
      </div>
    );
  }

  return (
    <div className="grid min-h-dvh place-items-center bg-bg px-6 py-12">{body}</div>
  );
}
