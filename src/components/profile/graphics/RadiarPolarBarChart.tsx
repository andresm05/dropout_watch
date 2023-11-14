import { ElementPorc, Range } from "../../../utilities";
import { getSeparatedData } from "./";
import { ECOption } from "./ChartsConfig";

type Fields = ElementPorc | Range;

export const radiarPolarBarChart = (
  traitors: Fields[],
  range: boolean,
  titleGraph: string
): ECOption => {
  const { names, values } = getSeparatedData(traitors, range);
  const option: ECOption = {
    title: {
      text: titleGraph,
        left: "center",
    },
    polar: {
      radius: [30, "70%"],
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    radiusAxis: {
      max: 1,
    },
    angleAxis: {
      type: "category",
      data: names,
      startAngle: 75,
    },
    tooltip: {},
    series: {
      type: "bar",
      data: values,
      coordinateSystem: "polar",
      color: "rgba(184,134,11,1)",
    },
  };
  return option;
};
