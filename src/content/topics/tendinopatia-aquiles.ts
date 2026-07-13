import { defineTopic } from "../../types/topic";

/* ============================================================================
   Tendinopatia do Aquiles
   Região: membro inferior — Tornozelo / Pé (tendão calcâneo)
   ========================================================================== */

export const topic = defineTopic({
  id: "tendinopatia-aquiles",
  slug: "tendinopatia-aquiles",
  regionId: "membro-inferior",
  bone: "Tendão",
  injury: "Tendinopatia",
  title: "Tendinopatia do Aquiles",
  subtitle:
    "Lesão de sobrecarga degenerativa (não inflamatória) do tendão calcâneo — distinção entre médio-porção e insercional, exercício excêntrico como primeira linha, ondas de choque e cirurgia no refratário",
  laterality: null,
  status: "complete",

  overview:
    "A tendinopatia do Aquiles (tendão calcâneo) é a afecção mais comum do tendão em membros inferiores, típica do corredor recreacional de meia-idade, mas também presente em indivíduos sedentários. O termo antigo 'tendinite' foi abandonado: a histologia demonstra TENDINOSE — degeneração colágena com fibras desorganizadas, aumento de glicosaminoglicanos interfibrilares, hipercelularidade e neovascularização (com neonervação acompanhante), SEM células inflamatórias — confirmado por microdiálise in situ. A distinção clínica fundamental é topográfica: (1) tendinopatia NÃO-INSERCIONAL (médio-porção), 2–6 cm proximal à inserção, em zona relativamente hipovascular, que se apresenta como espessamento fusiforme doloroso; e (2) tendinopatia INSERCIONAL, na entese calcânea, frequentemente associada a entesófito/calcificação, deformidade de Haglund e bursite retrocalcânea. Essa distinção guia o tratamento. A primeira linha é conservadora e o pilar é o EXERCÍCIO EXCÊNTRICO de carga pesada da panturrilha (protocolo de Alfredson), com melhor evidência na médio-porção; na doença insercional, o protocolo é modificado para evitar a dorsiflexão além do neutro (que comprime o tendão contra o calcâneo). Nos casos refratários, as ondas de choque extracorpóreas (ESWT) somam benefício — e na doença insercional a ESWT mostrou-se superior ao excêntrico isolado. A cirurgia (débridamento do tecido degenerado, ressecção de Haglund/entesófito, reinserção com âncoras e, em falhas extensas, transferência do flexor longo do hálux) fica reservada ao subgrupo que não responde ao tratamento conservador prolongado.",

  keyFacts: [
    { label: "Natureza", value: "Tendinose degenerativa — NÃO inflamatória" },
    { label: "População típica", value: "Corredor recreacional, 35–45 anos; também sedentários" },
    { label: "Dois padrões", value: "Médio-porção (2–6 cm) vs insercional" },
    { label: "Histologia", value: "Colágeno desorganizado, neovasos, sem inflamação" },
    { label: "Primeira linha", value: "Excêntrico de Alfredson (12 semanas)" },
    { label: "Insercional", value: "Excêntrico modificado (sem dorsiflexão) + ESWT" },
    { label: "Refratário", value: "ESWT; depois cirurgia" },
    { label: "Escore de desfecho", value: "VISA-A (pain, function, activity)" },
  ],

  anatomy: {
    text:
      "O tendão calcâneo (de Aquiles) é o tendão mais forte e volumoso do corpo, formado pela confluência das aponeuroses do gastrocnêmio (origem femoral, biarticular) e do sóleo (origem tibiofibular, monoarticular), inserindo-se na face posterior da tuberosidade do calcâneo. Suas fibras sofrem rotação de cerca de 90° (medial para posterior) no trajeto distal, o que concentra estresse na região 2–6 cm proximal à inserção. Essa região é uma zona relativamente HIPOVASCULAR (watershed), irrigada de forma tênue pelo mesotendão/paratendão, e corresponde ao sítio típico da tendinopatia médio-porção. O tendão não possui bainha sinovial verdadeira, mas um paratendão (peritendão) que responde por deslizamento e nutrição. Anteriormente ao tendão situa-se o coxim adiposo de Kager; entre o tendão e a cortical posterossuperior do calcâneo há a bursa retrocalcânea, e superficialmente a bursa retroaquiliana (subcutânea). A inserção calcânea é uma ÊNTESE fibrocartilaginosa: a doença insercional acomete esse enteso-órgão, com frequente entesófito/calcificação intratendínea, proeminência posterossuperior do calcâneo (deformidade de Haglund) e bursite retrocalcânea associada. O tendão transmite a força do tríceps sural para a flexão plantar, absorvendo cargas de 6–12 vezes o peso corporal na corrida e no salto, o que explica sua vulnerabilidade à sobrecarga cíclica.",
    figureIds: [
      "tendinopatia-aquiles:anatomia",
      "tendinopatia-aquiles:patologia",
    ],
  },

  classification: [
    {
      id: "topografia",
      name: "Classificação anatômica (topográfica)",
      basis:
        "Localização da doença ao longo do tendão — determina protocolo de exercício e opções cirúrgicas",
      note:
        "É a distinção clinicamente mais importante: a resposta ao excêntrico de Alfredson clássico é boa na médio-porção, porém pobre (~32%) na insercional, que exige protocolo modificado e frequentemente ESWT.",
      types: [
        {
          code: "não-insercional",
          label: "Médio-porção (não-insercional)",
          description:
            "Doença 2–6 cm proximal à inserção, na zona hipovascular. Espessamento fusiforme doloroso, dor que 'migra' com o tendão à dorsiflexão (arco doloroso). Melhor resposta ao excêntrico clássico.",
          figureId: "tendinopatia-aquiles:localizacao",
          figureVariant: "medio-porcao",
        },
        {
          code: "insercional",
          label: "Insercional",
          description:
            "Doença na êntese calcânea, com entesófito/calcificação, frequente deformidade de Haglund e bursite retrocalcânea. Pior resposta ao excêntrico clássico; excêntrico modificado (sem dorsiflexão) e ESWT são preferidos.",
          figureId: "tendinopatia-aquiles:localizacao",
          figureVariant: "insercional",
        },
      ],
    },
    {
      id: "cronologia-clinica",
      name: "Continuum clínico (reativa → degenerativa)",
      basis:
        "Modelo de continuum da patologia tendínea (Cook & Purdam) — estágio funcional da resposta à carga",
      note:
        "Modelo conceitual útil: o tendão pode transitar entre estágios conforme a carga; o estágio degenerativo é o menos reversível e concentra a doença sintomática crônica.",
      types: [
        {
          code: "reativa",
          label: "Tendinopatia reativa",
          description:
            "Resposta não inflamatória, proliferativa e adaptativa a sobrecarga aguda; espessamento fusiforme homogêneo, potencialmente reversível com ajuste de carga.",
        },
        {
          code: "desarranjo",
          label: "Desarranjo (dysrepair)",
          description:
            "Falha de reparo com maior desorganização da matriz e início de neovascularização; alterações estruturais mais estabelecidas.",
        },
        {
          code: "degenerativa",
          label: "Tendinopatia degenerativa",
          description:
            "Degeneração da matriz com áreas de morte celular, neovasos e neonervação, hipoecogenicidade à ultrassonografia; substrato do quadro crônico refratário.",
        },
      ],
    },
  ],

  indications: {
    operative: [
      "Falha do tratamento conservador bem conduzido por ao menos 3–6 meses (excêntrico ± ESWT)",
      "Doença insercional com entesófito volumoso, deformidade de Haglund sintomática e bursite retrocalcânea refratários",
      "Área extensa de degeneração intratendínea comprometendo grande porção da secção transversa",
      "Dor incapacitante persistente com falha das medidas de carga e físicas",
    ],
    nonOperative: [
      "Todos os casos como primeira linha — o tratamento é conservador na grande maioria",
      "Exercício excêntrico de carga pesada (protocolo de Alfredson) por 12 semanas — médio-porção",
      "Excêntrico modificado sem dorsiflexão além do neutro — doença insercional",
      "ESWT em casos refratários ao exercício isolado (e de escolha inicial associável na insercional)",
      "Ajuste de carga/treino, calcanheira/palmilha de elevação (insercional), correção de erros de treino e fatores de risco",
    ],
    decisionNotes:
      "O manejo inicia SEMPRE pelo conservador. Na tendinopatia de médio-porção, o exercício excêntrico de carga pesada (3×15 repetições, duas vezes ao dia, sete dias por semana, por 12 semanas, com joelho estendido e fletido) é a intervenção com melhor evidência e deve ser a primeira linha, exigindo aderência e tolerância à dor 'aceitável' durante o exercício. A ESWT (ondas de choque de baixa energia repetidas) é o complemento de escolha no paciente que não responde ao excêntrico isolado: RCT mostrou que excêntrico + ESWT supera o excêntrico isolado aos 4 meses na médio-porção. Na doença INSERCIONAL, o protocolo excêntrico clássico tem resultados inferiores (apenas ~1/3 de sucesso); recomenda-se o protocolo modificado (sem descer o calcanhar abaixo do plano do degrau, evitando compressão da entese) e, notadamente, a ESWT — RCT dedicado à insercional demonstrou superioridade da ESWT sobre o excêntrico aos 4 meses. Injeções de corticoide são desencorajadas pelo risco de ruptura e por não tratarem a degeneração. A cirurgia é reservada às falhas do conservador prolongado; na insercional envolve ressecção do entesófito/Haglund, débridamento e reinserção com âncoras, adicionando-se transferência do flexor longo do hálux quando a degeneração compromete grande parte do tendão (sobretudo em pacientes mais velhos ou de baixa qualidade tecidual).",
  },

  approaches: [
    {
      id: "posteromedial",
      name: "Via posteromedial ao tendão calcâneo",
      indication:
        "Débridamento da médio-porção degenerada e acesso para tenotomias/reparos; poupa o nervo sural, de trajeto posterolateral",
      interval:
        "Incisão longitudinal medial à borda do tendão calcâneo; abre-se o paratendão e expõe-se o tendão, protegendo o feixe neurovascular tibial posterior em profundidade e medial",
      atRisk: [
        "Nervo sural (posterolateral)",
        "Feixe neurovascular tibial posterior (medial profundo)",
        "Vascularização do paratendão (risco de necrose de borda cutânea)",
      ],
      figureId: "tendinopatia-aquiles:via-acesso",
    },
    {
      id: "central-transaquileu",
      name: "Via central (transaquílea) posterior",
      indication:
        "Acesso à doença insercional para ressecção de entesófito/Haglund, débridamento central e reinserção com âncoras; permite exposição ampla da entese",
      interval:
        "Incisão posterior na linha média, com abertura longitudinal do tendão (tendon-splitting); destaque parcial da inserção para ressecar o entesófito e reancorar o tendão à tuberosidade",
      atRisk: [
        "Inserção calcânea (necessidade de reancoragem segura)",
        "Coxim adiposo do calcanhar / integridade cutânea posterior",
        "Ramos calcâneos mediais (dor cicatricial)",
      ],
    },
  ],

  technique: [
    {
      n: 1,
      title: "Débridamento do tecido degenerado e ressecção de Haglund/entesófito",
      detail:
        "Após o acesso, abre-se o paratendão (médio-porção) ou realiza-se abordagem central da entese (insercional). Excisa-se de forma econômica o tecido tendíneo degenerado (aspecto amarelado/mucoide), preservando o tendão viável. Na doença insercional, resseca-se o entesófito intratendíneo e a proeminência posterossuperior do calcâneo (deformidade de Haglund) com osteótomo/serra, além da bursa retrocalcânea inflamada — descomprimindo a entese.",
      figureId: "tendinopatia-aquiles:step-1",
      tips: [
        "Ressecção óssea suficiente da proeminência de Haglund evita impingente residual",
        "Preserve o máximo de tendão viável; excise apenas a porção degenerada",
        "Tenotomias longitudinais/escarificação podem estimular resposta reparadora na médio-porção",
      ],
      pitfalls: [
        "Ressecção óssea insuficiente mantém o conflito insercional e a dor",
        "Ressecção óssea excessiva enfraquece a inserção e arrisca fratura por avulsão",
        "Descolamento amplo do paratendão compromete a vascularização e a cicatrização cutânea",
      ],
    },
    {
      n: 2,
      title: "Reinserção com âncoras e transferência do FHL (quando indicada)",
      detail:
        "Quando a inserção foi destacada, reancora-se o tendão à tuberosidade calcânea com âncoras de sutura, preferencialmente em configuração de dupla fileira (double-row/ponte) para ampla área de contato e fixação robusta. Se a degeneração compromete mais de ~50% da secção transversa (ou em pacientes mais velhos), realiza-se a TRANSFERÊNCIA DO FLEXOR LONGO DO HÁLUX (FHL) ao calcâneo, que reforça a flexão plantar, aporta vascularização e protege o reparo. Testa-se a fixação em flexão plantar de repouso adequada.",
      figureId: "tendinopatia-aquiles:step-2",
      tips: [
        "Configuração em ponte (double-row) maximiza a área de contato tendão-osso",
        "O FHL adiciona força de flexão plantar e trofismo vascular ao leito reparado",
        "Ajuste a tensão com o tornozelo em leve equino de repouso fisiológico",
      ],
      pitfalls: [
        "Reparo sob tensão excessiva limita a dorsiflexão; frouxo, perde a força propulsora",
        "Fixação do FHL muito distal pode lesar o feixe neurovascular medial",
        "Mobilização precoce sem proteção arrisca falha da reinserção",
      ],
    },
  ],

  postop: {
    immobilization:
      "Imobilização em bota/tala com o tornozelo em leve flexão plantar (equino) por cerca de 2 semanas, progredindo para bota removível com calcanheiras que são retiradas gradualmente até o neutro em torno de 6 semanas; após reinserção insercional ou transferência do FHL a proteção tende a ser mais prolongada.",
    weightBearing:
      "Descarga ou carga parcial protegida nas primeiras ~2 semanas, com progressão para carga conforme tolerado dentro da bota; carga total em torno de 6 semanas conforme cicatrização e tipo de procedimento.",
    rehab: [
      {
        window: "0–2 semanas",
        weightBearing: "Sem carga / toque, bota em equino",
        focus:
          "Controle de edema e da ferida, elevação, mobilização digital; proteção do reparo em flexão plantar",
      },
      {
        window: "2–6 semanas",
        weightBearing: "Carga parcial progressiva na bota, calcanheiras",
        focus:
          "Amplitude de movimento ativa progressiva até o neutro, retirada gradual das calcanheiras, isométricos suaves da panturrilha",
      },
      {
        window: "6–12 semanas",
        weightBearing: "Carga total, transição para calçado",
        focus:
          "Fortalecimento concêntrico/excêntrico progressivo do tríceps sural, propriocepção, marcha normalizada",
      },
      {
        window: "> 12 semanas",
        weightBearing: "Total, retorno gradual ao impacto",
        focus:
          "Progressão a corrida e esporte guiada por força de flexão plantar e ausência de dor; retorno esportivo tipicamente em 4–6 meses",
      },
    ],
    followup:
      "Acompanhamento clínico com escore VISA-A para monitorar dor/função. No tratamento CONSERVADOR, reforçar a aderência ao programa excêntrico por 12 semanas antes de julgar falha, corrigir erros de treino e fatores de risco (obesidade, alterações de eixo, calçado). No pós-operatório, vigiar cicatrização da ferida (área de risco), progredir carga conforme o procedimento e reabilitar a força de flexão plantar de forma gradual.",
  },

  complications: [
    {
      name: "Falha do tratamento conservador",
      detail:
        "Parte dos pacientes (sobretudo insercionais e crônicos de longa data) não responde ao excêntrico e/ou ESWT, evoluindo para indicação cirúrgica.",
      prevention:
        "Aderência ao protocolo por 12 semanas, protocolo correto conforme topografia, associação de ESWT no refratário, correção de fatores de risco.",
    },
    {
      name: "Ruptura do tendão calcâneo",
      detail:
        "Risco em tendão degenerado, aumentado por infiltração de corticoide e por sobrecarga súbita; pode ocorrer também após débridamento extenso.",
      prevention:
        "Evitar corticoide intratendíneo; progressão gradual de carga; reforço com transferência do FHL em degeneração extensa.",
    },
    {
      name: "Complicações de ferida / necrose de borda cutânea",
      detail:
        "A pele posterior tem vascularização tênue; incisões e descolamentos podem gerar deiscência, necrose de borda e infecção, especialmente em diabéticos e tabagistas.",
      prevention:
        "Incisões cuidadosas, mínimo descolamento do paratendão, manejo de comorbidades e tabagismo; considerar via posteromedial.",
    },
    {
      name: "Lesão do nervo sural",
      detail:
        "Neuroma ou hipoestesia dorsolateral do pé por lesão do nervo sural na abordagem posterolateral.",
      prevention:
        "Preferir via posteromedial; identificar e proteger o nervo sural; incisões planejadas.",
    },
    {
      name: "Dor persistente / recidiva e fraqueza de flexão plantar",
      detail:
        "Persistência de sintomas por débridamento/ressecção insuficientes, ou perda de força propulsora após transferências e reparos extensos.",
      prevention:
        "Ressecção adequada do entesófito/Haglund, reabilitação de força dirigida, expectativa realista de retorno em 4–6 meses.",
    },
  ],

  evidence: [
    {
      id: "alfredson-1998",
      claim:
        "Estudo prospectivo original do protocolo excêntrico de carga pesada: 15 atletas com tendinose crônica de médio-porção vs 15 controles tratados convencionalmente.",
      takeaway:
        "Todos os 15 do grupo excêntrico retornaram à corrida com queda significativa da dor e recuperação de força em 12 semanas, enquanto os 15 controles falharam e acabaram operados — base fundadora do exercício excêntrico como primeira linha.",
      level: "III",
      studyType: "Coorte prospectiva com grupo de comparação",
      era: "classico",
      citation: {
        authors: "Alfredson H, Pietilä T, Jonsson P, Lorentzon R",
        title:
          "Heavy-load eccentric calf muscle training for the treatment of chronic Achilles tendinosis",
        journal: "Am J Sports Med",
        year: 1998,
        pmid: "9617396",
        doi: "10.1177/03635465980260030301",
      },
    },
    {
      id: "alfredson-2000",
      claim:
        "Revisão sobre etiopatogenia e tratamento da tendinose crônica do Aquiles, incluindo a ausência de inflamação confirmada por microdiálise in situ.",
      takeaway:
        "Consolida o conceito de TENDINOSE (degeneração sem células inflamatórias) e aponta o excêntrico de carga pesada como possível redutor da necessidade de cirurgia na doença de médio-porção — fundamenta a nomenclatura e a lógica terapêutica.",
      level: "V",
      studyType: "Revisão narrativa",
      era: "classico",
      citation: {
        authors: "Alfredson H, Lorentzon R",
        title:
          "Chronic Achilles tendinosis: recommendations for treatment and prevention",
        journal: "Sports Med",
        year: 2000,
        pmid: "10701715",
        doi: "10.2165/00007256-200029020-00005",
      },
    },
    {
      id: "rompe-2009",
      claim:
        "RCT (nível I) em 68 pacientes com tendinopatia de médio-porção recalcitrante: excêntrico isolado vs excêntrico + ESWT de baixa energia.",
      takeaway:
        "Aos 4 meses, o grupo combinado teve melhora superior do VISA-A (51→87 vs 50→73) e maior taxa de recuperação (82% vs 56%) — apoia a ESWT como adjuvante do excêntrico no refratário de médio-porção.",
      level: "I",
      studyType: "Ensaio clínico randomizado",
      era: "atual",
      citation: {
        authors: "Rompe JD, Furia J, Maffulli N",
        title:
          "Eccentric loading versus eccentric loading plus shock-wave treatment for midportion Achilles tendinopathy: a randomized controlled trial",
        journal: "Am J Sports Med",
        year: 2009,
        pmid: "19088057",
        doi: "10.1177/0363546508326983",
      },
    },
    {
      id: "rompe-2008-insercional",
      claim:
        "RCT (nível I) em 50 pacientes com tendinopatia INSERCIONAL crônica recalcitrante: excêntrico vs ESWT de baixa energia repetida.",
      takeaway:
        "Aos 4 meses a ESWT foi superior ao excêntrico (VISA-A 53→80 vs 53→63; recuperação 64% vs 28%), com resultados estáveis em 1 ano — mostra que na doença insercional o excêntrico clássico é inferior e a ESWT é preferível.",
      level: "I",
      studyType: "Ensaio clínico randomizado",
      era: "atual",
      citation: {
        authors: "Rompe JD, Furia J, Maffulli N",
        title:
          "Eccentric loading compared with shock wave treatment for chronic insertional Achilles tendinopathy. A randomized, controlled trial",
        journal: "J Bone Joint Surg Am",
        year: 2008,
        pmid: "18171957",
        doi: "10.2106/JBJS.F.01494",
      },
    },
    {
      id: "jonsson-2008",
      claim:
        "Estudo-piloto de novo protocolo excêntrico modificado (SEM carga em dorsiflexão) em 27 pacientes (34 tendões) com tendinopatia insercional crônica.",
      takeaway:
        "67% dos pacientes ficaram satisfeitos e retornaram à atividade, com queda significativa da VAS (69,9→21) — justifica o excêntrico modificado sem dorsiflexão como opção na doença insercional, distinta do protocolo clássico de Alfredson.",
      level: "IV",
      studyType: "Série de casos / estudo-piloto",
      era: "atual",
      citation: {
        authors: "Jonsson P, Alfredson H, Sunding K, Fahlström M, Cook J",
        title:
          "New regimen for eccentric calf-muscle training in patients with chronic insertional Achilles tendinopathy: results of a pilot study",
        journal: "Br J Sports Med",
        year: 2008,
        pmid: "18184750",
        doi: "10.1136/bjsm.2007.039545",
      },
    },
  ],

  pearls: [
    "É tendinoSE, não tendiniTE: degeneração colágena com neovasos e SEM inflamação — muda a lógica do tratamento.",
    "Separe médio-porção de insercional na primeira consulta: define o protocolo de exercício e o prognóstico.",
    "O excêntrico de Alfredson (3×15, 2×/dia, 7 d/sem, 12 semanas) é a primeira linha na médio-porção — exija aderência.",
    "Na insercional, NÃO desça o calcanhar abaixo do degrau: evite a dorsiflexão que comprime a entese contra o calcâneo.",
    "ESWT é o adjuvante de escolha no refratário; na insercional é superior ao excêntrico isolado.",
    "Use o VISA-A para quantificar dor/função e acompanhar a resposta ao tratamento.",
    "Evite corticoide intratendíneo — não trata a degeneração e aumenta o risco de ruptura.",
  ],

  pitfalls: [
    "Chamar de 'tendinite' e prescrever anti-inflamatório/corticoide como tratamento principal.",
    "Aplicar o protocolo excêntrico clássico (com dorsiflexão) na doença insercional e obter resultado ruim.",
    "Julgar falha do conservador antes de completar 12 semanas de excêntrico bem conduzido.",
    "Infiltrar corticoide no tendão degenerado, arriscando ruptura.",
    "Na cirurgia insercional, ressecar Haglund de forma insuficiente (dor residual) ou excessiva (avulsão).",
    "Incisões e descolamentos amplos na pele posterior hipovascular, gerando necrose e deiscência.",
  ],

  figures: [
    {
      id: "tendinopatia-aquiles:anatomia",
      caption:
        "Anatomia sagital do tendão calcâneo: gastrocnêmio e sóleo, zona hipovascular de médio-porção (2–6 cm), inserção calcânea, coxim de Kager e bursa retrocalcânea. Clique para alternar a zona doente.",
      alt:
        "Perfil sagital do tendão de Aquiles mostrando gastrocnêmio, sóleo, zona de médio-porção destacada e inserção no calcâneo.",
      variant: "medio-porcao",
    },
    {
      id: "tendinopatia-aquiles:localizacao",
      caption:
        "Classificação topográfica: médio-porção (espessamento fusiforme 2–6 cm com neovasos) vs insercional (entesófito, deformidade de Haglund e bursite retrocalcânea). Clique para alternar.",
      alt:
        "Duas variantes da tendinopatia do Aquiles: médio-porção fusiforme e insercional com Haglund e entesófito.",
      variant: "medio-porcao",
    },
    {
      id: "tendinopatia-aquiles:patologia",
      caption:
        "Histopatologia esquemática: tendão normal (colágeno paralelo) vs tendinose (fibras onduladas/desorganizadas e neovascularização) — degeneração sem células inflamatórias.",
      alt:
        "Comparação de tendão normal com fibras paralelas e tendinose com fibras desorganizadas e neovasos.",
    },
    {
      id: "tendinopatia-aquiles:alfredson",
      caption:
        "Protocolo excêntrico de Alfredson: descida controlada do calcanhar na borda do degrau, com joelho estendido (gastrocnêmio) e fletido (sóleo). 3×15, 2×/dia, 7 dias/semana, 12 semanas.",
      alt:
        "Exercício excêntrico de descida do calcanhar em um degrau, ilustrando a fase de descida do tendão de Aquiles.",
      variant: "joelho-estendido",
    },
    {
      id: "tendinopatia-aquiles:eswt",
      caption:
        "Terapia por ondas de choque extracorpóreas (ESWT): aplicador direcionando frentes de onda de baixa energia ao ponto doloroso do tendão calcâneo.",
      alt:
        "Aplicador de ondas de choque focalizando o tendão de Aquiles doente no ponto de dor.",
    },
    {
      id: "tendinopatia-aquiles:via-acesso",
      caption:
        "Via posteromedial ao tendão calcâneo e estruturas em risco: nervo sural (posterolateral, a evitar) e feixe tibial posterior (medial profundo).",
      alt:
        "Esquema da incisão posteromedial ao tendão de Aquiles com nervo sural e feixe tibial posterior.",
    },
    {
      id: "tendinopatia-aquiles:step-1",
      caption:
        "Passo 1: débridamento do tecido degenerado e ressecção da proeminência de Haglund/entesófito com osteotomia posterossuperior do calcâneo.",
      alt:
        "Débridamento do tendão degenerado e osteotomia da deformidade de Haglund no calcâneo.",
    },
    {
      id: "tendinopatia-aquiles:step-2",
      caption:
        "Passo 2: reinserção do tendão à tuberosidade com âncoras em dupla fileira e, quando indicada, transferência do flexor longo do hálux (FHL) para reforço.",
      alt:
        "Reinserção do tendão de Aquiles com âncoras double-row e transferência do flexor longo do hálux ao calcâneo.",
    },
  ],

  meta: {
    lastReviewed: "2026-07-13",
    sources: [
      "Alfredson H, Pietilä T, Jonsson P, Lorentzon R. Am J Sports Med. 1998 (PMID 9617396, DOI 10.1177/03635465980260030301)",
      "Alfredson H, Lorentzon R. Sports Med. 2000 (PMID 10701715, DOI 10.2165/00007256-200029020-00005)",
      "Rompe JD, Furia J, Maffulli N. Am J Sports Med. 2009 (PMID 19088057, DOI 10.1177/0363546508326983)",
      "Rompe JD, Furia J, Maffulli N. J Bone Joint Surg Am. 2008 (PMID 18171957, DOI 10.2106/JBJS.F.01494)",
      "Jonsson P, Alfredson H, Sunding K, Fahlström M, Cook J. Br J Sports Med. 2008 (PMID 18184750, DOI 10.1136/bjsm.2007.039545)",
    ],
    attribution:
      "Evidências verificadas via PubMed. Cite o PubMed e os DOIs correspondentes ao reutilizar as referências.",
  },
});
