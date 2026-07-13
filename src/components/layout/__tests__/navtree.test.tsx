import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import NavTree from "../NavTree";

function renderTree(path = "/", onCollapse?: () => void) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/" element={<NavTree onCollapse={onCollapse} />} />
        <Route path="/topico/:slug" element={<NavTree onCollapse={onCollapse} />} />
        <Route path="*" element={<NavTree onCollapse={onCollapse} />} />
      </Routes>
    </MemoryRouter>,
  );
}

describe("NavTree", () => {
  it("starts with every topography closed on the home route", () => {
    const { container } = renderTree();
    expect(screen.getByText("Membro superior")).toBeInTheDocument();
    expect(container.querySelectorAll('[aria-expanded="true"]')).toHaveLength(0);
  });

  it("opens the active topography on a topic route", () => {
    renderTree("/topico/fratura-clavicula");
    expect(screen.getByText("Membro superior").closest("button")).toHaveAttribute(
      "aria-expanded",
      "true",
    );
  });

  it("exposes the compact-sidebar control when requested by the shell", () => {
    const onCollapse = vi.fn();
    renderTree("/", onCollapse);
    fireEvent.click(screen.getByRole("button", { name: "Recolher barra de topografias" }));
    expect(onCollapse).toHaveBeenCalledOnce();
  });
});
