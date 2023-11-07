interface SelectionButtonProps {
  selectedVariables: string[];
  name: string;
  setSelectedVariables: (selectedVariables: string[]) => void;
  setErrorMessage: (errorMessage: string) => void;
  icon: string,
  left?: boolean;
}

export const SelectionButton = ({
  selectedVariables,
  name,
  setSelectedVariables,
  setErrorMessage,
  icon,
  left,
}: SelectionButtonProps) => {
  const handleVariableClick = (variable: string) => {
    if (selectedVariables.includes(variable)) {
      setSelectedVariables(selectedVariables.filter((v) => v !== variable));
    } else {
      if (selectedVariables.length < 3) {
        setSelectedVariables([...selectedVariables, variable]);
      } else {
        setErrorMessage("¡No puedes seleccionar más de 3 variables!");
      }
    }
  };
  return (
    <button
      className={`btn btn-light ${
        selectedVariables.includes(name) ? "btn btn-dark" : ""
      }`}
      type="button"
      onClick={() => handleVariableClick(name)}
    >
      {left ? (
        <>
          <img
            src={`images/${icon}`}
            alt="Icono"
            width="30"
            height="30"
            className="me-2"
          />
          <span>{name}</span>
        </>
      ) : (
        <>
          <span>{name}</span>
          <img
            src={`images/${icon}`}
            alt="Icono"
            width="30"
            height="30"
            className="ms-2"
          />
        </>
      )}
    </button>
  );
};
