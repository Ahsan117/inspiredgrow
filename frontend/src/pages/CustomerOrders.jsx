import React, { useState } from "react";

const CustomerOrders = () => {
  const [customerName, setCustomerName] = useState("");
  const [tillDate, setTillDate] = useState("");

  // Example order data for the table
  const orderData = {
    records: [
      {
        customerName: "John Doe",
        lastOrderDate: "2025-02-21",
        orderId: "ORD123",
        lastOrderInDays: 5,
      },
      {
        customerName: "Jane Smith",
        lastOrderDate: "2025-02-15",
        orderId: "ORD124",
        lastOrderInDays: 10,
      },
    ],
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Customer Orders</h2>

      {/* Filters: Customer Name and Till Date */}
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          placeholder="Customer Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-1/3"
        />
        <input
          type="date"
          value={tillDate}
          onChange={(e) => setTillDate(e.target.value)}
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-1/3"
        />
      </div>

      {/* Table for Order Records */}
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr className="text-gray-600 text-sm font-semibold">
              <th className="px-4 py-3 text-left">Customer Name</th>
              <th className="px-4 py-3 text-left">Last Order Date</th>
              <th className="px-4 py-3 text-left">Order ID</th>
              <th className="px-4 py-3 text-left">Last Order (in Days)</th>
            </tr>
          </thead>
          <tbody>
            {orderData.records.map((record, index) => (
              <tr
                key={index}
                className="bg-white hover:bg-gray-50 transition-all duration-300 ease-in-out"
              >
                <td className="px-4 py-3 border">{record.customerName}</td>
                <td className="px-4 py-3 border">{record.lastOrderDate}</td>
                <td className="px-4 py-3 border">{record.orderId}</td>
                <td className="px-4 py-3 border">{record.lastOrderInDays}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerOrders;
