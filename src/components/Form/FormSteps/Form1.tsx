import React, { useEffect } from "react";
import { AmountOptions, DonateType, FormData } from "@/state/formtypes";
import { Button } from "@/components/Button";
import { nextFormNumber } from "@/state/reducers";
import { Option } from "../Option";
import { Selector } from "../Selector";
import { useFormSelector } from "@/app/page";
import { AmountSelector, AmountType } from "../AmountSelector";

export interface Form1Props {
  option: DonateType;
  shelter?: number;
}

export const Form1 = (props: Form1Props) => {
  //   const { option, shelter } = props;
  const option = useFormSelector((state) => state.form.option);
  const amount = useFormSelector((state) => state.form.amount);
  const shelter = useFormSelector((state) => state.form.shelter);

  return (
    <form className="flex flex-col gap-11 overflow-auto">
      <h2 className="font-semibold text-3xl leading-tight md:text-5xl">
        Vyberte si možnosť, ako chcete pomôcť
      </h2>
      <Option />
      <div>
        <div className="flex flex-row mb-3">
          <h3 className="font-md font-semibold mr-auto">O projekte</h3>
          <h3
            className={
              "font-md font-semibold " +
              (option === DonateType.one ? "hidden" : "")
            }
          >
            Nepovinné
          </h3>
        </div>
        <Selector
          label="Útulok"
          required={option === DonateType.one ? true : false}
          value={shelter}
        />
      </div>
      <div>
        <h3 className="font-md font-semibold mb-2">
          Suma, ktorou chcem prispieť
        </h3>
        <div className="md:flex md:flex-row md:flex-wrap gap-2 grid grid-cols-2">
          {AmountOptions.map((amount) => {
            return (
              <AmountSelector
                key={"amountNumber" + amount}
                amount={amount}
                type={AmountType.basic}
              />
            );
          })}
          <AmountSelector type={AmountType.input} />
        </div>
        <div className="flex justify-end mt-9 md:mt-11">
          <Button
            label="Pokračovať"
            disabled={
              option === DonateType.one && shelter == undefined && amount <= 0
            }
            onClick={() => {
              nextFormNumber();
            }}
          />
        </div>
      </div>
    </form>
  );
};
