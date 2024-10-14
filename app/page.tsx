import VideoOverlay from "@/components/custom/video-overlay";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inicio | El Método - ADULMA",
  description:
    "Descubre El Método para profesionales y adultos mayores interesados en mantener una vida activa y saludable.",
};

export default function Home() {
  return (
    <>
      <VideoOverlay />
    </>
  );
}
