import Link from "next/link";
import { IconeRede } from "@/components/IconeRede";
import { Newsletter } from "@/components/Newsletter";
import { textos } from "@/lib/i18n";
import { versao } from "@/lib/imagens";
import type { Idioma } from "@/lib/rotas";
import { MENU, REDES, SITE } from "@/lib/site";
import { MENU_EN, SITE_EN } from "@/lib/site-en";

export function Rodape({ lang = "pt" }: { lang?: Idioma }) {
  const t = textos(lang);
  const menu = lang === "en" ? MENU_EN : MENU;
  const nome = lang === "en" ? SITE_EN.nome : SITE.nome;
  const endereco = lang === "en" ? SITE_EN.endereco : SITE.endereco;
  return (
    <footer
      className="escuro rodape"
      style={{ ["--fundo-rodape" as string]: `url(${versao("/img/capas/aldeia-aerea.webp", 1280)})` }}
    >
      <div className="container">
        <div className="rodape__grade">
          <div className="rodape__marca">
            <img src="/marca/bere-xikrin-horizontal-negativo-600.webp" alt={nome} width={600} height={277} loading="lazy" />
            <ul className="rodape__redes" aria-label={t.redes}>
              {REDES.map((r) => (
                <li key={r.nome}>
                  <a href={r.url} target="_blank" rel="noopener" aria-label={t.redeDe(r.nome)} title={r.nome}>
                    <IconeRede rede={r.nome} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav className="rodape__links" aria-label={t.rodape}>
            <ul className="rodape__principais">
              {menu.map((i) => (
                <li key={i.href}>
                  <Link href={i.href}>{i.rotulo}</Link>
                </li>
              ))}
            </ul>
            <ul className="rodape__secundarios">
              {t.linksApoio.map((i) => (
                <li key={i.href}>
                  <Link href={i.href}>{i.rotulo}</Link>
                </li>
              ))}
            </ul>
            <div className="rodape__contato">
              <h2>{t.contatoTitulo}</h2>
              <ul>
                <li>
                  <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                </li>
                {endereco.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </div>
          </nav>

          <Newsletter lang={lang} />
        </div>

        <div className="rodape__fim">
          <span>{t.direitos(2026, nome, SITE.fundacao)}</span>
        </div>
      </div>
    </footer>
  );
}
