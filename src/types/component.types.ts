import { FiltersProps, PaginationProps, AbsenceTableProps } from "./prop.types";

export interface FiltersType {
  (props: FiltersProps): JSX.Element;
}
export interface AbsenceTableType {
  (props: AbsenceTableProps): JSX.Element;
}
export interface PaginationType {
  (props: PaginationProps): JSX.Element;
}
export interface NoPropType {
  (): JSX.Element;
}
