import type { Topic } from "../types/topic";
import { topics } from "./topics";

/* ============================================================================
   A camada de CONTEÚDO — os corpos dos 98 tópicos.

   Importar este módulo avalia o barrel inteiro: ~536 ms de construção de objeto
   e validação zod, ~2,5 MB de fonte. Vale o preço em quem realmente lê o
   conteúdo (a página do tópico, a busca, o modo estudo), e por isso ele mora
   fora de ./registry — que a NavTree carrega em toda rota só para navegar.

   Importe daqui apenas dentro de rotas carregadas sob demanda.
   ========================================================================== */

const bySlug = new Map<string, Topic>(topics.map((t) => [t.slug, t]));

export const allTopics: Topic[] = topics;

export function getTopic(slug: string): Topic | undefined {
  return bySlug.get(slug);
}
