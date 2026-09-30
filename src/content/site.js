/* ---------------------------------------------------------------------------
   TODO O CONTEÚDO DO SITE FICA NESTE ARQUIVO.

   Cada texto aparece nos três idiomas:
     pt = português   en = inglês   fr = francês

   Para adicionar uma experiência nova, copie um bloco inteiro da lista
   `experiences` e cole no topo (a ordem da lista é a ordem da página).
   --------------------------------------------------------------------------- */

export const LANGS = [
  { code: 'pt', label: 'PT', name: 'Português', htmlLang: 'pt-BR' },
  { code: 'en', label: 'EN', name: 'English', htmlLang: 'en' },
  { code: 'fr', label: 'FR', name: 'Français', htmlLang: 'fr' },
]

export const profile = {
  fullName: 'Isabela Rodrigues Guimarães',
  shortName: 'Isabela Guimarães',
  email: 'isabelarodrigues7611@gmail.com',
  phoneDisplay: '+55 21 97222-3978',
  phoneHref: '+5521972223978',
  linkedin: 'https://www.linkedin.com/in/isabela-guimar%C3%A3es-a85bab2a2/',
  cvFilename: 'Curriculo-Isabela-Guimaraes.pdf',
}

/* ------------------------------- Interface ---------------------------------- */

export const ui = {
  pt: {
    htmlTitle: 'Isabela Rodrigues Guimarães — Direito',
    metaDescription:
      'Portfólio de Isabela Rodrigues Guimarães: estudante de Direito e de Letras, estagiária em Direito Tributário no Rio de Janeiro.',
    nav: {
      about: 'Sobre',
      experience: 'Experiência',
      education: 'Formação',
      academic: 'Pesquisa',
      skills: 'Idiomas',
      contact: 'Contato',
    },
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    changeLanguage: 'Mudar idioma',
    theme: {
      label: 'Tema',
      light: 'Claro',
      dark: 'Escuro',
      pastel: 'Pastel',
      auto: 'Automático (sistema)',
    },
    downloadCv: 'Baixar currículo',
    downloadingCv: 'Preparando…',
    skipToContent: 'Ir para o conteúdo',
    portraitAlt: 'Isabela Rodrigues Guimarães',
    portraitAltSecondary: 'Isabela Rodrigues Guimarães',
    footerTagline: 'Direito · Letras · Idiomas',
    footerCredit: 'Feito por Matteo Vanzan',
  },
  en: {
    htmlTitle: 'Isabela Rodrigues Guimarães — Law',
    metaDescription:
      'Portfolio of Isabela Rodrigues Guimarães: law and philology student, tax law intern in Rio de Janeiro.',
    nav: {
      about: 'About',
      experience: 'Experience',
      education: 'Education',
      academic: 'Research',
      skills: 'Languages',
      contact: 'Contact',
    },
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    changeLanguage: 'Change language',
    theme: {
      label: 'Theme',
      light: 'Light',
      dark: 'Dark',
      pastel: 'Pastel',
      auto: 'Automatic (system)',
    },
    downloadCv: 'Download CV',
    downloadingCv: 'Preparing…',
    skipToContent: 'Skip to content',
    portraitAlt: 'Isabela Rodrigues Guimarães',
    portraitAltSecondary: 'Isabela Rodrigues Guimarães',
    footerTagline: 'Law · Philology · Languages',
    footerCredit: 'Made by Matteo Vanzan',
  },
  fr: {
    htmlTitle: 'Isabela Rodrigues Guimarães — Droit',
    metaDescription:
      'Portfolio d’Isabela Rodrigues Guimarães : étudiante en droit et en lettres, stagiaire en droit fiscal à Rio de Janeiro.',
    nav: {
      about: 'À propos',
      experience: 'Expérience',
      education: 'Formation',
      academic: 'Recherche',
      skills: 'Langues',
      contact: 'Contact',
    },
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    changeLanguage: 'Changer de langue',
    theme: {
      label: 'Thème',
      light: 'Clair',
      dark: 'Sombre',
      pastel: 'Pastel',
      auto: 'Automatique (système)',
    },
    downloadCv: 'Télécharger le CV',
    downloadingCv: 'Préparation…',
    skipToContent: 'Aller au contenu',
    portraitAlt: 'Isabela Rodrigues Guimarães',
    portraitAltSecondary: 'Isabela Rodrigues Guimarães',
    footerTagline: 'Droit · Lettres · Langues',
    footerCredit: 'Réalisé par Matteo Vanzan',
  },
}

