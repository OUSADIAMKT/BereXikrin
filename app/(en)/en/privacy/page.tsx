import { PaginaHero } from "@/components/PaginaHero";
import { metaPagina } from "@/lib/meta";
import { SITE } from "@/lib/site";
import { SITE_EN } from "@/lib/site-en";

export const metadata = metaPagina({
  titulo: "Privacy policy",
  descricao: "How the Berê Xikrin Indigenous Association website handles personal data, under Brazil’s LGPD.",
  caminho: "/en/privacy/",
  foto: "/img/cultura/floresta.webp",
});

export default function PrivacyEn() {
  return (
    <>
      <PaginaHero lang="en" rotulo="Privacy" titulo="Privacy policy" foto="/img/cultura/floresta.webp" trilha={[{ rotulo: "Privacy", href: "/en/privacy/" }]} />
      <section className="secao">
        <div className="container prosa">
          <h2 className="titulo-sm">Who is responsible</h2>
          <p>
            The data controller is the {SITE_EN.nomeOficial} ({SITE_EN.nome}), a non-profit Indigenous organization based in
            Altamira, Pará, Brazil. Contact: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
          </p>

          <h2 className="titulo-sm">Browsing</h2>
          <p>This website uses no cookies and no tracking or advertising tools. Fonts and images are served by the site itself.</p>

          <h2 className="titulo-sm">Newsletter</h2>
          <p>
            To receive the Association’s news, we ask for your <strong>name</strong> and <strong>email</strong>, and your
            consent to receive communications. We store this data, with the date you subscribed, in a restricted-access
            spreadsheet of the Association.
          </p>
          <p>
            We use this data only to send news from Berê. We do not sell or share it with third parties. You can unsubscribe
            at any time by replying to any of our emails or writing to <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
          </p>

          <h2 className="titulo-sm">Email</h2>
          <p>If you write to us, we will use your address and message only to reply.</p>

          <h2 className="titulo-sm">Your rights</h2>
          <p>
            Under Brazil’s General Data Protection Law (LGPD, Law 13,709/2018), and the equivalent rights you may have where
            you live, such as under the EU GDPR, you can ask to access, correct or delete your data at any time by writing to{" "}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
          </p>
          <p>
            This policy will be updated before the site offers online donations or a shop. The Portuguese version prevails
            in case of doubt. Last updated: October 14, 2026.
          </p>
        </div>
      </section>
    </>
  );
}
