import { useFormDispatch, useFormSelector } from "@/app/page";
import { Button } from "@/components/Button";
import { nextFormNumber, prevFormNumber, setGdpr } from "@/state/reducers";
import React from "react";
import { FormLayout } from "../FormLayout";
import { LabelAndValue } from "@/components/LabelAndValue";

export const Form3 = () => {
  const gdpr = useFormSelector((state) => state.form.gdpr);
  const dispatch = useFormDispatch();
  const formState = useFormSelector((state) => state.form);

  const bodyData = {
    firstName: formState.name,
    lastName: formState.secondName,
    email: formState.email,
    phone: formState.phone,
    value: formState.amount,
    shelterID: formState.shelter == undefined ? 1 : Number(formState.shelter),
  };

  const requestContent = {
    method: "post",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyData),
  };
  return (
    <FormLayout heading="Skontrolujte si zadané údaje">
      <div className="flex flex-col gap-6">
        <LabelAndValue
          label="Akou formou chcem pomôcť"
          value={formState.option}
        />
        <LabelAndValue
          label="Najviac mi záleží na útulku"
          value={
            (formState.shelter &&
              formState.shelterList[formState.shelter]?.name) ||
            "Záleží mi na všetkých"
          }
        />
        <LabelAndValue
          label="Suma ktorou chcem pomôcť"
          value={formState.amount}
        />
        <LabelAndValue
          label="Meno a priezvisko"
          value={formState.name + " " + formState.secondName}
        />
        <LabelAndValue label="E-mailová adresa" value={formState.email} />
        <LabelAndValue label="Telefónne číslo" value={formState.phone} />
      </div>
      <div className="w-max flex flex-row">
        <div
          className="w-7 h-7 mr-3 rounded-md border-[0.5px] border-opacity-50 overflow-hidden p-[5.2px] cursor-pointer"
          onClick={() => {
            dispatch(setGdpr(gdpr ? false : true));
          }}
        >
          {gdpr && (
            <svg fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17 1L6 12L1 7"
                stroke="#AB7455"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          )}
        </div>
        <p className="text-greyText">
          Súhlasím so spracovaním mojich osobných údajov
        </p>
      </div>

      <div className="flex justify-between mt-9 md:mt-11">
        <Button
          type="secondary"
          label="Spať"
          onClick={() => {
            dispatch(prevFormNumber());
          }}
        />
        <Button
          label="Odoslať formulár"
          disabled={gdpr == false}
          onClick={() => {
            fetch(
              "https://frontend-assignment-api.goodrequest.dev/api/v1/shelters/contribute",
              requestContent
            ).then((response) => {
              if (response.ok) {
                console.log("Successful ");
                dispatch(nextFormNumber());
              } else {
                console.log("Something went wrong");
                alert(
                  "Niečo neprebehlo ako malo, skúste znova alebo nás prosím kontaktujte"
                );
              }
            });
          }}
        />
      </div>
    </FormLayout>
  );
};
