import type { Topic } from "../../types/topic";
import { fraturaMaleolarTornozelo } from "./fratura-maleolar-tornozelo";
import { rupturaTendaoAquiles } from "./ruptura-tendao-aquiles";

/* ============================================================================
   Barrel de tópicos autorados. Adicione novos tópicos ao array conforme forem
   escritos; o registry deriva navegação, busca e prev/next a partir daqui.
   ========================================================================== */

export const topics: Topic[] = [fraturaMaleolarTornozelo, rupturaTendaoAquiles];
