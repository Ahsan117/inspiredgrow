import React from "react";
import ItemSection from "../components/ItemSection";
import AccountsSection from "../components/AccountsSection";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <ItemSection />
        <AccountsSection />
      </div>
    </div>
  );
};

export default Dashboard;
