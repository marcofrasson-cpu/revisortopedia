import { defineTopic } from "../../types/topic";

/* ============================================================================
   Fratura do planalto tibial — Revisortopedia
   Evidências verificadas no PubMed (DOIs reais). Atribuição em meta.attribution.
   ========================================================================== */

export const topic = defineTopic({
  id: "fratura-planalto-tibial",
  slug: "fratura-planalto-tibial",
  regionId: "membro-inferior",
  bone: "Joelho",
  injury: "Fratura articular proximal",
  title: "Fratura do planalto tibial",
  subtitle:
    "Fratura articular da tíbia proximal — do cisalhamento lateral de baixa energia à fratura-luxação bicondilar de alta energia",
  laterality: null,
  status: "complete",

  overview:
    "As fraturas do planalto tibial são lesões articulares da extremidade proximal da tíbia que comprometem a superfície de carga do joelho. Resultam de uma força axial combinada a estresse em varo ou valgo: o côndilo femoral impacta o planalto e produz cisalhamento (split), afundamento (depression) ou a combinação de ambos. O espectro vai de traços laterais de baixa energia (mais comuns, tipicamente por trauma em valgo no idoso ou em queda) até fraturas-luxação bicondilares de alta energia com grave lesão de partes moles, síndrome compartimental e risco vascular. O objetivo do tratamento é restaurar o eixo mecânico, a congruência articular e a estabilidade suficiente para mobilização precoce, respeitando o envelope de partes moles — cuja avaliação, mais do que o padrão ósseo isolado, dita o momento e a via da fixação. A tomografia computadorizada é obrigatória para o planejamento, revelando fragmentos posteromediais e posterolaterais que a radiografia subestima.",

  keyFacts: [
    { label: "Mecanismo", value: "Carga axial + varo/valgo (cisalhamento e/ou afundamento)" },
    { label: "Imagem-chave", value: "TC com reconstrução (obrigatória p/ planejamento)" },
    { label: "Classificação", value: "Schatzker I–VI; conceito das três colunas (Luo)" },
    { label: "Coluna traiçoeira", value: "Fragmento posteromedial — instável ao carregamento" },
    { label: "Emergências", value: "Síndrome compartimental; lesão poplítea (Schatzker IV/luxação)" },
    { label: "Alta energia", value: "Fixador em ponte estagiado até melhora das partes moles" },
    { label: "Meta articular", value: "Degrau < 2 mm, eixo restaurado, mobilização precoce" },
  ],

  anatomy: {
    text:
      "O planalto tibial é a superfície articular proximal da tíbia, composta por dois compartimentos: o platô lateral, convexo e situado mais proximalmente, e o platô medial, côncavo, maior e subcondralmente mais denso — por isso o platô lateral fratura com mais frequência sob carga em valgo. Entre eles projeta-se a eminência intercondilar (espinhas tibiais), onde se inserem os ligamentos cruzados e os cornos meniscais. Anterolateralmente localiza-se o tubérculo de Gerdy, inserção do trato iliotibial e referência para a via anterolateral. Os meniscos recobrem e aprofundam a congruência dos platôs; a artrotomia submeniscal expõe a superfície sem lesá-los. O conceito das três colunas (Luo) divide a tíbia proximal em coluna lateral, medial e posterior a partir da eminência no corte axial — sistematizando o reconhecimento e a abordagem dos fragmentos posteriores, mal representados na radiografia. Posteriormente cruzam a artéria e a veia poplíteas e o nervo tibial; a bifurcação da poplítea junto ao arco do sóleo é vulnerável em fraturas-luxação e nas de alta energia. A inserção do tendão patelar na tuberosidade anterior e o compartimento anterior da perna são referências para a descompressão e a via de acesso.",
    figureIds: [
      "fratura-planalto-tibial:anatomia",
      "fratura-planalto-tibial:tres-colunas",
    ],
  },

  classification: [
    {
      id: "schatzker",
      name: "Classificação de Schatzker",
      basis:
        "Padrão radiográfico (AP) por localização e mecanismo — cisalhamento vs. afundamento, lateral vs. medial, uni vs. bicondilar. Tipos I–III de menor energia; IV–VI de maior energia.",
      note:
        "Não captura bem os fragmentos posteriores; deve ser complementada pela TC e pelo conceito das três colunas.",
      types: [
        {
          code: "I",
          label: "Cisalhamento lateral puro",
          description:
            "Split (cunha) do platô lateral sem afundamento. Típico de osso jovem, denso. Se sem desvio pode ser tratado sem cirurgia; desviado exige parafusos/placa de suporte.",
          figureId: "fratura-planalto-tibial:schatzker",
          figureVariant: "I",
        },
        {
          code: "II",
          label: "Cisalhamento + afundamento lateral",
          description:
            "O tipo mais comum. Cunha lateral associada a afundamento da superfície articular. Requer elevação do afundamento, enxerto de suporte e placa lateral.",
          figureId: "fratura-planalto-tibial:schatzker",
          figureVariant: "II",
        },
        {
          code: "III",
          label: "Afundamento central puro",
          description:
            "Depressão isolada da superfície lateral sem cisalhamento cortical (parede lateral íntegra). Mais frequente em osso osteoporótico; avaliar estabilidade sob carga.",
          figureId: "fratura-planalto-tibial:schatzker",
          figureVariant: "III",
        },
        {
          code: "IV",
          label: "Platô medial (fratura-luxação)",
          description:
            "Fratura do platô medial, isolada ou como fratura-luxação. Alta energia relativa; alerta para lesão neurovascular (poplítea/tibial) e lesão ligamentar. Exige exame vascular cuidadoso.",
          figureId: "fratura-planalto-tibial:schatzker",
          figureVariant: "IV",
        },
        {
          code: "V",
          label: "Bicondilar",
          description:
            "Envolvimento dos dois platôs (Y/V invertido) com a metáfise em continuidade com a diáfise. Alta energia; frequente lesão de partes moles.",
          figureId: "fratura-planalto-tibial:schatzker",
          figureVariant: "V",
        },
        {
          code: "VI",
          label: "Bicondilar com dissociação metáfise-diáfise",
          description:
            "Fratura bicondilar associada à separação da metáfise da diáfise. Máxima energia; alto risco de síndrome compartimental, lesão de partes moles e necessidade de fixação estagiada.",
          figureId: "fratura-planalto-tibial:schatzker",
          figureVariant: "VI",
        },
      ],
    },
    {
      id: "tres-colunas",
      name: "Conceito das três colunas (Luo)",
      basis:
        "Baseado na TC: divide a tíbia proximal em coluna lateral, medial e posterior a partir da eminência intercondilar no corte axial. Uma coluna é acometida quando há fragmento articular separado nela. Orienta o número/posicionamento de vias e placas e melhora a reprodutibilidade interobservador frente ao Schatzker isolado.",
      note:
        "A coluna posterior (sobretudo o fragmento posteromedial) exige via e placa dedicadas; parafusos anteroposteriores isolados não a estabilizam ao carregamento.",
      types: [
        {
          code: "L",
          label: "Coluna lateral",
          description:
            "Fragmentos anterolaterais e do tubérculo de Gerdy. Abordados pela via anterolateral com placa de suporte lateral.",
          figureId: "fratura-planalto-tibial:tres-colunas",
          figureVariant: "lateral",
        },
        {
          code: "M",
          label: "Coluna medial",
          description:
            "Fragmento do platô medial (Schatzker IV). Requer suporte medial; alerta neurovascular na fratura-luxação.",
          figureId: "fratura-planalto-tibial:tres-colunas",
          figureVariant: "medial",
        },
        {
          code: "P",
          label: "Coluna posterior",
          description:
            "Fragmentos posteromedial e posterolateral. Exigem via posteromedial (Lobenhoffer) e placa antideslizante para neutralizar a força de cisalhamento posterior.",
          figureId: "fratura-planalto-tibial:tres-colunas",
          figureVariant: "posterior",
        },
      ],
    },
  ],

  indications: {
    operative: [
      "Degrau/incongruência articular > 2 mm (especialmente na coluna de carga)",
      "Alargamento condilar > 5 mm ou instabilidade em varo/valgo em extensão",
      "Desvio axial significativo (varo/valgo mecânico)",
      "Fraturas-luxação (Schatzker IV) e padrões bicondilares (V/VI)",
      "Fragmento posteromedial deslocado (instável ao carregamento)",
      "Fratura exposta, lesão vascular ou síndrome compartimental associadas",
    ],
    nonOperative: [
      "Fratura sem desvio ou minimamente desviada com articulação congruente",
      "Estabilidade em varo/valgo preservada em quase extensão",
      "Baixa demanda funcional / alto risco cirúrgico com padrão estável",
      "Manejo com órtese articulada, restrição de carga e mobilização precoce guiada",
    ],
    decisionNotes:
      "A decisão integra o padrão ósseo (TC), o estado das partes moles e a demanda do paciente. Depressão e degrau articular na zona de carga toleram menos desvio do que a periferia. Em alta energia, o envelope de partes moles governa o tempo: fixação interna precoce sobre pele comprometida eleva drasticamente a taxa de infecção — daí a estratégia estagiada com fixador em ponte. Síndrome compartimental e comprometimento vascular são emergências que precedem qualquer osteossíntese definitiva.",
  },

  approaches: [
    {
      id: "anterolateral",
      name: "Via anterolateral",
      indication:
        "Coluna lateral — Schatzker I–III e componente lateral das bicondilares. Permite elevação do afundamento e placa de suporte lateral.",
      interval:
        "Incisão curva sobre o tubérculo de Gerdy estendida distalmente; elevação do compartimento anterior (tibial anterior) subperiosteal e artrotomia submeniscal para inspeção da superfície.",
      atRisk: [
        "Menisco lateral (proteger com sutura de reparo submeniscal)",
        "Nervo fibular comum (mais posterior — evitar retração excessiva)",
        "Ramos da artéria genicular lateral inferior",
      ],
      figureId: "fratura-planalto-tibial:acesso-anterolateral",
    },
    {
      id: "posteromedial",
      name: "Via posteromedial (Lobenhoffer)",
      indication:
        "Fragmento posteromedial / coluna posterior — permite placa antideslizante direta. Usada isolada ou combinada (posição flutuante) nas bicondilares.",
      interval:
        "Incisão longitudinal posteromedial entre a pata de ganso/medial gastrocnêmio; plano entre o gastrocnêmio medial (afastado posteriormente, protegendo o feixe poplíteo) e o poplíteo/semimembranáceo, expondo a cortical posteromedial.",
      atRisk: [
        "Feixe neurovascular poplíteo (protegido pela cabeça medial do gastrocnêmio)",
        "Veia safena magna e nervo safeno",
        "Inserção do semimembranáceo",
      ],
      figureId: "fratura-planalto-tibial:acesso-posteromedial",
    },
  ],

  technique: [
    {
      n: 1,
      title: "Estabilização temporária estagiada (alta energia)",
      detail:
        "Nas Schatzker V/VI e fraturas-luxação com partes moles comprometidas, aplicar fixador externo em ponte trans-articular: pinos de Schanz no fêmur distal e na diáfise tibial, restaurando comprimento e eixo por ligamentotaxia. Aguardar a recuperação do envelope cutâneo (enrugamento da pele, resolução de flictenas) antes da fixação definitiva.",
      figureId: "fratura-planalto-tibial:fixador-ponte",
      tips: [
        "Posicionar pinos fora da futura zona de placas/incisões",
        "Ligamentotaxia reduz indiretamente e facilita o planejamento em TC",
      ],
      pitfalls: [
        "Pinos na zona de futura fixação aumentam risco de infecção do trajeto",
        "Não confiar apenas em ligamentotaxia para o afundamento articular — não corrige impactação",
      ],
    },
    {
      n: 2,
      title: "Redução do cisalhamento e exposição articular",
      detail:
        "Pela via adequada à coluna, reduzir primeiro o componente de split para reconstituir a parede (contrafolha) contra a qual o afundamento será elevado. Artrotomia submeniscal permite visão direta da superfície; a redução articular direta é o alvo — degrau residual correlaciona-se com pior resultado.",
      figureId: "fratura-planalto-tibial:acesso-anterolateral",
      tips: [
        "Reduzir a coluna posteromedial primeiro nas bicondilares: serve de pilar estável",
        "Fluoroscopia em incidências oblíquas confirma a periferia",
      ],
      pitfalls: [
        "Elevar o afundamento antes de reduzir a parede lateral impede recriar o molde",
        "Subestimar fragmento posterior visível só na TC",
      ],
    },
    {
      n: 3,
      title: "Elevação do afundamento e enxertia subcondral",
      detail:
        "Abrir uma janela cortical metafisária e, com impactor, elevar o fragmento deprimido em bloco de baixo para cima até restaurar a superfície articular sob visão direta/fluoroscopia. Preencher o defeito subcondral metafisário resultante com enxerto ósseo ou substituto (autólogo, alógeno ou cimento/fosfato de cálcio) para sustentar a articulação elevada.",
      figureId: "fratura-planalto-tibial:step-elevacao",
      figureVariant: "3",
      tips: [
        "Elevar em bloco, não fragmento a fragmento, preserva a cartilagem",
        "Substitutos de fosfato de cálcio oferecem suporte imediato à compressão",
      ],
      pitfalls: [
        "Enxerto insuficiente permite re-afundamento sob carga",
        "Sobre-elevação cria incongruência e sobrecarga focal",
      ],
    },
    {
      n: 4,
      title: "Fixação com placa de suporte e parafusos subcondrais (raft)",
      detail:
        "Aplicar placa lateral de suporte (anatômica, frequentemente bloqueada) e uma fileira de parafusos subcondrais periarticulares (raft) logo abaixo da superfície reconstruída para sustentar a cartilagem elevada. Nas bicondilares, adicionar suporte medial/posteromedial (placa antideslizante) — a fixação da coluna posteromedial isolada com parafusos AP é biomecanicamente insuficiente.",
      figureId: "fratura-planalto-tibial:step-placa",
      tips: [
        "Parafusos subcondrais logo abaixo do osso subcondral maximizam o suporte",
        "Placas bloqueadas ajudam em osso osteoporótico e cominução metafisária",
      ],
      pitfalls: [
        "Confiar em placa lateral única em padrão bicondilar deixa a coluna medial instável em varo",
        "Parafusos longos intra-articulares — checar em múltiplas incidências",
      ],
    },
    {
      n: 5,
      title: "Suporte da coluna posterior e checagem final",
      detail:
        "Quando há fragmento posteromedial/posterolateral, complementar com placa antideslizante pela via posteromedial para neutralizar o cisalhamento posterior. Confirmar redução articular, eixo mecânico, ausência de parafuso intra-articular e estabilidade sob estresse em varo/valgo. Fechamento por planos sem tensão; considerar não fechar sob tensão em partes moles precárias.",
      figureId: "fratura-planalto-tibial:acesso-posteromedial",
      tips: [
        "Testar estabilidade em flexão-extensão antes de fechar",
        "Documentar pulsos e compartimentos no pós-operatório imediato",
      ],
      pitfalls: [
        "Ignorar a coluna posterior leva à perda de redução em flexão/carga",
        "Fechamento sob tensão sobre alta energia predispõe à deiscência e infecção",
      ],
    },
  ],

  postop: {
    immobilization:
      "Órtese articulada de joelho; mobilização passiva/ativa-assistida precoce assim que a fixação e as partes moles permitirem, buscando arco de movimento e evitando rigidez.",
    weightBearing:
      "Restrição de carga (toque ao solo) por 8–12 semanas na maioria das fraturas articulares, com progressão guiada por consolidação radiográfica; padrões de alta energia/cominuídos tendem ao limite superior do intervalo.",
    rehab: [
      {
        window: "0–2 semanas",
        weightBearing: "Sem carga / toque ao solo",
        focus:
          "Controle de edema e ferida, mobilização precoce do joelho, ativação do quadríceps, prevenção de TVP.",
      },
      {
        window: "2–6 semanas",
        weightBearing: "Sem carga (toque ao solo)",
        focus:
          "Ganho progressivo de arco de movimento (meta próxima da extensão completa e ≥ 90° de flexão), fortalecimento isométrico.",
      },
      {
        window: "6–12 semanas",
        weightBearing: "Progressão parcial conforme consolidação",
        focus:
          "Carga progressiva guiada por radiografia, fortalecimento em cadeia fechada, propriocepção.",
      },
      {
        window: "> 12 semanas",
        weightBearing: "Carga total conforme tolerância",
        focus:
          "Retorno funcional, marcha sem auxílio, fortalecimento avançado e retomada de atividades.",
      },
    ],
    followup:
      "Seguimento clínico-radiográfico seriado (2, 6, 12 semanas e após) para monitorar consolidação, alinhamento, manutenção da redução articular e sinais precoces de artrose pós-traumática. Vigiar rigidez, perda de redução e infecção.",
  },

  complications: [
    {
      name: "Síndrome compartimental",
      detail:
        "Emergência sobretudo nas fraturas de alta energia (Schatzker IV–VI). Exige fasciotomia imediata dos quatro compartimentos da perna.",
      prevention:
        "Alto índice de suspeita, monitorização clínica seriada e medida de pressão quando indicado; não retardar a descompressão.",
    },
    {
      name: "Infecção / problema de ferida",
      detail:
        "Deiscência e infecção profunda são as complicações mais temidas das bicondilares. Fatores de risco independentes incluem trauma de alta energia, síndrome compartimental associada e uso de duas ou mais placas na cirurgia definitiva.",
      prevention:
        "Estratégia estagiada respeitando o envelope de partes moles, incisões bem espaçadas, fechamento sem tensão, tempo cirúrgico reduzido.",
    },
    {
      name: "Perda de redução / re-afundamento",
      detail:
        "Colapso da superfície articular elevada, especialmente com suporte subcondral insuficiente ou carga precoce; frequente em osso osteoporótico.",
      prevention:
        "Enxertia subcondral adequada, parafusos raft, restrição de carga apropriada.",
    },
    {
      name: "Artrose pós-traumática",
      detail:
        "Consequência tardia da lesão condral inicial e de redução articular imperfeita; degrau residual e desvio axial aceleram a degeneração.",
      prevention:
        "Redução articular anatômica (degrau < 2 mm) e restauração do eixo mecânico.",
    },
    {
      name: "Rigidez do joelho",
      detail:
        "Perda de arco de movimento (flexão < 90°) associada à imobilização prolongada e à fixação estagiada / trauma extenso.",
      prevention:
        "Fixação estável que permita mobilização precoce, reabilitação dirigida.",
    },
    {
      name: "Lesão neurovascular",
      detail:
        "Comprometimento da artéria poplítea/nervo tibial nas fraturas-luxação (Schatzker IV) e de alta energia; lesão do fibular comum menos frequente.",
      prevention:
        "Exame vascular e neurológico documentado, índice tornozelo-braquial/angio-TC quando suspeita, redução urgente da luxação.",
    },
  ],

  evidence: [
    {
      id: "egol-staged-2005",
      claim:
        "Nas fraturas de alta energia da tíbia proximal, um protocolo estagiado com fixador em ponte temporário seguido de fixação definitiva tardia associa-se a baixa taxa de infecção profunda (5%).",
      takeaway:
        "Respeitar as partes moles com fixação estagiada reduz complicações de ferida em Schatzker V/VI.",
      level: "III",
      studyType: "Coorte prospectiva (protocolo padronizado)",
      era: "classico",
      citation: {
        authors: "Egol KA, Tejwani NC, Capla EL, Wolinsky PL, Koval KJ",
        title:
          "Staged management of high-energy proximal tibia fractures (OTA types 41): the results of a prospective, standardized protocol",
        journal: "Journal of Orthopaedic Trauma",
        year: 2005,
        pmid: "16056075",
        doi: "10.1097/01.bot.0000171881.11205.80",
      },
    },
    {
      id: "luo-three-column-2010",
      claim:
        "A fixação por 'três colunas' guiada por TC, com via posterior combinada à anterolateral, obteve redução satisfatória e bons escores funcionais nas fraturas bicondilares complexas (Schatzker V/VI), sem re-afundamento secundário.",
      takeaway:
        "Fragmentos da coluna posterior exigem via e placa dedicadas — o conceito das três colunas orienta a abordagem.",
      level: "III",
      studyType: "Coorte prospectiva",
      era: "classico",
      citation: {
        authors: "Luo CF, Sun H, Zhang B, Zeng BF",
        title: "Three-column fixation for complex tibial plateau fractures",
        journal: "Journal of Orthopaedic Trauma",
        year: 2010,
        pmid: "20881634",
        doi: "10.1097/BOT.0b013e3181d436f3",
      },
    },
    {
      id: "zhu-three-column-reliability-2012",
      claim:
        "A classificação das três colunas baseada em TC classificou todas as fraturas (incluindo 14 não classificáveis pelo Schatzker) e mostrou maior concordância interobservador (κ 0,77) do que o Schatzker por radiografia (κ 0,57).",
      takeaway:
        "A TC é indispensável; o sistema das três colunas complementa o Schatzker, sobretudo nos padrões posteriores.",
      level: "III",
      studyType: "Estudo diagnóstico de reprodutibilidade",
      era: "atual",
      citation: {
        authors: "Zhu Y, Yang G, Luo CF, Smith WR, Hu CF, Gao H, Zhong B, Zeng BF",
        title:
          "Computed tomography-based Three-Column Classification in tibial plateau fractures: introduction of its utility and assessment of its reproducibility",
        journal: "Journal of Trauma and Acute Care Surgery",
        year: 2012,
        pmid: "22929503",
        doi: "10.1097/TA.0b013e31825c17e7",
      },
    },
    {
      id: "ying-windowing-2022",
      claim:
        "Em Schatzker II, a técnica de 'janela' cortical proporcionou melhor qualidade de redução articular (6,4% vs 18,8% de afundamento residual à TC) e menos artrose grave do que a técnica de 'livro aberto'.",
      takeaway:
        "A técnica de elevação por janela metafisária tende a reduzir melhor o afundamento lateral do que a abertura em livro.",
      level: "II",
      studyType: "Estudo comparativo prospectivo",
      era: "atual",
      citation: {
        authors: "Ying J, Yu T, Liu J, Huang D, Yan H, Zhuang Y",
        title:
          "Clinical Comparison of the \"Windowing\" Technique and the \"Open Book\" Technique in Schatzker Type II Tibial Plateau Fracture",
        journal: "Orthopaedic Surgery",
        year: 2022,
        pmid: "36056570",
        doi: "10.1111/os.13450",
      },
    },
    {
      id: "olivieri-infection-2024",
      claim:
        "Em 314 osteossínteses de platô tibial, fraturas de alta energia (OR 5,04), síndrome compartimental associada (OR 4,53) e uso de duas ou mais placas (OR 5,04) foram fatores de risco independentes para infecção.",
      takeaway:
        "A energia da lesão, a síndrome compartimental e a complexidade da fixação predizem infecção — reforçando o manejo cuidadoso das partes moles.",
      level: "III",
      studyType: "Estudo caso-controle",
      era: "atual",
      citation: {
        authors: "Olivieri R, Koch M, Laso J, Franulic N, Zanetta H",
        title:
          "Predictive factors for infection after osteosynthesis of tibial plateau fractures: a retrospective study of 314 patients",
        journal: "European Journal of Orthopaedic Surgery & Traumatology",
        year: 2024,
        pmid: "38427052",
        doi: "10.1007/s00590-024-03856-3",
      },
    },
  ],

  pearls: [
    "TC com reconstrução em toda fratura do planalto — a radiografia subestima os fragmentos posteriores.",
    "O estado das partes moles, e não só o padrão ósseo, dita o tempo e a via da fixação.",
    "Reduza a coluna posteromedial primeiro nas bicondilares: ela é o pilar estável do reconstruído.",
    "Eleve o afundamento em bloco e sustente com enxerto subcondral + parafusos raft.",
    "Fixação estável = mobilização precoce = menos rigidez.",
  ],

  pitfalls: [
    "Fixar internamente sobre pele comprometida em alta energia — infecção e deiscência.",
    "Tratar o fragmento posteromedial com parafusos AP isolados (biomecanicamente insuficiente).",
    "Confiar em placa lateral única em padrão bicondilar — colapso em varo da coluna medial.",
    "Não reconhecer/retardar a síndrome compartimental ou a lesão poplítea (Schatzker IV).",
    "Elevar o afundamento antes de reduzir a parede de cisalhamento, perdendo o molde articular.",
  ],

  figures: [
    {
      id: "fratura-planalto-tibial:anatomia",
      caption:
        "Anatomia da tíbia proximal em AP: platô lateral convexo, platô medial côncavo, eminência intercondilar e tubérculo de Gerdy.",
      alt: "Desenho esquemático da tíbia proximal mostrando os platôs lateral e medial, a eminência intercondilar e o tubérculo de Gerdy.",
    },
    {
      id: "fratura-planalto-tibial:schatzker",
      caption:
        "Classificação de Schatzker I–VI: padrões de cisalhamento e afundamento do planalto tibial (selecione o tipo).",
      alt: "Painel esquemático dos seis tipos de Schatzker da fratura do planalto tibial.",
      variant: "II",
    },
    {
      id: "fratura-planalto-tibial:tres-colunas",
      caption:
        "Conceito das três colunas (Luo) em corte axial: colunas lateral, medial e posterior a partir da eminência intercondilar.",
      alt: "Corte axial esquemático da tíbia proximal dividido em coluna lateral, medial e posterior.",
    },
    {
      id: "fratura-planalto-tibial:acesso-anterolateral",
      caption:
        "Via anterolateral: incisão sobre o tubérculo de Gerdy e artrotomia submeniscal para acesso à coluna lateral.",
      alt: "Esquema da via de acesso anterolateral do joelho com incisão sobre Gerdy e artrotomia submeniscal.",
    },
    {
      id: "fratura-planalto-tibial:acesso-posteromedial",
      caption:
        "Via posteromedial (Lobenhoffer): exposição do fragmento posteromedial e placa antideslizante.",
      alt: "Esquema da via posteromedial mostrando o fragmento posteromedial e a placa antideslizante.",
    },
    {
      id: "fratura-planalto-tibial:step-elevacao",
      caption:
        "Elevação do afundamento articular por janela metafisária e enxertia subcondral de suporte.",
      alt: "Corte coronal esquemático mostrando janela cortical, elevação do fragmento deprimido e enxerto subcondral.",
    },
    {
      id: "fratura-planalto-tibial:step-placa",
      caption:
        "Placa lateral de suporte com fileira de parafusos subcondrais periarticulares (raft) sustentando a superfície reduzida.",
      alt: "Esquema de placa lateral de suporte com parafusos subcondrais raft no platô tibial.",
    },
    {
      id: "fratura-planalto-tibial:fixador-ponte",
      caption:
        "Fixador externo em ponte trans-articular temporário no manejo estagiado das fraturas de alta energia.",
      alt: "Esquema de fixador externo em ponte com pinos no fêmur e na tíbia atravessando o joelho.",
    },
  ],

  meta: {
    lastReviewed: "2026-07-13",
    sources: [
      "PubMed (evidências verificadas — DOIs reais)",
      "Schatzker J, McBroom R, Bruce D. The tibial plateau fracture (classificação original)",
      "Luo CF et al. Conceito das três colunas",
    ],
    attribution:
      "Evidências recuperadas e verificadas no PubMed; DOIs reais citados em evidence[].citation. Figuras são line-art esquemático original, sem material protegido por direitos autorais.",
  },
});
