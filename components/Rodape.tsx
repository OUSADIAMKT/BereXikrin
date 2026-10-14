import Link from "next/link";
import { Divisor } from "@/components/Divisor";
import { IconeRede } from "@/components/IconeRede";
import { Newsletter } from "@/components/Newsletter";
import { MENU, REDES, SITE } from "@/lib/site";

/** Links secundários do rodapé (a coluna da direita). */
const LINKS_APOIO = [
  { rotulo: "Apoie", href: "/apoie/" },
  { rotulo: "Contato", href: "/contato/" },
  { rotulo: "Política de privacidade", href: "/privacidade/" },
  { rotulo: "Mapa do site", href: "/sitemap.xml" },
];

export function Rodape() {
  return (
    <footer
      className="escuro rodape"
      style={{ ["--fundo-rodape" as string]: "url(/img/capas/aldeia-aerea.webp)" }}
    >
      <Divisor />
      <div className="container">
        <div className="rodape__grade">
          <div className="rodape__marca">
            <img
              src="/marca/bere-xikrin-horizontal-negativo-600.webp"
              alt={SITE.nome}
              width={600}
              height={277}
              loading="lazy"
            />
            <ul className="rodape__redes" aria-label="Redes sociais">
              {REDES.map((r) => (
                <li key={r.nome}>
                  <a href={r.url} target="_blank" rel="noopener" aria-label={`${r.nome} da Berê Xikrin`} title={r.nome}>
                    <IconeRede rede={r.nome} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav className="rodape__links" aria-label="Rodapé">
            <ul className="rodape__principais">
              {MENU.map((i) => (
                <li key={i.href}>
                  <Link href={i.href}>{i.rotulo}</Link>
                </li>
              ))}
            </ul>
            <ul className="rodape__secundarios">
              {LINKS_APOIO.map((i) => (
                <li key={i.href}>
                  <Link href={i.href}>{i.rotulo}</Link>
                </li>
              ))}
            </ul>
            <div className="rodape__contato">
              <h2>Contato</h2>
              <ul>
                <li>
                  <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                </li>
                {SITE.endereco.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </div>
          </nav>

          <Newsletter />
        </div>

        <div className="rodape__fim">
          <span>
            © 2026 {SITE.nome}. Organização indígena sem fins lucrativos, criada em {SITE.fundacao}. Imagens e grafismos
            pertencem ao povo Mẽbêngôkre-Xikrin; uso somente com autorização.
          </span>
        </div>
      </div>
    </footer>
  );
}
