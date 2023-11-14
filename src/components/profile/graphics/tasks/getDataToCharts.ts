import { ElementPorc, Range } from "../../../../utilities";

type Fields = ElementPorc | Range;

type PieChartData = {
  name: string;
  value: number;
};

export const getData = (field: Fields[], range?: boolean) => {
  const data: PieChartData[] = [];
  for (const element of field) {
    if (range) {
      const { traitors, min, max } = element as Range;
      const value = traitors;
      const name = `[${min} - ${max}]`;
      data.push({ value, name });
      if (traitors === 1) {
        // Rompe el bucle cuando traitors es igual a 1
        break;
      }
    } else {
      const { traitors, category } = element as ElementPorc;
      data.push({ value: traitors, name: category });
      if (traitors === 1) {
        // Rompe el bucle cuando traitors es igual a 1
        break;
      }
    }
  }

  return data;
};

export const getSeparatedData = (field: Fields[], range?: boolean) => {
  const names: string[] = [];
  const values: number[] = [];
  for (const element of field) {
    if (range) {
      const { traitors, min, max } = element as Range;
      const value = traitors;
      const name = `[${min} - ${max}]`;
      names.push(name);
      values.push(value);
      if (traitors === 1) {
        // Rompe el bucle cuando traitors es igual a 1
        break;
      }
    } else {
      const { traitors, category } = element as ElementPorc;
      names.push(category);
      values.push(traitors);
      if (traitors === 1) {
        // Rompe el bucle cuando traitors es igual a 1
        break;
      }
    }
  }

  return { names, values };
};
