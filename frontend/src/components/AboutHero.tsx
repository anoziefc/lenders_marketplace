// components/About/AboutHero.tsx
import Image from "next/image";
import React from "react";

type AboutHeroProps = {
  title: string;
  heading: string;
  paragraphs: string[];
  buttonText: string;
  imageUrl: string;
};

const AboutHero: React.FC<AboutHeroProps> = ({
  title,
  heading,
  paragraphs,
  buttonText,
  imageUrl,
}) => {
  return (
    <section className=" bg-[#024E45] text-white">
      <div className="md:h-[600px] mx-auto grid md:grid-cols-2 gap-12 ">
        {/* Text Content */}
        <div className="max-w-lg px-6 py-16 ml-auto">
          <h1 className="text-3xl md:text-4xl font-bold leading-snug mb-6">
            {title}
            <br />
            {heading}
          </h1>
          {paragraphs.map((text, idx) => (
            <p key={idx} className="text-sm text-white/80 mb-4">
              {text}
            </p>
          ))}
          <button className="mt-4 px-6 py-2 bg-white text-[#024E45] rounded-full font-semibold hover:bg-gray-100 transition">
            {buttonText}
          </button>
        </div>

        {/* Image */}
        <div className="flex-1 relative flex justify-center items-center overflow-hidden">
          <Image
            src={imageUrl}
            alt="About Contigo"
            className="h-full shadow-lg aspect-square"
            fill
          />
          <div className="absolute bottom-0 right-0 w-20 h-20 bg-[#FFD86C] rounded-full -mb-6 -mr-6 z-[-1]" />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
