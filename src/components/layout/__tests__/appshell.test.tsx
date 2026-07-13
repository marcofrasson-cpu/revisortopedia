import { beforeEach, describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import AppShell from "../AppShell";

function setScrollY(value: number) {
  Object.defineProperty(window, "scrollY", {
    configurable: true,
    value,
  });
  fireEvent.scroll(window);
}

function renderShell() {
  return render(
    <MemoryRouter>
      <Routes>
        <Route element={<AppShell />}>
          <Route index element={<div>Conteúdo</div>} />
        </Route>
      </Routes>
    </MemoryRouter>,
  );
}

describe("AppShell header", () => {
  beforeEach(() => {
    localStorage.clear();
    setScrollY(0);
  });

  it("recolhe ao descer e retorna ao subir", () => {
    const { container } = renderShell();
    const header = screen.getByRole("banner");
    const shell = container.querySelector(".app-shell");

    expect(header).toHaveAttribute("data-hidden", "false");
    expect(shell).toHaveAttribute("data-header-hidden", "false");

    setScrollY(160);
    expect(header).toHaveAttribute("data-hidden", "true");
    expect(header).toHaveAttribute("data-scrolled", "true");
    expect(shell).toHaveAttribute("data-header-hidden", "true");

    setScrollY(140);
    expect(header).toHaveAttribute("data-hidden", "false");
    expect(shell).toHaveAttribute("data-header-hidden", "false");
  });

  it("volta a mostrar os controles quando o foco entra no header", () => {
    renderShell();
    const header = screen.getByRole("banner");

    setScrollY(160);
    expect(header).toHaveAttribute("data-hidden", "true");

    fireEvent.focus(screen.getByRole("button", { name: "Abrir navegação" }));
    expect(header).toHaveAttribute("data-hidden", "false");
  });
});
