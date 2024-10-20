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
    <section className="flex justify-center mt-4 mx-auto">
      <div className="py-2 px-2 flex justify-between items-center bg-primary dark:bg-secondary/80 fixed z-10 rounded-full w-[320px] md:w-[900px] backdrop-blur-md ">
        {/* <div className="flex items-center">
          <Image height={35} width={35} src={"/"} alt="Logo" />
        </div> */}

        <p className="ml-2 text-stone-600 dark:text-stone-300">EL METODO</p>

        {/* Menú para dispositivos grandes */}
        <div className="hidden lg:flex flex-1 justify-center list-none text-gray-500 dark:text-gray-300 ">
          <NavigationMenu>
            {menuItems.map((item, index) => (
              <ListItem key={index} item={item} />
            ))}
          </NavigationMenu>
        </div>

        <div
          className="lg:hidden flex items-center"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <MobileMenu />
        </div>
        <ModeToggle />
      </div>
    </section>
  );
}
