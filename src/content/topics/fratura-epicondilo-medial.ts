import { defineTopic } from "../../types/topic";

export const topic = defineTopic({
  id: "op-cotovelo-epicondilo-medial",
  slug: "fratura-epicondilo-medial",
  regionId: "ortopedia-pediatrica",
  bone: "Cotovelo (criança)",
  injury: "Avulsão do epicôndilo medial",
  title: "Fratura do epicôndilo medial",
  subtitle:
    "A avulsão apofisária mais controversa da criança: o encarceramento é indicação absoluta, mas nas desviadas o ensaio SCIENCE mostrou que operar não traz benefício.",
  laterality: null,
  status: "complete",

  overview:
    "O epicôndilo medial é uma APÓFISE — centro de ossificação por tração, sem contribuição para o crescimento longitudinal do úmero. Nele se ancoram a massa flexo-pronadora e a banda anterior do ligamento colateral ulnar (LCU). A fratura é, portanto, uma avulsão: um evento de tração em valgo, seja agudo (queda com a mão espalmada, luxação do cotovelo, queda de braço) ou por sobrecarga repetitiva (arremessador). Representa 11–20% das fraturas do cotovelo na criança, com pico entre 9 e 14 anos e predomínio masculino. Até 50–60% dos casos vêm acompanhados de luxação do cotovelo.\n\nA fratura é extra-articular — mas o fragmento, puxado pela musculatura, pode ser arrastado PARA DENTRO da articulação durante a luxação e ali ficar preso. O fragmento encarcerado é a única situação em que não há debate: é indicação cirúrgica absoluta.\n\nFora dela, o campo mudou. Por décadas a literatura retrospectiva mostrou taxas de consolidação muito maiores com fixação e empurrou a prática rumo à ORIF. O ensaio SCIENCE (Lancet, 2026) — multicêntrico, randomizado, 335 crianças de 7 a 15 anos com fraturas desviadas — não encontrou diferença clinicamente relevante na função do membro superior aos 12 meses, mostrou mais complicações e reoperações no grupo cirúrgico e probabilidade zero de custo-efetividade. A conclusão dos autores é direta: o tratamento não cirúrgico deve ser o padrão nas desviadas, independentemente de ter havido luxação inicial. Vale ler o critério de exclusão com atenção — encarcerados NÃO entraram no ensaio, e o resultado não os cobre.\n\nA não união fibrosa é frequente após tratamento conservador e, na maioria das vezes, assintomática: não é, por si, indicação de reoperação.",

  keyFacts: [
    { label: "Natureza", value: "Avulsão APOFISÁRIA (extra-articular) — não afeta o crescimento" },
    { label: "Frequência", value: "11–20% das fraturas do cotovelo na criança" },
    { label: "Pico", value: "9–14 anos · predomínio masculino" },
    { label: "Luxação associada", value: "Até 50–60% dos casos" },
    { label: "Indicação absoluta", value: "Fragmento encarcerado · fratura exposta" },
    { label: "Evidência-chave", value: "SCIENCE (Lancet 2026): não cirúrgico é o padrão nas desviadas" },
    { label: "Nervo ulnar", value: "Disfunção em ~10%; adjacente ao foco e ao implante" },
    { label: "Não união fibrosa", value: "Comum no conservador — em geral assintomática" },
  ],

  anatomy: {
    text:
      "O epicôndilo medial ossifica por volta dos 5–7 anos (o 'I' de CRITOE — capítulo 1a, rádio 3a, epicôndilo Interno 5a, Tróclea 7a, Olécrano 9a, Epicôndilo externo 11a) e funde-se tardiamente, aos 14–17 anos. É uma apófise de tração: sua fise é perpendicular às forças que a arrancam e não participa do crescimento longitudinal — por isso a avulsão não causa encurtamento nem cúbito varo/valgo por distúrbio fisário.\n\nDela nascem duas estruturas que explicam toda a lesão. A massa flexo-pronadora, que traciona o fragmento distal e anteriormente — motivo pelo qual o desvio é sempre subestimado na incidência AP e pelo qual a redução é mais fácil em decúbito ventral, com o cotovelo estendido e o punho relaxado. E a banda anterior do LCU, o estabilizador primário do valgo do cotovelo, que ancora no fragmento: quando o epicôndilo migra, o LCU migra junto, e é daí que vem a preocupação com instabilidade em valgo no atleta arremessador.\n\nO nervo ulnar corre imediatamente posterior à apófise, no túnel cubital, sem qualquer interposição protetora. Está em risco no trauma, na extração do fragmento e na perfuração/fixação.\n\nA regra CRITOE tem um uso diagnóstico crítico: a ossificação é sequencial e obrigatória. Se a tróclea está ossificada mas o epicôndilo medial não é visível no seu leito, ele não está 'ausente' — está dentro da articulação.",
    figureIds: [
      "fratura-epicondilo-medial:anatomia",
      "fratura-epicondilo-medial:ossificacao",
      "fratura-epicondilo-medial:mecanismo",
    ],
  },

  classification: [
    {
      id: "desvio-situacao",
      name: "Classificação descritiva (desvio e situação do fragmento)",
      basis: "Grau de desvio do fragmento e sua relação com a articulação",
      note:
        "É a classificação que dirige a conduta. Só o tipo III (encarcerado) tem indicação cirúrgica indiscutível; o tipo IV descreve o contexto (fratura-luxação), não determina por si a cirurgia — o SCIENCE randomizou e estratificou por luxação e não achou diferença.",
      types: [
        {
          code: "I",
          label: "Sem desvio / desvio mínimo",
          description: "Desvio ≤ 2 mm. Consenso universal de tratamento não cirúrgico com imobilização breve.",
          figureId: "fratura-epicondilo-medial:classificacao",
          figureVariant: "I",
        },
        {
          code: "II",
          label: "Desviada",
          description:
            "Desvio > 2 mm sem encarceramento. O terreno da controvérsia histórica — hoje endereçado pelo SCIENCE em favor do tratamento não cirúrgico.",
          figureId: "fratura-epicondilo-medial:classificacao",
          figureVariant: "II",
        },
        {
          code: "III",
          label: "Encarcerada",
          description:
            "Fragmento aprisionado no espaço úmero-ulnar, bloqueando a articulação. Indicação cirúrgica ABSOLUTA — extração e fixação.",
          figureId: "fratura-epicondilo-medial:classificacao",
          figureVariant: "III",
        },
        {
          code: "IV",
          label: "Com luxação do cotovelo",
          description:
            "Fratura-luxação. Reduzir a luxação e SEMPRE radiografar depois: a redução pode converter um fragmento livre em encarcerado.",
          figureId: "fratura-epicondilo-medial:classificacao",
          figureVariant: "IV",
        },
      ],
    },
    {
      id: "espectro-atleta",
      name: "Espectro do estresse em valgo no atleta (cotovelo do arremessador)",
      basis: "Cronicidade da sobrecarga em valgo sobre a apófise medial",
      note:
        "Reconhecer onde o paciente está no espectro muda a conversa: a apofisite e a avulsão crônica são doenças de carga (tratam-se com repouso e correção do volume/mecânica de arremesso), não de fixação.",
      types: [
        {
          code: "A",
          label: "Apofisite medial (Little League elbow)",
          description:
            "Alargamento e irritação da fise apofisária por microtrauma repetitivo, sem fragmento destacado. Dor medial insidiosa no arremessador. Tratamento: repouso do arremesso.",
        },
        {
          code: "B",
          label: "Avulsão crônica / fise alargada",
          description:
            "Separação gradual com fragmentação e esclerose. Sintomática, mas o problema é a carga acumulada, não o traço agudo.",
        },
        {
          code: "C",
          label: "Avulsão aguda",
          description:
            "Falência súbita da apófise durante um arremesso ou queda — o evento agudo clássico, classificado pelo desvio (acima).",
          figureId: "fratura-epicondilo-medial:mecanismo",
        },
      ],
    },
  ],

  indications: {
    operative: [
      "Fragmento encarcerado na articulação — indicação ABSOLUTA",
      "Fratura exposta — indicação ABSOLUTA",
      "Disfunção progressiva do nervo ulnar atribuível ao fragmento",
      "Instabilidade franca em valgo demonstrada após redução da luxação",
      "Relativa e cada vez mais questionada: desvio grande em atleta de arremesso ou de apoio de membros superiores (ginasta, lutador), decidida caso a caso com a família",
    ],
    nonOperative: [
      "Tipo I (desvio ≤ 2 mm) — consenso",
      "Tipo II (desviada, sem encarceramento) — hoje o padrão, com base no SCIENCE",
      "Fratura-luxação já reduzida, sem encarceramento — o status de luxação não muda a recomendação",
      "Apofisite / avulsão crônica do arremessador — repouso e controle de carga",
    ],
    decisionNotes:
      "A pergunta cirúrgica se resume a uma: o fragmento está dentro da articulação? Se sim, opera. Se não, o SCIENCE (n=335, Level I) mostrou que a fixação não entrega ganho funcional clinicamente relevante aos 12 meses (diferença 1,57 ponto no PROMIS, abaixo da diferença mínima importante de 4), custa mais e adiciona risco — 9% de complicações intraoperatórias, 5% de complicações pós-operatórias exigindo nova cirurgia e 11% de remoções de implante de rotina, contra 2% de complicações no grupo conservador.\n\nDuas ressalvas honestas. Primeira: os encarcerados foram explicitamente excluídos do ensaio — a evidência não os cobre e o encarceramento segue sendo cirúrgico. Segunda: o SCIENCE não foi desenhado para o atleta arremessador de elite, e a literatura específica em atletas (revisão sistemática de Tadlock) também não achou vantagem funcional na cirurgia — apenas maior taxa de união, com MAIS complicações e reoperações no grupo operado. A união radiográfica não é o desfecho que importa para a criança; a função é.\n\nSobre a medida do desvio: a AP subestima sistematicamente (o fragmento migra para anterior). Se o desvio vai realmente pesar na decisão, use a oblíqua ou a TC — mas saiba que, mesmo com método padronizado, a discrepância entre radiografia e TC chega a 5–6 mm e a TC muda a recomendação de tratamento em até 29–47% dos casos. Um número que oscila tanto é uma base frágil para indicar cirurgia.",
  },

  approaches: [
    {
      id: "conservador",
      name: "Imobilização gessada (tratamento não cirúrgico)",
      indication:
        "Padrão nos tipos I e II, com ou sem luxação associada, desde que não haja encarceramento nem exposição.",
      interval: "Gesso ou tala axilopalmar com cotovelo a ~90° e antebraço em posição neutra",
      atRisk: ["Rigidez por imobilização prolongada — desencorajar gesso além de 4 semanas"],
      figureId: "fratura-epicondilo-medial:classificacao",
    },
    {
      id: "medial",
      name: "Via medial direta ao epicôndilo",
      indication: "ORIF, extração de fragmento encarcerado, exploração do nervo ulnar.",
      interval:
        "Incisão posteromedial centrada na apófise; plano entre o septo intermuscular medial e a massa flexo-pronadora; o nervo ulnar é identificado e mantido posteriormente",
      atRisk: [
        "Nervo ulnar (imediatamente posterior à apófise)",
        "Nervo cutâneo medial do antebraço (ramos na incisão)",
      ],
      figureId: "fratura-epicondilo-medial:orif",
    },
    {
      id: "ventral",
      name: "Posicionamento em decúbito ventral",
      indication:
        "Alternativa ao decúbito dorsal que facilita a redução: o ombro em rotação interna e o cotovelo estendido relaxam a massa flexo-pronadora, anulando a força que traciona o fragmento.",
      interval: "Braço sobre apoio radiotransparente; via medial com fluoroscopia lateral fácil",
      atRisk: ["Testar a rotação interna do ombro ANTES de virar o paciente", "Nervo ulnar"],
      figureId: "fratura-epicondilo-medial:orif",
    },
  ],

  technique: [
    {
      n: 1,
      title: "Diagnóstico e a regra CRITOE",
      detail:
        "AP, perfil e oblíqua do cotovelo. Aplicar CRITOE: se a tróclea está ossificada mas o epicôndilo medial não aparece no leito, o fragmento está dentro da articulação até prova em contrário. Documentar a função do nervo ulnar por escrito antes de qualquer manobra.",
      figureId: "fratura-epicondilo-medial:ossificacao",
      tips: [
        "Em criança pequena, comparar com o lado contralateral resolve a dúvida sobre qual núcleo deveria estar presente.",
        "Um 'núcleo troclear' de aparência estranha e posição medial-baixa costuma ser o epicôndilo encarcerado.",
      ],
      pitfalls: [
        "Chamar de 'tróclea' o fragmento encarcerado e liberar a criança com a articulação bloqueada.",
        "Deixar o exame do nervo ulnar para depois da redução — perde-se a linha de base.",
      ],
    },
    {
      n: 2,
      title: "Reduzir a luxação e radiografar de novo",
      detail:
        "Nas fraturas-luxação, reduzir sob sedação/anestesia. Repetir as radiografias obrigatoriamente APÓS a redução: a manobra pode arrastar um fragmento livre para dentro da articulação e criar um encarceramento que não existia.",
      figureId: "fratura-epicondilo-medial:classificacao",
      figureVariant: "IV",
      tips: ["Reavaliar o nervo ulnar após a redução e registrar."],
      pitfalls: ["Reduzir e imobilizar sem radiografia de controle — o erro clássico deste tópico."],
    },
    {
      n: 3,
      title: "Medir o desvio com honestidade",
      detail:
        "A AP subestima o desvio porque o fragmento migra anteriormente. Usar a oblíqua (ou a axial) com método de pontos correspondentes; reservar a TC para os casos em que o número vai efetivamente mudar a conduta.",
      figureId: "fratura-epicondilo-medial:desvio",
      tips: [
        "Método dos pontos correspondentes: medir do mesmo ponto anatômico do fragmento ao ponto equivalente do leito.",
        "AP, oblíqua externa e axial têm confiabilidade interobservador quase perfeita quando o método é padronizado.",
      ],
      pitfalls: [
        "Tratar o milímetro medido como verdade absoluta: a discrepância radiografia × TC chega a 5–6 mm.",
        "Pedir TC de rotina — irradia a criança e, sozinha, não define a conduta.",
      ],
    },
    {
      n: 4,
      title: "Decidir: encarcerado ou não?",
      detail:
        "Encarcerado ou exposto → cirurgia. Não encarcerado (I, II, IV reduzida) → tratamento não cirúrgico como padrão, conforme o SCIENCE, discutindo com a família que a não união fibrosa é frequente e habitualmente assintomática.",
      figureId: "fratura-epicondilo-medial:encarceramento",
      figureVariant: "encarcerado",
      tips: [
        "Explicitar para a família: união radiográfica não é o desfecho que importa — a função aos 12 meses é igual.",
        "No atleta arremessador, a decisão é compartilhada e informada, não automática.",
      ],
      pitfalls: [
        "Extrapolar o SCIENCE para o fragmento encarcerado — esses pacientes foram excluídos do ensaio.",
        "Indicar cirurgia apenas pelo número de milímetros.",
      ],
    },
    {
      n: 5,
      title: "Tratamento não cirúrgico — execução",
      detail:
        "Gesso ou tala axilopalmar com cotovelo a ~90° e antebraço neutro, por 3–4 semanas. Depois, mobilização ativa livre conforme a dor. Não prolongar a imobilização: rigidez é a complicação real deste caminho.",
      figureId: "fratura-epicondilo-medial:classificacao",
      figureVariant: "II",
      tips: ["No SCIENCE, imobilização além de 4 semanas foi ativamente desencorajada.", "Movimento conforme a dor permitir, sem esperar união radiográfica."],
      pitfalls: ["Imobilizar 6 semanas 'para consolidar' — troca-se uma pseudartrose assintomática por um cotovelo rígido."],
    },
    {
      n: 6,
      title: "ORIF — exposição e extração",
      detail:
        "Decúbito ventral (ou dorsal com ombro em rotação externa e cotovelo estendido). Via posteromedial, identificar e proteger o nervo ulnar posteriormente. Extrair o fragmento encarcerado: manobra de valgo com supinação e extensão do punho/dedos pode desencaixá-lo; se não, extração direta sob visão.",
      figureId: "fratura-epicondilo-medial:encarceramento",
      figureVariant: "extracao",
      tips: [
        "O decúbito ventral relaxa a massa flexo-pronadora e torna a redução quase sem tensão.",
        "O fragmento traz consigo o LCU e a massa flexo-pronadora — orientar-se por esses tecidos para achar o leito correto.",
      ],
      pitfalls: [
        "Tracionar às cegas com o nervo ulnar não identificado.",
        "Desbridar o periósteo/tecido mole aderido ao fragmento e perder a referência de orientação.",
      ],
    },
    {
      n: 7,
      title: "ORIF — fixação",
      detail:
        "Reduzir a apófise ao leito e fixar com fio-guia, depois parafuso canulado parcialmente rosqueado de 4,0 mm em trajetória póstero-anterior, contido na coluna medial. Arruela quando o fragmento é pequeno ou predominantemente cartilaginoso. Em criança pequena com fragmento não ossificado, preferir fios de Kirschner.",
      figureId: "fratura-epicondilo-medial:orif",
      tips: [
        "As roscas devem cruzar inteiramente o traço para gerar compressão.",
        "Trajetória póstero-anterior e dentro da coluna medial — evita penetrar a fossa do olécrano ou a articulação.",
      ],
      pitfalls: [
        "Parafuso longo demais atingindo a cortical lateral ou a articulação.",
        "Perfurar sobre o nervo ulnar não afastado.",
        "Comprimir demais um fragmento cartilaginoso e fragmentá-lo.",
      ],
    },
    {
      n: 8,
      title: "Testar, fechar e mobilizar cedo",
      detail:
        "Sob fluoroscopia, testar estabilidade em valgo e o arco de flexo-extensão, confirmando que não há bloqueio nem implante intra-articular. Reavaliar o nervo ulnar. Imobilização curta (1–2 semanas) e mobilização precoce.",
      figureId: "fratura-epicondilo-medial:instabilidade-valgo",
      tips: ["Documentar o arco livre obtido em cirurgia — guia a reabilitação."],
      pitfalls: ["Imobilizar longamente após ORIF, anulando a única vantagem teórica da fixação (mobilizar cedo)."],
    },
  ],

  postop: {
    immobilization:
      "Não cirúrgico: gesso/tala axilopalmar a ~90°, antebraço neutro, por 3–4 semanas — não prolongar. Após ORIF: tala por 1–2 semanas e mobilização precoce.",
    weightBearing:
      "Sem carga sobre o membro superior. Apoio de peso em MMSS (ginástica, luta, salto sobre as mãos) liberado apenas após consolidação clínica e arco indolor, tipicamente ≥ 3 meses.",
    rehab: [
      { window: "0–3/4 sem", weightBearing: "Sem carga · imobilizado", focus: "Analgesia, mobilidade de ombro, punho e dedos; vigiar o nervo ulnar" },
      { window: "3/4–6 sem", weightBearing: "Sem carga", focus: "Retirada do gesso; ADM ativa livre de flexo-extensão e pronossupinação conforme a dor" },
      { window: "6–12 sem", weightBearing: "Progressiva, sem apoio de MMSS", focus: "Recuperar extensão terminal; fortalecimento leve da massa flexo-pronadora" },
      { window: "3–6 meses", weightBearing: "Livre conforme sintomas", focus: "Retorno ao esporte; no arremessador, progressão gradual de volume e revisão da mecânica" },
    ],
    followup:
      "Radiografias em 4–6 semanas e ao final do tratamento. A não união fibrosa é frequente no tratamento conservador e, isoladamente, NÃO indica reoperação — o que se acompanha é dor, arco de movimento, instabilidade em valgo e função do nervo ulnar. Nos operados, discutir remoção de implante apenas se sintomático (foi feita de rotina em 11% no SCIENCE, e é um custo, não um benefício).",
  },

  complications: [
    {
      name: "Não união fibrosa",
      detail:
        "Ocorre em cerca de metade a dois terços dos tratados sem cirurgia (69% após fratura-luxação vs 49% nas isoladas na revisão de Knapik) — mas com mínima repercussão clínica ou funcional no seguimento.",
      prevention:
        "Não há o que prevenir: é o preço aceito e, em geral, silencioso do tratamento conservador. Informar a família antecipadamente evita ansiedade e reoperação desnecessária.",
    },
    {
      name: "Neuropatia ulnar",
      detail:
        "Disfunção em ~10% dos casos, sobretudo nas fraturas-luxação. A maioria é neuropraxia e recupera. Também é risco iatrogênico na extração e na perfuração.",
      prevention: "Documentar o exame antes e depois de cada manobra; identificar e proteger o nervo na via medial.",
    },
    {
      name: "Rigidez / perda de extensão",
      detail:
        "Mais frequente após fratura-luxação (perda de ADM em 43% vs 15% nas isoladas) e após imobilização prolongada. É a complicação que realmente limita a criança.",
      prevention: "Imobilizar no máximo 3–4 semanas e mobilizar conforme a dor, sem aguardar união radiográfica.",
    },
    {
      name: "Encarceramento não reconhecido",
      detail:
        "Fragmento intra-articular deixado no lugar bloqueia o movimento, gera incongruência e dano condral progressivo. É o erro mais grave deste tópico.",
      prevention: "Aplicar CRITOE em toda radiografia e repetir o exame de imagem após reduzir qualquer luxação.",
    },
    {
      name: "Complicações da cirurgia",
      detail:
        "No SCIENCE: 9% de complicações intraoperatórias, 5% de complicações pós-operatórias exigindo nova cirurgia e 11% de remoções de implante de rotina — contra 2% de complicações no grupo não cirúrgico. Inclui implante proeminente, migração e infecção.",
      prevention: "Reservar a cirurgia para quem realmente precisa dela — encarceramento, exposição, nervo, instabilidade franca.",
    },
    {
      name: "Instabilidade em valgo",
      detail:
        "Com a apófise não consolidada e distalizada, o LCU perde ancoragem óssea e o compartimento medial pode abrir sob estresse. Clinicamente relevante quase só no atleta de arremesso de alta demanda.",
      prevention: "Avaliar estresse em valgo no seguimento do arremessador; controlar volume e mecânica de arremesso.",
    },
    {
      name: "Ossificação heterotópica / calcificação do LCU",
      detail: "Mais comum após fratura-luxação e após manipulações repetidas; raramente limita a função.",
    },
  ],

  evidence: [
    {
      id: "perry-2026-science",
      claim:
        "Ensaio randomizado multicêntrico (SCIENCE; 59 hospitais no Reino Unido, Austrália e Nova Zelândia; 335 crianças de 7–15 anos com fratura desviada do epicôndilo medial, encarcerados excluídos): PROMIS de membro superior aos 12 meses de 54,3 (cirurgia) vs 53,1 (não cirúrgico), diferença média 1,57 (IC95% −0,01 a 3,14; p=0,052) — abaixo da diferença mínima clinicamente importante de 4 pontos. Complicações e reoperações foram maiores no grupo cirúrgico, e a probabilidade de custo-efetividade da fixação foi de 0%.",
      takeaway:
        "Nas fraturas desviadas sem encarceramento, operar não traz benefício clínico, custa mais e adiciona risco — o tratamento não cirúrgico é o padrão, independentemente de ter havido luxação.",
      level: "I",
      studyType: "Ensaio clínico randomizado multicêntrico com avaliação econômica",
      era: "atual",
      citation: {
        authors: "Perry DC, Achten J, Zimmermann A, et al.",
        title:
          "Surgical fixation versus non-surgical care for children with a displaced medial epicondyle fracture of the elbow (the SCIENCE study): a multicentre, randomised controlled, superiority trial and economic evaluation",
        journal: "Lancet",
        year: 2026,
        pmid: "41576983",
        doi: "10.1016/S0140-6736(25)02098-7",
        url: "https://doi.org/10.1016/S0140-6736(25)02098-7",
      },
    },
    {
      id: "kamath-2009",
      claim:
        "Revisão sistemática de seis décadas de literatura (14 estudos, 498 pacientes): a chance de união óssea com fixação foi 9,33 vezes a do tratamento não cirúrgico (p<0,0001), sem diferença em dor no seguimento final (p=0,73) nem em sintomas do nervo ulnar (p=0,412).",
      takeaway:
        "É o trabalho que consolidou a tendência histórica pró-ORIF — mas o ganho demonstrado foi radiográfico (união), não clínico. Lê-lo hoje, ao lado do SCIENCE, ensina a diferença entre desfecho substituto e desfecho que importa.",
      level: "III",
      studyType: "Revisão sistemática de estudos retrospectivos",
      era: "classico",
      citation: {
        authors: "Kamath AF, Baldwin K, Horneff J, Hosalkar HS",
        title: "Operative versus non-operative management of pediatric medial epicondyle fractures: a systematic review",
        journal: "J Child Orthop",
        year: 2009,
        pmid: "19685254",
        doi: "10.1007/s11832-009-0192-7",
        url: "https://doi.org/10.1007/s11832-009-0192-7",
      },
    },
    {
      id: "knapik-2017",
      claim:
        "Revisão sistemática do tratamento não cirúrgico (7 estudos, 81 pacientes): não união em 69% das fraturas-luxação vs 49% das isoladas (p=0,11), com mínima incapacidade clínica em ambos os grupos; perda de flexo-extensão foi significativamente mais frequente após fratura-luxação (43% vs 15%; p=0,01). Dor, neuropatia ulnar e deformidade foram raras com ou sem luxação.",
      takeaway:
        "Na ausência de indicação absoluta, o tratamento não cirúrgico funciona mesmo quando houve luxação — a não união é comum e silenciosa; a rigidez é o que merece vigilância.",
      level: "II",
      studyType: "Revisão sistemática",
      era: "atual",
      citation: {
        authors: "Knapik DM, Fausett CL, Gilmore A, Liu RW",
        title:
          "Outcomes of Nonoperative Pediatric Medial Humeral Epicondyle Fractures With and Without Associated Elbow Dislocation",
        journal: "J Pediatr Orthop",
        year: 2017,
        pmid: "27741036",
        doi: "10.1097/BPO.0000000000000890",
        url: "https://doi.org/10.1097/BPO.0000000000000890",
      },
    },
    {
      id: "tadlock-2023",
      claim:
        "Revisão sistemática restrita a atletas pediátricos (6 estudos, 99 pacientes: 52 operados, 47 não operados): união significativamente maior com cirurgia (100% vs 76%; p=0,0025), porém com tempo e taxa de retorno ao esporte equivalentes e taxas de complicação e reoperação MENORES no grupo não cirúrgico (p=0,009).",
      takeaway:
        "Nem no atleta a cirurgia se sustenta automaticamente: ganha-se união radiográfica e paga-se em complicações, sem retornar ao esporte antes nem mais vezes.",
      level: "III",
      studyType: "Revisão sistemática",
      era: "atual",
      citation: {
        authors: "Tadlock JC, Eckhoff MD, Macias RA, Nicholson TC, Graver HR, Garcia E",
        title:
          "Operative Versus Non-operative Treatment of Medial Epicondyle Fractures in Pediatric Athletes: A Systematic Review",
        journal: "J Surg Orthop Adv",
        year: 2023,
        pmid: "37185070",
      },
    },
    {
      id: "guzek-2022",
      claim:
        "Dez cirurgiões de ortopedia pediátrica mediram o desvio com método de pontos correspondentes: confiabilidade interobservador quase perfeita nas incidências AP (CCI 0,944) e oblíqua externa (CCI 0,975). Apesar de viés médio < 1 mm em relação à TC, os limites de concordância excederam 5 mm, e a conduta baseada na TC divergiu da baseada na AP em 29%, na oblíqua externa em 41% e na axial em 47% dos casos.",
      takeaway:
        "O desvio é reprodutível de medir, mas não é confiável de traduzir entre métodos — uma variação de 5–6 mm é grande demais para servir de único critério cirúrgico.",
      level: "II",
      studyType: "Estudo diagnóstico de confiabilidade",
      era: "atual",
      citation: {
        authors: "Guzek RH, Harwood K, Isaacs D, et al.",
        title: "A Corresponding Point Measurement System Provides Reliable Measurement of Displacement for Medial Epicondyle Fractures",
        journal: "JB JS Open Access",
        year: 2022,
        pmid: "36404950",
        doi: "10.2106/JBJS.OA.22.00039",
        url: "https://doi.org/10.2106/JBJS.OA.22.00039",
      },
    },
  ],

  pearls: [
    "É APÓFISE, não epífise: a avulsão não afeta o crescimento longitudinal nem gera deformidade angular fisária.",
    "CRITOE salva: tróclea ossificada + epicôndilo medial ausente do leito = fragmento dentro da articulação.",
    "Reduziu a luxação? Radiografe de novo — a redução pode encarcerar um fragmento que estava livre.",
    "SCIENCE (Lancet 2026): nas desviadas sem encarceramento, ORIF não melhora a função aos 12 meses e adiciona complicações.",
    "O encarceramento foi excluído do SCIENCE — segue sendo indicação cirúrgica absoluta.",
    "Não união fibrosa é comum e quase sempre assintomática; rigidez, não pseudartrose, é o inimigo real.",
    "A AP subestima o desvio: o fragmento migra para anterior com a massa flexo-pronadora.",
    "Decúbito ventral relaxa a massa flexo-pronadora e transforma uma redução tensa numa redução fácil.",
    "Nervo ulnar: examinar e registrar ANTES de qualquer manobra — depois, é palavra contra palavra.",
    "União radiográfica não é o desfecho que importa para a criança. Função é.",
  ],

  pitfalls: [
    "Confundir o fragmento encarcerado com o núcleo da tróclea e liberar a criança com o cotovelo bloqueado.",
    "Reduzir a luxação e imobilizar sem radiografia de controle.",
    "Indicar cirurgia apenas pelos milímetros medidos na AP — a incidência que mais subestima o desvio.",
    "Extrapolar o SCIENCE para os encarcerados, que foram explicitamente excluídos do ensaio.",
    "Reoperar uma não união fibrosa assintomática só porque a radiografia incomoda o cirurgião.",
    "Imobilizar além de 4 semanas e trocar uma pseudartrose silenciosa por um cotovelo rígido.",
    "Perfurar ou tracionar sem identificar o nervo ulnar na via medial.",
    "Parafuso longo demais ou fora da coluna medial, penetrando a fossa do olécrano ou a articulação.",
  ],

  figures: [
    {
      id: "fratura-epicondilo-medial:anatomia",
      kind: "diagram",
      caption: "Apófise do epicôndilo medial, sua fise, massa flexo-pronadora, LCU e o nervo ulnar no túnel cubital.",
      alt: "Anatomia do epicôndilo medial da criança em incidência anteroposterior.",
    },
    {
      id: "fratura-epicondilo-medial:ossificacao",
      kind: "diagram",
      caption: "CRITOE — sequência de ossificação. Tróclea presente sem o epicôndilo medial no leito = fragmento encarcerado.",
      alt: "Centros de ossificação do cotovelo e suas idades de aparecimento.",
    },
    {
      id: "fratura-epicondilo-medial:mecanismo",
      kind: "diagram",
      caption: "Mecanismo: valgo somado à tração da massa flexo-pronadora e do LCU arranca a apófise.",
      alt: "Vetores de força que causam a avulsão do epicôndilo medial.",
    },
    {
      id: "fratura-epicondilo-medial:classificacao",
      variant: "I",
      kind: "diagram",
      caption: "Tipo I — desvio ≤ 2 mm.",
      alt: "Fratura do epicôndilo medial sem desvio.",
    },
    {
      id: "fratura-epicondilo-medial:classificacao",
      variant: "II",
      kind: "diagram",
      caption: "Tipo II — desviada (> 2 mm), sem encarceramento.",
      alt: "Fratura do epicôndilo medial desviada.",
    },
    {
      id: "fratura-epicondilo-medial:classificacao",
      variant: "III",
      kind: "diagram",
      caption: "Tipo III — fragmento encarcerado na articulação: indicação cirúrgica absoluta.",
      alt: "Fragmento do epicôndilo medial preso dentro da articulação.",
    },
    {
      id: "fratura-epicondilo-medial:classificacao",
      variant: "IV",
      kind: "diagram",
      caption: "Tipo IV — fratura-luxação do cotovelo.",
      alt: "Avulsão do epicôndilo medial com luxação do cotovelo.",
    },
    {
      id: "fratura-epicondilo-medial:desvio",
      kind: "diagram",
      caption: "A AP subestima o desvio; a oblíqua revela o deslocamento verdadeiro.",
      alt: "Comparação da medida do desvio entre incidência AP e oblíqua.",
    },
    {
      id: "fratura-epicondilo-medial:encarceramento",
      variant: "encarcerado",
      kind: "diagram",
      caption: "Fragmento encarcerado bloqueando o espaço úmero-ulnar, com leito doador vazio.",
      alt: "Fragmento encarcerado na articulação do cotovelo.",
    },
    {
      id: "fratura-epicondilo-medial:encarceramento",
      variant: "extracao",
      kind: "diagram",
      caption: "Extração: valgo com supinação e extensão do punho pode desencaixar o fragmento.",
      alt: "Manobra de extração do fragmento encarcerado.",
    },
    {
      id: "fratura-epicondilo-medial:orif",
      kind: "diagram",
      caption: "ORIF: parafuso canulado 4,0 mm parcialmente rosqueado com arruela, trajetória póstero-anterior na coluna medial.",
      alt: "Fixação do epicôndilo medial com parafuso canulado e arruela.",
    },
    {
      id: "fratura-epicondilo-medial:instabilidade-valgo",
      kind: "diagram",
      caption: "Não união com LCU ancorado no fragmento distalizado: abertura do compartimento medial sob valgo.",
      alt: "Instabilidade em valgo do cotovelo por não união do epicôndilo medial.",
    },
  ],

  meta: {
    lastReviewed: "2026-07-14",
    sources: [
      "Waters PM, Skaggs DL, Flynn JM. Rockwood and Wilkins' Fractures in Children, 10ª ed. (2024)",
      "Herring JA. Tachdjian's Pediatric Orthopaedics, 6ª ed. (2022)",
      "Weinstein SL, Flynn JM. Lovell and Winter's Pediatric Orthopaedics, 8ª ed. (2021)",
      "Bibliografia TEOT 2026",
    ],
    attribution: "Evidência recuperada do PubMed. Ver PMIDs e DOIs citados.",
    figureReference:
      "Rockwood and Wilkins' Fractures in Children, 10ª ed. (2024) / Tachdjian's Pediatric Orthopaedics 6ª",
  },
});
