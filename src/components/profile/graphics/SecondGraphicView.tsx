import ReactECharts from "echarts-for-react";
import { pieCharts } from "./PieCharts";
import { ElementPorc, Range, TraitorsTernary } from "../../../utilities";
import { tangentialBarChart } from "./TangentialBarChart";
import { BarCharts } from "./BarCharts";

type Fields = ElementPorc[] | Range[] | undefined;

interface GraphicViewProps {
  traitors: TraitorsTernary | undefined;
  pathCondition: string;
}

export const SecondGraphicView = ({ traitors }: GraphicViewProps) => {
  const existField = (field: Fields) => {
    return field === undefined || field.length === 0 ? false : true;
  };
  const chartModalities = pieCharts(
    traitors?.modalitiesPorc || [],
    false,
    "Modalidad"
  );

  const chartPrograms = BarCharts(
    traitors?.programsPrc || [],
    false,
    "Programa Académico"
  );

  return (
    <div className="card text-center bg-light">
      <div className="card-body">
        <h5 className="card-title">Estadisticas</h5>
        <div className="d-flex flex-column justify-content-center p-5">
          {existField(traitors?.programsPrc) && (
            <ReactECharts option={chartPrograms} />
          )}
        </div>
      </div>
    </div>
  );
};
