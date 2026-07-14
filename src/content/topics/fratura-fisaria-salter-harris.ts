import { defineTopic } from "../../types/topic";

export const topic = defineTopic({
  id: "op-fise-fratura-fisaria-salter-harris",
  slug: "fratura-fisaria-salter-harris",
  regionId: "ortopedia-pediatrica",
  bone: "Fise (criança)",
  injury: "Fratura fisária",
  title: "Fratura fisária (Salter-Harris)",
  subtitle:
    "Reconhecer a fise como zona de fraqueza, classificar corretamente e proteger o crescimento — reduzir com gentileza, restaurar a articulação nos tipos III e IV e vigiar a barra fisária.",
  laterality: null,
  status: "complete",
  overview:
    "A fise (placa de crescimento) é a estrutura mais frágil do esqueleto imaturo: sob carga, cede antes dos ligamentos e da cápsula, de modo que o que seria uma entorse no adulto costuma ser uma fratura fisária na criança. A separação ocorre habitualmente pela zona hipertrófica, poupando as camadas germinativa e proliferativa quando não há esmagamento — razão pela qual a maioria das fraturas fisárias consolida rápido e sem sequela de crescimento.\n\nA classificação de Salter-Harris organiza o padrão anatômico e antecipa o prognóstico. Os tipos I e II atravessam a fise (com ou sem fragmento metafisário de Thurston-Holland) e, em geral, têm bom prognóstico com tratamento fechado. Os tipos III e IV são intra-articulares e cruzam a camada germinativa, exigindo redução anatômica — da articulação e da própria fise — para reduzir o risco de barra óssea e degrau articular. O tipo V é um esmagamento axial da fise, muitas vezes reconhecido apenas em retrospecto, quando a parada de crescimento já se instalou; é o de pior prognóstico.\n\nO princípio que une o tema é a proteção do crescimento. A redução deve ser única e gentil — manipulações repetidas e forçadas lesam a camada germinativa; gap persistente após a redução sugere periósteo interposto. Toda fratura fisária, mesmo bem tratada, demanda seguimento até haver evidência de crescimento simétrico, pela linha de Park-Harris, para detectar precocemente a barra fisária e a consequente deformidade angular ou discrepância de comprimento.",
  keyFacts: [
    { label: "Zona de fraqueza", value: "Fise cede antes de ligamentos e cápsula" },
    { label: "Plano de clivagem", value: "Zona hipertrófica (poupa a germinativa)" },
    { label: "Mais comum", value: "Salter-Harris tipo II" },
    { label: "Articulares", value: "Tipos III e IV — redução anatômica" },
    { label: "Pior prognóstico", value: "Tipo V (esmagamento), diagnóstico retrospectivo" },
    { label: "Risco-chave", value: "Barra fisária → deformidade / discrepância" },
    { label: "Seguimento", value: "Linha de Park-Harris até crescimento simétrico" },
  ],
  anatomy: {
    text:
      "A fise é uma placa cartilaginosa organizada em zonas: a germinativa/reserva e a proliferativa, junto à epífise, respondem pelo crescimento longitudinal; a hipertrófica é a camada com maior conteúdo celular e menor matriz, biomecanicamente a mais frágil; a zona de calcificação provisória faz a transição para a metáfise. A camada germinativa é nutrida por vasos epifisários, o que explica por que a interrupção dessa vascularização (ou o esmagamento) compromete definitivamente o crescimento.\n\nNas fraturas fisárias típicas, o traço percorre a zona hipertrófica e poupa a germinativa — daí o bom prognóstico dos tipos I e II. O prognóstico piora quando o traço cruza a camada germinativa (tipos III e IV) ou quando há compressão axial que a esmaga (tipo V). A perda de continuidade da fise pode ser substituída por osso, formando uma barra (ponte) fisária que ancora a epífise à metáfise: uma barra periférica gera angulação progressiva, e uma barra central produz encurtamento com a fise adotando aspecto de cabana.",
    figureIds: [
      "fratura-fisaria-salter-harris:anatomia",
      "fratura-fisaria-salter-harris:barra-fisaria",
    ],
  },
  classification: [
    {
      id: "salter-harris",
      name: "Classificação de Salter-Harris (I–V)",
      basis: "Trajeto do traço em relação à fise, à metáfise e à epífise; base do prognóstico.",
      note:
        "Os tipos I e II poupam a camada germinativa e têm bom prognóstico; III e IV são intra-articulares e cruzam a germinativa; V é esmagamento axial. Ogden e Peterson ampliaram o esquema para lesões não contempladas por Salter-Harris.",
      types: [
        {
          code: "I",
          label: "Tipo I — separação transfisária",
          description:
            "Traço puramente pela fise, sem fragmento ósseo; pode ser pouco desviado e passar despercebido na radiografia. Bom prognóstico, salvo quando há comprometimento vascular (ex.: colo femoral).",
          figureId: "fratura-fisaria-salter-harris:classificacao",
          figureVariant: "i",
        },
        {
          code: "II",
          label: "Tipo II — fise + fragmento metafisário",
          description:
            "Atravessa a fise e sai pela metáfise, deixando o fragmento triangular de Thurston-Holland preso à epífise. É o tipo mais comum e, em geral, de bom prognóstico com tratamento fechado.",
          figureId: "fratura-fisaria-salter-harris:classificacao",
          figureVariant: "ii",
        },
        {
          code: "III",
          label: "Tipo III — fise + epífise (articular)",
          description:
            "Cruza parte da fise e a epífise até a superfície articular. Intra-articular e cruza a camada germinativa; exige redução anatômica da articulação e da fise.",
          figureId: "fratura-fisaria-salter-harris:classificacao",
          figureVariant: "iii",
        },
        {
          code: "IV",
          label: "Tipo IV — metáfise + fise + epífise",
          description:
            "Traço único que cruza os três compartimentos até a articulação. Alto risco de barra fisária e de degrau articular; requer redução anatômica e fixação estável.",
          figureId: "fratura-fisaria-salter-harris:classificacao",
          figureVariant: "iv",
        },
        {
          code: "V",
          label: "Tipo V — esmagamento",
          description:
            "Compressão axial que esmaga a fise sem traço evidente; frequentemente diagnosticado de forma retrospectiva pela parada de crescimento. É o de pior prognóstico.",
          figureId: "fratura-fisaria-salter-harris:classificacao",
          figureVariant: "v",
        },
      ],
    },
  ],
  indications: {
    operative: [
      "Fraturas articulares Salter-Harris III e IV com degrau ou incongruência — redução anatômica aberta e fixação.",
      "Tipos I e II irredutíveis ou instáveis por partes moles interpostas, ou com desvio residual inaceitável para o sítio e a idade.",
      "Gap fisário persistente após redução (suspeita de periósteo interposto) em fratura que exige congruência.",
      "Barra fisária estabelecida < 50% da área da fise, com crescimento remanescente significativo — ressecção com interposição.",
      "Deformidade angular ou discrepância já instaladas — epifisiodese controlada, osteotomia ou alongamento conforme o caso.",
    ],
    nonOperative: [
      "Tipos I e II não desviados ou reduzíveis e estáveis — imobilização e acompanhamento.",
      "Tipos III e IV verdadeiramente não desviados com congruência articular mantida, sob vigilância radiográfica estrita.",
      "Fraturas estáveis após redução fechada gentil que preserve o alinhamento articular e fisário.",
    ],
    decisionNotes:
      "A decisão parte do tipo de Salter-Harris e da presença de acometimento articular. Tipos I e II são majoritariamente tratados de forma fechada; a prioridade é uma redução única e gentil e a estabilidade. Tipos III e IV, por serem intra-articulares e cruzarem a camada germinativa, exigem redução anatômica — habitualmente aberta — com fixação que não atravesse a fise. Independentemente do tratamento inicial, o risco de parada de crescimento aumenta com o grau de desvio inicial e com o mecanismo de alta energia; por isso, o seguimento até crescimento simétrico é parte da conduta, não um detalhe. Diante de barra fisária, a idade, o tamanho e a localização da ponte, o crescimento remanescente e a deformidade já presente definem entre ressecção da barra, epifisiodese, osteotomia e alongamento.",
  },
  approaches: [
    {
      id: "reducao-fechada",
      name: "Redução fechada e imobilização",
      indication: "Tipos I e II desviados, redutíveis e estáveis.",
      interval:
        "Analgesia/sedação adequada e uma manobra suave que reverta o mecanismo de lesão; imobilização gessada moldada. Evitar tentativas repetidas e alavancas sobre a fise. Gap persistente > 3 mm levanta a suspeita de periósteo interposto.",
      atRisk: [
        "Camada germinativa lesada por manipulação forçada e repetida",
        "Periósteo interposto impedindo a redução",
        "Redesvio sob gesso em fraturas instáveis",
      ],
      figureId: "fratura-fisaria-salter-harris:reducao",
    },
    {
      id: "reducao-aberta-fixacao",
      name: "Redução aberta e fixação (SH III/IV)",
      indication: "Fraturas articulares desviadas ou instáveis que exigem congruência.",
      interval:
        "Abordagem que permita visão direta do traço articular; redução anatômica da superfície e da fise. Fixação com parafusos paralelos à fise — epífise a epífise e, no tipo IV, também metáfise a metáfise — sem atravessar a placa de crescimento. Quando cruzar a fise for inevitável, preferir fio liso fino.",
      atRisk: [
        "Iatrogenia à fise por implante que a atravessa",
        "Degrau articular residual",
        "Devascularização da epífise por dissecção excessiva",
      ],
      figureId: "fratura-fisaria-salter-harris:fixacao",
    },
    {
      id: "ressecao-barra",
      name: "Ressecção de barra fisária com interposição",
      indication: "Barra < 50% da fise com crescimento remanescente relevante.",
      interval:
        "Mapeamento prévio por RM/TC da localização e do tamanho da ponte. Ressecção da barra com interposição de gordura (ou outro material) para impedir a recorrência; associar correção da deformidade já existente quando indicado.",
      atRisk: [
        "Recorrência da ponte (tether secundário) por ressecção incompleta ou deslocamento do enxerto",
        "Lesão adicional da fise sadia remanescente",
        "Falha em barras extensas ou com pouco crescimento residual",
      ],
      figureId: "fratura-fisaria-salter-harris:barra-ressecao",
    },
  ],
  technique: [
    {
      n: 1,
      title: "Diagnosticar e classificar",
      detail:
        "Suspeitar de fratura fisária em toda criança com dor localizada sobre a fise após trauma, mesmo com radiografia aparentemente normal (tipo I pouco desviado). Obter incidências ortogonais; incidências oblíquas ajudam a demonstrar extensão metafisária ou articular. Classificar segundo Salter-Harris e definir se é intra-articular.",
      figureId: "fratura-fisaria-salter-harris:classificacao",
      figureVariant: "ii",
      tips: [
        "Dor sobre a fise com radiografia normal pode ser um SH-I — imobilizar e reavaliar",
        "Radiografia comparativa contralateral ajuda em fises complexas",
      ],
      pitfalls: [
        "Rotular como entorse uma fratura fisária tipo I",
        "Subestimar a extensão articular de um tipo III/IV em incidência única",
      ],
    },
    {
      n: 2,
      title: "Reduzir com gentileza",
      detail:
        "Nos tipos I e II desviados, realizar analgesia adequada e uma única manobra suave que reverta o mecanismo. Confirmar redução e estabilidade; se persistir gap fisário, suspeitar de periósteo interposto e reconsiderar a via de tratamento. Não repetir manipulações forçadas.",
      figureId: "fratura-fisaria-salter-harris:reducao",
      tips: [
        "Uma redução bem-feita e gentil vale mais que várias tentativas",
        "Modelar bem o gesso para evitar redesvio",
      ],
      pitfalls: [
        "Manipulação repetida e vigorosa lesando a camada germinativa",
        "Ignorar gap residual > 3 mm sugestivo de tecido interposto",
      ],
    },
    {
      n: 3,
      title: "Restaurar a articulação nos tipos III e IV",
      detail:
        "Nas fraturas intra-articulares, reduzir anatomicamente a superfície articular e a fise, sob visão direta quando necessário. Fixar com parafusos paralelos à fise (epífise a epífise e, no tipo IV, também metáfise a metáfise), sem atravessá-la. Se for indispensável cruzar a placa, usar fio liso de pequeno calibre.",
      figureId: "fratura-fisaria-salter-harris:fixacao",
      figureVariant: "iv",
      tips: [
        "O degrau articular e o alinhamento da fise devem ser corrigidos juntos",
        "Compressão interfragmentária na epífise melhora a estabilidade sem tocar a fise",
      ],
      pitfalls: [
        "Implante atravessando a fise e criando iatrogenia",
        "Aceitar degrau articular residual em fratura que cruza a germinativa",
      ],
    },
    {
      n: 4,
      title: "Vigiar o crescimento no seguimento",
      detail:
        "Manter acompanhamento clínico-radiográfico até haver evidência de crescimento simétrico. A linha de Park-Harris paralela à fise indica crescimento harmônico; sua convergência para a periferia sinaliza tethering por barra. Comparar comprimento e eixo com o lado contralateral.",
      figureId: "fratura-fisaria-salter-harris:linha-park-harris",
      tips: [
        "Uma linha de Park-Harris paralela é um bom sinal prognóstico",
        "Documentar eixo e comprimento comparativos em cada retorno",
      ],
      pitfalls: [
        "Dar alta precoce antes de comprovar crescimento simétrico",
        "Atribuir a deformidade tardia ao acaso e não à barra fisária",
      ],
    },
    {
      n: 5,
      title: "Tratar a barra fisária e a deformidade",
      detail:
        "Diante de barra estabelecida, mapear localização e tamanho por RM/TC. Se a ponte for < 50% da fise e restar crescimento significativo, considerar ressecção com interposição. Corrigir a deformidade instalada por epifisiodese contralateral/completa, osteotomia ou alongamento, conforme idade e magnitude.",
      figureId: "fratura-fisaria-salter-harris:barra-ressecao",
      tips: [
        "Tamanho e localização da barra, mais que o valor absoluto, guiam a decisão",
        "Interposição adequada reduz a recorrência da ponte",
      ],
      pitfalls: [
        "Indicar ressecção em barra extensa ou com pouco crescimento residual",
        "Recorrência por ressecção incompleta ou deslocamento do enxerto",
      ],
    },
  ],
  postop: {
    immobilization:
      "Imobilização gessada moldada após redução fechada, geralmente por 3-6 semanas conforme o sítio e a idade. Após fixação de SH III/IV, proteção articular até sinais de consolidação.",
    weightBearing:
      "Descarga e progressão conforme a localização (membro superior x inferior) e a estabilidade da fixação; retorno gradual às atividades após consolidação e recuperação de amplitude.",
    rehab: [
      {
        window: "0-4 semanas",
        weightBearing: "Conforme o sítio",
        focus: "Proteção da redução, controle de dor e edema, mobilidade das articulações livres.",
      },
      {
        window: "4-8 semanas",
        weightBearing: "Progressiva",
        focus: "Retirada da imobilização após consolidação; recuperação de amplitude articular ativa.",
      },
      {
        window: "2-6 meses",
        weightBearing: "Livre progressiva",
        focus: "Força, propriocepção e retorno gradual ao esporte conforme o membro acometido.",
      },
      {
        window: "6-24 meses",
        weightBearing: "Livre",
        focus: "Vigilância do crescimento: eixo, comprimento e linha de Park-Harris comparativos.",
      },
    ],
    followup:
      "Seguir até documentar crescimento simétrico ou maturidade esquelética. Radiografias periódicas comparativas para detectar barra fisária, deformidade angular ou discrepância de comprimento precocemente. Orientar a família sobre o risco tardio de distúrbio de crescimento mesmo com tratamento adequado.",
  },
  complications: [
    {
      name: "Barra (ponte) fisária",
      detail:
        "Substituição da fise por osso, ancorando epífise à metáfise. Barra periférica causa deformidade angular; barra central, encurtamento com fise em cabana.",
      prevention:
        "Redução gentil e anatômica (III/IV), evitar iatrogenia por implante transfisário e seguimento para detecção precoce.",
    },
    {
      name: "Parada de crescimento total",
      detail:
        "Fechamento prematuro difuso da fise, com discrepância de comprimento proporcional ao crescimento remanescente. Mais típico do tipo V e de lesões de alta energia.",
      prevention:
        "Reconhecer mecanismos de esmagamento, minimizar dano à camada germinativa e vigiar o crescimento.",
    },
    {
      name: "Deformidade angular e discrepância de comprimento",
      detail:
        "Consequência funcional da barra ou da parada parcial; magnitude depende do sítio, do crescimento residual e do tempo até o diagnóstico.",
      prevention:
        "Detecção precoce pela linha de Park-Harris e planejamento oportuno de ressecção, epifisiodese, osteotomia ou alongamento.",
    },
    {
      name: "Incongruência articular (SH III/IV)",
      detail:
        "Degrau articular residual em fraturas intra-articulares predispõe a dor e artrose precoce.",
      prevention: "Redução anatômica da superfície articular e fixação estável.",
    },
  ],
  evidence: [
    {
      id: "cass-peterson-1983-sh4-tibia",
      claim:
        "Em Salter-Harris IV do maléolo medial da tíbia distal, metade dos casos evoluiu com fechamento fisário parcial precoce, gerando deformidade angular ou discrepância que exigiu cirurgia.",
      takeaway:
        "As fraturas fisárias articulares que cruzam a germinativa têm alto risco de barra e deformidade — reforçando a necessidade de redução anatômica e seguimento prolongado.",
      level: "IV",
      studyType: "Série de casos retrospectiva",
      era: "classico",
      citation: {
        authors: "Cass JR, Peterson HA",
        title:
          "Salter-Harris Type-IV injuries of the distal tibial epiphyseal growth plate, with emphasis on those involving the medial malleolus.",
        journal: "J Bone Joint Surg Am",
        year: 1983,
        pmid: "6630250",
      },
    },
    {
      id: "leary-2009-preditores-ppc",
      claim:
        "Em 124 fraturas fisárias da tíbia distal, o desvio inicial e o mecanismo de lesão foram preditores estatisticamente significativos de fechamento fisário precoce, com risco relativo de 1,15 por milímetro de desvio inicial.",
      takeaway:
        "O grau de desvio inicial e a energia do trauma — não apenas o tipo — modulam o risco de parada de crescimento e devem guiar a intensidade do seguimento.",
      level: "III",
      studyType: "Coorte retrospectiva com regressão multivariada",
      era: "classico",
      citation: {
        authors: "Leary JT, Handling M, Talerico M, Yong L, Bowe JA",
        title:
          "Physeal fractures of the distal tibia: predictive factors of premature physeal closure and growth arrest.",
        journal: "J Pediatr Orthop",
        year: 2009,
        pmid: "19461377",
        doi: "10.1097/BPO.0b013e3181a6bfe8",
      },
    },
    {
      id: "binkley-2019-sh2-padrao",
      claim:
        "Entre fraturas Salter-Harris II do tornozelo, o padrão importou: lesões por pronação-rotação externa tiveram maior taxa de fechamento fisário precoce com deformidade angular (odds ratio de 25) que os demais padrões.",
      takeaway:
        "Mesmo dentro do tipo II, o padrão e o mecanismo estratificam o risco de deformidade — o prognóstico não se resume ao número da classificação.",
      level: "III",
      studyType: "Coorte retrospectiva prognóstica",
      era: "atual",
      citation: {
        authors: "Binkley A, Mehlman CT, Freeh E",
        title: "Salter-Harris II Ankle Fractures in Children: Does Fracture Pattern Matter?",
        journal: "J Orthop Trauma",
        year: 2019,
        pmid: "30633083",
        doi: "10.1097/BOT.0000000000001422",
      },
    },
    {
      id: "podeszwa-mubarak-2012-principios",
      claim:
        "Fraturas fisárias não desviadas da tíbia/fíbula distal podem ser tratadas de forma fechada; gap > 3 mm após redução sugere periósteo interposto, e SH III/IV desviados exigem redução aberta para manter a congruência e reduzir o risco de barra.",
      takeaway:
        "Redução única e gentil, atenção ao gap residual e redução anatômica dos padrões articulares são os princípios de conduta que protegem a fise.",
      level: "V",
      studyType: "Revisão de princípios (opinião de especialista)",
      era: "atual",
      citation: {
        authors: "Podeszwa DA, Mubarak SJ",
        title:
          "Physeal fractures of the distal tibia and fibula (Salter-Harris Type I, II, III, and IV fractures).",
        journal: "J Pediatr Orthop",
        year: 2012,
        pmid: "22588106",
        doi: "10.1097/BPO.0b013e318254c7e5",
      },
    },
    {
      id: "hasler-foster-2002-tether",
      claim:
        "Após ressecção de barra fisária com interposição de gordura, resultados apenas regulares ou ruins ocorreram na maioria dos pacientes, frequentemente por tether secundário (ressecção incompleta ou recorrência da ponte, às vezes por deslocamento do enxerto).",
      takeaway:
        "A ressecção de barra tem indicação estreita e falha significativa; mapeamento preciso e interposição bem posicionada são decisivos para evitar recorrência.",
      level: "IV",
      studyType: "Série de casos retrospectiva",
      era: "classico",
      citation: {
        authors: "Hasler CC, Foster BK",
        title: "Secondary tethers after physeal bar resection: a common source of failure?",
        journal: "Clin Orthop Relat Res",
        year: 2002,
        pmid: "12461380",
        doi: "10.1097/00003086-200212000-00031",
      },
    },
  ],
  pearls: [
    "Na criança, a fise cede antes dos ligamentos: dor sobre a placa de crescimento após trauma é fratura fisária até prova em contrário.",
    "O tipo mais comum é o SH-II; o de pior prognóstico é o SH-V, muitas vezes reconhecido só em retrospecto.",
    "Tipos III e IV são articulares e cruzam a germinativa — redução anatômica da articulação e da fise é obrigatória.",
    "Fixação paralela à fise, epífise a epífise e metáfise a metáfise, sem atravessar a placa; se inevitável, fio liso fino.",
    "Linha de Park-Harris paralela = bom sinal; convergência para a periferia = tethering por barra.",
  ],
  pitfalls: [
    "Tratar um SH-I pouco desviado como entorse e liberar a criança sem imobilização nem reavaliação.",
    "Manipular repetida e vigorosamente a fratura, lesando a camada germinativa.",
    "Ignorar gap fisário > 3 mm após redução, que sugere periósteo interposto.",
    "Atravessar a fise com implante ao fixar tipos III/IV.",
    "Dar alta antes de documentar crescimento simétrico, perdendo a janela para tratar a barra.",
  ],
  figures: [
    {
      id: "fratura-fisaria-salter-harris:anatomia",
      caption:
        "Zonas da fise: a separação típica ocorre pela zona hipertrófica, poupando a camada germinativa.",
      alt: "Corte da fise mostrando epífise, zonas de crescimento e metáfise",
      kind: "diagram",
    },
    {
      id: "fratura-fisaria-salter-harris:classificacao",
      variant: "i",
      caption: "Salter-Harris I: separação pura pela fise, sem fragmento ósseo.",
      alt: "Esquema de fratura fisária Salter-Harris tipo I",
      kind: "diagram",
    },
    {
      id: "fratura-fisaria-salter-harris:classificacao",
      variant: "ii",
      caption: "Salter-Harris II: fise com fragmento metafisário de Thurston-Holland — o mais comum.",
      alt: "Esquema de fratura fisária Salter-Harris tipo II",
      kind: "diagram",
    },
    {
      id: "fratura-fisaria-salter-harris:classificacao",
      variant: "iii",
      caption: "Salter-Harris III: traço pela fise e pela epífise até a superfície articular.",
      alt: "Esquema de fratura fisária Salter-Harris tipo III",
      kind: "diagram",
    },
    {
      id: "fratura-fisaria-salter-harris:classificacao",
      variant: "iv",
      caption: "Salter-Harris IV: traço único cruzando metáfise, fise e epífise.",
      alt: "Esquema de fratura fisária Salter-Harris tipo IV",
      kind: "diagram",
    },
    {
      id: "fratura-fisaria-salter-harris:classificacao",
      variant: "v",
      caption: "Salter-Harris V: esmagamento axial da fise, de pior prognóstico.",
      alt: "Esquema de fratura fisária Salter-Harris tipo V",
      kind: "diagram",
    },
    {
      id: "fratura-fisaria-salter-harris:barra-fisaria",
      caption: "Barra fisária periférica ancorando a epífise e gerando deformidade angular progressiva.",
      alt: "Barra fisária periférica com deformidade angular",
      kind: "diagram",
    },
    {
      id: "fratura-fisaria-salter-harris:reducao",
      caption: "Redução gentil: gap fisário persistente sugere periósteo interposto.",
      alt: "Princípio da redução gentil com periósteo interposto",
      kind: "diagram",
    },
    {
      id: "fratura-fisaria-salter-harris:fixacao",
      variant: "iv",
      caption: "Fixação anatômica do SH-IV com parafusos paralelos à fise, sem atravessá-la.",
      alt: "Fixação de fratura fisária articular sem cruzar a fise",
      kind: "diagram",
    },
    {
      id: "fratura-fisaria-salter-harris:barra-ressecao",
      caption: "Ressecção da barra fisária com interposição para reabrir o crescimento.",
      alt: "Ressecção de barra fisária com interposição",
      kind: "diagram",
    },
    {
      id: "fratura-fisaria-salter-harris:linha-park-harris",
      caption: "Seguimento pela linha de Park-Harris: paralela (crescimento simétrico) versus convergente (barra).",
      alt: "Linha de Park-Harris no seguimento do crescimento fisário",
      kind: "diagram",
    },
  ],
  meta: {
    lastReviewed: "2026-07-13",
    sources: [
      "SBOT. Edital TEOT 2026: Bibliografia oficial de Ortopedia Pediátrica.",
      "Waters PM, Skaggs DL, Flynn JM. Rockwood and Wilkins' Fractures in Children. 10th ed. 2024.",
      "Herring JA. Tachdjian's Pediatric Orthopaedics. 6th ed. 2022.",
      "Weinstein SL, Flynn JM. Lovell and Winter's Pediatric Orthopaedics. 8th ed. 2021.",
      "Hebert S, Lech O, et al. Ortopedia e Traumatologia: Princípios e Prática. 6ª ed. 2025.",
    ],
    attribution:
      "Conteúdo original Revisortopedia; figuras esquemáticas originais (redesenho, não reprodução).",
    figureReference: "Rockwood and Wilkins' Fractures in Children, 10a ed. (2024)",
  },
});
