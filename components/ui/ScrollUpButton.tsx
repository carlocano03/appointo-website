"use client";

import { useState, useEffect, useCallback } from "react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY || document.documentElement.scrollTop;
    const docHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setVisible(scrolled > docHeight * 0.6);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      aria-label="Scroll to top"
      className={`
        fixed bottom-8 right-8 z-50
        w-12 h-12 rounded-full
        bg-white border border-gray-200
        flex items-center justify-center
        shadow-lg
        transition-all duration-500 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
        ${hovering ? "shadow-indigo-200 border-indigo-300 scale-110" : "hover:scale-105"}
      `}
      style={{
        background: hovering
          ? "linear-gradient(135deg, #6366f1, #4338ca)"
          : "white",
      }}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        className={`transition-colors duration-300 ${
          hovering ? "text-white" : "text-indigo-500"
        }`}
      >
        <path
          d="M9 13L4 8H14L9 3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform duration-300 ${
            hovering ? "translate-y-0.5" : ""
          }`}
        />
      </svg>

      <span
        className="
          absolute inset-0 rounded-full
          bg-indigo-300 opacity-0
          transition-all duration-600
        "
      />
    </button>
  );
}
