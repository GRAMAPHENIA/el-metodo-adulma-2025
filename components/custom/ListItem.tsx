import * as React from "react";
import {
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import { MenuItemProps } from "@/types/menu";
import Link from "next/link";

export const ListItem = ({ item }: { item: MenuItemProps }) => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="bg-white dark:bg-card ">
        {item.label}
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-3 p-6 md:w-[300px] lg:w-[520px]">
          {item.links.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
              >
                <div className="text-sm font-medium leading-none">
                  {link.title}
                </div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  {link.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};
