// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../Navbar";
// import Sidebar from "../Sidebar";

// const RoleList = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage, setItemsPerPage] = useState(10);
//   const navigate = useNavigate("/");

//   // Dummy user data
//   const users = [
//     {
//       id: 1,
//       storeName: "grocery on wheels",
//       RoleName: "hisargow",
//       Description: "abhishek",
//       status: "Active",
//     },
//     {
//       id: 2,
//       storeName: "grocery on wheels",
//       RoleName: "hisargow",
//       Description: "abhishek",
//       status: "Active",
//     },
//     {
//       id: 3,
//       storeName: "grocery on wheels",
//       RoleName: "hisargow",
//       Description: "abhishek",
//       status: "Active",
//     },
//     {
//       id: 4,
//       storeName: "grocery on wheels",
//       RoleName: "hisargow",
//       Description: "abhishek",
//       status: "Active",
//     },
//     {
//       id: 5,
//       storeName: "grocery on wheels",
//       RoleName: "hisargow",
//       Description: "abhishek",
//       status: "Active",
//     },
//     {
//       id: 6,
//       storeName: "grocery on wheels",
//       RoleName: "hisargow",
//       Description: "abhishek",
//       status: "Active",
//     },
//     // Add more dummy user data here
//   ];

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentUsers = users.slice(indexOfFirstItem, indexOfLastItem);

//   const totalPages = Math.ceil(users.length / itemsPerPage);

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div className="flex flex-col h-screen ">
//       {/* <Navbar /> */}
//       <Navbar />
//       <div className="flex flex-grow">
//         {/* <Sidebar /> */}
//         <Sidebar />
//         <div className="container mx-auto py-10 p-10">
//           <div className="flex justify-between items-center mb-4">
//             <h1 className="text-2xl font-bold">
//               Role List &nbsp;
//               <span className="text-black text-[16px]">
//                 View/Search Items Category
//               </span>
//             </h1>

//             <button
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//               onClick={() => navigate("/admin/create/list")}
//             >
//               + Create User
//             </button>
//           </div>
//           <div>Store</div>
//           <div className="flex justify-start mb-4">
//             <select
//               className="px-4 py-2 border border-gray-300 rounded-md"
//               value={itemsPerPage}
//               onChange={(e) => setItemsPerPage(Number(e.target.value))}
//             >
//               <option value="10">SAAS ADMIN</option>
//               <option value="25">POS</option>
//               <option value="50">Keshav demo 1</option>
//               <option value="75">Keshav demo 2</option>
//               <option value="100">grocery on wheels</option>
//               <option value="125">Grocery ON WHEELS</option>
//             </select>
//           </div>
//           <table className="w-full border-collapse">
//             <thead>
//               <tr className="bg-gray-200">
//                 <th className="px-4 py-2 text-left">#</th>
//                 <th className="px-4 py-2 text-left">Store Name</th>
//                 <th className="px-4 py-2 text-left">Role Name</th>
//                 <th className="px-4 py-2 text-left">Description</th>
//                 <th className="px-4 py-2 text-left">Status</th>
//                 <th className="px-4 py-2 text-left">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentUsers.map((user, index) => (
//                 <tr key={user.id} className="border-b">
//                   <td className="px-4 py-2">{indexOfFirstItem + index + 1}</td>
//                   <td className="px-4 py-2">{user.storeName}</td>
//                   <td className="px-4 py-2">{user.RoleName}</td>
//                   <td className="px-4 py-2">{user.Description}</td>
//                   <td className="px-4 py-2">{user.status}</td>
//                   <td className="px-4 py-2">
//                     <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                       Action
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <div className="flex justify-center mt-4">
//             {Array.from({ length: totalPages }, (_, index) => index + 1).map(
//               (pageNumber) => (
//                 <button
//                   key={pageNumber}
//                   className={`mx-2 px-4 py-2 rounded ${
//                     currentPage === pageNumber
//                       ? "bg-blue-500 text-white"
//                       : "bg-gray-200 text-gray-700"
//                   }`}
//                   onClick={() => handlePageChange(pageNumber)}
//                 >
//                   {pageNumber}
//                 </button>
//               )
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RoleList;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import axios from "axios";

const RoleList = () => {
  const [roles, setRoles] = useState([]); // Ensure roles starts as an array
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRoles = async () => {
      const token = localStorage.getItem("token"); // Get token from localStorage
      if (!token) {
        console.error("No token found. Redirecting to login...");
        return;
      }
  
      try {
        const response = await axios.get("http://192.168.1.13:5000/admincreatingrole/api/roles", {
          headers: { Authorization: `Bearer ${token}` } // Attach token here
        });
  
        console.log("API Response:", response.data);
  
        if (response.data && Array.isArray(response.data.roles)) {
          setRoles(response.data.roles);
        } else {
          console.error("Unexpected API response:", response.data);
          setRoles([]);
        }
      } catch (error) {
        console.error("Error fetching roles:", error.response?.data || error.message);
        if (error.response?.status === 401) {
          console.error("Unauthorized. Redirecting to login...");
          localStorage.clear();
          navigate("/");
        }
        setRoles([]);
      }
    };
  
    fetchRoles();
  }, []);
  

  // Prevent slicing error by ensuring roles is an array
  const currentRoles = Array.isArray(roles) ? roles.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) : [];

  const totalPages = Math.ceil(roles.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Pass sidebar state to Navbar and Sidebar */}
      <Navbar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex flex-grow mt-20">
        <div className="w-64">
          <Sidebar isSidebarOpen={isSidebarOpen} />
        </div>
        <div className="container mx-auto py-10 p-10">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Role List</h1>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => navigate("/admin/create/list")}
            >
              + Create User
            </button>
          </div>

          {/* Table for displaying roles */}
          <table className="w-full border-collapse border border-black">
            <thead>
              <tr className="bg-gray-200 border border-black">
                <th className="px-4 py-2 border border-black">#</th>
                <th className="px-4 py-2 border border-black">Store Name</th>
                <th className="px-4 py-2 border border-black">Role Name</th>
                <th className="px-4 py-2 border border-black">Description</th>
                <th className="px-4 py-2 border border-black">Permissions</th>
                <th className="px-4 py-2 border border-black">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentRoles.length > 0 ? (
                currentRoles.map((role, index) => (
                  <tr key={role._id} className="border border-black">
                    <td className="px-4 py-2 border border-black">
                      {(currentPage - 1) * itemsPerPage + index + 1}
                    </td>
                    <td className="px-4 py-2 border border-black">{role.storeName || "N/A"}</td>
                    <td className="px-4 py-2 border border-black">{role.roleName || "N/A"}</td>
                    <td className="px-4 py-2 border border-black">{role.description || "No description"}</td>
                    <td className="px-4 py-2 border border-black">
                      {role.permissions && role.permissions.length > 0 ? (
                        role.permissions.map((perm, permIndex) => (
                          <div key={permIndex}>
                            <strong>{perm.module}:</strong> {perm.actions.join(", ")}
                          </div>
                        ))
                      ) : (
                        <span>No Permissions</span>
                      )}
                    </td>
                    <td className="px-4 py-2 border border-black">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Action
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="px-4 py-2 text-center">
                    No roles available
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Pagination */}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleList;

