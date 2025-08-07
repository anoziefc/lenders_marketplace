import React from "react";
import {ChevronDown} from "lucide-react";

const ResultFoundCard = ({onRevealForm}: { onRevealForm: () => void }) => {
    return (
        <div
            className="bg-white rounded-3xl shadow-lg p-4 border w-full border-gray-300 backdrop-blur-md flex flex-col gap-4 justify-center items-center max-w-6xl">
            <div className="h-40 md:h-24 flex  justify-center items-center">
                <button onClick={onRevealForm}
                        className="px-4 py-2 border border-teal-9000 rounded-full cursor-pointer text-lg">Reveal more
                </button>
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