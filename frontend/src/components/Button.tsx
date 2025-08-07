"use client";
import React from "react";

// The reusable NextButton functional component.
const Button: React.FC<NextButtonProps> = ({
  value,
  onClick,
  next,
  cls,
  disabled = false,
}) => {
  return (
    <button
      disabled={disabled}
      className={`w-full cursor-pointer py-3 px-6  text-lg font-semibold rounded-full border-2 shadow-md
                 flex items-center justify-center space-x-2
                 focus:outline-none focus:ring-2  focus:ring-opacity-50
                 transition duration-300 ease-in-out ${
                   cls ||
                   "bg-[#FFA9C1] text-gray-600 border-gray-400 focus:ring-pink-500"
                 } `}
      onClick={onClick}
    >
      <span>{value}</span>
      {next && <span>&rarr;</span>}
    </button>
  );
};

export default Button;
