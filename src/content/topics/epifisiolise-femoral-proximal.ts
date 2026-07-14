import { defineTopic } from "../../types/topic";

export const topic = defineTopic({
  id: "ortopedia-pediatrica-quadril-epifisiolise-femoral-proximal",
  slug: "epifisiolise-femoral-proximal",
  regionId: "ortopedia-pediatrica",
  bone: "Quadril (criança)",
  injury: "Epifisiolise (ECF/SCFE)",
  title: "Epifisiólise femoral proximal",
  subtitle:
    "Reconhecer o escorregamento no adolescente, classificar a estabilidade de Loder e estabilizar a fise antes que a deformidade e a necrose se instalem.",
  laterality: null,
  status: "complete",
  overview:
    "A epifisiólise femoral proximal (escorregamento epifisário femoral proximal, ECF; em inglês SCFE) é o distúrbio do quadril mais comum do adolescente. A epífise femoral proximal desliza em sentido posteroinferior em relação à metáfise através de uma fise enfraquecida, tipicamente durante o estirão puberal e com forte associação à obesidade. Endocrinopatias (hipotireoidismo, deficiência de hormônio do crescimento, hipogonadismo) e doença renal devem ser investigadas quando o paciente é atípico — muito jovem, magro ou fora da faixa etária habitual.\n\nO quadro clássico é dor no quadril, na virilha, na coxa ou referida ao joelho, com claudicação e rotação externa obrigatória do membro à flexão do quadril. A dor referida ao joelho é uma armadilha diagnóstica: todo adolescente com dor no joelho e exame do joelho normal deve ter o quadril radiografado. O diagnóstico é confirmado em radiografias em anteroposterior e perfil (Lauenstein/perna de rã), nas quais se buscam a linha de Klein/Trethowan, o sinal do embaçamento metafisário de Steel e o deslocamento da epífise.\n\nA classificação de Loder — estável quando o paciente consegue apoiar o peso (com ou sem muletas) e instável quando não consegue — é o principal preditor de prognóstico: o escorregamento instável concentra o risco de necrose avascular. Uma vez feito o diagnóstico, o tratamento é cirúrgico e urgente. A fixação in situ com parafuso canulado único e central é o padrão para o escorregamento estável. No instável, a conduta permanece controversa: momento da cirurgia, papel e intensidade da redução, descompressão capsular e reconstrução anatômica (procedimento de Dunn modificado) são objeto de debate, sempre sob o peso do risco vascular. A fixação profilática do quadril contralateral é considerada em pacientes de maior risco.",
  keyFacts: [
    { label: "Epidemiologia", value: "Adolescente, estirão puberal, frequentemente obeso" },
    { label: "Direção", value: "Epífise escorrega posteroinferior à metáfise" },
    { label: "Armadilha", value: "Dor referida ao joelho — radiografar o quadril" },
    { label: "Imagem", value: "AP + perfil de Lauenstein; linha de Klein/Trethowan" },
    { label: "Classificação", value: "Loder: estável (apoia) x instável (não apoia)" },
    { label: "Tratamento", value: "Fixação in situ com parafuso canulado único" },
    { label: "Risco-chave", value: "NAV, sobretudo no instável; condrólise" },
  ],
  anatomy: {
    text:
      "A fise femoral proximal converte, na puberdade, sua orientação relativamente horizontal para uma inclinação mais vertical e oblíqua, o que aumenta as forças de cisalhamento sobre a placa. A obesidade eleva a carga mecânica e a retroversão femoral relativa desloca essas forças para o plano da fise. Alterações hormonais do estirão modificam a zona hipertrófica e reduzem a resistência da placa. A soma desses fatores explica por que o escorregamento ocorre nesse período e nessa população.\n\nO suprimento sanguíneo da epífise é o determinante do prognóstico. Os vasos retinaculares posterossuperiores, ramos terminais da artéria circunflexa femoral medial, sobem pelo colo e são a principal fonte de perfusão da cabeça femoral. No escorregamento, sobretudo no instável, esses vasos podem sofrer estiramento, dobra (kinking) ou tamponamento pelo aumento da pressão intracapsular; manobras de redução vigorosas e a fixação em posição inadequada podem lesá-los. A metáfise permanece bem vascularizada, mas o degrau na fise expõe o rebordo metafisário anterossuperior — a separação física anterior mensurável nesse ponto correlaciona-se com maior risco de necrose.",
    figureIds: [
      "epifisiolise-femoral-proximal:anatomia",
      "epifisiolise-femoral-proximal:linha-klein",
    ],
  },
  classification: [
    {
      id: "loder",
      name: "Classificação de Loder (estabilidade física)",
      basis: "Capacidade de apoiar o peso no membro acometido — critério clínico, não temporal.",
      note:
        "Substituiu a divisão temporal (agudo/crônico/agudo sobre crônico) por ser o melhor preditor de necrose avascular. A instabilidade concentra o risco vascular.",
      types: [
        {
          code: "ESTAVEL",
          label: "Estável",
          description:
            "O paciente consegue deambular e apoiar o peso, com ou sem muletas. Necrose avascular é rara e o prognóstico é bom com fixação in situ.",
          figureId: "epifisiolise-femoral-proximal:classificacao-loder",
          figureVariant: "estavel",
        },
        {
          code: "INSTAVEL",
          label: "Instável",
          description:
            "Dor tão intensa que o apoio do peso é impossível mesmo com muletas. Risco de necrose avascular relatado em torno de 20% a 50%; conduta e momento cirúrgico permanecem controversos.",
          figureId: "epifisiolise-femoral-proximal:classificacao-loder",
          figureVariant: "instavel",
        },
      ],
    },
    {
      id: "gravidade-southwick",
      name: "Gravidade do escorregamento (ângulo de Southwick / Wilson)",
      basis: "Magnitude do deslize medida no perfil pelo ângulo cabeça-diáfise comparado ao lado normal.",
      note:
        "Orienta o prognóstico de deformidade residual e a discussão sobre osteotomia, mas não substitui a estabilidade de Loder na decisão inicial.",
      types: [
        {
          code: "LEVE",
          label: "Leve",
          description: "Ângulo de escorregamento menor que 30°.",
          figureId: "epifisiolise-femoral-proximal:graus-escorregamento",
          figureVariant: "leve",
        },
        {
          code: "MODERADO",
          label: "Moderado",
          description: "Ângulo de escorregamento entre 30° e 50°.",
          figureId: "epifisiolise-femoral-proximal:graus-escorregamento",
          figureVariant: "moderado",
        },
        {
          code: "GRAVE",
          label: "Grave",
          description: "Ângulo de escorregamento maior que 50°; maior deformidade residual e impacto femoroacetabular.",
          figureId: "epifisiolise-femoral-proximal:graus-escorregamento",
          figureVariant: "grave",
        },
      ],
    },
  ],
  indications: {
    operative: [
      "Todo escorregamento confirmado — o tratamento é cirúrgico e não deve ser postergado (risco de progressão).",
      "Escorregamento estável: fixação in situ com parafuso canulado único e central.",
      "Escorregamento instável: estabilização urgente; discutir redução suave, descompressão capsular ou reconstrução (Dunn modificado) conforme experiência e gravidade.",
      "Fixação profilática contralateral em pacientes de alto risco (idade jovem/imaturidade esquelética, endocrinopatia, difícil seguimento).",
      "Deformidade residual sintomática com impacto femoroacetabular: osteoplastia do colo ou osteotomia após a fise fechar.",
    ],
    nonOperative: [
      "Não há tratamento não operatório definitivo — a imobilização isolada não impede a progressão e foi abandonada.",
      "Repouso e proibição de apoio são apenas medidas temporárias até a cirurgia.",
    ],
    decisionNotes:
      "A decisão central não é operar ou não, e sim como estabilizar e quando. O escorregamento estável tem conduta bem estabelecida com fixação in situ. No instável, todas as escolhas ocorrem sob o risco de necrose avascular: não há consenso definitivo sobre o benefício da redução, e uma redução acidental durante o posicionamento pode ocorrer, mas a redução forçada é desencorajada. A profilaxia contralateral pondera o risco de novo escorregamento contra a morbidade de operar um quadril assintomático.",
  },
  approaches: [
    {
      id: "percutanea-in-situ",
      name: "Fixação percutânea in situ (mesa de tração/radiotransparente)",
      indication: "Escorregamento estável (e, para muitos, também o instável, sem redução deliberada).",
      interval:
        "Sob fluoroscopia em AP e perfil, define-se o ponto de entrada na cortical anterolateral do colo, de modo que o parafuso, perpendicular à fise, alcance o centro da epífise em ambos os planos sem penetrar a articulação.",
      atRisk: [
        "Vasos retinaculares posterossuperiores (perfuração posterossuperior da epífise)",
        "Cartilagem articular (penetração inadvertida — condrólise)",
        "Estruturas neurovasculares femorais anteriores com trajeto muito medial/anterior",
      ],
      figureId: "epifisiolise-femoral-proximal:fixacao-in-situ",
    },
    {
      id: "luxacao-cirurgica-dunn",
      name: "Luxação cirúrgica controlada / Dunn modificado",
      indication:
        "Escorregamentos graves ou instáveis selecionados, em serviços com experiência, para reduzir a epífise preservando os vasos retinaculares.",
      interval:
        "Via lateral com osteotomia trocantérica (Ganz), luxação anterior segura do quadril, elevação do flap retinacular contendo os vasos e encurtamento do colo para reposicionar a epífise sem tensionar o pedículo.",
      atRisk: [
        "Pedículo retinacular / artéria circunflexa femoral medial",
        "Consolidação da osteotomia trocantérica",
        "Cartilagem articular",
      ],
      figureId: "epifisiolise-femoral-proximal:reducao",
    },
  ],
  technique: [
    {
      n: 1,
      title: "Confirmar diagnóstico e classificar a estabilidade",
      detail:
        "Documentar se o paciente apoia o peso (Loder). Obter AP da pelve e perfil de Lauenstein bilateral; identificar linha de Klein/Trethowan, embaçamento metafisário e magnitude do escorregamento. Rastrear endocrinopatia em pacientes atípicos. Manter o membro em repouso e sem carga até a cirurgia.",
      figureId: "epifisiolise-femoral-proximal:linha-klein",
      tips: [
        "Dor no joelho com joelho normal: radiografar o quadril",
        "O perfil detecta escorregamentos leves que a AP não mostra",
      ],
      pitfalls: [
        "Atribuir a dor ao joelho e retardar o diagnóstico",
        "Confundir cronologia dos sintomas com estabilidade",
      ],
    },
    {
      n: 2,
      title: "Posicionar e evitar redução forçada",
      detail:
        "Posicionar na mesa radiotransparente/de tração com fluoroscopia em dois planos. No estável, fixar in situ, sem reduzir. No instável, aceitar apenas a redução suave que ocorra com o posicionamento; evitar manobras vigorosas que estirem os vasos retinaculares.",
      figureId: "epifisiolise-femoral-proximal:reducao",
      tips: [
        "Confirmar imagem nítida em AP e perfil antes de iniciar",
        "Considerar descompressão/artrotomia no instável para aliviar a pressão intracapsular",
      ],
      pitfalls: [
        "Redução anatômica forçada no instável — pico de risco de necrose",
        "Aceitar imagem fluoroscópica de má qualidade",
      ],
    },
    {
      n: 3,
      title: "Definir a entrada e o trajeto do parafuso",
      detail:
        "Como a epífise escorrega posteroinferiormente, o ponto de entrada correto fica na cortical anterolateral do colo, não no trocânter. O fio-guia deve cruzar a fise perpendicularmente e mirar o centro da epífise em ambos os planos.",
      figureId: "epifisiolise-femoral-proximal:fixacao-in-situ",
      tips: [
        "Entrada mais anterior quanto maior o escorregamento",
        "Perpendicular à fise maximiza a estabilidade e a compressão",
      ],
      pitfalls: [
        "Entrar pelo trocânter e sair posterossuperior, junto aos vasos",
        "Trajeto excêntrico com risco de penetração articular",
      ],
    },
    {
      n: 4,
      title: "Passar o fio-guia e conferir a posição central",
      detail:
        "Avançar o fio até o osso subcondral central da epífise. Girar o membro sob fluoroscopia (manobra de aproximação/afastamento) para excluir penetração articular oculta em qualquer rotação. A ponta central-central protege a cartilagem e os vasos.",
      figureId: "epifisiolise-femoral-proximal:fixacao-in-situ",
      tips: [
        "A posição central em todos os planos é o objetivo de segurança",
        "Deixar margem subcondral adequada",
      ],
      pitfalls: [
        "Aceitar posição excêntrica que se aproxima da superfície articular",
        "Não checar a rotação (penetração intermitente)",
      ],
    },
    {
      n: 5,
      title: "Inserir o parafuso canulado único",
      detail:
        "Medir o comprimento, brocar sobre o fio e inserir um parafuso canulado (usualmente de rosca parcial ou total, 6,5–7,3 mm) até a posição central. Um único parafuso central é suficiente e estável na maioria dos casos; garantir que a rosca cruze a fise sem ultrapassar a cartilagem.",
      figureId: "epifisiolise-femoral-proximal:fixacao-in-situ",
      tips: [
        "Parafuso único reduz o risco de penetração comparado a múltiplos implantes",
        "Confirmar comprimento em AP e perfil antes de soltar o fio",
      ],
      pitfalls: [
        "Sobre-inserir e penetrar a articulação",
        "Rosca insuficiente cruzando a fise (fixação frágil)",
      ],
    },
    {
      n: 6,
      title: "Decidir sobre a profilaxia contralateral e o seguimento",
      detail:
        "Avaliar o risco de escorregamento contralateral (idade/imaturidade esquelética, endocrinopatia, sinais radiográficos de risco, dificuldade de seguimento) e discutir a fixação profilática. Orientar sobre restrição de carga, retorno progressivo e vigilância do quadril oposto até o fechamento fisário.",
      figureId: "epifisiolise-femoral-proximal:profilaxia-contralateral",
      tips: [
        "O índice de Oxford/ângulo cabeça-colo posterior ajuda a estimar o risco contralateral",
        "Profilaxia é mais atraente quanto mais jovem o paciente",
      ],
      pitfalls: [
        "Perder de vista o quadril contralateral no seguimento",
        "Indicar profilaxia sem discutir riscos com a família",
      ],
    },
  ],
  postop: {
    immobilization:
      "Não se usa gesso; a estabilidade é dada pelo implante. Muletas para descarga inicial; a articulação é mobilizada precocemente conforme a dor.",
    weightBearing:
      "No estável, carga protegida com progressão em poucas semanas. No instável, restrição de carga mais prolongada (frequentemente ~6 semanas ou mais), individualizada pela gravidade e pelo risco vascular.",
    rehab: [
      {
        window: "0–6 semanas",
        weightBearing: "Descarga/carga protegida com muletas",
        focus: "Controle da dor, mobilidade suave do quadril, proteção da fixação; mais restritivo no instável.",
      },
      {
        window: "6–12 semanas",
        weightBearing: "Progressão para carga total conforme a estabilidade",
        focus: "Recuperação de amplitude e marcha; retorno gradual às atividades.",
      },
      {
        window: "3–12 meses",
        weightBearing: "Total",
        focus: "Reforço muscular, retorno ao esporte após consolidação e vigilância de necrose/condrólise e do quadril contralateral.",
      },
    ],
    followup:
      "Seguimento radiográfico seriado até o fechamento da fise, monitorando necrose avascular, condrólise, deformidade residual/impacto femoroacetabular e o quadril contralateral. Deformidade sintomática pode exigir osteoplastia ou osteotomia após a maturidade.",
  },
  complications: [
    {
      name: "Necrose avascular (osteonecrose)",
      detail:
        "Complicação mais temida, muito mais frequente no escorregamento instável (relatada em torno de 20% a 50%); decorre de lesão dos vasos retinaculares por estiramento, dobra ou tamponamento capsular.",
      prevention:
        "Evitar redução forçada, considerar descompressão capsular no instável, posicionar o parafuso central sem perfuração posterossuperior.",
    },
    {
      name: "Condrólise",
      detail:
        "Perda aguda da cartilagem articular com rigidez e dor; classicamente associada à penetração articular do implante, que pode ser intermitente com a rotação.",
      prevention: "Ponta central-central e confirmação fluoroscópica em múltiplas rotações.",
    },
    {
      name: "Escorregamento contralateral",
      detail:
        "Parcela relevante dos pacientes evolui com escorregamento do quadril oposto, frequentemente durante o seguimento; risco maior nos mais jovens e nas endocrinopatias.",
      prevention: "Vigilância radiográfica do quadril contralateral e fixação profilática em casos selecionados.",
    },
    {
      name: "Deformidade residual e impacto femoroacetabular",
      detail:
        "A saliência metafisária anterossuperior (deformidade tipo cam) pode causar impacto, dor e lesão labral/condral, sobretudo nos escorregamentos moderados a graves.",
      prevention: "Fixação precoce, osteoplastia do colo ou osteotomia corretiva quando sintomático.",
    },
    {
      name: "Progressão do escorregamento e falha de fixação",
      detail: "Rosca insuficiente cruzando a fise ou fixação subdimensionada podem permitir progressão.",
      prevention: "Parafuso central com rosca adequada cruzando a fise; conferência intraoperatória em dois planos.",
    },
  ],
  evidence: [
    {
      id: "loder-1993-estabilidade",
      claim:
        "Ao reclassificar escorregamentos como estáveis ou instáveis pela capacidade de apoiar o peso, a necrose avascular ocorreu em 47% dos instáveis e em nenhum dos estáveis; não se demonstrou associação entre redução precoce e necrose.",
      takeaway:
        "A estabilidade física é o principal preditor de prognóstico e passou a orientar a classificação e a conduta.",
      level: "III",
      studyType: "Coorte retrospectiva multicêntrica",
      era: "classico",
      citation: {
        authors: "Loder RT, Richards BS, Shapiro PS, Reznick LR, Aronson DD",
        title: "Acute slipped capital femoral epiphysis: the importance of physeal stability.",
        journal: "J Bone Joint Surg Am",
        year: 1993,
        pmid: "8354671",
        doi: "10.2106/00004623-199308000-00002",
      },
    },
    {
      id: "loder-2013-nav-mecanismo",
      claim:
        "Revisão da literatura recente estimou necrose avascular global de 21% no escorregamento instável e associou-a a dobra dos vasos retinaculares e a pressão intracapsular elevada, reduzida por artrotomia descompressiva.",
      takeaway:
        "O risco vascular do instável é multifatorial; descompressão e estratégias que poupam os vasos podem reduzir a necrose, mas não a eliminam.",
      level: "IV",
      studyType: "Revisão narrativa",
      era: "atual",
      citation: {
        authors: "Loder RT",
        title:
          "What is the cause of avascular necrosis in unstable slipped capital femoral epiphysis and what can be done to lower the rate?",
        journal: "J Pediatr Orthop",
        year: 2013,
        pmid: "23764800",
        doi: "10.1097/BPO.0b013e318277172e",
      },
    },
    {
      id: "devries-2022-in-situ",
      claim:
        "Coorte prospectiva de escorregamentos estáveis tratados com parafuso in situ teve baixa taxa de complicação do procedimento índice (2%), com 22% de cirurgias secundárias, mais prováveis nos escorregamentos graves.",
      takeaway:
        "A fixação in situ é segura e efetiva no estável; a gravidade prediz necessidade de procedimentos adicionais, não a piora dos desfechos relatados pelo paciente.",
      level: "II",
      studyType: "Coorte prospectiva",
      era: "atual",
      citation: {
        authors: "DeVries CA, Badrinath R, Baird SG, Bomar JD, Upasani VV",
        title: "Prospective evaluation of in situ screw fixation for stable slipped capital femoral epiphysis.",
        journal: "J Child Orthop",
        year: 2022,
        pmid: "36238141",
        doi: "10.1177/18632521221118041",
      },
    },
    {
      id: "anghilieri-2022-profilaxia",
      claim:
        "Revisão sistemática de 811 crianças submetidas à fixação profilática do quadril contralateral mostrou procedimento seguro, com complicações graves raras e menor taxa de complicações maiores com parafuso canulado do que com fios (5,37% x 17,95%).",
      takeaway:
        "A profilaxia contralateral é uma opção segura em casos selecionados, preferindo-se parafuso canulado; falta análise formal de custo-benefício.",
      level: "III",
      studyType: "Revisão sistemática de estudos observacionais",
      era: "atual",
      citation: {
        authors: "Anghilieri FM, Morelli I, Peretti GM, Verdoni F, Curci D",
        title:
          "Role of the prophylactic fixation of contralateral unaffected hip in paediatric unilateral slipped capital femoral epiphysis: a systematic review.",
        journal: "EFORT Open Rev",
        year: 2022,
        pmid: "35192513",
        doi: "10.1530/EOR-21-0061",
      },
    },
    {
      id: "tucker-2022-separacao-anterior",
      claim:
        "A separação física anterior medida no perfil de Lauenstein correlacionou-se com necrose avascular: valor crítico de 7,5 mm teve 100% de sensibilidade e 98,6% de especificidade para necrose.",
      takeaway:
        "Um marcador radiográfico simples ajuda a estratificar o risco vascular além da estabilidade clínica isolada.",
      level: "III",
      studyType: "Coorte retrospectiva",
      era: "atual",
      citation: {
        authors: "Tucker A, Cosgrove A, Ballard J",
        title:
          "Presence and magnitude of anterior physeal separation in slipped upper femoral epiphysis helps identifying those at high risk for avascular necrosis.",
        journal: "Injury",
        year: 2022,
        pmid: "36307269",
        doi: "10.1016/j.injury.2022.10.020",
      },
    },
  ],
  pearls: [
    "Todo adolescente com dor no joelho e exame do joelho normal deve ter o quadril radiografado.",
    "A rotação externa obrigatória do membro à flexão do quadril é um sinal clínico clássico.",
    "Loder (apoia x não apoia o peso) prediz melhor a necrose do que a duração dos sintomas.",
    "No estável, um parafuso canulado único e central resolve a maioria dos casos.",
    "Como a epífise escorrega posteroinferior, a entrada do parafuso é anterolateral no colo.",
    "Investigar endocrinopatia quando o paciente é atípico: muito jovem, magro ou fora da faixa.",
  ],
  pitfalls: [
    "Retardar o diagnóstico tratando apenas a dor referida ao joelho.",
    "Reduzir à força um escorregamento instável e precipitar necrose avascular.",
    "Entrar pelo trocânter e posicionar o parafuso posterossuperior, junto aos vasos retinaculares.",
    "Deixar rosca insuficiente cruzando a fise, permitindo progressão do escorregamento.",
    "Não checar a penetração articular em várias rotações (risco de condrólise).",
    "Perder o seguimento do quadril contralateral até o fechamento da fise.",
  ],
  figures: [
    {
      id: "epifisiolise-femoral-proximal:anatomia",
      caption:
        "Fêmur proximal: epífise, fise e vasos retinaculares posterossuperiores (ramos da circunflexa femoral medial).",
      alt: "Anatomia do fêmur proximal mostrando epífise, placa de crescimento e vascularização epifisária",
      kind: "diagram",
    },
    {
      id: "epifisiolise-femoral-proximal:linha-klein",
      variant: "normal",
      caption: "Linha de Klein normal: a tangente à cortical superior do colo intersecta parte da epífise.",
      alt: "Radiografia esquemática com linha de Klein normal intersectando a epífise femoral",
      kind: "diagram",
    },
    {
      id: "epifisiolise-femoral-proximal:linha-klein",
      variant: "escorregamento",
      caption: "Sinal de Trethowan: no escorregamento, a epífise cai abaixo da linha de Klein.",
      alt: "Sinal de Trethowan com a epífise abaixo da linha de Klein",
      kind: "diagram",
    },
    {
      id: "epifisiolise-femoral-proximal:classificacao-loder",
      variant: "estavel",
      caption: "Loder estável: paciente apoia o peso; necrose avascular rara.",
      alt: "Escorregamento estável de Loder com baixo risco de necrose",
      kind: "diagram",
    },
    {
      id: "epifisiolise-femoral-proximal:classificacao-loder",
      variant: "instavel",
      caption: "Loder instável: paciente não apoia o peso; alto risco de necrose avascular.",
      alt: "Escorregamento instável de Loder com alto risco de necrose",
      kind: "diagram",
    },
    {
      id: "epifisiolise-femoral-proximal:graus-escorregamento",
      variant: "leve",
      caption: "Gravidade pelo ângulo de Southwick: escorregamento leve (< 30°).",
      alt: "Escorregamento leve pelo ângulo de Southwick",
      kind: "diagram",
    },
    {
      id: "epifisiolise-femoral-proximal:graus-escorregamento",
      variant: "moderado",
      caption: "Escorregamento moderado (30°–50°) pelo ângulo de Southwick.",
      alt: "Escorregamento moderado pelo ângulo de Southwick",
      kind: "diagram",
    },
    {
      id: "epifisiolise-femoral-proximal:graus-escorregamento",
      variant: "grave",
      caption: "Escorregamento grave (> 50°): maior deformidade residual e impacto.",
      alt: "Escorregamento grave pelo ângulo de Southwick",
      kind: "diagram",
    },
    {
      id: "epifisiolise-femoral-proximal:fixacao-in-situ",
      caption: "Fixação in situ: parafuso canulado único, central, perpendicular à fise e sem violar a articulação.",
      alt: "Fixação in situ com parafuso canulado central do fêmur proximal",
      kind: "diagram",
    },
    {
      id: "epifisiolise-femoral-proximal:reducao",
      caption: "Escorregamento instável: a redução forçada pode dobrar/tamponar os vasos retinaculares e causar necrose.",
      alt: "Risco vascular na redução do escorregamento instável",
      kind: "diagram",
    },
    {
      id: "epifisiolise-femoral-proximal:profilaxia-contralateral",
      caption: "Fixação in situ do quadril acometido e fixação profilática do contralateral em casos de alto risco.",
      alt: "Fixação profilática do quadril contralateral na epifisiólise femoral proximal",
      kind: "diagram",
    },
    {
      id: "epifisiolise-femoral-proximal:necrose-avascular",
      caption: "Necrose avascular segmentar da epífise: principal causa de morbidade a longo prazo.",
      alt: "Necrose avascular segmentar da epífise femoral proximal",
      kind: "diagram",
    },
  ],
  meta: {
    lastReviewed: "2026-07-13",
    sources: [
      "SBOT. Edital TEOT 2026: Bibliografia para o Exame de Título de Ortopedia e Traumatologia (Ortopedia Pediátrica).",
      "Herring JA. Tachdjian's Pediatric Orthopaedics. 6th ed. 2022.",
      "Weinstein SL, Flynn JM. Lovell and Winter's Pediatric Orthopaedics. 8th ed. 2021.",
      "Waters PM, Skaggs DL, Flynn JM. Rockwood and Wilkins' Fractures in Children. 10th ed. 2024.",
      "Hebert S, Lech O. Ortopedia e Traumatologia: Princípios e Prática. 6ª ed. 2025.",
    ],
    attribution: "Conteúdo original Revisortopedia; figuras esquemáticas originais, sem reprodução de material protegido.",
    figureReference:
      "Referência editorial: Rockwood and Wilkins' Fractures in Children, 10a ed. (2024), capítulo de escorregamento epifisário femoral proximal; redesenho original, não reprodução.",
  },
});
