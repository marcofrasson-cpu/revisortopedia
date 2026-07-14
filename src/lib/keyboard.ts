/* Atalhos de tecla única (A–E no quiz, 1–4 nos flashcards) escutam a janela
   inteira, então disparam mesmo quando o leitor está digitando em outro lugar —
   a busca (⌘K) abre sobre a sessão de estudo e cada letra digitada marcaria uma
   alternativa. Antes de tratar a tecla, pergunte se o foco está num campo. */

export function isTypingTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false;
  const tag = target.tagName;
  if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return true;
  /* Ler o atributo, e não a propriedade: isContentEditable depende de layout e
     fica sempre false fora do navegador (jsdom não a implementa). */
  const editable = target.closest("[contenteditable]")?.getAttribute("contenteditable");
  return editable === "" || editable === "true" || editable === "plaintext-only";
}
