import { ElementPorc, Range, TraitorsTernary } from "../";

export interface InfluentialElements {
    influentialElementsTypeOfAdmission: ElementPorc[];
    influentialElementsCampus: ElementPorc[];
    influentialElementsVersion: ElementPorc[];
    influentialElementsInitialCredits: Range[];
    influentialElementsFailedCredits: Range[];
    influentialElementsCancelledCredits: Range[];
    influentialElementsEconomicLevel: ElementPorc[];
    influentialElementsSemesterCredits: Range[];
    influentialElementsModalities: ElementPorc[];
    }

export const getInfluentialElements = (traitorsTernary: TraitorsTernary) => {
  const maxElementsTypeOfAdmission =
    traitorsTernary.typeOfAdmissionsPorc[0].traitors;

  const lastIndexTypeOfAdmission =
    traitorsTernary.typeOfAdmissionsPorc.findIndex((element) => {
      return element.traitors < maxElementsTypeOfAdmission;
    });
  const influentialElementsTypeOfAdmission =
    traitorsTernary.typeOfAdmissionsPorc.slice(0, lastIndexTypeOfAdmission);

  console.log(influentialElementsTypeOfAdmission);

  const maxElementsCampus = traitorsTernary.campusPorc[0].traitors;

  const lastIndexCampus = traitorsTernary.campusPorc.findIndex((element) => {
    return element.traitors < maxElementsCampus;
  });
  const influentialElementsCampus = traitorsTernary.campusPorc.slice(
    0,
    lastIndexCampus
  );
  console.log(influentialElementsCampus);

  const maxElementsVersion = traitorsTernary.versionPorc[0].traitors;

  const lastIndexVersion = traitorsTernary.versionPorc.findIndex((element) => {
    return element.traitors < maxElementsVersion;
  });
  const influentialElementsVersion = traitorsTernary.versionPorc.slice(
    0,
    lastIndexVersion
  );
  console.log(influentialElementsVersion);

  const maxInitialCredits = traitorsTernary.initialCreditsRanges[0].traitors;

  const lastIndexInitialCredits =
    traitorsTernary.initialCreditsRanges.findIndex((element) => {
      return element.traitors < maxInitialCredits;
    });
  const influentialElementsInitialCredits =
    traitorsTernary.initialCreditsRanges.slice(0, lastIndexInitialCredits);
  console.log(influentialElementsInitialCredits);

  const maxFailedCredits = traitorsTernary.failedCreditRanges[0].traitors;

  const lastIndexFailedCredits = traitorsTernary.failedCreditRanges.findIndex(
    (element) => {
      return element.traitors < maxFailedCredits;
    }
  );
  const influentialElementsFailedCredits =
    traitorsTernary.failedCreditRanges.slice(0, lastIndexFailedCredits);
  console.log(influentialElementsFailedCredits);

  const maxCancelledCredits = traitorsTernary.CancelledCreditRanges[0].traitors;

  const lastIndexCancelledCredits =
    traitorsTernary.CancelledCreditRanges.findIndex((element) => {
      return element.traitors < maxCancelledCredits;
    });

  const influentialElementsCancelledCredits =
    traitorsTernary.CancelledCreditRanges.slice(0, lastIndexCancelledCredits);
  console.log(influentialElementsCancelledCredits);

  let influentialElementsPrograms: ElementPorc[] = [];
  if (traitorsTernary.programsPrc) {
    const maxElementsPrograms = traitorsTernary.programsPrc[0].traitors;

    const lastIndexPrograms = traitorsTernary.programsPrc.findIndex(
      (element) => {
        return element.traitors < maxElementsPrograms;
      }
    );
    influentialElementsPrograms = traitorsTernary.programsPrc.slice(
      0,
      lastIndexPrograms
    );
    console.log(influentialElementsPrograms);
  }

  let influentialElementsModalities: ElementPorc[] = [];
  if (traitorsTernary.modalitiesPorc) {
    const maxElementsModalities = traitorsTernary.modalitiesPorc[0].traitors;

    const lastIndexModalities = traitorsTernary.modalitiesPorc.findIndex(
      (element) => {
        return element.traitors < maxElementsModalities;
      }
    );
    influentialElementsModalities =
      lastIndexModalities !== -1
        ? traitorsTernary.modalitiesPorc.slice(0, lastIndexModalities)
        : traitorsTernary.modalitiesPorc;
    console.log(influentialElementsModalities);
  }

  let influentialElementsEconomicLevel: ElementPorc[] = [];
  if (traitorsTernary.economicLevelPorc) {
    const maxElementsEconomicLevel =
      traitorsTernary.economicLevelPorc[0].traitors;

    const lastIndexEconomicLevel = traitorsTernary.economicLevelPorc.findIndex(
      (element) => {
        return element.traitors < maxElementsEconomicLevel;
      }
    );
    influentialElementsEconomicLevel = traitorsTernary.economicLevelPorc.slice(
      0,
      lastIndexEconomicLevel
    );
    console.log(influentialElementsEconomicLevel);
  }

  let influentialElementsSemesterCredits: Range[] = [];
  if (traitorsTernary.semesterCreditsRanges) {
    const maxElementsSemesterCredits =
      traitorsTernary.semesterCreditsRanges[0].traitors;

    const lastIndexSemesterCredits =
      traitorsTernary.semesterCreditsRanges.findIndex((element) => {
        return element.traitors < maxElementsSemesterCredits;
      });
    influentialElementsSemesterCredits =
      traitorsTernary.semesterCreditsRanges.slice(0, lastIndexSemesterCredits);
    console.log(influentialElementsSemesterCredits);
  }

    const influentialElements: InfluentialElements = {
        influentialElementsTypeOfAdmission,
        influentialElementsCampus,
        influentialElementsVersion,
        influentialElementsInitialCredits,
        influentialElementsFailedCredits,
        influentialElementsCancelledCredits,
        influentialElementsEconomicLevel,
        influentialElementsSemesterCredits,
        influentialElementsModalities,
    };

    return influentialElements;
};
//help me simplyfy this method
