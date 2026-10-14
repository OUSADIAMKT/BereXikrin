import type { ImgHTMLAttributes } from "react";
import { srcset } from "@/lib/imagens";

type Props = ImgHTMLAttributes<HTMLImageElement> & { src: string; alt: string };

/**
 * <img> com srcset automático: no celular o navegador baixa a versão de 640 ou
 * 960 px em vez da original. `sizes` diz quanto da tela a foto ocupa.
 */
export function Foto({ src, sizes = "(max-width: 700px) 100vw, 50vw", ...resto }: Props) {
  return <img src={src} srcSet={srcset(src)} sizes={sizes} {...resto} />;
}
