import { useState } from "react";
import { TraitorsForm } from "../utilities";

export const useForm = (initialValues: TraitorsForm) => {
  const [values, setValues] = useState(initialValues);

  const handleFieldChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    console.log(values);
  };

  return {
    values,
    ...values,
    handleFieldChange,
  };
};
