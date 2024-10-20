"use client"

import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface CourseLocation {
  name: string
  address: string
  description: string
}

const courseLocations: CourseLocation[] = [
  {
    name: "Downtown Campus",
    address: "123 Main St, Cityville, ST 12345",
    description: "Our flagship location offering a wide range of courses in the heart of the city."
  },
  {
    name: "Tech Hub",
    address: "456 Innovation Ave, Techtown, ST 67890",
    description: "Specialized in cutting-edge technology courses with state-of-the-art facilities."
  },
  {
    name: "Arts Center",
    address: "789 Creative Blvd, Artsville, ST 13579",
    description: "A vibrant space for all art and design courses, featuring spacious studios."
  },
  {
    name: "Science Park",
    address: "101 Discovery Rd, Labville, ST 24680",
    description: "Home to our advanced science courses with fully equipped laboratories."
  }
]

export function CourseLocationsSection() {
  return (
    <section className=" bg-stone-100 dark:bg-popover my-40 px-20 py-40">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Course Locations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courseLocations.map((location, index) => (
            <Card key={index} className="flex flex-col shadow-md">
              <CardHeader>
                <CardTitle>{location.name}</CardTitle>
                <CardDescription>{location.address}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p>{location.description}</p>
              </CardContent>
              <CardFooter>
                <p className="w-full">Learn More</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}