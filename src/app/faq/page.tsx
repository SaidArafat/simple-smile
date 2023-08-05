import FAQ from "@/components/FAQ/FAQ";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "FAQ",
};

const FQAPage = () => {
  return (
    <div>
      <FAQ />
    </div>
  );
};

export default FQAPage;
