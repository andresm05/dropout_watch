import { ProfileButton, VariablesList } from ".";
import { Alerts } from "../../helpers/Alerts";
import { useState } from "react";

export const MainView = () => {
  const [selectedVariables, setSelectedVariables] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");
  return (
    <div className="card text-center   border-0   ">
      <div className="card display-6 border-0 mt-2">
        Creemos un perfil de un posible desertor
      </div>

      <div className="card-body">
        {errorMessage && (
          <div className="col-6 mx-auto">
            <Alerts
              severity="warning"
              message="Ten en cuenta"
              alert={errorMessage}
            />
          </div>
        )}
        <VariablesList
          selectedVariables={selectedVariables}
          setErrorMessage={setErrorMessage}
          setSelectedVariables={setSelectedVariables}
        />
      </div>
      <div className="card text-body-secondary border-0 col-7 mx-auto">
        <ProfileButton
          icon="profile.png"
          selectedVariables={selectedVariables}
          name="Iniciar perfil"
          setErrorMessage={setErrorMessage}
        />
      </div>
    </div>
  );
};
