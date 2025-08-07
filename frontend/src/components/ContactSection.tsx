"use client";
import React, {useState} from "react";
import ContactForm from "@/components/ContactForm";
import Modal from "react-modal";

const customStyles = {
    content: {
        zIndex: 1000,
    }
};

const ContactSection: React.FC<{ token: string | null }> = ({token}) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const triggerModal = () => {
        setTimeout(() => {
            setIsOpen(true);
        }, 5000);
    };
    triggerModal();

    return (
        <section
            className="bg-[#2D6A66] w-full text-white py-16 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
            <div
                className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 z-10">
                {/* Left side: Text and Contact Info */}
                <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get in touch.</h2>
                    <p className="text-base sm:text-lg mb-8 max-w-md lg:max-w-none mx-auto lg:mx-0">
                        Whether you&apos;re actively looking for funding, or just want to
                        explore some options, get in touch today.
                    </p>
                    <div className="space-y-4">
                        <a
                            href="mailto:hello@contigo.com"
                            className="flex items-center justify-center lg:justify-start text-white text-lg hover:text-gray-200 transition-colors duration-200"
                        >
                            <svg
                                className="w-6 h-6 mr-3"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 4v7a2 2 0 002 2h14a2 2 0 002-2v-7m-18 0V5a2 2 0 012-2h14a2 2 0 012 2v7"
                                ></path>
                            </svg>
                            hello@contigo.com
                        </a>
                        <a
                            href="tel:+442081232841"
                            className="flex items-center justify-center lg:justify-start text-white text-lg hover:text-gray-200 transition-colors duration-200"
                        >
                            <svg
                                className="w-6 h-6 mr-3"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                ></path>
                            </svg>
                            02081232841
                        </a>
                    </div>
                </div>

                {/* Right side: Contact Form */}
                <div className="lg:w-1/2 p-8 rounded-xl w-full max-w-xl">
                    <Modal
                        isOpen={modalIsOpen}
                        // onAfterOpen={afterOpenModal}
                        onRequestClose={() => setIsOpen(false)}
                        style={customStyles}
                        contentLabel="Example Modal"
                    ><ContactForm token={token}/></Modal>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
