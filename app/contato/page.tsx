import { PaginaHero } from "@/components/PaginaHero";
import { REDES, SITE } from "@/lib/site";
import { metaPagina } from "@/lib/meta";

export const metadata = metaPagina({
  titulo: "Contato",
  descricao: "Fale com a Associação Indígena Berê Xikrin: e-mail, sede em Altamira (PA) e redes sociais.",
  caminho: "/contato/",
  foto: "/img/capas/rio-canoa.webp",
});

export default function Contato() {
  return (
    <>
      <PaginaHero
        rotulo="Contato"
        titulo={<>Fale com a <span className="destaque">Berê</span></>}
        lead="Para parcerias, imprensa, compras de produtos ou apoio, fale com a Associação."
        foto="/img/capas/rio-canoa.webp"
        trilha={[{ rotulo: "Contato", href: "/contato/" }]}
      />
      <section className="secao">
        <div className="container">
          <dl className="ficha">
            <div>
              <dt>E-mail</dt>
              <dd>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </dd>
            </div>
            <div>
              <dt>Onde estamos</dt>
              <dd>
                {SITE.endereco[0]}
                <br />
                {SITE.endereco[1]}
              </dd>
            </div>
            <div>
              <dt>Redes</dt>
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
