import { Traitors } from "../../utilities";
interface DropdownVariableProps {
  traitors: Traitors | undefined;
  field: "programs" | "economicLevel" | "modalities";
  handleFieldChange: (
    event:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => void;
}

export const DropdownVariable = ({
  traitors,
  field,
  handleFieldChange,
}: DropdownVariableProps) => {
  return (
    <select
      name={field}
      onChange={handleFieldChange}
      className="form-control mt-2 w-75 mx-auto"
    >
      <option defaultValue="" value="">
        None
      </option>
      {traitors?.[field]?.map((program) => (
        <option key={program} value={program}>
          {program}
        </option>
      ))}
    </select>
  );
};
