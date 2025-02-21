import React, { useState } from "react";
import StoreTab from "./StoreTab";
import SystemTab from "./SystemTab";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

const AddStore = () => {
  const [activeTab, setActiveTab] = useState("store");

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-grow">
        <Sidebar />

        <div className="w-full bg-gray-100 p-6">
          <div className="text-2xl font-bold">Store</div>
          <div className="bg-white mt-5 shadow-md rounded-lg p-4">
            {/* Tabs Section */}
            <div className="flex border-b">
              <button
                onClick={() => setActiveTab("store")}
                className={`py-2 px-4 font-semibold focus:outline-none ${
                  activeTab === "store"
                    ? "border-b-2 border-blue-500 text-blue-500"
                    : "text-gray-500"
                }`}
              >
                Store
              </button>
              <button
                onClick={() => setActiveTab("system")}
                className={`py-2 px-4 font-semibold focus:outline-none ${
                  activeTab === "system"
                    ? "border-b-2 border-blue-500 text-blue-500"
                    : "text-gray-500"
                }`}
              >
                System
              </button>
            </div>

            {/* Tabs Content */}
            <div className="mt-6">
              {activeTab === "store" ? <StoreTab /> : <SystemTab />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStore;
