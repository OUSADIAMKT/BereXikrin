import Link from "next/link";
import { CardProjeto } from "@/components/CardProjeto";
import { Foto } from "@/components/Foto";
import { metaPagina } from "@/lib/meta";
import { DESTAQUES_HOME, PROJETOS, REDES } from "@/lib/site";
import { CITACAO_EN, CREDITO_FOTO_EN, FONTE_NUMEROS_EN, NOTICIAS_EN, NUMEROS_EN, SITE_EN, projetosEn } from "@/lib/site-en";
import { SLUGS_PROJETOS } from "@/lib/rotas";

export const metadata = {
  ...metaPagina({ titulo: SITE_EN.nome, descricao: SITE_EN.descricao, caminho: "/en/" }),
  title: { absolute: "Berê Xikrin Indigenous Association | Mẽbêngôkre-Xikrin people, Trincheira Bacajá Indigenous Territory" },
};

const PARCEIROS_EN = ["CI-Brasil", "Amazon Fund/BNDES", "Brazilian Ministry of Culture", "Brazilian Ministry of Justice", "FUNAI", "Fundo Casa Socioambiental"];

export default function HomeEn() {
  const projetos = projetosEn(PROJETOS);
  const destaques = DESTAQUES_HOME.map((slug) => projetos.find((p) => p.slug === SLUGS_PROJETOS[slug])!);

  return (
    <>
      <section className="hero sobre-foto" aria-labelledby="hero-titulo">
        <Foto
          sizes="100vw"
          className="hero__foto"
          src="/img/aldeia-circular-por-do-sol.webp"
          alt="Aerial view of a circular Xikrin village at sunset, surrounded by forest, with the Bacajá River in the background"
          width={1920}
          height={1440}
          fetchPriority="high"
        />
        <div className="container">
          <span className="eyebrow">Mẽbêngôkre-Xikrin people · Trincheira Bacajá Indigenous Territory</span>
          <h1 id="hero-titulo" className="titulo-lg">
            The forest, cared for by <span className="destaque">those who have always lived in it</span>
          </h1>
          <p className="lead">
            An Indigenous organization bringing together 16 Mẽbêngôkre-Xikrin villages of the Trincheira Bacajá Indigenous
            Territory in Pará, Brazil, for rights, territorial management and ethnodevelopment.
          </p>
          <div className="acoes">
            <Link className="btn btn--destaque" href="/en/about/">
              About Berê
            </Link>
            <Link className="btn btn--contorno" href="/en/support/">
              Support Berê
            </Link>
          </div>
          <p className="credito">Village in the Trincheira Bacajá Indigenous Territory, Sept 2026 · {CREDITO_FOTO_EN}</p>
        </div>
      </section>

      <section className="secao" aria-labelledby="t-quem">
        <div className="container duas-colunas">
          <div>
            <span className="eyebrow">The people and the Association</span>
            <h2 id="t-quem" className="titulo-md" style={{ margin: "1rem 0 1.25rem" }}>
              People of the water hole
            </h2>
            <div className="prosa">
              <p>
                The Xikrin call themselves <strong lang="txu">Mẽbêngôkre</strong>, “people of the water hole”. Most villages
                lie along the Bacajá River, and at the center of each one stands the <strong lang="txu">Ngàb</strong>, the
                warriors’ house, the political space where the village makes its decisions.
              </p>
              <p>
                Founded on October 23, 2018, the Berê Association represents 16 of the 53 villages in the Indigenous
                Territory and coordinates the Berê Xikrin Socio-biodiversity Network, with projects in forest restoration,
                culture, income and territorial protection.
              </p>
            </div>
            <blockquote className="citacao" style={{ marginTop: "2rem" }}>
              “{CITACAO_EN.texto}”
              <cite>
                {CITACAO_EN.autor} · {CITACAO_EN.fonte}
              </cite>
            </blockquote>
            <p style={{ marginTop: "2rem" }}>
              <Link className="btn btn--marca" href="/en/about/">
                Our history
              </Link>
            </p>
          </div>
          <Foto
            className="foto-arredondada"
            style={{ aspectRatio: "4 / 5" }}
            src="/img/aldeia-circular-vista-de-cima.webp"
            alt="Circular village seen from above: houses around a large earthen plaza"
            width={1600}
            height={2133}
            loading="lazy"
          />
        </div>
      </section>

      <section className="escuro secao" aria-label="Berê in numbers">
        <div className="container numeros">
          {NUMEROS_EN.map((n) => (
            <div className="numero" key={n.rotulo}>
              <strong>{n.valor}</strong>
              <span>{n.rotulo}</span>
            </div>
          ))}
          <p className="fonte-dado" style={{ gridColumn: "1 / -1" }}>
            Sources: {FONTE_NUMEROS_EN}
          </p>
        </div>
      </section>

      <section className="secao" aria-labelledby="t-projetos">
        <div className="container">
          <div className="cabeca-secao cabeca-secao--linha">
            <div>
              <span className="eyebrow">Projects</span>
              <h2 id="t-projetos" className="titulo-md" style={{ marginTop: "1rem" }}>
                What we do
              </h2>
            </div>
            <Link className="btn btn--contorno" href="/en/projects/">
              All projects
            </Link>
          </div>
          <div className="grade">
            {destaques.map((p) => (
              <CardProjeto key={p.slug} projeto={p} lang="en" />
            ))}
          </div>
        </div>
      </section>

      <section className="escuro secao faixa-cultura" aria-labelledby="t-cultura">
        <div className="container duas-colunas">
          <div>
            <span className="eyebrow">Culture</span>
            <h2 id="t-cultura" className="titulo-md" style={{ margin: "1rem 0 1.25rem" }}>
              <span lang="txu">Kukradjà</span>, the Xikrin way of life
            </h2>
            <p className="lead" style={{ marginBottom: "1.75rem" }}>
              Living with the forest, together with the forest and for the forest.
            </p>
            <ul className="lista-grafismo">
              <li>The Ngàb, the warriors’ house</li>
              <li>Rituals and the traditional calendar</li>
              <li>The menire and their graphic patterns</li>
              <li>The Kubengêt, the elders</li>
            </ul>
            <p style={{ marginTop: "2rem" }}>
              <Link className="btn btn--destaque" href="/en/culture/">
                Explore the culture
              </Link>
            </p>
          </div>
          <Foto
            className="foto-arredondada"
            style={{ aspectRatio: "4 / 3" }}
            src="/img/ngab-comunidade.webp"
            alt="Xikrin community gathered in front of the Ngàb"
            width={1600}
            height={1200}
            loading="lazy"
          />
        </div>
      </section>

      <section className="secao" aria-labelledby="t-noticias">
        <div className="container">
          <div className="cabeca-secao cabeca-secao--linha">
            <div>
              <span className="eyebrow">News</span>
              <h2 id="t-noticias" className="titulo-md" style={{ marginTop: "1rem" }}>
                What’s happening
              </h2>
            </div>
            <Link className="btn btn--contorno" href="/en/news/">
              All news
            </Link>
          </div>
          <div className="grade">
            {NOTICIAS_EN.map((n) => (
              <article className="noticia" key={n.titulo}>
                <span>
                  <span className="tag tag--jenipapo">{n.categoria}</span>
                </span>
                <time dateTime={n.data}>{n.dataTexto}</time>
                <h3 className="titulo-sm">{n.titulo}</h3>
                <p>{n.resumo}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="secao" style={{ paddingTop: 0 }} aria-labelledby="t-parceiros">
        <div className="container">
          <span className="eyebrow" id="t-parceiros">
            Walking with us
          </span>
          <ul className="parceiros" style={{ marginTop: "1.25rem" }}>
            {PARCEIROS_EN.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="escuro secao" aria-labelledby="t-apoie">
        <div className="container chamada">
          <div>
            <span className="eyebrow">Support</span>
            <h2 id="t-apoie" className="titulo-md" style={{ margin: "1rem 0 1rem" }}>
              Strengthen those who protect the forest
            </h2>
            <p className="lead">
              Support strengthens territorial protection, rituals and income from the forest, with decisions in the hands of
              the villages.
            </p>
          </div>
          <div style={{ display: "grid", gap: "1.25rem", justifyItems: "start" }}>
            <Link className="btn btn--destaque" href="/en/support/">
              I want to support
            </Link>
            <ul className="redes" aria-label="Follow Berê">
              {REDES.map((r) => (
                <li key={r.nome}>
                  <a className="btn btn--contorno" href={r.url} target="_blank" rel="noopener">
                    {r.nome}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
