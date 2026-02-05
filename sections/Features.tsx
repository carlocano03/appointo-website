"use client";

import { useEffect, useRef, useState } from "react";
import { features } from "../lib/constants";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView] as const;
}

export default function WhyUseOurPlatform() {
  const [sectionRef, sectionVisible] = useInView(0.1);
  const [gridRef, gridVisible] = useInView(0.1);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-[80%] flex flex-col items-center justify-center bg-white overflow-hidden px-4 py-24"
      id="features"
    >
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Top-left blob */}
        <div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-[0.06]"
          style={{
            background: "radial-gradient(circle, #4f46e5 0%, transparent 70%)",
          }}
        />
        {/* Bottom-right blob */}
        <div
          className="absolute -bottom-40 -right-28 w-md h-112 rounded-full opacity-[0.05]"
          style={{
            background: "radial-gradient(circle, #4338ca 0%, transparent 70%)",
          }}
        />
        {/* Center faint grid lines */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #4f46e5 1px, transparent 1px), linear-gradient(to bottom, #4f46e5 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      {/* Badge */}
      <div
        className={`relative z-10 transition-all duration-700 ${
          sectionVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4"
        }`}
        style={{ transitionDelay: "0ms" }}
      >
        <span className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold tracking-widest uppercase rounded-full px-4 py-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse font-bold" />
          Why Choose Us
        </span>
      </div>

      {/* Heading */}
      <div
        className={`relative z-10 mt-5 text-center transition-all duration-700 ${
          sectionVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4"
        }`}
        style={{ transitionDelay: "120ms" }}
      >
        <h2
          className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight"
          style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
        >
          <span className="text-gray-900">Why use </span>
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #6366f1 0%, #4338ca 50%, #4f46e5 100%)",
            }}
          >
            our platform?
          </span>
        </h2>
        <p className="mt-3 text-gray-400 text-base max-w-md mx-auto font-medium">
          Everything you need — streamlined into one powerful experience.
        </p>
      </div>

      {/* Cards Grid */}
      <div
        ref={gridRef}
        className="relative z-10 w-full max-w-5xl mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
      >
        {features.map((card, i) => (
          <div
            key={card.title}
            className={`group relative bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-500 cursor-default
              ${gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
            style={{
              transition:
                "opacity 0.6s cubic-bezier(.4,0,.2,1), transform 0.6s cubic-bezier(.4,0,.2,1), box-shadow 0.4s ease",
              transitionDelay: gridVisible ? `${i * 100}ms` : "0ms",
            }}
          >
            {/* Hover top-border glow */}
            <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl bg-linear-to-r from-transparent via-indigo-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Icon circle */}
            <div
              className={`w-12 h-12 rounded-xl bg-linear-to-br ${card.iconBg} flex items-center justify-center text-white text-xl shadow-md group-hover:scale-110 transition-transform duration-400`}
              style={{ transition: "transform 0.35s cubic-bezier(.4,0,.2,1)" }}
            >
              {card.icon}
            </div>

            {/* Content */}
            <h3 className="mt-4 text-gray-900 font-bold text-base tracking-tight">
              {card.title}
            </h3>
            <p className="mt-1.5 text-gray-400 text-sm leading-relaxed">
              {card.description}
            </p>

            <div className="mt-5 w-8 h-0.5 rounded-full bg-indigo-200 group-hover:w-14 transition-all duration-500" />
          </div>
        ))}
      </div>

      {/* Bottom subtle divider */}
      <div className="relative z-10 mt-16 w-16 h-px bg-linear-to-r from-transparent via-indigo-300 to-transparent" />
    </section>
  );
}
