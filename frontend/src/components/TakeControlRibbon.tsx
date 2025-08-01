import React from "react";

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2.5}
    stroke="currentColor"
    className="w-6 h-6 transform rotate-45"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
    />
  </svg>
);

const TakeControlRibbon = () => {
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
            Take control of your finances. Create a free account today.
          </h1>
        </div>

        {/* Buttons */}
        <div className="flex-shrink-0 flex flex-col sm:flex-row items-center gap-4 mt-6 lg:mt-0">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            {/* First Card */}
            <div className="flex-1 w-full max-w-sm bg-white p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow aspect-square duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col justify-between h-full">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Get started with a free account
                  </h3>
                </div>
                <div className="mt-4 text-green-600">
                  <ArrowIcon />
                </div>
              </div>
            </div>

            {/* Second Card */}
            <div className="relative flex-1 w-full max-w-sm bg-teal-800 text-white p-6 aspect-square rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
              {/* Background SVG pattern for the second card */}
              <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl">
                <svg
                  className="absolute top-0 right-0 w-2/3 h-full opacity-10"
                  viewBox="0 0 400 400"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-100 0C-100 220 150 300 200 400C250 500 400 500 400 300C400 100 200 0 100 0C0 0 -100 -20 -100 0Z"
                    fill="currentColor"
                  />
                  <path
                    d="M-50 50C-50 270 200 350 250 450C300 550 450 550 450 350C450 150 250 50 150 50C50 50 -50 30 -50 50Z"
                    fill="currentColor"
                  />
                </svg>
              </div>

              <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Talk to us</h3>
                </div>
                <div className="mt-4">
                  <ArrowIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TakeControlRibbon;
