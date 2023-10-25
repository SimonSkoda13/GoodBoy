import React, { ReactNode } from "react";
import { Heading } from "../Heading";

type FormLayoutProps = {
  children: ReactNode;
  heading?: string;
};

export const FormLayout = (props: FormLayoutProps) => {
  return (
    <div className="flex flex-col gap-11 overflow-auto font-800">
      <Heading>{props.heading}</Heading>
      {props.children}
    </div>
  );
};
