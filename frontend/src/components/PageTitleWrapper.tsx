import React from "react";


// The main TitleWrapper component that renders the banner.
const TitleWrapper: React.FC<TitleWrapperProps> = ({ title, summary }) => {
  return (
    <div className="relative flex items-center justify-center bg-teal-800 p-4 overflow-hidden min-h-96 md:min-h-[500px]">
      <div
        className="absolute right-0 top-0 bottom-0 w-1/3 bg-cover bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h100v100H0z'/%3E%3Cpath d='M49.99 100c-27.614 0-50-22.386-50-50S22.376 0 49.99 0 100 22.386 100 50 77.614 100 49.99 100zm0-98C23.462 2 2 23.462 2 50s21.462 48 47.99 48 48-21.462 48-48S76.538 2 49.99 2z' stroke='%23FFFFFF' stroke-opacity='0.1' stroke-width='0.5' fill='none'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "300px 300px", // Adjust size of the pattern
          backgroundPosition: "right center",
        }}
      ></div>

      {/* Content container for text */}
      <div className="relative z-10 text-center text-white max-w-3xl mx-auto">
        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
          {title}
        </h1>

        {/* Subtitle/Description */}
        <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed px-4">
          {summary}
        </p>
      </div>
    </div>
  );
};

export default TitleWrapper;
