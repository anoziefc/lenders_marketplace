import Breadcrumb from "@/components/Breadcrumb";
import GuideToBusinessNavigation from "@/components/GuideToBusinessNavigation";
import TitleWrapper from "@/components/PageTitleWrapper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  const sections =  [
      {
        id: 1,
        href: "#introduction",
        text: "Introduction",
        status: "active",
      },
      { id: 2, href: "#term-loans", text: "Term Loans", status: "default" }, // Active item
      {
        id: 3,
        href: "#resolving-credit-facilities",
        text: "Revolving Credit Facilities",
        status: "default",
      },
      {
        id: 4,
        href: "#merchant-cash-advances",
        text: "Merchant Cash Advances",
        status: "highlighted",
      }, // Highlighted item
      { id: 5, href: "#applying", text: "Applying", status: "default" },
      { id: 6, href: "#tiers", text: "Tiers", status: "default" },
      { id: 7, href: "#other-guides", text: "Other Guides", status: "default" },
    ]
  return (
    <div>
      <Breadcrumb />
      <TitleWrapper title={"FundOnion's Guide to Business Loans"} summary={"Learn the basics of business loans & working capital in easy English right here"}/>
      <div className="flex w-full justify-center pt-20">
        <div className="flex flex-col md:flex-row max-w-6xl gap-4 px-4 py-12">
          <div className="flex-1 md:max-w-md">
            <GuideToBusinessNavigation initialItems={sections} />
          </div>
          <div className="flex flex-col flex-1 gap-3 mx-auto">
            <h2 id="introduction" className="text-xl font-bold">
              1{")"} Introduction to business loans
            </h2>
            <p className="">
              A business loan is any kind of loan offered to a commercial
              entity, rather than an individual person. As with all loans, it
              involves the creation of a debt, which will be repaid with added
              interest. There are a number of different types of business loans
              available.
            </p>
            <b>The finance industry</b>
            <p className="">
              The financial services world has seen big changes in the past ten
              years or so. One of these has been the huge surge in the use of
              technology – particularly for personal credit after the 2008
              financial crisis.
            </p>
            <p>
              This has led to the rapid growth of financial technology. Also
              known as “FinTech”, this is an industry made up of new companies
              that use technology to make financial services more efficient. A
              whole range of innovative new FinTech banking institutions have
              sprouted up like Revolut, Monzo and Tide.
            </p>
            <p>
              There’s been a similar growth in the use of new technology for
              small business finance too. In fact, an excellent report by 11:FS
              pointed out that 2013 was the year when many smart new challenger
              banks across the UK shook up a stagnant lending market.
            </p>
            <p>
              What we’ve seen since then has been a massive increase in the
              services offered to small businesses in the UK - from well-known
              lending brands such as Funding Circle or iwoca, to the more
              boutique providers who are still just as good.
            </p>
            <div className="relative">
              <Image src="/images/guide-to-business-loans/1.jpg" alt="" fill />
            </div>
            <h3>So, what does this mean for you?</h3>
            <ul>
              <li>
                The business loans market has more lenders than ever before.
                These
              </li>
              <li>
                lenders are competing hard for your business – which is good.
                It’s
              </li>
              <li>
                becoming harder and harder to compare loan products and work out
                what’s best for your business – which is not so good.
              </li>
            </ul>
            <p>
              Our Rough Guide to Business Loans (and Working Capital) will help
              you through it all. You need working capital to keep your business
              running and help to grow it. Well there are three main ways to get
              it - regular term loans, revolving credit facilities and merchant
              cash advances.
            </p>
            <p>
              We’re going to explain how they work, when to use them and how to
              apply.
            </p>
            <p>
              It’s all going to be in plain and simple English with no financial
              jargon or buzzwords. That makes a change for finance stuff doesn’t
              it?
            </p>
            <h2 id="term-loans" className="text-xl font-bold">
              2{")"} Term Loans
            </h2>
            <p>
              The most familiar kind of business finance is the good
              old-fashioned term loan. In recent years, high street banks have
              been unable to provide <b>smaller-sized business loans</b> because
              of increased regulation and higher costs. So who’s lending and
              what’s available right now?
            </p>
            <p>
              Check out our
              <Link href="https://app.fundonion.com/journey/?utm_medium=null&utm_source=null&utm_campaign=null">
                FundOnion Decision Engine
              </Link>
              to instantly see some of the lenders in the market right now,
              offering term loans from just £10,000 up to £500,000.
            </p>
            <h3> What are the fees?</h3>
            <p>
              Term loans are a type of business loan that work by giving cash to
              your business and setting fixed repayments usually monthly. You
              pay back both the amount you borrowed plus interest over the life
              of the loan.
            </p>
            <p>
              The two most common types of term loan repayments are either
              amortising loans or balloon/bullet loans. These vary on when the
              amount you borrowed and interest are paid back.
            </p>
            <h3>What security is needed?</h3>
            <p>
              You can go for either a secured or unsecured loan. With an
              unsecured loan, you can usually borrow up to a maximum of
              £250,000.
            </p>
            <p>
              A secured loan means that the loan is secured against the value of
              an asset, just in case your business can’t keep up repayments.
              With a secured loan, the lending amounts can go much higher and
              are based on the value of the asset being secured against.
            </p>
            <p>In short, secured business loans allow you to:</p>
            <ul>
              <li>Borrow more.</li>
              <li>At a lower interest rate.</li>
              <li>
                Spreading repayments over a longer period than an unsecured
                business loan.
              </li>
            </ul>
            <p>
              This is simply because they represent a lower credit risk to a
              lender. If you don’t repay the loan, the lender can acquire the
              asset secured against it.
            </p>
            <h2 id="resolving-credit-facilities" className="text-xl font-bold">
              What are personal guarantees?
            </h2>
            <p>
              Personal guarantees can be a bit of a headache for potential
              borrowers. These go beyond your business and put your personal
              assets on the line if you can’t repay the business loan.
            </p>
            ‍
            <p>
              Lenders usually ask for these from the directors of the business
              applying for the loan and perhaps the major shareholders too. So
              make sure if you’re going to provide a{" "}
              <b>personal guarantee for a business loan</b> or any other kind of
              finance, that you fully understand the implications.
            </p>
            <p>
              What’s more, personal guarantees are almost always required by
              lenders if you’re applying for a business loan. There are some
              alternative finance lenders who may lend either without a personal
              guarantee, or a limited personal guarantee, but this is not the
              norm.
            </p>
            <h2 id="resolving-credit-facilities" className="text-xl font-bold">
              3{")"} Revolving Credit Facilities
            </h2>
            <p>
              Revolving credit facilities (or RCFs) are a less well-known form
              of working capital, but they can be a really useful product either
              on their own or alongside a regular term loan.
            </p>
            ‍
            <p>
              With an RCF, the lender approves a certain maximum amount (say
              £100,000), which you can draw on from time to time.
            </p>
            <p>
              This is sometimes linked to an overdraft but is slightly
              different. That’s because Revolving Credit Facilities are ongoing
              agreements between you and the lender for a fixed term, like 12
              months for instance. But they aren’t repayable on demand like an
              overdraft is.
            </p>
            <p>
              The great thing about an RCF is that you don’t pay any interest on
              money you’re not using as you would with a term loan, where you
              get the whole lump sum at the start.
            </p>
            <p>
              But there is a drawback. If you don’t use the money, lenders
              usually charge a non-utilisation fee so that they’re not making
              capital available to you for free! They want to get a return on it
              obviously.
            </p>
            <h3>Example of how an RCF would work:</h3>
            <ul>
              <li>
                A bank authorises you with a revolving credit facility of up to
                £100,000 for 12 months;
              </li>
              <li>
                The fees for this include a £200 setup fee, interest payable on
                the money you use charged at 2.5% per month, and a
                non-utilisation fee of 0.05% per month; so
              </li>
              <li>
                During that 12 months, you use £50,000 of the RCF for 9 months
                and pay off the interest monthly.
              </li>
            </ul>
            <h3>What are the fees?</h3>
            <ul>
              <li>Total interest paid for the 9 months = £11,250</li>
              <li>Non-utilisation payable on £50,000 for 9 months = £225</li>
              <li>Non-utilisation payable on £100,000 for 3 months = £150</li>
            </ul>
            <h3>What&apos;s a Revolving Credit Facility useful for?</h3>
            <p>
              RCFs are a useful type of Business Loan. They are useful if you
              need flexible funding. This isn’t just working capital to keep
              your business going smoothly, but also for growth such as running
              marketing campaigns or when revenue is fluctuating.
            </p>
            <h2 id="merchant-cash-advances" className="text-xl font-bold">
              4{")"} Merchant Cash Advances
            </h2>
            <p>
              Merchant Cash Advances (or MCAs and also known as Business Cash
              Advances) provide an upfront lump sum to your business. They take
              repayments based on a percentage of revenue from your business.
              Therefore, when deciding how much money to advance to your
              company, lenders usually look at your gross revenue.
            </p>
            <p>
              MCAs work particularly well if you take a lot of money in credit
              and debit card payments. That’s because the lenders can simply
              plug into your payment processing system to deduct their take –
              say 10% of all sales for example.
            </p>
            <p>
              The really interesting thing about MCAs is that repayments aren’t
              on a fixed schedule – they’re linked to your revenue. This is
              unlike a term loan where you’ll be making regular fixed monthly
              payments whether your monthly turnover is high or low.
            </p>
            <div className="relative">
              <Image
                src="/images/guide-to-business-loans/mca.png"
                alt="Securing an MCA"
                fill
              />
            </div>
            <h3>It&apos;s not interest rate, it&apos;s factor rate</h3>
            <p>
              Merchant Cash Advances are also slightly different in that they
              don’t charge interest rates, but factor rates. These are simply a
              different way of measuring the cost of the money being borrowed.
            </p>
            <p>
              They are worked out by multiplying the cash advance you receive by
              the factor rate. This is because all of the interest is added to
              the amount you borrow at the start. This then gives the total
              amount you have to repay.
            </p>
            <p>
              For example, say you ask for a £15,000 cash advance with a factor
              rate of 1.2 for 12 months. This means that you would need to pay
              back £18,000 total (£15,000 x 1.2 = £18,000).
            </p>
            <p>
              This might look like there’s annual interest here of 20%. But it
              helps to understand here that the interest cost of the advance is
              20%, as it’s all added to the initial cash advance. This is
              different to an Annual Percentage Rate (APR) where the interest
              payments will usually decrease over the term of the loan.
            </p>
            <h3>How does repayment work?</h3>
            <p>
              <b>
                The payback period on an MCA is not fixed, but is usually based
                on your business revenue.
              </b>{" "}
              Usually a lender will make an advance of a percentage of your
              monthly turnover. The cash advance will then be expected to be
              paid back on a projected forecast of that.
            </p>
            <h2 id="applying" className="text-xl font-bold">
              5{")"} Applying
            </h2>
            <p>
              When it comes to business loans, lenders make their decisions
              based on the overall health and suitability of your business.
              Basically, they’re checking that you’ll be able to pay them back –
              whichever type of financial product you choose, term loan, RCF or
              MCA.
            </p>
            ‍
            <div>
              <p>Therefore, you need to think carefully about:</p>
              <ul>
                <li>
                  The kind of finance that would be best for your business
                </li>
                <li>
                  How much money you would have left at the end of each month to
                  repay any loan, RCF or MCA you’ve taken on
                </li>
              </ul>
            </div>
            <div>
              <p>
                When applying for a business loan, you should be ready to send
                to <br />
                your lender or broker the following information:
              </p>
              <ul>
                <li>
                  Basic business information such as your trading name, legal
                  entity name, company number
                </li>
                <li>
                  What your business does and a brief description of your
                  activities
                </li>
                <li>Your last full filed set of annual accounts</li>
                <li>6 months’ worth of business bank statements</li>
                <li>Information about any overdraft you have in place</li>
                <li>
                  Information about any other kinds of debt you have outstanding
                  – amount, repayment dates, payback period
                </li>
              </ul>
              Right now, the market has plenty of lenders all with slightly
              different attitudes to lending and the risks they’re prepared to
              take with a borrower.
            </div>
            <h2 id="tiers" className="text-xl font-bold">
              6{")"} Tiers - an industry secret
            </h2>
            <p>
              At FundOnion, we often talk about lenders being Tier 1, Tier 2 or
              Tier 3. This isn’t a measure of how good that lender is or their
              quality of service, it’s a reflection of how much risk they are
              willing to take when lending.
            </p>
            <h3>Tier 1 - Institutional lenders</h3>
            <p>
              This tier includes high street banks and is the cheapest tier, but
              least willing to take on any risk when lending.
            </p>
            <h3>Tier 2 - Merchant banks</h3>
            <p>
              These are specialist banks who filled the gap when high street
              banks stopped providing smaller-sized business loans.
            </p>
            <h3>Tier 3 - Specialist lenders</h3>
            <p>
              Includes independent financial organisations who may be able to
              help businesses which can’t tick all of the ‘bank’ boxes.
            </p>
            <h2 id="other-guides" className="text-xl font-bold">
              7{")"} Found that useful? Take a look around the rest of
              FundOnion.com for more handy hints, tips, and guides.
            </h2>
            <Link href="https://www.fundonion.com/guides/guide-to-invoice-finance">
              Guide to Invoice Finance
            </Link>
            <Link href="https://www.fundonion.com/guides/guide-to-asset-finance">
              Guide to Asset Finance
            </Link>
            <Link href="https://www.fundonion.com/blog">Blog</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
