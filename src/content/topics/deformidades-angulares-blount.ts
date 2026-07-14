import { defineTopic } from "../../types/topic";

export const topic = defineTopic({
  id: "op-joelho-deformidades-angulares-blount",
  slug: "deformidades-angulares-blount",
  regionId: "ortopedia-pediatrica",
  bone: "Joelho (criança)",
  injury: "Deformidade angular / tíbia vara",
  title: "Deformidades angulares e doença de Blount",
  subtitle:
    "Separar o varo e o valgo fisiológicos — que seguem a curva de Salenius e se resolvem sozinhos — da tíbia vara patológica, e intervir no tempo certo do crescimento.",
  laterality: null,
  status: "complete",
  overview:
    "O alinhamento frontal do joelho da criança não é estático: ele percorre uma trajetória previsível. O recém-nascido é varo, o varo se neutraliza por volta de 18 a 24 meses, o membro passa a valgo com pico entre 3 e 4 anos e converge para o alinhamento adulto de cerca de 5 a 7 graus de valgo por volta dos 7 anos. Essa curva, descrita por Salenius e Vankka, é a régua contra a qual toda queixa de perna torta deve ser lida. A maior parte das crianças levadas à consulta por geno varo ou geno valgo está simplesmente em um ponto normal dessa curva, e o tratamento é explicar a história natural aos pais e reavaliar.\n\nO problema clínico real é reconhecer a minoria em que a deformidade não é fisiológica. Os sinais de alerta são consistentes: deformidade unilateral ou francamente assimétrica, progressão em vez de melhora com a idade, baixa estatura ou desproporção, estigmas de raquitismo ou de displasia esquelética, thrust lateral do joelho na marcha e obesidade. A doença de Blount — tíbia vara por distúrbio de crescimento da fise tibial proximal posteromedial — é a principal causa idiopática desse grupo, com uma forma infantil (início antes dos 4 anos, frequentemente bilateral) e uma forma do adolescente (início após os 10 anos, mais unilateral e fortemente associada à obesidade).\n\nA ferramenta radiográfica de triagem é o ângulo metafiso-diafisário de Levine e Drennan. Valores abaixo de 11 graus tornam Blount improvável e acima de 16 graus o tornam provável; entre 11 e 16 graus existe uma zona cinzenta em que o ângulo isolado não decide e a evolução seriada, somada aos fatores clínicos de risco, é que dá o diagnóstico. Uma vez estabelecido o Blount, os estágios de Langenskiöld descrevem a deterioração progressiva da metáfise e da fise medial e orientam a agressividade do tratamento. O eixo terapêutico é o tempo: enquanto sobra crescimento e a fise medial está viva, a órtese (no lactente) e o crescimento guiado por placa em banda de tensão lateral podem corrigir sem osteotomia; quando há barra fisária, depressão do platô medial ou maturidade próxima, a osteotomia — aguda ou gradual — passa a ser necessária.",
  keyFacts: [
    { label: "Curva de Salenius", value: "Varo até ~18-24 meses; pico de valgo aos 3-4 anos; adulto (~5-7° valgo) aos ~7 anos" },
    { label: "Sinais de alerta", value: "Unilateral/assimétrico, progressivo, baixa estatura, thrust lateral, obesidade" },
    { label: "Blount infantil", value: "Início < 4 anos; frequentemente bilateral; torção tibial interna associada" },
    { label: "Blount do adolescente", value: "Início > 10 anos; unilateral; obesidade; deformidade femoral concomitante frequente" },
    { label: "Ângulo de Drennan", value: "< 11° improvável; 11-16° zona cinzenta; > 16° fortemente sugestivo" },
    { label: "Estadiamento", value: "Langenskiöld I-VI (VI = barra fisária medial)" },
    { label: "Tratamento", value: "Observação → órtese (< 3 anos, I-II) → crescimento guiado → osteotomia" },
  ],
  anatomy: {
    text:
      "A fise tibial proximal responde por cerca de 55 a 60% do crescimento da tíbia e é a estrutura sob a qual todo o problema se organiza. Sua região posteromedial é a mais vulnerável: é a porção menos coberta por musculatura, a que recebe a maior parcela de carga em compressão quando o membro está em varo e a que se encontra mais afastada do centro de rotação da marcha. A lei de Hueter-Volkmann fecha o círculo — compressão excessiva inibe o crescimento fisário e a distração o estimula. Um varo mecânico qualquer aumenta a compressão medial, o crescimento medial desacelera, o varo piora e a compressão medial cresce ainda mais. Esse círculo vicioso é o motor da doença de Blount, e explica por que obesidade e marcha precoce são fatores de risco tão consistentes.\n\nO alinhamento é lido em radiografia panorâmica dos membros inferiores, com carga, patelas voltadas para a frente — a rotação do membro falseia a medida. O eixo mecânico vai do centro da cabeça femoral ao centro do tornozelo e normalmente cruza o joelho perto do seu centro; o seu desvio (mechanical axis deviation, MAD) e a zona em que cruza o platô quantificam a deformidade. O ângulo tibial proximal medial (MPTA), normalmente próximo de 87 graus, localiza a deformidade na tíbia; o ângulo lateral distal femoral mecânico (mLDFA), normalmente próximo de 88 graus, denuncia a contribuição femoral, que é frequente no Blount do adolescente e é a razão pela qual tratar apenas a tíbia às vezes não neutraliza o eixo.\n\nNa tíbia vara estabelecida, a metáfise medial forma um bico descendente, a fise medial se inclina e, em estágios avançados, o platô medial deprime-se e uma barra óssea pode fechar precocemente a fise medial. A deformidade raramente é apenas coronal: quase sempre há torção tibial interna e, com frequência, procurvato (deformidade em recurvato/procurvato pela componente posteromedial) e discrepância de comprimento. O nervo fibular comum contorna o colo da fíbula e é a estrutura em risco em qualquer osteotomia tibial proximal ou correção aguda de varo, que o coloca sob tração.",
    figureIds: [
      "deformidades-angulares-blount:salenius",
      "deformidades-angulares-blount:alinhamento",
      "deformidades-angulares-blount:fisiologico-patologico",
    ],
  },
  classification: [
    {
      id: "fisiologico-patologico",
      name: "Fisiológico versus patológico",
      basis: "Idade, simetria, evolução no tempo, localização do ápice da deformidade e sinais sistêmicos.",
      note:
        "Não é uma classificação formal, mas é a decisão clínica mais importante e a que evita tanto o tratamento desnecessário quanto o diagnóstico tardio. O varo fisiológico tem curvatura difusa, sem ápice focal; o patológico tem ápice na metáfise tibial proximal.",
      types: [
        {
          code: "FIS",
          label: "Varo/valgo fisiológico",
          description:
            "Bilateral e simétrico, indolor, dentro da curva de Salenius para a idade, curvatura difusa envolvendo fêmur e tíbia, estatura normal, melhora documentada em consultas seriadas.",
          figureId: "deformidades-angulares-blount:fisiologico-patologico",
          figureVariant: "fisiologico",
        },
        {
          code: "PAT",
          label: "Varo/valgo patológico",
          description:
            "Unilateral ou assimétrico, progressivo ou fora da curva para a idade, ápice focal na metáfise tibial proximal, thrust lateral na marcha, baixa estatura ou estigmas de raquitismo/displasia.",
          figureId: "deformidades-angulares-blount:fisiologico-patologico",
          figureVariant: "patologico",
        },
      ],
    },
    {
      id: "drennan",
      name: "Ângulo metafiso-diafisário de Levine e Drennan (MDA)",
      basis:
        "Ângulo entre a linha que une os bicos metafisários medial e lateral da tíbia proximal e a perpendicular ao eixo longitudinal da diáfise tibial, medido em AP com carga e patelas anteriores.",
      note:
        "É triagem, não diagnóstico. Feldman e Schoenecker mostraram médias de 9° no varo fisiológico e 19° no Blount, mas 37% dos membros fisiológicos tinham 11° ou mais e a taxa de erro era relevante na faixa de 9 a 16°. Use-o em conjunto com os fatores de risco clínicos e com radiografias seriadas.",
      types: [
        {
          code: "< 11°",
          label: "Faixa fisiológica provável",
          description:
            "Blount improvável; observação com reavaliação clínica e radiográfica. Praticamente todos os casos de Blount têm MDA de 11° ou mais.",
          figureId: "deformidades-angulares-blount:drennan",
          figureVariant: "fisiologico",
        },
        {
          code: "11-16°",
          label: "Zona cinzenta",
          description:
            "Sobreposição entre fisiológico e patológico. A decisão vem da progressão em radiografias seriadas e dos fatores de risco (obesidade, marcha precoce, assimetria, instabilidade ligamentar, thrust lateral).",
          figureId: "deformidades-angulares-blount:drennan",
          figureVariant: "blount",
        },
        {
          code: "> 16°",
          label: "Fortemente sugestivo de Blount",
          description:
            "Alta probabilidade de tíbia vara infantil; justifica tratamento ativo (órtese na criança pequena) em vez de observação isolada.",
          figureId: "deformidades-angulares-blount:drennan",
          figureVariant: "blount",
        },
      ],
    },
    {
      id: "langenskiold",
      name: "Estágios de Langenskiöld",
      basis:
        "Alterações radiográficas progressivas da metáfise e da fise tibial proximal medial na tíbia vara infantil.",
      note:
        "Correlaciona-se com idade e com prognóstico: quanto mais avançado o estágio e mais velha a criança, menor a chance de resolução e maior a de recidiva. Reprodutibilidade apenas moderada nos estágios intermediários — use-a como gradiente de gravidade, não como número absoluto.",
      types: [
        {
          code: "I",
          label: "Estágio I",
          description:
            "Irregularidade e alargamento da metáfise medial, com bico metafisário discreto. Comum antes dos 3 anos e ainda potencialmente reversível.",
          figureId: "deformidades-angulares-blount:langenskiold",
          figureVariant: "i",
        },
        {
          code: "II",
          label: "Estágio II",
          description:
            "Depressão em cunha da metáfise medial, com bico bem definido. Ainda com bom potencial de resolução espontânea ou com órtese em criança pequena.",
          figureId: "deformidades-angulares-blount:langenskiold",
          figureVariant: "ii",
        },
        {
          code: "III",
          label: "Estágio III",
          description:
            "Degrau metafisário medial mais profundo, em degrau franco; a epífise medial começa a se deformar. Resolução espontânea torna-se improvável.",
          figureId: "deformidades-angulares-blount:langenskiold",
          figureVariant: "iii",
        },
        {
          code: "IV",
          label: "Estágio IV",
          description:
            "A epífise medial preenche o degrau metafisário; a fise medial está acentuadamente inclinada. Deformidade estabelecida, com indicação cirúrgica.",
          figureId: "deformidades-angulares-blount:langenskiold",
          figureVariant: "iv",
        },
        {
          code: "V",
          label: "Estágio V",
          description:
            "Epífise medial dividida por uma fenda (aspecto de epífise dupla), com o platô medial deprimido e a superfície articular incongruente.",
          figureId: "deformidades-angulares-blount:langenskiold",
          figureVariant: "v",
        },
        {
          code: "VI",
          label: "Estágio VI",
          description:
            "Barra óssea medial com fechamento fisário precoce; o crescimento guiado deixa de ser opção e há risco de recidiva e discrepância progressivas.",
          figureId: "deformidades-angulares-blount:langenskiold",
          figureVariant: "vi",
        },
      ],
    },
    {
      id: "forma-clinica",
      name: "Formas clínicas da doença de Blount",
      basis: "Idade de início dos sintomas e do desvio.",
      note:
        "A separação clássica em infantil e do adolescente ainda organiza o raciocínio, mas o tratamento moderno é guiado mais pelo crescimento remanescente, pela integridade da fise e pela magnitude do desvio do que pela idade em si.",
      types: [
        {
          code: "INF",
          label: "Infantil (< 4 anos)",
          description:
            "Frequentemente bilateral, com torção tibial interna e instabilidade ligamentar associadas; segue os estágios de Langenskiöld e é a forma em que a órtese tem papel.",
          figureId: "deformidades-angulares-blount:langenskiold",
          figureVariant: "ii",
        },
        {
          code: "JUV",
          label: "Juvenil (4-10 anos)",
          description:
            "Forma intermediária, de comportamento mais próximo do adolescente; a órtese não tem papel e o crescimento guiado ou a osteotomia são as opções.",
          figureId: "deformidades-angulares-blount:crescimento-guiado",
        },
        {
          code: "ADO",
          label: "Do adolescente (> 10 anos)",
          description:
            "Geralmente unilateral, fortemente associada à obesidade; deformidade menos grave na tíbia, porém com componente femoral em varo frequente e menos crescimento restante para corrigir.",
          figureId: "deformidades-angulares-blount:alinhamento",
          figureVariant: "varo",
        },
      ],
    },
  ],
  indications: {
    operative: [
      "Doença de Blount confirmada com deformidade progressiva apesar de observação ou órtese adequadas.",
      "Criança acima de 3-4 anos com tíbia vara estabelecida (Langenskiöld III ou mais), em que a órtese já não tem papel.",
      "Desvio do eixo mecânico persistente com crescimento remanescente: crescimento guiado por placa em banda de tensão lateral como primeira linha, desde que a fise esteja aberta e sem barra.",
      "Falha, rebote ou correção insuficiente do crescimento guiado, sobretudo em adolescentes obesos com desvio grave do eixo mecânico.",
      "Barra fisária medial (Langenskiöld VI), depressão do platô medial (V-VI) ou maturidade esquelética próxima: osteotomia (± epifisiodese/elevação do platô).",
      "Deformidade multiplanar grave (varo + torção interna + procurvato) e/ou discrepância de comprimento: correção gradual com fixador externo.",
      "Varo femoral associado no Blount do adolescente que impede a neutralização do eixo apenas com correção tibial.",
    ],
    nonOperative: [
      "Varo ou valgo dentro da curva de Salenius para a idade, bilateral, simétrico e sem sinais de alerta: orientação dos pais e reavaliação clínica.",
      "Varo com MDA abaixo de 11°, sem fatores de risco: observação com reavaliação a cada 3-6 meses até os 4 anos.",
      "Blount infantil precoce (criança em marcha, tipicamente abaixo de 3 anos, Langenskiöld I-II): órtese KAFO, idealmente iniciada cedo e usada durante a marcha.",
      "Deformidade angular de causa metabólica (raquitismo) ou sindrômica: tratar a doença de base antes de qualquer correção mecânica.",
      "Perda de peso e manejo das comorbidades da obesidade em paralelo a qualquer estratégia, cirúrgica ou não.",
    ],
    decisionNotes:
      "A primeira decisão é diagnóstica, não terapêutica: a criança está na curva de Salenius ou fora dela? Abaixo dos 2 anos, o varo é a norma e radiografia raramente é necessária na ausência de sinais de alerta. Quando a radiografia é feita, o MDA classifica em três faixas — abaixo de 11° observe, acima de 16° trate ativamente, e entre 11 e 16° deixe a evolução seriada decidir, ponderada pelos fatores de risco clínicos.\n\nA segunda decisão é temporal. Enquanto sobra crescimento e a fise medial está aberta e sem barra, existe a possibilidade de modular o crescimento — a órtese explora esse potencial no lactente e o crescimento guiado o explora com muito mais confiabilidade a partir dos 4 anos. Quando a fise fecha medialmente, quando o platô medial deprime ou quando a maturidade se aproxima, o crescimento deixa de ser aliado e a osteotomia se torna a única forma de corrigir.\n\nA terceira decisão é anatômica: onde está a deformidade? Medir MPTA e mLDFA separa a contribuição tibial da femoral. No Blount do adolescente, o varo femoral é comum, e ignorá-lo produz correção tibial adequada com eixo mecânico ainda em varo. Por fim, obesidade grave é o preditor mais consistente de falha em todas as modalidades — no crescimento guiado, associa-se a falha de implante e a correção incompleta, e deve ser explicitada no consentimento como parte da conversa sobre expectativa.",
  },
  approaches: [
    {
      id: "observacao",
      name: "Observação orientada pela curva de Salenius",
      indication:
        "Varo ou valgo compatível com a idade, bilateral, simétrico, sem sinais de alerta e sem progressão.",
      interval:
        "Consulta com medida do intervalo intercondilar (varo) ou intermaleolar (valgo), documentação fotográfica e reavaliação a cada 3-6 meses. Radiografia panorâmica com carga apenas se houver assimetria, progressão, baixa estatura ou idade incompatível com a curva. Educar a família de que a maioria das pernas tortas se corrige sozinha até os 7 anos é parte central do tratamento.",
      atRisk: [
        "Falsa segurança em criança obesa que anda cedo, em que o Blount pode estar começando",
        "Perder a janela da órtese ao observar além dos 3 anos um Blount infantil",
        "Deixar de investigar raquitismo ou displasia esquelética na criança de baixa estatura",
      ],
      figureId: "deformidades-angulares-blount:salenius",
    },
    {
      id: "ortese-kafo",
      name: "Órtese joelho-tornozelo-pé (KAFO) valgizante",
      indication:
        "Blount infantil precoce, criança deambulando, tipicamente abaixo de 3 anos, Langenskiöld I-II, com MDA acima de 16° ou entre 9 e 16° com fator de risco.",
      interval:
        "Órtese com hastes medial e lateral e articulação de joelho livre, aplicando força de três pontos valgizante durante a marcha. Uso diurno com carga; o objetivo é descomprimir a fise medial e romper o círculo de Hueter-Volkmann. Reavaliação a cada 3-4 meses com radiografia; ausência de melhora em 12 meses ou progressão indica falha. Sem papel comprovado após os 3-4 anos ou nos estágios avançados.",
      atRisk: [
        "Obesidade e instabilidade ligamentar, que são os preditores de falha da órtese",
        "Início tardio da órtese, que reduz muito a chance de sucesso",
        "Baixa adesão em criança pequena e desconforto/lesão de pele",
      ],
      figureId: "deformidades-angulares-blount:ortese",
    },
    {
      id: "crescimento-guiado",
      name: "Crescimento guiado — placa em banda de tensão lateral (hemiepifisiodese temporária)",
      indication:
        "Tíbia vara com crescimento remanescente, fise aberta e sem barra irressecável, em qualquer idade a partir da falha da órtese até a proximidade da maturidade.",
      interval:
        "Placa extraperiosteal de dois orifícios com um parafuso epifisário e um metafisário, colocada lateralmente sobre a fise tibial proximal, funcionando por princípio de banda de tensão e não por compressão fisária. O lado lateral vira dobradiça e a fise medial, ainda viva, valgiza o membro progressivamente. Se houver varo femoral associado, considerar placa femoral distal lateral no mesmo tempo, sobretudo no adolescente. Retirar o implante ao neutralizar o eixo e vigiar o rebote.",
      atRisk: [
        "Barra fisária medial ou maturidade esquelética — contraindicações absolutas",
        "Falha mecânica do implante (quebra ou migração de parafuso), mais frequente em obesos e em construtos de dois parafusos",
        "Rebote do varo após a retirada do implante, exigindo repetir o procedimento",
        "Hipercorreção em valgo se a retirada for tardia",
        "Nervo fibular comum na dissecção lateral proximal",
      ],
      figureId: "deformidades-angulares-blount:crescimento-guiado",
    },
    {
      id: "osteotomia-aguda",
      name: "Osteotomia tibial proximal valgizante e derrotativa (correção aguda)",
      indication:
        "Deformidade estabelecida com pouco crescimento remanescente, barra fisária, ou falha do crescimento guiado, com desvio moderado e corrigível em um tempo.",
      interval:
        "Osteotomia distal à tuberosidade anterior da tíbia, associada a osteotomia da fíbula em nível mais distal, corrigindo o varo, a torção interna e o procurvato. Sobrecorrigir para 5-10° de valgo, especialmente na criança pequena, porque a fise medial doente tende a recidivar. Fixação com placa, fios cruzados ou fixador externo. Fasciotomia profilática dos compartimentos deve ser considerada — a correção aguda tensiona o nervo fibular comum e eleva a pressão compartimental.",
      atRisk: [
        "Nervo fibular comum: lesão por tração na correção aguda ou por dissecção no colo da fíbula",
        "Síndrome compartimental, sobretudo em correções grandes e agudas",
        "Recidiva do varo pela persistência do distúrbio fisário medial",
        "Perda de correção e consolidação viciosa, mais frequentes em obesos",
      ],
      figureId: "deformidades-angulares-blount:osteotomia",
    },
    {
      id: "correcao-gradual",
      name: "Correção gradual com fixador externo (Ilizarov / hexápode)",
      indication:
        "Deformidade multiplanar grave, obesidade importante, discrepância de comprimento associada ou necessidade de correção maior do que a segura em um tempo agudo.",
      interval:
        "Osteotomia proximal com montagem circular ou hexápode e correção progressiva ao longo de semanas, permitindo ajuste fino do varo, da torção e do comprimento, com carga precoce. Reduz o risco neurovascular da correção aguda e permite alongamento simultâneo. Nos estágios V-VI com platô medial deprimido, associar a osteotomia dupla de elevação do platô medial para restaurar a congruência articular antes ou junto com a correção do eixo.",
      atRisk: [
        "Infecção do trajeto dos pinos e intolerância prolongada ao fixador",
        "Rigidez do joelho e do tornozelo durante a correção",
        "Correção incompleta ou recidiva por erro de planejamento do ápice (CORA)",
        "Sobrecarga do platô medial elevado com necrose do fragmento",
      ],
      figureId: "deformidades-angulares-blount:osteotomia",
    },
  ],
  technique: [
    {
      n: 1,
      title: "Situar a criança na curva de Salenius",
      detail:
        "Determinar a idade, medir o intervalo intercondilar ou intermaleolar e comparar o alinhamento observado com a trajetória normal: varo até 18-24 meses, valgo máximo aos 3-4 anos, alinhamento adulto aos ~7 anos. Um varo aos 15 meses e um valgo aos 3 anos e meio são normais e exigem explicação aos pais, não tratamento. Documentar a medida para que a próxima consulta possa demonstrar melhora.",
      figureId: "deformidades-angulares-blount:salenius",
      tips: [
        "Fotografia clínica padronizada em cada consulta torna a progressão (ou a melhora) objetiva",
        "Antes dos 2 anos, o varo é a norma — radiografia raramente é necessária sem sinais de alerta",
        "Um valgo que piora depois dos 4 anos foge da curva e merece investigação",
      ],
      pitfalls: [
        "Tratar o que é fisiológico e submeter a criança a órtese ou radiografias desnecessárias",
        "Tranquilizar de forma automática sem checar simetria, estatura e progressão",
      ],
    },
    {
      n: 2,
      title: "Procurar ativamente os sinais de alerta",
      detail:
        "Rastrear: deformidade unilateral ou assimétrica; progressão documentada; baixa estatura ou desproporção (percentil de altura, envergadura); estigmas de raquitismo (alargamento de punhos, rosário costal, fronte olímpica); thrust lateral do joelho na marcha; torção tibial interna acentuada; obesidade e história de marcha precoce; história familiar de displasia esquelética. Qualquer um deles muda o raciocínio de história natural para investigação, com radiografia panorâmica com carga e, quando indicado, rastreio metabólico (cálcio, fósforo, fosfatase alcalina, 25-OH-vitamina D, PTH).",
      figureId: "deformidades-angulares-blount:fisiologico-patologico",
      figureVariant: "patologico",
      tips: [
        "Varo fisiológico tem curvatura difusa; Blount tem ápice focal na metáfise tibial proximal",
        "Thrust lateral na marcha é um dos sinais clínicos mais específicos de Blount",
        "Deformidade angular com baixa estatura é raquitismo ou displasia até prova em contrário",
      ],
      pitfalls: [
        "Atribuir a Blount uma deformidade que é raquitismo e operar sem tratar a doença de base",
        "Ignorar a assimetria porque a criança é obesa e o exame físico é difícil",
      ],
    },
    {
      n: 3,
      title: "Medir corretamente: radiografia panorâmica com carga, patelas anteriores",
      detail:
        "Obter panorâmica dos membros inferiores em ortostase, com as patelas voltadas para a frente — a torção tibial interna do Blount tende a rodar o membro e falsear todas as medidas. Traçar o eixo mecânico do centro da cabeça femoral ao centro do tornozelo, quantificar o MAD e a zona em que cruza o joelho, e medir MPTA (normal ~87°) e mLDFA (normal ~88°) para separar a contribuição tibial da femoral. Só então medir o ângulo metafiso-diafisário de Drennan.",
      figureId: "deformidades-angulares-blount:alinhamento",
      figureVariant: "varo",
      tips: [
        "Posicionar pelas patelas, não pelos pés — o pé roda com a torção tibial",
        "MPTA localiza a deformidade na tíbia; mLDFA denuncia o componente femoral",
        "No adolescente, medir o fêmur é obrigatório: o varo femoral é frequente e muda o plano",
      ],
      pitfalls: [
        "Radiografia deitada ou sem carga, que subestima sistematicamente a deformidade",
        "Membro rodado, tornando MDA e MPTA não confiáveis",
      ],
    },
    {
      n: 4,
      title: "Aplicar o ângulo de Drennan como triagem, não como veredito",
      detail:
        "Medir o ângulo entre a linha que une os bicos metafisários medial e lateral e a perpendicular ao eixo longitudinal da diáfise tibial. Abaixo de 11°, Blount é improvável e a observação é adequada. Acima de 16°, é fortemente sugestivo e justifica tratamento ativo. Entre 11 e 16°, aceitar a ambiguidade: repetir em 3-4 meses e decidir pela progressão e pelos fatores de risco. Lembrar que cerca de um terço dos membros com varo fisiológico tem MDA de 11° ou mais.",
      figureId: "deformidades-angulares-blount:drennan",
      figureVariant: "blount",
      tips: [
        "A reprodutibilidade do MDA é boa entre observadores treinados, em imagem digital",
        "A tendência temporal do MDA vale mais que qualquer medida isolada",
        "Usar a borda lateral do córtex ou o centro da diáfise como eixo dá resultados equivalentes",
      ],
      pitfalls: [
        "Diagnosticar Blount só porque o MDA passou de 11°",
        "Descartar Blount com MDA de 14° em criança obesa com thrust lateral e assimetria",
      ],
    },
    {
      n: 5,
      title: "Estadiar por Langenskiöld e decidir órtese versus cirurgia",
      detail:
        "Nos casos confirmados, estadiar a metáfise e a fise medial de I a VI. Criança abaixo de 3 anos em estágio I-II é a candidata à órtese KAFO valgizante, usada na marcha, com reavaliação radiográfica a cada 3-4 meses. Estágios III-IV, ou criança acima de 3-4 anos, saem do território da órtese. Estágios V-VI implicam depressão do platô medial e barra fisária, e mudam o objetivo de 'modular crescimento' para 'reconstruir anatomia'.",
      figureId: "deformidades-angulares-blount:langenskiold",
      figureVariant: "iii",
      tips: [
        "Órtese iniciada cedo, em criança magra e sem instabilidade ligamentar, é a que funciona",
        "Estágio VI (barra) contraindica crescimento guiado — procurar a barra em TC ou RM se houver dúvida",
        "A reprodutibilidade dos estágios intermediários é limitada: use como gradiente, não como dogma",
      ],
      pitfalls: [
        "Prolongar a órtese além de 12 meses sem melhora, perdendo tempo de crescimento",
        "Indicar crescimento guiado sem descartar barra fisária medial",
      ],
    },
    {
      n: 6,
      title: "Crescimento guiado: colocar a placa em banda de tensão lateral",
      detail:
        "Por incisão lateral pequena, identificar a fise tibial proximal sob fluoroscopia e posicionar a placa extraperiosteal de dois orifícios centrada sobre a fise, com um parafuso na epífise e outro na metáfise, divergentes. Não comprimir a fise: o construto funciona por banda de tensão. Considerar construto mais robusto (quatro parafusos) em adolescente obeso, no qual a falha mecânica do implante é frequente. Se houver varo femoral, avaliar placa femoral distal lateral no mesmo tempo — no Blount de início tardio, isso se associa a melhor correção do mLDFA e do eixo global; no de início precoce, a maioria dos fêmures corrige sozinha e a observação é razoável.",
      figureId: "deformidades-angulares-blount:crescimento-guiado",
      tips: [
        "Preservar o periósteo e não violar a fise com os parafusos",
        "Radiografia panorâmica seriada a cada 3 meses para acompanhar a correção do eixo",
        "Retirar a placa assim que o eixo neutralizar e avisar a família sobre o rebote",
      ],
      pitfalls: [
        "Parafuso transfisário, que produz epifisiodese definitiva em vez de temporária",
        "Insistir no crescimento guiado no obeso grave com desvio importante, em que a taxa de falha é alta",
        "Esquecer o fêmur e produzir tíbia corrigida com eixo mecânico ainda em varo",
      ],
    },
    {
      n: 7,
      title: "Osteotomia: escolher aguda ou gradual e planejar pelo ápice",
      detail:
        "Planejar a correção pelo ápice da deformidade (CORA), reconhecendo que o Blount é multiplanar: varo, torção tibial interna e frequentemente procurvato e encurtamento. Na correção aguda, osteotomizar distalmente à tuberosidade anterior da tíbia, associar osteotomia da fíbula em nível mais distal e sobrecorrigir para 5-10° de valgo. Considerar fasciotomia profilática e vigilância neurovascular estrita — o nervo fibular comum é a estrutura mais ameaçada. Deformidades grandes, multiplanares ou com discrepância favorecem a correção gradual com fixador externo, que permite ajuste fino e carga precoce. Nos estágios V-VI com platô medial deprimido, associar a osteotomia de elevação do platô para restaurar a congruência.",
      figureId: "deformidades-angulares-blount:osteotomia",
      figureVariant: "valgizante",
      tips: [
        "Sobrecorrigir: a fise medial doente continua doente e o varo tende a recidivar",
        "Corrigir a torção interna no mesmo tempo — ela é parte da deformidade, não um detalhe",
        "Correção gradual reduz o risco neurovascular quando a magnitude é grande",
      ],
      pitfalls: [
        "Corrigir agudamente um varo grande e provocar paralisia do fibular ou síndrome compartimental",
        "Osteotomia proximal demais, ameaçando a fise e a tuberosidade",
        "Corrigir só o plano coronal e deixar a criança com torção interna sintomática",
      ],
    },
    {
      n: 8,
      title: "Seguir até a maturidade: recidiva, rebote e discrepância",
      detail:
        "Independentemente da modalidade, o distúrbio fisário medial pode persistir e a deformidade recidivar com o crescimento. Manter radiografia panorâmica com carga a cada 6-12 meses até a maturidade esquelética. Após crescimento guiado, vigiar o rebote nos primeiros 12-24 meses após a retirada do implante — se ocorrer, repetir o procedimento enquanto houver fise aberta. Vigiar a discrepância de comprimento, especialmente nos estágios avançados e após fechamento fisário precoce, e tratar em paralelo a obesidade, que é o fator modificável mais consistentemente associado à falha.",
      figureId: "deformidades-angulares-blount:alinhamento",
      figureVariant: "neutro",
      tips: [
        "Recidiva não é fracasso definitivo: repetir o crescimento guiado é simples e não impede osteotomia futura",
        "Epifisiodese contralateral ou completa pode ser necessária para equalizar comprimento",
        "Tratar a obesidade é parte do tratamento ortopédico, não uma recomendação acessória",
      ],
      pitfalls: [
        "Dar alta antes da maturidade esquelética e perder a recidiva",
        "Deixar de rastrear a discrepância nos estágios V-VI",
      ],
    },
  ],
  postop: {
    immobilization:
      "Observação e órtese: sem imobilização — a KAFO é usada durante a marcha, com joelho livre, e o membro permanece móvel. Crescimento guiado: sem imobilização; curativo simples, movimento livre e retorno rápido às atividades. Osteotomia aguda: imobilização com gesso inguinopodálico ou órtese conforme a fixação, por 4-8 semanas, com vigilância neurovascular e compartimental estrita nas primeiras 48 horas. Correção gradual: o próprio fixador é a imobilização; iniciar a distração/correção após o período de latência e manter mobilização ativa de joelho e tornozelo desde o início.",
    weightBearing:
      "Órtese KAFO: carga total, obrigatoriamente — a órtese só funciona sob carga, pois é a marcha que gera a força de três pontos valgizante. Crescimento guiado: carga total imediata conforme conforto, sem restrição. Osteotomia aguda: carga protegida por 6-8 semanas, progredindo com sinais radiográficos de consolidação. Correção gradual com fixador: carga precoce e progressiva, estimulando a formação do regenerado; o obeso exige montagem robusta justamente para permitir carga.",
    rehab: [
      {
        window: "0-2 semanas (pós-osteotomia)",
        weightBearing: "Descarga ou toque; carga precoce com fixador circular",
        focus:
          "Vigilância neurovascular do nervo fibular comum e da pressão compartimental; controle de dor e edema; mobilização de tornozelo e dedos; cuidado do trajeto dos pinos.",
      },
      {
        window: "2-8 semanas",
        weightBearing: "Progressiva conforme fixação e consolidação",
        focus:
          "Correção gradual ativa nos fixadores; recuperação da amplitude do joelho; marcha assistida; radiografias periódicas para conferir o eixo e o regenerado.",
      },
      {
        window: "2-6 meses",
        weightBearing: "Total conforme consolidação",
        focus:
          "Retirada do fixador ou do gesso; fortalecimento de quadríceps e glúteos; reeducação da marcha; conferência do eixo mecânico em panorâmica com carga.",
      },
      {
        window: "Crescimento guiado — a cada 3 meses",
        weightBearing: "Livre",
        focus:
          "Panorâmica com carga para acompanhar a valgização progressiva; retirar a placa ao neutralizar o eixo, evitando hipercorreção; checar integridade do implante.",
      },
      {
        window: "Até a maturidade esquelética",
        weightBearing: "Livre",
        focus:
          "Vigilância de recidiva do varo, rebote pós-retirada de implante, discrepância de comprimento e torção residual; manejo continuado da obesidade.",
      },
    ],
    followup:
      "Radiografia panorâmica dos membros inferiores com carga e patelas anteriores a cada 6-12 meses até a maturidade esquelética, com reavaliação mais frequente (a cada 3 meses) durante o crescimento guiado e nos 12-24 meses seguintes à retirada do implante, período de maior risco de rebote. Documentar MAD, MPTA e mLDFA em cada avaliação. Rastrear discrepância de comprimento por escanometria nos estágios avançados e após fechamento fisário precoce. A alta só é dada com o esqueleto maduro e o eixo estável.",
  },
  complications: [
    {
      name: "Recidiva do varo",
      detail:
        "É a complicação mais característica: o distúrbio da fise medial persiste após a correção e o varo retorna com o crescimento. Mais provável quanto mais avançado o estágio de Langenskiöld, mais velha a criança na cirurgia e maior o IMC.",
      prevention:
        "Sobrecorrigir para 5-10° de valgo na osteotomia da criança pequena; seguir até a maturidade; repetir o crescimento guiado quando a fise ainda estiver aberta.",
    },
    {
      name: "Rebote após retirada do implante de crescimento guiado",
      detail:
        "Perda progressiva da correção nos meses seguintes à retirada da placa, especialmente em crianças com bastante crescimento remanescente.",
      prevention:
        "Informar a família previamente; vigiar com panorâmicas a cada 3-6 meses após a retirada; repetir o procedimento se houver fise aberta.",
    },
    {
      name: "Lesão do nervo fibular comum",
      detail:
        "Paralisia por tração na correção aguda de varo importante ou por dissecção junto ao colo da fíbula, com pé caído e perda sensitiva dorsal.",
      prevention:
        "Preferir correção gradual em deformidades grandes; osteotomizar a fíbula em nível mais distal; considerar descompressão profilática; vigilância neurológica pós-operatória rigorosa.",
    },
    {
      name: "Síndrome compartimental",
      detail:
        "Elevação da pressão compartimental após osteotomia proximal da tíbia com correção aguda, sobretudo em correções amplas e em obesos.",
      prevention:
        "Fasciotomia profilática nos casos de risco; correção gradual; monitorização clínica seriada nas primeiras 48 horas.",
    },
    {
      name: "Falha mecânica do implante de crescimento guiado",
      detail:
        "Quebra ou migração de parafuso e soltura da placa, mais frequentes em adolescentes obesos e em construtos de dois parafusos.",
      prevention:
        "Construto mais robusto (quatro parafusos) nos pacientes de alto IMC; revisão precoce ao detectar falha; consentimento explícito quanto à taxa de falha.",
    },
    {
      name: "Barra fisária e fechamento precoce medial",
      detail:
        "Ponte óssea medial (Langenskiöld VI) que fecha a fise, gera recidiva progressiva do varo e discrepância de comprimento.",
      prevention:
        "Tratar o Blount antes que a fise se comprometa; investigar barra com TC/RM antes de indicar crescimento guiado; planejar epifisiodese completa ou alongamento quando estabelecida.",
    },
    {
      name: "Depressão do platô medial e incongruência articular",
      detail:
        "Nos estágios V-VI, o platô medial deprime-se e a articulação torna-se incongruente, com instabilidade e risco de artrose precoce do compartimento medial.",
      prevention:
        "Reconhecer e tratar precocemente; nos casos estabelecidos, associar osteotomia de elevação do platô medial à correção do eixo.",
    },
    {
      name: "Discrepância de comprimento e torção residual",
      detail:
        "Encurtamento do membro afetado e torção tibial interna persistente, geradoras de claudicação e de queixa funcional mesmo com o eixo coronal corrigido.",
      prevention:
        "Corrigir a torção no mesmo tempo da correção coronal; escanometria seriada; planejar epifisiodese contralateral ou alongamento conforme a idade.",
    },
    {
      name: "Hipercorreção em valgo",
      detail:
        "Valgo excessivo por retirada tardia do implante de crescimento guiado ou por sobrecorreção exagerada na osteotomia.",
      prevention:
        "Panorâmicas a cada 3 meses durante o crescimento guiado; retirar a placa ao neutralizar o eixo; se ocorrer, placa medial reversa enquanto houver crescimento.",
    },
    {
      name: "Tratamento desnecessário de deformidade fisiológica",
      detail:
        "Exposição a radiografias, órteses e ansiedade familiar em criança que estava simplesmente em um ponto normal da curva de Salenius.",
      prevention:
        "Conhecer a curva; documentar simetria e progressão; reservar imagem para as crianças com sinais de alerta.",
    },
  ],
  evidence: [
    {
      id: "salenius-1975-curva",
      claim:
        "Em série radiográfica de crianças normais acompanhadas do nascimento à maturidade, o ângulo tibiofemoral evolui de varo ao nascimento para neutro por volta dos 18-24 meses, atinge pico de valgo entre 3 e 4 anos e converge para cerca de 5-7° de valgo por volta dos 7 anos.",
      takeaway:
        "O alinhamento frontal do joelho tem uma trajetória normal definida com a idade; é essa curva, e não a impressão dos pais, que define se um varo ou valgo é fisiológico.",
      level: "IV",
      studyType: "Estudo observacional radiográfico de coorte normal",
      era: "classico",
      citation: {
        authors: "Salenius P, Vankka E",
        title: "The development of the tibiofemoral angle in children.",
        journal: "J Bone Joint Surg Am",
        year: 1975,
        pmid: "1112851",
      },
    },
    {
      id: "feldman-1993-mda",
      claim:
        "Comparando 179 membros com curvatura fisiológica e 32 com Blount documentado, o ângulo metafiso-diafisário médio foi de 9 ± 3,9° no grupo fisiológico e 19 ± 5,7° no Blount (p < 0,0000001); a chance de erro (falso-positivo ou falso-negativo) foi superior a 5% na faixa entre 9 e 16°, e 37% dos membros fisiológicos tinham ângulo de pelo menos 11°.",
      takeaway:
        "O ângulo de Drennan é útil como triagem, mas não deve ser critério isolado: a zona de 11-16° é ambígua e exige radiografias seriadas e ponderação dos fatores de risco clínicos.",
      level: "III",
      studyType: "Estudo diagnóstico comparativo (caso-controle radiográfico)",
      era: "classico",
      citation: {
        authors: "Feldman MD, Schoenecker PL",
        title: "Use of the metaphyseal-diaphyseal angle in the evaluation of bowed legs.",
        journal: "J Bone Joint Surg Am",
        year: 1993,
        pmid: "8245052",
        doi: "10.2106/00004623-199311000-00004",
      },
    },
    {
      id: "shinohara-2002-historia-natural",
      claim:
        "Em 46 membros de 29 pacientes com tíbia vara infantil e ângulo metafiso-diafisário maior que 11° acompanhados sem tratamento, 40 dos 46 resolveram espontaneamente (incluindo 18 dos 24 que estavam em estágio II-III de Langenskiöld, resolvidos até os 6 anos); não houve diferença na taxa de resolução entre os pacientes tratados com órtese e os não tratados, e nem o ângulo femorotibial nem o MDA permitiram prever a resolução antes dos 4 anos.",
      takeaway:
        "A história natural do varo com MDA elevado abaixo dos 4 anos é frequentemente favorável e nenhuma medida isolada prevê quem vai resolver — o que sustenta observação seriada até os 4 anos antes de partir para a osteotomia, e relativiza o benefício da órtese.",
      level: "IV",
      studyType: "Coorte observacional de história natural",
      era: "classico",
      citation: {
        authors: "Shinohara Y, Kamegaya M, Kuniyoshi K, Moriya H",
        title: "Natural history of infantile tibia vara.",
        journal: "J Bone Joint Surg Br",
        year: 2002,
        pmid: "11922370",
        doi: "10.1302/0301-620x.84b2.11821",
      },
    },
    {
      id: "raney-1998-ortese",
      claim:
        "Em 38 pacientes (60 tíbias) tratados com órtese por MDA maior que 16°, ou entre 9 e 16° com fator de risco clínico, a taxa de sucesso foi de 90% (86% no subgrupo com MDA acima de 16°); os fatores associados à falha foram instabilidade ligamentar, obesidade e início tardio da órtese.",
      takeaway:
        "A órtese tem papel no Blount infantil precoce quando indicada por critérios estritos e iniciada cedo; obesidade e instabilidade ligamentar são os preditores de falha e devem ser pesados na decisão.",
      level: "IV",
      studyType: "Série de casos retrospectiva",
      era: "classico",
      citation: {
        authors: "Raney EM, Topoleski TA, Yaghoubian R, Guidera KJ, Marshall JG",
        title: "Orthotic treatment of infantile tibia vara.",
        journal: "J Pediatr Orthop",
        year: 1998,
        pmid: "9746423",
        doi: "10.1097/00004694-199809000-00023",
      },
    },
    {
      id: "heflin-2016-crescimento-guiado",
      claim:
        "Em 17 pacientes (27 membros) com tíbia vara tratados com crescimento guiado por placa em banda de tensão lateral entre 1,8 e 15,1 anos, 21 membros (78%) normalizaram completamente o eixo mecânico em média 13,5 meses, sem complicações perioperatórias; houve falha de material em 3 e varo de rebote em 2, nenhum necessitando osteotomia no seguimento.",
      takeaway:
        "O crescimento guiado é opção de primeira linha razoável em qualquer idade com crescimento remanescente e sem barra fisária, é minimamente invasivo e a recidiva não impede repetir o procedimento nem a osteotomia futura.",
      level: "IV",
      studyType: "Série de casos retrospectiva",
      era: "atual",
      citation: {
        authors: "Heflin JA, Ford S, Stevens P",
        title: "Guided growth for tibia vara (Blount's disease).",
        journal: "Medicine (Baltimore)",
        year: 2016,
        pmid: "27741108",
        doi: "10.1097/MD.0000000000004951",
      },
    },
    {
      id: "coskun-2025-crescimento-guiado-grave",
      claim:
        "Em 32 pacientes (44 membros) juvenis e adolescentes com Blount tratados por crescimento guiado, a correção bem-sucedida do desvio do eixo mecânico ocorreu em 61%; o IMC médio foi significativamente maior entre as falhas (40,3 versus 33,5; p = 0,034), e o construto de dois parafusos teve risco relativo de 4,5 para falha mecânica do implante frente ao de quatro parafusos.",
      takeaway:
        "O crescimento guiado corrige até deformidades moderadas e graves em juvenis e adolescentes, mas com taxa de falha alta; obesidade grave é o preditor dominante e o construto mais robusto reduz a falha de implante.",
      level: "III",
      studyType: "Coorte retrospectiva comparativa",
      era: "atual",
      citation: {
        authors: "Coskun E, Bess LE, Bielski RJ",
        title: "The Outcomes of Guided Growth System in Juvenile and Adolescent Patients With Blount Disease.",
        journal: "J Pediatr Orthop",
        year: 2025,
        pmid: "41178588",
        doi: "10.1097/BPO.0000000000003149",
      },
    },
    {
      id: "walker-2023-femur-tibia-vara",
      claim:
        "Em 127 membros com tíbia vara tratados por placa em banda de tensão lateral, a deformidade femoral em varo era frequente; após placa femoral, o mLDFA médio caiu de 98,0° para 87,1°, com correção completa em 80%. Sem placa femoral, o varo femoral corrigiu espontaneamente em 73% dos casos de início precoce (< 7 anos), mas em apenas 39% dos de início tardio (≥ 8 anos).",
      takeaway:
        "A tíbia vara não é só da tíbia: medir o fêmur é obrigatório. No Blount de início tardio, o varo femoral raramente corrige sozinho e deve ser tratado junto; no de início precoce, observar o fêmur é razoável.",
      level: "III",
      studyType: "Coorte retrospectiva multicêntrica comparativa",
      era: "atual",
      citation: {
        authors: "Walker JL, Dueber DM, Scott AC, et al.",
        title: "Femoral Deformity in Tibia Vara and Its Response to Growth Modulation.",
        journal: "J Pediatr Orthop",
        year: 2023,
        pmid: "36791409",
        doi: "10.1097/BPO.0000000000002358",
      },
    },
  ],
  pearls: [
    "A curva de Salenius é a régua: varo até ~18-24 meses, pico de valgo aos 3-4 anos, adulto aos ~7 anos. A maioria das pernas tortas está normal.",
    "Varo fisiológico tem curvatura difusa; Blount tem ápice focal na metáfise tibial proximal — procure onde está o ápice.",
    "Os sinais de alerta são: unilateral/assimétrico, progressivo, baixa estatura, thrust lateral e obesidade. Qualquer um deles muda o raciocínio.",
    "MDA de Drennan: < 11° improvável, > 16° provável, 11-16° é zona cinzenta que só a evolução seriada resolve.",
    "Hueter-Volkmann explica tudo: compressão medial inibe a fise medial, o varo piora, a compressão aumenta. Quebrar esse ciclo é o objetivo.",
    "Radiografia panorâmica com carga e patelas para a frente — a torção tibial interna do Blount falseia qualquer medida em membro rodado.",
    "Meça o fêmur (mLDFA): no Blount do adolescente o varo femoral é comum e ignorá-lo deixa o eixo em varo apesar da tíbia corrigida.",
    "Enquanto há fise aberta e sem barra, o crescimento é aliado: prefira modular a osteotomizar.",
    "Ao osteotomizar criança pequena, sobrecorrija para 5-10° de valgo: a fise medial doente continua doente.",
    "Obesidade é o preditor de falha mais consistente em todas as modalidades — tratá-la é parte do tratamento ortopédico.",
  ],
  pitfalls: [
    "Tratar o que é fisiológico e submeter a criança a órtese, radiografia e ansiedade familiar desnecessárias.",
    "Diagnosticar Blount apenas porque o MDA passou de 11°, ignorando que ~1/3 dos membros fisiológicos alcança esse valor.",
    "Tranquilizar automaticamente sem checar simetria, estatura, progressão e thrust lateral.",
    "Chamar de Blount o que é raquitismo ou displasia esquelética e operar sem tratar a doença de base.",
    "Radiografia sem carga ou com o membro rodado, subestimando a deformidade e invalidando MPTA e MDA.",
    "Manter órtese além dos 3-4 anos ou por mais de 12 meses sem melhora, gastando crescimento útil.",
    "Indicar crescimento guiado sem descartar barra fisária medial (Langenskiöld VI).",
    "Colocar parafuso transfisário e transformar hemiepifisiodese temporária em epifisiodese definitiva.",
    "Corrigir agudamente um varo grande e provocar paralisia do nervo fibular comum ou síndrome compartimental.",
    "Corrigir só o plano coronal e deixar a criança com torção tibial interna sintomática.",
    "Dar alta antes da maturidade esquelética e perder a recidiva, o rebote ou a discrepância de comprimento.",
  ],
  figures: [
    {
      id: "deformidades-angulares-blount:salenius",
      caption:
        "Curva de Salenius e Vankka: evolução fisiológica do ângulo tibiofemoral do nascimento à maturidade, com o varo do lactente, o neutro por volta dos 18-24 meses, o pico de valgo aos 3-4 anos e o alinhamento adulto aos ~7 anos.",
      alt: "Gráfico do ângulo tibiofemoral em função da idade mostrando varo no lactente, valgo máximo aos 3-4 anos e alinhamento adulto aos 7 anos",
      kind: "diagram",
    },
    {
      id: "deformidades-angulares-blount:alinhamento",
      variant: "neutro",
      caption:
        "Alinhamento neutro: o eixo mecânico, do centro da cabeça femoral ao centro do tornozelo, cruza o centro do joelho.",
      alt: "Membro inferior em AP com eixo mecânico cruzando o centro do joelho",
      kind: "diagram",
    },
    {
      id: "deformidades-angulares-blount:alinhamento",
      variant: "varo",
      caption:
        "Geno varo: o joelho desvia lateralmente e o eixo mecânico passa medial ao seu centro, quantificado pelo desvio do eixo mecânico (MAD).",
      alt: "Membro inferior em geno varo com eixo mecânico medial ao centro do joelho e desvio do eixo mecânico assinalado",
      kind: "diagram",
    },
    {
      id: "deformidades-angulares-blount:alinhamento",
      variant: "valgo",
      caption:
        "Geno valgo: o joelho desvia medialmente e o eixo mecânico passa lateral ao seu centro.",
      alt: "Membro inferior em geno valgo com eixo mecânico lateral ao centro do joelho",
      kind: "diagram",
    },
    {
      id: "deformidades-angulares-blount:fisiologico-patologico",
      variant: "fisiologico",
      caption:
        "Varo fisiológico: curvatura suave e difusa ao longo de todo o osso, sem ápice definido; bilateral, simétrico e resolutivo com a idade.",
      alt: "Tíbia com curvatura difusa e suave representando varo fisiológico, sem ápice focal",
      kind: "diagram",
    },
    {
      id: "deformidades-angulares-blount:fisiologico-patologico",
      variant: "patologico",
      caption:
        "Varo patológico da doença de Blount: angulação abrupta com ápice focal (CORA) na metáfise tibial proximal, bico metafisário medial e thrust lateral na marcha.",
      alt: "Tíbia com angulação abrupta na metáfise proximal e ápice focal, representando varo patológico do Blount",
      kind: "diagram",
    },
    {
      id: "deformidades-angulares-blount:drennan",
      variant: "fisiologico",
      caption:
        "Ângulo metafiso-diafisário de Levine e Drennan em torno de 9°, típico do varo fisiológico: abaixo de 11°, a doença de Blount é improvável.",
      alt: "Medida do ângulo metafiso-diafisário da tíbia proximal em cerca de 9 graus, faixa fisiológica",
      kind: "diagram",
    },
    {
      id: "deformidades-angulares-blount:drennan",
      variant: "blount",
      caption:
        "Ângulo metafiso-diafisário em torno de 19°, com bico metafisário medial: acima de 16° é fortemente sugestivo de doença de Blount.",
      alt: "Medida do ângulo metafiso-diafisário da tíbia proximal em cerca de 19 graus com bico metafisário medial",
      kind: "diagram",
    },
    {
      id: "deformidades-angulares-blount:langenskiold",
      variant: "i",
      caption: "Langenskiöld I: irregularidade e alargamento da metáfise tibial medial, com bico discreto.",
      alt: "Tíbia proximal com irregularidade discreta da metáfise medial, estágio I de Langenskiöld",
      kind: "diagram",
    },
    {
      id: "deformidades-angulares-blount:langenskiold",
      variant: "ii",
      caption: "Langenskiöld II: depressão em cunha da metáfise medial, com bico bem definido.",
      alt: "Tíbia proximal com depressão em cunha da metáfise medial, estágio II de Langenskiöld",
      kind: "diagram",
    },
    {
      id: "deformidades-angulares-blount:langenskiold",
      variant: "iii",
      caption: "Langenskiöld III: degrau metafisário medial mais profundo; a resolução espontânea torna-se improvável.",
      alt: "Tíbia proximal com degrau metafisário medial profundo, estágio III de Langenskiöld",
      kind: "diagram",
    },
    {
      id: "deformidades-angulares-blount:langenskiold",
      variant: "iv",
      caption: "Langenskiöld IV: a epífise medial preenche o degrau e a fise medial está acentuadamente inclinada.",
      alt: "Tíbia proximal com epífise medial preenchendo o degrau metafisário, estágio IV de Langenskiöld",
      kind: "diagram",
    },
    {
      id: "deformidades-angulares-blount:langenskiold",
      variant: "v",
      caption: "Langenskiöld V: epífise medial dividida por uma fenda, com o platô medial deprimido e incongruente.",
      alt: "Tíbia proximal com epífise medial dupla e fenda articular, estágio V de Langenskiöld",
      kind: "diagram",
    },
    {
      id: "deformidades-angulares-blount:langenskiold",
      variant: "vi",
      caption:
        "Langenskiöld VI: barra óssea medial com fechamento fisário precoce — contraindica o crescimento guiado e prediz recidiva e discrepância.",
      alt: "Tíbia proximal com barra óssea medial e fise fechada, estágio VI de Langenskiöld",
      kind: "diagram",
    },
    {
      id: "deformidades-angulares-blount:ortese",
      caption:
        "Órtese joelho-tornozelo-pé (KAFO) valgizante no Blount infantil: força de três pontos aplicada durante a marcha para descomprimir a fise medial.",
      alt: "Órtese joelho-tornozelo-pé com hastes medial e lateral aplicando força de três pontos valgizante sobre uma tíbia vara",
      kind: "diagram",
    },
    {
      id: "deformidades-angulares-blount:crescimento-guiado",
      caption:
        "Crescimento guiado: placa extraperiosteal em banda de tensão sobre a fise tibial proximal lateral, que vira dobradiça enquanto a fise medial, livre, valgiza progressivamente o membro.",
      alt: "Placa em banda de tensão lateral com dois parafusos sobre a fise tibial proximal, com o lado medial livre para crescer",
      kind: "diagram",
    },
    {
      id: "deformidades-angulares-blount:osteotomia",
      variant: "valgizante",
      caption:
        "Osteotomia tibial proximal valgizante e derrotativa, distal à tuberosidade anterior da tíbia, com osteotomia da fíbula e sobrecorreção para 5-10° de valgo; o nervo fibular comum é a estrutura em risco.",
      alt: "Osteotomia tibial proximal valgizante com cunha de correção, osteotomia da fíbula e nervo fibular comum assinalado",
      kind: "diagram",
    },
    {
      id: "deformidades-angulares-blount:osteotomia",
      variant: "elevacao",
      caption:
        "Osteotomia dupla de elevação: elevação do platô medial deprimido (Langenskiöld V-VI) associada a osteotomia infratuberositária com correção gradual por fixador externo.",
      alt: "Osteotomia dupla com elevação do platô tibial medial deprimido e osteotomia infratuberositária para correção gradual",
      kind: "diagram",
    },
  ],
  meta: {
    lastReviewed: "2026-07-14",
    sources: [
      "SBOT. Edital TEOT 2026: Bibliografia para o Exame de Título de Ortopedia e Traumatologia (Ortopedia Pediátrica).",
      "Herring JA. Tachdjian's Pediatric Orthopaedics. 6th ed. Philadelphia: Elsevier; 2022.",
      "Weinstein SL, Flynn JM. Lovell and Winter's Pediatric Orthopaedics. 8th ed. Philadelphia: Wolters Kluwer; 2021.",
      "Waters PM, Skaggs DL, Flynn JM. Rockwood and Wilkins' Fractures in Children. 10th ed. Philadelphia: Wolters Kluwer; 2024.",
      "Hebert S, Lech O, et al. Ortopedia e Traumatologia: Princípios e Prática. 6ª ed. Porto Alegre: Artmed; 2025.",
    ],
    attribution:
      "Conteúdo original Revisortopedia; figuras esquemáticas originais, sem reprodução de material protegido.",
    figureReference:
      "Rockwood and Wilkins' Fractures in Children, 10ª ed. (2024) / Tachdjian's Pediatric Orthopaedics 6ª",
  },
});
