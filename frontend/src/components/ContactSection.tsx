import React from "react";

const ContactSection: React.FC = () => {
  return (
    <section className="bg-[#2D6A66] w-full text-white py-16 px-4 sm:px-6 lg:px-8 font-sans relative overflow-hidden">
      {/* Abstract background pattern (simplified from image) */}
      <div className="absolute bottom-0 right-0 text-gray-700 opacity-10">
        <svg
          width="150"
          height="150"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50 0C22.386 0 0 22.386 0 50C0 77.614 22.386 100 50 100C77.614 100 100 77.614 100 50C100 22.386 77.614 0 50 0ZM50 90C27.909 90 10 72.091 10 50C10 27.909 27.909 10 50 10C72.091 10 90 27.909 90 50C90 72.091 72.091 90 50 90Z"
            fill="currentColor"
          />
          <path
            d="M50 10C55.5228 10 60 14.4772 60 20C60 25.5228 55.5228 30 50 30C44.4772 30 40 25.5228 40 20C40 14.4772 44.4772 10 50 10Z"
            fill="currentColor"
          />
          <path
            d="M50 40C44.4772 40 40 44.4772 40 50C40 55.5228 44.4772 60 50 60C55.5228 60 60 55.5228 60 50C60 44.4772 55.5228 40 50 40Z"
            fill="currentColor"
          />
          <path
            d="M50 70C44.4772 70 40 74.4772 40 80C40 85.5228 44.4772 90 50 90C55.5228 90 60 85.5228 60 80C60 74.4772 55.5228 70 50 70Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 relative z-10">
        {/* Left side: Text and Contact Info */}
        <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get in touch.</h2>
          <p className="text-base sm:text-lg mb-8 max-w-md lg:max-w-none mx-auto lg:mx-0">
            Whether you&apos;re actively looking for funding, or just want to
            explore some options, get in touch today.
          </p>
          <div className="space-y-4">
            <a
              href="mailto:hello@fundonion.com"
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
              hello@fundonion.com
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
        <div className="lg:w-1/2 bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="fullName" className="sr-only">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                />
              </div>
              <div>
                <label htmlFor="emailAddress" className="sr-only">
                  Email Address
                </label>
                <input
                  type="email"
                  id="emailAddress"
                  name="emailAddress"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phoneNumber" className="sr-only">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                />
              </div>
              <div>
                <label htmlFor="businessName" className="sr-only">
                  Business Name
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  placeholder="Business Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="sr-only">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              />
            </div>
            <div>
              <label htmlFor="howCanWeHelp" className="sr-only">
                How can we help?
              </label>
              <textarea
                id="howCanWeHelp"
                name="howCanWeHelp"
                rows={5}
                placeholder="How can we help?"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 resize-y"
              ></textarea>
            </div>
            <button
              type="submit"
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
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
