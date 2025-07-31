"use client";
import { Settings2 } from "lucide-react";
import Image from "next/image";
import React from "react";

const NoResultsSection: React.FC = () => {
  return (
    <div className="flex items-center justify-center font-inter">
      {/* Main container for the card */}
      <div
        className="
        relative
        flex flex-col lg:flex-row
        w-full max-w-6xl
        bg-white rounded-3xl shadow-xl overflow-hidden
        min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[400px]
      "
      >
        {/* Left section: Text content and button */}
        <div
          className="
          relative
          flex flex-col justify-center items-start
          p-6 sm:p-8 md:p-10 lg:p-12
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
            You'll get more results with a lower request amount.
          </p>
          {/* Adjust search button */}
          <button
            className="
            flex items-center justify-center
            bg-[#FF69B4] hover:bg-[#E05C9D]
            text-white font-semibold
            py-3 px-6 sm:py-3.5 sm:px-7
            rounded-full shadow-md transition-colors duration-300
            space-x-2
          "
          >
            <span className="mr-2">Adjust Your Search</span>
            <Settings2 />
          </button>
        </div>

        {/* Right section: Image and background patterns */}
        <div
          className="
          relative
          flex-1
          bg-[#FCE3B0]
          lg:w-2/5 xl:w-1/3
          rounded-b-3xl lg:rounded-bl-none lg:rounded-r-3xl
          overflow-hidden
          min-h-[200px] lg:min-h-auto
        "
        >
          {/* Image of the man */}
          <div className="h-full w-full">
            <Image src={"/not-found.jpg"} fill alt="" />
          </div>

          {/* Abstract patterns on the right side */}
          {/* Top right pattern */}
          <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 opacity-20">
            <svg
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50C100 77.6142 77.6142 100 50 100V100C22.3858 100 0 77.6142 0 50V0H100V50Z"
                fill="currentColor"
              />
              <path
                d="M90 50C90 72.0914 72.0914 90 50 90V90C27.9086 90 10 72.0914 10 50V10H90V50Z"
                fill="currentColor"
              />
            </svg>
          </div>
          {/* Bottom right pattern */}
          <div className="absolute bottom-0 right-0 w-24 h-24 sm:w-32 sm:h-32 opacity-20">
            <svg
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50C100 22.3858 77.6142 0 50 0V0C22.3858 0 0 22.3858 0 50V100H100V50Z"
                fill="currentColor"
              />
              <path
                d="M90 50C90 27.9086 72.0914 10 50 10V10C27.9086 10 10 27.9086 10 50V90H90V50Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NoResultsSection;
