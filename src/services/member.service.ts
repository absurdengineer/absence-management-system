import members from "../data/members.json";
import { generateRandomNumber } from "../helpers/basic.helpers";
import { GetMembers } from "../types/function.types";

export const getMembers: GetMembers = () =>
  new Promise((resolve, reject) => {
    try {
      // Resolving Promise after 3 second to simulate the API call.
      setTimeout(() => {
        resolve({ message: "Success", payload: members });
      }, generateRandomNumber());
    } catch (error) {
      // Rejecting Promise in case of failure
      reject({ message: "Failure", payload: [] });
      // However never happening in this case
    }
  });
