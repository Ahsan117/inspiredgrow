// // const Sidebar = () => {
// //   return (
// //     <div
// //       style={{
// //         width: "200px",
// //         background: "#333",
// //         color: "white",
// //         height: "100vh",
// //       }}
// //     >
// //       <h3>Dashboard</h3>
// //       <ul>
// //         <li>Add User</li>
// //       </ul>
// //     </div>
// //   );
// // };

// // export default Sidebar;

// import { useState } from "react";
// import { Link } from "react-router-dom";
// // import { FaBars, FaTimes } from "react-icons/fa";

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="relative">
//       {/* Hamburger Menu for Mobile */}
//       <button
//         onClick={toggleSidebar}
//         className="lg:hidden absolute top-4 left-4 text-white text-2xl"
//       >
//         <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
//       </button>

//       <aside
//         className={`lg:w-64 bg-gray-800 text-white h-screen p-4 shadow-lg transition-all duration-300 ${
//           isOpen ? "block" : "hidden lg:block"
//         }`}
//       >
//         <h3 className="text-lg font-semibold mb-6">Dashboard Menu</h3>
//         <ul className="space-y-4">
//           <li>
//             <Link
//               to="/admin-dashboard"
//               className="block px-4 py-2 hover:bg-gray-700 rounded transition"
//             >
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/admin/add-user"
//               className="block px-4 py-2 hover:bg-gray-700 rounded transition"
//             >
//               Add User
//             </Link>
//           </li>
//         </ul>
//       </aside>
//     </div>
//   );
// };

// export default Sidebar;
// ===========================
import { useState } from "react";
import { FaBars, FaUsers, FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ setContent }) => {
  const navigate = useNavigate("/");
  const [isSidebarOpen, setSidebarOpen] = useState(true); // Sidebar visibility
  const [isUserDropdownOpen, setUserDropdownOpen] = useState(false); // Users dropdown visibility
  const [isStoreDropdownOpen, setStoreDropdownOpen] = useState(false); // Users dropdown visibility
  const [isPlacesDropdownOpen, setPlacesDropdownOpen] = useState(false); // Users dropdown visibility
  const [isMessageDropdownOpen, setMessageDropdownOpen] = useState(false); // Users dropdown visibility
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
        } bg-gray-900 text-white h-screen overflow-y-auto transition-all duration-300`}
      >
        {/* Sidebar Content */}
        {isSidebarOpen && (
          <div>
            {/* Sidebar Title */}
            <div className="p-4 text-xl font-bold border-b border-gray-700 flex justify-between cursor-pointer">
              <span onClick={() => navigate("/dashboard")}>Dashboard</span>
              {/* <FaTimes
                size={20}
                className="cursor-pointer hover:text-gray-400"
                onClick={() => setSidebarOpen(false)}
              /> */}
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
                      onClick={() => navigate("/dashboard/store/add")}
                    >
                      Add Store
                    </li>
                    <li
                      className="p-3 hover:bg-gray-700 cursor-pointer"
                      onClick={() => navigate("/dashboard/store/view")}
                    >
                      Store List
                    </li>
                  </ul>
                )}
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
              {/* <li
                className="p-4 hover:bg-gray-700 cursor-pointer"
                onClick={() => setContent("Sales")}
              >
                Sales
              </li> */}

              {/* <li
                className="p-4 hover:bg-gray-700 cursor-pointer"
                onClick={() => setContent("Contacts")}
              >
                Contacts
              </li> */}
              <li
                className="p-4 hover:bg-gray-700 cursor-pointer"
                onClick={() => setContent("Advance")}
              >
                Reports
              </li>
              <li
                className="p-4 hover:bg-gray-700 cursor-pointer"
                onClick={() => setContent("Coupons")}
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
