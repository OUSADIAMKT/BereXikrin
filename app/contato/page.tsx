import type { Metadata } from "next";
import { PaginaHero } from "@/components/PaginaHero";
import { REDES, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale com a Associação Indígena Berê Xikrin: e-mail, endereço da sede na Aldeia Krãnh e redes sociais.",
};

export default function Contato() {
  return (
    <>
      <PaginaHero
        rotulo="Contato"
        titulo={<>Fale com a <span className="destaque">Berê</span></>}
        lead="Conheça nossa atuação e nossa luta pelos Xikrin do Bacajá."
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
              <dt>Sede</dt>
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
