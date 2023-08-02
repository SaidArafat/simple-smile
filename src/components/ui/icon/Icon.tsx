"use client";
import React from "react";
// import classNames from "classnames";
const Icon = ({ icon, className }: { icon: string; className?: string }) => {
  //   const classes = classNames(
  //     "w-14 h-14 rounded-full flex items-center justify-center text-2xl"
  //   );

  return (
    <div className="w-14 h-14 rounded-full rounded-ss-none flex items-center justify-center text-3xl bg-primary bg-opacity-20 text-primary">
      <i className={icon}></i>
    </div>
  );
};

export default Icon;
