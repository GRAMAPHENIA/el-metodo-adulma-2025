"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MenuMobileItem } from "@/types/menuMobileItem";
import { menuMobileItems } from "@/data/menuMobileItems";

const MobileMenu = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Menu className="h-6 w-6" />
      </PopoverTrigger>
      <PopoverContent className="p-4 bg-white dark:bg-card">
        {menuMobileItems.map((item: MenuMobileItem, index: number) => (
          <Link key={index} href={item.href} className="block py-2 ">
            <p className="py-2 text-center"> {item.label}</p>
           
          </Link>
        ))}
      </PopoverContent>
    </Popover>
  );
};

export default MobileMenu;
