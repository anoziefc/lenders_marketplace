"use client";
import {Settings2} from "lucide-react";
import React from "react";
import Link from "next/link";

const NoResultsSection: React.FC = () => {
  return (<div
      className="
          relative
          flex flex-col justify-center items-start
          py-9 p-6 sm:p-8 md:p-10 lg:p-12
          bg-[#2F7061] text-white
          lg:w-3/5 xl:w-2/3
          z-10
          rounded-t-3xl lg:rounded-tr-none lg:rounded-l-3xl
        "
  >
    {/* Abstract pattern in the top-left corner of the dark section */}
    <div className="absolute top-0 left-0 w-24 h-24 sm:w-32 sm:h-32 opacity-20">
      <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
      >
        <path
            d="M0 50C0 22.3858 22.3858 0 50 0V0C77.6142 0 100 22.3858 100 50V100H0V50Z"
            fill="currentColor"
        />
        <path
            d="M10 50C10 27.9086 27.9086 10 50 10V10C72.0914 10 90 27.9086 90 50V90H10V50Z"
            fill="currentColor"
        />
      </svg>
    </div>

    {/* Main heading */}
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
      We found no results.
    </h2>
    {/* Subheading */}
    <p className="text-base sm:text-lg md:text-xl opacity-90 mb-6 sm:mb-8">
      You&apos;ll get more results with a lower request amount.
    </p>
    {/* Adjust search button */}
    <Link href="/journey">
      <button
          className="
            flex items-center justify-center
            bg-[#FF69B4] hover:bg-[#E05C9D]
            text-white font-semibold
            py-3 px-6 sm:py-3.5 sm:px-7
            rounded-full shadow-md transition-colors duration-300
            space-x-2 cusor-pointer
          "
      >
        <span className="mr-2">Adjust Your Search</span>
        <Settings2/>
      </button>
    </Link>
  </div>)
}

export default NoResultsSection;
