// // // ==============================================
// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import Navbar from "../Navbar";
// // import Sidebar from "../Sidebar";

// // const CreateRolelist = () => {
// //   const [roleName, setRoleName] = useState("");
// //   const [storename, setstorename] = useState("");
// //   const [description, setDescription] = useState("");

// //   const modules = [
// //     { id: 1, name: "Users" },
// //     { id: 2, name: "Roles" },
// //     { id: 3, name: "Tax" },
// //     { id: 4, name: "Units" },
// //     { id: 5, name: "Payment types" },
// //     { id: 6, name: "Warehouse" },
// //     { id: 7, name: "Store(Own Store)" },
// //     { id: 8, name: "Dashboard" },
// //     { id: 9, name: "Accounts" },
// //     { id: 10, name: "Expense" },
// //     { id: 11, name: "Items" },
// //     { id: 12, name: "Services" },
// //     { id: 13, name: "Stock Transfer" },
// //     { id: 14, name: "Stock Adjustment" },
// //     { id: 15, name: "Brand" },
// //     { id: 16, name: "Variant" },
// //     { id: 17, name: "Suppliers" },
// //     { id: 18, name: "Customers" },
// //     { id: 19, name: "Customers Advance Payments" },
// //     { id: 20, name: "Purchase" },
// //     { id: 21, name: "Purchase return" },
// //     { id: 22, name: "Sales(Include POS)" },
// //     { id: 23, name: "Customer Coupon" },
// //     { id: 24, name: "Discount Coupon" },
// //     { id: 25, name: "Quotation" },
// //     { id: 26, name: "Sales Return" },
// //     { id: 27, name: "SMS/Whatsapp" },
// //     { id: 28, name: "Package Subscription" },
// //     { id: 29, name: "Reports" },
// //     { id: 30, name: "Help Documentation Link" },
// //   ];

