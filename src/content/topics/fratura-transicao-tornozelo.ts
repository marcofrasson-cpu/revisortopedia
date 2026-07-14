import { defineTopic } from "../../types/topic";

export const topic = defineTopic({
  id: "op-tornozelo-crianca-fratura-transicao-tornozelo",
  slug: "fratura-transicao-tornozelo",
  regionId: "ortopedia-pediatrica",
  bone: "Tornozelo (criança)",
  injury: "Fratura de transição",
  title: "Fraturas de transição do tornozelo",
  subtitle:
    "Reconhecer os padrões de Tillaux juvenil e triplanar durante o fechamento fisário assimétrico, quantificar o desvio articular com TC e restaurar a congruência quando o desvio ultrapassa 2 mm.",
  laterality: null,
  status: "complete",
  overview:
    "As fraturas de transição ocorrem no adolescente entre aproximadamente 12 e 15 anos, quando a fise da tíbia distal se fecha de forma assimétrica — primeiro na região central, depois medial e por último anterolateral. Nessa janela, uma parte da fise já está fechada e a outra permanece aberta, de modo que a mesma força de rotação externa produz traços que atravessam epífise, fise e metáfise em combinações características. As duas apresentações-chave são a fratura de Tillaux juvenil, uma Salter-Harris III da epífise tibial anterolateral avulsionada pelo ligamento tibiofibular anteroinferior, e a fratura triplanar, que combina traços nos planos sagital (metáfise), axial (fise) e coronal (epífise) e se comporta como uma Salter-Harris IV.\n\nComo são fraturas articulares do adolescente próximo do fim do crescimento, o objetivo terapêutico é a congruência articular, não a correção espontânea — que praticamente não ocorre nesse osso e nessa idade. A radiografia simples subestima de forma consistente o desvio articular; por isso a tomografia computadorizada com reconstrução multiplanar é o exame que define a geometria, o número de fragmentos e o desvio articular real. O limiar prático é 2 mm: desvio articular igual ou superior a 2 mm indica redução anatômica e fixação, habitualmente com parafuso que poupa a fise; desvio menor pode ser tratado com imobilização, sempre com confirmação por imagem.",
  keyFacts: [
    { label: "Idade típica", value: "Adolescente, ~12-15 anos (fise em fechamento)" },
    { label: "Mecanismo", value: "Rotação externa do pé / supinação" },
    { label: "Tillaux", value: "Salter-Harris III da epífise anterolateral" },
    { label: "Triplanar", value: "Sagital + axial + coronal; comporta-se como SH-IV" },
    { label: "Imagem", value: "TC multiplanar para geometria e desvio articular" },
    { label: "Limiar cirúrgico", value: "Desvio articular ≥ 2 mm" },
  ],
  anatomy: {
    text:
      "A fise da tíbia distal contribui com cerca de 45% do crescimento do membro inferior e fecha em uma sequência previsível ao longo de aproximadamente 18 meses: começa na eminência central (Kump), progride medial e posteriormente e termina na porção anterolateral. Essa assimetria é a base de todo o conceito de fratura de transição. Enquanto a fise anterolateral permanece aberta e o restante já se consolidou, a rotação externa transmite tensão pelo ligamento tibiofibular anteroinferior até a epífise anterolateral, criando o traço característico.\n\nNa fratura de Tillaux juvenil, o traço é vertical na epífise e depois horizontal ao longo da fise ainda aberta, gerando um fragmento anterolateral (Salter-Harris III). Na fratura triplanar, além do componente epifisário coronal soma-se um componente metafisário sagital posterior (fragmento de Thurston-Holland) conectado por um descolamento fisário axial; o resultado é uma lesão articular que, embora possa parecer simples na radiografia, envolve os três planos do espaço. A relação com a articulação do tornozelo e com a sindesmose torna a congruência do plafond o principal determinante do resultado.",
    figureIds: ["fratura-transicao-tornozelo:anatomia"],
  },
  classification: [
    {
      id: "espectro-transicao",
      name: "Espectro das fraturas de transição",
      basis: "Planos acometidos e número de fragmentos, definidos pela tomografia.",
      note:
        "Biplanares e triplanares formam um contínuo; a distinção prática está no número e na localização dos fragmentos e no desvio articular, mais do que no epônimo isolado.",
      types: [
        {
          code: "TILLAUX",
          label: "Tillaux juvenil (SH-III)",
          description:
            "Avulsão da epífise tibial anterolateral pelo ligamento tibiofibular anteroinferior; traço epifisário vertical que segue pela fise anterolateral ainda aberta.",
          figureId: "fratura-transicao-tornozelo:tillaux",
        },
        {
          code: "TRI-2",
          label: "Triplanar de dois fragmentos",
          description:
            "Combinação de traço metafisário sagital (Thurston-Holland) e epifisário coronal unidos por descolamento fisário; a epífise e a metáfise se separam como um único bloco.",
          figureId: "fratura-transicao-tornozelo:triplano",
          figureVariant: "2frag",
        },
        {
          code: "TRI-3",
          label: "Triplanar de três fragmentos",
          description:
            "Acrescenta um fragmento anterolateral epifisário separado (componente tipo Tillaux) ao padrão triplanar; costuma exigir avaliação e fixação de mais de um plano.",
          figureId: "fratura-transicao-tornozelo:triplano",
          figureVariant: "3frag",
        },
        {
          code: "TRI-MED",
          label: "Triplanar medial",
          description:
            "Variante rara com fragmento na região medial/maléolo medial; maior risco de barra fisária e de repercussão no plafond, exigindo redução anatômica.",
          figureId: "fratura-transicao-tornozelo:triplano",
          figureVariant: "2frag",
        },
      ],
    },
    {
      id: "salter-harris-planos",
      name: "Correlação com Salter-Harris por plano",
      basis: "Como cada plano de fratura se traduz em um padrão de Salter-Harris.",
      note:
        "Entender a correspondência ajuda a antecipar risco fisário e a planejar uma fixação que poupe a fise.",
      types: [
        {
          code: "EPIFISE",
          label: "Plano coronal — SH-III",
          description:
            "Traço vertical na epífise atravessando a superfície articular até a fise; é o componente compartilhado por Tillaux e triplanar.",
        },
        {
          code: "METAFISE",
          label: "Plano sagital — SH-II",
          description:
            "Traço metafisário posterior que destaca o fragmento de Thurston-Holland; exclusivo do padrão triplanar.",
        },
        {
          code: "COMPOSTA",
          label: "Composta — comporta-se como SH-IV",
          description:
            "A soma dos componentes epifisário e metafisário conectados pelo descolamento fisário cruza fise, epífise e metáfise, com comportamento articular de Salter-Harris IV.",
        },
      ],
    },
  ],
  indications: {
    operative: [
      "Desvio articular ≥ 2 mm confirmado na TC (diástase ou degrau do plafond).",
      "Falha em obter ou manter redução fechada congruente sob fluoroscopia/artrograma.",
      "Fragmento anterolateral rodado ou com interposição de periósteo impedindo a redução.",
      "Padrão triplanar com desvio nos componentes epifisário e/ou metafisário além do limiar.",
      "Incongruência residual do plafond após tentativa de redução, mesmo com desvio inicial limítrofe.",
    ],
    nonOperative: [
      "Desvio articular menor que 2 mm na TC, com congruência do plafond mantida.",
      "Fraturas essencialmente sem desvio ou reduzidas de forma estável e confirmada por imagem.",
      "Boa tolerância à imobilização e possibilidade de seguimento próximo com controle radiográfico.",
    ],
    decisionNotes:
      "A decisão gira em torno do desvio articular medido na TC, não do epônimo. O limiar amplamente adotado é 2 mm: acima disso indica-se redução anatômica e fixação; abaixo, imobilização com confirmação por imagem. Como a radiografia subestima o desvio, um desvio metafisário maior que 1 mm no perfil deve motivar TC antes de assumir tratamento conservador. Mesmo desvios limítrofes em uma fratura articular do adolescente merecem baixa tolerância à incongruência, pois não há correção espontânea significativa nessa idade.",
  },
  approaches: [
    {
      id: "reducao-fechada-percutanea",
      name: "Redução fechada e fixação percutânea com artrograma",
      indication:
        "Fratura redutível de forma congruente; permite fixação com parafuso canulado sem artrotomia.",
      interval:
        "Manobra de rotação interna do pé e pressão anteroposterior sobre o fragmento anterolateral; artrograma ou fluoroscopia confirmam a congruência antes da fixação percutânea.",
      atRisk: [
        "Congruência articular — degrau residual não visível sem artrograma/TC",
        "Fise — evitar transfixá-la com o parafuso",
      ],
      figureId: "fratura-transicao-tornozelo:reducao",
    },
    {
      id: "via-anterolateral",
      name: "Via anterolateral",
      indication:
        "Redução aberta do fragmento de Tillaux ou do componente epifisário anterolateral quando a redução fechada é insuficiente.",
      interval:
        "Incisão anterolateral sobre o fragmento; afastar e proteger o nervo fibular superficial, expor o traço epifisário e remover periósteo interposto para redução direta sob visão da superfície articular.",
      atRisk: [
        "Nervo fibular superficial no subcutâneo anterolateral",
        "Feixe tibial anterior, medialmente",
        "Cartilagem articular do plafond",
      ],
      figureId: "fratura-transicao-tornozelo:via-anterolateral",
    },
    {
      id: "via-posteromedial-posterolateral",
      name: "Via posteromedial ou posterolateral (fragmento metafisário)",
      indication:
        "Acesso ao fragmento de Thurston-Holland em fraturas triplanares quando é necessário reduzir e fixar o componente metafisário.",
      interval:
        "Abordagem posterior escolhida conforme a localização do fragmento; proteger o feixe neurovascular tibial posterior e os tendões flexores, permitindo compressão do fragmento metafisário acima da fise.",
      atRisk: [
        "Feixe neurovascular tibial posterior",
        "Tendões flexores e fibulares conforme o lado",
      ],
    },
  ],
  technique: [
    {
      n: 1,
      title: "Reconhecer o padrão e a faixa etária",
      detail:
        "Suspeitar de fratura de transição no adolescente próximo do fim do crescimento com trauma em rotação externa. Nas radiografias AP, perfil e mortise, procurar o traço epifisário anterolateral (Tillaux) e sinais de componente metafisário posterior (triplanar). Documentar o exame neurovascular e o estado das partes moles.",
      figureId: "fratura-transicao-tornozelo:anatomia",
      tips: [
        "A idade e o fechamento fisário parcial orientam o diagnóstico",
        "Alargamento da sindesmose no AP sugere fragmento de Tillaux",
      ],
      pitfalls: [
        "Interpretar como entorse uma fratura articular sutil",
        "Confiar apenas na radiografia para estimar o desvio",
      ],
    },
    {
      n: 2,
      title: "Quantificar o desvio articular com TC",
      detail:
        "Solicitar TC com reconstrução multiplanar para definir a geometria, o número de fragmentos e, sobretudo, o desvio articular (diástase e degrau do plafond). A radiografia subestima o desvio; um desvio metafisário maior que 1 mm no perfil deve motivar a TC antes de decidir por tratamento conservador.",
      figureId: "fratura-transicao-tornozelo:tc-desvio",
      tips: [
        "O maior gap articular costuma aparecer no corte axial",
        "Medir com reconstrução en face do plafond",
      ],
      pitfalls: [
        "Basear a conduta apenas no laudo, sem rever as imagens",
        "Ignorar degrau articular pequeno em fratura do adolescente",
      ],
    },
    {
      n: 3,
      title: "Tentar redução fechada quando indicada",
      detail:
        "Para desvios redutíveis, aplicar rotação interna do pé e pressão anteroposterior sobre o fragmento anterolateral. Confirmar a congruência com artrograma ou fluoroscopia. Degrau ou diástase residual de 2 mm ou mais indica conversão para redução aberta.",
      figureId: "fratura-transicao-tornozelo:reducao",
      figureVariant: "tillaux",
      tips: [
        "O artrograma revela incongruência não vista na fluoroscopia simples",
        "Interposição de periósteo é causa comum de redução imperfeita",
      ],
      pitfalls: [
        "Aceitar redução aparente sem confirmar a superfície articular",
        "Manipulações repetidas e vigorosas que lesam a cartilagem",
      ],
    },
    {
      n: 4,
      title: "Fixar a fratura de Tillaux poupando a fise",
      detail:
        "Reduzido o fragmento anterolateral, fixá-lo com parafuso epifisário orientado da região anterolateral para a posteromedial, paralelo à superfície articular e contido na epífise, evitando transfixar a fise. Em fragmentos grandes, um segundo parafuso melhora a estabilidade rotacional.",
      figureId: "fratura-transicao-tornozelo:fixacao",
      figureVariant: "tillaux",
      tips: [
        "Parafuso paralelo à articulação distribui melhor a compressão",
        "Como a fise fecha em breve, o parafuso epifisário é bem tolerado",
      ],
      pitfalls: [
        "Direcionar o parafuso através da fise remanescente sem necessidade",
        "Compressão excessiva fragmentando a epífise",
      ],
    },
    {
      n: 5,
      title: "Estabilizar os componentes da fratura triplanar",
      detail:
        "Na fratura triplanar, reduzir e fixar cada componente relevante: parafuso epifisário no plano coronal e, quando o fragmento metafisário (Thurston-Holland) está desviado, parafuso metafisário anteroposterior acima da fise. A sequência de redução parte do componente que restabelece a congruência do plafond.",
      figureId: "fratura-transicao-tornozelo:fixacao",
      figureVariant: "triplano",
      tips: [
        "Fixar a metáfise acima da fise reduz o risco de barra fisária",
        "Confirmar a redução articular antes de completar a compressão",
      ],
      pitfalls: [
        "Fixar apenas um plano e deixar desvio articular residual",
        "Atravessar a fise com implante quando resta crescimento",
      ],
    },
    {
      n: 6,
      title: "Redução aberta quando a congruência não é obtida",
      detail:
        "Se a redução fechada não restaura a superfície articular, realizar redução aberta pela via anterolateral (componente epifisário) ou por via posterior (fragmento metafisário), removendo periósteo interposto e reduzindo sob visão direta. Proteger o nervo fibular superficial na abordagem anterolateral.",
      figureId: "fratura-transicao-tornozelo:via-anterolateral",
      tips: [
        "A visão direta do plafond confirma a eliminação do degrau",
        "Periósteo interposto é a causa mais frequente de falha na redução fechada",
      ],
      pitfalls: [
        "Insistir em redução fechada diante de bloqueio por partes moles",
        "Lesar o nervo fibular superficial por dissecção descuidada",
      ],
    },
  ],
  postop: {
    immobilization:
      "Imobilização com bota gessada suropodálica após redução fechada ou fixação; a troca para gesso curto ocorre conforme a estabilidade e a cicatrização, geralmente ao redor de 3-4 semanas, totalizando cerca de 6 semanas de proteção.",
    weightBearing:
      "Sem apoio ou com apoio protegido inicialmente; progressão para carga plena após consolidação e conforme a estabilidade da fixação, tipicamente por volta de 6 semanas.",
    rehab: [
      {
        window: "0-3 semanas",
        weightBearing: "Sem carga",
        focus: "Proteção, controle de edema e dor; elevação e cuidado com as partes moles.",
      },
      {
        window: "3-6 semanas",
        weightBearing: "Carga protegida progressiva",
        focus: "Transição para gesso curto conforme cicatrização; início cauteloso de mobilidade quando permitido.",
      },
      {
        window: "6-12 semanas",
        weightBearing: "Carga plena progressiva",
        focus: "Recuperar amplitude de tornozelo, força e propriocepção após retirada da imobilização.",
      },
      {
        window: "3-6 meses",
        weightBearing: "Retorno esportivo progressivo",
        focus: "Gestos específicos e retorno ao esporte com congruência articular e função recuperadas.",
      },
    ],
    followup:
      "Seguimento clínico e radiográfico até a maturidade nos pacientes com crescimento remanescente relevante, vigiando barra fisária, dismetria e incongruência articular. Como a maioria já está próxima do fim do crescimento, a repercussão fisária costuma ser limitada, mas deve ser ativamente investigada.",
  },
  complications: [
    {
      name: "Incongruência articular residual",
      detail:
        "Degrau ou diástase do plafond não corrigido, com risco de dor e artrose pós-traumática precoce.",
      prevention: "Quantificar o desvio na TC e obter redução anatômica quando ≥ 2 mm.",
    },
    {
      name: "Fechamento fisário prematuro / barra fisária",
      detail:
        "Pode ocorrer em pacientes com crescimento remanescente, levando a dismetria ou deformidade angular.",
      prevention: "Fixação que poupa a fise e seguimento até a maturidade nos casos com crescimento restante.",
    },
    {
      name: "Falha de redução por interposição de periósteo",
      detail:
        "Periósteo ou tecido interposto no foco impede a redução fechada e mantém desvio articular.",
      prevention: "Baixo limiar para redução aberta quando a congruência não é obtida.",
    },
    {
      name: "Lesão do nervo fibular superficial",
      detail: "Risco na abordagem anterolateral por sua localização subcutânea.",
      prevention: "Dissecção cuidadosa e identificação do nervo na via anterolateral.",
    },
  ],
  evidence: [
    {
      id: "greenhill-2024-metafise-preditiva",
      claim:
        "Em fraturas triplanares do adolescente, a radiografia subestimou o desvio articular, e um desvio metafisário maior que 1 mm no perfil teve valor preditivo positivo de 94% para desvio articular de magnitude cirúrgica (≥ 2,5 mm) na TC.",
      takeaway:
        "Um desvio metafisário fácil de medir no perfil deve motivar TC antes de assumir tratamento conservador, porque a radiografia subestima o desvio articular real.",
      level: "III",
      studyType: "Estudo retrospectivo de coorte (nível III)",
      era: "atual",
      citation: {
        authors: "Greenhill DA, Mundluru SN, Gomez RW, Romero J, Riccio AI",
        title:
          "Metaphyseal Fracture Displacement is Predictive of Intra-articular Diastasis in Adolescent Triplane Ankle Fractures.",
        journal: "J Pediatr Orthop",
        year: 2024,
        pmid: "37779308",
        doi: "10.1097/BPO.0000000000002530",
      },
    },
    {
      id: "brown-2004-tc-multiplanar",
      claim:
        "Análise de 51 fraturas triplanares por TC com reconstrução multiplanar caracterizou os padrões mais frequentes e mostrou que idade maior e acometimento do plafond associaram-se à necessidade de cirurgia.",
      takeaway:
        "A TC multiplanar esclarece a geometria e o número de fragmentos e ajuda a identificar quem tende a precisar de tratamento cirúrgico.",
      level: "IV",
      studyType: "Série retrospectiva de imagem",
      era: "classico",
      citation: {
        authors: "Brown SD, Kasser JR, Zurakowski D, Jaramillo D",
        title: "Analysis of 51 tibial triplane fractures using CT with multiplanar reconstruction.",
        journal: "AJR Am J Roentgenol",
        year: 2004,
        pmid: "15505326",
        doi: "10.2214/ajr.183.5.1831489",
      },
    },
    {
      id: "venkatadass-2020-diretriz",
      claim:
        "Revisão de conduta nas fraturas do tornozelo pediátrico recomenda baixo limiar para TC nas fraturas articulares do adolescente e redução anatômica com estabilização de todas as fraturas intra-articulares com desvio maior que 2 mm.",
      takeaway:
        "A TC quantifica o desvio articular e o limiar de 2 mm orienta a indicação de redução anatômica e fixação.",
      level: "V",
      studyType: "Revisão narrativa com recomendações de conduta",
      era: "atual",
      citation: {
        authors: "Venkatadass K, Sangeet G, Prasad VD, Rajasekaran S",
        title: "Paediatric Ankle Fractures: Guidelines to Management.",
        journal: "Indian J Orthop",
        year: 2020,
        pmid: "33569097",
        doi: "10.1007/s43465-020-00270-9",
      },
    },
    {
      id: "lee-2024-reducao-3dct",
      claim:
        "Em 42 pacientes com fratura de Tillaux, a análise por TC tridimensional mostrou padrão comum de báscula em varo e rotação externa do fragmento e orientou uma técnica de redução fechada que obteve gap residual menor que 2 mm em todos os casos, exceto dois com periósteo interposto.",
      takeaway:
        "A TC tridimensional revela o padrão de desvio e viabiliza redução fechada percutânea eficaz, reservando a redução aberta para bloqueio por partes moles.",
      level: "IV",
      studyType: "Série de casos prospectiva com técnica cirúrgica",
      era: "atual",
      citation: {
        authors: "Lee JW, Cho JH, Song HK, Chung JY, Park YU, Kim TH",
        title:
          "Closed reduction and internal fixation for tillaux fractures, based on pre-operative three-dimensional computed tomography.",
        journal: "Eur J Orthop Surg Traumatol",
        year: 2024,
        pmid: "38592551",
        doi: "10.1007/s00590-024-03910-0",
      },
    },
    {
      id: "alashhab-2019-tillaux-desviada",
      claim:
        "Em série de fraturas de Tillaux desviadas no adolescente, a redução anatômica — fechada ou aberta — com fixação e imobilização levou à consolidação em todos os casos e a escores AOFAS excelentes (média 97), com indicação cirúrgica para desvio maior que 2 mm.",
      takeaway:
        "A redução anatômica das fraturas de Tillaux desviadas produz bons resultados funcionais até o fim do crescimento, reforçando o limiar de 2 mm.",
      level: "IV",
      studyType: "Série de casos clínica",
      era: "atual",
      citation: {
        authors: "Ali Al-Ashhab ME, Mahmoud Mohamed AA",
        title: "Treatment for displaced Tillaux fractures in adolescent age group.",
        journal: "Foot Ankle Surg",
        year: 2019,
        pmid: "31031149",
        doi: "10.1016/j.fas.2019.04.001",
      },
    },
  ],
  pearls: [
    "A idade e o fechamento fisário assimétrico definem a fratura de transição: pense nela no adolescente próximo do fim do crescimento.",
    "A radiografia subestima o desvio articular; a TC multiplanar é o exame que decide a conduta.",
    "O limiar prático é 2 mm de desvio articular para indicar redução anatômica e fixação.",
    "Fixe poupando a fise sempre que possível — parafuso epifisário na Tillaux e metafisário no fragmento de Thurston-Holland.",
  ],
  pitfalls: [
    "Tratar como entorse uma fratura articular sutil do adolescente.",
    "Decidir por tratamento conservador com base apenas na radiografia, que subestima o desvio.",
    "Aceitar redução fechada aparente sem confirmar a superfície articular por artrograma ou TC.",
    "Insistir na redução fechada quando há periósteo interposto bloqueando a congruência.",
  ],
  figures: [
    {
      id: "fratura-transicao-tornozelo:anatomia",
      caption:
        "Fechamento fisário assimétrico da tíbia distal: central, depois medial e por último anterolateral.",
      alt: "Esquema da ordem de fechamento da fise da tíbia distal",
      kind: "diagram",
    },
    {
      id: "fratura-transicao-tornozelo:tillaux",
      caption:
        "Fratura de Tillaux juvenil: Salter-Harris III da epífise anterolateral avulsionada pelo ligamento tibiofibular anteroinferior.",
      alt: "Esquema da fratura de Tillaux juvenil em vista anteroposterior",
      kind: "diagram",
    },
    {
      id: "fratura-transicao-tornozelo:triplano",
      variant: "2frag",
      caption:
        "Fratura triplanar de dois fragmentos: componentes sagital (metáfise), axial (fise) e coronal (epífise).",
      alt: "Esquema da fratura triplanar de dois fragmentos em perfil",
      kind: "diagram",
    },
    {
      id: "fratura-transicao-tornozelo:triplano",
      variant: "3frag",
      caption: "Fratura triplanar de três fragmentos: acrescenta fragmento anterolateral epifisário separado.",
      alt: "Esquema da fratura triplanar de três fragmentos",
      kind: "diagram",
    },
    {
      id: "fratura-transicao-tornozelo:tc-desvio",
      caption:
        "A radiografia subestima o desvio; a TC quantifica a diástase e o degrau articular, com desvio metafisário no perfil como pista.",
      alt: "Comparação entre radiografia e TC na medida do desvio articular",
      kind: "diagram",
    },
    {
      id: "fratura-transicao-tornozelo:via-anterolateral",
      caption: "Via anterolateral para o fragmento de transição, protegendo o nervo fibular superficial.",
      alt: "Esquema da via anterolateral do tornozelo",
      kind: "diagram",
    },
    {
      id: "fratura-transicao-tornozelo:reducao",
      caption:
        "Redução fechada: da rotação externa deslocada à rotação interna do pé com pressão anteroposterior.",
      alt: "Esquema da manobra de redução fechada da fratura de transição",
      kind: "diagram",
    },
    {
      id: "fratura-transicao-tornozelo:fixacao",
      variant: "tillaux",
      caption: "Fixação da fratura de Tillaux com parafuso epifisário paralelo à articulação, poupando a fise.",
      alt: "Esquema da fixação com parafuso epifisário na fratura de Tillaux",
      kind: "diagram",
    },
  ],
  meta: {
    lastReviewed: "2026-07-13",
    sources: [
      "Waters PM, Skaggs DL, Flynn JM. Rockwood and Wilkins' Fractures in Children. 10ª ed. 2024.",
      "Herring JA. Tachdjian's Pediatric Orthopaedics. 6ª ed. 2022.",
      "Weinstein SL, Flynn JM. Lovell and Winter's Pediatric Orthopaedics. 8ª ed. 2021.",
      "Hebert S, Lech O, et al. Ortopedia e Traumatologia: Princípios e Prática. 6ª ed. 2025.",
    ],
    attribution:
      "Conteúdo original Revisortopedia; figuras esquemáticas originais (line-art), sem reprodução de material protegido.",
    figureReference:
      "Referência editorial: Rockwood and Wilkins' Fractures in Children, 10ª ed. (2024), capítulo de fraturas de transição da tíbia distal; redesenho original, não reprodução.",
  },
});
