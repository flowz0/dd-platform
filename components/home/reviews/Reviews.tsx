"use client";

import { useEffect, useRef, useState } from "react";
import ReviewCard from "./ReviewCard";
import { bottomRowReviews, topRowReviews } from "@/data/reviews";
import Button from "@/components/ui/Button";

export default function ReviewsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const currentSection = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        threshold: 0.15,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);
  return (
    <section ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <h2 className="text-white10 text-h3 font-bold text-center sm:text-h2">
          What Our <span className="text-primary">Customers</span> Are Saying
        </h2>
        <p className="text-white25 text-p max-w-xl text-center mt-4">
          See why homeowners and businesses trust Duct Daddy for fast, reliable, and professional duct cleaning they can count on.
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 bg-linear-[90deg,rgba(243,242,243,1)_0%,rgba(243,242,243,0)_20%,rgba(243,242,243,0)_80%,rgba(243,242,243,1)_100%]"
        />

        <div className="mt-16 w-full overflow-hidden">
          <div className={`flex gap-x-6 w-max ${inView ? "animate-scroll" : ""}`}>
            {[...topRowReviews, ...topRowReviews].map((testimonial, index) => (
              <div key={index}>
                <ReviewCard
                  review={testimonial.message}
                  reviewer={testimonial.name}
                  avatar={testimonial.avatar}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 w-full overflow-hidden">
          <div className={`flex gap-x-6 w-max ${inView ? "animate-scroll-reverse" : ""}`}>
            {[...bottomRowReviews, ...bottomRowReviews].map((testimonial, index) => (
              <div key={index}>
                <ReviewCard
                  review={testimonial.message}
                  reviewer={testimonial.name}
                  avatar={testimonial.avatar}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-12 px-6">
        <Button variant="text">Review Duct Daddy Duct Cleaning</Button>
      </div>
    </section>
  );
}