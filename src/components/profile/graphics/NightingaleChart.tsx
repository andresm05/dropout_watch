import { getData } from ".";
import { ElementPorc, Range } from "../../../utilities";
import { ECOption } from "./ChartsConfig";

type Fields = ElementPorc | Range;

export const nightingaleCharts = (
  traitors: Fields[],
  range: boolean,
  titleGraph: string
): ECOption => {
  const graphicData = getData(traitors, range);
  const option: ECOption = {
    title: {
      text: `${titleGraph}`,
      left: "center",
      top: "0%",
    },

    tooltip: {
      trigger: "item",
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
    series: [
      {
        name: "Nightingale Chart",
        type: "pie",
        radius: [50, 100],
        center: ["50%", "50%"],
        roseType: "area",
        itemStyle: {
          borderRadius: 8,
        },
        data: graphicData,
      },
    ],
  };
  return option;
};
