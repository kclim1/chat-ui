// src/components/Groups.jsx
import axios from "axios";
import { useState, useEffect } from "react";

const Groups = () => {
  const [groups, setGroups] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGroups = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(import.meta.env.VITE_GET_GROUPS);
        setGroups(response.data);
        console.log("length is", response.data.length);
        console.log("Fetched groups:", response.data);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching groups:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGroups();
  }, []);

  if (isLoading) return <div>Loading groups...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="bg-green-200 w-[350px] h-[250px] flex-grow flex flex-col">
      <header className="flex justify-between p-4 bg-indigo-300">
        <h3>Groups ({groups?.length})</h3>
        <h3 className="cursor-pointer font-bold">+</h3>
      </header>

      <div className="groups flex flex-col gap-2 p-4 overflow-y-auto">
        {groups && groups.length > 0 ? (
          groups.map((group) => (
            <div key={group.id} className=" px-3 py-2 ">
              {group.name}
            </div>
          ))
        ) : (
          <p className="text-gray-500">No groups available.</p>
        )}
      </div>
    </div>
  );
};

export default Groups;
