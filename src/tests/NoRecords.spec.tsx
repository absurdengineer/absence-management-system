import { screen, render } from "@testing-library/react";
import NoRecords from "../components/NoRecords";

describe("<NoRecords />", () => {
  beforeEach(() => {
    render(<NoRecords />);
  });
  it('should have an "alert"', () => {
    expect(screen.getByRole("alert")).toBeInTheDocument();
  });
  it("should render messages correctly", () => {
    expect(
      screen.getByText(/No record corresponds to the used filters./)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/There are no records in the database./)
    ).toBeInTheDocument();
  });
});
