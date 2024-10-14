import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros | El Método - ADULMA",
  description: "Conoce más sobre nuestra misión, visión y valores en ADULMA.",
};

export default function NosotrosPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Sobre Nosotros</h1>
      <p className="mb-4">
        ADULMA es una organización dedicada a mejorar la calidad de vida de los adultos mayores a través de nuestro método innovador.
      </p>
      {/* Agregar más contenido sobre la organización */}
    </div>
  );
}