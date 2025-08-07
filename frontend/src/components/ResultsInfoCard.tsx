import React from "react";
import ResultsSummaryCard from "@/components/resultsSummaryCard";
import Image from "next/image";
import NoResultsSection from "@/components/NoResultsSection";

const ResultsInfoCard: React.FC<{ result: LendersResultsResponse | null }> = ({result}) => {

    return (
        <div className="flex items-center justify-center font-inter">
            {/* Main container for the card */}
            <div
                className="
        relative
        flex flex-col lg:flex-row
        w-full max-w-6xl
        bg-white rounded-3xl shadow-xl overflow-hidden
        min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[400px]
      "
            >
                {/* Left section: Text content and button */}

                {result && result?.content?.lenders_list[0] ? <ResultsSummaryCard
                    lender_name={result.content.lenders_list[0].lender_name}
                    min_lending={result.content.lenders_list[0].min_lending}
                    max_lending={result.content.lenders_list[0].max_lending}
                    lower_lending_rate={result.content.lenders_list[0].lower_lending_rate}
                    higher_lending_rate={result.content.lenders_list[0].higher_lending_rate}
                    per_month_or_factor_rate={result.content.lenders_list[0].per_month_or_factor_rate}
                    min_term_months={result.content.lenders_list[0].min_term_months}
                    max_term_months={result.content.lenders_list[0].max_term_months}
                    payout_time={result.content.lenders_list[0].payout_time}
                /> : <NoResultsSection/>}
                {/* Right section: Image and background patterns */}
                <div
                    className="relative
          flex-1
          bg-[#FCE3B0]
          lg:w-2/5 xl:w-1/3
          rounded-b-3xl lg:rounded-bl-none lg:rounded-r-3xl
          overflow-hidden
          min-h-[200px] lg:min-h-auto
        "
                >
                    {/* Image of the man */}
                    <div className="h-full w-full">
                        <Image src={"/not-found.jpg"} fill alt=""/>
                    </div>

                    {/* Abstract patterns on the right side */}
                    {/* Top right pattern */}
                    <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 opacity-20">
                        <svg
                            viewBox="0 0 100 100"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M100 50C100 77.6142 77.6142 100 50 100V100C22.3858 100 0 77.6142 0 50V0H100V50Z"
                                fill="currentColor"
                            />
                            <path
                                d="M90 50C90 72.0914 72.0914 90 50 90V90C27.9086 90 10 72.0914 10 50V10H90V50Z"
                                fill="currentColor"
                            />
                        </svg>
                    </div>
                    {/* Bottom right pattern */}
                    <div className="absolute bottom-0 right-0 w-24 h-24 sm:w-32 sm:h-32 opacity-20">
                        <svg
                            viewBox="0 0 100 100"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M100 50C100 22.3858 77.6142 0 50 0V0C22.3858 0 0 22.3858 0 50V100H100V50Z"
                                fill="currentColor"
                            />
                            <path
                                d="M90 50C90 27.9086 72.0914 10 50 10V10C27.9086 10 10 27.9086 10 50V90H90V50Z"
                                fill="currentColor"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResultsInfoCard;