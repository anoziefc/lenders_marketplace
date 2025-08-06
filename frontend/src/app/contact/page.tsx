import Breadcrumb from "@/components/Breadcrumb";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import FaqSection from "@/components/FaqSection";
import React from "react";

const page = () => {
    return (
        <div>
            <Breadcrumb/>
            <div className=" bg-white font-inter flex items-center justify-center p-4 sm:p-6 md:p-8">
                <div
                    className="w-full max-w-6xl bg-white rounded-xl shadow-lg overflow-hidden flex flex-col lg:flex-row">
                    {/* Left Section: Contact Info */}
                    <div className="flex-1 bg-white  flex items-center justify-center p-4">
                        <ContactInfo/>
                    </div>

                    {/* Right Section: Contact Form */}
                    <div className="flex-1 bg-green-900 p-6 sm:p-8 md:p-10 flex items-center justify-center relative">
                        {/* Background shapes for visual flair */}
                        <div
                            className="absolute bottom-0 right-0 w-48 h-48 bg-yellow-400 rounded-tl-full opacity-50 transform translate-x-1/2 translate-y-1/2"></div>
                        <div
                            className="absolute top-0 left-0 w-32 h-32 bg-green-700 rounded-br-full opacity-50 transform -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="relative z-10 w-full max-w-md">
                            {" "}
                            {/* Added max-w-md to constrain form width */}
                            <div className="w-full bg-white rounded-xl shadow-lg p-6 sm:p-8 md:p-10">
                                <ContactForm token={""}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FaqSection/>
        </div>
    );
};

export default page;
