import FAQ from "@/components/FAQ/FAQ";
import Callout from "@/components/callout/Callout";
import Contact from "@/components/contact/Contact";
import Services from "@/components/service/Service";
import React from "react";
import Work from "./../components/work/Work";
import Feedback from "@/components/feedback/Feedback";
import Hero from "@/components/hero/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Contact />
      <Work />
      <Feedback />
      <FAQ />
      <Callout />
    </>
  );
};

export default Home;
