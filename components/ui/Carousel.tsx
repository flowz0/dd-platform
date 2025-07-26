"use client";

import { CarouselProps } from "@/types/carousel";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export default function Carousel({
  images,
  altTexts = [],
  autoPlayInterval = 5000,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setIsAutoPlay(false);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setIsAutoPlay(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.25 }
    );

    const element = ref.current;
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  useEffect(() => {
    // Don't start autoplay if user has interacted
    if (!isVisible || !isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isVisible, isAutoPlay, autoPlayInterval, images.length]);

  return (
    <div
      ref={ref}
      className="relative w-full md:h-auto aspect-[16/9] overflow-hidden mt-16 md:rounded-2xl"
    >
      <Image
        src={images[currentIndex]}
        alt={altTexts[currentIndex] || `Image ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
        priority={false}
        quality={100}
        loading="lazy"
        draggable={false}
      />
      <button
        type="button"
        onClick={prevImage}
        aria-label="Previous image"
        className="bg-primary text-white95 absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full cursor-pointer hover:bg-[hsl(205,100%,35%)] active:bg-[hsl(205,100%,30%)] md:left-8 md:p-4"
      >
        <FaArrowLeft className="w-6 h-6 md:w-10 md:h-10" />
      </button>
      <button
        type="button"
        onClick={nextImage}
        aria-label="Next image"
        className="bg-primary text-white95 absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full cursor-pointer hover:bg-[hsl(205,100%,35%)] active:bg-[hsl(205,100%,30%)] md:right-8 md:p-4"
      >
        <FaArrowRight className="w-6 h-6 md:w-10 md:h-10" />
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 justify-center md:bottom-8">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-4 w-4 sm:h-6 sm:w-6 rounded-full ${
              index === currentIndex ? "bg-primary" : "bg-white25"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