/* ------------------------- Títulos das seções (01–06) ----------------------- */

export const sectionTitles = {
  pt: {
    about: 'Sobre',
    experience: 'Experiência',
    education: 'Formação',
    academic: 'Pesquisa e atividades acadêmicas',
    skills: 'Idiomas e ferramentas',
    contact: 'Contato',
  },
  en: {
    about: 'About',
    experience: 'Experience',
    education: 'Education',
    academic: 'Research and academic activities',
    skills: 'Languages and tools',
    contact: 'Contact',
  },
  fr: {
    about: 'À propos',
    experience: 'Expérience',
    education: 'Formation',
    academic: 'Recherche et activités universitaires',
    skills: 'Langues et outils',
    contact: 'Contact',
  },
}

/* --------------------------------- Abertura --------------------------------- */

export const hero = {
  // O nome é dividido em três linhas; a linha do meio recebe o destaque.
  nameLines: ['Isabela', 'Rodrigues', 'Guimarães.'],
  pt: {
    tags: ['Direito.', 'Linguagem.', 'Internacional.'],
    role: 'Estudante de Direito · Estagiária em Direito Tributário',
    summary:
      'Estudo Direito na Universidade Cândido Mendes e Letras (Português–Grego) na UFRJ. Atuo hoje no Direito Tributário, depois de passar pelo contencioso cível, pelo Tribunal de Justiça do Rio de Janeiro e por uma editora internacional. Também possuo conhecimento em português, inglês, francês, grego e latim.',
    ctaPrimary: 'Ver experiência',
    ctaSecondary: 'Entrar em contato',
    scroll: 'Role',
    stats: [
      { value: '5', label: 'experiências' },
      { value: '5', label: 'idiomas' },
      { value: '2', label: 'graduações' },
    ],
  },
  en: {
    tags: ['Law.', 'Language.', 'International.'],
    role: 'Law student · Tax law intern',
    summary:
      'I study law at Universidade Cândido Mendes and Portuguese–Greek philology at UFRJ. I currently work in tax law, after time in civil litigation, at the Rio de Janeiro State Court of Justice and at an international publishing house. I also have knowledge of Portuguese, English, French, Greek and Latin.',
    ctaPrimary: 'View experience',
    ctaSecondary: 'Get in touch',
    scroll: 'Scroll',
    stats: [
      { value: '5', label: 'roles' },
      { value: '5', label: 'languages' },
      { value: '2', label: 'degrees' },
    ],
  },
  fr: {
    tags: ['Droit.', 'Langue.', 'International.'],
    role: 'Étudiante en droit · Stagiaire en droit fiscal',
    summary:
      'J’étudie le droit à l’Universidade Cândido Mendes et les lettres (portugais–grec) à l’UFRJ. Je travaille aujourd’hui en droit fiscal, après un passage par le contentieux civil, le Tribunal de justice de Rio de Janeiro et une maison d’édition internationale. Je possède également des connaissances en portugais, anglais, français, grec et latin.',
    ctaPrimary: 'Voir l’expérience',
    ctaSecondary: 'Me contacter',
    scroll: 'Défiler',
    stats: [
      { value: '5', label: 'expériences' },
      { value: '5', label: 'langues' },
      { value: '2', label: 'formations' },
    ],
  },
}

/* ----------------------------------- Sobre ---------------------------------- */

