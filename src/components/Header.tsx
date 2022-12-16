import { NoPropType } from "../types/component.types";

const Header: NoPropType = () => {
  return (
    <div className="sticky top-0 text-center bg-orange-400 opacity-95">
      <h1 className="text-white text-3xl py-5">Absence Management System</h1>
    </div>
  );
};

export default Header;
