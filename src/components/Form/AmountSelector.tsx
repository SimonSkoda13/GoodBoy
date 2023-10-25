import { useFormDispatch, useFormSelector } from "@/app/page";
import { AmountOptions } from "@/state/formtypes";
import { setAmount } from "@/state/reducers";
import React from "react";

export enum AmountType {
  basic = "Basic",
  input = "Input",
}

export type AmountSelectorProps = {
  type: AmountType;
  amount?: number;
};

export const AmountSelector = (props: AmountSelectorProps) => {
  const { amount, type } = props;
  const dispatch = useFormDispatch();
  const formAmount = useFormSelector((state) => state.form.amount);
  let isCustomAmount = !AmountOptions.includes(formAmount as number);

  if (type === AmountType.basic && amount !== undefined) {
    return (
      <div
        className={
          "flex flex-row content-center items-center mx-2 p-4 bg-white text-dark border-[0.5px] border-greyText border-opacity-50 hover:bg-primary-900 transition ease-in-out cursor-pointer rounded-md" +
          (amount === formAmount
            ? "border-none bg-gradient-to-r from-primary-900 to-primary-800 rounded-md border-0"
            : "")
        }
        onClick={() => dispatch(setAmount(amount))}
      >
        <p className="font-800 font-medium leading-[138%]">{amount + " €"}</p>
      </div>
    );
  }
  return (
    <div className="flex flex-row content-center items-center mx-2 p-4 bg-white text-dark border-[0.5px] border-greyText border-opacity-50 transition ease-in-out cursor-pointer rounded-md">
      <input
        className={
          "px-2 py-1 w-[4rem] focus:outline-none focus:ring focus:border-primary-900 font-800 font-medium leading-[138%] mr-2" +
          (isCustomAmount === true ? "text-black" : "")
        }
        style={{ appearance: "textfield" }}
        type="number"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch(setAmount(Number(e.target.value)))
        }
        value={isCustomAmount ? formAmount : ""}
      />
      <p className="font-800 font-medium leading-[138%]">&nbsp;€</p>
    </div>
  );
};