export const about = {
  pt: {
    heading: 'Sobre mim',
    paragraphs: [
      'Estou no 4º período de Direito na Universidade Cândido Mendes e concluo este ano o bacharelado em Letras (Português–Grego) na UFRJ. São áreas diferentes, mas ligadas pela linguagem, e foi daí que veio meu interesse por interpretação, argumentação e retórica jurídica.',
      'Minha trajetória tem sido marcada pela busca por ambientes distintos do Direito. Passei por uma editora internacional, pelo Tribunal de Justiça do Rio de Janeiro e pelo escritório Salomão Advogados, e hoje estagio na área tributária do Campos Mello Advogados. Cada passagem me deu uma perspectiva diferente da prática e exigiu adaptação, autonomia e senso crítico.',
      'Neste início de carreira, tenho procurado entender quais áreas mais me interessam: por ora, Direito Empresarial e Direito Tributário, sobretudo quando tocam questões de Direito Internacional. Pretendo seguir ampliando minha formação, buscar uma especialização e, no futuro, atuar também no exterior.',
    ],
    competenciesLabel: 'Áreas de interesse',
    competencies: [
      'Direito Tributário',
      'Direito Empresarial',
      'Arbitragem e mediação',
      'Contencioso cível',
      'Direito Internacional',
      'Retórica e argumentação jurídica',
      'Tradução e revisão de contratos',
    ],
  },
  en: {
    heading: 'About me',
    paragraphs: [
      'I am in my fourth semester of law at Universidade Cândido Mendes and will finish my BA in Portuguese–Greek philology at UFRJ this year. They are different fields, but both are grounded in language, and that is where my interest in interpretation, argument and legal rhetoric comes from.',
      'My path so far has been about seeking out different corners of the legal world. I have worked at an international publishing house, at the Rio de Janeiro State Court of Justice and at Salomão Advogados, and I am currently interning in the tax practice at Campos Mello Advogados. Each of them showed me a different side of practice and asked for adaptability, independence and critical judgement.',
      'At this early stage I am still mapping the areas that interest me most: for now, business law and tax law, especially where they meet questions of international law. I intend to keep building my training, pursue a specialisation and, in time, work abroad as well.',
    ],
    competenciesLabel: 'Areas of interest',
    competencies: [
      'Tax law',
      'Business law',
      'Arbitration and mediation',
      'Civil litigation',
      'International law',
      'Legal rhetoric and argument',
      'Contract translation and review',
    ],
  },
  fr: {
    heading: 'À propos de moi',
    paragraphs: [
      'Je suis en quatrième semestre de droit à l’Universidade Cândido Mendes et je termine cette année ma licence en lettres (portugais–grec) à l’UFRJ. Ce sont des domaines différents, mais tous deux ancrés dans la langue, et c’est de là que vient mon intérêt pour l’interprétation, l’argumentation et la rhétorique juridique.',
      'Mon parcours s’est construit par la recherche de milieux juridiques variés. Je suis passée par une maison d’édition internationale, par le Tribunal de justice de Rio de Janeiro et par le cabinet Salomão Advogados, et je suis aujourd’hui stagiaire au sein de l’équipe fiscale de Campos Mello Advogados. Chaque expérience m’a offert une perspective différente sur la pratique et exigé adaptation, autonomie et esprit critique.',
      'À ce stade, je cherche encore à cerner les domaines qui m’intéressent le plus : pour l’instant, le droit des affaires et le droit fiscal, en particulier lorsqu’ils touchent au droit international. Je souhaite poursuivre ma formation, viser une spécialisation et, à terme, exercer également à l’étranger.',
    ],
    competenciesLabel: 'Domaines d’intérêt',
    competencies: [
      'Droit fiscal',
      'Droit des affaires',
      'Arbitrage et médiation',
      'Contentieux civil',
      'Droit international',
      'Rhétorique et argumentation juridiques',
      'Traduction et relecture de contrats',
    ],
  },
}

/* -------------------------------- Experiência ------------------------------- */

