// data/articles.ts
import { Article } from "@/types/article";

export const articles: Article[] = [
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
