import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import Login from "./Login";

function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="flex items-center justify-between py-4">
        <img
          src={assets.logo}
          alt="Logo"
          className="w-32 sm:w-44"
        />

        <div className="flex gap-3">
          <button
            onClick={() => navigate("/buy")}
            className="border px-6 py-2 rounded-full text-sm"
          >
            Buy Credits
          </button>

          <button
            onClick={() => setShowLogin(true)}
            className="bg-black text-white px-8 py-2 rounded-full text-sm"
          >
            Login
          </button>
        </div>
      </div>

      <Login
        isOpen={showLogin}
        onClose={() => setShowLogin(false)}
      />
    </>
  );
}

export default Navbar;