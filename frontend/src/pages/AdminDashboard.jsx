// src/pages/AdminDashboard.jsx
import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function AdminDashboard() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative min-h-screen">
      {/* Navbar */}
      <Navbar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Sidebar */}
      <Sidebar isSidebarOpen={isSidebarOpen} />

      {/* Main Content (Now Scrollable) */}
      <div className="h-screen overflow-y-auto overflow-x-auto pt-20 p-4 md:p-6">

        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
        {/* Your main content (like user list) goes here */}
      </div>
    </div>
  );
}


export default AdminDashboard;
