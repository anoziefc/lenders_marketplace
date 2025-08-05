import Form from "@/components/Form";
import Rating from "@/components/Ratings";
import TopBar from "@/components/TopBar";
import Link from "next/link";

const Page = () => {
  return (
    <div
      className={
        "p-4 flex flex-col gap-4 items-center justify-center min-h-screen"
      }
    >
      <TopBar />
      <div className="flex items-center content-center w-full justify-center">
        <Form />
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
