import { GetPages } from "../types/function.types";
import { range } from "./basic.helpers";

export const getPages: GetPages = (
  currentPage,
  totalPages,
  maxNumberPages = 5
) => {
  if (currentPage > totalPages)
    return range(1, totalPages).slice(0, maxNumberPages);
  const middle = Math.ceil(maxNumberPages / 2);
  if (currentPage <= middle)
    return range(1, maxNumberPages).slice(0, totalPages);
  else if (currentPage > totalPages - middle)
    return range(totalPages - maxNumberPages + 1, totalPages);
  else {
    if (maxNumberPages % 2)
      return range(currentPage - middle + 1, currentPage + middle - 1);
    return range(currentPage - middle + 1, currentPage + middle);
  }
};
