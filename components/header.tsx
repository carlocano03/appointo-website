"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Make sure lucide-react is installed
import navItems from "@/lib/constants";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md  w-full z-123231 fixed">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <Link href="/" className="text-indigo-600 font-bold text-xl ">
              Appointo
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-bold transition-colors duration-300 "
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/get-started"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium  transition-colors duration-300  hover:bg-orange-700 hover:pointer hover:shadow-lg"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-gray-700 hover:text-indigo-600 px-3 py-2 text-base font-medium transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/get-started"
              className="block bg-indigo-600 text-white px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-700 transition-colors duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
