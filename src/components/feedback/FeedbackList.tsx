"use client";
import React from "react";
import { Feedback } from "@/types";
import FeedbackCard from "./FeedbackCard";

const FeedbackList = ({ feedbacks }: { feedbacks: Feedback[] }) => {
  return (
    <div className="flex flex-col justify-center space-y-4 mt-5">
      {feedbacks.map(({ id, title, rate, text, image }) => (
        <FeedbackCard
          id={id}
          title={title}
          rate={rate}
          text={text}
          image={image}
          key={id}
        />
      ))}
    </div>
  );
};

export default FeedbackList;
