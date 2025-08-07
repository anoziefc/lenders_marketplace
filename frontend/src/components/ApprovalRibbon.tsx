import React from "react";

const ApprovalRibbon: React.FC = () => {
  return (
   
    <section className="relative bg-[#004746] py-16 lg:py-24 overflow-hidden text-white font-sans">
      {/* Absolute positioned background patterns and circles */}

      {/* Top-left pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <svg
          className="absolute top-[-100px] left-[-100px] md:top-[-200px] md:left-[-200px] w-[500px] h-[500px] md:w-[800px] md:h-[800px]"
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M375.922 238.99C418.539 275.875 431.139 337.87 400.932 386.326C370.725 434.783 301.761 454.437 259.144 417.552C216.528 380.667 203.927 318.672 234.135 270.216C264.342 221.76 333.306 202.106 375.922 238.99Z"
            stroke="white"
            strokeWidth="3"
          />
          <path
            d="M366.196 230.134C408.813 267.019 421.413 329.014 391.206 377.47C361 425.927 292.036 445.581 249.42 408.696C206.803 371.811 194.202 309.816 224.41 261.36C254.617 212.903 323.581 193.249 366.196 230.134Z"
            stroke="white"
            strokeWidth="2"
          />
          <path
            d="M356.471 221.278C399.087 258.163 411.687 320.158 381.481 368.614C351.274 417.071 282.31 436.725 239.694 399.84C197.077 362.955 184.476 300.96 214.684 252.504C244.891 204.047 313.855 184.393 356.471 221.278Z"
            stroke="white"
          />
          <path
            d="M346.746 212.422C389.362 249.307 401.962 311.302 371.755 359.758C341.549 408.215 272.585 427.869 229.968 390.984C187.352 354.099 174.751 292.104 204.959 243.648C235.166 195.191 304.13 175.537 346.746 212.422Z"
            stroke="white"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      {/* Large circle top-right */}
      <div className="absolute top-[-100px] right-[-100px] size-50 sm:size-82   bg-[#E8C28A] rounded-full"></div>

      {/* Large circle bottom-center */}
      <div className="absolute bottom-[-200px] md:bottom-[-250px] left-1/2 -translate-x-1/2 w-96 h-96 md:w-[600px] md:h-[600px] bg-[#E8C28A] rounded-full"></div>

      {/* Content wrapper for responsive layout */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Text content block */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Contigo <span className="text-[#E8C28A]">doubles</span> your
            chance of approval.
          </h1>
          <p className="text-sm md:text-base text-gray-300 max-w-xl mx-auto lg:mx-0">
            *Based on 2024 Customer Data showing that our clients are 2.2x times
            more likely to be approved.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex-shrink-0 flex flex-col sm:flex-row items-center gap-4 mt-6 lg:mt-0">
          <button
            className="w-full sm:w-auto px-8 py-3 rounded-full font-semibold transition-all
                       bg-white text-[#004746] hover:bg-gray-100 shadow-lg"
          >
            Find Funding
          </button>
          <button
            className="w-full sm:w-auto px-8 py-3 rounded-full font-semibold transition-all
                       border-2 border-white text-white hover:bg-white hover:text-[#004746]"
          >
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};

export default ApprovalRibbon;
