/**
 * Temas da página Cultura.
 *
 * Textos com `revisado: true` vêm do site antigo ou do Panorama oficial da
 * Coordenação (25/09/2026). Os com `revisado: false` são RASCUNHOS escritos a partir de fontes
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
      "No centro da aldeia fica a Ngàb, a casa do guerreiro: o espaço político onde cada aldeia toma suas decisões. É lá que acontecem reuniões, festas e rituais, e onde os mais novos aprendem com os Kubengêt sobre costumes, histórias, músicas, danças e pinturas.",
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
    nome: "Menire e o grafismo",
    texto:
      "As menire, as mulheres Xikrin, aprendem o grafismo desde meprire, a infância: treinam em bonecas de barro e, na adolescência, pintam umas às outras. O grafismo é milenar; a pintura em tecido é mais recente. Cerca de 69 artesãs produzem biojoias, telas pintadas e peças com sementes e fibras do território. A Escola Livre Menires Xikrin é certificada pelo Ministério da Cultura.",
    foto: { src: "/img/menire/menire-6.webp", alt: "Três artesãs Xikrin mostram bolsas com grafismos" },
    link: { href: "/produtos/", rotulo: "Artesanato das menire" },
    revisado: true,
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
      "Os Kubengêt são os anciãos, “aqueles que sabem de verdade”. O conselho de anciãos e caciques é a instância máxima de decisão coletiva. Num povo jovem, em que os anciãos são menos de 3% das pessoas nas aldeias da Associação, a Berê os reconhece como Patrimônio Vivo.",
    foto: { src: "/img/cultura/kubenget.webp", alt: "Ancião Xikrin com cocar de penas" },
    revisado: true,
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
