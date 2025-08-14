"use client";
import React, { useState } from "react";
import Logo from "@/components/Logo";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const navbarDropdownItems = [
  {
    link: "file:///C:/Users/godzi/Documents/contigo/contigo/article/can-glasgow-gp-surgery-secure-unsecured-finance-vital-1fa1f255.html",
    name: "Glasgow GP unsecured finance",
  },
  {
    link: "file:///C:/Users/godzi/Documents/contigo/contigo/article/can-glasgow-gp-surgery-secure-unsecured-finance-vital-1fa1f255.html",
    name: "Bradford dental lab working capital",
  },
  {
    link: "file:///C:/Users/godzi/Documents/contigo/contigo/article/how-can-liverpool-dental-practice-secure-swift-property-fe57217e.html",
    name: "Liverpool dental practice",
  },
  {
    link: "file:///C:/Users/godzi/Documents/contigo/contigo/article/seeking-bristol-care-home-commercial-mortgages-uk-elderly-26813820.html",
    name: "Bristol care home Commercial mortgages",
  },
  {
    link: "file:///C:/Users/godzi/Documents/contigo/contigo/article/how-can-sheffield-domiciliary-care-businesses-secure-vital-02278d84.html",
    name: "Sheffield domiciliary care businesses",
  },
  {
    link: "file:///C:/Users/godzi/Documents/contigo/contigo/article/how-can-sheffield-domiciliary-care-businesses-secure-vital-02278d84.html",
    name: "London care home Commercial mortgages",
  },
];

const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

// Reusable Navbar component
const NavbarContainer: React.FC<NavbarProps> = ({
  desktopLinks,
  menuSections,
  contactInfo,
  buttonText,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-sm p-3 font-sans lg:relative z-50">
      {/* Desktop and Mobile Container */}
      <div className="container justify-between lg:justify-start w-full max-w-6xl mx-auto flex space-x-4 items-center">
        {/* Logo */}
        <Link
          href="https://www.contigocf.com/"
          className="flex-shrink-0 relative w-22"
        >
          <Logo />
        </Link>

        {/* Desktop Navigation Links - Hidden on mobile/tablet */}
        <div className="hidden w-fit lg:flex flex-grow justify-start space-x-4  font-medium text-[#124e4d]">
          {desktopLinks.map((link, index) =>
            link.label !== "Bog Articles" ? (
              <Link
                key={index}
                href={link.href}
                className="hover:text-green-700 transition duration-300"
              >
                {link.label}
              </Link>
            ) : (
              <div
                key={index}
                className="relative group/item cursor-pointer flex flex-col justify-center items-center"
              >
                <div className="flex items-center justify-center">
                  Blog Articles <ChevronDown size={15} className={`m-1`} />
                </div>
                <div className="bg-transparent hidden group-hover/item:flex absolute top-10  flex-col items-center justify-center rounded-xl">
                  <div className="bg-white size-10 shadow-xl rotate-[120deg] absolute -z-10 -mb-5 mx-auto left-1/2 transform -translate-x-1/2"></div>
                  <div className="bg-white shadow-2xl p-4 rounded flex flex-col z-10 w-lg max-w-[400px] mt-4">
                    {navbarDropdownItems.map((item, index) => (
                      <Link
                        key={index}
                        href={item.link}
                        className="hover:bg-slate-100 rounded text-slate-900 font-bold transition duration-300 my-1 p-2"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        {/* Desktop Contact Info and Button - Hidden on mobile/tablet */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* Apply Now Button */}
          <button className="bg-[#124e4d] text-white text-sm px-4 py-2 rounded-full font-semibold shadow-md">
            {buttonText}
          </button>

          {/* Contact Section */}
          <div className="flex flex-col items-center justify-center text-sm">
            <div className="flex items-center space-x-1 text-green-700 font-medium">
              <Image
                src={
                  "https://www.contigocf.com/index_files/6480aad17e89f3d2e27b10ba_telephone-icon-to-call-iwoca.svg"
                }
                width={14}
                height={14}
                alt="Phone Icon"
              />
              <span className="font-semibold">{contactInfo.schedule}</span>
            </div>

            <Link
              href={"tel:+442038856411"}
              className="text-[#124e4d] text-lg font-bold"
            >
              {contactInfo.phone}
            </Link>
          </div>
        </div>

        <div className="flex items-center lg:hidden">
          <button className="hidden sm:block lg:hidden bg-[#124e4d] text-white px-4 py-2 rounded-full font-semibold shadow-md mr-4">
            {buttonText}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center text-green-800 focus:outline-none"
          >
            <span className="mr-2 font-medium">Menu</span>
            {isOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Full-screen Mobile Menu Overlay */}
      <div
        className={`fixed left-0 h-full w-full bg-black transform transition-all duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <div className="absolute top-0 right-0 h-full w-11/12 bg-white shadow-xl flex flex-col p-6">
          <div className="flex-grow overflow-y-auto">
            {menuSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-6">
                <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-2 border-b pb-2">
                  {section.heading}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <Link
                        href={item.href}
                        className="block  text-[#034E30] font-medium text-lg transition duration-200"
                      >
                        {item.label}
                        <hr className="mb-4 mt-2 border-gray-100" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

// Main App component to demonstrate usage
const NavBar: React.FC = () => {
  const navProps = {
    desktopLinks: [
      {
        label: "Business Loans",
        href: "https://www.contigocf.com/small-business-loans.html",
      },
      { label: "Bog Articles", href: "#" },
      { label: "FAQ", href: "#" },
      { label: "About Us", href: "https://www.contigocf.com/about-us.html" },
    ],
    menuSections: [
      {
        heading: "PRODUCTS",
        items: [
          {
            label: "Business Loans",
            href: "https://www.contigocf.com/small-business-loans.html",
          },
          {
            label: "Lines of Credit",
            href: "https://www.contigocf.com/article/33e064ea-82ef-4df6-b457-2a88b0450775.html#",
          },
          {
            label: "Equipment Financing",
            href: "https://www.contigocf.com/article/33e064ea-82ef-4df6-b457-2a88b0450775.html#",
          },
          {
            label: "Invoice Financing",
            href: "https://www.contigocf.com/article/33e064ea-82ef-4df6-b457-2a88b0450775.html#",
          },
          {
            label: "Merchant Cash Advance",
            href: "https://www.contigocf.com/article/33e064ea-82ef-4df6-b457-2a88b0450775.html#",
          },
        ],
      },
      {
        heading: "ABOUT",
        items: [{ label: "About us", href: "#" }],
      },
      {
        heading: "FAQ",
        items: [
          {
            label: "How to get a business loan us",
            href: "https://www.contigocf.com/how-to-get-a-business-loan.html",
          },
          {
            label: "Business Loan Calculator",
            href: "https://www.lenders-marketplace.duckdns.org/journey",
          },
          { label: "More", href: "https://www.contigocf.com/faq.html" },
        ],
      },
    ],
    contactInfo: {
      schedule: "Open Mon-Fri 9-6pm",
      phone: "020 3885 6411",
    },
    buttonText: "Apply now",
  };

  return (
    <div>
      <NavbarContainer {...navProps} />
      <div className={`lg:hidden py-9`}></div>
    </div>
  );
};

export default NavBar;
