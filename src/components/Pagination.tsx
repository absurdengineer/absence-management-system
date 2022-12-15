import { getPages } from "../helpers/pagination.helpers";
import { PaginationType } from "../types/component.types";

const activePageClass =
  "border-orange-400 bg-orange-100 text-orange-600 cursor-not-allowed z-10";
const inactivePageClass =
  "border border-gray-300 bg-white text-gray-500 hover:bg-gray-100 focus:z-20";
const commonPageClass =
  " select-none relative inline-flex items-center border px-4 py-2 text-sm font-medium";

const Pagination: PaginationType = ({
  currentPage,
  totalPages,
  maxPages,
  totalRecords,
  limit,
  handlePageChange,
}) => {
  return (
    <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
      <div>
        <p className="text-sm text-gray-700">
          Showing
          <span className="font-medium">
            {(currentPage - 1) * limit + 1 < totalRecords
              ? ` ${(currentPage - 1) * limit + 1} `
              : ` ${totalRecords - (totalRecords % 10) + 1} `}
          </span>
          to
          <span className="font-medium">
            {currentPage * limit < totalRecords
              ? ` ${currentPage * limit} `
              : ` ${totalRecords} `}
          </span>
          of
          <span className="font-medium"> {totalRecords} </span>
          records
        </p>
      </div>
      <div>
        <ul className="isolate inline-flex -space-x-px rounded-md shadow-sm">
          <li
            className={
              (currentPage === 1 ? "cursor-not-allowed " : "cursor-pointer ") +
              "rounded-l " +
              inactivePageClass +
              commonPageClass
            }
            onClick={() => (currentPage === 1 ? {} : handlePageChange(1))}
            data-bs-toggle="tooltip"
            title="First"
          >
            &lt;&lt;
          </li>
          <li
            className={
              (currentPage === 1 ? "cursor-not-allowed " : "cursor-pointer ") +
              inactivePageClass +
              commonPageClass
            }
            onClick={() =>
              currentPage === 1 ? {} : handlePageChange(currentPage - 1)
            }
            data-bs-toggle="tooltip"
            title="Previous"
          >
            &lt;
          </li>
          {getPages(currentPage, totalPages, maxPages).map((page) => (
            <li
              key={page}
              className={
                (page === currentPage
                  ? activePageClass
                  : inactivePageClass + " cursor-pointer ") + commonPageClass
              }
              onClick={() => handlePageChange(page)}
            >
              {page}
            </li>
          ))}
          <li
            className={
              (currentPage === totalPages
                ? "cursor-not-allowed "
                : "cursor-pointer ") +
              inactivePageClass +
              commonPageClass
            }
            onClick={() =>
              currentPage === totalPages
                ? {}
                : handlePageChange(currentPage + 1)
            }
            data-bs-toggle="tooltip"
            title="Next"
          >
            &gt;
          </li>
          <li
            className={
              (currentPage === totalPages
                ? "cursor-not-allowed "
                : "cursor-pointer ") +
              "rounded-r " +
              inactivePageClass +
              commonPageClass
            }
            onClick={() =>
              currentPage === totalPages ? {} : handlePageChange(totalPages)
            }
            data-bs-toggle="tooltip"
            title="Last"
          >
            &gt;&gt;
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
