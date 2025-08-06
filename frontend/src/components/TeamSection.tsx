"use client";
import React from "react";
import TeamMemberCard from "./TeamMemberCard";
import Button from "./Button";




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

        <div className="flex sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-6 max-w-3xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-12  max-w-54 mx-auto">
        <Button
          onClick={() => {}}
          value={"Join our team"}
          cls={"bg-teal-800 text-white"}
        />
      </div>
    </section>
  );
};

export default TeamSection;
