"use client";

import React, { useState, useMemo } from "react";
import {
  Search,
  MapPin,
  Phone,
  X,
  Filter,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Header from "@/components/header";
import { sampleCompaniesFormatted } from "@/lib/SampleCompanies";
import Image from "next/image";
import Footer from "@/components/footer";

const categories = [
  "All",
  "Technology",
  "Consulting",
  "Finance",
  "Healthcare",
  "Construction",
  "Legal",
  "Marketing",
  "Logistics",
  "Education",
];

const ITEMS_PER_PAGE = 9;

export default function CompaniesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    "All",
  ]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const handleCategoryToggle = (category: string) => {
    if (category === "All") {
      setSelectedCategories(["All"]);
    } else {
      const newCategories = selectedCategories.filter((c) => c !== "All");
      if (selectedCategories.includes(category)) {
        const filtered = newCategories.filter((c) => c !== category);
        setSelectedCategories(filtered.length === 0 ? ["All"] : filtered);
      } else {
        setSelectedCategories([...newCategories, category]);
      }
    }
    setCurrentPage(1);
  };

  const filteredCompanies = useMemo(() => {
    return sampleCompaniesFormatted.filter((company) => {
      const matchesSearch =
        company.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        company.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        company.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategories.includes("All") ||
        selectedCategories.includes(company.category);

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategories]);

  const totalPages = Math.ceil(filteredCompanies.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentCompanies = filteredCompanies.slice(startIndex, endIndex);
  const showPagination = filteredCompanies.length > ITEMS_PER_PAGE;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const clearSearch = () => {
    setSearchTerm("");
    setCurrentPage(1);
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 ">
          {/* Hero Banner */}
          <div className="relative bg-linear-to-r from-gray-900 via-gray-800 to-indigo-900 overflow-hidden rounded-2xl mb-10 mt-10">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzBoNHYzMGgtNHpNMCAzMGg0djMwSDB6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
            </div>
            <div className="px-6 sm:px-8 lg:px-12 py-12 lg:py-16 relative">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                    Discover Trust
                    <br />
                    <span className="text-indigo-400">
                      Your Problems, Our Solutions
                    </span>
                  </h1>
                  <p className="text-gray-300 text-base lg:text-lg mb-6">
                    Trusted Partners Helping You Solve Challenges Effortlessly.
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Filter Toggle Button */}
          <div className="lg:hidden mb-6">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors shadow-sm"
            >
              <Filter className="w-4 h-4" />
              <span className="font-medium text-sm">Filters</span>
              {selectedCategories.filter((c) => c !== "All").length > 0 && (
                <span className="ml-1 px-2 py-0.5 bg-indigo-600 text-white text-xs rounded-full">
                  {selectedCategories.filter((c) => c !== "All").length}
                </span>
              )}
            </button>
          </div>

          {/* Main Content Layout */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <aside
              className={`lg:w-72 shrink-0 lg:block ${
                isSidebarOpen ? "block" : "hidden"
              }`}
            >
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-6">
                <div className="flex items-center justify-between mb-6 lg:hidden">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Filters
                  </h3>
                  <button
                    onClick={() => setIsSidebarOpen(false)}
                    className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-500" />
                  </button>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-5 hidden lg:block">
                  Filters
                </h3>

                {/* Search */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Search
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search companies..."
                      value={searchTerm}
                      onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setCurrentPage(1);
                      }}
                      className="w-full pl-10 pr-10 py-2.5 text-sm rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 focus:outline-none text-gray-900 placeholder-gray-400 bg-gray-50 transition-all"
                    />
                    {searchTerm && (
                      <button
                        onClick={clearSearch}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Categories */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Categories
                  </label>
                  <div className="space-y-2.5">
                    {categories.map((category) => (
                      <label
                        key={category}
                        className="flex items-center gap-3 cursor-pointer group py-1.5 px-2 -mx-2 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(category)}
                          onChange={() => handleCategoryToggle(category)}
                          className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 focus:ring-2 cursor-pointer transition-all"
                        />
                        <span className="text-sm text-gray-700 group-hover:text-gray-900 font-medium transition-colors select-none">
                          {category}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div className="pt-5 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-600">Results</p>
                    <span className="text-lg font-bold text-gray-900">
                      {filteredCompanies.length}
                    </span>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              {currentCompanies.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                    {currentCompanies.map((company) => (
                      <div
                        key={company.id}
                        className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-200"
                      >
                        <div className="relative h-36 overflow-hidden bg-gray-100">
                          <Image
                            src={company.image}
                            alt={company.title}
                            width={400}
                            height={144}
                            className="w-full h-auto"
                          />
                          <div className="absolute top-3 right-3">
                            <span className="inline-block px-2.5 py-1 bg-white text-gray-700 text-xs font-medium rounded shadow-sm">
                              {company.category}
                            </span>
                          </div>
                        </div>

                        <div className="p-4">
                          <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-1">
                            {company.title}
                          </h3>

                          <div className="space-y-2 mb-3">
                            <div className="flex items-center gap-2 text-xs text-gray-600">
                              <MapPin className="w-3.5 h-3.5 shrink-0" />
                              <span className="line-clamp-1">
                                {company.location}
                              </span>
                            </div>

                            <div className="flex items-center gap-2 text-xs text-gray-600">
                              <Phone className="w-3.5 h-3.5 shrink-0" />
                              <a
                                href={`tel:${company.contact}`}
                                className="hover:text-indigo-600 transition-colors"
                              >
                                {company.contact}
                              </a>
                            </div>
                          </div>

                          <p className="text-xs text-gray-600 leading-relaxed mb-4 line-clamp-2">
                            {company.description}
                          </p>

                          <button className="w-full bg-gray-900 hover:bg-indigo-600 text-white text-sm font-medium py-2.5 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                            Visit
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Pagination */}
                  {showPagination && (
                    <div className="mt-10 flex items-center justify-center gap-2">
                      {/* Prev Btn */}
                      <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`p-2 rounded-lg border transition-all ${
                          currentPage === 1
                            ? "border-gray-200 text-gray-400 cursor-not-allowed"
                            : "border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400"
                        }`}
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>

                      {/* Page Numbers */}
                      <div className="flex items-center gap-1">
                        {getPageNumbers().map((page, index) => (
                          <React.Fragment key={index}>
                            {page === "..." ? (
                              <span className="px-3 py-2 text-gray-400">
                                ...
                              </span>
                            ) : (
                              <button
                                onClick={() => handlePageChange(page as number)}
                                className={`min-w-10 px-3 py-2 rounded-lg font-medium transition-all ${
                                  currentPage === page
                                    ? "bg-indigo-600 text-white shadow-sm"
                                    : "text-gray-700 hover:bg-gray-100 border border-gray-200"
                                }`}
                              >
                                {page}
                              </button>
                            )}
                          </React.Fragment>
                        ))}
                      </div>

                      {/* Next Btn */}
                      <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`p-2 rounded-lg border transition-all ${
                          currentPage === totalPages
                            ? "border-gray-200 text-gray-400 cursor-not-allowed"
                            : "border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400"
                        }`}
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-20">
                  <div className="bg-white rounded-lg shadow-sm p-10 max-w-md mx-auto border border-gray-100">
                    <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      No companies found
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Try adjusting your search or filter criteria
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
