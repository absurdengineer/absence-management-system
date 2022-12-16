import { screen, render } from "@testing-library/react";
import AbsenceRecords from "../components/AbsenceRecords";

describe("<AbsenceRecords />", () => {
  beforeEach(() => {
    render(<AbsenceRecords />);
  });
  it('should render "No filter records :"', () => {
    expect(screen.getByText(/No filter records :/)).toBeInTheDocument();
  });
  it("should render 0 as initial count", () => {
    expect(screen.getByText("0")).toBeInTheDocument();
  });
});
