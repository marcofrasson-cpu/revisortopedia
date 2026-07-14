import { defineTopic } from "../../types/topic";

export const topic = defineTopic({
  id: "col-cervical-trauma-cervical-subaxial",
  slug: "trauma-cervical-subaxial",
  regionId: "coluna",
  bone: "Cervical",
  injury: "Trauma subaxial (C3-C7)",
  title: "Trauma cervical subaxial",
  subtitle:
    "Classificar pela morfologia, pelo complexo discoligamentar e pelo estado neurológico; decidir entre redução fechada, via anterior e via posterior sem perder a janela da medula.",
  laterality: null,
  status: "complete",
  overview:
    "O segmento subaxial (C3–C7) concentra a maior parte das lesões traumáticas da coluna cervical e a maioria das lesões medulares cervicais. É um segmento móvel, de facetas oblíquas e canal relativamente estreito, apoiado sobre a transição cervicotorácica rígida — o que explica a concentração de energia em C5–C6 e C6–C7 no adulto jovem vítima de trauma de alta energia, e o padrão distinto de lesão em hiperextensão sobre coluna anquilosada no idoso, muitas vezes após queda da própria altura.\n\nA decisão terapêutica moderna deixou de se apoiar em listas descritivas de padrões e passou a se apoiar em duas ferramentas complementares. O escore SLIC soma três domínios — morfologia, integridade do complexo discoligamentar (CDL) e estado neurológico — e converte a soma em conduta: ≤ 3 sugere tratamento conservador, ≥ 5 sugere cirurgia e 4 é uma zona cinzenta deliberadamente deixada ao julgamento clínico. A classificação AOSpine subaxial, morfológica e hierárquica (A compressão, B banda de tensão, C translação), acrescenta modificadores facetários (F1–F4), neurológicos (N) e de caso (M) e comunica melhor a lesão do que a prescreve.\n\nDuas questões dominam a prática. A primeira é a luxação facetária: unilateral (translação em torno de 25% do corpo, mecanismo de flexão-rotação) ou bilateral (translação em torno de 50%, flexão-distração, frequentemente com lesão medular). A segunda é o momento da RM. Em paciente acordado, cooperativo e examinável, a redução fechada precoce com tração seriada é segura e prioriza a descompressão da medula sobre o exame de imagem. Em paciente não avaliável — sedado, intubado, com traumatismo craniencefálico ou intoxicado — a RM antes da redução é a conduta prudente, porque uma hérnia discal traumática no canal pode transformar uma manobra de redução em lesão medular iatrogênica. A escolha da via (anterior, posterior ou combinada) segue a direção da compressão, a redutibilidade e a competência das colunas — não o escore.",
  keyFacts: [
    { label: "Nível", value: "C3–C7; picos em C5–C6 e C6–C7" },
    { label: "SLIC", value: "Morfologia (0–4) + CDL (0–2) + neuro (0–3, +1 se compressão contínua)" },
    { label: "Limiar SLIC", value: "≤ 3 conservador · 4 zona cinzenta · ≥ 5 cirurgia" },
    { label: "AOSpine", value: "A compressão · B banda de tensão · C translação (+ F, N, M)" },
    { label: "Luxação facetária", value: "Unilateral ≈ 25% de translação; bilateral ≈ 50%" },
    { label: "RM antes de reduzir", value: "Se o paciente não é examinável; se acordado, reduzir primeiro" },
    { label: "Estrutura em risco", value: "Artéria vertebral no forame transverso de C6 a C3" },
  ],
  anatomy: {
    text:
      "A vértebra subaxial típica tem corpo baixo e largo, com processos uncinados ergendo-se nas margens póstero-laterais do platô superior. As articulações uncovertebrais que eles formam contêm o disco lateralmente e servem de referência cirúrgica crítica: elas marcam o limite lateral seguro da discectomia anterior, porque a artéria vertebral corre imediatamente lateral a elas. Ultrapassar o processo uncinado com a pinça ou a fresa é o mecanismo clássico de lesão arterial na via anterior.\n\nA artéria vertebral entra no forame transverso em C6 na grande maioria dos indivíduos e ascende por C5, C4 e C3 antes de contornar o atlas — mas variações anatômicas (entrada em C5 ou C7, trajeto tortuoso ou intraósseo) são frequentes o bastante para justificar a leitura atenta da TC antes de instrumentar. A dominância arterial importa: a lesão unilateral costuma ser silenciosa quando a contralateral é pérvia, e catastrófica quando não é.\n\nAs facetas subaxiais são oblíquas, orientadas cerca de 45° em relação ao plano axial, o que permite ampla flexo-extensão e rotação acoplada, mas as torna intrinsecamente propensas ao cavalgamento e ao travamento sob flexão-distração. A massa lateral — o pilar ósseo entre os processos articulares superior e inferior — é o ponto de ancoragem da fixação posterior; a raiz nervosa sai imediatamente anterior e inferior a ela, e a artéria vertebral corre anterior e medial, o que dita a trajetória divergente do parafuso.\n\nO complexo discoligamentar (CDL) é a unidade funcional que o SLIC avalia: disco, ligamento longitudinal anterior, ligamento longitudinal posterior, cápsulas facetárias, ligamento amarelo e ligamentos interespinhoso e supraespinhoso. Sua ruptura é o que converte uma lesão óssea aparentemente benigna em lesão instável. Os sinais indiretos na TC — afastamento interespinhoso, diástase ou incongruência facetária, alargamento do espaço discal, translação, cifose focal — motivam a RM, que avalia diretamente o CDL, a medula e o disco.\n\nO canal subaxial tem diâmetro ântero-posterior médio de 14–17 mm e a medula ocupa cerca de 10 mm. Essa reserva estreita explica por que a estenose congênita (relação de Torg-Pavlov < 0,8) e a espondilose predispõem à lesão medular sem fratura, e por que um pequeno fragmento discal ou uma translação modesta podem produzir déficit desproporcional à lesão óssea.",
    figureIds: ["trauma-cervical-subaxial:anatomia", "trauma-cervical-subaxial:luxacao-facetaria"],
  },
  classification: [
    {
      id: "slic",
      name: "SLIC — Subaxial Injury Classification and Severity Scale (Vaccaro, 2007)",
      basis:
        "Soma ponderada de três domínios independentes — morfologia da lesão na TC, integridade do complexo discoligamentar e estado neurológico — convertida em recomendação de conduta.",
      note:
        "O escore orienta a decisão de operar, não a via de acesso. A concordância interobservador é alta para o domínio neurológico e apenas moderada para o CDL, que é o elo frágil do sistema. A faixa de escore 4 é uma zona cinzenta deliberada.",
      types: [
        {
          code: "Morfologia",
          label: "0–4 pontos",
          description:
            "Sem alteração 0; compressão 1; compressão com explosão 2; distração — cavalgamento facetário, hiperextensão 3; rotação ou translação — luxação facetária uni/bilateral, fratura em lágrima instável 4. Pontua-se apenas o padrão de maior valor, não a soma dos padrões.",
          figureId: "trauma-cervical-subaxial:slic",
        },
        {
          code: "CDL",
          label: "0–2 pontos",
          description:
            "Complexo discoligamentar íntegro 0; indeterminado 1 (alargamento isolado do espaço discal, sinal duvidoso na RM); rompido 2 (alargamento do espaço discal anterior, afastamento interespinhoso, incongruência ou diástase facetária). É o domínio de menor confiabilidade e o que mais se beneficia da RM.",
          figureId: "trauma-cervical-subaxial:slic",
        },
        {
          code: "Neuro",
          label: "0–3 pontos (+1)",
          description:
            "Intacto 0; lesão radicular 1; lesão medular completa 2; lesão medular incompleta 3. Soma-se +1 quando há compressão medular contínua na vigência de déficit neurológico — a lesão incompleta com compressão persistente é o cenário de maior urgência cirúrgica.",
          figureId: "trauma-cervical-subaxial:slic",
        },
        {
          code: "Total",
          label: "Conduta recomendada",
          description:
            "≤ 3: tratamento conservador com órtese. 4: zona cinzenta — decidir por julgamento clínico, considerando idade, alinhamento, comorbidades e confiabilidade do seguimento. ≥ 5: tratamento cirúrgico.",
          figureId: "trauma-cervical-subaxial:slic",
        },
      ],
    },
    {
      id: "aospine",
      name: "AOSpine subaxial (C3–C7)",
      basis:
        "Hierarquia morfológica na TC, do padrão mais estável ao menos estável, acrescida de modificadores facetários, neurológicos e de caso.",
      note:
        "Descreve e comunica a lesão; não traz algoritmo de tratamento embutido como o SLIC. Na prática, os dois sistemas são usados juntos: AOSpine para nomear, SLIC para decidir.",
      types: [
        {
          code: "A",
          label: "Compressão",
          description:
            "Banda de tensão íntegra. A0 sem fratura ou fratura menor; A1 impactação de um platô; A2 separação em pinça, ambos os platôs, sem parede posterior; A3 explosão incompleta, um platô e a parede posterior; A4 explosão completa, ambos os platôs e a parede posterior.",
          figureId: "trauma-cervical-subaxial:aospine",
          figureVariant: "A",
        },
        {
          code: "B",
          label: "Lesão da banda de tensão",
          description:
            "B1 lesão puramente óssea posterior (Chance, rara no segmento cervical); B2 lesão da banda de tensão posterior, ligamentar ou osteoligamentar, com ou sem lesão anterior associada; B3 lesão por hiperextensão com falência da banda de tensão anterior — típica da coluna anquilosada (espondilite anquilosante, DISH), altamente instável apesar do aspecto radiográfico discreto.",
          figureId: "trauma-cervical-subaxial:aospine",
          figureVariant: "B",
        },
        {
          code: "C",
          label: "Translação",
          description:
            "Deslocamento ou luxação em qualquer plano, com falência de todos os elementos. Inclui as luxações facetárias bilaterais. Praticamente sempre cirúrgica.",
          figureId: "trauma-cervical-subaxial:aospine",
          figureVariant: "C",
        },
        {
          code: "F1–F4",
          label: "Modificadores facetários",
          description:
            "F1 fratura de faceta com fragmento < 1 cm e < 40% da massa lateral; F2 fragmento ≥ 1 cm, ≥ 40% da massa lateral ou instável; F3 massa lateral flutuante (fratura do pedículo e da lâmina isolando a massa lateral); F4 faceta cavalgada ou luxada. Anotam-se lado e nível.",
          figureId: "trauma-cervical-subaxial:luxacao-facetaria",
        },
        {
          code: "N0–N4, NX",
          label: "Estado neurológico",
          description:
            "N0 intacto; N1 déficit transitório resolvido; N2 sinais ou sintomas radiculares; N3 lesão medular incompleta ou da cauda equina; N4 lesão medular completa; NX não avaliável (sedado, intubado, TCE). O sufixo + indica compressão contínua com déficit.",
        },
        {
          code: "M1–M4",
          label: "Modificadores de caso",
          description:
            "M1 incerteza sobre a integridade da banda de tensão posterior; M2 hérnia discal crítica — o modificador que muda a conduta antes de reduzir uma luxação facetária; M3 doença metabólica ou anquilosante do osso (espondilite anquilosante, DISH, osteoporose grave); M4 lesão da artéria vertebral, confirmada ou suspeita.",
        },
      ],
    },
    {
      id: "facetaria",
      name: "Luxação facetária subaxial",
      basis:
        "Número de facetas envolvidas e magnitude da translação anterior do corpo vertebral no perfil, que refletem diretamente a energia e o mecanismo.",
      note:
        "A regra dos 25% e 50% é uma referência de leitura do perfil, não um valor absoluto. O achado que mais importa é a congruência facetária no sagital paramediano da TC — o sinal do 'hambúrguer invertido' na luxação.",
      types: [
        {
          code: "Unilateral",
          label: "Translação ≈ 25%",
          description:
            "Mecanismo de flexão associada a rotação. Uma faceta cavalga ou trava; a outra permanece congruente. Cursa tipicamente com radiculopatia pelo estreitamento foraminal, e frequentemente com medula poupada. A redução fechada é menos previsível do que na bilateral, porque a lesão tem componente rotacional e o CDL costuma estar parcialmente preservado.",
          figureId: "trauma-cervical-subaxial:luxacao-facetaria",
          figureVariant: "unilateral",
        },
        {
          code: "Bilateral",
          label: "Translação ≈ 50%",
          description:
            "Mecanismo de flexão-distração com falência completa do CDL e das cápsulas facetárias. Alta incidência de lesão medular. É a lesão em que a hérnia discal traumática mais importa: reduzi-la às cegas em paciente não examinável é o cenário clássico de agravamento neurológico iatrogênico.",
          figureId: "trauma-cervical-subaxial:luxacao-facetaria",
          figureVariant: "bilateral",
        },
        {
          code: "Cavalgada",
          label: "Perched facet",
          description:
            "Ápice da faceta inferior repousa sobre o ápice da superior, sem travamento completo. Estágio intermediário, instável, com risco de progressão para luxação franca a qualquer mobilização. Formalmente F4 na AOSpine.",
          figureId: "trauma-cervical-subaxial:luxacao-facetaria",
          figureVariant: "unilateral",
        },
      ],
    },
  ],
  indications: {
    operative: [
      "Escore SLIC ≥ 5.",
      "AOSpine tipo C (translação/luxação) — instabilidade de todos os elementos.",
      "Luxação facetária bilateral, com ou sem déficit neurológico.",
      "Luxação facetária unilateral irredutível ou que se desloca novamente após redução.",
      "Lesão medular incompleta com compressão persistente — a indicação de maior urgência; a descompressão precoce (idealmente < 24 h) associa-se a melhor recuperação neurológica.",
      "Complexo discoligamentar rompido com cifose focal ou translação progressiva no seguimento.",
      "Lesão por hiperextensão em coluna anquilosada (AOSpine B3, modificador M3): fixação longa, mesmo com fratura de aspecto discreto — o tratamento conservador tem alta taxa de falência e de deterioração neurológica.",
      "Fratura de faceta F2/F3 com instabilidade demonstrada ou radiculopatia por compressão óssea.",
      "Fratura em lágrima (teardrop) por flexão, com retropulsão e comprometimento do canal.",
      "Falha do tratamento conservador: dor incapacitante, deformidade progressiva ou pseudartrose.",
    ],
    nonOperative: [
      "Escore SLIC ≤ 3 com paciente neurologicamente intacto.",
      "Lesões AOSpine A0/A1 com complexo discoligamentar íntegro e alinhamento preservado.",
      "Fratura isolada de processo espinhoso (fratura do escavador de argila) — órtese apenas para conforto.",
      "Fratura de faceta F1 estável, sem translação e sem déficit.",
      "Fratura por compressão sem envolvimento da parede posterior, sem cifose focal progressiva.",
      "Fratura de processo transverso sem lesão da artéria vertebral associada.",
    ],
    decisionNotes:
      "A decisão obedece a três perguntas encadeadas, nesta ordem.\n\n1) Há compressão medular com déficit? Se sim, o relógio começa a correr: a descompressão precoce é a única variável de tratamento consistentemente associada a recuperação neurológica. Nesse cenário, a redução fechada em paciente examinável é a descompressão mais rápida disponível e não deve ser adiada para obter uma RM.\n\n2) A lesão é instável? O SLIC responde de forma quantitativa. A validação externa em 185 pacientes confirmou os limiares: escore ≤ 3 foi tratado conservadoramente em 94% dos casos e ≥ 5 operado em 95%, com escore médio de 7,14 no grupo cirúrgico contra 2,22 no conservador. A faixa 4 permaneceu ambígua na prática real — 65% desses pacientes foram tratados sem cirurgia — e é exatamente onde o julgamento clínico substitui o algoritmo.\n\n3) Qual via? O escore não responde: o próprio estudo de validação mostrou que o domínio de morfologia não prevê a via de acesso. A via segue a direção da compressão e a redutibilidade. Compressão anterior (disco, corpo, retropulsão) → via anterior. Compressão posterior, luxação irredutível pela via anterior, massa lateral flutuante, ou necessidade de fixação em múltiplos níveis → via posterior. Lesão em três colunas, luxação irredutível com hérnia discal, e coluna anquilosada → combinada.\n\nO ponto de maior consequência prática é o momento da RM. As duas séries clássicas que moldaram a conduta apontam para lados aparentemente opostos e precisam ser lidas juntas. Doran demonstrou que a hérnia discal traumática coexiste com a luxação facetária com frequência muito maior do que se supunha, e propôs a RM antes de qualquer tentativa de redução. Grant, em 82 pacientes, encontrou hérnia em 22% e ruptura discal em 24% na RM pós-redução e, ainda assim, apenas um paciente (1,3%) deteriorou — e mais de 6 horas após a manobra —, concluindo que a redução fechada precoce é segura e deve preceder a RM em pacientes com déficit motor significativo.\n\nA síntese que a prática adotou não é escolher um dos dois, e sim estratificar pelo exame neurológico. Em paciente acordado, cooperativo e examinável, o próprio exame seriado a cada incremento de peso é o monitor: reduz-se primeiro, faz-se a RM depois. Em paciente não avaliável — sedado, intubado, com TCE ou intoxicado — perde-se o monitor, e a RM precede a redução. É precisamente essa distinção que a AOSpine codificou nos modificadores NX (não avaliável) e M2 (hérnia discal crítica).",
  },
  approaches: [
    {
      id: "reducao-fechada",
      name: "Redução fechada com tração craniana (Gardner-Wells)",
      indication:
        "Luxação facetária uni ou bilateral em paciente acordado, cooperativo e neurologicamente examinável. É o método mais rápido de descomprimir a medula e frequentemente antecede a fixação definitiva.",
      interval:
        "Não cirúrgico. Pinos posicionados cerca de 1 cm acima do pavilhão auricular, na linha do meato acústico externo, abaixo do equador do crânio. Pinos ligeiramente posteriores favorecem a flexão (útil para destravar facetas); ligeiramente anteriores favorecem a extensão (útil para manter a redução).",
      atRisk: [
        "Medula espinhal — sobredistração e hérnia discal ocupando o canal",
        "Artéria e nervo temporais superficiais (pino muito anterior)",
        "Tábua interna do crânio — penetração por torque excessivo ou osso frágil",
        "Coluna anquilosada — a tração é perigosa e a lesão pode ser altamente instável",
        "Lesão em múltiplos níveis não reconhecida — distração do segmento errado",
      ],
      figureId: "trauma-cervical-subaxial:rm-pre-reducao",
    },
    {
      id: "via-anterior",
      name: "Via anterior de Smith-Robinson (ACDF / corpectomia)",
      indication:
        "Compressão anterior — hérnia discal traumática, retropulsão de corpo, fratura em lágrima. Também é a via de escolha quando há disco no canal antes de reduzir uma luxação, permitindo discectomia antes da manobra. Preserva a musculatura posterior e permite restaurar a lordose.",
      interval:
        "Intervalo entre a bainha carotídea lateralmente (esternocleidomastóideo, artéria carótida, veia jugular interna, nervo vago) e as estruturas viscerais medialmente (fitas infra-hióideas, traqueia, esôfago). A dissecção é romba até a fáscia pré-vertebral, sobre o músculo longo do pescoço, que é elevado subperiostealmente.",
      atRisk: [
        "Nervo laríngeo recorrente — no sulco traqueoesofágico; trajeto mais previsível à esquerda",
        "Nervo laríngeo superior — em risco nas abordagens altas (C3–C4)",
        "Artéria vertebral — imediatamente lateral ao processo uncinado; limite lateral da discectomia",
        "Esôfago — a lesão mais grave da via, muitas vezes de reconhecimento tardio",
        "Cadeia simpática — sobre o longo do pescoço lateralmente; síndrome de Horner",
        "Ducto torácico — à esquerda, nas abordagens de C7–T1",
        "Bainha carotídea — afastamento prolongado e vigoroso",
      ],
      figureId: "trauma-cervical-subaxial:via-anterior",
    },
    {
      id: "via-posterior",
      name: "Via posterior (parafusos de massa lateral)",
      indication:
        "Luxação facetária irredutível que exige redução aberta direta com facetectomia, massa lateral flutuante (F3), lesão da banda de tensão posterior, compressão posterior, necessidade de fixação em múltiplos níveis, e coluna anquilosada. Fixação biomecanicamente mais robusta que a anterior isolada.",
      interval:
        "Linha média avascular através do ligamento nucal; dissecção subperiosteal dos processos espinhosos e lâminas até a borda lateral das massas laterais, preservando as cápsulas facetárias dos níveis não instrumentados.",
      atRisk: [
        "Artéria vertebral — anterior e medial à massa lateral; risco com trajetória medial do parafuso",
        "Raízes nervosas (sobretudo C5 e C6) — imediatamente anteroinferiores à massa lateral",
        "Medula espinhal — durante a manipulação e a facetectomia",
        "Inserção do semiespinhal do axis em C2 — sua desinserção favorece cifose e dor",
        "Cápsula facetária do nível adjacente — degeneração acelerada do segmento",
        "Plexo venoso epidural — sangramento na facetectomia",
      ],
      figureId: "trauma-cervical-subaxial:via-posterior",
    },
    {
      id: "combinada",
      name: "Via combinada (anterior-posterior, ou anterior-posterior-anterior)",
      indication:
        "Luxação irredutível com hérnia discal no canal (discectomia anterior antes da redução posterior); lesão em três colunas; coluna anquilosada; falência da fixação isolada; corpectomia extensa exigindo suporte posterior.",
      interval:
        "Combina os intervalos das vias anterior e posterior, em um mesmo tempo cirúrgico com reposicionamento do paciente. Na sequência anterior-posterior-anterior, a discectomia e o enxerto com placa de contenção precedem a redução posterior, evitando um terceiro tempo separado.",
      atRisk: [
        "Todas as estruturas das vias anterior e posterior",
        "Instabilidade durante o reposicionamento do paciente — a virada exige tração mantida e controle da cabeça",
        "Tempo cirúrgico e sangramento acumulados",
        "Via aérea — edema após tempo anterior prolongado; considerar manter a intubação",
      ],
      figureId: "trauma-cervical-subaxial:acdf",
    },
  ],
  technique: [
    {
      n: 1,
      title: "Atendimento inicial, imobilização e exame neurológico de base",
      detail:
        "Colar cervical rígido, prancha com retirada precoce e mobilização em bloco. Documentar o exame conforme o padrão ISNCSCI/ASIA antes de qualquer sedação — este é o registro que vai definir se a redução fechada pode ser feita sem RM e a referência contra a qual toda mudança será medida. Registrar explicitamente reflexo bulbocavernoso e nível sensitivo. Manter pressão arterial média de 85–90 mmHg nas primeiras 24–48 h na lesão medular e evitar hipóxia e hipotensão, que agravam a lesão secundária.",
      tips: [
        "O exame documentado antes da intubação vale mais do que qualquer imagem para a decisão seguinte.",
        "Choque neurogênico (hipotensão com bradicardia) e choque hemorrágico coexistem: excluir sangramento antes de atribuir a hipotensão à medula.",
        "Em coluna anquilosada, o colar rígido pode ser nocivo: imobilizar na deformidade preexistente, com coxins.",
      ],
      pitfalls: [
        "Sedar ou intubar antes de documentar o exame — converte o paciente em NX e obriga a RM antes da redução.",
        "Corticoide em alta dose na lesão medular aguda não é recomendado de rotina: benefício não demonstrado e dano documentado.",
        "Atribuir déficit apenas à lesão cervical sem procurar lesão em outro nível — 10–15% têm lesão vertebral não contígua.",
      ],
    },
    {
      n: 2,
      title: "Imagem: TC como padrão, angio-TC quando há critério",
      detail:
        "TC de toda a coluna cervical com reconstruções sagitais e coronais é o exame inicial. Avaliar sistematicamente: altura e integridade dos corpos, parede posterior, alinhamento, cifose focal, espaço discal, distância interespinhosa e — no sagital paramediano — a congruência de cada faceta, direita e esquerda separadamente. Solicitar angio-TC quando houver fratura que atravesse o forame transverso, subluxação/luxação facetária, fratura em C1–C3, ou déficit neurológico incompatível com a lesão óssea.",
      figureId: "trauma-cervical-subaxial:anatomia",
      tips: [
        "O sagital paramediano é onde a luxação facetária se revela: procurar o sinal do 'hambúrguer invertido'.",
        "Reconstruir a transição cervicotorácica com atenção — C7–T1 é o nível mais frequentemente subavaliado.",
        "Mapear a entrada da artéria vertebral no forame transverso antes de planejar parafusos: a entrada em C6 é a regra, não a certeza.",
      ],
      pitfalls: [
        "Aceitar radiografia simples como suficiente para excluir lesão — sensibilidade insuficiente no trauma significativo.",
        "Ler apenas o sagital mediano e perder a incongruência facetária unilateral.",
        "Deixar de reconhecer a coluna anquilosada: a fratura atravessa o bloco fundido e pode ser sutil ou visível apenas como linha transversal.",
      ],
    },
    {
      n: 3,
      title: "Classificar: escore SLIC e nomenclatura AOSpine",
      detail:
        "Somar os três domínios do SLIC — morfologia (0–4), CDL (0–2) e neurológico (0–3, +1 se compressão contínua com déficit). Registrar em paralelo a lesão em AOSpine (tipo A/B/C, modificador facetário F, neurológico N e de caso M). Os dois sistemas cumprem papéis distintos: o SLIC decide operar, a AOSpine comunica e documenta. Aplicar o escore como registro escrito no prontuário — é ele que sustenta a decisão e a transferência de cuidado.",
      figureId: "trauma-cervical-subaxial:slic",
      tips: [
        "Na morfologia, pontuar apenas o padrão de maior valor: não somar compressão com translação.",
        "O CDL é o domínio menos confiável e o que mais muda a soma — quando indeterminado, a RM costuma resolver.",
        "Escore 4 é zona cinzenta por desenho, não por falha: registrar o raciocínio que decidiu o caso.",
      ],
      pitfalls: [
        "Usar o SLIC para escolher a via de acesso — o próprio estudo de validação mostrou que a morfologia não prevê a via.",
        "Pontuar CDL 'íntegro' apenas porque a TC não mostrou afastamento, sem considerar a RM em lesão suspeita.",
        "Esquecer o +1 da compressão contínua na lesão incompleta, subestimando a urgência.",
      ],
    },
    {
      n: 4,
      title: "Decisão-chave: RM antes ou depois da redução",
      detail:
        "Estratificar pelo exame neurológico, não pelo padrão da lesão. Paciente acordado, cooperativo e examinável, com luxação facetária e déficit: proceder à redução fechada imediata; o exame seriado é o monitor e a RM vem depois. Paciente não avaliável (sedado, intubado, TCE, intoxicado, AOSpine NX): obter RM antes da redução, porque a hérnia discal traumática é frequente e, sem exame, não há como detectar a deterioração. Em qualquer cenário, a RM é obrigatória antes de uma redução aberta pela via posterior.",
      figureId: "trauma-cervical-subaxial:rm-pre-reducao",
      tips: [
        "A pergunta não é 'a lesão tem hérnia?', e sim 'consigo examinar este paciente durante a manobra?'.",
        "Hérnia discal e ruptura discal ocorrem em cerca de um quarto dos casos cada, mas a deterioração após redução em paciente examinável é rara (≈ 1%).",
        "A RM também mede o que a TC não vê: edema medular, integridade do CDL e o próprio prognóstico neurológico.",
      ],
      pitfalls: [
        "Adiar a redução em paciente examinável com déficit para 'esperar a RM' — troca-se descompressão precoce por informação que não mudará a conduta imediata.",
        "Reduzir às cegas paciente intubado por politrauma — o cenário exato do agravamento iatrogênico descrito por Doran.",
        "Considerar a RM negativa como salvo-conduto: o disco pode extrudir durante a própria manobra.",
      ],
    },
    {
      n: 5,
      title: "Redução fechada com tração seriada",
      detail:
        "Pinos de Gardner-Wells 1 cm acima do pavilhão auricular, na linha do meato acústico externo, apertados até o indicador de torque. Iniciar com 5 kg (ou ~2,5 kg por nível acima da lesão) e acrescentar 2,5–5 kg a cada 10–15 minutos. Após cada incremento: exame neurológico completo e radiografia em perfil. Leve flexão ajuda a destravar as facetas; após o destravamento, estender e reduzir o peso para manter o alinhamento. Interromper imediatamente diante de qualquer piora neurológica, sobredistração (> 1,5 cm de abertura do espaço discal ou facetário) ou peso acima de ~1/3 do peso corporal sem redução.",
      figureId: "trauma-cervical-subaxial:luxacao-facetaria",
      figureVariant: "bilateral",
      tips: [
        "A redução fechada é bem-sucedida em torno de 97% dos casos quando conduzida de forma seriada e precoce; o tempo médio é de cerca de 2 horas.",
        "A luxação unilateral costuma exigir mais peso e um componente de rotação para destravar do que a bilateral.",
        "Analgesia e relaxamento muscular leves ajudam, mas nunca ao custo do nível de consciência — perder o exame é perder o monitor.",
      ],
      pitfalls: [
        "Sedação profunda durante a tração — anula a única salvaguarda do método.",
        "Sobredistração em lesão anquilosada ou em lesão não contígua não reconhecida.",
        "Insistir com pesos crescentes numa luxação irredutível em vez de converter para redução aberta.",
        "Pinos anteriores demais (temporal superficial) ou acima do equador do crânio (deslizamento).",
      ],
    },
    {
      n: 6,
      title: "Via anterior — discectomia e descompressão",
      detail:
        "Decúbito dorsal, leve extensão, coxim interescapular, tração cutânea dos ombros para a imagem. Incisão transversa em prega cutânea no nível desejado. Divisão do platisma, dissecção romba no intervalo entre a bainha carotídea (lateral) e traqueia/esôfago (medial) até a fáscia pré-vertebral. Confirmar o nível com radioscopia e agulha. Elevar o longo do pescoço subperiostealmente e posicionar os afastadores sob ele, nunca sobre as vísceras. Discectomia completa até o ligamento longitudinal posterior, com o processo uncinado como limite lateral absoluto.",
      figureId: "trauma-cervical-subaxial:acdf",
      figureVariant: "1",
      tips: [
        "Abordagem à esquerda torna o trajeto do laríngeo recorrente mais previsível; à direita é ergonomicamente mais confortável para o cirurgião destro. Escolher e ser consistente.",
        "Desinsuflar e reinsuflar o balonete do tubo após a colocação dos afastadores reduz a pressão sobre o laríngeo recorrente.",
        "Ressecar o ligamento longitudinal posterior quando há suspeita de fragmento extruso — a hérnia traumática costuma estar atrás dele.",
      ],
      pitfalls: [
        "Ultrapassar lateralmente o processo uncinado — mecanismo clássico de lesão da artéria vertebral.",
        "Afastadores apoiados diretamente sobre traqueia e esôfago, em vez de sob o longo do pescoço.",
        "Cauterização vigorosa lateral sobre o longo do pescoço — cadeia simpática e síndrome de Horner.",
        "Operar o nível errado: confirmar sempre com radioscopia, nunca pela contagem palpatória.",
      ],
    },
    {
      n: 7,
      title: "Via anterior — enxerto/dispositivo intersomático, placa e artrodese",
      detail:
        "Distração cuidadosa (pinos de Caspar) para restaurar a altura discal e a lordose. Preparar os platôs preservando o osso subcondral. Posicionar enxerto tricortical de ilíaco, aloenxerto ou dispositivo intersomático de altura adequada, ligeiramente recuado em relação à margem anterior. Placa anterior bloqueada com parafusos convergentes e bicorticais quando indicado, evitando invadir o espaço discal adjacente. Confirmar posicionamento em radioscopia nos dois planos antes do fechamento. Hemostasia meticulosa e dreno.",
      figureId: "trauma-cervical-subaxial:acdf",
      figureVariant: "4",
      tips: [
        "Sobredistrair produz dor, disfagia e falência do enxerto — restaurar a altura, não exagerá-la.",
        "A placa deve ficar a pelo menos 5 mm do espaço discal adjacente para reduzir ossificação e degeneração do segmento.",
        "Na luxação irredutível com hérnia: discectomia primeiro, enxerto com placa de contenção, e só então a redução posterior — evita um terceiro tempo anterior.",
      ],
      pitfalls: [
        "Enxerto proeminente anteriormente — disfagia e erosão esofágica.",
        "Confiar na fixação anterior isolada em lesão em três colunas ou em coluna anquilosada: falência previsível.",
        "Deixar de reconhecer a extrusão do enxerto na radioscopia final.",
      ],
    },
    {
      n: 8,
      title: "Via posterior — redução aberta e parafusos de massa lateral",
      detail:
        "Decúbito ventral com fixação craniana e tração mantida, cabeça em posição neutra. Acesso pela linha média, exposição subperiosteal até a borda lateral das massas laterais. Redução aberta com pinças nos processos espinhosos e, quando necessário, facetectomia parcial da faceta cavalgada. Parafusos de massa lateral pela técnica de Magerl: entrada 1 mm medial e inferior ao centro da massa lateral, trajetória 25° lateral e 30° cranial, paralela à superfície facetária. A divergência lateral afasta o parafuso da artéria vertebral; a angulação cranial poupa a raiz.",
      figureId: "trauma-cervical-subaxial:via-posterior",
      tips: [
        "Quando a redução fechada falhou, a facetectomia parcial da faceta superior cavalgada quase sempre resolve.",
        "Preservar a cápsula facetária do nível caudal adjacente à instrumentação.",
        "Em C7, o parafuso pedicular costuma ser preferível à massa lateral, que é fina nesse nível.",
      ],
      pitfalls: [
        "Trajetória medial — o erro que atinge a artéria vertebral e o canal.",
        "Trajetória caudal — atinge a raiz que sai imediatamente abaixo da massa lateral.",
        "Redução posterior sem RM prévia em luxação: risco de empurrar disco extruso contra a medula.",
        "Desinserir o semiespinhal do axis em C2 sem reinserção — cifose e dor cervical persistentes.",
      ],
    },
    {
      n: 9,
      title: "Verificação final e transição para a reabilitação",
      detail:
        "Radioscopia em dois planos confirmando redução, alinhamento sagital e posição dos implantes. Exame neurológico documentado imediatamente após a extubação e comparado ao basal. Radiografia em perfil ortostática antes da alta. Avaliar via aérea antes de extubar após tempo anterior prolongado ou combinado — o edema pré-vertebral é a causa de obstrução tardia. Definir a órtese e o plano de seguimento antes da alta.",
      tips: [
        "Comparar o exame pós-operatório ao basal documentado — só assim uma mudança tem significado.",
        "A radiografia ortostática revela perdas de redução que a imagem em decúbito esconde.",
        "Paresia de C5 pode surgir dias após a descompressão e costuma ser autolimitada; informar o paciente antecipadamente evita alarme.",
      ],
      pitfalls: [
        "Extubar precocemente após via anterior extensa ou combinada — obstrução por edema.",
        "Alta sem radiografia ortostática e sem plano de seguimento definido.",
        "Atribuir todo déficit novo ao implante sem excluir hematoma ou perda de redução.",
      ],
    },
  ],
  postop: {
    immobilization:
      "Após fixação com instrumentação estável em um ou dois níveis: colar cervical macio ou rígido por conforto, por 2–6 semanas, retirado progressivamente. Após construções longas, coluna anquilosada, osteoporose grave ou qualidade óssea duvidosa: colar rígido por 6–12 semanas, eventualmente halo-colete em casos selecionados. No tratamento conservador (SLIC ≤ 3): colar cervical rígido por 6–12 semanas, com radiografias dinâmicas ao término para confirmar estabilidade antes de liberar.",
    weightBearing:
      "Não se aplica descarga de peso no sentido do membro. A mobilização é o equivalente funcional: sentar e deambular no 1º dia pós-operatório com o colar prescrito, conforme a tolerância e o estado neurológico. Restrições vigentes até a consolidação: não elevar mais de 2–3 kg, não fletir ou rodar o pescoço além do arco confortável, e nada de esforço axial. Na lesão medular, a mobilização é progressiva e centrada na prevenção de úlcera de pressão, trombose venosa e hipotensão ortostática.",
    rehab: [
      {
        window: "0–2 semanas",
        weightBearing: "Mobilização precoce com colar; sem carga axial nem manipulação cervical",
        focus:
          "Cuidados com a ferida e o colar; controle da dor e da disfagia (dieta progressiva após via anterior); higiene respiratória; profilaxia de trombose venosa; deambulação assistida; exame neurológico seriado. Na lesão medular: prevenção de úlcera, manejo vesical e intestinal, posicionamento.",
      },
      {
        window: "2–6 semanas",
        weightBearing: "Desmame do colar conforme a construção; atividades leves de vida diária",
        focus:
          "Isometria cervical suave; amplitude ativa dentro do conforto após liberação do colar; escápula e postura; retorno ao trabalho sedentário por volta de 4–6 semanas. Radiografia de controle para verificar manutenção da redução.",
      },
      {
        window: "6–12 semanas",
        weightBearing: "Sem colar na maioria das construções; carga progressiva de membros superiores",
        focus:
          "Ganho de amplitude e fortalecimento progressivo da musculatura cervical profunda e escapular; correção postural; condicionamento aeróbico. Confirmar sinais radiográficos iniciais de consolidação antes de progredir a resistência.",
      },
      {
        window: "3–6 meses",
        weightBearing: "Livre, conforme consolidação demonstrada",
        focus:
          "Fortalecimento pleno, retorno a trabalho braçal e atividade física de impacto conforme consolidação e ausência de dor. Reavaliar deglutição e voz se sintomas persistirem após via anterior — encaminhar à otorrinolaringologia se houver rouquidão além de 6 semanas.",
      },
      {
        window: "6–12 meses",
        weightBearing: "Livre",
        focus:
          "Retorno ao esporte de contato apenas com artrodese consolidada, alinhamento mantido, amplitude simétrica e ausência de déficit. Reabilitação neurológica continuada na lesão medular, com reavaliação funcional periódica.",
      },
    ],
    followup:
      "Radiografias em AP e perfil ortostáticos com 2 e 6 semanas, 3, 6 e 12 meses. Radiografias dinâmicas em flexão-extensão aos 3 meses (ou ao término do tratamento conservador) para confirmar estabilidade e consolidação. TC quando houver dúvida sobre a artrodese aos 6–12 meses, ou suspeita de falência de implante. Exame neurológico documentado em cada retorno, com escala ASIA nos pacientes com lesão medular. Reavaliar angio-TC no seguimento apenas se houver lesão da artéria vertebral em tratamento antitrombótico. Sinais de alerta que antecipam o retorno: dor cervical crescente, disfagia progressiva, rouquidão persistente, e qualquer déficit novo.",
  },
  complications: [
    {
      name: "Deterioração neurológica após redução",
      detail:
        "Agravamento do déficit durante ou após a manobra de redução, atribuído classicamente à hérnia discal traumática empurrada contra a medula. É rara quando a redução fechada é feita precocemente em paciente examinável — aproximadamente 1% das séries —, mas é o desfecho mais temido do tratamento.",
      prevention:
        "Estratificar pelo exame: reduzir de forma seriada apenas em paciente acordado e examinável, com exame neurológico a cada incremento de peso; RM antes da redução em todo paciente não avaliável e antes de qualquer redução aberta posterior. Interromper à primeira mudança.",
    },
    {
      name: "Lesão da artéria vertebral",
      detail:
        "Ocorre pelo próprio trauma (fratura atravessando o forame transverso, luxação facetária) ou por iatrogenia (discectomia lateral ao processo uncinado, parafuso com trajetória medial). Frequentemente assintomática quando unilateral com contralateral pérvia; pode causar infarto de tronco ou cerebelo.",
      prevention:
        "Angio-TC nos critérios de rastreio; mapear a entrada da artéria no forame transverso na TC pré-operatória; respeitar o processo uncinado como limite lateral na via anterior; trajetória 25° lateral na massa lateral. Se houver sangramento: tamponar, não explorar às cegas, e completar a fixação antes de tratar a artéria.",
    },
    {
      name: "Lesão do nervo laríngeo recorrente",
      detail:
        "Rouquidão, fadiga vocal e, ocasionalmente, aspiração após a via anterior. A maioria dos casos é transitória, por neuropraxia decorrente da pressão do afastador contra o tubo endotraqueal no sulco traqueoesofágico; a lesão permanente é incomum.",
      prevention:
        "Dissecção romba, afastadores posicionados sob o longo do pescoço e não sobre as vísceras, tempo de afastamento minimizado, desinsuflação e reinsuflação do balonete após a colocação do afastador. Encaminhar à otorrinolaringologia se a rouquidão persistir além de 6 semanas.",
    },
    {
      name: "Lesão esofágica",
      detail:
        "Complicação rara e grave da via anterior, por afastamento vigoroso, instrumento cortante, ou erosão tardia por implante proeminente. O reconhecimento é frequentemente tardio e o desfecho depende disso: mediastinite e sepse quando não identificada.",
      prevention:
        "Afastadores sob o longo do pescoço; inspeção do esôfago antes do fechamento em dissecção difícil; implantes de perfil baixo e bem assentados. Investigar prontamente disfagia progressiva, febre e enfisema subcutâneo no pós-operatório.",
    },
    {
      name: "Disfagia",
      detail:
        "A queixa mais comum após a via anterior. Multifatorial: edema de partes moles, retração prolongada, altura excessiva do enxerto, perfil da placa. Geralmente melhora em semanas a poucos meses.",
      prevention:
        "Minimizar o tempo e a pressão de afastamento; não sobredistrair; usar placas de perfil baixo assentadas rente ao osso; dieta progressiva com fonoaudiologia quando persistente.",
    },
    {
      name: "Falência da fixação e perda de redução",
      detail:
        "Extrusão do enxerto, soltura ou quebra de parafuso, cifose progressiva. O cenário de maior risco é a fixação anterior isolada em lesão em três colunas, em luxação facetária com banda de tensão posterior rompida, ou em coluna anquilosada — onde a construção anterior isolada é biomecanicamente insuficiente.",
      prevention:
        "Reconhecer a competência das colunas antes de escolher a construção: acrescentar fixação posterior quando a banda de tensão posterior está rompida ou a lesão é em três colunas; construções longas na coluna anquilosada; radiografia ortostática antes da alta.",
    },
    {
      name: "Paresia da raiz C5",
      detail:
        "Fraqueza do deltoide e do bíceps que surge tipicamente entre 2 e 7 dias após a descompressão, mais frequente após procedimentos posteriores em múltiplos níveis. Atribuída a tração da raiz pelo deslocamento posterior da medula ou a lesão de reperfusão do corno anterior. A maioria recupera em meses.",
      prevention:
        "Evitar descompressão excessivamente ampla quando desnecessária; foraminotomia profilática em casos selecionados. Reconhecer e informar precocemente: excluir hematoma ou má posição de implante antes de rotular como paresia de C5.",
    },
    {
      name: "Pseudartrose",
      detail:
        "Ausência de consolidação da artrodese, com dor cervical persistente, halo ao redor dos parafusos e mobilidade nas radiografias dinâmicas. Mais frequente em tabagistas, em construções de múltiplos níveis e em fixação anterior isolada de lesões instáveis.",
      prevention:
        "Cessação do tabagismo; preparo cuidadoso dos platôs preservando o osso subcondral; escolha de construção compatível com a instabilidade; fixação posterior complementar quando indicada.",
    },
    {
      name: "Infecção",
      detail:
        "Mais frequente na via posterior do que na anterior, sobretudo em lesão medular, desnutrição e construções longas. Pode manifestar-se tardiamente como soltura de implante ou drenagem persistente.",
      prevention:
        "Antibioticoprofilaxia adequada, hemostasia, manejo cuidadoso das partes moles, e otimização nutricional. Desbridamento precoce com manutenção do implante quando a artrodese ainda não consolidou.",
    },
    {
      name: "Degeneração do segmento adjacente",
      detail:
        "Sintomas radiculares ou mielopáticos em nível adjacente à artrodese, meses a anos depois. Distinguir a progressão da doença degenerativa natural do efeito biomecânico da fusão é difícil e continua em debate.",
      prevention:
        "Preservar a cápsula facetária e o ligamento do nível adjacente; manter a placa a pelo menos 5 mm do espaço discal adjacente; restaurar a lordose e não fundir níveis desnecessários.",
    },
  ],
  evidence: [
    {
      id: "ev-slic-original",
      claim:
        "O SLIC organiza a decisão do trauma cervical subaxial somando morfologia, complexo discoligamentar e estado neurológico, com limiares de ≤ 3 para conservador e ≥ 5 para cirurgia.",
      takeaway:
        "Estudo que definiu o sistema por consenso e o testou em 20 cirurgiões sobre 11 casos, em duas rodadas. A concordância interobservador (CCI) foi de 0,87 para o domínio neurológico, 0,57 para morfologia e apenas 0,49 para o CDL — que permanece o elo frágil. Os avaliadores concordaram com a recomendação do algoritmo em 93,3% dos casos, sustentando a validade de construto. Lição prática: confie no escore para decidir se opera, e desconfie do domínio CDL quando ele isoladamente empurra a soma através do limiar.",
      level: "IV",
      studyType: "Consenso de especialistas com estudo multicêntrico de confiabilidade e validade",
      era: "classico",
      citation: {
        authors:
          "Vaccaro AR, Hulbert RJ, Patel AA, Fisher C, Dvorak M, Lehman RA, Anderson P, Harrop J, Oner FC, Arnold P, Fehlings M, Hedlund R, Madrazo I, Rechtine G, Aarabi B, Shainline M",
        title:
          "The subaxial cervical spine injury classification system: a novel approach to recognize the importance of morphology, neurology, and integrity of the disco-ligamentous complex",
        journal: "Spine (Phila Pa 1976)",
        year: 2007,
        pmid: "17906580",
        doi: "10.1097/BRS.0b013e3181557b92",
      },
    },
    {
      id: "ev-slic-validade",
      claim:
        "Os limiares do SLIC se confirmam na prática real, mas o escore não prevê a via de acesso e a faixa 4 permanece ambígua.",
      takeaway:
        "Validação externa em 185 pacientes consecutivos de um centro de referência. O tratamento recebido coincidiu com a recomendação do SLIC em 93,6% dos casos conservadores e 96,3% dos cirúrgicos; escore médio de 7,14 no grupo operado contra 2,22 no conservador. Com escore ≤ 3, 94% não foram operados; com ≥ 5, 95% foram. Dois achados mudam a prática: entre os pacientes com escore 4, 65% foram tratados sem cirurgia — a zona cinzenta é real e tende ao conservador; e o domínio de morfologia não previu a via de acesso, confirmando que a escolha entre anterior e posterior é uma decisão à parte do escore.",
      level: "III",
      studyType: "Série de casos retrospectiva de validação externa (185 pacientes)",
      era: "atual",
      citation: {
        authors:
          "Samuel S, Lin JL, Smith MM, Hartin NL, Vasili C, Ruff SJ, Cree AK, Ball JR, Sergides IG, Gray R",
        title:
          "Subaxial injury classification scoring system treatment recommendations: external agreement study based on retrospective review of 185 patients",
        journal: "Spine (Phila Pa 1976)",
        year: 2015,
        pmid: "25341989",
        doi: "10.1097/BRS.0000000000000666",
      },
    },
    {
      id: "ev-aospine",
      claim:
        "A classificação AOSpine subaxial descreve a lesão por morfologia hierárquica (A/B/C) com modificadores facetários, neurológicos e de caso, com confiabilidade substancial.",
      takeaway:
        "Sistema desenvolvido por consenso e testado com avaliadores treinados sobre 30 casos em duas rodadas separadas por um mês: kappa intraobservador de 0,75 e interobservador de 0,64 — concordância substancial em ambos. Estrutura espelhada na classificação toracolombar (A compressão, B banda de tensão, C translação), acrescida dos modificadores F para facetas, N para estado neurológico e M para condições que mudam a conduta. O modificador M2 — hérnia discal crítica — é o que codifica formalmente a preocupação com a redução da luxação facetária bilateral. Serve para comunicar e documentar; não substitui o SLIC na decisão.",
      level: "IV",
      studyType: "Consenso de especialistas com avaliação de confiabilidade intra e interobservador",
      era: "atual",
      citation: {
        authors:
          "Vaccaro AR, Koerner JD, Radcliff KE, Oner FC, Reinhold M, Schnake KJ, Kandziora F, Fehlings MG, Dvorak MF, Aarabi B, Rajasekaran S, Schroeder GD, Kepler CK, Vialle LR",
        title: "AOSpine subaxial cervical spine injury classification system",
        journal: "Eur Spine J",
        year: 2016,
        pmid: "25716661",
        doi: "10.1007/s00586-015-3831-3",
      },
    },
    {
      id: "ev-reducao-fechada-segura",
      claim:
        "A redução fechada precoce em paciente examinável é segura e não precisa esperar pela RM, mesmo sendo alta a prevalência de lesão discal.",
      takeaway:
        "Série de 82 pacientes com subluxação cervical submetidos a redução fechada rápida com tração de Gardner-Wells e controle radiográfico seriado. A redução foi obtida em 97,6% dos casos, em tempo médio de 2,1 horas. Na RM pós-redução (80 pacientes), havia hérnia discal em 22% e ruptura discal em 24% — mas a presença de qualquer uma delas não afetou a recuperação neurológica medida por ASIA e Frankel. Apenas 1 paciente (1,3%) deteriorou, e mais de 6 horas após a redução. Conclusão dos autores: em pacientes com déficit motor significativo, reduzir precocemente sem RM prévia. É a base da conduta atual — desde que o paciente possa ser examinado durante a manobra.",
      level: "IV",
      studyType: "Série de casos retrospectiva (82 pacientes)",
      era: "classico",
      citation: {
        authors: "Grant GA, Mirza SK, Chapman JR, Winn HR, Newell DW, Jones DT, Grady MS",
        title: "Risk of early closed reduction in cervical spine subluxation injuries",
        journal: "J Neurosurg",
        year: 1999,
        pmid: "10413120",
        doi: "10.3171/spi.1999.90.1.0013",
      },
    },
    {
      id: "ev-rm-pre-reducao",
      claim:
        "A hérnia discal traumática coexiste frequentemente com a luxação facetária, e a redução na sua presença pode agravar a compressão medular.",
      takeaway:
        "Série clássica de 13 pacientes com facetas travadas uni ou bilaterais estudados por RM. A coexistência de hérnia discal foi a regra, não a exceção: nos 8 casos de uma instituição, 5 tinham hérnia franca com fragmento no canal e 3 tinham abaulamento patológico; os 5 casos das demais instituições tinham hérnia concomitante. Nos primeiros 9 pacientes, a redução fechada imediata foi tentada e só teve êxito em 3, sendo abandonada em 3 por deterioração clínica; nos 4 seguintes, obteve-se RM antes de qualquer tentativa. É o contraponto histórico ao trabalho de Grant, e a origem da conduta de obter RM antes da redução — hoje reservada ao paciente não avaliável (AOSpine NX/M2), em que o exame seriado não está disponível como salvaguarda.",
      level: "IV",
      studyType: "Série de casos retrospectiva (13 pacientes)",
      era: "classico",
      citation: {
        authors: "Doran SE, Papadopoulos SM, Ducker TB, Lillehei KO",
        title:
          "Magnetic resonance imaging documentation of coexistent traumatic locked facets of the cervical spine and disc herniation",
        journal: "J Neurosurg",
        year: 1993,
        pmid: "8360729",
        doi: "10.3171/jns.1993.79.3.0341",
      },
    },
  ],
  pearls: [
    "A pergunta que decide a RM antes da redução não é sobre a lesão, é sobre o paciente: 'consigo examiná-lo durante a manobra?'. Acordado e cooperativo → reduzir primeiro. Sedado, intubado, TCE, intoxicado (NX) → RM primeiro.",
    "O SLIC decide SE opera; não decide COMO. A validação externa mostrou explicitamente que o domínio de morfologia não prevê a via de acesso.",
    "Escore SLIC 4 é uma zona cinzenta por desenho, não por falha do sistema — e na prática real 65% desses pacientes acabaram tratados sem cirurgia.",
    "O processo uncinado é o limite lateral absoluto da discectomia anterior: a artéria vertebral corre imediatamente lateral a ele.",
    "Na massa lateral, a trajetória é 25° lateral e 30° cranial: lateral foge da artéria vertebral, cranial poupa a raiz. Todo erro perigoso é medial ou caudal.",
    "A luxação facetária se revela no sagital paramediano da TC, não no sagital mediano — avaliar cada faceta separadamente e procurar o 'hambúrguer invertido'.",
    "Translação ≈ 25% sugere luxação unilateral; ≈ 50% sugere bilateral. Unilateral costuma dar radiculopatia; bilateral costuma dar lesão medular.",
    "Coluna anquilosada (espondilite anquilosante, DISH) muda todas as regras: fratura sutil, lesão altamente instável, tração perigosa, e fixação longa anterior e posterior.",
    "O domínio CDL é o de menor confiabilidade do SLIC (CCI 0,49 no estudo original) — quando é ele que empurra a soma através do limiar, obter a RM antes de decidir.",
    "Documentar o exame neurológico ASIA antes de sedar ou intubar: esse registro determina a conduta seguinte e é a referência de toda mudança.",
  ],
  pitfalls: [
    "Adiar a redução em paciente examinável com déficit motor para 'esperar a RM' — troca-se a descompressão precoce, que é o que muda o desfecho, por uma informação que não mudaria a conduta imediata.",
    "Reduzir às cegas um paciente intubado por politrauma: é o cenário exato do agravamento iatrogênico descrito por Doran.",
    "Sedar profundamente durante a tração seriada — anula o exame neurológico, que é a única salvaguarda do método.",
    "Usar o escore SLIC para escolher a via de acesso.",
    "Fixação anterior isolada em lesão em três colunas, em luxação com banda de tensão posterior rompida, ou em coluna anquilosada: falência biomecanicamente previsível.",
    "Ultrapassar lateralmente o processo uncinado na discectomia — lesão da artéria vertebral.",
    "Parafuso de massa lateral com trajetória medial (artéria vertebral e canal) ou caudal (raiz).",
    "Aceitar radiografia simples para excluir lesão no trauma significativo, ou ler apenas o sagital mediano e perder a incongruência facetária unilateral.",
    "Não reconhecer a lesão vertebral não contígua — presente em 10–15% dos casos — e distrair o segmento errado durante a tração.",
    "Sobredistrair na tração (> 1,5 cm de abertura discal ou facetária) ou insistir com pesos crescentes numa luxação irredutível em vez de converter para redução aberta.",
    "Deixar de solicitar angio-TC quando a fratura atravessa o forame transverso ou há luxação facetária.",
    "Extubar precocemente após via anterior extensa ou combinada, ignorando o edema pré-vertebral.",
    "Corticoide em alta dose de rotina na lesão medular aguda: benefício não demonstrado e dano documentado.",
  ],
  figures: [
    {
      id: "trauma-cervical-subaxial:anatomia",
      caption:
        "Coluna cervical subaxial. A: segmento C4–C6 em perfil — corpos, discos, massas laterais com facetas oblíquas a ~45°, canal e medula. B: corte axial em C5 — processos uncinados, artéria vertebral no forame transverso, medula no canal e raízes emergindo pelos forames.",
      alt: "Diagrama em duas partes: à esquerda, três vértebras cervicais em perfil com discos, medula no canal e massas laterais; à direita, corte axial de uma vértebra cervical mostrando corpo, processos uncinados, artérias vertebrais nos forames transversos, medula no canal e arco posterior com processo espinhoso bífido.",
      kind: "diagram",
      source: {
        label: "Ilustração original — Revisortopedia",
        reference: "Rockwood and Green's Fractures in Adults, 10a ed. (2024) / Campbell's Operative Orthopaedics 14a",
      },
    },
    {
      id: "trauma-cervical-subaxial:slic",
      caption:
        "Escore SLIC: os três domínios (morfologia 0–4, complexo discoligamentar 0–2, estado neurológico 0–3 com +1 para compressão contínua) e os limiares de conduta — ≤ 3 conservador, 4 zona cinzenta, ≥ 5 cirurgia.",
      alt: "Diagrama de pontuação com três tabelas lado a lado listando morfologia, complexo discoligamentar e status neurológico com seus respectivos pontos, sobre uma barra numerada de 0 a 10 marcando as faixas de tratamento conservador, indefinido e cirúrgico.",
      kind: "diagram",
      source: {
        label: "Ilustração original — Revisortopedia",
        reference: "Vaccaro et al., Spine 2007 (SLIC)",
      },
    },
    {
      id: "trauma-cervical-subaxial:aospine",
      caption:
        "Classificação AOSpine subaxial por morfologia: tipo A (compressão, banda de tensão íntegra), tipo B (falência da banda de tensão, com afastamento interespinhoso) e tipo C (translação em qualquer plano).",
      alt: "Três painéis com pares de vértebras cervicais em perfil: à esquerda, corpo superior com traços de fratura por compressão; ao centro, afastamento entre os processos espinhosos indicando ruptura da banda de tensão posterior; à direita, vértebra superior transladada anteriormente com disco rompido.",
      kind: "diagram",
      source: {
        label: "Ilustração original — Revisortopedia",
        reference: "Vaccaro et al., Eur Spine J 2016 (AOSpine subaxial)",
      },
    },
    {
      id: "trauma-cervical-subaxial:luxacao-facetaria",
      caption:
        "Luxação facetária subaxial: alinhamento normal, luxação unilateral com translação de aproximadamente 25% do corpo vertebral (flexão-rotação) e luxação bilateral com aproximadamente 50% (flexão-distração).",
      alt: "Três painéis comparando pares de vértebras cervicais em perfil com a medula no canal: alinhamento congruente; translação anterior de cerca de um quarto do corpo com faceta cavalgada; e translação de cerca de metade do corpo com disco rompido.",
      kind: "diagram",
      source: {
        label: "Ilustração original — Revisortopedia",
        reference: "Rockwood and Green's Fractures in Adults, 10a ed. (2024)",
      },
    },
    {
      id: "trauma-cervical-subaxial:rm-pre-reducao",
      caption:
        "Hérnia discal traumática associada à luxação facetária: fragmento discal extruso ocupa o canal e indenta a medula anteriormente. Em paciente não avaliável, a RM precede a redução; em paciente examinável, o exame neurológico seriado é o monitor e a redução vem primeiro.",
      alt: "Esquema sagital de segmento cervical luxado com o disco rompido e um fragmento extruso projetando-se posteriormente para dentro do canal, deformando o contorno anterior da medula.",
      kind: "diagram",
      source: {
        label: "Ilustração original — Revisortopedia",
        reference: "Doran et al., J Neurosurg 1993; Grant et al., J Neurosurg 1999",
      },
    },
    {
      id: "trauma-cervical-subaxial:via-anterior",
      caption:
        "Via anterior de Smith-Robinson em corte axial: o acesso segue o intervalo entre a bainha carotídea lateralmente e traqueia e esôfago medialmente, com o nervo laríngeo recorrente no sulco traqueoesofágico e a artéria vertebral como limite lateral.",
      alt: "Corte axial esquemático do pescoço em C5 mostrando traqueia e esôfago na linha média, bainhas carotídeas e esternocleidomastóideos lateralmente, corpo vertebral e medula posteriormente, com seta tracejada indicando o intervalo de acesso entre as vísceras e a bainha carotídea.",
      kind: "diagram",
      source: {
        label: "Ilustração original — Revisortopedia",
        reference: "Campbell's Operative Orthopaedics, 14a ed. (2021)",
      },
    },
    {
      id: "trauma-cervical-subaxial:acdf",
      caption:
        "Discectomia e artrodese cervical anterior (ACDF) passo a passo: discectomia completa, descompressão do canal com remoção do fragmento extruso, enxerto ou dispositivo intersomático sob distração e placa anterior bloqueada.",
      alt: "Segmento cervical em perfil com a medula no canal, mostrando progressivamente o espaço discal esvaziado, o fragmento posterior removido, um enxerto retangular no espaço intersomático e uma placa anterior fixada com dois parafusos convergentes.",
      kind: "diagram",
      source: {
        label: "Ilustração original — Revisortopedia",
        reference: "Campbell's Operative Orthopaedics, 14a ed. (2021)",
      },
    },
    {
      id: "trauma-cervical-subaxial:via-posterior",
      caption:
        "Parafuso de massa lateral pela técnica de Magerl em corte axial: entrada 1 mm medial ao centro da massa lateral e trajetória 25° lateral, que afasta o parafuso da artéria vertebral. A trajetória medial, em tracejado, é o erro que atinge a artéria e a raiz.",
      alt: "Corte axial de vértebra cervical mostrando as artérias vertebrais nos forames transversos, a medula no canal, os pontos de entrada nas massas laterais e as trajetórias divergentes dos parafusos, com uma trajetória medial incorreta destacada em direção à artéria vertebral.",
      kind: "diagram",
      source: {
        label: "Ilustração original — Revisortopedia",
        reference: "Campbell's Operative Orthopaedics, 14a ed. (2021)",
      },
    },
  ],
  meta: {
    lastReviewed: "2026-07-14",
    sources: [
      "Rockwood and Green's Fractures in Adults, 10a ed. (2024) — trauma da coluna cervical subaxial",
      "Campbell's Operative Orthopaedics, 14a ed. (2021) — vias de acesso e instrumentação cervical",
      "Hebert & Lech, Ortopedia e Traumatologia: princípios e prática, 6a ed. (2025)",
      "Vaccaro AR et al. The subaxial cervical spine injury classification system. Spine. 2007;32(21):2365-74. PMID 17906580",
      "Samuel S et al. Subaxial injury classification scoring system treatment recommendations: external agreement study. Spine. 2015;40(3):137-42. PMID 25341989",
      "Vaccaro AR et al. AOSpine subaxial cervical spine injury classification system. Eur Spine J. 2016;25(7):2173-84. PMID 25716661",
      "Grant GA et al. Risk of early closed reduction in cervical spine subluxation injuries. J Neurosurg. 1999;90(1 Suppl):13-8. PMID 10413120",
      "Doran SE et al. MRI documentation of coexistent traumatic locked facets of the cervical spine and disc herniation. J Neurosurg. 1993;79(3):341-5. PMID 8360729",
      "Park JH, Roh SW, Rhim SC. A single-stage posterior approach with open reduction and pedicle screw fixation in subaxial cervical facet dislocations. J Neurosurg Spine. 2015;23(1):35-41. PMID 25909272",
      "Silva OT et al. Evaluation of the reliability and validity of the newer AOSpine subaxial cervical injury classification (C-3 to C-7). J Neurosurg Spine. 2016;25(3):303-8. PMID 27104288",
    ],
    attribution:
      "Conteúdo autoral em pt-BR, elaborado a partir da bibliografia de referência. Figuras originais em line-art, sem reprodução de material protegido por direitos autorais.",
    figureReference:
      "Rockwood and Green's Fractures in Adults, 10a ed. (2024) / Campbell's Operative Orthopaedics 14a",
  },
});