export const experiences = [
  {
    id: 'campos-mello',
    org: 'Campos Mello Advogados',
    location: {
      pt: 'Rio de Janeiro, Brasil',
      en: 'Rio de Janeiro, Brazil',
      fr: 'Rio de Janeiro, Brésil',
    },
    period: { pt: 'set. 2026 — atual', en: 'Sep 2026 — present', fr: 'sept. 2026 — aujourd’hui' },
    role: {
      pt: 'Estagiária — Direito Tributário',
      en: 'Intern — Tax Law',
      fr: 'Stagiaire — droit fiscal',
    },
    description: {
      pt: 'Atuação na área de Direito Tributário, com apoio em pesquisa de legislação e de jurisprudência, acompanhamento de processos e de prazos e elaboração de documentos de apoio às equipes.',
      en: 'Work within the tax law practice, supporting research into legislation and case law, monitoring proceedings and deadlines, and preparing supporting documents for the teams.',
      fr: 'Intervention au sein de la pratique de droit fiscal : recherches sur la législation et la jurisprudence, suivi des procédures et des délais, rédaction de documents de soutien aux équipes.',
    },
    tags: {
      pt: ['Tributário', 'Pesquisa', 'Prazos'],
      en: ['Tax', 'Research', 'Deadlines'],
      fr: ['Fiscal', 'Recherche', 'Délais'],
    },
  },
  {
    id: 'salomao',
    org: 'Salomão, Kaiuca, Abrahão, Raposo e Cotta Advogados',
    location: {
      pt: 'Rio de Janeiro, Brasil',
      en: 'Rio de Janeiro, Brazil',
      fr: 'Rio de Janeiro, Brésil',
    },
    period: { pt: 'fev. 2026 — set. 2026', en: 'Feb 2026 — Sep 2026', fr: 'févr. 2026 — sept. 2026' },
    role: {
      pt: 'Estagiária — Contencioso Cível Estratégico',
      en: 'Intern — Strategic Civil Litigation',
      fr: 'Stagiaire — contentieux civil stratégique',
    },
    description: {
      pt: 'Atuação em contencioso cível estratégico, elaborando peças processuais de baixa a média complexidade, realizando pesquisas jurídicas e jurisprudenciais e auxiliando na análise de litígios cíveis. Acompanhamento de processos, prazos e audiências, realização de diligências externas e elaboração de relatórios e outros documentos jurídicos para clientes, assegurando precisão e cumprimento dos prazos.',
      en: 'Work in strategic civil litigation: drafting court submissions of low to medium complexity, carrying out legal and case law research, and supporting the analysis of civil disputes. Monitoring of cases, procedural deadlines and hearings, external filings, and preparation of reports and other legal documents for clients, ensuring accuracy and compliance with deadlines.',
      fr: 'Intervention en contentieux civil stratégique : rédaction d’actes de procédure de complexité faible à moyenne, recherches juridiques et jurisprudentielles, appui à l’analyse de litiges civils. Suivi des dossiers, des délais et des audiences, démarches externes, rédaction de rapports et d’autres documents juridiques destinés aux clients, avec précision et respect des délais.',
    },
    tags: {
      pt: ['Contencioso cível', 'Peças processuais', 'Jurisprudência', 'Audiências'],
      en: ['Civil litigation', 'Court submissions', 'Case law', 'Hearings'],
      fr: ['Contentieux civil', 'Actes de procédure', 'Jurisprudence', 'Audiences'],
    },
  },
  {
    id: 'tjrj',
    org: 'Tribunal de Justiça do Estado do Rio de Janeiro',
    location: {
      pt: 'Rio de Janeiro, Brasil',
      en: 'Rio de Janeiro, Brazil',
      fr: 'Rio de Janeiro, Brésil',
    },
    period: { pt: 'dez. 2025 — fev. 2026', en: 'Dec 2025 — Feb 2026', fr: 'déc. 2025 — févr. 2026' },
    role: {
      pt: 'Estagiária — 6ª Câmara de Direito Privado',
      en: 'Intern — 6th Chamber of Private Law',
      fr: 'Stagiaire — 6e chambre de droit privé',
    },
    description: {
      pt: 'Atuação na 6ª Câmara de Direito Privado, prestando atendimento ao público e fornecendo informações sobre o andamento de processos, além de auxiliar no controle processual interno por meio dos sistemas e-JUD, eProc, PJe e DCP. Elaboração de documentos processuais simples, acompanhamento de processos judiciais e apoio aos desembargadores na preparação e organização das sessões de julgamento.',
      en: 'Work in the 6th Chamber of Private Law, assisting the public with information on the status of proceedings and supporting internal case management through the e-JUD, eProc, PJe and DCP systems. Drafting of simple procedural documents, case follow-up, and support to the appellate judges in preparing and organising judgment sessions.',
      fr: 'Intervention à la 6e chambre de droit privé : accueil du public et information sur l’état d’avancement des procédures, appui à la gestion interne des dossiers via les systèmes e-JUD, eProc, PJe et DCP. Rédaction de documents de procédure simples, suivi des affaires et appui aux conseillers dans la préparation et l’organisation des audiences de jugement.',
    },
    tags: {
      pt: ['Direito privado', 'Segundo grau', 'e-JUD / PJe', 'Atendimento'],
      en: ['Private law', 'Appellate court', 'e-JUD / PJe', 'Public assistance'],
      fr: ['Droit privé', 'Cour d’appel', 'e-JUD / PJe', 'Accueil du public'],
    },
  },
  {
    id: 'harpercollins',
    org: 'HarperCollins Brasil',
    location: {
      pt: 'Rio de Janeiro, Brasil',
      en: 'Rio de Janeiro, Brazil',
      fr: 'Rio de Janeiro, Brésil',
    },
    period: { pt: 'jan. 2025 — dez. 2025', en: 'Jan 2025 — Dec 2025', fr: 'janv. 2025 — déc. 2025' },
    role: {
      pt: 'Estagiária — Editorial e contratos',
      en: 'Intern — Editorial and contracts',
      fr: 'Stagiaire — édition et contrats',
    },
    description: {
      pt: 'Atuação em projetos editoriais e de publicação, envolvendo a tradução e revisão de livros importados em inglês e francês, bem como a revisão de contratos e documentos jurídicos. Participação em reuniões com autores e agentes internacionais para apoiar a aquisição de novos títulos e as negociações contratuais, auxílio no registro e na regularização de direitos autorais, além da análise de manuscritos inéditos e de suas implicações jurídicas para publicação.',
      en: 'Work on editorial and publishing projects, including translation and revision of imported books in English and French, as well as review of contracts and legal documents. Participation in meetings with international authors and agents to support the acquisition of new titles and contract negotiations, assistance with copyright registration and regularisation, and analysis of unpublished manuscripts and their legal implications for publication.',
      fr: 'Intervention sur des projets éditoriaux et de publication : traduction et révision d’ouvrages importés en anglais et en français, relecture de contrats et de documents juridiques. Participation à des réunions avec des auteurs et agents internationaux en appui aux acquisitions de titres et aux négociations contractuelles, aide à l’enregistrement et à la régularisation des droits d’auteur, analyse de manuscrits inédits et de leurs implications juridiques.',
    },
    tags: {
      pt: ['Contratos', 'Direitos autorais', 'Tradução EN / FR', 'Negociação'],
      en: ['Contracts', 'Copyright', 'EN / FR translation', 'Negotiation'],
      fr: ['Contrats', 'Droits d’auteur', 'Traduction EN / FR', 'Négociation'],
    },
  },
  {
    id: 'casa-rui-barbosa',
    org: 'Fundação Casa de Rui Barbosa',
    location: {
      pt: 'Rio de Janeiro, Brasil',
      en: 'Rio de Janeiro, Brazil',
      fr: 'Rio de Janeiro, Brésil',
    },
    period: { pt: 'jul. 2024 — dez. 2024', en: 'Jul 2024 — Dec 2024', fr: 'juil. 2024 — déc. 2024' },
    role: {
      pt: 'Estagiária editorial (voluntária)',
      en: 'Editorial intern (volunteer)',
      fr: 'Stagiaire éditoriale (bénévole)',
    },
    description: {
      pt: 'Apoio em pesquisa editorial, revisão de documentos e preparação de materiais editoriais, contribuindo para projetos de publicação da instituição e desenvolvendo capacidade analítica, organização e comunicação escrita.',
      en: 'Support in editorial research, document review and preparation of editorial materials, contributing to the institution’s publishing projects while developing analytical, organisational and written communication skills.',
      fr: 'Appui à la recherche éditoriale, à la relecture de documents et à la préparation de matériaux éditoriaux, en contribuant aux projets de publication de l’institution et en développant des compétences analytiques, organisationnelles et rédactionnelles.',
    },
    tags: {
      pt: ['Pesquisa editorial', 'Revisão', 'Voluntariado'],
      en: ['Editorial research', 'Proofreading', 'Volunteer'],
      fr: ['Recherche éditoriale', 'Relecture', 'Bénévolat'],
    },
  },
]

