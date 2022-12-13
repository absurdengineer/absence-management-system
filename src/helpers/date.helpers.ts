import { GetDate } from "../types/function.types";

export const getDate: GetDate = (date) => {
  return new Date(date).toDateString();
};
