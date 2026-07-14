import { defineTopic } from "../../types/topic";

export const topic = defineTopic({
  id: "ortoped-pediatrica-antebraco-fratura-antebraco-crianca",
  slug: "fratura-antebraco-crianca",
  regionId: "ortopedia-pediatrica",
  bone: "Antebraço (criança)",
  injury: "Fratura do antebraço",
  title: "Fratura do antebraço na criança",
  subtitle:
    "Reconhecer os padrões toro, galho verde e completo, aplicar os critérios de aceitação por idade e nível confiando no potencial de remodelação, e escolher entre tala removível, redução com gesso e haste intramedular elástica.",
  laterality: null,
  status: "complete",
  overview:
    "A fratura do antebraço é a fratura mais comum da criança, com incidência crescente, e concentra-se no terço distal, sobretudo na metáfise do rádio. O osso imaturo tem periósteo espesso e resistente e falha de modos próprios: o toro (buckle), estável, por compressão da metáfise; o galho verde (greenstick), com ruptura de uma cortical e encurvamento da oposta; a deformidade plástica; e a fratura completa das duas corticais. A avaliação inclui exame neurovascular, atenção à dor desproporcional (síndrome compartimental) e radiografias em duas incidências que incluam cotovelo e punho para não perder uma lesão associada (Monteggia, Galeazzi).\n\nO ponto central do tratamento é o potencial de remodelação: maior quanto menor a idade, quanto mais próxima a fratura da fise ativa (a fise distal do rádio responde por cerca de 80% do crescimento do osso) e quando a deformidade está no plano de movimento da articulação vizinha — a rotação, porém, praticamente não remodela. Por isso, a maioria das fraturas é tratada sem cirurgia. As fraturas em toro, por serem estáveis, são hoje tratadas com tala removível e alta precoce, com dor e função equivalentes ao gesso. As fraturas desviadas dentro dos critérios de aceitação são reduzidas e imobilizadas com gesso bem moldado. A cirurgia, em geral com haste intramedular elástica (ESIN), fica reservada para desvios inaceitáveis, instabilidade, falha do tratamento fechado, fraturas expostas e o adolescente próximo da maturidade, no qual a remodelação já é limitada.",
  keyFacts: [
    { label: "Epidemiologia", value: "Fratura mais comum da infância; predomínio no terço distal" },
    { label: "Padrões", value: "Toro (buckle), galho verde, deformidade plástica, completa" },
    { label: "Remodelação", value: "Maior perto da fise, no plano de movimento e quanto menor a idade" },
    { label: "Rotação", value: "Praticamente não remodela — corrigir na redução" },
    { label: "Toro", value: "Estável: tala removível e alta, sem RX de rotina" },
    { label: "Cirurgia", value: "ESIN para desvio inaceitável, instabilidade ou falha do gesso" },
  ],
  anatomy: {
    text:
      "O antebraço funciona como uma articulação: rádio e ulna, unidos pela membrana interóssea e pelas articulações radioulnar proximal e distal, giram um sobre o outro na pronossupinação. Restaurar a curvatura radial (radial bow) e o comprimento relativo dos dois ossos é o que preserva essa rotação — por isso as fraturas diafisárias desviadas são menos tolerantes que as metafisárias distais.\n\nO osso da criança difere do adulto: é mais poroso e elástico, com periósteo espesso que costuma permanecer íntegro em um dos lados e serve tanto de dobradiça para a redução quanto de tirante que a estabiliza. As fises (placas de crescimento) nas extremidades são o motor da remodelação: a fise distal do rádio é a mais produtiva, responsável por cerca de 80% do crescimento longitudinal do osso, o que explica a enorme capacidade de corrigir deformidades metafisárias distais no plano sagital. Quanto mais próxima a fratura dessa fise e quanto mais anos de crescimento restam, maior a remodelação esperada.",
    figureIds: [
      "fratura-antebraco-crianca:anatomia",
      "fratura-antebraco-crianca:remodelacao",
    ],
  },
  classification: [
    {
      id: "padroes",
      name: "Padrões da fratura (osso imaturo)",
      basis: "Modo de falha do osso da criança, que determina estabilidade e conduta.",
      note:
        "O padrão define a estabilidade: o toro é estável e o galho verde e a fratura completa podem desangular. O periósteo íntegro no lado côncavo é aliado na redução.",
      types: [
        {
          code: "Toro",
          label: "Toro (buckle)",
          description:
            "Falha por compressão da metáfise com abaulamento cortical e ambas as corticais íntegras. É intrinsecamente estável e não desloca.",
          figureId: "fratura-antebraco-crianca:padroes",
          figureVariant: "toro",
        },
        {
          code: "GV",
          label: "Galho verde (greenstick)",
          description:
            "Ruptura da cortical de tração (convexa) com encurvamento da cortical de compressão (côncava). Guarda tendência a reangular pela cortical intacta.",
          figureId: "fratura-antebraco-crianca:padroes",
          figureVariant: "galho-verde",
        },
        {
          code: "Compl",
          label: "Completa",
          description:
            "Traço atravessa as duas corticais; pode desviar, encurtar e rodar. Inclui a deformidade plástica quando o osso se curva sem traço visível.",
          figureId: "fratura-antebraco-crianca:padroes",
          figureVariant: "completa",
        },
      ],
    },
    {
      id: "aceitacao",
      name: "Critérios de aceitação (angulação por nível e idade)",
      basis: "Angulação, desvio e rotação toleráveis conforme a remodelação esperada.",
      note:
        "São valores orientativos e não substituem o julgamento clínico: quanto menor a idade e mais próxima da fise, mais deformidade se aceita; a rotação é sempre pouco tolerada.",
      types: [
        {
          code: "< 9a",
          label: "Criança mais nova (< 9 anos)",
          description:
            "Grande remodelação: aceitam-se até cerca de 15–20° de angulação nas fraturas metafisárias/distais e 10–15° na diáfise, com correção do desvio e da rotação.",
          figureId: "fratura-antebraco-crianca:aceitacao",
        },
        {
          code: "≥ 9a",
          label: "Criança mais velha / adolescente (≥ 9 anos)",
          description:
            "Remodelação limitada: tolera-se cerca de 10° na diáfise e 10–15° na região distal; deformidade rotacional deve ser corrigida.",
          figureId: "fratura-antebraco-crianca:aceitacao",
        },
      ],
    },
  ],
  indications: {
    operative: [
      "Angulação, desvio ou encurtamento além dos critérios de aceitação para a idade e o nível, especialmente na diáfise.",
      "Fratura irredutível ou instável, com perda de redução no acompanhamento com gesso.",
      "Deformidade rotacional significativa, que não remodela.",
      "Adolescente próximo da maturidade esquelética, com pouca remodelação residual.",
      "Fratura exposta, lesão neurovascular, síndrome compartimental ou politrauma (\"cotovelo flutuante\").",
      "Refratura desviada e fraturas de ambos os ossos irredutíveis.",
    ],
    nonOperative: [
      "Fratura em toro (buckle): tala/órtese de punho removível, com alta precoce e sem radiografia de controle de rotina.",
      "Galho verde e fratura completa dentro dos critérios de aceitação: redução fechada e gesso bem moldado.",
      "Deformidade metafisária distal no plano sagital em criança nova, contando com a remodelação.",
    ],
    decisionNotes:
      "A decisão parte de três perguntas: qual o padrão (estável ou não), a deformidade cabe nos critérios de aceitação para esta idade e nível, e a redução se manterá? O toro é estável e resolve-se com tala removível. As fraturas desviadas dentro dos limites são reduzidas e moldadas em gesso, com controle radiográfico seriado nas primeiras duas semanas, período de maior risco de perda de redução. Quando o desvio é inaceitável, há instabilidade, falha do gesso ou o paciente está próximo da maturidade, indica-se fixação — a haste intramedular elástica (ESIN) é o método de escolha para a diáfise, reservando-se a placa para padrões cominutivos, refraturas ou o adolescente maior. Ensaios e revisões recentes não demonstram superioridade funcional consistente da ESIN sobre o gesso quando a redução fechada é adequada; a cirurgia troca imobilização por reabilitação mais rápida ao custo de reintervenção para retirada de material e riscos próprios.",
  },
  approaches: [
    {
      id: "tala-removivel",
      name: "Tala/órtese removível (fratura em toro)",
      indication:
        "Fratura em toro do rádio distal, estável. Tala de punho pré-fabricada ou órtese de velcro por cerca de 3 semanas, com retirada pelos pais e retorno conforme sintomas.",
      interval:
        "Sem manipulação: imobilização de conforto que permite banho e atividades, dispensando gesso e radiografia de controle de rotina.",
      atRisk: [],
      figureId: "fratura-antebraco-crianca:tala-removivel",
    },
    {
      id: "reducao-gesso",
      name: "Redução fechada e gesso moldado",
      indication:
        "Galho verde e fraturas completas desviadas dentro dos critérios de aceitação. Redução sob analgesia/sedação e gesso bem moldado (índice de gesso ≤ 0,7–0,8).",
      interval:
        "Tração longitudinal para desimpactar, reversão do desvio usando o periósteo íntegro como dobradiça e correção da rotação; moldagem em três pontos e confirmação radiográfica.",
      atRisk: [
        "Nervo mediano e interósseo anterior (desvio/edema)",
        "Compartimentos do antebraço (gesso apertado no edema agudo)",
      ],
      figureId: "fratura-antebraco-crianca:reducao-gesso",
    },
    {
      id: "esin",
      name: "Haste intramedular elástica (ESIN)",
      indication:
        "Fraturas diafisárias desviadas irredutíveis/instáveis, falha do gesso, refratura ou adolescente com remodelação limitada. Rádio pela entrada distal e ulna pela entrada proximal (olécrano).",
      interval:
        "Redução fechada (ou mini-aberta) e passagem retrógrada/anterógrada de haste pré-moldada; a curvatura da haste gera contato em três pontos e restaura a curvatura fisiológica do rádio.",
      atRisk: [
        "Ramo superficial do nervo radial (entrada distal do rádio)",
        "Tendões extensores no ponto de entrada",
        "Nervo interósseo posterior em manobras proximais",
      ],
      figureId: "fratura-antebraco-crianca:esin",
    },
  ],
  technique: [
    {
      n: 1,
      title: "Classificar o padrão e medir a deformidade",
      detail:
        "Identificar toro, galho verde, deformidade plástica ou fratura completa em radiografias com cotovelo e punho. Medir angulação nos dois planos, encurtamento e estimar rotação. Excluir Monteggia e Galeazzi.",
      figureId: "fratura-antebraco-crianca:padroes",
      figureVariant: "toro",
      tips: [
        "Sempre radiografar as duas articulações do antebraço",
        "Compare a curvatura radial (radial bow) com o lado contralateral quando houver dúvida",
      ],
      pitfalls: [
        "Perder uma Monteggia por não avaliar a cabeça do rádio no cotovelo",
        "Subestimar a rotação, que não remodela",
      ],
    },
    {
      n: 2,
      title: "Aplicar os critérios de aceitação por idade e nível",
      detail:
        "Confrontar a deformidade com os limites toleráveis para a idade e o nível. Em criança nova com deformidade metafisária distal no plano sagital, confiar na remodelação; na diáfise e no adolescente, ser mais exigente.",
      figureId: "fratura-antebraco-crianca:aceitacao",
      tips: [
        "Deformidade no plano de movimento remodela melhor que fora dele",
        "Quanto mais anos de crescimento restam, maior a correção esperada",
      ],
      pitfalls: [
        "Aceitar angulação diafisária como se fosse metafisária distal",
        "Contar com remodelação de rotação",
      ],
    },
    {
      n: 3,
      title: "Toro: imobilizar com tala removível",
      detail:
        "Confirmado o toro, aplicar tala/órtese de punho removível por cerca de 3 semanas. Orientar os pais quanto à retirada, ao retorno gradual às atividades e à ausência de necessidade de radiografia de controle de rotina.",
      figureId: "fratura-antebraco-crianca:tala-removivel",
      tips: [
        "Explicar que dor e função se equiparam ao gesso, com mais conforto",
        "Reforçar sinais de alarme para retorno (dor crescente, deformidade)",
      ],
      pitfalls: [
        "Imobilizar em gesso e agendar radiografias desnecessárias para um toro",
        "Rotular como toro uma fratura com traço cortical completo",
      ],
    },
    {
      n: 4,
      title: "Reduzir e moldar o gesso quando desviada",
      detail:
        "Sob analgesia/sedação, aplicar tração para desimpactar, reverter o desvio usando o periósteo íntegro como dobradiça e corrigir a rotação. Moldar o gesso em três pontos com bom índice de gesso e confirmar por radiografia.",
      figureId: "fratura-antebraco-crianca:reducao-gesso",
      tips: [
        "Índice de gesso ≤ 0,7–0,8 (relação largura sagital/coronal) prevê melhor manutenção",
        "No galho verde, completar a cortical pode reduzir a reangulação",
      ],
      pitfalls: [
        "Gesso mal moldado ou frouxo, que permite perda tardia de redução",
        "Gesso circunferencial apertado no edema agudo, com risco compartimental",
      ],
    },
    {
      n: 5,
      title: "Vigiar a manutenção da redução",
      detail:
        "Reavaliar com radiografias na primeira e segunda semanas, período de maior risco de reangulação. Considerar remanipulação ou cirurgia se o desvio ultrapassar os critérios de aceitação.",
      figureId: "fratura-antebraco-crianca:aceitacao",
      tips: [
        "A perda de redução é mais provável em fraturas de ambos os ossos e gesso mal moldado",
        "Decidir cedo pela troca de estratégia evita consolidação viciosa",
      ],
      pitfalls: [
        "Só perceber a perda de redução na consolidação",
        "Insistir no gesso após falha evidente de manutenção",
      ],
    },
    {
      n: 6,
      title: "Fixar com ESIN quando indicado",
      detail:
        "Nas fraturas diafisárias irredutíveis/instáveis ou no adolescente, estabilizar com haste elástica: rádio pela entrada distal e ulna pela entrada proximal. Pré-moldar a haste para contato em três pontos e restaurar a curvatura radial; imobilização leve por curto período no pós-operatório.",
      figureId: "fratura-antebraco-crianca:esin",
      tips: [
        "Diâmetro da haste ≈ 60–70% do canal medular estreito",
        "Considerar mini-abertura após 2–3 tentativas fechadas para evitar lesão de partes moles",
      ],
      pitfalls: [
        "Lesar o ramo superficial do nervo radial na entrada distal do rádio",
        "Não restaurar a curvatura radial, comprometendo a pronossupinação",
      ],
    },
  ],
  postop: {
    immobilization:
      "Toro: tala/órtese removível por cerca de 3 semanas. Redução com gesso: gesso antebraquiopalmar (ou axilopalmar em fraturas proximais/instáveis) por cerca de 4–6 semanas. ESIN: tala ou gesso leve por 2–4 semanas conforme a estabilidade, com retirada eletiva das hastes após consolidação (em geral 4–6 meses).",
    weightBearing:
      "Sem apoio de carga axial pelo membro superior no período inicial; retorno progressivo às atividades conforme consolidação e conforto.",
    rehab: [
      {
        window: "0–3 semanas",
        weightBearing: "Sem carga",
        focus: "Controle de edema e dor, mobilização ativa dos dedos e do ombro; vigilância neurovascular.",
      },
      {
        window: "3–6 semanas",
        weightBearing: "Sem carga a leve",
        focus: "Retirada da imobilização do toro e retomada de atividades; nas demais, manutenção da mobilidade de dedos e cotovelo.",
      },
      {
        window: "6–12 semanas",
        weightBearing: "Progressiva",
        focus: "Recuperação de pronossupinação e amplitude de punho e cotovelo; retorno gradual a esportes de contato conforme consolidação.",
      },
      {
        window: "3–6 meses",
        weightBearing: "Funcional plena",
        focus: "Fortalecimento e retorno completo; planejar retirada eletiva das hastes de ESIN quando indicada.",
      },
    ],
    followup:
      "Acompanhamento clínico e radiográfico até a consolidação, com atenção especial à reangulação nas primeiras semanas do tratamento com gesso. Orientar prevenção de refratura, evitando esportes de contato até a consolidação sólida e a remodelação cortical, pois o risco de refratura é maior nas fraturas diafisárias e no retorno precoce à atividade.",
  },
  complications: [
    {
      name: "Perda de redução / consolidação viciosa",
      detail:
        "Reangulação sob o gesso, sobretudo em fraturas de ambos os ossos e gesso mal moldado; a maioria das deformidades metafisárias distais em criança nova remodela, mas a diafisária e a rotacional podem deixar déficit de pronossupinação.",
      prevention: "Redução adequada, gesso bem moldado (bom índice de gesso) e radiografias seriadas precoces.",
    },
    {
      name: "Refratura",
      detail:
        "Nova fratura no mesmo local, mais comum nas fraturas diafisárias, no retorno precoce à atividade e após consolidação incompleta; a localização diafisária/terço distal é fator de risco também após ESIN.",
      prevention: "Consolidação sólida antes de esportes de contato e imobilização suficiente; evitar mobilização precoce excessiva.",
    },
    {
      name: "Síndrome compartimental",
      detail:
        "Dor desproporcional e crescente, agravada pela extensão passiva dos dedos; risco aumentado por gesso circunferencial apertado no edema agudo e em traumas de maior energia.",
      prevention: "Evitar gesso constritivo, valorizar a dor desproporcional e abrir/afrouxar a imobilização precocemente.",
    },
    {
      name: "Lesão neurológica",
      detail:
        "Neuropraxia do nervo interósseo anterior ou do mediano por desvio/edema; na ESIN, risco ao ramo superficial do nervo radial na entrada distal do rádio.",
      prevention: "Exame neurológico documentado antes e após a redução e escolha cuidadosa do ponto de entrada da haste.",
    },
    {
      name: "Perda de pronossupinação",
      detail:
        "Redução de rotação por consolidação viciosa rotacional, encurtamento relativo ou perda da curvatura radial nas fraturas diafisárias.",
      prevention: "Corrigir rotação na redução e restaurar a curvatura radial e o comprimento na fixação.",
    },
  ],
  evidence: [
    {
      id: "perry-2022-force",
      claim:
        "No ensaio multicêntrico FORCE (965 crianças de 4–15 anos com fratura em toro do rádio distal), oferecer uma bandagem macia com alta imediata foi equivalente à imobilização rígida com seguimento quanto à dor em 3 dias, sem diferença de dor ou função ao longo de 6 semanas.",
      takeaway:
        "A fratura em toro é estável e pode ser tratada com imobilização mínima removível e alta precoce, dispensando gesso e seguimento de rotina.",
      level: "I",
      studyType: "Ensaio clínico randomizado de equivalência multicêntrico",
      era: "atual",
      citation: {
        authors: "Perry DC, Achten J, Knight R, Appelbe D, Dutton SJ, Dritsaki M, et al.",
        title:
          "Immobilisation of torus fractures of the wrist in children (FORCE): a randomised controlled equivalence trial in the UK.",
        journal: "Lancet",
        year: 2022,
        pmid: "35780790",
        doi: "10.1016/S0140-6736(22)01015-7",
      },
    },
    {
      id: "plint-2006-tala-vs-gesso",
      claim:
        "Ensaio randomizado com 87 crianças (6–15 anos) mostrou que a tala removível proporcionou melhor funcionamento físico e menos dificuldade nas atividades que o gesso curto em fraturas em toro do punho, sem diferença de dor e sem refraturas.",
      takeaway:
        "A tala removível é superior em conforto e função à imobilização gessada no toro, sem comprometer a segurança.",
      level: "II",
      studyType: "Ensaio clínico randomizado",
      era: "classico",
      citation: {
        authors: "Plint AC, Perry JJ, Correll R, Gaboury I, Lawton L",
        title:
          "A randomized, controlled trial of removable splinting versus casting for wrist buckle fractures in children.",
        journal: "Pediatrics",
        year: 2006,
        pmid: "16510648",
        doi: "10.1542/peds.2005-0801",
      },
    },
    {
      id: "abraham-2008-cochrane",
      claim:
        "Revisão sistemática Cochrane (10 ensaios, 827 crianças) apoia a imobilização removível para fraturas em toro e questiona o uso rotineiro do gesso axilopalmar após redução; a fixação percutânea reduz a redislocação, mas sem benefício funcional comprovado a longo prazo.",
      takeaway:
        "A evidência favorece imobilização mínima no toro e imobilização abaixo do cotovelo nas fraturas reduzidas, sem ganho funcional claro da fixação.",
      level: "I",
      studyType: "Revisão sistemática de ensaios randomizados",
      era: "classico",
      citation: {
        authors: "Abraham A, Handoll HHG, Khan T",
        title: "Interventions for treating wrist fractures in children.",
        journal: "Cochrane Database Syst Rev",
        year: 2008,
        pmid: "18425904",
        doi: "10.1002/14651858.CD004576.pub2",
      },
    },
    {
      id: "sinikumpu-2014-nao-operatorio",
      claim:
        "Estudo caso-controle de base populacional com seguimento médio de 11 anos mostrou que fraturas diafisárias de ambos os ossos tratadas sem cirurgia na infância evoluíram com excelente pronossupinação, força de preensão e mobilidade do punho equivalentes aos controles.",
      takeaway:
        "O tratamento conservador de fraturas diafisárias do antebraço na criança pode dar excelente resultado funcional a longo prazo quando a redução é adequada.",
      level: "III",
      studyType: "Estudo caso-controle de base populacional",
      era: "atual",
      citation: {
        authors: "Sinikumpu JJ, Victorzon S, Antila E, Pokka T, Serlo W",
        title:
          "Nonoperatively treated forearm shaft fractures in children show good long-term recovery.",
        journal: "Acta Orthop",
        year: 2014,
        pmid: "25238437",
        doi: "10.3109/17453674.2014.961867",
      },
    },
    {
      id: "han-2018-refratura-esin",
      claim:
        "Em 267 crianças tratadas com ESIN, a refratura do antebraço foi incomum (11 casos); a análise multivariada apontou a localização da fratura (terço distal) como fator de risco independente para refratura.",
      takeaway:
        "A refratura após ESIN é rara, mas o nível distal aumenta o risco — reforça o cuidado com o retorno precoce à atividade nessas fraturas.",
      level: "IV",
      studyType: "Estudo de coorte retrospectivo",
      era: "atual",
      citation: {
        authors: "Han B, Wang Z, Li Y, Xu Y, Cai H",
        title:
          "Risk factors for refracture of the forearm in children treated with elastic stable intramedullary nailing.",
        journal: "Int Orthop",
        year: 2018,
        pmid: "30280215",
        doi: "10.1007/s00264-018-4184-4",
      },
    },
  ],
  pearls: [
    "A fratura em toro é estável: trate com tala removível e alta, sem gesso nem radiografia de controle de rotina.",
    "Confie na remodelação — maior perto da fise ativa, no plano de movimento e quanto menor a idade — mas nunca conte com ela para corrigir rotação.",
    "Sempre radiografe cotovelo e punho para não perder uma Monteggia ou Galeazzi associada.",
    "Um gesso bem moldado (índice de gesso ≤ 0,7–0,8) é a melhor defesa contra a perda de redução; reavalie na 1ª e 2ª semanas.",
    "ESIN é o método de escolha na diáfise instável; pré-molde a haste para restaurar a curvatura radial e a pronossupinação.",
  ],
  pitfalls: [
    "Imobilizar um toro em gesso e pedir radiografias de controle desnecessárias.",
    "Aceitar angulação diafisária com os mesmos limites da metáfise distal.",
    "Ignorar deformidade rotacional confiando que vai remodelar.",
    "Aplicar gesso circunferencial apertado no edema agudo e subestimar a dor desproporcional (síndrome compartimental).",
    "Liberar esporte de contato antes da consolidação sólida, favorecendo a refratura.",
  ],
  figures: [
    {
      id: "fratura-antebraco-crianca:anatomia",
      caption:
        "Antebraço imaturo em AP: rádio e ulna com as fises proximais e distais; a fise distal do rádio responde por cerca de 80% do crescimento.",
      alt: "Anatomia do antebraço da criança com as placas de crescimento",
      kind: "diagram",
    },
    {
      id: "fratura-antebraco-crianca:remodelacao",
      caption:
        "Remodelação de deformidade metafisária ao longo de 12–24 meses: correção maior perto da fise e no plano de movimento; a rotação não remodela.",
      alt: "Sequência de remodelação de uma consolidação viciosa do rádio distal",
      kind: "diagram",
    },
    {
      id: "fratura-antebraco-crianca:padroes",
      variant: "toro",
      caption: "Toro (buckle): compressão da metáfise com abaulamento cortical e corticais íntegras — fratura estável.",
      alt: "Padrão de fratura em toro do antebraço",
      kind: "diagram",
    },
    {
      id: "fratura-antebraco-crianca:padroes",
      variant: "galho-verde",
      caption: "Galho verde: cortical de tração rompida e cortical de compressão apenas encurvada.",
      alt: "Padrão de fratura em galho verde do antebraço",
      kind: "diagram",
    },
    {
      id: "fratura-antebraco-crianca:padroes",
      variant: "completa",
      caption: "Fratura completa: traço atravessa as duas corticais, com potencial de desvio, encurtamento e rotação.",
      alt: "Padrão de fratura completa do antebraço",
      kind: "diagram",
    },
    {
      id: "fratura-antebraco-crianca:aceitacao",
      caption:
        "Limites orientativos de angulação aceitável por nível e idade; a rotação é sempre pouco tolerada.",
      alt: "Critérios de aceitação de angulação por idade e nível",
      kind: "diagram",
    },
    {
      id: "fratura-antebraco-crianca:reducao-gesso",
      caption:
        "Redução fechada por tração e reversão do desvio, seguida de gesso moldado em três pontos com índice de gesso adequado.",
      alt: "Redução fechada e gesso moldado do antebraço na criança",
      kind: "diagram",
    },
    {
      id: "fratura-antebraco-crianca:esin",
      caption:
        "Haste intramedular elástica (ESIN): rádio pela entrada distal e ulna pela proximal, com curvatura pré-moldada em três pontos.",
      alt: "Fixação com haste intramedular elástica do antebraço",
      kind: "diagram",
    },
    {
      id: "fratura-antebraco-crianca:tala-removivel",
      caption:
        "Fratura em toro tratada com tala/órtese de punho removível: conforto e função equivalentes ao gesso, com alta precoce.",
      alt: "Tala de punho removível para fratura em toro",
      kind: "diagram",
    },
  ],
  meta: {
    lastReviewed: "2026-07-13",
    sources: [
      "SBOT. Edital TEOT 2026: Bibliografia para o 55º Exame de Título de Ortopedia e Traumatologia — Ortopedia Pediátrica.",
      "Waters PM, Skaggs DL, Flynn JM. Rockwood and Wilkins' Fractures in Children. 10th ed. 2024.",
      "Herring JA. Tachdjian's Pediatric Orthopaedics. 6th ed. 2022.",
      "Weinstein SL, Flynn JM. Lovell and Winter's Pediatric Orthopaedics. 8th ed. 2021.",
      "Hebert S, Lech O, et al. Ortopedia e Traumatologia: princípios e prática. 6ª ed. 2025.",
    ],
    attribution:
      "Conteúdo original Revisortopedia; figuras esquemáticas originais (line-art), não reprodução de imagens protegidas.",
    figureReference: "Rockwood and Wilkins' Fractures in Children, 10ª ed. (2024)",
  },
});
