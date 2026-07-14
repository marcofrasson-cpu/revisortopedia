import { useMemo, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import type { RegionNode, TopicRef } from "../../types/topic";
import { allRegions, effectiveStatus, locate, stats } from "../../content/registry";
import { IconChevronDown, IconChevronLeft } from "../../ui/icons";
import { StatusDot, cx } from "../../ui/primitives";

/* Which region should be open initially — the one holding the active route. */
function useActiveRegionId(): string | undefined {
  const { pathname } = useLocation();
  const params = useParams();
  if (pathname.startsWith("/regiao/")) return params.regionId;
  if (pathname.startsWith("/topico/")) return locate(params.slug ?? "")?.regionId;
  return undefined;
}

function activeSlug(pathname: string, params: Readonly<Record<string, string | undefined>>) {
  return pathname.startsWith("/topico/") ? params.slug ?? "" : "";
}

function TopicLink({ ref, active }: { ref: TopicRef; active: boolean }) {
  const status = effectiveStatus(ref.slug, ref.status);
  const navigable = status !== "planned";

  const inner = (
    <>
      <StatusDot status={status} />
      <span className="min-w-0 flex-1 truncate">{ref.title}</span>
    </>
  );

  if (!navigable) {
    return (
      <span
        aria-disabled="true"
        title="Em preparo"
        className="flex items-center gap-2.5 rounded-md py-1.5 pl-3 pr-2 text-[0.84rem] text-muted/60"
      >
        {inner}
      </span>
    );
  }

  return (
    <Link
      to={`/topico/${ref.slug}`}
      aria-current={active ? "page" : undefined}
      className={cx(
        "flex items-center gap-2.5 rounded-md py-1.5 pl-3 pr-2 text-[0.84rem] transition-colors",
        active
          ? "bg-teal-tint text-teal-deep"
          : "text-ink-soft hover:bg-surface-2 hover:text-ink",
      )}
    >
      {inner}
    </Link>
  );
}

function RegionBranch({
  region,
  open,
  onToggle,
  active,
}: {
  region: RegionNode;
  open: boolean;
  onToggle: () => void;
  active: string;
}) {
  const panelId = `nav-region-${region.id}`;
  return (
    <li>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={panelId}
        className="group flex w-full items-center gap-2 rounded-md px-2 py-2 text-left transition-colors hover:bg-surface-2"
      >
        <IconChevronDown
          aria-hidden="true"
          className={cx(
            "h-4 w-4 shrink-0 text-muted transition-transform duration-200",
            open ? "rotate-0" : "-rotate-90",
          )}
        />
        <span className="min-w-0 flex-1 truncate text-[0.9rem] font-medium text-ink">
          {region.title}
        </span>
        <span className="code shrink-0 rounded bg-surface-2 px-1.5 py-0.5 text-[0.62rem] tracking-wider text-muted group-hover:bg-surface">
          {region.tag}
        </span>
      </button>

      {open && (
        <div id={panelId} className="mb-1 ml-3 border-l border-line pl-1.5">
          {region.groups.map((group) => (
            <div key={group.id} className="mb-1.5 mt-1">
              <div className="eyebrow px-3 py-1 text-[0.6rem]">{group.title}</div>
              <ul>
                {group.topics.map((t) => (
                  <li key={t.slug}>
                    <TopicLink ref={t} active={t.slug === active} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </li>
  );
}

export default function NavTree({ onCollapse }: { onCollapse?: () => void }) {
  const { pathname } = useLocation();
  const params = useParams();
  const activeRegion = useActiveRegionId();
  const active = activeSlug(pathname, params);

  const [expanded, setExpanded] = useState<Set<string>>(() => {
    const init = new Set<string>();
    if (activeRegion) init.add(activeRegion);
    return init;
  });

  // Keep the active region open as the route changes.
  const openSet = useMemo(() => {
    if (!activeRegion || expanded.has(activeRegion)) return expanded;
    const next = new Set(expanded);
    next.add(activeRegion);
    return next;
  }, [activeRegion, expanded]);

  // Toggle from the *effective* open set (openSet), not raw `expanded` — the
  // active region is auto-opened via openSet, so collapsing it must start from
  // there or the first click no-ops.
  const toggle = (id: string) =>
    setExpanded(() => {
      const next = new Set(openSet);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  return (
    <div className="flex h-full flex-col">
      {/* pt no desktop = padding de topo do conteúdo (48px), para o primeiro
          item da barra alinhar com a primeira linha do hero/tópico. */}
      <nav
        aria-label="Regiões e tópicos"
        className="flex-1 overflow-y-auto px-2.5 pb-4 pt-4 lg:pt-12"
      >
        <div className="flex items-center justify-between gap-2 px-2 pb-2">
          <div className="eyebrow">Framework ortopédico</div>
          {onCollapse && (
            <button
              type="button"
              onClick={onCollapse}
              aria-label="Recolher barra de topografias"
              title="Recolher barra de topografias"
              className="grid h-7 w-7 shrink-0 place-items-center rounded-md text-muted transition-colors hover:bg-surface-2 hover:text-ink"
            >
              <IconChevronLeft className="h-4 w-4" />
            </button>
          )}
        </div>
        <ul>
          {allRegions.map((region) => (
            <RegionBranch
              key={region.id}
              region={region}
              open={openSet.has(region.id)}
              onToggle={() => toggle(region.id)}
              active={active}
            />
          ))}
        </ul>
      </nav>

      <div className="shrink-0 border-t border-line px-4 py-3">
        <div className="flex items-center justify-between text-[0.72rem]">
          <span className="eyebrow">Cobertura</span>
          <span className="code text-muted">
            <span className="text-teal-deep">{stats.topicsComplete}</span>
            {" / "}
            {stats.topicsPlanned}
          </span>
        </div>
        <div className="mt-2 h-1 overflow-hidden rounded-full bg-surface-2">
          <div
            className="h-full rounded-full bg-teal"
            style={{
              width: `${stats.topicsPlanned ? (stats.topicsComplete / stats.topicsPlanned) * 100 : 0}%`,
            }}
          />
        </div>

        <div
          className="mt-3 flex items-center justify-between gap-2 rounded-md border px-2.5 py-2"
          style={{
            borderColor: "var(--pill-border)",
            backgroundImage: "linear-gradient(to bottom, var(--pill-bg1), var(--pill-bg2))",
          }}
        >
          <span
            className="text-[0.58rem] font-semibold uppercase tracking-[0.12em]"
            style={{ color: "var(--pill-label)" }}
          >
            Designed by
          </span>
          <span
            className="text-[0.72rem] font-semibold"
            style={{ color: "var(--pill-name)" }}
          >
            @Marco Frasson
          </span>
        </div>
      </div>
    </div>
  );
}
