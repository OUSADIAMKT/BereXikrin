import Link from "next/link";
import { CopiarPix } from "@/components/CopiarPix";
import { Foto } from "@/components/Foto";
import { PaginaHero } from "@/components/PaginaHero";
import { metaPagina } from "@/lib/meta";
import { APOIO, SITE } from "@/lib/site";
import { FOTOS_APOIO_EN } from "@/lib/site-en";

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
        foto="/img/apoie/aldeia-vista-de-cima.webp"
        videoId={APOIO.videoId}
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
          <div className="prosa">
            <span className="eyebrow">Watch</span>
            <h2 className="titulo-md">Get to know Berê and the territory</h2>
          </div>
          <div style={{ position: "relative", aspectRatio: "16 / 9", borderRadius: "var(--raio-lg)", overflow: "hidden", background: "var(--jenipapo)" }}>
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${APOIO.videoId}`}
              title="Video from the Berê Xikrin Indigenous Association"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
            />
          </div>
          <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
            {FOTOS_APOIO_EN.map((f) => (
              <figure key={f.src} style={{ margin: 0 }}>
                <Foto src={f.src} alt={f.alt} loading="lazy" style={{ width: "100%", aspectRatio: "4 / 3", objectFit: "cover", borderRadius: "var(--raio-lg)" }} />
              </figure>
            ))}
          </div>
          <div className="prosa">
            <span className="eyebrow">How to support</span>
            <h2 className="titulo-md">Three ways to help</h2>
          </div>
          <div style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
            <article className="card">
              <div style={{ padding: "1.5rem", display: "grid", gap: "0.75rem" }}>
                <h3 className="titulo-sm">Donating items</h3>
                <p>Delivery address:</p>
                <address style={{ fontStyle: "normal" }}>
                  {APOIO.entrega.map((l) => (
                    <span key={l} style={{ display: "block" }}>{l}</span>
                  ))}
                </address>
                <p>To arrange the delivery, message us on WhatsApp at {APOIO.whatsapp}.</p>
              </div>
            </article>
            <article className="card">
              <div style={{ padding: "1.5rem", display: "grid", gap: "0.75rem" }}>
                <h3 className="titulo-sm">Contribute via PIX</h3>
                <p>PIX key (email), for payments from Brazilian bank accounts:</p>
                <p><strong style={{ overflowWrap: "anywhere" }}>{APOIO.pix}</strong></p>
                <p>Account holder: {APOIO.titular}<br />CNPJ (Brazilian tax ID): {APOIO.cnpj}</p>
                <CopiarPix chave={APOIO.pix} rotulo="Copy PIX key" copiado="Key copied!" />
              </div>
            </article>
            <article className="card">
              <div style={{ padding: "1.5rem", display: "grid", gap: "0.75rem" }}>
                <h3 className="titulo-sm">WhatsApp</h3>
                <p>{APOIO.whatsapp}</p>
                <p>To ask questions, arrange deliveries or propose partnerships.</p>
                <a className="btn btn--destaque" href={APOIO.whatsappLink} target="_blank" rel="noopener noreferrer">
                  Message on WhatsApp
                </a>
              </div>
            </article>
          </div>
          <p>
            International support or an institutional partnership? Write to <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
          </p>
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
