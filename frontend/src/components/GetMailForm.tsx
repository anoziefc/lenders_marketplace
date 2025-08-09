"use client";
import React, {useState} from "react";
import {contactOnSubmit} from "@/lib/onSubmits";
import {toast} from "react-toastify";
import {useRouter} from "next/navigation";

const GetMailForm: React.FC<{
    token: string | null,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}> = ({token, setIsOpen}) => {
    const initialFormData: ContactFormData = {
        first_name: "",
        last_name: "",
        phone_number: "",
        business_type: "",
        business_name: "",
        email: "",
        token: token || ""
    };
    const [formData, setFormData] = useState(initialFormData);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
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
            if (response.success) {
                toast.success("Mail has been sent!", {
                    position: "top-right",
                    toastId: "contactForm",
                    pauseOnFocusLoss: false
                });
                setFormData(initialFormData);
                setIsOpen(false);
                setTimeout(() => router.push("https://www.contigocf.com/"), 2000);
            } else {
                toast.error(response.response.data.detail || "Form submission failed", {
                    position: "top-right",
                    toastId: "contactForm",
                    pauseOnFocusLoss: false
                });
            }
        } catch (err) {
            console.log(err);
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
        <form className="space-y-6 bg-white p-6 rounded-3xl z-40">
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
            <div>
                <label htmlFor="business_name" className="sr-only">
                    Business Name
                </label>
                <input
                    onChange={handleOnChange}
                    required
                    disabled={loading}
                    value={formData.business_name}
                    type="text"
                    id="business_name"
                    name="business_name"
                    placeholder="Business Name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                />
            </div>
            <div>
                <label htmlFor="business_type" className="sr-only">
                    Business Type
                </label>
                <input
                    onChange={handleOnChange}
                    required
                    disabled={loading}
                    value={formData.business_type}
                    type="text"
                    id="business_type"
                    name="business_type"
                    placeholder="Business Type"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                />
            </div>

            <button
                disabled={loading}
                onClick={handleOnSubmit}
                className="w-full
            bg-[#FFA9C1] border
             font-semibold
            py-3 px-6 sm:py-3.5 sm:px-7
            rounded-full shadow-md  duration-300 flex items-center justify-center mt-12"
            >
                Email Report
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

export default GetMailForm;
