/**
 * Fonte única dos dados da Associação usados no site.
 * Origem principal: Panorama do projeto e histórico da Associação, enviado pela
 * Coordenação em 25/09/2026 (docs/referencias-cliente/panorama-restaura-2026-09-25.md).
 * Regras: voz da Associação (não falar pelos Xikrin na primeira pessoa), sem
 * números de área, termos em Mẽbêngôkre conferidos com Kroire Xikrin.
 */

export const SITE = {
  nome: "Associação Indígena Berê Xikrin",
  nomeCompleto: "Associação Indígena Berê Xikrin da TI Bacajá",
  nomeCurto: "Berê Xikrin",
  url: "https://berexikrin.org.br",
  descricao:
    "Organização indígena do povo Mẽbêngôkre-Xikrin, que reúne 16 aldeias da Terra Indígena Trincheira Bacajá, no Pará: direitos, gestão do território e etnodesenvolvimento.",
  email: "xikrinbere@gmail.com",
  /** Sede atual em Altamira (Panorama 2026); endereço completo pendente. */
  endereco: ["Sede em Altamira (PA)", "Aldeias em Anapu e Senador José Porfírio (PA)"],
  fundacao: 2018,
  fundacaoData: "23 de outubro de 2018",
} as const;

export const MISSAO =
  "Representar e fortalecer o povo Mẽbêngôkre Xikrin, promovendo a defesa de seus direitos territoriais e culturais, a preservação da sociobiodiversidade da TI Trincheira Bacajá e o desenvolvimento sustentável das comunidades, com base no etnodesenvolvimento e na autonomia.";

export const VISAO =
  "Ser referência na Amazônia em autonomia indígena, gestão territorial sustentável e bioeconomia, garantindo a perpetuação da cultura Xikrin e o bem-estar de seu povo para as futuras gerações.";

export const FRENTES = [
  { nome: "Direitos", texto: "Articulação e defesa dos direitos do povo Xikrin." },
  { nome: "Território", texto: "Gestão territorial e ambiental da TI Trincheira Bacajá." },
  { nome: "Etnodesenvolvimento", texto: "Segurança alimentar e geração de renda a partir da floresta." },
];

/** Linha do tempo (Panorama 2026 e ata de fundação). */
export const TRAJETORIA = [
  { ano: "Desde 2013", texto: "Construção do Plano de Gestão Territorial e Ambiental (PGTA) “Aben Kaben Marimei”, “o saber por todos compartilhado”, e plantio de cacau pelas famílias." },
  { ano: "2018", texto: "Fundação da Associação em 23 de outubro, na Ngàb da aldeia Krãnh, pelas aldeias Kabakrô, Krãnh, Pyudjan e Prindjam, para defender o povo Xikrin diante dos impactos dos grandes empreendimentos na região." },
  { ano: "2019", texto: "Registro em cartório em Anapu e, em dezembro, reunião que dá início à articulação entre aldeias que forma a Rede Berê." },
  { ano: "2021", texto: "Plano de Vida Xikrin; Ritual Kwyrykangô; a assembleia decide criar cantinas comunitárias e levar internet às aldeias." },
  { ano: "2023", texto: "Festival Cultural Xikrin, fortalecimento da cadeia produtiva das menire, cineclube e monitoramento ambiental." },
  { ano: "2024", texto: "Festival Cultural Xikrin Kwyrykangô e Cine Xikrin; as 16 aldeias validam o Plano de Trabalho da Rede Berê." },
  { ano: "2025", texto: "Projeto Olhos d’Água — Menire Xikrin; fortalecimento de lideranças; seleção no Edital 3 do Restaura Amazônia." },
  { ano: "2026", texto: "Projeto de esportes Kukràdjà Xikrin, Festival Berê Xikrin, segurança alimentar e hídrica, gestão territorial e mobilidade entre aldeias, e contrato do Restaura Amazônia assinado em 2 de setembro." },
];

export const CITACAO_BEPTOK = {
  texto: "Penso que se a mata vai sumindo, nosso futuro some também.",
  autor: "Beptok Xikrin, aldeia Pytakô",
  fonte: "Plano de Vida Xikrin, 2021",
};

export const REDES = [
  { nome: "Instagram", url: "https://www.instagram.com/associacaoberexikrin/" },
  { nome: "TikTok", url: "https://www.tiktok.com/@bere_xikrin" },
  { nome: "YouTube", url: "https://www.youtube.com/@BereXikrin" },
  {
    nome: "LinkedIn",
    url: "https://www.linkedin.com/in/associa%C3%A7%C3%A3o-ind%C3%ADgena-ber%C3%AA-xikrin-43a670427/",
  },
] as const;

/** Perfil Populacional das 16 aldeias da Associação, 13/09/2026 (Panorama). */
export const NUMEROS = [
  { valor: "16", rotulo: "aldeias da Associação, de 53 na Terra Indígena" },
  { valor: "387", rotulo: "pessoas nas aldeias da Berê" },
  { valor: "111", rotulo: "famílias" },
  { valor: "98%", rotulo: "ou mais do território Xikrin preservado" },
] as const;

