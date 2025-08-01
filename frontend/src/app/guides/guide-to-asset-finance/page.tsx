import Breadcrumb from "@/components/Breadcrumb";
import GuideToBusinessNavigation from "@/components/GuideToBusinessNavigation";
import TitleWrapper from "@/components/PageTitleWrapper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  const sections = [
    {
      id: 1,
      href: "#introduction",
      text: "Introduction",
      status: "active",
    },
    {
      id: 2,
      href: "#hire-purchase",
      text: "Hire purchase & Lease",
      status: "default",
    },
    { id: 3, href: "#applying", text: "Applying", status: "default" },
    { id: 4, href: "#other-guides", text: "Other Guides", status: "default" },
  ];
  return (
    <div>
      <Breadcrumb />
      <TitleWrapper
        title={"FundOnion's Guide to Asset Finance"}
        summary={
          "Hard, soft, tangible, intangible, Asset Finance can be a real minefield. Keep your head screwed on with our Asset Finance Guide."
        }
      />
      <div className="flex w-full justify-center pt-20">
        <div className="flex flex-col md:flex-row max-w-6xl gap-4 px-4 py-12">
          <div className="flex-1 md:max-w-md">
            <GuideToBusinessNavigation initialItems={sections} />
          </div>
          <div className="flex flex-col flex-1 gap-3 mx-auto">
            <h2 id="introduction" className="text-xl font-bold">
              1{")"} Introduction
            </h2>
            <p className="">
              <b>
                Asset finance allows you to get new equipment by spreading
                repayments in instalments over a set time period rather than in
                one lump sum.
              </b>
              . That’s why companies often choose asset finance as it can help
              manage cashflow.
            </p>
            <b>The finance industry</b>
            <p className="">
              It’s a popular finance product too, with the Finance and Leasing
              Association reporting new lending of £36 billion during 2019.
              However, asset finance has become a tighter market since the
              arrival of COVID-19, with asset finance deals down 60% in May 2020
              compared with 2019.
            </p>
            <p>
              This has also made the market more competitive, and there are
              clear opportunities for small businesses to get good rates on
              finance for their equipment needs.
            </p>
            <p>
              So we’re going to tell you everything you need to know in our
              Guide to Asset Finance. It’s all going to be in plain and simple
              English with no financial jargon or buzzwords. That makes a change
              for finance stuff doesn’t it?
            </p>
            <h3>What is asset finance?</h3>
            <p>
              It’s a type of financial product available to all kinds of
              businesses. In recent years though, it’s been mainly used to
              finance the purchase of commercial vehicles, plant and machinery,
              IT equipment and other business equipment
            </p>
            <p>
              In short, asset finance is based on using an asset as collateral
              for getting funds from a lender, bank or other provider. In fact,
              it can give you a pretty good deal if you’re looking to reduce
              your capital expenditure, ease pressure on your cashflow and boost
              your productivity.
            </p>
            <div className="relative">
              <Image src="/images/guide-to-business-loans/1.jpg" alt="" fill />
            </div>
            <h2 className="text-xl font-bold">2{")"} Asset Finance and Leasin</h2>
            <p>
              There are two main types of asset finance as you can see from our
              infographic below:
            </p>
            <div className="relative">
              <Image src="/images/guide-to-business-loans/1.jpg" alt="" fill />
            </div>
            <h3>Lease</h3>
            <p>
              For leases, the asset will sit on your balance sheet and you can
              record the rental costs of the lease onto your profit and loss
              statement. We’re going to split leases into two strands: finance
              leases and operating leases.
            </p>
            <h3>(i) Finance Lease</h3>
            <p>
              With a finance lease, the lender procures and provides the assets
              to your business. You then take on all of the rights and
              obligations of the asset until the end of the term.
            </p>
            <p>
              You pay instalments, i.e. rent, while you have the asset. At the
              end of the lease agreement, you have to return the asset to the
              lender. Finance leases usually run for the useful life of the
              asset.
            </p>
            <h3>(ii) Operating Lease</h3>
            <p>
              Very similar to a finance lease, but an operating lease runs for
              less than the useful life of the asset. We’ll give you an example
              below but importantly, the lender will not try to get back the
              money they spent buying the asset. They will get that by selling
              the asset after your lease period is over.
            </p>
            ‍
            <p>
              This means that operating leases are generally cheaper than
              finance leases. This type of product is often used to hire motor
              vehicle fleets.
            </p>
            <h2 className="text-xl font-bold">3{")"} Applying</h2>
            <p>
              Asset Finance providers such as Metro Bank, Lombard Asset Finance
              or Kingsway Asset Finance will look at the value of the underlying
              asset being financed, as well as whether you can afford to make
              the payments you’re taking on.
            </p>
            ‍
            <p>
              When it comes to hard assets like cars for example, lenders will
              want details of the product you’re looking to finance. Then they
              can make a valuation now, and on the asset’s resale value in the
              future.
            </p>
            <div className="">
              <p>To do this, they’ll need to know:</p>

              <ul>
                <li>The make and model of the asset</li>
                <li>Any relevant usage information such as mileage</li>
                <li>The year of manufacture</li>
                <li>The year of purchase</li>
              </ul>
            </div>
            <div className="">
              <ul>
                <li>How you’re going to use the asset</li>
                <li>Your company’s annual turnover and predicted revenues</li>
                <li>
                  The personal credit history of your directors and any major
                  shareholders
                </li>
                <li>
                  Your personal assets for the purposes of the personal
                  guarantee - whether you’re a homeowner for instance
                </li>
              </ul>
            </div>
            <h2>
              7{")"} Found that useful? Take a look around the rest of
              FundOnion.com for more handy hints, tips, and guides.
            </h2>
            <Link href="">Guide to Invoice Finance</Link>
            <Link href="">Guide to Business Loans</Link>
            <Link href="">Blog</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
