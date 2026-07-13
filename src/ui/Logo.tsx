/* Marca Revisortopedia — emblema ortopédico (pinça/mortise + cúpula do tálus +
   traço cortical) num badge arredondado, unificando favicon, TopBar e hero. */

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      role="img"
      aria-label="Revisortopedia"
      fill="none"
    >
      <rect
        x="1"
        y="1"
        width="46"
        height="46"
        rx="13"
        fill="var(--surface-2)"
        stroke="var(--line-strong)"
      />
      {/* pinça / mortise cradle */}
      <path
        d="M15 12 V26.5 a9 9 0 0 0 18 0 V12"
        stroke="var(--teal)"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* cúpula do tálus */}
      <circle cx="24" cy="26.5" r="6" stroke="var(--ink)" strokeWidth="2" />
      {/* traço cortical (fratura) */}
      <path
        className="fx-line"
        d="M28.6 22.6 L35 17.4"
        stroke="var(--cortical)"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      {/* medida (âmbar) */}
      <path
        d="M20 33.5 H28"
        stroke="var(--amber)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Logo({
  tagline = false,
  markClassName = "h-11 w-11",
  wordClassName = "text-[1.4rem]",
}: {
  tagline?: boolean;
  markClassName?: string;
  wordClassName?: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <LogoMark className={markClassName} />
      <div className="leading-none">
        <div
          className={`font-display font-medium tracking-tight text-ink ${wordClassName}`}
        >
          Revisortopedia
        </div>
        {tagline && (
          <div className="eyebrow mt-1.5">Trauma ortopédico · baseado em evidências</div>
        )}
      </div>
    </div>
  );
}
