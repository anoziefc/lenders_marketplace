// Reusable ContactInfo Component
const ContactInfo: React.FC = () => {
  return (
    <div className="w-full max-w-md text-gray-800 flex flex-col justify-center">
      <div className="flex items-center text-green-700 mb-4">
        <div className="w-8 h-0.5 bg-green-700 mr-3"></div>
        <span className="uppercase text-sm font-semibold tracking-wider">
          Contact Us
        </span>
      </div>
      <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mb-6 leading-tight">
        Get in touch today
      </h2>
      <p className="text-gray-600 mb-8 leading-relaxed">
        Whether you&apos;re actively looking for funding or just exploring
        options, we&apos;re here to help you understand the market and time it
        just right. Get in touch with one of our Commercial Finance Specialists
        today - at no cost to you.
      </p>

      <div className="space-y-6">
        {/* Email contact */}
        <div className="flex items-center">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-800 flex items-center justify-center mr-4">
            {/* Email icon (simple SVG) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </div>
          <a
            href="mailto:hello@contigonf.com"
            className="text-lg text-gray-700 hover:text-green-800 transition-colors duration-200"
          >
            hello@contigonf.com
          </a>
        </div>

        {/* Phone contact */}
        <div className="flex items-center">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-800 flex items-center justify-center mr-4">
            {/* Phone icon (simple SVG) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.103 6.103l.774-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          </div>
          <a
            href="tel:+442081232841"
            className="text-lg text-gray-700 hover:text-green-800 transition-colors duration-200"
          >
            020 8123 2841
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
