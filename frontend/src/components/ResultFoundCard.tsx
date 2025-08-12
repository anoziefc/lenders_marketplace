import React from "react";
import {ChevronDown} from "lucide-react";
import Logo from "@/components/Logo";

interface StatCardProps {
    label: string;
    value: string;
    highlight?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({label, value, highlight}) => {
    return (
        <div
            className={`flex flex-1 flex-col items-center justify-center px-6 py-4 rounded-md min-w-[140px] ${
                highlight ? "bg-yellow-200" : "bg-blue-50"
            }`}
        >
            <p className="text-sm text-gray-500">{label}</p>
            <p className="text-lg font-semibold">{value}</p>
        </div>
    );
};

interface LoanOfferProps {
    companyName: string;
    appsThisMonth: number;
    stats: { label: string; value: string; highlight?: boolean }[];
}

const LoanOffer: React.FC<LoanOfferProps> = ({
                                                 companyName,
                                                 appsThisMonth,
                                                 stats
                                             }) => {
    return (
        <div className="flex items-center gap-4 bg-white p-3 rounded-3xl">
            {/* Company Info */}
            <div className="flex flex-1/2 flex-col items-start">
                <Logo/>
                <p className="font-semibold">{companyName}</p>
                <p className="text-sm text-gray-500">
                    {appsThisMonth} apps this month
                </p>
            </div>

            {/* Stats */}
            <div className="flex gap-2 flex-wrap">
                {stats.map((stat, index) => (
                    <StatCard key={index} {...stat} />
                ))}
            </div>
        </div>
    );
};


const ResultFoundCard = ({onRevealForm}: { onRevealForm: () => void }) => {
    return (
        <div
            className="bg-white rounded-3xl shadow-lg border w-full border-gray-300 backdrop-blur-md flex flex-col gap-4 justify-center items-center max-w-6xl">
            <div className=" flex  justify-center items-center relative">
                <LoanOffer
                    companyName="Contigo"
                    appsThisMonth={656}
                    stats={[
                        {label: "Repaid Over", value: "1 - 60 months"},
                        {label: "Rates", value: "0.90% - 5.95%"},
                        {label: "Monthly Repayments", value: "£259"},
                        {label: "Borrow up to", value: "£2,000", highlight: true}
                    ]}
                />
                <div
                    className="bg-white/30 rounded-2xl rounded-t-4xl shadow-black/10 backdrop-blur-[10.9px] border absolute  border-white/30 h-full w-full display: flex justify-center items-center ">
                    <button onClick={onRevealForm}
                            className="px-4 py-2 border border-teal-9000 rounded-full cursor-pointer text-lg">Reveal
                        more
                    </button>
                </div>


            </div>
            <div className="border-t border-gray-300 w-full flex justify-center py-2 h-12 ">
                <button
                    onClick={onRevealForm} className="flex items-center gap-2 cursor-pointer text-lg">More
                    details <ChevronDown/></button>
            </div>
        </div>
    );
};

export default ResultFoundCard;