"use client";
import React from "react";
import Button from "./Button";

// Reusable ContactForm Component
const ContactForm: React.FC = () => {
  return (
    <div className="w-full bg-white rounded-xl shadow-lg p-6 sm:p-8 md:p-10">
      <form className="space-y-6">
        {/* Name and Email fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent pr-10"
              />
              <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400">
                {/* User icon (simple SVG) */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent pr-10"
              />
              <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400">
                {/* At icon (simple SVG) */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.243 5.757a6 6 0 10-.987 9.879l.006.006.006.006A6 6 0 0014.243 5.757zM10 12a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>

        {/* Phone and Company fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="sr-only">
              Phone
            </label>
            <div className="relative">
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent pr-10"
              />
              <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400">
                {/* Phone icon (simple SVG) */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.103 6.103l.774-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </span>
            </div>
          </div>
          <div>
            <label htmlFor="company" className="sr-only">
              Company
            </label>
            <div className="relative">
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Company"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent pr-10"
              />
              <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400">
                {/* Building icon (simple SVG) */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM12 15.5V16a1 1 0 01-1 1H9a1 1 0 01-1-1v-.586l.707-.707A1 1 0 009 14h2a1 1 0 00.707-.293L12 15.5z" />
                </svg>
              </span>
            </div>
          </div>
        </div>

        {/* How can we help you? (Subject) */}
        <div>
          <label htmlFor="subject" className="sr-only">
            How can we help you?
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="How can we help you?"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        {/* What's your message? (Message) */}
        <div>
          <label htmlFor="message" className="sr-only">
            What's your message?
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="What's your message?"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-y"
          ></textarea>
        </div>

        {/* Send message button */}
        <div>
          <div className="max-w-52">
            <Button
              value="Send Message"
              cls={"bg-green-800 text-white"}
              onClick={() => {}}
              next
            />
          </div>
        </div>
      </form>
    </div>
  );
};

// Main App component that combines ContactInfo and ContactForm
export default ContactForm;
