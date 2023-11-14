/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDropouts } from "../hooks/useDropouts";
import {
  InfluentialElements,
  Traitors,
  TraitorsForm,
  TraitorsTernary,
  getInfluentialElements,
  getPathCondition,
} from "../utilities";
import { Loadings } from "../helpers/Loadings";
import { useNavigate, useParams } from "react-router-dom";
import {
  GraphicView,
  NavBar,
  TraitorProfile,
  VariableOptions,
} from "../components";
import { useForm } from "../hooks/useForm";
import { Alerts, setPath } from "../helpers";
import { validateFields } from "../utilities/tasks/ValidateFields";
import { SecondGraphicView } from "../components/profile/graphics/SecondGraphicView";

const Profile = () => {
  const { selectedVariables } = useParams();
  const navegate = useNavigate();
  const { getTraitors, getTraitorsByTernary } = useDropouts();
  const [traitors, setTraitors] = useState<Traitors>();
  const [pathCondition, setPathCondition] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingCards, setIsLoadingCards] = useState(false);
  const [showCards, setShowCards] = useState(false);
  const [traitorProfile, setTraitorProfile] = useState<TraitorsTernary>();
  const [fitProfile, setFitProfile] = useState<InfluentialElements>();
  const [showInfo, setShowInfo] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [var1, var2, var3] = selectedVariables
    ? selectedVariables.split("-")
    : [];

  const initialValues: TraitorsForm = {
    programs: "",
    economicLevel: -1,
    modalities: "",
    maxSemester: 0,
  };

  const { values, handleFieldChange } = useForm(initialValues);

  const handleCreateProfile = async () => {
    //get the path condition to build the route
    const pathCond = getPathCondition(var1, var2, var3);
    setPathCondition(pathCond);

    //validate the fields
    const errorMsg = validateFields(
      values,
      pathCond,
      traitors?.maxSemester || 0
    );
    if (errorMsg) {
      setErrorMessage(errorMsg);
      setShowError(true);
      return;
    }
    setShowError(false);
    setShowCards(false);

    //create the route and get the profile
    const fullpath = setPath(pathCond, values);
    setIsLoadingCards(true);
    const profile = await getTraitorsByTernary(fullpath);
    if (profile) {
      setIsLoadingCards(false);
      setTraitorProfile(profile);
      setFitProfile(getInfluentialElements(profile));
      console.log(profile);
      //verify if the profile is empty
      if (profile.totalTraitors > 0) {
        setShowCards(true);
        setShowInfo(false);
      } else {
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
      <div className="d-flex justify-content-between align-items-center mx-5">
        <NavBar page="Profile" />
        <button
          className="btn btn-outline-primary h-50"
          onClick={() => navegate(-1)}
        >
          <i className="bi bi-arrow-left-circle-fill me-2"></i>
          <span>Regresar</span>
        </button>
      </div>

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
                  <h5 className="card-title text-primary fw-bold">{var3}</h5>
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
            {showError && (
              <Alerts severity="error" message="Error" alert={errorMessage} />
            )}
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
          {isLoadingCards && (
            <div className="d-flex flex-column justify-content-center align-items-center">
              <Loadings
                type="cylon"
                color="#0d6efd
              "
              />
              <h1 className="display-6 d-flex flex-column justify-content-center align-items-center">
                "El único esfuerzo que se pierde es el que no se intenta",{" "}
                <span className="text-primary ">Roberto Flórez</span> 
              </h1>
            </div>
          )}
          {showCards && (
            <>
              <div className="row mt-4 mb-4 g-3 align-items-stretch">
                <TraitorProfile
                  traitorProfile={traitorProfile}
                  fitProfile={fitProfile}
                  pathCondition={pathCondition}
                />
                <GraphicView
                  traitors={traitorProfile}
                  pathCondition={pathCondition}
                />
              </div>
              <div className="row align-items-stretch">
                <SecondGraphicView
                  traitors={traitorProfile}
                  pathCondition={pathCondition}
                />
              </div>
            </>
          )}
          {showInfo && (
            <div className="m-4">
              <Alerts
                severity="success"
                message="Great!"
                alert="There is no profile that fullfil your conditions. Don't worry, you won't fail"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export { Profile };
