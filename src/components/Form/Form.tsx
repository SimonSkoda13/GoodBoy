import { useFormSelector } from "@/app/page";
import { ReactNode, useEffect, useState } from "react";
import { Form1 } from "./FormSteps/Form1";
import { FormNumber } from "./FormNumber";
import { Form2 } from "./FormSteps/Form2";

export const Form = () => {
  const formValues = useFormSelector((state) => state.form);
  const [formNode, setFormNode] = useState<ReactNode>(<Form1 />);

  useEffect(() => {
    switch (formValues.formNumber) {
      case 1:
        setFormNode(<Form1 />);
        break;
      case 2:
        setFormNode(<Form2 />);
        break;
      default:
        break;
    }
  }, [formValues.formNumber]);

  return (
    <div className="col-span-2">
      <FormNumber />
      {formNode}
      {/* {JSON.stringify(formValues)} */}
    </div>
  );
};
