import { AbsencesApiResponse, MembersApiResponse } from "./api-response.types";

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
