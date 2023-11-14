import { ElementPorc, Range } from "../../../utilities";
import { getSeparatedData } from ".";
import { ECOption } from "./ChartsConfig";

type Fields = ElementPorc | Range;

export const BarCharts = (
  traitors: Fields[],
  range: boolean,
  titleGraph: string
): ECOption => {
  const { names, values } = getSeparatedData(traitors, range);
  const option: ECOption = {
    title: {
      text: `${titleGraph}`,
      left: "center",
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      formatter: '{b}: {c}'
    },

      axisPointer: {
        type: "shadow",
      },
    xAxis: {
      type: "category",
      data: names,
      axisLabel: {
        show: false,
      }
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: values,
        type: "bar",
        color: "#2E86C1",
      },
    ],
  };
  return option;
};
