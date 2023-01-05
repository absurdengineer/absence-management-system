import { memberReducer } from "../helpers/basic.helpers";
import { MemberAndAbsenceApiResponse } from "../types/api-response.types";
import { GetMembersAndAbsences } from "../types/function.types";
import { MemberMap } from "../types/resource.types";
import { getAbsences } from "./absence.service";
import { getMembers } from "./member.service";

export const getMembersAndAbsences: GetMembersAndAbsences = async (
  page,
  type,
  date,
  limit
) => {
  const [members, absences] = await Promise.all<MemberAndAbsenceApiResponse>([
    getMembers(),
    getAbsences(page, type, date, limit),
  ]);
  const memberMap: MemberMap = members.payload.reduce(memberReducer, {});
  return {
    absences: absences.payload.absences,
    memberMap: memberMap,
    count: absences.payload.count,
    totalCount: absences.payload.totalCount,
  };
};
