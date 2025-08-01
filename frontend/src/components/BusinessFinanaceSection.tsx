import Image from "next/image";
import React from "react";

// Define the props for the StatisticCard component
interface StatisticCardProps {
  value: string;
  label: string;
}

// Reusable StatisticCard component
const StatisticCard: React.FC<StatisticCardProps> = ({ value, label }) => (
  <div className="flex flex-col items-start p-2">
    <span className="text-2xl md:text-3xl font-bold text-gray-800">
      {value}
    </span>
    <span className="text-sm md:text-base text-gray-600">{label}</span>
  </div>
);

// Define the props for the TestimonialCard component
interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;
  imageUrl: string; // Add imageUrl prop for the main image
}

// Reusable TestimonialCard component
const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  title,
  imageUrl,
}) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col lg:flex-row p-4 md:p-8 max-w-4xl mx-auto ">
    {/* Image Section */}
    <div className="relative overflow-hidden aspect-[4/5] h-[300px] flex justify-center items-center p-4">
      <Image
        fill
        src={imageUrl}
        alt="Business founders"
        className="size-full rounded-lg object-cover w-full h-full max-h-96 lg:max-h-full"
      />
    </div>

    {/* Testimonial Content */}
    <div className="max-w-sm p-4 flex flex-col justify-between lg:-ml-36 lg:mt-32">
      <div className="relative p-6 bg-gray-50 rounded-lg shadow-inner">
        <p className="text-gray-700 italic text-base md:text-lg leading-relaxed">
          "{quote}"
        </p>
      </div>
      <div className="mt-4 text-left">
        <p className="font-semibold text-gray-800 text-lg">{author}</p>
        <p className="text-sm text-gray-600">{title}</p>
      </div>
    </div>
  </div>
);

// Main App component that combines everything
const BusinessesFinanceSection: React.FC = () => {
  // Use the uploaded image URL
  const uploadedImageUrl = "/ceos.webp";

  return (
    <div className=" bg-gray-100 font-sans p-4 md:p-8 flex items-center justify-center">
      <div className="container mx-auto bg-white rounded-2xl shadow-xl overflow-hidden p-6 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column: Testimonial and Image */}
          <div className="flex flex-col space-y-8">
            <TestimonialCard
              imageUrl={uploadedImageUrl}
              quote="Securing funding for our ecommerce company was proving to be a challenge. Through FundOnion, we were able to get our business in front of multiple lenders, each offering different terms. From there, we got to choose our best match, get funded quickly, and move on to scale our business."
              author="Tom & Stefan"
              title="Founders, Ecommerce brand"
            />
          </div>

          {/* Right Column: Business Finance Information */}
          <div className="flex flex-col space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              Businesses we help find finance for
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Our platform is specifically designed to provide for certain
              businesses. See if it'll work for you.
            </p>

            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <StatisticCard value="6 months +" label="Trading history" />
              <StatisticCard value="£50,000 +" label="Annual turnover" />
              <StatisticCard value="UK-based" label="UK HQs only" />
              <StatisticCard value="£10k - £5M" label="Funding requirement" />
            </div>

            <button className="mt-6 px-8 py-3 bg-green-600 text-white font-semibold rounded-full shadow-md hover:bg-green-700 transition duration-300 ease-in-out self-start">
              Find Funding
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessesFinanceSection;
