import AbsenceTable from "./AbsenceTable";
import Filters from "./Filters";
import NoRecords from "./NoRecords";
import Pagination from "./Pagination";

const AbsenceRecords = () => {
  return (
    <>
      <Filters />
      {true ? (
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
