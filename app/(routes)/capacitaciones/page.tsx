import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Capacitaciones | El Método - ADULMA",
  description: "Descubre los cursos y talleres que ofrecemos para mantenerte en forma con El Método ADULMA.",
};

export default function CapacitacionesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Capacitaciones</h1>
      <p className="mb-4">
        Explora nuestros cursos y talleres diseñados para profesionales y adultos mayores.
      </p>
      {/* Agregar lista de capacitaciones disponibles */}
    </div>
  );
}