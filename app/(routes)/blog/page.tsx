"use client";

import { useState } from "react";
import { ArticleCard } from "@/components/custom/article-card/ArticleCard";
import { CategoryFilter } from "@/components/custom/category-filter/CategoryFilter";
import { SearchBar } from "@/components/custom/search-bar/SearchBar";
import { articles } from "@/data/articles";
import { categories } from "@/data/categories";

export default function BlogSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "" || article.category === selectedCategory)
  );

  return (
    <section className="container mx-auto px-8 py-8 mt-10">
      <h1 className="text-7xl font-bold py-10 text-center">Nuestro Blog</h1>
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <CategoryFilter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categories={categories}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>

      {filteredArticles.length === 0 && (
        <p className="text-center mt-8 text-muted-foreground">
          No se encontraron artículos que coincidan con tu búsqueda.
        </p>
      )}
    </section>
  );
}
