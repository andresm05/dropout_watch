import { Traitors } from "../../utilities/types/traitors.types";

interface InputVariableProps {
  traitors: Traitors | undefined;
  field: "maxSemester";
  handleFieldChange: (
    event:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => void;
}

export const InputVariable = ({
  traitors,
  field,
  handleFieldChange,
}: InputVariableProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name={field}
        onChange={handleFieldChange}
        className="form-control w-75 mt-2 mx-auto"
        type="number"
        min={0}
        max={traitors?.[field]}
        defaultValue={0}
        required
      ></input>
    </form>
  );
};
