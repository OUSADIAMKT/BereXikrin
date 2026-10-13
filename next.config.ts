import type { NextConfig } from "next";

/**
 * Mesma base do site da Ousadia: exportação estática servida pela Hostinger.
 * Os quatro ajustes abaixo são obrigatórios para esse modelo funcionar.
 */
const nextConfig: NextConfig = {
  /** `next build` gera HTML/CSS/JS puro em `out/`, sem servidor Node. */
  output: "export",

  /**
   * Cada rota vira pasta com `index.html` (`/sobre/index.html`). Sem isso o
   * Next emite `sobre.html` solto e a Hostinger devolve 404 em `/sobre`.
   */
  trailingSlash: true,

  /** O otimizador do `next/image` precisa de servidor; as fotos já vão em WebP. */
  images: { unoptimized: true },

  /**
   * Amarra o id do build ao commit. Sem isso cada build sorteia um id, embute
   * em todo HTML e a branch `deploy` mostra o site inteiro como alterado.
   */
  generateBuildId: async () => {
    try {
      const { execFileSync } = await import("node:child_process");
      return execFileSync("git", ["rev-parse", "HEAD"], { encoding: "utf8" }).trim();
    } catch {
      return "berexikrin-static";
    }
  },
};

export default nextConfig;
