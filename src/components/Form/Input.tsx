import { ChangeEventHandler, LegacyRef } from "react";
import { Label } from "../Label";
import ReactCountryFlag from "react-country-flag";
import { useFormSelector } from "@/app/page";

const displayData = {
  name: {
    label: "Meno",
    type: "text",
    placeholder: "Zadajte Vaše meno",
  },
  secondName: {
    label: "Priezvisko",
    type: "text",
    placeholder: "Zadajte Vaše priezvisko",
  },
  email: {
    label: "Email",
    type: "email",
    placeholder: "Zadajte Váš e-mail",
  },
  phone: {
    type: "phone",
    label: "Telefónne čislo",
    placeholder: "+421/+420",
  },
};

type InputTypes = keyof typeof displayData;

export type IInputProps = {
  type: InputTypes;
  onChange: ChangeEventHandler<HTMLInputElement>;
  errMess?: string;
  value?: string;
};

export const IInput = (props: IInputProps) => {
  const phone = useFormSelector((state) => state.form.phone);

  const { type, onChange, errMess, value } = props;

  return (
    <div className="w-full py-2 px-6 m-0 rounded-md border-[0.5px] border-greyText border-opacity-50 hover:border-primary-900">
      <div className="flex flex-row items-end">
        <Label className="text-[0.9rem]">{displayData[type].label}</Label>
        {
          <span className="text-sm text-red opacity-[0.75] ml-2">
            {errMess}
          </span>
        }
      </div>
      <div className="flex flex-row">
        {type === "phone" && (
          <ReactCountryFlag
            className="emojiFlag"
            countryCode={phone.slice(0, 4) !== "+420" ? "SK" : "CZ"}
            style={{
              fontSize: "1em",
              lineHeight: "1em",
              marginRight: "0.25rem",
            }}
            aria-label={""}
          />
        )}
        <input
          className="text-sm font-semibold text-greyText w-full flex grow-1 border-none outline-none"
          type={displayData[type].type}
          placeholder={displayData[type].placeholder}
          onChange={onChange}
          value={value}
        ></input>
      </div>
    </div>
  );
};
