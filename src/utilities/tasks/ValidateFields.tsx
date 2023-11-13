import { TraitorsForm } from "..";

export const validateFields = (
  fields: TraitorsForm,
  path: string,
  maxSem: number
) => {
  const isPse = path === "pse";
  const isPsm = path === "psm";
  const isPme = path === "pme";
  const isSme = path === "sme";

  if (
    (isPse && (fields.economicLevel === -1 || fields.programs === "")) ||
    (isPsm && (fields.programs === "" || fields.modalities === "")) ||
    (isPme &&
      (fields.programs === "" ||
        fields.modalities === "" ||
        fields.economicLevel === -1 ||
        fields.economicLevel === "")) ||
    (isSme &&
      (fields.modalities === "" ||
        fields.economicLevel === -1 ||
        fields.economicLevel === ""))
  ) {
    return "Debe completar todos los campos";
  }

  if (
    fields.maxSemester &&
    (fields.maxSemester < 0 || fields.maxSemester > maxSem)
  ) {
    return `La cantidad de créditos acumulados debe ser mayor o igual a 0 y menor o igual a ${maxSem}`;
  }

  return null;
};
