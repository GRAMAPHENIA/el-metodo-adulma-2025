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
import { Button } from "@/components/ui/button";

interface Ad {
  id: number;
  image: string;
  title: string;
  description: string;
}

const ads: Ad[] = [
  {
    id: 1,
    image: "/publicidades/publica-asesoria.webp",
    title: "Asesoria Administrativa",
    description: "Consultanos hoy mismo!",
  },
  {
    id: 2,
    image: "/publicidades/publica-brandi.webp",
    title: "Libreria",
    description: "Todo lo que necesitas en un solo lugar. ¡Visítanos!",
  },
  {
    id: 3,
    image: "/publicidades/publica-cuidado-de-adultos.webp",
    title: "Acompañamiento",
    description: "Siempre cerca de los que más importan. ¡Contáctanos!",
  },
  {
    id: 4,
    image: "/publicidades/publica-eco-dopler.webp",
    title: "Special Discount 4",
    description: "Save big on our premium selection.",
  },
  {
    id: 5,
    image: "/publicidades/publica-enfermeria.webp",
    title: "Featured Item 5",
    description: "Explore our top-rated products today.",
  },
  {
    id: 6,
    image: "/publicidades/publica-flores-de-bach.webp",
    title: "Featured Item 5",
    description: "Explore our top-rated products today.",
  },
  {
    id: 7,
    image: "/publicidades/publica-pintura.webp",
    title: "Featured Item 5",
    description: "Explore our top-rated products today.",
  },
  {
    id: 8,
    image: "/publicidades/publica-psicologic.webp",
    title: "Featured Item 5",
    description: "Explore our top-rated products today.",
  },
  {
    id: 9,
    image: "/publicidades/publica-sauce-violeta.webp",
    title: "Featured Item 5",
    description: "Explore our top-rated products today.",
  },
  {
    id: 10,
    image: "/publicidades/publica-taller-literario.webp",
    title: "Featured Item 5",
    description: "Explore our top-rated products today.",
  },
  {
    id: 11,
    image: "/publicidades/publica-uniendo-eslabones.webp",
    title: "Featured Item 5",
    description: "Explore our top-rated products today.",
  },
 
];

export function AdSliderSection() {
  return (
    <section className="px-0z md:px-8 my-40">
      <h2 className="text-3xl font-bold text-center mb-8">Anuncios destacados</h2>
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
                    <p className="text-sm text-stone-500 dark:text-stone-200 mb-4 text-center">
                      {ad.description}
                    </p>
                    {/* <Button>Shop Now</Button> */}
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
