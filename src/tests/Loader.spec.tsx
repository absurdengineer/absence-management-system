import { screen, render } from "@testing-library/react";
import Loader from "../components/Loader";

describe("<Loader />", () => {
  beforeEach(() => {
    render(<Loader />);
  });
  it('should have "loader" title', () => {
    expect(screen.getByTitle("loader")).toBeInTheDocument();
  });
  it('should render "Loading ..." title', () => {
    expect(screen.getByText(/Loading .../)).toBeInTheDocument();
  });
});
