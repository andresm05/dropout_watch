import { Dialog } from "@mui/material";
import { useLoyals } from "../../../hooks/useLoyals";
import { useState } from "react";
import { Loyal } from "../../../utilities";
import LoyalsTable from "./LoyalsTable";
import { Alerts } from "../../../helpers";

interface GenerateReportProps {
  fullPath: string;
}

export const GenerateReport = ({ fullPath }: GenerateReportProps) => {
  const { getLoyalsByQuery } = useLoyals();

  const [showReport, setShowReport] = useState(false);
  const [loyalData, setLoyalData] = useState<Loyal>();

  const handleCloseDialog = () => {
    setShowReport(false);
  };

  const HandleFitLoyals = async () => {
    if (fullPath === "") return;
    const loyals = await getLoyalsByQuery(fullPath);
    if (loyals) {
      setLoyalData(loyals);
      console.log(loyals);
      setShowReport(true);
    }
  };

  return (
    <div>
      <button className="btn btn-outline-danger" onClick={HandleFitLoyals}>
        <i className="bi bi-card-list me-2"></i>
        Generar reporte
      </button>
      <Dialog open={showReport} onClose={handleCloseDialog}>
        {loyalData?.loyals.length === 0 ? (
            <div className="d-flex justify-content-center align-items-center m-3">

                <Alerts
                  severity="info"
                  alert="No hay información para mostrar"
                  message="sin Resultados"
                />
            </div>
        ) : (
          <>
            <div className="p-3 d-flex flex-column justify-content-center">
              <h3 className="text-center fw-light text-primary">
                Estudiantes matriculados en el período 2023-1 que están en
                riesgo de desertar bajo estas condiciones
              </h3>

              <LoyalsTable loyalData={loyalData} />
            </div>
            <button
              className="btn btn-outline-danger w-25 align-items-center m-2"
              onClick={handleCloseDialog}
            >
              Salir
            </button>
          </>
        )}
      </Dialog>
    </div>
  );
};
