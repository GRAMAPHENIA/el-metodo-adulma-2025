import "./globals.css";
import type { Metadata } from "next";
import { Exo } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/custom/footer";
import Topbar from "@/components/custom/TopBar";

const exo = Exo({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "El Método - ADULMA",
  description:
    "Método para profesionales y adultos mayores interesados en mantener una vida activa y saludable.",
  keywords: "adultos mayores, salud, bienestar, ejercicio, capacitación",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={exo.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <header className="px-24 py-4">
            <Topbar/>
          </header>
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
