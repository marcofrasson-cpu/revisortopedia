import { defineTopic } from "../../types/topic";

export const topic = defineTopic({
  id: "op-quadril-coxa-vara",
  slug: "coxa-vara",
  regionId: "ortopedia-pediatrica",
  bone: "Quadril (criança)",
  injury: "Coxa vara",
  title: "Coxa vara do desenvolvimento",
  subtitle:
    "Redução do ângulo cervicodiafisário na criança: separar a forma congênita da do desenvolvimento e da adquirida, e deixar o ângulo epifisário de Hilgenreiner decidir entre observar e valgizar.",
  laterality: null,
  status: "complete",
  overview:
    "Coxa vara é a redução do ângulo cervicodiafisário (NSA) abaixo de 120° na criança — um achado radiográfico, não um diagnóstico. O primeiro movimento clínico é etiológico: a forma congênita já existe ao nascimento e vem acompanhada de encurtamento femoral, dentro do espectro da deficiência femoral focal proximal; a forma do desenvolvimento (infantil) tem quadril normal ao nascer e se manifesta entre a marcha independente e os 6 anos, por um defeito de ossificação endocondral do colo femoral medial; a forma adquirida é sequela de trauma, epifisiólise, necrose avascular, raquitismo, osteogênese imperfeita ou displasias ósseas. A criança típica da forma do desenvolvimento chega sem dor, com marcha de Trendelenburg — bilateral em cerca de metade dos casos, quando a marcha se torna anserina —, perda de abdução e rotação interna e discrepância de membros nos casos unilaterais.\n\nO valor da coxa vara como tópico de prova e de prática está em um único parâmetro: o ângulo epifisário de Hilgenreiner (HEA), medido entre a linha de Hilgenreiner e a linha da fise femoral proximal. Weinstein o introduziu justamente porque o NSA varia com a rotação do membro na radiografia e não prediz nada de forma confiável. O HEA prediz. Abaixo de 45° a deformidade tende a se corrigir espontaneamente e a conduta é observar; entre 45° e 60° existe uma zona cinzenta que exige radiografias seriadas; acima de 60° a progressão é a regra e a osteotomia valgizante está indicada. A lógica é mecânica e não estatística: quanto mais vertical a fise, maior a fração cisalhante da carga que a atravessa, e o cisalhamento agrava o varo, que verticaliza mais a fise — o círculo vicioso de Pauwels. A osteotomia valgizante existe para quebrar esse círculo, reconvertendo cisalhamento em compressão.\n\nO erro que domina a literatura não é indicar mal, é corrigir de menos. Séries com décadas de acompanhamento mostram recidiva de 30-70% após osteotomias tecnicamente bem executadas — e o fator que separa sucesso de recidiva é o HEA obtido na mesa, não a idade, o implante ou a etiologia. Corrigir para menos de 38-40° é o objetivo; parar em 45° é aceitar reoperação.",
  keyFacts: [
    { label: "Definição", value: "NSA < 120° na criança (normal ~135°, ~150° ao nascimento)" },
    { label: "Forma do desenvolvimento", value: "Quadril normal ao nascer; surge da marcha aos 6 anos; ~1:25.000" },
    { label: "Bilateralidade", value: "~30-50% na forma do desenvolvimento (marcha anserina)" },
    { label: "Radiografia", value: "Fragmento triangular ínfero-medial; imagem em \"Y invertido\"" },
    { label: "Parâmetro que decide", value: "Ângulo epifisário de Hilgenreiner (HEA)" },
    { label: "Limiares (Weinstein)", value: "< 45° observar · 45-60° zona cinzenta · > 60° operar" },
    { label: "Alvo cirúrgico", value: "HEA < 38-40° (idealmente 25-30°)" },
    { label: "Recidiva", value: "30-70% nas séries históricas; ~11% de perda de correção nas atuais" },
  ],
  anatomy: {
    text:
      "O fêmur proximal da criança nasce com NSA em torno de 150° e o reduz progressivamente até os ~135° do adulto. Esse remodelamento depende de duas fises que competem: a fise femoral proximal (capital), que faz crescer o colo em direção medial e superior, e a fise trocantérica, que faz crescer o trocânter maior. O equilíbrio entre elas define a arquitetura final. Na coxa vara do desenvolvimento, o osso endocondral do colo ínfero-medial é defeituoso e não ossifica: forma-se um segmento triangular metafisário delimitado, no plano coronal, pela fise verticalizada acima e por uma banda radiotransparente vertical abaixo — a clássica imagem em \"Y invertido\". O fragmento é patognomônico da forma do desenvolvimento e não aparece nas formas congênita ou adquirida.\n\nA consequência é mecânica e progressiva. Com o colo horizontalizado, a fise deixa de ser oblíqua e se aproxima da vertical. A carga corporal, que numa fise a 25° a atravessa predominantemente como compressão (que estabiliza), passa a atravessá-la predominantemente como cisalhamento (que desloca). O segmento medial não ossificado não resiste a esse cisalhamento, a epífise migra em varo, o HEA aumenta e o cisalhamento aumenta com ele: é o círculo vicioso que explica por que HEA > 60° praticamente não regride sozinho e por que HEA < 45° normalmente regride.\n\nO trocânter maior é o segundo protagonista. Como ele não acompanha a queda da cabeça, torna-se alto (high-riding): a origem ilíaca e a inserção trocantérica dos abdutores se aproximam, a musculatura fica encurtada e opera fora da sua relação comprimento-tensão ideal. O resultado não é uma alavanca curta — o offset até aumenta —, e sim um músculo insuficiente. Daí a marcha de Trendelenburg, que se soma ao encurtamento do membro nos casos unilaterais. Reestabelecer essa relação comprimento-tensão, e não apenas o ângulo, é parte do objetivo da osteotomia.",
    figureIds: [
      "coxa-vara:anatomia",
      "coxa-vara:defeito-colo",
      "coxa-vara:biomecanica",
    ],
  },
  classification: [
    {
      id: "etiologia",
      name: "Classificação etiológica",
      basis:
        "Momento de aparecimento e mecanismo causal — define o que precisa ser investigado e tratado além do ângulo.",
      note:
        "Este é o primeiro passo, e não uma formalidade: os limiares de HEA de Weinstein foram derivados da forma do desenvolvimento. Aplicá-los cegamente à coxa vara das displasias ósseas superestima o benefício da cirurgia, porque nessas a fise instável faz recidivar.",
      types: [
        {
          code: "Congênita",
          label: "Congênita (verdadeira)",
          description:
            "Presente ao nascimento, com colo curto e amplamente cartilaginoso e encurtamento femoral associado. Faz parte do espectro da deficiência femoral focal proximal (PFFD) e da hemimelia fibular — obriga a avaliar o membro inteiro, e não só o quadril.",
          figureId: "coxa-vara:etiologia",
          figureVariant: "congenita",
        },
        {
          code: "Desenvolvimento",
          label: "Do desenvolvimento (infantil)",
          description:
            "Quadril normal ao nascimento; a deformidade se manifesta entre a marcha independente e os 6 anos. Defeito de ossificação endocondral do colo medial com fragmento triangular e imagem em \"Y invertido\". Incidência ~1:25.000; bilateral em cerca de metade dos casos.",
          figureId: "coxa-vara:etiologia",
          figureVariant: "desenvolvimento",
        },
        {
          code: "Adquirida",
          label: "Adquirida (secundária)",
          description:
            "Sequela de fratura do colo femoral, epifisiólise, necrose avascular, doença de Perthes, osteogênese imperfeita, raquitismo, displasia fibrosa ou displasias ósseas. Corrigir o ângulo sem tratar a causa de base é receita para recidiva.",
          figureId: "coxa-vara:etiologia",
          figureVariant: "adquirida",
        },
      ],
    },
    {
      id: "hea-weinstein",
      name: "Ângulo epifisário de Hilgenreiner (HEA) — Weinstein",
      basis:
        "Ângulo entre a linha de Hilgenreiner (horizontal pelas cartilagens trirradiadas) e a linha da fise femoral proximal, na radiografia AP da bacia. Normal ≈ 25°.",
      note:
        "Weinstein criou o HEA precisamente porque o ângulo cervicodiafisário varia com a rotação do membro no momento da radiografia e não prediz progressão de forma reprodutível. O HEA estratifica prognóstico E define a magnitude da correção necessária. Quando a epífise capital ainda não ossificou (lactentes, displasias), o HEA não é mensurável: use o ângulo de Hilgenreiner-trocantérico de Oh, que usa o trocânter como referência e tem confiabilidade inter e intraobservador alta.",
      types: [
        {
          code: "< 45°",
          label: "Correção espontânea esperada",
          description:
            "Observar. A deformidade tende a se resolver com o crescimento, porque a fise ainda é suficientemente oblíqua para que a carga a comprima em vez de cisalhá-la. Radiografia anual até a resolução.",
          figureId: "coxa-vara:hea",
          figureVariant: "leve",
        },
        {
          code: "45-60°",
          label: "Zona cinzenta",
          description:
            "Observação ativa com radiografias seriadas a cada 4-6 meses. O comportamento é imprevisível: parte progride, parte estabiliza. É a trajetória do HEA ao longo do tempo — e não o valor isolado — que decide. Progressão documentada converte a indicação para cirúrgica.",
          figureId: "coxa-vara:hea",
          figureVariant: "limitrofe",
        },
        {
          code: "> 60°",
          label: "Progressão provável — osteotomia valgizante",
          description:
            "Indicação cirúrgica. O cisalhamento fisário domina a carga e o círculo vicioso está estabelecido; a resolução espontânea é excepcional. Operar antes dos 10 anos permite que o acetábulo remodele junto e dispense osteotomia pélvica na maioria dos casos.",
          figureId: "coxa-vara:hea",
          figureVariant: "grave",
        },
      ],
    },
  ],
  indications: {
    operative: [
      "HEA > 60° — progressão praticamente certa, independentemente da idade.",
      "Progressão documentada do HEA em radiografias seriadas, mesmo na zona cinzenta de 45-60°.",
      "NSA < 90-100° com perda funcional estabelecida.",
      "Marcha de Trendelenburg persistente com insuficiência abdutora clínica.",
      "Perda progressiva de abdução e rotação interna do quadril.",
      "Discrepância de membros sintomática atribuível ao varo do colo.",
      "Pseudartrose do colo femoral associada (a forma do desenvolvimento pode evoluir para não união do defeito medial).",
    ],
    nonOperative: [
      "HEA < 45° em criança assintomática — correção espontânea esperada; observar com radiografia anual.",
      "HEA 45-60° sem progressão documentada — radiografias seriadas a cada 4-6 meses até a definição da trajetória.",
      "Coxa vara leve das displasias ósseas com metáfise isolada, fise estável e boa morfologia da cabeça — costuma não exigir tratamento.",
      "Criança sem idade de marcha, na qual a história natural ainda não se declarou.",
      "Correção de causa metabólica de base (raquitismo) antes de qualquer decisão cirúrgica — o osso precisa estar mineralizado para segurar a correção.",
    ],
    decisionNotes:
      "A decisão tem três perguntas, nesta ordem. Primeira: qual é a etiologia? A forma congênita exige avaliar todo o membro (PFFD, hemimelia fibular) e planejar equalização; a adquirida exige tratar a causa — operar um raquitismo não tratado é planejar a recidiva; a do desenvolvimento é a que os limiares de Weinstein descrevem. Segunda: qual é o HEA? Menos de 45° observa, mais de 60° opera, e a faixa intermediária é uma decisão sobre a trajetória, não sobre o valor — por isso a radiografia seriada é conduta ativa, e não adiamento. Terceira: se for operar, quanto corrigir? Esta é a pergunta que a literatura mostra que mais se erra. A meta é HEA < 38-40°, com alvo prático em 25-30°, porque a hipercorreção é barata e a subcorreção custa uma reoperação.\n\nDuas ressalvas importam. Nas displasias ósseas com fise instável ou epífise não ossificada (espondiloepifisária congênita, espondilometafisária, Kniest), o prognóstico é reservado mesmo com cirurgia bem feita, e há argumento para adiar a osteotomia até HEA > 60° e estabilizar a fise no mesmo tempo cirúrgico. E a idade importa em duas direções opostas: corrigir e manter antes dos 10 anos permite que o acetábulo remodele e dispense osteotomia pélvica na maioria; mas operar muito cedo, abaixo de ~6,5 anos, associa-se a maior taxa de recidiva pelo crescimento residual — o que reforça a hipercorreção nos mais novos, e não o adiamento quando o HEA já passou de 60°.",
  },
  approaches: [
    {
      id: "vigilancia",
      name: "Vigilância radiográfica seriada (não operatória)",
      indication:
        "HEA < 45° em qualquer idade; HEA 45-60° sem progressão documentada. É conduta ativa: o objetivo é capturar a trajetória do HEA, não deixar o tempo passar.",
      interval:
        "Sem intervalo cirúrgico. Protocolo: radiografia AP da bacia em rotação neutra padronizada (patelas ao zênite), medindo HEA, NSA e ângulo cabeça-colo a cada 4-6 meses na zona cinzenta e anualmente abaixo de 45°.",
      atRisk: [
        "Perda da janela ideal (< 10 anos) se a progressão não for capturada a tempo",
        "Medidas não comparáveis se a rotação do membro não for padronizada entre exames",
        "Displasia acetabular secundária progressiva enquanto se observa",
      ],
      figureId: "coxa-vara:hea",
    },
    {
      id: "lateral-proximal",
      name: "Via lateral direta do fêmur proximal",
      indication:
        "Via de eleição para a osteotomia valgizante inter ou subtrocantérica com fixação interna (placa-lâmina, placa em T, placa DCP pré-moldada ou fios transfixantes).",
      interval:
        "Intervalo entre o trato iliotibial e o vasto lateral; elevação subperiostal do vasto lateral da sua origem no tubérculo do glúteo máximo, expondo a cortical lateral do fêmur proximal.",
      atRisk: [
        "Artérias perfurantes da femoral profunda ao emergir do septo intermuscular lateral — coagular antes de retrair",
        "Nervo femoral e feixe femoral, se a dissecção migrar anteromedialmente",
        "Fise trocantérica, se a fixação proximal for alta demais",
        "Fise femoral capital e suprimento retinacular, se o implante invadir o colo",
      ],
      figureId: "coxa-vara:osteotomia",
    },
    {
      id: "percutanea-fixador",
      name: "Osteotomia percutânea com fixador externo",
      indication:
        "Alternativa minimamente invasiva para deformidade multiplanar (varo + retroversão + slope posterior) e nos casos que exigem alongamento simultâneo por discrepância.",
      interval:
        "Múltiplas perfurações percutâneas na cortical lateral subtrocantérica através de miniincisão no vasto lateral, completando a osteotomia com osteótomo; montagem de fixador circular ou monolateral.",
      atRisk: [
        "Perfurantes da femoral profunda no trajeto dos pinos",
        "Infecção do trajeto dos pinos",
        "Perda de correção no fixador se a montagem não for estável",
        "Rigidez do joelho por transfixação do vasto lateral e do trato iliotibial",
      ],
      figureId: "coxa-vara:osteotomia",
    },
  ],
  technique: [
    {
      n: 1,
      title: "Medir o HEA e definir a correção antes de entrar no centro cirúrgico",
      detail:
        "Radiografia AP da bacia com rotação neutra padronizada (patelas ao zênite). Meça o HEA entre a linha de Hilgenreiner e a linha da fise. A correção necessária é aritmética: ângulo da cunha = HEA atual − HEA alvo (alvo 25-30°). Um HEA de 72° exige, portanto, cerca de 40-45° de valgização. Avalie também o perfil (slope posterior) e a versão, porque a coxa vara do desenvolvimento é tridimensional e inclui retroversão.",
      figureId: "coxa-vara:osteotomia",
      figureVariant: "planejamento",
      tips: [
        "Planejar pelo HEA, nunca pelo NSA — o NSA varia com a rotação do membro e não prediz recidiva.",
        "Se a epífise não estiver ossificada, use o ângulo de Hilgenreiner-trocantérico de Oh.",
        "Radiografia do membro inteiro se houver suspeita de forma congênita/PFFD.",
      ],
      pitfalls: [
        "Aceitar uma radiografia em rotação externa: ela mascara o varo e subestima a correção necessária.",
        "Planejar só o plano coronal e ignorar o slope posterior — a correção sai fora do plano verdadeiro da deformidade.",
      ],
    },
    {
      n: 2,
      title: "Posicionamento e acesso",
      detail:
        "Decúbito dorsal em mesa radiotransparente, com coxim sob a hemipelve. Fluoroscopia disponível para AP e perfil do quadril. Via lateral direta: incisão da ponta do trocânter maior distalmente, abertura do trato iliotibial e elevação do vasto lateral de posterior para anterior, expondo a cortical lateral subtrocantérica.",
      tips: [
        "Coagular as perfurantes na borda posterior antes de retrair o vasto — sangram mal e retraem para o septo.",
        "Conferir o perfil verdadeiro do quadril na fluoroscopia antes de qualquer corte.",
      ],
      pitfalls: [
        "Dissecar para medial e entrar em contato com o feixe femoral.",
        "Desperiostizar o colo à procura do fragmento — não há o que fazer nele e o suprimento retinacular está ali.",
      ],
    },
    {
      n: 3,
      title: "Posicionar o implante proximal antes de cortar",
      detail:
        "Introduzir a lâmina (placa-lâmina de ângulo alto), os fios de Kirschner do arranjo de Wagner ou a guia da placa em T no fragmento proximal, paralela à fise e distante dela, com o membro na posição que antecipa a correção. O implante proximal é o gabarito da correção: se ele estiver certo, o fêmur segue.",
      figureId: "coxa-vara:osteotomia",
      figureVariant: "planejamento",
      tips: [
        "Em criança pequena, o arranjo de Wagner com múltiplos fios de Kirschner funciona como placa-lâmina de ângulo alto sob medida.",
        "Fios transfixantes protegidos por gesso pelvipodálico evitam completamente o colo e a fise — opção simples e confiável nos menores.",
      ],
      pitfalls: [
        "Atravessar a fise capital com o implante — risco de epifisiodese e deformidade iatrogênica.",
        "Colocar a lâmina no fragmento proximal depois do corte: sem o corte, o fragmento é estável e o gabarito é confiável; depois, não.",
      ],
    },
    {
      n: 4,
      title: "Osteotomia valgizante com cunha de subtração lateral",
      detail:
        "Osteotomia inter ou subtrocantérica, em Y ou em V de base lateral, com a cunha calculada no passo 1. Subtrocantérica e intertrocantérica têm taxas de sucesso equivalentes na literatura (91% vs 94%) — a escolha é de familiaridade e de implante. Manter o corte distante da fise capital e do colo.",
      figureId: "coxa-vara:osteotomia",
      figureVariant: "planejamento",
      tips: [
        "Osteotomia em Y ou em V dá estabilidade rotacional intrínseca e facilita a compressão.",
        "Associar derrotação e flexão quando o slope posterior e a retroversão forem significativos.",
      ],
      pitfalls: [
        "Cunha menor que a planejada por medo de hipercorrigir — é o erro mais comum e o mais caro.",
        "Osteotomia alta demais, comprometendo a fise trocantérica.",
      ],
    },
    {
      n: 5,
      title: "Fechar a cunha, lateralizar o fragmento distal e fixar",
      detail:
        "Fechar a osteotomia levando o fragmento distal para valgo e lateralizando-o em relação ao fragmento proximal, para preservar o eixo mecânico e evitar offset negativo — preditor independente de recidiva. Fixar com placa-lâmina, placa em T, DCP pré-moldada ou fios transfixantes, sob compressão.",
      figureId: "coxa-vara:osteotomia",
      figureVariant: "correcao",
      tips: [
        "A fixação interna rígida dispensa imobilização externa e permite mobilização precoce.",
        "Fixador externo é alternativa válida e, nas séries agrupadas, tem taxa de sucesso ao menos equivalente (95,8% vs 85,4%, sem diferença estatística).",
      ],
      pitfalls: [
        "Medializar o fragmento distal: gera offset negativo e recidiva.",
        "Fixação insuficiente em criança que não colabora — se houver dúvida, associar gesso pelvipodálico.",
      ],
    },
    {
      n: 6,
      title: "Confirmar o HEA na mesa — o passo que define o resultado",
      detail:
        "Fluoroscopia AP da bacia com rotação neutra e medida do HEA antes de fechar. O alvo é < 38-40°, idealmente 25-30°. Se o HEA obtido não atingir o alvo, refazer a correção agora: esta é a última oportunidade barata. Corrigir para < 38° associou-se a 95% de ausência de recidiva; HEA pós-operatório > 41° é fator de risco independente de recidiva.",
      figureId: "coxa-vara:alvo-correcao",
      tips: [
        "Meça o HEA, não o NSA — o ângulo cabeça-colo não é indicador confiável de correção adequada.",
        "Hipercorrigir levemente é seguro e compra margem contra o crescimento residual.",
      ],
      pitfalls: [
        "Aceitar 45° por parecer \"bom o bastante\": é a definição operacional de recidiva programada.",
        "Confiar em imagem em rotação externa, que faz o HEA parecer melhor do que é.",
      ],
    },
    {
      n: 7,
      title: "Corrigir a fise instável quando ela for o problema",
      detail:
        "Nas displasias ósseas com fise instável (espondilometafisária) ou epífise não ossificada, a osteotomia isolada recidiva de forma previsível durante o crescimento. Nesses casos, considerar estabilizar a fise no mesmo tempo cirúrgico e adiar a osteotomia até HEA > 60°.",
      figureId: "coxa-vara:etiologia",
      figureVariant: "adquirida",
      tips: [
        "Coxa vara com metáfise isolada, fise estável e boa morfologia da cabeça (displasia metafisária, disostose cleidocraniana) tem o melhor prognóstico e frequentemente dispensa cirurgia.",
      ],
      pitfalls: [
        "Aplicar os limiares de Weinstein, derivados da forma do desenvolvimento, às displasias com fise instável, e prometer à família o mesmo prognóstico.",
      ],
    },
    {
      n: 8,
      title: "Reavaliar o acetábulo depois de corrigir o fêmur",
      detail:
        "A displasia acetabular associada costuma remodelar espontaneamente após a correção femoral, desde que ela seja obtida e mantida antes dos 10 anos. Osteotomia pélvica é exceção: na série de referência, só 6 de 37 quadris a exigiram, e a maioria tinha displasia do desenvolvimento do quadril como etiologia de base.",
      figureId: "coxa-vara:anatomia",
      tips: [
        "Corrigido e mantido antes dos 10 anos, 83% obtiveram boa profundidade acetabular, congruência esférica, alívio da dor e correção do Trendelenburg.",
        "Reservar a osteotomia pélvica para quem não remodelou após a correção femoral consolidada.",
      ],
      pitfalls: [
        "Fazer osteotomia pélvica no mesmo tempo por reflexo, sem dar ao acetábulo a chance de remodelar.",
      ],
    },
  ],
  postop: {
    immobilization:
      "Fixação interna rígida (placa-lâmina, placa em T, DCP pré-moldada) dispensa imobilização externa e permite mobilização precoce do quadril e do joelho. Com fios transfixantes ou em crianças pequenas e pouco colaborativas, gesso pelvipodálico por 6 semanas. Com fixador externo, sem gesso; o fixador permanece até a consolidação, em média 11 semanas.",
    weightBearing:
      "Sem carga ou carga de toque nas primeiras 6 semanas, até sinais radiográficos de consolidação. Progressão para carga parcial entre 6 e 10 semanas conforme a consolidação, e carga total após a união completa — em média 2,4 a 3 meses com fixação interna. Nos casos bilaterais, escalonar os lados para preservar a independência funcional da criança.",
    rehab: [
      {
        window: "0-6 semanas",
        weightBearing: "Sem carga ou carga de toque",
        focus:
          "Controle da dor, cuidados com o gesso ou com o trajeto dos pinos, mobilização do joelho e do tornozelo quando a fixação for rígida, e isométricos de quadríceps. Radiografia em 6 semanas para avaliar consolidação e conferir a manutenção do HEA.",
      },
      {
        window: "6-12 semanas",
        weightBearing: "Carga parcial progressiva conforme consolidação",
        focus:
          "Retirada do gesso ou do fixador após a união. Recuperação do arco de movimento do quadril, com ênfase em abdução e rotação interna. Início do fortalecimento abdutor, agora com a relação comprimento-tensão restabelecida pela correção.",
      },
      {
        window: "3-6 meses",
        weightBearing: "Carga total",
        focus:
          "Fortalecimento abdutor progressivo, reeducação da marcha e resolução do Trendelenburg. Retorno gradual às atividades. Avaliar discrepância residual de membros.",
      },
      {
        window: "6 meses até a maturidade esquelética",
        weightBearing: "Livre",
        focus:
          "Vigilância radiográfica da recidiva e do crescimento. Reavaliar a remodelação acetabular, a discrepância de membros e a necessidade de retirada de implante — a fratura do fêmur após retirada de material é uma complicação descrita.",
      },
    ],
    followup:
      "Radiografia AP da bacia em rotação neutra padronizada com 6 semanas, 3 meses, 6 meses, 1 ano e anualmente até a maturidade esquelética. Medir HEA, NSA, offset e slope posterior a cada visita e comparar com a imagem pós-operatória imediata: a recidiva costuma se declarar nos primeiros 2 anos, e a maior parte ocorre em quem saiu da cirurgia com HEA > 41°. Vigiar também o fechamento fisário prematuro, a discrepância de membros e a remodelação acetabular. Nos operados antes dos 6,5 anos, o seguimento precisa ser mais próximo: a taxa de recidiva nessa faixa chegou a 52%, contra 4% nos mais velhos.",
  },
  complications: [
    {
      name: "Recidiva do varo",
      detail:
        "A complicação dominante. Séries históricas relatam 30-70% de recidiva após osteotomias bem executadas; revisões sistemáticas atuais mostram ~11% de perda de correção e ~9% de reoperação. Idade, tipo de osteotomia, implante e etiologia não explicaram a recidiva na série de referência — o HEA obtido explicou.",
      prevention:
        "Corrigir o HEA para < 38-40° na mesa e conferir por fluoroscopia antes de fechar. Lateralizar o fragmento distal para evitar offset negativo. Corrigir também o slope posterior. Hipercorrigir nos mais novos.",
    },
    {
      name: "Subcorreção",
      detail:
        "Causa direta da recidiva e, na prática, um erro de planejamento e de conferência intraoperatória, não de técnica. Confiar no NSA em vez do HEA é o caminho mais frequente para ela — o ângulo cabeça-colo não é indicador confiável de correção adequada.",
      prevention:
        "Calcular a cunha pelo HEA antes da cirurgia e reconferir o HEA na mesa; se não atingiu o alvo, refazer a correção no mesmo tempo.",
    },
    {
      name: "Fechamento fisário prematuro",
      detail:
        "Pode preceder ou seguir a osteotomia, sobretudo nas displasias ósseas e quando o implante invade o colo. Leva a encurtamento, trocânter alto e deformidade residual que a correção angular isolada não resolve.",
      prevention:
        "Manter o implante distante da fise capital; preferir fios transfixantes ou o arranjo de Wagner nos menores; documentar a fise nas radiografias pré-operatórias.",
    },
    {
      name: "Necrose avascular da cabeça femoral",
      detail:
        "Complicação rara mas descrita após osteotomia para coxa vara. Decorre de dissecção do colo ou de implante que compromete o suprimento retinacular ascendente.",
      prevention:
        "Não desperiostizar o colo; osteotomia inter ou subtrocantérica, longe do colo; implante paralelo e distante da fise.",
    },
    {
      name: "Marcha de Trendelenburg persistente",
      detail:
        "Quando o trocânter permanece alto e a relação comprimento-tensão dos abdutores não é restabelecida, a claudicação persiste apesar do ângulo corrigido. Nos casos bilaterais, manifesta-se como marcha anserina.",
      prevention:
        "Correção angular adequada, que baixa relativamente o trocânter; considerar transferência distal do trocânter maior nos casos com trocânter alto residual e abdutores insuficientes.",
    },
    {
      name: "Discrepância de comprimento dos membros",
      detail:
        "Presente nos casos unilaterais e agravada pela forma congênita, onde o encurtamento femoral é parte do quadro. A valgização recupera parte do comprimento (em média ~1,5 cm de ganho nas séries), mas raramente equaliza sozinha.",
      prevention:
        "Medir a discrepância no pré-operatório; nos casos congênitos, planejar a equalização dentro da estratégia do membro inteiro; considerar fixador externo quando houver indicação de alongamento simultâneo.",
    },
    {
      name: "Falha ou irritação do implante e fratura pós-retirada",
      detail:
        "Quebra de fio de Kirschner, perda de fixação e fratura do fêmur após a retirada do material são complicações descritas. Infecção superficial do trajeto dos pinos ocorreu em ~2,6% e profunda em ~1% das séries agrupadas.",
      prevention:
        "Fixação estável e proporcional ao peso e à colaboração da criança; proteger a carga após a retirada de implante; cuidado com trajeto de pinos no fixador externo.",
    },
    {
      name: "Displasia acetabular residual",
      detail:
        "Persiste quando a correção femoral é obtida tarde ou não é mantida. A maioria dos acetábulos remodela após a correção femoral antes dos 10 anos; osteotomia pélvica foi necessária em apenas 6 de 37 quadris na série de referência, e sobretudo naqueles com DDQ de base.",
      prevention:
        "Obter e manter a correção femoral antes dos 10 anos; reservar a osteotomia pélvica para quem não remodelar.",
    },
  ],
  evidence: [
    {
      id: "weinstein-1984-hea",
      claim:
        "O ângulo epifisário de Hilgenreiner estratifica o prognóstico da coxa vara e define a indicação cirúrgica: > 60° opera, 45-60° é zona cinzenta que se observa, < 45° corrige espontaneamente.",
      takeaway:
        "É o artigo que introduziu o HEA e a razão de ele existir: o ângulo cervicodiafisário varia com a rotação do membro e não prediz progressão. Os três limiares desta série continuam sendo a espinha dorsal da conduta e o que a prova cobra.",
      level: "IV",
      studyType: "Série de casos retrospectiva (42 quadris, 22 com coxa vara congênita verdadeira)",
      era: "classico",
      citation: {
        authors: "Weinstein JN, Kuo KN, Millar EA",
        title: "Congenital coxa vara. A retrospective review",
        journal: "J Pediatr Orthop",
        year: 1984,
        pmid: "6693571",
        doi: "10.1097/01241398-198401000-00015",
      },
    },
    {
      id: "carroll-1997-alvo",
      claim:
        "Corrigir o HEA para < 38° resultou em ausência de recidiva em 95% das crianças; idade, tipo de osteotomia, implante e etiologia não influenciaram a recidiva. O ângulo cabeça-colo não foi indicador confiável de correção adequada.",
      takeaway:
        "A recidiva de 30-70% da literatura não é falha de técnica nem de escolha de implante — é subcorreção. Este trabalho transforma o HEA de parâmetro prognóstico em alvo intraoperatório e mostra que corrigir e manter antes dos 10 anos deu 83% de bons acetábulos, congruência esférica e correção do Trendelenburg.",
      level: "IV",
      studyType: "Série de casos retrospectiva (26 crianças, 37 quadris, 15 anos de experiência)",
      era: "classico",
      citation: {
        authors: "Carroll K, Coleman S, Stevens PM",
        title: "Coxa vara: surgical outcomes of valgus osteotomies",
        journal: "J Pediatr Orthop",
        year: 1997,
        pmid: "9075100",
        doi: "10.1097/00004694-199703000-00016",
      },
    },
    {
      id: "bian-2019-recidiva",
      claim:
        "HEA pós-operatório > 41° e offset femoral negativo foram fatores de risco independentes para recidiva em análise multivariada. Idade < 6,5 anos teve 52% de recidiva contra 4% acima dessa idade; slope posterior pós-operatório > 20° também se associou a recidiva.",
      takeaway:
        "Confirma o alvo de Carroll com metodologia multivariada moderna e acrescenta duas dimensões: a coxa vara é tridimensional (corrigir o slope posterior) e o fragmento distal precisa ser lateralizado. Também explica por que operar muito cedo recidiva mais — argumento para hipercorrigir, não para adiar.",
      level: "IV",
      studyType: "Coorte retrospectiva com análise uni e multivariada (32 pacientes, 46 quadris, seguimento médio 4,7 anos)",
      era: "atual",
      citation: {
        authors: "Bian Z, Xu YJ, Guo Y, Fu G, Lyu XM, Wang QQ",
        title: "Analyzing risk factors for recurrence of developmental coxa vara after surgery",
        journal: "J Child Orthop",
        year: 2019,
        pmid: "31489041",
        doi: "10.1302/1863-2548.13.180201",
      },
    },
    {
      id: "audisio-2024-revisao",
      claim:
        "Revisão sistemática de 10 séries (153 pacientes, 192 quadris): sucesso global de 88,8% da osteotomia valgizante femoral proximal, com perda de correção em 10,9% e reoperação em 9,4%. HEA corrigiu de 71,9° para 31,7° e o ângulo cabeça-colo de 94,6° para 134,4°. Sem diferença entre osteotomia subtrocantérica e intertrocantérica (91,0% vs 94,1%; p = 0,48) nem entre fixação interna e externa (85,4% vs 95,8%; p = 0,096).",
      takeaway:
        "A melhor síntese disponível: a osteotomia valgizante funciona, e o nível do corte e o tipo de fixação são escolhas de familiaridade, não determinantes do resultado. O que se correlaciona com sucesso é a magnitude da correção do HEA e do ângulo cabeça-colo — de novo, corrigir o suficiente.",
      level: "IV",
      studyType: "Revisão sistemática PRISMA de 10 séries de casos de nível IV",
      era: "atual",
      citation: {
        authors: "Audisio A, Cacciola G, Braconi L, Giudice C, Massè A, Aprato A",
        title:
          "Proximal femoral valgus osteotomy for the treatment of developmental coxa vara: a systematic review of the literature",
        journal: "J Orthop",
        year: 2024,
        pmid: "38495579",
        doi: "10.1016/j.jor.2024.03.001",
      },
    },
    {
      id: "trigui-2008-displasias",
      claim:
        "Na coxa vara das condrodisplasias, o prognóstico depende da morfologia inicial: mau com epífise não ossificada ou fragmentada (espondiloepifisária congênita, Kniest, displasia epifisária múltipla) e com fise instável (espondilometafisária, que recidiva se a fise não for estabilizada); bom quando só a metáfise está envolvida (displasia metafisária, disostose cleidocraniana). Indicações de cirurgia: perda de arco de movimento, progressão documentada ou HEA ≥ 60°.",
      takeaway:
        "Delimita onde os limiares de Weinstein valem. Nas displasias com fise instável, os autores defendem adiar a osteotomia até HEA > 60° e estabilizar a fise no mesmo tempo — e a coxa vara puramente metafisária frequentemente não precisa de tratamento algum.",
      level: "IV",
      studyType: "Série de casos retrospectiva (19 crianças, 35 quadris, seguimento médio 8 anos até a maturidade)",
      era: "atual",
      citation: {
        authors: "Trigui M, Pannier S, Finidori G, Padovani JP, Glorion C",
        title: "Coxa vara in chondrodysplasia: prognosis study of 35 hips in 19 children",
        journal: "J Pediatr Orthop",
        year: 2008,
        pmid: "18724194",
        doi: "10.1097/BPO.0b013e3181831ec8",
      },
    },
  ],
  pearls: [
    "O HEA é o tópico inteiro: < 45° observa, 45-60° é zona cinzenta que se acompanha, > 60° opera. Se você levar uma única coisa daqui, leve os três números e o nome de Weinstein.",
    "O ângulo cervicodiafisário engana porque varia com a rotação do membro na radiografia; o HEA usa a horizontal pélvica como referência e não sofre com isso. Meça o HEA.",
    "A física explica os limiares: quanto mais vertical a fise, maior a fração cisalhante da carga; o cisalhamento agrava o varo, que verticaliza mais a fise. Acima de 60° o círculo vicioso está fechado e não se abre sozinho.",
    "O fragmento triangular ínfero-medial com imagem em \"Y invertido\" é patognomônico da forma do desenvolvimento — não aparece na congênita nem na adquirida.",
    "Alvo cirúrgico: HEA < 38-40°, idealmente 25-30°. Hipercorrigir é barato; subcorrigir custa uma reoperação. Corrigido para < 38°, 95% não recidivam.",
    "Confira o HEA por fluoroscopia antes de fechar. É a última oportunidade barata de acertar a correção.",
    "Lateralize o fragmento distal: offset negativo é fator de risco independente de recidiva, ao lado do HEA > 41°.",
    "Coxa vara é tridimensional — corrija também a retroversão e o slope posterior; slope posterior residual > 20° associa-se a recidiva.",
    "Corrigido e mantido antes dos 10 anos, o acetábulo remodela sozinho na grande maioria: osteotomia pélvica foi necessária em apenas 6 de 37 quadris, sobretudo nos com DDQ de base.",
    "Epífise ainda não ossificada? O HEA não é mensurável — use o ângulo de Hilgenreiner-trocantérico de Oh, que tem alta confiabilidade inter e intraobservador.",
    "O Trendelenburg da coxa vara vem do encurtamento dos abdutores pelo trocânter alto (relação comprimento-tensão ruim), não de uma alavanca curta — o offset até aumenta. Restaurar o comprimento é parte do objetivo.",
    "Nível do corte e tipo de fixação não mudam o resultado (subtrocantérica 91% vs intertrocantérica 94%; interna 85% vs externa 96%, sem diferença). Use o que você domina — e corrija o suficiente.",
    "Coxa vara congênita nunca é um achado isolado: procure PFFD e hemimelia fibular, e radiografe o membro inteiro.",
    "Coxa vara bilateral se apresenta como marcha anserina e frequentemente sem dor — a criança é trazida pelo jeito de andar, não por queixa.",
  ],
  pitfalls: [
    "Tratar coxa vara como diagnóstico em vez de achado radiográfico e pular a pergunta etiológica — a conduta na congênita, na do desenvolvimento e na adquirida não é a mesma.",
    "Planejar e conferir a correção pelo NSA: o ângulo cabeça-colo não é indicador confiável de correção adequada e varia com a rotação da radiografia.",
    "Subcorrigir por medo de hipercorrigir. É o erro mais comum da literatura e a explicação da recidiva de 30-70%, que não se explica por idade, implante, tipo de osteotomia ou etiologia.",
    "Aceitar HEA de 45° na mesa por parecer \"bom o bastante\": acima de 41° o risco de recidiva é independente e mensurável.",
    "Medializar o fragmento distal, gerando offset negativo — o segundo preditor independente de recidiva.",
    "Corrigir apenas o plano coronal e ignorar retroversão e slope posterior, deixando a correção fora do plano verdadeiro da deformidade.",
    "Radiografar em rotação externa: o varo parece menor, o HEA parece melhor e a correção sai insuficiente.",
    "Aplicar os limiares de Weinstein, derivados da forma do desenvolvimento, às displasias ósseas com fise instável ou epífise não ossificada, e prometer o mesmo prognóstico à família.",
    "Operar raquitismo não tratado ou displasia de base sem controlar a causa — o osso não segura a correção.",
    "Desperiostizar o colo à procura do fragmento triangular: não há o que fazer nele e o suprimento retinacular ascendente está exatamente ali.",
    "Atravessar a fise capital com o implante e provocar epifisiodese iatrogênica.",
    "Chamar de \"observação\" o que é apenas adiamento: HEA de 45-60° exige radiografias seriadas a cada 4-6 meses em rotação padronizada, porque é a trajetória, e não o valor isolado, que decide.",
    "Fazer osteotomia pélvica no mesmo tempo por reflexo, sem dar ao acetábulo a chance de remodelar após a correção femoral.",
    "Esquecer que operar antes dos 6,5 anos teve 52% de recidiva contra 4% acima dessa idade — o que pede hipercorreção nos mais novos, e não adiamento quando o HEA já passou de 60°.",
  ],
  figures: [
    {
      id: "coxa-vara:anatomia",
      caption:
        "Fêmur proximal normal (NSA 135°, HEA 25°) comparado à coxa vara (NSA 90°, HEA 70°): o colo horizontaliza, a fise verticaliza, a cabeça desce e o trocânter maior — que não acompanha — torna-se alto, encurtando os abdutores.",
      alt: "Comparação esquemática entre fêmur proximal normal e em coxa vara, com ângulos cervicodiafisários e trocânter alto",
      kind: "diagram",
    },
    {
      id: "coxa-vara:defeito-colo",
      caption:
        "Detalhe do colo femoral medial: a fise verticalizada e o defeito de ossificação formam a imagem em \"Y invertido\" que delimita o fragmento triangular metafisário ínfero-medial, patognomônico da forma do desenvolvimento.",
      alt: "Detalhe do colo femoral medial mostrando o fragmento triangular e a imagem em Y invertido",
      kind: "diagram",
    },
    {
      id: "coxa-vara:biomecanica",
      variant: "normal",
      caption:
        "Fise oblíqua (HEA 25°): a carga corporal atravessa a fise predominantemente como compressão, que a estabiliza — o varo não progride.",
      alt: "Decomposição da carga em fise femoral proximal oblíqua, com predomínio de compressão",
      kind: "diagram",
    },
    {
      id: "coxa-vara:biomecanica",
      variant: "vara",
      caption:
        "Fise verticalizada (HEA 72°): a mesma carga passa a atravessar a fise predominantemente como cisalhamento, que desloca a epífise em varo e fecha o círculo vicioso de Pauwels.",
      alt: "Decomposição da carga em fise femoral proximal verticalizada, com predomínio de cisalhamento",
      kind: "diagram",
    },
    {
      id: "coxa-vara:etiologia",
      variant: "congenita",
      caption:
        "Coxa vara congênita: presente ao nascimento, com colo curto e cartilaginoso e encurtamento femoral — espectro da deficiência femoral focal proximal.",
      alt: "Esquema da coxa vara congênita com colo curto e cartilaginoso",
      kind: "diagram",
    },
    {
      id: "coxa-vara:etiologia",
      variant: "desenvolvimento",
      caption:
        "Coxa vara do desenvolvimento: quadril normal ao nascer, deformidade entre a marcha e os 6 anos, com o fragmento triangular do colo medial.",
      alt: "Esquema da coxa vara do desenvolvimento com fragmento triangular do colo medial",
      kind: "diagram",
    },
    {
      id: "coxa-vara:etiologia",
      variant: "adquirida",
      caption:
        "Coxa vara adquirida: sequela de fratura do colo, epifisiólise, necrose avascular, raquitismo, osteogênese imperfeita ou displasias ósseas.",
      alt: "Esquema da coxa vara adquirida com sequela de consolidação no colo",
      kind: "diagram",
    },
    {
      id: "coxa-vara:hea",
      variant: "leve",
      caption:
        "HEA < 45°: correção espontânea esperada — observar com radiografia anual.",
      alt: "Ângulo epifisário de Hilgenreiner de 40 graus, faixa de observação",
      kind: "diagram",
    },
    {
      id: "coxa-vara:hea",
      variant: "limitrofe",
      caption:
        "HEA 45-60°: zona cinzenta — radiografias seriadas a cada 4-6 meses; é a trajetória, e não o valor isolado, que decide.",
      alt: "Ângulo epifisário de Hilgenreiner de 52 graus, zona cinzenta",
      kind: "diagram",
    },
    {
      id: "coxa-vara:hea",
      variant: "grave",
      caption:
        "HEA > 60°: progressão provável e resolução espontânea excepcional — indicação de osteotomia valgizante.",
      alt: "Ângulo epifisário de Hilgenreiner de 72 graus, indicação cirúrgica",
      kind: "diagram",
    },
    {
      id: "coxa-vara:osteotomia",
      variant: "planejamento",
      caption:
        "Planejamento da osteotomia valgizante: cunha de subtração de base lateral, subtrocantérica, com ângulo = HEA atual − HEA alvo, distante da fise e do colo.",
      alt: "Planejamento da cunha de subtração lateral para osteotomia valgizante",
      kind: "diagram",
    },
    {
      id: "coxa-vara:osteotomia",
      variant: "correcao",
      caption:
        "Correção obtida e fixada: HEA 28°, fise reorientada para a horizontal e fragmento distal lateralizado para preservar o eixo mecânico e evitar offset negativo.",
      alt: "Osteotomia valgizante corrigida e fixada com placa-lâmina lateral",
      kind: "diagram",
    },
    {
      id: "coxa-vara:alvo-correcao",
      caption:
        "Régua do risco de recidiva pelo HEA pós-operatório imediato: < 38° associou-se a 95% de ausência de recidiva (Carroll 1997) e > 41° é fator de risco independente (Bian 2019). Alvo prático: 25-30°.",
      alt: "Régua do ângulo epifisário de Hilgenreiner pós-operatório e risco de recidiva",
      kind: "diagram",
    },
  ],
  meta: {
    lastReviewed: "2026-07-14",
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
      "Rockwood and Wilkins' Fractures in Children, 10a ed. (2024) / Tachdjian's Pediatric Orthopaedics 6a",
  },
});
