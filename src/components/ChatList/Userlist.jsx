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
        const response = await axios.get(import.meta.env.VITE_GET_USER_LIST);
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
  if (userList) console.log("this is userlist", userList);
};
export default Userlist;
