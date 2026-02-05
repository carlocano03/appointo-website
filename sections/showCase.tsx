"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { GetStartedButton } from "@/components/ui/CTAbtns";
import { Company, sampleCompaniesFormatted } from "@/lib/SampleCompanies";

function pickThree(): [Company, Company, Company] {
  const shuffled = [...sampleCompaniesFormatted].sort(
    () => Math.random() - 0.5,
  );
  return [shuffled[0], shuffled[1], shuffled[2]];
}

function TextCardStatBottom({
  company,
  visible,
}: {
  company: Company;
  visible: boolean;
}) {
  return (
    <div className="bg-[#f4f5f7] rounded-2xl p-5 flex flex-col justify-between h-full">
      <div
        className="flex flex-col justify-between h-full"
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 500ms cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <p className="text-gray-500 text-[13px] leading-relaxed">
          {company.description}
        </p>
        <div className="mt-auto pt-5">
          <p className="text-[42px] font-extrabold text-gray-900 leading-none tracking-tighter">
            {company.stat}
          </p>
          <p className="text-[15px] font-bold text-gray-800 mt-1">
            {company.statLabel}
          </p>
        </div>
      </div>
    </div>
  );
}

function TextCardStatTop({
  company,
  visible,
}: {
  company: Company;
  visible: boolean;
}) {
  return (
    <div className="bg-[#f4f5f7] rounded-2xl p-5 flex flex-col justify-between h-full">
      <div
        className="flex flex-col justify-between h-full"
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 500ms cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div>
          <p className="text-[42px] font-extrabold text-gray-900 leading-none tracking-tighter">
            {company.stat}
          </p>
          <p className="text-[15px] font-bold text-gray-800 mt-1">
            {company.statLabel}
          </p>
        </div>
        <p className="text-gray-500 text-[13px] leading-relaxed mt-auto pt-5">
          {company.description}
        </p>
      </div>
    </div>
  );
}

function ImageCardTall({
  company,
  visible,
}: {
  company: Company;
  visible: boolean;
}) {
  return (
    <div className="relative rounded-2xl overflow-hidden h-full bg-gray-200">
      <div
        className="absolute inset-0"
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 500ms cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <Image
          src={company.image}
          alt={company.title}
          fill
          sizes="(max-width:768px) 100vw, 40vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/55 via-transparent to-black/60" />

        {/* top – stat */}
        <div className="absolute top-5 left-5 right-5">
          <p className="text-[36px] font-extrabold text-white leading-none drop-shadow">
            {company.stat}
          </p>
          <p className="text-[15px] font-semibold text-white/90 mt-0.5 drop-shadow">
            {company.statLabel}
          </p>
        </div>

        {/* bottom – description */}
        <div className="absolute bottom-5 left-5 right-5">
          <p className="text-white/85 text-[13px] leading-relaxed drop-shadow">
            {company.description}
          </p>
        </div>
      </div>
    </div>
  );
}

function ImageCardShort({
  company,
  visible,
}: {
  company: Company;
  visible: boolean;
}) {
  return (
    <div className="relative rounded-2xl overflow-hidden h-full bg-gray-200">
      <div
        className="absolute inset-0"
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 500ms cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <Image
          src={company.image}
          alt={company.title}
          fill
          sizes="(max-width:768px) 100vw, 33vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/15 to-transparent" />

        {/* badge */}
        <div className="absolute top-3 left-3">
          <span className="inline-block px-2.5 py-0.5 bg-white/92 backdrop-blur-sm text-indigo-600 text-[11px] font-bold rounded-lg shadow-sm">
            {company.category}
          </span>
        </div>

        {/* bottom label */}
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-white font-bold text-[15px] leading-snug drop-shadow">
            {company.title}
          </p>
          <p className="text-white/65 text-[12px] mt-0.5 drop-shadow">
            {company.location}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function CompaniesShowcase() {
  const [displayed, setDisplayed] = useState<
    [Company, Company, Company] | null
  >(null);
  const [imgVisible, setImgVisible] = useState(true);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDisplayed(pickThree());

    const interval = setInterval(() => {
      setImgVisible(false);

      setTimeout(() => {
        setDisplayed(pickThree());
        setImgVisible(true);
      }, 250);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  if (!displayed) {
    return (
      <section className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-gray-400 text-sm">Loading…</p>
      </section>
    );
  }

  const [a, b, c] = displayed;

  return (
    <section
      className="min-h-screen bg-white py-14 px-4 sm:px-6 lg:px-8"
      id="companies"
    >
      <div className="max-w-5xl mx-auto">
        {/* ── Header ── */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-block mb-3">
            <span className="px-4 py-1.5 bg-indigo-100 text-indigo-700 text-xs font-bold rounded-full tracking-wide uppercase">
              lorem ipsum
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
            Trusted Companies
          </h1>
          <p className="text-base sm:text-lg text-gray-500 max-w-xl mx-auto">
            Explore our comprehensive suite of companies tailored for various
            industries
          </p>
        </div>

        {/* ── Get Started Btn ── */}
        <div className="flex justify-center mb-10 sm:mb-12">
          <GetStartedButton />
        </div>

        <div
          className="grid gap-3 sm:grid-cols-3 sm:grid-rows-[1fr_1fr]"
          style={{ minHeight: "clamp(380px, 55vw, 520px)" }}
        >
          {/* – top-left TEXT */}
          <div
            className="sm:col-start-1 sm:row-start-1 rounded-2xl overflow-hidden"
            style={{ minHeight: 160 }}
          >
            <TextCardStatBottom company={a} visible={imgVisible} />
          </div>

          {/* – CENTER tall IMAGE */}
          <div
            className="sm:col-start-2 sm:row-start-1 sm:row-end-3 rounded-2xl overflow-hidden"
            style={{ minHeight: 300 }}
          >
            <ImageCardTall company={b} visible={imgVisible} />
          </div>

          {/* – top-right IMAGE */}
          <div
            className="sm:col-start-3 sm:row-start-1 rounded-2xl overflow-hidden"
            style={{ minHeight: 160 }}
          >
            <ImageCardShort company={c} visible={imgVisible} />
          </div>

          {/* – bottom-left IMAGE */}
          <div
            className="sm:col-start-1 sm:row-start-2 rounded-2xl overflow-hidden"
            style={{ minHeight: 160 }}
          >
            <ImageCardShort company={a} visible={imgVisible} />
          </div>

          {/* – bottom-right TEXT */}
          <div
            className="sm:col-start-3 sm:row-start-2 rounded-2xl overflow-hidden"
            style={{ minHeight: 160 }}
          >
            <TextCardStatTop company={c} visible={imgVisible} />
          </div>
        </div>
      </div>
    </section>
  );
}
