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

  it("stands down while the reader is typing in a field", () => {
    // A busca (⌘K) abre por cima da sessão: cada tecla digitada ali não pode
    // revelar a resposta nem queimar a revisão do cartão.
    render(
      <MemoryRouter>
        <input aria-label="busca" />
        <FlashcardRunner cards={[card]} title="Teste" onExit={() => {}} />
      </MemoryRouter>,
    );
    const field = screen.getByLabelText("busca");
    field.focus();

    fireEvent.keyDown(field, { key: " " });
    expect(screen.queryByText(card.answer)).toBeNull();

    fireEvent.click(screen.getByRole("button", { name: "Mostrar resposta" }));
    fireEvent.keyDown(field, { key: "1" });
    expect(useFlashcardStats.getState().progress[card.id]).toBeUndefined();
    expect(screen.queryByText("Sessão concluída")).toBeNull();
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
