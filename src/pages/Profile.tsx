/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDropouts } from "../hooks/useDropouts";
import { Traitors, TraitorsForm, TraitorsTernary } from "../utilities";
import { Loadings } from "../helpers/Loadings";
import { useParams } from "react-router-dom";
import { VariableOptions } from "../components";
import { useForm } from "../hooks/useForm";
import { pathOptions } from "../constants/variables";
import { setPath } from "../helpers";

const Profile = () => {
  const { selectedVariables } = useParams();
  const { getTraitors, getTraitorsByTernary } = useDropouts();
  const [traitors, setTraitors] = useState<Traitors | undefined>();
  const [isLoading, setIsLoading] = useState(true);
  const [showCards, setShowCards] = useState(false);
  const [traitorProfile, setTraitorProfile] = useState<
    TraitorsTernary | undefined
  >();
  const [showInfo, setShowInfo] = useState(false);
  const variablesArray = selectedVariables ? selectedVariables.split("-") : [];
  const [var1, var2, var3] = variablesArray;

  const initialValues: TraitorsForm = {
    programs: "",
    economicLevel: -1,
    modalities: "",
    maxSemester: -1,
  };

  const { values, handleFieldChange } = useForm(initialValues);

  const handleCreateProfile = async () => {
    let pathCondition = "";
    pathOptions.forEach((element) => {
      if (
        element.ternary.has(var1) &&
        element.ternary.has(var2) &&
        element.ternary.has(var3)
      ) {
        pathCondition = element.path;
      }
    });

    const fullpath = setPath(pathCondition, values);
    console.log(fullpath);
    const profile = await getTraitorsByTernary(fullpath);
    if (profile) {
      setTraitorProfile(profile);
      console.log(profile);
      if (profile.totalTraitors > 0) {
        setShowCards(true);
        setShowInfo(false);
      }else{
        setShowCards(false);
        setShowInfo(true);
      }
    }
  };

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
          <Loadings
            type="cylon"
            color="#0d6efd
"
          />
          <h1 className="display-6">
            " No canceles compa, <span className="text-primary ">LÚCHALA </span>{" "}
            "
          </h1>
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
                  <h5 className="card-title text-primary fw-bold">{var1}</h5>
                </button>
                <VariableOptions
                  traitors={traitors}
                  variable={var1}
                  handleFieldChange={handleFieldChange}
                />
              </div>
            </div>
            <div className="card border-0">
              <div className="card-body">
                <button className="btn btn-light border">
                  <h5 className="card-title text-primary fw-bold">{var2}</h5>
                </button>
                <VariableOptions
                  traitors={traitors}
                  variable={var2}
                  handleFieldChange={handleFieldChange}
                />
              </div>
            </div>
            <div className="card border-0">
              <div className="card-body">
                <button className="btn btn-light border ">
                  <h5 className="card-title text-primary fw-bold">
                    {variablesArray[2] ? variablesArray[2] : "Card title"}
                  </h5>
                </button>
                <VariableOptions
                  traitors={traitors}
                  variable={var3}
                  handleFieldChange={handleFieldChange}
                />
              </div>
            </div>
          </div>
          <div className="card text-body-secondary border-0">
            <button className="btn btn-light" onClick={handleCreateProfile}>
              <img
                src="\images\profile.png"
                alt="Icono"
                width="30"
                height="30"
              />
              <p>Crear perfil</p>
            </button>
          </div>
          {showCards && (
            <div className="row mt-4 mb-4">
              <div className="col-sm-6 mb-3 mb-sm-0">
                <div className="card">
                  <div className="card-body text-center">
                    <div>
                      <img
                        className="rounded-circle "
                        src="\images\profile.png"
                        alt="Icono"
                        width="80"
                        height="80"
                      />
                    </div>
                    <h5 className="card-title">Nombre: Pepito Muñoz </h5>
                    <p className="card-text">
                      Carrera Universitaria:
                      {traitorProfile?.nom_unidad_acad_matriculado}
                      <br />
                      Edad: años
                      <br />
                      Ciudad:{" "}
                      {traitorProfile?.modalitiesPorc?.map(
                        (mod) => mod.category
                      )}{" "}
                      <br />
                      <br />
                      Estado: xx <br />
                      Tipo de sangre: xx <br />
                      Promedio: xx <br />
                      Horas que dormia: xx <br />
                      Vio clases con Roberto? : F/V <br />
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="card text-center">
                  <div className="card-body">
                    <h5 className="card-title">Estadisticas</h5>
                    <p className="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
          {showInfo && (
            <div className="card text-body-secondary border-0">
              <div className="card-body">
                <h5 className="card-title">Información</h5>
                <p className="card-text">
                  There is no profile that fullfil the conditions
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export { Profile };
