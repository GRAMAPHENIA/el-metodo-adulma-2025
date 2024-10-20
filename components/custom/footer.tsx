// components/Footer.tsx

import Link from "next/link";
import Image from "next/image";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="bg-primary dark:bg-card text-stone-700 dark:text-stone-300 py-8">
      <div className="container mx-auto flex flex-col items-center md:flex-row justify-between space-y-4 md:space-y-0 px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src="/portada.png" 
            alt="Logo"
            width={40}
            height={40}
          />
          <span className="text-xl font-bold">Mi Sitio Web</span>
        </div>

        {/* Links de navegación */}
        <div className="flex space-x-6">
          <Link href="/about">
            <p className="hover:text-gray-300 transition">Sobre nosotros</p>
          </Link>
          <Link href="/services">
            <p className="hover:text-gray-300 transition">Servicios</p>
          </Link>
          <Link href="/contact">
            <p className="hover:text-gray-300 transition">Contacto</p>
          </Link>
        </div>

        {/* Iconos de redes sociales */}
        <div className="flex space-x-4">
          <Link href="https://facebook.com" target="_blank">
            <Image
              src="/facebook-icon.svg" // Asegúrate de tener el archivo en public/
              alt="Facebook"
              width={24}
              height={24}
            />
          </Link>
          <Link href="https://twitter.com" target="_blank">
            <Image
              src="/twitter-icon.svg" // Asegúrate de tener el archivo en public/
              alt="Twitter"
              width={24}
              height={24}
            />
          </Link>
        </div>
      </div>

      {/* Derechos de autor */}
      <div className="mt-8 text-center text-sm text-stone-700 dark:text-stone-400">
        © {new Date().getFullYear()} Mi Sitio Web. Todos los derechos
        reservados.
      </div>
    </footer>
  );
};

export default Footer;
