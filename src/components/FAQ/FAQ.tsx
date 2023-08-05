import React from "react";
import Container from "../ui/layout/Container";
import HeadingSecondary from "../ui/typography/HeadingSecondary";
import FAQList from "./FAQList";

const FAQ = () => {
  return (
    <Container white>
      <HeadingSecondary className="text-center">
        Frequently Asked Questions
      </HeadingSecondary>
      <p className="text-center">
        We want to explain a few things that are important for you to know
        before getting dental implants
      </p>
      <FAQList />
    </Container>
  );
};

export default FAQ;
