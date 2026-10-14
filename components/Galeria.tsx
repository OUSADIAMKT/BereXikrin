import { GaleriaVisor } from "@/components/GaleriaVisor";
import { srcset } from "@/lib/imagens";
import type { Foto as FotoTipo } from "@/lib/site";

/**
 * Grade de fotos com legenda de crédito. Clicar abre a foto em tela cheia,
 * com legenda e setas (GaleriaVisor). Os srcset são montados aqui, no build.
 */
export function Galeria({ fotos, credito }: { fotos: FotoTipo[]; credito: string }) {
  return <GaleriaVisor credito={credito} fotos={fotos.map((f) => ({ ...f, srcSet: srcset(f.src) }))} />;
}
