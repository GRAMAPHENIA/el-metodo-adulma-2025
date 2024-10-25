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
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function CardMision() {
  return (
    <Card className="w-[320px] lg:w-[650px] mx-auto my-20 ">
      <CardHeader className="text-center">
        <CardTitle className="text-4xl text-stone-700 dark:text-popover">
          Nuestra Mision
        </CardTitle>
        <Image height={100} width={100} src={"/mission/globe.png"} alt="Globo terráqueo representando el bienestar integral del Método AdulMa para la salud física y cognitiva de adultos mayores." className="mx-auto py-12"/>
        <CardDescription className="text-xl">
          Desde 2004, {""}
          implementando {""}
          <span className="text-stone-800 dark:text-amber-200">
            &quot;El Método&quot; AdulMa {""}
          </span>
          para mejorar la calidad de vida de los adultos mayores , potenciando
          su condición física y promoviendo la neuroplasticidad a través de una
          enseñanza evolutiva.
        </CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="flex justify-center">
        {/* <Button>Deploy</Button> */}
      </CardFooter>
    </Card>
  );
}
