"use client"

import React from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"

interface Ad {
  id: number
  image: string
  title: string
  description: string
}

const ads: Ad[] = [
  {
    id: 1,
    image: "https://source.unsplash.com/random/800x600?product=1",
    title: "Amazing Product 1",
    description: "Discover the power of our innovative solution.",
  },
  {
    id: 2,
    image: "https://source.unsplash.com/random/800x600?product=2",
    title: "Exclusive Offer 2",
    description: "Limited time deal on our best-selling items.",
  },
  {
    id: 3,
    image: "https://source.unsplash.com/random/800x600?product=3",
    title: "New Arrival 3",
    description: "Be the first to try our latest product line.",
  },
  {
    id: 4,
    image: "https://source.unsplash.com/random/800x600?product=4",
    title: "Special Discount 4",
    description: "Save big on our premium selection.",
  },
  {
    id: 5,
    image: "https://source.unsplash.com/random/800x600?product=5",
    title: "Featured Item 5",
    description: "Explore our top-rated products today.",
  },
]

export function AdSliderSection() {
  return (
    <section className="py-12 px-4 md:px-8 my-40">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Ads</h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-5xl mx-auto"
      >
        <CarouselContent>
          {ads.map((ad) => (
            <CarouselItem key={ad.id} className="md:basis-1/3 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col items-center p-6">
                    <div className="aspect-square relative w-full mb-4">
                      <Image
                        src={ad.image}
                        alt={ad.title}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{ad.title}</h3>
                    <p className="text-sm text-gray-600 mb-4 text-center">{ad.description}</p>
                    <Button>Shop Now</Button>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
}