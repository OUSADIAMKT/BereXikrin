/**
 * Fonte única dos dados da Associação usados no site.
 * Origem: docs/organizacao.md e os textos do site antigo (legado/site-wordpress).
 */

export const SITE = {
  nome: "Associação Indígena Berê Xikrin",
  nomeCurto: "Berê Xikrin",
  url: "https://berexikrin.org.br",
  descricao:
    "Associação Indígena Berê Xikrin da TI Trincheira-Bacajá. Povo Mẽbêngôkre-Xikrin defendendo território, cultura e o futuro das 16 aldeias do Rio Bacajá, no Pará.",
  email: "xikrinbere@gmail.com",
  endereco: ["Aldeia Indígena Krãnh, TI Trincheira-Bacajá", "Anapu/PA · CEP 68365-000"],
  fundacao: 2018,
} as const;

export const REDES = [
  { nome: "Instagram", url: "https://www.instagram.com/associacaoberexikrin/" },
  { nome: "TikTok", url: "https://www.tiktok.com/@bere_xikrin" },
  { nome: "YouTube", url: "https://www.youtube.com/@BereXikrin" },
  {
    nome: "LinkedIn",
    url: "https://www.linkedin.com/in/associa%C3%A7%C3%A3o-ind%C3%ADgena-ber%C3%AA-xikrin-43a670427/",
  },
] as const;

/** Confirmados pelo cliente em 13/10/2026. */
export const NUMEROS = [
  { valor: "16", rotulo: "aldeias representadas" },
  { valor: "387", rotulo: "pessoas" },
  { valor: "111", rotulo: "famílias" },
] as const;

export type Projeto = {
  slug: string;
  nome: string;
  tema: "Território" | "Cultura" | "Rio Bacajá" | "Comunicação" | "Alimentação" | "Belo Monte";
  status: "Em andamento" | "Concluído";
  resumo: string;
  parceiros?: string;
  periodo?: string;
  foto: string;
  alt: string;
};

export const PROJETOS: Projeto[] = [
  {
    slug: "belo-monte",
    // \u2060 (word joiner) impede a quebra de linha no hífen de "PBA-CI".
    nome: "Belo Monte e PBA-\u2060CI",
    tema: "Belo Monte",
    status: "Em andamento",
    resumo:
      "Desde os anos 70 enfrentamos grandes obras no Médio Xingu. Hoje acompanhamos e coexecutamos as compensações da UHE Belo Monte, para que as decisões sobre a nossa terra passem por nós.",
    parceiros: "Norte Energia (PBA-CI)",
    foto: "/img/aldeia-e-rio.webp",
    alt: "Aldeia na mata, com o rio em primeiro plano",
  },
  {
    slug: "restaura-amazonia",
    nome: "Restaura Amazônia",
    tema: "Território",
    status: "Em andamento",
    resumo:
      "Floresta voltando a crescer com agroflorestas, cadeias do cacau, da castanha e do babaçu, artesanato das menire e brigadas Xikrin.",
    parceiros: "CI-Brasil, Fundo Amazônia/BNDES",
    periodo: "ago/2026 a jul/2030",
    foto: "/img/aldeia-entardecer.webp",
    alt: "Casas da aldeia diante da floresta e do rio ao pôr do sol",
  },
  {
    slug: "casa-do-guerreiro",
    nome: "Casa do Guerreiro",
    tema: "Cultura",
    status: "Concluído",
    resumo:
      "A construção da Ngàb, no centro da aldeia, onde nos reunimos para decidir, celebrar e aprender com os Kubengêt.",
    parceiros: "PBA-CI, programas cultural e de fortalecimento institucional",
    foto: "/img/ngab-comunidade.webp",
    alt: "Comunidade reunida em frente à Ngàb, a Casa do Guerreiro",
  },
  {
    slug: "rituais-tradicionais",
    nome: "Rituais Tradicionais",
    tema: "Cultura",
    status: "Em andamento",
    resumo:
      "Desde 2018 apoiamos os rituais do calendário Xikrin, que garantem a passagem de conhecimento entre as gerações.",
    parceiros: "Programa de Patrimônio Cultural Material e Imaterial",
    periodo: "desde 2018",
    foto: "/img/aldeia-circular-vista-de-cima.webp",
    alt: "Aldeia circular vista de cima: casas ao redor de um grande pátio de terra",
  },
  {
    slug: "monitoramento-do-pescado",
    nome: "Monitoramento do Pescado",
    tema: "Rio Bacajá",
    status: "Em andamento",
    resumo:
      "Jovens de cinco aldeias capacitados para registrar os peixes e acompanhar as mudanças no Rio Bacajá depois de Belo Monte.",
    foto: "/img/aldeia-e-rio.webp",
    alt: "Aldeia na mata, com o rio em primeiro plano",
  },
  {
    slug: "internet-nas-aldeias",
    nome: "Internet nas Aldeias",
    tema: "Comunicação",
    status: "Em andamento",
    resumo:
      "Internet para aproximar as aldeias, agilizar alertas de invasão aos órgãos de proteção e acompanhar os projetos.",
    parceiros: "Fundo Casa Socioambiental",
    foto: "/img/aldeia-circular-por-do-sol.webp",
    alt: "Vista aérea de uma aldeia Xikrin circular ao entardecer",
  },
  {
    slug: "mudas-citricas",
    nome: "Mudas Cítricas",
    tema: "Alimentação",
    status: "Concluído",
    resumo: "Mil mudas de limão, tangerina e laranja distribuídas entre as aldeias associadas.",
    parceiros: "Prefeitura de Anapu, EMATER Anapu",
    foto: "/img/aldeia-entardecer.webp",
    alt: "Casas da aldeia diante da floresta",
  },
];

