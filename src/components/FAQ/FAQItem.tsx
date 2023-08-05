import React from "react";
import HeadingAccent from "../ui/typography/HeadingAccent";
import { AiOutlineArrowRight } from "react-icons/ai";

interface Props {
  title: string;
  text: string;
}

const FAQItem = ({ title, text }: Props) => {
  return (
    <div className="flex space-x-2">
      <div className="h-6 px-1 bg-primary text-white rounded-full flex items-center justify-center">
        <AiOutlineArrowRight />
      </div>
      <div>
        <HeadingAccent>{title}</HeadingAccent>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default FAQItem;
