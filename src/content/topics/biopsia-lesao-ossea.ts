import { defineTopic } from "../../types/topic";

export const topic = defineTopic({
  id: "tum-principios-biopsia-ossea",
  slug: "biopsia-lesao-ossea",
  kind: "procedimento",
  regionId: "tumores-e-metastases",
  bone: "Oncologia ortopédica",
  injury: "Biópsia de lesão óssea",
  title: "Biópsia da lesão óssea",
  subtitle:
    "Investigar antes de perfurar, escolher um trajeto que será ressecado e obter tecido representativo sem contaminar compartimentos, articulações ou feixes neurovasculares.",
  laterality: null,
  status: "complete",
  overview:
    "A biópsia é a etapa final da investigação de uma lesão óssea, não a primeira. Radiografias, ressonância de todo o compartimento, estadiamento e hipóteses diferenciais devem estar definidos antes do acesso. Perfurar uma massa sem esse mapa pode contaminar um compartimento saudável, inviabilizar preservação do membro ou produzir amostra necrótica e inconclusiva.\n\nA regra central é simples: a equipe que realizará a ressecção definitiva deve planejar o trajeto. Ele segue longitudinalmente pelo menor caminho oncologicamente seguro, atravessa um único compartimento, evita feixes neurovasculares, articulações e retalhos futuros e termina dentro da peça que será removida em bloco. Hematoma, dreno e cicatriz são considerados contaminados.\n\nA biópsia percutânea por agulha grossa guiada por imagem é a primeira escolha na maioria dos tumores ósseos. A biópsia incisional fica para amostras percutâneas insuficientes ou situações em que arquitetura tecidual adicional é indispensável. Biópsia excisional só é aceitável para lesão pequena, superficial e com diagnóstico benigno altamente provável. Diagnóstico final exige integração entre clínica, imagem e patologia em equipe de sarcoma.",
  keyFacts: [
    { label: "Ordem", value: "Imagem e estadiamento antes da biópsia" },
    { label: "Planejamento", value: "Pela equipe que fará a ressecção" },
    { label: "Primeira escolha", value: "Agulha grossa guiada por imagem" },
    { label: "Trajeto", value: "Longitudinal, curto e em um compartimento" },
    { label: "Regra oncológica", value: "Trajeto inteiro sai com a peça" },
    { label: "Evitar", value: "Articulação, feixe, hematoma e retalho futuro" },
  ],
  anatomy: {
    text:
      "Compartimento oncológico é delimitado por barreiras anatômicas que resistem temporariamente à extensão tumoral: fáscia, periósteo, cápsula articular e cartilagem. Uma agulha que cruza outro músculo, uma incisão transversal ou um hematoma dissecando planos transforma tecidos potencialmente preserváveis em campo contaminado.\n\nO trajeto deve acompanhar a via da futura ressecção e chegar diretamente ao componente sólido viável. Na RM com contraste, a periferia realçante costuma ser mais representativa que o centro necrótico. Em lesões heterogêneas, PET/TC ou sequências funcionais podem ajudar a escolher o componente de maior grau, mas nunca substituem correlação com a radiografia.\n\nNo fêmur, evitar contaminar o feixe femoral e compartimentos adutores quando a ressecção será lateral; na tíbia, não atravessar a membrana interóssea; no úmero, respeitar radial e feixe medial. Na pelve, o trajeto é especialmente dependente do plano de hemipelvectomia. Não existe trajeto universalmente mais curto: existe o menor trajeto que pode ser removido.",
    figureIds: ["biopsia-lesao-ossea:sequencia", "biopsia-lesao-ossea:trajeto"],
  },
  classification: [
    {
      id: "metodos-biopsia",
      name: "Métodos de obtenção de tecido",
      basis: "Invasividade, volume de tecido e risco de contaminação.",
      types: [
        { code: "AG", label: "Agulha grossa percutânea", description: "Primeira escolha; múltiplos cilindros coaxiais guiados por TC ou ultrassom, no trajeto planejado.", figureId: "biopsia-lesao-ossea:metodos", figureVariant: "core" },
        { code: "INC", label: "Incisional", description: "Pequena abertura longitudinal para amostra representativa quando a percutânea falha ou a arquitetura é indispensável.", figureId: "biopsia-lesao-ossea:metodos", figureVariant: "incisional" },
        { code: "EXC", label: "Excisional", description: "Remove toda a lesão; restrita a massa pequena e superficial com comportamento benigno e margem planejada.", figureId: "biopsia-lesao-ossea:metodos", figureVariant: "excisional" },
      ],
    },
  ],
  indications: {
    operative: [
      "Lesão agressiva ou indeterminada cuja histologia mudará o tratamento.",
      "Suspeita de sarcoma primário após estadiamento por imagem.",
      "Lesão solitária sem primário conhecido, antes de qualquer estabilização.",
      "Possível infecção ou neoplasia hematológica, com envio simultâneo para cultura e estudos específicos.",
    ],
    nonOperative: [
      "Lesão com aspecto clássico benigno e assintomático que pode ser observada.",
      "Metástases múltiplas com primário histologicamente conhecido quando nova amostra não altera conduta.",
      "Lesão óssea cuja caracterização ainda exige radiografias ou RM antes de qualquer acesso.",
      "Coagulopatia ou condição clínica que deve ser corrigida antes do procedimento.",
    ],
    decisionNotes:
      "Nunca estabilizar uma fratura patológica de etiologia desconhecida antes de concluir o diagnóstico. Se a lesão pode ser sarcoma, encaminhar ao centro de referência antes da biópsia. O radiologista intervencionista deve receber o plano explícito do cirurgião oncológico. Coletar tecido para histologia, imuno-histoquímica, citogenética/molecular e culturas conforme o diferencial. Congelação confirma representatividade em casos selecionados, mas não substitui processamento definitivo.",
  },
  approaches: [
    { id: "percutanea-coaxial", name: "Biópsia percutânea coaxial", indication: "Maioria das lesões ósseas profundas, com alvo definido por TC ou ultrassom.", interval: "Trajeto longitudinal direto pelo compartimento da futura ressecção, com cânula coaxial e múltiplos cilindros pelo mesmo portal.", atRisk: ["Feixe neurovascular", "Articulação adjacente", "Compartimento não envolvido", "Pele necessária ao retalho"], figureId: "biopsia-lesao-ossea:trajeto" },
    { id: "incisional", name: "Biópsia incisional", indication: "Falha percutânea, material insuficiente ou necessidade de arquitetura adicional.", interval: "Incisão longitudinal curta diretamente sobre o tumor, hemostasia rigorosa e fechamento por planos sem descolamento.", atRisk: ["Hematoma contaminante", "Dreno fora da linha", "Incisão transversal", "Necrose cutânea"], figureId: "biopsia-lesao-ossea:metodos" },
  ],
  technique: [
    { n: 1, title: "Completar imagem e estadiamento", detail: "Obter radiografias em dois planos, RM de todo o osso/compartimento antes da biópsia e estadiamento sistêmico conforme a suspeita. Definir componente sólido, extensão extraóssea, feixes e articulações.", figureId: "biopsia-lesao-ossea:sequencia", tips: ["A radiografia orienta a leitura de todas as outras modalidades"], pitfalls: ["Biopsiar antes da RM e alterar planos por edema e hematoma"] },
    { n: 2, title: "Planejar com a ressecção em mente", detail: "Discutir com cirurgião oncológico, radiologista e patologista. Desenhar o trajeto dentro da futura peça e escolher o alvo de maior grau, evitando necrose.", figureId: "biopsia-lesao-ossea:trajeto", tips: ["Marcar o trajeto no prontuário e na pele"], pitfalls: ["Escolher apenas o caminho tecnicamente mais fácil"] },
    { n: 3, title: "Acessar um único compartimento", detail: "Avançar longitudinalmente sem cruzar feixes, articulações ou músculos não envolvidos. Usar sistema coaxial para que todos os cilindros compartilhem um único trajeto.", figureId: "biopsia-lesao-ossea:trajeto", tips: ["Manter a cânula estável durante múltiplas amostras"], pitfalls: ["Leques de agulha que ampliam a zona contaminada"] },
    { n: 4, title: "Obter tecido viável suficiente", detail: "Coletar múltiplos cilindros da periferia sólida realçante. Separar material fresco, formalina, microbiologia e estudos moleculares conforme o plano prévio.", figureId: "biopsia-lesao-ossea:amostra", tips: ["Avisar o patologista antes de abrir a amostra"], pitfalls: ["Colher apenas centro necrótico ou fixar todo o material"] },
    { n: 5, title: "Controlar sangramento e contaminação", detail: "Comprimir o trajeto, evitar hematoma e não irrigar planos. Se dreno for indispensável na biópsia aberta, exteriorizá-lo junto e em linha com a incisão.", figureId: "biopsia-lesao-ossea:amostra", tips: ["Hemostasia é princípio oncológico"], pitfalls: ["Dreno lateral criando um segundo trajeto contaminado"] },
    { n: 6, title: "Correlacionar antes de tratar", detail: "A equipe multidisciplinar deve verificar se histologia, imagem e clínica são concordantes. Resultado discordante ou insuficiente exige revisão e, se necessário, nova biópsia planejada.", figureId: "biopsia-lesao-ossea:sequencia", tips: ["Discordância é sinal de amostragem ou diagnóstico incompleto"], pitfalls: ["Iniciar tratamento com laudo que não explica a imagem"] },
  ],
  postop: {
    immobilization: "Curativo compressivo; proteção adicional se a lesão enfraquece osso de carga.",
    weightBearing: "Restringir carga quando houver risco de fratura patológica; individualizar por localização e destruição cortical.",
    rehab: [{ window: "Primeiras 48 horas", weightBearing: "Conforme risco estrutural", focus: "Dor, hematoma, sangramento, ferida e função neurovascular." }, { window: "Até diagnóstico", weightBearing: "Protegida se necessário", focus: "Evitar fratura e aguardar correlação multidisciplinar antes de tratamento definitivo." }],
    followup: "Rever o resultado em reunião multidisciplinar. Documentar trajeto para ressecção em bloco e repetir amostragem somente após revisar alvo, método e diferencial.",
  },
  complications: [
    { name: "Amostra insuficiente ou erro diagnóstico", detail: "Necrose, alvo de baixo grau ou processamento inadequado podem ocultar a doença.", prevention: "Planejamento por imagem, múltiplos cilindros e correlação multidisciplinar." },
    { name: "Contaminação do trajeto", detail: "Implante tumoral pode ampliar a ressecção e aumentar recorrência local.", prevention: "Trajeto removível, único compartimento e excisão em bloco." },
    { name: "Hematoma", detail: "Disseca planos e expande a área potencialmente contaminada.", prevention: "Hemostasia e compressão; corrigir coagulopatia." },
    { name: "Fratura patológica", detail: "Perfuração e carga podem completar fratura em córtex comprometido.", prevention: "Escolher janela pequena, proteger carga e não fixar antes do diagnóstico." },
    { name: "Infecção", detail: "Pode confundir o diagnóstico e atrasar tratamento.", prevention: "Técnica estéril e coleta de culturas quando indicada." },
  ],
  evidence: [
    { id: "mankin-1996", claim: "A revisão multicêntrica da Musculoskeletal Tumor Society demonstrou que erros técnicos e diagnósticos de biópsias podem alterar a cirurgia definitiva e são menos frequentes em centros de referência.", takeaway: "A biópsia deve ser planejada e executada por equipe experiente em sarcoma.", level: "III", studyType: "Coorte multicêntrica", era: "classico", citation: { authors: "Mankin HJ, Mankin CJ, Simon MA; Musculoskeletal Tumor Society", title: "The hazards of the biopsy, revisited", journal: "The Journal of Bone and Joint Surgery. American Volume", year: 1996, pmid: "8642021", doi: "10.2106/00004623-199605000-00004" } },
    { id: "barrientos-2017", claim: "Contaminação histológica ocorreu em 12% dos trajetos; foi muito mais frequente após biópsia aberta que percutânea e associou-se a pior controle local.", takeaway: "Preferir agulha grossa e remover o trajeto completo na ressecção.", level: "III", studyType: "Coorte retrospectiva", era: "atual", citation: { authors: "Barrientos-Ruiz I, Ortiz-Cruz EJ, Serrano-Montilla J, et al.", title: "Are Biopsy Tracts a Concern for Seeding and Local Recurrence in Sarcomas?", journal: "Clinical Orthopaedics and Related Research", year: 2017, pmid: "27655183", doi: "10.1007/s11999-016-5090-y" } },
    { id: "waldron-1990", claim: "Problemas de amostragem, infecção, hematoma e trajeto inadequado afetaram a cirurgia subsequente; incisões longitudinais e drenos em linha facilitaram a excisão completa.", takeaway: "Toda cicatriz, hematoma e dreno devem caber na futura peça.", level: "IV", studyType: "Série consecutiva", era: "classico", citation: { authors: "Waldron B, Moran RM, Hurson BJ", title: "Biopsy problems in patients with musculoskeletal tumours", journal: "Irish Journal of Medical Science", year: 1990, pmid: "2076949", doi: "10.1007/BF02937380" } },
  ],
  pearls: ["Biópsia é a última etapa do diagnóstico por imagem.", "O trajeto pertence à peça cirúrgica.", "Agulha grossa coaxial reduz o campo contaminado.", "Colher periferia sólida, não apenas necrose.", "Discordância entre laudo e imagem exige revisão antes de tratar."],
  pitfalls: ["Biopsiar antes da RM.", "Atravessar articulação ou outro compartimento.", "Fazer incisão transversal.", "Fixar fratura patológica de etiologia desconhecida.", "Exteriorizar dreno longe da incisão.", "Aceitar amostra inconclusiva como diagnóstico benigno."],
  figures: [
    { id: "biopsia-lesao-ossea:sequencia", caption: "Sequência segura: caracterizar, estadiar, planejar e somente então biopsiar.", alt: "Fluxo diagnóstico da lesão óssea antes da biópsia.", kind: "diagram" },
    { id: "biopsia-lesao-ossea:trajeto", caption: "Trajeto longitudinal removível versus contaminação de múltiplos compartimentos.", alt: "Comparação entre trajeto correto de biópsia e trajetos inadequados cruzando feixes e compartimentos.", kind: "diagram" },
    { id: "biopsia-lesao-ossea:metodos", caption: "Agulha grossa, incisional e excisional: indicação e campo contaminado.", alt: "Comparação dos métodos de biópsia musculoesquelética.", kind: "diagram" },
    { id: "biopsia-lesao-ossea:amostra", caption: "Distribuição da amostra para histologia, microbiologia e estudos moleculares.", alt: "Recipientes separados para processamento de tecido tumoral.", kind: "diagram" },
  ],
  meta: { lastReviewed: "2026-07-14", sources: ["Mankin et al., JBJS 1996", "Barrientos-Ruiz et al., CORR 2017", "Waldron et al., Ir J Med Sci 1990"], attribution: "Conteúdo original em português brasileiro; evidências verificadas no PubMed e diagramas próprios.", figureReference: "Campbell's Operative Orthopaedics, 14a ed. (2021), princípios de biópsia em oncologia musculoesquelética." },
});
