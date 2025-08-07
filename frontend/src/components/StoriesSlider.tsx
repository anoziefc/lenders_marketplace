"use client";
import Image from "next/image";
import React, {useEffect, useState} from "react";

// TestimonialCard Component: Displays a single client testimonial
const TestimonialCard: React.FC<Testimonial> = ({
                                                    logo,
                                                    quote,
                                                    author,
                                                    title
                                                }) => (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg flex flex-col items-start h-full">
        {/* Client Logo */}
        <Image width={150} height={150} src={logo} alt="Client Logo" className="h-10 mb-4 object-contain"/>

        {/* Testimonial Quote */}
        <p className="text-gray-700 text-base md:text-lg mb-6 flex-grow">
            &quot;{quote}&quot;
        </p>

        {/* Author Information */}
        <div className="flex items-center mt-auto">
            {/* Author Avatar (Placeholder) */}
            <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 flex items-center justify-center overflow-hidden">
                {/* You can replace this with an actual image if available */}
                <Image
                    src={`https://placehold.co/48x48/E0E0E0/333333?text=${author.charAt(
                        0
                    )}`}
                    width={48}
                    height={48}
                    alt={author}
                    className="object-cover w-full h-full"
                />
            </div>
            <div>
                <p className="font-semibold text-gray-900 text-base">{author}</p>
                <p className="text-gray-500 text-sm">{title}</p>
            </div>
        </div>

        {/* Read More Link */}
        <a
            href="#"
            className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-4"
        >
            Read More &gt;
        </a>
    </div>
);

// ClientSuccessStories Component: Manages the slider and displays testimonials
const ClientSuccessStories: React.FC = () => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        // This code will only run on the client side
        setWidth(window.innerWidth);
    }, []);

    // Mock data for testimonials
    const testimonials: Testimonial[] = [
        {
            id: 1,
            logo: "https://placehold.co/150x40/FFFFFF/000000?text=SIMPLEFFICIENT%C2%AE", // Placeholder for SimpleEfficient logo
            quote:
                "I honestly didn't think funding was an option for me, but my broker Archie proved me wrong. In just two days, I had the loan I needed to get back on track financially and invest in growing my educational program. Profit First. It's something I'm incredibly proud of and believe will be life-changing for so many.",
            author: "Steph Jones",
            title: "Founder, Simplefficient Bookkeeping"
        },
        {
            id: 2,
            logo: "https://placehold.co/150x40/FFFFFF/000000?text=LTSupport", // Placeholder for LTSupport logo
            quote:
                "I was amazed by how quickly Contigo made things happen for us. Our funding was secured within a week of chatting to James at the GBEA Awards. This let us step up our game at recruitment fairs almost immediately and grow our program to donate much needed resources to schools. We're really excited to build a long-term partnership with the Contigo Team.",
            author: "Laura Tanner",
            title: "Founder, LT Support"
        },
        {
            id: 3,
            logo: "https://placehold.co/150x40/FFFFFF/000000?text=Client+C",
            quote:
                "This service exceeded all my expectations. The team was incredibly supportive and helped us achieve our goals much faster than we anticipated. Highly recommend!",
            author: "John Doe",
            title: "CEO, Innovate Corp"
        },
        {
            id: 4,
            logo: "https://placehold.co/150x40/FFFFFF/000000?text=Client+D",
            quote:
                "A truly transformative experience. The insights provided were invaluable, leading to significant growth and efficiency improvements for our business.",
            author: "Jane Smith",
            title: "Director, Global Solutions"
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    // Function to navigate to the previous slide
    const goToPrevious = () => {
        setCurrentSlide((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    // Function to navigate to the next slide
    const goToNext = () => {
        setCurrentSlide((prev) =>
            prev === testimonials.length - 1 ? 0 : prev + 1
        );
    };

    // Determine how many cards to show based on screen size
    const getVisibleCards = () => {
        if (width >= 1024) {
            // Large screens (lg)
            return 2;
        } else if (width >= 768) {
            // Medium screens (md)
            return 1; // Show 1 card on medium screens, but centered
        } else {
            // Small screens
            return 1;
        }
    };

    const visibleCards = getVisibleCards();

    // Calculate the start index for the visible cards
    const startIndex = currentSlide;

    return (
        <section className="py-16 bg-gray-50 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-0">
                        Client Success Stories
                    </h2>
                    <button
                        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition duration-300 ease-in-out">
                        Find Funding
                    </button>
                </div>

                {/* Slider Container */}
                <div className="relative">
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{
                                transform: `translateX(-${startIndex * (100 / visibleCards)}%)`
                            }}
                        >
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="w-full flex-shrink-0 p-4"
                                    style={{flexBasis: `${100 / visibleCards}%`}} // Distribute width based on visible cards
                                >
                                    <TestimonialCard {...testimonial} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={goToPrevious}
                        className="absolute top-1/2 left-0 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 z-10 ml-4"
                        aria-label="Previous testimonial"
                    >
                        {/* Left Arrow SVG Icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-gray-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </button>
                    <button
                        onClick={goToNext}
                        className="absolute top-1/2 right-0 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 z-10 mr-4"
                        aria-label="Next testimonial"
                    >
                        {/* Right Arrow SVG Icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-gray-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>
                </div>

                {/* Dot Indicators */}
                <div className="flex justify-center mt-8 space-x-2">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`h-3 w-3 rounded-full transition-colors duration-300 ease-in-out ${
                                index === currentSlide
                                    ? "bg-blue-600"
                                    : "bg-gray-300 hover:bg-gray-400"
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        ></button>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Main App component to render the ClientSuccessStories
const StoriesSlide: React.FC = () => {
    // Add Tailwind CSS script for JIT compilation
    React.useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://cdn.tailwindcss.com";
        document.head.appendChild(script);
        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 antialiased">
            {/* You can add a header or other content here */}
            <ClientSuccessStories/>
            {/* You can add a footer or other content here */}
        </div>
    );
};

export default StoriesSlide;
