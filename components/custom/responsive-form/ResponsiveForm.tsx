"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useContactForm } from "@/hooks/useContactForm";
import { vollkorn } from "@/styles/fonts";

export default function ResponsiveForm() {
  const { register, handleReactHookSubmit, errors, onSubmit, submitting } =
    useContactForm();

  return (
    <section
      id="contact-form"
      className="text-center rounded-lg text-sm py-12 lg:my-24"
    >
      <h2
        className={`${vollkorn.className} text-6xl lg:text-7xl font-black text-stone-600 dark:text-stone-300 text-center`}
      >
        Contacto
      </h2>
      <p className="text-xl text-gray-500 dark:text-gray-300 mb-16">
        Póngase en contacto con nosotros.
      </p>
      <form
        onSubmit={handleReactHookSubmit(onSubmit)}
        className="mt-8 max-w-2xl mx-auto"
      >
        <div className="mb-4">
          <Input {...register("name")} placeholder="Nombre" />
          {errors.name && (
            <p className="text-red-500 mt-2">{errors.name.message}</p>
          )}
        </div>
        <div className="mb-4">
          <Input
            {...register("email")}
            placeholder="Correo Electrónico"
            type="email"
          />
          {errors.email && (
            <p className="text-red-500 mt-2">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-4">
          <Textarea {...register("message")} placeholder="Mensaje" />
          {errors.message && (
            <p className="text-red-500 mt-2">{errors.message.message}</p>
          )}
        </div>
        <Button type="submit" disabled={submitting}>
          {submitting ? "Enviando..." : "Enviar"}
        </Button>
      </form>
      {/* <div className="border rounded-lg border-stone-800 p-10 m-10">video</div> */}
    </section>
  );
}
