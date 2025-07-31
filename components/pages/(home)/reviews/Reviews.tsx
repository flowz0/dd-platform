"use client";

import { useEffect, useRef, useState } from "react";
import ReviewCard from "./ReviewCard";
import { bottomRowReviews, topRowReviews } from "@/data/reviews";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

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
        <Link 
          href="https://www.google.com/search?q=duct+daddy+duct+cleaning&oq=duct+daddy+duct+cleaning&gs_lcrp=EgZjaHJvbWUqCAgAEEUYJxg7MggIABBFGCcYOzIGCAEQIxgnMggIAhAAGBYYHjINCAMQABiGAxiABBiKBTINCAQQABiGAxiABBiKBTIGCAUQRRg8MgYIBhBFGD0yBggHEEUYPdIBCDQ1ODRqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8&lqi=ChhkdWN0IGRhZGR5IGR1Y3QgY2xlYW5pbmdI1bzF09mxgIAIWioQABABEAIQAxgAGAEYAhgDIhhkdWN0IGRhZGR5IGR1Y3QgY2xlYW5pbmeSARlhaXJfZHVjdF9jbGVhbmluZ19zZXJ2aWNlmgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5UVVJ2TUU0dFFYbEJSUkFCqgFbCg0vZy8xMWtxZjcycmxwCgkvbS8wZl9jN3MQATIfEAEiG3Df1FoC_yzDZU4Go9wx7upUWEq7SIEdYbwGTTIcEAIiGGR1Y3QgZGFkZHkgZHVjdCBjbGVhbmluZ-ABAPoBBAgTEDs#lkt=LocalPoiReviews&lrd=0x87c113eb4a122715:0xb52bc5120c0f274,3,,,,&rlimm=815921539135369844"
          target="_blank"
        >
          <Button Icon={FaStar} variant="text">Review Duct Daddy Duct Cleaning</Button>
        </Link>
      </div>
    </section>
  );
}