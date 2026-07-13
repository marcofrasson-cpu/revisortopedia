import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import TopicView from "../TopicView";
import { fraturaMaleolarTornozelo } from "../../../content/topics/fratura-maleolar-tornozelo";

/* ============================================================================
   TopicView is the generic renderer that turns any `Topic` data file into a
   page. We smoke-test that a real, complete topic renders without throwing,
   shows its title, and links out to its cited evidence (DOI). Behaviour, not
   layout — no style assertions.
   ========================================================================== */

describe("TopicView", () => {
  it("renders a complete topic without throwing", () => {
    expect(() =>
      render(
        <MemoryRouter>
          <TopicView topic={fraturaMaleolarTornozelo} />
        </MemoryRouter>,
      ),
    ).not.toThrow();
  });

  it("shows the topic title", () => {
    render(
      <MemoryRouter>
        <TopicView topic={fraturaMaleolarTornozelo} />
      </MemoryRouter>,
    );
    const matches = screen.getAllByText(fraturaMaleolarTornozelo.title);
    expect(matches.length).toBeGreaterThan(0);
  });

  it("links out to at least one cited DOI", () => {
    render(
      <MemoryRouter>
        <TopicView topic={fraturaMaleolarTornozelo} />
      </MemoryRouter>,
    );
    const doiLinks = screen
      .getAllByRole("link")
      .filter((a) => a.getAttribute("href")?.includes("doi.org"));
    expect(doiLinks.length).toBeGreaterThan(0);
  });

  it("keeps figures inline without a layout-changing complementary panel", () => {
    const { container } = render(
      <MemoryRouter>
        <TopicView topic={fraturaMaleolarTornozelo} />
      </MemoryRouter>,
    );

    expect(screen.getByText("Base de evidências")).toBeInTheDocument();
    expect(container.querySelector("aside")).not.toBeInTheDocument();
    expect(container.querySelectorAll("figure").length).toBeGreaterThan(0);
  });
});
