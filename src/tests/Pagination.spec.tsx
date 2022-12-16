import { screen, render } from "@testing-library/react";
import Pagination from "../components/Pagination";
import {
  currentPage,
  totalPages,
  totalRecords,
  maxPages,
  limit,
  handlePageChange,
} from "./data/pagination.mock-data";

describe("<Pagination />", () => {
  it('should have a "list"', () => {
    render(
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        limit={totalRecords}
        maxPages={maxPages}
        totalRecords={limit}
        handlePageChange={handlePageChange}
      />
    );
    expect(screen.getByRole("list")).toBeInTheDocument();
  });
  it('should render "Showing" for the records', () => {
    render(
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        limit={totalRecords}
        maxPages={maxPages}
        totalRecords={limit}
        handlePageChange={handlePageChange}
      />
    );
    expect(screen.getByText(/Showing/)).toBeInTheDocument();
  });
});