/* --------------------------------- Formação --------------------------------- */

export const education = [
  {
    id: 'direito',
    period: { pt: '2025 — 2029', en: '2025 — 2029', fr: '2025 — 2029' },
    degree: {
      pt: 'Bacharelado em Direito',
      en: 'LL.B. in Law',
      fr: 'Licence en droit',
    },
    institution: 'Universidade Cândido Mendes',
    place: {
      pt: 'Rio de Janeiro, Brasil',
      en: 'Rio de Janeiro, Brazil',
      fr: 'Rio de Janeiro, Brésil',
    },
    note: {
      pt: 'Cursando o 4º período.',
      en: 'Currently in the fourth semester.',
      fr: 'Actuellement en quatrième semestre.',
    },
  },
  {
    id: 'letras',
    period: { pt: '2023 — 2026', en: '2023 — 2026', fr: '2023 — 2026' },
    degree: {
      pt: 'Bacharelado em Letras: Português–Grego',
      en: 'BA in Portuguese–Greek Philology',
      fr: 'Licence en lettres : portugais–grec',
    },
    institution: 'Universidade Federal do Rio de Janeiro',
    place: {
      pt: 'Rio de Janeiro, Brasil',
      en: 'Rio de Janeiro, Brazil',
      fr: 'Rio de Janeiro, Brésil',
    },
    note: {
      pt: 'Conclusão prevista para 2026.',
      en: 'Expected graduation in 2026.',
      fr: 'Diplôme attendu en 2026.',
    },
  },
]

