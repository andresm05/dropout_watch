import ReactECharts from "echarts-for-react";
import { ElementPorc, Range, TraitorsTernary } from "../../../utilities";
import { BarCharts } from "./BarCharts";
import { nightingaleCharts } from "./NightingaleChart";
import { tangentialBarChart } from "./TangentialBarChart";
import { pieCharts } from "./PieCharts";
import { radiarPolarBarChart } from "./RadiarPolarBarChart";

type Fields = ElementPorc[] | Range[] | undefined;

interface GraphicViewProps {
  traitors: TraitorsTernary | undefined;
  pathCondition: string;
}

export const SecondGraphicView = ({ traitors }: GraphicViewProps) => {
  const existField = (field: Fields) => {
    return field === undefined || field.length === 0 ? false : true;
  };
  const chartModalities = tangentialBarChart(
    traitors?.modalitiesPorc || [],
    false,
    "Modalidad"
  );

  const chartPrograms = BarCharts(
    traitors?.programsPrc || [],
    false,
    "Programa Académico"
  );

  const chartFailedCredits = nightingaleCharts(
    traitors?.failedCreditRanges || [],
    true,
    "Créditos Reprobados"
  );

  const chartCanceledCredits = pieCharts(
    traitors?.CancelledCreditRanges || [],
    true,
    "Créditos Cancelados"
  );

  const chartEconomicLevel = nightingaleCharts(
    traitors?.economicLevelPorc || [],
    false,
    "Nivel Económico"
  );

  const chartTotalCredits = radiarPolarBarChart(
    traitors?.semesterCreditsRanges || [],
    true,
    "Total créditos aprobados"
  );

  return (
    <div className="card text-center border border-light">
      <div className="card-body">
        <h5 className="card-title text-primary">Estadísticas adicionales</h5>
        <div className="d-flex flex-wrap justify-content-center m-5">
            {existField(traitors?.modalitiesPorc) && (
              <div className="col-lg-6 mb-4">
                <ReactECharts option={chartModalities} />
              </div>
            )}
            {existField(traitors?.programsPrc) && (
              <div className="col-lg-6 mb-4">
                <ReactECharts option={chartPrograms} />
              </div>
            )}
            {existField(traitors?.economicLevelPorc) && (
              <div className="col-lg-6 mb-4">
                <ReactECharts option={chartEconomicLevel} />
              </div>
            )}
            {existField(traitors?.semesterCreditsRanges) && (
              <div className="col-lg-6 mb-4">
                <ReactECharts option={chartTotalCredits} />
              </div>
            )}
            <div className="col-lg-6 mb-4">
              <ReactECharts option={chartFailedCredits} />
            </div>
            <div className="col-lg-6 mb-4">
              <ReactECharts option={chartCanceledCredits} />
            </div>
          </div>
        </div>
    </div>
  );
};
