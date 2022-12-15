import {
  CustomRange,
  GenerateRandomNumber,
  GetStatus,
} from "../types/function.types";

export const range: CustomRange = (start, end) => {
  if (start > end) {
    const temp = end;
    end = start;
    start = temp;
  }
  return Array.from(Array(end - start + 1).keys()).map((i) => i + start);
};

export const generateRandomNumber: GenerateRandomNumber = () => {
  const min = 200;
  const max = 500;
  return Math.floor(min + Math.random() * max);
};

export const getStatus: GetStatus = (rejectedAt, confirmedAt) => {
  return rejectedAt ? "Rejected" : confirmedAt ? "Confirmed" : "Requested";
};
