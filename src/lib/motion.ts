/* `scroll-behavior: auto !important` no CSS não alcança quem passa `behavior`
   explícito para scrollIntoView — a opção do JS vence a propriedade. Quem anima
   um scroll na mão precisa perguntar aqui antes. */

export function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/** `behavior` para scrollIntoView que respeita a preferência do sistema. */
export function scrollBehavior(): ScrollBehavior {
  return prefersReducedMotion() ? "auto" : "smooth";
}
