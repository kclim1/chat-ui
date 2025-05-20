// src/components/UserIcon.jsx
import { useEffect, useState } from "react";
import axios from "axios";

const UserIcon = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        const response = await axios.get(import.meta.env.VITE_GET_CURRENT_USER); //assume you are user #5
        setUser(response.data);
      } catch (err) {
        setError(err.message);
        console.error("Error Fetching User:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) return <div>Loading user...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex flex-col flex-grow justify-center items-center gap-2 bg-slate-100">
      <img
        src={user?.profileImage || "https://i.pravatar.cc/150?u=default"}
        alt="User Profile"
        className="w-12 h-12 rounded-full object-cover"
      />
      <h3 className="font-semibold text-sm text-center">
        {user?.username.split(" ")[0]}
      </h3>
    </div>
  );
};

export default UserIcon;
