// src/components/Navbar.jsx
import { useState } from "react";
import { FaBars } from "react-icons/fa"; // npm install react-icons
import { useNavigate } from "react-router-dom";

const Navbar = ({ isSidebarOpen, setSidebarOpen }) => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="navbar bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
      {/* Left side: hamburger + logo */}
      <div className="flex items-center space-x-4">
        {/* Hamburger icon (mobile only) */}
        <button
          className="mobile-menu-button block lg:hidden"
          onClick={() => setSidebarOpen(!isSidebarOpen)}
        >
          <FaBars size={20} />
        </button>
        <h2 className="text-xl font-semibold">Admin Panel</h2>
      </div>

      {/* Right side: profile dropdown */}
      <div className="relative">
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <img
            src="/userlogoprof.png" // Make sure this is in public/ or adjust path
            alt="Profile"
            className="w-10 h-10 rounded-full border-2 border-gray-300 cursor-pointer hover:opacity-80"
          />
          <span className="mt-2 text-sm text-white">Profile</span>
        </div>

        {showDropdown && (
          <div className="absolute right-0 mt-2 w-32 bg-white text-black shadow-lg rounded-md">
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 text-center font-bold bg-red-500 text-white rounded-b-lg hover:bg-red-600 transition-all"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
