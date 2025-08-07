import React from "react";
import {Linkedin, Twitter, Instagram} from "lucide-react"; // Using lucide-react for icons
import Image from "next/image";
import Logo from "@/components/Logo";


/**
 * Reusable FooterSection component for displaying a column of links.
 * It takes a title and an array of link objects.
 */
const FooterSection: React.FC<FooterSectionProps> = ({title, links}) => {
    return (
        <div className="flex flex-col items-start space-y-3">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
            <ul className="space-y-2">
                {links.map((link, index) => (
                    <li key={index}>
                        <a
                            href={link.href}
                            className="text-gray-600 hover:text-green-600 transition-colors duration-200 text-base"
                        >
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};


/**
 * Reusable SocialIcon component for displaying a social media icon.
 * It takes a link, an icon component, and an accessibility label.
 */
const SocialIcon: React.FC<SocialIconProps> = ({href, icon, ariaLabel}) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ariaLabel}
            className="text-gray-600 hover:text-green-600 transition-colors duration-200 p-2 rounded-full hover:bg-gray-100"
        >
            {icon}
        </a>
    );
};

/**
 * The main Footer component that aggregates all sections.
 * It includes the logo, description, link columns, copyright, and social media.
 */
const Footer: React.FC = () => {
    return (
        <footer className="bg-white py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                {/* Logo and Description Section */}
                <div className="lg:col-span-2 flex flex-col space-y-4">
                    <div className="flex items-center">
                        {/* Using a simple text logo, could be an SVG */}
                        <Logo/>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-base">
                        We&apos;re building a new way for small businesses to access funding
                        transparently - direct to the lenders who will cater for their
                        needs. We believe that by providing SMEs with the knowledge and
                        tools to navigate the financial world, we can make a positive impact
                        on people&apos;s lives, businesses, and dreams.
                    </p>
                </div>

                {/* Funding Section */}
                <FooterSection
                    title="Funding"
                    links={[{name: "Get Funded", href: "#"}]}
                />

                {/* Resources Section */}
                <FooterSection
                    title="Resources"
                    links={[
                        {name: "Business Loans", href: "#"},
                        {name: "Asset Finance", href: "#"},
                        {name: "Invoice Finance", href: "#"},
                        {name: "Blog", href: "#"}
                    ]}
                />

                {/* Company Section */}
                <FooterSection
                    title="Company"
                    links={[
                        {name: "About Us", href: "#"},
                        {name: "Terms & Conditions", href: "#"},
                        {name: "Privacy Policy", href: "#"},
                        {name: "Careers", href: "#"},
                        {name: "Contact", href: "#"}
                    ]}
                />
            </div>

            {/* Bottom Section: Copyright, Badges, Social Media */}
            <div
                className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between space-y-6 sm:space-y-0">
                <div className="text-gray-500 text-sm text-center sm:text-left">
                    Copyright © FundOnion Limited, 2023 | Registered in England (co.
                    number 12743839).
                    <br/>
                    FundOnion Limited is registered with the Register of Data Controllers
                    ICO number ZZA776738.
                </div>

                {/* Badges/Logos - Using placeholder images for demonstration */}
                <div className="flex items-center space-x-4">
                    <Image
                        height={20}
                        width={20}
                        src=""
                        alt="FSB Logo"
                        className="h-10 rounded-md"
                    />
                    <Image
                        height={20}
                        width={20}
                        src=""
                        alt="100 Logo"
                        className="h-10 rounded-md"
                    />
                    <Image
                        height={20}
                        width={20}
                        src=""
                        alt="BPCA Logo"
                        className="h-10 rounded-md"
                    />
                </div>

                {/* Social Media Icons */}
                <div className="flex items-center space-x-3">
                    <SocialIcon
                        href="#"
                        icon={<Linkedin size={24}/>}
                        ariaLabel="LinkedIn"
                    />
                    <SocialIcon
                        href="#"
                        icon={<Twitter size={24}/>}
                        ariaLabel="Twitter"
                    />
                    <SocialIcon
                        href="#"
                        icon={<Instagram size={24}/>}
                        ariaLabel="Instagram"
                    />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
