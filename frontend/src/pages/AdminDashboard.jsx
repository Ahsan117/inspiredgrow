// src/pages/AdminDashboard.jsx
import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function AdminDashboard() {
  // Control sidebar state here (false means hidden by default on mobile)
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={`relative min-h-screen ${isSidebarOpen ? "sidebar-open" : ""}`}>
      {/* Navbar receives the state & setter */}
      <Navbar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Sidebar just needs to know if it’s open */}
      <Sidebar isSidebarOpen={isSidebarOpen} />

      {/* Main Content */}
      <div className="pt-20 p-6">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
        {/* Your main dashboard content goes here */}
      </div>
    </div>
  );
}

export default AdminDashboard;
