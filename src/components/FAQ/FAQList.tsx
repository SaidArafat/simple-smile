import React from "react";
import faqs from "../../../data/faq";
import FAQItem from "./FAQItem";

const FAQList = () => {
  return (
    <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
      {faqs.map((faq) => (
        <FAQItem key={faq.id} title={faq.title} text={faq.text} />
      ))}
    </div>
  );
};

export default FAQList;
