"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

interface Testimonial {
  id: number;
  name: string;
  quote: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alice Johnson",
    quote:
      "This product has completely transformed my workflow. I can't imagine working without it now!",
    image: "/avatares/lady-finale-two.webp",
  },
  {
    id: 2,
    name: "Bob Smith",
    quote:
      "The customer support team is incredibly responsive and helpful. They've gone above and beyond to assist me.",
    image: "/avatares/lady-finale-three.webp",
  },
  {
    id: 3,
    name: "Carol Davis",
    quote:
      "I've tried many similar products, but this one stands out for its intuitive design and powerful features.",
    image: "/avatares/lady-finale-four.webp",
  },
  {
    id: 4,
    name: "David Wilson",
    quote:
      "The recent updates have made a huge difference. It's clear the team is constantly working to improve the product.",
    image: "/avatares/lady-finale-three.webp",
  },
  {
    id: 5,
    name: "Eva Brown",
    quote:
      "I appreciate how customizable everything is. It fits perfectly into my existing setup.",
    image: "/avatares/lady-finale-four.webp",
  },
  {
    id: 6,
    name: "David Wilson",
    quote:
      "The recent updates have made a huge difference. It's clear the team is constantly working to improve the product.",
    image: "/avatares/lady-finale-three.webp",
  },
  {
    id: 7,
    name: "David Wilson",
    quote:
      "The recent updates have made a huge difference. It's clear the team is constantly working to improve the product.",
    image: "/avatares/lady-finale-four.webp",
  },
  {
    id: 8,
    name: "Denis Wilson",
    quote:
      "The recent updates have made a huge difference. It's clear the team is constantly working to improve the product.",
    image: "/avatares/lady-finale-three.webp",
  },
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= testimonials.length ? 0 : prevIndex + 3
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 3 < 0 ? testimonials.length - 3 : prevIndex - 3
    );
  };

  return (
    <section className="py-40 lg:px-20 bg-stone-100 dark:bg-popover">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Lo que dicen nuestros clientes
        </h2>
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials
              .slice(currentIndex, currentIndex + 3)
              .map((testimonial) => (
                <Card key={testimonial.id} className="w-full">
                  <CardContent className="pt-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <Avatar>
                        <AvatarImage
                          src={testimonial.image}
                          alt={testimonial.name}
                        />
                        <AvatarFallback>
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                  </CardContent>
                </Card>
              ))}
          </div>
          <div className="flex justify-center mt-6 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="mt-10 text-center">
          <Link href="/testimonials">
            <Button variant="default" size="lg">
              Mas testimonios
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
