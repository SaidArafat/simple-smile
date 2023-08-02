"use client";
import React, { ButtonHTMLAttributes } from "react";
import Link from "next/link";
import classNames from "classnames";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  secondary?: boolean;
  rounded?: boolean;
  outline?: boolean;
  link?: string;
  children: React.ReactNode;
}

const Button = ({
  primary,
  secondary,
  outline,
  link,
  children,
  ...rest
}: Props) => {
  const classes = classNames(
    rest.className,
    "px-4 py-1.5 capitalize flex items-center border-2 rounded-lg transition-all duration-300 outline-none whitespace-nowrap hover:-translate-y-1 active:translate-y-0 active:ring-0 text-normal text-center",
    {
      "bg-blue border-blue hover:bg-white hover:text-blue focus:ring focus:ring-gray":
        primary,
      "bg-[#B0B0B0] border-[#B0B0B0] hover:bg-white hover:text-[#B0B0B0] focus:ring focus:ring-gray":
        secondary,
      "bg-white": outline,
      "text-[#2C95DB]": outline && primary,
      "text-[#B0B0B0]": outline && secondary,
    }
  );

  if (link) {
    return (
      <Link href={link} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};

export default Button;
