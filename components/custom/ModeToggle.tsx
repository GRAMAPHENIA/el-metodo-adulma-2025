"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { Section } from "lucide-react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  // Función para alternar entre "light" y "dark"
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <section>
      <Button
        onClick={toggleTheme}
        variant="outline"
        size="icon"
        className="rounded-full bg-primary dark:bg-secondary dark:hover:bg-stone-800 border-none"
      >
        <SunIcon
          className={`h-[1.2rem] w-[1.2rem] transition-all ${
            theme === "dark" ? "rotate-90 scale-0" : "rotate-0 scale-100"
          }`}
        />
        <MoonIcon
          className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${
            theme === "dark" ? "rotate-0 scale-100" : "-rotate-90 scale-0"
          }`}
        />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </section>
  );
}
