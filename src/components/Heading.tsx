import { hind } from "@/app/layout";
import { Prosto_One } from "next/font/google";
import React, { ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
}

export const Heading = (props: HeadingProps) => {
  return (
    <h2
      className={
        hind.className + " font-semibold text-3xl leading-tight md:text-5xl"
      }
    >
      {props.children}
    </h2>
  );
};
