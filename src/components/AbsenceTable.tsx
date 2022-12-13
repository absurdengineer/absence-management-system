const tdClass = "text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap";
const thClass = "text-sm font-medium px-6 py-4 text-left";
const headings = [
  "#",
  "Member Name",
  "Absence Type",
  "Period",
  "Member Note",
  "Status",
  "Admitter Note",
];

const AbsenceTable = () => {
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
                <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-orange-100">
                  <td className={thClass}>1</td>
                  <td className={tdClass}>Mark</td>
                  <td className={tdClass}>vacation</td>
                  <td className={tdClass}>2021-01-13 to 2021-01-13</td>
                  <td className={tdClass}>ganzer tag</td>
                  <td className={tdClass}>Rejected</td>
                  <td className={tdClass}>Sorry</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbsenceTable;
