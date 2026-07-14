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

// Membro superior — topicos autorados.
import { topic as fraturaClavicula } from "./fratura-clavicula";
import { topic as luxacaoAcromioclavicular } from "./luxacao-acromioclavicular";
import { topic as luxacaoGlenoumeralAnterior } from "./luxacao-glenoumeral-anterior";
import { topic as fraturaGlenoide } from "./fratura-glenoide";
import { topic as fraturaUmeroProximal } from "./fratura-umero-proximal";
import { topic as fraturaUmeroDistal } from "./fratura-umero-distal";
import { topic as fraturaDiafiseUmeral } from "./fratura-diafise-umeral";
import { topic as fraturaCabecaRadial } from "./fratura-cabeca-radial";
import { topic as fraturaOlecrano } from "./fratura-olecrano";
import { topic as luxacaoCotovelo } from "./luxacao-cotovelo";
import { topic as triadeTerrivel } from "./triade-terrivel-cotovelo";
import { topic as diafiseRadioUlna } from "./fratura-diafise-radio-ulna";
import { topic as galeazzi } from "./fratura-galeazzi";
import { topic as monteggia } from "./fratura-monteggia";
import { topic as radioDistal } from "./fratura-radio-distal";
import { topic as escafoide } from "./fratura-escafoide";
import { topic as instabilidadeCarpo } from "./instabilidade-carpo";
import { topic as metacarpo } from "./fratura-metacarpo";
import { topic as falanges } from "./fratura-falanges";
import { topic as lcuPolegar } from "./lesao-ligamento-colateral-ulnar-polegar";
import { topic as supracondiliana } from "./fratura-supracondiliana-umero";
import { topic as antebracoCrianca } from "./fratura-antebraco-crianca";
import { topic as ddq } from "./displasia-desenvolvimento-quadril";
import { topic as ecf } from "./epifisiolise-femoral-proximal";
import { topic as perthes } from "./legg-calve-perthes";
import { topic as salterHarris } from "./fratura-fisaria-salter-harris";
import { topic as transicaoTornozelo } from "./fratura-transicao-tornozelo";
import { topic as perilunar } from "./luxacao-perilunar";
import { topic as kienbock } from "./kienbock";
import { topic as rizartrose } from "./rizartrose";

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
  fraturaClavicula,
  luxacaoAcromioclavicular,
  luxacaoGlenoumeralAnterior,
  fraturaGlenoide,
  fraturaUmeroProximal,
  fraturaUmeroDistal,
  fraturaDiafiseUmeral,
  fraturaCabecaRadial,
  fraturaOlecrano,
  luxacaoCotovelo,
  triadeTerrivel,
  diafiseRadioUlna,
  galeazzi,
  monteggia,
  radioDistal,
  escafoide,
  instabilidadeCarpo,
  metacarpo,
  falanges,
  lcuPolegar,
  supracondiliana,
  antebracoCrianca,
  ddq,
  ecf,
  perthes,
  salterHarris,
  transicaoTornozelo,
  perilunar,
  kienbock,
  rizartrose,
];
