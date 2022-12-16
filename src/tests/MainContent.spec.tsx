import { render, screen } from "@testing-library/react";
import MainContent from "../components/MainContent";

describe("<MainContent />", () => {
  beforeEach(() => {
    render(<MainContent />);
  });
  it("should have a heading tag", () => {
    expect(screen.getByRole("heading", { level: 4 })).toBeInTheDocument();
  });
  it('should render "Absence Records"', () => {
    expect(screen.getByText(/Absence Records/)).toBeInTheDocument();
  });
});
