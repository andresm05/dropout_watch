import { nanoid } from "nanoid";
import { ProfileField } from ".";
import { InfluentialElements, TraitorsTernary } from "../../utilities";
import { ProfileRange } from "./ProfileRange";
import { Dialog } from "@mui/material";
import { useState } from "react";

interface TraitorProfileProps {
  traitorProfile: TraitorsTernary | undefined;
  fitProfile: InfluentialElements | undefined;
  pathCondition: string;
}

const TraitorProfile = ({
  traitorProfile,
  fitProfile,
  pathCondition,
}: TraitorProfileProps) => {

  const [openDialog, setOpenDialog] = useState(false);

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  return (
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
          <div className="card-body">
            <div className="row justify-content-center my-3">
              <span className="fw-bold me-2 card-text ">Unidad Académica</span>
              {traitorProfile?.nom_unidad_acad_matriculado.map((unidadAcad) => (
                <span>{unidadAcad} </span>
              ))}
            </div>
            <div className="my-3">
              <span className="row justify-content-center fw-bold card-text">
                Tipo de admisión
              </span>
              {fitProfile?.influentialElementsTypeOfAdmission.map(
                (admission) => (
                  <ProfileField field={admission} key={nanoid()} />
                )
              )}
            </div>
            <div className="my-3">
              <span className="row justify-content-center fw-bold card-text">
                Sede
              </span>
              {fitProfile?.influentialElementsCampus.map((campus) => (
                <ProfileField field={campus} key={nanoid()} />
              ))}
            </div>

            <div className="my-3">
              <span className="row justify-content-center fw-bold card-text">
                Versión
              </span>

              {fitProfile?.influentialElementsVersion.map((version) => (
                <ProfileField field={version} key={nanoid()} />
              ))}
            </div>

            {pathCondition === "pse" && (
              <div className="my-3">
                <span className="row justify-content-center fw-bold card-text">
                  Modalidad
                </span>
                {fitProfile?.influentialElementsModalities.map((mod) => (
                  <ProfileField field={mod} key={nanoid()} />
                ))}
              </div>
            )}
            {pathCondition === "sme" && (
              <div className="my-3">
                <span className="row justify-content-center fw-bold card-text">
                  Programa académico
                </span>
                {fitProfile?.InfluentialElementsPrograms.map((prog) => (
                  <ProfileField field={prog} key={nanoid()} />
                ))}
              </div>
            )}
            {pathCondition === "pme" && (
              <div className="my-3">
                <span className="row justify-content-center fw-bold card-text">
                  Total créditos aprobados{" "}
                </span>
                {fitProfile?.influentialElementsInitialCredits.map(
                  (initCred) => (
                    <ProfileRange credits={initCred} key={nanoid()} />
                  )
                )}
              </div>
            )}

            {pathCondition === "psm" && (
              <div className="my-3">
                <span className="row justify-content-center fw-bold card-text">
                  Estrato socioeconómico
                </span>
                {fitProfile?.influentialElementsEconomicLevel.map(
                  (economic) => (
                    <ProfileField field={economic} key={nanoid()} />
                  )
                )}
              </div>
            )}
            <div className="my-3">
              <span className="row justify-content-center fw-bold card-text">
                Créditos matriculados último semestre
              </span>
              {fitProfile?.influentialElementsInitialCredits.map((initCred) => (
                <ProfileRange credits={initCred} key={nanoid()} />
              ))}
            </div>
            <div className="my-3">
              <span className="row justify-content-center fw-bold card-text">
                Total créditos reprobados
              </span>
              {fitProfile?.influentialElementsFailedCredits.map((failcred) => (
                <ProfileRange credits={failcred} key={nanoid()} />
              ))}
            </div>
            <div className="my-3">
              <span className="row justify-content-center fw-bold card-text">
                Total créditos cancelados
              </span>
              {fitProfile?.influentialElementsCancelledCredits.map(
                (cancelcred) => (
                  <ProfileRange credits={cancelcred} key={nanoid()} />
                )
              )}
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <span className="fw-bold me-2 card-text">
              Total encuestados: {traitorProfile?.totalTraitors}
            </span>
            <h3 className="text-success" onClick={handleOpenDialog}>
              <i className="bi bi-question-square-fill"></i>
            </h3>
          </div>
        </div>
      </div>
      <Dialog onClose={handleCloseDialog} open={openDialog}>
        <div className="d-flex justify-content-center align-items-center p-3">
          <h2 className="text-danger m-2">
            <i className="bi bi-exclamation-square-fill"></i>
          </h2>
          <span className="m-2">Indica que la variable es altamente influyente</span>
        </div>
        <div className="d-flex justify-content-center align-items-center p-3">
          <h2 className="text-warning m-2">
            <i className="bi bi-exclamation-square-fill"></i>
          </h2>
          <span className="m-2">Indica que la variable es medianamente influyente</span>
        </div>
      </Dialog>
    </div>
  );
};

export { TraitorProfile };