export const FONTE_NUMEROS = "Perfil Populacional das 16 aldeias da Associação (set/2026) e Anexo 1 do projeto Restaura Amazônia.";

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
  /** Fotos do acervo da Associação, vindas do site antigo. */
  galeria?: Foto[];
};

export type Foto = { src: string; alt: string };

export const CREDITO_ACERVO = "Fotos: acervo da Associação Indígena Berê Xikrin";

export const PROJETOS: Projeto[] = [
  {
    slug: "belo-monte",
    // \u2060 (word joiner) impede a quebra de linha no hífen de "PBA-CI".
    nome: "Belo Monte e PBA-\u2060CI",
    tema: "Belo Monte",
    status: "Em andamento",
    resumo:
      "Desde os anos 1970, o povo Xikrin enfrenta grandes obras no Médio Xingu. A Associação acompanha e coexecuta as compensações da Usina Belo Monte, que mudou o regime do Rio Bacajá.",
    parceiros: "Norte Energia (PBA-CI)",
    foto: "/img/projetos/belo-monte-usina.webp",
    alt: "Vista aérea da barragem da Usina Hidrelétrica Belo Monte, no Rio Xingu",
  },
  {
    slug: "restaura-amazonia",
    nome: "Restaura Amazônia",
    tema: "Território",
    status: "Em andamento",
    resumo:
      "Projeto proposto e liderado pela Associação: restauração com sistemas agroflorestais, cadeias do cacau, da castanha, do babaçu e do artesanato das menire, brigadas e Agentes Ambientais Xikrin, e cuidado com a água das aldeias.",
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
      "A construção da Ngàb, a casa do guerreiro, espaço político onde cada aldeia toma suas decisões e aprende com os Kubengêt.",
    parceiros: "PBA-CI, programas cultural e de fortalecimento institucional",
    foto: "/img/projetos/casa-do-guerreiro-1.webp",
    alt: "A Ngàb recém-construída: grande casa aberta coberta de palha de babaçu",
    galeria: [
      { src: "/img/projetos/casa-do-guerreiro-3.webp", alt: "Homem carrega nas costas uma folha de palmeira para a cobertura" },
      { src: "/img/projetos/casa-do-guerreiro-4.webp", alt: "Canoa no rio carregada de palha de babaçu" },
      { src: "/img/projetos/casa-do-guerreiro-5.webp", alt: "Palha de babaçu espalhada no chão, pronta para ser trançada" },
      { src: "/img/projetos/casa-do-guerreiro-2.webp", alt: "Homens trabalhando na estrutura de madeira e palha da Ngàb" },
    ],
  },
  {
    slug: "rituais-tradicionais",
    nome: "Rituais Tradicionais",
    tema: "Cultura",
    status: "Em andamento",
    resumo:
      "Desde 2018, a Associação apoia os rituais do calendário Xikrin, que garantem a passagem de conhecimento entre as gerações.",
    parceiros: "Programa de Patrimônio Cultural Material e Imaterial",
    periodo: "desde 2018",
    foto: "/img/projetos/rituais-5.webp",
    alt: "Mulher Xikrin pinta o corpo de uma jovem com jenipapo",
    galeria: [
      { src: "/img/projetos/rituais-5.webp", alt: "Mulher Xikrin pinta o corpo de uma jovem com jenipapo" },
      { src: "/img/projetos/rituais-1.webp", alt: "Mulheres e crianças reunidas durante a preparação de um ritual" },
      { src: "/img/projetos/rituais-2.webp", alt: "Grupo reunido com adornos e faixas cerimoniais" },
      { src: "/img/projetos/rituais-3.webp", alt: "Comunidade reunida sob a cobertura da Ngàb" },
    ],
  },
  {
    slug: "monitoramento-do-pescado",
    nome: "Monitoramento do Pescado",
    tema: "Rio Bacajá",
    status: "Em andamento",
    resumo:
      "Jovens de cinco aldeias capacitados para registrar os peixes e acompanhar as mudanças no Rio Bacajá depois de Belo Monte.",
    foto: "/img/projetos/pescado-2.webp",
    alt: "Jovem pesa um peixe com balança de mão, de pé numa canoa no rio",
    galeria: [
      { src: "/img/projetos/pescado-2.webp", alt: "Jovem pesa um peixe com balança de mão, de pé numa canoa no rio" },
      { src: "/img/projetos/pescado-1.webp", alt: "Mãos medem um peixe com fita métrica para o registro" },
    ],
  },
  {
    slug: "internet-nas-aldeias",
    nome: "Internet nas Aldeias",
    tema: "Comunicação",
    status: "Em andamento",
    resumo:
      "Internet para aproximar as aldeias, agilizar alertas de invasão aos órgãos de proteção e acompanhar os projetos.",
    parceiros: "Fundo Casa Socioambiental",
    foto: "/img/projetos/internet-1.webp",
    alt: "Placa solar instalada no telhado para alimentar a internet da aldeia",
    galeria: [
      { src: "/img/projetos/internet-1.webp", alt: "Placa solar instalada no telhado para alimentar a internet da aldeia" },
      { src: "/img/projetos/internet-2.webp", alt: "Controlador de carga e tomadas instalados na parede" },
      { src: "/img/projetos/internet-3.webp", alt: "Técnico instala o equipamento de energia na parede" },
      { src: "/img/projetos/internet-4.webp", alt: "Comunidade reunida na Ngàb" },
    ],
  },
  {
    slug: "mudas-citricas",
    nome: "Mudas Cítricas",
    tema: "Alimentação",
    status: "Concluído",
    resumo: "Mil mudas de limão, tangerina e laranja distribuídas entre as aldeias associadas.",
    parceiros: "Prefeitura de Anapu, EMATER Anapu",
    foto: "/img/projetos/mudas-3.webp",
    alt: "Mudas de plantas cítricas agrupadas na grama, prontas para o plantio",
    galeria: [
      { src: "/img/projetos/mudas-1.webp", alt: "Mudas sendo separadas sob um abrigo para a distribuição" },
      { src: "/img/projetos/mudas-2.webp", alt: "Mulher Xikrin com mudas no terreno da aldeia" },
      { src: "/img/projetos/mudas-3.webp", alt: "Mudas de plantas cítricas agrupadas na grama, prontas para o plantio" },
    ],
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

/** Fatos do projeto Restaura Amazônia (Panorama da Coordenação, 25/09/2026). */
export const NOTICIAS = [
  {
    data: "2026-10-07",
    dataTexto: "7 a 23 de outubro de 2026",
    categoria: "Restaura Amazônia",
    titulo: "Diagnóstico Inicial percorre as 16 aldeias",
    resumo:
      "Na primeira etapa de campo, as famílias mapeiam as áreas de restauração e levantam solo, água, sementes, cadeias produtivas e cartografia social. O Plano de Restauração será entregue até dezembro.",
  },
  {
    data: "2026-10-08",
    dataTexto: "8 de outubro de 2026",
    categoria: "Governança",
    titulo: "Assembleia geral das 16 aldeias",
    resumo:
      "A assembleia valida a mensagem do projeto e o consentimento das aldeias para a comunicação, seguindo o protocolo de consulta Xikrin.",
  },
  {
    data: "2026-09-02",
    dataTexto: "2 de setembro de 2026",
    categoria: "Restaura Amazônia",
    titulo: "Associação assina contrato com a CI-Brasil",
    resumo:
      "Selecionada entre oito organizações no Edital 3 do Restaura Amazônia, a Berê inicia um projeto de 48 meses com recursos do Fundo Amazônia/BNDES.",
  },
];

export const PARCEIROS = ["CI-Brasil", "Fundo Amazônia/BNDES", "Ministério da Cultura", "Ministério da Justiça", "FUNAI", "Fundo Casa Socioambiental"];

/** Parceiros ao longo da trajetória (Panorama 2026). */
export const PARCEIROS_HISTORICOS = [
  "Ministério da Cultura", "Ministério da Justiça", "FUNAI", "DSEI Altamira", "Ideflor-Bio", "Transpetro", "Itaú",
  "Equatorial Energia", "Fundação Unibanco", "UNIFESSPA", "Instituto Unyleya", "Fundo Casa Socioambiental", "Prefeitura de Anapu",
];

export const REDE_BERE = [
  { nome: "Associação Indígena Berê Xikrin", aldeias: "16 aldeias" },
  { nome: "Associação Katap-Ti", aldeias: "aldeia Prindjãm" },
  { nome: "Associação Bep Tok", aldeias: "aldeias Tepkoika Nho Ngo, Pytakô e Pokamrôre" },
];

export const PARTICIPACOES = ["Comitê Gestor Indígena", "Conselho de Educação Indígena (TEMEX)", "Conselho Distrital de Saúde Indígena (CONDISI)", "APIB", "Subcomitê da TI Trincheira Bacajá"];

export const REGISTRO = "Registrada no Cartório do Único Ofício da Comarca de Anapu (PA), Registro nº 14, Livro A de Pessoas Jurídicas, em 17/01/2019.";

export const CREDITO_FOTO = "Foto: Ousadia Marketing para a Associação Berê Xikrin";

/**
 * URL do Web App do Google Apps Script que grava as inscrições da newsletter
 * numa planilha da Associação (código e passo a passo em
 * docs/apps-script/newsletter-bere.gs). Termina em `/exec`.
 * Vazia = o formulário avisa que a newsletter ainda não está ligada, sem fingir sucesso.
 */
export const NEWSLETTER_ENDPOINT =
  "https://script.google.com/macros/s/AKfycby--sYcjgw545gw3OXJy9QLDrZz7VC9wymnpMnzwVV1_ihNeFC9h0vCQHYG9iNVF4Bw/exec";
