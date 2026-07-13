import { Link, useLocation, useParams } from "react-router-dom";
import { allRegions, locate } from "../../content/registry";
import { IconChevronRight } from "../../ui/icons";
import { cx } from "../../ui/primitives";

interface Crumb {
  label: string;
  to?: string;
}

/* Deriva a trilha da rota atual: Início › Região › Tópico. */
function useCrumbs(): Crumb[] {
  const { pathname } = useLocation();
  const params = useParams();
  const crumbs: Crumb[] = [{ label: "Início", to: "/" }];

  if (pathname.startsWith("/regiao/")) {
    const region = allRegions.find((r) => r.id === params.regionId);
    crumbs.push({ label: region ? region.title : "Região" });
    return crumbs;
  }

  if (pathname.startsWith("/topico/")) {
    const slug = params.slug ?? "";
    const flat = locate(slug);
    if (flat) {
      crumbs.push({ label: flat.regionTitle, to: `/regiao/${flat.regionId}` });
      crumbs.push({ label: flat.title });
    } else {
      crumbs.push({ label: "Tópico" });
    }
  }

  return crumbs;
}

export default function Breadcrumb({ className }: { className?: string }) {
  const crumbs = useCrumbs();
  if (crumbs.length <= 1) return null;

  return (
    <nav aria-label="Trilha de navegação" className={cx("min-w-0", className)}>
      <ol className="flex min-w-0 items-center gap-1.5 text-[0.82rem]">
        {crumbs.map((c, i) => {
          const last = i === crumbs.length - 1;
          return (
            <li key={i} className="flex min-w-0 items-center gap-1.5">
              {i > 0 && (
                <IconChevronRight
                  className="h-3.5 w-3.5 shrink-0 text-line-strong"
                  aria-hidden="true"
                />
              )}
              {c.to && !last ? (
                <Link
                  to={c.to}
                  className="shrink-0 text-muted transition-colors hover:text-teal"
                >
                  {c.label}
                </Link>
              ) : (
                <span
                  aria-current={last ? "page" : undefined}
                  className={cx(
                    "truncate",
                    last ? "text-ink-soft" : "text-muted",
                  )}
                >
                  {c.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
