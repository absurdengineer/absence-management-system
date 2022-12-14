import { CustomRange, GenerateRandomNumber } from "../types/function.types";

export const range: CustomRange = (start, end) => {
  if (start > end) {
    const temp = end;
    end = start;
    start = temp;
  }
  return Array.from(Array(end - start + 1).keys()).map((i) => i + start);
};

export const generateRandomNumber: GenerateRandomNumber = () => {
  const min = 1000;
  const max = 3000;
  return Math.floor(min + Math.random() * max);
};
