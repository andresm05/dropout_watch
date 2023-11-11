import { pathOptions } from "../../constants/variables";

export const getPathCondition = (
  var1: string,
  var2: string,
  var3: string
): string => {
  const foundElement = pathOptions.find((element) => {
    return (
      element.ternary.has(var1) &&
      element.ternary.has(var2) &&
      element.ternary.has(var3)
    );
  });

  if (foundElement) {
    return foundElement.path;
  } else {
    return "";
  }
};
