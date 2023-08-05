"use client";
import React from "react";
import FeedbackList from "./FeedbackList";
import Container from "../ui/layout/Container";
import feedbacks from "../../../data/feedbacks";
import HeadingSecondary from "../ui/typography/HeadingSecondary";
import StatsItem from "../ui/stats/StatsItem";

const Feedback = () => {
  return (
    <Container primary>
      <HeadingSecondary className="text-center">
        Our Special Customers says
      </HeadingSecondary>
      <div className="flex flex-col space-y-14 md:flex-row md:space-y-0 md:space-x-14 mt-10 items-center">
        <FeedbackList feedbacks={feedbacks} />
        <div className="w-full relative">
          <div className="bg-blue rounded-se-3xl rounded-es-3xl overflow-hidden w-full h-96 md:h-[28rem]">
            <img
              src="https://images.pexels.com/photos/3845736/pexels-photo-3845736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="dentistry"
              className="w-full h-full object-cover"
            />
          </div>
          <StatsItem
            count={3000}
            label="total patients"
            className=" top-[-40px] left-[0px]"
          />
        </div>
      </div>
    </Container>
  );
};

export default Feedback;
