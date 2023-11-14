import { getData } from "./";
import { ElementPorc, Range } from "../../../utilities";
import { ECOption } from "./ChartsConfig";

type Fields = ElementPorc | Range;

export const pieCharts = (
  traitors: Fields[],
  range: boolean,
  titleGraph: string
): ECOption => {
  const graphicData = getData(traitors, range);
  const option: ECOption = {
    title: {
      text: `${titleGraph}`,
      left: "center",
      bottom: "5%",
    },
    tooltip: {},

    series: [
      {
        type: "pie",
        data: graphicData,
        stillShowZeroSum: false,
        label: {
          show: true,
          position: "outside",
          formatter: "{b}",
        },

        radius: "50%",
      },
    ],
  };
  return option;
};
