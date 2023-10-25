import React, { createRef } from "react";
import { Button } from "@/components/Button";
import {
  nextFormNumber,
  prevFormNumber,
  setEmail,
  setName,
  setPhone,
  setSecondName,
} from "@/state/reducers";
import { useFormDispatch, useFormSelector } from "@/app/page";
import { Label } from "@/components/Label";
import { IInput } from "../Input";
import { FormLayout } from "../FormLayout";

export const Form2 = () => {
  const dispatch = useFormDispatch();

  const name = useFormSelector((state) => state.form.name);
  const nameRef = createRef<HTMLInputElement>();
  const email = useFormSelector((state) => state.form.email);
  const phone = useFormSelector((state) => state.form.phone);
  const secondName = useFormSelector((state) => state.form.secondName);
  const nameValidated = useFormSelector((state) => state.form.nameError);
  const secondNameValidated = useFormSelector(
    (state) => state.form.secondNameError
  );
  const emailValidated = useFormSelector((state) => state.form.emailError);
  const phoneValidated = useFormSelector((state) => state.form.phoneError);

  return (
    <FormLayout heading="Potrebujeme od Vás zopár informácií">
      <div className="flex flex-col gap-3">
        <Label className="mb-2">O vás</Label>
        <IInput
          value={name}
          type="name"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(setName(event.target.value));
          }}
          errMess={nameValidated}
        />
        <IInput
          value={secondName}
          type="secondName"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(setSecondName(event.target.value));
          }}
          errMess={secondNameValidated}
        />
        <IInput
          value={email}
          type="email"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(setEmail(event.target.value));
          }}
          errMess={emailValidated}
        />
        <IInput
          value={phone}
          type="phone"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(setPhone(event.target.value));
          }}
          errMess={phoneValidated}
        />
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
          label="Pokračovať"
          disabled={
            nameValidated != "" ||
            secondNameValidated != "" ||
            emailValidated != "" ||
            phoneValidated != "" ||
            name == "" ||
            secondName == "" ||
            email == "" ||
            phone == ""
          }
          onClick={() => {
            dispatch(nextFormNumber());
          }}
        />
      </div>
    </FormLayout>
  );
};
