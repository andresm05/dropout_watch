import { DropdownVariable } from "./";
import { InputVariable } from "./";
import { Traitors } from "../../utilities";

interface VariableOptionsProps {
  traitors: Traitors | undefined;
  variable: string;
  handleFieldChange: (
    event:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => void;
}

export const VariableOptions = ({
  traitors,
  variable,
  handleFieldChange
}: VariableOptionsProps) => {
  return (
    <>
      {variable === "Carrera universitaria" && (
        <DropdownVariable traitors={traitors} field="programs" handleFieldChange={handleFieldChange}/>
      )}
      {variable === "Estrato socioeconómico" && (
        <DropdownVariable traitors={traitors} field="economicLevel" handleFieldChange={handleFieldChange}/>
      )}
      {variable === "Modalidad" && (
        <DropdownVariable traitors={traitors} field="modalities" handleFieldChange={handleFieldChange}/>
      )}
      {variable === "Créditos acumulados" && (
        <InputVariable traitors={traitors} field="maxSemester" handleFieldChange={handleFieldChange}/>
      )}
    </>
  );
};
