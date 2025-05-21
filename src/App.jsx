import Sider from "./components/Sidebar/Sider";
import Header from "./components/Header/Header";
import Chatlist from "./components/ChatList/Chatlist";
import Groups from "./components/Groups/Groups";
import FriendProfile from "./components/FriendProfile/FriendProfile";
import ChatArea from "./components/ChatArea/ChatSection";
import ChatSection from "./components/ChatArea/ChatSection";

function App() {
  return (
    <main className="h-screen w-screen flex bg-slate-100">
      {/* Left Sider */}
      <Sider />

      {/* Right side of the app (everything else) */}
      <div className="flex flex-col flex-grow">
        {/* Header at the top */}
        <Header />

        {/* Below the header: content area */}
        <section className="flex mt-1 flex-grow mx-5 mb-8">
          {/* Left panel: Chatlist + Groups stacked vertically */}
          <div className="w-[350px] flex flex-col">
            <Chatlist />
            <Groups />
          </div>

          {/* Main chat area can go here in the future */}
          <div className="flex flex-grow bg-white ml-4 ">
            {/* Chat area (left side) */}
            <ChatSection />

            {/* User profile (right side) */}
            <div className="w-[30%] bg-white border-l border-gray-300 shawdow-lg">
              <FriendProfile />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
