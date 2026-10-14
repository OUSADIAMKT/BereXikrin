import { Galeria } from "@/components/Galeria";
import { PaginaHero } from "@/components/PaginaHero";
import { metaPagina } from "@/lib/meta";
import { CREDITO_ACERVO, type Foto } from "@/lib/site";

export const metadata = metaPagina({
  titulo: "Produtos e artesanato",
  descricao:
    "Castanha-do-pará, cacau, babaçu e o artesanato das menire: produtos da sociobiodiversidade Xikrin da TI Trincheira Bacajá. Loja em breve.",
  caminho: "/produtos/",
  foto: "/img/menire/menire-6.webp",
});

const RECURSOS =
  "cipó timbó, inajá, copaíba, jenipapo, tuturubá, pau-preto, urucum, marfim, bambu, castanha, açaí, cacau do mato, ingá, banana, palmito, cipó titica, coco de babaçu, jatobá, cajá, mel, cipó kupá, pequi, cumaru, sapucaia, embaúba, tatajuba, frutão, bacaba, andiroba".split(", ");

const FOTOS_FLORESTA: Foto[] = [
  { src: "/img/produtos/cacau-fruto.webp", alt: "Frutos de cacau no pé, na mata" },
  { src: "/img/produtos/cacau-muda.webp", alt: "Agricultor Xikrin cuida de um pé de cacau" },
  { src: "/img/produtos/sementes.webp", alt: "Garrafas com sementes coletadas na floresta" },
  { src: "/img/produtos/artefatos.webp", alt: "Artefatos de palha trançada e madeira" },
];

const FOTOS_MENIRE: Foto[] = [
  { src: "/img/menire/menire-6.webp", alt: "Três artesãs Xikrin mostram bolsas com grafismos" },
  { src: "/img/menire/menire-4.webp", alt: "Artesã pinta um grafismo à mão sobre o tecido" },
  { src: "/img/menire/menire-2.webp", alt: "Tecido com grafismo de listras pintado em preto" },
  { src: "/img/menire/menire-5.webp", alt: "Bolsa de tecido com grafismo pintado" },
  { src: "/img/menire/menire-7.webp", alt: "Artesãs trabalham em máquinas de costura numa oficina coberta" },
  { src: "/img/menire/menire-8.webp", alt: "Artesã costura uma peça na máquina" },
  { src: "/img/menire/menire-1.webp", alt: "Mulheres reunidas em oficina de artesanato" },
  { src: "/img/menire/menire-9.webp", alt: "Artesã dá acabamento a uma peça de tecido" },
];

export default function Produtos() {
  return (
    <>
      <PaginaHero
        rotulo="Produtos"
        titulo={<>Da floresta, <span className="destaque">com cuidado</span></>}
        lead="O que a TI Trincheira-Bacajá produz, colhido e feito pelas próprias comunidades."
        foto="/img/menire/menire-6.webp"
        trilha={[{ rotulo: "Produtos", href: "/produtos/" }]}
      />
      <section className="secao">
        <div className="container" style={{ display: "grid", gap: "2.5rem" }}>
          <div className="prosa">
            <span className="eyebrow">Sociobiodiversidade</span>
            <h2 className="titulo-md">O que a floresta oferece</h2>
            <p>
              Artesãos e conhecedores Xikrin coletam os recursos da floresta para a alimentação, a medicina tradicional,
              a música, a pintura do corpo e a produção de artefatos. A Associação coordena a comercialização coletiva da
              castanha-do-pará, com o paiol da aldeia Krãnh, e fortalece as cadeias do cacau e do babaçu, para que a renda
              chegue às famílias sem atravessador.
            </p>
          </div>
          <ul className="lista-grafismo" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 180px), 1fr))" }}>
            {RECURSOS.map((r) => (
              <li key={r}>{r.charAt(0).toUpperCase() + r.slice(1)}</li>
            ))}
          </ul>
          <Galeria fotos={FOTOS_FLORESTA} credito={CREDITO_ACERVO} />
        </div>
      </section>

      <section className="secao" style={{ paddingTop: 0 }} aria-labelledby="t-menire">
        <div className="container" style={{ display: "grid", gap: "2rem" }}>
          <div className="prosa prosa--espaco">
            <span className="eyebrow">Artesanato das menire</span>
            <h2 id="t-menire" className="titulo-md">Feito pelas mulheres Xikrin</h2>
            <p>
              As menire, as mulheres Xikrin, aprendem o grafismo desde meprire, a infância: treinam em bonecas de barro e,
              na adolescência, pintam umas às outras. O grafismo é milenar; a pintura em tecido é mais recente.
            </p>
            <p>
              Cerca de 69 artesãs produzem biojoias, telas pintadas e peças utilitárias com sementes e fibras do território,
              como tento, jarina, tucumã e paxiúba, e miçangas. A Escola Livre Menires Xikrin é certificada pelo Ministério
              da Cultura, e a Associação tem uma Coordenação das Menires, presidida por Irei Xikrin.
            </p>
          </div>
          <Galeria fotos={FOTOS_MENIRE} credito={CREDITO_ACERVO} />
        </div>
      </section>

      <section className="escuro secao" aria-labelledby="t-loja">
        <div className="container prosa">
          <span className="eyebrow">Loja</span>
          <h2 id="t-loja" className="titulo-md">Em breve</h2>
          <p className="lead">
            Castanha, babaçu, cacau e o artesanato das menire vão poder ser comprados aqui, com a renda indo direto para
            as aldeias.
          </p>
        </div>
      </section>
    </>
  );
}
