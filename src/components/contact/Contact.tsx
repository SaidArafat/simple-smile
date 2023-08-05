"use client";
import React from "react";
import Container from "../ui/layout/Container";
import HeadingSecondary from "../ui/typography/HeadingSecondary";
import StatsItem from "../ui/stats/StatsItem";
import Schedule from "../schedule/Schedule";

const Contact = () => {
  return (
    <Container white>
      <div className="flex flex-col items-center justify-center space-y-8 md:flex-row md:justify-between md:space-x-8 md:space-y-0">
        <div className="p-8 border border-gray rounded-full flex items-center justify-center relative mb-8 md:mb-0">
          <div className="w-72 h-72 md:h-96 md:w-96 flex items-center justify-center overflow-hidden rounded-full">
            <img
              src="https://images.pexels.com/photos/3845843/pexels-photo-3845843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="happy patient"
              className="w-full h-full object-cover"
            />
          </div>
          <StatsItem
            className="bottom-[-3rem]"
            count={2000}
            label="people helped"
          />
        </div>
        <div className="w-full text-center md:text-left md:w-2/4 flex flex-col space-y-8 items-center md:items-start">
          <HeadingSecondary>Get Help You Deserve to be Happy</HeadingSecondary>
          <p>
            Committed to build a positive, safe, patient, focused culture. Your
            teeth play an important part in your daily life
          </p>
          <Schedule>Get started</Schedule>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
