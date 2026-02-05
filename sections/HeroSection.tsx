"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { GetStartedButton } from "../components/ui/CTAbtns";

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
    "/images/image1Dentist.jpg",
    "/images/image2Sch.jpg",
    "/images/image3Lib.jpg",
    "/images/image4Cof.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length,
      );
    }, 3000); // Changes every 3 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden" id="home">
      {/* Background Images */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image}
            alt={`Construction site ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
              One App,
              <br />
              Many Services
            </h1>

            <p className="mb-8 text-lg text-gray-200 md:text-xl">
              Building your dreams with unmatched quality and precision.
              <br />
              Turning your vision into reality, one project at a time.
            </p>

            <GetStartedButton />
          </div>
        </div>
      </div>
    </section>
  );
}
