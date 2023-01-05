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
// Schema of AbsenceRecordState
export interface AbsenceRecordState {
  currentPage: number;
  type: string;
  date: string;
}
// Schema of Member Map
export interface MemberMap {
  [key: number]: Member;
}
