import { defineTopic } from "../../types/topic";

export const topic = defineTopic({
  id: "ms-radio-ulna-diafise",
  slug: "fratura-diafise-radio-ulna",
  regionId: "membro-superior",
  bone: "Antebraço",
  injury: "Fratura diafisária",
  title: "Fratura das diáfises do rádio e da ulna",
  subtitle:
    "O antebraço é uma articulação funcional: a fratura das duas diáfises exige redução anatômica com placa, restaurando comprimento, rotação e o arco radial.",
  laterality: null,
  status: "complete",

  overview:
    "A fratura simultânea das diáfises do rádio e da ulna (both-bone forearm fracture) resulta tipicamente de trauma direto ou de alta energia no adulto. Diferentemente do úmero, o antebraço não tolera desvios: rádio e ulna formam uma unidade articular funcional com as articulações radioulnares proximal e distal e a membrana interóssea, na qual o rádio gira em torno da ulna para a pronossupinação. Pequenas deformidades de comprimento, rotação ou do arco radial comprometem esse movimento.\n\nPor isso, no adulto, a fratura das duas diáfises é uma indicação clássica de redução aberta e fixação interna. O padrão-ouro é a placa de compressão, que permite restaurar a anatomia com altas taxas de consolidação. A meta cirúrgica central — mais do que apenas consolidar — é reconstituir o comprimento, a rotação e, sobretudo, o arco radial (bow), determinante da recuperação da rotação e da força de preensão. As armadilhas dominantes são a sinostose radioulnar e a síndrome compartimental.",

  keyFacts: [
    { label: "Conceito-chave", value: "Antebraço = articulação funcional (pronossupinação)" },
    { label: "Tratamento no adulto", value: "ORIF com placa de compressão (padrão-ouro)" },
    { label: "Meta cirúrgica", value: "Comprimento + rotação + arco radial" },
    { label: "Consolidação (placa)", value: "≈ 96–98%" },
    { label: "Complicação temida", value: "Sinostose radioulnar" },
    { label: "Emergência associada", value: "Síndrome compartimental" },
  ],

  anatomy: {
    text:
      "O rádio e a ulna funcionam como uma unidade: unidos pela articulação radioulnar proximal (ARUP), pela distal (ARUD) e pela membrana interóssea, permitem que o rádio rode sobre a ulna na pronossupinação. A ulna é relativamente reta e serve de eixo; o rádio descreve uma curvatura lateral — o arco radial — cuja restauração é essencial para a rotação e a força de preensão.\n\nA membrana interóssea, com sua banda central oblíqua, transmite carga do rádio para a ulna e mantém a relação entre os dois ossos. As estruturas nervosas em risco variam conforme a via: o nervo interósseo posterior (ramo profundo do radial) atravessa o supinador no terço proximal do rádio e é a estrutura crítica das vias anterior (Henry) e posterior (Thompson); a artéria radial e o ramo superficial do radial correm na face volar/lateral. A borda subcutânea da ulna permite acesso direto e seguro.",
    figureIds: [
      "fratura-diafise-radio-ulna:anatomia",
      "fratura-diafise-radio-ulna:arco-radial",
    ],
  },

  classification: [
    {
      id: "ao-ota-2r2u",
      name: "AO/OTA 2R2/2U2",
      basis: "Morfologia do traço diafisário do rádio (2R2) e da ulna (2U2)",
      note: "Cada osso é classificado separadamente: A traço simples, B em cunha, C complexa/segmentar.",
      types: [
        {
          code: "22-A",
          label: "Simples",
          description:
            "Traço único (transverso, oblíquo ou espiral) em um ou ambos os ossos, sem terceiro fragmento com contato cortical.",
          figureId: "fratura-diafise-radio-ulna:ao",
          figureVariant: "A",
        },
        {
          code: "22-B",
          label: "Em cunha",
          description:
            "Terceiro fragmento em cunha (borboleta), mantendo contato cortical após a redução.",
          figureId: "fratura-diafise-radio-ulna:ao",
          figureVariant: "B",
        },
        {
          code: "22-C",
          label: "Complexa",
          description:
            "Cominução ou padrão segmentar, sem contato entre os fragmentos principais — maior risco de encurtamento e perda do arco.",
          figureId: "fratura-diafise-radio-ulna:ao",
          figureVariant: "C",
        },
      ],
    },
    {
      id: "associadas",
      name: "Lesões associadas a excluir",
      basis: "Padrões fratura-luxação que mudam a conduta",
      note: "Uma fratura isolada de um dos ossos com desvio obriga a procurar luxação da articulação radioulnar correspondente.",
      types: [
        {
          code: "Monteggia",
          label: "Fratura da ulna + luxação da cabeça do rádio",
          description:
            "Fratura da diáfise proximal da ulna associada a luxação da ARUP — a linha do rádio deve sempre apontar para o capítulo.",
        },
        {
          code: "Galeazzi",
          label: "Fratura do rádio + luxação da ARUD",
          description:
            "Fratura da diáfise distal do rádio com instabilidade da articulação radioulnar distal — a 'fratura da necessidade' (exige cirurgia).",
        },
      ],
    },
  ],

  indications: {
    operative: [
      "Praticamente todas as fraturas desviadas das duas diáfises no adulto (indicação clássica de ORIF)",
      "Fratura exposta",
      "Síndrome compartimental (fixação após fasciotomia)",
      "Lesão vascular ou neurológica associada",
      "Padrões fratura-luxação (Monteggia, Galeazzi)",
      "Antebraço/cotovelo flutuante e politrauma",
      "Falha da redução fechada em manter alinhamento (raras fraturas não desviadas)",
    ],
    nonOperative: [
      "Fratura isolada e não desviada da ulna ('nightstick') — imobilização funcional",
      "Fraturas verdadeiramente sem desvio em pacientes selecionados, com vigilância rigorosa",
      "Pacientes sem condição clínica para cirurgia (exceção)",
    ],
    decisionNotes:
      "No adulto, a fratura desviada das duas diáfises quase sempre é cirúrgica: o antebraço não tolera as deformidades de comprimento, rotação e arco radial que o tratamento fechado deixaria. Ao contrário do úmero, aqui a meta é a redução anatômica. Sempre avaliar as articulações radioulnares proximal e distal para não passar despercebida uma Monteggia ou uma Galeazzi. A síndrome compartimental deve ser ativamente descartada — dor desproporcional e dor à extensão passiva dos dedos são os sinais mais precoces.",
  },

  approaches: [
    {
      id: "henry",
      name: "Via anterior (Henry) — rádio",
      indication: "Acesso à diáfise do rádio, sobretudo terços médio e distal; extensível.",
      interval: "Entre o braquiorradial (n. radial) e o flexor radial do carpo (n. mediano)",
      atRisk: [
        "Nervo interósseo posterior (no supinador, terço proximal)",
        "Artéria radial",
        "Ramo superficial do nervo radial",
      ],
      figureId: "fratura-diafise-radio-ulna:via-henry",
    },
    {
      id: "thompson",
      name: "Via posterior (Thompson) — rádio",
      indication: "Acesso dorsal ao terço proximal e médio do rádio.",
      interval: "Entre o extensor radial curto do carpo e o extensor comum dos dedos",
      atRisk: ["Nervo interósseo posterior (ao emergir do supinador)"],
      figureId: "fratura-diafise-radio-ulna:via-thompson",
    },
    {
      id: "ulna-direta",
      name: "Via direta — ulna",
      indication: "Acesso à diáfise da ulna sobre sua borda subcutânea.",
      interval: "Entre o flexor ulnar do carpo e o extensor ulnar do carpo",
      atRisk: ["Nervo cutâneo antebraquial medial", "Nervo/artéria ulnares (mais distal)"],
      figureId: "fratura-diafise-radio-ulna:via-thompson",
    },
  ],

  technique: [
    {
      n: 1,
      title: "Planejamento e vias separadas",
      detail:
        "Confirmar o padrão de cada osso e excluir Monteggia/Galeazzi. Usar incisões separadas para rádio e ulna — reduz o risco de sinostose radioulnar. Paciente em decúbito dorsal, membro sobre mesa de mão, garrote.",
      figureId: "fratura-diafise-radio-ulna:anatomia",
      tips: ["Duas incisões distintas, evitando aproximá-las sobre a membrana interóssea."],
      pitfalls: ["Incisão única ou enxerto ósseo interfragmentar aumentam o risco de sinostose."],
    },
    {
      n: 2,
      title: "Exposição e proteção neurovascular",
      detail:
        "Na via de Henry, proteger o nervo interósseo posterior supinando o antebraço e desinserindo o supinador subperiostealmente no terço proximal. A borda subcutânea dá acesso seguro à ulna.",
      figureId: "fratura-diafise-radio-ulna:via-henry",
      tips: ["Supinar o antebraço afasta o NIP do campo no acesso proximal ao rádio."],
      pitfalls: ["Lesão do NIP por dissecção proximal sem supinar e sem identificá-lo."],
    },
    {
      n: 3,
      title: "Redução e restauração do arco radial",
      detail:
        "Reduzir cada fratura restaurando comprimento e rotação. O objetivo central é reconstituir o arco radial (magnitude e localização) comparado ao lado contralateral — dele dependem a rotação e a força de preensão.",
      figureId: "fratura-diafise-radio-ulna:arco-radial",
      tips: ["Comparar o arco radial com o antebraço contralateral guia a redução."],
      pitfalls: ["Aplainar o arco radial limita a pronossupinação mesmo com consolidação."],
    },
    {
      n: 4,
      title: "Fixação com placa de compressão",
      detail:
        "Placa DCP/LC-DCP de 3,5 mm em cada osso, com pelo menos 5–6 corticais (3 parafusos) por fragmento; contorno da placa do rádio acompanhando o arco. Em cominução, placa em ponte preservando a biologia.",
      figureId: "fratura-diafise-radio-ulna:orif-placa",
      tips: ["Contornar a placa do rádio para não retificar o arco radial."],
      pitfalls: ["Fixação insuficiente (poucas corticais) predispõe à pseudartrose e refratura."],
    },
    {
      n: 5,
      title: "Checagem da pronossupinação e das ARUP/ARUD",
      detail:
        "Testar a rotação do antebraço na mesa e confirmar sob fluoroscopia a redução, o comprimento e as articulações radioulnares. Considerar enxerto em falhas ósseas segmentares.",
      figureId: "fratura-diafise-radio-ulna:orif-placa",
      tips: ["Rotação completa intraoperatória sugere restauração anatômica adequada."],
      pitfalls: ["Deixar de reduzir/estabilizar a ARUD numa Galeazzi associada."],
    },
    {
      n: 6,
      title: "Vigilância compartimental e fechamento",
      detail:
        "Se houver suspeita de síndrome compartimental (alta energia, dor desproporcional), realizar fasciotomia volar ampla e deixar a pele aberta. Fechar por planos quando o acesso for eletivo e sem tensão.",
      figureId: "fratura-diafise-radio-ulna:compartimento",
      tips: ["Na dúvida sobre compartimento, a fasciotomia precoce é a conduta segura."],
      pitfalls: ["Fechar sob tensão um antebraço de risco e mascarar a síndrome compartimental."],
    },
  ],

  postop: {
    immobilization:
      "Tala/tipoia para conforto por poucos dias. Com fixação estável em placa, mobilização precoce do punho, cotovelo e da pronossupinação.",
    weightBearing:
      "Sem carga axial no membro superior. Reabilitação com movimento ativo precoce; carga e fortalecimento progressivos após sinais de consolidação.",
    rehab: [
      { window: "0–2 sem", weightBearing: "Sem carga", focus: "Controle de edema/dor, movimento de dedos, punho e cotovelo" },
      { window: "2–6 sem", weightBearing: "Sem carga", focus: "ADM ativa plena, ênfase na pronossupinação" },
      { window: "6–12 sem", weightBearing: "Sem carga axial", focus: "Fortalecimento leve progressivo conforme consolidação" },
      { window: "> 12 sem", weightBearing: "Progressiva", focus: "Fortalecimento e retorno funcional após união radiográfica" },
    ],
    followup:
      "Radiografias seriadas até a consolidação (habitualmente 8–12 semanas). Evitar remoção rotineira precoce da placa pelo risco de refratura no orifício dos parafusos; se indicada, adiar além de 12–18 meses e proteger o membro.",
  },

  complications: [
    {
      name: "Sinostose radioulnar",
      detail:
        "Ponte óssea entre rádio e ulna que bloqueia a pronossupinação. Rara; fatores de risco incluem trauma de alta energia, fraturas no mesmo nível, incisão única, enxerto interfragmentar e trauma craniano associado.",
      prevention:
        "Incisões separadas para cada osso; evitar enxerto sobre a membrana interóssea. Tratamento: ressecção da sinostose (habitualmente 6–12 meses) com interposição.",
    },
    {
      name: "Síndrome compartimental",
      detail:
        "Emergência, sobretudo em trauma de alta energia e fraturas expostas. Dor desproporcional e dor à extensão passiva dos dedos são os sinais mais precoces.",
      prevention: "Alto índice de suspeição, medida de pressão quando indicada e fasciotomia volar precoce.",
    },
    {
      name: "Pseudartrose / retardo de consolidação",
      detail: "Favorecida por fixação inadequada, cominução, exposição e tabagismo.",
      prevention: "Corticais suficientes, técnica cuidadosa e enxerto nas falhas segmentares.",
    },
    {
      name: "Perda do arco radial (má-união)",
      detail: "Aplainamento do arco radial limita a pronossupinação e a força de preensão.",
      prevention: "Redução anatômica com contorno da placa e comparação com o lado contralateral.",
    },
    {
      name: "Refratura após retirada da placa",
      detail: "Ocorre nos orifícios dos parafusos; risco maior com remoção precoce.",
      prevention: "Retirar apenas se necessário, tardiamente, e proteger o membro após a retirada.",
    },
    {
      name: "Lesão do nervo interósseo posterior",
      detail: "Iatrogênica na abordagem do terço proximal do rádio (Henry/Thompson).",
      prevention: "Supinar o antebraço, identificar/proteger o NIP e desinserir o supinador subperiostealmente.",
    },
    {
      name: "Infecção",
      detail: "Mais frequente em fraturas expostas e de alta energia.",
      prevention: "Desbridamento, antibioticoterapia e cobertura adequada de partes moles.",
    },
  ],

  evidence: [
    {
      id: "anderson-1975",
      claim:
        "Série clássica de 244 pacientes (330 fraturas diafisárias agudas do rádio/ulna) tratadas com placa de compressão ASIF: consolidação de 97,9% no rádio e 96,3% na ulna, estabelecendo a placa como método confiável para união e recuperação funcional.",
      takeaway: "A placa de compressão é o padrão histórico, com altíssimas taxas de consolidação no antebraço.",
      level: "IV",
      studyType: "Série de casos retrospectiva",
      era: "classico",
      citation: {
        authors: "Anderson LD, Sisk D, Tooms RE, Park WI 3rd",
        title: "Compression-plate fixation in acute diaphyseal fractures of the radius and ulna",
        journal: "J Bone Joint Surg Am",
        year: 1975,
        pmid: "1091653",
      },
    },
    {
      id: "schemitsch-1992",
      claim:
        "Em 55 adultos com fratura das duas diáfises tratados com placa, a restauração da magnitude e da localização do arco radial correlacionou-se com bom resultado funcional — rotação > 80% do normal e recuperação da força de preensão.",
      takeaway: "Restaurar o arco radial (não só consolidar) é o determinante do resultado funcional.",
      level: "IV",
      studyType: "Estudo de coorte / série clínico-radiográfica",
      era: "classico",
      citation: {
        authors: "Schemitsch EH, Richards RR",
        title:
          "The effect of malunion on functional outcome after plate fixation of fractures of both bones of the forearm in adults",
        journal: "J Bone Joint Surg Am",
        year: 1992,
        pmid: "1522093",
      },
    },
    {
      id: "lee-2013",
      claim:
        "Estudo prospectivo randomizado (n=67 adultos) comparando placa vs haste intramedular: a placa teve menor tempo até a união, menor tempo de fluoroscopia e melhor restauração do arco radial em relação ao contralateral, embora sem diferença no resultado funcional final.",
      takeaway: "A placa restaura melhor o arco radial; a haste é aceitável em indicações selecionadas.",
      level: "II",
      studyType: "Ensaio clínico randomizado",
      era: "atual",
      citation: {
        authors: "Lee SK, Kim KJ, Lee JW, Choy WS",
        title: "Plate osteosynthesis versus intramedullary nailing for both forearm bones fractures",
        journal: "Eur J Orthop Surg Traumatol",
        year: 2013,
        pmid: "23712672",
        doi: "10.1007/s00590-013-1242-x",
        url: "https://doi.org/10.1007/s00590-013-1242-x",
      },
    },
    {
      id: "blazevic-2020",
      claim:
        "Coorte de fraturas do antebraço no adulto tratadas com haste intramedular bloqueada com parafuso de compressão: taxa global de união de 95,2%, com poucas complicações (uma pseudartrose, uma paralisia transitória do radial).",
      takeaway: "A haste bloqueada com compressão é alternativa válida em casos selecionados no adulto.",
      level: "IV",
      studyType: "Série de casos retrospectiva",
      era: "atual",
      citation: {
        authors: "Blažević D, Benčić I, Ćuti T, Bakota B, Dobrić I, Sabalić S, Vidović D",
        title: "Intramedullary nailing of adult forearm fractures: Results and complications",
        journal: "Injury",
        year: 2020,
        pmid: "33189328",
        doi: "10.1016/j.injury.2020.11.012",
        url: "https://doi.org/10.1016/j.injury.2020.11.012",
      },
    },
    {
      id: "bergeron-2012",
      claim:
        "Revisão sobre sinostose radioulnar pós-traumática: complicação rara ligada à lesão inicial e à cirurgia; a maioria requer ressecção cirúrgica, e a ressecção precoce (6–12 meses) após maturação óssea é segura, com baixa recorrência sem profilaxia adjuvante rotineira.",
      takeaway: "A sinostose é rara mas incapacitante; incisões separadas previnem e a ressecção trata.",
      level: "V",
      studyType: "Revisão narrativa",
      era: "atual",
      citation: {
        authors: "Bergeron SG, Desy NM, Bernstein M, Harvey EJ",
        title: "Management of posttraumatic radioulnar synostosis",
        journal: "J Am Acad Orthop Surg",
        year: 2012,
        pmid: "22751164",
        doi: "10.5435/JAAOS-20-07-450",
        url: "https://doi.org/10.5435/JAAOS-20-07-450",
      },
    },
  ],

  pearls: [
    "O antebraço é uma articulação funcional: a meta no adulto é a redução anatômica, não apenas a consolidação.",
    "Restaurar o arco radial (magnitude e localização) determina a pronossupinação e a força de preensão.",
    "A placa de compressão 3,5 mm é o padrão-ouro, com união em ~96–98%.",
    "Use incisões separadas para rádio e ulna — reduz o risco de sinostose radioulnar.",
    "Sempre avalie a ARUP e a ARUD: exclua Monteggia e Galeazzi.",
    "Supinar o antebraço na via de Henry afasta o nervo interósseo posterior do campo.",
    "Descarte ativamente a síndrome compartimental — dor à extensão passiva dos dedos é sinal precoce.",
  ],

  pitfalls: [
    "Aplainar o arco radial e limitar a pronossupinação mesmo com fratura consolidada.",
    "Usar incisão única ou enxerto sobre a membrana interóssea, favorecendo a sinostose.",
    "Não reconhecer uma Monteggia ou Galeazzi associada.",
    "Ferir o nervo interósseo posterior por dissecção proximal do rádio sem supinar/identificá-lo.",
    "Subestimar a síndrome compartimental em trauma de alta energia.",
    "Retirar a placa precocemente e provocar refratura nos orifícios dos parafusos.",
  ],

  figures: [
    {
      id: "fratura-diafise-radio-ulna:anatomia",
      kind: "diagram",
      caption: "Rádio e ulna, membrana interóssea e articulações radioulnares (ARUP/ARUD).",
      alt: "Esquema do antebraço com rádio, ulna, membrana interóssea e o arco radial.",
    },
    {
      id: "fratura-diafise-radio-ulna:arco-radial",
      kind: "diagram",
      caption: "Medida do arco radial: corda e flecha máxima comparadas ao contralateral.",
      alt: "Rádio isolado com corda proximal-distal e a flecha do arco radial máximo.",
    },
    { id: "fratura-diafise-radio-ulna:ao", variant: "A", kind: "diagram", caption: "AO/OTA 22-A — traço simples.", alt: "Fratura diafisária simples do rádio e da ulna." },
    { id: "fratura-diafise-radio-ulna:ao", variant: "B", kind: "diagram", caption: "AO/OTA 22-B — em cunha.", alt: "Fratura diafisária em cunha do rádio e da ulna." },
    { id: "fratura-diafise-radio-ulna:ao", variant: "C", kind: "diagram", caption: "AO/OTA 22-C — complexa/segmentar.", alt: "Fratura diafisária complexa do rádio e da ulna." },
    {
      id: "fratura-diafise-radio-ulna:via-henry",
      kind: "diagram",
      caption: "Via anterior de Henry ao rádio — NIP no supinador em risco.",
      alt: "Acesso anterior de Henry ao rádio com o nervo interósseo posterior.",
    },
    {
      id: "fratura-diafise-radio-ulna:via-thompson",
      kind: "diagram",
      caption: "Via posterior de Thompson (rádio) e acesso direto à borda subcutânea da ulna.",
      alt: "Acesso posterior de Thompson ao rádio e via direta à ulna.",
    },
    {
      id: "fratura-diafise-radio-ulna:orif-placa",
      kind: "diagram",
      caption: "ORIF com placas restaurando comprimento, rotação e o arco radial.",
      alt: "Fixação com placas de compressão no rádio e na ulna.",
    },
    {
      id: "fratura-diafise-radio-ulna:sinostose",
      kind: "diagram",
      caption: "Sinostose radioulnar: ponte óssea que bloqueia a pronossupinação.",
      alt: "Ponte óssea heterotópica entre o rádio e a ulna.",
    },
    {
      id: "fratura-diafise-radio-ulna:compartimento",
      kind: "diagram",
      caption: "Compartimentos do antebraço e incisão de fasciotomia volar.",
      alt: "Corte transversal do antebraço com os compartimentos e a fasciotomia volar.",
    },
  ],

  meta: {
    lastReviewed: "2026-07-13",
    sources: [
      "Rockwood and Green's Fractures in Adults, 10ª ed. (2024)",
      "Campbell's Operative Orthopaedics, 14ª ed. (2021)",
      "Hebert & Lech, Ortopedia e Traumatologia, 6ª ed. (2025)",
      "Bibliografia TEOT 2026",
    ],
    attribution: "Evidência recuperada do PubMed. Ver DOIs citados.",
    figureReference: "Rockwood and Green's Fractures in Adults, 10ª ed. (2024)",
  },
});
