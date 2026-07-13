import { defineTopic } from "../../types/topic";

/* Fratura do tálus — tópico de membro inferior.
   Escopo: Hawkins (colo do tálus I–IV); suprimento sanguíneo retrógrado e
   necrose avascular; sinal de Hawkins (banda subcondral aos 6–8 sem = viável);
   redução anatômica urgente; dupla via (anteromedial + anterolateral).
   Todas as figuras são prefixadas por "fratura-talus:".
   Evidência verificada no PubMed (DOIs reais citados). */
export const topic = defineTopic({
  id: "mi-pe-talus",
  slug: "fratura-talus",
  regionId: "membro-inferior",
  bone: "Pé",
  injury: "Fratura do tálus/colo",
  title: "Fratura do tálus",
  subtitle:
    "Fratura de alta energia do osso que sustenta o corpo sobre o pé — dominada pelo suprimento vascular retrógrado e pelo risco de necrose avascular.",
  laterality: null,
  status: "complete",

  overview:
    "O tálus é o elo mecânico entre a perna e o pé: transmite toda a carga corporal, é coberto por cartilagem em cerca de 60% da superfície e não recebe nenhuma inserção muscular. Essas duas características determinam tudo o que segue — a ampla cobertura articular deixa pouca superfície para a entrada de vasos, e o suprimento arterial que penetra pelo colo corre de forma essencialmente retrógrada em direção ao corpo.\n\nA fratura do colo do tálus é tipicamente uma lesão de alta energia (dorsiflexão forçada do pé contra a tíbia — o clássico \"aviator's astragalus\"). O traço no colo pode seccionar o aporte vascular do corpo, e daí decorrem as duas complicações que dominam o prognóstico: a necrose avascular do corpo e a artrose pós-traumática das articulações tibiotalar e subtalar.\n\nA classificação de Hawkins (colo, tipos I–IV) organiza a conduta ao graduar quantas articulações estão luxadas — e, com isso, quanto do suprimento vascular provavelmente se rompeu. O manejo tem dois tempos: reduzir de emergência qualquer luxação (para descomprimir a pele e os vasos), e depois obter redução anatômica e fixação estável — frequentemente por dupla via (anteromedial + anterolateral) para corrigir o varo e evitar a malunião. O sinal de Hawkins, uma banda radiolucente subcondral no dômo por volta de 6–8 semanas, é o primeiro indicador de que o corpo permaneceu viável.",

  keyFacts: [
    { label: "Osso", value: "Tálus — 60% coberto por cartilagem, sem inserção muscular" },
    { label: "Mecanismo", value: "Alta energia; dorsiflexão forçada (aviator's astragalus)" },
    { label: "Vascularização", value: "Retrógrada; a. do canal do tarso (tibial posterior) domina o corpo" },
    { label: "Classificação", value: "Hawkins I–IV (colo) — grau de luxação articular" },
    { label: "Risco-chave", value: "Necrose avascular do corpo e artrose pós-traumática" },
    { label: "Emergência", value: "Reduzir luxações de imediato; fixação definitiva quando a pele permitir" },
    { label: "Sinal de Hawkins", value: "Banda subcondral aos 6–8 sem = corpo viável" },
    { label: "Fixação", value: "Redução anatômica, muitas vezes por dupla via, para evitar o varo" },
  ],

  anatomy: {
    text:
      "O tálus divide-se em cabeça, colo e corpo. O corpo (dômo) articula-se com a pinça tibiofibular acima (articulação tibiotalar) e com o calcâneo abaixo (articulação subtalar posterior); a cabeça articula-se com o navicular à frente. Cerca de 60% da superfície é revestida de cartilagem e nenhum músculo se insere no osso — de modo que os vasos precisam entrar pelas estreitas faixas não articulares, sobretudo no colo, no seio/canal do tarso e no tubérculo posterior.\n\nO suprimento é triplo e forma anastomoses, mas é vulnerável. A artéria tibial posterior origina a artéria do canal do tarso, que é a principal fonte do corpo do tálus, reforçada pelo ramo deltóideo (que corre no ligamento deltoide e pode ser o último aporte remanescente do corpo). A artéria tibial anterior (dorsal do pé) irriga a cabeça e o colo, e a artéria fibular perfurante contribui pelo seio do tarso e para o processo posterior. O ponto crítico é a direção do fluxo: o sangue entra pela região do colo e sobe de forma retrógrada até o corpo.\n\nÉ essa geometria que explica a doença. Uma fratura do colo interpõe-se entre o ponto de entrada e o corpo, podendo desvascularizá-lo; quanto mais articulações se luxam (progressão de Hawkins), mais pedículos se rompem e maior o risco de necrose. Na fixação, preservar o ramo deltóideo (face medial/deltoide) é um princípio para não sacrificar o último aporte do corpo.",
    figureIds: ["fratura-talus:anatomia"],
  },

  classification: [
    {
      id: "hawkins",
      name: "Classificação de Hawkins (colo do tálus)",
      basis:
        "Número de articulações luxadas — proxy do dano vascular e do risco de necrose (modificação de Canale-Kelly acrescenta o tipo IV)",
      note:
        "A cada tipo, mais articulações se deslocam e mais pedículos vasculares se rompem — por isso o risco de necrose sobe de forma quase escalonada. Selecione um tipo para ver o padrão e as articulações envolvidas.",
      types: [
        {
          code: "I",
          label: "Não desviada",
          description:
            "Fratura do colo sem desvio; articulações tibiotalar, subtalar e talonavicular congruentes. Apenas os vasos intraósseos do colo são lesados, de modo que o risco de necrose é o menor (classicamente ~0–15%).",
          figureId: "fratura-talus:hawkins",
          figureVariant: "I",
        },
        {
          code: "II",
          label: "Desviada + luxação subtalar",
          description:
            "Colo desviado com subluxação ou luxação da articulação subtalar; tibiotalar mantida. Rompe-se aporte adicional pelo seio do tarso. Necrose ~20–50%. Vallier propôs subdividir em IIA (subtalar apenas subluxada, sem necrose na série) e IIB (subtalar luxada).",
          figureId: "fratura-talus:hawkins",
          figureVariant: "II",
        },
        {
          code: "III",
          label: "Luxação do corpo (subtalar + tibiotalar)",
          description:
            "Colo desviado com luxação subtalar E tibiotalar — o corpo é extrudado no sentido póstero-medial, frequentemente tensionando/comprimendo o feixe neurovascular e a pele. Necrose ~40–90%; costuma ser fratura exposta.",
          figureId: "fratura-talus:hawkins",
          figureVariant: "III",
        },
        {
          code: "IV",
          label: "+ luxação talonavicular",
          description:
            "Acréscimo de Canale-Kelly: padrão do tipo III somado à subluxação/luxação da articulação talonavicular (a cabeça também se desliga). Todos os pedículos principais estão comprometidos — o maior risco de necrose.",
          figureId: "fratura-talus:hawkins",
          figureVariant: "IV",
        },
      ],
    },
  ],

  indications: {
    operative: [
      "Qualquer luxação associada (Hawkins II–IV): redução IMEDIATA e de emergência (fechada ou aberta) para descomprimir a pele e o feixe neurovascular e reduzir a tensão sobre os vasos.",
      "Fratura do colo desviada (Hawkins II, III, IV): redução anatômica e fixação interna estável — a redução anatômica é o principal fator modificável do prognóstico.",
      "Fratura minimamente desviada mas com incongruência articular, comunição do colo ou desvio em varo: fixação para restaurar o eixo e a congruência.",
      "Fratura exposta: desbridamento urgente, redução e estabilização; muito comum no Hawkins III.",
    ],
    nonOperative: [
      "Reservado à fratura verdadeiramente sem desvio (Hawkins I) confirmada por TC, em paciente confiável — imobilização em bota gessada e carga postergada, com controle radiográfico seriado.",
      "Paciente sem condições clínicas de cirurgia, como medida paliativa.",
    ],
    decisionNotes:
      "A conduta tem dois tempos distintos. O primeiro é uma emergência: reduzir qualquer luxação de imediato, pois o corpo extrudado (Hawkins III) tensiona a pele e o feixe neurovascular e a demora aumenta o risco de necrose de pele e de infecção. O segundo tempo — a fixação definitiva — não precisa ser feito na madrugada: as séries de Vallier e de Lindvall não encontraram relação entre o atraso da fixação definitiva e o desenvolvimento de necrose avascular, de modo que é aceitável (e muitas vezes preferível) aguardar a melhora das partes moles antes da osteossíntese, desde que as luxações já tenham sido reduzidas. O que de fato governa o risco é a energia do trauma e o grau de desvio inicial (o tipo de Hawkins), não o relógio da sala de cirurgia. Por isso o objetivo cirúrgico é a redução anatômica e a fixação estável, frequentemente por dupla via para corrigir o varo — sem esquecer que a artrose pós-traumática, e não a necrose, é a complicação mais frequente a longo prazo.",
  },

  approaches: [
    {
      id: "anteromedial",
      name: "Via anteromedial",
      indication:
        "Exposição do colo pela face medial, onde costuma estar a comunição; permite controlar a redução e evitar o desvio em varo. Habitualmente combinada à via anterolateral.",
      interval:
        "Entre o tendão tibial anterior e o tendão tibial posterior, sobre a face medial do colo do tálus.",
      atRisk: [
        "Ramo deltóideo da a. tibial posterior (último aporte do corpo) — preservar o ligamento deltoide",
        "Tendão tibial posterior e feixe neurovascular tibial posterior",
        "Nervo safeno / veia safena magna",
      ],
      figureId: "fratura-talus:via-anteromedial",
    },
    {
      id: "anterolateral",
      name: "Via anterolateral",
      indication:
        "Exposição da face lateral do colo e do seio do tarso; combinada à anteromedial forma a dupla via, que confere leitura tridimensional da redução e corrige o varo residual.",
      interval:
        "Lateral ao tendão extensor longo dos dedos / fibular terceiro, sobre o seio do tarso.",
      atRisk: [
        "Ramos do nervo fibular superficial",
        "Artéria e ramos do seio do tarso (aporte lateral do colo)",
        "Extensor longo dos dedos e feixe neurovascular anterior",
      ],
      figureId: "fratura-talus:via-anterolateral",
    },
  ],

  technique: [
    {
      n: 1,
      title: "Redução de emergência da luxação",
      detail:
        "Antes de qualquer planejamento definitivo, reduzir de imediato luxações subtalar/tibiotalar (Hawkins II–IV). O corpo extrudado do tipo III comprime a pele póstero-medial e o feixe neurovascular; a redução alivia a isquemia da pele e diminui o risco de necrose cutânea e infecção. Se a redução fechada falhar, converter em redução aberta de urgência. Fraturas expostas exigem desbridamento imediato.",
      figureId: "fratura-talus:hawkins",
      figureVariant: "III",
      tips: [
        "Trate a luxação como emergência; a fixação definitiva pode aguardar as partes moles.",
        "Documente o estado neurovascular e da pele antes e depois da manobra.",
      ],
      pitfalls: [
        "Deixar o corpo luxado \"para depois\" → necrose de pele, infecção e maior morbidade.",
        "Forçar repetidamente uma redução fechada irredutível em vez de abrir.",
      ],
    },
    {
      n: 2,
      title: "Dupla via de acesso (anteromedial + anterolateral)",
      detail:
        "Para as fraturas desviadas, expor o colo por duas incisões: a anteromedial (entre tibial anterior e tibial posterior), onde está a comunição, e a anterolateral (lateral ao extensor longo dos dedos, sobre o seio do tarso). A leitura simultânea das duas colunas permite julgar a rotação e o comprimento e é a melhor defesa contra a malunião em varo. Preservar o ligamento deltoide protege o ramo deltóideo, muitas vezes o último aporte do corpo.",
      figureId: "fratura-talus:via-anteromedial",
      tips: [
        "Não desperiostizar excessivamente o colo — respeite o pouco aporte remanescente.",
        "A janela lateral revela o varo que a via medial isolada mascara.",
      ],
      pitfalls: [
        "Via medial isolada → tendência a fixar em varo (malunião mais comum).",
        "Dissecção agressiva do deltoide → sacrifício do ramo deltóideo e necrose.",
      ],
    },
    {
      n: 3,
      title: "Redução anatômica do colo",
      detail:
        "Reduzir a cabeça/colo sobre o corpo restaurando comprimento, alinhamento e rotação. A comunição costuma ser dorsomedial, criando defeito que faz o colo colapsar em varo e dorsiflexão — daí a importância de referenciar a coluna lateral (íntegra) para julgar o comprimento. Fios de Kirschner provisórios mantêm a redução; a congruência das articulações tibiotalar e subtalar deve ser conferida sob visão direta e fluoroscopia.",
      figureId: "fratura-talus:step-reducao",
      tips: [
        "Use a coluna lateral íntegra como gabarito de comprimento.",
        "Considere enxerto/substituto ósseo no defeito medial comunitivo para sustentar o comprimento.",
      ],
      pitfalls: [
        "Aceitar varo/encurtamento → malunião com pé em varo e sobrecarga da borda lateral.",
        "Confiar apenas na imagem intraoperatória sem inspeção articular direta.",
      ],
    },
    {
      n: 4,
      title: "Fixação estável",
      detail:
        "Fixar com parafusos de compressão da cabeça ao corpo (via anterior, cabeças embutidas na cartilagem, ou parafusos póstero-lateral → ântero-medial por acesso posterior). Quando há comunição medial, os parafusos isolados encurtam e reincidem em varo: nesse caso, uma mini-placa medial de sustentação, moldada sobre a face dorsomedial, mantém o comprimento e resiste ao colapso. O objetivo é estabilidade suficiente para mobilização precoce, protegendo a carga.",
      figureId: "fratura-talus:step-fixacao",
      figureVariant: "parafusos",
      tips: [
        "Rosca inteiramente além do traço para gerar compressão.",
        "Na comunição medial, prefira placa de sustentação a parafusos isolados.",
      ],
      pitfalls: [
        "Compressão excessiva através de comunição → encurtamento e varo iatrogênico.",
        "Parafusos proeminentes na cartilagem articular → dano condral e artrose.",
      ],
    },
  ],

  postop: {
    immobilization:
      "Imobilização inicial em tala/bota conforme as partes moles; após fixação estável, órtese removível para iniciar amplitude de movimento precoce do tornozelo e da subtalar quando a ferida permitir. Cuidado especial com a viabilidade da pele nos padrões de alta energia (Hawkins III–IV).",
    weightBearing:
      "Descarga (sem apoio) tipicamente por 8–12 semanas, até sinais de consolidação. A liberação de carga é postergada tanto pela consolidação quanto pela vigilância de necrose; a presença do sinal de Hawkins ao redor de 6–8 semanas favorece a progressão.",
    rehab: [
      {
        window: "0–2 semanas",
        weightBearing: "Sem apoio",
        focus:
          "Elevação e cuidado das partes moles; controle de edema; mobilização dos dedos; vigilância de sofrimento cutâneo póstero-medial.",
      },
      {
        window: "2–6 semanas",
        weightBearing: "Sem apoio",
        focus:
          "Amplitude ativa/assistida de tornozelo e subtalar (quando a ferida cicatrizar); fortalecimento isométrico; controle radiográfico da redução.",
      },
      {
        window: "6–12 semanas",
        weightBearing: "Progressiva conforme consolidação",
        focus:
          "Buscar o sinal de Hawkins na incidência AP (6–8 sem); iniciar carga parcial se houver consolidação e ausência de colapso; ganho de amplitude.",
      },
      {
        window: "3–12 meses",
        weightBearing: "Total conforme tolerado",
        focus:
          "Retorno funcional; vigilância de necrose avascular (colapso tardio do dômo) e de artrose subtalar/tibiotalar; fortalecimento e propriocepção.",
      },
    ],
    followup:
      "Seguimento clínico-radiográfico seriado por ao menos 1–2 anos. Procurar ativamente o sinal de Hawkins entre 6 e 8 semanas (banda radiolucente subcondral no dômo em AP = viável). A necrose pode manifestar-se tardiamente como colapso subcondral do dômo; a RM ajuda a avaliar extensão. Mesmo com redução anatômica, a artrose pós-traumática (subtalar e tibiotalar) é a complicação mais frequente e deve ser antecipada ao paciente.",
  },

  complications: [
    {
      name: "Necrose avascular do corpo do tálus",
      detail:
        "Consequência da interrupção do aporte retrógrado; o risco escala com o tipo de Hawkins (mínimo no I, máximo no III–IV). Manifesta-se como esclerose e, se houver colapso subcondral, dor e incongruência. Boa parte revasculariza sem colapso — em séries operatórias, cerca de 37–44% dos táli com necrose não colapsaram.",
      prevention:
        "Redução anatômica precoce das luxações, manuseio delicado, preservação do ramo deltóideo; vigilância com o sinal de Hawkins e proteção de carga.",
    },
    {
      name: "Artrose pós-traumática (subtalar e tibiotalar)",
      detail:
        "É a complicação mais frequente a longo prazo — mais comum até que a necrose — e ocorre mesmo após redução anatômica, sobretudo em fraturas comunitivas, expostas e com envolvimento do corpo. Dor mecânica e rigidez da subtalar são típicas.",
      prevention:
        "Restaurar a congruência articular e o eixo; informar o paciente de que artrose e dor crônica são esperáveis nos padrões de alta energia.",
    },
    {
      name: "Malunião em varo do colo",
      detail:
        "Colapso da comunição dorsomedial em varo e dorsiflexão, gerando pé em varo, sobrecarga da borda lateral e restrição da eversão. É a malunião característica e resulta de redução/fixação medial isolada inadequada.",
      prevention:
        "Dupla via para leitura das duas colunas; sustentação medial (placa/enxerto) na comunição; usar a coluna lateral como gabarito de comprimento.",
    },
    {
      name: "Pseudartrose (não consolidação)",
      detail:
        "Menos frequente que a artrose; associada a comunição grave, perda óssea, infecção e fraturas expostas.",
      prevention:
        "Fixação estável, restauração do estoque ósseo e controle das partes moles/infecção.",
    },
    {
      name: "Complicações de partes moles e infecção",
      detail:
        "A pele póstero-medial sofre com o corpo extrudado (Hawkins III) e com incisões sobre partes moles traumatizadas; fraturas expostas são comuns. Necrose de pele e infecção profunda podem comprometer todo o resultado.",
      prevention:
        "Redução emergencial da luxação, cronometrar a osteossíntese pela recuperação das partes moles, desbridamento adequado das lesões expostas.",
    },
  ],

  evidence: [
    {
      id: "vallier-2014",
      claim:
        "Coorte de 81 fraturas do tálus: a necrose nunca ocorreu sem luxação subtalar (Hawkins I e IIA), mas surgiu em 25% dos IIB e 41% dos tipo III; o atraso da fixação definitiva não aumentou a necrose. Propôs subdividir o tipo II em IIA (sem) e IIB (com) luxação subtalar.",
      takeaway:
        "O grau de desvio inicial — sobretudo a luxação subtalar — prediz a necrose; o relógio da fixação definitiva, não. Reduza as luxações cedo, mas a osteossíntese pode aguardar as partes moles.",
      level: "III",
      studyType: "Estudo de coorte retrospectivo",
      era: "atual",
      citation: {
        authors: "Vallier HA, Reichard SG, Boyd AJ, Moore TA",
        title:
          "A new look at the Hawkins classification for talar neck fractures: which features of injury and treatment are predictive of osteonecrosis?",
        journal: "J Bone Joint Surg Am",
        year: 2014,
        pmid: "24500580",
        doi: "10.2106/JBJS.L.01680",
      },
    },
    {
      id: "lindvall-2004",
      claim:
        "Fraturas desviadas isoladas do colo/corpo tratadas com redução aberta e fixação estável (seguimento médio de 74 meses): a artrose pós-traumática (sobretudo subtalar) esteve presente em todos os pacientes, e o atraso na fixação não afetou desfecho, consolidação ou necrose (13/26 táli).",
      takeaway:
        "A artrose pós-traumática é praticamente universal e supera a necrose como fonte de morbidade; o paciente deve ser aconselhado de que dor e artrose são esperadas mesmo após redução anatômica.",
      level: "IV",
      studyType: "Série de casos retrospectiva",
      era: "classico",
      citation: {
        authors: "Lindvall E, Haidukewych G, DiPasquale T, Herscovici D, Sanders R",
        title:
          "Open reduction and stable fixation of isolated, displaced talar neck and body fractures.",
        journal: "J Bone Joint Surg Am",
        year: 2004,
        pmid: "15466732",
        doi: "10.2106/00004623-200410000-00014",
      },
    },
    {
      id: "tezval-2007",
      claim:
        "Estudo do sinal de Hawkins (banda radiolucente subcondral no dômo aos 6–9 semanas): sensibilidade de 100% e especificidade de 57,7%. Nenhum dos 5 pacientes que desenvolveram necrose apresentou o sinal.",
      takeaway:
        "A presença (total ou parcial) do sinal de Hawkins é um forte indicador de viabilidade do corpo; sua ausência, contudo, não confirma necrose (baixa especificidade).",
      level: "III",
      studyType: "Estudo diagnóstico retrospectivo",
      era: "classico",
      citation: {
        authors: "Tezval M, Dumont C, Stürmer KM",
        title: "Prognostic reliability of the Hawkins sign in fractures of the talus.",
        journal: "J Orthop Trauma",
        year: 2007,
        pmid: "17805020",
        doi: "10.1097/BOT.0b013e318148c665",
      },
    },
    {
      id: "giordano-2021",
      claim:
        "Revisão sistemática e meta-análise sobre fraturas do colo: taxa global de necrose de 27,9% e de artrose pós-traumática de 40%. A pontuação ruim correlacionou-se com má redução, mas não com a classificação de Hawkins, a via ou a estratégia de fixação; ambas as complicações associaram-se a padrões de maior energia e às vias combinadas.",
      takeaway:
        "A qualidade da redução é o determinante modificável mais forte do resultado. A via combinada aparece mais nas fraturas graves (viés de indicação), e não deve ser lida como causa das complicações.",
      level: "I",
      studyType: "Revisão sistemática e meta-análise",
      era: "atual",
      citation: {
        authors:
          "Giordano V, Liberal BR, Rivas D, Souto DB, Yazeji H, Souza FS, Godoy-Santos A, Amaral NP",
        title:
          "Surgical management of displaced talus neck fractures: single vs double approach, screw fixation alone vs screw and plating fixation-systematic review and meta-analysis.",
        journal: "Injury",
        year: 2021,
        pmid: "34088463",
        doi: "10.1016/j.injury.2021.01.047",
      },
    },
    {
      id: "fernandez-2021",
      claim:
        "Estudo anatômico em 19 pés cadavéricos (técnica de Spalteholz e injeção de látex): a artéria tibial posterior é a fonte mais importante do colo e do corpo por meio da artéria do canal do tarso e do ramo deltóideo; a tibial anterior (dorsal do pé/tarsal lateral) supre cabeça e colo, e a fibular perfurante contribui para corpo e processo posterior.",
      takeaway:
        "Base anatômica do suprimento retrógrado e da vulnerabilidade do corpo — e do princípio cirúrgico de preservar o ramo deltóideo (deltoide medial) como último aporte remanescente.",
      level: "V",
      studyType: "Estudo anatômico cadavérico",
      era: "atual",
      citation: {
        authors: "Fernández Á, Poggio D, Llusá M, Álvarez C, Cufí Prat M",
        title:
          "Graphic Representation of Intraosseous and Extraosseous Talus Blood Supply. Illustrated Anatomy.",
        journal: "Rev Esp Cir Ortop Traumatol",
        year: 2021,
        pmid: "34148811",
        doi: "10.1016/j.recot.2021.03.004",
      },
    },
  ],

  pearls: [
    "O tálus tem 60% de cartilagem, nenhuma inserção muscular e suprimento retrógrado — três razões pelas quais o colo é uma zona de perigo vascular.",
    "Hawkins gradua o dano vascular pela contagem de articulações luxadas: I (nenhuma) → IV (todas). Mais luxação = mais necrose.",
    "A luxação é emergência; a fixação definitiva pode esperar as partes moles (Vallier, Lindvall).",
    "Sinal de Hawkins aos 6–8 semanas (banda subcondral no dômo em AP) = corpo viável — mas sua ausência não sela o diagnóstico de necrose.",
    "A artrose pós-traumática, não a necrose, é a complicação mais frequente a longo prazo.",
    "Use a dupla via para não fixar em varo — a coluna lateral íntegra é o gabarito de comprimento.",
    "Preserve o ramo deltóideo (deltoide medial): pode ser o último aporte do corpo.",
  ],

  pitfalls: [
    "Postergar a redução de uma luxação (Hawkins III) — necrose de pele, infecção e pior prognóstico.",
    "Correr para fixar na madrugada em partes moles ruins acreditando prevenir necrose — o timing da osteossíntese não muda a taxa de necrose.",
    "Fixar por via medial isolada e aceitar varo — a malunião característica do tálus.",
    "Desperiostizar/dissecar em excesso o colo e o deltoide — sacrifica o aporte remanescente.",
    "Comprimir parafusos através de comunição medial — encurtamento e varo iatrogênico.",
    "Prometer bom resultado a longo prazo — mesmo reduzida anatomicamente, a artrose é esperada nos padrões de alta energia.",
  ],

  figures: [
    {
      id: "fratura-talus:anatomia",
      caption:
        "Tálus em perfil com o suprimento retrógrado: artéria do canal do tarso (tibial posterior) dominante do corpo e artéria dorsal do pé para cabeça/colo.",
      alt: "Desenho esquemático do tálus mostrando cabeça, colo e corpo, com as artérias entrando pelo colo e ascendendo ao corpo.",
    },
    {
      id: "fratura-talus:hawkins",
      caption:
        "Classificação de Hawkins (I–IV) pela progressão da luxação articular (tibiotalar, subtalar, talonavicular) e do risco de necrose. Selecione um tipo.",
      alt: "Quatro padrões da fratura do colo do tálus segundo Hawkins, com marcação das articulações luxadas.",
      variant: "I",
    },
    {
      id: "fratura-talus:sinal-hawkins",
      caption:
        "Sinal de Hawkins: banda radiolucente subcondral no dômo do tálus (AP) por volta de 6–8 semanas indica viabilidade. Selecione presente × ausente.",
      alt: "Incidência AP do tornozelo com o dômo do tálus, mostrando a banda subcondral quando presente.",
      variant: "presente",
    },
    {
      id: "fratura-talus:via-anteromedial",
      caption:
        "Via anteromedial: intervalo entre tibial anterior e tibial posterior; expõe a comunição medial e preserva o ramo deltóideo.",
      alt: "Esquema da face medial do tornozelo com a incisão anteromedial e os tendões que delimitam o intervalo.",
    },
    {
      id: "fratura-talus:via-anterolateral",
      caption:
        "Via anterolateral: lateral ao extensor longo dos dedos, sobre o seio do tarso; combinada à medial forma a dupla via.",
      alt: "Esquema da face anterolateral do pé com a incisão sobre o seio do tarso.",
    },
    {
      id: "fratura-talus:step-reducao",
      caption:
        "Redução anatômica do colo, corrigindo o varo da comunição dorsomedial; a coluna lateral íntegra é o gabarito de comprimento.",
      alt: "Colo do tálus reduzido sobre o contorno fantasma do fragmento desviado em varo.",
    },
    {
      id: "fratura-talus:step-fixacao",
      caption:
        "Fixação: parafusos de compressão da cabeça ao corpo ou, na comunição medial, mini-placa medial de sustentação contra o varo. Selecione a variante.",
      alt: "Comparação esquemática entre fixação por parafusos e por mini-placa medial no colo do tálus.",
      variant: "parafusos",
    },
  ],

  meta: {
    lastReviewed: "2026-07-13",
    sources: [
      "Vallier HA et al., J Bone Joint Surg Am 2014 (DOI 10.2106/JBJS.L.01680)",
      "Lindvall E et al., J Bone Joint Surg Am 2004 (DOI 10.2106/00004623-200410000-00014)",
      "Tezval M et al., J Orthop Trauma 2007 (DOI 10.1097/BOT.0b013e318148c665)",
      "Giordano V et al., Injury 2021 (DOI 10.1016/j.injury.2021.01.047)",
      "Fernández Á et al., Rev Esp Cir Ortop Traumatol 2021 (DOI 10.1016/j.recot.2021.03.004)",
      "Hawkins LG, J Bone Joint Surg Am 1970;52(5):991-1002 (classificação original)",
    ],
    attribution:
      "Evidência recuperada do PubMed. Ver DOIs citados nesta seção.",
  },
});
