import { defineTopic } from "../../types/topic";

/* Fratura por insuficiência sacral — fratura por fragilidade do sacro no idoso
   osteoporótico. Ênfase no diagnóstico (radiografia normal não exclui; RM é o
   exame de escolha), na classificação de Denis + FFP de Rommens, no tratamento
   conservador com mobilização precoce e no tratamento da osteoporose, com
   sacroplastia / fixação percutânea reservadas aos casos refratários.
   Evidência verificada no PubMed (DOIs/PMIDs reais citados). */
export const topic = defineTopic({
  id: "col-sacro-fratura-insuficiencia",
  slug: "fratura-insuficiencia-sacral",
  regionId: "coluna",
  bone: "Sacro",
  injury: "Fratura por insuficiência",
  title: "Fratura por insuficiência sacral",
  subtitle:
    "Dor lombossacra no idoso osteoporótico com radiografia normal — o diagnóstico que se faz na RM.",
  laterality: null,
  status: "complete",

  overview:
    "A fratura por insuficiência sacral é uma fratura por fragilidade: osso osteoporótico que cede sob carga fisiológica normal. Ocorre sem trauma identificável ou após trauma trivial (queda da própria altura, sentar-se bruscamente, um passo em falso) e acomete tipicamente mulheres acima dos 70 anos. Fatores de risco adicionais incluem corticoterapia prolongada, radioterapia pélvica prévia, artroplastia total do quadril, artrodese lombossacra, hiperparatireoidismo e osteomalácia.\n\nO grande problema é diagnóstico, não terapêutico. A queixa — dor lombossacra, glútea ou inguinal, mecânica, que piora ao levantar e caminhar — é inespecífica e imita lombalgia degenerativa, sacroileíte, bursite trocantérica ou metástase. A radiografia simples é normal na maioria dos casos: a osteopenia, a sobreposição de gases intestinais e a orientação oblíqua da asa do sacro escondem o traço. O resultado é um atraso diagnóstico médio de semanas, durante o qual o paciente permanece imobilizado, com todas as complicações do decúbito.\n\nA chave é a suspeição: idoso com dor lombossacra desproporcional e radiografia sem alterações merece imagem avançada. A RM é o exame de escolha — mostra o edema medular ósseo com sensibilidade próxima de 99%; a TC define a morfologia e o desvio; a cintilografia exibe o clássico sinal de Honda (captação em H ou U). Reconhecida a fratura, ela deve ser lida como parte do espectro das fraturas por fragilidade da pelve (FFP de Rommens), que quase sempre acompanha uma lesão do anel anterior.\n\nO tratamento é conservador na esmagadora maioria: analgesia multimodal e mobilização precoce — não repouso no leito. A cirurgia (sacroplastia ou fixação percutânea) fica para a dor refratária que impede a reabilitação e para a instabilidade progressiva. Em todos os casos, a fratura é um evento sentinela de osteoporose: investigar e tratar a doença de base é parte obrigatória do tratamento, e é justamente a parte mais negligenciada.",

  keyFacts: [
    { label: "Perfil", value: "Mulher > 70 anos, osteoporótica; trauma trivial ou ausente" },
    { label: "Queixa", value: "Dor lombossacra / glútea mecânica, sem radiculopatia" },
    { label: "Radiografia", value: "Normal na maioria — NÃO exclui o diagnóstico" },
    { label: "Exame de escolha", value: "RM (T1 + STIR): edema ósseo, sensibilidade ~99%" },
    { label: "Sinal clássico", value: "Honda (H / U) na cintilografia" },
    { label: "Classificação", value: "Denis (zonas) + FFP de Rommens (estabilidade)" },
    { label: "Tratamento base", value: "Analgesia + mobilização precoce + tratar osteoporose" },
    { label: "Cirurgia", value: "Dor refratária (2–3 sem) ou instabilidade progressiva" },
  ],

  anatomy: {
    text:
      "O sacro é a pedra angular do anel pélvico: um bloco triangular de cinco vértebras fundidas, encaixado entre os ílios como uma cunha invertida e suspenso pelos ligamentos sacroilíacos posteriores, os mais fortes do corpo. Toda a carga do tronco desce pelo platô de S1 e é transmitida lateralmente, pelas asas do sacro e pelas articulações sacroilíacas, até os acetábulos.\n\nÉ exatamente na asa que a fratura por insuficiência acontece. A asa é a porção do sacro lateral aos forames e concentra três fragilidades: recebe o vetor de carga em fluxo concentrado, é composta quase só de osso esponjoso com córtex fina e, no idoso, apresenta uma região central de densidade muito baixa — o chamado vazio alar (alar void), que em alguns indivíduos chega a ser praticamente desprovida de trabéculas. Some-se a orientação oblíqua da asa, que na radiografia AP se projeta sobreposta ao ílio, e se entende por que o traço é invisível.\n\nAs zonas de Denis organizam o sacro em faixas verticais: zona I lateral aos forames (a asa — sede típica da fratura por insuficiência), zona II através dos forames e zona III medial aos forames, envolvendo o canal sacral. A relevância é neurológica: a raiz de L5 cruza a face anterior da asa antes de formar o tronco lombossacral (risco na zona I), a raiz de S1 emerge do forame de S1 (zona II) e as raízes sacrais baixas e a cauda equina ocupam o canal (zona III). Como a fratura por insuficiência é quase sempre zona I e não deslocada, o déficit neurológico é raro — sua presença deve levantar suspeita de outro diagnóstico ou de padrão instável.\n\nO padrão morfológico segue as linhas de carga: traços verticais bilaterais nas asas, frequentemente unidos por um componente transverso ao nível de S2, onde a área de secção do sacro se reduz. Essa geometria produz o sinal de Honda. Quando esse componente transverso é completo e deslocado, separa o segmento superior (que acompanha a coluna) do inferior (que acompanha a pelve) — é a dissociação espinopélvica. Anteriormente, o anel quase sempre também falha: fraturas dos ramos púbicos acompanham a lesão sacral em mais de dois terços dos casos, e é essa combinação que a classificação FFP descreve.",
    figureIds: [
      "fratura-insuficiencia-sacral:anatomia",
      "fratura-insuficiencia-sacral:zonas-denis",
    ],
  },

  classification: [
    {
      id: "denis",
      name: "Denis (zonas verticais)",
      basis: "Posição do traço em relação aos forames sacrais — prediz o risco neurológico",
      note: "Descreve a topografia. Na fratura por insuficiência, a zona I é a regra e o déficit neurológico é excepcional. Selecione a zona para ver o traço correspondente.",
      types: [
        {
          code: "I",
          label: "Zona I — alar (lateral aos forames)",
          description:
            "Traço na asa do sacro, lateral aos forames. É a localização típica da fratura por insuficiência, porque a asa concentra a carga e é o osso mais esponjoso e mais osteopênico do sacro. Déficit neurológico em ~6% dos casos traumáticos (raiz de L5, que cruza a asa anteriormente) e praticamente ausente nas fraturas por fragilidade não deslocadas.",
          figureId: "fratura-insuficiencia-sacral:zonas-denis",
          figureVariant: "I",
        },
        {
          code: "II",
          label: "Zona II — transforaminal",
          description:
            "Traço atravessa os forames sacrais. Déficit em ~28% dos casos traumáticos, tipicamente radiculopatia de L5/S1 unilateral, sem disfunção esfincteriana. Menos comum na insuficiência; quando presente, tende a acompanhar cominução ou progressão do desvio.",
          figureId: "fratura-insuficiencia-sacral:zonas-denis",
          figureVariant: "II",
        },
        {
          code: "III",
          label: "Zona III — canal sacral (medial aos forames)",
          description:
            "Traço medial aos forames, envolvendo o canal. Déficit em ~57% dos casos traumáticos, com alta taxa de disfunção vesical, intestinal e sexual (síndrome da cauda equina sacral). Rara como fratura por insuficiência isolada; quando ocorre, costuma ser o componente transverso de uma fratura em H/U com dissociação espinopélvica.",
          figureId: "fratura-insuficiencia-sacral:zonas-denis",
          figureVariant: "III",
        },
      ],
    },
    {
      id: "ffp-rommens",
      name: "FFP — Fraturas por Fragilidade da Pelve (Rommens e Hofmann)",
      basis: "Morfologia e grau de instabilidade do anel anterior + posterior — orienta o tratamento",
      note: "É a linguagem correta para essas fraturas: as classificações de trauma de alta energia (Tile, Young-Burgess) não refletem a morfologia da fratura por fragilidade. O tipo correlaciona-se com a instabilidade e com a invasividade do tratamento recomendado. Atenção: a FFP pode progredir de tipo ao longo das semanas.",
      types: [
        {
          code: "FFP I",
          label: "Lesão apenas do anel anterior",
          description:
            "Fratura isolada dos ramos púbicos (Ia unilateral, Ib bilateral), com anel posterior íntegro. Estável. Tratamento conservador. Cuidado: se a dor persistir, reinvestigue — pode haver lesão posterior oculta ainda não detectada, que reclassifica para FFP II.",
          figureId: "fratura-insuficiencia-sacral:ffp-rommens",
          figureVariant: "I",
        },
        {
          code: "FFP II",
          label: "Lesão posterior não deslocada",
          description:
            "IIa: fratura posterior isolada não deslocada (cominução alar sem traço completo). IIb: fratura por compressão/impacção da asa do sacro + lesão anterior — o padrão mais frequente da insuficiência sacral. IIc: fratura posterior completa não deslocada (sacro, SI ou ílio) + anterior. Estabilidade parcial. Conduta: tentativa de tratamento conservador; se a dor impedir a mobilização após ~2–3 semanas, considerar fixação percutânea.",
          figureId: "fratura-insuficiencia-sacral:ffp-rommens",
          figureVariant: "II",
        },
        {
          code: "FFP III",
          label: "Lesão posterior deslocada unilateral",
          description:
            "IIIa: fratura ilíaca deslocada. IIIb: disjunção sacroilíaca deslocada. IIIc: fratura sacral deslocada unilateral. Instável. O desvio indica falência mecânica: indica-se redução e fixação (parafuso iliossacral, placa em ponte ou fixação lombopélvica), habitualmente associada à estabilização do anel anterior.",
          figureId: "fratura-insuficiencia-sacral:ffp-rommens",
          figureVariant: "III",
        },
        {
          code: "FFP IV",
          label: "Lesão posterior bilateral",
          description:
            "IVa: fraturas ilíacas / disjunções SI bilaterais. IVb: fratura sacral em H ou U (dissociação espinopélvica) — os traços verticais bilaterais unidos pelo componente transverso separam a coluna da pelve. IVc: combinações posteriores bilaterais. Altamente instável. Exige fixação bilateral: barra/parafuso transsacral ou fixação triangular lombopélvica.",
          figureId: "fratura-insuficiencia-sacral:ffp-rommens",
          figureVariant: "IV",
        },
      ],
    },
    {
      id: "morfologia",
      name: "Padrão morfológico (imagem)",
      basis: "Geometria dos traços na RM / cintilografia / TC",
      note: "Descritiva, mas prática: o padrão bilateral com componente transverso (Honda) sinaliza maior instabilidade e maior chance de progressão.",
      types: [
        {
          code: "V-uni",
          label: "Vertical unilateral",
          description:
            "Traço vertical isolado em uma asa (Denis I). Padrão mais comum e mais benigno; edema em faixa vertical na RM. Conservador.",
          figureId: "fratura-insuficiencia-sacral:imagem",
          figureVariant: "rm",
        },
        {
          code: "V-bi",
          label: "Vertical bilateral",
          description:
            "Traços verticais nas duas asas, sem componente transverso. Corresponde às duas hastes do 'H' sem a barra transversal — captação em duas colunas na cintilografia.",
          figureId: "fratura-insuficiencia-sacral:sinal-honda",
          figureVariant: "U",
        },
        {
          code: "Honda",
          label: "Fratura em H / U (sinal de Honda)",
          description:
            "Traços verticais bilaterais unidos por componente transverso, tipicamente em S2. É o sinal clássico da cintilografia (captação em H, U ou suas variantes incompletas). Corresponde à FFP IVb; quando o componente transverso desloca, há dissociação espinopélvica e a fixação lombopélvica entra em discussão.",
          figureId: "fratura-insuficiencia-sacral:sinal-honda",
          figureVariant: "H",
        },
      ],
    },
  ],

  indications: {
    operative: [
      "Dor refratária que impede a mobilização e a reabilitação após 2–3 semanas de tratamento conservador bem conduzido (indicação mais comum).",
      "FFP III — lesão posterior deslocada unilateral: redução e fixação.",
      "FFP IV — lesão posterior bilateral / fratura em H ou U: fixação bilateral (barra transsacral ou lombopélvica).",
      "Progressão do desvio ou aparecimento de novo traço em imagem de controle (a FFP progride de tipo).",
      "Não união / pseudartrose sintomática com instabilidade persistente após meses.",
      "Déficit neurológico progressivo ou dissociação espinopélvica deslocada (raro; considerar descompressão associada).",
      "Impossibilidade de mobilizar por dor com risco iminente de complicações do decúbito em paciente previamente independente.",
    ],
    nonOperative: [
      "FFP I e a grande maioria das FFP II — base do tratamento.",
      "Fratura não deslocada em paciente que consegue mobilizar-se com analgesia adequada.",
      "Paciente com comorbidades proibitivas ou baixa demanda funcional.",
      "Analgesia multimodal escalonada: paracetamol + anti-inflamatório com cautela renal + opioide fraco por período curto; evitar sedação excessiva.",
      "Mobilização precoce com carga conforme a dor e apoio (andador) — repouso no leito é contraindicado.",
      "Investigação e tratamento da osteoporose em todos os casos (evento sentinela).",
      "Órtese lombossacra apenas como conforto analgésico, se ajudar a mobilizar; não estabiliza a fratura.",
    ],
    decisionNotes:
      "A decisão não é 'operar ou não operar' — é 'o paciente consegue mobilizar-se?'. O risco real nesse doente não é o desvio da fratura; é o decúbito. Imobilidade prolongada gera pneumonia, tromboembolismo, úlcera de pressão, delirium e perda irreversível de independência: a literatura reporta perda de autonomia em 64–89% e mortalidade em 13–27% após fraturas por fragilidade da pelve.\n\nPor isso o algoritmo é temporal, não anatômico. Começa-se pelo tratamento conservador estruturado, com analgesia agressiva e fisioterapia imediata. Reavalia-se em 2–3 semanas: se o paciente caminha, mantém-se. Se a dor continua impedindo a reabilitação, a intervenção percutânea deixa de ser 'agressiva' e passa a ser o caminho mais seguro — ela existe para devolver mobilidade, não para consertar uma imagem.\n\nAs exceções ao teste conservador são as FFP III e IV: o desvio ou a bilateralidade já indicam falência mecânica, e esperar tende a piorar o desvio. Em paralelo, três decisões correm sempre: (1) classificar o anel inteiro com TC — a fratura sacral raramente vem sozinha; (2) tratar a osteoporose — 71% desses pacientes não recebem prevenção secundária adequada, e a próxima fratura é previsível; (3) excluir os diferenciais que mudam tudo — metástase e infecção podem produzir edema sacral semelhante na RM.",
  },

  approaches: [
    {
      id: "conservador",
      name: "Tratamento conservador estruturado (não cirúrgico)",
      indication:
        "FFP I e II; qualquer fratura não deslocada em paciente que consegue mobilizar-se com analgesia. É a base do tratamento.",
      interval:
        "Sem via de acesso. Analgesia multimodal escalonada + fisioterapia com carga conforme a dor desde as primeiras 24–48 h + tratamento da osteoporose. Órtese lombossacra opcional, apenas para conforto.",
      atRisk: [
        "Complicações do decúbito (pneumonia, TEV, úlcera de pressão, delirium)",
        "Perda de independência e institucionalização",
        "Efeitos adversos de opioides no idoso (delirium, queda, constipação)",
        "Nefrotoxicidade e sangramento digestivo com anti-inflamatórios",
      ],
      figureId: "fratura-insuficiencia-sacral:conduta-escalonada",
    },
    {
      id: "sacroplastia",
      name: "Sacroplastia percutânea (guiada por TC ou fluoroscopia)",
      indication:
        "Dor refratária em fratura NÃO deslocada e NÃO transforaminal (FFP IIa/IIb), após falha do conservador. Objetivo é analgesia, não estabilização.",
      interval:
        "Paciente em decúbito ventral. Duas técnicas: eixo curto (agulha transilíaca oblíqua, entrando pelo ílio posterior até a asa — trajeto curto, exige mais punções) e eixo longo (agulha do ápice à base pelo eixo maior da asa, a partir do sacro caudal — preenchimento contínuo com menos punções). Variantes: cimento simples, balão (BSP) ou radiofrequência (RFS). Injeção de PMMA sob visão contínua.",
      atRisk: [
        "Raiz de S1 e forame sacral (extravasamento anterior/foraminal)",
        "Canal sacral e raízes sacrais (extravasamento medial)",
        "Plexo venoso pré-sacral (embolia de cimento)",
        "Articulação sacroilíaca (extravasamento lateral)",
      ],
      figureId: "fratura-insuficiencia-sacral:sacroplastia",
    },
    {
      id: "parafuso-iliossacral",
      name: "Parafuso iliossacral percutâneo (S1 ± S2), com ou sem cimento",
      indication:
        "FFP II com dor refratária e FFP IIIc unilateral. Estabilização mecânica real da lesão posterior.",
      interval:
        "Decúbito ventral ou dorsal. Ponto de entrada na face lateral do ílio, sob fluoroscopia (entrada, saída e perfil sacral) ou navegação 3D. Parafuso canulado atravessa a SI até o corpo de S1, dentro do corredor ósseo seguro. No osso osteoporótico, parafuso canulado perfurado com aumento por PMMA melhora a ancoragem e reduz o afrouxamento.",
      atRisk: [
        "Raiz de L5 (cruza a asa anteriormente — trajeto superior/anterior)",
        "Raiz de S1 (trajeto inferior/posterior)",
        "Vasos ilíacos internos e artéria glútea superior (perfuração anterior)",
        "Canal sacral (trajeto medial excessivo)",
        "Falência do corredor por dismorfismo sacral (sacro displásico)",
      ],
      figureId: "fratura-insuficiencia-sacral:fixacao-percutanea",
    },
    {
      id: "transsacral",
      name: "Barra ou parafuso transsacral (bicortical)",
      indication:
        "FFP IV — lesão posterior bilateral, fratura em H/U. Também útil quando a fixação unilateral falhou por osteoporose.",
      interval:
        "Mesmo corredor de S1, porém o implante atravessa todo o sacro e ancora nas corticais laterais dos dois ílios. A ancoragem bicortical não depende da qualidade do osso esponjoso do sacro — vantagem decisiva no paciente osteoporótico. Exige corredor de S1 amplo (TC pré-operatória obrigatória para excluir dismorfismo).",
      atRisk: [
        "Raízes de L5 e S1 bilateralmente",
        "Canal sacral (trajeto obrigatoriamente transversal)",
        "Vasos ilíacos bilaterais",
        "Corredor insuficiente no sacro displásico — contraindicação à técnica",
      ],
      figureId: "fratura-insuficiencia-sacral:fixacao-percutanea",
    },
    {
      id: "lombopelvica",
      name: "Fixação triangular lombopélvica (via posterior aberta ou percutânea)",
      indication:
        "Dissociação espinopélvica deslocada (FFP IVb com desvio), falência de fixação prévia, necessidade de descompressão associada.",
      interval:
        "Via posterior na linha média ou percutânea paramediana. Parafusos pediculares em L5 (± L4) conectados a parafusos ilíacos por hastes, criando um constructo triangular que transfere a carga da coluna diretamente para a pelve, contornando o sacro fraturado. Associa-se parafuso iliossacral para a fixação horizontal.",
      atRisk: [
        "Raízes de L5 e S1",
        "Cauda equina (se houver descompressão associada)",
        "Proeminência do implante e deiscência de ferida (paciente magro, pele frágil)",
        "Maior perda sanguínea e tempo cirúrgico — mal tolerados no idoso frágil",
      ],
      figureId: "fratura-insuficiencia-sacral:fixacao-percutanea",
    },
  ],

  technique: [
    {
      n: 1,
      title: "Suspeitar — o passo que define o desfecho",
      detail:
        "Idoso, sobretudo mulher acima de 70 anos, com dor lombossacra, glútea ou inguinal de início recente, mecânica, que piora ao levantar-se e caminhar e alivia deitado, sem trauma ou após trauma trivial. Ao exame: dor à palpação sobre o sulco sacral e à compressão pélvica; exame neurológico tipicamente normal. Procure ativamente os fatores de risco: corticoterapia, radioterapia pélvica prévia, artrodese lombossacra, artroplastia do quadril, hiperparatireoidismo, osteomalácia, doença inflamatória intestinal.",
      figureId: "fratura-insuficiencia-sacral:conduta-escalonada",
      tips: [
        "A dor da insuficiência sacral costuma ser desproporcional ao exame de imagem inicial — leve isso a sério.",
        "Não há radiculopatia: dor irradiada 'em faixa' glútea não é ciática.",
        "Cinco a dez por cento dos pacientes têm fratura pélvica associada não reconhecida — examine também os ramos púbicos e o quadril.",
      ],
      pitfalls: [
        "Rotular como 'lombalgia inespecífica do idoso' e mandar para casa com analgésico.",
        "Atribuir a dor a alterações degenerativas encontradas por acaso na coluna lombar.",
        "Esquecer o diagnóstico em paciente com dor após artrodese lombossacra — grupo de alto risco.",
      ],
    },
    {
      n: 2,
      title: "Imagem — radiografia primeiro, mas não pare nela",
      detail:
        "Radiografia AP da pelve (± incidências de inlet/outlet) é o exame inicial e serve principalmente para ver os ramos púbicos e excluir outros diagnósticos. Ela é normal na maioria dos casos de fratura sacral: osteopenia, gases intestinais e a obliquidade da asa escondem o traço. Se a suspeita persiste, avance: RM da pelve/sacro com T1 e STIR (ou T2 fat-sat) é o exame de escolha — mostra o edema medular ósseo com sensibilidade próxima de 99%, hipossinal em T1 e hipersinal em STIR, e é o único que detecta a fratura na fase precoce. TC complementa: define o traço, a esclerose, a cominução e o desvio, e é indispensável para planejar fixação. Cintilografia óssea (sinal de Honda) e SPECT/TC são alternativas quando a RM é contraindicada (marca-passo, claustrofobia).",
      figureId: "fratura-insuficiencia-sacral:imagem",
      figureVariant: "rm",
      tips: [
        "Radiografia normal NÃO exclui — é o erro mais comum e mais caro deste tópico.",
        "Peça a RM cobrindo toda a pelve: revela fraturas simultâneas dos ramos, do ílio e do fêmur proximal.",
        "TC de dupla energia (mapa de medula óssea) é alternativa útil quando a RM não é possível.",
        "Na TC, a esclerose em faixa vertical na asa é o achado sutil que denuncia a fratura.",
      ],
      pitfalls: [
        "Solicitar só TC: a TC pode não mostrar o traço na fase muito precoce, quando só há edema.",
        "Interpretar o edema sacral isoladamente — metástase e osteomielite produzem padrão semelhante; a morfologia linear do traço e o contexto clínico decidem.",
        "Não repetir a imagem quando a dor persiste — a FFP progride de tipo com o tempo.",
      ],
    },
    {
      n: 3,
      title: "Classificar o anel inteiro — Denis + FFP",
      detail:
        "Determine a zona de Denis (I alar na quase totalidade dos casos) e, com a TC, classifique a lesão como FFP de Rommens, olhando obrigatoriamente para o anel anterior e o posterior. Mais de dois terços têm fratura associada dos ramos púbicos. Registre: unilateral ou bilateral, presença de componente transverso (H/U), grau de desvio e cominução. Essa classificação é o que orienta a conduta e permite comparar imagens ao longo do seguimento.",
      figureId: "fratura-insuficiencia-sacral:ffp-rommens",
      tips: [
        "Não use Tile ou Young-Burgess aqui: foram criados para trauma de alta energia e não descrevem a morfologia da fragilidade.",
        "Fratura isolada de ramos púbicos no idoso (aparente FFP I) com dor posterior = procure lesão sacral oculta na RM.",
        "Documente o desvio em milímetros — é o parâmetro que definirá 'progressão' na reavaliação.",
      ],
      pitfalls: [
        "Classificar só pela radiografia: o tipo FFP só é confiável com TC.",
        "Ignorar o componente transverso em S2 — é ele que separa FFP II de FFP IVb.",
        "Assumir que o tipo é estático: a FFP progride, e o tipo deve ser reavaliado.",
      ],
    },
    {
      n: 4,
      title: "Tratamento conservador — analgesia agressiva e mobilização imediata",
      detail:
        "Este é o tratamento, não a espera pelo tratamento. Analgesia multimodal escalonada: paracetamol em dose plena como base, anti-inflamatório por período curto com cautela renal e gástrica, opioide fraco em dose baixa e por tempo limitado se necessário. Fisioterapia começa nas primeiras 24–48 horas: transferências, ortostatismo e marcha com andador, carga conforme a dor. Órtese lombossacra apenas se ajudar a mobilizar — ela não estabiliza a fratura. Profilaxia de tromboembolismo enquanto a mobilidade estiver reduzida. Metas diárias explícitas de marcha, registradas.",
      figureId: "fratura-insuficiencia-sacral:conduta-escalonada",
      tips: [
        "A meta não é 'fratura consolidada' — é 'paciente de pé'. Escreva a meta funcional no prontuário.",
        "Séries de tratamento conservador de FFP II/III mostram remobilização em até 6 semanas na grande maioria.",
        "Analgesia insuficiente é a causa mais comum de 'falha do conservador' — otimize antes de indicar cirurgia.",
        "Evite opioide forte em dose alta: o delirium que ele causa imobiliza mais que a dor.",
      ],
      pitfalls: [
        "Prescrever repouso no leito — é a conduta mais nociva possível neste doente.",
        "Restringir carga: descarga não protege a fratura e destrói a função.",
        "Deixar a fisioterapia para 'quando a dor melhorar' — a ordem é inversa.",
      ],
    },
    {
      n: 5,
      title: "Tratar a osteoporose — parte obrigatória, não um adendo",
      detail:
        "A fratura por insuficiência é, por definição, um evento sentinela de osteoporose grave. Solicite densitometria, cálcio, fósforo, fosfatase alcalina, 25-OH-vitamina D, PTH, função renal e hepática, e proteinograma/eletroforese para excluir mieloma. Reponha cálcio e vitamina D e inicie terapia específica — a fratura já estabelece a indicação, independentemente do T-score. Nesse cenário de fratura recente e alto risco, o agente anabólico (teriparatida) é uma escolha racional, com dados sugerindo aceleração da consolidação; alternativas antirreabsortivas incluem os bisfosfonatos e o denosumabe. Revise a lista de medicamentos e o risco de queda.",
      figureId: "fratura-insuficiencia-sacral:conduta-escalonada",
      tips: [
        "Setenta e um por cento dos pacientes com FFP não recebem prevenção secundária adequada — não seja essa estatística.",
        "Programa de fracture liaison service reduz a próxima fratura mais do que qualquer implante.",
        "Excluir mieloma e metástase é obrigatório antes de rotular como 'osteoporose'.",
      ],
      pitfalls: [
        "Tratar a fratura e alta sem investigar a osteoporose — a próxima fratura é previsível.",
        "Repor só cálcio e vitamina D e chamar isso de tratamento da osteoporose.",
        "Ignorar causas secundárias (hiperparatireoidismo, osteomalácia, radioterapia prévia).",
      ],
    },
    {
      n: 6,
      title: "Reavaliar em 2–3 semanas — o ponto de decisão",
      detail:
        "Reavaliação clínica dirigida a uma única pergunta: o paciente consegue mobilizar-se? Se caminha com apoio e a dor é gerenciável, mantenha o conservador e siga com fisioterapia e osteoporose. Se a dor continua impedindo transferências e marcha apesar de analgesia otimizada, repita a TC: procure aumento do desvio, novo traço (progressão de FFP II para III/IV) ou sinais de não união. Este é o momento de escalar — não antes (sem chance ao conservador) e não muito depois (o decúbito prolongado já terá cobrado seu preço).",
      figureId: "fratura-insuficiencia-sacral:conduta-escalonada",
      tips: [
        "Revisões sistemáticas apontam ~3 semanas como o momento típico da indicação cirúrgica após falha do conservador.",
        "Documente objetivamente a distância caminhada — 'melhorou' não é dado.",
        "Nova dor após período de melhora = provável progressão; reimagine.",
      ],
      pitfalls: [
        "Operar na primeira semana por 'dor forte' sem ter otimizado a analgesia.",
        "Insistir por dois meses no conservador em paciente acamado — a janela para preservar a independência fecha.",
        "Reavaliar só a imagem e não a função.",
      ],
    },
    {
      n: 7,
      title: "Sacroplastia percutânea — quando o objetivo é analgesia",
      detail:
        "Indicada na fratura não deslocada, não transforaminal (FFP IIa/IIb), com dor refratária. Decúbito ventral, guia por TC (preferível) ou fluoroscopia. Acesso por eixo curto (transilíaco oblíquo até a asa) ou eixo longo (do ápice à base pelo eixo maior da asa). Alcançada a zona de fratura, injeta-se PMMA de alta viscosidade sob visão contínua, parando ao primeiro sinal de extravasamento. Variantes técnicas — cimento simples, balão (BSP) e radiofrequência (RFS) — produzem alívio equivalente; a radiofrequência, com cimento de alta viscosidade, mostra menos extravasamento. Alívio típico já no 2º dia, com queda da EVA de ~8,7 para ~2,4 e ganho funcional expressivo, sustentado por 18–24 meses.",
      figureId: "fratura-insuficiencia-sacral:sacroplastia",
      figureVariant: "eixo-curto",
      tips: [
        "Sacroplastia alivia dor, mas estabiliza pouco: não a use como substituto de fixação em FFP III/IV.",
        "Cimento de alta viscosidade e injeção lenta sob TC são as duas medidas que evitam extravasamento.",
        "Guia por TC permite ver o forame e o canal em tempo real — vantagem clara sobre a fluoroscopia isolada.",
      ],
      pitfalls: [
        "Indicar sacroplastia em fratura transforaminal ou central — risco de cimento no forame/canal.",
        "Usar cimento de baixa viscosidade: extravasamento venoso pré-sacral e risco de embolia.",
        "Perseguir 'preenchimento completo' — o objetivo é analgesia, não encher a asa.",
        "Adicionar sacroplastia rotineiramente ao parafuso: não melhora dor, incapacidade nem tempo de internação.",
      ],
    },
    {
      n: 8,
      title: "Fixação percutânea — quando o objetivo é estabilidade",
      detail:
        "FFP II refratária e FFP IIIc: parafuso iliossacral em S1 (± S2), preferencialmente canulado perfurado com aumento por PMMA, dada a osteoporose. FFP IV / fratura em H-U: barra ou parafuso transsacral, cuja ancoragem bicortical nos dois ílios independe da qualidade do esponjoso sacral. Dissociação espinopélvica deslocada ou falência de fixação prévia: fixação triangular lombopélvica (parafusos pediculares em L5 conectados a parafusos ilíacos), associada a parafuso iliossacral. TC pré-operatória obrigatória para avaliar o corredor de S1 e excluir dismorfismo sacral. Navegação 3D ou fluoroscopia com as três incidências (entrada, saída, perfil sacral) são mandatórias. Estabilize também o anel anterior quando a lesão for relevante (parafuso retrógrado transpúbico ou placa).",
      figureId: "fratura-insuficiencia-sacral:fixacao-percutanea",
      figureVariant: "transsacral",
      tips: [
        "No sacro osteoporótico, o parafuso longo transsacral bicortical supera o iliossacral curto — a rosca não segura em osso ausente.",
        "Aumento com PMMA no parafuso perfurado reduz afrouxamento e retirada.",
        "Sacro dismórfico (corredor estreito em S1) é contraindicação ao transsacral em S1 — reavalie S2 ou mude de estratégia.",
        "Fixação percutânea navegada permite alta em cerca de 9 dias com ganho funcional expressivo.",
      ],
      pitfalls: [
        "Operar sem TC do corredor — a via mais direta para lesar L5 ou os vasos ilíacos.",
        "Fiar-se apenas na incidência AP: sem perfil sacral e outlet/inlet, a trajetória é adivinhação.",
        "Fixar só o posterior numa FFP IV com anterior muito instável — dor persistente do anel anterior.",
        "Injetar cimento no parafuso sem checar a integridade da parede medial — extravasamento para o canal.",
      ],
    },
  ],

  postop: {
    immobilization:
      "Não se usa imobilização externa. A órtese lombossacra é opcional e serve apenas como conforto analgésico para permitir a mobilização — ela não estabiliza a fratura sacral e, se atrapalhar a marcha ou a ventilação, deve ser retirada. Nenhuma restrição postural é imposta.",
    weightBearing:
      "Carga conforme a dor (weight-bearing as tolerated) desde o primeiro dia, tanto no tratamento conservador quanto após sacroplastia ou fixação percutânea. Andador nas primeiras semanas, progredindo para bengala. Descarga ou repouso no leito são contraindicados: não protegem a fratura e produzem pneumonia, tromboembolismo, úlcera de pressão, delirium e perda de independência — o desfecho que realmente ameaça este paciente.",
    rehab: [
      {
        window: "0–2 semanas (fase aguda)",
        weightBearing: "Carga conforme a dor, com andador",
        focus:
          "Analgesia multimodal otimizada. Transferências, ortostatismo e marcha assistida nas primeiras 24–48 h. Profilaxia de TEV. Cuidado com pele e prevenção de delirium. Iniciar investigação da osteoporose. Meta funcional diária registrada.",
      },
      {
        window: "2–6 semanas",
        weightBearing: "Carga total conforme tolerância; desmame do andador",
        focus:
          "Progressão da marcha e da distância percorrida. Fortalecimento de glúteos e core em cadeia fechada, sem exercícios de impacto. Ponto de decisão na 2ª–3ª semana: se não mobiliza apesar de analgesia otimizada, repetir TC e considerar intervenção. Iniciar terapia específica da osteoporose.",
      },
      {
        window: "6–12 semanas",
        weightBearing: "Carga total, sem apoio se possível",
        focus:
          "Consolidação clínica esperada na maioria. Treino de equilíbrio e prevenção de quedas. Recuperação da independência nas atividades de vida diária. Avaliação domiciliar de riscos. Revisão de medicamentos que aumentam risco de queda.",
      },
      {
        window: "3–12 meses",
        weightBearing: "Sem restrição",
        focus:
          "Manutenção do programa de exercícios e da adesão ao tratamento antiosteoporótico. Vigilância para dor recorrente (não união, novo traço, fratura contralateral por insuficiência). Consolidação do plano de prevenção secundária.",
      },
    ],
    followup:
      "Reavaliação clínica em 2–3 semanas (o ponto de decisão), depois em 6 e 12 semanas, com foco na função — distância caminhada e independência —, não apenas na imagem. Radiografias de controle em 6 e 12 semanas; TC apenas se houver dor persistente, piora ou suspeita de progressão do tipo FFP, de não união ou de falência de implante. Densitometria e reavaliação metabólica conforme o protocolo de osteoporose, com revisão da adesão em 6 e 12 meses. Idealmente, incluir o paciente em um programa de ortogeriatria / fracture liaison service: o desfecho depende mais da prevenção da próxima fratura do que do tratamento desta.",
  },

  complications: [
    {
      name: "Atraso diagnóstico",
      detail:
        "A complicação mais frequente e a mais evitável. Séries relatam semanas entre o início da dor e o diagnóstico, com o paciente imobilizado e sob analgesia insuficiente nesse intervalo. É o motor de quase todas as demais complicações.",
      prevention:
        "Suspeição ativa no idoso com dor lombossacra e radiografia normal; limiar baixo para RM.",
    },
    {
      name: "Complicações do decúbito",
      detail:
        "Pneumonia, tromboembolismo venoso, úlcera de pressão, infecção urinária, delirium, sarcopenia acelerada e descondicionamento. Decorrem da imobilidade — seja pela dor não tratada, seja por prescrição equivocada de repouso.",
      prevention:
        "Analgesia agressiva, mobilização nas primeiras 24–48 h, profilaxia de TEV, proibir repouso no leito.",
    },
    {
      name: "Perda de independência e mortalidade",
      detail:
        "Desfecho mais importante do tópico: a literatura reporta perda de independência em 64–89% e mortalidade em 13–27% após fraturas por fragilidade da pelve e do sacro — números comparáveis aos da fratura do quadril.",
      prevention:
        "Manejo ortogeriátrico, mobilização precoce, indicação oportuna (nem precoce nem tardia) de intervenção, prevenção secundária.",
    },
    {
      name: "Progressão do desvio / mudança de tipo FFP",
      detail:
        "A FFP não é estática: uma lesão II pode evoluir para III ou IV ao longo das semanas, com aumento do desvio, novo traço e dor crescente. É a razão pela qual a reavaliação com imagem é obrigatória quando a dor persiste.",
      prevention:
        "Reavaliar clinicamente em 2–3 semanas e repetir a TC diante de dor persistente ou piora.",
    },
    {
      name: "Não união / pseudartrose",
      detail:
        "Dor persistente por meses, com traço não consolidado, esclerose e por vezes formação de cavidade na TC. Mais comum nas fraturas com componente transverso, nas irradiadas e nas não tratadas para osteoporose.",
      prevention:
        "Tratamento da osteoporose, incluindo considerar agente anabólico; fixação nos casos com instabilidade persistente.",
    },
    {
      name: "Extravasamento de cimento (sacroplastia)",
      detail:
        "Complicação mais temida do procedimento. Pode ser assintomático (relatado em cerca de 8% com cimento convencional) ou causar radiculopatia por impacção do forame de S1; embolia pulmonar de cimento pelo plexo venoso pré-sacral é rara, porém grave.",
      prevention:
        "Guia por TC, cimento de alta viscosidade (ou radiofrequência — sem extravasamento em série comparativa), injeção lenta sob visão contínua, evitar padrões transforaminais e centrais.",
    },
    {
      name: "Lesão neurovascular na fixação percutânea",
      detail:
        "Raiz de L5 (que cruza a asa anteriormente), raiz de S1, canal sacral, vasos ilíacos internos e artéria glútea superior. O risco aumenta muito no sacro dismórfico, em que o corredor de S1 é estreito ou ausente.",
      prevention:
        "TC pré-operatória do corredor, navegação 3D ou fluoroscopia com entrada, saída e perfil sacral obrigatórios; considerar S2 ou outra estratégia no sacro displásico.",
    },
    {
      name: "Afrouxamento / falência do implante",
      detail:
        "O osso osteoporótico não segura rosca: afrouxamento do parafuso iliossacral, migração e perda de redução são frequentes, sobretudo com parafusos curtos unilaterais.",
      prevention:
        "Preferir parafuso transsacral bicortical, usar parafusos perfurados com aumento por PMMA, tratar a osteoporose.",
    },
    {
      name: "Fratura por insuficiência subsequente",
      detail:
        "Novas fraturas por fragilidade — sacro contralateral, ramos púbicos, vértebras, quadril — são comuns e refletem a doença de base não tratada.",
      prevention:
        "Prevenção secundária estruturada (fracture liaison service), tratamento antiosteoporótico específico, prevenção de quedas.",
    },
    {
      name: "Diagnóstico incorreto (metástase / infecção)",
      detail:
        "Edema sacral na RM não é sinônimo de fratura por insuficiência: metástase, mieloma e osteomielite produzem padrão semelhante e mudam completamente a conduta.",
      prevention:
        "Analisar a morfologia linear do traço, correlacionar com o quadro clínico, rastrear mieloma e neoplasia; biópsia se houver massa de partes moles ou destruição cortical.",
    },
  ],

  evidence: [
    {
      id: "ev-ffp-classificacao",
      claim:
        "As classificações de trauma de alta energia não descrevem as fraturas por fragilidade da pelve; a classificação FFP, baseada na morfologia e no grau de instabilidade, orienta a decisão terapêutica.",
      takeaway:
        "Análise de 245 pacientes consecutivos que originou a classificação FFP (I–IV): a maioria das FFP é minimamente desviada e não exige cirurgia, mas em parte dos doentes o dano ósseo progride, com aumento do desvio, não união e instabilidade persistente. O tipo correlaciona-se com a instabilidade e sugere a estratégia — do minimamente invasivo à reconstrução complexa. É a linguagem padrão para a fratura por insuficiência sacral, que quase sempre é FFP II.",
      level: "IV",
      studyType: "Série retrospectiva com proposta de classificação (245 pacientes)",
      era: "classico",
      citation: {
        authors: "Rommens PM, Hofmann A",
        title:
          "Comprehensive classification of fragility fractures of the pelvic ring: Recommendations for surgical treatment",
        journal: "Injury",
        year: 2013,
        pmid: "23871193",
        doi: "10.1016/j.injury.2013.06.023",
      },
    },
    {
      id: "ev-imagem-rm",
      claim:
        "A radiografia frequentemente não mostra a fratura sacral; a RM é a modalidade mais sensível e a TC é o padrão para avaliar a morfologia.",
      takeaway:
        "Revisão contemporânea de FFP/fratura por insuficiência sacral: a radiografia convencional frequentemente deixa passar fraturas sacrais, a TC é o padrão-ouro para avaliar a morfologia e a RM oferece a maior sensibilidade (99%), essencial para detectar fraturas complexas e avaliar o edema ósseo. Documenta também o peso do problema — perda de independência em 64–89%, mortalidade de 13–27% — e que 71% dos pacientes não recebem prevenção secundária adequada da osteoporose.",
      level: "V",
      studyType: "Revisão narrativa",
      era: "atual",
      citation: {
        authors: "Gewiess J, Albers CE, Keel MJB, Frihagen F, Rommens PM, Bastian JD",
        title: "Chronic pelvic insufficiency fractures and their treatment",
        journal: "Archives of Orthopaedic and Trauma Surgery",
        year: 2024,
        pmid: "39708227",
        doi: "10.1007/s00402-024-05717-4",
      },
    },
    {
      id: "ev-conservador",
      claim:
        "O tratamento conservador remobiliza a grande maioria dos pacientes com fratura por fragilidade da pelve de baixa energia.",
      takeaway:
        "Quarenta e um pacientes (idade média 79,8 anos) com fraturas de baixa energia classificadas como FFP IIb/IIc e IIIc/IVb tratados conservadoramente: 32 recuperaram a mobilidade em 2 semanas e outros 7 em 6 semanas — apenas 2 não remobilizaram. Consolidação em 73,2%. Idade, IMC, desvio do ramo púbico maior que 5 mm, uso de opioides, corticoterapia, álcool e tabagismo não se associaram à recuperação; o único preditor independente de não mobilidade em 2 semanas foi o sexo masculino. Sustenta o conservador como conduta padrão e mostra que o desvio anterior isolado não muda o desfecho.",
      level: "IV",
      studyType: "Estudo retrospectivo de coorte",
      era: "atual",
      citation: {
        authors: "Bal B, Rudin D, Zdravkovic V, Jost B, Sachser-Zurmühle P",
        title: "Short-term mobility in low-energy pelvic ring fractures after conservative treatment",
        journal: "Injury",
        year: 2024,
        pmid: "39142220",
        doi: "10.1016/j.injury.2024.111770",
      },
    },
    {
      id: "ev-sacroplastia-adicional",
      claim:
        "Acrescentar sacroplastia à fixação com parafuso navegado não melhora dor, incapacidade nem tempo de internação.",
      takeaway:
        "Cinquenta e dois pacientes com fratura por insuficiência sacral não desviada e incapacitante, tratados com fixação por parafuso navegada (NSF) ou NSF + sacroplastia: redução da dor comparável (5,3 vs. 5,4 pontos na EVA), melhora do Oswestry semelhante (53,4 vs. 57,7) e internação equivalente (9,3 vs. 9,6 dias) — sem atingir diferença minimamente importante. Conclusão: a sacroplastia adicional não é recomendada quando já se faz fixação com parafuso guiado por imagem. Note-se o dado positivo comum aos dois grupos: a fixação percutânea produz alívio expressivo e remobilização.",
      level: "II",
      studyType: "Estudo prospectivo comparativo de não inferioridade (equivalence trial)",
      era: "atual",
      citation: {
        authors: "Balling H",
        title:
          "Additional Sacroplasty Does Not Improve Clinical Outcome in Minimally Invasive Navigation-Assisted Screw Fixation Procedures for Nondisplaced Insufficiency Fractures of the Sacrum",
        journal: "Spine",
        year: 2019,
        pmid: "30312272",
        doi: "10.1097/BRS.0000000000002899",
      },
    },
    {
      id: "ev-sacroplastia-tecnicas",
      claim:
        "As variantes técnicas de sacroplastia (balão e radiofrequência) produzem alívio da dor equivalente e sustentado.",
      takeaway:
        "Quarenta pacientes com 57 fraturas sacrais randomizados para sacroplastia com balão (BSP) ou por radiofrequência (RFS), guiadas por TC: EVA caiu de 8,6–8,8 para ~2,5 já no 2º dia pós-operatório e manteve-se estável em 6, 12 e 18 meses, sem diferença entre as técnicas (p = 0,86 a 1,0) e sem extravasamento em nenhuma delas. Confirma que a sacroplastia é uma opção minimamente invasiva eficaz e durável para a dor refratária, e que a escolha da variante técnica é secundária.",
      level: "II",
      studyType: "Ensaio clínico randomizado prospectivo",
      era: "atual",
      citation: {
        authors: "Andresen R, Radmer S, Andresen JR, Schober HC",
        title:
          "Comparison of the 18-month outcome after the treatment of osteoporotic insufficiency fractures by means of balloon sacroplasty (BSP) and radiofrequency sacroplasty (RFS) in comparison: a prospective randomised study",
        journal: "European Spine Journal",
        year: 2017,
        pmid: "28070681",
        doi: "10.1007/s00586-016-4935-0",
      },
    },
  ],

  pearls: [
    "Idoso com dor lombossacra e radiografia normal: a radiografia normal não exclui — peça RM. Este é o tópico inteiro em uma frase.",
    "A fratura por insuficiência sacral é quase sempre Denis I (alar), porque a asa concentra a carga e é o osso mais osteopênico do sacro — por isso o déficit neurológico é raro.",
    "Sinal de Honda (captação em H ou U) é patognomônico na cintilografia; na RM corresponde aos traços verticais bilaterais unidos pelo componente transverso em S2.",
    "Pense sempre no anel inteiro: mais de dois terços têm fratura associada dos ramos púbicos. Classifique como FFP de Rommens, não como Tile ou Young-Burgess.",
    "O inimigo é o decúbito, não o desvio: mobilização precoce com carga conforme a dor é o tratamento, e repouso no leito é iatrogenia.",
    "A pergunta da reavaliação em 2–3 semanas é funcional, não radiográfica: 'o paciente caminha?'.",
    "Antes de declarar falha do conservador, verifique se a analgesia foi realmente otimizada — analgesia insuficiente é a causa mais comum de 'falha'.",
    "Sacroplastia alivia dor; parafuso estabiliza. Escolha pelo objetivo: FFP II refratária pode ser sacroplastia; FFP III/IV precisa de fixação.",
    "Se já vai fixar com parafuso navegado, não adicione sacroplastia: não melhora dor, incapacidade nem tempo de internação.",
    "No sacro osteoporótico, o parafuso transsacral bicortical vence o iliossacral curto — a rosca não segura em osso que não existe.",
    "Toda fratura por insuficiência é um evento sentinela de osteoporose: investigar e tratar a doença de base é parte do tratamento, não um adendo do sumário de alta.",
    "Fratura aparentemente isolada dos ramos púbicos no idoso, com dor posterior persistente: procure a lesão sacral oculta na RM.",
  ],

  pitfalls: [
    "Rotular como 'lombalgia inespecífica do idoso' e dar alta com analgésico — o erro clássico, que produz semanas de atraso diagnóstico.",
    "Concluir que 'a radiografia está normal, então não há fratura'.",
    "Pedir apenas TC na fase muito precoce: pode haver só edema, sem traço visível — a RM é o exame de escolha.",
    "Interpretar edema sacral na RM como fratura sem considerar metástase, mieloma ou osteomielite.",
    "Prescrever repouso no leito ou restrição de carga — não protege a fratura e destrói a função.",
    "Usar Tile ou Young-Burgess para classificar: foram criadas para trauma de alta energia e não descrevem a morfologia da fragilidade.",
    "Tratar a fratura e esquecer a osteoporose — 71% desses pacientes não recebem prevenção secundária adequada, e a próxima fratura é previsível.",
    "Assumir que o tipo FFP é estático: a lesão progride, e dor persistente exige repetir a TC.",
    "Indicar sacroplastia em fratura transforaminal ou central — o cimento vai para o forame ou o canal.",
    "Usar cimento de baixa viscosidade ou injetar rápido — extravasamento venoso pré-sacral e risco de embolia.",
    "Operar sem TC do corredor de S1: no sacro dismórfico, é a via mais direta para lesar a raiz de L5 ou os vasos ilíacos.",
    "Insistir dois meses no conservador em paciente acamado — a janela para preservar a independência fecha antes disso.",
  ],

  figures: [
    {
      id: "fratura-insuficiencia-sacral:anatomia",
      kind: "diagram",
      caption:
        "Sacro em visão anterior — asas, forames S1–S4, articulações sacroilíacas, raízes de L5 e S1 e o corredor osteopênico da asa (alar void).",
      alt: "Esquema do sacro em visão anterior com ílios parciais, forames sacrais, raízes de L5 e S1 e a região osteopênica da asa destacada.",
    },
    {
      id: "fratura-insuficiencia-sacral:zonas-denis",
      variant: "I",
      kind: "diagram",
      caption: "Denis zona I — traço na asa, lateral aos forames: a localização típica da fratura por insuficiência.",
      alt: "Sacro em visão anterior com traço de fratura vertical na asa, lateral aos forames.",
    },
    {
      id: "fratura-insuficiencia-sacral:zonas-denis",
      variant: "II",
      kind: "diagram",
      caption: "Denis zona II — traço transforaminal, com risco para a raiz de S1.",
      alt: "Sacro em visão anterior com traço de fratura atravessando os forames sacrais.",
    },
    {
      id: "fratura-insuficiencia-sacral:zonas-denis",
      variant: "III",
      kind: "diagram",
      caption: "Denis zona III — traço medial aos forames, envolvendo o canal sacral e as raízes sacrais.",
      alt: "Sacro em visão anterior com traço de fratura na linha média sobre o canal sacral.",
    },
    {
      id: "fratura-insuficiencia-sacral:sinal-honda",
      variant: "H",
      kind: "diagram",
      caption:
        "Sinal de Honda em H — traços verticais bilaterais nas asas unidos por componente transverso em S2 (FFP IVb).",
      alt: "Sacro com dois traços verticais e um traço transverso formando a letra H, com realce do padrão de captação.",
    },
    {
      id: "fratura-insuficiencia-sacral:sinal-honda",
      variant: "U",
      kind: "diagram",
      caption: "Sinal de Honda em U — variante com componente transverso arqueado unindo os traços alares.",
      alt: "Sacro com dois traços verticais unidos por traço transverso arqueado formando a letra U.",
    },
    {
      id: "fratura-insuficiencia-sacral:imagem",
      variant: "rx",
      kind: "diagram",
      caption:
        "Radiografia AP — osteopenia e sobreposição de gases escondem o traço: a fratura está presente e não é vista.",
      alt: "Esquema de radiografia AP do sacro com sobreposição de gases intestinais e traço de fratura quase imperceptível.",
    },
    {
      id: "fratura-insuficiencia-sacral:imagem",
      variant: "tc",
      kind: "diagram",
      caption: "TC — traço lucente na asa com halo de esclerose; define morfologia, cominução e desvio.",
      alt: "Esquema de tomografia do sacro mostrando traço de fratura alar com esclerose adjacente.",
    },
    {
      id: "fratura-insuficiencia-sacral:imagem",
      variant: "rm",
      kind: "diagram",
      caption:
        "RM (STIR / T2 fat-sat) — edema medular ósseo em torno dos traços alares; exame de escolha, sensibilidade ~99%.",
      alt: "Esquema de ressonância magnética do sacro com edema ósseo hachurado em torno de traços de fratura bilaterais.",
    },
    {
      id: "fratura-insuficiencia-sacral:ffp-rommens",
      variant: "I",
      kind: "diagram",
      caption: "FFP I — lesão apenas do anel anterior (ramos púbicos); anel posterior íntegro. Estável.",
      alt: "Esquema do anel pélvico com fraturas dos ramos púbicos e sacro íntegro.",
    },
    {
      id: "fratura-insuficiencia-sacral:ffp-rommens",
      variant: "II",
      kind: "diagram",
      caption:
        "FFP II — lesão posterior não deslocada (compressão da asa do sacro) associada à lesão anterior. Padrão mais comum da insuficiência sacral.",
      alt: "Esquema do anel pélvico com fratura por compressão da asa do sacro e fraturas dos ramos púbicos.",
    },
    {
      id: "fratura-insuficiencia-sacral:ffp-rommens",
      variant: "III",
      kind: "diagram",
      caption: "FFP III — lesão posterior deslocada unilateral. Instável: indica redução e fixação.",
      alt: "Esquema do anel pélvico com fratura sacral unilateral deslocada e seta indicando desvio cranial.",
    },
    {
      id: "fratura-insuficiencia-sacral:ffp-rommens",
      variant: "IV",
      kind: "diagram",
      caption:
        "FFP IV — lesão posterior bilateral (fratura em H/U, dissociação espinopélvica). Exige fixação bilateral.",
      alt: "Esquema do anel pélvico com traços sacrais verticais bilaterais e componente transverso.",
    },
    {
      id: "fratura-insuficiencia-sacral:sacroplastia",
      variant: "eixo-curto",
      kind: "diagram",
      caption:
        "Sacroplastia por eixo curto — agulha transilíaca oblíqua até a asa, com cimento (PMMA) na zona de fratura; corte axial em S1.",
      alt: "Corte axial do sacro em S1 com agulha entrando pelo ílio até a asa e cimento preenchendo a zona de fratura.",
    },
    {
      id: "fratura-insuficiencia-sacral:sacroplastia",
      variant: "eixo-longo",
      kind: "diagram",
      caption:
        "Sacroplastia por eixo longo — agulha do ápice à base pelo eixo maior da asa, com preenchimento contínuo.",
      alt: "Corte axial do sacro em S1 com agulha orientada pelo eixo maior da asa e cimento na zona de fratura.",
    },
    {
      id: "fratura-insuficiencia-sacral:fixacao-percutanea",
      variant: "iliossacral",
      kind: "diagram",
      caption:
        "Parafuso iliossacral em S1 dentro do corredor ósseo seguro, com cimento peri-rosca (aumento por PMMA) no osso osteoporótico.",
      alt: "Sacro em visão AP com parafuso iliossacral atravessando a articulação sacroilíaca até o corpo de S1 e corredor ósseo demarcado.",
    },
    {
      id: "fratura-insuficiencia-sacral:fixacao-percutanea",
      variant: "transsacral",
      kind: "diagram",
      caption:
        "Barra / parafuso transsacral — ancoragem bicortical nos dois ílios, indicada na lesão posterior bilateral (FFP IV).",
      alt: "Sacro em visão AP com implante transsacral atravessando todo o sacro e ancorando nas corticais laterais dos dois ílios.",
    },
    {
      id: "fratura-insuficiencia-sacral:conduta-escalonada",
      kind: "diagram",
      caption:
        "Sequência de conduta — suspeitar, imagem, classificar, conservador, osteoporose, reavaliar em 2–3 semanas e só então intervir.",
      alt: "Fluxograma vertical com sete etapas da conduta na fratura por insuficiência sacral.",
    },
  ],

  meta: {
    lastReviewed: "2026-07-14",
    sources: [
      "Rockwood and Green's Fractures in Adults, 10a ed. (2024) — Sacral fractures / Fragility fractures of the pelvis",
      "Campbell's Operative Orthopaedics, 14a ed. (2021) — Fractures of the sacrum",
      "Hebert & Lech, Ortopedia e Traumatologia: Princípios e Prática, 6a ed. (2025)",
      "Rommens PM, Hofmann A, Injury 2013 (classificação FFP)",
      "Rommens PM et al., J Orthop Sci 2015 (vias clínicas para FFP; PMID 25323921 / doi:10.1007/s00776-014-0653-9)",
      "Gewiess J et al., Arch Orthop Trauma Surg 2024",
      "Bal B et al., Injury 2024",
      "Balling H, Spine 2019",
      "Andresen R et al., Eur Spine J 2017",
      "Andresen R et al., Z Orthop Unfall 2019 (sacroplastia por radiofrequência vs. cimento: EVA 8,7→2,4 e 8,1% de extravasamento assintomático no grupo cimento; PMID 30736085 / doi:10.1055/a-0815-5073)",
      "Sassara GM et al., J Clin Med 2024 (revisão sistemática; cirurgia após ~3 semanas de falha do conservador; PMID 38892887 / doi:10.3390/jcm13113176)",
      "ACR Appropriateness Criteria — Stress (Fatigue/Insufficiency) Fracture, Including Sacrum, J Am Coll Radiol 2017 (PMID 28473086 / doi:10.1016/j.jacr.2017.02.035)",
    ],
    attribution:
      "Evidência recuperada do PubMed. Ver DOIs/PMIDs citados na seção de Evidência.",
    figureReference:
      "Rockwood and Green's Fractures in Adults, 10a ed. (2024) / Campbell's Operative Orthopaedics 14a",
  },
});
