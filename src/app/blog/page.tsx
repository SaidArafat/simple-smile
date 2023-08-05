import Work from "@/components/work/Work";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "blog",
};

const Blog = () => {
  return <Work />;
};

export default Blog;
