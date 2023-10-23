import { useFormDispatch, useFormSelector } from "@/app/page";
import { setName } from "@/state/reducers";
import React from "react";

export const Form = () => {
  const formValue = useFormSelector((state) => state.form);
  const dispatch = useFormDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setName(e.target.value));
  };
  console.log(formValue.name);

  return (
    <div className="col-span-2">
      <input
        type="text"
        value={formValue.name}
        onChange={handleChange}
        className="w-full border p-2 rounded mb-2"
      />
      <p>You typed: {formValue.name}</p>
    </div>
  );
};
