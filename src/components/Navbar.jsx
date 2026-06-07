import { assets } from "../assets/assets";

function Navbar() {
  return (
    <div className="flex items-center justify-between py-4">
      <img
        src={assets.logo}
        alt="Logo"
        className="w-32 sm:w-44 cursor-pointer"
      />

      <button className="bg-black text-white px-8 py-2 rounded-full text-sm">
        Login
      </button>
    </div>
  );
}

export default Navbar;