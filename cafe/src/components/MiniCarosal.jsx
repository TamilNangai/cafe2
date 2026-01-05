

import React, { useState, useEffect } from "react";

export const MiniCarosal = ({
  slides = [],
  autoSlide = true,
  autoSlideInterval = 4000,
}) => {
  const [curr, setCurr] = useState(0);

  useEffect(() => {
    if (!autoSlide || slides.length === 0) return;

    const interval = setInterval(() => {
      setCurr((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [autoSlide, autoSlideInterval, slides.length]);

  useEffect(() => {
    setCurr(0);
  }, [slides]);

  if (slides.length === 0) return null;

  return (
    <div className="w-full h-[175.64px] sm:h-[200px] md:h-[418.64px] lg:h-[618.64px] xl:w-[320px] xl:h-[420px] relative overflow-hidden mb-10">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
            index === curr ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide}
            alt={`Slide ${index}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};
