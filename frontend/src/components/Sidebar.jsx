import { useState, useEffect } from "react";
import {
  FaUsers,
  FaStore,
  FaCog,
  FaAngleDown,
  FaAngleUp,
  FaRegComment,
  FaHome,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ isSidebarOpen }) => {
  const navigate = useNavigate();
  const [isUserDropdownOpen, setUserDropdownOpen] = useState(false);
  const [isStoreDropdownOpen, setStoreDropdownOpen] = useState(false);
  const [isMessageDropdownOpen, setMessageDropdownOpen] = useState(false);
  const [isReportsDropdownOpen, setReportsDropdownOpen] = useState(false);
  const [permissions, setPermissions] = useState([]);

  useEffect(() => {
    const storedPermissions = localStorage.getItem("permissions");
    if (storedPermissions) {
      try {
        setPermissions(JSON.parse(storedPermissions));
      } catch (error) {
        console.error("Error parsing permissions:", error);
        setPermissions([]); // Default empty permissions
      }
    } else {
      setPermissions([]); // Ensure it's always an array
    }
  }, []);
  

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

  if (!isSidebarOpen) return null; // Hide sidebar if closed

  return (
    <div
      className={`bg-gray-900 text-white h-screen p-6 w-64 transition-all duration-300 ease-in-out 
      ${isSidebarOpen ? "fixed top-16 left-0 overflow-y-auto" : "absolute -left-64"} 
      md:relative md:top-0 md:overflow-hidden`}
    >
      {/* Sidebar Header */}
      <div
        className="p-4 flex items-center space-x-2 cursor-pointer hover:bg-gray-700"
        onClick={() => navigate("/dashboard")}
      >
        <FaHome />
        <span>Dashboard</span>
      </div>

      {/* Sidebar Menu Items */}
      <ul className="space-y-4">
        {/* Users Dropdown */}
        {permissions.includes("manageUsers") && (
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
              <ul className="ml-6 space-y-2 bg-gray-800 rounded-lg shadow-md">
                <li
                  className="p-3 cursor-pointer hover:bg-gray-700"
                  onClick={() => navigate("/admin/user/list")}
                >
                  Users List
                </li>
                <li
                  className="p-3 cursor-pointer hover:bg-gray-700"
                  onClick={() => navigate("/admin/role/list")}
                >
                  Roles List
                </li>
              </ul>
            )}
          </li>
        )}

        {/* Stores Dropdown */}
        {permissions.includes("viewStores") && (
          <li>
            <div
              className="p-4 flex justify-between items-center hover:bg-gray-700 cursor-pointer"
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
                  className="p-3 cursor-pointer hover:bg-gray-700"
                  onClick={() => navigate("/store/add")}
                >
                  Add Store
                </li>
                <li
                  className="p-3 cursor-pointer hover:bg-gray-700"
                  onClick={() => navigate("/store/view")}
                >
                  Store List
                </li>
              </ul>
            )}
          </li>
        )}

        {/* Reports Dropdown */}
        {permissions.includes("viewReports") && (
          <li>
            <div
              className="p-4 flex justify-between items-center hover:bg-gray-700 cursor-pointer"
              onClick={() => setReportsDropdownOpen(!isReportsDropdownOpen)}
            >
              <div className="flex items-center space-x-2">
                <FaRegComment />
                <span>Reports</span>
              </div>
              {isReportsDropdownOpen ? <FaAngleUp /> : <FaAngleDown />}
            </div>

            {isReportsDropdownOpen && (
              <ul
                className="ml-6 space-y-2 bg-gray-800 rounded-lg shadow-md 
                md:max-h-none md:overflow-visible  
                max-h-60 overflow-y-auto"
              >
                {reportsList.map((report, index) => (
                  <li
                    key={index}
                    className="p-3 cursor-pointer hover:bg-gray-700"
                    onClick={() => navigate(report.path)}
                  >
                    {report.name}
                  </li>
                ))}
              </ul>
            )}
          </li>
        )}

        {/* Messages Dropdown */}
        {permissions.includes("sendMessages") && (
          <li>
            <div
              className="p-4 flex justify-between items-center hover:bg-gray-700 cursor-pointer"
              onClick={() => setMessageDropdownOpen(!isMessageDropdownOpen)}
            >
              <span>Messages</span>
              {isMessageDropdownOpen ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {isMessageDropdownOpen && (
              <ul className="ml-6 space-y-2 bg-gray-800 rounded-lg shadow-md">
                <li
                  className="p-3 cursor-pointer hover:bg-gray-700"
                  onClick={() => navigate("/dashboard/user/message")}
                >
                  Send Message
                </li>
                <li
                  className="p-3 cursor-pointer hover:bg-gray-700"
                  onClick={() => navigate("/dashboard/user/message-template")}
                >
                  Messaging Templates
                </li>
              </ul>
            )}
          </li>
        )}

        {/* Static Menu Items */}
        <li
          className="p-4 hover:bg-gray-700 cursor-pointer"
          onClick={() => navigate("/settings")}
        >
          <div className="flex items-center space-x-2">
            <FaCog />
            <span>Settings</span>
          </div>
        </li>

        <li
          className="p-4 hover:bg-gray-700 cursor-pointer"
          onClick={() => window.open("http://195.35.20.75/help/", "_blank")}
        >
          <div className="flex items-center space-x-2">
            <FaRegComment />
            <span>Help</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
