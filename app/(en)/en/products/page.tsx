import { Galeria } from "@/components/Galeria";
import { PaginaHero } from "@/components/PaginaHero";
import { metaPagina } from "@/lib/meta";
import type { Foto } from "@/lib/site";
import { CREDITO_ACERVO_EN } from "@/lib/site-en";

export const metadata = metaPagina({
  titulo: "Products and handicrafts",
  descricao:
    "Brazil nuts, cacao, babassu and menire handicrafts: socio-biodiversity products of the Xikrin people of the Trincheira Bacajá Indigenous Territory. Shop coming soon.",
  caminho: "/en/products/",
  foto: "/img/menire/menire-6.webp",
});

/** Local names kept; English given where a common name exists. */
const RECURSOS = [
  "Timbó vine", "Inajá palm", "Copaíba", "Genipap (jenipapo)", "Tuturubá", "Pau-preto", "Annatto (urucum)", "Marfim",
  "Bamboo", "Brazil nuts", "Açaí", "Wild cacao", "Ingá", "Banana", "Palm heart", "Titica vine", "Babassu",
  "Jatobá", "Cajá", "Honey", "Kupá vine", "Pequi", "Cumaru", "Sapucaia", "Embaúba", "Tatajuba", "Frutão", "Bacaba", "Andiroba",
];

const FOTOS_FLORESTA: Foto[] = [
  { src: "/img/produtos/cacau-fruto.webp", alt: "Cacao pods on the tree in the forest" },
  { src: "/img/produtos/cacau-muda.webp", alt: "A Xikrin farmer tends a cacao tree" },
  { src: "/img/produtos/sementes.webp", alt: "Bottles of seeds collected in the forest" },
  { src: "/img/produtos/artefatos.webp", alt: "Artifacts of woven straw and wood" },
];

const FOTOS_MENIRE: Foto[] = [
  { src: "/img/menire/menire-6.webp", alt: "Three Xikrin artisans show bags with graphic patterns" },
  { src: "/img/menire/menire-4.webp", alt: "An artisan hand-paints a graphic pattern on fabric" },
  { src: "/img/menire/menire-2.webp", alt: "Fabric with a striped pattern painted in black" },
  { src: "/img/menire/menire-5.webp", alt: "Fabric bag with a painted graphic pattern" },
  { src: "/img/menire/menire-7.webp", alt: "Artisans working at sewing machines in a covered workshop" },
  { src: "/img/menire/menire-8.webp", alt: "An artisan sews a piece on the machine" },
  { src: "/img/menire/menire-1.webp", alt: "Women gathered in a handicraft workshop" },
  { src: "/img/menire/menire-9.webp", alt: "An artisan finishes a piece of fabric" },
];

export default function ProductsEn() {
  return (
    <>
      <PaginaHero
        lang="en"
        rotulo="Products"
        titulo={<>From the forest, <span className="destaque">with care</span></>}
        lead="What the Trincheira Bacajá Indigenous Territory produces, gathered and made by the communities themselves."
        foto="/img/menire/menire-6.webp"
        trilha={[{ rotulo: "Products", href: "/en/products/" }]}
      />
      <section className="secao">
        <div className="container" style={{ display: "grid", gap: "2.5rem" }}>
          <div className="prosa">
            <span className="eyebrow">Socio-biodiversity</span>
            <h2 className="titulo-md">What the forest offers</h2>
            <p>
              Xikrin artisans and knowledge holders gather forest resources for food, traditional medicine, music, body
              painting and the making of artifacts. The Association coordinates the collective sale of Brazil nuts, with the
              storehouse in Krãnh village, and strengthens the cacao and babassu value chains, so that income reaches the
              families without middlemen.
            </p>
          </div>
          <ul className="lista-grafismo" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 180px), 1fr))" }}>
            {RECURSOS.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
          <Galeria lang="en" fotos={FOTOS_FLORESTA} credito={CREDITO_ACERVO_EN} />
        </div>
      </section>

      <section className="secao" style={{ paddingTop: 0 }} aria-labelledby="t-menire">
        <div className="container" style={{ display: "grid", gap: "2rem" }}>
          <div className="prosa prosa--espaco">
            <span className="eyebrow">Menire handicrafts</span>
            <h2 id="t-menire" className="titulo-md">Made by Xikrin women</h2>
            <p>
              The <span lang="txu">menire</span>, Xikrin women, learn graphic patterns from <span lang="txu">meprire</span>,
              early childhood: they practice on clay dolls and, as teenagers, paint one another. The patterns are ancient;
              painting on fabric is more recent.
            </p>
            <p>
              Around 69 artisans make bio-jewelry, painted canvases and everyday pieces with seeds and fibers from the
              territory, such as tento, jarina, tucumã and paxiúba, as well as glass beads. The Menire Xikrin Free School is
              certified by Brazil’s Ministry of Culture, and the Association has a Menire Coordination, chaired by Irei
              Xikrin.
            </p>
          </div>
          <Galeria lang="en" fotos={FOTOS_MENIRE} credito={CREDITO_ACERVO_EN} />
        </div>
      </section>

      <section className="escuro secao" aria-labelledby="t-loja">
        <div className="container prosa">
          <span className="eyebrow">Shop</span>
          <h2 id="t-loja" className="titulo-md">Coming soon</h2>
          <p className="lead">
            Brazil nuts, babassu, cacao and menire handicrafts will be available here, with the income going directly to the
            villages. Buyers interested in wholesale can already write to the Association.
          </p>
        </div>
      </section>
    </>
  );
}
