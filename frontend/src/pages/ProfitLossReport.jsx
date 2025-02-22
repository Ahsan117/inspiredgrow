import React, { useState } from "react";

const ProfitLossReport = () => {
  // State for date range
  const [startDate, setStartDate] = useState("2025-01-23"); // Initial start date
  const [endDate, setEndDate] = useState("2025-02-21"); // Initial end date

  // Handlers to update date range
  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  // Static report data
  const reportData = {
    grossProfit: 0.00,
    netProfit: 0.00,
    openingStock: 0.00,
    purchase: {
      totalPurchase: 0.00,
      totalPurchaseTax: 0.00,
      totalOtherCharges: 0.00,
      totalDiscount: 0.00,
      paidPayment: 0.00,
      purchaseDue: 0.00,
    },
    purchaseReturn: {
      totalPurchaseReturn: 0.00,
      totalPurchaseReturnTax: 0.00,
      totalOtherChargesReturn: 0.00,
      totalDiscountReturn: 0.00,
    },
    totalExpense: 0.00,
    sales: {
      salesBeforeTax: 0.00,
      totalSalesTax: 0.00,
      totalOtherCharges: 0.00,
      totalDiscount: 0.00,
      couponDiscount: 0.00,
      totalSales: 0.00,
      paidPayment: 0.00,
      salesDue: 0.00,
    },
    salesReturn: {
      totalSalesReturn: 0.00,
      totalSalesReturnTax: 0.00,
      totalOtherChargesReturn: 0.00,
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Profit & Loss Report</h2>

      {/* Date Selector */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-sm">
          <span className="font-medium text-gray-700">Select Date</span>
          
          {/* Start Date Picker */}
          <input
            type="date"
            value={startDate}
            onChange={handleStartDateChange}
            className="border px-3 py-2 rounded-lg"
          />
          <span className="text-gray-600">-</span>

          {/* End Date Picker */}
          <input
            type="date"
            value={endDate}
            onChange={handleEndDateChange}
            className="border px-3 py-2 rounded-lg"
          />
        </div>
      </div>

      {/* Gross Profit & Net Profit Table */}
      <div className="mb-6">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 py-2 px-4 text-left">Item</th>
              <th className="border border-gray-300 py-2 px-4 text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 py-2 px-4">Gross Profit</td>
              <td className="border border-gray-300 py-2 px-4 text-right">{reportData.grossProfit.toFixed(2)}</td>
            </tr>
            <tr>
              <td className="border border-gray-300 py-2 px-4">Net Profit</td>
              <td className="border border-gray-300 py-2 px-4 text-right">{reportData.netProfit.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Purchase Section Table */}
      <div className="mb-6">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 py-2 px-4 text-left">Item</th>
              <th className="border border-gray-300 py-2 px-4 text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 py-2 px-4">Opening Stock</td>
              <td className="border border-gray-300 py-2 px-4 text-right">{reportData.openingStock.toFixed(2)}</td>
            </tr>

            {/* Purchase Subsection */}
            <tr>
              <td colSpan={2} className="border border-gray-300 py-2 px-4 bg-gray-100 font-bold">Purchase</td>
            </tr>
            <tr>
              <td className="border border-gray-300 py-2 px-4">Total Purchase</td>
              <td className="border border-gray-300 py-2 px-4 text-right">{reportData.purchase.totalPurchase.toFixed(2)}</td>
            </tr>
            <tr>
              <td className="border border-gray-300 py-2 px-4">Total Purchase Tax</td>
              <td className="border border-gray-300 py-2 px-4 text-right">{reportData.purchase.totalPurchaseTax.toFixed(2)}</td>
            </tr>
            <tr>
              <td className="border border-gray-300 py-2 px-4">Total Other Charges of Purchase</td>
              <td className="border border-gray-300 py-2 px-4 text-right">{reportData.purchase.totalOtherCharges.toFixed(2)}</td>
            </tr>
            <tr>
              <td className="border border-gray-300 py-2 px-4">Total Discount on Purchase</td>
              <td className="border border-gray-300 py-2 px-4 text-right">{reportData.purchase.totalDiscount.toFixed(2)}</td>
            </tr>
            <tr>
              <td className="border border-gray-300 py-2 px-4">Paid Payment</td>
              <td className="border border-gray-300 py-2 px-4 text-right">{reportData.purchase.paidPayment.toFixed(2)}</td>
            </tr>
            <tr>
              <td className="border border-gray-300 py-2 px-4">Purchase Due</td>
              <td className="border border-gray-300 py-2 px-4 text-right">{reportData.purchase.purchaseDue.toFixed(2)}</td>
            </tr>

            {/* Purchase Return Subsection */}
            <tr>
              <td colSpan={2} className="border border-gray-300 py-2 px-4 bg-gray-100 font-bold">Purchase Return</td>
            </tr>
            <tr>
              <td className="border border-gray-300 py-2 px-4">Total Purchase Return</td>
              <td className="border border-gray-300 py-2 px-4 text-right">{reportData.purchaseReturn.totalPurchaseReturn.toFixed(2)}</td>
            </tr>
            <tr>
              <td className="border border-gray-300 py-2 px-4">Total Purchase Return Tax</td>
              <td className="border border-gray-300 py-2 px-4 text-right">{reportData.purchaseReturn.totalPurchaseReturnTax.toFixed(2)}</td>
            </tr>
            <tr>
              <td className="border border-gray-300 py-2 px-4">Total Other Charges of Purchase Return</td>
              <td className="border border-gray-300 py-2 px-4 text-right">{reportData.purchaseReturn.totalOtherChargesReturn.toFixed(2)}</td>
            </tr>
            <tr>
              <td className="border border-gray-300 py-2 px-4">Total Discount on Purchase Return</td>
              <td className="border border-gray-300 py-2 px-4 text-right">{reportData.purchaseReturn.totalDiscountReturn.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Sales Section Table */}
      <div className="mb-6">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 py-2 px-4 text-left">Item</th>
              <th className="border border-gray-300 py-2 px-4 text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 py-2 px-4">Total Expense</td>
              <td className="border border-gray-300 py-2 px-4 text-right">{reportData.totalExpense.toFixed(2)}</td>
            </tr>

            {/* Sales Subsection */}
            <tr>
              <td colSpan={2} className="border border-gray-300 py-2 px-4 bg-gray-100 font-bold">Sales</td>
            </tr>
            <tr>
              <td className="border border-gray-300 py-2 px-4">Sales (Before Tax)</td>
              <td className="border border-gray-300 py-2 px-4 text-right">{reportData.sales.salesBeforeTax.toFixed(2)}</td>
            </tr>
            <tr>
              <td className="border border-gray-300 py-2 px-4">Total Sales Tax</td>
              <td className="border border-gray-300 py-2 px-4 text-right">{reportData.sales.totalSalesTax.toFixed(2)}</td>
            </tr>
            <tr>
              <td className="border border-gray-300 py-2 px-4">Total Other Charges of Sales</td>
              <td className="border border-gray-300 py-2 px-4 text-right">{reportData.sales.totalOtherCharges.toFixed(2)}</td>
            </tr>
            <tr>
              <td className="border border-gray-300 py-2 px-4">Total Discount on Sales</td>
              <td className="border border-gray-300 py-2 px-4 text-right">{reportData.sales.totalDiscount.toFixed(2)}</td>
            </tr>
            <tr>
              <td className="border border-gray-300 py-2 px-4">Coupon Discount</td>
              <td className="border border-gray-300 py-2 px-4 text-right">{reportData.sales.couponDiscount.toFixed(2)}</td>
            </tr>
            <tr>
              <td className="border border-gray-300 py-2 px-4">Total Sales</td>
              <td className="border border-gray-300 py-2 px-4 text-right">{reportData.sales.totalSales.toFixed(2)}</td>
            </tr>
            <tr>
              <td className="border border-gray-300 py-2 px-4">Paid Payment</td>
              <td className="border border-gray-300 py-2 px-4 text-right">{reportData.sales.paidPayment.toFixed(2)}</td>
            </tr>
            <tr>
              <td className="border border-gray-300 py-2 px-4">Sales Due</td>
              <td className="border border-gray-300 py-2 px-4 text-right">{reportData.sales.salesDue.toFixed(2)}</td>
            </tr>

            {/* Sales Return Subsection */}
            <tr>
              <td colSpan={2} className="border border-gray-300 py-2 px-4 bg-gray-100 font-bold">Sales Return</td>
            </tr>
            <tr>
              <td className="border border-gray-300 py-2 px-4">Total Sales Return</td>
              <td className="border border-gray-300 py-2 px-4 text-right">{reportData.salesReturn.totalSalesReturn.toFixed(2)}</td>
            </tr>
            <tr>
              <td className="border border-gray-300 py-2 px-4">Total Sales Return Tax</td>
              <td className="border border-gray-300 py-2 px-4 text-right">{reportData.salesReturn.totalSalesReturnTax.toFixed(2)}</td>
            </tr>
            <tr>
              <td className="border border-gray-300 py-2 px-4">Total Other Charges of Sales Return</td>
              <td className="border border-gray-300 py-2 px-4 text-right">{reportData.salesReturn.totalOtherChargesReturn.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProfitLossReport;
