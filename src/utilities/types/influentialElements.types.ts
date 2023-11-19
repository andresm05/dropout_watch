import { ElementPorc, Range } from "./";

export interface InfluentialElements {
  nom_unidad_acad_matriculado?: string[];
  influentialElementsTypeOfAdmission: ElementPorc[];
  influentialElementsCampus: ElementPorc[];
  influentialElementsVersion: ElementPorc[];
  influentialElementsInitialCredits: Range[];
  influentialElementsFailedCredits: Range[];
  influentialElementsCancelledCredits: Range[];
  influentialElementsEconomicLevel: ElementPorc[];
  influentialElementsSemesterCredits: Range[];
  influentialElementsModalities: ElementPorc[];
  InfluentialElementsPrograms: ElementPorc[];
}
