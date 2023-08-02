import React from "react";

interface Props {
  className?: string;
  children: string;
}

const HeadingPrimary = ({ children, className = "" }: Props) => {
  return (
    <h1
      className={`${className} text-heading text-2xl capitalize text-center font-semibold tracking-wide`}
    >
      {children}
    </h1>
  );
};

export default HeadingPrimary;
