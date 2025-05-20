const Header = () => {
  return (
    <header className="head ml-4 mt-3 w-[92vw] h-[5vh] bg-slate-100 flex justify-between">
      <h2 className="text-2xl font-semibold">Chat</h2>
      <h2 className="text-xl text-indigo-600 underline cursor-pointer hover:text-indigo-800">
        Add New Profile
      </h2>
    </header>
  );
};

export default Header;
