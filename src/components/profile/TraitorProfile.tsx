import { nanoid } from "nanoid";
import { InfluentialElements, TraitorsTernary } from "../../utilities";
import { useState } from "react";
import { ShowInfo } from "./ShowInfo";
import { ItemProfile } from "./ItemProfile";

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
                <span key={nanoid()}>{unidadAcad}</span>
              ))}
            </div>
            <ItemProfile
              elements={fitProfile?.influentialElementsTypeOfAdmission || []}
              title="Tipo de admisión"
            />
            <ItemProfile
              elements={fitProfile?.influentialElementsCampus || []}
              title="Sede"
            />

            <ItemProfile
              elements={fitProfile?.influentialElementsVersion || []}
              title="Versión"
            />

            {pathCondition === "pse" && (
              <ItemProfile
                elements={fitProfile?.influentialElementsModalities || []}
                title="Modalidad"
              />
            )}
            {pathCondition === "sme" && (
              <ItemProfile
                elements={fitProfile?.InfluentialElementsPrograms || []}
                title="Programa Académico"
              />
            )}

            {pathCondition === "pme" && (
              <ItemProfile
                elements={fitProfile?.influentialElementsSemesterCredits || []}
                title="Total créditos aprobados"
                range={true}
              />
            )}

            {pathCondition === "psm" && (
              <ItemProfile
                elements={fitProfile?.influentialElementsEconomicLevel || []}
                title="Nivel económico"
              />
            )}

            <ItemProfile
              elements={fitProfile?.influentialElementsInitialCredits || []}
              title="Créditos matriculados último semestre"
              range={true}
            />

            <ItemProfile
              elements={fitProfile?.influentialElementsFailedCredits || []}
              title="Total Crédtitos reprobados"
              range={true}
            />
            <ItemProfile
              elements={fitProfile?.influentialElementsCancelledCredits || []}
              title="Total Créditos cancelados"
              range={true}
            />
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <span className="fw-bold me-2 card-text">
              Total encuestados: {traitorProfile?.totalTraitors}
            </span>
            <button
              className="btn btn-outline-success"
              onClick={handleOpenDialog}
            >
              <i className="bi bi-question-square-fill"></i>
            </button>
          </div>
        </div>
      </div>
      <ShowInfo handleCloseDialog={handleCloseDialog} openDialog={openDialog} />
    </div>
  );
};

export { TraitorProfile };
