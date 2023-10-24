import React from "react";
import { DonateType, FormData } from "@/state/formtypes";
import { Button } from "@/components/Button";
import { nextFormNumber } from "@/state/reducers";
import { Option } from "../Option";
import { Selector } from "../Selector";

export const Form1 = (formValues: FormData) => {
  const { option, shelter } = formValues;
  return (
    <form className="flex flex-col gap-11">
      <h2 className="font-semibold text-3xl leading-tight md:text-5xl">
        Vyberte si možnosť, ako chcete pomôcť
      </h2>
      <Option />
      <Selector
        label="Útulok"
        required={option === DonateType.one ? true : false}
        value={shelter}
      />
      <div className="flex justify-end">
        <Button
          label="Pokračovať"
          disabled={option === DonateType.one && shelter == undefined}
          onClick={() => {
            nextFormNumber();
          }}
        />
      </div>
    </form>
  );
};
