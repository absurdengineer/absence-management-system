import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCode } from "@fortawesome/free-solid-svg-icons";
import { NoPropType } from "../types/component.types";

const Footer: NoPropType = () => {
  return (
    <div className="sticky top-[100vh] py-5 text-center bg-orange-400 text-white">
      <FontAwesomeIcon icon={faCode} className="text-yellow-400" /> Designed
      &amp; Developed with{" "}
      <FontAwesomeIcon icon={faHeart} className="text-red-500" /> by Md. Dilshad
      Alam
    </div>
  );
};

export default Footer;
