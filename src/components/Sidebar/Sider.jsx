import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBuilding,
  faSpinner,
  faEnvelope,
  faFileInvoice,
  faCalendarAlt,
  faComments,
  faCog,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import UserIcon from "./UserIcon";

const Sider = () => {
  return (
    <nav className="w-[6vw] h-screen bg-amber-200 flex flex-col z-50">
      <div className="icons h-[85%] bg-indigo-400 flex flex-col items-center py-8 gap-13 ml-1 mt-1 rounded-r-4xl">
        <FontAwesomeIcon icon={faHome} className="text-3xl text-white" />
        <FontAwesomeIcon icon={faBuilding} className="text-3xl text-white" />
        <FontAwesomeIcon icon={faSpinner} className="text-3xl text-white" />
        <FontAwesomeIcon icon={faEnvelope} className="text-3xl text-white" />
        <FontAwesomeIcon icon={faFileInvoice} className="text-3xl text-white" />
        <FontAwesomeIcon icon={faCalendarAlt} className="text-3xl text-white" />
        <FontAwesomeIcon icon={faComments} className="text-3xl text-white" />
        <FontAwesomeIcon icon={faCog} className="text-3xl text-white" />
        <FontAwesomeIcon icon={faUser} className="text-3xl text-white" />
      </div>
      <UserIcon />
    </nav>
  );
};

export default Sider;
