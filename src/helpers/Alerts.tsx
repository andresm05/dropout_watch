import { Alert } from "@mui/material";

interface WarningAlertProps {
    message: string;
    alert:string;
    severity: "warning" | "error" | "info" | "success";
}

export const Alerts = ({message, alert, severity}: WarningAlertProps) => {
  return (
    <Alert
      severity={severity}
      variant="outlined"
      className="d-flex justify-content-center mb-4 mx-auto"
    >
      {message} —{" "}
      <strong>{alert}</strong>
    </Alert>
  );
};
