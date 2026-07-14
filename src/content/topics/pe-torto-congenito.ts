import { defineTopic } from "../../types/topic";

export const topic = defineTopic({
  id: "op-pe-torto-congenito",
  slug: "pe-torto-congenito",
  regionId: "ortopedia-pediatrica",
  bone: "Pé (criança)",
  injury: "Talipes equinovaro congenito",
  title: "Pé torto congênito",
  subtitle:
    "Cavo, aduto, varo e equino: reconhecer a deformidade tridimensional, corrigi-la na ordem certa pelo método de Ponseti e entender que a batalha real é a adesão à órtese.",
  laterality: null,
  status: "complete",
  overview:
    "O pé torto congênito (talipes equinovaro) é a deformidade musculoesquelética congênita mais comum do membro inferior, presente em cerca de 1 a cada 1.000 nascidos vivos, com predomínio masculino de aproximadamente 2:1 e bilateralidade em torno de metade dos casos. Não é um pé mal posicionado no útero: é uma deformidade estrutural em que o esqueleto do médio e do antepé está subluxado em torno de um talus fixo, acompanhada de encurtamento fibrótico do complexo póstero-medial e de hipotrofia da panturrilha. A deformidade é tridimensional e resume-se no acrônimo CAVE — cavo, aduto, varo e equino —, componentes que não são independentes: eles compartilham a mesma rotação do bloco calcaneopédio e por isso precisam ser desfeitos em uma sequência definida.\n\nO método de Ponseti é o padrão mundial e transformou o prognóstico da doença. Ele não força o pé: manipula suavemente e imobiliza em gessos cruro-podálicos semanais que corrigem primeiro o cavo (supinando o antepé e elevando o primeiro raio) e depois abduzem progressivamente o pé em torno da cabeça do talus, com contrapressão do polegar sobre a face lateral dessa cabeça. O calcâneo everte por consequência — o varo nunca é atacado diretamente, e pronar o antepé é o erro cardinal, porque trava o calcâneo em varo e agrava o cavo. Corrigidos cavo, adução e varo, o equino residual persiste na maioria dos pés e exige tenotomia percutânea do tendão de Aquiles em cerca de 80 a 90% dos casos, seguida de gesso final por três semanas.\n\nA correção inicial é obtida em mais de 90% dos pés, e é aqui que reside a armadilha do tratamento: o pé corrigido tende a recidivar. A manutenção depende de uma órtese de abdução (Denis-Browne / foot abduction brace) usada 23 horas por dia nos primeiros três meses e depois nas noites e sonos até os 4 a 5 anos. A não adesão à órtese é, de forma consistente e por larga margem, o principal preditor de recidiva — mais que a gravidade inicial, a idade de início ou o número de gessos. Na recidiva dinâmica em supinação de uma criança maior, com deformidade já não fixa, a transferência do tendão tibial anterior para o terceiro cuneiforme reequilibra o pé e reduz novas recidivas. As liberações póstero-mediais extensas, que dominaram o século XX, tornaram-se exceção: entregam um pé rígido, fraco e doloroso na vida adulta.",
  keyFacts: [
    { label: "Incidência", value: "~1:1.000 nascidos vivos; ♂:♀ ≈ 2:1; bilateral em ~50%" },
    { label: "Deformidade", value: "CAVE — cavo, aduto, varo e equino, em torno de um talus fixo" },
    { label: "Avaliação", value: "Escores de Pirani (0–6) e de Dimeglio (0–20)" },
    { label: "Padrão-ouro", value: "Ponseti: manipulação + gessos semanais (média de 5–6)" },
    { label: "Regra de ouro", value: "Abduzir em torno da cabeça do talus — NUNCA pronar" },
    { label: "Tenotomia", value: "Aquiles percutâneo em ~80–90%; gesso final por 3 semanas" },
    { label: "Manutenção", value: "Órtese de abdução: 23 h/dia por 3 meses, depois noites até 4–5 anos" },
    { label: "Recidiva", value: "Principal preditor é a não adesão à órtese (OR ≈ 10 em metanálise)" },
  ],
  anatomy: {
    text:
      "A chave anatômica do pé torto é entender que o talus é a referência fixa e todo o resto está rodado em torno dele. O talus não tem inserções musculares e está encaixado na pinça maleolar; seu colo é desviado medial e plantarmente, e sua cabeça fica descoberta lateralmente — é justamente essa cabeça lateral palpável que serve de fulcro para toda a manipulação de Ponseti. O navicular está subluxado medialmente, quase encostado no maléolo medial; o cuboide está medializado sobre a articulação calcaneocuboide; e o calcâneo está aduzido e invertido sob o talus, de modo que os eixos do talus e do calcâneo, que normalmente divergem, tornam-se quase paralelos.\n\nEsse conjunto move-se em bloco. Calcâneo, navicular e cuboide comportam-se como uma unidade única — o bloco calcaneopédio — que roda em torno do talus nos três planos ao mesmo tempo. É por isso que os componentes do CAVE não podem ser corrigidos isoladamente: ao abduzir o pé em torno da cabeça do talus, o calcâneo obrigatoriamente roda para fora e everte, e o varo se desfaz sozinho. E é também por isso que pronar o antepé é contraproducente — a pronação trava o calcâneo contra o talus, impedindo sua desrotação e mantendo o varo, além de aumentar o cavo ao aduzir ainda mais o primeiro raio.\n\nO lado medial e posterior é fibrótico e retraído: tendões tibial posterior, flexor longo dos dedos e flexor longo do hálux, ligamentos deltoide superficial, calcaneonavicular plantar (mola) e o complexo tibial posterior, além do tendão de Aquiles e da cápsula posterior. Esse tecido não é normal — há excesso de colágeno e miofibroblastos —, o que explica tanto a rigidez inicial quanto a tendência intrínseca à recidiva mesmo após correção anatômica perfeita. A panturrilha é menor e o pé é discretamente menor no lado afetado; isso é inerente à doença, não sequela de tratamento, e a família deve ser informada desde o início.",
    figureIds: ["pe-torto-congenito:anatomia", "pe-torto-congenito:cave"],
  },
  classification: [
    {
      id: "cave",
      name: "Componentes da deformidade (CAVE)",
      basis: "Decomposição anatômica da deformidade tridimensional em quatro componentes, listados na ordem em que devem ser corrigidos.",
      note:
        "O acrônimo não é apenas mnemônico: é a sequência terapêutica. Corrigir o cavo primeiro torna o antepé e o retropé um bloco coerente; só então a abdução consegue desrotar o calcâneo; o equino é sempre o último e quase sempre exige tenotomia.",
      types: [
        {
          code: "C",
          label: "Cavo",
          description:
            "Arco medial elevado por pronação do antepé em relação ao retropé, com o primeiro raio em flexão plantar. É corrigido no primeiro gesso, supinando o antepé e elevando o primeiro raio.",
          figureId: "pe-torto-congenito:cave",
          figureVariant: "cavo",
        },
        {
          code: "A",
          label: "Aduto (antepé)",
          description:
            "Adução do bloco médio-antepé em torno da cabeça do talus, com borda lateral convexa e borda medial côncava. Corrige-se por abdução progressiva, jamais por pressão sobre a articulação calcaneocuboide.",
          figureId: "pe-torto-congenito:cave",
          figureVariant: "aduto",
        },
        {
          code: "V",
          label: "Varo (retropé)",
          description:
            "Inversão do calcâneo sob o talus. Nunca é atacado diretamente: corrige-se por consequência, quando a abdução desrota o calcâneo e permite que ele everta.",
          figureId: "pe-torto-congenito:cave",
          figureVariant: "varo",
        },
        {
          code: "E",
          label: "Equino",
          description:
            "Flexão plantar do tornozelo por retração do tríceps sural e da cápsula posterior. Último componente a corrigir; persiste em ~80–90% dos pés e demanda tenotomia percutânea do Aquiles.",
          figureId: "pe-torto-congenito:cave",
          figureVariant: "equino",
        },
      ],
    },
    {
      id: "pirani",
      name: "Escore de Pirani",
      basis: "Seis sinais clínicos — três do mediopé e três do retropé — pontuados em 0 (normal), 0,5 (moderadamente anormal) ou 1 (gravemente anormal); total de 0 a 6.",
      note:
        "É rápido, reprodutível e feito à beira do leito, sem radiografia. Seu maior valor não é o escore inicial e sim o seguimento gesso a gesso: um escore de retropé que permanece ≥ 1 com o mediopé já corrigido é o sinal clássico de que falta a tenotomia.",
      types: [
        {
          code: "CLB",
          label: "Curvatura da borda lateral (mediopé)",
          description:
            "Borda lateral do pé reta (0), levemente curva na região distal (0,5) ou francamente convexa com curvatura no nível da calcaneocuboide (1).",
          figureId: "pe-torto-congenito:pirani",
          figureVariant: "mediope",
        },
        {
          code: "PM",
          label: "Prega medial (mediopé)",
          description:
            "Pregas mediais múltiplas e superficiais (0), uma ou duas pregas profundas (0,5) ou prega profunda que altera o contorno do arco (1).",
          figureId: "pe-torto-congenito:pirani",
          figureVariant: "mediope",
        },
        {
          code: "CLT",
          label: "Cobertura da cabeça lateral do talus (mediopé)",
          description:
            "Com o pé abduzido, a cabeça lateral do talus fica coberta pelo navicular (0), parcialmente coberta (0,5) ou permanece totalmente descoberta e palpável (1).",
          figureId: "pe-torto-congenito:pirani",
          figureVariant: "mediope",
        },
        {
          code: "PP",
          label: "Prega posterior (retropé)",
          description:
            "Pregas posteriores múltiplas e rasas (0), uma ou duas pregas profundas (0,5) ou prega profunda que altera o contorno posterior (1).",
          figureId: "pe-torto-congenito:pirani",
          figureVariant: "retrope",
        },
        {
          code: "CV",
          label: "Calcâneo vazio (retropé)",
          description:
            "Tuberosidade calcânea facilmente palpável sob a pele (0), palpável com dificuldade (0,5) ou impalpável — o calcâneo está alto, em equino (1).",
          figureId: "pe-torto-congenito:pirani",
          figureVariant: "retrope",
        },
        {
          code: "RE",
          label: "Rigidez do equino (retropé)",
          description:
            "Dorsiflexão além da neutra com o joelho estendido (0), até a neutra (0,5) ou dorsiflexão que não alcança a neutra (1).",
          figureId: "pe-torto-congenito:pirani",
          figureVariant: "retrope",
        },
      ],
    },
    {
      id: "dimeglio",
      name: "Classificação de Dimeglio",
      basis: "Redutibilidade medida em graus de quatro parâmetros (equino sagital, varo frontal do retropé, desrotação do bloco calcaneopédio e adução do antepé), 0–4 pontos cada, somados a 4 pontos acessórios: prega posterior, prega medial, cavo e tônus muscular. Total de 0 a 20.",
      note:
        "Mede rigidez, não apenas aparência, e correlaciona-se com o número de gessos necessários e com a probabilidade de tenotomia. Não confie nele para prever recidiva: metanálise mostra associação apenas fraca entre escore inicial elevado e recorrência.",
      types: [
        {
          code: "I",
          label: "Benigno (< 5 pontos)",
          description: "Pé leve, muito redutível (soft-soft); frequentemente confundido com pé torto postural. Poucos gessos.",
          figureId: "pe-torto-congenito:dimeglio",
        },
        {
          code: "II",
          label: "Moderado (5–9 pontos)",
          description: "Pé redutível porém parcialmente resistente (soft-stiff); resposta habitual ao Ponseti.",
          figureId: "pe-torto-congenito:dimeglio",
          figureVariant: "varo",
        },
        {
          code: "III",
          label: "Grave (10–14 pontos)",
          description: "Pé resistente com redutibilidade parcial (stiff-soft); mais gessos e tenotomia praticamente certa.",
          figureId: "pe-torto-congenito:dimeglio",
          figureVariant: "equino",
        },
        {
          code: "IV",
          label: "Muito grave (15–20 pontos)",
          description: "Pé rígido e praticamente irredutível (stiff-stiff); considerar componente sindrômico ou teratológico.",
          figureId: "pe-torto-congenito:dimeglio",
          figureVariant: "rotacao",
        },
      ],
    },
    {
      id: "etiologia",
      name: "Categorias etiológicas",
      basis: "Origem da deformidade, que muda radicalmente a expectativa de resposta ao Ponseti e o risco de recidiva.",
      note:
        "O Ponseti é a primeira linha em todas as categorias estruturais — inclusive nas sindrômicas —, mas a família deve saber que fora do pé idiopático são necessários mais gessos, a tenotomia é quase universal e a recidiva é substancialmente mais frequente.",
      types: [
        {
          code: "POST",
          label: "Pé torto postural",
          description:
            "Pé flexível, totalmente redutível passivamente até a dorsiflexão neutra, sem pregas profundas nem hipotrofia da panturrilha. Não é doença estrutural: resolve com alongamentos, eventualmente um ou dois gessos.",
        },
        {
          code: "IDIO",
          label: "Idiopático",
          description:
            "Forma clássica e mais comum, em criança neurologicamente normal. Correção inicial pelo Ponseti em mais de 90% dos pés; é a categoria em que se aplicam os números clássicos de recidiva e adesão.",
          figureId: "pe-torto-congenito:anatomia",
        },
        {
          code: "SIND",
          label: "Sindrômico / teratológico",
          description:
            "Associado a artrogripose, mielomeningocele, síndrome de Möbius, bandas amnióticas ou displasia diastrófica. Pé rígido, Dimeglio alto, mais gessos, tenotomia quase universal e recidiva frequente — ainda assim o Ponseti é a primeira linha.",
        },
        {
          code: "NEURO",
          label: "Neurogênico",
          description:
            "Deformidade equinovara secundária a desequilíbrio muscular progressivo (paralisia cerebral, doenças neuromusculares). Exige tratar a causa e o desequilíbrio; gessos isolados recidivam.",
        },
      ],
    },
  ],
  indications: {
    operative: [
      "Tenotomia percutânea do tendão de Aquiles: equino residual (dorsiflexão < 10–15°) quando o mediopé já está corrigido, com abdução de 60–70° e cabeça lateral do talus recoberta — necessária em ~80–90% dos pés.",
      "Transferência do tendão tibial anterior para o terceiro cuneiforme: recidiva dinâmica em supinação em criança acima de ~2,5–3 anos, com terceiro cuneiforme ossificado e sem deformidade fixa.",
      "Alongamento do Aquiles / liberação posterior limitada: equino recidivado isolado que não cede a novos gessos.",
      "Liberação póstero-medial: reservada a falha real do Ponseti bem executado, pé teratológico rígido ou deformidade negligenciada — nunca como primeira linha.",
      "Procedimentos ósseos (osteotomias, artrodese tríplice) ou correção gradual por fixador externo: adolescente/criança maior com deformidade fixa, recidiva negligenciada ou pé multioperado.",
    ],
    nonOperative: [
      "Método de Ponseti para praticamente todo pé torto congênito estrutural, iniciado idealmente na primeira ou segunda semana de vida.",
      "Método de Ponseti também em crianças que já ultrapassaram a idade da marcha ou com tratamento prévio malsucedido: metanálise mostra ~89% de desfechos satisfatórios.",
      "Método de Ponseti como primeira linha mesmo no pé sindrômico/teratológico, ajustando a expectativa quanto a número de gessos e recidiva.",
      "Órtese de abdução (Denis-Browne / FAB) após a correção: 23 h/dia por 3 meses, depois noites e sonos até os 4–5 anos.",
      "Recidiva sem deformidade fixa: repetir a série de gessos de Ponseti antes de qualquer cirurgia, e reforçar a adesão à órtese.",
      "Pé torto postural: alongamentos passivos e observação; no máximo um ou dois gessos.",
    ],
    decisionNotes:
      "A decisão central em pé torto congênito não é operar ou não operar — é executar o Ponseti corretamente e depois sustentar a correção. A correção inicial é alcançada em mais de 90% dos pés com manipulação e gessos, e a série de Iowa mostrou que a adoção do método reduziu a taxa de cirurgia corretiva extensa para cerca de 2,5%. Tudo o que se ganha nos gessos, porém, pode ser perdido na órtese: a não adesão foi o fator mais fortemente associado à recidiva (odds ratio de 183 na coorte de Dobbs; OR agrupada de 10 em metanálise recente), enquanto gravidade inicial, idade ao início e tratamento prévio não predizem recorrência de forma consistente. Isso reordena as prioridades da consulta — o tempo gasto educando a família sobre a órtese vale mais do que qualquer refinamento técnico do gesso.\n\nDiante de uma recidiva, a pergunta é se a deformidade é dinâmica ou fixa. Deformidade fixa volta primeiro aos gessos de Ponseti; só o que sobra de desequilíbrio dinâmico — supinação ativa na marcha, em criança com o terceiro cuneiforme já ossificado — é indicação de transferência do tibial anterior. A liberação póstero-medial extensa deve ser evitada: além de os pés tratados por Ponseti apresentarem melhor trofismo da panturrilha do que os operados, a cirurgia extensa entrega um pé rígido e doloroso a longo prazo. Por fim, um pé torto que não responde como esperado obriga a reexaminar o diagnóstico: procure artrogripose, disrafismo espinhal e outras causas sindrômicas antes de culpar a técnica.",
  },
  approaches: [
    {
      id: "ponseti",
      name: "Método de Ponseti — manipulação e gessos seriados",
      indication:
        "Primeira linha em todo pé torto congênito estrutural, do recém-nascido à criança já deambuladora, incluindo o pé sindrômico.",
      interval:
        "Manipulação suave de ~60 segundos seguida de gesso cruro-podálico com joelho a 90°, trocado semanalmente; média de 5 a 6 gessos. O primeiro gesso corrige o cavo supinando o antepé e elevando o primeiro raio; os seguintes abduzem progressivamente o pé em torno da cabeça do talus, com o polegar em contrapressão sobre a face lateral dessa cabeça, até 60–70° de abdução. O calcâneo everte por consequência e o varo se desfaz. O antepé jamais é pronado e nunca se faz pressão sobre a articulação calcaneocuboide.",
      atRisk: [
        "Cabeça lateral do talus — é o fulcro; perder o ponto de contrapressão inutiliza a manipulação",
        "Articulação calcaneocuboide — pressão neste ponto (erro de Kite) bloqueia a desrotação do calcâneo",
        "Fise tibial distal e pele — gesso apertado ou mal moldado causa úlcera e edema",
        "Complexo póstero-medial retraído — dorsiflexão forçada antes de corrigir o equino gera pé em mata-borrão",
      ],
      figureId: "pe-torto-congenito:gessos-ponseti",
    },
    {
      id: "tenotomia-percutanea",
      name: "Tenotomia percutânea do tendão de Aquiles",
      indication:
        "Equino residual com mediopé já corrigido (abdução 60–70°, cabeça lateral do talus coberta, calcâneo evertido) e dorsiflexão ainda inferior a 10–15°. Necessária em ~80–90% dos pés.",
      interval:
        "Procedimento percutâneo, sob anestesia local ou sedação, em ambiente ambulatorial. Lâmina nº 11 introduzida por via medial, 1 a 1,5 cm proximal à inserção calcânea, seccionando o tendão completamente de forma transversa até se sentir o estalido e ganhar 15–20° de dorsiflexão. Gesso final em máxima abdução e dorsiflexão por 3 semanas; o tendão regenera com comprimento funcional adequado.",
      atRisk: [
        "Artéria e nervo tibial posterior — imediatamente mediais ao tendão",
        "Nervo sural e artéria fibular (peronial) — laterais; risco maior na abordagem lateral",
        "Bolsa e periósteo calcâneo — tenotomia baixa demais compromete a inserção",
        "Pele friável do recém-nascido — sangramento e infecção superficial",
      ],
      figureId: "pe-torto-congenito:tenotomia",
    },
    {
      id: "ortese-abducao",
      name: "Órtese de abdução (Denis-Browne / foot abduction brace)",
      indication:
        "Obrigatória em todos os casos imediatamente após a retirada do gesso final; é o que mantém a correção obtida.",
      interval:
        "Barra rígida com comprimento igual à largura dos ombros da criança, unindo dois sapatos abertos nos dedos; pé afetado em 60–70° de rotação externa (abdução) e pé normal em 30–40°, com a barra dobrada em 10–15° de dorsiflexão. Regime: 23 horas por dia nos primeiros 3 meses, depois 12–14 horas por dia (noites e sonos) até os 4–5 anos. A órtese mantém, não corrige — o pé deve chegar a ela já corrigido pelos gessos.",
      atRisk: [
        "Adesão da família — é o principal preditor de recidiva de todo o tratamento",
        "Pele do calcanhar e do dorso — bolhas e úlceras levam ao abandono da órtese",
        "Correção incompleta ao instalar a órtese — a órtese não corrige deformidade residual",
        "Barra mal dimensionada ou sem dorsiflexão — perde eficácia e a criança escapa do sapato",
      ],
      figureId: "pe-torto-congenito:ortese",
    },
    {
      id: "transferencia-tibial-anterior",
      name: "Transferência do tendão tibial anterior para o terceiro cuneiforme",
      indication:
        "Recidiva dinâmica em supinação durante a marcha, em criança acima de ~2,5–3 anos, com o terceiro cuneiforme já ossificado e sem deformidade fixa residual.",
      interval:
        "Duas ou três incisões: liberação do tibial anterior de sua inserção no cuneiforme medial e base do primeiro metatarsal, tunelização subcutânea e fixação transóssea no terceiro cuneiforme (lateral). Lateraliza o vetor de força e reequilibra inversores contra evertores, eliminando a supinação dinâmica sem sacrificar a dorsiflexão. Frequentemente precedida de nova série de gessos para desfazer o que ainda for fixo.",
      atRisk: [
        "Nervo fibular (peronial) profundo e artéria dorsal do pé — no trajeto do tendão",
        "Fise e núcleo de ossificação do cuneiforme — transferência antes da ossificação não fixa",
        "Tendão extensor longo do hálux — pode ser transferido por engano",
        "Hipercorreção em pé plano valgo se a transferência for lateral demais",
      ],
      figureId: "pe-torto-congenito:tibial-anterior",
    },
    {
      id: "metodo-funcional-frances",
      name: "Método funcional francês (fisioterapia diária e imobilização elástica)",
      indication:
        "Alternativa conservadora ao Ponseti, usada em centros específicos e com equipe dedicada; exige sessões diárias de fisioterapia por meses.",
      interval:
        "Mobilização manual diária por fisioterapeuta treinado, estimulação dos fibulares e imobilização com bandagem elástica não circunferencial, seguida de tala noturna. Alcança resultados aceitáveis em mãos experientes, porém consome muito mais recursos e tempo do que o Ponseti, o que limita sua disseminação e o torna inviável na maioria dos serviços.",
      atRisk: [
        "Alta dependência de recursos e de fisioterapeuta experiente",
        "Abandono do tratamento pela frequência das sessões",
        "Correção insuficiente do equino sem tenotomia",
      ],
      figureId: "pe-torto-congenito:cave",
    },
    {
      id: "liberacao-postero-medial",
      name: "Liberação póstero-medial (histórica / resgate)",
      indication:
        "Exceção: falha documentada do Ponseti bem executado, pé teratológico muito rígido ou deformidade negligenciada. Não é primeira linha.",
      interval:
        "Liberação circunferencial das estruturas retraídas — cápsulas posterior, subtalar e talonavicular, ligamentos deltoide profundo e mola, tendões tibial posterior, flexores longos e Aquiles —, com redução e fixação temporária por fios. Corrige a deformidade às custas de rigidez, fraqueza e dor tardios: as coortes de longo prazo mostram deterioração progressiva e panturrilha significativamente mais atrófica que a dos pés tratados por Ponseti.",
      atRisk: [
        "Feixe neurovascular tibial posterior — na dissecção póstero-medial",
        "Vascularização do talus — dissecção extensa pode gerar necrose avascular",
        "Rigidez, fraqueza do tríceps e dor na vida adulta — a complicação-regra, não a exceção",
        "Hipercorreção em calcâneo-valgo por liberação posterior excessiva",
      ],
      figureId: "pe-torto-congenito:tenotomia",
    },
  ],
  technique: [
    {
      n: 1,
      title: "Diagnosticar, classificar e começar cedo",
      detail:
        "Confirmar que se trata de deformidade estrutural e não postural: pé postural reduz passivamente até a dorsiflexão neutra, não tem pregas profundas nem hipotrofia da panturrilha. Documentar o escore de Pirani e o de Dimeglio antes do primeiro gesso e examinar a criança inteira — quadris (rastrear displasia), coluna (disrafismo), mãos e face — para não perder um quadro sindrômico. Iniciar idealmente na primeira ou segunda semana de vida, quando o colágeno ainda responde ao alongamento suave, e explicar à família, desde esta consulta, que o tratamento dura anos e que a órtese é a parte que decide o resultado.",
      figureId: "pe-torto-congenito:pirani",
      figureVariant: "mediope",
      tips: [
        "Escore de Pirani na consulta inicial e a cada troca de gesso: é o mapa da correção",
        "Panturrilha menor e pé menor são inerentes à doença — diga isso à família no primeiro dia",
        "Radiografia não é necessária para diagnóstico nem para conduzir o Ponseti",
      ],
      pitfalls: [
        "Tratar como pé torto um pé postural e submeter a criança a gessos desnecessários",
        "Perder artrogripose ou mielomeningocele por não examinar além do pé",
        "Adiar o início por semanas sem motivo — quanto mais cedo, mais plástico o tecido",
      ],
    },
    {
      n: 2,
      title: "Primeiro gesso: corrigir o CAVO",
      detail:
        "O cavo resulta da pronação do antepé em relação ao retropé. Corrige-se supinando o antepé e elevando o primeiro raio, até que antepé e retropé fiquem no mesmo plano — nem um grau de abdução ainda. Localizar a cabeça lateral do talus com o polegar antes de manipular: é a referência de tudo o que vem depois. Gesso cruro-podálico com o pé nessa posição de supinação, joelho a 90°.",
      figureId: "pe-torto-congenito:gessos-ponseti",
      figureVariant: "cavo",
      tips: [
        "Elevar o primeiro raio é o gesto que corrige o cavo — supinação, não pronação",
        "Palpe e marque mentalmente a cabeça lateral do talus antes de qualquer manobra",
        "Antepé e retropé alinhados no mesmo plano é o único objetivo deste gesso",
      ],
      pitfalls: [
        "Tentar abduzir já no primeiro gesso, antes de corrigir o cavo",
        "Pronar o antepé achando que está corrigindo o varo — agrava o cavo e trava o calcâneo",
        "Gesso curto, apenas abaixo do joelho, que escorrega e perde toda a correção",
      ],
    },
    {
      n: 3,
      title: "Gessos seguintes: abduzir em torno da cabeça do talus",
      detail:
        "Com o polegar em contrapressão sobre a face lateral da cabeça do talus e os dedos apoiando o maléolo, abduzir suavemente o pé em supinação por cerca de 60 segundos, sem pronar em nenhum momento. Cada gesso ganha aproximadamente 10–15° e é trocado semanalmente; a média é de 5 a 6 gessos. O calcâneo desrota e everte por consequência da abdução, e o varo se corrige sem jamais ser manipulado diretamente. Nunca aplicar contrapressão sobre a articulação calcaneocuboide: esse é o erro de Kite, que bloqueia a desrotação do calcâneo e faz o pé estagnar.",
      figureId: "pe-torto-congenito:gessos-ponseti",
      figureVariant: "abducao",
      tips: [
        "Contrapressão exatamente sobre a cabeça lateral do talus — nunca no calcâneo nem no cuboide",
        "Manipular por ~60 segundos, com força suave e constante; dor e choro contínuo indicam força excessiva",
        "Gesso cruro-podálico com joelho a 90° é inegociável: é o que impede o pé de escapar",
      ],
      pitfalls: [
        "Pronar o antepé — trava o calcâneo em varo, aumenta o cavo e é o erro cardinal do método",
        "Pressionar a calcaneocuboide (erro de Kite) e travar a desrotação do calcâneo",
        "Forçar dorsiflexão antes de corrigir a abdução — origem do pé em mata-borrão",
      ],
    },
    {
      n: 4,
      title: "Reconhecer a correção do mediopé e indicar a tenotomia",
      detail:
        "O mediopé está corrigido quando se alcança 60–70° de abdução do pé em relação ao plano frontal da tíbia, a cabeça lateral do talus fica recoberta pelo navicular à palpação, a borda lateral torna-se reta e o calcâneo está evertido. Nesse ponto, medir a dorsiflexão com o joelho estendido: se for inferior a 10–15°, há equino residual e está indicada a tenotomia percutânea do Aquiles — situação de cerca de 80 a 90% dos pés. Um escore de retropé de Pirani que persiste elevado enquanto o de mediopé zera é a tradução numérica exata dessa indicação.",
      figureId: "pe-torto-congenito:pirani",
      figureVariant: "retrope",
      tips: [
        "60–70° de abdução com calcâneo evertido é o critério — não conte gessos, avalie o pé",
        "Meça a dorsiflexão sempre com o joelho estendido, para não ser enganado pelo gastrocnêmio",
        "Pirani do retropé ≥ 1 com mediopé corrigido = tenotomia",
      ],
      pitfalls: [
        "Indicar tenotomia antes de corrigir a abdução — o equino não cede e o pé desaba em mata-borrão",
        "Confundir a falsa dorsiflexão do mediopé com dorsiflexão verdadeira do tornozelo",
        "Insistir em mais gessos para vencer um equino que é fibrótico e não cede",
      ],
    },
    {
      n: 5,
      title: "Tenotomia percutânea do Aquiles e gesso final",
      detail:
        "Sob anestesia local ou sedação, em regime ambulatorial. Palpar o tendão, introduzir uma lâmina nº 11 por via medial 1 a 1,5 cm proximal à inserção calcânea — para evitar o feixe tibial posterior — e seccioná-lo completamente de forma transversa; sente-se um estalido característico e ganha-se imediatamente 15 a 20° de dorsiflexão. Curativo compressivo e gesso final em 60–70° de abdução e máxima dorsiflexão, mantido por 3 semanas. O tendão regenera com comprimento funcional adequado e sem perda de força do tríceps.",
      figureId: "pe-torto-congenito:tenotomia",
      figureVariant: "antes",
      tips: [
        "Via medial e 1–1,5 cm acima da inserção protege o feixe tibial posterior",
        "Secção completa: tenotomia parcial deixa equino residual e obriga a repetir o procedimento",
        "O gesso pós-tenotomia é de 3 semanas — nem menos (falha) nem mais (rigidez)",
      ],
      pitfalls: [
        "Tenotomia parcial, que deixa equino e é a causa mais comum de reintervenção",
        "Lesar a artéria tibial posterior por entrar profundo demais ou muito próximo à inserção",
        "Fazer a tenotomia com o mediopé ainda não corrigido",
      ],
    },
    {
      n: 6,
      title: "Instalar a órtese de abdução e negociar a adesão",
      detail:
        "Retirado o gesso final, a órtese entra imediatamente — qualquer intervalo é janela de recidiva. Barra com o comprimento da largura dos ombros da criança, pé afetado em 60–70° de rotação externa e pé normal em 30–40°, barra dobrada em 10–15° de dorsiflexão. Regime: 23 horas por dia nos primeiros 3 meses, depois apenas nas noites e sonos, 12–14 horas por dia, até os 4 a 5 anos. Esta é a etapa que decide o resultado: dedique a ela mais tempo de consulta do que a qualquer detalhe do gesso. Ensine a colocação, revise a pele, antecipe o desconforto das primeiras noites e reforce que a órtese mantém, mas não corrige.",
      figureId: "pe-torto-congenito:ortese",
      figureVariant: "regime",
      tips: [
        "Instale a órtese no mesmo dia da retirada do gesso final",
        "Calcanhar bem assentado no sapato: se o calcanhar sobe, o pé escapa e a órtese não funciona",
        "Escolaridade parental baixa é fator de risco de recidiva — adapte a orientação, use demonstração e material visual",
      ],
      pitfalls: [
        "Prescrever a órtese e não verificar adesão nas consultas — a não adesão é o principal preditor de recidiva",
        "Aceitar deformidade residual e esperar que a órtese a corrija",
        "Suspender a órtese cedo, quando a criança começa a andar",
      ],
    },
    {
      n: 7,
      title: "Seguir e reconhecer a recidiva precocemente",
      detail:
        "Reavaliar a cada 3 a 4 meses nos primeiros anos e depois anualmente até a maturidade esquelética. Procurar ativamente os sinais de recidiva: perda de dorsiflexão, reaparecimento de varo do retropé, adução do antepé, supinação dinâmica na marcha e desgaste assimétrico do calçado. Em toda consulta, perguntar objetivamente sobre o uso da órtese — em horas, não em impressões. A maioria das recidivas ocorre nos primeiros 2 a 3 anos e responde bem se detectada cedo.",
      figureId: "pe-torto-congenito:cave",
      figureVariant: "varo",
      tips: [
        "Pergunte quantas horas por noite, não se está usando — a resposta muda",
        "Fraqueza dos fibulares/evertores é fator de risco potente de recidiva: examine a atividade dos evertores",
        "Recidiva precoce detectada é recidiva facilmente tratada",
      ],
      pitfalls: [
        "Dar alta antes da maturidade esquelética",
        "Atribuir a recidiva à gravidade inicial em vez de investigar a adesão à órtese",
        "Deixar a recidiva evoluir até se tornar deformidade fixa e rígida",
      ],
    },
    {
      n: 8,
      title: "Tratar a recidiva: gessos primeiro, transferência depois",
      detail:
        "Diante da recidiva, separar o que é fixo do que é dinâmico. Deformidade fixa volta para uma nova série de gessos de Ponseti — o método funciona igualmente bem em recidivas e em crianças que já andam, com cerca de 89% de desfechos satisfatórios mesmo acima da idade da marcha —, com repetição da tenotomia se o equino retornar. O que persistir como supinação dinâmica na marcha, em criança acima de ~2,5–3 anos com o terceiro cuneiforme já ossificado, é indicação de transferência do tibial anterior para o terceiro cuneiforme. Liberação póstero-medial extensa fica reservada ao pé rígido que falhou a tudo isso.",
      figureId: "pe-torto-congenito:tibial-anterior",
      tips: [
        "Regessar antes de operar: quase toda recidiva responde a gessos",
        "Transferir o tibial anterior só quando o cuneiforme lateral estiver ossificado (~2,5–3 anos)",
        "A transferência trata desequilíbrio dinâmico, não deformidade fixa",
      ],
      pitfalls: [
        "Indicar liberação póstero-medial como resposta reflexa à primeira recidiva",
        "Transferir o tibial anterior sobre um pé ainda rígido — a deformidade fixa persiste",
        "Repetir a série de gessos sem corrigir a causa: a órtese continuará a ser abandonada",
      ],
    },
  ],
  postop: {
    immobilization:
      "Gessos cruro-podálicos com joelho a 90°, trocados semanalmente até a correção (média de 5 a 6 gessos). Após a tenotomia percutânea do Aquiles, gesso final em 60–70° de abdução e máxima dorsiflexão por 3 semanas. Retirado o gesso final, a imobilização passa a ser a órtese de abdução, que é mantida por anos — na prática, o tratamento nunca fica sem imobilização até os 4–5 anos.",
    weightBearing:
      "Não há restrição de carga: o bebê usa o membro normalmente dentro do gesso e a criança anda no tempo esperado. O que se controla não é a carga e sim o uso da órtese — 23 horas por dia nos primeiros 3 meses após o gesso final, depois 12–14 horas diárias (noites e sonos) até os 4 a 5 anos. Durante o período de uso noturno a criança tem atividade e calçado livres no restante do dia.",
    rehab: [
      {
        window: "0–6 semanas (gessos seriados)",
        weightBearing: "Livre dentro do gesso",
        focus:
          "Trocas semanais com manipulação; corrigir cavo, depois abdução progressiva até 60–70°. Vigiar pele, perfusão e escorregamento do gesso. Educar a família sobre a órtese desde já.",
      },
      {
        window: "3 semanas pós-tenotomia",
        weightBearing: "Livre dentro do gesso",
        focus:
          "Gesso final em máxima abdução e dorsiflexão; cicatrização e regeneração do tendão. Confirmar dorsiflexão de 15–20° na retirada.",
      },
      {
        window: "Primeiros 3 meses de órtese",
        weightBearing: "Livre; órtese 23 h/dia",
        focus:
          "Adaptação à órtese, cuidado com a pele do calcanhar, ajuste do posicionamento e revisão de adesão. Fase de maior risco de abandono.",
      },
      {
        window: "3 meses até 4–5 anos",
        weightBearing: "Livre; órtese 12–14 h/dia (noites e sonos)",
        focus:
          "Manutenção da correção, marcha e atividade normais durante o dia. Reavaliação a cada 3–4 meses buscando perda de dorsiflexão, varo ou supinação dinâmica.",
      },
      {
        window: "Após a retirada da órtese até a maturidade",
        weightBearing: "Livre",
        focus:
          "Vigilância anual de recidiva tardia, força dos evertores e função. Tratar recidiva dinâmica com transferência do tibial anterior quando indicada.",
      },
    ],
    followup:
      "Seguimento até a maturidade esquelética, a cada 3–4 meses nos primeiros anos e depois anualmente. Documentar dorsiflexão, alinhamento do retropé, borda lateral, atividade dos evertores e marcha; questionar objetivamente as horas de uso da órtese. Coortes de 30 anos mostram que o pé tratado conservadoramente funciona bem a longo prazo, com dor e limitação comparáveis às da população sem deformidade — mas panturrilha e pé permanecem menores, e sobrepeso e ocupações de alta demanda física pioram o resultado, o que merece orientação explícita ao paciente adulto.",
  },
  complications: [
    {
      name: "Recidiva da deformidade",
      detail:
        "É a complicação mais comum e o verdadeiro adversário do tratamento; séries relatam taxas entre 11% e cerca de 40%. Manifesta-se por perda de dorsiflexão, retorno do varo do retropé, adução do antepé ou supinação dinâmica na marcha, em geral nos primeiros 2 a 3 anos. Metanálise identificou a não adesão à órtese (OR ≈ 10) e a atividade deficiente dos evertores como os principais fatores de risco; a coorte de Dobbs encontrou odds ratio de 183 para não adesão.",
      prevention:
        "Educação intensiva da família sobre a órtese desde a primeira consulta, verificação objetiva das horas de uso a cada retorno, atenção redobrada em famílias com menor escolaridade e detecção precoce em consultas frequentes. Recidiva sem deformidade fixa responde a nova série de gessos.",
    },
    {
      name: "Pé em mata-borrão (rocker-bottom)",
      detail:
        "Quebra do mediopé com convexidade plantar e falsa dorsiflexão, produzida por dorsiflexão forçada do pé antes de o equino e a abdução estarem corrigidos. Simula correção enquanto o tornozelo permanece em equino verdadeiro.",
      prevention:
        "Respeitar a sequência CAVE: nunca forçar dorsiflexão antes de alcançar 60–70° de abdução; indicar a tenotomia em vez de insistir em gessos contra um equino fibrótico.",
    },
    {
      name: "Erro de pronação e estagnação da correção",
      detail:
        "Pronar o antepé durante a manipulação trava o calcâneo em varo sob o talus, impede sua desrotação e agrava o cavo. Da mesma forma, a contrapressão sobre a articulação calcaneocuboide (erro de Kite) bloqueia a desrotação do bloco calcaneopédio, e o pé deixa de progredir gesso após gesso.",
      prevention:
        "Contrapressão exclusivamente sobre a face lateral da cabeça do talus e abdução sempre em supinação; treinamento formal na técnica de Ponseti.",
    },
    {
      name: "Complicações da tenotomia percutânea",
      detail:
        "Sangramento e lesão da artéria e do nervo tibial posterior (mediais) ou do nervo sural e da artéria fibular (laterais); tenotomia incompleta com equino residual; infecção superficial. São raras, mas a proximidade do feixe medial é real no recém-nascido.",
      prevention:
        "Via medial, 1 a 1,5 cm proximal à inserção calcânea, com secção transversa completa; curativo compressivo e gesso imediato; procedimento por profissional treinado.",
    },
    {
      name: "Complicações do gesso",
      detail:
        "Úlceras de pressão sobre o calcâneo e o dorso, escorregamento do gesso com perda de correção, edema e, raramente, comprometimento vascular. O gesso que escorrega é o mais insidioso, pois a deformidade recidiva silenciosamente sob o aparelho.",
      prevention:
        "Gesso cruro-podálico com joelho a 90° e boa moldagem supramaleolar, acolchoamento adequado, orientação aos pais sobre perfusão e edema, e revisão a cada semana.",
    },
    {
      name: "Hipercorreção em pé plano valgo",
      detail:
        "Retropé em valgo, achatamento do arco e eversão excessiva, resultantes de abdução mantida além do necessário, liberação posterior excessiva ou transferência do tibial anterior lateralizada demais.",
      prevention:
        "Respeitar o alvo de 60–70° de abdução, evitar liberação extensa e posicionar a transferência do tibial anterior no terceiro cuneiforme, não mais lateralmente.",
    },
    {
      name: "Rigidez, fraqueza e dor após liberação extensa",
      detail:
        "Consequência tardia da liberação póstero-medial: pé rígido, tríceps fraco, dor e artrose. Estudos comparativos mostram panturrilha significativamente mais atrófica nos pés operados por liberação extensa do que nos tratados por Ponseti (razão de circunferência 90,8% × 94,4%), o que sustenta o Ponseti como padrão de cuidado.",
      prevention:
        "Reservar a liberação extensa para o pé teratológico rígido ou a falha verdadeira do Ponseti; esgotar gessos e transferência tendinosa antes.",
    },
    {
      name: "Hipotrofia da panturrilha e assimetria do pé",
      detail:
        "Panturrilha menor e pé 1 a 1,5 número menor no lado afetado, com discreta discrepância de comprimento do membro. Não é complicação do tratamento e sim característica intrínseca da doença, presente inclusive nos melhores resultados.",
      prevention:
        "Não é prevenível; deve ser explicada à família na primeira consulta para evitar que seja interpretada como falha terapêutica.",
    },
  ],
  evidence: [
    {
      id: "morcuende-2004-ponseti-reduz-cirurgia",
      claim:
        "Em série consecutiva de 157 pacientes (256 pés) tratados pelo método de Ponseti, a correção foi obtida em 98%, com 90% dos pacientes necessitando de 5 gessos ou menos; apenas 2,5% exigiram cirurgia corretiva extensa e houve 11% de recidivas, todas relacionadas à não adesão à órtese de abdução — e não à idade, ao tratamento prévio ou à gravidade inicial.",
      takeaway:
        "O Ponseti praticamente aboliu a cirurgia extensa no pé torto idiopático; a recidiva que resta é problema de adesão à órtese, não de gravidade da deformidade.",
      level: "IV",
      studyType: "Série de casos consecutivos (estudo de avaliação)",
      era: "classico",
      citation: {
        authors: "Morcuende JA, Dolan LA, Dietz FR, Ponseti IV",
        title: "Radical reduction in the rate of extensive corrective surgery for clubfoot using the Ponseti method.",
        journal: "Pediatrics",
        year: 2004,
        pmid: "14754952",
        doi: "10.1542/peds.113.2.376",
      },
    },
    {
      id: "dobbs-2004-adesao-ortese",
      claim:
        "Em 51 lactentes (86 pés torto idiopáticos) tratados pelo método de Ponseti, a não adesão à órtese foi o fator mais fortemente associado à recidiva (odds ratio 183; p < 0,00001), seguida de escolaridade parental de nível médio ou inferior (OR 10,7). Gravidade da deformidade, idade ao início do tratamento e tratamento prévio não influenciaram o risco de recidiva.",
      takeaway:
        "A adesão à órtese é o principal preditor de recidiva por larga margem — o tempo de consulta gasto educando a família rende mais que qualquer refinamento técnico do gesso.",
      level: "II",
      studyType: "Estudo prognóstico retrospectivo com regressão logística",
      era: "classico",
      citation: {
        authors: "Dobbs MB, Rudzki JR, Purcell DB, Walton T, Porter KR, Gurnett CA",
        title: "Factors predictive of outcome after use of the Ponseti method for the treatment of idiopathic clubfeet.",
        journal: "J Bone Joint Surg Am",
        year: 2004,
        pmid: "14711941",
        doi: "10.2106/00004623-200401000-00005",
      },
    },
    {
      id: "vanschelven-2022-metanalise-recidiva",
      claim:
        "Revisão sistemática e metanálise de 34 estudos (22 na metanálise) sobre recidiva do pé torto idiopático após correção pelo Ponseti confirmou como fatores prognósticos a atividade deficiente dos evertores (OR 255; IC95% 30–2.190), a não adesão à órtese (OR 10; IC95% 5–21), a ausência de alongamentos adicionais (OR 31), maior número de gessos (OR 3,5), menor escolaridade dos pais (OR 1,8) e escore de Dimeglio mais alto (OR 1,9), com taxas de recidiva relatadas entre 26% e 48%.",
      takeaway:
        "A evidência agregada confirma a adesão à órtese e a função dos evertores como os alvos clínicos de vigilância; o escore inicial pesa pouco na recidiva.",
      level: "II",
      studyType: "Revisão sistemática e metanálise de estudos prognósticos",
      era: "atual",
      citation: {
        authors: "Van Schelven H, Moerman S, Van der Steen M, Besselaar AT, Greve C",
        title: "Prognostic factors for recurrent idiopathic clubfoot deformity: a systematic literature review and meta-analysis.",
        journal: "Acta Orthop",
        year: 2022,
        pmid: "34607499",
        doi: "10.1080/17453674.2021.1982576",
      },
    },
    {
      id: "cooper-dietz-1995-30-anos",
      claim:
        "Aos 34 anos de idade média (25 a 42 anos), 45 pacientes com 71 pés tortos congênitos tratados de forma conservadora pela técnica de Iowa apresentaram desfecho excelente ou bom em 78%, contra 85% de controles sem deformidade — diferença não significativa quanto a dor e limitação funcional. Ocupação sedentária e evitar ganho excessivo de peso associaram-se a melhor resultado, e o enfraquecimento excessivo do tríceps sural predispôs a resultado ruim. O desfecho não pôde ser previsto pelo aspecto radiográfico.",
      takeaway:
        "O tratamento conservador entrega um pé que funciona como um pé normal em três décadas — e o alerta contra o alongamento excessivo do tríceps antecipa a lógica da tenotomia bem executada.",
      level: "III",
      studyType: "Coorte comparativa de seguimento de 30 anos",
      era: "classico",
      citation: {
        authors: "Cooper DM, Dietz FR",
        title: "Treatment of idiopathic clubfoot. A thirty-year follow-up note.",
        journal: "J Bone Joint Surg Am",
        year: 1995,
        pmid: "7593056",
        doi: "10.2106/00004623-199510000-00002",
      },
    },
    {
      id: "fulton-2015-ponseti-vs-cirurgia-extensa",
      claim:
        "Em 35 pacientes com pé torto unilateral, a razão de circunferência da panturrilha entre o lado afetado e o normal foi significativamente menor no grupo submetido a cirurgia extensa (90,8% ± 3,5%) do que no grupo tratado pelo método de Ponseti, com ou sem tenotomia percutânea (94,4% ± 3,3%).",
      takeaway:
        "Além de evitar a rigidez, o Ponseti preserva melhor o trofismo muscular do que a liberação extensa — um argumento anatômico objetivo para mantê-lo como padrão de cuidado.",
      level: "III",
      studyType: "Estudo comparativo de efetividade (coorte)",
      era: "atual",
      citation: {
        authors: "Fulton Z, Briggs D, Silva S, Szalay EA",
        title: "Calf circumference discrepancies in patients with unilateral clubfoot: Ponseti versus surgical release.",
        journal: "J Pediatr Orthop",
        year: 2015,
        pmid: "25122080",
        doi: "10.1097/BPO.0000000000000277",
      },
    },
    {
      id: "sud-2007-ponseti-vs-kite",
      claim:
        "Estudo prospectivo randomizado com 45 lactentes (67 pés) comparando os métodos de Ponseti e de Kite obteve correção em 91,7% dos pés no grupo Ponseti contra 67,7% no grupo Kite, com menor necessidade de cirurgia (3 × 10 pacientes), menos gessos e menor tempo até a correção — inclusive nos pés muito graves pela classificação de Dimeglio.",
      takeaway:
        "A superioridade do Ponseti sobre a técnica de Kite é o argumento experimental direto contra a contrapressão na calcaneocuboide: abduzir em torno do talus, e não do cuboide, é o que faz o método funcionar.",
      level: "II",
      studyType: "Ensaio clínico prospectivo randomizado",
      era: "classico",
      citation: {
        authors: "Sud A, Tiwari A, Sharma D, Kapoor S",
        title: "Ponseti's vs. Kite's method in the treatment of clubfoot--a prospective randomised study.",
        journal: "Int Orthop",
        year: 2007,
        pmid: "17323092",
        doi: "10.1007/s00264-007-0332-y",
      },
    },
    {
      id: "ferreira-2018-ponseti-apos-marcha",
      claim:
        "Metanálise de 12 estudos observacionais reunindo 654 pés de crianças com pé torto congênito não tratado acima da idade da marcha encontrou 89% de desfechos satisfatórios com o método de Ponseti (IC95% 82–94%), 18% de recidiva (IC95% 14–24%) e 7% de complicações relacionadas ao gesso.",
      takeaway:
        "Idade avançada não é contraindicação: o Ponseti deve ser tentado mesmo na criança que já anda ou já foi tratada sem sucesso, antes de qualquer liberação extensa.",
      level: "III",
      studyType: "Revisão sistemática e metanálise de estudos observacionais",
      era: "atual",
      citation: {
        authors: "Ferreira GF, Stéfani KC, Haje DP, Nogueira MP",
        title: "The Ponseti method in children with clubfoot after walking age - Systematic review and metanalysis of observational studies.",
        journal: "PLoS One",
        year: 2018,
        pmid: "30457993",
        doi: "10.1371/journal.pone.0207153",
      },
    },
  ],
  pearls: [
    "O talus é a referência fixa: tudo o mais está subluxado em torno dele, e a cabeça lateral do talus é o fulcro de toda a manipulação.",
    "CAVE é sequência, não só mnemônico — corrija o cavo primeiro, o equino por último.",
    "Abduza em torno da cabeça do talus e o varo do calcâneo se corrige sozinho; nunca manipule o retropé diretamente.",
    "Nunca pronar: a pronação trava o calcâneo em varo e agrava o cavo — é o erro cardinal do método.",
    "60–70° de abdução com calcâneo evertido é o critério para reavaliar o equino; ~80–90% dos pés precisarão de tenotomia.",
    "A adesão à órtese é o principal preditor de recidiva (OR 183 em Dobbs; OR 10 em metanálise) — vale mais tempo de consulta que qualquer detalhe do gesso.",
    "Recidiva fixa volta aos gessos; só a supinação dinâmica residual é indicação de transferência do tibial anterior.",
    "Idade acima da marcha não contraindica o Ponseti: ~89% de desfechos satisfatórios mesmo em pés não tratados.",
  ],
  pitfalls: [
    "Pronar o antepé achando que corrige o varo — trava o calcâneo e agrava o cavo.",
    "Aplicar contrapressão na articulação calcaneocuboide (erro de Kite) e bloquear a desrotação do calcâneo.",
    "Forçar dorsiflexão antes de corrigir cavo e abdução, produzindo pé em mata-borrão.",
    "Usar gesso abaixo do joelho: escorrega e perde toda a correção obtida.",
    "Tenotomia parcial ou feita com o mediopé ainda não corrigido.",
    "Prescrever a órtese sem checar adesão em horas nas consultas, e culpar a gravidade inicial pela recidiva.",
    "Indicar liberação póstero-medial extensa como resposta reflexa à primeira recidiva, entregando um pé rígido e doloroso na vida adulta.",
    "Não examinar quadris, coluna e o restante da criança, deixando passar um pé torto sindrômico ou neurogênico.",
  ],
  figures: [
    {
      id: "pe-torto-congenito:anatomia",
      caption:
        "Pé normal × pé torto em vista dorsal: navicular medializado contra o maléolo medial, calcâneo aduzido sob o talus e eixos talocalcâneos paralelos.",
      alt: "Comparação esquemática entre o esqueleto do pé normal e do pé torto congênito em vista dorsal",
      kind: "diagram",
    },
    {
      id: "pe-torto-congenito:cave",
      variant: "cavo",
      caption: "Componente CAVO: arco medial elevado por pronação do antepé sobre o retropé; primeiro raio em flexão plantar.",
      alt: "Componente cavo do pé torto congênito em perfil",
      kind: "diagram",
    },
    {
      id: "pe-torto-congenito:cave",
      variant: "aduto",
      caption: "Componente ADUTO: adução do bloco médio-antepé com borda lateral convexa e borda medial côncava.",
      alt: "Componente aduto do antepé no pé torto congênito",
      kind: "diagram",
    },
    {
      id: "pe-torto-congenito:cave",
      variant: "varo",
      caption: "Componente VARO: inversão do calcâneo sob o talus, corrigido por consequência da abdução — nunca diretamente.",
      alt: "Componente varo do retropé no pé torto congênito, vista posterior",
      kind: "diagram",
    },
    {
      id: "pe-torto-congenito:cave",
      variant: "equino",
      caption: "Componente EQUINO: flexão plantar do tornozelo por retração do tríceps sural; último a corrigir.",
      alt: "Componente equino do pé torto congênito em perfil",
      kind: "diagram",
    },
    {
      id: "pe-torto-congenito:pirani",
      variant: "mediope",
      caption: "Escore de Pirani — sinais do mediopé: curvatura da borda lateral, prega medial e cobertura da cabeça lateral do talus.",
      alt: "Sinais do mediopé no escore de Pirani",
      kind: "diagram",
    },
    {
      id: "pe-torto-congenito:pirani",
      variant: "retrope",
      caption: "Escore de Pirani — sinais do retropé: prega posterior, calcâneo vazio e rigidez do equino. Retropé ≥ 1 com mediopé corrigido indica tenotomia.",
      alt: "Sinais do retropé no escore de Pirani",
      kind: "diagram",
    },
    {
      id: "pe-torto-congenito:dimeglio",
      caption: "Classificação de Dimeglio: quatro parâmetros de redutibilidade em graus mais quatro pontos acessórios; graus I a IV.",
      alt: "Classificação de Dimeglio para o pé torto congênito",
      kind: "diagram",
    },
    {
      id: "pe-torto-congenito:gessos-ponseti",
      variant: "cavo",
      caption: "Primeiro gesso de Ponseti: supinar o antepé e elevar o primeiro raio para alinhar antepé e retropé — sem abdução ainda.",
      alt: "Primeiro gesso do método de Ponseti corrigindo o cavo",
      kind: "diagram",
    },
    {
      id: "pe-torto-congenito:gessos-ponseti",
      variant: "abducao",
      caption: "Gessos 2 a 4: abdução progressiva do pé em torno da cabeça do talus, com contrapressão do polegar sobre sua face lateral.",
      alt: "Abdução progressiva em torno da cabeça do talus no método de Ponseti",
      kind: "diagram",
    },
    {
      id: "pe-torto-congenito:gessos-ponseti",
      variant: "final",
      caption: "Abdução final de 60–70°: o calcâneo desrota e everte, e o varo se corrige por consequência.",
      alt: "Abdução final de sessenta a setenta graus no método de Ponseti",
      kind: "diagram",
    },
    {
      id: "pe-torto-congenito:gessos-ponseti",
      variant: "erro-pronacao",
      caption: "Erro cardinal: pronar o antepé trava o calcâneo em varo e agrava o cavo; a contrapressão na calcaneocuboide é o erro de Kite.",
      alt: "Erro de pronação do antepé e erro de Kite no tratamento do pé torto",
      kind: "diagram",
    },
    {
      id: "pe-torto-congenito:tenotomia",
      variant: "antes",
      caption: "Tenotomia percutânea do Aquiles: lâmina nº 11 por via medial, 1 a 1,5 cm proximal à inserção calcânea.",
      alt: "Nível e via da tenotomia percutânea do tendão de Aquiles",
      kind: "diagram",
    },
    {
      id: "pe-torto-congenito:tenotomia",
      variant: "depois",
      caption: "Após a tenotomia: ganho imediato de 15 a 20° de dorsiflexão e gesso final por 3 semanas; o tendão regenera com comprimento funcional.",
      alt: "Dorsiflexão obtida após a tenotomia percutânea do Aquiles",
      kind: "diagram",
    },
    {
      id: "pe-torto-congenito:ortese",
      variant: "posicao",
      caption: "Órtese de abdução: barra na largura dos ombros, pé afetado em 60–70° e pé normal em 30–40°, com 10–15° de dorsiflexão.",
      alt: "Posicionamento da órtese de abdução tipo Denis-Browne",
      kind: "diagram",
    },
    {
      id: "pe-torto-congenito:ortese",
      variant: "regime",
      caption: "Regime de uso: 23 h/dia nos primeiros 3 meses, depois noites e sonos (12–14 h/dia) até os 4–5 anos.",
      alt: "Regime de uso da órtese de abdução no pé torto congênito",
      kind: "diagram",
    },
    {
      id: "pe-torto-congenito:tibial-anterior",
      caption: "Transferência do tibial anterior para o terceiro cuneiforme: lateraliza o vetor de força e trata a recidiva dinâmica em supinação.",
      alt: "Transferência do tendão tibial anterior para o terceiro cuneiforme",
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
      "Rockwood and Wilkins' Fractures in Children, 10ª ed. (2024) / Tachdjian's Pediatric Orthopaedics 6ª",
  },
});
