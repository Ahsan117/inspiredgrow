import React, { useState } from "react";

const SalesPaymentReport = () => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [customerName, setCustomerName] = useState("");

  // Example report data for the table
  const reportData = {
    records: [
      {
        name: "John Doe",
        mobile: "1234567890",
        previousDue: 100.00,
        date: "2025-02-21",
        invoiceNo: "INV123",
        refBillNo: "RB123",
        description: "Product A",
        qty: 2,
        billAmt: 200.00,
        receive: 200.00,
        total: 200.00,
      },
      {
        name: "Jane Smith",
        mobile: "0987654321",
        previousDue: 150.00,
        date: "2025-02-20",
        invoiceNo: "INV124",
        refBillNo: "RB124",
        description: "Product B",
        qty: 3,
        billAmt: 300.00,
        receive: 300.00,
        total: 300.00,
      },
    ],
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Sales & Payment Report</h2>

      {/* Filters: Date and Customer Name */}
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <input
          type="date"
          placeholder="From Date"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-1/3"
        />
        <input
          type="date"
          placeholder="To Date"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-1/3"
        />
        <input
          type="text"
          placeholder="Customer Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-1/3"
        />
      </div>

      {/* Records Table */}
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr className="text-gray-600 text-sm font-semibold">
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Mobile</th>
              <th className="px-4 py-3 text-left">Previous Due</th>
              <th className="px-4 py-3 text-left">Date</th>
              <th className="px-4 py-3 text-left">Invoice No.</th>
              <th className="px-4 py-3 text-left">Referenced Bill No.</th>
              <th className="px-4 py-3 text-left">Description</th>
              <th className="px-4 py-3 text-left">Qty</th>
              <th className="px-4 py-3 text-right">Bill Amt(₹)</th>
              <th className="px-4 py-3 text-right">Receive(₹)</th>
              <th className="px-4 py-3 text-right">Total(₹)</th>
            </tr>
          </thead>
          <tbody>
            {reportData.records.map((record, index) => (
              <tr key={index} className="bg-white hover:bg-gray-50 transition-all duration-300 ease-in-out">
                <td className="px-4 py-3 border">{record.name}</td>
                <td className="px-4 py-3 border">{record.mobile}</td>
                <td className="px-4 py-3 border">{record.previousDue.toFixed(2)}</td>
                <td className="px-4 py-3 border">{record.date}</td>
                <td className="px-4 py-3 border">{record.invoiceNo}</td>
                <td className="px-4 py-3 border">{record.refBillNo}</td>
                <td className="px-4 py-3 border">{record.description}</td>
                <td className="px-4 py-3 border">{record.qty}</td>
                <td className="px-4 py-3 border text-right">{record.billAmt.toFixed(2)}</td>
                <td className="px-4 py-3 border text-right">{record.receive.toFixed(2)}</td>
                <td className="px-4 py-3 border text-right">{record.total.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesPaymentReport;
