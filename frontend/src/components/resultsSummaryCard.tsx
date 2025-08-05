import React from "react";

// Define the props for the FunderSummary component to make it reusable.
interface FunderSummaryProps {
    fundersCount: number;
    rateDescription: string;
    baseRate: string;
    nextMeetingMessage: string;
    bankIconUrl: string;
}

const ResultsSummaryCard: React.FC<FunderSummaryProps> = ({
                                                              fundersCount,
                                                              rateDescription,
                                                              baseRate,
                                                              nextMeetingMessage,
                                                              bankIconUrl
                                                          }) => {
    return (
        <div className="bg-[#244b48] text-white p-6 md:p-12 font-sans">
            <div className="container mx-auto max-w-3xl">
                {/* Main Title Section */}
                <div className="mb-8 md:mb-12">
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                        Great news! We've found potential funders.
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
                        {/* Bank Icon and Description */}
                        <div className="flex items-center space-x-4">
                            <img
                                src={bankIconUrl}
                                alt="Bank of England logo"
                                className="w-10 h-10 object-contain rounded-full"
                                onError={(e) => {
                                    // Fallback to a placeholder if the image fails to load
                                    e.currentTarget.onerror = null;
                                    e.currentTarget.src = "https://placehold.co/40x40/555/fff?text=BOE";
                                }}
                            />
                            <span className="text-base text-gray-300">{rateDescription}</span>
                        </div>
                        {/* Base Rate Value */}
                        <span className="text-2xl md:text-4xl font-bold text-[#e0e0e0]">{baseRate}</span>
                    </div>

                    {/* Next Meeting Info */}
                    <div className="pt-4 text-sm md:text-base text-gray-400">
                        {nextMeetingMessage}
                    </div>
                </div>
            </div>
        </div>
    );
};

// Main App component to render the FunderSummary component
export default ResultsSummaryCard;