import { defineTopic } from "../../types/topic";

/* Fratura da clavícula — membro superior.
   Base: bibliografia TEOT 2026 (Rockwood & Green, Campbell, Hebert/Lech) +
   ensaios/revisões PubMed com PMID/DOI verificáveis. */
export const topic = defineTopic({
  id: "ms-ombro-clavicula-fratura-clavicula",
  slug: "fratura-clavicula",
  regionId: "membro-superior",
  bone: "Clavícula",
  injury: "Fratura",
  title: "Fratura da clavícula",
  subtitle:
    "Restaurar comprimento, alinhamento e cintura escapular funcional sem transformar uma fratura benignamente tratável em cirurgia desnecessária.",
  laterality: null,
  status: "complete",
  overview:
    "A clavícula é a escora anterior da cintura escapular: mantém o ombro afastado do tórax, protege o feixe subclávio e o plexo braquial e transmite carga entre o membro superior e o esqueleto axial. A maioria das fraturas ocorre no terço médio e consolida bem com tratamento funcional. O desafio no adulto é separar as fraturas com desvio ou encurtamento relevante, pele ameaçada, lesão neurovascular ou demanda alta daquelas que podem ser conduzidas com tipoia e reabilitação. A decisão moderna não é simplesmente 'desviou, opera': a placa reduz pseudartrose e deformidade em fraturas diafisárias completamente desviadas, mas acrescenta risco de complicações do implante, parestesia supraclavicular e retirada de material. No terço distal, a estabilidade depende dos ligamentos coracoclaviculares; os padrões de Neer II e V são mais instáveis e merecem limiar cirúrgico menor.",
  keyFacts: [
    { label: "Local mais comum", value: "Terço médio (Allman I / Robinson 2)" },
    { label: "Classificação prática", value: "Allman por terço + Robinson/Edinburgh por desvio e cominuição" },
    { label: "Radiografias", value: "AP + inclinação cranial de 15-45 graus; avaliar encurtamento e pele" },
    { label: "Cirurgia absoluta", value: "Exposta, pele ameaçada, lesão vascular ou do plexo e ombro flutuante instável" },
    { label: "Cirurgia relativa", value: "Diafisária completamente desviada ou encurtada, cominuição e alto rendimento" },
    { label: "Terço distal", value: "Neer II/V instáveis por ruptura ou desinserção dos ligamentos CC" },
  ],
  anatomy: {
    text:
      "A clavícula tem dupla curvatura em S, extremidade medial prismática e lateral achatada. O terço médio é a zona de transição com menor reforço ligamentar, por isso concentra as fraturas. Superiormente inserem-se o esternocleidomastóideo e o trapézio; inferiormente, o peitoral maior, o deltoide e o subclávio. Os vasos subclávios e o plexo braquial passam posteroinferiormente ao terço médio, o que exige proteção durante a perfuração bicortical e a redução com pinças. Lateralmente, os ligamentos conoide e trapezoide suspendem a clavícula no processo coracoide; quando perdem continuidade no terço distal, o fragmento medial fica instável.",
    figureIds: ["fratura-clavicula:radiografia", "fratura-clavicula:anatomia"],
  },
  classification: [
    {
      id: "allman",
      name: "Allman por terço",
      basis: "Divide a clavícula em terços médio, lateral e medial; é simples e útil para triagem.",
      note: "O terço médio é o mais frequente; o terço distal exige avaliação dos ligamentos coracoclaviculares.",
      types: [
        {
          code: "I",
          label: "Terço médio",
          description:
            "Fratura diafisária entre os ligamentos costoclavicular e coracoclaviculares; é a mais comum. Desvio completo, encurtamento e cominuição aumentam o risco de pseudartrose e de mau resultado cosmético ou funcional.",
          figureId: "fratura-clavicula:tercos",
          figureVariant: "medio",
        },
        {
          code: "II",
          label: "Terço lateral",
          description:
            "Relacionada aos ligamentos coracoclaviculares. Se o fragmento medial perde o suporte CC (Neer II/V), a fratura é instável e apresenta maior risco de pseudartrose.",
          figureId: "fratura-clavicula:tercos",
          figureVariant: "lateral",
        },
        {
          code: "III",
          label: "Terço medial",
          description:
            "Rara; exige atenção ao trauma de alta energia, ao mediastino e à articulação esternoclavicular. A TC é indicada quando há dúvida sobre desvio posterior.",
          figureId: "fratura-clavicula:tercos",
          figureVariant: "medial",
        },
      ],
    },
    {
      id: "robinson",
      name: "Robinson/Edinburgh — terço médio",
      basis: "Codifica localização e grau de desvio ou cominuição; ajuda a estratificar o risco no adulto.",
      types: [
        {
          code: "2A",
          label: "Alinhada ou pouco desviada",
          description:
            "Contato cortical preservado ou desvio mínimo. O tratamento funcional costuma ser suficiente.",
          figureId: "fratura-clavicula:robinson",
          figureVariant: "2A",
        },
        {
          code: "2B",
          label: "Desviada/cominutiva",
          description:
            "Sem contato cortical, encurtada ou com fragmento em cunha. Grupo em que a fixação pode reduzir pseudartrose e consolidação viciosa em adultos selecionados.",
          figureId: "fratura-clavicula:robinson",
          figureVariant: "2B",
        },
      ],
    },
  ],
  indications: {
    operative: [
      "Fratura exposta, pele em tenda/ameaçada ou risco iminente de exposição.",
      "Lesão vascular, déficit progressivo do plexo braquial ou compressão por fragmento.",
      "Fratura diafisária completamente desviada, encurtamento clinicamente relevante ou cominuição em adulto ativo.",
      "Ombro flutuante ou fratura associada do colo da escápula com instabilidade da cintura.",
      "Fratura distal instável (Neer II/V) em paciente apto, sobretudo com grande deslocamento.",
      "Pseudartrose sintomática ou consolidação viciosa com perda funcional.",
    ],
    nonOperative: [
      "Fratura do terço médio sem desvio importante e com pele íntegra.",
      "Paciente de baixa demanda ou alto risco cirúrgico mesmo com desvio moderado.",
      "Fraturas pediátricas e de adolescentes com potencial de remodelação, salvo exceções.",
      "Fratura medial sem desvio posterior/compromisso mediastinal.",
    ],
    decisionNotes:
      "A escolha deve pesar o risco biológico e a demanda do paciente. Em adultos com fratura diafisária completamente desviada, a placa reduz pseudartrose e consolidação viciosa e acelera a recuperação inicial em estudos randomizados, mas o benefício funcional a longo prazo diminui e parte dos pacientes precisa retirar o implante. A tipoia simples costuma ser mais bem tolerada que o enfaixamento em oito. No terço distal, a pergunta central é se os ligamentos coracoclaviculares mantêm o fragmento medial reduzido; quando não, a fratura se comporta como lesão suspensória instável.",
  },
  approaches: [
    {
      id: "superior",
      name: "Via superior/infraclavicular",
      indication: "Redução aberta e fixação interna da diáfise clavicular e do terço lateral, conforme o padrão.",
      interval:
        "Incisão centrada sobre a clavícula, preservando os ramos supraclaviculares quando possível; exposição subperiostal limitada ao necessário para redução e colocação da placa.",
      atRisk: [
        "Ramos sensitivos supraclaviculares",
        "Veia e artéria subclávias e plexo braquial na perfuração inferior",
        "Pele fina sobre placa superior",
      ],
      figureId: "fratura-clavicula:acesso",
    },
  ],
  technique: [
    {
      n: 1,
      title: "Planejar redução e implante",
      detail:
        "Confirmar as incidências AP e com inclinação cranial, medir encurtamento e desvio, mapear a cominuição e decidir entre placa superior ou anterior, placa-gancho, reconstrução CC ou haste intramedular. Na fratura distal, definir a estabilidade pelos ligamentos CC.",
      figureId: "fratura-clavicula:tercos",
      figureVariant: "medio",
      tips: ["Fotografar/registrar pele antes do bloqueio", "Ter placa pré-moldada e parafusos de bloqueio disponíveis"],
      pitfalls: ["Subestimar ameaça à pele", "Não reconhecer padrão distal instável"],
    },
    {
      n: 2,
      title: "Expor preservando nervos supraclaviculares",
      detail:
        "Incisar no eixo da clavícula, criar retalhos espessos e identificar ramos sensitivos quando cruzam o campo. Desperiostizar pouco: apenas o suficiente para pinças, leitura cortical e passagem da placa.",
      figureId: "fratura-clavicula:acesso",
      tips: ["Manter fragmentos com partes moles quando possível"],
      pitfalls: ["Retalhos finos e placa proeminente", "Parestesia extensa por secção desnecessária de ramos"],
    },
    {
      n: 3,
      title: "Restaurar comprimento e rotação",
      detail:
        "Reduzir os fragmentos principais com pinças pontiagudas, usando a cortical superior ou anterior como referência. Na presença de cunha intercalar, reconstruir primeiro a geometria da diáfise sem esmagar fragmentos desvitalizados.",
      figureId: "fratura-clavicula:step-1",
      tips: ["Conferir o comprimento pela simetria dos ombros e pela fluoroscopia", "Usar parafuso interfragmentar quando o traço permitir"],
      pitfalls: ["Aceitar encurtamento residual", "Comprimir a cominuição e perder comprimento"],
    },
    {
      n: 4,
      title: "Fixar e proteger estruturas profundas",
      detail:
        "Aplicar placa superior ou anterior com compra suficiente de cada lado; brocar com limitador e controle manual para evitar penetração profunda. Em traço simples, parafuso interfragmentar pode aumentar compressão. Em fratura distal instável, associar reconstrução CC ou técnica específica.",
      figureId: "fratura-clavicula:step-2",
      tips: ["Buscar pelo menos três parafusos bicorticais por lado quando possível"],
      pitfalls: ["Parafuso longo para inferior", "Placa curta em osso osteopênico/cominutivo"],
    },
  ],
  postop: {
    immobilization:
      "Tipoia para conforto por 2-4 semanas, retirando-a para mobilizar cotovelo, punho e mão e realizar exercícios pendulares conforme a dor. Proteção maior após fixação distal ou em osso osteopênico.",
    weightBearing:
      "Sem carga/resistência no membro até sinais de consolidação; atividades acima da cabeça e esporte após consolidação clínico-radiográfica.",
    rehab: [
      { window: "0-2 semanas", weightBearing: "Sem carga", focus: "Controle da dor e da ferida, mobilidade de cotovelo, punho e mão e exercícios pendulares leves." },
      { window: "2-6 semanas", weightBearing: "Sem carga", focus: "Amplitude ativa-assistida progressiva, evitando alavancas dolorosas." },
      { window: "6-12 semanas", weightBearing: "Carga gradual", focus: "Fortalecimento escapular/manguito conforme consolidação." },
    ],
    followup:
      "Radiografias seriadas até a formação de ponte cortical; vigiar parestesia supraclavicular, irritação da placa e sinais de pseudartrose.",
  },
  complications: [
    { name: "Pseudartrose", detail: "Mais comum em fraturas desviadas/cominutivas, tabagismo e terço distal instável.", prevention: "Selecionar bem indicação cirúrgica e preservar biologia." },
    { name: "Irritação/retirada da placa", detail: "Queixa frequente devido ao tecido subcutâneo fino.", prevention: "Perfil baixo, posicionamento adequado e fechamento cuidadoso." },
    { name: "Lesão neurovascular", detail: "Rara, mas grave; há risco durante a perfuração inferior.", prevention: "Medir a broca, usar limitador e conhecer a anatomia profunda." },
  ],
  evidence: [
    {
      id: "cots-2007-clavicula",
      claim: "Em fraturas diafisárias desviadas do adulto, a placa reduz pseudartrose e consolidação viciosa e melhora o desfecho inicial em comparação com o tratamento não operatório.",
      takeaway: "A evidência favorece fixação em adultos selecionados, não cirurgia universal para toda fratura da clavícula.",
      level: "I",
      studyType: "Ensaio clínico randomizado multicêntrico",
      era: "classico",
      citation: {
        authors: "Canadian Orthopaedic Trauma Society",
        title: "Nonoperative treatment compared with plate fixation of displaced midshaft clavicular fractures. A multicenter, randomized clinical trial.",
        journal: "J Bone Joint Surg Am",
        year: 2007,
        pmid: "17200303",
        doi: "10.2106/JBJS.F.00020",
      },
    },
    {
      id: "thurston-2024-distal",
      claim: "Fraturas distais desviadas podem apresentar ausência de consolidação radiográfica sem necessariamente produzir pior desfecho funcional em todos os pacientes.",
      takeaway: "No terço distal, a indicação deve considerar estabilidade, sintomas e demanda, não apenas a radiografia.",
      level: "II",
      studyType: "Revisão sistemática",
      era: "atual",
      citation: {
        authors: "Thurston D, Jordan RW, Thangarajah T, Haque A, Woodmass J, D'Alessandro P, Malik SS",
        title: "Are displaced distal clavicle fractures associated with inferior clinical outcomes following nonoperative management? A systematic review.",
        journal: "J Shoulder Elbow Surg",
        year: 2024,
        pmid: "38281678",
        doi: "10.1016/j.jse.2023.12.006",
      },
    },
  ],
  pearls: [
    "A pele determina a urgência tanto quanto a radiografia.",
    "A tipoia simples é suficiente para a maioria das fraturas pouco desviadas.",
    "No terço distal, pense em ligamentos coracoclaviculares antes de escolher o tratamento.",
  ],
  pitfalls: [
    "Operar toda clavícula desviada sem pesar demanda e risco de implante.",
    "Brocar bicorticalmente sem proteger a face inferior.",
    "Fixar com placa curta ou aceitar encurtamento em fratura cominutiva.",
  ],
  figures: [
    {
      id: "fratura-clavicula:radiografia",
      caption: "Radiografia de fratura desviada do terço médio da clavícula direita.",
      alt: "Radiografia de fratura desviada do terço médio da clavícula",
      kind: "radiograph",
      source: {
        label: "mexican 2000 / Wikimedia Commons",
        url: "https://commons.wikimedia.org/wiki/File:Clavicle_fracture.jpg",
        license: "CC BY-SA 2.0",
        reference: "Imagem recortada para remover o painel radiográfico adjacente; sem alteração diagnóstica.",
      },
    },
    { id: "fratura-clavicula:anatomia", caption: "Dupla curvatura, inserções e estruturas neurovasculares profundas.", alt: "Esquema anatômico da clavícula e relações neurovasculares" },
    { id: "fratura-clavicula:tercos", variant: "medio", caption: "Allman I: terço médio, padrão mais frequente.", alt: "Fratura do terço médio da clavícula" },
    { id: "fratura-clavicula:tercos", variant: "lateral", caption: "Allman II: terço lateral, avaliar ligamentos coracoclaviculares.", alt: "Fratura lateral da clavícula" },
    { id: "fratura-clavicula:tercos", variant: "medial", caption: "Allman III: terço medial, rara e próxima ao mediastino.", alt: "Fratura medial da clavícula" },
    { id: "fratura-clavicula:robinson", variant: "2A", caption: "Robinson 2A: contato/alinhamento preservado.", alt: "Classificação Robinson 2A" },
    { id: "fratura-clavicula:robinson", variant: "2B", caption: "Robinson 2B: desvio e cominuição com maior risco de pseudartrose.", alt: "Classificação Robinson 2B" },
    { id: "fratura-clavicula:acesso", caption: "Via sobre a clavícula e ramos supraclaviculares.", alt: "Via de acesso para clavícula" },
    { id: "fratura-clavicula:step-1", caption: "Redução com restauração do comprimento.", alt: "Redução da fratura da clavícula" },
    { id: "fratura-clavicula:step-2", caption: "Placa pré-moldada e parafuso interfragmentar quando indicado.", alt: "Fixação da clavícula com placa" },
    { id: "fratura-clavicula:step-3", caption: "Haste intramedular como alternativa em traços simples selecionados.", alt: "Haste intramedular da clavícula" },
  ],
  meta: {
    lastReviewed: "2026-07-13",
    sources: [
      "SBOT. Edital TEOT 2026: Bibliografia para o 55º Exame de Título de Ortopedia e Traumatologia.",
      "Rockwood and Green's Fractures in Adults. 10th ed. 2024.",
      "Campbell's Operative Orthopaedics. 14th ed. 2021.",
    ],
    attribution: "Conteúdo original Revisortopedia; figuras esquemáticas originais.",
    figureReference:
      "Referência editorial: Rockwood & Green's Fractures in Adults, 10th ed. (2024), seção de fraturas da clavícula; redesenho original, não reprodução.",
  },
});
