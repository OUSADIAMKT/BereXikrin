/**
 * Ícones simples das redes, em traço, desenhados para seguir a cor do texto
 * (currentColor). Desenho próprio e genérico, sem copiar o logotipo das marcas.
 */
export function IconeRede({ rede }: { rede: string }) {
  const comum = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (rede) {
    case "Instagram":
      return (
        <svg {...comum}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
        </svg>
      );
    case "TikTok":
      return (
        <svg {...comum}>
          <path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5" />
          <path d="M14 3c.4 2.6 2.2 4.4 5 4.6" />
        </svg>
      );
    case "YouTube":
      return (
        <svg {...comum}>
          <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
          <path d="M10.5 9.5v5l4-2.5z" fill="currentColor" />
        </svg>
      );
    case "LinkedIn":
      return (
        <svg {...comum}>
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <path d="M8 10.5V16" />
          <circle cx="8" cy="7.5" r="0.6" fill="currentColor" />
          <path d="M12 16v-5.5M12 13c0-1.6 1-2.5 2.3-2.5S16.5 11.4 16.5 13v3" />
        </svg>
      );
    default:
      return null;
  }
}
