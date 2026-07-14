import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { beforeEach, describe, expect, it } from "vitest";
import FlashcardRunner from "../FlashcardRunner";
import { useFlashcardStats } from "../../../store/useFlashcardStats";
import type { Flashcard } from "../../../types/flashcard";

const card: Flashcard = {
  id: "card:test:1",
  topicSlug: "fratura-maleolar-tornozelo",
  regionId: "membro-inferior",
  category: "ponto-chave",
  prompt: "Qual é o ponto-chave?",
  answer: "Esta é a resposta.",
  reference: "Referência teste",
};

describe("FlashcardRunner", () => {
  beforeEach(() => {
    useFlashcardStats.setState({ profileId: null, progress: {}, hydrated: true });
  });

  it("reveals an answer and schedules the selected review", () => {
    render(<MemoryRouter><FlashcardRunner cards={[card]} title="Teste" onExit={() => {}} /></MemoryRouter>);
    expect(screen.queryByText(card.answer)).toBeNull();
    fireEvent.click(screen.getByRole("button", { name: "Mostrar resposta" }));
    expect(screen.getByText(card.answer)).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /Bom/ }));
    expect(useFlashcardStats.getState().progress[card.id]?.intervalDays).toBe(3);
    expect(screen.getByText("Sessão concluída")).toBeInTheDocument();
  });
});
