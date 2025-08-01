import Image from "next/image";
import type { TeamMember } from "./TeamSection";
import Link from "next/link";

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

export default TeamMemberCard;
