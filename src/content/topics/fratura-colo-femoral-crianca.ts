import { defineTopic } from "../../types/topic";

export const topic = defineTopic({
  id: "ortopedia-pediatrica-quadril-fratura-colo-femoral-crianca",
  slug: "fratura-colo-femoral-crianca",
  regionId: "ortopedia-pediatrica",
  bone: "Quadril (criança)",
  injury: "Fratura do colo femoral pediátrica",
  title: "Fratura do colo femoral na criança",
  subtitle:
    "Lesão rara de alta energia em que o nível do traço de Delbet define o risco vascular: reduzir anatomicamente, descomprimir a cápsula e fixar com estabilidade antes que a necrose se instale.",
  laterality: null,
  status: "complete",
  overview:
    "A fratura do colo femoral na criança responde por menos de 1% de todas as fraturas pediátricas. O fêmur proximal infantil é osso denso e trabecularmente resistente, protegido por uma cápsula espessa: fraturá-lo exige energia elevada — queda de altura, atropelamento, acidente automobilístico. Por isso, a fratura raramente vem sozinha. Todo paciente deve ser avaliado como politraumatizado, com atenção para lesões de crânio, abdome e outras fraturas. A exceção é a fratura patológica sobre cisto ósseo simples, displasia fibrosa ou osso osteopênico (paralisia cerebral, osteogênese imperfeita, doença neuromuscular), em que um trauma trivial basta.\n\nA criança com fratura do colo femoral chega com dor intensa no quadril, incapacidade de apoiar o peso e membro encurtado em rotação externa. O diagnóstico é radiográfico — anteroposterior da bacia e perfil do quadril acometido. A armadilha é o paciente neurologicamente comprometido: em crianças com paralisia cerebral ou déficit cognitivo, o diagnóstico é frequentemente tardio porque não há queixa fidedigna nem marcha a ser perdida.\n\nA classificação de Delbet, descrita em 1907, organiza a lesão em quatro níveis — transepifisária (I), transcervical (II), cervicotrocantérica (III) e intertrocantérica (IV) — e continua sendo o instrumento clínico central por um motivo simples: ela é um mapa vascular. Quanto mais proximal o traço, mais vasos retinaculares são interrompidos e maior a necrose avascular. A metanálise de Xin (2023), com 30 estudos e 1.185 pacientes, encontrou necrose global de 22%, distribuída em 45% no tipo I, 32% no tipo II, 17% no tipo III e 12% no tipo IV.\n\nO tratamento é essencialmente cirúrgico em qualquer fratura desviada e em praticamente todo paciente acima de 2–3 anos. Os princípios são três e não mudaram: redução anatômica (fechada se possível, aberta sem hesitação se a fechada falhar), descompressão do hematoma intracapsular e fixação estável. A urgência é conduta consagrada mesmo sob evidência conflitante — as metanálises não confirmam de forma consistente que operar antes de 24 horas reduza a necrose, mas o custo biológico de reduzir cedo é nulo e o benefício da redução anatômica, esse sim, é bem estabelecido. Além da necrose, o cirurgião persegue duas complicações previsíveis e evitáveis: a coxa vara por perda de redução e a parada de crescimento fisário.",
  keyFacts: [
    { label: "Frequência", value: "< 1% das fraturas na criança — rara" },
    { label: "Mecanismo", value: "Alta energia; rastrear politrauma associado" },
    { label: "Classificação", value: "Delbet I–IV (proximal → distal)" },
    { label: "Necrose global", value: "~22% (I: 45% · II: 32% · III: 17% · IV: 12%)" },
    { label: "Preditores de NAV", value: "Delbet I/II, desvio inicial, redução ruim, idade ≥ 12 a" },
    { label: "Princípios", value: "Redução anatômica + descompressão capsular + fixação estável" },
    { label: "Poupar a fise", value: "Sempre que o colo distal comporte o implante" },
    { label: "Outras complicações", value: "Coxa vara, parada de crescimento, pseudartrose" },
  ],
  anatomy: {
    text:
      "A vascularização do fêmur proximal na criança explica praticamente tudo o que importa nesta fratura. A perfusão da epífise vem quase inteiramente dos vasos retinaculares posterossuperiores e posteroinferiores — ramos terminais da artéria circunflexa femoral medial, que contorna a base do colo, penetra a cápsula na sua inserção e sobe pelo colo em posição subperiosteal até cruzar a fise e irrigar o núcleo epifisário. Esses vasos correm colados ao osso: um traço no colo os secciona, e um fragmento desviado os estira ou rompe. Daí o gradiente de Delbet.\n\nDuas particularidades pediátricas agravam o problema. Primeiro, a partir de por volta dos 4 anos a fise funciona como barreira ao fluxo metafisário: no lactente os vasos metafisários ainda a atravessam e oferecem alguma colateral, mas a partir dessa idade deixam de fazê-lo, e não resta circulação capaz de resgatar a epífise se os retinaculares falharem. Segundo, a artéria do ligamento redondo, que no adulto contribui de forma variável, é praticamente irrelevante antes dos 8 anos e só se torna uma fonte significativa na segunda década. A criança entre ~4 e ~8 anos está, portanto, na pior combinação possível: dependência total de um único sistema vascular, sem colateral metafisário e ainda sem o ligamento redondo.\n\nA cápsula do quadril insere-se distalmente na linha intertrocantérica, à frente, e mais proximalmente atrás. Isso torna as fraturas de Delbet I, II e III intracapsulares — o sangramento fica contido, eleva a pressão intra-articular e pode tamponar os mesmos vasos retinaculares que já foram agredidos pelo trauma. O tipo IV é extracapsular, o hematoma se dispersa e a necrose é rara. Essa é a base racional da descompressão capsular.\n\nO colo da criança é curto e largo, com o esporão de Adams (calcar) medial denso, e o ângulo colo-diáfise é fisiologicamente mais valgo que no adulto (~135°–145°, diminuindo com a idade). A fise proximal responde por cerca de 15% do crescimento longitudinal do membro e, sobretudo, pelo crescimento do colo; a fise trocantérica cresce em sentido oposto. Uma parada de crescimento fisário isolada raramente causa discrepância significativa, mas desequilibra a relação colo–trocânter e produz trocânter alto.",
    figureIds: [
      "fratura-colo-femoral-crianca:anatomia",
      "fratura-colo-femoral-crianca:descompressao-capsular",
    ],
  },
  classification: [
    {
      id: "delbet",
      name: "Classificação de Delbet (nível anatômico do traço)",
      basis:
        "Posição do traço de fratura em relação à fise, ao colo e aos trocânteres — proximal para distal.",
      note:
        "Descrita por Delbet em 1907 e popularizada por Colonna. Permanece o padrão porque o nível do traço é um marcador direto de quantos vasos retinaculares foram interrompidos: o risco de necrose avascular é inversamente proporcional ao número do tipo. Incidências agrupadas de necrose segundo a metanálise de Xin (2023).",
      types: [
        {
          code: "I",
          label: "Transepifisária",
          description:
            "Separação através da fise proximal, com ou sem luxação da epífise do acetábulo. Corresponde a cerca de 8% dos casos. É o tipo mais raro e o mais grave: a necrose agrupada é de ~45% e aproxima-se de 100% quando há luxação associada. Distinguir do escorregamento epifisário femoral proximal agudo, que ocorre em adolescente sem trauma de alta energia. No recém-nascido e no lactente, considerar trauma obstétrico ou maus-tratos.",
          figureId: "fratura-colo-femoral-crianca:classificacao-delbet",
          figureVariant: "I",
        },
        {
          code: "II",
          label: "Transcervical",
          description:
            "Traço no terço médio do colo, intracapsular. É o tipo mais frequente (~45%–50% dos casos). Necrose em torno de 30%–32%, fortemente dependente do desvio inicial: fraturas sem desvio comportam-se muito melhor que as desviadas. Também concentra os casos de pseudartrose e de coxa vara quando a fixação é insuficiente.",
          figureId: "fratura-colo-femoral-crianca:classificacao-delbet",
          figureVariant: "II",
        },
        {
          code: "III",
          label: "Cervicotrocantérica (basicervical)",
          description:
            "Traço na junção do colo com a região trocantérica, ainda intracapsular. Cerca de 30% dos casos. Necrose ~17%. Aqui a complicação dominante deixa de ser vascular e passa a ser mecânica: a coxa vara por perda de redução é frequente quando o construto não oferece apoio angular.",
          figureId: "fratura-colo-femoral-crianca:classificacao-delbet",
          figureVariant: "III",
        },
        {
          code: "IV",
          label: "Intertrocantérica",
          description:
            "Traço extracapsular entre os trocânteres, cerca de 10% dos casos. É o tipo de melhor prognóstico, com necrose ~12%, pois os vasos retinaculares estão proximais ao traço e o hematoma não fica sob tensão. Em criança pequena e sem desvio, admite tratamento incruento com gesso pelvipodálico.",
          figureId: "fratura-colo-femoral-crianca:classificacao-delbet",
          figureVariant: "IV",
        },
      ],
    },
    {
      id: "ratliff",
      name: "Padrões de necrose avascular de Ratliff",
      basis:
        "Território ósseo acometido pela necrose, identificado no seguimento radiográfico após a consolidação.",
      note:
        "Descrita por Ratliff em 1962. Tem valor prognóstico: o tipo I evolui mal na maioria dos casos, enquanto o tipo III é o mais benigno. Não orienta a conduta inicial — apenas a expectativa e o seguimento.",
      types: [
        {
          code: "I",
          label: "Necrose de toda a cabeça",
          description:
            "Comprometimento global do núcleo epifisário, por interrupção de todos os vasos retinaculares. É o padrão mais comum e o de pior prognóstico, com colapso e deformidade da cabeça. Típico dos tipos I e II de Delbet.",
          figureId: "fratura-colo-femoral-crianca:necrose-avascular",
          figureVariant: "I",
        },
        {
          code: "II",
          label: "Necrose parcial/segmentar",
          description:
            "Setor da epífise, geralmente lateral, por lesão de um único ramo retinacular. Pode evoluir com coxa magna, deformidade em sela e impacto femoroacetabular secundário.",
          figureId: "fratura-colo-femoral-crianca:necrose-avascular",
          figureVariant: "II",
        },
        {
          code: "III",
          label: "Necrose do colo, da fratura até a fise",
          description:
            "A epífise é poupada porque os vasos cruzam a fise proximalmente ao traço; necrosa apenas o fragmento de colo entre a fratura e a placa. É o padrão de melhor prognóstico e costuma evoluir com encurtamento do colo em vez de colapso articular.",
          figureId: "fratura-colo-femoral-crianca:necrose-avascular",
          figureVariant: "III",
        },
      ],
    },
  ],
  indications: {
    operative: [
      "Qualquer fratura desviada, em qualquer tipo de Delbet e em qualquer idade — redução e fixação.",
      "Delbet I com epífise luxada: redução (fechada gentil e, falhando, aberta) e fixação transfisária.",
      "Delbet II e III em criança acima de ~2–3 anos, mesmo com desvio mínimo — o risco de desviar no gesso é alto.",
      "Delbet IV desviada ou com varo do colo.",
      "Falha de redução fechada aceitável — converter para redução aberta na mesma anestesia, sem tentativas repetidas.",
      "Perda de redução em fratura tratada incruentamente, detectada no seguimento radiográfico precoce.",
      "Politraumatizado ou lesões associadas que exijam mobilização precoce e impeçam o gesso pelvipodálico.",
      "Fratura patológica com lesão de risco (cisto ósseo, displasia fibrosa) — fixação e tratamento da lesão.",
    ],
    nonOperative: [
      "Delbet IV sem desvio em criança pequena (< 2–3 anos): gesso pelvipodálico com controle radiográfico semanal nas primeiras 3 semanas.",
      "Delbet III sem desvio em lactente, com radiografias seriadas rigorosas e conversão imediata à fixação ao menor sinal de varo.",
      "Fratura por insuficiência sem desvio em paciente neuromuscular grave, não deambulador, em que a cirurgia acrescenta mais risco que benefício.",
      "Complemento gessado após fixação em criança pequena — não substitui a fixação, apenas protege o construto.",
    ],
    decisionNotes:
      "A pergunta prática não é se operar, mas o quão anatômica ficará a redução e o quão estável ficará o construto — os dois únicos fatores modificáveis pelo cirurgião. As metanálises são convergentes nesse ponto: Dong (2025), com 34 estudos e 1.332 pacientes, identificou como preditores independentes de necrose a idade ≥ 12 anos (RR 1,40), o tipo I/II de Delbet (RR 1,96), o desvio inicial (RR 2,98) e a qualidade ruim da redução (RR 2,43). Destes quatro, apenas o último está nas mãos do cirurgião — e é por ele que se deve brigar.\n\nO tratamento incruento tem indicação estreita e perigosa. Uma fratura do colo sem desvio no gesso desvia com facilidade, e a coxa vara resultante é mais difícil de tratar do que a fixação que se quis evitar. Na dúvida entre gesso e parafusos numa criança acima de 2–3 anos, fixe.\n\nSobre o momento da cirurgia, a literatura não fecha. A revisão sistemática de Yeranosian (2013) associou atraso além de 24 horas a maior incidência de necrose, mas a metanálise de AlKhatib (2018) não encontrou diferença entre operar antes ou depois de 24 horas (OR 1,19; IC 95% 0,56–2,51), e Xin (2023) também não. Dong (2025) oferece a leitura mais provável: no subgrupo com seguimento ≥ 5 anos, a redução tardia aumentou o risco (RR 2,63) — sugerindo que os estudos de seguimento curto simplesmente não vivem o suficiente para ver a necrose. Conduta razoável: tratar como urgência, sem transformá-la em emergência noturna feita por equipe improvisada. Uma redução anatômica às 8h da manhã com a equipe certa vale mais que uma redução medíocre às 3h.\n\nO papel da redução aberta merece nuance. Ela se associa a mais necrose em análises brutas, mas isso é confundimento por indicação — abre-se o que não reduziu fechado, ou seja, o que era mais grave. Não se deve temer a redução aberta: deve-se temer aceitar uma redução fechada ruim.",
  },
  approaches: [
    {
      id: "watson-jones",
      name: "Anterolateral (Watson-Jones)",
      indication:
        "Via de escolha para redução aberta dos tipos II e III de Delbet. Expõe bem o colo anterior, permite capsulotomia ampla e dá acesso direto ao ponto de entrada lateral para os implantes na mesma incisão.",
      interval:
        "Entre o tensor da fáscia lata e o glúteo médio. Intervalo intermuscular, porém não internervoso — ambos são inervados pelo nervo glúteo superior.",
      atRisk: [
        "Nervo glúteo superior — corre 3 a 5 cm acima do rebordo acetabular; não estender a dissecção proximalmente.",
        "Vasos retinaculares posterossuperiores — nunca dissecar o periósteo do colo posterossuperior.",
        "Artéria circunflexa femoral lateral (ramo ascendente) — cruza o campo distalmente.",
        "Fise proximal — evitar afastadores apoiados na junção cabeça-colo.",
      ],
      figureId: "fratura-colo-femoral-crianca:via-anterolateral",
    },
    {
      id: "smith-petersen",
      name: "Anterior (Smith-Petersen)",
      indication:
        "Exposição ampla da cápsula anterior e da junção cabeça-colo. Preferida quando se antecipa manipulação da epífise (Delbet I com luxação) ou quando se deseja a melhor visão articular. Exige incisão separada, lateral, para os implantes.",
      interval:
        "Superficial entre o sartório (n. femoral) e o tensor da fáscia lata (n. glúteo superior); profundo entre o reto femoral (n. femoral) e o glúteo médio (n. glúteo superior).",
      atRisk: [
        "Nervo cutâneo femoral lateral — cruza o intervalo superficial; é a lesão mais comum da via.",
        "Ramo ascendente da artéria circunflexa femoral lateral — no intervalo profundo.",
        "Feixe neurovascular femoral — medial ao campo, protegido pelo sartório.",
      ],
    },
    {
      id: "lateral-direta",
      name: "Lateral direta (para o implante)",
      indication:
        "Acesso ao ponto de entrada dos parafusos canulados ou da placa bloqueada proximal, isoladamente quando a redução foi obtida de forma fechada, ou associada às vias anteriores.",
      interval:
        "Divisão longitudinal do trato iliotibial e do vasto lateral, ou elevação anterior do vasto lateral a partir da crista.",
      atRisk: [
        "Vasos perfurantes da femoral profunda — na borda posterior do vasto lateral.",
        "Fise trocantérica — o ponto de entrada deve ficar abaixo dela, na crista do vasto lateral.",
      ],
      figureId: "fratura-colo-femoral-crianca:fixacao",
    },
    {
      id: "descompressao-percutanea",
      name: "Descompressão capsular percutânea (punção-aspiração)",
      indication:
        "Alternativa à capsulotomia aberta nos tipos I a III tratados por redução fechada e fixação percutânea, quando não há outro motivo para abrir. Realizada sob fluoroscopia antes ou logo após a fixação.",
      interval:
        "Trajeto anterolateral percutâneo, lateral ao feixe femoral, dirigido à junção cabeça-colo com agulha de grosso calibre sob controle radioscópico.",
      atRisk: [
        "Feixe neurovascular femoral — manter a entrada lateral e conferir o pulso femoral antes da punção.",
        "Cartilagem articular da cabeça — deter a agulha no colo, não avançar até a superfície.",
      ],
      figureId: "fratura-colo-femoral-crianca:descompressao-capsular",
    },
  ],
  technique: [
    {
      n: 1,
      title: "Avaliação do politraumatizado e planejamento",
      detail:
        "Antes do quadril, o paciente. Fratura do colo femoral na criança é marcador de alta energia: complete o atendimento ao trauma e rastreie lesões associadas de crânio, tórax, abdome e coluna. Quando o mecanismo é trivial, inverta o raciocínio — pense em fratura patológica (cisto ósseo simples, displasia fibrosa), osso osteopênico (paralisia cerebral, osteogênese imperfeita) ou maus-tratos no lactente.",
      tips: [
        "Radiografia AP de bacia e perfil do quadril acometido; a incidência da bacia detecta lesões do anel pélvico e permite comparar o ângulo colo-diáfise com o lado normal.",
        "TC reservada à dúvida diagnóstica ou ao planejamento do Delbet I; não atrasar a cirurgia para obtê-la.",
        "Na criança com paralisia cerebral ou déficit cognitivo, o diagnóstico costuma ser tardio — tenha limiar baixo para radiografar diante de irritabilidade e recusa de posicionamento.",
      ],
      pitfalls: [
        "Fixar-se no quadril e perder uma lesão abdominal ou craniana que domina o prognóstico.",
        "Confundir Delbet I no adolescente com escorregamento epifisário agudo — a história de alta energia diferencia.",
      ],
      figureId: "fratura-colo-femoral-crianca:classificacao-delbet",
      figureVariant: "II",
    },
    {
      n: 2,
      title: "Classificar por Delbet e definir a estratégia vascular",
      detail:
        "Determine o nível do traço na radiografia e classifique. A classificação não é exercício acadêmico: ela define de imediato o risco de necrose (I ~45%, II ~32%, III ~17%, IV ~12%), se a fratura é intracapsular (I a III) e portanto candidata à descompressão, e se o colo distal comportará implante poupando a fise. Informe a família do prognóstico antes da cirurgia — a necrose não é complicação de técnica, é característica da lesão, e essa conversa é muito mais difícil depois.",
      tips: [
        "Meça o ângulo colo-diáfise do lado normal na AP de bacia — é o alvo da redução e a referência para detectar coxa vara no seguimento.",
        "Documente o desvio inicial: é o preditor mais forte de necrose (RR 2,98) e ancora o prognóstico.",
      ],
      pitfalls: [
        "Prometer bom resultado num Delbet I ou II desviado.",
        "Tratar o tipo IV com o mesmo alarme vascular dos demais — é extracapsular e de bom prognóstico.",
      ],
      figureId: "fratura-colo-femoral-crianca:risco-nav",
    },
    {
      n: 3,
      title: "Posicionamento e preparo",
      detail:
        "Mesa de tração com pé cadeira ou mesa radiotransparente, conforme a preferência e o porte da criança. Na criança pequena, a mesa radiotransparente com tração manual costuma ser mais segura e versátil do que a mesa de tração. Confirme antes de campear que se obtêm AP e perfil verdadeiros do quadril com o intensificador — sem perfil confiável não há como julgar a redução.",
      tips: [
        "Deixe o membro contralateral acessível para comparação fluoroscópica do ângulo colo-diáfise.",
        "Prepare o campo de modo a permitir conversão para via anterolateral sem recampear.",
        "Antibiótico profilático e reserva de sangue nos casos de politrauma.",
      ],
      pitfalls: [
        "Tração excessiva na mesa antes da avaliação — pode distrair o foco e estirar vasos já comprometidos.",
        "Aceitar imagens oblíquas como perfil: mascaram desvio posterior e varo.",
      ],
    },
    {
      n: 4,
      title: "Redução fechada gentil",
      detail:
        "Tração longitudinal suave e progressiva, seguida de abdução discreta e rotação interna moderada, com o quadril em leve flexão. A manobra é delicada e única: a redução deve ser conseguida com o mínimo de tentativas. Cada manipulação forçada é uma nova agressão aos vasos retinaculares já traumatizados. Avalie em AP e perfil verdadeiros. O alvo é redução anatômica — não 'aceitável'.",
      tips: [
        "Reduza sob visão fluoroscópica contínua, não por manobras às cegas seguidas de imagem.",
        "Compare o ângulo colo-diáfise com o lado contralateral antes de aceitar a redução.",
        "Nos tipos III e IV, corrija especialmente o varo: é a deformidade que recidiva.",
      ],
      pitfalls: [
        "Insistir em múltiplas tentativas de redução fechada — converta para aberta em vez de manipular repetidamente.",
        "Rotação interna forçada excessiva: pode dobrar os vasos retinaculares posteriores.",
        "Aceitar varo residual 'que remodela' — o colo remodela mal e a coxa vara progride.",
      ],
      figureId: "fratura-colo-femoral-crianca:classificacao-delbet",
      figureVariant: "III",
    },
    {
      n: 5,
      title: "Descompressão capsular",
      detail:
        "Nos tipos I, II e III — todos intracapsulares — evacue o hematoma. Pode ser feita por punção-aspiração percutânea com agulha de grosso calibre sob fluoroscopia, dirigida à junção cabeça-colo por via anterolateral, ou por capsulotomia formal quando a via aberta já está em uso. O racional é aliviar o tamponamento dos vasos retinaculares pela pressão intracapsular elevada.",
      tips: [
        "Quando a redução aberta é feita, a capsulotomia em T já cumpre a descompressão — não é preciso gesto adicional.",
        "Não é necessária no tipo IV, que é extracapsular.",
        "Confirme o pulso femoral e mantenha o trajeto lateral ao feixe na punção percutânea.",
      ],
      pitfalls: [
        "Considerar a descompressão como garantia contra necrose e relaxar na qualidade da redução — a revisão de Yeranosian não demonstrou efeito da descompressão sobre a necrose.",
        "Puncionar medialmente e arriscar o feixe femoral.",
      ],
      figureId: "fratura-colo-femoral-crianca:descompressao-capsular",
    },
    {
      n: 6,
      title: "Redução aberta quando a fechada não é anatômica",
      detail:
        "Se a redução fechada não for anatômica, abra — sem hesitação e sem culpa. Via anterolateral de Watson-Jones para os tipos II e III; Smith-Petersen quando se antecipa manipulação da epífise. Capsulotomia em T, exposição do colo anterior, limpeza do foco e redução sob visão direta com auxílio de pinça de redução ou fio-guia usado como joystick. Preserve religiosamente o periósteo posterossuperior do colo: é ali que correm os vasos.",
      tips: [
        "Um fio de Kirschner na epífise como joystick controla a rotação sem apertar o fragmento.",
        "A redução aberta associa-se a mais necrose nas análises brutas por confundimento por indicação — abre-se o que é mais grave, não é a via que causa o dano.",
        "Um fio provisório mantém a redução enquanto se instala o implante definitivo.",
      ],
      pitfalls: [
        "Dissecar circunferencialmente o colo — secciona os retinaculares e converte um quadril viável em necrose certa.",
        "Afastadores apoiados sobre a junção cabeça-colo posterossuperior.",
        "Persistir em manobras fechadas por receio de abrir, deixando redução ruim: é o pior dos dois mundos.",
      ],
      figureId: "fratura-colo-femoral-crianca:via-anterolateral",
    },
    {
      n: 7,
      title: "Fixação estável, poupando a fise sempre que possível",
      detail:
        "A regra é poupar a fise sempre que o colo distal comporte o implante. Nos tipos II e III, dois parafusos canulados paralelos, com rosca inteiramente além do traço e ponta detida antes da placa de crescimento, com entrada abaixo do trocânter maior. Nos tipos III e IV, especialmente na criança maior, a placa bloqueada proximal oferece apoio angular superior contra a coxa vara. No tipo I, a fixação transfisária é obrigatória — não há colo distal suficiente — e aceita-se a parada de crescimento em troca de estabilidade; na criança muito jovem, fios lisos são alternativa. Nas fraturas cominutas ou instáveis, transfixar a fise é preferível a aceitar um construto frouxo.",
      tips: [
        "Estabilidade vence preservação fisária: um construto que perde redução produz coxa vara, pior que uma parada de crescimento do colo.",
        "A fise proximal responde por só ~15% do crescimento do membro — a discrepância isolada raramente é clinicamente relevante.",
        "Rosca cruzando o traço em compressão; rosca sobre o traço apenas distrai a fratura.",
        "Ponto de entrada abaixo da fise trocantérica, na crista do vasto lateral.",
      ],
      pitfalls: [
        "Parafuso único no colo de uma fratura desviada — insuficiente contra rotação e varo.",
        "Penetrar a articulação: confira em AP, perfil e em rotação dinâmica sob fluoroscopia.",
        "Poupar a fise a qualquer custo em fratura instável e colher perda de redução.",
        "Entrada alta, lesando a fise trocantérica e produzindo trocânter alto.",
      ],
      figureId: "fratura-colo-femoral-crianca:fixacao",
      figureVariant: "poupa-fise",
    },
    {
      n: 8,
      title: "Verificação final e imobilização complementar",
      detail:
        "Confirme redução anatômica e posição do implante em AP e perfil verdadeiros, comparando o ângulo colo-diáfise com o lado contralateral. Verifique ausência de penetração articular em rotação dinâmica. Na criança abaixo de ~6 anos, ou quando o construto não é confiável ou a cooperação com a restrição de carga é improvável, complemente com gesso pelvipodálico por 4 a 6 semanas — o gesso protege o construto, nunca o substitui.",
      tips: [
        "Registre a imagem final: é a linha de base contra a qual se detecta perda de redução no seguimento.",
        "No Delbet I com fixação transfisária, o gesso complementar é quase sempre recomendável.",
      ],
      pitfalls: [
        "Encerrar sem perfil verdadeiro e descobrir varo ou desvio posterior na radiografia de controle.",
        "Confiar na cooperação de uma criança pequena com a restrição de carga.",
      ],
      figureId: "fratura-colo-femoral-crianca:fixacao",
      figureVariant: "transfisaria",
    },
  ],
  postop: {
    immobilization:
      "Depende da idade e da estabilidade do construto. Criança abaixo de ~6 anos, fixação transfisária com fios lisos, ou fratura cominuta: gesso pelvipodálico por 4 a 6 semanas. Criança maior com dois parafusos canulados em fratura estável e redução anatômica: dispensa gesso, mantendo-se restrição de carga e orientação. Paciente neurologicamente comprometido: gesso ou órtese conforme a tolerância.",
    weightBearing:
      "Sem carga (ou carga de toque) por 6 a 8 semanas, até sinais radiográficos de consolidação. Progressão para carga parcial entre 8 e 12 semanas, conforme o traço consolide, e carga total quando houver consolidação completa. A restrição não protege contra a necrose — que já está determinada pelo trauma e pela redução — mas protege contra a perda de redução e a coxa vara. Nos tipos III e IV, a progressão tende a ser mais rápida; no I e no II, mais cautelosa.",
    rehab: [
      {
        window: "0–6 semanas",
        weightBearing: "Sem carga ou carga de toque; gesso pelvipodálico se indicado",
        focus:
          "Controle da dor, cuidados com o gesso e a pele, mobilização de tornozelo e joelho quando livres, isometria de quadríceps. Radiografia de controle em 2, 4 e 6 semanas para detectar precocemente perda de redução ou varo.",
      },
      {
        window: "6–12 semanas",
        weightBearing: "Retirada do gesso; carga parcial progressiva conforme a consolidação",
        focus:
          "Recuperação da amplitude de movimento do quadril, fortalecimento progressivo de abdutores (crítico contra a marcha de Trendelenburg) e do quadríceps, reeducação de marcha com auxiliares. Radiografia mensal.",
      },
      {
        window: "3–6 meses",
        weightBearing: "Carga total após consolidação confirmada",
        focus:
          "Normalização da marcha, fortalecimento global, retorno gradual às atividades da vida diária e escolares. Adiar esportes de impacto até consolidação sólida e ausência de sinais precoces de necrose. Vigilância radiográfica do ângulo colo-diáfise e da esfericidade da cabeça.",
      },
      {
        window: "6 meses – 2 anos",
        weightBearing: "Livre, salvo sinais de necrose ou colapso",
        focus:
          "Detecção de necrose avascular — a maioria manifesta-se no primeiro ano, mas o seguimento deve alcançar pelo menos 2 anos. Vigiar coxa vara progressiva, parada de crescimento fisário e discrepância de membros. Considerar remoção do implante quando este cruza a fise e o crescimento remanescente é relevante.",
      },
    ],
    followup:
      "Seguimento radiográfico obrigatoriamente longo — mínimo de 2 anos e, idealmente, até a maturidade esquelética. A necrose costuma manifestar-se nos primeiros 12 meses, mas a metanálise de Dong (2025) mostrou que o tempo de seguimento é moderador significativo dos achados: séries curtas subestimam sistematicamente a incidência. Radiografias em 2, 4 e 6 semanas (fase de risco de perda de redução), depois mensais até a consolidação, e então em 6, 12 e 24 meses. Em cada consulta, avaliar ângulo colo-diáfise (coxa vara), esfericidade e densidade da cabeça (necrose), altura do colo e posição do trocânter (parada de crescimento) e discrepância de comprimento. A ressonância magnética antecipa o diagnóstico de necrose em relação à radiografia e é útil quando a suspeita é clínica e o raio-x ainda é normal. Não prometer alta definitiva antes da maturidade esquelética.",
  },
  complications: [
    {
      name: "Necrose avascular da cabeça femoral",
      detail:
        "A complicação que define esta fratura. Incidência global agrupada de ~22% (Xin, 2023) e ~26% em outra metanálise (Qi, 2023), com gradiente claro por Delbet: 45% no tipo I, 32% no II, 17% no III e 12% no IV. Os preditores confirmados por metanálise são idade ≥ 12 anos (RR 1,40), Delbet I/II (RR 1,96), desvio inicial (RR 2,98) e qualidade ruim da redução (RR 2,43). Manifesta-se em geral no primeiro ano. Os padrões de Ratliff orientam o prognóstico: o tipo I (cabeça inteira) evolui mal na maioria; o tipo III (só o colo) é o mais benigno. O tratamento é insatisfatório — restrição de carga, controle da dor, osteotomias de realinhamento e, em casos terminais no paciente maduro, artroplastia.",
      prevention:
        "Único fator sob controle do cirurgião: redução anatômica obtida com o mínimo de manipulações, preservando o periósteo posterossuperior do colo, associada a descompressão capsular e fixação estável. Não protelar a redução sem motivo.",
    },
    {
      name: "Coxa vara",
      detail:
        "Segunda complicação em frequência, relatada em torno de 10% a 20%. Resulta de redução incompleta, de fixação sem apoio angular ou de perda de redução no gesso; pode também ser consequência tardia de parada de crescimento fisário ou de necrose com colapso do colo. Reduz o braço de alavanca dos abdutores e produz marcha de Trendelenburg, encurtamento e impacto. Ao contrário do que se supõe, o colo da criança remodela mal o varo — a esperança de remodelação espontânea é injustificada acima de ~15° de varo residual.",
      prevention:
        "Redução anatômica com correção completa do varo, fixação com apoio angular (placa bloqueada proximal) nos tipos III e IV, gesso complementar na criança pequena e radiografias precoces em 2, 4 e 6 semanas para detectar perda de redução enquanto ainda é revisável.",
    },
    {
      name: "Parada de crescimento fisário prematura",
      detail:
        "Relatada em ~10% a 25%, sobretudo após fixação transfisária, mas também após necrose. Como a fise proximal responde por apenas ~15% do crescimento longitudinal do membro, a discrepância isolada raramente ultrapassa 2 cm e costuma ser clinicamente irrelevante. A repercussão real é o desequilíbrio entre a fise do colo (parada) e a fise trocantérica (que continua crescendo): resulta em trocânter alto, encurtamento do colo e insuficiência dos abdutores.",
      prevention:
        "Poupar a fise sempre que o colo distal comporte o implante; quando a transfixação for necessária, considerar a remoção do implante após a consolidação em criança com crescimento remanescente significativo. Monitorar a discrepância até a maturidade.",
    },
    {
      name: "Pseudartrose",
      detail:
        "Incomum na criança (cerca de 5% a 10%), concentrada nos tipos II e III com redução inadequada, fixação insuficiente ou varo residual — a fratura em varo submete o foco a cisalhamento em vez de compressão. Manifesta-se como dor persistente e ausência de progressão radiográfica além de 3 a 4 meses.",
      prevention:
        "Redução anatômica em valgo fisiológico, fixação estável com compressão do traço e restrição de carga até a consolidação radiográfica. O tratamento é a osteotomia valgizante subtrocantérica, que converte cisalhamento em compressão, associada a enxerto e refixação.",
    },
    {
      name: "Condrólise",
      detail:
        "Rara nesta fratura, ao contrário do que ocorre no escorregamento epifisário femoral proximal. Quase sempre iatrogênica, por penetração articular não reconhecida do implante. Cursa com rigidez progressiva e dor, com estreitamento do espaço articular na radiografia.",
      prevention:
        "Verificação fluoroscópica em AP, perfil e rotação dinâmica antes de encerrar; ponta do implante contida no osso subcondral.",
    },
    {
      name: "Infecção",
      detail:
        "Pouco frequente. Mais provável nas fraturas expostas, no politraumatizado e no paciente neurologicamente comprometido com pele comprometida. Pode comprometer o construto e somar-se à necrose já em curso.",
      prevention:
        "Profilaxia antibiótica adequada, manuseio delicado dos tecidos, tempo cirúrgico controlado e cuidado com a pele sob o gesso pelvipodálico.",
    },
  ],
  evidence: [
    {
      id: "xin-2023-metanalise-nav",
      claim:
        "Metanálise de 30 estudos e 1.185 pacientes com fratura do colo femoral pediátrica quantificou a incidência de necrose avascular global e por tipo de Delbet.",
      takeaway:
        "Necrose global agrupada de 22% (IC 95% 18%–27%), com gradiente por Delbet: 45% no tipo I, 32% no II, 17% no III e 12% no IV. Idade do paciente (OR 1,61) e tipo de Delbet (OR 3,02) foram fatores significativos; o tempo até o tratamento não (OR 0,90; p = 0,71). É a base numérica do gradiente vascular de Delbet.",
      level: "III",
      studyType: "Revisão sistemática e metanálise de estudos observacionais",
      era: "atual",
      citation: {
        authors: "Xin P, Li Z, Pei S, Shi Q, Xiao L",
        title:
          "The incidence and risk factors for femoral head necrosis after femoral neck fracture in pediatric patients: a systematic review and meta-analysis",
        journal: "Journal of Orthopaedic Surgery and Research",
        year: 2023,
        pmid: "36624532",
        doi: "10.1186/s13018-023-03502-4",
      },
    },
    {
      id: "dong-2025-preditores-nav",
      claim:
        "Metanálise de 34 estudos e 1.332 pacientes avaliou preditores de necrose avascular após fratura do colo femoral pediátrica, com análise de subgrupos por tempo de seguimento.",
      takeaway:
        "Preditores independentes: idade ≥ 12 anos (RR 1,40; IC 95% 1,09–1,82), Delbet I/II (RR 1,96; IC 95% 1,60–2,39), desvio inicial (RR 2,98; IC 95% 2,04–4,35) e qualidade ruim da redução (RR 2,43; IC 95% 1,46–4,05). Crucialmente, no subgrupo com seguimento ≥ 5 anos a redução tardia aumentou o risco (RR 2,63; IC 95% 1,35–5,11) e a redução fechada com fixação interna foi superior à aberta (RR 0,40) — sugerindo que séries de seguimento curto subestimam o efeito do atraso.",
      level: "III",
      studyType: "Revisão sistemática e metanálise de estudos observacionais",
      era: "atual",
      citation: {
        authors: "Dong B, Li F, Li C",
        title:
          "Risk factors for avascular necrosis in pediatric femoral neck fractures: a systematic review and meta-analysis",
        journal: "Journal of Orthopaedic Surgery and Research",
        year: 2025,
        pmid: "41220016",
        doi: "10.1186/s13018-025-06423-6",
      },
    },
    {
      id: "yeranosian-2013-descompressao",
      claim:
        "Revisão sistemática de 30 estudos e 935 pacientes examinou o efeito do tipo de tratamento, do método de redução e da descompressão capsular sobre necrose, pseudartrose, coxa vara e parada fisária.",
      takeaway:
        "A descompressão capsular não teve efeito demonstrável sobre a incidência de necrose. O atraso do tratamento além de 24 horas associou-se a maior incidência de necrose. O tratamento cirúrgico e a redução aberta associaram-se a mais necrose, mas por confundimento por indicação — as fraturas mais graves (Delbet I e II) foram as mais operadas e abertas. A cirurgia reduziu a coxa vara.",
      level: "III",
      studyType: "Revisão sistemática de estudos observacionais",
      era: "atual",
      citation: {
        authors: "Yeranosian M, Horneff JG, Baldwin K, Hosalkar HS",
        title:
          "Factors affecting the outcome of fractures of the femoral neck in children and adolescents: a systematic review",
        journal: "The Bone & Joint Journal",
        year: 2013,
        pmid: "23307688",
        doi: "10.1302/0301-620X.95B1.30161",
      },
    },
    {
      id: "alkhatib-2018-timing",
      claim:
        "Metanálise de 6 estudos comparativos e 231 fraturas comparou tratamento precoce (< 24 h) e tardio (> 24 h) quanto à osteonecrose da cabeça femoral.",
      takeaway:
        "Não houve diferença significativa de osteonecrose entre tratamento antes ou depois de 24 horas (OR 1,19; IC 95% 0,56–2,51), nem entre redução aberta e fechada (OR 1,62; IC 95% 0,82–3,22). Em contrapartida, fraturas desviadas (OR 3,81) e Delbet I/II (OR 2,43) foram fortemente associadas à osteonecrose. A gravidade da lesão pesa mais que o relógio — mas o tratamento expedito permanece a regra, sobretudo nas desviadas e nos tipos I/II.",
      level: "III",
      studyType: "Revisão sistemática e metanálise de estudos de coorte",
      era: "atual",
      citation: {
        authors: "AlKhatib N, Younis MH, Hegazy A, Ibrahim T",
        title:
          "Early versus late treatment of paediatric femoral neck fractures: a systematic review and meta-analysis",
        journal: "International Orthopaedics",
        year: 2018,
        pmid: "29869695",
        doi: "10.1007/s00264-018-3998-4",
      },
    },
    {
      id: "qi-2023-fatores-risco",
      claim:
        "Metanálise de 15 estudos caso-controle e 814 pacientes analisou fatores de risco para necrose avascular após fixação interna de fratura do colo femoral na criança.",
      takeaway:
        "Necrose pós-operatória em ~26%. Idade no momento da fratura, desvio inicial e redução inadequada foram fatores de risco significativos. Sexo, tempo do procedimento, método de redução e mecanismo do trauma não se associaram à necrose. A tendência global por Delbet mostrou maior incidência no tipo II e menor no tipo IV, sem que se estabelecesse qual tipo é fator de risco independente.",
      level: "III",
      studyType: "Revisão sistemática e metanálise de estudos caso-controle",
      era: "atual",
      citation: {
        authors: "Qi BH, Wang XW, Wang XM, Wang H, Yang YT, Jie Q",
        title:
          "Risk factors related with avascular necrosis after internal fixation of femoral neck fractures in children: a systematic review and meta-analysis",
        journal: "Frontiers in Pediatrics",
        year: 2023,
        pmid: "37601134",
        doi: "10.3389/fped.2023.1188179",
      },
    },
    {
      id: "haider-2024-placa-vs-parafusos",
      claim:
        "Coorte retrospectiva de 42 fraturas Delbet II/III comparou placa bloqueada proximal do fêmur e parafusos canulados quanto a consolidação, coxa vara e necrose.",
      takeaway:
        "Sem diferença em consolidação (81% vs 88%), necrose (25% vs 35%) ou reoperação. A distância articulotrocantérica manteve-se anatômica no grupo da placa, mas ficou significativamente reduzida no grupo dos parafusos (18,4 vs 23,3 mm no lado contralateral; p = 0,001) — sinal de trocânter relativamente alto/colapso do colo. A placa bloqueada é opção segura nos tipos II/III e pode preservar melhor a geometria proximal.",
      level: "III",
      studyType: "Coorte retrospectiva comparativa",
      era: "atual",
      citation: {
        authors: "Haider S, Harris TJ, Turner AC, Podeszwa DA, Hartman CA, Morris WZ",
        title:
          "Treatment of Delbet II/III Pediatric Femoral Neck Fractures With Proximal Femoral Locking Plate Versus Cannulated Screws",
        journal: "Journal of Pediatric Orthopedics",
        year: 2024,
        pmid: "38270343",
        doi: "10.1097/BPO.0000000000002625",
      },
    },
  ],
  pearls: [
    "A classificação de Delbet é um mapa vascular disfarçado de classificação anatômica: quanto mais proximal o traço, mais vasos retinaculares seccionados e maior a necrose (I 45% · II 32% · III 17% · IV 12%).",
    "Dos quatro preditores de necrose confirmados por metanálise — idade, tipo de Delbet, desvio inicial e qualidade da redução — apenas o último está nas suas mãos. Brigue por ele.",
    "Fratura do colo femoral na criança é marcador de alta energia: trate o politraumatizado antes de tratar o quadril. Se o mecanismo foi trivial, pense em fratura patológica ou maus-tratos.",
    "Os tipos I, II e III são intracapsulares e candidatos à descompressão; o IV é extracapsular, tem o hematoma disperso e o melhor prognóstico.",
    "Poupe a fise sempre que o colo distal comporte o implante — mas nunca troque estabilidade por preservação fisária. A coxa vara por perda de redução é pior que a parada de crescimento de uma fise que responde por só ~15% do crescimento do membro.",
    "Não tema a redução aberta: a associação entre via aberta e necrose é confundimento por indicação. Tema aceitar uma redução fechada ruim.",
    "Na criança com paralisia cerebral ou déficit cognitivo, o diagnóstico chega tarde porque não há queixa fidedigna — tenha limiar baixo para radiografar.",
    "Meça o ângulo colo-diáfise do lado normal antes de reduzir: é o alvo intraoperatório e a régua para detectar coxa vara no seguimento.",
    "Seguimento mínimo de 2 anos e idealmente até a maturidade: séries de seguimento curto subestimam sistematicamente a necrose.",
    "Converse sobre o risco de necrose antes da cirurgia. Ela é característica da lesão, não erro de técnica — mas essa conversa é infinitamente mais difícil depois.",
  ],
  pitfalls: [
    "Tratar o quadril e perder a lesão craniana ou abdominal que domina o prognóstico do politraumatizado.",
    "Insistir em múltiplas manobras de redução fechada forçada: cada tentativa agride vasos retinaculares já traumatizados.",
    "Dissecar circunferencialmente o colo na redução aberta — o periósteo posterossuperior carrega os vasos e sua lesão converte um quadril viável em necrose certa.",
    "Aceitar varo residual esperando remodelação: o colo da criança remodela mal e a coxa vara progride.",
    "Fixar uma fratura desviada com parafuso único — insuficiente contra rotação e varo.",
    "Tratar Delbet II ou III sem desvio com gesso em criança acima de 2–3 anos: o desvio secundário no gesso é frequente e a coxa vara resultante é mais difícil que a fixação evitada.",
    "Considerar a descompressão capsular como garantia contra a necrose — a revisão de Yeranosian não demonstrou tal efeito; ela é adjuvante barato, não apólice de seguro.",
    "Encerrar a cirurgia sem perfil verdadeiro e sem rotação dinâmica: mascara varo, desvio posterior e penetração articular.",
    "Ponto de entrada acima da fise trocantérica, produzindo trocânter alto iatrogênico.",
    "Dar alta antes da maturidade esquelética ou confiar num seguimento de 6 meses para excluir necrose.",
  ],
  figures: [
    {
      id: "fratura-colo-femoral-crianca:anatomia",
      caption:
        "Vascularização do fêmur proximal na criança: os vasos retinaculares posterossuperiores, ramos da circunflexa femoral medial, sobem subperiosteais no colo e são a fonte quase exclusiva de perfusão da epífise. A fise bloqueia o fluxo metafisário a partir de ~4 anos e a artéria do ligamento redondo é irrelevante antes dos 8.",
      alt: "Diagrama do fêmur proximal infantil com vasos retinaculares, fise e artéria do ligamento redondo",
      kind: "diagram",
    },
    {
      id: "fratura-colo-femoral-crianca:classificacao-delbet",
      variant: "I",
      caption: "Delbet tipo I — transepifisária: separação através da fise, ~8% dos casos e necrose ~45%.",
      alt: "Fratura transepifisária do fêmur proximal, Delbet tipo I",
      kind: "diagram",
    },
    {
      id: "fratura-colo-femoral-crianca:classificacao-delbet",
      variant: "II",
      caption: "Delbet tipo II — transcervical: traço no terço médio do colo, o tipo mais frequente; necrose ~32%.",
      alt: "Fratura transcervical do colo femoral, Delbet tipo II",
      kind: "diagram",
    },
    {
      id: "fratura-colo-femoral-crianca:classificacao-delbet",
      variant: "III",
      caption: "Delbet tipo III — cervicotrocantérica (basicervical): necrose ~17%; a coxa vara domina o prognóstico.",
      alt: "Fratura cervicotrocantérica do fêmur proximal, Delbet tipo III",
      kind: "diagram",
    },
    {
      id: "fratura-colo-femoral-crianca:classificacao-delbet",
      variant: "IV",
      caption: "Delbet tipo IV — intertrocantérica: extracapsular, menor risco de necrose (~12%) e melhor prognóstico.",
      alt: "Fratura intertrocantérica do fêmur proximal, Delbet tipo IV",
      kind: "diagram",
    },
    {
      id: "fratura-colo-femoral-crianca:risco-nav",
      caption:
        "Gradiente de necrose avascular por tipo de Delbet (incidências agrupadas de metanálise): quanto mais proximal o traço, mais vasos retinaculares interrompidos.",
      alt: "Gráfico de barras da incidência de necrose avascular por tipo de Delbet",
      kind: "diagram",
    },
    {
      id: "fratura-colo-femoral-crianca:descompressao-capsular",
      caption:
        "Descompressão capsular: nos tipos I a III, intracapsulares, o hematoma sob tensão tampona os vasos retinaculares. A evacuação por punção ou capsulotomia é de baixo custo biológico, embora sem efeito comprovado sobre a necrose.",
      alt: "Hematoma intracapsular sob tensão no quadril infantil e sua descompressão por punção",
      kind: "diagram",
    },
    {
      id: "fratura-colo-femoral-crianca:fixacao",
      variant: "poupa-fise",
      caption:
        "Fixação poupando a fise: dois parafusos canulados paralelos, rosca inteiramente além do traço, ponta detida antes da placa de crescimento e entrada abaixo do trocânter maior.",
      alt: "Fixação do colo femoral infantil com dois parafusos canulados poupando a fise",
      kind: "diagram",
    },
    {
      id: "fratura-colo-femoral-crianca:fixacao",
      variant: "transfisaria",
      caption:
        "Fixação transfisária: obrigatória no Delbet I por ausência de colo distal, e aceitável na criança muito jovem ou na fratura instável — troca-se crescimento por estabilidade.",
      alt: "Fixação transfisária do fêmur proximal na fratura de Delbet tipo I",
      kind: "diagram",
    },
    {
      id: "fratura-colo-femoral-crianca:via-anterolateral",
      caption:
        "Via anterolateral de Watson-Jones em corte transverso ao nível do colo: intervalo entre o tensor da fáscia lata e o glúteo médio — intermuscular, porém não internervoso.",
      alt: "Corte transverso do quadril mostrando o intervalo de Watson-Jones",
      kind: "diagram",
    },
    {
      id: "fratura-colo-femoral-crianca:coxa-vara",
      caption:
        "Coxa vara após perda de redução: ângulo colo-diáfise reduzido, trocânter alto e braço de alavanca dos abdutores encurtado, com marcha de Trendelenburg.",
      alt: "Coxa vara do fêmur proximal com medida do ângulo colo-diáfise",
      kind: "diagram",
    },
    {
      id: "fratura-colo-femoral-crianca:necrose-avascular",
      variant: "I",
      caption: "Ratliff tipo I — necrose de toda a cabeça femoral: o padrão mais comum e o de pior prognóstico.",
      alt: "Necrose avascular total da cabeça femoral, padrão de Ratliff tipo I",
      kind: "diagram",
    },
    {
      id: "fratura-colo-femoral-crianca:necrose-avascular",
      variant: "II",
      caption: "Ratliff tipo II — necrose parcial/segmentar da epífise por lesão de um único ramo retinacular.",
      alt: "Necrose avascular segmentar da cabeça femoral, padrão de Ratliff tipo II",
      kind: "diagram",
    },
    {
      id: "fratura-colo-femoral-crianca:necrose-avascular",
      variant: "III",
      caption:
        "Ratliff tipo III — necrose restrita ao colo, da fratura até a fise, com epífise poupada: o padrão de melhor prognóstico.",
      alt: "Necrose avascular do colo femoral com epífise preservada, padrão de Ratliff tipo III",
      kind: "diagram",
    },
  ],
  meta: {
    lastReviewed: "2026-07-14",
    sources: [
      "SBOT. Edital TEOT 2026: Bibliografia para o Exame de Título de Ortopedia e Traumatologia (Ortopedia Pediátrica).",
      "Waters PM, Skaggs DL, Flynn JM. Rockwood and Wilkins' Fractures in Children. 10th ed. 2024 — capítulo de fraturas do quadril na criança.",
      "Herring JA. Tachdjian's Pediatric Orthopaedics. 6th ed. 2022.",
      "Weinstein SL, Flynn JM. Lovell and Winter's Pediatric Orthopaedics. 8th ed. 2021.",
      "Hebert S, Lech O. Ortopedia e Traumatologia: Princípios e Prática. 6ª ed. 2025.",
    ],
    attribution:
      "Conteúdo original Revisortopedia; figuras esquemáticas originais, sem reprodução de material protegido.",
    figureReference:
      "Rockwood and Wilkins' Fractures in Children, 10a ed. (2024) / Tachdjian's Pediatric Orthopaedics 6a",
  },
});
