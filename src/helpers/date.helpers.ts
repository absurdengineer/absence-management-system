import { GetDate } from "../types/function.types";

export const getDate: GetDate = (date) => {
  const localDate = new Date(date).toDateString();
  return localDate.substring(4, 10) + ", " + localDate.substring(11);
};
