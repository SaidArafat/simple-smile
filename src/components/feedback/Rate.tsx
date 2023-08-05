import React from "react";

const Star = () => <i className="fa-solid fa-star fs-5 me-2"></i>;

const Rate = ({ rate }: { rate: number }) => {
  const stars = [];
  for (let i = 0; i < rate; i++) {
    stars.push(<Star key={i} />);
  }

  return <div className="text-[#FF7A00]">{stars}</div>;
};

export default Rate;
