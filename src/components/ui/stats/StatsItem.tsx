import React from "react";
import Icon from "../icon/Icon";

interface Props {
  label: string;
  count: number;
  className?: string;
}

const StatsItem = ({ label, count, className = "" }: Props) => {
  return (
    <div
      className={`${className} absolute p-6 bg-white shadow-md rounded-lg z-50 flex flex-col items-center justify-center space-y-2`}
    >
      <Icon icon="fa-solid fa-tooth" />
      <p className="text-primary font-semibold">{count} +</p>
      <p className="text-black">{label}</p>
    </div>
  );
};

export default StatsItem;
