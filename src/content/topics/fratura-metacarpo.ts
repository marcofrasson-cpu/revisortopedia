import { defineTopic } from "../../types/topic";

export const topic = defineTopic({
  id: "ms-mao-fratura-metacarpo",
  slug: "fratura-metacarpo",
  regionId: "membro-superior",
  bone: "Mão",
  injury: "Fratura",
  title: "Fratura dos metacarpos",
  subtitle:
    "Decidir entre tratamento funcional e fixação a partir da tolerância angular de cada raio e, sobretudo, da deformidade rotacional — que a angulação isolada nunca substitui.",
  laterality: null,
  status: "complete",
  overview:
    "As fraturas dos metacarpos estão entre as lesões mais comuns da mão, com predomínio do colo do 5º metacarpo — a fratura do boxeador — por trauma axial com o punho cerrado. A avaliação separa três perguntas: onde está a fratura (colo, diáfise ou base), qual o desvio no plano sagital (angulação de ápice dorsal) e, o mais importante, existe deformidade rotacional. A radiografia em três incidências (PA, oblíqua e perfil) quantifica a angulação, mas a rotação é um diagnóstico clínico: os dedos são examinados em flexão, procurando sobreposição em tesoura e perda da convergência para o tubérculo do escafoide.\n\nA maioria das fraturas do colo e da diáfise sem desvio rotacional é tratada de forma conservadora e funcional, com mobilização precoce e excelente recuperação. A tolerância à angulação de ápice dorsal aumenta no sentido ulnar por causa da mobilidade das articulações carpometacarpais do 4º e 5º raios: pequena no 2º e 3º, ampla no 5º. Já a deformidade rotacional é mal tolerada — poucos graus geram sobreposição digital significativa — e constitui indicação cirúrgica mesmo com boa angulação. A escolha da fixação (fios de Kirschner intramedulares ou transversos, parafusos interfragmentários ou placa) depende do sítio, do padrão do traço, do número de raios acometidos e da qualidade das partes moles.",
  keyFacts: [
    { label: "Mais comum", value: "Colo do 5º metacarpo (fratura do boxeador)" },
    { label: "Mecanismo", value: "Trauma axial com punho cerrado; torção nas oblíquas" },
    { label: "Imagem", value: "PA, oblíqua e perfil verdadeiro para medir a angulação" },
    { label: "Rotação", value: "Diagnóstico clínico com os dedos em flexão, não na radiografia" },
    { label: "Tolerância angular", value: "Cresce no sentido ulnar; maior no 4º/5º raio" },
    { label: "Cirurgia", value: "Deformidade rotacional, angulação inaceitável, cominuição ou múltiplos raios" },
  ],
  anatomy: {
    text:
      "Os cinco metacarpos formam colunas com base, diáfise, colo e cabeça. As bases articulam-se com a fileira distal do carpo nas articulações carpometacarpais; as do 2º e 3º raios são praticamente fixas e constituem a unidade estável da mão, enquanto as do 4º e sobretudo do 5º têm mobilidade sagital crescente. Essa mobilidade explica por que a angulação de ápice dorsal no colo é bem tolerada nos raios ulnares: a articulação carpometacarpal compensa parte do desvio durante a flexão.\n\nO ligamento transverso metacarpal profundo une as cabeças e limita a diástase. Na diáfise, a musculatura intrínseca — interósseos e lumbricais — impõe a deformidade típica de ápice dorsal por tração palmar do fragmento distal. A rotação, determinada pela cabeça metacarpal e transmitida à cadeia digital, é a variável mais sensível: como os dedos convergem para a região do tubérculo do escafoide na flexão, um pequeno erro rotacional na cabeça amplifica-se na ponta do dedo e produz sobreposição. O ramo dorsal do nervo ulnar e os tendões extensores são as estruturas em risco nas abordagens dorsais.",
    figureIds: [
      "fratura-metacarpo:anatomia",
      "fratura-metacarpo:rotacao",
    ],
  },
  classification: [
    {
      id: "localizacao",
      name: "Localização anatômica",
      basis: "Segmento do metacarpo acometido, que define desvio, tolerância e fixação.",
      note:
        "A fratura da cabeça é intra-articular e menos frequente; o escopo clínico prático concentra-se em colo, diáfise e base.",
      types: [
        {
          code: "COLO",
          label: "Colo (subcapital)",
          description:
            "Fratura logo abaixo da cabeça, com ápice dorsal por tração dos intrínsecos; padrão da fratura do boxeador no 5º raio.",
          figureId: "fratura-metacarpo:localizacao",
          figureVariant: "colo",
        },
        {
          code: "DIAFISE",
          label: "Diáfise",
          description:
            "Transversa, oblíqua curta, espiral longa ou cominutiva; espirais encurtam e rodam, transversas angulam com ápice dorsal.",
          figureId: "fratura-metacarpo:localizacao",
          figureVariant: "diafise",
        },
        {
          code: "BASE",
          label: "Base",
          description:
            "Inclui a fratura-luxação da base do 5º metacarpo (Bennett reverso), intra-articular e instável pela tração do extensor ulnar do carpo.",
          figureId: "fratura-metacarpo:localizacao",
          figureVariant: "base",
        },
      ],
    },
    {
      id: "padrao-traco",
      name: "Padrão do traço",
      basis: "Geometria da fratura, que determina estabilidade e risco de encurtamento/rotação.",
      types: [
        {
          code: "TRANSVERSA",
          label: "Transversa",
          description:
            "Estável ao encurtamento, angula com ápice dorsal; boa candidata a tratamento funcional ou placa quando cirúrgica.",
          figureId: "fratura-metacarpo:placa",
          figureVariant: "placa",
        },
        {
          code: "OBLIQUA",
          label: "Oblíqua/espiral",
          description:
            "Tende a encurtar e rodar; a deformidade rotacional é o principal risco e favorece parafusos interfragmentários.",
          figureId: "fratura-metacarpo:placa",
          figureVariant: "parafuso",
        },
        {
          code: "COMINUTIVA",
          label: "Cominutiva",
          description:
            "Instável, frequentemente associada a lesão de partes moles ou múltiplos raios; costuma exigir fixação e, às vezes, ponte.",
          figureId: "fratura-metacarpo:localizacao",
          figureVariant: "diafise",
        },
      ],
    },
  ],
  indications: {
    operative: [
      "Deformidade rotacional clínica (sobreposição digital em tesoura) — indicação mesmo com angulação aceitável.",
      "Angulação de ápice dorsal acima da tolerância do raio após redução (aproximadamente >10-15° no 2º/3º, >30-40° no 4º, >50-60° no 5º).",
      "Encurtamento significativo (em geral acima de ~5 mm) em fraturas oblíquas/espirais.",
      "Fraturas de múltiplos metacarpos, cominuição, exposição ou perda óssea.",
      "Fratura-luxação da base (Bennett reverso do 5º) e fraturas intra-articulares desviadas da cabeça.",
      "Pseudoartrose sintomática do colo da cabeça na fratura do boxeador com déficit funcional relevante.",
    ],
    nonOperative: [
      "Fratura do colo com angulação dentro da tolerância do raio e sem desvio rotacional.",
      "Fratura da diáfise transversa estável, sem encurtamento nem rotação.",
      "Preferência por tratamento funcional após demonstração de ausência de rotação com os dedos fletidos.",
    ],
    decisionNotes:
      "A decisão não é a angulação isolada em graus, e sim a combinação de sítio, rotação, encurtamento e demanda. A deformidade rotacional é o critério mais rígido: poucos graus na cabeça metacarpal produzem sobreposição inaceitável do dedo e não devem ser aceitos. A angulação de ápice dorsal, ao contrário, é generosamente tolerada nos raios ulnares — a fratura do boxeador com grande angulação e sem rotação costuma evoluir bem com tratamento funcional, aceitando-se a perda cosmética do relevo da articulação. Quando a cirurgia é indicada, fios de Kirschner (intramedulares ou transversos) resolvem a maioria dos colos e diáfises; parafusos interfragmentários servem oblíquas/espirais longas e a placa é reservada a padrões instáveis, cominutivos ou de múltiplos raios.",
  },
  approaches: [
    {
      id: "percutanea",
      name: "Fixação percutânea com fios de Kirschner",
      indication: "Fraturas do colo e diáfise redutíveis por manobra fechada, sem cominuição relevante.",
      interval:
        "Sem via aberta: fios intramedulares antegrados introduzidos na base do metacarpo sob controle fluoroscópico, ou fios transversos ancorados no metacarpo íntegro adjacente. Proteger o ramo dorsal do nervo ulnar e os tendões extensores nos pontos de entrada.",
      atRisk: [
        "Ramo dorsal do nervo ulnar",
        "Tendões extensores no dorso da mão",
        "Cartilagem articular na entrada intramedular",
      ],
      figureId: "fratura-metacarpo:fio-k",
    },
    {
      id: "dorsal",
      name: "Via dorsal para placa/parafusos",
      indication: "Fraturas instáveis, oblíquas/espirais longas, cominutivas ou de múltiplos raios.",
      interval:
        "Incisão dorsal longitudinal sobre o metacarpo; afastamento do aparelho extensor pela junctura tendínea, com abertura mínima do periósteo. Expor o foco preservando a vascularização para reduzir e fixar sob visão direta.",
      atRisk: [
        "Tendão extensor e junctura tendínea (aderências)",
        "Ramos sensitivos dorsais",
        "Vascularização periosteal do fragmento",
      ],
      figureId: "fratura-metacarpo:placa",
    },
  ],
  technique: [
    {
      n: 1,
      title: "Avaliar rotação antes de decidir",
      detail:
        "Examinar os dedos em flexão das metacarpofalângicas e interfalângicas, comparando com a mão contralateral. Procurar sobreposição em tesoura e perda da convergência das polpas para a região do tubérculo do escafoide. Confirmar a angulação em radiografias PA, oblíqua e perfil verdadeiro, medindo o ápice dorsal no colo ou na diáfise.",
      figureId: "fratura-metacarpo:rotacao",
      tips: [
        "A rotação é clínica; a radiografia não a exclui",
        "Comparar sempre com a mão sadia",
      ],
      pitfalls: [
        "Aceitar uma fratura só porque a angulação é tolerável, ignorando a rotação",
        "Medir a angulação em incidência oblíqua e superestimar o desvio",
      ],
    },
    {
      n: 2,
      title: "Definir a tolerância pelo raio",
      detail:
        "Aplicar a tolerância angular específica: pequena no 2º e 3º raios, intermediária no 4º e ampla no 5º, graças à mobilidade das carpometacarpais ulnares. Fraturas do colo do 5º dentro desse limite e sem rotação não exigem redução anatômica.",
      figureId: "fratura-metacarpo:angulacao",
      tips: [
        "A mobilidade da CMC do 5º compensa a angulação residual",
        "Registrar o desvio para acompanhar a evolução",
      ],
      pitfalls: [
        "Usar a mesma tolerância para todos os raios",
        "Buscar redução perfeita em colo do 5º bem angulado, porém sem rotação",
      ],
    },
    {
      n: 3,
      title: "Reduzir pela manobra de Jahss quando indicado",
      detail:
        "Para fraturas do colo com angulação inaceitável, fletir a metacarpofalângica e a interfalângica proximal a 90° e empurrar a falange proximal dorsalmente, usando-a para reposicionar a cabeça, enquanto se faz contra-apoio na diáfise. Reavaliar rotação e angulação após a manobra.",
      figureId: "fratura-metacarpo:reducao-jahss",
      tips: [
        "A MF a 90° tensiona os colaterais e controla a cabeça",
        "Imobilizar em posição intrínseca-plus se optar por conservador",
      ],
      pitfalls: [
        "Reduzir com a MF em extensão e perder o controle da cabeça",
        "Confiar na manutenção da redução em fratura instável apenas com gesso",
      ],
    },
    {
      n: 4,
      title: "Estabilizar o colo/diáfise com fios de Kirschner",
      detail:
        "Quando a redução fechada é aceitável mas instável, optar por fios intramedulares antegrados pré-curvados introduzidos na base, preenchendo o canal e sustentando a cabeça, ou por fios transversos ao metacarpo íntegro adjacente. Confirmar comprimento e trajeto sob fluoroscopia.",
      figureId: "fratura-metacarpo:fio-k",
      figureVariant: "intramedular",
      tips: [
        "Fios pré-curvados dão três pontos de contato no canal",
        "Sepultar as pontas para reduzir irritação de partes moles",
      ],
      pitfalls: [
        "Lesar o ramo dorsal do nervo ulnar na pinagem transversa",
        "Perfurar a cartilagem articular na entrada intramedular",
      ],
    },
    {
      n: 5,
      title: "Fixar padrões instáveis com parafuso ou placa",
      detail:
        "Em oblíquas/espirais longas, dois ou mais parafusos interfragmentários perpendiculares ao traço restauram comprimento e rotação. Em transversas instáveis, cominutivas ou múltiplos raios, usar placa dorsal de baixo perfil com abertura periosteal mínima para preservar a vascularização.",
      figureId: "fratura-metacarpo:placa",
      figureVariant: "parafuso",
      tips: [
        "O parafuso interfragmentário controla melhor a rotação da espiral",
        "Placa de baixo perfil reduz conflito com o aparelho extensor",
      ],
      pitfalls: [
        "Placa volumosa gerando aderência e bloqueio do extensor",
        "Deixar rotação residual por fixação insuficiente da oblíqua",
      ],
    },
    {
      n: 6,
      title: "Confirmar redução rotacional e mobilizar cedo",
      detail:
        "Antes de encerrar, reavaliar a cascata digital em flexão passiva (efeito tenodese) para garantir ausência de tesoura. Iniciar mobilização precoce protegida assim que a fixação permitir, evitando rigidez das metacarpofalângicas.",
      figureId: "fratura-metacarpo:rotacao",
      tips: [
        "O teste de tenodese em flexão passiva revela rotação residual sob anestesia",
        "Mobilização precoce protege contra rigidez da MF",
      ],
      pitfalls: [
        "Encerrar sem checar a cascata e deixar tesoura oculta",
        "Imobilizar demais e evoluir com rigidez",
      ],
    },
  ],
  postop: {
    immobilization:
      "No tratamento funcional, tala/enfaixamento em posição intrínseca-plus por conforto e mobilização precoce, ou apenas buddy taping em fraturas estáveis. Após fixação estável, tala curta por poucos dias seguida de movimento protegido.",
    weightBearing:
      "Não se aplica carga do peso corporal na mão; a progressão é pelo uso funcional. Evitar impacto e preensão de força até sinais de consolidação.",
    rehab: [
      {
        window: "0-1 semana",
        weightBearing: "Uso protegido",
        focus: "Controle de edema, elevação e início de mobilização das articulações não imobilizadas.",
      },
      {
        window: "1-3 semanas",
        weightBearing: "Uso leve funcional",
        focus: "Amplitude ativa das metacarpofalângicas e interfalângicas; buddy taping se houver tendência à rotação.",
      },
      {
        window: "3-6 semanas",
        weightBearing: "Funcional progressivo",
        focus: "Ganho de amplitude completa e início de fortalecimento conforme dor e consolidação.",
      },
      {
        window: "6-12 semanas",
        weightBearing: "Progressiva sem restrição",
        focus: "Fortalecimento de preensão, retorno gradual ao esporte/trabalho de impacto.",
      },
    ],
    followup:
      "Acompanhar radiografia para consolidação e clínica para amplitude e rotação. Retirada de fios de Kirschner geralmente entre 4 e 6 semanas. Investigar rigidez da metacarpofalângica e aderência do extensor quando a amplitude não progride.",
  },
  complications: [
    {
      name: "Deformidade rotacional residual",
      detail: "Sobreposição digital funcionalmente limitante; mais comum em oblíquas/espirais tratadas sem controle rotacional.",
      prevention: "Avaliação clínica em flexão antes e depois da fixação; parafusos interfragmentários na espiral.",
    },
    {
      name: "Rigidez da metacarpofalângica",
      detail: "Perda de flexão por imobilização prolongada ou aderência do aparelho extensor após via dorsal.",
      prevention: "Imobilização em intrínseca-plus, tempo curto e mobilização precoce protegida.",
    },
    {
      name: "Pseudoartrose do relevo da cabeça",
      detail: "Perda cosmética do 'nó dos dedos' na fratura do boxeador; raramente compromete função.",
      prevention: "Informar o paciente sobre o resultado estético esperado do tratamento funcional.",
    },
    {
      name: "Complicações dos fios de Kirschner",
      detail: "Infecção no trajeto, migração, irritação de partes moles e lesão do ramo dorsal do nervo ulnar.",
      prevention: "Trajeto anatômico, pontas sepultadas e cuidados no orifício de entrada.",
    },
  ],
  evidence: [
    {
      id: "vanaaken-2015-buddy-taping",
      claim:
        "Em fratura do boxeador com angulação palmar ≤70° e sem rotação, enfaixamento macio com buddy taping foi não inferior à redução e gesso no quickDASH aos 4 meses, com retorno ao trabalho ~11 dias mais precoce.",
      takeaway:
        "Fraturas do colo do 5º sem deformidade rotacional podem ser tratadas funcionalmente, aceitando-se a perda estética do relevo da cabeça.",
      level: "I",
      studyType: "Ensaio clínico randomizado multicêntrico de não inferioridade",
      era: "atual",
      citation: {
        authors: "van Aaken J, Fusetti C, Luchina S, et al.",
        title:
          "Fifth metacarpal neck fractures treated with soft wrap/buddy taping compared to reduction and casting: results of a prospective, multicenter, randomized trial.",
        journal: "Arch Orthop Trauma Surg",
        year: 2015,
        pmid: "26559192",
        doi: "10.1007/s00402-015-2361-0",
      },
    },
    {
      id: "chong-2020-metanalise",
      claim:
        "Metanálise de estudos comparativos mostrou que, independentemente da angulação palmar, o tratamento conservador do colo do 5º metacarpo teve desfecho funcional (quickDASH e força de preensão) equivalente ao cirúrgico, com retorno mais precoce ao trabalho.",
      takeaway:
        "A angulação isolada não justifica cirurgia; sem rotação, o resultado funcional do tratamento conservador iguala o operatório.",
      level: "II",
      studyType: "Revisão sistemática com metanálise",
      era: "atual",
      citation: {
        authors: "Chong HH, Hau MYT, Shah R, Singh H",
        title:
          "Management of Little Finger Metacarpal Fractures: A Meta-Analysis of the Current Evidence.",
        journal: "J Hand Surg Asian Pac Vol",
        year: 2020,
        pmid: "32723052",
        doi: "10.1142/S2424835520500290",
      },
    },
    {
      id: "retrouvey-2021-movimento-precoce",
      claim:
        "Ensaio randomizado multicêntrico comparando movimento protegido precoce com imobilização em tala encontrou melhor força de preensão às 8 semanas no grupo de mobilização precoce, sem diferença nos desfechos relatados pelo paciente.",
      takeaway:
        "A mobilização precoce protegida favorece a recuperação funcional das fraturas do colo do 5º metacarpo tratadas conservadoramente.",
      level: "II",
      studyType: "Ensaio clínico randomizado multicêntrico",
      era: "atual",
      citation: {
        authors: "Retrouvey H, Jakubowski J, Al-Taha M, et al.",
        title:
          "Prospective Multicenter Randomized Controlled Trial Comparing Early Protected Movement and Splinting for Fifth Metacarpal Neck Fracture.",
        journal: "Plast Surg (Oakv)",
        year: 2021,
        pmid: "35096686",
        doi: "10.1177/22925503211011952",
      },
    },
    {
      id: "strub-2010-fio-intramedular",
      claim:
        "Estudo prospectivo em fraturas do colo do 5º com desvio palmar de 30° a 70° mostrou que o encavilhamento intramedular ofereceu vantagem estética, mas não funcional, em relação ao tratamento conservador.",
      takeaway:
        "A fixação nessas fraturas melhora a aparência, não a função — reforçando o tratamento funcional quando a estética não é prioridade.",
      level: "II",
      studyType: "Ensaio clínico prospectivo randomizado",
      era: "classico",
      citation: {
        authors: "Strub B, Schindele S, Sonderegger J, et al.",
        title:
          "Intramedullary splinting or conservative treatment for displaced fractures of the little finger metacarpal neck? A prospective study.",
        journal: "J Hand Surg Eur Vol",
        year: 2010,
        pmid: "20659966",
        doi: "10.1177/1753193410377845",
      },
    },
    {
      id: "poolman-2005-cochrane",
      claim:
        "Revisão Cochrane de ensaios sobre tratamento conservador da fratura do colo do 5º metacarpo não encontrou regime não operatório superior a outro, incluindo comparações entre tratamento funcional e imobilização.",
      takeaway:
        "Nenhuma modalidade conservadora se mostrou superior; a preferência por tratamento funcional e mobilização precoce é razoável e de baixo risco.",
      level: "I",
      studyType: "Revisão sistemática Cochrane",
      era: "classico",
      citation: {
        authors: "Poolman RW, Goslings JC, Lee JB, et al.",
        title: "Conservative treatment for closed fifth (small finger) metacarpal neck fractures.",
        journal: "Cochrane Database Syst Rev",
        year: 2005,
        pmid: "16034891",
        doi: "10.1002/14651858.CD003210.pub3",
      },
    },
  ],
  pearls: [
    "Rotação é diagnóstico clínico com os dedos fletidos; a radiografia sozinha não a exclui.",
    "A tolerância angular cresce no sentido ulnar — o 5º raio aceita muito mais angulação que o 2º/3º.",
    "Na fratura do boxeador sem rotação, tratamento funcional iguala o cirúrgico em função; só se perde o relevo da cabeça.",
    "A manobra de Jahss usa a falange proximal, com a MF a 90°, para reposicionar a cabeça angulada.",
    "Oblíquas e espirais rodam e encurtam; parafusos interfragmentários controlam melhor a rotação.",
  ],
  pitfalls: [
    "Aceitar uma fratura pela angulação tolerável e ignorar a deformidade rotacional.",
    "Aplicar a mesma tolerância angular a todos os raios.",
    "Imobilizar em extensão da metacarpofalângica e evoluir com rigidez.",
    "Usar placa volumosa no dorso e provocar aderência do aparelho extensor.",
    "Deixar de checar a cascata digital em tenodese ao final da fixação.",
  ],
  figures: [
    {
      id: "fratura-metacarpo:anatomia",
      caption:
        "Vista dorsal das colunas metacarpais: base, diáfise, colo e cabeça, com o ligamento transverso profundo e a maior mobilidade das carpometacarpais ulnares.",
      alt: "Anatomia dorsal dos metacarpos e articulações carpometacarpais",
      kind: "diagram",
    },
    {
      id: "fratura-metacarpo:rotacao",
      caption:
        "Convergência normal das polpas para o tubérculo do escafoide comparada à sobreposição digital em tesoura da deformidade rotacional.",
      alt: "Deformidade rotacional com sobreposição digital em tesoura",
      kind: "diagram",
    },
    {
      id: "fratura-metacarpo:localizacao",
      variant: "colo",
      caption: "Fratura do colo (subcapital): traço logo abaixo da cabeça, padrão da fratura do boxeador.",
      alt: "Fratura do colo do metacarpo",
      kind: "diagram",
    },
    {
      id: "fratura-metacarpo:localizacao",
      variant: "diafise",
      caption: "Fratura da diáfise do metacarpo.",
      alt: "Fratura da diáfise do metacarpo",
      kind: "diagram",
    },
    {
      id: "fratura-metacarpo:localizacao",
      variant: "base",
      caption: "Fratura da base, incluindo a fratura-luxação do 5º (Bennett reverso).",
      alt: "Fratura da base do metacarpo",
      kind: "diagram",
    },
    {
      id: "fratura-metacarpo:angulacao",
      caption:
        "Angulação de ápice dorsal e tolerância crescente no sentido ulnar: pequena no 2º/3º, intermediária no 4º e ampla no 5º raio.",
      alt: "Tolerância à angulação por raio metacarpal",
      kind: "diagram",
    },
    {
      id: "fratura-metacarpo:reducao-jahss",
      caption:
        "Manobra de Jahss: com a metacarpofalângica a 90°, a falange proximal empurra a cabeça dorsalmente para corrigir o ápice.",
      alt: "Manobra de Jahss para redução do colo do metacarpo",
      kind: "diagram",
    },
    {
      id: "fratura-metacarpo:fio-k",
      variant: "intramedular",
      caption: "Fixação com fios de Kirschner intramedulares antegrados introduzidos na base.",
      alt: "Fixação intramedular com fios de Kirschner",
      kind: "diagram",
    },
    {
      id: "fratura-metacarpo:fio-k",
      variant: "transversa",
      caption: "Pinagem transversa ao metacarpo íntegro adjacente.",
      alt: "Pinagem transversa do metacarpo",
      kind: "diagram",
    },
    {
      id: "fratura-metacarpo:placa",
      variant: "placa",
      caption: "Placa dorsal de baixo perfil para fratura transversa instável da diáfise.",
      alt: "Fixação da diáfise do metacarpo com placa dorsal",
      kind: "diagram",
    },
    {
      id: "fratura-metacarpo:placa",
      variant: "parafuso",
      caption: "Parafusos interfragmentários perpendiculares ao traço em fratura oblíqua/espiral longa.",
      alt: "Fixação com parafusos interfragmentários no metacarpo",
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
      "Barros Filho TEP, Lech O. Exame Físico em Ortopedia. 3ª ed.",
    ],
    attribution:
      "Conteúdo original Revisortopedia; figuras esquemáticas originais, não reprodução de fonte protegida.",
    figureReference:
      "Referência editorial: Rockwood and Green's Fractures in Adults, 10ª ed. (2024), capítulo de fraturas dos metacarpos; redesenho original.",
  },
});
