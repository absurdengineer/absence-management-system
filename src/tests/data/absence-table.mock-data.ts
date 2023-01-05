import { Absence, MemberMap } from "../../types/resource.types";

export const absences: Absence[] = [
  {
    id: 1,
    type: "vacation",
    startDate: "2020-01-01",
    endDate: "2020-01-10",
    memberNote: "Trip for refreshment",
    admitterNote: "Go ahead",
    confirmedAt: "2019-12-23",
    crewId: 1,
    userId: 1,
    createdAt: "2019-12-20",
    rejectedAt: null,
  },
];

export const memberMap: MemberMap = {
  1: {
    id: 1,
    name: "Dilshad",
    crewId: 1,
    userId: 1,
    image: "",
  },
};
