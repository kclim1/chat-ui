import { useState, useEffect } from "react";
import axios from "axios";
import useUserIdStore from "../../store/useUserIdStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const FriendProfile = () => {
  const [friend, setFriend] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { selectedUserId } = useUserIdStore();

  useEffect(() => {
    const fetchFriend = async () => {
      if (!selectedUserId) return;
      setIsLoading(true);

      try {
        const res = await axios.get(
          `${import.meta.env.VITE_GET_USER_BY_ID}${selectedUserId}`
        );
        console.log("req sent");
        setFriend(res.data);
        console.log("response", res.data);
      } catch (err) {
        setError(err.message);
        console.error("Failed to fetch friend profile:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFriend();
  }, [selectedUserId]);

  if (error) return <p>{error}</p>;
  if (isLoading) return <p>Loading...</p>;
  return (
    <div className="profile-container flex flex-col items-center">
      <img className="w-full h-52 object-cover" src={friend?.profileImage} />
      <div className="bg-amber-300 flex flex-col justify-center items-center w-[80%] rounded-lg gap-2 z-50 -mt-8">
        <h2 className="text-xl font-bold">{friend?.username}</h2>
        <p className="text-sm text-gray-600">{friend?.position}</p>
        <span className="flex">
          <FontAwesomeIcon
            icon={faLocationDot}
            className="text-gray-500 mr-2"
          />
          <p className="text-sm text-gray-600">{friend?.address}</p>
        </span>
        <span className="flex items-center justify-center gap-3">
          <span className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center">
            <FontAwesomeIcon icon={faUserPlus} className="text-black" />
          </span>

          <span className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center bg-purple-500">
            <FontAwesomeIcon icon={faCommentDots} className="text-white" />
          </span>

          <span className="w-10 h-10 border border-gray-700 bg-red-400 rounded-full flex items-center justify-center">
            <FontAwesomeIcon icon={faVideo} className="text-white" />
          </span>
        </span>
      </div>
      <hr className="m-4 w-full text-gray-400" />
      <div className="user-info flex flex-col w-full gap-4">
        <div className="bg-green-200 w-full flex justify-between px-2">
          <span className="text-2xl">User Information</span>
          <span className="text-2xl">
            <FontAwesomeIcon icon={faCircleInfo} />
          </span>
        </div>
        <p className="text-gray-400 text-lg px-2"> Phone</p>
        <p className="text-lg text-gray-600 px-2">{friend?.phone}</p>
        <p className="text-gray-400 px-2 text-lg">Email</p>
        <p className="text-lg text-gray-600 px-2 ">{friend?.email}</p>
      </div>
      <hr className="m-4 w-full text-gray-400" />
      <div className="w-full flex flex-col ">
        <span className="flex justify-between bg-green-200 w-full px-2 my-3">
          <span className="text-xl">Group Participants</span>
          <span>Icon here</span>
        </span>
        <div className="group-participants bg-blue-300 flex  justify-between my-3 px-2">
          <span className="text-xl">Fetch group here</span>
          <span>Icon</span>
        </div>
      </div>
      <hr className="text-gray-400 w-full my-3" />
      <div className="media-container flex w-full justify-between px-2 my-1">
        <span className="text-lg">Media</span>
        <span>Icon</span>
      </div>
      <p>No media yet</p>
    </div>
  );
};

export default FriendProfile;
