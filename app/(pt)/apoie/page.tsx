import Link from "next/link";
import { CopiarPix } from "@/components/CopiarPix";
import { Foto } from "@/components/Foto";
import { PaginaHero } from "@/components/PaginaHero";
import { APOIO, FOTOS_APOIO, SITE } from "@/lib/site";
import { metaPagina } from "@/lib/meta";

export const metadata = metaPagina({
  titulo: "Apoie a Berê",
  descricao: "Como apoiar a Associação Indígena Berê Xikrin na proteção do território, nos rituais e na renda que vem da floresta.",
  caminho: "/apoie/",
  foto: "/img/menire/menire-4.webp",
});

export default function Apoie() {
  return (
    <>
      <PaginaHero
        rotulo="Apoie"
        titulo={<>Fortaleça quem <span className="destaque">protege a floresta</span></>}
        lead="O apoio fortalece a proteção do território, os rituais e a renda que vem da floresta, com as decisões nas mãos das aldeias."
        foto="/img/apoie/aldeia-vista-de-cima.webp"
        videoId={APOIO.videoId}
        trilha={[{ rotulo: "Apoie", href: "/apoie/" }]}
      />
      <section className="secao">
        <div className="container" style={{ display: "grid", gap: "2.5rem" }}>
          <div className="prosa">
            <span className="eyebrow">Para onde vai o apoio</span>
            <h2 className="titulo-md">O que o apoio fortalece</h2>
            <ul className="lista-grafismo">
              <li>Vigilância e proteção da TI Trincheira-Bacajá</li>
              <li>Rituais e transmissão de saberes entre gerações</li>
              <li>Renda com os produtos da floresta e o artesanato das menire</li>
              <li>Comunicação e mobilidade entre as 16 aldeias</li>
            </ul>
          </div>
          <div className="prosa">
            <span className="eyebrow">Assista</span>
            <h2 className="titulo-md">Conheça a Berê e o território</h2>
          </div>
          <div style={{ position: "relative", aspectRatio: "16 / 9", borderRadius: "var(--raio-lg)", overflow: "hidden", background: "var(--jenipapo)" }}>
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${APOIO.videoId}`}
              title="Vídeo da Associação Indígena Berê Xikrin"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
            />
          </div>
          <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
            {FOTOS_APOIO.map((f) => (
              <figure key={f.src} style={{ margin: 0 }}>
                <Foto src={f.src} alt={f.alt} loading="lazy" style={{ width: "100%", aspectRatio: "4 / 3", objectFit: "cover", borderRadius: "var(--raio-lg)" }} />
              </figure>
            ))}
          </div>
          <div className="prosa">
            <span className="eyebrow">Como apoiar</span>
            <h2 className="titulo-md">Três formas de ajudar</h2>
          </div>
          <div style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
            <article className="card">
              <div style={{ padding: "1.5rem", display: "grid", gap: "0.75rem" }}>
                <h3 className="titulo-sm">Doação de itens</h3>
                <p>Local de entrega:</p>
                <address style={{ fontStyle: "normal" }}>
                  {APOIO.entrega.map((l) => (
                    <span key={l} style={{ display: "block" }}>{l}</span>
                  ))}
                </address>
                <p>Para combinar a entrega, fale pelo WhatsApp {APOIO.whatsapp}.</p>
              </div>
            </article>
            <article className="card">
              <div style={{ padding: "1.5rem", display: "grid", gap: "0.75rem" }}>
                <h3 className="titulo-sm">Contribuição por PIX</h3>
                <p>Chave PIX (e-mail):</p>
                <p><strong style={{ overflowWrap: "anywhere" }}>{APOIO.pix}</strong></p>
                <p>Titular: {APOIO.titular}<br />CNPJ: {APOIO.cnpj}</p>
                <CopiarPix chave={APOIO.pix} rotulo="Copiar chave PIX" copiado="Chave copiada!" />
              </div>
            </article>
            <article className="card">
              <div style={{ padding: "1.5rem", display: "grid", gap: "0.75rem" }}>
                <h3 className="titulo-sm">WhatsApp</h3>
                <p>{APOIO.whatsapp}</p>
                <p>Para tirar dúvidas, combinar entregas ou propor parcerias.</p>
                <a className="btn btn--destaque" href={APOIO.whatsappLink} target="_blank" rel="noopener noreferrer">
                  Chamar no WhatsApp
                </a>
              </div>
            </article>
          </div>
          <p>
            Apoio internacional ou parceria institucional? Escreva para <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
          </p>
          <p>
            <Link className="btn btn--contorno" href="/transparencia/">
              Conheça a transparência da Associação
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
