import { MemberAbsence } from "./resource.types";

export interface GlobalState {
  loading: boolean;
  absenses: MemberAbsence[];
}
