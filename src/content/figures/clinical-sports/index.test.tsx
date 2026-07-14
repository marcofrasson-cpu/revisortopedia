import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { SPORTS_CLINICAL_MEDIA_PATHS, figures, sportsClinicalMediaUrl } from ".";

describe("clinical sports media", () => {
  it("uses deploy-safe URLs and points to existing public files", () => {
    for (const path of Object.values(SPORTS_CLINICAL_MEDIA_PATHS)) {
      expect(path.startsWith("/")).toBe(false);
      expect(sportsClinicalMediaUrl(path)).not.toMatch(/^\/media\//);
      expect(existsSync(resolve(process.cwd(), "public", path)), path).toBe(true);
    }
  });

  it("replaces a failed image with a recoverable fallback", () => {
    const id = "lesao-meniscal:rm-clinica";
    const ClinicalImage = figures[id];
    render(<ClinicalImage title="Ressonância do menisco" />);

    const image = screen.getByRole("img", { name: "Ressonância do menisco" });
    expect(image.getAttribute("src")).toBe(
      sportsClinicalMediaUrl(SPORTS_CLINICAL_MEDIA_PATHS[id]),
    );

    fireEvent.error(image);
    expect(screen.getByRole("status", { name: /indisponível/i })).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Tentar novamente" }));
    expect(screen.getByRole("img", { name: "Ressonância do menisco" })).toBeInTheDocument();
  });
});
