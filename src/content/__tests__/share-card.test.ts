import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { evidenceSpan, evidenceTotal } from "../evidenceSpine";
import { stats } from "../registry";

/* ============================================================================
   O card de compartilhamento (public/og.png, gerado por scripts/build-og.py) e as
   meta tags do index.html afirmam números: quantos tópicos, quantos estudos, de
   quando a quando. Nada no build confere isso, e é o texto que o leitor vê antes
   de abrir o site — se envelhecer, mente na porta de entrada.

   Este teste lê o index.html e cobra que os números batam com o conteúdo real.
   Quebrou: rode `python3 scripts/build-og.py` e ajuste as meta tags.
   ========================================================================== */

const html = readFileSync(resolve(__dirname, "../../../index.html"), "utf8");

describe("share card metadata", () => {
  it("claims the number of topics the manual actually has", () => {
    const description = html.match(/property="og:description"\s+content="([^"]+)"/s)?.[1] ?? html;
    expect(description).toContain(`${stats.topicsComplete} tópicos`);
  });

  it("claims the evidence base the topics actually cite", () => {
    expect(html).toContain(`${evidenceTotal} estudos citados`);
    expect(html).toContain(`de ${evidenceSpan.from} a ${evidenceSpan.to}`);
  });

  it("keeps every og:image url on the same cache-busting version", () => {
    // WhatsApp e Twitter cacheiam por URL: sem trocar o ?v= eles seguem servindo
    // o card antigo, e um ?v= diferente entre as tags serve cards diferentes.
    const versions = [...html.matchAll(/og\.png\?v=(\d+)/g)].map((m) => m[1]);
    expect(versions.length).toBeGreaterThanOrEqual(3);
    expect(new Set(versions).size, `versões divergentes: ${versions.join(", ")}`).toBe(1);
  });
});
