"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { MENU } from "@/lib/site";

/** Marca o item do menu da página atual (inclui as subpáginas de Projetos). */
function ativo(pathname: string, href: string) {
  return pathname === href || (href !== "/" && pathname.startsWith(href));
}

export function Cabecalho() {
  const pathname = usePathname();
  const [gaveta, setGaveta] = useState(false);
  const [sub, setSub] = useState(false);
  const subRef = useRef<HTMLLIElement>(null);

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

  return (
    <header className="topo">
      <div className="container topo__linha">
        <Link href="/" className="topo__logo">
          <img
            src="/marca/bere-xikrin-horizontal-600.webp"
            alt="Associação Indígena Berê Xikrin, página inicial"
            width={600}
            height={277}
          />
        </Link>
        <nav className="menu" aria-label="Principal">
          <ul className="menu__links">
            {MENU.map((item) =>
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
          <Link className="btn btn--marca" href="/apoie/">
            Apoie
          </Link>
          <button
            type="button"
            className="botao-menu"
            aria-expanded={gaveta}
            aria-controls="gaveta"
            onClick={() => setGaveta((v) => !v)}
          >
            {gaveta ? "Fechar" : "Menu"}
          </button>
        </nav>
      </div>
      <div id="gaveta" className="gaveta" data-aberta={gaveta}>
        <ul>
          {MENU.map((item) => (
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
            <Link href="/contato/">Contato</Link>
          </li>
        </ul>
        <Link className="btn btn--marca" href="/apoie/">
          Apoie a Berê
        </Link>
      </div>
    </header>
  );
}