export const coursesLabel = {
  pt: 'Formação complementar',
  en: 'Further training',
  fr: 'Formations complémentaires',
}

export const courses = [
  {
    provider: 'IBMEC',
    title: {
      pt: 'Minicurso de Direito Internacional',
      en: 'Short course in international law',
      fr: 'Cours court de droit international',
    },
  },
  {
    provider: 'Elevify / Apoia',
    title: { pt: 'Direito Internacional', en: 'International law', fr: 'Droit international' },
  },
  {
    provider: 'FGV',
    title: {
      pt: 'Fundamentos das relações internacionais',
      en: 'Foundations of international relations',
      fr: 'Fondements des relations internationales',
    },
  },
  {
    provider: 'Pensar Cursos',
    title: {
      pt: 'Minicurso de Direito Internacional',
      en: 'Short course in international law',
      fr: 'Cours court de droit international',
    },
  },
  {
    provider: 'ESA / OAB',
    title: {
      pt: 'Processo Legislativo Constitucional',
      en: 'Constitutional legislative process',
      fr: 'Procédure législative constitutionnelle',
    },
  },
]

/* ------------------- Pesquisa e atividades acadêmicas (acordeão) ------------- */

export const academic = [
  {
    id: 'iniciacao-cientifica',
    icon: 'scroll',
    period: { pt: 'Em curso', en: 'Ongoing', fr: 'En cours' },
    kicker: {
      pt: 'Iniciação científica · UFRJ',
      en: 'Undergraduate research · UFRJ',
      fr: 'Initiation à la recherche · UFRJ',
    },
    title: {
      pt: 'Retórica jurídica antiga e casos contemporâneos',
      en: 'Ancient legal rhetoric and contemporary cases',
      fr: 'Rhétorique juridique antique et affaires contemporaines',
    },
    subtitle: {
      pt: 'Como a argumentação grega ainda organiza o discurso jurídico',
      en: 'How Greek argument still shapes legal discourse',
      fr: 'Comment l’argumentation grecque structure encore le discours juridique',
    },
    blocks: {
      pt: [
        {
          label: 'Contexto',
          text: 'Pesquisa acadêmica sobre a retórica jurídica na Grécia Antiga e sua influência na argumentação jurídica contemporânea, com análise comparativa entre discursos clássicos e casos atuais.',
        },
        {
          label: 'O trabalho',
          text: 'Leitura e tradução de textos gregos no original e comparação entre os recursos argumentativos ali descritos e a fundamentação empregada em decisões e peças processuais contemporâneas.',
        },
      ],
      en: [
        {
          label: 'Context',
          text: 'Academic research on legal rhetoric in ancient Greece and its influence on contemporary legal argument, with a comparative analysis of classical speeches and present-day cases.',
        },
        {
          label: 'The work',
          text: 'Reading and translating Greek texts in the original and comparing the argumentative devices described there with the reasoning used in contemporary decisions and court submissions.',
        },
      ],
      fr: [
        {
          label: 'Contexte',
          text: 'Recherche universitaire sur la rhétorique juridique dans la Grèce antique et son influence sur l’argumentation juridique contemporaine, avec une analyse comparative entre discours classiques et affaires actuelles.',
        },
        {
          label: 'Le travail',
          text: 'Lecture et traduction de textes grecs dans l’original et comparaison entre les procédés argumentatifs qui y sont décrits et la motivation employée dans des décisions et des actes de procédure contemporains.',
        },
      ],
    },
    tags: {
      pt: ['Retórica', 'Grego antigo', 'Argumentação jurídica'],
      en: ['Rhetoric', 'Ancient Greek', 'Legal argument'],
      fr: ['Rhétorique', 'Grec ancien', 'Argumentation juridique'],
    },
  },
  {
    id: 'liga-direito-internacional',
    icon: 'globe',
    period: { pt: 'Em curso', en: 'Ongoing', fr: 'En cours' },
    kicker: {
      pt: 'Liga acadêmica · UCAM',
      en: 'Academic league · UCAM',
      fr: 'Ligue universitaire · UCAM',
    },
    title: {
      pt: 'Liga Acadêmica de Direito Internacional',
      en: 'International Law Academic League',
      fr: 'Ligue universitaire de droit international',
    },
    subtitle: {
      pt: 'Estudo e discussão de casos de Direito Internacional',
      en: 'Study and discussion of international law cases',
      fr: 'Étude et discussion d’affaires de droit international',
    },
    blocks: {
      pt: [
        {
          label: 'O que é',
          text: 'Participação em atividades acadêmicas voltadas ao estudo do Direito Internacional, com discussão de temas contemporâneos, análise de casos e aprofundamento teórico em questões jurídicas de alcance global.',
        },
      ],
      en: [
        {
          label: 'What it is',
          text: 'Participation in academic activities devoted to the study of international law, discussing contemporary themes, analysing cases and deepening the theory behind legal questions of global reach.',
        },
      ],
      fr: [
        {
          label: 'De quoi il s’agit',
          text: 'Participation à des activités universitaires consacrées à l’étude du droit international : discussion de thèmes contemporains, analyse d’affaires et approfondissement théorique de questions juridiques de portée mondiale.',
        },
      ],
    },
    tags: {
      pt: ['Direito Internacional', 'Estudo de casos'],
      en: ['International law', 'Case studies'],
      fr: ['Droit international', 'Études de cas'],
    },
  },
  {
    id: 'arbitragem',
    icon: 'scale',
    period: { pt: 'Em curso', en: 'Ongoing', fr: 'En cours' },
    kicker: {
      pt: 'Grupo de estudos · UCAM',
      en: 'Study group · UCAM',
      fr: 'Groupe d’études · UCAM',
    },
    title: {
      pt: 'Arbitragem e Mediação',
      en: 'Arbitration and Mediation',
      fr: 'Arbitrage et médiation',
    },
    subtitle: {
      pt: 'Métodos de resolução de disputas fora do processo judicial',
      en: 'Dispute resolution beyond the courts',
      fr: 'Le règlement des différends hors des tribunaux',
    },
    blocks: {
      pt: [
        {
          label: 'O que é',
          text: 'Participação em grupo de estudos dedicado à arbitragem e à mediação, com foco na análise de casos, discussão de jurisprudência e aprofundamento dos mecanismos alternativos de resolução de conflitos.',
        },
      ],
      en: [
        {
          label: 'What it is',
          text: 'Participation in a study group devoted to arbitration and mediation, focusing on case analysis, discussion of case law and a deeper understanding of alternative dispute resolution mechanisms.',
        },
      ],
      fr: [
        {
          label: 'De quoi il s’agit',
          text: 'Participation à un groupe d’études consacré à l’arbitrage et à la médiation, axé sur l’analyse d’affaires, la discussion de la jurisprudence et l’approfondissement des modes alternatifs de règlement des conflits.',
        },
      ],
    },
    tags: {
      pt: ['Arbitragem', 'Mediação', 'Resolução de disputas'],
      en: ['Arbitration', 'Mediation', 'Dispute resolution'],
      fr: ['Arbitrage', 'Médiation', 'Règlement des différends'],
    },
  },
]

