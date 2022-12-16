import { useCallback, useEffect, useState } from "react";
import { LOADING, SET_MEMBER_ABSENCE } from "../constants/action.constants";
import { useGlobalState } from "../hooks/useGlobalState";
import { getMemberAbsence } from "../services/member-absence.service";
import { NoPropType } from "../types/component.types";
import {
  HandlePageChange,
  HandleFilter,
  GetMaxPages,
} from "../types/function.types";
import { ApiProps } from "../types/prop.types";
import { AbsenceRecordState } from "../types/resource.types";
import AbsenceTable from "./AbsenceTable";
import Filters from "./Filters";
import NoRecords from "./NoRecords";
import Pagination from "./Pagination";

// Default Values
const limit: number = 10;
const maxPages: number = 5;
const maxPagesMobile: number = 3;
const initialState = {
  currentPage: 1,
  type: "",
  date: "",
};

const AbsenceRecords: NoPropType = () => {
  const [state, setState] = useState<AbsenceRecordState>(initialState);
  const [globalState, dispatch] = useGlobalState();
  // Filters Handler
  const handleFilter: HandleFilter = (reset = false, newState = {}) => {
    if (reset) setState(initialState);
    else setState({ ...state, ...newState, currentPage: 1 });
  };
  // Page Change Handler
  const handlePageChange: HandlePageChange = (page) => {
    setState({ ...state, currentPage: page });
  };
  // Max Page Size
  const getMaxPages: GetMaxPages = () => {
    return window.innerWidth > 400 ? maxPages : maxPagesMobile;
  };
  // handle Fetch MemberAbsence
  const handleFetchMemberAbsence: ApiProps = useCallback(
    async (page, type, date, limit) => {
      dispatch({
        type: LOADING,
        payload: true,
      });
      const data = await getMemberAbsence(page, type, date, limit);
      dispatch({
        type: SET_MEMBER_ABSENCE,
        payload: data,
      });
      dispatch({
        type: LOADING,
        payload: false,
      });
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
    [dispatch]
  );

  useEffect(() => {
    handleFetchMemberAbsence(state.currentPage, state.type, state.date, limit);
  }, [state.currentPage, state.type, state.date, handleFetchMemberAbsence]);

  return (
    <>
      <Filters
        type={state.type}
        date={state.date}
        page={state.currentPage}
        handleFilter={handleFilter}
      />
      <div className="text-right my-4">
        <p className="text-sm text-gray-700">
          No filter records :{" "}
          <span className="font-bold">{globalState.absenses.totalCount}</span>
        </p>
      </div>
      {globalState.absenses.memberAbsences.length ? (
        <>
          <AbsenceTable memberAbsences={globalState.absenses.memberAbsences} />
          <Pagination
            currentPage={state.currentPage}
            totalPages={Math.ceil(globalState.absenses.count / limit)}
            maxPages={getMaxPages()}
            totalRecords={globalState.absenses.count}
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
