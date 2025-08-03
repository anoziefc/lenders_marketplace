import Image from "next/image";
import React from "react";


/**
 * Reusable NumberedStep component for displaying a numbered item with a title and description.
 * @param {NumberedStepProps} props - The props for the component.
 * @returns {JSX.Element} The rendered NumberedStep component.
 */
const NumberedStep: React.FC<NumberedStepProps> = ({
  number,
  title,
  description,
}) => {
  return (
    <div className="flex items-start mb-6">
      {/* Number circle */}
      <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-teal-700 text-white rounded-full flex items-center justify-center font-bold text-lg md:text-base shadow-md">
        {number}
      </div>
      {/* Text content */}
      <div className="ml-4">
        <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-1">
          {title}
        </h3>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};


/**
 * Main BusinessFinanceSection component that displays a two-column layout
 * with a title, subtitle, numbered steps, and an image.
 * @param {BusinessFinanceSectionProps} props - The props for the component.
 * @returns {JSX.Element} The rendered BusinessFinanceSection component.
 */
const BusinessFinanceSection: React.FC<BusinessFinanceSectionProps> = ({
  title,
  subtitle,
  steps,
  imageUrl,
  imageAlt,
}) => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 rounded-lg shadow-lg max-w-7xl mx-auto my-8">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 lg:gap-16">
        {/* Left Column: Text Content */}
        <div className="w-full md:w-1/2 lg:w-2/5 order-2 md:order-1">
          {/* Subtitle/Separator */}
          <div className="flex items-center mb-4">
            <div className="w-8 h-1 bg-teal-700 rounded-full mr-3"></div>
            <p className="text-teal-700 font-medium text-sm md:text-base">
              {subtitle}
            </p>
          </div>
          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
            {title}
          </h2>

          {/* Numbered Steps */}
          <div>
            {steps.map((step) => (
              <NumberedStep
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="w-full md:w-1/2 lg:w-3/5 order-1 md:order-2 flex justify-center items-center my-auto">
          <div className="relative rounded-xl overflow-hidden shadow-2xl w-full  aspect-square">
            <Image
              fill
              src={imageUrl}
              alt={imageAlt}
              className="object-cover rounded-xl"
              // Fallback for image loading errors
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Main App component to demonstrate usage
const PartnerSection: React.FC = () => {
  const sectionData = {
    title:
      "It's never been easier to find the right business finance partner for your business",
    subtitle: "—", // This represents the small line shown in the image
    steps: [
      {
        number: 1,
        title: "Our journey, your search",
        description:
          "Complete our journey and tell us some information about your business, how much funding you're looking for, and why.",
      },
      {
        number: 2,
        title: "Filter results",
        description:
          "Our proprietary decision engine will save you 100s of hours (and 1,000s of pounds) by showing you which funders you can apply to.",
      },
      {
        number: 3,
        title: "Apply direct and get the best deal",
        description:
          "See your eligible funders, including details like how much they charge and industry-insider information, then get connected to them. Direct.",
      },
    ],
    imageUrl: "/easier.webp", // Using the uploaded image URL
    imageAlt: "Woman working on a laptop, smiling",
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center p-4">
      <BusinessFinanceSection {...sectionData} />
    </div>
  );
};

export default PartnerSection;
