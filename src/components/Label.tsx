import React, { ReactNode } from "react";

interface LabelProps {
  children: ReactNode;
  className?: string;
}

export const Label = (props: LabelProps) => {
  const { children, className } = props;
  return <h3 className={"font-md font-semibold " + className}>{children}</h3>;
};
