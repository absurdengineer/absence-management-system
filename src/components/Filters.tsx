import { absenceTypes } from "../constants/resource.constants";
import { FiltersType } from "../types/component.types";

const Filters: FiltersType = ({
  type,
  date,
  handleFilter,
  handleStateChange,
}) => {
  return (
    <div className=" mt-4 grid gap-3 grid-cols-4">
      <div>
        <select
          value={type}
          onChange={(e) => handleStateChange({ type: e.target.value })}
          className="w-full py-3 px-2 rounded border border-gray-300 text-gray-800 bg-white shadow-lg"
        >
          <option value="">Absence type: All</option>
          {absenceTypes.map((absenceType) => (
            <option key={absenceType} value={absenceType}>
              {absenceType}
            </option>
          ))}
        </select>
      </div>
      <div>
        <input
          type="date"
          value={date}
          onChange={(e) => handleStateChange({ date: e.target.value })}
          className="w-full py-2 px-2 rounded border border-gray-300 text-gray-800 bg-white shadow-lg"
        />
      </div>
      <div className="col-span-2 text-right">
        <button
          onClick={() => handleFilter(true)}
          disabled={type === "" && date === ""}
          className="mx-2 bg-orange-400 hover:bg-orange-500 text-white font-semibold hover:text-white py-2 px-4 border border-orange-400 hover:border-transparent rounded disabled:cursor-not-allowed disabled:hover:bg-orange-400"
        >
          Reset
        </button>
        <button
          onClick={() => (type === "" && date === "" ? {} : handleFilter())}
          className="mx-2 bg-transparent hover:bg-orange-400 text-orange-500 font-semibold hover:text-white py-2 px-4 border border-orange-400 hover:border-transparent rounded"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default Filters;
