"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is OneLot?",
    answer:
      "OneLot is a digital auto financier providing short-term loans for used car dealers in the Philippines. Our vision is to empower dealers to expand their inventory, increase sales, and facilitate smoother business operations through tailored financial solutions.",
  },
  {
    question: "What kind of financing does OneLot do?",
    answer:
      "OneLot offers collateralized short term loans to used car dealers, allowing them to leverage their inventory for growth. We differ from services such as AsiaLink and Global Dominion, since our financing options are for car dealers themselves, not the customers of car dealers.",
  },
  {
    question: "Is OneLot a bank?",
    answer:
      "No, OneLot is not a traditional bank. We are a dedicated financial institution that understands the unique requirements of used car dealers and offers short-term collateralized lending solutions to address their working capital needs. OneLot Financing Corporation is a duly registered corporate entity and is regulated by the Securities and Exchange Commission (SEC).",
  },
  {
    question: "What is the eligibility criteria for availing a loan?",
    answer:
      "Any used car dealer located in Greater Metro Manila operating for more than a year can apply to OneLot.",
  },
  {
    question: "How are interest rates determined?",
    answer:
      "OneLot offers monthly interest rates starting at 1.8% which is applied for all your loan applications. OneLot utilizes daily accrual calculations on all loans to ensure our customers only pay the interest for the time the loan is outstanding.",
  },
];

export default function FAQList() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-300 pb-4 cursor-pointer">
          <div
            className="flex justify-between items-center py-4 text-lg font-medium text-gray-800"
            onClick={() => toggleFAQ(index)}
          >
            {faq.question}
            {openIndex === index ? (
              <ChevronUp className="w-5 h-5 text-gray-600" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-600" />
            )}
          </div>
          <div
            className={`overflow-hidden transition-all ${
              openIndex === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
