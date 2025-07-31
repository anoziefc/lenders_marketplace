"use client";
import React, { useState } from "react";
import Button from "./Button";
import Check from "./Check";

const Form = () => {
  const [fundingAmount, setFundingAmount] = useState<string>("£100,000");

  const [fundingPurpose, setFundingPurpose] = useState<string>("Growth");

  const fundingPurposes = [
    "Growth",
    "Cashflow",
    "Refinancing",
    "Asset Finance",
    "Other (eg. Acquisition, MBO)",
  ];

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFundingAmount(e.target.value);
  };

  const handlePurposeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFundingPurpose(e.target.value);
  };
  const currencyAppend = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!e.target.value.startsWith("£")) {
      setFundingAmount("£" + e.target.value);
    }
  };

  const handleNext = () => {
    console.log("Form Submitted!");
    console.log("Funding Amount:", fundingAmount);
    console.log("Funding Purpose:", fundingPurpose);
    alert("Form data submitted! Check console for details.");
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 max-w-xl w-full relative overflow-hidden">
      <div className="absolute -left-10 -top-10 w-32 h-32 bg-purple-100 rounded-full opacity-50 blur-xl"></div>
      <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-pink-100 rounded-full opacity-50 blur-xl"></div>

      <div className="mb-8">
        <label
          htmlFor="fundingAmount"
          className="block text-xl font-semibold text-gray-800 mb-2"
        >
          How much funding are you looking for?
        </label>
        <p className="text-sm text-gray-500 mb-4">
          Enter an amount between £1,000 and £5,000,000
        </p>
        <input
          type="text"
          id="fundingAmount"
          value={fundingAmount}
          onChange={handleAmountChange}
          onFocus={currencyAppend}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-lg text-gray-800
                       focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500
                       transition duration-200 ease-in-out"
          placeholder="£100,000"
        />
      </div>

      <div className="mb-8">
        <label className="block text-xl font-semibold text-gray-800 mb-2">
          What do you need the funds for?
        </label>
        <p className="text-sm text-gray-500 mb-4">
          Different funding types are available for different purposes.
        </p>

        <div className="space-y-4">
          {fundingPurposes.map((purpose) => (
            <Check
              key={purpose}
              purpose={purpose}
              fundingPurpose={fundingPurpose}
              handlePurposeChange={handlePurposeChange}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <Button value="Next" onClick={handleNext} next />
      </div>
    </div>
  );
};

export default Form;
