import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperclip,
  faLink,
  faPaperPlane,
  faFaceSmile,
  faImage,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import useUserIdStore from "../../store/useUserIdStore";
import useCurrentUserStore from "../../store/useCurrentUserStore";
import useDummyCounter from "../../store/useDummyCounter";

const TextArea = () => {
  const [message, setMessage] = useState("");
  const { selectedUserId } = useUserIdStore();
  const { currentUserProfile } = useCurrentUserStore();
  const { incrementCount } = useDummyCounter();

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const sendMessage = async () => {
    try {
      await axios.post("/api/chatSystem/chat/add", {
        fromUser: currentUserProfile?.id,
        toUser: selectedUserId,
        message: message.trim(),
      });
      incrementCount();
      setMessage(""); // Clear after sending
    } catch (err) {
      console.error("Failed to send message:", err);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full border-t border-gray-300 bg-white p-2 flex items-center gap-3"
    >
      <textarea
        className="flex-grow bg-white rounded-lg px-3 py-2 resize-none focus:outline-none"
        rows={1}
        placeholder="Type a message here..."
        onChange={handleChange}
        value={message}
      />

      <FontAwesomeIcon
        icon={faFaceSmile}
        className="text-gray-500 cursor-pointer"
      />
      <FontAwesomeIcon
        icon={faPaperclip}
        className="text-gray-500 cursor-pointer"
      />
      <FontAwesomeIcon
        icon={faImage}
        className="text-gray-500 cursor-pointer"
      />
      <FontAwesomeIcon icon={faLink} className="text-gray-500 cursor-pointer" />

      <div
        className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center cursor-pointer"
        onClick={sendMessage}
      >
        <FontAwesomeIcon icon={faPaperPlane} className="text-white" />
      </div>
    </form>
  );
};

export default TextArea;
