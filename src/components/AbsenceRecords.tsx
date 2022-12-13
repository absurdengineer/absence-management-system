import { useGlobalState } from "../hooks/useGlobalState";
import { NoPropType } from "../types/component.types";
import AbsenceTable from "./AbsenceTable";
import Filters from "./Filters";
import NoRecords from "./NoRecords";
import Pagination from "./Pagination";

const AbsenceRecords: NoPropType = () => {
  const [globalState, dispatch] = useGlobalState();
  const handleFilter = () => {
    dispatch({ type: "ADD_ABSENCE" });
  };
  return (
    <>
      <Filters handleFilter={handleFilter} />
      {globalState.absenses.length ? (
        <>
          <AbsenceTable />
          <Pagination />
        </>
      ) : (
        <NoRecords />
      )}
    </>
  );
};

export default AbsenceRecords;
