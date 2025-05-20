import Searchbar from "./Searchbar";
import Userlist from "./Userlist";

const Chatlist = () => {
  return (
    <div className="list-container bg-red-300 w-[350px] h-[400px] flex flex-col justify-around p-4">
      <Searchbar />
      <Userlist />

      {/* import userlist here */}
      <div className="button-container bg-green-300 flex justify-around gap-4 py-4">
        <button className="bg-indigo-500 text-white text-lg px-4  w-[50%] h-[50px] rounded-lg flex-grow text-center">
          Meeting
        </button>
        <button className="bg-slate-200 text-black text-lg px-4  w-[50%] h-[50px] rounded-lg flex-grow text-center">
          Schedule
        </button>
      </div>
    </div>
  );
};

export default Chatlist;
