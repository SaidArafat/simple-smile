"use client";
import React from "react";
import Container from "../ui/layout/Container";
import Heading from "../ui/typography/HeadingSecondary";
import ServiceList from "./ServiceList";

const Services = () => {
  return (
    <Container primary>
      <Heading className="text-center">Our service</Heading>
      <p className="text-center">
        Committed to build a positive, safe, patient, focused culture. Your
        teeth play an important part in your daily life
      </p>
      <ServiceList />
    </Container>
  );
};

export default Services;
