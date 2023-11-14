import { ElementPorc, Range } from "../../../../utilities";

type Fields = ElementPorc | Range;

type PieChartData = {
    name: string;
    value: number;
  };

export const getData = (field: Fields[], range: boolean) => {
    const data: PieChartData[] = [];
    field.forEach((element: Fields) => {
      if (range) {
        const { traitors, min, max } = element as Range;
        const value = traitors;
        const name = `[${min} - ${max}]`;
        data.push({ name, value });
      } else {
        const { traitors, category } = element as ElementPorc;
        data.push({ name: category, value: traitors });
      }
    });
    return data;
  };

  export const getSeparatedData = (field: Fields[], range: boolean) => {
    const names: string[] = [];
    const values: number[] = [];
    field.forEach((element: Fields) => {
      if (range) {
        const { traitors, min, max } = element as Range;
        const value = traitors;
        const name = `[${min} - ${max}]`;
        names.push(name);
        values.push(value);
      } else {
        const { traitors, category } = element as ElementPorc;
        names.push(category);
        values.push(traitors);
      }
    });

    return { names, values };
  }