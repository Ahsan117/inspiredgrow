// import { useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar.jsx";
// import Sidebar from "../components/Sidebar.jsx";
// import AddUser from "../components/AddUser.jsx";

// const AdminDashboard = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/admin-login");
//   };

//   return (
//     <div>
//       <Navbar />
//       <div style={{ display: "flex" }}>
//         <Sidebar />
//         <div style={{ padding: "20px" }}>
//           <h2>Admin Dashboard</h2>
//           <AddUser />
//           <button onClick={handleLogout}>Logout</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const AdminDashboard = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-grow">
        <Sidebar />
        <div className="p-6 w-full">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">
            Admin Dashboard
          </h2>
          {/* <AddUser /> */}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
