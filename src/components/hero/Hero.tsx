"use client";
import React from "react";
import Container from "../ui/layout/Container";
import HeadingPrimary from "../ui/typography/HeadingPrimary";
import Schedule from "../schedule/Schedule";

const Hero = () => {
  return (
    <Container>
      <div className="flex flex-col space-y-16 items-center justify-center py-16">
        <HeadingPrimary> Make Your Perfect Smile Even Better</HeadingPrimary>
        <p className="text-center md:text-left">
          Protect your smile and keep it healthy, with the largest network of
          dentist nationwide, quik answers and personalized service.
        </p>
        <Schedule>get started</Schedule>
      </div>
    </Container>
  );
};

export default Hero;
