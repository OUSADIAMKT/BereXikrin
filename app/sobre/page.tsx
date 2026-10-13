import type { Metadata } from "next";
import Link from "next/link";
import { Divisor } from "@/components/Divisor";
import { PaginaHero } from "@/components/PaginaHero";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Quem são os Mẽbêngôkre-Xikrin da TI Trincheira-Bacajá, a história da Associação Berê, a diretoria e o Plano de Vida.",
};

const DIRETORIA = [
  ["Bep Kamati Xikrin", "Presidente"],
  ["Kadjore Xikrin", "Vice-presidente"],
  ["Bep Ketoj Xikrin", "1º Secretário"],
  ["Kangore Xikrin", "1º Tesoureiro"],
  ["Piydjo Xikrin", "2º Secretário"],
  ["Bep Djyre Xikrin", "2º Tesoureiro"],
  ["Koitunggri Xikrin", "Titular"],
  ["Irekoti Xikrin", "Titular"],
  ["Nhoko Xikrin", "Suplente"],
];

export default function Sobre() {
  return (
    <>
      <PaginaHero
        rotulo="Sobre a Berê"
        titulo={<>Gente da <span className="destaque">água grande</span></>}
        lead="Somos Mẽbêngôkre-Xikrin da Terra Indígena Trincheira-Bacajá, no Pará, e nos organizamos na Associação Berê desde 2018."
        trilha={[{ rotulo: "Sobre", href: "/sobre/" }]}
      />

      <section className="secao" aria-labelledby="t-quem">
        <div className="container duas-colunas">
          <div className="prosa">
            <span className="eyebrow">Quem somos</span>
            <h2 id="t-quem" className="titulo-md">Mẽbêngôkre</h2>
            <p>
              Nos autodenominamos Mẽbêngôkre, que significa “gente do buraco d’água” ou “gente da água grande”, e
              ocupamos hoje a Terra Indígena Trincheira-Bacajá, cortada pelo Rio Bacajá, que deságua no Rio Xingu.
              Vivemos em aldeias de diferentes tamanhos, geralmente circulares.
            </p>
            <p>
              No centro das aldeias fica a <strong>Ngàb</strong>, a Casa do Guerreiro, onde nos encontramos para
              reuniões, para conviver e para decidir sobre nosso futuro. Lá fazemos festas e rituais, transmitimos
              experiências e aprendemos com os <strong>Kubengêt</strong>, os anciões, sobre costumes, histórias,
              músicas, danças e pinturas.
            </p>
            <p>
              O <strong>Kukradjà</strong>, nossa cultura, aparece nos jeitos de caçar, pescar, fazer artesanato,
              ornamentos e pinturas do corpo. Esses saberes são ensinados desde cedo às crianças, para que cresçam
              fortes e bonitas.
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

      <section className="escuro secao" aria-labelledby="t-luta">
        <div className="container prosa">
          <span className="eyebrow">Nossa luta</span>
          <h2 id="t-luta" className="titulo-md">A floresta é a nossa casa</h2>
          <p className="lead">
            Desde o contato com o homem branco, que chamamos de kuben, muito do nosso território foi perdido e muitos
            parentes se foram. Por isso lutamos contra as invasões de fazendeiros, madeireiros e garimpeiros, e pela
            conservação da floresta e da biodiversidade.
          </p>
          <p className="lead">
            É na floresta que nascemos, crescemos e criamos nossos filhos. É ela que nos dá alimento e remédio.
            Proteger a floresta é cuidar da nossa casa e preservar nossa vida.
          </p>
        </div>
      </section>
      <Divisor />

      <section className="secao" aria-labelledby="t-associacao">
        <div className="container prosa">
          <span className="eyebrow">A Associação</span>
          <h2 id="t-associacao" className="titulo-md">Associação Indígena Berê Xikrin</h2>
          <p>
            Criada em 2018, a Associação Indígena Berê Xikrin é uma organização indígena sem fins lucrativos. Seu
            objetivo é fortalecer as comunidades por meio das políticas indigenistas, com mais participação na
            formação de políticas públicas de promoção e proteção dos nossos direitos.
          </p>
          <p>
            A Berê promove projetos de segurança alimentar, fortalecimento cultural, saúde, educação, geração de renda
            e proteção territorial. Captando e gerindo recursos, faz a mediação entre o povo Mẽbêngôkre e os não
            indígenas, com projetos, atividades produtivas e culturais.
          </p>
        </div>
      </section>

      <section className="secao" style={{ paddingTop: 0 }} aria-labelledby="t-diretoria">
        <div className="container">
          <span className="eyebrow">Diretoria</span>
          <h2 id="t-diretoria" className="titulo-md" style={{ margin: "1rem 0 2rem" }}>
            Quem conduz a Berê
          </h2>
          <ul className="diretoria">
            {DIRETORIA.map(([nome, cargo]) => (
              <li key={nome}>
                <strong>{nome}</strong>
                <span>{cargo}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="plano-de-vida" className="escuro secao" aria-labelledby="t-plano">
        <div className="container prosa">
          <span className="eyebrow">Plano de Vida</span>
          <h2 id="t-plano" className="titulo-md">O futuro que escolhemos</h2>
          <p className="lead">
            Em 2017 começamos, com todas as aldeias, a construir o Plano de Vida da Terra Indígena Trincheira-Bacajá:
            um documento que reúne nossos anseios, metas e estratégias, feito em oficinas com cada aldeia, lideranças e
            comunidades.
          </p>
          <p className="lead">
            Ele serve de instrumento de planejamento e de parcerias de longo prazo, e deve ser revisto a cada cinco
            anos. Mesmo antes de publicado, já fortalece nossa cultura, nossa organização e a busca por projetos de
            renda nas comunidades.
          </p>
          <p>
            <Link className="btn btn--destaque" href="/projetos/belo-monte/">
              Belo Monte e o PBA-CI
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
