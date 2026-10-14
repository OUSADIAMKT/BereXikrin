import Link from "next/link";
import { Diretoria } from "@/components/Diretoria";
import { Foto } from "@/components/Foto";
import { PaginaHero } from "@/components/PaginaHero";
import { metaPagina } from "@/lib/meta";
import { SITE } from "@/lib/site";
import { CITACAO_EN, FRENTES_EN, MISSAO_EN, PARTICIPACOES_EN, REDE_BERE_EN, TRAJETORIA_EN, VISAO_EN } from "@/lib/site-en";

export const metadata = metaPagina({
  titulo: "About the Association",
  descricao:
    "The Mẽbêngôkre-Xikrin people of the Bacajá and the Berê Xikrin Indigenous Association: mission, governance, the Berê Network, history since 2018 and board.",
  caminho: "/en/about/",
  foto: "/img/capas/reuniao-ngab.webp",
});

export default function AboutEn() {
  return (
    <>
      <PaginaHero
        lang="en"
        rotulo="About Berê"
        titulo={<>People of the <span className="destaque">water hole</span></>}
        lead="The Berê Xikrin Indigenous Association has brought together 16 Mẽbêngôkre-Xikrin villages of the Trincheira Bacajá Indigenous Territory, in Pará, Brazil, since 2018."
        foto="/img/capas/reuniao-ngab.webp"
        trilha={[{ rotulo: "About", href: "/en/about/" }]}
      />

      <section className="secao" aria-labelledby="t-povo">
        <div className="container duas-colunas">
          <div className="prosa">
            <span className="eyebrow">The people</span>
            <h2 id="t-povo" className="titulo-md">The Mẽbêngôkre-Xikrin of the Bacajá</h2>
            <p>
              The Xikrin call themselves <strong lang="txu">Mẽbêngôkre</strong>, “people of the water hole”. Water is at the
              heart of their culture: most villages lie along the Bacajá River, and the others by streams and creeks. Their
              language is Mẽbêngôkre, the same spoken by the Kayapó, and much of the community communicates mainly in it.
            </p>
            <p>
              <strong lang="txu">Kukradjà</strong> is the Xikrin way of being and living: “living with the forest, together
              with the forest and for the forest”, as the people’s Territorial and Environmental Management Plan puts it. It
              is something lived today, not a heritage of the past to be kept.
            </p>
            <blockquote className="citacao" style={{ marginTop: "1.5rem" }}>
              “{CITACAO_EN.texto}”
              <cite>
                {CITACAO_EN.autor} · {CITACAO_EN.fonte}
              </cite>
            </blockquote>
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

      <section className="escuro secao" aria-labelledby="t-missao">
        <div className="container" style={{ display: "grid", gap: "2.5rem" }}>
          <div className="duas-colunas" style={{ alignItems: "start" }}>
            <div className="prosa">
              <span className="eyebrow">Mission</span>
              <h2 id="t-missao" className="visualmente-oculto">Mission and vision</h2>
              <p className="lead">{MISSAO_EN}</p>
            </div>
            <div className="prosa">
              <span className="eyebrow">Vision</span>
              <p className="lead">{VISAO_EN}</p>
            </div>
          </div>
          <ul className="frentes">
            {FRENTES_EN.map((f) => (
              <li key={f.nome}>
                <strong>{f.nome}</strong>
                <span>{f.texto}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="secao" aria-labelledby="t-decide">
        <div className="container" style={{ display: "grid", gap: "2rem" }}>
          <div className="prosa">
            <span className="eyebrow">Governance</span>
            <h2 id="t-decide" className="titulo-md">Who decides</h2>
            <p>Decisions follow traditional Xikrin organization, with the free, prior and informed consent of the villages.</p>
          </div>
          <ul className="frentes frentes--claro">
            <li>
              <strong lang="txu">Kubengêt</strong>
              <span>The elders, “those who truly know”. The council of elders and chiefs is the highest collective decision-making body.</span>
            </li>
            <li>
              <strong lang="txu">Ngàb</strong>
              <span>The warriors’ house, the political space for local decisions in each village.</span>
            </li>
            <li>
              <strong>General assemblies</strong>
              <span>Where the 16 villages decide together.</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="secao" style={{ paddingTop: 0 }} aria-labelledby="t-rede">
        <div className="container duas-colunas" style={{ alignItems: "start" }}>
          <div className="prosa">
            <span className="eyebrow">Alliances</span>
            <h2 id="t-rede" className="titulo-md">The Berê Network</h2>
            <p>Berê coordinates the Berê Xikrin Socio-biodiversity Network, which brings together three associations in the Trincheira Bacajá Indigenous Territory:</p>
            <ul className="lista-grafismo">
              {REDE_BERE_EN.map((r) => (
                <li key={r.nome}>
                  <span>
                    <strong>{r.nome}</strong> · {r.aldeias}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="prosa">
            <span className="eyebrow">Member of</span>
            <ul className="lista-grafismo" style={{ marginTop: "1rem" }}>
              {PARTICIPACOES_EN.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="escuro secao" aria-labelledby="t-trajetoria">
        <div className="container">
          <span className="eyebrow">History</span>
          <h2 id="t-trajetoria" className="titulo-md" style={{ margin: "1rem 0 2rem" }}>
            Since {SITE.fundacao}, and before
          </h2>
          <ol className="linha-tempo">
            {TRAJETORIA_EN.map((t) => (
              <li key={t.ano}>
                <strong>{t.ano}</strong>
                <p>{t.texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="secao" aria-labelledby="t-diretoria">
        <div className="container">
          <span className="eyebrow">Board</span>
          <h2 id="t-diretoria" className="titulo-md" style={{ margin: "1rem 0 2rem" }}>
            Who leads Berê
          </h2>
          <Diretoria lang="en" />
        </div>
      </section>

      <section id="life-plan" className="escuro secao" aria-labelledby="t-plano">
        <div className="container duas-colunas">
          <div className="prosa">
            <span className="eyebrow">Planning</span>
            <h2 id="t-plano" className="titulo-md">Life Plan and PGTA</h2>
            <p className="lead">
              Since 2013, the villages have been building the Territorial and Environmental Management Plan{" "}
              <span lang="txu">“Aben Kaben Marimei”</span>, “knowledge shared by all”. In 2021 came the Xikrin Life Plan,
              made in workshops with each village, its leaders and communities.
            </p>
            <p className="lead">
              Both documents guide territorial management, long-term partnerships and the Association’s projects, such as
              Restaura Amazônia.
            </p>
            <p>
              <Link className="btn btn--destaque" href="/en/projects/restaura-amazonia/">
                About Restaura Amazônia
              </Link>
            </p>
          </div>
          <figure className="galeria">
            <Foto
              className="foto-arredondada"
              src="/img/sobre/plano-de-vida-capa.webp"
              alt="Cover of the Life Plan of the Trincheira Bacajá Indigenous Territory, with a golden graphic pattern"
              width={929}
              height={660}
              loading="lazy"
            />
            <figcaption>Cover of the Xikrin Life Plan.</figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}
