import { AbsencesApiResponse, MembersApiResponse } from "./api-response.types";
import { GlobalState } from "./state.types";

// Type for getMembers()
export interface GetMembers {
  (): Promise<MembersApiResponse>;
}
// Type for getAbsences()
export interface GetAbsences {
  (
    page?: number,
    type?: string | null,
    date?: string | null,
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
