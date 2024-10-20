"use client"

import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface CourseLocation {
  name: string
  address: string
  description: string
  instructor: string
}

const courseLocations: CourseLocation[] = [
  {
    name: "Olivos - Salón al fondo",
    address: "R. Gutiérrez 1372, Olivos",
    description: "Lunes y jueves, de 11:10 a 12:10 hrs. Salón al fondo.",
    instructor: "Ana Martínez"
  },
  {
    name: "CACYP Don Torcuato",
    address: "Ruta 202 y Balbastro, Don Torcuato",
    description: "Lunes y miércoles, de 14:45 a 15:45 hrs.",
    instructor: "Carlos Rodríguez"
  },
  {
    name: "Amigos de Florida",
    address: "Gral. San Martín 2442, Florida",
    description: "Miércoles y viernes, de 10:00 a 11:00 hrs.",
    instructor: "Lucía Pérez"
  },
  {
    name: "La Redonda de Belgrano",
    address: "Vuelta de Obligado 2042, Belgrano",
    description: "Martes y viernes, de 11:00 a 12:00 hrs. Entrada por Secretaría Parroquial.",
    instructor: "Juan González"
  }
];

export function CourseLocationsSection() {
  return (
    <section className=" bg-stone-100 dark:bg-popover my-40 px-20 py-40">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Nuestras sedes</h2>
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
                <p className="w-full "><span className='font-bold'>Instructor:</span> {location.instructor}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}