import React, { MouseEventHandler } from "react";

export interface ButtonProps {
  type?: "primary" | "secondary";
  disabled?: boolean;
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button = (props: ButtonProps) => {
  const {
    type = "primary",
    disabled = false,
    label,
    onClick = () => {},
  } = props;
  let color: string;
  if (type == "primary") {
    color =
      "bg-gradient-to-b from-primary-900 to-primary-800 text-white  hover:brightness-105";
  } else {
    color = "bg-primary-500 text-black";
  }
  if (disabled) {
    color = "bg-greyText text-white";
  }
  return (
    <button
      className={"rounded-full px-5 py-4 font-base shadow-lg " + color}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
