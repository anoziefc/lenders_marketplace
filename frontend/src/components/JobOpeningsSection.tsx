import React from "react";
import JobCard from "./JobCard";



// Main JobOpeningsSection Component
const JobOpeningsSection: React.FC = () => {
  const jobListings: JobListing[] = [
    {
      title: "Sales Development Representative",
      description:
        "As a SDR, you'll play a crucial role in helping source and qualify clients who are looking to secure funding for their businesses.",
      type: "Business",
      location: "London, United Kingdom",
    },
    {
      title: "Associate Broker",
      description: "Commercial Finance Broker for debt finance.",
      type: "Business",
      location: "London, United Kingdom",
    },
    // Add more job listings here if needed
    // {
    //   title: "Software Engineer",
    //   description: "Develop and maintain our cutting-edge financial platform.",
    //   type: "Engineering",
    //   location: "Remote",
    // },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <div className="h-1 w-12 bg-teal-600 mb-2 mx-auto md:mx-0"></div>{" "}
            {/* Underline */}
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Join the growing Contigo team
            </h2>
          </div>
          <a
            href="#" // Replace with actual link to all job openings
            className="inline-block bg-teal-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-teal-800 transition-colors duration-300"
          >
            All job openings
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobListings.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobOpeningsSection;
