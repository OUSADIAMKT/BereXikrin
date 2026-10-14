import Link from "next/link";
import { EmConstrucao } from "@/components/EmConstrucao";
import { PaginaHero } from "@/components/PaginaHero";
import { metaPagina } from "@/lib/meta";
import { SITE } from "@/lib/site";

export const metadata = metaPagina({
  titulo: "Support Berê",
  descricao: "How to support the Berê Xikrin Indigenous Association in protecting the territory, its rituals and income from the forest.",
  caminho: "/en/support/",
  foto: "/img/menire/menire-4.webp",
});

export default function SupportEn() {
  return (
    <>
      <PaginaHero
        lang="en"
        rotulo="Support"
        titulo={<>Strengthen those who <span className="destaque">protect the forest</span></>}
        lead="Support strengthens territorial protection, rituals and income from the forest, with decisions in the hands of the villages."
        foto="/img/menire/menire-4.webp"
        trilha={[{ rotulo: "Support", href: "/en/support/" }]}
      />
      <section className="secao">
        <div className="container" style={{ display: "grid", gap: "2.5rem" }}>
          <div className="prosa">
            <span className="eyebrow">Where support goes</span>
            <h2 className="titulo-md">What your support strengthens</h2>
            <ul className="lista-grafismo">
              <li>Surveillance and protection of the Trincheira Bacajá Indigenous Territory</li>
              <li>Rituals and the passing of knowledge between generations</li>
              <li>Income from forest products and menire handicrafts</li>
              <li>Communication and mobility between the 16 villages</li>
            </ul>
          </div>
          <EmConstrucao lang="en">
            Bank details and international donation options will be published here. To support now or propose a
            partnership, write to <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
          </EmConstrucao>
          <p>
            <Link className="btn btn--contorno" href="/en/transparency/">
              See the Association’s transparency page
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
