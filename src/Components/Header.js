
const Header = () => {
  return (
    <header className="flex items-center justify-between px-10 py-4 bg-[#111] text-white shadow-md">
      <div className="flex items-center gap-2">
        <img
          className="w-20 h-auto"
          src="https://png.pngtree.com/png-vector/20250217/ourmid/pngtree-unique-food-logo-png-image_15488394.png"
          alt="Food Logo"
        />
       </div>
       <nav className="flex justify-evenly border-[2px] border-gray-400 px-10 py-2 rounded-[20px] w-[400px]">
        <h1 className="cursor-pointer hover:text-yellow-400">Home</h1>
        <h1 className="cursor-pointer hover:text-yellow-400">About</h1>
        <h1 className="cursor-pointer hover:text-yellow-400">Contact</h1>
      </nav>
    </header>
  );
};

export default Header;
