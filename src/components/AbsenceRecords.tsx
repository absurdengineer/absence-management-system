import { useState } from "react";
import { useGlobalState } from "../hooks/useGlobalState";
import { NoPropType } from "../types/component.types";
import { HandlePageChange } from "../types/function.types";
import AbsenceTable from "./AbsenceTable";
import Filters from "./Filters";
import NoRecords from "./NoRecords";
import Pagination from "./Pagination";

// Default Values
const limit: number = 10;
const maxPages: number = 5;

const AbsenceRecords: NoPropType = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [globalState, dispatch] = useGlobalState();
  // Filters Handler
  const handleFilter = () => {
    dispatch({ type: "ADD_ABSENCE" });
  };
  // Page Change Handler
  const handlePageChange: HandlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Filters handleFilter={handleFilter} />
      {globalState.absenses.length ? (
        <>
          <AbsenceTable />
          <Pagination
            currentPage={currentPage}
            totalPages={6}
            maxPages={maxPages}
            totalRecords={56}
            limit={limit}
            handlePageChange={handlePageChange}
          />
        </>
      ) : (
        <NoRecords />
      )}
    </>
  );
};

export default AbsenceRecords;
