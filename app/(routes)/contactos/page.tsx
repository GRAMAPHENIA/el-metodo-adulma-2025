import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | El Método - ADULMA",
  description: "Ponte en contacto con nosotros para más información sobre El Método ADULMA.",
};

export default function ContactoPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Contacto</h1>
      <p className="mb-4">
        Estamos aquí para responder tus preguntas. No dudes en contactarnos.
      </p>
      {/* Agregar formulario de contacto y información de contacto */}
    </div>
  );
}