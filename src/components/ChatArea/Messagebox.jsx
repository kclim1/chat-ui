import { useEffect, useState } from "react";
import useUserIdStore from "../../store/useUserIdStore";
import useCurrentUserStore from "../../store/useCurrentUserStore";
import axios from "axios";
import useDummyCounter from "../../store/useDummyCounter";

const Messagebox = () => {
  const { selectedUserId, friendProfile } = useUserIdStore();
  const { currentUserProfile } = useCurrentUserStore();
  const currentUserId = 5;
  const [messages, setMessages] = useState([]);
  const { currentCount } = useDummyCounter();

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_GET_ALL_CHAT_ID}${selectedUserId}`
        );
        const messages = res.data;

        const convo = messages.filter(
          (msg) =>
            (msg.fromUser === currentUserId && msg.toUser === selectedUserId) ||
            (msg.fromUser === selectedUserId && msg.toUser === currentUserId)
        );

        setMessages(convo);
      } catch (err) {
        console.error("Error fetching messages", err);
      }
    };

    fetchMessages();
  }, [selectedUserId, friendProfile, currentUserProfile, currentCount]);

  return (
    <div className="flex-grow bg-white overflow-y-auto px-4 py-2 flex flex-col gap-2 max-h-[calc(100vh-200px)]">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`max-w-[70%] flex items-start gap-2 ${
            msg.fromUser === currentUserId
              ? "self-end flex-row-reverse"
              : "self-start"
          }`}
        >
          {/* Profile Image */}
          <img
            src={
              msg.fromUser === currentUserId
                ? currentUserProfile?.profileImage
                : friendProfile?.profileImage
            }
            alt="profile"
            className="w-8 h-8 rounded-full object-cover"
          />

          {/* Message Bubble */}
          <div
            className={`px-4 py-2 rounded-lg ${
              msg.fromUser === currentUserId
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            <p>{msg.message}</p>
            {msg.image && (
              <img
                src={msg.image}
                alt="attachment"
                className="mt-1 max-w-full rounded"
              />
            )}
            <p className="text-xs mt-1 text-gray-400 text-right">
              {new Date(msg.timestamp).toLocaleTimeString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Messagebox;
