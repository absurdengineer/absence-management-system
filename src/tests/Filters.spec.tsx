import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Filters from "../components/Filters";
import filterData from "./data/filters.mock-data";

describe("<Filters />", () => {
  beforeEach(() => {
    render(
      <Filters
        type={filterData.type}
        date={filterData.date}
        page={filterData.page}
        handleFilter={filterData.handleFilter}
      />
    );
  });
  it('should render "2 buttons"', () => {
    expect(screen.getAllByRole("button")).toHaveLength(2);
  });
  it('should render "Reset" & "Apply Filter" ', () => {
    expect(screen.getAllByRole("button")[0].innerHTML === "Reset").toBeTruthy();
    expect(
      screen.getAllByRole("button")[1].innerHTML === "Apply Filters"
    ).toBeTruthy();
  });
  it("should display the correct number of options", () => {
    expect(screen.getAllByRole("option").length).toBe(3);
  });
  it("should correctly set default option", () => {
    const defaultOption = screen.getByRole("option", {
      name: "Absence type: All",
    }) as HTMLOptionElement;
    expect(defaultOption.selected).toBeTruthy();
  });
  it("should allow user to change type", () => {
    userEvent.selectOptions(
      // Find the select element, like a real user would.
      screen.getByRole("combobox"),
      // Find and select the Ireland option, like a real user would.
      screen.getByRole("option", { name: "vacation" })
    );
    const option = screen.getByRole("option", {
      name: "vacation",
    }) as HTMLOptionElement;
    expect(option.selected).toBe(true);
  });
});
