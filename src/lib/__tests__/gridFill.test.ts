import { describe, expect, it } from "vitest";
import { fillers } from "../gridFill";

/** Quantas células a grade tem naquele breakpoint, contando fatos + preenchimento. */
const cells = (count: number, at: "narrow" | "wide") =>
  count + fillers(count).filter((f) => f[at]).length;

describe("fillers", () => {
  it("closes the last row at both column counts", () => {
    // 6 e 9 já fecham em 3 colunas; 7, 8 e 10 são os que deixavam célula órfã.
    for (const count of [6, 7, 8, 9, 10, 12]) {
      expect(cells(count, "narrow") % 2, `${count} fatos em 2 colunas`).toBe(0);
      expect(cells(count, "wide") % 3, `${count} fatos em 3 colunas`).toBe(0);
    }
  });

  it("adds nothing when the facts already fill both grids", () => {
    expect(fillers(6)).toEqual([]);
    expect(fillers(12)).toEqual([]);
  });

  it("never pads a row that is already complete", () => {
    // 9 fatos: 3 colunas fecham sozinhas, 2 colunas precisam de uma célula.
    expect(fillers(9)).toEqual([{ narrow: true, wide: false }]);
    // 8 fatos: o inverso.
    expect(fillers(8)).toEqual([{ narrow: false, wide: true }]);
  });

  it("has nothing to fill for a topic without key facts", () => {
    expect(fillers(0)).toEqual([]);
  });
});
