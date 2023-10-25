import React from "react";
import { Label } from "./Label";

interface LabelAndValueProps {
  label: string;
  value: string | number;
}

export const LabelAndValue = (props: LabelAndValueProps) => {
  const { label, value } = props;
  return (
    <div className="flex flex-col">
      <Label>{label}</Label>
      <p>{value}</p>
    </div>
  );
};
