import { PaginaHero } from "@/components/PaginaHero";
import { metaPagina } from "@/lib/meta";
import { REDES, SITE } from "@/lib/site";
import { SITE_EN } from "@/lib/site-en";

export const metadata = metaPagina({
  titulo: "Contact",
  descricao: "Contact the Berê Xikrin Indigenous Association: email, headquarters in Altamira, Pará, Brazil, and social media.",
  caminho: "/en/contact/",
  foto: "/img/capas/rio-canoa.webp",
});

export default function ContactEn() {
  return (
    <>
      <PaginaHero
        lang="en"
        rotulo="Contact"
        titulo={<>Talk to <span className="destaque">Berê</span></>}
        lead="For partnerships, press, product purchases or support, get in touch with the Association."
        foto="/img/capas/rio-canoa.webp"
        trilha={[{ rotulo: "Contact", href: "/en/contact/" }]}
      />
      <section className="secao">
        <div className="container">
          <dl className="ficha">
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </dd>
            </div>
            <div>
              <dt>Where we are</dt>
              <dd>
                {SITE_EN.endereco[0]}
                <br />
                {SITE_EN.endereco[1]}
              </dd>
            </div>
            <div>
              <dt>Languages and time zone</dt>
              <dd>
                Portuguese and Mẽbêngôkre; we will do our best to reply in English.
                <br />
                Brasília time (UTC−3)
              </dd>
            </div>
            <div>
              <dt>Social media</dt>
              <dd>
                {REDES.map((r, i) => (
                  <span key={r.nome}>
                    {i > 0 && " · "}
                    <a href={r.url} target="_blank" rel="noopener">
                      {r.nome}
                    </a>
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
}
