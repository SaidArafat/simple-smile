"use client";
import React from "react";
import Container from "../ui/layout/Container";
import HeadingSecondary from "../ui/typography/HeadingSecondary";
import Button from "../ui/button/Button";
import Gallery from "./Gallery";
import Schedule from "../schedule/Schedule";

const Work = () => {
  return (
    <Container primary>
      <div className="text-center">
        <HeadingSecondary>Our recent work videos</HeadingSecondary>
        <p>
          Check how your families health is by professionals team doctor with
          complete and modern facilities services
        </p>
      </div>
      <Gallery />
      <div className="text-center flex flex-col items-center md:flex-row md:text-left md:space-x-14">
        <HeadingSecondary className=" w-full md:w-2/4">
          Your Teeth Play An Important Part In Your Daily Life!
        </HeadingSecondary>
        <div className="flex flex-col space-y-6 justify-start items-center md:items-start w-full md:w-1/2">
          <p>
            A dental implant is a metal post that replaces the root portion of a
            missing tooth. An artificial tooth is placed on an extension of the
            post on the dental implant, giving you the look of a real tooth.
          </p>
          <Schedule>get started</Schedule>
        </div>
      </div>
    </Container>
  );
};

export default Work;
