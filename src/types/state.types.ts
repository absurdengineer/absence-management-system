import { MemberAbsence } from "./resource.types";

export interface GlobalState {
  loading: boolean;
  absenses: {
    memberAbsences: MemberAbsence[];
    count: number;
    totalCount: number;
  };
}
