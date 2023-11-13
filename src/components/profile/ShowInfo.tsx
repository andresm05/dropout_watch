import { Dialog } from "@mui/material";
import { InfluentialButton } from "./InfluentialButton";

interface ShowInfoProps {
  openDialog: boolean;
  handleCloseDialog: () => void;
}

export const ShowInfo = ({ handleCloseDialog, openDialog }: ShowInfoProps) => {
  return (
    <Dialog onClose={handleCloseDialog} open={openDialog}>
      <div className="d-flex justify-content-center align-items-center p-3">
        <div className="d-flex flex-col m-3">
          <InfluentialButton rate={0.8} />
          <span className="m-2">
            Indica que la variable es altamente influyente
            <p className="row text-primary fw-lighter">
              Esto signifíca que más del 80% de los encuestados cumplen la
              condición
            </p>
          </span>
        </div>
        <div className="d-flex flex-col m-3">
          <InfluentialButton rate={0.5} />
          <span className="m-2">
            Indica que la variable es medianamente influyente
            <p className="row text-primary fw-lighter">
              Esto signifíca que más del 50% y menos del 80% de los encuestados
              cumplen la condición
            </p>
          </span>
        </div>
      </div>
    </Dialog>
  );
};
