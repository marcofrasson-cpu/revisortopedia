import { defineTopic } from "../../types/topic";

export const topic = defineTopic({
  id: "op-cotovelo-condilo-lateral",
  slug: "fratura-condilo-lateral-umero",
  regionId: "ortopedia-pediatrica",
  bone: "Cotovelo (criança)",
  injury: "Fratura fisária do côndilo lateral",
  title: "Fratura do côndilo lateral do úmero",
  subtitle:
    "Segunda fratura mais comum do cotovelo infantil e a mais traiçoeira: intra-articular, com desvio subestimado na radiografia em AP e sem o poder de remodelação que perdoa erros — a que evolui para pseudartrose quando é subvalorizada.",
  laterality: null,
  status: "complete",

  overview:
    "A fratura do côndilo lateral responde por 15–20% das fraturas do cotovelo na criança, atrás apenas da supracondiliana, com pico entre 5 e 7 anos. O mecanismo clássico é uma força em varo sobre o antebraço com o cotovelo em extensão (avulsão pela origem do extensor comum e pelo complexo colateral lateral) ou, alternativamente, o impacto da cabeça do rádio contra o capítulo ('push-off').\n\nÉ uma fratura fisária intra-articular — Salter-Harris IV na descrição clássica — e essa dupla natureza define tudo. Sendo intra-articular, não remodela e exige superfície congruente. Sendo fisária, o traço percorre cartilagem ainda não ossificada, invisível na radiografia: o que se mede no filme é a ponta do iceberg. Sendo extra-articular na sua origem periosteal e tracionada pela musculatura extensora, a fratura tende ao desvio progressivo e à pseudartrose — complicação praticamente exclusiva desta fratura no cotovelo infantil e responsável, a longo prazo, por cúbito valgo e paralisia ulnar tardia.\n\nAs decisões giram em torno de três eixos: (1) medir o desvio real, o que exige a incidência oblíqua interna — o AP subestima porque o traço é posterolateral; (2) julgar a integridade da dobradiça cartilaginosa, o que exige artrografia ou RM; (3) tratar pelo desvio — até 2 mm gesso com vigilância radiográfica obsessiva, 2–4 mm com dobradiça íntegra fixação percutânea, acima de 4 mm ou com incongruência articular redução aberta. Um detalhe anatômico governa a via de acesso: o suprimento vascular do côndilo lateral entra pela face posterior, e a dissecção posterior é o caminho direto para a necrose da tróclea.",

  keyFacts: [
    { label: "Epidemiologia", value: "2ª fratura de cotovelo mais comum na criança (15–20%); pico 5–7 anos" },
    { label: "Mecanismo", value: "Varo com cotovelo em extensão (avulsão) ou 'push-off' da cabeça do rádio" },
    { label: "Natureza", value: "Fisária E intra-articular — Salter-Harris IV (Milch I); Milch II é SH II" },
    { label: "Imagem-chave", value: "Oblíqua interna — mede o desvio real; artrografia/RM para a superfície articular" },
    { label: "Limiares", value: "< 2 mm gesso · 2–4 mm com dobradiça íntegra fixação percutânea · > 4 mm ORIF" },
    { label: "Complicação assinatura", value: "Pseudartrose → cúbito valgo → paralisia ulnar tardia" },
    { label: "Consolidação", value: "Lenta: 4–6 semanas (bem mais que a supracondiliana)" },
  ],

  anatomy: {
    text:
      "O côndilo lateral do úmero é o fragmento que carrega o capítulo, a metáfise lateral e — de forma decisiva — parte variável da tróclea. A epífise do úmero distal é quase toda cartilaginosa na criança pequena: o capítulo ossifica por volta de 1 ano, e a tróclea só entre 9 e 11 anos. Por isso a radiografia mostra apenas uma fração do fragmento e do traço; o desvio ósseo aparente é sistematicamente menor que o desvio real.\n\nA referência anatômica que organiza a classificação é a crista lateral da tróclea, o ponto mais alto da tróclea que se articula com o olécrano e impede a translação ulnar. Quando o traço passa lateralmente a ela (Milch I, Salter-Harris IV), a crista permanece com o fragmento proximal e o cotovelo é estável. Quando o traço a atravessa e alcança o ápice troclear (Milch II, Salter-Harris II), a crista vai com o fragmento e o cotovelo pode subluxar ou luxar — Milch II é o padrão mais comum e o mais instável.\n\nSobre o côndilo lateral inserem-se a origem do extensor comum e o complexo ligamentar colateral lateral. É essa tração deformante contínua que explica o desvio secundário sob o gesso, a rotação do fragmento nos estágios avançados e a tendência à pseudartrose: a fratura nunca 'descansa'.\n\nO suprimento vascular é o detalhe cirúrgico mais importante. Os vasos que nutrem a epífise do côndilo lateral penetram pela face POSTERIOR (tecido mole posterior não articular). A dissecção posterior durante a redução aberta desvasculariza o fragmento e produz necrose — a deformidade em rabo de peixe (fishtail) e o colapso da tróclea lateral. Toda a exposição deve ser anterior e lateral, aproveitando o rasgo traumático da origem do extensor comum.",
    figureIds: [
      "fratura-condilo-lateral-umero:anatomia",
      "fratura-condilo-lateral-umero:incidencias",
    ],
  },

  classification: [
    {
      id: "milch",
      name: "Classificação de Milch",
      basis: "Posição do traço em relação à crista lateral da tróclea",
      note: "Define a estabilidade do cotovelo, não a conduta. Milch II é o padrão mais frequente. Paradoxo clássico: o tipo I é Salter-Harris IV e o tipo II é Salter-Harris II — o oposto do que a numeração sugere.",
      types: [
        { code: "I", label: "Traço lateral à crista troclear (SH IV)", description: "O traço atravessa o núcleo de ossificação do capítulo e sai no sulco capítulo-troclear, lateralmente à crista. A crista lateral da tróclea permanece íntegra com o fragmento proximal e o cotovelo é estável — não subluxa.", figureId: "fratura-condilo-lateral-umero:milch", figureVariant: "I" },
        { code: "II", label: "Traço até o ápice troclear (SH II)", description: "O traço atravessa a crista lateral da tróclea e alcança seu ápice. A crista acompanha o fragmento condilar; sem seu bloqueio, a ulna e o rádio podem transladar lateralmente — cotovelo potencialmente instável, com subluxação ou luxação associada. É o tipo mais comum.", figureId: "fratura-condilo-lateral-umero:milch", figureVariant: "II" },
      ],
    },
    {
      id: "jakob",
      name: "Estágios de desvio de Jakob (modificados por Weiss)",
      basis: "Magnitude do desvio e integridade da superfície articular",
      note: "É a classificação que guia a conduta. Weiss acrescentou o critério artrográfico: entre as fraturas desviadas ≥ 2 mm, separam-se as com superfície articular íntegra (tipo II) das com superfície rota (tipo III), estas com taxa de complicação nitidamente maior.",
      types: [
        { code: "I", label: "Desvio < 2 mm", description: "Fratura incompleta com dobradiça cartilaginosa íntegra; superfície articular preservada. Estável — tratamento incruento com vigilância radiográfica seriada.", figureId: "fratura-condilo-lateral-umero:jakob", figureVariant: "I" },
        { code: "II", label: "Desvio ≥ 2 mm, superfície articular íntegra", description: "Fragmento desviado, sem rotação; artrografia mostra cartilagem articular contínua. Redução fechada e fixação percutânea costumam bastar.", figureId: "fratura-condilo-lateral-umero:jakob", figureVariant: "II" },
        { code: "III", label: "Desvio completo com rotação", description: "Fragmento totalmente desviado e rodado (podendo virar até 90–180°), superfície articular descontínua; cotovelo frequentemente instável. Redução aberta e fixação interna.", figureId: "fratura-condilo-lateral-umero:jakob", figureVariant: "III" },
      ],
    },
    {
      id: "song",
      name: "Estágios de Song (1–5)",
      basis: "Progressão do traço pela cartilagem e largura do afastamento nas quatro incidências",
      note: "Refinamento de Song et al. (2008) que separa as fraturas 'de 2 mm' em subgrupos com estabilidade distinta e sustenta um algoritmo em que a redução fechada com fixação interna resolve a maioria dos estágios 3–4. Ressalva atual: a concordância interobservador entre os estágios 2 e 3 é modesta, e a RM mostra que a dobradiça cartilaginosa costuma estar íntegra em ambos — o estadiamento radiográfico isolado não substitui a avaliação da cartilagem.",
      types: [
        { code: "1", label: "Traço para na parede lateral", description: "Afastamento lateral < 2 mm e traço que não alcança a cartilagem articular. Estável — gesso.", figureId: "fratura-condilo-lateral-umero:song", figureVariant: "1" },
        { code: "2", label: "Traço alcança a cartilagem, afastamento lateral < 2 mm", description: "Estabilidade indeterminada: o traço já percorre toda a metáfise até a cartilagem, mas sem afastamento significativo. Gesso com vigilância estreita; percutânea se desviar.", figureId: "fratura-condilo-lateral-umero:song", figureVariant: "2" },
        { code: "3", label: "Afastamento lateral ≥ 2 mm que estreita em direção à articulação", description: "Fratura instável com dobradiça articular ainda presente — o alvo ideal da redução fechada com fixação percutânea.", figureId: "fratura-condilo-lateral-umero:song", figureVariant: "3" },
        { code: "4", label: "Afastamento uniforme (fratura completa) sem rotação", description: "Traço completo, largura de afastamento semelhante do lado lateral e do lado articular. Redução fechada e fixação é tentável; converter para aberta se o desvio residual exceder 2 mm.", figureId: "fratura-condilo-lateral-umero:song", figureVariant: "4" },
        { code: "5", label: "Desvio completo com rotação", description: "Fragmento rodado; a redução fechada falha com frequência. Redução aberta por via lateral e fixação.", figureId: "fratura-condilo-lateral-umero:song", figureVariant: "5" },
      ],
    },
  ],

  indications: {
    operative: [
      "Desvio > 2 mm na incidência oblíqua interna — fixação (percutânea ou aberta)",
      "Desvio de 2–4 mm com dobradiça cartilaginosa íntegra à artrografia — redução fechada e fixação percutânea",
      "Desvio ≥ 4 mm, rotação do fragmento ou incongruência articular — redução aberta e fixação interna",
      "Desvio residual > 2 mm após tentativa de redução fechada — converter para redução aberta",
      "Desvio secundário sob o gesso, detectado no seguimento radiográfico",
      "Jakob III / Song 5, ou Milch II com subluxação do cotovelo",
      "Fratura negligenciada com risco de pseudartrose progressiva (individualizar; ver complicações)",
    ],
    nonOperative: [
      "Desvio < 2 mm com superfície articular congruente e traço que não alcança a cartilagem (Jakob I / Song 1–2)",
      "Gesso axilopalmar a 90° de flexão com antebraço em supinação ou neutro, por 4–6 semanas",
      "Condição inegociável: radiografias seriadas (AP + oblíqua interna) a cada 5–7 dias nas 3 primeiras semanas",
    ],
    decisionNotes:
      "O algoritmo é aritmético, mas a aritmética depende da incidência certa. O desvio deve ser medido na oblíqua interna — é a projeção que põe o traço posterolateral de perfil e a mais confiável entre observadores; a oblíqua externa não agrega. Medir apenas no AP subestima o desvio e é a origem histórica da maioria dos maus resultados.\n\nAcima do limiar, a segunda pergunta é a superfície articular: 2–4 mm com dobradiça cartilaginosa íntegra à artrografia toleram fixação percutânea; incongruência ou rotação exigem visão direta. A artrografia intraoperatória é barata, rápida e decide a questão — na dúvida, faça-a antes de introduzir o primeiro fio.\n\nDiferentemente da supracondiliana, esta fratura não é emergência: o adiamento além de 24 h não piora os resultados clínicos ou funcionais, embora tenda a exigir incisão maior pelo edema. O que não pode ser adiado é o seguimento da fratura tratada incruentamente — o desvio secundário sob o gesso é silencioso e a janela para uma fixação simples fecha em dias.\n\nQuanto ao implante: fios lisos são o padrão histórico e seguros; parafuso canulado dá compressão e, em meta-análise, associou-se a menos infecção superficial e menos rigidez, ao custo de uma segunda anestesia para retirada. A escolha é legítima nos dois sentidos — em fragmento pequeno ou criança muito jovem, os fios continuam preferíveis.",
  },

  approaches: [
    {
      id: "conservador",
      name: "Imobilização gessada com vigilância radiográfica",
      indication: "Jakob I / Song 1–2: desvio < 2 mm com superfície articular congruente.",
      interval: "Gesso axilopalmar, cotovelo a 90°, antebraço em supinação ou neutro (relaxa a origem do extensor comum e reduz a tração deformante).",
      atRisk: ["Desvio secundário sob o gesso (radiografar AP + oblíqua interna a cada 5–7 dias por 3 semanas)"],
      figureId: "fratura-condilo-lateral-umero:incidencias",
    },
    {
      id: "percutanea",
      name: "Redução fechada e fixação percutânea (CRIF/CRPP)",
      indication: "Desvio de 2–4 mm (Jakob II / Song 3–4) com dobradiça cartilaginosa íntegra confirmada por artrografia.",
      interval: "Entrada percutânea pelo côndilo lateral, sob fluoroscopia, sem exposição; artrografia confirma redução e congruência articular.",
      atRisk: ["Redução articular insuficiente não visualizada (usar artrografia)", "Desvio residual > 2 mm — converter para aberta"],
      figureId: "fratura-condilo-lateral-umero:fixacao",
    },
    {
      id: "lateral-direta",
      name: "Via lateral direta (rasgo do extensor comum)",
      indication: "Padrão para a redução aberta: desvio ≥ 4 mm, rotação ou incongruência articular.",
      interval: "Incisão lateral centrada no côndilo; aproveitar o rasgo traumático da origem do extensor comum, desenvolvendo o plano ANTERIORMENTE entre braquiorradial/extensor radial longo do carpo e o tríceps. A cápsula anterior é aberta para ver a superfície articular.",
      atRisk: [
        "Suprimento vascular posterior do côndilo lateral — NÃO dissecar posteriormente (risco de necrose/fishtail)",
        "Nervo interósseo posterior (limitar a dissecção distal e a pronação forçada)",
        "Complexo colateral lateral (não desinserir a porção posterior)",
      ],
      figureId: "fratura-condilo-lateral-umero:fixacao",
    },
    {
      id: "kocher",
      name: "Intervalo de Kocher (ancôneo–extensor ulnar do carpo)",
      indication: "Alternativa em fraturas com componente posterior ou quando é necessária exposição mais ampla do capítulo.",
      interval: "Intervalo entre o ancôneo (nervo radial) e o extensor ulnar do carpo (NIP).",
      atRisk: [
        "Ligamento colateral ulnar lateral (instabilidade rotatória posterolateral se lesado)",
        "Nervo interósseo posterior",
        "Vascularização posterior do côndilo — manter a dissecção superficial e anterior",
      ],
      figureId: "fratura-condilo-lateral-umero:anatomia",
    },
    {
      id: "artrografia",
      name: "Artrografia intraoperatória (adjuvante)",
      indication: "Toda fratura de 2–4 mm e sempre que a superfície articular for indeterminada; RM em casos selecionados eletivos.",
      interval: "Punção lateral ('soft spot') ou posterolateral com contraste diluído; fluoroscopia em AP, perfil e oblíqua interna.",
      atRisk: ["Interpretação: contraste que atravessa o traço = superfície rota (indica redução aberta)"],
      figureId: "fratura-condilo-lateral-umero:artrografia",
    },
  ],

  technique: [
    {
      n: 1,
      title: "Exame e reconhecimento do padrão",
      detail:
        "Dor e edema focais sobre o côndilo lateral, equimose lateral sobre a região da cabeça do rádio, dor à extensão resistida do punho. Diferente da supracondiliana, o edema é lateral e localizado, e o comprometimento neurovascular é raro — a fratura 'parece leve', e é justamente essa aparência benigna que produz o diagnóstico tardio.",
      figureId: "fratura-condilo-lateral-umero:anatomia",
      tips: ["Derrame articular com equimose lateral em criança de 5–7 anos = fratura do côndilo lateral até prova em contrário."],
      pitfalls: ["Rotular como 'contusão' ou 'pronação dolorosa' e liberar sem radiografia adequada."],
    },
    {
      n: 2,
      title: "Radiografar corretamente: AP, perfil e OBLÍQUA INTERNA",
      detail:
        "As três incidências são obrigatórias. A oblíqua interna põe o traço posterolateral de perfil e revela o desvio verdadeiro; é a projeção com maior confiabilidade intra e interobservador para medir milímetros. Medir sempre o MAIOR desvio observado em qualquer incidência. A oblíqua externa acrescenta pouco.",
      figureId: "fratura-condilo-lateral-umero:incidencias",
      figureVariant: "obliqua",
      tips: ["Uma fratura 'de 1 mm' no AP é rotineiramente uma fratura de 4 mm na oblíqua interna."],
      pitfalls: ["Classificar e decidir a conduta apenas pelo AP — erro que gera a maioria das pseudartroses."],
    },
    {
      n: 3,
      title: "Classificar e definir o limiar",
      detail:
        "Aplicar Milch (estabilidade do cotovelo), Jakob/Weiss (conduta) e, se desejado, Song (estabilidade fina). Fixar a decisão pelo desvio: < 2 mm → gesso; 2–4 mm com dobradiça íntegra → percutânea; ≥ 4 mm, rotação ou incongruência → aberta. Não é emergência: a cirurgia pode ser programada com segurança.",
      figureId: "fratura-condilo-lateral-umero:jakob",
      figureVariant: "II",
      tips: ["Protocolo baseado no desvio, validado prospectivamente, entrega resultados funcionais normativos em todos os tipos."],
      pitfalls: ["Confiar cegamente nos estágios 2 vs 3 de Song — a concordância entre observadores é modesta."],
    },
    {
      n: 4,
      title: "Via não operatória: gesso e vigilância obsessiva",
      detail:
        "Gesso axilopalmar a 90° com antebraço em supinação/neutro por 4–6 semanas. Radiografias (AP + oblíqua interna) em 5–7 dias, e novamente com 2 e 3 semanas. Qualquer desvio > 2 mm no seguimento converte a conduta para fixação.",
      figureId: "fratura-condilo-lateral-umero:incidencias",
      figureVariant: "obliqua",
      tips: ["A supinação relaxa a origem do extensor comum e reduz a tração deformante sobre o fragmento."],
      pitfalls: ["Fazer o controle apenas em AP — o desvio secundário passa despercebido sob o gesso."],
    },
    {
      n: 5,
      title: "Artrografia e decisão fechada × aberta",
      detail:
        "Sob anestesia, injetar contraste diluído pelo 'soft spot' lateral e avaliar a cartilagem articular em AP, perfil e oblíqua. Contraste que NÃO atravessa o traço = dobradiça íntegra → tentar redução fechada. Contraste que atravessa, com degrau articular = superfície rota → redução aberta.",
      figureId: "fratura-condilo-lateral-umero:artrografia",
      figureVariant: "intacta",
      tips: ["A artrografia responde à única pergunta que a radiografia não responde: como está a cartilagem?"],
      pitfalls: ["Fixar percutaneamente uma fratura com degrau articular oculto — congruência ruim não remodela."],
    },
    {
      n: 6,
      title: "Redução: fechada ou aberta pela via lateral",
      detail:
        "Fechada: cotovelo em extensão com varo (relaxa os extensores), pressão direta sobre o côndilo, antebraço em supinação; confirmar em oblíqua interna. Aberta: via lateral pelo rasgo do extensor comum, desenvolvendo o plano ANTERIORMENTE; expor a superfície articular pela cápsula anterior, limpar o hematoma e reduzir a articulação sob visão direta. Jamais dissecar a face posterior do côndilo — é por ali que entra a vascularização do fragmento.",
      figureId: "fratura-condilo-lateral-umero:fixacao",
      figureVariant: "orif",
      tips: ["O critério de redução é a congruência da SUPERFÍCIE ARTICULAR, não o alinhamento da metáfise."],
      pitfalls: ["Dissecção posterior → necrose da tróclea lateral e deformidade em rabo de peixe.", "Persistir na redução fechada em fragmento rodado (Jakob III / Song 5)."],
    },
    {
      n: 7,
      title: "Fixação",
      detail:
        "Dois a três fios lisos divergentes do côndilo lateral à metáfise/coluna medial, bicorticais, com ampla separação no foco — fios lisos podem atravessar a fise com segurança. Alternativa: parafuso canulado parcialmente rosqueado perpendicular ao traço, poupando a fise, com ou sem fio antirrotacional; dá compressão e permite gesso mais curto, mas exige retirada sob nova anestesia.",
      figureId: "fratura-condilo-lateral-umero:fixacao",
      figureVariant: "percutanea",
      tips: ["Divergência ampla dos fios = estabilidade rotacional; um fio isolado deixa o fragmento girar.", "Parafuso: menos infecção superficial e menos rigidez em meta-análise; fios: menos morbidade de retirada."],
      pitfalls: ["Fios paralelos ou muito próximos — perda de redução e desvio rotacional.", "Rosca do parafuso cruzando o traço (perde a compressão) ou transfixando a fise."],
    },
    {
      n: 8,
      title: "Confirmação final e imobilização",
      detail:
        "Repetir a fluoroscopia em AP, perfil e oblíqua interna: desvio residual deve ser ≤ 2 mm e a superfície articular congruente. Gesso axilopalmar a 90° com antebraço neutro. Reparar o rasgo do extensor comum na redução aberta.",
      figureId: "fratura-condilo-lateral-umero:incidencias",
      figureVariant: "obliqua",
      tips: ["Documentar a oblíqua interna pós-fixação — é nela que um desvio residual aparece."],
      pitfalls: ["Aceitar como 'boa' uma redução conferida só em AP."],
    },
  ],

  postop: {
    immobilization:
      "Gesso axilopalmar com cotovelo a 90° e antebraço em supinação/neutro (conservador) ou neutro (pós-fixação), por 4–6 semanas. A consolidação é característicamente mais lenta que a da supracondiliana — não retirar os fios cedo demais.",
    weightBearing:
      "Membro superior sem carga durante a imobilização. Retorno a atividades livres, esportes de contato e educação física apenas após consolidação radiográfica completa e recuperação da ADM, tipicamente entre 8 e 12 semanas.",
    rehab: [
      { window: "0–3 sem", weightBearing: "Sem carga", focus: "Imobilização; elevação; mobilização de ombro, punho e dedos. Se conduta incruenta: radiografias AP + oblíqua interna a cada 5–7 dias para flagrar desvio secundário" },
      { window: "3–6 sem", weightBearing: "Sem carga", focus: "Aguardar sinais de consolidação; retirada dos fios habitualmente entre 4 e 6 semanas (mais tarde que na supracondiliana), quando há ponte óssea no traço" },
      { window: "6–10 sem", weightBearing: "Progressiva", focus: "Mobilização ativa de flexo-extensão e prono-supinação; a maioria das crianças recupera a ADM sem fisioterapia formal. Evitar mobilização passiva forçada" },
      { window: "10 sem–1 ano", weightBearing: "Livre após consolidação", focus: "Retorno esportivo; documentar ângulo de carregamento e ADM comparativos" },
    ],
    followup:
      "Radiografias até a consolidação completa (AP + oblíqua interna). Depois, seguimento prolongado — idealmente anual e, nos casos com desvio inicial importante, pseudartrose ou necrose, até a maturidade esquelética. O que se vigia: consolidação e retardo de consolidação, esporão lateral (quase universal e benigno — avisar a família de antemão), ângulo de carregamento (valgo progressivo), deformidade em rabo de peixe e função do nervo ulnar. A paralisia ulnar tardia pode surgir anos após a lesão e o paciente já ter recebido alta.",
  },

  complications: [
    {
      name: "Pseudartrose",
      detail:
        "A complicação assinatura desta fratura e praticamente exclusiva dela no cotovelo infantil. Nasce da conjunção fatal de traço intra-articular banhado em líquido sinovial (que impede o calo), tração contínua do extensor comum e — na origem de quase todos os casos — desvio subestimado ou não tratado. O fragmento migra progressivamente em proximal e lateral, gerando valgo. Em série multicêntrica de longo prazo (63 pacientes, seguimento médio de 7 anos), o desvio inicial e o tempo desde a lesão associaram-se de forma estatisticamente significativa à função final — embora o efeito seja pequeno e todos os pacientes tratados tenham alcançado ADM e MEPS excelentes, ao custo de 16,7% de necrose avascular.",
      prevention: "Medir o desvio na oblíqua interna; fixar acima de 2 mm; radiografar seriadamente as fraturas tratadas com gesso.",
    },
    {
      name: "Retardo de consolidação",
      detail:
        "Frequente e distinto da pseudartrose: o traço permanece visível além de 6–8 semanas, mas com fixação estável evolui para união. Em coorte prospectiva ocorreu em ~10% das fraturas fixadas com fios, sem relação com o tipo de fratura; parte exigiu reoperação com parafuso.",
      prevention: "Fixação estável com fios divergentes ou parafuso; não retirar a fixação antes de haver ponte óssea.",
    },
    {
      name: "Cúbito valgo e paralisia ulnar tardia",
      detail:
        "Consequência da pseudartrose com migração do fragmento ou de parada de crescimento lateral. O valgo progressivo estira cronicamente o nervo ulnar atrás do epicôndilo medial e produz neuropatia que pode se manifestar anos ou décadas depois — daí 'tardia'. Trata-se de sequela evitável, quase sempre rastreável a uma fratura inicialmente subvalorizada.",
      prevention: "Prevenir a pseudartrose. Seguimento do ângulo de carregamento até a maturidade; osteotomia valgizante corretiva e/ou transposição/descompressão do ulnar quando sintomática.",
    },
    {
      name: "Deformidade em rabo de peixe (fishtail)",
      detail:
        "Defeito central em cunha entre tróclea e capítulo por necrose avascular da porção lateral da tróclea, cuja vascularização entra pela face posterior do côndilo lateral. Pode ser assintomática por anos e depois cursar com dor, bloqueio e corpos livres.",
      prevention: "NUNCA dissecar a face posterior do côndilo lateral na redução aberta; manter todo o acesso anterior e lateral.",
    },
    {
      name: "Esporão lateral / hipercrescimento",
      detail:
        "Alargamento e proeminência da metáfise lateral, presente em quase todas as fraturas — inclusive as tratadas incruentamente e as consolidadas perfeitamente. Estético e assintomático; pode acompanhar leve cúbito varo, também benigno.",
      prevention: "Não é evitável nem precisa ser tratado. Avisar a família ANTES: a proeminência que aparecerá não é sinal de falha do tratamento.",
    },
    {
      name: "Parada de crescimento fisária",
      detail: "Barra fisária no úmero distal por lesão da fise (SH IV) ou por fixação inadequada; pode gerar deformidade angular progressiva na criança pequena.",
      prevention: "Redução anatômica; usar fios lisos ao atravessar a fise; posicionar a rosca do parafuso fora da fise.",
    },
    {
      name: "Rigidez do cotovelo",
      detail: "Perda de flexo-extensão, mais provável após redução aberta, imobilização prolongada ou fratura negligenciada. Em meta-análise, a limitação de ADM foi significativamente mais frequente com fios do que com parafuso (RR 3,75).",
      prevention: "Mobilização ativa precoce após a retirada da fixação; evitar mobilização passiva forçada.",
    },
    {
      name: "Infecção do trajeto dos fios",
      detail: "Complicação da fixação percutânea com fios exteriorizados; geralmente superficial e resolvida com a retirada do fio e antibiótico oral. Foi significativamente mais frequente com fios do que com parafusos (RR 5,52) em meta-análise.",
      prevention: "Cuidado do trajeto; considerar parafuso ou fios sepultados em fatores de risco.",
    },
    {
      name: "Instabilidade do cotovelo (Milch II)",
      detail: "Perda da crista lateral da tróclea permite translação lateral da ulna, com subluxação ou luxação associada à fratura.",
      prevention: "Reconhecer o padrão Milch II; restaurar a anatomia da tróclea e fixar com estabilidade.",
    },
  ],

  evidence: [
    {
      id: "song-2008",
      claim:
        "Estudo prospectivo (63 fraturas instáveis) que criou a classificação em 5 estágios com base no grau de desvio e no padrão em quatro incidências, com algoritmo de tratamento: 13/17 estágios 3 reduziram a ≤ 1 mm e 30/40 estágios 4 a ≤ 2 mm por método fechado, sem necrose, pseudartrose, consolidação viciosa ou parada fisária.",
      takeaway:
        "A redução fechada com fixação interna resolve a maioria das fraturas desviadas instáveis; se o desvio residual passar de 2 mm, converter para redução aberta.",
      level: "II",
      studyType: "Estudo clínico prospectivo",
      era: "classico",
      citation: {
        authors: "Song KS, Kang CH, Min BW, Bae KC, Cho CH, Lee JH",
        title: "Closed reduction and internal fixation of displaced unstable lateral condylar fractures of the humerus in children",
        journal: "J Bone Joint Surg Am",
        year: 2008,
        pmid: "19047713",
        doi: "10.2106/JBJS.G.01227",
        url: "https://doi.org/10.2106/JBJS.G.01227",
      },
    },
    {
      id: "nazareth-2020",
      claim:
        "Primeiro estudo prospectivo de um protocolo de tratamento baseado no desvio (55 crianças): tipo I < 2 mm gesso, tipo II 2–4 mm redução fechada e fixação percutânea, tipo III > 4 mm redução aberta e fixação. Sem diferença entre os tipos na taxa de retardo de consolidação (6–13%, p = 0,85) e resultados do PODCI em 1 ano equivalentes aos dados normativos em todos os domínios.",
      takeaway:
        "O desvio radiográfico é um guia válido para a conduta: aplicado o limiar correto, todos os tipos alcançam resultado funcional normal com complicações comparáveis.",
      level: "II",
      studyType: "Coorte prospectiva (nível II)",
      era: "atual",
      citation: {
        authors: "Nazareth A, VandenBerg CD, Sarkisova N, Goldstein RY, Andras LM, Lightdale-Miric NR, Pace JL, Skaggs DL",
        title: "Prospective Evaluation of a Treatment Protocol Based on Fracture Displacement for Pediatric Lateral Condyle Humerus Fractures: A Preliminary Study",
        journal: "J Pediatr Orthop",
        year: 2020,
        pmid: "31834242",
        doi: "10.1097/BPO.0000000000001491",
        url: "https://doi.org/10.1097/BPO.0000000000001491",
      },
    },
    {
      id: "bland-2018",
      claim:
        "Revisão radiográfica de 60 pacientes por 3 observadores: a confiabilidade da medida do desvio foi alta (ICC intraobservador 0,96; interobservador 0,90) e, entre as incidências, a OBLÍQUA INTERNA foi a mais confiável para medir o desvio, enquanto a oblíqua externa pouco acrescentou. Nas fraturas com desvio < 5 mm, o desacordo interobservador foi de 6,6% com corte de 2 mm e de 22,2% com corte de 1 mm.",
      takeaway:
        "Medir o desvio na oblíqua interna: é a projeção reprodutível o bastante para sustentar um limiar de 2 mm — mas não um limiar de 1 mm.",
      level: "III",
      studyType: "Estudo de confiabilidade radiográfica (nível III)",
      era: "atual",
      citation: {
        authors: "Bland DC, Pennock AT, Upasani VV, Edmonds EW",
        title: "Measurement Reliability in Pediatric Lateral Condyle Fractures of the Humerus",
        journal: "J Pediatr Orthop",
        year: 2018,
        pmid: "29917010",
        doi: "10.1097/BPO.0000000000001200",
        url: "https://doi.org/10.1097/BPO.0000000000001200",
      },
    },
    {
      id: "cho-2023",
      claim:
        "Meta-análise (1 ECR + 3 coortes retrospectivas; 240 pacientes — 118 fios, 122 parafusos) em fraturas desviadas: sem diferença nos resultados clínicos pelos critérios de Hardacre (p = 0,54), porém risco significativamente maior de infecção (RR 5,52; IC 95% 1,42–21,48) e de limitação da ADM (RR 3,75; IC 95% 1,54–9,18) no grupo dos fios de Kirschner.",
      takeaway:
        "O parafuso reduz infecção superficial e rigidez em relação aos fios, ao custo de uma segunda anestesia para retirada — decisão legítima nos dois sentidos.",
      level: "II",
      studyType: "Revisão sistemática e meta-análise",
      era: "atual",
      citation: {
        authors: "Cho YJ, Kang SH, Kang MH",
        title: "K-wire versus screws in the fixation of lateral condyle fracture of humerus in pediatrics: a systematic review and meta-analysis",
        journal: "BMC Musculoskelet Disord",
        year: 2023,
        pmid: "37573303",
        doi: "10.1186/s12891-023-06780-5",
        url: "https://doi.org/10.1186/s12891-023-06780-5",
      },
    },
    {
      id: "adulkasem-2024",
      claim:
        "Coorte retrospectiva multicêntrica de pseudartrose do côndilo lateral (63 pacientes de 8 centros, idade média 7,3 anos, seguimento médio de 7 anos): 60 tratados cirurgicamente, todas as pseudartroses consolidaram com normalização do ângulo úmero-ulnar e MEPS/ADM excelentes; a necrose avascular ocorreu em 16,7%. O desvio inicial (β = −0,88; p = 0,010) e o tempo desde a lesão (β = −0,09; p = 0,010) foram fatores estatisticamente associados à função final.",
      takeaway:
        "A pseudartrose é recuperável com bons resultados a longo prazo, mas ao preço de ~17% de necrose avascular — o desvio inicial e o tempo até o tratamento pesam; prevenir continua sendo muito melhor que resgatar.",
      level: "III",
      studyType: "Coorte retrospectiva multicêntrica",
      era: "atual",
      citation: {
        authors: "Adulkasem N, Lewsirirat S, Adulyanukosol V, et al.",
        title: "Long-term outcome of nonunion of the lateral humeral condyle fracture in children: a multicentre retrospective study",
        journal: "Int Orthop",
        year: 2024,
        pmid: "38597940",
        doi: "10.1007/s00264-024-06180-x",
        url: "https://doi.org/10.1007/s00264-024-06180-x",
      },
    },
  ],

  pearls: [
    "Segunda fratura mais comum do cotovelo infantil — e a primeira em processos por negligência diagnóstica.",
    "A oblíqua interna é obrigatória: ela mede o desvio real e é a incidência mais reprodutível.",
    "Fisária E intra-articular: não remodela e não perdoa — congruência articular é inegociável.",
    "Milch I = Salter-Harris IV (estável); Milch II = Salter-Harris II (instável) — o número engana.",
    "Crista lateral da tróclea íntegra = cotovelo estável; rota = pode subluxar.",
    "Limiares: < 2 mm gesso · 2–4 mm com dobradiça íntegra percutânea · > 4 mm ou incongruente ORIF.",
    "Na dúvida sobre a cartilagem, faça artrografia — é a pergunta que a radiografia não responde.",
    "Vascularização entra por POSTERIOR: dissecção posterior = necrose e rabo de peixe.",
    "Consolida devagar (4–6 semanas) — os fios saem mais tarde que na supracondiliana.",
    "Não é emergência: adiar além de 24 h não piora o resultado funcional.",
    "Antebraço em supinação relaxa o extensor comum e diminui a tração deformante.",
    "Esporão lateral é quase universal e benigno: avise a família antes que ela o descubra.",
    "Paralisia ulnar tardia aparece anos depois — o seguimento vai muito além da consolidação.",
  ],

  pitfalls: [
    "Medir o desvio só no AP: é o erro que fabrica pseudartroses.",
    "Chamar de 'contusão' o cotovelo com equimose lateral e derrame em criança de 5–7 anos.",
    "Tratar com gesso e não radiografar seriadamente (AP + oblíqua interna) nas 3 primeiras semanas.",
    "Fixar percutaneamente sem artrografia uma fratura de 2–4 mm com degrau articular oculto.",
    "Dissecar a face posterior do côndilo lateral na redução aberta — necrose da tróclea.",
    "Insistir na redução fechada de um fragmento rodado (Jakob III / Song 5).",
    "Colocar fios paralelos ou pouco separados — perda de redução e rotação do fragmento.",
    "Cruzar a fise com a rosca do parafuso ou deixar a rosca atravessando o traço (perde a compressão).",
    "Retirar a fixação no calendário da supracondiliana, antes da ponte óssea.",
    "Dar alta na consolidação e não rastrear valgo progressivo e neuropatia ulnar tardia.",
  ],

  figures: [
    { id: "fratura-condilo-lateral-umero:anatomia", kind: "diagram", caption: "Úmero distal imaturo em AP: colunas, capítulo, tróclea, crista lateral da tróclea, fise e a origem do extensor comum que traciona o fragmento.", alt: "Anatomia do úmero distal da criança com a crista lateral da tróclea e a placa de crescimento em destaque." },
    { id: "fratura-condilo-lateral-umero:milch", variant: "I", kind: "diagram", caption: "Milch I — traço lateral à crista da tróclea (Salter-Harris IV); crista íntegra, cotovelo estável.", alt: "Traço de fratura passando lateralmente à crista da tróclea." },
    { id: "fratura-condilo-lateral-umero:milch", variant: "II", kind: "diagram", caption: "Milch II — traço até o ápice troclear (Salter-Harris II); crista vai com o fragmento, cotovelo pode subluxar.", alt: "Traço de fratura atravessando a crista da tróclea até seu ápice." },
    { id: "fratura-condilo-lateral-umero:jakob", variant: "I", kind: "diagram", caption: "Jakob I — desvio < 2 mm com dobradiça cartilaginosa íntegra.", alt: "Fratura do côndilo lateral sem desvio significativo." },
    { id: "fratura-condilo-lateral-umero:jakob", variant: "II", kind: "diagram", caption: "Jakob II — desvio ≥ 2 mm sem rotação; superfície articular ainda alinhada.", alt: "Fragmento condilar lateral desviado sem rotação." },
    { id: "fratura-condilo-lateral-umero:jakob", variant: "III", kind: "diagram", caption: "Jakob III — desvio completo com rotação do fragmento; redução aberta.", alt: "Fragmento condilar lateral completamente desviado e rodado." },
    { id: "fratura-condilo-lateral-umero:song", variant: "1", kind: "diagram", caption: "Song 1 — traço para na parede lateral; estável.", alt: "Traço incompleto limitado à metáfise lateral." },
    { id: "fratura-condilo-lateral-umero:song", variant: "2", kind: "diagram", caption: "Song 2 — traço alcança a cartilagem com afastamento lateral < 2 mm; estabilidade indeterminada.", alt: "Traço que alcança a cartilagem articular sem afastamento significativo." },
    { id: "fratura-condilo-lateral-umero:song", variant: "3", kind: "diagram", caption: "Song 3 — afastamento lateral ≥ 2 mm que estreita em direção à articulação; dobradiça presente.", alt: "Afastamento lateral com dobradiça cartilaginosa articular preservada." },
    { id: "fratura-condilo-lateral-umero:song", variant: "4", kind: "diagram", caption: "Song 4 — afastamento uniforme (fratura completa) sem rotação.", alt: "Fratura completa com afastamento de largura uniforme." },
    { id: "fratura-condilo-lateral-umero:song", variant: "5", kind: "diagram", caption: "Song 5 — desvio completo com rotação; a redução fechada costuma falhar.", alt: "Fragmento completamente desviado e rodado." },
    { id: "fratura-condilo-lateral-umero:incidencias", variant: "ap", kind: "diagram", caption: "AP — o traço posterolateral fica de frente e o desvio aparente é enganosamente pequeno.", alt: "Projeção anteroposterior subestimando o desvio da fratura." },
    { id: "fratura-condilo-lateral-umero:incidencias", variant: "obliqua", kind: "diagram", caption: "Oblíqua interna — põe o traço de perfil e revela o desvio real; a incidência mais confiável para medir.", alt: "Projeção oblíqua interna revelando o desvio verdadeiro da fratura." },
    { id: "fratura-condilo-lateral-umero:artrografia", variant: "intacta", kind: "diagram", caption: "Artrografia com dobradiça cartilaginosa íntegra — o contraste não atravessa o traço; fixação percutânea.", alt: "Artrografia mostrando cartilagem articular contínua sobre a fratura." },
    { id: "fratura-condilo-lateral-umero:artrografia", variant: "rota", kind: "diagram", caption: "Artrografia com superfície articular rota — contraste atravessa e há degrau; redução aberta.", alt: "Artrografia mostrando descontinuidade da cartilagem articular com degrau." },
    { id: "fratura-condilo-lateral-umero:fixacao", variant: "percutanea", kind: "diagram", caption: "Fixação percutânea com 2–3 fios lisos divergentes; a zona posterior não é dissecada.", alt: "Fixação do côndilo lateral com fios de Kirschner divergentes." },
    { id: "fratura-condilo-lateral-umero:fixacao", variant: "orif", kind: "diagram", caption: "ORIF por via lateral com parafuso canulado perpendicular ao traço, poupando a fise, mais fio antirrotacional.", alt: "Fixação do côndilo lateral com parafuso canulado e fio antirrotacional." },
    { id: "fratura-condilo-lateral-umero:complicacoes", variant: "pseudartrose", kind: "diagram", caption: "Pseudartrose — bordas escleróticas e migração proximal do fragmento sob a tração dos extensores.", alt: "Pseudartrose do côndilo lateral com migração proximal do fragmento." },
    { id: "fratura-condilo-lateral-umero:complicacoes", variant: "valgo", kind: "diagram", caption: "Cúbito valgo progressivo estirando o nervo ulnar — a via para a paralisia ulnar tardia.", alt: "Cotovelo em valgo com estiramento crônico do nervo ulnar." },
    { id: "fratura-condilo-lateral-umero:complicacoes", variant: "fishtail", kind: "diagram", caption: "Deformidade em rabo de peixe (fishtail) — defeito central por necrose da tróclea lateral.", alt: "Defeito central em cunha no úmero distal por necrose avascular." },
    { id: "fratura-condilo-lateral-umero:complicacoes", variant: "esporao", kind: "diagram", caption: "Esporão lateral — hipercrescimento metafisário quase universal e benigno.", alt: "Proeminência metafisária lateral após consolidação." },
  ],

  meta: {
    lastReviewed: "2026-07-14",
    sources: [
      "Waters PM, Skaggs DL, Flynn JM. Rockwood and Wilkins' Fractures in Children, 10ª ed. (2024)",
      "Herring JA. Tachdjian's Pediatric Orthopaedics, 6ª ed. (2022)",
      "Weinstein SL, Flynn JM. Lovell and Winter's Pediatric Orthopaedics, 8ª ed. (2021)",
      "Abzug JM, Dua K, Kozin SH, Herman MJ. Current Concepts in the Treatment of Lateral Condyle Fractures in Children. J Am Acad Orthop Surg 2020;28(1):e9-e19. doi:10.5435/JAAOS-D-17-00815 (PMID 31268870)",
      "Zhu T, et al. The Integrity of Cartilage Hinge in Song 2/3 Lateral Humeral Condylar Fractures in Children. Orthop Surg 2022;14(8):1656-1662. doi:10.1111/os.13371 (PMID 35732433)",
      "Wang B, et al. Early versus delayed treatment of lateral condylar fracture of the humerus with >2 mm displacement in children. J Orthop Surg Res 2023;18(1):139. doi:10.1186/s13018-023-03619-6 (PMID 36829228)",
      "Bibliografia TEOT 2026",
    ],
    attribution: "Evidência recuperada do PubMed. Ver DOIs/PMIDs citados.",
    figureReference: "Rockwood and Wilkins' Fractures in Children, 10ª ed. (2024) / Tachdjian's Pediatric Orthopaedics 6ª",
  },
});
