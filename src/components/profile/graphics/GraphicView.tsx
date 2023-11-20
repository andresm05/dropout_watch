import ReactECharts from "echarts-for-react";
import {  TraitorsTernary } from "../../../utilities";
import { donutPieCharts } from "./DonutPieCharts";
import { tangentialBarChart } from "./TangentialBarChart";


interface GraphicViewProps {
  traitors: TraitorsTernary | undefined;
  pathCondition: string;
}

export const GraphicView = ({ traitors }: GraphicViewProps) => {

  const chartTypeOfAdmission = donutPieCharts(traitors?.typeOfAdmissionsPorc || [], false, "Tipo de admisión");
  const chartCampus = donutPieCharts(traitors?.campusPorc || [], false, "Sede");
  const chartVersion = tangentialBarChart(traitors?.versionPorc || [], false, "Versión");
  return (
    <div className="col-sm-6">
      <div className="card text-center border border-light">
        <div className="card-body">
          <h5 className="card-title text-primary">Estadisticas</h5>
          <div className="d-flex flex-column justify-content-center m-2">
            <ReactECharts option={chartTypeOfAdmission} />
            <ReactECharts option={chartVersion} />
            <ReactECharts option={chartCampus} />
          </div>
        </div>  
      </div>
    </div>
  );
};