export const DESTAQUES_HOME = ["restaura-amazonia", "casa-do-guerreiro", "monitoramento-do-pescado"];

export type ItemMenu = { rotulo: string; href: string; filhos?: { rotulo: string; href: string }[] };

export const MENU: ItemMenu[] = [
  { rotulo: "Sobre", href: "/sobre/" },
  { rotulo: "Cultura", href: "/cultura/" },
  { rotulo: "Território", href: "/territorio/" },
  {
    rotulo: "Projetos",
    href: "/projetos/",
    filhos: [
      { rotulo: "Todos os projetos", href: "/projetos/" },
      ...PROJETOS.map((p) => ({ rotulo: p.nome, href: `/projetos/${p.slug}/` })),
    ],
  },
  { rotulo: "Produtos", href: "/produtos/" },
  { rotulo: "Conteúdos", href: "/conteudos/" },
  { rotulo: "Transparência", href: "/transparencia/" },
];

/** Fatos reais do projeto Restaura Amazônia (site antigo, página CI Brasil). */
export const NOTICIAS = [
  {
    data: "2026-10-07",
    dataTexto: "7 a 23 de outubro de 2026",
    categoria: "Território",
    titulo: "Primeira expedição do Restaura Amazônia percorre as 16 aldeias",
    resumo: "A equipe visita cada aldeia da TI Trincheira-Bacajá para planejar a restauração junto com as comunidades.",
  },
  {
    data: "2026-09-02",
    dataTexto: "2 de setembro de 2026",
    categoria: "Projetos",
    titulo: "Berê assina contrato do Restaura Amazônia",
    resumo: "Projeto proposto e liderado pela Associação vai restaurar a floresta em 48 meses, com apoio da CI-Brasil e do Fundo Amazônia.",
  },
];

export const PARCEIROS = ["CI-Brasil", "Fundo Amazônia/BNDES", "Fundo Casa Socioambiental", "Prefeitura de Anapu"];

export const CREDITO_FOTO = "Foto: Ousadia Marketing para a Associação Berê Xikrin";
