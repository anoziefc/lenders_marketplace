import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {ToastContainer} from "react-toastify";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"]
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"]
});

export const metadata: Metadata = {
    title: "Business Loans - Flexible Fundings from £1K–£1000000",
    description: "Secure £1K–£1M in business funding fast with Contigo Commercial Finance. Apply in 60 seconds, get approved in as little as 4 hours, and choose from 50+ UK lenders with transparent pricing."
};

export default function RootLayout({
                                       children
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <Navbar/>
        {children}
        <ToastContainer/>
        <Footer/>
        </body>
        </html>
    );
}
