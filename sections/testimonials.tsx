"use client";

import React, { useEffect, useRef, useState } from "react";
import { testimonials, Testimonial } from "@/lib/SampleTestimonials";

export default function TestimonialsSection() {
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const leftColumn = leftColumnRef.current;
    const rightColumn = rightColumnRef.current;

    if (!leftColumn || !rightColumn) return;

    let intervalId: NodeJS.Timeout;

    setTimeout(() => {
      if (rightColumn) {
        rightColumn.scrollTop = rightColumn.scrollHeight / 2;
      }
    }, 50);

    const startScrolling = () => {
      intervalId = setInterval(() => {
        if (!isPaused && leftColumn && rightColumn) {
          leftColumn.scrollTop += 1;

          const leftMaxScroll = leftColumn.scrollHeight / 2;
          if (leftColumn.scrollTop >= leftMaxScroll) {
            leftColumn.scrollTop = 1;
          }
          rightColumn.scrollTop -= 1;

          if (rightColumn.scrollTop <= 1) {
            rightColumn.scrollTop = rightColumn.scrollHeight / 2;
          }
        }
      }, 20);
    };

    setTimeout(startScrolling, 100);

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isPaused]);

  const leftTestimonials = testimonials.filter((_, index) => index % 2 === 0);
  const rightTestimonials = testimonials.filter((_, index) => index % 2 === 1);

  const duplicatedLeft = [
    ...leftTestimonials,
    ...leftTestimonials,
    ...leftTestimonials,
  ];
  const duplicatedRight = [
    ...rightTestimonials,
    ...rightTestimonials,
    ...rightTestimonials,
  ];

  const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
    <div className="bg-white rounded-2xl p-5 border-2 border-indigo-100 hover:border-indigo-300 hover:shadow-lg transition-all duration-300 group">
      <div className="flex items-center gap-3 mb-3">
        <div
          className={`w-12 h-12 rounded-full ${testimonial.avatarColor} flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform duration-300`}
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="min-w-0">
          <h3 className="font-semibold text-gray-900 text-sm truncate">
            {testimonial.name}
          </h3>
          <div className="flex gap-0.5 mt-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-3 h-3 text-yellow-400 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-700 text-sm leading-relaxed">
        {testimonial.content}
      </p>
    </div>
  );

  return (
    <div className="min-h-screen bg-white from-indigo-50 via-white to-indigo-50 flex items-center justify-center p-8 ">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 ">
        {/* Left Side - Title */}
        <div className="flex flex-col justify-center order-1 ">
          <div className="inline-block mb-4">
            <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold">
              ⭐ Testimonials
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            What our{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-indigo-400">
              users
            </span>
            <br />
            are saying
          </h2>
          <p className="text-gray-600 text-lg max-w-md leading-relaxed">
            See how our users are leveraging our platform to enhance their
            workflow and achieve remarkable results with ease.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full bg-indigo-500 border-2 border-white" />
              <div className="w-10 h-10 rounded-full bg-indigo-600 border-2 border-white" />
              <div className="w-10 h-10 rounded-full bg-indigo-700 border-2 border-white" />
              <div className="w-10 h-10 rounded-full bg-indigo-400 border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                +50
              </div>
            </div>
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-gray-900">
                500+ happy users
              </span>
              <br />
              and counting
            </p>
          </div>
        </div>

        {/* Right Side - Dual Scrolling Columns */}
        <div
          className="relative h-175 overflow-hidden order-2"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="grid grid-cols-2 gap-4 h-full">
            {/* Left Column - Scrolls UP ⬆️ */}
            <div
              ref={leftColumnRef}
              className="h-full overflow-y-scroll scrollbar-hide"
              style={{ scrollBehavior: "auto" }}
            >
              <div className="space-y-4 pb-6">
                {duplicatedLeft.map((testimonial, index) => (
                  <TestimonialCard
                    key={`left-${testimonial.id}-${index}`}
                    testimonial={testimonial}
                  />
                ))}
              </div>
            </div>

            {/* Right Column - Scrolls DOWN ⬇️ */}
            <div
              ref={rightColumnRef}
              className="h-full overflow-y-scroll scrollbar-hide"
              style={{ scrollBehavior: "auto" }}
            >
              <div className="space-y-4 pb-6">
                {duplicatedRight.map((testimonial, index) => (
                  <TestimonialCard
                    key={`right-${testimonial.id}-${index}`}
                    testimonial={testimonial}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Gradient Overlays */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-white via-indigo/100 to-transparent pointer-events-none z-10" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-white via-indigo/80 to-transparent pointer-events-none z-10" />
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
