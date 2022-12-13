import { NoPropType } from "../types/component.types";
import AbsenceRecords from "./AbsenceRecords";

const MainContent: NoPropType = () => {
  return (
    <>
      <h4 className="text-3xl text-gray-700">Absence Records</h4>
      <AbsenceRecords />
    </>
  );
};

export default MainContent;
