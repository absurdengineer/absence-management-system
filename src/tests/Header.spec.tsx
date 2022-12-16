import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

describe("<Header />", () => {
  beforeEach(() => {
    render(<Header />);
  });
  it("should have a heading tag", () => {
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });
  it('should render "Absence Management System"', () => {
    expect(screen.getByText(/Absence Management System/)).toBeInTheDocument();
  });
});
