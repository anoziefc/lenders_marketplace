import React from "react";
import Image from "next/image";

// Define the props for the FunderSummary component to make it reusable.


const ResultsSummaryCard: React.FC<FunderSummaryProps> = ({
                                                              lender_name,
                                                              min_lending,
                                                              max_lending,
                                                              lower_lending_rate,
                                                              higher_lending_rate,
                                                              per_month_or_factor_rate,
                                                              min_term_months,
                                                              max_term_months,
                                                              payout_time
                                                          }) => {
        return (
            <div className="bg-[#244b48] text-white p-6 md:p-12 font-sans">
                <div className="container mx-auto max-w-3xl">
                    {/* Main Title Section */}
                    <div className="mb-8 md:mb-12">
                        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                            Great news! We&quot;ve found potential funders.
                        </h1>
                        <p className="mt-4 text-sm md:text-base text-gray-200">
                            See your matched funders below, their rates, product, and what they offer to you. Click more
                            details to read our unique and detailed lender profiles for even more information.
                        </p>
                    </div>

                    {/* Base Rate Card Section */}
                    <div className="bg-[#1b3d3a] p-6 rounded-2xl shadow-xl max-w-xl">
                        {/* Rate and Icon Row */}
                        <div className="flex justify-between items-center pb-4 border-b border-gray-600">
                            <div className="flex items-center space-x-4">
                                <span className="text-base text-gray-300">{lender_name}</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                Rates:&nbsp; <span
                                className="text-base text-gray-300"> {per_month_or_factor_rate === "PM" ? `${lower_lending_rate}% - ${higher_lending_rate}%` : `${lower_lending_rate} - ${higher_lending_rate}`}</span> &nbsp; Per
                                Month
                            </div>
                        </div>
                        <div className="flex justify-between items-center pb-4 border-b border-gray-600">
                            <div className="flex items-center space-x-4">
                                <span
                                    className="text-base text-gray-300">Term: {min_term_months} - {max_term_months} months </span>
                            </div>
                            <div className="flex items-center space-x-4">
                                Amount: &nbsp;<span
                                className="text-base text-gray-300"> £{min_lending} - £{max_lending}</span>
                            </div>
                        </div>
                        {/* Next Meeting Info */}
                        <div className="pt-4 text-sm md:text-base text-gray-400">
                            Payout Time: Within {payout_time}
                        </div>
                    </div>
                </div>
            </div>
        )
            ;
    }
;

// Main App component to render the FunderSummary component
export default ResultsSummaryCard;