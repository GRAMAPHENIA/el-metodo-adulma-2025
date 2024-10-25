// components/CategoryFilter.tsx
import { Button } from "@/components/ui/button";

interface CategoryFilterProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  categories: string[];
}

export function CategoryFilter({
  selectedCategory,
  setSelectedCategory,
  categories,
}: CategoryFilterProps) {
  return (
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
  );
}
