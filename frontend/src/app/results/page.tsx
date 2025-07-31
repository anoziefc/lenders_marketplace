import ContactSection from "@/components/ContactSection";
import Form from "@/components/Form";
import NoResultsSection from "@/components/NoResultsSection";
import Rating from "@/components/Ratings";
import TopBar from "@/components/TopBar";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div
      className={"flex flex-col gap-4 items-center justify-center min-h-screen"}
    >
      <div className="p-4 w-full">
        <TopBar />
      </div>
      <div className="flex gap-5 flex-col items-center content-center w-full justify-center">
      <div className="p-4 w-full">
        <NoResultsSection />
        </div>
        <ContactSection />
      </div>
      <div className="">
        <p>
          Need some help? Give us a call on{" "}
          <Link className="blue" href="tell:">
            02081232841
          </Link>{" "}
          or email us at
          <Link className="blue" href="mailto:hello@fundonion.com">
            {" "}
            hello@fundonion.com
          </Link>
        </p>
        <p>
          Copyright © FundOnion Limited, 2024 | Registered in England & Wales
          (co. number 12743839)
        </p>
      </div>
      <div className="">
        <Rating />
      </div>
    </div>
  );
};

export default Page;
