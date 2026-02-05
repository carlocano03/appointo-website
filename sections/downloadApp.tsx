"use client";

import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView] as const;
}

function AppleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function GooglePlayIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3,20.5v-17c0-0.59,0.34-1.11,0.84-1.35L13.69,12l-9.85,9.85C3.34,21.61,3,21.09,3,20.5z M17.81,16.12l2.16,2.16c0.51,0.51,0.51,1.34,0,1.85c-0.25,0.25-0.58,0.38-0.92,0.38s-0.67-0.13-0.92-0.38l-2.16-2.16L13.69,20.2l-1.15-1.15l2.16-2.16l-2.16-2.16l1.15-1.15l2.16,2.16l2.16-2.16l1.15,1.15L17.81,16.12z M5.61,4.28L16.31,11l-2.78,2.78L5.61,4.28z" />
    </svg>
  );
}

export default function DownloadSection() {
  const [ref, visible] = useInView(0.2);

  return (
    <section className="relative w-full overflow-hidden py-24 px-4">
      <div className="absolute inset-0 bg-indigo-950" />
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-28 -left-28 w-96 h-96 rounded-full opacity-[0.12]"
          style={{
            background: "radial-gradient(circle, #6366f1 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-32 -right-24 w-104 h-104 rounded-full opacity-[0.1]"
          style={{
            background: "radial-gradient(circle, #4f46e5 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-160 h-160 rounded-full opacity-[0.04]"
          style={{
            background: "radial-gradient(circle, #a5b4fc 0%, transparent 60%)",
          }}
        />
      </div>

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #a5b4fc 1px, transparent 1px), linear-gradient(to bottom, #a5b4fc 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div
        ref={ref}
        className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center"
      >
        <div
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"
          }`}
        >
          <span className="inline-flex items-center gap-2 bg-indigo-900 border border-indigo-700 text-indigo-300 text-xs font-bold tracking-widest uppercase rounded-full px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            Get the App
          </span>
        </div>

        {/* Heading */}
        <h2
          className={`mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          Take it with you{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #a5b4fc 0%, #6366f1 100%)",
            }}
          >
            everywhere
          </span>
        </h2>

        {/* Sub */}
        <p
          className={`mt-3 text-indigo-300 text-base max-w-md mx-auto font-medium leading-relaxed transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          Download our app and find the right company on the go — fast, easy,
          and completely free.
        </p>

        {/* ── Store Buttons ── */}
        <div
          className={`mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "320ms" }}
        >
          {/* App Store */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-white text-gray-900 rounded-xl px-6 py-3.5 shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
          >
            <span className="text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
              <AppleIcon />
            </span>
            <div className="text-left">
              <p className="text-[9px] font-semibold tracking-wider text-gray-400 uppercase leading-none">
                Download on the
              </p>
              <p className="text-[17px] font-bold tracking-tight text-gray-900 leading-snug">
                App Store
              </p>
            </div>
          </a>

          {/* Google Play */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-white text-gray-900 rounded-xl px-6 py-3.5 shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
          >
            <span className="text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
              <GooglePlayIcon />
            </span>
            <div className="text-left">
              <p className="text-[9px] font-semibold tracking-wider text-gray-400 uppercase leading-none">
                Get it on
              </p>
              <p className="text-[17px] font-bold tracking-tight text-gray-900 leading-snug">
                Google Play
              </p>
            </div>
          </a>
        </div>

        {/* ── Trust line ── */}
        <div
          className={`mt-8 flex items-center justify-center gap-6 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
          style={{ transitionDelay: "440ms" }}
        >
          <span className="text-indigo-400 text-xs font-medium flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2 7.5L5.5 11L12 3.5"
                stroke="#818cf8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Free to download
          </span>
          <span className="w-px h-3 bg-indigo-800" />
          <span className="text-indigo-400 text-xs font-medium flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2 7.5L5.5 11L12 3.5"
                stroke="#818cf8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            No account required
          </span>
          <span className="w-px h-3 bg-indigo-800" />
          <span className="text-indigo-400 text-xs font-medium flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2 7.5L5.5 11L12 3.5"
                stroke="#818cf8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            4.8★ rated
          </span>
        </div>
      </div>
    </section>
  );
}
