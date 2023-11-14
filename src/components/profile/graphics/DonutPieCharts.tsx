import { getData } from ".";
import { ElementPorc, Range } from "../../../utilities";
import { ECOption } from "./ChartsConfig";

type Fields = ElementPorc | Range;

export const donutPieCharts = (
  traitors: Fields[],
  range: boolean,
  titleGraph: string
): ECOption => {
  const graphicData = getData(traitors, range);
  const option: ECOption = {
    title: {
      text: `${titleGraph}`,
      left: "center",
      top: "5%",
    },

    tooltip: {
      trigger: "item",
    },
    legend: {
      bottom: "-10%",
      left: "center",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: graphicData,
      },
    ],
  };
  return option;
};
