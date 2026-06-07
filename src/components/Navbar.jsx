import { useState } from "react";
import { assets } from "../assets/assets";
import Login from "./Login";

function Navbar() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between py-4">
        <img
          src={assets.logo}
          alt="Logo"
          className="w-32 sm:w-44 cursor-pointer"
        />

        <button
          onClick={() => setShowLogin(true)}
          className="bg-black text-white px-8 py-2 rounded-full text-sm"
        >
          Login
        </button>
      </div>

      <Login
        isOpen={showLogin}
        onClose={() => setShowLogin(false)}
      />
    </>
  );
}

export default Navbar;