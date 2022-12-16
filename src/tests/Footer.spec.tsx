import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";

describe("<Footer />", () => {
  beforeEach(() => {
    render(<Footer />);
  });
  it("should have footer title", () => {
    expect(screen.getByTitle("footer")).toBeInTheDocument();
  });
  it('should render "Designed & Developed with by Md. Dilshad Alam"', () => {
    expect(
      screen.getByText(/Designed & Developed with by Md. Dilshad Alam/)
    ).toBeInTheDocument();
  });
});
