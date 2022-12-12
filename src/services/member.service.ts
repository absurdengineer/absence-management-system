import members from "../data/members.json";
import { GetMembers } from "../types/function.types";

export const getMembers: GetMembers = () =>
  new Promise((resolve, reject) => {
    try {
      // Resolving Promise after 3 second to simulate the API call.
      setTimeout(() => {
        resolve({ message: "Success", payload: members });
      }, 3000);
    } catch (error) {
      // Rejecting Promise in case of failure
      reject({ message: "Failure", payload: [] });
      // However never happening in this case
    }
  });
