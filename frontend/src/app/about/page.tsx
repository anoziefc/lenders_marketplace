import AboutHero from "@/components/AboutHero";
import MissionSection from "@/components/Abouts";
import Breadcrumb from "@/components/Breadcrumb";
import Button from "@/components/Button";
import TeamSection from "@/components/TeamSection";
import StatsSection from "@/components/StatsSection";
import React from "react";
import JobOpeningsSection from "@/components/JobOpeningsSection";

const page = () => {
  return (
    <div>
      <Breadcrumb />
      <AboutHero
        title="The story behind"
        heading="FundOnion"
        paragraphs={[
          "We're building a new way for SMEs to access funding transparently – direct to the lenders who will cater for their needs.",
          "Too many small businesses struggle to find the right funding. We believe that by providing SMEs with the knowledge and tools to navigate the financial world, we can make a positive impact on people’s lives, businesses, and dreams.",
        ]}
        buttonText="Meet our team"
        imageUrl="/about-hero.webp"
      />
      <MissionSection />
      <TeamSection />
      <StatsSection />
      <JobOpeningsSection />
    </div>
  );
};

export default page;
