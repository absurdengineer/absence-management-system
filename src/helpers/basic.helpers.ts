import { CustomRange } from "../types/function.types";

export const range: CustomRange = (start, end) => {
  if (start > end) {
    const temp = end;
    end = start;
    start = temp;
  }
  return Array.from(Array(end - start + 1).keys()).map((i) => i + start);
};
