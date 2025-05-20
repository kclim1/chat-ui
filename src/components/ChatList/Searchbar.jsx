import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Searchbar = () => {
  return (
    <div className="flex items-center bg-gray-100 text-gray-600 px-3 py-2 rounded-lg w-full">
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="text-gray-500 text-lg mr-2"
      />
      <input
        type="text"
        placeholder="Search Contact"
        className="bg-transparent outline-none text-gray-700 flex-grow"
      />
    </div>
  );
};

export default Searchbar;
