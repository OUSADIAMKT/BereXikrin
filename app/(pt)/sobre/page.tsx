import Link from "next/link";
import { Diretoria } from "@/components/Diretoria";
import { Foto } from "@/components/Foto";
import { PaginaHero } from "@/components/PaginaHero";
import { metaPagina } from "@/lib/meta";
import { CITACAO_BEPTOK, FRENTES, MISSAO, PARTICIPACOES, REDE_BERE, SITE, TRAJETORIA, VISAO } from "@/lib/site";

export const metadata = metaPagina({
  titulo: "Sobre a Associação",
  descricao:
    "O povo Mẽbêngôkre-Xikrin do Bacajá e a Associação Indígena Berê Xikrin: missão, quem decide, a Rede Berê, a trajetória desde 2018 e a diretoria.",
  caminho: "/sobre/",
  foto: "/img/capas/reuniao-ngab.webp",
});

export default function Sobre() {
  return (
    <>
      <PaginaHero
        rotulo="Sobre a Berê"
        titulo={<>Povo do <span className="destaque">buraco d’água</span></>}
        lead="A Associação Indígena Berê Xikrin reúne 16 aldeias Mẽbêngôkre-Xikrin da Terra Indígena Trincheira Bacajá, no Pará, desde 2018."
        foto="/img/capas/reuniao-ngab.webp"
        trilha={[{ rotulo: "Sobre", href: "/sobre/" }]}
      />

      <section className="secao" aria-labelledby="t-povo">
        <div className="container duas-colunas">
          <div className="prosa">
            <span className="eyebrow">O povo</span>
            <h2 id="t-povo" className="titulo-md">Mẽbêngôkre-Xikrin do Bacajá</h2>
            <p>
              Os Xikrin se autodenominam <strong>Mẽbêngôkre</strong>, “povo do buraco d’água”. A relação com a água está
              no centro da cultura: a maioria das aldeias fica às margens do Rio Bacajá, e as demais junto a grotas e
              igarapés. A língua é o Mẽbêngôkre, a mesma dos Kayapó, e boa parte da comunidade se comunica principalmente
              nela.
            </p>
            <p>
              O <strong>kukradjà</strong> é o modo de ser e de viver Xikrin: “viver com a floresta, junto à floresta e para
              a floresta”, como diz o Plano de Gestão Territorial e Ambiental do povo. É algo vivido hoje, não uma herança
              do passado a ser guardada.
            </p>
            <blockquote className="citacao" style={{ marginTop: "1.5rem" }}>
              “{CITACAO_BEPTOK.texto}”
              <cite>
                {CITACAO_BEPTOK.autor} · {CITACAO_BEPTOK.fonte}
              </cite>
            </blockquote>
          </div>
          <Foto
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

      <section className="escuro secao" aria-labelledby="t-missao">
        <div className="container" style={{ display: "grid", gap: "2.5rem" }}>
          <div className="duas-colunas" style={{ alignItems: "start" }}>
            <div className="prosa">
              <span className="eyebrow">Missão</span>
              <h2 id="t-missao" className="visualmente-oculto">Missão e visão</h2>
              <p className="lead">{MISSAO}</p>
            </div>
            <div className="prosa">
              <span className="eyebrow">Visão</span>
              <p className="lead">{VISAO}</p>
            </div>
          </div>
          <ul className="frentes">
            {FRENTES.map((f) => (
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
            <span className="eyebrow">Governança</span>
            <h2 id="t-decide" className="titulo-md">Quem decide</h2>
            <p>As decisões seguem a organização tradicional Xikrin, com consentimento livre, prévio e informado das aldeias.</p>
          </div>
          <ul className="frentes frentes--claro">
            <li>
              <strong>Kubengêt</strong>
              <span>Os anciãos, “aqueles que sabem de verdade”. O conselho de anciãos e caciques é a instância máxima de decisão coletiva.</span>
            </li>
            <li>
              <strong>Ngàb</strong>
              <span>A casa do guerreiro, espaço político das decisões locais em cada aldeia.</span>
            </li>
            <li>
              <strong>Assembleias gerais</strong>
              <span>Onde as 16 aldeias deliberam juntas.</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="secao" style={{ paddingTop: 0 }} aria-labelledby="t-rede">
        <div className="container duas-colunas" style={{ alignItems: "start" }}>
          <div className="prosa">
            <span className="eyebrow">Articulação</span>
            <h2 id="t-rede" className="titulo-md">Rede Berê</h2>
            <p>A Berê coordena a Rede Berê de Sociobiodiversidade Xikrin, que articula três associações da TI Trincheira Bacajá:</p>
            <ul className="lista-grafismo">
              {REDE_BERE.map((r) => (
                <li key={r.nome}>
                  <span>
                    <strong>{r.nome}</strong> · {r.aldeias}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="prosa">
            <span className="eyebrow">Participa de</span>
            <ul className="lista-grafismo" style={{ marginTop: "1rem" }}>
              {PARTICIPACOES.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="escuro secao" aria-labelledby="t-trajetoria">
        <div className="container">
          <span className="eyebrow">Trajetória</span>
          <h2 id="t-trajetoria" className="titulo-md" style={{ margin: "1rem 0 2rem" }}>
            Desde {SITE.fundacao}, e antes dela
          </h2>
          <ol className="linha-tempo">
            {TRAJETORIA.map((t) => (
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
          <span className="eyebrow">Diretoria</span>
          <h2 id="t-diretoria" className="titulo-md" style={{ margin: "1rem 0 2rem" }}>
            Quem conduz a Berê
          </h2>
          <Diretoria />
        </div>
      </section>

      <section id="plano-de-vida" className="escuro secao" aria-labelledby="t-plano">
        <div className="container duas-colunas">
          <div className="prosa">
            <span className="eyebrow">Planejamento</span>
            <h2 id="t-plano" className="titulo-md">Plano de Vida e PGTA</h2>
            <p className="lead">
              Desde 2013, as aldeias constroem o Plano de Gestão Territorial e Ambiental “Aben Kaben Marimei”, “o saber
              por todos compartilhado”. Em 2021 veio o Plano de Vida Xikrin, feito em oficinas com cada aldeia, lideranças e
              comunidades.
            </p>
            <p className="lead">
              Os dois documentos orientam a gestão do território, as parcerias de longo prazo e os projetos da Associação,
              como o Restaura Amazônia.
            </p>
            <p>
              <Link className="btn btn--destaque" href="/projetos/restaura-amazonia/">
                Conheça o Restaura Amazônia
              </Link>
            </p>
          </div>
          <figure className="galeria">
            <Foto
              className="foto-arredondada"
              src="/img/sobre/plano-de-vida-capa.webp"
              alt="Capa do Plano de Vida da Terra Indígena Trincheira Bacajá, com grafismo em dourado"
              width={929}
              height={660}
              loading="lazy"
            />
            <figcaption>Capa do Plano de Vida Xikrin.</figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}
