import { GaleriaVisor } from "@/components/GaleriaVisor";
import { srcset } from "@/lib/imagens";
import type { Idioma } from "@/lib/rotas";
import type { Foto as FotoTipo } from "@/lib/site";

/**
 * Grade de fotos com legenda de crédito. Clicar abre a foto em tela cheia,
 * com legenda e setas (GaleriaVisor). Os srcset são montados aqui, no build.
 */
export function Galeria({ fotos, credito, lang = "pt" }: { fotos: FotoTipo[]; credito: string; lang?: Idioma }) {
  return <GaleriaVisor lang={lang} credito={credito} fotos={fotos.map((f) => ({ ...f, srcSet: srcset(f.src) }))} />;
}
