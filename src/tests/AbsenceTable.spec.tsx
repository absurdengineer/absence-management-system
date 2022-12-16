import { render, screen } from "@testing-library/react";
import AbsenceTable from "../components/AbsenceTable";
import { getDate } from "../helpers/date.helpers";
import { memberAbsences } from "./data/absence-table.mock-data";

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
    render(<AbsenceTable memberAbsences={memberAbsences} />);
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
    for (let memberAbsence of memberAbsences) {
      expect(screen.getByText(memberAbsence.id)).toBeInTheDocument();
      expect(screen.getByText(memberAbsence.type)).toBeInTheDocument();
      expect(
        screen.getByText(getDate(memberAbsence.startDate))
      ).toBeInTheDocument();
      expect(
        screen.getByText(getDate(memberAbsence.endDate))
      ).toBeInTheDocument();
    }
  });
});
