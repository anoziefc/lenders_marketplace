"use client";
import React, {useState} from "react";
import {contactOnSubmit} from "@/lib/onSubmits";

// Reusable ContactForm Component
const ContactForm: React.FC = () => {
    const initialFormData: ContactFormData = {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: ""
    };
    const [formData, setFormData] = useState(initialFormData);
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const {id, value} = e.target;

        setFormData(prevFormData => ({
            ...prevFormData,
            [id]: value
        }));
    };

    return (
        <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="firstName" className="sr-only">
                        First Name
                    </label>
                    <input
                        onChange={handleOnChange}
                        required
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="First Name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                    />
                </div>
                <div>
                    <label htmlFor="lastName" className="sr-only">
                        Last Name
                    </label>
                    <input
                        onChange={handleOnChange}
                        required
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Last Name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                    />
                </div>
            </div>
            <div>
                <label htmlFor="phoneNUmber" className="sr-only">
                    Phone
                </label>
                <input
                    onChange={handleOnChange}
                    required
                    type="tel"
                    id="phoneNumber"
                    name="phoneNUmber"
                    placeholder="Phone"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                />
            </div>
            <div>
                <label htmlFor="email" className="sr-only">
                    Email
                </label>
                <input
                    onChange={handleOnChange}
                    required
                    type="mail"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                />
            </div>

            <button
                onClick={(e) => {
                    e.preventDefault();
                    return contactOnSubmit(formData);
                }}
                className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
            >
                Send Message
                <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                </svg>
            </button>
        </form>
    );
};

export default ContactForm;
