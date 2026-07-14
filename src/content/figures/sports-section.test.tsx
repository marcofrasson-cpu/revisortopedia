import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { figures as ankleFigures } from "./instabilidade-lateral-tornozelo";
import { figures as bankartFigures } from "./lesao-labral-bankart";
import { figures as cuffFigures } from "./lesao-manguito-rotador";
import { figures as meniscalFigures } from "./lesao-meniscal";

describe("figuras da seção Esportiva & artroscopia", () => {
  it("monta todas as famílias novas sem falha", () => {
    const figures = {
      ...meniscalFigures,
      ...cuffFigures,
      ...bankartFigures,
      ...ankleFigures,
    };

    for (const [id, Figure] of Object.entries(figures)) {
      const { unmount } = render(<Figure title={id} />);
      expect(screen.getByTitle(id)).toBeInTheDocument();
      unmount();
    }
  });

  it("monta as variantes e etapas clínicas usadas pelo conteúdo", () => {
    const variants = [
      [meniscalFigures["lesao-meniscal:padroes"], "radial"],
      [meniscalFigures["lesao-meniscal:raiz"], "avulsao"],
      [cuffFigures["lesao-manguito-rotador:padroes"], "macica"],
      [bankartFigures["lesao-labral-bankart:trilha-glenoidal"], "off-track"],
      [bankartFigures["lesao-labral-bankart:algoritmo-osseo"], "latarjet"],
      [ankleFigures["instabilidade-lateral-tornozelo:exame"], "mecanica"],
    ] as const;

    for (const [Figure, variant] of variants) {
      const { unmount } = render(<Figure variant={variant} />);
      expect(document.querySelector("svg")).toBeInTheDocument();
      unmount();
    }

    for (const Figure of [
      cuffFigures["lesao-manguito-rotador:reparo"],
      bankartFigures["lesao-labral-bankart:reparo-bankart"],
      ankleFigures["instabilidade-lateral-tornozelo:brostrom"],
    ]) {
      const { unmount } = render(<Figure activeStep={3} />);
      expect(document.querySelector("svg")).toBeInTheDocument();
      unmount();
    }
  });
});
