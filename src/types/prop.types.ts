import { HandlePageChange } from "./function.types";

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
  handleFilter: (reset?: boolean) => void;
  handleStateChange: (state: any) => void;
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
