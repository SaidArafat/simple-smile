"use client";
import React from "react";
import Container from "../ui/layout/Container";
import HeadingAccent from "../ui/typography/HeadingAccent";
import Map from "./Map";
import Form from "./FormSubscribe";

const Callout = () => {
  return (
    <Container primary>
      <div className="flex flex-col space-y-6 md:flex-row items-center justify-between md:space-x-20 md:space-y-0 text-center md:text-left">
        <div className="flex flex-col space-y-6  w-full md:w-2/4">
          <p className="uppercase">High quality care and patient safety</p>
          <HeadingAccent>We’re here to help your health</HeadingAccent>
          <p>
            Our best team doctor with complete and modern facilities will keep
            you healthy or return you to health from sick
          </p>
          <Form />
        </div>
        <Map />
      </div>
    </Container>
  );
};

export default Callout;
