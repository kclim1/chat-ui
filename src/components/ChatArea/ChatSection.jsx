import useUserIdStore from "../../store/useUserIdStore";
import Messagebox from "./Messagebox";
import TextArea from "./TextArea";

const ChatSection = () => {
  const { friendProfile } = useUserIdStore();

  return (
    <div className="flex-grow flex flex-col">
      {/* Chat header */}
      <div className="chat-header h-[9%] rounded-t-lg px-4 py-2 flex items-center gap-4 border-b border-gray-400">
        {/* Profile Image */}
        <img
          src={friendProfile?.profileImage}
          alt="Profile"
          className="w-12 h-12 rounded-full object-cover"
        />

        {/* User Info */}
        <div className="flex flex-col justify-center">
          <p className="text-base font-semibold">{friendProfile?.username}</p>
          <p className="text-sm text-gray-500">{friendProfile?.position}</p>
        </div>
      </div>

      {/* Chat container */}

      <Messagebox />
      <TextArea />
    </div>
  );
};

export default ChatSection;
