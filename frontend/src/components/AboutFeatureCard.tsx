import react from "react";


const AboutFeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 mx-auto sm:max-w-sm">
      <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full">
        {icon}
      </div>
      <div className="flex-grow">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default AboutFeatureCard;
