import { FiltersType } from "../types/component.types";

const Filters: FiltersType = ({ handleFilter }) => {
  return (
    <div className=" mt-4 grid gap-3 grid-cols-4">
      <div>
        <select className="w-full py-3 px-2 rounded border border-gray-300 text-gray-800 bg-white shadow-lg">
          <option value="">Absence type: All</option>
          <option value="1">Type 1</option>
          <option value="2">Type 2</option>
          <option value="3">Type 3</option>
        </select>
      </div>
      <div>
        <input
          type="date"
          className="w-full py-2 px-2 rounded border border-gray-300 text-gray-800 bg-white shadow-lg"
        />
      </div>
      <div className="col-span-2 text-right">
        <button
          onClick={handleFilter}
          className="bg-transparent hover:bg-orange-700 text-orange-500 font-semibold hover:text-white py-2 px-4 border border-orange-400 hover:border-transparent rounded"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default Filters;
