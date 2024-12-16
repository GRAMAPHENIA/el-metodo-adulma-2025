// Ruta: /app/layout.tsx
// RootLayout para manejar el diseño general del sitio web.

import "./globals.css"; // Importación de estilos globales
import type { Metadata } from "next"; // Tipado para metadata
import { Exo } from "next/font/google"; // Fuente Exo de Google
import { ThemeProvider } from "@/components/theme-provider"; // Proveedor de tema
import Footer from "@/components/custom/footer"; // Componente de pie de página
import Topbar from "@/components/custom/TopBar"; // Componente de barra superior

// Configuración de la fuente Exo
const exo = Exo({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// Metadatos de la aplicación
export const metadata: Metadata = {
  title: "El Método - ADULMA",
  description:
    "Método para profesionales y adultos mayores interesados en mantener una vida activa y saludable.",
  keywords: "adultos mayores, salud, bienestar, ejercicio, capacitación",
  openGraph: {
    title: "El Método - ADULMA",
    description:
      "Método para profesionales y adultos mayores interesados en mantener una vida activa y saludable.",
    url: "https://www.hexagono.xyz",
    siteName: "El Método - ADULMA",
    images: [
      {
        url: "/path/to/your/image.jpg",
        width: 800,
        height: 600,
        alt: "Imagen representativa del Método AdulMa",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "El Método - ADULMA",
    description:
      "Método para profesionales y adultos mayores interesados en mantener una vida activa y saludable.",
    images: ["/path/to/your/image.jpg"],
  },
};

// Componente RootLayout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={exo.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Topbar />

          <main role="main" className="min-h-screen">
            {children}
          </main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
