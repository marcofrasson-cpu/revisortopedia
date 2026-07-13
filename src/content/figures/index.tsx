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
import {
  AchillesAnatomy,
  ThompsonTest,
  AchillesGap,
  AchillesApposition,
} from "./achilles/anatomy";
import { ApproachOpenAchilles, ApproachPercutaneous } from "./achilles/approaches";
import {
  StepPosition,
  StepExposure,
  StepCoreSuture,
  StepTensionRepair,
  StepMisRepair,
  StepFunctionalBrace,
} from "./achilles/technique";

// Membro inferior — barris de figuras por tópico (ids prefixados por slug).
import { figures as figAnelPelvico } from "./fratura-anel-pelvico";
import { figures as figAcetabulo } from "./fratura-acetabulo";
import { figures as figColoFemoral } from "./fratura-colo-femoral";
import { figures as figTranstrocanteriana } from "./fratura-transtrocanteriana";
import { figures as figSubtrocanteriana } from "./fratura-subtrocanteriana";
import { figures as figDiafiseFemoral } from "./fratura-diafise-femoral";
import { figures as figFemurDistal } from "./fratura-femur-distal";
import { figures as figPatela } from "./fratura-patela";
import { figures as figPlanaltoTibial } from "./fratura-planalto-tibial";
import { figures as figLuxacaoJoelho } from "./luxacao-joelho";
import { figures as figDiafiseTibial } from "./fratura-diafise-tibial";
import { figures as figPilaoTibial } from "./fratura-pilao-tibial";
import { figures as figSindesmoseIsolada } from "./lesao-sindesmose-isolada";
import { figures as figEstresseMaleolo } from "./fratura-estresse-maleolo-medial";
import { figures as figCalcaneo } from "./fratura-calcaneo";
import { figures as figTalus } from "./fratura-talus";
import { figures as figQuintoMetatarso } from "./fratura-quinto-metatarso";
import { figures as figTendinopatiaAquiles } from "./tendinopatia-aquiles";
import { figures as figLisfranc } from "./lesao-lisfranc";
import { figures as figTendoesFibulares } from "./lesao-tendoes-fibulares";

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

  // ── Ruptura do tendão de Aquiles ──────────────────────────────────────────
  "achilles-anatomy": AchillesAnatomy,
  "thompson-test": ThompsonTest,
  "achilles-gap": AchillesGap,
  "achilles-apposition": AchillesApposition,
  "approach-open-achilles": ApproachOpenAchilles,
  "approach-percutaneous": ApproachPercutaneous,
  "step-position": StepPosition,
  "step-exposure": StepExposure,
  "step-core-suture": StepCoreSuture,
  "step-tension-repair": StepTensionRepair,
  "step-mis-repair": StepMisRepair,
  "step-functional-brace": StepFunctionalBrace,

  // ── Membro inferior (ids já prefixados por slug dentro de cada barril) ────
  ...figAnelPelvico,
  ...figAcetabulo,
  ...figColoFemoral,
  ...figTranstrocanteriana,
  ...figSubtrocanteriana,
  ...figDiafiseFemoral,
  ...figFemurDistal,
  ...figPatela,
  ...figPlanaltoTibial,
  ...figLuxacaoJoelho,
  ...figDiafiseTibial,
  ...figPilaoTibial,
  ...figSindesmoseIsolada,
  ...figEstresseMaleolo,
  ...figCalcaneo,
  ...figTalus,
  ...figQuintoMetatarso,
  ...figTendinopatiaAquiles,
  ...figLisfranc,
  ...figTendoesFibulares,
};

/** Resolve um id de figura; ids desconhecidos caem no placeholder. */
export function getFigure(id: string): FC<FigureProps> {
  return FIGURES[id] ?? PlaceholderFigure;
}

export { PlaceholderFigure };
