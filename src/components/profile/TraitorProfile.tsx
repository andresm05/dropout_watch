import { InfluentialElements, TraitorsTernary } from "../../utilities";

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
            <div className="border border-light border border-2 rounded m-2">
              <span className="fw-bold me-2 card-text">Unidad Académica:</span>
              {pathCondition === "sme" ? (
                <>
                  {fitProfile?.InfluentialElementsPrograms.map((program) => (
                    <span>{program.category} </span>
                  ))}
                </>
              ) : (
                <span>{traitorProfile?.nom_unidad_acad_matriculado}</span>
              )}
            </div>
            <div className="border border-light border border-2 rounded m-2">
              <span className="fw-bold me-2 card-text">Tipo de Admisión:</span>

              {fitProfile?.influentialElementsTypeOfAdmission.map(
                (admission) => (
                  <span>{admission.category} </span>
                )
              )}
            </div>
            <div className="border border-light border border-2 rounded m-2">
              <span className="fw-bold me-2 card-text">Sede:</span>

              {fitProfile?.influentialElementsCampus.map((campus) => (
                <span>{campus.category} </span>
              ))}
            </div>
            <div className="border border-light border border-2 rounded m-2">
              <span className="fw-bold me-2 card-text">Versión:</span>

              {fitProfile?.influentialElementsVersion.map((version) => (
                <span>{version.category} </span>
              ))}
            </div>
            {pathCondition === "pse" && (
              <div className="border border-light border border-2 rounded m-2">
                <span className="fw-bold me-2 card-text">Modalidad:</span>
                {fitProfile?.influentialElementsModalities.map((mod) => (
                  <span>{mod.category} </span>
                ))}
              </div>
            )}
            {pathCondition === "sme" && (
              <div className="border border-light border border-2 rounded m-2">
                <span className="fw-bold me-2 card-text">
                  Programa académico:
                </span>
                {fitProfile?.InfluentialElementsPrograms.map((program) => (
                  <span>{program.category} </span>
                ))}
              </div>
            )}
            {pathCondition === "pme" && (
              <div className="border border-light border border-2 rounded m-2">
                <span className="fw-bold me-2 card-text">
                  Total créditos aprobados:
                </span>
                {fitProfile?.influentialElementsSemesterCredits.map(
                  (credits) => (
                    <span>{`[${credits.min}-${credits.max}] `} </span>
                  )
                )}
              </div>
            )}

            {pathCondition === "psm" && (
              <div className="border border-light border border-2 rounded m-2">
                <span className="fw-bold me-2 card-text">
                  Estrato socioeconómico:
                </span>
                {fitProfile?.influentialElementsEconomicLevel.map(
                  (economic) => (
                    <span>{economic.category} </span>
                  )
                )}
              </div>
            )}

            <div className="border border-light border border-2 rounded m-2">
              <span className="fw-bold me-2 card-text">
                Créditos matriculados último semestre:
              </span>
              {fitProfile?.influentialElementsInitialCredits.map((initcred) => (
                <span>{`[${initcred.min}-${initcred.max}] `} </span>
              ))}
            </div>
            <div className="border border-light border border-2 rounded m-2">
              <span className="fw-bold me-2 card-text">
                Total créditos reprobados:
              </span>
              {fitProfile?.influentialElementsFailedCredits.map((failcred) => (
                <span>{`[${failcred.min}-${failcred.max}] `} </span>
              ))}
            </div>
            <div className="border border-light border border-2 rounded m-2">
              <span className="fw-bold me-2 card-text">
                Total créditos cancelados:
              </span>
              {fitProfile?.influentialElementsCancelledCredits.map(
                (cancelcred) => (
                  <span>{`[${cancelcred.min}-${cancelcred.max}] `} </span>
                )
              )}
            </div>
          </div>
          <span className="fw-bold me-2 card-text">
            Total encuestados: {traitorProfile?.totalTraitors}
          </span>
        </div>
      </div>
    </div>
  );
};

export { TraitorProfile };
