"use client";
import { Feedback } from "@/types";
import React from "react";
import HeadingAccent from "../ui/typography/HeadingAccent";
import Rate from "./Rate";

const FeedbackCard = ({ title, text, rate, image }: Feedback) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center space-x-4 justify-between">
        <div className="flex space-x-4 items-center">
          <div className=" w-12 h-10 rounded-lg overflow-hidden shadow-sm">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
          <HeadingAccent>{title}</HeadingAccent>
        </div>
        <Rate rate={rate} />
      </div>
      <p className="mt-2">{text}</p>
    </div>
  );
};

export default FeedbackCard;
