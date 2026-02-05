import React from "react";
import Link from "next/link";

export const GetStartedButton = () => {
  return (
    <Link href="/CompaniesDirectory">
      <button className="bg-indigo-600 text-white text-sm font-semibold px-5 py-3 cursor-pointer rounded-md shadow-sm transition-all duration-300 hover:bg-indigo-500 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500">
        Get Started
      </button>
    </Link>
  );
};
