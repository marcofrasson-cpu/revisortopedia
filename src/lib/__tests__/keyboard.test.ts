import { describe, expect, it } from "vitest";
import { isTypingTarget } from "../keyboard";

describe("isTypingTarget", () => {
  it("recognises the fields where a single-key shortcut must stand down", () => {
    expect(isTypingTarget(document.createElement("input"))).toBe(true);
    expect(isTypingTarget(document.createElement("textarea"))).toBe(true);
    expect(isTypingTarget(document.createElement("select"))).toBe(true);

    const editable = document.createElement("div");
    editable.setAttribute("contenteditable", "true");
    expect(isTypingTarget(editable)).toBe(true);

    // Um clique dentro de um campo rico entrega o filho como alvo, não o campo.
    const inner = document.createElement("span");
    editable.append(inner);
    expect(isTypingTarget(inner)).toBe(true);
  });

  it("lets shortcuts through everywhere else", () => {
    expect(isTypingTarget(document.createElement("div"))).toBe(false);
    expect(isTypingTarget(document.createElement("button"))).toBe(false);
    expect(isTypingTarget(document.body)).toBe(false);
    expect(isTypingTarget(null)).toBe(false);
    expect(isTypingTarget(window)).toBe(false);
  });
});
