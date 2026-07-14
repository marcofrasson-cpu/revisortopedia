import { defineTopic } from "../../types/topic";

export const topic = defineTopic({
  id: "ortoped-pediatrica-antebraco-monteggia-crianca",
  slug: "monteggia-crianca",
  regionId: "ortopedia-pediatrica",
  bone: "Antebraço (criança)",
  injury: "Fratura-luxação de Monteggia",
  title: "Monteggia na criança",
  subtitle:
    "Reconhecer a luxação da cabeça do rádio pela linha radiocapitelar em toda radiografia de antebraço, tratar no agudo pelo padrão da fratura da ulna e entender por que a lesão perdida vira um problema de reconstrução.",
  laterality: null,
  status: "complete",
  overview:
    "Monteggia é a associação de uma fratura da ulna — ou de uma simples deformação plástica — com a luxação da cabeça do rádio. Na criança, o essencial é entender que rádio e ulna formam um anel funcional: a ulna é o pilar, e a cabeça do rádio só sai do lugar se a ulna encurtar, angular ou encurvar. Daí a regra que organiza todo o tratamento: reduzir a ulna anatomicamente reduz a cabeça do rádio. Se a cabeça não reduz, a ulna ainda não está reduzida — ou há interposição do ligamento anular.\n\nO problema clínico dominante não é técnico, é diagnóstico. A fratura da ulna é óbvia e rouba a atenção; a luxação da cabeça do rádio é discreta, sobretudo quando a lesão ulnar é apenas uma deformação plástica sem traço visível. Séries mostram que uma parcela expressiva das lesões de Monteggia passa despercebida na avaliação radiográfica inicial. A defesa contra isso é mecânica: toda radiografia de antebraço da criança inclui cotovelo e punho, e em toda incidência traça-se a linha radiocapitelar pelo colo do rádio, que deve cruzar o capítulo. Uma linha anormal é forte indício de lesão, mas não é patognomônica — no cotovelo normal da criança pequena existe variação, e a linha traçada pelo eixo da diáfise erra o capítulo em cerca de 16% dos cotovelos normais, ao passo que a traçada pelo colo, no perfil, é bem mais fiel.\n\nNo agudo, o tratamento segue o padrão da fratura da ulna, e não o tipo de Bado: deformação plástica e galho verde costumam ser estáveis e vão bem com redução fechada e gesso; traços transversos ou oblíquos curtos pedem haste intramedular; oblíquos longos e cominutos, placa. Fraturas ulnares completas tratadas sem fixação são as que falham. A luxação perdida evolui para a Monteggia crônica: dor, proeminência da cabeça do rádio, perda de flexão e de supinação, valgo progressivo e, com o tempo, deformação irreversível da própria cabeça do rádio. A reconstrução é sempre da ulna — osteotomia de alongamento e angulação, com ou sem reconstrução do ligamento anular — e seus resultados dependem sobretudo de dois fatores que o cirurgião não controla: a idade esquelética e o tempo decorrido desde a lesão.",
  keyFacts: [
    { label: "Definição", value: "Fratura ou deformação plástica da ulna + luxação da cabeça do rádio" },
    { label: "Regra de ouro", value: "Reduzir a ulna anatomicamente reduz a cabeça do rádio" },
    { label: "Diagnóstico", value: "Linha radiocapitelar pelo COLO deve cruzar o capítulo em TODAS as incidências" },
    { label: "Bado na criança", value: "Tipo I (anterior) ~70–75%; tipo III (lateral) o segundo" },
    { label: "Conduta no agudo", value: "Guiada pelo padrão da ULNA, não pelo tipo de Bado" },
    { label: "Armadilha", value: "Ulna completa tratada sem fixação — é o padrão que falha" },
    { label: "Crônica", value: "Osteotomia de alongamento/angulação da ulna ± ligamento anular" },
    { label: "Prognóstico na crônica", value: "Melhor quanto menor a idade esquelética e menor o intervalo" },
  ],
  anatomy: {
    text:
      "A articulação radioulnar proximal é um pivô: a cabeça do rádio gira dentro do anel formado pela incisura radial da ulna e pelo ligamento anular, que se insere nas bordas anterior e posterior dessa incisura e abraça o colo. A estabilidade da cabeça do rádio depende, portanto, de três coisas: do ligamento anular, do complexo ligamentar colateral lateral (sobretudo o ligamento colateral ulnar lateral) e — a mais importante do ponto de vista prático — do comprimento e da curvatura corretos da ulna. A ulna é o pilar do antebraço; o rádio se articula com ela e com o capítulo. Qualquer encurtamento ou angulação ulnar, mesmo sutil, desloca a cabeça do rádio, e é por isso que a deformação plástica da ulna, sem nenhum traço visível, basta para produzir uma luxação.\n\nO esqueleto imaturo acrescenta três particularidades. A cabeça do rádio é em grande parte cartilaginosa na criança pequena, e o núcleo de ossificação só aparece por volta dos 4–5 anos — o que significa que a radiografia mostra menos do que existe, e que a luxação pode ser subestimada. A fise radial proximal, logo distal à cabeça, e a apófise do olécrano são zonas a respeitar na fixação: a haste intramedular entra pelo olécrano por um ponto que poupa a apófise. Por fim, o periósteo espesso da criança é ao mesmo tempo aliado — serve de dobradiça e de tirante que estabiliza a redução — e adversário, pois pode se interpor no foco. O nervo interósseo posterior cruza a face lateral do colo do rádio, dentro ou logo distal ao músculo supinador, e é o nervo em risco tanto na luxação anterior quanto na abordagem lateral do cotovelo.",
    figureIds: [
      "monteggia-crianca:anatomia",
      "monteggia-crianca:linha-radiocapitelar",
    ],
  },
  classification: [
    {
      id: "bado",
      name: "Classificação de Bado",
      basis: "Direção da luxação da cabeça do rádio, que acompanha o ápice da angulação da ulna.",
      note:
        "Descritiva e útil para a comunicação, mas NÃO guia o tratamento na criança: o ápice da ulna aponta para o mesmo lado da luxação. O tipo I domina na infância; o tipo II, típico do adulto, é raro na criança.",
      types: [
        {
          code: "I",
          label: "Anterior",
          description:
            "Luxação anterior da cabeça do rádio com fratura da diáfise ulnar angulada com ápice anterior. É o padrão da criança, responsável por cerca de 70–75% dos casos.",
          figureId: "monteggia-crianca:bado",
          figureVariant: "I",
        },
        {
          code: "II",
          label: "Posterior",
          description:
            "Luxação posterior ou posterolateral com ápice posterior da ulna. É o tipo mais comum no adulto e raro na criança; quando ocorre, procurar fratura associada da cabeça do rádio e do coronoide.",
          figureId: "monteggia-crianca:bado",
          figureVariant: "II",
        },
        {
          code: "III",
          label: "Lateral",
          description:
            "Luxação lateral ou anterolateral com fratura em galho verde da metáfise ulnar proximal, ápice lateral. É o segundo tipo mais frequente na criança e o que mais se associa à lesão do nervo interósseo posterior.",
          figureId: "monteggia-crianca:bado",
          figureVariant: "III",
        },
        {
          code: "IV",
          label: "Anterior + fratura do rádio",
          description:
            "Luxação anterior da cabeça do rádio com fratura da ulna E da diáfise radial no mesmo nível, distal à cabeça. Rara. Fixar primeiro o rádio converte a lesão em um tipo I funcional.",
          figureId: "monteggia-crianca:bado",
          figureVariant: "IV",
        },
      ],
    },
    {
      id: "padrao-ulnar",
      name: "Padrão da fratura da ulna (estratégia de Ring/Waters)",
      basis: "Morfologia do traço ulnar, que determina a estabilidade e, portanto, a fixação.",
      note:
        "Esta é a classificação que decide a conduta no agudo. Tratar segundo o padrão evitou falhas em série multicêntrica; as falhas concentraram-se nas fraturas completas tratadas sem fixação.",
      types: [
        {
          code: "PL",
          label: "Deformação plástica",
          description:
            "Encurvamento da ulna sem traço visível. Fácil de perder — comparar com o lado contralateral. Estável após a redução: redução fechada e gesso.",
          figureId: "monteggia-crianca:padrao-ulnar",
          figureVariant: "plastica",
        },
        {
          code: "GV",
          label: "Galho verde / incompleta",
          description:
            "Cortical de tração rompida com a cortical côncava íntegra. A cortical intacta funciona como dobradiça e mantém o comprimento: redução fechada e gesso.",
          figureId: "monteggia-crianca:padrao-ulnar",
          figureVariant: "galho-verde",
        },
        {
          code: "TR",
          label: "Transversa / oblíqua curta",
          description:
            "Fratura completa, estável em comprimento e instável em rotação. Haste intramedular: controla o alinhamento e o comprimento, que é o que a cabeça do rádio precisa.",
          figureId: "monteggia-crianca:padrao-ulnar",
          figureVariant: "transversa",
        },
        {
          code: "OB",
          label: "Oblíqua longa / cominuta",
          description:
            "Encurta e roda; a haste não segura o comprimento. Placa e parafusos. É também o padrão que mais exige redução aberta da articulação radiocapitelar.",
          figureId: "monteggia-crianca:padrao-ulnar",
          figureVariant: "obliqua",
        },
      ],
    },
    {
      id: "cronicidade",
      name: "Aguda x crônica",
      basis: "Tempo decorrido entre a lesão e o tratamento definitivo.",
      note:
        "Não há um limite consensual. Na prática, além de 2–3 semanas a redução fechada deixa de ser confiável; além de ~7 meses, os resultados da reconstrução pioram de modo consistente.",
      types: [
        {
          code: "AG",
          label: "Aguda (até ~2–3 semanas)",
          description:
            "A redução da ulna ainda reduz a cabeça do rádio por manobra fechada ou fixação simples. É a janela em que o resultado esperado é excelente.",
        },
        {
          code: "CR",
          label: "Crônica (lesão perdida)",
          description:
            "Consolidação viciosa ou encurtamento da ulna com a cabeça do rádio persistentemente luxada. Exige osteotomia da ulna; a cabeça do rádio pode já estar deformada e a incisura, preenchida por fibrose.",
          figureId: "monteggia-crianca:osteotomia-cronica",
        },
      ],
    },
  ],
  indications: {
    operative: [
      "Fratura ulnar completa com traço transverso ou oblíquo curto — haste intramedular",
      "Fratura ulnar oblíqua longa ou cominuta — placa e parafusos",
      "Falha em obter ou manter a redução concêntrica da cabeça do rádio por meio fechado",
      "Perda da redução ulnar ou radiocapitelar no seguimento do gesso",
      "Bado IV — fixar o rádio e a ulna",
      "Suspeita de interposição do ligamento anular ou de fragmento osteocondral (redução não concêntrica)",
      "Fratura exposta ou síndrome compartimental associada",
      "Monteggia crônica sintomática com cabeça do rádio ainda não deformada e criança com crescimento restante",
    ],
    nonOperative: [
      "Deformação plástica da ulna com cabeça do rádio redutível e estável",
      "Fratura em galho verde / incompleta da ulna com redução estável",
      "Qualquer padrão em que a redução da ulna seja anatômica e a radiocapitelar concêntrica e estável, com adesão garantida ao seguimento semanal",
    ],
    decisionNotes:
      "A decisão no agudo é tomada pelo padrão da ULNA, não pelo tipo de Bado. A pergunta prática é: este traço mantém o comprimento da ulna sozinho? Se mantém (plástica, galho verde), gesso; se não mantém em rotação (transverso), haste; se não mantém em comprimento (oblíquo longo, cominuto), placa. A série multicêntrica de Ramski e colaboradores mostrou zero falhas entre os tratados por essa estratégia ou de modo mais rigoroso, contra 19% de falhas entre os tratados de modo menos rigoroso — e todas as falhas ocorreram em fraturas completas tratadas sem fixação.\n\nHá uma nuance importante: Hart e colaboradores mostraram que mesmo fraturas ulnares completas podem ir bem com redução fechada e gesso, com perda de redução em cerca de 14% dos casos e recuperação plena após a conversão cirúrgica. A leitura conjunta é razoável: uma tentativa de tratamento fechado na fratura completa é defensável desde que haja redução anatômica, gesso bem moldado e seguimento radiográfico semanal rigoroso nas primeiras 3 semanas. Sem essa garantia de seguimento, fixar é o caminho mais seguro — porque o preço da perda despercebida não é uma reoperação simples, é uma Monteggia crônica.\n\nNa crônica, a indicação depende de idade esquelética, intervalo e da forma da cabeça do rádio. Ko e colaboradores encontraram os melhores resultados abaixo de um escore de Sauvegrain de 21,5 (aproximadamente 14 anos de idade óssea em meninos e 11,5 em meninas) e com intervalo ≤ 7 meses; acima desse escore, todos os pacientes tiveram reluxação ou artrose, independentemente do intervalo. Cabeça do rádio já deformada previu resultado não ideal em 100% dos casos daquela série. Em adolescentes próximos da maturidade, com cabeça deformada e sintomas leves, observar é uma escolha legítima — e a ressecção da cabeça do rádio fica reservada para o esqueleto maduro.",
  },
  approaches: [
    {
      id: "fechada",
      name: "Redução fechada e gesso (manobra de tração e supinação)",
      indication:
        "Deformação plástica e galho verde da ulna; fratura completa selecionada com seguimento garantido.",
      interval:
        "Sem intervalo cirúrgico. Tração longitudinal com o cotovelo em extensão, correção da angulação ulnar por pressão direta sobre o ápice e, com a ulna alinhada, flexão a 90–110° com supinação — que relaxa o bíceps e tensiona o ligamento anular sobre a cabeça reduzida.",
      atRisk: [
        "Síndrome compartimental (gesso apertado ou flexão excessiva com edema)",
        "Perda tardia da redução (a lesão é dinâmica nas 3 primeiras semanas)",
      ],
      figureId: "monteggia-crianca:reducao-aguda",
    },
    {
      id: "haste",
      name: "Haste intramedular da ulna (entrada pelo olécrano)",
      indication: "Fratura ulnar transversa ou oblíqua curta.",
      interval:
        "Incisão de ~1 cm sobre a face lateral da ponta do olécrano; ponto de entrada na metáfise, poupando a apófise olecraniana. Fio de Kirschner ou haste elástica anterógrada, pré-contornada, atravessando o foco após redução fechada.",
      atRisk: [
        "Apófise do olécrano (ponto de entrada muito proximal ou central)",
        "Nervo ulnar (afastamento medial excessivo)",
        "Irritação de partes moles pela ponta do implante deixada longa",
      ],
      figureId: "monteggia-crianca:fixacao",
    },
    {
      id: "placa",
      name: "Abordagem subcutânea da ulna (placa e parafusos)",
      indication: "Fratura ulnar oblíqua longa ou cominuta; osteotomia na Monteggia crônica.",
      interval:
        "Incisão longitudinal direta sobre a borda subcutânea da ulna; intervalo entre o flexor ulnar do carpo (nervo ulnar) e o extensor ulnar do carpo (nervo interósseo posterior). A ulna é subcutânea — o acesso é direto ao osso.",
      atRisk: [
        "Nervo ulnar (dissecção volar/medial excessiva)",
        "Nervo interósseo posterior (extensão proximal e lateral do acesso)",
        "Artéria ulnar",
      ],
      figureId: "monteggia-crianca:fixacao",
    },
    {
      id: "kocher",
      name: "Acesso lateral de Kocher (redução aberta da cabeça do rádio)",
      indication:
        "Redução não concêntrica por interposição; reconstrução do ligamento anular na Monteggia crônica.",
      interval:
        "Entre o ancôneo (nervo radial) e o extensor ulnar do carpo (nervo interósseo posterior). Manter o antebraço em pronação afasta o interósseo posterior do campo; não estender a dissecção distal ao colo.",
      atRisk: [
        "Nervo interósseo posterior — o risco maior deste acesso",
        "Complexo ligamentar colateral lateral (evitar liberação posterior ao eixo, sob pena de instabilidade rotatória posterolateral)",
        "Suprimento vascular da cabeça do rádio (desperiostização circunferencial do colo → necrose)",
      ],
      figureId: "monteggia-crianca:osteotomia-cronica",
    },
    {
      id: "osteotomia",
      name: "Osteotomia da ulna com alongamento e angulação (crônica)",
      indication:
        "Monteggia crônica com crescimento restante e cabeça do rádio ainda não deformada.",
      interval:
        "Acesso subcutâneo à ulna proximal. Osteotomia — em geral no nível da deformidade — com abertura em cunha de ápice posterior e alongamento, mantida por placa. O alongamento e a angulação necessários crescem proporcionalmente ao tempo desde a lesão.",
      atRisk: [
        "Nervo interósseo posterior (na redução da cabeça do rádio)",
        "Síndrome compartimental após alongamento agudo",
        "Retardo de consolidação no foco da osteotomia",
      ],
      figureId: "monteggia-crianca:osteotomia-cronica",
    },
    {
      id: "fixador",
      name: "Osteotomia + fixador externo monolateral (correção gradual)",
      indication:
        "Monteggia crônica de longa data, com grande encurtamento ulnar ou tensão excessiva na redução aguda.",
      interval:
        "Osteotomia da ulna proximal por mini-acesso subcutâneo; pinos proximais e distais na borda subcutânea; distração e angulação progressivas em regime ambulatorial (cerca de 1 mm/dia), até a redução radiocapitelar.",
      atRisk: [
        "Infecção do trajeto dos pinos",
        "Nervo ulnar e nervo interósseo posterior na colocação dos pinos",
        "Consolidação prematura ou regenerado insuficiente",
      ],
      figureId: "monteggia-crianca:fixador-externo",
    },
  ],
  technique: [
    {
      n: 1,
      title: "Diagnóstico: traçar a linha radiocapitelar em todas as incidências",
      detail:
        "Radiografias em AP e perfil verdadeiros que incluam cotovelo E punho. Traçar a linha pelo eixo do COLO do rádio — não pela diáfise: ela deve cruzar o capítulo em todas as incidências. Um perfil obtido em obliquidade é a causa mais comum de uma linha falsamente anormal; se houver dúvida, repetir o perfil verdadeiro ou radiografar o lado contralateral para comparação. Procurar ativamente a deformação plástica da ulna: comparar a retilineidade da borda subcutânea com o lado oposto.",
      figureId: "monteggia-crianca:linha-radiocapitelar",
      figureVariant: "luxado",
      tips: [
        "Toda fratura isolada da ulna da criança é uma Monteggia até prova em contrário",
        "A linha pelo colo, no perfil, erra o capítulo em cerca de 1% dos cotovelos normais; pela diáfise, em ~16%",
        "Documentar o exame do nervo interósseo posterior antes de qualquer manobra (extensão do polegar e dos dedos)",
      ],
      pitfalls: [
        "Aceitar um perfil oblíquo e concluir que a linha 'está boa'",
        "Radiografar apenas o antebraço, sem incluir o cotovelo",
        "Interpretar a linha anormal como patognomônica: no lactente há variação fisiológica considerável",
      ],
    },
    {
      n: 2,
      title: "Classificar o padrão da ULNA e escolher a fixação",
      detail:
        "Antes de qualquer manobra, definir o traço ulnar: deformação plástica, galho verde, transverso/oblíquo curto ou oblíquo longo/cominuto. É esse padrão — e não o tipo de Bado — que decide a conduta. Plástica e galho verde: redução fechada e gesso. Transverso/oblíquo curto: haste intramedular. Oblíquo longo/cominuto: placa. No Bado IV, fixar o rádio primeiro converte a lesão em um tipo I funcional e simplifica a redução.",
      figureId: "monteggia-crianca:padrao-ulnar",
      figureVariant: "transversa",
      tips: [
        "A pergunta operacional: este traço mantém sozinho o COMPRIMENTO da ulna?",
        "As falhas da série multicêntrica concentraram-se todas nas fraturas completas tratadas sem fixação",
      ],
      pitfalls: [
        "Deixar-se guiar pelo tipo de Bado, que descreve a direção mas não prediz a estabilidade",
        "Usar haste em oblíqua longa: encurta e roda, e a cabeça do rádio reluxa",
      ],
    },
    {
      n: 3,
      title: "Reduzir a ulna — a cabeça do rádio segue",
      detail:
        "Sob anestesia geral, tração longitudinal com o cotovelo em extensão e o antebraço em supinação; corrigir a angulação ulnar por pressão direta sobre o ápice, restaurando comprimento e curvatura. A cabeça do rádio costuma reduzir com um estalido palpável. Confirmar com radioscopia em AP e perfil: a linha radiocapitelar deve cruzar o capítulo nas duas incidências. Se a ulna está anatômica e a cabeça não reduz, a causa é interposição — em geral do ligamento anular — e a indicação é abrir.",
      figureId: "monteggia-crianca:reducao-aguda",
      tips: [
        "A supinação relaxa o bíceps e tensiona o ligamento anular sobre a cabeça reduzida",
        "Uma redução 'quase' concêntrica não é concêntrica: comparar com o contralateral se preciso",
      ],
      pitfalls: [
        "Aceitar redução ulnar imperfeita: alguns graus residuais de angulação bastam para manter a cabeça subluxada",
        "Insistir em manobras fechadas repetidas diante de bloqueio mecânico — só aumenta o edema e o risco compartimental",
      ],
    },
    {
      n: 4,
      title: "Fixar a ulna conforme o padrão",
      detail:
        "Haste intramedular: entrada lateral na ponta do olécrano, poupando a apófise; haste elástica ou fio de Kirschner anterógrado, pré-contornado, atravessando o foco após redução fechada. Placa: acesso subcutâneo direto, redução anatômica com restauração do comprimento e da rotação, placa moldada na borda subcutânea. Em ambos os casos, o objetivo do implante não é o osso — é o comprimento da ulna, do qual depende a cabeça do rádio.",
      figureId: "monteggia-crianca:fixacao",
      figureVariant: "haste",
      tips: [
        "Deixar a ponta da haste dobrada e enterrada, ou externalizada de modo planejado para retirada simples",
        "Na placa, conferir a rotação pela continuidade da borda subcutânea da ulna",
      ],
      pitfalls: [
        "Ponto de entrada da haste na apófise do olécrano",
        "Desperiostização circunferencial do colo do rádio na redução aberta — necrose avascular da cabeça",
      ],
    },
    {
      n: 5,
      title: "Confirmar a redução concêntrica e testar a estabilidade",
      detail:
        "Ao final, radioscopia dinâmica: flexo-extensão completa e pronossupinação completa, observando a linha radiocapitelar em todo o arco. A redução deve ser concêntrica e estável em todas as posições. Identificar o arco em que a cabeça tende a subluxar — é ele que define a posição do gesso. Reavaliar o nervo interósseo posterior ao despertar.",
      figureId: "monteggia-crianca:reducao-aguda",
      tips: [
        "Se a cabeça só é estável em supinação e flexão, imobilizar exatamente nessa posição",
        "Instabilidade residual após ulna anatômica levanta a suspeita de lesão do complexo colateral lateral",
      ],
      pitfalls: [
        "Encerrar o procedimento com uma única imagem estática em perfil",
        "Não documentar o arco de instabilidade — o gesso acaba na posição errada",
      ],
    },
    {
      n: 6,
      title: "Imobilizar e vigiar — as 3 primeiras semanas decidem",
      detail:
        "Gesso axilopalmar bem moldado, em geral com cotovelo a 90–110° de flexão e supinação (Bado I). Evitar hiperflexão em membro edemaciado. Radiografias com 1, 2 e 3 semanas, sempre com AP e perfil verdadeiros e sempre traçando a linha radiocapitelar: é nesta janela que a redução se perde e é aqui que a lesão crônica é evitada. Qualquer perda de redução ulnar ou radiocapitelar é indicação de conversão cirúrgica imediata.",
      figureId: "monteggia-crianca:reducao-aguda",
      tips: [
        "Perda de redução detectada nas 3 primeiras semanas ainda é totalmente recuperável com cirurgia",
        "Orientar a família sobre dor desproporcional e parestesia — síndrome compartimental",
      ],
      pitfalls: [
        "Marcar o retorno para 4 semanas: quando a perda for vista, a janela já terá fechado",
        "Gesso curto ou mal moldado, que permite a reangulação da ulna",
      ],
    },
    {
      n: 7,
      title: "Monteggia crônica: planejar a osteotomia da ulna",
      detail:
        "Radiografias do antebraço inteiro e do lado contralateral para medir o encurtamento e a angulação da ulna. Avaliar a idade esquelética e a morfologia da cabeça do rádio: cabeça já deformada e incisura arredondada anunciam resultado não ideal. A operação é da ULNA — osteotomia com abertura em cunha de ápice posterior e alongamento, hipercorrigindo deliberadamente, fixada com placa. O alongamento e a angulação necessários crescem em proporção ao tempo decorrido desde a lesão. A reconstrução do ligamento anular (Bell Tawse e variantes) é complemento, não substituto: sem a ulna corrigida, ela falha.",
      figureId: "monteggia-crianca:osteotomia-cronica",
      tips: [
        "Melhores resultados abaixo de ~14 anos de idade óssea em meninos e ~11,5 em meninas, com intervalo ≤ 7 meses",
        "Hipercorrigir: a ulna 'curta demais' é a causa da reluxação, e a angulação de ápice posterior empurra a cabeça para o capítulo",
        "Limpar a incisura radial da fibrose antes de tentar a redução",
      ],
      pitfalls: [
        "Reconstruir o ligamento anular sem corrigir a ulna — falha previsível",
        "Alongamento agudo excessivo: risco de paralisia do interósseo posterior e de síndrome compartimental",
        "Indicar reconstrução no adolescente com escore de Sauvegrain > 21,5: reluxação ou artrose foram a regra",
      ],
    },
    {
      n: 8,
      title: "Crônica de longa data: considerar a correção gradual",
      detail:
        "Quando o encurtamento é grande ou a redução aguda exige tensão excessiva sobre uma cabeça já remodelada, a alternativa é a osteotomia com fixador externo monolateral e distração progressiva de cerca de 1 mm/dia até a redução radiocapitelar. A série de Liu e colaboradores obteve bom resultado radiográfico em 92% dos tratados com redução gradual, contra 50% dos tratados com redução aguda. A reoperação correlacionou-se de modo significativo com resultado ruim.",
      figureId: "monteggia-crianca:fixador-externo",
      tips: [
        "A redução gradual poupa o interósseo posterior e o suprimento da cabeça do rádio",
        "Permite ajuste fino ambulatorial da angulação e do comprimento, guiado por radiografias seriadas",
      ],
      pitfalls: [
        "Infecção dos pinos e consolidação prematura do regenerado",
        "Distração rápida demais, com dor e déficit neurológico",
      ],
    },
  ],
  postop: {
    immobilization:
      "Agudo tratado sem cirurgia ou com haste: gesso axilopalmar por 4–6 semanas, em 90–110° de flexão e na rotação em que a cabeça do rádio se mostrou estável (supinação no Bado I; extensão relativa no Bado II). Após placa em criança maior, tala axilopalmar por 2–3 semanas por conforto, com mobilização precoce. Crônica operada: gesso axilopalmar por 4–6 semanas; alguns protocolos mantêm um fio radiocapitelar transitório por 3–4 semanas em reduções instáveis, retirado antes da mobilização.",
    weightBearing:
      "Não há carga no membro superior. O que se gradua é o USO: durante a imobilização, mão livre para atividades leves de preensão, sem apoio de peso sobre o cotovelo e sem apoiar-se para levantar. Liberação para apoio de peso sobre o membro (engatinhar, barra, apoio de mãos) e para educação física apenas após a consolidação radiográfica, em torno de 8–12 semanas. Esportes de contato e de queda, após 3–4 meses e com arco funcional recuperado. Com fixador externo, o membro é usado apenas para atividades leves durante toda a distração.",
    rehab: [
      {
        window: "0–3 semanas",
        weightBearing: "Sem apoio de peso; mão e dedos livres",
        focus:
          "Vigilância — radiografias semanais com AP e perfil verdadeiros e traçado da linha radiocapitelar. Mobilidade ativa de ombro, punho e dedos; elevação e controle do edema. Orientação sobre síndrome compartimental.",
      },
      {
        window: "3–6 semanas",
        weightBearing: "Sem apoio de peso",
        focus:
          "Manutenção do gesso até a consolidação da ulna. Radiografia com 6 semanas para confirmar consolidação e redução concêntrica antes de retirar a imobilização.",
      },
      {
        window: "6–12 semanas",
        weightBearing: "Uso progressivo; sem apoio de peso até a consolidação",
        focus:
          "Retirada do gesso e mobilização ativa de flexo-extensão e pronossupinação. A criança recupera o arco sozinha na grande maioria dos casos — evitar mobilização passiva forçada, que alimenta rigidez e ossificação heterotópica.",
      },
      {
        window: "3–6 meses",
        weightBearing: "Livre após consolidação e arco funcional",
        focus:
          "Retorno pleno às atividades e ao esporte. Fortalecimento apenas se houver déficit persistente. Retirada eletiva da haste intramedular, em geral entre 3 e 6 meses.",
      },
    ],
    followup:
      "Seguimento semanal nas 3 primeiras semanas (a janela em que a redução se perde), depois com 6 semanas, 3 meses e 6 meses. Em toda consulta, radiografia com AP e perfil verdadeiros e traçado da linha radiocapitelar — a reluxação tardia é silenciosa. Na Monteggia crônica operada, seguimento até a maturidade esquelética: vigiar reluxação, deformidade progressiva da cabeça do rádio, artrose radiocapitelar e sinostose radioulnar proximal. Documentar o arco de movimento em cada retorno, pois a perda de supinação é o primeiro sinal de que algo se perdeu.",
  },
  complications: [
    {
      name: "Lesão perdida → Monteggia crônica",
      detail:
        "A complicação que define o tópico. A fratura ulnar rouba a atenção e a luxação passa despercebida — parcela expressiva das lesões de Monteggia não é identificada na avaliação radiográfica inicial, sobretudo quando a lesão ulnar é apenas uma deformação plástica. O resultado é dor, proeminência da cabeça do rádio, perda de flexão e de supinação, valgo progressivo e, com o tempo, deformação irreversível da cabeça do rádio e da incisura.",
      prevention:
        "Radiografia do antebraço sempre com cotovelo e punho; linha radiocapitelar pelo colo em todas as incidências; tratar toda fratura isolada da ulna da criança como Monteggia até prova em contrário.",
    },
    {
      name: "Perda tardia da redução",
      detail:
        "Ocorre nas 3 primeiras semanas, sobretudo em fraturas ulnares completas tratadas com gesso — cerca de 14% em série comparativa, e todas recuperaram função plena após conversão cirúrgica. Nas fraturas completas tratadas sem fixação de uma série multicêntrica, a taxa de falha foi de 33%.",
      prevention:
        "Fixar a fratura ulnar completa quando o seguimento rigoroso não estiver garantido; radiografias semanais nas 3 primeiras semanas; gesso bem moldado.",
    },
    {
      name: "Lesão do nervo interósseo posterior",
      detail:
        "O nervo cruza a face lateral do colo do rádio, no supinador. É mais associado ao Bado III e à luxação anterior, e também ao acesso lateral, ao alongamento agudo e à redução forçada na crônica. Manifesta-se por déficit de extensão do polegar e dos dedos, com sensibilidade preservada.",
      prevention:
        "Exame neurológico documentado antes e depois; pronação do antebraço no acesso lateral; evitar dissecção distal ao colo; preferir correção gradual quando o alongamento necessário for grande.",
    },
    {
      name: "Reluxação após reconstrução da crônica",
      detail:
        "Falha da reconstrução, quase sempre por correção insuficiente da ulna ou por indicação em esqueleto já maduro. Em série de reconstruções, todos os pacientes com escore de Sauvegrain > 21,5 evoluíram com reluxação ou artrose, independentemente do intervalo; a cabeça do rádio previamente deformada previu resultado não ideal em 100% dos casos.",
      prevention:
        "Hipercorrigir o alongamento e a angulação; operar cedo (intervalo ≤ 7 meses) e antes da maturidade esquelética; não indicar reconstrução no adolescente maduro com cabeça deformada.",
    },
    {
      name: "Síndrome compartimental",
      detail:
        "Rara, mas descrita nas séries pediátricas de Monteggia. Associa-se a trauma de alta energia, manobras repetidas, hiperflexão em gesso e alongamento agudo na reconstrução da crônica. Dor desproporcional e dor ao estiramento passivo dos dedos são os sinais que importam.",
      prevention:
        "Evitar manobras repetidas; não imobilizar em hiperflexão com edema; gesso valvado quando houver dúvida; considerar correção gradual em vez de alongamento agudo importante.",
    },
    {
      name: "Rigidez e perda de pronossupinação",
      detail:
        "Perda de rotação e do arco de flexo-extensão, mais frequente após lesão crônica reconstruída e após imobilização prolongada. A pronossupinação depende da curvatura e do comprimento relativos dos dois ossos.",
      prevention:
        "Restaurar comprimento e curvatura da ulna; imobilizar pelo tempo necessário e não mais; mobilização ativa, sem forçar passivamente.",
    },
    {
      name: "Consolidação viciosa ou retardo de consolidação da ulna",
      detail:
        "Angulação ou encurtamento residual da ulna mantém a cabeça do rádio subluxada — a consolidação viciosa da ulna é, na prática, a definição mecânica da Monteggia crônica. No foco da osteotomia da crônica, o retardo é favorecido pelo alongamento.",
      prevention:
        "Exigir redução anatômica no agudo; fixação adequada ao padrão do traço; enxerto e fixação estável na osteotomia da crônica.",
    },
    {
      name: "Sinostose radioulnar proximal e ossificação heterotópica",
      detail:
        "Complicação da redução aberta, da lesão de alta energia e da mobilização passiva forçada. Bloqueia a pronossupinação e é de tratamento difícil.",
      prevention:
        "Minimizar a dissecção entre rádio e ulna; evitar desperiostização extensa; não forçar a mobilização passiva.",
    },
    {
      name: "Necrose avascular / deformidade da cabeça do rádio",
      detail:
        "Consequência da desperiostização circunferencial do colo na redução aberta e, na crônica, da própria luxação de longa data, que remodela e alarga a cabeça até torná-la irredutível de forma concêntrica.",
      prevention:
        "Poupar o periósteo do colo; operar a crônica cedo, antes de a cabeça deformar.",
    },
  ],
  evidence: [
    {
      id: "ramski-2015",
      claim:
        "O tratamento da Monteggia aguda da criança guiado pelo padrão da fratura da ulna (redução fechada para plástica/galho verde, haste para transversa/oblíqua curta, placa para oblíqua longa/cominuta) elimina as falhas.",
      takeaway:
        "Em 112 crianças de dois centros de trauma nível 1, nenhum dos 57 pacientes tratados segundo a estratégia falhou, nem nenhum dos 23 tratados de modo mais rigoroso; entre os 32 tratados de modo menos rigoroso, 19% falharam (p<0,001). Todas as falhas ocorreram em fraturas completas tratadas sem cirurgia: 6/18 (33%) contra 0/52 das completas operadas. É o estudo que fundamenta a conduta guiada pela ulna.",
      level: "III",
      studyType: "Coorte retrospectiva multicêntrica",
      era: "atual",
      citation: {
        authors: "Ramski DE, Hennrikus WP, Bae DS, Baldwin KD, Patel NM, Waters PM, Flynn JM",
        title:
          "Pediatric Monteggia fractures: a multicenter examination of treatment strategy and early clinical and radiographic results",
        journal: "Journal of Pediatric Orthopedics",
        year: 2015,
        pmid: "24978320",
        doi: "10.1097/BPO.0000000000000213",
      },
    },
    {
      id: "hart-2021",
      claim:
        "Mesmo na fratura ulnar completa, uma tentativa de redução fechada e gesso pode alcançar resultados comparáveis à fixação imediata — desde que o seguimento seja rigoroso.",
      takeaway:
        "Em 73 crianças (37 operadas, 36 com redução fechada e gesso), 5 pacientes do grupo conservador (13,9%) perderam a redução radiocapitelar e foram operados. Ao final, não houve reluxação em nenhum grupo, todos consolidaram e todos recuperaram arco completo. Contrapeso importante ao estudo de Ramski: o tratamento fechado da fratura completa é defensável, mas exige seguimento clínico e radiográfico próximo.",
      level: "IV",
      studyType: "Série de casos comparativa retrospectiva",
      era: "atual",
      citation: {
        authors: "Hart CM, Alswang J, Bram J, Kim ST, Arkader A, Silva M",
        title:
          "Operative Versus Nonoperative Management of Acute Pediatric Monteggia Injuries With Complete Ulna Fractures",
        journal: "Journal of Pediatric Orthopedics",
        year: 2021,
        pmid: "34074958",
        doi: "10.1097/BPO.0000000000001868",
      },
    },
    {
      id: "ramirez-2014",
      claim:
        "A linha radiocapitelar deve ser traçada pelo COLO do rádio, não pela diáfise, e uma linha anormal é sugestiva mas não patognomônica de lesão.",
      takeaway:
        "Em 116 cotovelos pediátricos NORMAIS (2052 linhas traçadas por 3 examinadores), a linha pelo eixo da diáfise errou completamente o capítulo em 15,6% dos casos, contra 1,2% da linha traçada pelo colo (p<0,0001). A linha mais fiel é a do colo no perfil (erra em 1,2%). A confiabilidade é menor abaixo dos 5 anos. Redefine o traçado correto e calibra a interpretação no lactente.",
      level: "III",
      studyType: "Estudo diagnóstico transversal com múltiplos examinadores",
      era: "atual",
      citation: {
        authors:
          "Ramirez RN, Ryan DD, Williams J, Wren TAL, Ibrahim D, Weiss JM, Kay RM, Lightdale-Miric N, Skaggs DL",
        title:
          "A line drawn along the radial shaft misses the capitellum in 16% of radiographs of normal elbows",
        journal: "Journal of Pediatric Orthopedics",
        year: 2014,
        pmid: "24787305",
        doi: "10.1097/BPO.0000000000000199",
      },
    },
    {
      id: "ko-2021",
      claim:
        "O resultado da reconstrução da Monteggia crônica depende sobretudo da idade esquelética e do intervalo desde a lesão.",
      takeaway:
        "Em 28 crianças submetidas a redução aberta + osteotomia ulnar + reconstrução do ligamento anular, menor escore de Sauvegrain (p=0,004) e menor intervalo (p=0,012) associaram-se a melhor escore de Kim. Com Sauvegrain > 21,5 (≈14 anos ósseos em meninos, 11,5 em meninas), TODOS reluxaram ou desenvolveram artrose, independentemente do intervalo. Com Sauvegrain < 21,5 e intervalo ≤ 7 meses, 85,7% atingiram resultado ideal e nenhum reluxou. Os 9 pacientes com cabeça do rádio já deformada tiveram resultado não ideal.",
      level: "III",
      studyType: "Coorte retrospectiva comparativa",
      era: "atual",
      citation: {
        authors: "Ko KR, Shim JS, Park J, Won J",
        title: "Predictors of ideal outcomes after reconstructive surgery for chronic Monteggia fracture in children",
        journal: "Journal of Orthopaedic Science",
        year: 2022,
        pmid: "34452791",
        doi: "10.1016/j.jos.2021.06.009",
      },
    },
    {
      id: "liu-2023",
      claim:
        "Na Monteggia crônica, a osteotomia da ulna com redução GRADUAL da cabeça do rádio por fixador externo tem melhor resultado radiográfico que a redução aguda.",
      takeaway:
        "Em 19 crianças tratadas com osteotomia ulnar e fixador externo monolateral, o grupo de redução gradual (n=13; alongamento médio 22,2 mm e angulação média 22,8°, ao longo de 43 dias) obteve bom resultado radiográfico em 92,3%, contra 50% do grupo de redução aguda (n=6; alongamento 5,2 mm) — p=0,071. A taxa de reoperação correlacionou-se significativamente com resultado ruim (p=0,016). Sustenta a correção gradual nos casos de longa data.",
      level: "III",
      studyType: "Coorte retrospectiva comparativa",
      era: "atual",
      citation: {
        authors: "Liu Y, Shi W, Li Y, Hong K, Li J, Xun F, Canavese F, Xu H",
        title:
          "Ulnar osteotomy and monolateral external fixator for the treatment of chronic Monteggia fractures in children: comparison between gradual and acute radial head reduction",
        journal: "Journal of Pediatric Orthopaedics B",
        year: 2023,
        pmid: "36602765",
        doi: "10.1097/BPB.0000000000001047",
      },
    },
    {
      id: "xu-2022",
      claim:
        "Quanto maior o tempo desde a lesão, maiores o alongamento e a angulação da ulna necessários para reduzir a cabeça do rádio.",
      takeaway:
        "Em 18 crianças operadas por Monteggia crônica (intervalo médio 11,1 meses), o escore de Kim subiu de 59,2 para 90,0 (p<0,001) e 83,3% tiveram boa redução. O alongamento da ulna correlacionou-se com a magnitude da angulação (r=0,648, p=0,004), e ambos correlacionaram-se com o intervalo desde a lesão (r=0,632, p=0,005 e r=0,502, p=0,034). Quantifica a intuição clínica: a osteotomia da ulna é o procedimento essencial, e a lesão perdida cobra caro em correção.",
      level: "IV",
      studyType: "Série de casos retrospectiva",
      era: "atual",
      citation: {
        authors: "Xu P, Zhang Z, Ning B, Wang D",
        title: "Outcomes and experience after open reduction for chronic Monteggia fracture in children",
        journal: "Translational Pediatrics",
        year: 2022,
        pmid: "35958014",
        doi: "10.21037/tp-21-614",
      },
    },
    {
      id: "ring-1998",
      claim:
        "É o caráter da fratura da ULNA, e não a direção da luxação da cabeça do rádio, que determina o tratamento da Monteggia.",
      takeaway:
        "Revisão fundadora do conceito moderno: a redução anatômica e estável da ulna produz a redução da cabeça do rádio; os bons resultados do tratamento não cirúrgico na criança refletem a prevalência de fraturas incompletas (estáveis), enquanto as fraturas completas (instáveis) tendem ao desvio residual ou recorrente e podem exigir fixação. A reconstrução tardia da lesão crônica é complicada e imprevisível — a chave do bom resultado continua sendo o reconhecimento precoce da dissociação radioulnar proximal.",
      level: "V",
      studyType: "Revisão narrativa de especialistas",
      era: "classico",
      citation: {
        authors: "Ring D, Jupiter JB, Waters PM",
        title: "Monteggia fractures in children and adults",
        journal: "Journal of the American Academy of Orthopaedic Surgeons",
        year: 1998,
        pmid: "9682084",
        doi: "10.5435/00124635-199807000-00003",
      },
    },
  ],
  pearls: [
    "Toda fratura isolada da ulna na criança é uma Monteggia até prova em contrário — inclua cotovelo e punho na radiografia.",
    "A linha radiocapitelar traça-se pelo COLO do rádio, não pela diáfise, e deve cruzar o capítulo em TODAS as incidências.",
    "Reduza a ulna e a cabeça do rádio segue. Se ela não segue, a ulna ainda não está reduzida — ou há ligamento anular interposto.",
    "A conduta no agudo é decidida pelo padrão da ULNA, não pelo tipo de Bado: plástica/galho verde → gesso; transversa → haste; oblíqua longa/cominuta → placa.",
    "A deformação plástica da ulna é a grande armadilha: encurva sem traço visível e basta para luxar a cabeça do rádio. Compare com o lado contralateral.",
    "As 3 primeiras semanas decidem tudo: radiografia semanal com linha radiocapitelar. Perda detectada aqui ainda é recuperável.",
    "Na crônica, o procedimento essencial é a osteotomia da ULNA, com alongamento e angulação de ápice posterior — e deve-se hipercorrigir.",
    "Reconstruir o ligamento anular sem corrigir a ulna é falha previsível: a ulna curta é a causa mecânica da reluxação.",
    "Opere a crônica cedo: abaixo de ~14 anos ósseos em meninos e ~11,5 em meninas, com intervalo ≤ 7 meses, o resultado ideal chega a 85%.",
    "Cabeça do rádio já deformada é o marcador de que a janela passou — nessa série, previu resultado não ideal em 100% dos casos.",
    "No Bado IV, fixe o rádio primeiro: a lesão vira um tipo I funcional.",
    "Documente o exame do interósseo posterior antes e depois de qualquer manobra ou cirurgia.",
  ],
  pitfalls: [
    "Radiografar apenas o antebraço: a fratura da ulna é vista, a luxação da cabeça do rádio é perdida.",
    "Aceitar um perfil oblíquo — é a causa mais comum de uma linha radiocapitelar falsamente anormal (ou falsamente normal).",
    "Traçar a linha pelo eixo da diáfise do rádio: erra o capítulo em ~16% dos cotovelos NORMAIS e gera falso-positivos.",
    "Tratar a linha anormal como patognomônica no lactente, em quem a variação fisiológica é considerável.",
    "Deixar-se guiar pelo tipo de Bado ao escolher a fixação: ele descreve a direção, não prediz a estabilidade.",
    "Tratar uma fratura ulnar completa com gesso sem garantir seguimento radiográfico semanal — é o padrão que falha (33% na série multicêntrica).",
    "Aceitar redução ulnar 'quase' anatômica: poucos graus residuais mantêm a cabeça do rádio subluxada e produzem a lesão crônica.",
    "Marcar o primeiro retorno para 4 semanas: quando a perda de redução for vista, a janela terá fechado.",
    "Usar haste intramedular em fratura oblíqua longa: encurta, roda e a cabeça reluxa.",
    "Ponto de entrada da haste sobre a apófise do olécrano.",
    "Desperiostizar circunferencialmente o colo do rádio na redução aberta — necrose avascular da cabeça.",
    "Insistir em manobras fechadas repetidas diante de bloqueio mecânico: aumenta o edema e o risco de síndrome compartimental.",
    "Imobilizar em hiperflexão um membro edemaciado.",
    "Alongar a ulna de forma aguda e excessiva na crônica: paralisia do interósseo posterior e síndrome compartimental — considere a correção gradual.",
    "Indicar reconstrução da crônica no adolescente com Sauvegrain > 21,5: reluxação ou artrose foram a regra, independentemente do intervalo.",
    "Forçar a mobilização passiva no pós-operatório: rigidez, ossificação heterotópica e sinostose.",
  ],
  figures: [
    {
      id: "monteggia-crianca:anatomia",
      caption:
        "Cotovelo imaturo em perfil: o capítulo, a cabeça do rádio com sua superfície côncava, o ligamento anular abraçando o colo, a incisura troclear da ulna e as fises (radial proximal, umeral distal e apófise do olécrano). A ulna é o pilar do antebraço — comprimento e curvatura corretos mantêm a cabeça do rádio no capítulo.",
      alt: "Diagrama em perfil do cotovelo de criança mostrando úmero, tróclea, capítulo, olécrano, coronoide, cabeça e colo do rádio, ligamento anular e as placas de crescimento destacadas.",
      kind: "diagram",
      source: {
        label: "Revisortopedia — diagrama original",
        reference:
          "Rockwood and Wilkins' Fractures in Children, 10ª ed. (2024) / Tachdjian's Pediatric Orthopaedics, 6ª ed.",
      },
    },
    {
      id: "monteggia-crianca:linha-radiocapitelar",
      caption:
        "A linha radiocapitelar traçada pelo eixo do COLO do rádio deve cruzar o capítulo em todas as incidências (esquerda). Na lesão de Monteggia, ela erra o capítulo (direita). Traçada pelo eixo da diáfise, a linha erra o capítulo em ~16% dos cotovelos normais; pelo colo, em ~1%.",
      alt: "Diagrama comparando dois cotovelos em perfil: à esquerda a linha pontilhada pelo colo do rádio cruza o centro do capítulo; à direita a cabeça do rádio está luxada anteriormente e a linha passa longe do capítulo, com fratura da ulna.",
      variant: "luxado",
      kind: "diagram",
      source: {
        label: "Revisortopedia — diagrama original",
        reference:
          "Ramirez et al., J Pediatr Orthop 2014 / Rockwood and Wilkins' Fractures in Children, 10ª ed. (2024)",
      },
    },
    {
      id: "monteggia-crianca:bado",
      caption:
        "Classificação de Bado: a direção da luxação da cabeça do rádio acompanha o ápice da angulação da ulna. Tipo I (anterior) é o padrão da criança; tipo III (lateral), o segundo mais comum; tipos II e IV são raros na infância.",
      alt: "Diagrama esquemático do tipo I de Bado: fratura da diáfise ulnar com ápice anterior e cabeça do rádio luxada anteriormente, com a linha radiocapitelar errando o capítulo.",
      variant: "I",
      kind: "diagram",
      source: {
        label: "Revisortopedia — diagrama original",
        reference: "Rockwood and Wilkins' Fractures in Children, 10ª ed. (2024)",
      },
    },
    {
      id: "monteggia-crianca:padrao-ulnar",
      caption:
        "O padrão da fratura da ULNA — e não o tipo de Bado — decide a fixação: deformação plástica e galho verde vão bem com redução fechada e gesso; traço transverso ou oblíquo curto pede haste intramedular; oblíquo longo ou cominuto, placa.",
      alt: "Diagrama do padrão transverso da ulna, com o traço atravessando as duas corticais, indicando fixação com haste intramedular.",
      variant: "transversa",
      kind: "diagram",
      source: {
        label: "Revisortopedia — diagrama original",
        reference: "Ring, Jupiter & Waters, J Am Acad Orthop Surg 1998 / Ramski et al., J Pediatr Orthop 2015",
      },
    },
    {
      id: "monteggia-crianca:reducao-aguda",
      caption:
        "O princípio do tratamento agudo: restaurar o comprimento e a curvatura da ulna reduz a cabeça do rádio. Se a ulna está anatômica e a cabeça não reduz, suspeitar de interposição do ligamento anular.",
      alt: "Diagrama com dois painéis: à esquerda, ulna curta e angulada com a cabeça do rádio luxada; à direita, ulna reduzida e cabeça do rádio concêntrica sob o capítulo, com o ligamento anular restabelecido.",
      kind: "diagram",
      source: {
        label: "Revisortopedia — diagrama original",
        reference: "Rockwood and Wilkins' Fractures in Children, 10ª ed. (2024)",
      },
    },
    {
      id: "monteggia-crianca:fixacao",
      caption:
        "Fixação da ulna conforme o traço: haste intramedular anterógrada pelo olécrano, poupando a apófise, nos traços transversos e oblíquos curtos; placa moldada na borda subcutânea nos oblíquos longos e cominutos, que encurtam e rodam.",
      alt: "Diagrama da ulna fixada com haste intramedular introduzida pelo olécrano, atravessando um traço transverso da diáfise.",
      variant: "haste",
      kind: "diagram",
      source: {
        label: "Revisortopedia — diagrama original",
        reference: "Rockwood and Wilkins' Fractures in Children, 10ª ed. (2024)",
      },
    },
    {
      id: "monteggia-crianca:osteotomia-cronica",
      caption:
        "Monteggia crônica: a ulna consolidou curta e angulada, e a cabeça do rádio permanece luxada e começa a se deformar. A reconstrução é da ULNA — osteotomia com alongamento e angulação de ápice posterior, deliberadamente hipercorrigida e fixada com placa, com ou sem reconstrução do ligamento anular.",
      alt: "Diagrama com dois painéis: à esquerda a ulna curta com a cabeça do rádio luxada e deformada; à direita a osteotomia da ulna alongada e angulada, fixada com placa, com a cabeça do rádio reduzida e o ligamento anular reconstruído.",
      kind: "diagram",
      source: {
        label: "Revisortopedia — diagrama original",
        reference: "Ko et al., J Orthop Sci 2022 / Xu et al., Transl Pediatr 2022 / Tachdjian's Pediatric Orthopaedics, 6ª ed.",
      },
    },
    {
      id: "monteggia-crianca:fixador-externo",
      caption:
        "Alternativa na crônica de longa data: osteotomia da ulna com fixador externo monolateral e distração progressiva de cerca de 1 mm/dia até a redução radiocapitelar, poupando o nervo interósseo posterior e o suprimento da cabeça do rádio.",
      alt: "Diagrama da ulna osteotomizada com fixador externo monolateral, pinos proximais e distais, zona de regenerado em distração e a cabeça do rádio migrando em direção ao capítulo.",
      kind: "diagram",
      source: {
        label: "Revisortopedia — diagrama original",
        reference: "Liu et al., J Pediatr Orthop B 2023",
      },
    },
  ],
  meta: {
    lastReviewed: "2026-07-14",
    sources: [
      "Waters PM, Skaggs DL, Flynn JM. Rockwood and Wilkins' Fractures in Children, 10ª ed. Wolters Kluwer, 2024.",
      "Herring JA. Tachdjian's Pediatric Orthopaedics, 6ª ed. Elsevier, 2022.",
      "Weinstein SL, Flynn JM. Lovell and Winter's Pediatric Orthopaedics, 8ª ed. Wolters Kluwer, 2021.",
      "Ring D, Jupiter JB, Waters PM. Monteggia fractures in children and adults. J Am Acad Orthop Surg. 1998;6(4):215-24.",
      "Ramski DE, et al. Pediatric Monteggia fractures: a multicenter examination of treatment strategy and early clinical and radiographic results. J Pediatr Orthop. 2015;35(2):115-20.",
      "Hart CM, et al. Operative versus nonoperative management of acute pediatric Monteggia injuries with complete ulna fractures. J Pediatr Orthop. 2021;41(7):412-6.",
      "Ramirez RN, et al. A line drawn along the radial shaft misses the capitellum in 16% of radiographs of normal elbows. J Pediatr Orthop. 2014;34(8):763-7.",
      "Ko KR, et al. Predictors of ideal outcomes after reconstructive surgery for chronic Monteggia fracture in children. J Orthop Sci. 2022;27(5):1025-31.",
      "Liu Y, et al. Ulnar osteotomy and monolateral external fixator for the treatment of chronic Monteggia fractures in children. J Pediatr Orthop B. 2023;32(6):583-92.",
      "Xu P, et al. Outcomes and experience after open reduction for chronic Monteggia fracture in children. Transl Pediatr. 2022;11(7):1122-9.",
      "Miller TC, Fishman FG. Management of Monteggia injuries in the pediatric patient. Hand Clin. 2020;36(4):469-78.",
    ],
    attribution:
      "Texto e diagramas originais do Revisortopedia. Evidências verificadas no PubMed (PMID/DOI conferidos).",
    figureReference:
      "Rockwood and Wilkins' Fractures in Children, 10ª ed. (2024) / Tachdjian's Pediatric Orthopaedics 6ª",
  },
});
