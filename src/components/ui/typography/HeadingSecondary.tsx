"use client";
import React from "react";

interface Props {
  className?: string;
  children: string;
}

const HeadingSecondary = ({ children, className = "" }: Props) => {
  return (
    <h2
      className={`${className} text-heading text-2xl capitalize font-semibold mb-3`}
    >
      {children}
    </h2>
  );
};

export default HeadingSecondary;
