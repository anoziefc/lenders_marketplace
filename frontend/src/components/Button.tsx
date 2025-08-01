"use client";
import React from "react";
// This ensures type safety when using TypeScript (TSX).
interface NextButtonProps {
  onClick: () => void;
  next?: boolean;
  value: string;
  cls?: string;
}

// The reusable NextButton functional component.
const Button: React.FC<NextButtonProps> = ({ value, onClick, next, cls }) => {
  return (
    <button
      className={`w-full cursor-pointer py-3 px-6  text-lg font-semibold rounded-full border-2 shadow-md
                 flex items-center justify-center space-x-2
                 focus:outline-none focus:ring-2  focus:ring-opacity-50
                 transition duration-300 ease-in-out ${
                   cls ||
                   "bg-pink-200 text-gray-600 border-gray-400 hover:bg-pink-300 focus:ring-pink-500"
                 } `}
      onClick={onClick}
    >
      <span>{value}</span>
      {next && <span>&rarr;</span>}
    </button>
  );
};

export default Button;
