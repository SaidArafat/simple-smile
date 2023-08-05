"use client";
import React from "react";
import { Service } from "./../../types/index";
import Link from "next/link";
import Icon from "../ui/icon/Icon";
import HeadingAccent from "../ui/typography/HeadingAccent";

const ServiceItem = ({ title, icon, text }: Service) => {
  return (
    <div className="flex flex-col items-start space-y-4">
      <Icon icon={icon} />
      <HeadingAccent>{title}</HeadingAccent>
      <p className="">{text}</p>
      <Link
        href="/services"
        target="_blank"
        className="text-primary border-b pr-2 hover:text-opacity-60"
      >
        Learn More
      </Link>
    </div>
  );
};

export default ServiceItem;
