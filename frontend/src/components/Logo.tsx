import React from 'react';

const Logo: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="inline-block w-5 h-5 md:w-6 md:h-6 align-middle" // Adjust size for responsiveness
  >
    <path d="M12 2C8.13 2 5 5.13 5 9c0 3.87 3.13 7 7 7s7-3.13 7-7c0-3.87-3.13-7-7-7zm0 14c-2.21 0-4-1.79-4-4v-1h8v1c0 2.21-1.79 4-4 4zM9 9c0-1.66 1.34-3 3-3s3 1.34 3 3h-6z" />
    <path d="M12 18c-2.76 0-5 2.24-5 5h10c0-2.76-2.24-5-5-5z" />
  </svg>
);

export default Logo;
