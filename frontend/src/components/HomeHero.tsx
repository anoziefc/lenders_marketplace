"use client";
import Image from "next/image";
import React from "react";

const HomeHero: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#1A4738] text-white flex items-center justify-center p-4 sm:p-8 lg:p-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
        {/* Left Content Section */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 rounded-lg">
            The UK's only business finance platform to instantly match you with
            funders and compare{" "}
            <span className="text-[#FFD700]">profiles.</span>
          </h1>
          <p className="text-base sm:text-lg mb-8 text-gray-300 rounded-lg">
            Find your business funding options in under 90 seconds - no hidden
            costs, no obligation, no impact to your credit score.
          </p>
          <button className="bg-[#FFD700] text-[#1A4738] font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-400 transition duration-300 ease-in-out">
            Find Funding
          </button>

          <div className="mt-12 w-full">
            <p className="text-sm text-gray-400 mb-4 rounded-lg">As seen in</p>
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6">
              {/* Placeholder for logos - In a real HomeHero, these would be SVG or image components */}
              <div className="h-8 sm:h-10 w-auto relative aspect-square">
                <Image
                  src="/not-found.jpg"
                  alt="The Fintech Times Logo"
                  fill
                  className="rounded-lg"
                />
              </div>
              <div className="h-8 sm:h-10 w-auto relative aspect-square">
                <Image
                  src="/not-found.jpg"
                  alt="The Independent Logo"
                  fill
                  className="rounded-lg"
                />
              </div>
              <div className="h-8 sm:h-10 w-auto relative aspect-square">
                <Image
                  src="/not-found.jpg"
                  alt="The Times Logo"
                  fill
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Content Section - Mobile Mockups Placeholder */}
        <div className="flex-shrink-0 mt-12 lg:mt-0 w-full max-w-sm">
          <div className="w-full aspect-square relative">
            <Image
              src="/not-found.jpg"
              alt="Mobile HomeHero Mockups"
              fill
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
