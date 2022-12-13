// Schema of Member
export interface Member {
  id: number;
  crewId: number;
  image: string;
  name: string;
  userId: number;
}
// Schema of Absence
export interface Absence {
  admitterId: number | null;
  admitterNote: string;
  confirmedAt: string | null;
  createdAt: string;
  crewId: number;
  endDate: string;
  id: number;
  memberNote: string;
  rejectedAt: string | null;
  startDate: string;
  type: string;
  userId: number;
}
// Schema of MemberAbsence
export interface MemberAbsence {
  id: number;
  name: string;
  type: string;
  startDate: string;
  endDate: string;
  memberNote: string;
  admitterNote: string;
  confirmedAt: string | null;
  createdAt: string;
  rejectedAt: string | null;
}
