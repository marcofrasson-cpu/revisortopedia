import type { FC } from "react";
import type { FigureProps } from "../../types/topic";
import { PlaceholderFigure } from "./PlaceholderFigure";
import { AnkleMortise, AnkleRing, AnkleLigaments } from "./ankle/anatomy";
import { Weber, LaugeHansen, Syndesmosis } from "./ankle/classification";
import {
  ApproachLateral,
  ApproachMedial,
  ApproachPosterolateral,
} from "./ankle/approaches";
import {
  StepReduction,
  StepLagScrew,
  StepPlate,
  StepMedialMalleolus,
  StepSyndesmosis,
  StepPosteriorMalleolus,
  StepFluoroCheck,
} from "./ankle/technique";

/**
 * Registro de figuras: id canônico -> componente React.FC<FigureProps>.
 * O conteúdo referencia estes ids (e variants) de forma estável.
 */
export const FIGURES: Record<string, FC<FigureProps>> = {
  // Anatomia
  "ankle-mortise": AnkleMortise,
  "ankle-ring": AnkleRing,
  "ankle-ligaments": AnkleLigaments,
  // Classificação
  weber: Weber,
  "lauge-hansen": LaugeHansen,
  syndesmosis: Syndesmosis,
  // Vias de acesso
  "approach-lateral": ApproachLateral,
  "approach-medial": ApproachMedial,
  "approach-posterolateral": ApproachPosterolateral,
  // Técnica passo a passo
  "step-reduction": StepReduction,
  "step-lag-screw": StepLagScrew,
  "step-plate": StepPlate,
  "step-medial-malleolus": StepMedialMalleolus,
  "step-syndesmosis": StepSyndesmosis,
  "step-posterior-malleolus": StepPosteriorMalleolus,
  "step-fluoro-check": StepFluoroCheck,
};

/** Resolve um id de figura; ids desconhecidos caem no placeholder. */
export function getFigure(id: string): FC<FigureProps> {
  return FIGURES[id] ?? PlaceholderFigure;
}

export { PlaceholderFigure };
