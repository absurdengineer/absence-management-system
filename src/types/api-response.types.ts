import { Absence, Member } from "./resource.types";

// Schema of Get Members API (Success)
export interface MembersApiResponse {
  message: string;
  payload: Member[];
}
// Schema of Get Absences API (Success)
export interface AbsencesApiResponse {
  message: string;
  payload: {
    absences: Absence[];
    count: number;
    totalCount: number;
  };
}
// Schema of Get Members and Absences API (Success)
export type MemberAndAbsenceApiResponse = [
  Promise<MembersApiResponse>,
  Promise<AbsencesApiResponse>
];
