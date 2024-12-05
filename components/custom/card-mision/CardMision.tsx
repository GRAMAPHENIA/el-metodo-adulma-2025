// Ruta: /app/mision/page.tsx

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function CardMision() {
  return (
    <Card
      role="region"
      aria-labelledby="card-title"
      aria-describedby="card-description"
      className="w-full max-w-[320px] lg:max-w-[650px] mx-auto my-20 p-6 rounded-none md:rounded-lg"
    >
      <CardHeader className="text-center">
        <CardTitle
          id="card-title"
          className="text-3xl lg:text-4xl text-stone-700 dark:text-popover mb-10"
        >
          Nuestra Misión
        </CardTitle>
        <CardDescription
          id="card-description"
          className="text-base lg:text-xl text-stone-600 dark:text-stone-300"
        >
          Desde 2004, implementando{" "}
          <span className="text-stone-800 dark:text-amber-200">
            &quot;El Método&quot; AdulMa
          </span>{" "}
          para mejorar la calidad de vida de los adultos mayores, potenciando su
          condición física y promoviendo la neuroplasticidad a través de una
          enseñanza evolutiva.
        </CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="flex justify-center">
        <Button className="hidden lg:block">Descubre más</Button>
      </CardFooter>
    </Card>
  );
}

export default CardMision;
