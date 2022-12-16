import { HandleFilter, HandlePageChange } from "./function.types";
import { MemberAbsence } from "./resource.types";

// Schema of App Layout Prop
export interface AppLayoutProps {
  children: React.ReactNode;
}
// Schema of App Children Prop
export interface ChildrenProps {
  children: React.ReactNode;
}
// Schema of App Filters Prop
export interface FiltersProps {
  type: string;
  date: string;
  page: number;
  handleFilter: HandleFilter;
}
// Schema of App Pagination Prop
export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalRecords: number;
  maxPages: number;
  limit: number;
  handlePageChange: HandlePageChange;
}
// Schema of App Absence Table Prop
export interface AbsenceTableProps {
  memberAbsences: MemberAbsence[];
}
// Schema of Api Props
export interface ApiProps {
  (page: number, type: string, date: string, limit: number): void;
}
