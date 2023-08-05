import React from "react";
import { Metadata } from "next";
import Services from "@/components/service/Service";

export const metadata: Metadata = {
  title: "services",
};

const ServicesPage = () => {
  return (
      <Services />
  );
};

export default ServicesPage;
