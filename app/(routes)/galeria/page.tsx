"use client";

import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";
import { GaleriaItem } from "@/types/galeria";
import { galeriaData } from "@/data/galeria";
import Image from "next/image";
import Head from "next/head";

export default function GaleriaPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState<GaleriaItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      // Simulamos una carga de datos
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setItems(galeriaData);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>Galería de Imágenes | Hexágono</title>
        <meta
          name="description"
          content="Explora nuestra galería de imágenes con impresionantes diseños y proyectos. Descubre ideas y conceptos visuales únicos."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Galería de Imágenes | Hexágono" />
        <meta
          property="og:description"
          content="Explora nuestra galería de imágenes con impresionantes diseños y proyectos."
        />
        <meta property="og:image" content="/path/to/your/image.jpg" />
        <meta property="og:url" content="https://www.hexagono.xyz/galeria" />
        <meta name="twitter:title" content="Galería de Imágenes | Hexágono" />
        <meta
          name="twitter:description"
          content="Explora nuestra galería de imágenes con impresionantes diseños y proyectos."
        />
        <meta name="twitter:image" content="/path/to/your/image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="container mx-auto px-4 py-8 lg:px-20 ">
        <h1 className="text-3xl font-bold mb-8">Galería</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading
            ? Array.from({ length: 6 }).map((_, index) => (
                <Card key={index} className="overflow-hidden">
                  <Skeleton className="h-48 w-full" />
                  <CardContent className="p-4">
                    <Skeleton className="h-4 w-3/4 mb-2" />
                    <Skeleton className="h-3 w-full" />
                  </CardContent>
                </Card>
              ))
            : items.map((item) => (
                <Card key={item.id} className="overflow-hidden group relative">
                  <div className="w-full h-64 relative">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-white text-xl font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white text-sm">{item.description}</p>
                  </div>
                </Card>
              ))}
        </div>
      </div>
    </>
  );
}
