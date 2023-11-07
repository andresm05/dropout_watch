import { useNavigate } from "react-router-dom";

interface ProfileButtonProps {
  selectedVariables: string[];
  setErrorMessage: (message: string) => void;
  name: string;
  icon: string;
}

const ProfileButton = ({
  selectedVariables,
  setErrorMessage,
  name,
  icon,
}: ProfileButtonProps) => {
  const navigator = useNavigate();

  const handleCreateProfileClick = () => {
    if (selectedVariables.length >= 3) {
      navigator("/Profile");
    } else {
      setErrorMessage("¡Por favor selecciona tres  variables!");
    }
  };

  return (
    <button className="btn btn-light" onClick={handleCreateProfileClick}>
      <img src={`src/images/${icon}`} alt="Icono" width="30" height="30" />
      <p>{name}</p>
    </button>
  );
};

export { ProfileButton };
