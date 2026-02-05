"use client";
import React from "react";
import Image from "next/image";
import { Facebook, Twitter, Instagram } from "lucide-react";

const AboutSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-12 items-center ">
          <div className="space-y-6 order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Take your business to the next level
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <button className="bg-indigo-800 hover:bg-gray-900 text-white font-semibold px-8 py-3 rounded transition-colors duration-200">
              Read More
            </button>

            <div className="flex gap-4 pt-4">
              <a
                href="#"
                className="text-black hover:text-indigo-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-black hover:text-indigo-700 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-black hover:text-indigo-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative order-1 lg:order-2">
            <div className="relative h-100 md:h-125 rounded-lg overflow-hidden">
              <Image
                src="/images/teams.jpg"
                alt="Professional working on laptop"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 90vw, 90vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
