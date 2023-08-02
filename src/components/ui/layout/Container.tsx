import React from "react";
import classNames from "classnames";

interface Props {
  primary?: boolean;
  white?: boolean;
  children: React.ReactNode;
}

const Container = ({ primary, white, children }: Props) => {
  const classes = classNames("py-16 px-10 md:px-14 lg:px-20", {
    "bg-[#F8FCFF]": primary,
    "bg-white": white,
  });

  return <section className={classes}>{children}</section>;
};

export default Container;
