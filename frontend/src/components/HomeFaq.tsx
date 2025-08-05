"use client";
import React from "react";
import FaqItem from "./FaqItem";

const faqData = [
  {
    question: "What is FundOnion?",
    answer:
      "FundOnion.com is the UK's #1 Business Finance matching platform. We connect small businesses with relevant lenders direct. Our unique decision engine allows you to instantly filter lenders your business is eligible for and see their rates and terms for business loans, invoice financing, asset financing, and so much more - saving you 100s of hours and 1,000s of pounds.",
  },
  {
    question: "Why should I use FundOnion instead of my usual broker?",
    answer:
      "We operate the only self-select matching platform for Business Finance. That means it's totally up to you on who you choose to be your funder: not us, and no-one else. We tell you all the available options for you in 1 easy step. By removing the broker in the middle, you're getting totally transparent results, free from bias.",
  },
  {
    question: "What if I need a hand with my funding application?",
    answer:
      "That's no problem! Our team at FundOnion all have loads of experience in the business finance industry, either as brokers or working for banks and lenders. We're always happy to help our users find their ideal funder. You can get in touch with us at hello@fundonion.com or call 020 812 32841.",
  },
  {
    question: "How does FundOnion make money?",
    answer:
      "FundOnion is a free-to-use platform. We act the same way as most other comparison websites by being paid a commission from our partners. Typically, the cost of this is exactly the same for users as if they had gone direct. If you have any questions please get in touch.",
  },
  {
    question: "How much can I borrow?",
    answer:
      "This depends on your business' previous trading history, credit score, forecast future performance, among a number of other things. We will do our best to estimate your approximate borrowing-capabilities based on our lender database to help you get funded quickly and effectively.",
  },
  {
    question: "Will this affect my credit score?",
    answer:
      "Using the FundOnion platform to filter and review your results will not affect your credit score, however by applying to a lender they will most likely require a credit check to be conducted in order to progress the application.",
  },
];

const HomeFaq = () => {
  return (
    <section className="py-12 px-4 bg-[#F9F8F8]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between p-6">
          <div className="flex flex-col">
            {/* The small line and "FAQS" text */}
            <div className="flex items-center mb-1">
              <div className="h-px w-8 bg-green-700 mr-2" />
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                FAQs
              </span>
            </div>
            {/* The main title */}
            <h2 className="text-3xl font-bold text-gray-900 leading-tight">
              Frequently Asked Questions
            </h2>
          </div>
          <button
            className={`px-6 py-3 rounded-full text-white font-medium transition-all duration-300 ease-in-out hover:shadow-lg bg-green-800 hover:bg-green-900 shadow-md`}
          >
            Find Funding
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {faqData.map((faq, idx) => (
            <FaqItem key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFaq;
