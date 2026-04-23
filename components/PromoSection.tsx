"use client";

import React, { useEffect, useRef, useState } from "react";

const FadeInOnScroll = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (domRef.current) observer.unobserve(domRef.current);
        }
      });
    });

    if (domRef.current) observer.observe(domRef.current);

    return () => {
      if (domRef.current) observer.unobserve(domRef.current);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
    >
      {children}
    </div>
  );
};

export default function PromoSection() {
  const promos = [
    {
      id: 1,
      subtitle: "SIZES FOR EVERY CRAVING",
      title: "Your favorite, \n perfectly sized",
      tagline: "TALL, GRANDE, OR VENTI",
      description: "Whether you need a quick pick-me-up or a long-lasting treat to fuel your day, we have the perfect size for every mood and moment. Choose your favorite and make it yours.",
      imageUrl: "/coffees.png",
      imagePosition: "right",
      imageCustomClass: "w-[700px] top-[-145px] left-[-90px]", 
    },
    {
      id: 2,
      subtitle: "Refresh",
      title: "A new fruity \n twist is here",
      tagline: "Taste the summer",
      description: "Introducing vibrant iced Mango Cream Matcha. Topped with velvety mango cream cold foam for a delicious pop of sweetness.",
      imageUrl: "/icedmangomatcha.png",
      imagePosition: "left",
      imageCustomClass: "w-[530px] top-[-150px] right-[-130px]", 
    },
    {
      id: 3,
      subtitle: "Bloom",
      title: "Spring starts \n right now",
      tagline: "Fresh new flavors",
      description: "Iced Lavender Cream Chai are back in bloom, joined by the new Iced Ube Coconut Macchiato and so much more.",
      imageUrl: "/icedchai.png",
      imagePosition: "right",
      imageCustomClass: "w-[530px] top-[-150px] left-[-130px]", 
    },
  ];

  return (
    <div className="w-full flex flex-col gap-20 md:gap-32 py-16 md:py-24 overflow-hidden bg-[#f2f0eb]">
      {promos.map((promo) => {
        const isImageRight = promo.imagePosition === "right";

        return (
          <FadeInOnScroll key={promo.id}>
            <section className="px-6 md:px-16 lg:px-24">
              <div
                className={`max-w-7xl mx-auto flex flex-col ${
                  isImageRight ? "lg:flex-row" : "lg:flex-row-reverse"
                } w-full gap-16 items-center`}
              >
                
                {/* text */}
                <div className="flex-1 flex flex-col justify-center space-y-6">
                  <p className="text-sm tracking-[0.2em] text-[#1e3932] font-semibold uppercase">
                    {promo.subtitle}
                  </p>
                  <h1 className="text-5xl md:text-7xl font-bold text-[#1e3932] leading-tight whitespace-pre-line">
                    {promo.title}
                  </h1>
                  <p className="text-sm tracking-[0.2em] text-[#1e3932] font-semibold uppercase">
                    {promo.tagline}
                  </p>
                  <p className="text-[#1e3932]/80 max-w-md text-justify leading-relaxed">
                    {promo.description}
                  </p>
                </div>

                {/* image */}
                <div className="flex-1 w-full relative flex justify-center items-center py-8">
                  
                  <div
                    className={`absolute w-[120%] h-[335px] bg-[#1e3932] z-0 ${
                      isImageRight
                        ? "-right-12 lg:-right-24 rounded-l-[80px]"
                        : "-left-12 lg:-left-24 rounded-r-[80px]"
                    }`}
                  />

                  <div className="relative z-10 w-full max-w-[380px] mx-auto">
                    <div className="h-[330px] w-full relative overflow-visible rounded-2xl">
                      <img
                        src={promo.imageUrl}
                        alt={promo.subtitle}
                        className={`absolute z-10 max-w-none h-auto object-contain ${promo.imageCustomClass}`}
                      />
                    </div>
                  </div>

                </div>

              </div>
            </section>
          </FadeInOnScroll>
        );
      })}
    </div>
  );
}