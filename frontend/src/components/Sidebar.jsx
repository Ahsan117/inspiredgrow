import { useState } from "react";
import { FaBars, FaUsers, FaStore, FaCog, FaAngleDown, FaAngleUp, FaRegComment, FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isUserDropdownOpen, setUserDropdownOpen] = useState(false);
  const [isStoreDropdownOpen, setStoreDropdownOpen] = useState(false);
  const [isPlacesDropdownOpen, setPlacesDropdownOpen] = useState(false);
  const [isMessageDropdownOpen, setMessageDropdownOpen] = useState(false);
  const [isReportsDropdownOpen, setReportsDropdownOpen] = useState(false);

  // Reports list
  const reportsList = [
    { name: "Profit & Loss Report", path: "/reports/profit-loss" },
    { name: "Sales & Payment Report", path: "/reports/sales-payment" },
    { name: "Customer Orders", path: "/reports/customer-orders" },
    { name: "GSTR-1 Report", path: "/reports/gstr-1" },
    { name: "GSTR-2 Report", path: "/reports/gstr-2" },
    { name: "Sales GST Report", path: "/reports/sales-gst" },
    { name: "Purchase GST Report", path: "/reports/purchase-gst" },
    { name: "Sales Tax Report", path: "/reports/sales-tax" },
    { name: "Purchase Tax Report", path: "/reports/purchase-tax" },
  ];

  return (
    
    <div
  className={`fixed left-0 top-16 bg-gray-900 text-white h-screen p-6 transition-all duration-300 ease-in-out ${
    isSidebarOpen ? "w-64" : "w-16"
  }`}
>

      {/* Hamburger for Mobile */}
    

      <div className="mb-4">
        <FaBars
          size={24}
          onClick={() => setSidebarOpen(!isSidebarOpen)}
          className="cursor-pointer hover:text-gray-400"
        />
      </div>


      {/* Sidebar Header */}
      {isSidebarOpen && (
  <div
    className="p-4 flex items-center space-x-2 cursor-pointer hover:bg-gray-700 transition-all duration-300 ease-in-out"
    onClick={() => navigate("/dashboard")}
  >
    <FaHome /> {/* Better Icon for Dashboard */}
    <span>Dashboard</span>
  </div>
)}



      

      {/* Sidebar Menu Items */}
      {isSidebarOpen && (
        <ul className="space-y-4">
          {/* Users Dropdown */}
          <li>
            <div
              className="p-4 flex justify-between items-center hover:bg-gray-700 cursor-pointer transition-all duration-300 ease-in-out"
              onClick={() => setUserDropdownOpen(!isUserDropdownOpen)}
            >
              <div className="flex items-center space-x-2">
                <FaUsers />
                <span>Users</span>
              </div>
              {isUserDropdownOpen ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {isUserDropdownOpen && (
              <ul className="ml-6 space-y-2 bg-gray-800 rounded-lg shadow-md">
                <li
                  className="p-3 cursor-pointer hover:bg-gray-700 transition duration-200"
                  onClick={() => navigate("/admin/user/list")}
                >
                  Users List
                </li>
                <li
                  className="p-3 cursor-pointer hover:bg-gray-700 transition duration-200"
                  onClick={() => navigate("/admin/role/list")}
                >
                  Roles List
                </li>
              </ul>
            )}
          </li>

          {/* Stores Dropdown */}
          <li>
            <div
              className="p-4 flex justify-between items-center hover:bg-gray-700 cursor-pointer transition-all duration-300 ease-in-out"
              onClick={() => setStoreDropdownOpen(!isStoreDropdownOpen)}
            >
              <div className="flex items-center space-x-2">
                <FaStore />
                <span>Stores</span>
              </div>
              {isStoreDropdownOpen ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {isStoreDropdownOpen && (
              <ul className="ml-6 space-y-2 bg-gray-800 rounded-lg shadow-md">
                <li
                  className="p-3 cursor-pointer hover:bg-gray-700 transition duration-200"
                  onClick={() => navigate("/store/add")}
                >
                  Add Store
                </li>
                <li
                  className="p-3 cursor-pointer hover:bg-gray-700 transition duration-200"
                  onClick={() => navigate("/store/view")}
                >
                  Store List
                </li>
              </ul>
            )}
          </li>

          {/* Reports Dropdown */}
          <li>
            <div
              className="p-4 flex justify-between items-center hover:bg-gray-700 cursor-pointer transition-all duration-300 ease-in-out"
              onClick={() => setReportsDropdownOpen(!isReportsDropdownOpen)}
            >
              <div className="flex items-center space-x-2">
                <FaRegComment />
                <span>Reports</span>
              </div>
              {isReportsDropdownOpen ? <FaAngleUp /> : <FaAngleDown />}
            </div>

            {isReportsDropdownOpen && (
              <ul className="ml-6 space-y-2 bg-gray-800 rounded-lg shadow-md max-h-60 overflow-y-auto">
                {reportsList.map((report, index) => (
                  <li
                    key={index}
                    className="p-3 cursor-pointer hover:bg-gray-700 transition duration-200"
                    onClick={() => navigate(report.path)}
                  >
                    {report.name}
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Messages Dropdown */}
          <li>
            <div
              className="p-4 flex justify-between items-center hover:bg-gray-700 cursor-pointer transition-all duration-300 ease-in-out"
              onClick={() => setMessageDropdownOpen(!isMessageDropdownOpen)}
            >
              <span>Messages</span>
              {isMessageDropdownOpen ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {isMessageDropdownOpen && (
              <ul className="ml-6 space-y-2 bg-gray-800 rounded-lg shadow-md">
                <li
                  className="p-3 cursor-pointer hover:bg-gray-700 transition duration-200"
                  onClick={() => navigate("/dashboard/user/message")}
                >
                  Send Message
                </li>
                <li
                  className="p-3 cursor-pointer hover:bg-gray-700 transition duration-200"
                  onClick={() => navigate("/dashboard/user/message-template")}
                >
                  Messaging Templates
                </li>
              </ul>
            )}
          </li>

          {/* Static Menu Items */}
          <li
            className="p-4 hover:bg-gray-700 cursor-pointer transition-all duration-300 ease-in-out"
            onClick={() => navigate("/settings")}
          >
            <div className="flex items-center space-x-2">
              <FaCog />
              <span>Settings</span>
            </div>
          </li>

          <li
            className="p-4 hover:bg-gray-700 cursor-pointer transition-all duration-300 ease-in-out"
            onClick={() => window.open("http://195.35.20.75/help/", "_blank")}
          >
            <div className="flex items-center space-x-2">
              <FaRegComment />
              <span>Help</span>
            </div>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
