import fs from "node:fs";
import path from "node:path";

/**
 * Monta o `srcset` de uma foto de /public/img a partir das versões menores
 * geradas por scripts/gera-variantes.cjs (`nome-640w.webp` etc.).
 * Roda só no build (componentes de servidor), por isso pode olhar o disco.
 */
const PUBLICO = path.join(process.cwd(), "public");
const LARGURAS = [640, 960, 1280];

export function srcset(src: string, larguraOriginal = 1920): string | undefined {
  if (!src.startsWith("/img/") || !src.endsWith(".webp")) return undefined;
  const partes = LARGURAS.filter((w) => fs.existsSync(path.join(PUBLICO, src.replace(/\.webp$/, `-${w}w.webp`)))).map(
    (w) => `${src.replace(/\.webp$/, `-${w}w.webp`)} ${w}w`,
  );
  if (!partes.length) return undefined;
  return [...partes, `${src} ${larguraOriginal}w`].join(", ");
}

/** Versão de no máximo `largura` px, para fundos em CSS. */
export function versao(src: string, largura: 640 | 960 | 1280): string {
  const v = src.replace(/\.webp$/, `-${largura}w.webp`);
  return fs.existsSync(path.join(PUBLICO, v)) ? v : src;
}
