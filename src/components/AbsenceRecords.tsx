import { useState } from "react";
import { useGlobalState } from "../hooks/useGlobalState";
import { NoPropType } from "../types/component.types";
import { HandlePageChange, HandleStateChange } from "../types/function.types";
import { AbsenceRecordState } from "../types/resource.types";
import AbsenceTable from "./AbsenceTable";
import Filters from "./Filters";
import NoRecords from "./NoRecords";
import Pagination from "./Pagination";

// Default Values
const limit: number = 10;
const maxPages: number = 5;
const initialState = {
  currentPage: 1,
  type: "",
  date: "",
};

const AbsenceRecords: NoPropType = () => {
  const [state, setState] = useState<AbsenceRecordState>(initialState);
  const [globalState, dispatch] = useGlobalState();
  // Filters Handler
  const handleFilter = (reset = false) => {
    if (reset) setState(initialState);
    // dispatch({ type: "ADD_ABSENCE" });
  };
  // Page Change Handler
  const handlePageChange: HandlePageChange = (page) => {
    setState({ ...state, currentPage: page });
  };
  // handle Change State
  const handleStateChange: HandleStateChange = (newState) => {
    setState({ ...state, ...newState });
  };

  return (
    <>
      <Filters
        type={state.type}
        date={state.date}
        handleFilter={handleFilter}
        handleStateChange={handleStateChange}
      />
      {globalState.absenses.length ? (
        <>
          <AbsenceTable />
          <Pagination
            currentPage={state.currentPage}
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
