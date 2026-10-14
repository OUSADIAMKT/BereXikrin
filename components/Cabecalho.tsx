"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { textos } from "@/lib/i18n";
import { equivalente, type Idioma } from "@/lib/rotas";
import { MENU, PROJETOS } from "@/lib/site";
import { MENU_EN, projetosEn } from "@/lib/site-en";

/** Marca o item do menu da página atual (inclui as subpáginas de Projetos). */
function ativo(pathname: string, href: string) {
  return pathname === href || (href !== "/" && href !== "/en/" && pathname.startsWith(href));
}

function menuDe(lang: Idioma) {
  if (lang === "pt") return MENU;
  const projetos = projetosEn(PROJETOS);
  return MENU_EN.map((i) =>
    i.filhos
      ? {
          ...i,
          filhos: [{ rotulo: "All projects", href: "/en/projects/" }, ...projetos.map((p) => ({ rotulo: p.nome, href: `/en/projects/${p.slug}/` }))],
        }
      : i,
  );
}

export function Cabecalho({ lang = "pt" }: { lang?: Idioma }) {
  const t = textos(lang);
  const menu = menuDe(lang);
  const pathname = usePathname();
  const [gaveta, setGaveta] = useState(false);
  const [sub, setSub] = useState(false);
  const subRef = useRef<HTMLLIElement>(null);
  const inicio = lang === "en" ? "/en/" : "/";
  const outro = lang === "en" ? "pt" : "en";
  const linkIdioma = equivalente(pathname, outro);

  // Fecha os menus ao trocar de página.
  useEffect(() => {
    setGaveta(false);
    setSub(false);
  }, [pathname]);

  // Esc fecha tudo; clique fora fecha o submenu.
  useEffect(() => {
    const tecla = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setGaveta(false);
        setSub(false);
      }
    };
    const clique = (e: MouseEvent) => {
      if (subRef.current && !subRef.current.contains(e.target as Node)) setSub(false);
    };
    document.addEventListener("keydown", tecla);
    document.addEventListener("click", clique);
    return () => {
      document.removeEventListener("keydown", tecla);
      document.removeEventListener("click", clique);
    };
  }, []);

  // Trava a rolagem da página com a gaveta aberta.
  useEffect(() => {
    document.body.style.overflow = gaveta ? "hidden" : "";
  }, [gaveta]);

  const seletor = (
    <span className="idioma">
      {lang === "pt" ? <b aria-current="true">PT</b> : <a href={linkIdioma} hrefLang="pt-BR" lang="pt-BR" title={t.trocarIdioma}>PT</a>}
      {" · "}
      {lang === "en" ? <b aria-current="true">EN</b> : <a href={linkIdioma} hrefLang="en" lang="en" title={t.trocarIdioma}>EN</a>}
    </span>
  );

  return (
    <header className="topo">
      <div className="container topo__linha">
        <Link href={inicio} className="topo__logo">
          <img src="/marca/bere-xikrin-horizontal-600.webp" alt={t.logoAlt} width={600} height={277} />
        </Link>
        <nav className="menu" aria-label={t.menuPrincipal}>
          <ul className="menu__links">
            {menu.map((item) =>
              item.filhos ? (
                <li key={item.href} className="menu__sub" ref={subRef}>
                  <button
                    type="button"
                    aria-expanded={sub}
                    aria-controls="submenu-projetos"
                    onClick={() => setSub((v) => !v)}
                    aria-current={ativo(pathname, item.href) ? "page" : undefined}
                  >
                    {item.rotulo}
                  </button>
                  <ul id="submenu-projetos" className="submenu" hidden={!sub}>
                    {item.filhos.map((f) => (
                      <li key={f.href}>
                        <Link href={f.href}>{f.rotulo}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.href}>
                  <Link href={item.href} aria-current={ativo(pathname, item.href) ? "page" : undefined}>
                    {item.rotulo}
                  </Link>
                </li>
              ),
            )}
          </ul>
          {seletor}
          <Link className="btn btn--marca" href={lang === "en" ? "/en/support/" : "/apoie/"}>
            {t.apoie}
          </Link>
          <button type="button" className="botao-menu" aria-expanded={gaveta} aria-controls="gaveta" onClick={() => setGaveta((v) => !v)}>
            {gaveta ? t.fechar : t.menu}
          </button>
        </nav>
      </div>
      <div id="gaveta" className="gaveta" data-aberta={gaveta}>
        <ul>
          {menu.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.rotulo}</Link>
              {item.filhos && (
                <ul className="gaveta__filhos">
                  {item.filhos.slice(1).map((f) => (
                    <li key={f.href}>
                      <Link href={f.href}>{f.rotulo}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li>
            <Link href={lang === "en" ? "/en/contact/" : "/contato/"}>{t.contato}</Link>
          </li>
        </ul>
        <p className="gaveta__idioma">{seletor}</p>
        <Link className="btn btn--marca" href={lang === "en" ? "/en/support/" : "/apoie/"}>
          {t.apoieBere}
        </Link>
      </div>
    </header>
  );
}
