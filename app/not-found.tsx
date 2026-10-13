import Link from "next/link";

export default function NaoEncontrada() {
  return (
    <section className="secao">
      <div className="container prosa">
        <span className="eyebrow">Erro 404</span>
        <h1 className="titulo-lg">Página não encontrada</h1>
        <p className="lead">Este endereço não existe ou mudou de lugar com o novo site.</p>
        <p className="acoes">
          <Link className="btn btn--marca" href="/">
            Voltar ao início
          </Link>
          <Link className="btn btn--contorno" href="/projetos/">
            Ver projetos
          </Link>
        </p>
      </div>
    </section>
  );
}
