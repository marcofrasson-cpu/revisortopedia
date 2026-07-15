import { defineTopic } from "../../types/topic";

/* ============================================================================
   Fratura do acetábulo — referência clínica pt-BR (terminologia Judet-Letournel
   / AO-OTA 62). Evidência recuperada do PubMed (ver DOIs). Renderizada pelo
   renderizador genérico a partir deste objeto de dados.
   ========================================================================== */

export const topic = defineTopic({
  id: "mi-acetabulo-fratura",
  slug: "fratura-acetabulo",
  regionId: "membro-inferior",
  bone: "Acetábulo",
  injury: "Fratura articular",
  title: "Fratura do acetábulo",
  subtitle:
    "Restaurar a congruência da superfície articular e o suporte das duas colunas — cabeça femoral centrada e estável sob a carga do teto.",
  laterality: null,
  status: "complete",
  overview:
    "A fratura do acetábulo é uma lesão articular de manejo complexo em que o objetivo primário é uma redução anatômica da superfície articular, porque o prognóstico a longo prazo depende fortemente da congruência entre a cabeça femoral e o teto acetabular. A anatomia é entendida pelo modelo das duas colunas de Judet e Letournel (o \"Y invertido\"): uma coluna anterior (ílio-púbica) e uma coluna posterior (ílio-isquiática), unidas ao esqueleto axial pelo teto. A leitura das fraturas combina três incidências radiográficas (AP e as oblíquas de Judet — obturadora e alar) com a tomografia computadorizada, que hoje é indispensável para caracterizar impacção marginal, fragmentos intra-articulares, cominução da parede posterior e o envolvimento do plano quadrilátero. Existem dois grandes cenários epidemiológicos: o adulto jovem com trauma de alta energia e o idoso com trauma de baixa energia sobre osso osteoporótico — este último em franca ascensão e com padrões distintos (predomínio da coluna anterior, componente do plano quadrilátero, impacção do teto). A decisão terapêutica moderna vai da redução aberta e fixação interna (ORIF) à artroplastia total do quadril aguda associada à osteossíntese (\"fix-and-replace\") no idoso selecionado.",
  keyFacts: [
    { label: "Modelo anatômico", value: "Duas colunas de Judet-Letournel (anterior e posterior)" },
    { label: "Classificação", value: "Judet-Letournel: 5 elementares + 5 associadas (AO/OTA 62)" },
    { label: "Imagem", value: "3 incidências (AP + oblíquas de Judet) + TC obrigatória" },
    { label: "Objetivo cirúrgico", value: "Redução anatômica; degrau/gap articular ≤ 2 mm" },
    { label: "Fator prognóstico chave", value: "Congruência cabeça-teto e qualidade da redução" },
    { label: "Vias principais", value: "Kocher-Langenbeck (post.) e ilioinguinal (ant.)" },
    { label: "Idoso", value: "Considerar ORIF + ATQ aguda (fix-and-replace)" },
  ],
  anatomy: {
    text:
      "O acetábulo é sustentado por duas colunas ósseas que formam um arco em Y invertido convergindo sobre o teto (dome). A coluna anterior (ílio-púbica) estende-se da crista ilíaca e da espinha ilíaca ântero-superior, passa pela borda pélvica (linha iliopectínea) e termina na sínfise púbica; a coluna posterior (ílio-isquiática) vai da incisura isquiática maior, através do corpo do ísquio, até a tuberosidade isquiática, e é marcada radiograficamente pela linha ilioisquiática. As paredes anterior e posterior são os rebordos que contêm a cabeça femoral, sendo a parede posterior a mais frequentemente fraturada nas luxações posteriores. O teto (sourcil) é a porção súpero-medial que transmite a maior parte da carga; sua integridade e congruência determinam o prognóstico. O plano (lâmina) quadrilátero é a fina parede medial da pelve verdadeira, que separa a articulação da cavidade pélvica e cujo deslocamento medial gera o padrão de protrusão — particularmente relevante no idoso. A superfície articular em forma de meia-lua (lunata) reveste ambas as colunas e a fossa acetabular é não articular. As seis linhas radiográficas da incidência AP resumem a anatomia projetada: linha iliopectínea (coluna anterior), linha ilioisquiática (coluna posterior), lágrima (teardrop, relação entre a parede anterior/quadrilátero e a fossa), linha do teto, rebordo anterior e rebordo posterior. A leitura sistemática de cada linha, complementada pelas oblíquas de Judet e pela TC, é a base para classificar e planejar o acesso.",
    figureIds: ["fratura-acetabulo:anatomia", "fratura-acetabulo:linhas-radiograficas"],
  },
  classification: [
    {
      id: "judet-letournel-elementares",
      name: "Judet-Letournel — fraturas elementares",
      basis:
        "Envolvimento de um único elemento estrutural (uma parede, uma coluna ou uma linha transversa única). Base anatômica das duas colunas; orienta diretamente a escolha da via de acesso.",
      note:
        "Cinco padrões elementares. A parede posterior é a mais comum das elementares e associa-se a luxação posterior do quadril.",
      types: [
        {
          code: "PP",
          label: "Parede posterior",
          description:
            "Fragmento do rebordo/parede posterior, tipicamente por luxação posterior do quadril (trauma no painel — dashboard). Buscar impacção marginal e fragmentos osteocondrais na TC; avaliar estabilidade sob estresse. Acesso: Kocher-Langenbeck.",
          figureId: "fratura-acetabulo:judet-elementares",
          figureVariant: "parede-posterior",
        },
        {
          code: "CP",
          label: "Coluna posterior",
          description:
            "Traço através da coluna ílio-isquiática, cruzando a incisura isquiática maior em direção ao forame obturador; rompe a linha ilioisquiática e a lágrima desloca-se com o fragmento. Acesso: Kocher-Langenbeck.",
          figureId: "fratura-acetabulo:judet-elementares",
          figureVariant: "coluna-posterior",
        },
        {
          code: "PA",
          label: "Parede anterior",
          description:
            "Fratura do rebordo anterior, relativamente rara e isolada; frequentemente associada a padrões da coluna anterior. Acesso: ilioinguinal ou anterior intrapélvico.",
          figureId: "fratura-acetabulo:judet-elementares",
          figureVariant: "parede-anterior",
        },
        {
          code: "CA",
          label: "Coluna anterior",
          description:
            "Traço da coluna ílio-púbica, rompendo a linha iliopectínea; extensão variável (baixa, média ou alta, até a crista ilíaca). Comum no idoso. Acesso: ilioinguinal / anterior intrapélvico.",
          figureId: "fratura-acetabulo:judet-elementares",
          figureVariant: "coluna-anterior",
        },
        {
          code: "T",
          label: "Transversa",
          description:
            "Linha única, horizontal, que separa o segmento superior (ílio + teto, ligado ao esqueleto axial) das duas colunas inferiores; subclassificada em transtectal, justatectal e infratectal conforme a relação com o teto. Não é uma fratura de duas colunas verdadeira.",
          figureId: "fratura-acetabulo:judet-elementares",
          figureVariant: "transversa",
        },
      ],
    },
    {
      id: "judet-letournel-associadas",
      name: "Judet-Letournel — fraturas associadas",
      basis:
        "Combinação de dois ou mais padrões elementares. Padrões de maior energia e complexidade; a distinção guia a via única, combinada ou estendida.",
      note:
        "Cinco padrões associados. A fratura das duas colunas é a associada mais comum e define-se pela dissociação de toda a superfície articular do esqueleto axial (sinal do esporão — spur sign — na oblíqua obturadora).",
      types: [
        {
          code: "CP+PP",
          label: "Coluna posterior + parede posterior",
          description:
            "Traço da coluna posterior com fragmento adicional da parede posterior; alta associação com lesão do nervo isquiático e da vascularização da cabeça femoral. Acesso: Kocher-Langenbeck.",
          figureId: "fratura-acetabulo:judet-associadas",
          figureVariant: "coluna-post-parede-post",
        },
        {
          code: "T+PP",
          label: "Transversa + parede posterior",
          description:
            "Padrão transverso somado a fragmento da parede posterior; frequentemente com luxação posterior. Prognóstico reservado; pode exigir manejo do componente anterior por redução indireta. Acesso: Kocher-Langenbeck (± manobras adicionais).",
          figureId: "fratura-acetabulo:judet-associadas",
          figureVariant: "transversa-parede-post",
        },
        {
          code: "T-shape",
          label: "Em T",
          description:
            "Fratura transversa com uma haste vertical que divide as duas colunas inferiores através do plano quadrilátero e do forame obturador, dissociando-as entre si. Uma das mais difíceis de reduzir; pode requerer acesso combinado.",
          figureId: "fratura-acetabulo:judet-associadas",
          figureVariant: "t",
        },
        {
          code: "CA+HT",
          label: "Coluna anterior + hemitransversa posterior",
          description:
            "Fratura completa da coluna anterior associada a um traço transverso que envolve apenas a coluna posterior (hemitransversa). Comum no idoso; parte da superfície articular permanece ligada ao ílio intacto — é exatamente isso que a distingue da fratura das duas colunas. Acesso: ilioinguinal / anterior intrapélvico.",
          figureId: "fratura-acetabulo:judet-associadas",
          figureVariant: "coluna-ant-hemitransversa-post",
        },
        {
          code: "2COL",
          label: "Ambas as colunas",
          description:
            "Dissociação de toda a superfície articular do esqueleto axial (nenhum fragmento articular permanece preso ao ílio intacto) — a \"congruência secundária\" pode fazer a cabeça femoral acompanhar os fragmentos deslocados. Sinal do esporão na oblíqua obturadora. É a associada mais frequente. Acesso: ilioinguinal, anterior intrapélvico ou estendido.",
          figureId: "fratura-acetabulo:judet-associadas",
          figureVariant: "duas-colunas",
        },
      ],
    },
    {
      id: "ao-ota-62",
      name: "AO/OTA (segmento 62)",
      basis:
        "Codificação alfanumérica do acetábulo (62) por grupos A/B/C conforme o envolvimento das colunas, espelhando a lógica de Judet-Letournel.",
      note: "Padrão para registro e comunicação; correlaciona-se com os grupos elementares/associados.",
      types: [
        {
          code: "62A",
          label: "Uma coluna / uma parede",
          description:
            "Lesão de um único elemento (parede ou coluna, anterior ou posterior) — corresponde às fraturas elementares parciais articulares.",
        },
        {
          code: "62B",
          label: "Transversa / em T (teto parcialmente preso)",
          description:
            "Padrões transversos e em T e a coluna anterior + hemitransversa posterior — parte do teto mantém-se ligada ao ílio.",
        },
        {
          code: "62C",
          label: "Ambas as colunas",
          description:
            "Toda a superfície articular dissociada do esqueleto axial (fratura das duas colunas) — articular completa.",
        },
      ],
    },
  ],
  indications: {
    operative: [
      "Deslocamento articular / degrau ou gap > 2 mm no teto ou na superfície de carga.",
      "Incongruência entre a cabeça femoral e o teto acetabular (subluxação/instabilidade).",
      "Fratura instável da parede posterior (> ~40-50% da parede ou instabilidade em exame sob estresse/EUA).",
      "Fragmentos intra-articulares livres (corpos osteocondrais) ou incarceramento articular.",
      "Impacção marginal ou do teto que exige elevação e enxertia.",
      "Luxação irredutível do quadril ou redução instável após manobras fechadas.",
      "Protrusão medial da cabeça com perda do suporte do plano quadrilátero.",
    ],
    nonOperative: [
      "Fratura sem desvio ou com desvio mínimo (< 2 mm) e articulação congruente e estável.",
      "Fratura que poupa o teto de carga (arcos do teto medial, anterior e posterior ≥ 45°, cada um medido na sua incidência: AP, obturadora e alar).",
      "Fraturas baixas da coluna/parede anterior ou infratectais que não afetam a área de carga e mantêm a congruência.",
      "Fratura das duas colunas com congruência secundária satisfatória e boa cobertura da cabeça.",
      "Paciente com contraindicação clínica proibitiva ao ato cirúrgico ou partes moles/lesões associadas que inviabilizam a osteossíntese.",
    ],
    decisionNotes:
      "A pergunta central é: a cabeça femoral está e permanecerá congruente e centrada sob o teto de carga? Isso se avalia pelos \"arcos do teto\" (roof arc angles) nas três incidências e pela TC (subluxação, impacção, fragmentos). Fraturas que preservam a área de carga e mantêm a congruência podem ser tratadas de forma não cirúrgica com carga protegida. Quando há indicação cirúrgica, a via decorre do padrão: acessos posteriores (Kocher-Langenbeck) para parede/coluna posterior; acessos anteriores (ilioinguinal ou intrapélvico anterior/Stoppa modificado) para coluna/parede anterior, plano quadrilátero e duas colunas; padrões transversos altos ou complexos podem exigir acesso combinado ou estendido. No idoso com osso osteoporótico, cominução do teto, impacção significativa, fratura da cabeça femoral ou artrose prévia, a ORIF isolada tem maior taxa de conversão para artroplastia — nesse cenário, a osteossíntese associada à artroplastia total do quadril aguda (\"fix-and-replace\" / combined hip procedure) permite mobilização e carga mais precoces, com bons resultados funcionais em pacientes selecionados.",
  },
  approaches: [
    {
      id: "kocher-langenbeck",
      name: "Kocher-Langenbeck (posterior)",
      indication:
        "Parede posterior, coluna posterior, coluna posterior + parede posterior, muitas transversas e transversa + parede posterior; permite acesso direto à superfície articular posterior.",
      interval:
        "Divisão do glúteo máximo no sentido de suas fibras e secção dos rotadores curtos (piriforme, obturadores/gêmeos), preservando o quadrado femoral (protege a circunflexa femoral medial). Decúbito ventral ou lateral; joelho fletido relaxa o isquiático.",
      atRisk: [
        "Nervo isquiático (manter o joelho fletido e o quadril estendido; retração cuidadosa)",
        "Artéria circunflexa femoral medial (não seccionar o quadrado femoral — vasculariza a cabeça)",
        "Artéria glútea superior (na incisura isquiática maior)",
      ],
      figureId: "fratura-acetabulo:via-kocher-langenbeck",
    },
    {
      id: "ilioinguinal",
      name: "Ilioinguinal (anterior)",
      indication:
        "Coluna anterior, parede anterior, coluna anterior + hemitransversa posterior e fraturas das duas colunas; acesso extenso da articulação sacroilíaca à sínfise.",
      interval:
        "Três janelas: (1) lateral — fossa ilíaca, elevando o ilíaco; (2) média — entre o iliopsoas/nervo femoral (lateral) e os vasos ilíacos externos (medial); (3) medial — retropúbica (espaço de Retzius), medial aos vasos. Requer mobilização e proteção do feixe vascular.",
      atRisk: [
        "Vasos ilíacos externos / femorais (janela média e medial)",
        "Nervo femoral e nervo cutâneo femoral lateral",
        "Cordão espermático / ligamento redondo (janela medial)",
        "\"Corona mortis\" (anastomose obturatória-ilíaca externa retropúbica)",
      ],
      figureId: "fratura-acetabulo:via-ilioinguinal",
    },
    {
      id: "anterior-intrapelvico",
      name: "Anterior intrapélvico (Stoppa modificado)",
      indication:
        "Coluna anterior, plano quadrilátero e protrusão medial; acesso direto à face interna da pelve, popular no idoso e como alternativa/complemento à ilioinguinal.",
      interval:
        "Via de Pfannenstiel/linha média baixa até o espaço retropúbico, medial aos vasos, com janela lateral (primeira janela da ilioinguinal) associada quando necessário; permite placa infrapectínea sobre o quadrilátero.",
      atRisk: [
        "Corona mortis e vasos obturatórios",
        "Bexiga e vasos ilíacos externos",
        "Nervo obturatório",
      ],
      figureId: "fratura-acetabulo:via-ilioinguinal",
    },
  ],
  technique: [
    {
      n: 1,
      title: "Planejamento por imagem e escolha da via",
      detail:
        "Analisar as três incidências (AP + oblíquas de Judet) e a TC com reconstruções para definir o padrão de Judet-Letournel, a integridade do teto (arcos do teto), impacção marginal, fragmentos intra-articulares, o plano quadrilátero e a qualidade óssea. A via decorre do padrão: posterior (Kocher-Langenbeck) para parede/coluna posterior; anterior (ilioinguinal / intrapélvico) para coluna anterior, quadrilátero e duas colunas.",
      figureId: "fratura-acetabulo:linhas-radiograficas",
      tips: [
        "Os arcos do teto (medial, anterior e posterior ≥ 45°) ajudam a decidir entre tratamento cirúrgico e não cirúrgico nas fraturas que poupam o teto.",
        "TC define impacção do teto e fragmentos incarcerados que a radiografia não mostra.",
      ],
      pitfalls: [
        "Escolher a via pelo nome da fratura sem confirmar a extensão na TC (p. ex., transversa alta transtectal).",
        "Subestimar cominução/osteoporose do idoso, que muda a estratégia para artroplastia.",
      ],
    },
    {
      n: 2,
      title: "Posicionamento e exposição",
      detail:
        "Posicionar conforme a via (ventral/lateral para Kocher-Langenbeck; supino para acessos anteriores). Expor respeitando os intervalos e protegendo as estruturas em risco — isquiático (posterior) e feixe ilíaco/femoral (anterior). Manter o joelho fletido no acesso posterior para relaxar o nervo isquiático.",
      figureId: "fratura-acetabulo:via-kocher-langenbeck",
      tips: [
        "Monitorização do nervo isquiático e checagem intermitente da tensão durante a retração.",
        "Preservar o quadrado femoral protege a artéria circunflexa femoral medial.",
      ],
      pitfalls: [
        "Retração excessiva do isquiático → neuropraxia (a complicação neurológica mais comum).",
        "Lesão da glútea superior na incisura isquiática maior com sangramento de difícil controle.",
      ],
    },
    {
      n: 3,
      title: "Redução das colunas e da superfície articular",
      detail:
        "Reduzir primeiro o componente que restaura a referência anatômica (frequentemente a coluna que dá comprimento e rotação), usando pinças de redução específicas (Farabeuf, angulada, ponta em bola) e parafusos de tração (Schanz) na tuberosidade isquiática. Confirmar a redução da superfície articular direta ou indiretamente e fixar provisoriamente com fios de Kirschner.",
      figureId: "fratura-acetabulo:step-reducao",
      tips: [
        "Reduzir a coluna posterior antes da parede recria o leito para o fragmento articular.",
        "Elevar e enxertar a impacção marginal antes de fixar a parede posterior.",
      ],
      pitfalls: [
        "Aceitar degrau/gap > 2 mm no teto compromete o resultado a longo prazo.",
        "Deixar fragmento intra-articular incarcerado → desgaste condral acelerado.",
      ],
    },
    {
      n: 4,
      title: "Fixação com parafuso interfragmentário e placa de reconstrução",
      detail:
        "Obter compressão interfragmentária com parafuso de tração (lag) perpendicular ao traço e neutralizar com placa de reconstrução moldada ao contorno da coluna (posterior) ou do brim pélvico (anterior). No idoso/quadrilátero, considerar placa infrapectínea de suporte ao plano quadrilátero.",
      figureId: "fratura-acetabulo:step-placa",
      tips: [
        "Moldar cuidadosamente a placa evita que a fixação desloque a redução.",
        "Placas de buttress/suporte contêm a protrusão medial do quadrilátero.",
      ],
      pitfalls: [
        "Parafuso intra-articular — o risco maior desta cirurgia; usar zonas seguras e checar em oblíquas/fluoroscopia.",
        "Placa mal contornada reproduz ou cria má-redução.",
      ],
    },
    {
      n: 5,
      title: "Confirmar ausência de parafuso intra-articular e a congruência",
      detail:
        "Documentar por fluoroscopia (AP e oblíquas de Judet) e/ou TC intraoperatória a redução articular, a ausência de penetração de implante na articulação e a congruência cabeça-teto. Testar amplitude e estabilidade antes do fechamento por planos.",
      figureId: "fratura-acetabulo:step-placa",
      tips: [
        "A incidência com o intensificador \"rodando\" pelo quadril detecta parafuso intra-articular oculto na AP.",
        "TC intraoperatória, quando disponível, é o padrão para confirmar a redução do quadrilátero e das colunas.",
      ],
      pitfalls: [
        "Confiar apenas na AP pode mascarar penetração articular do parafuso.",
        "Não reconhecer subluxação residual da cabeça no fechamento.",
      ],
    },
    {
      n: 6,
      title: "ORIF + artroplastia total aguda (fix-and-replace) — idoso selecionado",
      detail:
        "Em paciente idoso com osso osteoporótico, cominução do teto, impacção, fratura da cabeça femoral ou artrose prévia, estabilizar as colunas o suficiente para dar suporte a um componente acetabular (placa da coluna posterior/anterior, cerclagem, tela/gaiola e enxerto) e implantar uma artroplastia total do quadril na mesma cirurgia, buscando fixação estável do cotilo (frequentemente não cimentado com parafusos) para permitir carga precoce.",
      figureId: "fratura-acetabulo:step-artroplastia",
      tips: [
        "Restaurar primeiro o contraforte posterior/coluna dá suporte mecânico ao cotilo.",
        "Cotilo multiperfurado com parafusos e enxerto do teto melhora a fixação inicial no osso fraturado.",
      ],
      pitfalls: [
        "Fixar o cotilo sobre colunas instáveis → soltura precoce.",
        "Subestimar a taxa de luxação e ossificação heterotópica desses procedimentos combinados.",
      ],
    },
  ],
  postop: {
    immobilization:
      "Sem imobilização rígida de rotina; controle da dor e do edema, com precauções de luxação (sobretudo após acesso posterior e nos procedimentos combinados com artroplastia).",
    weightBearing:
      "Após ORIF isolada, tradicionalmente carga protegida (toque ao solo/parcial) por ~6-12 semanas até sinais de consolidação — protocolos de carga permanecem heterogêneos e sem padronização. Após ORIF + artroplastia total aguda (fix-and-replace), a carga costuma ser mais precoce (frequentemente total ou parcial precoce), o que favorece a reabilitação do idoso.",
    rehab: [
      {
        window: "0-2 semanas",
        weightBearing: "Toque ao solo / sem carga (ORIF); conforme protocolo na artroplastia aguda",
        focus: "Controle da dor e do edema, profilaxia de TVP, mobilização assistida, precauções de luxação.",
      },
      {
        window: "2-6 semanas",
        weightBearing: "Carga parcial progressiva conforme padrão e fixação",
        focus: "Amplitude de movimento do quadril dentro das precauções, fortalecimento isométrico, transferências.",
      },
      {
        window: "6-12 semanas",
        weightBearing: "Progressão para carga total guiada por radiografias (ORIF)",
        focus: "Marcha, fortalecimento de abdutores, ganho funcional; desmame de auxílio.",
      },
      {
        window: "> 12 semanas",
        weightBearing: "Carga total / irrestrita conforme consolidação",
        focus: "Reabilitação avançada, endurance e retorno funcional; vigilância de artrose/ossificação.",
      },
    ],
    followup:
      "Radiografias seriadas (AP + oblíquas de Judet) para acompanhar consolidação, manutenção da redução, sinais de artrose pós-traumática, necrose avascular e ossificação heterotópica; TC quando houver dúvida sobre a redução. Nos casos com artroplastia, vigiar fixação/soltura do cotilo e luxação. Considerar profilaxia de ossificação heterotópica em acessos posteriores/estendidos de alto risco.",
  },
  complications: [
    {
      name: "Artrose pós-traumática",
      detail:
        "Complicação mais relevante a longo prazo; correlaciona-se diretamente com a qualidade da redução e a congruência cabeça-teto. Redução imperfeita, impacção do teto e lesão condral inicial aceleram o desgaste, levando à conversão para artroplastia.",
      prevention:
        "Redução anatômica (degrau/gap ≤ 2 mm), elevação da impacção marginal, remoção de fragmentos intra-articulares; considerar artroplastia aguda quando a congruência não é recuperável no idoso.",
    },
    {
      name: "Lesão do nervo isquiático",
      detail:
        "Neuropraxia (mais frequente o componente fibular) por tração no acesso posterior ou pela própria fratura/luxação, sobretudo em padrões da coluna/parede posterior.",
      prevention:
        "Joelho fletido e quadril estendido durante a retração, dissecção e retração cuidadosas, monitorização; evitar retração prolongada.",
    },
    {
      name: "Parafuso intra-articular",
      detail:
        "Penetração de implante na articulação com dano condral progressivo; pode passar despercebida na incidência AP.",
      prevention:
        "Uso das zonas seguras, fluoroscopia em oblíquas com o quadril \"rodando\", TC intraoperatória quando disponível.",
    },
    {
      name: "Ossificação heterotópica",
      detail:
        "Mais comum após acessos posteriores e estendidos e em pacientes com trauma craniano; pode limitar a amplitude do quadril.",
      prevention:
        "Lavagem/desbridamento de músculo desvitalizado, profilaxia (indometacina ou radioterapia) nos casos de alto risco.",
    },
    {
      name: "Necrose avascular da cabeça femoral",
      detail:
        "Decorrente da lesão da artéria circunflexa femoral medial (luxação posterior / manipulação da coluna posterior); pode surgir tardiamente.",
      prevention:
        "Redução precoce da luxação, preservação do quadrado femoral e dos vasos retinaculares no acesso posterior.",
    },
    {
      name: "Infecção e complicações de ferida",
      detail:
        "Risco aumentado em acessos extensos/estendidos, lesão de Morel-Lavallée, obesidade, diabetes e trauma de alta energia.",
      prevention:
        "Manejo da lesão de Morel-Lavallée, técnica meticulosa de partes moles, antibioticoprofilaxia e escolha criteriosa da via.",
    },
    {
      name: "Trombose venosa profunda / tromboembolismo",
      detail:
        "Trauma pélvico e imobilização elevam o risco tromboembólico, potencialmente fatal.",
      prevention:
        "Tromboprofilaxia mecânica e farmacológica, mobilização precoce, rastreio conforme risco.",
    },
    {
      name: "Falha de fixação / soltura do cotilo (fix-and-replace)",
      detail:
        "Perda da redução em osso osteoporótico ou soltura precoce do componente acetabular quando as colunas não dão suporte adequado.",
      prevention:
        "Estabilização suficiente das colunas antes da artroplastia, cotilo multiperfurado com parafusos, enxerto do teto, tela/gaiola quando necessário.",
    },
  ],
  evidence: [
    {
      id: "matta-1996",
      claim:
        "Em 262 fraturas operadas em até 3 semanas, a redução anatômica foi obtida em 71% e o resultado clínico correlacionou-se estreitamente com a qualidade da redução e a congruência cabeça-teto; a taxa de redução anatômica caía com a complexidade, a idade e o atraso cirúrgico.",
      takeaway:
        "A redução anatômica e a congruência são os principais determinantes do resultado — o alvo é degrau/gap mínimo no teto de carga.",
      level: "IV",
      studyType: "Série de casos operatória (JBJS Am)",
      era: "classico",
      citation: {
        authors: "Matta JM",
        title:
          "Fractures of the acetabulum: accuracy of reduction and clinical results in patients managed operatively within three weeks after the injury",
        journal: "J Bone Joint Surg Am",
        year: 1996,
        pmid: "8934477",
        url: "https://pubmed.ncbi.nlm.nih.gov/8934477/",
      },
    },
    {
      id: "ferguson-2010",
      claim:
        "Em base prospectiva de 1309 fraturas do acetábulo (1980-2007), a proporção de idosos (> 60 anos) aumentou 2,4 vezes; nos idosos predominaram fraturas com deslocamento da coluna anterior (64% vs 43%) e, dentro dessas fraturas anteriores, componente separado do plano quadrilátero (50,8%) e impacção do teto (40%) — características associadas a pior prognóstico.",
      takeaway:
        "A fratura do acetábulo no idoso é crescente e tem padrões próprios (coluna anterior, quadrilátero, impacção) que orientam a decisão terapêutica.",
      level: "III",
      studyType: "Estudo epidemiológico/radiológico prospectivo (JBJS Br)",
      era: "classico",
      citation: {
        authors: "Ferguson TA, Patel R, Bhandari M, Matta JM",
        title:
          "Fractures of the acetabulum in patients aged 60 years and older: an epidemiological and radiological study",
        journal: "J Bone Joint Surg Br",
        year: 2010,
        pmid: "20130318",
        doi: "10.1302/0301-620X.92B2.22488",
        url: "https://doi.org/10.1302/0301-620X.92B2.22488",
      },
    },
    {
      id: "boraiah-2009",
      claim:
        "Em série selecionada (idade média 71 anos, maioria com fratura da parede posterior e impacção da cabeça femoral), a ORIF combinada com artroplastia total primária (fix-and-replace) obteve Harris Hip Score médio de 88, com consolidação e fixação estáveis do cotilo em quase todos os casos.",
      takeaway:
        "Em pacientes bem selecionados, ORIF + artroplastia total aguda é opção de tratamento aceitável e restaura função precocemente.",
      level: "IV",
      studyType: "Série de casos (J Orthop Trauma)",
      era: "classico",
      citation: {
        authors: "Boraiah S, Ragsdale M, Achor T, Zelicof S, Asprinio DE",
        title:
          "Open reduction internal fixation and primary total hip arthroplasty of selected acetabular fractures",
        journal: "J Orthop Trauma",
        year: 2009,
        pmid: "19318866",
        doi: "10.1097/BOT.0b013e3181923fb8",
        url: "https://doi.org/10.1097/BOT.0b013e3181923fb8",
      },
    },
    {
      id: "maccormick-2019",
      claim:
        "Estudo caso-controle pareado (45-65 anos, fraturas com parede posterior): a artroplastia total aguda teve sobrevida significativamente melhor do procedimento-índice do que a ORIF (na qual 37% evoluíram para/foram referidos a artroplastia) e Oxford Hip Score numericamente superior (44 vs 40), com taxas de complicação semelhantes.",
      takeaway:
        "Na meia-idade com padrões de mau prognóstico, a artroplastia aguda reduz a necessidade de reoperação frente à ORIF isolada.",
      level: "III",
      studyType: "Caso-controle pareado retrospectivo (OTA Int)",
      era: "atual",
      citation: {
        authors: "MacCormick LM, Lin CA, Westberg JR, Schmidt AH, Templeman DC",
        title:
          "Acute total hip arthroplasty versus open reduction internal fixation for posterior wall acetabular fractures in middle-aged patients",
        journal: "OTA Int",
        year: 2019,
        pmid: "33937650",
        doi: "10.1097/OI9.0000000000000014",
        url: "https://doi.org/10.1097/OI9.0000000000000014",
      },
    },
    {
      id: "liang-2023",
      claim:
        "Revisão sistemática e meta-análise (5 estudos, 255 pacientes) de artroplastia aguda (fix-and-replace) versus tardia após fratura do acetábulo: resultados funcionais e taxas de complicação semelhantes, porém a artroplastia tardia teve maior taxa de revisão (17,1% vs 4,3%).",
      takeaway:
        "A artroplastia aguda (fix-and-replace) apresenta menor taxa de revisão que a tardia — há equipoise suficiente para ensaios randomizados.",
      level: "III",
      studyType: "Revisão sistemática e meta-análise de 5 estudos retrospectivos (Eur J Orthop Surg Traumatol)",
      era: "atual",
      citation: {
        authors: "Liang K, Gani MH, Griffin X, Culpan P, Mukabeta T, Bates P",
        title:
          "Acute versus delayed total hip arthroplasty after acetabular fracture fixation: a systematic review and meta-analysis",
        journal: "Eur J Orthop Surg Traumatol",
        year: 2023,
        pmid: "36810707",
        doi: "10.1007/s00590-023-03489-y",
        url: "https://doi.org/10.1007/s00590-023-03489-y",
      },
    },
    {
      id: "ivanova-2025",
      claim:
        "Revisão sistemática (20 estudos, 929 pacientes ≥ 65 anos): a combinação ORIF + artroplastia aguda (CHP) permitiu carga total imediata em 53% dos estudos e melhores desfechos funcionais (HHS 70-92) do que a ORIF isolada (HHS 63-82, conversão para artroplastia de 16,5-45%), à custa de mais luxação (8-11%) e soltura do implante (até 18%). Os protocolos de carga permanecem heterogêneos e sem padronização.",
      takeaway:
        "No idoso, a artroplastia aguda associada favorece carga e função precoces, mas com mais complicações do implante; falta padronização da reabilitação.",
      level: "II",
      studyType: "Revisão sistemática (J Clin Med)",
      era: "atual",
      citation: {
        authors: "Ivanova S, Prochazka O, Giannoudis PV, Tosounidis T, Tannast M, Bastian JD",
        title:
          "Rehabilitation Protocols for Surgically Treated Acetabular Fractures in Older Adults: Current Practices and Outcomes",
        journal: "J Clin Med",
        year: 2025,
        pmid: "40725604",
        doi: "10.3390/jcm14144912",
        url: "https://doi.org/10.3390/jcm14144912",
      },
    },
  ],
  pearls: [
    "Pense em duas colunas (Y invertido): a via de acesso decorre de qual coluna/parede está fraturada.",
    "Leia as seis linhas na AP e confirme com as oblíquas de Judet e a TC — a TC é obrigatória para impacção, fragmentos e quadrilátero.",
    "O prognóstico segue a congruência cabeça-teto e a qualidade da redução: mire degrau/gap ≤ 2 mm no teto de carga.",
    "Os arcos do teto ajudam a separar fraturas que poupam a carga (não cirúrgicas) das que a comprometem.",
    "Sinal do esporão na oblíqua obturadora = fratura das duas colunas (toda a superfície articular dissociada do ílio).",
    "No acesso posterior, joelho fletido protege o isquiático e preservar o quadrado femoral protege a circunflexa femoral medial.",
    "No idoso com osso ruim, impacção do teto ou fratura da cabeça, considere ORIF + artroplastia aguda (fix-and-replace) para carga e função precoces.",
  ],
  pitfalls: [
    "Escolher a via pelo \"nome\" da fratura sem confirmar a extensão real na TC (ex.: transversa transtectal alta).",
    "Deixar fragmento intra-articular incarcerado ou impacção do teto não elevada.",
    "Parafuso intra-articular não detectado na AP — sempre checar em oblíquas/fluoroscopia rotacional.",
    "Retração prolongada do nervo isquiático causando neuropraxia.",
    "Ignorar a corona mortis na dissecção retropúbica → sangramento de difícil controle.",
    "Insistir em ORIF isolada no idoso com cominução/osteoporose e alta chance de conversão para artroplastia.",
    "Aceitar subluxação/incongruência residual — antecipa artrose pós-traumática e falha precoce.",
  ],
  figures: [
    {
      id: "fratura-acetabulo:anatomia",
      caption: "Anatomia das duas colunas: anterior e posterior, teto e plano quadrilátero.",
      alt: "Osso ilíaco esquemático com o Y invertido das colunas anterior e posterior, teto acetabular, paredes e plano quadrilátero.",
    },
    {
      id: "fratura-acetabulo:linhas-radiograficas",
      caption: "As seis linhas radiográficas da incidência AP.",
      alt: "Linhas iliopectínea, ilioisquiática, lágrima, teto, rebordo anterior e rebordo posterior projetadas sobre o acetábulo.",
    },
    {
      id: "fratura-acetabulo:judet-elementares",
      caption: "Fraturas elementares de Judet-Letournel (parede/coluna posterior e anterior, transversa).",
      alt: "Cinco padrões elementares com o traço de fratura destacado sobre o acetábulo, selecionáveis por variante.",
      variant: "transversa",
    },
    {
      id: "fratura-acetabulo:judet-associadas",
      caption: "Fraturas associadas de Judet-Letournel (incluindo em T e ambas as colunas).",
      alt: "Cinco padrões associados com os traços combinados destacados, incluindo o sinal do esporão da fratura das duas colunas.",
      variant: "duas-colunas",
    },
    {
      id: "fratura-acetabulo:via-kocher-langenbeck",
      caption: "Via posterior de Kocher-Langenbeck e o nervo isquiático em risco.",
      alt: "Acesso posterior ao quadril com incisão, divisão do glúteo máximo, rotadores curtos e nervo isquiático.",
    },
    {
      id: "fratura-acetabulo:via-ilioinguinal",
      caption: "Via anterior ilioinguinal e suas três janelas.",
      alt: "Acesso anterior à pelve com incisão da crista à sínfise e as três janelas entre iliopsoas/nervo femoral e vasos ilíacos.",
    },
    {
      id: "fratura-acetabulo:step-reducao",
      caption: "Redução da coluna com pinça e parafuso interfragmentário.",
      alt: "Pinça de redução aproximando os fragmentos da coluna e parafuso de tração cruzando o traço de fratura.",
    },
    {
      id: "fratura-acetabulo:step-placa",
      caption: "Placa de reconstrução moldada e zona segura articular.",
      alt: "Placa de reconstrução contornando a coluna com parafusos extra-articulares e a zona segura ao redor do acetábulo.",
    },
    {
      id: "fratura-acetabulo:step-artroplastia",
      caption: "ORIF + artroplastia total aguda (fix-and-replace) no idoso.",
      alt: "Componente acetabular com parafusos e haste femoral após estabilização das colunas com placa e cerclagem.",
    },
  ],
  meta: {
    lastReviewed: "2026-07-13",
    sources: [
      "Matta JM. J Bone Joint Surg Am 1996 (acurácia da redução e resultados)",
      "Ferguson TA, et al. J Bone Joint Surg Br 2010 (epidemiologia no idoso)",
      "Boraiah S, et al. J Orthop Trauma 2009 (ORIF + ATQ primária)",
      "MacCormick LM, et al. OTA Int 2019 (ATQ aguda vs ORIF, parede posterior)",
      "Liang K, et al. Eur J Orthop Surg Traumatol 2023 (meta-análise aguda vs tardia)",
      "Ivanova S, et al. J Clin Med 2025 (revisão de reabilitação/carga no idoso)",
      "Judet R, Judet J, Letournel E (classificação das duas colunas) — referência histórica",
      "Princípios AO de tratamento de fraturas (referência técnica)",
    ],
    attribution: "Evidência recuperada do PubMed. Ver DOIs/PMIDs citados.",
  },
});
