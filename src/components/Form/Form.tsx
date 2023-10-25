import { useFormDispatch, useFormSelector } from "@/app/page";
import { setName } from "@/state/reducers";
import React, { ReactNode, useEffect, useState } from "react";
import { Form1 } from "./FormSteps/Form1";
import { FormNumber } from "./FormNumber";

export const Form = () => {
  const formValues = useFormSelector((state) => state.form);
  const dispatch = useFormDispatch();
  const [formNode, setFormNode] = useState<ReactNode>(
    <Form1 option={formValues.option} shelter={formValues.shelter} />
  );

  useEffect(() => {
    switch (formValues.formNumber) {
      case 1:
        setFormNode(
          <Form1 option={formValues.option} shelter={formValues.shelter} />
        );
        break;
      default:
        break;
    }
  }, [formValues.formNumber]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setName(e.target.value));
  };

  return (
    <div className="col-span-2">
      <FormNumber />
      {formNode}
      {/* {JSON.stringify(formValues)} */}
    </div>
  );
};
