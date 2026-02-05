"use client";
import Header from "@/components/header";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/About Us";
import Footer from "@/components/footer";
import TestimonialsSection from "@/sections/testimonials";
import SystemsShowcase from "@/sections/showCase";
import WhyUseOurPlatform from "@/sections/Features";
import ScrollToTopButton from "@/components/ui/ScrollUpButton";
import DownloadSection from "@/sections/downloadApp";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <WhyUseOurPlatform />
      <AboutSection />
      <SystemsShowcase />
      <DownloadSection />
      <TestimonialsSection />
      <Footer />

      <ScrollToTopButton />
    </main>
  );
}
