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

    polar: {
      radius: [30, "80%"],
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
      color: "#2E86C1",
      label: {
        show: true,
        position: "right",
        formatter: "{b}",
      },
    },
  };
  return option;
};
