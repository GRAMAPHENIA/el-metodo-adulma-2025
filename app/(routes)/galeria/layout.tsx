// Ruta: /app/galeria/layout.tsx
// Layout principal para la sección de la galería de imágenes con metadatos completos.

export const metadata = {
    title: "Galería de Imágenes | Hexágono",
    description:
      "Explora nuestra galería de imágenes con impresionantes diseños y proyectos. Descubre ideas y conceptos visuales únicos.",
    openGraph: {
      title: "Galería de Imágenes | Hexágono",
      description:
        "Explora nuestra galería de imágenes con impresionantes diseños y proyectos. Descubre ideas y conceptos visuales únicos.",
      url: "https://www.hexagono.xyz/galeria",
      type: "website",
      images: [
        {
          url: "/path/to/your/image.jpg",
          width: 1200,
          height: 630,
          alt: "Galería de imágenes de Hexágono",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Galería de Imágenes | Hexágono",
      description:
        "Explora nuestra galería de imágenes con impresionantes diseños y proyectos.",
      images: ["/path/to/your/image.jpg"],
    },
  };
  
  export default function GaleriaLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div>
        {children}
      </div>
    );
  }
  