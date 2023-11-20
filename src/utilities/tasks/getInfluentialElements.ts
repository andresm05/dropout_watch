import { InfluentialElements, TraitorsTernary } from "../";

export const getInfluentialElements = (
  traitors: TraitorsTernary
): InfluentialElements => {
  const getMaxElement = <T extends { traitors: number }>(
    elements: T[] | undefined
  ) => {
    if (!elements || elements.length === 0) {
      return [];
    }

    const maxElement = elements[0].traitors;

    return elements.filter((element) => element.traitors === maxElement);
  };

  const influentialElementsTypeOfAdmission = getMaxElement(
    traitors.typeOfAdmissionsPorc
  );
  const influentialElementsCampus = getMaxElement(traitors.campusPorc);
  const influentialElementsVersion = getMaxElement(traitors.versionPorc);
  const influentialElementsInitialCredits = getMaxElement(
    traitors.initialCreditsRanges
  );
  const influentialElementsFailedCredits = getMaxElement(
    traitors.failedCreditRanges
  );
  const influentialElementsCancelledCredits = getMaxElement(
    traitors.CancelledCreditRanges
  );

  let influentialElementsEconomicLevel: InfluentialElements["influentialElementsEconomicLevel"] =
    [];
  if (traitors.economicLevelPorc) {
    influentialElementsEconomicLevel = getMaxElement(
      traitors.economicLevelPorc
    );
  }

  let influentialElementsSemesterCredits: InfluentialElements["influentialElementsSemesterCredits"] =
    [];
  if (traitors.semesterCreditsRanges) {
    influentialElementsSemesterCredits = getMaxElement(
      traitors.semesterCreditsRanges
    );
  }

  let influentialElementsModalities: InfluentialElements["influentialElementsModalities"] =
    [];
  if (traitors.modalitiesPorc) {
    influentialElementsModalities = getMaxElement(traitors.modalitiesPorc);
  }
  
  let InfluentialElementsPrograms: InfluentialElements["influentialElementsModalities"] =
  [];
if (traitors.programsPrc) {
  InfluentialElementsPrograms = getMaxElement(traitors.programsPrc);
}
  return {
    nom_unidad_acad_matriculado: traitors.nom_unidad_acad_matriculado,
    influentialElementsTypeOfAdmission,
    influentialElementsCampus,
    influentialElementsVersion,
    influentialElementsInitialCredits,
    influentialElementsFailedCredits,
    influentialElementsCancelledCredits,
    influentialElementsEconomicLevel,
    influentialElementsSemesterCredits,
    influentialElementsModalities,
    InfluentialElementsPrograms,
  };
};
