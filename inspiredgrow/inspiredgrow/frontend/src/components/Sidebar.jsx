import { useState } from "react";
import { FaBars, FaUsers, FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ setContent }) => {
  const navigate = useNavigate(); // Correct usage of useNavigate
  const [isSidebarOpen, setSidebarOpen] = useState(true); // Sidebar visibility
  const [isUserDropdownOpen, setUserDropdownOpen] = useState(false); // Users dropdown visibility
  const [isStoreDropdownOpen, setStoreDropdownOpen] = useState(false); // Store dropdown visibility
  const [isPlacesDropdownOpen, setPlacesDropdownOpen] = useState(false); // Places dropdown visibility
  const [isMessageDropdownOpen, setMessageDropdownOpen] = useState(false); // Message dropdown visibility

  const handleHelpClick = (event) => {
    event.preventDefault(); // Prevent default link behavior
    window.open("http://195.35.20.75/help/", "_blank", "noopener noreferrer");
  };

  return (
    <div className="flex">
      {/* Hamburger Menu */}
      <div className="p-4 bg-gray-900 text-white cursor-pointer">
        <FaBars
          size={24}
          onClick={() => setSidebarOpen(!isSidebarOpen)}
          className="hover:text-gray-400"
        />
      </div>

      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "w-64" : "w-0"
        } bg-gray-900 text-white h-full overflow-y-auto transition-all duration-300`}
      >
        {/* Sidebar Content */}
        {isSidebarOpen && (
          <div>
            {/* Sidebar Title */}
            <div className="p-4 text-xl font-bold border-b border-gray-700 flex justify-between cursor-pointer">
              <span onClick={() => navigate("/dashboard")}>Dashboard</span>
            </div>

            {/* Sidebar Menu */}
            <ul>
              {/* Users Dropdown */}
              <li>
                <div
                  className="p-4 flex justify-between items-center hover:bg-gray-700 cursor-pointer"
                  onClick={() => setUserDropdownOpen(!isUserDropdownOpen)}
                >
                  <div className="flex items-center space-x-2">
                    <FaUsers />
                    <span>Users</span>
                  </div>
                  {isUserDropdownOpen ? <FaAngleUp /> : <FaAngleDown />}
                </div>
                {isUserDropdownOpen && (
                  <ul className="ml-8 bg-gray-800">
                    <li
                      className="p-3 hover:bg-gray-700 cursor-pointer"
                      onClick={() => navigate("/admin/user/list")}
                    >
                      Users List
                    </li>
                    <li
                      className="p-3 hover:bg-gray-700 cursor-pointer"
                      onClick={() => navigate("/admin/role/list")}
                    >
                      Roles List
                    </li>
                  </ul>
                )}
              </li>

              {/* Store Dropdown */}
              <li>
                <div
                  className="p-4 flex justify-between items-center hover:bg-gray-700 cursor-pointer"
                  onClick={() => setStoreDropdownOpen(!isStoreDropdownOpen)}
                >
                  <div className="flex items-center space-x-2">
                    <FaUsers />
                    <span>Stores</span>
                  </div>
                  {isStoreDropdownOpen ? <FaAngleUp /> : <FaAngleDown />}
                </div>
                {isStoreDropdownOpen && (
                  <ul className="ml-8 bg-gray-800">
                    <li
                      className="p-3 hover:bg-gray-700 cursor-pointer"
                      onClick={() => navigate("/store/add")}
                    >
                      Add Store
                    </li>
                    <li
                      className="p-3 hover:bg-gray-700 cursor-pointer"
                      onClick={() => navigate("/store/view")}
                    >
                      Store List
                    </li>
                  </ul>
                )}
              </li>

              {/* Places Dropdown */}
              <li>
                <div
                  className="p-4 flex justify-between items-center hover:bg-gray-700 cursor-pointer"
                  onClick={() => setPlacesDropdownOpen(!isPlacesDropdownOpen)}
                >
                  <div className="flex items-center space-x-2">
                    <FaUsers />
                    <span>Places</span>
                  </div>
                  {isPlacesDropdownOpen ? <FaAngleUp /> : <FaAngleDown />}
                </div>
                {isPlacesDropdownOpen && (
                  <ul className="ml-8 bg-gray-800">
                    <li
                      className="p-3 hover:bg-gray-700 cursor-pointer"
                      onClick={() => navigate("/dashboard/Country")}
                    >
                      Countries List
                    </li>
                    <li
                      className="p-3 hover:bg-gray-700 cursor-pointer"
                      onClick={() => navigate("/dashboard/State")}
                    >
                      State List
                    </li>
                  </ul>
                )}
              </li>

              {/* Message Dropdown */}
              <li>
                <div
                  className="p-4 flex justify-between items-center hover:bg-gray-700 cursor-pointer"
                  onClick={() => setMessageDropdownOpen(!isMessageDropdownOpen)}
                >
                  <div className="flex items-center space-x-2">
                    <FaUsers />
                    <span>Message</span>
                  </div>
                  {isMessageDropdownOpen ? <FaAngleUp /> : <FaAngleDown />}
                </div>
                {isMessageDropdownOpen && (
                  <ul className="ml-8 bg-gray-800">
                    <li
                      className="p-3 hover:bg-gray-700 cursor-pointer"
                      onClick={() => navigate("/dashboard/user/message")}
                    >
                      Send Message
                    </li>
                    <li
                      className="p-3 hover:bg-gray-700 cursor-pointer"
                      onClick={() =>
                        navigate("/dashboard/user/message-template")
                      }
                    >
                      Messaging Templates
                    </li>
                  </ul>
                )}
              </li>

              {/* Static Menu Items */}
              <li
                className="p-4 hover:bg-gray-700 cursor-pointer"
                onClick={() => setContent("Reports")}
              >
                Reports
              </li>
              <li
                className="p-4 hover:bg-gray-700 cursor-pointer"
                onClick={() => setContent("Setting")}
              >
                Setting
              </li>
              <li
                className="p-4 hover:bg-gray-700 cursor-pointer"
                onClick={handleHelpClick}
              >
                Help
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;

// =====================
