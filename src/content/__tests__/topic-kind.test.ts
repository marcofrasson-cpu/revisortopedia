import { describe, expect, it } from "vitest";
import { allTopics } from "../topicData";
import { sectionCopy } from "../sectionCopy";

/* ============================================================================
   `kind` decide os títulos de seção, e tem default "fratura". O default é o que
   mantém os tópicos de fratura — a maioria — sem cerimônia, mas também é uma
   armadilha: um tópico novo que esqueça de declarar `kind` não quebra nada, só
   passa a chamar a própria conduta de "Redução e fixação, passo a passo".

   Foi o que aconteceu com 15 tópicos (rizartrose, pé torto, Perthes, Kienböck…)
   quando o campo foi introduzido. Esta lista é a rede: um tópico não-fratura só
   entra aqui declarando o que é.
   ========================================================================== */

/** Tópicos cuja seção de técnica NÃO é redução e fixação de osso. */
const NAO_FRATURA = new Set([
  "coxa-vara",
  "deformidades-angulares-blount",
  "displasia-desenvolvimento-quadril",
  "instabilidade-carpo",
  "kienbock",
  "legg-calve-perthes",
  "lesao-ligamento-colateral-ulnar-polegar",
  "lesao-tendoes-fibulares",
  "metatarso-aduto",
  "paralisia-braquial-obstetrica",
  "pe-torto-congenito",
  "rizartrose",
  "ruptura-tendao-aquiles",
  "tendinopatia-aquiles",
  "torcicolo-muscular-congenito",
]);

describe("topic kind", () => {
  it("never calls a non-fracture topic's management 'redução e fixação'", () => {
    const wrong = allTopics
      .filter((topic) => NAO_FRATURA.has(topic.slug) && topic.kind === "fratura")
      .map((topic) => topic.slug);

    expect(wrong, `declare kind nestes tópicos — hoje caem no default "fratura"`).toEqual([]);
  });

  it("gives every kind its own voice for the technique section", () => {
    // Se um kind novo entrar no enum sem copy própria, ele herda o texto de
    // fratura em silêncio — o defeito que este arquivo existe para impedir.
    const titles = new Set(
      (["fratura", "condicao", "procedimento", "fundamento", "propedeutica"] as const).map(
        (kind) => sectionCopy(kind, "technique").title,
      ),
    );

    expect(titles.size).toBe(5);
  });

  it("keeps every topic on a kind the schema knows", () => {
    const kinds = new Set(allTopics.map((topic) => topic.kind));
    expect([...kinds].sort()).toEqual(["condicao", "fratura", "fundamento", "procedimento", "propedeutica"]);
  });
});