// //   const permissions = ["Add", "Edit", "Delete", "View"];
// //   return (
// //     <div className="flex flex-col h-screen ">
// //       {/* <Navbar /> */}
// //       <Navbar />
// //       <div className="flex flex-grow">
// //         {/* <Sidebar /> */}
// //         <Sidebar />
// //         <div className="container mx-auto py-10 p-10">
// //           <div className="container   ">
// //             <div className="bg-white shadow-md rounded-lg p-8">
// //               <h1 className="text-2xl font-bold mb-6">New Role</h1>
// //               <form>
// //                 <div className="mb-4">
// //                   <label
// //                     className="block font-semibold mb-2"
// //                     htmlFor="roleName"
// //                   >
// //                     Role Name<span className="text-red-500">*</span>
// //                   </label>
// //                   <input
// //                     type="text"
// //                     id="roleName"
// //                     className="border border-gray-300 rounded-md w-full p-2"
// //                     value={roleName}
// //                     onChange={(e) => setRoleName(e.target.value)}
// //                     placeholder="Enter role name"
// //                   />
// //                 </div>
// //                 <div className="mb-4">
// //                   <label
// //                     className="block font-semibold mb-2"
// //                     htmlFor="storename"
// //                   >
// //                     Store Name<span className="text-red-500">*</span>
// //                   </label>
// //                   <input
// //                     type="text"
// //                     id="roleName"
// //                     className="border border-gray-300 rounded-md w-full p-2"
// //                     value={storename}
// //                     onChange={(e) => setstorename(e.target.value)}
// //                     placeholder="Enter role name"
// //                   />
// //                 </div>
// //                 <div className="mb-4">
// //                   <label
// //                     className="block font-semibold mb-2"
// //                     htmlFor="description"
// //                   >
// //                     Description
// //                   </label>
// //                   <textarea
// //                     id="description"
// //                     className="border border-gray-300 rounded-md w-full p-2"
// //                     rows="3"
// //                     value={description}
// //                     onChange={(e) => setDescription(e.target.value)}
// //                     placeholder="Enter description"
// //                   ></textarea>
// //                 </div>
// //                 <div className="mt-6">
// //                   <table className="min-w-full bg-gray-50">
// //                     <thead>
// //                       <tr className="bg-gray-300">
// //                         <th className="border px-4 py-2 text-left">#</th>
// //                         <th className="border px-4 py-2 text-left">Modules</th>
// //                         <th className="border px-4 py-2 text-center">
// //                           Select All
// //                         </th>
// //                         <th className="border px-4 py-2 text-center">
// //                           Specific Permissions
// //                         </th>
// //                       </tr>
// //                     </thead>
// //                     <tbody>
// //                       {modules.map((module, index) => (
// //                         <tr key={module.id}>
// //                           <td className="border px-4 py-2">{index + 1}</td>
// //                           <td className="border px-4 py-2">{module.name}</td>
// //                           <td className="border px-4 py-2 text-center">
// //                             <input type="checkbox" /> &nbsp; select
// //                           </td>
// //                           <td className="border px-4 py-2">
// //                             <div className="flex flex-col justify-around">
// //                               {permissions.map((permission) => (
// //                                 <label
// //                                   key={permission}
// //                                   className="flex items-center space-x-2"
// //                                 >
// //                                   <input type="checkbox" />
// //                                   <span>{permission}</span>
// //                                 </label>
// //                               ))}
// //                             </div>
// //                           </td>
// //                         </tr>
// //                       ))}
// //                     </tbody>
// //                   </table>
// //                 </div>
// //                 <div className="mt-6 flex justify-center gap-10  ">
// //                   <button
// //                     type="submit"
// //                     className="bg-green-500 w-[150px] text-white px-4 py-2 rounded-md hover:bg-blue-600"
// //                   >
// //                     Save
// //                   </button>
// //                   <button
// //                     type="submit"
// //                     className="bg-orange-500 w-[150px] text-white px-4 py-2 rounded-md hover:bg-blue-600"
// //                   >
// //                     Close
// //                   </button>
// //                 </div>
// //               </form>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CreateRolelist;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import Navbar from "../Navbar";
// import Sidebar from "../Sidebar";

// const CreateRolelist = () => {
//   const [roleName, setRoleName] = useState("");
//   const [storeName, setStoreName] = useState("");
//   const [description, setDescription] = useState("");
//   const [selectedPermissions, setSelectedPermissions] = useState({});
//   const navigate = useNavigate();

//   const modules = [
//     "Users",
//     "Roles",
//     "Tax",
//     "Units",
//     "Payment types",
//     "Warehouse",
//     "Store(Own Store)",
//     "Dashboard",
//     "Accounts",
//     "Expense",
//     "Items",
//     "Services",
//     "Stock Transfer",
//     "Stock Adjustment",
//     "Brand",
//     "Variant",
//     "Suppliers",
//     "Customers",
//     "Customers Advance Payments",
//     "Purchase",
//     "Purchase return",
//     "Sales(Include POS)",
//     "Customer Coupon",
//     "Discount Coupon",
//     "Quotation",
//     "Sales Return",
//     "SMS/Whatsapp",
//     "Package Subscription",
//     "Reports",
//     "Help Documentation Link",
//   ];

//   const permissions = ["Add", "Edit", "Delete", "View"];

