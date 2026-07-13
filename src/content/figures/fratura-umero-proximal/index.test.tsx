import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Hertel } from ".";

describe("Hertel figure", () => {
  it("uses compact proportions and Brazilian orthopedic terminology", () => {
    const { container } = render(<Hertel variant="isquemia" />);
    const figure = screen.getByRole("img", {
      name: /maior risco de isquemia da cabeça umeral/i,
    });

    expect(figure).toHaveAttribute("viewBox", "0 0 420 250");
    expect(container).toHaveTextContent("extensão posteromedial");
    expect(container).toHaveTextContent("desvio da dobradiça medial > 2 mm");
    expect(container).toHaveTextContent("Não determinam sozinhos viabilidade");
    expect(container).not.toHaveTextContent(/charneira/i);
    expect(container).not.toHaveTextContent(/cabeça mal perfundida/i);
  });
});
