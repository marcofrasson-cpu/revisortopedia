import { defineTopic } from "../../types/topic";

/* ============================================================================
   Fratura da patela — membro inferior / joelho.
   Conteúdo clínico pt-BR, terminologia AO/OTA. Evidência recuperada do PubMed
   (ver DOIs verificados). Figuras SVG originais prefixadas por "fratura-patela:".
   ========================================================================== */

export const topic = defineTopic({
  id: "mi-joelho-fratura-patela",
  slug: "fratura-patela",
  regionId: "membro-inferior",
  bone: "Joelho",
  injury: "Fratura patelar",
  title: "Fratura da patela",
  subtitle:
    "Restaurar a superfície articular, a competência do mecanismo extensor e permitir mobilização precoce.",
  laterality: null,
  status: "complete",
  overview:
    "A patela é o maior osso sesamoide do corpo e a polia central do mecanismo extensor: aumenta o braço de alavanca do quadríceps e transmite a força de extensão à tuberosidade tibial pelo tendão patelar. Suas fraturas resultam de trauma direto (queda sobre o joelho fletido, painel do carro) ou indireto por contração excêntrica violenta do quadríceps, que produz o padrão transverso clássico com falha por tração. A decisão terapêutica gira em torno de duas perguntas: o mecanismo extensor está competente (o paciente consegue estender ativamente / elevar a perna estendida contra a gravidade?) e há degrau articular significativo? Fraturas sem desvio com extensão ativa preservada são tratadas sem cirurgia; desvio articular, descontinuidade do mecanismo extensor ou fragmentação exigem fixação. A banda de tensão anterior continua o princípio biomecânico de referência — converte a tração anterior do extensor em compressão na superfície articular durante a flexão — enquanto os parafusos canulados (isolados ou associados à banda) e as placas de baixo perfil reduzem as complicações relacionadas ao implante. A proeminência sintomática de material é a complicação mais frequente e a principal causa de reoperação.",
  keyFacts: [
    { label: "Função", value: "Sesamoide-polia: amplia o braço de alavanca do quadríceps" },
    { label: "Pergunta-chave", value: "Mecanismo extensor competente? (elevação da perna estendida)" },
    { label: "Padrão clássico", value: "Transversa por tração (falha em tensão)" },
    { label: "Meta articular", value: "Reduzir degrau articular a ≤ 1–2 mm" },
    { label: "Fixação de referência", value: "Banda de tensão anterior ± parafusos canulados" },
    { label: "Complicação mais comum", value: "Proeminência sintomática do implante → reoperação" },
  ],
  anatomy: {
    text:
      "A patela é o maior osso sesamoide do organismo, embutida no tendão do quadríceps. Sua superfície posterior é articular, revestida pela cartilagem mais espessa do corpo, e dividida por uma crista vertical em facetas medial e lateral que se articulam com a tróclea femoral. A superfície anterior é extra-articular e recebe as fibras superficiais do tendão quadricipital, que a cruzam até se continuarem no tendão patelar. O polo superior (base) ancora o tendão do quadríceps; o polo inferior (ápice) é extra-articular e dá origem ao tendão patelar, que se insere na tuberosidade tibial. Lateral e medialmente, os retináculos patelares (expansões dos vastos) constituem um mecanismo extensor acessório: quando íntegros, permitem extensão ativa mesmo diante de uma fratura patelar transversa — daí a importância de testá-los. O conjunto quadríceps → patela → tendão patelar → tuberosidade forma o mecanismo extensor, cuja continuidade é a questão central do trauma patelar. A vascularização provém de um anel anastomótico peripatelar alimentado sobretudo pelo polo inferior e pela porção distal; a dissecção deve poupar esse aporte, evitando a devascularização (risco de osteonecrose, sobretudo do fragmento proximal). Biomecanicamente, a patela sofre forças de tração que tendem a abrir o foco anteriormente; por isso a fixação eficaz neutraliza a tração na cortical anterior e gera compressão na superfície articular durante a flexão — o princípio da banda de tensão.",
    figureIds: ["fratura-patela:anatomia", "fratura-patela:mecanismo-extensor"],
  },
  classification: [
    {
      id: "morfologica",
      name: "Morfológica (padrão do traço)",
      basis:
        "Descreve a geometria da fratura e orienta a estratégia de fixação; distingue os padrões de tração (transverso) dos de trauma direto (cominutivo/estelado) e os polares.",
      note:
        "É a linguagem prática do centro cirúrgico: define se a banda de tensão isolada basta, se há cominução a proteger com cerclagem/placa e se o mecanismo extensor está em risco.",
      types: [
        {
          code: "Transversa",
          label: "Falha por tração",
          description:
            "Traço equatorial único por contração excêntrica do quadríceps. Padrão mais comum; costuma desviar e romper os retináculos, com perda da extensão ativa. Alvo ideal da banda de tensão anterior.",
          figureId: "fratura-patela:padroes",
          figureVariant: "transversa",
        },
        {
          code: "Cominutiva / estelada",
          label: "Trauma direto de alta energia",
          description:
            "Múltiplos fragmentos por impacto direto. Frequente lesão condral associada; exige reconstrução articular, muitas vezes com cerclagem periférica, parafusos e/ou placa, reservando a excisão para fragmentos pequenos irreparáveis.",
          figureId: "fratura-patela:padroes",
          figureVariant: "cominutiva",
        },
        {
          code: "Polo inferior",
          label: "Fratura polar distal (extra-articular)",
          description:
            "Avulsão/cominução do ápice patelar, geralmente extra-articular. Fragmento distal com frequência pequeno e multifragmentado — candidato a fixação com âncoras/sutura transóssea ou, em último caso, patelectomia parcial com reinserção do tendão.",
          figureId: "fratura-patela:padroes",
          figureVariant: "polo-inferior",
        },
        {
          code: "Vertical / marginal",
          label: "Traço sagital",
          description:
            "Fratura no plano sagital; o mecanismo extensor costuma permanecer competente (extensão ativa preservada). Sem desvio, é frequentemente tratada sem cirurgia; com desvio articular, fixa-se com parafusos transversos.",
          figureId: "fratura-patela:padroes",
          figureVariant: "vertical",
        },
      ],
    },
    {
      id: "ao-ota-34",
      name: "AO/OTA 34 (patela)",
      basis:
        "Codifica o envolvimento da superfície articular — extra-articular (A), parcial articular (B) e articular completa (C) — padronizando registro e comunicação.",
      note: "A/B/C refletem, na prática, a progressão do envolvimento articular e da complexidade de reconstrução.",
      types: [
        {
          code: "34-A",
          label: "Extra-articular",
          description:
            "Avulsões e fraturas polares que poupam a superfície articular (ex.: avulsão do polo inferior, arrancamento do quadríceps).",
          figureId: "fratura-patela:ao-ota",
          figureVariant: "A",
        },
        {
          code: "34-B",
          label: "Parcial articular",
          description:
            "Um dos pilares articulares permanece intacto (ex.: fratura vertical/marginal), com parte da superfície ainda em continuidade.",
          figureId: "fratura-patela:ao-ota",
          figureVariant: "B",
        },
        {
          code: "34-C",
          label: "Articular completa",
          description:
            "Ambos os pilares comprometidos — inclui as transversas deslocadas e as cominutivas; grupo que mais exige reconstrução articular anatômica.",
          figureId: "fratura-patela:ao-ota",
          figureVariant: "C",
        },
      ],
    },
  ],
  indications: {
    operative: [
      "Perda da extensão ativa / incompetência do mecanismo extensor (elevação da perna estendida impossível).",
      "Degrau articular > 2 mm ou diástase interfragmentária > 3 mm.",
      "Fratura exposta ou lesão associada que exija abordagem cirúrgica.",
      "Fratura cominutiva ou estelada deslocada com incongruência articular.",
      "Avulsão deslocada do polo inferior com descontinuidade do tendão patelar.",
      "Fratura osteocondral com fragmento livre intra-articular.",
    ],
    nonOperative: [
      "Fratura sem desvio (ou com desvio mínimo) e mecanismo extensor competente — extensão ativa completa preservada.",
      "Degrau articular ≤ 1–2 mm e diástase ≤ 3 mm.",
      "Fratura vertical não deslocada, com retináculos íntegros.",
      "Paciente de alto risco cirúrgico com fratura estável, aceitando imobilização em extensão.",
    ],
    decisionNotes:
      "A decisão repousa em dois eixos: a competência do mecanismo extensor e o grau de incongruência articular. O teste decisivo à beira do leito é a extensão ativa contra a gravidade (elevação da perna estendida) — se preservada, os retináculos estão competentes e o padrão sem desvio pode ser tratado com imobilização em extensão e carga conforme tolerada, com bons resultados. A anestesia intra-articular (infiltração do hemartro) pode desmascarar uma extensão preservada mascarada pela dor. Perda da extensão ativa, degrau/diástase articular além do limiar ou exposição indicam cirurgia. A escolha do implante segue o padrão: a banda de tensão anterior (fios K ou parafusos canulados) domina as transversas; a cominução exige cerclagem periférica, parafusos de minifragmento e, cada vez mais, placas anteriores/de borda lateral de baixo perfil; o polo inferior avulsionado favorece âncoras/sutura transóssea, deixando a patelectomia parcial como recurso para fragmentos irreparáveis. Em todos, prioriza-se uma construção estável o bastante para mobilização precoce.",
  },
  approaches: [
    {
      id: "anterior-longitudinal",
      name: "Acesso anterior longitudinal mediano",
      indication:
        "Via de eleição para a maioria das fraturas: expõe toda a patela, os retináculos e permite palpar/ver a redução articular pela fratura ou por artrotomia.",
      interval:
        "Incisão longitudinal mediana sobre a patela, do polo superior ao tendão patelar; dissecção direta através do tecido subcutâneo até o mecanismo extensor, preservando retalhos de espessura total.",
      atRisk: [
        "Ramo infrapatelar do nervo safeno (dormência lateral à cicatriz)",
        "Retalhos cutâneos finos — risco de necrose de borda",
      ],
      figureId: "fratura-patela:acesso-anterior",
    },
  ],
  technique: [
    {
      n: 1,
      title: "Posicionamento, exposição e limpeza do foco",
      detail:
        "Paciente em decúbito dorsal, joelho em leve flexão sobre coxim; garrote conforme necessidade. Incisão anterior mediana, elevação de retalhos de espessura total. Evacuar o hematoma, irrigar e remover pequenos fragmentos osteocondrais soltos; identificar as rupturas retinaculares para reparo ao final.",
      figureId: "fratura-patela:acesso-anterior",
      tips: [
        "Palpar a superfície articular pela linha de fratura (ou por pequena artrotomia parapatelar) para julgar a redução.",
        "Preservar as inserções de partes moles do polo inferior para não devascularizar o osso.",
      ],
      pitfalls: [
        "Descolar retalhos finos ou subcutâneos favorece necrose de pele e deiscência.",
        "Ignorar fragmentos condrais livres deixa corpo livre intra-articular.",
      ],
    },
    {
      n: 2,
      title: "Redução anatômica e fixação provisória",
      detail:
        "Reduzir os fragmentos com pinças de redução pontiagudas (towel clips) aplicadas nos polos, restaurando a congruência articular. Confirmar a ausência de degrau na superfície posterior por palpação/visão direta e por fluoroscopia em perfil. Manter com fios de Kirschner provisórios quando útil.",
      figureId: "fratura-patela:step-reducao",
      tips: [
        "A incidência de perfil é a mais sensível para degrau articular residual.",
        "Reduzir a partir da superfície articular (a referência confiável), não pela cortical anterior irregular.",
      ],
      pitfalls: [
        "Aceitar redução julgada só pela cortical anterior mascara degrau articular posterior.",
        "Excesso de pinças em osso osteoporótico fragmenta os polos.",
      ],
    },
    {
      n: 3,
      title: "Banda de tensão com fios de Kirschner",
      detail:
        "Passar dois fios de Kirschner longitudinais paralelos atravessando ambos os fragmentos; à frente do osso, aplicar um fio de cerclagem em oito (figure-of-eight) ancorado nas pontas dos fios. Ao tensionar, a força de tração anterior do extensor converte-se em compressão na superfície articular durante a flexão.",
      figureId: "fratura-patela:banda-tensao",
      figureVariant: "k-wire",
      tips: [
        "Dobrar e enterrar as pontas dos fios K no polo superior reduz a proeminência e a migração.",
        "Tensionar o fio de cerclagem em dois pontos distribui melhor a compressão.",
      ],
      pitfalls: [
        "Fios longos/proeminentes são a causa clássica de dor e migração de material.",
        "Cerclagem frouxa não gera compressão e permite abertura do foco à flexão.",
      ],
    },
    {
      n: 4,
      title: "Banda de tensão com parafusos canulados",
      detail:
        "Alternativa biomecanicamente robusta: dois parafusos canulados paralelos comprimem o foco e servem de trilho para o fio de cerclagem, que passa pela canulação e é atado em oito na face anterior. Combina compressão interfragmentária dos parafusos com o princípio da banda de tensão.",
      figureId: "fratura-patela:banda-tensao",
      figureVariant: "parafuso",
      tips: [
        "Parafusos canulados com fio pela canulação reduzem a proeminência e a taxa de retirada frente aos fios K.",
        "Aferir o comprimento do parafuso para não protruir no polo oposto.",
      ],
      pitfalls: [
        "Parafuso longo protruindo no polo superior causa dor e conflito.",
        "Rosca cruzando ambos os fragmentos anula a compressão interfragmentária.",
      ],
    },
    {
      n: 5,
      title: "Cominução — cerclagem, minifragmentos e placas",
      detail:
        "Na fratura cominutiva/estelada, reconstruir primeiro a superfície articular com parafusos de minifragmento e complementar com cerclagem periférica e/ou placa anterior ou de borda lateral de baixo perfil, que oferecem maior estabilidade sob carga cíclica do que a banda de tensão isolada nos padrões complexos.",
      figureId: "fratura-patela:banda-tensao",
      tips: [
        "Montar o quebra-cabeça articular como bloco e só então neutralizar com placa/cerclagem.",
        "Placas de baixo perfil ajudam quando a cominução impede a banda de tensão clássica.",
      ],
      pitfalls: [
        "Confiar apenas na banda de tensão em cominução deixa fragmentos centrais instáveis.",
        "Excisar fragmentos articulares grandes compromete a superfície e o resultado.",
      ],
    },
    {
      n: 6,
      title: "Polo inferior — fixação com âncoras / sutura transóssea",
      detail:
        "Para a avulsão do polo inferior, quando o fragmento distal é pequeno ou multifragmentado, reinserir o tendão patelar no polo com âncoras ou sutura transóssea (fio forte em Krackow no tendão, passado por túneis longitudinais no fragmento proximal), preservando osso — desfecho não inferior à patelectomia parcial, com menor tempo cirúrgico.",
      figureId: "fratura-patela:patelectomia-parcial",
      tips: [
        "Preservar osso melhora o braço de alavanca e evita alterar a altura patelar.",
        "Reinserir o tendão rente à margem articular distal para não gerar patela baixa.",
      ],
      pitfalls: [
        "Reinserção proximal demais encurta a patela funcional e altera a cinemática.",
        "Sutura frouxa permite diástase e falha do mecanismo extensor.",
      ],
    },
    {
      n: 7,
      title: "Patelectomia parcial — recurso para fragmento irreparável",
      detail:
        "Reservada ao polo inferior irremediavelmente cominutivo: excisar os fragmentos pequenos e reinserir o tendão patelar no maior fragmento remanescente por túneis transósseos, mantendo a inserção rente à superfície articular. Preservar o máximo de patela; evitar a patelectomia total, de piores resultados.",
      figureId: "fratura-patela:patelectomia-parcial",
      tips: [
        "Manter a reinserção junto à margem articular evita a patela baixa (patella infera).",
        "Optar por bandas ósseas em vez de patelectomia total sempre que possível.",
      ],
      pitfalls: [
        "Ressecar osso demais reduz o braço de alavanca extensor e a força.",
        "Reinserir com o tendão sob tensão excessiva restringe a flexão.",
      ],
    },
    {
      n: 8,
      title: "Reparo retinacular, checagem e fechamento",
      detail:
        "Reparar as rupturas retinaculares medial e lateral, restaurando o mecanismo extensor acessório. Testar a estabilidade da fixação e a amplitude passiva sob visão direta e fluoroscopia (perfil e axial), confirmando ausência de degrau e de penetração intra-articular de implante. Fechar por planos sobre a construção estável.",
      figureId: "fratura-patela:step-reducao",
      tips: [
        "Fletir o joelho no intraoperatório testa a solidez da banda de tensão antes de fechar.",
        "Incidência axial ajuda a excluir parafuso/fio intra-articular.",
      ],
      pitfalls: [
        "Deixar retináculos não reparados perpetua déficit de extensão e desvio.",
        "Não rastrear penetração articular do implante condena a cartilagem.",
      ],
    },
  ],
  postop: {
    immobilization:
      "Imobilizador de joelho em extensão ou órtese articulada bloqueada nas primeiras semanas para proteger a construção; o arco de movimento é liberado progressivamente conforme a estabilidade da fixação.",
    weightBearing:
      "Carga conforme tolerada com o joelho em extensão travada (imobilizador/órtese) é geralmente segura desde cedo em fixação estável, pois a patela sofre pouca carga em extensão; a flexão progressiva é que se libera de forma gradual.",
    rehab: [
      {
        window: "0–2 semanas",
        weightBearing: "Carga conforme tolerada em extensão travada",
        focus: "Controle do edema, isometria de quadríceps, mobilização de tornozelo, cuidado da ferida, prevenção de TVP.",
      },
      {
        window: "2–6 semanas",
        weightBearing: "Carga conforme tolerada; flexão progressiva 0–90°",
        focus: "Arco de movimento progressivo dentro do limite da fixação, ativação do quadríceps, elevação da perna estendida.",
      },
      {
        window: "6–12 semanas",
        weightBearing: "Carga total, desmame da órtese",
        focus: "Ganho de flexão além de 90°, fortalecimento progressivo do quadríceps em cadeia fechada, propriocepção.",
      },
      {
        window: "> 12 semanas",
        weightBearing: "Irrestrita",
        focus: "Retorno a atividades de impacto e esporte após consolidação e recuperação de força; endurance e agilidade.",
      },
    ],
    followup:
      "Radiografias seriadas (AP, perfil e axial) para confirmar manutenção da redução e consolidação. Vigiar dor por proeminência de implante — a causa mais comum de reoperação: a retirada seletiva após consolidação melhora a dor e a qualidade de vida, embora nem sempre os escores funcionais. Monitorar amplitude, força do quadríceps e sinais de artrose patelofemoral.",
  },
  complications: [
    {
      name: "Proeminência sintomática do implante",
      detail:
        "Dor por fios/cerclagem/parafusos subcutâneos sob a pele fina anterior; é a complicação mais frequente e a principal causa de reoperação, mais comum com fios de Kirschner do que com parafusos canulados.",
      prevention:
        "Enterrar/dobrar as pontas dos fios, preferir parafusos canulados com fio pela canulação, aferir o comprimento do implante; retirada seletiva após consolidação melhora a dor e a qualidade de vida.",
    },
    {
      name: "Falha / perda de fixação",
      detail:
        "Migração de fios, afrouxamento da cerclagem ou abertura do foco sob carga cíclica, sobretudo em cominução e osso osteoporótico, com perda da redução e do mecanismo extensor.",
      prevention:
        "Escolher a construção conforme o padrão (parafusos/placa na cominução), banda de tensão bem tensionada, mobilização progressiva controlada.",
    },
    {
      name: "Perda de amplitude / rigidez",
      detail:
        "Perda de flexão por imobilização prolongada, aderências ou dor; extensor lag por reparo insuficiente do mecanismo extensor.",
      prevention:
        "Fixação estável que permita mobilização precoce, reparo retinacular cuidadoso, reabilitação dirigida ao arco de movimento.",
    },
    {
      name: "Artrose patelofemoral pós-traumática",
      detail:
        "Consequência de degrau articular residual, lesão condral inicial ou incongruência da tróclea; poucos milímetros de degrau aumentam o estresse de contato.",
      prevention:
        "Redução articular anatômica (degrau ≤ 1–2 mm), remoção de corpos livres, preservação de osso.",
    },
    {
      name: "Infecção / problemas de ferida",
      detail:
        "Envelope de partes moles fino e subcutâneo sobre a patela; risco maior em fratura exposta, diabéticos e tabagistas.",
      prevention:
        "Retalhos de espessura total, técnica atraumática, antibioticoprofilaxia e manejo adequado das fraturas expostas.",
    },
    {
      name: "Osteonecrose / não consolidação",
      detail:
        "Devascularização do fragmento (sobretudo proximal) por dissecção excessiva pode levar a osteonecrose; a não consolidação é rara, mas ocorre em cominução e fixação instável.",
      prevention:
        "Preservar inserções de partes moles e o aporte peripatelar, obter fixação estável com compressão.",
    },
    {
      name: "Patela baixa (patella infera)",
      detail:
        "Reinserção do tendão patelar proximal demais após fixação/patelectomia parcial do polo inferior, encurtando a patela funcional e alterando a cinemática patelofemoral.",
      prevention:
        "Reinserir o tendão rente à margem articular distal, controlar a altura patelar (Insall-Salvati) no intraoperatório.",
    },
  ],
  evidence: [
    {
      id: "hoshino-2013",
      claim:
        "Em 448 fraturas, complicações graves foram incomuns com banda de tensão; implantes sintomáticos foram a complicação mais comum e ~2× mais frequentes com fios de Kirschner do que com parafusos canulados (retirada eletiva 37% vs 23%).",
      takeaway: "Parafusos canulados reduzem a proeminência sintomática e a necessidade de retirada frente aos fios K.",
      level: "III",
      studyType: "Coorte retrospectiva comparativa (JBJS Am)",
      era: "classico",
      citation: {
        authors: "Hoshino CM, Tran W, Tiberi JV, Black MH, Li BH, Gold SM, Navarro RA",
        title:
          "Complications following tension-band fixation of patellar fractures with cannulated screws compared with Kirschner wires",
        journal: "J Bone Joint Surg Am",
        year: 2013,
        pmid: "23553301",
        doi: "10.2106/JBJS.K.01549",
        url: "https://doi.org/10.2106/JBJS.K.01549",
      },
    },
    {
      id: "tijare-2025",
      claim:
        "Meta-análise de 14 estudos: a fixação com parafusos canulados, com ou sem banda de tensão, associou-se a melhores desfechos (flexão a 3 meses, VAS, Lysholm a 12 meses) e a menos complicações e retiradas de implante do que a banda de tensão com fios isolada.",
      takeaway: "Construções com parafuso canulado superam a banda de tensão clássica em desfecho e complicações.",
      level: "II",
      studyType: "Revisão sistemática e meta-análise (Arch Orthop Trauma Surg)",
      era: "atual",
      citation: {
        authors: "Tijare C, Joseph R, Boksh K, Divall P, Korim T, Aujla R",
        title:
          "Cannulated screws with and without tension band wiring versus tension banding wiring alone for fixation of patella fractures: a systematic review and meta-analysis",
        journal: "Arch Orthop Trauma Surg",
        year: 2025,
        pmid: "40601089",
        doi: "10.1007/s00402-025-05969-8",
        url: "https://doi.org/10.1007/s00402-025-05969-8",
      },
    },
    {
      id: "howatt-2021",
      claim:
        "Conceitos atuais: a patelectomia parcial para fraturas do polo inferior deve ser evitada em favor de procedimentos que preservam osso; a banda de tensão com parafusos canulados oferece menor taxa de reoperação e melhores escores que a banda com fios K.",
      takeaway: "Preservar osso no polo inferior e preferir parafusos canulados à banda com fios K.",
      level: "V",
      studyType: "Revisão de conceitos atuais (JBJS Am)",
      era: "atual",
      citation: {
        authors: "Howatt J, Liew AS, Wilkin G",
        title: "Patellar Fractures: Anatomy, Mechanics, and Surgical Management",
        journal: "J Bone Joint Surg Am",
        year: 2021,
        pmid: "34570740",
        doi: "10.2106/JBJS.20.01478",
        url: "https://doi.org/10.2106/JBJS.20.01478",
      },
    },
    {
      id: "lebrun-2012",
      claim:
        "Aos ~6,5 anos após osteossíntese, persistem déficits funcionais e de força do quadríceps; a retirada de material sintomático foi necessária em 52% dos pacientes e 38% dos que mantiveram o implante relatavam dor relacionada a ele.",
      takeaway: "A dor por implante e o déficit funcional são frequentes e devem ser antecipados no aconselhamento.",
      level: "IV",
      studyType: "Coorte de desfechos funcionais (J Orthop Trauma)",
      era: "classico",
      citation: {
        authors: "LeBrun CT, Langford JR, Sagi HC",
        title: "Functional outcomes after operatively treated patella fractures",
        journal: "J Orthop Trauma",
        year: 2012,
        pmid: "22183197",
        doi: "10.1097/BOT.0b013e318228c1a1",
        url: "https://doi.org/10.1097/BOT.0b013e318228c1a1",
      },
    },
    {
      id: "warner-2024",
      claim:
        "Em estudo biomecânico pareado, a placa de borda lateral de ângulo variável travada proporcionou menor deslocamento articular e maior estabilidade sob carga cíclica que a banda de tensão, tanto em fraturas simples quanto complexas.",
      takeaway: "Placas de baixo perfil superam biomecanicamente a banda de tensão, sobretudo na cominução.",
      level: "V",
      studyType: "Estudo biomecânico cadavérico (Arch Orthop Trauma Surg)",
      era: "atual",
      citation: {
        authors: "Warner S, Sommer C, Zderic I, Woodburn W, Castle R, Penman J, Saura-Sanchez E, Helfet DL, Gueorguiev B, Stoffel K",
        title:
          "Lateral rim variable angle locked plating versus tension band wiring of simple and complex patella fractures: a biomechanical study",
        journal: "Arch Orthop Trauma Surg",
        year: 2024,
        pmid: "38520547",
        doi: "10.1007/s00402-024-05266-w",
        url: "https://doi.org/10.1007/s00402-024-05266-w",
      },
    },
  ],
  pearls: [
    "A pergunta central é a competência do mecanismo extensor: extensão ativa preservada (elevação da perna estendida) permite tratamento não cirúrgico no padrão sem desvio.",
    "Infiltrar anestésico no hemartro pode desmascarar uma extensão ativa mascarada pela dor.",
    "Reduza e julgue a fratura pela superfície articular (perfil), não pela cortical anterior irregular.",
    "A banda de tensão converte a tração anterior do extensor em compressão articular na flexão — teste fletindo o joelho antes de fechar.",
    "Parafusos canulados com fio pela canulação reduzem a proeminência sintomática frente aos fios de Kirschner.",
    "No polo inferior, preserve osso: âncoras/sutura transóssea são não inferiores à patelectomia parcial.",
    "Reinsira o tendão rente à margem articular distal para não criar patela baixa.",
  ],
  pitfalls: [
    "Julgar a redução só pela cortical anterior mascara degrau articular posterior.",
    "Fios K longos ou proeminentes — causa clássica de dor, migração e reoperação.",
    "Cerclagem frouxa não gera compressão e permite abertura do foco à flexão.",
    "Confiar apenas na banda de tensão em fratura cominutiva deixa fragmentos centrais instáveis.",
    "Dissecção excessiva do polo inferior devasculariza o osso e ameaça a consolidação.",
    "Reinserir o tendão patelar proximal demais cria patela baixa e altera a cinemática.",
    "Deixar retináculos rotos sem reparo perpetua déficit de extensão e desvio patelar.",
  ],
  figures: [
    {
      id: "fratura-patela:anatomia",
      caption: "Mecanismo extensor: quadríceps → patela → tendão patelar → tuberosidade tibial.",
      alt: "Vista frontal do ventre do quadríceps, tendão quadricipital, patela como sesamoide, retináculos, tendão patelar e tuberosidade tibial.",
    },
    {
      id: "fratura-patela:mecanismo-extensor",
      caption: "Teste de integridade do mecanismo extensor — elevação da perna estendida.",
      alt: "Perna sobre a mesa com o mecanismo extensor íntegro elevando o segmento tibial em extensão completa.",
      variant: "intact",
    },
    {
      id: "fratura-patela:mecanismo-extensor",
      caption: "Mecanismo extensor incompetente — extensor lag por descontinuidade.",
      alt: "Perna com descontinuidade do mecanismo extensor e queda do segmento tibial, ângulo de lag em relação à extensão completa.",
      variant: "deficit",
    },
    {
      id: "fratura-patela:padroes",
      caption: "Padrão transverso — falha por tração do quadríceps.",
      alt: "Patela com traço equatorial único e setas de tração do mecanismo extensor.",
      variant: "transversa",
    },
    {
      id: "fratura-patela:padroes",
      caption: "Padrão cominutivo/estelado — trauma direto de alta energia.",
      alt: "Patela com múltiplos traços de fratura em estrela por impacto direto.",
      variant: "cominutiva",
    },
    {
      id: "fratura-patela:padroes",
      caption: "Fratura do polo inferior (extra-articular).",
      alt: "Patela com traço baixo separando o polo inferior, geralmente extra-articular.",
      variant: "polo-inferior",
    },
    {
      id: "fratura-patela:padroes",
      caption: "Padrão vertical/sagital — mecanismo extensor frequentemente íntegro.",
      alt: "Patela com traço sagital vertical, retináculos e mecanismo extensor preservados.",
      variant: "vertical",
    },
    {
      id: "fratura-patela:ao-ota",
      caption: "AO/OTA 34-A — extra-articular.",
      alt: "Patela com fratura polar/avulsão que poupa a superfície articular.",
      variant: "A",
    },
    {
      id: "fratura-patela:ao-ota",
      caption: "AO/OTA 34-B — parcial articular.",
      alt: "Patela com fratura que mantém um pilar articular intacto.",
      variant: "B",
    },
    {
      id: "fratura-patela:ao-ota",
      caption: "AO/OTA 34-C — articular completa.",
      alt: "Patela com fratura envolvendo ambos os pilares e toda a superfície articular.",
      variant: "C",
    },
    {
      id: "fratura-patela:acesso-anterior",
      caption: "Acesso anterior longitudinal mediano sobre a patela.",
      alt: "Joelho em vista frontal com incisão longitudinal mediana e ramo infrapatelar do nervo safeno em risco.",
    },
    {
      id: "fratura-patela:step-reducao",
      caption: "Redução com pinça e checagem da congruência articular.",
      alt: "Fratura transversa reduzida por pinças pontiagudas com verificação do degrau na superfície articular.",
    },
    {
      id: "fratura-patela:banda-tensao",
      caption: "Banda de tensão com fios de Kirschner e cerclagem em oito.",
      alt: "Perfil da patela com dois fios K longitudinais e cerclagem em oito anterior convertendo tração em compressão articular.",
      variant: "k-wire",
    },
    {
      id: "fratura-patela:banda-tensao",
      caption: "Banda de tensão com parafusos canulados — fio em oito pela canulação.",
      alt: "Perfil da patela com dois parafusos canulados e fio de cerclagem em oito passado pela canulação.",
      variant: "parafuso",
    },
    {
      id: "fratura-patela:patelectomia-parcial",
      caption: "Patelectomia parcial do polo inferior e reinserção transóssea do tendão.",
      alt: "Fragmento patelar proximal preservado com túneis transósseos e tendão patelar reinserido rente à margem distal.",
    },
  ],
  meta: {
    lastReviewed: "2026-07-13",
    sources: [
      "Hoshino CM, et al. JBJS Am 2013 (fios K vs parafusos canulados — complicações)",
      "Tijare C, et al. Arch Orthop Trauma Surg 2025 (meta-análise parafuso ± banda vs banda isolada)",
      "Howatt J, et al. JBJS Am 2021 (conceitos atuais — preservação óssea / polo inferior)",
      "LeBrun CT, et al. J Orthop Trauma 2012 (desfechos funcionais e implante sintomático)",
      "Warner S, et al. Arch Orthop Trauma Surg 2024 (placa de borda lateral vs banda de tensão)",
      "Princípios AO de tratamento de fraturas (referência técnica)",
    ],
    attribution: "Evidência recuperada do PubMed. Ver DOIs citados.",
  },
});
