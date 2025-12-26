import React, { useState } from "react";
import HeadingSection from "../../components/HeadingSection";

const faqData = [
  {
    id: 1,
    question: "What web services does your agency provide?",
    answer:
      "We provide website design, web development, e-commerce solutions, UI/UX design, and website maintenance services.",
  },
  {
    id: 2,
    question: "How long does it take to build a website?",
    answer:
      "The timeline depends on the project scope. A basic website usually takes 7–14 days, while complex projects may take 1–2 months.",
  },
  {
    id: 3,
    question: "Do you provide mobile-friendly websites?",
    answer:
      "Yes, all our websites are fully responsive and optimized for mobile, tablet, and desktop devices.",
  },
  {
    id: 4,
    question: "Can you redesign an existing website?",
    answer:
      "Absolutely. We can redesign your existing website to improve performance, design, user experience, and SEO.",
  },
  {
    id: 5,
    question: "Do you offer website maintenance and support?",
    answer:
      "Yes, we offer ongoing maintenance, security updates, bug fixes, and technical support after project delivery.",
  },
];

const FAQ = () => {
  const [expendedFaq, setExpendedFaq] = useState(null);
  return (
    <div className="bg-colorBg">
      <div className="section-container">
        <HeadingSection
          subheading="faq"
          heading=" Frequently Asked Questions"
        />

        {/* Accordion */}
        {faqData.map((fag) => (
          <div key={fag.id} className="collapse collapse-plus bg-base-100 border border-base-300 lg:w-3/5 mx-auto">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title font-semibold">
              {fag.question}
            </div>
            <div className="collapse-content text-sm">
              {fag.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
