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
    <div className="bg-white w-[350px] h-[300px] mt-5  flex flex-col flex-grow ">
      <header className="flex justify-between p-4  rounded-lg">
        <h3 className="text-xl">Groups ({groups?.length})</h3>
        <h3 className="text-xl  font-bold">+</h3>
      </header>

      <div className="groups flex flex-col gap-2 overflow-y-auto rounded-lg">
        {groups && groups.length > 0 ? (
          groups.map((group) => (
            <div
              key={group.id}
              className="px-3 py-2 flex items-center justify-between hover:bg-indigo-100 rounded-lg"
            >
              {/* Left side: initial + group name */}
              <div className="flex items-center rounded-lg">
                <span className="bg-indigo-200 w-8 h-8 inline-flex items-center justify-center mr-4 rounded text-sm font-bold">
                  {group.name.charAt(0).toUpperCase()}
                </span>
                <span>{group.name}</span>
              </div>

              {/* Right side: user count */}
              <span className="bg-indigo-200 text-sm px-2 py-1 rounded-full">
                +{group.users.length}
              </span>
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
