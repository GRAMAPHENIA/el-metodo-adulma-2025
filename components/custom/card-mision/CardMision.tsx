import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function CardMision() {
  return (
    <Card className="w-[350px] mx-auto my-40 ">
      <CardHeader className="text-center">
        <CardTitle>Nuestra Mision</CardTitle>
        <CardDescription className="pt-8">&quot;Desde 2004, implementando El Método AdulMa para mejorar la calidad de vida de los adultos mayores, potenciando su condición física y promoviendo la neuroplasticidad a través de una enseñanza evolutiva.&quot;</CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="flex justify-center">
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  );
}
