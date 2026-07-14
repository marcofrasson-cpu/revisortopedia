import { lazy } from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import AppShell from "../AppShell";

/* ============================================================================
   As rotas são carregadas sob demanda e um tópico traz ~3,9 MB de dados e
   figuras — numa rede de celular, segundos. O Suspense precisa ficar DENTRO do
   AppShell, envolvendo só o Outlet: em volta das rotas, o próprio shell entra na
   suspensão e a tela inteira apaga, cabeçalho e navegação junto.

   Este teste suspende uma rota que nunca resolve e cobra que o shell continue lá.
   ========================================================================== */

const NuncaResolve = lazy(() => new Promise<never>(() => {}));

describe("route suspense", () => {
  it("keeps the header and the nav tree standing while a route loads", () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route element={<AppShell />}>
            <Route index element={<NuncaResolve />} />
          </Route>
        </Routes>
      </MemoryRouter>,
    );

    // O shell não suspende junto com a rota.
    expect(screen.getByRole("link", { name: "Revisortopedia — início" })).toBeInTheDocument();
    expect(screen.getByRole("navigation", { name: "Framework ortopédico" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Buscar tópicos" })).toBeInTheDocument();

    // E a espera é anunciada em vez de deixar a área de conteúdo muda.
    expect(screen.getByRole("status")).toHaveTextContent("Carregando o conteúdo");
  });
});
