import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { figures } from ".";

describe("framework completion figures", () => {
  it("renders every figure without throwing", () => {
    for (const [id, Figure] of Object.entries(figures)) {
      const { unmount } = render(<Figure title={id} />);
      expect(document.querySelector("svg"), id).not.toBeNull();
      unmount();
    }
  });

  it("renders the clinical variants used by topic content", () => {
    const variants: Array<[keyof typeof figures, string]> = [
      ["framework-completion:mielopatia-decisao", "grave"],
      ["framework-completion:scheuermann-conduta", "cirurgia"],
      ["framework-completion:trauma-medular-avaliacao", "C"],
      ["framework-completion:osteossarcoma-margem", "IIB"],
      ["framework-completion:tcg-campanacci", "III"],
      ["framework-completion:condrossarcoma-conduta", "alto"],
      ["framework-completion:metastase-reconstrucao", "ressection"],
      ["framework-completion:mirels-decisao", "intermediario"],
      ["framework-completion:om-aguda-anatomia", "hematogenica"],
      ["framework-completion:om-cronica-cierny", "IV"],
      ["framework-completion:artrite-septica-gachter", "IV"],
      ["framework-completion:iap-estrategia", "cronica"],
      ["framework-completion:fri-diagnostico", "confirmatoria"],
    ];

    for (const [id, variant] of variants) {
      const Figure = figures[id];
      const { unmount } = render(<Figure variant={variant} />);
      expect(document.querySelector("svg"), `${id}:${variant}`).not.toBeNull();
      unmount();
    }
  });
});
