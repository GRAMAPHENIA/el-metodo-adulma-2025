import { MenuItemProps } from "@/types/menu";

export const menuItems: MenuItemProps[] = [
  {
    label: "Principal",
    links: [
      {
        title: "Inicio",
        href: "/",
        description: "Página principal con toda la información esencial.",
      },
      {
        title: "Nosotros",
        href: "/nosotros",
        description: "Conoce más sobre nuestra misión, visión y valores.",
      },
      {
        title: "Contacto",
        href: "/contactos",
        description:
          "Ponte en contacto con nosotros para más información o consultas.",
      },
    ],
  },
  {
    label: "Contenidos",
    links: [
      {
        title: "Blog",
        href: "/blog",
        description:
          "Lee nuestros artículos sobre bienestar y vida saludable para adultos mayores.",
      },
      {
        title: "Galería",
        href: "/galeria",
        description:
          "Explora nuestras imágenes y videos que capturan lo mejor de nuestras actividades.",
      },
    ],
  },
  {
    label: "Servicios",
    links: [
      {
        title: "Capacitación",
        href: "/capacitaciones",
        description:
          "Descubre los cursos y talleres que ofrecemos para mantenerte en forma.",
      },
    ],
  },
];
