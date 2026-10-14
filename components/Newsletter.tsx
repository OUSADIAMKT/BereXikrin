"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { inscreverNewsletter } from "@/lib/newsletter";
import { NEWSLETTER_ENDPOINT, SITE } from "@/lib/site";

type Estado = "inicio" | "enviado" | "desligada";

export function Newsletter() {
  const [estado, setEstado] = useState<Estado>("inicio");

  function enviar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    // Campo escondido: pessoas não veem, robôs preenchem. Se veio cheio, ignora em silêncio.
    if (form.get("site")) {
      setEstado("enviado");
      return;
    }
    if (!NEWSLETTER_ENDPOINT) {
      setEstado("desligada");
      return;
    }
    const ok = inscreverNewsletter({
      nome: String(form.get("nome") || "").trim(),
      email: String(form.get("email") || "").trim(),
      consentimento: form.get("consentimento") === "sim",
    });
    setEstado(ok ? "enviado" : "desligada");
  }

  return (
    <section className="newsletter" aria-labelledby="t-newsletter">
      <h2 id="t-newsletter">Receba notícias da Berê. Assine nossa newsletter!</h2>

      {estado === "enviado" ? (
        <p className="newsletter__retorno" role="status">
          Pronto! Seu cadastro foi enviado. Você vai receber as notícias da Associação no seu e-mail.
        </p>
      ) : (
        <form onSubmit={enviar} className="newsletter__form">
          <label className="visualmente-oculto" htmlFor="nl-nome">Nome</label>
          <input id="nl-nome" name="nome" type="text" placeholder="Nome *" required maxLength={80} autoComplete="name" />
          <label className="visualmente-oculto" htmlFor="nl-email">E-mail</label>
          <input id="nl-email" name="email" type="email" placeholder="E-mail *" required maxLength={120} autoComplete="email" />
          <input className="newsletter__isca" name="site" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" />
          <label className="newsletter__aceite" htmlFor="nl-aceite">
            <input id="nl-aceite" name="consentimento" type="checkbox" value="sim" required />
            <span>Eu concordo em receber comunicações da Associação Berê Xikrin.</span>
          </label>
          <p className="newsletter__lgpd">
            Ao informar meus dados, eu concordo com a <Link href="/privacidade/">Política de Privacidade</Link>.
          </p>
          <button type="submit" className="btn newsletter__botao">
            Cadastrar
          </button>
          {estado === "desligada" && (
            <p className="newsletter__retorno" role="status">
              A newsletter ainda está sendo ligada. Para entrar na lista agora, escreva para{" "}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
            </p>
          )}
        </form>
      )}
    </section>
  );
}
