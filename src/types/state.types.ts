import { Absence, MemberMap } from "./resource.types";

export interface GlobalState {
  loading: boolean;
  resources: {
    absences: Absence[];
    memberMap: MemberMap;
    count: number;
    totalCount: number;
  };
}
