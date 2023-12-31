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
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
      formatter: "{b}: {c}",
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

    axisPointer: {
      type: "shadow",
    },
    xAxis: {
      type: "category",
      data: names,
      axisLabel: {
        show: false,
      },
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: values,
        type: "bar",
        color: "rgba( 0, 128, 128, 1 )",
      },
    ],
  };
  return option;
};
