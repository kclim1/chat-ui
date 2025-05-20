import axios from "axios";
import { useState, useEffect } from "react";

const Userlist = () => {
  const [userList, setUserList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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

  if (isLoading) return <div>Loading user list...</div>;
  if (error) return <div>Error: {error}</div>;
  if (userList) console.log("userlist is here", userList);
  return (
    <div className="flex flex-col gap-2 py-2">
      {userList && userList.length > 0 ? (
        userList.map((user) => (
          <div key={user.id} className=" p-2 ">
            {user.username}
          </div>
        ))
      ) : (
        <p className="text-gray-500">No users found.</p>
      )}
    </div>
  );
};

export default Userlist;