/* --------------------------- Idiomas e ferramentas -------------------------- */

export const skillsLabels = {
  pt: { languages: 'Idiomas', tools: 'Ferramentas e sistemas' },
  en: { languages: 'Languages', tools: 'Tools and systems' },
  fr: { languages: 'Langues', tools: 'Outils et systèmes' },
}

export const spokenLanguages = [
  {
    id: 'pt',
    badge: 'PT',
    percent: 100,
    name: { pt: 'Português', en: 'Portuguese', fr: 'Portugais' },
    level: { pt: 'Língua materna', en: 'Native', fr: 'Langue maternelle' },
  },
  {
    id: 'en',
    badge: 'EN',
    percent: 90,
    name: { pt: 'Inglês', en: 'English', fr: 'Anglais' },
    level: { pt: 'Fluente', en: 'Fluent', fr: 'Courant' },
  },
  {
    id: 'fr',
    badge: 'FR',
    percent: 90,
    name: { pt: 'Francês', en: 'French', fr: 'Français' },
    level: { pt: 'Fluente', en: 'Fluent', fr: 'Courant' },
  },
  {
    id: 'grc',
    badge: 'GRC',
    percent: 60,
    name: { pt: 'Grego antigo', en: 'Ancient Greek', fr: 'Grec ancien' },
    level: {
      pt: 'Leitura e tradução',
      en: 'Reading and translation',
      fr: 'Lecture et traduction',
    },
  },
  {
    id: 'lat',
    badge: 'LAT',
    percent: 60,
    name: { pt: 'Latim', en: 'Latin', fr: 'Latin' },
    level: {
      pt: 'Leitura e tradução',
      en: 'Reading and translation',
      fr: 'Lecture et traduction',
    },
  },
]

