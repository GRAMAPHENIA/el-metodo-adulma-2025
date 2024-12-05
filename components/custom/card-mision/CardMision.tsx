import * as React from "react";
import Head from "next/head";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export function CardMision() {
  return (
    <>
      <Head>
        <title>Nuestra Misión - Método AdulMa</title>
        <meta
          name="description"
          content="Descubre cómo el Método AdulMa mejora la calidad de vida de los adultos mayores desde 2004, promoviendo la salud física y neuroplasticidad."
        />
      </Head>
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
          {/* <Image
            height={100}
            width={100}
            src="/mission/globe.png"
            alt="Globo terráqueo representando el bienestar integral del Método AdulMa para la salud física y cognitiva de adultos mayores."
            className="mx-auto py-12"
            priority
          /> */}
          <CardDescription
            id="card-description"
            className="text-base lg:text-xl text-stone-600 dark:text-stone-300"
          >
            Desde 2004, implementando{" "}
            <span className="text-stone-800 dark:text-amber-200">
              &quot;El Método&quot; AdulMa
            </span>{" "}
            para mejorar la calidad de vida de los adultos mayores, potenciando
            su condición física y promoviendo la neuroplasticidad a través de
            una enseñanza evolutiva.
          </CardDescription>
        </CardHeader>
        <CardContent></CardContent>
        <CardFooter className="flex justify-center">
          <Button className="hidden lg:block">Descubre más</Button>
        </CardFooter>
      </Card>
    </>
  );
}
