// import React, { useState } from "react";
// import Sidebar from "../Sidebar";
// import Navbar from "../Navbar";

// const CreateRolelist = () => {
//   const [roleName, setRoleName] = useState("");
//   const [storename, setstorename] = useState("");
//   const [description, setDescription] = useState("");

//   const modules = [
//     { id: 1, name: "Users" },
//     { id: 2, name: "Roles" },
//     { id: 3, name: "Tax" },
//     { id: 4, name: "Units" },
//     { id: 5, name: "Payment types" },
//     { id: 6, name: "Warehouse" },
//     { id: 7, name: "Store(Own Store)" },
//     { id: 8, name: "Dashboard" },
//     { id: 9, name: "Accounts" },
//     { id: 10, name: "Expense" },
//     { id: 11, name: "Items" },
//     { id: 12, name: "Services" },
//     { id: 13, name: "Stock Transfer" },
//     { id: 14, name: "Stock Adjustment" },
//     { id: 15, name: "Brand" },
//     { id: 16, name: "Variant" },
//     { id: 17, name: "Suppliers" },
//     { id: 18, name: "Customers" },
//     { id: 19, name: "Customers Advance Payments" },
//     { id: 20, name: "Purchase" },
//     { id: 21, name: "Purchase return" },
//     { id: 22, name: "Sales(Include POS)" },
//     { id: 23, name: "Customer Coupon" },
//     { id: 24, name: "Discount Coupon" },
//     { id: 25, name: "Quotation" },
//     { id: 26, name: "Sales Return" },
//     { id: 27, name: "SMS/Whatsapp" },
//     { id: 28, name: "Package Subscription" },
//     { id: 29, name: "Reports" },
//     { id: 30, name: "Help Documentation Link" },
//   ];

//   const permissions = ["Add", "Edit", "Delete", "View"];

