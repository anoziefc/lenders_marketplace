import React from "react";

const Check = ({ purpose, reason, handlePurposeChange }: CheckProps) => {
  return (
    <label
      key={purpose}
      className={`flex items-center p-4 rounded-xl cursor-pointer transition duration-200 ease-in-out
                            ${
                              reason === purpose
                                ? "border-2 border-blue-500 bg-blue-50"
                                : ""
                            }`}
    >
      <input
        type="radio"
        name="reason"
        value={purpose}
        checked={reason === purpose}
        onChange={handlePurposeChange}
        className="hidden" // Hide the default radio button
      />
      {/* Custom radio button styling */}
      <div
        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-3
                              ${
                                reason === purpose
                                  ? "border-blue-500 bg-blue-500"
                                  : "border-gray-400 bg-white"
                              }`}
      >
        {reason === purpose && (
          <svg
            className="w-3 h-3 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
      <span className="text-lg font-medium text-gray-700">{purpose}</span>
    </label>
  );
};

export default Check;
