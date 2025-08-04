import React from "react";

const StatCard: React.FC<StatCardProps> = ({ value, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-4">
      <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
        {value.slice(0, -1)}
        <span className="text-[#F5D56E]">{value.slice(-1)}</span>
      </p>
      <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

// Main StatsSection Component
const StatsSection: React.FC = () => {
  const stats = [
    {
      value: "£700M+",
      description: "Funding applications",
    },
    {
      value: "52%",
      description:
        "SMEs consider only 1 finance provider - we help to scan all the options",
    },
    {
      value: "8,500+",
      description: "Users (and growing!)",
    },
    {
      value: "£0",
      description: "Our platform is free to use",
    },
  ];

  return (
    <section className="bg-[#2D6A66] py-16 px-4 sm:px-6 lg:px-8 font-sans relative overflow-hidden">
      {/* Abstract shapes for background as seen in the image */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-[#F5D56E] rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#F5D56E] rounded-full opacity-10 translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute bottom-4 right-4 text-gray-700 opacity-10">
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50 0C22.386 0 0 22.386 0 50C0 77.614 22.386 100 50 100C77.614 100 100 77.614 100 50C100 22.386 77.614 0 50 0ZM50 90C27.909 90 10 72.091 10 50C10 27.909 27.909 10 50 10C72.091 10 90 27.909 90 50C90 72.091 72.091 90 50 90Z"
            fill="currentColor"
          />
          <path
            d="M50 10C55.5228 10 60 14.4772 60 20C60 25.5228 55.5228 30 50 30C44.4772 30 40 25.5228 40 20C40 14.4772 44.4772 10 50 10Z"
            fill="currentColor"
          />
          <path
            d="M50 40C44.4772 40 40 44.4772 40 50C40 55.5228 44.4772 60 50 60C55.5228 60 60 55.5228 60 50C60 44.4772 55.5228 40 50 40Z"
            fill="currentColor"
          />
          <path
            d="M50 70C44.4772 70 40 74.4772 40 80C40 85.5228 44.4772 90 50 90C55.5228 90 60 85.5228 60 80C60 74.4772 55.5228 70 50 70Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
          FundOnion in numbers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              value={stat.value}
              description={stat.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
