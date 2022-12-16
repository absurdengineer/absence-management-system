import { NoPropType } from "../types/component.types";

const Loader: NoPropType = () => {
  return (
    <div
      title="loader"
      className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center w-full h-100 bg-black opacity-40 z-10"
    >
      <div className="flex justify-center items-center space-x-1 text-sm text-orange-500">
        <svg
          fill="none"
          className="w-12 h-12 animate-spin"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z"
            fill="currentColor"
            fillRule="evenodd"
          />
        </svg>
        <div className="text-2xl select-none">Loading ...</div>
      </div>
    </div>
  );
};

export default Loader;
