import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { CLINICAL_MEDIA_PATHS, clinicalMediaUrl, figures } from ".";

describe("clinical upper-limb media", () => {
  it("uses deploy-safe URLs and points to existing public files", () => {
    for (const path of Object.values(CLINICAL_MEDIA_PATHS)) {
      expect(path.startsWith("/")).toBe(false);
      expect(clinicalMediaUrl(path)).not.toMatch(/^\/media\//);
      expect(existsSync(resolve(process.cwd(), "public", path)), path).toBe(true);
    }
  });

  it("replaces a failed image with a recoverable fallback", () => {
    const id = "fratura-glenoide:radiografia";
    const ClinicalImage = figures[id];
    render(<ClinicalImage title="Radiografia da glenoide" />);

    const image = screen.getByRole("img", { name: "Radiografia da glenoide" });
    expect(image.getAttribute("src")).toBe(clinicalMediaUrl(CLINICAL_MEDIA_PATHS[id]));

    fireEvent.error(image);
    expect(screen.getByRole("status", { name: /indisponível/i })).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Tentar novamente" }));
    expect(screen.getByRole("img", { name: "Radiografia da glenoide" })).toBeInTheDocument();
  });
});