export const toolGroups = {
  pt: [
    { label: 'Sistemas judiciais', items: ['e-JUD', 'eProc', 'PJe', 'DCP'] },
    { label: 'Produtividade', items: ['Word', 'Excel', 'Notion', 'Trello', 'OneDrive'] },
    { label: 'Documentos e edição', items: ['Adobe Acrobat', 'InDesign', 'Canva'] },
  ],
  en: [
    { label: 'Court systems', items: ['e-JUD', 'eProc', 'PJe', 'DCP'] },
    { label: 'Productivity', items: ['Word', 'Excel', 'Notion', 'Trello', 'OneDrive'] },
    { label: 'Documents and design', items: ['Adobe Acrobat', 'InDesign', 'Canva'] },
  ],
  fr: [
    { label: 'Systèmes judiciaires', items: ['e-JUD', 'eProc', 'PJe', 'DCP'] },
    { label: 'Productivité', items: ['Word', 'Excel', 'Notion', 'Trello', 'OneDrive'] },
    { label: 'Documents et édition', items: ['Adobe Acrobat', 'InDesign', 'Canva'] },
  ],
}

/* ---------------------------------- Contato --------------------------------- */

export const contact = {
  pt: {
    headingStart: 'Vamos',
    headingEm: 'conversar.',
    text: 'Aberta a oportunidades de estágio e a conversas sobre Direito Tributário, Direito Empresarial e Direito Internacional — no Brasil ou no exterior.',
  },
  en: {
    headingStart: 'Let’s',
    headingEm: 'talk.',
    text: 'Open to internship opportunities and to conversations about tax law, business law and international law — in Brazil or abroad.',
  },
  fr: {
    headingStart: 'Prenons',
    headingEm: 'contact.',
    text: 'Ouverte aux opportunités de stage et aux échanges autour du droit fiscal, du droit des affaires et du droit international — au Brésil comme à l’étranger.',
  },
}
