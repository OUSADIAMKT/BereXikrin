import Link from "next/link";
import { Divisor } from "@/components/Divisor";
import { MENU, REDES, SITE } from "@/lib/site";

export function Rodape() {
  return (
    <footer className="escuro rodape">
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
            <p>
              Associação Indígena Berê Xikrin da TI Bacajá. Organização indígena sem fins lucrativos, criada em{" "}
              {SITE.fundacao}.
            </p>
          </div>
          <div>
            <h2>Navegue</h2>
            <ul>
              {MENU.map((i) => (
                <li key={i.href}>
                  <Link href={i.href}>{i.rotulo}</Link>
                </li>
              ))}
              <li>
                <Link href="/apoie/">Apoie</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2>Contato</h2>
            <ul>
              <li>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </li>
              {SITE.endereco.map((l) => (
                <li key={l}>{l}</li>
              ))}
              <li>
                <Link href="/contato/">Fale conosco</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2>Redes</h2>
            <ul>
              {REDES.map((r) => (
                <li key={r.nome}>
                  <a href={r.url} target="_blank" rel="noopener">
                    {r.nome}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="rodape__fim">
          <span>
            © 2026 {SITE.nome}. Imagens e grafismos pertencem ao povo Mẽbêngôkre-Xikrin; uso somente com autorização.
          </span>
          <Link href="/privacidade/">Privacidade</Link>
        </div>
      </div>
    </footer>
  );
}
