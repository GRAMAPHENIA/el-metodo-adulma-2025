"use client";

import * as React from "react";
import { useState } from "react";

import { ModeToggle } from "@/components/custom/ModeToggle";
import Image from "next/image";
import { menuItems } from "@/data/menuItems";
import { ListItem } from "@/components/custom/ListItem";
import { NavigationMenu } from "../ui/navigation-menu";
import MobileMenu from "./menu-mobile/MobileMenu";

export default function Topbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="flex lg:justify-center lg:mt-2 lg:mx-auto lg:w-full">
      <div className="py-3 px-3 flex justify-between items-center bg-primary/70 dark:bg-secondary/80 fixed z-10 lg:rounded-lg w-full md:w-[95%] lg:w-[1200px] backdrop-blur-md shadow-md">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            height={30}
            width={30}
            src="/logo.png"
            alt="Logo"
            className="w-8 h-8 sm:w-10 sm:h-10 object-cover"
          />
          <p className="ml-2 text-stone-600 dark:text-stone-300 font-bold hidden lg:block">
            EL MÉTODO
          </p>
        </div>

        {/* Menú para dispositivos grandes */}
        <div className="hidden lg:flex flex-1 justify-center list-none text-gray-500 dark:text-gray-300">
          <NavigationMenu>
            {menuItems.map((item, index) => (
              <ListItem key={index} item={item} />
            ))}
          </NavigationMenu>
        </div>

        {/* Menú móvil */}
        <div className="lg:hidden flex items-center">
          <div
            aria-label="Toggle menu"
            className="p-2 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <MobileMenu />  
          </div>
        </div>

        {/* Modo oscuro */}
        <ModeToggle />
      </div>
    </section>
  );
}
