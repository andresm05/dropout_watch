import { TraitorsForm } from "../utilities";

export const setPath = (path: string, values:TraitorsForm) => {
    const { economicLevel, maxSemester, modalities, programs } = values;
    switch (path) {
        case "sme":
        return `/sme/${maxSemester}/${modalities}/${economicLevel}`;
        case "pme":
        return `/pme/${programs}/${modalities}/${economicLevel}`;
        case "psm":
        return `/psm/${programs}/${maxSemester}/${modalities}`;
        case "pse":
        return `/pse/${programs}/${maxSemester}/${economicLevel}`;
        default:
        return "";
    }
}
