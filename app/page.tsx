import { AdSliderSection } from "@/components/custom/ad-slider-section/AdSliderSection";
import { CardMision } from "@/components/custom/card-mision/CardMision";
import { CourseLocationsSection } from "@/components/custom/course-locations-section/CourseLocationsSection";
import TestimonialsSection from "@/components/custom/testimonials-section/TestimonialsSection";
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
      <section className="p-10">
        <VideoOverlay />
      </section>
      <CardMision />
      {/* TODO: Crear componente video-dontstopme */}
      <CourseLocationsSection />
      <AdSliderSection />
      <TestimonialsSection />
    </>
  );
}
