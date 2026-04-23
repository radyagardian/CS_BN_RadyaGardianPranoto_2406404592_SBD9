"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function MainBanner() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const banners = [
    "/caramelribbon.png",
    "/strawberrylemon.png",
    "/pistachiolatte.png"
  ];

  return (
    <div className="relative w-full h-[55vh] md:h-[60vh] overflow-hidden group" ref={emblaRef}>
      <div className="flex h-full">
        {banners.map((src, index) => (
          <div className="flex-[0_0_100%] min-w-0 relative h-full" key={index}>
            <img 
              src={src} 
              alt={`Banner ${index + 1}`} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
          </div>
        ))}
      </div>

      <button 
        onClick={scrollPrev} 
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl md:text-6xl font-bold z-10 transition-colors"
      >
        &#10094;
      </button>

      <button 
        onClick={scrollNext} 
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl md:text-6xl font-bold z-10 transition-colors"
      >
        &#10095;
      </button>
    </div>
  );
}