/**
 * Temas da página Cultura.
 *
 * Os textos com `revisado: false` são RASCUNHOS escritos a partir de fontes
 * públicas (ver `fontes`), a pedido do cliente em 13/10/2026, e precisam da
 * revisão da Associação e dos Kubengêt antes de valerem como texto oficial.
 * Enquanto houver rascunho, a página mostra o aviso de revisão.
 */
export type TemaCultura = {
  nome: string;
  texto: string;
  foto?: { src: string; alt: string };
  link?: { href: string; rotulo: string };
  revisado: boolean;
};

export const TEMAS_CULTURA: TemaCultura[] = [
  {
    nome: "Ngàb, a Casa do Guerreiro",
    texto:
      "No centro da aldeia circular fica a Ngàb. É lá que nos reunimos para decidir sobre o nosso futuro, fazemos festas e rituais e aprendemos com os Kubengêt sobre costumes, histórias, músicas, danças e pinturas.",
    foto: { src: "/img/capas/ngab.webp", alt: "A Ngàb, grande casa aberta coberta de palha no centro da aldeia" },
    link: { href: "/projetos/casa-do-guerreiro/", rotulo: "Projeto Casa do Guerreiro" },
    revisado: true,
  },
  {
    nome: "Rituais e calendário",
    texto:
      "O ano Xikrin tem seus tempos: períodos de caça e pesca coletivas, de produção de artefatos, de ritos e rituais. Os rituais reúnem as aldeias e garantem que os saberes passem de uma geração para a outra.",
    foto: { src: "/img/projetos/rituais-1.webp", alt: "Mulheres e crianças reunidas durante a preparação de um ritual" },
    link: { href: "/projetos/rituais-tradicionais/", rotulo: "Projeto Rituais Tradicionais" },
    revisado: true,
  },
  {
    nome: "Pinturas corporais",
    texto:
      "Pintar o corpo é trabalho das mulheres. Com a tinta preta do jenipapo, aplicada com a mão ou com uma lasca fina de palmeira, elas traçam os grafismos; o vermelho do urucum cobre o rosto e partes do corpo. A pintura mostra quem somos e acompanha os rituais, as reuniões e as festas.",
    foto: { src: "/img/projetos/rituais-5.webp", alt: "Mulher Xikrin pinta o corpo de uma jovem com jenipapo" },
    revisado: false,
  },
  {
    nome: "Artesanato e adornos",
    texto:
      "Os homens fazem a maior parte dos adornos, cestos, arcos, flechas, bordunas e instrumentos musicais. As menire fiam e tecem o algodão e hoje também pintam nossos grafismos em tecidos e costuram bolsas nas oficinas das aldeias. Penas, contas e algodão estão nos cocares, colares e braçadeiras.",
    foto: { src: "/img/menire/menire-6.webp", alt: "Três artesãs Xikrin mostram bolsas com grafismos" },
    link: { href: "/produtos/", rotulo: "Artesanato das menire" },
    revisado: false,
  },
  {
    nome: "Língua Mẽbêngôkre",
    texto:
      "Falamos Mẽbêngôkre, língua da família Jê. Na aldeia, conversamos entre nós na nossa língua. O português aparece sobretudo no contato com os kuben, e os jovens costumam falá-lo mais que os mais velhos.",
    revisado: false,
  },
  {
    nome: "Caça, pesca e coleta",
    texto:
      "Caçamos anta, queixada, veado, caititu, paca e cutia. No tempo das chuvas pescamos com linha e anzol; no tempo seco, a pesca coletiva com timbó reúne a aldeia. Da floresta vêm a castanha, o babaçu, o açaí, a bacaba, o cacau do mato e o mel. Antes das festas, os homens passam dias na mata buscando carne.",
    foto: { src: "/img/cultura/canoa.webp", alt: "Dois jovens Xikrin numa canoa no rio" },
    revisado: false,
  },
  {
    nome: "Kubengêt e as histórias",
    texto:
      "Os Kubengêt, os mais velhos, contam as histórias do nosso povo em narrativas, cantos e falas na Ngàb. Ao longo da vida, cada pessoa recebe muitos nomes, em cerimônias que marcam sua passagem pelas idades. Aprender com os anciões é o que mantém vivo o Kukradjà.",
    foto: { src: "/img/cultura/kubenget.webp", alt: "Ancião Xikrin com cocar de penas" },
    revisado: false,
  },
  {
    nome: "Comida e roça",
    texto:
      "Das roças vêm mandioca, batata-doce, cará, milho, abóbora, mamão e banana. As mulheres preparam a farinha e o beiju. Nas festas, o alimento é assado no ki, o forno de pedras aquecidas, com a carne envolvida em folhas e coberta para cozinhar devagar.",
    foto: { src: "/img/produtos/cacau-fruto.webp", alt: "Frutos de cacau no pé, na mata" },
    revisado: false,
  },
];

/** Fontes usadas nos rascunhos. */
export const FONTES_CULTURA = [
  {
    titulo: "Povos Indígenas no Brasil (ISA): Kayapó Xikrin",
    url: "https://pib.socioambiental.org/en/Povo:Xikrin_Mebeng%C3%B4kre",
  },
  {
    titulo: "Lux Vidal: A pintura corporal xikrin (ISA)",
    url: "https://pib.socioambiental.org/files/file/bac/xirkin/A_pintura_corporal_xikrin.pdf",
  },
];
