import { AbsencesApiResponse, MembersApiResponse } from "./api-response.types";
import { AbsenceRecordStateUpdate, MemberAbsence } from "./resource.types";
import { GlobalState } from "./state.types";

// Type for getMembers()
export interface GetMembers {
  (): Promise<MembersApiResponse>;
}
// Type for getAbsences()
export interface GetAbsences {
  (
    page?: number,
    type?: string,
    date?: string,
    limit?: number
  ): Promise<AbsencesApiResponse>;
}
// Type for getDate()
export interface GetDate {
  (date: string): string;
}
// Type for reducer()
export interface Reducer {
  (state: GlobalState, action: { type: string; payload?: any }): GlobalState;
}
// Type for range()
export interface CustomRange {
  (start: number, end: number): number[];
}
// Type for getPages()
export interface GetPages {
  (currentPage: number, totalPages: number, maxNumberPages?: number): number[];
}
// Type for handlePageChange()
export interface HandlePageChange {
  (page: number): void;
}
export interface HandleFilter {
  (reset?: boolean, newState?: { type?: string; date?: string }): void;
}
// Type for generateRandomNumber()
export interface GenerateRandomNumber {
  (): number;
}
// Type for ApiProps
export interface ApiProps {
  (page: number, type: string, date: string, limit: number): void;
}
export interface GetMemberAbsence {
  (page: number, type: string, date: string, limit: number): Promise<{
    memberAbsences: MemberAbsence[];
    count: number;
    totalCount: number;
  }>;
}
