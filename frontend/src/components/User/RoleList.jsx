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
  const [roles, setRoles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await axios.get(
          "http://192.168.1.13:5000/admincreatingrole/api/roles"
        );
        setRoles(response.data);
      } catch (error) {
        console.error("Error fetching roles:", error);
      }
    };
    fetchRoles();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentRoles = roles.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(roles.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-grow">
        <Sidebar />
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
          {/* <table className="w-full border-collapse border border-black">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 text-left">#</th>
                <th className="px-4 py-2 text-left">Store Name</th>
                <th className="px-4 py-2 text-left">Role Name</th>
                <th className="px-4 py-2 text-left">Description</th>
                <th className="px-4 py-2 text-left">Permissions</th>
                <th className="px-4 py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentRoles.map((role, index) => (
                <tr key={role._id} className="">
                  <td className="px-4 py-2">{indexOfFirstItem + index + 1}</td>
                  <td className="px-4 py-2">{role.storeName}</td>
                  <td className="px-4 py-2">{role.roleName}</td>
                  <td className="px-4 py-2">{role.description}</td>
                  <td className="px-4 py-2">
                    {role.permissions.map((perm) => (
                      <div key={perm._id}>
                        <strong>{perm.module}:</strong>{" "}
                        {perm.actions.join(", ")}
                      </div>
                    ))}
                  </td>
                  <td className="px-4 py-2">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Action
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table> */}
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
              {currentRoles.map((role, index) => (
                <tr key={role._id} className="border border-black">
                  <td className="px-4 py-2 border border-black">
                    {indexOfFirstItem + index + 1}
                  </td>
                  <td className="px-4 py-2 border border-black">
                    {role.storeName}
                  </td>
                  <td className="px-4 py-2 border border-black">
                    {role.roleName}
                  </td>
                  <td className="px-4 py-2 border border-black">
                    {role.description}
                  </td>
                  <td className="px-4 py-2 border border-black">
                    {role.permissions.map((perm) => (
                      <div key={perm._id} className="">
                        <strong>{perm.module}:</strong>{" "}
                        {perm.actions.join(", ")}
                      </div>
                    ))}
                  </td>
                  <td className="px-4 py-2 border border-black">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleList;
