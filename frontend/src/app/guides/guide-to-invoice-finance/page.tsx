import Breadcrumb from "@/components/Breadcrumb";
import GuideToBusinessNavigation from "@/components/GuideToBusinessNavigation";
import TitleWrapper from "@/components/PageTitleWrapper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  const sections = [
    { id: 1, href: "#introduction", text: "Introduction", status: "active" },
    {
      id: 2,
      href: "#factoring-vs-discounting",
      text: "Factoring vs. Discounting",
      status: "default",
    },
    { id: 3, href: "#fees-and-costs", text: "Fees & Costs", status: "default" },
    {
      id: 4,
      href: "#will-it-work-for-you",
      text: "Will It Work For You?",
      status: "default",
    },
    { id: 5, href: "#applying", text: "Applying", status: "default" },
    {
      id: 6,
      href: "#how-popular-is-it",
      text: "How Popular Is It?",
      status: "default",
    },
    { id: 7, href: "#other-guides", text: "Other Guides", status: "default" },
  ];
  return (
    <div>
      <Breadcrumb />
      <TitleWrapper
        title={"FundOnion's Guide to Invoice Finance"}
        summary={
          "Want to harness the power of your invoices to really get your cashflow moving? Find out how right here."
        }
      />
      <div className="flex w-full justify-center pt-20">
        <div className="flex flex-col md:flex-row max-w-6xl gap-4 px-4 py-12">
          <div className="flex-1 md:max-w-md">
            <GuideToBusinessNavigation initialItems={sections} />
          </div>
          <div className="flex flex-col flex-1 gap-4 mx-auto">
            <h2 id="introduction" className="text-xl font-bold">
              1{")"} Introduction
            </h2>
            <p>
              Invoice finance can be a big help to small businesses. It can
              assist in making your incoming payments more predictable and
              getting customers to pay more quickly.
            </p>
            ‍
            <p>
              In the UK, invoice finance has exploded in recent years and has
              become more and more popular. In fact, a recent report by IGF
              pointed out that 27% of SMEs are now using invoice finance.
            </p>
            <p>
              Even though invoice finance is being used by many more businesses
              these days, it’s still a fairly misunderstood financial product.
              So we’re going to tell you everything you need to know in our
              Rough Guide to Invoice Finance.
            </p>
            <p>
              It’s all going to be in plain and simple English with no financial
              jargon or buzzwords. That makes a change for finance stuff
              doesn’t it?
            </p>
            <h3>What is invoice finance?</h3>
            <p>
              It’s a kind of catch-all name for any kind of financing service
              which uses a company’s invoices as security to give them cash in
              advance. It’s also known as accounts receivables financing or
              receivables financing.
            </p>
            ‍
            <p>
              There are two main types of invoice finance: factoring and
              discounting:
            </p>
            <ul>
              <li>
                If the lender collects payments from your customers that’s
                factoring
              </li>
              <li>
                If you handle your own credit control and chasing of invoice
                payments that’s discounting
              </li>
            </ul>
            <p>
              Within these two categories, the products vary depending on
              whether or not they are:
            </p>
            <ul>
              <li>
                Whole ledger – the invoice finance product covers all of the
                company’s invoices
              </li>
              <li>
                Or selective – the invoice finance product only covers specific
                invoices from time to time
              </li>
            </ul>
            <h3>How does it work?</h3>
            <p>
              Basically, you sell your unpaid invoices to a lender, who then
              gives you a cash advance of a percentage of that invoice - usually
              between 80% and 90% of the invoice value. When the invoice is
              eventually paid by your customer, the lender gets back its advance
              plus any other fees.
            </p>
            <p>
              Any remaining amounts, for instance the other 10% or 20% of the
              invoice are also paid back to you.
            </p>
            <p>
              It’s not the simplest financial product out there but it can be
              very effective, especially if you have good sales but problems
              with cashflow.
            </p>
            <p>Here’s how it works in practice:</p>
            <div className="relative min-h-64">
              <Image
                src="/images/guide-to-invoice-finance/fees-infographic.png"
                alt="Invoice Finance Fees Infographic"
                fill
              />
            </div>
            <h2 id="factoring-vs-discounting" className="text-xl font-bold">
              2{")"} Factoring vs. discounting
            </h2>
            <p>
              As we said, there are two types of invoice finance: factoring and
              discounting.
            </p>
            ‍
            <p>
              The primary difference between these two comes down to who
              collects the payments from your customers. In slightly more
              detail:
            </p>
            <ul>
              <li>
                Factoring - the lender contacts your customers, tells them about
                the invoice factoring and collects the payments straight from
                them
              </li>
              <li>
                Discounting – you are responsible for collecting the payments
                and your customers don’t know about the invoice discounting
                facility
              </li>
            </ul>
            <h3>What are the fees?</h3>
            <ul>
              <li>Total interest paid for the 9 months = £11,250</li>
              <li>Non-utilisation payable on £50,000 for 9 months = £225</li>
              <li>Non-utilisation payable on £100,000 for 3 months = £150</li>
            </ul>
            <p>
              That’s the main difference between the two. There are also
              differences in admin between the two. For instance, with invoice
              discounting you control your sales ledger and you choose the
              invoices you want to receive an advance against.
            </p>
            ‍
            <p>
              Generally, full invoice factoring means that the lender takes over
              the admin of all of your invoices.
            </p>
            <p>
              What’s more, invoice discounting gives the lender much more risk
              so it’s usually only available to companies with £100,000+
              revenue, a healthy balance sheet and reliable customers.
            </p>
            <p>
              Invoice factoring on the other hand, is more suited to smaller
              businesses that need to unlock cash from their outstanding
              invoices.
            </p>
            <h2 id="fees-and-costs" className="text-xl font-bold">
              3{")"} Invoice Financing Companies Fees & costs
            </h2>
            <p>
              Fees are where invoice finance products get a bit tricky! That’s
              why you should always make sure you understand all of the relevant
              charges before entering into any agreement.
            </p>
            ‍
            <p>
              Invoice finance products usually have a number of fees, so let’s
              have a look at these – what they are, what they mean and how this
              all adds up:
            </p>
            <div className="relative min-h-64">
              <Image
                src="/images/guide-to-invoice-finance/fees-infographic.png"
                alt="Invoice Finance Fees Infographic"
                fill
              />
            </div>
            <h3>Contract length and termination</h3>
            <p>
              This brings us to our second gentle warning: once you start using
              invoice finance it can be tempting to continue using it.
            </p>
            <p>
              If you start factoring large amounts of your cashflow on a regular
              basis, then you’ll start to need invoice finance. That’s because
              you’ll have a cashflow gap each month as you send out your
              invoices and also pay off your lender with incoming funds.
            </p>
            <p>
              We’re not saying that invoice finance isn’t useful, it is. But be
              very aware of what you’re getting into and for how long. On this
              point, an invoice financing company contract usually last for 12
              months – that’s 9 months contract length with a notice period of
              around 3 months.
            </p>
            <p>
              If you’re not keen on committing yourself like this, then
              selective invoice finance lenders might be a better option for
              you.
            </p>
            <h3>Selective invoice factoring</h3>
            <p>
              Selective invoice finance products usually have much simpler fees
              than what we outlined above. They often have a flexible contract
              which means that once the lender has approved you, you can factor
              or discount selected invoices as and when you need to.
            </p>
            ‍
            <p>
              But nothing in life is free obviously. So you’ll pay slightly
              higher fees for this kind of product as the lender will charge you
              more for the flexibility.
            </p>
            <h2 id="will-it-work-for-you" className="text-xl font-bold">
              4{")"} Will it work for you?
            </h2>
            <p>
              Invoice finance can be useful if your company has problems with
              cashflow and you need to keep paying employees and suppliers.
            </p>
            <p>
              It can also helpful in limiting the amount of debt you build up.
              That’s because the cash advances you receive for your invoices
              will be in proportion to your revenue. So you won’t be saddling
              your business with more debt than you can pay off.
            </p>
            <p>
              In short, invoice finance is like a service that helps relieve
              your cashflow problems -and that service is paid for through a
              percentage of your profit margins.
            </p>
            <p>It can certainly be very useful if your business:</p>
            <ul>
              <li>Has seasonal sales</li>
              <li>Needs a short-term cashflow boost</li>
              <li>
                Doesn’t qualify for other financial services like business loans
                or revolving credit – or can only get them very expensively
              </li>
            </ul>
            <p>
              There are other non-traditional uses for this type of finance,
              such as using it to acquire another business. In the past there
              was a trend towards buying a company by invoice financing the
              company’s outstanding invoices.
            </p>
            <p>
              This is still possible in theory, but you should talk to a broker
              or financial adviser before going down this route.
            </p>
            <h2 id="applying" className="text-xl font-bold">
              5{")"} Applying
            </h2>
            <p>So let’s look at this from the lender’s point of view.</p>‍
            <p>
              The lenders’ biggest risk is that your customers won’t pay their
              invoices. So they’ll want to check out your business and
              understand it.
            </p>
            <p>
              What’s more, as your advances are based on your invoices they are
              not that concerned about your forecasted revenues. But they will
              want to confirm that your customers’ invoices are real, as
              unscrupulous business owners have forged invoices in the past!
            </p>
            <h3>Concentration Limits</h3>
            <p>
              In addition, they will often insist on a concentration limit in
              the arrangement. This simply means that a percentage of your
              approved funding limit can be used for an invoice to a single
              customer.
            </p>
            <p>
              However, this does mean that if most of your invoices go to a
              small number of customers, it can be harder for you to secure
              invoice financing.
            </p>
            <p>
              Here’s another gentle warning and this is something to check
              before even thinking about speaking to a lender.
            </p>
            <p>
              If your company sells stock or other inventory, and your customer
              contracts have a sale or return clause in them, this can cause a
              problem with some lenders. That’s because they can’t confirm an
              invoice has its value until after the customer has paid it.
            </p>
            <p>
              When applying for any kind of invoice finance, you’ll need to give
              the lender the following information:
            </p>
            <ul>
              <li>Your latest statutory accounts for the business</li>
              <li>
                Management information including an up-to-date balance sheet and
                profit and loss statement
              </li>
              <li>Lists of aged debtors and aged creditors</li>
              <li>Examples of key contracts with your customers</li>
              <li>
                An overall understanding of your business and your billing cycle
                - from issuing the invoice to collection of payment
              </li>
              <li>
                An ALIE Form (stands for "assets, liabilities, income,
                expenditure")
              </li>
            </ul>
            <p>
              When deciding how much negotiating power you might have for
              invoice finance, you need to look at:
            </p>
            <ul>
              <li>
                How big your trade debtors’ book is – what’s the total of all
                your unpaid invoices at that point in time
              </li>
              <li>
                How much the outstanding amount of all your unpaid invoices is
                spread across your customers – the concentration limit mentioned
                above
              </li>
              <li>How much you’re owed from time to time</li>
              <li>How frequently your customers pay and when it happens</li>
            </ul>
            <p>
              In addition, lenders will probably ask for legal paperwork and
              other protection such as:
            </p>
            <ul>
              <li>
                A debenture on your business – this is a loan agreement in
                writing between you and the lender that is registered at
                Companies House. It gives the lender security over your assets
              </li>
              <li>A personal guarantee from your directors</li>
              <li>Or a warranty if no personal guarantee is required</li>
              <li>A signed facility agreement</li>
            </ul>
            <h2 id="how-popular-is-it" className="text-xl font-bold">
              6{")"} How popular is it?
            </h2>
            <p>
              Invoice finance has become an extremely popular method of business
              finance in recent years. This is especially true among the 28% of
              IT and telecoms companies across the UK who now consider invoice
              finance a top funding source.
            </p>
            <p>
              According to data from UK Finance, funding for small businesses
              via invoice finance and other forms of asset-based lending was
              around £22.7 billion at the end of 2018 – that’s up 2.5% on 2017.
            </p>
            <p>
              What’s more, the number of companies in the UK who use invoice
              finance and other asset-based lending is around 40,000. So it’s
              definitely popular with small businesses of all shapes and sizes.
            </p>
            <h2 id="other-guides" className="text-xl font-bold">
              7{")"} Found that useful? Take a look around the rest of
              FundOnion.com for more handy hints, tips, and guides.
            </h2>
            <Link href="/guides/guide-to-business-loans">
              Guide to Business Loans
            </Link>
            <Link href="/guides/guide-to-asset-finance">
              Guide to Asset Finance
            </Link>
            <Link href="/blog">Blog</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
