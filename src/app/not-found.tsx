import React from "react";
import { Metadata } from "next";
import NotFound from "@/components/notfound/NotFound";

export const metadata: Metadata = {
  title: "404",
};

const NotFondPage = () => {
  return <NotFound />;
};

export default NotFondPage;
