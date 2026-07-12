"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/images/about-showcase/energy.webp",
    alt: "Solar energy and electrical infrastructure",
    title: "Energy & Electrical Systems",
  },
  {
    src: "/images/about-showcase/water.webp",
    alt: "Water supply and hydraulic infrastructure",
    title: "Water & Hydraulic Infrastructure",
  },
  {
    src: "/images/about-showcase/agriculture.webp",
    alt: "Smart agricultural systems and rural development",
    title: "Smart Agricultural Systems",
  },
  {
    src: "/images/about-showcase/engineering.webp",
    alt: "Technical engineering and infrastructure work",
    title: "Technical & Engineering Consulting",
  },
];

export default function AboutShowcase() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveSlide((currentSlide) => {
        return (currentSlide + 1) % slides.length;
      });
    }, 5000);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="group relative mt-10 overflow-hidden rounded-3xl border border-white/70 bg-white/45 p-8 shadow-[0_24px_70px_rgba(15,23,42,0.10)] backdrop-blur-md transition duration-500 hover:border-sky-200 hover:shadow-[0_30px_90px_rgba(14,165,233,0.16)] md:p-12 lg:p-14">
      {/* Decorative engineering shapes */}
      <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 translate-x-16 -translate-y-16 rounded-full border border-sky-300/40 bg-sky-300/10 transition duration-700 group-hover:scale-125" />

      <div className="pointer-events-none absolute bottom-8 left-8 hidden h-20 w-20 border-b border-l border-sky-400/30 lg:block" />

      <div className="relative grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-stretch lg:gap-12">
        {/* Logo area */}
        <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden rounded-2xl border border-white/80 bg-white/70 p-8 shadow-lg backdrop-blur-md transition duration-500 group-hover:border-sky-300 group-hover:bg-white/90 md:min-h-[400px]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.10),transparent_68%)]" />

          <div className="pointer-events-none absolute left-6 top-6 h-12 w-12 border-l border-t border-sky-300/40" />

          <div className="pointer-events-none absolute bottom-6 right-6 h-12 w-12 border-b border-r border-sky-300/40" />

          <Image
            src="/brand/tanana-smart-base-logo.svg"
            alt="Tanana Smart Base logo"
            width={720}
            height={720}
            priority={false}
            unoptimized
            className="relative h-auto w-full max-w-[300px] object-contain transition duration-700 group-hover:scale-[1.03]"
          />
        </div>

        {/* Slideshow */}
        <div
          className="relative min-h-[320px] overflow-hidden rounded-2xl border border-white/80 bg-slate-900 shadow-lg md:min-h-[400px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.src}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === activeSlide
                  ? "z-10 opacity-100"
                  : "pointer-events-none z-0 opacity-0"
              }`}
              aria-hidden={index !== activeSlide}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className={`object-cover transition-transform duration-[6000ms] ${
                  index === activeSlide ? "scale-105" : "scale-100"
                }`}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/15 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
                  Tanana Smart Base
                </p>

                <h3 className="mt-2 text-xl font-bold text-white md:text-2xl">
                  {slide.title}
                </h3>
              </div>
            </div>
          ))}

          {/* Slide indicators */}
          <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.title}
                type="button"
                onClick={() => setActiveSlide(index)}
                aria-label={`Show ${slide.title}`}
                aria-pressed={index === activeSlide}
                className={`h-2.5 rounded-full border border-white/70 transition-all duration-300 ${
                  index === activeSlide
                    ? "w-8 bg-sky-400"
                    : "w-2.5 bg-white/40 hover:bg-white/80"
                }`}
              />
            ))}
          </div>

          <div className="pointer-events-none absolute left-6 top-6 z-20 h-12 w-12 border-l border-t border-white/30" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-1 w-0 bg-sky-500 transition-all duration-700 group-hover:w-full" />
    </div>
  );
}