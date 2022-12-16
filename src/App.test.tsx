import { render, screen } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
  it('should renders "Absence Management System"', () => {
    render(<App />);
    const headingElement = screen.getByText(/Absence Management System/);
    expect(headingElement).toBeInTheDocument();
  });
});
