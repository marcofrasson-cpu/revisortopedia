import { defineTopic } from "../../types/topic";

export const topic = defineTopic({
  id: "op-quadril-legg-calve-perthes",
  slug: "legg-calve-perthes",
  kind: "condicao",
  regionId: "ortopedia-pediatrica",
  bone: "Quadril (criança)",
  injury: "Necrose avascular idiopática",
  title: "Doença de Legg-Calvé-Perthes",
  subtitle:
    "Necrose avascular idiopática da cabeça femoral na criança: estadiar a doença, ler o pilar lateral e a idade como preditores e decidir a contenção enquanto a cabeça ainda é plástica.",
  laterality: null,
  status: "complete",
  overview:
    "A doença de Legg-Calvé-Perthes é uma osteonecrose idiopática da epífise femoral proximal em crescimento, mais comum em meninos entre 4 e 8 anos. O suprimento epifisário lateral, que cruza a fise, é o elo vascular vulnerável; sua interrupção leva a necrose, colapso subcondral e a uma sequência previsível de fragmentação, reossificação e remodelação descrita por Waldenström. A criança costuma apresentar claudicação indolor ou dor referida à coxa e ao joelho, com limitação de abdução e rotação interna.\n\nO tratamento não visa acelerar a revascularização, e sim preservar a esfericidade e a congruência da cabeça durante o período em que ela é biologicamente plástica. Esse é o princípio da contenção: manter a cabeça dentro do acetábulo para que este a remodele como uma esfera. A decisão terapêutica não é um reflexo automático — depende da idade de início, da extensão do acometimento e, sobretudo, da classificação do pilar lateral de Herring na fase de fragmentação. Em crianças mais novas, o prognóstico costuma ser favorável independentemente da conduta; em crianças acima de 8 anos com pilar lateral B ou B/C, a contenção cirúrgica por osteotomia oferece melhor desfecho que o tratamento não operatório. O pilar lateral C tem prognóstico reservado em qualquer idade.",
  keyFacts: [
    { label: "Epidemiologia", value: "Meninos, 4-8 anos; bilateral em ~10-15% (assíncrono)" },
    { label: "Vaso crítico", value: "Ramos epifisários laterais que cruzam a fise" },
    { label: "Quadro", value: "Claudicação; dor na coxa/joelho; perda de abdução e rotação interna" },
    { label: "Estadiamento", value: "Fases de Waldenström: inicial, fragmentação, reossificação, residual" },
    { label: "Preditores", value: "Idade de início e pilar lateral de Herring (na fragmentação)" },
    { label: "Princípio", value: "Contenção enquanto a cabeça é plástica" },
    { label: "Desfecho", value: "Esfericidade/congruência de Stulberg na maturidade" },
  ],
  anatomy: {
    text:
      "Na criança, a epífise femoral proximal é irrigada quase exclusivamente pelos vasos epifisários laterais, ramos ascendentes da artéria circunflexa femoral medial que percorrem o colo por trás e cruzam a periferia da fise para alcançar a cabeça. A fise funciona como barreira vascular: antes do fechamento, praticamente não há contribuição metafisária ou do ligamento redondo suficiente para suprir a epífise. Essa dependência de um único território explica a vulnerabilidade da cabeça a episódios de isquemia e a topografia ântero-superolateral da necrose.\n\nA necrose reduz a resistência do osso subcondral e, sob carga, o segmento anterolateral colapsa e tende à extrusão. A cabeça atravessa então as fases de Waldenström — densificação inicial, fragmentação, reossificação e remodelação residual. É durante a fragmentação, quando o osso é mecanicamente plástico, que a cobertura acetabular pode moldar a cabeça. A perda de abdução e de rotação interna reflete a incongruência e a sinovite; a extrusão lateral e a chamada abdução em dobradiça (hinge abduction) sinalizam cabeça descoberta e pior prognóstico.",
    figureIds: [
      "legg-calve-perthes:anatomia",
      "legg-calve-perthes:waldenstrom",
    ],
  },
  classification: [
    {
      id: "waldenstrom",
      name: "Fases de Waldenström",
      basis: "Evolução radiográfica natural da cabeça femoral necrótica ao longo do tempo.",
      note:
        "A janela terapêutica útil para a contenção corresponde às fases inicial e de fragmentação, quando a cabeça ainda é plástica; a partir da reossificação, o molde já está em grande parte definido.",
      types: [
        {
          code: "I",
          label: "Inicial (necrose)",
          description:
            "Epífise menor, mais densa e esclerótica; fenda subcondral (sinal do crescente) e alargamento do espaço articular medial.",
          figureId: "legg-calve-perthes:waldenstrom",
          figureVariant: "inicial",
        },
        {
          code: "II",
          label: "Fragmentação",
          description:
            "Reabsorção do osso necrótico com aspecto fragmentado; é a fase em que se classifica o pilar lateral e em que a contenção é mais eficaz.",
          figureId: "legg-calve-perthes:waldenstrom",
          figureVariant: "fragmentacao",
        },
        {
          code: "III",
          label: "Reossificação",
          description:
            "Deposição de osso novo restaurando a densidade; a forma da cabeça já está em grande parte determinada.",
          figureId: "legg-calve-perthes:waldenstrom",
          figureVariant: "reossificacao",
        },
        {
          code: "IV",
          label: "Residual / cicatrizado",
          description:
            "Remodelação final; pode restar coxa magna, deformidade em cabeça achatada e incongruência residual.",
          figureId: "legg-calve-perthes:waldenstrom",
          figureVariant: "cicatrizacao",
        },
      ],
    },
    {
      id: "pilar-lateral",
      name: "Pilar lateral de Herring",
      basis: "Altura preservada da coluna lateral da epífise na incidência AP, medida na fase de fragmentação.",
      note:
        "É o preditor radiográfico mais robusto de desfecho e deve ser lido em conjunto com a idade de início. Classificar precocemente demais, antes da fragmentação, superestima o pilar.",
      types: [
        {
          code: "A",
          label: "Grupo A",
          description:
            "Pilar lateral com altura íntegra, sem perda de densidade; prognóstico uniformemente favorável.",
          figureId: "legg-calve-perthes:pilar-lateral",
          figureVariant: "a",
        },
        {
          code: "B",
          label: "Grupo B",
          description:
            "Pilar lateral mantém mais de 50% da altura original; desfecho depende fortemente da idade de início.",
          figureId: "legg-calve-perthes:pilar-lateral",
          figureVariant: "b",
        },
        {
          code: "B/C",
          label: "Borda B/C",
          description:
            "Pilar fino, mal ossificado ou com exatamente 50% da altura; grupo intermediário acrescentado para reduzir ambiguidade entre B e C.",
          figureId: "legg-calve-perthes:pilar-lateral",
          figureVariant: "bc",
        },
        {
          code: "C",
          label: "Grupo C",
          description:
            "Pilar lateral com menos de 50% da altura; prognóstico reservado, com desfecho pouco influenciado pela conduta.",
          figureId: "legg-calve-perthes:pilar-lateral",
          figureVariant: "c",
        },
      ],
    },
    {
      id: "catterall",
      name: "Classificação de Catterall",
      basis: "Fração da epífise acometida pela necrose, avaliada em AP e perfil.",
      note:
        "Historicamente importante e útil para pensar a extensão do acometimento, mas de reprodutibilidade inferior à do pilar lateral e mais confiável apenas quando a doença está plenamente estabelecida.",
      types: [
        {
          code: "I",
          label: "Grupo I",
          description: "Acometimento de cerca de 25% anterior da epífise, sem sequestro nem colapso.",
          figureId: "legg-calve-perthes:catterall",
          figureVariant: "1",
        },
        {
          code: "II",
          label: "Grupo II",
          description: "Cerca de 50% anterior acometido, com sequestro e preservação das colunas medial e lateral.",
          figureId: "legg-calve-perthes:catterall",
          figureVariant: "2",
        },
        {
          code: "III",
          label: "Grupo III",
          description: "Cerca de 75% da epífise acometida; apenas pequena porção lateral preservada.",
          figureId: "legg-calve-perthes:catterall",
          figureVariant: "3",
        },
        {
          code: "IV",
          label: "Grupo IV",
          description: "Acometimento de toda a epífise, com maior risco de colapso e deformidade.",
          figureId: "legg-calve-perthes:catterall",
          figureVariant: "4",
        },
      ],
    },
    {
      id: "stulberg",
      name: "Desfecho de Stulberg",
      basis: "Esfericidade da cabeça e congruência articular na maturidade esquelética.",
      note:
        "É o desfecho de referência: correlaciona-se com o risco de artrose e de impacto femoroacetabular na vida adulta.",
      types: [
        {
          code: "I-II",
          label: "Esférica congruente",
          description:
            "Cabeça redonda, congruente com o acetábulo; melhor prognóstico a longo prazo.",
          figureId: "legg-calve-perthes:stulberg",
          figureVariant: "esferica",
        },
        {
          code: "III",
          label: "Asférica congruente",
          description:
            "Cabeça ovóide, porém congruente (articulação congruente asférica); risco intermediário de artrose.",
          figureId: "legg-calve-perthes:stulberg",
          figureVariant: "ovoide",
        },
        {
          code: "IV-V",
          label: "Asférica incongruente / plana",
          description:
            "Cabeça achatada com incongruência articular; maior risco de artrose degenerativa precoce.",
          figureId: "legg-calve-perthes:stulberg",
          figureVariant: "plana",
        },
      ],
    },
  ],
  indications: {
    operative: [
      "Idade de início acima de 8 anos com pilar lateral B ou borda B/C, em que a contenção cirúrgica supera a conduta não operatória.",
      "Perda de contenção com extrusão lateral progressiva ou abdução em dobradiça (hinge abduction).",
      "Falha da contenção não cirúrgica em manter a cabeça reduzida no acetábulo.",
      "Cabeça acometida extensa (Catterall III-IV) em criança mais velha, com risco elevado de deformidade.",
    ],
    nonOperative: [
      "Criança com idade de início de 8 anos ou menos, especialmente com pilar lateral A ou B, com bom prognóstico independentemente da conduta.",
      "Doença em fase inicial com boa amplitude de movimento e cabeça contida.",
      "Sinovite/irritabilidade aguda: repouso relativo, restrição de carga e recuperação da amplitude antes de decidir a contenção.",
    ],
    decisionNotes:
      "O eixo da decisão é a combinação idade de início × pilar lateral, definida na fase de fragmentação. Em crianças de 8 anos ou menos, os desfechos costumam ser bons e semelhantes entre observação e cirurgia, sobretudo nos grupos A e B. Acima de 8 anos, o pilar lateral B e a borda B/C beneficiam-se da contenção cirúrgica. O pilar lateral C tem prognóstico reservado em qualquer idade, e nenhuma modalidade demonstrou alterar substancialmente o seu curso. Pré-requisito para qualquer contenção é uma cabeça redutível e um quadril com boa amplitude: contenção sobre um quadril rígido ou já deformado (hinge abduction estabelecida) não corrige a esfericidade e pode piorar a mecânica.",
  },
  approaches: [
    {
      id: "observacao-adm",
      name: "Observação com amplitude de movimento e controle de sintomas",
      indication:
        "Crianças novas e/ou pilar lateral favorável; base do tratamento em todas as fases sintomáticas.",
      interval:
        "Repouso relativo e restrição temporária de impacto na sinovite; anti-inflamatório e fisioterapia para recuperar abdução e rotação interna. Vigilância radiográfica seriada para reconhecer perda de contenção. Não imobiliza rigidamente o quadril nem acelera a revascularização — preserva a mobilidade e a congruência dinâmica.",
      atRisk: [
        "Perda de contenção não detectada por seguimento espaçado demais",
        "Rigidez por sinovite persistente não tratada",
      ],
      figureId: "legg-calve-perthes:orteses",
    },
    {
      id: "ortese-abducao",
      name: "Órtese de abdução (contenção não cirúrgica)",
      indication:
        "Tentativa de manter a cabeça contida mantendo a mobilidade, quando a cirurgia não está indicada ou não é desejada.",
      interval:
        "Posiciona os quadris em abdução para dirigir a cabeça para dentro do acetábulo, preservando a amplitude. Sua eficácia isolada é limitada e discutível; exige adesão e não substitui a osteotomia nas indicações cirúrgicas.",
      atRisk: [
        "Baixa adesão e repercussão psicossocial do uso prolongado",
        "Falsa sensação de contenção com extrusão progressiva",
      ],
      figureId: "legg-calve-perthes:orteses",
    },
    {
      id: "osteotomia-femoral",
      name: "Osteotomia femoral varizante (± desrotação)",
      indication:
        "Contenção cirúrgica pelo lado femoral em cabeça redutível, sobretudo acima de 8 anos com pilar B/B-C.",
      interval:
        "Osteotomia intertrocantérica que variza o colo e redireciona a cabeça para dentro do acetábulo, aumentando a cobertura anterolateral. Controlar a hipovarização e o encurtamento resultantes; a remodelação do colo é melhor quanto mais jovem a criança.",
      atRisk: [
        "Hipovarização residual e claudicação por insuficiência do glúteo médio",
        "Encurtamento do membro",
        "Material de síntese proeminente exigindo retirada",
      ],
      figureId: "legg-calve-perthes:osteotomia",
    },
    {
      id: "osteotomia-inominada",
      name: "Osteotomia inominada de Salter (± procedimentos acetabulares)",
      indication:
        "Contenção pelo lado acetabular, isolada ou combinada à osteotomia femoral em acometimento extenso.",
      interval:
        "Reorienta o acetábulo para cobrir a porção anterolateral da cabeça sem encurtar o fêmur. Em cabeças grandes ou incongruentes, procedimentos de shelf ou combinados ampliam a cobertura. Exige cabeça redutível e congruente para não fixar uma incongruência.",
      atRisk: [
        "Aumento da pressão articular se a cabeça não for redutível",
        "Cobertura insuficiente em cabeça muito aumentada (coxa magna)",
      ],
      figureId: "legg-calve-perthes:osteotomia",
    },
  ],
  technique: [
    {
      n: 1,
      title: "Confirmar o diagnóstico e estadiar a doença",
      detail:
        "Correlacionar claudicação e perda de abdução/rotação interna com radiografias AP e perfil de Lauenstein (rã). Reconhecer os sinais iniciais (epífise densa e menor, fenda subcondral) e situar o quadril na fase de Waldenström. Afastar diagnósticos diferenciais como epifisiólise, displasias epifisárias e sinovite transitória quando o quadro for atípico ou bilateral simétrico.",
      figureId: "legg-calve-perthes:waldenstrom",
      figureVariant: "inicial",
      tips: [
        "Perfil de rã é essencial para ver o segmento anterolateral",
        "Perthes bilateral simétrico deve levantar suspeita de displasia epifisária",
      ],
      pitfalls: [
        "Classificar o pilar lateral antes da fragmentação e superestimar o pilar",
        "Atribuir dor no joelho a causa local e retardar o diagnóstico",
      ],
    },
    {
      n: 2,
      title: "Restaurar e preservar a amplitude de movimento",
      detail:
        "Tratar a sinovite com repouso relativo, restrição temporária de impacto e anti-inflamatório; recuperar abdução e rotação interna com fisioterapia. Uma cabeça redutível e um quadril móvel são pré-requisitos para qualquer estratégia de contenção — a rigidez, por si, piora o prognóstico e impede a moldagem.",
      figureId: "legg-calve-perthes:orteses",
      tips: [
        "Ganhar amplitude antes de decidir a contenção",
        "Tração ou repouso curto ajudam a quebrar o ciclo de sinovite e rigidez",
      ],
      pitfalls: [
        "Insistir em contenção sobre quadril rígido",
        "Confundir perda fixa de abdução (hinge abduction) com sinovite reversível",
      ],
    },
    {
      n: 3,
      title: "Estratificar o risco por idade e pilar lateral",
      detail:
        "Na fase de fragmentação, classificar o pilar lateral (A, B, B/C, C) e cruzar com a idade de início. Crianças de 8 anos ou menos com pilar A/B tendem a bom desfecho independentemente da conduta; acima de 8 anos, pilar B e borda B/C favorecem contenção cirúrgica; pilar C tem prognóstico reservado em qualquer idade.",
      figureId: "legg-calve-perthes:pilar-lateral",
      figureVariant: "bc",
      tips: [
        "A combinação idade × pilar lateral orienta a decisão melhor que qualquer critério isolado",
        "Reavaliar o pilar em radiografias seriadas na fragmentação",
      ],
      pitfalls: [
        "Indicar cirurgia em criança nova de bom prognóstico",
        "Prometer que a cirurgia normaliza o desfecho no pilar C",
      ],
    },
    {
      n: 4,
      title: "Escolher a via de contenção",
      detail:
        "Quando indicada a contenção cirúrgica, optar entre osteotomia femoral varizante, osteotomia inominada de Salter ou procedimentos combinados/acetabulares conforme a redutibilidade, o tamanho da cabeça e a cobertura necessária. A cabeça precisa reduzir-se de forma congruente no acetábulo em abdução; caso contrário, a contenção fixa uma incongruência.",
      figureId: "legg-calve-perthes:contencao",
      figureVariant: "contido",
      tips: [
        "Confirmar redutibilidade e congruência em abdução antes de fixar",
        "Em cabeça grande ou muito acometida, considerar cobertura combinada",
      ],
      pitfalls: [
        "Conter uma cabeça não redutível e aumentar a pressão articular",
        "Ignorar a extrusão lateral que já sinaliza cabeça descoberta",
      ],
    },
    {
      n: 5,
      title: "Executar a contenção e proteger a moldagem",
      detail:
        "Na osteotomia femoral, varizar e desrotar o colo controlando a hipovarização e o encurtamento; na de Salter, reorientar o acetábulo cobrindo a porção anterolateral. Após a fixação, manter a cabeça contida e móvel durante a fragmentação para que o acetábulo a remodele como esfera enquanto o osso é plástico.",
      figureId: "legg-calve-perthes:osteotomia",
      figureVariant: "femoral",
      tips: [
        "Osso mais jovem remodela melhor a hipovarização do colo",
        "Preservar mobilidade no pós-operatório favorece a congruência dinâmica",
      ],
      pitfalls: [
        "Hipovarização excessiva com insuficiência do glúteo médio",
        "Imobilização rígida prolongada que gera rigidez",
      ],
    },
    {
      n: 6,
      title: "Acompanhar a remodelação até a maturidade",
      detail:
        "Seguir com radiografias seriadas pela reossificação e remodelação, avaliando a esfericidade e a congruência (Stulberg). Vigiar coxa magna, discrepância de comprimento, impacto femoroacetabular e sinais de artrose. Deformidades residuais podem exigir procedimentos tardios de realinhamento ou de tratamento do impacto.",
      figureId: "legg-calve-perthes:stulberg",
      figureVariant: "ovoide",
      tips: [
        "Stulberg na maturidade é o desfecho que importa a longo prazo",
        "Rastrear impacto femoroacetabular na cabeça asférica",
      ],
      pitfalls: [
        "Dar alta antes da maturidade esquelética",
        "Ignorar sintomas de impacto na cabeça ovóide residual",
      ],
    },
  ],
  postop: {
    immobilization:
      "Após osteotomia, imobilização (gesso pelvipodálico ou órtese) por poucas semanas conforme a estabilidade da fixação e a idade; o objetivo é proteger a síntese sem gerar rigidez. No tratamento não cirúrgico, prioriza-se a mobilidade em vez da imobilização rígida.",
    weightBearing:
      "Restrição de carga na fase aguda sintomática e no pós-operatório inicial, com progressão conforme consolidação da osteotomia e conforto. A contenção depende mais de manter a cabeça reduzida e móvel do que de descarga prolongada.",
    rehab: [
      {
        window: "0-6 semanas",
        weightBearing: "Carga protegida / conforme osteotomia",
        focus: "Proteger a fixação; recuperar amplitude, sobretudo abdução e rotação interna; controle da dor e da sinovite.",
      },
      {
        window: "6-12 semanas",
        weightBearing: "Progressiva após sinais de consolidação",
        focus: "Progressão de carga, marcha e amplitude; fortalecimento dos abdutores e reintrodução gradual da atividade.",
      },
      {
        window: "3-12 meses",
        weightBearing: "Plena conforme tolerância",
        focus: "Retorno funcional evitando impacto repetitivo intenso; manter mobilidade durante a reossificação.",
      },
      {
        window: "Até a maturidade",
        weightBearing: "Livre",
        focus: "Vigilância da remodelação e da esfericidade; rastrear coxa magna, discrepância e impacto femoroacetabular.",
      },
    ],
    followup:
      "Radiografias seriadas por toda a evolução até a maturidade esquelética, classificando o desfecho de Stulberg. Investigar impacto femoroacetabular e artrose precoce na cabeça asférica residual; deformidades sintomáticas podem exigir procedimentos tardios.",
  },
  complications: [
    {
      name: "Deformidade residual da cabeça (coxa magna e cabeça achatada)",
      detail:
        "Cabeça aumentada e/ou achatada e asférica ao final da remodelação, com incongruência articular.",
      prevention:
        "Contenção adequada durante a fase plástica e preservação da amplitude de movimento.",
    },
    {
      name: "Abdução em dobradiça (hinge abduction)",
      detail:
        "A porção lateral extrusa da cabeça choca-se com o rebordo acetabular na abdução, bloqueando a redução e piorando a mecânica.",
      prevention:
        "Reconhecer extrusão precoce e evitar contenção sobre cabeça já não redutível; considerar osteotomia valgizante de salvamento nos casos estabelecidos.",
    },
    {
      name: "Impacto femoroacetabular e artrose precoce",
      detail:
        "A cabeça asférica residual gera impacto e desgaste, associando-se a dor e a pior função na vida adulta.",
      prevention:
        "Buscar o melhor desfecho de Stulberg possível e rastrear/ tratar o impacto na maturidade.",
    },
    {
      name: "Complicações da osteotomia",
      detail:
        "Hipovarização residual com insuficiência dos abdutores, encurtamento do membro e necessidade de retirada de material.",
      prevention:
        "Planejar o grau de correção conforme a idade e o potencial de remodelação; controle radiográfico da consolidação.",
    },
    {
      name: "Distúrbio do crescimento fisário",
      detail:
        "Fechamento fisário precoce ou parcial, contribuindo para coxa breva, coxa magna e discrepância de comprimento.",
      prevention:
        "Seguimento até a maturidade para detectar e tratar precocemente a discrepância e a deformidade.",
    },
  ],
  evidence: [
    {
      id: "herring-2004-parte2-tratamento",
      claim:
        "No estudo prospectivo multicêntrico, o pilar lateral e a idade de início foram fortes preditores de desfecho, e a contenção cirúrgica superou a não operatória no pilar B e na borda B/C em crianças com mais de 8 anos.",
      takeaway:
        "A decisão terapêutica ancora-se na combinação idade × pilar lateral; abaixo de 8 anos os desfechos são semelhantes entre condutas, e o pilar C evolui mal em qualquer idade.",
      level: "II",
      studyType: "Estudo prospectivo multicêntrico controlado",
      era: "classico",
      citation: {
        authors: "Herring JA, Kim HT, Browne R",
        title:
          "Legg-Calve-Perthes disease. Part II: Prospective multicenter study of the effect of treatment on outcome.",
        journal: "J Bone Joint Surg Am",
        year: 2004,
        pmid: "15466720",
      },
    },
    {
      id: "herring-2004-parte1-classificacao",
      claim:
        "A classificação modificada do pilar lateral (com o grupo intermediário B/C) e a classificação de Stulberg redefinida mostraram concordância inter e intraobservador na faixa excelente.",
      takeaway:
        "O pilar lateral é reprodutível o suficiente para orientar decisões e comparações, desde que aplicado na fase de fragmentação.",
      level: "III",
      studyType: "Estudo de confiabilidade inter e intraobservador",
      era: "classico",
      citation: {
        authors: "Herring JA, Kim HT, Browne R",
        title:
          "Legg-Calve-Perthes disease. Part I: Classification of radiographs with use of the modified lateral pillar and Stulberg classifications.",
        journal: "J Bone Joint Surg Am",
        year: 2004,
        pmid: "15466719",
      },
    },
    {
      id: "larson-2012-longo-prazo",
      claim:
        "Em coorte prospectiva tratada de forma não operatória e reavaliada em média 20 anos depois, dor, artrose e disfunção foram comuns, e a classificação de Stulberg associou-se de forma independente ao desfecho funcional.",
      takeaway:
        "O desfecho de longo prazo do Perthes está longe de ser uniformemente benigno; a esfericidade/congruência final e o impacto femoroacetabular determinam a função adulta.",
      level: "II",
      studyType: "Coorte prospectiva de longo prazo (~20 anos)",
      era: "atual",
      citation: {
        authors: "Larson AN, Sucato DJ, Herring JA, et al.",
        title:
          "A prospective multicenter study of Legg-Calvé-Perthes disease: functional and radiographic outcomes of nonoperative treatment at a mean follow-up of twenty years.",
        journal: "J Bone Joint Surg Am",
        year: 2012,
        pmid: "22488614",
        doi: "10.2106/JBJS.J.01073",
      },
    },
    {
      id: "adulkasem-2022-metanalise-rede",
      claim:
        "Metanálise em rede de estudos observacionais em Perthes grave apontou as osteotomias (combinada, femoral varizante e inominada de Salter) como as modalidades mais eficazes para congruência esférica, com superioridade do tratamento operatório limitada a crianças acima de 8 anos.",
      takeaway:
        "A vantagem da contenção cirúrgica concentra-se na criança mais velha e com doença grave, reforçando a estratificação por idade.",
      level: "III",
      studyType: "Revisão sistemática e metanálise em rede de estudos observacionais",
      era: "atual",
      citation: {
        authors: "Adulkasem N, Phinyo P, Tangadulrat P, et al.",
        title:
          "Comparative effectiveness of treatment modalities in severe Legg-Calvé-Perthes disease: Systematic review and network meta-analysis of observational studies.",
        journal: "Int Orthop",
        year: 2022,
        pmid: "35230467",
        doi: "10.1007/s00264-022-05352-x",
      },
    },
    {
      id: "kadhim-2012-shelf-timing",
      claim:
        "Metanálise sobre acetabuloplastia de shelf mostrou melhores desfechos de Stulberg quando realizada como contenção nas fases iniciais (Waldenström I-II) do que como salvamento em fases tardias.",
      takeaway:
        "O momento importa tanto quanto o procedimento: a contenção age enquanto a cabeça é plástica; intervir tarde tende a apenas remediar deformidade estabelecida.",
      level: "III",
      studyType: "Revisão sistemática e metanálise de estudos observacionais",
      era: "atual",
      citation: {
        authors: "Kadhim M, Holmes L, Bowen JR",
        title:
          "The role of shelf acetabuloplasty in early and late stages of Perthes disease: a meta-analysis of observational studies.",
        journal: "J Child Orthop",
        year: 2012,
        pmid: "24082953",
        doi: "10.1007/s11832-012-0436-9",
      },
    },
  ],
  pearls: [
    "A vulnerabilidade vem de a epífise depender quase só dos vasos epifisários laterais que cruzam a fise.",
    "Classifique o pilar lateral na fragmentação: antes disso, o pilar é superestimado.",
    "A decisão gira em torno de idade de início × pilar lateral; abaixo de 8 anos o prognóstico costuma ser bom.",
    "Contenção só faz sentido com cabeça redutível e quadril móvel — mobilidade antes de qualquer osteotomia.",
    "O desfecho que importa é o de Stulberg na maturidade: esfericidade e congruência predizem a artrose adulta.",
  ],
  pitfalls: [
    "Classificar o pilar lateral cedo demais e indicar cirurgia desnecessária em criança nova.",
    "Prometer que a osteotomia normaliza o desfecho no pilar lateral C.",
    "Conter uma cabeça não redutível ou com hinge abduction, fixando a incongruência.",
    "Imobilizar rigidamente o quadril e trocar deformidade por rigidez.",
    "Dar alta antes da maturidade e perder impacto femoroacetabular ou artrose precoce.",
  ],
  figures: [
    {
      id: "legg-calve-perthes:anatomia",
      caption:
        "Suprimento epifisário lateral da cabeça femoral infantil e território ântero-superolateral de necrose.",
      alt: "Vascularização da cabeça femoral na criança e área de necrose avascular",
      kind: "diagram",
    },
    {
      id: "legg-calve-perthes:waldenstrom",
      variant: "inicial",
      caption: "Fase inicial de Waldenström: epífise densa, menor e esclerótica.",
      alt: "Fase inicial da doença de Perthes",
      kind: "diagram",
    },
    {
      id: "legg-calve-perthes:waldenstrom",
      variant: "fragmentacao",
      caption: "Fase de fragmentação: reabsorção do osso necrótico; janela para a contenção.",
      alt: "Fase de fragmentação da doença de Perthes",
      kind: "diagram",
    },
    {
      id: "legg-calve-perthes:waldenstrom",
      variant: "reossificacao",
      caption: "Fase de reossificação: deposição de osso novo com forma já em grande parte definida.",
      alt: "Fase de reossificação da doença de Perthes",
      kind: "diagram",
    },
    {
      id: "legg-calve-perthes:waldenstrom",
      variant: "cicatrizacao",
      caption: "Fase residual: remodelação final, podendo restar coxa magna e achatamento.",
      alt: "Fase residual da doença de Perthes",
      kind: "diagram",
    },
    {
      id: "legg-calve-perthes:pilar-lateral",
      variant: "a",
      caption: "Pilar lateral de Herring, grupo A: coluna lateral íntegra.",
      alt: "Classificação do pilar lateral grupo A",
      kind: "diagram",
    },
    {
      id: "legg-calve-perthes:pilar-lateral",
      variant: "b",
      caption: "Pilar lateral grupo B: mais de 50% da altura preservada.",
      alt: "Classificação do pilar lateral grupo B",
      kind: "diagram",
    },
    {
      id: "legg-calve-perthes:pilar-lateral",
      variant: "bc",
      caption: "Borda B/C: pilar fino, mal ossificado ou com cerca de 50% da altura.",
      alt: "Classificação do pilar lateral borda B/C",
      kind: "diagram",
    },
    {
      id: "legg-calve-perthes:pilar-lateral",
      variant: "c",
      caption: "Pilar lateral grupo C: menos de 50% da altura; prognóstico reservado.",
      alt: "Classificação do pilar lateral grupo C",
      kind: "diagram",
    },
    {
      id: "legg-calve-perthes:catterall",
      variant: "1",
      caption: "Catterall I: cerca de 25% anterior da epífise acometido.",
      alt: "Classificação de Catterall grupo I",
      kind: "diagram",
    },
    {
      id: "legg-calve-perthes:catterall",
      variant: "3",
      caption: "Catterall III: cerca de 75% da epífise acometido.",
      alt: "Classificação de Catterall grupo III",
      kind: "diagram",
    },
    {
      id: "legg-calve-perthes:contencao",
      variant: "contido",
      caption: "Princípio da contenção: cabeça mantida dentro do acetábulo, que a molda como esfera.",
      alt: "Cabeça femoral contida no acetábulo",
      kind: "diagram",
    },
    {
      id: "legg-calve-perthes:contencao",
      variant: "nao-contido",
      caption: "Perda de contenção: extrusão lateral e cabeça descoberta.",
      alt: "Cabeça femoral extrusa e não contida",
      kind: "diagram",
    },
    {
      id: "legg-calve-perthes:orteses",
      caption: "Contenção não cirúrgica: abdução e amplitude de movimento do quadril.",
      alt: "Órtese de abdução e amplitude de movimento no Perthes",
      kind: "diagram",
    },
    {
      id: "legg-calve-perthes:osteotomia",
      variant: "femoral",
      caption: "Osteotomia femoral varizante: variza o colo e dirige a cabeça para o acetábulo.",
      alt: "Osteotomia femoral varizante de contenção",
      kind: "diagram",
    },
    {
      id: "legg-calve-perthes:osteotomia",
      variant: "salter",
      caption: "Osteotomia inominada de Salter: reorienta o acetábulo para cobrir a cabeça anterolateral.",
      alt: "Osteotomia inominada de Salter",
      kind: "diagram",
    },
    {
      id: "legg-calve-perthes:stulberg",
      variant: "esferica",
      caption: "Desfecho de Stulberg I-II: cabeça esférica congruente.",
      alt: "Desfecho de Stulberg esférico congruente",
      kind: "diagram",
    },
    {
      id: "legg-calve-perthes:stulberg",
      variant: "ovoide",
      caption: "Desfecho de Stulberg III: cabeça ovóide, congruente asférica.",
      alt: "Desfecho de Stulberg ovóide",
      kind: "diagram",
    },
    {
      id: "legg-calve-perthes:stulberg",
      variant: "plana",
      caption: "Desfecho de Stulberg IV-V: cabeça achatada e incongruente.",
      alt: "Desfecho de Stulberg plano incongruente",
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
      "Hebert S, Lech O, et al. Ortopedia e Traumatologia: Princípios e Prática. 6ª ed. 2025.",
    ],
    attribution:
      "Conteúdo original Revisortopedia; figuras esquemáticas originais, sem reprodução de material protegido.",
    figureReference:
      "Referência editorial: Rockwood and Wilkins' Fractures in Children, 10ª ed. (2024); redesenho original, não reprodução.",
  },
});
