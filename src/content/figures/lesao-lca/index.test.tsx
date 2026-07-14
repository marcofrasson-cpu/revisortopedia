import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import {
  Anatomy,
  Exam,
  Grafts,
  LateralTenodesis,
  Mechanism,
  MriAssociated,
  Reconstruction,
  ReturnToSport,
  Tunnels,
} from ".";

describe("figuras da lesão do LCA", () => {
  it("renderiza todas as famílias com título acessível", () => {
    const figures = [
      [Anatomy, "Anatomia LCA"],
      [Mechanism, "Mecanismo LCA"],
      [Exam, "Exame LCA"],
      [MriAssociated, "RM LCA"],
      [Grafts, "Enxertos LCA"],
      [Tunnels, "Túneis LCA"],
      [Reconstruction, "Reconstrução LCA"],
      [LateralTenodesis, "Tenodese lateral LCA"],
      [ReturnToSport, "Retorno ao esporte LCA"],
    ] as const;

    for (const [Figure, title] of figures) {
      const { unmount } = render(<Figure title={title} />);
      expect(screen.getByTitle(title)).toBeInTheDocument();
      unmount();
    }
  });

  it("renderiza variantes clínicas e todas as etapas da reconstrução", () => {
    for (const variant of ["parcial", "parcial-instavel", "completa"]) {
      const { unmount } = render(<Anatomy variant={variant} />);
      expect(document.querySelector("svg")).toBeInTheDocument();
      unmount();
    }

    for (let activeStep = 1; activeStep <= 8; activeStep += 1) {
      const { unmount } = render(<Reconstruction activeStep={activeStep} />);
      expect(document.querySelector("svg")).toBeInTheDocument();
      unmount();
    }
  });
});
