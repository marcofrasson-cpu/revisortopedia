import { defineTopic } from "../../types/topic";

/* ============================================================================
   Tópico-semente completo — Fratura maleolar do tornozelo.
   Conteúdo clínico em pt-BR, terminologia AO/OTA. Evidência recuperada do
   PubMed (ver DOIs). Referência canônica para o renderizador genérico.
   ========================================================================== */

export const fraturaMaleolarTornozelo = defineTopic({
  id: "mi-tornozelo-fratura-maleolar",
  slug: "fratura-maleolar-tornozelo",
  regionId: "membro-inferior",
  bone: "Tornozelo",
  injury: "Fratura maleolar",
  title: "Fratura maleolar do tornozelo",
  subtitle:
    "Restaurar a pinça (mortise), o comprimento e a rotação da fíbula e a estabilidade do anel.",
  laterality: null,
  status: "complete",
  overview:
    "A fratura maleolar é a fratura articular mais comum do membro inferior e abrange um espectro que vai da lesão isolada e estável do maléolo lateral até o padrão bi/trimaleolar instável com lesão sindesmótica. O tornozelo comporta-se como um anel osteoligamentar: uma lesão em um ponto obriga a procurar a segunda. O objetivo do tratamento — cirúrgico ou não — é uma pinça tibiotalar congruente, sem desvio lateral do tálus, porque poucos milímetros de subluxação reduzem drasticamente a área de contato e predispõem à artrose pós-traumática. A decisão terapêutica depende menos do número de maléolos fraturados e mais da estabilidade demonstrada em radiografias com carga ou estresse.",
  keyFacts: [
    { label: "Classificação de trabalho", value: "Weber / Lauge-Hansen (AO/OTA 44)" },
    { label: "Objetivo", value: "Restaurar a pinça, o comprimento e a rotação da fíbula" },
    { label: "Chave da estabilidade", value: "Integridade do anel — sobretudo do deltoide/medial" },
    { label: "Sinal medial", value: "Espaço claro medial > 4 mm ou > lado contralateral" },
    { label: "Sindesmose", value: "Testar após fixação (teste do gancho / estresse externo)" },
    { label: "Reabilitação", value: "Carga precoce é segura na fixação estável" },
  ],
  anatomy: {
    text:
      "O tornozelo é uma articulação em pinça (mortise): o plafond e o maléolo medial da tíbia, com o maléolo lateral da fíbula, formam um encaixe retangular que abraça a cúpula do tálus. A cúpula talar é mais larga anteriormente, o que confere estabilidade intrínseca em dorsiflexão. A congruência exige um espaço articular uniforme em toda a mortise; o espaço claro medial (entre o maléolo medial e o tálus) deve ser igual ao espaço superior e não ultrapassar ~4 mm — seu alargamento denuncia desvio lateral do tálus. A fíbula distal aloja-se na incisura fibular da tíbia e é ancorada pela sindesmose tibiofibular distal: ligamento tibiofibular anteroinferior (LTFA-I), ligamento tibiofibular posteroinferior (LTFP-I, o mais forte) e o ligamento interósseo, continuação da membrana interóssea. Medialmente, o complexo do ligamento deltoide (porções superficial e profunda) é o principal estabilizador contra o desvio lateral e a rotação externa do tálus — sua competência frequentemente decide se um Weber B é estável. Lateralmente, o complexo colateral compreende os ligamentos talofibular anterior (LTFA), calcaneofibular (LCF) e talofibular posterior (LTFP). O conceito do anel resume a biomecânica: o tornozelo é um anel ósseo-ligamentar e a energia que rompe um segmento tende a romper um segundo — por isso uma fratura da fíbula ao nível da sindesmose obriga a avaliar o lado medial (maléolo medial ou deltoide) antes de chamá-la estável.",
    figureIds: ["ankle-mortise", "ankle-ligaments", "ankle-ring"],
  },
  classification: [
    {
      id: "danis-weber",
      name: "Danis-Weber",
      basis:
        "Nível da fratura da fíbula em relação ao plafond/sindesmose — proxy prático do risco de instabilidade sindesmótica.",
      note: "Simples e reprodutível; orienta a suspeita de lesão da sindesmose (maior no tipo C).",
      types: [
        {
          code: "Weber A",
          label: "Infrassindesmótica",
          description:
            "Fratura da fíbula abaixo do plafond, tipicamente por avulsão (supinação-adução). Sindesmose usualmente íntegra; frequentemente estável. Avaliar fratura vertical do maléolo medial associada.",
          figureId: "weber",
          figureVariant: "A",
        },
        {
          code: "Weber B",
          label: "Transsindesmótica",
          description:
            "Fratura oblíqua/espiral da fíbula ao nível da sindesmose. Estabilidade depende do lado medial: pode ser estável (deltoide íntegro) ou instável (lesão do deltoide / maléolo medial). Padrão que mais exige teste de estresse.",
          figureId: "weber",
          figureVariant: "B",
        },
        {
          code: "Weber C",
          label: "Suprassindesmótica",
          description:
            "Fratura da fíbula acima da sindesmose (inclui a fratura alta de Maisonneuve). Implica lesão sindesmótica por definição; alta probabilidade de necessidade de estabilização da sindesmose.",
          figureId: "weber",
          figureVariant: "C",
        },
      ],
    },
    {
      id: "lauge-hansen",
      name: "Lauge-Hansen",
      basis:
        "Mecanismo de lesão: posição do pé (supinação/pronação) + força deformante (rotação externa, adução, abdução), em estágios sequenciais.",
      note:
        "Útil como modelo do padrão e da sequência ligamentar; sua acurácia como mecanismo real é limitada (correlação < 50%).",
      types: [
        {
          code: "SER",
          label: "Supinação-rotação externa",
          description:
            "O mais comum (~40-70%). Sequência em 4 estágios: LTFA-I → fratura espiral da fíbula ao nível da sindesmose → LTFP-I / maléolo posterior → maléolo medial ou deltoide. Corresponde tipicamente a um Weber B.",
          figureId: "lauge-hansen",
          figureVariant: "SER",
        },
        {
          code: "PER",
          label: "Pronação-rotação externa",
          description:
            "Estágios: lesão medial (deltoide/maléolo medial) → LTFA-I → fratura fibular alta (Weber C, inclui Maisonneuve) → LTFP-I / maléolo posterior. Forte associação com lesão sindesmótica.",
          figureId: "lauge-hansen",
          figureVariant: "PER",
        },
        {
          code: "SAD",
          label: "Supinação-adução",
          description:
            "Avulsão transversa da fíbula abaixo da sindesmose (Weber A) seguida de fratura vertical do maléolo medial, muitas vezes com impacção do plafond medial — buscar e desimpactar.",
          figureId: "lauge-hansen",
          figureVariant: "SAD",
        },
        {
          code: "PAB",
          label: "Pronação-abdução",
          description:
            "Lesão medial → lesão sindesmótica → fratura fibular transversa/cominutiva com cunha lateral por flexão, ao nível ou acima da sindesmose.",
          figureId: "lauge-hansen",
          figureVariant: "PAB",
        },
      ],
    },
    {
      id: "ao-ota-44",
      name: "AO/OTA 44",
      basis:
        "Segmento maleolar (44) codificado pela relação com a sindesmose, espelhando Weber.",
      note: "Padrão para registro e comunicação; A/B/C correspondem a Weber A/B/C.",
      types: [
        {
          code: "44A",
          label: "Infrassindesmótica",
          description: "Lesão distal à sindesmose (equivalente a Weber A).",
        },
        {
          code: "44B",
          label: "Transsindesmótica",
          description: "Fratura da fíbula ao nível da sindesmose (equivalente a Weber B).",
        },
        {
          code: "44C",
          label: "Suprassindesmótica",
          description: "Lesão proximal à sindesmose, com envolvimento sindesmótico (equivalente a Weber C).",
        },
      ],
    },
  ],
  indications: {
    operative: [
      "Desvio lateral do tálus / alargamento do espaço claro medial (> 4 mm ou maior que o contralateral).",
      "Encurtamento ou má-rotação da fíbula (perda do comprimento fibular ou do sinal do \"shenton\" do tornozelo).",
      "Fratura bi ou trimaleolar deslocada.",
      "Instabilidade demonstrada em radiografia com carga ou em estresse por rotação externa/gravidade.",
      "Lesão sindesmótica com diástase (Weber C, Maisonneuve, teste do gancho positivo).",
      "Fragmento do maléolo posterior com instabilidade, degrau articular > 1-2 mm ou impacção do plafond.",
      "Fratura exposta ou luxação irredutível do tornozelo.",
    ],
    nonOperative: [
      "Fratura isolada e estável do maléolo lateral (Weber B) com espaço claro medial normal e teste de estresse negativo.",
      "Weber A não deslocada, sem fratura vertical instável do maléolo medial.",
      "Fratura sem desvio do tálus na mortise em carga.",
      "Paciente idoso frágil / alto risco cirúrgico, com casting de contato próximo bem moldado como alternativa válida.",
      "Contraindicações locais graves (partes moles inviáveis) ou clínicas ao ato cirúrgico.",
    ],
    decisionNotes:
      "A pergunta central não é \"quantos maléolos?\", e sim \"o tálus está e permanece centrado na mortise?\". Um Weber B isolado com espaço claro medial normal e teste de estresse (rotação externa ou gravidade) negativo é estável e pode ser tratado sem cirurgia com carga conforme tolerada. Sinais de instabilidade — alargamento medial, encurtamento/rotação da fíbula, talar shift, envolvimento do plafond — indicam fixação. A sindesmose é avaliada intraoperatoriamente após a fixação óssea (teste do gancho e estresse por rotação externo sob fluoroscopia), pois a lesão fibular alta ou o padrão PER a colocam em risco. O maléolo posterior deixou de ser indicado a fixar apenas pelo tamanho do fragmento: pesa mais a instabilidade sindesmótica, o degrau articular e a impacção do plafond.",
  },
  approaches: [
    {
      id: "lateral",
      name: "Acesso lateral (fíbula)",
      indication:
        "Redução e fixação do maléolo lateral / fíbula distal (placa e parafuso interfragmentário).",
      interval:
        "Incisão longitudinal sobre a crista subcutânea da fíbula; dissecção direta até o periósteo, respeitando o envelope de partes moles.",
      atRisk: ["Nervo fibular superficial (proximal na incisão)", "Nervo sural e veia safena parva (posterolateral)"],
      figureId: "approach-lateral",
    },
    {
      id: "medial",
      name: "Acesso medial (maléolo medial)",
      indication:
        "Fixação do maléolo medial e inspeção/desimpactação do canto ântero-medial do plafond.",
      interval:
        "Incisão curvilínea sobre o maléolo medial; expor o traço, limpar a fenda de fragmentos osteocondrais e periósteo interposto.",
      atRisk: ["Veia safena magna", "Nervo safeno (adjacente à veia)"],
      figureId: "approach-medial",
    },
    {
      id: "posterolateral",
      name: "Acesso posterolateral",
      indication:
        "Acesso combinado ao maléolo posterior e à fíbula; permite placa antiglide posterior na fíbula e fixação direta do fragmento posterior.",
      interval:
        "Intervalo entre os fibulares (lateral) e o flexor longo do hálux (FHL, medial), com o paciente em decúbito ventral ou lateral.",
      atRisk: ["Artéria fibular (profunda, junto ao FHL)", "Nervo sural (superficial)"],
      figureId: "approach-posterolateral",
    },
  ],
  technique: [
    {
      n: 1,
      title: "Planejamento e sequência de reconstrução",
      detail:
        "Definir a sequência lógica: fíbula (comprimento/rotação) → maléolo medial → maléolo posterior → sindesmose por último. Confirmar padrão (Weber/Lauge-Hansen), avaliar partes moles e planejar incisões respeitando pontes de pele suficientes se houver duplo acesso.",
      figureId: "step-reduction",
      tips: [
        "Radiografia do tornozelo contralateral ajuda a aferir comprimento e ângulo talocrural.",
        "Adiar cirurgia até a pele enrugar (\"wrinkle sign\") reduz complicações de ferida.",
      ],
      pitfalls: [
        "Fixar a sindesmose antes de restaurar o comprimento fibular perpetua a má-redução.",
        "Incisões muito próximas em partes moles comprometidas geram necrose de ponte.",
      ],
    },
    {
      n: 2,
      title: "Redução da fíbula — restaurar comprimento e rotação",
      detail:
        "Reduzir a fíbula com pinça de redução, corrigindo encurtamento e rotação externa. Conferir os sinais radiográficos: restauração do arco de Shenton do tornozelo, ângulo talocrural simétrico e o \"dime sign\" (moeda) contínuo na ponta lateral do tálus/fíbula.",
      figureId: "step-reduction",
      tips: [
        "Distrair e rodar internamente o fragmento distal costuma reduzir o padrão SER.",
        "Confirmar a redução na incidência de mortise antes de fixar definitivamente.",
      ],
      pitfalls: [
        "Fíbula curta/rodada mantém o tálus subluxado apesar da placa.",
        "Cominução impede aferir comprimento pelo contato cortical — usar o lado sadio como gabarito.",
      ],
    },
    {
      n: 3,
      title: "Parafuso interfragmentário (lag) na fíbula",
      detail:
        "Na fratura oblíqua/espiral, inserir um parafuso interfragmentário perpendicular ao traço, com técnica de lag (furo deslizante na cortical proximal), obtendo compressão interfragmentária antes da placa.",
      figureId: "step-lag-screw",
      tips: [
        "Orientar o lag do fragmento anterior para o posterior conforme a obliquidade do traço.",
        "Escareamento (countersink) distribui a pressão da cabeça e evita fissurar a cortical fina.",
      ],
      pitfalls: [
        "Rosca cruzando ambos os fragmentos anula a compressão (vira parafuso de posição).",
        "Compressão excessiva em osso osteoporótico fragmenta a cortical.",
      ],
    },
    {
      n: 4,
      title: "Placa de neutralização/proteção na fíbula",
      detail:
        "Aplicar placa 1/3 tubular lateral como neutralização, protegendo o lag da torção e flexão. Em osso osteoporótico ou fratura distal, considerar placa antiglide posterior (converte forças de cisalhamento em compressão) ou placa bloqueada.",
      figureId: "step-plate",
      tips: [
        "A placa antiglide posterior evita conflito com os tendões fibulares na ponta.",
        "Parafusos distais mais curtos evitam penetração articular na fíbula distal curva.",
      ],
      pitfalls: [
        "Parafuso distal longo penetra a articulação tibiofibular ou tibiotalar.",
        "Placa lateral proeminente causa irritação do envelope subcutâneo fino.",
      ],
    },
    {
      n: 5,
      title: "Fixação do maléolo medial",
      detail:
        "Reduzir anatomicamente o maléolo medial, removendo periósteo/osteocôndrio interposto. Fixar fragmento transverso com dois parafusos de compressão parcialmente rosqueados; usar banda de tensão para fragmento pequeno ou cominutivo, e fixação antiglide/placa para a fratura vertical do padrão SAD.",
      figureId: "step-medial-malleolus",
      figureVariant: "screws",
      tips: [
        "Dois pontos de fixação controlam a rotação do fragmento.",
        "Na fratura vertical (SAD), buscar e elevar a impacção do plafond ântero-medial.",
      ],
      pitfalls: [
        "Parafuso único permite rotação do fragmento.",
        "Ignorar tecido interposto na fenda impede redução anatômica e favorece pseudartrose.",
      ],
    },
    {
      n: 6,
      title: "Maléolo posterior — quando indicado",
      detail:
        "Fixar o maléolo posterior guiado por instabilidade sindesmótica, degrau articular > 1-2 mm ou impacção, não apenas pelo tamanho. Reduzir e fixar por via posterolateral direta (placa antiglide posterior) ou por parafusos AP/PA. Restaurar a incisura melhora a redução indireta da sindesmose.",
      figureId: "step-posterior-malleolus",
      tips: [
        "A fixação direta do fragmento posterior frequentemente estabiliza a sindesmose e dispensa parafuso transsindesmótico.",
        "Decúbito ventral facilita o acesso e a placa posterior.",
      ],
      pitfalls: [
        "Redução indireta por parafuso AP pode deixar degrau posterior residual.",
        "Fragmento intercalar (Bartoníček) não reconhecido bloqueia a redução.",
      ],
    },
    {
      n: 7,
      title: "Avaliação da sindesmose — teste do gancho e estresse",
      detail:
        "Após a fixação óssea, testar a sindesmose sob fluoroscopia: teste do gancho (tração lateral da fíbula) e estresse por rotação externa, comparando com o lado contralateral. Diástase/instabilidade indicam estabilização.",
      figureId: "step-fluoro-check",
      tips: [
        "Avaliar em planos AP e lateral; a instabilidade sagital pode passar despercebida na AP.",
        "Restaurar o comprimento fibular e o maléolo posterior antes reduz a necessidade de fixação sindesmótica.",
      ],
      pitfalls: [
        "Testar antes de fixar a fíbula gera resultado enganoso.",
        "Reduzir a fíbula manualmente sob visão da incisura evita a má-redução rotacional da sindesmose.",
      ],
    },
    {
      n: 8,
      title: "Estabilização da sindesmose",
      detail:
        "Reduzir a fíbula na incisura (redução direta sob visão é preferível ao clamp cego) e fixar. O dispositivo de suture button (fixação flexível) reduz a má-redução e a necessidade de retirada de implante frente ao parafuso transsindesmótico; parafuso de posição (3,5/4,5 mm, tri ou tetracortical) permanece opção válida.",
      figureId: "step-syndesmosis",
      figureVariant: "suture-button",
      tips: [
        "Manter o tornozelo em posição neutra durante a fixação evita restringir a dorsiflexão.",
        "Direcionar o implante ~30° de posterolateral para anteromedial, paralelo à linha articular.",
      ],
      pitfalls: [
        "Clamp mal posicionado \"aperta\" a fíbula em má-redução rotacional.",
        "Parafuso muito distal ou proximal foge da zona segura da incisura (~2-4 cm acima da articulação).",
      ],
    },
    {
      n: 9,
      title: "Checagem fluoroscópica final da pinça",
      detail:
        "Documentar incidência de mortise e perfil: espaço claro medial simétrico, ângulo talocrural restaurado, ausência de degrau articular e de penetração de implante. Testar a estabilidade e a amplitude passiva antes do fechamento por planos.",
      figureId: "step-fluoro-check",
      tips: [
        "Comparar diretamente com a mortise contralateral quando houver dúvida.",
        "TC intraoperatória, se disponível, é o padrão para confirmar a redução da sindesmose.",
      ],
      pitfalls: [
        "Aceitar espaço claro medial assimétrico residual condena o resultado.",
        "Não rastrear penetração intra-articular de parafuso em incidências oblíquas.",
      ],
    },
  ],
  postop: {
    immobilization:
      "Tala/bota gessada em posição neutra nas primeiras 1-2 semanas para proteção de partes moles; troca por órtese removível (bota walker) assim que a ferida permitir.",
    weightBearing:
      "Na fixação estável, carga precoce (parcial a total conforme tolerada) já a partir de ~2-3 semanas, dentro de bota removível, é segura e melhora a função inicial — individualizar em osso osteoporótico, fixação sindesmótica rígida e baixa adesão.",
    rehab: [
      {
        window: "0-2 semanas",
        weightBearing: "Sem carga / carga de toque, imobilizado",
        focus: "Cuidado da ferida, controle do edema (elevação), mobilização de dedos, prevenção de TVP.",
      },
      {
        window: "2-6 semanas",
        weightBearing: "Carga progressiva conforme tolerada em bota removível",
        focus: "Amplitude ativa de dorsiflexão/plantiflexão fora da bota, dessensibilização da cicatriz.",
      },
      {
        window: "6-12 semanas",
        weightBearing: "Carga total, desmame da bota",
        focus: "Fortalecimento, propriocepção/equilíbrio, marcha normalizada, ganho de dorsiflexão.",
      },
      {
        window: "> 12 semanas",
        weightBearing: "Irrestrita",
        focus: "Retorno progressivo a atividades de impacto e esporte; endurance e agilidade.",
      },
    ],
    followup:
      "Radiografias seriadas para confirmar manutenção da redução e consolidação; vigiar a redução sindesmótica (TC comparativa se houver dúvida). O parafuso de posição pode ser retirado seletivamente (dor/limitação), enquanto o suture button geralmente dispensa retirada. Monitorar rigidez e sinais precoces de artrose.",
  },
  complications: [
    {
      name: "Infecção e deiscência de ferida",
      detail:
        "Envelope de partes moles fino sobre implantes; risco maior em diabéticos, tabagistas e vasculopatas. Pode evoluir para infecção profunda do implante.",
      prevention:
        "Operar após regressão do edema (\"wrinkle sign\"), técnica atraumática de partes moles, considerar tratamento não cirúrgico no idoso frágil (casting de contato próximo reduz infecção de ferida).",
    },
    {
      name: "Má-redução da sindesmose",
      detail:
        "Causa mais associada a mau resultado funcional; a redução por clamp às cegas frequentemente deixa a fíbula rodada/translada na incisura.",
      prevention:
        "Redução direta sob visão da incisura, avaliação em AP e perfil, TC intraoperatória quando disponível; preferir suture button, que reduz taxa de má-redução.",
    },
    {
      name: "Falha / perda de fixação",
      detail:
        "Soltura de parafusos do maléolo medial ou colapso em osso osteoporótico, com perda da redução e desvio talar.",
      prevention:
        "Placa antiglide/bloqueada em osso frágil, dois pontos de fixação no maléolo medial, proteção de carga individualizada.",
    },
    {
      name: "Rigidez articular",
      detail:
        "Perda de dorsiflexão por imobilização prolongada, fibrose ou fixação sindesmótica excessivamente restritiva.",
      prevention:
        "Mobilização precoce fora da bota, fixar a sindesmose com o tornozelo em neutro, reabilitação dirigida à dorsiflexão.",
    },
    {
      name: "Artrose pós-traumática",
      detail:
        "Consequência de redução imperfeita da pinça, desvio talar residual ou lesão condral inicial; poucos milímetros de subluxação reduzem a área de contato.",
      prevention:
        "Redução anatômica da mortise e do comprimento fibular; correção de impacção do plafond (SAD).",
    },
    {
      name: "Lesão neurovascular",
      detail:
        "Neuropraxia do nervo fibular superficial (acesso lateral), do nervo safeno (medial) ou do nervo sural (posterolateral); lesão da artéria fibular no acesso posterolateral.",
      prevention:
        "Conhecer os intervalos, retração cuidadosa, identificar e proteger o fibular superficial na porção proximal da incisão lateral.",
    },
    {
      name: "Trombose venosa profunda / TEP",
      detail:
        "Imobilização e trauma do membro inferior elevam o risco tromboembólico.",
      prevention:
        "Mobilização precoce, tromboprofilaxia conforme estratificação de risco do paciente.",
    },
  ],
  evidence: [
    {
      id: "willett-2016",
      claim:
        "Casting de contato próximo é equivalente à cirurgia em função (OMAS aos 6 meses) em idosos > 60 anos com fratura instável, com menos infecção de ferida (1% vs 10%) porém mais má-união radiográfica (15% vs 3%).",
      takeaway: "No idoso frágil, tratamento não cirúrgico bem moldado é alternativa válida.",
      level: "I",
      studyType: "RCT multicêntrico (JAMA)",
      era: "atual",
      citation: {
        authors: "Willett K, Keene DJ, Mistry D, et al.",
        title:
          "Close Contact Casting vs Surgery for Initial Treatment of Unstable Ankle Fractures in Older Adults: A Randomized Clinical Trial",
        journal: "JAMA",
        year: 2016,
        pmid: "27727383",
        doi: "10.1001/jama.2016.14719",
        url: "https://doi.org/10.1001/jama.2016.14719",
      },
    },
    {
      id: "shimozono-2018",
      claim:
        "Para lesão da sindesmose, o suture button dá melhor AOFAS e menor taxa de má-redução (0,8% vs 11,5%) e de quebra/retirada de implante que o parafuso.",
      takeaway: "Suture button ganha recomendação grau A sobre parafuso em meta-análise de RCTs.",
      level: "I",
      studyType: "Meta-análise de RCTs (Am J Sports Med)",
      era: "atual",
      citation: {
        authors: "Shimozono Y, Hurley ET, Myerson CL, Murawski CD, Kennedy JG",
        title:
          "Suture Button Versus Syndesmotic Screw for Syndesmosis Injuries: A Meta-analysis of Randomized Controlled Trials",
        journal: "Am J Sports Med",
        year: 2018,
        pmid: "30475639",
        doi: "10.1177/0363546518804804",
        url: "https://doi.org/10.1177/0363546518804804",
      },
    },
    {
      id: "lehtola-2021",
      claim:
        "Em seguimento mínimo de ~7 anos, suture button e parafuso mantiveram a redução da sindesmose igualmente, com artrose e função semelhantes.",
      takeaway: "A longo prazo, a diferença entre os dois métodos se atenua.",
      level: "I",
      studyType: "RCT com seguimento de 6+ anos (Injury)",
      era: "atual",
      citation: {
        authors: "Lehtola R, Leskelä HV, Flinkkilä T, et al.",
        title:
          "Suture button versus syndesmosis screw fixation in pronation-external rotation ankle fractures: A minimum 6-year follow-up of a randomised controlled trial",
        journal: "Injury",
        year: 2021,
        pmid: "34246483",
        doi: "10.1016/j.injury.2021.06.025",
        url: "https://doi.org/10.1016/j.injury.2021.06.025",
      },
    },
    {
      id: "lewis-2024",
      claim:
        "Carga precoce (até 3 semanas do pós-operatório) provavelmente melhora a função precoce sem aumentar reoperação; apoio removível pode ajudar.",
      takeaway: "Reabilitação com carga precoce é segura na fixação estável.",
      level: "I",
      studyType: "Revisão sistemática Cochrane",
      era: "atual",
      citation: {
        authors: "Lewis SR, Pritchard MW, Parker R, et al.",
        title: "Rehabilitation for ankle fractures in adults",
        journal: "Cochrane Database Syst Rev",
        year: 2024,
        pmid: "39312389",
        doi: "10.1002/14651858.CD005595.pub4",
        url: "https://doi.org/10.1002/14651858.CD005595.pub4",
      },
    },
    {
      id: "fernandez-rojas-2022",
      claim:
        "A indicação de fixar o maléolo posterior deslocou-se do tamanho do fragmento (> 25-30%) para instabilidade sindesmótica, degrau articular > 1-2 mm, impacção do plafond e fragmentos intercalares; abordagens posteriores são preferidas.",
      takeaway: "Indique pela morfologia/estabilidade, não só pelo tamanho do fragmento.",
      level: "V",
      studyType: "Revisão narrativa",
      era: "atual",
      citation: {
        authors: "Fernández-Rojas E, Herrera-Pérez M, Vilá-Rico J",
        title: "Posterior malleolar fractures: Indications and surgical approaches",
        journal: "Rev Esp Cir Ortop Traumatol",
        year: 2022,
        pmid: "36371071",
        doi: "10.1016/j.recot.2022.10.019",
        url: "https://doi.org/10.1016/j.recot.2022.10.019",
      },
    },
    {
      id: "irwin-2013",
      claim:
        "O maléolo posterior é importante para a transferência de carga tibiotalar e a estabilidade rotatória; sua presença piora o prognóstico; o tamanho do fragmento é citado, mas vários fatores importam.",
      takeaway: "O maléolo posterior não é só tamanho — é estabilidade e prognóstico.",
      level: "V",
      studyType: "Revisão (JAAOS)",
      era: "classico",
      citation: {
        authors: "Irwin TA, Lien J, Kadakia AR",
        title: "Posterior malleolus fracture",
        journal: "J Am Acad Orthop Surg",
        year: 2013,
        pmid: "23281469",
        doi: "10.5435/JAAOS-21-01-32",
        url: "https://doi.org/10.5435/JAAOS-21-01-32",
      },
    },
    {
      id: "boszczyk-2017",
      claim:
        "A classificação de Lauge-Hansen previu o mecanismo relatado pelo paciente em menos de 50% dos casos.",
      takeaway: "Use Lauge-Hansen com cautela como modelo de mecanismo; ainda útil descritivamente.",
      level: "IV",
      studyType: "Estudo de correlação",
      era: "classico",
      citation: {
        authors: "Boszczyk A, Fudalej M, Kwapisz S, et al.",
        title:
          "Ankle fracture - Correlation of Lauge-Hansen classification and patient reported fracture mechanism",
        journal: "Forensic Sci Int",
        year: 2017,
        pmid: "29182957",
        doi: "10.1016/j.forsciint.2017.11.023",
        url: "https://doi.org/10.1016/j.forsciint.2017.11.023",
      },
    },
  ],
  pearls: [
    "A pergunta é a estabilidade da pinça, não o número de maléolos: um Weber B com estresse negativo é estável.",
    "Comprimento e rotação da fíbula são o alicerce — sem eles, nenhuma outra fixação centra o tálus.",
    "Espaço claro medial simétrico e ≤ 4 mm é o melhor indicador radiográfico de tálus centrado.",
    "Restaurar o maléolo posterior e o comprimento fibular muitas vezes reduz indiretamente a sindesmose e dispensa fixação transsindesmótica.",
    "Prefira redução direta da sindesmose sob visão da incisura; suture button reduz a má-redução frente ao parafuso.",
    "Carga precoce na fixação estável, dentro de bota removível, é segura e acelera a recuperação funcional.",
    "No idoso frágil, casting de contato próximo bem moldado rivaliza com a cirurgia, com menos infecção de ferida.",
  ],
  pitfalls: [
    "Fixar a sindesmose com a fíbula ainda curta/rodada perpetua a má-redução.",
    "Redução sindesmótica por clamp às cegas é a principal fonte de má-redução — confie na visão direta.",
    "Parafuso único no maléolo medial permite rotação do fragmento.",
    "Ignorar impacção do plafond ântero-medial no padrão SAD condena a mortise.",
    "Operar sobre partes moles edemaciadas eleva a taxa de deiscência e infecção.",
    "Indicar fixação do maléolo posterior só pelo tamanho, ignorando instabilidade e degrau articular.",
    "Aceitar espaço claro medial assimétrico residual ao final — antecipa artrose pós-traumática.",
  ],
  figures: [
    {
      id: "ankle-mortise",
      caption: "Pinça (mortise) do tornozelo em incidência AP.",
      alt: "Tíbia com maléolo medial e fíbula com maléolo lateral formando o encaixe que abraça a cúpula do tálus, com espaço articular uniforme.",
    },
    {
      id: "ankle-ligaments",
      caption: "Ligamentos: sindesmose, deltoide medial e colateral lateral.",
      alt: "Sindesmose (LTFA-I, LTFP-I, interósseo), complexo deltoide medial e ligamentos colaterais laterais LTFA, LCF e LTFP.",
    },
    {
      id: "ankle-ring",
      caption: "Conceito do anel osteoligamentar do tornozelo.",
      alt: "Anel ósseo e ligamentar mostrando que a lesão em um ponto implica procurar uma segunda lesão.",
    },
    {
      id: "weber",
      caption: "Danis-Weber A — fratura fibular infrassindesmótica.",
      alt: "Traço de fratura da fíbula abaixo do plafond, sindesmose íntegra.",
      variant: "A",
    },
    {
      id: "weber",
      caption: "Danis-Weber B — fratura fibular ao nível da sindesmose.",
      alt: "Traço oblíquo da fíbula ao nível da sindesmose.",
      variant: "B",
    },
    {
      id: "weber",
      caption: "Danis-Weber C — fratura fibular suprassindesmótica.",
      alt: "Traço de fratura da fíbula acima da sindesmose, com lesão sindesmótica.",
      variant: "C",
    },
    {
      id: "lauge-hansen",
      caption: "Lauge-Hansen — estágios por mecanismo (SER/PER/SAD/PAB).",
      alt: "Esquema dos estágios sequenciais de lesão conforme posição do pé e força deformante.",
    },
    {
      id: "syndesmosis",
      caption: "Sindesmose: normal, lesada e as duas fixações.",
      alt: "Incisura tibiofibular normal, alargada por diástase, fixada por parafuso e por suture button.",
    },
    {
      id: "approach-lateral",
      caption: "Acesso lateral sobre a fíbula.",
      alt: "Incisão longitudinal lateral sobre a fíbula distal.",
    },
    {
      id: "approach-medial",
      caption: "Acesso medial sobre o maléolo medial.",
      alt: "Incisão curvilínea medial sobre o maléolo medial.",
    },
    {
      id: "approach-posterolateral",
      caption: "Acesso posterolateral (fibulares / FHL).",
      alt: "Intervalo entre os tendões fibulares e o flexor longo do hálux para o maléolo posterior e a fíbula.",
    },
    {
      id: "step-reduction",
      caption: "Redução da fíbula com pinça — comprimento e rotação.",
      alt: "Pinça de redução restaurando o comprimento e a rotação da fíbula.",
    },
    {
      id: "step-lag-screw",
      caption: "Parafuso interfragmentário (lag) na fíbula.",
      alt: "Parafuso de compressão perpendicular ao traço oblíquo da fíbula.",
    },
    {
      id: "step-plate",
      caption: "Placa de neutralização 1/3 tubular na fíbula.",
      alt: "Placa lateral protegendo o parafuso interfragmentário da fíbula.",
    },
    {
      id: "step-medial-malleolus",
      caption: "Maléolo medial — dois parafusos de compressão.",
      alt: "Dois parafusos parcialmente rosqueados fixando o maléolo medial.",
      variant: "screws",
    },
    {
      id: "step-posterior-malleolus",
      caption: "Fixação do maléolo posterior.",
      alt: "Placa antiglide posterior ou parafusos fixando o fragmento do maléolo posterior.",
    },
    {
      id: "step-syndesmosis",
      caption: "Estabilização da sindesmose com suture button.",
      alt: "Dispositivo de fixação flexível reduzindo a fíbula na incisura tibiofibular.",
      variant: "suture-button",
    },
    {
      id: "step-fluoro-check",
      caption: "Checagem fluoroscópica: mortise e teste do gancho.",
      alt: "Incidência de mortise e teste do gancho avaliando a estabilidade da sindesmose.",
    },
  ],
  meta: {
    lastReviewed: "2026-07-12",
    sources: [
      "Willett K, et al. JAMA 2016 (RCT casting vs cirurgia no idoso)",
      "Shimozono Y, et al. Am J Sports Med 2018 (meta-análise suture button vs parafuso)",
      "Lehtola R, et al. Injury 2021 (seguimento de 6+ anos)",
      "Lewis SR, et al. Cochrane 2024 (reabilitação/carga precoce)",
      "Fernández-Rojas E, et al. 2022 e Irwin TA, et al. JAAOS 2013 (maléolo posterior)",
      "Boszczyk A, et al. Forensic Sci Int 2017 (validade de Lauge-Hansen)",
      "Princípios AO de tratamento de fraturas (referência técnica)",
    ],
    attribution: "Evidência recuperada do PubMed. Ver DOIs citados.",
  },
});
