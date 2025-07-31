"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Define the structure for a team member
interface TeamMember {
  name: string;
  title: string;
  description?: string; // Optional description for some roles
  imageSrc: string; // Placeholder for image URL
}

// Reusable TeamMemberCard Component
interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center w-full max-w-[230px] mx-auto">
      <Image
        src={""}
        alt={member.name}
        className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-gray-200"
        // Fallback for broken images or if imageSrc is not provided
        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
          e.currentTarget.src = `https://placehold.co/96x96/E0E0E0/808080?text=${member.name.charAt(
            0
          )}`;
        }}
      />
      <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
      <p className="text-sm text-green-600 mb-2">{member.title}</p>
      {member.description && (
        <p className="text-gray-600 text-xs leading-relaxed mb-4">
          {member.description}
        </p>
      )}
      {/* LinkedIn Icon - using an inline SVG for simplicity */}
      <Link
        href="#" // Replace with actual LinkedIn profile URL
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-blue-700 transition-colors duration-200"
        aria-label={`LinkedIn profile of ${member.name}`}
      >
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      </Link>
    </div>
  );
};

// Main TeamSection Component
const TeamSection: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Neil Cassule",
      title: "Chief Commercial Officer",
      description: "Resident expert on lenders & their products.",
      imageSrc: "https://placehold.co/100x100/A0A0A0/FFFFFF?text=NC", // Placeholder
    },
    {
      name: "Tim Plummer",
      title: "Chief Technology Officer",
      description: "Builder & optimiser of FundOnion's tech.",
      imageSrc: "https://placehold.co/100x100/B0B0B0/FFFFFF?text=TP", // Placeholder
    },
    {
      name: "James Robson",
      title: "CEO",
      description: "Former lawyer, now building the future of SME finance.",
      imageSrc: "https://placehold.co/100x100/C0C0C0/FFFFFF?text=JR", // Placeholder
    },
    {
      name: "Archie Humpage",
      title: "Associate Broker",
      imageSrc: "https://placehold.co/100x100/D0D0D0/FFFFFF?text=AH", // Placeholder
    },
    {
      name: "Archie Williams",
      title: "Associate Broker",
      imageSrc: "https://placehold.co/100x100/E0E0E0/FFFFFF?text=AW", // Placeholder
    },
    {
      name: "Shai Koskas",
      title: "Associate Broker",
      imageSrc: "https://placehold.co/100x100/F0F0F0/FFFFFF?text=SK", // Placeholder
    },
    {
      name: "Gabriel Lastella",
      title: "Finance Analyst",
      imageSrc: "https://placehold.co/100x100/A5A5A5/FFFFFF?text=GL", // Placeholder
    },
    {
      name: "Amrita Julka",
      title: "Marketing Executive",
      imageSrc: "https://placehold.co/100x100/B5B5B5/FFFFFF?text=AJ", // Placeholder
    },
    {
      name: "Jane Astrid Yeo",
      title: "Corporate Strategy Associate",
      imageSrc: "https://placehold.co/100x100/C5C5C5/FFFFFF?text=JAY", // Placeholder
    },
    {
      name: "Jack Tran",
      title: "Associate Broker",
      imageSrc: "https://placehold.co/100x100/D5D5D5/FFFFFF?text=JT", // Placeholder
    },
    {
      name: "Maia Reid",
      title: "Marketing Manager",
      imageSrc: "https://placehold.co/100x100/E5E5E5/FFFFFF?text=MR", // Placeholder
    },
    {
      name: "Andrew Bird",
      title: "Business Intelligence Manager",
      imageSrc: "https://placehold.co/100x100/F5F5F5/FFFFFF?text=AB", // Placeholder
    },
    {
      name: "Cobi Mintz",
      title: "Associate Broker",
      imageSrc: "https://placehold.co/100x100/AFAFAF/FFFFFF?text=CM", // Placeholder
    },
    {
      name: "Ricardo Turet",
      title: "Finance Analyst",
      imageSrc: "https://placehold.co/100x100/BFBFBF/FFFFFF?text=RT", // Placeholder
    },
    {
      name: "Milan Djotunovic",
      title: "Associate Broker",
      imageSrc: "https://placehold.co/100x100/CFCFCF/FFFFFF?text=MD", // Placeholder
    },
    {
      name: "George Allen",
      title: "Associate Broker",
      imageSrc: "https://placehold.co/100x100/DFDFDF/FFFFFF?text=GA", // Placeholder
    },
    {
      name: "Amolak Sahota",
      title: "Associate Broker",
      imageSrc: "https://placehold.co/100x100/EFEFEF/FFFFFF?text=AS", // Placeholder
    },
    {
      name: "Toye A",
      title: "Engineering Manager",
      imageSrc: "https://placehold.co/100x100/EFEFEF/FFFFFF?text=TA", // Placeholder
    },
    {
      name: "Charlie Poland",
      title: "Bubble Developer",
      imageSrc: "https://placehold.co/100x100/EFEFEF/FFFFFF?text=CP", // Placeholder
    },
    {
      name: "Alexandra Granstrom",
      title: "Chief Of Staff",
      imageSrc: "https://placehold.co/100x100/EFEFEF/FFFFFF?text=AG", // Placeholder
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
          The team behind FundOnion
        </h2>

        <div className="flex sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-6">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
