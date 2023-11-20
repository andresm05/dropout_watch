export interface TraitorsTernary {
  ok?: boolean;
  totalTraitors: number;
  nom_unidad_acad_matriculado: string[];
  typeOfAdmissionsPorc: ElementPorc[];
  campusPorc: ElementPorc[];
  programsPrc?: ElementPorc[];
  versionPorc: ElementPorc[];
  modalitiesPorc?: ElementPorc[];
  economicLevelPorc?: ElementPorc[];
  semesterCreditsRanges?: Range[];
  initialCreditsRanges: Range[];
  failedCreditRanges: Range[];
  CancelledCreditRanges: Range[];
}

export interface Range {
  min: number;
  max: number;
  traitors: number;
}

export interface ElementPorc {
  category: string;
  traitors: number;
}
