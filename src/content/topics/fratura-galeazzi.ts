import { defineTopic } from "../../types/topic";

export const topic = defineTopic({
  id: "ms-antebraco-fratura-galeazzi",
  slug: "fratura-galeazzi",
  regionId: "membro-superior",
  bone: "Antebraço",
  injury: "Fratura-luxação",
  title: "Fratura-luxação de Galeazzi",
  subtitle:
    "Fratura do terço distal do rádio com lesão da articulação radioulnar distal: fixar o rádio, restaurar comprimento e rotação e, então, avaliar e estabilizar a DRUJ.",
  laterality: null,
  status: "complete",
  overview:
    "A fratura-luxação de Galeazzi associa uma fratura da diáfise distal do rádio à lesão da articulação radioulnar distal (DRUJ). É clássica a designação de \"fratura da necessidade\" porque, no adulto, o tratamento conservador falha na maioria dos casos: as forças deformantes do braquiorradial, do pronador quadrado, dos músculos do polegar e do peso da mão desalinham o fragmento distal e mantêm a DRUJ incongruente. O objetivo é a redução anatômica e a fixação rígida do rádio, restaurando comprimento, eixo e rotação, seguida da avaliação sistemática da estabilidade da DRUJ.\n\nA DRUJ deve ser lembrada em toda fratura isolada da diáfise do rádio. Sinais de alerta na radiografia inicial incluem fratura na base do processo estiloide ulnar, alargamento do espaço radioulnar distal na incidência AP, subluxação/luxação da cabeça da ulna no perfil e encurtamento radial superior a alguns milímetros. Após a osteossíntese do rádio, o cirurgião testa a DRUJ e decide entre imobilização em supinação (estável), transfixação com fios de Kirschner (instável, porém redutível) ou redução aberta com reparo do TFCC ou remoção de tecido interposto (irredutível).",
  keyFacts: [
    { label: "Definição", value: "Fratura do rádio distal + lesão da DRUJ" },
    { label: "Apelido", value: "\"Fratura da necessidade\" (necessita de cirurgia no adulto)" },
    { label: "Preditor", value: "Fratura ≤ 7,5 cm da articulação distal (Rettig-Raskin tipo I)" },
    { label: "Conduta", value: "ORIF do rádio e avaliação intraoperatória da DRUJ" },
    { label: "Imobilização", value: "Supinação após estabilizar a DRUJ" },
    { label: "Cuidado", value: "Suspeitar de DRUJ em toda fratura isolada da diáfise radial" },
  ],
  anatomy: {
    text:
      "A DRUJ é uma articulação em pivô entre a cabeça da ulna e o notch sigmoide do rádio. A congruência óssea é rasa e responde por parcela pequena da estabilidade; os estabilizadores primários são os ligamentos radioulnares dorsal e volar, componentes do complexo da fibrocartilagem triangular (TFCC), que se inserem na fóvea e na base do processo estiloide da ulna. O pronador quadrado, a cápsula, o tendão do extensor ulnar do carpo e a membrana interóssea contribuem como estabilizadores secundários.\n\nNa pronossupinação, o rádio gira ao redor da ulna fixa; por isso, encurtamento, angulação ou má rotação do rádio após a fratura alteram diretamente a relação na DRUJ. Restaurar o comprimento e a rotação do rádio costuma reduzir a articulação de forma indireta. A base do processo estiloide ulnar é a impressão radiográfica da inserção foveal do TFCC — sua avulsão sugere lesão do estabilizador primário e maior chance de instabilidade residual.",
    figureIds: [
      "fratura-galeazzi:radiografia",
      "fratura-galeazzi:anatomia",
    ],
  },
  classification: [
    {
      id: "rettig-raskin",
      name: "Classificação orientada ao tratamento (Rettig-Raskin)",
      basis: "Distância da fratura radial à superfície articular distal, que prediz a instabilidade intraoperatória da DRUJ.",
      note:
        "Na série original de 40 casos, fraturas dentro de 7,5 cm da superfície articular distal (tipo I) associaram-se a instabilidade da DRUJ em cerca de 55% dos casos, contra apenas ~6% nas fraturas do terço médio (tipo II). A localização orienta a expectativa, mas a decisão final é o teste intraoperatório.",
      types: [
        {
          code: "I",
          label: "Tipo I — distal (≤ 7,5 cm)",
          description:
            "Fratura no terço distal do rádio, a 7,5 cm ou menos da superfície articular distal; alta frequência de instabilidade da DRUJ após a fixação do rádio.",
          figureId: "fratura-galeazzi:classificacao",
          figureVariant: "tipo-i",
        },
        {
          code: "II",
          label: "Tipo II — terço médio (> 7,5 cm)",
          description:
            "Fratura mais proximal, a mais de 7,5 cm da superfície articular distal; instabilidade da DRUJ é incomum, mas ainda deve ser testada.",
          figureId: "fratura-galeazzi:classificacao",
          figureVariant: "tipo-ii",
        },
      ],
    },
    {
      id: "estabilidade-druj",
      name: "Padrão de estabilidade da DRUJ após a fixação",
      basis: "Comportamento da DRUJ ao teste intraoperatório após osteossíntese anatômica do rádio.",
      note:
        "Este é o eixo que define a conduta sobre a DRUJ. O teste é feito nas posições neutra, pronação e supinação, sempre comparando com o antebraço contralateral.",
      types: [
        {
          code: "EST",
          label: "Estável",
          description:
            "Translação simétrica ao lado são em todas as posições; tratar com imobilização, geralmente em supinação, e reabilitação progressiva.",
          figureId: "fratura-galeazzi:teste-druj",
          figureVariant: "estavel",
        },
        {
          code: "INST-R",
          label: "Instável, redutível",
          description:
            "Reduz mas volta a subluxar; estabilizar preferencialmente em supinação com transfixação por fios de Kirschner da ulna ao rádio, proximais à DRUJ.",
          figureId: "fratura-galeazzi:estabilizacao-druj",
          figureVariant: "transfixacao",
        },
        {
          code: "IRRED",
          label: "Irredutível",
          description:
            "Bloqueio à redução, tipicamente por interposição do extensor ulnar do carpo ou do TFCC; requer redução aberta e reparo/remoção do tecido interposto.",
          figureId: "fratura-galeazzi:estabilizacao-druj",
          figureVariant: "reparo",
        },
      ],
    },
  ],
  indications: {
    operative: [
      "Praticamente todas as fraturas-luxação de Galeazzi no adulto: fratura instável do rádio que exige redução anatômica e fixação rígida.",
      "Fratura do rádio com qualquer encurtamento, angulação ou má rotação que comprometa a congruência da DRUJ.",
      "DRUJ instável após a fixação do rádio (transfixação ou reparo, conforme redutibilidade).",
      "DRUJ irredutível por interposição de partes moles (extensor ulnar do carpo, TFCC), exigindo abordagem aberta.",
      "Fratura exposta, síndrome compartimental ou lesão neurovascular associada.",
    ],
    nonOperative: [
      "Lesão tipo Galeazzi na criança com fise aberta, quando se obtém redução fechada estável e congruente da DRUJ.",
      "Situações excepcionais no adulto sem condições clínicas para cirurgia, cientes do alto risco de falha e deformidade.",
    ],
    decisionNotes:
      "No adulto, a fratura de Galeazzi é uma \"fratura da necessidade\": séries clássicas mostram falha do tratamento conservador em cerca de 80% dos casos, enquanto a fixação rígida do rádio produz maioria de bons resultados. A sequência é fixar o rádio primeiro; a restauração de comprimento e rotação reduz a DRUJ de forma indireta na maior parte dos casos. Só então se testa a DRUJ e se escolhe entre imobilização em supinação, transfixação com fios ou reparo aberto. Em crianças, a redução fechada pode ser suficiente quando estável.",
  },
  approaches: [
    {
      id: "henry-volar",
      name: "Via volar de Henry para o rádio",
      indication: "Exposição da diáfise distal do rádio para redução e fixação com placa.",
      interval:
        "Intervalo entre o braquiorradial (nervo radial) e o flexor radial do carpo (nervo mediano). Distalmente, eleva-se o pronador quadrado do rádio; proximalmente, protege-se o ramo profundo do nervo radial ao supinar o antebraço para expor a inserção do supinador.",
      atRisk: [
        "Ramo sensitivo do nervo radial sob o braquiorradial",
        "Artéria radial no bordo do intervalo",
        "Ramo profundo do nervo radial (interósseo posterior) na exposição proximal",
      ],
      figureId: "fratura-galeazzi:via-henry",
    },
    {
      id: "druj-aberta",
      name: "Abordagem da DRUJ para redução aberta e reparo",
      indication: "DRUJ irredutível ou instabilidade por avulsão foveal do TFCC.",
      interval:
        "Acesso dorsal/ulnar à DRUJ entre os compartimentos extensores, com capsulotomia poupando os ligamentos radioulnares; identificar e remover tecido interposto (frequentemente o extensor ulnar do carpo) e reinserir o TFCC na fóvea.",
      atRisk: [
        "Ramo dorsal sensitivo do nervo ulnar",
        "Ligamentos radioulnares dorsal e volar",
        "Cartilagem da cabeça da ulna e do notch sigmoide",
      ],
      figureId: "fratura-galeazzi:estabilizacao-druj",
    },
  ],
  technique: [
    {
      n: 1,
      title: "Diagnosticar a lesão e a DRUJ",
      detail:
        "Obter radiografias do antebraço incluindo punho e cotovelo. Suspeitar de lesão da DRUJ diante de fratura da base do estiloide ulnar, alargamento do espaço radioulnar distal na AP, subluxação da cabeça da ulna no perfil ou encurtamento radial. Documentar o exame neurovascular.",
      figureId: "fratura-galeazzi:radiografia",
      tips: [
        "Toda fratura isolada da diáfise do rádio exige avaliação dedicada da DRUJ",
        "Radiografias do punho contralateral ajudam a comparar variância ulnar",
      ],
      pitfalls: [
        "Tratar a fratura do rádio e ignorar a DRUJ",
        "Confundir Galeazzi com fratura isolada do rádio distal",
      ],
    },
    {
      n: 2,
      title: "Antecipar a instabilidade pela localização",
      detail:
        "Classificar segundo Rettig-Raskin: fraturas a 7,5 cm ou menos da superfície articular distal (tipo I) têm alta chance de DRUJ instável; fraturas do terço médio (tipo II) raramente instabilizam. Isso orienta o preparo, mas não substitui o teste intraoperatório.",
      figureId: "fratura-galeazzi:classificacao",
      figureVariant: "tipo-i",
      tips: ["Preparar material para transfixação em toda fratura distal", "Reconhecer as forças deformantes que justificam a cirurgia"],
      pitfalls: ["Assumir estabilidade só pela localização proximal", "Subestimar a má rotação como causa de incongruência"],
    },
    {
      n: 3,
      title: "Expor o rádio pela via de Henry",
      detail:
        "Abordar o rádio pelo intervalo entre braquiorradial e flexor radial do carpo, protegendo a artéria radial e o ramo sensitivo do nervo radial. Elevar o pronador quadrado para acessar o rádio distal e limpar o foco da fratura sem desperiostizar em excesso.",
      figureId: "fratura-galeazzi:via-henry",
      tips: ["A supinação relaxa o intervalo e protege as estruturas radiais", "Preservar a vascularização periosteal dos fragmentos"],
      pitfalls: ["Lesar o ramo sensitivo do nervo radial", "Dissecção excessiva devascularizando o foco"],
    },
    {
      n: 4,
      title: "Reduzir e fixar o rádio de forma anatômica",
      detail:
        "Restaurar comprimento, alinhamento e, sobretudo, a rotação do rádio. Aplicar placa (compressão ou neutralização com parafuso interfragmentar quando o traço permite). A restauração do comprimento e da rotação reduz indiretamente a DRUJ na maioria dos casos.",
      figureId: "fratura-galeazzi:fixacao",
      tips: ["Conferir a curvatura radial e a rotação com o intensificador", "Comparar comprimento com o antebraço contralateral se houver dúvida"],
      pitfalls: ["Deixar má rotação residual que perpetua a incongruência da DRUJ", "Fixação insuficiente em osso distal metafisário"],
    },
    {
      n: 5,
      title: "Testar a estabilidade da DRUJ",
      detail:
        "Após a fixação, estressar a DRUJ no sentido ântero-posterior em posição neutra, pronação e supinação, comparando com o lado contralateral. Definir se está estável, instável mas redutível, ou irredutível.",
      figureId: "fratura-galeazzi:teste-druj",
      figureVariant: "instavel",
      tips: ["Sempre comparar com o antebraço não lesado", "A supinação frequentemente é a posição mais estável"],
      pitfalls: ["Não testar a DRUJ após a osteossíntese", "Interpretar frouxidão fisiológica bilateral como instabilidade"],
    },
    {
      n: 6,
      title: "Estabilizar a DRUJ conforme o achado",
      detail:
        "Estável: imobilizar em supinação. Instável e redutível: reduzir em supinação e transfixar a ulna ao rádio com um ou dois fios de Kirschner proximais à DRUJ, protegendo contra fadiga do fio. Irredutível: redução aberta, remoção do tecido interposto (extensor ulnar do carpo/TFCC) e reparo foveal do TFCC.",
      figureId: "fratura-galeazzi:estabilizacao-druj",
      figureVariant: "transfixacao",
      tips: ["Transfixar em supinação com o antebraço na posição mais congruente", "Orientar o paciente sobre o risco de quebra do fio"],
      pitfalls: ["Transfixar em posição não reduzida", "Deixar interposição de partes moles sem abordar"],
    },
  ],
  postop: {
    immobilization:
      "Imobilização axilopalmar em supinação por cerca de 4-6 semanas quando há instabilidade da DRUJ; a supinação relaxa os estabilizadores volares e mantém a congruência. Fios de transfixação, quando usados, são retirados por volta de 4-6 semanas.",
    weightBearing:
      "Sem carga axial ou torção sobre o antebraço operado no início. Retorno progressivo de força e apoio após consolidação da fratura e estabilidade da DRUJ.",
    rehab: [
      {
        window: "0-2 semanas",
        weightBearing: "Sem carga",
        focus: "Elevação, controle de edema e mobilidade de dedos, ombro e cotovelo dentro da imobilização.",
      },
      {
        window: "2-6 semanas",
        weightBearing: "Sem carga",
        focus: "Manter supinação protetora; iniciar mobilidade do punho quando a DRUJ permitir e após retirada dos fios.",
      },
      {
        window: "6-12 semanas",
        weightBearing: "Progressiva leve",
        focus: "Ganho de pronossupinação e flexoextensão do punho; fortalecimento suave conforme consolidação.",
      },
      {
        window: "3-6 meses",
        weightBearing: "Progressiva plena",
        focus: "Fortalecimento, retorno a atividades e esporte após consolidação e DRUJ estável e indolor.",
      },
    ],
    followup:
      "Acompanhamento radiográfico da consolidação do rádio e da congruência da DRUJ. Avaliar pronossupinação, dor à carga axial e teste de balotamento. Séries de longo prazo mostram bom prognóstico da DRUJ quando a redução anatômica do rádio é obtida.",
  },
  complications: [
    {
      name: "Instabilidade residual da DRUJ",
      detail: "Persistência de subluxação por má rotação do rádio, redução inadequada ou lesão foveal do TFCC não tratada.",
      prevention: "Redução anatômica com atenção à rotação, teste intraoperatório e reparo do TFCC quando indicado.",
    },
    {
      name: "Consolidação viciosa e má rotação",
      detail: "Encurtamento ou rotação residual do rádio alteram permanentemente a mecânica da DRUJ e limitam a pronossupinação.",
      prevention: "Restaurar comprimento, curvatura radial e rotação; conferir com imagem intraoperatória.",
    },
    {
      name: "Artrose da DRUJ",
      detail: "Incongruência crônica leva a dor e degeneração articular a longo prazo.",
      prevention: "Redução precisa e reconhecimento precoce da instabilidade.",
    },
    {
      name: "Falha ou migração dos fios de Kirschner",
      detail: "Fios de transfixação podem fadigar e quebrar, sobretudo com mobilização precoce ou pronossupinação indevida.",
      prevention: "Imobilizar em supinação, orientar o paciente e programar a retirada dos fios.",
    },
    {
      name: "Lesão neurovascular iatrogênica",
      detail: "Risco ao ramo sensitivo do nervo radial, artéria radial e nervo interósseo posterior na via de Henry.",
      prevention: "Conhecer os intervalos, supinar para a exposição proximal e dissecar com referência anatômica.",
    },
  ],
  evidence: [
    {
      id: "mikic-1975-necessidade",
      claim:
        "Em série de 125 pacientes com lesão de Galeazzi, o tratamento conservador falhou em cerca de 80% dos adultos, enquanto a fixação interna rígida do rádio (e da DRUJ quando necessário) produziu maioria de bons resultados.",
      takeaway:
        "Fundamenta o conceito de \"fratura da necessidade\" no adulto: a fixação cirúrgica anatômica do rádio é a regra.",
      level: "IV",
      studyType: "Série de casos clássica",
      era: "classico",
      citation: {
        authors: "Mikić ZD",
        title: "Galeazzi fracture-dislocations.",
        journal: "J Bone Joint Surg Am",
        year: 1975,
        pmid: "1201989",
      },
    },
    {
      id: "rettig-2001-classificacao",
      claim:
        "Em 40 pacientes, fraturas a 7,5 cm ou menos da superfície articular distal (tipo I) apresentaram instabilidade intraoperatória da DRUJ em ~55% dos casos, contra ~6% nas fraturas do terço médio (tipo II).",
      takeaway:
        "A localização da fratura radial é um preditor prático da instabilidade da DRUJ e deve elevar a suspeita, sem dispensar o teste intraoperatório.",
      level: "IV",
      studyType: "Série de casos com classificação orientada ao tratamento",
      era: "classico",
      citation: {
        authors: "Rettig ME, Raskin KB",
        title: "Galeazzi fracture-dislocation: a new treatment-oriented classification.",
        journal: "J Hand Surg Am",
        year: 2001,
        pmid: "11279568",
        doi: "10.1053/jhsu.2001.21523",
      },
    },
    {
      id: "donndorff-2021-longo-prazo",
      claim:
        "Em 14 pacientes seguidos por em média 8 anos, o prognóstico clínico e radiológico da DRUJ foi favorável quando se obteve redução fechada da ulna após ORIF anatômica do rádio, sem subluxação clara à TC dinâmica.",
      takeaway:
        "A redução anatômica do rádio com redução fechada da DRUJ estável oferece bom resultado a longo prazo na maioria dos casos.",
      level: "IV",
      studyType: "Série de casos retrospectiva de longo prazo",
      era: "atual",
      citation: {
        authors: "Donndorff AG, Petrucelli EM, Gallucci GL, et al.",
        title: "Galeazzi fracture-dislocations: Long-term prognosis of the distal radioulnar joint.",
        journal: "Hand Surg Rehabil",
        year: 2021,
        pmid: "33991703",
        doi: "10.1016/j.hansur.2021.04.012",
      },
    },
    {
      id: "garg-2020-revisao",
      claim:
        "Revisão contemporânea reafirma que as lesões de Galeazzi são instáveis e requerem redução aberta e fixação interna do rádio, com avaliação intraoperatória cuidadosa da estabilidade da DRUJ e tratamento dirigido.",
      takeaway:
        "Consolida o algoritmo atual: fixar o rádio, testar a DRUJ e estabilizá-la conforme redutibilidade.",
      level: "V",
      studyType: "Artigo de revisão",
      era: "atual",
      citation: {
        authors: "Garg R, Mudgal C",
        title: "Galeazzi Injuries.",
        journal: "Hand Clin",
        year: 2020,
        pmid: "33040957",
        doi: "10.1016/j.hcl.2020.07.006",
      },
    },
    {
      id: "nuelle-2022-conservador",
      claim:
        "Comentário editorial sobre instabilidade sintomática da DRUJ observa que um período de tratamento conservador não parece resultar em piores desfechos, reservando a cirurgia para instabilidade persistente (≥ 6 meses) ou trauma de alta energia.",
      takeaway:
        "Para instabilidade sintomática residual da DRUJ, uma tentativa de manejo conservador é razoável antes de indicar cirurgia adicional.",
      level: "V",
      studyType: "Comentário editorial",
      era: "atual",
      citation: {
        authors: "Nuelle JAV",
        title:
          "Editorial Commentary: Symptomatic Distal Radioulnar Joint Instability After Distal Radius Fracture Fixation: Improved Outcomes With Arthroscopic Management Are Still Possible After a Trial of Nonoperative Treatment.",
        journal: "Arthroscopy",
        year: 2022,
        pmid: "35369918",
        doi: "10.1016/j.arthro.2022.01.018",
      },
    },
  ],
  pearls: [
    "Toda fratura isolada da diáfise do rádio exige avaliação dedicada da DRUJ — Galeazzi é frequentemente subdiagnosticada.",
    "Fixe o rádio primeiro: restaurar comprimento e rotação reduz a DRUJ de forma indireta na maioria dos casos.",
    "Após a osteossíntese, teste sempre a DRUJ nas três posições e compare com o lado contralateral.",
    "A supinação é a posição de imobilização e de transfixação porque relaxa os estabilizadores volares.",
    "Fratura da base do estiloide ulnar sinaliza avulsão foveal do TFCC e maior risco de instabilidade.",
  ],
  pitfalls: [
    "Tratar a fratura do rádio e negligenciar a DRUJ.",
    "Deixar má rotação residual do rádio, perpetuando a incongruência da DRUJ.",
    "Transfixar a DRUJ sem confirmar a redução articular.",
    "Não reconhecer a irredutibilidade por interposição do extensor ulnar do carpo.",
    "Confundir a lesão com fratura isolada do rádio distal e imobilizar de forma inadequada.",
  ],
  figures: [
    {
      id: "fratura-galeazzi:radiografia",
      caption:
        "Fratura do terço distal do rádio com encurtamento e alargamento/luxação da articulação radioulnar distal.",
      alt: "Esquema radiográfico AP da fratura-luxação de Galeazzi",
      kind: "diagram",
    },
    {
      id: "fratura-galeazzi:anatomia",
      caption: "Anatomia axial da DRUJ: notch sigmoide, cabeça da ulna, TFCC e ligamentos radioulnares.",
      alt: "Corte axial esquemático da articulação radioulnar distal",
      kind: "diagram",
    },
    {
      id: "fratura-galeazzi:classificacao",
      variant: "tipo-i",
      caption: "Rettig-Raskin tipo I: fratura a 7,5 cm ou menos da articulação distal, com alta instabilidade da DRUJ.",
      alt: "Classificação de Rettig-Raskin tipo I",
      kind: "diagram",
    },
    {
      id: "fratura-galeazzi:classificacao",
      variant: "tipo-ii",
      caption: "Rettig-Raskin tipo II: fratura no terço médio (> 7,5 cm), com instabilidade da DRUJ incomum.",
      alt: "Classificação de Rettig-Raskin tipo II",
      kind: "diagram",
    },
    {
      id: "fratura-galeazzi:instabilidade",
      caption: "Forças deformantes (braquiorradial, pronador quadrado, músculos do polegar e peso da mão) que justificam a cirurgia.",
      alt: "Vetores deformantes na fratura-luxação de Galeazzi",
      kind: "diagram",
    },
    {
      id: "fratura-galeazzi:via-henry",
      caption: "Via volar de Henry: intervalo entre braquiorradial e flexor radial do carpo, com estruturas em risco.",
      alt: "Via volar de Henry para o rádio",
      kind: "diagram",
    },
    {
      id: "fratura-galeazzi:fixacao",
      caption: "Osteossíntese do rádio com placa restaurando comprimento e rotação e reduzindo a DRUJ.",
      alt: "Fixação do rádio com placa volar",
      kind: "diagram",
    },
    {
      id: "fratura-galeazzi:teste-druj",
      variant: "estavel",
      caption: "Teste intraoperatório com translação simétrica ao lado são: DRUJ estável.",
      alt: "Teste de estabilidade da DRUJ estável",
      kind: "diagram",
    },
    {
      id: "fratura-galeazzi:teste-druj",
      variant: "instavel",
      caption: "Teste com translação aumentada em relação ao contralateral: DRUJ instável.",
      alt: "Teste de estabilidade da DRUJ instável",
      kind: "diagram",
    },
    {
      id: "fratura-galeazzi:estabilizacao-druj",
      variant: "reducao",
      caption: "DRUJ estável: imobilização em supinação.",
      alt: "Estabilização da DRUJ por imobilização em supinação",
      kind: "diagram",
    },
    {
      id: "fratura-galeazzi:estabilizacao-druj",
      variant: "transfixacao",
      caption: "DRUJ instável e redutível: transfixação com fios de Kirschner da ulna ao rádio, em supinação.",
      alt: "Transfixação da DRUJ com fios de Kirschner",
      kind: "diagram",
    },
    {
      id: "fratura-galeazzi:estabilizacao-druj",
      variant: "reparo",
      caption: "DRUJ irredutível: redução aberta, remoção do tecido interposto e reparo foveal do TFCC.",
      alt: "Redução aberta e reparo do TFCC na DRUJ irredutível",
      kind: "diagram",
    },
  ],
  meta: {
    lastReviewed: "2026-07-13",
    sources: [
      "SBOT. Edital TEOT 2026: Bibliografia para o 55º Exame de Título de Ortopedia e Traumatologia.",
      "Rockwood and Green's Fractures in Adults. 10th ed. 2024.",
      "Campbell's Operative Orthopaedics. 14th ed. 2021.",
      "Hebert S, Lech O, et al. Ortopedia e Traumatologia: Princípios e Prática. 6ª ed. 2025.",
    ],
    attribution:
      "Conteúdo original Revisortopedia; figuras esquemáticas originais (line-art), não reprodução de material protegido.",
    figureReference:
      "Referência editorial: Rockwood & Green's Fractures in Adults, 10th ed. (2024), capítulo de fraturas da diáfise do antebraço e lesão da articulação radioulnar distal; redesenho original, não reprodução.",
  },
});
