"use client";
import React, {useState} from "react";
import {contactOnSubmit} from "@/lib/onSubmits";
import {toast} from "react-toastify";
// Reusable ContactForm Component
const ContactForm: React.FC<{ token: string | null }> = ({token}) => {
    const initialFormData: ContactFormData = {
        first_name: "",
        last_name: "",
        phone_number: "",
        email: "",
        token: token || ""
    };
    const [formData, setFormData] = useState(initialFormData);
    const [loading, setLoading] = useState(false);
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
        setLoading(true);
        try {
            if (!formData.first_name || !formData.last_name || !formData.phone_number || !formData.email) {
                // alert("Please fill in all fields.");
                toast.info("Please fill in all fields", {
                    position: "top-right",
                    toastId: "contactForm",
                    pauseOnFocusLoss: false
                });
                return;

            }
            const response = await contactOnSubmit(formData);
            if (response) {
                toast.success("Form submitted successfully", {
                    position: "top-right",
                    toastId: "contactForm",
                    pauseOnFocusLoss: false
                });
                setFormData(initialFormData);
            } else {
                toast.error("Form submission failed", {
                    position: "top-right",
                    toastId: "contactForm",
                    pauseOnFocusLoss: false
                });
            }
        } catch (err) {
            toast.error("Form submission failed", {
                position: "top-right",
                toastId: "contactForm",
                pauseOnFocusLoss: false
            });
            console.error(err);
        } finally {
            setLoading(false);
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
                        value={formData.first_name}
                        required
                        disabled={loading}
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
                        disabled={loading}
                        value={formData.last_name}
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
                    disabled={loading}
                    value={formData.phone_number}
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
                    disabled={loading}
                    value={formData.email}
                    type="mail"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                />
            </div>

            <button
                disabled={loading}
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
