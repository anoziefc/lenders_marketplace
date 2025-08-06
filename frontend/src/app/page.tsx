import ApprovalRibbon from "@/components/ApprovalRibbon";
import BusinessesFinanceSection from "@/components/BusinessFinanaceSection";
import HomeFaq from "@/components/HomeFaq";
import HomeHero from "@/components/HomeHero";
import HomeVideo from "@/components/HomeVideo";
import PartnerSection from "@/components/PartnerSection";
import StoriesSlide from "@/components/StoriesSlider";
import TakeControlRibbon from "@/components/TakeControlRibbon";
// Define some mock data for demonstration

export default function Home() {
  return (
    <div className={""}>
      <HomeHero />
      <HomeVideo />
      <BusinessesFinanceSection />
      <PartnerSection />
      <StoriesSlide />
      <ApprovalRibbon />
      <HomeFaq />
      <TakeControlRibbon />
    </div>
  );
}
