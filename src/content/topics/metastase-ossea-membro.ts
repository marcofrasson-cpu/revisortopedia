import { defineTopic } from "../../types/topic";

export const topic = defineTopic({
  id: "tum-metastase-osso-longo",
  slug: "metastase-ossea-membro",
  kind: "condicao",
  regionId: "tumores-e-metastases",
  bone: "Ossos longos dos membros",
  injury: "Doença óssea metastática",
  title: "Metástase óssea em osso longo",
  subtitle: "Confirmar o diagnóstico antes de fixar e construir uma solução que permita carga imediata e dure mais que o paciente.",
  laterality: null,
  status: "complete",
  overview: "Metástases são as lesões malignas mais comuns do esqueleto adulto. Mama, próstata, pulmão, rim e tireoide respondem por grande parte dos casos, mas o comportamento, resposta sistêmica e sobrevida variam amplamente. Fêmur proximal é o sítio apendicular mais frequente e de maior impacto mecânico. Dor mecânica progressiva, dor noturna, incapacidade e fratura são apresentações comuns.\n\nUma lesão óssea solitária sem câncer previamente confirmado deve ser tratada como possível tumor ósseo primário até prova em contrário. Fixação intramedular antes de diagnóstico pode disseminar sarcoma por todo o canal e converter cirurgia preservadora em amputação. O roteiro seguro combina história oncológica, radiografias do osso inteiro, TC de tórax/abdome/pelve, exames laboratoriais, imagem sistêmica e biópsia quando o diagnóstico não está estabelecido ou a lesão é atípica.\n\nA decisão cirúrgica integra risco de fratura, expectativa de sobrevida, resposta do tumor, extensão articular, qualidade óssea e função. O implante deve permitir carga precoce e durar toda a sobrevida prevista. Lesão diafisária costuma receber haste longa; destruição da cabeça/colo femoral ou osso periarticular não reconstruível favorece endoprótese. Radioterapia controla dor e doença local, mas não restaura resistência imediatamente. Tumores hipervasculares, como renal e tireoidiano, podem exigir embolização pré-operatória.",
  keyFacts: [
    { label: "Regra de segurança", value: "Lesão solitária desconhecida = primária até biópsia" },
    { label: "Avaliação", value: "Osso inteiro + estadiamento sistêmico + diagnóstico tecidual quando indicado" },
    { label: "Objetivo", value: "Alívio da dor, carga precoce e construção durável" },
    { label: "Prognóstico", value: "Tumor primário, carga metastática, condição clínica e tratamento disponível" },
    { label: "Fixação", value: "Proteger todo o osso vulnerável sem contaminar diagnóstico incerto" },
    { label: "Adjuvância", value: "Radioterapia e terapia sistêmica coordenadas com a cirurgia" },
  ],
  anatomy: { text: "Metástases ocupam a medula, substituem trabéculas e enfraquecem o osso antes que a radiografia revele toda a perda. Lesões líticas reduzem resistência mais que escleróticas de mesmo tamanho; padrões mistos também fraturam. A dor funcional e o comprometimento cortical refletem falha mecânica iminente.\n\nNo fêmur proximal, colo e região pertrocantérica recebem grandes momentos de flexão. Destruição da cabeça, colo ou acetábulo muda a opção de haste para artroplastia ou reconstrução pélvica. Na diáfise, uma haste longa compartilha carga; grandes defeitos podem precisar cimento. No úmero, demanda de carga é menor, mas dor e função do membro superior justificam estabilização.\n\nA cirurgia deve antecipar progressão no mesmo osso e evitar uma segunda operação. Ao mesmo tempo, ampliar desnecessariamente a intervenção em paciente frágil aumenta morbidade; prognóstico e objetivo do cuidado precisam ser explícitos.", figureIds: ["framework-completion:metastase-investigacao", "framework-completion:metastase-reconstrucao"] },
  classification: [
    { id: "padrao-metastatico", name: "Padrão mecânico e reconstrutivo", basis: "Local, extensão e possibilidade de estabilização durável.", types: [
      { code: "D", label: "Diafisário", description: "Haste longa com ou sem cimento, protegendo segmento vulnerável.", figureId: "framework-completion:metastase-reconstrucao", figureVariant: "diafise" },
      { code: "P", label: "Periarticular reconstruível", description: "Fixação bloqueada/cimento quando superfície e estoque permitem.", figureId: "framework-completion:metastase-reconstrucao", figureVariant: "periarticular" },
      { code: "R", label: "Periarticular não reconstruível", description: "Ressecção e endoprótese/artroplastia para carga imediata.", figureId: "framework-completion:metastase-reconstrucao", figureVariant: "ressection" },
    ] },
  ],
  indications: {
    operative: ["Fratura patológica completa.", "Lesão iminente com dor funcional e risco mecânico alto.", "Doença oligometastática selecionada para controle local ampliado.", "Falha de radioterapia/terapia sistêmica com instabilidade e expectativa funcional relevante."],
    nonOperative: ["Lesão de baixo risco mecânico tratável com radioterapia e terapia sistêmica.", "Expectativa muito limitada ou risco cirúrgico desproporcional, priorizando analgesia e suporte.", "Lesão radiossensível sem dor funcional nem perda cortical significativa, sob vigilância."],
    decisionNotes: "Mirels auxilia, mas não substitui julgamento. Dor funcional, tamanho cortical, local, histologia e sobrevida devem ser integrados. Escalas prognósticas ajudam a escolher entre fixação menos invasiva e reconstrução endoprotética. Discutir objetivos com oncologia, radioterapia e cuidados paliativos.",
  },
  approaches: [
    { id: "haste", name: "Estabilização intramedular", indication: "Lesão diafisária ou pertrocantérica com articulação preservável.", interval: "Acesso regional e instrumentação do canal após diagnóstico confirmado; cimento seletivo.", atRisk: ["Embolização tumoral", "Sangramento", "Progressão periarticular", "Contaminação se diagnóstico incorreto"], figureId: "framework-completion:metastase-reconstrucao" },
    { id: "endoprotese", name: "Ressecção e endoprótese", indication: "Destruição periarticular ou segmento sem estoque para fixação durável.", interval: "Ressecção do segmento comprometido e reconstrução modular com cobertura muscular.", atRisk: ["Feixe neurovascular", "Luxação", "Infecção", "Inserções musculares"], figureId: "framework-completion:metastase-reconstrucao" },
  ],
  technique: [
    { n: 1, title: "Não presumir metástase", detail: "Revisar história, radiografar o osso inteiro e procurar sinais de tumor primário. Se lesão solitária, atípica ou diagnóstico incerto, estadiar e biopsiar antes de fixar.", figureId: "framework-completion:metastase-investigacao", tips: ["Confirme que o câncer conhecido costuma metastatizar com esse padrão"], pitfalls: ["Fixar sarcoma como metástase"] },
    { n: 2, title: "Quantificar risco e prognóstico", detail: "Avaliar dor funcional, córtex, local, extensão e lesões adicionais; estimar sobrevida com dados clínicos e do tumor.", tips: ["Prognóstico define durabilidade necessária da reconstrução"], pitfalls: ["Usar número isolado sem contexto"] },
    { n: 3, title: "Planejar sangue e adjuvância", detail: "Coordenar radioterapia e terapia sistêmica; considerar embolização de lesões hipervasculares e preparar transfusão quando necessário.", figureId: "framework-completion:metastase-investigacao", tips: ["Rim e tireoide podem sangrar intensamente"], pitfalls: ["Operar sem conhecer histologia e vascularidade"] },
    { n: 4, title: "Escolher construção definitiva", detail: "Usar haste para segmento diafisário e endoprótese quando articulação/estoque estão destruídos. Proteger toda a zona vulnerável e permitir carga precoce.", figureId: "framework-completion:metastase-reconstrucao", tips: ["A construção deve sobreviver ao paciente"], pitfalls: ["Implante curto que termina dentro de osso doente"] },
    { n: 5, title: "Retomar tratamento oncológico", detail: "Mobilizar cedo, tratar dor, iniciar radioterapia pós-operatória após cicatrização e reintegrar terapia sistêmica.", tips: ["Planejar a sequência antes da internação"], pitfalls: ["Perder janela de adjuvância por ferida ou comunicação falha"] },
  ],
  postop: { immobilization: "Em geral mínima após construção estável; proteger tecidos moles e articulação reconstruída.", weightBearing: "Carga imediata conforme tolerância é objetivo na maioria das reconstruções paliativas.", rehab: [{ window: "0-7 dias", weightBearing: "Conforme tolerância", focus: "Analgesia, transferência, marcha e prevenção tromboembólica." }, { window: "2-6 semanas", weightBearing: "Plena quando possível", focus: "Autonomia e coordenação da radioterapia." }, { window: "Após 6 semanas", weightBearing: "Funcional", focus: "Qualidade de vida, terapia sistêmica e vigilância do implante." }], followup: "Avaliar ferida, dor, função, implante e progressão. Acompanhamento deve ser proporcional ao prognóstico e evitar consultas sem benefício para pacientes frágeis." },
  complications: [
    { name: "Falha mecânica", detail: "Progressão tumoral, implante curto ou reconstrução insuficiente causa nova fratura.", prevention: "Construção durável e proteção do osso vulnerável." },
    { name: "Embolia e descompensação", detail: "Instrumentação medular pode gerar carga cardiopulmonar.", prevention: "Avaliação clínica, técnica cuidadosa e coordenação anestésica." },
    { name: "Sangramento", detail: "Importante em tumores hipervasculares.", prevention: "Diagnóstico, embolização seletiva e planejamento hemostático." },
    { name: "Infecção", detail: "Risco aumentado por imunossupressão, radioterapia e grandes implantes.", prevention: "Cobertura, profilaxia e reinício coordenado do tratamento." },
    { name: "Progressão local", detail: "Pode comprometer implante e função.", prevention: "Radioterapia/terapia sistêmica e escolha reconstrutiva adequada." },
  ],
  evidence: [
    { id: "katagiri-2005", claim: "Tipo do tumor primário, estado geral, metástases viscerais e carga esquelética permitiram estratificar sobrevida em doença óssea metastática.", takeaway: "A reconstrução deve ser escolhida com estimativa prognóstica explícita.", level: "III", studyType: "Coorte prognóstica", era: "classico", citation: { authors: "Katagiri H, Takahashi M, Wakai K, et al.", title: "Prognostic factors and a scoring system for patients with skeletal metastasis", journal: "The Journal of Bone and Joint Surgery. British Volume", year: 2005, pmid: "15855375" } },
    { id: "metastasis-function-2018", claim: "Cirurgia de metástases em ossos longos produziu melhora precoce de dor e função, embora qualidade de vida global dependa da doença sistêmica.", takeaway: "O benefício ortopédico é rápido e deve ser alinhado ao objetivo do paciente.", level: "II", studyType: "Coorte prospectiva", era: "atual", citation: { authors: "Nooh A, Goulding K, Isler MH, et al.", title: "Early Improvement in Pain and Functional Outcome but Not Quality of Life After Surgery for Metastatic Long Bone Disease", journal: "Clinical Orthopaedics and Related Research", year: 2018, pmid: "29529637", doi: "10.1007/s11999.0000000000000065" } },
    { id: "impending-vs-fracture-2022", claim: "Pacientes tratados antes da fratura completa apresentaram vantagens clínicas em comparação com cirurgia após a fratura em grande coorte.", takeaway: "Identificar e estabilizar a lesão realmente iminente evita a morbidade da fratura completa.", level: "III", studyType: "Coorte comparativa", era: "atual", citation: { authors: "Groot OQ, Lans A, Twining PK, et al.", title: "Clinical Outcome Differences in the Treatment of Impending Versus Completed Pathological Long-Bone Fractures", journal: "The Journal of Bone and Joint Surgery. American Volume", year: 2022, pmid: "34851323", doi: "10.2106/JBJS.21.00711" } },
  ],
  pearls: ["Lesão solitária desconhecida não é metástase até prova.", "Radiografar o osso inteiro.", "Dor funcional é sinal mecânico importante.", "Carga imediata é meta, não detalhe.", "A construção deve durar mais que a expectativa de vida."],
  pitfalls: ["Fixar antes da biópsia.", "Usar haste quando a articulação está destruída.", "Ignorar hipervascularidade.", "Fazer implante curto.", "Separar cirurgia de radioterapia e tratamento sistêmico."],
  figures: [
    { id: "framework-completion:metastase-investigacao", caption: "Roteiro antes da fixação de uma lesão óssea suspeita.", alt: "Fluxo entre história oncológica, estadiamento, biópsia e planejamento de metástase óssea.", kind: "diagram", source: { label: "Diagrama editorial original", reference: "Campbell's Operative Orthopaedics, 14a ed.; Hebert e Lech, 6a ed." } },
    { id: "framework-completion:metastase-reconstrucao", caption: "Escolha reconstrutiva conforme diáfise, região periarticular e estoque ósseo.", alt: "Comparação entre haste, fixação com cimento e endoprótese em metástase de osso longo.", kind: "diagram", source: { label: "Diagrama editorial original", reference: "Campbell's, 14a ed.; Groot et al., JBJS 2022." } },
  ],
  meta: { lastReviewed: "2026-07-14", sources: ["Campbell's Operative Orthopaedics, 14a ed. (2021)", "Hebert e Lech, 6a ed. (2025)", "Katagiri et al., JBJS Br 2005", "Nooh et al., CORR 2018", "Groot et al., JBJS 2022"], attribution: "Conteúdo original em português brasileiro, revisado com bibliografia oficial do 55o TEOT e artigos PubMed.", figureReference: "Campbell's Operative Orthopaedics, 14a ed. (2021), doença óssea metastática." },
});
