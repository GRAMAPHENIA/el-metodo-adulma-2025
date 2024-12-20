// data/articles.ts
import { Article } from "@/types/article";

export const articles: Article[] = [
  {
    id: 1,
    title: "Cómo mejorar tu productividad",
    description: "Descubre técnicas probadas para aumentar tu eficiencia en el trabajo y en tu vida personal.",
    date: "2023-10-15",
    author: "Ana García",
    image: "/publicidades/publica-asesoria.webp",
    category: "Productividad",
    url: "https://www.hexagono.xyz/hosting"
  },
  {
    id: 2,
    title: "Los mejores destinos para viajar en 2024",
    description: "Explora los lugares más emocionantes y hermosos para visitar el próximo año.",
    date: "2023-10-10",
    author: "Carlos Rodríguez",
    image: "/publicidades/publica-eco-dopler.webp",
    category: "Viajes",
    url: "routes/Blog"
  },
  {
    id: 3,
    title: "Recetas saludables para el desayuno",
    description: "Comienza tu día con estas deliciosas y nutritivas opciones de desayuno.",
    date: "2023-10-05",
    author: "María López",
    image: "/publicidades/publica-brandi.webp",
    category: "Salud",
    url: "routes/Blog"
  },
];
