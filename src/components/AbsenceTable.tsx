import { AbsenceTableType } from "../types/component.types";
import { getStatus } from "../helpers/basic.helpers";
import { getDate } from "../helpers/date.helpers";
import { GetStatus } from "../types/function.types";
import { Absence } from "../types/resource.types";

const tdClass = "text-sm text-gray-900 font-light px-6 py-4 ";
const thClass = "text-sm font-medium px-6 py-4 text-left ";
const headings = [
  "#",
  "Member Name",
  "Absence Type",
  "Period",
  "Member Note",
  "Status",
  "Admitter Note",
];

const getStatusClass: GetStatus = (rejectedAt, confirmedAt) => {
  return getStatus(rejectedAt, confirmedAt) === "Rejected"
    ? " bg-red-50"
    : getStatus(rejectedAt, confirmedAt) === "Confirmed"
    ? " bg-green-50"
    : " bg-blue-50";
};

const AbsenceTable: AbsenceTableType = ({ absences, memberMap }) => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="font-medium text-gray-900 bg-orange-300 border-t border-b border-orange-200">
                <tr>
                  {headings.map((heading, i) => (
                    <th key={i} scope="col" className={thClass}>
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {absences.map((absence: Absence) => (
                  <tr
                    key={absence.id}
                    className={
                      "border-b transition duration-300 ease-in-out hover:bg-orange-100" +
                      getStatusClass(absence.rejectedAt, absence.confirmedAt)
                    }
                  >
                    <td className={thClass + " whitespace-nowrap "}>
                      {absence.id}
                    </td>
                    <td className={tdClass + " whitespace-nowrap "}>
                      {memberMap[absence.userId]
                        ? memberMap[absence.userId].name
                        : "N/A"}
                    </td>
                    <td className={tdClass + " whitespace-nowrap "}>
                      {absence.type}
                    </td>
                    <td className={tdClass + " whitespace-nowrap "}>
                      <span className="font-bold">
                        {getDate(absence.startDate)}
                      </span>{" "}
                      to{" "}
                      <span className="font-bold">
                        {getDate(absence.endDate)}
                      </span>
                    </td>
                    <td className={tdClass}>{absence.memberNote}</td>
                    <td className={tdClass + " whitespace-nowrap "}>
                      {getStatus(absence.rejectedAt, absence.confirmedAt)}
                    </td>
                    <td className={tdClass}>{absence.admitterNote}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbsenceTable;
