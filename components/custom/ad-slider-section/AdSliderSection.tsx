"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { ads } from "@/data/ads";

/**
 * Componente que renderiza una sección de anuncios con un carrusel.
 */
export function AdSliderSection() {
  return (
    <section className="px-4 md:px-8 my-40">
      <h2
        className="text-3xl font-bold text-center mb-8"
        id="anuncios-destacados"
        aria-labelledby="anuncios-destacados"
      >
        Anuncios destacados
      </h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-7xl mx-auto"
      >
        <CarouselContent>
          {ads.map((ad) => (
            <CarouselItem key={ad.id} className="md:basis-1/3 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col items-center p-6">
                    <div className="aspect-square relative w-full mb-4">
                      <Image
                        height={300}
                        width={300}
                        style={{ width: "360px", height: "360px" }}
                        src={ad.image}
                        alt={ad.title}
                        className="object-cover rounded-lg border"
                      />
                    </div>
                    <h3 className="font-semibold text-lg mb-2 text-stone-600 dark:text-stone-200">
                      {ad.title}
                    </h3>
                    {/* Descripción accesible para lectores de pantalla */}
                    <p className="sr-only">{ad.description}</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Botones de navegación */}
        <CarouselPrevious
          className="hidden md:flex absolute left-8 top-1/2 transform -translate-y-1/2 z-10"
          aria-label="Anterior"
        />
        <CarouselNext
          className="hidden md:flex absolute right-8 top-1/2 transform -translate-y-1/2 z-10"
          aria-label="Siguiente"
        />
      </Carousel>
    </section>
  );
}
