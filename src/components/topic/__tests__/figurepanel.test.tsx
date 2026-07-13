import { describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import FigurePanel from "../FigurePanel";

describe("FigurePanel clinical viewer", () => {
  it("keeps radiographs compact and offers an expanded viewer", () => {
    const { container } = render(
      <FigurePanel
        figureId="fratura-glenoide:radiografia"
        kind="radiograph"
        eyebrow="Anatomia"
        alt="Radiografia da glenoide"
        caption="Fratura da glenoide esquerda."
      />,
    );

    expect(container.querySelector("figure")).toHaveClass("max-w-[760px]");
    expect(screen.getByRole("img", { name: "Radiografia da glenoide" })).toHaveClass(
      "max-h-[26rem]",
    );

    fireEvent.click(screen.getByRole("button", { name: "Ampliar imagem" }));
    expect(screen.getByRole("dialog", { name: /visualização ampliada/i })).toBeInTheDocument();
    expect(document.body.style.overflow).toBe("hidden");

    fireEvent.keyDown(window, { key: "Escape" });
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(document.body.style.overflow).toBe("");
  });
});
