import Link from "next/link";
import { CardProjeto } from "@/components/CardProjeto";
import { Divisor } from "@/components/Divisor";
import { CREDITO_FOTO, DESTAQUES_HOME, NOTICIAS, NUMEROS, PARCEIROS, PROJETOS, REDES } from "@/lib/site";

export default function Home() {
  const destaques = DESTAQUES_HOME.map((slug) => PROJETOS.find((p) => p.slug === slug)!);

  return (
    <>
      {/* 1. Abertura */}
      <section className="hero sobre-foto" aria-labelledby="hero-titulo">
        <img
          className="hero__foto"
          src="/img/aldeia-circular-por-do-sol.webp"
          alt="Vista aérea de uma aldeia Xikrin circular ao entardecer, cercada pela floresta, com o Rio Bacajá ao fundo"
          width={1920}
          height={1440}
          fetchPriority="high"
        />
        <div className="container">
          <span className="eyebrow">Povo Mẽbêngôkre-Xikrin · TI Trincheira-Bacajá</span>
          <h1 id="hero-titulo" className="titulo-lg">
            A floresta é a <span className="destaque">nossa casa</span>
          </h1>
          <p className="lead">
            Somos a Associação Indígena Berê Xikrin. Desde 2018 defendemos nosso território, nossa cultura e o futuro
            das 16 aldeias do Rio Bacajá.
          </p>
          <div className="acoes">
            <Link className="btn btn--destaque" href="/sobre/">
              Conheça a Berê
            </Link>
            <Link className="btn btn--contorno" href="/apoie/">
              Apoie nossa luta
            </Link>
          </div>
          <p className="credito">Aldeia na TI Trincheira-Bacajá, set/2026 · {CREDITO_FOTO}</p>
        </div>
      </section>
      <Divisor />

      {/* 2 e 4. Apresentação e quem somos */}
      <section className="secao" aria-labelledby="t-quem">
        <div className="container duas-colunas">
          <div>
            <span className="eyebrow">Quem somos</span>
            <h2 id="t-quem" className="titulo-md" style={{ margin: "1rem 0 1.25rem" }}>
              Gente da água grande
            </h2>
            <div className="prosa">
              <p>
                Nos autodenominamos <strong>Mẽbêngôkre</strong>, “gente do buraco d’água ou gente da água grande”.
                Vivemos em aldeias circulares, e no centro de cada uma fica a <strong>Ngàb</strong>, a Casa do
                Guerreiro, onde nos reunimos para decidir nosso futuro.
              </p>
              <p>
                A Associação Berê nasceu em 2018 para fortalecer as comunidades, buscar políticas públicas e levar
                adiante projetos de segurança alimentar, cultura, saúde, educação, renda e proteção do território.
              </p>
            </div>
            <blockquote className="citacao" style={{ marginTop: "2rem" }}>
              “Proteger e defender a floresta é cuidar da nossa casa e preservar nossa vida.”
              <cite>Associação Indígena Berê Xikrin</cite>
            </blockquote>
            <p style={{ marginTop: "2rem" }}>
              <Link className="btn btn--marca" href="/sobre/">
                Conheça nossa história
              </Link>
            </p>
          </div>
          <img
            className="foto-arredondada"
            style={{ aspectRatio: "4 / 5" }}
            src="/img/aldeia-circular-vista-de-cima.webp"
            alt="Aldeia circular vista de cima: casas ao redor de um grande pátio de terra"
            width={1600}
            height={2133}
            loading="lazy"
          />
        </div>
      </section>

      {/* 3. Números */}
      <section className="escuro secao" aria-label="A Berê em números">
        <div className="container numeros">
          {NUMEROS.map((n) => (
            <div className="numero" key={n.rotulo}>
              <strong>
                {n.valor}
              </strong>
              <span>{n.rotulo}</span>
            </div>
          ))}
        </div>
      </section>
      <Divisor />

      {/* 5. Projetos em destaque */}
      <section className="secao" aria-labelledby="t-projetos">
        <div className="container">
          <div className="cabeca-secao cabeca-secao--linha">
            <div>
              <span className="eyebrow">Projetos</span>
              <h2 id="t-projetos" className="titulo-md" style={{ marginTop: "1rem" }}>
                O que fazemos
              </h2>
            </div>
            <Link className="btn btn--contorno" href="/projetos/">
              Todos os projetos
            </Link>
          </div>
          <div className="grade">
            {destaques.map((p) => (
              <CardProjeto key={p.slug} projeto={p} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Cultura */}
      <section className="escuro secao faixa-cultura" aria-labelledby="t-cultura">
        <div className="fundo graf graf--listras" aria-hidden="true" />
        <div className="container duas-colunas">
          <div>
            <span className="eyebrow">Cultura</span>
            <h2 id="t-cultura" className="titulo-md" style={{ margin: "1rem 0 1.25rem" }}>
              Kukradjà, nosso modo de viver
            </h2>
            <p className="lead" style={{ marginBottom: "1.75rem" }}>
              Viver com a floresta, junto à floresta e para a floresta.
            </p>
            <ul className="lista-grafismo">
              <li>Pinturas corporais com urucum e jenipapo</li>
              <li>Artesanato das menire</li>
              <li>Língua Mẽbêngôkre</li>
              <li>Rituais e calendário tradicional</li>
            </ul>
            <p style={{ marginTop: "2rem" }}>
              <Link className="btn btn--destaque" href="/cultura/">
                Explore a cultura
              </Link>
            </p>
          </div>
          <img
            className="foto-arredondada"
            style={{ aspectRatio: "4 / 3" }}
            src="/img/ngab-comunidade.webp"
            alt="Comunidade Xikrin reunida em frente à Ngàb"
            width={1600}
            height={1200}
            loading="lazy"
          />
        </div>
      </section>
      <Divisor />

      {/* 7. Notícias */}
      <section className="secao" aria-labelledby="t-noticias">
        <div className="container">
          <div className="cabeca-secao cabeca-secao--linha">
            <div>
              <span className="eyebrow">Notícias</span>
              <h2 id="t-noticias" className="titulo-md" style={{ marginTop: "1rem" }}>
                O que está acontecendo
              </h2>
            </div>
            <Link className="btn btn--contorno" href="/conteudos/">
              Ver conteúdos
            </Link>
          </div>
          <div className="grade">
            {NOTICIAS.map((n) => (
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

      {/* 8. Parceiros */}
      <section className="secao" style={{ paddingTop: 0 }} aria-labelledby="t-parceiros">
        <div className="container">
          <span className="eyebrow" id="t-parceiros">
            Quem caminha com a gente
          </span>
          <ul className="parceiros" style={{ marginTop: "1.25rem" }}>
            {PARCEIROS.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* 9. Apoie */}
      <section className="escuro secao" aria-labelledby="t-apoie">
        <div className="container chamada">
          <div>
            <span className="eyebrow">Apoie</span>
            <h2 id="t-apoie" className="titulo-md" style={{ margin: "1rem 0 1rem" }}>
              Fortaleça quem protege a floresta
            </h2>
            <p className="lead">
              Sua doação apoia a proteção do território, os rituais e a renda das famílias Xikrin.
            </p>
          </div>
          <div style={{ display: "grid", gap: "1.25rem", justifyItems: "start" }}>
            <Link className="btn btn--destaque" href="/apoie/">
              Quero apoiar
            </Link>
            <ul className="redes" aria-label="Siga a Berê">
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
