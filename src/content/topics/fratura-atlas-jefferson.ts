import { defineTopic } from "../../types/topic";

export const topic = defineTopic({
  id: "fratura-atlas-jefferson",
  slug: "fratura-atlas-jefferson",
  regionId: "coluna",
  bone: "Cervical",
  injury: "Fratura do atlas",
  title: "Fratura do atlas (Jefferson)",
  subtitle: "Fratura em explosão do anel de C1 por carga axial — a decisão gira em torno do ligamento transverso",
  laterality: null,
  status: "complete",

  overview:
    "A fratura do atlas resulta de carga axial aplicada ao vértice do crânio: os côndilos occipitais descem sobre as massas laterais de C1, que são cunhas com facetas inclinadas para baixo e para fora. A força as projeta lateralmente e o anel — sendo um círculo fechado — rompe em dois a quatro pontos. Jefferson descreveu em 1920 a variante clássica de quatro traços, mas a maioria das fraturas atuais tem dois ou três traços. Como o anel se abre ao romper, o canal alarga em vez de estreitar e o déficit neurológico é raro: o doente típico chega andando, com dor occipitocervical e rigidez. Essa benignidade aparente é a armadilha central do tópico. O que separa uma lesão que consolida com colar de uma que exige artrodese não é o osso, e sim o ligamento transverso do atlas — o freio que mantém o dente do áxis aplicado ao arco anterior de C1. Rompido o ligamento, a fratura consolida, mas o segmento C1–C2 permanece instável e sob risco de mielopatia tardia. A regra de Spence (desvio somado das massas laterais > 6,9 mm na incidência transoral) foi a tentativa histórica de inferir a integridade ligamentar a partir do osso; hoje sabemos que é um sinal indireto grosseiro, e a RM é o exame que efetivamente responde à pergunta. Some-se a isso a associação frequente com outra fratura cervical — sobretudo do odontoide — e fica claro por que a fratura de C1 nunca deve ser avaliada isoladamente.",

  keyFacts: [
    {
      label: "Mecanismo",
      value:
        "Carga axial pura no vértice do crânio: mergulho em água rasa, queda de altura, capotamento. No idoso, queda da própria altura com hiperextensão",
    },
    {
      label: "Epidemiologia",
      value: "1–2% das fraturas da coluna e ~7% das fraturas cervicais; incidência bimodal (jovem de alta energia e idoso de baixa energia)",
    },
    {
      label: "Associação",
      value: "Até 50% cursam com outra fratura cervical — a do odontoide é a mais comum. Sempre imagine todo o eixo C0–T1",
    },
    {
      label: "Neurologia",
      value: "Déficit é raro: o anel se expande ao romper. Regra dos terços de Steel — em C1 o canal aloja 1/3 dente, 1/3 medula e 1/3 espaço livre",
    },
    { label: "Exame de eleição", value: "TC de todo o eixo cervical define o padrão do anel; RM (STIR/T2) define o ligamento transverso" },
    {
      label: "Regra de Spence",
      value: "Desvio somado das massas laterais > 6,9 mm na transoral sugere ruptura do ligamento transverso — sinal indireto, não substitui a RM",
    },
    { label: "Chave da decisão", value: "Dickman I (intrassubstancial) = instável, cirurgia. Dickman II (avulsão óssea) = tentativa de órtese rígida" },
    { label: "Tratamento típico", value: "Estável → colar rígido ou halo por 8–12 semanas. Instável → artrodese C1–C2 posterior (Harms–Goel)" },
  ],

  anatomy: {
    text:
      "O atlas não tem corpo nem processo espinhoso: é um anel osteoligamentar que funciona como arruela entre o crânio e o áxis. Duas massas laterais volumosas concentram toda a carga axial e são unidas por um arco anterior curto (com o tubérculo anterior) e um arco posterior longo e delgado (com o tubérculo posterior). Os arcos são as zonas frágeis; o ponto mais fino do arco posterior fica no sulco da artéria vertebral, logo atrás da massa lateral, o que explica por que ali o traço é tão frequente. Cada massa lateral tem uma faceta superior côncava, que recebe o côndilo occipital, e uma faceta inferior quase plana, que se apoia no processo articular superior do áxis. Ambas as superfícies inclinam-se para baixo e para fora: é essa geometria em cunha que converte uma força vertical em vetor de dispersão lateral. A articulação atlantoccipital dá flexoextensão (o 'sim'); a atlantoaxial dá cerca de 50% de toda a rotação cervical (o 'não'). Não há disco entre C1 e C2, de modo que a estabilidade é inteiramente ligamentar. O ligamento transverso do atlas é a trave desse sistema: uma faixa espessa que cruza posteriormente ao dente do áxis e se insere nos tubérculos da face medial de cada massa lateral, mantendo o intervalo atlantodental ≤ 3 mm no adulto. É o estabilizador primário — os ligamentos alares e a membrana tectória são secundários e insuficientes sozinhos. A artéria vertebral perfura os forames transversários de C1, contorna a massa lateral e corre no sulco sobre a face superior do arco posterior antes de entrar no crânio; sua proximidade condiciona toda a dissecção posterior. A raiz de C2 (nervo de Arnold) e um plexo venoso exuberante cruzam a articulação C1–C2 exatamente sobre o ponto de entrada do parafuso de massa lateral.",
    figureIds: ["fratura-atlas-jefferson:anatomia", "fratura-atlas-jefferson:mecanismo", "fratura-atlas-jefferson:iad-perfil"],
  },

  classification: [
    {
      id: "gehweiler",
      name: "Gehweiler (modificada)",
      basis: "Localização anatômica dos traços no anel de C1 na TC",
      note: "É a classificação descritiva mais usada na Europa e a que melhor dialoga com a decisão terapêutica. O tipo III é a fratura de Jefferson propriamente dita e subdivide-se conforme o ligamento transverso: IIIa (íntegro, estável) e IIIb (roto, instável). Estudos radiológicos recentes mostram que ela falha em descrever a topografia exata em parte dos casos e que os traços com lesão ligamentar concentram-se nos tipos III e IV.",
      types: [
        {
          code: "I",
          label: "Arco anterior isolado",
          description:
            "Traço único no arco anterior, incluindo a avulsão do tubérculo anterior pelo músculo longo do pescoço em hiperextensão. Anel funcionalmente contínuo — estável. Colar por 6–8 semanas.",
          figureId: "fratura-atlas-jefferson:gehweiler",
          figureVariant: "I",
        },
        {
          code: "II",
          label: "Arco posterior isolado",
          description:
            "Traço bilateral no sulco da artéria vertebral por hiperextensão, com o arco posterior comprimido entre o occipital e o áxis. É a fratura de C1 mais comum e a mais benigna — estável, colar cervical.",
          figureId: "fratura-atlas-jefferson:gehweiler",
          figureVariant: "II",
        },
        {
          code: "III",
          label: "Arcos anterior e posterior (Jefferson)",
          description:
            "Fratura em explosão verdadeira, com 2 a 4 traços e afastamento das massas laterais. IIIa: ligamento transverso íntegro → órtese. IIIb: ligamento roto → instabilidade atlantoaxial, indicação de artrodese. A RM é obrigatória para separar as duas.",
          figureId: "fratura-atlas-jefferson:gehweiler",
          figureVariant: "III",
        },
        {
          code: "IV",
          label: "Massa lateral",
          description:
            "Traço através da massa lateral, com impacção ou cominuição. Risco de colapso progressivo, torcicolo e artrose C1–C2 dolorosa. Vigiar com TC seriada: perda de altura e desvio evolutivos indicam artrodese.",
          figureId: "fratura-atlas-jefferson:gehweiler",
          figureVariant: "IV",
        },
        {
          code: "V",
          label: "Processo transverso",
          description:
            "Fratura isolada do processo transverso. Estável do ponto de vista mecânico, mas o traço atravessa o forame transversário: pesquisar lesão da artéria vertebral com angio-TC.",
          figureId: "fratura-atlas-jefferson:gehweiler",
          figureVariant: "V",
        },
      ],
    },
    {
      id: "dickman",
      name: "Dickman — lesão do ligamento transverso",
      basis: "Aspecto do ligamento transverso na RM: falência dentro da substância × arrancamento da sua inserção óssea",
      note: "É a classificação que efetivamente decide o tratamento, porque separa o que cicatriza do que não cicatriza. Ligamento é tecido colagenoso mal vascularizado e não consolida sob imobilização externa; osso consolida. Série original de 39 lesões (Dickman, Greene e Sonntag, 1996).",
      types: [
        {
          code: "I",
          label: "Ruptura intrassubstancial",
          description:
            "Falência no corpo do ligamento (IA, na porção média) ou descolamento periosteal da sua inserção (IB). Não consolida com órtese: é indicação de fixação interna precoce — artrodese C1–C2.",
          figureId: "fratura-atlas-jefferson:dickman",
          figureVariant: "I",
        },
        {
          code: "II",
          label: "Avulsão óssea do tubérculo",
          description:
            "O ligamento está íntegro, mas arranca um fragmento do tubérculo de inserção na massa lateral (IIB) ou acompanha uma fratura cominutiva da massa lateral (IIA). O atlas fica fisiologicamente incompetente, porém há osso para consolidar: tentar órtese rígida — cerca de 74% de sucesso —, reservando a artrodese para a não-união com instabilidade persistente após 3–4 meses.",
          figureId: "fratura-atlas-jefferson:dickman",
          figureVariant: "II",
        },
      ],
    },
    {
      id: "landells",
      name: "Landells & Van Peteghem",
      basis: "Número e localização dos traços no anel",
      note: "Classificação clássica anglo-saxônica, mais simples que a de Gehweiler e ainda muito citada em prova. Não incorpora o estado do ligamento transverso, que precisa ser avaliado à parte.",
      types: [
        {
          code: "I",
          label: "Arco isolado",
          description: "Fratura de apenas um arco (anterior ou posterior), sem descontinuidade funcional do anel. Estável.",
        },
        {
          code: "II",
          label: "Explosão",
          description: "Traços nos arcos anterior e posterior — a fratura de Jefferson. Estabilidade depende do ligamento transverso.",
        },
        {
          code: "III",
          label: "Massa lateral",
          description: "Traço unilateral que atravessa a massa lateral, isolando-a entre os dois arcos. Risco de colapso assimétrico.",
        },
      ],
    },
    {
      id: "ao-spine-uc",
      name: "AO Spine Upper Cervical (segmento II — C1)",
      basis: "Hierarquia de gravidade: osso isolado → banda de tensão ligamentar → translação",
      note: "Sistema mais recente, que organiza toda a junção craniocervical em três segmentos (I: occipitoatlantal; II: atlas e C1–C2; III: áxis). Vantagem: linguagem comum e integração com a lesão ligamentar. Limitação demonstrada em revisão radiológica: é ampla demais para localizar o traço, e há doentes classificados como tipo B sem translação que ainda assim precisam de artrodese.",
      types: [
        {
          code: "A",
          label: "Lesão óssea isolada",
          description: "Fratura do anel sem lesão da banda de tensão ligamentar nem translação. Estável — tratamento em órtese.",
        },
        {
          code: "B",
          label: "Lesão da banda de tensão",
          description: "Fratura com ruptura do ligamento transverso (equivalente ao Gehweiler IIIb). Instável — indicação cirúrgica.",
        },
        {
          code: "C",
          label: "Translação / luxação",
          description: "Perda da relação articular com translação ou luxação atlantoaxial. Lesão mais grave, com risco neurológico — estabilização.",
        },
      ],
    },
  ],

  indications: {
    operative: [
      "Lesão do ligamento transverso tipo Dickman I (intrassubstancial) na RM — não consolida com imobilização externa",
      "Instabilidade atlantoaxial demonstrada: IAD > 5 mm no adulto ou translação em flexoextensão dinâmica após consolidação óssea",
      "Fratura de Gehweiler IIIb / AO Spine tipo B ou C",
      "Desvio somado das massas laterais claramente elevado (> 7 mm) associado a lesão ligamentar confirmada na RM",
      "Perda de redução ou progressão do desvio no controlo imagiológico durante o tratamento conservador (falência da órtese)",
      "Cominuição ou colapso progressivo da massa lateral (Gehweiler IV) com torcicolo fixo e dor incapacitante",
      "Não-união do tipo Dickman II com instabilidade persistente após 3–4 meses de órtese rígida",
      "Déficit neurológico atribuível à lesão de C1 (raro) ou compromisso do espaço disponível para a medula",
      "Fratura associada do odontoide instável ou lesão occipitoatlantal — a conduta passa a ser ditada pela lesão combinada",
      "Falência prevista da órtese: idoso com intolerância ao halo, politraumatizado, doente não colaborante",
    ],
    nonOperative: [
      "Gehweiler I e II (arco isolado): colar cervical rígido por 6–8 semanas — a esmagadora maioria dos casos",
      "Gehweiler IIIa (explosão com ligamento transverso íntegro na RM): colar rígido ou halo por 8–12 semanas",
      "Lesão do ligamento tipo Dickman II (avulsão óssea) sem instabilidade: órtese rígida com vigilância imagiológica estreita",
      "Gehweiler IV sem colapso e sem desvio significativo: órtese e TC seriada",
      "Gehweiler V (processo transverso): colar de conforto após excluir lesão da artéria vertebral com angio-TC",
      "Idoso frágil com fratura combinada C1–C2 e alto risco cirúrgico: colar, aceitando a não-união fibrosa, que costuma ser bem tolerada",
    ],
    decisionNotes:
      "A pergunta não é 'quanto o osso desviou?', mas 'o ligamento transverso está íntegro?'. Historicamente respondia-se à segunda com a primeira, através da regra de Spence: soma-se o transbordamento das massas laterais de C1 sobre as bordas de C2 na incidência transoral, e um total > 6,9 mm sugeriria ruptura ligamentar. O conceito é válido, mas o limiar não resiste ao escrutínio moderno. Em ensaio biomecânico com cadáveres, o ligamento falhou com apenas 3,2 mm de desvio médio — muito antes dos 6,9 mm —, e um estudo com observadores cegados não encontrou qualquer correlação entre as medidas de TC e a integridade ligamentar, entre outras razões porque a imagem estática não capta o momento de máximo desvio, que ocorre no instante do trauma e recua com o retorno elástico. Na prática: um Spence positivo praticamente confirma a lesão, mas um Spence negativo não a exclui — é um teste de baixa sensibilidade. Some-se que a medida original nasceu em radiografia, sujeita a magnificação e a erro de posicionamento. Logo, a regra de Spence serve como gatilho para investigar, nunca como decisão. Quem decide é a RM em STIR/T2, que mostra o ligamento diretamente e permite classificá-lo segundo Dickman. E aqui a lógica é simples e biológica: o tipo I é lesão de ligamento puro, tecido que não cicatriza sob imobilização externa — opere. O tipo II é arrancamento ósseo, e osso consolida — imobilize e vigie, sabendo que cerca de um quarto falha e precisará de artrodese diferida. Coorte com seguimento mínimo de dois anos confirmou essa hierarquia: a classificação de Dickman previu a estabilidade final, e a regra de Spence não. Duas ressalvas finais. Primeira: nunca trate a fratura de C1 como lesão isolada — metade dos doentes tem outra fratura cervical, e a fratura do odontoide associada frequentemente dita sozinha a conduta. Segunda: no idoso com fratura combinada C1–C2, ponderar que a cirurgia reduz a pseudartrose óssea, mas a não-união fibrosa sem cirurgia costuma ser assintomática e a mortalidade de um ano nesse grupo é alta — trate o doente, não a imagem.",
  },

  approaches: [
    {
      id: "ortese-externa",
      name: "Contenção externa — colar rígido ou halo-colete",
      indication:
        "Fraturas estáveis: Gehweiler I, II, IIIa e lesão de Dickman II. O colar rígido (tipo Filadélfia/Miami-J) basta na maioria; o halo-colete reserva-se ao anel muito desviado, ao doente pouco colaborante ou à necessidade de controlo rotacional rigoroso.",
      interval:
        "Método não cirúrgico. A contenção é occipito-cervico-torácica: o colar apoia-se em mento e occipital contra esterno e cintura escapular; o halo transfere a carga por 4 pinos cranianos (2 anterolaterais, evitando o seio frontal, o nervo supraorbitário e o supratroclear; 2 posterolaterais) até um colete torácico. A tração leve pelo halo pode auxiliar a redução do anel pelo efeito de ligamentotaxia da cápsula e do ligamento transverso íntegro.",
      atRisk: [
        "Nervos supraorbitário e supratroclear e seio frontal — má colocação do pino anterior",
        "Pele e mento — úlcera de pressão sob o colar, sobretudo no idoso",
        "Perfuração da tábua interna e infeção do trajeto do pino no halo",
        "Via aérea e deglutição — disfagia e broncoaspiração no idoso imobilizado",
        "Descondicionamento, pneumonia e delirium no idoso sob halo",
      ],
      figureId: "fratura-atlas-jefferson:iad-perfil",
    },
    {
      id: "via-posterior",
      name: "Via posterior da junção craniocervical (C0–C3)",
      indication: "Acesso comum a todas as opções de fixação: osteossíntese de C1, artrodese C1–C2 e montagem occipitocervical.",
      interval:
        "Incisão mediana do inion a C3–C4. Segue-se a rafe mediana avascular entre os músculos semiespinhais da cabeça direito e esquerdo — permanecer nela reduz sangramento e denervação. Descolamento subperiosteal do arco posterior de C1 e das lâminas de C2. Não dissecar mais de 1,5 cm da linha média sobre o arco posterior de C1 (8 mm na criança): é onde a artéria vertebral entra no sulco. A exposição da massa lateral de C1 exige rebater caudalmente a raiz de C2 e controlar o plexo venoso periarticular.",
      interval_note: undefined as never,
      atRisk: [
        "Artéria vertebral no sulco do arco posterior de C1 e no trajeto de C2 (pedículo/pars) — a lesão é a complicação temida",
        "Plexo venoso periarticular C1–C2 — sangramento abundante que obscurece o ponto de entrada",
        "Raiz de C2 (nervo de Arnold) — neuralgia occipital se tracionada ou seccionada",
        "Dura-máter e membrana atlantoccipital — fístula liquórica",
        "Medula cervical alta — instrumentação em anel instável sem controlo",
      ],
      figureId: "fratura-atlas-jefferson:fixacao",
    },
    {
      id: "artrodese-c1c2",
      name: "Artrodese C1–C2 posterior (Harms–Goel)",
      indication:
        "Padrão para a instabilidade atlantoaxial por lesão do ligamento transverso Dickman I (Gehweiler IIIb / AO tipo B), e para a não-união instável do tipo II. Exige massas laterais de C1 íntegras o bastante para ancorar parafuso.",
      interval:
        "Via posterior mediana. Parafusos poliaxiais na massa lateral de C1 (entrada na junção da massa lateral com o arco posterior, trajetória 10–15° medial e paralela ao arco anterior no perfil) e em C2 por pars, pedículo ou via translaminar (Wright) quando a artéria vertebral for de trajeto alto. Hastes conectam C1 a C2 e permitem redução por manobra sobre os parafusos; artrodese com enxerto esponjoso decorticado entre o arco posterior de C1 e a lâmina de C2.",
      atRisk: [
        "Artéria vertebral — avaliar trajeto alto/dominante na TC pré-operatória e ter a via translaminar como plano B",
        "Raiz de C2 e plexo venoso na exposição da massa lateral de C1",
        "Perda definitiva de ~50% da rotação cervical",
        "Sobrecarga dos níveis adjacentes e artrose occipitoatlantal",
      ],
      figureId: "fratura-atlas-jefferson:fixacao",
    },
    {
      id: "osteossintese-c1",
      name: "Osteossíntese isolada de C1 (poupadora de movimento)",
      indication:
        "Alternativa emergente à artrodese em anel redutível com massas laterais íntegras: reduz e fixa o anel de C1 sem incluir C1–C2, preservando a rotação. Evidência ainda de séries pequenas — reservar a doentes selecionados e cirurgiões experientes.",
      interval:
        "Via posterior mediana com exposição do arco posterior e das massas laterais de C1. Parafusos bilaterais de massa lateral de C1 unidos por haste transversa; a compressão sobre a haste reduz o transbordamento das massas laterais e restaura o anel. Não se instrumenta C2.",
      atRisk: [
        "Artéria vertebral e plexo venoso — mesmos riscos da exposição da massa lateral de C1",
        "Perda de redução se as massas laterais estiverem cominuídas",
        "Instabilidade C1–C2 residual não tratada, se a lesão ligamentar for subestimada",
      ],
      figureId: "fratura-atlas-jefferson:fixacao",
    },
    {
      id: "occipitocervical",
      name: "Artrodese occipitocervical (C0–C2/C3)",
      indication:
        "Cominuição das massas laterais que impede a ancoragem de parafuso em C1; lesão associada dos côndilos occipitais ou instabilidade occipitoatlantal; resgate de falência da montagem C1–C2.",
      interval:
        "Via posterior estendida ao inion. Placa occipital fixada na linha média (osso mais espesso, junto à protuberância occipital externa; atenção ao seio venoso transverso/confluência), conectada por hastes a parafusos de C2 (pars/pedículo) e, se necessário, de massa lateral de C3. Contornar as hastes no alinhamento occipitocervical correto antes de apertar.",
      atRisk: [
        "Seios venosos occipitais (transverso e confluência dos seios) — sangramento maciço",
        "Fístula liquórica por parafuso occipital demasiado longo",
        "Disfagia e disfonia por fixação em flexão occipitocervical excessiva",
        "Rigidez importante — perda de flexoextensão do 'sim' e da rotação do 'não'",
      ],
      figureId: "fratura-atlas-jefferson:fixacao",
    },
  ],

  technique: [
    {
      n: 1,
      title: "Atendimento inicial e imobilização",
      detail:
        "Colar cervical rígido e precauções de eixo desde o pré-hospitalar. Exame neurológico ASIA completo e documentado, incluindo pares cranianos baixos e função do nervo de Arnold. Pesquisar dor occipitocervical, torcicolo, disfagia e hematoma retrofaríngeo. Suspeitar sempre em mergulho em água rasa, capotamento, queda de altura — e, no idoso, em queda da própria altura com escoriação frontal.",
      figureId: "fratura-atlas-jefferson:mecanismo",
      tips: [
        "Escoriação no vértice ou na fronte é a assinatura da carga axial: procure a fratura de C1.",
        "Torcicolo doloroso pós-traumático no adulto é fratura de C1 ou instabilidade C1–C2 até prova em contrário.",
        "No idoso, o mecanismo é hiperextensão de baixa energia — os critérios NEXUS/Canadá já obrigam a imagem por si só pela idade.",
      ],
      pitfalls: [
        "Descartar lesão cervical porque o doente chega andando e sem déficit: a fratura de Jefferson alarga o canal, ela não paralisa.",
        "Confiar em radiografia simples: a transoral é difícil de obter e a sensibilidade é baixa.",
      ],
    },
    {
      n: 2,
      title: "TC de todo o eixo cervical — definir o padrão do anel",
      detail:
        "TC com cortes finos e reconstruções multiplanares de C0 a T1, não apenas de C1. Contar e localizar os traços (arco anterior, arco posterior, massa lateral, processo transverso) e classificar por Gehweiler/Landells. Medir o transbordamento das massas laterais sobre C2 no plano coronal e a altura da massa lateral. Se o traço atravessar o forame transversário, acrescentar angio-TC.",
      figureId: "fratura-atlas-jefferson:gehweiler",
      figureVariant: "III",
      tips: [
        "Reconstrução coronal é a que reproduz a transoral, com melhor fiabilidade e sem magnificação.",
        "Um anel só rompe em mais de um ponto: se a TC mostra um único traço, procure o segundo com atenção antes de chamá-la de fratura isolada.",
        "Avalie C2 com o mesmo rigor de C1 — até metade tem fratura associada, geralmente do odontoide.",
      ],
      pitfalls: [
        "Confundir a persistência de sincondrose ou a não-união congênita do arco posterior com traço agudo: bordas escleróticas e corticalizadas denunciam a variante anatômica.",
        "Interpretar a TC como se mostrasse o desvio máximo: ela mostra o desvio residual após o retorno elástico do anel.",
      ],
    },
    {
      n: 3,
      title: "Aplicar a regra de Spence — e conhecer o seu lugar",
      detail:
        "Somar o transbordamento das massas laterais de C1 além das bordas laterais de C2 (a + b). Total > 6,9 mm levanta forte suspeita de ruptura do ligamento transverso. Tratar o achado como gatilho para RM, não como veredicto: o limiar clássico é alto (a falência biomecânica ocorre por volta de 3–4 mm) e a ausência de transbordamento não exclui lesão ligamentar.",
      figureId: "fratura-atlas-jefferson:regra-spence",
      tips: [
        "Spence positivo praticamente confirma a lesão; Spence negativo não exclui nada — é teste específico, não sensível.",
        "Corrija mentalmente a magnificação se a medida vier de radiografia: prefira a reconstrução coronal da TC.",
      ],
      pitfalls: [
        "Indicar artrodese apenas com base em milímetros de transbordamento, sem RM.",
        "Liberar o doente para colar simples porque a soma deu 5 mm, sem investigar o ligamento.",
      ],
    },
    {
      n: 4,
      title: "RM do ligamento transverso — o exame que decide",
      detail:
        "RM com sequências STIR e T2 em cortes finos axiais e coronais na junção craniocervical. Definir se o ligamento está íntegro, roto na substância (Dickman I) ou avulsionado do tubérculo de inserção (Dickman II). Avaliar de passagem os ligamentos alares, a membrana tectória, o sinal medular e a permeabilidade das artérias vertebrais.",
      figureId: "fratura-atlas-jefferson:dickman",
      tips: [
        "Solicite a RM em todo Gehweiler III/IV e sempre que houver qualquer dúvida — o custo de perder um Dickman I é mielopatia tardia.",
        "O coronal fino é o corte que melhor mostra o ligamento transverso de tubérculo a tubérculo.",
        "Fragmento ósseo minúsculo junto ao tubérculo na TC é um Dickman II até a RM dizer o contrário.",
      ],
      pitfalls: [
        "Dispensar a RM porque a TC 'está boa': a TC não vê ligamento, e as medidas ósseas não se correlacionam com a integridade ligamentar.",
        "Confundir edema periarticular difuso com ruptura — o achado tem de estar no ligamento.",
      ],
    },
    {
      n: 5,
      title: "Decidir: estável ou instável",
      detail:
        "Estável = Gehweiler I, II, IIIa e Dickman II sem instabilidade → contenção externa. Instável = Dickman I, IAD > 5 mm, translação, AO tipo B/C → cirurgia. Reavaliar a decisão à luz das lesões associadas: uma fratura instável do odontoide muda a montagem e, no idoso frágil, a comorbidade pode inverter a indicação.",
      figureId: "fratura-atlas-jefferson:iad-perfil",
      figureVariant: "instavel",
      tips: [
        "Escreva no prontuário qual foi o critério de instabilidade usado: isso disciplina a decisão e protege o doente.",
        "Radiografia dinâmica em flexoextensão só faz sentido depois da consolidação óssea e nunca na fase aguda.",
      ],
      pitfalls: [
        "Tratar a fratura de C1 isoladamente quando existe fratura do odontoide associada — a conduta passa a ser da lesão combinada.",
        "Indicar halo a um idoso com múltiplas comorbidades sem ponderar disfagia, pneumonia e delirium.",
      ],
    },
    {
      n: 6,
      title: "Conduta conservadora: colar rígido ou halo",
      detail:
        "Colar rígido por 6–8 semanas nas fraturas de arco isolado; 8–12 semanas no Gehweiler IIIa e no Dickman II. Halo-colete quando for necessário controlo rotacional rigoroso ou o desvio for importante. TC de controlo às 6 e 12 semanas para confirmar consolidação e ausência de progressão do desvio; radiografia dinâmica ao final, já consolidado, para excluir instabilidade residual.",
      figureId: "fratura-atlas-jefferson:regra-spence",
      figureVariant: "normal",
      tips: [
        "No Dickman II, avise o doente desde o início que cerca de um quarto falha e pode precisar de artrodese diferida — isso transforma uma 'complicação' em plano previsto.",
        "Cuide da pele sob o colar diariamente no idoso: a úlcera de mento é frequente e evitável.",
        "Fratura inicialmente rotulada como estável pode migrar de AO tipo A para B no controlo — a imagem seriada é parte do tratamento, não um luxo.",
      ],
      pitfalls: [
        "Retirar a órtese só pela clínica, sem imagem: a dor melhora antes de a instabilidade se resolver.",
        "Fazer dinâmica precoce em fratura não consolidada.",
      ],
    },
    {
      n: 7,
      title: "Preparo cirúrgico e posicionamento",
      detail:
        "Estudar a artéria vertebral na TC/angio-TC: trajeto alto ou dominante contraindica o parafuso de pars/pedículo em C2 e antecipa a opção translaminar. Intubação com fibroscópio e colar mantido, ou com estabilização manual em linha. Decúbito ventral em coxim, cabeça no halo ou no fixador de Mayfield, pescoço em posição neutra. Reduzir e conferir o alinhamento com fluoroscopia em perfil e transoral ANTES da incisão. Neuromonitorização recomendada.",
      figureId: "fratura-atlas-jefferson:fixacao",
      tips: [
        "A redução obtém-se com tração leve pelo halo e ligamentotaxia; force a redução antes de instrumentar, não depois.",
        "Deixe o pescoço em ligeira retificação e nunca em flexão — a fixação em flexão gera disfagia definitiva.",
        "Confira a fluoroscopia transoral no início: se não conseguir imagem útil, planeje navegação ou TC intraoperatória.",
      ],
      pitfalls: [
        "Instrumentar sem estudar a artéria vertebral — é o erro que produz a complicação catastrófica deste tópico.",
        "Hiperextender o pescoço no posicionamento de um anel instável.",
      ],
    },
    {
      n: 8,
      title: "Exposição e parafuso de massa lateral de C1",
      detail:
        "Incisão mediana, rafe avascular, descolamento subperiosteal de C1 e C2 sem ultrapassar 1,5 cm da linha média sobre o arco posterior de C1. Rebater caudalmente a raiz de C2 e coagular o plexo venoso periarticular. Ponto de entrada na junção da massa lateral com o arco posterior; broca com trajetória 10–15° medial e, no perfil, paralela ao arco anterior de C1. Bicortical com cuidado, tateando com sonda em todo o trajeto.",
      figureId: "fratura-atlas-jefferson:fixacao",
      figureVariant: "c1c2",
      tips: [
        "Hemostasia do plexo venoso com agente hemostático e paciência: sem campo seco não há ponto de entrada fiável.",
        "Cera óssea no ponto de entrada facilita o controlo do sangramento esponjoso.",
        "Parafuso com colo liso (parcialmente rosqueado) na massa lateral de C1 reduz a irritação da raiz de C2.",
      ],
      pitfalls: [
        "Dissecar lateralmente demais sobre o arco posterior de C1 e lesar a artéria vertebral.",
        "Seccionar a raiz de C2 sem necessidade — resulta em neuralgia occipital e área de anestesia incômoda.",
        "Trajetória lateral em vez de medial: penetra o forame transversário.",
      ],
    },
    {
      n: 9,
      title: "Ancoragem em C2 e montagem",
      detail:
        "Parafuso de pars ou de pedículo de C2 conforme a anatomia; se a artéria vertebral tiver trajeto alto, usar a via translaminar de Wright (parafusos cruzados nas lâminas). Contornar as hastes, reduzir por manobra sobre os parafusos, conferir na fluoroscopia e apertar. Decorticar o arco posterior de C1 e a lâmina de C2 e aplicar enxerto esponjoso — a fixação segura a redução, mas é o enxerto que produz a artrodese.",
      figureId: "fratura-atlas-jefferson:fixacao",
      figureVariant: "c1c2",
      tips: [
        "Tenha sempre a via translaminar no plano B: ela dispensa a proximidade da artéria vertebral.",
        "Se ocorrer lesão da artéria vertebral de um lado, tampone, complete a fixação sem instrumentar o lado contralateral e faça angiografia — não repita o gesto do outro lado.",
        "Enxerto autólogo do ilíaco ou da própria lâmina; a decorticação cuidadosa vale mais que o volume do enxerto.",
      ],
      pitfalls: [
        "Confiar em morfometria 'média' de C2: a variação anatômica é a regra, e é ela que gera a lesão vascular.",
        "Apertar as hastes com o pescoço mal alinhado — o alinhamento congela na posição em que se aperta.",
      ],
    },
    {
      n: 10,
      title: "Alternativas: osteossíntese isolada de C1 ou montagem occipitocervical",
      detail:
        "Em anel redutível com massas laterais íntegras, considerar a osteossíntese isolada de C1 (parafusos bilaterais de massa lateral unidos por haste transversa), que reduz o transbordamento e preserva a rotação atlantoaxial — evidência de séries pequenas. No extremo oposto, cominuição das massas laterais, lesão dos côndilos occipitais ou instabilidade occipitoatlantal impõem a artrodese occipitocervical, aceitando rigidez importante.",
      figureId: "fratura-atlas-jefferson:fixacao",
      figureVariant: "orif",
      tips: [
        "A osteossíntese de C1 é atraente no jovem, em que 50% da rotação cervical é um preço alto — mas confirme a redutibilidade e a qualidade das massas laterais.",
        "Estenda a montagem ao occipital apenas quando C1 não puder ancorar parafuso: cada nível a mais custa mobilidade e função.",
      ],
      pitfalls: [
        "Escolher a osteossíntese isolada em anel cominuído ou irredutível — perde-se a redução e ganha-se uma reoperação.",
        "Indicar occipitocervical por comodidade técnica quando uma montagem C1–C2 era viável.",
      ],
    },
    {
      n: 11,
      title: "Fechamento e verificação",
      detail:
        "Conferir a redução e a posição de todos os parafusos em fluoroscopia biplanar antes do fechamento; TC pós-operatória para documentar o trajeto dos parafusos. Fechamento por planos com aproximação cuidadosa da musculatura à rafe e da fáscia, dreno se houver sangramento venoso significativo. Documentar o exame neurológico ao despertar.",
      figureId: "fratura-atlas-jefferson:fixacao",
      tips: [
        "TC pós-operatória de rotina: é o único modo fiável de saber onde o parafuso de C2 realmente ficou.",
        "Parafuso mal posicionado e assintomático junto à artéria vertebral merece discussão com a neurorradiologia antes de qualquer revisão.",
      ],
      pitfalls: [
        "Fechar sem imagem final e descobrir a malposição na consulta.",
        "Deixar o doente extubado sem exame neurológico documentado.",
      ],
    },
  ],

  postop: {
    immobilization:
      "Conservador: colar cervical rígido por 6–8 semanas nas fraturas de arco isolado (Gehweiler I/II) e 8–12 semanas no Gehweiler IIIa e no Dickman II; halo-colete por 10–12 semanas quando for necessário controlo rotacional rigoroso ou o anel estiver muito desviado. Pós-artrodese C1–C2 ou occipitocervical: colar rígido de conforto por 6–8 semanas — a montagem com parafusos e hastes é estável e dispensa halo. Após osteossíntese isolada de C1, colar rígido por 8 semanas até a consolidação do anel.",
    weightBearing:
      "Não há carga axial a graduar como num membro: o que se gradua é a mobilização e a retirada da órtese. Deambulação livre desde o primeiro dia, com a órtese permanente (inclusive para dormir e no banho, com troca de forro). Proibidos, até a liberação: rotação e flexoextensão ativas do pescoço, dirigir, esporte, levantar peso acima de 2–3 kg e qualquer manobra de carga sobre a cabeça. A órtese só sai quando a TC mostrar consolidação e, no conservador, após radiografia dinâmica em flexoextensão excluir instabilidade residual.",
    rehab: [
      {
        window: "0–2 semanas",
        weightBearing: "Órtese permanente; deambulação livre",
        focus:
          "Controlo da dor, higiene do trajeto dos pinos do halo ou da pele sob o colar, prevenção de úlcera de mento e occipital. Avaliação da deglutição no idoso e profilaxia de broncoaspiração. Exercícios respiratórios e mobilização precoce fora do leito para evitar pneumonia, delirium e descondicionamento.",
      },
      {
        window: "2–6 semanas",
        weightBearing: "Órtese permanente; sem movimento cervical ativo",
        focus:
          "Isometria cervical suave dentro da órtese, mobilidade de ombros, cotovelos e cintura escapular, marcha e condicionamento aeróbico leve. Manter escápulas e ombros livres é o que evita a rigidez secundária. TC de controlo às 6 semanas para verificar consolidação e ausência de progressão do desvio.",
      },
      {
        window: "6–12 semanas",
        weightBearing: "Retirada progressiva da órtese conforme a imagem",
        focus:
          "Confirmada a consolidação na TC, desmame gradual do colar (períodos crescentes sem órtese, começando em ambiente domiciliar e sentado). Início da mobilidade cervical ativa assistida em amplitude indolor: flexoextensão primeiro, rotação por último. Fortalecimento isométrico progressivo dos flexores profundos e da musculatura paravertebral.",
      },
      {
        window: "3–6 meses",
        weightBearing: "Sem órtese",
        focus:
          "Ganho de amplitude e força, correção postural e reeducação proprioceptiva cervical. Após artrodese C1–C2, ensinar estratégias de compensação para a perda de ~50% da rotação (rotação do tronco ao dirigir, espelhos adicionais no veículo). Retorno ao trabalho leve e à condução após liberação clínica e imagiológica.",
      },
      {
        window: "6–12 meses",
        weightBearing: "Sem restrição",
        focus:
          "Retorno progressivo a esporte e atividade de impacto após artrodese consolidada e amplitude estabilizada; desporto de contato é decisão individualizada e geralmente desaconselhado após montagem occipitocervical. Vigiar dor occipital persistente (neuralgia de Arnold) e artrose C1–C2 sintomática.",
      },
    ],
    followup:
      "Consulta com TC às 6 e 12 semanas no tratamento conservador; radiografia dinâmica em flexoextensão ao final, apenas depois da consolidação óssea, para excluir instabilidade residual — passo obrigatório no Dickman II, em que cerca de um quarto evolui para não-união instável e artrodese diferida. Após cirurgia: TC pós-operatória imediata para documentar os parafusos, e controlos aos 3, 6 e 12 meses para confirmar a artrodese e excluir soltura, quebra de material ou pseudartrose. No idoso com fratura combinada C1–C2 tratada sem cirurgia, aceitar a não-união fibrosa se estável e assintomática, mantendo vigilância clínica e imagiológica anual. Reavaliar sempre novo déficit, dor occipital progressiva, mielopatia ou torcicolo fixo de instalação tardia.",
  },

  complications: [
    {
      name: "Instabilidade atlantoaxial não reconhecida",
      detail:
        "A complicação mais importante e a mais evitável. A fratura consolida, a dor melhora e o doente é liberado — mas o ligamento transverso roto deixa o segmento C1–C2 incompetente, com risco de subluxação progressiva e mielopatia tardia. Decorre quase sempre de decidir por milímetros de transbordamento em vez de RM.",
      prevention:
        "RM em todo Gehweiler III/IV e sempre que houver dúvida; classificar por Dickman; radiografia dinâmica ao final do tratamento conservador, já consolidado.",
    },
    {
      name: "Lesão da artéria vertebral",
      detail:
        "Pode ocorrer no trauma (traço através do forame transversário, Gehweiler V) ou na cirurgia, na dissecção lateral do arco posterior de C1 ou no parafuso de pars/pedículo de C2. As consequências vão de nada, se houver dominância contralateral, a infarto de tronco fatal.",
      prevention:
        "Angio-TC quando o traço atravessa o forame; estudo do trajeto da vertebral antes de instrumentar C2, com via translaminar de Wright como alternativa; não dissecar > 1,5 cm da linha média sobre o arco posterior de C1; se lesar de um lado, não instrumentar o contralateral.",
    },
    {
      name: "Fratura associada não diagnosticada",
      detail:
        "Até metade dos doentes tem outra fratura cervical, mais frequentemente do odontoide. Perder essa lesão significa tratar a fratura errada e permitir instabilidade não abordada.",
      prevention: "TC de C0 a T1 sempre, e não apenas de C1; avaliar o áxis com o mesmo rigor com que se avalia o atlas.",
    },
    {
      name: "Falência do tratamento conservador",
      detail:
        "Cerca de um quarto das lesões de Dickman II não consolida e mantém instabilidade após 3–4 meses de órtese; fraturas inicialmente rotuladas como estáveis podem progredir de AO tipo A para B no controlo imagiológico.",
      prevention:
        "Combinar com o doente, desde o início, que a órtese é uma tentativa monitorizada; TC seriada às 6 e 12 semanas; artrodese diferida sem hesitação quando a instabilidade persistir.",
    },
    {
      name: "Perda de rotação cervical",
      detail:
        "A artrodese C1–C2 sacrifica cerca de 50% da rotação cervical total — limitação definitiva, particularmente incapacitante no jovem e na condução de veículo. A montagem occipitocervical acrescenta a perda de flexoextensão.",
      prevention:
        "Indicar artrodese apenas com critério de instabilidade documentado; considerar osteossíntese isolada de C1 em casos selecionados; não estender ao occipital sem necessidade; reabilitação com estratégias de compensação.",
    },
    {
      name: "Neuralgia occipital (nervo de Arnold)",
      detail:
        "Dor lancinante e disestesia no território de C2 por tração, compressão pelo parafuso de massa lateral de C1 ou secção da raiz na exposição.",
      prevention:
        "Manipulação delicada da raiz de C2; parafuso com colo liso na massa lateral de C1; preservar a raiz sempre que possível e infiltrar/tratar precocemente quando ocorrer.",
    },
    {
      name: "Complicações do halo-colete",
      detail:
        "Infeção e soltura do trajeto dos pinos, perfuração da tábua interna, cicatriz frontal, disfagia, broncoaspiração, pneumonia, delirium e descondicionamento — a morbidade concentra-se no idoso e pode superar a da própria fratura.",
      prevention:
        "Preferir colar rígido sempre que suficiente; pinos anteriores fora do seio frontal e dos nervos supraorbitário e supratroclear; cuidado diário do trajeto; no idoso, ponderar seriamente colar em vez de halo.",
    },
    {
      name: "Pseudartrose e falha do material",
      detail:
        "Não-união da artrodese C1–C2 com soltura ou quebra de parafuso ou haste, mais provável em tabagismo, osteoporose, enxerto insuficiente ou decorticação inadequada.",
      prevention:
        "Decorticação cuidadosa e enxerto esponjoso generoso; cessação tabágica; ancoragem em osso de qualidade; controlo imagiológico aos 3, 6 e 12 meses.",
    },
    {
      name: "Artrose C1–C2 e colapso da massa lateral",
      detail:
        "Fraturas com traço articular ou cominuição da massa lateral (Gehweiler IV) podem colapsar de forma assimétrica, gerando torcicolo fixo, dor occipital crônica e artrose atlantoaxial sintomática.",
      prevention:
        "TC seriada nas fraturas de massa lateral; artrodese quando houver colapso progressivo, desvio evolutivo ou dor incapacitante.",
    },
    {
      name: "Malposição de parafuso e fístula liquórica",
      detail:
        "Trajeto errado em C1 ou C2 pode penetrar o canal, o forame transversário ou a dura; na montagem occipitocervical, parafuso occipital longo demais causa fístula liquórica e há risco de sangramento dos seios venosos.",
      prevention:
        "Fluoroscopia biplanar ou navegação; sondagem do trajeto em toda a extensão; TC pós-operatória de rotina; parafusos occipitais na linha média, onde o osso é espesso, com medida cuidadosa do comprimento.",
    },
  ],

  evidence: [
    {
      id: "spence-1970",
      claim:
        "O desvio somado das massas laterais de C1 além das bordas de C2 na incidência transoral prediz a ruptura do ligamento transverso.",
      takeaway:
        "Trabalho original que criou a 'regra de Spence': em cadáveres, o desvio total superior a 6,9 mm correspondeu à falência do ligamento transverso. É a base histórica da distinção estável × instável e continua a ser cobrado em prova — mas deriva de poucos espécimes e de medida radiográfica sujeita a magnificação. Conheça o número; não decida só por ele.",
      level: "IV",
      studyType: "Estudo cadavérico e radiográfico com série de casos",
      era: "classico",
      citation: {
        authors: "Spence KF, Decker S, Sell KW",
        title: "Bursting atlantal fracture associated with rupture of the transverse ligament",
        journal: "J Bone Joint Surg Am",
        year: 1970,
        pmid: "5425648",
      },
    },
    {
      id: "dickman-1996",
      claim:
        "As lesões do ligamento transverso dividem-se em intrassubstanciais (tipo I) e avulsões ósseas (tipo II), com capacidade de cicatrização e tratamento distintos.",
      takeaway:
        "Análise de 39 lesões com TC fina e RM: o tipo I não consolida satisfatoriamente sem fixação interna e deve ser operado precocemente; o tipo II, embora torne o ligamento fisiologicamente incompetente, tem osso para consolidar e alcançou 74% de sucesso com órtese rígida, reservando-se a cirurgia à não-união com instabilidade após 3–4 meses. É a lógica biológica — ligamento não cicatriza, osso cicatriza — que ainda governa a decisão.",
      level: "IV",
      studyType: "Série de casos com RM e seguimento clínico",
      era: "classico",
      citation: {
        authors: "Dickman CA, Greene KA, Sonntag VK",
        title: "Injuries involving the transverse atlantal ligament: classification and treatment guidelines based upon experience with 39 injuries",
        journal: "Neurosurgery",
        year: 1996,
        pmid: "8747950",
        doi: "10.1097/00006123-199601000-00012",
      },
    },
    {
      id: "woods-2018",
      claim: "O ligamento transverso falha com desvio das massas laterais muito menor do que os 6,9 mm da regra de Spence.",
      takeaway:
        "Ensaio biomecânico em 11 espécimes cadavéricos com máquina universal e câmara de alta velocidade: o ligamento rompeu com desvio médio de apenas 3,2 mm (± 1,2) sob força média de 242 N, e acima de 3,8 mm a falência tornou-se provável. Os autores concluem que a regra de Spence é conceitualmente válida, mas o limiar clássico é alto demais e o desvio não é indicador independente fiável — deve ser adjuvante da RM, e não regra absoluta.",
      level: "V",
      studyType: "Estudo biomecânico cadavérico",
      era: "atual",
      citation: {
        authors: "Woods RO, Inceoglu S, Akpolat YT, Cheng WK, Jabo B, Danisa O",
        title:
          "C1 Lateral Mass Displacement and Transverse Atlantal Ligament Failure in Jefferson's Fracture: A Biomechanical Study of the \"Rule of Spence\"",
        journal: "Neurosurgery",
        year: 2018,
        pmid: "28431136",
        doi: "10.1093/neuros/nyx194",
      },
    },
    {
      id: "radcliff-2013",
      claim: "O desvio ósseo de C1 medido na TC não se correlaciona com a integridade do ligamento transverso.",
      takeaway:
        "Dezoito doentes consecutivos com fratura aguda de C1 com pelo menos três traços, avaliados por observadores cegados: não houve diferença nas medidas de separação das massas laterais nem no transbordamento entre os 12 com ligamento íntegro e os 6 com ligamento roto. Explicação dos autores: a TC pós-lesão não capta o momento de máximo desvio. Conclusão prática — havendo qualquer preocupação clínica, faça RM.",
      level: "III",
      studyType: "Estudo diagnóstico com observadores cegados (TC versus RM)",
      era: "atual",
      citation: {
        authors: "Radcliff KE, Sonagli MA, Rodrigues LM, Sidhu GS, Albert TJ, Vaccaro AR",
        title: "Does C1 fracture displacement correlate with transverse ligament integrity?",
        journal: "Orthop Surg",
        year: 2013,
        pmid: "23658043",
        doi: "10.1111/os.12034",
      },
    },
    {
      id: "liu-2019",
      claim: "A classificação de Dickman prevê a estabilidade atlantoaxial melhor do que a regra de Spence.",
      takeaway:
        "Treze fraturas do atlas tratadas sem cirurgia e seguidas por pelo menos dois anos, comparando as duas medidas na mesma coorte: desvio < 6,9 mm falhou em excluir lesão do ligamento em 50% dos casos; desvio > 6,9 mm identificou a lesão em 5/5, mas errou a previsão de instabilidade em 4/5. Já o tipo de Dickman acertou — os 2 casos tipo I não recuperaram a estabilidade C1–C2 e 6 de 7 tipo II estabilizaram. Confirma clinicamente o que a biomecânica sugeria.",
      level: "IV",
      studyType: "Coorte retrospectiva com seguimento mínimo de 2 anos",
      era: "atual",
      citation: {
        authors: "Liu P, Zhu J, Wang Z, Jin Y, Wang Y, Fan W, Liu M, Zhao J",
        title:
          "\"Rule of Spence\" and Dickman's Classification of Transverse Atlantal Ligament Injury Revisited: Discrepancy of Prediction on Atlantoaxial Stability Based on Clinical Outcome of Nonoperative Treatment for Atlas Fractures",
        journal: "Spine (Phila Pa 1976)",
        year: 2019,
        pmid: "30222691",
        doi: "10.1097/BRS.0000000000002877",
      },
    },
    {
      id: "shatsky-2015",
      claim: "A osteossíntese isolada de C1 reduz e estabiliza fraturas instáveis do anel preservando o movimento C1–C2.",
      takeaway:
        "Doze doentes consecutivos com fratura instável de C1 (11 com lesão do ligamento transverso — 5 tipo I e 6 tipo II) tratados com parafusos de massa lateral de C1 unidos por haste transversa, sem artrodese: o desvio caiu de 7,1 mm para 2,4 mm (p < 0,001), a EVA média final foi 0,7 e nenhum doente desenvolveu instabilidade C1–C2 na flexoextensão. Série pequena e sem grupo controlo, mas sugere que a lesão do ligamento não é, por si só, contraindicação à osteossíntese poupadora de movimento.",
      level: "IV",
      studyType: "Coorte retrospectiva de centro de trauma nível I",
      era: "atual",
      citation: {
        authors: "Shatsky J, Bellabarba C, Nguyen Q, Bransford RJ",
        title: "A retrospective review of fixation of C1 ring fractures — does the transverse atlantal ligament (TAL) really matter?",
        journal: "Spine J",
        year: 2015,
        pmid: "26656168",
        doi: "10.1016/j.spinee.2015.11.041",
      },
    },
    {
      id: "cloney-2025",
      claim: "As fraturas simultâneas de C1 e C2 predominam no idoso após queda da própria altura, e a cirurgia reduz a pseudartrose óssea.",
      takeaway:
        "Série contemporânea de 103 doentes com fratura de C1 e C2 num centro académico: 52% tinham 80 anos ou mais, 81% caíram da própria altura, as lesões associadas foram menores e a mortalidade em 1 ano chegou a 28%. A fratura do dente foi a lesão de C2 mais comum (75%) e a RM, quando feita, mostrou lesão ligamentar em 55%. A cirurgia precoce reduziu a chance de pseudartrose óssea, mas a não-união fibrosa foi comum e habitualmente tolerada sem cirurgia — argumento forte para tratar o doente, e não a imagem, no idoso frágil.",
      level: "IV",
      studyType: "Coorte retrospectiva de 10 anos",
      era: "atual",
      citation: {
        authors: "Cloney MB, Buell TJ, Paul DA, Nail TJ, Polavarapu H, Jawad-Makki MA, Adida S, Okonkwo DO",
        title: "Simultaneous Traumatic Fractures of the Atlas and Axis: Presentation, Management, and Outcomes from a Series of 103 Consecutive Patients",
        journal: "World Neurosurg",
        year: 2025,
        pmid: "39694137",
        doi: "10.1016/j.wneu.2024.123580",
      },
    },
  ],

  pearls: [
    "A pergunta do tópico não é 'quanto o osso desviou?', mas 'o ligamento transverso está íntegro?'. Osso é pista; ligamento é diagnóstico.",
    "Regra de Spence: some o transbordamento das duas massas laterais; > 6,9 mm sugere ruptura ligamentar. Trate como gatilho para RM, nunca como veredicto.",
    "Spence positivo quase confirma; Spence negativo não exclude nada. É teste específico, não sensível — a falência biomecânica ocorre já por volta de 3–4 mm.",
    "Dickman I = ligamento puro, não cicatriza → artrodese. Dickman II = arrancamento ósseo, cicatriza → órtese rígida com vigilância. A biologia decide a conduta.",
    "O déficit neurológico é raro porque o anel se expande ao romper — regra dos terços de Steel: em C1 o canal aloja 1/3 dente, 1/3 medula e 1/3 espaço livre.",
    "Um anel fechado não rompe em um só ponto: se a TC mostra um traço isolado, procure o segundo antes de rotular a fratura como estável.",
    "Escoriação no vértice ou na fronte é a assinatura da carga axial — e, no idoso, a queda da própria altura com hiperextensão é o mecanismo típico.",
    "Até metade tem outra fratura cervical, sobretudo do odontoide: imagine de C0 a T1 e avalie C2 com o mesmo rigor de C1.",
    "Traço através do forame transversário (Gehweiler V) obriga a angio-TC: o osso é benigno, a artéria vertebral não.",
    "Antes de instrumentar C2, estude o trajeto da artéria vertebral e tenha a via translaminar de Wright como plano B — é o que separa a rotina da catástrofe.",
    "Não dissecar mais de 1,5 cm da linha média sobre o arco posterior de C1 (8 mm na criança): ali corre a artéria vertebral no seu sulco.",
    "A artrodese C1–C2 custa cerca de 50% da rotação cervical: no jovem, considere a osteossíntese isolada de C1 se o anel for redutível e as massas laterais íntegras.",
    "No idoso frágil com fratura combinada C1–C2, a não-união fibrosa costuma ser assintomática e bem tolerada — trate o doente, não a imagem.",
    "Radiografia dinâmica em flexoextensão só depois da consolidação óssea: é o exame que fecha o tratamento conservador, e nunca o que abre a avaliação aguda.",
  ],

  pitfalls: [
    "Liberar o doente porque chegou andando e sem déficit: a fratura de Jefferson alarga o canal — ela não paralisa, ela instabiliza.",
    "Indicar ou excluir artrodese apenas com base nos milímetros da regra de Spence, sem RM do ligamento transverso.",
    "Achar que a TC 'está boa' e dispensar a RM: a TC não vê ligamento, e as medidas ósseas não se correlacionam com a integridade ligamentar.",
    "Ler a TC como se ela mostrasse o desvio máximo — ela mostra o residual, depois do retorno elástico do anel.",
    "Confundir não-união congênita ou sincondrose persistente do arco posterior com traço agudo: bordas escleróticas e corticalizadas denunciam a variante.",
    "Tratar a fratura de C1 isoladamente quando há fratura do odontoide associada, que muitas vezes dita sozinha a conduta.",
    "Retirar a órtese pela melhora da dor, sem imagem de consolidação e sem dinâmica no conservador.",
    "Fazer radiografia dinâmica na fase aguda, em fratura não consolidada.",
    "Prometer sucesso ao Dickman II sem avisar que cerca de um quarto falha e pode precisar de artrodese diferida.",
    "Impor halo ao idoso sem ponderar disfagia, broncoaspiração, pneumonia, delirium e descondicionamento — a morbidade do halo pode superar a da fratura.",
    "Instrumentar C2 sem estudar a artéria vertebral: é o erro que produz a complicação catastrófica deste tópico.",
    "Dissecar lateralmente demais sobre o arco posterior de C1 e lesar a artéria vertebral no sulco.",
    "Após lesar a artéria vertebral de um lado, instrumentar o lado contralateral — pode transformar um evento silencioso em infarto de tronco.",
    "Fixar o pescoço em flexão na montagem occipitocervical: gera disfagia definitiva e olhar dirigido ao chão.",
    "Escolher a osteossíntese isolada de C1 em anel cominuído ou irredutível, e perder a redução.",
    "Fechar sem fluoroscopia biplanar e sem TC pós-operatória, descobrindo a malposição do parafuso na consulta.",
  ],

  figures: [
    {
      id: "fratura-atlas-jefferson:anatomia",
      caption:
        "Atlas em corte axial: arco anterior curto e arco posterior delgado unindo duas massas laterais volumosas; o ligamento transverso cruza por trás do dente do áxis e insere-se nos tubérculos mediais. A artéria vertebral atravessa o forame transversário.",
      alt: "Diagrama axial do atlas mostrando arcos anterior e posterior, massas laterais, processos transversos com forame transversário, dente do áxis, ligamento transverso e medula espinal.",
      kind: "diagram",
      source: {
        label: "Diagrama original — Revisortopedia",
        reference: "Rockwood and Green's Fractures in Adults, 10a ed. (2024) / Campbell's Operative Orthopaedics 14a",
      },
    },
    {
      id: "fratura-atlas-jefferson:mecanismo",
      caption:
        "Mecanismo em corte coronal: os côndilos occipitais descem sobre massas laterais em cunha e as projetam lateralmente. O anel fechado rompe em 2 a 4 pontos e o ligamento transverso pode falhar. Variante 'intacto' mostra a junção normal.",
      alt: "Diagrama coronal da junção craniocervical com seta de carga axial, côndilos occipitais sobre as massas laterais de C1 afastadas lateralmente, traços de fratura e ruptura do ligamento transverso.",
      variant: "explosao",
      kind: "diagram",
      source: {
        label: "Diagrama original — Revisortopedia",
        reference: "Rockwood and Green's Fractures in Adults, 10a ed. (2024) / Campbell's Operative Orthopaedics 14a",
      },
    },
    {
      id: "fratura-atlas-jefferson:regra-spence",
      caption:
        "Regra de Spence na incidência transoral: soma-se o transbordamento de cada massa lateral de C1 além da borda lateral de C2 (a + b). Total > 6,9 mm sugere ruptura do ligamento transverso — sinal indireto que indica RM, não decisão.",
      alt: "Diagrama da incidência transoral com massas laterais de C1 transbordando as bordas de C2, linhas de referência tracejadas e medidas a e b marcadas em âmbar.",
      variant: "spence",
      kind: "diagram",
      source: {
        label: "Diagrama original — Revisortopedia",
        reference: "Rockwood and Green's Fractures in Adults, 10a ed. (2024) / Campbell's Operative Orthopaedics 14a",
      },
    },
    {
      id: "fratura-atlas-jefferson:gehweiler",
      caption:
        "Classificação de Gehweiler (I a V) em corte axial: arco anterior isolado, arco posterior isolado, arcos anterior e posterior (Jefferson), massa lateral e processo transverso. O tipo III subdivide-se em IIIa e IIIb conforme o ligamento transverso.",
      alt: "Cinco diagramas axiais do anel de C1 lado a lado com os traços de fratura de cada tipo de Gehweiler assinalados e rotulados de I a V.",
      kind: "diagram",
      source: {
        label: "Diagrama original — Revisortopedia",
        reference: "Rockwood and Green's Fractures in Adults, 10a ed. (2024) / Campbell's Operative Orthopaedics 14a",
      },
    },
    {
      id: "fratura-atlas-jefferson:dickman",
      caption:
        "Classificação de Dickman na RM: tipo I, ruptura dentro da substância do ligamento transverso, que não consolida e exige artrodese; tipo II, avulsão óssea do tubérculo de inserção, com cerca de 74% de sucesso em órtese rígida.",
      alt: "Dois diagramas axiais do atlas comparando a ruptura intrassubstancial do ligamento transverso com a avulsão de fragmento ósseo do tubérculo da massa lateral.",
      kind: "diagram",
      source: {
        label: "Diagrama original — Revisortopedia",
        reference: "Rockwood and Green's Fractures in Adults, 10a ed. (2024) / Campbell's Operative Orthopaedics 14a",
      },
    },
    {
      id: "fratura-atlas-jefferson:iad-perfil",
      caption:
        "Perfil da junção craniocervical: intervalo atlantodental (IAD) entre o arco anterior de C1 e o dente do áxis e espaço disponível para a medula (EDM). IAD > 5 mm no adulto com redução do EDM indica incompetência do ligamento transverso.",
      alt: "Diagrama em perfil do arco anterior de C1, dente do áxis, corpo de C2, arco posterior de C1 e medula, com as medidas do intervalo atlantodental e do espaço disponível para a medula em âmbar.",
      variant: "normal",
      kind: "diagram",
      source: {
        label: "Diagrama original — Revisortopedia",
        reference: "Rockwood and Green's Fractures in Adults, 10a ed. (2024) / Campbell's Operative Orthopaedics 14a",
      },
    },
    {
      id: "fratura-atlas-jefferson:fixacao",
      caption:
        "Opções de fixação por via posterior: artrodese C1–C2 de Harms–Goel (padrão para o Dickman I), osteossíntese isolada de C1 com haste transversa (variante 'orif', poupadora de rotação) e artrodese occipitocervical (variante 'occipitocervical').",
      alt: "Diagrama em vista posterior do occipital, C1, C2 e C3 com parafusos de massa lateral de C1, parafusos de pars de C2, hastes e enxerto ósseo entre os arcos.",
      variant: "c1c2",
      kind: "diagram",
      source: {
        label: "Diagrama original — Revisortopedia",
        reference: "Rockwood and Green's Fractures in Adults, 10a ed. (2024) / Campbell's Operative Orthopaedics 14a",
      },
    },
  ],

  meta: {
    lastReviewed: "2026-07-14",
    sources: [
      "Rockwood and Green's Fractures in Adults, 10ª ed. (2024) — Fractures of the Upper Cervical Spine",
      "Campbell's Operative Orthopaedics, 14ª ed. (2021) — Fractures, Dislocations, and Fracture-Dislocations of the Spine",
      "Hebert & Lech. Ortopedia e Traumatologia: Princípios e Prática, 6ª ed. (2025) — Traumatismos da coluna cervical",
      "Dickman CA, Greene KA, Sonntag VK. Neurosurgery. 1996 (PMID 8747950)",
      "Woods RO et al. Neurosurgery. 2018 (PMID 28431136)",
      "Liu P et al. Spine. 2019 (PMID 30222691)",
    ],
    attribution: "Diagramas originais em line-art, produzidos para a Revisortopedia. Sem reprodução de material protegido por direitos autorais.",
    figureReference: "Rockwood and Green's Fractures in Adults, 10a ed. (2024) / Campbell's Operative Orthopaedics 14a",
  },
});
