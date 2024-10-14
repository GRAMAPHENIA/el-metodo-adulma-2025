import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | El Método - ADULMA",
  description: "Lee nuestros artículos sobre bienestar y vida saludable para adultos mayores.",
};

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      <p className="mb-4">
        Explora nuestros artículos sobre salud, bienestar y vida activa para adultos mayores.
      </p>
      {/* Agregar lista de artículos del blog */}
    </div>
  );
}