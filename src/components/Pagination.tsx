import { PaginationType } from "../types/component.types";

const Pagination: PaginationType = () => {
  return (
    <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
      <div>
        <p className="text-sm text-gray-700">
          Showing
          <span className="font-medium"> 1 </span>
          to
          <span className="font-medium"> 1 </span>
          of
          <span className="font-medium"> 1 </span>
          records
        </p>
      </div>
      <div>
        <ul className="isolate inline-flex -space-x-px rounded-md shadow-sm">
          <li className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 cursor-pointer">
            First
          </li>
          <li className="relative inline-flex items-center border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 cursor-pointer">
            Prev
          </li>
          <li className="relative z-10 inline-flex items-center border border-orange-400 bg-orange-50 px-4 py-2 text-sm font-medium text-orange-600 focus:z-20 cursor-pointer">
            1
          </li>
          <li className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 cursor-pointer">
            Next
          </li>
          <li className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 cursor-pointer">
            Last
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
