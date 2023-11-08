/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDropouts } from "../hooks/useDropouts";
import { Traitors } from "../traitors/traitors.types";
import { Loadings } from "../helpers/Loadings";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { getTraitors } = useDropouts();
  const [traitors, setTraitors] = useState<Traitors | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const { selectedVariables } = useParams();
  const variablesArray = selectedVariables ? selectedVariables.split("-") : [];

  useEffect(() => {
    const loadTraitors = async () => {
      const data = await getTraitors();
      if (data) {
        setTraitors(data);
        setIsLoading(false);
      }
    };
    loadTraitors();
  }, []);

  return (
    <div>
      <nav className="navbar bg-body-tertiary ml-2">
        <div className="container">
          <div className="d-flex align-items-center">
            <img
              src="\images\DropoutWatchLogo.png"
              alt="Logo"
              width="80"
              height="80"
              className="d-inline-block"
            />
            <h1 className="display-6 mx-2">Dropout</h1>
            <h1 className="mt-0 text-primary">Watch </h1>
            <h1 className="display-6 mx-2   ">Profile</h1>
          </div>
        </div>
      </nav>

      {isLoading ? (
        <div className="d-flex flex-column justify-content-center align-items-center">
          <Loadings type="cylon" color="#0d6efd
" />
          <h1 className="display-6">" No canceles compa, <span className="text-primary ">LÚCHALA </span> "</h1>
        </div>
      ) : (
        <div className="container">
          <div className="mb-3">
            <h1 className="text-center mt-4 display-6 text-primary fw-bold">
              Antes de generar el perfil...
            </h1>
            <h6 className="diplay-6 text-center">
              Ajusta las variables para generar un perfil más preciso.
            </h6>
          </div>
          <div className="card-group mx-1 text-center ">
            <div className="card border-0">
              <div className="card-body">
                <button className="btn btn-light border">
                  <h5 className="card-title text-primary fw-bold">
                    {variablesArray[0] ? variablesArray[0] : "Card title"}
                  </h5>
                </button>
                <p className="card-text ">
                  Aquí va el dropdown de la variable 1
                </p>
              </div>
            </div>
            <div className="card border-0">
              <div className="card-body">
                <button className="btn btn-light border">
                  <h5 className="card-title text-primary fw-bold">
                    {variablesArray[1] ? variablesArray[1] : "Card title"}
                  </h5>
                </button>
                <p className="card-text ">
                  Aquí va el dropdown de la variable 2
                </p>
              </div>
            </div>
            <div className="card border-0">
              <div className="card-body">
                <button className="btn btn-light border ">
                  <h5 className="card-title text-primary fw-bold">
                    {variablesArray[2] ? variablesArray[2] : "Card title"}
                  </h5>
                </button>

                <p className="card-text ">
                  Aquí va el dropdown de la variable 3
                </p>
              </div>
            </div>
          </div>
          <div className="card text-body-secondary border-0">
            <button className="btn btn-light">
              <img
                src="\images\profile.png"
                alt="Icono"
                width="30"
                height="30"
              />
              <p>Crear perfil</p>
            </button>
          </div>
        </div>
      )}  
    </div>
  );
};
export { Profile };
