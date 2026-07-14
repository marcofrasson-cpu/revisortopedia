import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { figures } from ".";

describe("tumor principle figures", () => {
  it("renders every figure without throwing", () => {
    for (const [id, Figure] of Object.entries(figures)) {
      const { unmount } = render(<Figure title={id} />);
      expect(document.querySelector("svg, img, [role=status]"), id).not.toBeNull();
      unmount();
    }
  });

  it("renders interactive variants and technique steps", () => {
    const Methods = figures["biopsia-lesao-ossea:metodos"];
    const Stages = figures["estadiamento-enneking:estagios"];
    const Sequence = figures["biopsia-lesao-ossea:sequencia"];

    expect(() => render(<Methods variant="core" />)).not.toThrow();
    expect(() => render(<Stages variant="IIB" />)).not.toThrow();
    expect(() => render(<Sequence activeStep={4} />)).not.toThrow();
  });
});
