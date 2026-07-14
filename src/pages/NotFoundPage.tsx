import { Link } from "react-router-dom";
import { Eyebrow } from "../ui/primitives";
import { IconArrowRight, IconSearch } from "../ui/icons";

const openSearch = () => window.dispatchEvent(new Event("rt:open-search"));

export default function NotFoundPage() {
  return (
    <div className="mx-auto grid min-h-[70dvh] max-w-2xl place-items-center px-6 py-16 text-center">
      <div>
        <Eyebrow className="justify-center">Erro 404 · página não encontrada</Eyebrow>

        <div className="my-6 flex justify-center" aria-hidden="true">
          <svg viewBox="0 0 120 90" className="h-28 w-40 text-line-strong" fill="none">
            <rect x="1" y="1" width="118" height="88" rx="8" stroke="currentColor" strokeWidth="1.5" />
            <path d="M20 60 L44 34 L60 50 L78 30 L100 58" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <path
              d="M52 44 L68 60"
              className="fx-line text-cortical"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              style={{ ["--fx-len" as string]: "24" }}
            />
          </svg>
        </div>

        <h1 className="font-display text-[2rem] text-ink">Fora do campo cirúrgico</h1>
        <p className="mx-auto mt-3 max-w-md text-[0.95rem] leading-relaxed text-ink-soft">
          A página que você procurou não existe ou foi movida. Volte ao início ou
          busque diretamente pelo tópico desejado.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-lg bg-teal px-4 py-2.5 text-[0.9rem] font-medium text-surface transition-colors hover:bg-teal-deep"
          >
            Ir para o início
            <IconArrowRight className="h-4 w-4" />
          </Link>
          <button
            type="button"
            onClick={openSearch}
            className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2.5 text-[0.9rem] font-medium text-ink-soft transition-colors hover:bg-surface-2"
          >
            <IconSearch className="h-4 w-4" />
            Buscar tópico
          </button>
        </div>
      </div>
    </div>
  );
}
