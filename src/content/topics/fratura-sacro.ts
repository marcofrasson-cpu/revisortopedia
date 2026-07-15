import { defineTopic } from "../../types/topic";

/* Fratura do sacro — a transição mecânica entre a coluna e o anel pélvico.
   Ênfase em Denis (zonas I-III e risco neurológico crescente), Roy-Camille
   (transversas em U/H — dissociação espinopélvica), exame das raízes sacrais
   e esfíncteres, e na escolha entre parafuso iliossacral percutâneo e fixação
   lombopélvica (triangular). Evidência verificada no PubMed (DOIs/PMIDs
   reais citados). */
export const topic = defineTopic({
  id: "col-sacro-fratura",
  slug: "fratura-sacro",
  regionId: "coluna",
  bone: "Sacro",
  injury: "Fratura sacral",
  title: "Fratura do sacro",
  subtitle:
    "Da zona de Denis à dissociação espinopélvica — reconhecer o déficit neurológico e escolher a fixação certa.",
  laterality: null,
  status: "complete",

  overview:
    "O sacro é a peça de transição entre a coluna e o anel pélvico: toda a carga axial do tronco atravessa o corpo de S1 e se divide pelas articulações sacroilíacas até os acetábulos. Uma fratura sacral, portanto, quase nunca é um evento isolado — é, na maioria das vezes, o componente posterior de uma lesão do anel pélvico e o verdadeiro determinante da instabilidade.\n\nDuas populações muito distintas se apresentam com a mesma fratura. No jovem politraumatizado, o mecanismo é de alta energia (queda de altura, colisão, atropelamento) e a fratura vem acompanhada de choque, lesões associadas e rebaixamento do nível de consciência — contexto em que o diagnóstico é classicamente perdido. No idoso osteoporótico, a mesma fratura ocorre por insuficiência, após trauma mínimo ou nenhum, e se manifesta apenas como dor lombossacral incapacitante.\n\nDenis, revisando 236 casos, mostrou dois pontos que permanecem centrais: as radiografias simples de pelve são quase inúteis para identificar a lesão, e o risco neurológico é previsível pela topografia do traço — cerca de 6% na zona I (ala), 28% na zona II (transforaminal) e 57% na zona III (canal central). A tomografia com reconstruções coronais e sagitais é obrigatória, e o perfil do sacro é a incidência que revela a fratura transversa alta.\n\nQuando uma fratura transversa se soma a traços verticais bilaterais, surge o padrão em U ou H: o segmento superior do sacro — solidário à coluna — se dissocia da pelve. É a dissociação espinopélvica, lesão altamente instável, com déficit neurológico frequente e que, se ignorada, evolui para cifose sacral progressiva, desequilíbrio sagital e dor crônica. A decisão terapêutica gira em torno de uma pergunta prática: a montagem precisa neutralizar apenas o anel posterior (parafuso iliossacral) ou também a coluna sobre a pelve (fixação lombopélvica / triangular)?",

  keyFacts: [
    { label: "Contexto", value: "Componente posterior de ~45% das lesões do anel pélvico" },
    { label: "Déficit — Denis I", value: "~6% (raiz de L5 sobre a ala)" },
    { label: "Déficit — Denis II", value: "~28% (ciatalgia, raízes S1-S2)" },
    { label: "Déficit — Denis III", value: "~57% (esfíncteres, anestesia em sela)" },
    { label: "Imagem-chave", value: "TC com reconstruções + perfil do sacro" },
    { label: "Sinal de alerta", value: "Fratura transversa = dissociação espinopélvica" },
    { label: "Exame obrigatório", value: "Tônus anal, sensibilidade em sela, bulbocavernoso" },
    { label: "Escolha da fixação", value: "Anel posterior → parafuso IS; espinopélvica → lombopélvica" },
  ],

  anatomy: {
    text:
      "O sacro é formado por cinco vértebras fundidas em uma cunha triangular de base superior (promontório / platô de S1) e ápice inferior (articulação sacrococcígea). É côncavo anteriormente e transmite a carga axial do tronco ao anel pélvico pelas articulações sacroilíacas — suspenso entre os ilíacos pelos ligamentos sacroilíacos posteriores e interósseos, os mais fortes do corpo, auxiliados pelos ligamentos sacroespinhoso e sacrotuberoso.\n\nO canal sacral contém a porção distal da cauda equina; o saco dural termina tipicamente em S2 e o filamento terminal desce até o cóccix. Quatro pares de forames anteriores e posteriores dão passagem às raízes de S1 a S4, que convergem e diminuem de calibre no sentido distal. A raiz de L5 não passa por forame sacral: ela cruza a face anterior da ala, apoiada sobre o osso — razão pela qual um traço na zona I pode lesá-la.\n\nA topografia das raízes explica a classificação de Denis. Lateral aos forames (zona I) está apenas a ala e, sobre ela, L5. Através dos forames (zona II) transitam S1 e S2, cuja lesão produz ciatalgia e déficit motor distal, mas raramente disfunção vesical. Medial aos forames (zona III) está o canal central, com as raízes de S2 a S4 — responsáveis pela inervação parassimpática da bexiga e do reto, pelo controle esfincteriano, pela função sexual e pela sensibilidade da região perineal. Daí a regra clínica: zona III é a zona dos esfíncteres.\n\nDois detalhes anatômicos comandam a técnica percutânea. Primeiro, o corredor ósseo de S1 — o túnel entre o platô superior, o canal e a raiz de L5 — por onde o parafuso iliossacral deve passar. Segundo, o dismorfismo sacral, presente em cerca de um terço da população: alas com inclinação acentuada, S1 não recuado em relação às cristas ilíacas, processos mamilares e disco residual entre S1 e S2. No sacro displásico o corredor de S1 é estreito e oblíquo, obrigando a uma trajetória oblíqua ou ao uso do corredor de S2 sob risco de perfuração alar e lesão de L5.",
    figureIds: [
      "fratura-sacro:anatomia",
      "fratura-sacro:raizes-sacrais",
      "fratura-sacro:corredor-s1",
    ],
  },

  classification: [
    {
      id: "denis",
      name: "Denis (1988)",
      basis:
        "Topografia do traço vertical em relação aos forames sacrais, em vista anteroposterior / TC coronal.",
      note:
        "É a classificação de referência porque correlaciona anatomia e risco neurológico: o déficit cresce de lateral para medial (~6% → ~28% → ~57%). Não descreve o traço transverso nem a estabilidade espinopélvica — para isso usa-se Roy-Camille.",
      types: [
        {
          code: "Zona I",
          label: "Alar — lateral aos forames",
          description:
            "Traço através da ala do sacro, poupando forames e canal. É a zona mais frequente. O déficit é incomum (~6%) e, quando presente, decorre da tração ou compressão da raiz de L5, que cruza a face anterior da ala — dorsiflexão do hálux fraca. Impacção alar significativa pode reduzir o corredor de S1.",
          figureId: "fratura-sacro:denis",
          figureVariant: "I",
        },
        {
          code: "Zona II",
          label: "Transforaminal",
          description:
            "Traço através de um ou mais forames sacrais, sem atingir o canal central. Déficit em cerca de 28% dos casos, tipicamente unilateral, com ciatalgia e comprometimento de S1-S2 (flexão plantar, reflexo aquileu); a disfunção vesical é rara. Padrão associado à instabilidade vertical e ao risco de lesão radicular na compressão do foco.",
          figureId: "fratura-sacro:denis",
          figureVariant: "II",
        },
        {
          code: "Zona III",
          label: "Central — canal sacral",
          description:
            "Traço medial aos forames, atingindo o canal central e as raízes de S2 a S4. É a zona de maior risco: cerca de 57% têm déficit, com anestesia em sela, perda do tônus esfincteriano, bexiga neurogênica e disfunção sexual. Denis recomendava cistometrografia de rotina nessas lesões. Frequentemente coexiste com traço transverso (padrão U/H).",
          figureId: "fratura-sacro:denis",
          figureVariant: "III",
        },
      ],
    },
    {
      id: "roy-camille",
      name: "Roy-Camille (1985), modificada por Strange-Vognsen & Lebech",
      basis:
        "Desvio do fragmento superior nas fraturas transversas altas (S1-S2), avaliado no perfil do sacro / TC sagital.",
      note:
        "Aplica-se ao traço transverso da 'fratura do suicida' (queda de altura com carga axial em flexão). Quando o traço transverso se combina a traços verticais bilaterais, configura-se a dissociação espinopélvica (padrão em U ou H). O tipo IV foi acrescentado por Strange-Vognsen e Lebech.",
      types: [
        {
          code: "Tipo I",
          label: "Angulação em flexão, sem translação",
          description:
            "O fragmento superior báscula em flexão (cifose sacral) mantendo o contato ósseo, sem deslocamento no plano horizontal. É o padrão menos desviado; a redução se obtém com extensão / hiperlordose e a fixação pode ser percutânea quando a redução é anatômica.",
          figureId: "fratura-sacro:roy-camille",
          figureVariant: "I",
        },
        {
          code: "Tipo II",
          label: "Flexão + translação posterior",
          description:
            "Angulação em flexão associada a deslocamento posterior do fragmento superior. Há estreitamento do canal e maior taxa de lesão da cauda equina; a redução exige tração e manobra de extensão, e a montagem geralmente precisa ser lombopélvica.",
          figureId: "fratura-sacro:roy-camille",
          figureVariant: "II",
        },
        {
          code: "Tipo III",
          label: "Translação anterior completa",
          description:
            "Deslocamento anterior integral do fragmento superior, sem angulação residual — o padrão mais desviado e mais instável, com risco máximo de lesão neurológica. Exige redução aberta ou percutânea assistida e fixação lombopélvica.",
          figureId: "fratura-sacro:roy-camille",
          figureVariant: "III",
        },
        {
          code: "Tipo IV",
          label: "Cominuição de S1 (Strange-Vognsen & Lebech)",
          description:
            "Fratura cominutiva do corpo de S1 por carga axial pura, com pouco ou nenhum desvio do fragmento superior. Pode cursar com fragmentos retropulsados no canal; a instabilidade é sobretudo em compressão e a montagem lombopélvica atua como neutralização em carga compartilhada.",
          figureId: "fratura-sacro:roy-camille",
          figureVariant: "IV",
        },
      ],
    },
    {
      id: "padroes-transversos",
      name: "Padrões da dissociação espinopélvica",
      basis:
        "Morfologia da combinação entre o traço transverso e os traços verticais, na TC com reconstrução coronal.",
      note:
        "Descritiva e complementar a Roy-Camille. Todos os padrões dissociam mecanicamente a coluna da pelve e compartilham a mesma lógica de tratamento: restaurar o alinhamento sagital e fixar a coluna ao ílio.",
      types: [
        {
          code: "U",
          label: "Verticais bilaterais + transversa contida",
          description:
            "Padrão clássico da queda de altura ('fratura do saltador suicida'). O segmento de S1 fica completamente dissociado da pelve, funcionalmente equivalente a uma espondilolistese traumática do sacro. Déficit neurológico descrito em até 80% das séries.",
          figureId: "fratura-sacro:padroes-transversos",
          figureVariant: "U",
        },
        {
          code: "H",
          label: "Verticais bilaterais + transversa completa",
          description:
            "Variante em que o traço transverso atravessa toda a largura do sacro, separando também as alas. Mecanicamente é o padrão mais instável do grupo, com perda de qualquer continuidade entre o segmento superior e o anel pélvico.",
          figureId: "fratura-sacro:padroes-transversos",
          figureVariant: "H",
        },
        {
          code: "λ",
          label: "Vertical unilateral + transversa",
          description:
            "Traço transverso associado a apenas um traço vertical. A dissociação é assimétrica: um lado permanece em continuidade com a pelve, o que permite, em casos selecionados, fixação lombopélvica unilateral.",
          figureId: "fratura-sacro:padroes-transversos",
          figureVariant: "lambda",
        },
        {
          code: "T",
          label: "Transversa + vertical medial descendente",
          description:
            "Traço transverso com prolongamento vertical na linha média em direção distal. Costuma comprometer o canal central (Denis III) e cursa com disfunção esfincteriana.",
          figureId: "fratura-sacro:padroes-transversos",
          figureVariant: "T",
        },
      ],
    },
    {
      id: "gibbons",
      name: "Gibbons — déficit da cauda equina",
      basis:
        "Gradação clínica do comprometimento neurológico; é o desfecho usado na maioria das séries de fratura sacral.",
      note:
        "Deve ser registrada na admissão e em cada reavaliação — a progressão do grau é um dos poucos gatilhos consensuais para descompressão. A classificação AOSpine do sacro (2016) complementa, separando lesões sem instabilidade espinopélvica (A), do anel pélvico posterior (B) e com instabilidade espinopélvica (C).",
      types: [
        {
          code: "1",
          label: "Sem déficit",
          description: "Exame neurológico normal, incluindo tônus esfincteriano e sensibilidade perineal.",
        },
        {
          code: "2",
          label: "Parestesias isoladas",
          description: "Apenas alterações sensitivas, sem déficit motor e sem disfunção vesical ou intestinal.",
        },
        {
          code: "3",
          label: "Déficit motor, esfíncteres preservados",
          description:
            "Perda motora objetiva (dorsiflexão, flexão plantar) com continência e função vesical mantidas.",
        },
        {
          code: "4",
          label: "Disfunção vesical / intestinal",
          description:
            "Bexiga neurogênica, incontinência ou retenção, com ou sem anestesia em sela. É o grau de pior prognóstico funcional e o mais associado à zona III de Denis.",
        },
      ],
    },
  ],

  indications: {
    operative: [
      "Dissociação espinopélvica (padrão em U, H, λ ou T) — instabilidade por definição.",
      "Roy-Camille II e III (translação posterior ou anterior do fragmento superior).",
      "Cifose sacral significativa com perda do alinhamento sagital lombopélvico.",
      "Instabilidade vertical do anel pélvico (Tile C) com componente sacral.",
      "Deslocamento do traço vertical acima de ~1 cm, sobretudo na zona II.",
      "Déficit neurológico progressivo ou de instalação após redução / manipulação.",
      "Déficit de cauda equina (Gibbons 4) com fragmento ou desvio compressivo identificado na TC.",
      "Fratura por insuficiência com dor incapacitante refratária e imobilizante no idoso, ou padrão instável / desviado (Rommens-Hofmann III-IV).",
      "Fratura exposta, lesão de partes moles posterior (Morel-Lavallée infectado) ou incapacidade de mobilizar o politraumatizado.",
    ],
    nonOperative: [
      "Fratura isolada da zona I sem desvio, com anel pélvico estável.",
      "Fratura transversa distal (abaixo de S3-S4) sem compromisso do canal.",
      "Roy-Camille I com angulação mínima e exame neurológico normal.",
      "Fratura por insuficiência do idoso com dor controlável (EVA ≤ 5) e capacidade de mobilizar.",
      "Fratura da zona III sem desvio e sem progressão do déficit — consolidam de forma consistente, mas sequelas esfincterianas residuais são frequentes.",
      "Paciente com contraindicação clínica proibitiva à cirurgia.",
    ],
    decisionNotes:
      "A decisão se organiza em três perguntas sucessivas. Primeira: existe dissociação espinopélvica? Um traço transverso na TC sagital ou no perfil do sacro muda a lesão de categoria — não basta fixar o anel posterior, é preciso reconectar a coluna à pelve, e a montagem passa a ser lombopélvica ou triangular. Segunda: o anel pélvico é instável verticalmente? Se sim, o componente posterior precisa de fixação, e o parafuso iliossacral percutâneo é o padrão para o traço vertical reduzido. Terceira: há déficit neurológico e ele tem um substrato compressivo?\n\nA descompressão continua sendo o ponto de menor consenso. A recomendação prática é distinguir a descompressão indireta — obtida pela redução do desvio e da cifose, que restaura o volume dos forames e do canal — da descompressão direta por laminectomia sacral e foraminotomia, reservada a fragmento retropulsado documentado, déficit progressivo ou ausência de recuperação após redução adequada. Séries de redução precoce e fixação percutânea mostram recuperação neurológica alta sem laminectomia de rotina, o que reforça a redução como o primeiro gesto descompressivo.\n\nO tempo importa. No politraumatizado, a fratura sacral entra no algoritmo de controle de dano: estabiliza-se o anel (binder, fixador externo), reanima-se e a fixação definitiva é feita quando a fisiologia permite — idealmente nas primeiras 72 horas em caso de déficit, antes que a fratura perca a redutibilidade percutânea (o que costuma ocorrer após 10-14 dias).\n\nUm alerta específico: a fratura transversa do sacro e a queda de altura em tentativa de suicídio são fatores de risco independentes para paralisia do plexo lombossacral. No paciente inconsciente, esses achados na TC devem levantar a suspeita mesmo sem exame neurológico confiável. Por fim, no idoso, a lógica é oposta à do jovem — o objetivo é a mobilização precoce e a analgesia; a imobilidade prolongada por dor tem mortalidade maior do que a própria fratura.",
  },

  approaches: [
    {
      id: "parafuso-iliossacral",
      name: "Parafuso iliossacral percutâneo (S1 e/ou S2)",
      indication:
        "Traço vertical (Denis I ou II) reduzido, com anel pélvico verticalmente instável e sem dissociação espinopélvica.",
      interval:
        "Percutâneo, sem intervalo anatômico — trajetória do ílio posterolateral ao corpo de S1, guiada por fluoroscopia nas incidências inlet, outlet e perfil estrito do sacro (ou por navegação / TC intraoperatória).",
      atRisk: [
        "Raiz de L5 (cruza a face anterior da ala — perfuração alar anterior)",
        "Raiz de S1 (perfuração inferior ou intraforaminal)",
        "Cauda equina (perfuração medial no canal)",
        "Vasos ilíacos internos e artéria glútea superior (perfuração anterior)",
      ],
      figureId: "fratura-sacro:fixacao",
    },
    {
      id: "parafuso-transsacral",
      name: "Parafuso transilíaco-transsacral",
      indication:
        "Traços bilaterais, sacro com corredor amplo, fratura por insuficiência ou necessidade de maior braço de alavanca que o parafuso iliossacral unilateral.",
      interval:
        "Percutâneo, atravessando ílio - sacro - ílio contralateral em um único corredor ósseo transverso; exige corredor de S1 (ou S2) confirmado na TC pré-operatória.",
      atRisk: [
        "Raízes de L5 bilateralmente",
        "Canal sacral",
        "Estruturas vasculares pré-sacrais",
        "Contraindicado no sacro displásico com corredor estreito de S1",
      ],
      figureId: "fratura-sacro:fixacao",
    },
    {
      id: "lombopelvica",
      name: "Fixação lombopélvica (L4/L5-ílio ou S2AI)",
      indication:
        "Dissociação espinopélvica (U/H), Roy-Camille II e III, cifose sacral a corrigir e situações em que se deseja carga precoce.",
      interval:
        "Via posterior mediana ou paramediana (Wiltse) — plano entre multífido e longuíssimo; ancoragem em pedículos de L4/L5 e em parafusos ilíacos ou S2 alar-ilíacos, unidos por hastes com conector transverso.",
      atRisk: [
        "Raízes lombares na instrumentação pedicular",
        "Nervo e vasos glúteos superiores na incisura ciática",
        "Pele e partes moles sobre implantes proeminentes (deiscência, infecção)",
        "Segmento móvel L5-S1 (sacrificado nas montagens que incluem L5)",
      ],
      figureId: "fratura-sacro:fixacao",
    },
    {
      id: "triangular",
      name: "Osteossíntese triangular (Schildhauer)",
      indication:
        "Fratura transforaminal instável com necessidade de carga precoce — combina fixação vertical (lombopélvica) e horizontal (parafuso iliossacral).",
      interval:
        "Combinação da via posterior lombopélvica com a trajetória percutânea iliossacral; o triângulo L5 - ílio - S1 neutraliza cisalhamento vertical e rotação.",
      atRisk: [
        "As mesmas da via lombopélvica e do parafuso iliossacral",
        "Proeminência do implante na crista ilíaca posterior (dor e reintervenção para retirada)",
      ],
      figureId: "fratura-sacro:fixacao",
    },
    {
      id: "descompressao-posterior",
      name: "Descompressão posterior (laminectomia sacral / foraminotomia)",
      indication:
        "Déficit neurológico progressivo, fragmento retropulsado no canal ou ausência de recuperação após redução adequada — não é rotina.",
      interval:
        "Via posterior mediana sobre o sacro; ressecção das lâminas sacrais e exploração das raízes de S1 a S4, com foraminotomia dirigida à raiz comprometida.",
      atRisk: [
        "Raízes de S2-S4 (função esfincteriana e sexual)",
        "Saco dural (fístula liquórica)",
        "Perda adicional de estabilidade posterior — sempre associar fixação",
      ],
      figureId: "fratura-sacro:fixacao",
    },
    {
      id: "conservador",
      name: "Tratamento não operatório e sacroplastia",
      indication:
        "Fratura estável sem desvio; fratura por insuficiência do idoso com dor tolerável (conservador) ou dor incapacitante sem desvio (sacroplastia).",
      interval:
        "Sem via aberta — analgesia multimodal, mobilização assistida e, na sacroplastia, injeção percutânea de cimento na ala sob fluoroscopia ou TC, por acesso posterior curto ou longo.",
      atRisk: [
        "Extravasamento de cimento para forames ou canal (sacroplastia)",
        "Complicações da imobilidade — a mortalidade sobe quando a dor impede a mobilização",
      ],
    },
  ],

  technique: [
    {
      n: 1,
      title: "Planejamento na TC — corredor, dismorfismo e traço transverso",
      detail:
        "Antes de qualquer decisão, percorrer a TC nos três planos. No axial e no coronal, definir a zona de Denis e medir o desvio. No sagital, procurar ativamente o traço transverso — é ele que muda a lesão de categoria. Medir o corredor de S1 e identificar sinais de dismorfismo sacral (alas com inclinação acentuada, S1 não recuado em relação às cristas, processos mamilares, disco residual S1-S2, articulações SI em encaixe). Se o corredor de S1 for estreito, planejar trajetória oblíqua ou corredor de S2.",
      figureId: "fratura-sacro:corredor-s1",
      figureVariant: "displasico",
      tips: [
        "Reconstruções sagitais na linha média revelam a fratura transversa perdida no axial.",
        "O perfil estrito do sacro, com as incisuras ciáticas sobrepostas, é a incidência-chave — no planejamento e na sala.",
        "Documente Gibbons e o exame das raízes sacrais antes de sedar ou intubar.",
      ],
      pitfalls: [
        "Assumir corredor de S1 patente sem medir — o dismorfismo está presente em cerca de um terço dos sacros.",
        "Diagnosticar 'fratura do anel pélvico' e não olhar o sagital do sacro.",
      ],
    },
    {
      n: 2,
      title: "Exame neurológico dirigido e registro",
      detail:
        "Avaliar dorsiflexão do hálux (L5), flexão plantar e reflexo aquileu (S1), sensibilidade em sela (S2-S4), tônus do esfíncter anal, contração voluntária e reflexo bulbocavernoso. Registrar o grau de Gibbons. Na zona III, investigar função vesical — Denis recomendava cistometrografia de rotina. Em paciente inconsciente, tratar fratura transversa e queda de altura como fatores de risco independentes para paralisia do plexo lombossacral e reavaliar assim que possível.",
      figureId: "fratura-sacro:raizes-sacrais",
      tips: [
        "Toque retal com avaliação de tônus e contração voluntária é obrigatório, não opcional.",
        "Reavalie após cada manobra de redução — um déficit novo muda a conduta.",
      ],
      pitfalls: [
        "Confiar em exame feito sob sedação ou com nível de consciência rebaixado.",
        "Perder a disfunção esfincteriana por não examinar o períneo no politraumatizado.",
      ],
    },
    {
      n: 3,
      title: "Posicionamento e redução",
      detail:
        "Decúbito dorsal ou ventral conforme a montagem, sobre mesa radiotransparente. Na dissociação espinopélvica, a sequência de redução é: tração transcondiliana femoral com contratração manual, seguida de coxim sob a transição lombossacral para induzir hiperlordose e corrigir a cifose sacral. A redução do desvio é, por si só, o primeiro gesto descompressivo — restaura o volume do canal e dos forames.",
      figureId: "fratura-sacro:reducao",
      tips: [
        "Reduzir cedo: após 10-14 dias a fratura perde a redutibilidade percutânea.",
        "Restaurar o alinhamento lombopélvico (lordose compatível com a incidência pélvica) correlaciona-se com melhor resultado funcional.",
        "Confirme a redução no perfil do sacro antes de passar qualquer fio.",
      ],
      pitfalls: [
        "Comprimir um foco transforaminal mal reduzido — a compressão pode encarcerar a raiz no forame.",
        "Aceitar cifose sacral residual e produzir desequilíbrio sagital e dor crônica.",
      ],
    },
    {
      n: 4,
      title: "Fio-guia no corredor de S1",
      detail:
        "Com a redução mantida, obter as incidências inlet (controla o plano anteroposterior), outlet (controla o plano craniocaudal) e perfil estrito do sacro (define o ponto de entrada e evita a ala anterior). Introduzir o fio-guia a partir do ílio posterolateral em direção ao corpo de S1, alternando as três incidências a cada avanço. No perfil, o fio deve permanecer posterior e inferior à linha da rampa alar (densidade ilíaca cortical), à frente da qual está a raiz de L5.",
      figureId: "fratura-sacro:corredor-s1",
      figureVariant: "normal",
      tips: [
        "Regra prática: no perfil, nunca cruzar anteriormente a linha da rampa alar.",
        "Navegação ou TC intraoperatória reduz mau posicionamento, sobretudo no sacro displásico.",
      ],
      pitfalls: [
        "Perfuração anterior da ala → lesão de L5.",
        "Perfuração medial → cauda equina; perfuração inferior → raiz de S1.",
        "Fio passado com fratura não reduzida — o parafuso fixa a deformidade.",
      ],
    },
    {
      n: 5,
      title: "Parafuso iliossacral ou transsacral",
      detail:
        "Sobre o fio, medir e introduzir parafuso canulado. Na fratura com traço vertical e osso de boa qualidade, parafuso parcialmente rosqueado permite compressão interfragmentária — desde que o foco não seja transforaminal com risco de encarceramento radicular. Nas fraturas por insuficiência, em osso osteoporótico e nos traços bilaterais, preferir parafuso totalmente rosqueado em posição transsacral, funcionando como neutralização, com ou sem cimento.",
      figureId: "fratura-sacro:fixacao",
      figureVariant: "transsacral",
      tips: [
        "Dois parafusos (S1 + S2) ou um transsacral aumentam a resistência rotacional.",
        "Arruela evita afundamento do parafuso na cortical ilíaca fina.",
      ],
      pitfalls: [
        "Comprimir traço transforaminal e agravar a radiculopatia.",
        "Parafuso curto que não cruza a linha média — perde ancoragem no osso subcondral contralateral.",
      ],
    },
    {
      n: 6,
      title: "Fixação lombopélvica / triangular quando há dissociação",
      detail:
        "Na dissociação espinopélvica e nas transversas desviadas, o parafuso iliossacral isolado não neutraliza o cisalhamento vertical. Instrumentar L5 (e L4 se necessário) por via posterior mediana ou de Wiltse, ancorar no ílio com parafusos ilíacos ou S2 alar-ilíacos, e conectar com hastes. Associar o parafuso iliossacral fecha o triângulo L5 - ílio - S1 (osteossíntese triangular de Schildhauer), que confere estabilidade suficiente para carga precoce. Parafusos S2AI ficam mais profundos e reduzem a proeminência do implante.",
      figureId: "fratura-sacro:fixacao",
      figureVariant: "triangular",
      tips: [
        "O conector transverso aumenta a estabilidade rotacional da montagem bilateral.",
        "Na dissociação assimétrica (padrão λ), a montagem lombopélvica unilateral pode bastar.",
        "Avisar o paciente sobre a alta probabilidade de retirada do material por proeminência.",
      ],
      pitfalls: [
        "Fixar sem reduzir a cifose — a montagem consolida a deformidade sagital.",
        "Montagem incluindo L5 sacrifica o segmento L5-S1; avaliar S2AI ou construções mais curtas quando possível.",
        "Fechar sobre implantes proeminentes em partes moles contundidas — deiscência e infecção.",
      ],
    },
    {
      n: 7,
      title: "Descompressão dirigida (quando indicada)",
      detail:
        "Reservada a fragmento retropulsado documentado, déficit progressivo ou ausência de melhora após redução adequada. Laminectomia sacral com exploração das raízes de S1 a S4 e foraminotomia dirigida. Sempre associada à fixação, pois remove elementos posteriores estabilizadores. A redução anatômica prévia frequentemente torna a descompressão direta desnecessária.",
      figureId: "fratura-sacro:raizes-sacrais",
      tips: [
        "Explore o forame antes de concluir — a raiz encarcerada é achado clássico na zona II.",
        "Repare lacerações durais no mesmo tempo cirúrgico.",
      ],
      pitfalls: [
        "Laminectomia de rotina sem substrato compressivo — morbidade sem benefício demonstrado.",
        "Descomprimir sem estabilizar.",
      ],
    },
    {
      n: 8,
      title: "Verificação final e fechamento",
      detail:
        "Checar inlet, outlet e perfil do sacro; confirmar redução, posição dos implantes e ausência de perfuração. TC pós-operatória é recomendável para confirmar a posição do parafuso iliossacral, sobretudo no sacro displásico. Fechamento em planos sobre a fáscia lombodorsal, com atenção à cobertura dos implantes ilíacos. Reavaliação neurológica assim que o paciente desperta.",
      figureId: "fratura-sacro:fixacao",
      figureVariant: "lombopelvica",
      tips: [
        "Dreno em montagem lombopélvica extensa reduz hematoma e tensão na sutura.",
        "Documente o exame neurológico pós-operatório imediato — é o ponto de comparação de todo o seguimento.",
      ],
      pitfalls: [
        "Aceitar imagem intraoperatória duvidosa e descobrir o mau posicionamento no seguimento tardio.",
      ],
    },
  ],

  postop: {
    immobilization:
      "Não se usa órtese de rotina após fixação lombopélvica ou triangular — a montagem é, ela própria, a imobilização. No tratamento não operatório de fratura estável ou por insuficiência, a conduta é analgesia multimodal e mobilização assistida, sem repouso prolongado; órtese lombossacral tem papel apenas sintomático e não deve retardar a marcha.",
    weightBearing:
      "A montagem define a carga. Fixação lombopélvica ou triangular resiste ao cisalhamento vertical e permite carga precoce, muitas vezes total conforme a tolerância — foi essa a justificativa biomecânica original da osteossíntese triangular. Parafuso iliossacral isolado exige carga parcial ou toque no lado lesado por 6 a 8 semanas, com progressão guiada por radiografia. No idoso com fratura por insuficiência, a carga é liberada conforme a dor desde o início: a imobilidade é o principal risco.",
    rehab: [
      {
        window: "0-2 semanas",
        weightBearing:
          "Carga conforme a montagem — total na lombopélvica/triangular; toque no parafuso IS isolado.",
        focus:
          "Analgesia multimodal, sedestação e transferências precoces, profilaxia de tromboembolismo, cuidado com a ferida posterior. Início do manejo vesical e intestinal (cateterismo intermitente, programa intestinal) quando há déficit de S2-S4.",
      },
      {
        window: "2-6 semanas",
        weightBearing:
          "Progressão conforme a montagem; marcha com andador ou muletas.",
        focus:
          "Marcha assistida, ativação de glúteos e core, mobilidade de quadris, controle postural. Reavaliação neurológica seriada com registro do grau de Gibbons; estudo urodinâmico se disfunção vesical persistir.",
      },
      {
        window: "6-12 semanas",
        weightBearing:
          "Progressão para carga total e abandono gradual dos auxiliares de marcha.",
        focus:
          "Fortalecimento progressivo da cadeia posterior e do assoalho pélvico, correção do padrão de marcha, condicionamento aeróbico. Radiografia de controle para confirmar manutenção da redução.",
      },
      {
        window: "3-6 meses",
        weightBearing: "Carga total sem restrição.",
        focus:
          "Retorno progressivo às atividades e ao trabalho conforme a demanda; reabilitação do assoalho pélvico e reabilitação sexual quando indicado. Discussão da retirada do material se houver dor por proeminência do implante ou desejo de recuperar o segmento móvel.",
      },
    ],
    followup:
      "Consultas com 2, 6 e 12 semanas, depois 6 e 12 meses. Radiografias em AP, inlet, outlet e perfil do sacro nos controles; TC quando houver dúvida sobre consolidação, posição do implante ou perda de redução. O seguimento neurológico é o eixo: registrar o grau de Gibbons em cada visita, encaminhar a urologia e a reabilitação do assoalho pélvico diante de disfunção vesical ou intestinal persistente, e abordar ativamente a disfunção sexual — sequela subdiagnosticada porque raramente é perguntada. A retirada do material lombopélvico é comum, discutida a partir de 9-12 meses com a fratura consolidada.",
  },

  complications: [
    {
      name: "Mau posicionamento do parafuso iliossacral",
      detail:
        "Perfuração anterior da ala (raiz de L5), medial (cauda equina) ou inferior (raiz de S1). O risco é maior no sacro displásico e na fratura mal reduzida, porque o corredor real difere do esperado.",
      prevention:
        "Medir o corredor na TC pré-operatória, reduzir antes de instrumentar, usar as três incidências (inlet, outlet, perfil estrito) a cada avanço do fio e considerar navegação. No perfil, não cruzar anteriormente a linha da rampa alar.",
    },
    {
      name: "Déficit neurológico persistente e disfunção esfincteriana",
      detail:
        "Sequela mais impactante, típica da zona III e da dissociação espinopélvica. Mesmo com melhora do grau de Gibbons, queixas residuais de bexiga, intestino e função sexual são frequentes — inclusive nas fraturas de zona III tratadas de forma não operatória, que consolidam bem mas deixam disfunção em boa parte dos casos.",
      prevention:
        "Reconhecer e reduzir cedo; descompressão dirigida quando há substrato compressivo; encaminhamento precoce à urologia e à reabilitação do assoalho pélvico; expectativa realista discutida com o paciente desde o início.",
    },
    {
      name: "Perda de redução e cifose sacral residual",
      detail:
        "Ocorre em montagens subdimensionadas — tipicamente parafuso iliossacral isolado em fratura com dissociação espinopélvica — e leva a desequilíbrio sagital lombopélvico, dor crônica e pior resultado funcional.",
      prevention:
        "Escolher a montagem pela lesão, não pelo hábito: havendo traço transverso, fixar a coluna ao ílio. Restaurar a lordose compatível com a incidência pélvica.",
    },
    {
      name: "Dor por proeminência do implante",
      detail:
        "Complicação mais comum da fixação lombopélvica: os parafusos ilíacos e conectores ficam subcutâneos na crista ilíaca posterior, gerando dor ao sentar e deitar; a retirada do material é frequente.",
      prevention:
        "Preferir parafusos S2 alar-ilíacos, que ficam mais profundos e melhor alinhados às hastes; rebaixar a cortical no ponto de entrada; informar o paciente sobre a probabilidade de retirada.",
    },
    {
      name: "Infecção e deiscência da ferida posterior",
      detail:
        "Favorecida pela via posterior extensa sobre partes moles contundidas, pelo politrauma e por lesão de Morel-Lavallée associada. Pode exigir desbridamentos e, tardiamente, remoção do material.",
      prevention:
        "Avaliar o envelope de partes moles antes de operar; usar técnica percutânea ou de Wiltse quando possível; drenar Morel-Lavallée; adiar a via aberta se a pele estiver comprometida.",
    },
    {
      name: "Pseudartrose e falha do implante",
      detail:
        "Incomum no sacro, que é osso esponjoso bem vascularizado, mas ocorre em montagens instáveis, em cifose residual e em osso osteoporótico, com afrouxamento, quebra de haste ou de parafuso.",
      prevention:
        "Montagem adequada à instabilidade, redução da cifose, aumento de pontos de ancoragem e cimento no osso osteoporótico.",
    },
    {
      name: "Perda do segmento móvel L5-S1",
      detail:
        "Consequência das montagens lombopélvicas que incluem L5; pode gerar rigidez e sobrecarga adjacente, sobretudo se o material não for retirado.",
      prevention:
        "Considerar montagens que ancorem em S1/S2AI, retirada do material após consolidação e planejamento do nível proximal caso a caso.",
    },
    {
      name: "Extravasamento de cimento na sacroplastia",
      detail:
        "Cimento pode migrar para os forames ou para o canal sacral, causando radiculopatia; raramente ocorre embolia. É a complicação específica do tratamento intervencionista da fratura por insuficiência.",
      prevention:
        "Injeção sob fluoroscopia ou TC, volumes pequenos e fracionados, cimento em fase pastosa e monitorização contínua da progressão.",
    },
    {
      name: "Complicações da imobilidade no idoso",
      detail:
        "Na fratura por insuficiência, a dor que impede a mobilização se associa a mortalidade substancialmente maior em um ano do que a mobilização precoce — o desfecho depende mais da capacidade de andar do que da fratura.",
      prevention:
        "Analgesia agressiva, decisão precoce entre sacroplastia e osteossíntese quando a dor impede a marcha, investigação e tratamento de osteoporose e da deficiência de vitamina D.",
    },
  ],

  evidence: [
    {
      id: "denis-1988",
      claim:
        "A topografia do traço sacral em três zonas (alar, transforaminal e central) prediz o risco e o tipo de déficit neurológico.",
      takeaway:
        "Série de 236 fraturas sacrais entre 776 lesões pélvicas, com estudo anatômico em 39 cadáveres. Déficit em ~5,9% na zona I (L5), ~28,4% na zona II (ciatalgia, disfunção vesical rara) e ~56,7% na zona III (anestesia em sela e perda esfincteriana). As radiografias de rotina foram quase inúteis; TC e incidências de Ferguson foram decisivas, e a cistometrografia foi recomendada de rotina na zona III. Fundamento da classificação usada até hoje.",
      level: "IV",
      studyType: "Série retrospectiva com estudo anatômico em cadáveres",
      era: "classico",
      citation: {
        authors: "Denis F, Davis S, Comfort T",
        title: "Sacral fractures: an important problem. Retrospective analysis of 236 cases",
        journal: "Clinical Orthopaedics and Related Research",
        year: 1988,
        pmid: "3338224",
      },
    },
    {
      id: "schildhauer-2003",
      claim:
        "A osteossíntese triangular é biomecanicamente superior ao parafuso iliossacral isolado na fratura transforaminal instável.",
      takeaway:
        "Doze espécimes lombopélvicos cadavéricos testados em modelo de apoio monopodal sob carga cíclica. O deslocamento no foco sob carga máxima inicial foi de 0,163 ± 0,073 cm na osteossíntese triangular contra 0,611 ± 0,453 cm no parafuso iliossacral (p = 0,0104). Aos 10.000 ciclos, todos os espécimes triangulares mantiveram movimento mínimo, enquanto o grupo do parafuso isolado teve três falhas catastróficas. É a base biomecânica para permitir carga precoce com a montagem triangular.",
      level: "V",
      studyType: "Estudo biomecânico cadavérico sob carga cíclica",
      era: "classico",
      citation: {
        authors: "Schildhauer TA, Ledoux WR, Chapman JR, Henley MB, Tencer AF, Routt ML",
        title:
          "Triangular osteosynthesis and iliosacral screw fixation for unstable sacral fractures: a cadaveric and biomechanical evaluation under cyclic loads",
        journal: "Journal of Orthopaedic Trauma",
        year: 2003,
        pmid: "12499964",
        doi: "10.1097/00005131-200301000-00004",
      },
    },
    {
      id: "yi-hak-2011",
      claim:
        "A dissociação espinopélvica exige realinhamento e fixação lombopélvica precoces; o diagnóstico é frequentemente tardio.",
      takeaway:
        "Revisão da literatura sobre a fratura sacral em U. O padrão — transversa associada a fratura-luxação sacral bilateral — tem alta incidência de complicações neurológicas e é comumente perdido porque ocorre em politraumatizados graves. Sem diagnóstico e tratamento evolui para deformidade progressiva e dor crônica. Radiografias em AP, inlet, outlet, perfil do sacro e TC com reconstrução são essenciais; o realinhamento precoce com fixação lombopélvica ou osteossíntese triangular é a estratégia recomendada, com descompressão como adjuvante.",
      level: "V",
      studyType: "Revisão narrativa da literatura",
      era: "atual",
      citation: {
        authors: "Yi C, Hak DJ",
        title: "Traumatic spinopelvic dissociation or U-shaped sacral fracture: a review of the literature",
        journal: "Injury",
        year: 2012,
        pmid: "21236426",
        doi: "10.1016/j.injury.2010.12.011",
      },
    },
    {
      id: "siebler-2010",
      claim:
        "A fratura de zona III de Denis tratada de forma não operatória consolida de modo consistente, mas deixa disfunção residual frequente.",
      takeaway:
        "Série consecutiva de 15 pacientes com fratura de zona III tratados sem cirurgia, com seguimento médio de 43 meses. Todas as fraturas consolidaram. Seis tiveram aumento da cifose (1° a 17°), sem correlação com o desfecho. O escore de Roland-Morris final foi 3,3 ± 3,3 e o grau de Gibbons melhorou de 2 ± 1,2 para 1,5 ± 0,8, mas oito dos onze avaliados mantiveram disfunção intestinal, vesical e/ou sexual. Sustenta o tratamento não operatório na zona III sem desvio e, ao mesmo tempo, ensina a calibrar a expectativa funcional.",
      level: "IV",
      studyType: "Série de casos consecutiva com dados coletados prospectivamente",
      era: "atual",
      citation: {
        authors: "Siebler JC, Hasley BP, Mormino MA",
        title: "Functional outcomes of Denis zone III sacral fractures treated nonoperatively",
        journal: "Journal of Orthopaedic Trauma",
        year: 2010,
        pmid: "20418735",
        doi: "10.1097/BOT.0b013e3181ccb645",
      },
    },
    {
      id: "ruatti-2019",
      claim:
        "A redução precoce com tração e hiperlordose, seguida de fixação percutânea, restaura o alinhamento sagital e dispensa a laminectomia de rotina.",
      takeaway:
        "Vinte pacientes com fratura em U/H (Roy-Camille II ou III) tratados com tração transcondiliana, contratração manual, coxim de hiperlordose sob a transição lombossacral e fixação iliossacral percutânea, com seguimento médio de 42,4 meses. O desvio da parede posterior de S1 caiu de 64% para 5,6% no plano sagital. Apenas 15% mantiveram desequilíbrio lombopélvico, e o desequilíbrio se correlacionou significativamente com Majeed abaixo de 75 (p = 0,0087). A função neurológica melhorou em 90% e recuperou totalmente em 70%, sem laminectomia descompressiva. Reforça a redução como o primeiro gesto descompressivo.",
      level: "IV",
      studyType: "Estudo observacional retrospectivo",
      era: "atual",
      citation: {
        authors: "Ruatti S, Boudissa M, Kerschbaumer G, Milaire M, Tonetti J",
        title:
          "Effectiveness of closed reduction and percutaneous fixation of isolated sacral fractures. Functional outcomes and sagittal alignment after 3.6 years in 20 patients",
        journal: "Orthopaedics & Traumatology: Surgery & Research",
        year: 2019,
        pmid: "31053445",
        doi: "10.1016/j.otsr.2019.02.021",
      },
    },
    {
      id: "luo-2022",
      claim:
        "A fixação lombopélvica com parafusos S2 alar-ilíacos estabiliza a fratura em U com baixa taxa de complicações de ferida.",
      takeaway:
        "Catorze pacientes consecutivos com fratura sacral em U tratados com fixação lombopélvica usando parafusos S2AI, com ou sem descompressão. A qualidade da redução foi excelente ou boa em 92% pelos critérios de Matta, a função pélvica pelo escore de Majeed foi excelente ou boa em 100% e todos recuperaram algum grau de função neurológica. Houve uma infecção superficial resolvida com desbridamento, sem falha de implante, perda de redução ou desconforto por proeminência do parafuso. Sustenta o S2AI como alternativa ao parafuso ilíaco clássico, com implante mais profundo e reabilitação precoce.",
      level: "IV",
      studyType: "Série de casos consecutiva",
      era: "atual",
      citation: {
        authors: "Luo Y, Li Y, He L, Yin E, Gu M, Xu Z, Chen H, Hou Z, Yi C",
        title: "Lumbopelvic fixation with S2 alar-iliac screws for U-shaped sacral fractures",
        journal: "Injury",
        year: 2022,
        pmid: "35180997",
        doi: "10.1016/j.injury.2022.02.022",
      },
    },
  ],

  pearls: [
    "A pergunta que define a montagem é uma só: existe traço transverso no sagital? Se existe, a lesão é espinopélvica e a fixação precisa reconectar a coluna ao ílio.",
    "Zona I é a raiz de L5. Zona II é a ciática. Zona III são os esfíncteres — e o risco cresce de lateral para medial (~6% → ~28% → ~57%).",
    "A raiz de L5 não passa por forame: ela cruza a face anterior da ala. É por isso que uma fratura 'inocente' da zona I dá déficit de L5 e é por isso que a perfuração alar anterior é tão temida.",
    "A redução é o primeiro gesto descompressivo. Corrigir a cifose e a translação restaura o volume do canal e dos forames — séries de fixação percutânea mostram 70% de recuperação neurológica completa sem laminectomia.",
    "Perfil estrito do sacro, com as incisuras ciáticas sobrepostas: é a incidência que revela a transversa e a que impede o parafuso de cruzar a rampa alar.",
    "Dismorfismo sacral está em cerca de um terço das pessoas. Mede-se o corredor de S1 na TC antes de operar, não com o fio já na mão.",
    "Reduza cedo — depois de 10 a 14 dias a fratura deixa de ser redutível por via percutânea.",
    "A montagem triangular existe para permitir carga precoce: fixa o cisalhamento vertical (lombopélvica) e a translação horizontal (parafuso IS).",
    "Fratura transversa do sacro e queda de altura em tentativa de suicídio são fatores de risco independentes para paralisia do plexo lombossacral — suspeite mesmo sem exame neurológico confiável.",
    "No idoso com fratura por insuficiência, o inimigo é a imobilidade, não a fratura: se a dor impede a marcha, decida cedo entre sacroplastia e osteossíntese.",
    "Prepare o paciente para a retirada do material lombopélvico — a proeminência na crista ilíaca posterior é a queixa mais comum do seguimento.",
    "Pergunte sobre função sexual no seguimento. A sequela existe, é frequente na zona III e quase nunca é relatada espontaneamente.",
  ],

  pitfalls: [
    "Diagnosticar 'fratura do anel pélvico' e nunca olhar o corte sagital do sacro — é assim que a dissociação espinopélvica é perdida.",
    "Confiar em radiografia simples de pelve: Denis já mostrava que ela é quase inútil para a fratura sacral com sintomas neurológicos.",
    "Não examinar o períneo do politraumatizado — sem toque retal, tônus e sensibilidade em sela, o déficit de zona III passa despercebido.",
    "Registrar exame neurológico feito sob sedação como se fosse confiável.",
    "Fixar um traço vertical com parafuso iliossacral isolado quando há traço transverso associado — a montagem falha em cisalhamento vertical.",
    "Comprimir com parafuso parcialmente rosqueado um foco transforaminal — a compressão pode encarcerar a raiz no forame.",
    "Passar o fio-guia com a fratura mal reduzida: o corredor real deixa de corresponder ao planejado e o parafuso fixa a deformidade.",
    "Cruzar anteriormente a linha da rampa alar no perfil e lesar a raiz de L5.",
    "Presumir corredor de S1 amplo em sacro displásico e insistir no transsacral em vez de migrar para S2.",
    "Aceitar cifose sacral residual — o desequilíbrio lombopélvico correlaciona-se com pior escore funcional.",
    "Fazer laminectomia sacral de rotina, sem substrato compressivo e sem déficit progressivo: acrescenta morbidade e instabilidade sem benefício demonstrado.",
    "Descomprimir sem estabilizar.",
    "Operar por via posterior aberta sobre pele contundida ou lesão de Morel-Lavallée não tratada.",
    "Tratar a fratura por insuficiência do idoso com repouso prolongado no leito — a mortalidade da imobilidade supera a da fratura.",
  ],

  figures: [
    {
      id: "fratura-sacro:anatomia",
      kind: "diagram",
      caption:
        "Anatomia do sacro em vista anteroposterior — promontório e corpo de S1, alas, quatro pares de forames anteriores, canal sacral, hiato e articulações sacroilíacas. A raiz de L5 cruza a face anterior da ala.",
      alt: "Sacro triangular visto de frente, entre os dois ossos ilíacos, com forames sacrais, canal central e a raiz de L5 sobre a ala.",
      source: {
        label: "Diagrama original Revisortopedia",
        reference: "Rockwood and Green's Fractures in Adults, 10a ed. (2024)",
      },
    },
    {
      id: "fratura-sacro:raizes-sacrais",
      kind: "diagram",
      caption:
        "Raízes sacrais e mapa do exame neurológico — saco dural terminando em S2, raízes de S1 a S4 emergindo pelos forames, L5 sobre a ala e a área de anestesia em sela associada à zona III.",
      alt: "Sacro de frente com cauda equina no canal, raízes S1 a S4 saindo pelos forames e área perineal em sela destacada.",
      source: {
        label: "Diagrama original Revisortopedia",
        reference: "Rockwood and Green's Fractures in Adults, 10a ed. (2024)",
      },
    },
    {
      id: "fratura-sacro:denis",
      variant: "I",
      kind: "diagram",
      caption:
        "Denis zona I — traço através da ala, lateral aos forames. Déficit em cerca de 6%, tipicamente da raiz de L5.",
      alt: "Sacro de frente com traço de fratura vertical na ala, lateral aos forames, e a raiz de L5 sobre ele.",
      source: {
        label: "Diagrama original Revisortopedia",
        reference: "Denis F, Davis S, Comfort T. Clin Orthop Relat Res. 1988;227:67-81",
      },
    },
    {
      id: "fratura-sacro:denis",
      variant: "II",
      kind: "diagram",
      caption:
        "Denis zona II — traço transforaminal. Déficit em cerca de 28%, com ciatalgia e comprometimento de S1-S2; disfunção vesical rara.",
      alt: "Sacro de frente com traço de fratura vertical atravessando os forames sacrais.",
      source: {
        label: "Diagrama original Revisortopedia",
        reference: "Denis F, Davis S, Comfort T. Clin Orthop Relat Res. 1988;227:67-81",
      },
    },
    {
      id: "fratura-sacro:denis",
      variant: "III",
      kind: "diagram",
      caption:
        "Denis zona III — traço central atingindo o canal. Déficit em cerca de 57%, com anestesia em sela e perda do controle esfincteriano.",
      alt: "Sacro de frente com traço de fratura vertical na linha média, atravessando o canal sacral.",
      source: {
        label: "Diagrama original Revisortopedia",
        reference: "Denis F, Davis S, Comfort T. Clin Orthop Relat Res. 1988;227:67-81",
      },
    },
    {
      id: "fratura-sacro:roy-camille",
      variant: "I",
      kind: "diagram",
      caption:
        "Roy-Camille tipo I — angulação em flexão do fragmento superior, sem translação; cifose sacral sem perda de contato.",
      alt: "Perfil do sacro com fratura transversa alta e fragmento superior inclinado em flexão.",
      source: {
        label: "Diagrama original Revisortopedia",
        reference: "Campbell's Operative Orthopaedics, 14a ed. (2021)",
      },
    },
    {
      id: "fratura-sacro:roy-camille",
      variant: "II",
      kind: "diagram",
      caption:
        "Roy-Camille tipo II — flexão associada a translação posterior do fragmento superior, com estreitamento do canal.",
      alt: "Perfil do sacro com fragmento superior inclinado e deslocado para trás.",
      source: {
        label: "Diagrama original Revisortopedia",
        reference: "Campbell's Operative Orthopaedics, 14a ed. (2021)",
      },
    },
    {
      id: "fratura-sacro:roy-camille",
      variant: "III",
      kind: "diagram",
      caption:
        "Roy-Camille tipo III — translação anterior completa do fragmento superior, sem angulação; padrão mais instável.",
      alt: "Perfil do sacro com fragmento superior integralmente deslocado para a frente.",
      source: {
        label: "Diagrama original Revisortopedia",
        reference: "Campbell's Operative Orthopaedics, 14a ed. (2021)",
      },
    },
    {
      id: "fratura-sacro:roy-camille",
      variant: "IV",
      kind: "diagram",
      caption:
        "Roy-Camille tipo IV (Strange-Vognsen & Lebech) — cominuição do corpo de S1 por carga axial, com pouco desvio do fragmento superior.",
      alt: "Perfil do sacro com fragmento superior cominuído e alinhamento preservado.",
      source: {
        label: "Diagrama original Revisortopedia",
        reference: "Campbell's Operative Orthopaedics, 14a ed. (2021)",
      },
    },
    {
      id: "fratura-sacro:padroes-transversos",
      variant: "U",
      kind: "diagram",
      caption:
        "Padrão em U — traços verticais bilaterais unidos por traço transverso contido; o segmento de S1 dissocia-se da pelve.",
      alt: "Sacro de frente com dois traços verticais unidos por um traço transverso, isolando o segmento superior.",
      source: {
        label: "Diagrama original Revisortopedia",
        reference: "Yi C, Hak DJ. Injury. 2012;43(4):402-8",
      },
    },
    {
      id: "fratura-sacro:padroes-transversos",
      variant: "H",
      kind: "diagram",
      caption:
        "Padrão em H — traços verticais bilaterais com traço transverso atravessando toda a largura do sacro; o mais instável do grupo.",
      alt: "Sacro de frente com dois traços verticais cruzados por um traço transverso completo.",
      source: {
        label: "Diagrama original Revisortopedia",
        reference: "Yi C, Hak DJ. Injury. 2012;43(4):402-8",
      },
    },
    {
      id: "fratura-sacro:padroes-transversos",
      variant: "lambda",
      kind: "diagram",
      caption:
        "Padrão em λ — traço vertical unilateral associado à transversa; dissociação assimétrica que pode permitir montagem unilateral.",
      alt: "Sacro de frente com um único traço vertical à esquerda cruzado por traço transverso.",
      source: {
        label: "Diagrama original Revisortopedia",
        reference: "Yi C, Hak DJ. Injury. 2012;43(4):402-8",
      },
    },
    {
      id: "fratura-sacro:padroes-transversos",
      variant: "T",
      kind: "diagram",
      caption:
        "Padrão em T — traço transverso com prolongamento vertical medial descendente, comprometendo o canal central.",
      alt: "Sacro de frente com traço transverso e traço vertical medial descendo pela linha média.",
      source: {
        label: "Diagrama original Revisortopedia",
        reference: "Yi C, Hak DJ. Injury. 2012;43(4):402-8",
      },
    },
    {
      id: "fratura-sacro:corredor-s1",
      variant: "normal",
      kind: "diagram",
      caption:
        "Corte axial de S1 com corredor ósseo amplo — trajetória transsacral segura entre o platô, o canal e a raiz de L5.",
      alt: "Corte axial do sacro entre os ilíacos, com faixa horizontal marcando o corredor seguro do parafuso.",
      source: {
        label: "Diagrama original Revisortopedia",
        reference: "Rockwood and Green's Fractures in Adults, 10a ed. (2024)",
      },
    },
    {
      id: "fratura-sacro:corredor-s1",
      variant: "displasico",
      kind: "diagram",
      caption:
        "Sacro displásico — corredor de S1 estreito e oblíquo; obriga trajetória oblíqua ou uso do corredor de S2, sob risco de perfuração alar.",
      alt: "Corte axial do sacro displásico com faixa de corredor estreita e inclinada.",
      source: {
        label: "Diagrama original Revisortopedia",
        reference: "Rockwood and Green's Fractures in Adults, 10a ed. (2024)",
      },
    },
    {
      id: "fratura-sacro:fixacao",
      variant: "iliossacral",
      kind: "diagram",
      caption:
        "Parafuso iliossacral percutâneo no corredor de S1 — fixação do anel posterior no traço vertical reduzido.",
      alt: "Sacro e ilíacos de frente com um parafuso cruzando a articulação sacroilíaca até o corpo de S1.",
      source: {
        label: "Diagrama original Revisortopedia",
        reference: "Rockwood and Green's Fractures in Adults, 10a ed. (2024)",
      },
    },
    {
      id: "fratura-sacro:fixacao",
      variant: "transsacral",
      kind: "diagram",
      caption:
        "Parafuso transilíaco-transsacral — atravessa ílio, sacro e ílio contralateral; útil em traços bilaterais e osso osteoporótico.",
      alt: "Sacro e ilíacos de frente com um parafuso longo atravessando toda a largura da pelve posterior.",
      source: {
        label: "Diagrama original Revisortopedia",
        reference: "Rockwood and Green's Fractures in Adults, 10a ed. (2024)",
      },
    },
    {
      id: "fratura-sacro:fixacao",
      variant: "triangular",
      kind: "diagram",
      caption:
        "Osteossíntese triangular de Schildhauer — fixação lombopélvica de L5 ao ílio somada ao parafuso iliossacral; permite carga precoce.",
      alt: "Sacro e ilíacos de frente com haste de L5 ao ílio e parafuso iliossacral formando um triângulo.",
      source: {
        label: "Diagrama original Revisortopedia",
        reference: "Schildhauer TA et al. J Orthop Trauma. 2003;17(1):22-31",
      },
    },
    {
      id: "fratura-sacro:fixacao",
      variant: "lombopelvica",
      kind: "diagram",
      caption:
        "Fixação lombopélvica bilateral com parafusos ilíacos ou S2 alar-ilíacos e conector transverso — montagem da dissociação espinopélvica.",
      alt: "Sacro e ilíacos de frente com duas hastes de L5 aos ilíacos unidas por um conector transverso.",
      source: {
        label: "Diagrama original Revisortopedia",
        reference: "Luo Y et al. Injury. 2022;54 Suppl 2:S8-S14",
      },
    },
    {
      id: "fratura-sacro:reducao",
      kind: "diagram",
      caption:
        "Sequência de redução da dissociação espinopélvica — deformidade inicial, tração transcondiliana com contratração e coxim de hiperlordose sob a transição lombossacral corrigindo a cifose sacral.",
      alt: "Perfil do sacro em três etapas, com vetor de tração distal e coxim posterior reduzindo a angulação.",
      source: {
        label: "Diagrama original Revisortopedia",
        reference: "Ruatti S et al. Orthop Traumatol Surg Res. 2019;105(4):719-725",
      },
    },
  ],

  meta: {
    lastReviewed: "2026-07-14",
    sources: [
      "Rockwood and Green's Fractures in Adults, 10a ed. (2024)",
      "Campbell's Operative Orthopaedics, 14a ed. (2021)",
      "Hebert & Lech, Ortopedia e Traumatologia, 6a ed. (2025)",
      "Denis F, Davis S, Comfort T, Clin Orthop Relat Res 1988",
      "Schildhauer TA et al., J Orthop Trauma 2003",
      "Yi C, Hak DJ, Injury 2012",
      "Siebler JC, Hasley BP, Mormino MA, J Orthop Trauma 2010",
      "Ruatti S et al., Orthop Traumatol Surg Res 2019",
      "Luo Y et al., Injury 2022",
    ],
    attribution:
      "Evidência recuperada do PubMed. Ver DOIs/PMIDs citados na seção de evidência.",
    figureReference:
      "Rockwood and Green's Fractures in Adults, 10a ed. (2024) / Campbell's Operative Orthopaedics 14a",
  },
});
