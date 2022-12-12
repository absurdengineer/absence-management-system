import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCode } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="sticky top-[100vh] py-5 text-center bg-orange-400 text-white">
      <FontAwesomeIcon icon={faCode} className="text-yellow-400" /> Designed
      &amp; Developed with &nbsp;
      <FontAwesomeIcon icon={faHeart} className="text-red-500" /> by Md. Dilshad
      Alam
    </div>
  );
};

export default Footer;