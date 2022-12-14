import { MemberAndAbsenceApiResponse } from "../types/api-response.types";
import { GetMemberAbsence } from "../types/function.types";
import { MemberAbsence } from "../types/resource.types";
import { getAbsences } from "./absence.service";
import { getMembers } from "./member.service";

export const getMemberAbsence: GetMemberAbsence = async (
  page,
  type,
  date,
  limit
) => {
  const [members, absences] = await Promise.all<MemberAndAbsenceApiResponse>([
    getMembers(),
    getAbsences(page, type, date, limit),
  ]);
  return {
    memberAbsences: absences.payload.absences.map((absence) => {
      const memberAbsence: MemberAbsence = { ...absence };
      const member = members.payload.find(
        (member) => member.userId === absence.userId
      );
      memberAbsence.name = member?.name;
      return memberAbsence;
    }),
    count: absences.payload.count,
    totalCount: absences.payload.totalCount,
  };
};
