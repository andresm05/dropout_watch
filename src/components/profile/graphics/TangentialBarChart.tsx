import { ElementPorc, Range } from "../../../utilities";
import { getSeparatedData } from "./";
import { ECOption } from "./ChartsConfig";

type Fields = ElementPorc | Range;

export const tangentialBarChart = (
  traitors: Fields[],
  range: boolean,
  titleGraph: string
): ECOption => {
  const { names, values } = getSeparatedData(traitors, range);
  const option: ECOption = {
    title: {
      text: `${titleGraph}`,
      left: "left",
      top: "0%",
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
    polar: {
      radius: [30, "85%"],
    },

    angleAxis: {
      max: 1,
      startAngle: 75,
    },
    radiusAxis: {
      type: "category",
      data: names,
    },
    tooltip: {},
    series: {
      type: "bar",
      data: values,
      coordinateSystem: "polar",
      color: "rgba(255,127,80,1)",
    },
  };
  return option;
};
