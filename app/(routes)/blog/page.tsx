"use client";

import { useState } from "react";
import { Search, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

// Datos de ejemplo
const articles = [
  {
    id: 1,
    title: "Cómo mejorar tu productividad",
    description:
      "Descubre técnicas probadas para aumentar tu eficiencia en el trabajo y en tu vida personal.",
    date: "2023-10-15",
    author: "Ana García",
    image: "/placeholder.svg?height=200&width=300",
    category: "Productividad",
  },
  {
    id: 2,
    title: "Los mejores destinos para viajar en 2024",
    description:
      "Explora los lugares más emocionantes y hermosos para visitar el próximo año.",
    date: "2023-10-10",
    author: "Carlos Rodríguez",
    image: "/placeholder.svg?height=200&width=300",
    category: "Viajes",
  },
  {
    id: 3,
    title: "Recetas saludables para el desayuno",
    description:
      "Comienza tu día con estas deliciosas y nutritivas opciones de desayuno.",
    date: "2023-10-05",
    author: "María López",
    image: "/placeholder.svg?height=200&width=300",
    category: "Salud",
  },
];

const categories = [
  "Productividad",
  "Viajes",
  "Salud",
  "Tecnología",
  "Finanzas",
];

export default function BlogSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "" || article.category === selectedCategory)
  );

  return (
    <section className="container mx-auto px-4 py-8 mt-20">
      <h1 className="text-4xl font-bold mb-8 text-center">Nuestro Blog</h1>

      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div className="relative w-full md:w-1/3 mb-4 md:mb-0">
          <Input
            type="search"
            placeholder="Buscar artículos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
        </div>

        <div className="flex flex-wrap gap-2 justify-center">
          <Button
            variant={selectedCategory === "" ? "default" : "outline"}
            onClick={() => setSelectedCategory("")}
          >
            Todos
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArticles.map((article) => (
          <Card key={article.id} className="flex flex-col">
            <CardHeader>
              <Image
                width={300}
                height={300}
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </CardHeader>
            <CardContent className="flex-grow">
              <Badge>{article.category}</Badge>
              <CardTitle className="mt-2 mb-2">{article.title}</CardTitle>
              <p className="text-muted-foreground">{article.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <div className="text-sm text-muted-foreground">
                <p>{article.author}</p>
                <p>{new Date(article.date).toLocaleDateString()}</p>
              </div>
              <Button variant="ghost" size="icon">
                <Share2 className="h-4 w-4" />
                <span className="sr-only">Compartir artículo</span>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {filteredArticles.length === 0 && (
        <p className="text-center mt-8 text-muted-foreground">
          No se encontraron artículos que coincidan con tu búsqueda.
        </p>
      )}
    </section>
  );
}
