import { FiltersProps } from "./prop.types";

export interface FiltersType {
  (props: FiltersProps): JSX.Element;
}
export interface AbsenceTableType {
  (): JSX.Element;
}
export interface PaginationType {
  (): JSX.Element;
}
export interface NoPropType {
  (): JSX.Element;
}
