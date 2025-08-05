"use client";
import React, {useState} from "react";
import {contactOnSubmit} from "@/lib/onSubmits";

// Reusable ContactForm Component
const ContactForm: React.FC<{ token: string | null }> = ({token}) => {
    const initialFormData: ContactFormData = {
        first_name: "",
        last_name: "",
        phone_number: "",
        email: "",
        token
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

    const handleOnSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (!formData.first_name || !formData.last_name || !formData.phone_number || !formData.email || !token) {
                alert("Please fill in all fields.");
                return;
            }
            const response = await contactOnSubmit(formData, token);
            if (response) setFormData(initialFormData);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="first_name" className="sr-only">
                        First Name
                    </label>
                    <input
                        onChange={handleOnChange}
                        required
                        type="text"
                        id="first_name"
                        name="first_name"
                        placeholder="First Name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                    />
                </div>
                <div>
                    <label htmlFor="last_name" className="sr-only">
                        Last Name
                    </label>
                    <input
                        onChange={handleOnChange}
                        required
                        type="text"
                        id="last_name"
                        name="last_name"
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
                    id="phone_number"
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
                onClick={handleOnSubmit}
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
