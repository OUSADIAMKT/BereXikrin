import { Be_Vietnam_Pro, Unbounded } from "next/font/google";

/*
 * O subconjunto "vietnamese" não é capricho: é ele que traz o "ẽ" de
 * Mẽbêngôkre. Sem ele o navegador troca a letra por outra fonte no meio do nome.
 * Compartilhado pelos layouts raiz de português e de inglês.
 */
export const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin", "vietnamese"],
  weight: ["500", "600", "700"],
});

export const vietnam = Be_Vietnam_Pro({
  variable: "--font-vietnam",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "700"],
});
