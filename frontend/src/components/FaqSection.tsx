// components/Faq/FaqSection.tsx
import React from "react";
import FaqItem from "./FaqItem";

const faqData = [
  {
    question: "What is FundOnion?",
    answer:
      "FundOnion.com is the UK’s #1 Business Finance matching platform. We connect small businesses with relevant lenders direct...",
  },
  {
    question: "Why should I use FundOnion instead of my usual broker?",
    answer:
      "We operate the only self-select matching platform for Business Finance. That means it’s totally up to you who you choose...",
  },
  {
    question: "What if I need a hand with my funding application?",
    answer:
      "That’s no problem! Our team at FundOnion all have loads of experience in the business finance industry, either as brokers...",
  },
  {
    question: "How does FundOnion make money?",
    answer:
      "FundOnion is a free-to-use platform. We act the same way as most other comparison websites by being paid a commission...",
  },
  {
    question: "How much can I borrow?",
    answer:
      "This depends on your business’ previous trading history, credit score, forecast future performance...",
  },
  {
    question: "Will this affect my credit score?",
    answer:
      "Using the FundOnion platform to filter and review your results will not affect your credit score...",
  },
];

const FaqSection: React.FC = () => {
  return (
    <section className="py-12 bg-[#F9F8F8]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-10">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {faqData.map((faq, idx) => (
            <FaqItem key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
