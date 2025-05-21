import axios from "axios";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import useUserIdStore from "../../store/useUserIdStore";

const Userlist = () => {
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const { setSelectedUserId } = useUserIdStore();

  useEffect(() => {
    const fetchUserList = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(import.meta.env.VITE_GET_CHATLIST);
        setUserList(response.data);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching user list:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserList();
  }, []);

  const filteredUsers = userList.filter((user) =>
    user.username.toLowerCase().includes(searchValue.toLowerCase())
  );
  const handleSelectId = (id) => {
    console.log("id selected", id);
    setSelectedUserId(id);
  };

  if (isLoading) return <div>Loading user list...</div>;
  if (error) return <div>Error: {error}</div>;
  if (userList) console.log("userlist is here", userList);
  return (
    <div className="container  max-h-[400px] overflow-y-auto flex flex-col">
      <div className="flex items-center bg-gray-100 text-gray-600 px-3 py-2 rounded-lg w-full">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="text-gray-500 text-lg mr-2"
        />
        <input
          type="text"
          placeholder="Search Contact"
          className="bg-transparent outline-none text-gray-700 flex-grow"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2 py-2 min-h-[350px]">
        {filteredUsers && filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div
              onClick={() => handleSelectId(user.id)}
              key={user.id}
              className=" p-2 flex cursor-pointer hover:bg-slate-200 hover:rounded-lg"
            >
              <img
                src={user.profileImage}
                className="w-10 h-10 rounded-full object-cover mr-3"
              />
              <div>
                <p>{user.username}</p>
                <p>Last message</p>
                <p>time stamp</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No users found.</p>
        )}
      </div>
    </div>
  );
};

export default Userlist;
