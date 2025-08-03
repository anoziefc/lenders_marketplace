"use client";
import Link from "next/link";
import React, { useState } from "react";

const OnionIcon: React.FC = () => (
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

// Inline SVG for a simple dropdown arrow
const DropdownArrowIcon: React.FC<{ isOpen?: boolean }> = ({ isOpen }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={`inline-block w-3 h-3 ml-1 transition-transform duration-200 ${
      isOpen ? "rotate-180" : ""
    }`}
  >
    <path
      fillRule="evenodd"
      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);



// Data for navigation items
const navItems: NavItem[] = [
  {
    name: "Loans",
    dropdown: true,
    href: "/journey",
  },
  {
    name: "Guides",
    dropdown: true,
    href: "/guides/guide-to-business-loans",
    submenu: [
      { name: "Business Loans Guide", href: "/guides/guide-to-business-loans" },
      { name: "Asset Finance Guide", href: "/guides/guide-to-asset-finance" },
      { name: "Invoice Finance Guide", href: "/guides/guide-to-invoice-finance" },
    ],
  },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const MenuItem: React.FC<MenuItemProps> = ({ item, isMobile = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileSubmenuOpen, setIsMobileSubmenuOpen] = useState(false);

  // Toggle mobile submenu on click
  const toggleMobileSubmenu = (e: React.MouseEvent) => {
    if (isMobile && item.dropdown) {
      e.preventDefault(); // Prevent navigation if it's a dropdown
      setIsMobileSubmenuOpen(!isMobileSubmenuOpen);
    }
  };

  if (item.dropdown && item.submenu) {
    return (
      <div
        className={`relative ${isMobile ? "w-full" : ""}`}
        onMouseEnter={() => !isMobile && setIsHovered(true)}
        onMouseLeave={() => !isMobile && setIsHovered(false)}
      >
        <Link
          href={item.href || "#"}
          className={`flex items-center justify-between py-2 hover:text-yellow-400 ${
            isMobile
              ? "text-3xl md:text-xl w-full "
              : "text-gray-700 font-medium"
          } `}
          onClick={toggleMobileSubmenu}
        >
          {item.name}{" "}
          <DropdownArrowIcon
            isOpen={isMobile ? isMobileSubmenuOpen : isHovered}
          />
        </Link>
        {/* Desktop Submenu */}
        {!isMobile && isHovered && (
          <div className="text-md absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-100">
            {item.submenu.map((subItem) => (
              <Link
                key={subItem.name}
                href={subItem.href}
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-yellow-400 transition-colors duration-150"
              >
                {subItem.name}
              </Link>
            ))}
          </div>
        )}
        {/* Mobile Submenu */}
        {isMobile && isMobileSubmenuOpen && (
          <div className="text-3xl pl-4 mt-2 space-y-2 border-l border-gray-200">
            {item.submenu.map((subItem) => (
              <Link
                key={subItem.name}
                href={subItem.href}
                className="block text-gray-600 hover:text-yellow-400 text-base"
              >
                {subItem.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      href={item.href || "#"}
      className={`py-2 ${
        isMobile ? "text-3xl w-full" : "text-gray-700 font-medium"
      } hover:text-yellow-400`}
    >
      {item.name}
    </Link>
  );
};

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="relative bg-white shadow-sm">
      <div className="flex items-center justify-between p-4">
        {/* Fundonion Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <span className="text-[#2a6d67] md:text-md text-3xl lg:text-3xl font-semibold cursor-pointer">
              Fund
              <span className="text-[#f5c76e]">
                <OnionIcon />
                nion
              </span>
            </span>
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navItems.map((item) => (
            <MenuItem key={item.name} item={item} />
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
          <Link href="/journey">
            <button className="bg-[#2a6d67] text-white px-5 py-2 md:px-6 md:py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors duration-200">
              Find Funding
            </button>
          </Link>
        </div>

        <div className="flex items-center md:hidden space-x-3">
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-full bg-[#2a6d67] text-white focus:outline-none focus:ring-2 focus:ring-[#2a6d67] focus:ring-opacity-50"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              // Close Icon (X)
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              // Hamburger Icon
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isMobileMenuOpen && (
        <div className="text-3xl md:hidden absolute top-full left-0 h-screen w-full bg-white border-t border-gray-200 shadow-lg p-4 z-50">
          <div className="flex flex-col items-start space-y-12">
            <div className="flex flex-col items-start px-4 space-y-7 text-gray-700 font-medium">
              {navItems.map((item) => (
                <MenuItem key={item.name} item={item} isMobile={true} />
              ))}
            </div>
            <Link href="/journey" className="w-full">
              <button className="bg-[#2a6d67] text-white px-5 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors duration-200 w-full text-center">
                Get started
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
