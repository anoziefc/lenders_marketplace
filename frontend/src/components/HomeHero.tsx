"use client";
import Image from "next/image";
import React from "react";

const HomeHero: React.FC = () => {
    return (
        <section className="bg-teal-900 text-white py-16 px-6 md:px-20 relative overflow-hidden">
            <div className="max-w-5xl mx-auto flex flex-col lg:flex-row justify-between items-start">
                {/* Left Text Content */}
                <div className="lg:w-1/2 space-y-6 z-10">
                    <h1 className="text-3xl md:text-4xl font-bold leading-snug">
                        The UK&apos;s only business<br/>
                        finance platform to instantly<br/>
                        match you with funders and<br/>
                        compare <span className="text-yellow-400">profile</span>
                    </h1>

                    <p className="text-sm md:text-base text-gray-200">
                        Find your business funding options in under 90 seconds -<br/>
                        no hidden costs, no obligation, no impact to your credit score.
                    </p>

                    <button
                        className="bg-yellow-400 text-black font-semibold py-2 px-6 rounded-full hover:bg-yellow-300 transition">
                        Find Funding
                    </button>

                    {/* Government & Partners */}
                    <div>
                        <Image
                            height={32}
                            width={32}
                            src="https://cdn.prod.website-files.com/60d7496b30047b8555d83cf0/62b2e577527a94f91c33b7c2_Desktop%20Final-min-p-1600.avif"
                            alt="Gov Certified"
                            className="h-8 mt-4"
                        />
                    </div>

                    {/* Featured In */}
                    <div className="mt-6 space-y-2">
                        <p className="uppercase text-sm text-gray-300">As seen in</p>
                        <div className="flex flex-col space-y-1 text-white">
                            <span className="font-serif">The Fintech Times</span>
                            <span className="font-serif">The Independent</span>
                            <span className="font-serif">The Times</span>
                        </div>
                    </div>
                </div>

                {/* Right Side Images */}
                <div className="hidden lg:block lg:w-1/2 relative">
                    {/* Replace with actual images or mobile mockups */}
                    <div
                        className="absolute top-0 right-0 w-[250px] h-[500px] bg-white rounded-xl shadow-2xl transform rotate-[15deg]">
                        <p className="text-black p-4">
                            <Image
                                src="https://cdn.prod.website-files.com/60d7496b30047b8555d83cf0/62b2e577527a94f91c33b7c2_Desktop%20Final-min-p-1600.avif"
                                alt="Gov Certified"
                                width={500}
                                height={500}
                                className="h-8 mt-4"
                            />
                        </p>
                    </div>
                    <div
                        className="absolute bottom-0 right-10 w-[220px] h-[400px] bg-white rounded-xl shadow-xl transform rotate-[5deg]">
                        <p className="text-black p-4">
                            <Image
                                src="https://cdn.prod.website-files.com/60d7496b30047b8555d83cf0/62b2e577527a94f91c33b7c2_Desktop%20Final-min-p-1600.avif"
                                alt="Gov Certified"
                                width={500}
                                height={500}
                                className="h-8 mt-4"
                            />
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeHero;
