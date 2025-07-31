import React from "react";
import Logo from "./Logo";

const TopBar: React.FC = () => {
  return (
    <div className="bg-[#2a6d67] rounded-2xl shadow-lg p-4 md:p-6 lg:p-8 flex items-center justify-center w-full">
      <span className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold">
        Fund
        <span className="text-[#f5c76e]">
          <Logo />
          nion
        </span>
      </span>
    </div>
  );
};

export default TopBar;
