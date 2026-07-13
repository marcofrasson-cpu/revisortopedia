import type { Topic } from "../../types/topic";
import { fraturaMaleolarTornozelo } from "./fratura-maleolar-tornozelo";
import { rupturaTendaoAquiles } from "./ruptura-tendao-aquiles";

// Membro inferior — tópicos autorados (schema-driven).
import { topic as anelPelvico } from "./fratura-anel-pelvico";
import { topic as acetabulo } from "./fratura-acetabulo";
import { topic as coloFemoral } from "./fratura-colo-femoral";
import { topic as transtrocanteriana } from "./fratura-transtrocanteriana";
import { topic as subtrocanteriana } from "./fratura-subtrocanteriana";
import { topic as diafiseFemoral } from "./fratura-diafise-femoral";
import { topic as femurDistal } from "./fratura-femur-distal";
import { topic as patela } from "./fratura-patela";
import { topic as planaltoTibial } from "./fratura-planalto-tibial";
import { topic as luxacaoJoelho } from "./luxacao-joelho";
import { topic as diafiseTibial } from "./fratura-diafise-tibial";
import { topic as pilaoTibial } from "./fratura-pilao-tibial";
import { topic as sindesmoseIsolada } from "./lesao-sindesmose-isolada";
import { topic as estresseMaleolo } from "./fratura-estresse-maleolo-medial";
import { topic as calcaneo } from "./fratura-calcaneo";
import { topic as talus } from "./fratura-talus";
import { topic as quintoMetatarso } from "./fratura-quinto-metatarso";
import { topic as tendinopatiaAquiles } from "./tendinopatia-aquiles";
import { topic as lisfranc } from "./lesao-lisfranc";
import { topic as tendoesFibulares } from "./lesao-tendoes-fibulares";

/* ============================================================================
   Barrel de tópicos autorados. O registry deriva navegação, busca e prev/next
   a partir daqui; um tópico novo é um arquivo de dados novo + uma linha aqui.
   ========================================================================== */

export const topics: Topic[] = [
  fraturaMaleolarTornozelo,
  rupturaTendaoAquiles,
  anelPelvico,
  acetabulo,
  coloFemoral,
  transtrocanteriana,
  subtrocanteriana,
  diafiseFemoral,
  femurDistal,
  patela,
  planaltoTibial,
  luxacaoJoelho,
  diafiseTibial,
  pilaoTibial,
  sindesmoseIsolada,
  estresseMaleolo,
  calcaneo,
  talus,
  quintoMetatarso,
  tendinopatiaAquiles,
  lisfranc,
  tendoesFibulares,
];