//   const handlePermissionChange = (module, action) => {
//     setSelectedPermissions((prev) => {
//       const updatedPermissions = { ...prev };
//       if (!updatedPermissions[module]) {
//         updatedPermissions[module] = [];
//       }
//       if (updatedPermissions[module].includes(action)) {
//         updatedPermissions[module] = updatedPermissions[module].filter(
//           (perm) => perm !== action
//         );
//       } else {
//         updatedPermissions[module].push(action);
//       }
//       return updatedPermissions;
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const roleData = {
//       roleName,
//       storeName,
//       description,
//       permissions: Object.entries(selectedPermissions).map(
//         ([module, actions]) => ({ module, actions })
//       ),
//     };

//     try {
//       const response = await axios.post(
//         "http://localhost:5000/admincreatingrole/api/roles",
//         roleData,
//         { headers: { "Content-Type": "application/json" } }
//       );
//       console.log("Role Created Successfully:", response.data);
//       alert("Role created successfully!");
//       navigate("/roles");
//     } catch (error) {
//       console.error("Error creating role:", error);
//       alert("Failed to create role. Please try again.");
//     }
//   };

//   return (
//     <div className="flex flex-col h-screen">
//       <Navbar />
//       <div className="flex flex-grow">
//         <Sidebar />
//         <div className="container mx-auto py-10 p-10">
//           <div className="bg-white shadow-md rounded-lg p-8">
//             <h1 className="text-2xl font-bold mb-6">New Role</h1>
//             <form onSubmit={handleSubmit}>
//               <div className="mb-4">
//                 <label className="block font-semibold mb-2">
//                   Role Name<span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   className="border w-full p-2"
//                   value={roleName}
//                   onChange={(e) => setRoleName(e.target.value)}
//                   placeholder="Enter role name"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block font-semibold mb-2">
//                   Store Name<span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   className="border w-full p-2"
//                   value={storeName}
//                   onChange={(e) => setStoreName(e.target.value)}
//                   placeholder="Enter store name"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block font-semibold mb-2">Description</label>
//                 <textarea
//                   className="border w-full p-2"
//                   value={description}
//                   onChange={(e) => setDescription(e.target.value)}
//                   placeholder="Enter description"
//                 ></textarea>
//               </div>
//               <div className="mt-6">
//                 <table className="min-w-full bg-gray-50">
//                   <thead>
//                     <tr className="bg-gray-300">
//                       <th className="border px-4 py-2">#</th>
//                       <th className="border px-4 py-2">Modules</th>
//                       <th className="border px-4 py-2">Permissions</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {modules.map((module, index) => (
//                       <tr key={module}>
//                         <td className="border px-4 py-2">{index + 1}</td>
//                         <td className="border px-4 py-2">{module}</td>
//                         <td className="border px-4 py-2">
//                           <div className="flex space-x-4">
//                             {permissions.map((permission) => (
//                               <label
//                                 key={permission}
//                                 className="flex items-center"
//                               >
//                                 <input
//                                   type="checkbox"
//                                   checked={
//                                     selectedPermissions[module]?.includes(
//                                       permission
//                                     ) || false
//                                   }
//                                   onChange={() =>
//                                     handlePermissionChange(module, permission)
//                                   }
//                                 />
//                                 <span className="ml-1">{permission}</span>
//                               </label>
//                             ))}
//                           </div>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//               <div className="mt-6 flex justify-center gap-10">
//                 <button
//                   type="submit"
//                   className="bg-green-500 w-[150px] text-white px-4 py-2 rounded-md hover:bg-green-600"
//                 >
//                   Save
//                 </button>
//                 <button
//                   type="button"
//                   className="bg-orange-500 w-[150px] text-white px-4 py-2 rounded-md hover:bg-orange-600"
//                   onClick={() => navigate("/roles")}
//                 >
//                   Close
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreateRolelist;
// ==================================
import React, { useState } from "react";
import axios from "axios";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";

const CreateRolelist = () => {
  const [roleName, setRoleName] = useState("");
  const [storeName, setStoreName] = useState("");
  const [description, setDescription] = useState("");
  const [permissions, setPermissions] = useState({});

  const modules = [
    { id: 1, name: "Users" },
    { id: 2, name: "Roles" },
    { id: 3, name: "Tax" },
    { id: 4, name: "Units" },
    { id: 5, name: "Payment types" },
    { id: 6, name: "Warehouse" },
  ];

  const permissionTypes = ["Add", "Edit", "Delete", "View"];

  const togglePermission = (module, action) => {
    setPermissions((prevPermissions) => {
      const updatedPermissions = { ...prevPermissions };

      if (!updatedPermissions[module]) {
        updatedPermissions[module] = [];
      }

      // Toggle action
      if (updatedPermissions[module].includes(action)) {
        updatedPermissions[module] = updatedPermissions[module].filter(
          (perm) => perm !== action
        );
      } else {
        updatedPermissions[module].push(action);
      }

      // Remove module if no permissions left
      if (updatedPermissions[module].length === 0) {
        delete updatedPermissions[module];
      }

      return updatedPermissions;
    });
  };

  const handleSelectAll = (module) => {
    setPermissions((prevPermissions) => {
      const allSelected =
        prevPermissions[module]?.length === permissionTypes.length;
      const updatedPermissions = { ...prevPermissions };

      if (allSelected) {
        delete updatedPermissions[module]; // Deselect all
      } else {
        updatedPermissions[module] = [...permissionTypes]; // Select all
      }

      return updatedPermissions;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedPermissions = Object.keys(permissions).map((module) => ({
      module,
      actions: permissions[module],
    }));

    const payload = {
      roleName,
      storeName,
      description,
      permissions: formattedPermissions,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/admincreatingrole/api/roles",
        payload
      );
      console.log("Role created:", response.data);
      setRoleName(" ");
      setStoreName(" ");
      setPermissions(" ");
      setDescription(" ");
    } catch (error) {
      console.error("Error creating role:", error);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-grow">
        <Sidebar />
        <div className="container mx-auto p-10">
          <div className="bg-white shadow-md rounded-lg p-8">
            <h1 className="text-2xl font-bold mb-6">New Role</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block font-semibold mb-2">Role Name</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded-md w-full p-2"
                  value={roleName}
                  onChange={(e) => setRoleName(e.target.value)}
                  placeholder="Enter role name"
                />
              </div>
              <div className="mb-4">
                <label className="block font-semibold mb-2">Store Name</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded-md w-full p-2"
                  value={storeName}
                  onChange={(e) => setStoreName(e.target.value)}
                  placeholder="Enter store name"
                />
              </div>
              <div className="mb-4">
                <label className="block font-semibold mb-2">Description</label>
                <textarea
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
                      <th className="border px-4 py-2">#</th>
                      <th className="border px-4 py-2">Modules</th>
                      <th className="border px-4 py-2 text-center">
                        Permissions
                      </th>
                      <th className="border px-4 py-2 text-center">
                        Select All
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {modules.map((module, index) => (
                      <tr key={module.id}>
                        <td className="border px-4 py-2">{index + 1}</td>
                        <td className="border px-4 py-2">{module.name}</td>
                        <td className="border px-4 py-2">
                          <div className="flex flex-wrap gap-2">
                            {permissionTypes.map((permission) => (
                              <label
                                key={permission}
                                className="flex items-center space-x-2"
                              >
                                <input
                                  type="checkbox"
                                  checked={
                                    permissions[module.name]?.includes(
                                      permission
                                    ) || false
                                  }
                                  onChange={() =>
                                    togglePermission(module.name, permission)
                                  }
                                />
                                <span>{permission}</span>
                              </label>
                            ))}
                          </div>
                        </td>
                        <td className="border px-4 py-2 text-center">
                          <input
                            type="checkbox"
                            checked={
                              permissions[module.name]?.length ===
                              permissionTypes.length
                            }
                            onChange={() => handleSelectAll(module.name)}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 flex justify-center gap-10">
                <button
                  type="submit"
                  className="bg-green-500 w-[150px] text-white px-4 py-2 rounded-md"
                >
                  Save
                </button>
                <button
                  type="button"
                  className="bg-orange-500 w-[150px] text-white px-4 py-2 rounded-md"
                  onClick={() => {
                    setRoleName("");
                    setStoreName("");
                    setDescription("");
                    setPermissions({});
                  }}
                >
                  Clear
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateRolelist;
