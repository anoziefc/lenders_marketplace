"use client";
import { Plus } from "lucide-react";
import React, { useState } from "react";

type FaqItemProps = {
  question: string;
  answer: string;
};

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border h-fit rounded-lg p-4 shadow-sm bg-white">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left"
      >
        <h3 className="font-medium text-gray-800 mr-2">{question}</h3>
        <Plus
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? "rotate-45" : ""
          }`}
        />
      </button>
      {isOpen && (
        <p className="mt-3 text-gray-600 text-sm leading-relaxed">{answer}</p>
      )}
    </div>
  );
};

export default FaqItem;
