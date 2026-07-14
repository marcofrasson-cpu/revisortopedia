import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { figures as legacyFigures } from ".";
import { figures as pcfdFigures } from "./pcfd-current";

const figures = { ...legacyFigures, ...pcfdFigures };

describe("posterior tibial tendon and PCFD figures", () => {
  it("renders every clinical, classification, and operative figure", () => {
    for (const [id, Figure] of Object.entries(figures)) {
      const { unmount } = render(<Figure title={id} />);
      expect(document.querySelector("svg, img, [role=status]"), id).not.toBeNull();
      unmount();
    }
  });

  it("renders the current PCFD classes and operative variants", () => {
    const Classification = pcfdFigures["ruptura-tendao-tibial-posterior:classificacao-pcfd"];
    const Arthrodesis = legacyFigures["ruptura-tendao-tibial-posterior:step-artrodese"];

    expect(() => render(<Classification variant="E" />)).not.toThrow();
    expect(() => render(<Arthrodesis variant="tripla" />)).not.toThrow();
  });
});
