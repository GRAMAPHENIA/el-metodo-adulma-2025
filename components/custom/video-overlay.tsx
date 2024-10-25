"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Sen } from "next/font/google";

const sen = Sen({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const VideoOverlay: React.FC = () => {
  return (
    <div className="relative w-full h-[350px] overflow-hidden shadow-xl rounded-lg mt-20"> 
      <video
        className="absolute top-0 left-0 w-full h-full object-cover filter sepia opacity-90 brightness-50 contrast-150 saturate-200 x"
        src="/video-hero.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center backdrop-blur-sm bg-white/10">
        <h1
          className={`${sen.className} text-white text-4xl md:text-6xl lg:text-9xl font-bold opacity-80 blur-[.6px]`}
        >
          &quot;El Método&quot;
        </h1>

        <p className="text-amber-50/90 text-lg md:text-xl lg:text-2xl max-w-[560px] mt-4">
          Para profesionales interesados en enseñarlo y{" "}
          <span className="font-semibold text-white">Adul</span>tos{" "}
          <span className="font-semibold text-white">Ma</span>yores que quieran
          practicarlo.
        </p>

        {/* <Button className="mt-12 text-gray-800 bg-primary hover:bg-primary/90">
          Saber Más
        </Button> */}
      </div>
    </div>
  );
};

export default VideoOverlay;