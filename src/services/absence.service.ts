import absences from "../data/absences.json";
import { GetAbsences } from "../types/function.types";
import { Absence } from "../types/resource.types";

export const getAbsences: GetAbsences = (
  page = 1,
  type = null,
  date = null,
  limit = 50
) =>
  new Promise((resolve, reject) => {
    try {
      const offset: number = (page - 1) * limit;
      let data: Absence[] = [];
      // Type Filter
      if (type) data = absences.filter((absence) => absence.type === type);
      // Date Filter
      if (date)
        data = absences.filter((absence) => absence.createdAt.startsWith(date));
      // Paginated Data
      const finalData = data.slice(offset, offset + limit);
      // Resolving Promise after 3 second to simulate the API call.
      setTimeout(() => {
        resolve({
          message: "Success",
          payload: {
            absences: finalData,
            count: finalData.length,
            totalCount: absences.length,
          },
        });
      }, 3000);
    } catch (error) {
      // Rejecting Promise in case of failure
      reject({ message: "Failure", payload: [] });
      // However never happening in this case
    }
  });
