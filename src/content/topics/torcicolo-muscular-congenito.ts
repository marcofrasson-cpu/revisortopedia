import { defineTopic } from "../../types/topic";

/* Torcicolo muscular congênito (TMC) — tópico de ortopedia pediátrica.
   Escopo: encurtamento/fibrose do esternocleidomastoideo; postura em inclinação
   ipsilateral + rotação contralateral; pseudotumor do ECM no lactente;
   plagiocefalia associada; rastreio obrigatório do quadril (DDQ); diagnóstico
   diferencial (ocular, neurológico, ósseo/Klippel-Feil, C1–C2 rotatório);
   alongamento/fisioterapia como 1ª linha; liberação cirúrgica no refratário.
   Condição do desenvolvimento, NÃO operatória na maioria: `approaches` lista os
   métodos conservadores e as vias cirúrgicas de resgate; `technique` é a
   SEQUÊNCIA DE CONDUTA, não um tempo cirúrgico.
   Todas as figuras são prefixadas por "torcicolo-muscular-congenito:".
   Evidência verificada no PubMed (PMIDs/DOIs reais; Walsh 1998 e Minihane 2008
   sem DOI atribuído, citados por PMID). Bibliografia oficial TEOT 2026. */
export const topic = defineTopic({
  id: "peds-pescoco-tmc",
  slug: "torcicolo-muscular-congenito",
  regionId: "ortopedia-pediatrica",
  bone: "Pescoço (criança)",
  injury: "Encurtamento do esternocleidomastoideo",
  title: "Torcicolo muscular congênito",
  subtitle:
    "Um músculo curto define toda a postura da cabeça. Tratado cedo com alongamento, resolve em mais de 90%; ignorado, fixa-se na face e no crânio.",
  laterality: null,
  status: "complete",

  overview:
    "O torcicolo muscular congênito (TMC) é o encurtamento e a fibrose unilateral do músculo esternocleidomastoideo (ECM), e é a terceira anomalia musculoesquelética congênita mais frequente, atrás apenas da displasia do desenvolvimento do quadril e do pé torto. Toda a apresentação clínica decorre de um único fato mecânico: o ECM une o processo mastoide (posterior e superior) ao manúbrio e à clavícula (anterior e inferior). Se ele encurta, aproxima esses dois pontos — a cabeça INCLINA para o lado do músculo doente e o queixo RODA para o lado oposto. Reconhecer esse vetor é suficiente para deduzir o exame físico inteiro e as manobras de alongamento.\n\nNo lactente, o achado mais característico é o \"pseudotumor\" (ou tumor do ECM): uma massa fusiforme, firme e indolor no ventre muscular, que aparece nas primeiras semanas, cresce por 1–2 meses e depois regride espontaneamente, deixando em seu lugar uma banda fibrótica. Não é neoplasia e não se biopsia — é fibrose. Cheng demonstrou que o subgrupo clínico (pseudotumor > torcicolo muscular > torcicolo postural) e o déficit inicial de rotação passiva são os melhores preditores do tempo de tratamento e do risco de cirurgia.\n\nDuas associações são obrigatórias na primeira consulta. A primeira é a PLAGIOCEFALIA: a criança que não roda a cabeça deita sempre sobre o mesmo ponto e remodela o crânio ainda maleável — deformidade que se corrige junto com o torcicolo, desde que não seja confundida com uma craniossinostose lambdoide. A segunda é a DISPLASIA DO DESENVOLVIMENTO DO QUADRIL: ambas compartilham a mesma origem de moldagem intrauterina, e a coexistência é real (~5–12%), embora bem menor que os 20% classicamente repetidos. A regra prática é sólida: TODA criança com TMC tem o quadril EXAMINADO; a imagem segue os critérios habituais de rastreio.\n\nO tratamento é conservador e funciona: com alongamento manual controlado iniciado antes de 1 ano, mais de 90% obtêm resultado bom ou excelente, e a idade de início é preditor independente do desfecho. A cirurgia — liberação do ECM — fica reservada ao refratário após ~6 meses de programa bem conduzido, tipicamente depois de 1 ano de idade, com déficits residuais de rotação/inclinação acima de 15°. O relógio importa: assimetria craniofacial instalada e déficit fixo são, em grande parte, irreversíveis.",

  keyFacts: [
    { label: "Definição", value: "Fibrose/encurtamento unilateral do esternocleidomastoideo" },
    { label: "Frequência", value: "3ª anomalia musculoesquelética congênita mais comum (após DDQ e pé torto)" },
    { label: "Postura", value: "Inclina PARA o lado doente, queixo RODA para o lado oposto" },
    { label: "Pseudotumor do ECM", value: "≈55% dos casos; surge < 4–8 semanas, regride sozinho — não é tumor, não biopsiar" },
    { label: "Fatores de risco", value: "Apresentação pélvica, parto assistido/distócico, primogenitura, oligoidrâmnio" },
    { label: "Associação obrigatória", value: "Rastrear DDQ (~5–12%) — exame do quadril em todos" },
    { label: "Associação frequente", value: "Plagiocefalia posicional (paralelogramo) — diferenciar da sinostose lambdoide (trapézio)" },
    { label: "1ª linha", value: "Alongamento passivo + fisioterapia — >90% bons/excelentes se iniciado < 1 ano" },
    { label: "Cirurgia", value: "Refratário a ≥6 meses de alongamento, geralmente > 1 ano: liberação uni ou bipolar" },
    { label: "Bandeira vermelha", value: "Início após 6 meses, dor, rigidez aguda ou sinais neurológicos → NÃO é TMC" },
  ],

  anatomy: {
    text:
      "O esternocleidomastoideo tem duas cabeças distais — a esternal, que se insere no manúbrio, e a clavicular, no terço medial da clavícula — que convergem para uma inserção proximal única no processo mastoide e na linha nucal superior. Essa geometria oblíqua explica a ação combinada do músculo: contraído de um lado, ele inclina a cabeça para o próprio lado e roda o queixo para o lado contrário. É exatamente a postura do TMC — e é também o mapa das manobras de alongamento, que devem fazer o inverso: rodar o queixo PARA o lado doente e inclinar a orelha PARA LONGE dele.\n\nA inervação motora vem do nervo acessório (XI), que penetra a face profunda do músculo na junção dos terços superior e médio e emerge na sua borda posterior, no chamado ponto de Erb, junto do nervo auricular magno. Essa topografia tem consequência cirúrgica direta: a liberação DISTAL (junto à clavícula) fica longe do XI, ao passo que a liberação PROXIMAL (mastóidea) da técnica bipolar o expõe — a razão pela qual a bipolar é reservada às contraturas graves.\n\nA histologia do músculo doente mostra fibrose endomisial com deposição de colágeno e substituição do tecido muscular, sem inflamação aguda — compatível com uma síndrome compartimental intrauterina ou perinatal do ventre muscular, hipótese reforçada pela forte associação com apresentação pélvica e parto assistido. Isso explica também o comportamento do pseudotumor: uma fase de crescimento seguida de regressão e substituição por banda fibrótica.\n\nDois tecidos vizinhos moldam o quadro. O crânio do lactente é maleável e suas suturas estão abertas: a cabeça que repousa sempre sobre o mesmo ponto occipital gera plagiocefalia posicional. E a hemiface do lado doente, submetida à compressão contínua do decúbito, achata-se progressivamente — a assimetria craniofacial é a sequela que a intervenção precoce existe para evitar.",
    figureIds: [
      "torcicolo-muscular-congenito:anatomia",
      "torcicolo-muscular-congenito:postura",
    ],
  },

  classification: [
    {
      id: "cheng-subgrupos",
      name: "Subgrupos clínicos de Cheng",
      basis: "Achado palpatório no ECM e déficit de rotação passiva ao diagnóstico",
      note:
        "É a classificação com valor prognóstico demonstrado: subgrupo e déficit inicial de rotação predizem o tempo de tratamento e o risco de cirurgia (Cheng, JBJS Am 2001 — 821 casos). Selecione um subgrupo.",
      types: [
        {
          code: "1",
          label: "Pseudotumor do ECM",
          description:
            "Massa fusiforme firme e indolor no ventre do ECM (≈55% dos casos). Maior déficit de rotação, maior duração de tratamento e maior risco cirúrgico — ≈8% acabam operados.",
          figureId: "torcicolo-muscular-congenito:subgrupos",
          figureVariant: "tumor",
        },
        {
          code: "2",
          label: "Torcicolo muscular",
          description:
            "Espessamento e tensão difusa do ECM, SEM massa palpável (≈34%). Curso intermediário — ≈3% acabam operados.",
          figureId: "torcicolo-muscular-congenito:subgrupos",
          figureVariant: "muscular",
        },
        {
          code: "3",
          label: "Torcicolo postural",
          description:
            "Preferência postural da cabeça sem massa, sem banda tensa e praticamente sem déficit de rotação passiva (≈11%). Melhor prognóstico — nenhum operou na série original.",
          figureId: "torcicolo-muscular-congenito:subgrupos",
          figureVariant: "postural",
        },
      ],
    },
    {
      id: "gravidade-rotacao",
      name: "Gravidade pelo déficit de rotação passiva",
      basis: "Diferença de rotação cervical passiva entre os lados",
      note:
        "Adaptada da estratificação de gravidade do guia de prática clínica da APTA (2018). Orienta a frequência das sessões e o momento de escalonar a conduta.",
      types: [
        {
          code: "L",
          label: "Leve (< 15°)",
          description:
            "Assimetria discreta, rotação quase completa. Programa domiciliar orientado, reavaliação espaçada. Alta expectativa de resolução rápida.",
        },
        {
          code: "M",
          label: "Moderado (15–30°)",
          description:
            "Restrição clara ao alongamento passivo. Fisioterapia supervisionada + programa domiciliar diário; reavaliação a cada 2–4 semanas.",
        },
        {
          code: "G",
          label: "Grave (> 30°)",
          description:
            "Grande restrição, frequentemente com pseudotumor e plagiocefalia. Fisioterapia intensiva; considerar órtese/TOT collar em > 4 meses e cirurgia se refratário.",
        },
      ],
    },
    {
      id: "idade-apresentacao",
      name: "Estratificação pela idade à apresentação",
      basis: "Idade no início do tratamento — principal fator modificável do prognóstico",
      note:
        "A idade de início é preditor independente do desfecho e da duração do tratamento. Esta é a classificação que muda a conduta na prática.",
      types: [
        {
          code: "A",
          label: "< 3 meses",
          description:
            "Janela ideal. Alongamento com resolução rápida na grande maioria; plagiocefalia ainda totalmente remodelável.",
        },
        {
          code: "B",
          label: "3–12 meses",
          description:
            "Ainda conservador e com bons resultados, porém com tratamento mais longo e maior risco de assimetria craniofacial residual.",
        },
        {
          code: "C",
          label: "> 12 meses",
          description:
            "Resposta ao alongamento cai muito. Avaliar cirurgia se persistem déficit > 15°, banda tensa e inclinação — sempre reabrindo o diagnóstico diferencial.",
        },
        {
          code: "D",
          label: "Negligenciado (criança maior/adulto)",
          description:
            "Deformidade craniofacial e escoliose cervicotorácica compensatória fixas. A liberação ainda melhora amplitude, inclinação e estética, mas a assimetria facial não se corrige.",
        },
      ],
    },
  ],

  indications: {
    operative: [
      "Falha de ≥6 meses de alongamento manual controlado e bem conduzido (critério de Cheng)",
      "Idade geralmente > 1 ano, com déficit residual de rotação E de inclinação lateral > 15°",
      "Banda fibrótica ou pseudotumor residual palpável e tenso",
      "Inclinação persistente da cabeça com assimetria craniofacial progredindo",
      "Apresentação tardia (criança em idade escolar, adolescente ou adulto) com contratura fixa do ECM",
    ],
    nonOperative: [
      "Todo lactente ao diagnóstico, qualquer subgrupo — alongamento passivo é a 1ª linha universal",
      "Torcicolo postural e torcicolo muscular sem pseudotumor (melhor prognóstico)",
      "Pseudotumor do ECM: NÃO é indicação cirúrgica nem de biópsia — regride sozinho",
      "Plagiocefalia posicional associada: reposicionamento, tummy time e ambiente; capacete só se refratária",
      "Criança < 1 ano, mesmo com déficit grave, ainda em melhora mensurável sob fisioterapia",
    ],
    decisionNotes:
      "A decisão é governada por três variáveis: idade, subgrupo e déficit de rotação passiva. O erro clássico não é operar demais — é encaminhar tarde. Antes de qualquer coisa, confirme o diagnóstico: só é TMC se houver ECM tenso/encurtado com restrição PASSIVA. Torcicolo que começa depois dos 6 meses, que dói, que é agudo, que oscila de lado, que vem com febre ou sinais neurológicos NÃO é torcicolo muscular congênito — é ocular, ósseo (Klippel-Feil), articular (C1–C2 rotatório/Grisel), neurológico (tumor de fossa posterior, malformação de Chiari, siringomielia) ou refluxo (síndrome de Sandifer). O ECM tenso do lado CONTRALATERAL à inclinação é uma bandeira vermelha: no TMC o músculo doente é sempre o do lado para o qual a cabeça inclina.\n\nConfirmado o TMC, comece a fisioterapia imediatamente e examine o quadril no mesmo dia. O alongamento é tratado como sucesso presumido: mais de 90% resolvem, e o único preditor que você controla é a precocidade. Reavalie a cada 2–4 semanas com medidas objetivas de rotação e inclinação — a ausência de progresso mensurável em 6 meses, e não o valor absoluto, é o gatilho para escalar.\n\nA cirurgia é de resgate e não tem urgência antes de 1 ano — o músculo ainda responde e o crânio ainda remodela. Depois de 1 ano com déficit fixo > 15°, esperar mais só acumula deformidade craniofacial irreversível. Na criança maior e no adulto negligenciado a liberação continua valendo a pena: recupera amplitude e corrige a inclinação com poucas complicações, mesmo que a assimetria facial já instalada não se desfaça. A escolha entre unipolar e bipolar segue a gravidade: comece unipolar (distal), que é menos invasiva, poupa o nervo acessório e preserva o contorno em V do pescoço; reserve a bipolar às contraturas graves ou negligenciadas.",
  },

  approaches: [
    {
      id: "alongamento-manual",
      name: "Alongamento manual controlado (1ª linha)",
      indication:
        "Todo lactente com TMC, em qualquer subgrupo. Quanto antes iniciado, mais curto o tratamento e melhor o desfecho — a idade de início é preditor independente.",
      interval:
        "Dois vetores, ambos opostos à ação do ECM doente: (1) ROTAÇÃO do queixo PARA o lado acometido, alongando a cabeça esternal; (2) INCLINAÇÃO lateral da orelha PARA LONGE do lado acometido, alongando a cabeça clavicular. O ombro ipsilateral é firmemente estabilizado — sem isso, o movimento é absorvido pelo tronco e nada se alonga.",
      atRisk: [
        "Alongamento forçado ou doloroso — o choro é sinal de excesso, não de eficácia",
        "Fratura de clavícula ou lesão de plexo braquial não reconhecidas (falso TMC do recém-nascido)",
        "Instabilidade C1–C2 não diagnosticada (Down, Klippel-Feil) — alongar antes de excluir é perigoso",
      ],
      figureId: "torcicolo-muscular-congenito:alongamento",
    },
    {
      id: "posicionamento-ambiente",
      name: "Posicionamento e modificação do ambiente",
      indication:
        "Complemento obrigatório do alongamento em todos os casos, e único tratamento necessário em muitos torcicolos posturais.",
      interval:
        "Transformar o ambiente em alongamento ativo contínuo: berço, estímulos visuais, brinquedos e a face do cuidador posicionados de modo a induzir a rotação para o lado acometido; alternar o lado da amamentação e do colo; tummy time supervisionado várias vezes ao dia, que fortalece a musculatura cervical e alivia a pressão occipital.",
      atRisk: [
        "Tempo excessivo em bebê-conforto, cadeirinha e balanços — perpetua a pressão occipital e a plagiocefalia",
        "Sono em decúbito ventral não supervisionado (risco de morte súbita) — tummy time é só acordado e vigiado",
      ],
    },
    {
      id: "ortese-tot",
      name: "Órtese cervical (TOT collar) e capacete craniano",
      indication:
        "Órtese cervical como adjuvante da fisioterapia em lactentes > 4 meses com inclinação residual persistente e controle cefálico adequado. Capacete apenas na plagiocefalia moderada/grave refratária ao reposicionamento.",
      interval:
        "O TOT collar (tubular orthosis for torticollis) apoia-se na mandíbula e no ombro do lado da inclinação, criando um estímulo tátil constante que induz a criança a endireitar ativamente a cabeça. O capacete não empurra o crânio: bloqueia o crescimento nas áreas cheias e deixa espaço livre nas achatadas, redirecionando o crescimento.",
      atRisk: [
        "Lesão de pele por pressão na mandíbula e no acrômio",
        "Uso em lactente sem controle cefálico ou com sonolência — risco de obstrução de via aérea",
        "Capacete indicado sem corrigir o torcicolo de base — a plagiocefalia recidiva",
      ],
      figureId: "torcicolo-muscular-congenito:plagiocefalia",
    },
    {
      id: "liberacao-unipolar",
      name: "Liberação unipolar (distal) do ECM",
      indication:
        "Primeira escolha cirúrgica no refratário: falha de ≥6 meses de alongamento, geralmente > 1 ano, com déficit > 15° e banda tensa. Também é suficiente na maioria dos casos negligenciados de adolescentes e adultos.",
      interval:
        "Incisão transversa de ~3–4 cm em prega cutânea, cerca de 1–2 cm ACIMA e paralela à clavícula (nunca sobre ela — a cicatriz alarga e migra). Divide-se o platisma, isola-se e secciona-se cada uma das duas cabeças distais separadamente, ressecando um segmento para evitar reconstituição. Verifica-se a correção com rotação e inclinação sob visão direta; qualquer banda residual de fáscia cervical profunda que ainda restrinja é liberada.",
      atRisk: [
        "Veia jugular externa e veia jugular interna (imediatamente profundas ao ECM)",
        "Artéria carótida comum e nervo vago na bainha carotídea — dissecção subperiosteal/subfascial protege",
        "Nervo auricular magno e ramos sensitivos do plexo cervical (dormência retroauricular)",
        "Cúpula pleural e ducto torácico à esquerda, se a dissecção descer demais na base do pescoço",
      ],
      figureId: "torcicolo-muscular-congenito:liberacao",
    },
    {
      id: "liberacao-bipolar",
      name: "Liberação bipolar (distal + mastóidea)",
      indication:
        "Contratura grave, torcicolo negligenciado do adolescente/adulto ou correção insuficiente após a liberação distal isolada. Corrige mais, ao custo de mais risco e mais sequela estética.",
      interval:
        "Acrescenta à liberação distal uma segunda incisão retroauricular, com desinserção do ECM do processo mastoide. É aqui que o nervo acessório (XI) fica exposto — ele penetra a face profunda do músculo na junção dos terços superior e médio; a desinserção mantém-se rente ao periósteo mastóideo para poupá-lo. A variante de Ferkel associa Z-plastia de alongamento, preservando o contorno em V do pescoço.",
      atRisk: [
        "Nervo acessório (XI) — a estrutura crítica da liberação proximal; lesão causa trapézio caído e ombro doloroso",
        "Nervo facial (ramo marginal) e nervo auricular magno na dissecção retroauricular",
        "Perda do contorno em V do pescoço e cicatriz retroauricular visível",
        "Hipercorreção com inclinação para o lado oposto",
      ],
      figureId: "torcicolo-muscular-congenito:liberacao",
    },
  ],

  technique: [
    {
      n: 1,
      title: "Confirmar que é TMC — e não outro torcicolo",
      detail:
        "Palpe o ECM em toda a extensão procurando massa fusiforme (pseudotumor) ou banda tensa, e meça a rotação e a inclinação PASSIVAS dos dois lados com a criança em decúbito dorsal e os ombros firmemente apoiados. O diagnóstico exige restrição passiva com ECM tenso do lado para o qual a cabeça inclina. Documente os graus: eles são a linha de base contra a qual todo o tratamento será julgado.",
      figureId: "torcicolo-muscular-congenito:postura",
      tips: [
        "Colha a história perinatal: apresentação pélvica e parto assistido apoiam fortemente o diagnóstico",
        "Meça sempre com o ombro estabilizado — sem isso a rotação do tronco simula rotação cervical e superestima a amplitude",
        "O pseudotumor é firme, indolor, móvel com o músculo e cresce até ~2 meses antes de regredir: reconheça e tranquilize",
      ],
      pitfalls: [
        "Chamar de TMC uma preferência postural sem qualquer restrição passiva — é torcicolo postural, prognóstico e conduta diferentes",
        "Biopsiar ou solicitar RM do pseudotumor: gera ansiedade, custo e nenhuma mudança de conduta",
        "Aceitar o diagnóstico sem examinar clavícula e plexo braquial no recém-nascido",
      ],
    },
    {
      n: 2,
      title: "Classificar: subgrupo de Cheng, déficit de rotação e idade",
      detail:
        "Enquadre em pseudotumor, muscular ou postural, registre o déficit de rotação passiva em graus e a idade. Esses três dados fecham o prognóstico e ditam a intensidade do programa: o subgrupo e o déficit inicial predizem a duração do tratamento e o risco de cirurgia, e a idade de início é o único preditor sob seu controle.",
      figureId: "torcicolo-muscular-congenito:subgrupos",
      figureVariant: "tumor",
      tips: [
        "Déficit > 30° com pseudotumor = o cenário de maior risco: sessões supervisionadas e reavaliação apertada",
        "Registre também a assimetria craniofacial e a plagiocefalia com fotos — a evolução objetiva sustenta a decisão",
        "Explique à família na primeira consulta que o tempo de tratamento é medido em meses, não em semanas: a adesão cai quando a expectativa é irreal",
      ],
      pitfalls: [
        "Tratar todos os subgrupos com a mesma intensidade — o postural resolve com ambiente, o pseudotumor exige programa formal",
        "Não medir os graus e julgar a evolução \"de olho\": sem número não há critério de falha",
      ],
    },
    {
      n: 3,
      title: "Alongamento passivo em ROTAÇÃO — queixo para o lado acometido",
      detail:
        "Criança em decúbito dorsal. Uma mão fixa firmemente o ombro do lado acometido contra a superfície; a outra apoia a cabeça e roda o queixo PARA o lado acometido, até sentir a resistência elástica do músculo — nunca além. Sustente 10–15 segundos e solte lentamente. Repita 10–15 vezes, várias sessões ao dia. Alonga primariamente a cabeça esternal.",
      figureId: "torcicolo-muscular-congenito:alongamento",
      tips: [
        "Ensine a manobra COM a família na consulta e peça que a demonstrem de volta — o tratamento acontece em casa, não no consultório",
        "Aproveite os momentos de troca de fralda e de banho: rotina batida vence sessão heroica",
        "A criança deve permanecer calma; o alongamento é lento, sustentado e indolor",
      ],
      pitfalls: [
        "Não fixar o ombro: o tronco roda junto e o ECM não é alongado",
        "Alongamento rápido, balístico ou até o choro — provoca microtrauma, mais fibrose e abandono do tratamento pela família",
      ],
    },
    {
      n: 4,
      title: "Alongamento passivo em INCLINAÇÃO — orelha para longe do lado acometido",
      detail:
        "Com o ombro do lado acometido estabilizado para baixo, incline a cabeça levando a orelha CONTRALATERAL em direção ao seu ombro, afastando o mastoide doente da clavícula. Sustente 10–15 segundos, 10–15 repetições. Alonga primariamente a cabeça clavicular. Rotação e inclinação são complementares: as duas cabeças do ECM precisam ser alongadas.",
      figureId: "torcicolo-muscular-congenito:alongamento",
      tips: [
        "Mantenha o pescoço em posição neutra em flexo-extensão durante a inclinação, para concentrar o vetor no ECM",
        "Alongar as duas cabeças na mesma sessão: fazer só a rotação deixa a cabeça clavicular curta e a inclinação persiste",
      ],
      pitfalls: [
        "Empurrar a cabeça em vez de estabilizar o ombro — desloca o ponto fixo e desperdiça a manobra",
        "Somar hiperextensão cervical à inclinação: nenhum ganho no ECM e risco desnecessário",
      ],
    },
    {
      n: 5,
      title: "Rastrear o quadril e a plagiocefalia — na mesma consulta",
      detail:
        "Examine ativamente o quadril de TODA criança com TMC: Ortolani e Barlow no recém-nascido, abdução simétrica e sinal de Galeazzi depois. A coexistência com DDQ é real, embora menor que os 20% classicamente citados. Com exame do quadril normal e sem outros fatores de risco, não há indicação de imagem de rotina só por causa do torcicolo; a imagem segue os critérios habituais (exame alterado, apresentação pélvica, história familiar). Avalie o crânio pelo vértice e diferencie plagiocefalia posicional (paralelogramo, orelha ANTERIOR) de sinostose lambdoide (trapézio, orelha POSTERIOR e crista palpável).",
      figureId: "torcicolo-muscular-congenito:rastreio-quadril",
      tips: [
        "A posição da ORELHA na vista do vértice é o discriminador mais confiável entre plagiocefalia posicional e sinostose",
        "A plagiocefalia posicional melhora com reposicionamento e tummy time; capacete só na refratária moderada/grave e enquanto o crânio ainda cresce rápido",
        "Examine também os pés (metatarso aduto) — a mesma moldagem intrauterina explica o pacote de deformidades posicionais",
      ],
      pitfalls: [
        "Pedir ultrassom de quadril para todo TMC com exame normal — inflaciona custo e ansiedade sem mudar conduta",
        "O oposto e mais grave: não examinar o quadril e perder uma DDQ tratável",
        "Confundir sinostose lambdoide com plagiocefalia posicional e insistir em reposicionamento por meses — a sinostose não responde",
      ],
    },
    {
      n: 6,
      title: "Excluir os diferenciais quando a história não fecha",
      detail:
        "Reabra o diagnóstico sempre que o quadro fugir do padrão: início após os 6 meses, dor, torcicolo agudo ou intermitente, ECM tenso do lado CONTRALATERAL à inclinação, sinais neurológicos, ou ausência de resposta ao alongamento. Investigue causa ocular (paresia do oblíquo superior — a inclinação desaparece ao ocluir um olho), óssea (Klippel-Feil: pescoço curto, implantação baixa dos cabelos, mobilidade limitada), articular (subluxação rotatória C1–C2, síndrome de Grisel) e neurológica (tumor de fossa posterior, Chiari, siringomielia).",
      figureId: "torcicolo-muscular-congenito:diferencial",
      figureVariant: "ocular",
      tips: [
        "Radiografia da coluna cervical antes de qualquer cirurgia: exclui anomalia vertebral e instabilidade",
        "Torcicolo doloroso e agudo em criança maior é C1–C2 até prova em contrário — TC dinâmica, não fisioterapia",
        "Torcicolo com vômitos, ataxia, papiledema ou sinais de tronco: neuroimagem imediata, fossa posterior",
      ],
      pitfalls: [
        "Insistir em fisioterapia num torcicolo que não é muscular — atrasa o diagnóstico da causa real",
        "Operar um torcicolo ocular ou ósseo: a deformidade não corrige e a criança perde o músculo",
      ],
    },
    {
      n: 7,
      title: "Reavaliar, dar alta ou escalonar",
      detail:
        "Reavalie a cada 2–4 semanas com as MESMAS medidas: rotação e inclinação passivas, banda/massa palpável, inclinação em repouso e simetria craniofacial. Critérios de alta: amplitude passiva simétrica, movimento ativo simétrico, marcos motores adequados e ausência de banda residual. Gatilho de escalonamento: ausência de progresso mensurável após ~6 meses de programa bem conduzido, com déficit residual > 15° em criança de ~1 ano.",
      figureId: "torcicolo-muscular-congenito:subgrupos",
      figureVariant: "postural",
      tips: [
        "Antes de rotular como falha, audite a ADESÃO: a maioria das \"falhas\" é programa domiciliar não executado",
        "Mantenha seguimento após a alta até a idade de marcha — a recidiva ocorre e é silenciosa",
        "Falha refratária com criança sob 1 ano ainda em melhora: continue: o músculo ainda responde e o crânio remodela",
      ],
      pitfalls: [
        "Encaminhar tarde: assimetria craniofacial instalada é, em grande parte, irreversível",
        "Operar por impaciência da família num programa de ≤6 meses, ainda com ganho mensurável",
      ],
    },
    {
      n: 8,
      title: "Liberação cirúrgica do ECM no refratário",
      detail:
        "Decúbito dorsal, coxim interescapular, cabeça e pescoço livres no campo para testar a correção; sem bloqueador neuromuscular de longa duração, para permitir a estimulação do nervo acessório. Comece pela liberação UNIPOLAR distal: incisão transversa de ~3–4 cm em prega, 1–2 cm acima e paralela à clavícula; divide-se o platisma, isolam-se e seccionam-se separadamente as cabeças esternal e clavicular, ressecando um segmento. Teste rotação e inclinação sob visão direta e libere qualquer banda residual da fáscia cervical profunda. Acrescente a liberação MASTÓIDEA (bipolar) apenas se a correção for insuficiente — identificando e protegendo o nervo acessório.",
      figureId: "torcicolo-muscular-congenito:liberacao",
      figureVariant: "unipolar",
      tips: [
        "Incisão em prega cutânea 1–2 cm ACIMA da clavícula, jamais sobre ela: sobre o osso a cicatriz alarga e migra",
        "Trabalhe rente ao músculo, na sua face superficial e profunda, sob visão direta: a jugular interna e a bainha carotídea estão logo atrás",
        "Ressecar um segmento de cada cabeça (não apenas seccionar) reduz a reconstituição fibrosa e a recidiva",
        "Prefira a unipolar sempre que ela corrigir: poupa o XI, evita a cicatriz retroauricular e preserva o contorno em V do pescoço",
      ],
      pitfalls: [
        "Liberar só a cabeça esternal e esquecer a clavicular — correção incompleta e recidiva precoce",
        "Dissecar a inserção mastóidea sem identificar o nervo acessório: trapézio caído e ombro doloroso permanentes",
        "Descer demais na base do pescoço à esquerda — cúpula pleural e ducto torácico",
        "Confiar na secção do músculo sem testar a amplitude na mesa: a fáscia cervical profunda pode ser o verdadeiro bloqueio",
      ],
    },
    {
      n: 9,
      title: "Reabilitação pós-operatória — a metade que decide o resultado",
      detail:
        "A cirurgia apenas devolve o comprimento; quem mantém é a reabilitação. Alongamento passivo é reiniciado nos primeiros dias, em posição de hipercorreção, e mantido intensivamente por ~3–6 meses. Órtese ou colar em hipercorreção pode ser usado nas primeiras semanas, sobretudo em crianças maiores e adultos. O fortalecimento ativo do ECM contralateral e a reeducação da posição cefálica em linha média completam o programa.",
      figureId: "torcicolo-muscular-congenito:alongamento",
      tips: [
        "Começar o alongamento cedo: o espaço criado pela liberação se fecha com fibrose se não for mantido",
        "Espelho e brincadeiras de linha média reeducam ativamente a posição da cabeça na criança maior",
        "Alinhe a expectativa: amplitude e inclinação melhoram muito; a assimetria facial já instalada não se desfaz",
      ],
      pitfalls: [
        "Alta sem programa de reabilitação estruturado — a principal causa de recidiva pós-operatória",
        "Imobilizar rigidamente e por muito tempo, sem alongar: converte a liberação em nova contratura",
      ],
    },
  ],

  postop: {
    immobilization:
      "No tratamento conservador não há imobilização: o \"aparelho\" é o programa domiciliar de alongamento somado ao posicionamento ambiental. Em lactentes > 4 meses com inclinação residual e bom controle cefálico, o TOT collar pode ser associado como estímulo tátil ao endireitamento ativo. Após a liberação cirúrgica, colar cervical ou órtese em posição de HIPERCORREÇÃO por ~3–6 semanas em crianças maiores e adultos; em crianças pequenas, o alongamento supervisionado costuma bastar. Em nenhum cenário a imobilização substitui o alongamento — ela apenas mantém a posição entre as sessões.",
    weightBearing:
      "Não se aplica carga axial — a condição é cervical. O equivalente funcional é o uso da cabeça e do ambiente: tummy time supervisionado várias vezes ao dia desde o diagnóstico (fortalece extensores cervicais e alivia a pressão occipital), estímulos e brinquedos dispostos para forçar a rotação ATIVA para o lado acometido, e restrição do tempo em bebê-conforto e cadeirinhas, que perpetuam a plagiocefalia. No pós-operatório, movimento cervical ativo livre e indolor é liberado desde cedo, dentro do conforto, com o colar usado apenas nos intervalos.",
    rehab: [
      {
        window: "Diagnóstico – 4 semanas (conservador)",
        weightBearing: "Sem restrição; tummy time supervisionado várias vezes ao dia",
        focus:
          "Ensinar e auditar a manobra COM a família (demonstração de volta). Alongamento passivo em rotação e inclinação, 10–15 s por repetição, 10–15 repetições, várias vezes ao dia. Reorganizar berço, colo e estímulos. Rastreio do quadril e registro fotográfico do crânio e da face.",
      },
      {
        window: "1–3 meses (conservador)",
        weightBearing: "Livre; ampliar tummy time e alcance ativo para o lado acometido",
        focus:
          "Manter o alongamento diário e acrescentar movimento ATIVO: rotação induzida por estímulo visual e sonoro, reações de endireitamento lateral. Medir rotação e inclinação a cada 2–4 semanas. Tratar a plagiocefalia por reposicionamento.",
      },
      {
        window: "3–6 meses (conservador)",
        weightBearing: "Livre; simetria nos marcos motores (rolar, sentar) é objetivo explícito",
        focus:
          "Consolidar a amplitude e a simetria ativa. Considerar TOT collar em > 4 meses com inclinação residual. Considerar capacete se a plagiocefalia moderada/grave não respondeu ao reposicionamento. Auditar adesão antes de rotular falha — a maioria das \"falhas\" é programa não executado.",
      },
      {
        window: "≥ 6 meses sem progresso (ponto de decisão)",
        weightBearing: "Livre",
        focus:
          "Reabrir o diagnóstico diferencial e radiografar a coluna cervical. Se déficit residual de rotação E inclinação > 15° com banda tensa em criança de ~1 ano, indicar a liberação cirúrgica. Antes disso, com ganho ainda mensurável, manter o programa.",
      },
      {
        window: "0–3 semanas pós-liberação",
        weightBearing: "Movimento cervical ativo livre e indolor; colar apenas nos intervalos",
        focus:
          "Cuidado da ferida. Reiniciar o alongamento passivo nos primeiros dias, em posição de hipercorreção. Colar/órtese em hipercorreção em crianças maiores e adultos. Vigiar hematoma e função do trapézio (nervo acessório).",
      },
      {
        window: "3 semanas – 3 meses pós-liberação",
        weightBearing: "Livre; atividade e brincadeira sem restrição",
        focus:
          "Alongamento passivo intensivo mantido, associado a fortalecimento ATIVO do ECM contralateral e reeducação da linha média (espelho, brincadeiras de linha média). Desmame progressivo do colar.",
      },
      {
        window: "3–6 meses pós-liberação",
        weightBearing: "Livre",
        focus:
          "Consolidar a amplitude conquistada e prevenir a recidiva por fibrose cicatricial. Documentar rotação, inclinação e simetria facial. Alta com orientação de seguimento — recidiva ocorre e é silenciosa.",
      },
    ],
    followup:
      "Conservador: reavaliação a cada 2–4 semanas durante o tratamento ativo, com medidas objetivas de rotação e inclinação passivas, banda residual, inclinação em repouso e simetria craniofacial. Alta quando amplitude passiva e movimento ativo forem simétricos, os marcos motores adequados e não houver banda palpável — mas mantendo seguimento até a idade de marcha, porque a recidiva é silenciosa. Pós-operatório: revisões com 2 semanas (ferida, função do trapézio), 6 semanas, 3 meses e 6 meses; depois, anualmente até a maturidade esquelética em crianças com assimetria craniofacial ou escoliose cervicotorácica compensatória, para documentar a remodelação. Reforce à família, desde a primeira consulta, que o desfecho é governado pela precocidade e pela adesão — não pela técnica.",
  },

  complications: [
    {
      name: "Assimetria craniofacial (plagiocefalia e hemi-hipoplasia facial)",
      detail:
        "A sequela mais visível e mais temida. O crânio maleável remodela sobre o ponto de apoio constante e a hemiface do lado acometido, comprimida pelo decúbito, achata-se: órbita, malar e mandíbula ficam menores desse lado. Remodela bem enquanto o crescimento craniano é rápido; instalada, é em grande parte irreversível — a cirurgia recupera a amplitude, não a face.",
      prevention:
        "Diagnóstico e alongamento precoces (antes de 1 ano, idealmente antes dos 3 meses), reposicionamento sistemático, tummy time e restrição do tempo em bebê-conforto. Capacete na plagiocefalia refratária, sempre corrigindo o torcicolo de base.",
    },
    {
      name: "Displasia do desenvolvimento do quadril não diagnosticada",
      detail:
        "Coexiste com o TMC em ~5–12% dos casos — bem abaixo dos 20% classicamente repetidos, mas real. Compartilham a moldagem intrauterina. Perder uma DDQ tratável enquanto se trata o pescoço é um erro evitável e de alto custo funcional.",
      prevention:
        "Exame clínico do quadril em TODA criança com TMC. Com exame normal e sem outros fatores de risco, a imagem segue os critérios habituais de rastreio — não é obrigatória só pelo torcicolo.",
    },
    {
      name: "Recidiva após a liberação",
      detail:
        "Reconstituição fibrosa do músculo seccionado ou contratura da fáscia cervical profunda residual. Manifesta-se pelo retorno da inclinação e da restrição de rotação nos primeiros meses. Quase sempre reflete liberação incompleta ou reabilitação ausente.",
      prevention:
        "Ressecar um segmento de cada cabeça (não apenas seccionar), liberar toda banda fascial residual, testar a amplitude na mesa e — decisivo — manter alongamento intensivo por 3–6 meses no pós-operatório.",
    },
    {
      name: "Lesão do nervo acessório (XI)",
      detail:
        "Complicação da liberação PROXIMAL (mastóidea) da técnica bipolar: o XI penetra a face profunda do ECM na junção dos terços superior e médio. A lesão produz trapézio caído, escápula alada lateral, ombro doloroso e limitação da elevação — sequela desproporcional ao ganho estético pretendido.",
      prevention:
        "Preferir a liberação unipolar distal, que fica longe do nervo. Quando a bipolar for necessária, desinserir rente ao periósteo mastóideo, identificar o nervo e evitar bloqueador neuromuscular de longa duração para permitir a estimulação.",
    },
    {
      name: "Lesão vascular e de estruturas cervicais profundas",
      detail:
        "A veia jugular externa cruza superficialmente o ECM; a jugular interna, a carótida comum e o nervo vago estão imediatamente profundos, na bainha carotídea. Na base do pescoço à esquerda, a cúpula pleural e o ducto torácico são vulneráveis (pneumotórax, quilotórax).",
      prevention:
        "Dissecção rente ao músculo e sob visão direta, seccionando cada cabeça isoladamente e sem descer além do necessário na base do pescoço.",
    },
    {
      name: "Cicatriz inestética e perda do contorno em V do pescoço",
      detail:
        "Incisão feita sobre a clavícula alarga e migra; a desinserção mastóidea da bipolar apaga o relevo em V do pescoço e deixa cicatriz retroauricular visível. Em uma cirurgia cujo objetivo é em boa parte estético, isso importa.",
      prevention:
        "Incisão transversa em prega cutânea 1–2 cm ACIMA e paralela à clavícula. Preferir a unipolar; quando a bipolar for necessária, considerar Z-plastia de alongamento (Ferkel), que preserva o contorno.",
    },
    {
      name: "Hipercorreção e inclinação contralateral",
      detail:
        "Liberação excessiva, sobretudo bipolar em criança pequena, pode inverter a inclinação. Raro, porém difícil de tratar — o músculo já não existe para reequilibrar.",
      prevention:
        "Testar a correção na mesa antes de ampliar a liberação; escalonar da unipolar para a bipolar apenas se a correção for insuficiente.",
    },
    {
      name: "Escoliose cervicotorácica compensatória",
      detail:
        "No torcicolo negligenciado, a coluna compensa a inclinação cefálica com curva cervicotorácica estruturada. Após a liberação tardia, a curva melhora significativamente em apenas uma minoria dos casos.",
      prevention:
        "Tratar o TMC na infância. Na apresentação tardia, alinhar a expectativa: a liberação recupera amplitude e corrige a inclinação da cabeça, mas a curva compensatória fixa raramente se resolve.",
    },
    {
      name: "Erro diagnóstico — torcicolo não muscular tratado como TMC",
      detail:
        "Causa ocular, óssea (Klippel-Feil), articular (C1–C2 rotatório, Grisel), neurológica (tumor de fossa posterior, Chiari, siringomielia) ou por refluxo (Sandifer) tratada com fisioterapia. O dano não é a fisioterapia — é o atraso no diagnóstico da doença real.",
      prevention:
        "Bandeiras vermelhas: início após 6 meses, dor, quadro agudo ou intermitente, ausência de banda tensa, ECM tenso CONTRALATERAL à inclinação, sinais neurológicos ou falta de resposta ao alongamento. Radiografia cervical antes de qualquer cirurgia.",
    },
  ],

  evidence: [
    {
      id: "cheng-2001",
      claim:
        "O alongamento manual controlado, iniciado antes de 1 ano de idade, é seguro e eficaz; o subgrupo clínico, o déficit inicial de rotação e a idade à apresentação predizem a duração do tratamento e a necessidade de cirurgia.",
      takeaway:
        "O estudo que estruturou a conduta moderna. Em 821 lactentes tratados prospectivamente com protocolo padronizado (seguimento médio de 4,5 anos), a distribuição foi pseudotumor 55%, muscular 34% e postural 11%; a necessidade de cirurgia seguiu o subgrupo — 8%, 3% e 0%, respectivamente. Análise multivariada: a duração do tratamento associou-se ao subgrupo, ao déficit de rotação, ao lado, à dificuldade no parto e à idade à apresentação; o escore final, ao déficit de rotação, à idade e à duração do tratamento. Daqui vem o critério cirúrgico consagrado: ≥6 meses de alongamento controlado com inclinação residual, déficits de rotação e inclinação > 15°, banda ou tumor tenso e escore ruim.",
      level: "II",
      studyType: "Coorte prospectiva de 821 lactentes com análise multivariada",
      era: "classico",
      citation: {
        authors: "Cheng JC, Wong MW, Tang SP, Chen TM, Shum SL, Wong EM",
        title:
          "Clinical determinants of the outcome of manual stretching in the treatment of congenital muscular torticollis in infants. A prospective study of eight hundred and twenty-one cases",
        journal: "J Bone Joint Surg Am",
        year: 2001,
        pmid: "11379737",
        doi: "10.2106/00004623-200105000-00006",
      },
    },
    {
      id: "cheng-1999",
      claim:
        "Nos lactentes com pseudotumor do ECM, a estratificação pelo déficit de rotação passiva tem valor prognóstico, e o alongamento manual precoce e prolongado obtém resultados bons ou excelentes em ~91%.",
      takeaway:
        "Coorte prospectiva de 510 lactentes com pseudotumor definido (seguimento médio de 3,5 anos). Idade média à apresentação: 24 dias, com 92,7% diagnosticados antes dos 3 meses — o quadro é precoce e detectável. Forte correlação com apresentação pélvica e parto assistido, sustentando a hipótese de moldagem/compartimento intrauterino. Com alongamento manual precoce e prolongado, 90,7% tiveram resultado bom ou excelente; os 6,7% que precisaram de cirurgia pertenciam todos aos subgrupos de maior restrição rotacional. Nesta série, a displasia do quadril chegou a 11,6% nos subgrupos mais graves — a base da regra de rastrear o quadril.",
      level: "II",
      studyType: "Coorte prospectiva de 510 lactentes com pseudotumor do ECM",
      era: "classico",
      citation: {
        authors: "Cheng JC, Tang SP, Chen TM",
        title:
          "Sternocleidomastoid pseudotumor and congenital muscular torticollis in infants: a prospective study of 510 cases",
        journal: "J Pediatr",
        year: 1999,
        pmid: "10356139",
        doi: "10.1016/s0022-3476(99)70286-6",
      },
    },
    {
      id: "kaplan-2018",
      claim:
        "Lactentes com TMC devem ser encaminhados à fisioterapia assim que a assimetria postural for identificada; o guia de prática clínica organiza rastreio, exame, prognóstico, intervenção de 1ª linha e critérios de alta em recomendações com nível de evidência explícito.",
      takeaway:
        "Atualização do guia de prática clínica baseado em evidência da Academy of Pediatric Physical Therapy (APTA), com 17 recomendações de ação vinculadas a níveis de evidência criticamente avaliados. Consolida o que a prática deve ter: encaminhamento precoce ao reconhecer a assimetria, classificação de gravidade, intervenções de 1ª linha (alongamento passivo, movimento ativo, modificação do ambiente) e intervenções suplementares, além de critérios de descontinuação, reavaliação e alta. É a referência normativa atual para o braço conservador — o de longe mais importante no TMC.",
      level: "I",
      studyType: "Guia de prática clínica baseado em evidência (APTA)",
      era: "atual",
      citation: {
        authors: "Kaplan SL, Coulter C, Sargent B",
        title:
          "Physical Therapy Management of Congenital Muscular Torticollis: A 2018 Evidence-Based Clinical Practice Guideline From the APTA Academy of Pediatric Physical Therapy",
        journal: "Pediatr Phys Ther",
        year: 2018,
        pmid: "30277962",
        doi: "10.1097/PEP.0000000000000544",
      },
    },
    {
      id: "walsh-1998",
      claim:
        "A coexistência de displasia/luxação do quadril em crianças com torcicolo muscular congênito é de aproximadamente 8% — bem inferior aos 20% frequentemente citados.",
      takeaway:
        "Revisão de 70 crianças com TMC (54 radiografadas; 41 com seguimento médio até 3 anos e 4 meses). Seis tiveram subluxação ou luxação do quadril, todas identificadas já na apresentação — e nenhuma criança desenvolveu alteração radiográfica ou de exame no seguimento. Dois pontos práticos: a associação existe mas é bem menor do que o folclore dos 20%, e a doença do quadril, quando presente, está detectável desde a primeira avaliação. Não há DDQ \"que aparece depois\" no TMC — há DDQ não procurada no início.",
      level: "IV",
      studyType: "Série de casos retrospectiva com seguimento",
      era: "classico",
      citation: {
        authors: "Walsh JJ, Morrissy RT",
        title: "Torticollis and hip dislocation",
        journal: "J Pediatr Orthop",
        year: 1998,
        pmid: "9531405",
      },
    },
    {
      id: "minihane-2008",
      claim:
        "Com exame clínico do quadril normal, o lactente com TMC não necessita de imagem de rotina do quadril; a coexistência de DDQ que exigiu tratamento foi de 4,5%.",
      takeaway:
        "Revisão de 292 lactentes com TMC, dos quais 16 tinham DDQ — e TODOS os 16 apresentavam exame clínico do quadril ALTERADO. Nenhuma DDQ foi encontrada com exame normal. A conclusão é operacionalmente decisiva: o que rastreia o quadril no TMC é a MÃO, não a máquina. A coexistência que demandou tratamento foi de 4,5%, novamente muito abaixo dos 20% classicamente aceitos. A imagem permanece indicada pelos critérios habituais de rastreio (exame alterado, apresentação pélvica, história familiar) — não pelo torcicolo em si.",
      level: "III",
      studyType: "Coorte retrospectiva de 292 lactentes com regressão logística",
      era: "atual",
      citation: {
        authors: "Minihane KP, Grayhack JJ, Simmons TD, Seshadri R, Wysocki RW, Sarwark JF",
        title: "Developmental dysplasia of the hip in infants with congenital muscular torticollis",
        journal: "Am J Orthop (Belle Mead NJ)",
        year: 2008,
        pmid: "18982188",
      },
    },
    {
      id: "shim-2004",
      claim:
        "A liberação do ECM produz resultados funcionais e estéticos satisfatórios mesmo em pacientes com mais de 8 anos, embora os resultados sejam significativamente melhores nos que ainda estão em crescimento.",
      takeaway:
        "Trinta e dois pacientes com mais de 8 anos operados por TMC negligenciado ou recidivado, seguidos em média 39 meses e divididos entre ainda em crescimento (n=19) e com crescimento concluído (n=13). Pelo escore de Cheng, o grupo em crescimento teve 13 excelentes e 6 bons; o grupo maduro, 2 excelentes, 8 bons e 3 regulares — diferença estatisticamente significativa (p<0,05). A leitura correta é dupla: nunca é tarde demais para oferecer a liberação, porque amplitude e inclinação melhoram de forma marcante em ambos os grupos; mas o resultado degrada com a idade, o que é exatamente o argumento contra a espera.",
      level: "III",
      studyType: "Estudo comparativo retrospectivo de 32 pacientes",
      era: "classico",
      citation: {
        authors: "Shim JS, Noh KC, Park SJ",
        title: "Treatment of congenital muscular torticollis in patients older than 8 years",
        journal: "J Pediatr Orthop",
        year: 2004,
        pmid: "15502570",
        doi: "10.1097/00004694-200411000-00016",
      },
    },
    {
      id: "funao-2023",
      claim:
        "Em adolescentes e adultos com TMC negligenciado, a liberação unipolar do ECM não foi inferior à bipolar na correção do ângulo cervicomandibular nem no escore clínico, sendo menos invasiva.",
      takeaway:
        "Vinte e um pacientes consecutivos operados por TMC negligenciado (3 bipolares, 18 unipolares). As taxas de correção do ângulo cervicomandibular foram equivalentes (75,4% × 73,1%; p=0,62) e o escore modificado de Cheng e Tang não diferiu (p=0,89). Não houve complicações maiores; no grupo bipolar ocorreram um déficit transitório do nervo auricular magno e um hematoma. Sustenta a estratégia de escalonamento: comece unipolar — menos invasiva, menor cicatriz, evita a exposição do nervo acessório — e reserve a bipolar para quando a correção for insuficiente. Amostra pequena e retrospectiva, com grupos muito desbalanceados: o achado orienta, mas não encerra a questão.",
      level: "IV",
      studyType: "Série de casos comparativa retrospectiva de 21 pacientes",
      era: "atual",
      citation: {
        authors: "Funao H, Isogai N, Otomo N, Yamanouchi K, Mizukoshi R, Fujita N, Ebata S, Ishii K, Yagi M",
        title:
          "Clinical Results after Release of Sternocleidomastoid Muscle Surgery for Neglected Congenital Muscular Torticollis — Unipolar vs. Bipolar Release Surgery",
        journal: "J Clin Med",
        year: 2023,
        pmid: "38202137",
        doi: "10.3390/jcm13010131",
      },
    },
  ],

  pearls: [
    "Toda a semiologia sai da anatomia: o ECM une mastoide (atrás e acima) a manúbrio/clavícula (à frente e abaixo). Encurtá-lo INCLINA a cabeça para o lado doente e RODA o queixo para o lado são. Do mesmo vetor saem as manobras — rodar o queixo PARA o lado doente, inclinar a orelha PARA LONGE dele.",
    "O pseudotumor do ECM não é tumor: é fibrose. Aparece nas primeiras semanas, cresce por 1–2 meses e regride sozinho deixando banda fibrótica. Não se biopsia, não se ressona — reconhece-se e tranquiliza-se a família.",
    "O único preditor que você controla é a PRECOCIDADE. Idade à apresentação é fator independente do desfecho e da duração do tratamento; o erro clássico no TMC não é operar demais, é encaminhar tarde.",
    "Examine o quadril de TODA criança com TMC. A associação com DDQ é real (~5–12%), embora menor que os 20% do folclore — e quando existe, o exame clínico já está alterado desde a primeira consulta. O que rastreia é a mão, não a máquina.",
    "Na plagiocefalia, a posição da ORELHA na vista do vértice decide: para a FRENTE = posicional (paralelogramo, responde a reposicionamento); para TRÁS, com crista palpável = sinostose lambdoide (trapézio, não responde e exige avaliação craniofacial).",
    "O subgrupo de Cheng é prognóstico, não acadêmico: pseudotumor ≈8% operam, muscular ≈3%, postural 0%. Combine com o déficit inicial de rotação e você tem a conversa realista sobre tempo e risco já na primeira consulta.",
    "Sem fixar o ombro não há alongamento — o tronco roda junto e a manobra se perde. Estabilizar o ponto fixo é 90% da técnica, e é o que se ensina COM a família (demonstração de volta), porque o tratamento acontece em casa.",
    "Antes de rotular \"falha do conservador\", audite a ADESÃO: a maioria das falhas é programa domiciliar não executado, não músculo refratário.",
    "Comece pela liberação UNIPOLAR distal: corrige a maioria, fica longe do nervo acessório e preserva o contorno em V do pescoço. Escalone para a bipolar só quando a correção testada na mesa for insuficiente.",
    "Incisão transversa em prega, 1–2 cm ACIMA e paralela à clavícula — nunca sobre o osso, onde a cicatriz alarga e migra. Numa cirurgia com objetivo em boa parte estético, a cicatriz é parte do resultado.",
    "A cirurgia devolve o comprimento; a reabilitação mantém. Alongamento em hipercorreção nos primeiros dias e mantido por 3–6 meses — alta sem programa estruturado é a principal causa de recidiva.",
    "Nunca é tarde para oferecer a liberação ao negligenciado: amplitude, inclinação e estética melhoram no adolescente e no adulto. Mas o resultado degrada com a idade e a assimetria facial instalada não volta — que é exatamente o argumento contra esperar.",
  ],

  pitfalls: [
    "Aceitar o diagnóstico sem restrição PASSIVA: preferência postural sem ECM tenso é torcicolo postural — prognóstico, intensidade e conversa completamente diferentes.",
    "Deixar de examinar o quadril e perder uma DDQ tratável. O espelho do erro é igualmente comum: pedir ultrassom para todo TMC com exame do quadril normal, inflando custo e ansiedade sem mudar conduta.",
    "Biopsiar ou solicitar RM do pseudotumor do ECM — nenhuma mudança de conduta, muita ansiedade e risco desnecessário.",
    "Insistir em fisioterapia num torcicolo que não é muscular. Bandeiras vermelhas: início após 6 meses, dor, quadro agudo ou intermitente, ECM tenso do lado CONTRALATERAL à inclinação, sinais neurológicos ou nenhuma resposta ao alongamento.",
    "Esquecer que o torcicolo doloroso e agudo da criança maior é C1–C2 (rotatório/Grisel) até prova em contrário: pede TC dinâmica, não alongamento.",
    "Não excluir a fossa posterior: torcicolo com vômitos, ataxia, papiledema ou sinais de tronco é neuroimagem imediata — tumor, Chiari, siringomielia.",
    "Alongar antes de excluir instabilidade C1–C2 (Down, Klippel-Feil) ou anomalia vertebral. Radiografia cervical é obrigatória antes de qualquer cirurgia.",
    "Alongamento balístico, forçado ou até o choro: provoca microtrauma, mais fibrose e — pior — abandono do tratamento pela família.",
    "Alongar só em rotação e esquecer a inclinação: a cabeça clavicular fica curta e a inclinação persiste apesar da rotação recuperada.",
    "Confundir sinostose lambdoide com plagiocefalia posicional e insistir em reposicionamento por meses — a sinostose não responde e a janela de tratamento se fecha.",
    "Indicar capacete sem tratar o torcicolo de base: a plagiocefalia recidiva porque a causa (a cabeça sempre no mesmo ponto) continua lá.",
    "Liberar só a cabeça esternal e esquecer a clavicular — correção incompleta e recidiva precoce. Teste a amplitude na mesa: a fáscia cervical profunda pode ser o verdadeiro bloqueio.",
    "Seccionar sem ressecar um segmento de cada cabeça: o músculo se reconstitui por fibrose e a deformidade volta.",
    "Dissecar a inserção mastóidea na liberação bipolar sem identificar o nervo acessório — trapézio caído, escápula alada e ombro doloroso permanentes, sequela desproporcional ao ganho pretendido.",
    "Descer demais na base do pescoço, sobretudo à esquerda: cúpula pleural e ducto torácico (pneumotórax, quilotórax); e trabalhar às cegas na face profunda do ECM, onde estão a jugular interna e a bainha carotídea.",
    "Prometer à família que a cirurgia corrige a face: recupera amplitude e inclinação, mas a assimetria craniofacial instalada e a escoliose cervicotorácica compensatória raramente se desfazem.",
  ],

  figures: [
    {
      id: "torcicolo-muscular-congenito:anatomia",
      caption:
        "Anatomia do esternocleidomastoideo em vista anterior. As duas cabeças distais (esternal, para o manúbrio; clavicular, para o terço medial da clavícula) convergem para a inserção mastóidea. À esquerda da figura, o músculo acometido, fibrosado e com pseudotumor; à direita, o normal, com o trajeto do nervo acessório (XI) penetrando a face profunda na junção dos terços superior e médio.",
      alt: "Desenho esquemático do pescoço em vista anterior mostrando crânio, mandíbula, processos mastoides, coluna cervical, manúbrio e clavículas, com o esternocleidomastoideo fibrosado e com pseudotumor de um lado e normal do outro, além do trajeto do nervo acessório.",
      kind: "diagram",
    },
    {
      id: "torcicolo-muscular-congenito:postura",
      caption:
        "Postura característica do TMC. Vista anterior: a cabeça inclina para o lado do músculo curto enquanto os ombros permanecem nivelados. Vista do vértice: o queixo roda para o lado oposto. A regra: orelha no ombro do lado doente, queixo no ombro sadio.",
      alt: "Dois painéis esquemáticos: vista anterior de uma criança com a cabeça inclinada para o lado acometido e ângulo de inclinação medido, e vista do vértice mostrando a rotação do queixo para o lado contralateral com arco de rotação.",
      kind: "diagram",
    },
    {
      id: "torcicolo-muscular-congenito:subgrupos",
      caption:
        "Subgrupos clínicos de Cheng, com o achado no ventre do ECM e o déficit de rotação passiva correspondente. Pseudotumor (≈55%, ≈8% operam), torcicolo muscular (≈34%, ≈3%) e torcicolo postural (≈11%, 0%). Selecione o subgrupo.",
      alt: "Esquema em close do pescoço mostrando o esternocleidomastoideo com pseudotumor, com banda fibrosa difusa ou normal, ao lado de um medidor circular do déficit de rotação passiva correspondente a cada subgrupo.",
      variant: "tumor",
      kind: "diagram",
    },
    {
      id: "torcicolo-muscular-congenito:plagiocefalia",
      caption:
        "Vista do vértice: plagiocefalia posicional (paralelogramo, orelha deslocada para a FRENTE, fronte ipsilateral abaulada) versus sinostose lambdoide (trapézio, orelha deslocada para TRÁS e para baixo, crista sobre a sutura e abaulamento frontal contralateral). A posição da orelha é o discriminador mais confiável. Selecione a variante.",
      alt: "Comparação esquemática de dois crânios em vista do vértice sobre um contorno normal tracejado, mostrando as deformidades em paralelogramo e em trapézio, com posições distintas da orelha e diagonais craniais medidas.",
      variant: "posicional",
      kind: "diagram",
    },
    {
      id: "torcicolo-muscular-congenito:rastreio-quadril",
      caption:
        "Rastreio do quadril na criança com TMC. Radiografia AP da bacia esquemática: à esquerda da figura, quadril displásico com índice acetabular aumentado, cabeça femoral no quadrante súpero-lateral e linha de Shenton quebrada; à direita, quadril normal. A associação é de ~5–12% — todos são EXAMINADOS, a imagem segue os critérios habituais de rastreio.",
      alt: "Esquema de radiografia anteroposterior da bacia infantil com linhas de Hilgenreiner e de Perkin, índices acetabulares medidos, cabeças femorais cartilaginosas e linha de Shenton contínua de um lado e quebrada do outro.",
      kind: "diagram",
    },
    {
      id: "torcicolo-muscular-congenito:alongamento",
      caption:
        "Alongamento passivo do ECM, os dois vetores opostos à ação do músculo doente. (1) Rotação: queixo PARA o lado acometido, com o ombro ipsilateral fixo — alonga a cabeça esternal. (2) Inclinação: orelha PARA LONGE do lado acometido — alonga a cabeça clavicular. Sustentar 10–15 s, sem dor. Acompanha os passos da sequência de conduta.",
      alt: "Dois painéis esquemáticos mostrando o lactente em decúbito dorsal com as mãos do terapeuta estabilizando o ombro e realizando o alongamento em rotação e em inclinação lateral, com setas indicando a direção das manobras.",
      kind: "diagram",
    },
    {
      id: "torcicolo-muscular-congenito:diferencial",
      caption:
        "Torcicolo que NÃO é muscular. Ocular: paresia do oblíquo superior com olho hipertrópico, ECM macio e inclinação que desaparece ao ocluir um olho. Klippel-Feil: fusão vertebral cervical, pescoço curto e implantação baixa dos cabelos. C1–C2: subluxação rotatória (\"cock-robin\"), aguda e dolorosa, com o ECM tenso do lado CONTRALATERAL. Selecione a variante.",
      alt: "Três esquemas alternativos: face com olho hipertrópico e cabeça que se endireita ao ocluir um olho; perfil da coluna cervical com vértebras fundidas e pescoço curto; vista axial de C1 rodado sobre o odontoide de C2 com massas laterais assimétricas.",
      variant: "ocular",
      kind: "diagram",
    },
    {
      id: "torcicolo-muscular-congenito:liberacao",
      caption:
        "Liberação cirúrgica do ECM no refratário. Unipolar: secção das duas cabeças distais por incisão em prega 1–2 cm acima e paralela à clavícula, longe do nervo acessório e preservando o contorno em V do pescoço. Bipolar: acrescenta a desinserção mastóidea, que expõe o XI — reservada às contraturas graves. Selecione a variante.",
      alt: "Esquema do pescoço com o esternocleidomastoideo contraturado, mostrando o nível de secção distal comum às duas técnicas e a secção proximal mastóidea adicional da técnica bipolar, com o trajeto do nervo acessório e do nervo auricular magno assinalados, e um detalhe do resultado imediato com a cabeça centrada.",
      variant: "unipolar",
      kind: "diagram",
    },
  ],

  meta: {
    lastReviewed: "2026-07-14",
    sources: [
      "Herring JA. Tachdjian's Pediatric Orthopaedics, 6a ed. (2022).",
      "Weinstein SL, Flynn JM. Lovell and Winter's Pediatric Orthopaedics, 8a ed. (2021).",
      "Waters PM, Skaggs DL, Flynn JM. Rockwood and Wilkins' Fractures in Children, 10a ed. (2024).",
      "Cheng JC et al., J Bone Joint Surg Am 2001 (DOI 10.2106/00004623-200105000-00006).",
      "Cheng JC, Tang SP, Chen TM, J Pediatr 1999 (DOI 10.1016/s0022-3476(99)70286-6).",
      "Kaplan SL, Coulter C, Sargent B, Pediatr Phys Ther 2018 (DOI 10.1097/PEP.0000000000000544).",
      "Walsh JJ, Morrissy RT, J Pediatr Orthop 1998 (PMID 9531405).",
      "Minihane KP et al., Am J Orthop 2008 (PMID 18982188).",
      "Shim JS, Noh KC, Park SJ, J Pediatr Orthop 2004 (DOI 10.1097/00004694-200411000-00016).",
      "Funao H et al., J Clin Med 2023 (DOI 10.3390/jcm13010131).",
    ],
    attribution:
      "Evidência recuperada do PubMed. Ver DOIs/PMIDs citados nesta seção.",
    figureReference:
      "Rockwood and Wilkins' Fractures in Children, 10a ed. (2024) / Tachdjian's Pediatric Orthopaedics 6a",
  },
});
