"use client";
import React from "react";
import services from "../../../data/sevices";
import ServiceItem from "./ServiceItem";

const ServiceList = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 mt-14 gap-8">
      {services.map(({ icon, text, title }, index) => (
        <ServiceItem icon={icon} text={text} title={title} key={index} />
      ))}
    </div>
  );
};

export default ServiceList;
