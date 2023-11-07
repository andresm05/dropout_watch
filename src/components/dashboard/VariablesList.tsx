import { SelectionButton } from "./SelectionButton";

interface VariablesListProps {
  selectedVariables: string[];
  setErrorMessage: (errorMessage: string) => void;
  setSelectedVariables: (selectedVariables: string[]) => void;
}

export const VariablesList = ({
  selectedVariables,
  setErrorMessage,
  setSelectedVariables,
}: VariablesListProps) => {
  return (
    <div className="d-grid gap-2 col-6 mx-auto">
      <SelectionButton
        name={"Carrera universitaria"}
        selectedVariables={selectedVariables}
        icon="brain.png"
        setErrorMessage={setErrorMessage}
        setSelectedVariables={setSelectedVariables}
      />
      <SelectionButton
        name={"Semestre"}
        selectedVariables={selectedVariables}
        icon="graduate.png"
        setErrorMessage={setErrorMessage}
        setSelectedVariables={setSelectedVariables}
        left={true}
      />
      <SelectionButton
        name={"Estrato socioeconómico"}
        selectedVariables={selectedVariables}
        icon="school.png"
        setErrorMessage={setErrorMessage}
        setSelectedVariables={setSelectedVariables}
      />
      <SelectionButton
        name={"Modalidad"}
        selectedVariables={selectedVariables}
        icon="desk-and-chair.png"
        setErrorMessage={setErrorMessage}
        setSelectedVariables={setSelectedVariables}
        left={true}
      />
    </div>
  );
};
