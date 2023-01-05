import { render, screen } from "@testing-library/react";
import AbsenceTable from "../components/AbsenceTable";
import { getDate } from "../helpers/date.helpers";
import { absences, memberMap } from "./data/absence-table.mock-data";

const tableHeadings = [
  "#",
  "Member Name",
  "Absence Type",
  "Period",
  "Member Note",
  "Status",
  "Admitter Note",
];

describe("<AbsenceTable />", () => {
  beforeEach(() => {
    render(<AbsenceTable absences={absences} memberMap={memberMap} />);
  });
  it("should have a table", () => {
    expect(screen.getByRole("table")).toBeInTheDocument();
  });
  it('should render "Table Headings"', () => {
    for (let tableHeading of tableHeadings) {
      expect(screen.getByText(tableHeading)).toBeInTheDocument();
    }
  });
  it('should render "Table Records"', () => {
    for (let absence of absences) {
      expect(screen.getByText(absence.id)).toBeInTheDocument();
      expect(screen.getByText(absence.type)).toBeInTheDocument();
      expect(screen.getByText(getDate(absence.startDate))).toBeInTheDocument();
      expect(screen.getByText(getDate(absence.endDate))).toBeInTheDocument();
    }
  });
});
