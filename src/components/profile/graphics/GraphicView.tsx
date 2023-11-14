import ReactECharts from "echarts-for-react";
import { pieCharts } from "./PieCharts";
import { ElementPorc, Range, TraitorsTernary } from "../../../utilities";
import { donutPieCharts } from "./DonutPieCharts";
import { tangentialBarChart } from "./TangentialBarChart";

type Fields = ElementPorc[] | Range[] | undefined;

interface GraphicViewProps {
  traitors: TraitorsTernary | undefined;
  pathCondition: string;
}

export const GraphicView = ({ traitors }: GraphicViewProps) => {
  const existField = (field: Fields) => {
    return field === undefined || field.length === 0 ? false : true;
  };
  const chartModalities = tangentialBarChart(traitors?.modalitiesPorc || [], false, "Modalidad");
  const chartTypeOfAdmission = donutPieCharts(traitors?.typeOfAdmissionsPorc || [], false, "Tipo de admisión");
  const chartCampus = donutPieCharts(traitors?.campusPorc || [], false, "Sede");
  const chartVersion = tangentialBarChart(traitors?.versionPorc || [], false, "Versión");
  return (
    <div className="col-sm-6">
      <div className="card text-center bg-light">
        <div className="card-body">
          <h5 className="card-title">Estadisticas</h5>
          <div className="d-flex flex-column justify-content-center m-2">
            {existField(traitors?.modalitiesPorc) && (
              <ReactECharts option={chartModalities}  />
            )}
            <ReactECharts option={chartTypeOfAdmission} />
            <ReactECharts option={chartCampus} />
            <ReactECharts option={chartVersion} />

          </div>
        </div>
      </div>
    </div>
  );
};
