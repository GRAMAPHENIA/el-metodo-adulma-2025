"use client";

import React from "react";
import { Sen } from "next/font/google";

const sen = Sen({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const VideoOverlay: React.FC = () => {
  return (
    <div
      role="region"
      aria-labelledby="video-overlay-heading"
      className="relative max-w-7xl h-[500px] lg:h-[350px] overflow-hidden shadow-xl rounded-lg mt-28 lg:mt- mx-4 lg:mx-auto"
    >
      {/* Video de fondo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover filter sepia opacity-90 brightness-50 contrast-150 saturate-200"
        src="/video-hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      {/* Contenido superpuesto */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center backdrop-blur-sm bg-white/10">
        <h1
          id="video-overlay-heading"
          className={`${sen.className} text-white text-4xl md:text-6xl lg:text-8xl font-bold opacity-80`}
        >
          &quot;El Método&quot;
        </h1>
        <p className="text-amber-50/90 text-lg md:text-xl lg:text-2xl max-w-[560px] mt-4 mx-4 lg:mx-0">
          Para profesionales interesados en enseñarlo y{" "}
          <span className="font-semibold text-white">Adul</span>tos{" "}
          <span className="font-semibold text-white">Ma</span>yores que quieran
          practicarlo.
        </p>
      </div>
    </div>
  );
};

export default VideoOverlay;