//   return (
//     <div className="flex flex-col h-screen ">
//       {/* <Navbar /> */}
//       <Navbar />
//       <div className="flex flex-grow">
//         {/* <Sidebar /> */}
//         <Sidebar />
//       </div>
//       <div className="container  py-20 p-10">
//         <div className="bg-white shadow-md rounded-lg p-8">
//           <h1 className="text-2xl font-bold mb-6">New Role</h1>
//           <form>
//             <div className="mb-4">
//               <label className="block font-semibold mb-2" htmlFor="roleName">
//                 Role Name<span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 id="roleName"
//                 className="border border-gray-300 rounded-md w-full p-2"
//                 value={roleName}
//                 onChange={(e) => setRoleName(e.target.value)}
//                 placeholder="Enter role name"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block font-semibold mb-2" htmlFor="storename">
//                 Store Name<span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 id="roleName"
//                 className="border border-gray-300 rounded-md w-full p-2"
//                 value={storename}
//                 onChange={(e) => setstorename(e.target.value)}
//                 placeholder="Enter role name"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block font-semibold mb-2" htmlFor="description">
//                 Description
//               </label>
//               <textarea
//                 id="description"
//                 className="border border-gray-300 rounded-md w-full p-2"
//                 rows="3"
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 placeholder="Enter description"
//               ></textarea>
//             </div>
//             <div className="mt-6">
//               <table className="min-w-full bg-gray-50">
//                 <thead>
//                   <tr className="bg-gray-300">
//                     <th className="border px-4 py-2 text-left">#</th>
//                     <th className="border px-4 py-2 text-left">Modules</th>
//                     <th className="border px-4 py-2 text-center">Select All</th>
//                     <th className="border px-4 py-2 text-center">
//                       Specific Permissions
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {modules.map((module, index) => (
//                     <tr key={module.id}>
//                       <td className="border px-4 py-2">{index + 1}</td>
//                       <td className="border px-4 py-2">{module.name}</td>
//                       <td className="border px-4 py-2 text-center">
//                         <input type="checkbox" /> &nbsp; select
//                       </td>
//                       <td className="border px-4 py-2">
//                         <div className="flex flex-col justify-around">
//                           {permissions.map((permission) => (
//                             <label
//                               key={permission}
//                               className="flex items-center space-x-2"
//                             >
//                               <input type="checkbox" />
//                               <span>{permission}</span>
//                             </label>
//                           ))}
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//             <div className="mt-6 flex justify-center gap-10  ">
//               <button
//                 type="submit"
//                 className="bg-green-500 w-[150px] text-white px-4 py-2 rounded-md hover:bg-blue-600"
//               >
//                 Save
//               </button>
//               <button
//                 type="submit"
//                 className="bg-orange-500 w-[150px] text-white px-4 py-2 rounded-md hover:bg-blue-600"
//               >
//                 Close
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreateRolelist;
// ==============================================
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

const CreateRolelist = () => {
  const [roleName, setRoleName] = useState("");
  const [storename, setstorename] = useState("");
  const [description, setDescription] = useState("");

  const modules = [
    { id: 1, name: "Users" },
    { id: 2, name: "Roles" },
    { id: 3, name: "Tax" },
    { id: 4, name: "Units" },
    { id: 5, name: "Payment types" },
    { id: 6, name: "Warehouse" },
    { id: 7, name: "Store(Own Store)" },
    { id: 8, name: "Dashboard" },
    { id: 9, name: "Accounts" },
    { id: 10, name: "Expense" },
    { id: 11, name: "Items" },
    { id: 12, name: "Services" },
    { id: 13, name: "Stock Transfer" },
    { id: 14, name: "Stock Adjustment" },
    { id: 15, name: "Brand" },
    { id: 16, name: "Variant" },
    { id: 17, name: "Suppliers" },
    { id: 18, name: "Customers" },
    { id: 19, name: "Customers Advance Payments" },
    { id: 20, name: "Purchase" },
    { id: 21, name: "Purchase return" },
    { id: 22, name: "Sales(Include POS)" },
    { id: 23, name: "Customer Coupon" },
    { id: 24, name: "Discount Coupon" },
    { id: 25, name: "Quotation" },
    { id: 26, name: "Sales Return" },
    { id: 27, name: "SMS/Whatsapp" },
    { id: 28, name: "Package Subscription" },
    { id: 29, name: "Reports" },
    { id: 30, name: "Help Documentation Link" },
  ];

  const permissions = ["Add", "Edit", "Delete", "View"];
  return (
    <div className="flex flex-col h-screen ">
      {/* <Navbar /> */}
      <Navbar />
      <div className="flex flex-grow">
        {/* <Sidebar /> */}
        <Sidebar />
        <div className="container mx-auto py-10 p-10">
          {/* <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Role     List</h1>

            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => navigate("/admin/add/user")}
            >
              + Create User
            </button>
          </div>
          <div className="flex justify-start mb-4">
            <select
              className="px-4 py-2 border border-gray-300 rounded-md"
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
            >
              <option value="10">10 entries</option>
              <option value="25">25 entries</option>
              <option value="50">50 entries</option>
              <option value="100">100 entries</option>
            </select>
          </div>

          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 text-left">#</th>
                <th className="px-4 py-2 text-left">Store Name</th>
                <th className="px-4 py-2 text-left">User Name</th>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Mobile</th>
                <th className="px-4 py-2 text-left">Email</th>
                <th className="px-4 py-2 text-left">Role</th>
                <th className="px-4 py-2 text-left">Created on</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((user, index) => (
                <tr key={user.id} className="border-b">
                  <td className="px-4 py-2">{indexOfFirstItem + index + 1}</td>
                  <td className="px-4 py-2">{user.storeName}</td>
                  <td className="px-4 py-2">{user.userName}</td>
                  <td className="px-4 py-2">{user.name}</td>
                  <td className="px-4 py-2">{user.mobile}</td>
                  <td className="px-4 py-2">{user.email}</td>
                  <td className="px-4 py-2">{user.role}</td>
                  <td className="px-4 py-2">{user.createdOn}</td>
                  <td className="px-4 py-2">{user.status}</td>
                  <td className="px-4 py-2">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Action
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-center mt-4">
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (pageNumber) => (
                <button
                  key={pageNumber}
                  className={`mx-2 px-4 py-2 rounded ${
                    currentPage === pageNumber
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                  onClick={() => handlePageChange(pageNumber)}
                >
                  {pageNumber}
                </button>
              )
            )}
          </div> */}
          <div className="container   ">
            <div className="bg-white shadow-md rounded-lg p-8">
              <h1 className="text-2xl font-bold mb-6">New Role</h1>
              <form>
                <div className="mb-4">
                  <label
                    className="block font-semibold mb-2"
                    htmlFor="roleName"
                  >
                    Role Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="roleName"
                    className="border border-gray-300 rounded-md w-full p-2"
                    value={roleName}
                    onChange={(e) => setRoleName(e.target.value)}
                    placeholder="Enter role name"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block font-semibold mb-2"
                    htmlFor="storename"
                  >
                    Store Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="roleName"
                    className="border border-gray-300 rounded-md w-full p-2"
                    value={storename}
                    onChange={(e) => setstorename(e.target.value)}
                    placeholder="Enter role name"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block font-semibold mb-2"
                    htmlFor="description"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    className="border border-gray-300 rounded-md w-full p-2"
                    rows="3"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter description"
                  ></textarea>
                </div>
                <div className="mt-6">
                  <table className="min-w-full bg-gray-50">
                    <thead>
                      <tr className="bg-gray-300">
                        <th className="border px-4 py-2 text-left">#</th>
                        <th className="border px-4 py-2 text-left">Modules</th>
                        <th className="border px-4 py-2 text-center">
                          Select All
                        </th>
                        <th className="border px-4 py-2 text-center">
                          Specific Permissions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {modules.map((module, index) => (
                        <tr key={module.id}>
                          <td className="border px-4 py-2">{index + 1}</td>
                          <td className="border px-4 py-2">{module.name}</td>
                          <td className="border px-4 py-2 text-center">
                            <input type="checkbox" /> &nbsp; select
                          </td>
                          <td className="border px-4 py-2">
                            <div className="flex flex-col justify-around">
                              {permissions.map((permission) => (
                                <label
                                  key={permission}
                                  className="flex items-center space-x-2"
                                >
                                  <input type="checkbox" />
                                  <span>{permission}</span>
                                </label>
                              ))}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 flex justify-center gap-10  ">
                  <button
                    type="submit"
                    className="bg-green-500 w-[150px] text-white px-4 py-2 rounded-md hover:bg-blue-600"
                  >
                    Save
                  </button>
                  <button
                    type="submit"
                    className="bg-orange-500 w-[150px] text-white px-4 py-2 rounded-md hover:bg-blue-600"
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateRolelist;
